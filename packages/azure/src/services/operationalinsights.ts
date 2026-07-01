/**
 * Azure Operationalinsights API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AvailableServiceTiersListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const AvailableServiceTiersListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/availableServiceTiers",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<AvailableServiceTiersListByWorkspaceInput>;

// Output Schema
export type AvailableServiceTiersListByWorkspaceOutput = {
  serviceTier?:
    | "Free"
    | "Standard"
    | "Premium"
    | "PerNode"
    | "PerGB2018"
    | "Standalone"
    | "CapacityReservation";
  enabled?: boolean;
  minimumRetention?: number;
  maximumRetention?: number;
  defaultRetention?: number;
  capacityReservationLevel?: number;
  lastSkuUpdate?: string;
}[];
export const AvailableServiceTiersListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      serviceTier: Schema.optional(
        Schema.Literals([
          "Free",
          "Standard",
          "Premium",
          "PerNode",
          "PerGB2018",
          "Standalone",
          "CapacityReservation",
        ]),
      ),
      enabled: Schema.optional(Schema.Boolean),
      minimumRetention: Schema.optional(Schema.Number),
      maximumRetention: Schema.optional(Schema.Number),
      defaultRetention: Schema.optional(Schema.Number),
      capacityReservationLevel: Schema.optional(Schema.Number),
      lastSkuUpdate: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<AvailableServiceTiersListByWorkspaceOutput>;

// The operation
/**
 * Gets the available service tiers for the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const AvailableServiceTiersListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailableServiceTiersListByWorkspaceInput,
    outputSchema: AvailableServiceTiersListByWorkspaceOutput,
  }));
// Input Schema
export interface ClustersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    clusterId?: string;
    provisioningState?:
      | "Creating"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting"
      | "ProvisioningAccount"
      | "Updating";
    isDoubleEncryptionEnabled?: boolean;
    isAvailabilityZonesEnabled?: boolean;
    billingType?: "Cluster" | "Workspaces";
    keyVaultProperties?: {
      keyVaultUri?: string;
      keyName?: string;
      keyVersion?: string;
      keyRsaSize?: number;
    };
    lastModifiedDate?: string;
    createdDate?: string;
    associatedWorkspaces?: {
      workspaceId?: string;
      workspaceName?: string;
      resourceId?: string;
      associateDate?: string;
    }[];
    capacityReservationProperties?: {
      lastSkuUpdate?: string;
      minCapacity?: number;
    };
    replication?: {
      location?: string;
      enabled?: boolean;
      isAvailabilityZonesEnabled?: boolean;
      provisioningState?:
        | "Succeeded"
        | "EnableRequested"
        | "Enabling"
        | "DisableRequested"
        | "Disabling"
        | "RollbackRequested"
        | "RollingBack"
        | "Failed"
        | "Canceled";
      createdDate?: string;
      lastModifiedDate?: string;
    };
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
  sku?: { capacity?: number | null; name?: "CapacityReservation" };
  tags?: Record<string, string>;
  location: string;
}
export const ClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        clusterId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
            "ProvisioningAccount",
            "Updating",
          ]),
        ),
        isDoubleEncryptionEnabled: Schema.optional(Schema.Boolean),
        isAvailabilityZonesEnabled: Schema.optional(Schema.Boolean),
        billingType: Schema.optional(
          Schema.Literals(["Cluster", "Workspaces"]),
        ),
        keyVaultProperties: Schema.optional(
          Schema.Struct({
            keyVaultUri: Schema.optional(Schema.String),
            keyName: Schema.optional(Schema.String),
            keyVersion: Schema.optional(Schema.String),
            keyRsaSize: Schema.optional(Schema.Number),
          }),
        ),
        lastModifiedDate: Schema.optional(Schema.String),
        createdDate: Schema.optional(Schema.String),
        associatedWorkspaces: Schema.optional(
          Schema.Array(
            Schema.Struct({
              workspaceId: Schema.optional(Schema.String),
              workspaceName: Schema.optional(Schema.String),
              resourceId: Schema.optional(Schema.String),
              associateDate: Schema.optional(Schema.String),
            }),
          ),
        ),
        capacityReservationProperties: Schema.optional(
          Schema.Struct({
            lastSkuUpdate: Schema.optional(Schema.String),
            minCapacity: Schema.optional(Schema.Number),
          }),
        ),
        replication: Schema.optional(
          Schema.Struct({
            location: Schema.optional(Schema.String),
            enabled: Schema.optional(Schema.Boolean),
            isAvailabilityZonesEnabled: Schema.optional(Schema.Boolean),
            provisioningState: Schema.optional(
              Schema.Literals([
                "Succeeded",
                "EnableRequested",
                "Enabling",
                "DisableRequested",
                "Disabling",
                "RollbackRequested",
                "RollingBack",
                "Failed",
                "Canceled",
              ]),
            ),
            createdDate: Schema.optional(Schema.String),
            lastModifiedDate: Schema.optional(Schema.String),
          }),
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
    sku: Schema.optional(
      Schema.Struct({
        capacity: Schema.optional(Schema.NullOr(Schema.Number)),
        name: Schema.optional(Schema.Literals(["CapacityReservation"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/clusters/{clusterName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<ClustersCreateOrUpdateInput>;

// Output Schema
export interface ClustersCreateOrUpdateOutput {
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
export const ClustersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ClustersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Log Analytics cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Name of the Log Analytics Cluster.
 */
export const ClustersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersCreateOrUpdateInput,
    outputSchema: ClustersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/clusters/{clusterName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

// The operation
/**
 * Deletes a cluster instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Name of the Log Analytics Cluster.
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export interface ClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/clusters/{clusterName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<ClustersGetInput>;

// Output Schema
export interface ClustersGetOutput {
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
export const ClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ClustersGetOutput>;

// The operation
/**
 * Gets a Log Analytics cluster instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Name of the Log Analytics Cluster.
 */
export const ClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export interface ClustersListInput {
  subscriptionId: string;
}
export const ClustersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.OperationalInsights/clusters",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<ClustersListInput>;

// Output Schema
export interface ClustersListOutput {
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
export const ClustersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ClustersListOutput>;

// The operation
/**
 * Gets the Log Analytics clusters in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ClustersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersListInput,
  outputSchema: ClustersListOutput,
}));
// Input Schema
export interface ClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/clusters",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<ClustersListByResourceGroupInput>;

// Output Schema
export interface ClustersListByResourceGroupOutput {
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
export const ClustersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ClustersListByResourceGroupOutput>;

// The operation
/**
 * Gets Log Analytics clusters in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListByResourceGroupInput,
    outputSchema: ClustersListByResourceGroupOutput,
  }),
);
// Input Schema
export interface ClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    keyVaultProperties?: {
      keyVaultUri?: string;
      keyName?: string;
      keyVersion?: string;
      keyRsaSize?: number;
    };
    billingType?: "Cluster" | "Workspaces";
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
  sku?: { capacity?: number | null; name?: "CapacityReservation" };
  tags?: Record<string, string>;
}
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      keyVaultProperties: Schema.optional(
        Schema.Struct({
          keyVaultUri: Schema.optional(Schema.String),
          keyName: Schema.optional(Schema.String),
          keyVersion: Schema.optional(Schema.String),
          keyRsaSize: Schema.optional(Schema.Number),
        }),
      ),
      billingType: Schema.optional(Schema.Literals(["Cluster", "Workspaces"])),
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
  sku: Schema.optional(
    Schema.Struct({
      capacity: Schema.optional(Schema.NullOr(Schema.Number)),
      name: Schema.optional(Schema.Literals(["CapacityReservation"])),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/clusters/{clusterName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<ClustersUpdateInput>;

// Output Schema
export interface ClustersUpdateOutput {
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
export const ClustersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ClustersUpdateOutput>;

// The operation
/**
 * Updates a Log Analytics cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Name of the Log Analytics Cluster.
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export interface DataExportsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataExportName: string;
  properties?: {
    dataExportId?: string;
    tableNames: string[];
    destination?: {
      resourceId: string;
      type?: "StorageAccount" | "EventHub";
      metaData?: { eventHubName?: string };
    };
    enable?: boolean;
    createdDate?: string;
    lastModifiedDate?: string;
  };
}
export const DataExportsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataExportName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        dataExportId: Schema.optional(Schema.String),
        tableNames: Schema.Array(Schema.String),
        destination: Schema.optional(
          Schema.Struct({
            resourceId: Schema.String,
            type: Schema.optional(
              Schema.Literals(["StorageAccount", "EventHub"]),
            ),
            metaData: Schema.optional(
              Schema.Struct({
                eventHubName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        enable: Schema.optional(Schema.Boolean),
        createdDate: Schema.optional(Schema.String),
        lastModifiedDate: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports/{dataExportName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<DataExportsCreateOrUpdateInput>;

// Output Schema
export interface DataExportsCreateOrUpdateOutput {
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
export const DataExportsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataExportsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a data export.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataExportName - The data export rule name.
 */
export const DataExportsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataExportsCreateOrUpdateInput,
    outputSchema: DataExportsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DataExportsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataExportName: string;
}
export const DataExportsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataExportName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports/{dataExportName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<DataExportsDeleteInput>;

// Output Schema
export type DataExportsDeleteOutput = void;
export const DataExportsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DataExportsDeleteOutput>;

// The operation
/**
 * Deletes the specified data export in a given workspace..
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataExportName - The data export rule name.
 */
export const DataExportsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataExportsDeleteInput,
  outputSchema: DataExportsDeleteOutput,
}));
// Input Schema
export interface DataExportsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataExportName: string;
}
export const DataExportsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  dataExportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports/{dataExportName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<DataExportsGetInput>;

// Output Schema
export interface DataExportsGetOutput {
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
export const DataExportsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DataExportsGetOutput>;

// The operation
/**
 * Gets a data export instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataExportName - The data export rule name.
 */
export const DataExportsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataExportsGetInput,
  outputSchema: DataExportsGetOutput,
}));
// Input Schema
export interface DataExportsListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const DataExportsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataExports",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<DataExportsListByWorkspaceInput>;

