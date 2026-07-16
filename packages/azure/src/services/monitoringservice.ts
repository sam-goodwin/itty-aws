/**
 * Azure Monitoringservice API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AzureMonitorWorkspacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  properties?: {
    accountId?: string;
    metrics?: {
      prometheusQueryEndpoint?: string;
      internalId?: string;
      enableAccessUsingResourcePermissions?: boolean;
    };
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    defaultIngestionSettings?: {
      dataCollectionRuleResourceId?: string;
      dataCollectionEndpointResourceId?: string;
      dataCollectionRuleImmutableId?: string;
      ingestionEndpoints?: { metrics?: string };
    };
    privateEndpointConnections?: {
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
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const AzureMonitorWorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        accountId: Schema.optional(Schema.String),
        metrics: Schema.optional(
          Schema.Struct({
            prometheusQueryEndpoint: Schema.optional(Schema.String),
            internalId: Schema.optional(Schema.String),
            enableAccessUsingResourcePermissions: Schema.optional(
              Schema.Boolean,
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        defaultIngestionSettings: Schema.optional(
          Schema.Struct({
            dataCollectionRuleResourceId: Schema.optional(Schema.String),
            dataCollectionEndpointResourceId: Schema.optional(Schema.String),
            dataCollectionRuleImmutableId: Schema.optional(Schema.String),
            ingestionEndpoints: Schema.optional(
              Schema.Struct({
                metrics: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        privateEndpointConnections: Schema.optional(
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
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<AzureMonitorWorkspacesCreateOrUpdateInput>;

// Output Schema
export interface AzureMonitorWorkspacesCreateOrUpdateOutput {
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
export const AzureMonitorWorkspacesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AzureMonitorWorkspacesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Azure Monitor Workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 */
export const AzureMonitorWorkspacesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesCreateOrUpdateInput,
    outputSchema: AzureMonitorWorkspacesCreateOrUpdateOutput,
  }));
// Input Schema
export interface AzureMonitorWorkspacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
}
export const AzureMonitorWorkspacesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<AzureMonitorWorkspacesDeleteInput>;

// Output Schema
export type AzureMonitorWorkspacesDeleteOutput = void;
export const AzureMonitorWorkspacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AzureMonitorWorkspacesDeleteOutput>;

// The operation
/**
 * Deletes an Azure Monitor Workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 */
export const AzureMonitorWorkspacesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesDeleteInput,
    outputSchema: AzureMonitorWorkspacesDeleteOutput,
  }));
// Input Schema
export interface AzureMonitorWorkspacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
}
export const AzureMonitorWorkspacesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<AzureMonitorWorkspacesGetInput>;

// Output Schema
export interface AzureMonitorWorkspacesGetOutput {
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
export const AzureMonitorWorkspacesGetOutput =
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
  }) as unknown as Schema.Codec<AzureMonitorWorkspacesGetOutput>;

// The operation
/**
 * Returns the specified Azure Monitor Workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 */
export const AzureMonitorWorkspacesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AzureMonitorWorkspacesGetInput,
  outputSchema: AzureMonitorWorkspacesGetOutput,
}));
// Input Schema
export interface AzureMonitorWorkspacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AzureMonitorWorkspacesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<AzureMonitorWorkspacesListByResourceGroupInput>;

// Output Schema
export interface AzureMonitorWorkspacesListByResourceGroupOutput {
  value: {
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
export const AzureMonitorWorkspacesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureMonitorWorkspacesListByResourceGroupOutput>;

// The operation
/**
 * Lists all Azure Monitor Workspaces in the specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AzureMonitorWorkspacesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesListByResourceGroupInput,
    outputSchema: AzureMonitorWorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export interface AzureMonitorWorkspacesListBySubscriptionInput {
  subscriptionId: string;
}
export const AzureMonitorWorkspacesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/accounts",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<AzureMonitorWorkspacesListBySubscriptionInput>;

// Output Schema
export interface AzureMonitorWorkspacesListBySubscriptionOutput {
  value: {
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
export const AzureMonitorWorkspacesListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureMonitorWorkspacesListBySubscriptionOutput>;

// The operation
/**
 * Lists all Azure Monitor Workspaces in the specified subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AzureMonitorWorkspacesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesListBySubscriptionInput,
    outputSchema: AzureMonitorWorkspacesListBySubscriptionOutput,
  }));
// Input Schema
export interface AzureMonitorWorkspacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties?: {
    accountId?: string;
    metrics?: {
      prometheusQueryEndpoint?: string;
      internalId?: string;
      enableAccessUsingResourcePermissions?: boolean;
    };
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    defaultIngestionSettings?: {
      dataCollectionRuleResourceId?: string;
      dataCollectionEndpointResourceId?: string;
      dataCollectionRuleImmutableId?: string;
      ingestionEndpoints?: { metrics?: string };
    };
    privateEndpointConnections?: {
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
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
}
export const AzureMonitorWorkspacesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        accountId: Schema.optional(Schema.String),
        metrics: Schema.optional(
          Schema.Struct({
            prometheusQueryEndpoint: Schema.optional(Schema.String),
            internalId: Schema.optional(Schema.String),
            enableAccessUsingResourcePermissions: Schema.optional(
              Schema.Boolean,
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        defaultIngestionSettings: Schema.optional(
          Schema.Struct({
            dataCollectionRuleResourceId: Schema.optional(Schema.String),
            dataCollectionEndpointResourceId: Schema.optional(Schema.String),
            dataCollectionRuleImmutableId: Schema.optional(Schema.String),
            ingestionEndpoints: Schema.optional(
              Schema.Struct({
                metrics: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        privateEndpointConnections: Schema.optional(
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
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<AzureMonitorWorkspacesUpdateInput>;

// Output Schema
export interface AzureMonitorWorkspacesUpdateOutput {
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
export const AzureMonitorWorkspacesUpdateOutput =
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
  }) as unknown as Schema.Codec<AzureMonitorWorkspacesUpdateOutput>;

// The operation
/**
 * Updates part of an Azure Monitor Workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 */
export const AzureMonitorWorkspacesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesUpdateInput,
    outputSchema: AzureMonitorWorkspacesUpdateOutput,
  }));
