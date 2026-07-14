import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SavedDestroyInput {
  project_id: string;
  short_id: string;
}
export const SavedDestroyInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  short_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/projects/{project_id}/saved/{short_id}/",
  }),
) as unknown as Schema.Codec<SavedDestroyInput>;

// Output Schema
export type SavedDestroyOutput = void;
export const SavedDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SavedDestroyOutput>;

// The operation
/**
 * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const savedDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: SavedDestroyInput,
  outputSchema: SavedDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