// Output Schema
export interface DataExportsListByWorkspaceOutput {
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
export const DataExportsListByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<DataExportsListByWorkspaceOutput>;

// The operation
/**
 * Lists the data export instances within a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const DataExportsListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataExportsListByWorkspaceInput,
    outputSchema: DataExportsListByWorkspaceOutput,
  }),
);
// Input Schema
export interface DataSourcesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataSourceName: string;
  properties: unknown;
  etag?: string;
  kind:
    | "WindowsEvent"
    | "WindowsPerformanceCounter"
    | "IISLogs"
    | "LinuxSyslog"
    | "LinuxSyslogCollection"
    | "LinuxPerformanceObject"
    | "LinuxPerformanceCollection"
    | "CustomLog"
    | "CustomLogCollection"
    | "AzureAuditLog"
    | "AzureActivityLog"
    | "GenericDataSource"
    | "ChangeTrackingCustomPath"
    | "ChangeTrackingPath"
    | "ChangeTrackingServices"
    | "ChangeTrackingDataTypeConfiguration"
    | "ChangeTrackingDefaultRegistry"
    | "ChangeTrackingRegistry"
    | "ChangeTrackingLinuxPath"
    | "LinuxChangeTrackingPath"
    | "ChangeTrackingContentLocation"
    | "WindowsTelemetry"
    | "Office365"
    | "SecurityWindowsBaselineConfiguration"
    | "SecurityCenterSecurityWindowsBaselineConfiguration"
    | "SecurityEventCollectionConfiguration"
    | "SecurityInsightsSecurityEventCollectionConfiguration"
    | "ImportComputerGroup"
    | "NetworkMonitoring"
    | "Itsm"
    | "DnsAnalytics"
    | "ApplicationInsights"
    | "SqlDataClassification";
  tags?: Record<string, string>;
}
export const DataSourcesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataSourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Unknown,
    etag: Schema.optional(Schema.String),
    kind: Schema.Literals([
      "WindowsEvent",
      "WindowsPerformanceCounter",
      "IISLogs",
      "LinuxSyslog",
      "LinuxSyslogCollection",
      "LinuxPerformanceObject",
      "LinuxPerformanceCollection",
      "CustomLog",
      "CustomLogCollection",
      "AzureAuditLog",
      "AzureActivityLog",
      "GenericDataSource",
      "ChangeTrackingCustomPath",
      "ChangeTrackingPath",
      "ChangeTrackingServices",
      "ChangeTrackingDataTypeConfiguration",
      "ChangeTrackingDefaultRegistry",
      "ChangeTrackingRegistry",
      "ChangeTrackingLinuxPath",
      "LinuxChangeTrackingPath",
      "ChangeTrackingContentLocation",
      "WindowsTelemetry",
      "Office365",
      "SecurityWindowsBaselineConfiguration",
      "SecurityCenterSecurityWindowsBaselineConfiguration",
      "SecurityEventCollectionConfiguration",
      "SecurityInsightsSecurityEventCollectionConfiguration",
      "ImportComputerGroup",
      "NetworkMonitoring",
      "Itsm",
      "DnsAnalytics",
      "ApplicationInsights",
      "SqlDataClassification",
    ]),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources/{dataSourceName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<DataSourcesCreateOrUpdateInput>;

// Output Schema
export interface DataSourcesCreateOrUpdateOutput {
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
export const DataSourcesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataSourcesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a data source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataSourceName - Name of the datasource
 */
export const DataSourcesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataSourcesCreateOrUpdateInput,
    outputSchema: DataSourcesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DataSourcesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataSourceName: string;
}
export const DataSourcesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataSourceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources/{dataSourceName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<DataSourcesDeleteInput>;

// Output Schema
export type DataSourcesDeleteOutput = void;
export const DataSourcesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DataSourcesDeleteOutput>;

// The operation
/**
 * Deletes a data source instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataSourceName - Name of the datasource
 */
export const DataSourcesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataSourcesDeleteInput,
  outputSchema: DataSourcesDeleteOutput,
}));
// Input Schema
export interface DataSourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataSourceName: string;
}
export const DataSourcesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  dataSourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources/{dataSourceName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<DataSourcesGetInput>;

// Output Schema
export interface DataSourcesGetOutput {
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
export const DataSourcesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DataSourcesGetOutput>;

// The operation
/**
 * Gets a datasource instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataSourceName - Name of the datasource
 */
export const DataSourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataSourcesGetInput,
  outputSchema: DataSourcesGetOutput,
}));
// Input Schema
export interface DataSourcesListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $filter: string;
  $skiptoken?: string;
}
export const DataSourcesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/dataSources",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<DataSourcesListByWorkspaceInput>;

// Output Schema
export interface DataSourcesListByWorkspaceOutput {
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
export const DataSourcesListByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<DataSourcesListByWorkspaceOutput>;

// The operation
/**
 * Gets the first page of data source instances in a workspace with the link to the next page.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param $filter - The filter to apply on the operation.
 * @param $skiptoken - Starting point of the collection of data source instances.
 */
export const DataSourcesListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataSourcesListByWorkspaceInput,
    outputSchema: DataSourcesListByWorkspaceOutput,
  }),
);
// Input Schema
export interface DeletedWorkspacesListInput {
  subscriptionId: string;
}
export const DeletedWorkspacesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.OperationalInsights/deletedWorkspaces",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<DeletedWorkspacesListInput>;

// Output Schema
export interface DeletedWorkspacesListOutput {
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
export const DeletedWorkspacesListOutput =
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
  }) as unknown as Schema.Codec<DeletedWorkspacesListOutput>;

// The operation
/**
 * Gets recently deleted workspaces in a subscription, available for recovery.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const DeletedWorkspacesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeletedWorkspacesListInput,
    outputSchema: DeletedWorkspacesListOutput,
  }),
);
// Input Schema
export interface DeletedWorkspacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DeletedWorkspacesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/deletedWorkspaces",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<DeletedWorkspacesListByResourceGroupInput>;

// Output Schema
export interface DeletedWorkspacesListByResourceGroupOutput {
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
export const DeletedWorkspacesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DeletedWorkspacesListByResourceGroupOutput>;

// The operation
/**
 * Gets recently deleted workspaces in a resource group, available for recovery.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DeletedWorkspacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeletedWorkspacesListByResourceGroupInput,
    outputSchema: DeletedWorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export interface GatewaysDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  gatewayId: string;
}
export const GatewaysDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  gatewayId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/gateways/{gatewayId}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<GatewaysDeleteInput>;

// Output Schema
export type GatewaysDeleteOutput = void;
export const GatewaysDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GatewaysDeleteOutput>;

// The operation
/**
 * Delete a Log Analytics gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param gatewayId - The Log Analytics gateway Id.
 */
export const GatewaysDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysDeleteInput,
  outputSchema: GatewaysDeleteOutput,
}));
// Input Schema
export interface IntelligencePacksDisableInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  intelligencePackName: string;
}
export const IntelligencePacksDisableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    intelligencePackName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/intelligencePacks/{intelligencePackName}/Disable",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<IntelligencePacksDisableInput>;

// Output Schema
export type IntelligencePacksDisableOutput = void;
export const IntelligencePacksDisableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntelligencePacksDisableOutput>;

// The operation
/**
 * Disables an intelligence pack for a given workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param intelligencePackName - The name of the intelligence pack.
 */
export const IntelligencePacksDisable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntelligencePacksDisableInput,
    outputSchema: IntelligencePacksDisableOutput,
  }),
);
// Input Schema
export interface IntelligencePacksEnableInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  intelligencePackName: string;
}
export const IntelligencePacksEnableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    intelligencePackName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/intelligencePacks/{intelligencePackName}/Enable",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<IntelligencePacksEnableInput>;

// Output Schema
export type IntelligencePacksEnableOutput = void;
export const IntelligencePacksEnableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IntelligencePacksEnableOutput>;

// The operation
/**
 * Enables an intelligence pack for a given workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param intelligencePackName - The name of the intelligence pack.
 */
export const IntelligencePacksEnable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntelligencePacksEnableInput,
    outputSchema: IntelligencePacksEnableOutput,
  }),
);
// Input Schema
export interface IntelligencePacksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const IntelligencePacksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/intelligencePacks",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<IntelligencePacksListInput>;

// Output Schema
export type IntelligencePacksListOutput = {
  name?: string;
  enabled?: boolean;
  displayName?: string;
}[];
export const IntelligencePacksListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
      displayName: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<IntelligencePacksListOutput>;

// The operation
/**
 * Lists all the intelligence packs possible and whether they are enabled or disabled for a given workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const IntelligencePacksList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntelligencePacksListInput,
    outputSchema: IntelligencePacksListOutput,
  }),
);
// Input Schema
export interface LinkedServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  linkedServiceName: string;
  properties: {
    resourceId?: string;
    writeAccessResourceId?: string;
    provisioningState?:
      | "Succeeded"
      | "Deleting"
      | "ProvisioningAccount"
      | "Updating";
  };
  tags?: Record<string, string>;
}
export const LinkedServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    linkedServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resourceId: Schema.optional(Schema.String),
      writeAccessResourceId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Deleting",
          "ProvisioningAccount",
          "Updating",
        ]),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedServices/{linkedServiceName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<LinkedServicesCreateOrUpdateInput>;

// Output Schema
export interface LinkedServicesCreateOrUpdateOutput {
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
export const LinkedServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<LinkedServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a linked service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param linkedServiceName - Name of the linked service.
 */
export const LinkedServicesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LinkedServicesCreateOrUpdateInput,
    outputSchema: LinkedServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface LinkedServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  linkedServiceName: string;
}
export const LinkedServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    linkedServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedServices/{linkedServiceName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<LinkedServicesDeleteInput>;

// Output Schema
export interface LinkedServicesDeleteOutput {
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
export const LinkedServicesDeleteOutput =
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
  }) as unknown as Schema.Codec<LinkedServicesDeleteOutput>;

// The operation
/**
 * Deletes a linked service instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param linkedServiceName - Name of the linked service.
 */
export const LinkedServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LinkedServicesDeleteInput,
    outputSchema: LinkedServicesDeleteOutput,
  }),
);
// Input Schema
export interface LinkedServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  linkedServiceName: string;
}
export const LinkedServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    linkedServiceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedServices/{linkedServiceName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<LinkedServicesGetInput>;

// Output Schema
export interface LinkedServicesGetOutput {
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
export const LinkedServicesGetOutput =
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
  }) as unknown as Schema.Codec<LinkedServicesGetOutput>;

// The operation
/**
 * Gets a linked service instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param linkedServiceName - Name of the linked service.
 */
export const LinkedServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkedServicesGetInput,
  outputSchema: LinkedServicesGetOutput,
}));
// Input Schema
export interface LinkedServicesListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const LinkedServicesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedServices",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<LinkedServicesListByWorkspaceInput>;

