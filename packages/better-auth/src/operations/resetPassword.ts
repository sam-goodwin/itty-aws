import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface ResetPasswordInput {
  newPassword: string;
  token?: string;
}
export const ResetPasswordInput = /*@__PURE__*/ Schema.Struct({
  newPassword: Schema.String,
  token: Schema.optional(Schema.String).pipe(T.QueryParam()),
}).pipe(
  T.Http({ method: "POST", path: "/reset-password" }),
) as unknown as Schema.Codec<ResetPasswordInput>;

// Output Schema
export interface ResetPasswordOutput {
  status: boolean;
}
export const ResetPasswordOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.Boolean,
}) as unknown as Schema.Codec<ResetPasswordOutput>;

/**
 * Reset a password using the token from a reset email.
 *
 * Public endpoint (the reset token authorizes it). The token is passed as the
 * `token` query param; the new password goes in the body.
 *
 * @param newPassword - The new password to set.
 * @param token - The reset token delivered by the reset-email link.
 */
export const resetPassword = /*@__PURE__*/ API.make(() => ({
  inputSchema: ResetPasswordInput,
  outputSchema: ResetPasswordOutput,
  errors: [BadRequest] as const,
}));
