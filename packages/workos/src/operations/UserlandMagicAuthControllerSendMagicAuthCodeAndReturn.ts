import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandMagicAuthControllerSendMagicAuthCodeAndReturnInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    invitation_token: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/user_management/magic_auth" }));
export type UserlandMagicAuthControllerSendMagicAuthCodeAndReturnInput =
  typeof UserlandMagicAuthControllerSendMagicAuthCodeAndReturnInput.Type;

// Output Schema
export const UserlandMagicAuthControllerSendMagicAuthCodeAndReturnOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  });
export type UserlandMagicAuthControllerSendMagicAuthCodeAndReturnOutput =
  typeof UserlandMagicAuthControllerSendMagicAuthCodeAndReturnOutput.Type;

// The operation
/**
 * Create a Magic Auth code
 *
 * Creates a one-time authentication code that can be sent to the user's email address. The code expires in 10 minutes. To verify the code, [authenticate the user with Magic Auth](/reference/authkit/authentication/magic-auth).
 */
export const UserlandMagicAuthControllerSendMagicAuthCodeAndReturn =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandMagicAuthControllerSendMagicAuthCodeAndReturnInput,
    outputSchema: UserlandMagicAuthControllerSendMagicAuthCodeAndReturnOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
