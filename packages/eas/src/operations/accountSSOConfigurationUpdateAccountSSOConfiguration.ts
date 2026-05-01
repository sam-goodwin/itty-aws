import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation accountSSOConfigurationUpdateAccountSSOConfiguration($accountSSOConfigurationData: AccountSSOConfigurationData!, $id: ID!) {\n  accountSSOConfiguration {\n    updateAccountSSOConfiguration(accountSSOConfigurationData: $accountSSOConfigurationData, id: $id) {\n      authProtocol\n      authProviderIdentifier\n      clientIdentifier\n      clientSecret\n      createdAt\n      id\n      issuer\n      updatedAt\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AccountSSOConfigurationUpdateAccountSSOConfigurationInput =
  Schema.Struct({
    accountSSOConfigurationData: Schema.Struct({
      authProtocol: Schema.Literals(["OIDC"]),
      authProviderIdentifier: Schema.Literals([
        "AMAZON_FEDERATE",
        "GENERIC",
        "GOOGLE_WS",
        "MS_ENTRA_ID",
        "OKTA",
        "ONE_LOGIN",
        "STUB_IDP",
      ]),
      clientIdentifier: Schema.String,
      clientSecret: Schema.String,
      issuer: Schema.String,
    }),
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "accountSSOConfigurationUpdateAccountSSOConfiguration",
      type: "mutation",
    }),
  );
export type AccountSSOConfigurationUpdateAccountSSOConfigurationInput =
  typeof AccountSSOConfigurationUpdateAccountSSOConfigurationInput.Type;

// Output Schema (GraphQL selection set)
export const AccountSSOConfigurationUpdateAccountSSOConfigurationOutput =
  Schema.Struct({
    authProtocol: Schema.Literals(["OIDC"]),
    authProviderIdentifier: Schema.Literals([
      "AMAZON_FEDERATE",
      "GENERIC",
      "GOOGLE_WS",
      "MS_ENTRA_ID",
      "OKTA",
      "ONE_LOGIN",
      "STUB_IDP",
    ]),
    clientIdentifier: Schema.String,
    clientSecret: Schema.String,
    createdAt: Schema.String,
    id: Schema.String,
    issuer: Schema.String,
    updatedAt: Schema.String,
  }).pipe(
    T.ResponsePath("accountSSOConfiguration.updateAccountSSOConfiguration"),
  );
export type AccountSSOConfigurationUpdateAccountSSOConfigurationOutput =
  typeof AccountSSOConfigurationUpdateAccountSSOConfigurationOutput.Type;

export const accountSSOConfigurationUpdateAccountSSOConfiguration = API.make(
  () => ({
    inputSchema: AccountSSOConfigurationUpdateAccountSSOConfigurationInput,
    outputSchema: AccountSSOConfigurationUpdateAccountSSOConfigurationOutput,
  }),
);
