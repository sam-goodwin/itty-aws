/**
 * Azure Storage API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AdvancedPlatformMetricsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  advancedPlatformMetricsRuleType: "ContainerLevelCapacityMetrics";
  properties?: {
    ruleType?: "ContainerLevelCapacityMetrics";
    enabled: boolean;
    lastModifiedTime?: string;
    metricsEmitted?: ("ContainerBlobCount" | "ContainerUsedSize")[];
    ruleConfig: {
      filterType?:
        | "AllContainersFilter"
        | "ContainerPrefixFilter"
        | "ContainerListFilter";
      filterValues?: string[];
    };
  };
}
export const AdvancedPlatformMetricsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    advancedPlatformMetricsRuleType: Schema.Literals([
      "ContainerLevelCapacityMetrics",
    ]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        ruleType: Schema.optional(
          Schema.Literals(["ContainerLevelCapacityMetrics"]),
        ),
        enabled: Schema.Boolean,
        lastModifiedTime: Schema.optional(Schema.String),
        metricsEmitted: Schema.optional(
          Schema.Array(
            Schema.Literals(["ContainerBlobCount", "ContainerUsedSize"]),
          ),
        ),
        ruleConfig: Schema.Struct({
          filterType: Schema.optional(
            Schema.Literals([
              "AllContainersFilter",
              "ContainerPrefixFilter",
              "ContainerListFilter",
            ]),
          ),
          filterValues: Schema.optional(Schema.Array(Schema.String)),
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/advancedPlatformMetrics/{advancedPlatformMetricsRuleType}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AdvancedPlatformMetricsCreateOrUpdateInput>;

// Output Schema
export interface AdvancedPlatformMetricsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const AdvancedPlatformMetricsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AdvancedPlatformMetricsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the advanced platform metrics rule for the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param advancedPlatformMetricsRuleType - The type of the advanced platform metrics rule.
 */
export const AdvancedPlatformMetricsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AdvancedPlatformMetricsCreateOrUpdateInput,
    outputSchema: AdvancedPlatformMetricsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AdvancedPlatformMetricsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  advancedPlatformMetricsRuleType: "ContainerLevelCapacityMetrics";
}
export const AdvancedPlatformMetricsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    advancedPlatformMetricsRuleType: Schema.Literals([
      "ContainerLevelCapacityMetrics",
    ]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/advancedPlatformMetrics/{advancedPlatformMetricsRuleType}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AdvancedPlatformMetricsDeleteInput>;

// Output Schema
export type AdvancedPlatformMetricsDeleteOutput = void;
export const AdvancedPlatformMetricsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AdvancedPlatformMetricsDeleteOutput>;

// The operation
/**
 * Delete the advanced platform metrics rule for the storage account by rule type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param advancedPlatformMetricsRuleType - The type of the advanced platform metrics rule.
 */
export const AdvancedPlatformMetricsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AdvancedPlatformMetricsDeleteInput,
    outputSchema: AdvancedPlatformMetricsDeleteOutput,
  }));
// Input Schema
export interface AdvancedPlatformMetricsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  advancedPlatformMetricsRuleType: "ContainerLevelCapacityMetrics";
}
export const AdvancedPlatformMetricsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    advancedPlatformMetricsRuleType: Schema.Literals([
      "ContainerLevelCapacityMetrics",
    ]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/advancedPlatformMetrics/{advancedPlatformMetricsRuleType}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AdvancedPlatformMetricsGetInput>;

// Output Schema
export interface AdvancedPlatformMetricsGetOutput {
  id?: string;
  name?: string;
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
export const AdvancedPlatformMetricsGetOutput =
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
  }) as unknown as Schema.Codec<AdvancedPlatformMetricsGetOutput>;

// The operation
/**
 * Get the advanced platform metrics rule for the storage account by rule type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param advancedPlatformMetricsRuleType - The type of the advanced platform metrics rule.
 */
export const AdvancedPlatformMetricsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AdvancedPlatformMetricsGetInput,
  outputSchema: AdvancedPlatformMetricsGetOutput,
}));
// Input Schema
export interface AdvancedPlatformMetricsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AdvancedPlatformMetricsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/advancedPlatformMetrics",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AdvancedPlatformMetricsListInput>;

// Output Schema
export interface AdvancedPlatformMetricsListOutput {
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
export const AdvancedPlatformMetricsListOutput =
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
  }) as unknown as Schema.Codec<AdvancedPlatformMetricsListOutput>;

// The operation
/**
 * List the advanced platform metrics rules associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const AdvancedPlatformMetricsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AdvancedPlatformMetricsListInput,
  outputSchema: AdvancedPlatformMetricsListOutput,
}));
// Input Schema
export interface BlobContainersClearLegalHoldInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
  hasLegalHold?: boolean;
  tags: string[];
  allowProtectedAppendWritesAll?: boolean;
}
export const BlobContainersClearLegalHoldInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    hasLegalHold: Schema.optional(Schema.Boolean),
    tags: Schema.Array(Schema.String),
    allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/clearLegalHold",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersClearLegalHoldInput>;

// Output Schema
export interface BlobContainersClearLegalHoldOutput {
  hasLegalHold?: boolean;
  tags: string[];
  allowProtectedAppendWritesAll?: boolean;
}
export const BlobContainersClearLegalHoldOutput =
  /*@__PURE__*/ Schema.Struct({
    hasLegalHold: Schema.optional(Schema.Boolean),
    tags: Schema.Array(Schema.String),
    allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<BlobContainersClearLegalHoldOutput>;

// The operation
/**
 * Clears legal hold tags. Clearing the same or non-existent tag results in an idempotent operation. ClearLegalHold clears out only the specified tags in the request.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersClearLegalHold =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersClearLegalHoldInput,
    outputSchema: BlobContainersClearLegalHoldOutput,
  }));
// Input Schema
export interface BlobContainersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
  properties?: {
    version?: string;
    deleted?: boolean;
    deletedTime?: string;
    remainingRetentionDays?: number;
    defaultEncryptionScope?: string;
    denyEncryptionScopeOverride?: boolean;
    publicAccess?: "Container" | "Blob" | "None";
    lastModifiedTime?: string;
    leaseStatus?: "Locked" | "Unlocked";
    leaseState?: "Available" | "Leased" | "Expired" | "Breaking" | "Broken";
    leaseDuration?: "Infinite" | "Fixed";
    metadata?: Record<string, string>;
    immutabilityPolicy?: {
      properties?: {
        immutabilityPeriodSinceCreationInDays?: number;
        state?: "Locked" | "Unlocked";
        allowProtectedAppendWrites?: boolean;
        allowProtectedAppendWritesAll?: boolean;
      };
      etag?: string;
      updateHistory?: {
        update?: "put" | "lock" | "extend";
        immutabilityPeriodSinceCreationInDays?: number;
        timestamp?: string;
        objectIdentifier?: string;
        tenantId?: string;
        upn?: string;
        allowProtectedAppendWrites?: boolean;
        allowProtectedAppendWritesAll?: boolean;
      }[];
    };
    legalHold?: {
      hasLegalHold?: boolean;
      tags?: {
        tag?: string;
        timestamp?: string;
        objectIdentifier?: string;
        tenantId?: string;
        upn?: string;
      }[];
      protectedAppendWritesHistory?: {
        allowProtectedAppendWritesAll?: boolean;
        timestamp?: string;
      };
    };
    hasLegalHold?: boolean;
    hasImmutabilityPolicy?: boolean;
    immutableStorageWithVersioning?: {
      enabled?: boolean;
      timeStamp?: string;
      migrationState?: "InProgress" | "Completed";
    };
    enableNfsV3RootSquash?: boolean;
    enableNfsV3AllSquash?: boolean;
  };
  etag?: string;
}
export const BlobContainersCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        version: Schema.optional(Schema.String),
        deleted: Schema.optional(Schema.Boolean),
        deletedTime: Schema.optional(Schema.String),
        remainingRetentionDays: Schema.optional(Schema.Number),
        defaultEncryptionScope: Schema.optional(Schema.String),
        denyEncryptionScopeOverride: Schema.optional(Schema.Boolean),
        publicAccess: Schema.optional(
          Schema.Literals(["Container", "Blob", "None"]),
        ),
        lastModifiedTime: Schema.optional(Schema.String),
        leaseStatus: Schema.optional(Schema.Literals(["Locked", "Unlocked"])),
        leaseState: Schema.optional(
          Schema.Literals([
            "Available",
            "Leased",
            "Expired",
            "Breaking",
            "Broken",
          ]),
        ),
        leaseDuration: Schema.optional(Schema.Literals(["Infinite", "Fixed"])),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        immutabilityPolicy: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                immutabilityPeriodSinceCreationInDays: Schema.optional(
                  Schema.Number,
                ),
                state: Schema.optional(Schema.Literals(["Locked", "Unlocked"])),
                allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
                allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
              }),
            ),
            etag: Schema.optional(Schema.String),
            updateHistory: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  update: Schema.optional(
                    Schema.Literals(["put", "lock", "extend"]),
                  ),
                  immutabilityPeriodSinceCreationInDays: Schema.optional(
                    Schema.Number,
                  ),
                  timestamp: Schema.optional(Schema.String),
                  objectIdentifier: Schema.optional(Schema.String),
                  tenantId: Schema.optional(Schema.String),
                  upn: Schema.optional(Schema.String),
                  allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
                  allowProtectedAppendWritesAll: Schema.optional(
                    Schema.Boolean,
                  ),
                }),
              ),
            ),
          }),
        ),
        legalHold: Schema.optional(
          Schema.Struct({
            hasLegalHold: Schema.optional(Schema.Boolean),
            tags: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  tag: Schema.optional(Schema.String),
                  timestamp: Schema.optional(Schema.String),
                  objectIdentifier: Schema.optional(Schema.String),
                  tenantId: Schema.optional(Schema.String),
                  upn: Schema.optional(Schema.String),
                }),
              ),
            ),
            protectedAppendWritesHistory: Schema.optional(
              Schema.Struct({
                allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
                timestamp: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        hasLegalHold: Schema.optional(Schema.Boolean),
        hasImmutabilityPolicy: Schema.optional(Schema.Boolean),
        immutableStorageWithVersioning: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            timeStamp: Schema.optional(Schema.String),
            migrationState: Schema.optional(
              Schema.Literals(["InProgress", "Completed"]),
            ),
          }),
        ),
        enableNfsV3RootSquash: Schema.optional(Schema.Boolean),
        enableNfsV3AllSquash: Schema.optional(Schema.Boolean),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersCreateInput>;

// Output Schema
export interface BlobContainersCreateOutput {
  id?: string;
  name?: string;
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
export const BlobContainersCreateOutput =
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
  }) as unknown as Schema.Codec<BlobContainersCreateOutput>;

// The operation
/**
 * Creates a new container under the specified account as described by request body. The container resource includes metadata and properties for that container. It does not include a list of the blobs contained by the container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobContainersCreateInput,
  outputSchema: BlobContainersCreateOutput,
}));
// Input Schema
export interface BlobContainersCreateOrUpdateImmutabilityPolicyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
  properties: {
    immutabilityPeriodSinceCreationInDays?: number;
    state?: "Locked" | "Unlocked";
    allowProtectedAppendWrites?: boolean;
    allowProtectedAppendWritesAll?: boolean;
  };
  etag?: string;
}
export const BlobContainersCreateOrUpdateImmutabilityPolicyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      immutabilityPeriodSinceCreationInDays: Schema.optional(Schema.Number),
      state: Schema.optional(Schema.Literals(["Locked", "Unlocked"])),
      allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
      allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersCreateOrUpdateImmutabilityPolicyInput>;

// Output Schema
export interface BlobContainersCreateOrUpdateImmutabilityPolicyOutput {
  id?: string;
  name?: string;
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
export const BlobContainersCreateOrUpdateImmutabilityPolicyOutput =
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
  }) as unknown as Schema.Codec<BlobContainersCreateOrUpdateImmutabilityPolicyOutput>;

// The operation
/**
 * Creates or updates an unlocked immutability policy. ETag in If-Match is honored if given but not required for this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param If-Match - The entity state (ETag) version of the immutability policy to update must be returned to the server for all update operations. The ETag value must include the leading and trailing double quotes as returned by the service.
 */
export const BlobContainersCreateOrUpdateImmutabilityPolicy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersCreateOrUpdateImmutabilityPolicyInput,
    outputSchema: BlobContainersCreateOrUpdateImmutabilityPolicyOutput,
  }));
// Input Schema
export interface BlobContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
}
export const BlobContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersDeleteInput>;

// Output Schema
export type BlobContainersDeleteOutput = void;
export const BlobContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BlobContainersDeleteOutput>;

// The operation
/**
 * Deletes specified container under its account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobContainersDeleteInput,
  outputSchema: BlobContainersDeleteOutput,
}));
// Input Schema
export interface BlobContainersDeleteImmutabilityPolicyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
}
export const BlobContainersDeleteImmutabilityPolicyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersDeleteImmutabilityPolicyInput>;

// Output Schema
export interface BlobContainersDeleteImmutabilityPolicyOutput {
  id?: string;
  name?: string;
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
export const BlobContainersDeleteImmutabilityPolicyOutput =
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
  }) as unknown as Schema.Codec<BlobContainersDeleteImmutabilityPolicyOutput>;

// The operation
/**
 * Aborts an unlocked immutability policy. The response of delete has immutabilityPeriodSinceCreationInDays set to 0. ETag in If-Match is required for this operation. Deleting a locked immutability policy is not allowed, the only way is to delete the container after deleting all expired blobs inside the policy locked container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param If-Match - The entity state (ETag) version of the immutability policy to update must be returned to the server for all update operations. The ETag value must include the leading and trailing double quotes as returned by the service.
 */
export const BlobContainersDeleteImmutabilityPolicy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersDeleteImmutabilityPolicyInput,
    outputSchema: BlobContainersDeleteImmutabilityPolicyOutput,
  }));
// Input Schema
export interface BlobContainersExtendImmutabilityPolicyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
  properties: {
    immutabilityPeriodSinceCreationInDays?: number;
    state?: "Locked" | "Unlocked";
    allowProtectedAppendWrites?: boolean;
    allowProtectedAppendWritesAll?: boolean;
  };
  etag?: string;
}
export const BlobContainersExtendImmutabilityPolicyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      immutabilityPeriodSinceCreationInDays: Schema.optional(Schema.Number),
      state: Schema.optional(Schema.Literals(["Locked", "Unlocked"])),
      allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
      allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default/extend",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersExtendImmutabilityPolicyInput>;

// Output Schema
export interface BlobContainersExtendImmutabilityPolicyOutput {
  id?: string;
  name?: string;
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
export const BlobContainersExtendImmutabilityPolicyOutput =
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
  }) as unknown as Schema.Codec<BlobContainersExtendImmutabilityPolicyOutput>;

// The operation
/**
 * Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy. The only action allowed on a Locked policy will be this action. ETag in If-Match is required for this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param If-Match - The entity state (ETag) version of the immutability policy to update must be returned to the server for all update operations. The ETag value must include the leading and trailing double quotes as returned by the service.
 */
export const BlobContainersExtendImmutabilityPolicy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersExtendImmutabilityPolicyInput,
    outputSchema: BlobContainersExtendImmutabilityPolicyOutput,
  }));
// Input Schema
export interface BlobContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
}
export const BlobContainersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  containerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BlobContainersGetInput>;

// Output Schema
export interface BlobContainersGetOutput {
  id?: string;
  name?: string;
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
export const BlobContainersGetOutput =
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
  }) as unknown as Schema.Codec<BlobContainersGetOutput>;

// The operation
/**
 * Gets properties of a specified container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobContainersGetInput,
  outputSchema: BlobContainersGetOutput,
}));
// Input Schema
export interface BlobContainersGetImmutabilityPolicyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
}
export const BlobContainersGetImmutabilityPolicyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersGetImmutabilityPolicyInput>;

// Output Schema
export interface BlobContainersGetImmutabilityPolicyOutput {
  id?: string;
  name?: string;
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
export const BlobContainersGetImmutabilityPolicyOutput =
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
  }) as unknown as Schema.Codec<BlobContainersGetImmutabilityPolicyOutput>;

// The operation
/**
 * Gets the existing immutability policy along with the corresponding ETag in response headers and body.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param If-Match - The entity state (ETag) version of the immutability policy to update must be returned to the server for all update operations. The ETag value must include the leading and trailing double quotes as returned by the service.
 */
export const BlobContainersGetImmutabilityPolicy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersGetImmutabilityPolicyInput,
    outputSchema: BlobContainersGetImmutabilityPolicyOutput,
  }));
// Input Schema
export interface BlobContainersLeaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
  action: "Acquire" | "Renew" | "Change" | "Release" | "Break";
  leaseId?: string;
  breakPeriod?: number;
  leaseDuration?: number;
  proposedLeaseId?: string;
}
export const BlobContainersLeaseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    action: Schema.Literals(["Acquire", "Renew", "Change", "Release", "Break"]),
    leaseId: Schema.optional(Schema.String),
    breakPeriod: Schema.optional(Schema.Number),
    leaseDuration: Schema.optional(Schema.Number),
    proposedLeaseId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/lease",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersLeaseInput>;

// Output Schema
export interface BlobContainersLeaseOutput {
  leaseId?: string;
  leaseTimeSeconds?: string;
}
export const BlobContainersLeaseOutput =
  /*@__PURE__*/ Schema.Struct({
    leaseId: Schema.optional(Schema.String),
    leaseTimeSeconds: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BlobContainersLeaseOutput>;

// The operation
/**
 * The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersLease = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobContainersLeaseInput,
  outputSchema: BlobContainersLeaseOutput,
}));
// Input Schema
export interface BlobContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $maxpagesize?: string;
  $filter?: string;
  $include?: "deleted";
}
export const BlobContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $include: Schema.optional(Schema.Literals(["deleted"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersListInput>;

// Output Schema
export interface BlobContainersListOutput {
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
export const BlobContainersListOutput =
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
  }) as unknown as Schema.Codec<BlobContainersListOutput>;

// The operation
/**
 * Lists all containers and does not support a prefix like data plane. Also SRP today does not return continuation token.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional. Specified maximum number of containers that can be included in the list.
 * @param $filter - Optional. When specified, only container names starting with the filter will be listed.
 * @param $include - Optional, used to include the properties for soft deleted blob containers.
 */
export const BlobContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobContainersListInput,
  outputSchema: BlobContainersListOutput,
}));
// Input Schema
export interface BlobContainersLockImmutabilityPolicyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
}
export const BlobContainersLockImmutabilityPolicyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default/lock",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersLockImmutabilityPolicyInput>;

// Output Schema
export interface BlobContainersLockImmutabilityPolicyOutput {
  id?: string;
  name?: string;
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
export const BlobContainersLockImmutabilityPolicyOutput =
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
  }) as unknown as Schema.Codec<BlobContainersLockImmutabilityPolicyOutput>;

// The operation
/**
 * Sets the ImmutabilityPolicy to Locked state. The only action allowed on a Locked policy is ExtendImmutabilityPolicy action. ETag in If-Match is required for this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param If-Match - The entity state (ETag) version of the immutability policy to update must be returned to the server for all update operations. The ETag value must include the leading and trailing double quotes as returned by the service.
 */
export const BlobContainersLockImmutabilityPolicy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersLockImmutabilityPolicyInput,
    outputSchema: BlobContainersLockImmutabilityPolicyOutput,
  }));
// Input Schema
export interface BlobContainersObjectLevelWormInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
}
export const BlobContainersObjectLevelWormInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/migrate",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersObjectLevelWormInput>;

// Output Schema
export type BlobContainersObjectLevelWormOutput = void;
export const BlobContainersObjectLevelWormOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BlobContainersObjectLevelWormOutput>;

