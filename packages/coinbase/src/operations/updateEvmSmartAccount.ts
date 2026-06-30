import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UpdateEvmSmartAccountInput {
  address: string;
  name?: string;
}
export const UpdateEvmSmartAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "PUT", path: "/v2/evm/smart-accounts/{address}" }),
  ) as unknown as Schema.Codec<UpdateEvmSmartAccountInput>;

// Output Schema
export interface UpdateEvmSmartAccountOutput {
  address: string;
  owners: string[];
  name?: string;
  policies?: string[];
  createdAt?: string;
  updatedAt?: string;
}
export const UpdateEvmSmartAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String,
    owners: Schema.Array(Schema.String),
    name: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    createdAt: Schema.optional(Schema.String),
    updatedAt: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UpdateEvmSmartAccountOutput>;

// The operation
/**
 * Update EVM Smart Account
 *
 * Updates an existing EVM smart account. Use this to update the smart account's name.
 *
 * @param address - The 0x-prefixed address of the EVM smart account. The address does not need to be checksummed.
 */
export const updateEvmSmartAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateEvmSmartAccountInput,
    outputSchema: UpdateEvmSmartAccountOutput,
  }),
);
