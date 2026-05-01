import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deploymentsAssignAlias($aliasName: WorkerDeploymentIdentifier, $appId: ID!, $deploymentIdentifier: ID!) {\n  deployments {\n    assignAlias(aliasName: $aliasName, appId: $appId, deploymentIdentifier: $deploymentIdentifier) {\n      aliasName\n      createdAt\n      deploymentDomain\n      devDomainName\n      id\n      subdomain\n      updatedAt\n      url\n      workerDeployment {\n        activityTimestamp\n        actor {\n          created\n          displayName\n          firstName\n          id\n          isExpoAdmin\n          lastDeletionAttemptTime\n        }\n        app {\n          appStoreUrl\n          assetLimitPerUpdateGroup\n          buildProfiles\n          buildsReleaseChannels\n          description\n          environmentVariableEnvironments\n          fullName\n          githubUrl\n          iconUrl\n          id\n          internalDistributionBuildPrivacy\n          isDeleting\n          isDeprecated\n          isLikedByMe\n          lastDeletionAttemptTime\n          lastPublishedTime\n          latestActivity\n          latestReleaseId\n          likeCount\n          name\n          packageName\n          packageUsername\n          playStoreUrl\n          privacy\n          privacySetting\n          published\n          pushSecurityEnabled\n          releaseChannels\n          requiresAccessTokenForPushSecurity\n          resourceClassExperiment\n          scopeKey\n          sdkVersion\n          slug\n          suggestedDevDomainName\n          trendScore\n          updated\n          username\n        }\n        createdAt\n        deploymentDomain\n        deploymentIdentifier\n        devDomainName\n        id\n        initiatingActor {\n          created\n          displayName\n          firstName\n          id\n          isExpoAdmin\n          lastDeletionAttemptTime\n        }\n        signedAssetsURL\n        signedDeploymentURL\n        subdomain\n        url\n      }\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DeploymentsAssignAliasInput = Schema.Struct({
  aliasName: Schema.optional(Schema.NullOr(Schema.Unknown)),
  appId: Schema.String,
  deploymentIdentifier: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deploymentsAssignAlias",
    type: "mutation",
  }),
);
export type DeploymentsAssignAliasInput =
  typeof DeploymentsAssignAliasInput.Type;

// Output Schema (GraphQL selection set)
export const DeploymentsAssignAliasOutput = Schema.Struct({
  aliasName: Schema.NullOr(Schema.Unknown),
  createdAt: Schema.String,
  deploymentDomain: Schema.String,
  devDomainName: Schema.Unknown,
  id: Schema.String,
  subdomain: Schema.String,
  updatedAt: Schema.String,
  url: Schema.String,
  workerDeployment: Schema.Struct({
    activityTimestamp: Schema.String,
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
    deploymentDomain: Schema.String,
    deploymentIdentifier: Schema.Unknown,
    devDomainName: Schema.Unknown,
    id: Schema.String,
    initiatingActor: Schema.NullOr(
      Schema.Struct({
        created: Schema.String,
        displayName: Schema.String,
        firstName: Schema.NullOr(Schema.String),
        id: Schema.String,
        isExpoAdmin: Schema.Boolean,
        lastDeletionAttemptTime: Schema.NullOr(Schema.String),
      }),
    ),
    signedAssetsURL: Schema.String,
    signedDeploymentURL: Schema.String,
    subdomain: Schema.String,
    url: Schema.String,
  }),
}).pipe(T.ResponsePath("deployments.assignAlias"));
export type DeploymentsAssignAliasOutput =
  typeof DeploymentsAssignAliasOutput.Type;

export const deploymentsAssignAlias = API.make(() => ({
  inputSchema: DeploymentsAssignAliasInput,
  outputSchema: DeploymentsAssignAliasOutput,
}));
