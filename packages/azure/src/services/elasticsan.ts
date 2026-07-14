/**
 * Azure Elasticsan API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ElasticSansCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  properties: {
    sku: { name: "Premium_LRS" | "Premium_ZRS"; tier?: "Premium" };
    availabilityZones?: string[];
    provisioningState?:
      | "Invalid"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Deleted"
      | "Restoring";
    baseSizeTiB: number;
    extendedCapacitySizeTiB: number;
    totalVolumeSizeGiB?: number;
    volumeGroupCount?: number;
    totalIops?: number;
    totalMBps?: number;
    totalSizeTiB?: number;
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
    autoScaleProperties?: {
      scaleUpProperties?: {
        unusedSizeTiB?: number;
        increaseCapacityUnitByTiB?: number;
        capacityUnitScaleUpLimitTiB?: number;
        autoScalePolicyEnforcement?: "None" | "Enabled" | "Disabled";
      };
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const ElasticSansCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    sku: Schema.Struct({
      name: Schema.Literals(["Premium_LRS", "Premium_ZRS"]),
      tier: Schema.optional(Schema.Literals(["Premium"])),
    }),
    availabilityZones: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Invalid",
        "Succeeded",
        "Failed",
        "Canceled",
        "Pending",
        "Creating",
        "Updating",
        "Deleting",
        "Deleted",
        "Restoring",
      ]),
    ),
    baseSizeTiB: Schema.Number,
    extendedCapacitySizeTiB: Schema.Number,
    totalVolumeSizeGiB: Schema.optional(Schema.Number),
    volumeGroupCount: Schema.optional(Schema.Number),
    totalIops: Schema.optional(Schema.Number),
    totalMBps: Schema.optional(Schema.Number),
    totalSizeTiB: Schema.optional(Schema.Number),
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
    autoScaleProperties: Schema.optional(
      Schema.Struct({
        scaleUpProperties: Schema.optional(
          Schema.Struct({
            unusedSizeTiB: Schema.optional(Schema.Number),
            increaseCapacityUnitByTiB: Schema.optional(Schema.Number),
            capacityUnitScaleUpLimitTiB: Schema.optional(Schema.Number),
            autoScalePolicyEnforcement: Schema.optional(
              Schema.Literals(["None", "Enabled", "Disabled"]),
            ),
          }),
        ),
      }),
    ),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ElasticSansCreateInput>;

// Output Schema
export interface ElasticSansCreateOutput {
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
export const ElasticSansCreateOutput =
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
  }) as unknown as Schema.Codec<ElasticSansCreateOutput>;

// The operation
/**
 * Create ElasticSan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const ElasticSansCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ElasticSansCreateInput,
  outputSchema: ElasticSansCreateOutput,
}));
// Input Schema
export interface ElasticSansDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
}
export const ElasticSansDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ElasticSansDeleteInput>;

// Output Schema
export type ElasticSansDeleteOutput = void;
export const ElasticSansDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ElasticSansDeleteOutput>;

// The operation
/**
 * Delete a Elastic San.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const ElasticSansDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ElasticSansDeleteInput,
  outputSchema: ElasticSansDeleteOutput,
}));
// Input Schema
export interface ElasticSansGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
}
export const ElasticSansGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ElasticSansGetInput>;

// Output Schema
export interface ElasticSansGetOutput {
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
export const ElasticSansGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ElasticSansGetOutput>;

// The operation
/**
 * Get a ElasticSan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const ElasticSansGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ElasticSansGetInput,
  outputSchema: ElasticSansGetOutput,
}));
// Input Schema
export interface ElasticSansListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ElasticSansListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ElasticSansListByResourceGroupInput>;

// Output Schema
export interface ElasticSansListByResourceGroupOutput {
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
export const ElasticSansListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ElasticSansListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of ElasticSan in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ElasticSansListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ElasticSansListByResourceGroupInput,
    outputSchema: ElasticSansListByResourceGroupOutput,
  }));
// Input Schema
export interface ElasticSansListBySubscriptionInput {
  subscriptionId: string;
}
export const ElasticSansListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ElasticSan/elasticSans",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ElasticSansListBySubscriptionInput>;

// Output Schema
export interface ElasticSansListBySubscriptionOutput {
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
export const ElasticSansListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ElasticSansListBySubscriptionOutput>;

// The operation
/**
 * Gets a list of ElasticSans in a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ElasticSansListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ElasticSansListBySubscriptionInput,
    outputSchema: ElasticSansListBySubscriptionOutput,
  }));
// Input Schema
export interface ElasticSansUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  properties?: {
    baseSizeTiB?: number;
    extendedCapacitySizeTiB?: number;
    publicNetworkAccess?: "Enabled" | "Disabled";
    autoScaleProperties?: {
      scaleUpProperties?: {
        unusedSizeTiB?: number;
        increaseCapacityUnitByTiB?: number;
        capacityUnitScaleUpLimitTiB?: number;
        autoScalePolicyEnforcement?: "None" | "Enabled" | "Disabled";
      };
    };
  };
  tags?: Record<string, string>;
}
export const ElasticSansUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      baseSizeTiB: Schema.optional(Schema.Number),
      extendedCapacitySizeTiB: Schema.optional(Schema.Number),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      autoScaleProperties: Schema.optional(
        Schema.Struct({
          scaleUpProperties: Schema.optional(
            Schema.Struct({
              unusedSizeTiB: Schema.optional(Schema.Number),
              increaseCapacityUnitByTiB: Schema.optional(Schema.Number),
              capacityUnitScaleUpLimitTiB: Schema.optional(Schema.Number),
              autoScalePolicyEnforcement: Schema.optional(
                Schema.Literals(["None", "Enabled", "Disabled"]),
              ),
            }),
          ),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ElasticSansUpdateInput>;

// Output Schema
export interface ElasticSansUpdateOutput {
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
export const ElasticSansUpdateOutput =
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
  }) as unknown as Schema.Codec<ElasticSansUpdateOutput>;

// The operation
/**
 * Update a Elastic San.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const ElasticSansUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ElasticSansUpdateInput,
  outputSchema: ElasticSansUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ElasticSan/operations",
    apiVersion: "2025-09-01",
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
export interface PrivateEndpointConnectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  privateEndpointConnectionName: string;
  properties: {
    provisioningState?:
      | "Invalid"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Deleted"
      | "Restoring";
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Failed" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    groupIds?: string[];
  };
}
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Invalid",
          "Succeeded",
          "Failed",
          "Canceled",
          "Pending",
          "Creating",
          "Updating",
          "Deleting",
          "Deleted",
          "Restoring",
        ]),
      ),
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      privateLinkServiceConnectionState: Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["Pending", "Approved", "Failed", "Rejected"]),
        ),
        description: Schema.optional(Schema.String),
        actionsRequired: Schema.optional(Schema.String),
      }),
      groupIds: Schema.optional(Schema.Array(Schema.String)),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOutput {
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
export const PrivateEndpointConnectionsCreateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOutput>;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the Elastic San
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param privateEndpointConnectionName - The name of the Private Endpoint connection.
 */
export const PrivateEndpointConnectionsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateInput,
    outputSchema: PrivateEndpointConnectionsCreateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the Elastic San
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param privateEndpointConnectionName - The name of the Private Endpoint connection.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-09-01",
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the Elastic San
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param privateEndpointConnectionName - The name of the Private Endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/privateEndpointConnections",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
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
export const PrivateEndpointConnectionsListOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List all Private Endpoint Connections associated with the Elastic San.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListByElasticSanInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
}
export const PrivateLinkResourcesListByElasticSanInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/privateLinkResources",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByElasticSanInput>;

// Output Schema
export interface PrivateLinkResourcesListByElasticSanOutput {
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
export const PrivateLinkResourcesListByElasticSanOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByElasticSanOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a elastic San.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const PrivateLinkResourcesListByElasticSan =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByElasticSanInput,
    outputSchema: PrivateLinkResourcesListByElasticSanOutput,
  }));
// Input Schema
export interface SkusListInput {
  subscriptionId: string;
  $filter?: string;
}
export const SkusListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ElasticSan/skus",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<SkusListInput>;

// Output Schema
export interface SkusListOutput {
  value: {
    name: "Premium_LRS" | "Premium_ZRS";
    tier?: "Premium";
    resourceType?: string;
    locations?: string[];
    locationInfo?: { location?: string; zones?: string[] }[];
    capabilities?: { name?: string; value?: string }[];
  }[];
  nextLink?: string;
}
export const SkusListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.Literals(["Premium_LRS", "Premium_ZRS"]),
      tier: Schema.optional(Schema.Literals(["Premium"])),
      resourceType: Schema.optional(Schema.String),
      locations: Schema.optional(Schema.Array(Schema.String)),
      locationInfo: Schema.optional(
        Schema.Array(
          Schema.Struct({
            location: Schema.optional(Schema.String),
            zones: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      ),
      capabilities: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SkusListOutput>;

// The operation
/**
 * List all the available Skus in the region and information related to them
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - Specify $filter='location eq <location>' to filter on location.
 */
export const SkusList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
// Input Schema
export interface VolumeGroupsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties?: {
    provisioningState?:
      | "Invalid"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Deleted"
      | "Restoring";
    protocolType?: "Iscsi" | "None";
    encryption?:
      | "EncryptionAtRestWithPlatformKey"
      | "EncryptionAtRestWithCustomerManagedKey";
    encryptionProperties?: {
      keyVaultProperties?: {
        keyName?: string;
        keyVersion?: string;
        keyVaultUri?: string;
        currentVersionedKeyIdentifier?: string;
        lastKeyRotationTimestamp?: string;
        currentVersionedKeyExpirationTimestamp?: string;
      };
      identity?: { userAssignedIdentity?: string };
    };
    networkAcls?: { virtualNetworkRules?: { id: string; action?: "Allow" }[] };
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
    enforceDataIntegrityCheckForIscsi?: boolean;
  };
}
export const VolumeGroupsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
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
        provisioningState: Schema.optional(
          Schema.Literals([
            "Invalid",
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Creating",
            "Updating",
            "Deleting",
            "Deleted",
            "Restoring",
          ]),
        ),
        protocolType: Schema.optional(Schema.Literals(["Iscsi", "None"])),
        encryption: Schema.optional(
          Schema.Literals([
            "EncryptionAtRestWithPlatformKey",
            "EncryptionAtRestWithCustomerManagedKey",
          ]),
        ),
        encryptionProperties: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyName: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
                keyVaultUri: Schema.optional(Schema.String),
                currentVersionedKeyIdentifier: Schema.optional(Schema.String),
                lastKeyRotationTimestamp: Schema.optional(Schema.String),
                currentVersionedKeyExpirationTimestamp: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
            identity: Schema.optional(
              Schema.Struct({
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        networkAcls: Schema.optional(
          Schema.Struct({
            virtualNetworkRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  action: Schema.optional(Schema.Literals(["Allow"])),
                }),
              ),
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
        enforceDataIntegrityCheckForIscsi: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<VolumeGroupsCreateInput>;

// Output Schema
export interface VolumeGroupsCreateOutput {
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
export const VolumeGroupsCreateOutput =
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
  }) as unknown as Schema.Codec<VolumeGroupsCreateOutput>;

// The operation
/**
 * Create a Volume Group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumeGroupsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsCreateInput,
  outputSchema: VolumeGroupsCreateOutput,
}));
// Input Schema
export interface VolumeGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
}
export const VolumeGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<VolumeGroupsDeleteInput>;

// Output Schema
export type VolumeGroupsDeleteOutput = void;
export const VolumeGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumeGroupsDeleteOutput>;

// The operation
/**
 * Delete an VolumeGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumeGroupsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsDeleteInput,
  outputSchema: VolumeGroupsDeleteOutput,
}));
// Input Schema
export interface VolumeGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
}
export const VolumeGroupsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<VolumeGroupsGetInput>;

// Output Schema
export interface VolumeGroupsGetOutput {
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
export const VolumeGroupsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumeGroupsGetOutput>;

// The operation
/**
 * Get an VolumeGroups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumeGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsGetInput,
  outputSchema: VolumeGroupsGetOutput,
}));
// Input Schema
export interface VolumeGroupsListByElasticSanInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
}
export const VolumeGroupsListByElasticSanInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<VolumeGroupsListByElasticSanInput>;

// Output Schema
export interface VolumeGroupsListByElasticSanOutput {
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
export const VolumeGroupsListByElasticSanOutput =
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
  }) as unknown as Schema.Codec<VolumeGroupsListByElasticSanOutput>;

// The operation
/**
 * List VolumeGroups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const VolumeGroupsListByElasticSan =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VolumeGroupsListByElasticSanInput,
    outputSchema: VolumeGroupsListByElasticSanOutput,
  }));
// Input Schema
export interface VolumeGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties?: {
    protocolType?: "Iscsi" | "None";
    encryption?:
      | "EncryptionAtRestWithPlatformKey"
      | "EncryptionAtRestWithCustomerManagedKey";
    encryptionProperties?: {
      keyVaultProperties?: {
        keyName?: string;
        keyVersion?: string;
        keyVaultUri?: string;
        currentVersionedKeyIdentifier?: string;
        lastKeyRotationTimestamp?: string;
        currentVersionedKeyExpirationTimestamp?: string;
      };
      identity?: { userAssignedIdentity?: string };
    };
    networkAcls?: { virtualNetworkRules?: { id: string; action?: "Allow" }[] };
    enforceDataIntegrityCheckForIscsi?: boolean;
  };
}
export const VolumeGroupsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
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
        protocolType: Schema.optional(Schema.Literals(["Iscsi", "None"])),
        encryption: Schema.optional(
          Schema.Literals([
            "EncryptionAtRestWithPlatformKey",
            "EncryptionAtRestWithCustomerManagedKey",
          ]),
        ),
        encryptionProperties: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyName: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
                keyVaultUri: Schema.optional(Schema.String),
                currentVersionedKeyIdentifier: Schema.optional(Schema.String),
                lastKeyRotationTimestamp: Schema.optional(Schema.String),
                currentVersionedKeyExpirationTimestamp: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
            identity: Schema.optional(
              Schema.Struct({
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        networkAcls: Schema.optional(
          Schema.Struct({
            virtualNetworkRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  action: Schema.optional(Schema.Literals(["Allow"])),
                }),
              ),
            ),
          }),
        ),
        enforceDataIntegrityCheckForIscsi: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<VolumeGroupsUpdateInput>;

// Output Schema
export interface VolumeGroupsUpdateOutput {
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
export const VolumeGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<VolumeGroupsUpdateOutput>;

// The operation
/**
 * Update an VolumeGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumeGroupsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsUpdateInput,
  outputSchema: VolumeGroupsUpdateOutput,
}));
// Input Schema
export interface VolumesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  volumeName: string;
  properties: {
    volumeId?: string;
    creationData?: {
      createSource?:
        | "None"
        | "VolumeSnapshot"
        | "DiskSnapshot"
        | "Disk"
        | "DiskRestorePoint";
      sourceId?: string;
    };
    sizeGiB: number;
    storageTarget?: {
      targetIqn?: string;
      targetPortalHostname?: string;
      targetPortalPort?: number;
      provisioningState?:
        | "Invalid"
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Pending"
        | "Creating"
        | "Updating"
        | "Deleting"
        | "Deleted"
        | "Restoring";
      status?:
        | "Invalid"
        | "Unknown"
        | "Healthy"
        | "Unhealthy"
        | "Updating"
        | "Running"
        | "Stopped"
        | "Stopped (deallocated)";
    };
    managedBy?: { resourceId?: string };
    provisioningState?:
      | "Invalid"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Deleted"
      | "Restoring";
  };
}
export const VolumesCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    volumeId: Schema.optional(Schema.String),
    creationData: Schema.optional(
      Schema.Struct({
        createSource: Schema.optional(
          Schema.Literals([
            "None",
            "VolumeSnapshot",
            "DiskSnapshot",
            "Disk",
            "DiskRestorePoint",
          ]),
        ),
        sourceId: Schema.optional(Schema.String),
      }),
    ),
    sizeGiB: Schema.Number,
    storageTarget: Schema.optional(
      Schema.Struct({
        targetIqn: Schema.optional(Schema.String),
        targetPortalHostname: Schema.optional(Schema.String),
        targetPortalPort: Schema.optional(Schema.Number),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Invalid",
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Creating",
            "Updating",
            "Deleting",
            "Deleted",
            "Restoring",
          ]),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Invalid",
            "Unknown",
            "Healthy",
            "Unhealthy",
            "Updating",
            "Running",
            "Stopped",
            "Stopped (deallocated)",
          ]),
        ),
      }),
    ),
    managedBy: Schema.optional(
      Schema.Struct({
        resourceId: Schema.optional(Schema.String),
      }),
    ),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Invalid",
        "Succeeded",
        "Failed",
        "Canceled",
        "Pending",
        "Creating",
        "Updating",
        "Deleting",
        "Deleted",
        "Restoring",
      ]),
    ),
  }),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<VolumesCreateInput>;

// Output Schema
export interface VolumesCreateOutput {
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
export const VolumesCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumesCreateOutput>;

// The operation
/**
 * Create a Volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param volumeName - The name of the Volume.
 */
export const VolumesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesCreateInput,
  outputSchema: VolumesCreateOutput,
}));
// Input Schema
export interface VolumesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  volumeName: string;
}
export const VolumesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<VolumesDeleteInput>;

