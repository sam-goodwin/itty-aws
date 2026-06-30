/**
 * Azure Monitoringservice API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AzureMonitorWorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type AzureMonitorWorkspacesCreateOrUpdateInput =
  typeof AzureMonitorWorkspacesCreateOrUpdateInput.Type;

// Output Schema
export const AzureMonitorWorkspacesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AzureMonitorWorkspacesCreateOrUpdateOutput =
  typeof AzureMonitorWorkspacesCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesCreateOrUpdateInput,
    outputSchema: AzureMonitorWorkspacesCreateOrUpdateOutput,
  }));
// Input Schema
export const AzureMonitorWorkspacesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      apiVersion: "2025-10-03",
    }),
  );
export type AzureMonitorWorkspacesDeleteInput =
  typeof AzureMonitorWorkspacesDeleteInput.Type;

// Output Schema
export const AzureMonitorWorkspacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AzureMonitorWorkspacesDeleteOutput =
  typeof AzureMonitorWorkspacesDeleteOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesDeleteInput,
    outputSchema: AzureMonitorWorkspacesDeleteOutput,
  }));
// Input Schema
export const AzureMonitorWorkspacesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
      apiVersion: "2025-10-03",
    }),
  );
export type AzureMonitorWorkspacesGetInput =
  typeof AzureMonitorWorkspacesGetInput.Type;

// Output Schema
export const AzureMonitorWorkspacesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AzureMonitorWorkspacesGetOutput =
  typeof AzureMonitorWorkspacesGetOutput.Type;

// The operation
/**
 * Returns the specified Azure Monitor Workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 */
export const AzureMonitorWorkspacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AzureMonitorWorkspacesGetInput,
    outputSchema: AzureMonitorWorkspacesGetOutput,
  }),
);
// Input Schema
export const AzureMonitorWorkspacesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts",
      apiVersion: "2025-10-03",
    }),
  );
export type AzureMonitorWorkspacesListByResourceGroupInput =
  typeof AzureMonitorWorkspacesListByResourceGroupInput.Type;

// Output Schema
export const AzureMonitorWorkspacesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AzureMonitorWorkspacesListByResourceGroupOutput =
  typeof AzureMonitorWorkspacesListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all Azure Monitor Workspaces in the specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AzureMonitorWorkspacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesListByResourceGroupInput,
    outputSchema: AzureMonitorWorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export const AzureMonitorWorkspacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/accounts",
      apiVersion: "2025-10-03",
    }),
  );
export type AzureMonitorWorkspacesListBySubscriptionInput =
  typeof AzureMonitorWorkspacesListBySubscriptionInput.Type;

// Output Schema
export const AzureMonitorWorkspacesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AzureMonitorWorkspacesListBySubscriptionOutput =
  typeof AzureMonitorWorkspacesListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all Azure Monitor Workspaces in the specified subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AzureMonitorWorkspacesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesListBySubscriptionInput,
    outputSchema: AzureMonitorWorkspacesListBySubscriptionOutput,
  }));
// Input Schema
export const AzureMonitorWorkspacesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type AzureMonitorWorkspacesUpdateInput =
  typeof AzureMonitorWorkspacesUpdateInput.Type;

// Output Schema
export const AzureMonitorWorkspacesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AzureMonitorWorkspacesUpdateOutput =
  typeof AzureMonitorWorkspacesUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesUpdateInput,
    outputSchema: AzureMonitorWorkspacesUpdateOutput,
  }));
// Input Schema
export const IssueAddInvestigationResultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type IssueAddInvestigationResultInput =
  typeof IssueAddInvestigationResultInput.Type;

// Output Schema
export const IssueAddInvestigationResultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type IssueAddInvestigationResultOutput =
  typeof IssueAddInvestigationResultOutput.Type;

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
export const IssueAddInvestigationResult = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IssueAddInvestigationResultInput,
    outputSchema: IssueAddInvestigationResultOutput,
  }),
);
// Input Schema
export const IssueAddOrUpdateAlertsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type IssueAddOrUpdateAlertsInput =
  typeof IssueAddOrUpdateAlertsInput.Type;

// Output Schema
export const IssueAddOrUpdateAlertsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type IssueAddOrUpdateAlertsOutput =
  typeof IssueAddOrUpdateAlertsOutput.Type;

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
export const IssueAddOrUpdateAlerts = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IssueAddOrUpdateAlertsInput,
    outputSchema: IssueAddOrUpdateAlertsOutput,
  }),
);
// Input Schema
export const IssueAddOrUpdateResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type IssueAddOrUpdateResourcesInput =
  typeof IssueAddOrUpdateResourcesInput.Type;