// Input Schema
export interface IssueAddInvestigationResultInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
  id: string;
  origin?: { addedBy: string; addedByType: "Manual" | "Automatic" };
  createdAt?: string;
  lastModifiedAt?: string;
  result: string;
}
export const IssueAddInvestigationResultInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    issueName: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    origin: Schema.optional(
      Schema.Struct({
        addedBy: Schema.String,
        addedByType: Schema.Literals(["Manual", "Automatic"]),
      }),
    ),
    createdAt: Schema.optional(Schema.String),
    lastModifiedAt: Schema.optional(Schema.String),
    result: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}/addInvestigationResult",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<IssueAddInvestigationResultInput>;

// Output Schema
export interface IssueAddInvestigationResultOutput {
  id: string;
  origin?: { addedBy: string; addedByType: "Manual" | "Automatic" };
  createdAt?: string;
  lastModifiedAt?: string;
  result: string;
}
export const IssueAddInvestigationResultOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    origin: Schema.optional(
      Schema.Struct({
        addedBy: Schema.String,
        addedByType: Schema.Literals(["Manual", "Automatic"]),
      }),
    ),
    createdAt: Schema.optional(Schema.String),
    lastModifiedAt: Schema.optional(Schema.String),
    result: Schema.String,
  }) as unknown as Schema.Codec<IssueAddInvestigationResultOutput>;

// The operation
/**
 * Adds investigation result
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueAddInvestigationResult = /*@__PURE__*/ API.make(() => ({
  inputSchema: IssueAddInvestigationResultInput,
  outputSchema: IssueAddInvestigationResultOutput,
}));
// Input Schema
export interface IssueAddOrUpdateAlertsInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
  value: {
    id: string;
    relevance: "None" | "Relevant" | "Irrelevant";
    origin: { addedBy: string; addedByType: "Manual" | "Automatic" };
    addedAt: string;
    lastModifiedAt: string;
  }[];
}
export const IssueAddOrUpdateAlertsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    issueName: Schema.String.pipe(T.PathParam()),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        relevance: Schema.Literals(["None", "Relevant", "Irrelevant"]),
        origin: Schema.Struct({
          addedBy: Schema.String,
          addedByType: Schema.Literals(["Manual", "Automatic"]),
        }),
        addedAt: Schema.String,
        lastModifiedAt: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}/addOrUpdateAlerts",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<IssueAddOrUpdateAlertsInput>;

// Output Schema
export interface IssueAddOrUpdateAlertsOutput {
  value: {
    id: string;
    relevance: "None" | "Relevant" | "Irrelevant";
    origin: { addedBy: string; addedByType: "Manual" | "Automatic" };
    addedAt: string;
    lastModifiedAt: string;
  }[];
}
export const IssueAddOrUpdateAlertsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        relevance: Schema.Literals(["None", "Relevant", "Irrelevant"]),
        origin: Schema.Struct({
          addedBy: Schema.String,
          addedByType: Schema.Literals(["Manual", "Automatic"]),
        }),
        addedAt: Schema.String,
        lastModifiedAt: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<IssueAddOrUpdateAlertsOutput>;

// The operation
/**
 * Add or update alerts associated with an issue
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueAddOrUpdateAlerts = /*@__PURE__*/ API.make(() => ({
  inputSchema: IssueAddOrUpdateAlertsInput,
  outputSchema: IssueAddOrUpdateAlertsOutput,
}));
// Input Schema
export interface IssueAddOrUpdateResourcesInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
  value: {
    id: string;
    relevance: "None" | "Relevant" | "Irrelevant";
    origin: { addedBy: string; addedByType: "Manual" | "Automatic" };
    addedAt: string;
    lastModifiedAt: string;
  }[];
}
export const IssueAddOrUpdateResourcesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    issueName: Schema.String.pipe(T.PathParam()),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        relevance: Schema.Literals(["None", "Relevant", "Irrelevant"]),
        origin: Schema.Struct({
          addedBy: Schema.String,
          addedByType: Schema.Literals(["Manual", "Automatic"]),
        }),
        addedAt: Schema.String,
        lastModifiedAt: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}/addOrUpdateResources",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<IssueAddOrUpdateResourcesInput>;

