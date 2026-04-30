import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation me {\n  me {\n    purgeUnfinishedSecondFactorAuthentication {\n      success\n    }\n    scheduleCurrentUserDeletion {\n      account {\n        appCount\n        availableBuilds\n        createdAt\n        displayName\n        environmentVariableEnvironments\n        hasBuilds\n        id\n        isCurrent\n        isDisabled\n        isFreeAppDevDomainTier\n        isSSOEnabled\n        lastDeletionAttemptTime\n        name\n        profileImageUrl\n        pushSecurityEnabled\n        requireTwoFactor\n        requiresAccessTokenForPushSecurity\n        ssoAllowedAuthProviders\n        subscriptionChangesPending\n        unlimitedBuilds\n        updatedAt\n        userSpecifiedAccountUsage\n        willAutoRenewBuilds\n      }\n      createdAt\n      errorCode\n      errorMessage\n      id\n      resultData\n      resultId\n      resultType\n      state\n      tries\n      updatedAt\n      willRetry\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const MeInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "me",
    type: "mutation",
  }),
);
export type MeInput = typeof MeInput.Type;

// Output Schema (GraphQL selection set)
export const MeOutput = Schema.Struct({
  purgeUnfinishedSecondFactorAuthentication: Schema.Struct({
    success: Schema.Boolean,
  }),
  scheduleCurrentUserDeletion: Schema.Struct({
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
    errorCode: Schema.NullOr(Schema.String),
    errorMessage: Schema.NullOr(Schema.String),
    id: Schema.String,
    resultData: Schema.NullOr(Schema.Unknown),
    resultId: Schema.NullOr(Schema.String),
    resultType: Schema.Literals([
      "AUDIT_LOGS_EXPORT",
      "GITHUB_BUILD",
      "USER_AUDIT_LOGS_EXPORT",
      "VOID",
      "WORKFLOWS_INSIGHTS_EXPORT",
    ]),
    state: Schema.Literals(["FAILURE", "IN_PROGRESS", "QUEUED", "SUCCESS"]),
    tries: Schema.Number,
    updatedAt: Schema.String,
    willRetry: Schema.Boolean,
  }),
});
export type MeOutput = typeof MeOutput.Type;

/**
 * Mutations that modify the currently authenticated User
 */
export const me = API.make(() => ({
  inputSchema: MeInput,
  outputSchema: MeOutput,
}));
