import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const NotebooksCollabSaveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
    client_id: Schema.String,
    version: Schema.Number,
    steps: Schema.Array(Schema.Unknown),
    content: Schema.Unknown,
    text_content: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    cursor_head: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/notebooks/{short_id}/collab/save/",
    }),
  );
export type NotebooksCollabSaveCreateInput =
  typeof NotebooksCollabSaveCreateInput.Type;

// Output Schema
export const NotebooksCollabSaveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NotebooksCollabSaveCreateOutput =
  typeof NotebooksCollabSaveCreateOutput.Type;

// The operation
/**
 * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksCollabSaveCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NotebooksCollabSaveCreateInput,
    outputSchema: NotebooksCollabSaveCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
