import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const AuthenticationFactorsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/auth/factors/{id}" }));
export type AuthenticationFactorsControllerGetInput =
  typeof AuthenticationFactorsControllerGetInput.Type;

// Output Schema
export const AuthenticationFactorsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    type: Schema.Literals(["generic_otp", "sms", "totp", "webauthn"]),
    user_id: Schema.optional(Schema.String),
    sms: Schema.optional(
      Schema.Struct({
        phone_number: Schema.String,
      }),
    ),
    totp: Schema.optional(
      Schema.Struct({
        issuer: Schema.String,
        user: Schema.String,
      }),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuthenticationFactorsControllerGetOutput =
  typeof AuthenticationFactorsControllerGetOutput.Type;

// The operation
/**
 * Get Factor
 *
 * Gets an Authentication Factor.
 *
 * @param id - The unique ID of the Factor.
 */
export const AuthenticationFactorsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthenticationFactorsControllerGetInput,
    outputSchema: AuthenticationFactorsControllerGetOutput,
    errors: [NotFound] as const,
  }));
