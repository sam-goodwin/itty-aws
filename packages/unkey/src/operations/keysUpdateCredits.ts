import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysUpdateCreditsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    keyId: Schema.String,
    value: Schema.optional(Schema.NullOr(Schema.Number)),
    operation: Schema.Literals(["set", "increment", "decrement"]),
  },
).pipe(T.Http({ method: "POST", path: "/v2/keys.updateCredits" }));
export type KeysUpdateCreditsInput = typeof KeysUpdateCreditsInput.Type;

// Output Schema
export const KeysUpdateCreditsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      remaining: Schema.NullOr(Schema.Number),
      refill: Schema.optional(
        Schema.Struct({
          interval: Schema.Literals(["daily", "monthly"]),
          amount: Schema.Number,
          refillDay: Schema.optional(Schema.Number),
        }),
      ),
    }),
  });
export type KeysUpdateCreditsOutput = typeof KeysUpdateCreditsOutput.Type;

// The operation
/**
 * Update key credits
 *
 * Update credit quotas in response to plan changes, billing cycles, or usage purchases.
 * Use this for user upgrades/downgrades, monthly quota resets, credit purchases, or promotional bonuses. Supports three operations: set, increment, or decrement credits. Set to null for unlimited usage.
 * **Important**: Setting unlimited credits automatically clears existing refill configurations.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.update_key` (to update keys in any API)
 * - `api.<api_id>.update_key` (to update keys in a specific API)
 * **Side Effects**
 * Credit updates remove the key from cache immediately. Setting credits to unlimited automatically clears any existing refill settings. Changes take effect instantly but may take up to 30 seconds to propagate to all edge regions.
 */
export const keysUpdateCredits = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysUpdateCreditsInput,
  outputSchema: KeysUpdateCreditsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
