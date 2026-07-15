import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Unauthorized } from "../errors.ts";

// Input Schema
export interface DeleteUserInput {
  password?: string;
  token?: string;
  callbackURL?: string;
}
export const DeleteUserInput = /*@__PURE__*/ Schema.Struct({
  password: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
  callbackURL: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/delete-user" }),
) as unknown as Schema.Codec<DeleteUserInput>;

// Output Schema
export interface DeleteUserOutput {
  success: boolean;
  message?: string;
}
export const DeleteUserOutput = /*@__PURE__*/ Schema.Struct({
  success: Schema.Boolean,
  message: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DeleteUserOutput>;

/**
 * Delete the current user.
 *
 * Requires a fresh authenticated session. Depending on server configuration
 * the deletion either applies immediately or triggers a confirmation email
 * (in which case `message` reflects "Verification email sent").
 *
 * @param password - Optional; required when deletion is password-verified.
 * @param token - Optional; the verification-flow token.
 * @param callbackURL - Optional redirect URL for the confirmation flow.
 */
export const deleteUser = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteUserInput,
  outputSchema: DeleteUserOutput,
  errors: [BadRequest, Unauthorized] as const,
}));
