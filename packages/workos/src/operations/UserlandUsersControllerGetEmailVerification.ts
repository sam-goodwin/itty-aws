import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerGetEmailVerificationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/email_verification/{id}" }),
  );
export type UserlandUsersControllerGetEmailVerificationInput =
  typeof UserlandUsersControllerGetEmailVerificationInput.Type;

// Output Schema
export const UserlandUsersControllerGetEmailVerificationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  });
export type UserlandUsersControllerGetEmailVerificationOutput =
  typeof UserlandUsersControllerGetEmailVerificationOutput.Type;

// The operation
/**
 * Get an email verification code
 *
 * Get the details of an existing email verification code that can be used to send an email to a user for verification.
 *
 * @param id - The ID of the email verification code.
 */
export const UserlandUsersControllerGetEmailVerification =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerGetEmailVerificationInput,
    outputSchema: UserlandUsersControllerGetEmailVerificationOutput,
    errors: [NotFound] as const,
  }));
