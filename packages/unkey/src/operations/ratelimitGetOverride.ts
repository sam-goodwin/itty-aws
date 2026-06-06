import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RatelimitGetOverrideInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String,
    identifier: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/ratelimit.getOverride" }));
export type RatelimitGetOverrideInput = typeof RatelimitGetOverrideInput.Type;

// Output Schema
export const RatelimitGetOverrideOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      overrideId: Schema.String,
      duration: Schema.Number,
      identifier: Schema.String,
      limit: Schema.Number,
    }),
  });
export type RatelimitGetOverrideOutput = typeof RatelimitGetOverrideOutput.Type;

// The operation
/**
 * Get ratelimit override
 *
 * Retrieve the configuration of a specific rate limit override by its identifier.
 * Use this to inspect override configurations, audit rate limiting policies, or debug rate limiting behavior.
 * **Important:** The identifier must match exactly as specified when creating the override, including wildcard patterns.
 * **Permissions:** Requires `ratelimit.*.read_override` or `ratelimit.<namespace_id>.read_override`
 */
export const ratelimitGetOverride = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RatelimitGetOverrideInput,
    outputSchema: RatelimitGetOverrideOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