// Output Schema
export interface LinkedServicesListByWorkspaceOutput {
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
export const LinkedServicesListByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<LinkedServicesListByWorkspaceOutput>;

// The operation
/**
 * Gets the linked services instances in a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const LinkedServicesListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LinkedServicesListByWorkspaceInput,
    outputSchema: LinkedServicesListByWorkspaceOutput,
  }));
// Input Schema
export interface LinkedStorageAccountsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataSourceType:
    | "CustomLogs"
    | "AzureWatson"
    | "Query"
    | "Ingestion"
    | "Alerts";
  properties: {
    dataSourceType?:
      | "CustomLogs"
      | "AzureWatson"
      | "Query"
      | "Ingestion"
      | "Alerts";
    storageAccountIds?: string[];
  };
}
export const LinkedStorageAccountsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataSourceType: Schema.Literals([
      "CustomLogs",
      "AzureWatson",
      "Query",
      "Ingestion",
      "Alerts",
    ]).pipe(T.PathParam()),
    properties: Schema.Struct({
      dataSourceType: Schema.optional(
        Schema.Literals([
          "CustomLogs",
          "AzureWatson",
          "Query",
          "Ingestion",
          "Alerts",
        ]),
      ),
      storageAccountIds: Schema.optional(Schema.Array(Schema.String)),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedStorageAccounts/{dataSourceType}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<LinkedStorageAccountsCreateOrUpdateInput>;

// Output Schema
export interface LinkedStorageAccountsCreateOrUpdateOutput {
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
export const LinkedStorageAccountsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<LinkedStorageAccountsCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update a link relation between current workspace and a group of storage accounts of a specific data source type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataSourceType - Linked storage accounts type.
 */
export const LinkedStorageAccountsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LinkedStorageAccountsCreateOrUpdateInput,
    outputSchema: LinkedStorageAccountsCreateOrUpdateOutput,
  }));
// Input Schema
export interface LinkedStorageAccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataSourceType:
    | "CustomLogs"
    | "AzureWatson"
    | "Query"
    | "Ingestion"
    | "Alerts";
}
export const LinkedStorageAccountsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataSourceType: Schema.Literals([
      "CustomLogs",
      "AzureWatson",
      "Query",
      "Ingestion",
      "Alerts",
    ]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedStorageAccounts/{dataSourceType}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<LinkedStorageAccountsDeleteInput>;

// Output Schema
export type LinkedStorageAccountsDeleteOutput = void;
export const LinkedStorageAccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LinkedStorageAccountsDeleteOutput>;

// The operation
/**
 * Deletes all linked storage accounts of a specific data source type associated with the specified workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataSourceType - Linked storage accounts type.
 */
export const LinkedStorageAccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LinkedStorageAccountsDeleteInput,
    outputSchema: LinkedStorageAccountsDeleteOutput,
  }),
);
// Input Schema
export interface LinkedStorageAccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataSourceType:
    | "CustomLogs"
    | "AzureWatson"
    | "Query"
    | "Ingestion"
    | "Alerts";
}
export const LinkedStorageAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataSourceType: Schema.Literals([
      "CustomLogs",
      "AzureWatson",
      "Query",
      "Ingestion",
      "Alerts",
    ]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedStorageAccounts/{dataSourceType}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<LinkedStorageAccountsGetInput>;

// Output Schema
export interface LinkedStorageAccountsGetOutput {
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
export const LinkedStorageAccountsGetOutput =
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
  }) as unknown as Schema.Codec<LinkedStorageAccountsGetOutput>;

// The operation
/**
 * Gets all linked storage account of a specific data source type associated with the specified workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataSourceType - Linked storage accounts type.
 */
export const LinkedStorageAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LinkedStorageAccountsGetInput,
    outputSchema: LinkedStorageAccountsGetOutput,
  }),
);
// Input Schema
export interface LinkedStorageAccountsListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const LinkedStorageAccountsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/linkedStorageAccounts",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<LinkedStorageAccountsListByWorkspaceInput>;

// Output Schema
export interface LinkedStorageAccountsListByWorkspaceOutput {
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
export const LinkedStorageAccountsListByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<LinkedStorageAccountsListByWorkspaceOutput>;

// The operation
/**
 * Gets all linked storage accounts associated with the specified workspace, storage accounts will be sorted by their data source type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const LinkedStorageAccountsListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LinkedStorageAccountsListByWorkspaceInput,
    outputSchema: LinkedStorageAccountsListByWorkspaceOutput,
  }));
// Input Schema
export interface ManagementGroupsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const ManagementGroupsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/managementGroups",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupsListInput>;

// Output Schema
export interface ManagementGroupsListOutput {
  value?: {
    properties?: {
      serverCount?: number;
      isGateway?: boolean;
      name?: string;
      id?: string;
      created?: string;
      dataReceived?: string;
      version?: string;
      sku?: string;
    };
  }[];
  nextLink?: string;
}
export const ManagementGroupsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              serverCount: Schema.optional(Schema.Number),
              isGateway: Schema.optional(Schema.Boolean),
              name: Schema.optional(Schema.String),
              id: Schema.optional(Schema.String),
              created: Schema.optional(Schema.String),
              dataReceived: Schema.optional(Schema.String),
              version: Schema.optional(Schema.String),
              sku: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ManagementGroupsListOutput>;

// The operation
/**
 * Gets a list of management groups connected to a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const ManagementGroupsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagementGroupsListInput,
    outputSchema: ManagementGroupsListOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.OperationalInsights/operations",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
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
  value: Schema.Array(
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
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available OperationalInsights Rest API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationStatusesGetInput {
  location: string;
  asyncOperationId: string;
  subscriptionId: string;
}
export const OperationStatusesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    asyncOperationId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.OperationalInsights/locations/{location}/operationStatuses/{asyncOperationId}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<OperationStatusesGetInput>;

// Output Schema
export interface OperationStatusesGetOutput {
  id?: string;
  name?: string;
  startTime?: string;
  endTime?: string;
  status?: string;
  error?: {
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  };
}
export const OperationStatusesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        error: Schema.optional(
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
      }),
    ),
  }) as unknown as Schema.Codec<OperationStatusesGetOutput>;

// The operation
/**
 * Get the status of a long running azure asynchronous operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The name of the Azure region.
 * @param asyncOperationId - The operation Id.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const OperationStatusesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OperationStatusesGetInput,
    outputSchema: OperationStatusesGetOutput,
  }),
);
// Input Schema
export interface QueriesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  queryPackName: string;
  id: string;
}
export const QueriesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  queryPackName: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries/{id}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<QueriesDeleteInput>;

// Output Schema
export type QueriesDeleteOutput = void;
export const QueriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<QueriesDeleteOutput>;

// The operation
/**
 * Deletes a specific Query defined within an Log Analytics QueryPack.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param queryPackName - The name of the Log Analytics QueryPack resource.
 * @param id - The id of a specific query defined in the Log Analytics QueryPack
 */
export const QueriesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueriesDeleteInput,
  outputSchema: QueriesDeleteOutput,
}));
// Input Schema
export interface QueriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  queryPackName: string;
  id: string;
}
export const QueriesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  queryPackName: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries/{id}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<QueriesGetInput>;

// Output Schema
export interface QueriesGetOutput {
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
export const QueriesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<QueriesGetOutput>;

// The operation
/**
 * Gets a specific Log Analytics Query defined within a Log Analytics QueryPack.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param queryPackName - The name of the Log Analytics QueryPack resource.
 * @param id - The id of a specific query defined in the Log Analytics QueryPack
 */
export const QueriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueriesGetInput,
  outputSchema: QueriesGetOutput,
}));
// Input Schema
export interface QueriesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  queryPackName: string;
  $top?: number;
  includeBody?: boolean;
  $skipToken?: string;
}
export const QueriesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  queryPackName: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
  includeBody: Schema.optional(Schema.Boolean),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<QueriesListInput>;