// The operation
/**
 * This operation migrates a blob container from container level WORM to object level immutability enabled container. Prerequisites require a container level immutability policy either in locked or unlocked state, Account level versioning must be enabled and there should be no Legal hold on the container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersObjectLevelWorm =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BlobContainersObjectLevelWormInput,
    outputSchema: BlobContainersObjectLevelWormOutput,
  }));
// Input Schema
export interface BlobContainersSetLegalHoldInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
  hasLegalHold?: boolean;
  tags: string[];
  allowProtectedAppendWritesAll?: boolean;
}
export const BlobContainersSetLegalHoldInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    hasLegalHold: Schema.optional(Schema.Boolean),
    tags: Schema.Array(Schema.String),
    allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/setLegalHold",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersSetLegalHoldInput>;

// Output Schema
export interface BlobContainersSetLegalHoldOutput {
  hasLegalHold?: boolean;
  tags: string[];
  allowProtectedAppendWritesAll?: boolean;
}
export const BlobContainersSetLegalHoldOutput =
  /*@__PURE__*/ Schema.Struct({
    hasLegalHold: Schema.optional(Schema.Boolean),
    tags: Schema.Array(Schema.String),
    allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<BlobContainersSetLegalHoldOutput>;

// The operation
/**
 * Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersSetLegalHold = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobContainersSetLegalHoldInput,
  outputSchema: BlobContainersSetLegalHoldOutput,
}));
// Input Schema
export interface BlobContainersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  containerName: string;
  properties?: {
    version?: string;
    deleted?: boolean;
    deletedTime?: string;
    remainingRetentionDays?: number;
    defaultEncryptionScope?: string;
    denyEncryptionScopeOverride?: boolean;
    publicAccess?: "Container" | "Blob" | "None";
    lastModifiedTime?: string;
    leaseStatus?: "Locked" | "Unlocked";
    leaseState?: "Available" | "Leased" | "Expired" | "Breaking" | "Broken";
    leaseDuration?: "Infinite" | "Fixed";
    metadata?: Record<string, string>;
    immutabilityPolicy?: {
      properties?: {
        immutabilityPeriodSinceCreationInDays?: number;
        state?: "Locked" | "Unlocked";
        allowProtectedAppendWrites?: boolean;
        allowProtectedAppendWritesAll?: boolean;
      };
      etag?: string;
      updateHistory?: {
        update?: "put" | "lock" | "extend";
        immutabilityPeriodSinceCreationInDays?: number;
        timestamp?: string;
        objectIdentifier?: string;
        tenantId?: string;
        upn?: string;
        allowProtectedAppendWrites?: boolean;
        allowProtectedAppendWritesAll?: boolean;
      }[];
    };
    legalHold?: {
      hasLegalHold?: boolean;
      tags?: {
        tag?: string;
        timestamp?: string;
        objectIdentifier?: string;
        tenantId?: string;
        upn?: string;
      }[];
      protectedAppendWritesHistory?: {
        allowProtectedAppendWritesAll?: boolean;
        timestamp?: string;
      };
    };
    hasLegalHold?: boolean;
    hasImmutabilityPolicy?: boolean;
    immutableStorageWithVersioning?: {
      enabled?: boolean;
      timeStamp?: string;
      migrationState?: "InProgress" | "Completed";
    };
    enableNfsV3RootSquash?: boolean;
    enableNfsV3AllSquash?: boolean;
  };
  etag?: string;
}
export const BlobContainersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        version: Schema.optional(Schema.String),
        deleted: Schema.optional(Schema.Boolean),
        deletedTime: Schema.optional(Schema.String),
        remainingRetentionDays: Schema.optional(Schema.Number),
        defaultEncryptionScope: Schema.optional(Schema.String),
        denyEncryptionScopeOverride: Schema.optional(Schema.Boolean),
        publicAccess: Schema.optional(
          Schema.Literals(["Container", "Blob", "None"]),
        ),
        lastModifiedTime: Schema.optional(Schema.String),
        leaseStatus: Schema.optional(Schema.Literals(["Locked", "Unlocked"])),
        leaseState: Schema.optional(
          Schema.Literals([
            "Available",
            "Leased",
            "Expired",
            "Breaking",
            "Broken",
          ]),
        ),
        leaseDuration: Schema.optional(Schema.Literals(["Infinite", "Fixed"])),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        immutabilityPolicy: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                immutabilityPeriodSinceCreationInDays: Schema.optional(
                  Schema.Number,
                ),
                state: Schema.optional(Schema.Literals(["Locked", "Unlocked"])),
                allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
                allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
              }),
            ),
            etag: Schema.optional(Schema.String),
            updateHistory: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  update: Schema.optional(
                    Schema.Literals(["put", "lock", "extend"]),
                  ),
                  immutabilityPeriodSinceCreationInDays: Schema.optional(
                    Schema.Number,
                  ),
                  timestamp: Schema.optional(Schema.String),
                  objectIdentifier: Schema.optional(Schema.String),
                  tenantId: Schema.optional(Schema.String),
                  upn: Schema.optional(Schema.String),
                  allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
                  allowProtectedAppendWritesAll: Schema.optional(
                    Schema.Boolean,
                  ),
                }),
              ),
            ),
          }),
        ),
        legalHold: Schema.optional(
          Schema.Struct({
            hasLegalHold: Schema.optional(Schema.Boolean),
            tags: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  tag: Schema.optional(Schema.String),
                  timestamp: Schema.optional(Schema.String),
                  objectIdentifier: Schema.optional(Schema.String),
                  tenantId: Schema.optional(Schema.String),
                  upn: Schema.optional(Schema.String),
                }),
              ),
            ),
            protectedAppendWritesHistory: Schema.optional(
              Schema.Struct({
                allowProtectedAppendWritesAll: Schema.optional(Schema.Boolean),
                timestamp: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        hasLegalHold: Schema.optional(Schema.Boolean),
        hasImmutabilityPolicy: Schema.optional(Schema.Boolean),
        immutableStorageWithVersioning: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            timeStamp: Schema.optional(Schema.String),
            migrationState: Schema.optional(
              Schema.Literals(["InProgress", "Completed"]),
            ),
          }),
        ),
        enableNfsV3RootSquash: Schema.optional(Schema.Boolean),
        enableNfsV3AllSquash: Schema.optional(Schema.Boolean),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobContainersUpdateInput>;

// Output Schema
export interface BlobContainersUpdateOutput {
  id?: string;
  name?: string;
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
export const BlobContainersUpdateOutput =
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
  }) as unknown as Schema.Codec<BlobContainersUpdateOutput>;

// The operation
/**
 * Updates container properties as specified in request body. Properties not mentioned in the request will be unchanged. Update fails if the specified container doesn't already exist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param containerName - The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const BlobContainersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobContainersUpdateInput,
  outputSchema: BlobContainersUpdateOutput,
}));
// Input Schema
export interface BlobInventoryPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  blobInventoryPolicyName: "default";
  properties?: {
    lastModifiedTime?: string;
    policy: {
      enabled: boolean;
      destination?: string;
      type: "Inventory";
      rules: {
        enabled: boolean;
        name: string;
        destination: string;
        definition: {
          filters?: {
            prefixMatch?: string[];
            excludePrefix?: string[];
            blobTypes?: string[];
            includeBlobVersions?: boolean;
            includeSnapshots?: boolean;
            includeDeleted?: boolean;
            creationTime?: { lastNDays?: number };
          };
          format: "Csv" | "Parquet";
          schedule: "Daily" | "Weekly";
          objectType: "Blob" | "Container";
          schemaFields: string[];
        };
      }[];
    };
  };
}
export const BlobInventoryPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    blobInventoryPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        lastModifiedTime: Schema.optional(Schema.String),
        policy: Schema.Struct({
          enabled: Schema.Boolean,
          destination: Schema.optional(Schema.String),
          type: Schema.Literals(["Inventory"]),
          rules: Schema.Array(
            Schema.Struct({
              enabled: Schema.Boolean,
              name: Schema.String,
              destination: Schema.String,
              definition: Schema.Struct({
                filters: Schema.optional(
                  Schema.Struct({
                    prefixMatch: Schema.optional(Schema.Array(Schema.String)),
                    excludePrefix: Schema.optional(Schema.Array(Schema.String)),
                    blobTypes: Schema.optional(Schema.Array(Schema.String)),
                    includeBlobVersions: Schema.optional(Schema.Boolean),
                    includeSnapshots: Schema.optional(Schema.Boolean),
                    includeDeleted: Schema.optional(Schema.Boolean),
                    creationTime: Schema.optional(
                      Schema.Struct({
                        lastNDays: Schema.optional(Schema.Number),
                      }),
                    ),
                  }),
                ),
                format: Schema.Literals(["Csv", "Parquet"]),
                schedule: Schema.Literals(["Daily", "Weekly"]),
                objectType: Schema.Literals(["Blob", "Container"]),
                schemaFields: Schema.Array(Schema.String),
              }),
            }),
          ),
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies/{blobInventoryPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobInventoryPoliciesCreateOrUpdateInput>;

// Output Schema
export interface BlobInventoryPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const BlobInventoryPoliciesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BlobInventoryPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Sets the blob inventory policy to the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param blobInventoryPolicyName - The name of the storage account blob inventory policy. It should always be 'default'
 */
export const BlobInventoryPoliciesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BlobInventoryPoliciesCreateOrUpdateInput,
    outputSchema: BlobInventoryPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface BlobInventoryPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  blobInventoryPolicyName: "default";
}
export const BlobInventoryPoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    blobInventoryPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies/{blobInventoryPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobInventoryPoliciesDeleteInput>;

// Output Schema
export type BlobInventoryPoliciesDeleteOutput = void;
export const BlobInventoryPoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BlobInventoryPoliciesDeleteOutput>;

// The operation
/**
 * Deletes the blob inventory policy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param blobInventoryPolicyName - The name of the storage account blob inventory policy. It should always be 'default'
 */
export const BlobInventoryPoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobInventoryPoliciesDeleteInput,
  outputSchema: BlobInventoryPoliciesDeleteOutput,
}));
// Input Schema
export interface BlobInventoryPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  blobInventoryPolicyName: "default";
}
export const BlobInventoryPoliciesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    blobInventoryPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies/{blobInventoryPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobInventoryPoliciesGetInput>;

// Output Schema
export interface BlobInventoryPoliciesGetOutput {
  id?: string;
  name?: string;
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
export const BlobInventoryPoliciesGetOutput =
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
  }) as unknown as Schema.Codec<BlobInventoryPoliciesGetOutput>;

// The operation
/**
 * Gets the blob inventory policy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param blobInventoryPolicyName - The name of the storage account blob inventory policy. It should always be 'default'
 */
export const BlobInventoryPoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobInventoryPoliciesGetInput,
  outputSchema: BlobInventoryPoliciesGetOutput,
}));
// Input Schema
export interface BlobInventoryPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BlobInventoryPoliciesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobInventoryPoliciesListInput>;

// Output Schema
export interface BlobInventoryPoliciesListOutput {
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
export const BlobInventoryPoliciesListOutput =
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
  }) as unknown as Schema.Codec<BlobInventoryPoliciesListOutput>;

// The operation
/**
 * Gets the blob inventory policy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const BlobInventoryPoliciesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobInventoryPoliciesListInput,
  outputSchema: BlobInventoryPoliciesListOutput,
}));
// Input Schema
export interface BlobServicesGetServicePropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BlobServicesGetServicePropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobServicesGetServicePropertiesInput>;

// Output Schema
export interface BlobServicesGetServicePropertiesOutput {
  id?: string;
  name?: string;
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
export const BlobServicesGetServicePropertiesOutput =
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
  }) as unknown as Schema.Codec<BlobServicesGetServicePropertiesOutput>;

// The operation
/**
 * Gets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const BlobServicesGetServiceProperties =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BlobServicesGetServicePropertiesInput,
    outputSchema: BlobServicesGetServicePropertiesOutput,
  }));
// Input Schema
export interface BlobServicesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BlobServicesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BlobServicesListInput>;

// Output Schema
export interface BlobServicesListOutput {
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
export const BlobServicesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BlobServicesListOutput>;

// The operation
/**
 * List blob services of storage account. It returns a collection of one object named default.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const BlobServicesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BlobServicesListInput,
  outputSchema: BlobServicesListOutput,
}));
// Input Schema
export interface BlobServicesSetServicePropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    cors?: {
      corsRules?: {
        allowedOrigins: string[];
        allowedMethods: (
          | "DELETE"
          | "GET"
          | "HEAD"
          | "MERGE"
          | "POST"
          | "OPTIONS"
          | "PUT"
          | "PATCH"
          | "CONNECT"
          | "TRACE"
        )[];
        maxAgeInSeconds: number;
        exposedHeaders: string[];
        allowedHeaders: string[];
      }[];
    };
    defaultServiceVersion?: string;
    deleteRetentionPolicy?: {
      enabled?: boolean;
      days?: number;
      allowPermanentDelete?: boolean;
    };
    staticWebsite?: {
      enabled: boolean;
      indexDocument?: string;
      defaultIndexDocumentPath?: string;
      errorDocument404Path?: string;
    };
    isVersioningEnabled?: boolean;
    automaticSnapshotPolicyEnabled?: boolean;
    changeFeed?: { enabled?: boolean; retentionInDays?: number };
    restorePolicy?: {
      enabled: boolean;
      days?: number;
      lastEnabledTime?: string;
      minRestoreTime?: string;
    };
    containerDeleteRetentionPolicy?: {
      enabled?: boolean;
      days?: number;
      allowPermanentDelete?: boolean;
    };
    lastAccessTimeTrackingPolicy?: {
      enable: boolean;
      name?: "AccessTimeTracking";
      trackingGranularityInDays?: number;
      blobType?: string[];
    };
  };
  sku?: {
    name:
      | "Standard_LRS"
      | "Standard_GRS"
      | "Standard_RAGRS"
      | "Standard_ZRS"
      | "Premium_LRS"
      | "Premium_ZRS"
      | "Standard_GZRS"
      | "Standard_RAGZRS"
      | "StandardV2_LRS"
      | "StandardV2_GRS"
      | "StandardV2_ZRS"
      | "StandardV2_GZRS"
      | "PremiumV2_LRS"
      | "PremiumV2_ZRS";
    tier?: "Standard" | "Premium";
  };
}
export const BlobServicesSetServicePropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        cors: Schema.optional(
          Schema.Struct({
            corsRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  allowedOrigins: Schema.Array(Schema.String),
                  allowedMethods: Schema.Array(
                    Schema.Literals([
                      "DELETE",
                      "GET",
                      "HEAD",
                      "MERGE",
                      "POST",
                      "OPTIONS",
                      "PUT",
                      "PATCH",
                      "CONNECT",
                      "TRACE",
                    ]),
                  ),
                  maxAgeInSeconds: Schema.Number,
                  exposedHeaders: Schema.Array(Schema.String),
                  allowedHeaders: Schema.Array(Schema.String),
                }),
              ),
            ),
          }),
        ),
        defaultServiceVersion: Schema.optional(Schema.String),
        deleteRetentionPolicy: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            days: Schema.optional(Schema.Number),
            allowPermanentDelete: Schema.optional(Schema.Boolean),
          }),
        ),
        staticWebsite: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            indexDocument: Schema.optional(Schema.String),
            defaultIndexDocumentPath: Schema.optional(Schema.String),
            errorDocument404Path: Schema.optional(Schema.String),
          }),
        ),
        isVersioningEnabled: Schema.optional(Schema.Boolean),
        automaticSnapshotPolicyEnabled: Schema.optional(Schema.Boolean),
        changeFeed: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            retentionInDays: Schema.optional(Schema.Number),
          }),
        ),
        restorePolicy: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            days: Schema.optional(Schema.Number),
            lastEnabledTime: Schema.optional(Schema.String),
            minRestoreTime: Schema.optional(Schema.String),
          }),
        ),
        containerDeleteRetentionPolicy: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            days: Schema.optional(Schema.Number),
            allowPermanentDelete: Schema.optional(Schema.Boolean),
          }),
        ),
        lastAccessTimeTrackingPolicy: Schema.optional(
          Schema.Struct({
            enable: Schema.Boolean,
            name: Schema.optional(Schema.Literals(["AccessTimeTracking"])),
            trackingGranularityInDays: Schema.optional(Schema.Number),
            blobType: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals([
          "Standard_LRS",
          "Standard_GRS",
          "Standard_RAGRS",
          "Standard_ZRS",
          "Premium_LRS",
          "Premium_ZRS",
          "Standard_GZRS",
          "Standard_RAGZRS",
          "StandardV2_LRS",
          "StandardV2_GRS",
          "StandardV2_ZRS",
          "StandardV2_GZRS",
          "PremiumV2_LRS",
          "PremiumV2_ZRS",
        ]),
        tier: Schema.optional(Schema.Literals(["Standard", "Premium"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BlobServicesSetServicePropertiesInput>;

// Output Schema
export interface BlobServicesSetServicePropertiesOutput {
  id?: string;
  name?: string;
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
export const BlobServicesSetServicePropertiesOutput =
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
  }) as unknown as Schema.Codec<BlobServicesSetServicePropertiesOutput>;

// The operation
/**
 * Sets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const BlobServicesSetServiceProperties =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BlobServicesSetServicePropertiesInput,
    outputSchema: BlobServicesSetServicePropertiesOutput,
  }));
// Input Schema
export interface ConnectorsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  connectorName: string;
  properties: {
    uniqueId?: string;
    state?: "Active" | "Inactive";
    creationTime?: string;
    description?: string;
    testConnection?: boolean;
    dataSourceType: "Azure_DataShare";
    source: { type: "DataShare" };
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Succeeded"
      | "Deleting"
      | "Canceled"
      | "Failed";
  };
  tags?: Record<string, string>;
  location: string;
}
export const ConnectorsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    uniqueId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.Literals(["Active", "Inactive"])),
    creationTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    testConnection: Schema.optional(Schema.Boolean),
    dataSourceType: Schema.Literals(["Azure_DataShare"]),
    source: Schema.Struct({
      type: Schema.Literals(["DataShare"]),
    }),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Accepted",
        "Creating",
        "Succeeded",
        "Deleting",
        "Canceled",
        "Failed",
      ]),
    ),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors/{connectorName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<ConnectorsCreateInput>;

// Output Schema
export interface ConnectorsCreateOutput {
  id?: string;
  name?: string;
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
export const ConnectorsCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ConnectorsCreateOutput>;

// The operation
/**
 * Create a Storage Connector if it does not already exist; otherwise, error out. This API will not allow you to replace an already existing resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param connectorName - The name of the Storage Connector.
 */
export const ConnectorsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsCreateInput,
  outputSchema: ConnectorsCreateOutput,
}));
// Input Schema
export interface ConnectorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  connectorName: string;
}
export const ConnectorsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors/{connectorName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<ConnectorsDeleteInput>;

// Output Schema
export type ConnectorsDeleteOutput = void;
export const ConnectorsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectorsDeleteOutput>;

// The operation
/**
 * Delete a Storage Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param connectorName - The name of the Storage Connector.
 */
export const ConnectorsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsDeleteInput,
  outputSchema: ConnectorsDeleteOutput,
}));
// Input Schema
export interface ConnectorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  connectorName: string;
}
export const ConnectorsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors/{connectorName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<ConnectorsGetInput>;

// Output Schema
export interface ConnectorsGetOutput {
  id?: string;
  name?: string;
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
export const ConnectorsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ConnectorsGetOutput>;

// The operation
/**
 * Get the specified Storage Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param connectorName - The name of the Storage Connector.
 */
export const ConnectorsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsGetInput,
  outputSchema: ConnectorsGetOutput,
}));
// Input Schema
export interface ConnectorsListByStorageAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const ConnectorsListByStorageAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<ConnectorsListByStorageAccountInput>;

// Output Schema
export interface ConnectorsListByStorageAccountOutput {
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
export const ConnectorsListByStorageAccountOutput =
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
  }) as unknown as Schema.Codec<ConnectorsListByStorageAccountOutput>;

