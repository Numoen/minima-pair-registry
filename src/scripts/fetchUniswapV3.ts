import { Token } from "@dahlia-labs/token-utils";
import { getAddress } from "@ethersproject/address";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import fetch from "cross-fetch";
import * as fs from "fs/promises";
import { chunk } from "lodash";

import type { Pool } from "..";
import { Exchange, maxChunk, minLiquidityUSD } from "..";
import { POOLS_BULK, TOP_POOLS } from "../apollo/queries";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-subgraph",
    fetch,
  }),
  cache: new InMemoryCache(),
});

interface PoolFields {
  id: string;
  feeTier: string;
  liquidity: string;
  sqrtPrice: string;
  tick: string;
  token0: {
    id: string;
    symbol: string;
    name: string;
    decimals: string;
    derivedETH: string;
  };
  token1: {
    id: string;
    symbol: string;
    name: string;
    decimals: string;
    derivedETH: string;
  };
  token0Price: string;
  token1Price: string;
  volumeUSD: string;
  txCount: string;
  totalValueLockedToken0: string;
  totalValueLockedToken1: string;
  totalValueLockedUSD: string;
}

interface PoolDataResponse {
  pools: PoolFields[];
}

interface TopPoolsResponse {
  pools: {
    id: string;
  }[];
}

const getMultiplePoolDataChunked = async (keys: string[]) => {
  const keyChunks = chunk(keys, maxChunk);
  return (
    await Promise.all(
      keyChunks.map(async (c) => {
        const poolData = (await client.query({
          query: POOLS_BULK(undefined, c),
          errorPolicy: "ignore",
          fetchPolicy: "cache-first",
        })) as { data: PoolDataResponse };
        return poolData.data.pools;
      })
    )
  ).flat();
};

export const fetchUniswap = async () => {
  const {
    data: { pools: pairs },
  }: { data: TopPoolsResponse } = await client.query({
    query: TOP_POOLS,
    errorPolicy: "ignore",
    fetchPolicy: "cache-first",
  });

  const formattedData = pairs.map((pair) => {
    return pair.id;
  });

  const allPairData = await getMultiplePoolDataChunked(formattedData);
  const pools: Pool[] = allPairData
    .filter((p) => parseFloat(p.totalValueLockedUSD) >= minLiquidityUSD)
    .map((p) => ({
      chainID: 1,
      exchange: Exchange.UniswapV3,
      address: getAddress(p.id),
      tokens: [p.token0, p.token1].map(
        (t) =>
          new Token({
            symbol: t.symbol,
            decimals: parseInt(t.decimals),
            chainId: 1,
            address: getAddress(t.id),
            name: t.name,
          })
      ),
    }));

  await fs.writeFile("src/data/uniswap.json", JSON.stringify(pools, null, 2));

  console.log(`Discovered and wrote ${pools.length} pools`);
};
