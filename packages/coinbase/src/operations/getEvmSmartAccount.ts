import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetEvmSmartAccountInput {
  address: string;
}
export const GetEvmSmartAccountInput =
  /*@__PURE__*/ Schema.Struct({
    address: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/evm/smart-accounts/{address}" }),
  ) as unknown as Schema.Codec<GetEvmSmartAccountInput>;

// Output Schema
export interface GetEvmSmartAccountOutput {
  address: string;
  owners: string[];
  name?: string;
  policies?: string[];
  createdAt?: string;
  updatedAt?: string;
}
export const GetEvmSmartAccountOutput =
  /*@__PURE__*/ Schema.Struct({
    address: Schema.String,
    owners: Schema.Array(Schema.String),
    name: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    createdAt: Schema.optional(Schema.String),
    updatedAt: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GetEvmSmartAccountOutput>;

// The operation
/**
 * Get Smart Account by address
 *
 * Gets a Smart Account by its address.
 *
 * @param address - The 0x-prefixed address of the Smart Account.
 */
export const getEvmSmartAccount = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetEvmSmartAccountInput,
  outputSchema: GetEvmSmartAccountOutput,
}));
