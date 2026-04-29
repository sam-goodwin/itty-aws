import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/user_management/users" }),
  );
export type UserlandUsersControllerCreateInput =
  typeof UserlandUsersControllerCreateInput.Type;

// Output Schema
export const UserlandUsersControllerCreateOutput =
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
export type UserlandUsersControllerCreateOutput =
  typeof UserlandUsersControllerCreateOutput.Type;

// The operation
/**
 * Create a user
 *
 * Create a new user in the current environment.
 */
export const UserlandUsersControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerCreateInput,
    outputSchema: UserlandUsersControllerCreateOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
