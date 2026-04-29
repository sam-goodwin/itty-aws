import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ObjectMediaPreviewsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/object_media_previews/{id}/",
    }),
  );
export type ObjectMediaPreviewsDestroyInput =
  typeof ObjectMediaPreviewsDestroyInput.Type;

// Output Schema
export const ObjectMediaPreviewsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ObjectMediaPreviewsDestroyOutput =
  typeof ObjectMediaPreviewsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this object media preview.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const objectMediaPreviewsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ObjectMediaPreviewsDestroyInput,
    outputSchema: ObjectMediaPreviewsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
