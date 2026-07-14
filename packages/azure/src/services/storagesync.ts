/**
 * Azure Storagesync API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CloudEndpointsAfsShareMetadataCertificatePublicKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  cloudEndpointName: string;
}
export const CloudEndpointsAfsShareMetadataCertificatePublicKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    cloudEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/afsShareMetadataCertificatePublicKeys",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<CloudEndpointsAfsShareMetadataCertificatePublicKeysInput>;

// Output Schema
export interface CloudEndpointsAfsShareMetadataCertificatePublicKeysOutput {
  firstKey?: string;
  secondKey?: string;
}
export const CloudEndpointsAfsShareMetadataCertificatePublicKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    firstKey: Schema.optional(Schema.String),
    secondKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CloudEndpointsAfsShareMetadataCertificatePublicKeysOutput>;

// The operation
/**
 * Get the AFS file share metadata signing certificate public keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param cloudEndpointName - Name of Cloud Endpoint object.
 */
export const CloudEndpointsAfsShareMetadataCertificatePublicKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CloudEndpointsAfsShareMetadataCertificatePublicKeysInput,
    outputSchema: CloudEndpointsAfsShareMetadataCertificatePublicKeysOutput,
  }));
// Input Schema
export interface CloudEndpointsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  cloudEndpointName: string;
  properties?: {
    storageAccountResourceId?: string;
    azureFileShareName?: string;
    storageAccountTenantId?: string;
    friendlyName?: string;
  };
}
export const CloudEndpointsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    cloudEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        storageAccountResourceId: Schema.optional(Schema.String),
        azureFileShareName: Schema.optional(Schema.String),
        storageAccountTenantId: Schema.optional(Schema.String),
        friendlyName: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<CloudEndpointsCreateInput>;

// Output Schema
export interface CloudEndpointsCreateOutput {
  id?: string;
  name?: string;
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
export const CloudEndpointsCreateOutput =
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
  }) as unknown as Schema.Codec<CloudEndpointsCreateOutput>;

// The operation
/**
 * Create a new CloudEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param cloudEndpointName - Name of Cloud Endpoint object.
 */
export const CloudEndpointsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudEndpointsCreateInput,
  outputSchema: CloudEndpointsCreateOutput,
}));
// Input Schema
export interface CloudEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  cloudEndpointName: string;
}
export const CloudEndpointsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    cloudEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<CloudEndpointsDeleteInput>;

// Output Schema
export type CloudEndpointsDeleteOutput = void;
export const CloudEndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CloudEndpointsDeleteOutput>;

// The operation
/**
 * Delete a given CloudEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param cloudEndpointName - Name of Cloud Endpoint object.
 */
export const CloudEndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudEndpointsDeleteInput,
  outputSchema: CloudEndpointsDeleteOutput,
}));
// Input Schema
export interface CloudEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  cloudEndpointName: string;
}
export const CloudEndpointsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  syncGroupName: Schema.String.pipe(T.PathParam()),
  cloudEndpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}",
    apiVersion: "2022-09-01",
  }),
) as unknown as Schema.Codec<CloudEndpointsGetInput>;

// Output Schema
export interface CloudEndpointsGetOutput {
  id?: string;
  name?: string;
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
export const CloudEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<CloudEndpointsGetOutput>;

// The operation
/**
 * Get a given CloudEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param cloudEndpointName - Name of Cloud Endpoint object.
 */
export const CloudEndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudEndpointsGetInput,
  outputSchema: CloudEndpointsGetOutput,
}));
// Input Schema
export interface CloudEndpointsListBySyncGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
}
export const CloudEndpointsListBySyncGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<CloudEndpointsListBySyncGroupInput>;

// Output Schema
export interface CloudEndpointsListBySyncGroupOutput {
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
export const CloudEndpointsListBySyncGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CloudEndpointsListBySyncGroupOutput>;

// The operation
/**
 * Get a CloudEndpoint List.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 */
export const CloudEndpointsListBySyncGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CloudEndpointsListBySyncGroupInput,
    outputSchema: CloudEndpointsListBySyncGroupOutput,
  }));
// Input Schema
export interface CloudEndpointsPostBackupInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  cloudEndpointName: string;
  azureFileShare?: string;
}
export const CloudEndpointsPostBackupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    cloudEndpointName: Schema.String.pipe(T.PathParam()),
    azureFileShare: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/postbackup",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<CloudEndpointsPostBackupInput>;