// Output Schema
export type VolumesDeleteOutput = void;
export const VolumesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesDeleteOutput>;

// The operation
/**
 * Delete an Volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param volumeName - The name of the Volume.
 * @param x-ms-delete-snapshots - Optional, used to delete snapshots under volume. Allowed value are only true or false. Default value is false.
 * @param x-ms-force-delete - Optional, used to delete volume if active sessions present. Allowed value are only true or false. Default value is false.
 */
export const VolumesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesDeleteInput,
  outputSchema: VolumesDeleteOutput,
}));
// Input Schema
export interface VolumesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  volumeName: string;
}
export const VolumesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<VolumesGetInput>;

// Output Schema
export interface VolumesGetOutput {
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
export const VolumesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumesGetOutput>;

// The operation
/**
 * Get an Volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param volumeName - The name of the Volume.
 */
export const VolumesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesGetInput,
  outputSchema: VolumesGetOutput,
}));
// Input Schema
export interface VolumesListByVolumeGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
}
export const VolumesListByVolumeGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<VolumesListByVolumeGroupInput>;

// Output Schema
export interface VolumesListByVolumeGroupOutput {
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
export const VolumesListByVolumeGroupOutput =
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
  }) as unknown as Schema.Codec<VolumesListByVolumeGroupOutput>;