// Output Schema
export interface IssueAddOrUpdateResourcesOutput {
  value: {
    id: string;
    relevance: "None" | "Relevant" | "Irrelevant";
    origin: { addedBy: string; addedByType: "Manual" | "Automatic" };
    addedAt: string;
    lastModifiedAt: string;
  }[];
}
export const IssueAddOrUpdateResourcesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        relevance: Schema.Literals(["None", "Relevant", "Irrelevant"]),
        origin: Schema.Struct({
          addedBy: Schema.String,
          addedByType: Schema.Literals(["Manual", "Automatic"]),
        }),
        addedAt: Schema.String,
        lastModifiedAt: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<IssueAddOrUpdateResourcesOutput>;

// The operation
/**
 * Add or update resources associated with an issue
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueAddOrUpdateResources = /*@__PURE__*/ API.make(() => ({
  inputSchema: IssueAddOrUpdateResourcesInput,
  outputSchema: IssueAddOrUpdateResourcesOutput,
}));
// Input Schema
export interface IssueCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
  related?: string;
  properties?: {
    title: string;
    status: "New" | "InProgress" | "Mitigated" | "Closed" | "Canceled";
    severity: string;
    investigations: { id: string; createdAt: string }[];
    impactTime: string;
    investigationsCount: number;
    background?: {
      type?: string;
      text?: string;
      details?: { name: string; value: string }[];
    };
    notifications?: {
      updateTypes?: {
        updateType: "IssueCreation" | "TimeBased" | "OnChange";
      }[];
      actionGroupIds?: string[];
      excludeDefaultActionGroups?: boolean;
    };
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const IssueCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  issueName: Schema.String.pipe(T.PathParam()),
  related: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      title: Schema.String,
      status: Schema.Literals([
        "New",
        "InProgress",
        "Mitigated",
        "Closed",
        "Canceled",
      ]),
      severity: Schema.String,
      investigations: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdAt: Schema.String,
        }),
      ),
      impactTime: Schema.String,
      investigationsCount: Schema.Number,
      background: Schema.optional(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          text: Schema.optional(Schema.String),
          details: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                value: Schema.String,
              }),
            ),
          ),
        }),
      ),
      notifications: Schema.optional(
        Schema.Struct({
          updateTypes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                updateType: Schema.Literals([
                  "IssueCreation",
                  "TimeBased",
                  "OnChange",
                ]),
              }),
            ),
          ),
          actionGroupIds: Schema.optional(Schema.Array(Schema.String)),
          excludeDefaultActionGroups: Schema.optional(Schema.Boolean),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Failed", "Canceled"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}",
    apiVersion: "2025-10-03",
  }),
) as unknown as Schema.Codec<IssueCreateInput>;

// Output Schema
export interface IssueCreateOutput {
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
export const IssueCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<IssueCreateOutput>;

// The operation
/**
 * Create a new issue or updates an existing one
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 * @param related - Related resource or alert that is to be added to the issue (default: empty - the issue will be created without any related resources or alerts)
 */
export const IssueCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IssueCreateInput,
  outputSchema: IssueCreateOutput,
}));
// Input Schema
export interface IssueDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
}
export const IssueDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  issueName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}",
    apiVersion: "2025-10-03",
  }),
) as unknown as Schema.Codec<IssueDeleteInput>;

// Output Schema
export type IssueDeleteOutput = void;
export const IssueDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IssueDeleteOutput>;

// The operation
/**
 * Delete an issue
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IssueDeleteInput,
  outputSchema: IssueDeleteOutput,
}));
// Input Schema
export interface IssueFetchBackgroundVisualizationInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
}
export const IssueFetchBackgroundVisualizationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    issueName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}/fetchBackgroundVisualization",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<IssueFetchBackgroundVisualizationInput>;

// Output Schema
export interface IssueFetchBackgroundVisualizationOutput {
  visualization: string;
  origin: { addedBy: string; addedByType: "Manual" | "Automatic" };
}
export const IssueFetchBackgroundVisualizationOutput =
  /*@__PURE__*/ Schema.Struct({
    visualization: Schema.String,
    origin: Schema.Struct({
      addedBy: Schema.String,
      addedByType: Schema.Literals(["Manual", "Automatic"]),
    }),
  }) as unknown as Schema.Codec<IssueFetchBackgroundVisualizationOutput>;

