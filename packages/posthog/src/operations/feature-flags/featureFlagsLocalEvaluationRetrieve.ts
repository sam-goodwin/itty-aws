import * as Schema from "effect/Schema";
import { MinimalFeatureFlagSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const FeatureFlagsLocalEvaluationRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    send_cohorts: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/local_evaluation/",
    }),
  );
export type FeatureFlagsLocalEvaluationRetrieveInput =
  typeof FeatureFlagsLocalEvaluationRetrieveInput.Type;

// Output Schema
export const FeatureFlagsLocalEvaluationRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flags: Schema.optional(
      Schema.Array(Schema.suspend(() => MinimalFeatureFlagSchema)),
    ),
    group_type_mapping: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    cohorts: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  });
export type FeatureFlagsLocalEvaluationRetrieveOutput =
  typeof FeatureFlagsLocalEvaluationRetrieveOutput.Type;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param send_cohorts - Include cohorts in response
 */
export const featureFlagsLocalEvaluationRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsLocalEvaluationRetrieveInput,
    outputSchema: FeatureFlagsLocalEvaluationRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