// The operation
/**
 * List Volumes in a VolumeGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumesListByVolumeGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesListByVolumeGroupInput,
  outputSchema: VolumesListByVolumeGroupOutput,
}));
// Input Schema
export interface VolumeSnapshotsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  snapshotName: string;
  properties: {
    creationData: { sourceId: string };
    provisioningState?:
      | "Invalid"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Deleted"
      | "Restoring";
    sourceVolumeSizeGiB?: number;
    volumeName?: string;
  };
}
export const VolumeSnapshotsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      creationData: Schema.Struct({
        sourceId: Schema.String,
      }),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Invalid",
          "Succeeded",
          "Failed",
          "Canceled",
          "Pending",
          "Creating",
          "Updating",
          "Deleting",
          "Deleted",
          "Restoring",
        ]),
      ),
      sourceVolumeSizeGiB: Schema.optional(Schema.Number),
      volumeName: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/snapshots/{snapshotName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<VolumeSnapshotsCreateInput>;

// Output Schema
export interface VolumeSnapshotsCreateOutput {
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
export const VolumeSnapshotsCreateOutput =
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
  }) as unknown as Schema.Codec<VolumeSnapshotsCreateOutput>;

// The operation
/**
 * Create a Volume Snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param snapshotName - The name of the volume snapshot within the given volume group.
 */
