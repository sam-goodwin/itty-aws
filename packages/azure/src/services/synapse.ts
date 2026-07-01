/**
 * Azure Synapse API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AzureADOnlyAuthenticationsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  azureADOnlyAuthenticationName: "default";
  properties?: {
    azureADOnlyAuthentication: boolean;
    state?: "Consistent" | "InConsistent" | "Updating";
    creationDate?: string;
  };
}
export const AzureADOnlyAuthenticationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    azureADOnlyAuthenticationName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
    properties: Schema.optional(
      Schema.Struct({
        azureADOnlyAuthentication: Schema.Boolean,
        state: Schema.optional(
          Schema.Literals(["Consistent", "InConsistent", "Updating"]),
        ),
        creationDate: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/azureADOnlyAuthentications/{azureADOnlyAuthenticationName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<AzureADOnlyAuthenticationsCreateInput>;

// Output Schema
export interface AzureADOnlyAuthenticationsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AzureADOnlyAuthenticationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureADOnlyAuthenticationsCreateOutput>;

// The operation
/**
 * Create or Update Azure Active Directory only authentication property
 *
 * Create or Update a Azure Active Directory only authentication property for the workspaces
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param azureADOnlyAuthenticationName - name of the property
 */
export const AzureADOnlyAuthenticationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureADOnlyAuthenticationsCreateInput,
    outputSchema: AzureADOnlyAuthenticationsCreateOutput,
  }));
// Input Schema
export interface AzureADOnlyAuthenticationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  azureADOnlyAuthenticationName: "default";
}
export const AzureADOnlyAuthenticationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    azureADOnlyAuthenticationName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/azureADOnlyAuthentications/{azureADOnlyAuthenticationName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<AzureADOnlyAuthenticationsGetInput>;

// Output Schema
export interface AzureADOnlyAuthenticationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AzureADOnlyAuthenticationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureADOnlyAuthenticationsGetOutput>;

// The operation
/**
 * Get Azure Active Directory only authentication property
 *
 * Gets a Azure Active Directory only authentication property
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param azureADOnlyAuthenticationName - name of the property
 */
export const AzureADOnlyAuthenticationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureADOnlyAuthenticationsGetInput,
    outputSchema: AzureADOnlyAuthenticationsGetOutput,
  }));
// Input Schema
export interface AzureADOnlyAuthenticationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const AzureADOnlyAuthenticationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/azureADOnlyAuthentications",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<AzureADOnlyAuthenticationsListInput>;

// Output Schema
export interface AzureADOnlyAuthenticationsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const AzureADOnlyAuthenticationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureADOnlyAuthenticationsListOutput>;

// The operation
/**
 * Gets a list of Azure Active Directory only authentication property
 *
 * Gets a list of Azure Active Directory only authentication property for a workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const AzureADOnlyAuthenticationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureADOnlyAuthenticationsListInput,
    outputSchema: AzureADOnlyAuthenticationsListOutput,
  }));
// Input Schema
export interface BigDataPoolsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  bigDataPoolName: string;
  force?: boolean;
  properties?: {
    provisioningState?: string;
    autoScale?: {
      minNodeCount?: number;
      enabled?: boolean;
      maxNodeCount?: number;
    };
    creationDate?: string;
    autoPause?: { delayInMinutes?: number; enabled?: boolean };
    isComputeIsolationEnabled?: boolean;
    isAutotuneEnabled?: boolean;
    sessionLevelPackagesEnabled?: boolean;
    cacheSize?: number;
    dynamicExecutorAllocation?: {
      enabled?: boolean;
      minExecutors?: number;
      maxExecutors?: number;
    };
    sparkEventsFolder?: string;
    nodeCount?: number;
    libraryRequirements?: {
      time?: string;
      content?: string;
      filename?: string;
    };
    customLibraries?: {
      name?: string;
      path?: string;
      containerName?: string;
      uploadedTimestamp?: string;
      type?: string;
      provisioningStatus?: string;
      creatorId?: string;
    }[];
    sparkConfigProperties?: {
      time?: string;
      content?: string;
      filename?: string;
      configurationType?: "File" | "Artifact";
    };
    sparkVersion?: string;
    defaultSparkLogFolder?: string;
    nodeSize?:
      | "None"
      | "Small"
      | "Medium"
      | "Large"
      | "XLarge"
      | "XXLarge"
      | "XXXLarge";
    nodeSizeFamily?:
      | "None"
      | "MemoryOptimized"
      | "HardwareAcceleratedFPGA"
      | "HardwareAcceleratedGPU";
    lastSucceededTimestamp?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const BigDataPoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    bigDataPoolName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        autoScale: Schema.optional(
          Schema.Struct({
            minNodeCount: Schema.optional(Schema.Number),
            enabled: Schema.optional(Schema.Boolean),
            maxNodeCount: Schema.optional(Schema.Number),
          }),
        ),
        creationDate: Schema.optional(Schema.String),
        autoPause: Schema.optional(
          Schema.Struct({
            delayInMinutes: Schema.optional(Schema.Number),
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        isComputeIsolationEnabled: Schema.optional(Schema.Boolean),
        isAutotuneEnabled: Schema.optional(Schema.Boolean),
        sessionLevelPackagesEnabled: Schema.optional(Schema.Boolean),
        cacheSize: Schema.optional(Schema.Number),
        dynamicExecutorAllocation: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            minExecutors: Schema.optional(Schema.Number),
            maxExecutors: Schema.optional(Schema.Number),
          }),
        ),
        sparkEventsFolder: Schema.optional(Schema.String),
        nodeCount: Schema.optional(Schema.Number),
        libraryRequirements: Schema.optional(
          Schema.Struct({
            time: Schema.optional(Schema.String),
            content: Schema.optional(Schema.String),
            filename: Schema.optional(Schema.String),
          }),
        ),
        customLibraries: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              path: Schema.optional(Schema.String),
              containerName: Schema.optional(Schema.String),
              uploadedTimestamp: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              provisioningStatus: Schema.optional(Schema.String),
              creatorId: Schema.optional(Schema.String),
            }),
          ),
        ),
        sparkConfigProperties: Schema.optional(
          Schema.Struct({
            time: Schema.optional(Schema.String),
            content: Schema.optional(Schema.String),
            filename: Schema.optional(Schema.String),
            configurationType: Schema.optional(
              Schema.Literals(["File", "Artifact"]),
            ),
          }),
        ),
        sparkVersion: Schema.optional(Schema.String),
        defaultSparkLogFolder: Schema.optional(Schema.String),
        nodeSize: Schema.optional(
          Schema.Literals([
            "None",
            "Small",
            "Medium",
            "Large",
            "XLarge",
            "XXLarge",
            "XXXLarge",
          ]),
        ),
        nodeSizeFamily: Schema.optional(
          Schema.Literals([
            "None",
            "MemoryOptimized",
            "HardwareAcceleratedFPGA",
            "HardwareAcceleratedGPU",
          ]),
        ),
        lastSucceededTimestamp: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<BigDataPoolsCreateOrUpdateInput>;

// Output Schema
export interface BigDataPoolsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const BigDataPoolsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BigDataPoolsCreateOrUpdateOutput>;

// The operation
/**
 * Create a Big Data pool.
 *
 * Create a new Big Data pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param bigDataPoolName - Big Data pool name
 * @param force - Whether to stop any running jobs in the Big Data pool
 */
export const BigDataPoolsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BigDataPoolsCreateOrUpdateInput,
    outputSchema: BigDataPoolsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface BigDataPoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  bigDataPoolName: string;
}
export const BigDataPoolsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    bigDataPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<BigDataPoolsDeleteInput>;

// Output Schema
export interface BigDataPoolsDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const BigDataPoolsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BigDataPoolsDeleteOutput>;

// The operation
/**
 * Delete a Big Data pool.
 *
 * Delete a Big Data pool from the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param bigDataPoolName - Big Data pool name
 */
export const BigDataPoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BigDataPoolsDeleteInput,
  outputSchema: BigDataPoolsDeleteOutput,
}));
// Input Schema
export interface BigDataPoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  bigDataPoolName: string;
}
export const BigDataPoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  bigDataPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<BigDataPoolsGetInput>;

// Output Schema
export interface BigDataPoolsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const BigDataPoolsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<BigDataPoolsGetOutput>;

// The operation
/**
 * Get Big Data pool
 *
 * Get a Big Data pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param bigDataPoolName - Big Data pool name
 */
export const BigDataPoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BigDataPoolsGetInput,
  outputSchema: BigDataPoolsGetOutput,
}));
// Input Schema
export interface BigDataPoolsListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const BigDataPoolsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<BigDataPoolsListByWorkspaceInput>;

// Output Schema
export interface BigDataPoolsListByWorkspaceOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const BigDataPoolsListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<BigDataPoolsListByWorkspaceOutput>;

// The operation
/**
 * List the Big Data pools in a workspace.
 *
 * List Big Data pools in a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const BigDataPoolsListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BigDataPoolsListByWorkspaceInput,
    outputSchema: BigDataPoolsListByWorkspaceOutput,
  }),
);
// Input Schema
export interface BigDataPoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  bigDataPoolName: string;
  tags?: Record<string, string>;
}
export const BigDataPoolsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    bigDataPoolName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/bigDataPools/{bigDataPoolName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<BigDataPoolsUpdateInput>;

// Output Schema
export interface BigDataPoolsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const BigDataPoolsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BigDataPoolsUpdateOutput>;

// The operation
/**
 * Update a Big Data pool.
 *
 * Patch a Big Data pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param bigDataPoolName - Big Data pool name
 */
export const BigDataPoolsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BigDataPoolsUpdateInput,
  outputSchema: BigDataPoolsUpdateOutput,
}));
// Input Schema
export interface DataMaskingPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  dataMaskingPolicyName: "Default";
  properties?: {
    dataMaskingState: "Disabled" | "Enabled";
    exemptPrincipals?: string;
    applicationPrincipals?: string;
    maskingLevel?: string;
  };
  location?: string;
  kind?: string;
  managedBy?: string;
}
export const DataMaskingPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    dataMaskingPolicyName: Schema.Literals(["Default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        dataMaskingState: Schema.Literals(["Disabled", "Enabled"]),
        exemptPrincipals: Schema.optional(Schema.String),
        applicationPrincipals: Schema.optional(Schema.String),
        maskingLevel: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    managedBy: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataMaskingPolicies/{dataMaskingPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<DataMaskingPoliciesCreateOrUpdateInput>;

// Output Schema
export interface DataMaskingPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DataMaskingPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataMaskingPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Sql pool data masking policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param dataMaskingPolicyName - The name of the data masking policy for which the masking rule applies.
 */
export const DataMaskingPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataMaskingPoliciesCreateOrUpdateInput,
    outputSchema: DataMaskingPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface DataMaskingPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  dataMaskingPolicyName: "Default";
}
export const DataMaskingPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    dataMaskingPolicyName: Schema.Literals(["Default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataMaskingPolicies/{dataMaskingPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<DataMaskingPoliciesGetInput>;

// Output Schema
export interface DataMaskingPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DataMaskingPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataMaskingPoliciesGetOutput>;

// The operation
/**
 * Gets a Sql pool data masking policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param dataMaskingPolicyName - The name of the data masking policy for which the masking rule applies.
 */
export const DataMaskingPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataMaskingPoliciesGetInput,
    outputSchema: DataMaskingPoliciesGetOutput,
  }),
);
// Input Schema
export interface DataMaskingRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  dataMaskingPolicyName: "Default";
  dataMaskingRuleName: string;
  properties?: {
    id?: string;
    aliasName?: string;
    ruleState?: "Disabled" | "Enabled";
    schemaName: string;
    tableName: string;
    columnName: string;
    maskingFunction: "Default" | "CCN" | "Email" | "Number" | "SSN" | "Text";
    numberFrom?: string;
    numberTo?: string;
    prefixSize?: string;
    suffixSize?: string;
    replacementString?: string;
  };
  location?: string;
  kind?: string;
}
export const DataMaskingRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    dataMaskingPolicyName: Schema.Literals(["Default"]).pipe(T.PathParam()),
    dataMaskingRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        aliasName: Schema.optional(Schema.String),
        ruleState: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
        schemaName: Schema.String,
        tableName: Schema.String,
        columnName: Schema.String,
        maskingFunction: Schema.Literals([
          "Default",
          "CCN",
          "Email",
          "Number",
          "SSN",
          "Text",
        ]),
        numberFrom: Schema.optional(Schema.String),
        numberTo: Schema.optional(Schema.String),
        prefixSize: Schema.optional(Schema.String),
        suffixSize: Schema.optional(Schema.String),
        replacementString: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules/{dataMaskingRuleName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<DataMaskingRulesCreateOrUpdateInput>;

// Output Schema
export interface DataMaskingRulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DataMaskingRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataMaskingRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Sql pool data masking rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param dataMaskingPolicyName - The name of the data masking policy for which the masking rule applies.
 * @param dataMaskingRuleName - The name of the data masking rule.
 */
export const DataMaskingRulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataMaskingRulesCreateOrUpdateInput,
    outputSchema: DataMaskingRulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface DataMaskingRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  dataMaskingPolicyName: "Default";
  dataMaskingRuleName: string;
}
export const DataMaskingRulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    dataMaskingPolicyName: Schema.Literals(["Default"]).pipe(T.PathParam()),
    dataMaskingRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules/{dataMaskingRuleName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<DataMaskingRulesGetInput>;

// Output Schema
export interface DataMaskingRulesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DataMaskingRulesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataMaskingRulesGetOutput>;

// The operation
/**
 * Gets the specific Sql pool data masking rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param dataMaskingPolicyName - The name of the data masking policy for which the masking rule applies.
 * @param dataMaskingRuleName - The name of the data masking rule.
 */
export const DataMaskingRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataMaskingRulesGetInput,
  outputSchema: DataMaskingRulesGetOutput,
}));
// Input Schema
export interface DataMaskingRulesListBySqlPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  dataMaskingPolicyName: "Default";
}
export const DataMaskingRulesListBySqlPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    dataMaskingPolicyName: Schema.Literals(["Default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<DataMaskingRulesListBySqlPoolInput>;

// Output Schema
export interface DataMaskingRulesListBySqlPoolOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const DataMaskingRulesListBySqlPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DataMaskingRulesListBySqlPoolOutput>;

// The operation
/**
 * Gets a list of Sql pool data masking rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param dataMaskingPolicyName - The name of the data masking policy for which the masking rule applies.
 */
export const DataMaskingRulesListBySqlPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataMaskingRulesListBySqlPoolInput,
    outputSchema: DataMaskingRulesListBySqlPoolOutput,
  }));
// Input Schema
export interface ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  blobAuditingPolicyName: "default";
  properties?: {
    predicateExpression?: string;
    state: "Enabled" | "Disabled";
    storageEndpoint?: string;
    storageAccountAccessKey?: string;
    retentionDays?: number;
    auditActionsAndGroups?: string[];
    storageAccountSubscriptionId?: string;
    isStorageSecondaryKeyInUse?: boolean;
    isAzureMonitorTargetEnabled?: boolean;
    queueDelayMs?: number;
  };
}
export const ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    blobAuditingPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        predicateExpression: Schema.optional(Schema.String),
        state: Schema.Literals(["Enabled", "Disabled"]),
        storageEndpoint: Schema.optional(Schema.String),
        storageAccountAccessKey: Schema.optional(Schema.String),
        retentionDays: Schema.optional(Schema.Number),
        auditActionsAndGroups: Schema.optional(Schema.Array(Schema.String)),
        storageAccountSubscriptionId: Schema.optional(Schema.String),
        isStorageSecondaryKeyInUse: Schema.optional(Schema.Boolean),
        isAzureMonitorTargetEnabled: Schema.optional(Schema.Boolean),
        queueDelayMs: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/extendedAuditingSettings/{blobAuditingPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateInput>;

// Output Schema
export interface ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an extended Sql pool's blob auditing policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param blobAuditingPolicyName - The name of the blob auditing policy.
 */
export const ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateInput,
    outputSchema: ExtendedSqlPoolBlobAuditingPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ExtendedSqlPoolBlobAuditingPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  blobAuditingPolicyName: "default";
}
export const ExtendedSqlPoolBlobAuditingPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    blobAuditingPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/extendedAuditingSettings/{blobAuditingPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ExtendedSqlPoolBlobAuditingPoliciesGetInput>;

// Output Schema
export interface ExtendedSqlPoolBlobAuditingPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ExtendedSqlPoolBlobAuditingPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ExtendedSqlPoolBlobAuditingPoliciesGetOutput>;

// The operation
/**
 * Gets an extended Sql pool's blob auditing policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param blobAuditingPolicyName - The name of the blob auditing policy.
 */
export const ExtendedSqlPoolBlobAuditingPoliciesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExtendedSqlPoolBlobAuditingPoliciesGetInput,
    outputSchema: ExtendedSqlPoolBlobAuditingPoliciesGetOutput,
  }));
// Input Schema
export interface ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/extendedAuditingSettings",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolInput>;

// Output Schema
export interface ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolOutput>;

