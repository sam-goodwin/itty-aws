import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const DeleteGalleryImageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id_or_slug: Schema.String.pipe(T.PathParam()),
    url: Schema.String,
  }).pipe(T.Http({ method: "DELETE", path: "/project/{id_or_slug}/gallery" }));
export type DeleteGalleryImageInput = typeof DeleteGalleryImageInput.Type;

// Output Schema
export const DeleteGalleryImageOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGalleryImageOutput = typeof DeleteGalleryImageOutput.Type;

// The operation
/**
 * Delete a gallery image
 *
 * @param id_or_slug - The ID or slug of the project
 * @param url - URL link of the image to delete
 */
export const deleteGalleryImage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteGalleryImageInput,
  outputSchema: DeleteGalleryImageOutput,
  errors: [BadRequest] as const,
}));
