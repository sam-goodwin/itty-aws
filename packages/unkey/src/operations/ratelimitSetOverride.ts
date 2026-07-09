import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RatelimitSetOverrideInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String,
    duration: Schema.Number,
    identifier: Schema.String,
    limit: Schema.Number,
  }).pipe(T.Http({ method: "POST", path: "/v2/ratelimit.setOverride" }));
export type RatelimitSetOverrideInput = typeof RatelimitSetOverrideInput.Type;

// Output Schema
export const RatelimitSetOverrideOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      overrideId: Schema.String,
    }),
  });
export type RatelimitSetOverrideOutput = typeof RatelimitSetOverrideOutput.Type;

// The operation
/**
 * Set ratelimit override
 *
 * Create or update a custom rate limit for specific identifiers, bypassing the namespace default.
 * Use this to create premium tiers with higher limits, apply stricter limits to specific users, or implement emergency throttling.
 * **Important:** Overrides take effect immediately and completely replace the default limit for matching identifiers. Use wildcard patterns (e.g., `premium_*`) to match multiple identifiers.
 * **Permissions:** Requires `ratelimit.*.set_override` or `ratelimit.<namespace_id>.set_override`
 */
export const ratelimitSetOverride = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RatelimitSetOverrideInput,
    outputSchema: RatelimitSetOverrideOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
