import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface VisualReviewRunsToleratedHashesListInput {
  id: string;
  project_id: string;
  identifier: string;
  limit?: number;
  offset?: number;
}
export const VisualReviewRunsToleratedHashesListInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<VisualReviewRunsToleratedHashesListInput>;

// Output Schema
export interface VisualReviewRunsToleratedHashesListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    alternate_hash?: string;
    baseline_hash?: string;
    reason?: string;
    diff_percentage?: number | null;
    created_at?: string;
    source_run_id?: string | null;
  }[];
}
export const VisualReviewRunsToleratedHashesListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          alternate_hash: Schema.optional(Schema.String),
          baseline_hash: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          diff_percentage: Schema.optional(Schema.NullOr(Schema.Number)),
          created_at: Schema.optional(Schema.String),
          source_run_id: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VisualReviewRunsToleratedHashesListOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsToleratedHashesListInput,
    outputSchema: VisualReviewRunsToleratedHashesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
