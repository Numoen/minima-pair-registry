import { fetchMobius } from "./fetchMobius";

export const fetch = async (): Promise<void> => {
  await fetchMobius();
};

fetch().catch((err) => {
  console.error(err);
});
