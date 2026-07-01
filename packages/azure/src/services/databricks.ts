/**
 * Azure Databricks API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AccessConnectorsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectorName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    referedBy?: string[];
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
  tags?: Record<string, string>;
  location: string;
}
export const AccessConnectorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        referedBy: Schema.optional(Schema.Array(Schema.String)),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AccessConnectorsCreateOrUpdateInput>;

// Output Schema
export interface AccessConnectorsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccessConnectorsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccessConnectorsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates Azure Databricks Access Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectorName - The name of the Azure Databricks Access Connector.
 */
export const AccessConnectorsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessConnectorsCreateOrUpdateInput,
    outputSchema: AccessConnectorsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AccessConnectorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectorName: string;
}
export const AccessConnectorsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AccessConnectorsDeleteInput>;

// Output Schema
export type AccessConnectorsDeleteOutput = void;
export const AccessConnectorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccessConnectorsDeleteOutput>;

// The operation
/**
 * Deletes the Azure Databricks Access Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectorName - The name of the Azure Databricks Access Connector.
 */
export const AccessConnectorsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessConnectorsDeleteInput,
    outputSchema: AccessConnectorsDeleteOutput,
  }),
);
// Input Schema
export interface AccessConnectorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectorName: string;
}
export const AccessConnectorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AccessConnectorsGetInput>;

// Output Schema
export interface AccessConnectorsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccessConnectorsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccessConnectorsGetOutput>;

// The operation
/**
 * Gets an Azure Databricks Access Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectorName - The name of the Azure Databricks Access Connector.
 */
export const AccessConnectorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccessConnectorsGetInput,
  outputSchema: AccessConnectorsGetOutput,
}));
// Input Schema
export interface AccessConnectorsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AccessConnectorsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AccessConnectorsListByResourceGroupInput>;

// Output Schema
export interface AccessConnectorsListByResourceGroupOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const AccessConnectorsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccessConnectorsListByResourceGroupOutput>;

// The operation
/**
 * Gets all the Azure Databricks Access Connectors within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AccessConnectorsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessConnectorsListByResourceGroupInput,
    outputSchema: AccessConnectorsListByResourceGroupOutput,
  }));
// Input Schema
export interface AccessConnectorsListBySubscriptionInput {
  subscriptionId: string;
}
export const AccessConnectorsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Databricks/accessConnectors",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AccessConnectorsListBySubscriptionInput>;

// Output Schema
export interface AccessConnectorsListBySubscriptionOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const AccessConnectorsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccessConnectorsListBySubscriptionOutput>;

// The operation
/**
 * Gets all the Azure Databricks Access Connectors within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AccessConnectorsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessConnectorsListBySubscriptionInput,
    outputSchema: AccessConnectorsListBySubscriptionOutput,
  }));
// Input Schema
export interface AccessConnectorsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectorName: string;
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
}
export const AccessConnectorsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AccessConnectorsUpdateInput>;

// Output Schema
export interface AccessConnectorsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccessConnectorsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccessConnectorsUpdateOutput>;

// The operation
/**
 * Updates an Azure Databricks Access Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectorName - The name of the Azure Databricks Access Connector.
 */
export const AccessConnectorsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessConnectorsUpdateInput,
    outputSchema: AccessConnectorsUpdateOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Databricks/operations",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
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
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OutboundNetworkDependenciesEndpointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const OutboundNetworkDependenciesEndpointsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<OutboundNetworkDependenciesEndpointsListInput>;

// Output Schema
export type OutboundNetworkDependenciesEndpointsListOutput = {
  category?: string;
  endpoints?: {
    domainName?: string;
    endpointDetails?: {
      ipAddress?: string;
      port?: number;
      latency?: number;
      isAccessible?: boolean;
    }[];
  }[];
}[];
export const OutboundNetworkDependenciesEndpointsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      category: Schema.optional(Schema.String),
      endpoints: Schema.optional(
        Schema.Array(
          Schema.Struct({
            domainName: Schema.optional(Schema.String),
            endpointDetails: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ipAddress: Schema.optional(Schema.String),
                  port: Schema.optional(Schema.Number),
                  latency: Schema.optional(Schema.Number),
                  isAccessible: Schema.optional(Schema.Boolean),
                }),
              ),
            ),
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Codec<OutboundNetworkDependenciesEndpointsListOutput>;

