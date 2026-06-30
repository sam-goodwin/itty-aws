/**
 * Azure Azurestackhci API
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
export interface ArcSettingsConsentAndInstallDefaultExtensionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ArcSettingsConsentAndInstallDefaultExtensionsInput>;

// Output Schema
export interface ArcSettingsConsentAndInstallDefaultExtensionsOutput {
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
  }) as unknown as Schema.Codec<ArcSettingsConsentAndInstallDefaultExtensionsOutput>;

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
export interface ArcSettingsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Error"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Connected"
      | "Disconnected"
      | "Deleted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "PartiallySucceeded"
      | "PartiallyConnected"
      | "InProgress"
      | "Accepted"
      | "Provisioning"
      | "DisableInProgress";
    arcInstanceResourceGroup?: string;
    arcApplicationClientId?: string;
    arcApplicationTenantId?: string;
    arcServicePrincipalObjectId?: string;
    arcApplicationObjectId?: string;
    aggregateState?:
      | "NotSpecified"
      | "Error"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "Connected"
      | "Disconnected"
      | "Deleted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "PartiallySucceeded"
      | "PartiallyConnected"
      | "InProgress"
      | "Accepted"
      | "Provisioning"
      | "DisableInProgress";
    perNodeDetails?: {
      name?: string;
      arcInstance?: string;
      arcNodeServicePrincipalObjectId?: string;
      state?:
        | "NotSpecified"
        | "Error"
        | "Succeeded"
        | "Canceled"
        | "Failed"
        | "Connected"
        | "Disconnected"
        | "Deleted"
        | "Creating"
        | "Updating"
        | "Deleting"
        | "Moving"
        | "PartiallySucceeded"
        | "PartiallyConnected"
        | "InProgress"
        | "Accepted"
        | "Provisioning"
        | "DisableInProgress";
    }[];
    connectivityProperties?: {
      enabled?: boolean;
      serviceConfigurations?: { serviceName: "WAC"; port: number }[];
    };
    defaultExtensions?: { category?: string; consentTime?: string }[];
  };
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ArcSettingsCreateInput>;

// Output Schema
export interface ArcSettingsCreateOutput {
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
  }) as unknown as Schema.Codec<ArcSettingsCreateOutput>;

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
export interface ArcSettingsCreateIdentityInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ArcSettingsCreateIdentityInput>;

// Output Schema
export interface ArcSettingsCreateIdentityOutput {
  properties?: {
    arcApplicationClientId?: string;
    arcApplicationTenantId?: string;
    arcServicePrincipalObjectId?: string;
    arcApplicationObjectId?: string;
  };
}
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
  }) as unknown as Schema.Codec<ArcSettingsCreateIdentityOutput>;

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
export interface ArcSettingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ArcSettingsDeleteInput>;

// Output Schema
export type ArcSettingsDeleteOutput = void;
export const ArcSettingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ArcSettingsDeleteOutput>;

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
export interface ArcSettingsGeneratePasswordInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ArcSettingsGeneratePasswordInput>;

// Output Schema
export interface ArcSettingsGeneratePasswordOutput {
  secretText?: string;
  keyId?: string;
  startDateTime?: string;
  endDateTime?: string;
}
export const ArcSettingsGeneratePasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretText: Schema.optional(Schema.String),
    keyId: Schema.optional(Schema.String),
    startDateTime: Schema.optional(Schema.String),
    endDateTime: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ArcSettingsGeneratePasswordOutput>;

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
export interface ArcSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
}
export const ArcSettingsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  arcSettingName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings/{arcSettingName}",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ArcSettingsGetInput>;

// Output Schema
export interface ArcSettingsGetOutput {
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
}) as unknown as Schema.Codec<ArcSettingsGetOutput>;

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
export interface ArcSettingsInitializeDisableProcessInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ArcSettingsInitializeDisableProcessInput>;

// Output Schema
export type ArcSettingsInitializeDisableProcessOutput = void;
export const ArcSettingsInitializeDisableProcessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ArcSettingsInitializeDisableProcessOutput>;

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
export interface ArcSettingsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ArcSettingsListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/arcSettings",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ArcSettingsListByClusterInput>;

// Output Schema
export interface ArcSettingsListByClusterOutput {
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
  }) as unknown as Schema.Codec<ArcSettingsListByClusterOutput>;

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
export interface ArcSettingsReconcileInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
  properties?: { clusterNodes?: string[] };
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ArcSettingsReconcileInput>;

// Output Schema
export interface ArcSettingsReconcileOutput {
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
  }) as unknown as Schema.Codec<ArcSettingsReconcileOutput>;

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
export interface ArcSettingsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
  tags?: Record<string, string>;
  properties?: {
    connectivityProperties?: {
      enabled?: boolean;
      serviceConfigurations?: { serviceName: "WAC"; port: number }[];
    };
  };
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ArcSettingsUpdateInput>;

// Output Schema
export interface ArcSettingsUpdateOutput {
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
  }) as unknown as Schema.Codec<ArcSettingsUpdateOutput>;

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
export interface ClustersConfigureRemoteSupportInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    accessLevel?: "Diagnostics" | "DiagnosticsAndRepair";
    expirationTimeStamp?: string;
    remoteSupportType?: "Enable" | "Revoke";
  };
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ClustersConfigureRemoteSupportInput>;

// Output Schema
export interface ClustersConfigureRemoteSupportOutput {
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
  }) as unknown as Schema.Codec<ClustersConfigureRemoteSupportOutput>;

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
export interface ClustersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Error"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Connected"
      | "Disconnected"
      | "Deleted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "PartiallySucceeded"
      | "PartiallyConnected"
      | "InProgress"
      | "Accepted"
      | "Provisioning"
      | "DisableInProgress";
    status?:
      | "NotYetRegistered"
      | "ConnectedRecently"
      | "NotConnectedRecently"
      | "Disconnected"
      | "Error"
      | "NotSpecified"
      | "ValidationInProgress"
      | "ValidationSuccess"
      | "ValidationFailed"
      | "DeploymentInProgress"
      | "DeploymentFailed"
      | "DeploymentSuccess";
    connectivityStatus?:
      | "NotYetRegistered"
      | "Connected"
      | "NotConnectedRecently"
      | "PartiallyConnected"
      | "Disconnected"
      | "NotSpecified";
    cloudId?: string;
    cloudManagementEndpoint?: string;
    aadClientId?: string;
    aadTenantId?: string;
    aadApplicationObjectId?: string;
    aadServicePrincipalObjectId?: string;
    softwareAssuranceProperties?: {
      softwareAssuranceStatus?: "Enabled" | "Disabled";
      softwareAssuranceIntent?: "Enable" | "Disable";
      lastUpdated?: string;
    };
    isManagementCluster?: boolean;
    logCollectionProperties?: {
      fromDate?: string;
      toDate?: string;
      lastLogGenerated?: string;
      logCollectionSessionDetails?: {
        logStartTime?: string;
        logEndTime?: string;
        timeCollected?: string;
        logSize?: number;
        logCollectionStatus?: "None" | "InProgress" | "Failed" | "Succeeded";
        correlationId?: string;
        logCollectionJobType?: "OnDemand" | "Scheduled";
        endTimeCollected?: string;
        logCollectionError?: { errorCode?: string; errorMessage?: string };
      }[];
    };
    remoteSupportProperties?: {
      accessLevel?: "Diagnostics" | "DiagnosticsAndRepair";
      expirationTimeStamp?: string;
      remoteSupportType?: "Enable" | "Revoke";
      remoteSupportNodeSettings?: {
        arcResourceId?: string;
        state?: string;
        createdAt?: string;
        updatedAt?: string;
        connectionStatus?: string;
        connectionErrorMessage?: string;
        transcriptLocation?: string;
      }[];
      remoteSupportSessionDetails?: {
        sessionStartTime?: string;
        sessionEndTime?: string;
        nodeName?: string;
        duration?: number;
        accessLevel?: "Diagnostics" | "DiagnosticsAndRepair";
        transcriptLocation?: string;
      }[];
      remoteSupportProvisioningState?:
        | "None"
        | "GrantInProgress"
        | "RevokeInProgress"
        | "Succeeded"
        | "Failed";
    };
    desiredProperties?: {
      windowsServerSubscription?: "Disabled" | "Enabled";
      diagnosticLevel?: "Off" | "Basic" | "Enhanced";
    };
    reportedProperties?: {
      clusterName?: string;
      clusterId?: string;
      clusterVersion?: string;
      nodes?: {
        name?: string;
        id?: number;
        windowsServerSubscription?: "Disabled" | "Enabled";
        nodeType?: "FirstParty" | "ThirdParty";
        ehcResourceId?: string;
        manufacturer?: string;
        model?: string;
        osName?: string;
        osVersion?: string;
        osDisplayVersion?: string;
        serialNumber?: string;
        coreCount?: number;
        memoryInGiB?: number;
        lastLicensingTimestamp?: string;
        oemActivation?: "Disabled" | "Enabled";
      }[];
      lastUpdated?: string;
      msiExpirationTimeStamp?: string;
      imdsAttestation?: "Disabled" | "Enabled";
      diagnosticLevel?: "Off" | "Basic" | "Enhanced";
      supportedCapabilities?: string[];
      clusterType?: "FirstParty" | "ThirdParty";
      manufacturer?: string;
      oemActivation?: "Disabled" | "Enabled";
      hardwareClass?: "Small" | "Medium" | "Large";
    };
    isolatedVmAttestationConfiguration?: {
      attestationResourceId?: string;
      relyingPartyServiceEndpoint?: string;
      attestationServiceEndpoint?: string;
    };
    trialDaysRemaining?: number;
    billingModel?: string;
    billingProperties?: {
      nextBillingModel?: {
        billingModel?: string;
        capabilitiesEnabled?: string[];
        trialDaysRemaining?: number;
      };
    };
    registrationTimestamp?: string;
    lastSyncTimestamp?: string;
    lastBillingTimestamp?: string;
    serviceEndpoint?: string;
    resourceProviderObjectId?: string;
    secretsLocations?: {
      secretsType: "BackupSecrets";
      secretsLocation: string;
    }[];
    clusterPattern?: "Standard" | "RackAware";
    localAvailabilityZones?: {
      localAvailabilityZoneName?: string;
      nodes?: string[];
    }[];
    identityProvider?: "ActiveDirectory" | "LocalIdentity";
    storageType?: "S2D" | "SAN" | "SANS2D";
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
  kind?: string;
  tags?: Record<string, string>;
  location: string;
}
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
                transcriptLocation: Schema.optional(Schema.String),
              }),
            ),
          ),
          remoteSupportProvisioningState: Schema.optional(
            Schema.Literals([
              "None",
              "GrantInProgress",
              "RevokeInProgress",
              "Succeeded",
              "Failed",
            ]),
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
      billingProperties: Schema.optional(
        Schema.Struct({
          nextBillingModel: Schema.optional(
            Schema.Struct({
              billingModel: Schema.optional(Schema.String),
              capabilitiesEnabled: Schema.optional(Schema.Array(Schema.String)),
              trialDaysRemaining: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
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
      storageType: Schema.optional(Schema.Literals(["S2D", "SAN", "SANS2D"])),
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
  kind: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ClustersCreateInput>;

// Output Schema
export interface ClustersCreateOutput {
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
}) as unknown as Schema.Codec<ClustersCreateOutput>;

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
export interface ClustersCreateIdentityInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersCreateIdentityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/createClusterIdentity",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ClustersCreateIdentityInput>;

// Output Schema
export interface ClustersCreateIdentityOutput {
  properties?: {
    aadClientId?: string;
    aadTenantId?: string;
    aadServicePrincipalObjectId?: string;
    aadApplicationObjectId?: string;
  };
}
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
  }) as unknown as Schema.Codec<ClustersCreateIdentityOutput>;

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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

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
export interface ClustersExtendSoftwareAssuranceBenefitInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: { softwareAssuranceIntent?: "Enable" | "Disable" };
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ClustersExtendSoftwareAssuranceBenefitInput>;

// Output Schema
export interface ClustersExtendSoftwareAssuranceBenefitOutput {
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
  }) as unknown as Schema.Codec<ClustersExtendSoftwareAssuranceBenefitOutput>;

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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}",
    apiVersion: "2026-04-30",
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters",
      apiVersion: "2026-04-30",
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
export interface ClustersListBySubscriptionInput {
  subscriptionId: string;
}
export const ClustersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/clusters",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ClustersListBySubscriptionInput>;

// Output Schema
export interface ClustersListBySubscriptionOutput {
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
  }) as unknown as Schema.Codec<ClustersListBySubscriptionOutput>;

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
export interface ClustersTriggerLogCollectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: { fromDate: string; toDate: string };
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ClustersTriggerLogCollectionInput>;

// Output Schema
export interface ClustersTriggerLogCollectionOutput {
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
  }) as unknown as Schema.Codec<ClustersTriggerLogCollectionOutput>;

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
export interface ClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
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
    cloudManagementEndpoint?: string;
    aadClientId?: string;
    aadTenantId?: string;
    desiredProperties?: {
      windowsServerSubscription?: "Disabled" | "Enabled";
      diagnosticLevel?: "Off" | "Basic" | "Enhanced";
    };
  };
}
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
    apiVersion: "2026-04-30",
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
export interface ClustersUpdateSecretsLocationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: { secretsType: "BackupSecrets"; secretsLocation: string }[];
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ClustersUpdateSecretsLocationsInput>;

// Output Schema
export interface ClustersUpdateSecretsLocationsOutput {
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
  }) as unknown as Schema.Codec<ClustersUpdateSecretsLocationsOutput>;

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
export interface ClustersUploadCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: { certificates?: string[] };
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ClustersUploadCertificateInput>;

// Output Schema
export type ClustersUploadCertificateOutput = void;
export const ClustersUploadCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersUploadCertificateOutput>;

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
export interface DeploymentSettingsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  deploymentSettingsName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Error"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Connected"
      | "Disconnected"
      | "Deleted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "PartiallySucceeded"
      | "PartiallyConnected"
      | "InProgress"
      | "Accepted"
      | "Provisioning"
      | "DisableInProgress";
    arcNodeResourceIds: string[];
    deploymentMode: "Validate" | "Deploy";
    operationType?: "ClusterProvisioning" | "ClusterUpgrade";
    deploymentConfiguration: {
      version?: string;
      scaleUnits: {
        deploymentData: {
          securitySettings?: {
            hvciProtection?: boolean;
            drtmProtection?: boolean;
            driftControlEnforced?: boolean;
            credentialGuardEnforced?: boolean;
            smbSigningEnforced?: boolean;
            smbClusterEncryption?: boolean;
            sideChannelMitigationEnforced?: boolean;
            bitlockerBootVolume?: boolean;
            bitlockerDataVolumes?: boolean;
            wdacEnforced?: boolean;
          };
          observability?: {
            streamingDataClient?: boolean;
            euLocation?: boolean;
            episodicDataUpload?: boolean;
          };
          cluster?: {
            name?: string;
            witnessType?: string;
            witnessPath?: string;
            cloudAccountName?: string;
            azureServiceEndpoint?: string;
            hardwareClass?: "Small" | "Medium" | "Large";
            clusterPattern?: "Standard" | "RackAware";
          };
          identityProvider?: "ActiveDirectory" | "LocalIdentity";
          storage?: {
            configurationMode?: string;
            storageType?: "S2D" | "SAN" | "SANS2D";
            s2d?: {
              volumeType?: "Fixed" | "ThinProvisioned";
              overprovisioningRatio?: "0" | "1" | "2";
            };
            san?: { infraVolLunId?: string; infraPerfLunId?: string };
          };
          namingPrefix?: string;
          domainFqdn?: string;
          infrastructureNetwork?: {
            subnetMask?: string;
            gateway?: string;
            ipPools?: { startingAddress?: string; endingAddress?: string }[];
            dnsServerConfig?: "UseDnsServer" | "UseForwarder";
            dnsZones?: { dnsZoneName?: string; dnsForwarder?: string[] }[];
            dnsServers?: string[];
            useDhcp?: boolean;
          }[];
          physicalNodes?: { name?: string; ipv4Address?: string }[];
          hostNetwork?: {
            intents?: {
              name?: string;
              trafficType?: string[];
              adapter?: string[];
              overrideVirtualSwitchConfiguration?: boolean;
              virtualSwitchConfigurationOverrides?: {
                enableIov?: string;
                loadBalancingAlgorithm?: string;
              };
              overrideQosPolicy?: boolean;
              qosPolicyOverrides?: {
                priorityValue8021Action_Cluster?: string;
                priorityValue8021Action_SMB?: string;
                bandwidthPercentage_SMB?: string;
              };
              overrideAdapterProperty?: boolean;
              adapterPropertyOverrides?: {
                jumboPacket?: string;
                networkDirect?: string;
                networkDirectTechnology?: string;
              };
            }[];
            storageNetworks?: {
              name?: string;
              networkAdapterName?: string;
              vlanId?: string;
              storageAdapterIPInfo?: {
                physicalNode?: string;
                ipv4Address?: string;
                subnetMask?: string;
              }[];
            }[];
            sanNetworks?: {
              clusterNetworkConfig?: {
                adapterProperties?: {
                  priorityValue8021ActionCluster?: number;
                  priorityValue8021ActionSmb?: number;
                  bandwidthPercentageSmb?: number;
                  jumboPacket?: number;
                };
                adapterIPConfig?: {
                  name?: string;
                  networkAdapterName?: string;
                  vlanId?: number;
                  addressPrefix?: string;
                }[];
              };
            };
            storageConnectivitySwitchless?: boolean;
            enableStorageAutoIp?: boolean;
          };
          sdnIntegration?: {
            networkController?: {
              macAddressPoolStart?: string;
              macAddressPoolStop?: string;
              networkVirtualizationEnabled?: boolean;
            };
          };
          isManagementCluster?: boolean;
          adouPath?: string;
          secretsLocation?: string;
          secrets?: {
            secretName?: string;
            eceSecretName?:
              | "AzureStackLCMUserCredential"
              | "DefaultARBApplication"
              | "LocalAdminCredential"
              | "WitnessStorageKey";
            secretLocation?: string;
          }[];
          optionalServices?: { customLocation?: string };
          localAvailabilityZones?: {
            localAvailabilityZoneName?: string;
            nodes?: string[];
          }[];
          assemblyInfo?: {
            packageVersion?: string;
            payload?: {
              identifier?: string;
              hash?: string;
              fileName?: string;
              url?: string;
            }[];
          };
        };
        sbePartnerInfo?: {
          sbeDeploymentInfo?: {
            version?: string;
            family?: string;
            publisher?: string;
            sbeManifestSource?: string;
            sbeManifestCreationDate?: string;
          };
          partnerProperties?: { name?: string; value?: string }[];
          credentialList?: {
            secretName?: string;
            eceSecretName?: string;
            secretLocation?: string;
          }[];
        };
      }[];
    };
    reportedProperties?: {
      validationStatus?: {
        status?: string;
        steps?: {
          name?: string;
          description?: string;
          fullStepIndex?: string;
          startTimeUtc?: string;
          endTimeUtc?: string;
          status?: string;
          steps?: unknown[];
          exception?: string[];
        }[];
      };
      deploymentStatus?: {
        status?: string;
        steps?: {
          name?: string;
          description?: string;
          fullStepIndex?: string;
          startTimeUtc?: string;
          endTimeUtc?: string;
          status?: string;
          steps?: unknown[];
          exception?: string[];
        }[];
      };
    };
  };
}
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
                    storageType: Schema.optional(
                      Schema.Literals(["S2D", "SAN", "SANS2D"]),
                    ),
                    s2d: Schema.optional(
                      Schema.Struct({
                        volumeType: Schema.optional(
                          Schema.Literals(["Fixed", "ThinProvisioned"]),
                        ),
                        overprovisioningRatio: Schema.optional(
                          Schema.Literals(["0", "1", "2"]),
                        ),
                      }),
                    ),
                    san: Schema.optional(
                      Schema.Struct({
                        infraVolLunId: Schema.optional(Schema.String),
                        infraPerfLunId: Schema.optional(Schema.String),
                      }),
                    ),
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
                    sanNetworks: Schema.optional(
                      Schema.Struct({
                        clusterNetworkConfig: Schema.optional(
                          Schema.Struct({
                            adapterProperties: Schema.optional(
                              Schema.Struct({
                                priorityValue8021ActionCluster: Schema.optional(
                                  Schema.Number,
                                ),
                                priorityValue8021ActionSmb: Schema.optional(
                                  Schema.Number,
                                ),
                                bandwidthPercentageSmb: Schema.optional(
                                  Schema.Number,
                                ),
                                jumboPacket: Schema.optional(Schema.Number),
                              }),
                            ),
                            adapterIPConfig: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  name: Schema.optional(Schema.String),
                                  networkAdapterName: Schema.optional(
                                    Schema.String,
                                  ),
                                  vlanId: Schema.optional(Schema.Number),
                                  addressPrefix: Schema.optional(Schema.String),
                                }),
                              ),
                            ),
                          }),
                        ),
                      }),
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<DeploymentSettingsCreateOrUpdateInput>;

// Output Schema
export interface DeploymentSettingsCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<DeploymentSettingsCreateOrUpdateOutput>;

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
export interface DeploymentSettingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  deploymentSettingsName: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<DeploymentSettingsDeleteInput>;

// Output Schema
export type DeploymentSettingsDeleteOutput = void;
export const DeploymentSettingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeploymentSettingsDeleteOutput>;

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
export interface DeploymentSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  deploymentSettingsName: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<DeploymentSettingsGetInput>;

// Output Schema
export interface DeploymentSettingsGetOutput {
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
  }) as unknown as Schema.Codec<DeploymentSettingsGetOutput>;

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
export interface DeploymentSettingsListByClustersInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const DeploymentSettingsListByClustersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/deploymentSettings",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<DeploymentSettingsListByClustersInput>;

// Output Schema
export interface DeploymentSettingsListByClustersOutput {
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
  }) as unknown as Schema.Codec<DeploymentSettingsListByClustersOutput>;

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
export interface EdgeDeviceJobsCreateOrUpdateInput {
  resourceUri: string;
  edgeDeviceName: string;
  jobsName: string;
  kind: "HCI";
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<EdgeDeviceJobsCreateOrUpdateInput>;

// Output Schema
export interface EdgeDeviceJobsCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<EdgeDeviceJobsCreateOrUpdateOutput>;

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
export interface EdgeDeviceJobsDeleteInput {
  resourceUri: string;
  edgeDeviceName: string;
  jobsName: string;
}
export const EdgeDeviceJobsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
    jobsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}/jobs/{jobsName}",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<EdgeDeviceJobsDeleteInput>;

// Output Schema
export type EdgeDeviceJobsDeleteOutput = void;
export const EdgeDeviceJobsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EdgeDeviceJobsDeleteOutput>;

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
export interface EdgeDeviceJobsGetInput {
  resourceUri: string;
  edgeDeviceName: string;
  jobsName: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<EdgeDeviceJobsGetInput>;

// Output Schema
export interface EdgeDeviceJobsGetOutput {
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
  }) as unknown as Schema.Codec<EdgeDeviceJobsGetOutput>;

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
export interface EdgeDeviceJobsListByEdgeDeviceInput {
  resourceUri: string;
  edgeDeviceName: string;
}
export const EdgeDeviceJobsListByEdgeDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}/jobs",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<EdgeDeviceJobsListByEdgeDeviceInput>;

// Output Schema
export interface EdgeDeviceJobsListByEdgeDeviceOutput {
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
  }) as unknown as Schema.Codec<EdgeDeviceJobsListByEdgeDeviceOutput>;

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
export interface EdgeDevicesCreateOrUpdateInput {
  resourceUri: string;
  edgeDeviceName: string;
  kind: "HCI";
}
export const EdgeDevicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["HCI"]),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<EdgeDevicesCreateOrUpdateInput>;

// Output Schema
export interface EdgeDevicesCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<EdgeDevicesCreateOrUpdateOutput>;

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
export interface EdgeDevicesDeleteInput {
  resourceUri: string;
  edgeDeviceName: string;
}
export const EdgeDevicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceUri: Schema.String.pipe(T.PathParam()),
    edgeDeviceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<EdgeDevicesDeleteInput>;

// Output Schema
export type EdgeDevicesDeleteOutput = void;
export const EdgeDevicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EdgeDevicesDeleteOutput>;

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
export interface EdgeDevicesGetInput {
  resourceUri: string;
  edgeDeviceName: string;
}
export const EdgeDevicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  edgeDeviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices/{edgeDeviceName}",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<EdgeDevicesGetInput>;

// Output Schema
export interface EdgeDevicesGetOutput {
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
}) as unknown as Schema.Codec<EdgeDevicesGetOutput>;

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
export interface EdgeDevicesListInput {
  resourceUri: string;
}
export const EdgeDevicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/edgeDevices",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<EdgeDevicesListInput>;

// Output Schema
export interface EdgeDevicesListOutput {
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
}) as unknown as Schema.Codec<EdgeDevicesListOutput>;

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
export interface EdgeDevicesValidateInput {
  resourceUri: string;
  edgeDeviceName: string;
  edgeDeviceIds: string[];
  additionalInfo?: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<EdgeDevicesValidateInput>;

// Output Schema
export interface EdgeDevicesValidateOutput {
  status?: string;
}
export const EdgeDevicesValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EdgeDevicesValidateOutput>;

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
export interface ExtensionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
  extensionName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Error"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Connected"
      | "Disconnected"
      | "Deleted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "PartiallySucceeded"
      | "PartiallyConnected"
      | "InProgress"
      | "Accepted"
      | "Provisioning"
      | "DisableInProgress";
    extensionParameters?: {
      forceUpdateTag?: string;
      publisher?: string;
      type?: string;
      typeHandlerVersion?: string;
      autoUpgradeMinorVersion?: boolean;
      settings?: unknown;
      protectedSettings?: unknown;
      enableAutomaticUpgrade?: boolean;
    };
    aggregateState?:
      | "NotSpecified"
      | "Error"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "Connected"
      | "Disconnected"
      | "Deleted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "PartiallySucceeded"
      | "PartiallyConnected"
      | "InProgress"
      | "Accepted"
      | "Provisioning"
      | "UpgradeFailedRollbackSucceeded";
    perNodeExtensionDetails?: {
      name?: string;
      extension?: string;
      typeHandlerVersion?: string;
      state?:
        | "NotSpecified"
        | "Error"
        | "Succeeded"
        | "Canceled"
        | "Failed"
        | "Connected"
        | "Disconnected"
        | "Deleted"
        | "Creating"
        | "Updating"
        | "Deleting"
        | "Moving"
        | "PartiallySucceeded"
        | "PartiallyConnected"
        | "InProgress"
        | "Accepted"
        | "Provisioning";
      instanceView?: {
        name?: string;
        type?: string;
        typeHandlerVersion?: string;
        status?: {
          code?: string;
          level?: "Info" | "Warning" | "Error";
          displayStatus?: string;
          message?: string;
          time?: string;
        };
      };
    }[];
    managedBy?: "User" | "Azure";
  };
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ExtensionsCreateInput>;

// Output Schema
export interface ExtensionsCreateOutput {
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
) as unknown as Schema.Codec<ExtensionsCreateOutput>;

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
export interface ExtensionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
  extensionName: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ExtensionsDeleteInput>;

// Output Schema
export type ExtensionsDeleteOutput = void;
export const ExtensionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ExtensionsDeleteOutput>;

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
export interface ExtensionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
  extensionName: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ExtensionsGetInput>;

// Output Schema
export interface ExtensionsGetOutput {
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
}) as unknown as Schema.Codec<ExtensionsGetOutput>;

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
export interface ExtensionsListByArcSettingInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ExtensionsListByArcSettingInput>;

// Output Schema
export interface ExtensionsListByArcSettingOutput {
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
  }) as unknown as Schema.Codec<ExtensionsListByArcSettingOutput>;

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
export interface ExtensionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
  extensionName: string;
  properties?: {
    extensionParameters?: {
      typeHandlerVersion?: string;
      enableAutomaticUpgrade?: boolean;
      settings?: unknown;
      protectedSettings?: unknown;
    };
  };
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ExtensionsUpdateInput>;

// Output Schema
export interface ExtensionsUpdateOutput {
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
) as unknown as Schema.Codec<ExtensionsUpdateOutput>;

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
export interface ExtensionsUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  arcSettingName: string;
  extensionName: string;
  targetVersion?: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<ExtensionsUpgradeInput>;

// Output Schema
export type ExtensionsUpgradeOutput = void;
export const ExtensionsUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ExtensionsUpgradeOutput>;

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
export interface GalleryImagesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  galleryImageName: string;
  properties?: {
    containerId?: string;
    imagePath?: string;
    osType: "Windows" | "Linux";
    cloudInitDataSource?: "NoCloud" | "Azure";
    hyperVGeneration?: "V1" | "V2";
    identifier?: { publisher: string; offer: string; sku: string };
    version?: {
      name?: string;
      properties?: { storageProfile: { osDiskImage?: { sizeInMB?: number } } };
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "InProgress"
      | "Accepted"
      | "Deleting"
      | "Canceled";
    status?: {
      errorCode?: string;
      errorMessage?: string;
      provisioningStatus?: {
        operationId?: string;
        status?: "Succeeded" | "Failed" | "InProgress";
      };
      downloadStatus?: { downloadSizeInMB?: number };
      progressPercentage?: number;
    };
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const GalleryImagesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    galleryImageName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<GalleryImagesCreateOrUpdateInput>;

// Output Schema
export interface GalleryImagesCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<GalleryImagesCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a gallery image. Please note some properties can be set only during gallery image creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param galleryImageName - Name of the gallery image
 * @param api-version - The API version to use for this operation.
 */
