/**
 * Azure Fileshares API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface FileShareGetLimitsInput {
  subscriptionId: string;
  location: string;
}
export const FileShareGetLimitsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.FileShares/locations/{location}/getLimits",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileShareGetLimitsInput>;

// Output Schema
export interface FileShareGetLimitsOutput {
  properties: {
    limits: {
      maxFileShares: number;
      maxFileShareSnapshots: number;
      maxFileShareSubnets: number;
      maxFileSharePrivateEndpointConnections: number;
      minProvisionedStorageGiB: number;
      maxProvisionedStorageGiB: number;
      minProvisionedIOPerSec: number;
      maxProvisionedIOPerSec: number;
      minProvisionedThroughputMiBPerSec: number;
      maxProvisionedThroughputMiBPerSec: number;
    };
    provisioningConstants: {
      baseIOPerSec: number;
      scalarIOPerSec: number;
      baseThroughputMiBPerSec: number;
      scalarThroughputMiBPerSec: number;
      guardrailIOPerSecScalar: number;
      guardrailThroughputScalar: number;
    };
  };
}
export const FileShareGetLimitsOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      limits: Schema.Struct({
        maxFileShares: Schema.Number,
        maxFileShareSnapshots: Schema.Number,
        maxFileShareSubnets: Schema.Number,
        maxFileSharePrivateEndpointConnections: Schema.Number,
        minProvisionedStorageGiB: Schema.Number,
        maxProvisionedStorageGiB: Schema.Number,
        minProvisionedIOPerSec: Schema.Number,
        maxProvisionedIOPerSec: Schema.Number,
        minProvisionedThroughputMiBPerSec: Schema.Number,
        maxProvisionedThroughputMiBPerSec: Schema.Number,
      }),
      provisioningConstants: Schema.Struct({
        baseIOPerSec: Schema.Number,
        scalarIOPerSec: Schema.Number,
        baseThroughputMiBPerSec: Schema.Number,
        scalarThroughputMiBPerSec: Schema.Number,
        guardrailIOPerSecScalar: Schema.Number,
        guardrailThroughputScalar: Schema.Number,
      }),
    }),
  }) as unknown as Schema.Codec<FileShareGetLimitsOutput>;

// The operation
/**
 * Get file shares limits.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const FileShareGetLimits = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileShareGetLimitsInput,
  outputSchema: FileShareGetLimitsOutput,
}));
// Input Schema
export interface FileShareGetProvisioningRecommendationInput {
  subscriptionId: string;
  location: string;
  properties: { provisionedStorageGiB: number };
}
export const FileShareGetProvisioningRecommendationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisionedStorageGiB: Schema.Number,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.FileShares/locations/{location}/getProvisioningRecommendation",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileShareGetProvisioningRecommendationInput>;

// Output Schema
export interface FileShareGetProvisioningRecommendationOutput {
  properties: {
    provisionedIOPerSec: number;
    provisionedThroughputMiBPerSec: number;
    availableRedundancyOptions: ("Local" | "Zone")[];
  };
}
export const FileShareGetProvisioningRecommendationOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      provisionedIOPerSec: Schema.Number,
      provisionedThroughputMiBPerSec: Schema.Number,
      availableRedundancyOptions: Schema.Array(
        Schema.Literals(["Local", "Zone"]),
      ),
    }),
  }) as unknown as Schema.Codec<FileShareGetProvisioningRecommendationOutput>;

// The operation
/**
 * Get file shares provisioning parameters recommendation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const FileShareGetProvisioningRecommendation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FileShareGetProvisioningRecommendationInput,
    outputSchema: FileShareGetProvisioningRecommendationOutput,
  }));
// Input Schema
export interface FileShareGetUsageDataInput {
  subscriptionId: string;
  location: string;
}
export const FileShareGetUsageDataInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.FileShares/locations/{location}/getUsageData",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileShareGetUsageDataInput>;

// Output Schema
export interface FileShareGetUsageDataOutput {
  properties: { liveShares: { fileShareCount: number } };
}
export const FileShareGetUsageDataOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      liveShares: Schema.Struct({
        fileShareCount: Schema.Number,
      }),
    }),
  }) as unknown as Schema.Codec<FileShareGetUsageDataOutput>;

// The operation
/**
 * Get file shares usage data.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const FileShareGetUsageData = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileShareGetUsageDataInput,
  outputSchema: FileShareGetUsageDataOutput,
}));
// Input Schema
export interface FileSharesCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name?: string;
  type?: string;
}
export const FileSharesCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.FileShares/locations/{location}/checkNameAvailability",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileSharesCheckNameAvailabilityInput>;

// Output Schema
export interface FileSharesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const FileSharesCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FileSharesCheckNameAvailabilityOutput>;

// The operation
/**
 * Implements local CheckNameAvailability operations
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const FileSharesCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FileSharesCheckNameAvailabilityInput,
    outputSchema: FileSharesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface FileSharesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    mountName?: string;
    hostName?: string;
    mediaTier?: "SSD";
    redundancy?: "Local" | "Zone";
    protocol?: "NFS";
    provisionedStorageGiB?: number;
    provisionedStorageNextAllowedDowngrade?: string;
    provisionedIOPerSec?: number;
    provisionedIOPerSecNextAllowedDowngrade?: string;
    provisionedThroughputMiBPerSec?: number;
    provisionedThroughputNextAllowedDowngrade?: string;
    includedBurstIOPerSec?: number;
    maxBurstIOPerSecCredits?: number;
    nfsProtocolProperties?: {
      rootSquash?: "NoRootSquash" | "RootSquash" | "AllSquash";
      encryptionInTransitRequired?: "Enabled" | "Disabled";
    };
    publicAccessProperties?: { allowedSubnets?: string[] };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created"
      | "TransientFailure"
      | "Creating"
      | "Patching"
      | "Posting";
    publicNetworkAccess?: "Enabled" | "Disabled";
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
  };
  tags?: Record<string, string>;
  location: string;
}
export const FileSharesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        mountName: Schema.optional(Schema.String),
        hostName: Schema.optional(Schema.String),
        mediaTier: Schema.optional(Schema.Literals(["SSD"])),
        redundancy: Schema.optional(Schema.Literals(["Local", "Zone"])),
        protocol: Schema.optional(Schema.Literals(["NFS"])),
        provisionedStorageGiB: Schema.optional(Schema.Number),
        provisionedStorageNextAllowedDowngrade: Schema.optional(Schema.String),
        provisionedIOPerSec: Schema.optional(Schema.Number),
        provisionedIOPerSecNextAllowedDowngrade: Schema.optional(Schema.String),
        provisionedThroughputMiBPerSec: Schema.optional(Schema.Number),
        provisionedThroughputNextAllowedDowngrade: Schema.optional(
          Schema.String,
        ),
        includedBurstIOPerSec: Schema.optional(Schema.Number),
        maxBurstIOPerSecCredits: Schema.optional(Schema.Number),
        nfsProtocolProperties: Schema.optional(
          Schema.Struct({
            rootSquash: Schema.optional(
              Schema.Literals(["NoRootSquash", "RootSquash", "AllSquash"]),
            ),
            encryptionInTransitRequired: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        publicAccessProperties: Schema.optional(
          Schema.Struct({
            allowedSubnets: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
            "TransientFailure",
            "Creating",
            "Patching",
            "Posting",
          ]),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
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
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileSharesCreateOrUpdateInput>;

// Output Schema
export interface FileSharesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const FileSharesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FileSharesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a file share.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 */
export const FileSharesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesCreateOrUpdateInput,
  outputSchema: FileSharesCreateOrUpdateOutput,
}));
// Input Schema
export interface FileSharesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const FileSharesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<FileSharesDeleteInput>;

