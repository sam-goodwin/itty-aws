import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const LlmAnalyticsEvaluationReportsGenerateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/evaluation_reports/{id}/generate/",
    }),
  );
export type LlmAnalyticsEvaluationReportsGenerateCreateInput =
  typeof LlmAnalyticsEvaluationReportsGenerateCreateInput.Type;

// Output Schema
export const LlmAnalyticsEvaluationReportsGenerateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LlmAnalyticsEvaluationReportsGenerateCreateOutput =
  typeof LlmAnalyticsEvaluationReportsGenerateCreateOutput.Type;

// The operation
/**
 * Trigger immediate report generation.
 *
 * @param id - A UUID string identifying this evaluation report.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsEvaluationReportsGenerateCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsEvaluationReportsGenerateCreateInput,
    outputSchema: LlmAnalyticsEvaluationReportsGenerateCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
