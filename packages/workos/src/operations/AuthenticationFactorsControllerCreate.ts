import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AuthenticationFactorsControllerCreateInput {
  type: "generic_otp" | "sms" | "totp";
  phone_number?: string;
  totp_issuer?: string;
  totp_user?: string;
  user_id?: string;
}
export const AuthenticationFactorsControllerCreateInput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.Literals(["generic_otp", "sms", "totp"]),
    phone_number: Schema.optional(Schema.String),
    totp_issuer: Schema.optional(Schema.String),
    totp_user: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/auth/factors/enroll" }),
  ) as unknown as Schema.Codec<AuthenticationFactorsControllerCreateInput>;

// Output Schema
export interface AuthenticationFactorsControllerCreateOutput {
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
}
export const AuthenticationFactorsControllerCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AuthenticationFactorsControllerCreateOutput>;

// The operation
/**
 * Enroll Factor
 *
 * Enrolls an Authentication Factor to be used as an additional factor of authentication. The returned ID should be used to create an authentication Challenge.
 */
export const AuthenticationFactorsControllerCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthenticationFactorsControllerCreateInput,
    outputSchema: AuthenticationFactorsControllerCreateOutput,
    errors: [UnprocessableEntity] as const,
  }));
