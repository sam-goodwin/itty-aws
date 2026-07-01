import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query deviceRunSessionArtifactsById($deviceRunSessionArtifactId: ID!) {\n  deviceRunSessionArtifacts {\n    byId(deviceRunSessionArtifactId: $deviceRunSessionArtifactId) {\n      createdAt\n      deviceRunSession {\n        app {\n          appStoreConnectWorkflowConnectionStatus\n          appStoreUrl\n          assetLimitPerUpdateGroup\n          buildProfiles\n          buildsReleaseChannels\n          description\n          environmentVariableEnvironments\n          fullName\n          githubUrl\n          iconUrl\n          id\n          internalDistributionBuildPrivacy\n          isDeleting\n          isDeprecated\n          isLikedByMe\n          lastDeletionAttemptTime\n          lastPublishedTime\n          latestActivity\n          latestReleaseId\n          likeCount\n          name\n          packageName\n          packageUsername\n          playStoreUrl\n          privacy\n          privacySetting\n          published\n          pushSecurityEnabled\n          releaseChannels\n          requiresAccessTokenForPushSecurity\n          resourceClassExperiment\n          scopeKey\n          sdkVersion\n          slug\n          suggestedDevDomainName\n          trendScore\n          updated\n          username\n        }\n        createdAt\n        finishedAt\n        id\n        initiatingActor {\n          created\n          displayName\n          firstName\n          id\n          isExpoAdmin\n          lastDeletionAttemptTime\n        }\n        packageVersion\n        platform\n        startedAt\n        status\n        turtleJobRun {\n          createdAt\n          displayName\n          endedAt\n          enqueuedAt\n          expiresAt\n          gitCommitHash\n          gitCommitMessage\n          gitRef\n          id\n          isWaived\n          logFileUrls\n          maxRunTimeSeconds\n          name\n          priority\n          resourceClassDisplayName\n          startedAt\n          status\n          updateGroups\n        }\n        type\n        updatedAt\n      }\n      downloadUrl\n      fileSizeBytes\n      filename\n      id\n      metadata\n      name\n      updatedAt\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DeviceRunSessionArtifactsByIdInput = Schema.Struct({
  deviceRunSessionArtifactId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deviceRunSessionArtifactsById",
    type: "query",
  }),
);
export type DeviceRunSessionArtifactsByIdInput =
  typeof DeviceRunSessionArtifactsByIdInput.Type;

// Output Schema (GraphQL selection set)
export const DeviceRunSessionArtifactsByIdOutput = Schema.Struct({
  createdAt: Schema.String,
  deviceRunSession: Schema.Struct({
    app: Schema.Struct({
      appStoreConnectWorkflowConnectionStatus: Schema.Literals([
        "HAS_WORKFLOWS_IS_CONNECTED",
        "HAS_WORKFLOWS_MISSING_CONNECTION",
        "NO_APP_STORE_CONNECT_WORKFLOWS",
      ]),
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
    finishedAt: Schema.NullOr(Schema.String),
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
    packageVersion: Schema.NullOr(Schema.String),
    platform: Schema.Literals(["ANDROID", "IOS"]),
    startedAt: Schema.NullOr(Schema.String),
    status: Schema.Literals(["ERRORED", "IN_PROGRESS", "NEW", "STOPPED"]),
    turtleJobRun: Schema.NullOr(
      Schema.Struct({
        createdAt: Schema.String,
        displayName: Schema.NullOr(Schema.String),
        endedAt: Schema.NullOr(Schema.String),
        enqueuedAt: Schema.NullOr(Schema.String),
        expiresAt: Schema.String,
        gitCommitHash: Schema.NullOr(Schema.String),
        gitCommitMessage: Schema.NullOr(Schema.String),
        gitRef: Schema.NullOr(Schema.String),
        id: Schema.String,
        isWaived: Schema.Boolean,
        logFileUrls: Schema.Array(Schema.String),
        maxRunTimeSeconds: Schema.Number,
        name: Schema.String,
        priority: Schema.Literals(["HIGH", "NORMAL"]),
        resourceClassDisplayName: Schema.String,
        startedAt: Schema.NullOr(Schema.String),
        status: Schema.Literals([
          "CANCELED",
          "ERRORED",
          "FINISHED",
          "IN_PROGRESS",
          "IN_QUEUE",
          "NEW",
          "PENDING_CANCEL",
        ]),
        updateGroups: Schema.Array(Schema.Array(Schema.Unknown)),
      }),
    ),
    type: Schema.Literals(["AGENT_DEVICE", "ARGENT", "SERVE_SIM"]),
    updatedAt: Schema.String,
  }),
  downloadUrl: Schema.String,
  fileSizeBytes: Schema.NullOr(Schema.Number),
  filename: Schema.String,
  id: Schema.String,
  metadata: Schema.NullOr(Schema.Unknown),
  name: Schema.String,
  updatedAt: Schema.String,
}).pipe(T.ResponsePath("deviceRunSessionArtifacts.byId"));
export type DeviceRunSessionArtifactsByIdOutput =
  typeof DeviceRunSessionArtifactsByIdOutput.Type;

export const deviceRunSessionArtifactsById = API.make(() => ({
  inputSchema: DeviceRunSessionArtifactsByIdInput,
  outputSchema: DeviceRunSessionArtifactsByIdOutput,
}));
