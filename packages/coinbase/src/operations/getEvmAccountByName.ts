import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetEvmAccountByNameInput {
  name: string;
}
export const GetEvmAccountByNameInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/evm/accounts/by-name/{name}" }),
  ) as unknown as Schema.Codec<GetEvmAccountByNameInput>;

// Output Schema
export interface GetEvmAccountByNameOutput {
  address: string;
  name?: string;
  policies?: string[];
  createdAt?: string;
  updatedAt?: string;
}
export const GetEvmAccountByNameOutput =
  /*@__PURE__*/ Schema.Struct({
    address: Schema.String,
    name: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    createdAt: Schema.optional(Schema.String),
    updatedAt: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GetEvmAccountByNameOutput>;

// The operation
/**
 * Get EVM account by name
 *
 * Gets an EVM account by its name.
 *
 * @param name - The name of the EVM account.
 */
export const getEvmAccountByName = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetEvmAccountByNameInput,
  outputSchema: GetEvmAccountByNameOutput,
}));