export const GalleryImagesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GalleryImagesCreateOrUpdateInput,
    outputSchema: GalleryImagesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface GalleryImagesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  galleryImageName: string;
}
export const GalleryImagesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    galleryImageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/galleryImages/{galleryImageName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<GalleryImagesDeleteInput>;

// Output Schema
export type GalleryImagesDeleteOutput = void;
export const GalleryImagesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GalleryImagesDeleteOutput>;

// The operation
/**
 * The operation to delete a gallery image.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param galleryImageName - Name of the gallery image
 * @param api-version - The API version to use for this operation.
 */
export const GalleryImagesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GalleryImagesDeleteInput,
  outputSchema: GalleryImagesDeleteOutput,
}));
// Input Schema
export interface GalleryImagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  galleryImageName: string;
}
export const GalleryImagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  galleryImageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/galleryImages/{galleryImageName}",
    apiVersion: "2024-01-01",
  }),
) as unknown as Schema.Codec<GalleryImagesGetInput>;

// Output Schema
export interface GalleryImagesGetOutput {
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
) as unknown as Schema.Codec<GalleryImagesGetOutput>;

// The operation
/**
 * Gets a gallery image
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param galleryImageName - Name of the gallery image
 * @param api-version - The API version to use for this operation.
 */
export const GalleryImagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GalleryImagesGetInput,
  outputSchema: GalleryImagesGetOutput,
}));
// Input Schema
export interface GalleryImagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
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
) as unknown as Schema.Codec<GalleryImagesListInput>;

