import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const DeleteUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/users/{user_id}" }));
export type DeleteUserInput = typeof DeleteUserInput.Type;

// Output Schema
export const DeleteUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.String,
  id: Schema.optional(Schema.String),
  slug: Schema.optional(Schema.String),
  deleted: Schema.Boolean,
  external_id: Schema.optional(Schema.String),
});
export type DeleteUserOutput = typeof DeleteUserOutput.Type;

// The operation
/**
 * Delete a user
 *
 * Delete the specified user
 *
 * @param user_id - The ID of the user to delete
 */
export const DeleteUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteUserInput,
  outputSchema: DeleteUserOutput,
  errors: [BadRequest, NotFound] as const,
}));
