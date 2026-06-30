import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmAnalyticsEvaluationConfigRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_analytics/evaluation_config/",
    }),
  );
export type LlmAnalyticsEvaluationConfigRetrieveInput =
  typeof LlmAnalyticsEvaluationConfigRetrieveInput.Type;

// Output Schema
export const LlmAnalyticsEvaluationConfigRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trial_eval_limit: Schema.Number,
    trial_evals_used: Schema.Number,
    trial_evals_remaining: Schema.Number,
    active_provider_key: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type LlmAnalyticsEvaluationConfigRetrieveOutput =
  typeof LlmAnalyticsEvaluationConfigRetrieveOutput.Type;

// The operation
/**
 * Get the evaluation config for this team
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsEvaluationConfigRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsEvaluationConfigRetrieveInput,
    outputSchema: LlmAnalyticsEvaluationConfigRetrieveOutput,
  }));