// The operation
/**
 * List all Storage Connectors in a Storage Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const ConnectorsListByStorageAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectorsListByStorageAccountInput,
    outputSchema: ConnectorsListByStorageAccountOutput,
  }));
// Input Schema
export interface ConnectorsTestExistingConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  connectorName: string;
  uniqueId: string;
}
export const ConnectorsTestExistingConnectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    uniqueId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors/{connectorName}/testExistingConnection",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<ConnectorsTestExistingConnectionInput>;

// Output Schema
export interface ConnectorsTestExistingConnectionOutput {
  storageConnectorMethodName: string;
  storageConnectorErrorMessage?: string;
  storageConnectorRequestId: string;
}
export const ConnectorsTestExistingConnectionOutput =
  /*@__PURE__*/ Schema.Struct({
    storageConnectorMethodName: Schema.String,
    storageConnectorErrorMessage: Schema.optional(Schema.String),
    storageConnectorRequestId: Schema.String,
  }) as unknown as Schema.Codec<ConnectorsTestExistingConnectionOutput>;

// The operation
/**
 * This method is used to verify that the connection to the backing data store works.
 * This API is designed to be used for monitoring and debugging purposes. From the caller’s perspective,
 * this method does the following: Calls List on the backing data store, attempting to list up to one blob/object/etc.
 * If the above succeeds, and if a blob/object/etc is found, calls Get on that object, attempting to download one byte.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param connectorName - The name of the Storage Connector.
 */
export const ConnectorsTestExistingConnection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectorsTestExistingConnectionInput,
    outputSchema: ConnectorsTestExistingConnectionOutput,
  }));
// Input Schema
export interface ConnectorsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  connectorName: string;
  properties?: {
    state?: "Active" | "Inactive";
    description?: string;
    testConnection?: boolean;
    source?: { type: "DataShare" };
  };
  tags?: Record<string, string>;
}
export const ConnectorsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      state: Schema.optional(Schema.Literals(["Active", "Inactive"])),
      description: Schema.optional(Schema.String),
      testConnection: Schema.optional(Schema.Boolean),
      source: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["DataShare"]),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/connectors/{connectorName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<ConnectorsUpdateInput>;

// Output Schema
export interface ConnectorsUpdateOutput {
  id?: string;
  name?: string;
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
export const ConnectorsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ConnectorsUpdateOutput>;

// The operation
/**
 * Update a Storage Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param connectorName - The name of the Storage Connector.
 */
export const ConnectorsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsUpdateInput,
  outputSchema: ConnectorsUpdateOutput,
}));
// Input Schema
export interface DataSharesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  dataShareName: string;
  properties: {
    dataShareIdentifier?: string;
    description?: string;
    dataShareUri?: string;
    accessPolicies: {
      principalId: string;
      tenantId: string;
      permission: "None" | "Read";
    }[];
    assets: { assetPath: string; displayName: string }[];
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Succeeded"
      | "Deleting"
      | "Canceled"
      | "Failed";
  };
  tags?: Record<string, string>;
  location: string;
}
export const DataSharesCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  dataShareName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    dataShareIdentifier: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    dataShareUri: Schema.optional(Schema.String),
    accessPolicies: Schema.Array(
      Schema.Struct({
        principalId: Schema.String,
        tenantId: Schema.String,
        permission: Schema.Literals(["None", "Read"]),
      }),
    ),
    assets: Schema.Array(
      Schema.Struct({
        assetPath: Schema.String,
        displayName: Schema.String,
      }),
    ),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Accepted",
        "Creating",
        "Succeeded",
        "Deleting",
        "Canceled",
        "Failed",
      ]),
    ),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/dataShares/{dataShareName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<DataSharesCreateInput>;

// Output Schema
export interface DataSharesCreateOutput {
  id?: string;
  name?: string;
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
export const DataSharesCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<DataSharesCreateOutput>;

// The operation
/**
 * Create a Storage DataShare if it does not already exist; otherwise, error out. This API will not allow you to replace an already existing resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param dataShareName - The name of the Storage DataShare.
 */
export const DataSharesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSharesCreateInput,
  outputSchema: DataSharesCreateOutput,
}));
// Input Schema
export interface DataSharesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  dataShareName: string;
}
export const DataSharesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  dataShareName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/dataShares/{dataShareName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<DataSharesDeleteInput>;

// Output Schema
export type DataSharesDeleteOutput = void;
export const DataSharesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataSharesDeleteOutput>;

// The operation
/**
 * Delete a Storage DataShare.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param dataShareName - The name of the Storage DataShare.
 */
export const DataSharesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSharesDeleteInput,
  outputSchema: DataSharesDeleteOutput,
}));
// Input Schema
export interface DataSharesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  dataShareName: string;
}
export const DataSharesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  dataShareName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/dataShares/{dataShareName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<DataSharesGetInput>;

// Output Schema
export interface DataSharesGetOutput {
  id?: string;
  name?: string;
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
export const DataSharesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<DataSharesGetOutput>;

// The operation
/**
 * Get the specified Storage DataShare.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param dataShareName - The name of the Storage DataShare.
 */
export const DataSharesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSharesGetInput,
  outputSchema: DataSharesGetOutput,
}));
// Input Schema
export interface DataSharesListByStorageAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const DataSharesListByStorageAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/dataShares",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<DataSharesListByStorageAccountInput>;

// Output Schema
export interface DataSharesListByStorageAccountOutput {
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
export const DataSharesListByStorageAccountOutput =
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
  }) as unknown as Schema.Codec<DataSharesListByStorageAccountOutput>;

// The operation
/**
 * List all Storage DataShares in a Storage Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const DataSharesListByStorageAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataSharesListByStorageAccountInput,
    outputSchema: DataSharesListByStorageAccountOutput,
  }));
// Input Schema
export interface DataSharesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  dataShareName: string;
  properties?: {
    description?: string;
    accessPolicies?: {
      principalId: string;
      tenantId: string;
      permission: "None" | "Read";
    }[];
    assets?: { assetPath: string; displayName: string }[];
  };
  tags?: Record<string, string>;
}
export const DataSharesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  dataShareName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      accessPolicies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            tenantId: Schema.String,
            permission: Schema.Literals(["None", "Read"]),
          }),
        ),
      ),
      assets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            assetPath: Schema.String,
            displayName: Schema.String,
          }),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/dataShares/{dataShareName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<DataSharesUpdateInput>;

// Output Schema
export interface DataSharesUpdateOutput {
  id?: string;
  name?: string;
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
export const DataSharesUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<DataSharesUpdateOutput>;

// The operation
/**
 * Update a Storage DataShare.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param dataShareName - The name of the Storage DataShare.
 */
export const DataSharesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSharesUpdateInput,
  outputSchema: DataSharesUpdateOutput,
}));
// Input Schema
export interface DeletedAccountsGetInput {
  subscriptionId: string;
  location: string;
  deletedAccountName: string;
}
export const DeletedAccountsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    deletedAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/deletedAccounts/{deletedAccountName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<DeletedAccountsGetInput>;

// Output Schema
export interface DeletedAccountsGetOutput {
  id?: string;
  name?: string;
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
export const DeletedAccountsGetOutput =
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
  }) as unknown as Schema.Codec<DeletedAccountsGetOutput>;

// The operation
/**
 * Get properties of specified deleted account resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param deletedAccountName - Name of the deleted storage account.
 */
export const DeletedAccountsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeletedAccountsGetInput,
  outputSchema: DeletedAccountsGetOutput,
}));
// Input Schema
export interface DeletedAccountsListInput {
  subscriptionId: string;
}
export const DeletedAccountsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/deletedAccounts",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<DeletedAccountsListInput>;

// Output Schema
export interface DeletedAccountsListOutput {
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
export const DeletedAccountsListOutput =
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
  }) as unknown as Schema.Codec<DeletedAccountsListOutput>;

// The operation
/**
 * Lists deleted accounts under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const DeletedAccountsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeletedAccountsListInput,
  outputSchema: DeletedAccountsListOutput,
}));
// Input Schema
export interface EncryptionScopesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  encryptionScopeName: string;
}
export const EncryptionScopesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<EncryptionScopesGetInput>;

// Output Schema
export interface EncryptionScopesGetOutput {
  id?: string;
  name?: string;
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
export const EncryptionScopesGetOutput =
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
  }) as unknown as Schema.Codec<EncryptionScopesGetOutput>;

// The operation
/**
 * Returns the properties for the specified encryption scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param encryptionScopeName - The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const EncryptionScopesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EncryptionScopesGetInput,
  outputSchema: EncryptionScopesGetOutput,
}));
// Input Schema
export interface EncryptionScopesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $maxpagesize?: number;
  $filter?: string;
  $include?: "All" | "Enabled" | "Disabled";
}
export const EncryptionScopesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
    $include: Schema.optional(Schema.Literals(["All", "Enabled", "Disabled"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<EncryptionScopesListInput>;

// Output Schema
export interface EncryptionScopesListOutput {
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
export const EncryptionScopesListOutput =
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
  }) as unknown as Schema.Codec<EncryptionScopesListOutput>;

// The operation
/**
 * Lists all the encryption scopes available under the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of encryption scopes that will be included in the list response.
 * @param $filter - Optional. When specified, only encryption scope names starting with the filter will be listed.
 * @param $include - Optional, when specified, will list encryption scopes with the specific state. Defaults to All
 */
export const EncryptionScopesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: EncryptionScopesListInput,
  outputSchema: EncryptionScopesListOutput,
}));
// Input Schema
export interface EncryptionScopesPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  encryptionScopeName: string;
  properties?: {
    source?: "Microsoft.Storage" | "Microsoft.KeyVault";
    state?: "Enabled" | "Disabled";
    creationTime?: string;
    lastModifiedTime?: string;
    keyVaultProperties?: {
      keyUri?: string;
      currentVersionedKeyIdentifier?: string;
      lastKeyRotationTimestamp?: string;
    };
    requireInfrastructureEncryption?: boolean;
  };
}
export const EncryptionScopesPatchInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        source: Schema.optional(
          Schema.Literals(["Microsoft.Storage", "Microsoft.KeyVault"]),
        ),
        state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        creationTime: Schema.optional(Schema.String),
        lastModifiedTime: Schema.optional(Schema.String),
        keyVaultProperties: Schema.optional(
          Schema.Struct({
            keyUri: Schema.optional(Schema.String),
            currentVersionedKeyIdentifier: Schema.optional(Schema.String),
            lastKeyRotationTimestamp: Schema.optional(Schema.String),
          }),
        ),
        requireInfrastructureEncryption: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<EncryptionScopesPatchInput>;

// Output Schema
export interface EncryptionScopesPatchOutput {
  id?: string;
  name?: string;
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
export const EncryptionScopesPatchOutput =
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
  }) as unknown as Schema.Codec<EncryptionScopesPatchOutput>;

// The operation
/**
 * Update encryption scope properties as specified in the request body. Update fails if the specified encryption scope does not already exist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param encryptionScopeName - The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const EncryptionScopesPatch = /*@__PURE__*/ API.make(() => ({
  inputSchema: EncryptionScopesPatchInput,
  outputSchema: EncryptionScopesPatchOutput,
}));
// Input Schema
export interface EncryptionScopesPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  encryptionScopeName: string;
  properties?: {
    source?: "Microsoft.Storage" | "Microsoft.KeyVault";
    state?: "Enabled" | "Disabled";
    creationTime?: string;
    lastModifiedTime?: string;
    keyVaultProperties?: {
      keyUri?: string;
      currentVersionedKeyIdentifier?: string;
      lastKeyRotationTimestamp?: string;
    };
    requireInfrastructureEncryption?: boolean;
  };
}
export const EncryptionScopesPutInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        source: Schema.optional(
          Schema.Literals(["Microsoft.Storage", "Microsoft.KeyVault"]),
        ),
        state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        creationTime: Schema.optional(Schema.String),
        lastModifiedTime: Schema.optional(Schema.String),
        keyVaultProperties: Schema.optional(
          Schema.Struct({
            keyUri: Schema.optional(Schema.String),
            currentVersionedKeyIdentifier: Schema.optional(Schema.String),
            lastKeyRotationTimestamp: Schema.optional(Schema.String),
          }),
        ),
        requireInfrastructureEncryption: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<EncryptionScopesPutInput>;

// Output Schema
export interface EncryptionScopesPutOutput {
  id?: string;
  name?: string;
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
export const EncryptionScopesPutOutput =
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
  }) as unknown as Schema.Codec<EncryptionScopesPutOutput>;

// The operation
/**
 * Synchronously creates or updates an encryption scope under the specified storage account. If an encryption scope is already created and a subsequent request is issued with different properties, the encryption scope properties will be updated per the specified request.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param encryptionScopeName - The name of the encryption scope within the specified storage account. Encryption scope names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const EncryptionScopesPut = /*@__PURE__*/ API.make(() => ({
  inputSchema: EncryptionScopesPutInput,
  outputSchema: EncryptionScopesPutOutput,
}));
// Input Schema
export interface FileServicesGetServicePropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const FileServicesGetServicePropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<FileServicesGetServicePropertiesInput>;

// Output Schema
export interface FileServicesGetServicePropertiesOutput {
  id?: string;
  name?: string;
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
export const FileServicesGetServicePropertiesOutput =
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
  }) as unknown as Schema.Codec<FileServicesGetServicePropertiesOutput>;

// The operation
/**
 * Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const FileServicesGetServiceProperties =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FileServicesGetServicePropertiesInput,
    outputSchema: FileServicesGetServicePropertiesOutput,
  }));
// Input Schema
export interface FileServicesGetServiceUsageInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const FileServicesGetServiceUsageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/usages/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<FileServicesGetServiceUsageInput>;

// Output Schema
export interface FileServicesGetServiceUsageOutput {
  id?: string;
  name?: string;
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
export const FileServicesGetServiceUsageOutput =
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
  }) as unknown as Schema.Codec<FileServicesGetServiceUsageOutput>;

// The operation
/**
 * Gets the usage of file service in storage account including account limits, file share limits and constants used in recommendations and bursting formula.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const FileServicesGetServiceUsage = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileServicesGetServiceUsageInput,
  outputSchema: FileServicesGetServiceUsageOutput,
}));
// Input Schema
export interface FileServicesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const FileServicesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<FileServicesListInput>;

// Output Schema
export interface FileServicesListOutput {
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
export const FileServicesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FileServicesListOutput>;

// The operation
/**
 * List all file services in storage accounts
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const FileServicesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileServicesListInput,
  outputSchema: FileServicesListOutput,
}));
// Input Schema
export interface FileServicesListServiceUsagesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $maxpagesize?: number;
}
export const FileServicesListServiceUsagesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/usages",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<FileServicesListServiceUsagesInput>;

// Output Schema
export interface FileServicesListServiceUsagesOutput {
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
export const FileServicesListServiceUsagesOutput =
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
  }) as unknown as Schema.Codec<FileServicesListServiceUsagesOutput>;

// The operation
/**
 * Gets the usages of file service in storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of file service usages to be included in the list response.
 */
export const FileServicesListServiceUsages =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FileServicesListServiceUsagesInput,
    outputSchema: FileServicesListServiceUsagesOutput,
  }));
// Input Schema
export interface FileServicesSetServicePropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    cors?: {
      corsRules?: {
        allowedOrigins: string[];
        allowedMethods: (
          | "DELETE"
          | "GET"
          | "HEAD"
          | "MERGE"
          | "POST"
          | "OPTIONS"
          | "PUT"
          | "PATCH"
          | "CONNECT"
          | "TRACE"
        )[];
        maxAgeInSeconds: number;
        exposedHeaders: string[];
        allowedHeaders: string[];
      }[];
    };
    shareDeleteRetentionPolicy?: {
      enabled?: boolean;
      days?: number;
      allowPermanentDelete?: boolean;
    };
    protocolSettings?: {
      smb?: {
        multichannel?: { enabled?: boolean };
        versions?: string;
        authenticationMethods?: string;
        kerberosTicketEncryption?: string;
        channelEncryption?: string;
        encryptionInTransit?: { required?: boolean };
      };
      nfs?: { encryptionInTransit?: { required?: boolean } };
    };
  };
  sku?: {
    name:
      | "Standard_LRS"
      | "Standard_GRS"
      | "Standard_RAGRS"
      | "Standard_ZRS"
      | "Premium_LRS"
      | "Premium_ZRS"
      | "Standard_GZRS"
      | "Standard_RAGZRS"
      | "StandardV2_LRS"
      | "StandardV2_GRS"
      | "StandardV2_ZRS"
      | "StandardV2_GZRS"
      | "PremiumV2_LRS"
      | "PremiumV2_ZRS";
    tier?: "Standard" | "Premium";
  };
}
export const FileServicesSetServicePropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        cors: Schema.optional(
          Schema.Struct({
            corsRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  allowedOrigins: Schema.Array(Schema.String),
                  allowedMethods: Schema.Array(
                    Schema.Literals([
                      "DELETE",
                      "GET",
                      "HEAD",
                      "MERGE",
                      "POST",
                      "OPTIONS",
                      "PUT",
                      "PATCH",
                      "CONNECT",
                      "TRACE",
                    ]),
                  ),
                  maxAgeInSeconds: Schema.Number,
                  exposedHeaders: Schema.Array(Schema.String),
                  allowedHeaders: Schema.Array(Schema.String),
                }),
              ),
            ),
          }),
        ),
        shareDeleteRetentionPolicy: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            days: Schema.optional(Schema.Number),
            allowPermanentDelete: Schema.optional(Schema.Boolean),
          }),
        ),
        protocolSettings: Schema.optional(
          Schema.Struct({
            smb: Schema.optional(
              Schema.Struct({
                multichannel: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                  }),
                ),
                versions: Schema.optional(Schema.String),
                authenticationMethods: Schema.optional(Schema.String),
                kerberosTicketEncryption: Schema.optional(Schema.String),
                channelEncryption: Schema.optional(Schema.String),
                encryptionInTransit: Schema.optional(
                  Schema.Struct({
                    required: Schema.optional(Schema.Boolean),
                  }),
                ),
              }),
            ),
            nfs: Schema.optional(
              Schema.Struct({
                encryptionInTransit: Schema.optional(
                  Schema.Struct({
                    required: Schema.optional(Schema.Boolean),
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals([
          "Standard_LRS",
          "Standard_GRS",
          "Standard_RAGRS",
          "Standard_ZRS",
          "Premium_LRS",
          "Premium_ZRS",
          "Standard_GZRS",
          "Standard_RAGZRS",
          "StandardV2_LRS",
          "StandardV2_GRS",
          "StandardV2_ZRS",
          "StandardV2_GZRS",
          "PremiumV2_LRS",
          "PremiumV2_ZRS",
        ]),
        tier: Schema.optional(Schema.Literals(["Standard", "Premium"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<FileServicesSetServicePropertiesInput>;

// Output Schema
export interface FileServicesSetServicePropertiesOutput {
  id?: string;
  name?: string;
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
export const FileServicesSetServicePropertiesOutput =
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
  }) as unknown as Schema.Codec<FileServicesSetServicePropertiesOutput>;

// The operation
/**
 * Sets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const FileServicesSetServiceProperties =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FileServicesSetServicePropertiesInput,
    outputSchema: FileServicesSetServicePropertiesOutput,
  }));
// Input Schema
export interface FileSharesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  $expand?: string;
  properties?: {
    lastModifiedTime?: string;
    metadata?: Record<string, string>;
    shareQuota?: number;
    provisionedIops?: number;
    provisionedBandwidthMibps?: number;
    includedBurstIops?: number;
    maxBurstCreditsForIops?: number;
    nextAllowedQuotaDowngradeTime?: string;
    nextAllowedProvisionedIopsDowngradeTime?: string;
    nextAllowedProvisionedBandwidthDowngradeTime?: string;
    enabledProtocols?: "SMB" | "NFS";
    rootSquash?: "NoRootSquash" | "RootSquash" | "AllSquash";
    version?: string;
    deleted?: boolean;
    deletedTime?: string;
    remainingRetentionDays?: number;
    accessTier?: "TransactionOptimized" | "Hot" | "Cool" | "Premium";
    accessTierChangeTime?: string;
    accessTierStatus?: string;
    shareUsageBytes?: number;
    leaseStatus?: "Locked" | "Unlocked";
    leaseState?: "Available" | "Leased" | "Expired" | "Breaking" | "Broken";
    leaseDuration?: "Infinite" | "Fixed";
    signedIdentifiers?: {
      id?: string;
      accessPolicy?: {
        startTime?: string;
        expiryTime?: string;
        permission?: string;
      };
    }[];
    snapshotTime?: string;
    fileSharePaidBursting?: {
      paidBurstingEnabled?: boolean;
      paidBurstingMaxIops?: number;
      paidBurstingMaxBandwidthMibps?: number;
    };
  };
  etag?: string;
}
export const FileSharesCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      lastModifiedTime: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      shareQuota: Schema.optional(Schema.Number),
      provisionedIops: Schema.optional(Schema.Number),
      provisionedBandwidthMibps: Schema.optional(Schema.Number),
      includedBurstIops: Schema.optional(Schema.Number),
      maxBurstCreditsForIops: Schema.optional(Schema.Number),
      nextAllowedQuotaDowngradeTime: Schema.optional(Schema.String),
      nextAllowedProvisionedIopsDowngradeTime: Schema.optional(Schema.String),
      nextAllowedProvisionedBandwidthDowngradeTime: Schema.optional(
        Schema.String,
      ),
      enabledProtocols: Schema.optional(Schema.Literals(["SMB", "NFS"])),
      rootSquash: Schema.optional(
        Schema.Literals(["NoRootSquash", "RootSquash", "AllSquash"]),
      ),
      version: Schema.optional(Schema.String),
      deleted: Schema.optional(Schema.Boolean),
      deletedTime: Schema.optional(Schema.String),
      remainingRetentionDays: Schema.optional(Schema.Number),
      accessTier: Schema.optional(
        Schema.Literals(["TransactionOptimized", "Hot", "Cool", "Premium"]),
      ),
      accessTierChangeTime: Schema.optional(Schema.String),
      accessTierStatus: Schema.optional(Schema.String),
      shareUsageBytes: Schema.optional(Schema.Number),
      leaseStatus: Schema.optional(Schema.Literals(["Locked", "Unlocked"])),
      leaseState: Schema.optional(
        Schema.Literals([
          "Available",
          "Leased",
          "Expired",
          "Breaking",
          "Broken",
        ]),
      ),
      leaseDuration: Schema.optional(Schema.Literals(["Infinite", "Fixed"])),
      signedIdentifiers: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            accessPolicy: Schema.optional(
              Schema.Struct({
                startTime: Schema.optional(Schema.String),
                expiryTime: Schema.optional(Schema.String),
                permission: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      snapshotTime: Schema.optional(Schema.String),
      fileSharePaidBursting: Schema.optional(
        Schema.Struct({
          paidBurstingEnabled: Schema.optional(Schema.Boolean),
          paidBurstingMaxIops: Schema.optional(Schema.Number),
          paidBurstingMaxBandwidthMibps: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
  etag: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<FileSharesCreateInput>;

// Output Schema
export interface FileSharesCreateOutput {
  id?: string;
  name?: string;
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
export const FileSharesCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<FileSharesCreateOutput>;

// The operation
/**
 * Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param $expand - Optional, used to expand the properties within share's properties. Valid values are: snapshots. Should be passed as a string with delimiter ','
 */
export const FileSharesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesCreateInput,
  outputSchema: FileSharesCreateOutput,
}));
// Input Schema
export interface FileSharesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  $include?: string;
}
export const FileSharesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  $include: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<FileSharesDeleteInput>;

// Output Schema
export type FileSharesDeleteOutput = void;
export const FileSharesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FileSharesDeleteOutput>;

// The operation
/**
 * Deletes specified share under its account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param x-ms-snapshot - Optional, used to delete a snapshot.
 * @param $include - Optional. Valid values are: snapshots, leased-snapshots, none. The default value is snapshots. For 'snapshots', the file share is deleted including all of its file share snapshots. If the file share contains leased-snapshots, the deletion fails. For 'leased-snapshots', the file share is deleted included all of its file share snapshots (leased/unleased). For 'none', the file share is deleted if it has no share snapshots. If the file share contains any snapshots (leased or unleased), the deletion fails.
 */
export const FileSharesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesDeleteInput,
  outputSchema: FileSharesDeleteOutput,
}));
// Input Schema
export interface FileSharesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  $expand?: string;
}
export const FileSharesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
    apiVersion: "2026-04-01",
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
 * Gets properties of a specified share.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param $expand - Optional, used to expand the properties within share's properties. Valid values are: stats. Should be passed as a string with delimiter ','.
 * @param x-ms-snapshot - Optional, used to retrieve properties of a snapshot.
 */