// The operation
/**
 * Lists extended auditing settings of a Sql pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const ExtendedSqlPoolBlobAuditingPoliciesListBySqlPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolInput,
    outputSchema: ExtendedSqlPoolBlobAuditingPoliciesListBySqlPoolOutput,
  }));
// Input Schema
export interface IntegrationRuntimeAuthKeysListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimeAuthKeysListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/listAuthKeys",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeAuthKeysListInput>;

// Output Schema
export interface IntegrationRuntimeAuthKeysListOutput {
  authKey1?: string;
  authKey2?: string;
}
export const IntegrationRuntimeAuthKeysListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authKey1: Schema.optional(Schema.String),
    authKey2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimeAuthKeysListOutput>;

// The operation
/**
 * List integration runtime authentication keys
 *
 * List authentication keys in an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimeAuthKeysList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeAuthKeysListInput,
    outputSchema: IntegrationRuntimeAuthKeysListOutput,
  }));
// Input Schema
export interface IntegrationRuntimeAuthKeysRegenerateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
  keyName?: "authKey1" | "authKey2";
}
export const IntegrationRuntimeAuthKeysRegenerateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.optional(Schema.Literals(["authKey1", "authKey2"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/regenerateAuthKey",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeAuthKeysRegenerateInput>;

// Output Schema
export interface IntegrationRuntimeAuthKeysRegenerateOutput {
  authKey1?: string;
  authKey2?: string;
}
export const IntegrationRuntimeAuthKeysRegenerateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authKey1: Schema.optional(Schema.String),
    authKey2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimeAuthKeysRegenerateOutput>;

// The operation
/**
 * Regenerate integration runtime authentication key
 *
 * Regenerate the authentication key for an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimeAuthKeysRegenerate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeAuthKeysRegenerateInput,
    outputSchema: IntegrationRuntimeAuthKeysRegenerateOutput,
  }));
// Input Schema
export interface IntegrationRuntimeConnectionInfosGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimeConnectionInfosGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/getConnectionInfo",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeConnectionInfosGetInput>;

// Output Schema
export interface IntegrationRuntimeConnectionInfosGetOutput {
  serviceToken?: string;
  identityCertThumbprint?: string;
  hostServiceUri?: string;
  version?: string;
  publicKey?: string;
  isIdentityCertExprired?: boolean;
}
export const IntegrationRuntimeConnectionInfosGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceToken: Schema.optional(Schema.String),
    identityCertThumbprint: Schema.optional(Schema.String),
    hostServiceUri: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    publicKey: Schema.optional(Schema.String),
    isIdentityCertExprired: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<IntegrationRuntimeConnectionInfosGetOutput>;

// The operation
/**
 * Get integration runtime connection info
 *
 * Get connection info for an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimeConnectionInfosGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeConnectionInfosGetInput,
    outputSchema: IntegrationRuntimeConnectionInfosGetOutput,
  }));
// Input Schema
export interface IntegrationRuntimeCredentialsSyncInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimeCredentialsSyncInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/syncCredentials",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeCredentialsSyncInput>;

// Output Schema
export type IntegrationRuntimeCredentialsSyncOutput = void;
export const IntegrationRuntimeCredentialsSyncOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimeCredentialsSyncOutput>;

// The operation
/**
 * Sync integration runtime credentials
 *
 * Force the integration runtime to synchronize credentials across integration runtime nodes, and this will override the credentials across all worker nodes with those available on the dispatcher node. If you already have the latest credential backup file, you should manually import it (preferred) on any self-hosted integration runtime node than using this API directly.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimeCredentialsSync =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeCredentialsSyncInput,
    outputSchema: IntegrationRuntimeCredentialsSyncOutput,
  }));
// Input Schema
export interface IntegrationRuntimeMonitoringDataListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimeMonitoringDataListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/monitoringData",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeMonitoringDataListInput>;

// Output Schema
export interface IntegrationRuntimeMonitoringDataListOutput {
  name?: string;
  nodes?: {
    nodeName?: string;
    availableMemoryInMB?: number;
    cpuUtilization?: number;
    concurrentJobsLimit?: number;
    concurrentJobsRunning?: number;
    maxConcurrentJobs?: number;
    sentBytes?: number;
    receivedBytes?: number;
  }[];
}
export const IntegrationRuntimeMonitoringDataListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    nodes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          nodeName: Schema.optional(Schema.String),
          availableMemoryInMB: Schema.optional(Schema.Number),
          cpuUtilization: Schema.optional(Schema.Number),
          concurrentJobsLimit: Schema.optional(Schema.Number),
          concurrentJobsRunning: Schema.optional(Schema.Number),
          maxConcurrentJobs: Schema.optional(Schema.Number),
          sentBytes: Schema.optional(Schema.Number),
          receivedBytes: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IntegrationRuntimeMonitoringDataListOutput>;

// The operation
/**
 * Get integration runtime monitoring data
 *
 * Get monitoring data for an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimeMonitoringDataList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeMonitoringDataListInput,
    outputSchema: IntegrationRuntimeMonitoringDataListOutput,
  }));
// Input Schema
export interface IntegrationRuntimeNodeIpAddressGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
  nodeName: string;
}
export const IntegrationRuntimeNodeIpAddressGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}/ipAddress",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeNodeIpAddressGetInput>;

// Output Schema
export interface IntegrationRuntimeNodeIpAddressGetOutput {
  ipAddress?: string;
}
export const IntegrationRuntimeNodeIpAddressGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipAddress: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimeNodeIpAddressGetOutput>;

// The operation
/**
 * Get integration runtime node IP address
 *
 * Get the IP address of an integration runtime node
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 * @param nodeName - Integration runtime node name
 */
export const IntegrationRuntimeNodeIpAddressGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeNodeIpAddressGetInput,
    outputSchema: IntegrationRuntimeNodeIpAddressGetOutput,
  }));
// Input Schema
export interface IntegrationRuntimeNodesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
  nodeName: string;
}
export const IntegrationRuntimeNodesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeNodesDeleteInput>;

// Output Schema
export type IntegrationRuntimeNodesDeleteOutput = void;
export const IntegrationRuntimeNodesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimeNodesDeleteOutput>;

// The operation
/**
 * Delete integration runtime node
 *
 * Delete an integration runtime node
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 * @param nodeName - Integration runtime node name
 */
export const IntegrationRuntimeNodesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeNodesDeleteInput,
    outputSchema: IntegrationRuntimeNodesDeleteOutput,
  }));
// Input Schema
export interface IntegrationRuntimeNodesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
  nodeName: string;
}
export const IntegrationRuntimeNodesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeNodesGetInput>;

// Output Schema
export interface IntegrationRuntimeNodesGetOutput {
  nodeName?: string;
  machineName?: string;
  hostServiceUri?: string;
  status?:
    | "NeedRegistration"
    | "Online"
    | "Limited"
    | "Offline"
    | "Upgrading"
    | "Initializing"
    | "InitializeFailed";
  capabilities?: Record<string, string>;
  versionStatus?: string;
  version?: string;
  registerTime?: string;
  lastConnectTime?: string;
  expiryTime?: string;
  lastStartTime?: string;
  lastStopTime?: string;
  lastUpdateResult?: "None" | "Succeed" | "Fail";
  lastStartUpdateTime?: string;
  lastEndUpdateTime?: string;
  isActiveDispatcher?: boolean;
  concurrentJobsLimit?: number;
  maxConcurrentJobs?: number;
}
export const IntegrationRuntimeNodesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeName: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    hostServiceUri: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "NeedRegistration",
        "Online",
        "Limited",
        "Offline",
        "Upgrading",
        "Initializing",
        "InitializeFailed",
      ]),
    ),
    capabilities: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    versionStatus: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    registerTime: Schema.optional(Schema.String),
    lastConnectTime: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    lastStartTime: Schema.optional(Schema.String),
    lastStopTime: Schema.optional(Schema.String),
    lastUpdateResult: Schema.optional(
      Schema.Literals(["None", "Succeed", "Fail"]),
    ),
    lastStartUpdateTime: Schema.optional(Schema.String),
    lastEndUpdateTime: Schema.optional(Schema.String),
    isActiveDispatcher: Schema.optional(Schema.Boolean),
    concurrentJobsLimit: Schema.optional(Schema.Number),
    maxConcurrentJobs: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<IntegrationRuntimeNodesGetOutput>;

// The operation
/**
 * Get integration runtime node
 *
 * Get an integration runtime node
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 * @param nodeName - Integration runtime node name
 */
export const IntegrationRuntimeNodesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimeNodesGetInput,
    outputSchema: IntegrationRuntimeNodesGetOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimeNodesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
  nodeName: string;
  concurrentJobsLimit?: number;
}
export const IntegrationRuntimeNodesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String.pipe(T.PathParam()),
    concurrentJobsLimit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeNodesUpdateInput>;

// Output Schema
export interface IntegrationRuntimeNodesUpdateOutput {
  nodeName?: string;
  machineName?: string;
  hostServiceUri?: string;
  status?:
    | "NeedRegistration"
    | "Online"
    | "Limited"
    | "Offline"
    | "Upgrading"
    | "Initializing"
    | "InitializeFailed";
  capabilities?: Record<string, string>;
  versionStatus?: string;
  version?: string;
  registerTime?: string;
  lastConnectTime?: string;
  expiryTime?: string;
  lastStartTime?: string;
  lastStopTime?: string;
  lastUpdateResult?: "None" | "Succeed" | "Fail";
  lastStartUpdateTime?: string;
  lastEndUpdateTime?: string;
  isActiveDispatcher?: boolean;
  concurrentJobsLimit?: number;
  maxConcurrentJobs?: number;
}
export const IntegrationRuntimeNodesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeName: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    hostServiceUri: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "NeedRegistration",
        "Online",
        "Limited",
        "Offline",
        "Upgrading",
        "Initializing",
        "InitializeFailed",
      ]),
    ),
    capabilities: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    versionStatus: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    registerTime: Schema.optional(Schema.String),
    lastConnectTime: Schema.optional(Schema.String),
    expiryTime: Schema.optional(Schema.String),
    lastStartTime: Schema.optional(Schema.String),
    lastStopTime: Schema.optional(Schema.String),
    lastUpdateResult: Schema.optional(
      Schema.Literals(["None", "Succeed", "Fail"]),
    ),
    lastStartUpdateTime: Schema.optional(Schema.String),
    lastEndUpdateTime: Schema.optional(Schema.String),
    isActiveDispatcher: Schema.optional(Schema.Boolean),
    concurrentJobsLimit: Schema.optional(Schema.Number),
    maxConcurrentJobs: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<IntegrationRuntimeNodesUpdateOutput>;

// The operation
/**
 * Create integration runtime node
 *
 * Create an integration runtime node
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 * @param nodeName - Integration runtime node name
 */
export const IntegrationRuntimeNodesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeNodesUpdateInput,
    outputSchema: IntegrationRuntimeNodesUpdateOutput,
  }));
// Input Schema
export interface IntegrationRuntimeObjectMetadataListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
  metadataPath?: string;
}
export const IntegrationRuntimeObjectMetadataListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    metadataPath: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/getObjectMetadata",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeObjectMetadataListInput>;

// Output Schema
export interface IntegrationRuntimeObjectMetadataListOutput {
  value?: {
    type: "Folder" | "Project" | "Package" | "Environment";
    id?: number;
    name?: string;
    description?: string;
  }[];
  nextLink?: string;
}
export const IntegrationRuntimeObjectMetadataListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.Literals([
            "Folder",
            "Project",
            "Package",
            "Environment",
          ]),
          id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimeObjectMetadataListOutput>;

// The operation
/**
 * Get integration runtime object metadata
 *
 * Get object metadata from an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimeObjectMetadataList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeObjectMetadataListInput,
    outputSchema: IntegrationRuntimeObjectMetadataListOutput,
  }));
// Input Schema
export interface IntegrationRuntimeObjectMetadataRefreshInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimeObjectMetadataRefreshInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/refreshObjectMetadata",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeObjectMetadataRefreshInput>;

// Output Schema
export interface IntegrationRuntimeObjectMetadataRefreshOutput {
  status?: string;
  name?: string;
  properties?: string;
  error?: string;
}
export const IntegrationRuntimeObjectMetadataRefreshOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.String),
    error: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimeObjectMetadataRefreshOutput>;

// The operation
/**
 * Refresh integration runtime object metadata
 *
 * Refresh the object metadata in an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimeObjectMetadataRefresh =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimeObjectMetadataRefreshInput,
    outputSchema: IntegrationRuntimeObjectMetadataRefreshOutput,
  }));
// Input Schema
export interface IntegrationRuntimesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
  properties: { type: "Managed" | "SelfHosted"; description?: string };
}
export const IntegrationRuntimesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      type: Schema.Literals(["Managed", "SelfHosted"]),
      description: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesCreateInput>;

// Output Schema
export interface IntegrationRuntimesCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const IntegrationRuntimesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimesCreateOutput>;

// The operation
/**
 * Create integration runtime
 *
 * Create an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 * @param If-Match - ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update.
 */
export const IntegrationRuntimesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesCreateInput,
    outputSchema: IntegrationRuntimesCreateOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesDeleteInput>;

// Output Schema
export type IntegrationRuntimesDeleteOutput = void;
export const IntegrationRuntimesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimesDeleteOutput>;

// The operation
/**
 * Delete integration runtime
 *
 * Delete an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesDeleteInput,
    outputSchema: IntegrationRuntimesDeleteOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesDisableInteractiveQueryInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesDisableInteractiveQueryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/disableInteractiveQuery",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesDisableInteractiveQueryInput>;

// Output Schema
export type IntegrationRuntimesDisableInteractiveQueryOutput = void;
export const IntegrationRuntimesDisableInteractiveQueryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimesDisableInteractiveQueryOutput>;

// The operation
/**
 * Disable interactive query in integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimesDisableInteractiveQuery =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesDisableInteractiveQueryInput,
    outputSchema: IntegrationRuntimesDisableInteractiveQueryOutput,
  }));
// Input Schema
export interface IntegrationRuntimesEnableInteractiveQueryInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesEnableInteractiveQueryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/enableInteractiveQuery",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesEnableInteractiveQueryInput>;

// Output Schema
export type IntegrationRuntimesEnableInteractiveQueryOutput = void;
export const IntegrationRuntimesEnableInteractiveQueryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimesEnableInteractiveQueryOutput>;

// The operation
/**
 * Enable interactive query in integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimesEnableInteractiveQuery =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesEnableInteractiveQueryInput,
    outputSchema: IntegrationRuntimesEnableInteractiveQueryOutput,
  }));
// Input Schema
export interface IntegrationRuntimesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesGetInput>;

// Output Schema
export interface IntegrationRuntimesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const IntegrationRuntimesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimesGetOutput>;

// The operation
/**
 * Get integration runtime
 *
 * Get an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 * @param If-None-Match - ETag of the integration runtime entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned.
 */
export const IntegrationRuntimesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesGetInput,
    outputSchema: IntegrationRuntimesGetOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const IntegrationRuntimesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesListByWorkspaceInput>;

// Output Schema
export interface IntegrationRuntimesListByWorkspaceOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const IntegrationRuntimesListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimesListByWorkspaceOutput>;

// The operation
/**
 * List integration runtimes
 *
 * List all integration runtimes
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const IntegrationRuntimesListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationRuntimesListByWorkspaceInput,
    outputSchema: IntegrationRuntimesListByWorkspaceOutput,
  }));
// Input Schema
export interface IntegrationRuntimesListOutboundNetworkDependenciesEndpointsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesListOutboundNetworkDependenciesEndpointsInput>;

// Output Schema
export interface IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOutput {
  value?: {
    category?: string;
    endpoints?: {
      domainName?: string;
      endpointDetails?: { port?: number }[];
    }[];
  }[];
}
export const IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          category: Schema.optional(Schema.String),
          endpoints: Schema.optional(
            Schema.Array(
              Schema.Struct({
                domainName: Schema.optional(Schema.String),
                endpointDetails: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOutput>;

// The operation
/**
 * Gets list of outbound network dependencies for a given Azure-SSIS integration runtime.
 *
 * Gets the list of outbound network dependencies for a given Azure-SSIS integration runtime.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimesListOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      IntegrationRuntimesListOutboundNetworkDependenciesEndpointsInput,
    outputSchema:
      IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export interface IntegrationRuntimesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/start",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesStartInput>;

// Output Schema
export interface IntegrationRuntimesStartOutput {
  name?: string;
  properties: {
    type: "Managed" | "SelfHosted";
    dataFactoryName?: string;
    state?:
      | "Initial"
      | "Stopped"
      | "Started"
      | "Starting"
      | "Stopping"
      | "NeedRegistration"
      | "Online"
      | "Limited"
      | "Offline"
      | "AccessDenied";
  };
}
export const IntegrationRuntimesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.Struct({
      type: Schema.Literals(["Managed", "SelfHosted"]),
      dataFactoryName: Schema.optional(Schema.String),
      state: Schema.optional(
        Schema.Literals([
          "Initial",
          "Stopped",
          "Started",
          "Starting",
          "Stopping",
          "NeedRegistration",
          "Online",
          "Limited",
          "Offline",
          "AccessDenied",
        ]),
      ),
    }),
  }) as unknown as Schema.Codec<IntegrationRuntimesStartOutput>;

// The operation
/**
 * Start integration runtime
 *
 * Start an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesStartInput,
    outputSchema: IntegrationRuntimesStartOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/stop",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesStopInput>;

// Output Schema
export type IntegrationRuntimesStopOutput = void;
export const IntegrationRuntimesStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimesStopOutput>;

// The operation
/**
 * Stop integration runtime
 *
 * Stop an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesStopInput,
    outputSchema: IntegrationRuntimesStopOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimeStatusGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimeStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/getStatus",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimeStatusGetInput>;

// Output Schema
export interface IntegrationRuntimeStatusGetOutput {
  name?: string;
  properties: {
    type: "Managed" | "SelfHosted";
    dataFactoryName?: string;
    state?:
      | "Initial"
      | "Stopped"
      | "Started"
      | "Starting"
      | "Stopping"
      | "NeedRegistration"
      | "Online"
      | "Limited"
      | "Offline"
      | "AccessDenied";
  };
}
export const IntegrationRuntimeStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.Struct({
      type: Schema.Literals(["Managed", "SelfHosted"]),
      dataFactoryName: Schema.optional(Schema.String),
      state: Schema.optional(
        Schema.Literals([
          "Initial",
          "Stopped",
          "Started",
          "Starting",
          "Stopping",
          "NeedRegistration",
          "Online",
          "Limited",
          "Offline",
          "AccessDenied",
        ]),
      ),
    }),
  }) as unknown as Schema.Codec<IntegrationRuntimeStatusGetOutput>;

// The operation
/**
 * Get integration runtime status
 *
 * Get the integration runtime status
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimeStatusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimeStatusGetInput,
    outputSchema: IntegrationRuntimeStatusGetOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
  autoUpdate?: "On" | "Off";
  updateDelayOffset?: string;
}
export const IntegrationRuntimesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
    autoUpdate: Schema.optional(Schema.Literals(["On", "Off"])),
    updateDelayOffset: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesUpdateInput>;

// Output Schema
export interface IntegrationRuntimesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const IntegrationRuntimesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IntegrationRuntimesUpdateOutput>;

// The operation
/**
 * Update integration runtime
 *
 * Update an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesUpdateInput,
    outputSchema: IntegrationRuntimesUpdateOutput,
  }),
);
// Input Schema
export interface IntegrationRuntimesUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationRuntimeName: string;
}
export const IntegrationRuntimesUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationRuntimeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/upgrade",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IntegrationRuntimesUpgradeInput>;

// Output Schema
export type IntegrationRuntimesUpgradeOutput = void;
export const IntegrationRuntimesUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationRuntimesUpgradeOutput>;

// The operation
/**
 * Upgrade integration runtime
 *
 * Upgrade an integration runtime
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param integrationRuntimeName - Integration runtime name
 */
