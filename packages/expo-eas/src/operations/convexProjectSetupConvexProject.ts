import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation convexProjectSetupConvexProject($input: SetupConvexProjectInput!) {\n  convexProject {\n    setupConvexProject(input: $input) {\n      convexDeploymentName\n      convexDeploymentUrl\n      convexProject {\n        app {\n          appStoreUrl\n          assetLimitPerUpdateGroup\n          buildProfiles\n          buildsReleaseChannels\n          description\n          environmentVariableEnvironments\n          fullName\n          githubUrl\n          iconUrl\n          id\n          internalDistributionBuildPrivacy\n          isDeleting\n          isDeprecated\n          isLikedByMe\n          lastDeletionAttemptTime\n          lastPublishedTime\n          latestActivity\n          latestReleaseId\n          likeCount\n          name\n          packageName\n          packageUsername\n          playStoreUrl\n          privacy\n          privacySetting\n          published\n          pushSecurityEnabled\n          releaseChannels\n          requiresAccessTokenForPushSecurity\n          resourceClassExperiment\n          scopeKey\n          sdkVersion\n          slug\n          suggestedDevDomainName\n          trendScore\n          updated\n          username\n        }\n        convexProjectIdentifier\n        convexProjectName\n        convexProjectSlug\n        convexTeamConnection {\n          convexTeamIdentifier\n          convexTeamName\n          convexTeamSlug\n          createdAt\n          hasBeenClaimed\n          id\n          invitedAt\n          invitedEmail\n          updatedAt\n        }\n        createdAt\n        id\n        updatedAt\n      }\n      deployKey\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ConvexProjectSetupConvexProjectInput = Schema.Struct({
  input: Schema.Struct({
    appId: Schema.String,
    convexTeamConnectionId: Schema.String,
    deploymentRegion: Schema.optional(Schema.NullOr(Schema.String)),
    projectName: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "convexProjectSetupConvexProject",
    type: "mutation",
  }),
);
export type ConvexProjectSetupConvexProjectInput =
  typeof ConvexProjectSetupConvexProjectInput.Type;

// Output Schema (GraphQL selection set)
export const ConvexProjectSetupConvexProjectOutput = Schema.Struct({
  convexDeploymentName: Schema.String,
  convexDeploymentUrl: Schema.String,
  convexProject: Schema.Struct({
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
    convexProjectIdentifier: Schema.String,
    convexProjectName: Schema.String,
    convexProjectSlug: Schema.String,
    convexTeamConnection: Schema.Struct({
      convexTeamIdentifier: Schema.String,
      convexTeamName: Schema.String,
      convexTeamSlug: Schema.String,
      createdAt: Schema.String,
      hasBeenClaimed: Schema.Boolean,
      id: Schema.String,
      invitedAt: Schema.NullOr(Schema.String),
      invitedEmail: Schema.NullOr(Schema.String),
      updatedAt: Schema.String,
    }),
    createdAt: Schema.String,
    id: Schema.String,
    updatedAt: Schema.String,
  }),
  deployKey: Schema.String,
}).pipe(T.ResponsePath("convexProject.setupConvexProject"));
export type ConvexProjectSetupConvexProjectOutput =
  typeof ConvexProjectSetupConvexProjectOutput.Type;

export const convexProjectSetupConvexProject = API.make(() => ({
  inputSchema: ConvexProjectSetupConvexProjectInput,
  outputSchema: ConvexProjectSetupConvexProjectOutput,
}));
