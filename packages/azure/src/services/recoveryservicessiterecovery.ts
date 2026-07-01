/**
 * Azure Recoveryservicessiterecovery API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ClusterRecoveryPointGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
  recoveryPointName: string;
}
export const ClusterRecoveryPointGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
    recoveryPointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}/recoveryPoints/{recoveryPointName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ClusterRecoveryPointGetInput>;

// Output Schema
export interface ClusterRecoveryPointGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    recoveryPointTime?: string;
    recoveryPointType?:
      | "NotSpecified"
      | "ApplicationConsistent"
      | "CrashConsistent";
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ClusterRecoveryPointGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        recoveryPointTime: Schema.optional(Schema.String),
        recoveryPointType: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "ApplicationConsistent",
            "CrashConsistent",
          ]),
        ),
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ClusterRecoveryPointGetOutput>;

// The operation
/**
 * Gets a recovery point.
 *
 * Get the details of specified recovery point.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 * @param recoveryPointName - The recovery point name.
 */
export const ClusterRecoveryPointGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClusterRecoveryPointGetInput,
    outputSchema: ClusterRecoveryPointGetOutput,
  }),
);
// Input Schema
export interface ClusterRecoveryPointsListByReplicationProtectionClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
}
export const ClusterRecoveryPointsListByReplicationProtectionClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}/recoveryPoints",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ClusterRecoveryPointsListByReplicationProtectionClusterInput>;

// Output Schema
export interface ClusterRecoveryPointsListByReplicationProtectionClusterOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      recoveryPointTime?: string;
      recoveryPointType?:
        | "NotSpecified"
        | "ApplicationConsistent"
        | "CrashConsistent";
      providerSpecificDetails?: { instanceType: string };
    };
  }[];
  nextLink?: string;
}
export const ClusterRecoveryPointsListByReplicationProtectionClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            recoveryPointTime: Schema.optional(Schema.String),
            recoveryPointType: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "ApplicationConsistent",
                "CrashConsistent",
              ]),
            ),
            providerSpecificDetails: Schema.optional(
              Schema.Struct({
                instanceType: Schema.String,
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClusterRecoveryPointsListByReplicationProtectionClusterOutput>;

// The operation
/**
 * Gets the list of cluster recovery points.
 *
 * The list of cluster recovery points.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 */
export const ClusterRecoveryPointsListByReplicationProtectionCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterRecoveryPointsListByReplicationProtectionClusterInput,
    outputSchema: ClusterRecoveryPointsListByReplicationProtectionClusterOutput,
  }));
// Input Schema
export interface MigrationRecoveryPointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
  migrationRecoveryPointName: string;
}
export const MigrationRecoveryPointsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
    migrationRecoveryPointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/migrationRecoveryPoints/{migrationRecoveryPointName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<MigrationRecoveryPointsGetInput>;

// Output Schema
export interface MigrationRecoveryPointsGetOutput {
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
export const MigrationRecoveryPointsGetOutput =
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
  }) as unknown as Schema.Codec<MigrationRecoveryPointsGetOutput>;

// The operation
/**
 * Gets a recovery point for a migration item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 * @param migrationRecoveryPointName - The migration recovery point name.
 */
export const MigrationRecoveryPointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MigrationRecoveryPointsGetInput,
    outputSchema: MigrationRecoveryPointsGetOutput,
  }),
);
// Input Schema
export interface MigrationRecoveryPointsListByReplicationMigrationItemsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
}
export const MigrationRecoveryPointsListByReplicationMigrationItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/migrationRecoveryPoints",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<MigrationRecoveryPointsListByReplicationMigrationItemsInput>;

// Output Schema
export interface MigrationRecoveryPointsListByReplicationMigrationItemsOutput {
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
export const MigrationRecoveryPointsListByReplicationMigrationItemsOutput =
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
  }) as unknown as Schema.Codec<MigrationRecoveryPointsListByReplicationMigrationItemsOutput>;

// The operation
/**
 * Gets the recovery points for a migration item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 */
export const MigrationRecoveryPointsListByReplicationMigrationItems =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrationRecoveryPointsListByReplicationMigrationItemsInput,
    outputSchema: MigrationRecoveryPointsListByReplicationMigrationItemsOutput,
  }));
// Input Schema
export interface OperationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/operations",
    apiVersion: "2026-05-01",
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
    origin?: string;
    properties?: unknown;
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
      origin: Schema.optional(Schema.String),
      properties: Schema.optional(Schema.Unknown),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Returns the list of available operations.
 *
 * Operation to return the list of available operations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface RecoveryPointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  recoveryPointName: string;
}
export const RecoveryPointsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    recoveryPointName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/recoveryPoints/{recoveryPointName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RecoveryPointsGetInput>;

// Output Schema
export interface RecoveryPointsGetOutput {
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
export const RecoveryPointsGetOutput =
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
  }) as unknown as Schema.Codec<RecoveryPointsGetOutput>;

// The operation
/**
 * Gets a recovery point.
 *
 * Get the details of specified recovery point.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 * @param recoveryPointName - The recovery point name.
 */
export const RecoveryPointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecoveryPointsGetInput,
  outputSchema: RecoveryPointsGetOutput,
}));
// Input Schema
export interface RecoveryPointsListByReplicationProtectedItemsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
}
export const RecoveryPointsListByReplicationProtectedItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/recoveryPoints",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RecoveryPointsListByReplicationProtectedItemsInput>;

// Output Schema
export interface RecoveryPointsListByReplicationProtectedItemsOutput {
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
export const RecoveryPointsListByReplicationProtectedItemsOutput =
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
  }) as unknown as Schema.Codec<RecoveryPointsListByReplicationProtectedItemsOutput>;

// The operation
/**
 * Gets the list of recovery points for a replication protected item.
 *
 * Lists the available recovery points for a replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const RecoveryPointsListByReplicationProtectedItems =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RecoveryPointsListByReplicationProtectedItemsInput,
    outputSchema: RecoveryPointsListByReplicationProtectedItemsOutput,
  }));
// Input Schema
export interface ReplicationAlertSettingsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  alertSettingName: string;
  properties?: {
    sendToOwners?: string;
    customEmailAddresses?: string[];
    locale?: string;
  };
}
export const ReplicationAlertSettingsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    alertSettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sendToOwners: Schema.optional(Schema.String),
        customEmailAddresses: Schema.optional(Schema.Array(Schema.String)),
        locale: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAlertSettings/{alertSettingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationAlertSettingsCreateInput>;

// Output Schema
export interface ReplicationAlertSettingsCreateOutput {
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
export const ReplicationAlertSettingsCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationAlertSettingsCreateOutput>;

// The operation
/**
 * Configures email notifications for this vault.
 *
 * Create or update an email notification(alert) configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param alertSettingName - The name of the email notification configuration.
 */
export const ReplicationAlertSettingsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationAlertSettingsCreateInput,
    outputSchema: ReplicationAlertSettingsCreateOutput,
  }));
// Input Schema
export interface ReplicationAlertSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  alertSettingName: string;
}
export const ReplicationAlertSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    alertSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAlertSettings/{alertSettingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationAlertSettingsGetInput>;

// Output Schema
export interface ReplicationAlertSettingsGetOutput {
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
export const ReplicationAlertSettingsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationAlertSettingsGetOutput>;

// The operation
/**
 * Gets an email notification(alert) configuration.
 *
 * Gets the details of the specified email notification(alert) configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param alertSettingName - The name of the email notification configuration.
 */
export const ReplicationAlertSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationAlertSettingsGetInput,
    outputSchema: ReplicationAlertSettingsGetOutput,
  }),
);
// Input Schema
export interface ReplicationAlertSettingsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationAlertSettingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAlertSettings",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationAlertSettingsListInput>;

// Output Schema
export interface ReplicationAlertSettingsListOutput {
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
export const ReplicationAlertSettingsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationAlertSettingsListOutput>;

// The operation
/**
 * Gets the list of configured email notification(alert) configurations.
 *
 * Gets the list of email notification(alert) configurations for the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 */
export const ReplicationAlertSettingsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationAlertSettingsListInput,
    outputSchema: ReplicationAlertSettingsListOutput,
  }));
// Input Schema
export interface ReplicationAppliancesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  $filter?: string;
}
export const ReplicationAppliancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAppliances",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationAppliancesListInput>;

// Output Schema
export interface ReplicationAppliancesListOutput {
  value: {
    properties?: { providerSpecificDetails?: { instanceType: string } };
  }[];
  nextLink?: string;
}
export const ReplicationAppliancesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            providerSpecificDetails: Schema.optional(
              Schema.Struct({
                instanceType: Schema.String,
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReplicationAppliancesListOutput>;

// The operation
/**
 * Gets the list of appliances.
 *
 * Gets the list of Azure Site Recovery appliances for the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param $filter - OData filter options.
 */
export const ReplicationAppliancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationAppliancesListInput,
    outputSchema: ReplicationAppliancesListOutput,
  }),
);
// Input Schema
export interface ReplicationEligibilityResultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
}
export const ReplicationEligibilityResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{virtualMachineName}/providers/Microsoft.RecoveryServices/replicationEligibilityResults/default",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationEligibilityResultsGetInput>;

// Output Schema
export interface ReplicationEligibilityResultsGetOutput {
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
export const ReplicationEligibilityResultsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationEligibilityResultsGetOutput>;

// The operation
/**
 * Gets the validation errors in case the VM is unsuitable for protection.
 *
 * Validates whether a given VM can be protected or not in which case returns list of errors.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - Virtual Machine name.
 */
export const ReplicationEligibilityResultsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationEligibilityResultsGetInput,
    outputSchema: ReplicationEligibilityResultsGetOutput,
  }));
// Input Schema
export interface ReplicationEligibilityResultsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
}
export const ReplicationEligibilityResultsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{virtualMachineName}/providers/Microsoft.RecoveryServices/replicationEligibilityResults",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationEligibilityResultsListInput>;

// Output Schema
export interface ReplicationEligibilityResultsListOutput {
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
export const ReplicationEligibilityResultsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationEligibilityResultsListOutput>;

// The operation
/**
 * Gets the validation errors in case the VM is unsuitable for protection.
 *
 * Validates whether a given VM can be protected or not in which case returns list of errors.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - Virtual Machine name.
 */
export const ReplicationEligibilityResultsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationEligibilityResultsListInput,
    outputSchema: ReplicationEligibilityResultsListOutput,
  }));
// Input Schema
export interface ReplicationEventsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  eventName: string;
}
export const ReplicationEventsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    eventName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationEvents/{eventName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationEventsGetInput>;

// Output Schema
export interface ReplicationEventsGetOutput {
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
export const ReplicationEventsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationEventsGetOutput>;

// The operation
/**
 * Get the details of an Azure Site recovery event.
 *
 * The operation to get the details of an Azure Site recovery event.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param eventName - The name of the Azure Site Recovery event.
 */
export const ReplicationEventsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationEventsGetInput,
    outputSchema: ReplicationEventsGetOutput,
  }),
);
// Input Schema
export interface ReplicationEventsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  $filter?: string;
}
export const ReplicationEventsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationEvents",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationEventsListInput>;

// Output Schema
export interface ReplicationEventsListOutput {
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
export const ReplicationEventsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationEventsListOutput>;

// The operation
/**
 * Gets the list of Azure Site Recovery events.
 *
 * Gets the list of Azure Site Recovery events for the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param $filter - OData filter options.
 */
export const ReplicationEventsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationEventsListInput,
    outputSchema: ReplicationEventsListOutput,
  }),
);
// Input Schema
export interface ReplicationFabricsCheckConsistencyInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationFabricsCheckConsistencyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/checkConsistency",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationFabricsCheckConsistencyInput>;

// Output Schema
export interface ReplicationFabricsCheckConsistencyOutput {
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
export const ReplicationFabricsCheckConsistencyOutput =
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
  }) as unknown as Schema.Codec<ReplicationFabricsCheckConsistencyOutput>;

// The operation
/**
 * Checks the consistency of the ASR fabric.
 *
 * The operation to perform a consistency check on the fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationFabricsCheckConsistency =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationFabricsCheckConsistencyInput,
    outputSchema: ReplicationFabricsCheckConsistencyOutput,
  }));
// Input Schema
export interface ReplicationFabricsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  properties?: { customDetails?: { instanceType: string } };
}
export const ReplicationFabricsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        customDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationFabricsCreateInput>;

// Output Schema
export interface ReplicationFabricsCreateOutput {
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
export const ReplicationFabricsCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationFabricsCreateOutput>;

// The operation
/**
 * Creates an Azure Site Recovery fabric.
 *
 * The operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationFabricsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationFabricsCreateInput,
    outputSchema: ReplicationFabricsCreateOutput,
  }),
);
// Input Schema
export interface ReplicationFabricsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationFabricsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/remove",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationFabricsDeleteInput>;

// Output Schema
export type ReplicationFabricsDeleteOutput = void;
export const ReplicationFabricsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationFabricsDeleteOutput>;

// The operation
/**
 * Deletes the site.
 *
 * The operation to delete or remove an Azure Site Recovery fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationFabricsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationFabricsDeleteInput,
    outputSchema: ReplicationFabricsDeleteOutput,
  }),
);
// Input Schema
export interface ReplicationFabricsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  $filter?: string;
}
export const ReplicationFabricsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationFabricsGetInput>;

// Output Schema
export interface ReplicationFabricsGetOutput {
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
export const ReplicationFabricsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationFabricsGetOutput>;

// The operation
/**
 * Gets the details of an ASR fabric.
 *
 * Gets the details of an Azure Site Recovery fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param $filter - OData filter options.
 */
export const ReplicationFabricsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationFabricsGetInput,
    outputSchema: ReplicationFabricsGetOutput,
  }),
);
// Input Schema
export interface ReplicationFabricsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationFabricsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationFabricsListInput>;

// Output Schema
export interface ReplicationFabricsListOutput {
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
export const ReplicationFabricsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationFabricsListOutput>;

// The operation
/**
 * Gets the list of ASR fabrics.
 *
 * Gets a list of the Azure Site Recovery fabrics in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 */
export const ReplicationFabricsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationFabricsListInput,
    outputSchema: ReplicationFabricsListOutput,
  }),
);
// Input Schema
export interface ReplicationFabricsMigrateToAadInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationFabricsMigrateToAadInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/migratetoaad",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationFabricsMigrateToAadInput>;

// Output Schema
export type ReplicationFabricsMigrateToAadOutput = void;
export const ReplicationFabricsMigrateToAadOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationFabricsMigrateToAadOutput>;

// The operation
/**
 * Migrates the site to AAD.
 *
 * The operation to migrate an Azure Site Recovery fabric to AAD.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationFabricsMigrateToAad =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationFabricsMigrateToAadInput,
    outputSchema: ReplicationFabricsMigrateToAadOutput,
  }));
// Input Schema
export interface ReplicationFabricsPurgeInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationFabricsPurgeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationFabricsPurgeInput>;

// Output Schema
export type ReplicationFabricsPurgeOutput = void;
export const ReplicationFabricsPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationFabricsPurgeOutput>;

// The operation
/**
 * Purges the site.
 *
 * The operation to purge(force delete) an Azure Site Recovery fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationFabricsPurge = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationFabricsPurgeInput,
    outputSchema: ReplicationFabricsPurgeOutput,
  }),
);
// Input Schema
export interface ReplicationFabricsReassociateGatewayInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  properties?: {
    containerName?: string;
    sourceProcessServerId?: string;
    targetProcessServerId?: string;
    vmsToMigrate?: string[];
    updateType?: string;
  };
}
export const ReplicationFabricsReassociateGatewayInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        containerName: Schema.optional(Schema.String),
        sourceProcessServerId: Schema.optional(Schema.String),
        targetProcessServerId: Schema.optional(Schema.String),
        vmsToMigrate: Schema.optional(Schema.Array(Schema.String)),
        updateType: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/reassociateGateway",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationFabricsReassociateGatewayInput>;

// Output Schema
export interface ReplicationFabricsReassociateGatewayOutput {
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
export const ReplicationFabricsReassociateGatewayOutput =
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
  }) as unknown as Schema.Codec<ReplicationFabricsReassociateGatewayOutput>;

// The operation
/**
 * Perform failover of the process server.
 *
 * The operation to move replications from a process server to another process server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationFabricsReassociateGateway =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationFabricsReassociateGatewayInput,
    outputSchema: ReplicationFabricsReassociateGatewayOutput,
  }));
// Input Schema
export interface ReplicationFabricsRemoveInfraInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationFabricsRemoveInfraInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/removeInfra",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationFabricsRemoveInfraInput>;

// Output Schema
export type ReplicationFabricsRemoveInfraOutput = void;
export const ReplicationFabricsRemoveInfraOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationFabricsRemoveInfraOutput>;

// The operation
/**
 * Removes the appliance's infrastructure under the fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 */