export const IntegrationRuntimesUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationRuntimesUpgradeInput,
    outputSchema: IntegrationRuntimesUpgradeOutput,
  }),
);
// Input Schema
export interface IpFirewallRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleName: string;
  properties?: {
    endIpAddress?: string;
    provisioningState?:
      | "Provisioning"
      | "Succeeded"
      | "Deleting"
      | "Failed"
      | "DeleteError";
    startIpAddress?: string;
  };
}
export const IpFirewallRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        endIpAddress: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Succeeded",
            "Deleting",
            "Failed",
            "DeleteError",
          ]),
        ),
        startIpAddress: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/firewallRules/{ruleName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IpFirewallRulesCreateOrUpdateInput>;

// Output Schema
export interface IpFirewallRulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const IpFirewallRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IpFirewallRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a firewall rule
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param ruleName - The IP firewall rule name
 */
export const IpFirewallRulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IpFirewallRulesCreateOrUpdateInput,
    outputSchema: IpFirewallRulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface IpFirewallRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleName: string;
}
export const IpFirewallRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/firewallRules/{ruleName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IpFirewallRulesDeleteInput>;

// Output Schema
export interface IpFirewallRulesDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const IpFirewallRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IpFirewallRulesDeleteOutput>;

// The operation
/**
 * Deletes a firewall rule
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param ruleName - The IP firewall rule name
 */
export const IpFirewallRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IpFirewallRulesDeleteInput,
    outputSchema: IpFirewallRulesDeleteOutput,
  }),
);
// Input Schema
export interface IpFirewallRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleName: string;
}
export const IpFirewallRulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/firewallRules/{ruleName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IpFirewallRulesGetInput>;

// Output Schema
export interface IpFirewallRulesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const IpFirewallRulesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IpFirewallRulesGetOutput>;

// The operation
/**
 * Get a firewall rule
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param ruleName - The IP firewall rule name
 */
export const IpFirewallRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IpFirewallRulesGetInput,
  outputSchema: IpFirewallRulesGetOutput,
}));
// Input Schema
export interface IpFirewallRulesListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const IpFirewallRulesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/firewallRules",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IpFirewallRulesListByWorkspaceInput>;

// Output Schema
export interface IpFirewallRulesListByWorkspaceOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const IpFirewallRulesListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IpFirewallRulesListByWorkspaceOutput>;

// The operation
/**
 * Returns a list of firewall rules
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const IpFirewallRulesListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IpFirewallRulesListByWorkspaceInput,
    outputSchema: IpFirewallRulesListByWorkspaceOutput,
  }));
// Input Schema
export interface IpFirewallRulesReplaceAllInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ipFirewallRules?: Record<
    string,
    {
      endIpAddress?: string;
      provisioningState?:
        | "Provisioning"
        | "Succeeded"
        | "Deleting"
        | "Failed"
        | "DeleteError";
      startIpAddress?: string;
    }
  >;
}
export const IpFirewallRulesReplaceAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    ipFirewallRules: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          endIpAddress: Schema.optional(Schema.String),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Provisioning",
              "Succeeded",
              "Deleting",
              "Failed",
              "DeleteError",
            ]),
          ),
          startIpAddress: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/replaceAllIpFirewallRules",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<IpFirewallRulesReplaceAllInput>;

// Output Schema
export interface IpFirewallRulesReplaceAllOutput {
  operationId?: string;
}
export const IpFirewallRulesReplaceAllOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IpFirewallRulesReplaceAllOutput>;

// The operation
/**
 * Replaces firewall rules
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const IpFirewallRulesReplaceAll = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IpFirewallRulesReplaceAllInput,
    outputSchema: IpFirewallRulesReplaceAllOutput,
  }),
);
// Input Schema
export interface KeysCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  keyName: string;
  properties?: { isActiveCMK?: boolean; keyVaultUrl?: string };
}
export const KeysCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        isActiveCMK: Schema.optional(Schema.Boolean),
        keyVaultUrl: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/keys/{keyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<KeysCreateOrUpdateInput>;

// Output Schema
export interface KeysCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const KeysCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<KeysCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a workspace key
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param keyName - The name of the workspace key
 */
export const KeysCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysCreateOrUpdateInput,
  outputSchema: KeysCreateOrUpdateOutput,
}));
// Input Schema
export interface KeysDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  keyName: string;
}
export const KeysDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  keyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/keys/{keyName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<KeysDeleteInput>;

// Output Schema
export interface KeysDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const KeysDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<KeysDeleteOutput>;

// The operation
/**
 * Deletes a workspace key
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param keyName - The name of the workspace key
 */
export const KeysDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysDeleteInput,
  outputSchema: KeysDeleteOutput,
}));
// Input Schema
export interface KeysGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  keyName: string;
}
export const KeysGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  keyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/keys/{keyName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<KeysGetInput>;

// Output Schema
export interface KeysGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const KeysGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<KeysGetOutput>;

// The operation
/**
 * Gets a workspace key
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param keyName - The name of the workspace key
 */
export const KeysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysGetInput,
  outputSchema: KeysGetOutput,
}));
// Input Schema
export interface KeysListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const KeysListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/keys",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<KeysListByWorkspaceInput>;

// Output Schema
export interface KeysListByWorkspaceOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const KeysListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<KeysListByWorkspaceOutput>;

// The operation
/**
 * Returns a list of keys in a workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const KeysListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysListByWorkspaceInput,
  outputSchema: KeysListByWorkspaceOutput,
}));
// Input Schema
export interface LibrariesListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const LibrariesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/libraries",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<LibrariesListByWorkspaceInput>;

// Output Schema
export interface LibrariesListByWorkspaceOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const LibrariesListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LibrariesListByWorkspaceOutput>;

// The operation
/**
 * List the libraries in a workspace.
 *
 * List libraries in a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const LibrariesListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LibrariesListByWorkspaceInput,
    outputSchema: LibrariesListByWorkspaceOutput,
  }),
);
// Input Schema
export interface LibraryGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  libraryName: string;
  workspaceName: string;
}
export const LibraryGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  libraryName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/libraries/{libraryName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<LibraryGetInput>;

// Output Schema
export interface LibraryGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const LibraryGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<LibraryGetOutput>;

// The operation
/**
 * Get library by name.
 *
 * Get library by name in a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param libraryName - Library name
 * @param workspaceName - The name of the workspace.
 */
export const LibraryGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LibraryGetInput,
  outputSchema: LibraryGetOutput,
}));
// Input Schema
export interface OperationsCheckNameAvailabilityInput {
  subscriptionId: string;
  name?: string;
  type?: string;
}
export const OperationsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Synapse/checkNameAvailability",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<OperationsCheckNameAvailabilityInput>;

// Output Schema
export interface OperationsCheckNameAvailabilityOutput {
  message?: string;
  available?: boolean;
  reason?: string;
  name?: string;
}
export const OperationsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    available: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OperationsCheckNameAvailabilityOutput>;

// The operation
/**
 * Check name availability
 *
 * Check whether a workspace name is available
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const OperationsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OperationsCheckNameAvailabilityInput,
    outputSchema: OperationsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface OperationsGetAzureAsyncHeaderResultInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  operationId: string;
}
export const OperationsGetAzureAsyncHeaderResultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/operationStatuses/{operationId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<OperationsGetAzureAsyncHeaderResultInput>;

// Output Schema
export interface OperationsGetAzureAsyncHeaderResultOutput {
  id?: string;
  name?: string;
  status?: "InProgress" | "Succeeded" | "Failed" | "Canceled";
  properties?: unknown;
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    }[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
  startTime?: string;
  endTime?: string;
  percentComplete?: number;
}
export const OperationsGetAzureAsyncHeaderResultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["InProgress", "Succeeded", "Failed", "Canceled"]),
    ),
    properties: Schema.optional(Schema.Unknown),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              target: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
              additionalInfo: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    info: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            }),
          ),
        ),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
      }),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    percentComplete: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<OperationsGetAzureAsyncHeaderResultOutput>;

// The operation
/**
 * Get operation status
 *
 * Get the status of an operation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param operationId - Operation ID
 */
export const OperationsGetAzureAsyncHeaderResult =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OperationsGetAzureAsyncHeaderResultInput,
    outputSchema: OperationsGetAzureAsyncHeaderResultOutput,
  }));
// Input Schema
export interface OperationsGetLocationHeaderResultInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  operationId: string;
}
export const OperationsGetLocationHeaderResultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/operationResults/{operationId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<OperationsGetLocationHeaderResultInput>;

// Output Schema
export type OperationsGetLocationHeaderResultOutput = void;
export const OperationsGetLocationHeaderResultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OperationsGetLocationHeaderResultOutput>;

// The operation
/**
 * Get operation result
 *
 * Get the result of an operation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param operationId - Operation ID
 */
export const OperationsGetLocationHeaderResult =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OperationsGetLocationHeaderResultInput,
    outputSchema: OperationsGetLocationHeaderResultOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Synapse/operations",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export type OperationsListOutput = {
  display?: {
    description?: string;
    resource?: string;
    provider?: string;
    operation?: string;
  };
  isDataAction?: string;
  name?: string;
  properties?: {
    serviceSpecification?: {
      metricSpecifications?: {
        sourceMdmNamespace?: string;
        displayName?: string;
        name?: string;
        aggregationType?: string;
        displayDescription?: string;
        sourceMdmAccount?: string;
        enableRegionalMdmAccount?: boolean;
        unit?: string;
        dimensions?: {
          displayName?: string;
          name?: string;
          toBeExportedForShoebox?: boolean;
        }[];
        supportsInstanceLevelAggregation?: boolean;
        metricFilterPattern?: string;
      }[];
      logSpecifications?: {
        displayName?: string;
        blobDuration?: string;
        name?: string;
      }[];
    };
  };
  origin?: string;
}[];
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    display: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        resource: Schema.optional(Schema.String),
        provider: Schema.optional(Schema.String),
        operation: Schema.optional(Schema.String),
      }),
    ),
    isDataAction: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        serviceSpecification: Schema.optional(
          Schema.Struct({
            metricSpecifications: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  sourceMdmNamespace: Schema.optional(Schema.String),
                  displayName: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  aggregationType: Schema.optional(Schema.String),
                  displayDescription: Schema.optional(Schema.String),
                  sourceMdmAccount: Schema.optional(Schema.String),
                  enableRegionalMdmAccount: Schema.optional(Schema.Boolean),
                  unit: Schema.optional(Schema.String),
                  dimensions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        displayName: Schema.optional(Schema.String),
                        name: Schema.optional(Schema.String),
                        toBeExportedForShoebox: Schema.optional(Schema.Boolean),
                      }),
                    ),
                  ),
                  supportsInstanceLevelAggregation: Schema.optional(
                    Schema.Boolean,
                  ),
                  metricFilterPattern: Schema.optional(Schema.String),
                }),
              ),
            ),
            logSpecifications: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  displayName: Schema.optional(Schema.String),
                  blobDuration: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    origin: Schema.optional(Schema.String),
  }),
) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * All operations
 *
 * Get all available operations
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: string;
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: string;
  };
}
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOutput>;

// The operation
/**
 * Approve or reject a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 * @param properties - Private endpoint connection properties.
 */
export const PrivateEndpointConnectionsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateInput,
    outputSchema: PrivateEndpointConnectionsCreateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Delete a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/privateEndpointConnections",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * Lists private endpoint connection in workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsPrivateLinkHubGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateLinkHubName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsPrivateLinkHubGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateLinkHubName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsPrivateLinkHubGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsPrivateLinkHubGetOutput {
  id?: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: string;
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: string;
  };
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsPrivateLinkHubGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsPrivateLinkHubGetOutput>;

// The operation
/**
 * Get all PrivateEndpointConnection in the PrivateLinkHub by name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateLinkHubName - Name of the privateLinkHub
 * @param privateEndpointConnectionName - Name of the privateEndpointConnection
 */
export const PrivateEndpointConnectionsPrivateLinkHubGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsPrivateLinkHubGetInput,
    outputSchema: PrivateEndpointConnectionsPrivateLinkHubGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsPrivateLinkHubListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateLinkHubName: string;
}
export const PrivateEndpointConnectionsPrivateLinkHubListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateLinkHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}/privateEndpointConnections",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsPrivateLinkHubListInput>;

// Output Schema
export interface PrivateEndpointConnectionsPrivateLinkHubListOutput {
  value?: {
    id?: string;
    properties?: {
      privateEndpoint?: { id?: string };
      privateLinkServiceConnectionState?: {
        status?: string;
        description?: string;
        actionsRequired?: string;
      };
      provisioningState?: string;
    };
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsPrivateLinkHubListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              privateEndpoint: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              privateLinkServiceConnectionState: Schema.optional(
                Schema.Struct({
                  status: Schema.optional(Schema.String),
                  description: Schema.optional(Schema.String),
                  actionsRequired: Schema.optional(Schema.String),
                }),
              ),
              provisioningState: Schema.optional(Schema.String),
            }),
          ),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsPrivateLinkHubListOutput>;

// The operation
/**
 * Get all PrivateEndpointConnections in the PrivateLinkHub
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateLinkHubName - Name of the privateLinkHub
 */
export const PrivateEndpointConnectionsPrivateLinkHubList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsPrivateLinkHubListInput,
    outputSchema: PrivateEndpointConnectionsPrivateLinkHubListOutput,
  }));
// Input Schema
export interface PrivateLinkHubPrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateLinkHubName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkHubPrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateLinkHubName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkHubPrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkHubPrivateLinkResourcesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkHubPrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkHubPrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get Private Link Hub Private Link Resource
 *
 * Get private link resource in private link hub
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateLinkHubName - The name of the private link hub
 * @param privateLinkResourceName - The name of the private link resource
 */
export const PrivateLinkHubPrivateLinkResourcesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkHubPrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkHubPrivateLinkResourcesGetOutput,
  }));
// Input Schema
export interface PrivateLinkHubPrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateLinkHubName: string;
}
export const PrivateLinkHubPrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateLinkHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}/privateLinkResources",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkHubPrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkHubPrivateLinkResourcesListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkHubPrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkHubPrivateLinkResourcesListOutput>;

// The operation
/**
 * Private Link Resources
 *
 * Get all private link resources for a private link hub
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateLinkHubName - The name of the private link hub
 */
export const PrivateLinkHubPrivateLinkResourcesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkHubPrivateLinkResourcesListInput,
    outputSchema: PrivateLinkHubPrivateLinkResourcesListOutput,
  }));
// Input Schema
export interface PrivateLinkHubsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateLinkHubName: string;
  properties?: {
    provisioningState?: string;
    privateEndpointConnections?: {
      id?: string;
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: string;
          description?: string;
          actionsRequired?: string;
        };
        provisioningState?: string;
      };
    }[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const PrivateLinkHubsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateLinkHubName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              properties: Schema.optional(
                Schema.Struct({
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  privateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(Schema.String),
                      description: Schema.optional(Schema.String),
                      actionsRequired: Schema.optional(Schema.String),
                    }),
                  ),
                  provisioningState: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkHubsCreateOrUpdateInput>;

// Output Schema
export interface PrivateLinkHubsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkHubsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkHubsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a privateLinkHub
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateLinkHubName - Name of the privateLinkHub
 */
export const PrivateLinkHubsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkHubsCreateOrUpdateInput,
    outputSchema: PrivateLinkHubsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkHubsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateLinkHubName: string;
}
export const PrivateLinkHubsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateLinkHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkHubsDeleteInput>;

// Output Schema
export type PrivateLinkHubsDeleteOutput = void;
export const PrivateLinkHubsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateLinkHubsDeleteOutput>;

// The operation
/**
 * Deletes a privateLinkHub
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateLinkHubName - Name of the privateLinkHub
 */
export const PrivateLinkHubsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkHubsDeleteInput,
    outputSchema: PrivateLinkHubsDeleteOutput,
  }),
);
// Input Schema
export interface PrivateLinkHubsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateLinkHubName: string;
}
export const PrivateLinkHubsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateLinkHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkHubsGetInput>;

// Output Schema
export interface PrivateLinkHubsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkHubsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkHubsGetOutput>;

// The operation
/**
 * Gets a privateLinkHub
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateLinkHubName - Name of the privateLinkHub
 */
export const PrivateLinkHubsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkHubsGetInput,
  outputSchema: PrivateLinkHubsGetOutput,
}));
// Input Schema
export interface PrivateLinkHubsListInput {
  subscriptionId: string;
}
export const PrivateLinkHubsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Synapse/privateLinkHubs",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkHubsListInput>;

// Output Schema
export interface PrivateLinkHubsListOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const PrivateLinkHubsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkHubsListOutput>;

