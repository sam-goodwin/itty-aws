import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface VisualReviewRunsAddSnapshotsCreateInput {
  id: string;
  project_id: string;
  snapshots?: {
    identifier?: string;
    content_hash?: string;
    width?: number | null;
    height?: number | null;
    metadata?: Record<string, unknown>;
  }[];
  baseline_hashes?: Record<string, string>;
}
export const VisualReviewRunsAddSnapshotsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
    baseline_hashes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/add-snapshots/",
    }),
  ) as unknown as Schema.Codec<VisualReviewRunsAddSnapshotsCreateInput>;

// Output Schema
export interface VisualReviewRunsAddSnapshotsCreateOutput {
  added?: number;
  uploads?: {
    content_hash?: string;
    url?: string;
    fields?: Record<string, string>;
  }[];
}
export const VisualReviewRunsAddSnapshotsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    added: Schema.optional(Schema.Number),
    uploads: Schema.optional(
      Schema.Array(
        Schema.Struct({
          content_hash: Schema.optional(Schema.String),
          url: Schema.optional(Schema.String),
          fields: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VisualReviewRunsAddSnapshotsCreateOutput>;

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
