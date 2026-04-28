import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const FeatureFlagsDependentFlagsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/{id}/dependent_flags/",
    }),
  );
export type FeatureFlagsDependentFlagsListInput =
  typeof FeatureFlagsDependentFlagsListInput.Type;

// Output Schema
export const FeatureFlagsDependentFlagsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.Number,
      key: Schema.String,
      name: Schema.String,
    }),
  );
export type FeatureFlagsDependentFlagsListOutput =
  typeof FeatureFlagsDependentFlagsListOutput.Type;

// The operation
/**
 * Get other active flags that depend on this flag.
 *
 * @param id - A unique integer value identifying this feature flag.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsDependentFlagsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsDependentFlagsListInput,
    outputSchema: FeatureFlagsDependentFlagsListOutput,
    errors: [Forbidden, NotFound] as const,
  }));
