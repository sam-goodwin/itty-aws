import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation configureSharedVariable($input: SharedVariableConfigureInput!) {\n  sharedVariableConfigure(input: $input) {\n    createdAt\n    environment {\n      canAccess\n      createdAt\n      deletedAt\n      id\n      isEphemeral\n      meta {\n        baseBranch\n        branch\n        latestSuccessfulGitHubDeploymentId\n        prCommentId\n        prNumber\n        prRepo\n        prTitle\n        skippedResourceIds\n      }\n      name\n      projectId\n      unmergedChangesCount\n      updatedAt\n    }\n    environmentId\n    id\n    isSealed\n    name\n    plugin {\n      createdAt\n      deletedAt\n      deprecatedAt\n      friendlyName\n      id\n      logsEnabled\n      migrationDatabaseServiceId\n      name\n      project {\n        baseEnvironmentId\n        botPrEnvironments\n        createdAt\n        deletedAt\n        description\n        expiredAt\n        featureFlags\n        focusedPrEnvironments\n        id\n        isPublic\n        isTempProject\n        name\n        prDeploys\n        primaryEnvironmentId\n        subscriptionPlanLimit\n        subscriptionType\n        teamId\n        updatedAt\n        workspaceId\n      }\n      status\n    }\n    pluginId\n    references\n    service {\n      createdAt\n      deletedAt\n      featureFlags\n      hasHiddenRegistryCredentialsFromTemplate\n      icon\n      id\n      name\n      project {\n        baseEnvironmentId\n        botPrEnvironments\n        createdAt\n        deletedAt\n        description\n        expiredAt\n        featureFlags\n        focusedPrEnvironments\n        id\n        isPublic\n        isTempProject\n        name\n        prDeploys\n        primaryEnvironmentId\n        subscriptionPlanLimit\n        subscriptionType\n        teamId\n        updatedAt\n        workspaceId\n      }\n      projectId\n      templateId\n      templateServiceId\n      templateThreadSlug\n      updatedAt\n    }\n    serviceId\n    updatedAt\n  }\n}";

// Input Schema (GraphQL variables)
export const ConfigureSharedVariableInput = Schema.Struct({
  input: Schema.Struct({
    disabledServiceIds: Schema.Array(Schema.String),
    enabledServiceIds: Schema.Array(Schema.String),
    environmentId: Schema.String,
    name: Schema.String,
    projectId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "configureSharedVariable",
    type: "mutation",
  }),
);
export type ConfigureSharedVariableInput =
  typeof ConfigureSharedVariableInput.Type;

// Output Schema (GraphQL selection set)
export const ConfigureSharedVariableOutput = Schema.Struct({
  createdAt: Schema.String,
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
  environmentId: Schema.NullOr(Schema.String),
  id: Schema.String,
  isSealed: Schema.Boolean,
  name: Schema.String,
  plugin: Schema.Struct({
    createdAt: Schema.String,
    deletedAt: Schema.NullOr(Schema.String),
    deprecatedAt: Schema.NullOr(Schema.String),
    friendlyName: Schema.String,
    id: Schema.String,
    logsEnabled: Schema.Boolean,
    migrationDatabaseServiceId: Schema.NullOr(Schema.String),
    name: Schema.Literals(["mongodb", "mysql", "postgresql", "redis"]),
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
    status: Schema.Literals([
      "DEPRECATED",
      "LOCKED",
      "REMOVED",
      "RUNNING",
      "STOPPED",
    ]),
  }),
  pluginId: Schema.NullOr(Schema.String),
  references: Schema.Array(Schema.String),
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
  updatedAt: Schema.String,
}).pipe(T.ResponsePath("sharedVariableConfigure"));
export type ConfigureSharedVariableOutput =
  typeof ConfigureSharedVariableOutput.Type;

/**
 * Configure a shared variable.
 */
export const configureSharedVariable = API.make(() => ({
  inputSchema: ConfigureSharedVariableInput,
  outputSchema: ConfigureSharedVariableOutput,
}));
