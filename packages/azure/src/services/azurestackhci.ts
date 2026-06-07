/**
 * Azure Azurestackhci API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ArcSettingsConsentAndInstallDefaultExtensionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    arcSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/consentAndInstallDefaultExtensions",
      apiVersion: "2026-02-01",
    }),
  );
export type ArcSettingsConsentAndInstallDefaultExtensionsInput =
  typeof ArcSettingsConsentAndInstallDefaultExtensionsInput.Type;

// Output Schema
export const ArcSettingsConsentAndInstallDefaultExtensionsOutput =
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
export type ArcSettingsConsentAndInstallDefaultExtensionsOutput =
  typeof ArcSettingsConsentAndInstallDefaultExtensionsOutput.Type;

// The operation
/**
 * Add consent time for default extensions and initiate extensions installation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 */
export const ArcSettingsConsentAndInstallDefaultExtensions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArcSettingsConsentAndInstallDefaultExtensionsInput,
    outputSchema: ArcSettingsConsentAndInstallDefaultExtensionsOutput,
  }));
// Input Schema
export const ArcSettingsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    arcSettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Error",
            "Succeeded",
            "Failed",
            "Canceled",
            "Connected",
            "Disconnected",
            "Deleted",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
            "PartiallySucceeded",
            "PartiallyConnected",
            "InProgress",
            "Accepted",
            "Provisioning",
            "DisableInProgress",
          ]),
        ),
        arcInstanceResourceGroup: Schema.optional(Schema.String),
        arcApplicationClientId: Schema.optional(Schema.String),
        arcApplicationTenantId: Schema.optional(Schema.String),
        arcServicePrincipalObjectId: Schema.optional(Schema.String),
        arcApplicationObjectId: Schema.optional(Schema.String),
        aggregateState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Error",
            "Succeeded",
            "Canceled",
            "Failed",
            "Connected",
            "Disconnected",
            "Deleted",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
            "PartiallySucceeded",
            "PartiallyConnected",
            "InProgress",
            "Accepted",
            "Provisioning",
            "DisableInProgress",
          ]),
        ),
        perNodeDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              arcInstance: Schema.optional(Schema.String),
              arcNodeServicePrincipalObjectId: Schema.optional(Schema.String),
              state: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "Error",
                  "Succeeded",
                  "Canceled",
                  "Failed",
                  "Connected",
                  "Disconnected",
                  "Deleted",
                  "Creating",
                  "Updating",
                  "Deleting",
                  "Moving",
                  "PartiallySucceeded",
                  "PartiallyConnected",
                  "InProgress",
                  "Accepted",
                  "Provisioning",
                  "DisableInProgress",
                ]),
              ),
            }),
          ),
        ),
        connectivityProperties: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            serviceConfigurations: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  serviceName: Schema.Literals(["WAC"]),
                  port: Schema.Number,
                }),
              ),
            ),
          }),
        ),
        defaultExtensions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              category: Schema.optional(Schema.String),
              consentTime: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}",
    apiVersion: "2026-02-01",
  }),
);
export type ArcSettingsCreateInput = typeof ArcSettingsCreateInput.Type;

// Output Schema
export const ArcSettingsCreateOutput =
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
export type ArcSettingsCreateOutput = typeof ArcSettingsCreateOutput.Type;

// The operation
/**
 * Create ArcSetting for HCI cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 */
export const ArcSettingsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArcSettingsCreateInput,
  outputSchema: ArcSettingsCreateOutput,
}));
// Input Schema
export const ArcSettingsCreateIdentityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    arcSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/createArcIdentity",
      apiVersion: "2026-02-01",
    }),
  );
export type ArcSettingsCreateIdentityInput =
  typeof ArcSettingsCreateIdentityInput.Type;

// Output Schema
export const ArcSettingsCreateIdentityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        arcApplicationClientId: Schema.optional(Schema.String),
        arcApplicationTenantId: Schema.optional(Schema.String),
        arcServicePrincipalObjectId: Schema.optional(Schema.String),
        arcApplicationObjectId: Schema.optional(Schema.String),
      }),
    ),
  });
export type ArcSettingsCreateIdentityOutput =
  typeof ArcSettingsCreateIdentityOutput.Type;

// The operation
/**
 * Create Aad identity for arc settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 */
export const ArcSettingsCreateIdentity = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArcSettingsCreateIdentityInput,
    outputSchema: ArcSettingsCreateIdentityOutput,
  }),
);
// Input Schema
export const ArcSettingsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    arcSettingName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}",
    apiVersion: "2026-02-01",
  }),
);
export type ArcSettingsDeleteInput = typeof ArcSettingsDeleteInput.Type;

// Output Schema
export const ArcSettingsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ArcSettingsDeleteOutput = typeof ArcSettingsDeleteOutput.Type;

// The operation
/**
 * Delete ArcSetting resource details of HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 */
export const ArcSettingsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArcSettingsDeleteInput,
  outputSchema: ArcSettingsDeleteOutput,
}));
// Input Schema
export const ArcSettingsGeneratePasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    arcSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/generatePassword",
      apiVersion: "2026-02-01",
    }),
  );
export type ArcSettingsGeneratePasswordInput =
  typeof ArcSettingsGeneratePasswordInput.Type;

// Output Schema
export const ArcSettingsGeneratePasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretText: Schema.optional(Schema.String),
    keyId: Schema.optional(Schema.String),
    startDateTime: Schema.optional(Schema.String),
    endDateTime: Schema.optional(Schema.String),
  });
export type ArcSettingsGeneratePasswordOutput =
  typeof ArcSettingsGeneratePasswordOutput.Type;

// The operation
/**
 * Generate password for arc settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 */
export const ArcSettingsGeneratePassword = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArcSettingsGeneratePasswordInput,
    outputSchema: ArcSettingsGeneratePasswordOutput,
  }),
);
// Input Schema
export const ArcSettingsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  arcSettingName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}",
    apiVersion: "2026-02-01",
  }),
);
export type ArcSettingsGetInput = typeof ArcSettingsGetInput.Type;

// Output Schema
export const ArcSettingsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ArcSettingsGetOutput = typeof ArcSettingsGetOutput.Type;

// The operation
/**
 * Get ArcSetting resource details of HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 */
export const ArcSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArcSettingsGetInput,
  outputSchema: ArcSettingsGetOutput,
}));
// Input Schema
export const ArcSettingsInitializeDisableProcessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    arcSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/initializeDisableProcess",
      apiVersion: "2026-02-01",
    }),
  );
export type ArcSettingsInitializeDisableProcessInput =
  typeof ArcSettingsInitializeDisableProcessInput.Type;

// Output Schema
export const ArcSettingsInitializeDisableProcessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ArcSettingsInitializeDisableProcessOutput =
  typeof ArcSettingsInitializeDisableProcessOutput.Type;

// The operation
/**
 * Initializes ARC Disable process on the cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 */
export const ArcSettingsInitializeDisableProcess =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArcSettingsInitializeDisableProcessInput,
    outputSchema: ArcSettingsInitializeDisableProcessOutput,
  }));
// Input Schema
export const ArcSettingsListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings",
      apiVersion: "2026-02-01",
    }),
  );
export type ArcSettingsListByClusterInput =
  typeof ArcSettingsListByClusterInput.Type;

// Output Schema
export const ArcSettingsListByClusterOutput =
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
export type ArcSettingsListByClusterOutput =
  typeof ArcSettingsListByClusterOutput.Type;

// The operation
/**
 * Get ArcSetting resources of HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ArcSettingsListByCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArcSettingsListByClusterInput,
    outputSchema: ArcSettingsListByClusterOutput,
  }),
);
// Input Schema
export const ArcSettingsReconcileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    arcSettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        clusterNodes: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/reconcile",
      apiVersion: "2026-02-01",
    }),
  );
export type ArcSettingsReconcileInput = typeof ArcSettingsReconcileInput.Type;

// Output Schema
export const ArcSettingsReconcileOutput =
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
export type ArcSettingsReconcileOutput = typeof ArcSettingsReconcileOutput.Type;

// The operation
/**
 * Reconcile Arc Settings with information related to all nodes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 */
export const ArcSettingsReconcile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArcSettingsReconcileInput,
    outputSchema: ArcSettingsReconcileOutput,
  }),
);
// Input Schema
export const ArcSettingsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    arcSettingName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        connectivityProperties: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            serviceConfigurations: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  serviceName: Schema.Literals(["WAC"]),
                  port: Schema.Number,
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}",
    apiVersion: "2026-02-01",
  }),
);
export type ArcSettingsUpdateInput = typeof ArcSettingsUpdateInput.Type;

// Output Schema
export const ArcSettingsUpdateOutput =
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
export type ArcSettingsUpdateOutput = typeof ArcSettingsUpdateOutput.Type;

// The operation
/**
 * Update ArcSettings for HCI cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 */
export const ArcSettingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArcSettingsUpdateInput,
  outputSchema: ArcSettingsUpdateOutput,
}));
// Input Schema
export const ClustersConfigureRemoteSupportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        accessLevel: Schema.optional(
          Schema.Literals(["Diagnostics", "DiagnosticsAndRepair"]),
        ),
        expirationTimeStamp: Schema.optional(Schema.String),
        remoteSupportType: Schema.optional(
          Schema.Literals(["Enable", "Revoke"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/configureRemoteSupport",
      apiVersion: "2026-02-01",
    }),
  );
export type ClustersConfigureRemoteSupportInput =
  typeof ClustersConfigureRemoteSupportInput.Type;

// Output Schema
export const ClustersConfigureRemoteSupportOutput =
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
export type ClustersConfigureRemoteSupportOutput =
  typeof ClustersConfigureRemoteSupportOutput.Type;