// Output Schema
export interface GalleryImagesListOutput {
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
  }) as unknown as Schema.Codec<GalleryImagesListOutput>;

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
export interface GalleryImagesListAllInput {
  subscriptionId: string;
}
export const GalleryImagesListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/galleryImages",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<GalleryImagesListAllInput>;

// Output Schema
export interface GalleryImagesListAllOutput {
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
  }) as unknown as Schema.Codec<GalleryImagesListAllOutput>;

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
export interface GalleryImagesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  galleryImageName: string;
  tags?: Record<string, string>;
}
export const GalleryImagesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    galleryImageName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/galleryImages/{galleryImageName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<GalleryImagesUpdateInput>;

// Output Schema
export interface GalleryImagesUpdateOutput {
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
  }) as unknown as Schema.Codec<GalleryImagesUpdateOutput>;

// The operation
/**
 * The operation to update a gallery image.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param galleryImageName - Name of the gallery image
 * @param api-version - The API version to use for this operation.
 */
export const GalleryImagesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GalleryImagesUpdateInput,
  outputSchema: GalleryImagesUpdateOutput,
}));
// Input Schema
export interface GuestAgentCreateInput {
  resourceUri: string;
  properties: {
    credentials?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    provisioningAction?: "install" | "uninstall" | "repair";
    status?: string;
    provisioningState?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GuestAgentCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
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
) as unknown as Schema.Codec<GuestAgentCreateInput>;

// Output Schema
export interface GuestAgentCreateOutput {
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
) as unknown as Schema.Codec<GuestAgentCreateOutput>;

// The operation
/**
 * Implements GuestAgent PUT method.
 *
 * Create Or Update GuestAgent.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentCreateInput,
  outputSchema: GuestAgentCreateOutput,
}));
// Input Schema
export interface GuestAgentDeleteInput {
  resourceUri: string;
}
export const GuestAgentDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/guestAgents/default",
    apiVersion: "2024-01-01",
  }),
) as unknown as Schema.Codec<GuestAgentDeleteInput>;

// Output Schema
export type GuestAgentDeleteOutput = void;
export const GuestAgentDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GuestAgentDeleteOutput>;

// The operation
/**
 * Deleted an GuestAgent.
 *
 * Implements GuestAgent DELETE method.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentDeleteInput,
  outputSchema: GuestAgentDeleteOutput,
}));
// Input Schema
export interface GuestAgentGetInput {
  resourceUri: string;
}
export const GuestAgentGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/guestAgents/default",
    apiVersion: "2024-01-01",
  }),
) as unknown as Schema.Codec<GuestAgentGetInput>;

// Output Schema
export interface GuestAgentGetOutput {
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
}) as unknown as Schema.Codec<GuestAgentGetOutput>;

// The operation
/**
 * Gets GuestAgent.
 *
 * Implements GuestAgent GET method.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentGetInput,
  outputSchema: GuestAgentGetOutput,
}));
// Input Schema
export interface GuestAgentsListInput {
  resourceUri: string;
}
export const GuestAgentsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/guestAgents",
    apiVersion: "2024-01-01",
  }),
) as unknown as Schema.Codec<GuestAgentsListInput>;

// Output Schema
export interface GuestAgentsListOutput {
  nextLink?: string;
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
}
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
}) as unknown as Schema.Codec<GuestAgentsListOutput>;

// The operation
/**
 * Implements GET GuestAgent in a vm.
 *
 * Returns the list of GuestAgent of the given vm.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentsListInput,
  outputSchema: GuestAgentsListOutput,
}));
// Input Schema
export interface HybridIdentityMetadataGetInput {
  resourceUri: string;
}
export const HybridIdentityMetadataGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<HybridIdentityMetadataGetInput>;

// Output Schema
export interface HybridIdentityMetadataGetOutput {
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
  }) as unknown as Schema.Codec<HybridIdentityMetadataGetOutput>;

// The operation
/**
 * Gets HybridIdentityMetadata.
 *
 * Implements HybridIdentityMetadata GET method.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridIdentityMetadataGetInput,
    outputSchema: HybridIdentityMetadataGetOutput,
  }),
);
// Input Schema
export interface HybridIdentityMetadataListInput {
  resourceUri: string;
}
export const HybridIdentityMetadataListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/hybridIdentityMetadata",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<HybridIdentityMetadataListInput>;

// Output Schema
export interface HybridIdentityMetadataListOutput {
  nextLink?: string;
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
}
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
  }) as unknown as Schema.Codec<HybridIdentityMetadataListOutput>;

// The operation
/**
 * Implements GET HybridIdentityMetadata in a vm.
 *
 * Returns the list of HybridIdentityMetadata of the given vm.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridIdentityMetadataListInput,
    outputSchema: HybridIdentityMetadataListOutput,
  }),
);
// Input Schema
export interface LogicalNetworksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  logicalNetworkName: string;
  properties?: {
    dhcpOptions?: { dnsServers?: string[] };
    subnets?: {
      properties?: {
        addressPrefix?: string;
        addressPrefixes?: string[];
        ipAllocationMethod?: "Dynamic" | "Static";
        ipConfigurationReferences?: { ID?: string }[];
        routeTable?: {
          etag?: string;
          name?: string;
          type?: string;
          properties?: {
            routes?: {
              properties?: {
                addressPrefix?: string;
                nextHopIpAddress?: string;
              };
              name?: string;
            }[];
          };
        };
        ipPools?: {
          name?: string;
          ipPoolType?: "vm" | "vippool";
          start?: string;
          end?: string;
          info?: { used?: string; available?: string };
        }[];
        vlan?: number;
      };
      name?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "InProgress"
      | "Accepted"
      | "Deleting"
      | "Canceled";
    vmSwitchName?: string;
    status?: {
      errorCode?: string;
      errorMessage?: string;
      provisioningStatus?: {
        operationId?: string;
        status?: "Succeeded" | "Failed" | "InProgress";
      };
    };
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const LogicalNetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    logicalNetworkName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<LogicalNetworksCreateOrUpdateInput>;

// Output Schema
export interface LogicalNetworksCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<LogicalNetworksCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a logical network. Please note some properties can be set only during logical network creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param logicalNetworkName - Name of the logical network
 * @param api-version - The API version to use for this operation.
 */
export const LogicalNetworksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LogicalNetworksCreateOrUpdateInput,
    outputSchema: LogicalNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export interface LogicalNetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  logicalNetworkName: string;
}
export const LogicalNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    logicalNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<LogicalNetworksDeleteInput>;

