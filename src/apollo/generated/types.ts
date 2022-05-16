export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: BigDecimal;
  BigInt: GBigInt;
  Bytes: Bytes;
  Date: any;
  JSONObject: any;
};

export type Block = {
  readonly __typename?: 'Block';
  readonly hash: Scalars['Bytes'];
  readonly number: Scalars['BigInt'];
};

export type BlockChangedFilter = {
  readonly number_gte: Scalars['Int'];
};

export type BlockInput = {
  readonly hash: Scalars['Bytes'];
  readonly number: Scalars['BigInt'];
};

export type Block_Height = {
  readonly hash?: InputMaybe<Scalars['Bytes']>;
  readonly number?: InputMaybe<Scalars['Int']>;
  readonly number_gte?: InputMaybe<Scalars['Int']>;
};

export type Bundle = {
  readonly __typename?: 'Bundle';
  readonly celoPrice: Scalars['BigDecimal'];
  readonly id: Scalars['ID'];
};

export type Bundle_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly celoPrice?: InputMaybe<Scalars['BigDecimal']>;
  readonly celoPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly celoPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly celoPrice_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly celoPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly celoPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly celoPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly celoPrice_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

export enum Bundle_OrderBy {
  CeloPrice = 'celoPrice',
  Id = 'id'
}

export type Burn = {
  readonly __typename?: 'Burn';
  readonly amount0?: Maybe<Scalars['BigDecimal']>;
  readonly amount1?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  readonly feeTo?: Maybe<Scalars['Bytes']>;
  readonly id: Scalars['ID'];
  readonly liquidity: Scalars['BigDecimal'];
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly needsComplete: Scalars['Boolean'];
  readonly pair: Pair;
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly timestamp: Scalars['BigInt'];
  readonly to?: Maybe<Scalars['Bytes']>;
  readonly transaction: Transaction;
};

export type Burn_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly amount0?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeTo?: InputMaybe<Scalars['Bytes']>;
  readonly feeTo_contains?: InputMaybe<Scalars['Bytes']>;
  readonly feeTo_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeTo_not?: InputMaybe<Scalars['Bytes']>;
  readonly feeTo_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly feeTo_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly liquidity?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly logIndex?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_not?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly needsComplete?: InputMaybe<Scalars['Boolean']>;
  readonly needsComplete_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly needsComplete_not?: InputMaybe<Scalars['Boolean']>;
  readonly needsComplete_not_in?: InputMaybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly pair?: InputMaybe<Scalars['String']>;
  readonly pair_contains?: InputMaybe<Scalars['String']>;
  readonly pair_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_gt?: InputMaybe<Scalars['String']>;
  readonly pair_gte?: InputMaybe<Scalars['String']>;
  readonly pair_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_lt?: InputMaybe<Scalars['String']>;
  readonly pair_lte?: InputMaybe<Scalars['String']>;
  readonly pair_not?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly sender?: InputMaybe<Scalars['Bytes']>;
  readonly sender_contains?: InputMaybe<Scalars['Bytes']>;
  readonly sender_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_not?: InputMaybe<Scalars['Bytes']>;
  readonly sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly sender_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly timestamp?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_not?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly to?: InputMaybe<Scalars['Bytes']>;
  readonly to_contains?: InputMaybe<Scalars['Bytes']>;
  readonly to_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_not?: InputMaybe<Scalars['Bytes']>;
  readonly to_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly to_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly transaction?: InputMaybe<Scalars['String']>;
  readonly transaction_contains?: InputMaybe<Scalars['String']>;
  readonly transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_ends_with?: InputMaybe<Scalars['String']>;
  readonly transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_gt?: InputMaybe<Scalars['String']>;
  readonly transaction_gte?: InputMaybe<Scalars['String']>;
  readonly transaction_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_lt?: InputMaybe<Scalars['String']>;
  readonly transaction_lte?: InputMaybe<Scalars['String']>;
  readonly transaction_not?: InputMaybe<Scalars['String']>;
  readonly transaction_not_contains?: InputMaybe<Scalars['String']>;
  readonly transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_starts_with?: InputMaybe<Scalars['String']>;
  readonly transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Burn_OrderBy {
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  AmountUsd = 'amountUSD',
  FeeLiquidity = 'feeLiquidity',
  FeeTo = 'feeTo',
  Id = 'id',
  Liquidity = 'liquidity',
  LogIndex = 'logIndex',
  NeedsComplete = 'needsComplete',
  Pair = 'pair',
  Sender = 'sender',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction'
}

export type CachedEthereumCall = {
  readonly __typename?: 'CachedEthereumCall';
  readonly block: Block;
  readonly contractAddress: Scalars['Bytes'];
  readonly idHash: Scalars['Bytes'];
  readonly returnValue: Scalars['Bytes'];
};

export type ChainIndexingStatus = {
  readonly chainHeadBlock?: Maybe<Block>;
  readonly earliestBlock?: Maybe<Block>;
  readonly lastHealthyBlock?: Maybe<Block>;
  readonly latestBlock?: Maybe<Block>;
  readonly network: Scalars['String'];
};

export type EntityChanges = {
  readonly __typename?: 'EntityChanges';
  readonly deletions: ReadonlyArray<EntityTypeDeletions>;
  readonly updates: ReadonlyArray<EntityTypeUpdates>;
};

export type EntityTypeDeletions = {
  readonly __typename?: 'EntityTypeDeletions';
  readonly entities: ReadonlyArray<Scalars['ID']>;
  readonly type: Scalars['String'];
};

export type EntityTypeUpdates = {
  readonly __typename?: 'EntityTypeUpdates';
  readonly entities: ReadonlyArray<Scalars['JSONObject']>;
  readonly type: Scalars['String'];
};

export type EthereumIndexingStatus = ChainIndexingStatus & {
  readonly __typename?: 'EthereumIndexingStatus';
  readonly chainHeadBlock?: Maybe<Block>;
  readonly earliestBlock?: Maybe<Block>;
  readonly lastHealthyBlock?: Maybe<Block>;
  readonly latestBlock?: Maybe<Block>;
  readonly network: Scalars['String'];
};

export enum Feature {
  FullTextSearch = 'fullTextSearch',
  Grafting = 'grafting',
  IpfsOnEthereumContracts = 'ipfsOnEthereumContracts',
  NonFatalErrors = 'nonFatalErrors'
}

export enum Health {
  /** Subgraph halted due to errors */
  Failed = 'failed',
  /** Subgraph syncing normally */
  Healthy = 'healthy',
  /** Subgraph syncing but with errors */
  Unhealthy = 'unhealthy'
}

export type LiquidityPosition = {
  readonly __typename?: 'LiquidityPosition';
  readonly id: Scalars['ID'];
  readonly liquidityTokenBalance: Scalars['BigDecimal'];
  readonly pair: Pair;
  readonly user: User;
};

