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
