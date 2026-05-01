import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const CommentsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/comments/{id}/",
    }),
  );
export type CommentsPartialUpdateInput = typeof CommentsPartialUpdateInput.Type;

// Output Schema
export const CommentsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CommentsPartialUpdateOutput =
  typeof CommentsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this comment.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const commentsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommentsPartialUpdateInput,
    outputSchema: CommentsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
