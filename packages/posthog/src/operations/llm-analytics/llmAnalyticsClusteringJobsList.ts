import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsClusteringJobsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/clustering_jobs/",
    }),
  );
export type LlmAnalyticsClusteringJobsListInput =
  typeof LlmAnalyticsClusteringJobsListInput.Type;

// Output Schema
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
  });
export type LlmAnalyticsClusteringJobsListOutput =
  typeof LlmAnalyticsClusteringJobsListOutput.Type;

// The operation
/**
 * CRUD for clustering job configurations (max 5 per team).
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsClusteringJobsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsClusteringJobsListInput,
    outputSchema: LlmAnalyticsClusteringJobsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
