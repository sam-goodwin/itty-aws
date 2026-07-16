import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListFoundationAccountsInput {
  pageSize?: number;
  pageToken?: string;
  type?: string;
}
export const ListFoundationAccountsInput =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/accounts" }),
  ) as unknown as Schema.Codec<ListFoundationAccountsInput>;

// Output Schema
export interface ListFoundationAccountsOutput {
  accounts: {
    accountId: string;
    type: "prime" | "business" | "cdp";
    owner: string;
    name?: string;
    createdAt: string;
    updatedAt: string;
  }[];
  nextPageToken?: string;
}
export const ListFoundationAccountsOutput =
  /*@__PURE__*/ Schema.Struct({
    accounts: Schema.Array(
      Schema.Struct({
        accountId: Schema.String,
        type: Schema.Literals(["prime", "business", "cdp"]),
        owner: Schema.String,
        name: Schema.optional(Schema.String),
        createdAt: Schema.String,
        updatedAt: Schema.String,
      }),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ListFoundationAccountsOutput>;

// The operation
/**
 * List accounts
 *
 * List all accounts. The API will return all accounts that the API Key has Permissions to access. You can filter the results by using query parameters, which will be treated as a single conjunction (i.e. AND). Results are sorted by creation date in descending order (newest first).
 *
 * @param pageSize - The number of resources to return per page.
 * @param pageToken - The token for the next page of resources, if any.
 * @param type - Filter accounts by account type. When omitted, accounts of any type are returned. Combined with `owner` using AND.
 */
export const listFoundationAccounts = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListFoundationAccountsInput,
  outputSchema: ListFoundationAccountsOutput,
}));