// The operation
/**
 * Configure RemoteSupport on a cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersConfigureRemoteSupport =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersConfigureRemoteSupportInput,
    outputSchema: ClustersConfigureRemoteSupportOutput,
  }));
// Input Schema
export const ClustersCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Error",
          "Succeeded",
          "Failed",
          "Canceled",
          "Connected",
          "Disconnected",
          "Deleted",
          "Creating",
          "Updating",
          "Deleting",
          "Moving",
          "PartiallySucceeded",
          "PartiallyConnected",
          "InProgress",
          "Accepted",
          "Provisioning",
          "DisableInProgress",
        ]),
      ),
      status: Schema.optional(
        Schema.Literals([
          "NotYetRegistered",
          "ConnectedRecently",
          "NotConnectedRecently",
          "Disconnected",
          "Error",
          "NotSpecified",
          "ValidationInProgress",
          "ValidationSuccess",
          "ValidationFailed",
          "DeploymentInProgress",
          "DeploymentFailed",
          "DeploymentSuccess",
        ]),
      ),
      connectivityStatus: Schema.optional(
        Schema.Literals([
          "NotYetRegistered",
          "Connected",
          "NotConnectedRecently",
          "PartiallyConnected",
          "Disconnected",
          "NotSpecified",
        ]),
      ),
      cloudId: Schema.optional(Schema.String),
      cloudManagementEndpoint: Schema.optional(Schema.String),
      aadClientId: Schema.optional(Schema.String),
      aadTenantId: Schema.optional(Schema.String),
      aadApplicationObjectId: Schema.optional(Schema.String),
      aadServicePrincipalObjectId: Schema.optional(Schema.String),
      softwareAssuranceProperties: Schema.optional(
        Schema.Struct({
          softwareAssuranceStatus: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          softwareAssuranceIntent: Schema.optional(
            Schema.Literals(["Enable", "Disable"]),
          ),
          lastUpdated: Schema.optional(Schema.String),
        }),
      ),
      isManagementCluster: Schema.optional(Schema.Boolean),
      logCollectionProperties: Schema.optional(
        Schema.Struct({
          fromDate: Schema.optional(Schema.String),
          toDate: Schema.optional(Schema.String),
          lastLogGenerated: Schema.optional(Schema.String),
          logCollectionSessionDetails: Schema.optional(
            Schema.Array(
              Schema.Struct({
                logStartTime: Schema.optional(Schema.String),
                logEndTime: Schema.optional(Schema.String),
                timeCollected: Schema.optional(Schema.String),
                logSize: Schema.optional(Schema.Number),
                logCollectionStatus: Schema.optional(
                  Schema.Literals([
                    "None",
                    "InProgress",
                    "Failed",
                    "Succeeded",
                  ]),
                ),
                correlationId: Schema.optional(Schema.String),
                logCollectionJobType: Schema.optional(
                  Schema.Literals(["OnDemand", "Scheduled"]),
                ),
                endTimeCollected: Schema.optional(Schema.String),
                logCollectionError: Schema.optional(
                  Schema.Struct({
                    errorCode: Schema.optional(Schema.String),
                    errorMessage: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
        }),
      ),
      remoteSupportProperties: Schema.optional(
        Schema.Struct({
          accessLevel: Schema.optional(
            Schema.Literals(["Diagnostics", "DiagnosticsAndRepair"]),
          ),
          expirationTimeStamp: Schema.optional(Schema.String),
          remoteSupportType: Schema.optional(
            Schema.Literals(["Enable", "Revoke"]),
          ),
          remoteSupportNodeSettings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                arcResourceId: Schema.optional(Schema.String),
                state: Schema.optional(Schema.String),
                createdAt: Schema.optional(Schema.String),
                updatedAt: Schema.optional(Schema.String),
                connectionStatus: Schema.optional(Schema.String),
                connectionErrorMessage: Schema.optional(Schema.String),
                transcriptLocation: Schema.optional(Schema.String),
              }),
            ),
          ),
          remoteSupportSessionDetails: Schema.optional(
            Schema.Array(
              Schema.Struct({
                sessionStartTime: Schema.optional(Schema.String),
                sessionEndTime: Schema.optional(Schema.String),
                nodeName: Schema.optional(Schema.String),
                duration: Schema.optional(Schema.Number),
                accessLevel: Schema.optional(
                  Schema.Literals(["Diagnostics", "DiagnosticsAndRepair"]),
                ),
              }),
            ),
          ),
        }),
      ),
      desiredProperties: Schema.optional(
        Schema.Struct({
          windowsServerSubscription: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
          diagnosticLevel: Schema.optional(
            Schema.Literals(["Off", "Basic", "Enhanced"]),
          ),
        }),
      ),
      reportedProperties: Schema.optional(
        Schema.Struct({
          clusterName: Schema.optional(Schema.String),
          clusterId: Schema.optional(Schema.String),
          clusterVersion: Schema.optional(Schema.String),
          nodes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                id: Schema.optional(Schema.Number),
                windowsServerSubscription: Schema.optional(
                  Schema.Literals(["Disabled", "Enabled"]),
                ),
                nodeType: Schema.optional(
                  Schema.Literals(["FirstParty", "ThirdParty"]),
                ),
                ehcResourceId: Schema.optional(Schema.String),
                manufacturer: Schema.optional(Schema.String),
                model: Schema.optional(Schema.String),
                osName: Schema.optional(Schema.String),
                osVersion: Schema.optional(Schema.String),
                osDisplayVersion: Schema.optional(Schema.String),
                serialNumber: Schema.optional(Schema.String),
                coreCount: Schema.optional(Schema.Number),
                memoryInGiB: Schema.optional(Schema.Number),
                lastLicensingTimestamp: Schema.optional(Schema.String),
                oemActivation: Schema.optional(
                  Schema.Literals(["Disabled", "Enabled"]),
                ),
              }),
            ),
          ),
          lastUpdated: Schema.optional(Schema.String),
          msiExpirationTimeStamp: Schema.optional(Schema.String),
          imdsAttestation: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
          diagnosticLevel: Schema.optional(
            Schema.Literals(["Off", "Basic", "Enhanced"]),
          ),
          supportedCapabilities: Schema.optional(Schema.Array(Schema.String)),
          clusterType: Schema.optional(
            Schema.Literals(["FirstParty", "ThirdParty"]),
          ),
          manufacturer: Schema.optional(Schema.String),
          oemActivation: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
          hardwareClass: Schema.optional(
            Schema.Literals(["Small", "Medium", "Large"]),
          ),
        }),
      ),
      isolatedVmAttestationConfiguration: Schema.optional(
        Schema.Struct({
          attestationResourceId: Schema.optional(Schema.String),
          relyingPartyServiceEndpoint: Schema.optional(Schema.String),
          attestationServiceEndpoint: Schema.optional(Schema.String),
        }),
      ),
      trialDaysRemaining: Schema.optional(Schema.Number),
      billingModel: Schema.optional(Schema.String),
      registrationTimestamp: Schema.optional(Schema.String),
      lastSyncTimestamp: Schema.optional(Schema.String),
      lastBillingTimestamp: Schema.optional(Schema.String),
      serviceEndpoint: Schema.optional(Schema.String),
      resourceProviderObjectId: Schema.optional(Schema.String),
      secretsLocations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            secretsType: Schema.Literals(["BackupSecrets"]),
            secretsLocation: Schema.String,
          }),
        ),
      ),
      clusterPattern: Schema.optional(
        Schema.Literals(["Standard", "RackAware"]),
      ),
      localAvailabilityZones: Schema.optional(
        Schema.Array(
          Schema.Struct({
            localAvailabilityZoneName: Schema.optional(Schema.String),
            nodes: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      ),
      identityProvider: Schema.optional(
        Schema.Literals(["ActiveDirectory", "LocalIdentity"]),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}",
    apiVersion: "2026-02-01",
  }),
);
export type ClustersCreateInput = typeof ClustersCreateInput.Type;

// Output Schema
export const ClustersCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ClustersCreateOutput = typeof ClustersCreateOutput.Type;

// The operation
/**
 * Create an HCI cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersCreateInput,
  outputSchema: ClustersCreateOutput,
}));
// Input Schema
export const ClustersCreateIdentityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/createClusterIdentity",
      apiVersion: "2026-02-01",
    }),
  );
export type ClustersCreateIdentityInput =
  typeof ClustersCreateIdentityInput.Type;

// Output Schema
export const ClustersCreateIdentityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        aadClientId: Schema.optional(Schema.String),
        aadTenantId: Schema.optional(Schema.String),
        aadServicePrincipalObjectId: Schema.optional(Schema.String),
        aadApplicationObjectId: Schema.optional(Schema.String),
      }),
    ),
  });
export type ClustersCreateIdentityOutput =
  typeof ClustersCreateIdentityOutput.Type;

// The operation
/**
 * Create cluster identity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersCreateIdentity = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersCreateIdentityInput,
    outputSchema: ClustersCreateIdentityOutput,
  }),
);
// Input Schema
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}",
    apiVersion: "2026-02-01",
  }),
);
export type ClustersDeleteInput = typeof ClustersDeleteInput.Type;

// Output Schema
export const ClustersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersDeleteOutput = typeof ClustersDeleteOutput.Type;

// The operation
/**
 * Delete an HCI cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export const ClustersExtendSoftwareAssuranceBenefitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        softwareAssuranceIntent: Schema.optional(
          Schema.Literals(["Enable", "Disable"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/extendSoftwareAssuranceBenefit",
      apiVersion: "2026-02-01",
    }),
  );
export type ClustersExtendSoftwareAssuranceBenefitInput =
  typeof ClustersExtendSoftwareAssuranceBenefitInput.Type;

// Output Schema
export const ClustersExtendSoftwareAssuranceBenefitOutput =
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
export type ClustersExtendSoftwareAssuranceBenefitOutput =
  typeof ClustersExtendSoftwareAssuranceBenefitOutput.Type;

// The operation
/**
 * Extends Software Assurance Benefit to a cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersExtendSoftwareAssuranceBenefit =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersExtendSoftwareAssuranceBenefitInput,
    outputSchema: ClustersExtendSoftwareAssuranceBenefitOutput,
  }));
// Input Schema
export const ClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}",
    apiVersion: "2026-02-01",
  }),
);
export type ClustersGetInput = typeof ClustersGetInput.Type;

// Output Schema
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
});
export type ClustersGetOutput = typeof ClustersGetOutput.Type;

// The operation
/**
 * Get HCI cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters",
      apiVersion: "2026-02-01",
    }),
  );
export type ClustersListByResourceGroupInput =
  typeof ClustersListByResourceGroupInput.Type;

// Output Schema
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
  });
export type ClustersListByResourceGroupOutput =
  typeof ClustersListByResourceGroupOutput.Type;

// The operation
/**
 * List all HCI clusters in a resource group.
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
export const ClustersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/clusters",
      apiVersion: "2026-02-01",
    }),
  );
export type ClustersListBySubscriptionInput =
  typeof ClustersListBySubscriptionInput.Type;

// Output Schema
export const ClustersListBySubscriptionOutput =
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
export type ClustersListBySubscriptionOutput =
  typeof ClustersListBySubscriptionOutput.Type;

// The operation
/**
 * List all HCI clusters in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ClustersListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListBySubscriptionInput,
    outputSchema: ClustersListBySubscriptionOutput,
  }),
);
// Input Schema
export const ClustersTriggerLogCollectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        fromDate: Schema.String,
        toDate: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/triggerLogCollection",
      apiVersion: "2026-02-01",
    }),
  );
export type ClustersTriggerLogCollectionInput =
  typeof ClustersTriggerLogCollectionInput.Type;

// Output Schema
export const ClustersTriggerLogCollectionOutput =
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
export type ClustersTriggerLogCollectionOutput =
  typeof ClustersTriggerLogCollectionOutput.Type;

// The operation
/**
 * Trigger Log Collection on a cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersTriggerLogCollection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersTriggerLogCollectionInput,
    outputSchema: ClustersTriggerLogCollectionOutput,
  }));
// Input Schema
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
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
      cloudManagementEndpoint: Schema.optional(Schema.String),
      aadClientId: Schema.optional(Schema.String),
      aadTenantId: Schema.optional(Schema.String),
      desiredProperties: Schema.optional(
        Schema.Struct({
          windowsServerSubscription: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
          diagnosticLevel: Schema.optional(
            Schema.Literals(["Off", "Basic", "Enhanced"]),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}",
    apiVersion: "2026-02-01",
  }),
);
export type ClustersUpdateInput = typeof ClustersUpdateInput.Type;

// Output Schema
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
});
export type ClustersUpdateOutput = typeof ClustersUpdateOutput.Type;

// The operation
/**
 * Update an HCI cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export const ClustersUpdateSecretsLocationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Array(
        Schema.Struct({
          secretsType: Schema.Literals(["BackupSecrets"]),
          secretsLocation: Schema.String,
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updateSecretsLocations",
      apiVersion: "2026-02-01",
    }),
  );
export type ClustersUpdateSecretsLocationsInput =
  typeof ClustersUpdateSecretsLocationsInput.Type;

// Output Schema
export const ClustersUpdateSecretsLocationsOutput =
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
export type ClustersUpdateSecretsLocationsOutput =
  typeof ClustersUpdateSecretsLocationsOutput.Type;

// The operation
/**
 * Update cluster secrets locations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersUpdateSecretsLocations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersUpdateSecretsLocationsInput,
    outputSchema: ClustersUpdateSecretsLocationsOutput,
  }));
// Input Schema
export const ClustersUploadCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        certificates: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/uploadCertificate",
      apiVersion: "2026-02-01",
    }),
  );
export type ClustersUploadCertificateInput =
  typeof ClustersUploadCertificateInput.Type;

// Output Schema
export const ClustersUploadCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersUploadCertificateOutput =
  typeof ClustersUploadCertificateOutput.Type;

// The operation
/**
 * Upload certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersUploadCertificate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersUploadCertificateInput,
    outputSchema: ClustersUploadCertificateOutput,
  }),
);
// Input Schema
export const DeploymentSettingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    deploymentSettingsName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Error",
            "Succeeded",
            "Failed",
            "Canceled",
            "Connected",
            "Disconnected",
            "Deleted",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
            "PartiallySucceeded",
            "PartiallyConnected",
            "InProgress",
            "Accepted",
            "Provisioning",
            "DisableInProgress",
          ]),
        ),
        arcNodeResourceIds: Schema.Array(Schema.String),
        deploymentMode: Schema.Literals(["Validate", "Deploy"]),
        operationType: Schema.optional(
          Schema.Literals(["ClusterProvisioning", "ClusterUpgrade"]),
        ),
        deploymentConfiguration: Schema.Struct({
          version: Schema.optional(Schema.String),
          scaleUnits: Schema.Array(
            Schema.Struct({
              deploymentData: Schema.Struct({
                securitySettings: Schema.optional(
                  Schema.Struct({
                    hvciProtection: Schema.optional(Schema.Boolean),
                    drtmProtection: Schema.optional(Schema.Boolean),
                    driftControlEnforced: Schema.optional(Schema.Boolean),
                    credentialGuardEnforced: Schema.optional(Schema.Boolean),
                    smbSigningEnforced: Schema.optional(Schema.Boolean),
                    smbClusterEncryption: Schema.optional(Schema.Boolean),
                    sideChannelMitigationEnforced: Schema.optional(
                      Schema.Boolean,
                    ),
                    bitlockerBootVolume: Schema.optional(Schema.Boolean),
                    bitlockerDataVolumes: Schema.optional(Schema.Boolean),
                    wdacEnforced: Schema.optional(Schema.Boolean),
                  }),
                ),
                observability: Schema.optional(
                  Schema.Struct({
                    streamingDataClient: Schema.optional(Schema.Boolean),
                    euLocation: Schema.optional(Schema.Boolean),
                    episodicDataUpload: Schema.optional(Schema.Boolean),
                  }),
                ),
                cluster: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    witnessType: Schema.optional(Schema.String),
                    witnessPath: Schema.optional(Schema.String),
                    cloudAccountName: Schema.optional(Schema.String),
                    azureServiceEndpoint: Schema.optional(Schema.String),
                    hardwareClass: Schema.optional(
                      Schema.Literals(["Small", "Medium", "Large"]),
                    ),
                    clusterPattern: Schema.optional(
                      Schema.Literals(["Standard", "RackAware"]),
                    ),
                  }),
                ),
                identityProvider: Schema.optional(
                  Schema.Literals(["ActiveDirectory", "LocalIdentity"]),
                ),
                storage: Schema.optional(
                  Schema.Struct({
                    configurationMode: Schema.optional(Schema.String),
                  }),
                ),
                namingPrefix: Schema.optional(Schema.String),
                domainFqdn: Schema.optional(Schema.String),
                infrastructureNetwork: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      subnetMask: Schema.optional(Schema.String),
                      gateway: Schema.optional(Schema.String),
                      ipPools: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            startingAddress: Schema.optional(Schema.String),
                            endingAddress: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      dnsServerConfig: Schema.optional(
                        Schema.Literals(["UseDnsServer", "UseForwarder"]),
                      ),
                      dnsZones: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            dnsZoneName: Schema.optional(Schema.String),
                            dnsForwarder: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                      ),
                      dnsServers: Schema.optional(Schema.Array(Schema.String)),
                      useDhcp: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
                physicalNodes: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      ipv4Address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                hostNetwork: Schema.optional(
                  Schema.Struct({
                    intents: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          trafficType: Schema.optional(
                            Schema.Array(Schema.String),
                          ),
                          adapter: Schema.optional(Schema.Array(Schema.String)),
                          overrideVirtualSwitchConfiguration: Schema.optional(
                            Schema.Boolean,
                          ),
                          virtualSwitchConfigurationOverrides: Schema.optional(
                            Schema.Struct({
                              enableIov: Schema.optional(Schema.String),
                              loadBalancingAlgorithm: Schema.optional(
                                Schema.String,
                              ),
                            }),
                          ),
                          overrideQosPolicy: Schema.optional(Schema.Boolean),
                          qosPolicyOverrides: Schema.optional(
                            Schema.Struct({
                              priorityValue8021Action_Cluster: Schema.optional(
                                Schema.String,
                              ),
                              priorityValue8021Action_SMB: Schema.optional(
                                Schema.String,
                              ),
                              bandwidthPercentage_SMB: Schema.optional(
                                Schema.String,
                              ),
                            }),
                          ),
                          overrideAdapterProperty: Schema.optional(
                            Schema.Boolean,
                          ),
                          adapterPropertyOverrides: Schema.optional(
                            Schema.Struct({
                              jumboPacket: Schema.optional(Schema.String),
                              networkDirect: Schema.optional(Schema.String),
                              networkDirectTechnology: Schema.optional(
                                Schema.String,
                              ),
                            }),
                          ),
                        }),
                      ),
                    ),
                    storageNetworks: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          networkAdapterName: Schema.optional(Schema.String),
                          vlanId: Schema.optional(Schema.String),
                          storageAdapterIPInfo: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                physicalNode: Schema.optional(Schema.String),
                                ipv4Address: Schema.optional(Schema.String),
                                subnetMask: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                    storageConnectivitySwitchless: Schema.optional(
                      Schema.Boolean,
                    ),
                    enableStorageAutoIp: Schema.optional(Schema.Boolean),
                  }),
                ),
                sdnIntegration: Schema.optional(
                  Schema.Struct({
                    networkController: Schema.optional(
                      Schema.Struct({
                        macAddressPoolStart: Schema.optional(Schema.String),
                        macAddressPoolStop: Schema.optional(Schema.String),
                        networkVirtualizationEnabled: Schema.optional(
                          Schema.Boolean,
                        ),
                      }),
                    ),
                  }),
                ),
                isManagementCluster: Schema.optional(Schema.Boolean),
                adouPath: Schema.optional(Schema.String),
                secretsLocation: Schema.optional(Schema.String),
                secrets: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      secretName: Schema.optional(Schema.String),
                      eceSecretName: Schema.optional(
                        Schema.Literals([
                          "AzureStackLCMUserCredential",
                          "DefaultARBApplication",
                          "LocalAdminCredential",
                          "WitnessStorageKey",
                        ]),
                      ),
                      secretLocation: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                optionalServices: Schema.optional(
                  Schema.Struct({
                    customLocation: Schema.optional(Schema.String),
                  }),
                ),
                localAvailabilityZones: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      localAvailabilityZoneName: Schema.optional(Schema.String),
                      nodes: Schema.optional(Schema.Array(Schema.String)),
                    }),
                  ),
                ),
                assemblyInfo: Schema.optional(
                  Schema.Struct({
                    packageVersion: Schema.optional(Schema.String),
                    payload: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          identifier: Schema.optional(Schema.String),
                          hash: Schema.optional(Schema.String),
                          fileName: Schema.optional(Schema.String),
                          url: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
              sbePartnerInfo: Schema.optional(
                Schema.Struct({
                  sbeDeploymentInfo: Schema.optional(
                    Schema.Struct({
                      version: Schema.optional(Schema.String),
                      family: Schema.optional(Schema.String),
                      publisher: Schema.optional(Schema.String),
                      sbeManifestSource: Schema.optional(Schema.String),
                      sbeManifestCreationDate: Schema.optional(Schema.String),
                    }),
                  ),
                  partnerProperties: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  credentialList: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        secretName: Schema.optional(Schema.String),
                        eceSecretName: Schema.optional(Schema.String),
                        secretLocation: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
        }),
        reportedProperties: Schema.optional(
          Schema.Struct({
            validationStatus: Schema.optional(
              Schema.Struct({
                status: Schema.optional(Schema.String),
                steps: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      description: Schema.optional(Schema.String),
                      fullStepIndex: Schema.optional(Schema.String),
                      startTimeUtc: Schema.optional(Schema.String),
                      endTimeUtc: Schema.optional(Schema.String),
                      status: Schema.optional(Schema.String),
                      steps: Schema.optional(Schema.Array(Schema.Unknown)),
                      exception: Schema.optional(Schema.Array(Schema.String)),
                    }),
                  ),
                ),
              }),
            ),
            deploymentStatus: Schema.optional(
              Schema.Struct({
                status: Schema.optional(Schema.String),
                steps: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      description: Schema.optional(Schema.String),
                      fullStepIndex: Schema.optional(Schema.String),
                      startTimeUtc: Schema.optional(Schema.String),
                      endTimeUtc: Schema.optional(Schema.String),
                      status: Schema.optional(Schema.String),
                      steps: Schema.optional(Schema.Array(Schema.Unknown)),
                      exception: Schema.optional(Schema.Array(Schema.String)),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/deploymentSettings/{deploymentSettingsName}",
      apiVersion: "2026-02-01",
    }),
  );
export type DeploymentSettingsCreateOrUpdateInput =
  typeof DeploymentSettingsCreateOrUpdateInput.Type;

// Output Schema
export const DeploymentSettingsCreateOrUpdateOutput =
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
export type DeploymentSettingsCreateOrUpdateOutput =
  typeof DeploymentSettingsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a DeploymentSetting
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param deploymentSettingsName - Name of Deployment Setting
 */