// Output Schema
export interface CloudEndpointsPostBackupOutput {
  backupMetadata?: { cloudEndpointName?: string };
}
export const CloudEndpointsPostBackupOutput =
  /*@__PURE__*/ Schema.Struct({
    backupMetadata: Schema.optional(
      Schema.Struct({
        cloudEndpointName: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CloudEndpointsPostBackupOutput>;

// The operation
/**
 * Post Backup a given CloudEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param cloudEndpointName - Name of Cloud Endpoint object.
 */
export const CloudEndpointsPostBackup = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudEndpointsPostBackupInput,
  outputSchema: CloudEndpointsPostBackupOutput,
}));
// Input Schema
export interface CloudEndpointsPostRestoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  cloudEndpointName: string;
  partition?: string;
  replicaGroup?: string;
  requestId?: string;
  azureFileShareUri?: string;
  status?: string;
  sourceAzureFileShareUri?: string;
  failedFileList?: string;
  restoreFileSpec?: { path?: string; isdir?: boolean }[];
}
export const CloudEndpointsPostRestoreInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    cloudEndpointName: Schema.String.pipe(T.PathParam()),
    partition: Schema.optional(Schema.String),
    replicaGroup: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
    azureFileShareUri: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    sourceAzureFileShareUri: Schema.optional(Schema.String),
    failedFileList: Schema.optional(Schema.String),
    restoreFileSpec: Schema.optional(
      Schema.Array(
        Schema.Struct({
          path: Schema.optional(Schema.String),
          isdir: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/postrestore",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<CloudEndpointsPostRestoreInput>;

// Output Schema
export type CloudEndpointsPostRestoreOutput = void;
export const CloudEndpointsPostRestoreOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CloudEndpointsPostRestoreOutput>;

// The operation
/**
 * Post Restore a given CloudEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param cloudEndpointName - Name of Cloud Endpoint object.
 */
export const CloudEndpointsPostRestore = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudEndpointsPostRestoreInput,
  outputSchema: CloudEndpointsPostRestoreOutput,
}));
// Input Schema
export interface CloudEndpointsPreBackupInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  cloudEndpointName: string;
  azureFileShare?: string;
}
export const CloudEndpointsPreBackupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    cloudEndpointName: Schema.String.pipe(T.PathParam()),
    azureFileShare: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/prebackup",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<CloudEndpointsPreBackupInput>;

// Output Schema
export type CloudEndpointsPreBackupOutput = void;
export const CloudEndpointsPreBackupOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CloudEndpointsPreBackupOutput>;

// The operation
/**
 * Pre Backup a given CloudEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param cloudEndpointName - Name of Cloud Endpoint object.
 */
export const CloudEndpointsPreBackup = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudEndpointsPreBackupInput,
  outputSchema: CloudEndpointsPreBackupOutput,
}));
// Input Schema
export interface CloudEndpointsPreRestoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  cloudEndpointName: string;
  partition?: string;
  replicaGroup?: string;
  requestId?: string;
  azureFileShareUri?: string;
  status?: string;
  sourceAzureFileShareUri?: string;
  backupMetadataPropertyBag?: string;
  restoreFileSpec?: { path?: string; isdir?: boolean }[];
  pauseWaitForSyncDrainTimePeriodInSeconds?: number;
}
export const CloudEndpointsPreRestoreInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    cloudEndpointName: Schema.String.pipe(T.PathParam()),
    partition: Schema.optional(Schema.String),
    replicaGroup: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
    azureFileShareUri: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    sourceAzureFileShareUri: Schema.optional(Schema.String),
    backupMetadataPropertyBag: Schema.optional(Schema.String),
    restoreFileSpec: Schema.optional(
      Schema.Array(
        Schema.Struct({
          path: Schema.optional(Schema.String),
          isdir: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    pauseWaitForSyncDrainTimePeriodInSeconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/prerestore",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<CloudEndpointsPreRestoreInput>;

// Output Schema
export type CloudEndpointsPreRestoreOutput = void;
export const CloudEndpointsPreRestoreOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CloudEndpointsPreRestoreOutput>;

// The operation
/**
 * Pre Restore a given CloudEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param cloudEndpointName - Name of Cloud Endpoint object.
 */
export const CloudEndpointsPreRestore = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudEndpointsPreRestoreInput,
  outputSchema: CloudEndpointsPreRestoreOutput,
}));
// Input Schema
export interface CloudEndpointsRestoreheartbeatInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  cloudEndpointName: string;
}
export const CloudEndpointsRestoreheartbeatInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    cloudEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/restoreheartbeat",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<CloudEndpointsRestoreheartbeatInput>;

// Output Schema
export type CloudEndpointsRestoreheartbeatOutput = void;
export const CloudEndpointsRestoreheartbeatOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CloudEndpointsRestoreheartbeatOutput>;

