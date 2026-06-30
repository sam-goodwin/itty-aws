import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisualReviewReposRunsCountsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    repo_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/{repo_id}/runs/counts/",
    }),
  );
export type VisualReviewReposRunsCountsRetrieveInput =
  typeof VisualReviewReposRunsCountsRetrieveInput.Type;

// Output Schema
export const VisualReviewReposRunsCountsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    needs_review: Schema.optional(Schema.Number),
    clean: Schema.optional(Schema.Number),
    processing: Schema.optional(Schema.Number),
    stale: Schema.optional(Schema.Number),
  });
export type VisualReviewReposRunsCountsRetrieveOutput =
  typeof VisualReviewReposRunsCountsRetrieveOutput.Type;

// The operation
/**
 * Review state counts for runs in this repo.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposRunsCountsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposRunsCountsRetrieveInput,
    outputSchema: VisualReviewReposRunsCountsRetrieveOutput,
  }));
