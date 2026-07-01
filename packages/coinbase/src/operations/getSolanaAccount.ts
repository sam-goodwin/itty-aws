import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetSolanaAccountInput {
  address: string;
}
export const GetSolanaAccountInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  address: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/solana/accounts/{address}" }),
) as unknown as Schema.Codec<GetSolanaAccountInput>;

// Output Schema
export interface GetSolanaAccountOutput {
  address: string;
  name?: string;
  policies?: string[];
  createdAt?: string;
  updatedAt?: string;
}
export const GetSolanaAccountOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    address: Schema.String,
    name: Schema.optional(Schema.String),
    policies: Schema.optional(Schema.Array(Schema.String)),
    createdAt: Schema.optional(Schema.String),
    updatedAt: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<GetSolanaAccountOutput>;

// The operation
/**
 * Get Solana account by address
 *
 * Gets a Solana account by its address.
 *
 * @param address - The base58 encoded address of the Solana account.
 */
export const getSolanaAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSolanaAccountInput,
  outputSchema: GetSolanaAccountOutput,
}));
