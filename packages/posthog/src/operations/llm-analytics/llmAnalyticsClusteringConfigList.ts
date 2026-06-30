import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmAnalyticsClusteringConfigListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_analytics/clustering_config/",
    }),
  );
export type LlmAnalyticsClusteringConfigListInput =
  typeof LlmAnalyticsClusteringConfigListInput.Type;

// Output Schema
export const LlmAnalyticsClusteringConfigListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event_filters: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type LlmAnalyticsClusteringConfigListOutput =
  typeof LlmAnalyticsClusteringConfigListOutput.Type;

// The operation
/**
 * Team-level clustering configuration (event filters for automated pipelines).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringConfigList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringConfigListInput,
    outputSchema: LlmAnalyticsClusteringConfigListOutput,
  }));
