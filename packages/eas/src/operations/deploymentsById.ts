import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query deploymentsById($deploymentId: ID!) {\n  deployments {\n    byId(deploymentId: $deploymentId) {\n      channel {\n        app {\n          appStoreUrl\n          assetLimitPerUpdateGroup\n          buildProfiles\n          buildsReleaseChannels\n          description\n          environmentVariableEnvironments\n          fullName\n          githubUrl\n          iconUrl\n          id\n          internalDistributionBuildPrivacy\n          isDeleting\n          isDeprecated\n          isLikedByMe\n          lastDeletionAttemptTime\n          lastPublishedTime\n          latestActivity\n          latestReleaseId\n          likeCount\n          name\n          packageName\n          packageUsername\n          playStoreUrl\n          privacy\n          privacySetting\n          published\n          pushSecurityEnabled\n          releaseChannels\n          requiresAccessTokenForPushSecurity\n          resourceClassExperiment\n          scopeKey\n          sdkVersion\n          slug\n          suggestedDevDomainName\n          trendScore\n          updated\n          username\n        }\n        appId\n        branchMapping\n        createdAt\n        id\n        isPaused\n        lastDeletionAttemptTime\n        name\n        runtimeInsights {\n          id\n        }\n        updatedAt\n      }\n      id\n      runtime {\n        app {\n          appStoreUrl\n          assetLimitPerUpdateGroup\n          buildProfiles\n          buildsReleaseChannels\n          description\n          environmentVariableEnvironments\n          fullName\n          githubUrl\n          iconUrl\n          id\n          internalDistributionBuildPrivacy\n          isDeleting\n          isDeprecated\n          isLikedByMe\n          lastDeletionAttemptTime\n          lastPublishedTime\n          latestActivity\n          latestReleaseId\n          likeCount\n          name\n          packageName\n          packageUsername\n          playStoreUrl\n          privacy\n          privacySetting\n          published\n          pushSecurityEnabled\n          releaseChannels\n          requiresAccessTokenForPushSecurity\n          resourceClassExperiment\n          scopeKey\n          sdkVersion\n          slug\n          suggestedDevDomainName\n          trendScore\n          updated\n          username\n        }\n        createdAt\n        fingerprint {\n          buildCount\n          createdAt\n          debugInfoUrl\n          hash\n          id\n          updateCount\n          updatedAt\n        }\n        firstBuildCreatedAt\n        id\n        isFingerprint\n        updatedAt\n        version\n      }\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentsByIdInput = Schema.Struct({
  deploymentId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentsById",
    type: "query",
  }),
);
export type DeploymentsByIdInput = typeof DeploymentsByIdInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentsByIdOutput = Schema.Struct({
  channel: Schema.Struct({
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
      internalDistributionBuildPrivacy: Schema.Literals(["PRIVATE", "PUBLIC"]),
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
    appId: Schema.String,
    branchMapping: Schema.String,
    createdAt: Schema.String,
    id: Schema.String,
    isPaused: Schema.Boolean,
    lastDeletionAttemptTime: Schema.NullOr(Schema.String),
    name: Schema.String,
    runtimeInsights: Schema.Struct({
      id: Schema.String,
    }),
    updatedAt: Schema.String,
  }),
  id: Schema.String,
  runtime: Schema.Struct({
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
      internalDistributionBuildPrivacy: Schema.Literals(["PRIVATE", "PUBLIC"]),
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
    createdAt: Schema.String,
    fingerprint: Schema.NullOr(
      Schema.Struct({
        buildCount: Schema.Number,
        createdAt: Schema.String,
        debugInfoUrl: Schema.NullOr(Schema.String),
        hash: Schema.String,
        id: Schema.String,
        updateCount: Schema.Number,
        updatedAt: Schema.String,
      }),
    ),
    firstBuildCreatedAt: Schema.NullOr(Schema.String),
    id: Schema.String,
    isFingerprint: Schema.Boolean,
    updatedAt: Schema.String,
    version: Schema.String,
  }),
}).pipe(T.ResponsePath("deployments.byId"));
export type DeploymentsByIdOutput = typeof DeploymentsByIdOutput.Type;

export const deploymentsById = API.make(() => ({
  inputSchema: DeploymentsByIdInput,
  outputSchema: DeploymentsByIdOutput,
}));