// The operation
/**
 * Returns a list of privateLinkHubs in a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateLinkHubsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkHubsListInput,
  outputSchema: PrivateLinkHubsListOutput,
}));
// Input Schema
export interface PrivateLinkHubsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrivateLinkHubsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkHubsListByResourceGroupInput>;

// Output Schema
export interface PrivateLinkHubsListByResourceGroupOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const PrivateLinkHubsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkHubsListByResourceGroupOutput>;

// The operation
/**
 * Returns a list of privateLinkHubs in a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PrivateLinkHubsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkHubsListByResourceGroupInput,
    outputSchema: PrivateLinkHubsListByResourceGroupOutput,
  }));
// Input Schema
export interface PrivateLinkHubsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateLinkHubName: string;
  tags?: Record<string, string>;
}
export const PrivateLinkHubsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateLinkHubName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkHubsUpdateInput>;

// Output Schema
export interface PrivateLinkHubsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkHubsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkHubsUpdateOutput>;

// The operation
/**
 * Updates a privateLinkHub
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateLinkHubName - Name of the privateLinkHub
 */
export const PrivateLinkHubsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkHubsUpdateInput,
    outputSchema: PrivateLinkHubsUpdateOutput,
  }),
);
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get Private Link Resource
 *
 * Get private link resource in workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param privateLinkResourceName - The name of the private link resource
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export interface PrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/privateLinkResources",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkResourcesListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListOutput>;

// The operation
/**
 * Private Link Resources
 *
 * Get all private link resources for a workspaces
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesListInput,
    outputSchema: PrivateLinkResourcesListOutput,
  }),
);
// Input Schema
export interface RestorableDroppedSqlPoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  restorableDroppedSqlPoolId: string;
}
export const RestorableDroppedSqlPoolsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    restorableDroppedSqlPoolId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/restorableDroppedSqlPools/{restorableDroppedSqlPoolId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<RestorableDroppedSqlPoolsGetInput>;

// Output Schema
export interface RestorableDroppedSqlPoolsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RestorableDroppedSqlPoolsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableDroppedSqlPoolsGetOutput>;

// The operation
/**
 * Gets a deleted sql pool that can be restored
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param restorableDroppedSqlPoolId - The id of the deleted Sql Pool in the form of sqlPoolName,deletionTimeInFileTimeFormat
 */
export const RestorableDroppedSqlPoolsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RestorableDroppedSqlPoolsGetInput,
    outputSchema: RestorableDroppedSqlPoolsGetOutput,
  }));
// Input Schema
export interface RestorableDroppedSqlPoolsListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const RestorableDroppedSqlPoolsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/restorableDroppedSqlPools",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<RestorableDroppedSqlPoolsListByWorkspaceInput>;

// Output Schema
export interface RestorableDroppedSqlPoolsListByWorkspaceOutput {
  value: { id?: string; name?: string; type?: string }[];
}
export const RestorableDroppedSqlPoolsListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RestorableDroppedSqlPoolsListByWorkspaceOutput>;

// The operation
/**
 * Gets a list of deleted Sql pools that can be restored
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const RestorableDroppedSqlPoolsListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RestorableDroppedSqlPoolsListByWorkspaceInput,
    outputSchema: RestorableDroppedSqlPoolsListByWorkspaceOutput,
  }));
// Input Schema
export interface SqlPoolBlobAuditingPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  blobAuditingPolicyName: "default";
  kind?: string;
  properties?: {
    state: "Enabled" | "Disabled";
    storageEndpoint?: string;
    storageAccountAccessKey?: string;
    retentionDays?: number;
    auditActionsAndGroups?: string[];
    storageAccountSubscriptionId?: string;
    isStorageSecondaryKeyInUse?: boolean;
    isAzureMonitorTargetEnabled?: boolean;
  };
}
export const SqlPoolBlobAuditingPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    blobAuditingPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
    kind: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        state: Schema.Literals(["Enabled", "Disabled"]),
        storageEndpoint: Schema.optional(Schema.String),
        storageAccountAccessKey: Schema.optional(Schema.String),
        retentionDays: Schema.optional(Schema.Number),
        auditActionsAndGroups: Schema.optional(Schema.Array(Schema.String)),
        storageAccountSubscriptionId: Schema.optional(Schema.String),
        isStorageSecondaryKeyInUse: Schema.optional(Schema.Boolean),
        isAzureMonitorTargetEnabled: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/auditingSettings/{blobAuditingPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolBlobAuditingPoliciesCreateOrUpdateInput>;

// Output Schema
export interface SqlPoolBlobAuditingPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolBlobAuditingPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolBlobAuditingPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a SQL pool's blob auditing policy
 *
 * Creates or updates a SQL pool's blob auditing policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param blobAuditingPolicyName - The name of the blob auditing policy.
 */
export const SqlPoolBlobAuditingPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolBlobAuditingPoliciesCreateOrUpdateInput,
    outputSchema: SqlPoolBlobAuditingPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlPoolBlobAuditingPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  blobAuditingPolicyName: "default";
}
export const SqlPoolBlobAuditingPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    blobAuditingPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/auditingSettings/{blobAuditingPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolBlobAuditingPoliciesGetInput>;

// Output Schema
export interface SqlPoolBlobAuditingPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolBlobAuditingPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolBlobAuditingPoliciesGetOutput>;

// The operation
/**
 * Get a SQL pool's blob auditing policy
 *
 * Get a SQL pool's blob auditing policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param blobAuditingPolicyName - The name of the blob auditing policy.
 */
export const SqlPoolBlobAuditingPoliciesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolBlobAuditingPoliciesGetInput,
    outputSchema: SqlPoolBlobAuditingPoliciesGetOutput,
  }));
// Input Schema
export interface SqlPoolBlobAuditingPoliciesListBySqlPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolBlobAuditingPoliciesListBySqlPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/auditingSettings",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolBlobAuditingPoliciesListBySqlPoolInput>;

// Output Schema
export interface SqlPoolBlobAuditingPoliciesListBySqlPoolOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolBlobAuditingPoliciesListBySqlPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolBlobAuditingPoliciesListBySqlPoolOutput>;

// The operation
/**
 * Lists auditing settings of a Sql pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolBlobAuditingPoliciesListBySqlPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolBlobAuditingPoliciesListBySqlPoolInput,
    outputSchema: SqlPoolBlobAuditingPoliciesListBySqlPoolOutput,
  }));
// Input Schema
export interface SqlPoolColumnsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  schemaName: string;
  tableName: string;
  columnName: string;
}
export const SqlPoolColumnsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    columnName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<SqlPoolColumnsGetInput>;

// Output Schema
export interface SqlPoolColumnsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolColumnsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolColumnsGetOutput>;

// The operation
/**
 * Get Sql pool column
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param schemaName - The name of the schema.
 * @param tableName - The name of the table.
 * @param columnName - The name of the column.
 */
export const SqlPoolColumnsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolColumnsGetInput,
  outputSchema: SqlPoolColumnsGetOutput,
}));
// Input Schema
export interface SqlPoolDataWarehouseUserActivitiesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  dataWarehouseUserActivityName: "current";
}
export const SqlPoolDataWarehouseUserActivitiesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    dataWarehouseUserActivityName: Schema.Literals(["current"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataWarehouseUserActivities/{dataWarehouseUserActivityName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolDataWarehouseUserActivitiesGetInput>;

// Output Schema
export interface SqlPoolDataWarehouseUserActivitiesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolDataWarehouseUserActivitiesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolDataWarehouseUserActivitiesGetOutput>;

// The operation
/**
 * Get SQL pool user activities
 *
 * Gets the user activities of a SQL pool which includes running and suspended queries
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param dataWarehouseUserActivityName - The activity name of the Sql pool.
 */
export const SqlPoolDataWarehouseUserActivitiesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolDataWarehouseUserActivitiesGetInput,
    outputSchema: SqlPoolDataWarehouseUserActivitiesGetOutput,
  }));
// Input Schema
export interface SqlPoolGeoBackupPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  geoBackupPolicyName: "Default";
  properties: { state: "Disabled" | "Enabled"; storageType?: string };
  kind?: string;
  location?: string;
}
export const SqlPoolGeoBackupPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    geoBackupPolicyName: Schema.Literals(["Default"]).pipe(T.PathParam()),
    properties: Schema.Struct({
      state: Schema.Literals(["Disabled", "Enabled"]),
      storageType: Schema.optional(Schema.String),
    }),
    kind: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/geoBackupPolicies/{geoBackupPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolGeoBackupPoliciesCreateOrUpdateInput>;

// Output Schema
export interface SqlPoolGeoBackupPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolGeoBackupPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolGeoBackupPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Updates a SQL Pool geo backup policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param geoBackupPolicyName - The name of the geo backup policy.
 */
export const SqlPoolGeoBackupPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolGeoBackupPoliciesCreateOrUpdateInput,
    outputSchema: SqlPoolGeoBackupPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlPoolGeoBackupPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  geoBackupPolicyName: "Default";
}
export const SqlPoolGeoBackupPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    geoBackupPolicyName: Schema.Literals(["Default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/geoBackupPolicies/{geoBackupPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolGeoBackupPoliciesGetInput>;

// Output Schema
export interface SqlPoolGeoBackupPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolGeoBackupPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolGeoBackupPoliciesGetOutput>;

// The operation
/**
 * Get a SQL pool geo backup policy
 *
 * Get the specified SQL pool geo backup policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param geoBackupPolicyName - The name of the geo backup policy.
 */
export const SqlPoolGeoBackupPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolGeoBackupPoliciesGetInput,
    outputSchema: SqlPoolGeoBackupPoliciesGetOutput,
  }),
);
// Input Schema
export interface SqlPoolGeoBackupPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolGeoBackupPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/geoBackupPolicies",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolGeoBackupPoliciesListInput>;

// Output Schema
export interface SqlPoolGeoBackupPoliciesListOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const SqlPoolGeoBackupPoliciesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SqlPoolGeoBackupPoliciesListOutput>;

// The operation
/**
 * List SQL pool geo backup policies
 *
 * Get list of SQL pool geo backup policies
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolGeoBackupPoliciesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolGeoBackupPoliciesListInput,
    outputSchema: SqlPoolGeoBackupPoliciesListOutput,
  }));
// Input Schema
export interface SqlPoolMaintenanceWindowOptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  maintenanceWindowOptionsName: string;
}
export const SqlPoolMaintenanceWindowOptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    maintenanceWindowOptionsName: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/maintenanceWindowOptions/current",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolMaintenanceWindowOptionsGetInput>;

// Output Schema
export interface SqlPoolMaintenanceWindowOptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolMaintenanceWindowOptionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolMaintenanceWindowOptionsGetOutput>;

// The operation
/**
 * SQL pool's available maintenance windows.
 *
 * Get list of SQL pool's available maintenance windows.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param maintenanceWindowOptionsName - Maintenance window options name.
 */
export const SqlPoolMaintenanceWindowOptionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolMaintenanceWindowOptionsGetInput,
    outputSchema: SqlPoolMaintenanceWindowOptionsGetOutput,
  }));
// Input Schema
export interface SqlPoolMaintenanceWindowsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  maintenanceWindowName: string;
  properties?: {
    timeRanges?: {
      dayOfWeek?:
        | "Sunday"
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday";
      startTime?: string;
      duration?: string;
    }[];
  };
}
export const SqlPoolMaintenanceWindowsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    maintenanceWindowName: Schema.String,
    properties: Schema.optional(
      Schema.Struct({
        timeRanges: Schema.optional(
          Schema.Array(
            Schema.Struct({
              dayOfWeek: Schema.optional(
                Schema.Literals([
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ]),
              ),
              startTime: Schema.optional(Schema.String),
              duration: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/maintenancewindows/current",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolMaintenanceWindowsCreateOrUpdateInput>;

// Output Schema
export type SqlPoolMaintenanceWindowsCreateOrUpdateOutput = void;
export const SqlPoolMaintenanceWindowsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolMaintenanceWindowsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Sql pool's maintenance windows settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param maintenanceWindowName - Maintenance window name.
 */
export const SqlPoolMaintenanceWindowsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolMaintenanceWindowsCreateOrUpdateInput,
    outputSchema: SqlPoolMaintenanceWindowsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlPoolMaintenanceWindowsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  maintenanceWindowName: string;
}
export const SqlPoolMaintenanceWindowsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    maintenanceWindowName: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/maintenancewindows/current",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolMaintenanceWindowsGetInput>;

// Output Schema
export interface SqlPoolMaintenanceWindowsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolMaintenanceWindowsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolMaintenanceWindowsGetOutput>;

// The operation
/**
 * Get a SQL pool's Maintenance Windows.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param maintenanceWindowName - Maintenance window name.
 */
export const SqlPoolMaintenanceWindowsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolMaintenanceWindowsGetInput,
    outputSchema: SqlPoolMaintenanceWindowsGetOutput,
  }));
// Input Schema
export interface SqlPoolOperationResultsGetLocationHeaderResultInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  operationId: string;
}
export const SqlPoolOperationResultsGetLocationHeaderResultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/operationResults/{operationId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolOperationResultsGetLocationHeaderResultInput>;

// Output Schema
export interface SqlPoolOperationResultsGetLocationHeaderResultOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolOperationResultsGetLocationHeaderResultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolOperationResultsGetLocationHeaderResultOutput>;

// The operation
/**
 * Get SQL pool operation status
 *
 * Get the status of a SQL pool operation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param operationId - Operation ID
 */
export const SqlPoolOperationResultsGetLocationHeaderResult =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolOperationResultsGetLocationHeaderResultInput,
    outputSchema: SqlPoolOperationResultsGetLocationHeaderResultOutput,
  }));
// Input Schema
export interface SqlPoolOperationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolOperationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/operations",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolOperationsListInput>;

// Output Schema
export interface SqlPoolOperationsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolOperationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolOperationsListOutput>;

// The operation
/**
 * Gets a list of operations performed on the SQL pool
 *
 * Gets a list of operations performed on the SQL pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolOperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolOperationsListInput,
    outputSchema: SqlPoolOperationsListOutput,
  }),
);
// Input Schema
export interface SqlPoolRecommendedSensitivityLabelsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  operations?: { id?: string; name?: string; type?: string }[];
}
export const SqlPoolRecommendedSensitivityLabelsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/recommendedSensitivityLabels",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolRecommendedSensitivityLabelsUpdateInput>;

// Output Schema
export type SqlPoolRecommendedSensitivityLabelsUpdateOutput = void;
export const SqlPoolRecommendedSensitivityLabelsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolRecommendedSensitivityLabelsUpdateOutput>;

// The operation
/**
 * Update recommended sensitivity labels states of a given SQL Pool using an operations batch.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolRecommendedSensitivityLabelsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolRecommendedSensitivityLabelsUpdateInput,
    outputSchema: SqlPoolRecommendedSensitivityLabelsUpdateOutput,
  }));
// Input Schema
export interface SqlPoolReplicationLinksGetByNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  linkId: string;
}
export const SqlPoolReplicationLinksGetByNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    linkId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/replicationLinks/{linkId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolReplicationLinksGetByNameInput>;

// Output Schema
export interface SqlPoolReplicationLinksGetByNameOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolReplicationLinksGetByNameOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolReplicationLinksGetByNameOutput>;

// The operation
/**
 * Get SQL pool replication link by name
 *
 * Get SQL pool replication link by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param linkId - The ID of the replication link.
 */
export const SqlPoolReplicationLinksGetByName =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolReplicationLinksGetByNameInput,
    outputSchema: SqlPoolReplicationLinksGetByNameOutput,
  }));
// Input Schema
export interface SqlPoolReplicationLinksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolReplicationLinksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/replicationLinks",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolReplicationLinksListInput>;

// Output Schema
export interface SqlPoolReplicationLinksListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolReplicationLinksListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolReplicationLinksListOutput>;

// The operation
/**
 * Get SQL pool replication links
 *
 * Lists a Sql pool's replication links.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolReplicationLinksList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolReplicationLinksListInput,
    outputSchema: SqlPoolReplicationLinksListOutput,
  }),
);
// Input Schema
export interface SqlPoolRestorePointsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  restorePointLabel: string;
}
export const SqlPoolRestorePointsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    restorePointLabel: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/restorePoints",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolRestorePointsCreateInput>;

// Output Schema
export interface SqlPoolRestorePointsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolRestorePointsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolRestorePointsCreateOutput>;

// The operation
/**
 * Creates a restore point for a data warehouse.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolRestorePointsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolRestorePointsCreateInput,
    outputSchema: SqlPoolRestorePointsCreateOutput,
  }),
);
// Input Schema
export interface SqlPoolRestorePointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  restorePointName: string;
}
export const SqlPoolRestorePointsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    restorePointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/restorePoints/{restorePointName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolRestorePointsDeleteInput>;

// Output Schema
export type SqlPoolRestorePointsDeleteOutput = void;
export const SqlPoolRestorePointsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolRestorePointsDeleteOutput>;

// The operation
/**
 * Deletes a restore point.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param restorePointName - The name of the restore point.
 */
export const SqlPoolRestorePointsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolRestorePointsDeleteInput,
    outputSchema: SqlPoolRestorePointsDeleteOutput,
  }),
);
// Input Schema
export interface SqlPoolRestorePointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  restorePointName: string;
}
export const SqlPoolRestorePointsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    restorePointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/restorePoints/{restorePointName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolRestorePointsGetInput>;

// Output Schema
export interface SqlPoolRestorePointsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolRestorePointsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolRestorePointsGetOutput>;

// The operation
/**
 * Gets a restore point.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param restorePointName - The name of the restore point.
 */
export const SqlPoolRestorePointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolRestorePointsGetInput,
    outputSchema: SqlPoolRestorePointsGetOutput,
  }),
);
// Input Schema
export interface SqlPoolRestorePointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolRestorePointsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/restorePoints",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolRestorePointsListInput>;

// Output Schema
export interface SqlPoolRestorePointsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolRestorePointsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolRestorePointsListOutput>;

