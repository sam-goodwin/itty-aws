import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandUsersControllerGetByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/users/external_id/{external_id}",
    }),
  );
export type UserlandUsersControllerGetByExternalIdInput =
  typeof UserlandUsersControllerGetByExternalIdInput.Type;

// Output Schema
export const UserlandUsersControllerGetByExternalIdOutput =
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
export type UserlandUsersControllerGetByExternalIdOutput =
  typeof UserlandUsersControllerGetByExternalIdOutput.Type;

// The operation
/**
 * Get a user by external ID
 *
 * Get the details of an existing user by an [external identifier](/authkit/metadata/external-identifiers).
 *
 * @param external_id - The external ID of the user.
 */
export const UserlandUsersControllerGetByExternalId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerGetByExternalIdInput,
    outputSchema: UserlandUsersControllerGetByExternalIdOutput,
    errors: [NotFound] as const,
  }));
