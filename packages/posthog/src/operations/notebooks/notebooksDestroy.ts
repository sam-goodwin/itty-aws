import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface NotebooksDestroyInput {
  project_id: string;
  short_id: string;
}
export const NotebooksDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  short_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/notebooks/{short_id}/",
  }),
) as unknown as Schema.Codec<NotebooksDestroyInput>;

// Output Schema
export type NotebooksDestroyOutput = void;
export const NotebooksDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NotebooksDestroyOutput>;

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
