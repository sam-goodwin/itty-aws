import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ValidateX402ResourceInput {
  resource: string;
  method?: "GET" | "POST";
}
export const ValidateX402ResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String,
    method: Schema.optional(Schema.Literals(["GET", "POST"])),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/x402/validate" }),
  ) as unknown as Schema.Codec<ValidateX402ResourceInput>;

// Output Schema
export interface ValidateX402ResourceOutput {
  valid: boolean;
  statusCode: number | null;
  x402Version: number | null;
  preflight: {
    check: "reachable" | "returns_402" | "has_bazaar_extension" | "parse";
    passed: boolean;
    detail: string;
    expected?: string;
    actual?: string;
    severity: "required" | "advisory";
  }[];
  paymentRequirements:
    | {
        scheme: "exact" | "upto" | "batch-settlement";
        network:
          | "eip155:8453"
          | "eip155:84532"
          | "eip155:137"
          | "eip155:42161"
          | "eip155:480"
          | "eip155:4801"
          | "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
          | "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1";
        asset: string;
        amount: string;
        payTo: string;
        maxTimeoutSeconds: number;
        extra?: Record<string, unknown>;
      }
    | {
        scheme: "exact";
        network: "base" | "base-sepolia" | "solana" | "solana-devnet";
        maxAmountRequired: string;
        resource: string;
        description: string;
        mimeType: string;
        outputSchema?: Record<string, unknown>;
        payTo: string;
        maxTimeoutSeconds: number;
        asset: string;
        extra?: Record<string, unknown>;
      }
    | null;
  bazaarExtension: Record<string, unknown> | null;
  simulation: { outcome: "accepted" | "rejected"; rejectionReason?: string };
  index: {
    active: boolean;
    lastCrawledAt: string | null;
    quality?: {
      l30DaysTotalCalls?: number;
      l30DaysUniquePayers?: number;
      lastCalledAt?: string;
    };
  } | null;
}
export const ValidateX402ResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valid: Schema.Boolean,
    statusCode: Schema.NullOr(Schema.Number),
    x402Version: Schema.NullOr(Schema.Number),
    preflight: Schema.Array(
      Schema.Struct({
        check: Schema.Literals([
          "reachable",
          "returns_402",
          "has_bazaar_extension",
          "parse",
        ]),
        passed: Schema.Boolean,
        detail: Schema.String,
        expected: Schema.optional(Schema.String),
        actual: Schema.optional(Schema.String),
        severity: Schema.Literals(["required", "advisory"]),
      }),
    ),
    paymentRequirements: Schema.NullOr(
      Schema.Union([
        Schema.Struct({
          scheme: Schema.Literals(["exact", "upto", "batch-settlement"]),
          network: Schema.Literals([
            "eip155:8453",
            "eip155:84532",
            "eip155:137",
            "eip155:42161",
            "eip155:480",
            "eip155:4801",
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
          ]),
          asset: Schema.String,
          amount: Schema.String,
          payTo: Schema.String,
          maxTimeoutSeconds: Schema.Number,
          extra: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        }),
        Schema.Struct({
          scheme: Schema.Literals(["exact"]),
          network: Schema.Literals([
            "base",
            "base-sepolia",
            "solana",
            "solana-devnet",
          ]),
          maxAmountRequired: Schema.String,
          resource: Schema.String,
          description: Schema.String,
          mimeType: Schema.String,
          outputSchema: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          payTo: Schema.String,
          maxTimeoutSeconds: Schema.Number,
          asset: Schema.String,
          extra: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        }),
      ]),
    ),
    bazaarExtension: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    simulation: Schema.Struct({
      outcome: Schema.Literals(["accepted", "rejected"]),
      rejectionReason: Schema.optional(Schema.String),
    }),
    index: Schema.NullOr(
      Schema.Struct({
        active: Schema.Boolean,
        lastCrawledAt: Schema.NullOr(Schema.String),
        quality: Schema.optional(
          Schema.Struct({
            l30DaysTotalCalls: Schema.optional(Schema.Number),
            l30DaysUniquePayers: Schema.optional(Schema.Number),
            lastCalledAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ValidateX402ResourceOutput>;

// The operation
/**
 * Validate x402 endpoint
 *
 * Validates an x402 endpoint's bazaar-discovery configuration by probing the seller's URL live.
 * Returns a uniform array of preflight check results (reachable, returns402, hasBazaarExtension, parse) and a simulated facilitator accept/reject decision so sellers and agents can confirm their endpoint is ready to be discovered before going live.
 * This operation is read-only: it performs no payment and does not index the resource.
 */
export const validateX402Resource = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ValidateX402ResourceInput,
    outputSchema: ValidateX402ResourceOutput,
  }),
);
