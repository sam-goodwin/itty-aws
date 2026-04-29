import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsClusteringJobsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
      method: "PATCH",
      path: "/api/environments/{project_id}/llm_analytics/clustering_jobs/{id}/",
    }),
  );
export type LlmAnalyticsClusteringJobsPartialUpdateInput =
  typeof LlmAnalyticsClusteringJobsPartialUpdateInput.Type;

// Output Schema
export const LlmAnalyticsClusteringJobsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    analysis_level: Schema.Literals(["trace", "generation", "evaluation"]),
    event_filters: Schema.optional(Schema.Unknown),
    enabled: Schema.optional(Schema.Boolean),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type LlmAnalyticsClusteringJobsPartialUpdateOutput =
  typeof LlmAnalyticsClusteringJobsPartialUpdateOutput.Type;

// The operation
/**
 * CRUD for clustering job configurations (max 5 per team).
 *
 * @param id - A UUID string identifying this clustering job.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringJobsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringJobsPartialUpdateInput,
    outputSchema: LlmAnalyticsClusteringJobsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
