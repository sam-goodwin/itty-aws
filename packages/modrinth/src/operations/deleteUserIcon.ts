import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteUserIconInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_username: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/user/{id_or_username}/icon" }));
export type DeleteUserIconInput = typeof DeleteUserIconInput.Type;

// Output Schema
export const DeleteUserIconOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteUserIconOutput = typeof DeleteUserIconOutput.Type;

// The operation
/**
 * Remove user's avatar
 *
 * @param id_or_username - The ID or username of the user
 */
export const deleteUserIcon = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteUserIconInput,
  outputSchema: DeleteUserIconOutput,
  errors: [BadRequest, NotFound] as const,
}));
