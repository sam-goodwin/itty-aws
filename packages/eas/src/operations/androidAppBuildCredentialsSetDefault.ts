import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation androidAppBuildCredentialsSetDefault($id: ID!, $isDefault: Boolean!) {\n  androidAppBuildCredentials {\n    setDefault(id: $id, isDefault: $isDefault) {\n      androidKeystore {\n        account {\n          appCount\n          availableBuilds\n          createdAt\n          displayName\n          environmentVariableEnvironments\n          hasBuilds\n          id\n          isCurrent\n          isDisabled\n          isFreeAppDevDomainTier\n          isSSOEnabled\n          lastDeletionAttemptTime\n          name\n          profileImageUrl\n          pushSecurityEnabled\n          requireTwoFactor\n          requiresAccessTokenForPushSecurity\n          ssoAllowedAuthProviders\n          subscriptionChangesPending\n          unlimitedBuilds\n          updatedAt\n          userSpecifiedAccountUsage\n          willAutoRenewBuilds\n        }\n        createdAt\n        id\n        keyAlias\n        keyPassword\n        keystore\n        keystorePassword\n        md5CertificateFingerprint\n        sha1CertificateFingerprint\n        sha256CertificateFingerprint\n        type\n        updatedAt\n      }\n      id\n      isDefault\n      isLegacy\n      name\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AndroidAppBuildCredentialsSetDefaultInput = Schema.Struct({
  id: Schema.String,
  isDefault: Schema.Boolean,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "androidAppBuildCredentialsSetDefault",
    type: "mutation",
  }),
);
export type AndroidAppBuildCredentialsSetDefaultInput =
  typeof AndroidAppBuildCredentialsSetDefaultInput.Type;

// Output Schema (GraphQL selection set)
export const AndroidAppBuildCredentialsSetDefaultOutput = Schema.Struct({
  androidKeystore: Schema.NullOr(
    Schema.Struct({
      account: Schema.Struct({
        appCount: Schema.Number,
        availableBuilds: Schema.NullOr(Schema.Number),
        createdAt: Schema.String,
        displayName: Schema.NullOr(Schema.String),
        environmentVariableEnvironments: Schema.Array(Schema.Unknown),
        hasBuilds: Schema.Boolean,
        id: Schema.String,
        isCurrent: Schema.Boolean,
        isDisabled: Schema.Boolean,
        isFreeAppDevDomainTier: Schema.Boolean,
        isSSOEnabled: Schema.Boolean,
        lastDeletionAttemptTime: Schema.NullOr(Schema.String),
        name: Schema.String,
        profileImageUrl: Schema.String,
        pushSecurityEnabled: Schema.Boolean,
        requireTwoFactor: Schema.Boolean,
        requiresAccessTokenForPushSecurity: Schema.Boolean,
        ssoAllowedAuthProviders: Schema.Array(
          Schema.Literals([
            "AMAZON_FEDERATE",
            "GENERIC",
            "GOOGLE_WS",
            "MS_ENTRA_ID",
            "OKTA",
            "ONE_LOGIN",
            "STUB_IDP",
          ]),
        ),
        subscriptionChangesPending: Schema.NullOr(Schema.Boolean),
        unlimitedBuilds: Schema.Boolean,
        updatedAt: Schema.String,
        userSpecifiedAccountUsage: Schema.NullOr(
          Schema.Literals(["COMPANY", "PERSONAL"]),
        ),
        willAutoRenewBuilds: Schema.NullOr(Schema.Boolean),
      }),
      createdAt: Schema.String,
      id: Schema.String,
      keyAlias: Schema.String,
      keyPassword: Schema.NullOr(Schema.String),
      keystore: Schema.String,
      keystorePassword: Schema.String,
      md5CertificateFingerprint: Schema.NullOr(Schema.String),
      sha1CertificateFingerprint: Schema.NullOr(Schema.String),
      sha256CertificateFingerprint: Schema.NullOr(Schema.String),
      type: Schema.Literals(["JKS", "PKCS12", "UNKNOWN"]),
      updatedAt: Schema.String,
    }),
  ),
  id: Schema.String,
  isDefault: Schema.Boolean,
  isLegacy: Schema.Boolean,
  name: Schema.String,
}).pipe(T.ResponsePath("androidAppBuildCredentials.setDefault"));
export type AndroidAppBuildCredentialsSetDefaultOutput =
  typeof AndroidAppBuildCredentialsSetDefaultOutput.Type;

export const androidAppBuildCredentialsSetDefault = API.make(() => ({
  inputSchema: AndroidAppBuildCredentialsSetDefaultInput,
  outputSchema: AndroidAppBuildCredentialsSetDefaultOutput,
}));