// The operation
/**
 * Restore Heartbeat a given CloudEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param cloudEndpointName - Name of Cloud Endpoint object.
 */
export const CloudEndpointsRestoreheartbeat =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CloudEndpointsRestoreheartbeatInput,
    outputSchema: CloudEndpointsRestoreheartbeatOutput,
  }));
// Input Schema
export interface CloudEndpointsTriggerChangeDetectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  cloudEndpointName: string;
  directoryPath?: string;
  changeDetectionMode?: "Default" | "Recursive";
  paths?: string[];
}
export const CloudEndpointsTriggerChangeDetectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    cloudEndpointName: Schema.String.pipe(T.PathParam()),
    directoryPath: Schema.optional(Schema.String),
    changeDetectionMode: Schema.optional(
      Schema.Literals(["Default", "Recursive"]),
    ),
    paths: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/cloudEndpoints/{cloudEndpointName}/triggerChangeDetection",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<CloudEndpointsTriggerChangeDetectionInput>;

// Output Schema
export type CloudEndpointsTriggerChangeDetectionOutput = void;
export const CloudEndpointsTriggerChangeDetectionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CloudEndpointsTriggerChangeDetectionOutput>;

// The operation
/**
 * Triggers detection of changes performed on Azure File share connected to the specified Azure File Sync Cloud Endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param cloudEndpointName - Name of Cloud Endpoint object.
 */
export const CloudEndpointsTriggerChangeDetection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CloudEndpointsTriggerChangeDetectionInput,
    outputSchema: CloudEndpointsTriggerChangeDetectionOutput,
  }));
// Input Schema
export interface LocationOperationStatusInput {
  subscriptionId: string;
  locationName: string;
  operationId: string;
}
export const LocationOperationStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageSync/locations/{locationName}/operations/{operationId}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<LocationOperationStatusInput>;

// Output Schema
export interface LocationOperationStatusOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: {
      code?: string;
      message?: string;
      target?: string;
      requestUri?: string;
      exceptionType?: string;
      httpMethod?: string;
      hashedMessage?: string;
      httpErrorCode?: string;
    };
    innererror?: {
      callStack?: string;
      message?: string;
      innerException?: string;
      innerExceptionCallStack?: string;
    };
  };
  percentComplete?: number;
}
export const LocationOperationStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            requestUri: Schema.optional(Schema.String),
            exceptionType: Schema.optional(Schema.String),
            httpMethod: Schema.optional(Schema.String),
            hashedMessage: Schema.optional(Schema.String),
            httpErrorCode: Schema.optional(Schema.String),
          }),
        ),
        innererror: Schema.optional(
          Schema.Struct({
            callStack: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            innerException: Schema.optional(Schema.String),
            innerExceptionCallStack: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    percentComplete: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<LocationOperationStatusOutput>;

// The operation
/**
 * Get Operation status
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The desired region to obtain information from.
 * @param operationId - operation Id
 */
export const LocationOperationStatus = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocationOperationStatusInput,
  outputSchema: LocationOperationStatusOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.StorageSync/operations",
    apiVersion: "2022-09-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
    origin?: string;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          supportedAggregationTypes?: string[];
          fillGapWithZero?: boolean;
          lockAggregationType?: string;
          dimensions?: {
            name?: string;
            displayName?: string;
            toBeExportedForShoebox?: boolean;
          }[];
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      display: Schema.optional(
        Schema.Struct({
          description: Schema.optional(Schema.String),
          operation: Schema.optional(Schema.String),
          provider: Schema.optional(Schema.String),
          resource: Schema.optional(Schema.String),
        }),
      ),
      origin: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          serviceSpecification: Schema.optional(
            Schema.Struct({
              metricSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    displayDescription: Schema.optional(Schema.String),
                    unit: Schema.optional(Schema.String),
                    aggregationType: Schema.optional(Schema.String),
                    supportedAggregationTypes: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    fillGapWithZero: Schema.optional(Schema.Boolean),
                    lockAggregationType: Schema.optional(Schema.String),
                    dimensions: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          displayName: Schema.optional(Schema.String),
                          toBeExportedForShoebox: Schema.optional(
                            Schema.Boolean,
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    }),
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
export interface OperationStatusGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  locationName: string;
  workflowId: string;
  operationId: string;
}
export const OperationStatusGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
    workflowId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/locations/{locationName}/workflows/{workflowId}/operations/{operationId}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<OperationStatusGetInput>;

// Output Schema
export interface OperationStatusGetOutput {
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: {
      code?: string;
      message?: string;
      target?: string;
      requestUri?: string;
      exceptionType?: string;
      httpMethod?: string;
      hashedMessage?: string;
      httpErrorCode?: string;
    };
    innererror?: {
      callStack?: string;
      message?: string;
      innerException?: string;
      innerExceptionCallStack?: string;
    };
  };
}
export const OperationStatusGetOutput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            requestUri: Schema.optional(Schema.String),
            exceptionType: Schema.optional(Schema.String),
            httpMethod: Schema.optional(Schema.String),
            hashedMessage: Schema.optional(Schema.String),
            httpErrorCode: Schema.optional(Schema.String),
          }),
        ),
        innererror: Schema.optional(
          Schema.Struct({
            callStack: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            innerException: Schema.optional(Schema.String),
            innerExceptionCallStack: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<OperationStatusGetOutput>;

// The operation
/**
 * Get Operation status
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param locationName - The desired region to obtain information from.
 * @param workflowId - workflow Id
 * @param operationId - operation Id
 */
export const OperationStatusGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationStatusGetInput,
  outputSchema: OperationStatusGetOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  privateEndpointConnectionName: string;
  properties?: {
    groupIds?: string[];
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
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
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(
            Schema.Literals(["Pending", "Approved", "Rejected"]),
          ),
          description: Schema.optional(Schema.String),
          actionsRequired: Schema.optional(Schema.String),
        }),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
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
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-09-01",
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
 * Update the state of specified private endpoint connection associated with the storage sync service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param properties - Resource properties.
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
  storageSyncServiceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the storage sync service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
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
  storageSyncServiceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-09-01",
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
 * Gets the specified private endpoint connection associated with the storage sync service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByStorageSyncServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
}
export const PrivateEndpointConnectionsListByStorageSyncServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/privateEndpointConnections",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByStorageSyncServiceInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByStorageSyncServiceOutput {
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
export const PrivateEndpointConnectionsListByStorageSyncServiceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByStorageSyncServiceOutput>;

// The operation
/**
 * Get a PrivateEndpointConnection List.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 */
export const PrivateEndpointConnectionsListByStorageSyncService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByStorageSyncServiceInput,
    outputSchema: PrivateEndpointConnectionsListByStorageSyncServiceOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListByStorageSyncServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
}
export const PrivateLinkResourcesListByStorageSyncServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/privateLinkResources",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByStorageSyncServiceInput>;

