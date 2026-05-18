import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ChangeProjectIconInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
).pipe(T.Http({ method: "PATCH", path: "/project/{id_or_slug}/icon" }));
export type ChangeProjectIconInput = typeof ChangeProjectIconInput.Type;

// Output Schema
export const ChangeProjectIconOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ChangeProjectIconOutput = typeof ChangeProjectIconOutput.Type;

// The operation
/**
 * Change project's icon
 *
 * The new icon may be up to 256KiB in size.
 *
 * @param id_or_slug - The ID or slug of the project
 * @param ext - Image extension
 */
export const changeProjectIcon = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChangeProjectIconInput,
  outputSchema: ChangeProjectIconOutput,
  errors: [BadRequest] as const,
}));