// Output Schema
export type FileSharesDeleteOutput = void;
export const FileSharesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FileSharesDeleteOutput>;

// The operation
/**
 * Delete a FileShare
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 */
export const FileSharesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesDeleteInput,
  outputSchema: FileSharesDeleteOutput,
}));
// Input Schema
export interface FileSharesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const FileSharesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<FileSharesGetInput>;

// Output Schema
export interface FileSharesGetOutput {
  id?: string;
  name?: string;
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
export const FileSharesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<FileSharesGetOutput>;

// The operation
/**
 * Get a FileShare
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 */
export const FileSharesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesGetInput,
  outputSchema: FileSharesGetOutput,
}));
// Input Schema
export interface FileSharesListByParentInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const FileSharesListByParentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileSharesListByParentInput>;

// Output Schema
export interface FileSharesListByParentOutput {
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
export const FileSharesListByParentOutput =
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
  }) as unknown as Schema.Codec<FileSharesListByParentOutput>;

// The operation
/**
 * List FileShare resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const FileSharesListByParent = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesListByParentInput,
  outputSchema: FileSharesListByParentOutput,
}));
// Input Schema
export interface FileSharesListBySubscriptionInput {
  subscriptionId: string;
}
export const FileSharesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.FileShares/fileShares",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileSharesListBySubscriptionInput>;

// Output Schema
export interface FileSharesListBySubscriptionOutput {
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
export const FileSharesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<FileSharesListBySubscriptionOutput>;

// The operation
/**
 * List FileShare resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const FileSharesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FileSharesListBySubscriptionInput,
    outputSchema: FileSharesListBySubscriptionOutput,
  }));
// Input Schema
export interface FileShareSnapshotCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  name: string;
  properties?: {
    snapshotTime?: string;
    initiatorId?: string;
    metadata?: Record<string, string>;
  };
}
export const FileShareSnapshotCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        snapshotTime: Schema.optional(Schema.String),
        initiatorId: Schema.optional(Schema.String),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/fileShareSnapshots/{name}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileShareSnapshotCreateOrUpdateInput>;

// Output Schema
export type FileShareSnapshotCreateOrUpdateOutput = void;
export const FileShareSnapshotCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FileShareSnapshotCreateOrUpdateOutput>;

// The operation
/**
 * Create a FileShareSnapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 * @param name - The name of the FileShareSnapshot
 */
