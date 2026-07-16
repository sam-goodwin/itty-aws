import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface VisualReviewReposRetrieveInput {
  id: string;
  project_id: string;
}
export const VisualReviewReposRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/{id}/",
    }),
  ) as unknown as Schema.Codec<VisualReviewReposRetrieveInput>;

// Output Schema
export interface VisualReviewReposRetrieveOutput {
  id?: string;
  team_id?: number;
  repo_external_id?: number;
  repo_full_name?: string;
  baseline_file_paths?: Record<string, string>;
  enable_pr_comments?: boolean;
  created_at?: string;
}
export const VisualReviewReposRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    repo_external_id: Schema.optional(Schema.Number),
    repo_full_name: Schema.optional(Schema.String),
    baseline_file_paths: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    enable_pr_comments: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VisualReviewReposRetrieveOutput>;

// The operation
/**
 * Get a repo by ID.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: VisualReviewReposRetrieveInput,
  outputSchema: VisualReviewReposRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