// Output Schema
export const IssueAddOrUpdateResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type IssueAddOrUpdateResourcesOutput =
  typeof IssueAddOrUpdateResourcesOutput.Type;

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
export const IssueAddOrUpdateResources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IssueAddOrUpdateResourcesInput,
    outputSchema: IssueAddOrUpdateResourcesOutput,
  }),
);
// Input Schema
export const IssueCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type IssueCreateInput = typeof IssueCreateInput.Type;

// Output Schema
export const IssueCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type IssueCreateOutput = typeof IssueCreateOutput.Type;

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
export const IssueCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IssueCreateInput,
  outputSchema: IssueCreateOutput,
}));
// Input Schema
export const IssueDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type IssueDeleteInput = typeof IssueDeleteInput.Type;

// Output Schema
export const IssueDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IssueDeleteOutput = typeof IssueDeleteOutput.Type;

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
export const IssueDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IssueDeleteInput,
  outputSchema: IssueDeleteOutput,
}));
// Input Schema
export const IssueFetchBackgroundVisualizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type IssueFetchBackgroundVisualizationInput =
  typeof IssueFetchBackgroundVisualizationInput.Type;

// Output Schema
export const IssueFetchBackgroundVisualizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    visualization: Schema.String,
    origin: Schema.Struct({
      addedBy: Schema.String,
      addedByType: Schema.Literals(["Manual", "Automatic"]),
    }),
  });
export type IssueFetchBackgroundVisualizationOutput =
  typeof IssueFetchBackgroundVisualizationOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IssueFetchBackgroundVisualizationInput,
    outputSchema: IssueFetchBackgroundVisualizationOutput,
  }));
// Input Schema
export const IssueFetchInvestigationResultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type IssueFetchInvestigationResultInput =
  typeof IssueFetchInvestigationResultInput.Type;

// Output Schema
export const IssueFetchInvestigationResultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type IssueFetchInvestigationResultOutput =
  typeof IssueFetchInvestigationResultOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IssueFetchInvestigationResultInput,
    outputSchema: IssueFetchInvestigationResultOutput,
  }));
// Input Schema
export const IssueGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type IssueGetInput = typeof IssueGetInput.Type;

// Output Schema
export const IssueGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type IssueGetOutput = typeof IssueGetOutput.Type;

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
export const IssueGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IssueGetInput,
  outputSchema: IssueGetOutput,
}));
// Input Schema
export const IssueListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/issues",
    apiVersion: "2025-10-03",
  }),
);
export type IssueListInput = typeof IssueListInput.Type;

// Output Schema
export const IssueListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type IssueListOutput = typeof IssueListOutput.Type;

// The operation
/**
 * List all issues under the parent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureMonitorWorkspaceName - The name of the Azure Monitor Workspace. The name is case insensitive
 */
export const IssueList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IssueListInput,
  outputSchema: IssueListOutput,
}));
// Input Schema
export const IssueListAlertsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type IssueListAlertsInput = typeof IssueListAlertsInput.Type;

// Output Schema
export const IssueListAlertsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type IssueListAlertsOutput = typeof IssueListAlertsOutput.Type;

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
export const IssueListAlerts = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IssueListAlertsInput,
  outputSchema: IssueListAlertsOutput,
}));
// Input Schema
export const IssueListResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type IssueListResourcesInput = typeof IssueListResourcesInput.Type;

// Output Schema
export const IssueListResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type IssueListResourcesOutput = typeof IssueListResourcesOutput.Type;

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
export const IssueListResources = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IssueListResourcesInput,
  outputSchema: IssueListResourcesOutput,
}));
// Input Schema
export const IssueSetBackgroundVisualizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type IssueSetBackgroundVisualizationInput =
  typeof IssueSetBackgroundVisualizationInput.Type;

// Output Schema
export const IssueSetBackgroundVisualizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IssueSetBackgroundVisualizationOutput =
  typeof IssueSetBackgroundVisualizationOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IssueSetBackgroundVisualizationInput,
    outputSchema: IssueSetBackgroundVisualizationOutput,
  }));
// Input Schema
export const IssueUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type IssueUpdateInput = typeof IssueUpdateInput.Type;

// Output Schema
export const IssueUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type IssueUpdateOutput = typeof IssueUpdateOutput.Type;

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
export const IssueUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IssueUpdateInput,
  outputSchema: IssueUpdateOutput,
}));
// Input Schema
export const MetricsContainersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type MetricsContainersCreateOrUpdateInput =
  typeof MetricsContainersCreateOrUpdateInput.Type;

