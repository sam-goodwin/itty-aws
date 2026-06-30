import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerCreate0Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
    first_name: Schema.optional(Schema.NullOr(Schema.String)),
    last_name: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    external_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "POST", path: "/user_management/users" }));
export type UserlandUsersControllerCreate0Input =
  typeof UserlandUsersControllerCreate0Input.Type;

// Output Schema
export const UserlandUsersControllerCreate0Output =
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
export type UserlandUsersControllerCreate0Output =
  typeof UserlandUsersControllerCreate0Output.Type;

// The operation
/**
 * Create a user
 *
 * Create a new user in the current environment.
 */
export const UserlandUsersControllerCreate0 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerCreate0Input,
    outputSchema: UserlandUsersControllerCreate0Output,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