export type LiquidityPositionSnapshot = {
  readonly __typename?: 'LiquidityPositionSnapshot';
  readonly block: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly liquidityPosition: LiquidityPosition;
  readonly liquidityTokenBalance: Scalars['BigDecimal'];
  readonly liquidityTokenTotalSupply: Scalars['BigDecimal'];
  readonly pair: Pair;
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly timestamp: Scalars['Int'];
  readonly token0PriceUSD: Scalars['BigDecimal'];
  readonly token1PriceUSD: Scalars['BigDecimal'];
  readonly user: User;
};

export type LiquidityPositionSnapshot_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly block?: InputMaybe<Scalars['Int']>;
  readonly block_gt?: InputMaybe<Scalars['Int']>;
  readonly block_gte?: InputMaybe<Scalars['Int']>;
  readonly block_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly block_lt?: InputMaybe<Scalars['Int']>;
  readonly block_lte?: InputMaybe<Scalars['Int']>;
  readonly block_not?: InputMaybe<Scalars['Int']>;
  readonly block_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly liquidityPosition?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_contains?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_ends_with?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_gt?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_gte?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly liquidityPosition_lt?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_lte?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_not?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_not_contains?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_starts_with?: InputMaybe<Scalars['String']>;
  readonly liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidityTokenTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenTotalSupply_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly pair?: InputMaybe<Scalars['String']>;
  readonly pair_contains?: InputMaybe<Scalars['String']>;
  readonly pair_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_gt?: InputMaybe<Scalars['String']>;
  readonly pair_gte?: InputMaybe<Scalars['String']>;
  readonly pair_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_lt?: InputMaybe<Scalars['String']>;
  readonly pair_lte?: InputMaybe<Scalars['String']>;
  readonly pair_not?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly reserve0?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly token0PriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0PriceUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token1PriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1PriceUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly user?: InputMaybe<Scalars['String']>;
  readonly user_contains?: InputMaybe<Scalars['String']>;
  readonly user_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly user_ends_with?: InputMaybe<Scalars['String']>;
  readonly user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly user_gt?: InputMaybe<Scalars['String']>;
  readonly user_gte?: InputMaybe<Scalars['String']>;
  readonly user_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly user_lt?: InputMaybe<Scalars['String']>;
  readonly user_lte?: InputMaybe<Scalars['String']>;
  readonly user_not?: InputMaybe<Scalars['String']>;
  readonly user_not_contains?: InputMaybe<Scalars['String']>;
  readonly user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly user_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly user_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly user_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly user_starts_with?: InputMaybe<Scalars['String']>;
  readonly user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum LiquidityPositionSnapshot_OrderBy {
  Block = 'block',
  Id = 'id',
  LiquidityPosition = 'liquidityPosition',
  LiquidityTokenBalance = 'liquidityTokenBalance',
  LiquidityTokenTotalSupply = 'liquidityTokenTotalSupply',
  Pair = 'pair',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveUsd = 'reserveUSD',
  Timestamp = 'timestamp',
  Token0PriceUsd = 'token0PriceUSD',
  Token1PriceUsd = 'token1PriceUSD',
  User = 'user'
}

export type LiquidityPosition_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidityTokenBalance_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly pair?: InputMaybe<Scalars['String']>;
  readonly pair_contains?: InputMaybe<Scalars['String']>;
  readonly pair_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_gt?: InputMaybe<Scalars['String']>;
  readonly pair_gte?: InputMaybe<Scalars['String']>;
  readonly pair_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_lt?: InputMaybe<Scalars['String']>;
  readonly pair_lte?: InputMaybe<Scalars['String']>;
  readonly pair_not?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly user?: InputMaybe<Scalars['String']>;
  readonly user_contains?: InputMaybe<Scalars['String']>;
  readonly user_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly user_ends_with?: InputMaybe<Scalars['String']>;
  readonly user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly user_gt?: InputMaybe<Scalars['String']>;
  readonly user_gte?: InputMaybe<Scalars['String']>;
  readonly user_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly user_lt?: InputMaybe<Scalars['String']>;
  readonly user_lte?: InputMaybe<Scalars['String']>;
  readonly user_not?: InputMaybe<Scalars['String']>;
  readonly user_not_contains?: InputMaybe<Scalars['String']>;
  readonly user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly user_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly user_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly user_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly user_starts_with?: InputMaybe<Scalars['String']>;
  readonly user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum LiquidityPosition_OrderBy {
  Id = 'id',
  LiquidityTokenBalance = 'liquidityTokenBalance',
  Pair = 'pair',
  User = 'user'
}

export type Mint = {
  readonly __typename?: 'Mint';
  readonly amount0?: Maybe<Scalars['BigDecimal']>;
  readonly amount1?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  readonly feeTo?: Maybe<Scalars['Bytes']>;
  readonly id: Scalars['ID'];
  readonly liquidity: Scalars['BigDecimal'];
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly pair: Pair;
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly timestamp: Scalars['BigInt'];
  readonly to: Scalars['Bytes'];
  readonly transaction: Transaction;
};

export type Mint_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly amount0?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeTo?: InputMaybe<Scalars['Bytes']>;
  readonly feeTo_contains?: InputMaybe<Scalars['Bytes']>;
  readonly feeTo_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeTo_not?: InputMaybe<Scalars['Bytes']>;
  readonly feeTo_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly feeTo_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly liquidity?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly liquidity_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly logIndex?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_not?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly pair?: InputMaybe<Scalars['String']>;
  readonly pair_contains?: InputMaybe<Scalars['String']>;
  readonly pair_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_gt?: InputMaybe<Scalars['String']>;
  readonly pair_gte?: InputMaybe<Scalars['String']>;
  readonly pair_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_lt?: InputMaybe<Scalars['String']>;
  readonly pair_lte?: InputMaybe<Scalars['String']>;
  readonly pair_not?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly sender?: InputMaybe<Scalars['Bytes']>;
  readonly sender_contains?: InputMaybe<Scalars['Bytes']>;
  readonly sender_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_not?: InputMaybe<Scalars['Bytes']>;
  readonly sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly sender_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly timestamp?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_not?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly to?: InputMaybe<Scalars['Bytes']>;
  readonly to_contains?: InputMaybe<Scalars['Bytes']>;
  readonly to_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_not?: InputMaybe<Scalars['Bytes']>;
  readonly to_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly to_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly transaction?: InputMaybe<Scalars['String']>;
  readonly transaction_contains?: InputMaybe<Scalars['String']>;
  readonly transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_ends_with?: InputMaybe<Scalars['String']>;
  readonly transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_gt?: InputMaybe<Scalars['String']>;
  readonly transaction_gte?: InputMaybe<Scalars['String']>;
  readonly transaction_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_lt?: InputMaybe<Scalars['String']>;
  readonly transaction_lte?: InputMaybe<Scalars['String']>;
  readonly transaction_not?: InputMaybe<Scalars['String']>;
  readonly transaction_not_contains?: InputMaybe<Scalars['String']>;
  readonly transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_starts_with?: InputMaybe<Scalars['String']>;
  readonly transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Mint_OrderBy {
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  AmountUsd = 'amountUSD',
  FeeLiquidity = 'feeLiquidity',
  FeeTo = 'feeTo',
  Id = 'id',
  Liquidity = 'liquidity',
  LogIndex = 'logIndex',
  Pair = 'pair',
  Sender = 'sender',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pair = {
  readonly __typename?: 'Pair';
  readonly burns: ReadonlyArray<Burn>;
  readonly createdAtBlockNumber: Scalars['BigInt'];
  readonly createdAtTimestamp: Scalars['BigInt'];
  readonly id: Scalars['ID'];
  readonly liquidityPositionSnapshots: ReadonlyArray<LiquidityPositionSnapshot>;
  readonly liquidityPositions: ReadonlyArray<LiquidityPosition>;
  readonly liquidityProviderCount: Scalars['BigInt'];
  readonly mints: ReadonlyArray<Mint>;
  readonly pairHourData: ReadonlyArray<PairHourData>;
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly reserveCELO: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly swaps: ReadonlyArray<Swap>;
  readonly token0: Token;
  readonly token0Price: Scalars['BigDecimal'];
  readonly token1: Token;
  readonly token1Price: Scalars['BigDecimal'];
  readonly totalSupply: Scalars['BigDecimal'];
  readonly trackedReserveUSD: Scalars['BigDecimal'];
  readonly txCount: Scalars['BigInt'];
  readonly untrackedVolumeUSD: Scalars['BigDecimal'];
  readonly volumeToken0: Scalars['BigDecimal'];
  readonly volumeToken1: Scalars['BigDecimal'];
  readonly volumeUSD: Scalars['BigDecimal'];
};


export type PairBurnsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Burn_Filter>;
};


