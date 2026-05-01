import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query accountSSOConfigurationPublicDataPublicDataByAccountName($accountName: String!) {\n  accountSSOConfigurationPublicData {\n    publicDataByAccountName(accountName: $accountName) {\n      authProtocol\n      authProviderIdentifier\n      authorizationUrl\n      id\n      issuer\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AccountSSOConfigurationPublicDataPublicDataByAccountNameInput =
  Schema.Struct({
    accountName: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "accountSSOConfigurationPublicDataPublicDataByAccountName",
      type: "query",
    }),
  );
export type AccountSSOConfigurationPublicDataPublicDataByAccountNameInput =
  typeof AccountSSOConfigurationPublicDataPublicDataByAccountNameInput.Type;

// Output Schema (GraphQL selection set)
export const AccountSSOConfigurationPublicDataPublicDataByAccountNameOutput =
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
    authorizationUrl: Schema.String,
    id: Schema.String,
    issuer: Schema.String,
  }).pipe(
    T.ResponsePath("accountSSOConfigurationPublicData.publicDataByAccountName"),
  );
export type AccountSSOConfigurationPublicDataPublicDataByAccountNameOutput =
  typeof AccountSSOConfigurationPublicDataPublicDataByAccountNameOutput.Type;

export const accountSSOConfigurationPublicDataPublicDataByAccountName =
  API.make(() => ({
    inputSchema: AccountSSOConfigurationPublicDataPublicDataByAccountNameInput,
    outputSchema:
      AccountSSOConfigurationPublicDataPublicDataByAccountNameOutput,
  }));
