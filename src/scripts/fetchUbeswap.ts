import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import fetch from "cross-fetch";

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
  allPairData.filter((p) => parseFloat(p.trackedReserveUSD as string) > 1000);
  console.log(allPairData[0]!.token0.decimals);
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