// Output Schema
export type LogicalNetworksDeleteOutput = void;
export const LogicalNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LogicalNetworksDeleteOutput>;

// The operation
/**
 * The operation to delete a logical network.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param logicalNetworkName - Name of the logical network
 * @param api-version - The API version to use for this operation.
 */
export const LogicalNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogicalNetworksDeleteInput,
    outputSchema: LogicalNetworksDeleteOutput,
  }),
);
// Input Schema
export interface LogicalNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  logicalNetworkName: string;
}
export const LogicalNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    logicalNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<LogicalNetworksGetInput>;

// Output Schema
export interface LogicalNetworksGetOutput {
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
  }) as unknown as Schema.Codec<LogicalNetworksGetOutput>;

// The operation
/**
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param logicalNetworkName - Name of the logical network
 * @param api-version - The API version to use for this operation.
 */
export const LogicalNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogicalNetworksGetInput,
  outputSchema: LogicalNetworksGetOutput,
}));
// Input Schema
export interface LogicalNetworksListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
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
  ) as unknown as Schema.Codec<LogicalNetworksListInput>;

// Output Schema
export interface LogicalNetworksListOutput {
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
  }) as unknown as Schema.Codec<LogicalNetworksListOutput>;

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
export interface LogicalNetworksListAllInput {
  subscriptionId: string;
}
export const LogicalNetworksListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/logicalNetworks",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<LogicalNetworksListAllInput>;

