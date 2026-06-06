import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysCreateKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiId: Schema.String,
  prefix: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  byteLength: Schema.optional(Schema.Number),
  externalId: Schema.optional(Schema.String),
  meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  roles: Schema.optional(Schema.Array(Schema.String)),
  permissions: Schema.optional(Schema.Array(Schema.String)),
  expires: Schema.optional(Schema.Number),
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
  recoverable: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/v2/keys.createKey" }));
export type KeysCreateKeyInput = typeof KeysCreateKeyInput.Type;

// Output Schema
export const KeysCreateKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Struct({
    keyId: Schema.String,
    key: Schema.String,
  }),
});
export type KeysCreateKeyOutput = typeof KeysCreateKeyOutput.Type;

// The operation
/**
 * Create API key
 *
 * Create a new API key for user authentication and authorization.
 * Use this endpoint when users sign up, upgrade subscription tiers, or need additional keys. Keys are cryptographically secure and unique to the specified API namespace.
 * **Important**: The key is returned only once. Store it immediately and provide it to your user, as it cannot be retrieved later.
 * **Common use cases:**
 * - Generate keys for new user registrations
 * - Create additional keys for different applications
 * - Issue keys with specific permissions or limits
 * **Required Permissions**
 * Your root key needs one of:
 * - `api.*.create_key` (create keys in any API)
 * - `api.<api_id>.create_key` (create keys in specific API)
 */
export const keysCreateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysCreateKeyInput,
  outputSchema: KeysCreateKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