// The operation
/**
 * Get SQL pool backup
 *
 * Get SQL pool backup information
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolRestorePointsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolRestorePointsListInput,
    outputSchema: SqlPoolRestorePointsListOutput,
  }),
);
// Input Schema
export interface SqlPoolSchemasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  schemaName: string;
}
export const SqlPoolSchemasGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<SqlPoolSchemasGetInput>;

// Output Schema
export interface SqlPoolSchemasGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolSchemasGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolSchemasGetOutput>;

// The operation
/**
 * Get Sql Pool schema
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param schemaName - The name of the schema.
 */
export const SqlPoolSchemasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolSchemasGetInput,
  outputSchema: SqlPoolSchemasGetOutput,
}));
// Input Schema
export interface SqlPoolSchemasListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  $filter?: string;
}
export const SqlPoolSchemasListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSchemasListInput>;

// Output Schema
export interface SqlPoolSchemasListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolSchemasListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolSchemasListOutput>;

// The operation
/**
 * Gets schemas of a given SQL pool
 *
 * Gets schemas of a given SQL pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param $filter - An OData filter expression that filters elements in the collection.
 */
export const SqlPoolSchemasList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolSchemasListInput,
  outputSchema: SqlPoolSchemasListOutput,
}));
// Input Schema
export interface SqlPoolsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  sku?: { tier?: string; name?: string; capacity?: number };
  properties?: {
    maxSizeBytes?: number;
    collation?: string;
    sourceDatabaseId?: string;
    recoverableDatabaseId?: string;
    provisioningState?: string;
    status?: string;
    restorePointInTime?: string;
    createMode?: "Default" | "PointInTimeRestore" | "Recovery" | "Restore";
    creationDate?: string;
    storageAccountType?: "GRS" | "LRS";
    sourceDatabaseDeletionDate?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const SqlPoolsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  sqlPoolName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      tier: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      maxSizeBytes: Schema.optional(Schema.Number),
      collation: Schema.optional(Schema.String),
      sourceDatabaseId: Schema.optional(Schema.String),
      recoverableDatabaseId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      restorePointInTime: Schema.optional(Schema.String),
      createMode: Schema.optional(
        Schema.Literals([
          "Default",
          "PointInTimeRestore",
          "Recovery",
          "Restore",
        ]),
      ),
      creationDate: Schema.optional(Schema.String),
      storageAccountType: Schema.optional(Schema.Literals(["GRS", "LRS"])),
      sourceDatabaseDeletionDate: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<SqlPoolsCreateInput>;

// Output Schema
export interface SqlPoolsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SqlPoolsCreateOutput>;

// The operation
/**
 * Create SQL pool
 *
 * Create a SQL pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolsCreateInput,
  outputSchema: SqlPoolsCreateOutput,
}));
// Input Schema
export interface SqlPoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  sqlPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<SqlPoolsDeleteInput>;

// Output Schema
export interface SqlPoolsDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SqlPoolsDeleteOutput>;

// The operation
/**
 * Delete SQL pool
 *
 * Delete a SQL pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolsDeleteInput,
  outputSchema: SqlPoolsDeleteOutput,
}));
// Input Schema
export interface SqlPoolSecurityAlertPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  securityAlertPolicyName: "default";
  properties?: {
    state: "New" | "Enabled" | "Disabled";
    disabledAlerts?: string[];
    emailAddresses?: string[];
    emailAccountAdmins?: boolean;
    storageEndpoint?: string;
    storageAccountAccessKey?: string;
    retentionDays?: number;
    creationTime?: string;
  };
}
export const SqlPoolSecurityAlertPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    securityAlertPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        state: Schema.Literals(["New", "Enabled", "Disabled"]),
        disabledAlerts: Schema.optional(Schema.Array(Schema.String)),
        emailAddresses: Schema.optional(Schema.Array(Schema.String)),
        emailAccountAdmins: Schema.optional(Schema.Boolean),
        storageEndpoint: Schema.optional(Schema.String),
        storageAccountAccessKey: Schema.optional(Schema.String),
        retentionDays: Schema.optional(Schema.Number),
        creationTime: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/securityAlertPolicies/{securityAlertPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSecurityAlertPoliciesCreateOrUpdateInput>;

// Output Schema
export interface SqlPoolSecurityAlertPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolSecurityAlertPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolSecurityAlertPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Sql pool's security alert policy
 *
 * Create or update a Sql pool's security alert policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param securityAlertPolicyName - The name of the security alert policy.
 */
export const SqlPoolSecurityAlertPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolSecurityAlertPoliciesCreateOrUpdateInput,
    outputSchema: SqlPoolSecurityAlertPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlPoolSecurityAlertPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  securityAlertPolicyName: "default";
}
export const SqlPoolSecurityAlertPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    securityAlertPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/securityAlertPolicies/{securityAlertPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSecurityAlertPoliciesGetInput>;

// Output Schema
export interface SqlPoolSecurityAlertPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolSecurityAlertPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolSecurityAlertPoliciesGetOutput>;

// The operation
/**
 * Get a Sql pool's security alert policy
 *
 * Get a Sql pool's security alert policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param securityAlertPolicyName - The name of the security alert policy.
 */
export const SqlPoolSecurityAlertPoliciesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolSecurityAlertPoliciesGetInput,
    outputSchema: SqlPoolSecurityAlertPoliciesGetOutput,
  }));
// Input Schema
export interface SqlPoolSecurityAlertPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolSecurityAlertPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/securityAlertPolicies",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSecurityAlertPoliciesListInput>;

// Output Schema
export interface SqlPoolSecurityAlertPoliciesListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolSecurityAlertPoliciesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolSecurityAlertPoliciesListOutput>;

// The operation
/**
 * List Sql pool's security alert policies
 *
 * Get a list of Sql pool's security alert policies.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolSecurityAlertPoliciesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolSecurityAlertPoliciesListInput,
    outputSchema: SqlPoolSecurityAlertPoliciesListOutput,
  }));
// Input Schema
export interface SqlPoolSensitivityLabelsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  schemaName: string;
  tableName: string;
  columnName: string;
  sensitivityLabelSource: "current";
  properties?: {
    schemaName?: string;
    tableName?: string;
    columnName?: string;
    labelName?: string;
    labelId?: string;
    informationType?: string;
    informationTypeId?: string;
    isDisabled?: boolean;
    rank?: "None" | "Low" | "Medium" | "High" | "Critical";
  };
  managedBy?: string;
}
export const SqlPoolSensitivityLabelsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    columnName: Schema.String.pipe(T.PathParam()),
    sensitivityLabelSource: Schema.Literals(["current"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        schemaName: Schema.optional(Schema.String),
        tableName: Schema.optional(Schema.String),
        columnName: Schema.optional(Schema.String),
        labelName: Schema.optional(Schema.String),
        labelId: Schema.optional(Schema.String),
        informationType: Schema.optional(Schema.String),
        informationTypeId: Schema.optional(Schema.String),
        isDisabled: Schema.optional(Schema.Boolean),
        rank: Schema.optional(
          Schema.Literals(["None", "Low", "Medium", "High", "Critical"]),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSensitivityLabelsCreateOrUpdateInput>;

// Output Schema
export interface SqlPoolSensitivityLabelsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolSensitivityLabelsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolSensitivityLabelsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the sensitivity label of a given column in a Sql pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param schemaName - The name of the schema.
 * @param tableName - The name of the table.
 * @param columnName - The name of the column.
 * @param sensitivityLabelSource - The source of the sensitivity label.
 */
export const SqlPoolSensitivityLabelsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolSensitivityLabelsCreateOrUpdateInput,
    outputSchema: SqlPoolSensitivityLabelsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlPoolSensitivityLabelsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  schemaName: string;
  tableName: string;
  columnName: string;
  sensitivityLabelSource: "current";
}
export const SqlPoolSensitivityLabelsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    columnName: Schema.String.pipe(T.PathParam()),
    sensitivityLabelSource: Schema.Literals(["current"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSensitivityLabelsDeleteInput>;

// Output Schema
export type SqlPoolSensitivityLabelsDeleteOutput = void;
export const SqlPoolSensitivityLabelsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolSensitivityLabelsDeleteOutput>;

// The operation
/**
 * Deletes the sensitivity label of a given column in a Sql pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param schemaName - The name of the schema.
 * @param tableName - The name of the table.
 * @param columnName - The name of the column.
 * @param sensitivityLabelSource - The source of the sensitivity label.
 */
export const SqlPoolSensitivityLabelsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolSensitivityLabelsDeleteInput,
    outputSchema: SqlPoolSensitivityLabelsDeleteOutput,
  }));
// Input Schema
export interface SqlPoolSensitivityLabelsDisableRecommendationInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  schemaName: string;
  tableName: string;
  columnName: string;
  sensitivityLabelSource: "recommended";
}
export const SqlPoolSensitivityLabelsDisableRecommendationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    columnName: Schema.String.pipe(T.PathParam()),
    sensitivityLabelSource: Schema.Literals(["recommended"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/disable",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSensitivityLabelsDisableRecommendationInput>;

// Output Schema
export type SqlPoolSensitivityLabelsDisableRecommendationOutput = void;
export const SqlPoolSensitivityLabelsDisableRecommendationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolSensitivityLabelsDisableRecommendationOutput>;

// The operation
/**
 * Disables sensitivity recommendations on a given column
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param schemaName - The name of the schema.
 * @param tableName - The name of the table.
 * @param columnName - The name of the column.
 * @param sensitivityLabelSource - The source of the sensitivity label.
 */
export const SqlPoolSensitivityLabelsDisableRecommendation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolSensitivityLabelsDisableRecommendationInput,
    outputSchema: SqlPoolSensitivityLabelsDisableRecommendationOutput,
  }));
// Input Schema
export interface SqlPoolSensitivityLabelsEnableRecommendationInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  schemaName: string;
  tableName: string;
  columnName: string;
  sensitivityLabelSource: "recommended";
}
export const SqlPoolSensitivityLabelsEnableRecommendationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    columnName: Schema.String.pipe(T.PathParam()),
    sensitivityLabelSource: Schema.Literals(["recommended"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/enable",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSensitivityLabelsEnableRecommendationInput>;

// Output Schema
export type SqlPoolSensitivityLabelsEnableRecommendationOutput = void;
export const SqlPoolSensitivityLabelsEnableRecommendationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolSensitivityLabelsEnableRecommendationOutput>;

// The operation
/**
 * Enables sensitivity recommendations on a given column (recommendations are enabled by default on all columns)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param schemaName - The name of the schema.
 * @param tableName - The name of the table.
 * @param columnName - The name of the column.
 * @param sensitivityLabelSource - The source of the sensitivity label.
 */
export const SqlPoolSensitivityLabelsEnableRecommendation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolSensitivityLabelsEnableRecommendationInput,
    outputSchema: SqlPoolSensitivityLabelsEnableRecommendationOutput,
  }));
// Input Schema
export interface SqlPoolSensitivityLabelsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  schemaName: string;
  tableName: string;
  columnName: string;
  sensitivityLabelSource: "current" | "recommended";
}
export const SqlPoolSensitivityLabelsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    columnName: Schema.String.pipe(T.PathParam()),
    sensitivityLabelSource: Schema.Literals(["current", "recommended"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSensitivityLabelsGetInput>;

// Output Schema
export interface SqlPoolSensitivityLabelsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolSensitivityLabelsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolSensitivityLabelsGetOutput>;

// The operation
/**
 * Gets the sensitivity label of a given column
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param schemaName - The name of the schema.
 * @param tableName - The name of the table.
 * @param columnName - The name of the column.
 * @param sensitivityLabelSource - The source of the sensitivity label.
 */
export const SqlPoolSensitivityLabelsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolSensitivityLabelsGetInput,
    outputSchema: SqlPoolSensitivityLabelsGetOutput,
  }),
);
// Input Schema
export interface SqlPoolSensitivityLabelsListCurrentInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  $filter?: string;
}
export const SqlPoolSensitivityLabelsListCurrentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/currentSensitivityLabels",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSensitivityLabelsListCurrentInput>;

// Output Schema
export interface SqlPoolSensitivityLabelsListCurrentOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolSensitivityLabelsListCurrentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolSensitivityLabelsListCurrentOutput>;

// The operation
/**
 * Gets SQL pool sensitivity labels
 *
 * Gets SQL pool sensitivity labels.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param $filter - An OData filter expression that filters elements in the collection.
 */
export const SqlPoolSensitivityLabelsListCurrent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolSensitivityLabelsListCurrentInput,
    outputSchema: SqlPoolSensitivityLabelsListCurrentOutput,
  }));
// Input Schema
export interface SqlPoolSensitivityLabelsListRecommendedInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  includeDisabledRecommendations?: boolean;
  $skipToken?: string;
  $filter?: string;
}
export const SqlPoolSensitivityLabelsListRecommendedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    includeDisabledRecommendations: Schema.optional(Schema.Boolean),
    $skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/recommendedSensitivityLabels",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSensitivityLabelsListRecommendedInput>;

// Output Schema
export interface SqlPoolSensitivityLabelsListRecommendedOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolSensitivityLabelsListRecommendedOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolSensitivityLabelsListRecommendedOutput>;

// The operation
/**
 * Gets sensitivity labels of a given SQL pool
 *
 * Gets sensitivity labels of a given SQL pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param includeDisabledRecommendations - Specifies whether to include disabled recommendations or not.
 * @param $skipToken - An OData query option to indicate how many elements to skip in the collection.
 * @param $filter - An OData filter expression that filters elements in the collection.
 */
export const SqlPoolSensitivityLabelsListRecommended =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolSensitivityLabelsListRecommendedInput,
    outputSchema: SqlPoolSensitivityLabelsListRecommendedOutput,
  }));
// Input Schema
export interface SqlPoolSensitivityLabelsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  operations?: { id?: string; name?: string; type?: string }[];
}
export const SqlPoolSensitivityLabelsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/currentSensitivityLabels",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolSensitivityLabelsUpdateInput>;

// Output Schema
export type SqlPoolSensitivityLabelsUpdateOutput = void;
export const SqlPoolSensitivityLabelsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolSensitivityLabelsUpdateOutput>;

// The operation
/**
 * Update sensitivity labels of a given SQL Pool using an operations batch.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolSensitivityLabelsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolSensitivityLabelsUpdateInput,
    outputSchema: SqlPoolSensitivityLabelsUpdateOutput,
  }));
// Input Schema
export interface SqlPoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  sqlPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<SqlPoolsGetInput>;

// Output Schema
export interface SqlPoolsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SqlPoolsGetOutput>;

// The operation
/**
 * Get SQL pool
 *
 * Get SQL pool properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolsGetInput,
  outputSchema: SqlPoolsGetOutput,
}));
// Input Schema
export interface SqlPoolsListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const SqlPoolsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolsListByWorkspaceInput>;

// Output Schema
export interface SqlPoolsListByWorkspaceOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const SqlPoolsListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SqlPoolsListByWorkspaceOutput>;

// The operation
/**
 * List SQL pools
 *
 * List all SQL pools
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const SqlPoolsListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolsListByWorkspaceInput,
    outputSchema: SqlPoolsListByWorkspaceOutput,
  }),
);
// Input Schema
export interface SqlPoolsPauseInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolsPauseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  sqlPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/pause",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<SqlPoolsPauseInput>;

// Output Schema
export interface SqlPoolsPauseOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolsPauseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SqlPoolsPauseOutput>;

// The operation
/**
 * Pause SQL pool
 *
 * Pause a SQL pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolsPause = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolsPauseInput,
  outputSchema: SqlPoolsPauseOutput,
}));
// Input Schema
export interface SqlPoolsResumeInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolsResumeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  sqlPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/resume",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<SqlPoolsResumeInput>;

// Output Schema
export interface SqlPoolsResumeOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolsResumeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SqlPoolsResumeOutput>;

// The operation
/**
 * Resume SQL pool
 *
 * Resume a SQL pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolsResume = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolsResumeInput,
  outputSchema: SqlPoolsResumeOutput,
}));
// Input Schema
export interface SqlPoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  tags?: Record<string, string>;
  location?: string;
  sku?: { tier?: string; name?: string; capacity?: number };
  properties?: {
    maxSizeBytes?: number;
    collation?: string;
    sourceDatabaseId?: string;
    recoverableDatabaseId?: string;
    provisioningState?: string;
    status?: string;
    restorePointInTime?: string;
    createMode?: "Default" | "PointInTimeRestore" | "Recovery" | "Restore";
    creationDate?: string;
    storageAccountType?: "GRS" | "LRS";
    sourceDatabaseDeletionDate?: string;
  };
}
export const SqlPoolsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  sqlPoolName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  sku: Schema.optional(
    Schema.Struct({
      tier: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      maxSizeBytes: Schema.optional(Schema.Number),
      collation: Schema.optional(Schema.String),
      sourceDatabaseId: Schema.optional(Schema.String),
      recoverableDatabaseId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      restorePointInTime: Schema.optional(Schema.String),
      createMode: Schema.optional(
        Schema.Literals([
          "Default",
          "PointInTimeRestore",
          "Recovery",
          "Restore",
        ]),
      ),
      creationDate: Schema.optional(Schema.String),
      storageAccountType: Schema.optional(Schema.Literals(["GRS", "LRS"])),
      sourceDatabaseDeletionDate: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<SqlPoolsUpdateInput>;

// Output Schema
export interface SqlPoolsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SqlPoolsUpdateOutput>;

// The operation
/**
 * Update SQL pool
 *
 * Apply a partial update to a SQL pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolsUpdateInput,
  outputSchema: SqlPoolsUpdateOutput,
}));
// Input Schema
export interface SqlPoolTableColumnsListByTableNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  schemaName: string;
  tableName: string;
  $filter?: string;
}
export const SqlPoolTableColumnsListByTableNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolTableColumnsListByTableNameInput>;

// Output Schema
export interface SqlPoolTableColumnsListByTableNameOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolTableColumnsListByTableNameOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolTableColumnsListByTableNameOutput>;

// The operation
/**
 * Gets columns in a given table in a SQL pool
 *
 * Gets columns in a given table in a SQL pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param schemaName - The name of the schema.
 * @param tableName - The name of the table.
 * @param $filter - An OData filter expression that filters elements in the collection.
 */
