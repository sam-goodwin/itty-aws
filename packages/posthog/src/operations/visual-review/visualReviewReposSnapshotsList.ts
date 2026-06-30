import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisualReviewReposSnapshotsListInput {
  identifier: string;
  project_id: string;
  repo_id: string;
  run_type: string;
  limit?: number;
  offset?: number;
}
export const VisualReviewReposSnapshotsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    repo_id: Schema.String.pipe(T.PathParam()),
    run_type: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/{repo_id}/snapshots/{run_type}/{identifier}/",
    }),
  ) as unknown as Schema.Codec<VisualReviewReposSnapshotsListInput>;

// Output Schema
export interface VisualReviewReposSnapshotsListOutput {
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
export const VisualReviewReposSnapshotsListOutput =
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
  }) as unknown as Schema.Codec<VisualReviewReposSnapshotsListOutput>;

// The operation
/**
 * Deduped baseline timeline for a snapshot identity. Newest first.
 *
 * @param identifier - Snapshot identifier; clients must percent-encode before sending
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_type - Run type (storybook, playwright)
 */
export const visualReviewReposSnapshotsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposSnapshotsListInput,
    outputSchema: VisualReviewReposSnapshotsListOutput,
  }));
