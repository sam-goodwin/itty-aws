import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const UserlandUsersControllerConfirmEmailChangeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    code: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/user_management/users/{id}/email_change/confirm",
    }),
  );
export type UserlandUsersControllerConfirmEmailChangeInput =
  typeof UserlandUsersControllerConfirmEmailChangeInput.Type;

// Output Schema
export const UserlandUsersControllerConfirmEmailChangeOutput =
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
  });
export type UserlandUsersControllerConfirmEmailChangeOutput =
  typeof UserlandUsersControllerConfirmEmailChangeOutput.Type;

// The operation
/**
 * Confirm email change
 *
 * Confirms an email change using the one-time code received by the user.
 *
 * @param id - The unique ID of the user.
 */
export const UserlandUsersControllerConfirmEmailChange =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerConfirmEmailChangeInput,
    outputSchema: UserlandUsersControllerConfirmEmailChangeOutput,
    errors: [BadRequest, NotFound, Conflict, UnprocessableEntity] as const,
  }));
