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
export const CreateEndUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userId: Schema.optional(Schema.String),
  authenticationMethods: Schema.suspend(() => AuthenticationMethodsSchema),
  evmAccount: Schema.optional(
    Schema.Struct({
      createSmartAccount: Schema.optional(Schema.Boolean),
      enableSpendPermissions: Schema.optional(Schema.Boolean),
    }),
  ),
  solanaAccount: Schema.optional(
    Schema.Struct({
      createSmartAccount: Schema.optional(Schema.Boolean),
    }),
  ),
}).pipe(T.Http({ method: "POST", path: "/v2/end-users" }));
export type CreateEndUserInput = typeof CreateEndUserInput.Type;

// Output Schema
export const CreateEndUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateEndUserOutput = typeof CreateEndUserOutput.Type;

// The operation
/**
 * Create an end user
 *
 * Creates an end user. An end user is an entity that can own CDP EVM accounts, EVM smart accounts, and/or Solana accounts. 1 or more authentication methods must be associated with an end user. By default, no accounts are created unless the optional `evmAccount` and/or `solanaAccount` fields are provided.
 * This API is intended to be used by the developer's own backend, and is authenticated using the developer's CDP API key.
 *
 * @param X-Wallet-Auth - A JWT signed using your Wallet Secret, encoded in base64. Refer to the
[Generate Wallet Token](https://docs.cdp.coinbase.com/api-reference/v2/authentication#2-generate-wallet-token)
section of our Authentication docs for more details on how to generate your Wallet Token.

 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const createEndUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateEndUserInput,
  outputSchema: CreateEndUserOutput,
}));
