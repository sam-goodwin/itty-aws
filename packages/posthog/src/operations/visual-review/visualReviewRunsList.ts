import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewRunsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    review_state: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/runs/",
    }),
  );
export type VisualReviewRunsListInput = typeof VisualReviewRunsListInput.Type;

// Output Schema
export const VisualReviewRunsListOutput =
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
  });
export type VisualReviewRunsListOutput = typeof VisualReviewRunsListOutput.Type;

// The operation
/**
 * List runs for the team, optionally filtered by review state.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param review_state - Filter by review state
 */
export const visualReviewRunsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisualReviewRunsListInput,
    outputSchema: VisualReviewRunsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
