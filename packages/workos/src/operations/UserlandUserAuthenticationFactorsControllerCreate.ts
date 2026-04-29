import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UserlandUserAuthenticationFactorsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userlandUserId: Schema.String.pipe(T.PathParam()),
    type: Schema.String,
    totp_issuer: Schema.optional(Schema.String),
    totp_user: Schema.optional(Schema.String),
    totp_secret: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/user_management/users/{userlandUserId}/auth_factors",
    }),
  );
export type UserlandUserAuthenticationFactorsControllerCreateInput =
  typeof UserlandUserAuthenticationFactorsControllerCreateInput.Type;

// Output Schema
export const UserlandUserAuthenticationFactorsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authentication_factor: Schema.Struct({
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
          secret: SensitiveString,
          qr_code: Schema.String,
          uri: Schema.String,
        }),
      ),
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
    authentication_challenge: Schema.Struct({
      object: Schema.String,
      id: Schema.String,
      expires_at: Schema.optional(Schema.String),
      code: Schema.optional(Schema.String),
      authentication_factor_id: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
  });
export type UserlandUserAuthenticationFactorsControllerCreateOutput =
  typeof UserlandUserAuthenticationFactorsControllerCreateOutput.Type;

// The operation
/**
 * Enroll an authentication factor
 *
 * Enrolls a user in a new [authentication factor](/reference/authkit/mfa/authentication-factor).
 *
 * @param userlandUserId - The ID of the [user](/reference/authkit/user).
 */
export const UserlandUserAuthenticationFactorsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserAuthenticationFactorsControllerCreateInput,
    outputSchema: UserlandUserAuthenticationFactorsControllerCreateOutput,
    errors: [UnprocessableEntity] as const,
  }));
