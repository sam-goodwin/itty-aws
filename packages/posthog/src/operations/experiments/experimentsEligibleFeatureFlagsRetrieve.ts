import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExperimentsEligibleFeatureFlagsRetrieveInput {
  project_id: string;
}
export const ExperimentsEligibleFeatureFlagsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/experiments/eligible_feature_flags/",
    }),
  ) as unknown as Schema.Codec<ExperimentsEligibleFeatureFlagsRetrieveInput>;

// Output Schema
export type ExperimentsEligibleFeatureFlagsRetrieveOutput = void;
export const ExperimentsEligibleFeatureFlagsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExperimentsEligibleFeatureFlagsRetrieveOutput>;

// The operation
/**
 * Returns a paginated list of feature flags eligible for use in experiments.
 * Eligible flags must:
 * - Be multivariate with at least 2 variants
 * - Have "control" as the first variant key
 * Query parameters:
 * - search: Filter by flag key or name (case insensitive)
 * - limit: Number of results per page (default: 20)
 * - offset: Pagination offset (default: 0)
 * - active: Filter by active status ("true" or "false")
 * - created_by_id: Filter by creator user ID
 * - order: Sort order field
 * - evaluation_runtime: Filter by evaluation runtime
 * - has_evaluation_contexts: Filter by presence of evaluation contexts ("true" or "false")
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentsEligibleFeatureFlagsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsEligibleFeatureFlagsRetrieveInput,
    outputSchema: ExperimentsEligibleFeatureFlagsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
