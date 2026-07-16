import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmAnalyticsClusteringJobsDestroyInput {
  id: string;
  project_id: string;
}
export const LlmAnalyticsClusteringJobsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/llm_analytics/clustering_jobs/{id}/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsClusteringJobsDestroyInput>;

// Output Schema
export type LlmAnalyticsClusteringJobsDestroyOutput = void;
export const LlmAnalyticsClusteringJobsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LlmAnalyticsClusteringJobsDestroyOutput>;

// The operation
/**
 * CRUD for clustering job configurations (max 10 per team).
 *
 * @param id - A UUID string identifying this clustering job.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringJobsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringJobsDestroyInput,
    outputSchema: LlmAnalyticsClusteringJobsDestroyOutput,
  }));
