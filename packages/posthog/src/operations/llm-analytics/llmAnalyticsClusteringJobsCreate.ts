import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsClusteringJobsCreateInput {
  project_id: string;
  id?: string;
  name?: string;
  analysis_level?: "trace" | "generation" | "evaluation";
  event_filters?: unknown;
  enabled?: boolean;
  created_at?: string;
  updated_at?: string;
}
export const LlmAnalyticsClusteringJobsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    analysis_level: Schema.optional(
      Schema.Literals(["trace", "generation", "evaluation"]),
    ),
    event_filters: Schema.optional(Schema.Unknown),
    enabled: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_analytics/clustering_jobs/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsClusteringJobsCreateInput>;

// Output Schema
export interface LlmAnalyticsClusteringJobsCreateOutput {
  id?: string;
  name?: string;
  analysis_level?: "trace" | "generation" | "evaluation";
  event_filters?: unknown;
  enabled?: boolean;
  created_at?: string;
  updated_at?: string;
}
export const LlmAnalyticsClusteringJobsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    analysis_level: Schema.optional(
      Schema.Literals(["trace", "generation", "evaluation"]),
    ),
    event_filters: Schema.optional(Schema.Unknown),
    enabled: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LlmAnalyticsClusteringJobsCreateOutput>;

// The operation
/**
 * CRUD for clustering job configurations (max 10 per team).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringJobsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringJobsCreateInput,
    outputSchema: LlmAnalyticsClusteringJobsCreateOutput,
  }));