export const ReplicationFabricsRemoveInfra =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationFabricsRemoveInfraInput,
    outputSchema: ReplicationFabricsRemoveInfraOutput,
  }));
// Input Schema
export interface ReplicationFabricsRenewCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  properties?: { renewCertificateType?: string };
}
export const ReplicationFabricsRenewCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        renewCertificateType: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/renewCertificate",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationFabricsRenewCertificateInput>;

// Output Schema
export interface ReplicationFabricsRenewCertificateOutput {
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
export const ReplicationFabricsRenewCertificateOutput =
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
  }) as unknown as Schema.Codec<ReplicationFabricsRenewCertificateOutput>;

// The operation
/**
 * Renews certificate for the fabric.
 *
 * Renews the connection certificate for the ASR replication fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationFabricsRenewCertificate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationFabricsRenewCertificateInput,
    outputSchema: ReplicationFabricsRenewCertificateOutput,
  }));
// Input Schema
export interface ReplicationJobsCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  jobName: string;
}
export const ReplicationJobsCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}/cancel",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationJobsCancelInput>;

// Output Schema
export interface ReplicationJobsCancelOutput {
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
export const ReplicationJobsCancelOutput =
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
  }) as unknown as Schema.Codec<ReplicationJobsCancelOutput>;

// The operation
/**
 * Cancels the specified job.
 *
 * The operation to cancel an Azure Site Recovery job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param jobName - Job identifier.
 */
export const ReplicationJobsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationJobsCancelInput,
    outputSchema: ReplicationJobsCancelOutput,
  }),
);
// Input Schema
export interface ReplicationJobsExportInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  startTime?: string;
  endTime?: string;
  fabricId?: string;
  affectedObjectTypes?: string;
  jobStatus?: string;
  jobOutputType?: "Json" | "Xml" | "Excel";
  jobName?: string;
  timezoneOffset?: number;
}
export const ReplicationJobsExportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    fabricId: Schema.optional(Schema.String),
    affectedObjectTypes: Schema.optional(Schema.String),
    jobStatus: Schema.optional(Schema.String),
    jobOutputType: Schema.optional(Schema.Literals(["Json", "Xml", "Excel"])),
    jobName: Schema.optional(Schema.String),
    timezoneOffset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/export",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationJobsExportInput>;

// Output Schema
export interface ReplicationJobsExportOutput {
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
export const ReplicationJobsExportOutput =
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
  }) as unknown as Schema.Codec<ReplicationJobsExportOutput>;

// The operation
/**
 * Exports the details of the Azure Site Recovery jobs of the vault.
 *
 * The operation to export the details of the Azure Site Recovery jobs of the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationJobsExport = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationJobsExportInput,
    outputSchema: ReplicationJobsExportOutput,
  }),
);
// Input Schema
export interface ReplicationJobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  jobName: string;
}
export const ReplicationJobsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationJobsGetInput>;

// Output Schema
export interface ReplicationJobsGetOutput {
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
export const ReplicationJobsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationJobsGetOutput>;

// The operation
/**
 * Gets the job details.
 *
 * Get the details of an Azure Site Recovery job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param jobName - Job identifier.
 */
export const ReplicationJobsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReplicationJobsGetInput,
  outputSchema: ReplicationJobsGetOutput,
}));
// Input Schema
export interface ReplicationJobsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  $filter?: string;
}
export const ReplicationJobsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationJobsListInput>;

// Output Schema
export interface ReplicationJobsListOutput {
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
export const ReplicationJobsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationJobsListOutput>;

// The operation
/**
 * Gets the list of jobs.
 *
 * Gets the list of Azure Site Recovery Jobs for the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param $filter - OData filter options.
 */
export const ReplicationJobsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReplicationJobsListInput,
  outputSchema: ReplicationJobsListOutput,
}));
// Input Schema
export interface ReplicationJobsRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  jobName: string;
}
export const ReplicationJobsRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}/restart",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationJobsRestartInput>;

// Output Schema
export interface ReplicationJobsRestartOutput {
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
export const ReplicationJobsRestartOutput =
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
  }) as unknown as Schema.Codec<ReplicationJobsRestartOutput>;

// The operation
/**
 * Restarts the specified job.
 *
 * The operation to restart an Azure Site Recovery job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param jobName - Job identifier.
 */
export const ReplicationJobsRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationJobsRestartInput,
    outputSchema: ReplicationJobsRestartOutput,
  }),
);
// Input Schema
export interface ReplicationJobsResumeInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  jobName: string;
  properties?: { comments?: string };
}
export const ReplicationJobsResumeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        comments: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}/resume",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationJobsResumeInput>;

// Output Schema
export interface ReplicationJobsResumeOutput {
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
export const ReplicationJobsResumeOutput =
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
  }) as unknown as Schema.Codec<ReplicationJobsResumeOutput>;

// The operation
/**
 * Resumes the specified job.
 *
 * The operation to resume an Azure Site Recovery job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param jobName - Job identifier.
 */
export const ReplicationJobsResume = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationJobsResumeInput,
    outputSchema: ReplicationJobsResumeOutput,
  }),
);
// Input Schema
export interface ReplicationLogicalNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  logicalNetworkName: string;
}
export const ReplicationLogicalNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    logicalNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationLogicalNetworks/{logicalNetworkName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationLogicalNetworksGetInput>;

// Output Schema
export interface ReplicationLogicalNetworksGetOutput {
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
export const ReplicationLogicalNetworksGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationLogicalNetworksGetOutput>;

// The operation
/**
 * Gets a logical network with specified server id and logical network name.
 *
 * Gets the details of a logical network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param logicalNetworkName - Logical network name.
 */
export const ReplicationLogicalNetworksGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationLogicalNetworksGetInput,
    outputSchema: ReplicationLogicalNetworksGetOutput,
  }));
// Input Schema
export interface ReplicationLogicalNetworksListByReplicationFabricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationLogicalNetworksListByReplicationFabricsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationLogicalNetworks",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationLogicalNetworksListByReplicationFabricsInput>;

// Output Schema
export interface ReplicationLogicalNetworksListByReplicationFabricsOutput {
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
export const ReplicationLogicalNetworksListByReplicationFabricsOutput =
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
  }) as unknown as Schema.Codec<ReplicationLogicalNetworksListByReplicationFabricsOutput>;

// The operation
/**
 * Gets the list of logical networks under a fabric.
 *
 * Lists all the logical networks of the Azure Site Recovery fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationLogicalNetworksListByReplicationFabrics =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationLogicalNetworksListByReplicationFabricsInput,
    outputSchema: ReplicationLogicalNetworksListByReplicationFabricsOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
  properties: {
    policyId: string;
    providerSpecificDetails: { instanceType: string };
  };
}
export const ReplicationMigrationItemsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      policyId: Schema.String,
      providerSpecificDetails: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsCreateInput>;

// Output Schema
export interface ReplicationMigrationItemsCreateOutput {
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
export const ReplicationMigrationItemsCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsCreateOutput>;

// The operation
/**
 * Enables migration.
 *
 * The operation to create an ASR migration item (enable migration).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 */
export const ReplicationMigrationItemsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsCreateInput,
    outputSchema: ReplicationMigrationItemsCreateOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
  deleteOption?: string;
}
export const ReplicationMigrationItemsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
    deleteOption: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsDeleteInput>;

// Output Schema
export type ReplicationMigrationItemsDeleteOutput = void;
export const ReplicationMigrationItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationMigrationItemsDeleteOutput>;

// The operation
/**
 * Delete the migration item.
 *
 * The operation to delete an ASR migration item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 * @param deleteOption - The delete option.
 */
export const ReplicationMigrationItemsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsDeleteInput,
    outputSchema: ReplicationMigrationItemsDeleteOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
}
export const ReplicationMigrationItemsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsGetInput>;

// Output Schema
export interface ReplicationMigrationItemsGetOutput {
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
export const ReplicationMigrationItemsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsGetOutput>;

// The operation
/**
 * Gets the details of a migration item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 */
export const ReplicationMigrationItemsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsGetInput,
    outputSchema: ReplicationMigrationItemsGetOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  skipToken?: string;
  takeToken?: string;
  $filter?: string;
}
export const ReplicationMigrationItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    skipToken: Schema.optional(Schema.String),
    takeToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationMigrationItems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsListInput>;

// Output Schema
export interface ReplicationMigrationItemsListOutput {
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
export const ReplicationMigrationItemsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsListOutput>;

// The operation
/**
 * Gets the list of migration items in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param skipToken - The pagination token.
 * @param takeToken - The page size.
 * @param $filter - OData filter options.
 */
export const ReplicationMigrationItemsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsListInput,
    outputSchema: ReplicationMigrationItemsListOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsListByReplicationProtectionContainersInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  skipToken?: string;
  takeToken?: string;
  $filter?: string;
}
export const ReplicationMigrationItemsListByReplicationProtectionContainersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    skipToken: Schema.optional(Schema.String),
    takeToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsListByReplicationProtectionContainersInput>;

// Output Schema
export interface ReplicationMigrationItemsListByReplicationProtectionContainersOutput {
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
export const ReplicationMigrationItemsListByReplicationProtectionContainersOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsListByReplicationProtectionContainersOutput>;

// The operation
/**
 * Gets the list of migration items in the protection container.
 *
 * Gets the list of ASR migration items in the protection container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param skipToken - The pagination token.
 * @param takeToken - The page size.
 * @param $filter - OData filter options.
 */
export const ReplicationMigrationItemsListByReplicationProtectionContainers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplicationMigrationItemsListByReplicationProtectionContainersInput,
    outputSchema:
      ReplicationMigrationItemsListByReplicationProtectionContainersOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsMigrateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
  properties: { providerSpecificDetails: { instanceType: string } };
}
export const ReplicationMigrationItemsMigrateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      providerSpecificDetails: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/migrate",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsMigrateInput>;

// Output Schema
export interface ReplicationMigrationItemsMigrateOutput {
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
export const ReplicationMigrationItemsMigrateOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsMigrateOutput>;

// The operation
/**
 * Migrate item.
 *
 * The operation to initiate migration of the item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 */
export const ReplicationMigrationItemsMigrate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsMigrateInput,
    outputSchema: ReplicationMigrationItemsMigrateOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsPauseReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
  properties: { instanceType: string };
}
export const ReplicationMigrationItemsPauseReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      instanceType: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/pauseReplication",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsPauseReplicationInput>;

// Output Schema
export interface ReplicationMigrationItemsPauseReplicationOutput {
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
export const ReplicationMigrationItemsPauseReplicationOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsPauseReplicationOutput>;

// The operation
/**
 * Pause replication.
 *
 * The operation to initiate pause replication of the item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 */
export const ReplicationMigrationItemsPauseReplication =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsPauseReplicationInput,
    outputSchema: ReplicationMigrationItemsPauseReplicationOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsResumeReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
  properties: { providerSpecificDetails: { instanceType: string } };
}
export const ReplicationMigrationItemsResumeReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      providerSpecificDetails: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/resumeReplication",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsResumeReplicationInput>;

// Output Schema
export interface ReplicationMigrationItemsResumeReplicationOutput {
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
export const ReplicationMigrationItemsResumeReplicationOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsResumeReplicationOutput>;

// The operation
/**
 * Resume replication.
 *
 * The operation to initiate resume replication of the item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 */
export const ReplicationMigrationItemsResumeReplication =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsResumeReplicationInput,
    outputSchema: ReplicationMigrationItemsResumeReplicationOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsResyncInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
  properties: { providerSpecificDetails: { instanceType: string } };
}
export const ReplicationMigrationItemsResyncInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      providerSpecificDetails: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/resync",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsResyncInput>;

// Output Schema
export interface ReplicationMigrationItemsResyncOutput {
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
export const ReplicationMigrationItemsResyncOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsResyncOutput>;

// The operation
/**
 * Resynchronizes replication.
 *
 * The operation to resynchronize replication of an ASR migration item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 */
export const ReplicationMigrationItemsResync =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsResyncInput,
    outputSchema: ReplicationMigrationItemsResyncOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsTestMigrateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
  properties: { providerSpecificDetails: { instanceType: string } };
}
export const ReplicationMigrationItemsTestMigrateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      providerSpecificDetails: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/testMigrate",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsTestMigrateInput>;

// Output Schema
export interface ReplicationMigrationItemsTestMigrateOutput {
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
export const ReplicationMigrationItemsTestMigrateOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsTestMigrateOutput>;

// The operation
/**
 * Test migrate item.
 *
 * The operation to initiate test migration of the item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 */
export const ReplicationMigrationItemsTestMigrate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsTestMigrateInput,
    outputSchema: ReplicationMigrationItemsTestMigrateOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsTestMigrateCleanupInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
  properties: { comments?: string };
}
export const ReplicationMigrationItemsTestMigrateCleanupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      comments: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/testMigrateCleanup",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsTestMigrateCleanupInput>;

// Output Schema
export interface ReplicationMigrationItemsTestMigrateCleanupOutput {
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
export const ReplicationMigrationItemsTestMigrateCleanupOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsTestMigrateCleanupOutput>;

// The operation
/**
 * Test migrate cleanup.
 *
 * The operation to initiate test migrate cleanup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 */
export const ReplicationMigrationItemsTestMigrateCleanup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsTestMigrateCleanupInput,
    outputSchema: ReplicationMigrationItemsTestMigrateCleanupOutput,
  }));
// Input Schema
export interface ReplicationMigrationItemsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  migrationItemName: string;
  properties?: { providerSpecificDetails: { instanceType: string } };
}
export const ReplicationMigrationItemsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    migrationItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerSpecificDetails: Schema.Struct({
          instanceType: Schema.String,
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationMigrationItemsUpdateInput>;

// Output Schema
export interface ReplicationMigrationItemsUpdateOutput {
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
export const ReplicationMigrationItemsUpdateOutput =
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
  }) as unknown as Schema.Codec<ReplicationMigrationItemsUpdateOutput>;

// The operation
/**
 * Updates migration item.
 *
 * The operation to update the recovery settings of an ASR migration item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param migrationItemName - Migration item name.
 */
export const ReplicationMigrationItemsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationMigrationItemsUpdateInput,
    outputSchema: ReplicationMigrationItemsUpdateOutput,
  }));
// Input Schema
export interface ReplicationNetworkMappingsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  networkName: string;
  networkMappingName: string;
  properties: {
    recoveryFabricName?: string;
    recoveryNetworkId: string;
    fabricSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationNetworkMappingsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    networkName: Schema.String.pipe(T.PathParam()),
    networkMappingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      recoveryFabricName: Schema.optional(Schema.String),
      recoveryNetworkId: Schema.String,
      fabricSpecificDetails: Schema.optional(
        Schema.Struct({
          instanceType: Schema.String,
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationNetworkMappingsCreateInput>;

// Output Schema
export interface ReplicationNetworkMappingsCreateOutput {
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
export const ReplicationNetworkMappingsCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationNetworkMappingsCreateOutput>;

// The operation
/**
 * Creates network mapping.
 *
 * The operation to create an ASR network mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param networkName - Primary network name.
 * @param networkMappingName - Network mapping name.
 */
export const ReplicationNetworkMappingsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationNetworkMappingsCreateInput,
    outputSchema: ReplicationNetworkMappingsCreateOutput,
  }));
// Input Schema
export interface ReplicationNetworkMappingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  networkName: string;
  networkMappingName: string;
}
export const ReplicationNetworkMappingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    networkName: Schema.String.pipe(T.PathParam()),
    networkMappingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationNetworkMappingsDeleteInput>;

// Output Schema
export type ReplicationNetworkMappingsDeleteOutput = void;
export const ReplicationNetworkMappingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationNetworkMappingsDeleteOutput>;

// The operation
/**
 * Delete network mapping.
 *
 * The operation to delete a network mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param networkName - Primary network name.
 * @param networkMappingName - Network mapping name.
 */
export const ReplicationNetworkMappingsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationNetworkMappingsDeleteInput,
    outputSchema: ReplicationNetworkMappingsDeleteOutput,
  }));