export const DeploymentSettingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeploymentSettingsCreateOrUpdateInput,
    outputSchema: DeploymentSettingsCreateOrUpdateOutput,
  }));
// Input Schema
export const DeploymentSettingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    deploymentSettingsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/deploymentSettings/{deploymentSettingsName}",
      apiVersion: "2026-02-01",
    }),
  );
export type DeploymentSettingsDeleteInput =
  typeof DeploymentSettingsDeleteInput.Type;

// Output Schema
export const DeploymentSettingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentSettingsDeleteOutput =
  typeof DeploymentSettingsDeleteOutput.Type;

// The operation
/**
 * Delete a DeploymentSetting
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param deploymentSettingsName - Name of Deployment Setting
 */
export const DeploymentSettingsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentSettingsDeleteInput,
    outputSchema: DeploymentSettingsDeleteOutput,
  }),
);
// Input Schema
export const DeploymentSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    deploymentSettingsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/deploymentSettings/{deploymentSettingsName}",
      apiVersion: "2026-02-01",
    }),
  );
export type DeploymentSettingsGetInput = typeof DeploymentSettingsGetInput.Type;

// Output Schema
export const DeploymentSettingsGetOutput =
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
export type DeploymentSettingsGetOutput =
  typeof DeploymentSettingsGetOutput.Type;

// The operation
/**
 * Get a DeploymentSetting
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param deploymentSettingsName - Name of Deployment Setting
 */
export const DeploymentSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentSettingsGetInput,
    outputSchema: DeploymentSettingsGetOutput,
  }),
);
// Input Schema
export const DeploymentSettingsListByClustersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/deploymentSettings",
      apiVersion: "2026-02-01",
    }),
  );
export type DeploymentSettingsListByClustersInput =
  typeof DeploymentSettingsListByClustersInput.Type;

// Output Schema
export const DeploymentSettingsListByClustersOutput =
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
export type DeploymentSettingsListByClustersOutput =
  typeof DeploymentSettingsListByClustersOutput.Type;

// The operation
/**
 * List DeploymentSetting resources by Clusters
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const DeploymentSettingsListByClusters =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeploymentSettingsListByClustersInput,
    outputSchema: DeploymentSettingsListByClustersOutput,
  }));
// Input Schema
export const EdgeDeviceJobsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
    jobsName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["HCI"]),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}/jobs/{jobsName}",
      apiVersion: "2026-02-01",
    }),
  );
export type EdgeDeviceJobsCreateOrUpdateInput =
  typeof EdgeDeviceJobsCreateOrUpdateInput.Type;

// Output Schema
export const EdgeDeviceJobsCreateOrUpdateOutput =
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
export type EdgeDeviceJobsCreateOrUpdateOutput =
  typeof EdgeDeviceJobsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a EdgeDeviceJob
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param edgeDeviceName - Name of Device
 * @param jobsName - Name of EdgeDevice Job
 */
export const EdgeDeviceJobsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EdgeDeviceJobsCreateOrUpdateInput,
    outputSchema: EdgeDeviceJobsCreateOrUpdateOutput,
  }));
// Input Schema
export const EdgeDeviceJobsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
    jobsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}/jobs/{jobsName}",
      apiVersion: "2026-02-01",
    }),
  );
export type EdgeDeviceJobsDeleteInput = typeof EdgeDeviceJobsDeleteInput.Type;

// Output Schema
export const EdgeDeviceJobsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EdgeDeviceJobsDeleteOutput = typeof EdgeDeviceJobsDeleteOutput.Type;

// The operation
/**
 * Delete a EdgeDeviceJob
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param edgeDeviceName - Name of Device
 * @param jobsName - Name of EdgeDevice Job
 */
export const EdgeDeviceJobsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EdgeDeviceJobsDeleteInput,
    outputSchema: EdgeDeviceJobsDeleteOutput,
  }),
);
// Input Schema
export const EdgeDeviceJobsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
    jobsName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}/jobs/{jobsName}",
    apiVersion: "2026-02-01",
  }),
);
export type EdgeDeviceJobsGetInput = typeof EdgeDeviceJobsGetInput.Type;

// Output Schema
export const EdgeDeviceJobsGetOutput =
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
export type EdgeDeviceJobsGetOutput = typeof EdgeDeviceJobsGetOutput.Type;

// The operation
/**
 * Get a EdgeDeviceJob
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param edgeDeviceName - Name of Device
 * @param jobsName - Name of EdgeDevice Job
 */
export const EdgeDeviceJobsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EdgeDeviceJobsGetInput,
  outputSchema: EdgeDeviceJobsGetOutput,
}));
// Input Schema
export const EdgeDeviceJobsListByEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}/jobs",
      apiVersion: "2026-02-01",
    }),
  );
export type EdgeDeviceJobsListByEdgeDeviceInput =
  typeof EdgeDeviceJobsListByEdgeDeviceInput.Type;

// Output Schema
export const EdgeDeviceJobsListByEdgeDeviceOutput =
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
export type EdgeDeviceJobsListByEdgeDeviceOutput =
  typeof EdgeDeviceJobsListByEdgeDeviceOutput.Type;

// The operation
/**
 * List EdgeDeviceJob resources by EdgeDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param edgeDeviceName - Name of Device
 */
export const EdgeDeviceJobsListByEdgeDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EdgeDeviceJobsListByEdgeDeviceInput,
    outputSchema: EdgeDeviceJobsListByEdgeDeviceOutput,
  }));
// Input Schema
export const EdgeDevicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["HCI"]),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}",
      apiVersion: "2026-02-01",
    }),
  );
export type EdgeDevicesCreateOrUpdateInput =
  typeof EdgeDevicesCreateOrUpdateInput.Type;

// Output Schema
export const EdgeDevicesCreateOrUpdateOutput =
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
export type EdgeDevicesCreateOrUpdateOutput =
  typeof EdgeDevicesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a EdgeDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param edgeDeviceName - Name of Device
 */
export const EdgeDevicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EdgeDevicesCreateOrUpdateInput,
    outputSchema: EdgeDevicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const EdgeDevicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}",
    apiVersion: "2026-02-01",
  }),
);
export type EdgeDevicesDeleteInput = typeof EdgeDevicesDeleteInput.Type;

// Output Schema
export const EdgeDevicesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EdgeDevicesDeleteOutput = typeof EdgeDevicesDeleteOutput.Type;

// The operation
/**
 * Delete a EdgeDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param edgeDeviceName - Name of Device
 */
export const EdgeDevicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EdgeDevicesDeleteInput,
  outputSchema: EdgeDevicesDeleteOutput,
}));
// Input Schema
export const EdgeDevicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  edgeDeviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}",
    apiVersion: "2026-02-01",
  }),
);
export type EdgeDevicesGetInput = typeof EdgeDevicesGetInput.Type;

// Output Schema
export const EdgeDevicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type EdgeDevicesGetOutput = typeof EdgeDevicesGetOutput.Type;

// The operation
/**
 * Get a EdgeDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param edgeDeviceName - Name of Device
 */
export const EdgeDevicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EdgeDevicesGetInput,
  outputSchema: EdgeDevicesGetOutput,
}));
// Input Schema
export const EdgeDevicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices",
    apiVersion: "2026-02-01",
  }),
);
export type EdgeDevicesListInput = typeof EdgeDevicesListInput.Type;

// Output Schema
export const EdgeDevicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type EdgeDevicesListOutput = typeof EdgeDevicesListOutput.Type;

// The operation
/**
 * List EdgeDevice resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const EdgeDevicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EdgeDevicesListInput,
  outputSchema: EdgeDevicesListOutput,
}));
// Input Schema
export const EdgeDevicesValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
    edgeDeviceIds: Schema.Array(Schema.String),
    additionalInfo: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}/validate",
      apiVersion: "2026-02-01",
    }),
  );
export type EdgeDevicesValidateInput = typeof EdgeDevicesValidateInput.Type;

// Output Schema
export const EdgeDevicesValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
  });
export type EdgeDevicesValidateOutput = typeof EdgeDevicesValidateOutput.Type;

// The operation
/**
 * A long-running resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param edgeDeviceName - Name of Device
 */
