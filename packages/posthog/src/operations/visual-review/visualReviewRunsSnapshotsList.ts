import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsSnapshotsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    include_quarantined: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/snapshots/",
    }),
  );
export type VisualReviewRunsSnapshotsListInput =
  typeof VisualReviewRunsSnapshotsListInput.Type;

// Output Schema
export const VisualReviewRunsSnapshotsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          ssim_score: Schema.optional(Schema.NullOr(Schema.Number)),
          change_kind: Schema.optional(Schema.String),
          size_mismatch: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    quarantined_count: Schema.optional(Schema.Number),
  });
export type VisualReviewRunsSnapshotsListOutput =
  typeof VisualReviewRunsSnapshotsListOutput.Type;

// The operation
/**
 * Get a run's snapshots with diff results, excluding quarantined ones by default.
 *
 * @param include_quarantined - Whether to include snapshots whose identifier is currently quarantined. Defaults to false: quarantined snapshots are excluded from results and reported in quarantined_count instead, since they are noise when reviewing real changes.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsSnapshotsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsSnapshotsListInput,
    outputSchema: VisualReviewRunsSnapshotsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