// Output Schema
export interface QueriesListOutput {
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
export const QueriesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<QueriesListOutput>;

// The operation
/**
 * Gets a list of Queries defined within a Log Analytics QueryPack.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param queryPackName - The name of the Log Analytics QueryPack resource.
 * @param $top - Maximum items returned in page.
 * @param includeBody - Flag indicating whether or not to return the body of each applicable query. If false, only return the query information.
 * @param $skipToken - Base64 encoded token used to fetch the next page of items. Default is null.
 */
export const QueriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueriesListInput,
  outputSchema: QueriesListOutput,
}));
// Input Schema
export interface QueriesPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  queryPackName: string;
  id: string;
  properties?: {
    id?: string;
    displayName: string;
    timeCreated?: string;
    timeModified?: string;
    author?: string;
    description?: string;
    body: string;
    related?: {
      categories?: string[];
      resourceTypes?: string[];
      solutions?: string[];
    };
    tags?: Record<string, string[]>;
    properties?: unknown;
  };
}
export const QueriesPutInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  queryPackName: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      displayName: Schema.String,
      timeCreated: Schema.optional(Schema.String),
      timeModified: Schema.optional(Schema.String),
      author: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      body: Schema.String,
      related: Schema.optional(
        Schema.Struct({
          categories: Schema.optional(Schema.Array(Schema.String)),
          resourceTypes: Schema.optional(Schema.Array(Schema.String)),
          solutions: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      tags: Schema.optional(
        Schema.Record(Schema.String, Schema.Array(Schema.String)),
      ),
      properties: Schema.optional(Schema.Unknown),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries/{id}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<QueriesPutInput>;

// Output Schema
export interface QueriesPutOutput {
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
export const QueriesPutOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<QueriesPutOutput>;

// The operation
/**
 * Adds or Updates a specific Query within a Log Analytics QueryPack.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param queryPackName - The name of the Log Analytics QueryPack resource.
 * @param id - The id of a specific query defined in the Log Analytics QueryPack
 */
export const QueriesPut = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueriesPutInput,
  outputSchema: QueriesPutOutput,
}));
// Input Schema
export interface QueriesSearchInput {
  subscriptionId: string;
  resourceGroupName: string;
  queryPackName: string;
  $top?: number;
  includeBody?: boolean;
  $skipToken?: string;
  related?: {
    categories?: string[];
    resourceTypes?: string[];
    solutions?: string[];
  };
  tags?: Record<string, string[]>;
}
export const QueriesSearchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  queryPackName: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
  includeBody: Schema.optional(Schema.Boolean),
  $skipToken: Schema.optional(Schema.String),
  related: Schema.optional(
    Schema.Struct({
      categories: Schema.optional(Schema.Array(Schema.String)),
      resourceTypes: Schema.optional(Schema.Array(Schema.String)),
      solutions: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  tags: Schema.optional(
    Schema.Record(Schema.String, Schema.Array(Schema.String)),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries/search",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<QueriesSearchInput>;

// Output Schema
export interface QueriesSearchOutput {
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
export const QueriesSearchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<QueriesSearchOutput>;

// The operation
/**
 * Search a list of Queries defined within a Log Analytics QueryPack according to given search properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param queryPackName - The name of the Log Analytics QueryPack resource.
 * @param $top - Maximum items returned in page.
 * @param includeBody - Flag indicating whether or not to return the body of each applicable query. If false, only return the query information.
 * @param $skipToken - Base64 encoded token used to fetch the next page of items. Default is null.
 */
export const QueriesSearch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueriesSearchInput,
  outputSchema: QueriesSearchOutput,
}));
// Input Schema
export interface QueriesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  queryPackName: string;
  id: string;
  properties?: {
    id?: string;
    displayName: string;
    timeCreated?: string;
    timeModified?: string;
    author?: string;
    description?: string;
    body: string;
    related?: {
      categories?: string[];
      resourceTypes?: string[];
      solutions?: string[];
    };
    tags?: Record<string, string[]>;
    properties?: unknown;
  };
}
export const QueriesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  queryPackName: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      displayName: Schema.String,
      timeCreated: Schema.optional(Schema.String),
      timeModified: Schema.optional(Schema.String),
      author: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      body: Schema.String,
      related: Schema.optional(
        Schema.Struct({
          categories: Schema.optional(Schema.Array(Schema.String)),
          resourceTypes: Schema.optional(Schema.Array(Schema.String)),
          solutions: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      tags: Schema.optional(
        Schema.Record(Schema.String, Schema.Array(Schema.String)),
      ),
      properties: Schema.optional(Schema.Unknown),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}/queries/{id}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<QueriesUpdateInput>;

// Output Schema
export interface QueriesUpdateOutput {
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
export const QueriesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<QueriesUpdateOutput>;

// The operation
/**
 * Adds or Updates a specific Query within a Log Analytics QueryPack.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param queryPackName - The name of the Log Analytics QueryPack resource.
 * @param id - The id of a specific query defined in the Log Analytics QueryPack
 */
export const QueriesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueriesUpdateInput,
  outputSchema: QueriesUpdateOutput,
}));
// Input Schema
export interface QueryPacksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  queryPackName: string;
  properties: {
    queryPackId?: string;
    timeCreated?: string;
    timeModified?: string;
    provisioningState?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const QueryPacksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    queryPackName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      queryPackId: Schema.optional(Schema.String),
      timeCreated: Schema.optional(Schema.String),
      timeModified: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<QueryPacksCreateOrUpdateInput>;

// Output Schema
export interface QueryPacksCreateOrUpdateOutput {
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
export const QueryPacksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<QueryPacksCreateOrUpdateOutput>;

// The operation
/**
 * Creates (or updates) a Log Analytics QueryPack. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param queryPackName - The name of the Log Analytics QueryPack resource.
 */
export const QueryPacksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: QueryPacksCreateOrUpdateInput,
    outputSchema: QueryPacksCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface QueryPacksCreateOrUpdateWithoutNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  properties: {
    queryPackId?: string;
    timeCreated?: string;
    timeModified?: string;
    provisioningState?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const QueryPacksCreateOrUpdateWithoutNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      queryPackId: Schema.optional(Schema.String),
      timeCreated: Schema.optional(Schema.String),
      timeModified: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<QueryPacksCreateOrUpdateWithoutNameInput>;

// Output Schema
export interface QueryPacksCreateOrUpdateWithoutNameOutput {
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
export const QueryPacksCreateOrUpdateWithoutNameOutput =
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
  }) as unknown as Schema.Codec<QueryPacksCreateOrUpdateWithoutNameOutput>;

// The operation
/**
 * Creates a Log Analytics QueryPack. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const QueryPacksCreateOrUpdateWithoutName =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: QueryPacksCreateOrUpdateWithoutNameInput,
    outputSchema: QueryPacksCreateOrUpdateWithoutNameOutput,
  }));
// Input Schema
export interface QueryPacksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  queryPackName: string;
}
export const QueryPacksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  queryPackName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<QueryPacksDeleteInput>;

// Output Schema
export type QueryPacksDeleteOutput = void;
export const QueryPacksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<QueryPacksDeleteOutput>;

// The operation
/**
 * Deletes a Log Analytics QueryPack.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param queryPackName - The name of the Log Analytics QueryPack resource.
 */
export const QueryPacksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryPacksDeleteInput,
  outputSchema: QueryPacksDeleteOutput,
}));
// Input Schema
export interface QueryPacksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  queryPackName: string;
}
export const QueryPacksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  queryPackName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<QueryPacksGetInput>;

// Output Schema
export interface QueryPacksGetOutput {
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
export const QueryPacksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<QueryPacksGetOutput>;

// The operation
/**
 * Returns a Log Analytics QueryPack.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param queryPackName - The name of the Log Analytics QueryPack resource.
 */
export const QueryPacksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryPacksGetInput,
  outputSchema: QueryPacksGetOutput,
}));
// Input Schema
export interface QueryPacksListInput {
  subscriptionId: string;
}
export const QueryPacksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.OperationalInsights/queryPacks",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<QueryPacksListInput>;

// Output Schema
export interface QueryPacksListOutput {
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
export const QueryPacksListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<QueryPacksListOutput>;

// The operation
/**
 * Gets a list of all Log Analytics QueryPacks within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const QueryPacksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryPacksListInput,
  outputSchema: QueryPacksListOutput,
}));
// Input Schema
export interface QueryPacksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const QueryPacksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<QueryPacksListByResourceGroupInput>;

// Output Schema
export interface QueryPacksListByResourceGroupOutput {
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
export const QueryPacksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<QueryPacksListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of Log Analytics QueryPacks within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const QueryPacksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: QueryPacksListByResourceGroupInput,
    outputSchema: QueryPacksListByResourceGroupOutput,
  }));
// Input Schema
export interface QueryPacksUpdateTagsInput {
  subscriptionId: string;
  resourceGroupName: string;
  queryPackName: string;
  tags?: Record<string, string>;
}
export const QueryPacksUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    queryPackName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<QueryPacksUpdateTagsInput>;

// Output Schema
export interface QueryPacksUpdateTagsOutput {
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
export const QueryPacksUpdateTagsOutput =
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
  }) as unknown as Schema.Codec<QueryPacksUpdateTagsOutput>;

// The operation
/**
 * Updates an existing QueryPack's tags. To update other fields use the CreateOrUpdate method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param queryPackName - The name of the Log Analytics QueryPack resource.
 */
export const QueryPacksUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: QueryPacksUpdateTagsInput,
    outputSchema: QueryPacksUpdateTagsOutput,
  }),
);
// Input Schema
export interface SavedSearchesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  savedSearchId: string;
  properties: {
    category: string;
    displayName: string;
    query: string;
    functionAlias?: string;
    functionParameters?: string;
    version?: number;
    tags?: { name: string; value: string }[];
  };
  etag?: string;
}
export const SavedSearchesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    savedSearchId: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      category: Schema.String,
      displayName: Schema.String,
      query: Schema.String,
      functionAlias: Schema.optional(Schema.String),
      functionParameters: Schema.optional(Schema.String),
      version: Schema.optional(Schema.Number),
      tags: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<SavedSearchesCreateOrUpdateInput>;

// Output Schema
export interface SavedSearchesCreateOrUpdateOutput {
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
export const SavedSearchesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SavedSearchesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a saved search for a given workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param savedSearchId - The id of the saved search.
 */
export const SavedSearchesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavedSearchesCreateOrUpdateInput,
    outputSchema: SavedSearchesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SavedSearchesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  savedSearchId: string;
}
export const SavedSearchesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    savedSearchId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<SavedSearchesDeleteInput>;

// Output Schema
export type SavedSearchesDeleteOutput = void;
export const SavedSearchesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SavedSearchesDeleteOutput>;

// The operation
/**
 * Deletes the specified saved search in a given workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param savedSearchId - The id of the saved search.
 */
export const SavedSearchesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavedSearchesDeleteInput,
  outputSchema: SavedSearchesDeleteOutput,
}));
// Input Schema
export interface SavedSearchesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  savedSearchId: string;
}
export const SavedSearchesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  savedSearchId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<SavedSearchesGetInput>;

// Output Schema
export interface SavedSearchesGetOutput {
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
export const SavedSearchesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<SavedSearchesGetOutput>;

// The operation
/**
 * Gets the specified saved search for a given workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param savedSearchId - The id of the saved search.
 */
export const SavedSearchesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavedSearchesGetInput,
  outputSchema: SavedSearchesGetOutput,
}));
// Input Schema
export interface SavedSearchesListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const SavedSearchesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<SavedSearchesListByWorkspaceInput>;