export const SqlPoolTableColumnsListByTableName =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolTableColumnsListByTableNameInput,
    outputSchema: SqlPoolTableColumnsListByTableNameOutput,
  }));
// Input Schema
export interface SqlPoolTablesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  schemaName: string;
  tableName: string;
}
export const SqlPoolTablesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  sqlPoolName: Schema.String.pipe(T.PathParam()),
  schemaName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<SqlPoolTablesGetInput>;

// Output Schema
export interface SqlPoolTablesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolTablesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<SqlPoolTablesGetOutput>;

// The operation
/**
 * Get Sql pool table
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param schemaName - The name of the schema.
 * @param tableName - The name of the table.
 */
export const SqlPoolTablesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolTablesGetInput,
  outputSchema: SqlPoolTablesGetOutput,
}));
// Input Schema
export interface SqlPoolTablesListBySchemaInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  schemaName: string;
  $filter?: string;
}
export const SqlPoolTablesListBySchemaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolTablesListBySchemaInput>;

// Output Schema
export interface SqlPoolTablesListBySchemaOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolTablesListBySchemaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolTablesListBySchemaOutput>;

// The operation
/**
 * Gets tables of a given schema in a SQL pool
 *
 * Gets tables of a given schema in a SQL pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param schemaName - The name of the schema.
 * @param $filter - An OData filter expression that filters elements in the collection.
 */
export const SqlPoolTablesListBySchema = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolTablesListBySchemaInput,
    outputSchema: SqlPoolTablesListBySchemaOutput,
  }),
);
// Input Schema
export interface SqlPoolTransparentDataEncryptionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  transparentDataEncryptionName: "current";
  location?: string;
  properties?: { status?: "Enabled" | "Disabled" };
}
export const SqlPoolTransparentDataEncryptionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    transparentDataEncryptionName: Schema.Literals(["current"]).pipe(
      T.PathParam(),
    ),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/transparentDataEncryption/{transparentDataEncryptionName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolTransparentDataEncryptionsCreateOrUpdateInput>;

// Output Schema
export interface SqlPoolTransparentDataEncryptionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolTransparentDataEncryptionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolTransparentDataEncryptionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Sql pool's transparent data encryption configuration
 *
 * Creates or updates a Sql pool's transparent data encryption configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param transparentDataEncryptionName - The name of the transparent data encryption configuration.
 */
export const SqlPoolTransparentDataEncryptionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolTransparentDataEncryptionsCreateOrUpdateInput,
    outputSchema: SqlPoolTransparentDataEncryptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlPoolTransparentDataEncryptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  transparentDataEncryptionName: "current";
}
export const SqlPoolTransparentDataEncryptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    transparentDataEncryptionName: Schema.Literals(["current"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/transparentDataEncryption/{transparentDataEncryptionName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolTransparentDataEncryptionsGetInput>;

// Output Schema
export interface SqlPoolTransparentDataEncryptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolTransparentDataEncryptionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolTransparentDataEncryptionsGetOutput>;

// The operation
/**
 * Get a SQL pool's transparent data encryption configuration
 *
 * Get a SQL pool's transparent data encryption configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param transparentDataEncryptionName - The name of the transparent data encryption configuration.
 */
export const SqlPoolTransparentDataEncryptionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolTransparentDataEncryptionsGetInput,
    outputSchema: SqlPoolTransparentDataEncryptionsGetOutput,
  }));
// Input Schema
export interface SqlPoolTransparentDataEncryptionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolTransparentDataEncryptionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/transparentDataEncryption",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolTransparentDataEncryptionsListInput>;

// Output Schema
export interface SqlPoolTransparentDataEncryptionsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolTransparentDataEncryptionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolTransparentDataEncryptionsListOutput>;

// The operation
/**
 * SQL pool's transparent data encryption configurations
 *
 * Get list of SQL pool's transparent data encryption configurations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolTransparentDataEncryptionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolTransparentDataEncryptionsListInput,
    outputSchema: SqlPoolTransparentDataEncryptionsListOutput,
  }));
// Input Schema
export interface SqlPoolUsagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolUsagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/usages",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<SqlPoolUsagesListInput>;

// Output Schema
export interface SqlPoolUsagesListOutput {
  value: {
    name?: string;
    resourceName?: string;
    displayName?: string;
    currentValue?: number;
    limit?: number;
    unit?: string;
    nextResetTime?: string;
  }[];
  nextLink?: string;
}
export const SqlPoolUsagesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        resourceName: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        currentValue: Schema.optional(Schema.Number),
        limit: Schema.optional(Schema.Number),
        unit: Schema.optional(Schema.String),
        nextResetTime: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolUsagesListOutput>;

// The operation
/**
 * Gets SQL pool usages
 *
 * Gets SQL pool usages.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolUsagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SqlPoolUsagesListInput,
  outputSchema: SqlPoolUsagesListOutput,
}));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentRuleBaselinesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  vulnerabilityAssessmentName: "default";
  ruleId: string;
  baselineName: "master" | "default";
  properties?: { baselineResults: { result: string[] }[] };
}
export const SqlPoolVulnerabilityAssessmentRuleBaselinesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
    ruleId: Schema.String.pipe(T.PathParam()),
    baselineName: Schema.Literals(["master", "default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        baselineResults: Schema.Array(
          Schema.Struct({
            result: Schema.Array(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}/rules/{ruleId}/baselines/{baselineName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentRuleBaselinesCreateOrUpdateInput>;

// Output Schema
export interface SqlPoolVulnerabilityAssessmentRuleBaselinesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolVulnerabilityAssessmentRuleBaselinesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentRuleBaselinesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Sql pool's vulnerability assessment rule baseline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 * @param ruleId - The vulnerability assessment rule ID.
 * @param baselineName - The name of the vulnerability assessment rule baseline (default implies a baseline on a Sql pool level rule and master for workspace level rule).
 */
export const SqlPoolVulnerabilityAssessmentRuleBaselinesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentRuleBaselinesCreateOrUpdateInput,
    outputSchema:
      SqlPoolVulnerabilityAssessmentRuleBaselinesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentRuleBaselinesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  vulnerabilityAssessmentName: "default";
  ruleId: string;
  baselineName: "master" | "default";
}
export const SqlPoolVulnerabilityAssessmentRuleBaselinesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
    ruleId: Schema.String.pipe(T.PathParam()),
    baselineName: Schema.Literals(["master", "default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}/rules/{ruleId}/baselines/{baselineName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentRuleBaselinesDeleteInput>;

// Output Schema
export type SqlPoolVulnerabilityAssessmentRuleBaselinesDeleteOutput = void;
export const SqlPoolVulnerabilityAssessmentRuleBaselinesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentRuleBaselinesDeleteOutput>;

// The operation
/**
 * Removes the database's vulnerability assessment rule baseline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 * @param ruleId - The vulnerability assessment rule ID.
 * @param baselineName - The name of the vulnerability assessment rule baseline (default implies a baseline on a Sql pool level rule and master for workspace level rule).
 */
export const SqlPoolVulnerabilityAssessmentRuleBaselinesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentRuleBaselinesDeleteInput,
    outputSchema: SqlPoolVulnerabilityAssessmentRuleBaselinesDeleteOutput,
  }));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentRuleBaselinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  vulnerabilityAssessmentName: "default";
  ruleId: string;
  baselineName: "master" | "default";
}
export const SqlPoolVulnerabilityAssessmentRuleBaselinesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
    ruleId: Schema.String.pipe(T.PathParam()),
    baselineName: Schema.Literals(["master", "default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}/rules/{ruleId}/baselines/{baselineName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentRuleBaselinesGetInput>;

// Output Schema
export interface SqlPoolVulnerabilityAssessmentRuleBaselinesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolVulnerabilityAssessmentRuleBaselinesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentRuleBaselinesGetOutput>;

// The operation
/**
 * Gets a SqlPool's vulnerability assessment rule baseline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 * @param ruleId - The vulnerability assessment rule ID.
 * @param baselineName - The name of the vulnerability assessment rule baseline (default implies a baseline on a Sql pool level rule and master for server level rule).
 */
export const SqlPoolVulnerabilityAssessmentRuleBaselinesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentRuleBaselinesGetInput,
    outputSchema: SqlPoolVulnerabilityAssessmentRuleBaselinesGetOutput,
  }));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentScansExportInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  vulnerabilityAssessmentName: "default";
  scanId: string;
}
export const SqlPoolVulnerabilityAssessmentScansExportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
    scanId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}/scans/{scanId}/export",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentScansExportInput>;

// Output Schema
export interface SqlPoolVulnerabilityAssessmentScansExportOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolVulnerabilityAssessmentScansExportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentScansExportOutput>;

// The operation
/**
 * Convert an existing scan result to a human readable format. If already exists nothing happens
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 * @param scanId - The vulnerability assessment scan Id of the scan to retrieve.
 */
export const SqlPoolVulnerabilityAssessmentScansExport =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentScansExportInput,
    outputSchema: SqlPoolVulnerabilityAssessmentScansExportOutput,
  }));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentScansGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  vulnerabilityAssessmentName: "default";
  scanId: string;
}
export const SqlPoolVulnerabilityAssessmentScansGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
    scanId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}/scans/{scanId}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentScansGetInput>;

// Output Schema
export interface SqlPoolVulnerabilityAssessmentScansGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolVulnerabilityAssessmentScansGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentScansGetOutput>;

// The operation
/**
 * Gets a vulnerability assessment scan record of a Sql pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 * @param scanId - The vulnerability assessment scan Id of the scan to retrieve.
 */
export const SqlPoolVulnerabilityAssessmentScansGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentScansGetInput,
    outputSchema: SqlPoolVulnerabilityAssessmentScansGetOutput,
  }));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentScansInitiateScanInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  vulnerabilityAssessmentName: "default";
  scanId: string;
}
export const SqlPoolVulnerabilityAssessmentScansInitiateScanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
    scanId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}/scans/{scanId}/initiateScan",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentScansInitiateScanInput>;

// Output Schema
export type SqlPoolVulnerabilityAssessmentScansInitiateScanOutput = void;
export const SqlPoolVulnerabilityAssessmentScansInitiateScanOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentScansInitiateScanOutput>;

// The operation
/**
 * Executes a Vulnerability Assessment database scan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 * @param scanId - The vulnerability assessment scan Id of the scan to retrieve.
 */
export const SqlPoolVulnerabilityAssessmentScansInitiateScan =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentScansInitiateScanInput,
    outputSchema: SqlPoolVulnerabilityAssessmentScansInitiateScanOutput,
  }));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentScansListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  vulnerabilityAssessmentName: "default";
}
export const SqlPoolVulnerabilityAssessmentScansListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}/scans",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentScansListInput>;

// Output Schema
export interface SqlPoolVulnerabilityAssessmentScansListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolVulnerabilityAssessmentScansListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentScansListOutput>;

// The operation
/**
 * Lists the vulnerability assessment scans of a SQL pool
 *
 * Lists the vulnerability assessment scans of a SQL pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 */
export const SqlPoolVulnerabilityAssessmentScansList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentScansListInput,
    outputSchema: SqlPoolVulnerabilityAssessmentScansListOutput,
  }));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  vulnerabilityAssessmentName: "default";
  properties?: {
    storageContainerPath?: string;
    storageContainerSasKey?: string;
    storageAccountAccessKey?: string;
    recurringScans?: {
      isEnabled?: boolean;
      emailSubscriptionAdmins?: boolean;
      emails?: string[];
    };
  };
}
export const SqlPoolVulnerabilityAssessmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
    properties: Schema.optional(
      Schema.Struct({
        storageContainerPath: Schema.optional(Schema.String),
        storageContainerSasKey: Schema.optional(Schema.String),
        storageAccountAccessKey: Schema.optional(Schema.String),
        recurringScans: Schema.optional(
          Schema.Struct({
            isEnabled: Schema.optional(Schema.Boolean),
            emailSubscriptionAdmins: Schema.optional(Schema.Boolean),
            emails: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentsCreateOrUpdateInput>;

// Output Schema
export interface SqlPoolVulnerabilityAssessmentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolVulnerabilityAssessmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the Sql pool vulnerability assessment
 *
 * Creates or updates the Sql pool vulnerability assessment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 */
export const SqlPoolVulnerabilityAssessmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentsCreateOrUpdateInput,
    outputSchema: SqlPoolVulnerabilityAssessmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  vulnerabilityAssessmentName: "default";
}
export const SqlPoolVulnerabilityAssessmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentsDeleteInput>;

// Output Schema
export type SqlPoolVulnerabilityAssessmentsDeleteOutput = void;
export const SqlPoolVulnerabilityAssessmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentsDeleteOutput>;

// The operation
/**
 * Removes the database's vulnerability assessment
 *
 * Removes the database's vulnerability assessment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 */
export const SqlPoolVulnerabilityAssessmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentsDeleteInput,
    outputSchema: SqlPoolVulnerabilityAssessmentsDeleteOutput,
  }));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  vulnerabilityAssessmentName: "default";
}
export const SqlPoolVulnerabilityAssessmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentsGetInput>;

// Output Schema
export interface SqlPoolVulnerabilityAssessmentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolVulnerabilityAssessmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentsGetOutput>;

// The operation
/**
 * Gets the Sql pool's vulnerability assessment
 *
 * Gets the Sql pool's vulnerability assessment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 */
export const SqlPoolVulnerabilityAssessmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentsGetInput,
    outputSchema: SqlPoolVulnerabilityAssessmentsGetOutput,
  }));
// Input Schema
export interface SqlPoolVulnerabilityAssessmentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolVulnerabilityAssessmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/vulnerabilityAssessments",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentsListInput>;

// Output Schema
export interface SqlPoolVulnerabilityAssessmentsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolVulnerabilityAssessmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolVulnerabilityAssessmentsListOutput>;

// The operation
/**
 * Lists the vulnerability assessment policies associated with a SQL pool
 *
 * Lists the vulnerability assessment policies associated with a SQL pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolVulnerabilityAssessmentsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolVulnerabilityAssessmentsListInput,
    outputSchema: SqlPoolVulnerabilityAssessmentsListOutput,
  }));
// Input Schema
export interface SqlPoolWorkloadClassifierCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  workloadGroupName: string;
  workloadClassifierName: string;
  properties?: {
    memberName: string;
    label?: string;
    context?: string;
    startTime?: string;
    endTime?: string;
    importance?: string;
  };
}
export const SqlPoolWorkloadClassifierCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    workloadGroupName: Schema.String.pipe(T.PathParam()),
    workloadClassifierName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        memberName: Schema.String,
        label: Schema.optional(Schema.String),
        context: Schema.optional(Schema.String),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.String),
        importance: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolWorkloadClassifierCreateOrUpdateInput>;

// Output Schema
export interface SqlPoolWorkloadClassifierCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolWorkloadClassifierCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolWorkloadClassifierCreateOrUpdateOutput>;

// The operation
/**
 * Create Or Update workload classifier
 *
 * Create Or Update workload classifier for a Sql pool's workload group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param workloadGroupName - The name of the workload group.
 * @param workloadClassifierName - The name of the workload classifier.
 */
export const SqlPoolWorkloadClassifierCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolWorkloadClassifierCreateOrUpdateInput,
    outputSchema: SqlPoolWorkloadClassifierCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlPoolWorkloadClassifierDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  workloadGroupName: string;
  workloadClassifierName: string;
}
export const SqlPoolWorkloadClassifierDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    workloadGroupName: Schema.String.pipe(T.PathParam()),
    workloadClassifierName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolWorkloadClassifierDeleteInput>;

// Output Schema
export type SqlPoolWorkloadClassifierDeleteOutput = void;
export const SqlPoolWorkloadClassifierDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolWorkloadClassifierDeleteOutput>;

// The operation
/**
 * Remove workload classifier
 *
 * Remove workload classifier of a Sql pool's workload group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param workloadGroupName - The name of the workload group.
 * @param workloadClassifierName - The name of the workload classifier.
 */
export const SqlPoolWorkloadClassifierDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolWorkloadClassifierDeleteInput,
    outputSchema: SqlPoolWorkloadClassifierDeleteOutput,
  }));
// Input Schema
export interface SqlPoolWorkloadClassifierGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  workloadGroupName: string;
  workloadClassifierName: string;
}
export const SqlPoolWorkloadClassifierGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    workloadGroupName: Schema.String.pipe(T.PathParam()),
    workloadClassifierName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolWorkloadClassifierGetInput>;

// Output Schema
export interface SqlPoolWorkloadClassifierGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolWorkloadClassifierGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolWorkloadClassifierGetOutput>;

// The operation
/**
 * Get workload classifier
 *
 * Get a workload classifier of Sql pool's workload group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param workloadGroupName - The name of the workload group.
 * @param workloadClassifierName - The name of the workload classifier.
 */
export const SqlPoolWorkloadClassifierGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolWorkloadClassifierGetInput,
    outputSchema: SqlPoolWorkloadClassifierGetOutput,
  }));
// Input Schema
export interface SqlPoolWorkloadClassifierListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  workloadGroupName: string;
}
export const SqlPoolWorkloadClassifierListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    workloadGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}/workloadClassifiers",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolWorkloadClassifierListInput>;

// Output Schema
export interface SqlPoolWorkloadClassifierListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolWorkloadClassifierListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolWorkloadClassifierListOutput>;

// The operation
/**
 * Sql pool's workload classifier
 *
 * Get list of  Sql pool's workload classifier for workload groups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param workloadGroupName - The name of the workload group.
 */
export const SqlPoolWorkloadClassifierList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolWorkloadClassifierListInput,
    outputSchema: SqlPoolWorkloadClassifierListOutput,
  }));
// Input Schema
export interface SqlPoolWorkloadGroupCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  workloadGroupName: string;
  properties?: {
    minResourcePercent: number;
    maxResourcePercent: number;
    minResourcePercentPerRequest: number;
    maxResourcePercentPerRequest?: number;
    importance?: string;
    queryExecutionTimeout?: number;
  };
}
export const SqlPoolWorkloadGroupCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    workloadGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        minResourcePercent: Schema.Number,
        maxResourcePercent: Schema.Number,
        minResourcePercentPerRequest: Schema.Number,
        maxResourcePercentPerRequest: Schema.optional(Schema.Number),
        importance: Schema.optional(Schema.String),
        queryExecutionTimeout: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolWorkloadGroupCreateOrUpdateInput>;

