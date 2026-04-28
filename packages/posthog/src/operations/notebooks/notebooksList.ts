import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const NotebooksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  contains: Schema.optional(Schema.String),
  created_by: Schema.optional(Schema.String),
  date_from: Schema.optional(Schema.String),
  date_to: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  user: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/notebooks/" }),
);
export type NotebooksListInput = typeof NotebooksListInput.Type;

// Output Schema
export const NotebooksListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      short_id: Schema.String,
      title: Schema.NullOr(Schema.String),
      deleted: Schema.Boolean,
      created_at: Schema.String,
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
      last_modified_at: Schema.String,
      last_modified_by: Schema.Struct({
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
      user_access_level: Schema.NullOr(Schema.String),
      _create_in_folder: Schema.optional(Schema.String),
    }),
  ),
});
export type NotebooksListOutput = typeof NotebooksListOutput.Type;

// The operation
/**
 * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
 *
 * @param contains - Filter for notebooks that match a provided filter.
                Each match pair is separated by a colon,
                multiple match pairs can be sent separated by a space or a comma
 * @param created_by - The UUID of the Notebook's creator
 * @param date_from - Filter for notebooks created after this date & time
 * @param date_to - Filter for notebooks created before this date & time
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param user - If any value is provided for this parameter, return notebooks created by the logged in user.
 */
export const notebooksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NotebooksListInput,
  outputSchema: NotebooksListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
