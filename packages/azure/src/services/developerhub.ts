/**
 * Azure Developerhub API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GeneratePreviewArtifactsInput {
  subscriptionId: string;
  location: string;
  generationLanguage?:
    | "clojure"
    | "csharp"
    | "erlang"
    | "go"
    | "gomodule"
    | "gradle"
    | "java"
    | "javascript"
    | "php"
    | "python"
    | "ruby"
    | "rust"
    | "swift";
  languageVersion?: string;
  builderVersion?: string;
  port?: string;
  appName?: string;
  dockerfileOutputDirectory?: string;
  manifestOutputDirectory?: string;
  dockerfileGenerationMode?: "enabled" | "disabled";
  manifestGenerationMode?: "enabled" | "disabled";
  manifestType?: "helm" | "kube";
  imageName?: string;
  namespace?: string;
  imageTag?: string;
}
export const GeneratePreviewArtifactsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    generationLanguage: Schema.optional(
      Schema.Literals([
        "clojure",
        "csharp",
        "erlang",
        "go",
        "gomodule",
        "gradle",
        "java",
        "javascript",
        "php",
        "python",
        "ruby",
        "rust",
        "swift",
      ]),
    ),
    languageVersion: Schema.optional(Schema.String),
    builderVersion: Schema.optional(Schema.String),
    port: Schema.optional(Schema.String),
    appName: Schema.optional(Schema.String),
    dockerfileOutputDirectory: Schema.optional(Schema.String),
    manifestOutputDirectory: Schema.optional(Schema.String),
    dockerfileGenerationMode: Schema.optional(
      Schema.Literals(["enabled", "disabled"]),
    ),
    manifestGenerationMode: Schema.optional(
      Schema.Literals(["enabled", "disabled"]),
    ),
    manifestType: Schema.optional(Schema.Literals(["helm", "kube"])),
    imageName: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    imageTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevHub/locations/{location}/generatePreviewArtifacts",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<GeneratePreviewArtifactsInput>;

// Output Schema
export type GeneratePreviewArtifactsOutput = Record<string, string>;
export const GeneratePreviewArtifactsOutput =
  /*@__PURE__*/ Schema.Record(
    Schema.String,
    Schema.String,
  ) as unknown as Schema.Codec<GeneratePreviewArtifactsOutput>;

// The operation
/**
 * Generate preview dockerfile and manifests.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const GeneratePreviewArtifacts = /*@__PURE__*/ API.make(() => ({
  inputSchema: GeneratePreviewArtifactsInput,
  outputSchema: GeneratePreviewArtifactsOutput,
}));
// Input Schema
export interface GitHubOAuthInput {
  subscriptionId: string;
  location: string;
  redirectUrl?: string;
}
export const GitHubOAuthInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  redirectUrl: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevHub/locations/{location}/githuboauth/default/getGitHubOAuthInfo",
    apiVersion: "2023-08-01",
  }),
) as unknown as Schema.Codec<GitHubOAuthInput>;

// Output Schema
export interface GitHubOAuthOutput {
  authURL?: string;
  token?: string;
}
export const GitHubOAuthOutput = /*@__PURE__*/ Schema.Struct({
  authURL: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<GitHubOAuthOutput>;

// The operation
/**
 * Gets GitHubOAuth info used to authenticate users with the Developer Hub GitHub App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const GitHubOAuth = /*@__PURE__*/ API.make(() => ({
  inputSchema: GitHubOAuthInput,
  outputSchema: GitHubOAuthOutput,
}));
// Input Schema
export interface GitHubOAuthCallbackInput {
  subscriptionId: string;
  location: string;
  code: string;
  state: string;
}
export const GitHubOAuthCallbackInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    code: Schema.String,
    state: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevHub/locations/{location}/githuboauth/default",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<GitHubOAuthCallbackInput>;

// Output Schema
export interface GitHubOAuthCallbackOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GitHubOAuthCallbackOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GitHubOAuthCallbackOutput>;

// The operation
/**
 * Callback URL to hit once authenticated with GitHub App to have the service store the OAuth token.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param code - The code response from authenticating the GitHub App.
 * @param state - The state response from authenticating the GitHub App.
 */
export const GitHubOAuthCallback = /*@__PURE__*/ API.make(() => ({
  inputSchema: GitHubOAuthCallbackInput,
  outputSchema: GitHubOAuthCallbackOutput,
}));
// Input Schema
export interface ListGitHubOAuthInput {
  subscriptionId: string;
  location: string;
}
export const ListGitHubOAuthInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevHub/locations/{location}/githuboauth",
    apiVersion: "2023-08-01",
  }),
) as unknown as Schema.Codec<ListGitHubOAuthInput>;

