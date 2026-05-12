import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UnsuspendOrganizationUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/v2/organizations/{id}/user/{user_id}/unsuspend",
    }),
  );
export type UnsuspendOrganizationUserInput =
  typeof UnsuspendOrganizationUserInput.Type;

// Output Schema
export const UnsuspendOrganizationUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UnsuspendOrganizationUserOutput =
  typeof UnsuspendOrganizationUserOutput.Type;

// The operation
/**
 * Unsuspend Organization User
 *
 * Unsuspend a user in the Organization.
 *
 * @param id - The Organization ID.
 * @param user_id - The User ID.
 */
export const unsuspendOrganizationUser = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UnsuspendOrganizationUserInput,
    outputSchema: UnsuspendOrganizationUserOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
