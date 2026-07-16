import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface UserlandUsersControllerCreatePasswordResetTokenInput {
  email?: string;
}
export const UserlandUsersControllerCreatePasswordResetTokenInput =
  /*@__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/user_management/password_reset" }),
  ) as unknown as Schema.Codec<UserlandUsersControllerCreatePasswordResetTokenInput>;

// Output Schema
export interface UserlandUsersControllerCreatePasswordResetTokenOutput {
  object?: string;
  id?: string;
  user_id?: string;
  email?: string;
  expires_at?: string;
  created_at?: string;
  password_reset_token?: Redacted.Redacted<string>;
  password_reset_url?: Redacted.Redacted<string>;
}
export const UserlandUsersControllerCreatePasswordResetTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    password_reset_token: Schema.optional(SensitiveOutputString),
    password_reset_url: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<UserlandUsersControllerCreatePasswordResetTokenOutput>;

// The operation
/**
 * Create a password reset token
 *
 * Creates a one-time token that can be used to reset a user's password.
 */
export const UserlandUsersControllerCreatePasswordResetToken =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerCreatePasswordResetTokenInput,
    outputSchema: UserlandUsersControllerCreatePasswordResetTokenOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