export const EdgeDevicesValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EdgeDevicesValidateInput,
  outputSchema: EdgeDevicesValidateOutput,
}));
// Input Schema
export const ExtensionsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  arcSettingName: Schema.String.pipe(T.PathParam()),
  extensionName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Error",
          "Succeeded",
          "Failed",
          "Canceled",
          "Connected",
          "Disconnected",
          "Deleted",
          "Creating",
          "Updating",
          "Deleting",
          "Moving",
          "PartiallySucceeded",
          "PartiallyConnected",
          "InProgress",
          "Accepted",
          "Provisioning",
          "DisableInProgress",
        ]),
      ),
      extensionParameters: Schema.optional(
        Schema.Struct({
          forceUpdateTag: Schema.optional(Schema.String),
          publisher: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          typeHandlerVersion: Schema.optional(Schema.String),
          autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
          settings: Schema.optional(Schema.Unknown),
          protectedSettings: Schema.optional(Schema.Unknown),
          enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
        }),
      ),
      aggregateState: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Error",
          "Succeeded",
          "Canceled",
          "Failed",
          "Connected",
          "Disconnected",
          "Deleted",
          "Creating",
          "Updating",
          "Deleting",
          "Moving",
          "PartiallySucceeded",
          "PartiallyConnected",
          "InProgress",
          "Accepted",
          "Provisioning",
          "UpgradeFailedRollbackSucceeded",
        ]),
      ),
      perNodeExtensionDetails: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            extension: Schema.optional(Schema.String),
            typeHandlerVersion: Schema.optional(Schema.String),
            state: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "Error",
                "Succeeded",
                "Canceled",
                "Failed",
                "Connected",
                "Disconnected",
                "Deleted",
                "Creating",
                "Updating",
                "Deleting",
                "Moving",
                "PartiallySucceeded",
                "PartiallyConnected",
                "InProgress",
                "Accepted",
                "Provisioning",
              ]),
            ),
            instanceView: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                typeHandlerVersion: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    level: Schema.optional(
                      Schema.Literals(["Info", "Warning", "Error"]),
                    ),
                    displayStatus: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    time: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
      ),
      managedBy: Schema.optional(Schema.Literals(["User", "Azure"])),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/extensions/{extensionName}",
    apiVersion: "2026-02-01",
  }),
);
export type ExtensionsCreateInput = typeof ExtensionsCreateInput.Type;

// Output Schema
export const ExtensionsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
);
export type ExtensionsCreateOutput = typeof ExtensionsCreateOutput.Type;

// The operation
/**
 * Create Extension for HCI cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 * @param extensionName - The name of the machine extension.
 */
export const ExtensionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsCreateInput,
  outputSchema: ExtensionsCreateOutput,
}));
// Input Schema
export const ExtensionsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  arcSettingName: Schema.String.pipe(T.PathParam()),
  extensionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/extensions/{extensionName}",
    apiVersion: "2026-02-01",
  }),
);
export type ExtensionsDeleteInput = typeof ExtensionsDeleteInput.Type;

// Output Schema
export const ExtensionsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExtensionsDeleteOutput = typeof ExtensionsDeleteOutput.Type;

// The operation
/**
 * Delete particular Arc Extension of HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 * @param extensionName - The name of the machine extension.
 */
export const ExtensionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsDeleteInput,
  outputSchema: ExtensionsDeleteOutput,
}));
// Input Schema
export const ExtensionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  arcSettingName: Schema.String.pipe(T.PathParam()),
  extensionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/extensions/{extensionName}",
    apiVersion: "2026-02-01",
  }),
);
export type ExtensionsGetInput = typeof ExtensionsGetInput.Type;

// Output Schema
export const ExtensionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ExtensionsGetOutput = typeof ExtensionsGetOutput.Type;

// The operation
/**
 * Get particular Arc Extension of HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 * @param extensionName - The name of the machine extension.
 */
export const ExtensionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsGetInput,
  outputSchema: ExtensionsGetOutput,
}));
// Input Schema
export const ExtensionsListByArcSettingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    arcSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/extensions",
      apiVersion: "2026-02-01",
    }),
  );
export type ExtensionsListByArcSettingInput =
  typeof ExtensionsListByArcSettingInput.Type;

// Output Schema
export const ExtensionsListByArcSettingOutput =
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
export type ExtensionsListByArcSettingOutput =
  typeof ExtensionsListByArcSettingOutput.Type;

// The operation
/**
 * List all Extensions under ArcSetting resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 */
export const ExtensionsListByArcSetting = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExtensionsListByArcSettingInput,
    outputSchema: ExtensionsListByArcSettingOutput,
  }),
);
// Input Schema
export const ExtensionsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  arcSettingName: Schema.String.pipe(T.PathParam()),
  extensionName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      extensionParameters: Schema.optional(
        Schema.Struct({
          typeHandlerVersion: Schema.optional(Schema.String),
          enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
          settings: Schema.optional(Schema.Unknown),
          protectedSettings: Schema.optional(Schema.Unknown),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/extensions/{extensionName}",
    apiVersion: "2026-02-01",
  }),
);
export type ExtensionsUpdateInput = typeof ExtensionsUpdateInput.Type;

// Output Schema
export const ExtensionsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
);
export type ExtensionsUpdateOutput = typeof ExtensionsUpdateOutput.Type;

// The operation
/**
 * Update Extension for HCI cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 * @param extensionName - The name of the machine extension.
 */
export const ExtensionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsUpdateInput,
  outputSchema: ExtensionsUpdateOutput,
}));
// Input Schema
export const ExtensionsUpgradeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    arcSettingName: Schema.String.pipe(T.PathParam()),
    extensionName: Schema.String.pipe(T.PathParam()),
    targetVersion: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}/extensions/{extensionName}/upgrade",
    apiVersion: "2026-02-01",
  }),
);
export type ExtensionsUpgradeInput = typeof ExtensionsUpgradeInput.Type;

// Output Schema
export const ExtensionsUpgradeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExtensionsUpgradeOutput = typeof ExtensionsUpgradeOutput.Type;

// The operation
/**
 * Upgrade a particular Arc Extension of HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param arcSettingName - The name of the proxy resource holding details of HCI ArcSetting information.
 * @param extensionName - The name of the machine extension.
 */
export const ExtensionsUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsUpgradeInput,
  outputSchema: ExtensionsUpgradeOutput,
}));
// Input Schema
export const GalleryImagesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        containerId: Schema.optional(Schema.String),
        imagePath: Schema.optional(Schema.String),
        osType: Schema.Literals(["Windows", "Linux"]),
        cloudInitDataSource: Schema.optional(
          Schema.Literals(["NoCloud", "Azure"]),
        ),
        hyperVGeneration: Schema.optional(Schema.Literals(["V1", "V2"])),
        identifier: Schema.optional(
          Schema.Struct({
            publisher: Schema.String,
            offer: Schema.String,
            sku: Schema.String,
          }),
        ),
        version: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                storageProfile: Schema.Struct({
                  osDiskImage: Schema.optional(
                    Schema.Struct({
                      sizeInMB: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "InProgress",
            "Accepted",
            "Deleting",
            "Canceled",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.String),
            errorMessage: Schema.optional(Schema.String),
            provisioningStatus: Schema.optional(
              Schema.Struct({
                operationId: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Literals(["Succeeded", "Failed", "InProgress"]),
                ),
              }),
            ),
            downloadStatus: Schema.optional(
              Schema.Struct({
                downloadSizeInMB: Schema.optional(Schema.Number),
              }),
            ),
            progressPercentage: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/galleryImages/{galleryImageName}",
      apiVersion: "2024-01-01",
    }),
  );
export type GalleryImagesCreateOrUpdateInput =
  typeof GalleryImagesCreateOrUpdateInput.Type;

// Output Schema
export const GalleryImagesCreateOrUpdateOutput =
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
export type GalleryImagesCreateOrUpdateOutput =
  typeof GalleryImagesCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a gallery image. Please note some properties can be set only during gallery image creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const GalleryImagesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GalleryImagesCreateOrUpdateInput,
    outputSchema: GalleryImagesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const GalleryImagesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/galleryImages/{galleryImageName}",
      apiVersion: "2024-01-01",
    }),
  );
export type GalleryImagesDeleteInput = typeof GalleryImagesDeleteInput.Type;

// Output Schema
export const GalleryImagesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GalleryImagesDeleteOutput = typeof GalleryImagesDeleteOutput.Type;

