import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListSolanaAccountsInput {
  pageSize?: number;
  pageToken?: string;
}
export const ListSolanaAccountsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/solana/accounts" }),
  ) as unknown as Schema.Codec<ListSolanaAccountsInput>;

// Output Schema
export interface ListSolanaAccountsOutput {
  accounts: {
    address: string;
    name?: string;
    policies?: string[];
    createdAt?: string;
    updatedAt?: string;
  }[];
  nextPageToken?: string;
}
export const ListSolanaAccountsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accounts: Schema.Array(
      Schema.Struct({
        address: Schema.String,
        name: Schema.optional(Schema.String),
        policies: Schema.optional(Schema.Array(Schema.String)),
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
      }),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ListSolanaAccountsOutput>;

// The operation
/**
 * List Solana accounts
 *
 * Lists the Solana accounts belonging to the developer.
 * The response is paginated, and by default, returns 20 accounts per page.
 * If a name is provided, the response will contain only the account with that name.
 *
 * @param pageSize - The number of resources to return per page.
 * @param pageToken - The token for the next page of resources, if any.
 */
export const listSolanaAccounts = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListSolanaAccountsInput,
  outputSchema: ListSolanaAccountsOutput,
}));
