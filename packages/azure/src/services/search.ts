/**
 * Azure Search API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AdminKeysGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
}
export const AdminKeysGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  searchServiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/listAdminKeys",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<AdminKeysGetInput>;

// Output Schema
export interface AdminKeysGetOutput {
  primaryKey?: string;
  secondaryKey?: string;
}
export const AdminKeysGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primaryKey: Schema.optional(Schema.String),
  secondaryKey: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AdminKeysGetOutput>;

// The operation
/**
 * Gets the primary and secondary admin API keys for the specified Azure AI Search service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const AdminKeysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AdminKeysGetInput,
  outputSchema: AdminKeysGetOutput,
}));
// Input Schema
export interface AdminKeysRegenerateInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  keyKind: "primary" | "secondary";
}
export const AdminKeysRegenerateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
    keyKind: Schema.Literals(["primary", "secondary"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/regenerateAdminKey/{keyKind}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<AdminKeysRegenerateInput>;

// Output Schema
export interface AdminKeysRegenerateOutput {
  primaryKey?: string;
  secondaryKey?: string;
}
export const AdminKeysRegenerateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AdminKeysRegenerateOutput>;

// The operation
/**
 * Regenerates either the primary or secondary admin API key. You can only regenerate one key at a time.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param keyKind - Specifies which key to regenerate. Valid values include 'primary' and 'secondary'.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const AdminKeysRegenerate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AdminKeysRegenerateInput,
  outputSchema: AdminKeysRegenerateOutput,
}));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  nspConfigName: string;
}
export const NetworkSecurityPerimeterConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
    nspConfigName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/networkSecurityPerimeterConfigurations/{nspConfigName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsGetOutput {
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
export const NetworkSecurityPerimeterConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetOutput>;

// The operation
/**
 * Gets a network security perimeter configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param nspConfigName - The network security perimeter configuration name.
 */
export const NetworkSecurityPerimeterConfigurationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsGetInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsGetOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
}
export const NetworkSecurityPerimeterConfigurationsListByServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsListByServiceInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsListByServiceOutput {
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
export const NetworkSecurityPerimeterConfigurationsListByServiceOutput =
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsListByServiceOutput>;

// The operation
/**
 * Gets a list of network security perimeter configurations for a search service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 */
export const NetworkSecurityPerimeterConfigurationsListByService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsListByServiceInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsListByServiceOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsReconcileInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  nspConfigName: string;
}
export const NetworkSecurityPerimeterConfigurationsReconcileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
    nspConfigName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/networkSecurityPerimeterConfigurations/{nspConfigName}/reconcile",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsReconcileInput>;

// Output Schema
export type NetworkSecurityPerimeterConfigurationsReconcileOutput = void;
export const NetworkSecurityPerimeterConfigurationsReconcileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsReconcileOutput>;

// The operation
/**
 * Reconcile network security perimeter configuration for the Azure AI Search resource provider. This triggers a manual resync with network security perimeter configurations by ensuring the search service carries the latest configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param nspConfigName - The network security perimeter configuration name.
 */
