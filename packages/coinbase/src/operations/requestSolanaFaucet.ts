import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RequestSolanaFaucetInput {
  address: string;
  token: "sol" | "usdc" | "cbtusd";
}
export const RequestSolanaFaucetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String,
    token: Schema.Literals(["sol", "usdc", "cbtusd"]),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/solana/faucet" }),
  ) as unknown as Schema.Codec<RequestSolanaFaucetInput>;

// Output Schema
export interface RequestSolanaFaucetOutput {
  transactionSignature: string;
}
export const RequestSolanaFaucetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transactionSignature: Schema.String,
  }) as unknown as Schema.Codec<RequestSolanaFaucetOutput>;

// The operation
/**
 * Request funds on Solana devnet
 *
 * Request funds from the CDP Faucet on Solana devnet.
 * Faucets are available for SOL, USDC, and CBTUSD.
 * To prevent abuse, we enforce rate limits within a rolling 24-hour window to control the amount of funds that can be requested.
 * These limits are applied at both the CDP Project level and the blockchain address level.
 * A single blockchain address cannot exceed the specified limits, even if multiple users submit requests to the same address.
 */
export const requestSolanaFaucet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RequestSolanaFaucetInput,
  outputSchema: RequestSolanaFaucetOutput,
}));
