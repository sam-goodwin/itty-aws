import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandMagicAuthControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/user_management/magic_auth/{id}" }));
export type UserlandMagicAuthControllerGetInput =
  typeof UserlandMagicAuthControllerGetInput.Type;

// Output Schema
export const UserlandMagicAuthControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    user_id: Schema.String,
    email: Schema.String,
    expires_at: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
    code: Schema.String,
  });
export type UserlandMagicAuthControllerGetOutput =
  typeof UserlandMagicAuthControllerGetOutput.Type;

// The operation
/**
 * Get Magic Auth code details
 *
 * Get the details of an existing [Magic Auth](/reference/authkit/magic-auth) code that can be used to send an email to a user for authentication.
 *
 * @param id - The unique ID of the Magic Auth code.
 */
export const UserlandMagicAuthControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandMagicAuthControllerGetInput,
    outputSchema: UserlandMagicAuthControllerGetOutput,
    errors: [NotFound] as const,
  }));