// Output Schema
export interface SavedSearchesListByWorkspaceOutput {
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
export const SavedSearchesListByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<SavedSearchesListByWorkspaceOutput>;

// The operation
/**
 * Gets the saved searches for a given Log Analytics Workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const SavedSearchesListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SavedSearchesListByWorkspaceInput,
    outputSchema: SavedSearchesListByWorkspaceOutput,
  }));
// Input Schema
export interface SchemaGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const SchemaGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/schema",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<SchemaGetInput>;

// Output Schema
export interface SchemaGetOutput {
  metadata?: {
    requestId?: string;
    resultType?: string;
    total?: number;
    top?: number;
    id?: string;
    coreSummaries?: { status?: string; numberOfDocuments: number }[];
    status?: string;
    startTime?: string;
    lastUpdated?: string;
    eTag?: string;
    sort?: { name?: string; order?: "asc" | "desc" }[];
    requestTime?: number;
    aggregatedValueField?: string;
    aggregatedGroupingFields?: string;
    sum?: number;
    max?: number;
    schema?: { name?: string; version?: number };
  };
  value?: {
    name?: string;
    displayName?: string;
    type?: string;
    indexed: boolean;
    stored: boolean;
    facet: boolean;
    ownerType?: string[];
  }[];
}
export const SchemaGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(
    Schema.Struct({
      requestId: Schema.optional(Schema.String),
      resultType: Schema.optional(Schema.String),
      total: Schema.optional(Schema.Number),
      top: Schema.optional(Schema.Number),
      id: Schema.optional(Schema.String),
      coreSummaries: Schema.optional(
        Schema.Array(
          Schema.Struct({
            status: Schema.optional(Schema.String),
            numberOfDocuments: Schema.Number,
          }),
        ),
      ),
      status: Schema.optional(Schema.String),
      startTime: Schema.optional(Schema.String),
      lastUpdated: Schema.optional(Schema.String),
      eTag: Schema.optional(Schema.String),
      sort: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            order: Schema.optional(Schema.Literals(["asc", "desc"])),
          }),
        ),
      ),
      requestTime: Schema.optional(Schema.Number),
      aggregatedValueField: Schema.optional(Schema.String),
      aggregatedGroupingFields: Schema.optional(Schema.String),
      sum: Schema.optional(Schema.Number),
      max: Schema.optional(Schema.Number),
      schema: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          version: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        indexed: Schema.Boolean,
        stored: Schema.Boolean,
        facet: Schema.Boolean,
        ownerType: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  ),
}) as unknown as Schema.Codec<SchemaGetOutput>;

// The operation
/**
 * Gets the schema for a given workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const SchemaGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchemaGetInput,
  outputSchema: SchemaGetOutput,
}));
// Input Schema
export interface SharedKeysGetSharedKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const SharedKeysGetSharedKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/sharedKeys",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<SharedKeysGetSharedKeysInput>;

// Output Schema
export interface SharedKeysGetSharedKeysOutput {
  primarySharedKey?: string;
  secondarySharedKey?: string;
}
export const SharedKeysGetSharedKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primarySharedKey: Schema.optional(Schema.String),
    secondarySharedKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SharedKeysGetSharedKeysOutput>;

// The operation
/**
 * Gets the shared keys for a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const SharedKeysGetSharedKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SharedKeysGetSharedKeysInput,
    outputSchema: SharedKeysGetSharedKeysOutput,
  }),
);
// Input Schema
export interface SharedKeysRegenerateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const SharedKeysRegenerateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/regenerateSharedKey",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<SharedKeysRegenerateInput>;

// Output Schema
export interface SharedKeysRegenerateOutput {
  primarySharedKey?: string;
  secondarySharedKey?: string;
}
export const SharedKeysRegenerateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primarySharedKey: Schema.optional(Schema.String),
    secondarySharedKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SharedKeysRegenerateOutput>;

// The operation
/**
 * Regenerates the shared keys for a Log Analytics Workspace. These keys are used to connect Microsoft Operational Insights agents to the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const SharedKeysRegenerate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SharedKeysRegenerateInput,
    outputSchema: SharedKeysRegenerateOutput,
  }),
);
// Input Schema
export interface StorageInsightConfigsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  storageInsightName: string;
  properties?: {
    containers?: string[];
    tables?: string[];
    storageAccount: { id: string; key: string };
    status?: { state: "OK" | "ERROR"; description?: string };
  };
  eTag?: string;
  tags?: Record<string, string>;
}
export const StorageInsightConfigsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    storageInsightName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        containers: Schema.optional(Schema.Array(Schema.String)),
        tables: Schema.optional(Schema.Array(Schema.String)),
        storageAccount: Schema.Struct({
          id: Schema.String,
          key: Schema.String,
        }),
        status: Schema.optional(
          Schema.Struct({
            state: Schema.Literals(["OK", "ERROR"]),
            description: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs/{storageInsightName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<StorageInsightConfigsCreateOrUpdateInput>;

// Output Schema
export interface StorageInsightConfigsCreateOrUpdateOutput {
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
export const StorageInsightConfigsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageInsightConfigsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a storage insight.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param storageInsightName - Name of the storageInsightsConfigs resource
 */
export const StorageInsightConfigsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageInsightConfigsCreateOrUpdateInput,
    outputSchema: StorageInsightConfigsCreateOrUpdateOutput,
  }));
// Input Schema
export interface StorageInsightConfigsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  storageInsightName: string;
}
export const StorageInsightConfigsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    storageInsightName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs/{storageInsightName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<StorageInsightConfigsDeleteInput>;

// Output Schema
export type StorageInsightConfigsDeleteOutput = void;
export const StorageInsightConfigsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageInsightConfigsDeleteOutput>;

// The operation
/**
 * Deletes a storageInsightsConfigs resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param storageInsightName - Name of the storageInsightsConfigs resource
 */
export const StorageInsightConfigsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageInsightConfigsDeleteInput,
    outputSchema: StorageInsightConfigsDeleteOutput,
  }),
);
// Input Schema
export interface StorageInsightConfigsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  storageInsightName: string;
}
export const StorageInsightConfigsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    storageInsightName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs/{storageInsightName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<StorageInsightConfigsGetInput>;

// Output Schema
export interface StorageInsightConfigsGetOutput {
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
export const StorageInsightConfigsGetOutput =
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
  }) as unknown as Schema.Codec<StorageInsightConfigsGetOutput>;

// The operation
/**
 * Gets a storage insight instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param storageInsightName - Name of the storageInsightsConfigs resource
 */
export const StorageInsightConfigsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageInsightConfigsGetInput,
    outputSchema: StorageInsightConfigsGetOutput,
  }),
);
// Input Schema
export interface StorageInsightConfigsListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const StorageInsightConfigsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/storageInsightConfigs",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<StorageInsightConfigsListByWorkspaceInput>;

// Output Schema
export interface StorageInsightConfigsListByWorkspaceOutput {
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
  "@odata.nextLink"?: string;
}
export const StorageInsightConfigsListByWorkspaceOutput =
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
    "@odata.nextLink": Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StorageInsightConfigsListByWorkspaceOutput>;

// The operation
/**
 * Lists the storage insight instances within a workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const StorageInsightConfigsListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageInsightConfigsListByWorkspaceInput,
    outputSchema: StorageInsightConfigsListByWorkspaceOutput,
  }));
// Input Schema
export interface SummaryLogsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  summaryLogsName: string;
  properties?: {
    ruleType?: "User";
    displayName?: string;
    description?: string;
    isActive?: boolean;
    statusCode?: "UserAction" | "DataPlaneError";
    provisioningState?:
      | "Updating"
      | "Succeeded"
      | "Deleting"
      | "Failed"
      | "Canceled";
    ruleDefinition?: {
      query?: string;
      binSize?: number;
      binDelay?: number;
      binStartTime?: string;
      timeSelector?: "TimeGenerated";
      destinationTable?: string;
    };
  };
}
export const SummaryLogsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    summaryLogsName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        ruleType: Schema.optional(Schema.Literals(["User"])),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        isActive: Schema.optional(Schema.Boolean),
        statusCode: Schema.optional(
          Schema.Literals(["UserAction", "DataPlaneError"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Updating",
            "Succeeded",
            "Deleting",
            "Failed",
            "Canceled",
          ]),
        ),
        ruleDefinition: Schema.optional(
          Schema.Struct({
            query: Schema.optional(Schema.String),
            binSize: Schema.optional(Schema.Number),
            binDelay: Schema.optional(Schema.Number),
            binStartTime: Schema.optional(Schema.String),
            timeSelector: Schema.optional(Schema.Literals(["TimeGenerated"])),
            destinationTable: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/summaryLogs/{summaryLogsName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<SummaryLogsCreateOrUpdateInput>;

// Output Schema
export interface SummaryLogsCreateOrUpdateOutput {
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
export const SummaryLogsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SummaryLogsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates Log Analytics workspace Summary rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param summaryLogsName - The name of the summary logs. Must not contain '/'.
 */
export const SummaryLogsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SummaryLogsCreateOrUpdateInput,
    outputSchema: SummaryLogsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SummaryLogsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  summaryLogsName: string;
}
export const SummaryLogsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    summaryLogsName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/summaryLogs/{summaryLogsName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<SummaryLogsDeleteInput>;

// Output Schema
export type SummaryLogsDeleteOutput = void;
export const SummaryLogsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SummaryLogsDeleteOutput>;

// The operation
/**
 * Deletes Log Analytics workspace Summary rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param summaryLogsName - The name of the summary logs. Must not contain '/'.
 */
export const SummaryLogsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SummaryLogsDeleteInput,
  outputSchema: SummaryLogsDeleteOutput,
}));
// Input Schema
export interface SummaryLogsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  summaryLogsName: string;
}
export const SummaryLogsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  summaryLogsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/summaryLogs/{summaryLogsName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<SummaryLogsGetInput>;

// Output Schema
export interface SummaryLogsGetOutput {
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
export const SummaryLogsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SummaryLogsGetOutput>;

// The operation
/**
 * Gets Log Analytics workspace Summary rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param summaryLogsName - The name of the summary logs. Must not contain '/'.
 */
export const SummaryLogsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SummaryLogsGetInput,
  outputSchema: SummaryLogsGetOutput,
}));
// Input Schema
export interface SummaryLogsListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const SummaryLogsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/summaryLogs",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<SummaryLogsListByWorkspaceInput>;

// Output Schema
export interface SummaryLogsListByWorkspaceOutput {
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
export const SummaryLogsListByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<SummaryLogsListByWorkspaceOutput>;

// The operation
/**
 * Gets all summary rules for the specified Log Analytics workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const SummaryLogsListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SummaryLogsListByWorkspaceInput,
    outputSchema: SummaryLogsListByWorkspaceOutput,
  }),
);
// Input Schema
export interface SummaryLogsRetryBinInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  summaryLogsName: string;
  properties?: { retryBinStartTime: string };
}
export const SummaryLogsRetryBinInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    summaryLogsName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        retryBinStartTime: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/summaryLogs/{summaryLogsName}/retrybin",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<SummaryLogsRetryBinInput>;

// Output Schema
export type SummaryLogsRetryBinOutput = void;
export const SummaryLogsRetryBinOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SummaryLogsRetryBinOutput>;

// The operation
/**
 * Retries a failed Summary rule bin.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param summaryLogsName - The name of the summary logs. Must not contain '/'.
 */
export const SummaryLogsRetryBin = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SummaryLogsRetryBinInput,
  outputSchema: SummaryLogsRetryBinOutput,
}));
// Input Schema
export interface SummaryLogsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  summaryLogsName: string;
}
export const SummaryLogsStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  summaryLogsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/summaryLogs/{summaryLogsName}/start",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<SummaryLogsStartInput>;

// Output Schema
export type SummaryLogsStartOutput = void;
export const SummaryLogsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SummaryLogsStartOutput>;

// The operation
/**
 * Starts an inactive Summary rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param summaryLogsName - The name of the summary logs. Must not contain '/'.
 */
export const SummaryLogsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SummaryLogsStartInput,
  outputSchema: SummaryLogsStartOutput,
}));
// Input Schema
export interface SummaryLogsStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  summaryLogsName: string;
}
export const SummaryLogsStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  summaryLogsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/summaryLogs/{summaryLogsName}/stop",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<SummaryLogsStopInput>;

// Output Schema
export type SummaryLogsStopOutput = void;
export const SummaryLogsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SummaryLogsStopOutput>;

// The operation
/**
 * Stops an active Summary rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param summaryLogsName - The name of the summary logs. Must not contain '/'.
 */
