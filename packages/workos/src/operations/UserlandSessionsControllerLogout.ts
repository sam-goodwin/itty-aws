import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface UserlandSessionsControllerLogoutInput {
  session_id: string;
  return_to?: string;
}
export const UserlandSessionsControllerLogoutInput =
  /*@__PURE__*/ Schema.Struct({
    session_id: Schema.String,
    return_to: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/sessions/logout" }),
  ) as unknown as Schema.Codec<UserlandSessionsControllerLogoutInput>;

// Output Schema
export type UserlandSessionsControllerLogoutOutput = void;
export const UserlandSessionsControllerLogoutOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UserlandSessionsControllerLogoutOutput>;

// The operation
/**
 * Logout
 *
 * Logout a user from the current [session](/reference/authkit/session).
 *
 * @param session_id - The ID of the session. This can be extracted from the `sid` claim of the access token.
 * @param return_to - The URL to redirect the user to after logout.
 */
export const UserlandSessionsControllerLogout =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserlandSessionsControllerLogoutInput,
    outputSchema: UserlandSessionsControllerLogoutOutput,
    errors: [UnprocessableEntity] as const,
  }));