// Output Schema
export interface LogicalNetworksListAllOutput {
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
  }) as unknown as Schema.Codec<LogicalNetworksListAllOutput>;

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
export interface LogicalNetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  logicalNetworkName: string;
  tags?: Record<string, string>;
}
export const LogicalNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    logicalNetworkName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/logicalNetworks/{logicalNetworkName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<LogicalNetworksUpdateInput>;

// Output Schema
export interface LogicalNetworksUpdateOutput {
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
  }) as unknown as Schema.Codec<LogicalNetworksUpdateOutput>;

// The operation
/**
 * The operation to update a logical network.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param logicalNetworkName - Name of the logical network
 * @param api-version - The API version to use for this operation.
 */
export const LogicalNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogicalNetworksUpdateInput,
    outputSchema: LogicalNetworksUpdateOutput,
  }),
);
// Input Schema
export interface MarketplaceGalleryImagesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  marketplaceGalleryImageName: string;
  properties?: {
    containerId?: string;
    osType: "Windows" | "Linux";
    cloudInitDataSource?: "NoCloud" | "Azure";
    hyperVGeneration?: "V1" | "V2";
    identifier?: { publisher: string; offer: string; sku: string };
    version?: {
      name?: string;
      properties?: { storageProfile: { osDiskImage?: { sizeInMB?: number } } };
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "InProgress"
      | "Accepted"
      | "Deleting"
      | "Canceled";
    status?: {
      errorCode?: string;
      errorMessage?: string;
      provisioningStatus?: {
        operationId?: string;
        status?: "Succeeded" | "Failed" | "InProgress";
      };
      downloadStatus?: { downloadSizeInMB?: number };
      progressPercentage?: number;
    };
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const MarketplaceGalleryImagesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    marketplaceGalleryImageName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<MarketplaceGalleryImagesCreateOrUpdateInput>;

// Output Schema
export interface MarketplaceGalleryImagesCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<MarketplaceGalleryImagesCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a marketplace gallery image. Please note some properties can be set only during marketplace gallery image creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param marketplaceGalleryImageName - Name of the marketplace gallery image
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceGalleryImagesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceGalleryImagesCreateOrUpdateInput,
    outputSchema: MarketplaceGalleryImagesCreateOrUpdateOutput,
  }));
// Input Schema
export interface MarketplaceGalleryImagesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  marketplaceGalleryImageName: string;
}
export const MarketplaceGalleryImagesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    marketplaceGalleryImageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages/{marketplaceGalleryImageName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceGalleryImagesDeleteInput>;

// Output Schema
export type MarketplaceGalleryImagesDeleteOutput = void;
export const MarketplaceGalleryImagesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MarketplaceGalleryImagesDeleteOutput>;

// The operation
/**
 * The operation to delete a marketplace gallery image.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param marketplaceGalleryImageName - Name of the marketplace gallery image
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceGalleryImagesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceGalleryImagesDeleteInput,
    outputSchema: MarketplaceGalleryImagesDeleteOutput,
  }));
// Input Schema
export interface MarketplaceGalleryImagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  marketplaceGalleryImageName: string;
}
export const MarketplaceGalleryImagesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    marketplaceGalleryImageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages/{marketplaceGalleryImageName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceGalleryImagesGetInput>;

// Output Schema
export interface MarketplaceGalleryImagesGetOutput {
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
  }) as unknown as Schema.Codec<MarketplaceGalleryImagesGetOutput>;

// The operation
/**
 * Gets a marketplace gallery image
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param marketplaceGalleryImageName - Name of the marketplace gallery image
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceGalleryImagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MarketplaceGalleryImagesGetInput,
    outputSchema: MarketplaceGalleryImagesGetOutput,
  }),
);
// Input Schema
export interface MarketplaceGalleryImagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
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
  ) as unknown as Schema.Codec<MarketplaceGalleryImagesListInput>;

// Output Schema
export interface MarketplaceGalleryImagesListOutput {
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
  }) as unknown as Schema.Codec<MarketplaceGalleryImagesListOutput>;

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
export interface MarketplaceGalleryImagesListAllInput {
  subscriptionId: string;
}
export const MarketplaceGalleryImagesListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceGalleryImagesListAllInput>;

// Output Schema
export interface MarketplaceGalleryImagesListAllOutput {
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
  }) as unknown as Schema.Codec<MarketplaceGalleryImagesListAllOutput>;

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
export interface MarketplaceGalleryImagesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  marketplaceGalleryImageName: string;
  tags?: Record<string, string>;
}
export const MarketplaceGalleryImagesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    marketplaceGalleryImageName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages/{marketplaceGalleryImageName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceGalleryImagesUpdateInput>;

// Output Schema
export interface MarketplaceGalleryImagesUpdateOutput {
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
  }) as unknown as Schema.Codec<MarketplaceGalleryImagesUpdateOutput>;

// The operation
/**
 * The operation to update a marketplace gallery image.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param marketplaceGalleryImageName - Name of the marketplace gallery image
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceGalleryImagesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceGalleryImagesUpdateInput,
    outputSchema: MarketplaceGalleryImagesUpdateOutput,
  }));
// Input Schema
export interface NetworkInterfacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkInterfaceName: string;
  properties?: {
    ipConfigurations?: {
      name?: string;
      properties?: {
        gateway?: string;
        prefixLength?: string;
        privateIPAddress?: string;
        subnet?: { id?: string };
      };
    }[];
    macAddress?: string;
    dnsSettings?: { dnsServers?: string[] };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "InProgress"
      | "Accepted"
      | "Deleting"
      | "Canceled";
    status?: {
      errorCode?: string;
      errorMessage?: string;
      provisioningStatus?: {
        operationId?: string;
        status?: "Succeeded" | "Failed" | "InProgress";
      };
    };
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkInterfacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<NetworkInterfacesCreateOrUpdateInput>;

// Output Schema
export interface NetworkInterfacesCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<NetworkInterfacesCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a network interface. Please note some properties can be set only during network interface creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkInterfaceName - Name of the network interface
 * @param api-version - The API version to use for this operation.
 */
export const NetworkInterfacesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkInterfacesCreateOrUpdateInput,
    outputSchema: NetworkInterfacesCreateOrUpdateOutput,
  }));
// Input Schema
export interface NetworkInterfacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkInterfaceName: string;
}
export const NetworkInterfacesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<NetworkInterfacesDeleteInput>;

// Output Schema
export type NetworkInterfacesDeleteOutput = void;
export const NetworkInterfacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkInterfacesDeleteOutput>;

// The operation
/**
 * The operation to delete a network interface.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkInterfaceName - Name of the network interface
 * @param api-version - The API version to use for this operation.
 */
export const NetworkInterfacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesDeleteInput,
    outputSchema: NetworkInterfacesDeleteOutput,
  }),
);
// Input Schema
export interface NetworkInterfacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkInterfaceName: string;
}
export const NetworkInterfacesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<NetworkInterfacesGetInput>;

// Output Schema
export interface NetworkInterfacesGetOutput {
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
  }) as unknown as Schema.Codec<NetworkInterfacesGetOutput>;

// The operation
/**
 * Gets a network interface
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkInterfaceName - Name of the network interface
 * @param api-version - The API version to use for this operation.
 */
export const NetworkInterfacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesGetInput,
    outputSchema: NetworkInterfacesGetOutput,
  }),
);
// Input Schema
export interface NetworkInterfacesListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
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
  ) as unknown as Schema.Codec<NetworkInterfacesListInput>;

// Output Schema
export interface NetworkInterfacesListOutput {
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
  }) as unknown as Schema.Codec<NetworkInterfacesListOutput>;

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
export interface NetworkInterfacesListAllInput {
  subscriptionId: string;
}
export const NetworkInterfacesListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/networkInterfaces",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<NetworkInterfacesListAllInput>;

// Output Schema
export interface NetworkInterfacesListAllOutput {
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
  }) as unknown as Schema.Codec<NetworkInterfacesListAllOutput>;

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
export interface NetworkInterfacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkInterfaceName: string;
  tags?: Record<string, string>;
}
export const NetworkInterfacesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<NetworkInterfacesUpdateInput>;

// Output Schema
export interface NetworkInterfacesUpdateOutput {
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
  }) as unknown as Schema.Codec<NetworkInterfacesUpdateOutput>;

// The operation
/**
 * The operation to update a network interface.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkInterfaceName - Name of the network interface
 * @param api-version - The API version to use for this operation.
 */
export const NetworkInterfacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesUpdateInput,
    outputSchema: NetworkInterfacesUpdateOutput,
  }),
);
// Input Schema
export interface OffersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  publisherName: string;
  offerName: string;
  $expand?: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<OffersGetInput>;

// Output Schema
export interface OffersGetOutput {
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
}) as unknown as Schema.Codec<OffersGetOutput>;

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
export interface OffersListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  $expand?: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<OffersListByClusterInput>;

// Output Schema
export interface OffersListByClusterOutput {
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
  }) as unknown as Schema.Codec<OffersListByClusterOutput>;

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
export interface OffersListByPublisherInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  publisherName: string;
  $expand?: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<OffersListByPublisherInput>;

