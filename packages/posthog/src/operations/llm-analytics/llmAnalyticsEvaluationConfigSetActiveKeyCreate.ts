import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmAnalyticsEvaluationConfigSetActiveKeyCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    key_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_analytics/evaluation_config/set_active_key/",
    }),
  );
export type LlmAnalyticsEvaluationConfigSetActiveKeyCreateInput =
  typeof LlmAnalyticsEvaluationConfigSetActiveKeyCreateInput.Type;

// Output Schema
export const LlmAnalyticsEvaluationConfigSetActiveKeyCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trial_eval_limit: Schema.Number,
    trial_evals_used: Schema.Number,
    trial_evals_remaining: Schema.Number,
    active_provider_key: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.String,
  });
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
  }));