// The operation
/**
 * The operation to delete a gallery image.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const GalleryImagesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GalleryImagesDeleteInput,
  outputSchema: GalleryImagesDeleteOutput,
}));
// Input Schema
export const GalleryImagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/galleryImages/{galleryImageName}",
    apiVersion: "2024-01-01",
  }),
);
export type GalleryImagesGetInput = typeof GalleryImagesGetInput.Type;

// Output Schema
export const GalleryImagesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
);
export type GalleryImagesGetOutput = typeof GalleryImagesGetOutput.Type;

// The operation
/**
 * Gets a gallery image
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const GalleryImagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GalleryImagesGetInput,
  outputSchema: GalleryImagesGetOutput,
}));
// Input Schema
export const GalleryImagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/galleryImages",
    apiVersion: "2024-01-01",
  }),
);
export type GalleryImagesListInput = typeof GalleryImagesListInput.Type;

// Output Schema
export const GalleryImagesListOutput =
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
  });
export type GalleryImagesListOutput = typeof GalleryImagesListOutput.Type;

// The operation
/**
 * Lists all of the gallery images in the specified resource group. Use the nextLink property in the response to get the next page of gallery images.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const GalleryImagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GalleryImagesListInput,
  outputSchema: GalleryImagesListOutput,
}));
// Input Schema
export const GalleryImagesListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/galleryImages",
      apiVersion: "2024-01-01",
    }),
  );
export type GalleryImagesListAllInput = typeof GalleryImagesListAllInput.Type;

// Output Schema
export const GalleryImagesListAllOutput =
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
  });
export type GalleryImagesListAllOutput = typeof GalleryImagesListAllOutput.Type;

// The operation
/**
 * Lists all of the gallery images in the specified subscription. Use the nextLink property in the response to get the next page of gallery images.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const GalleryImagesListAll = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GalleryImagesListAllInput,
    outputSchema: GalleryImagesListAllOutput,
  }),
);
// Input Schema
export const GalleryImagesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/galleryImages/{galleryImageName}",
      apiVersion: "2024-01-01",
    }),
  );
export type GalleryImagesUpdateInput = typeof GalleryImagesUpdateInput.Type;

// Output Schema
export const GalleryImagesUpdateOutput =
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
export type GalleryImagesUpdateOutput = typeof GalleryImagesUpdateOutput.Type;

// The operation
/**
 * The operation to update a gallery image.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const GalleryImagesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GalleryImagesUpdateInput,
  outputSchema: GalleryImagesUpdateOutput,
}));
// Input Schema
export const GuestAgentCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    credentials: Schema.optional(
      Schema.Struct({
        username: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveString),
      }),
    ),
    provisioningAction: Schema.optional(
      Schema.Literals(["install", "uninstall", "repair"]),
    ),
    status: Schema.optional(Schema.String),
    provisioningState: Schema.optional(Schema.String),
  }),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
    method: "PUT",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/guestAgents/default",
    apiVersion: "2024-01-01",
  }),
);
export type GuestAgentCreateInput = typeof GuestAgentCreateInput.Type;

// Output Schema
export const GuestAgentCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
);
export type GuestAgentCreateOutput = typeof GuestAgentCreateOutput.Type;

// The operation
/**
 * Implements GuestAgent PUT method.
 *
 * Create Or Update GuestAgent.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentCreateInput,
  outputSchema: GuestAgentCreateOutput,
}));
// Input Schema
export const GuestAgentDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/guestAgents/default",
    apiVersion: "2024-01-01",
  }),
);
export type GuestAgentDeleteInput = typeof GuestAgentDeleteInput.Type;

// Output Schema
export const GuestAgentDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GuestAgentDeleteOutput = typeof GuestAgentDeleteOutput.Type;

// The operation
/**
 * Deleted an GuestAgent.
 *
 * Implements GuestAgent DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentDeleteInput,
  outputSchema: GuestAgentDeleteOutput,
}));
// Input Schema
export const GuestAgentGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/guestAgents/default",
    apiVersion: "2024-01-01",
  }),
);
export type GuestAgentGetInput = typeof GuestAgentGetInput.Type;

// Output Schema
export const GuestAgentGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type GuestAgentGetOutput = typeof GuestAgentGetOutput.Type;

// The operation
/**
 * Gets GuestAgent.
 *
 * Implements GuestAgent GET method.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentGetInput,
  outputSchema: GuestAgentGetOutput,
}));
// Input Schema
export const GuestAgentsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/guestAgents",
    apiVersion: "2024-01-01",
  }),
);
export type GuestAgentsListInput = typeof GuestAgentsListInput.Type;

// Output Schema
export const GuestAgentsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
});
export type GuestAgentsListOutput = typeof GuestAgentsListOutput.Type;

// The operation
/**
 * Implements GET GuestAgent in a vm.
 *
 * Returns the list of GuestAgent of the given vm.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentsListInput,
  outputSchema: GuestAgentsListOutput,
}));
// Input Schema
export const HybridIdentityMetadataGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2024-01-01",
    }),
  );
export type HybridIdentityMetadataGetInput =
  typeof HybridIdentityMetadataGetInput.Type;

// Output Schema
export const HybridIdentityMetadataGetOutput =
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
export type HybridIdentityMetadataGetOutput =
  typeof HybridIdentityMetadataGetOutput.Type;

// The operation
/**
 * Gets HybridIdentityMetadata.
 *
 * Implements HybridIdentityMetadata GET method.
 *
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridIdentityMetadataGetInput,
    outputSchema: HybridIdentityMetadataGetOutput,
  }),
);
// Input Schema
export const HybridIdentityMetadataListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/hybridIdentityMetadata",
      apiVersion: "2024-01-01",
    }),
  );
export type HybridIdentityMetadataListInput =
  typeof HybridIdentityMetadataListInput.Type;

// Output Schema
export const HybridIdentityMetadataListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type HybridIdentityMetadataListOutput =
  typeof HybridIdentityMetadataListOutput.Type;

// The operation
/**
 * Implements GET HybridIdentityMetadata in a vm.
 *
 * Returns the list of HybridIdentityMetadata of the given vm.
 *
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridIdentityMetadataListInput,
    outputSchema: HybridIdentityMetadataListOutput,
  }),
);
// Input Schema
export const LogicalNetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        dhcpOptions: Schema.optional(
          Schema.Struct({
            dnsServers: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        subnets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              properties: Schema.optional(
                Schema.Struct({
                  addressPrefix: Schema.optional(Schema.String),
                  addressPrefixes: Schema.optional(Schema.Array(Schema.String)),
                  ipAllocationMethod: Schema.optional(
                    Schema.Literals(["Dynamic", "Static"]),
                  ),
                  ipConfigurationReferences: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        ID: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  routeTable: Schema.optional(
                    Schema.Struct({
                      etag: Schema.optional(Schema.String),
                      name: Schema.optional(Schema.String),
                      type: Schema.optional(Schema.String),
                      properties: Schema.optional(
                        Schema.Struct({
                          routes: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                properties: Schema.optional(
                                  Schema.Struct({
                                    addressPrefix: Schema.optional(
                                      Schema.String,
                                    ),
                                    nextHopIpAddress: Schema.optional(
                                      Schema.String,
                                    ),
                                  }),
                                ),
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                  ipPools: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        ipPoolType: Schema.optional(
                          Schema.Literals(["vm", "vippool"]),
                        ),
                        start: Schema.optional(Schema.String),
                        end: Schema.optional(Schema.String),
                        info: Schema.optional(
                          Schema.Struct({
                            used: Schema.optional(Schema.String),
                            available: Schema.optional(Schema.String),
                          }),
                        ),
                      }),
                    ),
                  ),
                  vlan: Schema.optional(Schema.Number),
                }),
              ),
              name: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "InProgress",
            "Accepted",
            "Deleting",
            "Canceled",
          ]),
        ),
        vmSwitchName: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.String),
            errorMessage: Schema.optional(Schema.String),
            provisioningStatus: Schema.optional(
              Schema.Struct({
                operationId: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Literals(["Succeeded", "Failed", "InProgress"]),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
      apiVersion: "2024-01-01",
    }),
  );
export type LogicalNetworksCreateOrUpdateInput =
  typeof LogicalNetworksCreateOrUpdateInput.Type;

// Output Schema
export const LogicalNetworksCreateOrUpdateOutput =
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
export type LogicalNetworksCreateOrUpdateOutput =
  typeof LogicalNetworksCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a logical network. Please note some properties can be set only during logical network creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const LogicalNetworksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LogicalNetworksCreateOrUpdateInput,
    outputSchema: LogicalNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export const LogicalNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
      apiVersion: "2024-01-01",
    }),
  );
export type LogicalNetworksDeleteInput = typeof LogicalNetworksDeleteInput.Type;

// Output Schema
export const LogicalNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LogicalNetworksDeleteOutput =
  typeof LogicalNetworksDeleteOutput.Type;

// The operation
/**
 * The operation to delete a logical network.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const LogicalNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogicalNetworksDeleteInput,
    outputSchema: LogicalNetworksDeleteOutput,
  }),
);
// Input Schema
export const LogicalNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
      apiVersion: "2024-01-01",
    }),
  );
export type LogicalNetworksGetInput = typeof LogicalNetworksGetInput.Type;

// Output Schema
export const LogicalNetworksGetOutput =
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
export type LogicalNetworksGetOutput = typeof LogicalNetworksGetOutput.Type;

// The operation
/**
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const LogicalNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogicalNetworksGetInput,
  outputSchema: LogicalNetworksGetOutput,
}));
// Input Schema
export const LogicalNetworksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks",
      apiVersion: "2024-01-01",
    }),
  );
export type LogicalNetworksListInput = typeof LogicalNetworksListInput.Type;

// Output Schema
export const LogicalNetworksListOutput =
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
  });
export type LogicalNetworksListOutput = typeof LogicalNetworksListOutput.Type;

// The operation
/**
 * Lists all of the logical networks in the specified resource group. Use the nextLink property in the response to get the next page of logical networks.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const LogicalNetworksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogicalNetworksListInput,
  outputSchema: LogicalNetworksListOutput,
}));
// Input Schema
export const LogicalNetworksListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/logicalNetworks",
      apiVersion: "2024-01-01",
    }),
  );
export type LogicalNetworksListAllInput =
  typeof LogicalNetworksListAllInput.Type;

// Output Schema
export const LogicalNetworksListAllOutput =
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
  });
export type LogicalNetworksListAllOutput =
  typeof LogicalNetworksListAllOutput.Type;

// The operation
/**
 * Lists all of the logical networks in the specified subscription. Use the nextLink property in the response to get the next page of logical networks.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const LogicalNetworksListAll = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogicalNetworksListAllInput,
    outputSchema: LogicalNetworksListAllOutput,
  }),
);
// Input Schema
export const LogicalNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
      apiVersion: "2024-01-01",
    }),
  );
export type LogicalNetworksUpdateInput = typeof LogicalNetworksUpdateInput.Type;

// Output Schema
export const LogicalNetworksUpdateOutput =
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
export type LogicalNetworksUpdateOutput =
  typeof LogicalNetworksUpdateOutput.Type;

// The operation
/**
 * The operation to update a logical network.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const LogicalNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogicalNetworksUpdateInput,
    outputSchema: LogicalNetworksUpdateOutput,
  }),
);
// Input Schema
export const MarketplaceGalleryImagesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        containerId: Schema.optional(Schema.String),
        osType: Schema.Literals(["Windows", "Linux"]),
        cloudInitDataSource: Schema.optional(
          Schema.Literals(["NoCloud", "Azure"]),
        ),
        hyperVGeneration: Schema.optional(Schema.Literals(["V1", "V2"])),
        identifier: Schema.optional(
          Schema.Struct({
            publisher: Schema.String,
            offer: Schema.String,
            sku: Schema.String,
          }),
        ),
        version: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                storageProfile: Schema.Struct({
                  osDiskImage: Schema.optional(
                    Schema.Struct({
                      sizeInMB: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "InProgress",
            "Accepted",
            "Deleting",
            "Canceled",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.String),
            errorMessage: Schema.optional(Schema.String),
            provisioningStatus: Schema.optional(
              Schema.Struct({
                operationId: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Literals(["Succeeded", "Failed", "InProgress"]),
                ),
              }),
            ),
            downloadStatus: Schema.optional(
              Schema.Struct({
                downloadSizeInMB: Schema.optional(Schema.Number),
              }),
            ),
            progressPercentage: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages/{marketplaceGalleryImageName}",
      apiVersion: "2024-01-01",
    }),
  );
export type MarketplaceGalleryImagesCreateOrUpdateInput =
  typeof MarketplaceGalleryImagesCreateOrUpdateInput.Type;

// Output Schema
export const MarketplaceGalleryImagesCreateOrUpdateOutput =
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
export type MarketplaceGalleryImagesCreateOrUpdateOutput =
  typeof MarketplaceGalleryImagesCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a marketplace gallery image. Please note some properties can be set only during marketplace gallery image creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceGalleryImagesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceGalleryImagesCreateOrUpdateInput,
    outputSchema: MarketplaceGalleryImagesCreateOrUpdateOutput,
  }));
// Input Schema
export const MarketplaceGalleryImagesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages/{marketplaceGalleryImageName}",
      apiVersion: "2024-01-01",
    }),
  );
export type MarketplaceGalleryImagesDeleteInput =
  typeof MarketplaceGalleryImagesDeleteInput.Type;

// Output Schema
export const MarketplaceGalleryImagesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MarketplaceGalleryImagesDeleteOutput =
  typeof MarketplaceGalleryImagesDeleteOutput.Type;

// The operation
/**
 * The operation to delete a marketplace gallery image.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceGalleryImagesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceGalleryImagesDeleteInput,
    outputSchema: MarketplaceGalleryImagesDeleteOutput,
  }));
// Input Schema
export const MarketplaceGalleryImagesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages/{marketplaceGalleryImageName}",
      apiVersion: "2024-01-01",
    }),
  );
export type MarketplaceGalleryImagesGetInput =
  typeof MarketplaceGalleryImagesGetInput.Type;

// Output Schema
export const MarketplaceGalleryImagesGetOutput =
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
export type MarketplaceGalleryImagesGetOutput =
  typeof MarketplaceGalleryImagesGetOutput.Type;

// The operation
/**
 * Gets a marketplace gallery image
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceGalleryImagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MarketplaceGalleryImagesGetInput,
    outputSchema: MarketplaceGalleryImagesGetOutput,
  }),
);
// Input Schema
export const MarketplaceGalleryImagesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages",
      apiVersion: "2024-01-01",
    }),
  );
export type MarketplaceGalleryImagesListInput =
  typeof MarketplaceGalleryImagesListInput.Type;

// Output Schema
export const MarketplaceGalleryImagesListOutput =
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
  });
export type MarketplaceGalleryImagesListOutput =
  typeof MarketplaceGalleryImagesListOutput.Type;

// The operation
/**
 * Lists all of the marketplace gallery images in the specified resource group. Use the nextLink property in the response to get the next page of marketplace gallery images.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceGalleryImagesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceGalleryImagesListInput,
    outputSchema: MarketplaceGalleryImagesListOutput,
  }));
// Input Schema
export const MarketplaceGalleryImagesListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages",
      apiVersion: "2024-01-01",
    }),
  );
export type MarketplaceGalleryImagesListAllInput =
  typeof MarketplaceGalleryImagesListAllInput.Type;

// Output Schema
export const MarketplaceGalleryImagesListAllOutput =
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
  });
export type MarketplaceGalleryImagesListAllOutput =
  typeof MarketplaceGalleryImagesListAllOutput.Type;

// The operation
/**
 * Lists all of the marketplace gallery images in the specified subscription. Use the nextLink property in the response to get the next page of marketplace gallery images.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceGalleryImagesListAll =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceGalleryImagesListAllInput,
    outputSchema: MarketplaceGalleryImagesListAllOutput,
  }));
// Input Schema
export const MarketplaceGalleryImagesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages/{marketplaceGalleryImageName}",
      apiVersion: "2024-01-01",
    }),
  );
export type MarketplaceGalleryImagesUpdateInput =
  typeof MarketplaceGalleryImagesUpdateInput.Type;

// Output Schema
export const MarketplaceGalleryImagesUpdateOutput =
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
export type MarketplaceGalleryImagesUpdateOutput =
  typeof MarketplaceGalleryImagesUpdateOutput.Type;

// The operation
/**
 * The operation to update a marketplace gallery image.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceGalleryImagesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceGalleryImagesUpdateInput,
    outputSchema: MarketplaceGalleryImagesUpdateOutput,
  }));
// Input Schema
export const NetworkInterfacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        ipConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              properties: Schema.optional(
                Schema.Struct({
                  gateway: Schema.optional(Schema.String),
                  prefixLength: Schema.optional(Schema.String),
                  privateIPAddress: Schema.optional(Schema.String),
                  subnet: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        macAddress: Schema.optional(Schema.String),
        dnsSettings: Schema.optional(
          Schema.Struct({
            dnsServers: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "InProgress",
            "Accepted",
            "Deleting",
            "Canceled",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.String),
            errorMessage: Schema.optional(Schema.String),
            provisioningStatus: Schema.optional(
              Schema.Struct({
                operationId: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Literals(["Succeeded", "Failed", "InProgress"]),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2024-01-01",
    }),
  );
export type NetworkInterfacesCreateOrUpdateInput =
  typeof NetworkInterfacesCreateOrUpdateInput.Type;

// Output Schema
export const NetworkInterfacesCreateOrUpdateOutput =
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
export type NetworkInterfacesCreateOrUpdateOutput =
  typeof NetworkInterfacesCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a network interface. Please note some properties can be set only during network interface creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkInterfacesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkInterfacesCreateOrUpdateInput,
    outputSchema: NetworkInterfacesCreateOrUpdateOutput,
  }));
// Input Schema
export const NetworkInterfacesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2024-01-01",
    }),
  );
export type NetworkInterfacesDeleteInput =
  typeof NetworkInterfacesDeleteInput.Type;

// Output Schema
export const NetworkInterfacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkInterfacesDeleteOutput =
  typeof NetworkInterfacesDeleteOutput.Type;

// The operation
/**
 * The operation to delete a network interface.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkInterfacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesDeleteInput,
    outputSchema: NetworkInterfacesDeleteOutput,
  }),
);
// Input Schema
export const NetworkInterfacesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2024-01-01",
    }),
  );
export type NetworkInterfacesGetInput = typeof NetworkInterfacesGetInput.Type;

// Output Schema
export const NetworkInterfacesGetOutput =
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
export type NetworkInterfacesGetOutput = typeof NetworkInterfacesGetOutput.Type;

// The operation
/**
 * Gets a network interface
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkInterfacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesGetInput,
    outputSchema: NetworkInterfacesGetOutput,
  }),
);
// Input Schema
export const NetworkInterfacesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/networkInterfaces",
      apiVersion: "2024-01-01",
    }),
  );
export type NetworkInterfacesListInput = typeof NetworkInterfacesListInput.Type;

// Output Schema
export const NetworkInterfacesListOutput =
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
  });
export type NetworkInterfacesListOutput =
  typeof NetworkInterfacesListOutput.Type;

// The operation
/**
 * Lists all of the network interfaces in the specified resource group. Use the nextLink property in the response to get the next page of network interfaces.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkInterfacesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesListInput,
    outputSchema: NetworkInterfacesListOutput,
  }),
);
// Input Schema
export const NetworkInterfacesListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/networkInterfaces",
      apiVersion: "2024-01-01",
    }),
  );
export type NetworkInterfacesListAllInput =
  typeof NetworkInterfacesListAllInput.Type;

// Output Schema
export const NetworkInterfacesListAllOutput =
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
  });
export type NetworkInterfacesListAllOutput =
  typeof NetworkInterfacesListAllOutput.Type;

// The operation
/**
 * Lists all of the network interfaces in the specified subscription. Use the nextLink property in the response to get the next page of network interfaces.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkInterfacesListAll = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesListAllInput,
    outputSchema: NetworkInterfacesListAllOutput,
  }),
);
// Input Schema
export const NetworkInterfacesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2024-01-01",
    }),
  );
export type NetworkInterfacesUpdateInput =
  typeof NetworkInterfacesUpdateInput.Type;

// Output Schema
export const NetworkInterfacesUpdateOutput =
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
export type NetworkInterfacesUpdateOutput =
  typeof NetworkInterfacesUpdateOutput.Type;

// The operation
/**
 * The operation to update a network interface.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkInterfacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesUpdateInput,
    outputSchema: NetworkInterfacesUpdateOutput,
  }),
);
// Input Schema
export const OffersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  publisherName: Schema.String.pipe(T.PathParam()),
  offerName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/publishers/{publisherName}/offers/{offerName}",
    apiVersion: "2026-02-01",
  }),
);
export type OffersGetInput = typeof OffersGetInput.Type;

// Output Schema
export const OffersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type OffersGetOutput = typeof OffersGetOutput.Type;

// The operation
/**
 * Get Offer resource details within a publisher of HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param publisherName - The name of the publisher available within HCI cluster.
 * @param offerName - The name of the offer available within HCI cluster.
 * @param $expand - Specify $expand=content,contentVersion to populate additional fields related to the marketplace offer.
 */