// Output Schema
export interface PrivateLinkResourcesListByStorageSyncServiceOutput {
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
export const PrivateLinkResourcesListByStorageSyncServiceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByStorageSyncServiceOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a storage sync service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 */
export const PrivateLinkResourcesListByStorageSyncService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByStorageSyncServiceInput,
    outputSchema: PrivateLinkResourcesListByStorageSyncServiceOutput,
  }));
// Input Schema
export interface RegisteredServersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  serverId: string;
  properties?: {
    serverCertificate?: string;
    agentVersion?: string;
    serverOSVersion?: string;
    lastHeartBeat?: string;
    serverRole?: string;
    clusterId?: string;
    clusterName?: string;
    serverId?: string;
    friendlyName?: string;
    applicationId?: string;
    identity?: boolean;
  };
}
export const RegisteredServersCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    serverId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        serverCertificate: Schema.optional(Schema.String),
        agentVersion: Schema.optional(Schema.String),
        serverOSVersion: Schema.optional(Schema.String),
        lastHeartBeat: Schema.optional(Schema.String),
        serverRole: Schema.optional(Schema.String),
        clusterId: Schema.optional(Schema.String),
        clusterName: Schema.optional(Schema.String),
        serverId: Schema.optional(Schema.String),
        friendlyName: Schema.optional(Schema.String),
        applicationId: Schema.optional(Schema.String),
        identity: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<RegisteredServersCreateInput>;

// Output Schema
export interface RegisteredServersCreateOutput {
  id?: string;
  name?: string;
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
export const RegisteredServersCreateOutput =
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
  }) as unknown as Schema.Codec<RegisteredServersCreateOutput>;

// The operation
/**
 * Add a new registered server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param serverId - GUID identifying the on-premises server.
 */
export const RegisteredServersCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredServersCreateInput,
  outputSchema: RegisteredServersCreateOutput,
}));
// Input Schema
export interface RegisteredServersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  serverId: string;
}
export const RegisteredServersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    serverId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<RegisteredServersDeleteInput>;

// Output Schema
export type RegisteredServersDeleteOutput = void;
export const RegisteredServersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegisteredServersDeleteOutput>;

// The operation
/**
 * Delete the given registered server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param serverId - GUID identifying the on-premises server.
 */
