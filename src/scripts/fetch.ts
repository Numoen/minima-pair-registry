import { fetchUbeswap } from "./fetchUbeswap";

export const fetch = async (): Promise<void> => {
  await fetchUbeswap();
};

fetch().catch((err) => {
  console.error(err);
});
