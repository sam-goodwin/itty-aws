import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsClusteringJobsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const LlmAnalyticsClusteringJobsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_analytics/clustering_jobs/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsClusteringJobsListInput>;

// Output Schema
export interface LlmAnalyticsClusteringJobsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    name?: string;
    analysis_level?: "trace" | "generation" | "evaluation";
    event_filters?: unknown;
    enabled?: boolean;
    created_at?: string;
    updated_at?: string;
  }[];
}
export const LlmAnalyticsClusteringJobsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          analysis_level: Schema.optional(
            Schema.Literals(["trace", "generation", "evaluation"]),
          ),
          event_filters: Schema.optional(Schema.Unknown),
          enabled: Schema.optional(Schema.Boolean),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LlmAnalyticsClusteringJobsListOutput>;

// The operation
/**
 * CRUD for clustering job configurations (max 10 per team).
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringJobsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringJobsListInput,
    outputSchema: LlmAnalyticsClusteringJobsListOutput,
  }));
