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
  PairsBulkAvaxQuery,
  PairsBulkAvaxQueryVariables,
} from "../apollo/generated/types";
import { PAIRS_BULK_AVAX, PAIRS_CURRENT } from "../apollo/queries";

export const fetchTraderJoe = async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  interface PairCurrentReturn {
    pairs: { id: string }[];
  }
  const {
    data: { pairs },
  } = await client.query<PairCurrentReturn>({
    query: PAIRS_CURRENT,
    errorPolicy: "ignore",
    fetchPolicy: "cache-first",
  });

  const formattedPairs = pairs.map((pair) => {
    return pair.id;
  });
  const { data: bulkPairData } = await client.query<
    PairsBulkAvaxQuery,
    PairsBulkAvaxQueryVariables
  >({
    query: PAIRS_BULK_AVAX,
    variables: {
      allPairs: formattedPairs,
    },
    fetchPolicy: "cache-first",
  });
  const traderjoePairs = bulkPairData.pairs
    .filter(
      (p) => parseFloat(p.trackedReserveAVAX as string) >= minLiquidityUSD
    )
    .map(
      (p): Pool => ({
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
      })
    );

  await fs.writeFile(
    "src/data/traderjoe.json",
    JSON.stringify(traderjoePairs, null, 2)
  );

  console.log(`Discovered and wrote ${traderjoePairs.length} TraderJoe pools`);
};
