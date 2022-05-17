import { fetchMobius } from "./fetchMobius";
import { fetchUbeswap } from "./fetchUbeswap";
import { fetchUniswap } from "./fetchUniswapV3";

export const fetch = async (): Promise<void> => {
  await Promise.all(
    [fetchUniswap, fetchUbeswap, fetchMobius].map((fet) => fet())
  );
};

fetch().catch((err) => {
  console.error(err);
});
