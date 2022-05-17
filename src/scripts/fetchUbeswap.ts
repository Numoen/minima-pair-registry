import { ChainId } from "@dahlia-labs/celo-contrib";
import { Token } from "@dahlia-labs/token-utils";
import { getAddress } from "@ethersproject/address";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import fetch from "cross-fetch";
import * as fs from "fs/promises";

import type { Pool } from "..";
import { Exchange, minLiquidityUSD } from "..";
import type {
  PairsBulkQuery,
  PairsBulkQueryVariables,
} from "../apollo/generated/types";
import { PAIRS_BULK, PAIRS_CURRENT } from "../apollo/queries";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/ubeswap/ubeswap",
    fetch,
  }),
  cache: new InMemoryCache(),
});

export const fetchUbeswap = async () => {
  const {
    data: { pairs },
  }: { data: { pairs: { id: string }[] } } = await client.query({
    query: PAIRS_CURRENT,
    errorPolicy: "ignore",
    fetchPolicy: "cache-first",
  });

  const formattedPairs = pairs.map((pair) => {
    return pair.id;
  });
  const allPairData = await getBulkPairData(formattedPairs);
  if (!allPairData) return;
  const pools: Pool[] = allPairData
    .filter((p) => parseFloat(p.trackedReserveUSD as string) >= minLiquidityUSD)
    .map((p) => ({
      chainID: ChainId.Mainnet,
      exchange: Exchange.UniswapV2,
      address: getAddress(p.id),
      tokens: [p.token0, p.token1].map(
        (t) =>
          new Token({
            symbol: t.symbol,
            decimals: parseInt(t.decimals as string),
            chainId: ChainId.Mainnet,
            address: getAddress(t.id),
            name: t.name,
          })
      ),
    }));

  await fs.writeFile("src/data/ubeswap.json", JSON.stringify(pools, null, 2));

  console.log(`Discovered and wrote ${pools.length} pools`);
};

async function getBulkPairData(pairList: string[]) {
  try {
    const current = await client.query<PairsBulkQuery, PairsBulkQueryVariables>(
      {
        query: PAIRS_BULK,
        variables: {
          allPairs: pairList,
        },
        errorPolicy: "ignore",
        fetchPolicy: "cache-first",
      }
    );
    const pairData = current.data.pairs;
    return pairData;
  } catch (e) {
    console.log(e);
  }
}
