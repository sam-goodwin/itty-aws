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
    run: Schema.optional(
      Schema.Struct({
        approved_by: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.optional(Schema.Number),
              first_name: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
            }),
          ),
        ),
        id: Schema.optional(Schema.String),
        repo_id: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        run_type: Schema.optional(Schema.String),
        commit_sha: Schema.optional(Schema.String),
        branch: Schema.optional(Schema.String),
        pr_number: Schema.optional(Schema.NullOr(Schema.Number)),
        approved: Schema.optional(Schema.Boolean),
        approved_at: Schema.optional(Schema.NullOr(Schema.String)),
        summary: Schema.optional(
          Schema.Struct({
            total: Schema.optional(Schema.Number),
            changed: Schema.optional(Schema.Number),
            new: Schema.optional(Schema.Number),
            removed: Schema.optional(Schema.Number),
            unchanged: Schema.optional(Schema.Number),
            unresolved: Schema.optional(Schema.Number),
            tolerated_matched: Schema.optional(Schema.Number),
          }),
        ),
        error_message: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.optional(Schema.String),
        completed_at: Schema.optional(Schema.NullOr(Schema.String)),
        is_stale: Schema.optional(Schema.Boolean),
        superseded_by_id: Schema.optional(Schema.NullOr(Schema.String)),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
    counts_changed: Schema.optional(Schema.Boolean),
    unresolved: Schema.optional(Schema.Number),
    ci_rerun_triggered: Schema.optional(Schema.Boolean),
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
