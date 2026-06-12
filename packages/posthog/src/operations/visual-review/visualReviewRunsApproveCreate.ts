import * as Schema from "effect/Schema";
import { ApproveSnapshotInputSchema, RunSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsApproveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    snapshots: Schema.optional(
      Schema.Array(Schema.suspend(() => ApproveSnapshotInputSchema)),
    ),
    approve_all: Schema.optional(Schema.Boolean),
    commit_to_github: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/approve/",
    }),
  );
export type VisualReviewRunsApproveCreateInput =
  typeof VisualReviewRunsApproveCreateInput.Type;

// Output Schema
export const VisualReviewRunsApproveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    run: Schema.optional(Schema.suspend(() => RunSchema)),
    baseline_content: Schema.optional(Schema.String),
  });
export type VisualReviewRunsApproveCreateOutput =
  typeof VisualReviewRunsApproveCreateOutput.Type;

// The operation
/**
 * Approve visual changes for snapshots in this run.
 * With approve_all=true, approves all changed+new snapshots and returns
 * signed baseline YAML. With specific snapshots, approves only those.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsApproveCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsApproveCreateInput,
    outputSchema: VisualReviewRunsApproveCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