export const OffersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OffersGetInput,
  outputSchema: OffersGetOutput,
}));
// Input Schema
export const OffersListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/offers",
      apiVersion: "2026-02-01",
    }),
  );
export type OffersListByClusterInput = typeof OffersListByClusterInput.Type;

// Output Schema
export const OffersListByClusterOutput =
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
export type OffersListByClusterOutput = typeof OffersListByClusterOutput.Type;

// The operation
/**
 * List Offers available across publishers for the HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param $expand - Specify $expand=content,contentVersion to populate additional fields related to the marketplace offer.
 */
export const OffersListByCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OffersListByClusterInput,
  outputSchema: OffersListByClusterOutput,
}));
// Input Schema
export const OffersListByPublisherInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/publishers/{publisherName}/offers",
      apiVersion: "2026-02-01",
    }),
  );
export type OffersListByPublisherInput = typeof OffersListByPublisherInput.Type;

// Output Schema
export const OffersListByPublisherOutput =
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
export type OffersListByPublisherOutput =
  typeof OffersListByPublisherOutput.Type;

// The operation
/**
 * List Offers available for a publisher within the HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param publisherName - The name of the publisher available within HCI cluster.
 * @param $expand - Specify $expand=content,contentVersion to populate additional fields related to the marketplace offer.
 */
export const OffersListByPublisher = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OffersListByPublisherInput,
    outputSchema: OffersListByPublisherOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AzureStackHCI/operations",
    apiVersion: "2024-01-01",
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
 * List all available Microsoft.AzureStackHCI provider operations
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const SecuritySettingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    securitySettingsName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        securedCoreComplianceAssignment: Schema.optional(
          Schema.Literals(["Audit", "ApplyAndAutoCorrect"]),
        ),
        wdacComplianceAssignment: Schema.optional(
          Schema.Literals(["Audit", "ApplyAndAutoCorrect"]),
        ),
        smbEncryptionForIntraClusterTrafficComplianceAssignment:
          Schema.optional(Schema.Literals(["Audit", "ApplyAndAutoCorrect"])),
        securityComplianceStatus: Schema.optional(
          Schema.Struct({
            securedCoreCompliance: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            wdacCompliance: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            dataAtRestEncrypted: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            dataInTransitProtected: Schema.optional(
              Schema.Literals(["Compliant", "NonCompliant", "Pending"]),
            ),
            lastUpdated: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Error",
            "Succeeded",
            "Failed",
            "Canceled",
            "Connected",
            "Disconnected",
            "Deleted",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
            "PartiallySucceeded",
            "PartiallyConnected",
            "InProgress",
            "Accepted",
            "Provisioning",
            "DisableInProgress",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/securitySettings/{securitySettingsName}",
      apiVersion: "2026-02-01",
    }),
  );
export type SecuritySettingsCreateOrUpdateInput =
  typeof SecuritySettingsCreateOrUpdateInput.Type;

// Output Schema
export const SecuritySettingsCreateOrUpdateOutput =
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
export type SecuritySettingsCreateOrUpdateOutput =
  typeof SecuritySettingsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a security setting
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param securitySettingsName - Name of security setting
 */
export const SecuritySettingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecuritySettingsCreateOrUpdateInput,
    outputSchema: SecuritySettingsCreateOrUpdateOutput,
  }));
// Input Schema
export const SecuritySettingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    securitySettingsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/securitySettings/{securitySettingsName}",
      apiVersion: "2026-02-01",
    }),
  );
export type SecuritySettingsDeleteInput =
  typeof SecuritySettingsDeleteInput.Type;

// Output Schema
export const SecuritySettingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SecuritySettingsDeleteOutput =
  typeof SecuritySettingsDeleteOutput.Type;

// The operation
/**
 * Delete a SecuritySetting
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param securitySettingsName - Name of security setting
 */
export const SecuritySettingsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SecuritySettingsDeleteInput,
    outputSchema: SecuritySettingsDeleteOutput,
  }),
);
// Input Schema
export const SecuritySettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    securitySettingsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/securitySettings/{securitySettingsName}",
      apiVersion: "2026-02-01",
    }),
  );
export type SecuritySettingsGetInput = typeof SecuritySettingsGetInput.Type;

// Output Schema
export const SecuritySettingsGetOutput =
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
export type SecuritySettingsGetOutput = typeof SecuritySettingsGetOutput.Type;

// The operation
/**
 * Get a SecuritySetting
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param securitySettingsName - Name of security setting
 */
export const SecuritySettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecuritySettingsGetInput,
  outputSchema: SecuritySettingsGetOutput,
}));
// Input Schema
export const SecuritySettingsListByClustersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/securitySettings",
      apiVersion: "2026-02-01",
    }),
  );
export type SecuritySettingsListByClustersInput =
  typeof SecuritySettingsListByClustersInput.Type;

// Output Schema
export const SecuritySettingsListByClustersOutput =
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
export type SecuritySettingsListByClustersOutput =
  typeof SecuritySettingsListByClustersOutput.Type;

// The operation
/**
 * List SecuritySetting resources by Clusters
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const SecuritySettingsListByClusters =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecuritySettingsListByClustersInput,
    outputSchema: SecuritySettingsListByClustersOutput,
  }));
// Input Schema
export const SkusGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  publisherName: Schema.String.pipe(T.PathParam()),
  offerName: Schema.String.pipe(T.PathParam()),
  skuName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/publishers/{publisherName}/offers/{offerName}/skus/{skuName}",
    apiVersion: "2026-02-01",
  }),
);
export type SkusGetInput = typeof SkusGetInput.Type;

// Output Schema
export const SkusGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type SkusGetOutput = typeof SkusGetOutput.Type;

// The operation
/**
 * Get SKU resource details within a offer of HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param publisherName - The name of the publisher available within HCI cluster.
 * @param offerName - The name of the offer available within HCI cluster.
 * @param skuName - The name of the SKU available within HCI cluster.
 * @param $expand - Specify $expand=content,contentVersion to populate additional fields related to the marketplace offer.
 */
export const SkusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusGetInput,
  outputSchema: SkusGetOutput,
}));
// Input Schema
export const SkusListByOfferInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  publisherName: Schema.String.pipe(T.PathParam()),
  offerName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/publishers/{publisherName}/offers/{offerName}/skus",
    apiVersion: "2026-02-01",
  }),
);
export type SkusListByOfferInput = typeof SkusListByOfferInput.Type;

// Output Schema
export const SkusListByOfferOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type SkusListByOfferOutput = typeof SkusListByOfferOutput.Type;

// The operation
/**
 * List Skus available for a offer within the HCI Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param publisherName - The name of the publisher available within HCI cluster.
 * @param offerName - The name of the offer available within HCI cluster.
 * @param $expand - Specify $expand=content,contentVersion to populate additional fields related to the marketplace offer.
 */
export const SkusListByOffer = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusListByOfferInput,
  outputSchema: SkusListByOfferOutput,
}));
// Input Schema
export const StorageContainersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        path: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "InProgress",
            "Accepted",
            "Deleting",
            "Canceled",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.String),
            errorMessage: Schema.optional(Schema.String),
            availableSizeMB: Schema.optional(Schema.Number),
            containerSizeMB: Schema.optional(Schema.Number),
            provisioningStatus: Schema.optional(
              Schema.Struct({
                operationId: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Literals(["Succeeded", "Failed", "InProgress"]),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/storageContainers/{storageContainerName}",
      apiVersion: "2024-01-01",
    }),
  );
export type StorageContainersCreateOrUpdateInput =
  typeof StorageContainersCreateOrUpdateInput.Type;

// Output Schema
export const StorageContainersCreateOrUpdateOutput =
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
export type StorageContainersCreateOrUpdateOutput =
  typeof StorageContainersCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a storage container. Please note some properties can be set only during storage container creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const StorageContainersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageContainersCreateOrUpdateInput,
    outputSchema: StorageContainersCreateOrUpdateOutput,
  }));
// Input Schema
export const StorageContainersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/storageContainers/{storageContainerName}",
      apiVersion: "2024-01-01",
    }),
  );
export type StorageContainersDeleteInput =
  typeof StorageContainersDeleteInput.Type;

// Output Schema
export const StorageContainersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageContainersDeleteOutput =
  typeof StorageContainersDeleteOutput.Type;

// The operation
/**
 * The operation to delete a storage container.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const StorageContainersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageContainersDeleteInput,
    outputSchema: StorageContainersDeleteOutput,
  }),
);
// Input Schema
export const StorageContainersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/storageContainers/{storageContainerName}",
      apiVersion: "2024-01-01",
    }),
  );
export type StorageContainersGetInput = typeof StorageContainersGetInput.Type;

// Output Schema
export const StorageContainersGetOutput =
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
export type StorageContainersGetOutput = typeof StorageContainersGetOutput.Type;

// The operation
/**
 * Gets a storage container
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const StorageContainersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageContainersGetInput,
    outputSchema: StorageContainersGetOutput,
  }),
);
// Input Schema
export const StorageContainersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/storageContainers",
      apiVersion: "2024-01-01",
    }),
  );
export type StorageContainersListInput = typeof StorageContainersListInput.Type;

// Output Schema
export const StorageContainersListOutput =
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
  });
export type StorageContainersListOutput =
  typeof StorageContainersListOutput.Type;

// The operation
/**
 * Lists all of the storage containers in the specified resource group. Use the nextLink property in the response to get the next page of storage containers.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const StorageContainersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageContainersListInput,
    outputSchema: StorageContainersListOutput,
  }),
);
// Input Schema
export const StorageContainersListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/storageContainers",
      apiVersion: "2024-01-01",
    }),
  );
export type StorageContainersListAllInput =
  typeof StorageContainersListAllInput.Type;

// Output Schema
export const StorageContainersListAllOutput =
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
  });
export type StorageContainersListAllOutput =
  typeof StorageContainersListAllOutput.Type;

// The operation
/**
 * Lists all of the storage containers in the specified subscription. Use the nextLink property in the response to get the next page of storage containers.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const StorageContainersListAll = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageContainersListAllInput,
    outputSchema: StorageContainersListAllOutput,
  }),
);
// Input Schema
export const StorageContainersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/storageContainers/{storageContainerName}",
      apiVersion: "2024-01-01",
    }),
  );
export type StorageContainersUpdateInput =
  typeof StorageContainersUpdateInput.Type;

// Output Schema
export const StorageContainersUpdateOutput =
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
export type StorageContainersUpdateOutput =
  typeof StorageContainersUpdateOutput.Type;

// The operation
/**
 * The operation to update a storage container.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const StorageContainersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageContainersUpdateInput,
    outputSchema: StorageContainersUpdateOutput,
  }),
);
// Input Schema
export const UpdateRunsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
  updateRunName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}/updateRuns/{updateRunName}",
    apiVersion: "2026-02-01",
  }),
);
export type UpdateRunsDeleteInput = typeof UpdateRunsDeleteInput.Type;

// Output Schema
export const UpdateRunsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateRunsDeleteOutput = typeof UpdateRunsDeleteOutput.Type;

// The operation
/**
 * Delete specified Update Run
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param updateName - The name of the Update
 * @param updateRunName - The name of the Update Run
 */
export const UpdateRunsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRunsDeleteInput,
  outputSchema: UpdateRunsDeleteOutput,
}));
// Input Schema
export const UpdateRunsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
  updateRunName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}/updateRuns/{updateRunName}",
    apiVersion: "2026-02-01",
  }),
);
export type UpdateRunsGetInput = typeof UpdateRunsGetInput.Type;

// Output Schema
export const UpdateRunsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type UpdateRunsGetOutput = typeof UpdateRunsGetOutput.Type;

// The operation
/**
 * Get the Update run for a specified update
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param updateName - The name of the Update
 * @param updateRunName - The name of the Update Run
 */
export const UpdateRunsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRunsGetInput,
  outputSchema: UpdateRunsGetOutput,
}));
// Input Schema
export const UpdateRunsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}/updateRuns",
    apiVersion: "2026-02-01",
  }),
);
export type UpdateRunsListInput = typeof UpdateRunsListInput.Type;

// Output Schema
export const UpdateRunsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateRunsListOutput = typeof UpdateRunsListOutput.Type;

// The operation
/**
 * List all Update runs for a specified update
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param updateName - The name of the Update
 */