// Input Schema
export interface ReplicationNetworkMappingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  networkName: string;
  networkMappingName: string;
}
export const ReplicationNetworkMappingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    networkName: Schema.String.pipe(T.PathParam()),
    networkMappingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationNetworkMappingsGetInput>;

// Output Schema
export interface ReplicationNetworkMappingsGetOutput {
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
export const ReplicationNetworkMappingsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationNetworkMappingsGetOutput>;

// The operation
/**
 * Gets network mapping by name.
 *
 * Gets the details of an ASR network mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param networkName - Primary network name.
 * @param networkMappingName - Network mapping name.
 */
export const ReplicationNetworkMappingsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationNetworkMappingsGetInput,
    outputSchema: ReplicationNetworkMappingsGetOutput,
  }));
// Input Schema
export interface ReplicationNetworkMappingsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationNetworkMappingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationNetworkMappings",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationNetworkMappingsListInput>;

// Output Schema
export interface ReplicationNetworkMappingsListOutput {
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
export const ReplicationNetworkMappingsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationNetworkMappingsListOutput>;

// The operation
/**
 * Gets all the network mappings under a vault.
 *
 * Lists all ASR network mappings in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationNetworkMappingsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationNetworkMappingsListInput,
    outputSchema: ReplicationNetworkMappingsListOutput,
  }));
// Input Schema
export interface ReplicationNetworkMappingsListByReplicationNetworksInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  networkName: string;
}
export const ReplicationNetworkMappingsListByReplicationNetworksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    networkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationNetworkMappingsListByReplicationNetworksInput>;

// Output Schema
export interface ReplicationNetworkMappingsListByReplicationNetworksOutput {
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
export const ReplicationNetworkMappingsListByReplicationNetworksOutput =
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
  }) as unknown as Schema.Codec<ReplicationNetworkMappingsListByReplicationNetworksOutput>;

// The operation
/**
 * Gets all the network mappings under a network.
 *
 * Lists all ASR network mappings for the specified network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param networkName - Primary network name.
 */
export const ReplicationNetworkMappingsListByReplicationNetworks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationNetworkMappingsListByReplicationNetworksInput,
    outputSchema: ReplicationNetworkMappingsListByReplicationNetworksOutput,
  }));
// Input Schema
export interface ReplicationNetworkMappingsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  networkName: string;
  networkMappingName: string;
  properties?: {
    recoveryFabricName?: string;
    recoveryNetworkId?: string;
    fabricSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationNetworkMappingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    networkName: Schema.String.pipe(T.PathParam()),
    networkMappingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        recoveryFabricName: Schema.optional(Schema.String),
        recoveryNetworkId: Schema.optional(Schema.String),
        fabricSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}/replicationNetworkMappings/{networkMappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationNetworkMappingsUpdateInput>;

// Output Schema
export interface ReplicationNetworkMappingsUpdateOutput {
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
export const ReplicationNetworkMappingsUpdateOutput =
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
  }) as unknown as Schema.Codec<ReplicationNetworkMappingsUpdateOutput>;

// The operation
/**
 * Updates network mapping.
 *
 * The operation to update an ASR network mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param networkName - Primary network name.
 * @param networkMappingName - Network mapping name.
 */
export const ReplicationNetworkMappingsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationNetworkMappingsUpdateInput,
    outputSchema: ReplicationNetworkMappingsUpdateOutput,
  }));
// Input Schema
export interface ReplicationNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  networkName: string;
}
export const ReplicationNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    networkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks/{networkName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationNetworksGetInput>;

// Output Schema
export interface ReplicationNetworksGetOutput {
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
export const ReplicationNetworksGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationNetworksGetOutput>;

// The operation
/**
 * Gets a network with specified server id and network name.
 *
 * Gets the details of a network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param networkName - Primary network name.
 */
export const ReplicationNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationNetworksGetInput,
    outputSchema: ReplicationNetworksGetOutput,
  }),
);
// Input Schema
export interface ReplicationNetworksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationNetworksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationNetworks",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationNetworksListInput>;

// Output Schema
export interface ReplicationNetworksListOutput {
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
export const ReplicationNetworksListOutput =
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
  }) as unknown as Schema.Codec<ReplicationNetworksListOutput>;

// The operation
/**
 * Gets the list of networks. View-only API.
 *
 * Lists the networks available in a vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationNetworksList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationNetworksListInput,
    outputSchema: ReplicationNetworksListOutput,
  }),
);
// Input Schema
export interface ReplicationNetworksListByReplicationFabricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationNetworksListByReplicationFabricsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationNetworks",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationNetworksListByReplicationFabricsInput>;

// Output Schema
export interface ReplicationNetworksListByReplicationFabricsOutput {
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
export const ReplicationNetworksListByReplicationFabricsOutput =
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
  }) as unknown as Schema.Codec<ReplicationNetworksListByReplicationFabricsOutput>;

// The operation
/**
 * Gets the list of networks under a fabric.
 *
 * Lists the networks available for a fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationNetworksListByReplicationFabrics =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationNetworksListByReplicationFabricsInput,
    outputSchema: ReplicationNetworksListByReplicationFabricsOutput,
  }));
// Input Schema
export interface ReplicationPoliciesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  policyName: string;
  properties?: { providerSpecificInput?: { instanceType: string } };
}
export const ReplicationPoliciesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerSpecificInput: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies/{policyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationPoliciesCreateInput>;

// Output Schema
export interface ReplicationPoliciesCreateOutput {
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
export const ReplicationPoliciesCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationPoliciesCreateOutput>;

// The operation
/**
 * Creates the policy.
 *
 * The operation to create a replication policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param policyName - Replication policy name.
 */
export const ReplicationPoliciesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationPoliciesCreateInput,
    outputSchema: ReplicationPoliciesCreateOutput,
  }),
);
// Input Schema
export interface ReplicationPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  policyName: string;
}
export const ReplicationPoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies/{policyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationPoliciesDeleteInput>;

// Output Schema
export type ReplicationPoliciesDeleteOutput = void;
export const ReplicationPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationPoliciesDeleteOutput>;

// The operation
/**
 * Delete the policy.
 *
 * The operation to delete a replication policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param policyName - Replication policy name.
 */
export const ReplicationPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationPoliciesDeleteInput,
    outputSchema: ReplicationPoliciesDeleteOutput,
  }),
);
// Input Schema
export interface ReplicationPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  policyName: string;
}
export const ReplicationPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies/{policyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationPoliciesGetInput>;

// Output Schema
export interface ReplicationPoliciesGetOutput {
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
export const ReplicationPoliciesGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationPoliciesGetOutput>;

// The operation
/**
 * Gets the requested policy.
 *
 * Gets the details of a replication policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param policyName - Replication policy name.
 */
export const ReplicationPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationPoliciesGetInput,
    outputSchema: ReplicationPoliciesGetOutput,
  }),
);
// Input Schema
export interface ReplicationPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationPoliciesListInput>;

// Output Schema
export interface ReplicationPoliciesListOutput {
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
export const ReplicationPoliciesListOutput =
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
  }) as unknown as Schema.Codec<ReplicationPoliciesListOutput>;

// The operation
/**
 * Gets the list of replication policies.
 *
 * Lists the replication policies for a vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 */
export const ReplicationPoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationPoliciesListInput,
    outputSchema: ReplicationPoliciesListOutput,
  }),
);
// Input Schema
export interface ReplicationPoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  policyName: string;
  properties?: { replicationProviderSettings?: { instanceType: string } };
}
export const ReplicationPoliciesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        replicationProviderSettings: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies/{policyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationPoliciesUpdateInput>;

// Output Schema
export interface ReplicationPoliciesUpdateOutput {
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
export const ReplicationPoliciesUpdateOutput =
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
  }) as unknown as Schema.Codec<ReplicationPoliciesUpdateOutput>;

// The operation
/**
 * Updates the policy.
 *
 * The operation to update a replication policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param policyName - Replication policy name.
 */
export const ReplicationPoliciesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationPoliciesUpdateInput,
    outputSchema: ReplicationPoliciesUpdateOutput,
  }),
);
// Input Schema
export interface ReplicationProtectableItemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  protectableItemName: string;
}
export const ReplicationProtectableItemsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    protectableItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectableItems/{protectableItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectableItemsGetInput>;

// Output Schema
export interface ReplicationProtectableItemsGetOutput {
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
export const ReplicationProtectableItemsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectableItemsGetOutput>;

// The operation
/**
 * Gets the details of a protectable item.
 *
 * The operation to get the details of a protectable item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param protectableItemName - Protectable item name.
 */
export const ReplicationProtectableItemsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectableItemsGetInput,
    outputSchema: ReplicationProtectableItemsGetOutput,
  }));
// Input Schema
export interface ReplicationProtectableItemsListByReplicationProtectionContainersInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  $filter?: string;
  $take?: string;
  $skipToken?: string;
}
export const ReplicationProtectableItemsListByReplicationProtectionContainersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $take: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectableItems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectableItemsListByReplicationProtectionContainersInput>;

