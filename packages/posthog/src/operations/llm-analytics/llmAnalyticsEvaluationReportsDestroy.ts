import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsEvaluationReportsDestroyInput {
  id: string;
  project_id: string;
}
export const LlmAnalyticsEvaluationReportsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/llm_analytics/evaluation_reports/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsEvaluationReportsDestroyInput>;

// Output Schema
export type LlmAnalyticsEvaluationReportsDestroyOutput = void;
export const LlmAnalyticsEvaluationReportsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LlmAnalyticsEvaluationReportsDestroyOutput>;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param id - A UUID string identifying this evaluation report.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsEvaluationReportsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsEvaluationReportsDestroyInput,
    outputSchema: LlmAnalyticsEvaluationReportsDestroyOutput,
  }));
