import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsRecomputeCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/recompute/",
    }),
  );
export type VisualReviewRunsRecomputeCreateInput =
  typeof VisualReviewRunsRecomputeCreateInput.Type;

// Output Schema
export const VisualReviewRunsRecomputeCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    run: Schema.Struct({
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
    }),
    counts_changed: Schema.Boolean,
    unresolved: Schema.Number,
    ci_rerun_triggered: Schema.Boolean,
    ci_rerun_error: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type VisualReviewRunsRecomputeCreateOutput =
  typeof VisualReviewRunsRecomputeCreateOutput.Type;

// The operation
/**
 * Re-evaluate quarantine and counts, update commit status, and optionally rerun the CI job.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsRecomputeCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsRecomputeCreateInput,
    outputSchema: VisualReviewRunsRecomputeCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
