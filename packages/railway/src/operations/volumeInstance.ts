import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query volumeInstance($id: String!) {\n  volumeInstance(id: $id) {\n    createdAt\n    currentSizeMB\n    environment {\n      canAccess\n      createdAt\n      deletedAt\n      id\n      isEphemeral\n      meta {\n        baseBranch\n        branch\n        latestSuccessfulGitHubDeploymentId\n        prCommentId\n        prNumber\n        prRepo\n        prTitle\n        skippedResourceIds\n      }\n      name\n      projectId\n      unmergedChangesCount\n      updatedAt\n    }\n    environmentId\n    externalId\n    id\n    mountPath\n    region\n    service {\n      createdAt\n      deletedAt\n      featureFlags\n      hasHiddenRegistryCredentialsFromTemplate\n      icon\n      id\n      name\n      project {\n        baseEnvironmentId\n        botPrEnvironments\n        createdAt\n        deletedAt\n        description\n        expiredAt\n        featureFlags\n        focusedPrEnvironments\n        id\n        isPublic\n        isTempProject\n        name\n        prDeploys\n        primaryEnvironmentId\n        subscriptionPlanLimit\n        subscriptionType\n        teamId\n        updatedAt\n        workspaceId\n      }\n      projectId\n      templateId\n      templateServiceId\n      templateThreadSlug\n      updatedAt\n    }\n    serviceId\n    sizeMB\n    state\n    volume {\n      createdAt\n      id\n      name\n      project {\n        baseEnvironmentId\n        botPrEnvironments\n        createdAt\n        deletedAt\n        description\n        expiredAt\n        featureFlags\n        focusedPrEnvironments\n        id\n        isPublic\n        isTempProject\n        name\n        prDeploys\n        primaryEnvironmentId\n        subscriptionPlanLimit\n        subscriptionType\n        teamId\n        updatedAt\n        workspaceId\n      }\n      projectId\n    }\n    volumeId\n  }\n}";

// Input Schema (GraphQL variables)
export const VolumeInstanceInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeInstance",
    type: "query",
  }),
);
export type VolumeInstanceInput = typeof VolumeInstanceInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeInstanceOutput = Schema.Struct({
  createdAt: Schema.String,
  currentSizeMB: Schema.Number,
  environment: Schema.Struct({
    canAccess: Schema.Boolean,
    createdAt: Schema.String,
    deletedAt: Schema.NullOr(Schema.String),
    id: Schema.String,
    isEphemeral: Schema.Boolean,
    meta: Schema.NullOr(
      Schema.Struct({
        baseBranch: Schema.NullOr(Schema.String),
        branch: Schema.NullOr(Schema.String),
        latestSuccessfulGitHubDeploymentId: Schema.NullOr(Schema.Number),
        prCommentId: Schema.NullOr(Schema.Number),
        prNumber: Schema.NullOr(Schema.Number),
        prRepo: Schema.NullOr(Schema.String),
        prTitle: Schema.NullOr(Schema.String),
        skippedResourceIds: Schema.NullOr(Schema.Unknown),
      }),
    ),
    name: Schema.String,
    projectId: Schema.String,
    unmergedChangesCount: Schema.NullOr(Schema.Number),
    updatedAt: Schema.String,
  }),
  environmentId: Schema.String,
  externalId: Schema.NullOr(Schema.String),
  id: Schema.String,
  mountPath: Schema.String,
  region: Schema.NullOr(Schema.String),
  service: Schema.Struct({
    createdAt: Schema.String,
    deletedAt: Schema.NullOr(Schema.String),
    featureFlags: Schema.Array(
      Schema.Literals([
        "COPY_VOLUME_TO_ENVIRONMENT",
        "ENABLE_DOCKER_EXTENSION",
        "PLACEHOLDER",
        "SKIPPED_BUILDS",
        "USE_BUILDER_V3_FOR_CLI_DEPLOYS",
        "USE_GH_WEBHOOKS_FOR_CHANGE_DETECTION",
        "USE_VM_RUNTIME",
      ]),
    ),
    hasHiddenRegistryCredentialsFromTemplate: Schema.Boolean,
    icon: Schema.NullOr(Schema.String),
    id: Schema.String,
    name: Schema.String,
    project: Schema.Struct({
      baseEnvironmentId: Schema.NullOr(Schema.String),
      botPrEnvironments: Schema.Boolean,
      createdAt: Schema.String,
      deletedAt: Schema.NullOr(Schema.String),
      description: Schema.NullOr(Schema.String),
      expiredAt: Schema.NullOr(Schema.String),
      featureFlags: Schema.Array(Schema.Literals(["PLACEHOLDER"])),
      focusedPrEnvironments: Schema.Boolean,
      id: Schema.String,
      isPublic: Schema.Boolean,
      isTempProject: Schema.Boolean,
      name: Schema.String,
      prDeploys: Schema.Boolean,
      primaryEnvironmentId: Schema.NullOr(Schema.String),
      subscriptionPlanLimit: Schema.Unknown,
      subscriptionType: Schema.Literals(["free", "hobby", "pro", "trial"]),
      teamId: Schema.NullOr(Schema.String),
      updatedAt: Schema.String,
      workspaceId: Schema.NullOr(Schema.String),
    }),
    projectId: Schema.String,
    templateId: Schema.NullOr(Schema.String),
    templateServiceId: Schema.NullOr(Schema.String),
    templateThreadSlug: Schema.NullOr(Schema.String),
    updatedAt: Schema.String,
  }),
  serviceId: Schema.NullOr(Schema.String),
  sizeMB: Schema.Number,
  state: Schema.NullOr(
    Schema.Literals([
      "DELETED",
      "DELETING",
      "ERROR",
      "MIGRATING",
      "MIGRATION_PENDING",
      "READY",
      "RESTORING",
      "UPDATING",
    ]),
  ),
  volume: Schema.Struct({
    createdAt: Schema.String,
    id: Schema.String,
    name: Schema.String,
    project: Schema.Struct({
      baseEnvironmentId: Schema.NullOr(Schema.String),
      botPrEnvironments: Schema.Boolean,
      createdAt: Schema.String,
      deletedAt: Schema.NullOr(Schema.String),
      description: Schema.NullOr(Schema.String),
      expiredAt: Schema.NullOr(Schema.String),
      featureFlags: Schema.Array(Schema.Literals(["PLACEHOLDER"])),
      focusedPrEnvironments: Schema.Boolean,
      id: Schema.String,
      isPublic: Schema.Boolean,
      isTempProject: Schema.Boolean,
      name: Schema.String,
      prDeploys: Schema.Boolean,
      primaryEnvironmentId: Schema.NullOr(Schema.String),
      subscriptionPlanLimit: Schema.Unknown,
      subscriptionType: Schema.Literals(["free", "hobby", "pro", "trial"]),
      teamId: Schema.NullOr(Schema.String),
      updatedAt: Schema.String,
      workspaceId: Schema.NullOr(Schema.String),
    }),
    projectId: Schema.String,
  }),
  volumeId: Schema.String,
}).pipe(T.ResponsePath("volumeInstance"));
export type VolumeInstanceOutput = typeof VolumeInstanceOutput.Type;

/**
 * Get a single volume instance by id
 */
export const volumeInstance = API.make(() => ({
  inputSchema: VolumeInstanceInput,
  outputSchema: VolumeInstanceOutput,
}));