// The operation
/**
 * Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified Workspace.
 *
 * Gets the list of endpoints that VNET Injected Workspace calls Azure Databricks Control Plane. You must configure outbound access with these endpoints. For more information, see https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/udr
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const OutboundNetworkDependenciesEndpointsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OutboundNetworkDependenciesEndpointsListInput,
    outputSchema: OutboundNetworkDependenciesEndpointsListOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
  properties: {
    privateEndpoint?: { id?: string };
    groupIds?: string[];
    privateLinkServiceConnectionState: {
      status: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?:
      | "Succeeded"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Failed";
  };
}
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      groupIds: Schema.optional(Schema.Array(Schema.String)),
      privateLinkServiceConnectionState: Schema.Struct({
        status: Schema.Literals([
          "Pending",
          "Approved",
          "Rejected",
          "Disconnected",
        ]),
        description: Schema.optional(Schema.String),
        actionsRequired: Schema.optional(Schema.String),
      }),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Creating",
          "Updating",
          "Deleting",
          "Failed",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
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
 * Update private endpoint connection status
 *
 * Update the status of a private endpoint connection with the specified name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Remove private endpoint connection
 *
 * Remove private endpoint connection with the specified name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
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
 * Get private endpoint connection
 *
 * Get a private endpoint connection properties for a workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateEndpointConnections",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List private endpoint connections
 *
 * List private endpoint connections of the workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  groupId: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateLinkResources/{groupId}",
      apiVersion: "2026-01-01",
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
 * Get the specified private link resource
 *
 * Get the specified private link resource for the given group id (sub-resource)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param groupId - The name of the private link resource
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateLinkResources",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkResourcesListOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListOutput>;

// The operation
/**
 * List private link resources
 *
 * List private link resources for a given workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
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
export interface VNetPeeringCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  peeringName: string;
  properties: {
    allowVirtualNetworkAccess?: boolean;
    allowForwardedTraffic?: boolean;
    allowGatewayTransit?: boolean;
    useRemoteGateways?: boolean;
    databricksVirtualNetwork?: { id?: string };
    databricksAddressSpace?: { addressPrefixes?: string[] };
    remoteVirtualNetwork: { id?: string };
    remoteAddressSpace?: { addressPrefixes?: string[] };
    peeringState?: "Initiated" | "Connected" | "Disconnected";
    provisioningState?: "Succeeded" | "Updating" | "Deleting" | "Failed";
  };
}
export const VNetPeeringCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      allowVirtualNetworkAccess: Schema.optional(Schema.Boolean),
      allowForwardedTraffic: Schema.optional(Schema.Boolean),
      allowGatewayTransit: Schema.optional(Schema.Boolean),
      useRemoteGateways: Schema.optional(Schema.Boolean),
      databricksVirtualNetwork: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      databricksAddressSpace: Schema.optional(
        Schema.Struct({
          addressPrefixes: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      remoteVirtualNetwork: Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
      remoteAddressSpace: Schema.optional(
        Schema.Struct({
          addressPrefixes: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      peeringState: Schema.optional(
        Schema.Literals(["Initiated", "Connected", "Disconnected"]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Updating", "Deleting", "Failed"]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/virtualNetworkPeerings/{peeringName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<VNetPeeringCreateOrUpdateInput>;

// Output Schema
export interface VNetPeeringCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const VNetPeeringCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VNetPeeringCreateOrUpdateOutput>;

// The operation
/**
 * Creates vNet Peering for workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param peeringName - The name of the workspace vNet peering.
 */