export type PairLiquidityPositionSnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LiquidityPositionSnapshot_Filter>;
};


export type PairLiquidityPositionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LiquidityPosition_Filter>;
};


export type PairMintsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Mint_Filter>;
};


export type PairPairHourDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PairHourData_Filter>;
};


export type PairSwapsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Swap_Filter>;
};

export type PairDayData = {
  readonly __typename?: 'PairDayData';
  readonly dailyTxns: Scalars['BigInt'];
  readonly dailyVolumeToken0: Scalars['BigDecimal'];
  readonly dailyVolumeToken1: Scalars['BigDecimal'];
  readonly dailyVolumeUSD: Scalars['BigDecimal'];
  readonly date: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly pairAddress: Scalars['Bytes'];
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly token0: Token;
  readonly token1: Token;
  readonly totalSupply: Scalars['BigDecimal'];
};

export type PairDayData_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly dailyTxns?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly dailyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_not?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly dailyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly date?: InputMaybe<Scalars['Int']>;
  readonly date_gt?: InputMaybe<Scalars['Int']>;
  readonly date_gte?: InputMaybe<Scalars['Int']>;
  readonly date_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly date_lt?: InputMaybe<Scalars['Int']>;
  readonly date_lte?: InputMaybe<Scalars['Int']>;
  readonly date_not?: InputMaybe<Scalars['Int']>;
  readonly date_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly pairAddress?: InputMaybe<Scalars['Bytes']>;
  readonly pairAddress_contains?: InputMaybe<Scalars['Bytes']>;
  readonly pairAddress_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly pairAddress_not?: InputMaybe<Scalars['Bytes']>;
  readonly pairAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly pairAddress_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly reserve0?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token0?: InputMaybe<Scalars['String']>;
  readonly token0_contains?: InputMaybe<Scalars['String']>;
  readonly token0_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly token0_ends_with?: InputMaybe<Scalars['String']>;
  readonly token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token0_gt?: InputMaybe<Scalars['String']>;
  readonly token0_gte?: InputMaybe<Scalars['String']>;
  readonly token0_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_lt?: InputMaybe<Scalars['String']>;
  readonly token0_lte?: InputMaybe<Scalars['String']>;
  readonly token0_not?: InputMaybe<Scalars['String']>;
  readonly token0_not_contains?: InputMaybe<Scalars['String']>;
  readonly token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly token0_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token0_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token0_starts_with?: InputMaybe<Scalars['String']>;
  readonly token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token1?: InputMaybe<Scalars['String']>;
  readonly token1_contains?: InputMaybe<Scalars['String']>;
  readonly token1_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly token1_ends_with?: InputMaybe<Scalars['String']>;
  readonly token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token1_gt?: InputMaybe<Scalars['String']>;
  readonly token1_gte?: InputMaybe<Scalars['String']>;
  readonly token1_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_lt?: InputMaybe<Scalars['String']>;
  readonly token1_lte?: InputMaybe<Scalars['String']>;
  readonly token1_not?: InputMaybe<Scalars['String']>;
  readonly token1_not_contains?: InputMaybe<Scalars['String']>;
  readonly token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly token1_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token1_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token1_starts_with?: InputMaybe<Scalars['String']>;
  readonly token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly totalSupply?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
};

export enum PairDayData_OrderBy {
  DailyTxns = 'dailyTxns',
  DailyVolumeToken0 = 'dailyVolumeToken0',
  DailyVolumeToken1 = 'dailyVolumeToken1',
  DailyVolumeUsd = 'dailyVolumeUSD',
  Date = 'date',
  Id = 'id',
  PairAddress = 'pairAddress',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveUsd = 'reserveUSD',
  Token0 = 'token0',
  Token1 = 'token1',
  TotalSupply = 'totalSupply'
}

export type PairHourData = {
  readonly __typename?: 'PairHourData';
  readonly hourStartUnix: Scalars['Int'];
  readonly hourlyTxns: Scalars['BigInt'];
  readonly hourlyVolumeToken0: Scalars['BigDecimal'];
  readonly hourlyVolumeToken1: Scalars['BigDecimal'];
  readonly hourlyVolumeUSD: Scalars['BigDecimal'];
  readonly id: Scalars['ID'];
  readonly pair: Pair;
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly totalSupply: Scalars['BigDecimal'];
};

export type PairHourData_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly hourStartUnix?: InputMaybe<Scalars['Int']>;
  readonly hourStartUnix_gt?: InputMaybe<Scalars['Int']>;
  readonly hourStartUnix_gte?: InputMaybe<Scalars['Int']>;
  readonly hourStartUnix_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly hourStartUnix_lt?: InputMaybe<Scalars['Int']>;
  readonly hourStartUnix_lte?: InputMaybe<Scalars['Int']>;
  readonly hourStartUnix_not?: InputMaybe<Scalars['Int']>;
  readonly hourStartUnix_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly hourlyTxns?: InputMaybe<Scalars['BigInt']>;
  readonly hourlyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  readonly hourlyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  readonly hourlyTxns_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly hourlyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  readonly hourlyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  readonly hourlyTxns_not?: InputMaybe<Scalars['BigInt']>;
  readonly hourlyTxns_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly hourlyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly pair?: InputMaybe<Scalars['String']>;
  readonly pair_contains?: InputMaybe<Scalars['String']>;
  readonly pair_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_gt?: InputMaybe<Scalars['String']>;
  readonly pair_gte?: InputMaybe<Scalars['String']>;
  readonly pair_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_lt?: InputMaybe<Scalars['String']>;
  readonly pair_lte?: InputMaybe<Scalars['String']>;
  readonly pair_not?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly reserve0?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
};

