import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const LlmAnalyticsClusteringConfigRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/clustering_config/",
    }),
  );
export type LlmAnalyticsClusteringConfigRetrieveInput =
  typeof LlmAnalyticsClusteringConfigRetrieveInput.Type;

// Output Schema
export const LlmAnalyticsClusteringConfigRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type LlmAnalyticsClusteringConfigRetrieveOutput =
  typeof LlmAnalyticsClusteringConfigRetrieveOutput.Type;

// The operation
/**
 * Team-level clustering configuration (event filters for automated pipelines).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringConfigRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringConfigRetrieveInput,
    outputSchema: LlmAnalyticsClusteringConfigRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
