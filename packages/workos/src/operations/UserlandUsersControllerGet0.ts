import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerGet0Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/user_management/users/{id}" }));
export type UserlandUsersControllerGet0Input =
  typeof UserlandUsersControllerGet0Input.Type;

// Output Schema
export const UserlandUsersControllerGet0Output =
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
export type UserlandUsersControllerGet0Output =
  typeof UserlandUsersControllerGet0Output.Type;

// The operation
/**
 * Get a user
 *
 * Get the details of an existing user.
 *
 * @param id - The unique ID of the user.
 */
export const UserlandUsersControllerGet0 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserlandUsersControllerGet0Input,
    outputSchema: UserlandUsersControllerGet0Output,
    errors: [NotFound] as const,
  }),
);