export enum PairHourData_OrderBy {
  HourStartUnix = 'hourStartUnix',
  HourlyTxns = 'hourlyTxns',
  HourlyVolumeToken0 = 'hourlyVolumeToken0',
  HourlyVolumeToken1 = 'hourlyVolumeToken1',
  HourlyVolumeUsd = 'hourlyVolumeUSD',
  Id = 'id',
  Pair = 'pair',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveUsd = 'reserveUSD',
  TotalSupply = 'totalSupply'
}

export type PairLookup = {
  readonly __typename?: 'PairLookup';
  readonly id: Scalars['ID'];
  readonly pairAddress: Pair;
};

export type PairLookup_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly pairAddress?: InputMaybe<Scalars['String']>;
  readonly pairAddress_contains?: InputMaybe<Scalars['String']>;
  readonly pairAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pairAddress_ends_with?: InputMaybe<Scalars['String']>;
  readonly pairAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pairAddress_gt?: InputMaybe<Scalars['String']>;
  readonly pairAddress_gte?: InputMaybe<Scalars['String']>;
  readonly pairAddress_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pairAddress_lt?: InputMaybe<Scalars['String']>;
  readonly pairAddress_lte?: InputMaybe<Scalars['String']>;
  readonly pairAddress_not?: InputMaybe<Scalars['String']>;
  readonly pairAddress_not_contains?: InputMaybe<Scalars['String']>;
  readonly pairAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pairAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pairAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pairAddress_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pairAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pairAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pairAddress_starts_with?: InputMaybe<Scalars['String']>;
  readonly pairAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum PairLookup_OrderBy {
  Id = 'id',
  PairAddress = 'pairAddress'
}

export type Pair_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtBlockNumber_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  readonly createdAtTimestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  readonly liquidityProviderCount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly reserve0?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve0_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserve1_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveCELO?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveCELO_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveCELO_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveCELO_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveCELO_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveCELO_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveCELO_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveCELO_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token0?: InputMaybe<Scalars['String']>;
  readonly token0Price?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0Price_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly token0Price_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token0_contains?: InputMaybe<Scalars['String']>;
  readonly token0_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly token0_ends_with?: InputMaybe<Scalars['String']>;
  readonly token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token0_gt?: InputMaybe<Scalars['String']>;
  readonly token0_gte?: InputMaybe<Scalars['String']>;
  readonly token0_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_lt?: InputMaybe<Scalars['String']>;
  readonly token0_lte?: InputMaybe<Scalars['String']>;
  readonly token0_not?: InputMaybe<Scalars['String']>;
  readonly token0_not_contains?: InputMaybe<Scalars['String']>;
  readonly token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly token0_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token0_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token0_starts_with?: InputMaybe<Scalars['String']>;
  readonly token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token1?: InputMaybe<Scalars['String']>;
  readonly token1Price?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1Price_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly token1Price_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token1_contains?: InputMaybe<Scalars['String']>;
  readonly token1_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly token1_ends_with?: InputMaybe<Scalars['String']>;
  readonly token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token1_gt?: InputMaybe<Scalars['String']>;
  readonly token1_gte?: InputMaybe<Scalars['String']>;
  readonly token1_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_lt?: InputMaybe<Scalars['String']>;
  readonly token1_lte?: InputMaybe<Scalars['String']>;
  readonly token1_not?: InputMaybe<Scalars['String']>;
  readonly token1_not_contains?: InputMaybe<Scalars['String']>;
  readonly token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly token1_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token1_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token1_starts_with?: InputMaybe<Scalars['String']>;
  readonly token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly totalSupply?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalSupply_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly trackedReserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly trackedReserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly trackedReserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly trackedReserveUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly trackedReserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly trackedReserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly trackedReserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly trackedReserveUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly txCount?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly txCount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_not?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken0_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken0_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken1_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeToken1_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly volumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
};

export enum Pair_OrderBy {
  Burns = 'burns',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  Id = 'id',
  LiquidityPositionSnapshots = 'liquidityPositionSnapshots',
  LiquidityPositions = 'liquidityPositions',
  LiquidityProviderCount = 'liquidityProviderCount',
  Mints = 'mints',
  PairHourData = 'pairHourData',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  ReserveCelo = 'reserveCELO',
  ReserveUsd = 'reserveUSD',
  Swaps = 'swaps',
  Token0 = 'token0',
  Token0Price = 'token0Price',
  Token1 = 'token1',
  Token1Price = 'token1Price',
  TotalSupply = 'totalSupply',
  TrackedReserveUsd = 'trackedReserveUSD',
  TxCount = 'txCount',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type PartialBlock = {
  readonly __typename?: 'PartialBlock';
  readonly hash?: Maybe<Scalars['Bytes']>;
  readonly number: Scalars['BigInt'];
};

export type ProofOfIndexingRequest = {
  readonly block: BlockInput;
  readonly deployment: Scalars['String'];
};

export type ProofOfIndexingResult = {
  readonly __typename?: 'ProofOfIndexingResult';
  readonly block: Block;
  readonly deployment: Scalars['String'];
  /** There may not be a proof of indexing available for the deployment and block */
  readonly proofOfIndexing?: Maybe<Scalars['Bytes']>;
};

export type PublicProofOfIndexingRequest = {
  readonly blockNumber: Scalars['BigInt'];
  readonly deployment: Scalars['String'];
};

export type PublicProofOfIndexingResult = {
  readonly __typename?: 'PublicProofOfIndexingResult';
  readonly block: PartialBlock;
  readonly deployment: Scalars['String'];
  readonly proofOfIndexing: Scalars['Bytes'];
};

export type Query = {
  readonly __typename?: 'Query';
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
  readonly blockData?: Maybe<Scalars['JSONObject']>;
  readonly bundle?: Maybe<Bundle>;
  readonly bundles: ReadonlyArray<Bundle>;
  readonly burn?: Maybe<Burn>;
  readonly burns: ReadonlyArray<Burn>;
  readonly cachedEthereumCalls?: Maybe<ReadonlyArray<CachedEthereumCall>>;
  readonly entityChangesInBlock: EntityChanges;
  readonly indexingStatusForCurrentVersion?: Maybe<SubgraphIndexingStatus>;
  readonly indexingStatusForPendingVersion?: Maybe<SubgraphIndexingStatus>;
  readonly indexingStatuses: ReadonlyArray<SubgraphIndexingStatus>;
  readonly indexingStatusesForSubgraphName: ReadonlyArray<SubgraphIndexingStatus>;
  readonly liquidityPosition?: Maybe<LiquidityPosition>;
  readonly liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  readonly liquidityPositionSnapshots: ReadonlyArray<LiquidityPositionSnapshot>;
  readonly liquidityPositions: ReadonlyArray<LiquidityPosition>;
  readonly mint?: Maybe<Mint>;
  readonly mints: ReadonlyArray<Mint>;
  readonly pair?: Maybe<Pair>;
  readonly pairDayData?: Maybe<PairDayData>;
  readonly pairDayDatas: ReadonlyArray<PairDayData>;
  readonly pairHourData?: Maybe<PairHourData>;
  readonly pairHourDatas: ReadonlyArray<PairHourData>;
  readonly pairLookup?: Maybe<PairLookup>;
  readonly pairLookups: ReadonlyArray<PairLookup>;
  readonly pairs: ReadonlyArray<Pair>;
  readonly proofOfIndexing?: Maybe<Scalars['Bytes']>;
  /**
   * Proofs of indexing for several deployments and blocks that can be shared and
   * compared in public without revealing the _actual_ proof of indexing that every
   * indexer has in their database
   *
   */
  readonly publicProofsOfIndexing: ReadonlyArray<PublicProofOfIndexingResult>;
  readonly subgraphFeatures: SubgraphFeatures;
  readonly swap?: Maybe<Swap>;
  readonly swaps: ReadonlyArray<Swap>;
  readonly token?: Maybe<Token>;
  readonly tokenDayData?: Maybe<TokenDayData>;
  readonly tokenDayDatas: ReadonlyArray<TokenDayData>;
  readonly tokens: ReadonlyArray<Token>;
  readonly transaction?: Maybe<Transaction>;
  readonly transactions: ReadonlyArray<Transaction>;
  readonly ubeswapDayData?: Maybe<UbeswapDayData>;
  readonly ubeswapDayDatas: ReadonlyArray<UbeswapDayData>;
  readonly ubeswapFactories: ReadonlyArray<UbeswapFactory>;
  readonly ubeswapFactory?: Maybe<UbeswapFactory>;
  readonly user?: Maybe<User>;
  readonly users: ReadonlyArray<User>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryBlockDataArgs = {
  blockHash: Scalars['Bytes'];
  network: Scalars['String'];
};


export type QueryBundleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBundlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bundle_Filter>;
};


export type QueryBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Burn_Filter>;
};


