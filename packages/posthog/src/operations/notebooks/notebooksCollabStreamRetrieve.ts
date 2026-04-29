import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const NotebooksCollabStreamRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/notebooks/{short_id}/collab/stream/",
    }),
  );
export type NotebooksCollabStreamRetrieveInput =
  typeof NotebooksCollabStreamRetrieveInput.Type;

// Output Schema
export const NotebooksCollabStreamRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NotebooksCollabStreamRetrieveOutput =
  typeof NotebooksCollabStreamRetrieveOutput.Type;

// The operation
/**
 * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksCollabStreamRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotebooksCollabStreamRetrieveInput,
    outputSchema: NotebooksCollabStreamRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