export const NetworkSecurityPerimeterConfigurationsReconcile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsReconcileInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsReconcileOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Search/operations",
    apiVersion: "2025-05-01",
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
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available REST API operations of the Microsoft.Search provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export interface PrivateEndpointConnectionsDeleteOutput {
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
export const PrivateEndpointConnectionsDeleteOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Disconnects the private endpoint connection and deletes it from the search service.
 * Returns 200 (OK) with the deleted connection details on successful deletion, or 404 (Not Found) if the connection does not exist.
 * NOTE: The behavior of returning 404 is inconsistent with ARM guidelines. Clients should expect a 204 response in future versions and avoid new dependencies on the 404 response.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param privateEndpointConnectionName - The name of the private endpoint connection to the Azure AI Search service with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
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
  searchServiceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
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
export const PrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets the details of the private endpoint connection to the search service in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param privateEndpointConnectionName - The name of the private endpoint connection to the Azure AI Search service with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
}
export const PrivateEndpointConnectionsListByServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByServiceInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByServiceOutput {
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
export const PrivateEndpointConnectionsListByServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByServiceOutput>;

// The operation
/**
 * Gets a list of all private endpoint connections in the given service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const PrivateEndpointConnectionsListByService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByServiceInput,
    outputSchema: PrivateEndpointConnectionsListByServiceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
    groupId?: string;
    provisioningState?:
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Succeeded"
      | "Incomplete"
      | "Canceled";
  };
}
export const PrivateEndpointConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
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
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        groupId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Updating",
            "Deleting",
            "Failed",
            "Succeeded",
            "Incomplete",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsUpdateOutput {
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
export const PrivateEndpointConnectionsUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateOutput>;

// The operation
/**
 * Updates a private endpoint connection to the search service in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param privateEndpointConnectionName - The name of the private endpoint connection to the Azure AI Search service with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const PrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateInput,
    outputSchema: PrivateEndpointConnectionsUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListSupportedInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
}
export const PrivateLinkResourcesListSupportedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateLinkResources",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListSupportedInput>;

// Output Schema
export interface PrivateLinkResourcesListSupportedOutput {
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
export const PrivateLinkResourcesListSupportedOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListSupportedOutput>;

// The operation
/**
 * Gets a list of all supported private link resource types for the given service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const PrivateLinkResourcesListSupported =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListSupportedInput,
    outputSchema: PrivateLinkResourcesListSupportedOutput,
  }));
// Input Schema
export interface QueryKeysCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  name: string;
}
export const QueryKeysCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  searchServiceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/createQueryKey/{name}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<QueryKeysCreateInput>;

// Output Schema
export interface QueryKeysCreateOutput {
  name?: string;
  key?: string;
}
export const QueryKeysCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  key: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<QueryKeysCreateOutput>;

// The operation
/**
 * Generates a new query key for the specified search service. You can create up to 50 query keys per service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param name - The name of the new query API key.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const QueryKeysCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryKeysCreateInput,
  outputSchema: QueryKeysCreateOutput,
}));
// Input Schema
export interface QueryKeysDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  key: string;
}
export const QueryKeysDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  searchServiceName: Schema.String.pipe(T.PathParam()),
  key: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/deleteQueryKey/{key}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<QueryKeysDeleteInput>;

// Output Schema
export type QueryKeysDeleteOutput = void;
export const QueryKeysDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<QueryKeysDeleteOutput>;

// The operation
/**
 * Deletes the specified query key. Unlike admin keys, query keys are not regenerated. The process for regenerating a query key is to delete and then recreate it.
 * Returns 200 (OK) on successful deletion, 204 (No Content) if the service exists but the query keys not found, or 404 (Not Found) if the service is not found.
 * NOTE: The behavior of returning 404 is inconsistent with ARM guidelines. Clients should expect a 204 response in future versions and avoid new dependencies on the 404 response.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param key - The query key to be deleted. Query keys are identified by value, not by name.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const QueryKeysDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryKeysDeleteInput,
  outputSchema: QueryKeysDeleteOutput,
}));
// Input Schema
export interface QueryKeysListBySearchServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
}
export const QueryKeysListBySearchServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/listQueryKeys",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<QueryKeysListBySearchServiceInput>;

// Output Schema
export interface QueryKeysListBySearchServiceOutput {
  value?: { name?: string; key?: string }[];
  nextLink?: string;
}
export const QueryKeysListBySearchServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          key: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<QueryKeysListBySearchServiceOutput>;

// The operation
/**
 * Returns the list of query API keys for the given Azure AI Search service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const QueryKeysListBySearchService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: QueryKeysListBySearchServiceInput,
    outputSchema: QueryKeysListBySearchServiceOutput,
  }));
// Input Schema
export interface ServicesCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  type: "searchServices";
}
export const ServicesCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["searchServices"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Search/checkNameAvailability",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ServicesCheckNameAvailabilityInput>;

// Output Schema
export interface ServicesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const ServicesCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks whether or not the given search service name is available for use. Search service names must be globally unique since they are part of the service URI (https://<name>.search.windows.net).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const ServicesCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesCheckNameAvailabilityInput,
    outputSchema: ServicesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  properties?: {
    replicaCount?: number;
    partitionCount?: number;
    endpoint?: string;
    hostingMode?: "Default" | "HighDensity";
    computeType?: "Default" | "Confidential";
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    status?:
      | "running"
      | "provisioning"
      | "deleting"
      | "degraded"
      | "disabled"
      | "error"
      | "stopped";
    statusDetails?: string;
    provisioningState?: "succeeded" | "provisioning" | "failed";
    networkRuleSet?: {
      ipRules?: { value?: string }[];
      bypass?: "None" | "AzureServices";
    };
    dataExfiltrationProtections?: "BlockAll"[];
    encryptionWithCmk?: {
      enforcement?: "Disabled" | "Enabled" | "Unspecified";
      encryptionComplianceStatus?: "Compliant" | "NonCompliant";
    };
    disableLocalAuth?: boolean | null;
    authOptions?: {
      apiKeyOnly?: unknown;
      aadOrApiKey?: {
        aadAuthFailureMode?: "http403" | "http401WithBearerChallenge";
      };
    };
    semanticSearch?: "disabled" | "free" | "standard";
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
    sharedPrivateLinkResources?: {
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
    eTag?: string;
    upgradeAvailable?: "notAvailable" | "available";
    serviceUpgradedAt?: string;
  };
  sku?: {
    name?:
      | "free"
      | "basic"
      | "standard"
      | "standard2"
      | "standard3"
      | "storage_optimized_l1"
      | "storage_optimized_l2";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        replicaCount: Schema.optional(Schema.Number),
        partitionCount: Schema.optional(Schema.Number),
        endpoint: Schema.optional(Schema.String),
        hostingMode: Schema.optional(
          Schema.Literals(["Default", "HighDensity"]),
        ),
        computeType: Schema.optional(
          Schema.Literals(["Default", "Confidential"]),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        status: Schema.optional(
          Schema.Literals([
            "running",
            "provisioning",
            "deleting",
            "degraded",
            "disabled",
            "error",
            "stopped",
          ]),
        ),
        statusDetails: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["succeeded", "provisioning", "failed"]),
        ),
        networkRuleSet: Schema.optional(
          Schema.Struct({
            ipRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            bypass: Schema.optional(Schema.Literals(["None", "AzureServices"])),
          }),
        ),
        dataExfiltrationProtections: Schema.optional(
          Schema.Array(Schema.Literals(["BlockAll"])),
        ),
        encryptionWithCmk: Schema.optional(
          Schema.Struct({
            enforcement: Schema.optional(
              Schema.Literals(["Disabled", "Enabled", "Unspecified"]),
            ),
            encryptionComplianceStatus: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant"]),
            ),
          }),
        ),
        disableLocalAuth: Schema.optional(Schema.NullOr(Schema.Boolean)),
        authOptions: Schema.optional(
          Schema.Struct({
            apiKeyOnly: Schema.optional(Schema.Unknown),
            aadOrApiKey: Schema.optional(
              Schema.Struct({
                aadAuthFailureMode: Schema.optional(
                  Schema.Literals(["http403", "http401WithBearerChallenge"]),
                ),
              }),
            ),
          }),
        ),
        semanticSearch: Schema.optional(
          Schema.Literals(["disabled", "free", "standard"]),
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
        sharedPrivateLinkResources: Schema.optional(
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
        eTag: Schema.optional(Schema.String),
        upgradeAvailable: Schema.optional(
          Schema.Literals(["notAvailable", "available"]),
        ),
        serviceUpgradedAt: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(
          Schema.Literals([
            "free",
            "basic",
            "standard",
            "standard2",
            "standard3",
            "storage_optimized_l1",
            "storage_optimized_l2",
          ]),
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
          "SystemAssigned, UserAssigned",
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ServicesCreateOrUpdateInput>;

// Output Schema
export interface ServicesCreateOrUpdateOutput {
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
export const ServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServicesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const ServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesCreateOrUpdateInput,
    outputSchema: ServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
}
export const ServicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  searchServiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<ServicesDeleteInput>;

// Output Schema
export type ServicesDeleteOutput = void;
export const ServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesDeleteOutput>;

// The operation
/**
 * Deletes a search service in the given resource group, along with its associated resources.
 * Returns 200 (OK) on successful deletion, or 204 (No Content) if the service is not found.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const ServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export interface ServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
}
export const ServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  searchServiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<ServicesGetInput>;

// Output Schema
export interface ServicesGetOutput {
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
export const ServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesGetOutput>;

// The operation
/**
 * Gets the search service with the given name in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const ServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export interface ServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ServicesListByResourceGroupInput>;

// Output Schema
export interface ServicesListByResourceGroupOutput {
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
export const ServicesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ServicesListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of all search services in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const ServicesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesListByResourceGroupInput,
    outputSchema: ServicesListByResourceGroupOutput,
  }),
);
// Input Schema
export interface ServicesListBySubscriptionInput {
  subscriptionId: string;
}
export const ServicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Search/searchServices",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ServicesListBySubscriptionInput>;

// Output Schema
export interface ServicesListBySubscriptionOutput {
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
export const ServicesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ServicesListBySubscriptionOutput>;

// The operation
/**
 * Gets a list of all search services in the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const ServicesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesListBySubscriptionInput,
    outputSchema: ServicesListBySubscriptionOutput,
  }),
);
// Input Schema
export interface ServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  properties?: {
    replicaCount?: number;
    partitionCount?: number;
    endpoint?: string;
    hostingMode?: "Default" | "HighDensity";
    computeType?: "Default" | "Confidential";
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    status?:
      | "running"
      | "provisioning"
      | "deleting"
      | "degraded"
      | "disabled"
      | "error"
      | "stopped";
    statusDetails?: string;
    provisioningState?: "succeeded" | "provisioning" | "failed";
    networkRuleSet?: {
      ipRules?: { value?: string }[];
      bypass?: "None" | "AzureServices";
    };
    dataExfiltrationProtections?: "BlockAll"[];
    encryptionWithCmk?: {
      enforcement?: "Disabled" | "Enabled" | "Unspecified";
      encryptionComplianceStatus?: "Compliant" | "NonCompliant";
    };
    disableLocalAuth?: boolean | null;
    authOptions?: {
      apiKeyOnly?: unknown;
      aadOrApiKey?: {
        aadAuthFailureMode?: "http403" | "http401WithBearerChallenge";
      };
    };
    semanticSearch?: "disabled" | "free" | "standard";
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
    sharedPrivateLinkResources?: {
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
    eTag?: string;
    upgradeAvailable?: "notAvailable" | "available";
    serviceUpgradedAt?: string;
  };
  sku?: {
    name?:
      | "free"
      | "basic"
      | "standard"
      | "standard2"
      | "standard3"
      | "storage_optimized_l1"
      | "storage_optimized_l2";
  };
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
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
export const ServicesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  searchServiceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      replicaCount: Schema.optional(Schema.Number),
      partitionCount: Schema.optional(Schema.Number),
      endpoint: Schema.optional(Schema.String),
      hostingMode: Schema.optional(Schema.Literals(["Default", "HighDensity"])),
      computeType: Schema.optional(
        Schema.Literals(["Default", "Confidential"]),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
      ),
      status: Schema.optional(
        Schema.Literals([
          "running",
          "provisioning",
          "deleting",
          "degraded",
          "disabled",
          "error",
          "stopped",
        ]),
      ),
      statusDetails: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals(["succeeded", "provisioning", "failed"]),
      ),
      networkRuleSet: Schema.optional(
        Schema.Struct({
          ipRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          bypass: Schema.optional(Schema.Literals(["None", "AzureServices"])),
        }),
      ),
      dataExfiltrationProtections: Schema.optional(
        Schema.Array(Schema.Literals(["BlockAll"])),
      ),
      encryptionWithCmk: Schema.optional(
        Schema.Struct({
          enforcement: Schema.optional(
            Schema.Literals(["Disabled", "Enabled", "Unspecified"]),
          ),
          encryptionComplianceStatus: Schema.optional(
            Schema.Literals(["Compliant", "NonCompliant"]),
          ),
        }),
      ),
      disableLocalAuth: Schema.optional(Schema.NullOr(Schema.Boolean)),
      authOptions: Schema.optional(
        Schema.Struct({
          apiKeyOnly: Schema.optional(Schema.Unknown),
          aadOrApiKey: Schema.optional(
            Schema.Struct({
              aadAuthFailureMode: Schema.optional(
                Schema.Literals(["http403", "http401WithBearerChallenge"]),
              ),
            }),
          ),
        }),
      ),
      semanticSearch: Schema.optional(
        Schema.Literals(["disabled", "free", "standard"]),
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
      sharedPrivateLinkResources: Schema.optional(
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
      eTag: Schema.optional(Schema.String),
      upgradeAvailable: Schema.optional(
        Schema.Literals(["notAvailable", "available"]),
      ),
      serviceUpgradedAt: Schema.optional(Schema.String),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(
        Schema.Literals([
          "free",
          "basic",
          "standard",
          "standard2",
          "standard3",
          "storage_optimized_l1",
          "storage_optimized_l2",
        ]),
      ),
    }),
  ),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned, UserAssigned",
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<ServicesUpdateInput>;

// Output Schema
export interface ServicesUpdateOutput {
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
export const ServicesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesUpdateOutput>;

// The operation
/**
 * Updates an existing search service in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const ServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
// Input Schema
export interface ServicesUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
}
export const ServicesUpgradeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  searchServiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/upgrade",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<ServicesUpgradeInput>;

// Output Schema
export interface ServicesUpgradeOutput {
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
export const ServicesUpgradeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesUpgradeOutput>;

// The operation
/**
 * Upgrades the Azure AI Search service to the latest version available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 */
export const ServicesUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpgradeInput,
  outputSchema: ServicesUpgradeOutput,
}));
// Input Schema
export interface SharedPrivateLinkResourcesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  sharedPrivateLinkResourceName: string;
  properties?: {
    privateLinkResourceId?: string;
    groupId?: string;
    requestMessage?: string;
    resourceRegion?: string;
    status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
    provisioningState?:
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Succeeded"
      | "Incomplete";
  };
}
export const SharedPrivateLinkResourcesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateLinkResourceId: Schema.optional(Schema.String),
        groupId: Schema.optional(Schema.String),
        requestMessage: Schema.optional(Schema.String),
        resourceRegion: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals(["Pending", "Approved", "Rejected", "Disconnected"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Updating",
            "Deleting",
            "Failed",
            "Succeeded",
            "Incomplete",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<SharedPrivateLinkResourcesCreateOrUpdateInput>;

// Output Schema
export interface SharedPrivateLinkResourcesCreateOrUpdateOutput {
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
export const SharedPrivateLinkResourcesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SharedPrivateLinkResourcesCreateOrUpdateOutput>;

// The operation
/**
 * Initiates the creation or update of a shared private link resource managed by the search service in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param sharedPrivateLinkResourceName - The name of the shared private link resource managed by the Azure AI Search service within the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const SharedPrivateLinkResourcesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SharedPrivateLinkResourcesCreateOrUpdateInput,
    outputSchema: SharedPrivateLinkResourcesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SharedPrivateLinkResourcesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  sharedPrivateLinkResourceName: string;
}
export const SharedPrivateLinkResourcesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<SharedPrivateLinkResourcesDeleteInput>;

// Output Schema
export type SharedPrivateLinkResourcesDeleteOutput = void;
export const SharedPrivateLinkResourcesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SharedPrivateLinkResourcesDeleteOutput>;

// The operation
/**
 * Initiates the deletion of the shared private link resource from the search service.
 * Returns 202 (Accepted) for asynchronous deletion, 204 (No Content) if the service exists but the shared private link is not found, or 404 (Not Found) if the service is not found.
 * NOTE: The behavior of returning 404 is inconsistent with ARM guidelines. Clients should expect a 204 response in future versions and avoid new dependencies on the 404 response.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param sharedPrivateLinkResourceName - The name of the shared private link resource managed by the Azure AI Search service within the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const SharedPrivateLinkResourcesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SharedPrivateLinkResourcesDeleteInput,
    outputSchema: SharedPrivateLinkResourcesDeleteOutput,
  }));
// Input Schema
export interface SharedPrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
  sharedPrivateLinkResourceName: string;
}
export const SharedPrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<SharedPrivateLinkResourcesGetInput>;

// Output Schema
export interface SharedPrivateLinkResourcesGetOutput {
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
export const SharedPrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<SharedPrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets the details of the shared private link resource managed by the search service in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param sharedPrivateLinkResourceName - The name of the shared private link resource managed by the Azure AI Search service within the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const SharedPrivateLinkResourcesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SharedPrivateLinkResourcesGetInput,
    outputSchema: SharedPrivateLinkResourcesGetOutput,
  }));
// Input Schema
export interface SharedPrivateLinkResourcesListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  searchServiceName: string;
}
export const SharedPrivateLinkResourcesListByServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    searchServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/sharedPrivateLinkResources",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<SharedPrivateLinkResourcesListByServiceInput>;

// Output Schema
export interface SharedPrivateLinkResourcesListByServiceOutput {
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
export const SharedPrivateLinkResourcesListByServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SharedPrivateLinkResourcesListByServiceOutput>;

// The operation
/**
 * Gets a list of all shared private link resources managed by the given service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param searchServiceName - The name of the Azure AI Search service associated with the specified resource group.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 */
export const SharedPrivateLinkResourcesListByService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SharedPrivateLinkResourcesListByServiceInput,
    outputSchema: SharedPrivateLinkResourcesListByServiceOutput,
  }));
