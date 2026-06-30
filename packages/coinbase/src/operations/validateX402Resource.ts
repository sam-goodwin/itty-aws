import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ValidateX402ResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String,
    method: Schema.optional(Schema.Literals(["GET", "POST"])),
  }).pipe(T.Http({ method: "POST", path: "/v2/x402/validate" }));
export type ValidateX402ResourceInput = typeof ValidateX402ResourceInput.Type;

// Output Schema
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
    paymentRequirements: Schema.Unknown,
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
  });
export type ValidateX402ResourceOutput = typeof ValidateX402ResourceOutput.Type;

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