export const vNetPeeringCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VNetPeeringCreateOrUpdateInput,
    outputSchema: VNetPeeringCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface VNetPeeringDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  peeringName: string;
}
export const VNetPeeringDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/virtualNetworkPeerings/{peeringName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<VNetPeeringDeleteInput>;

// Output Schema
export type VNetPeeringDeleteOutput = void;
export const VNetPeeringDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VNetPeeringDeleteOutput>;

// The operation
/**
 * Deletes the workspace vNetPeering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param peeringName - The name of the workspace vNet peering.
 */
export const vNetPeeringDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VNetPeeringDeleteInput,
  outputSchema: VNetPeeringDeleteOutput,
}));
// Input Schema
export interface VNetPeeringGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  peeringName: string;
}
export const VNetPeeringGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  peeringName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/virtualNetworkPeerings/{peeringName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<VNetPeeringGetInput>;

// Output Schema
export interface VNetPeeringGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const VNetPeeringGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<VNetPeeringGetOutput>;

// The operation
/**
 * Gets the workspace vNet Peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param peeringName - The name of the workspace vNet peering.
 */
export const vNetPeeringGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VNetPeeringGetInput,
  outputSchema: VNetPeeringGetOutput,
}));
// Input Schema
export interface VNetPeeringListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const VNetPeeringListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/virtualNetworkPeerings",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<VNetPeeringListByWorkspaceInput>;

// Output Schema
export interface VNetPeeringListByWorkspaceOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const VNetPeeringListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VNetPeeringListByWorkspaceOutput>;