export const RegisteredServersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredServersDeleteInput,
  outputSchema: RegisteredServersDeleteOutput,
}));
// Input Schema
export interface RegisteredServersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  serverId: string;
}
export const RegisteredServersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    serverId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<RegisteredServersGetInput>;

// Output Schema
export interface RegisteredServersGetOutput {
  id?: string;
  name?: string;
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
export const RegisteredServersGetOutput =
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
  }) as unknown as Schema.Codec<RegisteredServersGetOutput>;

// The operation
/**
 * Get a given registered server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param serverId - GUID identifying the on-premises server.
 */
export const RegisteredServersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredServersGetInput,
  outputSchema: RegisteredServersGetOutput,
}));
// Input Schema
export interface RegisteredServersListByStorageSyncServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
}
export const RegisteredServersListByStorageSyncServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<RegisteredServersListByStorageSyncServiceInput>;

// Output Schema
export interface RegisteredServersListByStorageSyncServiceOutput {
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
export const RegisteredServersListByStorageSyncServiceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RegisteredServersListByStorageSyncServiceOutput>;

// The operation
/**
 * Get a given registered server list.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 */
export const RegisteredServersListByStorageSyncService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegisteredServersListByStorageSyncServiceInput,
    outputSchema: RegisteredServersListByStorageSyncServiceOutput,
  }));
// Input Schema
export interface RegisteredServersTriggerRolloverInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  serverId: string;
  serverCertificate?: string;
}
export const RegisteredServersTriggerRolloverInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    serverId: Schema.String.pipe(T.PathParam()),
    serverCertificate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}/triggerRollover",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<RegisteredServersTriggerRolloverInput>;

// Output Schema
export type RegisteredServersTriggerRolloverOutput = void;
export const RegisteredServersTriggerRolloverOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegisteredServersTriggerRolloverOutput>;

// The operation
/**
 * Triggers Server certificate rollover.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param serverId - GUID identifying the on-premises server.
 */
export const RegisteredServersTriggerRollover =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegisteredServersTriggerRolloverInput,
    outputSchema: RegisteredServersTriggerRolloverOutput,
  }));
// Input Schema
export interface RegisteredServersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  serverId: string;
  properties?: { identity?: boolean; applicationId?: string };
}
export const RegisteredServersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    serverId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(Schema.Boolean),
        applicationId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<RegisteredServersUpdateInput>;

// Output Schema
export interface RegisteredServersUpdateOutput {
  id?: string;
  name?: string;
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
export const RegisteredServersUpdateOutput =
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
  }) as unknown as Schema.Codec<RegisteredServersUpdateOutput>;

// The operation
/**
 * Update registered server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param serverId - GUID identifying the on-premises server.
 */
export const RegisteredServersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredServersUpdateInput,
  outputSchema: RegisteredServersUpdateOutput,
}));
// Input Schema
export interface ServerEndpointsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  serverEndpointName: string;
  properties?: {
    serverLocalPath?: string;
    cloudTiering?: "on" | "off";
    volumeFreeSpacePercent?: number;
    tierFilesOlderThanDays?: number;
    friendlyName?: string;
    serverResourceId?: string;
    offlineDataTransfer?: "on" | "off";
    offlineDataTransferShareName?: string;
    initialDownloadPolicy?:
      | "NamespaceOnly"
      | "NamespaceThenModifiedFiles"
      | "AvoidTieredFiles";
    localCacheMode?: "DownloadNewAndModifiedFiles" | "UpdateLocallyCachedFiles";
    initialUploadPolicy?: "ServerAuthoritative" | "Merge";
  };
}
export const ServerEndpointsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    serverEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        serverLocalPath: Schema.optional(Schema.String),
        cloudTiering: Schema.optional(Schema.Literals(["on", "off"])),
        volumeFreeSpacePercent: Schema.optional(Schema.Number),
        tierFilesOlderThanDays: Schema.optional(Schema.Number),
        friendlyName: Schema.optional(Schema.String),
        serverResourceId: Schema.optional(Schema.String),
        offlineDataTransfer: Schema.optional(Schema.Literals(["on", "off"])),
        offlineDataTransferShareName: Schema.optional(Schema.String),
        initialDownloadPolicy: Schema.optional(
          Schema.Literals([
            "NamespaceOnly",
            "NamespaceThenModifiedFiles",
            "AvoidTieredFiles",
          ]),
        ),
        localCacheMode: Schema.optional(
          Schema.Literals([
            "DownloadNewAndModifiedFiles",
            "UpdateLocallyCachedFiles",
          ]),
        ),
        initialUploadPolicy: Schema.optional(
          Schema.Literals(["ServerAuthoritative", "Merge"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<ServerEndpointsCreateInput>;

// Output Schema
export interface ServerEndpointsCreateOutput {
  id?: string;
  name?: string;
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
export const ServerEndpointsCreateOutput =
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
  }) as unknown as Schema.Codec<ServerEndpointsCreateOutput>;

// The operation
/**
 * Create a new ServerEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param serverEndpointName - Name of Server Endpoint object.
 */
export const ServerEndpointsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServerEndpointsCreateInput,
  outputSchema: ServerEndpointsCreateOutput,
}));
// Input Schema
export interface ServerEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  serverEndpointName: string;
}
export const ServerEndpointsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    serverEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<ServerEndpointsDeleteInput>;

