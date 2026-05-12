import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RemoveOrganizationUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v2/organizations/{id}/user/{user_id}" }),
  );
export type RemoveOrganizationUserInput =
  typeof RemoveOrganizationUserInput.Type;

// Output Schema
export const RemoveOrganizationUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RemoveOrganizationUserOutput =
  typeof RemoveOrganizationUserOutput.Type;

// The operation
/**
 * Remove User from Organization
 *
 * Remove a user from the Organization.
 *
 * @param id - The Organization ID.
 * @param user_id - The User ID.
 */
export const removeOrganizationUser = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemoveOrganizationUserInput,
    outputSchema: RemoveOrganizationUserOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
