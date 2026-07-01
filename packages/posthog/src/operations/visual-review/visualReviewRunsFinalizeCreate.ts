import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisualReviewRunsFinalizeCreateInput {
  id: string;
  project_id: string;
  approve_all?: boolean;
  commit_to_github?: boolean;
  add_images_to_comment_on_pr?: boolean;
}
export const VisualReviewRunsFinalizeCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    approve_all: Schema.optional(Schema.Boolean),
    commit_to_github: Schema.optional(Schema.Boolean),
    add_images_to_comment_on_pr: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/finalize/",
    }),
  ) as unknown as Schema.Codec<VisualReviewRunsFinalizeCreateInput>;

// Output Schema
export interface VisualReviewRunsFinalizeCreateOutput {
  run: {
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
  };
  baseline_content: string;
}
export const VisualReviewRunsFinalizeCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    run: Schema.Struct({
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
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
    baseline_content: Schema.String,
  }) as unknown as Schema.Codec<VisualReviewRunsFinalizeCreateOutput>;

// The operation
/**
 * Finalize a fully-reviewed run: commit the approved baseline and green the gate.
 * Commits exactly the snapshots approved in the DB (tolerated ones keep their baseline)
 * and only succeeds once every changed/new snapshot is resolved. With approve_all=true,
 * any still-pending changed/new snapshot is approved first. With commit_to_github=false
 * the server returns the signed baseline YAML instead of committing it.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsFinalizeCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsFinalizeCreateInput,
    outputSchema: VisualReviewRunsFinalizeCreateOutput,
  }));
