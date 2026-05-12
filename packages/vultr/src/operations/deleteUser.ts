import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/users/{userId}" }));
export type DeleteUserInput = typeof DeleteUserInput.Type;

// Output Schema
export const DeleteUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteUserOutput = typeof DeleteUserOutput.Type;

// The operation
/**
 * Delete User
 *
 * Delete a User.
 *
 * @param userId - The [User id](#operation/list-users).
 */
export const deleteUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteUserInput,
  outputSchema: DeleteUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