export const FileSharesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesGetInput,
  outputSchema: FileSharesGetOutput,
}));
// Input Schema
export interface FileSharesLeaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  action: "Acquire" | "Renew" | "Change" | "Release" | "Break";
  leaseId?: string;
  breakPeriod?: number;
  leaseDuration?: number;
  proposedLeaseId?: string;
}
export const FileSharesLeaseInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  action: Schema.Literals(["Acquire", "Renew", "Change", "Release", "Break"]),
  leaseId: Schema.optional(Schema.String),
  breakPeriod: Schema.optional(Schema.Number),
  leaseDuration: Schema.optional(Schema.Number),
  proposedLeaseId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}/lease",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<FileSharesLeaseInput>;

// Output Schema
export interface FileSharesLeaseOutput {
  leaseId?: string;
  leaseTimeSeconds?: string;
}
export const FileSharesLeaseOutput = /*@__PURE__*/ Schema.Struct({
  leaseId: Schema.optional(Schema.String),
  leaseTimeSeconds: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<FileSharesLeaseOutput>;

// The operation
/**
 * The Lease Share operation establishes and manages a lock on a share for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 * @param x-ms-snapshot - Optional. Specify the snapshot time to lease a snapshot.
 */
export const FileSharesLease = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesLeaseInput,
  outputSchema: FileSharesLeaseOutput,
}));
// Input Schema
export interface FileSharesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $maxpagesize?: string;
  $filter?: string;
  $expand?: string;
}
export const FileSharesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  $maxpagesize: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<FileSharesListInput>;

// Output Schema
export interface FileSharesListOutput {
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
export const FileSharesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FileSharesListOutput>;

// The operation
/**
 * Lists all shares.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional. Specified maximum number of shares that can be included in the list.
 * @param $filter - Optional. When specified, only share names starting with the filter will be listed.
 * @param $expand - Optional, used to expand the properties within share's properties. Valid values are: deleted, snapshots. Should be passed as a string with delimiter ','
 */
export const FileSharesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesListInput,
  outputSchema: FileSharesListOutput,
}));
// Input Schema
export interface FileSharesRestoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  deletedShareName: string;
  deletedShareVersion: string;
}
export const FileSharesRestoreInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  deletedShareName: Schema.String,
  deletedShareVersion: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}/restore",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<FileSharesRestoreInput>;

// Output Schema
export type FileSharesRestoreOutput = void;
export const FileSharesRestoreOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FileSharesRestoreOutput>;

// The operation
/**
 * Restore a file share within a valid retention days if share soft delete is enabled
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const FileSharesRestore = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesRestoreInput,
  outputSchema: FileSharesRestoreOutput,
}));
// Input Schema
export interface FileSharesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  properties?: {
    lastModifiedTime?: string;
    metadata?: Record<string, string>;
    shareQuota?: number;
    provisionedIops?: number;
    provisionedBandwidthMibps?: number;
    includedBurstIops?: number;
    maxBurstCreditsForIops?: number;
    nextAllowedQuotaDowngradeTime?: string;
    nextAllowedProvisionedIopsDowngradeTime?: string;
    nextAllowedProvisionedBandwidthDowngradeTime?: string;
    enabledProtocols?: "SMB" | "NFS";
    rootSquash?: "NoRootSquash" | "RootSquash" | "AllSquash";
    version?: string;
    deleted?: boolean;
    deletedTime?: string;
    remainingRetentionDays?: number;
    accessTier?: "TransactionOptimized" | "Hot" | "Cool" | "Premium";
    accessTierChangeTime?: string;
    accessTierStatus?: string;
    shareUsageBytes?: number;
    leaseStatus?: "Locked" | "Unlocked";
    leaseState?: "Available" | "Leased" | "Expired" | "Breaking" | "Broken";
    leaseDuration?: "Infinite" | "Fixed";
    signedIdentifiers?: {
      id?: string;
      accessPolicy?: {
        startTime?: string;
        expiryTime?: string;
        permission?: string;
      };
    }[];
    snapshotTime?: string;
    fileSharePaidBursting?: {
      paidBurstingEnabled?: boolean;
      paidBurstingMaxIops?: number;
      paidBurstingMaxBandwidthMibps?: number;
    };
  };
  etag?: string;
}
export const FileSharesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      lastModifiedTime: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      shareQuota: Schema.optional(Schema.Number),
      provisionedIops: Schema.optional(Schema.Number),
      provisionedBandwidthMibps: Schema.optional(Schema.Number),
      includedBurstIops: Schema.optional(Schema.Number),
      maxBurstCreditsForIops: Schema.optional(Schema.Number),
      nextAllowedQuotaDowngradeTime: Schema.optional(Schema.String),
      nextAllowedProvisionedIopsDowngradeTime: Schema.optional(Schema.String),
      nextAllowedProvisionedBandwidthDowngradeTime: Schema.optional(
        Schema.String,
      ),
      enabledProtocols: Schema.optional(Schema.Literals(["SMB", "NFS"])),
      rootSquash: Schema.optional(
        Schema.Literals(["NoRootSquash", "RootSquash", "AllSquash"]),
      ),
      version: Schema.optional(Schema.String),
      deleted: Schema.optional(Schema.Boolean),
      deletedTime: Schema.optional(Schema.String),
      remainingRetentionDays: Schema.optional(Schema.Number),
      accessTier: Schema.optional(
        Schema.Literals(["TransactionOptimized", "Hot", "Cool", "Premium"]),
      ),
      accessTierChangeTime: Schema.optional(Schema.String),
      accessTierStatus: Schema.optional(Schema.String),
      shareUsageBytes: Schema.optional(Schema.Number),
      leaseStatus: Schema.optional(Schema.Literals(["Locked", "Unlocked"])),
      leaseState: Schema.optional(
        Schema.Literals([
          "Available",
          "Leased",
          "Expired",
          "Breaking",
          "Broken",
        ]),
      ),
      leaseDuration: Schema.optional(Schema.Literals(["Infinite", "Fixed"])),
      signedIdentifiers: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            accessPolicy: Schema.optional(
              Schema.Struct({
                startTime: Schema.optional(Schema.String),
                expiryTime: Schema.optional(Schema.String),
                permission: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      snapshotTime: Schema.optional(Schema.String),
      fileSharePaidBursting: Schema.optional(
        Schema.Struct({
          paidBurstingEnabled: Schema.optional(Schema.Boolean),
          paidBurstingMaxIops: Schema.optional(Schema.Number),
          paidBurstingMaxBandwidthMibps: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
  etag: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
    apiVersion: "2026-04-01",
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
 * Updates share properties as specified in request body. Properties not mentioned in the request will not be changed. Update fails if the specified share does not already exist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param shareName - The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
 */
export const FileSharesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FileSharesUpdateInput,
  outputSchema: FileSharesUpdateOutput,
}));
// Input Schema
export interface LocalUsersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  username: string;
  properties?: {
    permissionScopes?: {
      permissions: string;
      service: string;
      resourceName: string;
    }[];
    homeDirectory?: string;
    sshAuthorizedKeys?: { description?: string; key?: string }[];
    sid?: string;
    hasSharedKey?: boolean;
    hasSshKey?: boolean;
    hasSshPassword?: boolean;
    userId?: number;
    groupId?: number;
    allowAclAuthorization?: boolean;
    extendedGroups?: number[];
    isNFSv3Enabled?: boolean;
  };
}
export const LocalUsersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        permissionScopes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              permissions: Schema.String,
              service: Schema.String,
              resourceName: Schema.String,
            }),
          ),
        ),
        homeDirectory: Schema.optional(Schema.String),
        sshAuthorizedKeys: Schema.optional(
          Schema.Array(
            Schema.Struct({
              description: Schema.optional(Schema.String),
              key: Schema.optional(Schema.String),
            }),
          ),
        ),
        sid: Schema.optional(Schema.String),
        hasSharedKey: Schema.optional(Schema.Boolean),
        hasSshKey: Schema.optional(Schema.Boolean),
        hasSshPassword: Schema.optional(Schema.Boolean),
        userId: Schema.optional(Schema.Number),
        groupId: Schema.optional(Schema.Number),
        allowAclAuthorization: Schema.optional(Schema.Boolean),
        extendedGroups: Schema.optional(Schema.Array(Schema.Number)),
        isNFSv3Enabled: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<LocalUsersCreateOrUpdateInput>;

// Output Schema
export interface LocalUsersCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const LocalUsersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<LocalUsersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the properties of a local user associated with the storage account. Properties for NFSv3 enablement and extended groups cannot be set with other properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param username - The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
 */
export const LocalUsersCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocalUsersCreateOrUpdateInput,
  outputSchema: LocalUsersCreateOrUpdateOutput,
}));
// Input Schema
export interface LocalUsersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  username: string;
}
export const LocalUsersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  username: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<LocalUsersDeleteInput>;

// Output Schema
export type LocalUsersDeleteOutput = void;
export const LocalUsersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LocalUsersDeleteOutput>;

// The operation
/**
 * Deletes the local user associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param username - The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
 */
export const LocalUsersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocalUsersDeleteInput,
  outputSchema: LocalUsersDeleteOutput,
}));
// Input Schema
export interface LocalUsersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  username: string;
}
export const LocalUsersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  username: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<LocalUsersGetInput>;

// Output Schema
export interface LocalUsersGetOutput {
  id?: string;
  name?: string;
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
export const LocalUsersGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<LocalUsersGetOutput>;

// The operation
/**
 * Get the local user of the storage account by username.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param username - The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
 */
export const LocalUsersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocalUsersGetInput,
  outputSchema: LocalUsersGetOutput,
}));
// Input Schema
export interface LocalUsersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $maxpagesize?: number;
  $filter?: string;
  $include?: "nfsv3";
}
export const LocalUsersListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  $maxpagesize: Schema.optional(Schema.Number),
  $filter: Schema.optional(Schema.String),
  $include: Schema.optional(Schema.Literals(["nfsv3"])),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<LocalUsersListInput>;

// Output Schema
export interface LocalUsersListOutput {
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
export const LocalUsersListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<LocalUsersListOutput>;

// The operation
/**
 * List the local users associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of local users that will be included in the list response.
 * @param $filter - Optional. When specified, only local user names starting with the filter will be listed.
 * @param $include - Optional, when specified, will list local users enabled for the specific protocol. Lists all users by default.
 */
export const LocalUsersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocalUsersListInput,
  outputSchema: LocalUsersListOutput,
}));
// Input Schema
export interface LocalUsersListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  username: string;
}
export const LocalUsersListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}/listKeys",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<LocalUsersListKeysInput>;

// Output Schema
export interface LocalUsersListKeysOutput {
  sshAuthorizedKeys?: { description?: string; key?: string }[];
  sharedKey?: string;
}
export const LocalUsersListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    sshAuthorizedKeys: Schema.optional(
      Schema.Array(
        Schema.Struct({
          description: Schema.optional(Schema.String),
          key: Schema.optional(Schema.String),
        }),
      ),
    ),
    sharedKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LocalUsersListKeysOutput>;

// The operation
/**
 * List SSH authorized keys and shared key of the local user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param username - The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
 */
export const LocalUsersListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocalUsersListKeysInput,
  outputSchema: LocalUsersListKeysOutput,
}));
// Input Schema
export interface LocalUsersRegeneratePasswordInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  username: string;
}
export const LocalUsersRegeneratePasswordInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}/regeneratePassword",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<LocalUsersRegeneratePasswordInput>;

// Output Schema
export interface LocalUsersRegeneratePasswordOutput {
  sshPassword?: Redacted.Redacted<string>;
}
export const LocalUsersRegeneratePasswordOutput =
  /*@__PURE__*/ Schema.Struct({
    sshPassword: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<LocalUsersRegeneratePasswordOutput>;

// The operation
/**
 * Regenerate the local user SSH password.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param username - The name of local user. The username must contain lowercase letters and numbers only. It must be unique only within the storage account.
 */
export const LocalUsersRegeneratePassword =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LocalUsersRegeneratePasswordInput,
    outputSchema: LocalUsersRegeneratePasswordOutput,
  }));
