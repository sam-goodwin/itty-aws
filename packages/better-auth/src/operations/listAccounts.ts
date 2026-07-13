import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Unauthorized } from "../errors.ts";
import { Account } from "../schemas.ts";

// Input Schema
export interface ListAccountsInput {}
export const ListAccountsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/list-accounts" }),
) as unknown as Schema.Codec<ListAccountsInput>;

// Output Schema
export type ListAccountsOutput = Account[];
export const ListAccountsOutput = /*@__PURE__*/ Schema.Array(
  Account,
) as unknown as Schema.Codec<ListAccountsOutput>;

/**
 * List the current user's linked accounts.
 *
 * Requires an authenticated session. Returns account metadata only — no
 * provider secrets or tokens are exposed.
 */
export const listAccounts = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListAccountsInput,
  outputSchema: ListAccountsOutput,
  errors: [Unauthorized] as const,
}));
