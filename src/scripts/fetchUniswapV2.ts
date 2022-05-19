import { Token } from "@dahlia-labs/token-utils";
import { getAddress } from "@ethersproject/address";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import axios from "axios";
import fetch from "cross-fetch";
import * as fs from "fs/promises";

import type { Pool } from "..";
import { Exchange, minLiquidityUSD } from "..";
import type {
  PairsBulkEthQuery,
  PairsBulkEthQueryVariables,
} from "../apollo/generated/types";
import { PAIRS_BULK_ETH, PAIRS_CURRENT } from "../apollo/queries";

export const fetchUniswapV2 = async () => {
  interface eth {
    ethereum: {
      usd: string;
    };
  }
  const { data: priceData } = await axios.get<eth>(
    `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
  );

  const client = new ApolloClient({
    link: new HttpLink({
      uri: "https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2",
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
    PairsBulkEthQuery,
    PairsBulkEthQueryVariables
  >({
    query: PAIRS_BULK_ETH,
    variables: {
      allPairs: formattedPairs,
    },
    fetchPolicy: "cache-first",
  });
  const uniswapPairs = bulkPairData.pairs
    .filter(
      (p) =>
        parseFloat(p.trackedReserveETH as string) *
          parseFloat(priceData.ethereum.usd) >=
        minLiquidityUSD
    )
    .map(
      (p): Pool => ({
        chainID: 1,
        exchange: Exchange.UniswapV2,
        address: getAddress(p.id),
        tokens: [p.token0, p.token1].map(
          (t) =>
            new Token({
              symbol: t.symbol,
              decimals: parseInt(t.decimals as string),
              chainId: 1,
              address: getAddress(t.id),
              name: t.name,
            })
        ),
      })
    );

  await fs.writeFile(
    "src/data/uniswapv2.json",
    JSON.stringify(uniswapPairs, null, 2)
  );

  console.log(`Discovered and wrote ${uniswapPairs.length} UniswapV2 pools`);
};