// Output Schema
export interface OffersListByPublisherOutput {
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
  }) as unknown as Schema.Codec<OffersListByPublisherOutput>;

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
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AzureStackHCI/operations",
    apiVersion: "2024-01-01",
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
 * List all available Microsoft.AzureStackHCI provider operations
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SecuritySettingsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  securitySettingsName: string;
  properties?: {
    securedCoreComplianceAssignment?: "Audit" | "ApplyAndAutoCorrect";
    wdacComplianceAssignment?: "Audit" | "ApplyAndAutoCorrect";
    smbEncryptionForIntraClusterTrafficComplianceAssignment?:
      | "Audit"
      | "ApplyAndAutoCorrect";
    securityComplianceStatus?: {
      securedCoreCompliance?: "Compliant" | "NonCompliant" | "Pending";
      wdacCompliance?: "Compliant" | "NonCompliant" | "Pending";
      dataAtRestEncrypted?: "Compliant" | "NonCompliant" | "Pending";
      dataInTransitProtected?: "Compliant" | "NonCompliant" | "Pending";
      lastUpdated?: string;
    };
    provisioningState?:
      | "NotSpecified"
      | "Error"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Connected"
      | "Disconnected"
      | "Deleted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "PartiallySucceeded"
      | "PartiallyConnected"
      | "InProgress"
      | "Accepted"
      | "Provisioning"
      | "DisableInProgress";
  };
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<SecuritySettingsCreateOrUpdateInput>;

// Output Schema
export interface SecuritySettingsCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<SecuritySettingsCreateOrUpdateOutput>;

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
export interface SecuritySettingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  securitySettingsName: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<SecuritySettingsDeleteInput>;

// Output Schema
export type SecuritySettingsDeleteOutput = void;
export const SecuritySettingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SecuritySettingsDeleteOutput>;

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
export interface SecuritySettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  securitySettingsName: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<SecuritySettingsGetInput>;

// Output Schema
export interface SecuritySettingsGetOutput {
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
  }) as unknown as Schema.Codec<SecuritySettingsGetOutput>;

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
export interface SecuritySettingsListByClustersInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const SecuritySettingsListByClustersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/securitySettings",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<SecuritySettingsListByClustersInput>;

// Output Schema
export interface SecuritySettingsListByClustersOutput {
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
  }) as unknown as Schema.Codec<SecuritySettingsListByClustersOutput>;

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
export interface SkusGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  publisherName: string;
  offerName: string;
  skuName: string;
  $expand?: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<SkusGetInput>;

// Output Schema
export interface SkusGetOutput {
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
}) as unknown as Schema.Codec<SkusGetOutput>;

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
export interface SkusListByOfferInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  publisherName: string;
  offerName: string;
  $expand?: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<SkusListByOfferInput>;

// Output Schema
export interface SkusListByOfferOutput {
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
}) as unknown as Schema.Codec<SkusListByOfferOutput>;

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
export interface StorageContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageContainerName: string;
  properties?: {
    path: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "InProgress"
      | "Accepted"
      | "Deleting"
      | "Canceled";
    status?: {
      errorCode?: string;
      errorMessage?: string;
      availableSizeMB?: number;
      containerSizeMB?: number;
      provisioningStatus?: {
        operationId?: string;
        status?: "Succeeded" | "Failed" | "InProgress";
      };
    };
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const StorageContainersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageContainerName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<StorageContainersCreateOrUpdateInput>;

// Output Schema
export interface StorageContainersCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<StorageContainersCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a storage container. Please note some properties can be set only during storage container creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageContainerName - Name of the storage container
 * @param api-version - The API version to use for this operation.
 */
export const StorageContainersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageContainersCreateOrUpdateInput,
    outputSchema: StorageContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface StorageContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageContainerName: string;
}
export const StorageContainersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/storageContainers/{storageContainerName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<StorageContainersDeleteInput>;

// Output Schema
export type StorageContainersDeleteOutput = void;
export const StorageContainersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageContainersDeleteOutput>;

// The operation
/**
 * The operation to delete a storage container.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageContainerName - Name of the storage container
 * @param api-version - The API version to use for this operation.
 */
export const StorageContainersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageContainersDeleteInput,
    outputSchema: StorageContainersDeleteOutput,
  }),
);
// Input Schema
export interface StorageContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageContainerName: string;
}
export const StorageContainersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/storageContainers/{storageContainerName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<StorageContainersGetInput>;

// Output Schema
export interface StorageContainersGetOutput {
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
  }) as unknown as Schema.Codec<StorageContainersGetOutput>;

// The operation
/**
 * Gets a storage container
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageContainerName - Name of the storage container
 * @param api-version - The API version to use for this operation.
 */
export const StorageContainersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageContainersGetInput,
    outputSchema: StorageContainersGetOutput,
  }),
);
// Input Schema
export interface StorageContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
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
  ) as unknown as Schema.Codec<StorageContainersListInput>;

// Output Schema
export interface StorageContainersListOutput {
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
  }) as unknown as Schema.Codec<StorageContainersListOutput>;

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
export interface StorageContainersListAllInput {
  subscriptionId: string;
}
export const StorageContainersListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/storageContainers",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<StorageContainersListAllInput>;

// Output Schema
export interface StorageContainersListAllOutput {
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
  }) as unknown as Schema.Codec<StorageContainersListAllOutput>;

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
export interface StorageContainersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageContainerName: string;
  tags?: Record<string, string>;
}
export const StorageContainersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageContainerName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/storageContainers/{storageContainerName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<StorageContainersUpdateInput>;

// Output Schema
export interface StorageContainersUpdateOutput {
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
  }) as unknown as Schema.Codec<StorageContainersUpdateOutput>;

// The operation
/**
 * The operation to update a storage container.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageContainerName - Name of the storage container
 * @param api-version - The API version to use for this operation.
 */
export const StorageContainersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageContainersUpdateInput,
    outputSchema: StorageContainersUpdateOutput,
  }),
);
// Input Schema
export interface UpdateRunsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  updateName: string;
  updateRunName: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<UpdateRunsDeleteInput>;

// Output Schema
export type UpdateRunsDeleteOutput = void;
export const UpdateRunsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UpdateRunsDeleteOutput>;

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
export interface UpdateRunsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  updateName: string;
  updateRunName: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<UpdateRunsGetInput>;

// Output Schema
export interface UpdateRunsGetOutput {
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
}) as unknown as Schema.Codec<UpdateRunsGetOutput>;

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
export interface UpdateRunsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  updateName: string;
}
export const UpdateRunsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}/updateRuns",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<UpdateRunsListInput>;

// Output Schema
export interface UpdateRunsListOutput {
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
}) as unknown as Schema.Codec<UpdateRunsListOutput>;

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
export interface UpdateRunsPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  updateName: string;
  updateRunName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Error"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Connected"
      | "Disconnected"
      | "Deleted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "PartiallySucceeded"
      | "PartiallyConnected"
      | "InProgress"
      | "Accepted"
      | "Provisioning"
      | "DisableInProgress";
    timeStarted?: string;
    lastUpdatedTime?: string;
    duration?: string;
    state?: "Unknown" | "Succeeded" | "InProgress" | "Failed";
    progress?: {
      name?: string;
      description?: string;
      errorMessage?: string;
      status?: string;
      startTimeUtc?: string;
      endTimeUtc?: string;
      lastUpdatedTimeUtc?: string;
      expectedExecutionTime?: string;
      steps?: unknown[];
    };
  };
  location?: string;
}
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<UpdateRunsPutInput>;

// Output Schema
export interface UpdateRunsPutOutput {
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
}) as unknown as Schema.Codec<UpdateRunsPutOutput>;

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
export interface UpdatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  updateName: string;
}
export const UpdatesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<UpdatesDeleteInput>;

// Output Schema
export type UpdatesDeleteOutput = void;
export const UpdatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UpdatesDeleteOutput>;

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
export interface UpdatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  updateName: string;
}
export const UpdatesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<UpdatesGetInput>;

// Output Schema
export interface UpdatesGetOutput {
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
}) as unknown as Schema.Codec<UpdatesGetOutput>;

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
export interface UpdatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const UpdatesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<UpdatesListInput>;

// Output Schema
export interface UpdatesListOutput {
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
}) as unknown as Schema.Codec<UpdatesListOutput>;

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
export interface UpdatesPostInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  updateName: string;
}
export const UpdatesPostInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}/apply",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<UpdatesPostInput>;

// Output Schema
export type UpdatesPostOutput = void;
export const UpdatesPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UpdatesPostOutput>;

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
export interface UpdatesPrepareInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  updateName: string;
}
export const UpdatesPrepareInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  updateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}/prepare",
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<UpdatesPrepareInput>;

// Output Schema
export type UpdatesPrepareOutput = void;
export const UpdatesPrepareOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UpdatesPrepareOutput>;

// The operation
/**
 * Prepare Update
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param updateName - The name of the Update
 */
