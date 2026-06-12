import * as Schema from "effect/Schema";
import { EvmSmartAccountSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListEvmSmartAccountsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v2/evm/smart-accounts" }));
export type ListEvmSmartAccountsInput = typeof ListEvmSmartAccountsInput.Type;

// Output Schema
export const ListEvmSmartAccountsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accounts: Schema.Array(Schema.suspend(() => EvmSmartAccountSchema)),
    nextPageToken: Schema.optional(Schema.String),
  });
export type ListEvmSmartAccountsOutput = typeof ListEvmSmartAccountsOutput.Type;

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
export const listEvmSmartAccounts = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListEvmSmartAccountsInput,
    outputSchema: ListEvmSmartAccountsOutput,
  }),
);