// Input Schema
export interface ManagementPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managementPolicyName: "default";
  properties?: {
    lastModifiedTime?: string;
    policy: {
      rules: {
        enabled?: boolean;
        name: string;
        type: "Lifecycle";
        definition: {
          actions: {
            baseBlob?: {
              tierToCool?: {
                daysAfterModificationGreaterThan?: number;
                daysAfterLastAccessTimeGreaterThan?: number;
                daysAfterLastTierChangeGreaterThan?: number;
                daysAfterCreationGreaterThan?: number;
              };
              tierToArchive?: {
                daysAfterModificationGreaterThan?: number;
                daysAfterLastAccessTimeGreaterThan?: number;
                daysAfterLastTierChangeGreaterThan?: number;
                daysAfterCreationGreaterThan?: number;
              };
              tierToCold?: {
                daysAfterModificationGreaterThan?: number;
                daysAfterLastAccessTimeGreaterThan?: number;
                daysAfterLastTierChangeGreaterThan?: number;
                daysAfterCreationGreaterThan?: number;
              };
              tierToHot?: {
                daysAfterModificationGreaterThan?: number;
                daysAfterLastAccessTimeGreaterThan?: number;
                daysAfterLastTierChangeGreaterThan?: number;
                daysAfterCreationGreaterThan?: number;
              };
              delete?: {
                daysAfterModificationGreaterThan?: number;
                daysAfterLastAccessTimeGreaterThan?: number;
                daysAfterLastTierChangeGreaterThan?: number;
                daysAfterCreationGreaterThan?: number;
              };
              enableAutoTierToHotFromCool?: boolean;
            };
            snapshot?: {
              tierToCool?: {
                daysAfterCreationGreaterThan: number;
                daysAfterLastTierChangeGreaterThan?: number;
              };
              tierToArchive?: {
                daysAfterCreationGreaterThan: number;
                daysAfterLastTierChangeGreaterThan?: number;
              };
              tierToCold?: {
                daysAfterCreationGreaterThan: number;
                daysAfterLastTierChangeGreaterThan?: number;
              };
              tierToHot?: {
                daysAfterCreationGreaterThan: number;
                daysAfterLastTierChangeGreaterThan?: number;
              };
              delete?: {
                daysAfterCreationGreaterThan: number;
                daysAfterLastTierChangeGreaterThan?: number;
              };
            };
            version?: {
              tierToCool?: {
                daysAfterCreationGreaterThan: number;
                daysAfterLastTierChangeGreaterThan?: number;
              };
              tierToArchive?: {
                daysAfterCreationGreaterThan: number;
                daysAfterLastTierChangeGreaterThan?: number;
              };
              tierToCold?: {
                daysAfterCreationGreaterThan: number;
                daysAfterLastTierChangeGreaterThan?: number;
              };
              tierToHot?: {
                daysAfterCreationGreaterThan: number;
                daysAfterLastTierChangeGreaterThan?: number;
              };
              delete?: {
                daysAfterCreationGreaterThan: number;
                daysAfterLastTierChangeGreaterThan?: number;
              };
            };
          };
          filters?: {
            prefixMatch?: string[];
            blobTypes: string[];
            blobIndexMatch?: { name: string; op: string; value: string }[];
          };
        };
      }[];
    };
  };
}
export const ManagementPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managementPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        lastModifiedTime: Schema.optional(Schema.String),
        policy: Schema.Struct({
          rules: Schema.Array(
            Schema.Struct({
              enabled: Schema.optional(Schema.Boolean),
              name: Schema.String,
              type: Schema.Literals(["Lifecycle"]),
              definition: Schema.Struct({
                actions: Schema.Struct({
                  baseBlob: Schema.optional(
                    Schema.Struct({
                      tierToCool: Schema.optional(
                        Schema.Struct({
                          daysAfterModificationGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterLastAccessTimeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterCreationGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      tierToArchive: Schema.optional(
                        Schema.Struct({
                          daysAfterModificationGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterLastAccessTimeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterCreationGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      tierToCold: Schema.optional(
                        Schema.Struct({
                          daysAfterModificationGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterLastAccessTimeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterCreationGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      tierToHot: Schema.optional(
                        Schema.Struct({
                          daysAfterModificationGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterLastAccessTimeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterCreationGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      delete: Schema.optional(
                        Schema.Struct({
                          daysAfterModificationGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterLastAccessTimeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                          daysAfterCreationGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      enableAutoTierToHotFromCool: Schema.optional(
                        Schema.Boolean,
                      ),
                    }),
                  ),
                  snapshot: Schema.optional(
                    Schema.Struct({
                      tierToCool: Schema.optional(
                        Schema.Struct({
                          daysAfterCreationGreaterThan: Schema.Number,
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      tierToArchive: Schema.optional(
                        Schema.Struct({
                          daysAfterCreationGreaterThan: Schema.Number,
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      tierToCold: Schema.optional(
                        Schema.Struct({
                          daysAfterCreationGreaterThan: Schema.Number,
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      tierToHot: Schema.optional(
                        Schema.Struct({
                          daysAfterCreationGreaterThan: Schema.Number,
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      delete: Schema.optional(
                        Schema.Struct({
                          daysAfterCreationGreaterThan: Schema.Number,
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                    }),
                  ),
                  version: Schema.optional(
                    Schema.Struct({
                      tierToCool: Schema.optional(
                        Schema.Struct({
                          daysAfterCreationGreaterThan: Schema.Number,
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      tierToArchive: Schema.optional(
                        Schema.Struct({
                          daysAfterCreationGreaterThan: Schema.Number,
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      tierToCold: Schema.optional(
                        Schema.Struct({
                          daysAfterCreationGreaterThan: Schema.Number,
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      tierToHot: Schema.optional(
                        Schema.Struct({
                          daysAfterCreationGreaterThan: Schema.Number,
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      delete: Schema.optional(
                        Schema.Struct({
                          daysAfterCreationGreaterThan: Schema.Number,
                          daysAfterLastTierChangeGreaterThan: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
                filters: Schema.optional(
                  Schema.Struct({
                    prefixMatch: Schema.optional(Schema.Array(Schema.String)),
                    blobTypes: Schema.Array(Schema.String),
                    blobIndexMatch: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.String,
                          op: Schema.String,
                          value: Schema.String,
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            }),
          ),
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementPoliciesCreateOrUpdateInput>;

// Output Schema
export interface ManagementPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ManagementPoliciesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagementPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Sets the managementpolicy to the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param managementPolicyName - The name of the Storage Account Management Policy. It should always be 'default'
 */
export const ManagementPoliciesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagementPoliciesCreateOrUpdateInput,
    outputSchema: ManagementPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagementPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managementPolicyName: "default";
}
export const ManagementPoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managementPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementPoliciesDeleteInput>;

// Output Schema
export type ManagementPoliciesDeleteOutput = void;
export const ManagementPoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagementPoliciesDeleteOutput>;

// The operation
/**
 * Deletes the managementpolicy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param managementPolicyName - The name of the Storage Account Management Policy. It should always be 'default'
 */
export const ManagementPoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagementPoliciesDeleteInput,
  outputSchema: ManagementPoliciesDeleteOutput,
}));
// Input Schema
export interface ManagementPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  managementPolicyName: "default";
}
export const ManagementPoliciesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managementPolicyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementPoliciesGetInput>;

// Output Schema
export interface ManagementPoliciesGetOutput {
  id?: string;
  name?: string;
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
export const ManagementPoliciesGetOutput =
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
  }) as unknown as Schema.Codec<ManagementPoliciesGetOutput>;

// The operation
/**
 * Gets the managementpolicy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param managementPolicyName - The name of the Storage Account Management Policy. It should always be 'default'
 */
export const ManagementPoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagementPoliciesGetInput,
  outputSchema: ManagementPoliciesGetOutput,
}));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  networkSecurityPerimeterConfigurationName: string;
}
export const NetworkSecurityPerimeterConfigurationsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    networkSecurityPerimeterConfigurationName: Schema.String.pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/networkSecurityPerimeterConfigurations/{networkSecurityPerimeterConfigurationName}",
      apiVersion: "2026-04-01",
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetOutput>;

// The operation
/**
 * Gets effective NetworkSecurityPerimeterConfiguration for association
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param networkSecurityPerimeterConfigurationName - The name for Network Security Perimeter configuration
 */
export const NetworkSecurityPerimeterConfigurationsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsGetInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsGetOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const NetworkSecurityPerimeterConfigurationsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsListInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsListOutput {
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
export const NetworkSecurityPerimeterConfigurationsListOutput =
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsListOutput>;

// The operation
/**
 * Gets list of effective NetworkSecurityPerimeterConfiguration for storage account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const NetworkSecurityPerimeterConfigurationsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsListInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsListOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsReconcileInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  networkSecurityPerimeterConfigurationName: string;
}
export const NetworkSecurityPerimeterConfigurationsReconcileInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    networkSecurityPerimeterConfigurationName: Schema.String.pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/networkSecurityPerimeterConfigurations/{networkSecurityPerimeterConfigurationName}/reconcile",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsReconcileInput>;

// Output Schema
export type NetworkSecurityPerimeterConfigurationsReconcileOutput = void;
export const NetworkSecurityPerimeterConfigurationsReconcileOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsReconcileOutput>;

// The operation
/**
 * Refreshes any information about the association.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param networkSecurityPerimeterConfigurationName - The name for Network Security Perimeter configuration
 */
export const NetworkSecurityPerimeterConfigurationsReconcile =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsReconcileInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsReconcileOutput,
  }));
// Input Schema
export interface ObjectReplicationPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  objectReplicationPolicyId: string;
  properties?: {
    policyId?: string;
    enabledTime?: string;
    sourceAccount: string;
    destinationAccount: string;
    rules?: {
      ruleId?: string;
      sourceContainer: string;
      destinationContainer: string;
      filters?: { prefixMatch?: string[]; minCreationTime?: string };
    }[];
    metrics?: { enabled?: boolean };
    priorityReplication?: { enabled?: boolean };
    tagsReplication?: { enabled?: boolean };
  };
}
export const ObjectReplicationPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    objectReplicationPolicyId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policyId: Schema.optional(Schema.String),
        enabledTime: Schema.optional(Schema.String),
        sourceAccount: Schema.String,
        destinationAccount: Schema.String,
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ruleId: Schema.optional(Schema.String),
              sourceContainer: Schema.String,
              destinationContainer: Schema.String,
              filters: Schema.optional(
                Schema.Struct({
                  prefixMatch: Schema.optional(Schema.Array(Schema.String)),
                  minCreationTime: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
        metrics: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        priorityReplication: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        tagsReplication: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies/{objectReplicationPolicyId}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<ObjectReplicationPoliciesCreateOrUpdateInput>;

// Output Schema
export interface ObjectReplicationPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ObjectReplicationPoliciesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ObjectReplicationPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the object replication policy of the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param objectReplicationPolicyId - For the destination account, provide the value 'default'. Configure the policy on the destination account first. For the source account, provide the value of the policy ID that is returned when you download the policy that was defined on the destination account. The policy is downloaded as a JSON file.
 */
export const ObjectReplicationPoliciesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ObjectReplicationPoliciesCreateOrUpdateInput,
    outputSchema: ObjectReplicationPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ObjectReplicationPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  objectReplicationPolicyId: string;
}
export const ObjectReplicationPoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    objectReplicationPolicyId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies/{objectReplicationPolicyId}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<ObjectReplicationPoliciesDeleteInput>;

// Output Schema
export type ObjectReplicationPoliciesDeleteOutput = void;
export const ObjectReplicationPoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ObjectReplicationPoliciesDeleteOutput>;

// The operation
/**
 * Deletes the object replication policy associated with the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param objectReplicationPolicyId - For the destination account, provide the value 'default'. Configure the policy on the destination account first. For the source account, provide the value of the policy ID that is returned when you download the policy that was defined on the destination account. The policy is downloaded as a JSON file.
 */
export const ObjectReplicationPoliciesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ObjectReplicationPoliciesDeleteInput,
    outputSchema: ObjectReplicationPoliciesDeleteOutput,
  }));
// Input Schema
export interface ObjectReplicationPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  objectReplicationPolicyId: string;
}
export const ObjectReplicationPoliciesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    objectReplicationPolicyId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies/{objectReplicationPolicyId}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<ObjectReplicationPoliciesGetInput>;

// Output Schema
export interface ObjectReplicationPoliciesGetOutput {
  id?: string;
  name?: string;
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
export const ObjectReplicationPoliciesGetOutput =
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
  }) as unknown as Schema.Codec<ObjectReplicationPoliciesGetOutput>;

// The operation
/**
 * Get the object replication policy of the storage account by policy ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param objectReplicationPolicyId - For the destination account, provide the value 'default'. Configure the policy on the destination account first. For the source account, provide the value of the policy ID that is returned when you download the policy that was defined on the destination account. The policy is downloaded as a JSON file.
 */
export const ObjectReplicationPoliciesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ObjectReplicationPoliciesGetInput,
    outputSchema: ObjectReplicationPoliciesGetOutput,
  }));
// Input Schema
export interface ObjectReplicationPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const ObjectReplicationPoliciesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<ObjectReplicationPoliciesListInput>;

// Output Schema
export interface ObjectReplicationPoliciesListOutput {
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
export const ObjectReplicationPoliciesListOutput =
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
  }) as unknown as Schema.Codec<ObjectReplicationPoliciesListOutput>;

// The operation
/**
 * List the object replication policies associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const ObjectReplicationPoliciesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ObjectReplicationPoliciesListInput,
    outputSchema: ObjectReplicationPoliciesListOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Storage/operations",
    apiVersion: "2026-04-01",
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
    origin?: string;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          dimensions?: { name?: string; displayName?: string }[];
          aggregationType?: string;
          fillGapWithZero?: boolean;
          category?: string;
          resourceIdDimensionNameOverride?: string;
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      aggregationType: Schema.optional(Schema.String),
                      fillGapWithZero: Schema.optional(Schema.Boolean),
                      category: Schema.optional(Schema.String),
                      resourceIdDimensionNameOverride: Schema.optional(
                        Schema.String,
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
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Storage Rest API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
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
  accountName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-04-01",
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
 * Gets the specified private endpoint connection associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
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
  accountName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
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
export const PrivateEndpointConnectionsListOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List all the private endpoint connections associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
}
export const PrivateEndpointConnectionsPutInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
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
          actionRequired: Schema.optional(Schema.String),
        }),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsPutInput>;

// Output Schema
export interface PrivateEndpointConnectionsPutOutput {
  id?: string;
  name?: string;
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
export const PrivateEndpointConnectionsPutOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsPutOutput>;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsPut =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsPutInput,
    outputSchema: PrivateEndpointConnectionsPutOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListByStorageAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const PrivateLinkResourcesListByStorageAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateLinkResources",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByStorageAccountInput>;

// Output Schema
export interface PrivateLinkResourcesListByStorageAccountOutput {
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
export const PrivateLinkResourcesListByStorageAccountOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByStorageAccountOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const PrivateLinkResourcesListByStorageAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByStorageAccountInput,
    outputSchema: PrivateLinkResourcesListByStorageAccountOutput,
  }));
// Input Schema
export interface QueueCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  queueName: string;
  properties?: {
    metadata?: Record<string, string>;
    approximateMessageCount?: number;
  };
}
export const QueueCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      approximateMessageCount: Schema.optional(Schema.Number),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<QueueCreateInput>;

// Output Schema
export interface QueueCreateOutput {
  id?: string;
  name?: string;
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
export const QueueCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<QueueCreateOutput>;

// The operation
/**
 * Creates a new queue with the specified queue name, under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param queueName - A queue name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
 */
export const QueueCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueueCreateInput,
  outputSchema: QueueCreateOutput,
}));
// Input Schema
export interface QueueDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  queueName: string;
}
export const QueueDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<QueueDeleteInput>;

// Output Schema
export type QueueDeleteOutput = void;
export const QueueDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<QueueDeleteOutput>;

// The operation
/**
 * Deletes the queue with the specified queue name, under the specified account if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param queueName - A queue name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
 */
export const QueueDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueueDeleteInput,
  outputSchema: QueueDeleteOutput,
}));
// Input Schema
export interface QueueGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  queueName: string;
}
export const QueueGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<QueueGetInput>;

// Output Schema
export interface QueueGetOutput {
  id?: string;
  name?: string;
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
export const QueueGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<QueueGetOutput>;

// The operation
/**
 * Gets the queue with the specified queue name, under the specified account if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param queueName - A queue name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
 */
export const QueueGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueueGetInput,
  outputSchema: QueueGetOutput,
}));
// Input Schema
export interface QueueListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $maxpagesize?: string;
  $filter?: string;
}
export const QueueListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  $maxpagesize: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<QueueListInput>;

// Output Schema
export interface QueueListOutput {
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
export const QueueListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<QueueListOutput>;

// The operation
/**
 * Gets a list of all the queues under the specified storage account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, a maximum number of queues that should be included in a list queue response
 * @param $filter - Optional, When specified, only the queues with a name starting with the given filter will be listed.
 */
export const QueueList = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueueListInput,
  outputSchema: QueueListOutput,
}));
// Input Schema
export interface QueueServicesGetServicePropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const QueueServicesGetServicePropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<QueueServicesGetServicePropertiesInput>;

// Output Schema
export interface QueueServicesGetServicePropertiesOutput {
  id?: string;
  name?: string;
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
export const QueueServicesGetServicePropertiesOutput =
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
  }) as unknown as Schema.Codec<QueueServicesGetServicePropertiesOutput>;

// The operation
/**
 * Gets the properties of a storage account’s Queue service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const QueueServicesGetServiceProperties =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: QueueServicesGetServicePropertiesInput,
    outputSchema: QueueServicesGetServicePropertiesOutput,
  }));
// Input Schema
export interface QueueServicesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const QueueServicesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<QueueServicesListInput>;

// Output Schema
export interface QueueServicesListOutput {
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
export const QueueServicesListOutput =
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
  }) as unknown as Schema.Codec<QueueServicesListOutput>;

// The operation
/**
 * List all queue services for the storage account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const QueueServicesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueueServicesListInput,
  outputSchema: QueueServicesListOutput,
}));
// Input Schema
export interface QueueServicesSetServicePropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    cors?: {
      corsRules?: {
        allowedOrigins: string[];
        allowedMethods: (
          | "DELETE"
          | "GET"
          | "HEAD"
          | "MERGE"
          | "POST"
          | "OPTIONS"
          | "PUT"
          | "PATCH"
          | "CONNECT"
          | "TRACE"
        )[];
        maxAgeInSeconds: number;
        exposedHeaders: string[];
        allowedHeaders: string[];
      }[];
    };
  };
}
export const QueueServicesSetServicePropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        cors: Schema.optional(
          Schema.Struct({
            corsRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  allowedOrigins: Schema.Array(Schema.String),
                  allowedMethods: Schema.Array(
                    Schema.Literals([
                      "DELETE",
                      "GET",
                      "HEAD",
                      "MERGE",
                      "POST",
                      "OPTIONS",
                      "PUT",
                      "PATCH",
                      "CONNECT",
                      "TRACE",
                    ]),
                  ),
                  maxAgeInSeconds: Schema.Number,
                  exposedHeaders: Schema.Array(Schema.String),
                  allowedHeaders: Schema.Array(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<QueueServicesSetServicePropertiesInput>;

// Output Schema
export interface QueueServicesSetServicePropertiesOutput {
  id?: string;
  name?: string;
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
export const QueueServicesSetServicePropertiesOutput =
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
  }) as unknown as Schema.Codec<QueueServicesSetServicePropertiesOutput>;

// The operation
/**
 * Sets the properties of a storage account’s Queue service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const QueueServicesSetServiceProperties =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: QueueServicesSetServicePropertiesInput,
    outputSchema: QueueServicesSetServicePropertiesOutput,
  }));
// Input Schema
export interface QueueUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  queueName: string;
  properties?: {
    metadata?: Record<string, string>;
    approximateMessageCount?: number;
  };
}
export const QueueUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  queueName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      approximateMessageCount: Schema.optional(Schema.Number),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<QueueUpdateInput>;

// Output Schema
export interface QueueUpdateOutput {
  id?: string;
  name?: string;
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
export const QueueUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<QueueUpdateOutput>;

// The operation
/**
 * Creates a new queue with the specified queue name, under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param queueName - A queue name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
 */
export const QueueUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueueUpdateInput,
  outputSchema: QueueUpdateOutput,
}));
// Input Schema
export interface SkusListInput {
  subscriptionId: string;
}
export const SkusListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/skus",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SkusListInput>;

// Output Schema
export interface SkusListOutput {
  value?: {
    name:
      | "Standard_LRS"
      | "Standard_GRS"
      | "Standard_RAGRS"
      | "Standard_ZRS"
      | "Premium_LRS"
      | "Premium_ZRS"
      | "Standard_GZRS"
      | "Standard_RAGZRS"
      | "StandardV2_LRS"
      | "StandardV2_GRS"
      | "StandardV2_ZRS"
      | "StandardV2_GZRS"
      | "PremiumV2_LRS"
      | "PremiumV2_ZRS";
    tier?: "Standard" | "Premium";
    resourceType?: string;
    kind?:
      | "Storage"
      | "StorageV2"
      | "BlobStorage"
      | "FileStorage"
      | "BlockBlobStorage";
    locations?: string[];
    locationInfo?: { location?: string; zones?: string[] }[];
    capabilities?: { name?: string; value?: string }[];
    restrictions?: {
      type?: string;
      values?: string[];
      reasonCode?: "QuotaId" | "NotAvailableForSubscription";
    }[];
  }[];
  nextLink?: string;
}
export const SkusListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.Literals([
          "Standard_LRS",
          "Standard_GRS",
          "Standard_RAGRS",
          "Standard_ZRS",
          "Premium_LRS",
          "Premium_ZRS",
          "Standard_GZRS",
          "Standard_RAGZRS",
          "StandardV2_LRS",
          "StandardV2_GRS",
          "StandardV2_ZRS",
          "StandardV2_GZRS",
          "PremiumV2_LRS",
          "PremiumV2_ZRS",
        ]),
        tier: Schema.optional(Schema.Literals(["Standard", "Premium"])),
        resourceType: Schema.optional(Schema.String),
        kind: Schema.optional(
          Schema.Literals([
            "Storage",
            "StorageV2",
            "BlobStorage",
            "FileStorage",
            "BlockBlobStorage",
          ]),
        ),
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
        restrictions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              values: Schema.optional(Schema.Array(Schema.String)),
              reasonCode: Schema.optional(
                Schema.Literals(["QuotaId", "NotAvailableForSubscription"]),
              ),
            }),
          ),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SkusListOutput>;

// The operation
/**
 * Lists the available SKUs supported by Microsoft.Storage for given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SkusList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
// Input Schema
export interface StorageAccountsAbortHierarchicalNamespaceMigrationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const StorageAccountsAbortHierarchicalNamespaceMigrationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/aborthnsonmigration",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsAbortHierarchicalNamespaceMigrationInput>;

// Output Schema
export type StorageAccountsAbortHierarchicalNamespaceMigrationOutput = void;
export const StorageAccountsAbortHierarchicalNamespaceMigrationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountsAbortHierarchicalNamespaceMigrationOutput>;

// The operation
/**
 * Abort live Migration of storage account to enable Hns
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsAbortHierarchicalNamespaceMigration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsAbortHierarchicalNamespaceMigrationInput,
    outputSchema: StorageAccountsAbortHierarchicalNamespaceMigrationOutput,
  }));
// Input Schema
export interface StorageAccountsCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  type: "Microsoft.Storage/storageAccounts";
}
export const StorageAccountsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.Storage/storageAccounts"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/checkNameAvailability",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsCheckNameAvailabilityInput>;

// Output Schema
export interface StorageAccountsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "AccountNameInvalid" | "AlreadyExists";
  message?: string;
}
export const StorageAccountsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals(["AccountNameInvalid", "AlreadyExists"]),
    ),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StorageAccountsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the storage account name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const StorageAccountsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsCheckNameAvailabilityInput,
    outputSchema: StorageAccountsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface StorageAccountsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  sku: {
    name:
      | "Standard_LRS"
      | "Standard_GRS"
      | "Standard_RAGRS"
      | "Standard_ZRS"
      | "Premium_LRS"
      | "Premium_ZRS"
      | "Standard_GZRS"
      | "Standard_RAGZRS"
      | "StandardV2_LRS"
      | "StandardV2_GRS"
      | "StandardV2_ZRS"
      | "StandardV2_GZRS"
      | "PremiumV2_LRS"
      | "PremiumV2_ZRS";
    tier?: "Standard" | "Premium";
  };
  kind:
    | "Storage"
    | "StorageV2"
    | "BlobStorage"
    | "FileStorage"
    | "BlockBlobStorage";
  location: string;
  extendedLocation?: { name?: string; type?: "EdgeZone" };
  zones?: string[];
  placement?: { zonePlacementPolicy?: "Any" | "None" };
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
    allowedCopyScope?: "PrivateLink" | "AAD" | "All";
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    sasPolicy?: {
      sasExpirationPeriod: string;
      expirationAction: "Log" | "Block";
    };
    keyPolicy?: { keyExpirationPeriodInDays: number };
    customDomain?: { name: string; useSubDomainName?: boolean };
    encryption?: {
      services?: {
        blob?: {
          enabled?: boolean;
          lastEnabledTime?: string;
          keyType?: "Service" | "Account";
        };
        file?: {
          enabled?: boolean;
          lastEnabledTime?: string;
          keyType?: "Service" | "Account";
        };
        table?: {
          enabled?: boolean;
          lastEnabledTime?: string;
          keyType?: "Service" | "Account";
        };
        queue?: {
          enabled?: boolean;
          lastEnabledTime?: string;
          keyType?: "Service" | "Account";
        };
      };
      keySource?: "Microsoft.Storage" | "Microsoft.Keyvault";
      requireInfrastructureEncryption?: boolean;
      keyvaultproperties?: {
        keyname?: string;
        keyversion?: string;
        keyvaulturi?: string;
        currentVersionedKeyIdentifier?: string;
        lastKeyRotationTimestamp?: string;
        currentVersionedKeyExpirationTimestamp?: string;
      };
      identity?: {
        userAssignedIdentity?: string;
        federatedIdentityClientId?: string;
      };
    };
    networkAcls?: {
      bypass?: "None" | "Logging" | "Metrics" | "AzureServices";
      resourceAccessRules?: { tenantId?: string; resourceId?: string }[];
      virtualNetworkRules?: {
        id: string;
        action?: "Allow";
        state?:
          | "Provisioning"
          | "Deprovisioning"
          | "Succeeded"
          | "Failed"
          | "NetworkSourceDeleted";
      }[];
      ipRules?: { value: string; action?: "Allow" }[];
      ipv6Rules?: { value: string; action?: "Allow" }[];
      defaultAction: "Allow" | "Deny";
    };
    accessTier?: "Hot" | "Cool" | "Premium" | "Cold" | "Smart";
    azureFilesIdentityBasedAuthentication?: {
      directoryServiceOptions: "None" | "AADDS" | "AD" | "AADKERB";
      activeDirectoryProperties?: {
        domainName?: string;
        netBiosDomainName?: string;
        forestName?: string;
        domainGuid?: string;
        domainSid?: string;
        azureStorageSid?: string;
        samAccountName?: string;
        accountType?: "User" | "Computer";
      };
      defaultSharePermission?:
        | "None"
        | "StorageFileDataSmbShareReader"
        | "StorageFileDataSmbShareContributor"
        | "StorageFileDataSmbShareElevatedContributor";
      smbOAuthSettings?: { isSmbOAuthEnabled?: boolean };
    };
    supportsHttpsTrafficOnly?: boolean;
    isSftpEnabled?: boolean;
    isLocalUserEnabled?: boolean;
    enableExtendedGroups?: boolean;
    isHnsEnabled?: boolean;
    largeFileSharesState?: "Disabled" | "Enabled";
    routingPreference?: {
      routingChoice?: "MicrosoftRouting" | "InternetRouting";
      publishMicrosoftEndpoints?: boolean;
      publishInternetEndpoints?: boolean;
    };
    dualStackEndpointPreference?: { publishIpv6Endpoint?: boolean };
    allowBlobPublicAccess?: boolean;
    minimumTlsVersion?: "TLS1_0" | "TLS1_1" | "TLS1_2" | "TLS1_3";
    allowSharedKeyAccess?: boolean;
    isNfsV3Enabled?: boolean;
    allowCrossTenantReplication?: boolean;
    defaultToOAuthAuthentication?: boolean;
    immutableStorageWithVersioning?: {
      enabled?: boolean;
      immutabilityPolicy?: {
        immutabilityPeriodSinceCreationInDays?: number;
        state?: "Unlocked" | "Locked" | "Disabled";
        allowProtectedAppendWrites?: boolean;
      };
    };
    dnsEndpointType?: "Standard" | "AzureDnsZone";
    geoPriorityReplicationStatus?: { isBlobEnabled?: boolean };
    allowSharedKeyAccessForServices?: {
      blob?: { enabled?: boolean };
      file?: { enabled?: boolean };
      table?: { enabled?: boolean };
      queue?: { enabled?: boolean };
    };
    dataCollaborationPolicyProperties?: {
      allowStorageConnectors?: boolean;
      allowStorageDataShares?: boolean;
      allowCrossTenantDataSharing?: boolean;
    };
  };
}
export const StorageAccountsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    sku: Schema.Struct({
      name: Schema.Literals([
        "Standard_LRS",
        "Standard_GRS",
        "Standard_RAGRS",
        "Standard_ZRS",
        "Premium_LRS",
        "Premium_ZRS",
        "Standard_GZRS",
        "Standard_RAGZRS",
        "StandardV2_LRS",
        "StandardV2_GRS",
        "StandardV2_ZRS",
        "StandardV2_GZRS",
        "PremiumV2_LRS",
        "PremiumV2_ZRS",
      ]),
      tier: Schema.optional(Schema.Literals(["Standard", "Premium"])),
    }),
    kind: Schema.Literals([
      "Storage",
      "StorageV2",
      "BlobStorage",
      "FileStorage",
      "BlockBlobStorage",
    ]),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["EdgeZone"])),
      }),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    placement: Schema.optional(
      Schema.Struct({
        zonePlacementPolicy: Schema.optional(Schema.Literals(["Any", "None"])),
      }),
    ),
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
        allowedCopyScope: Schema.optional(
          Schema.Literals(["PrivateLink", "AAD", "All"]),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        sasPolicy: Schema.optional(
          Schema.Struct({
            sasExpirationPeriod: Schema.String,
            expirationAction: Schema.Literals(["Log", "Block"]),
          }),
        ),
        keyPolicy: Schema.optional(
          Schema.Struct({
            keyExpirationPeriodInDays: Schema.Number,
          }),
        ),
        customDomain: Schema.optional(
          Schema.Struct({
            name: Schema.String,
            useSubDomainName: Schema.optional(Schema.Boolean),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            services: Schema.optional(
              Schema.Struct({
                blob: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    lastEnabledTime: Schema.optional(Schema.String),
                    keyType: Schema.optional(
                      Schema.Literals(["Service", "Account"]),
                    ),
                  }),
                ),
                file: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    lastEnabledTime: Schema.optional(Schema.String),
                    keyType: Schema.optional(
                      Schema.Literals(["Service", "Account"]),
                    ),
                  }),
                ),
                table: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    lastEnabledTime: Schema.optional(Schema.String),
                    keyType: Schema.optional(
                      Schema.Literals(["Service", "Account"]),
                    ),
                  }),
                ),
                queue: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    lastEnabledTime: Schema.optional(Schema.String),
                    keyType: Schema.optional(
                      Schema.Literals(["Service", "Account"]),
                    ),
                  }),
                ),
              }),
            ),
            keySource: Schema.optional(
              Schema.Literals(["Microsoft.Storage", "Microsoft.Keyvault"]),
            ),
            requireInfrastructureEncryption: Schema.optional(Schema.Boolean),
            keyvaultproperties: Schema.optional(
              Schema.Struct({
                keyname: Schema.optional(Schema.String),
                keyversion: Schema.optional(Schema.String),
                keyvaulturi: Schema.optional(Schema.String),
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
                federatedIdentityClientId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        networkAcls: Schema.optional(
          Schema.Struct({
            bypass: Schema.optional(
              Schema.Literals(["None", "Logging", "Metrics", "AzureServices"]),
            ),
            resourceAccessRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  tenantId: Schema.optional(Schema.String),
                  resourceId: Schema.optional(Schema.String),
                }),
              ),
            ),
            virtualNetworkRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  action: Schema.optional(Schema.Literals(["Allow"])),
                  state: Schema.optional(
                    Schema.Literals([
                      "Provisioning",
                      "Deprovisioning",
                      "Succeeded",
                      "Failed",
                      "NetworkSourceDeleted",
                    ]),
                  ),
                }),
              ),
            ),
            ipRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  value: Schema.String,
                  action: Schema.optional(Schema.Literals(["Allow"])),
                }),
              ),
            ),
            ipv6Rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  value: Schema.String,
                  action: Schema.optional(Schema.Literals(["Allow"])),
                }),
              ),
            ),
            defaultAction: Schema.Literals(["Allow", "Deny"]),
          }),
        ),
        accessTier: Schema.optional(
          Schema.Literals(["Hot", "Cool", "Premium", "Cold", "Smart"]),
        ),
        azureFilesIdentityBasedAuthentication: Schema.optional(
          Schema.Struct({
            directoryServiceOptions: Schema.Literals([
              "None",
              "AADDS",
              "AD",
              "AADKERB",
            ]),
            activeDirectoryProperties: Schema.optional(
              Schema.Struct({
                domainName: Schema.optional(Schema.String),
                netBiosDomainName: Schema.optional(Schema.String),
                forestName: Schema.optional(Schema.String),
                domainGuid: Schema.optional(Schema.String),
                domainSid: Schema.optional(Schema.String),
                azureStorageSid: Schema.optional(Schema.String),
                samAccountName: Schema.optional(Schema.String),
                accountType: Schema.optional(
                  Schema.Literals(["User", "Computer"]),
                ),
              }),
            ),
            defaultSharePermission: Schema.optional(
              Schema.Literals([
                "None",
                "StorageFileDataSmbShareReader",
                "StorageFileDataSmbShareContributor",
                "StorageFileDataSmbShareElevatedContributor",
              ]),
            ),
            smbOAuthSettings: Schema.optional(
              Schema.Struct({
                isSmbOAuthEnabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        supportsHttpsTrafficOnly: Schema.optional(Schema.Boolean),
        isSftpEnabled: Schema.optional(Schema.Boolean),
        isLocalUserEnabled: Schema.optional(Schema.Boolean),
        enableExtendedGroups: Schema.optional(Schema.Boolean),
        isHnsEnabled: Schema.optional(Schema.Boolean),
        largeFileSharesState: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
        routingPreference: Schema.optional(
          Schema.Struct({
            routingChoice: Schema.optional(
              Schema.Literals(["MicrosoftRouting", "InternetRouting"]),
            ),
            publishMicrosoftEndpoints: Schema.optional(Schema.Boolean),
            publishInternetEndpoints: Schema.optional(Schema.Boolean),
          }),
        ),
        dualStackEndpointPreference: Schema.optional(
          Schema.Struct({
            publishIpv6Endpoint: Schema.optional(Schema.Boolean),
          }),
        ),
        allowBlobPublicAccess: Schema.optional(Schema.Boolean),
        minimumTlsVersion: Schema.optional(
          Schema.Literals(["TLS1_0", "TLS1_1", "TLS1_2", "TLS1_3"]),
        ),
        allowSharedKeyAccess: Schema.optional(Schema.Boolean),
        isNfsV3Enabled: Schema.optional(Schema.Boolean),
        allowCrossTenantReplication: Schema.optional(Schema.Boolean),
        defaultToOAuthAuthentication: Schema.optional(Schema.Boolean),
        immutableStorageWithVersioning: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            immutabilityPolicy: Schema.optional(
              Schema.Struct({
                immutabilityPeriodSinceCreationInDays: Schema.optional(
                  Schema.Number,
                ),
                state: Schema.optional(
                  Schema.Literals(["Unlocked", "Locked", "Disabled"]),
                ),
                allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        dnsEndpointType: Schema.optional(
          Schema.Literals(["Standard", "AzureDnsZone"]),
        ),
        geoPriorityReplicationStatus: Schema.optional(
          Schema.Struct({
            isBlobEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        allowSharedKeyAccessForServices: Schema.optional(
          Schema.Struct({
            blob: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            file: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            table: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            queue: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        dataCollaborationPolicyProperties: Schema.optional(
          Schema.Struct({
            allowStorageConnectors: Schema.optional(Schema.Boolean),
            allowStorageDataShares: Schema.optional(Schema.Boolean),
            allowCrossTenantDataSharing: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsCreateInput>;

// Output Schema
export interface StorageAccountsCreateOutput {
  id?: string;
  name?: string;
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
export const StorageAccountsCreateOutput =
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
  }) as unknown as Schema.Codec<StorageAccountsCreateOutput>;

// The operation
/**
 * Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageAccountsCreateInput,
  outputSchema: StorageAccountsCreateOutput,
}));
// Input Schema
export interface StorageAccountsCustomerInitiatedMigrationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties: {
    targetSkuName:
      | "Standard_LRS"
      | "Standard_GRS"
      | "Standard_RAGRS"
      | "Standard_ZRS"
      | "Premium_LRS"
      | "Premium_ZRS"
      | "Standard_GZRS"
      | "Standard_RAGZRS"
      | "StandardV2_LRS"
      | "StandardV2_GRS"
      | "StandardV2_ZRS"
      | "StandardV2_GZRS"
      | "PremiumV2_LRS"
      | "PremiumV2_ZRS";
    migrationStatus?:
      | "Invalid"
      | "SubmittedForConversion"
      | "InProgress"
      | "Complete"
      | "Failed";
    migrationFailedReason?: string;
    migrationFailedDetailedReason?: string;
  };
}
export const StorageAccountsCustomerInitiatedMigrationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      targetSkuName: Schema.Literals([
        "Standard_LRS",
        "Standard_GRS",
        "Standard_RAGRS",
        "Standard_ZRS",
        "Premium_LRS",
        "Premium_ZRS",
        "Standard_GZRS",
        "Standard_RAGZRS",
        "StandardV2_LRS",
        "StandardV2_GRS",
        "StandardV2_ZRS",
        "StandardV2_GZRS",
        "PremiumV2_LRS",
        "PremiumV2_ZRS",
      ]),
      migrationStatus: Schema.optional(
        Schema.Literals([
          "Invalid",
          "SubmittedForConversion",
          "InProgress",
          "Complete",
          "Failed",
        ]),
      ),
      migrationFailedReason: Schema.optional(Schema.String),
      migrationFailedDetailedReason: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/startAccountMigration",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsCustomerInitiatedMigrationInput>;

// Output Schema
export type StorageAccountsCustomerInitiatedMigrationOutput = void;
export const StorageAccountsCustomerInitiatedMigrationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountsCustomerInitiatedMigrationOutput>;

// The operation
/**
 * Account Migration request can be triggered for a storage account to change its redundancy level. The migration updates the non-zonal redundant storage account to a zonal redundant account or vice-versa in order to have better reliability and availability. Zone-redundant storage (ZRS) replicates your storage account synchronously across three Azure availability zones in the primary region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsCustomerInitiatedMigration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsCustomerInitiatedMigrationInput,
    outputSchema: StorageAccountsCustomerInitiatedMigrationOutput,
  }));
// Input Schema
export interface StorageAccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const StorageAccountsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsDeleteInput>;

// Output Schema
export type StorageAccountsDeleteOutput = void;
export const StorageAccountsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountsDeleteOutput>;

// The operation
/**
 * Deletes a storage account in Microsoft Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageAccountsDeleteInput,
  outputSchema: StorageAccountsDeleteOutput,
}));
// Input Schema
export interface StorageAccountsFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  failoverType?: "Planned";
}
export const StorageAccountsFailoverInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    failoverType: Schema.optional(Schema.Literals(["Planned"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/failover",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsFailoverInput>;

// Output Schema
export type StorageAccountsFailoverOutput = void;
export const StorageAccountsFailoverOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountsFailoverOutput>;

// The operation
/**
 * A failover request can be triggered for a storage account in the event a primary endpoint becomes unavailable for any reason. The failover occurs from the storage account's primary cluster to the secondary cluster for RA-GRS accounts. The secondary cluster will become primary after failover and the account is converted to LRS. In the case of a Planned Failover, the primary and secondary clusters are swapped after failover and the account remains geo-replicated. Failover should continue to be used in the event of availability issues as Planned failover is only available while the primary and secondary endpoints are available. The primary use case of a Planned Failover is disaster recovery testing drills. This type of failover is invoked by setting FailoverType parameter to 'Planned'. Learn more about the failover options here- https://learn.microsoft.com/azure/storage/common/storage-disaster-recovery-guidance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param failoverType - The parameter is set to 'Planned' to indicate whether a Planned failover is requested.
 */
export const StorageAccountsFailover = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageAccountsFailoverInput,
  outputSchema: StorageAccountsFailoverOutput,
}));
// Input Schema
export interface StorageAccountsGetCustomerInitiatedMigrationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  migrationName: "default";
}
export const StorageAccountsGetCustomerInitiatedMigrationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    migrationName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/accountMigrations/{migrationName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsGetCustomerInitiatedMigrationInput>;

// Output Schema
export interface StorageAccountsGetCustomerInitiatedMigrationOutput {
  id?: string;
  name?: string;
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
export const StorageAccountsGetCustomerInitiatedMigrationOutput =
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
  }) as unknown as Schema.Codec<StorageAccountsGetCustomerInitiatedMigrationOutput>;

// The operation
/**
 * Gets the status of the ongoing migration for the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param migrationName - The name of the Storage Account Migration. It should always be 'default'
 */
export const StorageAccountsGetCustomerInitiatedMigration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsGetCustomerInitiatedMigrationInput,
    outputSchema: StorageAccountsGetCustomerInitiatedMigrationOutput,
  }));
// Input Schema
export interface StorageAccountsGetPropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $expand?: "geoReplicationStats" | "blobRestoreStatus";
}
export const StorageAccountsGetPropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(
      Schema.Literals(["geoReplicationStats", "blobRestoreStatus"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsGetPropertiesInput>;

// Output Schema
export interface StorageAccountsGetPropertiesOutput {
  id?: string;
  name?: string;
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
export const StorageAccountsGetPropertiesOutput =
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
  }) as unknown as Schema.Codec<StorageAccountsGetPropertiesOutput>;

// The operation
/**
 * Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $expand - May be used to expand the properties within account's properties. By default, data is not included when fetching properties. Currently we only support geoReplicationStats and blobRestoreStatus.
 */
export const StorageAccountsGetProperties =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsGetPropertiesInput,
    outputSchema: StorageAccountsGetPropertiesOutput,
  }));
// Input Schema
export interface StorageAccountsHierarchicalNamespaceMigrationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  requestType: string;
}
export const StorageAccountsHierarchicalNamespaceMigrationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    requestType: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/hnsonmigration",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsHierarchicalNamespaceMigrationInput>;

// Output Schema
export type StorageAccountsHierarchicalNamespaceMigrationOutput = void;
export const StorageAccountsHierarchicalNamespaceMigrationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountsHierarchicalNamespaceMigrationOutput>;

// The operation
/**
 * Live Migration of storage account to enable Hns
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param requestType - Required. Hierarchical namespace migration type can either be a hierarchical namespace validation request 'HnsOnValidationRequest' or a hydration request 'HnsOnHydrationRequest'. The validation request will validate the migration whereas the hydration request will migrate the account.
 */
export const StorageAccountsHierarchicalNamespaceMigration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsHierarchicalNamespaceMigrationInput,
    outputSchema: StorageAccountsHierarchicalNamespaceMigrationOutput,
  }));
// Input Schema
export interface StorageAccountsListInput {
  subscriptionId: string;
}
export const StorageAccountsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/storageAccounts",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsListInput>;

// Output Schema
export interface StorageAccountsListOutput {
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
export const StorageAccountsListOutput =
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
  }) as unknown as Schema.Codec<StorageAccountsListOutput>;

// The operation
/**
 * Lists all the storage accounts available under the subscription. Note that storage keys are not returned; use the ListKeys operation for this.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const StorageAccountsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageAccountsListInput,
  outputSchema: StorageAccountsListOutput,
}));
// Input Schema
export interface StorageAccountsListAccountSASInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  signedServices: "b" | "q" | "t" | "f";
  signedResourceTypes: "s" | "c" | "o";
  signedPermission: "r" | "d" | "w" | "l" | "a" | "c" | "u" | "p";
  signedIp?: string;
  signedProtocol?: "https,http" | "https";
  signedStart?: string;
  signedExpiry: string;
  keyToSign?: string;
}
export const StorageAccountsListAccountSASInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    signedServices: Schema.Literals(["b", "q", "t", "f"]),
    signedResourceTypes: Schema.Literals(["s", "c", "o"]),
    signedPermission: Schema.Literals(["r", "d", "w", "l", "a", "c", "u", "p"]),
    signedIp: Schema.optional(Schema.String),
    signedProtocol: Schema.optional(Schema.Literals(["https,http", "https"])),
    signedStart: Schema.optional(Schema.String),
    signedExpiry: Schema.String,
    keyToSign: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/listAccountSas",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsListAccountSASInput>;

// Output Schema
export interface StorageAccountsListAccountSASOutput {
  accountSasToken?: string;
}
export const StorageAccountsListAccountSASOutput =
  /*@__PURE__*/ Schema.Struct({
    accountSasToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StorageAccountsListAccountSASOutput>;

// The operation
/**
 * List SAS credentials of a storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsListAccountSAS =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsListAccountSASInput,
    outputSchema: StorageAccountsListAccountSASOutput,
  }));
// Input Schema
export interface StorageAccountsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const StorageAccountsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsListByResourceGroupInput>;

// Output Schema
export interface StorageAccountsListByResourceGroupOutput {
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
export const StorageAccountsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<StorageAccountsListByResourceGroupOutput>;

// The operation
/**
 * Lists all the storage accounts available under the given resource group. Note that storage keys are not returned; use the ListKeys operation for this.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const StorageAccountsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsListByResourceGroupInput,
    outputSchema: StorageAccountsListByResourceGroupOutput,
  }));
// Input Schema
export interface StorageAccountsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $expand?: "kerb";
}
export const StorageAccountsListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.Literals(["kerb"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/listKeys",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsListKeysInput>;

// Output Schema
export interface StorageAccountsListKeysOutput {
  keys?: {
    keyName?: string;
    value?: string;
    permissions?: "Read" | "Full";
    creationTime?: string;
  }[];
}
export const StorageAccountsListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    keys: Schema.optional(
      Schema.Array(
        Schema.Struct({
          keyName: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
          permissions: Schema.optional(Schema.Literals(["Read", "Full"])),
          creationTime: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<StorageAccountsListKeysOutput>;

// The operation
/**
 * Lists the access keys or Kerberos keys (if active directory enabled) for the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $expand - Specifies type of the key to be listed. Possible value is kerb.
 */
export const StorageAccountsListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageAccountsListKeysInput,
  outputSchema: StorageAccountsListKeysOutput,
}));
// Input Schema
export interface StorageAccountsListServiceSASInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  canonicalizedResource: string;
  signedResource?: "b" | "c" | "f" | "s";
  signedPermission?: "r" | "d" | "w" | "l" | "a" | "c" | "u" | "p";
  signedIp?: string;
  signedProtocol?: "https,http" | "https";
  signedStart?: string;
  signedExpiry?: string;
  signedIdentifier?: string;
  startPk?: string;
  endPk?: string;
  startRk?: string;
  endRk?: string;
  keyToSign?: string;
  rscc?: string;
  rscd?: string;
  rsce?: string;
  rscl?: string;
  rsct?: string;
}
export const StorageAccountsListServiceSASInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    canonicalizedResource: Schema.String,
    signedResource: Schema.optional(Schema.Literals(["b", "c", "f", "s"])),
    signedPermission: Schema.optional(
      Schema.Literals(["r", "d", "w", "l", "a", "c", "u", "p"]),
    ),
    signedIp: Schema.optional(Schema.String),
    signedProtocol: Schema.optional(Schema.Literals(["https,http", "https"])),
    signedStart: Schema.optional(Schema.String),
    signedExpiry: Schema.optional(Schema.String),
    signedIdentifier: Schema.optional(Schema.String),
    startPk: Schema.optional(Schema.String),
    endPk: Schema.optional(Schema.String),
    startRk: Schema.optional(Schema.String),
    endRk: Schema.optional(Schema.String),
    keyToSign: Schema.optional(Schema.String),
    rscc: Schema.optional(Schema.String),
    rscd: Schema.optional(Schema.String),
    rsce: Schema.optional(Schema.String),
    rscl: Schema.optional(Schema.String),
    rsct: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/listServiceSas",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsListServiceSASInput>;

// Output Schema
export interface StorageAccountsListServiceSASOutput {
  serviceSasToken?: string;
}
export const StorageAccountsListServiceSASOutput =
  /*@__PURE__*/ Schema.Struct({
    serviceSasToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StorageAccountsListServiceSASOutput>;

// The operation
/**
 * List service SAS credentials of a specific resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsListServiceSAS =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsListServiceSASInput,
    outputSchema: StorageAccountsListServiceSASOutput,
  }));
// Input Schema
export interface StorageAccountsRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyName: string;
}
export const StorageAccountsRegenerateKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/regenerateKey",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsRegenerateKeyInput>;

// Output Schema
export interface StorageAccountsRegenerateKeyOutput {
  keys?: {
    keyName?: string;
    value?: string;
    permissions?: "Read" | "Full";
    creationTime?: string;
  }[];
}
export const StorageAccountsRegenerateKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    keys: Schema.optional(
      Schema.Array(
        Schema.Struct({
          keyName: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
          permissions: Schema.optional(Schema.Literals(["Read", "Full"])),
          creationTime: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<StorageAccountsRegenerateKeyOutput>;

// The operation
/**
 * Regenerates one of the access keys or Kerberos keys for the specified storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsRegenerateKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsRegenerateKeyInput,
    outputSchema: StorageAccountsRegenerateKeyOutput,
  }));
// Input Schema
export interface StorageAccountsRestoreBlobRangesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  timeToRestore: string;
  blobRanges: { startRange: string; endRange: string }[];
}
export const StorageAccountsRestoreBlobRangesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    timeToRestore: Schema.String,
    blobRanges: Schema.Array(
      Schema.Struct({
        startRange: Schema.String,
        endRange: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/restoreBlobRanges",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsRestoreBlobRangesInput>;

// Output Schema
export interface StorageAccountsRestoreBlobRangesOutput {
  status?: "InProgress" | "Complete" | "Failed";
  failureReason?: string;
  restoreId?: string;
  parameters?: {
    timeToRestore: string;
    blobRanges: { startRange: string; endRange: string }[];
  };
}
export const StorageAccountsRestoreBlobRangesOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["InProgress", "Complete", "Failed"]),
    ),
    failureReason: Schema.optional(Schema.String),
    restoreId: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Struct({
        timeToRestore: Schema.String,
        blobRanges: Schema.Array(
          Schema.Struct({
            startRange: Schema.String,
            endRange: Schema.String,
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<StorageAccountsRestoreBlobRangesOutput>;

// The operation
/**
 * Restore blobs in the specified blob ranges
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsRestoreBlobRanges =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsRestoreBlobRangesInput,
    outputSchema: StorageAccountsRestoreBlobRangesOutput,
  }));
// Input Schema
export interface StorageAccountsRevokeUserDelegationKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const StorageAccountsRevokeUserDelegationKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/revokeUserDelegationKeys",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsRevokeUserDelegationKeysInput>;

// Output Schema
export type StorageAccountsRevokeUserDelegationKeysOutput = void;
export const StorageAccountsRevokeUserDelegationKeysOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAccountsRevokeUserDelegationKeysOutput>;

// The operation
/**
 * Revoke user delegation keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsRevokeUserDelegationKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAccountsRevokeUserDelegationKeysInput,
    outputSchema: StorageAccountsRevokeUserDelegationKeysOutput,
  }));
// Input Schema
export interface StorageAccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  sku?: {
    name:
      | "Standard_LRS"
      | "Standard_GRS"
      | "Standard_RAGRS"
      | "Standard_ZRS"
      | "Premium_LRS"
      | "Premium_ZRS"
      | "Standard_GZRS"
      | "Standard_RAGZRS"
      | "StandardV2_LRS"
      | "StandardV2_GRS"
      | "StandardV2_ZRS"
      | "StandardV2_GZRS"
      | "PremiumV2_LRS"
      | "PremiumV2_ZRS";
    tier?: "Standard" | "Premium";
  };
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
    customDomain?: { name: string; useSubDomainName?: boolean };
    encryption?: {
      services?: {
        blob?: {
          enabled?: boolean;
          lastEnabledTime?: string;
          keyType?: "Service" | "Account";
        };
        file?: {
          enabled?: boolean;
          lastEnabledTime?: string;
          keyType?: "Service" | "Account";
        };
        table?: {
          enabled?: boolean;
          lastEnabledTime?: string;
          keyType?: "Service" | "Account";
        };
        queue?: {
          enabled?: boolean;
          lastEnabledTime?: string;
          keyType?: "Service" | "Account";
        };
      };
      keySource?: "Microsoft.Storage" | "Microsoft.Keyvault";
      requireInfrastructureEncryption?: boolean;
      keyvaultproperties?: {
        keyname?: string;
        keyversion?: string;
        keyvaulturi?: string;
        currentVersionedKeyIdentifier?: string;
        lastKeyRotationTimestamp?: string;
        currentVersionedKeyExpirationTimestamp?: string;
      };
      identity?: {
        userAssignedIdentity?: string;
        federatedIdentityClientId?: string;
      };
    };
    sasPolicy?: {
      sasExpirationPeriod: string;
      expirationAction: "Log" | "Block";
    };
    keyPolicy?: { keyExpirationPeriodInDays: number };
    accessTier?: "Hot" | "Cool" | "Premium" | "Cold" | "Smart";
    azureFilesIdentityBasedAuthentication?: {
      directoryServiceOptions: "None" | "AADDS" | "AD" | "AADKERB";
      activeDirectoryProperties?: {
        domainName?: string;
        netBiosDomainName?: string;
        forestName?: string;
        domainGuid?: string;
        domainSid?: string;
        azureStorageSid?: string;
        samAccountName?: string;
        accountType?: "User" | "Computer";
      };
      defaultSharePermission?:
        | "None"
        | "StorageFileDataSmbShareReader"
        | "StorageFileDataSmbShareContributor"
        | "StorageFileDataSmbShareElevatedContributor";
      smbOAuthSettings?: { isSmbOAuthEnabled?: boolean };
    };
    supportsHttpsTrafficOnly?: boolean;
    isSftpEnabled?: boolean;
    isLocalUserEnabled?: boolean;
    enableExtendedGroups?: boolean;
    networkAcls?: {
      bypass?: "None" | "Logging" | "Metrics" | "AzureServices";
      resourceAccessRules?: { tenantId?: string; resourceId?: string }[];
      virtualNetworkRules?: {
        id: string;
        action?: "Allow";
        state?:
          | "Provisioning"
          | "Deprovisioning"
          | "Succeeded"
          | "Failed"
          | "NetworkSourceDeleted";
      }[];
      ipRules?: { value: string; action?: "Allow" }[];
      ipv6Rules?: { value: string; action?: "Allow" }[];
      defaultAction: "Allow" | "Deny";
    };
    largeFileSharesState?: "Disabled" | "Enabled";
    routingPreference?: {
      routingChoice?: "MicrosoftRouting" | "InternetRouting";
      publishMicrosoftEndpoints?: boolean;
      publishInternetEndpoints?: boolean;
    };
    dualStackEndpointPreference?: { publishIpv6Endpoint?: boolean };
    allowBlobPublicAccess?: boolean;
    minimumTlsVersion?: "TLS1_0" | "TLS1_1" | "TLS1_2" | "TLS1_3";
    allowSharedKeyAccess?: boolean;
    allowCrossTenantReplication?: boolean;
    defaultToOAuthAuthentication?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    immutableStorageWithVersioning?: {
      enabled?: boolean;
      immutabilityPolicy?: {
        immutabilityPeriodSinceCreationInDays?: number;
        state?: "Unlocked" | "Locked" | "Disabled";
        allowProtectedAppendWrites?: boolean;
      };
    };
    allowedCopyScope?: "PrivateLink" | "AAD" | "All";
    dnsEndpointType?: "Standard" | "AzureDnsZone";
    geoPriorityReplicationStatus?: { isBlobEnabled?: boolean };
    allowSharedKeyAccessForServices?: {
      blob?: { enabled?: boolean };
      file?: { enabled?: boolean };
      table?: { enabled?: boolean };
      queue?: { enabled?: boolean };
    };
    dataCollaborationPolicyProperties?: {
      allowStorageConnectors?: boolean;
      allowStorageDataShares?: boolean;
      allowCrossTenantDataSharing?: boolean;
    };
  };
  kind?:
    | "Storage"
    | "StorageV2"
    | "BlobStorage"
    | "FileStorage"
    | "BlockBlobStorage";
  zones?: string[];
  placement?: { zonePlacementPolicy?: "Any" | "None" };
}
export const StorageAccountsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals([
          "Standard_LRS",
          "Standard_GRS",
          "Standard_RAGRS",
          "Standard_ZRS",
          "Premium_LRS",
          "Premium_ZRS",
          "Standard_GZRS",
          "Standard_RAGZRS",
          "StandardV2_LRS",
          "StandardV2_GRS",
          "StandardV2_ZRS",
          "StandardV2_GZRS",
          "PremiumV2_LRS",
          "PremiumV2_ZRS",
        ]),
        tier: Schema.optional(Schema.Literals(["Standard", "Premium"])),
      }),
    ),
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
        customDomain: Schema.optional(
          Schema.Struct({
            name: Schema.String,
            useSubDomainName: Schema.optional(Schema.Boolean),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            services: Schema.optional(
              Schema.Struct({
                blob: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    lastEnabledTime: Schema.optional(Schema.String),
                    keyType: Schema.optional(
                      Schema.Literals(["Service", "Account"]),
                    ),
                  }),
                ),
                file: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    lastEnabledTime: Schema.optional(Schema.String),
                    keyType: Schema.optional(
                      Schema.Literals(["Service", "Account"]),
                    ),
                  }),
                ),
                table: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    lastEnabledTime: Schema.optional(Schema.String),
                    keyType: Schema.optional(
                      Schema.Literals(["Service", "Account"]),
                    ),
                  }),
                ),
                queue: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    lastEnabledTime: Schema.optional(Schema.String),
                    keyType: Schema.optional(
                      Schema.Literals(["Service", "Account"]),
                    ),
                  }),
                ),
              }),
            ),
            keySource: Schema.optional(
              Schema.Literals(["Microsoft.Storage", "Microsoft.Keyvault"]),
            ),
            requireInfrastructureEncryption: Schema.optional(Schema.Boolean),
            keyvaultproperties: Schema.optional(
              Schema.Struct({
                keyname: Schema.optional(Schema.String),
                keyversion: Schema.optional(Schema.String),
                keyvaulturi: Schema.optional(Schema.String),
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
                federatedIdentityClientId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        sasPolicy: Schema.optional(
          Schema.Struct({
            sasExpirationPeriod: Schema.String,
            expirationAction: Schema.Literals(["Log", "Block"]),
          }),
        ),
        keyPolicy: Schema.optional(
          Schema.Struct({
            keyExpirationPeriodInDays: Schema.Number,
          }),
        ),
        accessTier: Schema.optional(
          Schema.Literals(["Hot", "Cool", "Premium", "Cold", "Smart"]),
        ),
        azureFilesIdentityBasedAuthentication: Schema.optional(
          Schema.Struct({
            directoryServiceOptions: Schema.Literals([
              "None",
              "AADDS",
              "AD",
              "AADKERB",
            ]),
            activeDirectoryProperties: Schema.optional(
              Schema.Struct({
                domainName: Schema.optional(Schema.String),
                netBiosDomainName: Schema.optional(Schema.String),
                forestName: Schema.optional(Schema.String),
                domainGuid: Schema.optional(Schema.String),
                domainSid: Schema.optional(Schema.String),
                azureStorageSid: Schema.optional(Schema.String),
                samAccountName: Schema.optional(Schema.String),
                accountType: Schema.optional(
                  Schema.Literals(["User", "Computer"]),
                ),
              }),
            ),
            defaultSharePermission: Schema.optional(
              Schema.Literals([
                "None",
                "StorageFileDataSmbShareReader",
                "StorageFileDataSmbShareContributor",
                "StorageFileDataSmbShareElevatedContributor",
              ]),
            ),
            smbOAuthSettings: Schema.optional(
              Schema.Struct({
                isSmbOAuthEnabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        supportsHttpsTrafficOnly: Schema.optional(Schema.Boolean),
        isSftpEnabled: Schema.optional(Schema.Boolean),
        isLocalUserEnabled: Schema.optional(Schema.Boolean),
        enableExtendedGroups: Schema.optional(Schema.Boolean),
        networkAcls: Schema.optional(
          Schema.Struct({
            bypass: Schema.optional(
              Schema.Literals(["None", "Logging", "Metrics", "AzureServices"]),
            ),
            resourceAccessRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  tenantId: Schema.optional(Schema.String),
                  resourceId: Schema.optional(Schema.String),
                }),
              ),
            ),
            virtualNetworkRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  action: Schema.optional(Schema.Literals(["Allow"])),
                  state: Schema.optional(
                    Schema.Literals([
                      "Provisioning",
                      "Deprovisioning",
                      "Succeeded",
                      "Failed",
                      "NetworkSourceDeleted",
                    ]),
                  ),
                }),
              ),
            ),
            ipRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  value: Schema.String,
                  action: Schema.optional(Schema.Literals(["Allow"])),
                }),
              ),
            ),
            ipv6Rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  value: Schema.String,
                  action: Schema.optional(Schema.Literals(["Allow"])),
                }),
              ),
            ),
            defaultAction: Schema.Literals(["Allow", "Deny"]),
          }),
        ),
        largeFileSharesState: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
        routingPreference: Schema.optional(
          Schema.Struct({
            routingChoice: Schema.optional(
              Schema.Literals(["MicrosoftRouting", "InternetRouting"]),
            ),
            publishMicrosoftEndpoints: Schema.optional(Schema.Boolean),
            publishInternetEndpoints: Schema.optional(Schema.Boolean),
          }),
        ),
        dualStackEndpointPreference: Schema.optional(
          Schema.Struct({
            publishIpv6Endpoint: Schema.optional(Schema.Boolean),
          }),
        ),
        allowBlobPublicAccess: Schema.optional(Schema.Boolean),
        minimumTlsVersion: Schema.optional(
          Schema.Literals(["TLS1_0", "TLS1_1", "TLS1_2", "TLS1_3"]),
        ),
        allowSharedKeyAccess: Schema.optional(Schema.Boolean),
        allowCrossTenantReplication: Schema.optional(Schema.Boolean),
        defaultToOAuthAuthentication: Schema.optional(Schema.Boolean),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        immutableStorageWithVersioning: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            immutabilityPolicy: Schema.optional(
              Schema.Struct({
                immutabilityPeriodSinceCreationInDays: Schema.optional(
                  Schema.Number,
                ),
                state: Schema.optional(
                  Schema.Literals(["Unlocked", "Locked", "Disabled"]),
                ),
                allowProtectedAppendWrites: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        allowedCopyScope: Schema.optional(
          Schema.Literals(["PrivateLink", "AAD", "All"]),
        ),
        dnsEndpointType: Schema.optional(
          Schema.Literals(["Standard", "AzureDnsZone"]),
        ),
        geoPriorityReplicationStatus: Schema.optional(
          Schema.Struct({
            isBlobEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        allowSharedKeyAccessForServices: Schema.optional(
          Schema.Struct({
            blob: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            file: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            table: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            queue: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        dataCollaborationPolicyProperties: Schema.optional(
          Schema.Struct({
            allowStorageConnectors: Schema.optional(Schema.Boolean),
            allowStorageDataShares: Schema.optional(Schema.Boolean),
            allowCrossTenantDataSharing: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    kind: Schema.optional(
      Schema.Literals([
        "Storage",
        "StorageV2",
        "BlobStorage",
        "FileStorage",
        "BlockBlobStorage",
      ]),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    placement: Schema.optional(
      Schema.Struct({
        zonePlacementPolicy: Schema.optional(Schema.Literals(["Any", "None"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageAccountsUpdateInput>;

// Output Schema
export interface StorageAccountsUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageAccountsUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageAccountsUpdateOutput>;

// The operation
/**
 * The update operation can be used to update the SKU, encryption, access tier, or tags for a storage account. It can also be used to map the account to a custom domain. Only one custom domain is supported per storage account; the replacement/change of custom domain is not supported. In order to replace an old custom domain, the old value must be cleared/unregistered before a new value can be set. The update of multiple properties is supported. This call does not change the storage keys for the account. If you want to change the storage account keys, use the regenerate keys operation. The location and name of the storage account cannot be changed after creation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageAccountsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageAccountsUpdateInput,
  outputSchema: StorageAccountsUpdateOutput,
}));
// Input Schema
export interface StorageTaskAssignmentInstancesReportListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageTaskAssignmentName: string;
  $maxpagesize?: number;
  $filter?: string;
}
export const StorageTaskAssignmentInstancesReportListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}/reports",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageTaskAssignmentInstancesReportListInput>;

// Output Schema
export interface StorageTaskAssignmentInstancesReportListOutput {
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
export const StorageTaskAssignmentInstancesReportListOutput =
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
  }) as unknown as Schema.Codec<StorageTaskAssignmentInstancesReportListOutput>;

// The operation
/**
 * Fetch the report summary of a single storage task assignment's instances
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of storage task assignment instances to be included in the list response.
 * @param $filter - Optional. When specified, it can be used to query using reporting properties. See [Constructing Filter Strings](https://learn.microsoft.com/rest/api/storageservices/querying-tables-and-entities#constructing-filter-strings) for details.
 */
export const StorageTaskAssignmentInstancesReportList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentInstancesReportListInput,
    outputSchema: StorageTaskAssignmentInstancesReportListOutput,
  }));
