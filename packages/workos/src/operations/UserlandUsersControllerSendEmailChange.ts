import * as Schema from "effect/Schema";
import { UserlandUserSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerSendEmailChangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    new_email: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/user_management/users/{id}/email_change/send",
    }),
  );
export type UserlandUsersControllerSendEmailChangeInput =
  typeof UserlandUsersControllerSendEmailChangeInput.Type;

// Output Schema
export const UserlandUsersControllerSendEmailChangeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    user: Schema.optional(Schema.suspend(() => UserlandUserSchema)),
    new_email: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
  });
export type UserlandUsersControllerSendEmailChangeOutput =
  typeof UserlandUsersControllerSendEmailChangeOutput.Type;

// The operation
/**
 * Send email change code
 *
 * Sends an email that contains a one-time code used to change a user's email address.
 *
 * @param id - The unique ID of the user.
 */
export const UserlandUsersControllerSendEmailChange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerSendEmailChangeInput,
    outputSchema: UserlandUsersControllerSendEmailChangeOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
