import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsClusteringJobsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    name: Schema.String,
    analysis_level: Schema.Literals(["trace", "generation", "evaluation"]),
    event_filters: Schema.optional(Schema.Unknown),
    enabled: Schema.optional(Schema.Boolean),
    created_at: Schema.String,
    updated_at: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/clustering_jobs/",
    }),
  );
export type LlmAnalyticsClusteringJobsCreateInput =
  typeof LlmAnalyticsClusteringJobsCreateInput.Type;

// Output Schema
export const LlmAnalyticsClusteringJobsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    analysis_level: Schema.Literals(["trace", "generation", "evaluation"]),
    event_filters: Schema.optional(Schema.Unknown),
    enabled: Schema.optional(Schema.Boolean),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type LlmAnalyticsClusteringJobsCreateOutput =
  typeof LlmAnalyticsClusteringJobsCreateOutput.Type;

// The operation
/**
 * CRUD for clustering job configurations (max 5 per team).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringJobsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringJobsCreateInput,
    outputSchema: LlmAnalyticsClusteringJobsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
