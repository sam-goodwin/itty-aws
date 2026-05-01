import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentVariableUpdateEnvironmentVariable($environmentVariableData: UpdateEnvironmentVariableInput!) {\n  environmentVariable {\n    updateEnvironmentVariable(environmentVariableData: $environmentVariableData) {\n      apps {\n        accessTokens {\n          createdAt\n          id\n          lastUsedAt\n          note\n          revokedAt\n          updatedAt\n          visibleTokenPrefix\n        }\n        appStoreConnectApp {\n          ascAppIdentifier\n          createdAt\n          id\n          updatedAt\n          webhookEventTypes\n          webhookIdentifier\n        }\n        appStoreUrl\n        assetLimitPerUpdateGroup\n        buildProfiles\n        buildsReleaseChannels\n        convexProject {\n          convexProjectIdentifier\n          convexProjectName\n          convexProjectSlug\n          createdAt\n          id\n          updatedAt\n        }\n        description\n        devDomainName {\n          id\n          name\n        }\n        environmentVariableEnvironments\n        fullName\n        githubBuildTriggers {\n          autoSubmit\n          buildProfile\n          createdAt\n          environment\n          executionBehavior\n          id\n          isActive\n          lastRunAt\n          lastRunErrorCode\n          lastRunErrorMessage\n          lastRunStatus\n          platform\n          sourcePattern\n          submitProfile\n          targetPattern\n          type\n          updatedAt\n        }\n        githubJobRunTriggers {\n          createdAt\n          id\n          isActive\n          jobType\n          lastRunAt\n          lastRunErrorCode\n          lastRunErrorMessage\n          lastRunStatus\n          sourcePattern\n          targetPattern\n          triggerType\n        }\n        githubRepository {\n          createdAt\n          githubRepositoryIdentifier\n          githubRepositoryUrl\n          id\n          lastDeletionAttemptTime\n          nodeIdentifier\n        }\n        githubRepositorySettings {\n          baseDirectory\n          id\n        }\n        githubUrl\n        icon {\n          colorPalette\n          originalUrl\n          primaryColor\n          url\n        }\n        iconUrl\n        id\n        insights {\n          hasEventsFromExpoInsightsClientModule\n        }\n        internalDistributionBuildPrivacy\n        isDeleting\n        isDeprecated\n        isLikedByMe\n        lastDeletionAttemptTime\n        lastPublishedTime\n        latestActivity\n        latestReleaseId\n        likeCount\n        logRocketProject {\n          createdAt\n          id\n          logRocketOrgId\n          logRocketProjectSlug\n          updatedAt\n        }\n        name\n        observe {\n          totalEventCount\n        }\n        ownerAccount {\n          appCount\n          availableBuilds\n          createdAt\n          displayName\n          environmentVariableEnvironments\n          hasBuilds\n          id\n          isCurrent\n          isDisabled\n          isFreeAppDevDomainTier\n          isSSOEnabled\n          lastDeletionAttemptTime\n          name\n          profileImageUrl\n          pushSecurityEnabled\n          requireTwoFactor\n          requiresAccessTokenForPushSecurity\n          ssoAllowedAuthProviders\n          subscriptionChangesPending\n          unlimitedBuilds\n          updatedAt\n          userSpecifiedAccountUsage\n          willAutoRenewBuilds\n        }\n        packageName\n        packageUsername\n        playStoreUrl\n        privacy\n        privacySetting\n        published\n        pushNotifications {\n          id\n        }\n        pushSecurityEnabled\n        releaseChannels\n        requiresAccessTokenForPushSecurity\n        resourceClassExperiment\n        scopeKey\n        sdkVersion\n        sentryProject {\n          createdAt\n          id\n          sentryInstallationId\n          sentryProjectId\n          sentryProjectSlug\n          updatedAt\n        }\n        slug\n        suggestedDevDomainName\n        trendScore\n        updated\n        username\n        users {\n          appCount\n          appetizeCode\n          bestContactEmail\n          created\n          displayName\n          email\n          emailVerified\n          firstName\n          fullName\n          githubUsername\n          hasPassword\n          hasPendingUserInvitations\n          id\n          industry\n          isExpoAdmin\n          isLegacy\n          isSecondFactorAuthenticationEnabled\n          isStaffModeEnabled\n          lastDeletionAttemptTime\n          lastName\n          location\n          newEmailPendingVerification\n          primaryAccountProfileImageUrl\n          profilePhoto\n          twitterUsername\n          username\n        }\n        vexoApp {\n          domain\n          iconUrl\n          id\n          name\n          owner\n          slug\n          vexoIdentifier\n        }\n        workerCustomDomain {\n          createdAt\n          devDomainName\n          hostname\n          id\n          updatedAt\n        }\n      }\n      createdAt\n      environments\n      fileName\n      id\n      isGlobal\n      name\n      scope\n      type\n      updatedAt\n      visibility\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentVariableUpdateEnvironmentVariableInput = Schema.Struct({
  environmentVariableData: Schema.Struct({
    environments: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
    fileName: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    type: Schema.optional(
      Schema.NullOr(Schema.Literals(["FILE_BASE64", "STRING"])),
    ),
    value: Schema.optional(Schema.NullOr(Schema.String)),
    visibility: Schema.optional(
      Schema.NullOr(Schema.Literals(["PUBLIC", "SECRET", "SENSITIVE"])),
    ),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "environmentVariableUpdateEnvironmentVariable",
    type: "mutation",
  }),
);
export type EnvironmentVariableUpdateEnvironmentVariableInput =
  typeof EnvironmentVariableUpdateEnvironmentVariableInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentVariableUpdateEnvironmentVariableOutput = Schema.Struct(
  {
    apps: Schema.Array(
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
        appStoreConnectApp: Schema.NullOr(
          Schema.Struct({
            ascAppIdentifier: Schema.String,
            createdAt: Schema.String,
            id: Schema.String,
            updatedAt: Schema.String,
            webhookEventTypes: Schema.Array(Schema.String),
            webhookIdentifier: Schema.String,
          }),
        ),
        appStoreUrl: Schema.NullOr(Schema.String),
        assetLimitPerUpdateGroup: Schema.Number,
        buildProfiles: Schema.Array(Schema.String),
        buildsReleaseChannels: Schema.Array(Schema.String),
        convexProject: Schema.NullOr(
          Schema.Struct({
            convexProjectIdentifier: Schema.String,
            convexProjectName: Schema.String,
            convexProjectSlug: Schema.String,
            createdAt: Schema.String,
            id: Schema.String,
            updatedAt: Schema.String,
          }),
        ),
        description: Schema.String,
        devDomainName: Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            name: Schema.Unknown,
          }),
        ),
        environmentVariableEnvironments: Schema.Array(Schema.Unknown),
        fullName: Schema.String,
        githubBuildTriggers: Schema.Array(
          Schema.Struct({
            autoSubmit: Schema.Boolean,
            buildProfile: Schema.String,
            createdAt: Schema.String,
            environment: Schema.NullOr(Schema.Unknown),
            executionBehavior: Schema.Literals([
              "ALWAYS",
              "BASE_DIRECTORY_CHANGED",
            ]),
            id: Schema.String,
            isActive: Schema.Boolean,
            lastRunAt: Schema.NullOr(Schema.String),
            lastRunErrorCode: Schema.NullOr(Schema.String),
            lastRunErrorMessage: Schema.NullOr(Schema.String),
            lastRunStatus: Schema.NullOr(
              Schema.Literals(["ERRORED", "SUCCESS"]),
            ),
            platform: Schema.Literals(["ANDROID", "IOS"]),
            sourcePattern: Schema.String,
            submitProfile: Schema.NullOr(Schema.String),
            targetPattern: Schema.NullOr(Schema.String),
            type: Schema.Literals([
              "PULL_REQUEST_UPDATED",
              "PUSH_TO_BRANCH",
              "TAG_UPDATED",
            ]),
            updatedAt: Schema.String,
          }),
        ),
        githubJobRunTriggers: Schema.Array(
          Schema.Struct({
            createdAt: Schema.String,
            id: Schema.String,
            isActive: Schema.Boolean,
            jobType: Schema.NullOr(Schema.Literals(["PUBLISH_UPDATE"])),
            lastRunAt: Schema.NullOr(Schema.String),
            lastRunErrorCode: Schema.NullOr(Schema.String),
            lastRunErrorMessage: Schema.NullOr(Schema.String),
            lastRunStatus: Schema.NullOr(
              Schema.Literals(["ERRORED", "SUCCESS"]),
            ),
            sourcePattern: Schema.String,
            targetPattern: Schema.NullOr(Schema.String),
            triggerType: Schema.Literals([
              "PULL_REQUEST_UPDATED",
              "PUSH_TO_BRANCH",
            ]),
          }),
        ),
        githubRepository: Schema.NullOr(
          Schema.Struct({
            createdAt: Schema.String,
            githubRepositoryIdentifier: Schema.Number,
            githubRepositoryUrl: Schema.NullOr(Schema.String),
            id: Schema.String,
            lastDeletionAttemptTime: Schema.NullOr(Schema.String),
            nodeIdentifier: Schema.String,
          }),
        ),
        githubRepositorySettings: Schema.NullOr(
          Schema.Struct({
            baseDirectory: Schema.String,
            id: Schema.String,
          }),
        ),
        githubUrl: Schema.NullOr(Schema.String),
        icon: Schema.NullOr(
          Schema.Struct({
            colorPalette: Schema.NullOr(Schema.Unknown),
            originalUrl: Schema.String,
            primaryColor: Schema.NullOr(Schema.String),
            url: Schema.String,
          }),
        ),
        iconUrl: Schema.NullOr(Schema.String),
        id: Schema.String,
        insights: Schema.Struct({
          hasEventsFromExpoInsightsClientModule: Schema.Boolean,
        }),
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
        logRocketProject: Schema.NullOr(
          Schema.Struct({
            createdAt: Schema.String,
            id: Schema.String,
            logRocketOrgId: Schema.String,
            logRocketProjectSlug: Schema.String,
            updatedAt: Schema.String,
          }),
        ),
        name: Schema.String,
        observe: Schema.Struct({
          totalEventCount: Schema.Number,
        }),
        ownerAccount: Schema.Struct({
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
        packageName: Schema.String,
        packageUsername: Schema.String,
        playStoreUrl: Schema.NullOr(Schema.String),
        privacy: Schema.String,
        privacySetting: Schema.Literals(["HIDDEN", "PUBLIC", "UNLISTED"]),
        published: Schema.Boolean,
        pushNotifications: Schema.Struct({
          id: Schema.String,
        }),
        pushSecurityEnabled: Schema.Boolean,
        releaseChannels: Schema.Array(Schema.String),
        requiresAccessTokenForPushSecurity: Schema.Boolean,
        resourceClassExperiment: Schema.NullOr(Schema.Literals(["C3D", "N2"])),
        scopeKey: Schema.String,
        sdkVersion: Schema.String,
        sentryProject: Schema.NullOr(
          Schema.Struct({
            createdAt: Schema.String,
            id: Schema.String,
            sentryInstallationId: Schema.String,
            sentryProjectId: Schema.String,
            sentryProjectSlug: Schema.String,
            updatedAt: Schema.String,
          }),
        ),
        slug: Schema.String,
        suggestedDevDomainName: Schema.String,
        trendScore: Schema.Number,
        updated: Schema.String,
        username: Schema.String,
        users: Schema.NullOr(
          Schema.Array(
            Schema.NullOr(
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
          ),
        ),
        vexoApp: Schema.NullOr(
          Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            iconUrl: Schema.NullOr(Schema.String),
            id: Schema.String,
            name: Schema.String,
            owner: Schema.String,
            slug: Schema.String,
            vexoIdentifier: Schema.String,
          }),
        ),
        workerCustomDomain: Schema.NullOr(
          Schema.Struct({
            createdAt: Schema.String,
            devDomainName: Schema.Unknown,
            hostname: Schema.String,
            id: Schema.String,
            updatedAt: Schema.String,
          }),
        ),
      }),
    ),
    createdAt: Schema.String,
    environments: Schema.NullOr(Schema.Array(Schema.Unknown)),
    fileName: Schema.NullOr(Schema.String),
    id: Schema.String,
    isGlobal: Schema.NullOr(Schema.Boolean),
    name: Schema.String,
    scope: Schema.Literals(["ECHO_PROJECT", "PROJECT", "SHARED"]),
    type: Schema.Literals(["FILE_BASE64", "STRING"]),
    updatedAt: Schema.String,
    visibility: Schema.NullOr(
      Schema.Literals(["PUBLIC", "SECRET", "SENSITIVE"]),
    ),
  },
).pipe(T.ResponsePath("environmentVariable.updateEnvironmentVariable"));
export type EnvironmentVariableUpdateEnvironmentVariableOutput =
  typeof EnvironmentVariableUpdateEnvironmentVariableOutput.Type;

export const environmentVariableUpdateEnvironmentVariable = API.make(() => ({
  inputSchema: EnvironmentVariableUpdateEnvironmentVariableInput,
  outputSchema: EnvironmentVariableUpdateEnvironmentVariableOutput,
}));
