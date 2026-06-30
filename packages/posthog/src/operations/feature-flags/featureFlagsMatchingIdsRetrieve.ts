import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FeatureFlagsMatchingIdsRetrieveInput {
  project_id: string;
}
export const FeatureFlagsMatchingIdsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/matching_ids/",
    }),
  ) as unknown as Schema.Codec<FeatureFlagsMatchingIdsRetrieveInput>;

// Output Schema
export type FeatureFlagsMatchingIdsRetrieveOutput = void;
export const FeatureFlagsMatchingIdsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FeatureFlagsMatchingIdsRetrieveOutput>;

// The operation
/**
 * Get IDs of all feature flags matching the current filters.
 * Uses the same filtering logic as the list endpoint.
 * Returns only IDs that the user has permission to edit.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsMatchingIdsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsMatchingIdsRetrieveInput,
    outputSchema: FeatureFlagsMatchingIdsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