export type QueryCachedEthereumCallsArgs = {
  blockHash: Scalars['Bytes'];
  network: Scalars['String'];
};


export type QueryEntityChangesInBlockArgs = {
  blockNumber: Scalars['Int'];
  subgraphId: Scalars['String'];
};


export type QueryIndexingStatusForCurrentVersionArgs = {
  subgraphName: Scalars['String'];
};


export type QueryIndexingStatusForPendingVersionArgs = {
  subgraphName: Scalars['String'];
};


export type QueryIndexingStatusesArgs = {
  subgraphs?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};


export type QueryIndexingStatusesForSubgraphNameArgs = {
  subgraphName: Scalars['String'];
};


export type QueryLiquidityPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidityPositionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidityPositionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPositionSnapshot_Filter>;
};


export type QueryLiquidityPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPosition_Filter>;
};


export type QueryMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Mint_Filter>;
};


export type QueryPairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PairDayData_Filter>;
};


export type QueryPairHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PairHourData_Filter>;
};


export type QueryPairLookupArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairLookupsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairLookup_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PairLookup_Filter>;
};


export type QueryPairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pair_Filter>;
};


export type QueryProofOfIndexingArgs = {
  blockHash: Scalars['Bytes'];
  blockNumber: Scalars['Int'];
  indexer?: InputMaybe<Scalars['Bytes']>;
  subgraph: Scalars['String'];
};


export type QueryPublicProofsOfIndexingArgs = {
  requests: ReadonlyArray<PublicProofOfIndexingRequest>;
};


export type QuerySubgraphFeaturesArgs = {
  subgraphId: Scalars['String'];
};


export type QuerySwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDayData_Filter>;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};


export type QueryUbeswapDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUbeswapDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UbeswapDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UbeswapDayData_Filter>;
};


export type QueryUbeswapFactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UbeswapFactory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UbeswapFactory_Filter>;
};


export type QueryUbeswapFactoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type SubgraphError = {
  readonly __typename?: 'SubgraphError';
  readonly block?: Maybe<Block>;
  readonly deterministic: Scalars['Boolean'];
  readonly handler?: Maybe<Scalars['String']>;
  readonly message: Scalars['String'];
};

export type SubgraphFeatures = {
  readonly __typename?: 'SubgraphFeatures';
  readonly errors: ReadonlyArray<Scalars['String']>;
  readonly features: ReadonlyArray<Feature>;
  readonly network?: Maybe<Scalars['String']>;
};

export type SubgraphIndexingStatus = {
  readonly __typename?: 'SubgraphIndexingStatus';
  readonly chains: ReadonlyArray<ChainIndexingStatus>;
  readonly entityCount: Scalars['BigInt'];
  /** If the subgraph has failed, this is the error caused it */
  readonly fatalError?: Maybe<SubgraphError>;
  readonly health: Health;
  readonly node?: Maybe<Scalars['String']>;
  /** Sorted from first to last, limited to first 1000 */
  readonly nonFatalErrors: ReadonlyArray<SubgraphError>;
  readonly subgraph: Scalars['String'];
  readonly synced: Scalars['Boolean'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
  readonly bundle?: Maybe<Bundle>;
  readonly bundles: ReadonlyArray<Bundle>;
  readonly burn?: Maybe<Burn>;
  readonly burns: ReadonlyArray<Burn>;
  readonly liquidityPosition?: Maybe<LiquidityPosition>;
  readonly liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  readonly liquidityPositionSnapshots: ReadonlyArray<LiquidityPositionSnapshot>;
  readonly liquidityPositions: ReadonlyArray<LiquidityPosition>;
  readonly mint?: Maybe<Mint>;
  readonly mints: ReadonlyArray<Mint>;
  readonly pair?: Maybe<Pair>;
  readonly pairDayData?: Maybe<PairDayData>;
  readonly pairDayDatas: ReadonlyArray<PairDayData>;
  readonly pairHourData?: Maybe<PairHourData>;
  readonly pairHourDatas: ReadonlyArray<PairHourData>;
  readonly pairLookup?: Maybe<PairLookup>;
  readonly pairLookups: ReadonlyArray<PairLookup>;
  readonly pairs: ReadonlyArray<Pair>;
  readonly swap?: Maybe<Swap>;
  readonly swaps: ReadonlyArray<Swap>;
  readonly token?: Maybe<Token>;
  readonly tokenDayData?: Maybe<TokenDayData>;
  readonly tokenDayDatas: ReadonlyArray<TokenDayData>;
  readonly tokens: ReadonlyArray<Token>;
  readonly transaction?: Maybe<Transaction>;
  readonly transactions: ReadonlyArray<Transaction>;
  readonly ubeswapDayData?: Maybe<UbeswapDayData>;
  readonly ubeswapDayDatas: ReadonlyArray<UbeswapDayData>;
  readonly ubeswapFactories: ReadonlyArray<UbeswapFactory>;
  readonly ubeswapFactory?: Maybe<UbeswapFactory>;
  readonly user?: Maybe<User>;
  readonly users: ReadonlyArray<User>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionBundleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBundlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bundle_Filter>;
};


export type SubscriptionBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Burn_Filter>;
};


