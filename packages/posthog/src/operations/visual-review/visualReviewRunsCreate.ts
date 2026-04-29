import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    repo_id: Schema.String,
    run_type: Schema.String,
    commit_sha: Schema.String,
    branch: Schema.String,
    snapshots: Schema.Array(
      Schema.Struct({
        identifier: Schema.String,
        content_hash: Schema.String,
        width: Schema.optional(Schema.NullOr(Schema.Number)),
        height: Schema.optional(Schema.NullOr(Schema.Number)),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
    pr_number: Schema.optional(Schema.NullOr(Schema.Number)),
    baseline_hashes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    unchanged_count: Schema.optional(Schema.Number),
    removed_identifiers: Schema.optional(Schema.Array(Schema.String)),
    purpose: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/runs/",
    }),
  );
export type VisualReviewRunsCreateInput =
  typeof VisualReviewRunsCreateInput.Type;

// Output Schema
export const VisualReviewRunsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    run_id: Schema.String,
    uploads: Schema.Array(
      Schema.Struct({
        content_hash: Schema.String,
        url: Schema.String,
        fields: Schema.Record(Schema.String, Schema.String),
      }),
    ),
  });
export type VisualReviewRunsCreateOutput =
  typeof VisualReviewRunsCreateOutput.Type;

// The operation
/**
 * Create a new run from a CI manifest.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisualReviewRunsCreateInput,
    outputSchema: VisualReviewRunsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
