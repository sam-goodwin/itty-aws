import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ChangeUserIconInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_username: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "PATCH", path: "/user/{id_or_username}/icon" }));
export type ChangeUserIconInput = typeof ChangeUserIconInput.Type;

// Output Schema
export const ChangeUserIconOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ChangeUserIconOutput = typeof ChangeUserIconOutput.Type;

// The operation
/**
 * Change user's avatar
 *
 * The new avatar may be up to 2MiB in size.
 *
 * @param id_or_username - The ID or username of the user
 */
export const changeUserIcon = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChangeUserIconInput,
  outputSchema: ChangeUserIconOutput,
  errors: [BadRequest, NotFound] as const,
}));
