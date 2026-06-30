import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface VisualReviewRunsCreateInput {
  project_id: string;
  repo_id?: string;
  run_type?: string;
  commit_sha?: string;
  branch?: string;
  snapshots?: {
    identifier?: string;
    content_hash?: string;
    width?: number | null;
    height?: number | null;
    metadata?: Record<string, unknown>;
  }[];
  pr_number?: number | null;
  baseline_hashes?: Record<string, string>;
  unchanged_count?: number;
  removed_identifiers?: string[];
  purpose?: string;
  metadata?: Record<string, unknown>;
  is_partial?: boolean;
}
export const VisualReviewRunsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    repo_id: Schema.optional(Schema.String),
    run_type: Schema.optional(Schema.String),
    commit_sha: Schema.optional(Schema.String),
    branch: Schema.optional(Schema.String),
    snapshots: Schema.optional(
      Schema.Array(
        Schema.Struct({
          identifier: Schema.optional(Schema.String),
          content_hash: Schema.optional(Schema.String),
          width: Schema.optional(Schema.NullOr(Schema.Number)),
          height: Schema.optional(Schema.NullOr(Schema.Number)),
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
        }),
      ),
    ),
    pr_number: Schema.optional(Schema.NullOr(Schema.Number)),
    baseline_hashes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    unchanged_count: Schema.optional(Schema.Number),
    removed_identifiers: Schema.optional(Schema.Array(Schema.String)),
    purpose: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    is_partial: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/runs/",
    }),
  ) as unknown as Schema.Codec<VisualReviewRunsCreateInput>;

// Output Schema
export interface VisualReviewRunsCreateOutput {
  run_id?: string;
  uploads?: {
    content_hash?: string;
    url?: string;
    fields?: Record<string, string>;
  }[];
}
export const VisualReviewRunsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    run_id: Schema.optional(Schema.String),
    uploads: Schema.optional(
      Schema.Array(
        Schema.Struct({
          content_hash: Schema.optional(Schema.String),
          url: Schema.optional(Schema.String),
          fields: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VisualReviewRunsCreateOutput>;

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
