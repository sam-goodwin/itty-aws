import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsEvaluationReportsGenerateCreateInput {
  id: string;
  project_id: string;
}
export const LlmAnalyticsEvaluationReportsGenerateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_analytics/evaluation_reports/{id}/generate/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsEvaluationReportsGenerateCreateInput>;

// Output Schema
export type LlmAnalyticsEvaluationReportsGenerateCreateOutput = void;
export const LlmAnalyticsEvaluationReportsGenerateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LlmAnalyticsEvaluationReportsGenerateCreateOutput>;

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
  }));
