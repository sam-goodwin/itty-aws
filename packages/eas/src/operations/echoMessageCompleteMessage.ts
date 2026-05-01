import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation echoMessageCompleteMessage($id: ID!, $metadata: JSONObject) {\n  echoMessage {\n    completeMessage(id: $id, metadata: $metadata) {\n      completedAt\n      echoChat {\n        agentMetadata\n        agentType\n        echoProject {\n          description\n          displayName\n          id\n          initFromGitHubUrl\n          lastMessageAt\n          slug\n          updatedAt\n          visibility\n        }\n        id\n        state\n        stats\n        title\n      }\n      echoMessageParts {\n        data\n        id\n        index\n        type\n      }\n      echoTurn {\n        completedAt\n        createdAt\n        echoChat {\n          agentMetadata\n          agentType\n          id\n          state\n          stats\n          title\n        }\n        id\n      }\n      id\n      metadata\n      role\n      turnId\n      user {\n        accessTokens {\n          createdAt\n          id\n          lastUsedAt\n          note\n          revokedAt\n          updatedAt\n          visibleTokenPrefix\n        }\n        accounts {\n          appCount\n          availableBuilds\n          createdAt\n          displayName\n          environmentVariableEnvironments\n          hasBuilds\n          id\n          isCurrent\n          isDisabled\n          isFreeAppDevDomainTier\n          isSSOEnabled\n          lastDeletionAttemptTime\n          name\n          profileImageUrl\n          pushSecurityEnabled\n          requireTwoFactor\n          requiresAccessTokenForPushSecurity\n          ssoAllowedAuthProviders\n          subscriptionChangesPending\n          unlimitedBuilds\n          updatedAt\n          userSpecifiedAccountUsage\n          willAutoRenewBuilds\n        }\n        appCount\n        appetizeCode\n        bestContactEmail\n        created\n        discordUser {\n          discordIdentifier\n          id\n        }\n        displayName\n        email\n        emailVerified\n        experiments {\n          createdAt\n          enabled\n          experiment\n          id\n          updatedAt\n        }\n        firstName\n        fullName\n        githubUser {\n          githubUserIdentifier\n          id\n        }\n        githubUsername\n        hasPassword\n        hasPendingUserInvitations\n        id\n        industry\n        isExpoAdmin\n        isLegacy\n        isSecondFactorAuthenticationEnabled\n        isStaffModeEnabled\n        lastDeletionAttemptTime\n        lastName\n        location\n        newEmailPendingVerification\n        oAuthIdentities {\n          email\n          id\n          login\n          provider\n        }\n        pendingUserInvitations {\n          accountName\n          accountProfileImageUrl\n          accountProfilePhoto\n          accountRequiresTwoFactor\n          created\n          email\n          expires\n          id\n          isForOrganization\n          permissions\n          role\n        }\n        pinnedApps {\n          appStoreUrl\n          assetLimitPerUpdateGroup\n          buildProfiles\n          buildsReleaseChannels\n          description\n          environmentVariableEnvironments\n          fullName\n          githubUrl\n          iconUrl\n          id\n          internalDistributionBuildPrivacy\n          isDeleting\n          isDeprecated\n          isLikedByMe\n          lastDeletionAttemptTime\n          lastPublishedTime\n          latestActivity\n          latestReleaseId\n          likeCount\n          name\n          packageName\n          packageUsername\n          playStoreUrl\n          privacy\n          privacySetting\n          published\n          pushSecurityEnabled\n          releaseChannels\n          requiresAccessTokenForPushSecurity\n          resourceClassExperiment\n          scopeKey\n          sdkVersion\n          slug\n          suggestedDevDomainName\n          trendScore\n          updated\n          username\n        }\n        pinnedDashboardViews {\n          view\n        }\n        preferences {\n          selectedAccountName\n        }\n        primaryAccount {\n          appCount\n          availableBuilds\n          createdAt\n          displayName\n          environmentVariableEnvironments\n          hasBuilds\n          id\n          isCurrent\n          isDisabled\n          isFreeAppDevDomainTier\n          isSSOEnabled\n          lastDeletionAttemptTime\n          name\n          profileImageUrl\n          pushSecurityEnabled\n          requireTwoFactor\n          requiresAccessTokenForPushSecurity\n          ssoAllowedAuthProviders\n          subscriptionChangesPending\n          unlimitedBuilds\n          updatedAt\n          userSpecifiedAccountUsage\n          willAutoRenewBuilds\n        }\n        primaryAccountProfileImageUrl\n        profilePhoto\n        secondFactorDevices {\n          createdAt\n          id\n          isCertified\n          isPrimary\n          method\n          name\n          smsPhoneNumber\n          updatedAt\n        }\n        twitterUsername\n        username\n      }\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EchoMessageCompleteMessageInput = Schema.Struct({
  id: Schema.String,
  metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoMessageCompleteMessage",
    type: "mutation",
  }),
);
export type EchoMessageCompleteMessageInput =
  typeof EchoMessageCompleteMessageInput.Type;

// Output Schema (GraphQL selection set)
export const EchoMessageCompleteMessageOutput = Schema.Struct({
  completedAt: Schema.NullOr(Schema.String),
  echoChat: Schema.Struct({
    agentMetadata: Schema.NullOr(Schema.Unknown),
    agentType: Schema.NullOr(
      Schema.Literals(["CLAUDE_CODE", "CODEX", "GEMINI"]),
    ),
    echoProject: Schema.Struct({
      description: Schema.NullOr(Schema.String),
      displayName: Schema.NullOr(Schema.String),
      id: Schema.String,
      initFromGitHubUrl: Schema.NullOr(Schema.String),
      lastMessageAt: Schema.NullOr(Schema.String),
      slug: Schema.NullOr(Schema.String),
      updatedAt: Schema.String,
      visibility: Schema.Literals(["PRIVATE", "PUBLIC"]),
    }),
    id: Schema.String,
    state: Schema.Literals(["ACTIVE", "ARCHIVED"]),
    stats: Schema.NullOr(Schema.Unknown),
    title: Schema.NullOr(Schema.String),
  }),
  echoMessageParts: Schema.Array(
    Schema.Struct({
      data: Schema.Unknown,
      id: Schema.String,
      index: Schema.Number,
      type: Schema.Literals([
        "COMPACTION",
        "DATA",
        "FILE",
        "REASONING",
        "SOURCE",
        "STEP",
        "SUBTASK",
        "TEXT",
        "TOOL",
      ]),
    }),
  ),
  echoTurn: Schema.NullOr(
    Schema.Struct({
      completedAt: Schema.NullOr(Schema.String),
      createdAt: Schema.String,
      echoChat: Schema.Struct({
        agentMetadata: Schema.NullOr(Schema.Unknown),
        agentType: Schema.NullOr(
          Schema.Literals(["CLAUDE_CODE", "CODEX", "GEMINI"]),
        ),
        id: Schema.String,
        state: Schema.Literals(["ACTIVE", "ARCHIVED"]),
        stats: Schema.NullOr(Schema.Unknown),
        title: Schema.NullOr(Schema.String),
      }),
      id: Schema.String,
    }),
  ),
  id: Schema.String,
  metadata: Schema.NullOr(Schema.Unknown),
  role: Schema.Literals(["ASSISTANT", "USER"]),
  turnId: Schema.NullOr(Schema.String),
  user: Schema.NullOr(
    Schema.Struct({
      accessTokens: Schema.Array(
        Schema.Struct({
          createdAt: Schema.String,
          id: Schema.String,
          lastUsedAt: Schema.NullOr(Schema.String),
          note: Schema.NullOr(Schema.String),
          revokedAt: Schema.NullOr(Schema.String),
          updatedAt: Schema.String,
          visibleTokenPrefix: Schema.String,
        }),
      ),
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
      appCount: Schema.Number,
      appetizeCode: Schema.NullOr(Schema.String),
      bestContactEmail: Schema.NullOr(Schema.String),
      created: Schema.String,
      discordUser: Schema.NullOr(
        Schema.Struct({
          discordIdentifier: Schema.String,
          id: Schema.String,
        }),
      ),
      displayName: Schema.String,
      email: Schema.String,
      emailVerified: Schema.Boolean,
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
      fullName: Schema.NullOr(Schema.String),
      githubUser: Schema.NullOr(
        Schema.Struct({
          githubUserIdentifier: Schema.String,
          id: Schema.String,
        }),
      ),
      githubUsername: Schema.NullOr(Schema.String),
      hasPassword: Schema.Boolean,
      hasPendingUserInvitations: Schema.Boolean,
      id: Schema.String,
      industry: Schema.NullOr(Schema.String),
      isExpoAdmin: Schema.Boolean,
      isLegacy: Schema.Boolean,
      isSecondFactorAuthenticationEnabled: Schema.Boolean,
      isStaffModeEnabled: Schema.Boolean,
      lastDeletionAttemptTime: Schema.NullOr(Schema.String),
      lastName: Schema.NullOr(Schema.String),
      location: Schema.NullOr(Schema.String),
      newEmailPendingVerification: Schema.NullOr(Schema.String),
      oAuthIdentities: Schema.Array(
        Schema.Struct({
          email: Schema.String,
          id: Schema.String,
          login: Schema.NullOr(Schema.String),
          provider: Schema.Literals(["apple", "github", "google"]),
        }),
      ),
      pendingUserInvitations: Schema.Array(
        Schema.Struct({
          accountName: Schema.String,
          accountProfileImageUrl: Schema.String,
          accountProfilePhoto: Schema.NullOr(Schema.String),
          accountRequiresTwoFactor: Schema.Boolean,
          created: Schema.String,
          email: Schema.String,
          expires: Schema.String,
          id: Schema.String,
          isForOrganization: Schema.Boolean,
          permissions: Schema.Array(
            Schema.Literals(["ADMIN", "OWN", "PUBLISH", "VIEW"]),
          ),
          role: Schema.Literals([
            "ADMIN",
            "CUSTOM",
            "DEVELOPER",
            "HAS_ADMIN",
            "NOT_ADMIN",
            "OWNER",
            "VIEW_ONLY",
          ]),
        }),
      ),
      pinnedApps: Schema.Array(
        Schema.Struct({
          appStoreUrl: Schema.NullOr(Schema.String),
          assetLimitPerUpdateGroup: Schema.Number,
          buildProfiles: Schema.Array(Schema.String),
          buildsReleaseChannels: Schema.Array(Schema.String),
          description: Schema.String,
          environmentVariableEnvironments: Schema.Array(Schema.Unknown),
          fullName: Schema.String,
          githubUrl: Schema.NullOr(Schema.String),
          iconUrl: Schema.NullOr(Schema.String),
          id: Schema.String,
          internalDistributionBuildPrivacy: Schema.Literals([
            "PRIVATE",
            "PUBLIC",
          ]),
          isDeleting: Schema.Boolean,
          isDeprecated: Schema.Boolean,
          isLikedByMe: Schema.Boolean,
          lastDeletionAttemptTime: Schema.NullOr(Schema.String),
          lastPublishedTime: Schema.String,
          latestActivity: Schema.String,
          latestReleaseId: Schema.String,
          likeCount: Schema.Number,
          name: Schema.String,
          packageName: Schema.String,
          packageUsername: Schema.String,
          playStoreUrl: Schema.NullOr(Schema.String),
          privacy: Schema.String,
          privacySetting: Schema.Literals(["HIDDEN", "PUBLIC", "UNLISTED"]),
          published: Schema.Boolean,
          pushSecurityEnabled: Schema.Boolean,
          releaseChannels: Schema.Array(Schema.String),
          requiresAccessTokenForPushSecurity: Schema.Boolean,
          resourceClassExperiment: Schema.NullOr(
            Schema.Literals(["C3D", "N2"]),
          ),
          scopeKey: Schema.String,
          sdkVersion: Schema.String,
          slug: Schema.String,
          suggestedDevDomainName: Schema.String,
          trendScore: Schema.Number,
          updated: Schema.String,
          username: Schema.String,
        }),
      ),
      pinnedDashboardViews: Schema.Array(
        Schema.Struct({
          view: Schema.Literals(["ACTIVITY", "OVERVIEW"]),
        }),
      ),
      preferences: Schema.Struct({
        selectedAccountName: Schema.NullOr(Schema.String),
      }),
      primaryAccount: Schema.Struct({
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
      primaryAccountProfileImageUrl: Schema.NullOr(Schema.String),
      profilePhoto: Schema.String,
      secondFactorDevices: Schema.Array(
        Schema.Struct({
          createdAt: Schema.String,
          id: Schema.String,
          isCertified: Schema.Boolean,
          isPrimary: Schema.Boolean,
          method: Schema.Literals(["AUTHENTICATOR", "SMS"]),
          name: Schema.String,
          smsPhoneNumber: Schema.NullOr(Schema.String),
          updatedAt: Schema.String,
        }),
      ),
      twitterUsername: Schema.NullOr(Schema.String),
      username: Schema.String,
    }),
  ),
}).pipe(T.ResponsePath("echoMessage.completeMessage"));
export type EchoMessageCompleteMessageOutput =
  typeof EchoMessageCompleteMessageOutput.Type;

export const echoMessageCompleteMessage = API.make(() => ({
  inputSchema: EchoMessageCompleteMessageInput,
  outputSchema: EchoMessageCompleteMessageOutput,
}));