// The operation
/**
 * Fetch the background visualization of the issue
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueFetchBackgroundVisualization =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IssueFetchBackgroundVisualizationInput,
    outputSchema: IssueFetchBackgroundVisualizationOutput,
  }));
// Input Schema
export interface IssueFetchInvestigationResultInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
  investigationId: string;
}
export const IssueFetchInvestigationResultInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    issueName: Schema.String.pipe(T.PathParam()),
    investigationId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}/fetchInvestigationResult",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<IssueFetchInvestigationResultInput>;

// Output Schema
export interface IssueFetchInvestigationResultOutput {
  id: string;
  origin?: { addedBy: string; addedByType: "Manual" | "Automatic" };
  createdAt?: string;
  lastModifiedAt?: string;
  result: string;
}
export const IssueFetchInvestigationResultOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    origin: Schema.optional(
      Schema.Struct({
        addedBy: Schema.String,
        addedByType: Schema.Literals(["Manual", "Automatic"]),
      }),
    ),
    createdAt: Schema.optional(Schema.String),
    lastModifiedAt: Schema.optional(Schema.String),
    result: Schema.String,
  }) as unknown as Schema.Codec<IssueFetchInvestigationResultOutput>;

// The operation
/**
 * Fetch investigation result
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueFetchInvestigationResult =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IssueFetchInvestigationResultInput,
    outputSchema: IssueFetchInvestigationResultOutput,
  }));
// Input Schema
export interface IssueGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
}
export const IssueGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  issueName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}",
    apiVersion: "2025-10-03",
  }),
) as unknown as Schema.Codec<IssueGetInput>;

// Output Schema
export interface IssueGetOutput {
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
export const IssueGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<IssueGetOutput>;

// The operation
/**
 * Get issue properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IssueGetInput,
  outputSchema: IssueGetOutput,
}));
// Input Schema
export interface IssueListInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
}
export const IssueListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues",
    apiVersion: "2025-10-03",
  }),
) as unknown as Schema.Codec<IssueListInput>;

// Output Schema
export interface IssueListOutput {
  value: {
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
export const IssueListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<IssueListOutput>;

// The operation
/**
 * List all issues under the parent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 */
export const IssueList = /*@__PURE__*/ API.make(() => ({
  inputSchema: IssueListInput,
  outputSchema: IssueListOutput,
}));
// Input Schema
export interface IssueListAlertsInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
  filter?: string;
}
export const IssueListAlertsInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  issueName: Schema.String.pipe(T.PathParam()),
  filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}/listAlerts",
    apiVersion: "2025-10-03",
  }),
) as unknown as Schema.Codec<IssueListAlertsInput>;

// Output Schema
export interface IssueListAlertsOutput {
  value: {
    id: string;
    relevance: "None" | "Relevant" | "Irrelevant";
    origin: { addedBy: string; addedByType: "Manual" | "Automatic" };
    addedAt: string;
    lastModifiedAt: string;
  }[];
  nextLink?: string;
}
export const IssueListAlertsOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      relevance: Schema.Literals(["None", "Relevant", "Irrelevant"]),
      origin: Schema.Struct({
        addedBy: Schema.String,
        addedByType: Schema.Literals(["Manual", "Automatic"]),
      }),
      addedAt: Schema.String,
      lastModifiedAt: Schema.String,
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<IssueListAlertsOutput>;

// The operation
/**
 * List all alerts in the issue - this method uses pagination to return all alerts
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueListAlerts = /*@__PURE__*/ API.make(() => ({
  inputSchema: IssueListAlertsInput,
  outputSchema: IssueListAlertsOutput,
}));
// Input Schema
export interface IssueListResourcesInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
  filter?: string;
}
export const IssueListResourcesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    issueName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}/listResources",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<IssueListResourcesInput>;

// Output Schema
export interface IssueListResourcesOutput {
  value: {
    id: string;
    relevance: "None" | "Relevant" | "Irrelevant";
    origin: { addedBy: string; addedByType: "Manual" | "Automatic" };
    addedAt: string;
    lastModifiedAt: string;
  }[];
  nextLink?: string;
}
export const IssueListResourcesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        relevance: Schema.Literals(["None", "Relevant", "Irrelevant"]),
        origin: Schema.Struct({
          addedBy: Schema.String,
          addedByType: Schema.Literals(["Manual", "Automatic"]),
        }),
        addedAt: Schema.String,
        lastModifiedAt: Schema.String,
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IssueListResourcesOutput>;

