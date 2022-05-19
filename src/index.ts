import type { Token } from "@dahlia-labs/token-utils";
import axios from "axios";
import fs from "fs";

export enum Exchange {
  UniswapV2,
  UniswapV3,
  Curve,
  Saddle,
}

export const minLiquidityUSD = 1000;

export const maxChunk = 100;

export interface Pool {
  chainID: number;
  exchange: Exchange;
  tokens: Token[];
  address: string;
}

export const remotePath =
  "https://raw.githubusercontent.com/DahliaLabs/minima-pair-registry/master/src/data/";

const localPath = "src/data";

export const fetchPools = async (): Promise<Pool[]> => {
  const dir = fs.readdirSync(localPath);
  const poolData = (
    await Promise.all(
      dir.flatMap(async (d) => axios.get<Pool[]>(remotePath.concat(d)))
    )
  ).flatMap((p) => p.data);
  return poolData;
};