// Output Schema
export interface ListGitHubOAuthOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
}
export const ListGitHubOAuthOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<ListGitHubOAuthOutput>;

// The operation
/**
 * Callback URL to hit once authenticated with GitHub App to have the service store the OAuth token.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const ListGitHubOAuth = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListGitHubOAuthInput,
  outputSchema: ListGitHubOAuthOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DevHub/operations",
    apiVersion: "2023-08-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: "user" | "system" | "user,system";
    actionType?: "Internal";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        actionType: Schema.optional(Schema.Literals(["Internal"])),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Gets a list of operations.
 *
 * Returns list of operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface WorkflowCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  properties?: {
    githubWorkflowProfile?: {
      repositoryOwner?: string;
      repositoryName?: string;
      branchName?: string;
      dockerfile?: string;
      dockerBuildContext?: string;
      deploymentProperties?: {
        manifestType?: "helm" | "kube" | "kustomize";
        kubeManifestLocations?: string[];
        helmChartPath?: string;
        helmValues?: string;
        overrides?: Record<string, string>;
      };
      namespace?: string;
      acr?: {
        acrSubscriptionId?: string;
        acrResourceGroup?: string;
        acrRegistryName?: string;
        acrRepositoryName?: string;
      };
      oidcCredentials?: { azureClientId?: string; azureTenantId?: string };
      aksResourceId?: string;
      prURL?: string;
      pullNumber?: number;
      prStatus?: "unknown" | "submitted" | "merged" | "removed";
      lastWorkflowRun?: {
        succeeded?: boolean;
        workflowRunURL?: string;
        lastRunAt?: string;
        workflowRunStatus?: "queued" | "inprogress" | "completed";
      };
      authStatus?: "Authorized" | "NotFound" | "Error";
    };
    artifactGenerationProperties?: {
      generationLanguage?:
        | "clojure"
        | "csharp"
        | "erlang"
        | "go"
        | "gomodule"
        | "gradle"
        | "java"
        | "javascript"
        | "php"
        | "python"
        | "ruby"
        | "rust"
        | "swift";
      languageVersion?: string;
      builderVersion?: string;
      port?: string;
      appName?: string;
      dockerfileOutputDirectory?: string;
      manifestOutputDirectory?: string;
      dockerfileGenerationMode?: "enabled" | "disabled";
      manifestGenerationMode?: "enabled" | "disabled";
      manifestType?: "helm" | "kube";
      imageName?: string;
      namespace?: string;
      imageTag?: string;
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const WorkflowCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        githubWorkflowProfile: Schema.optional(
          Schema.Struct({
            repositoryOwner: Schema.optional(Schema.String),
            repositoryName: Schema.optional(Schema.String),
            branchName: Schema.optional(Schema.String),
            dockerfile: Schema.optional(Schema.String),
            dockerBuildContext: Schema.optional(Schema.String),
            deploymentProperties: Schema.optional(
              Schema.Struct({
                manifestType: Schema.optional(
                  Schema.Literals(["helm", "kube", "kustomize"]),
                ),
                kubeManifestLocations: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                helmChartPath: Schema.optional(Schema.String),
                helmValues: Schema.optional(Schema.String),
                overrides: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
              }),
            ),
            namespace: Schema.optional(Schema.String),
            acr: Schema.optional(
              Schema.Struct({
                acrSubscriptionId: Schema.optional(Schema.String),
                acrResourceGroup: Schema.optional(Schema.String),
                acrRegistryName: Schema.optional(Schema.String),
                acrRepositoryName: Schema.optional(Schema.String),
              }),
            ),
            oidcCredentials: Schema.optional(
              Schema.Struct({
                azureClientId: Schema.optional(Schema.String),
                azureTenantId: Schema.optional(Schema.String),
              }),
            ),
            aksResourceId: Schema.optional(Schema.String),
            prURL: Schema.optional(Schema.String),
            pullNumber: Schema.optional(Schema.Number),
            prStatus: Schema.optional(
              Schema.Literals(["unknown", "submitted", "merged", "removed"]),
            ),
            lastWorkflowRun: Schema.optional(
              Schema.Struct({
                succeeded: Schema.optional(Schema.Boolean),
                workflowRunURL: Schema.optional(Schema.String),
                lastRunAt: Schema.optional(Schema.String),
                workflowRunStatus: Schema.optional(
                  Schema.Literals(["queued", "inprogress", "completed"]),
                ),
              }),
            ),
            authStatus: Schema.optional(
              Schema.Literals(["Authorized", "NotFound", "Error"]),
            ),
          }),
        ),
        artifactGenerationProperties: Schema.optional(
          Schema.Struct({
            generationLanguage: Schema.optional(
              Schema.Literals([
                "clojure",
                "csharp",
                "erlang",
                "go",
                "gomodule",
                "gradle",
                "java",
                "javascript",
                "php",
                "python",
                "ruby",
                "rust",
                "swift",
              ]),
            ),
            languageVersion: Schema.optional(Schema.String),
            builderVersion: Schema.optional(Schema.String),
            port: Schema.optional(Schema.String),
            appName: Schema.optional(Schema.String),
            dockerfileOutputDirectory: Schema.optional(Schema.String),
            manifestOutputDirectory: Schema.optional(Schema.String),
            dockerfileGenerationMode: Schema.optional(
              Schema.Literals(["enabled", "disabled"]),
            ),
            manifestGenerationMode: Schema.optional(
              Schema.Literals(["enabled", "disabled"]),
            ),
            manifestType: Schema.optional(Schema.Literals(["helm", "kube"])),
            imageName: Schema.optional(Schema.String),
            namespace: Schema.optional(Schema.String),
            imageTag: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevHub/workflows/{workflowName}",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<WorkflowCreateOrUpdateInput>;

// Output Schema
export interface WorkflowCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const WorkflowCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkflowCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a workflow
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workflowName - The name of the workflow resource.
 */
