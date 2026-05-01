import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewReposQuarantineCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    run_type: Schema.String.pipe(T.PathParam()),
    identifier: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/repos/{id}/quarantine/{run_type}/",
    }),
  );
export type VisualReviewReposQuarantineCreateInput =
  typeof VisualReviewReposQuarantineCreateInput.Type;

// Output Schema
export const VisualReviewReposQuarantineCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          first_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
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
  });
export type VisualReviewReposQuarantineCreateOutput =
  typeof VisualReviewReposQuarantineCreateOutput.Type;

// The operation
/**
 * Quarantine a snapshot identifier for a specific run type.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposQuarantineCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposQuarantineCreateInput,
    outputSchema: VisualReviewReposQuarantineCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
