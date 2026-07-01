import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export interface FeatureFlagsTestEvaluationCreateInput {
  id: number;
  project_id: string;
  distinct_id?: string;
  person_id?: string;
  timestamp?: string | null;
  groups?: unknown;
}
export const FeatureFlagsTestEvaluationCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    distinct_id: Schema.optional(Schema.String),
    person_id: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.NullOr(Schema.String)),
    groups: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/feature_flags/{id}/test_evaluation/",
    }),
  ) as unknown as Schema.Codec<FeatureFlagsTestEvaluationCreateInput>;

// Output Schema
export interface FeatureFlagsTestEvaluationCreateOutput {
  flag_key: string;
  result: unknown;
  reason: string;
  condition_index: number | null;
  payload: unknown;
  person_properties: Record<string, unknown>;
  evaluation_distinct_id: string | null;
  conditions: {
    index: number;
    matched: boolean;
    properties_matched?: boolean;
    explanation: string;
    rollout_percentage: number;
    rollout_excluded: boolean;
    variant: string | null;
    properties: {
      key: string;
      operator: string;
      value: unknown;
      type: string;
      actual_value: unknown;
      matched: boolean;
      explanation: string;
    }[];
  }[];
}
export const FeatureFlagsTestEvaluationCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flag_key: Schema.String,
    result: Schema.Unknown,
    reason: Schema.String,
    condition_index: Schema.NullOr(Schema.Number),
    payload: Schema.Unknown,
    person_properties: Schema.Record(Schema.String, Schema.Unknown),
    evaluation_distinct_id: Schema.NullOr(Schema.String),
    conditions: Schema.Array(
      Schema.Struct({
        index: Schema.Number,
        matched: Schema.Boolean,
        properties_matched: Schema.optional(Schema.Boolean),
        explanation: Schema.String,
        rollout_percentage: Schema.Number,
        rollout_excluded: Schema.Boolean,
        variant: Schema.NullOr(Schema.String),
        properties: Schema.Array(
          Schema.Struct({
            key: Schema.String,
            operator: Schema.String,
            value: Schema.Unknown,
            type: Schema.String,
            actual_value: Schema.Unknown,
            matched: Schema.Boolean,
            explanation: Schema.String,
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<FeatureFlagsTestEvaluationCreateOutput>;

// The operation
/**
 * Test feature flag evaluation against a specific user at an optional point in time.
 * This endpoint allows testing how a feature flag would evaluate for a specific user,
 * optionally at a historical timestamp. When a timestamp is provided, both the flag
 * conditions and person properties are evaluated as they existed at that time.
 *
 * @param id - A unique integer value identifying this feature flag.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsTestEvaluationCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsTestEvaluationCreateInput,
    outputSchema: FeatureFlagsTestEvaluationCreateOutput,
    errors: [BadRequest, NotFound] as const,
  }));
