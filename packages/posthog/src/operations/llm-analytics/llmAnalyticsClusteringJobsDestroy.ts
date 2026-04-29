import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsClusteringJobsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/llm_analytics/clustering_jobs/{id}/",
    }),
  );
export type LlmAnalyticsClusteringJobsDestroyInput =
  typeof LlmAnalyticsClusteringJobsDestroyInput.Type;

// Output Schema
export const LlmAnalyticsClusteringJobsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LlmAnalyticsClusteringJobsDestroyOutput =
  typeof LlmAnalyticsClusteringJobsDestroyOutput.Type;

// The operation
/**
 * CRUD for clustering job configurations (max 5 per team).
 *
 * @param id - A UUID string identifying this clustering job.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringJobsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringJobsDestroyInput,
    outputSchema: LlmAnalyticsClusteringJobsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
