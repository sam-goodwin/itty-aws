import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RatelimitDeleteOverrideInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.String,
    identifier: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/ratelimit.deleteOverride" }));
export type RatelimitDeleteOverrideInput =
  typeof RatelimitDeleteOverrideInput.Type;

// Output Schema
export const RatelimitDeleteOverrideOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Unknown,
  });
export type RatelimitDeleteOverrideOutput =
  typeof RatelimitDeleteOverrideOutput.Type;

// The operation
/**
 * Delete ratelimit override
 *
 * Permanently remove a rate limit override. Affected identifiers immediately revert to the namespace default.
 * Use this to remove temporary overrides, reset identifiers to standard limits, or clean up outdated rules.
 * **Important:** Deletion is immediate and permanent. The override cannot be recovered and must be recreated if needed again.
 * **Permissions:** Requires `ratelimit.*.delete_override` or `ratelimit.<namespace_id>.delete_override`
 */
export const ratelimitDeleteOverride = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RatelimitDeleteOverrideInput,
    outputSchema: RatelimitDeleteOverrideOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
