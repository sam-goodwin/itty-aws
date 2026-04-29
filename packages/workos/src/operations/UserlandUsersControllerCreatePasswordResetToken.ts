import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UserlandUsersControllerCreatePasswordResetTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/user_management/password_reset" }));
export type UserlandUsersControllerCreatePasswordResetTokenInput =
  typeof UserlandUsersControllerCreatePasswordResetTokenInput.Type;

// Output Schema
export const UserlandUsersControllerCreatePasswordResetTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    user_id: Schema.String,
    email: Schema.String,
    expires_at: Schema.String,
    created_at: Schema.String,
    password_reset_token: SensitiveString,
    password_reset_url: SensitiveString,
  });
export type UserlandUsersControllerCreatePasswordResetTokenOutput =
  typeof UserlandUsersControllerCreatePasswordResetTokenOutput.Type;

// The operation
/**
 * Create a password reset token
 *
 * Creates a one-time token that can be used to reset a user's password.
 */
export const UserlandUsersControllerCreatePasswordResetToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerCreatePasswordResetTokenInput,
    outputSchema: UserlandUsersControllerCreatePasswordResetTokenOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
