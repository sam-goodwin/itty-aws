import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysUpdateKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyId: Schema.String,
  name: Schema.optional(Schema.NullOr(Schema.String)),
  externalId: Schema.optional(Schema.NullOr(Schema.String)),
  meta: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  expires: Schema.optional(Schema.NullOr(Schema.Number)),
  credits: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        remaining: Schema.optional(Schema.NullOr(Schema.Number)),
        refill: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              interval: Schema.Literals(["daily", "monthly"]),
              amount: Schema.Number,
              refillDay: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
    ),
  ),
  ratelimits: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        limit: Schema.Number,
        duration: Schema.Number,
        autoApply: Schema.Boolean,
      }),
    ),
  ),
  enabled: Schema.optional(Schema.Boolean),
  roles: Schema.optional(Schema.Array(Schema.String)),
  permissions: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/v2/keys.updateKey" }));
export type KeysUpdateKeyInput = typeof KeysUpdateKeyInput.Type;

// Output Schema
export const KeysUpdateKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Unknown,
});
export type KeysUpdateKeyOutput = typeof KeysUpdateKeyOutput.Type;

// The operation
/**
 * Update key settings
 *
 * Update key properties in response to plan changes, subscription updates, or account status changes.
 * Use this for user upgrades/downgrades, role modifications, or administrative changes. Supports partial updates - only specify fields you want to change. Set fields to null to clear them.
 * **Important**: Permissions and roles are replaced entirely. Use dedicated add/remove endpoints for incremental changes.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `api.*.update_key` (to update keys in any API)
 * - `api.<api_id>.update_key` (to update keys in a specific API)
 * **Side Effects**
 * If you specify an `externalId` that doesn't exist, a new identity will be automatically created and linked to the key. Permission updates will auto-create any permissions that don't exist in your workspace. Changes take effect immediately but may take up to 30 seconds to propagate to all edge regions due to cache invalidation.
 */
export const keysUpdateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysUpdateKeyInput,
  outputSchema: KeysUpdateKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