export const UpdateRunsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRunsListInput,
  outputSchema: UpdateRunsListOutput,
}));
// Input Schema
export const UpdateRunsPutInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
  updateRunName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Error",
          "Succeeded",
          "Failed",
          "Canceled",
          "Connected",
          "Disconnected",
          "Deleted",
          "Creating",
          "Updating",
          "Deleting",
          "Moving",
          "PartiallySucceeded",
          "PartiallyConnected",
          "InProgress",
          "Accepted",
          "Provisioning",
          "DisableInProgress",
        ]),
      ),
      timeStarted: Schema.optional(Schema.String),
      lastUpdatedTime: Schema.optional(Schema.String),
      duration: Schema.optional(Schema.String),
      state: Schema.optional(
        Schema.Literals(["Unknown", "Succeeded", "InProgress", "Failed"]),
      ),
      progress: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          errorMessage: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          startTimeUtc: Schema.optional(Schema.String),
          endTimeUtc: Schema.optional(Schema.String),
          lastUpdatedTimeUtc: Schema.optional(Schema.String),
          expectedExecutionTime: Schema.optional(Schema.String),
          steps: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
    }),
  ),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}/updateRuns/{updateRunName}",
    apiVersion: "2026-02-01",
  }),
);
export type UpdateRunsPutInput = typeof UpdateRunsPutInput.Type;

// Output Schema
export const UpdateRunsPutOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type UpdateRunsPutOutput = typeof UpdateRunsPutOutput.Type;

// The operation
/**
 * Put Update runs for a specified update
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param updateName - The name of the Update
 * @param updateRunName - The name of the Update Run
 */
export const UpdateRunsPut = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRunsPutInput,
  outputSchema: UpdateRunsPutOutput,
}));
// Input Schema
export const UpdatesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}",
    apiVersion: "2026-02-01",
  }),
);
export type UpdatesDeleteInput = typeof UpdatesDeleteInput.Type;

// Output Schema
export const UpdatesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdatesDeleteOutput = typeof UpdatesDeleteOutput.Type;

// The operation
/**
 * Delete specified Update
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param updateName - The name of the Update
 */
export const UpdatesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdatesDeleteInput,
  outputSchema: UpdatesDeleteOutput,
}));
// Input Schema
export const UpdatesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}",
    apiVersion: "2026-02-01",
  }),
);
export type UpdatesGetInput = typeof UpdatesGetInput.Type;

// Output Schema
export const UpdatesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type UpdatesGetOutput = typeof UpdatesGetOutput.Type;

// The operation
/**
 * Get specified Update
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param updateName - The name of the Update
 */
export const UpdatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdatesGetInput,
  outputSchema: UpdatesGetOutput,
}));
// Input Schema
export const UpdatesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates",
    apiVersion: "2026-02-01",
  }),
);
export type UpdatesListInput = typeof UpdatesListInput.Type;

// Output Schema
export const UpdatesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdatesListOutput = typeof UpdatesListOutput.Type;

// The operation
/**
 * List all Updates
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const UpdatesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdatesListInput,
  outputSchema: UpdatesListOutput,
}));
// Input Schema
export const UpdatesPostInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}/apply",
    apiVersion: "2026-02-01",
  }),
);
export type UpdatesPostInput = typeof UpdatesPostInput.Type;

// Output Schema
export const UpdatesPostOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdatesPostOutput = typeof UpdatesPostOutput.Type;

// The operation
/**
 * Apply Update
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param updateName - The name of the Update
 */
export const UpdatesPost = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdatesPostInput,
  outputSchema: UpdatesPostOutput,
}));
// Input Schema
export const UpdatesPutInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Error",
          "Succeeded",
          "Failed",
          "Canceled",
          "Connected",
          "Disconnected",
          "Deleted",
          "Creating",
          "Updating",
          "Deleting",
          "Moving",
          "PartiallySucceeded",
          "PartiallyConnected",
          "InProgress",
          "Accepted",
          "Provisioning",
          "DisableInProgress",
        ]),
      ),
      installedDate: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      minSbeVersionRequired: Schema.optional(Schema.String),
      state: Schema.optional(
        Schema.Literals([
          "HasPrerequisite",
          "Obsolete",
          "Ready",
          "NotApplicableBecauseAnotherUpdateIsInProgress",
          "Preparing",
          "Installing",
          "Installed",
          "PreparationFailed",
          "InstallationFailed",
          "Invalid",
          "Recalled",
          "Downloading",
          "DownloadFailed",
          "HealthChecking",
          "HealthCheckFailed",
          "ReadyToInstall",
          "ScanInProgress",
          "ScanFailed",
          "AdditionalContentRequired",
        ]),
      ),
      prerequisites: Schema.optional(
        Schema.Array(
          Schema.Struct({
            updateType: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            packageName: Schema.optional(Schema.String),
          }),
        ),
      ),
      componentVersions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            packageType: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            lastUpdated: Schema.optional(Schema.String),
          }),
        ),
      ),
      rebootRequired: Schema.optional(
        Schema.Literals(["Unknown", "True", "False"]),
      ),
      healthState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Success",
          "Failure",
          "Warning",
          "Error",
          "InProgress",
        ]),
      ),
      healthCheckResult: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
            tags: Schema.optional(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
            healthCheckTags: Schema.optional(Schema.Unknown),
            title: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Literals([
                "NotYetRegistered",
                "ConnectedRecently",
                "NotConnectedRecently",
                "Disconnected",
                "Error",
                "NotSpecified",
                "ValidationInProgress",
                "ValidationSuccess",
                "ValidationFailed",
                "DeploymentInProgress",
                "DeploymentFailed",
                "DeploymentSuccess",
              ]),
            ),
            severity: Schema.optional(
              Schema.Literals([
                "Critical",
                "Warning",
                "Informational",
                "Hidden",
              ]),
            ),
            description: Schema.optional(Schema.String),
            remediation: Schema.optional(Schema.String),
            targetResourceID: Schema.optional(Schema.String),
            targetResourceName: Schema.optional(Schema.String),
            targetResourceType: Schema.optional(Schema.String),
            timestamp: Schema.optional(Schema.String),
            additionalData: Schema.optional(Schema.String),
            healthCheckSource: Schema.optional(Schema.String),
          }),
        ),
      ),
      healthCheckDate: Schema.optional(Schema.String),
      packagePath: Schema.optional(Schema.String),
      packageSizeInMb: Schema.optional(Schema.Number),
      displayName: Schema.optional(Schema.String),
      version: Schema.optional(Schema.String),
      publisher: Schema.optional(Schema.String),
      releaseLink: Schema.optional(Schema.String),
      availabilityType: Schema.optional(
        Schema.Literals(["Local", "Online", "Notify"]),
      ),
      packageType: Schema.optional(Schema.String),
      additionalProperties: Schema.optional(Schema.String),
      updateStateProperties: Schema.optional(
        Schema.Struct({
          progressPercentage: Schema.optional(Schema.Number),
          notifyMessage: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}",
    apiVersion: "2026-02-01",
  }),
);
export type UpdatesPutInput = typeof UpdatesPutInput.Type;

// Output Schema
export const UpdatesPutOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type UpdatesPutOutput = typeof UpdatesPutOutput.Type;

// The operation
/**
 * Put specified Update
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param updateName - The name of the Update
 */
export const UpdatesPut = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdatesPutInput,
  outputSchema: UpdatesPutOutput,
}));
// Input Schema
export const UpdateSummariesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updateSummaries/default",
      apiVersion: "2026-02-01",
    }),
  );
export type UpdateSummariesDeleteInput = typeof UpdateSummariesDeleteInput.Type;

// Output Schema
export const UpdateSummariesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateSummariesDeleteOutput =
  typeof UpdateSummariesDeleteOutput.Type;

// The operation
/**
 * Delete Update Summaries
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const UpdateSummariesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateSummariesDeleteInput,
    outputSchema: UpdateSummariesDeleteOutput,
  }),
);
// Input Schema
export const UpdateSummariesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updateSummaries/default",
      apiVersion: "2026-02-01",
    }),
  );
export type UpdateSummariesGetInput = typeof UpdateSummariesGetInput.Type;

// Output Schema
export const UpdateSummariesGetOutput =
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
export type UpdateSummariesGetOutput = typeof UpdateSummariesGetOutput.Type;

// The operation
/**
 * Get all Update summaries under the HCI cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const UpdateSummariesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateSummariesGetInput,
  outputSchema: UpdateSummariesGetOutput,
}));
// Input Schema
export const UpdateSummariesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updateSummaries",
      apiVersion: "2026-02-01",
    }),
  );
export type UpdateSummariesListInput = typeof UpdateSummariesListInput.Type;

// Output Schema
export const UpdateSummariesListOutput =
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
export type UpdateSummariesListOutput = typeof UpdateSummariesListOutput.Type;

// The operation
/**
 * List all Update summaries under the HCI cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const UpdateSummariesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateSummariesListInput,
  outputSchema: UpdateSummariesListOutput,
}));
// Input Schema
export const UpdateSummariesPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Error",
            "Succeeded",
            "Failed",
            "Canceled",
            "Connected",
            "Disconnected",
            "Deleted",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
            "PartiallySucceeded",
            "PartiallyConnected",
            "InProgress",
            "Accepted",
            "Provisioning",
            "DisableInProgress",
          ]),
        ),
        oemFamily: Schema.optional(Schema.String),
        currentOemVersion: Schema.optional(Schema.String),
        hardwareModel: Schema.optional(Schema.String),
        packageVersions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              packageType: Schema.optional(Schema.String),
              version: Schema.optional(Schema.String),
              lastUpdated: Schema.optional(Schema.String),
            }),
          ),
        ),
        currentVersion: Schema.optional(Schema.String),
        currentSbeVersion: Schema.optional(Schema.String),
        lastUpdated: Schema.optional(Schema.String),
        lastChecked: Schema.optional(Schema.String),
        healthState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Success",
            "Failure",
            "Warning",
            "Error",
            "InProgress",
          ]),
        ),
        healthCheckResult: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              tags: Schema.optional(
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
              healthCheckTags: Schema.optional(Schema.Unknown),
              title: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals([
                  "NotYetRegistered",
                  "ConnectedRecently",
                  "NotConnectedRecently",
                  "Disconnected",
                  "Error",
                  "NotSpecified",
                  "ValidationInProgress",
                  "ValidationSuccess",
                  "ValidationFailed",
                  "DeploymentInProgress",
                  "DeploymentFailed",
                  "DeploymentSuccess",
                ]),
              ),
              severity: Schema.optional(
                Schema.Literals([
                  "Critical",
                  "Warning",
                  "Informational",
                  "Hidden",
                ]),
              ),
              description: Schema.optional(Schema.String),
              remediation: Schema.optional(Schema.String),
              targetResourceID: Schema.optional(Schema.String),
              targetResourceName: Schema.optional(Schema.String),
              targetResourceType: Schema.optional(Schema.String),
              timestamp: Schema.optional(Schema.String),
              additionalData: Schema.optional(Schema.String),
              healthCheckSource: Schema.optional(Schema.String),
            }),
          ),
        ),
        healthCheckDate: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "Unknown",
            "AppliedSuccessfully",
            "UpdateAvailable",
            "UpdateInProgress",
            "UpdateFailed",
            "NeedsAttention",
            "PreparationInProgress",
            "PreparationFailed",
          ]),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updateSummaries/default",
      apiVersion: "2026-02-01",
    }),
  );
export type UpdateSummariesPutInput = typeof UpdateSummariesPutInput.Type;

// Output Schema
export const UpdateSummariesPutOutput =
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
export type UpdateSummariesPutOutput = typeof UpdateSummariesPutOutput.Type;

// The operation
/**
 * Put Update summaries under the HCI cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const UpdateSummariesPut = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateSummariesPutInput,
  outputSchema: UpdateSummariesPutOutput,
}));
// Input Schema
export const ValidatedSolutionRecipesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    validatedSolutionRecipeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/locations/{location}/validatedSolutionRecipes/{validatedSolutionRecipeName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ValidatedSolutionRecipesGetInput =
  typeof ValidatedSolutionRecipesGetInput.Type;

// Output Schema
export const ValidatedSolutionRecipesGetOutput =
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
export type ValidatedSolutionRecipesGetOutput =
  typeof ValidatedSolutionRecipesGetOutput.Type;

// The operation
/**
 * Get a validated solution recipe.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param validatedSolutionRecipeName - The name of the ValidatedSolutionRecipe
 */
export const ValidatedSolutionRecipesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ValidatedSolutionRecipesGetInput,
    outputSchema: ValidatedSolutionRecipesGetOutput,
  }),
);
// Input Schema
export const ValidatedSolutionRecipesListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/locations/{location}/validatedSolutionRecipes",
      apiVersion: "2026-02-01",
    }),
  );
export type ValidatedSolutionRecipesListBySubscriptionLocationResourceInput =
  typeof ValidatedSolutionRecipesListBySubscriptionLocationResourceInput.Type;

// Output Schema
export const ValidatedSolutionRecipesListBySubscriptionLocationResourceOutput =
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
export type ValidatedSolutionRecipesListBySubscriptionLocationResourceOutput =
  typeof ValidatedSolutionRecipesListBySubscriptionLocationResourceOutput.Type;

