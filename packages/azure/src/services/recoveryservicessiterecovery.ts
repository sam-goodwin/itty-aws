/**
 * Azure Recoveryservicessiterecovery API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
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
      apiVersion: "2025-08-01",
    }),
  );
export type ClusterRecoveryPointGetInput =
  typeof ClusterRecoveryPointGetInput.Type;

// Output Schema
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
  });
export type ClusterRecoveryPointGetOutput =
  typeof ClusterRecoveryPointGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ClusterRecoveryPointsListByReplicationProtectionClusterInput =
  typeof ClusterRecoveryPointsListByReplicationProtectionClusterInput.Type;

// Output Schema
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
  });
export type ClusterRecoveryPointsListByReplicationProtectionClusterOutput =
  typeof ClusterRecoveryPointsListByReplicationProtectionClusterOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type MigrationRecoveryPointsGetInput =
  typeof MigrationRecoveryPointsGetInput.Type;

// Output Schema
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
  });
export type MigrationRecoveryPointsGetOutput =
  typeof MigrationRecoveryPointsGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type MigrationRecoveryPointsListByReplicationMigrationItemsInput =
  typeof MigrationRecoveryPointsListByReplicationMigrationItemsInput.Type;

// Output Schema
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
  });
export type MigrationRecoveryPointsListByReplicationMigrationItemsOutput =
  typeof MigrationRecoveryPointsListByReplicationMigrationItemsOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/operations",
    apiVersion: "2025-08-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
    apiVersion: "2025-08-01",
  }),
);
export type RecoveryPointsGetInput = typeof RecoveryPointsGetInput.Type;

// Output Schema
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
  });
export type RecoveryPointsGetOutput = typeof RecoveryPointsGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type RecoveryPointsListByReplicationProtectedItemsInput =
  typeof RecoveryPointsListByReplicationProtectedItemsInput.Type;

// Output Schema
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
  });
export type RecoveryPointsListByReplicationProtectedItemsOutput =
  typeof RecoveryPointsListByReplicationProtectedItemsOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationAlertSettingsCreateInput =
  typeof ReplicationAlertSettingsCreateInput.Type;

// Output Schema
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
  });
export type ReplicationAlertSettingsCreateOutput =
  typeof ReplicationAlertSettingsCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationAlertSettingsGetInput =
  typeof ReplicationAlertSettingsGetInput.Type;

// Output Schema
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
  });
export type ReplicationAlertSettingsGetOutput =
  typeof ReplicationAlertSettingsGetOutput.Type;

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
export const ReplicationAlertSettingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAlertSettings",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationAlertSettingsListInput =
  typeof ReplicationAlertSettingsListInput.Type;

// Output Schema
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
  });
export type ReplicationAlertSettingsListOutput =
  typeof ReplicationAlertSettingsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationAppliancesListInput =
  typeof ReplicationAppliancesListInput.Type;

// Output Schema
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
  });
export type ReplicationAppliancesListOutput =
  typeof ReplicationAppliancesListOutput.Type;

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
export const ReplicationEligibilityResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachines/{virtualMachineName}/providers/Microsoft.RecoveryServices/replicationEligibilityResults/default",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationEligibilityResultsGetInput =
  typeof ReplicationEligibilityResultsGetInput.Type;

// Output Schema
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
  });
export type ReplicationEligibilityResultsGetOutput =
  typeof ReplicationEligibilityResultsGetOutput.Type;

// The operation
/**
 * Gets the validation errors in case the VM is unsuitable for protection.
 *
 * Validates whether a given VM can be protected or not in which case returns list of errors.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ReplicationEligibilityResultsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationEligibilityResultsGetInput,
    outputSchema: ReplicationEligibilityResultsGetOutput,
  }));
// Input Schema
export const ReplicationEligibilityResultsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachines/{virtualMachineName}/providers/Microsoft.RecoveryServices/replicationEligibilityResults",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationEligibilityResultsListInput =
  typeof ReplicationEligibilityResultsListInput.Type;

// Output Schema
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
  });
export type ReplicationEligibilityResultsListOutput =
  typeof ReplicationEligibilityResultsListOutput.Type;

// The operation
/**
 * Gets the validation errors in case the VM is unsuitable for protection.
 *
 * Validates whether a given VM can be protected or not in which case returns list of errors.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ReplicationEligibilityResultsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReplicationEligibilityResultsListInput,
    outputSchema: ReplicationEligibilityResultsListOutput,
  }));
// Input Schema
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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationEventsGetInput = typeof ReplicationEventsGetInput.Type;

// Output Schema
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
  });
export type ReplicationEventsGetOutput = typeof ReplicationEventsGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationEventsListInput = typeof ReplicationEventsListInput.Type;

// Output Schema
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
  });
export type ReplicationEventsListOutput =
  typeof ReplicationEventsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationFabricsCheckConsistencyInput =
  typeof ReplicationFabricsCheckConsistencyInput.Type;

// Output Schema
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
  });
export type ReplicationFabricsCheckConsistencyOutput =
  typeof ReplicationFabricsCheckConsistencyOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationFabricsCreateInput =
  typeof ReplicationFabricsCreateInput.Type;

// Output Schema
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
  });
export type ReplicationFabricsCreateOutput =
  typeof ReplicationFabricsCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationFabricsDeleteInput =
  typeof ReplicationFabricsDeleteInput.Type;

// Output Schema
export const ReplicationFabricsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationFabricsDeleteOutput =
  typeof ReplicationFabricsDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationFabricsGetInput = typeof ReplicationFabricsGetInput.Type;

// Output Schema
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
  });
export type ReplicationFabricsGetOutput =
  typeof ReplicationFabricsGetOutput.Type;

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
export const ReplicationFabricsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationFabricsListInput =
  typeof ReplicationFabricsListInput.Type;

// Output Schema
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
  });
export type ReplicationFabricsListOutput =
  typeof ReplicationFabricsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationFabricsMigrateToAadInput =
  typeof ReplicationFabricsMigrateToAadInput.Type;

// Output Schema
export const ReplicationFabricsMigrateToAadOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationFabricsMigrateToAadOutput =
  typeof ReplicationFabricsMigrateToAadOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationFabricsPurgeInput =
  typeof ReplicationFabricsPurgeInput.Type;

// Output Schema
export const ReplicationFabricsPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationFabricsPurgeOutput =
  typeof ReplicationFabricsPurgeOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationFabricsReassociateGatewayInput =
  typeof ReplicationFabricsReassociateGatewayInput.Type;

// Output Schema
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
  });
export type ReplicationFabricsReassociateGatewayOutput =
  typeof ReplicationFabricsReassociateGatewayOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationFabricsRemoveInfraInput =
  typeof ReplicationFabricsRemoveInfraInput.Type;

// Output Schema
export const ReplicationFabricsRemoveInfraOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationFabricsRemoveInfraOutput =
  typeof ReplicationFabricsRemoveInfraOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationFabricsRenewCertificateInput =
  typeof ReplicationFabricsRenewCertificateInput.Type;

// Output Schema
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
  });
export type ReplicationFabricsRenewCertificateOutput =
  typeof ReplicationFabricsRenewCertificateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationJobsCancelInput = typeof ReplicationJobsCancelInput.Type;

// Output Schema
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
  });
export type ReplicationJobsCancelOutput =
  typeof ReplicationJobsCancelOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationJobsExportInput = typeof ReplicationJobsExportInput.Type;

// Output Schema
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
  });
export type ReplicationJobsExportOutput =
  typeof ReplicationJobsExportOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationJobsGetInput = typeof ReplicationJobsGetInput.Type;

// Output Schema
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
  });
export type ReplicationJobsGetOutput = typeof ReplicationJobsGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationJobsListInput = typeof ReplicationJobsListInput.Type;

// Output Schema
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
  });
export type ReplicationJobsListOutput = typeof ReplicationJobsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationJobsRestartInput =
  typeof ReplicationJobsRestartInput.Type;

// Output Schema
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
  });
export type ReplicationJobsRestartOutput =
  typeof ReplicationJobsRestartOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationJobsResumeInput = typeof ReplicationJobsResumeInput.Type;

// Output Schema
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
  });
export type ReplicationJobsResumeOutput =
  typeof ReplicationJobsResumeOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationLogicalNetworksGetInput =
  typeof ReplicationLogicalNetworksGetInput.Type;

// Output Schema
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
  });
export type ReplicationLogicalNetworksGetOutput =
  typeof ReplicationLogicalNetworksGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationLogicalNetworksListByReplicationFabricsInput =
  typeof ReplicationLogicalNetworksListByReplicationFabricsInput.Type;

// Output Schema
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
  });
export type ReplicationLogicalNetworksListByReplicationFabricsOutput =
  typeof ReplicationLogicalNetworksListByReplicationFabricsOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsCreateInput =
  typeof ReplicationMigrationItemsCreateInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsCreateOutput =
  typeof ReplicationMigrationItemsCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsDeleteInput =
  typeof ReplicationMigrationItemsDeleteInput.Type;

// Output Schema
export const ReplicationMigrationItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationMigrationItemsDeleteOutput =
  typeof ReplicationMigrationItemsDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsGetInput =
  typeof ReplicationMigrationItemsGetInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsGetOutput =
  typeof ReplicationMigrationItemsGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsListInput =
  typeof ReplicationMigrationItemsListInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsListOutput =
  typeof ReplicationMigrationItemsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsListByReplicationProtectionContainersInput =
  typeof ReplicationMigrationItemsListByReplicationProtectionContainersInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsListByReplicationProtectionContainersOutput =
  typeof ReplicationMigrationItemsListByReplicationProtectionContainersOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsMigrateInput =
  typeof ReplicationMigrationItemsMigrateInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsMigrateOutput =
  typeof ReplicationMigrationItemsMigrateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsPauseReplicationInput =
  typeof ReplicationMigrationItemsPauseReplicationInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsPauseReplicationOutput =
  typeof ReplicationMigrationItemsPauseReplicationOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsResumeReplicationInput =
  typeof ReplicationMigrationItemsResumeReplicationInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsResumeReplicationOutput =
  typeof ReplicationMigrationItemsResumeReplicationOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsResyncInput =
  typeof ReplicationMigrationItemsResyncInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsResyncOutput =
  typeof ReplicationMigrationItemsResyncOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsTestMigrateInput =
  typeof ReplicationMigrationItemsTestMigrateInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsTestMigrateOutput =
  typeof ReplicationMigrationItemsTestMigrateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsTestMigrateCleanupInput =
  typeof ReplicationMigrationItemsTestMigrateCleanupInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsTestMigrateCleanupOutput =
  typeof ReplicationMigrationItemsTestMigrateCleanupOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationMigrationItemsUpdateInput =
  typeof ReplicationMigrationItemsUpdateInput.Type;

// Output Schema
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
  });
export type ReplicationMigrationItemsUpdateOutput =
  typeof ReplicationMigrationItemsUpdateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationNetworkMappingsCreateInput =
  typeof ReplicationNetworkMappingsCreateInput.Type;

// Output Schema
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
  });
export type ReplicationNetworkMappingsCreateOutput =
  typeof ReplicationNetworkMappingsCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationNetworkMappingsDeleteInput =
  typeof ReplicationNetworkMappingsDeleteInput.Type;

// Output Schema
export const ReplicationNetworkMappingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationNetworkMappingsDeleteOutput =
  typeof ReplicationNetworkMappingsDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationNetworkMappingsGetInput =
  typeof ReplicationNetworkMappingsGetInput.Type;

// Output Schema
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
  });
export type ReplicationNetworkMappingsGetOutput =
  typeof ReplicationNetworkMappingsGetOutput.Type;

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
export const ReplicationNetworkMappingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationNetworkMappings",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationNetworkMappingsListInput =
  typeof ReplicationNetworkMappingsListInput.Type;

// Output Schema
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
  });
export type ReplicationNetworkMappingsListOutput =
  typeof ReplicationNetworkMappingsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationNetworkMappingsListByReplicationNetworksInput =
  typeof ReplicationNetworkMappingsListByReplicationNetworksInput.Type;

// Output Schema
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
  });
export type ReplicationNetworkMappingsListByReplicationNetworksOutput =
  typeof ReplicationNetworkMappingsListByReplicationNetworksOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationNetworkMappingsUpdateInput =
  typeof ReplicationNetworkMappingsUpdateInput.Type;

// Output Schema
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
  });
export type ReplicationNetworkMappingsUpdateOutput =
  typeof ReplicationNetworkMappingsUpdateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationNetworksGetInput =
  typeof ReplicationNetworksGetInput.Type;

// Output Schema
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
  });
export type ReplicationNetworksGetOutput =
  typeof ReplicationNetworksGetOutput.Type;

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
export const ReplicationNetworksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationNetworks",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationNetworksListInput =
  typeof ReplicationNetworksListInput.Type;

// Output Schema
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
  });
export type ReplicationNetworksListOutput =
  typeof ReplicationNetworksListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationNetworksListByReplicationFabricsInput =
  typeof ReplicationNetworksListByReplicationFabricsInput.Type;

// Output Schema
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
  });
export type ReplicationNetworksListByReplicationFabricsOutput =
  typeof ReplicationNetworksListByReplicationFabricsOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationPoliciesCreateInput =
  typeof ReplicationPoliciesCreateInput.Type;

// Output Schema
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
  });
export type ReplicationPoliciesCreateOutput =
  typeof ReplicationPoliciesCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationPoliciesDeleteInput =
  typeof ReplicationPoliciesDeleteInput.Type;

// Output Schema
export const ReplicationPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationPoliciesDeleteOutput =
  typeof ReplicationPoliciesDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationPoliciesGetInput =
  typeof ReplicationPoliciesGetInput.Type;

// Output Schema
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
  });
export type ReplicationPoliciesGetOutput =
  typeof ReplicationPoliciesGetOutput.Type;

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
export const ReplicationPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationPolicies",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationPoliciesListInput =
  typeof ReplicationPoliciesListInput.Type;

// Output Schema
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
  });
export type ReplicationPoliciesListOutput =
  typeof ReplicationPoliciesListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationPoliciesUpdateInput =
  typeof ReplicationPoliciesUpdateInput.Type;

// Output Schema
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
  });
export type ReplicationPoliciesUpdateOutput =
  typeof ReplicationPoliciesUpdateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectableItemsGetInput =
  typeof ReplicationProtectableItemsGetInput.Type;

// Output Schema
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
  });
export type ReplicationProtectableItemsGetOutput =
  typeof ReplicationProtectableItemsGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectableItemsListByReplicationProtectionContainersInput =
  typeof ReplicationProtectableItemsListByReplicationProtectionContainersInput.Type;

// Output Schema
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
  });
export type ReplicationProtectableItemsListByReplicationProtectionContainersOutput =
  typeof ReplicationProtectableItemsListByReplicationProtectionContainersOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsAddDisksInput =
  typeof ReplicationProtectedItemsAddDisksInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsAddDisksOutput =
  typeof ReplicationProtectedItemsAddDisksOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsApplyRecoveryPointInput =
  typeof ReplicationProtectedItemsApplyRecoveryPointInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsApplyRecoveryPointOutput =
  typeof ReplicationProtectedItemsApplyRecoveryPointOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsCreateInput =
  typeof ReplicationProtectedItemsCreateInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsCreateOutput =
  typeof ReplicationProtectedItemsCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsDeleteInput =
  typeof ReplicationProtectedItemsDeleteInput.Type;

// Output Schema
export const ReplicationProtectedItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationProtectedItemsDeleteOutput =
  typeof ReplicationProtectedItemsDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsFailoverCancelInput =
  typeof ReplicationProtectedItemsFailoverCancelInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsFailoverCancelOutput =
  typeof ReplicationProtectedItemsFailoverCancelOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsFailoverCommitInput =
  typeof ReplicationProtectedItemsFailoverCommitInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsFailoverCommitOutput =
  typeof ReplicationProtectedItemsFailoverCommitOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsGetInput =
  typeof ReplicationProtectedItemsGetInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsGetOutput =
  typeof ReplicationProtectedItemsGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsListInput =
  typeof ReplicationProtectedItemsListInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsListOutput =
  typeof ReplicationProtectedItemsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsListByReplicationProtectionContainersInput =
  typeof ReplicationProtectedItemsListByReplicationProtectionContainersInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsListByReplicationProtectionContainersOutput =
  typeof ReplicationProtectedItemsListByReplicationProtectionContainersOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsPlannedFailoverInput =
  typeof ReplicationProtectedItemsPlannedFailoverInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsPlannedFailoverOutput =
  typeof ReplicationProtectedItemsPlannedFailoverOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsPurgeInput =
  typeof ReplicationProtectedItemsPurgeInput.Type;

// Output Schema
export const ReplicationProtectedItemsPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationProtectedItemsPurgeOutput =
  typeof ReplicationProtectedItemsPurgeOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsReinstallMobilityServiceInput =
  typeof ReplicationProtectedItemsReinstallMobilityServiceInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsReinstallMobilityServiceOutput =
  typeof ReplicationProtectedItemsReinstallMobilityServiceOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsRemoveDisksInput =
  typeof ReplicationProtectedItemsRemoveDisksInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsRemoveDisksOutput =
  typeof ReplicationProtectedItemsRemoveDisksOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsRepairReplicationInput =
  typeof ReplicationProtectedItemsRepairReplicationInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsRepairReplicationOutput =
  typeof ReplicationProtectedItemsRepairReplicationOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsReprotectInput =
  typeof ReplicationProtectedItemsReprotectInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsReprotectOutput =
  typeof ReplicationProtectedItemsReprotectOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsResolveHealthErrorsInput =
  typeof ReplicationProtectedItemsResolveHealthErrorsInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsResolveHealthErrorsOutput =
  typeof ReplicationProtectedItemsResolveHealthErrorsOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsSwitchProviderInput =
  typeof ReplicationProtectedItemsSwitchProviderInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsSwitchProviderOutput =
  typeof ReplicationProtectedItemsSwitchProviderOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsTestFailoverInput =
  typeof ReplicationProtectedItemsTestFailoverInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsTestFailoverOutput =
  typeof ReplicationProtectedItemsTestFailoverOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsTestFailoverCleanupInput =
  typeof ReplicationProtectedItemsTestFailoverCleanupInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsTestFailoverCleanupOutput =
  typeof ReplicationProtectedItemsTestFailoverCleanupOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsUnplannedFailoverInput =
  typeof ReplicationProtectedItemsUnplannedFailoverInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsUnplannedFailoverOutput =
  typeof ReplicationProtectedItemsUnplannedFailoverOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsUpdateInput =
  typeof ReplicationProtectedItemsUpdateInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsUpdateOutput =
  typeof ReplicationProtectedItemsUpdateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsUpdateApplianceInput =
  typeof ReplicationProtectedItemsUpdateApplianceInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsUpdateApplianceOutput =
  typeof ReplicationProtectedItemsUpdateApplianceOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectedItemsUpdateMobilityServiceInput =
  typeof ReplicationProtectedItemsUpdateMobilityServiceInput.Type;

// Output Schema
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
  });
export type ReplicationProtectedItemsUpdateMobilityServiceOutput =
  typeof ReplicationProtectedItemsUpdateMobilityServiceOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersApplyRecoveryPointInput =
  typeof ReplicationProtectionClustersApplyRecoveryPointInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersApplyRecoveryPointOutput =
  typeof ReplicationProtectionClustersApplyRecoveryPointOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersCreateInput =
  typeof ReplicationProtectionClustersCreateInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersCreateOutput =
  typeof ReplicationProtectionClustersCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersFailoverCommitInput =
  typeof ReplicationProtectionClustersFailoverCommitInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersFailoverCommitOutput =
  typeof ReplicationProtectionClustersFailoverCommitOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersGetInput =
  typeof ReplicationProtectionClustersGetInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersGetOutput =
  typeof ReplicationProtectionClustersGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersGetOperationResultsInput =
  typeof ReplicationProtectionClustersGetOperationResultsInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersGetOperationResultsOutput =
  typeof ReplicationProtectionClustersGetOperationResultsOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersListInput =
  typeof ReplicationProtectionClustersListInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersListOutput =
  typeof ReplicationProtectionClustersListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersListByReplicationProtectionContainersInput =
  typeof ReplicationProtectionClustersListByReplicationProtectionContainersInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersListByReplicationProtectionContainersOutput =
  typeof ReplicationProtectionClustersListByReplicationProtectionContainersOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersPurgeInput =
  typeof ReplicationProtectionClustersPurgeInput.Type;

// Output Schema
export const ReplicationProtectionClustersPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationProtectionClustersPurgeOutput =
  typeof ReplicationProtectionClustersPurgeOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersRepairReplicationInput =
  typeof ReplicationProtectionClustersRepairReplicationInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersRepairReplicationOutput =
  typeof ReplicationProtectionClustersRepairReplicationOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersTestFailoverInput =
  typeof ReplicationProtectionClustersTestFailoverInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersTestFailoverOutput =
  typeof ReplicationProtectionClustersTestFailoverOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersTestFailoverCleanupInput =
  typeof ReplicationProtectionClustersTestFailoverCleanupInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersTestFailoverCleanupOutput =
  typeof ReplicationProtectionClustersTestFailoverCleanupOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionClustersUnplannedFailoverInput =
  typeof ReplicationProtectionClustersUnplannedFailoverInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionClustersUnplannedFailoverOutput =
  typeof ReplicationProtectionClustersUnplannedFailoverOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainerMappingsCreateInput =
  typeof ReplicationProtectionContainerMappingsCreateInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainerMappingsCreateOutput =
  typeof ReplicationProtectionContainerMappingsCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainerMappingsDeleteInput =
  typeof ReplicationProtectionContainerMappingsDeleteInput.Type;

// Output Schema
export const ReplicationProtectionContainerMappingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationProtectionContainerMappingsDeleteOutput =
  typeof ReplicationProtectionContainerMappingsDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainerMappingsGetInput =
  typeof ReplicationProtectionContainerMappingsGetInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainerMappingsGetOutput =
  typeof ReplicationProtectionContainerMappingsGetOutput.Type;

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
export const ReplicationProtectionContainerMappingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionContainerMappings",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainerMappingsListInput =
  typeof ReplicationProtectionContainerMappingsListInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainerMappingsListOutput =
  typeof ReplicationProtectionContainerMappingsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainerMappingsListByReplicationProtectionContainersInput =
  typeof ReplicationProtectionContainerMappingsListByReplicationProtectionContainersInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOutput =
  typeof ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainerMappingsPurgeInput =
  typeof ReplicationProtectionContainerMappingsPurgeInput.Type;

// Output Schema
export const ReplicationProtectionContainerMappingsPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationProtectionContainerMappingsPurgeOutput =
  typeof ReplicationProtectionContainerMappingsPurgeOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainerMappingsUpdateInput =
  typeof ReplicationProtectionContainerMappingsUpdateInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainerMappingsUpdateOutput =
  typeof ReplicationProtectionContainerMappingsUpdateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainersCreateInput =
  typeof ReplicationProtectionContainersCreateInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainersCreateOutput =
  typeof ReplicationProtectionContainersCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainersDeleteInput =
  typeof ReplicationProtectionContainersDeleteInput.Type;

// Output Schema
export const ReplicationProtectionContainersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationProtectionContainersDeleteOutput =
  typeof ReplicationProtectionContainersDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainersDiscoverProtectableItemInput =
  typeof ReplicationProtectionContainersDiscoverProtectableItemInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainersDiscoverProtectableItemOutput =
  typeof ReplicationProtectionContainersDiscoverProtectableItemOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainersGetInput =
  typeof ReplicationProtectionContainersGetInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainersGetOutput =
  typeof ReplicationProtectionContainersGetOutput.Type;

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
export const ReplicationProtectionContainersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionContainers",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainersListInput =
  typeof ReplicationProtectionContainersListInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainersListOutput =
  typeof ReplicationProtectionContainersListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainersListByReplicationFabricsInput =
  typeof ReplicationProtectionContainersListByReplicationFabricsInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainersListByReplicationFabricsOutput =
  typeof ReplicationProtectionContainersListByReplicationFabricsOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainersSwitchClusterProtectionInput =
  typeof ReplicationProtectionContainersSwitchClusterProtectionInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainersSwitchClusterProtectionOutput =
  typeof ReplicationProtectionContainersSwitchClusterProtectionOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionContainersSwitchProtectionInput =
  typeof ReplicationProtectionContainersSwitchProtectionInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionContainersSwitchProtectionOutput =
  typeof ReplicationProtectionContainersSwitchProtectionOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionIntentsCreateInput =
  typeof ReplicationProtectionIntentsCreateInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionIntentsCreateOutput =
  typeof ReplicationProtectionIntentsCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionIntentsGetInput =
  typeof ReplicationProtectionIntentsGetInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionIntentsGetOutput =
  typeof ReplicationProtectionIntentsGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationProtectionIntentsListInput =
  typeof ReplicationProtectionIntentsListInput.Type;

// Output Schema
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
  });
export type ReplicationProtectionIntentsListOutput =
  typeof ReplicationProtectionIntentsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansCreateInput =
  typeof ReplicationRecoveryPlansCreateInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansCreateOutput =
  typeof ReplicationRecoveryPlansCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansDeleteInput =
  typeof ReplicationRecoveryPlansDeleteInput.Type;

// Output Schema
export const ReplicationRecoveryPlansDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationRecoveryPlansDeleteOutput =
  typeof ReplicationRecoveryPlansDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansFailoverCancelInput =
  typeof ReplicationRecoveryPlansFailoverCancelInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansFailoverCancelOutput =
  typeof ReplicationRecoveryPlansFailoverCancelOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansFailoverCommitInput =
  typeof ReplicationRecoveryPlansFailoverCommitInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansFailoverCommitOutput =
  typeof ReplicationRecoveryPlansFailoverCommitOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansGetInput =
  typeof ReplicationRecoveryPlansGetInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansGetOutput =
  typeof ReplicationRecoveryPlansGetOutput.Type;

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
export const ReplicationRecoveryPlansListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansListInput =
  typeof ReplicationRecoveryPlansListInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansListOutput =
  typeof ReplicationRecoveryPlansListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansPlannedFailoverInput =
  typeof ReplicationRecoveryPlansPlannedFailoverInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansPlannedFailoverOutput =
  typeof ReplicationRecoveryPlansPlannedFailoverOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansReprotectInput =
  typeof ReplicationRecoveryPlansReprotectInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansReprotectOutput =
  typeof ReplicationRecoveryPlansReprotectOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansTestFailoverInput =
  typeof ReplicationRecoveryPlansTestFailoverInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansTestFailoverOutput =
  typeof ReplicationRecoveryPlansTestFailoverOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansTestFailoverCleanupInput =
  typeof ReplicationRecoveryPlansTestFailoverCleanupInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansTestFailoverCleanupOutput =
  typeof ReplicationRecoveryPlansTestFailoverCleanupOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansUnplannedFailoverInput =
  typeof ReplicationRecoveryPlansUnplannedFailoverInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansUnplannedFailoverOutput =
  typeof ReplicationRecoveryPlansUnplannedFailoverOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryPlansUpdateInput =
  typeof ReplicationRecoveryPlansUpdateInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryPlansUpdateOutput =
  typeof ReplicationRecoveryPlansUpdateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryServicesProvidersCreateInput =
  typeof ReplicationRecoveryServicesProvidersCreateInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryServicesProvidersCreateOutput =
  typeof ReplicationRecoveryServicesProvidersCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryServicesProvidersDeleteInput =
  typeof ReplicationRecoveryServicesProvidersDeleteInput.Type;

// Output Schema
export const ReplicationRecoveryServicesProvidersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationRecoveryServicesProvidersDeleteOutput =
  typeof ReplicationRecoveryServicesProvidersDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryServicesProvidersGetInput =
  typeof ReplicationRecoveryServicesProvidersGetInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryServicesProvidersGetOutput =
  typeof ReplicationRecoveryServicesProvidersGetOutput.Type;

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
export const ReplicationRecoveryServicesProvidersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryServicesProviders",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryServicesProvidersListInput =
  typeof ReplicationRecoveryServicesProvidersListInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryServicesProvidersListOutput =
  typeof ReplicationRecoveryServicesProvidersListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryServicesProvidersListByReplicationFabricsInput =
  typeof ReplicationRecoveryServicesProvidersListByReplicationFabricsInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryServicesProvidersListByReplicationFabricsOutput =
  typeof ReplicationRecoveryServicesProvidersListByReplicationFabricsOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryServicesProvidersPurgeInput =
  typeof ReplicationRecoveryServicesProvidersPurgeInput.Type;

// Output Schema
export const ReplicationRecoveryServicesProvidersPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationRecoveryServicesProvidersPurgeOutput =
  typeof ReplicationRecoveryServicesProvidersPurgeOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationRecoveryServicesProvidersRefreshProviderInput =
  typeof ReplicationRecoveryServicesProvidersRefreshProviderInput.Type;

// Output Schema
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
  });
export type ReplicationRecoveryServicesProvidersRefreshProviderOutput =
  typeof ReplicationRecoveryServicesProvidersRefreshProviderOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationStorageClassificationMappingsCreateInput =
  typeof ReplicationStorageClassificationMappingsCreateInput.Type;

// Output Schema
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
  });
export type ReplicationStorageClassificationMappingsCreateOutput =
  typeof ReplicationStorageClassificationMappingsCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationStorageClassificationMappingsDeleteInput =
  typeof ReplicationStorageClassificationMappingsDeleteInput.Type;

// Output Schema
export const ReplicationStorageClassificationMappingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationStorageClassificationMappingsDeleteOutput =
  typeof ReplicationStorageClassificationMappingsDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationStorageClassificationMappingsGetInput =
  typeof ReplicationStorageClassificationMappingsGetInput.Type;

// Output Schema
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
  });
export type ReplicationStorageClassificationMappingsGetOutput =
  typeof ReplicationStorageClassificationMappingsGetOutput.Type;

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
export const ReplicationStorageClassificationMappingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationStorageClassificationMappings",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationStorageClassificationMappingsListInput =
  typeof ReplicationStorageClassificationMappingsListInput.Type;

// Output Schema
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
  });
export type ReplicationStorageClassificationMappingsListOutput =
  typeof ReplicationStorageClassificationMappingsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsInput =
  typeof ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsInput.Type;

// Output Schema
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
  });
export type ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOutput =
  typeof ReplicationStorageClassificationMappingsListByReplicationStorageClassificationsOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationStorageClassificationsGetInput =
  typeof ReplicationStorageClassificationsGetInput.Type;

// Output Schema
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
  });
export type ReplicationStorageClassificationsGetOutput =
  typeof ReplicationStorageClassificationsGetOutput.Type;

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
export const ReplicationStorageClassificationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationStorageClassifications",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationStorageClassificationsListInput =
  typeof ReplicationStorageClassificationsListInput.Type;

// Output Schema
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
  });
export type ReplicationStorageClassificationsListOutput =
  typeof ReplicationStorageClassificationsListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationStorageClassificationsListByReplicationFabricsInput =
  typeof ReplicationStorageClassificationsListByReplicationFabricsInput.Type;

// Output Schema
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
  });
export type ReplicationStorageClassificationsListByReplicationFabricsOutput =
  typeof ReplicationStorageClassificationsListByReplicationFabricsOutput.Type;

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
export const ReplicationVaultHealthGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultHealth",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationVaultHealthGetInput =
  typeof ReplicationVaultHealthGetInput.Type;

// Output Schema
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
  });
export type ReplicationVaultHealthGetOutput =
  typeof ReplicationVaultHealthGetOutput.Type;

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
export const ReplicationVaultHealthRefreshInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultHealth/default/refresh",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationVaultHealthRefreshInput =
  typeof ReplicationVaultHealthRefreshInput.Type;

// Output Schema
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
  });
export type ReplicationVaultHealthRefreshOutput =
  typeof ReplicationVaultHealthRefreshOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationVaultSettingCreateInput =
  typeof ReplicationVaultSettingCreateInput.Type;

// Output Schema
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
  });
export type ReplicationVaultSettingCreateOutput =
  typeof ReplicationVaultSettingCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationVaultSettingGetInput =
  typeof ReplicationVaultSettingGetInput.Type;

// Output Schema
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
  });
export type ReplicationVaultSettingGetOutput =
  typeof ReplicationVaultSettingGetOutput.Type;

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
export const ReplicationVaultSettingListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultSettings",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationVaultSettingListInput =
  typeof ReplicationVaultSettingListInput.Type;

// Output Schema
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
  });
export type ReplicationVaultSettingListOutput =
  typeof ReplicationVaultSettingListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationvCentersCreateInput =
  typeof ReplicationvCentersCreateInput.Type;

// Output Schema
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
  });
export type ReplicationvCentersCreateOutput =
  typeof ReplicationvCentersCreateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationvCentersDeleteInput =
  typeof ReplicationvCentersDeleteInput.Type;

// Output Schema
export const ReplicationvCentersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationvCentersDeleteOutput =
  typeof ReplicationvCentersDeleteOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationvCentersGetInput =
  typeof ReplicationvCentersGetInput.Type;

// Output Schema
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
  });
export type ReplicationvCentersGetOutput =
  typeof ReplicationvCentersGetOutput.Type;

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
export const ReplicationvCentersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationvCenters",
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationvCentersListInput =
  typeof ReplicationvCentersListInput.Type;

// Output Schema
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
  });
export type ReplicationvCentersListOutput =
  typeof ReplicationvCentersListOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationvCentersListByReplicationFabricsInput =
  typeof ReplicationvCentersListByReplicationFabricsInput.Type;

// Output Schema
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
  });
export type ReplicationvCentersListByReplicationFabricsOutput =
  typeof ReplicationvCentersListByReplicationFabricsOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type ReplicationvCentersUpdateInput =
  typeof ReplicationvCentersUpdateInput.Type;

// Output Schema
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
  });
export type ReplicationvCentersUpdateOutput =
  typeof ReplicationvCentersUpdateOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type SupportedOperatingSystemsGetInput =
  typeof SupportedOperatingSystemsGetInput.Type;

// Output Schema
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
  });
export type SupportedOperatingSystemsGetOutput =
  typeof SupportedOperatingSystemsGetOutput.Type;

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
      apiVersion: "2025-08-01",
    }),
  );
export type TargetComputeSizesListByReplicationProtectedItemsInput =
  typeof TargetComputeSizesListByReplicationProtectedItemsInput.Type;

// Output Schema
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
  });
export type TargetComputeSizesListByReplicationProtectedItemsOutput =
  typeof TargetComputeSizesListByReplicationProtectedItemsOutput.Type;

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