export const UpdatesPrepare = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdatesPrepareInput,
  outputSchema: UpdatesPrepareOutput,
}));
// Input Schema
export interface UpdatesPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  updateName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Error"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Connected"
      | "Disconnected"
      | "Deleted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "PartiallySucceeded"
      | "PartiallyConnected"
      | "InProgress"
      | "Accepted"
      | "Provisioning"
      | "DisableInProgress";
    installedDate?: string;
    description?: string;
    minSbeVersionRequired?: string;
    state?:
      | "HasPrerequisite"
      | "Obsolete"
      | "Ready"
      | "NotApplicableBecauseAnotherUpdateIsInProgress"
      | "Preparing"
      | "Installing"
      | "Installed"
      | "PreparationFailed"
      | "InstallationFailed"
      | "Invalid"
      | "Recalled"
      | "Downloading"
      | "DownloadFailed"
      | "HealthChecking"
      | "HealthCheckFailed"
      | "ReadyToInstall"
      | "ScanInProgress"
      | "ScanFailed"
      | "AdditionalContentRequired"
      | "HealthCheckExpired"
      | "PendingOEMValidation";
    prerequisites?: {
      updateType?: string;
      version?: string;
      packageName?: string;
    }[];
    componentVersions?: {
      packageType?: string;
      version?: string;
      lastUpdated?: string;
    }[];
    rebootRequired?: "Unknown" | "True" | "False";
    healthState?:
      | "Unknown"
      | "Success"
      | "Failure"
      | "Warning"
      | "Error"
      | "InProgress";
    healthCheckResult?: {
      name?: string;
      displayName?: string;
      tags?: { key?: string; value?: string };
      healthCheckTags?: unknown;
      title?: string;
      status?:
        | "NotYetRegistered"
        | "ConnectedRecently"
        | "NotConnectedRecently"
        | "Disconnected"
        | "Error"
        | "NotSpecified"
        | "ValidationInProgress"
        | "ValidationSuccess"
        | "ValidationFailed"
        | "DeploymentInProgress"
        | "DeploymentFailed"
        | "DeploymentSuccess";
      severity?: "Critical" | "Warning" | "Informational" | "Hidden";
      description?: string;
      remediation?: string;
      targetResourceID?: string;
      targetResourceName?: string;
      targetResourceType?: string;
      timestamp?: string;
      additionalData?: string;
      healthCheckSource?: string;
    }[];
    healthCheckDate?: string;
    packagePath?: string;
    packageSizeInMb?: number;
    displayName?: string;
    version?: string;
    publisher?: string;
    releaseLink?: string;
    availabilityType?: "Local" | "Online" | "Notify";
    packageType?: string;
    additionalProperties?: string;
    updateStateProperties?: {
      progressPercentage?: number;
      notifyMessage?: string;
    };
  };
  location?: string;
}
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
          "HealthCheckExpired",
          "PendingOEMValidation",
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
    apiVersion: "2026-04-30",
  }),
) as unknown as Schema.Codec<UpdatesPutInput>;

// Output Schema
export interface UpdatesPutOutput {
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
}) as unknown as Schema.Codec<UpdatesPutOutput>;

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
export interface UpdateSummariesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const UpdateSummariesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updateSummaries/default",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<UpdateSummariesDeleteInput>;

// Output Schema
export type UpdateSummariesDeleteOutput = void;
export const UpdateSummariesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UpdateSummariesDeleteOutput>;

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
export interface UpdateSummariesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const UpdateSummariesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updateSummaries/default",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<UpdateSummariesGetInput>;

// Output Schema
export interface UpdateSummariesGetOutput {
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
  }) as unknown as Schema.Codec<UpdateSummariesGetOutput>;

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
export interface UpdateSummariesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const UpdateSummariesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updateSummaries",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<UpdateSummariesListInput>;

// Output Schema
export interface UpdateSummariesListOutput {
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
  }) as unknown as Schema.Codec<UpdateSummariesListOutput>;

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
export interface UpdateSummariesOperationGroupCheckHealthInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const UpdateSummariesOperationGroupCheckHealthInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updateSummaries/default/checkHealth",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<UpdateSummariesOperationGroupCheckHealthInput>;

// Output Schema
export type UpdateSummariesOperationGroupCheckHealthOutput = void;
export const UpdateSummariesOperationGroupCheckHealthOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UpdateSummariesOperationGroupCheckHealthOutput>;

// The operation
/**
 * Check health of UpdateSummaries
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const UpdateSummariesOperationGroupCheckHealth =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateSummariesOperationGroupCheckHealthInput,
    outputSchema: UpdateSummariesOperationGroupCheckHealthOutput,
  }));
// Input Schema
export interface UpdateSummariesOperationGroupCheckUpdatesInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  updateName?: string;
}
export const UpdateSummariesOperationGroupCheckUpdatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    updateName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updateSummaries/default/checkUpdates",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<UpdateSummariesOperationGroupCheckUpdatesInput>;

// Output Schema
export type UpdateSummariesOperationGroupCheckUpdatesOutput = void;
export const UpdateSummariesOperationGroupCheckUpdatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UpdateSummariesOperationGroupCheckUpdatesOutput>;

// The operation
/**
 * Check for updates
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const UpdateSummariesOperationGroupCheckUpdates =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateSummariesOperationGroupCheckUpdatesInput,
    outputSchema: UpdateSummariesOperationGroupCheckUpdatesOutput,
  }));
// Input Schema
export interface UpdateSummariesPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Error"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Connected"
      | "Disconnected"
      | "Deleted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "PartiallySucceeded"
      | "PartiallyConnected"
      | "InProgress"
      | "Accepted"
      | "Provisioning"
      | "DisableInProgress";
    oemFamily?: string;
    currentOemVersion?: string;
    hardwareModel?: string;
    packageVersions?: {
      packageType?: string;
      version?: string;
      lastUpdated?: string;
    }[];
    currentVersion?: string;
    currentSbeVersion?: string;
    lastUpdated?: string;
    lastChecked?: string;
    healthState?:
      | "Unknown"
      | "Success"
      | "Failure"
      | "Warning"
      | "Error"
      | "InProgress";
    healthCheckResult?: {
      name?: string;
      displayName?: string;
      tags?: { key?: string; value?: string };
      healthCheckTags?: unknown;
      title?: string;
      status?:
        | "NotYetRegistered"
        | "ConnectedRecently"
        | "NotConnectedRecently"
        | "Disconnected"
        | "Error"
        | "NotSpecified"
        | "ValidationInProgress"
        | "ValidationSuccess"
        | "ValidationFailed"
        | "DeploymentInProgress"
        | "DeploymentFailed"
        | "DeploymentSuccess";
      severity?: "Critical" | "Warning" | "Informational" | "Hidden";
      description?: string;
      remediation?: string;
      targetResourceID?: string;
      targetResourceName?: string;
      targetResourceType?: string;
      timestamp?: string;
      additionalData?: string;
      healthCheckSource?: string;
    }[];
    healthCheckDate?: string;
    state?:
      | "Unknown"
      | "AppliedSuccessfully"
      | "UpdateAvailable"
      | "UpdateInProgress"
      | "UpdateFailed"
      | "NeedsAttention"
      | "PreparationInProgress"
      | "PreparationFailed";
  };
  location?: string;
}
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
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<UpdateSummariesPutInput>;

// Output Schema
export interface UpdateSummariesPutOutput {
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
  }) as unknown as Schema.Codec<UpdateSummariesPutOutput>;

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
export interface ValidatedSolutionRecipesGetInput {
  subscriptionId: string;
  location: string;
  validatedSolutionRecipeName: string;
}
export const ValidatedSolutionRecipesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    validatedSolutionRecipeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/locations/{location}/validatedSolutionRecipes/{validatedSolutionRecipeName}",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ValidatedSolutionRecipesGetInput>;

// Output Schema
export interface ValidatedSolutionRecipesGetOutput {
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
  }) as unknown as Schema.Codec<ValidatedSolutionRecipesGetOutput>;

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
export interface ValidatedSolutionRecipesListBySubscriptionLocationResourceInput {
  subscriptionId: string;
  location: string;
}
export const ValidatedSolutionRecipesListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/locations/{location}/validatedSolutionRecipes",
      apiVersion: "2026-04-30",
    }),
  ) as unknown as Schema.Codec<ValidatedSolutionRecipesListBySubscriptionLocationResourceInput>;

// Output Schema
export interface ValidatedSolutionRecipesListBySubscriptionLocationResourceOutput {
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
  }) as unknown as Schema.Codec<ValidatedSolutionRecipesListBySubscriptionLocationResourceOutput>;

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
export interface VirtualHardDisksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualHardDiskName: string;
  properties?: {
    blockSizeBytes?: number;
    diskSizeGB?: number;
    dynamic?: boolean;
    logicalSectorBytes?: number;
    physicalSectorBytes?: number;
    hyperVGeneration?: "V1" | "V2";
    diskFileFormat?: "vhdx" | "vhd";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "InProgress"
      | "Accepted"
      | "Deleting"
      | "Canceled";
    containerId?: string;
    status?: {
      errorCode?: string;
      errorMessage?: string;
      provisioningStatus?: {
        operationId?: string;
        status?: "Succeeded" | "Failed" | "InProgress";
      };
    };
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const VirtualHardDisksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualHardDiskName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<VirtualHardDisksCreateOrUpdateInput>;

// Output Schema
export interface VirtualHardDisksCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<VirtualHardDisksCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a virtual hard disk. Please note some properties can be set only during virtual hard disk creation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualHardDiskName - Name of the virtual hard disk
 * @param api-version - The API version to use for this operation.
 */
export const VirtualHardDisksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualHardDisksCreateOrUpdateInput,
    outputSchema: VirtualHardDisksCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualHardDisksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualHardDiskName: string;
}
export const VirtualHardDisksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualHardDiskName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/virtualHardDisks/{virtualHardDiskName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualHardDisksDeleteInput>;

// Output Schema
export type VirtualHardDisksDeleteOutput = void;
export const VirtualHardDisksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualHardDisksDeleteOutput>;

// The operation
/**
 * The operation to delete a virtual hard disk.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualHardDiskName - Name of the virtual hard disk
 * @param api-version - The API version to use for this operation.
 */
export const VirtualHardDisksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualHardDisksDeleteInput,
    outputSchema: VirtualHardDisksDeleteOutput,
  }),
);
// Input Schema
export interface VirtualHardDisksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualHardDiskName: string;
}
export const VirtualHardDisksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualHardDiskName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/virtualHardDisks/{virtualHardDiskName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualHardDisksGetInput>;

// Output Schema
export interface VirtualHardDisksGetOutput {
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
  }) as unknown as Schema.Codec<VirtualHardDisksGetOutput>;