export const SummaryLogsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SummaryLogsStopInput,
  outputSchema: SummaryLogsStopOutput,
}));
// Input Schema
export interface TablesCancelSearchInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  tableName: string;
}
export const TablesCancelSearchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/tables/{tableName}/cancelSearch",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<TablesCancelSearchInput>;

// Output Schema
export type TablesCancelSearchOutput = void;
export const TablesCancelSearchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TablesCancelSearchOutput>;

// The operation
/**
 * Cancel a log analytics workspace search results table query run.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param tableName - The name of the table.
 */
export const TablesCancelSearch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TablesCancelSearchInput,
  outputSchema: TablesCancelSearchOutput,
}));
// Input Schema
export interface TablesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  tableName: string;
  properties?: {
    retentionInDays?: number;
    totalRetentionInDays?: number;
    archiveRetentionInDays?: number;
    searchResults?: {
      query?: string;
      description?: string;
      limit?: number;
      startSearchTime?: string;
      endSearchTime?: string;
      sourceTable?: string;
      azureAsyncOperationId?: string;
    };
    restoredLogs?: {
      startRestoreTime?: string;
      endRestoreTime?: string;
      sourceTable?: string;
      azureAsyncOperationId?: string;
    };
    resultStatistics?: {
      progress?: number;
      ingestedRecords?: number;
      scannedGb?: number;
    };
    plan?: "Basic" | "Analytics" | "Auxiliary";
    lastPlanModifiedDate?: string;
    schema?: {
      name?: string;
      displayName?: string;
      description?: string;
      columns?: {
        name?: string;
        type?:
          | "string"
          | "int"
          | "long"
          | "real"
          | "boolean"
          | "dateTime"
          | "guid"
          | "dynamic";
        dataTypeHint?: "uri" | "guid" | "armPath" | "ip";
        displayName?: string;
        description?: string;
        isDefaultDisplay?: boolean;
        isHidden?: boolean;
      }[];
      standardColumns?: {
        name?: string;
        type?:
          | "string"
          | "int"
          | "long"
          | "real"
          | "boolean"
          | "dateTime"
          | "guid"
          | "dynamic";
        dataTypeHint?: "uri" | "guid" | "armPath" | "ip";
        displayName?: string;
        description?: string;
        isDefaultDisplay?: boolean;
        isHidden?: boolean;
      }[];
      categories?: string[];
      labels?: string[];
      source?: "microsoft" | "customer";
      tableType?: "Microsoft" | "CustomLog" | "RestoredLogs" | "SearchResults";
      tableSubType?: "Any" | "Classic" | "DataCollectionRuleBased";
      solutions?: string[];
    };
    provisioningState?: "Updating" | "InProgress" | "Succeeded" | "Deleting";
    retentionInDaysAsDefault?: boolean;
    totalRetentionInDaysAsDefault?: boolean;
  };
}
export const TablesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        retentionInDays: Schema.optional(Schema.Number),
        totalRetentionInDays: Schema.optional(Schema.Number),
        archiveRetentionInDays: Schema.optional(Schema.Number),
        searchResults: Schema.optional(
          Schema.Struct({
            query: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            limit: Schema.optional(Schema.Number),
            startSearchTime: Schema.optional(Schema.String),
            endSearchTime: Schema.optional(Schema.String),
            sourceTable: Schema.optional(Schema.String),
            azureAsyncOperationId: Schema.optional(Schema.String),
          }),
        ),
        restoredLogs: Schema.optional(
          Schema.Struct({
            startRestoreTime: Schema.optional(Schema.String),
            endRestoreTime: Schema.optional(Schema.String),
            sourceTable: Schema.optional(Schema.String),
            azureAsyncOperationId: Schema.optional(Schema.String),
          }),
        ),
        resultStatistics: Schema.optional(
          Schema.Struct({
            progress: Schema.optional(Schema.Number),
            ingestedRecords: Schema.optional(Schema.Number),
            scannedGb: Schema.optional(Schema.Number),
          }),
        ),
        plan: Schema.optional(
          Schema.Literals(["Basic", "Analytics", "Auxiliary"]),
        ),
        lastPlanModifiedDate: Schema.optional(Schema.String),
        schema: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            columns: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals([
                      "string",
                      "int",
                      "long",
                      "real",
                      "boolean",
                      "dateTime",
                      "guid",
                      "dynamic",
                    ]),
                  ),
                  dataTypeHint: Schema.optional(
                    Schema.Literals(["uri", "guid", "armPath", "ip"]),
                  ),
                  displayName: Schema.optional(Schema.String),
                  description: Schema.optional(Schema.String),
                  isDefaultDisplay: Schema.optional(Schema.Boolean),
                  isHidden: Schema.optional(Schema.Boolean),
                }),
              ),
            ),
            standardColumns: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals([
                      "string",
                      "int",
                      "long",
                      "real",
                      "boolean",
                      "dateTime",
                      "guid",
                      "dynamic",
                    ]),
                  ),
                  dataTypeHint: Schema.optional(
                    Schema.Literals(["uri", "guid", "armPath", "ip"]),
                  ),
                  displayName: Schema.optional(Schema.String),
                  description: Schema.optional(Schema.String),
                  isDefaultDisplay: Schema.optional(Schema.Boolean),
                  isHidden: Schema.optional(Schema.Boolean),
                }),
              ),
            ),
            categories: Schema.optional(Schema.Array(Schema.String)),
            labels: Schema.optional(Schema.Array(Schema.String)),
            source: Schema.optional(Schema.Literals(["microsoft", "customer"])),
            tableType: Schema.optional(
              Schema.Literals([
                "Microsoft",
                "CustomLog",
                "RestoredLogs",
                "SearchResults",
              ]),
            ),
            tableSubType: Schema.optional(
              Schema.Literals(["Any", "Classic", "DataCollectionRuleBased"]),
            ),
            solutions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Updating", "InProgress", "Succeeded", "Deleting"]),
        ),
        retentionInDaysAsDefault: Schema.optional(Schema.Boolean),
        totalRetentionInDaysAsDefault: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/tables/{tableName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<TablesCreateOrUpdateInput>;

// Output Schema
export interface TablesCreateOrUpdateOutput {
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
export const TablesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TablesCreateOrUpdateOutput>;

// The operation
/**
 * Update or Create a Log Analytics workspace table.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param tableName - The name of the table.
 */
export const TablesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TablesCreateOrUpdateInput,
    outputSchema: TablesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface TablesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  tableName: string;
}
export const TablesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/tables/{tableName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<TablesDeleteInput>;

// Output Schema
export type TablesDeleteOutput = void;
export const TablesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TablesDeleteOutput>;

// The operation
/**
 * Delete a Log Analytics workspace table.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param tableName - The name of the table.
 */
export const TablesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TablesDeleteInput,
  outputSchema: TablesDeleteOutput,
}));
// Input Schema
export interface TablesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  tableName: string;
}
export const TablesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/tables/{tableName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<TablesGetInput>;

// Output Schema
export interface TablesGetOutput {
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
export const TablesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TablesGetOutput>;

// The operation
/**
 * Gets a Log Analytics workspace table.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param tableName - The name of the table.
 */
export const TablesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TablesGetInput,
  outputSchema: TablesGetOutput,
}));
// Input Schema
export interface TablesListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const TablesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/tables",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<TablesListByWorkspaceInput>;

// Output Schema
export interface TablesListByWorkspaceOutput {
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
export const TablesListByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<TablesListByWorkspaceOutput>;

// The operation
/**
 * Gets all the tables for the specified Log Analytics workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const TablesListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TablesListByWorkspaceInput,
    outputSchema: TablesListByWorkspaceOutput,
  }),
);
// Input Schema
export interface TablesMigrateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  tableName: string;
}
export const TablesMigrateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/tables/{tableName}/migrate",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<TablesMigrateInput>;

// Output Schema
export type TablesMigrateOutput = void;
export const TablesMigrateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TablesMigrateOutput>;

// The operation
/**
 * Migrate a Log Analytics table from support of the Data Collector API and Custom Fields features to support of Data Collection Rule-based Custom Logs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param tableName - The name of the table.
 */
export const TablesMigrate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TablesMigrateInput,
  outputSchema: TablesMigrateOutput,
}));
// Input Schema
export interface TablesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  tableName: string;
  properties?: {
    retentionInDays?: number;
    totalRetentionInDays?: number;
    archiveRetentionInDays?: number;
    searchResults?: {
      query?: string;
      description?: string;
      limit?: number;
      startSearchTime?: string;
      endSearchTime?: string;
      sourceTable?: string;
      azureAsyncOperationId?: string;
    };
    restoredLogs?: {
      startRestoreTime?: string;
      endRestoreTime?: string;
      sourceTable?: string;
      azureAsyncOperationId?: string;
    };
    resultStatistics?: {
      progress?: number;
      ingestedRecords?: number;
      scannedGb?: number;
    };
    plan?: "Basic" | "Analytics" | "Auxiliary";
    lastPlanModifiedDate?: string;
    schema?: {
      name?: string;
      displayName?: string;
      description?: string;
      columns?: {
        name?: string;
        type?:
          | "string"
          | "int"
          | "long"
          | "real"
          | "boolean"
          | "dateTime"
          | "guid"
          | "dynamic";
        dataTypeHint?: "uri" | "guid" | "armPath" | "ip";
        displayName?: string;
        description?: string;
        isDefaultDisplay?: boolean;
        isHidden?: boolean;
      }[];
      standardColumns?: {
        name?: string;
        type?:
          | "string"
          | "int"
          | "long"
          | "real"
          | "boolean"
          | "dateTime"
          | "guid"
          | "dynamic";
        dataTypeHint?: "uri" | "guid" | "armPath" | "ip";
        displayName?: string;
        description?: string;
        isDefaultDisplay?: boolean;
        isHidden?: boolean;
      }[];
      categories?: string[];
      labels?: string[];
      source?: "microsoft" | "customer";
      tableType?: "Microsoft" | "CustomLog" | "RestoredLogs" | "SearchResults";
      tableSubType?: "Any" | "Classic" | "DataCollectionRuleBased";
      solutions?: string[];
    };
    provisioningState?: "Updating" | "InProgress" | "Succeeded" | "Deleting";
    retentionInDaysAsDefault?: boolean;
    totalRetentionInDaysAsDefault?: boolean;
  };
}
export const TablesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      retentionInDays: Schema.optional(Schema.Number),
      totalRetentionInDays: Schema.optional(Schema.Number),
      archiveRetentionInDays: Schema.optional(Schema.Number),
      searchResults: Schema.optional(
        Schema.Struct({
          query: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          limit: Schema.optional(Schema.Number),
          startSearchTime: Schema.optional(Schema.String),
          endSearchTime: Schema.optional(Schema.String),
          sourceTable: Schema.optional(Schema.String),
          azureAsyncOperationId: Schema.optional(Schema.String),
        }),
      ),
      restoredLogs: Schema.optional(
        Schema.Struct({
          startRestoreTime: Schema.optional(Schema.String),
          endRestoreTime: Schema.optional(Schema.String),
          sourceTable: Schema.optional(Schema.String),
          azureAsyncOperationId: Schema.optional(Schema.String),
        }),
      ),
      resultStatistics: Schema.optional(
        Schema.Struct({
          progress: Schema.optional(Schema.Number),
          ingestedRecords: Schema.optional(Schema.Number),
          scannedGb: Schema.optional(Schema.Number),
        }),
      ),
      plan: Schema.optional(
        Schema.Literals(["Basic", "Analytics", "Auxiliary"]),
      ),
      lastPlanModifiedDate: Schema.optional(Schema.String),
      schema: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          columns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                type: Schema.optional(
                  Schema.Literals([
                    "string",
                    "int",
                    "long",
                    "real",
                    "boolean",
                    "dateTime",
                    "guid",
                    "dynamic",
                  ]),
                ),
                dataTypeHint: Schema.optional(
                  Schema.Literals(["uri", "guid", "armPath", "ip"]),
                ),
                displayName: Schema.optional(Schema.String),
                description: Schema.optional(Schema.String),
                isDefaultDisplay: Schema.optional(Schema.Boolean),
                isHidden: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          standardColumns: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                type: Schema.optional(
                  Schema.Literals([
                    "string",
                    "int",
                    "long",
                    "real",
                    "boolean",
                    "dateTime",
                    "guid",
                    "dynamic",
                  ]),
                ),
                dataTypeHint: Schema.optional(
                  Schema.Literals(["uri", "guid", "armPath", "ip"]),
                ),
                displayName: Schema.optional(Schema.String),
                description: Schema.optional(Schema.String),
                isDefaultDisplay: Schema.optional(Schema.Boolean),
                isHidden: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          categories: Schema.optional(Schema.Array(Schema.String)),
          labels: Schema.optional(Schema.Array(Schema.String)),
          source: Schema.optional(Schema.Literals(["microsoft", "customer"])),
          tableType: Schema.optional(
            Schema.Literals([
              "Microsoft",
              "CustomLog",
              "RestoredLogs",
              "SearchResults",
            ]),
          ),
          tableSubType: Schema.optional(
            Schema.Literals(["Any", "Classic", "DataCollectionRuleBased"]),
          ),
          solutions: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals(["Updating", "InProgress", "Succeeded", "Deleting"]),
      ),
      retentionInDaysAsDefault: Schema.optional(Schema.Boolean),
      totalRetentionInDaysAsDefault: Schema.optional(Schema.Boolean),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/tables/{tableName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<TablesUpdateInput>;

// Output Schema
export interface TablesUpdateOutput {
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
export const TablesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TablesUpdateOutput>;

// The operation
/**
 * Update a Log Analytics workspace table.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param tableName - The name of the table.
 */
export const TablesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TablesUpdateInput,
  outputSchema: TablesUpdateOutput,
}));
// Input Schema
export interface UsagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const UsagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/usages",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<UsagesListInput>;

