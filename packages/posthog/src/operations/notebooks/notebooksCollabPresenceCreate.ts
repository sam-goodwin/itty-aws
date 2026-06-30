import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const NotebooksCollabPresenceCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
    client_id: Schema.String,
    version: Schema.Number,
    cursor: Schema.Struct({
      head: Schema.optional(Schema.Number),
      node_index: Schema.optional(Schema.Number),
      offset: Schema.optional(Schema.Number),
      list_item_index: Schema.optional(Schema.Number),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/notebooks/{short_id}/collab/presence/",
    }),
  );
export type NotebooksCollabPresenceCreateInput =
  typeof NotebooksCollabPresenceCreateInput.Type;

// Output Schema
export const NotebooksCollabPresenceCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NotebooksCollabPresenceCreateOutput =
  typeof NotebooksCollabPresenceCreateOutput.Type;

// The operation
/**
 * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksCollabPresenceCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotebooksCollabPresenceCreateInput,
    outputSchema: NotebooksCollabPresenceCreateOutput,
  }));