// Output Schema
export interface SqlPoolWorkloadGroupCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolWorkloadGroupCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolWorkloadGroupCreateOrUpdateOutput>;

// The operation
/**
 * Create Or Update workload group
 *
 * Create Or Update a Sql pool's workload group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param workloadGroupName - The name of the workload group.
 */
export const SqlPoolWorkloadGroupCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlPoolWorkloadGroupCreateOrUpdateInput,
    outputSchema: SqlPoolWorkloadGroupCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlPoolWorkloadGroupDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  workloadGroupName: string;
}
export const SqlPoolWorkloadGroupDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    workloadGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolWorkloadGroupDeleteInput>;

// Output Schema
export type SqlPoolWorkloadGroupDeleteOutput = void;
export const SqlPoolWorkloadGroupDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlPoolWorkloadGroupDeleteOutput>;

// The operation
/**
 * Remove workload group
 *
 * Remove Sql pool's workload group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param workloadGroupName - The name of the workload group.
 */
export const SqlPoolWorkloadGroupDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolWorkloadGroupDeleteInput,
    outputSchema: SqlPoolWorkloadGroupDeleteOutput,
  }),
);
// Input Schema
export interface SqlPoolWorkloadGroupGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
  workloadGroupName: string;
}
export const SqlPoolWorkloadGroupGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
    workloadGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups/{workloadGroupName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolWorkloadGroupGetInput>;

// Output Schema
export interface SqlPoolWorkloadGroupGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SqlPoolWorkloadGroupGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolWorkloadGroupGetOutput>;

// The operation
/**
 * Sql pool's workload group
 *
 * Get a Sql pool's workload group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 * @param workloadGroupName - The name of the workload group.
 */
export const SqlPoolWorkloadGroupGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolWorkloadGroupGetInput,
    outputSchema: SqlPoolWorkloadGroupGetOutput,
  }),
);
// Input Schema
export interface SqlPoolWorkloadGroupListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const SqlPoolWorkloadGroupListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/workloadGroups",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<SqlPoolWorkloadGroupListInput>;

// Output Schema
export interface SqlPoolWorkloadGroupListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SqlPoolWorkloadGroupListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlPoolWorkloadGroupListOutput>;

// The operation
/**
 * Sql pool's workload groups
 *
 * Get list of  Sql pool's workload groups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - SQL pool name
 */
export const SqlPoolWorkloadGroupList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlPoolWorkloadGroupListInput,
    outputSchema: SqlPoolWorkloadGroupListOutput,
  }),
);
// Input Schema
export interface WorkspaceAadAdminsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties?: {
    tenantId?: string;
    login?: string;
    administratorType?: string;
    sid?: string;
  };
}
export const WorkspaceAadAdminsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        login: Schema.optional(Schema.String),
        administratorType: Schema.optional(Schema.String),
        sid: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/administrators/activeDirectory",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceAadAdminsCreateOrUpdateInput>;

// Output Schema
export interface WorkspaceAadAdminsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceAadAdminsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceAadAdminsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a workspace active directory admin
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceAadAdminsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceAadAdminsCreateOrUpdateInput,
    outputSchema: WorkspaceAadAdminsCreateOrUpdateOutput,
  }));
// Input Schema
export interface WorkspaceAadAdminsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceAadAdminsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/administrators/activeDirectory",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceAadAdminsDeleteInput>;

// Output Schema
export type WorkspaceAadAdminsDeleteOutput = void;
export const WorkspaceAadAdminsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspaceAadAdminsDeleteOutput>;

// The operation
/**
 * Deletes a workspace active directory admin
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceAadAdminsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkspaceAadAdminsDeleteInput,
    outputSchema: WorkspaceAadAdminsDeleteOutput,
  }),
);
// Input Schema
export interface WorkspaceAadAdminsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceAadAdminsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/administrators/activeDirectory",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceAadAdminsGetInput>;

// Output Schema
export interface WorkspaceAadAdminsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceAadAdminsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceAadAdminsGetOutput>;

// The operation
/**
 * Gets a workspace active directory admin
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceAadAdminsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkspaceAadAdminsGetInput,
    outputSchema: WorkspaceAadAdminsGetOutput,
  }),
);
// Input Schema
export interface WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties?: {
    grantSqlControlToManagedIdentity?: {
      desiredState?: "Enabled" | "Disabled";
      actualState?:
        | "Enabling"
        | "Enabled"
        | "Disabling"
        | "Disabled"
        | "Unknown";
    };
  };
}
export const WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        grantSqlControlToManagedIdentity: Schema.optional(
          Schema.Struct({
            desiredState: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            actualState: Schema.optional(
              Schema.Literals([
                "Enabling",
                "Enabled",
                "Disabling",
                "Disabled",
                "Unknown",
              ]),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/managedIdentitySqlControlSettings/default",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateInput>;

// Output Schema
export interface WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Managed Identity Sql Control Settings
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateInput,
    outputSchema:
      WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateOutput,
  }));
// Input Schema
export interface WorkspaceManagedIdentitySqlControlSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceManagedIdentitySqlControlSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/managedIdentitySqlControlSettings/default",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedIdentitySqlControlSettingsGetInput>;

// Output Schema
export interface WorkspaceManagedIdentitySqlControlSettingsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedIdentitySqlControlSettingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedIdentitySqlControlSettingsGetOutput>;

// The operation
/**
 * Get Managed Identity Sql Control Settings
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceManagedIdentitySqlControlSettingsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedIdentitySqlControlSettingsGetInput,
    outputSchema: WorkspaceManagedIdentitySqlControlSettingsGetOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerBlobAuditingPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  blobAuditingPolicyName: "default";
  properties?: {
    state: "Enabled" | "Disabled";
    storageEndpoint?: string;
    storageAccountAccessKey?: string;
    retentionDays?: number;
    auditActionsAndGroups?: string[];
    storageAccountSubscriptionId?: string;
    isStorageSecondaryKeyInUse?: boolean;
    isAzureMonitorTargetEnabled?: boolean;
    queueDelayMs?: number;
    isDevopsAuditEnabled?: boolean;
  };
}
export const WorkspaceManagedSqlServerBlobAuditingPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    blobAuditingPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        state: Schema.Literals(["Enabled", "Disabled"]),
        storageEndpoint: Schema.optional(Schema.String),
        storageAccountAccessKey: Schema.optional(Schema.String),
        retentionDays: Schema.optional(Schema.Number),
        auditActionsAndGroups: Schema.optional(Schema.Array(Schema.String)),
        storageAccountSubscriptionId: Schema.optional(Schema.String),
        isStorageSecondaryKeyInUse: Schema.optional(Schema.Boolean),
        isAzureMonitorTargetEnabled: Schema.optional(Schema.Boolean),
        queueDelayMs: Schema.optional(Schema.Number),
        isDevopsAuditEnabled: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/auditingSettings/{blobAuditingPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerBlobAuditingPoliciesCreateOrUpdateInput>;

// Output Schema
export interface WorkspaceManagedSqlServerBlobAuditingPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerBlobAuditingPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerBlobAuditingPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update server's blob auditing policy.
 *
 * Create or Update a workspace managed sql server's blob auditing policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param blobAuditingPolicyName - The name of the blob auditing policy.
 */