export const VolumeSnapshotsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumeSnapshotsCreateInput,
  outputSchema: VolumeSnapshotsCreateOutput,
}));
// Input Schema
export interface VolumeSnapshotsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  snapshotName: string;
}
export const VolumeSnapshotsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/snapshots/{snapshotName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<VolumeSnapshotsDeleteInput>;

// Output Schema
export type VolumeSnapshotsDeleteOutput = void;
export const VolumeSnapshotsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumeSnapshotsDeleteOutput>;

// The operation
/**
 * Delete a Volume Snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param snapshotName - The name of the volume snapshot within the given volume group.
 */
export const VolumeSnapshotsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumeSnapshotsDeleteInput,
  outputSchema: VolumeSnapshotsDeleteOutput,
}));
// Input Schema
export interface VolumeSnapshotsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  snapshotName: string;
}
export const VolumeSnapshotsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/snapshots/{snapshotName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<VolumeSnapshotsGetInput>;

// Output Schema
export interface VolumeSnapshotsGetOutput {
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
export const VolumeSnapshotsGetOutput =
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
  }) as unknown as Schema.Codec<VolumeSnapshotsGetOutput>;

// The operation
/**
 * Get a Volume Snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param snapshotName - The name of the volume snapshot within the given volume group.
 */
export const VolumeSnapshotsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumeSnapshotsGetInput,
  outputSchema: VolumeSnapshotsGetOutput,
}));
// Input Schema
export interface VolumeSnapshotsListByVolumeGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  $filter?: string;
}
export const VolumeSnapshotsListByVolumeGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/snapshots",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<VolumeSnapshotsListByVolumeGroupInput>;

