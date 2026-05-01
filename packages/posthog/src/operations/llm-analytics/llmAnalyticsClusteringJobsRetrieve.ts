import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsClusteringJobsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/clustering_jobs/{id}/",
    }),
  );
export type LlmAnalyticsClusteringJobsRetrieveInput =
  typeof LlmAnalyticsClusteringJobsRetrieveInput.Type;

// Output Schema
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
  });
export type LlmAnalyticsClusteringJobsRetrieveOutput =
  typeof LlmAnalyticsClusteringJobsRetrieveOutput.Type;

// The operation
/**
 * CRUD for clustering job configurations (max 5 per team).
 *
 * @param id - A UUID string identifying this clustering job.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringJobsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringJobsRetrieveInput,
    outputSchema: LlmAnalyticsClusteringJobsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
