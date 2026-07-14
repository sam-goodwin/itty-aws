import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UpdateSolanaAccountInput {
  address: string;
  name?: string;
  accountPolicy?: string;
}
export const UpdateSolanaAccountInput =
  /*@__PURE__*/ Schema.Struct({
    address: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    accountPolicy: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "PUT", path: "/v2/solana/accounts/{address}" }),
  ) as unknown as Schema.Codec<UpdateSolanaAccountInput>;

// Output Schema
export interface UpdateSolanaAccountOutput {
  address: string;
  name?: string;
  policies?: string[];
  createdAt?: string;
  updatedAt?: string;
}
export const UpdateSolanaAccountOutput =
  /*@__PURE__*/ Schema.Struct({
    address: Schema.String,
    name: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    createdAt: Schema.optional(Schema.String),
    updatedAt: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UpdateSolanaAccountOutput>;

// The operation
/**
 * Update Solana account
 *
 * Updates an existing Solana account. Use this to update the account's name or account-level policy.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 * @param address - The base58 encoded address of the Solana account.
 */
export const updateSolanaAccount = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateSolanaAccountInput,
  outputSchema: UpdateSolanaAccountOutput,
}));