// Output Schema
export interface UsagesListOutput {
  value?: {
    name?: { value?: string; localizedValue?: string };
    unit?: string;
    currentValue?: number;
    limit?: number;
    nextResetTime?: string;
    quotaPeriod?: string;
  }[];
  nextLink?: string;
}
export const UsagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(
          Schema.Struct({
            value: Schema.optional(Schema.String),
            localizedValue: Schema.optional(Schema.String),
          }),
        ),
        unit: Schema.optional(Schema.String),
        currentValue: Schema.optional(Schema.Number),
        limit: Schema.optional(Schema.Number),
        nextResetTime: Schema.optional(Schema.String),
        quotaPeriod: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UsagesListOutput>;

// The operation
/**
 * Gets a list of usage metrics for a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const UsagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
// Input Schema
export interface WorkspacePurgeGetPurgeStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  purgeId: string;
}
export const WorkspacePurgeGetPurgeStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    purgeId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/operations/{purgeId}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<WorkspacePurgeGetPurgeStatusInput>;

// Output Schema
export interface WorkspacePurgeGetPurgeStatusOutput {
  status: "pending" | "completed";
}
export const WorkspacePurgeGetPurgeStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.Literals(["pending", "completed"]),
  }) as unknown as Schema.Codec<WorkspacePurgeGetPurgeStatusOutput>;

// The operation
/**
 * Gets status of an ongoing purge operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param purgeId - In a purge status request, this is the Id of the operation the status of which is returned.
 */
export const WorkspacePurgeGetPurgeStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacePurgeGetPurgeStatusInput,
    outputSchema: WorkspacePurgeGetPurgeStatusOutput,
  }));
// Input Schema
export interface WorkspacePurgePurgeInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  table: string;
  filters: {
    column?: string;
    operator?: string;
    value?: unknown;
    key?: string;
  }[];
}
export const WorkspacePurgePurgeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    table: Schema.String,
    filters: Schema.Array(
      Schema.Struct({
        column: Schema.optional(Schema.String),
        operator: Schema.optional(Schema.String),
        value: Schema.optional(Schema.Unknown),
        key: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/purge",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<WorkspacePurgePurgeInput>;

// Output Schema
export type WorkspacePurgePurgeOutput = void;
export const WorkspacePurgePurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacePurgePurgeOutput>;

// The operation
/**
 * Purges data in an Log Analytics workspace by a set of user-defined filters.
 * In order to manage system resources, purge requests are throttled at 50 requests per hour. You should batch the execution of purge requests by sending a single command whose predicate includes all user identities that require purging. Use the in operator to specify multiple identities. You should run the query prior to using for a purge request to verify that the results are expected.
 * Log Analytics only supports purge operations required for compliance with GDPR. The Log Analytics product team reserves the right to reject requests for purge operations that are not for the purpose of GDPR compliance. In the event of a dispute, please create a support ticket
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacePurgePurge = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacePurgePurgeInput,
  outputSchema: WorkspacePurgePurgeOutput,
}));
// Input Schema
export interface WorkspacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting"
      | "ProvisioningAccount"
      | "Updating";
    customerId?: string;
    sku?: {
      name:
        | "Free"
        | "Standard"
        | "Premium"
        | "PerNode"
        | "PerGB2018"
        | "Standalone"
        | "CapacityReservation"
        | "LACluster";
      capacityReservationLevel?: number | null;
      lastSkuUpdate?: string;
    };
    retentionInDays?: number | null;
    workspaceCapping?: {
      dailyQuotaGb?: number;
      quotaNextResetTime?: string;
      dataIngestionStatus?:
        | "RespectQuota"
        | "ForceOn"
        | "ForceOff"
        | "OverQuota"
        | "SubscriptionSuspended"
        | "ApproachingQuota";
    };
    createdDate?: string;
    modifiedDate?: string;
    publicNetworkAccessForIngestion?:
      | "Enabled"
      | "Disabled"
      | "SecuredByPerimeter";
    publicNetworkAccessForQuery?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    forceCmkForQuery?: boolean;
    privateLinkScopedResources?: { resourceId?: string; scopeId?: string }[];
    features?: {
      enableDataExport?: boolean | null;
      immediatePurgeDataOn30Days?: boolean | null;
      enableLogAccessUsingOnlyResourcePermissions?: boolean | null;
      clusterResourceId?: string | null;
      disableLocalAuth?: boolean | null;
      unifiedSentinelBillingOnly?: boolean | null;
      associations?: string[];
    };
    defaultDataCollectionRuleResourceId?: string;
    replication?: {
      location?: string;
      enabled?: boolean;
      provisioningState?:
        | "Succeeded"
        | "EnableRequested"
        | "Enabling"
        | "DisableRequested"
        | "Disabling"
        | "RollbackRequested"
        | "RollingBack"
        | "Failed"
        | "Canceled";
      createdDate?: string;
      lastModifiedDate?: string;
    };
    failover?: {
      state?: "Inactive" | "Activating" | "Active" | "Deactivating" | "Failed";
      lastModifiedDate?: string;
    };
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "SystemAssigned" | "UserAssigned" | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  etag?: string;
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
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
            "ProvisioningAccount",
            "Updating",
          ]),
        ),
        customerId: Schema.optional(Schema.String),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.Literals([
              "Free",
              "Standard",
              "Premium",
              "PerNode",
              "PerGB2018",
              "Standalone",
              "CapacityReservation",
              "LACluster",
            ]),
            capacityReservationLevel: Schema.optional(
              Schema.NullOr(Schema.Number),
            ),
            lastSkuUpdate: Schema.optional(Schema.String),
          }),
        ),
        retentionInDays: Schema.optional(Schema.NullOr(Schema.Number)),
        workspaceCapping: Schema.optional(
          Schema.Struct({
            dailyQuotaGb: Schema.optional(Schema.Number),
            quotaNextResetTime: Schema.optional(Schema.String),
            dataIngestionStatus: Schema.optional(
              Schema.Literals([
                "RespectQuota",
                "ForceOn",
                "ForceOff",
                "OverQuota",
                "SubscriptionSuspended",
                "ApproachingQuota",
              ]),
            ),
          }),
        ),
        createdDate: Schema.optional(Schema.String),
        modifiedDate: Schema.optional(Schema.String),
        publicNetworkAccessForIngestion: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        publicNetworkAccessForQuery: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        forceCmkForQuery: Schema.optional(Schema.Boolean),
        privateLinkScopedResources: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.optional(Schema.String),
              scopeId: Schema.optional(Schema.String),
            }),
          ),
        ),
        features: Schema.optional(
          Schema.Struct({
            enableDataExport: Schema.optional(Schema.NullOr(Schema.Boolean)),
            immediatePurgeDataOn30Days: Schema.optional(
              Schema.NullOr(Schema.Boolean),
            ),
            enableLogAccessUsingOnlyResourcePermissions: Schema.optional(
              Schema.NullOr(Schema.Boolean),
            ),
            clusterResourceId: Schema.optional(Schema.NullOr(Schema.String)),
            disableLocalAuth: Schema.optional(Schema.NullOr(Schema.Boolean)),
            unifiedSentinelBillingOnly: Schema.optional(
              Schema.NullOr(Schema.Boolean),
            ),
            associations: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        defaultDataCollectionRuleResourceId: Schema.optional(Schema.String),
        replication: Schema.optional(
          Schema.Struct({
            location: Schema.optional(Schema.String),
            enabled: Schema.optional(Schema.Boolean),
            provisioningState: Schema.optional(
              Schema.Literals([
                "Succeeded",
                "EnableRequested",
                "Enabling",
                "DisableRequested",
                "Disabling",
                "RollbackRequested",
                "RollingBack",
                "Failed",
                "Canceled",
              ]),
            ),
            createdDate: Schema.optional(Schema.String),
            lastModifiedDate: Schema.optional(Schema.String),
          }),
        ),
        failover: Schema.optional(
          Schema.Struct({
            state: Schema.optional(
              Schema.Literals([
                "Inactive",
                "Activating",
                "Active",
                "Deactivating",
                "Failed",
              ]),
            ),
            lastModifiedDate: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesCreateOrUpdateInput>;

// Output Schema
export interface WorkspacesCreateOrUpdateOutput {
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
export const WorkspacesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WorkspacesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a workspace.
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
  force?: boolean;
}
export const WorkspacesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<WorkspacesDeleteInput>;

// Output Schema
export type WorkspacesDeleteOutput = void;
export const WorkspacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacesDeleteOutput>;

// The operation
/**
 * Deletes a workspace resource. To recover the workspace, create it again with the same name, in the same subscription, resource group and location. The name is kept for 14 days and cannot be used for another workspace. To remove the workspace completely and release the name, use the force flag.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param force - Deletes the workspace without the recovery option. A workspace that was deleted with this flag cannot be recovered.
 */
export const WorkspacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesDeleteInput,
  outputSchema: WorkspacesDeleteOutput,
}));
// Input Schema
export interface WorkspacesFailbackInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesFailbackInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/failback",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesFailbackInput>;

