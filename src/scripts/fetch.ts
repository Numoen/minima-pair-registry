import { fetchUniswap } from "./fetchUniswapV3";

export const fetch = async (): Promise<void> => {
  await fetchUniswap();
};

fetch().catch((err) => {
  console.error(err);
});
