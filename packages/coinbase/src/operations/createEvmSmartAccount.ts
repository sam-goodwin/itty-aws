import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CreateEvmSmartAccountInput {
  owners: string[];
  name?: string;
}
export const CreateEvmSmartAccountInput =
  /*@__PURE__*/ Schema.Struct({
    owners: Schema.Array(Schema.String),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/evm/smart-accounts" }),
  ) as unknown as Schema.Codec<CreateEvmSmartAccountInput>;

// Output Schema
export interface CreateEvmSmartAccountOutput {
  address: string;
  owners: string[];
  name?: string;
  policies?: string[];
  createdAt?: string;
  updatedAt?: string;
}
export const CreateEvmSmartAccountOutput =
  /*@__PURE__*/ Schema.Struct({
    address: Schema.String,
    owners: Schema.Array(Schema.String),
    name: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    createdAt: Schema.optional(Schema.String),
    updatedAt: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CreateEvmSmartAccountOutput>;

// The operation
/**
 * Create Smart Account
 *
 * Creates a new Smart Account.
 *
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const createEvmSmartAccount = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateEvmSmartAccountInput,
  outputSchema: CreateEvmSmartAccountOutput,
}));
