import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsCountsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/runs/counts/",
    }),
  );
export type VisualReviewRunsCountsRetrieveInput =
  typeof VisualReviewRunsCountsRetrieveInput.Type;

// Output Schema
export const VisualReviewRunsCountsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    needs_review: Schema.Number,
    clean: Schema.Number,
    processing: Schema.Number,
    stale: Schema.Number,
  });
export type VisualReviewRunsCountsRetrieveOutput =
  typeof VisualReviewRunsCountsRetrieveOutput.Type;

// The operation
/**
 * Review state counts for the runs list.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsCountsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsCountsRetrieveInput,
    outputSchema: VisualReviewRunsCountsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
