import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsSnapshotHistoryListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type VisualReviewRunsSnapshotHistoryListInput =
  typeof VisualReviewRunsSnapshotHistoryListInput.Type;

// Output Schema
export const VisualReviewRunsSnapshotHistoryListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        run_id: Schema.String,
        result: Schema.String,
        branch: Schema.String,
        commit_sha: Schema.String,
        created_at: Schema.String,
      }),
    ),
  });
export type VisualReviewRunsSnapshotHistoryListOutput =
  typeof VisualReviewRunsSnapshotHistoryListOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsSnapshotHistoryListInput,
    outputSchema: VisualReviewRunsSnapshotHistoryListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
