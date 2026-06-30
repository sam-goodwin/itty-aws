import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface VisualReviewRunsTolerateCreateInput {
  id: string;
  project_id: string;
  snapshot_id?: string;
}
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
  ) as unknown as Schema.Codec<VisualReviewRunsTolerateCreateInput>;

// Output Schema
export interface VisualReviewRunsTolerateCreateOutput {
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
}
export const VisualReviewRunsTolerateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    ssim_score: Schema.optional(Schema.NullOr(Schema.Number)),
    change_kind: Schema.optional(Schema.String),
    size_mismatch: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<VisualReviewRunsTolerateCreateOutput>;

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
