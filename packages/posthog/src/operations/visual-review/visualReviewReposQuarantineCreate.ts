import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface VisualReviewReposQuarantineCreateInput {
  id: string;
  project_id: string;
  run_type: string;
  identifier?: string;
  reason?: string;
  source_run_id?: string | null;
  expires_at?: string | null;
}
export const VisualReviewReposQuarantineCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    run_type: Schema.String.pipe(T.PathParam()),
    identifier: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    source_run_id: Schema.optional(Schema.NullOr(Schema.String)),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/repos/{id}/quarantine/{run_type}/",
    }),
  ) as unknown as Schema.Codec<VisualReviewReposQuarantineCreateInput>;

// Output Schema
export interface VisualReviewReposQuarantineCreateOutput {
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
}
export const VisualReviewReposQuarantineCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VisualReviewReposQuarantineCreateOutput>;

// The operation
/**
 * Quarantine a snapshot identifier for a specific run type.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposQuarantineCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposQuarantineCreateInput,
    outputSchema: VisualReviewReposQuarantineCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
