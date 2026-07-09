import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Gone } from "../errors.ts";

// Input Schema
export const RatelimitLimitInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namespace: Schema.String,
  cost: Schema.optional(Schema.Number),
  duration: Schema.Number,
  identifier: Schema.String,
  limit: Schema.Number,
}).pipe(T.Http({ method: "POST", path: "/v2/ratelimit.limit" }));
export type RatelimitLimitInput = typeof RatelimitLimitInput.Type;

// Output Schema
export const RatelimitLimitOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Struct({
    limit: Schema.Number,
    remaining: Schema.Number,
    reset: Schema.Number,
    success: Schema.Boolean,
    overrideId: Schema.optional(Schema.String),
  }),
});
export type RatelimitLimitOutput = typeof RatelimitLimitOutput.Type;

// The operation
/**
 * Apply rate limiting
 *
 * Check and enforce rate limits for any identifier (user ID, IP address, API client, etc.).
 * Use this for rate limiting beyond API keys - limit users by ID, IPs by address, or any custom identifier. Supports namespace organization, variable costs, and custom overrides.
 * **Response Codes**: Rate limit checks return HTTP 200 regardless of whether the limit is exceeded — check the `success` field in the response to determine if the request should be allowed. A 429 may be returned if the workspace exceeds its API rate limit. Other 4xx responses indicate auth, namespace existence/deletion, or validation errors (e.g., 410 Gone for deleted namespaces). 5xx responses indicate server errors.
 * **Required Permissions**
 * Your root key must have one of the following permissions:
 * - `ratelimit.*.limit` (to check limits in any namespace)
 * - `ratelimit.<namespace_id>.limit` (to check limits in a specific namespace)
 */
export const ratelimitLimit = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RatelimitLimitInput,
  outputSchema: RatelimitLimitOutput,
  errors: [BadRequest, Forbidden, NotFound, Gone] as const,
}));