// The operation
/**
 * Gets a virtual hard disk
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualHardDiskName - Name of the virtual hard disk
 * @param api-version - The API version to use for this operation.
 */
export const VirtualHardDisksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualHardDisksGetInput,
  outputSchema: VirtualHardDisksGetOutput,
}));
// Input Schema
export interface VirtualHardDisksListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
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
  ) as unknown as Schema.Codec<VirtualHardDisksListInput>;

// Output Schema
export interface VirtualHardDisksListOutput {
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
  }) as unknown as Schema.Codec<VirtualHardDisksListOutput>;

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
export interface VirtualHardDisksListAllInput {
  subscriptionId: string;
}
export const VirtualHardDisksListAllInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStackHCI/virtualHardDisks",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualHardDisksListAllInput>;

// Output Schema
export interface VirtualHardDisksListAllOutput {
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
  }) as unknown as Schema.Codec<VirtualHardDisksListAllOutput>;

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
export interface VirtualHardDisksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualHardDiskName: string;
  tags?: Record<string, string>;
}
export const VirtualHardDisksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualHardDiskName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/virtualHardDisks/{virtualHardDiskName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualHardDisksUpdateInput>;

// Output Schema
export interface VirtualHardDisksUpdateOutput {
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
  }) as unknown as Schema.Codec<VirtualHardDisksUpdateOutput>;

// The operation
/**
 * The operation to update a virtual hard disk.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualHardDiskName - Name of the virtual hard disk
 * @param api-version - The API version to use for this operation.
 */
export const VirtualHardDisksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualHardDisksUpdateInput,
    outputSchema: VirtualHardDisksUpdateOutput,
  }),
);
// Input Schema
export interface VirtualMachineInstancesCreateOrUpdateInput {
  resourceUri: string;
  properties?: {
    hardwareProfile?: {
      vmSize?:
        | "Default"
        | "Standard_A2_v2"
        | "Standard_A4_v2"
        | "Standard_D2s_v3"
        | "Standard_D4s_v3"
        | "Standard_D8s_v3"
        | "Standard_D16s_v3"
        | "Standard_D32s_v3"
        | "Standard_DS2_v2"
        | "Standard_DS3_v2"
        | "Standard_DS4_v2"
        | "Standard_DS5_v2"
        | "Standard_DS13_v2"
        | "Standard_K8S_v1"
        | "Standard_K8S2_v1"
        | "Standard_K8S3_v1"
        | "Standard_K8S4_v1"
        | "Standard_NK6"
        | "Standard_NK12"
        | "Standard_NV6"
        | "Standard_NV12"
        | "Standard_K8S5_v1"
        | "Custom";
      processors?: number;
      memoryMB?: number;
      dynamicMemoryConfig?: {
        maximumMemoryMB?: number;
        minimumMemoryMB?: number;
        targetMemoryBuffer?: number;
      };
    };
    networkProfile?: { networkInterfaces?: { id?: string }[] };
    osProfile?: {
      adminPassword?: string | Redacted.Redacted<string>;
      adminUsername?: string;
      computerName?: string;
      linuxConfiguration?: {
        disablePasswordAuthentication?: boolean;
        ssh?: { publicKeys?: { path?: string; keyData?: string }[] };
        provisionVMAgent?: boolean;
        provisionVMConfigAgent?: boolean;
      };
      windowsConfiguration?: {
        enableAutomaticUpdates?: boolean;
        ssh?: { publicKeys?: { path?: string; keyData?: string }[] };
        timeZone?: string;
        provisionVMAgent?: boolean;
        provisionVMConfigAgent?: boolean;
      };
    };
    securityProfile?: {
      enableTPM?: boolean;
      uefiSettings?: { secureBootEnabled?: boolean };
      securityType?: "TrustedLaunch" | "ConfidentialVM";
    };
    storageProfile?: {
      dataDisks?: { id?: string }[];
      imageReference?: { id?: string };
      osDisk?: { id?: string; osType?: "Linux" | "Windows" };
      vmConfigStoragePathId?: string;
    };
    httpProxyConfig?: {
      httpProxy?: string;
      httpsProxy?: string;
      noProxy?: string[];
      trustedCa?: string;
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "InProgress"
      | "Accepted"
      | "Deleting"
      | "Canceled";
    instanceView?: {
      vmAgent?: {
        vmConfigAgentVersion?: string;
        statuses?: {
          code?: string;
          level?: "Info" | "Warning" | "Error";
          displayStatus?: string;
          message?: string;
          time?: string;
        }[];
      };
    };
    status?: {
      errorCode?: string;
      errorMessage?: string;
      powerState?:
        | "Deallocated"
        | "Deallocating"
        | "Running"
        | "Starting"
        | "Stopped"
        | "Stopping"
        | "Unknown";
      provisioningStatus?: {
        operationId?: string;
        status?: "Succeeded" | "Failed" | "InProgress";
      };
    };
    guestAgentInstallStatus?: {
      vmUuid?: string;
      status?: "Succeeded" | "InProgress" | "Failed";
      lastStatusChange?: string;
      agentVersion?: string;
      errorDetails?: {
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
      }[];
    };
    vmId?: string;
    resourceUid?: string;
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned";
  };
}
export const VirtualMachineInstancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<VirtualMachineInstancesCreateOrUpdateInput>;

// Output Schema
export interface VirtualMachineInstancesCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesCreateOrUpdateInput,
    outputSchema: VirtualMachineInstancesCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesDeleteInput {
  resourceUri: string;
}
export const VirtualMachineInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesDeleteInput>;

// Output Schema
export type VirtualMachineInstancesDeleteOutput = void;
export const VirtualMachineInstancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesDeleteOutput>;

// The operation
/**
 * The operation to delete a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesDeleteInput,
    outputSchema: VirtualMachineInstancesDeleteOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesGetInput {
  resourceUri: string;
}
export const VirtualMachineInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesGetInput>;

// Output Schema
export interface VirtualMachineInstancesGetOutput {
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesGetOutput>;

// The operation
/**
 * Gets a virtual machine instance
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesGetInput,
    outputSchema: VirtualMachineInstancesGetOutput,
  }),
);
// Input Schema
export interface VirtualMachineInstancesListInput {
  resourceUri: string;
}
export const VirtualMachineInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesListInput>;

// Output Schema
export interface VirtualMachineInstancesListOutput {
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesListOutput>;

// The operation
/**
 * Lists all of the virtual machine instances within the specified parent resource.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesListInput,
    outputSchema: VirtualMachineInstancesListOutput,
  }),
);
// Input Schema
export interface VirtualMachineInstancesRestartInput {
  resourceUri: string;
}
export const VirtualMachineInstancesRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/restart",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesRestartInput>;

// Output Schema
export interface VirtualMachineInstancesRestartOutput {
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesRestartOutput>;

// The operation
/**
 * The operation to restart a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesRestart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesRestartInput,
    outputSchema: VirtualMachineInstancesRestartOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesStartInput {
  resourceUri: string;
}
export const VirtualMachineInstancesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/start",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesStartInput>;

// Output Schema
export interface VirtualMachineInstancesStartOutput {
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesStartOutput>;

// The operation
/**
 * The operation to start a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesStartInput,
    outputSchema: VirtualMachineInstancesStartOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesStopInput {
  resourceUri: string;
}
export const VirtualMachineInstancesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.AzureStackHCI/virtualMachineInstances/default/stop",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesStopInput>;

// Output Schema
export interface VirtualMachineInstancesStopOutput {
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesStopOutput>;

// The operation
/**
 * The operation to stop a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesStopInput,
    outputSchema: VirtualMachineInstancesStopOutput,
  }),
);
// Input Schema
export interface VirtualMachineInstancesUpdateInput {
  resourceUri: string;
  properties?: {
    hardwareProfile?: {
      vmSize?:
        | "Default"
        | "Standard_A2_v2"
        | "Standard_A4_v2"
        | "Standard_D2s_v3"
        | "Standard_D4s_v3"
        | "Standard_D8s_v3"
        | "Standard_D16s_v3"
        | "Standard_D32s_v3"
        | "Standard_DS2_v2"
        | "Standard_DS3_v2"
        | "Standard_DS4_v2"
        | "Standard_DS5_v2"
        | "Standard_DS13_v2"
        | "Standard_K8S_v1"
        | "Standard_K8S2_v1"
        | "Standard_K8S3_v1"
        | "Standard_K8S4_v1"
        | "Standard_NK6"
        | "Standard_NK12"
        | "Standard_NV6"
        | "Standard_NV12"
        | "Standard_K8S5_v1"
        | "Custom";
      processors?: number;
      memoryMB?: number;
    };
    storageProfile?: { dataDisks?: { id?: string }[] };
    networkProfile?: { networkInterfaces?: { id?: string }[] };
    osProfile?: {
      computerName?: string;
      linuxConfiguration?: {
        provisionVMAgent?: boolean;
        provisionVMConfigAgent?: boolean;
      };
      windowsConfiguration?: {
        provisionVMAgent?: boolean;
        provisionVMConfigAgent?: boolean;
      };
    };
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned";
  };
}
export const VirtualMachineInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<VirtualMachineInstancesUpdateInput>;

// Output Schema
export interface VirtualMachineInstancesUpdateOutput {
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesUpdateOutput>;

// The operation
/**
 * The operation to update a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesUpdateInput,
    outputSchema: VirtualMachineInstancesUpdateOutput,
  }));