// Input Schema
export interface StorageTaskAssignmentsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageTaskAssignmentName: string;
  properties?: {
    taskId: string;
    enabled: boolean;
    description: string;
    executionContext: {
      target?: { prefix?: string[]; excludePrefix?: string[] };
      trigger: {
        type: "RunOnce" | "OnSchedule" | "MockRun";
        parameters: {
          startFrom?: string;
          interval?: number;
          intervalUnit?: "Days";
          endBy?: string;
          startOn?: string;
        };
      };
    };
    report: { prefix: string };
    provisioningState?:
      | "ValidateSubscriptionQuotaBegin"
      | "ValidateSubscriptionQuotaEnd"
      | "Accepted"
      | "Creating"
      | "Succeeded"
      | "Deleting"
      | "Canceled"
      | "Failed";
    runStatus?: {
      taskAssignmentId?: string;
      storageAccountId?: string;
      startTime?: string;
      finishTime?: string;
      objectsTargetedCount?: string;
      objectsOperatedOnCount?: string;
      objectFailedCount?: string;
      objectsSucceededCount?: string;
      runStatusError?: string;
      runStatusEnum?: "InProgress" | "Finished";
      summaryReportPath?: string;
      taskId?: string;
      taskVersion?: string;
      runResult?: "Succeeded" | "Failed";
    };
  };
}
export const StorageTaskAssignmentsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        taskId: Schema.String,
        enabled: Schema.Boolean,
        description: Schema.String,
        executionContext: Schema.Struct({
          target: Schema.optional(
            Schema.Struct({
              prefix: Schema.optional(Schema.Array(Schema.String)),
              excludePrefix: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          trigger: Schema.Struct({
            type: Schema.Literals(["RunOnce", "OnSchedule", "MockRun"]),
            parameters: Schema.Struct({
              startFrom: Schema.optional(Schema.String),
              interval: Schema.optional(Schema.Number),
              intervalUnit: Schema.optional(Schema.Literals(["Days"])),
              endBy: Schema.optional(Schema.String),
              startOn: Schema.optional(Schema.String),
            }),
          }),
        }),
        report: Schema.Struct({
          prefix: Schema.String,
        }),
        provisioningState: Schema.optional(
          Schema.Literals([
            "ValidateSubscriptionQuotaBegin",
            "ValidateSubscriptionQuotaEnd",
            "Accepted",
            "Creating",
            "Succeeded",
            "Deleting",
            "Canceled",
            "Failed",
          ]),
        ),
        runStatus: Schema.optional(
          Schema.Struct({
            taskAssignmentId: Schema.optional(Schema.String),
            storageAccountId: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            finishTime: Schema.optional(Schema.String),
            objectsTargetedCount: Schema.optional(Schema.String),
            objectsOperatedOnCount: Schema.optional(Schema.String),
            objectFailedCount: Schema.optional(Schema.String),
            objectsSucceededCount: Schema.optional(Schema.String),
            runStatusError: Schema.optional(Schema.String),
            runStatusEnum: Schema.optional(
              Schema.Literals(["InProgress", "Finished"]),
            ),
            summaryReportPath: Schema.optional(Schema.String),
            taskId: Schema.optional(Schema.String),
            taskVersion: Schema.optional(Schema.String),
            runResult: Schema.optional(
              Schema.Literals(["Succeeded", "Failed"]),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageTaskAssignmentsCreateInput>;

// Output Schema
export interface StorageTaskAssignmentsCreateOutput {
  id?: string;
  name?: string;
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
export const StorageTaskAssignmentsCreateOutput =
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
  }) as unknown as Schema.Codec<StorageTaskAssignmentsCreateOutput>;

// The operation
/**
 * Asynchronously creates a new storage task assignment sub-resource with the specified parameters. If a storage task assignment is already created and a subsequent create request is issued with different properties, the storage task assignment properties will be updated. If a storage task assignment is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageTaskAssignmentsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentsCreateInput,
    outputSchema: StorageTaskAssignmentsCreateOutput,
  }));
// Input Schema
export interface StorageTaskAssignmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageTaskAssignmentName: string;
}
export const StorageTaskAssignmentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageTaskAssignmentsDeleteInput>;

// Output Schema
export type StorageTaskAssignmentsDeleteOutput = void;
export const StorageTaskAssignmentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTaskAssignmentsDeleteOutput>;

// The operation
/**
 * Delete the storage task assignment sub-resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageTaskAssignmentsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentsDeleteInput,
    outputSchema: StorageTaskAssignmentsDeleteOutput,
  }));
// Input Schema
export interface StorageTaskAssignmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageTaskAssignmentName: string;
}
export const StorageTaskAssignmentsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageTaskAssignmentsGetInput>;

// Output Schema
export interface StorageTaskAssignmentsGetOutput {
  id?: string;
  name?: string;
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
export const StorageTaskAssignmentsGetOutput =
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
  }) as unknown as Schema.Codec<StorageTaskAssignmentsGetOutput>;

// The operation
/**
 * Get the storage task assignment properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageTaskAssignmentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTaskAssignmentsGetInput,
  outputSchema: StorageTaskAssignmentsGetOutput,
}));
// Input Schema
export interface StorageTaskAssignmentsInstancesReportListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $maxpagesize?: number;
  $filter?: string;
}
export const StorageTaskAssignmentsInstancesReportListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/reports",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageTaskAssignmentsInstancesReportListInput>;

// Output Schema
export interface StorageTaskAssignmentsInstancesReportListOutput {
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
export const StorageTaskAssignmentsInstancesReportListOutput =
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
  }) as unknown as Schema.Codec<StorageTaskAssignmentsInstancesReportListOutput>;

// The operation
/**
 * Fetch the report summary of all the storage task assignments and instances in an account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of storage task assignment instances to be included in the list response.
 * @param $filter - Optional. When specified, it can be used to query using reporting properties. See [Constructing Filter Strings](https://learn.microsoft.com/rest/api/storageservices/querying-tables-and-entities#constructing-filter-strings) for details.
 */
export const StorageTaskAssignmentsInstancesReportList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentsInstancesReportListInput,
    outputSchema: StorageTaskAssignmentsInstancesReportListOutput,
  }));
// Input Schema
export interface StorageTaskAssignmentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $top?: number;
}
export const StorageTaskAssignmentsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageTaskAssignmentsListInput>;

// Output Schema
export interface StorageTaskAssignmentsListOutput {
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
export const StorageTaskAssignmentsListOutput =
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
  }) as unknown as Schema.Codec<StorageTaskAssignmentsListOutput>;

// The operation
/**
 * List all the storage task assignments in an account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param $top - Optional, specifies the maximum number of storage task assignment Ids to be included in the list response.
 */
export const StorageTaskAssignmentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTaskAssignmentsListInput,
  outputSchema: StorageTaskAssignmentsListOutput,
}));
// Input Schema
export interface StorageTaskAssignmentsStopAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageTaskAssignmentName: string;
}
export const StorageTaskAssignmentsStopAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}/stopAssignment",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageTaskAssignmentsStopAssignmentInput>;

