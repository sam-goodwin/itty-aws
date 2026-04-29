import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const AuthenticationFactorsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals(["generic_otp", "sms", "totp"]),
    phone_number: Schema.optional(Schema.String),
    totp_issuer: Schema.optional(Schema.String),
    totp_user: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/auth/factors/enroll" }));
export type AuthenticationFactorsControllerCreateInput =
  typeof AuthenticationFactorsControllerCreateInput.Type;

// Output Schema
export const AuthenticationFactorsControllerCreateOutput =
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
        secret: SensitiveString,
        qr_code: Schema.String,
        uri: Schema.String,
      }),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuthenticationFactorsControllerCreateOutput =
  typeof AuthenticationFactorsControllerCreateOutput.Type;

// The operation
/**
 * Enroll Factor
 *
 * Enrolls an Authentication Factor to be used as an additional factor of authentication. The returned ID should be used to create an authentication Challenge.
 */
export const AuthenticationFactorsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthenticationFactorsControllerCreateInput,
    outputSchema: AuthenticationFactorsControllerCreateOutput,
    errors: [UnprocessableEntity] as const,
  }));