// Output Schema
export const MetricsContainersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type MetricsContainersCreateOrUpdateOutput =
  typeof MetricsContainersCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MetricsContainersCreateOrUpdateInput,
    outputSchema: MetricsContainersCreateOrUpdateOutput,
  }));
// Input Schema
export const MetricsContainersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type MetricsContainersGetInput = typeof MetricsContainersGetInput.Type;

// Output Schema
export const MetricsContainersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type MetricsContainersGetOutput = typeof MetricsContainersGetOutput.Type;

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
export const MetricsContainersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricsContainersGetInput,
    outputSchema: MetricsContainersGetOutput,
  }),
);
// Input Schema
export const MetricsContainersListByAzureMonitorWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureMonitorWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}/metricsContainers",
      apiVersion: "2025-10-03",
    }),
  );
export type MetricsContainersListByAzureMonitorWorkspaceInput =
  typeof MetricsContainersListByAzureMonitorWorkspaceInput.Type;

// Output Schema
export const MetricsContainersListByAzureMonitorWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type MetricsContainersListByAzureMonitorWorkspaceOutput =
  typeof MetricsContainersListByAzureMonitorWorkspaceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MetricsContainersListByAzureMonitorWorkspaceInput,
    outputSchema: MetricsContainersListByAzureMonitorWorkspaceOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Monitor/operations",
    apiVersion: "2026-04-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PipelineGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PipelineGroupsCreateOrUpdateInput =
  typeof PipelineGroupsCreateOrUpdateInput.Type;

// Output Schema
export const PipelineGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PipelineGroupsCreateOrUpdateOutput =
  typeof PipelineGroupsCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PipelineGroupsCreateOrUpdateInput,
    outputSchema: PipelineGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export const PipelineGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
      apiVersion: "2026-04-01",
    }),
  );
export type PipelineGroupsDeleteInput = typeof PipelineGroupsDeleteInput.Type;

// Output Schema
export const PipelineGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PipelineGroupsDeleteOutput = typeof PipelineGroupsDeleteOutput.Type;

// The operation
/**
 * Delete a pipeline group instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PipelineGroupsDeleteInput,
    outputSchema: PipelineGroupsDeleteOutput,
  }),
);
// Input Schema
export const PipelineGroupsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineGroupName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups/{pipelineGroupName}",
    apiVersion: "2026-04-01",
  }),
);
export type PipelineGroupsGetInput = typeof PipelineGroupsGetInput.Type;

// Output Schema
export const PipelineGroupsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PipelineGroupsGetOutput = typeof PipelineGroupsGetOutput.Type;

// The operation
/**
 * Returns the specific pipeline group instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PipelineGroupsGetInput,
  outputSchema: PipelineGroupsGetOutput,
}));
// Input Schema
export const PipelineGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/pipelineGroups",
      apiVersion: "2026-04-01",
    }),
  );
export type PipelineGroupsListByResourceGroupInput =
  typeof PipelineGroupsListByResourceGroupInput.Type;

// Output Schema
export const PipelineGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PipelineGroupsListByResourceGroupOutput =
  typeof PipelineGroupsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all workspaces in the specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PipelineGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PipelineGroupsListByResourceGroupInput,
    outputSchema: PipelineGroupsListByResourceGroupOutput,
  }));
// Input Schema
export const PipelineGroupsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/pipelineGroups",
      apiVersion: "2026-04-01",
    }),
  );
export type PipelineGroupsListBySubscriptionInput =
  typeof PipelineGroupsListBySubscriptionInput.Type;

// Output Schema
export const PipelineGroupsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PipelineGroupsListBySubscriptionOutput =
  typeof PipelineGroupsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all workspaces in the specified subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PipelineGroupsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PipelineGroupsListBySubscriptionInput,
    outputSchema: PipelineGroupsListBySubscriptionOutput,
  }));
// Input Schema
export const PipelineGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PipelineGroupsUpdateInput = typeof PipelineGroupsUpdateInput.Type;

// Output Schema
export const PipelineGroupsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PipelineGroupsUpdateOutput = typeof PipelineGroupsUpdateOutput.Type;

// The operation
/**
 * Updates a pipeline group instance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineGroupName - The name of pipeline group. The name is case insensitive.
 */
export const PipelineGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PipelineGroupsUpdateInput,
    outputSchema: PipelineGroupsUpdateOutput,
  }),
);