// Output Schema
export interface VolumeSnapshotsListByVolumeGroupOutput {
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
export const VolumeSnapshotsListByVolumeGroupOutput =
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
  }) as unknown as Schema.Codec<VolumeSnapshotsListByVolumeGroupOutput>;

// The operation
/**
 * List Snapshots in a VolumeGroup or List Snapshots by Volume (name) in a VolumeGroup using filter
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param $filter - Specify $filter='volumeName eq <volume name>' to filter on volume.
 */
export const VolumeSnapshotsListByVolumeGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VolumeSnapshotsListByVolumeGroupInput,
    outputSchema: VolumeSnapshotsListByVolumeGroupOutput,
  }));
// Input Schema
export interface VolumesPreBackupInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  volumeNames: string[];
}
export const VolumesPreBackupInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  volumeNames: Schema.Array(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/preBackup",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<VolumesPreBackupInput>;

// Output Schema
export interface VolumesPreBackupOutput {
  validationStatus?: string;
}
export const VolumesPreBackupOutput = /*@__PURE__*/ Schema.Struct({
  validationStatus: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<VolumesPreBackupOutput>;

// The operation
/**
 * Validate whether a disk snapshot backup can be taken for list of volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumesPreBackup = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesPreBackupInput,
  outputSchema: VolumesPreBackupOutput,
}));
// Input Schema
export interface VolumesPreRestoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  diskSnapshotIds: string[];
}
export const VolumesPreRestoreInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  diskSnapshotIds: Schema.Array(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/preRestore",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<VolumesPreRestoreInput>;

// Output Schema
export interface VolumesPreRestoreOutput {
  validationStatus?: string;
}
export const VolumesPreRestoreOutput =
  /*@__PURE__*/ Schema.Struct({
    validationStatus: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VolumesPreRestoreOutput>;

// The operation
/**
 * Validate whether a list of backed up disk snapshots can be restored into ElasticSan volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumesPreRestore = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesPreRestoreInput,
  outputSchema: VolumesPreRestoreOutput,
}));
// Input Schema
export interface VolumesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  elasticSanName: string;
  volumeGroupName: string;
  volumeName: string;
  properties?: { sizeGiB?: number; managedBy?: { resourceId?: string } };
}
export const VolumesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      sizeGiB: Schema.optional(Schema.Number),
      managedBy: Schema.optional(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<VolumesUpdateInput>;

// Output Schema
export interface VolumesUpdateOutput {
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
export const VolumesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumesUpdateOutput>;

// The operation
/**
 * Update an Volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param volumeName - The name of the Volume.
 */
export const VolumesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesUpdateInput,
  outputSchema: VolumesUpdateOutput,
}));