export const FileShareSnapshotCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FileShareSnapshotCreateOrUpdateInput,
    outputSchema: FileShareSnapshotCreateOrUpdateOutput,
  }));
// Input Schema
export interface FileShareSnapshotDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  name: string;
}
export const FileShareSnapshotDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/fileShareSnapshots/{name}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileShareSnapshotDeleteInput>;

// Output Schema
export type FileShareSnapshotDeleteOutput = void;
export const FileShareSnapshotDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FileShareSnapshotDeleteOutput>;

// The operation
/**
 * Delete a FileShareSnapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 * @param name - The name of the FileShareSnapshot
 */
export const FileShareSnapshotDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileShareSnapshotDeleteInput,
  outputSchema: FileShareSnapshotDeleteOutput,
}));
// Input Schema
export interface FileShareSnapshotGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  name: string;
}
export const FileShareSnapshotGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/fileShareSnapshots/{name}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileShareSnapshotGetInput>;

// Output Schema
export interface FileShareSnapshotGetOutput {
  id?: string;
  name?: string;
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
export const FileShareSnapshotGetOutput =
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
  }) as unknown as Schema.Codec<FileShareSnapshotGetOutput>;

// The operation
/**
 * Get a FileShareSnapshot
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 * @param name - The name of the FileShareSnapshot
 */
export const FileShareSnapshotGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileShareSnapshotGetInput,
  outputSchema: FileShareSnapshotGetOutput,
}));
// Input Schema
export interface FileShareSnapshotListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const FileShareSnapshotListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/fileShareSnapshots",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileShareSnapshotListInput>;

