import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation robotUpdateRobot($id: String!, $robotData: RobotDataInput!) {\n  robot {\n    updateRobot(id: $id, robotData: $robotData) {\n      accessTokens {\n        createdAt\n        id\n        lastUsedAt\n        note\n        owner {\n          created\n          displayName\n          firstName\n          id\n          isExpoAdmin\n          lastDeletionAttemptTime\n        }\n        revokedAt\n        updatedAt\n        visibleTokenPrefix\n      }\n      accounts {\n        accessTokens {\n          createdAt\n          id\n          lastUsedAt\n          note\n          revokedAt\n          updatedAt\n          visibleTokenPrefix\n        }\n        appCount\n        appStoreConnectApiKeys {\n          createdAt\n          id\n          issuerIdentifier\n          keyIdentifier\n          keyP8\n          name\n          roles\n          updatedAt\n        }\n        appleDistributionCertificates {\n          certificateP12\n          certificatePassword\n          certificatePrivateSigningKey\n          createdAt\n          developerPortalIdentifier\n          id\n          serialNumber\n          updatedAt\n          validityNotAfter\n          validityNotBefore\n        }\n        applePushKeys {\n          createdAt\n          id\n          keyIdentifier\n          keyP8\n          updatedAt\n        }\n        availableBuilds\n        billing {\n          id\n        }\n        convexTeamConnections {\n          convexTeamIdentifier\n          createdAt\n          id\n          updatedAt\n        }\n        createdAt\n        displayName\n        environmentVariableEnvironments\n        githubAppInstallations {\n          id\n          installationIdentifier\n        }\n        googleServiceAccountKeys {\n          clientEmail\n          clientIdentifier\n          createdAt\n          id\n          keyJson\n          privateKeyIdentifier\n          projectIdentifier\n          updatedAt\n        }\n        hasBuilds\n        id\n        isCurrent\n        isDisabled\n        isFreeAppDevDomainTier\n        isSSOEnabled\n        lastDeletionAttemptTime\n        logRocketOrganization {\n          createdAt\n          id\n          orgName\n          orgSlug\n        }\n        memberStats {\n          allHave2FAEnabled\n          humanCount\n          ownerCount\n          robotCount\n          ssoUserCount\n          totalCount\n        }\n        name\n        offers {\n          features\n          id\n          price\n          quantity\n          stripeId\n          trialLength\n          type\n        }\n        onboardingStats {\n          firstBuildCompletedAt\n          firstProjectCreatedAt\n          firstSubmissionCompletedAt\n          firstUpdateCreatedAt\n          hasConfiguredUpdate\n          hasConfiguredWorkflow\n          hasTeamMembers\n        }\n        owner {\n          appCount\n          appetizeCode\n          bestContactEmail\n          created\n          displayName\n          email\n          emailVerified\n          firstName\n          fullName\n          githubUsername\n          hasPassword\n          hasPendingUserInvitations\n          id\n          industry\n          isExpoAdmin\n          isLegacy\n          isSecondFactorAuthenticationEnabled\n          isStaffModeEnabled\n          lastDeletionAttemptTime\n          lastName\n          location\n          newEmailPendingVerification\n          primaryAccountProfileImageUrl\n          profilePhoto\n          twitterUsername\n          username\n        }\n        ownerUserActor {\n          appCount\n          appetizeCode\n          bestContactEmail\n          created\n          displayName\n          firstName\n          fullName\n          githubUsername\n          id\n          industry\n          isExpoAdmin\n          isStaffModeEnabled\n          lastDeletionAttemptTime\n          lastName\n          location\n          primaryAccountProfileImageUrl\n          profilePhoto\n          twitterUsername\n          username\n        }\n        pendingSentryInstallation {\n          createdAt\n          id\n          installationId\n          orgSlug\n        }\n        profileImageUrl\n        pushSecurityEnabled\n        requireTwoFactor\n        requiresAccessTokenForPushSecurity\n        sentryInstallation {\n          createdAt\n          id\n          installationId\n          orgSlug\n        }\n        ssoAllowedAuthProviders\n        ssoConfiguration {\n          authProtocol\n          authProviderIdentifier\n          clientIdentifier\n          clientSecret\n          createdAt\n          id\n          issuer\n          updatedAt\n        }\n        subscription {\n          cancelAt\n          endedAt\n          id\n          isDowngrading\n          name\n          nextInvoice\n          nextInvoiceAmountDueCents\n          planId\n          price\n          recurringCents\n          status\n          trialEnd\n          willCancel\n        }\n        subscriptionChangesPending\n        unlimitedBuilds\n        updatedAt\n        userActorOwner {\n          appCount\n          appetizeCode\n          bestContactEmail\n          created\n          displayName\n          firstName\n          fullName\n          githubUsername\n          id\n          industry\n          isExpoAdmin\n          isStaffModeEnabled\n          lastDeletionAttemptTime\n          lastName\n          location\n          primaryAccountProfileImageUrl\n          profilePhoto\n          twitterUsername\n          username\n        }\n        userInvitations {\n          accountName\n          accountProfileImageUrl\n          accountProfilePhoto\n          accountRequiresTwoFactor\n          created\n          email\n          expires\n          id\n          isForOrganization\n          permissions\n          role\n        }\n        userSpecifiedAccountUsage\n        users {\n          id\n          permissions\n          role\n        }\n        vexoAccountConnection {\n          id\n        }\n        viewerUserPermission {\n          id\n          permissions\n          role\n        }\n        willAutoRenewBuilds\n      }\n      created\n      displayName\n      experiments {\n        createdAt\n        enabled\n        experiment\n        id\n        updatedAt\n      }\n      firstName\n      githubAppInstallations {\n        account {\n          appCount\n          availableBuilds\n          createdAt\n          displayName\n          environmentVariableEnvironments\n          hasBuilds\n          id\n          isCurrent\n          isDisabled\n          isFreeAppDevDomainTier\n          isSSOEnabled\n          lastDeletionAttemptTime\n          name\n          profileImageUrl\n          pushSecurityEnabled\n          requireTwoFactor\n          requiresAccessTokenForPushSecurity\n          ssoAllowedAuthProviders\n          subscriptionChangesPending\n          unlimitedBuilds\n          updatedAt\n          userSpecifiedAccountUsage\n          willAutoRenewBuilds\n        }\n        actor {\n          created\n          displayName\n          firstName\n          id\n          isExpoAdmin\n          lastDeletionAttemptTime\n        }\n        id\n        installationIdentifier\n        metadata {\n          githubAccountAvatarUrl\n          githubAccountName\n          githubAccountType\n          installationStatus\n        }\n      }\n      id\n      isExpoAdmin\n      isManagedByGitHubApp\n      lastDeletionAttemptTime\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const RobotUpdateRobotInput = Schema.Struct({
  id: Schema.String,
  robotData: Schema.Struct({
    name: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "robotUpdateRobot",
    type: "mutation",
  }),
);
export type RobotUpdateRobotInput = typeof RobotUpdateRobotInput.Type;

// Output Schema (GraphQL selection set)
export const RobotUpdateRobotOutput = Schema.Struct({
  accessTokens: Schema.Array(
    Schema.Struct({
      createdAt: Schema.String,
      id: Schema.String,
      lastUsedAt: Schema.NullOr(Schema.String),
      note: Schema.NullOr(Schema.String),
      owner: Schema.Struct({
        created: Schema.String,
        displayName: Schema.String,
        firstName: Schema.NullOr(Schema.String),
        id: Schema.String,
        isExpoAdmin: Schema.Boolean,
        lastDeletionAttemptTime: Schema.NullOr(Schema.String),
      }),
      revokedAt: Schema.NullOr(Schema.String),
      updatedAt: Schema.String,
      visibleTokenPrefix: Schema.String,
    }),
  ),
  accounts: Schema.Array(
    Schema.Struct({
      accessTokens: Schema.Array(
        Schema.NullOr(
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
      ),
      appCount: Schema.Number,
      appStoreConnectApiKeys: Schema.Array(
        Schema.Struct({
          createdAt: Schema.String,
          id: Schema.String,
          issuerIdentifier: Schema.String,
          keyIdentifier: Schema.String,
          keyP8: Schema.String,
          name: Schema.NullOr(Schema.String),
          roles: Schema.NullOr(
            Schema.Array(
              Schema.Literals([
                "ACCESS_TO_REPORTS",
                "ACCOUNT_HOLDER",
                "ADMIN",
                "APP_MANAGER",
                "CLOUD_MANAGED_APP_DISTRIBUTION",
                "CLOUD_MANAGED_DEVELOPER_ID",
                "CREATE_APPS",
                "CUSTOMER_SUPPORT",
                "DEVELOPER",
                "FINANCE",
                "IMAGE_MANAGER",
                "MARKETING",
                "READ_ONLY",
                "SALES",
                "TECHNICAL",
                "UNKNOWN",
              ]),
            ),
          ),
          updatedAt: Schema.String,
        }),
      ),
      appleDistributionCertificates: Schema.Array(
        Schema.Struct({
          certificateP12: Schema.NullOr(Schema.String),
          certificatePassword: Schema.NullOr(Schema.String),
          certificatePrivateSigningKey: Schema.NullOr(Schema.String),
          createdAt: Schema.String,
          developerPortalIdentifier: Schema.NullOr(Schema.String),
          id: Schema.String,
          serialNumber: Schema.String,
          updatedAt: Schema.String,
          validityNotAfter: Schema.String,
          validityNotBefore: Schema.String,
        }),
      ),
      applePushKeys: Schema.Array(
        Schema.Struct({
          createdAt: Schema.String,
          id: Schema.String,
          keyIdentifier: Schema.String,
          keyP8: Schema.String,
          updatedAt: Schema.String,
        }),
      ),
      availableBuilds: Schema.NullOr(Schema.Number),
      billing: Schema.NullOr(
        Schema.Struct({
          id: Schema.String,
        }),
      ),
      convexTeamConnections: Schema.Array(
        Schema.Struct({
          convexTeamIdentifier: Schema.String,
          createdAt: Schema.String,
          id: Schema.String,
          updatedAt: Schema.String,
        }),
      ),
      createdAt: Schema.String,
      displayName: Schema.NullOr(Schema.String),
      environmentVariableEnvironments: Schema.Array(Schema.Unknown),
      githubAppInstallations: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          installationIdentifier: Schema.Number,
        }),
      ),
      googleServiceAccountKeys: Schema.Array(
        Schema.Struct({
          clientEmail: Schema.String,
          clientIdentifier: Schema.String,
          createdAt: Schema.String,
          id: Schema.String,
          keyJson: Schema.String,
          privateKeyIdentifier: Schema.String,
          projectIdentifier: Schema.String,
          updatedAt: Schema.String,
        }),
      ),
      hasBuilds: Schema.Boolean,
      id: Schema.String,
      isCurrent: Schema.Boolean,
      isDisabled: Schema.Boolean,
      isFreeAppDevDomainTier: Schema.Boolean,
      isSSOEnabled: Schema.Boolean,
      lastDeletionAttemptTime: Schema.NullOr(Schema.String),
      logRocketOrganization: Schema.NullOr(
        Schema.Struct({
          createdAt: Schema.String,
          id: Schema.String,
          orgName: Schema.String,
          orgSlug: Schema.String,
        }),
      ),
      memberStats: Schema.Struct({
        allHave2FAEnabled: Schema.Boolean,
        humanCount: Schema.Number,
        ownerCount: Schema.Number,
        robotCount: Schema.Number,
        ssoUserCount: Schema.Number,
        totalCount: Schema.Number,
      }),
      name: Schema.String,
      offers: Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            features: Schema.NullOr(
              Schema.Array(
                Schema.NullOr(
                  Schema.Literals([
                    "BUILDS",
                    "OPEN_SOURCE",
                    "SUPPORT",
                    "TEAMS",
                  ]),
                ),
              ),
            ),
            id: Schema.String,
            price: Schema.Number,
            quantity: Schema.NullOr(Schema.Number),
            stripeId: Schema.String,
            trialLength: Schema.NullOr(Schema.Number),
            type: Schema.Literals(["ADDON", "PREPAID", "SUBSCRIPTION"]),
          }),
        ),
      ),
      onboardingStats: Schema.Struct({
        firstBuildCompletedAt: Schema.NullOr(Schema.String),
        firstProjectCreatedAt: Schema.NullOr(Schema.String),
        firstSubmissionCompletedAt: Schema.NullOr(Schema.String),
        firstUpdateCreatedAt: Schema.NullOr(Schema.String),
        hasConfiguredUpdate: Schema.Boolean,
        hasConfiguredWorkflow: Schema.Boolean,
        hasTeamMembers: Schema.Boolean,
      }),
      owner: Schema.NullOr(
        Schema.Struct({
          appCount: Schema.Number,
          appetizeCode: Schema.NullOr(Schema.String),
          bestContactEmail: Schema.NullOr(Schema.String),
          created: Schema.String,
          displayName: Schema.String,
          email: Schema.String,
          emailVerified: Schema.Boolean,
          firstName: Schema.NullOr(Schema.String),
          fullName: Schema.NullOr(Schema.String),
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
          primaryAccountProfileImageUrl: Schema.NullOr(Schema.String),
          profilePhoto: Schema.String,
          twitterUsername: Schema.NullOr(Schema.String),
          username: Schema.String,
        }),
      ),
      ownerUserActor: Schema.NullOr(
        Schema.Struct({
          appCount: Schema.Number,
          appetizeCode: Schema.NullOr(Schema.String),
          bestContactEmail: Schema.NullOr(Schema.String),
          created: Schema.String,
          displayName: Schema.String,
          firstName: Schema.NullOr(Schema.String),
          fullName: Schema.NullOr(Schema.String),
          githubUsername: Schema.NullOr(Schema.String),
          id: Schema.String,
          industry: Schema.NullOr(Schema.String),
          isExpoAdmin: Schema.Boolean,
          isStaffModeEnabled: Schema.Boolean,
          lastDeletionAttemptTime: Schema.NullOr(Schema.String),
          lastName: Schema.NullOr(Schema.String),
          location: Schema.NullOr(Schema.String),
          primaryAccountProfileImageUrl: Schema.NullOr(Schema.String),
          profilePhoto: Schema.String,
          twitterUsername: Schema.NullOr(Schema.String),
          username: Schema.String,
        }),
      ),
      pendingSentryInstallation: Schema.NullOr(
        Schema.Struct({
          createdAt: Schema.String,
          id: Schema.String,
          installationId: Schema.String,
          orgSlug: Schema.String,
        }),
      ),
      profileImageUrl: Schema.String,
      pushSecurityEnabled: Schema.Boolean,
      requireTwoFactor: Schema.Boolean,
      requiresAccessTokenForPushSecurity: Schema.Boolean,
      sentryInstallation: Schema.NullOr(
        Schema.Struct({
          createdAt: Schema.String,
          id: Schema.String,
          installationId: Schema.String,
          orgSlug: Schema.String,
        }),
      ),
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
      ssoConfiguration: Schema.NullOr(
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
        }),
      ),
      subscription: Schema.NullOr(
        Schema.Struct({
          cancelAt: Schema.NullOr(Schema.String),
          endedAt: Schema.NullOr(Schema.String),
          id: Schema.String,
          isDowngrading: Schema.NullOr(Schema.Boolean),
          name: Schema.NullOr(Schema.String),
          nextInvoice: Schema.NullOr(Schema.String),
          nextInvoiceAmountDueCents: Schema.NullOr(Schema.Number),
          planId: Schema.NullOr(Schema.String),
          price: Schema.Number,
          recurringCents: Schema.NullOr(Schema.Number),
          status: Schema.NullOr(Schema.String),
          trialEnd: Schema.NullOr(Schema.String),
          willCancel: Schema.NullOr(Schema.Boolean),
        }),
      ),
      subscriptionChangesPending: Schema.NullOr(Schema.Boolean),
      unlimitedBuilds: Schema.Boolean,
      updatedAt: Schema.String,
      userActorOwner: Schema.NullOr(
        Schema.Struct({
          appCount: Schema.Number,
          appetizeCode: Schema.NullOr(Schema.String),
          bestContactEmail: Schema.NullOr(Schema.String),
          created: Schema.String,
          displayName: Schema.String,
          firstName: Schema.NullOr(Schema.String),
          fullName: Schema.NullOr(Schema.String),
          githubUsername: Schema.NullOr(Schema.String),
          id: Schema.String,
          industry: Schema.NullOr(Schema.String),
          isExpoAdmin: Schema.Boolean,
          isStaffModeEnabled: Schema.Boolean,
          lastDeletionAttemptTime: Schema.NullOr(Schema.String),
          lastName: Schema.NullOr(Schema.String),
          location: Schema.NullOr(Schema.String),
          primaryAccountProfileImageUrl: Schema.NullOr(Schema.String),
          profilePhoto: Schema.String,
          twitterUsername: Schema.NullOr(Schema.String),
          username: Schema.String,
        }),
      ),
      userInvitations: Schema.Array(
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
      userSpecifiedAccountUsage: Schema.NullOr(
        Schema.Literals(["COMPANY", "PERSONAL"]),
      ),
      users: Schema.Array(
        Schema.Struct({
          id: Schema.String,
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
      vexoAccountConnection: Schema.NullOr(
        Schema.Struct({
          id: Schema.String,
        }),
      ),
      viewerUserPermission: Schema.Struct({
        id: Schema.String,
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
  githubAppInstallations: Schema.Array(
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
      actor: Schema.NullOr(
        Schema.Struct({
          created: Schema.String,
          displayName: Schema.String,
          firstName: Schema.NullOr(Schema.String),
          id: Schema.String,
          isExpoAdmin: Schema.Boolean,
          lastDeletionAttemptTime: Schema.NullOr(Schema.String),
        }),
      ),
      id: Schema.String,
      installationIdentifier: Schema.Number,
      metadata: Schema.Struct({
        githubAccountAvatarUrl: Schema.NullOr(Schema.String),
        githubAccountName: Schema.NullOr(Schema.String),
        githubAccountType: Schema.NullOr(
          Schema.Literals(["ORGANIZATION", "USER"]),
        ),
        installationStatus: Schema.Literals([
          "ACTIVE",
          "NOT_INSTALLED",
          "SUSPENDED",
        ]),
      }),
    }),
  ),
  id: Schema.String,
  isExpoAdmin: Schema.Boolean,
  isManagedByGitHubApp: Schema.Boolean,
  lastDeletionAttemptTime: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("robot.updateRobot"));
export type RobotUpdateRobotOutput = typeof RobotUpdateRobotOutput.Type;

export const robotUpdateRobot = API.make(() => ({
  inputSchema: RobotUpdateRobotInput,
  outputSchema: RobotUpdateRobotOutput,
}));
