import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/user_management/users/{id}" }));
export type UserlandUsersControllerGetInput =
  typeof UserlandUsersControllerGetInput.Type;

// Output Schema
export const UserlandUsersControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type UserlandUsersControllerGetOutput =
  typeof UserlandUsersControllerGetOutput.Type;

// The operation
/**
 * Get a user
 *
 * Get the details of an existing user.
 *
 * @param id - The unique ID of the user.
 */
export const UserlandUsersControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserlandUsersControllerGetInput,
    outputSchema: UserlandUsersControllerGetOutput,
    errors: [NotFound] as const,
  }),
);
