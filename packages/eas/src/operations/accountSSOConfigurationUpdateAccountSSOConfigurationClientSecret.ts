import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation accountSSOConfigurationUpdateAccountSSOConfigurationClientSecret($clientSecret: String!, $id: ID!) {\n  accountSSOConfiguration {\n    updateAccountSSOConfigurationClientSecret(clientSecret: $clientSecret, id: $id) {\n      authProtocol\n      authProviderIdentifier\n      clientIdentifier\n      clientSecret\n      createdAt\n      id\n      issuer\n      updatedAt\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AccountSSOConfigurationUpdateAccountSSOConfigurationClientSecretInput =
  Schema.Struct({
    clientSecret: Schema.String,
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName:
        "accountSSOConfigurationUpdateAccountSSOConfigurationClientSecret",
      type: "mutation",
    }),
  );
export type AccountSSOConfigurationUpdateAccountSSOConfigurationClientSecretInput =
  typeof AccountSSOConfigurationUpdateAccountSSOConfigurationClientSecretInput.Type;

// Output Schema (GraphQL selection set)
export const AccountSSOConfigurationUpdateAccountSSOConfigurationClientSecretOutput =
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
    T.ResponsePath(
      "accountSSOConfiguration.updateAccountSSOConfigurationClientSecret",
    ),
  );
export type AccountSSOConfigurationUpdateAccountSSOConfigurationClientSecretOutput =
  typeof AccountSSOConfigurationUpdateAccountSSOConfigurationClientSecretOutput.Type;

export const accountSSOConfigurationUpdateAccountSSOConfigurationClientSecret =
  API.make(() => ({
    inputSchema:
      AccountSSOConfigurationUpdateAccountSSOConfigurationClientSecretInput,
    outputSchema:
      AccountSSOConfigurationUpdateAccountSSOConfigurationClientSecretOutput,
  }));
