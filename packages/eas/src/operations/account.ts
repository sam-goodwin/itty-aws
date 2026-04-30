import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation account($accountName: ID) {\n  account(accountName: $accountName)\n}";

// Input Schema (GraphQL variables)
export const AccountInput = Schema.Struct({
  accountName: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "account",
    type: "mutation",
  }),
);
export type AccountInput = typeof AccountInput.Type;

// Output Schema (GraphQL selection set)
export const AccountOutput = Schema.Unknown;
export type AccountOutput = typeof AccountOutput.Type;

/**
 * Mutations that modify an Account
 */
export const account = API.make(() => ({
  inputSchema: AccountInput,
  outputSchema: AccountOutput,
}));