export const WorkspaceManagedSqlServerBlobAuditingPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WorkspaceManagedSqlServerBlobAuditingPoliciesCreateOrUpdateInput,
    outputSchema:
      WorkspaceManagedSqlServerBlobAuditingPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerBlobAuditingPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  blobAuditingPolicyName: "default";
}
export const WorkspaceManagedSqlServerBlobAuditingPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    blobAuditingPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/auditingSettings/{blobAuditingPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerBlobAuditingPoliciesGetInput>;

// Output Schema
export interface WorkspaceManagedSqlServerBlobAuditingPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerBlobAuditingPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerBlobAuditingPoliciesGetOutput>;

// The operation
/**
 * Get server's blob auditing policy.
 *
 * Get a workspace managed sql server's blob auditing policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param blobAuditingPolicyName - The name of the blob auditing policy.
 */
export const WorkspaceManagedSqlServerBlobAuditingPoliciesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerBlobAuditingPoliciesGetInput,
    outputSchema: WorkspaceManagedSqlServerBlobAuditingPoliciesGetOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerBlobAuditingPoliciesListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceManagedSqlServerBlobAuditingPoliciesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/auditingSettings",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerBlobAuditingPoliciesListByWorkspaceInput>;

// Output Schema
export interface WorkspaceManagedSqlServerBlobAuditingPoliciesListByWorkspaceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const WorkspaceManagedSqlServerBlobAuditingPoliciesListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerBlobAuditingPoliciesListByWorkspaceOutput>;

// The operation
/**
 * List workspace server's blob auditing policies.
 *
 * List workspace managed sql server's blob auditing policies.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceManagedSqlServerBlobAuditingPoliciesListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WorkspaceManagedSqlServerBlobAuditingPoliciesListByWorkspaceInput,
    outputSchema:
      WorkspaceManagedSqlServerBlobAuditingPoliciesListByWorkspaceOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dedicatedSQLminimalTlsSettingsName: string;
}
export const WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dedicatedSQLminimalTlsSettingsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/dedicatedSQLminimalTlsSettings/{dedicatedSQLminimalTlsSettingsName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetInput>;

// Output Schema
export interface WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetOutput>;

// The operation
/**
 * Get server's minimal tls settings.
 *
 * Get workspace managed sql server's minimal tls settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dedicatedSQLminimalTlsSettingsName - The name of the dedicated sql minimal tls settings.
 */
export const WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetInput,
    outputSchema:
      WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/dedicatedSQLminimalTlsSettings",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListInput>;

// Output Schema
export interface WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOutput>;

// The operation
/**
 * List workspace server's minimal tls settings.
 *
 * List workspace managed sql server's minimal tls settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListInput,
    outputSchema:
      WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dedicatedSQLminimalTlsSettingsName: "default";
  location?: string;
  properties?: { minimalTlsVersion?: string };
}
export const WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dedicatedSQLminimalTlsSettingsName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        minimalTlsVersion: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/dedicatedSQLminimalTlsSettings/{dedicatedSQLminimalTlsSettingsName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateInput>;

// Output Schema
export interface WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateOutput>;

// The operation
/**
 * Update server's tls settings.
 *
 * Update workspace managed sql server's minimal tls settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dedicatedSQLminimalTlsSettingsName - The name of the dedicated sql minimal tls settings.
 */
export const WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateInput,
    outputSchema:
      WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  encryptionProtectorName: "current";
  kind?: string;
  location?: string;
  properties?: {
    subregion?: string;
    serverKeyName?: string;
    serverKeyType: "ServiceManaged" | "AzureKeyVault";
    uri?: string;
    thumbprint?: string;
  };
}
export const WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    encryptionProtectorName: Schema.Literals(["current"]).pipe(T.PathParam()),
    kind: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        subregion: Schema.optional(Schema.String),
        serverKeyName: Schema.optional(Schema.String),
        serverKeyType: Schema.Literals(["ServiceManaged", "AzureKeyVault"]),
        uri: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/encryptionProtector/{encryptionProtectorName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateInput>;

// Output Schema
export interface WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateOutput>;

// The operation
/**
 * Updates workspace server's encryption protector.
 *
 * Updates workspace managed sql server's encryption protector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param encryptionProtectorName - The name of the encryption protector.
 */
export const WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateInput,
    outputSchema:
      WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerEncryptionProtectorGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  encryptionProtectorName: "current";
}
export const WorkspaceManagedSqlServerEncryptionProtectorGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    encryptionProtectorName: Schema.Literals(["current"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/encryptionProtector/{encryptionProtectorName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerEncryptionProtectorGetInput>;

// Output Schema
export interface WorkspaceManagedSqlServerEncryptionProtectorGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerEncryptionProtectorGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerEncryptionProtectorGetOutput>;

// The operation
/**
 * Get workspace server's encryption protector.
 *
 * Get workspace managed sql server's encryption protector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param encryptionProtectorName - The name of the encryption protector.
 */
export const WorkspaceManagedSqlServerEncryptionProtectorGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerEncryptionProtectorGetInput,
    outputSchema: WorkspaceManagedSqlServerEncryptionProtectorGetOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerEncryptionProtectorListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceManagedSqlServerEncryptionProtectorListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/encryptionProtector",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerEncryptionProtectorListInput>;

// Output Schema
export interface WorkspaceManagedSqlServerEncryptionProtectorListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const WorkspaceManagedSqlServerEncryptionProtectorListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerEncryptionProtectorListOutput>;

// The operation
/**
 * Get list of encryption protectors for the server.
 *
 * Get list of encryption protectors for workspace managed sql server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceManagedSqlServerEncryptionProtectorList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerEncryptionProtectorListInput,
    outputSchema: WorkspaceManagedSqlServerEncryptionProtectorListOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerEncryptionProtectorRevalidateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  encryptionProtectorName: "current";
}
export const WorkspaceManagedSqlServerEncryptionProtectorRevalidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    encryptionProtectorName: Schema.Literals(["current"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/encryptionProtector/{encryptionProtectorName}/revalidate",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerEncryptionProtectorRevalidateInput>;

// Output Schema
export type WorkspaceManagedSqlServerEncryptionProtectorRevalidateOutput = void;
export const WorkspaceManagedSqlServerEncryptionProtectorRevalidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspaceManagedSqlServerEncryptionProtectorRevalidateOutput>;

// The operation
/**
 * Revalidates server's existing encryption protector.
 *
 * Revalidates workspace managed sql server's existing encryption protector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param encryptionProtectorName - The name of the encryption protector.
 */
export const WorkspaceManagedSqlServerEncryptionProtectorRevalidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerEncryptionProtectorRevalidateInput,
    outputSchema: WorkspaceManagedSqlServerEncryptionProtectorRevalidateOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  blobAuditingPolicyName: "default";
  properties?: {
    predicateExpression?: string;
    state: "Enabled" | "Disabled";
    storageEndpoint?: string;
    storageAccountAccessKey?: string;
    retentionDays?: number;
    auditActionsAndGroups?: string[];
    storageAccountSubscriptionId?: string;
    isStorageSecondaryKeyInUse?: boolean;
    isAzureMonitorTargetEnabled?: boolean;
    queueDelayMs?: number;
    isDevopsAuditEnabled?: boolean;
  };
}
export const WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    blobAuditingPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        predicateExpression: Schema.optional(Schema.String),
        state: Schema.Literals(["Enabled", "Disabled"]),
        storageEndpoint: Schema.optional(Schema.String),
        storageAccountAccessKey: Schema.optional(Schema.String),
        retentionDays: Schema.optional(Schema.Number),
        auditActionsAndGroups: Schema.optional(Schema.Array(Schema.String)),
        storageAccountSubscriptionId: Schema.optional(Schema.String),
        isStorageSecondaryKeyInUse: Schema.optional(Schema.Boolean),
        isAzureMonitorTargetEnabled: Schema.optional(Schema.Boolean),
        queueDelayMs: Schema.optional(Schema.Number),
        isDevopsAuditEnabled: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/extendedAuditingSettings/{blobAuditingPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateInput>;

// Output Schema
export interface WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update server's extended blob auditing policy.
 *
 * Create or Update a workspace managed sql server's extended blob auditing policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param blobAuditingPolicyName - The name of the blob auditing policy.
 */
export const WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateInput,
    outputSchema:
      WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  blobAuditingPolicyName: "default";
}
export const WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    blobAuditingPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/extendedAuditingSettings/{blobAuditingPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetInput>;

// Output Schema
export interface WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetOutput>;

// The operation
/**
 * Get server's extended blob auditing policy.
 *
 * Get a workspace SQL server's extended blob auditing policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param blobAuditingPolicyName - The name of the blob auditing policy.
 */
export const WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetInput,
    outputSchema:
      WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/extendedAuditingSettings",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceInput>;

// Output Schema
export interface WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOutput>;

// The operation
/**
 * List server's extended blob auditing policies.
 *
 * List workspace managed sql server's extended blob auditing policies.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceInput,
    outputSchema:
      WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerRecoverableSqlPoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sqlPoolName: string;
}
export const WorkspaceManagedSqlServerRecoverableSqlPoolsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sqlPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/recoverableSqlPools/{sqlPoolName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerRecoverableSqlPoolsGetInput>;

// Output Schema
export interface WorkspaceManagedSqlServerRecoverableSqlPoolsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerRecoverableSqlPoolsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerRecoverableSqlPoolsGetOutput>;

// The operation
/**
 * Get recoverable sql pools for the server.
 *
 * Get recoverable sql pools for workspace managed sql server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sqlPoolName - The name of the sql pool
 */
export const WorkspaceManagedSqlServerRecoverableSqlPoolsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerRecoverableSqlPoolsGetInput,
    outputSchema: WorkspaceManagedSqlServerRecoverableSqlPoolsGetOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerRecoverableSqlPoolsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceManagedSqlServerRecoverableSqlPoolsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/recoverableSqlPools",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerRecoverableSqlPoolsListInput>;

// Output Schema
export interface WorkspaceManagedSqlServerRecoverableSqlPoolsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const WorkspaceManagedSqlServerRecoverableSqlPoolsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerRecoverableSqlPoolsListOutput>;

// The operation
/**
 * Get list of recoverable sql pools for the server.
 *
 * Get list of recoverable sql pools for workspace managed sql server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceManagedSqlServerRecoverableSqlPoolsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerRecoverableSqlPoolsListInput,
    outputSchema: WorkspaceManagedSqlServerRecoverableSqlPoolsListOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  securityAlertPolicyName: "Default";
  properties?: {
    state: "New" | "Enabled" | "Disabled";
    disabledAlerts?: string[];
    emailAddresses?: string[];
    emailAccountAdmins?: boolean;
    storageEndpoint?: string;
    storageAccountAccessKey?: string;
    retentionDays?: number;
    creationTime?: string;
  };
}
export const WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    securityAlertPolicyName: Schema.Literals(["Default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        state: Schema.Literals(["New", "Enabled", "Disabled"]),
        disabledAlerts: Schema.optional(Schema.Array(Schema.String)),
        emailAddresses: Schema.optional(Schema.Array(Schema.String)),
        emailAccountAdmins: Schema.optional(Schema.Boolean),
        storageEndpoint: Schema.optional(Schema.String),
        storageAccountAccessKey: Schema.optional(Schema.String),
        retentionDays: Schema.optional(Schema.Number),
        creationTime: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/securityAlertPolicies/{securityAlertPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateInput>;

// Output Schema
export interface WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update server's threat detection policy.
 *
 * Create or Update a workspace managed sql server's threat detection policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param securityAlertPolicyName - The name of the security alert policy.
 */
export const WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateInput,
    outputSchema:
      WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerSecurityAlertPolicyGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  securityAlertPolicyName: "Default";
}
export const WorkspaceManagedSqlServerSecurityAlertPolicyGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    securityAlertPolicyName: Schema.Literals(["Default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/securityAlertPolicies/{securityAlertPolicyName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerSecurityAlertPolicyGetInput>;

// Output Schema
export interface WorkspaceManagedSqlServerSecurityAlertPolicyGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerSecurityAlertPolicyGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerSecurityAlertPolicyGetOutput>;

// The operation
/**
 * Get server's security alert policy.
 *
 * Get a workspace managed sql server's security alert policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param securityAlertPolicyName - The name of the security alert policy.
 */
export const WorkspaceManagedSqlServerSecurityAlertPolicyGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerSecurityAlertPolicyGetInput,
    outputSchema: WorkspaceManagedSqlServerSecurityAlertPolicyGetOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerSecurityAlertPolicyListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceManagedSqlServerSecurityAlertPolicyListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/securityAlertPolicies",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerSecurityAlertPolicyListInput>;

// Output Schema
export interface WorkspaceManagedSqlServerSecurityAlertPolicyListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const WorkspaceManagedSqlServerSecurityAlertPolicyListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerSecurityAlertPolicyListOutput>;

// The operation
/**
 * Get server's threat detection policies.
 *
 * Get workspace managed sql server's threat detection policies.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceManagedSqlServerSecurityAlertPolicyList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerSecurityAlertPolicyListInput,
    outputSchema: WorkspaceManagedSqlServerSecurityAlertPolicyListOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerUsagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceManagedSqlServerUsagesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlUsages",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerUsagesListInput>;

// Output Schema
export interface WorkspaceManagedSqlServerUsagesListOutput {
  value: {
    name?: string;
    resourceName?: string;
    displayName?: string;
    currentValue?: number;
    limit?: number;
    unit?: string;
    nextResetTime?: string;
  }[];
  nextLink?: string;
}
export const WorkspaceManagedSqlServerUsagesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        resourceName: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        currentValue: Schema.optional(Schema.Number),
        limit: Schema.optional(Schema.Number),
        unit: Schema.optional(Schema.String),
        nextResetTime: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerUsagesListOutput>;

// The operation
/**
 * Get list of usages metric for the server.
 *
 * Get list of server usages metric for workspace managed sql server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceManagedSqlServerUsagesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerUsagesListInput,
    outputSchema: WorkspaceManagedSqlServerUsagesListOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerVulnerabilityAssessmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  vulnerabilityAssessmentName: "default";
  properties?: {
    storageContainerPath: string;
    storageContainerSasKey?: string;
    storageAccountAccessKey?: string;
    recurringScans?: {
      isEnabled?: boolean;
      emailSubscriptionAdmins?: boolean;
      emails?: string[];
    };
  };
}
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
    properties: Schema.optional(
      Schema.Struct({
        storageContainerPath: Schema.String,
        storageContainerSasKey: Schema.optional(Schema.String),
        storageAccountAccessKey: Schema.optional(Schema.String),
        recurringScans: Schema.optional(
          Schema.Struct({
            isEnabled: Schema.optional(Schema.Boolean),
            emailSubscriptionAdmins: Schema.optional(Schema.Boolean),
            emails: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerVulnerabilityAssessmentsCreateOrUpdateInput>;

// Output Schema
export interface WorkspaceManagedSqlServerVulnerabilityAssessmentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerVulnerabilityAssessmentsCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update server's vulnerability assessment.
 *
 * Create or Update workspace managed sql server's vulnerability assessment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 */
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WorkspaceManagedSqlServerVulnerabilityAssessmentsCreateOrUpdateInput,
    outputSchema:
      WorkspaceManagedSqlServerVulnerabilityAssessmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerVulnerabilityAssessmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  vulnerabilityAssessmentName: "default";
}
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerVulnerabilityAssessmentsDeleteInput>;

// Output Schema
export type WorkspaceManagedSqlServerVulnerabilityAssessmentsDeleteOutput =
  void;
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspaceManagedSqlServerVulnerabilityAssessmentsDeleteOutput>;

// The operation
/**
 * Remove server's vulnerability assessment.
 *
 * Remove workspace managed sql server's vulnerability assessment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 */
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerVulnerabilityAssessmentsDeleteInput,
    outputSchema: WorkspaceManagedSqlServerVulnerabilityAssessmentsDeleteOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerVulnerabilityAssessmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  vulnerabilityAssessmentName: "default";
}
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    vulnerabilityAssessmentName: Schema.Literals(["default"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/vulnerabilityAssessments/{vulnerabilityAssessmentName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerVulnerabilityAssessmentsGetInput>;

// Output Schema
export interface WorkspaceManagedSqlServerVulnerabilityAssessmentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerVulnerabilityAssessmentsGetOutput>;

// The operation
/**
 * Get server's vulnerability assessment.
 *
 * Get workspace managed sql server's vulnerability assessment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param vulnerabilityAssessmentName - The name of the vulnerability assessment.
 */
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerVulnerabilityAssessmentsGetInput,
    outputSchema: WorkspaceManagedSqlServerVulnerabilityAssessmentsGetOutput,
  }));
// Input Schema
export interface WorkspaceManagedSqlServerVulnerabilityAssessmentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/vulnerabilityAssessments",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceManagedSqlServerVulnerabilityAssessmentsListInput>;

// Output Schema
export interface WorkspaceManagedSqlServerVulnerabilityAssessmentsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceManagedSqlServerVulnerabilityAssessmentsListOutput>;

// The operation
/**
 * Lists the vulnerability assessment policies associated with a server.
 *
 * Lists the vulnerability assessment policies associated with a workspace managed sql server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceManagedSqlServerVulnerabilityAssessmentsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceManagedSqlServerVulnerabilityAssessmentsListInput,
    outputSchema: WorkspaceManagedSqlServerVulnerabilityAssessmentsListOutput,
  }));
// Input Schema
export interface WorkspacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties?: {
    defaultDataLakeStorage?: {
      accountUrl?: string;
      filesystem?: string;
      resourceId?: string;
      createManagedPrivateEndpoint?: boolean;
    };
    sqlAdministratorLoginPassword?: string | Redacted.Redacted<string>;
    managedResourceGroupName?: string;
    provisioningState?: string;
    sqlAdministratorLogin?: string;
    virtualNetworkProfile?: { computeSubnetId?: string };
    connectivityEndpoints?: Record<string, string>;
    managedVirtualNetwork?: string;
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    encryption?: {
      doubleEncryptionEnabled?: boolean;
      cmk?: {
        status?: string;
        key?: { name?: string; keyVaultUrl?: string };
        kekIdentity?: {
          userAssignedIdentity?: string;
          useSystemAssignedIdentity?: unknown;
        };
      };
    };
    workspaceUID?: string;
    extraProperties?: unknown;
    managedVirtualNetworkSettings?: {
      preventDataExfiltration?: boolean;
      linkedAccessCheckOnTargetResource?: boolean;
      allowedAadTenantIdsForLinking?: string[];
    };
    workspaceRepositoryConfiguration?: {
      type?: string;
      hostName?: string;
      accountName?: string;
      projectName?: string;
      repositoryName?: string;
      collaborationBranch?: string;
      rootFolder?: string;
      lastCommitId?: string;
      tenantId?: string;
    };
    purviewConfiguration?: { purviewResourceId?: string };
    adlaResourceId?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
    cspWorkspaceAdminProperties?: { initialWorkspaceAdminObjectId?: string };
    settings?: Record<string, unknown>;
    azureADOnlyAuthentication?: boolean;
    trustedServiceBypassEnabled?: boolean;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { clientId?: string | null; principalId?: string | null }
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const WorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        defaultDataLakeStorage: Schema.optional(
          Schema.Struct({
            accountUrl: Schema.optional(Schema.String),
            filesystem: Schema.optional(Schema.String),
            resourceId: Schema.optional(Schema.String),
            createManagedPrivateEndpoint: Schema.optional(Schema.Boolean),
          }),
        ),
        sqlAdministratorLoginPassword: Schema.optional(SensitiveString),
        managedResourceGroupName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        sqlAdministratorLogin: Schema.optional(Schema.String),
        virtualNetworkProfile: Schema.optional(
          Schema.Struct({
            computeSubnetId: Schema.optional(Schema.String),
          }),
        ),
        connectivityEndpoints: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        managedVirtualNetwork: Schema.optional(Schema.String),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            doubleEncryptionEnabled: Schema.optional(Schema.Boolean),
            cmk: Schema.optional(
              Schema.Struct({
                status: Schema.optional(Schema.String),
                key: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    keyVaultUrl: Schema.optional(Schema.String),
                  }),
                ),
                kekIdentity: Schema.optional(
                  Schema.Struct({
                    userAssignedIdentity: Schema.optional(Schema.String),
                    useSystemAssignedIdentity: Schema.optional(Schema.Unknown),
                  }),
                ),
              }),
            ),
          }),
        ),
        workspaceUID: Schema.optional(Schema.String),
        extraProperties: Schema.optional(Schema.Unknown),
        managedVirtualNetworkSettings: Schema.optional(
          Schema.Struct({
            preventDataExfiltration: Schema.optional(Schema.Boolean),
            linkedAccessCheckOnTargetResource: Schema.optional(Schema.Boolean),
            allowedAadTenantIdsForLinking: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
        workspaceRepositoryConfiguration: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            hostName: Schema.optional(Schema.String),
            accountName: Schema.optional(Schema.String),
            projectName: Schema.optional(Schema.String),
            repositoryName: Schema.optional(Schema.String),
            collaborationBranch: Schema.optional(Schema.String),
            rootFolder: Schema.optional(Schema.String),
            lastCommitId: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
          }),
        ),
        purviewConfiguration: Schema.optional(
          Schema.Struct({
            purviewResourceId: Schema.optional(Schema.String),
          }),
        ),
        adlaResourceId: Schema.optional(Schema.String),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        cspWorkspaceAdminProperties: Schema.optional(
          Schema.Struct({
            initialWorkspaceAdminObjectId: Schema.optional(Schema.String),
          }),
        ),
        settings: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        azureADOnlyAuthentication: Schema.optional(Schema.Boolean),
        trustedServiceBypassEnabled: Schema.optional(Schema.Boolean),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "SystemAssigned,UserAssigned",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              clientId: Schema.optional(Schema.NullOr(Schema.String)),
              principalId: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesCreateOrUpdateInput>;

// Output Schema
export interface WorkspacesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspacesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspacesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkspacesCreateOrUpdateInput,
    outputSchema: WorkspacesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface WorkspacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<WorkspacesDeleteInput>;

// Output Schema
export interface WorkspacesDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspacesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<WorkspacesDeleteOutput>;

// The operation
/**
 * Deletes a workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesDeleteInput,
  outputSchema: WorkspacesDeleteOutput,
}));
// Input Schema
export interface WorkspacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<WorkspacesGetInput>;

// Output Schema
export interface WorkspacesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspacesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<WorkspacesGetOutput>;

// The operation
/**
 * Gets a workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesGetInput,
  outputSchema: WorkspacesGetOutput,
}));
// Input Schema
export interface WorkspacesListInput {
  subscriptionId: string;
}
export const WorkspacesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Synapse/workspaces",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<WorkspacesListInput>;

// Output Schema
export interface WorkspacesListOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const WorkspacesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<WorkspacesListOutput>;

// The operation
/**
 * Returns a list of workspaces in a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const WorkspacesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesListInput,
  outputSchema: WorkspacesListOutput,
}));
// Input Schema
export interface WorkspacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const WorkspacesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListByResourceGroupInput>;

// Output Schema
export interface WorkspacesListByResourceGroupOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const WorkspacesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<WorkspacesListByResourceGroupOutput>;

// The operation
/**
 * Returns a list of workspaces in a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkspacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListByResourceGroupInput,
    outputSchema: WorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export interface WorkspaceSqlAadAdminsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties?: {
    tenantId?: string;
    login?: string;
    administratorType?: string;
    sid?: string;
  };
}
export const WorkspaceSqlAadAdminsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        login: Schema.optional(Schema.String),
        administratorType: Schema.optional(Schema.String),
        sid: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlAdministrators/activeDirectory",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceSqlAadAdminsCreateOrUpdateInput>;

// Output Schema
export interface WorkspaceSqlAadAdminsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceSqlAadAdminsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceSqlAadAdminsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a workspace SQL active directory admin
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceSqlAadAdminsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceSqlAadAdminsCreateOrUpdateInput,
    outputSchema: WorkspaceSqlAadAdminsCreateOrUpdateOutput,
  }));
// Input Schema
export interface WorkspaceSqlAadAdminsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceSqlAadAdminsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlAdministrators/activeDirectory",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceSqlAadAdminsDeleteInput>;

// Output Schema
export type WorkspaceSqlAadAdminsDeleteOutput = void;
export const WorkspaceSqlAadAdminsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspaceSqlAadAdminsDeleteOutput>;

// The operation
/**
 * Deletes a workspace SQL active directory admin
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceSqlAadAdminsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkspaceSqlAadAdminsDeleteInput,
    outputSchema: WorkspaceSqlAadAdminsDeleteOutput,
  }),
);
// Input Schema
export interface WorkspaceSqlAadAdminsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceSqlAadAdminsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlAdministrators/activeDirectory",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceSqlAadAdminsGetInput>;

// Output Schema
export interface WorkspaceSqlAadAdminsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspaceSqlAadAdminsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceSqlAadAdminsGetOutput>;

// The operation
/**
 * Gets a workspace SQL active directory admin
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspaceSqlAadAdminsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkspaceSqlAadAdminsGetInput,
    outputSchema: WorkspaceSqlAadAdminsGetOutput,
  }),
);
// Input Schema
export interface WorkspacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { clientId?: string | null; principalId?: string | null }
    >;
  };
  properties?: {
    sqlAdministratorLoginPassword?: string | Redacted.Redacted<string>;
    managedVirtualNetworkSettings?: {
      preventDataExfiltration?: boolean;
      linkedAccessCheckOnTargetResource?: boolean;
      allowedAadTenantIdsForLinking?: string[];
    };
    workspaceRepositoryConfiguration?: {
      type?: string;
      hostName?: string;
      accountName?: string;
      projectName?: string;
      repositoryName?: string;
      collaborationBranch?: string;
      rootFolder?: string;
      lastCommitId?: string;
      tenantId?: string;
    };
    purviewConfiguration?: { purviewResourceId?: string };
    provisioningState?: string;
    encryption?: {
      doubleEncryptionEnabled?: boolean;
      cmk?: {
        status?: string;
        key?: { name?: string; keyVaultUrl?: string };
        kekIdentity?: {
          userAssignedIdentity?: string;
          useSystemAssignedIdentity?: unknown;
        };
      };
    };
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
}
export const WorkspacesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "SystemAssigned,UserAssigned",
        ]),
      ),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            clientId: Schema.optional(Schema.NullOr(Schema.String)),
            principalId: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
      ),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      sqlAdministratorLoginPassword: Schema.optional(SensitiveString),
      managedVirtualNetworkSettings: Schema.optional(
        Schema.Struct({
          preventDataExfiltration: Schema.optional(Schema.Boolean),
          linkedAccessCheckOnTargetResource: Schema.optional(Schema.Boolean),
          allowedAadTenantIdsForLinking: Schema.optional(
            Schema.Array(Schema.String),
          ),
        }),
      ),
      workspaceRepositoryConfiguration: Schema.optional(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          hostName: Schema.optional(Schema.String),
          accountName: Schema.optional(Schema.String),
          projectName: Schema.optional(Schema.String),
          repositoryName: Schema.optional(Schema.String),
          collaborationBranch: Schema.optional(Schema.String),
          rootFolder: Schema.optional(Schema.String),
          lastCommitId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
        }),
      ),
      purviewConfiguration: Schema.optional(
        Schema.Struct({
          purviewResourceId: Schema.optional(Schema.String),
        }),
      ),
      provisioningState: Schema.optional(Schema.String),
      encryption: Schema.optional(
        Schema.Struct({
          doubleEncryptionEnabled: Schema.optional(Schema.Boolean),
          cmk: Schema.optional(
            Schema.Struct({
              status: Schema.optional(Schema.String),
              key: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  keyVaultUrl: Schema.optional(Schema.String),
                }),
              ),
              kekIdentity: Schema.optional(
                Schema.Struct({
                  userAssignedIdentity: Schema.optional(Schema.String),
                  useSystemAssignedIdentity: Schema.optional(Schema.Unknown),
                }),
              ),
            }),
          ),
        }),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<WorkspacesUpdateInput>;

// Output Schema
export interface WorkspacesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WorkspacesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<WorkspacesUpdateOutput>;

// The operation
/**
 * Updates a workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesUpdateInput,
  outputSchema: WorkspacesUpdateOutput,
}));