// Output Schema
export interface ReplicationProtectableItemsListByReplicationProtectionContainersOutput {
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
export const ReplicationProtectableItemsListByReplicationProtectionContainersOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectableItemsListByReplicationProtectionContainersOutput>;

// The operation
/**
 * Gets the list of protectable items.
 *
 * Lists the protectable items in a protection container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param $filter - OData filter options.
 * @param $take - take OData query parameter.
 * @param $skipToken - skipToken OData query parameter.
 */
export const ReplicationProtectableItemsListByReplicationProtectionContainers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplicationProtectableItemsListByReplicationProtectionContainersInput,
    outputSchema:
      ReplicationProtectableItemsListByReplicationProtectionContainersOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsAddDisksInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties?: { providerSpecificDetails: { instanceType: string } };
}
export const ReplicationProtectedItemsAddDisksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerSpecificDetails: Schema.Struct({
          instanceType: Schema.String,
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/addDisks",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsAddDisksInput>;

// Output Schema
export interface ReplicationProtectedItemsAddDisksOutput {
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
export const ReplicationProtectedItemsAddDisksOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsAddDisksOutput>;

// The operation
/**
 * Add disk(s) for protection.
 *
 * Operation to add disks(s) to the replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsAddDisks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsAddDisksInput,
    outputSchema: ReplicationProtectedItemsAddDisksOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsApplyRecoveryPointInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties: {
    recoveryPointId?: string;
    providerSpecificDetails: { instanceType: string };
  };
}
export const ReplicationProtectedItemsApplyRecoveryPointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      recoveryPointId: Schema.optional(Schema.String),
      providerSpecificDetails: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/applyRecoveryPoint",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsApplyRecoveryPointInput>;

// Output Schema
export interface ReplicationProtectedItemsApplyRecoveryPointOutput {
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
export const ReplicationProtectedItemsApplyRecoveryPointOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsApplyRecoveryPointOutput>;

// The operation
/**
 * Change or apply recovery point.
 *
 * The operation to change the recovery point of a failed over replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsApplyRecoveryPoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsApplyRecoveryPointInput,
    outputSchema: ReplicationProtectedItemsApplyRecoveryPointOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties?: {
    policyId?: string;
    protectableItemId?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectedItemsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policyId: Schema.optional(Schema.String),
        protectableItemId: Schema.optional(Schema.String),
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsCreateInput>;

// Output Schema
export interface ReplicationProtectedItemsCreateOutput {
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
export const ReplicationProtectedItemsCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsCreateOutput>;

// The operation
/**
 * Enables protection.
 *
 * The operation to create an ASR replication protected item (Enable replication).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsCreateInput,
    outputSchema: ReplicationProtectedItemsCreateOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties: {
    disableProtectionReason?: "NotSpecified" | "MigrationComplete";
    replicationProviderInput?: { instanceType: string };
  };
}
export const ReplicationProtectedItemsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      disableProtectionReason: Schema.optional(
        Schema.Literals(["NotSpecified", "MigrationComplete"]),
      ),
      replicationProviderInput: Schema.optional(
        Schema.Struct({
          instanceType: Schema.String,
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/remove",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsDeleteInput>;

// Output Schema
export type ReplicationProtectedItemsDeleteOutput = void;
export const ReplicationProtectedItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationProtectedItemsDeleteOutput>;

// The operation
/**
 * Disables protection.
 *
 * The operation to disable replication on a replication protected item. This will also remove the item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsDeleteInput,
    outputSchema: ReplicationProtectedItemsDeleteOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsFailoverCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
}
export const ReplicationProtectedItemsFailoverCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/failoverCancel",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsFailoverCancelInput>;

// Output Schema
export interface ReplicationProtectedItemsFailoverCancelOutput {
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
export const ReplicationProtectedItemsFailoverCancelOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsFailoverCancelOutput>;

// The operation
/**
 * Execute cancel failover.
 *
 * Operation to cancel the failover of the replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsFailoverCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsFailoverCancelInput,
    outputSchema: ReplicationProtectedItemsFailoverCancelOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsFailoverCommitInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
}
export const ReplicationProtectedItemsFailoverCommitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/failoverCommit",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsFailoverCommitInput>;

// Output Schema
export interface ReplicationProtectedItemsFailoverCommitOutput {
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
export const ReplicationProtectedItemsFailoverCommitOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsFailoverCommitOutput>;

// The operation
/**
 * Execute commit failover.
 *
 * Operation to commit the failover of the replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsFailoverCommit =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsFailoverCommitInput,
    outputSchema: ReplicationProtectedItemsFailoverCommitOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
}
export const ReplicationProtectedItemsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsGetInput>;

// Output Schema
export interface ReplicationProtectedItemsGetOutput {
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
export const ReplicationProtectedItemsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsGetOutput>;

// The operation
/**
 * Gets the details of a Replication protected item.
 *
 * Gets the details of an ASR replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsGetInput,
    outputSchema: ReplicationProtectedItemsGetOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  skipToken?: string;
  $filter?: string;
}
export const ReplicationProtectedItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectedItems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsListInput>;

// Output Schema
export interface ReplicationProtectedItemsListOutput {
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
export const ReplicationProtectedItemsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsListOutput>;

// The operation
/**
 * Gets the list of replication protected items.
 *
 * Gets the list of ASR replication protected items in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param skipToken - The pagination token. Possible values: "FabricId" or "FabricId_CloudId" or null.
 * @param $filter - OData filter options.
 */
export const ReplicationProtectedItemsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsListInput,
    outputSchema: ReplicationProtectedItemsListOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsListByReplicationProtectionContainersInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
}
export const ReplicationProtectedItemsListByReplicationProtectionContainersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsListByReplicationProtectionContainersInput>;

// Output Schema
export interface ReplicationProtectedItemsListByReplicationProtectionContainersOutput {
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
export const ReplicationProtectedItemsListByReplicationProtectionContainersOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsListByReplicationProtectionContainersOutput>;

// The operation
/**
 * Gets the list of Replication protected items.
 *
 * Gets the list of ASR replication protected items in the protection container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 */
export const ReplicationProtectedItemsListByReplicationProtectionContainers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplicationProtectedItemsListByReplicationProtectionContainersInput,
    outputSchema:
      ReplicationProtectedItemsListByReplicationProtectionContainersOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsPlannedFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties?: {
    failoverDirection?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectedItemsPlannedFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        failoverDirection: Schema.optional(Schema.String),
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/plannedFailover",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsPlannedFailoverInput>;

// Output Schema
export interface ReplicationProtectedItemsPlannedFailoverOutput {
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
export const ReplicationProtectedItemsPlannedFailoverOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsPlannedFailoverOutput>;

// The operation
/**
 * Execute planned failover.
 *
 * Operation to initiate a planned failover of the replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsPlannedFailover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsPlannedFailoverInput,
    outputSchema: ReplicationProtectedItemsPlannedFailoverOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsPurgeInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
}
export const ReplicationProtectedItemsPurgeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsPurgeInput>;

// Output Schema
export type ReplicationProtectedItemsPurgeOutput = void;
export const ReplicationProtectedItemsPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationProtectedItemsPurgeOutput>;

// The operation
/**
 * Purges protection.
 *
 * The operation to delete or purge a replication protected item. This operation will force delete the replication protected item. Use the remove operation on replication protected item to perform a clean disable replication for the item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsPurge =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsPurgeInput,
    outputSchema: ReplicationProtectedItemsPurgeOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsReinstallMobilityServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties?: { runAsAccountId?: string };
}
export const ReplicationProtectedItemsReinstallMobilityServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        runAsAccountId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/reinstallMobilityService",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsReinstallMobilityServiceInput>;

// Output Schema
export interface ReplicationProtectedItemsReinstallMobilityServiceOutput {
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
export const ReplicationProtectedItemsReinstallMobilityServiceOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsReinstallMobilityServiceOutput>;

// The operation
/**
 * Reinstall the mobility service on a protected item.
 *
 * The operation to reinstall the installed mobility service software on a replication protected item to the latest available version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - The name of the protected item on which the agent is to be updated.
 */
export const ReplicationProtectedItemsReinstallMobilityService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsReinstallMobilityServiceInput,
    outputSchema: ReplicationProtectedItemsReinstallMobilityServiceOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsRemoveDisksInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties?: { providerSpecificDetails?: { instanceType: string } };
}
export const ReplicationProtectedItemsRemoveDisksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/removeDisks",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsRemoveDisksInput>;

// Output Schema
export interface ReplicationProtectedItemsRemoveDisksOutput {
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
export const ReplicationProtectedItemsRemoveDisksOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsRemoveDisksOutput>;

// The operation
/**
 * Removes disk(s).
 *
 * Operation to remove disk(s) from the replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsRemoveDisks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsRemoveDisksInput,
    outputSchema: ReplicationProtectedItemsRemoveDisksOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsRepairReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
}
export const ReplicationProtectedItemsRepairReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/repairReplication",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsRepairReplicationInput>;

// Output Schema
export interface ReplicationProtectedItemsRepairReplicationOutput {
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
export const ReplicationProtectedItemsRepairReplicationOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsRepairReplicationOutput>;

// The operation
/**
 * Resynchronize or repair replication.
 *
 * The operation to start resynchronize/repair replication for a replication protected item requiring resynchronization.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsRepairReplication =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsRepairReplicationInput,
    outputSchema: ReplicationProtectedItemsRepairReplicationOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsReprotectInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties?: {
    failoverDirection?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectedItemsReprotectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        failoverDirection: Schema.optional(Schema.String),
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/reProtect",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsReprotectInput>;

// Output Schema
export interface ReplicationProtectedItemsReprotectOutput {
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
export const ReplicationProtectedItemsReprotectOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsReprotectOutput>;

// The operation
/**
 * Execute Reverse Replication\\Reprotect.
 *
 * Operation to reprotect or reverse replicate a failed over replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsReprotect =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsReprotectInput,
    outputSchema: ReplicationProtectedItemsReprotectOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsResolveHealthErrorsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties?: { healthErrors?: { healthErrorId?: string }[] };
}
export const ReplicationProtectedItemsResolveHealthErrorsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        healthErrors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              healthErrorId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/resolveHealthErrors",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsResolveHealthErrorsInput>;

// Output Schema
export interface ReplicationProtectedItemsResolveHealthErrorsOutput {
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
export const ReplicationProtectedItemsResolveHealthErrorsOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsResolveHealthErrorsOutput>;

// The operation
/**
 * Resolve health errors.
 *
 * Operation to resolve health issues of the replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsResolveHealthErrors =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsResolveHealthErrorsInput,
    outputSchema: ReplicationProtectedItemsResolveHealthErrorsOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsSwitchProviderInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties?: {
    targetInstanceType?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectedItemsSwitchProviderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetInstanceType: Schema.optional(Schema.String),
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/switchProvider",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsSwitchProviderInput>;

// Output Schema
export interface ReplicationProtectedItemsSwitchProviderOutput {
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
export const ReplicationProtectedItemsSwitchProviderOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsSwitchProviderOutput>;

// The operation
/**
 * Execute switch provider.
 *
 * Operation to initiate a switch provider of the replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsSwitchProvider =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsSwitchProviderInput,
    outputSchema: ReplicationProtectedItemsSwitchProviderOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsTestFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties: {
    failoverDirection?: string;
    networkType?: string;
    networkId?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectedItemsTestFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      failoverDirection: Schema.optional(Schema.String),
      networkType: Schema.optional(Schema.String),
      networkId: Schema.optional(Schema.String),
      providerSpecificDetails: Schema.optional(
        Schema.Struct({
          instanceType: Schema.String,
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/testFailover",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsTestFailoverInput>;

// Output Schema
export interface ReplicationProtectedItemsTestFailoverOutput {
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
export const ReplicationProtectedItemsTestFailoverOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsTestFailoverOutput>;

// The operation
/**
 * Execute test failover.
 *
 * Operation to perform a test failover of the replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsTestFailover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsTestFailoverInput,
    outputSchema: ReplicationProtectedItemsTestFailoverOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsTestFailoverCleanupInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties: { comments?: string };
}
export const ReplicationProtectedItemsTestFailoverCleanupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      comments: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/testFailoverCleanup",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsTestFailoverCleanupInput>;

// Output Schema
export interface ReplicationProtectedItemsTestFailoverCleanupOutput {
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
export const ReplicationProtectedItemsTestFailoverCleanupOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsTestFailoverCleanupOutput>;

// The operation
/**
 * Execute test failover cleanup.
 *
 * Operation to clean up the test failover of a replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsTestFailoverCleanup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsTestFailoverCleanupInput,
    outputSchema: ReplicationProtectedItemsTestFailoverCleanupOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsUnplannedFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties: {
    failoverDirection?: string;
    sourceSiteOperations?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectedItemsUnplannedFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      failoverDirection: Schema.optional(Schema.String),
      sourceSiteOperations: Schema.optional(Schema.String),
      providerSpecificDetails: Schema.optional(
        Schema.Struct({
          instanceType: Schema.String,
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/unplannedFailover",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsUnplannedFailoverInput>;

// Output Schema
export interface ReplicationProtectedItemsUnplannedFailoverOutput {
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
export const ReplicationProtectedItemsUnplannedFailoverOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsUnplannedFailoverOutput>;

// The operation
/**
 * Execute unplanned failover.
 *
 * Operation to initiate a failover of the replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsUnplannedFailover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsUnplannedFailoverInput,
    outputSchema: ReplicationProtectedItemsUnplannedFailoverOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties?: {
    recoveryAzureVMName?: string;
    recoveryAzureVMSize?: string;
    selectedRecoveryAzureNetworkId?: string;
    selectedTfoAzureNetworkId?: string;
    selectedSourceNicId?: string;
    enableRdpOnTargetOption?: string;
    vmNics?: {
      nicId?: string;
      ipConfigs?: {
        ipConfigName?: string;
        isPrimary?: boolean;
        isSeletedForFailover?: boolean;
        recoverySubnetName?: string;
        recoveryStaticIPAddress?: string;
        recoveryPublicIPAddressId?: string;
        recoveryLBBackendAddressPoolIds?: string[];
        tfoSubnetName?: string;
        tfoStaticIPAddress?: string;
        tfoPublicIPAddressId?: string;
        tfoLBBackendAddressPoolIds?: string[];
      }[];
      selectionType?: string;
      recoveryNetworkSecurityGroupId?: string;
      enableAcceleratedNetworkingOnRecovery?: boolean;
      tfoNetworkSecurityGroupId?: string;
      enableAcceleratedNetworkingOnTfo?: boolean;
      recoveryNicName?: string;
      recoveryNicResourceGroupName?: string;
      reuseExistingNic?: boolean;
      tfoNicName?: string;
      tfoNicResourceGroupName?: string;
      tfoReuseExistingNic?: boolean;
      targetNicName?: string;
    }[];
    licenseType?: "NotSpecified" | "NoLicenseType" | "WindowsServer";
    recoveryAvailabilitySetId?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectedItemsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        recoveryAzureVMName: Schema.optional(Schema.String),
        recoveryAzureVMSize: Schema.optional(Schema.String),
        selectedRecoveryAzureNetworkId: Schema.optional(Schema.String),
        selectedTfoAzureNetworkId: Schema.optional(Schema.String),
        selectedSourceNicId: Schema.optional(Schema.String),
        enableRdpOnTargetOption: Schema.optional(Schema.String),
        vmNics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nicId: Schema.optional(Schema.String),
              ipConfigs: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipConfigName: Schema.optional(Schema.String),
                    isPrimary: Schema.optional(Schema.Boolean),
                    isSeletedForFailover: Schema.optional(Schema.Boolean),
                    recoverySubnetName: Schema.optional(Schema.String),
                    recoveryStaticIPAddress: Schema.optional(Schema.String),
                    recoveryPublicIPAddressId: Schema.optional(Schema.String),
                    recoveryLBBackendAddressPoolIds: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    tfoSubnetName: Schema.optional(Schema.String),
                    tfoStaticIPAddress: Schema.optional(Schema.String),
                    tfoPublicIPAddressId: Schema.optional(Schema.String),
                    tfoLBBackendAddressPoolIds: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                  }),
                ),
              ),
              selectionType: Schema.optional(Schema.String),
              recoveryNetworkSecurityGroupId: Schema.optional(Schema.String),
              enableAcceleratedNetworkingOnRecovery: Schema.optional(
                Schema.Boolean,
              ),
              tfoNetworkSecurityGroupId: Schema.optional(Schema.String),
              enableAcceleratedNetworkingOnTfo: Schema.optional(Schema.Boolean),
              recoveryNicName: Schema.optional(Schema.String),
              recoveryNicResourceGroupName: Schema.optional(Schema.String),
              reuseExistingNic: Schema.optional(Schema.Boolean),
              tfoNicName: Schema.optional(Schema.String),
              tfoNicResourceGroupName: Schema.optional(Schema.String),
              tfoReuseExistingNic: Schema.optional(Schema.Boolean),
              targetNicName: Schema.optional(Schema.String),
            }),
          ),
        ),
        licenseType: Schema.optional(
          Schema.Literals(["NotSpecified", "NoLicenseType", "WindowsServer"]),
        ),
        recoveryAvailabilitySetId: Schema.optional(Schema.String),
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsUpdateInput>;

// Output Schema
export interface ReplicationProtectedItemsUpdateOutput {
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
export const ReplicationProtectedItemsUpdateOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsUpdateOutput>;

// The operation
/**
 * Updates the replication protected item settings.
 *
 * The operation to update the recovery settings of an ASR replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsUpdateInput,
    outputSchema: ReplicationProtectedItemsUpdateOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsUpdateApplianceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties: {
    targetApplianceId: string;
    providerSpecificDetails: { instanceType: string };
  };
}
export const ReplicationProtectedItemsUpdateApplianceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      targetApplianceId: Schema.String,
      providerSpecificDetails: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/updateAppliance",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsUpdateApplianceInput>;

// Output Schema
export interface ReplicationProtectedItemsUpdateApplianceOutput {
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
export const ReplicationProtectedItemsUpdateApplianceOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsUpdateApplianceOutput>;

// The operation
/**
 * Updates appliance for replication protected Item.
 *
 * The operation to update appliance of an ASR replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsUpdateAppliance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsUpdateApplianceInput,
    outputSchema: ReplicationProtectedItemsUpdateApplianceOutput,
  }));
// Input Schema
export interface ReplicationProtectedItemsUpdateMobilityServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
  properties?: { runAsAccountId?: string };
}
export const ReplicationProtectedItemsUpdateMobilityServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        runAsAccountId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/updateMobilityService",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectedItemsUpdateMobilityServiceInput>;

// Output Schema
export interface ReplicationProtectedItemsUpdateMobilityServiceOutput {
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
export const ReplicationProtectedItemsUpdateMobilityServiceOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectedItemsUpdateMobilityServiceOutput>;

// The operation
/**
 * Update the mobility service on a protected item.
 *
 * The operation to update(push update) the installed mobility service software on a replication protected item to the latest available version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const ReplicationProtectedItemsUpdateMobilityService =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectedItemsUpdateMobilityServiceInput,
    outputSchema: ReplicationProtectedItemsUpdateMobilityServiceOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersApplyRecoveryPointInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
  properties: {
    clusterRecoveryPointId?: string;
    individualNodeRecoveryPoints?: string[];
    providerSpecificDetails: { instanceType: string };
  };
}
export const ReplicationProtectionClustersApplyRecoveryPointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      clusterRecoveryPointId: Schema.optional(Schema.String),
      individualNodeRecoveryPoints: Schema.optional(
        Schema.Array(Schema.String),
      ),
      providerSpecificDetails: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}/applyRecoveryPoint",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersApplyRecoveryPointInput>;

// Output Schema
export interface ReplicationProtectionClustersApplyRecoveryPointOutput {
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
export const ReplicationProtectionClustersApplyRecoveryPointOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersApplyRecoveryPointOutput>;

// The operation
/**
 * Execute the change recovery point operation for cluster.
 *
 * Operation to apply a new cluster recovery point on the Protection cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 */
export const ReplicationProtectionClustersApplyRecoveryPoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersApplyRecoveryPointInput,
    outputSchema: ReplicationProtectionClustersApplyRecoveryPointOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
  properties?: {
    protectionClusterType?: string;
    primaryFabricFriendlyName?: string;
    primaryFabricProvider?: string;
    recoveryFabricFriendlyName?: string;
    recoveryFabricId?: string;
    primaryProtectionContainerFriendlyName?: string;
    recoveryProtectionContainerFriendlyName?: string;
    protectionState?: string;
    protectionStateDescription?: string;
    activeLocation?: string;
    testFailoverState?: string;
    testFailoverStateDescription?: string;
    allowedOperations?: string[];
    replicationHealth?: string;
    healthErrors?: {
      innerHealthErrors?: {
        errorSource?: string;
        errorType?: string;
        errorLevel?: string;
        errorCategory?: string;
        errorCode?: string;
        summaryMessage?: string;
        errorMessage?: string;
        possibleCauses?: string;
        recommendedAction?: string;
        creationTimeUtc?: string;
        recoveryProviderErrorMessage?: string;
        entityId?: string;
        errorId?: string;
        customerResolvability?: "Allowed" | "NotAllowed";
      }[];
      errorSource?: string;
      errorType?: string;
      errorLevel?: string;
      errorCategory?: string;
      errorCode?: string;
      summaryMessage?: string;
      errorMessage?: string;
      possibleCauses?: string;
      recommendedAction?: string;
      creationTimeUtc?: string;
      recoveryProviderErrorMessage?: string;
      entityId?: string;
      errorId?: string;
      customerResolvability?: "Allowed" | "NotAllowed";
    }[];
    lastSuccessfulFailoverTime?: string;
    lastSuccessfulTestFailoverTime?: string;
    policyFriendlyName?: string;
    currentScenario?: {
      scenarioName?: string;
      jobId?: string;
      startTime?: string;
    };
    recoveryContainerId?: string;
    agentClusterId?: string;
    clusterFqdn?: string;
    clusterNodeFqdns?: string[];
    clusterProtectedItemIds?: string[];
    provisioningState?: string;
    areAllClusterNodesRegistered?: boolean;
    clusterRegisteredNodes?: {
      clusterNodeFqdn?: string;
      machineId?: string;
      biosId?: string;
      isSharedDiskVirtualNode?: boolean;
    }[];
    providerSpecificDetails?: { instanceType: string };
    sharedDiskProperties?: {
      protectionState?: string;
      testFailoverState?: string;
      activeLocation?: string;
      allowedOperations?: string[];
      replicationHealth?: string;
      healthErrors?: {
        innerHealthErrors?: {
          errorSource?: string;
          errorType?: string;
          errorLevel?: string;
          errorCategory?: string;
          errorCode?: string;
          summaryMessage?: string;
          errorMessage?: string;
          possibleCauses?: string;
          recommendedAction?: string;
          creationTimeUtc?: string;
          recoveryProviderErrorMessage?: string;
          entityId?: string;
          errorId?: string;
          customerResolvability?: "Allowed" | "NotAllowed";
        }[];
        errorSource?: string;
        errorType?: string;
        errorLevel?: string;
        errorCategory?: string;
        errorCode?: string;
        summaryMessage?: string;
        errorMessage?: string;
        possibleCauses?: string;
        recommendedAction?: string;
        creationTimeUtc?: string;
        recoveryProviderErrorMessage?: string;
        entityId?: string;
        errorId?: string;
        customerResolvability?: "Allowed" | "NotAllowed";
      }[];
      currentScenario?: {
        scenarioName?: string;
        jobId?: string;
        startTime?: string;
      };
      sharedDiskProviderSpecificDetails?: { instanceType: string };
    };
    policyId?: string;
  };
}
export const ReplicationProtectionClustersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        protectionClusterType: Schema.optional(Schema.String),
        primaryFabricFriendlyName: Schema.optional(Schema.String),
        primaryFabricProvider: Schema.optional(Schema.String),
        recoveryFabricFriendlyName: Schema.optional(Schema.String),
        recoveryFabricId: Schema.optional(Schema.String),
        primaryProtectionContainerFriendlyName: Schema.optional(Schema.String),
        recoveryProtectionContainerFriendlyName: Schema.optional(Schema.String),
        protectionState: Schema.optional(Schema.String),
        protectionStateDescription: Schema.optional(Schema.String),
        activeLocation: Schema.optional(Schema.String),
        testFailoverState: Schema.optional(Schema.String),
        testFailoverStateDescription: Schema.optional(Schema.String),
        allowedOperations: Schema.optional(Schema.Array(Schema.String)),
        replicationHealth: Schema.optional(Schema.String),
        healthErrors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              innerHealthErrors: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    errorSource: Schema.optional(Schema.String),
                    errorType: Schema.optional(Schema.String),
                    errorLevel: Schema.optional(Schema.String),
                    errorCategory: Schema.optional(Schema.String),
                    errorCode: Schema.optional(Schema.String),
                    summaryMessage: Schema.optional(Schema.String),
                    errorMessage: Schema.optional(Schema.String),
                    possibleCauses: Schema.optional(Schema.String),
                    recommendedAction: Schema.optional(Schema.String),
                    creationTimeUtc: Schema.optional(Schema.String),
                    recoveryProviderErrorMessage: Schema.optional(
                      Schema.String,
                    ),
                    entityId: Schema.optional(Schema.String),
                    errorId: Schema.optional(Schema.String),
                    customerResolvability: Schema.optional(
                      Schema.Literals(["Allowed", "NotAllowed"]),
                    ),
                  }),
                ),
              ),
              errorSource: Schema.optional(Schema.String),
              errorType: Schema.optional(Schema.String),
              errorLevel: Schema.optional(Schema.String),
              errorCategory: Schema.optional(Schema.String),
              errorCode: Schema.optional(Schema.String),
              summaryMessage: Schema.optional(Schema.String),
              errorMessage: Schema.optional(Schema.String),
              possibleCauses: Schema.optional(Schema.String),
              recommendedAction: Schema.optional(Schema.String),
              creationTimeUtc: Schema.optional(Schema.String),
              recoveryProviderErrorMessage: Schema.optional(Schema.String),
              entityId: Schema.optional(Schema.String),
              errorId: Schema.optional(Schema.String),
              customerResolvability: Schema.optional(
                Schema.Literals(["Allowed", "NotAllowed"]),
              ),
            }),
          ),
        ),
        lastSuccessfulFailoverTime: Schema.optional(Schema.String),
        lastSuccessfulTestFailoverTime: Schema.optional(Schema.String),
        policyFriendlyName: Schema.optional(Schema.String),
        currentScenario: Schema.optional(
          Schema.Struct({
            scenarioName: Schema.optional(Schema.String),
            jobId: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
          }),
        ),
        recoveryContainerId: Schema.optional(Schema.String),
        agentClusterId: Schema.optional(Schema.String),
        clusterFqdn: Schema.optional(Schema.String),
        clusterNodeFqdns: Schema.optional(Schema.Array(Schema.String)),
        clusterProtectedItemIds: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(Schema.String),
        areAllClusterNodesRegistered: Schema.optional(Schema.Boolean),
        clusterRegisteredNodes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              clusterNodeFqdn: Schema.optional(Schema.String),
              machineId: Schema.optional(Schema.String),
              biosId: Schema.optional(Schema.String),
              isSharedDiskVirtualNode: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
        sharedDiskProperties: Schema.optional(
          Schema.Struct({
            protectionState: Schema.optional(Schema.String),
            testFailoverState: Schema.optional(Schema.String),
            activeLocation: Schema.optional(Schema.String),
            allowedOperations: Schema.optional(Schema.Array(Schema.String)),
            replicationHealth: Schema.optional(Schema.String),
            healthErrors: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  innerHealthErrors: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        errorSource: Schema.optional(Schema.String),
                        errorType: Schema.optional(Schema.String),
                        errorLevel: Schema.optional(Schema.String),
                        errorCategory: Schema.optional(Schema.String),
                        errorCode: Schema.optional(Schema.String),
                        summaryMessage: Schema.optional(Schema.String),
                        errorMessage: Schema.optional(Schema.String),
                        possibleCauses: Schema.optional(Schema.String),
                        recommendedAction: Schema.optional(Schema.String),
                        creationTimeUtc: Schema.optional(Schema.String),
                        recoveryProviderErrorMessage: Schema.optional(
                          Schema.String,
                        ),
                        entityId: Schema.optional(Schema.String),
                        errorId: Schema.optional(Schema.String),
                        customerResolvability: Schema.optional(
                          Schema.Literals(["Allowed", "NotAllowed"]),
                        ),
                      }),
                    ),
                  ),
                  errorSource: Schema.optional(Schema.String),
                  errorType: Schema.optional(Schema.String),
                  errorLevel: Schema.optional(Schema.String),
                  errorCategory: Schema.optional(Schema.String),
                  errorCode: Schema.optional(Schema.String),
                  summaryMessage: Schema.optional(Schema.String),
                  errorMessage: Schema.optional(Schema.String),
                  possibleCauses: Schema.optional(Schema.String),
                  recommendedAction: Schema.optional(Schema.String),
                  creationTimeUtc: Schema.optional(Schema.String),
                  recoveryProviderErrorMessage: Schema.optional(Schema.String),
                  entityId: Schema.optional(Schema.String),
                  errorId: Schema.optional(Schema.String),
                  customerResolvability: Schema.optional(
                    Schema.Literals(["Allowed", "NotAllowed"]),
                  ),
                }),
              ),
            ),
            currentScenario: Schema.optional(
              Schema.Struct({
                scenarioName: Schema.optional(Schema.String),
                jobId: Schema.optional(Schema.String),
                startTime: Schema.optional(Schema.String),
              }),
            ),
            sharedDiskProviderSpecificDetails: Schema.optional(
              Schema.Struct({
                instanceType: Schema.String,
              }),
            ),
          }),
        ),
        policyId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersCreateInput>;

