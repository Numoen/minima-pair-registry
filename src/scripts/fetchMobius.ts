import { CUSD, UST } from "@dahlia-labs/celo-tokens";
import * as fs from "fs/promises";

import type { Pool } from "..";
import { Exchange } from "..";

export const fetchMobius = async (): Promise<void> => {
  // const rawFile = await fs.readFile("data/pools.json");

  // const pools: Pool[] = JSON.parse(rawFile.toString()) as Pool[];

  const pools: Pool[] = [
    {
      chainID: 42220,
      exchange: Exchange.Saddle,
      tokens: [CUSD[42220], UST[42220]],
      address: "0x9F4AdBD0af281C69a582eB2E6fa2A594D4204CAe",
    },
  ];

  await fs.writeFile("src/data/pools.json", JSON.stringify(pools, null, 2));

  console.log(`Discovered and wrote ${pools.length} pools`);
};
