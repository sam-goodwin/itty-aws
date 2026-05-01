import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/",
    }),
  );
export type VisualReviewRunsRetrieveInput =
  typeof VisualReviewRunsRetrieveInput.Type;

// Output Schema
export const VisualReviewRunsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approved_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.Number,
          first_name: Schema.String,
          email: Schema.String,
        }),
      ),
    ),
    id: Schema.String,
    repo_id: Schema.String,
    status: Schema.String,
    run_type: Schema.String,
    commit_sha: Schema.String,
    branch: Schema.String,
    pr_number: Schema.NullOr(Schema.Number),
    approved: Schema.Boolean,
    approved_at: Schema.NullOr(Schema.String),
    summary: Schema.Struct({
      total: Schema.Number,
      changed: Schema.Number,
      new: Schema.Number,
      removed: Schema.Number,
      unchanged: Schema.Number,
      unresolved: Schema.optional(Schema.Number),
      tolerated_matched: Schema.optional(Schema.Number),
    }),
    error_message: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    completed_at: Schema.NullOr(Schema.String),
    is_stale: Schema.optional(Schema.Boolean),
    superseded_by_id: Schema.optional(Schema.NullOr(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  });
export type VisualReviewRunsRetrieveOutput =
  typeof VisualReviewRunsRetrieveOutput.Type;

// The operation
/**
 * Get run status and summary.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisualReviewRunsRetrieveInput,
    outputSchema: VisualReviewRunsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
