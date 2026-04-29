import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandSessionsControllerLogoutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_id: Schema.String,
    return_to: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/user_management/sessions/logout" }));
export type UserlandSessionsControllerLogoutInput =
  typeof UserlandSessionsControllerLogoutInput.Type;

// Output Schema
export const UserlandSessionsControllerLogoutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UserlandSessionsControllerLogoutOutput =
  typeof UserlandSessionsControllerLogoutOutput.Type;

// The operation
/**
 * Logout
 *
 * Logout a user from the current [session](/reference/authkit/session).
 *
 * @param session_id - The ID of the session to revoke. This can be extracted from the `sid` claim of the access token.
 * @param return_to - The URL to redirect the user to after session revocation.
 */
export const UserlandSessionsControllerLogout =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandSessionsControllerLogoutInput,
    outputSchema: UserlandSessionsControllerLogoutOutput,
    errors: [UnprocessableEntity] as const,
  }));
