import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const SuspendOrganizationUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/v2/organizations/{id}/user/{user_id}/suspend",
    }),
  );
export type SuspendOrganizationUserInput =
  typeof SuspendOrganizationUserInput.Type;

// Output Schema
export const SuspendOrganizationUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SuspendOrganizationUserOutput =
  typeof SuspendOrganizationUserOutput.Type;

// The operation
/**
 * Suspend Organization User
 *
 * Suspend a user in the Organization.
 *
 * @param id - The Organization ID.
 * @param user_id - The User ID.
 */
export const suspendOrganizationUser = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SuspendOrganizationUserInput,
    outputSchema: SuspendOrganizationUserOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
