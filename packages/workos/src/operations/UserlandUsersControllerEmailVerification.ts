import * as Schema from "effect/Schema";
import { UserlandUserSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerEmailVerificationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    code: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/user_management/users/{id}/email_verification/confirm",
    }),
  );
export type UserlandUsersControllerEmailVerificationInput =
  typeof UserlandUsersControllerEmailVerificationInput.Type;

// Output Schema
export const UserlandUsersControllerEmailVerificationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(Schema.suspend(() => UserlandUserSchema)),
  });
export type UserlandUsersControllerEmailVerificationOutput =
  typeof UserlandUsersControllerEmailVerificationOutput.Type;

// The operation
/**
 * Verify email
 *
 * Verifies an email address using the one-time code received by the user.
 *
 * @param id - The ID of the user.
 */
export const UserlandUsersControllerEmailVerification =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerEmailVerificationInput,
    outputSchema: UserlandUsersControllerEmailVerificationOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
