import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const ApisListKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiId: Schema.String,
  limit: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  externalId: Schema.optional(Schema.String),
  decrypt: Schema.optional(Schema.Boolean),
  revalidateKeysCache: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/v2/apis.listKeys" }));
export type ApisListKeysInput = typeof ApisListKeysInput.Type;

// Output Schema
export const ApisListKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Array(
    Schema.Struct({
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
  ),
  pagination: Schema.optional(
    Schema.Struct({
      cursor: Schema.optional(Schema.String),
      hasMore: Schema.Boolean,
    }),
  ),
});
export type ApisListKeysOutput = typeof ApisListKeysOutput.Type;

// The operation
/**
 * List API keys
 *
 * Retrieve a paginated list of API keys for dashboard and administrative interfaces.
 * Use this to build key management dashboards, filter keys by user with `externalId`, or retrieve key details for administrative purposes. Each key includes status, metadata, permissions, and usage limits.
 * **Important**: Set `decrypt: true` only in secure contexts to retrieve plaintext key values from recoverable keys.
 * **Required Permissions**
 * Your root key must have one of the following permissions for basic key listing:
 * - `api.*.read_key` (to read keys from any API)
 * - `api.<api_id>.read_key` (to read keys from a specific API)
 * Additionally, you need read access to the API itself:
 * - `api.*.read_api` or `api.<api_id>.read_api`
 * Additional permission required for decrypt functionality:
 * - `api.*.decrypt_key` or `api.<api_id>.decrypt_key`
 */
export const apisListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApisListKeysInput,
  outputSchema: ApisListKeysOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