// Output Schema
export interface ReplicationProtectionClustersCreateOutput {
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
export const ReplicationProtectionClustersCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersCreateOutput>;

// The operation
/**
 * Create Replication protection Cluster.
 *
 * The operation to create an ASR replication protection cluster item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 */
export const ReplicationProtectionClustersCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersCreateInput,
    outputSchema: ReplicationProtectionClustersCreateOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersFailoverCommitInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
}
export const ReplicationProtectionClustersFailoverCommitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}/failoverCommit",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersFailoverCommitInput>;

// Output Schema
export interface ReplicationProtectionClustersFailoverCommitOutput {
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
export const ReplicationProtectionClustersFailoverCommitOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersFailoverCommitOutput>;

// The operation
/**
 * Execute commit failover for cluster.
 *
 * Operation to initiate commit failover of the replication protection cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 */
export const ReplicationProtectionClustersFailoverCommit =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersFailoverCommitInput,
    outputSchema: ReplicationProtectionClustersFailoverCommitOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
}
export const ReplicationProtectionClustersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersGetInput>;

// Output Schema
export interface ReplicationProtectionClustersGetOutput {
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
export const ReplicationProtectionClustersGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersGetOutput>;

// The operation
/**
 * Gets the details of a Replication protection cluster.
 *
 * Gets the details of an ASR replication protection cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 */
export const ReplicationProtectionClustersGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersGetInput,
    outputSchema: ReplicationProtectionClustersGetOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersGetOperationResultsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
  jobId: string;
}
export const ReplicationProtectionClustersGetOperationResultsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
    jobId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}/operationResults/{jobId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersGetOperationResultsInput>;

// Output Schema
export interface ReplicationProtectionClustersGetOperationResultsOutput {
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
export const ReplicationProtectionClustersGetOperationResultsOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersGetOperationResultsOutput>;

// The operation
/**
 * Tracks the Replication protection cluster async operation.
 *
 * Track the results of an asynchronous operation on the replication protection cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 * @param jobId - job id to track.
 */
export const ReplicationProtectionClustersGetOperationResults =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersGetOperationResultsInput,
    outputSchema: ReplicationProtectionClustersGetOperationResultsOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  skipToken?: string;
  $filter?: string;
}
export const ReplicationProtectionClustersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionClusters",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersListInput>;

// Output Schema
export interface ReplicationProtectionClustersListOutput {
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
export const ReplicationProtectionClustersListOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersListOutput>;

// The operation
/**
 * Gets the list of Replication protection clusters in vault.
 *
 * Gets the list of ASR replication protected clusters in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param skipToken - The pagination token. Possible values: "FabricId" or "FabricId_CloudId" or null.
 * @param $filter - OData filter options.
 */
export const ReplicationProtectionClustersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersListInput,
    outputSchema: ReplicationProtectionClustersListOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersListByReplicationProtectionContainersInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
}
export const ReplicationProtectionClustersListByReplicationProtectionContainersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersListByReplicationProtectionContainersInput>;

// Output Schema
export interface ReplicationProtectionClustersListByReplicationProtectionContainersOutput {
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
export const ReplicationProtectionClustersListByReplicationProtectionContainersOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersListByReplicationProtectionContainersOutput>;

// The operation
/**
 * Gets the list of Replication protection clusters in fabric, container.
 *
 * Gets the list of ASR replication protected clusters in the protection container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 */
export const ReplicationProtectionClustersListByReplicationProtectionContainers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplicationProtectionClustersListByReplicationProtectionContainersInput,
    outputSchema:
      ReplicationProtectionClustersListByReplicationProtectionContainersOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersPurgeInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
}
export const ReplicationProtectionClustersPurgeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersPurgeInput>;

// Output Schema
export type ReplicationProtectionClustersPurgeOutput = void;
export const ReplicationProtectionClustersPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationProtectionClustersPurgeOutput>;

// The operation
/**
 * Purge the replication protection cluster.
 *
 * The operation to purge the replication protection cluster. This operation will force delete the replication protection cluster. Use the remove operation on replication protection cluster to perform a clean disable replication protection cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 */
export const ReplicationProtectionClustersPurge =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersPurgeInput,
    outputSchema: ReplicationProtectionClustersPurgeOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersRepairReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
}
export const ReplicationProtectionClustersRepairReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}/repairReplication",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersRepairReplicationInput>;

