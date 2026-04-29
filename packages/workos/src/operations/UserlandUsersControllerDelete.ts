import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/user_management/users/{id}" }));
export type UserlandUsersControllerDeleteInput =
  typeof UserlandUsersControllerDeleteInput.Type;

// Output Schema
export const UserlandUsersControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UserlandUsersControllerDeleteOutput =
  typeof UserlandUsersControllerDeleteOutput.Type;

// The operation
/**
 * Delete a user
 *
 * Permanently deletes a user in the current environment. It cannot be undone.
 *
 * @param id - The unique ID of the user.
 */
export const UserlandUsersControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerDeleteInput,
    outputSchema: UserlandUsersControllerDeleteOutput,
    errors: [NotFound] as const,
  }));
