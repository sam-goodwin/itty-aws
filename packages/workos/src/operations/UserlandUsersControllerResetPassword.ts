import * as Schema from "effect/Schema";
import { UserlandUserSchema } from "./_schemas.ts";
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
    token: Schema.optional(Schema.String),
    new_password: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({ method: "POST", path: "/user_management/password_reset/confirm" }),
  );
export type UserlandUsersControllerResetPasswordInput =
  typeof UserlandUsersControllerResetPasswordInput.Type;

// Output Schema
export const UserlandUsersControllerResetPasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(Schema.suspend(() => UserlandUserSchema)),
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
