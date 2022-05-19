import type { DocumentNode } from "graphql";
import gql from "graphql-tag";

export const PAIRS_CURRENT: DocumentNode = gql`
  query PairsCurrent {
    pairs(
      first: 500
      orderBy: reserveUSD
      orderDirection: desc
      subgraphError: allow
    ) {
      id
    }
  }
`;

export const PAIRS_BULK_USD = gql`
  query PairsBulkUSD($allPairs: [ID!]!) {
    pairs(first: 500, where: { id_in: $allPairs }) {
      id
      token0 {
        id
        symbol
        name
        decimals
      }
      token1 {
        id
        symbol
        name
        decimals
      }
      reserveUSD
      trackedReserveUSD
    }
  }
`;

export const PAIRS_BULK_AVAX = gql`
  query PairsBulkAVAX($allPairs: [ID!]!) {
    pairs(first: 500, where: { id_in: $allPairs }) {
      id
      token0 {
        id
        symbol
        name
        decimals
      }
      token1 {
        id
        symbol
        name
        decimals
      }
      reserveUSD
      trackedReserveAVAX
    }
  }
`;

export const PAIRS_BULK_ETH = gql`
  query PairsBulkETH($allPairs: [ID!]!) {
    pairs(first: 500, where: { id_in: $allPairs }) {
      id
      token0 {
        id
        symbol
        name
        decimals
      }
      token1 {
        id
        symbol
        name
        decimals
      }
      reserveUSD
      trackedReserveETH
    }
  }
`;

export const TOP_POOLS = gql`
  query topPools {
    pools(
      first: 500
      orderBy: totalValueLockedUSD
      orderDirection: desc
      subgraphError: allow
    ) {
      id
    }
  }
`;

export const POOLS_BULK = (pools: string[]) => {
  let poolString = `[`;
  pools.map((address) => {
    return (poolString += `"${address}",`);
  });
  poolString += "]";
  const queryString =
    `
    query pools {
      pools(where: {id_in: ${poolString}},` +
    ` orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
        id
        token0 {
            id
            symbol 
            name
            decimals
        }
        token1 {
            id
            symbol 
            name
            decimals
        }
        totalValueLockedUSD
      }
    }
    `;
  return gql(queryString);
};
