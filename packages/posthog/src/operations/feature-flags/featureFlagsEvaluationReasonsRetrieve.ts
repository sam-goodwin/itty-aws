import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FeatureFlagsEvaluationReasonsRetrieveInput {
  project_id: string;
  distinct_id: string;
  groups?: string;
}
export const FeatureFlagsEvaluationReasonsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    distinct_id: Schema.String,
    groups: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/evaluation_reasons/",
    }),
  ) as unknown as Schema.Codec<FeatureFlagsEvaluationReasonsRetrieveInput>;

// Output Schema
export type FeatureFlagsEvaluationReasonsRetrieveOutput = void;
export const FeatureFlagsEvaluationReasonsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FeatureFlagsEvaluationReasonsRetrieveOutput>;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param distinct_id - User distinct ID
 * @param groups - Groups for feature flag evaluation (JSON object string)
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsEvaluationReasonsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsEvaluationReasonsRetrieveInput,
    outputSchema: FeatureFlagsEvaluationReasonsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