// Output Schema
export type ServerEndpointsDeleteOutput = void;
export const ServerEndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServerEndpointsDeleteOutput>;

// The operation
/**
 * Delete a given ServerEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param serverEndpointName - Name of Server Endpoint object.
 */
export const ServerEndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServerEndpointsDeleteInput,
  outputSchema: ServerEndpointsDeleteOutput,
}));
// Input Schema
export interface ServerEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  serverEndpointName: string;
}
export const ServerEndpointsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    serverEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<ServerEndpointsGetInput>;

// Output Schema
export interface ServerEndpointsGetOutput {
  id?: string;
  name?: string;
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
export const ServerEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<ServerEndpointsGetOutput>;

// The operation
/**
 * Get a ServerEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param serverEndpointName - Name of Server Endpoint object.
 */
export const ServerEndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServerEndpointsGetInput,
  outputSchema: ServerEndpointsGetOutput,
}));
// Input Schema
export interface ServerEndpointsListBySyncGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
}
export const ServerEndpointsListBySyncGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<ServerEndpointsListBySyncGroupInput>;

// Output Schema
export interface ServerEndpointsListBySyncGroupOutput {
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
export const ServerEndpointsListBySyncGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ServerEndpointsListBySyncGroupOutput>;

// The operation
/**
 * Get a ServerEndpoint list.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 */
export const ServerEndpointsListBySyncGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServerEndpointsListBySyncGroupInput,
    outputSchema: ServerEndpointsListBySyncGroupOutput,
  }));
// Input Schema
export interface ServerEndpointsRecallActionInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  serverEndpointName: string;
  pattern?: string;
  recallPath?: string;
}
export const ServerEndpointsRecallActionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    serverEndpointName: Schema.String.pipe(T.PathParam()),
    pattern: Schema.optional(Schema.String),
    recallPath: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}/recallAction",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<ServerEndpointsRecallActionInput>;

// Output Schema
export type ServerEndpointsRecallActionOutput = void;
export const ServerEndpointsRecallActionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServerEndpointsRecallActionOutput>;

// The operation
/**
 * Recall a server endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param serverEndpointName - Name of Server Endpoint object.
 */
export const ServerEndpointsRecallAction = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServerEndpointsRecallActionInput,
  outputSchema: ServerEndpointsRecallActionOutput,
}));
// Input Schema
export interface ServerEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  serverEndpointName: string;
  properties?: {
    cloudTiering?: "on" | "off";
    volumeFreeSpacePercent?: number;
    tierFilesOlderThanDays?: number;
    offlineDataTransfer?: "on" | "off";
    offlineDataTransferShareName?: string;
    localCacheMode?: "DownloadNewAndModifiedFiles" | "UpdateLocallyCachedFiles";
  };
}
export const ServerEndpointsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
    syncGroupName: Schema.String.pipe(T.PathParam()),
    serverEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        cloudTiering: Schema.optional(Schema.Literals(["on", "off"])),
        volumeFreeSpacePercent: Schema.optional(Schema.Number),
        tierFilesOlderThanDays: Schema.optional(Schema.Number),
        offlineDataTransfer: Schema.optional(Schema.Literals(["on", "off"])),
        offlineDataTransferShareName: Schema.optional(Schema.String),
        localCacheMode: Schema.optional(
          Schema.Literals([
            "DownloadNewAndModifiedFiles",
            "UpdateLocallyCachedFiles",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}/serverEndpoints/{serverEndpointName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<ServerEndpointsUpdateInput>;

// Output Schema
export interface ServerEndpointsUpdateOutput {
  id?: string;
  name?: string;
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
export const ServerEndpointsUpdateOutput =
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
  }) as unknown as Schema.Codec<ServerEndpointsUpdateOutput>;

// The operation
/**
 * Patch a given ServerEndpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 * @param serverEndpointName - Name of Server Endpoint object.
 */
export const ServerEndpointsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServerEndpointsUpdateInput,
  outputSchema: ServerEndpointsUpdateOutput,
}));
// Input Schema
export interface StorageSyncServicesCheckNameAvailabilityInput {
  subscriptionId: string;
  locationName: string;
  name: string;
  type: "Microsoft.StorageSync/storageSyncServices";
}
export const StorageSyncServicesCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.StorageSync/storageSyncServices"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageSync/locations/{locationName}/checkNameAvailability",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<StorageSyncServicesCheckNameAvailabilityInput>;

