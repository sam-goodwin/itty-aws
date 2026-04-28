import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SavedDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  short_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/saved/{short_id}/",
  }),
);
export type SavedDestroyInput = typeof SavedDestroyInput.Type;

// Output Schema
export const SavedDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SavedDestroyOutput = typeof SavedDestroyOutput.Type;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const savedDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavedDestroyInput,
  outputSchema: SavedDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
