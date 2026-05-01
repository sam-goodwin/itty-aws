import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query workflowRevisionsById($workflowRevisionId: ID!) {\n  workflowRevisions {\n    byId(workflowRevisionId: $workflowRevisionId) {\n      blobSha\n      commitSha\n      createdAt\n      id\n      workflow {\n        app {\n          appStoreUrl\n          assetLimitPerUpdateGroup\n          buildProfiles\n          buildsReleaseChannels\n          description\n          environmentVariableEnvironments\n          fullName\n          githubUrl\n          iconUrl\n          id\n          internalDistributionBuildPrivacy\n          isDeleting\n          isDeprecated\n          isLikedByMe\n          lastDeletionAttemptTime\n          lastPublishedTime\n          latestActivity\n          latestReleaseId\n          likeCount\n          name\n          packageName\n          packageUsername\n          playStoreUrl\n          privacy\n          privacySetting\n          published\n          pushSecurityEnabled\n          releaseChannels\n          requiresAccessTokenForPushSecurity\n          resourceClassExperiment\n          scopeKey\n          sdkVersion\n          slug\n          suggestedDevDomainName\n          trendScore\n          updated\n          username\n        }\n        createdAt\n        fileName\n        id\n        name\n        updatedAt\n      }\n      yamlConfig\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkflowRevisionsByIdInput = Schema.Struct({
  workflowRevisionId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowRevisionsById",
    type: "query",
  }),
);
export type WorkflowRevisionsByIdInput = typeof WorkflowRevisionsByIdInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowRevisionsByIdOutput = Schema.Struct({
  blobSha: Schema.String,
  commitSha: Schema.NullOr(Schema.String),
  createdAt: Schema.String,
  id: Schema.String,
  workflow: Schema.Struct({
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
    fileName: Schema.String,
    id: Schema.String,
    name: Schema.NullOr(Schema.String),
    updatedAt: Schema.String,
  }),
  yamlConfig: Schema.String,
}).pipe(T.ResponsePath("workflowRevisions.byId"));
export type WorkflowRevisionsByIdOutput =
  typeof WorkflowRevisionsByIdOutput.Type;

export const workflowRevisionsById = API.make(() => ({
  inputSchema: WorkflowRevisionsByIdInput,
  outputSchema: WorkflowRevisionsByIdOutput,
}));
