import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerUpdate0Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    email: Schema.optional(Schema.String),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    email_verified: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    external_id: Schema.optional(Schema.NullOr(Schema.String)),
    locale: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "PUT", path: "/user_management/users/{id}" }));
export type UserlandUsersControllerUpdate0Input =
  typeof UserlandUsersControllerUpdate0Input.Type;

// Output Schema
export const UserlandUsersControllerUpdate0Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type UserlandUsersControllerUpdate0Output =
  typeof UserlandUsersControllerUpdate0Output.Type;

// The operation
/**
 * Update a user
 *
 * Updates properties of a user. The omitted properties will be left unchanged.
 *
 * @param id - The unique ID of the user.
 */
export const UserlandUsersControllerUpdate0 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerUpdate0Input,
    outputSchema: UserlandUsersControllerUpdate0Output,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