// Output Schema
export interface ReplicationProtectionClustersRepairReplicationOutput {
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
export const ReplicationProtectionClustersRepairReplicationOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersRepairReplicationOutput>;

// The operation
/**
 * Resynchronize or repair replication of protection cluster.
 *
 * The operation to repair replication protection cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 */
export const ReplicationProtectionClustersRepairReplication =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersRepairReplicationInput,
    outputSchema: ReplicationProtectionClustersRepairReplicationOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersTestFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
  properties: {
    failoverDirection?: "PrimaryToRecovery" | "RecoveryToPrimary";
    networkType?: string;
    networkId?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectionClustersTestFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      failoverDirection: Schema.optional(
        Schema.Literals(["PrimaryToRecovery", "RecoveryToPrimary"]),
      ),
      networkType: Schema.optional(Schema.String),
      networkId: Schema.optional(Schema.String),
      providerSpecificDetails: Schema.optional(
        Schema.Struct({
          instanceType: Schema.String,
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}/testFailover",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersTestFailoverInput>;

// Output Schema
export interface ReplicationProtectionClustersTestFailoverOutput {
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
export const ReplicationProtectionClustersTestFailoverOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersTestFailoverOutput>;

// The operation
/**
 * Execute test failover for cluster.
 *
 * Operation to initiate a failover of the replication protection cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 */
export const ReplicationProtectionClustersTestFailover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersTestFailoverInput,
    outputSchema: ReplicationProtectionClustersTestFailoverOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersTestFailoverCleanupInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
  properties: { comments?: string };
}
export const ReplicationProtectionClustersTestFailoverCleanupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      comments: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}/testFailoverCleanup",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersTestFailoverCleanupInput>;

// Output Schema
export interface ReplicationProtectionClustersTestFailoverCleanupOutput {
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
export const ReplicationProtectionClustersTestFailoverCleanupOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersTestFailoverCleanupOutput>;

// The operation
/**
 * Execute test failover cleanup for cluster.
 *
 * Operation to clean up the test failover of a replication protected cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 */
export const ReplicationProtectionClustersTestFailoverCleanup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersTestFailoverCleanupInput,
    outputSchema: ReplicationProtectionClustersTestFailoverCleanupOutput,
  }));
// Input Schema
export interface ReplicationProtectionClustersUnplannedFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicationProtectionClusterName: string;
  properties: {
    failoverDirection?: string;
    sourceSiteOperations?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectionClustersUnplannedFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicationProtectionClusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      failoverDirection: Schema.optional(Schema.String),
      sourceSiteOperations: Schema.optional(Schema.String),
      providerSpecificDetails: Schema.optional(
        Schema.Struct({
          instanceType: Schema.String,
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionClusters/{replicationProtectionClusterName}/unplannedFailover",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionClustersUnplannedFailoverInput>;

// Output Schema
export interface ReplicationProtectionClustersUnplannedFailoverOutput {
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
export const ReplicationProtectionClustersUnplannedFailoverOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionClustersUnplannedFailoverOutput>;

// The operation
/**
 * Execute unplanned cluster failover.
 *
 * Operation to initiate a failover of the replication protection cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicationProtectionClusterName - Replication protection cluster name.
 */
export const ReplicationProtectionClustersUnplannedFailover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionClustersUnplannedFailoverInput,
    outputSchema: ReplicationProtectionClustersUnplannedFailoverOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainerMappingsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  mappingName: string;
  properties?: {
    targetProtectionContainerId?: string;
    policyId?: string;
    providerSpecificInput?: { instanceType: string };
  };
}
export const ReplicationProtectionContainerMappingsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    mappingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetProtectionContainerId: Schema.optional(Schema.String),
        policyId: Schema.optional(Schema.String),
        providerSpecificInput: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsCreateInput>;

// Output Schema
export interface ReplicationProtectionContainerMappingsCreateOutput {
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
export const ReplicationProtectionContainerMappingsCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsCreateOutput>;

// The operation
/**
 * Create protection container mapping.
 *
 * The operation to create a protection container mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param mappingName - Protection Container mapping name.
 */
export const ReplicationProtectionContainerMappingsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainerMappingsCreateInput,
    outputSchema: ReplicationProtectionContainerMappingsCreateOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainerMappingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  mappingName: string;
  properties?: { providerSpecificInput?: { instanceType?: string } };
}
export const ReplicationProtectionContainerMappingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    mappingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerSpecificInput: Schema.optional(
          Schema.Struct({
            instanceType: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}/remove",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsDeleteInput>;

// Output Schema
export type ReplicationProtectionContainerMappingsDeleteOutput = void;
export const ReplicationProtectionContainerMappingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationProtectionContainerMappingsDeleteOutput>;

// The operation
/**
 * Remove protection container mapping.
 *
 * The operation to delete or remove a protection container mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param mappingName - Protection Container mapping name.
 */
export const ReplicationProtectionContainerMappingsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainerMappingsDeleteInput,
    outputSchema: ReplicationProtectionContainerMappingsDeleteOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainerMappingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  mappingName: string;
}
export const ReplicationProtectionContainerMappingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    mappingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsGetInput>;

// Output Schema
export interface ReplicationProtectionContainerMappingsGetOutput {
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
export const ReplicationProtectionContainerMappingsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsGetOutput>;

// The operation
/**
 * Gets a protection container mapping.
 *
 * Gets the details of a protection container mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param mappingName - Protection Container mapping name.
 */
export const ReplicationProtectionContainerMappingsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainerMappingsGetInput,
    outputSchema: ReplicationProtectionContainerMappingsGetOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainerMappingsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationProtectionContainerMappingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionContainerMappings",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsListInput>;

// Output Schema
export interface ReplicationProtectionContainerMappingsListOutput {
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
export const ReplicationProtectionContainerMappingsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsListOutput>;

// The operation
/**
 * Gets the list of all protection container mappings in a vault.
 *
 * Lists the protection container mappings in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationProtectionContainerMappingsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainerMappingsListInput,
    outputSchema: ReplicationProtectionContainerMappingsListOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainerMappingsListByReplicationProtectionContainersInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
}
export const ReplicationProtectionContainerMappingsListByReplicationProtectionContainersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsListByReplicationProtectionContainersInput>;

// Output Schema
export interface ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOutput {
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
export const ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOutput>;

// The operation
/**
 * Gets the list of protection container mappings for a protection container.
 *
 * Lists the protection container mappings for a protection container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 */
export const ReplicationProtectionContainerMappingsListByReplicationProtectionContainers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplicationProtectionContainerMappingsListByReplicationProtectionContainersInput,
    outputSchema:
      ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainerMappingsPurgeInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  mappingName: string;
}
export const ReplicationProtectionContainerMappingsPurgeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    mappingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsPurgeInput>;

// Output Schema
export type ReplicationProtectionContainerMappingsPurgeOutput = void;
export const ReplicationProtectionContainerMappingsPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationProtectionContainerMappingsPurgeOutput>;

// The operation
/**
 * Purge protection container mapping.
 *
 * The operation to purge(force delete) a protection container mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param mappingName - Protection Container mapping name.
 */
export const ReplicationProtectionContainerMappingsPurge =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainerMappingsPurgeInput,
    outputSchema: ReplicationProtectionContainerMappingsPurgeOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainerMappingsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  mappingName: string;
  properties?: { providerSpecificInput?: { instanceType: string } };
}
export const ReplicationProtectionContainerMappingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    mappingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerSpecificInput: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsUpdateInput>;

// Output Schema
export interface ReplicationProtectionContainerMappingsUpdateOutput {
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
export const ReplicationProtectionContainerMappingsUpdateOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainerMappingsUpdateOutput>;

// The operation
/**
 * Update protection container mapping.
 *
 * The operation to update protection container mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param mappingName - Protection Container mapping name.
 */
export const ReplicationProtectionContainerMappingsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainerMappingsUpdateInput,
    outputSchema: ReplicationProtectionContainerMappingsUpdateOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  properties?: { providerSpecificInput?: { instanceType: string }[] };
}
export const ReplicationProtectionContainersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerSpecificInput: Schema.optional(
          Schema.Array(
            Schema.Struct({
              instanceType: Schema.String,
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainersCreateInput>;

// Output Schema
export interface ReplicationProtectionContainersCreateOutput {
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
export const ReplicationProtectionContainersCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainersCreateOutput>;

// The operation
/**
 * Create a protection container.
 *
 * Operation to create a protection container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 */
export const ReplicationProtectionContainersCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainersCreateInput,
    outputSchema: ReplicationProtectionContainersCreateOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
}
export const ReplicationProtectionContainersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/remove",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainersDeleteInput>;

// Output Schema
export type ReplicationProtectionContainersDeleteOutput = void;
export const ReplicationProtectionContainersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationProtectionContainersDeleteOutput>;

// The operation
/**
 * Removes a protection container.
 *
 * Operation to remove a protection container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 */
export const ReplicationProtectionContainersDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainersDeleteInput,
    outputSchema: ReplicationProtectionContainersDeleteOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainersDiscoverProtectableItemInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  properties?: { friendlyName?: string; ipAddress?: string; osType?: string };
}
export const ReplicationProtectionContainersDiscoverProtectableItemInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        friendlyName: Schema.optional(Schema.String),
        ipAddress: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/discoverProtectableItem",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainersDiscoverProtectableItemInput>;

// Output Schema
export interface ReplicationProtectionContainersDiscoverProtectableItemOutput {
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
export const ReplicationProtectionContainersDiscoverProtectableItemOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainersDiscoverProtectableItemOutput>;

// The operation
/**
 * Adds a protectable item to the replication protection container.
 *
 * The operation to a add a protectable item to a protection container(Add physical server).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 */
export const ReplicationProtectionContainersDiscoverProtectableItem =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainersDiscoverProtectableItemInput,
    outputSchema: ReplicationProtectionContainersDiscoverProtectableItemOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
}
export const ReplicationProtectionContainersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainersGetInput>;

// Output Schema
export interface ReplicationProtectionContainersGetOutput {
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
export const ReplicationProtectionContainersGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainersGetOutput>;

// The operation
/**
 * Gets the protection container details.
 *
 * Gets the details of a protection container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 */
export const ReplicationProtectionContainersGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainersGetInput,
    outputSchema: ReplicationProtectionContainersGetOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationProtectionContainersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionContainers",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainersListInput>;

// Output Schema
export interface ReplicationProtectionContainersListOutput {
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
export const ReplicationProtectionContainersListOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainersListOutput>;

// The operation
/**
 * Gets the list of all protection containers in a vault.
 *
 * Lists the protection containers in a vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationProtectionContainersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainersListInput,
    outputSchema: ReplicationProtectionContainersListOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainersListByReplicationFabricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationProtectionContainersListByReplicationFabricsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainersListByReplicationFabricsInput>;

// Output Schema
export interface ReplicationProtectionContainersListByReplicationFabricsOutput {
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
export const ReplicationProtectionContainersListByReplicationFabricsOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainersListByReplicationFabricsOutput>;

// The operation
/**
 * Gets the list of protection container for a fabric.
 *
 * Lists the protection containers in the specified fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationProtectionContainersListByReplicationFabrics =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainersListByReplicationFabricsInput,
    outputSchema: ReplicationProtectionContainersListByReplicationFabricsOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainersSwitchClusterProtectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  properties?: {
    replicationProtectionClusterName?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectionContainersSwitchClusterProtectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        replicationProtectionClusterName: Schema.optional(Schema.String),
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/switchClusterProtection",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainersSwitchClusterProtectionInput>;

// Output Schema
export interface ReplicationProtectionContainersSwitchClusterProtectionOutput {
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
export const ReplicationProtectionContainersSwitchClusterProtectionOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainersSwitchClusterProtectionOutput>;

// The operation
/**
 * Switches protection from one container to another.
 *
 * Operation to switch protection from one container to another.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 */
export const ReplicationProtectionContainersSwitchClusterProtection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainersSwitchClusterProtectionInput,
    outputSchema: ReplicationProtectionContainersSwitchClusterProtectionOutput,
  }));
// Input Schema
export interface ReplicationProtectionContainersSwitchProtectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  properties?: {
    replicationProtectedItemName?: string;
    providerSpecificDetails?: { instanceType: string };
  };
}
export const ReplicationProtectionContainersSwitchProtectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        replicationProtectedItemName: Schema.optional(Schema.String),
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/switchprotection",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionContainersSwitchProtectionInput>;

// Output Schema
export interface ReplicationProtectionContainersSwitchProtectionOutput {
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
export const ReplicationProtectionContainersSwitchProtectionOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionContainersSwitchProtectionOutput>;

// The operation
/**
 * Switches protection from one container to another or one replication provider to another.
 *
 * Operation to switch protection from one container to another or one replication provider to another.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 */
export const ReplicationProtectionContainersSwitchProtection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionContainersSwitchProtectionInput,
    outputSchema: ReplicationProtectionContainersSwitchProtectionOutput,
  }));
// Input Schema
export interface ReplicationProtectionIntentsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  intentObjectName: string;
  properties?: { providerSpecificDetails?: { instanceType: string } };
}
export const ReplicationProtectionIntentsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    intentObjectName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerSpecificDetails: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionIntents/{intentObjectName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionIntentsCreateInput>;

// Output Schema
export interface ReplicationProtectionIntentsCreateOutput {
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
export const ReplicationProtectionIntentsCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionIntentsCreateOutput>;

// The operation
/**
 * Create protection intent Resource.
 *
 * The operation to create an ASR replication protection intent item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param intentObjectName - Replication protection intent name.
 */
export const ReplicationProtectionIntentsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionIntentsCreateInput,
    outputSchema: ReplicationProtectionIntentsCreateOutput,
  }));
// Input Schema
export interface ReplicationProtectionIntentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  intentObjectName: string;
}
export const ReplicationProtectionIntentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    intentObjectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionIntents/{intentObjectName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionIntentsGetInput>;

// Output Schema
export interface ReplicationProtectionIntentsGetOutput {
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
export const ReplicationProtectionIntentsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionIntentsGetOutput>;

// The operation
/**
 * Gets the details of a Replication protection intent item.
 *
 * Gets the details of an ASR replication protection intent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param intentObjectName - Replication protection intent name.
 */
export const ReplicationProtectionIntentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionIntentsGetInput,
    outputSchema: ReplicationProtectionIntentsGetOutput,
  }));
// Input Schema
export interface ReplicationProtectionIntentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  skipToken?: string;
  takeToken?: string;
}
export const ReplicationProtectionIntentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    skipToken: Schema.optional(Schema.String),
    takeToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionIntents",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationProtectionIntentsListInput>;

