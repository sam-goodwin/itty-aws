import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Gone } from "../errors.ts";

// Input Schema
export const RatelimitMultiLimitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/v2/ratelimit.multiLimit" }),
  );
export type RatelimitMultiLimitInput = typeof RatelimitMultiLimitInput.Type;

// Output Schema
export const RatelimitMultiLimitOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      passed: Schema.Boolean,
      limits: Schema.Array(
        Schema.Struct({
          namespace: Schema.String,
          identifier: Schema.String,
          limit: Schema.Number,
          remaining: Schema.Number,
          reset: Schema.Number,
          passed: Schema.Boolean,
          overrideId: Schema.optional(Schema.String),
        }),
      ),
    }),
  });
export type RatelimitMultiLimitOutput = typeof RatelimitMultiLimitOutput.Type;

// The operation
/**
 * Apply multiple rate limit checks
 *
 * Check and enforce multiple rate limits in a single request for any identifiers (user IDs, IP addresses, API clients, etc.).
 * Use this to efficiently check multiple rate limits at once. Each rate limit check is independent and returns its own result with a top-level `passed` indicator showing if all checks succeeded.
 * **Response Codes**: Rate limit checks return HTTP 200 regardless of whether limits are exceeded — check the `passed` field to see if all limits passed, or the `success` field in each individual result. A 429 may be returned if the workspace exceeds its API rate limit. Other 4xx responses indicate auth, namespace existence/deletion, or validation errors (e.g., 410 Gone for deleted namespaces). 5xx responses indicate server errors.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `ratelimit.*.limit` (to check limits in any namespace)
 * - `ratelimit.<namespace_id>.limit` (to check limits in all specific namespaces being checked)
 */
export const ratelimitMultiLimit = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RatelimitMultiLimitInput,
  outputSchema: RatelimitMultiLimitOutput,
  errors: [BadRequest, Forbidden, NotFound, Gone] as const,
}));
