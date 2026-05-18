import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ModifyGalleryImageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id_or_slug: Schema.String.pipe(T.PathParam()),
    url: Schema.String,
    featured: Schema.optional(Schema.Boolean),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    ordering: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "PATCH", path: "/project/{id_or_slug}/gallery" }));
export type ModifyGalleryImageInput = typeof ModifyGalleryImageInput.Type;

// Output Schema
export const ModifyGalleryImageOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ModifyGalleryImageOutput = typeof ModifyGalleryImageOutput.Type;

// The operation
/**
 * Modify a gallery image
 *
 * @param id_or_slug - The ID or slug of the project
 * @param url - URL link of the image to modify
 * @param featured - Whether the image is featured
 * @param title - New title of the image
 * @param description - New description of the image
 * @param ordering - New ordering of the image
 */
export const modifyGalleryImage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModifyGalleryImageInput,
  outputSchema: ModifyGalleryImageOutput,
  errors: [BadRequest, NotFound] as const,
}));
