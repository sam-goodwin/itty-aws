import * as Schema from "effect/Schema";
import {
  AuthenticationMethodsSchema,
  EndUserEvmAccountSchema,
  EndUserEvmSmartAccountSchema,
  EndUserSolanaAccountSchema,
  MFAMethodsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ValidateEndUserAccessTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessToken: SensitiveString,
  }).pipe(
    T.Http({ method: "POST", path: "/v2/end-users/auth/validate-token" }),
  );
export type ValidateEndUserAccessTokenInput =
  typeof ValidateEndUserAccessTokenInput.Type;

// Output Schema
export const ValidateEndUserAccessTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.String,
    authenticationMethods: Schema.suspend(() => AuthenticationMethodsSchema),
    mfaMethods: Schema.optional(Schema.suspend(() => MFAMethodsSchema)),
    evmAccounts: Schema.Array(Schema.String),
    evmAccountObjects: Schema.Array(
      Schema.suspend(() => EndUserEvmAccountSchema),
    ),
    evmSmartAccounts: Schema.Array(Schema.String),
    evmSmartAccountObjects: Schema.Array(
      Schema.suspend(() => EndUserEvmSmartAccountSchema),
    ),
    solanaAccounts: Schema.Array(Schema.String),
    solanaAccountObjects: Schema.Array(
      Schema.suspend(() => EndUserSolanaAccountSchema),
    ),
    createdAt: Schema.String,
  });
export type ValidateEndUserAccessTokenOutput =
  typeof ValidateEndUserAccessTokenOutput.Type;

// The operation
/**
 * Validate end user access token
 *
 * Validates the end user's access token and returns the end user's information. Returns an error if the access token is invalid or expired.
 * This API is intended to be used by the developer's own backend, and is authenticated using the developer's CDP API key.
 */
export const validateEndUserAccessToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ValidateEndUserAccessTokenInput,
    outputSchema: ValidateEndUserAccessTokenOutput,
  }),
);