export type SubscriptionLiquidityPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLiquidityPositionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLiquidityPositionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPositionSnapshot_Filter>;
};


export type SubscriptionLiquidityPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityPosition_Filter>;
};


export type SubscriptionMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Mint_Filter>;
};


export type SubscriptionPairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PairDayData_Filter>;
};


export type SubscriptionPairHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PairHourData_Filter>;
};


export type SubscriptionPairLookupArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairLookupsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairLookup_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PairLookup_Filter>;
};


export type SubscriptionPairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pair_Filter>;
};


export type SubscriptionSwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDayData_Filter>;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};


export type SubscriptionUbeswapDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUbeswapDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UbeswapDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UbeswapDayData_Filter>;
};


export type SubscriptionUbeswapFactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UbeswapFactory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UbeswapFactory_Filter>;
};


export type SubscriptionUbeswapFactoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type Swap = {
  readonly __typename?: 'Swap';
  readonly amount0In: Scalars['BigDecimal'];
  readonly amount0Out: Scalars['BigDecimal'];
  readonly amount1In: Scalars['BigDecimal'];
  readonly amount1Out: Scalars['BigDecimal'];
  readonly amountUSD: Scalars['BigDecimal'];
  readonly from: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly pair: Pair;
  readonly sender: Scalars['Bytes'];
  readonly timestamp: Scalars['BigInt'];
  readonly to: Scalars['Bytes'];
  readonly transaction: Transaction;
};

export type Swap_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly amount0In?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0In_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0In_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0In_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0In_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0In_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0In_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0In_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0Out?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0Out_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0Out_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0Out_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0Out_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0Out_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0Out_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount0Out_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1In?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1In_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1In_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1In_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1In_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1In_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1In_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1In_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1Out?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1Out_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1Out_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1Out_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1Out_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1Out_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1Out_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amount1Out_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly amountUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly from?: InputMaybe<Scalars['Bytes']>;
  readonly from_contains?: InputMaybe<Scalars['Bytes']>;
  readonly from_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly from_not?: InputMaybe<Scalars['Bytes']>;
  readonly from_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly from_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly logIndex?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_not?: InputMaybe<Scalars['BigInt']>;
  readonly logIndex_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly pair?: InputMaybe<Scalars['String']>;
  readonly pair_contains?: InputMaybe<Scalars['String']>;
  readonly pair_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_gt?: InputMaybe<Scalars['String']>;
  readonly pair_gte?: InputMaybe<Scalars['String']>;
  readonly pair_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_lt?: InputMaybe<Scalars['String']>;
  readonly pair_lte?: InputMaybe<Scalars['String']>;
  readonly pair_not?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains?: InputMaybe<Scalars['String']>;
  readonly pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with?: InputMaybe<Scalars['String']>;
  readonly pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly sender?: InputMaybe<Scalars['Bytes']>;
  readonly sender_contains?: InputMaybe<Scalars['Bytes']>;
  readonly sender_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_not?: InputMaybe<Scalars['Bytes']>;
  readonly sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly sender_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly timestamp?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_not?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly to?: InputMaybe<Scalars['Bytes']>;
  readonly to_contains?: InputMaybe<Scalars['Bytes']>;
  readonly to_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_not?: InputMaybe<Scalars['Bytes']>;
  readonly to_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly to_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly transaction?: InputMaybe<Scalars['String']>;
  readonly transaction_contains?: InputMaybe<Scalars['String']>;
  readonly transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_ends_with?: InputMaybe<Scalars['String']>;
  readonly transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_gt?: InputMaybe<Scalars['String']>;
  readonly transaction_gte?: InputMaybe<Scalars['String']>;
  readonly transaction_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_lt?: InputMaybe<Scalars['String']>;
  readonly transaction_lte?: InputMaybe<Scalars['String']>;
  readonly transaction_not?: InputMaybe<Scalars['String']>;
  readonly transaction_not_contains?: InputMaybe<Scalars['String']>;
  readonly transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly transaction_starts_with?: InputMaybe<Scalars['String']>;
  readonly transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Swap_OrderBy {
  Amount0In = 'amount0In',
  Amount0Out = 'amount0Out',
  Amount1In = 'amount1In',
  Amount1Out = 'amount1Out',
  AmountUsd = 'amountUSD',
  From = 'from',
  Id = 'id',
  LogIndex = 'logIndex',
  Pair = 'pair',
  Sender = 'sender',
  Timestamp = 'timestamp',
  To = 'to',
  Transaction = 'transaction'
}

export type Token = {
  readonly __typename?: 'Token';
  readonly decimals: Scalars['BigInt'];
  readonly derivedCUSD?: Maybe<Scalars['BigDecimal']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly pairBase: ReadonlyArray<Pair>;
  readonly pairDayDataBase: ReadonlyArray<PairDayData>;
  readonly pairDayDataQuote: ReadonlyArray<PairDayData>;
  readonly pairQuote: ReadonlyArray<Pair>;
  readonly symbol: Scalars['String'];
  readonly tokenDayData: ReadonlyArray<TokenDayData>;
  readonly totalLiquidity: Scalars['BigDecimal'];
  readonly totalSupply: Scalars['BigInt'];
  readonly tradeVolume: Scalars['BigDecimal'];
  readonly tradeVolumeUSD: Scalars['BigDecimal'];
  readonly txCount: Scalars['BigInt'];
  readonly untrackedVolumeUSD: Scalars['BigDecimal'];
};


export type TokenPairBaseArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Pair_Filter>;
};


export type TokenPairDayDataBaseArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PairDayData_Filter>;
};


export type TokenPairDayDataQuoteArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PairDayData_Filter>;
};


export type TokenPairQuoteArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Pair_Filter>;
};


export type TokenTokenDayDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenDayData_Filter>;
};

export type TokenDayData = {
  readonly __typename?: 'TokenDayData';
  readonly dailyTxns: Scalars['BigInt'];
  readonly dailyVolumeCELO: Scalars['BigDecimal'];
  readonly dailyVolumeToken: Scalars['BigDecimal'];
  readonly dailyVolumeUSD: Scalars['BigDecimal'];
  readonly date: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly priceUSD: Scalars['BigDecimal'];
  readonly token: Token;
  readonly totalLiquidityCELO: Scalars['BigDecimal'];
  readonly totalLiquidityToken: Scalars['BigDecimal'];
  readonly totalLiquidityUSD: Scalars['BigDecimal'];
};