// Output Schema
export interface ReplicationProtectionIntentsListOutput {
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
export const ReplicationProtectionIntentsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationProtectionIntentsListOutput>;

// The operation
/**
 * Gets the list of replication protection intent objects.
 *
 * Gets the list of ASR replication protection intent objects in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param skipToken - The pagination token.
 * @param takeToken - The page size.
 */
export const ReplicationProtectionIntentsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationProtectionIntentsListInput,
    outputSchema: ReplicationProtectionIntentsListOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
  properties: {
    primaryFabricId: string;
    recoveryFabricId: string;
    failoverDeploymentModel?: "NotApplicable" | "Classic" | "ResourceManager";
    groups: {
      groupType: "Shutdown" | "Boot" | "Failover";
      replicationProtectedItems?: { id?: string; virtualMachineId?: string }[];
      startGroupActions?: {
        actionName: string;
        failoverTypes: (
          | "ReverseReplicate"
          | "Commit"
          | "PlannedFailover"
          | "UnplannedFailover"
          | "DisableProtection"
          | "TestFailover"
          | "TestFailoverCleanup"
          | "Failback"
          | "FinalizeFailback"
          | "CancelFailover"
          | "ChangePit"
          | "RepairReplication"
          | "SwitchProtection"
          | "CompleteMigration"
        )[];
        failoverDirections: ("PrimaryToRecovery" | "RecoveryToPrimary")[];
        customDetails: { instanceType: string };
      }[];
      endGroupActions?: {
        actionName: string;
        failoverTypes: (
          | "ReverseReplicate"
          | "Commit"
          | "PlannedFailover"
          | "UnplannedFailover"
          | "DisableProtection"
          | "TestFailover"
          | "TestFailoverCleanup"
          | "Failback"
          | "FinalizeFailback"
          | "CancelFailover"
          | "ChangePit"
          | "RepairReplication"
          | "SwitchProtection"
          | "CompleteMigration"
        )[];
        failoverDirections: ("PrimaryToRecovery" | "RecoveryToPrimary")[];
        customDetails: { instanceType: string };
      }[];
    }[];
    providerSpecificInput?: { instanceType: string }[];
  };
}
export const ReplicationRecoveryPlansCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      primaryFabricId: Schema.String,
      recoveryFabricId: Schema.String,
      failoverDeploymentModel: Schema.optional(
        Schema.Literals(["NotApplicable", "Classic", "ResourceManager"]),
      ),
      groups: Schema.Array(
        Schema.Struct({
          groupType: Schema.Literals(["Shutdown", "Boot", "Failover"]),
          replicationProtectedItems: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                virtualMachineId: Schema.optional(Schema.String),
              }),
            ),
          ),
          startGroupActions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                actionName: Schema.String,
                failoverTypes: Schema.Array(
                  Schema.Literals([
                    "ReverseReplicate",
                    "Commit",
                    "PlannedFailover",
                    "UnplannedFailover",
                    "DisableProtection",
                    "TestFailover",
                    "TestFailoverCleanup",
                    "Failback",
                    "FinalizeFailback",
                    "CancelFailover",
                    "ChangePit",
                    "RepairReplication",
                    "SwitchProtection",
                    "CompleteMigration",
                  ]),
                ),
                failoverDirections: Schema.Array(
                  Schema.Literals(["PrimaryToRecovery", "RecoveryToPrimary"]),
                ),
                customDetails: Schema.Struct({
                  instanceType: Schema.String,
                }),
              }),
            ),
          ),
          endGroupActions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                actionName: Schema.String,
                failoverTypes: Schema.Array(
                  Schema.Literals([
                    "ReverseReplicate",
                    "Commit",
                    "PlannedFailover",
                    "UnplannedFailover",
                    "DisableProtection",
                    "TestFailover",
                    "TestFailoverCleanup",
                    "Failback",
                    "FinalizeFailback",
                    "CancelFailover",
                    "ChangePit",
                    "RepairReplication",
                    "SwitchProtection",
                    "CompleteMigration",
                  ]),
                ),
                failoverDirections: Schema.Array(
                  Schema.Literals(["PrimaryToRecovery", "RecoveryToPrimary"]),
                ),
                customDetails: Schema.Struct({
                  instanceType: Schema.String,
                }),
              }),
            ),
          ),
        }),
      ),
      providerSpecificInput: Schema.optional(
        Schema.Array(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansCreateInput>;

// Output Schema
export interface ReplicationRecoveryPlansCreateOutput {
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
export const ReplicationRecoveryPlansCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansCreateOutput>;

// The operation
/**
 * Creates a recovery plan with the given details.
 *
 * The operation to create a recovery plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansCreateInput,
    outputSchema: ReplicationRecoveryPlansCreateOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
}
export const ReplicationRecoveryPlansDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansDeleteInput>;

// Output Schema
export type ReplicationRecoveryPlansDeleteOutput = void;
export const ReplicationRecoveryPlansDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationRecoveryPlansDeleteOutput>;

// The operation
/**
 * Deletes the specified recovery plan.
 *
 * Delete a recovery plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansDeleteInput,
    outputSchema: ReplicationRecoveryPlansDeleteOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansFailoverCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
}
export const ReplicationRecoveryPlansFailoverCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/failoverCancel",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansFailoverCancelInput>;

// Output Schema
export interface ReplicationRecoveryPlansFailoverCancelOutput {
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
export const ReplicationRecoveryPlansFailoverCancelOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansFailoverCancelOutput>;

// The operation
/**
 * Execute cancel failover of the recovery plan.
 *
 * The operation to cancel the failover of a recovery plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansFailoverCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansFailoverCancelInput,
    outputSchema: ReplicationRecoveryPlansFailoverCancelOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansFailoverCommitInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
}
export const ReplicationRecoveryPlansFailoverCommitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/failoverCommit",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansFailoverCommitInput>;

// Output Schema
export interface ReplicationRecoveryPlansFailoverCommitOutput {
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
export const ReplicationRecoveryPlansFailoverCommitOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansFailoverCommitOutput>;

// The operation
/**
 * Execute commit failover of the recovery plan.
 *
 * The operation to commit the failover of a recovery plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansFailoverCommit =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansFailoverCommitInput,
    outputSchema: ReplicationRecoveryPlansFailoverCommitOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
}
export const ReplicationRecoveryPlansGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansGetInput>;

// Output Schema
export interface ReplicationRecoveryPlansGetOutput {
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
export const ReplicationRecoveryPlansGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansGetOutput>;

// The operation
/**
 * Gets the requested recovery plan.
 *
 * Gets the details of the recovery plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationRecoveryPlansGetInput,
    outputSchema: ReplicationRecoveryPlansGetOutput,
  }),
);
// Input Schema
export interface ReplicationRecoveryPlansListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationRecoveryPlansListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansListInput>;

// Output Schema
export interface ReplicationRecoveryPlansListOutput {
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
export const ReplicationRecoveryPlansListOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansListOutput>;

// The operation
/**
 * Gets the list of recovery plans.
 *
 * Lists the recovery plans in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 */
export const ReplicationRecoveryPlansList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansListInput,
    outputSchema: ReplicationRecoveryPlansListOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansPlannedFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
  properties: {
    failoverDirection: "PrimaryToRecovery" | "RecoveryToPrimary";
    providerSpecificDetails?: { instanceType: string }[];
  };
}
export const ReplicationRecoveryPlansPlannedFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      failoverDirection: Schema.Literals([
        "PrimaryToRecovery",
        "RecoveryToPrimary",
      ]),
      providerSpecificDetails: Schema.optional(
        Schema.Array(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/plannedFailover",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansPlannedFailoverInput>;

// Output Schema
export interface ReplicationRecoveryPlansPlannedFailoverOutput {
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
export const ReplicationRecoveryPlansPlannedFailoverOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansPlannedFailoverOutput>;

// The operation
/**
 * Execute planned failover of the recovery plan.
 *
 * The operation to start the planned failover of a recovery plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansPlannedFailover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansPlannedFailoverInput,
    outputSchema: ReplicationRecoveryPlansPlannedFailoverOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansReprotectInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
}
export const ReplicationRecoveryPlansReprotectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/reProtect",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansReprotectInput>;

// Output Schema
export interface ReplicationRecoveryPlansReprotectOutput {
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
export const ReplicationRecoveryPlansReprotectOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansReprotectOutput>;

// The operation
/**
 * Execute reprotect of the recovery plan.
 *
 * The operation to reprotect(reverse replicate) a recovery plan. This api is for deprecated scenarios and no longer works.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansReprotect =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansReprotectInput,
    outputSchema: ReplicationRecoveryPlansReprotectOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansTestFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
  properties: {
    failoverDirection: "PrimaryToRecovery" | "RecoveryToPrimary";
    networkType: string;
    networkId?: string;
    providerSpecificDetails?: { instanceType: string }[];
  };
}
export const ReplicationRecoveryPlansTestFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      failoverDirection: Schema.Literals([
        "PrimaryToRecovery",
        "RecoveryToPrimary",
      ]),
      networkType: Schema.String,
      networkId: Schema.optional(Schema.String),
      providerSpecificDetails: Schema.optional(
        Schema.Array(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/testFailover",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansTestFailoverInput>;

// Output Schema
export interface ReplicationRecoveryPlansTestFailoverOutput {
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
export const ReplicationRecoveryPlansTestFailoverOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansTestFailoverOutput>;

// The operation
/**
 * Execute test failover of the recovery plan.
 *
 * The operation to start the test failover of a recovery plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansTestFailover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansTestFailoverInput,
    outputSchema: ReplicationRecoveryPlansTestFailoverOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansTestFailoverCleanupInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
  properties: { comments?: string };
}
export const ReplicationRecoveryPlansTestFailoverCleanupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      comments: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/testFailoverCleanup",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansTestFailoverCleanupInput>;

// Output Schema
export interface ReplicationRecoveryPlansTestFailoverCleanupOutput {
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
export const ReplicationRecoveryPlansTestFailoverCleanupOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansTestFailoverCleanupOutput>;

// The operation
/**
 * Execute test failover cleanup of the recovery plan.
 *
 * The operation to cleanup test failover of a recovery plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansTestFailoverCleanup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansTestFailoverCleanupInput,
    outputSchema: ReplicationRecoveryPlansTestFailoverCleanupOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansUnplannedFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
  properties: {
    failoverDirection: "PrimaryToRecovery" | "RecoveryToPrimary";
    sourceSiteOperations: "Required" | "NotRequired";
    providerSpecificDetails?: { instanceType: string }[];
  };
}
export const ReplicationRecoveryPlansUnplannedFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      failoverDirection: Schema.Literals([
        "PrimaryToRecovery",
        "RecoveryToPrimary",
      ]),
      sourceSiteOperations: Schema.Literals(["Required", "NotRequired"]),
      providerSpecificDetails: Schema.optional(
        Schema.Array(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/unplannedFailover",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansUnplannedFailoverInput>;

// Output Schema
export interface ReplicationRecoveryPlansUnplannedFailoverOutput {
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
export const ReplicationRecoveryPlansUnplannedFailoverOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansUnplannedFailoverOutput>;

// The operation
/**
 * Execute unplanned failover of the recovery plan.
 *
 * The operation to start the unplanned failover of a recovery plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansUnplannedFailover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansUnplannedFailoverInput,
    outputSchema: ReplicationRecoveryPlansUnplannedFailoverOutput,
  }));
// Input Schema
export interface ReplicationRecoveryPlansUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  recoveryPlanName: string;
  properties?: {
    groups?: {
      groupType: "Shutdown" | "Boot" | "Failover";
      replicationProtectedItems?: { id?: string; virtualMachineId?: string }[];
      startGroupActions?: {
        actionName: string;
        failoverTypes: (
          | "ReverseReplicate"
          | "Commit"
          | "PlannedFailover"
          | "UnplannedFailover"
          | "DisableProtection"
          | "TestFailover"
          | "TestFailoverCleanup"
          | "Failback"
          | "FinalizeFailback"
          | "CancelFailover"
          | "ChangePit"
          | "RepairReplication"
          | "SwitchProtection"
          | "CompleteMigration"
        )[];
        failoverDirections: ("PrimaryToRecovery" | "RecoveryToPrimary")[];
        customDetails: { instanceType: string };
      }[];
      endGroupActions?: {
        actionName: string;
        failoverTypes: (
          | "ReverseReplicate"
          | "Commit"
          | "PlannedFailover"
          | "UnplannedFailover"
          | "DisableProtection"
          | "TestFailover"
          | "TestFailoverCleanup"
          | "Failback"
          | "FinalizeFailback"
          | "CancelFailover"
          | "ChangePit"
          | "RepairReplication"
          | "SwitchProtection"
          | "CompleteMigration"
        )[];
        failoverDirections: ("PrimaryToRecovery" | "RecoveryToPrimary")[];
        customDetails: { instanceType: string };
      }[];
    }[];
  };
}
export const ReplicationRecoveryPlansUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    recoveryPlanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        groups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              groupType: Schema.Literals(["Shutdown", "Boot", "Failover"]),
              replicationProtectedItems: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    virtualMachineId: Schema.optional(Schema.String),
                  }),
                ),
              ),
              startGroupActions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    actionName: Schema.String,
                    failoverTypes: Schema.Array(
                      Schema.Literals([
                        "ReverseReplicate",
                        "Commit",
                        "PlannedFailover",
                        "UnplannedFailover",
                        "DisableProtection",
                        "TestFailover",
                        "TestFailoverCleanup",
                        "Failback",
                        "FinalizeFailback",
                        "CancelFailover",
                        "ChangePit",
                        "RepairReplication",
                        "SwitchProtection",
                        "CompleteMigration",
                      ]),
                    ),
                    failoverDirections: Schema.Array(
                      Schema.Literals([
                        "PrimaryToRecovery",
                        "RecoveryToPrimary",
                      ]),
                    ),
                    customDetails: Schema.Struct({
                      instanceType: Schema.String,
                    }),
                  }),
                ),
              ),
              endGroupActions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    actionName: Schema.String,
                    failoverTypes: Schema.Array(
                      Schema.Literals([
                        "ReverseReplicate",
                        "Commit",
                        "PlannedFailover",
                        "UnplannedFailover",
                        "DisableProtection",
                        "TestFailover",
                        "TestFailoverCleanup",
                        "Failback",
                        "FinalizeFailback",
                        "CancelFailover",
                        "ChangePit",
                        "RepairReplication",
                        "SwitchProtection",
                        "CompleteMigration",
                      ]),
                    ),
                    failoverDirections: Schema.Array(
                      Schema.Literals([
                        "PrimaryToRecovery",
                        "RecoveryToPrimary",
                      ]),
                    ),
                    customDetails: Schema.Struct({
                      instanceType: Schema.String,
                    }),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryPlansUpdateInput>;

// Output Schema
export interface ReplicationRecoveryPlansUpdateOutput {
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
export const ReplicationRecoveryPlansUpdateOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryPlansUpdateOutput>;

// The operation
/**
 * Updates the given recovery plan.
 *
 * The operation to update a recovery plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param recoveryPlanName - Name of the recovery plan.
 */
export const ReplicationRecoveryPlansUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryPlansUpdateInput,
    outputSchema: ReplicationRecoveryPlansUpdateOutput,
  }));
// Input Schema
export interface ReplicationRecoveryServicesProvidersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  providerName: string;
  properties: {
    machineName: string;
    machineId?: string;
    biosId?: string;
    authenticationIdentityInput: {
      tenantId: string;
      applicationId: string;
      objectId: string;
      audience: string;
      aadAuthority: string;
    };
    resourceAccessIdentityInput: {
      tenantId: string;
      applicationId: string;
      objectId: string;
      audience: string;
      aadAuthority: string;
    };
    dataPlaneAuthenticationIdentityInput?: {
      tenantId: string;
      applicationId: string;
      objectId: string;
      audience: string;
      aadAuthority: string;
    };
  };
}
export const ReplicationRecoveryServicesProvidersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      machineName: Schema.String,
      machineId: Schema.optional(Schema.String),
      biosId: Schema.optional(Schema.String),
      authenticationIdentityInput: Schema.Struct({
        tenantId: Schema.String,
        applicationId: Schema.String,
        objectId: Schema.String,
        audience: Schema.String,
        aadAuthority: Schema.String,
      }),
      resourceAccessIdentityInput: Schema.Struct({
        tenantId: Schema.String,
        applicationId: Schema.String,
        objectId: Schema.String,
        audience: Schema.String,
        aadAuthority: Schema.String,
      }),
      dataPlaneAuthenticationIdentityInput: Schema.optional(
        Schema.Struct({
          tenantId: Schema.String,
          applicationId: Schema.String,
          objectId: Schema.String,
          audience: Schema.String,
          aadAuthority: Schema.String,
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersCreateInput>;

// Output Schema
export interface ReplicationRecoveryServicesProvidersCreateOutput {
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
export const ReplicationRecoveryServicesProvidersCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersCreateOutput>;

// The operation
/**
 * Adds a recovery services provider.
 *
 * The operation to add a recovery services provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param providerName - Recovery services provider name.
 */
export const ReplicationRecoveryServicesProvidersCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryServicesProvidersCreateInput,
    outputSchema: ReplicationRecoveryServicesProvidersCreateOutput,
  }));
// Input Schema
export interface ReplicationRecoveryServicesProvidersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  providerName: string;
}
export const ReplicationRecoveryServicesProvidersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}/remove",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersDeleteInput>;

// Output Schema
export type ReplicationRecoveryServicesProvidersDeleteOutput = void;
export const ReplicationRecoveryServicesProvidersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersDeleteOutput>;

// The operation
/**
 * Deletes provider from fabric. Note: Deleting provider for any fabric other than SingleHost is unsupported. To maintain backward compatibility for released clients the object "deleteRspInput" is used (if the object is empty we assume that it is old client and continue the old behavior).
 *
 * The operation to removes/delete(unregister) a recovery services provider from the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param providerName - Recovery services provider name.
 */
export const ReplicationRecoveryServicesProvidersDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryServicesProvidersDeleteInput,
    outputSchema: ReplicationRecoveryServicesProvidersDeleteOutput,
  }));
// Input Schema
export interface ReplicationRecoveryServicesProvidersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  providerName: string;
}
export const ReplicationRecoveryServicesProvidersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersGetInput>;

// Output Schema
export interface ReplicationRecoveryServicesProvidersGetOutput {
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
export const ReplicationRecoveryServicesProvidersGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersGetOutput>;

// The operation
/**
 * Gets the details of a recovery services provider.
 *
 * Gets the details of registered recovery services provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param providerName - Recovery services provider name.
 */
export const ReplicationRecoveryServicesProvidersGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryServicesProvidersGetInput,
    outputSchema: ReplicationRecoveryServicesProvidersGetOutput,
  }));
// Input Schema
export interface ReplicationRecoveryServicesProvidersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationRecoveryServicesProvidersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryServicesProviders",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersListInput>;

// Output Schema
export interface ReplicationRecoveryServicesProvidersListOutput {
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
export const ReplicationRecoveryServicesProvidersListOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersListOutput>;

// The operation
/**
 * Gets the list of registered recovery services providers in the vault. This is a view only api.
 *
 * Lists the registered recovery services providers in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationRecoveryServicesProvidersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryServicesProvidersListInput,
    outputSchema: ReplicationRecoveryServicesProvidersListOutput,
  }));
// Input Schema
export interface ReplicationRecoveryServicesProvidersListByReplicationFabricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationRecoveryServicesProvidersListByReplicationFabricsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersListByReplicationFabricsInput>;

// Output Schema
export interface ReplicationRecoveryServicesProvidersListByReplicationFabricsOutput {
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
export const ReplicationRecoveryServicesProvidersListByReplicationFabricsOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersListByReplicationFabricsOutput>;

// The operation
/**
 * Gets the list of registered recovery services providers for the fabric.
 *
 * Lists the registered recovery services providers for the specified fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationRecoveryServicesProvidersListByReplicationFabrics =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplicationRecoveryServicesProvidersListByReplicationFabricsInput,
    outputSchema:
      ReplicationRecoveryServicesProvidersListByReplicationFabricsOutput,
  }));
// Input Schema
export interface ReplicationRecoveryServicesProvidersPurgeInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  providerName: string;
}
export const ReplicationRecoveryServicesProvidersPurgeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersPurgeInput>;

// Output Schema
export type ReplicationRecoveryServicesProvidersPurgeOutput = void;
export const ReplicationRecoveryServicesProvidersPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersPurgeOutput>;

// The operation
/**
 * Purges recovery service provider from fabric.
 *
 * The operation to purge(force delete) a recovery services provider from the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param providerName - Recovery services provider name.
 */
export const ReplicationRecoveryServicesProvidersPurge =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryServicesProvidersPurgeInput,
    outputSchema: ReplicationRecoveryServicesProvidersPurgeOutput,
  }));
// Input Schema
export interface ReplicationRecoveryServicesProvidersRefreshProviderInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  providerName: string;
}
export const ReplicationRecoveryServicesProvidersRefreshProviderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}/refreshProvider",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersRefreshProviderInput>;

// Output Schema
export interface ReplicationRecoveryServicesProvidersRefreshProviderOutput {
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
export const ReplicationRecoveryServicesProvidersRefreshProviderOutput =
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
  }) as unknown as Schema.Codec<ReplicationRecoveryServicesProvidersRefreshProviderOutput>;

// The operation
/**
 * Refresh details from the recovery services provider.
 *
 * The operation to refresh the information from the recovery services provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param providerName - Recovery services provider name.
 */
export const ReplicationRecoveryServicesProvidersRefreshProvider =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationRecoveryServicesProvidersRefreshProviderInput,
    outputSchema: ReplicationRecoveryServicesProvidersRefreshProviderOutput,
  }));
// Input Schema
export interface ReplicationStorageClassificationMappingsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  storageClassificationName: string;
  storageClassificationMappingName: string;
  properties?: { targetStorageClassificationId?: string };
}
export const ReplicationStorageClassificationMappingsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    storageClassificationName: Schema.String.pipe(T.PathParam()),
    storageClassificationMappingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetStorageClassificationId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings/{storageClassificationMappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationStorageClassificationMappingsCreateInput>;

// Output Schema
export interface ReplicationStorageClassificationMappingsCreateOutput {
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
export const ReplicationStorageClassificationMappingsCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationStorageClassificationMappingsCreateOutput>;

// The operation
/**
 * Create storage classification mapping.
 *
 * The operation to create a storage classification mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param storageClassificationName - Storage classification name.
 * @param storageClassificationMappingName - Storage classification mapping name.
 */
export const ReplicationStorageClassificationMappingsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationStorageClassificationMappingsCreateInput,
    outputSchema: ReplicationStorageClassificationMappingsCreateOutput,
  }));
