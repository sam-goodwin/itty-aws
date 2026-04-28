import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const NotebooksKernelStartCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    title: Schema.optional(Schema.NullOr(Schema.String)),
    content: Schema.optional(Schema.NullOr(Schema.Unknown)),
    text_content: Schema.optional(Schema.NullOr(Schema.String)),
    version: Schema.optional(Schema.Number),
    deleted: Schema.optional(Schema.Boolean),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/notebooks/{short_id}/kernel/start/",
    }),
  );
export type NotebooksKernelStartCreateInput =
  typeof NotebooksKernelStartCreateInput.Type;

// Output Schema
export const NotebooksKernelStartCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NotebooksKernelStartCreateOutput =
  typeof NotebooksKernelStartCreateOutput.Type;

// The operation
/**
 * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksKernelStartCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NotebooksKernelStartCreateInput,
    outputSchema: NotebooksKernelStartCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
