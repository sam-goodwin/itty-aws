import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface AuthenticationFactorsControllerGetInput {
  id: string;
}
export const AuthenticationFactorsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/auth/factors/{id}" }),
  ) as unknown as Schema.Codec<AuthenticationFactorsControllerGetInput>;

// Output Schema
export interface AuthenticationFactorsControllerGetOutput {
  object?: string;
  id?: string;
  type?: "generic_otp" | "sms" | "totp" | "webauthn";
  user_id?: string;
  sms?: { phone_number: string };
  totp?: { issuer: string; user: string };
  created_at?: string;
  updated_at?: string;
}
export const AuthenticationFactorsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      }),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuthenticationFactorsControllerGetOutput>;

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
