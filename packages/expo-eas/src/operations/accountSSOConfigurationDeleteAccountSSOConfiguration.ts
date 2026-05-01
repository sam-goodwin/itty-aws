import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation accountSSOConfigurationDeleteAccountSSOConfiguration($id: ID!) {\n  accountSSOConfiguration {\n    deleteAccountSSOConfiguration(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AccountSSOConfigurationDeleteAccountSSOConfigurationInput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "accountSSOConfigurationDeleteAccountSSOConfiguration",
      type: "mutation",
    }),
  );
export type AccountSSOConfigurationDeleteAccountSSOConfigurationInput =
  typeof AccountSSOConfigurationDeleteAccountSSOConfigurationInput.Type;

// Output Schema (GraphQL selection set)
export const AccountSSOConfigurationDeleteAccountSSOConfigurationOutput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.ResponsePath("accountSSOConfiguration.deleteAccountSSOConfiguration"),
  );
export type AccountSSOConfigurationDeleteAccountSSOConfigurationOutput =
  typeof AccountSSOConfigurationDeleteAccountSSOConfigurationOutput.Type;

export const accountSSOConfigurationDeleteAccountSSOConfiguration = API.make(
  () => ({
    inputSchema: AccountSSOConfigurationDeleteAccountSSOConfigurationInput,
    outputSchema: AccountSSOConfigurationDeleteAccountSSOConfigurationOutput,
  }),
);
