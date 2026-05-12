import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RemoveIamUserFromRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v2/roles/{role_id}/users/{user_id}" }),
  );
export type RemoveIamUserFromRoleInput = typeof RemoveIamUserFromRoleInput.Type;

// Output Schema
export const RemoveIamUserFromRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RemoveIamUserFromRoleOutput =
  typeof RemoveIamUserFromRoleOutput.Type;

// The operation
/**
 * Remove User from Role
 *
 * Remove a User from a Role.
 *
 * @param role_id - The Role ID.
 * @param user_id - The User ID.
 */
export const removeIamUserFromRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemoveIamUserFromRoleInput,
    outputSchema: RemoveIamUserFromRoleOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
