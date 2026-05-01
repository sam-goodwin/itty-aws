import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
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
  );
export type VisualReviewReposQuarantineListInput =
  typeof VisualReviewReposQuarantineListInput.Type;

// Output Schema
export const VisualReviewReposQuarantineListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        created_by: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.Number,
              first_name: Schema.String,
              email: Schema.String,
            }),
          ),
        ),
        id: Schema.String,
        identifier: Schema.String,
        run_type: Schema.String,
        reason: Schema.String,
        expires_at: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  });
export type VisualReviewReposQuarantineListOutput =
  typeof VisualReviewReposQuarantineListOutput.Type;

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
