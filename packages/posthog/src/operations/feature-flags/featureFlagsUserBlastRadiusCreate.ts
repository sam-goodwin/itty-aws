import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FeatureFlagsUserBlastRadiusCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    condition: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    group_type_index: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/feature_flags/user_blast_radius/",
    }),
  );
export type FeatureFlagsUserBlastRadiusCreateInput =
  typeof FeatureFlagsUserBlastRadiusCreateInput.Type;

// Output Schema
export const FeatureFlagsUserBlastRadiusCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    affected: Schema.optional(Schema.Number),
    total: Schema.optional(Schema.Number),
  });
export type FeatureFlagsUserBlastRadiusCreateOutput =
  typeof FeatureFlagsUserBlastRadiusCreateOutput.Type;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsUserBlastRadiusCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsUserBlastRadiusCreateInput,
    outputSchema: FeatureFlagsUserBlastRadiusCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
