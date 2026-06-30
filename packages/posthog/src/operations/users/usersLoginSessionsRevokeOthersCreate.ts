import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UsersLoginSessionsRevokeOthersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/users/{uuid}/login_sessions/revoke_others/",
    }),
  );
export type UsersLoginSessionsRevokeOthersCreateInput =
  typeof UsersLoginSessionsRevokeOthersCreateInput.Type;

// Output Schema
export const UsersLoginSessionsRevokeOthersCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revoked_count: Schema.Number,
  });
export type UsersLoginSessionsRevokeOthersCreateOutput =
  typeof UsersLoginSessionsRevokeOthersCreateOutput.Type;

// The operation
/**
 * Revoke every login session for the current user except the one making this request. Self-only.
 * Requires recent auth (TimeSensitiveActionPermission) so a stolen cookie can't weaponize the
 * "log out everywhere else" lock-out, and is blocked while impersonating.
 */
export const usersLoginSessionsRevokeOthersCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersLoginSessionsRevokeOthersCreateInput,
    outputSchema: UsersLoginSessionsRevokeOthersCreateOutput,
  }));
