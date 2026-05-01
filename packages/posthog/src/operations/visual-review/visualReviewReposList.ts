import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewReposListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/",
    }),
  );
export type VisualReviewReposListInput = typeof VisualReviewReposListInput.Type;

// Output Schema
export const VisualReviewReposListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          team_id: Schema.optional(Schema.Number),
          repo_external_id: Schema.optional(Schema.Number),
          repo_full_name: Schema.optional(Schema.String),
          baseline_file_paths: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          enable_pr_comments: Schema.optional(Schema.Boolean),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type VisualReviewReposListOutput =
  typeof VisualReviewReposListOutput.Type;

// The operation
/**
 * List all projects for the team.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisualReviewReposListInput,
    outputSchema: VisualReviewReposListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