// Input Schema
export interface ReplicationStorageClassificationMappingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  storageClassificationName: string;
  storageClassificationMappingName: string;
}
export const ReplicationStorageClassificationMappingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    storageClassificationName: Schema.String.pipe(T.PathParam()),
    storageClassificationMappingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings/{storageClassificationMappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationStorageClassificationMappingsDeleteInput>;

// Output Schema
export type ReplicationStorageClassificationMappingsDeleteOutput = void;
export const ReplicationStorageClassificationMappingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationStorageClassificationMappingsDeleteOutput>;

// The operation
/**
 * Delete a storage classification mapping.
 *
 * The operation to delete a storage classification mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param storageClassificationName - Storage classification name.
 * @param storageClassificationMappingName - Storage classification mapping name.
 */
export const ReplicationStorageClassificationMappingsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationStorageClassificationMappingsDeleteInput,
    outputSchema: ReplicationStorageClassificationMappingsDeleteOutput,
  }));
// Input Schema
export interface ReplicationStorageClassificationMappingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  storageClassificationName: string;
  storageClassificationMappingName: string;
}
export const ReplicationStorageClassificationMappingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    storageClassificationName: Schema.String.pipe(T.PathParam()),
    storageClassificationMappingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings/{storageClassificationMappingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationStorageClassificationMappingsGetInput>;

// Output Schema
export interface ReplicationStorageClassificationMappingsGetOutput {
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
export const ReplicationStorageClassificationMappingsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationStorageClassificationMappingsGetOutput>;

// The operation
/**
 * Gets the details of a storage classification mapping.
 *
 * Gets the details of the specified storage classification mapping.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param storageClassificationName - Storage classification name.
 * @param storageClassificationMappingName - Storage classification mapping name.
 */
export const ReplicationStorageClassificationMappingsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationStorageClassificationMappingsGetInput,
    outputSchema: ReplicationStorageClassificationMappingsGetOutput,
  }));
// Input Schema
export interface ReplicationStorageClassificationMappingsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationStorageClassificationMappingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationStorageClassificationMappings",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationStorageClassificationMappingsListInput>;

// Output Schema
export interface ReplicationStorageClassificationMappingsListOutput {
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
export const ReplicationStorageClassificationMappingsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationStorageClassificationMappingsListOutput>;

// The operation
/**
 * Gets the list of storage classification mappings objects under a vault.
 *
 * Lists the storage classification mappings in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationStorageClassificationMappingsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationStorageClassificationMappingsListInput,
    outputSchema: ReplicationStorageClassificationMappingsListOutput,
  }));
// Input Schema
export interface ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  storageClassificationName: string;
}
export const ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    storageClassificationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsInput>;

// Output Schema
export interface ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOutput {
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
export const ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOutput =
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
  }) as unknown as Schema.Codec<ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOutput>;

// The operation
/**
 * Gets the list of storage classification mappings objects under a storage.
 *
 * Lists the storage classification mappings for the fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param storageClassificationName - Storage classification name.
 */
export const ReplicationStorageClassificationMappingsListByReplicationStorageClassifications =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsInput,
    outputSchema:
      ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOutput,
  }));
// Input Schema
export interface ReplicationStorageClassificationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  storageClassificationName: string;
}
export const ReplicationStorageClassificationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    storageClassificationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationStorageClassificationsGetInput>;

// Output Schema
export interface ReplicationStorageClassificationsGetOutput {
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
export const ReplicationStorageClassificationsGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationStorageClassificationsGetOutput>;

// The operation
/**
 * Gets the details of a storage classification.
 *
 * Gets the details of the specified storage classification.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param storageClassificationName - Storage classification name.
 */
export const ReplicationStorageClassificationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationStorageClassificationsGetInput,
    outputSchema: ReplicationStorageClassificationsGetOutput,
  }));
// Input Schema
export interface ReplicationStorageClassificationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationStorageClassificationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationStorageClassifications",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationStorageClassificationsListInput>;

// Output Schema
export interface ReplicationStorageClassificationsListOutput {
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
export const ReplicationStorageClassificationsListOutput =
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
  }) as unknown as Schema.Codec<ReplicationStorageClassificationsListOutput>;

// The operation
/**
 * Gets the list of storage classification objects under a vault.
 *
 * Lists the storage classifications in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationStorageClassificationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationStorageClassificationsListInput,
    outputSchema: ReplicationStorageClassificationsListOutput,
  }));
// Input Schema
export interface ReplicationStorageClassificationsListByReplicationFabricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationStorageClassificationsListByReplicationFabricsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationStorageClassificationsListByReplicationFabricsInput>;

// Output Schema
export interface ReplicationStorageClassificationsListByReplicationFabricsOutput {
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
export const ReplicationStorageClassificationsListByReplicationFabricsOutput =
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
  }) as unknown as Schema.Codec<ReplicationStorageClassificationsListByReplicationFabricsOutput>;

// The operation
/**
 * Gets the list of storage classification objects under a fabric.
 *
 * Lists the storage classifications available in the specified fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationStorageClassificationsListByReplicationFabrics =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationStorageClassificationsListByReplicationFabricsInput,
    outputSchema:
      ReplicationStorageClassificationsListByReplicationFabricsOutput,
  }));
// Input Schema
export interface ReplicationVaultHealthGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationVaultHealthGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultHealth",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationVaultHealthGetInput>;

// Output Schema
export interface ReplicationVaultHealthGetOutput {
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
export const ReplicationVaultHealthGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationVaultHealthGetOutput>;

// The operation
/**
 * Gets the health summary for the vault.
 *
 * Gets the health details of the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationVaultHealthGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationVaultHealthGetInput,
    outputSchema: ReplicationVaultHealthGetOutput,
  }),
);
// Input Schema
export interface ReplicationVaultHealthRefreshInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationVaultHealthRefreshInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultHealth/default/refresh",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationVaultHealthRefreshInput>;

// Output Schema
export interface ReplicationVaultHealthRefreshOutput {
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
export const ReplicationVaultHealthRefreshOutput =
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
  }) as unknown as Schema.Codec<ReplicationVaultHealthRefreshOutput>;

// The operation
/**
 * Refreshes health summary of the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationVaultHealthRefresh =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationVaultHealthRefreshInput,
    outputSchema: ReplicationVaultHealthRefreshOutput,
  }));
// Input Schema
export interface ReplicationVaultSettingCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  vaultSettingName: string;
  properties: {
    migrationSolutionId?: string;
    vmwareToAzureProviderType?: string;
  };
}
export const ReplicationVaultSettingCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    vaultSettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      migrationSolutionId: Schema.optional(Schema.String),
      vmwareToAzureProviderType: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultSettings/{vaultSettingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationVaultSettingCreateInput>;

// Output Schema
export interface ReplicationVaultSettingCreateOutput {
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
export const ReplicationVaultSettingCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationVaultSettingCreateOutput>;

// The operation
/**
 * Updates vault setting. A vault setting object is a singleton per vault and it is always present by default.
 *
 * The operation to configure vault setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param vaultSettingName - Vault setting name.
 */
export const ReplicationVaultSettingCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationVaultSettingCreateInput,
    outputSchema: ReplicationVaultSettingCreateOutput,
  }));
// Input Schema
export interface ReplicationVaultSettingGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  vaultSettingName: string;
}
export const ReplicationVaultSettingGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    vaultSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultSettings/{vaultSettingName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationVaultSettingGetInput>;

// Output Schema
export interface ReplicationVaultSettingGetOutput {
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
export const ReplicationVaultSettingGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationVaultSettingGetOutput>;

// The operation
/**
 * Gets the vault setting.
 *
 * Gets the vault setting. This includes the Migration Hub connection settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param vaultSettingName - Vault setting name.
 */
export const ReplicationVaultSettingGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationVaultSettingGetInput,
    outputSchema: ReplicationVaultSettingGetOutput,
  }),
);
// Input Schema
export interface ReplicationVaultSettingListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationVaultSettingListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultSettings",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationVaultSettingListInput>;

// Output Schema
export interface ReplicationVaultSettingListOutput {
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
export const ReplicationVaultSettingListOutput =
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
  }) as unknown as Schema.Codec<ReplicationVaultSettingListOutput>;

// The operation
/**
 * Gets the list of vault setting.
 *
 * Gets the list of vault setting. This includes the Migration Hub connection settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationVaultSettingList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationVaultSettingListInput,
    outputSchema: ReplicationVaultSettingListOutput,
  }),
);
// Input Schema
export interface ReplicationvCentersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  vcenterName: string;
  properties?: {
    friendlyName?: string;
    ipAddress?: string;
    processServerId?: string;
    port?: string;
    runAsAccountId?: string;
  };
}
export const ReplicationvCentersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        friendlyName: Schema.optional(Schema.String),
        ipAddress: Schema.optional(Schema.String),
        processServerId: Schema.optional(Schema.String),
        port: Schema.optional(Schema.String),
        runAsAccountId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationvCenters/{vcenterName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationvCentersCreateInput>;

// Output Schema
export interface ReplicationvCentersCreateOutput {
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
export const ReplicationvCentersCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationvCentersCreateOutput>;

// The operation
/**
 * Add vCenter.
 *
 * The operation to create a vCenter object..
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param vcenterName - vcenter name.
 */
export const ReplicationvCentersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationvCentersCreateInput,
    outputSchema: ReplicationvCentersCreateOutput,
  }),
);
// Input Schema
export interface ReplicationvCentersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  vcenterName: string;
}
export const ReplicationvCentersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationvCenters/{vcenterName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationvCentersDeleteInput>;

// Output Schema
export type ReplicationvCentersDeleteOutput = void;
export const ReplicationvCentersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationvCentersDeleteOutput>;

// The operation
/**
 * Remove vcenter operation.
 *
 * The operation to remove(unregister) a registered vCenter server from the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param vcenterName - vcenter name.
 */
export const ReplicationvCentersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationvCentersDeleteInput,
    outputSchema: ReplicationvCentersDeleteOutput,
  }),
);
// Input Schema
export interface ReplicationvCentersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  vcenterName: string;
}
export const ReplicationvCentersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationvCenters/{vcenterName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationvCentersGetInput>;

// Output Schema
export interface ReplicationvCentersGetOutput {
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
export const ReplicationvCentersGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationvCentersGetOutput>;

// The operation
/**
 * Gets the details of a vCenter.
 *
 * Gets the details of a registered vCenter server(Add vCenter server).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param vcenterName - vcenter name.
 */
export const ReplicationvCentersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationvCentersGetInput,
    outputSchema: ReplicationvCentersGetOutput,
  }),
);
// Input Schema
export interface ReplicationvCentersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ReplicationvCentersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationvCenters",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationvCentersListInput>;

// Output Schema
export interface ReplicationvCentersListOutput {
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
export const ReplicationvCentersListOutput =
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
  }) as unknown as Schema.Codec<ReplicationvCentersListOutput>;

// The operation
/**
 * Gets the list of vCenter registered under the vault.
 *
 * Lists the vCenter servers registered in the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 */
export const ReplicationvCentersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationvCentersListInput,
    outputSchema: ReplicationvCentersListOutput,
  }),
);
// Input Schema
export interface ReplicationvCentersListByReplicationFabricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
}
export const ReplicationvCentersListByReplicationFabricsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationvCenters",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationvCentersListByReplicationFabricsInput>;

// Output Schema
export interface ReplicationvCentersListByReplicationFabricsOutput {
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
export const ReplicationvCentersListByReplicationFabricsOutput =
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
  }) as unknown as Schema.Codec<ReplicationvCentersListByReplicationFabricsOutput>;

// The operation
/**
 * Gets the list of vCenter registered under a fabric.
 *
 * Lists the vCenter servers registered in a fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 */
export const ReplicationvCentersListByReplicationFabrics =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationvCentersListByReplicationFabricsInput,
    outputSchema: ReplicationvCentersListByReplicationFabricsOutput,
  }));
// Input Schema
export interface ReplicationvCentersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  vcenterName: string;
  properties?: {
    friendlyName?: string;
    ipAddress?: string;
    processServerId?: string;
    port?: string;
    runAsAccountId?: string;
  };
}
export const ReplicationvCentersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        friendlyName: Schema.optional(Schema.String),
        ipAddress: Schema.optional(Schema.String),
        processServerId: Schema.optional(Schema.String),
        port: Schema.optional(Schema.String),
        runAsAccountId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationvCenters/{vcenterName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationvCentersUpdateInput>;

// Output Schema
export interface ReplicationvCentersUpdateOutput {
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
export const ReplicationvCentersUpdateOutput =
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
  }) as unknown as Schema.Codec<ReplicationvCentersUpdateOutput>;

// The operation
/**
 * Update vCenter operation.
 *
 * The operation to update a registered vCenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param vcenterName - vcenter name.
 */
export const ReplicationvCentersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationvCentersUpdateInput,
    outputSchema: ReplicationvCentersUpdateOutput,
  }),
);
// Input Schema
export interface SupportedOperatingSystemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  instanceType?: string;
}
export const SupportedOperatingSystemsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    instanceType: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationSupportedOperatingSystems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<SupportedOperatingSystemsGetInput>;

// Output Schema
export interface SupportedOperatingSystemsGetOutput {
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
export const SupportedOperatingSystemsGetOutput =
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
  }) as unknown as Schema.Codec<SupportedOperatingSystemsGetOutput>;

// The operation
/**
 * Gets the data of supported operating systems by SRS.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the recovery services vault.
 * @param instanceType - The instance type.
 */
export const SupportedOperatingSystemsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SupportedOperatingSystemsGetInput,
    outputSchema: SupportedOperatingSystemsGetOutput,
  }));
// Input Schema
export interface TargetComputeSizesListByReplicationProtectedItemsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  fabricName: string;
  protectionContainerName: string;
  replicatedProtectedItemName: string;
}
export const TargetComputeSizesListByReplicationProtectedItemsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    protectionContainerName: Schema.String.pipe(T.PathParam()),
    replicatedProtectedItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/targetComputeSizes",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<TargetComputeSizesListByReplicationProtectedItemsInput>;

// Output Schema
export interface TargetComputeSizesListByReplicationProtectedItemsOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      name?: string;
      friendlyName?: string;
      cpuCoresCount?: number;
      vCPUsAvailable?: number;
      memoryInGB?: number;
      maxDataDiskCount?: number;
      maxNicsCount?: number;
      errors?: { message?: string; severity?: string }[];
      highIopsSupported?: string;
      hyperVGenerations?: string[];
    };
  }[];
  nextLink?: string;
}
export const TargetComputeSizesListByReplicationProtectedItemsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            friendlyName: Schema.optional(Schema.String),
            cpuCoresCount: Schema.optional(Schema.Number),
            vCPUsAvailable: Schema.optional(Schema.Number),
            memoryInGB: Schema.optional(Schema.Number),
            maxDataDiskCount: Schema.optional(Schema.Number),
            maxNicsCount: Schema.optional(Schema.Number),
            errors: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  message: Schema.optional(Schema.String),
                  severity: Schema.optional(Schema.String),
                }),
              ),
            ),
            highIopsSupported: Schema.optional(Schema.String),
            hyperVGenerations: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TargetComputeSizesListByReplicationProtectedItemsOutput>;

// The operation
/**
 * Gets the list of target compute sizes for the replication protected item.
 *
 * Lists the available target compute sizes for a replication protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the Vault
 * @param fabricName - Fabric name.
 * @param protectionContainerName - Protection container name.
 * @param replicatedProtectedItemName - Replication protected item name.
 */
export const TargetComputeSizesListByReplicationProtectedItems =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TargetComputeSizesListByReplicationProtectedItemsInput,
    outputSchema: TargetComputeSizesListByReplicationProtectedItemsOutput,
  }));
