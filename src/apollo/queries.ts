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
    txCount
    token0 {
      id
      symbol
      name
      totalLiquidity
      derivedCUSD
    }
    token1 {
      id
      symbol
      name
      totalLiquidity
      derivedCUSD
    }
    reserve0
    reserve1
    reserveUSD
    totalSupply
    trackedReserveUSD
    reserveCELO
    volumeUSD
    untrackedVolumeUSD
    token0Price
    token1Price
    createdAtTimestamp
    createdAtBlockNumber
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
