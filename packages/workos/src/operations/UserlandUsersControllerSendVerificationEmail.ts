import * as Schema from "effect/Schema";
import { UserlandUserSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerSendVerificationEmailInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/user_management/users/{id}/email_verification/send",
    }),
  );
export type UserlandUsersControllerSendVerificationEmailInput =
  typeof UserlandUsersControllerSendVerificationEmailInput.Type;

// Output Schema
export const UserlandUsersControllerSendVerificationEmailOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(Schema.suspend(() => UserlandUserSchema)),
  });
export type UserlandUsersControllerSendVerificationEmailOutput =
  typeof UserlandUsersControllerSendVerificationEmailOutput.Type;

// The operation
/**
 * Send verification email
 *
 * Sends an email that contains a one-time code used to verify a user’s email address.
 *
 * @param id - The ID of the user.
 */
export const UserlandUsersControllerSendVerificationEmail =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerSendVerificationEmailInput,
    outputSchema: UserlandUsersControllerSendVerificationEmailOutput,
    errors: [BadRequest, NotFound] as const,
  }));
