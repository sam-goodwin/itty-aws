import * as Schema from "effect/Schema";
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
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        created_by: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.optional(Schema.Number),
              uuid: Schema.optional(Schema.String),
              distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
              first_name: Schema.optional(Schema.String),
              last_name: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
              is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
              hedgehog_config: Schema.optional(
                Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
              ),
              role_at_organization: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
        mentions: Schema.optional(Schema.Array(Schema.Number)),
        slug: Schema.optional(Schema.String),
        content: Schema.optional(Schema.NullOr(Schema.String)),
        rich_content: Schema.optional(Schema.NullOr(Schema.Unknown)),
        version: Schema.optional(Schema.Number),
        created_at: Schema.optional(Schema.String),
        item_id: Schema.optional(Schema.NullOr(Schema.String)),
        item_context: Schema.optional(Schema.NullOr(Schema.Unknown)),
        scope: Schema.optional(Schema.String),
        source_comment: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
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
