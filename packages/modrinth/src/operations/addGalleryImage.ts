import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AddGalleryImageInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_slug: Schema.String.pipe(T.PathParam()),
  ext: Schema.Literals([
    "png",
    "jpg",
    "jpeg",
    "bmp",
    "gif",
    "webp",
    "svg",
    "svgz",
    "rgb",
  ]),
  featured: Schema.Boolean,
  title: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  ordering: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/project/{id_or_slug}/gallery" }));
export type AddGalleryImageInput = typeof AddGalleryImageInput.Type;

// Output Schema
export const AddGalleryImageOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddGalleryImageOutput = typeof AddGalleryImageOutput.Type;

// The operation
/**
 * Add a gallery image
 *
 * Modrinth allows you to upload files of up to 5MiB to a project's gallery.
 *
 * @param id_or_slug - The ID or slug of the project
 * @param ext - Image extension
 * @param featured - Whether an image is featured
 * @param title - Title of the image
 * @param description - Description of the image
 * @param ordering - Ordering of the image
 */
export const addGalleryImage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddGalleryImageInput,
  outputSchema: AddGalleryImageOutput,
  errors: [BadRequest, NotFound] as const,
}));
