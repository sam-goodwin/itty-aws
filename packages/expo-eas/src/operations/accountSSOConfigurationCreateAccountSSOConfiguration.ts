import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation accountSSOConfigurationCreateAccountSSOConfiguration($accountId: ID!, $accountSSOConfigurationData: AccountSSOConfigurationData!) {\n  accountSSOConfiguration {\n    createAccountSSOConfiguration(accountId: $accountId, accountSSOConfigurationData: $accountSSOConfigurationData) {\n      authProtocol\n      authProviderIdentifier\n      clientIdentifier\n      clientSecret\n      createdAt\n      id\n      issuer\n      updatedAt\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AccountSSOConfigurationCreateAccountSSOConfigurationInput =
  Schema.Struct({
    accountId: Schema.String,
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
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "accountSSOConfigurationCreateAccountSSOConfiguration",
      type: "mutation",
    }),
  );
export type AccountSSOConfigurationCreateAccountSSOConfigurationInput =
  typeof AccountSSOConfigurationCreateAccountSSOConfigurationInput.Type;

// Output Schema (GraphQL selection set)
export const AccountSSOConfigurationCreateAccountSSOConfigurationOutput =
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
    T.ResponsePath("accountSSOConfiguration.createAccountSSOConfiguration"),
  );
export type AccountSSOConfigurationCreateAccountSSOConfigurationOutput =
  typeof AccountSSOConfigurationCreateAccountSSOConfigurationOutput.Type;

export const accountSSOConfigurationCreateAccountSSOConfiguration = API.make(
  () => ({
    inputSchema: AccountSSOConfigurationCreateAccountSSOConfigurationInput,
    outputSchema: AccountSSOConfigurationCreateAccountSSOConfigurationOutput,
  }),
);
