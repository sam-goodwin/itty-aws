import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewReposRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/{id}/",
    }),
  );
export type VisualReviewReposRetrieveInput =
  typeof VisualReviewReposRetrieveInput.Type;

// Output Schema
export const VisualReviewReposRetrieveOutput =
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
export type VisualReviewReposRetrieveOutput =
  typeof VisualReviewReposRetrieveOutput.Type;

// The operation
/**
 * Get a repo by ID.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisualReviewReposRetrieveInput,
    outputSchema: VisualReviewReposRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
