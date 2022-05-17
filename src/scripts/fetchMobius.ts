import { ChainId } from "@dahlia-labs/celo-contrib";
import { getAddress } from "@ethersproject/address";
import * as fs from "fs/promises";

import type { Pool } from "..";
import { Exchange } from "..";
import { StablePools } from "./mobiusData/pools";

export const fetchMobius = async (): Promise<void> => {
  const pools: Pool[] = StablePools[ChainId.Mainnet].map((p) => ({
    chainID: ChainId.Mainnet,
    exchange: Exchange.Saddle,
    tokens: p.pool.tokens.map((t) => t),
    address: getAddress(p.pool.address),
  }));

  await fs.writeFile("src/data/mobius.json", JSON.stringify(pools, null, 2));

  console.log(`Discovered and wrote ${pools.length} pools`);
};
