import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersLoginSessionsDestroyInput {
  session_id: string;
  uuid: string;
}
export const UsersLoginSessionsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_id: Schema.String.pipe(T.PathParam()),
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/users/{uuid}/login_sessions/{session_id}/",
    }),
  ) as unknown as Schema.Codec<UsersLoginSessionsDestroyInput>;

// Output Schema
export type UsersLoginSessionsDestroyOutput = void;
export const UsersLoginSessionsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersLoginSessionsDestroyOutput>;

// The operation
/**
 * Revoke a single login session belonging to the current user. Self-only.
 * Requires recent auth (TimeSensitiveActionPermission) so a stolen cookie can't weaponize
 * revocation, and is blocked while impersonating via ImpersonationBlockedPathsMiddleware.
 */
export const usersLoginSessionsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsersLoginSessionsDestroyInput,
    outputSchema: UsersLoginSessionsDestroyOutput,
  }),
);