// Output Schema
export interface StorageSyncServicesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const StorageSyncServicesCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StorageSyncServicesCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the give namespace name availability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The desired region for the name check.
 */
export const StorageSyncServicesCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageSyncServicesCheckNameAvailabilityInput,
    outputSchema: StorageSyncServicesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface StorageSyncServicesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
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
    incomingTrafficPolicy?: "AllowAllTraffic" | "AllowVirtualNetworksOnly";
    useIdentity?: boolean;
  };
  tags?: Record<string, string>;
  location: string;
}
export const StorageSyncServicesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
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
        incomingTrafficPolicy: Schema.optional(
          Schema.Literals(["AllowAllTraffic", "AllowVirtualNetworksOnly"]),
        ),
        useIdentity: Schema.optional(Schema.Boolean),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<StorageSyncServicesCreateInput>;

// Output Schema
export interface StorageSyncServicesCreateOutput {
  id?: string;
  name?: string;
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
export const StorageSyncServicesCreateOutput =
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
  }) as unknown as Schema.Codec<StorageSyncServicesCreateOutput>;

// The operation
/**
 * Create a new StorageSyncService.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 */
export const StorageSyncServicesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageSyncServicesCreateInput,
  outputSchema: StorageSyncServicesCreateOutput,
}));
// Input Schema
export interface StorageSyncServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
}
export const StorageSyncServicesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<StorageSyncServicesDeleteInput>;

// Output Schema
export type StorageSyncServicesDeleteOutput = void;
export const StorageSyncServicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageSyncServicesDeleteOutput>;

// The operation
/**
 * Delete a given StorageSyncService.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 */
export const StorageSyncServicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageSyncServicesDeleteInput,
  outputSchema: StorageSyncServicesDeleteOutput,
}));
// Input Schema
export interface StorageSyncServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
}
export const StorageSyncServicesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<StorageSyncServicesGetInput>;

// Output Schema
export interface StorageSyncServicesGetOutput {
  id?: string;
  name?: string;
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
export const StorageSyncServicesGetOutput =
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
  }) as unknown as Schema.Codec<StorageSyncServicesGetOutput>;

// The operation
/**
 * Get a given StorageSyncService.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 */
export const StorageSyncServicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageSyncServicesGetInput,
  outputSchema: StorageSyncServicesGetOutput,
}));
// Input Schema
export interface StorageSyncServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const StorageSyncServicesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<StorageSyncServicesListByResourceGroupInput>;

// Output Schema
export interface StorageSyncServicesListByResourceGroupOutput {
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
export const StorageSyncServicesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<StorageSyncServicesListByResourceGroupOutput>;

// The operation
/**
 * Get a StorageSyncService list by Resource group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const StorageSyncServicesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageSyncServicesListByResourceGroupInput,
    outputSchema: StorageSyncServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface StorageSyncServicesListBySubscriptionInput {
  subscriptionId: string;
}
export const StorageSyncServicesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageSync/storageSyncServices",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<StorageSyncServicesListBySubscriptionInput>;

// Output Schema
export interface StorageSyncServicesListBySubscriptionOutput {
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
export const StorageSyncServicesListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<StorageSyncServicesListBySubscriptionOutput>;

// The operation
/**
 * Get a StorageSyncService list by subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const StorageSyncServicesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageSyncServicesListBySubscriptionInput,
    outputSchema: StorageSyncServicesListBySubscriptionOutput,
  }));
// Input Schema
export interface StorageSyncServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
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
    incomingTrafficPolicy?: "AllowAllTraffic" | "AllowVirtualNetworksOnly";
    useIdentity?: boolean;
  };
}
export const StorageSyncServicesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
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
        incomingTrafficPolicy: Schema.optional(
          Schema.Literals(["AllowAllTraffic", "AllowVirtualNetworksOnly"]),
        ),
        useIdentity: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<StorageSyncServicesUpdateInput>;

// Output Schema
export interface StorageSyncServicesUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageSyncServicesUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageSyncServicesUpdateOutput>;

// The operation
/**
 * Patch a given StorageSyncService.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 */
export const StorageSyncServicesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageSyncServicesUpdateInput,
  outputSchema: StorageSyncServicesUpdateOutput,
}));
// Input Schema
export interface SyncGroupsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
  properties?: unknown;
}
export const SyncGroupsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  syncGroupName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.Unknown),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}",
    apiVersion: "2022-09-01",
  }),
) as unknown as Schema.Codec<SyncGroupsCreateInput>;

