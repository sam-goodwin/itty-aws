import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsToleratedHashesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    identifier: Schema.String,
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/tolerated-hashes/",
    }),
  );
export type VisualReviewRunsToleratedHashesListInput =
  typeof VisualReviewRunsToleratedHashesListInput.Type;

// Output Schema
export const VisualReviewRunsToleratedHashesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        alternate_hash: Schema.String,
        baseline_hash: Schema.String,
        reason: Schema.String,
        diff_percentage: Schema.NullOr(Schema.Number),
        created_at: Schema.String,
        source_run_id: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type VisualReviewRunsToleratedHashesListOutput =
  typeof VisualReviewRunsToleratedHashesListOutput.Type;

// The operation
/**
 * List known tolerated hashes for a snapshot identifier.
 *
 * @param identifier - Snapshot identifier
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsToleratedHashesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsToleratedHashesListInput,
    outputSchema: VisualReviewRunsToleratedHashesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
