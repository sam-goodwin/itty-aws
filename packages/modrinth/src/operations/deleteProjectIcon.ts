import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const DeleteProjectIconInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id_or_slug: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "DELETE", path: "/project/{id_or_slug}/icon" }));
export type DeleteProjectIconInput = typeof DeleteProjectIconInput.Type;

// Output Schema
export const DeleteProjectIconOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteProjectIconOutput = typeof DeleteProjectIconOutput.Type;

// The operation
/**
 * Delete project's icon
 *
 * @param id_or_slug - The ID or slug of the project
 */
export const deleteProjectIcon = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteProjectIconInput,
  outputSchema: DeleteProjectIconOutput,
  errors: [BadRequest] as const,
}));
