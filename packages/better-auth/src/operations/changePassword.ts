import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Unauthorized } from "../errors.ts";
import { User } from "../schemas.ts";

// Input Schema
export interface ChangePasswordInput {
  newPassword: string;
  currentPassword: string;
  revokeOtherSessions?: boolean;
}
export const ChangePasswordInput = /*@__PURE__*/ Schema.Struct({
  newPassword: Schema.String,
  currentPassword: Schema.String,
  revokeOtherSessions: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/change-password" }),
) as unknown as Schema.Codec<ChangePasswordInput>;

// Output Schema
export interface ChangePasswordOutput {
  token: string | null;
  user: User;
}
export const ChangePasswordOutput = /*@__PURE__*/ Schema.Struct({
  token: Schema.NullOr(Schema.String),
  user: User,
}) as unknown as Schema.Codec<ChangePasswordOutput>;

/**
 * Change the current user's password.
 *
 * Requires a fresh authenticated session. When `revokeOtherSessions` rotates
 * the session, a new `token` is returned (otherwise `null`).
 *
 * @param newPassword - The new password to set.
 * @param currentPassword - The user's current password (verified server-side).
 * @param revokeOtherSessions - Optional; sign out all other sessions.
 */
export const changePassword = /*@__PURE__*/ API.make(() => ({
  inputSchema: ChangePasswordInput,
  outputSchema: ChangePasswordOutput,
  errors: [BadRequest, Unauthorized] as const,
}));
