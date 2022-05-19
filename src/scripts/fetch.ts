import { fetchMobius } from "./fetchMobius";
import { fetchTraderJoe } from "./fetchTraderjoe";
import { fetchUbeswap } from "./fetchUbeswap";
import { fetchUniswapV2 } from "./fetchUniswapV2";
import { fetchUniswapV3 } from "./fetchUniswapV3";

export const fetch = async (): Promise<void> => {
  await Promise.all(
    [
      fetchUniswapV2,
      fetchUniswapV3,
      fetchUbeswap,
      fetchTraderJoe,
      fetchMobius,
    ].map((fet) => fet())
  );
};

fetch().catch((err) => {
  console.error(err);
});
