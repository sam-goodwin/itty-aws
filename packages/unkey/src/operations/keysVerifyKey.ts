import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const KeysVerifyKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.String,
  tags: Schema.optional(Schema.Array(Schema.String)),
  permissions: Schema.optional(Schema.String),
  credits: Schema.optional(
    Schema.Struct({
      cost: Schema.Number,
    }),
  ),
  ratelimits: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        cost: Schema.optional(Schema.Number),
        limit: Schema.optional(Schema.Number),
        duration: Schema.optional(Schema.Number),
      }),
    ),
  ),
  migrationId: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/v2/keys.verifyKey" }));
export type KeysVerifyKeyInput = typeof KeysVerifyKeyInput.Type;

// Output Schema
export const KeysVerifyKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Struct({
    valid: Schema.Boolean,
    code: Schema.Literals([
      "VALID",
      "NOT_FOUND",
      "FORBIDDEN",
      "INSUFFICIENT_PERMISSIONS",
      "USAGE_EXCEEDED",
      "RATE_LIMITED",
      "DISABLED",
      "EXPIRED",
    ]),
    keyId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    expires: Schema.optional(Schema.Number),
    credits: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    permissions: Schema.optional(Schema.Array(Schema.String)),
    roles: Schema.optional(Schema.Array(Schema.String)),
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
    ratelimits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          exceeded: Schema.Boolean,
          id: Schema.String,
          name: Schema.String,
          limit: Schema.Number,
          duration: Schema.Number,
          reset: Schema.Number,
          remaining: Schema.Number,
          autoApply: Schema.Boolean,
        }),
      ),
    ),
  }),
});
export type KeysVerifyKeyOutput = typeof KeysVerifyKeyOutput.Type;

// The operation
/**
 * Verify API key
 *
 * Verify an API key's validity and permissions for request authentication.
 * Use this endpoint on every incoming request to your protected resources. It checks key validity, permissions, rate limits, and usage quotas in a single call.
 * **Important**: Returns HTTP 200 for all verification outcomes — check the `valid` field in response data to determine if the key is authorized. A 429 may be returned if the workspace exceeds its API rate limit.
 * **Common use cases:**
 * - Authenticate API requests before processing
 * - Enforce permission-based access control
 * - Track usage and apply rate limits
 * **Required Permissions**
 * Your root key needs one of:
 * - `api.*.verify_key` (verify keys in any API)
 * - `api.<api_id>.verify_key` (verify keys in specific API)
 * **Note**: If your root key has no verify permissions at all, you will receive a `403 Forbidden` error. If your root key has verify permissions for a different API than the key you're verifying, you will receive a `200` response with `code: NOT_FOUND` to avoid leaking key existence.
 */
export const keysVerifyKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysVerifyKeyInput,
  outputSchema: KeysVerifyKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
