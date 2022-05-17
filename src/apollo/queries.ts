import type { DocumentNode } from "graphql";
import gql from "graphql-tag";

export const PAIRS_CURRENT: DocumentNode = gql`
  query PairsCurrent {
    pairs(
      first: 200
      orderBy: reserveUSD
      orderDirection: desc
      subgraphError: allow
    ) {
      id
    }
  }
`;

const PairFields = gql`
  fragment PairFields on Pair {
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
`;

export const PAIRS_BULK = gql`
  ${PairFields}
  query PairsBulk($allPairs: [ID!]!) {
    pairs(
      first: 500
      where: { id_in: $allPairs }
      orderBy: trackedReserveUSD
      orderDirection: desc
      subgraphError: allow
    ) {
      ...PairFields
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
