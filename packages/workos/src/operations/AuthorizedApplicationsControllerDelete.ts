import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizedApplicationsControllerDeleteInput {
  application_id: string;
  user_id: string;
}
export const AuthorizedApplicationsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/user_management/users/{user_id}/authorized_applications/{application_id}",
    }),
  ) as unknown as Schema.Codec<AuthorizedApplicationsControllerDeleteInput>;

// Output Schema
export type AuthorizedApplicationsControllerDeleteOutput = void;
export const AuthorizedApplicationsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AuthorizedApplicationsControllerDeleteOutput>;

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
