import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewReposPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    baseline_file_paths: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    enable_pr_comments: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/visual_review/repos/{id}/",
    }),
  );
export type VisualReviewReposPartialUpdateInput =
  typeof VisualReviewReposPartialUpdateInput.Type;

// Output Schema
export const VisualReviewReposPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    repo_external_id: Schema.optional(Schema.Number),
    repo_full_name: Schema.optional(Schema.String),
    baseline_file_paths: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    enable_pr_comments: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
  });
export type VisualReviewReposPartialUpdateOutput =
  typeof VisualReviewReposPartialUpdateOutput.Type;

// The operation
/**
 * Update a repo's settings.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposPartialUpdateInput,
    outputSchema: VisualReviewReposPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
