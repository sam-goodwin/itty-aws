import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const NotebooksDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  short_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/notebooks/{short_id}/",
  }),
);
export type NotebooksDestroyInput = typeof NotebooksDestroyInput.Type;

// Output Schema
export const NotebooksDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NotebooksDestroyOutput = typeof NotebooksDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NotebooksDestroyInput,
  outputSchema: NotebooksDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
