import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized } from "./errors.ts";

const __document =
  "query deployment($id: String!) {\n  deployment(id: $id) {\n    canRedeploy\n    canRollback\n    createdAt\n    creator {\n      avatar\n      email\n      id\n      name\n    }\n    deploymentStopped\n    diagnosis\n    environment {\n      canAccess\n      createdAt\n      deletedAt\n      id\n      isEphemeral\n      meta {\n        baseBranch\n        branch\n        latestSuccessfulGitHubDeploymentId\n        prCommentId\n        prNumber\n        prRepo\n        prTitle\n        skippedResourceIds\n      }\n      name\n      projectId\n      unmergedChangesCount\n      updatedAt\n    }\n    environmentId\n    id\n    instances {\n      id\n      status\n    }\n    meta\n    projectId\n    service {\n      createdAt\n      deletedAt\n      featureFlags\n      hasHiddenRegistryCredentialsFromTemplate\n      icon\n      id\n      name\n      project {\n        baseEnvironmentId\n        botPrEnvironments\n        createdAt\n        deletedAt\n        description\n        expiredAt\n        featureFlags\n        focusedPrEnvironments\n        id\n        isPublic\n        isTempProject\n        name\n        prDeploys\n        primaryEnvironmentId\n        subscriptionPlanLimit\n        subscriptionType\n        teamId\n        updatedAt\n        workspaceId\n      }\n      projectId\n      templateId\n      templateServiceId\n      templateThreadSlug\n      updatedAt\n    }\n    serviceId\n    snapshotId\n    staticUrl\n    status\n    statusUpdatedAt\n    suggestAddServiceDomain\n    updatedAt\n    url\n  }\n}";

// Input Schema (GraphQL variables)
export const GetDeploymentInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deployment",
    type: "query",
  }),
);
export type GetDeploymentInput = typeof GetDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const GetDeploymentOutput = Schema.Struct({
  canRedeploy: Schema.Boolean,
  canRollback: Schema.Boolean,
  createdAt: Schema.String,
  creator: Schema.NullOr(
    Schema.Struct({
      avatar: Schema.NullOr(Schema.String),
      email: Schema.String,
      id: Schema.String,
      name: Schema.NullOr(Schema.String),
    }),
  ),
  deploymentStopped: Schema.Boolean,
  diagnosis: Schema.NullOr(Schema.Unknown),
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
  id: Schema.String,
  instances: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      status: Schema.Literals([
        "CRASHED",
        "CREATED",
        "EXITED",
        "INITIALIZING",
        "REMOVED",
        "REMOVING",
        "RESTARTING",
        "RUNNING",
        "SKIPPED",
        "STOPPED",
      ]),
    }),
  ),
  meta: Schema.NullOr(Schema.Unknown),
  projectId: Schema.String,
  service: Schema.Struct({
    createdAt: Schema.String,
    deletedAt: Schema.NullOr(Schema.String),
    featureFlags: Schema.Array(
      Schema.Literals([
        "COPY_VOLUME_TO_ENVIRONMENT",
        "ENABLE_DOCKER_EXTENSION",
        "PLACEHOLDER",
        "SKIPPED_BUILDS",
        "USE_EXPRESS_DEPLOY",
        "USE_HA_STATIC_EGRESS",
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
  snapshotId: Schema.NullOr(Schema.String),
  staticUrl: Schema.NullOr(Schema.String),
  status: Schema.Literals([
    "BUILDING",
    "CRASHED",
    "DEPLOYING",
    "FAILED",
    "INITIALIZING",
    "NEEDS_APPROVAL",
    "QUEUED",
    "REMOVED",
    "REMOVING",
    "SKIPPED",
    "SLEEPING",
    "SUCCESS",
    "WAITING",
  ]),
  statusUpdatedAt: Schema.NullOr(Schema.String),
  suggestAddServiceDomain: Schema.Boolean,
  updatedAt: Schema.String,
  url: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("deployment"));
export type GetDeploymentOutput = typeof GetDeploymentOutput.Type;

/**
 * Find a single deployment
 */
export const getDeployment = API.make(() => ({
  inputSchema: GetDeploymentInput,
  outputSchema: GetDeploymentOutput,
  errors: [NotAuthorized],
}));
