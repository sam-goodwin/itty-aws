import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const UserPasskeyDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    user_id: Schema.String.pipe(T.PathParam()),
    passkey_identification_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/users/{user_id}/passkeys/{passkey_identification_id}",
  }),
);
export type UserPasskeyDeleteInput = typeof UserPasskeyDeleteInput.Type;

// Output Schema
export const UserPasskeyDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type UserPasskeyDeleteOutput = typeof UserPasskeyDeleteOutput.Type;

// The operation
/**
 * Delete a user passkey
 *
 * Delete the passkey identification for a given user and notify them through email.
 *
 * @param user_id - The ID of the user that owns the passkey identity
 * @param passkey_identification_id - The ID of the passkey identity to be deleted
 */
export const UserPasskeyDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UserPasskeyDeleteInput,
  outputSchema: UserPasskeyDeleteOutput,
  errors: [Forbidden, NotFound] as const,
}));
