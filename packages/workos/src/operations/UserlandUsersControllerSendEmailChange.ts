import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerSendEmailChangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    new_email: Schema.String,
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
    object: Schema.String,
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
    new_email: Schema.String,
    expires_at: Schema.String,
    created_at: Schema.String,
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