// Input Schema
export interface UsageBySubscriptionSkuInput {
  location: string;
  subscriptionId: string;
  skuName: string;
}
export const UsageBySubscriptionSkuInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    skuName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Search/locations/{location}/usages/{skuName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<UsageBySubscriptionSkuInput>;

// Output Schema
export interface UsageBySubscriptionSkuOutput {
  id?: string;
  unit?: string;
  currentValue?: number;
  limit?: number;
  name?: { value?: string; localizedValue?: string };
}
export const UsageBySubscriptionSkuOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
    currentValue: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    name: Schema.optional(
      Schema.Struct({
        value: Schema.optional(Schema.String),
        localizedValue: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<UsageBySubscriptionSkuOutput>;

// The operation
/**
 * Gets the quota usage for a search SKU in the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 * @param location - The name of the Azure region.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param skuName - The unique SKU name that identifies a billable tier.
 */
export const UsageBySubscriptionSku = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsageBySubscriptionSkuInput,
    outputSchema: UsageBySubscriptionSkuOutput,
  }),
);
// Input Schema
export interface UsagesListBySubscriptionInput {
  subscriptionId: string;
  location: string;
}
export const UsagesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Search/locations/{location}/usages",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<UsagesListBySubscriptionInput>;

// Output Schema
export interface UsagesListBySubscriptionOutput {
  value?: {
    id?: string;
    unit?: string;
    currentValue?: number;
    limit?: number;
    name?: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const UsagesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          unit: Schema.optional(Schema.String),
          currentValue: Schema.optional(Schema.Number),
          limit: Schema.optional(Schema.Number),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UsagesListBySubscriptionOutput>;

// The operation
/**
 * Get a list of all Azure AI Search quota usages across the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param x-ms-client-request-id - A client-generated GUID value that identifies this request. If specified, this will be included in response information as a way to track the request.
 * @param location - The name of the Azure region.
 */
export const UsagesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsagesListBySubscriptionInput,
    outputSchema: UsagesListBySubscriptionOutput,
  }),
);