// Output Schema
export interface FileShareSnapshotListOutput {
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
export const FileShareSnapshotListOutput =
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
  }) as unknown as Schema.Codec<FileShareSnapshotListOutput>;

// The operation
/**
 * List FileShareSnapshot by FileShare.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 */
export const FileShareSnapshotList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileShareSnapshotListInput,
  outputSchema: FileShareSnapshotListOutput,
}));
// Input Schema
export interface FileShareSnapshotUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  name: string;
  properties?: { metadata?: Record<string, string> };
}
export const FileShareSnapshotUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/fileShareSnapshots/{name}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FileShareSnapshotUpdateInput>;

// Output Schema
export interface FileShareSnapshotUpdateOutput {
  id?: string;
  name?: string;
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
export const FileShareSnapshotUpdateOutput =
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
  }) as unknown as Schema.Codec<FileShareSnapshotUpdateOutput>;

// The operation
/**
 * Update a FileShareSnapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 * @param name - The name of the FileShareSnapshot
 */
export const FileShareSnapshotUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileShareSnapshotUpdateInput,
  outputSchema: FileShareSnapshotUpdateOutput,
}));
// Input Schema
export interface FileSharesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
  properties?: {
    provisionedStorageGiB?: number;
    provisionedIOPerSec?: number;
    provisionedThroughputMiBPerSec?: number;
    nfsProtocolProperties?: {
      rootSquash?: "NoRootSquash" | "RootSquash" | "AllSquash";
      encryptionInTransitRequired?: "Enabled" | "Disabled";
    };
    publicAccessProperties?: { allowedSubnets?: string[] };
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
}
export const FileSharesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      provisionedStorageGiB: Schema.optional(Schema.Number),
      provisionedIOPerSec: Schema.optional(Schema.Number),
      provisionedThroughputMiBPerSec: Schema.optional(Schema.Number),
      nfsProtocolProperties: Schema.optional(
        Schema.Struct({
          rootSquash: Schema.optional(
            Schema.Literals(["NoRootSquash", "RootSquash", "AllSquash"]),
          ),
          encryptionInTransitRequired: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
        }),
      ),
      publicAccessProperties: Schema.optional(
        Schema.Struct({
          allowedSubnets: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<FileSharesUpdateInput>;

// Output Schema
export interface FileSharesUpdateOutput {
  id?: string;
  name?: string;
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
export const FileSharesUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<FileSharesUpdateOutput>;

// The operation
/**
 * Update a FileShare
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 */
export const FileSharesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesUpdateInput,
  outputSchema: FileSharesUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.FileShares/operations",
    apiVersion: "2026-06-01",
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
  resourceName: string;
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
    resourceName: Schema.String.pipe(T.PathParam()),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-06-01",
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
 * Update the state of specified private endpoint connection associated with the file share.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
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
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the file share.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
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
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-06-01",
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
 * Gets the specified private endpoint connection associated with the file share.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByFileShareInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateEndpointConnectionsListByFileShareInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/privateEndpointConnections",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByFileShareInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByFileShareOutput {
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
export const PrivateEndpointConnectionsListByFileShareOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByFileShareOutput>;

// The operation
/**
 * Get a PrivateEndpointConnection List.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 */
export const PrivateEndpointConnectionsListByFileShare =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByFileShareInput,
    outputSchema: PrivateEndpointConnectionsListByFileShareOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  id?: string;
  name?: string;
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
export const PrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a file share.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 * @param privateLinkResourceName - The name of the private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.FileShares/fileShares/{resourceName}/privateLinkResources",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkResourcesListOutput {
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
export const PrivateLinkResourcesListOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a file share.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The resource name of the file share, as seen by the administrator through Azure Resource Manager.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesListInput,
  outputSchema: PrivateLinkResourcesListOutput,
}));
