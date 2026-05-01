import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsSnapshotsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        current_artifact: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.String,
              content_hash: Schema.String,
              width: Schema.NullOr(Schema.Number),
              height: Schema.NullOr(Schema.Number),
              download_url: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        baseline_artifact: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.String,
              content_hash: Schema.String,
              width: Schema.NullOr(Schema.Number),
              height: Schema.NullOr(Schema.Number),
              download_url: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        diff_artifact: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.String,
              content_hash: Schema.String,
              width: Schema.NullOr(Schema.Number),
              height: Schema.NullOr(Schema.Number),
              download_url: Schema.NullOr(Schema.String),
            }),
          ),
        ),
        reviewed_by: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.Number,
              first_name: Schema.String,
              email: Schema.String,
            }),
          ),
        ),
        id: Schema.String,
        identifier: Schema.String,
        result: Schema.String,
        classification_reason: Schema.String,
        diff_percentage: Schema.NullOr(Schema.Number),
        diff_pixel_count: Schema.NullOr(Schema.Number),
        review_state: Schema.String,
        reviewed_at: Schema.NullOr(Schema.String),
        approved_hash: Schema.String,
        tolerated_hash_id: Schema.optional(Schema.NullOr(Schema.String)),
        is_quarantined: Schema.optional(Schema.Boolean),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
  });
export type VisualReviewRunsSnapshotsListOutput =
  typeof VisualReviewRunsSnapshotsListOutput.Type;

// The operation
/**
 * Get all snapshots for a run with diff results.
 *
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