// The operation
/**
 * Lists the workspace vNet Peerings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const vNetPeeringListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VNetPeeringListByWorkspaceInput,
    outputSchema: VNetPeeringListByWorkspaceOutput,
  }),
);
// Input Schema
export interface WorkspacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties: {
    computeMode: "Serverless" | "Hybrid";
    managedResourceGroupId?: string;
    parameters?: {
      amlWorkspaceId?: { type?: "Bool" | "Object" | "String"; value: string };
      customVirtualNetworkId?: {
        type?: "Bool" | "Object" | "String";
        value: string;
      };
      customPublicSubnetName?: {
        type?: "Bool" | "Object" | "String";
        value: string;
      };
      customPrivateSubnetName?: {
        type?: "Bool" | "Object" | "String";
        value: string;
      };
      enableNoPublicIp?: {
        type?: "Bool" | "Object" | "String";
        value: boolean;
      };
      loadBalancerBackendPoolName?: {
        type?: "Bool" | "Object" | "String";
        value: string;
      };
      loadBalancerId?: { type?: "Bool" | "Object" | "String"; value: string };
      natGatewayName?: { type?: "Bool" | "Object" | "String"; value: string };
      publicIpName?: { type?: "Bool" | "Object" | "String"; value: string };
      prepareEncryption?: {
        type?: "Bool" | "Object" | "String";
        value: boolean;
      };
      encryption?: {
        type?: "Bool" | "Object" | "String";
        value?: {
          keySource?: "Default" | "Microsoft.Keyvault";
          KeyName?: string;
          keyversion?: string;
          keyvaulturi?: string;
        };
      };
      requireInfrastructureEncryption?: {
        type?: "Bool" | "Object" | "String";
        value: boolean;
      };
      storageAccountName?: {
        type?: "Bool" | "Object" | "String";
        value: string;
      };
      storageAccountSkuName?: {
        type?: "Bool" | "Object" | "String";
        value: string;
      };
      vnetAddressPrefix?: {
        type?: "Bool" | "Object" | "String";
        value: string;
      };
      resourceTags?: { type?: "Bool" | "Object" | "String"; value: unknown };
    };
    provisioningState?:
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    uiDefinitionUri?: string;
    authorizations?: { principalId: string; roleDefinitionId: string }[];
    createdBy?: { oid?: string; puid?: string; applicationId?: string };
    updatedBy?: { oid?: string; puid?: string; applicationId?: string };
    createdDateTime?: string;
    workspaceId?: string;
    workspaceUrl?: string;
    storageAccountIdentity?: {
      principalId?: string;
      tenantId?: string;
      type?: string;
    };
    managedDiskIdentity?: {
      principalId?: string;
      tenantId?: string;
      type?: string;
    };
    diskEncryptionSetId?: string;
    encryption?: {
      entities: {
        managedServices?: {
          keySource: "Microsoft.Keyvault";
          keyVaultProperties?: {
            keyVaultUri: string;
            keyName: string;
            keyVersion: string;
          };
        };
        managedDisk?: {
          keySource: "Microsoft.Keyvault";
          keyVaultProperties: {
            keyVaultUri: string;
            keyName: string;
            keyVersion: string;
          };
          rotationToLatestKeyVersionEnabled?: boolean;
        };
      };
    };
    enhancedSecurityCompliance?: {
      automaticClusterUpdate?: { value?: "Enabled" | "Disabled" };
      complianceSecurityProfile?: {
        complianceStandards?: string[];
        value?: "Enabled" | "Disabled";
      };
      enhancedSecurityMonitoring?: { value?: "Enabled" | "Disabled" };
    };
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
    requiredNsgRules?:
      | "AllRules"
      | "NoAzureDatabricksRules"
      | "NoAzureServiceRules";
    defaultCatalog?: {
      initialType?: "HiveMetastore" | "UnityCatalog";
      initialName?: string;
    };
    isUcEnabled?: boolean;
    accessConnector?: {
      id: string;
      identityType: "SystemAssigned" | "UserAssigned";
      userAssignedIdentityId?: string;
    };
    defaultStorageFirewall?: "Disabled" | "Enabled";
  };
  sku?: { name: string; tier?: string };
  tags?: Record<string, string>;
  location: string;
}
export const WorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      computeMode: Schema.Literals(["Serverless", "Hybrid"]),
      managedResourceGroupId: Schema.optional(Schema.String),
      parameters: Schema.optional(
        Schema.Struct({
          amlWorkspaceId: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          customVirtualNetworkId: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          customPublicSubnetName: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          customPrivateSubnetName: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          enableNoPublicIp: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.Boolean,
            }),
          ),
          loadBalancerBackendPoolName: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          loadBalancerId: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          natGatewayName: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          publicIpName: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          prepareEncryption: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.Boolean,
            }),
          ),
          encryption: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.optional(
                Schema.Struct({
                  keySource: Schema.optional(
                    Schema.Literals(["Default", "Microsoft.Keyvault"]),
                  ),
                  KeyName: Schema.optional(Schema.String),
                  keyversion: Schema.optional(Schema.String),
                  keyvaulturi: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          requireInfrastructureEncryption: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.Boolean,
            }),
          ),
          storageAccountName: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          storageAccountSkuName: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          vnetAddressPrefix: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.String,
            }),
          ),
          resourceTags: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Bool", "Object", "String"]),
              ),
              value: Schema.Unknown,
            }),
          ),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Running",
          "Ready",
          "Creating",
          "Created",
          "Deleting",
          "Deleted",
          "Canceled",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      uiDefinitionUri: Schema.optional(Schema.String),
      authorizations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            roleDefinitionId: Schema.String,
          }),
        ),
      ),
      createdBy: Schema.optional(
        Schema.Struct({
          oid: Schema.optional(Schema.String),
          puid: Schema.optional(Schema.String),
          applicationId: Schema.optional(Schema.String),
        }),
      ),
      updatedBy: Schema.optional(
        Schema.Struct({
          oid: Schema.optional(Schema.String),
          puid: Schema.optional(Schema.String),
          applicationId: Schema.optional(Schema.String),
        }),
      ),
      createdDateTime: Schema.optional(Schema.String),
      workspaceId: Schema.optional(Schema.String),
      workspaceUrl: Schema.optional(Schema.String),
      storageAccountIdentity: Schema.optional(
        Schema.Struct({
          principalId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
      managedDiskIdentity: Schema.optional(
        Schema.Struct({
          principalId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
      diskEncryptionSetId: Schema.optional(Schema.String),
      encryption: Schema.optional(
        Schema.Struct({
          entities: Schema.Struct({
            managedServices: Schema.optional(
              Schema.Struct({
                keySource: Schema.Literals(["Microsoft.Keyvault"]),
                keyVaultProperties: Schema.optional(
                  Schema.Struct({
                    keyVaultUri: Schema.String,
                    keyName: Schema.String,
                    keyVersion: Schema.String,
                  }),
                ),
              }),
            ),
            managedDisk: Schema.optional(
              Schema.Struct({
                keySource: Schema.Literals(["Microsoft.Keyvault"]),
                keyVaultProperties: Schema.Struct({
                  keyVaultUri: Schema.String,
                  keyName: Schema.String,
                  keyVersion: Schema.String,
                }),
                rotationToLatestKeyVersionEnabled: Schema.optional(
                  Schema.Boolean,
                ),
              }),
            ),
          }),
        }),
      ),
      enhancedSecurityCompliance: Schema.optional(
        Schema.Struct({
          automaticClusterUpdate: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            }),
          ),
          complianceSecurityProfile: Schema.optional(
            Schema.Struct({
              complianceStandards: Schema.optional(Schema.Array(Schema.String)),
              value: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            }),
          ),
          enhancedSecurityMonitoring: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
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
          }),
        ),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      requiredNsgRules: Schema.optional(
        Schema.Literals([
          "AllRules",
          "NoAzureDatabricksRules",
          "NoAzureServiceRules",
        ]),
      ),
      defaultCatalog: Schema.optional(
        Schema.Struct({
          initialType: Schema.optional(
            Schema.Literals(["HiveMetastore", "UnityCatalog"]),
          ),
          initialName: Schema.optional(Schema.String),
        }),
      ),
      isUcEnabled: Schema.optional(Schema.Boolean),
      accessConnector: Schema.optional(
        Schema.Struct({
          id: Schema.String,
          identityType: Schema.Literals(["SystemAssigned", "UserAssigned"]),
          userAssignedIdentityId: Schema.optional(Schema.String),
        }),
      ),
      defaultStorageFirewall: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
    }),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
      apiVersion: "2026-01-01",
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
 * Creates a new workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
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
  forceDeletion?: boolean;
}
export const WorkspacesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  forceDeletion: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<WorkspacesDeleteInput>;

// Output Schema
export type WorkspacesDeleteOutput = void;
export const WorkspacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacesDeleteOutput>;

// The operation
/**
 * Deletes the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param forceDeletion - Optional parameter to retain default unity catalog data. By default the data will retained if Uc is enabled on the workspace.
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
    apiVersion: "2026-01-01",
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
 * Gets the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesGetInput,
  outputSchema: WorkspacesGetOutput,
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListByResourceGroupInput>;

// Output Schema
export interface WorkspacesListByResourceGroupOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const WorkspacesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspacesListByResourceGroupOutput>;

// The operation
/**
 * Gets all the workspaces within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkspacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListByResourceGroupInput,
    outputSchema: WorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export interface WorkspacesListBySubscriptionInput {
  subscriptionId: string;
}
export const WorkspacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Databricks/workspaces",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListBySubscriptionInput>;

// Output Schema
export interface WorkspacesListBySubscriptionOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const WorkspacesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspacesListBySubscriptionOutput>;

// The operation
/**
 * Gets all the workspaces within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const WorkspacesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListBySubscriptionInput,
    outputSchema: WorkspacesListBySubscriptionOutput,
  }));
// Input Schema
export interface WorkspacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  tags?: Record<string, string>;
}
export const WorkspacesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
    apiVersion: "2026-01-01",
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
 * Updates a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesUpdateInput,
  outputSchema: WorkspacesUpdateOutput,
}));
