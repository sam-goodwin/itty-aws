import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface UserlandUsersControllerGetPasswordResetInput {
  id: string;
}
export const UserlandUsersControllerGetPasswordResetInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/password_reset/{id}" }),
  ) as unknown as Schema.Codec<UserlandUsersControllerGetPasswordResetInput>;

// Output Schema
export interface UserlandUsersControllerGetPasswordResetOutput {
  object?: string;
  id?: string;
  user_id?: string;
  email?: string;
  expires_at?: string;
  created_at?: string;
  password_reset_token?: Redacted.Redacted<string>;
  password_reset_url?: Redacted.Redacted<string>;
}
export const UserlandUsersControllerGetPasswordResetOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    password_reset_token: Schema.optional(SensitiveOutputString),
    password_reset_url: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<UserlandUsersControllerGetPasswordResetOutput>;

// The operation
/**
 * Get a password reset token
 *
 * Get the details of an existing password reset token that can be used to reset a user's password.
 *
 * @param id - The ID of the password reset token.
 */
export const UserlandUsersControllerGetPasswordReset =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerGetPasswordResetInput,
    outputSchema: UserlandUsersControllerGetPasswordResetOutput,
    errors: [NotFound] as const,
  }));
