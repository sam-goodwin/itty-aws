import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface VisualReviewRunsSnapshotHistoryListInput {
  id: string;
  project_id: string;
  identifier: string;
  limit?: number;
  offset?: number;
}
export const VisualReviewRunsSnapshotHistoryListInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    identifier: Schema.String,
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/snapshot-history/",
    }),
  ) as unknown as Schema.Codec<VisualReviewRunsSnapshotHistoryListInput>;

// Output Schema
export interface VisualReviewRunsSnapshotHistoryListOutput {
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
    run_id?: string;
    snapshot_id?: string;
    result?: string;
    branch?: string;
    commit_sha?: string;
    created_at?: string;
    pr_number?: number | null;
    diff_percentage?: number | null;
    review_state?: string;
    ssim_score?: number | null;
    change_kind?: string;
    size_mismatch?: boolean;
  }[];
}
export const VisualReviewRunsSnapshotHistoryListOutput =
  /*@__PURE__*/ Schema.Struct({
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
          run_id: Schema.optional(Schema.String),
          snapshot_id: Schema.optional(Schema.String),
          result: Schema.optional(Schema.String),
          branch: Schema.optional(Schema.String),
          commit_sha: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          pr_number: Schema.optional(Schema.NullOr(Schema.Number)),
          diff_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
          review_state: Schema.optional(Schema.String),
          ssim_score: Schema.optional(Schema.NullOr(Schema.Number)),
          change_kind: Schema.optional(Schema.String),
          size_mismatch: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VisualReviewRunsSnapshotHistoryListOutput>;

// The operation
/**
 * Recent change history for a snapshot identifier across runs.
 *
 * @param identifier - Snapshot identifier
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsSnapshotHistoryList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsSnapshotHistoryListInput,
    outputSchema: VisualReviewRunsSnapshotHistoryListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