// The operation
/**
 * List all resources in the issue - this method uses pagination to return all resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueListResources = /*@__PURE__*/ API.make(() => ({
  inputSchema: IssueListResourcesInput,
  outputSchema: IssueListResourcesOutput,
}));
// Input Schema
export interface IssueSetBackgroundVisualizationInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
  visualization: string;
  origin: { addedBy: string; addedByType: "Manual" | "Automatic" };
}
export const IssueSetBackgroundVisualizationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    issueName: Schema.String.pipe(T.PathParam()),
    visualization: Schema.String,
    origin: Schema.Struct({
      addedBy: Schema.String,
      addedByType: Schema.Literals(["Manual", "Automatic"]),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}/setBackgroundVisualization",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<IssueSetBackgroundVisualizationInput>;

// Output Schema
export type IssueSetBackgroundVisualizationOutput = void;
export const IssueSetBackgroundVisualizationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IssueSetBackgroundVisualizationOutput>;

// The operation
/**
 * Set the background visualization for the issue
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueSetBackgroundVisualization =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IssueSetBackgroundVisualizationInput,
    outputSchema: IssueSetBackgroundVisualizationOutput,
  }));
// Input Schema
export interface IssueUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  issueName: string;
  properties?: {
    title?: string;
    status?: "New" | "InProgress" | "Mitigated" | "Closed" | "Canceled";
    severity?: string;
    impactTime?: string;
    background?: {
      type?: string;
      text?: string;
      details?: { name: string; value: string }[];
    };
    notifications?: {
      updateTypes?: {
        updateType: "IssueCreation" | "TimeBased" | "OnChange";
      }[];
      actionGroupIds?: string[];
      excludeDefaultActionGroups?: boolean;
    };
  };
}
export const IssueUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  issueName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      title: Schema.optional(Schema.String),
      status: Schema.optional(
        Schema.Literals([
          "New",
          "InProgress",
          "Mitigated",
          "Closed",
          "Canceled",
        ]),
      ),
      severity: Schema.optional(Schema.String),
      impactTime: Schema.optional(Schema.String),
      background: Schema.optional(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          text: Schema.optional(Schema.String),
          details: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                value: Schema.String,
              }),
            ),
          ),
        }),
      ),
      notifications: Schema.optional(
        Schema.Struct({
          updateTypes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                updateType: Schema.Literals([
                  "IssueCreation",
                  "TimeBased",
                  "OnChange",
                ]),
              }),
            ),
          ),
          actionGroupIds: Schema.optional(Schema.Array(Schema.String)),
          excludeDefaultActionGroups: Schema.optional(Schema.Boolean),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues/{issueName}",
    apiVersion: "2025-10-03",
  }),
) as unknown as Schema.Codec<IssueUpdateInput>;

// Output Schema
export interface IssueUpdateOutput {
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
export const IssueUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<IssueUpdateOutput>;

// The operation
/**
 * Update an issue
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param issueName - The name of the IssueResource
 */
export const IssueUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IssueUpdateInput,
  outputSchema: IssueUpdateOutput,
}));
// Input Schema
export interface MetricsContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  metricsContainerName: string;
  properties?: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    version?: string;
  };
}
export const MetricsContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    metricsContainerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        version: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/metricsContainers/{metricsContainerName}",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<MetricsContainersCreateOrUpdateInput>;

// Output Schema
export interface MetricsContainersCreateOrUpdateOutput {
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
export const MetricsContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<MetricsContainersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates metrics container settings for a monitoring account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param metricsContainerName - The name of the MetricsContainer
 */
export const MetricsContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MetricsContainersCreateOrUpdateInput,
    outputSchema: MetricsContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface MetricsContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
  metricsContainerName: string;
}
export const MetricsContainersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
    metricsContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/metricsContainers/{metricsContainerName}",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<MetricsContainersGetInput>;

// Output Schema
export interface MetricsContainersGetOutput {
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
export const MetricsContainersGetOutput =
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
  }) as unknown as Schema.Codec<MetricsContainersGetOutput>;

// The operation
/**
 * Gets metrics container settings for a monitoring account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 * @param metricsContainerName - The name of the MetricsContainer
 */
export const MetricsContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetricsContainersGetInput,
  outputSchema: MetricsContainersGetOutput,
}));
// Input Schema
export interface MetricsContainersListByAzureMonitorWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureMonitorWorkspaceName: string;
}
export const MetricsContainersListByAzureMonitorWorkspaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/metricsContainers",
      apiVersion: "2025-10-03",
    }),
  ) as unknown as Schema.Codec<MetricsContainersListByAzureMonitorWorkspaceInput>;