// Output Schema
export type WorkspacesFailbackOutput = void;
export const WorkspacesFailbackOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacesFailbackOutput>;

// The operation
/**
 * Deactivates failover for the specified workspace.
 * The failback operation is asynchronous and can take up to 30 minutes to complete. The status of the operation can be checked using the operationId returned in the response.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesFailback = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesFailbackInput,
  outputSchema: WorkspacesFailbackOutput,
}));
// Input Schema
export interface WorkspacesFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  workspaceName: string;
}
export const WorkspacesFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/locations/{location}/workspaces/{workspaceName}/failover",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesFailoverInput>;

// Output Schema
export type WorkspacesFailoverOutput = void;
export const WorkspacesFailoverOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacesFailoverOutput>;

// The operation
/**
 * Activates failover for the specified workspace.
 * The specified replication location must match the location of the enabled replication for this workspace. The failover operation is asynchronous and can take up to 30 minutes to complete. The status of the operation can be checked using the operationId returned in the response.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of the Azure region.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesFailover = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesFailoverInput,
  outputSchema: WorkspacesFailoverOutput,
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<WorkspacesGetInput>;

// Output Schema
export interface WorkspacesGetOutput {
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
export const WorkspacesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WorkspacesGetOutput>;

// The operation
/**
 * Gets a workspace instance.
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
export interface WorkspacesGetNSPInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  networkSecurityPerimeterConfigurationName: string;
}
export const WorkspacesGetNSPInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  networkSecurityPerimeterConfigurationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/networkSecurityPerimeterConfigurations/{networkSecurityPerimeterConfigurationName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<WorkspacesGetNSPInput>;

// Output Schema
export interface WorkspacesGetNSPOutput {
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
export const WorkspacesGetNSPOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<WorkspacesGetNSPOutput>;

// The operation
/**
 * Gets a network security perimeter configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param networkSecurityPerimeterConfigurationName - The name for a network security perimeter configuration
 */
export const WorkspacesGetNSP = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesGetNSPInput,
  outputSchema: WorkspacesGetNSPOutput,
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
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.OperationalInsights/workspaces",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<WorkspacesListInput>;

// Output Schema
export interface WorkspacesListOutput {
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
export const WorkspacesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WorkspacesListOutput>;

// The operation
/**
 * Gets the workspaces in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListByResourceGroupInput>;

// Output Schema
export interface WorkspacesListByResourceGroupOutput {
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
export const WorkspacesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<WorkspacesListByResourceGroupOutput>;

// The operation
/**
 * Gets workspaces in a resource group.
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
export interface WorkspacesListNSPInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesListNSPInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/networkSecurityPerimeterConfigurations",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<WorkspacesListNSPInput>;

// Output Schema
export interface WorkspacesListNSPOutput {
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
export const WorkspacesListNSPOutput =
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
  }) as unknown as Schema.Codec<WorkspacesListNSPOutput>;

// The operation
/**
 * Gets a list of NSP configurations for specified workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesListNSP = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesListNSPInput,
  outputSchema: WorkspacesListNSPOutput,
}));
// Input Schema
export interface WorkspacesReconcileNSPInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  networkSecurityPerimeterConfigurationName: string;
}
export const WorkspacesReconcileNSPInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    networkSecurityPerimeterConfigurationName: Schema.String.pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/networkSecurityPerimeterConfigurations/{networkSecurityPerimeterConfigurationName}/reconcile",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesReconcileNSPInput>;

// Output Schema
export type WorkspacesReconcileNSPOutput = void;
export const WorkspacesReconcileNSPOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacesReconcileNSPOutput>;

// The operation
/**
 * Reconcile network security perimeter configuration for Workspace resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param networkSecurityPerimeterConfigurationName - The name for a network security perimeter configuration
 */
export const WorkspacesReconcileNSP = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkspacesReconcileNSPInput,
    outputSchema: WorkspacesReconcileNSPOutput,
  }),
);
// Input Schema
export interface WorkspacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting"
      | "ProvisioningAccount"
      | "Updating";
    customerId?: string;
    sku?: {
      name:
        | "Free"
        | "Standard"
        | "Premium"
        | "PerNode"
        | "PerGB2018"
        | "Standalone"
        | "CapacityReservation"
        | "LACluster";
      capacityReservationLevel?: number | null;
      lastSkuUpdate?: string;
    };
    retentionInDays?: number | null;
    workspaceCapping?: {
      dailyQuotaGb?: number;
      quotaNextResetTime?: string;
      dataIngestionStatus?:
        | "RespectQuota"
        | "ForceOn"
        | "ForceOff"
        | "OverQuota"
        | "SubscriptionSuspended"
        | "ApproachingQuota";
    };
    createdDate?: string;
    modifiedDate?: string;
    publicNetworkAccessForIngestion?:
      | "Enabled"
      | "Disabled"
      | "SecuredByPerimeter";
    publicNetworkAccessForQuery?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    forceCmkForQuery?: boolean;
    privateLinkScopedResources?: { resourceId?: string; scopeId?: string }[];
    features?: {
      enableDataExport?: boolean | null;
      immediatePurgeDataOn30Days?: boolean | null;
      enableLogAccessUsingOnlyResourcePermissions?: boolean | null;
      clusterResourceId?: string | null;
      disableLocalAuth?: boolean | null;
      unifiedSentinelBillingOnly?: boolean | null;
      associations?: string[];
    };
    defaultDataCollectionRuleResourceId?: string;
    replication?: {
      location?: string;
      enabled?: boolean;
      provisioningState?:
        | "Succeeded"
        | "EnableRequested"
        | "Enabling"
        | "DisableRequested"
        | "Disabling"
        | "RollbackRequested"
        | "RollingBack"
        | "Failed"
        | "Canceled";
      createdDate?: string;
      lastModifiedDate?: string;
    };
    failover?: {
      state?: "Inactive" | "Activating" | "Active" | "Deactivating" | "Failed";
      lastModifiedDate?: string;
    };
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "SystemAssigned" | "UserAssigned" | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  etag?: string;
}
export const WorkspacesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Succeeded",
          "Failed",
          "Canceled",
          "Deleting",
          "ProvisioningAccount",
          "Updating",
        ]),
      ),
      customerId: Schema.optional(Schema.String),
      sku: Schema.optional(
        Schema.Struct({
          name: Schema.Literals([
            "Free",
            "Standard",
            "Premium",
            "PerNode",
            "PerGB2018",
            "Standalone",
            "CapacityReservation",
            "LACluster",
          ]),
          capacityReservationLevel: Schema.optional(
            Schema.NullOr(Schema.Number),
          ),
          lastSkuUpdate: Schema.optional(Schema.String),
        }),
      ),
      retentionInDays: Schema.optional(Schema.NullOr(Schema.Number)),
      workspaceCapping: Schema.optional(
        Schema.Struct({
          dailyQuotaGb: Schema.optional(Schema.Number),
          quotaNextResetTime: Schema.optional(Schema.String),
          dataIngestionStatus: Schema.optional(
            Schema.Literals([
              "RespectQuota",
              "ForceOn",
              "ForceOff",
              "OverQuota",
              "SubscriptionSuspended",
              "ApproachingQuota",
            ]),
          ),
        }),
      ),
      createdDate: Schema.optional(Schema.String),
      modifiedDate: Schema.optional(Schema.String),
      publicNetworkAccessForIngestion: Schema.optional(
        Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
      ),
      publicNetworkAccessForQuery: Schema.optional(
        Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
      ),
      forceCmkForQuery: Schema.optional(Schema.Boolean),
      privateLinkScopedResources: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourceId: Schema.optional(Schema.String),
            scopeId: Schema.optional(Schema.String),
          }),
        ),
      ),
      features: Schema.optional(
        Schema.Struct({
          enableDataExport: Schema.optional(Schema.NullOr(Schema.Boolean)),
          immediatePurgeDataOn30Days: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          enableLogAccessUsingOnlyResourcePermissions: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          clusterResourceId: Schema.optional(Schema.NullOr(Schema.String)),
          disableLocalAuth: Schema.optional(Schema.NullOr(Schema.Boolean)),
          unifiedSentinelBillingOnly: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          associations: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      defaultDataCollectionRuleResourceId: Schema.optional(Schema.String),
      replication: Schema.optional(
        Schema.Struct({
          location: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Boolean),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "EnableRequested",
              "Enabling",
              "DisableRequested",
              "Disabling",
              "RollbackRequested",
              "RollingBack",
              "Failed",
              "Canceled",
            ]),
          ),
          createdDate: Schema.optional(Schema.String),
          lastModifiedDate: Schema.optional(Schema.String),
        }),
      ),
      failover: Schema.optional(
        Schema.Struct({
          state: Schema.optional(
            Schema.Literals([
              "Inactive",
              "Activating",
              "Active",
              "Deactivating",
              "Failed",
            ]),
          ),
          lastModifiedDate: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
  etag: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<WorkspacesUpdateInput>;

// Output Schema
export interface WorkspacesUpdateOutput {
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
export const WorkspacesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