// Output Schema
export type StorageTaskAssignmentsStopAssignmentOutput = void;
export const StorageTaskAssignmentsStopAssignmentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTaskAssignmentsStopAssignmentOutput>;

// The operation
/**
 * Stops any active running storage action for the storage task assignment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageTaskAssignmentsStopAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentsStopAssignmentInput,
    outputSchema: StorageTaskAssignmentsStopAssignmentOutput,
  }));
// Input Schema
export interface StorageTaskAssignmentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  storageTaskAssignmentName: string;
  properties?: {
    taskId?: string;
    enabled?: boolean;
    description?: string;
    executionContext?: {
      target?: { prefix?: string[]; excludePrefix?: string[] };
      trigger?: {
        type?: "RunOnce" | "OnSchedule" | "MockRun";
        parameters?: {
          startFrom?: string;
          interval?: number;
          intervalUnit?: "Days";
          endBy?: string;
          startOn?: string;
        };
      };
    };
    report?: { prefix?: string };
    provisioningState?:
      | "ValidateSubscriptionQuotaBegin"
      | "ValidateSubscriptionQuotaEnd"
      | "Accepted"
      | "Creating"
      | "Succeeded"
      | "Deleting"
      | "Canceled"
      | "Failed";
    runStatus?: {
      taskAssignmentId?: string;
      storageAccountId?: string;
      startTime?: string;
      finishTime?: string;
      objectsTargetedCount?: string;
      objectsOperatedOnCount?: string;
      objectFailedCount?: string;
      objectsSucceededCount?: string;
      runStatusError?: string;
      runStatusEnum?: "InProgress" | "Finished";
      summaryReportPath?: string;
      taskId?: string;
      taskVersion?: string;
      runResult?: "Succeeded" | "Failed";
    };
  };
}
export const StorageTaskAssignmentsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    storageTaskAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        taskId: Schema.optional(Schema.String),
        enabled: Schema.optional(Schema.Boolean),
        description: Schema.optional(Schema.String),
        executionContext: Schema.optional(
          Schema.Struct({
            target: Schema.optional(
              Schema.Struct({
                prefix: Schema.optional(Schema.Array(Schema.String)),
                excludePrefix: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            trigger: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["RunOnce", "OnSchedule", "MockRun"]),
                ),
                parameters: Schema.optional(
                  Schema.Struct({
                    startFrom: Schema.optional(Schema.String),
                    interval: Schema.optional(Schema.Number),
                    intervalUnit: Schema.optional(Schema.Literals(["Days"])),
                    endBy: Schema.optional(Schema.String),
                    startOn: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        report: Schema.optional(
          Schema.Struct({
            prefix: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "ValidateSubscriptionQuotaBegin",
            "ValidateSubscriptionQuotaEnd",
            "Accepted",
            "Creating",
            "Succeeded",
            "Deleting",
            "Canceled",
            "Failed",
          ]),
        ),
        runStatus: Schema.optional(
          Schema.Struct({
            taskAssignmentId: Schema.optional(Schema.String),
            storageAccountId: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            finishTime: Schema.optional(Schema.String),
            objectsTargetedCount: Schema.optional(Schema.String),
            objectsOperatedOnCount: Schema.optional(Schema.String),
            objectFailedCount: Schema.optional(Schema.String),
            objectsSucceededCount: Schema.optional(Schema.String),
            runStatusError: Schema.optional(Schema.String),
            runStatusEnum: Schema.optional(
              Schema.Literals(["InProgress", "Finished"]),
            ),
            summaryReportPath: Schema.optional(Schema.String),
            taskId: Schema.optional(Schema.String),
            taskVersion: Schema.optional(Schema.String),
            runResult: Schema.optional(
              Schema.Literals(["Succeeded", "Failed"]),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/storageTaskAssignments/{storageTaskAssignmentName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StorageTaskAssignmentsUpdateInput>;

// Output Schema
export interface StorageTaskAssignmentsUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageTaskAssignmentsUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageTaskAssignmentsUpdateOutput>;

// The operation
/**
 * Update storage task assignment properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param storageTaskAssignmentName - The name of the storage task assignment within the specified resource group. Storage task assignment names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const StorageTaskAssignmentsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTaskAssignmentsUpdateInput,
    outputSchema: StorageTaskAssignmentsUpdateOutput,
  }));
// Input Schema
export interface TableCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
  properties?: {
    tableName?: string;
    signedIdentifiers?: {
      id: string;
      accessPolicy?: {
        startTime?: string;
        expiryTime?: string;
        permission: string;
      };
    }[];
  };
}
export const TableCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      tableName: Schema.optional(Schema.String),
      signedIdentifiers: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            accessPolicy: Schema.optional(
              Schema.Struct({
                startTime: Schema.optional(Schema.String),
                expiryTime: Schema.optional(Schema.String),
                permission: Schema.String,
              }),
            ),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables/{tableName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<TableCreateInput>;

// Output Schema
export interface TableCreateOutput {
  id?: string;
  name?: string;
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
export const TableCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<TableCreateOutput>;

// The operation
/**
 * Creates a new table with the specified table name, under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param tableName - A table name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric character.
 */
