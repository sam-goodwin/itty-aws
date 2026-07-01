import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface VisualReviewRunsApproveCreateInput {
  id: string;
  project_id: string;
  snapshots: { identifier?: string; new_hash?: string }[];
}
export const VisualReviewRunsApproveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    snapshots: Schema.Array(
      Schema.Struct({
        identifier: Schema.optional(Schema.String),
        new_hash: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/runs/{id}/approve/",
    }),
  ) as unknown as Schema.Codec<VisualReviewRunsApproveCreateInput>;

// Output Schema
export interface VisualReviewRunsApproveCreateOutput {
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
}
export const VisualReviewRunsApproveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VisualReviewRunsApproveCreateOutput>;

// The operation
/**
 * Mark snapshots reviewed (DB only).
 * Records the per-snapshot "Accept change" decision. Does not commit the baseline
 * or change the GitHub gate — call finalize to ship the run.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewRunsApproveCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewRunsApproveCreateInput,
    outputSchema: VisualReviewRunsApproveCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
