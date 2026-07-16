import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisualReviewReposRunsCountsRetrieveInput {
  project_id: string;
  repo_id: string;
}
export const VisualReviewReposRunsCountsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    repo_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/{repo_id}/runs/counts/",
    }),
  ) as unknown as Schema.Codec<VisualReviewReposRunsCountsRetrieveInput>;

// Output Schema
export interface VisualReviewReposRunsCountsRetrieveOutput {
  needs_review?: number;
  clean?: number;
  processing?: number;
  stale?: number;
}
export const VisualReviewReposRunsCountsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    needs_review: Schema.optional(Schema.Number),
    clean: Schema.optional(Schema.Number),
    processing: Schema.optional(Schema.Number),
    stale: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<VisualReviewReposRunsCountsRetrieveOutput>;

// The operation
/**
 * Review state counts for runs in this repo.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposRunsCountsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposRunsCountsRetrieveInput,
    outputSchema: VisualReviewReposRunsCountsRetrieveOutput,
  }));