export type TokenDayData_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly dailyTxns?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly dailyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_not?: InputMaybe<Scalars['BigInt']>;
  readonly dailyTxns_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly dailyVolumeCELO?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeCELO_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly date?: InputMaybe<Scalars['Int']>;
  readonly date_gt?: InputMaybe<Scalars['Int']>;
  readonly date_gte?: InputMaybe<Scalars['Int']>;
  readonly date_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly date_lt?: InputMaybe<Scalars['Int']>;
  readonly date_lte?: InputMaybe<Scalars['Int']>;
  readonly date_not?: InputMaybe<Scalars['Int']>;
  readonly date_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly priceUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly priceUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly priceUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token?: InputMaybe<Scalars['String']>;
  readonly token_contains?: InputMaybe<Scalars['String']>;
  readonly token_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly token_ends_with?: InputMaybe<Scalars['String']>;
  readonly token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token_gt?: InputMaybe<Scalars['String']>;
  readonly token_gte?: InputMaybe<Scalars['String']>;
  readonly token_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly token_lt?: InputMaybe<Scalars['String']>;
  readonly token_lte?: InputMaybe<Scalars['String']>;
  readonly token_not?: InputMaybe<Scalars['String']>;
  readonly token_not_contains?: InputMaybe<Scalars['String']>;
  readonly token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly token_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly token_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly token_starts_with?: InputMaybe<Scalars['String']>;
  readonly token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly totalLiquidityCELO?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityCELO_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityToken?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
};

export enum TokenDayData_OrderBy {
  DailyTxns = 'dailyTxns',
  DailyVolumeCelo = 'dailyVolumeCELO',
  DailyVolumeToken = 'dailyVolumeToken',
  DailyVolumeUsd = 'dailyVolumeUSD',
  Date = 'date',
  Id = 'id',
  PriceUsd = 'priceUSD',
  Token = 'token',
  TotalLiquidityCelo = 'totalLiquidityCELO',
  TotalLiquidityToken = 'totalLiquidityToken',
  TotalLiquidityUsd = 'totalLiquidityUSD'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly decimals?: InputMaybe<Scalars['BigInt']>;
  readonly decimals_gt?: InputMaybe<Scalars['BigInt']>;
  readonly decimals_gte?: InputMaybe<Scalars['BigInt']>;
  readonly decimals_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly decimals_lt?: InputMaybe<Scalars['BigInt']>;
  readonly decimals_lte?: InputMaybe<Scalars['BigInt']>;
  readonly decimals_not?: InputMaybe<Scalars['BigInt']>;
  readonly decimals_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly derivedCUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly derivedCUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly derivedCUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly derivedCUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly derivedCUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly derivedCUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly derivedCUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly derivedCUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly name_contains?: InputMaybe<Scalars['String']>;
  readonly name_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly name_ends_with?: InputMaybe<Scalars['String']>;
  readonly name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly name_gt?: InputMaybe<Scalars['String']>;
  readonly name_gte?: InputMaybe<Scalars['String']>;
  readonly name_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: InputMaybe<Scalars['String']>;
  readonly name_lte?: InputMaybe<Scalars['String']>;
  readonly name_not?: InputMaybe<Scalars['String']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  readonly name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly name_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly name_starts_with?: InputMaybe<Scalars['String']>;
  readonly name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol?: InputMaybe<Scalars['String']>;
  readonly symbol_contains?: InputMaybe<Scalars['String']>;
  readonly symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_ends_with?: InputMaybe<Scalars['String']>;
  readonly symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_gt?: InputMaybe<Scalars['String']>;
  readonly symbol_gte?: InputMaybe<Scalars['String']>;
  readonly symbol_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_lt?: InputMaybe<Scalars['String']>;
  readonly symbol_lte?: InputMaybe<Scalars['String']>;
  readonly symbol_not?: InputMaybe<Scalars['String']>;
  readonly symbol_not_contains?: InputMaybe<Scalars['String']>;
  readonly symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly symbol_starts_with?: InputMaybe<Scalars['String']>;
  readonly symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly totalLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply?: InputMaybe<Scalars['BigInt']>;
  readonly totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  readonly totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  readonly totalSupply_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  readonly totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  readonly totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  readonly totalSupply_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tradeVolume?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly tradeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly tradeVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolume_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly tradeVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly tradeVolume_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly txCount?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly txCount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_not?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
};

export enum Token_OrderBy {
  Decimals = 'decimals',
  DerivedCusd = 'derivedCUSD',
  Id = 'id',
  Name = 'name',
  PairBase = 'pairBase',
  PairDayDataBase = 'pairDayDataBase',
  PairDayDataQuote = 'pairDayDataQuote',
  PairQuote = 'pairQuote',
  Symbol = 'symbol',
  TokenDayData = 'tokenDayData',
  TotalLiquidity = 'totalLiquidity',
  TotalSupply = 'totalSupply',
  TradeVolume = 'tradeVolume',
  TradeVolumeUsd = 'tradeVolumeUSD',
  TxCount = 'txCount',
  UntrackedVolumeUsd = 'untrackedVolumeUSD'
}

export type Transaction = {
  readonly __typename?: 'Transaction';
  readonly blockNumber: Scalars['BigInt'];
  readonly burns: ReadonlyArray<Maybe<Burn>>;
  readonly id: Scalars['ID'];
  readonly mints: ReadonlyArray<Maybe<Mint>>;
  readonly swaps: ReadonlyArray<Maybe<Swap>>;
  readonly timestamp: Scalars['BigInt'];
};


export type TransactionBurnsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Burn_Filter>;
};


export type TransactionMintsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Mint_Filter>;
};


export type TransactionSwapsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Swap_Filter>;
};

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly blockNumber?: InputMaybe<Scalars['BigInt']>;
  readonly blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  readonly blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  readonly blockNumber_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  readonly blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  readonly blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  readonly blockNumber_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly burns?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly mints?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly timestamp?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_not?: InputMaybe<Scalars['BigInt']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
};

export enum Transaction_OrderBy {
  BlockNumber = 'blockNumber',
  Burns = 'burns',
  Id = 'id',
  Mints = 'mints',
  Swaps = 'swaps',
  Timestamp = 'timestamp'
}

export type UbeswapDayData = {
  readonly __typename?: 'UbeswapDayData';
  readonly dailyVolumeCELO: Scalars['BigDecimal'];
  readonly dailyVolumeUSD: Scalars['BigDecimal'];
  readonly dailyVolumeUntracked: Scalars['BigDecimal'];
  readonly date: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly totalLiquidityCELO: Scalars['BigDecimal'];
  readonly totalLiquidityUSD: Scalars['BigDecimal'];
  readonly totalVolumeCELO: Scalars['BigDecimal'];
  readonly totalVolumeUSD: Scalars['BigDecimal'];
  readonly txCount: Scalars['BigInt'];
};