// The operation
/**
 * List all validated solution recipes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const ValidatedSolutionRecipesListBySubscriptionLocationResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ValidatedSolutionRecipesListBySubscriptionLocationResourceInput,
    outputSchema:
      ValidatedSolutionRecipesListBySubscriptionLocationResourceOutput,
  }));
// Input Schema
export const VirtualHardDisksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        blockSizeBytes: Schema.optional(Schema.Number),
        diskSizeGB: Schema.optional(Schema.Number),
        dynamic: Schema.optional(Schema.Boolean),
        logicalSectorBytes: Schema.optional(Schema.Number),
        physicalSectorBytes: Schema.optional(Schema.Number),
        hyperVGeneration: Schema.optional(Schema.Literals(["V1", "V2"])),
        diskFileFormat: Schema.optional(Schema.Literals(["vhdx", "vhd"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "InProgress",
            "Accepted",
            "Deleting",
            "Canceled",
          ]),
        ),
        containerId: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.String),
            errorMessage: Schema.optional(Schema.String),
            provisioningStatus: Schema.optional(
              Schema.Struct({
                operationId: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Literals(["Succeeded", "Failed", "InProgress"]),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/virtualHardDisks/{virtualHardDiskName}",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualHardDisksCreateOrUpdateInput =
  typeof VirtualHardDisksCreateOrUpdateInput.Type;

// Output Schema
export const VirtualHardDisksCreateOrUpdateOutput =
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
export type VirtualHardDisksCreateOrUpdateOutput =
  typeof VirtualHardDisksCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a virtual hard disk. Please note some properties can be set only during virtual hard disk creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualHardDisksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualHardDisksCreateOrUpdateInput,
    outputSchema: VirtualHardDisksCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualHardDisksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/virtualHardDisks/{virtualHardDiskName}",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualHardDisksDeleteInput =
  typeof VirtualHardDisksDeleteInput.Type;

// Output Schema
export const VirtualHardDisksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualHardDisksDeleteOutput =
  typeof VirtualHardDisksDeleteOutput.Type;

// The operation
/**
 * The operation to delete a virtual hard disk.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualHardDisksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualHardDisksDeleteInput,
    outputSchema: VirtualHardDisksDeleteOutput,
  }),
);
// Input Schema
export const VirtualHardDisksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/virtualHardDisks/{virtualHardDiskName}",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualHardDisksGetInput = typeof VirtualHardDisksGetInput.Type;

// Output Schema
export const VirtualHardDisksGetOutput =
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
export type VirtualHardDisksGetOutput = typeof VirtualHardDisksGetOutput.Type;

// The operation
/**
 * Gets a virtual hard disk
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualHardDisksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualHardDisksGetInput,
  outputSchema: VirtualHardDisksGetOutput,
}));
// Input Schema
export const VirtualHardDisksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/virtualHardDisks",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualHardDisksListInput = typeof VirtualHardDisksListInput.Type;

// Output Schema
export const VirtualHardDisksListOutput =
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
  });
export type VirtualHardDisksListOutput = typeof VirtualHardDisksListOutput.Type;

// The operation
/**
 * Lists all of the virtual hard disks in the specified resource group. Use the nextLink property in the response to get the next page of virtual hard disks.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualHardDisksList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualHardDisksListInput,
    outputSchema: VirtualHardDisksListOutput,
  }),
);
// Input Schema
export const VirtualHardDisksListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/virtualHardDisks",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualHardDisksListAllInput =
  typeof VirtualHardDisksListAllInput.Type;

// Output Schema
export const VirtualHardDisksListAllOutput =
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
  });
export type VirtualHardDisksListAllOutput =
  typeof VirtualHardDisksListAllOutput.Type;

// The operation
/**
 * Lists all of the virtual hard disks in the specified subscription. Use the nextLink property in the response to get the next page of virtual hard disks.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualHardDisksListAll = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualHardDisksListAllInput,
    outputSchema: VirtualHardDisksListAllOutput,
  }),
);
// Input Schema
export const VirtualHardDisksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/virtualHardDisks/{virtualHardDiskName}",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualHardDisksUpdateInput =
  typeof VirtualHardDisksUpdateInput.Type;

// Output Schema
export const VirtualHardDisksUpdateOutput =
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
export type VirtualHardDisksUpdateOutput =
  typeof VirtualHardDisksUpdateOutput.Type;

// The operation
/**
 * The operation to update a virtual hard disk.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualHardDisksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualHardDisksUpdateInput,
    outputSchema: VirtualHardDisksUpdateOutput,
  }),
);
// Input Schema
export const VirtualMachineInstancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        hardwareProfile: Schema.optional(
          Schema.Struct({
            vmSize: Schema.optional(
              Schema.Literals([
                "Default",
                "Standard_A2_v2",
                "Standard_A4_v2",
                "Standard_D2s_v3",
                "Standard_D4s_v3",
                "Standard_D8s_v3",
                "Standard_D16s_v3",
                "Standard_D32s_v3",
                "Standard_DS2_v2",
                "Standard_DS3_v2",
                "Standard_DS4_v2",
                "Standard_DS5_v2",
                "Standard_DS13_v2",
                "Standard_K8S_v1",
                "Standard_K8S2_v1",
                "Standard_K8S3_v1",
                "Standard_K8S4_v1",
                "Standard_NK6",
                "Standard_NK12",
                "Standard_NV6",
                "Standard_NV12",
                "Standard_K8S5_v1",
                "Custom",
              ]),
            ),
            processors: Schema.optional(Schema.Number),
            memoryMB: Schema.optional(Schema.Number),
            dynamicMemoryConfig: Schema.optional(
              Schema.Struct({
                maximumMemoryMB: Schema.optional(Schema.Number),
                minimumMemoryMB: Schema.optional(Schema.Number),
                targetMemoryBuffer: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            networkInterfaces: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        osProfile: Schema.optional(
          Schema.Struct({
            adminPassword: Schema.optional(SensitiveString),
            adminUsername: Schema.optional(Schema.String),
            computerName: Schema.optional(Schema.String),
            linuxConfiguration: Schema.optional(
              Schema.Struct({
                disablePasswordAuthentication: Schema.optional(Schema.Boolean),
                ssh: Schema.optional(
                  Schema.Struct({
                    publicKeys: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          path: Schema.optional(Schema.String),
                          keyData: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
                provisionVMAgent: Schema.optional(Schema.Boolean),
                provisionVMConfigAgent: Schema.optional(Schema.Boolean),
              }),
            ),
            windowsConfiguration: Schema.optional(
              Schema.Struct({
                enableAutomaticUpdates: Schema.optional(Schema.Boolean),
                ssh: Schema.optional(
                  Schema.Struct({
                    publicKeys: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          path: Schema.optional(Schema.String),
                          keyData: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
                timeZone: Schema.optional(Schema.String),
                provisionVMAgent: Schema.optional(Schema.Boolean),
                provisionVMConfigAgent: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        securityProfile: Schema.optional(
          Schema.Struct({
            enableTPM: Schema.optional(Schema.Boolean),
            uefiSettings: Schema.optional(
              Schema.Struct({
                secureBootEnabled: Schema.optional(Schema.Boolean),
              }),
            ),
            securityType: Schema.optional(
              Schema.Literals(["TrustedLaunch", "ConfidentialVM"]),
            ),
          }),
        ),
        storageProfile: Schema.optional(
          Schema.Struct({
            dataDisks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
            ),
            imageReference: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
            osDisk: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                osType: Schema.optional(Schema.Literals(["Linux", "Windows"])),
              }),
            ),
            vmConfigStoragePathId: Schema.optional(Schema.String),
          }),
        ),
        httpProxyConfig: Schema.optional(
          Schema.Struct({
            httpProxy: Schema.optional(Schema.String),
            httpsProxy: Schema.optional(Schema.String),
            noProxy: Schema.optional(Schema.Array(Schema.String)),
            trustedCa: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "InProgress",
            "Accepted",
            "Deleting",
            "Canceled",
          ]),
        ),
        instanceView: Schema.optional(
          Schema.Struct({
            vmAgent: Schema.optional(
              Schema.Struct({
                vmConfigAgentVersion: Schema.optional(Schema.String),
                statuses: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      level: Schema.optional(
                        Schema.Literals(["Info", "Warning", "Error"]),
                      ),
                      displayStatus: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      time: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            errorCode: Schema.optional(Schema.String),
            errorMessage: Schema.optional(Schema.String),
            powerState: Schema.optional(
              Schema.Literals([
                "Deallocated",
                "Deallocating",
                "Running",
                "Starting",
                "Stopped",
                "Stopping",
                "Unknown",
              ]),
            ),
            provisioningStatus: Schema.optional(
              Schema.Struct({
                operationId: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Literals(["Succeeded", "Failed", "InProgress"]),
                ),
              }),
            ),
          }),
        ),
        guestAgentInstallStatus: Schema.optional(
          Schema.Struct({
            vmUuid: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Literals(["Succeeded", "InProgress", "Failed"]),
            ),
            lastStatusChange: Schema.optional(Schema.String),
            agentVersion: Schema.optional(Schema.String),
            errorDetails: Schema.optional(
              Schema.Array(
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
            ),
          }),
        ),
        vmId: Schema.optional(Schema.String),
        resourceUid: Schema.optional(Schema.String),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualMachineInstancesCreateOrUpdateInput =
  typeof VirtualMachineInstancesCreateOrUpdateInput.Type;

// Output Schema
export const VirtualMachineInstancesCreateOrUpdateOutput =
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
export type VirtualMachineInstancesCreateOrUpdateOutput =
  typeof VirtualMachineInstancesCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesCreateOrUpdateInput,
    outputSchema: VirtualMachineInstancesCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachineInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualMachineInstancesDeleteInput =
  typeof VirtualMachineInstancesDeleteInput.Type;

// Output Schema
export const VirtualMachineInstancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesDeleteOutput =
  typeof VirtualMachineInstancesDeleteOutput.Type;

// The operation
/**
 * The operation to delete a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesDeleteInput,
    outputSchema: VirtualMachineInstancesDeleteOutput,
  }));
// Input Schema
export const VirtualMachineInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualMachineInstancesGetInput =
  typeof VirtualMachineInstancesGetInput.Type;

// Output Schema
export const VirtualMachineInstancesGetOutput =
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
export type VirtualMachineInstancesGetOutput =
  typeof VirtualMachineInstancesGetOutput.Type;

// The operation
/**
 * Gets a virtual machine instance
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesGetInput,
    outputSchema: VirtualMachineInstancesGetOutput,
  }),
);
// Input Schema
export const VirtualMachineInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualMachineInstancesListInput =
  typeof VirtualMachineInstancesListInput.Type;

// Output Schema
export const VirtualMachineInstancesListOutput =
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
  });
export type VirtualMachineInstancesListOutput =
  typeof VirtualMachineInstancesListOutput.Type;

// The operation
/**
 * Lists all of the virtual machine instances within the specified parent resource.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesListInput,
    outputSchema: VirtualMachineInstancesListOutput,
  }),
);
// Input Schema
export const VirtualMachineInstancesRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/restart",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualMachineInstancesRestartInput =
  typeof VirtualMachineInstancesRestartInput.Type;

// Output Schema
export const VirtualMachineInstancesRestartOutput =
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
export type VirtualMachineInstancesRestartOutput =
  typeof VirtualMachineInstancesRestartOutput.Type;

// The operation
/**
 * The operation to restart a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesRestart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesRestartInput,
    outputSchema: VirtualMachineInstancesRestartOutput,
  }));
// Input Schema
export const VirtualMachineInstancesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/start",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualMachineInstancesStartInput =
  typeof VirtualMachineInstancesStartInput.Type;

// Output Schema
export const VirtualMachineInstancesStartOutput =
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
export type VirtualMachineInstancesStartOutput =
  typeof VirtualMachineInstancesStartOutput.Type;

// The operation
/**
 * The operation to start a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesStartInput,
    outputSchema: VirtualMachineInstancesStartOutput,
  }));
// Input Schema
export const VirtualMachineInstancesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/stop",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualMachineInstancesStopInput =
  typeof VirtualMachineInstancesStopInput.Type;

// Output Schema
export const VirtualMachineInstancesStopOutput =
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
export type VirtualMachineInstancesStopOutput =
  typeof VirtualMachineInstancesStopOutput.Type;

// The operation
/**
 * The operation to stop a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesStopInput,
    outputSchema: VirtualMachineInstancesStopOutput,
  }),
);
// Input Schema
export const VirtualMachineInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        hardwareProfile: Schema.optional(
          Schema.Struct({
            vmSize: Schema.optional(
              Schema.Literals([
                "Default",
                "Standard_A2_v2",
                "Standard_A4_v2",
                "Standard_D2s_v3",
                "Standard_D4s_v3",
                "Standard_D8s_v3",
                "Standard_D16s_v3",
                "Standard_D32s_v3",
                "Standard_DS2_v2",
                "Standard_DS3_v2",
                "Standard_DS4_v2",
                "Standard_DS5_v2",
                "Standard_DS13_v2",
                "Standard_K8S_v1",
                "Standard_K8S2_v1",
                "Standard_K8S3_v1",
                "Standard_K8S4_v1",
                "Standard_NK6",
                "Standard_NK12",
                "Standard_NV6",
                "Standard_NV12",
                "Standard_K8S5_v1",
                "Custom",
              ]),
            ),
            processors: Schema.optional(Schema.Number),
            memoryMB: Schema.optional(Schema.Number),
          }),
        ),
        storageProfile: Schema.optional(
          Schema.Struct({
            dataDisks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            networkInterfaces: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        osProfile: Schema.optional(
          Schema.Struct({
            computerName: Schema.optional(Schema.String),
            linuxConfiguration: Schema.optional(
              Schema.Struct({
                provisionVMAgent: Schema.optional(Schema.Boolean),
                provisionVMConfigAgent: Schema.optional(Schema.Boolean),
              }),
            ),
            windowsConfiguration: Schema.optional(
              Schema.Struct({
                provisionVMAgent: Schema.optional(Schema.Boolean),
                provisionVMConfigAgent: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualMachineInstancesUpdateInput =
  typeof VirtualMachineInstancesUpdateInput.Type;

// Output Schema
export const VirtualMachineInstancesUpdateOutput =
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
export type VirtualMachineInstancesUpdateOutput =
  typeof VirtualMachineInstancesUpdateOutput.Type;

// The operation
/**
 * The operation to update a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesUpdateInput,
    outputSchema: VirtualMachineInstancesUpdateOutput,
  }));
