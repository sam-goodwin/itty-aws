import * as Schema from "effect/Schema";
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
    user: Schema.optional(
      Schema.Struct({
        object: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        first_name: Schema.optional(Schema.NullOr(Schema.String)),
        last_name: Schema.optional(Schema.NullOr(Schema.String)),
        profile_picture_url: Schema.optional(Schema.NullOr(Schema.String)),
        email: Schema.optional(Schema.String),
        email_verified: Schema.optional(Schema.Boolean),
        external_id: Schema.optional(Schema.NullOr(Schema.String)),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        last_sign_in_at: Schema.optional(Schema.NullOr(Schema.String)),
        locale: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
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
