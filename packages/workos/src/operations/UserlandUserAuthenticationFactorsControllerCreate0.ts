import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString, SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface UserlandUserAuthenticationFactorsControllerCreate0Input {
  userlandUserId: string;
  type?: string;
  totp_issuer?: string;
  totp_user?: string;
  totp_secret?: string | Redacted.Redacted<string>;
}
export const UserlandUserAuthenticationFactorsControllerCreate0Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userlandUserId: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(Schema.String),
    totp_issuer: Schema.optional(Schema.String),
    totp_user: Schema.optional(Schema.String),
    totp_secret: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/user_management/users/{userlandUserId}/auth_factors",
    }),
  ) as unknown as Schema.Codec<UserlandUserAuthenticationFactorsControllerCreate0Input>;

// Output Schema
export interface UserlandUserAuthenticationFactorsControllerCreate0Output {
  authentication_factor?: {
    object?: string;
    id?: string;
    type?: "generic_otp" | "sms" | "totp" | "webauthn";
    user_id?: string;
    sms?: { phone_number: string };
    totp?: {
      issuer: string;
      user: string;
      secret: Redacted.Redacted<string>;
      qr_code: string;
      uri: string;
    };
    created_at?: string;
    updated_at?: string;
  };
  authentication_challenge?: {
    object?: string;
    id?: string;
    expires_at?: string;
    code?: string;
    authentication_factor_id?: string;
    created_at?: string;
    updated_at?: string;
  };
}
export const UserlandUserAuthenticationFactorsControllerCreate0Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authentication_factor: Schema.optional(
      Schema.Struct({
        object: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals(["generic_otp", "sms", "totp", "webauthn"]),
        ),
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
            secret: SensitiveOutputString,
            qr_code: Schema.String,
            uri: Schema.String,
          }),
        ),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
    authentication_challenge: Schema.optional(
      Schema.Struct({
        object: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        expires_at: Schema.optional(Schema.String),
        code: Schema.optional(Schema.String),
        authentication_factor_id: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<UserlandUserAuthenticationFactorsControllerCreate0Output>;

// The operation
/**
 * Enroll an authentication factor
 *
 * Enrolls a user in a new [authentication factor](/reference/authkit/mfa/authentication-factor).
 *
 * @param userlandUserId - The ID of the [user](/reference/authkit/user).
 */
export const UserlandUserAuthenticationFactorsControllerCreate0 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserAuthenticationFactorsControllerCreate0Input,
    outputSchema: UserlandUserAuthenticationFactorsControllerCreate0Output,
    errors: [UnprocessableEntity] as const,
  }));
