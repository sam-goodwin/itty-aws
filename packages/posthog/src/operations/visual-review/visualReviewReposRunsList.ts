import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisualReviewReposRunsListInput {
  project_id: string;
  repo_id: string;
  limit?: number;
  offset?: number;
  review_state?: string;
  search?: string;
}
export const VisualReviewReposRunsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    repo_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    review_state: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/{repo_id}/runs/",
    }),
  ) as unknown as Schema.Codec<VisualReviewReposRunsListInput>;

// Output Schema
export interface VisualReviewReposRunsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    approved_by?: { id?: number; first_name?: string; email?: string } | null;
    search_match_type?: "exact" | "similar" | null;
    id?: string;
    repo_id?: string;
    status?: string;
    run_type?: string;
    commit_sha?: string;
    branch?: string;
    pr_number?: number | null;
    approved?: boolean;
    approved_at?: string | null;
    summary?: {
      total?: number;
      changed?: number;
      new?: number;
      removed?: number;
      unchanged?: number;
      unresolved?: number;
      tolerated_matched?: number;
    };
    error_message?: string | null;
    created_at?: string;
    completed_at?: string | null;
    is_stale?: boolean;
    superseded_by_id?: string | null;
    metadata?: Record<string, unknown>;
  }[];
}
export const VisualReviewReposRunsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          approved_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                first_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
              }),
            ),
          ),
          search_match_type: Schema.optional(
            Schema.NullOr(Schema.Literals(["exact", "similar"])),
          ),
          id: Schema.optional(Schema.String),
          repo_id: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          run_type: Schema.optional(Schema.String),
          commit_sha: Schema.optional(Schema.String),
          branch: Schema.optional(Schema.String),
          pr_number: Schema.optional(Schema.NullOr(Schema.Number)),
          approved: Schema.optional(Schema.Boolean),
          approved_at: Schema.optional(Schema.NullOr(Schema.String)),
          summary: Schema.optional(
            Schema.Struct({
              total: Schema.optional(Schema.Number),
              changed: Schema.optional(Schema.Number),
              new: Schema.optional(Schema.Number),
              removed: Schema.optional(Schema.Number),
              unchanged: Schema.optional(Schema.Number),
              unresolved: Schema.optional(Schema.Number),
              tolerated_matched: Schema.optional(Schema.Number),
            }),
          ),
          error_message: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          completed_at: Schema.optional(Schema.NullOr(Schema.String)),
          is_stale: Schema.optional(Schema.Boolean),
          superseded_by_id: Schema.optional(Schema.NullOr(Schema.String)),
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VisualReviewReposRunsListOutput>;

// The operation
/**
 * List runs in this repo, optionally filtered by review state and free-text search.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param review_state - Filter by review state
 * @param search - Free-text search over branch, commit SHA, run type, and PR number
 */
export const visualReviewReposRunsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisualReviewReposRunsListInput,
    outputSchema: VisualReviewReposRunsListOutput,
  }),
);
