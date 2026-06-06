import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const KeysWhoamiInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/v2/keys.whoami" }));
export type KeysWhoamiInput = typeof KeysWhoamiInput.Type;

// Output Schema
export const KeysWhoamiOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type KeysWhoamiOutput = typeof KeysWhoamiOutput.Type;

// The operation
/**
 * Get API key by hash
 *
 * Find out what key this is.
 * **Required Permissions**
 * Your root key must have one of the following permissions for basic key information:
 * - `api.*.read_key` (to read keys from any API)
 * - `api.<api_id>.read_key` (to read keys from a specific API)
 * If your rootkey lacks permissions but the key exists, we may return a 404 status here to prevent leaking the existance of a key to unauthorized clients. If you believe that a key should exist, but receive a 404, please double check your root key has the correct permissions.
 */
export const keysWhoami = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysWhoamiInput,
  outputSchema: KeysWhoamiOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
