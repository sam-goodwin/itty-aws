import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsEvaluationConfigSetActiveKeyCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/evaluation_config/set_active_key/",
    }),
  );
export type LlmAnalyticsEvaluationConfigSetActiveKeyCreateInput =
  typeof LlmAnalyticsEvaluationConfigSetActiveKeyCreateInput.Type;

// Output Schema
export const LlmAnalyticsEvaluationConfigSetActiveKeyCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type LlmAnalyticsEvaluationConfigSetActiveKeyCreateOutput =
  typeof LlmAnalyticsEvaluationConfigSetActiveKeyCreateOutput.Type;

// The operation
/**
 * Set the active provider key for evaluations
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsEvaluationConfigSetActiveKeyCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsEvaluationConfigSetActiveKeyCreateInput,
    outputSchema: LlmAnalyticsEvaluationConfigSetActiveKeyCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
