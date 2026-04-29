import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const AuthorizedApplicationsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/user_management/users/{user_id}/authorized_applications/{application_id}",
    }),
  );
export type AuthorizedApplicationsControllerDeleteInput =
  typeof AuthorizedApplicationsControllerDeleteInput.Type;

// Output Schema
export const AuthorizedApplicationsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AuthorizedApplicationsControllerDeleteOutput =
  typeof AuthorizedApplicationsControllerDeleteOutput.Type;

// The operation
/**
 * Delete an authorized application
 *
 * Delete an existing Authorized Connect Application.
 *
 * @param application_id - The ID or client ID of the application.
 * @param user_id - The ID of the user.
 */
export const AuthorizedApplicationsControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizedApplicationsControllerDeleteInput,
    outputSchema: AuthorizedApplicationsControllerDeleteOutput,
    errors: [NotFound] as const,
  }));