export const WorkflowCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkflowCreateOrUpdateInput,
  outputSchema: WorkflowCreateOrUpdateOutput,
}));
// Input Schema
export interface WorkflowDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
}
export const WorkflowDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevHub/workflows/{workflowName}",
    apiVersion: "2023-08-01",
  }),
) as unknown as Schema.Codec<WorkflowDeleteInput>;

// Output Schema
export interface WorkflowDeleteOutput {
  status?: string;
}
export const WorkflowDeleteOutput = /*@__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<WorkflowDeleteOutput>;

// The operation
/**
 * Deletes a workflow
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workflowName - The name of the workflow resource.
 */
export const WorkflowDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkflowDeleteInput,
  outputSchema: WorkflowDeleteOutput,
}));
// Input Schema
export interface WorkflowGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
}
export const WorkflowGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevHub/workflows/{workflowName}",
    apiVersion: "2023-08-01",
  }),
) as unknown as Schema.Codec<WorkflowGetInput>;

// Output Schema
export interface WorkflowGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const WorkflowGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<WorkflowGetOutput>;

// The operation
/**
 * Gets a workflow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workflowName - The name of the workflow resource.
 */
export const WorkflowGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkflowGetInput,
  outputSchema: WorkflowGetOutput,
}));
// Input Schema
export interface WorkflowListInput {
  subscriptionId: string;
}
export const WorkflowListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevHub/workflows",
    apiVersion: "2023-08-01",
  }),
) as unknown as Schema.Codec<WorkflowListInput>;

// Output Schema
export interface WorkflowListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const WorkflowListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<WorkflowListOutput>;

// The operation
/**
 * Gets a list of workflows associated with the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const WorkflowList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkflowListInput,
  outputSchema: WorkflowListOutput,
}));
// Input Schema
export interface WorkflowListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  managedClusterResource?: string;
}
export const WorkflowListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    managedClusterResource: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevHub/workflows",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<WorkflowListByResourceGroupInput>;

// Output Schema
export interface WorkflowListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const WorkflowListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkflowListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of workflows within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param managedClusterResource - The ManagedCluster resource associated with the workflows.
 */
export const WorkflowListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkflowListByResourceGroupInput,
  outputSchema: WorkflowListByResourceGroupOutput,
}));
// Input Schema
export interface WorkflowUpdateTagsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workflowName: string;
  tags?: Record<string, string>;
}
export const WorkflowUpdateTagsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevHub/workflows/{workflowName}",
      apiVersion: "2023-08-01",
    }),
  ) as unknown as Schema.Codec<WorkflowUpdateTagsInput>;

// Output Schema
export interface WorkflowUpdateTagsOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const WorkflowUpdateTagsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkflowUpdateTagsOutput>;

// The operation
/**
 * Updates tags on a workflow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workflowName - The name of the workflow resource.
 */
export const WorkflowUpdateTags = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkflowUpdateTagsInput,
  outputSchema: WorkflowUpdateTagsOutput,
}));
