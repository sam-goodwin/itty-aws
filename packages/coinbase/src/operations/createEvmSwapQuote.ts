import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateEvmSwapQuoteInput {
  network: "base" | "ethereum" | "arbitrum" | "optimism" | "polygon";
  toToken: string;
  fromToken: string;
  fromAmount: string;
  taker: string;
  signerAddress?: string;
  gasPrice?: string;
  slippageBps?: number;
}
export const CreateEvmSwapQuoteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.Literals([
      "base",
      "ethereum",
      "arbitrum",
      "optimism",
      "polygon",
    ]),
    toToken: Schema.String,
    fromToken: Schema.String,
    fromAmount: Schema.String,
    taker: Schema.String,
    signerAddress: Schema.optional(Schema.String),
    gasPrice: Schema.optional(Schema.String),
    slippageBps: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/evm/swaps" }),
  ) as unknown as Schema.Codec<CreateEvmSwapQuoteInput>;

// Output Schema
export type CreateEvmSwapQuoteOutput =
  | {
      permit2: {
        hash: string;
        eip712: {
          domain: {
            name?: string;
            version?: string;
            chainId?: number;
            verifyingContract?: string;
            salt?: string;
          };
          types: unknown;
          primaryType: string;
          message: unknown;
        };
      } | null;
      transaction: {
        to: string;
        data: string;
        gas: string;
        gasPrice: string;
        value: string;
      };
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
    }
  | { liquidityAvailable: false };
export const CreateEvmSwapQuoteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      permit2: Schema.NullOr(
        Schema.Struct({
          hash: Schema.String,
          eip712: Schema.Struct({
            domain: Schema.Struct({
              name: Schema.optional(Schema.String),
              version: Schema.optional(Schema.String),
              chainId: Schema.optional(Schema.Number),
              verifyingContract: Schema.optional(Schema.String),
              salt: Schema.optional(Schema.String),
            }),
            types: Schema.Unknown,
            primaryType: Schema.String,
            message: Schema.Unknown,
          }),
        }),
      ),
      transaction: Schema.Struct({
        to: Schema.String,
        data: Schema.String,
        gas: Schema.String,
        gasPrice: Schema.String,
        value: Schema.String,
      }),
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
    }),
    Schema.Struct({
      liquidityAvailable: Schema.Literals([false]),
    }),
  ]) as unknown as Schema.Codec<CreateEvmSwapQuoteOutput>;

// The operation
/**
 * Create swap quote
 *
 * Create a swap quote, which includes the payload to sign as well as the transaction data needed to execute the swap. The developer is responsible for signing the payload and submitting the transaction to the network in order to execute the swap.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const createEvmSwapQuote = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateEvmSwapQuoteInput,
  outputSchema: CreateEvmSwapQuoteOutput,
}));
