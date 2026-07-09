import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysMigrateKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  migrationId: Schema.String,
  apiId: Schema.String,
  keys: Schema.Array(
    Schema.Struct({
      hash: Schema.String,
      name: Schema.optional(Schema.String),
      externalId: Schema.optional(Schema.String),
      meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      roles: Schema.optional(Schema.Array(Schema.String)),
      permissions: Schema.optional(Schema.Array(Schema.String)),
      expires: Schema.optional(Schema.Number),
      enabled: Schema.optional(Schema.Boolean),
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
    }),
  ),
}).pipe(T.Http({ method: "POST", path: "/v2/keys.migrateKeys" }));
export type KeysMigrateKeysInput = typeof KeysMigrateKeysInput.Type;

// Output Schema
export const KeysMigrateKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Struct({
    migrated: Schema.Array(
      Schema.Struct({
        hash: Schema.String,
        keyId: Schema.String,
      }),
    ),
    failed: Schema.Array(Schema.String),
  }),
});
export type KeysMigrateKeysOutput = typeof KeysMigrateKeysOutput.Type;

// The operation
/**
 * Migrate API key(s)
 *
 * Returns HTTP 200 even on partial success; hashes that could not be migrated are listed under `data.failed`.
 * **Required Permissions**
 * Your root key must have one of the following permissions for basic key information:
 * - `api.*.create_key` (to migrate keys to any API)
 * - `api.<api_id>.create_key` (to migrate keys to a specific API)
 */
export const keysMigrateKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysMigrateKeysInput,
  outputSchema: KeysMigrateKeysOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
