import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsClusteringJobsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    analysis_level: Schema.Literals(["trace", "generation", "evaluation"]),
    event_filters: Schema.optional(Schema.Unknown),
    enabled: Schema.optional(Schema.Boolean),
    created_at: Schema.String,
    updated_at: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/environments/{project_id}/llm_analytics/clustering_jobs/{id}/",
    }),
  );
export type LlmAnalyticsClusteringJobsUpdateInput =
  typeof LlmAnalyticsClusteringJobsUpdateInput.Type;

// Output Schema
export const LlmAnalyticsClusteringJobsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    analysis_level: Schema.Literals(["trace", "generation", "evaluation"]),
    event_filters: Schema.optional(Schema.Unknown),
    enabled: Schema.optional(Schema.Boolean),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type LlmAnalyticsClusteringJobsUpdateOutput =
  typeof LlmAnalyticsClusteringJobsUpdateOutput.Type;

// The operation
/**
 * CRUD for clustering job configurations (max 5 per team).
 *
 * @param id - A UUID string identifying this clustering job.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringJobsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringJobsUpdateInput,
    outputSchema: LlmAnalyticsClusteringJobsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
