import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsEvaluationSummaryCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    evaluation_id: Schema.String,
    filter: Schema.optional(Schema.Literals(["all", "pass", "fail", "na"])),
    generation_ids: Schema.optional(Schema.Array(Schema.String)),
    force_refresh: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/evaluation_summary/",
    }),
  );
export type LlmAnalyticsEvaluationSummaryCreateInput =
  typeof LlmAnalyticsEvaluationSummaryCreateInput.Type;

// Output Schema
export const LlmAnalyticsEvaluationSummaryCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overall_assessment: Schema.String,
    pass_patterns: Schema.Array(
      Schema.Struct({
        title: Schema.String,
        description: Schema.String,
        frequency: Schema.String,
        example_generation_ids: Schema.Array(Schema.String),
      }),
    ),
    fail_patterns: Schema.Array(
      Schema.Struct({
        title: Schema.String,
        description: Schema.String,
        frequency: Schema.String,
        example_generation_ids: Schema.Array(Schema.String),
      }),
    ),
    na_patterns: Schema.Array(
      Schema.Struct({
        title: Schema.String,
        description: Schema.String,
        frequency: Schema.String,
        example_generation_ids: Schema.Array(Schema.String),
      }),
    ),
    recommendations: Schema.Array(Schema.String),
    statistics: Schema.Struct({
      total_analyzed: Schema.Number,
      pass_count: Schema.Number,
      fail_count: Schema.Number,
      na_count: Schema.Number,
    }),
  });
export type LlmAnalyticsEvaluationSummaryCreateOutput =
  typeof LlmAnalyticsEvaluationSummaryCreateOutput.Type;

// The operation
/**
 * Generate an AI-powered summary of evaluation results.
 * This endpoint analyzes evaluation runs and identifies patterns in passing
 * and failing evaluations, providing actionable recommendations.
 * Data is fetched server-side by evaluation ID to ensure data integrity.
 * **Use Cases:**
 * - Understand why evaluations are passing or failing
 * - Identify systematic issues in LLM responses
 * - Get recommendations for improving response quality
 * - Review patterns across many evaluation runs at once
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsEvaluationSummaryCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsEvaluationSummaryCreateInput,
    outputSchema: LlmAnalyticsEvaluationSummaryCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
