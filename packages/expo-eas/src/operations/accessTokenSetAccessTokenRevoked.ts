import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation accessTokenSetAccessTokenRevoked($id: ID!, $revoked: Boolean) {\n  accessToken {\n    setAccessTokenRevoked(id: $id, revoked: $revoked) {\n      createdAt\n      id\n      lastUsedAt\n      note\n      owner {\n        accounts {\n          appCount\n          availableBuilds\n          createdAt\n          displayName\n          environmentVariableEnvironments\n          hasBuilds\n          id\n          isCurrent\n          isDisabled\n          isFreeAppDevDomainTier\n          isSSOEnabled\n          lastDeletionAttemptTime\n          name\n          profileImageUrl\n          pushSecurityEnabled\n          requireTwoFactor\n          requiresAccessTokenForPushSecurity\n          ssoAllowedAuthProviders\n          subscriptionChangesPending\n          unlimitedBuilds\n          updatedAt\n          userSpecifiedAccountUsage\n          willAutoRenewBuilds\n        }\n        created\n        displayName\n        experiments {\n          createdAt\n          enabled\n          experiment\n          id\n          updatedAt\n        }\n        firstName\n        id\n        isExpoAdmin\n        lastDeletionAttemptTime\n      }\n      revokedAt\n      updatedAt\n      visibleTokenPrefix\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AccessTokenSetAccessTokenRevokedInput = Schema.Struct({
  id: Schema.String,
  revoked: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "accessTokenSetAccessTokenRevoked",
    type: "mutation",
  }),
);
export type AccessTokenSetAccessTokenRevokedInput =
  typeof AccessTokenSetAccessTokenRevokedInput.Type;

// Output Schema (GraphQL selection set)
export const AccessTokenSetAccessTokenRevokedOutput = Schema.Struct({
  createdAt: Schema.String,
  id: Schema.String,
  lastUsedAt: Schema.NullOr(Schema.String),
  note: Schema.NullOr(Schema.String),
  owner: Schema.Struct({
    accounts: Schema.Array(
      Schema.Struct({
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
    ),
    created: Schema.String,
    displayName: Schema.String,
    experiments: Schema.Array(
      Schema.Struct({
        createdAt: Schema.String,
        enabled: Schema.Boolean,
        experiment: Schema.Literals(["ORBIT"]),
        id: Schema.String,
        updatedAt: Schema.String,
      }),
    ),
    firstName: Schema.NullOr(Schema.String),
    id: Schema.String,
    isExpoAdmin: Schema.Boolean,
    lastDeletionAttemptTime: Schema.NullOr(Schema.String),
  }),
  revokedAt: Schema.NullOr(Schema.String),
  updatedAt: Schema.String,
  visibleTokenPrefix: Schema.String,
}).pipe(T.ResponsePath("accessToken.setAccessTokenRevoked"));
export type AccessTokenSetAccessTokenRevokedOutput =
  typeof AccessTokenSetAccessTokenRevokedOutput.Type;

export const accessTokenSetAccessTokenRevoked = API.make(() => ({
  inputSchema: AccessTokenSetAccessTokenRevokedInput,
  outputSchema: AccessTokenSetAccessTokenRevokedOutput,
}));
