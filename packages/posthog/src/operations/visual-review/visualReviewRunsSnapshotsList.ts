import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface VisualReviewRunsSnapshotsListInput {
  id: string;
  project_id: string;
  include_quarantined?: boolean;
  limit?: number;
  offset?: number;
}
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
  ) as unknown as Schema.Codec<VisualReviewRunsSnapshotsListInput>;

// Output Schema
export interface VisualReviewRunsSnapshotsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    current_artifact?: {
      id?: string;
      content_hash?: string;
      width?: number | null;
      height?: number | null;
      download_url?: string | null;
    } | null;
    baseline_artifact?: {
      id?: string;
      content_hash?: string;
      width?: number | null;
      height?: number | null;
      download_url?: string | null;
    } | null;
    diff_artifact?: {
      id?: string;
      content_hash?: string;
      width?: number | null;
      height?: number | null;
      download_url?: string | null;
    } | null;
    reviewed_by?: { id?: number; first_name?: string; email?: string } | null;
    cluster_summary?: {
      items: {
        x: number;
        y: number;
        width: number;
        height: number;
        pixel_count: number;
        centroid_x: number;
        centroid_y: number;
      }[];
      total: number;
      truncated: boolean;
    } | null;
    id?: string;
    run_id?: string;
    identifier?: string;
    result?: string;
    classification_reason?: string;
    diff_percentage?: number | null;
    diff_pixel_count?: number | null;
    review_state?: string;
    reviewed_at?: string | null;
    approved_hash?: string;
    tolerated_hash_id?: string | null;
    is_quarantined?: boolean;
    metadata?: Record<string, unknown>;
    ssim_score?: number | null;
    change_kind?: string;
    size_mismatch?: boolean;
  }[];
  quarantined_count?: number;
}
export const VisualReviewRunsSnapshotsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          current_artifact: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                content_hash: Schema.optional(Schema.String),
                width: Schema.optional(Schema.NullOr(Schema.Number)),
                height: Schema.optional(Schema.NullOr(Schema.Number)),
                download_url: Schema.optional(Schema.NullOr(Schema.String)),
              }),
            ),
          ),
          baseline_artifact: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                content_hash: Schema.optional(Schema.String),
                width: Schema.optional(Schema.NullOr(Schema.Number)),
                height: Schema.optional(Schema.NullOr(Schema.Number)),
                download_url: Schema.optional(Schema.NullOr(Schema.String)),
              }),
            ),
          ),
          diff_artifact: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                content_hash: Schema.optional(Schema.String),
                width: Schema.optional(Schema.NullOr(Schema.Number)),
                height: Schema.optional(Schema.NullOr(Schema.Number)),
                download_url: Schema.optional(Schema.NullOr(Schema.String)),
              }),
            ),
          ),
          reviewed_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                first_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
              }),
            ),
          ),
          cluster_summary: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                items: Schema.Array(
                  Schema.Struct({
                    x: Schema.Number,
                    y: Schema.Number,
                    width: Schema.Number,
                    height: Schema.Number,
                    pixel_count: Schema.Number,
                    centroid_x: Schema.Number,
                    centroid_y: Schema.Number,
                  }),
                ),
                total: Schema.Number,
                truncated: Schema.Boolean,
              }),
            ),
          ),
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
  }) as unknown as Schema.Codec<VisualReviewRunsSnapshotsListOutput>;

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