export const TableCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TableCreateInput,
  outputSchema: TableCreateOutput,
}));
// Input Schema
export interface TableDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
}
export const TableDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables/{tableName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<TableDeleteInput>;

// Output Schema
export type TableDeleteOutput = void;
export const TableDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TableDeleteOutput>;

// The operation
/**
 * Deletes the table with the specified table name, under the specified account if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param tableName - A table name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric character.
 */
export const TableDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: TableDeleteInput,
  outputSchema: TableDeleteOutput,
}));
// Input Schema
export interface TableGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
}
export const TableGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables/{tableName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<TableGetInput>;

// Output Schema
export interface TableGetOutput {
  id?: string;
  name?: string;
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
export const TableGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<TableGetOutput>;

// The operation
/**
 * Gets the table with the specified table name, under the specified account if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param tableName - A table name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric character.
 */
export const TableGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TableGetInput,
  outputSchema: TableGetOutput,
}));
// Input Schema
export interface TableListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const TableListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<TableListInput>;

// Output Schema
export interface TableListOutput {
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
export const TableListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TableListOutput>;

// The operation
/**
 * Gets a list of all the tables under the specified storage account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const TableList = /*@__PURE__*/ API.make(() => ({
  inputSchema: TableListInput,
  outputSchema: TableListOutput,
}));
// Input Schema
export interface TableServicesGetServicePropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const TableServicesGetServicePropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<TableServicesGetServicePropertiesInput>;

// Output Schema
export interface TableServicesGetServicePropertiesOutput {
  id?: string;
  name?: string;
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
export const TableServicesGetServicePropertiesOutput =
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
  }) as unknown as Schema.Codec<TableServicesGetServicePropertiesOutput>;

// The operation
/**
 * Gets the properties of a storage account’s Table service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const TableServicesGetServiceProperties =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableServicesGetServicePropertiesInput,
    outputSchema: TableServicesGetServicePropertiesOutput,
  }));
// Input Schema
export interface TableServicesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const TableServicesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<TableServicesListInput>;

// Output Schema
export interface TableServicesListOutput {
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
export const TableServicesListOutput =
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
  }) as unknown as Schema.Codec<TableServicesListOutput>;

// The operation
/**
 * List all table services for the storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const TableServicesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: TableServicesListInput,
  outputSchema: TableServicesListOutput,
}));
// Input Schema
export interface TableServicesSetServicePropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    cors?: {
      corsRules?: {
        allowedOrigins: string[];
        allowedMethods: (
          | "DELETE"
          | "GET"
          | "HEAD"
          | "MERGE"
          | "POST"
          | "OPTIONS"
          | "PUT"
          | "PATCH"
          | "CONNECT"
          | "TRACE"
        )[];
        maxAgeInSeconds: number;
        exposedHeaders: string[];
        allowedHeaders: string[];
      }[];
    };
  };
}
export const TableServicesSetServicePropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        cors: Schema.optional(
          Schema.Struct({
            corsRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  allowedOrigins: Schema.Array(Schema.String),
                  allowedMethods: Schema.Array(
                    Schema.Literals([
                      "DELETE",
                      "GET",
                      "HEAD",
                      "MERGE",
                      "POST",
                      "OPTIONS",
                      "PUT",
                      "PATCH",
                      "CONNECT",
                      "TRACE",
                    ]),
                  ),
                  maxAgeInSeconds: Schema.Number,
                  exposedHeaders: Schema.Array(Schema.String),
                  allowedHeaders: Schema.Array(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<TableServicesSetServicePropertiesInput>;

// Output Schema
export interface TableServicesSetServicePropertiesOutput {
  id?: string;
  name?: string;
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
export const TableServicesSetServicePropertiesOutput =
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
  }) as unknown as Schema.Codec<TableServicesSetServicePropertiesOutput>;

// The operation
/**
 * Sets the properties of a storage account’s Table service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 */
export const TableServicesSetServiceProperties =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableServicesSetServicePropertiesInput,
    outputSchema: TableServicesSetServicePropertiesOutput,
  }));
// Input Schema
export interface TableUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
  properties?: {
    tableName?: string;
    signedIdentifiers?: {
      id: string;
      accessPolicy?: {
        startTime?: string;
        expiryTime?: string;
        permission: string;
      };
    }[];
  };
}
export const TableUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tableName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      tableName: Schema.optional(Schema.String),
      signedIdentifiers: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            accessPolicy: Schema.optional(
              Schema.Struct({
                startTime: Schema.optional(Schema.String),
                expiryTime: Schema.optional(Schema.String),
                permission: Schema.String,
              }),
            ),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables/{tableName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<TableUpdateInput>;

// Output Schema
export interface TableUpdateOutput {
  id?: string;
  name?: string;
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
export const TableUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<TableUpdateOutput>;

// The operation
/**
 * Creates a new table with the specified table name, under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
 * @param tableName - A table name must be unique within a storage account and must be between 3 and 63 characters.The name must comprise of only alphanumeric characters and it cannot begin with a numeric character.
 */
export const TableUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TableUpdateInput,
  outputSchema: TableUpdateOutput,
}));
// Input Schema
export interface UsagesListByLocationInput {
  subscriptionId: string;
  location: string;
}
export const UsagesListByLocationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/usages",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<UsagesListByLocationInput>;

// Output Schema
export interface UsagesListByLocationOutput {
  value?: {
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountsPerSecond"
      | "BytesPerSecond";
    currentValue?: number;
    limit?: number;
    name?: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const UsagesListByLocationOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountsPerSecond",
              "BytesPerSecond",
            ]),
          ),
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
  }) as unknown as Schema.Codec<UsagesListByLocationOutput>;

// The operation
/**
 * Gets the current usage count and the limit for the resources of the location under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const UsagesListByLocation = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsagesListByLocationInput,
  outputSchema: UsagesListByLocationOutput,
}));