// Output Schema
export interface SyncGroupsCreateOutput {
  id?: string;
  name?: string;
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
export const SyncGroupsCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<SyncGroupsCreateOutput>;

// The operation
/**
 * Create a new SyncGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 */
export const SyncGroupsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SyncGroupsCreateInput,
  outputSchema: SyncGroupsCreateOutput,
}));
// Input Schema
export interface SyncGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
}
export const SyncGroupsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  syncGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}",
    apiVersion: "2022-09-01",
  }),
) as unknown as Schema.Codec<SyncGroupsDeleteInput>;

// Output Schema
export type SyncGroupsDeleteOutput = void;
export const SyncGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SyncGroupsDeleteOutput>;

// The operation
/**
 * Delete a given SyncGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 */
export const SyncGroupsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SyncGroupsDeleteInput,
  outputSchema: SyncGroupsDeleteOutput,
}));
// Input Schema
export interface SyncGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  syncGroupName: string;
}
export const SyncGroupsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  syncGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}",
    apiVersion: "2022-09-01",
  }),
) as unknown as Schema.Codec<SyncGroupsGetInput>;

// Output Schema
export interface SyncGroupsGetOutput {
  id?: string;
  name?: string;
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
export const SyncGroupsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<SyncGroupsGetOutput>;

// The operation
/**
 * Get a given SyncGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param syncGroupName - Name of Sync Group resource.
 */
export const SyncGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SyncGroupsGetInput,
  outputSchema: SyncGroupsGetOutput,
}));
// Input Schema
export interface SyncGroupsListByStorageSyncServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
}
export const SyncGroupsListByStorageSyncServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<SyncGroupsListByStorageSyncServiceInput>;

// Output Schema
export interface SyncGroupsListByStorageSyncServiceOutput {
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
export const SyncGroupsListByStorageSyncServiceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SyncGroupsListByStorageSyncServiceOutput>;

// The operation
/**
 * Get a SyncGroup List.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 */
export const SyncGroupsListByStorageSyncService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SyncGroupsListByStorageSyncServiceInput,
    outputSchema: SyncGroupsListByStorageSyncServiceOutput,
  }));
// Input Schema
export interface WorkflowsAbortInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  workflowId: string;
}
export const WorkflowsAbortInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  workflowId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/workflows/{workflowId}/abort",
    apiVersion: "2022-09-01",
  }),
) as unknown as Schema.Codec<WorkflowsAbortInput>;

// Output Schema
export type WorkflowsAbortOutput = void;
export const WorkflowsAbortOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowsAbortOutput>;

// The operation
/**
 * Abort the given workflow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param workflowId - workflow Id
 */
export const WorkflowsAbort = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsAbortInput,
  outputSchema: WorkflowsAbortOutput,
}));
// Input Schema
export interface WorkflowsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
  workflowId: string;
}
export const WorkflowsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  workflowId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/workflows/{workflowId}",
    apiVersion: "2022-09-01",
  }),
) as unknown as Schema.Codec<WorkflowsGetInput>;

// Output Schema
export interface WorkflowsGetOutput {
  id?: string;
  name?: string;
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
export const WorkflowsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<WorkflowsGetOutput>;

// The operation
/**
 * Get Workflows resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 * @param workflowId - workflow Id
 */
export const WorkflowsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsGetInput,
  outputSchema: WorkflowsGetOutput,
}));
// Input Schema
export interface WorkflowsListByStorageSyncServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageSyncServiceName: string;
}
export const WorkflowsListByStorageSyncServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageSyncServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/workflows",
      apiVersion: "2022-09-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsListByStorageSyncServiceInput>;

// Output Schema
export interface WorkflowsListByStorageSyncServiceOutput {
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
export const WorkflowsListByStorageSyncServiceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkflowsListByStorageSyncServiceOutput>;

// The operation
/**
 * Get a Workflow List
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageSyncServiceName - Name of Storage Sync Service resource.
 */
export const WorkflowsListByStorageSyncService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkflowsListByStorageSyncServiceInput,
    outputSchema: WorkflowsListByStorageSyncServiceOutput,
  }));
