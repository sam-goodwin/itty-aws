import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RatelimitListOverridesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String,
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "POST", path: "/v2/ratelimit.listOverrides" }));
export type RatelimitListOverridesInput =
  typeof RatelimitListOverridesInput.Type;

// Output Schema
export const RatelimitListOverridesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Array(
      Schema.Struct({
        overrideId: Schema.String,
        duration: Schema.Number,
        identifier: Schema.String,
        limit: Schema.Number,
      }),
    ),
    pagination: Schema.optional(
      Schema.Struct({
        cursor: Schema.optional(Schema.String),
        hasMore: Schema.Boolean,
      }),
    ),
  });
export type RatelimitListOverridesOutput =
  typeof RatelimitListOverridesOutput.Type;

// The operation
/**
 * List ratelimit overrides
 *
 * Retrieve a paginated list of all rate limit overrides in a namespace.
 * Use this to audit rate limiting policies, build admin dashboards, or manage override configurations.
 * **Important:** Results are paginated. Use the cursor parameter to retrieve additional pages when more results are available.
 * **Permissions:** Requires `ratelimit.*.read_override` or `ratelimit.<namespace_id>.read_override`
 */
export const ratelimitListOverrides = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RatelimitListOverridesInput,
    outputSchema: RatelimitListOverridesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
