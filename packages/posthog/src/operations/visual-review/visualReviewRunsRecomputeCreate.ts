import * as Schema from "effect/Schema";
import { RunSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsRecomputeCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/recompute/",
    }),
  );
export type VisualReviewRunsRecomputeCreateInput =
  typeof VisualReviewRunsRecomputeCreateInput.Type;

// Output Schema
export const VisualReviewRunsRecomputeCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    run: Schema.optional(Schema.suspend(() => RunSchema)),
    counts_changed: Schema.optional(Schema.Boolean),
    unresolved: Schema.optional(Schema.Number),
    ci_rerun_triggered: Schema.optional(Schema.Boolean),
    ci_rerun_error: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type VisualReviewRunsRecomputeCreateOutput =
  typeof VisualReviewRunsRecomputeCreateOutput.Type;

// The operation
/**
 * Re-evaluate quarantine and counts, update commit status, and optionally rerun the CI job.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsRecomputeCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsRecomputeCreateInput,
    outputSchema: VisualReviewRunsRecomputeCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }));
