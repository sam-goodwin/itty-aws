import * as Schema from "effect/Schema";
import { CommentSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CommentsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  cursor: Schema.optional(Schema.String),
  item_id: Schema.optional(Schema.String),
  scope: Schema.optional(Schema.String),
  search: Schema.optional(Schema.String),
  source_comment: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/comments/" }),
);
export type CommentsListInput = typeof CommentsListInput.Type;

// Output Schema
export const CommentsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(Schema.Array(Schema.suspend(() => CommentSchema))),
});
export type CommentsListOutput = typeof CommentsListOutput.Type;

// The operation
/**
 *
 * @param cursor - The pagination cursor value.
 * @param item_id - Filter by the ID of the resource being commented on.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param scope - Filter by resource type (e.g. Dashboard, FeatureFlag, Insight, Replay).
 * @param search - Full-text search within comment content.
 * @param source_comment - Filter replies to a specific parent comment.
 */
export const commentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommentsListInput,
  outputSchema: CommentsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
