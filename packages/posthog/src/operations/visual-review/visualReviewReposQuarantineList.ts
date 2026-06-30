import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface VisualReviewReposQuarantineListInput {
  id: string;
  project_id: string;
  identifier?: string;
  limit?: number;
  offset?: number;
  run_type?: string;
}
export const VisualReviewReposQuarantineListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    identifier: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    run_type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/{id}/quarantine/",
    }),
  ) as unknown as Schema.Codec<VisualReviewReposQuarantineListInput>;

// Output Schema
export interface VisualReviewReposQuarantineListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    created_by?: { id?: number; first_name?: string; email?: string } | null;
    source_run?: {
      id: string;
      branch: string;
      commit_sha: string;
      created_at: string;
      pr_number?: number | null;
    } | null;
    id?: string;
    identifier?: string;
    run_type?: string;
    reason?: string;
    expires_at?: string | null;
    created_at?: string;
    updated_at?: string;
  }[];
}
export const VisualReviewReposQuarantineListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          created_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                first_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
              }),
            ),
          ),
          source_run: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.String,
                branch: Schema.String,
                commit_sha: Schema.String,
                created_at: Schema.String,
                pr_number: Schema.optional(Schema.NullOr(Schema.Number)),
              }),
            ),
          ),
          id: Schema.optional(Schema.String),
          identifier: Schema.optional(Schema.String),
          run_type: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          expires_at: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VisualReviewReposQuarantineListOutput>;

// The operation
/**
 * List quarantined identifiers. Without filter: active only. With identifier: full history.
 *
 * @param identifier - Filter by identifier (returns full history)
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_type - Filter by run type
 */
export const visualReviewReposQuarantineList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposQuarantineListInput,
    outputSchema: VisualReviewReposQuarantineListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
