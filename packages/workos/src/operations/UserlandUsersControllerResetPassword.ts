import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UserlandUsersControllerResetPasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
    new_password: SensitiveString,
  }).pipe(
    T.Http({ method: "POST", path: "/user_management/password_reset/confirm" }),
  );
export type UserlandUsersControllerResetPasswordInput =
  typeof UserlandUsersControllerResetPasswordInput.Type;

// Output Schema
export const UserlandUsersControllerResetPasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.Struct({
      object: Schema.String,
      id: Schema.String,
      first_name: Schema.NullOr(Schema.String),
      last_name: Schema.NullOr(Schema.String),
      profile_picture_url: Schema.NullOr(Schema.String),
      email: Schema.String,
      email_verified: Schema.Boolean,
      external_id: Schema.NullOr(Schema.String),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      last_sign_in_at: Schema.NullOr(Schema.String),
      locale: Schema.optional(Schema.NullOr(Schema.String)),
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
  });
export type UserlandUsersControllerResetPasswordOutput =
  typeof UserlandUsersControllerResetPasswordOutput.Type;

// The operation
/**
 * Reset the password
 *
 * Sets a new password using the `token` query parameter from the link that the user received. Successfully resetting the password will verify a user's email, if it hasn't been verified yet.
 */
export const UserlandUsersControllerResetPassword =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerResetPasswordInput,
    outputSchema: UserlandUsersControllerResetPasswordOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
