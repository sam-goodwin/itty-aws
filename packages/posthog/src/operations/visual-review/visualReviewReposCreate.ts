import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewReposCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    repo_full_name: Schema.String,
    repo_external_id: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/repos/",
    }),
  );
export type VisualReviewReposCreateInput =
  typeof VisualReviewReposCreateInput.Type;

// Output Schema
export const VisualReviewReposCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    team_id: Schema.Number,
    repo_external_id: Schema.Number,
    repo_full_name: Schema.String,
    baseline_file_paths: Schema.Record(Schema.String, Schema.String),
    enable_pr_comments: Schema.Boolean,
    created_at: Schema.String,
  });
export type VisualReviewReposCreateOutput =
  typeof VisualReviewReposCreateOutput.Type;

// The operation
/**
 * Create a new repo.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisualReviewReposCreateInput,
    outputSchema: VisualReviewReposCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
