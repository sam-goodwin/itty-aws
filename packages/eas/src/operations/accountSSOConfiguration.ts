import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation accountSSOConfiguration {\n  accountSSOConfiguration\n}";

// Input Schema (GraphQL variables)
export const AccountSSOConfigurationInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "accountSSOConfiguration",
    type: "mutation",
  }),
);
export type AccountSSOConfigurationInput =
  typeof AccountSSOConfigurationInput.Type;

// Output Schema (GraphQL selection set)
export const AccountSSOConfigurationOutput = Schema.Unknown;
export type AccountSSOConfigurationOutput =
  typeof AccountSSOConfigurationOutput.Type;

/**
 * Mutations that create, update, and delete an AccountSSOConfiguration
 */
export const accountSSOConfiguration = API.make(() => ({
  inputSchema: AccountSSOConfigurationInput,
  outputSchema: AccountSSOConfigurationOutput,
}));
