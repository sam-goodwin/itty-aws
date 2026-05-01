import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UserlandUsersControllerGetPasswordResetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/password_reset/{id}" }),
  );
export type UserlandUsersControllerGetPasswordResetInput =
  typeof UserlandUsersControllerGetPasswordResetInput.Type;

// Output Schema
export const UserlandUsersControllerGetPasswordResetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    password_reset_token: Schema.optional(SensitiveString),
    password_reset_url: Schema.optional(SensitiveString),
  });
export type UserlandUsersControllerGetPasswordResetOutput =
  typeof UserlandUsersControllerGetPasswordResetOutput.Type;

// The operation
/**
 * Get a password reset token
 *
 * Get the details of an existing password reset token that can be used to reset a user's password.
 *
 * @param id - The ID of the password reset token.
 */
export const UserlandUsersControllerGetPasswordReset =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerGetPasswordResetInput,
    outputSchema: UserlandUsersControllerGetPasswordResetOutput,
    errors: [NotFound] as const,
  }));
