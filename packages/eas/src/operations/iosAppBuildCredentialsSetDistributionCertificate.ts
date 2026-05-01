import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation iosAppBuildCredentialsSetDistributionCertificate($distributionCertificateId: ID!, $id: ID!) {\n  iosAppBuildCredentials {\n    setDistributionCertificate(distributionCertificateId: $distributionCertificateId, id: $id) {\n      appleDevices {\n        account {\n          appCount\n          availableBuilds\n          createdAt\n          displayName\n          environmentVariableEnvironments\n          hasBuilds\n          id\n          isCurrent\n          isDisabled\n          isFreeAppDevDomainTier\n          isSSOEnabled\n          lastDeletionAttemptTime\n          name\n          profileImageUrl\n          pushSecurityEnabled\n          requireTwoFactor\n          requiresAccessTokenForPushSecurity\n          ssoAllowedAuthProviders\n          subscriptionChangesPending\n          unlimitedBuilds\n          updatedAt\n          userSpecifiedAccountUsage\n          willAutoRenewBuilds\n        }\n        appleTeam {\n          appleTeamIdentifier\n          appleTeamName\n          appleTeamType\n          id\n          lastDeletionAttemptTime\n        }\n        createdAt\n        deviceClass\n        enabled\n        id\n        identifier\n        model\n        name\n        softwareVersion\n      }\n      distributionCertificate {\n        account {\n          appCount\n          availableBuilds\n          createdAt\n          displayName\n          environmentVariableEnvironments\n          hasBuilds\n          id\n          isCurrent\n          isDisabled\n          isFreeAppDevDomainTier\n          isSSOEnabled\n          lastDeletionAttemptTime\n          name\n          profileImageUrl\n          pushSecurityEnabled\n          requireTwoFactor\n          requiresAccessTokenForPushSecurity\n          ssoAllowedAuthProviders\n          subscriptionChangesPending\n          unlimitedBuilds\n          updatedAt\n          userSpecifiedAccountUsage\n          willAutoRenewBuilds\n        }\n        appleTeam {\n          appleTeamIdentifier\n          appleTeamName\n          appleTeamType\n          id\n          lastDeletionAttemptTime\n        }\n        certificateP12\n        certificatePassword\n        certificatePrivateSigningKey\n        createdAt\n        developerPortalIdentifier\n        id\n        serialNumber\n        updatedAt\n        validityNotAfter\n        validityNotBefore\n      }\n      id\n      iosAppCredentials {\n        app {\n          appStoreUrl\n          assetLimitPerUpdateGroup\n          buildProfiles\n          buildsReleaseChannels\n          description\n          environmentVariableEnvironments\n          fullName\n          githubUrl\n          iconUrl\n          id\n          internalDistributionBuildPrivacy\n          isDeleting\n          isDeprecated\n          isLikedByMe\n          lastDeletionAttemptTime\n          lastPublishedTime\n          latestActivity\n          latestReleaseId\n          likeCount\n          name\n          packageName\n          packageUsername\n          playStoreUrl\n          privacy\n          privacySetting\n          published\n          pushSecurityEnabled\n          releaseChannels\n          requiresAccessTokenForPushSecurity\n          resourceClassExperiment\n          scopeKey\n          sdkVersion\n          slug\n          suggestedDevDomainName\n          trendScore\n          updated\n          username\n        }\n        appStoreConnectApiKeyForBuilds {\n          createdAt\n          id\n          issuerIdentifier\n          keyIdentifier\n          keyP8\n          name\n          roles\n          updatedAt\n        }\n        appStoreConnectApiKeyForSubmissions {\n          createdAt\n          id\n          issuerIdentifier\n          keyIdentifier\n          keyP8\n          name\n          roles\n          updatedAt\n        }\n        appleAppIdentifier {\n          bundleIdentifier\n          id\n        }\n        appleTeam {\n          appleTeamIdentifier\n          appleTeamName\n          appleTeamType\n          id\n          lastDeletionAttemptTime\n        }\n        id\n        pushKey {\n          createdAt\n          id\n          keyIdentifier\n          keyP8\n          updatedAt\n        }\n      }\n      iosDistributionType\n      provisioningProfile {\n        account {\n          appCount\n          availableBuilds\n          createdAt\n          displayName\n          environmentVariableEnvironments\n          hasBuilds\n          id\n          isCurrent\n          isDisabled\n          isFreeAppDevDomainTier\n          isSSOEnabled\n          lastDeletionAttemptTime\n          name\n          profileImageUrl\n          pushSecurityEnabled\n          requireTwoFactor\n          requiresAccessTokenForPushSecurity\n          ssoAllowedAuthProviders\n          subscriptionChangesPending\n          unlimitedBuilds\n          updatedAt\n          userSpecifiedAccountUsage\n          willAutoRenewBuilds\n        }\n        appleAppIdentifier {\n          bundleIdentifier\n          id\n        }\n        appleDevices {\n          createdAt\n          deviceClass\n          enabled\n          id\n          identifier\n          model\n          name\n          softwareVersion\n        }\n        appleTeam {\n          appleTeamIdentifier\n          appleTeamName\n          appleTeamType\n          id\n          lastDeletionAttemptTime\n        }\n        appleUUID\n        createdAt\n        developerPortalIdentifier\n        expiration\n        id\n        provisioningProfile\n        status\n        updatedAt\n      }\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const IosAppBuildCredentialsSetDistributionCertificateInput =
  Schema.Struct({
    distributionCertificateId: Schema.String,
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "iosAppBuildCredentialsSetDistributionCertificate",
      type: "mutation",
    }),
  );
export type IosAppBuildCredentialsSetDistributionCertificateInput =
  typeof IosAppBuildCredentialsSetDistributionCertificateInput.Type;

// Output Schema (GraphQL selection set)
export const IosAppBuildCredentialsSetDistributionCertificateOutput =
  Schema.Struct({
    appleDevices: Schema.NullOr(
      Schema.Array(
        Schema.NullOr(
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
            appleTeam: Schema.Struct({
              appleTeamIdentifier: Schema.String,
              appleTeamName: Schema.NullOr(Schema.String),
              appleTeamType: Schema.NullOr(
                Schema.Literals([
                  "COMPANY_OR_ORGANIZATION",
                  "INDIVIDUAL",
                  "IN_HOUSE",
                ]),
              ),
              id: Schema.String,
              lastDeletionAttemptTime: Schema.NullOr(Schema.String),
            }),
            createdAt: Schema.String,
            deviceClass: Schema.NullOr(
              Schema.Literals(["IPAD", "IPHONE", "MAC", "UNKNOWN"]),
            ),
            enabled: Schema.NullOr(Schema.Boolean),
            id: Schema.String,
            identifier: Schema.String,
            model: Schema.NullOr(Schema.String),
            name: Schema.NullOr(Schema.String),
            softwareVersion: Schema.NullOr(Schema.String),
          }),
        ),
      ),
    ),
    distributionCertificate: Schema.NullOr(
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
        appleTeam: Schema.NullOr(
          Schema.Struct({
            appleTeamIdentifier: Schema.String,
            appleTeamName: Schema.NullOr(Schema.String),
            appleTeamType: Schema.NullOr(
              Schema.Literals([
                "COMPANY_OR_ORGANIZATION",
                "INDIVIDUAL",
                "IN_HOUSE",
              ]),
            ),
            id: Schema.String,
            lastDeletionAttemptTime: Schema.NullOr(Schema.String),
          }),
        ),
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
    id: Schema.String,
    iosAppCredentials: Schema.Struct({
      app: Schema.Struct({
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
        resourceClassExperiment: Schema.NullOr(Schema.Literals(["C3D", "N2"])),
        scopeKey: Schema.String,
        sdkVersion: Schema.String,
        slug: Schema.String,
        suggestedDevDomainName: Schema.String,
        trendScore: Schema.Number,
        updated: Schema.String,
        username: Schema.String,
      }),
      appStoreConnectApiKeyForBuilds: Schema.NullOr(
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
      appStoreConnectApiKeyForSubmissions: Schema.NullOr(
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
      appleAppIdentifier: Schema.Struct({
        bundleIdentifier: Schema.String,
        id: Schema.String,
      }),
      appleTeam: Schema.NullOr(
        Schema.Struct({
          appleTeamIdentifier: Schema.String,
          appleTeamName: Schema.NullOr(Schema.String),
          appleTeamType: Schema.NullOr(
            Schema.Literals([
              "COMPANY_OR_ORGANIZATION",
              "INDIVIDUAL",
              "IN_HOUSE",
            ]),
          ),
          id: Schema.String,
          lastDeletionAttemptTime: Schema.NullOr(Schema.String),
        }),
      ),
      id: Schema.String,
      pushKey: Schema.NullOr(
        Schema.Struct({
          createdAt: Schema.String,
          id: Schema.String,
          keyIdentifier: Schema.String,
          keyP8: Schema.String,
          updatedAt: Schema.String,
        }),
      ),
    }),
    iosDistributionType: Schema.Literals([
      "AD_HOC",
      "APP_STORE",
      "DEVELOPMENT",
      "ENTERPRISE",
    ]),
    provisioningProfile: Schema.NullOr(
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
        appleAppIdentifier: Schema.Struct({
          bundleIdentifier: Schema.String,
          id: Schema.String,
        }),
        appleDevices: Schema.Array(
          Schema.Struct({
            createdAt: Schema.String,
            deviceClass: Schema.NullOr(
              Schema.Literals(["IPAD", "IPHONE", "MAC", "UNKNOWN"]),
            ),
            enabled: Schema.NullOr(Schema.Boolean),
            id: Schema.String,
            identifier: Schema.String,
            model: Schema.NullOr(Schema.String),
            name: Schema.NullOr(Schema.String),
            softwareVersion: Schema.NullOr(Schema.String),
          }),
        ),
        appleTeam: Schema.NullOr(
          Schema.Struct({
            appleTeamIdentifier: Schema.String,
            appleTeamName: Schema.NullOr(Schema.String),
            appleTeamType: Schema.NullOr(
              Schema.Literals([
                "COMPANY_OR_ORGANIZATION",
                "INDIVIDUAL",
                "IN_HOUSE",
              ]),
            ),
            id: Schema.String,
            lastDeletionAttemptTime: Schema.NullOr(Schema.String),
          }),
        ),
        appleUUID: Schema.String,
        createdAt: Schema.String,
        developerPortalIdentifier: Schema.NullOr(Schema.String),
        expiration: Schema.String,
        id: Schema.String,
        provisioningProfile: Schema.NullOr(Schema.String),
        status: Schema.String,
        updatedAt: Schema.String,
      }),
    ),
  }).pipe(T.ResponsePath("iosAppBuildCredentials.setDistributionCertificate"));
export type IosAppBuildCredentialsSetDistributionCertificateOutput =
  typeof IosAppBuildCredentialsSetDistributionCertificateOutput.Type;

export const iosAppBuildCredentialsSetDistributionCertificate = API.make(
  () => ({
    inputSchema: IosAppBuildCredentialsSetDistributionCertificateInput,
    outputSchema: IosAppBuildCredentialsSetDistributionCertificateOutput,
  }),
);
