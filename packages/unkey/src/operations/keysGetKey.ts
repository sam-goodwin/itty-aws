import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const KeysGetKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyId: Schema.String,
  decrypt: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/v2/keys.getKey" }));
export type KeysGetKeyInput = typeof KeysGetKeyInput.Type;

// Output Schema
export const KeysGetKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Struct({
    keyId: Schema.String,
    start: Schema.String,
    enabled: Schema.Boolean,
    name: Schema.optional(Schema.String),
    meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    createdAt: Schema.Number,
    updatedAt: Schema.optional(Schema.Number),
    lastUsedAt: Schema.optional(Schema.Number),
    expires: Schema.optional(Schema.Number),
    permissions: Schema.optional(Schema.Array(Schema.String)),
    roles: Schema.optional(Schema.Array(Schema.String)),
    credits: Schema.optional(
      Schema.Struct({
        remaining: Schema.NullOr(Schema.Number),
        refill: Schema.optional(
          Schema.Struct({
            interval: Schema.Literals(["daily", "monthly"]),
            amount: Schema.Number,
            refillDay: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        externalId: Schema.String,
        meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        ratelimits: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              name: Schema.String,
              limit: Schema.Number,
              duration: Schema.Number,
              autoApply: Schema.Boolean,
            }),
          ),
        ),
      }),
    ),
    plaintext: Schema.optional(SensitiveOutputString),
    ratelimits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          limit: Schema.Number,
          duration: Schema.Number,
          autoApply: Schema.Boolean,
        }),
      ),
    ),
  }),
});
export type KeysGetKeyOutput = typeof KeysGetKeyOutput.Type;

// The operation
/**
 * Get API key
 *
 * Retrieve detailed key information for dashboard interfaces and administrative purposes.
 * Use this to build key management dashboards showing users their key details, status, permissions, and usage data. You can identify keys by `keyId` or the actual key string.
 * **Important**: Set `decrypt: true` only in secure contexts to retrieve plaintext key values from recoverable keys.
 * **Required Permissions**
 * Your root key must have one of the following permissions for basic key information:
 * - `api.*.read_key` (to read keys from any API)
 * - `api.<api_id>.read_key` (to read keys from a specific API)
 * Additional permission required for decrypt functionality:
 * - `api.*.decrypt_key` or `api.<api_id>.decrypt_key`
 */
export const keysGetKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysGetKeyInput,
  outputSchema: KeysGetKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
