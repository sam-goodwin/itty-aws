import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsTolerateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    snapshot_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/tolerate/",
    }),
  );
export type VisualReviewRunsTolerateCreateInput =
  typeof VisualReviewRunsTolerateCreateInput.Type;

// Output Schema
export const VisualReviewRunsTolerateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    current_artifact: Schema.optional(Schema.Unknown),
    baseline_artifact: Schema.optional(Schema.Unknown),
    diff_artifact: Schema.optional(Schema.Unknown),
    reviewed_by: Schema.optional(Schema.Unknown),
    cluster_summary: Schema.optional(Schema.Unknown),
    id: Schema.optional(Schema.String),
    run_id: Schema.optional(Schema.String),
    identifier: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
    classification_reason: Schema.optional(Schema.String),
    diff_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
    diff_pixel_count: Schema.optional(Schema.NullOr(Schema.Number)),
    review_state: Schema.optional(Schema.String),
    reviewed_at: Schema.optional(Schema.NullOr(Schema.String)),
    approved_hash: Schema.optional(Schema.String),
    tolerated_hash_id: Schema.optional(Schema.NullOr(Schema.String)),
    is_quarantined: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    ssim_score: Schema.optional(Schema.NullOr(Schema.Number)),
    change_kind: Schema.optional(Schema.String),
    size_mismatch: Schema.optional(Schema.Boolean),
  });
export type VisualReviewRunsTolerateCreateOutput =
  typeof VisualReviewRunsTolerateCreateOutput.Type;

// The operation
/**
 * Mark a changed snapshot as a known tolerated alternate.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsTolerateCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsTolerateCreateInput,
    outputSchema: VisualReviewRunsTolerateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
