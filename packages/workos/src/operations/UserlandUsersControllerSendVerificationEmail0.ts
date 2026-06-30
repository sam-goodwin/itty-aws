import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerSendVerificationEmail0Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/user_management/users/{id}/email_verification/send",
    }),
  );
export type UserlandUsersControllerSendVerificationEmail0Input =
  typeof UserlandUsersControllerSendVerificationEmail0Input.Type;

// Output Schema
export const UserlandUsersControllerSendVerificationEmail0Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(
      Schema.Struct({
        object: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        first_name: Schema.optional(Schema.NullOr(Schema.String)),
        last_name: Schema.optional(Schema.NullOr(Schema.String)),
        name: Schema.optional(Schema.NullOr(Schema.String)),
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
  });
export type UserlandUsersControllerSendVerificationEmail0Output =
  typeof UserlandUsersControllerSendVerificationEmail0Output.Type;

// The operation
/**
 * Send verification email
 *
 * Sends an email that contains a one-time code used to verify a user's email address.
 *
 * @param id - The ID of the user.
 */
export const UserlandUsersControllerSendVerificationEmail0 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerSendVerificationEmail0Input,
    outputSchema: UserlandUsersControllerSendVerificationEmail0Output,
    errors: [BadRequest, NotFound] as const,
  }));
