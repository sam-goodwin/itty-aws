import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetSolanaAccountByNameInput {
  name: string;
}
export const GetSolanaAccountByNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/solana/accounts/by-name/{name}" }),
  ) as unknown as Schema.Codec<GetSolanaAccountByNameInput>;

// Output Schema
export interface GetSolanaAccountByNameOutput {
  address: string;
  name?: string;
  policies?: string[];
  createdAt?: string;
  updatedAt?: string;
}
export const GetSolanaAccountByNameOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.String,
    name: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    createdAt: Schema.optional(Schema.String),
    updatedAt: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GetSolanaAccountByNameOutput>;

// The operation
/**
 * Get Solana account by name
 *
 * Gets a Solana account by its name.
 *
 * @param name - The name of the Solana account.
 */
export const getSolanaAccountByName = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetSolanaAccountByNameInput,
    outputSchema: GetSolanaAccountByNameOutput,
  }),
);
