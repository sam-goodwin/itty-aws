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

// Input Schema
export const GetEndUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/end-users/{userId}" }));
export type GetEndUserInput = typeof GetEndUserInput.Type;

// Output Schema
export const GetEndUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetEndUserOutput = typeof GetEndUserOutput.Type;

// The operation
/**
 * Get an end user
 *
 * Gets an end user by ID.
 * This API is intended to be used by the developer's own backend, and is authenticated using the developer's CDP API key.
 *
 * @param userId - The ID of the end user to get.
 */
export const getEndUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetEndUserInput,
  outputSchema: GetEndUserOutput,
}));
