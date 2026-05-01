import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsTolerateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    snapshot_id: Schema.String,
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
