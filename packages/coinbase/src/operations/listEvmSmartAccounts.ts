import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListEvmSmartAccountsInput {
  pageSize?: number;
  pageToken?: string;
}
export const ListEvmSmartAccountsInput =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/evm/smart-accounts" }),
  ) as unknown as Schema.Codec<ListEvmSmartAccountsInput>;

// Output Schema
export interface ListEvmSmartAccountsOutput {
  accounts: {
    address: string;
    owners: string[];
    name?: string;
    policies?: string[];
    createdAt?: string;
    updatedAt?: string;
  }[];
  nextPageToken?: string;
}
export const ListEvmSmartAccountsOutput =
  /*@__PURE__*/ Schema.Struct({
    accounts: Schema.Array(
      Schema.Struct({
        address: Schema.String,
        owners: Schema.Array(Schema.String),
        name: Schema.optional(Schema.String),
        policies: Schema.optional(Schema.Array(Schema.String)),
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
      }),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ListEvmSmartAccountsOutput>;

// The operation
/**
 * List Smart Accounts
 *
 * Lists the Smart Accounts belonging to the developer's CDP Project.
 * The response is paginated, and by default, returns 20 accounts per page.
 *
 * @param pageSize - The number of resources to return per page.
 * @param pageToken - The token for the next page of resources, if any.
 */
export const listEvmSmartAccounts = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListEvmSmartAccountsInput,
  outputSchema: ListEvmSmartAccountsOutput,
}));
