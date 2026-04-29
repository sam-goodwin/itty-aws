import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "PUT", path: "/user_management/users/{id}" }));
export type UserlandUsersControllerUpdateInput =
  typeof UserlandUsersControllerUpdateInput.Type;

// Output Schema
export const UserlandUsersControllerUpdateOutput =
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
export type UserlandUsersControllerUpdateOutput =
  typeof UserlandUsersControllerUpdateOutput.Type;

// The operation
/**
 * Update a user
 *
 * Updates properties of a user. The omitted properties will be left unchanged.
 *
 * @param id - The unique ID of the user.
 */
export const UserlandUsersControllerUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerUpdateInput,
    outputSchema: UserlandUsersControllerUpdateOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
