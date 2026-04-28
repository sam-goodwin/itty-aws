import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const CommentsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/comments/{id}/" }),
);
export type CommentsRetrieveInput = typeof CommentsRetrieveInput.Type;

// Output Schema
export const CommentsRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    created_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    mentions: Schema.optional(Schema.Array(Schema.Number)),
    slug: Schema.optional(Schema.String),
    content: Schema.optional(Schema.NullOr(Schema.String)),
    rich_content: Schema.optional(Schema.NullOr(Schema.Unknown)),
    version: Schema.Number,
    created_at: Schema.String,
    item_id: Schema.optional(Schema.NullOr(Schema.String)),
    item_context: Schema.optional(Schema.NullOr(Schema.Unknown)),
    scope: Schema.String,
    source_comment: Schema.optional(Schema.NullOr(Schema.String)),
  },
);
export type CommentsRetrieveOutput = typeof CommentsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this comment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const commentsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommentsRetrieveInput,
  outputSchema: CommentsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
