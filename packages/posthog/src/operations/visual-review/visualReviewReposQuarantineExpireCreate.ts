import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VisualReviewReposQuarantineExpireCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    run_type: Schema.String.pipe(T.PathParam()),
    identifier: Schema.String,
    reason: Schema.String,
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/visual_review/repos/{id}/quarantine/{run_type}/expire/",
    }),
  );
export type VisualReviewReposQuarantineExpireCreateInput =
  typeof VisualReviewReposQuarantineExpireCreateInput.Type;

// Output Schema
export const VisualReviewReposQuarantineExpireCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VisualReviewReposQuarantineExpireCreateOutput =
  typeof VisualReviewReposQuarantineExpireCreateOutput.Type;

// The operation
/**
 * Expire all active quarantine entries for an identifier.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposQuarantineExpireCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposQuarantineExpireCreateInput,
    outputSchema: VisualReviewReposQuarantineExpireCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
