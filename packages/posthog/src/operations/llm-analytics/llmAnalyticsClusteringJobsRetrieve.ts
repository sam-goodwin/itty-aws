import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsClusteringJobsRetrieveInput {
  id: string;
  project_id: string;
}
export const LlmAnalyticsClusteringJobsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_analytics/clustering_jobs/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsClusteringJobsRetrieveInput>;

// Output Schema
export interface LlmAnalyticsClusteringJobsRetrieveOutput {
  id?: string;
  name?: string;
  analysis_level?: "trace" | "generation" | "evaluation";
  event_filters?: unknown;
  enabled?: boolean;
  created_at?: string;
  updated_at?: string;
}
export const LlmAnalyticsClusteringJobsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    analysis_level: Schema.optional(
      Schema.Literals(["trace", "generation", "evaluation"]),
    ),
    event_filters: Schema.optional(Schema.Unknown),
    enabled: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LlmAnalyticsClusteringJobsRetrieveOutput>;

// The operation
/**
 * CRUD for clustering job configurations (max 10 per team).
 *
 * @param id - A UUID string identifying this clustering job.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringJobsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringJobsRetrieveInput,
    outputSchema: LlmAnalyticsClusteringJobsRetrieveOutput,
  }));
