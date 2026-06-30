import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FeatureFlagsStatusRetrieveInput {
  id: number;
  project_id: string;
}
export const FeatureFlagsStatusRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/{id}/status/",
    }),
  ) as unknown as Schema.Codec<FeatureFlagsStatusRetrieveInput>;

// Output Schema
export interface FeatureFlagsStatusRetrieveOutput {
  status?: string;
  reason?: string;
  rollout?: {
    effectively_full_rollout: boolean;
    has_targeting_conditions: boolean;
    max_rollout_percentage: number | null;
    is_multivariate: boolean;
  };
}
export const FeatureFlagsStatusRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    rollout: Schema.optional(
      Schema.Struct({
        effectively_full_rollout: Schema.Boolean,
        has_targeting_conditions: Schema.Boolean,
        max_rollout_percentage: Schema.NullOr(Schema.Number),
        is_multivariate: Schema.Boolean,
      }),
    ),
  }) as unknown as Schema.Codec<FeatureFlagsStatusRetrieveOutput>;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param id - A unique integer value identifying this feature flag.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsStatusRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FeatureFlagsStatusRetrieveInput,
    outputSchema: FeatureFlagsStatusRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
