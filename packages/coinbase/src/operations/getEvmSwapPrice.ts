import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetEvmSwapPriceInput {
  network: string;
  toToken: string;
  fromToken: string;
  fromAmount: string;
  taker: string;
  signerAddress?: string;
  gasPrice?: string;
  slippageBps?: string;
}
export const GetEvmSwapPriceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  network: Schema.String,
  toToken: Schema.String,
  fromToken: Schema.String,
  fromAmount: Schema.String,
  taker: Schema.String,
  signerAddress: Schema.optional(Schema.String),
  gasPrice: Schema.optional(Schema.String),
  slippageBps: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/v2/evm/swaps/quote" }),
) as unknown as Schema.Codec<GetEvmSwapPriceInput>;

// Output Schema
export type GetEvmSwapPriceOutput =
  | {
      blockNumber: string;
      toAmount: string;
      toToken: string;
      fees: {
        gasFee: { amount: string; token: string } | null;
        protocolFee: { amount: string; token: string } | null;
      };
      issues: {
        allowance: { currentAllowance: string; spender: string } | null;
        balance: {
          token: string;
          currentBalance: string;
          requiredBalance: string;
        } | null;
        simulationIncomplete: boolean;
      };
      liquidityAvailable: true;
      minToAmount: string;
      fromAmount: string;
      fromToken: string;
      gas: string | null;
      gasPrice: string;
    }
  | { liquidityAvailable: false };
export const GetEvmSwapPriceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
  Schema.Struct({
    blockNumber: Schema.String,
    toAmount: Schema.String,
    toToken: Schema.String,
    fees: Schema.Struct({
      gasFee: Schema.NullOr(
        Schema.Struct({
          amount: Schema.String,
          token: Schema.String,
        }),
      ),
      protocolFee: Schema.NullOr(
        Schema.Struct({
          amount: Schema.String,
          token: Schema.String,
        }),
      ),
    }),
    issues: Schema.Struct({
      allowance: Schema.NullOr(
        Schema.Struct({
          currentAllowance: Schema.String,
          spender: Schema.String,
        }),
      ),
      balance: Schema.NullOr(
        Schema.Struct({
          token: Schema.String,
          currentBalance: Schema.String,
          requiredBalance: Schema.String,
        }),
      ),
      simulationIncomplete: Schema.Boolean,
    }),
    liquidityAvailable: Schema.Literals([true]),
    minToAmount: Schema.String,
    fromAmount: Schema.String,
    fromToken: Schema.String,
    gas: Schema.NullOr(Schema.String),
    gasPrice: Schema.String,
  }),
  Schema.Struct({
    liquidityAvailable: Schema.Literals([false]),
  }),
]) as unknown as Schema.Codec<GetEvmSwapPriceOutput>;

// The operation
/**
 * Get swap price estimate
 *
 * Get a price estimate for a swap between two tokens on an EVM network.
 */
export const getEvmSwapPrice = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetEvmSwapPriceInput,
  outputSchema: GetEvmSwapPriceOutput,
}));
