import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsAddSnapshotsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    snapshots: Schema.Array(
      Schema.Struct({
        identifier: Schema.String,
        content_hash: Schema.String,
        width: Schema.optional(Schema.NullOr(Schema.Number)),
        height: Schema.optional(Schema.NullOr(Schema.Number)),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
    baseline_hashes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/add-snapshots/",
    }),
  );
export type VisualReviewRunsAddSnapshotsCreateInput =
  typeof VisualReviewRunsAddSnapshotsCreateInput.Type;

// Output Schema
export const VisualReviewRunsAddSnapshotsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    added: Schema.Number,
    uploads: Schema.Array(
      Schema.Struct({
        content_hash: Schema.String,
        url: Schema.String,
        fields: Schema.Record(Schema.String, Schema.String),
      }),
    ),
  });
export type VisualReviewRunsAddSnapshotsCreateOutput =
  typeof VisualReviewRunsAddSnapshotsCreateOutput.Type;

// The operation
/**
 * Add a batch of snapshots to a pending run (shard-based flow).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsAddSnapshotsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsAddSnapshotsCreateInput,
    outputSchema: VisualReviewRunsAddSnapshotsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