// Output Schema
export interface MetricsContainersListByAzureMonitorWorkspaceOutput {
  value: {
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
export const MetricsContainersListByAzureMonitorWorkspaceOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MetricsContainersListByAzureMonitorWorkspaceOutput>;

// The operation
/**
 * Lists metrics containers for a monitoring account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 */
export const MetricsContainersListByAzureMonitorWorkspace =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MetricsContainersListByAzureMonitorWorkspaceInput,
    outputSchema: MetricsContainersListByAzureMonitorWorkspaceOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Monitor/operations",
    apiVersion: "2026-04-01",
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PipelineGroupsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineGroupName: string;
  properties?: {
    replicas?: number;
    receivers: {
      type: "Syslog" | "OTLP";
      name: string;
      tlsConfiguration?: string;
      syslog?: {
        endpoint: string;
        allowedFormats?: (
          | "all"
          | "syslogRfc3164"
          | "syslogRfc5424"
          | "cefRfc3164"
          | "cefRfc5424"
          | "rawCef"
        )[];
        transportProtocol?: "tcp" | "udp";
        allowSkipPriHeader?: boolean;
      };
      otlp?: { endpoint: string };
    }[];
    processors: {
      type:
        | "Batch"
        | "TransformLanguage"
        | "MicrosoftSyslog"
        | "MicrosoftCommonSecurityLog";
      name: string;
      batch?: { batchSize?: number; timeout?: number };
      transformLanguage?: { transformStatement: string };
    }[];
    exporters: {
      type: "AzureMonitorWorkspaceLogs";
      name: string;
      azureMonitorWorkspaceLogs?: {
        api: {
          dataCollectionEndpointUrl: string;
          stream: string;
          dataCollectionRule: string;
          schema: {
            recordMap: { from: string; to: string }[];
            resourceMap?: { from: string; to: string }[];
            scopeMap?: { from: string; to: string }[];
          };
        };
        persistence?: { maxStorageUsage?: number; retentionPeriod?: number };
      };
    }[];
    service: {
      pipelines: {
        name: string;
        type: "Logs";
        receivers: string[];
        processors?: string[];
        exporters: string[];
      }[];
      persistence?: { persistentVolumeName: string };
    };
    executionPlacement?: {
      constraints?: {
        capability: string;
        operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
        values?: string[];
      }[];
      distribution?: { maxInstancesPerHost?: number };
    };
    tlsConfigurations?: {
      name: string;
      mode?: "disabled" | "serverOnly" | "mutualTls";
      tlsCertificate?: {
        certificate: {
          type: "kubernetesSecret" | "kubernetesConfigMap";
          location: string;
          subLocation: string;
        };
        privateKey: {
          type: "kubernetesSecret";
          location: string;
          subLocation: string;
        };
      };
      clientCa?: {
        type: "kubernetesSecret" | "kubernetesConfigMap";
        location: string;
        subLocation: string;
      };
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting";
  };
  extendedLocation?: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const PipelineGroupsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        replicas: Schema.optional(Schema.Number),
        receivers: Schema.Array(
          Schema.Struct({
            type: Schema.Literals(["Syslog", "OTLP"]),
            name: Schema.String,
            tlsConfiguration: Schema.optional(Schema.String),
            syslog: Schema.optional(
              Schema.Struct({
                endpoint: Schema.String,
                allowedFormats: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "all",
                      "syslogRfc3164",
                      "syslogRfc5424",
                      "cefRfc3164",
                      "cefRfc5424",
                      "rawCef",
                    ]),
                  ),
                ),
                transportProtocol: Schema.optional(
                  Schema.Literals(["tcp", "udp"]),
                ),
                allowSkipPriHeader: Schema.optional(Schema.Boolean),
              }),
            ),
            otlp: Schema.optional(
              Schema.Struct({
                endpoint: Schema.String,
              }),
            ),
          }),
        ),
        processors: Schema.Array(
          Schema.Struct({
            type: Schema.Literals([
              "Batch",
              "TransformLanguage",
              "MicrosoftSyslog",
              "MicrosoftCommonSecurityLog",
            ]),
            name: Schema.String,
            batch: Schema.optional(
              Schema.Struct({
                batchSize: Schema.optional(Schema.Number),
                timeout: Schema.optional(Schema.Number),
              }),
            ),
            transformLanguage: Schema.optional(
              Schema.Struct({
                transformStatement: Schema.String,
              }),
            ),
          }),
        ),
        exporters: Schema.Array(
          Schema.Struct({
            type: Schema.Literals(["AzureMonitorWorkspaceLogs"]),
            name: Schema.String,
            azureMonitorWorkspaceLogs: Schema.optional(
              Schema.Struct({
                api: Schema.Struct({
                  dataCollectionEndpointUrl: Schema.String,
                  stream: Schema.String,
                  dataCollectionRule: Schema.String,
                  schema: Schema.Struct({
                    recordMap: Schema.Array(
                      Schema.Struct({
                        from: Schema.String,
                        to: Schema.String,
                      }),
                    ),
                    resourceMap: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          from: Schema.String,
                          to: Schema.String,
                        }),
                      ),
                    ),
                    scopeMap: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          from: Schema.String,
                          to: Schema.String,
                        }),
                      ),
                    ),
                  }),
                }),
                persistence: Schema.optional(
                  Schema.Struct({
                    maxStorageUsage: Schema.optional(Schema.Number),
                    retentionPeriod: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        service: Schema.Struct({
          pipelines: Schema.Array(
            Schema.Struct({
              name: Schema.String,
              type: Schema.Literals(["Logs"]),
              receivers: Schema.Array(Schema.String),
              processors: Schema.optional(Schema.Array(Schema.String)),
              exporters: Schema.Array(Schema.String),
            }),
          ),
          persistence: Schema.optional(
            Schema.Struct({
              persistentVolumeName: Schema.String,
            }),
          ),
        }),
        executionPlacement: Schema.optional(
          Schema.Struct({
            constraints: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  capability: Schema.String,
                  operator: Schema.Literals([
                    "In",
                    "NotIn",
                    "Exists",
                    "DoesNotExist",
                  ]),
                  values: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            distribution: Schema.optional(
              Schema.Struct({
                maxInstancesPerHost: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        tlsConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              mode: Schema.optional(
                Schema.Literals(["disabled", "serverOnly", "mutualTls"]),
              ),
              tlsCertificate: Schema.optional(
                Schema.Struct({
                  certificate: Schema.Struct({
                    type: Schema.Literals([
                      "kubernetesSecret",
                      "kubernetesConfigMap",
                    ]),
                    location: Schema.String,
                    subLocation: Schema.String,
                  }),
                  privateKey: Schema.Struct({
                    type: Schema.Literals(["kubernetesSecret"]),
                    location: Schema.String,
                    subLocation: Schema.String,
                  }),
                }),
              ),
              clientCa: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals([
                    "kubernetesSecret",
                    "kubernetesConfigMap",
                  ]),
                  location: Schema.String,
                  subLocation: Schema.String,
                }),
              ),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Creating",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["EdgeZone", "CustomLocation"]),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<PipelineGroupsCreateOrUpdateInput>;

// Output Schema
export interface PipelineGroupsCreateOrUpdateOutput {
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
export const PipelineGroupsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PipelineGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a pipeline group instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PipelineGroupsCreateOrUpdateInput,
    outputSchema: PipelineGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PipelineGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineGroupName: string;
}
export const PipelineGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<PipelineGroupsDeleteInput>;

// Output Schema
export type PipelineGroupsDeleteOutput = void;
export const PipelineGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PipelineGroupsDeleteOutput>;

// The operation
/**
 * Delete a pipeline group instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelineGroupsDeleteInput,
  outputSchema: PipelineGroupsDeleteOutput,
}));
// Input Schema
export interface PipelineGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineGroupName: string;
}
export const PipelineGroupsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  pipelineGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<PipelineGroupsGetInput>;

// Output Schema
export interface PipelineGroupsGetOutput {
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
export const PipelineGroupsGetOutput =
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
  }) as unknown as Schema.Codec<PipelineGroupsGetOutput>;

// The operation
/**
 * Returns the specific pipeline group instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelineGroupsGetInput,
  outputSchema: PipelineGroupsGetOutput,
}));
// Input Schema
export interface PipelineGroupsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PipelineGroupsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<PipelineGroupsListByResourceGroupInput>;

// Output Schema
export interface PipelineGroupsListByResourceGroupOutput {
  value: {
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
export const PipelineGroupsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PipelineGroupsListByResourceGroupOutput>;

// The operation
/**
 * Lists all workspaces in the specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PipelineGroupsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PipelineGroupsListByResourceGroupInput,
    outputSchema: PipelineGroupsListByResourceGroupOutput,
  }));
// Input Schema
export interface PipelineGroupsListBySubscriptionInput {
  subscriptionId: string;
}
export const PipelineGroupsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/pipelineGroups",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<PipelineGroupsListBySubscriptionInput>;

// Output Schema
export interface PipelineGroupsListBySubscriptionOutput {
  value: {
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
export const PipelineGroupsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PipelineGroupsListBySubscriptionOutput>;

// The operation
/**
 * Lists all workspaces in the specified subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PipelineGroupsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PipelineGroupsListBySubscriptionInput,
    outputSchema: PipelineGroupsListBySubscriptionOutput,
  }));
// Input Schema
export interface PipelineGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineGroupName: string;
  properties?: {
    replicas?: number;
    receivers?: {
      type: "Syslog" | "OTLP";
      name: string;
      tlsConfiguration?: string;
      syslog?: {
        endpoint: string;
        allowedFormats?: (
          | "all"
          | "syslogRfc3164"
          | "syslogRfc5424"
          | "cefRfc3164"
          | "cefRfc5424"
          | "rawCef"
        )[];
        transportProtocol?: "tcp" | "udp";
        allowSkipPriHeader?: boolean;
      };
      otlp?: { endpoint: string };
    }[];
    processors?: {
      type:
        | "Batch"
        | "TransformLanguage"
        | "MicrosoftSyslog"
        | "MicrosoftCommonSecurityLog";
      name: string;
      batch?: { batchSize?: number; timeout?: number };
      transformLanguage?: { transformStatement: string };
    }[];
    exporters?: {
      type: "AzureMonitorWorkspaceLogs";
      name: string;
      azureMonitorWorkspaceLogs?: {
        api: {
          dataCollectionEndpointUrl: string;
          stream: string;
          dataCollectionRule: string;
          schema: {
            recordMap: { from: string; to: string }[];
            resourceMap?: { from: string; to: string }[];
            scopeMap?: { from: string; to: string }[];
          };
        };
        persistence?: { maxStorageUsage?: number; retentionPeriod?: number };
      };
    }[];
    service?: {
      pipelines?: {
        name: string;
        type: "Logs";
        receivers: string[];
        processors?: string[];
        exporters: string[];
      }[];
      persistence?: { persistentVolumeName?: string };
    };
    executionPlacement?: {
      constraints?: {
        capability: string;
        operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
        values?: string[];
      }[];
      distribution?: { maxInstancesPerHost?: number };
    };
    tlsConfigurations?: {
      name: string;
      mode?: "disabled" | "serverOnly" | "mutualTls";
      tlsCertificate?: {
        certificate: {
          type: "kubernetesSecret" | "kubernetesConfigMap";
          location: string;
          subLocation: string;
        };
        privateKey: {
          type: "kubernetesSecret";
          location: string;
          subLocation: string;
        };
      };
      clientCa?: {
        type: "kubernetesSecret" | "kubernetesConfigMap";
        location: string;
        subLocation: string;
      };
    }[];
  };
  tags?: Record<string, string>;
}
export const PipelineGroupsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        replicas: Schema.optional(Schema.Number),
        receivers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals(["Syslog", "OTLP"]),
              name: Schema.String,
              tlsConfiguration: Schema.optional(Schema.String),
              syslog: Schema.optional(
                Schema.Struct({
                  endpoint: Schema.String,
                  allowedFormats: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "all",
                        "syslogRfc3164",
                        "syslogRfc5424",
                        "cefRfc3164",
                        "cefRfc5424",
                        "rawCef",
                      ]),
                    ),
                  ),
                  transportProtocol: Schema.optional(
                    Schema.Literals(["tcp", "udp"]),
                  ),
                  allowSkipPriHeader: Schema.optional(Schema.Boolean),
                }),
              ),
              otlp: Schema.optional(
                Schema.Struct({
                  endpoint: Schema.String,
                }),
              ),
            }),
          ),
        ),
        processors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals([
                "Batch",
                "TransformLanguage",
                "MicrosoftSyslog",
                "MicrosoftCommonSecurityLog",
              ]),
              name: Schema.String,
              batch: Schema.optional(
                Schema.Struct({
                  batchSize: Schema.optional(Schema.Number),
                  timeout: Schema.optional(Schema.Number),
                }),
              ),
              transformLanguage: Schema.optional(
                Schema.Struct({
                  transformStatement: Schema.String,
                }),
              ),
            }),
          ),
        ),
        exporters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals(["AzureMonitorWorkspaceLogs"]),
              name: Schema.String,
              azureMonitorWorkspaceLogs: Schema.optional(
                Schema.Struct({
                  api: Schema.Struct({
                    dataCollectionEndpointUrl: Schema.String,
                    stream: Schema.String,
                    dataCollectionRule: Schema.String,
                    schema: Schema.Struct({
                      recordMap: Schema.Array(
                        Schema.Struct({
                          from: Schema.String,
                          to: Schema.String,
                        }),
                      ),
                      resourceMap: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            from: Schema.String,
                            to: Schema.String,
                          }),
                        ),
                      ),
                      scopeMap: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            from: Schema.String,
                            to: Schema.String,
                          }),
                        ),
                      ),
                    }),
                  }),
                  persistence: Schema.optional(
                    Schema.Struct({
                      maxStorageUsage: Schema.optional(Schema.Number),
                      retentionPeriod: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        service: Schema.optional(
          Schema.Struct({
            pipelines: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literals(["Logs"]),
                  receivers: Schema.Array(Schema.String),
                  processors: Schema.optional(Schema.Array(Schema.String)),
                  exporters: Schema.Array(Schema.String),
                }),
              ),
            ),
            persistence: Schema.optional(
              Schema.Struct({
                persistentVolumeName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        executionPlacement: Schema.optional(
          Schema.Struct({
            constraints: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  capability: Schema.String,
                  operator: Schema.Literals([
                    "In",
                    "NotIn",
                    "Exists",
                    "DoesNotExist",
                  ]),
                  values: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            distribution: Schema.optional(
              Schema.Struct({
                maxInstancesPerHost: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        tlsConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              mode: Schema.optional(
                Schema.Literals(["disabled", "serverOnly", "mutualTls"]),
              ),
              tlsCertificate: Schema.optional(
                Schema.Struct({
                  certificate: Schema.Struct({
                    type: Schema.Literals([
                      "kubernetesSecret",
                      "kubernetesConfigMap",
                    ]),
                    location: Schema.String,
                    subLocation: Schema.String,
                  }),
                  privateKey: Schema.Struct({
                    type: Schema.Literals(["kubernetesSecret"]),
                    location: Schema.String,
                    subLocation: Schema.String,
                  }),
                }),
              ),
              clientCa: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals([
                    "kubernetesSecret",
                    "kubernetesConfigMap",
                  ]),
                  location: Schema.String,
                  subLocation: Schema.String,
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<PipelineGroupsUpdateInput>;

// Output Schema
export interface PipelineGroupsUpdateOutput {
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
export const PipelineGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<PipelineGroupsUpdateOutput>;

// The operation
/**
 * Updates a pipeline group instance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelineGroupsUpdateInput,
  outputSchema: PipelineGroupsUpdateOutput,
}));
