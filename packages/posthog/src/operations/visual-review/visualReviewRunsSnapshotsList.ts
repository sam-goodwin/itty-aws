import * as Schema from "effect/Schema";
import { SnapshotSchema } from "./_schemas.ts";
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
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => SnapshotSchema)),
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
