import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface SupportedX402PaymentKindsInput {}
export const SupportedX402PaymentKindsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/v2/x402/supported" }),
  ) as unknown as Schema.Codec<SupportedX402PaymentKindsInput>;

// Output Schema
export interface SupportedX402PaymentKindsOutput {
  kinds: {
    x402Version: 1 | 2;
    scheme: "exact" | "upto" | "batch-settlement";
    network:
      | "base-sepolia"
      | "base"
      | "solana-devnet"
      | "solana"
      | "eip155:8453"
      | "eip155:84532"
      | "eip155:137"
      | "eip155:42161"
      | "eip155:480"
      | "eip155:4801"
      | "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
      | "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1";
    extra?: Record<string, unknown>;
  }[];
  extensions: string[];
  signers: Record<string, string[]>;
}
export const SupportedX402PaymentKindsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kinds: Schema.Array(
      Schema.Struct({
        x402Version: Schema.Literals([1, 2]),
        scheme: Schema.Literals(["exact", "upto", "batch-settlement"]),
        network: Schema.Literals([
          "base-sepolia",
          "base",
          "solana-devnet",
          "solana",
          "eip155:8453",
          "eip155:84532",
          "eip155:137",
          "eip155:42161",
          "eip155:480",
          "eip155:4801",
          "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
          "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
        ]),
        extra: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
    extensions: Schema.Array(Schema.String),
    signers: Schema.Record(Schema.String, Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<SupportedX402PaymentKindsOutput>;

// The operation
/**
 * Get supported payment schemes and networks
 *
 * Get the supported x402 protocol payment schemes and networks that the facilitator is able to verify and settle payments for.
 */
export const supportedX402PaymentKinds = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SupportedX402PaymentKindsInput,
    outputSchema: SupportedX402PaymentKindsOutput,
  }),
);
