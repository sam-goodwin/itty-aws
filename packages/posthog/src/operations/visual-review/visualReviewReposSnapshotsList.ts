import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
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
  );
export type VisualReviewReposSnapshotsListInput =
  typeof VisualReviewReposSnapshotsListInput.Type;

// Output Schema
export const VisualReviewReposSnapshotsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          current_artifact: Schema.optional(Schema.Unknown),
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
  });
export type VisualReviewReposSnapshotsListOutput =
  typeof VisualReviewReposSnapshotsListOutput.Type;

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