export type UbeswapDayData_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly dailyVolumeCELO?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeCELO_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCELO_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUntracked?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly date?: InputMaybe<Scalars['Int']>;
  readonly date_gt?: InputMaybe<Scalars['Int']>;
  readonly date_gte?: InputMaybe<Scalars['Int']>;
  readonly date_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly date_lt?: InputMaybe<Scalars['Int']>;
  readonly date_lte?: InputMaybe<Scalars['Int']>;
  readonly date_not?: InputMaybe<Scalars['Int']>;
  readonly date_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly totalLiquidityCELO?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityCELO_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeCELO?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeCELO_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly txCount?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly txCount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_not?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
};

export enum UbeswapDayData_OrderBy {
  DailyVolumeCelo = 'dailyVolumeCELO',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyVolumeUntracked = 'dailyVolumeUntracked',
  Date = 'date',
  Id = 'id',
  TotalLiquidityCelo = 'totalLiquidityCELO',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalVolumeCelo = 'totalVolumeCELO',
  TotalVolumeUsd = 'totalVolumeUSD',
  TxCount = 'txCount'
}

export type UbeswapFactory = {
  readonly __typename?: 'UbeswapFactory';
  readonly id: Scalars['ID'];
  readonly pairCount: Scalars['Int'];
  readonly totalLiquidityCELO: Scalars['BigDecimal'];
  readonly totalLiquidityUSD: Scalars['BigDecimal'];
  readonly totalVolumeCELO: Scalars['BigDecimal'];
  readonly totalVolumeUSD: Scalars['BigDecimal'];
  readonly txCount: Scalars['BigInt'];
  readonly untrackedVolumeUSD: Scalars['BigDecimal'];
};

export type UbeswapFactory_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly pairCount?: InputMaybe<Scalars['Int']>;
  readonly pairCount_gt?: InputMaybe<Scalars['Int']>;
  readonly pairCount_gte?: InputMaybe<Scalars['Int']>;
  readonly pairCount_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly pairCount_lt?: InputMaybe<Scalars['Int']>;
  readonly pairCount_lte?: InputMaybe<Scalars['Int']>;
  readonly pairCount_not?: InputMaybe<Scalars['Int']>;
  readonly pairCount_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly totalLiquidityCELO?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityCELO_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCELO_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeCELO?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeCELO_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeCELO_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly txCount?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_gt?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_gte?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly txCount_lt?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_lte?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_not?: InputMaybe<Scalars['BigInt']>;
  readonly txCount_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
};

export enum UbeswapFactory_OrderBy {
  Id = 'id',
  PairCount = 'pairCount',
  TotalLiquidityCelo = 'totalLiquidityCELO',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalVolumeCelo = 'totalVolumeCELO',
  TotalVolumeUsd = 'totalVolumeUSD',
  TxCount = 'txCount',
  UntrackedVolumeUsd = 'untrackedVolumeUSD'
}

export type User = {
  readonly __typename?: 'User';
  readonly id: Scalars['ID'];
  readonly liquidityPositions?: Maybe<ReadonlyArray<LiquidityPosition>>;
  readonly usdSwapped: Scalars['BigDecimal'];
};


export type UserLiquidityPositionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LiquidityPosition_Filter>;
};

export type User_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly usdSwapped?: InputMaybe<Scalars['BigDecimal']>;
  readonly usdSwapped_gt?: InputMaybe<Scalars['BigDecimal']>;
  readonly usdSwapped_gte?: InputMaybe<Scalars['BigDecimal']>;
  readonly usdSwapped_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly usdSwapped_lt?: InputMaybe<Scalars['BigDecimal']>;
  readonly usdSwapped_lte?: InputMaybe<Scalars['BigDecimal']>;
  readonly usdSwapped_not?: InputMaybe<Scalars['BigDecimal']>;
  readonly usdSwapped_not_in?: InputMaybe<ReadonlyArray<Scalars['BigDecimal']>>;
};

export enum User_OrderBy {
  Id = 'id',
  LiquidityPositions = 'liquidityPositions',
  UsdSwapped = 'usdSwapped'
}

export type _Block_ = {
  readonly __typename?: '_Block_';
  /** The hash of the block */
  readonly hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  readonly number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  readonly __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  readonly block: _Block_;
  /** The deployment ID */
  readonly deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  readonly hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type PairsCurrentQueryVariables = Exact<{ [key: string]: never; }>;


export type PairsCurrentQuery = { readonly __typename?: 'Query', readonly pairs: ReadonlyArray<{ readonly __typename?: 'Pair', readonly id: string }> };

export type PairFieldsFragment = { readonly __typename?: 'Pair', readonly id: string, readonly txCount: GBigInt, readonly reserve0: BigDecimal, readonly reserve1: BigDecimal, readonly reserveUSD: BigDecimal, readonly totalSupply: BigDecimal, readonly trackedReserveUSD: BigDecimal, readonly reserveCELO: BigDecimal, readonly volumeUSD: BigDecimal, readonly untrackedVolumeUSD: BigDecimal, readonly token0Price: BigDecimal, readonly token1Price: BigDecimal, readonly createdAtTimestamp: GBigInt, readonly createdAtBlockNumber: GBigInt, readonly token0: { readonly __typename?: 'Token', readonly id: string, readonly symbol: string, readonly name: string, readonly totalLiquidity: BigDecimal, readonly derivedCUSD?: BigDecimal | null }, readonly token1: { readonly __typename?: 'Token', readonly id: string, readonly symbol: string, readonly name: string, readonly totalLiquidity: BigDecimal, readonly derivedCUSD?: BigDecimal | null } };

export type PairsBulkQueryVariables = Exact<{
  allPairs: ReadonlyArray<Scalars['ID']> | Scalars['ID'];
}>;


export type PairsBulkQuery = { readonly __typename?: 'Query', readonly pairs: ReadonlyArray<{ readonly __typename?: 'Pair', readonly id: string, readonly txCount: GBigInt, readonly reserve0: BigDecimal, readonly reserve1: BigDecimal, readonly reserveUSD: BigDecimal, readonly totalSupply: BigDecimal, readonly trackedReserveUSD: BigDecimal, readonly reserveCELO: BigDecimal, readonly volumeUSD: BigDecimal, readonly untrackedVolumeUSD: BigDecimal, readonly token0Price: BigDecimal, readonly token1Price: BigDecimal, readonly createdAtTimestamp: GBigInt, readonly createdAtBlockNumber: GBigInt, readonly token0: { readonly __typename?: 'Token', readonly id: string, readonly symbol: string, readonly name: string, readonly totalLiquidity: BigDecimal, readonly derivedCUSD?: BigDecimal | null }, readonly token1: { readonly __typename?: 'Token', readonly id: string, readonly symbol: string, readonly name: string, readonly totalLiquidity: BigDecimal, readonly derivedCUSD?: BigDecimal | null } }> };
