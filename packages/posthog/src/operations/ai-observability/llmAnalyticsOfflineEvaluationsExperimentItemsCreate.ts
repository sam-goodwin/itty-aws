import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface LlmAnalyticsOfflineEvaluationsExperimentItemsCreateInput {
  project_id: string;
  experiment_id: string;
  date_from?: string | null;
  date_to?: string | null;
}
export const LlmAnalyticsOfflineEvaluationsExperimentItemsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    experiment_id: Schema.String,
    date_from: Schema.optional(Schema.NullOr(Schema.String)),
    date_to: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_analytics/offline_evaluations/experiment_items/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsOfflineEvaluationsExperimentItemsCreateInput>;

// Output Schema
export interface LlmAnalyticsOfflineEvaluationsExperimentItemsCreateOutput {
  results: unknown[][];
}
export const LlmAnalyticsOfflineEvaluationsExperimentItemsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(Schema.Array(Schema.Unknown)),
  }) as unknown as Schema.Codec<LlmAnalyticsOfflineEvaluationsExperimentItemsCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsOfflineEvaluationsExperimentItemsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsOfflineEvaluationsExperimentItemsCreateInput,
    outputSchema: LlmAnalyticsOfflineEvaluationsExperimentItemsCreateOutput,
    errors: [BadRequest] as const,
  }));
