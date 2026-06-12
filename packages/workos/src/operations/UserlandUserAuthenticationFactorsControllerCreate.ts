import * as Schema from "effect/Schema";
import {
  AuthenticationChallengeSchema,
  AuthenticationFactorEnrolledSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UserlandUserAuthenticationFactorsControllerCreateInput =
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
  );
export type UserlandUserAuthenticationFactorsControllerCreateInput =
  typeof UserlandUserAuthenticationFactorsControllerCreateInput.Type;

// Output Schema
export const UserlandUserAuthenticationFactorsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authentication_factor: Schema.optional(
      Schema.suspend(() => AuthenticationFactorEnrolledSchema),
    ),
    authentication_challenge: Schema.optional(
      Schema.suspend(() => AuthenticationChallengeSchema),
    ),
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
