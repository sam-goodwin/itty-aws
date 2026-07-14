import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetEvmSmartAccountByNameInput {
  name: string;
}
export const GetEvmSmartAccountByNameInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/evm/smart-accounts/by-name/{name}" }),
  ) as unknown as Schema.Codec<GetEvmSmartAccountByNameInput>;

// Output Schema
export interface GetEvmSmartAccountByNameOutput {
  address: string;
  owners: string[];
  name?: string;
  policies?: string[];
  createdAt?: string;
  updatedAt?: string;
}
export const GetEvmSmartAccountByNameOutput =
  /*@__PURE__*/ Schema.Struct({
    address: Schema.String,
    owners: Schema.Array(Schema.String),
    name: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    createdAt: Schema.optional(Schema.String),
    updatedAt: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GetEvmSmartAccountByNameOutput>;

// The operation
/**
 * Get Smart Account by name
 *
 * Gets a Smart Account by its name.
 *
 * @param name - The name of the Smart Account.
 */
export const getEvmSmartAccountByName = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetEvmSmartAccountByNameInput,
  outputSchema: GetEvmSmartAccountByNameOutput,
}));
