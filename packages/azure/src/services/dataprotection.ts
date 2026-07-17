/**
 * Azure Dataprotection API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface BackupInstancesAdhocBackupInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  backupRuleOptions: {
    ruleName: string;
    triggerOption: { retentionTagOverride?: string };
  };
}
export const BackupInstancesAdhocBackupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    backupRuleOptions: Schema.Struct({
      ruleName: Schema.String,
      triggerOption: Schema.Struct({
        retentionTagOverride: Schema.optional(Schema.String),
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/backup",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesAdhocBackupInput>;

// Output Schema
export interface BackupInstancesAdhocBackupOutput {
  objectType: string;
}
export const BackupInstancesAdhocBackupOutput =
  /*@__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<BackupInstancesAdhocBackupOutput>;

// The operation
/**
 * Trigger adhoc backup
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesAdhocBackup = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupInstancesAdhocBackupInput,
  outputSchema: BackupInstancesAdhocBackupOutput,
}));
// Input Schema
export interface BackupInstancesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  properties?: {
    friendlyName?: string;
    dataSourceInfo: {
      datasourceType?: string;
      objectType?: string;
      resourceID: string;
      resourceLocation?: string;
      resourceName?: string;
      resourceType?: string;
      resourceUri?: string;
      resourceProperties?: { objectType: "DefaultResourceProperties" };
    };
    dataSourceSetInfo?: {
      datasourceType?: string;
      objectType?: string;
      resourceID: string;
      resourceLocation?: string;
      resourceName?: string;
      resourceType?: string;
      resourceUri?: string;
      resourceProperties?: { objectType: "DefaultResourceProperties" };
    };
    policyInfo: {
      policyId: string;
      policyVersion?: string;
      policyParameters?: {
        dataStoreParametersList?: {
          objectType: string;
          dataStoreType: "OperationalStore" | "VaultStore" | "ArchiveStore";
        }[];
        backupDatasourceParametersList?: { objectType: string }[];
      };
    };
    resourceGuardOperationRequests?: string[];
    protectionStatus?: {
      errorDetails?: {
        code?: string;
        details?: unknown[];
        innerError?: {
          additionalInfo?: Record<string, string>;
          code?: string;
          embeddedInnerError?: unknown;
        };
        isRetryable?: boolean;
        isUserError?: boolean;
        properties?: Record<string, string>;
        message?: string;
        recommendedAction?: string[];
        target?: string;
      };
      status?:
        | "ConfiguringProtection"
        | "ConfiguringProtectionFailed"
        | "ProtectionConfigured"
        | "ProtectionStopped"
        | "SoftDeleted"
        | "SoftDeleting";
    };
    currentProtectionState?:
      | "Invalid"
      | "NotProtected"
      | "ConfiguringProtection"
      | "ProtectionConfigured"
      | "BackupSchedulesSuspended"
      | "RetentionSchedulesSuspended"
      | "ProtectionStopped"
      | "ProtectionError"
      | "ConfiguringProtectionFailed"
      | "SoftDeleting"
      | "SoftDeleted"
      | "UpdatingProtection";
    protectionErrorDetails?: {
      code?: string;
      details?: unknown[];
      innerError?: {
        additionalInfo?: Record<string, string>;
        code?: string;
        embeddedInnerError?: unknown;
      };
      isRetryable?: boolean;
      isUserError?: boolean;
      properties?: Record<string, string>;
      message?: string;
      recommendedAction?: string[];
      target?: string;
    };
    provisioningState?: string;
    datasourceAuthCredentials?: { objectType: string };
    validationType?: "ShallowValidation" | "DeepValidation";
    identityDetails?: {
      useSystemAssignedIdentity?: boolean;
      userAssignedIdentityArmUrl?: string;
    };
    objectType: string;
  };
  tags?: Record<string, string>;
}
export const BackupInstancesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        friendlyName: Schema.optional(Schema.String),
        dataSourceInfo: Schema.Struct({
          datasourceType: Schema.optional(Schema.String),
          objectType: Schema.optional(Schema.String),
          resourceID: Schema.String,
          resourceLocation: Schema.optional(Schema.String),
          resourceName: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceUri: Schema.optional(Schema.String),
          resourceProperties: Schema.optional(
            Schema.Struct({
              objectType: Schema.Literals(["DefaultResourceProperties"]),
            }),
          ),
        }),
        dataSourceSetInfo: Schema.optional(
          Schema.Struct({
            datasourceType: Schema.optional(Schema.String),
            objectType: Schema.optional(Schema.String),
            resourceID: Schema.String,
            resourceLocation: Schema.optional(Schema.String),
            resourceName: Schema.optional(Schema.String),
            resourceType: Schema.optional(Schema.String),
            resourceUri: Schema.optional(Schema.String),
            resourceProperties: Schema.optional(
              Schema.Struct({
                objectType: Schema.Literals(["DefaultResourceProperties"]),
              }),
            ),
          }),
        ),
        policyInfo: Schema.Struct({
          policyId: Schema.String,
          policyVersion: Schema.optional(Schema.String),
          policyParameters: Schema.optional(
            Schema.Struct({
              dataStoreParametersList: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    objectType: Schema.String,
                    dataStoreType: Schema.Literals([
                      "OperationalStore",
                      "VaultStore",
                      "ArchiveStore",
                    ]),
                  }),
                ),
              ),
              backupDatasourceParametersList: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    objectType: Schema.String,
                  }),
                ),
              ),
            }),
          ),
        }),
        resourceGuardOperationRequests: Schema.optional(
          Schema.Array(Schema.String),
        ),
        protectionStatus: Schema.optional(
          Schema.Struct({
            errorDetails: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
                innerError: Schema.optional(
                  Schema.Struct({
                    additionalInfo: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    code: Schema.optional(Schema.String),
                    embeddedInnerError: Schema.optional(Schema.Unknown),
                  }),
                ),
                isRetryable: Schema.optional(Schema.Boolean),
                isUserError: Schema.optional(Schema.Boolean),
                properties: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                message: Schema.optional(Schema.String),
                recommendedAction: Schema.optional(Schema.Array(Schema.String)),
                target: Schema.optional(Schema.String),
              }),
            ),
            status: Schema.optional(
              Schema.Literals([
                "ConfiguringProtection",
                "ConfiguringProtectionFailed",
                "ProtectionConfigured",
                "ProtectionStopped",
                "SoftDeleted",
                "SoftDeleting",
              ]),
            ),
          }),
        ),
        currentProtectionState: Schema.optional(
          Schema.Literals([
            "Invalid",
            "NotProtected",
            "ConfiguringProtection",
            "ProtectionConfigured",
            "BackupSchedulesSuspended",
            "RetentionSchedulesSuspended",
            "ProtectionStopped",
            "ProtectionError",
            "ConfiguringProtectionFailed",
            "SoftDeleting",
            "SoftDeleted",
            "UpdatingProtection",
          ]),
        ),
        protectionErrorDetails: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            details: Schema.optional(Schema.Array(Schema.Unknown)),
            innerError: Schema.optional(
              Schema.Struct({
                additionalInfo: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                code: Schema.optional(Schema.String),
                embeddedInnerError: Schema.optional(Schema.Unknown),
              }),
            ),
            isRetryable: Schema.optional(Schema.Boolean),
            isUserError: Schema.optional(Schema.Boolean),
            properties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            message: Schema.optional(Schema.String),
            recommendedAction: Schema.optional(Schema.Array(Schema.String)),
            target: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
        datasourceAuthCredentials: Schema.optional(
          Schema.Struct({
            objectType: Schema.String,
          }),
        ),
        validationType: Schema.optional(
          Schema.Literals(["ShallowValidation", "DeepValidation"]),
        ),
        identityDetails: Schema.optional(
          Schema.Struct({
            useSystemAssignedIdentity: Schema.optional(Schema.Boolean),
            userAssignedIdentityArmUrl: Schema.optional(Schema.String),
          }),
        ),
        objectType: Schema.String,
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesCreateOrUpdateInput>;

// Output Schema
export interface BackupInstancesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupInstancesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BackupInstancesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a backup instance in a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesCreateOrUpdateInput,
    outputSchema: BackupInstancesCreateOrUpdateOutput,
  }));
// Input Schema
export interface BackupInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
}
export const BackupInstancesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesDeleteInput>;

// Output Schema
export type BackupInstancesDeleteOutput = void;
export const BackupInstancesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupInstancesDeleteOutput>;

// The operation
/**
 * Delete a backup instance in a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupInstancesDeleteInput,
  outputSchema: BackupInstancesDeleteOutput,
}));
// Input Schema
export interface BackupInstancesExtensionRoutingListInput {
  resourceId: string;
}
export const BackupInstancesExtensionRoutingListInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceId}/providers/Microsoft.DataProtection/backupInstances",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesExtensionRoutingListInput>;

// Output Schema
export interface BackupInstancesExtensionRoutingListOutput {
  nextLink?: string;
}
export const BackupInstancesExtensionRoutingListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupInstancesExtensionRoutingListOutput>;

// The operation
/**
 * Gets a list of backup instances associated with a tracked resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - ARM path of the resource to be protected using Microsoft.DataProtection
 */
export const BackupInstancesExtensionRoutingList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesExtensionRoutingListInput,
    outputSchema: BackupInstancesExtensionRoutingListOutput,
  }));
// Input Schema
export interface BackupInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
}
export const BackupInstancesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesGetInput>;

// Output Schema
export interface BackupInstancesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupInstancesGetOutput =
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
  }) as unknown as Schema.Codec<BackupInstancesGetOutput>;

// The operation
/**
 * Gets a backup instance with name in a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupInstancesGetInput,
  outputSchema: BackupInstancesGetOutput,
}));
// Input Schema
export interface BackupInstancesGetBackupInstanceOperationResultInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  operationId: string;
}
export const BackupInstancesGetBackupInstanceOperationResultInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/operationResults/{operationId}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesGetBackupInstanceOperationResultInput>;

// Output Schema
export interface BackupInstancesGetBackupInstanceOperationResultOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupInstancesGetBackupInstanceOperationResultOutput =
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
  }) as unknown as Schema.Codec<BackupInstancesGetBackupInstanceOperationResultOutput>;

// The operation
/**
 * Get result of backup instance creation operation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the BackupVaultResource
 * @param backupInstanceName - The name of the BackupInstanceResource
 * @param operationId - The name of the BackupInstanceResource
 */
export const BackupInstancesGetBackupInstanceOperationResult =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesGetBackupInstanceOperationResultInput,
    outputSchema: BackupInstancesGetBackupInstanceOperationResultOutput,
  }));
// Input Schema
export interface BackupInstancesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const BackupInstancesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesListInput>;

// Output Schema
export interface BackupInstancesListOutput {
  nextLink?: string;
}
export const BackupInstancesListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupInstancesListOutput>;

// The operation
/**
 * Gets a backup instances belonging to a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 */
export const BackupInstancesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupInstancesListInput,
  outputSchema: BackupInstancesListOutput,
}));
// Input Schema
export interface BackupInstancesResumeBackupsInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
}
export const BackupInstancesResumeBackupsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/resumeBackups",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesResumeBackupsInput>;

// Output Schema
export type BackupInstancesResumeBackupsOutput = void;
export const BackupInstancesResumeBackupsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupInstancesResumeBackupsOutput>;

// The operation
/**
 * This operation will resume backups for backup instance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesResumeBackups =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesResumeBackupsInput,
    outputSchema: BackupInstancesResumeBackupsOutput,
  }));
// Input Schema
export interface BackupInstancesResumeProtectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
}
export const BackupInstancesResumeProtectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/resumeProtection",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesResumeProtectionInput>;

// Output Schema
export type BackupInstancesResumeProtectionOutput = void;
export const BackupInstancesResumeProtectionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupInstancesResumeProtectionOutput>;

// The operation
/**
 * This operation will resume protection for a stopped backup instance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesResumeProtection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesResumeProtectionInput,
    outputSchema: BackupInstancesResumeProtectionOutput,
  }));
// Input Schema
export interface BackupInstancesStopProtectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  resourceGuardOperationRequests?: string[];
}
export const BackupInstancesStopProtectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    resourceGuardOperationRequests: Schema.optional(
      Schema.Array(Schema.String),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/stopProtection",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesStopProtectionInput>;

// Output Schema
export type BackupInstancesStopProtectionOutput = void;
export const BackupInstancesStopProtectionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupInstancesStopProtectionOutput>;

// The operation
/**
 * This operation will stop protection of a backup instance and data will be held forever
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesStopProtection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesStopProtectionInput,
    outputSchema: BackupInstancesStopProtectionOutput,
  }));
// Input Schema
export interface BackupInstancesSuspendBackupsInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  resourceGuardOperationRequests?: string[];
}
export const BackupInstancesSuspendBackupsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    resourceGuardOperationRequests: Schema.optional(
      Schema.Array(Schema.String),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/suspendBackups",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesSuspendBackupsInput>;

// Output Schema
export type BackupInstancesSuspendBackupsOutput = void;
export const BackupInstancesSuspendBackupsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupInstancesSuspendBackupsOutput>;

// The operation
/**
 * This operation will stop backup for a backup instance and retains the backup data as per the policy (except latest Recovery point, which will be retained forever)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesSuspendBackups =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesSuspendBackupsInput,
    outputSchema: BackupInstancesSuspendBackupsOutput,
  }));
// Input Schema
export interface BackupInstancesSyncBackupInstanceInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  syncType?: "Default" | "ForceResync";
}
export const BackupInstancesSyncBackupInstanceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    syncType: Schema.optional(Schema.Literals(["Default", "ForceResync"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/sync",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesSyncBackupInstanceInput>;

// Output Schema
export type BackupInstancesSyncBackupInstanceOutput = void;
export const BackupInstancesSyncBackupInstanceOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupInstancesSyncBackupInstanceOutput>;

// The operation
/**
 * Sync backup instance again in case of failure
 * This action will retry last failed operation and will bring backup instance to valid state
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesSyncBackupInstance =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesSyncBackupInstanceInput,
    outputSchema: BackupInstancesSyncBackupInstanceOutput,
  }));
// Input Schema
export interface BackupInstancesTriggerCrossRegionRestoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  restoreRequestObject: {
    objectType: string;
    restoreTargetInfo: {
      objectType: string;
      recoveryOption: "FailIfExists";
      restoreLocation?: string;
    };
    sourceDataStoreType:
      | "ArchiveStore"
      | "SnapshotStore"
      | "OperationalStore"
      | "VaultStore";
    sourceResourceId?: string;
    resourceGuardOperationRequests?: string[];
    identityDetails?: {
      useSystemAssignedIdentity?: boolean;
      userAssignedIdentityArmUrl?: string;
    };
  };
  crossRegionRestoreDetails: {
    sourceRegion: string;
    sourceBackupInstanceId: string;
  };
}
export const BackupInstancesTriggerCrossRegionRestoreInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    restoreRequestObject: Schema.Struct({
      objectType: Schema.String,
      restoreTargetInfo: Schema.Struct({
        objectType: Schema.String,
        recoveryOption: Schema.Literals(["FailIfExists"]),
        restoreLocation: Schema.optional(Schema.String),
      }),
      sourceDataStoreType: Schema.Literals([
        "ArchiveStore",
        "SnapshotStore",
        "OperationalStore",
        "VaultStore",
      ]),
      sourceResourceId: Schema.optional(Schema.String),
      resourceGuardOperationRequests: Schema.optional(
        Schema.Array(Schema.String),
      ),
      identityDetails: Schema.optional(
        Schema.Struct({
          useSystemAssignedIdentity: Schema.optional(Schema.Boolean),
          userAssignedIdentityArmUrl: Schema.optional(Schema.String),
        }),
      ),
    }),
    crossRegionRestoreDetails: Schema.Struct({
      sourceRegion: Schema.String,
      sourceBackupInstanceId: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/locations/{location}/crossRegionRestore",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesTriggerCrossRegionRestoreInput>;

// Output Schema
export interface BackupInstancesTriggerCrossRegionRestoreOutput {
  objectType: string;
}
export const BackupInstancesTriggerCrossRegionRestoreOutput =
  /*@__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<BackupInstancesTriggerCrossRegionRestoreOutput>;

// The operation
/**
 * Triggers Cross Region Restore for BackupInstance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of the Azure region.
 */
export const BackupInstancesTriggerCrossRegionRestore =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesTriggerCrossRegionRestoreInput,
    outputSchema: BackupInstancesTriggerCrossRegionRestoreOutput,
  }));
// Input Schema
export interface BackupInstancesTriggerRehydrateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  recoveryPointId: string;
  rehydrationPriority?: "Invalid" | "High" | "Standard";
  rehydrationRetentionDuration: string;
}
export const BackupInstancesTriggerRehydrateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    recoveryPointId: Schema.String,
    rehydrationPriority: Schema.optional(
      Schema.Literals(["Invalid", "High", "Standard"]),
    ),
    rehydrationRetentionDuration: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/rehydrate",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesTriggerRehydrateInput>;

// Output Schema
export type BackupInstancesTriggerRehydrateOutput = void;
export const BackupInstancesTriggerRehydrateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupInstancesTriggerRehydrateOutput>;

// The operation
/**
 * rehydrate recovery point for restore for a BackupInstance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesTriggerRehydrate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesTriggerRehydrateInput,
    outputSchema: BackupInstancesTriggerRehydrateOutput,
  }));
// Input Schema
export interface BackupInstancesTriggerRestoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  objectType: string;
  restoreTargetInfo: {
    objectType: string;
    recoveryOption: "FailIfExists";
    restoreLocation?: string;
  };
  sourceDataStoreType:
    | "ArchiveStore"
    | "SnapshotStore"
    | "OperationalStore"
    | "VaultStore";
  sourceResourceId?: string;
  resourceGuardOperationRequests?: string[];
  identityDetails?: {
    useSystemAssignedIdentity?: boolean;
    userAssignedIdentityArmUrl?: string;
  };
}
export const BackupInstancesTriggerRestoreInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    objectType: Schema.String,
    restoreTargetInfo: Schema.Struct({
      objectType: Schema.String,
      recoveryOption: Schema.Literals(["FailIfExists"]),
      restoreLocation: Schema.optional(Schema.String),
    }),
    sourceDataStoreType: Schema.Literals([
      "ArchiveStore",
      "SnapshotStore",
      "OperationalStore",
      "VaultStore",
    ]),
    sourceResourceId: Schema.optional(Schema.String),
    resourceGuardOperationRequests: Schema.optional(
      Schema.Array(Schema.String),
    ),
    identityDetails: Schema.optional(
      Schema.Struct({
        useSystemAssignedIdentity: Schema.optional(Schema.Boolean),
        userAssignedIdentityArmUrl: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/restore",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesTriggerRestoreInput>;

// Output Schema
export interface BackupInstancesTriggerRestoreOutput {
  objectType: string;
}
export const BackupInstancesTriggerRestoreOutput =
  /*@__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<BackupInstancesTriggerRestoreOutput>;

// The operation
/**
 * Triggers restore for a BackupInstance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesTriggerRestore =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesTriggerRestoreInput,
    outputSchema: BackupInstancesTriggerRestoreOutput,
  }));
// Input Schema
export interface BackupInstancesValidateCrossRegionRestoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  restoreRequestObject: {
    objectType: string;
    restoreTargetInfo: {
      objectType: string;
      recoveryOption: "FailIfExists";
      restoreLocation?: string;
    };
    sourceDataStoreType:
      | "ArchiveStore"
      | "SnapshotStore"
      | "OperationalStore"
      | "VaultStore";
    sourceResourceId?: string;
    resourceGuardOperationRequests?: string[];
    identityDetails?: {
      useSystemAssignedIdentity?: boolean;
      userAssignedIdentityArmUrl?: string;
    };
  };
  crossRegionRestoreDetails: {
    sourceRegion: string;
    sourceBackupInstanceId: string;
  };
}
export const BackupInstancesValidateCrossRegionRestoreInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    restoreRequestObject: Schema.Struct({
      objectType: Schema.String,
      restoreTargetInfo: Schema.Struct({
        objectType: Schema.String,
        recoveryOption: Schema.Literals(["FailIfExists"]),
        restoreLocation: Schema.optional(Schema.String),
      }),
      sourceDataStoreType: Schema.Literals([
        "ArchiveStore",
        "SnapshotStore",
        "OperationalStore",
        "VaultStore",
      ]),
      sourceResourceId: Schema.optional(Schema.String),
      resourceGuardOperationRequests: Schema.optional(
        Schema.Array(Schema.String),
      ),
      identityDetails: Schema.optional(
        Schema.Struct({
          useSystemAssignedIdentity: Schema.optional(Schema.Boolean),
          userAssignedIdentityArmUrl: Schema.optional(Schema.String),
        }),
      ),
    }),
    crossRegionRestoreDetails: Schema.Struct({
      sourceRegion: Schema.String,
      sourceBackupInstanceId: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/locations/{location}/validateCrossRegionRestore",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesValidateCrossRegionRestoreInput>;

// Output Schema
export interface BackupInstancesValidateCrossRegionRestoreOutput {
  objectType: string;
}
export const BackupInstancesValidateCrossRegionRestoreOutput =
  /*@__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<BackupInstancesValidateCrossRegionRestoreOutput>;

// The operation
/**
 * Validates whether Cross Region Restore can be triggered for DataSource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of the Azure region.
 */
export const BackupInstancesValidateCrossRegionRestore =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesValidateCrossRegionRestoreInput,
    outputSchema: BackupInstancesValidateCrossRegionRestoreOutput,
  }));
// Input Schema
export interface BackupInstancesValidateForBackupInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstance: {
    friendlyName?: string;
    dataSourceInfo: {
      datasourceType?: string;
      objectType?: string;
      resourceID: string;
      resourceLocation?: string;
      resourceName?: string;
      resourceType?: string;
      resourceUri?: string;
      resourceProperties?: { objectType: "DefaultResourceProperties" };
    };
    dataSourceSetInfo?: {
      datasourceType?: string;
      objectType?: string;
      resourceID: string;
      resourceLocation?: string;
      resourceName?: string;
      resourceType?: string;
      resourceUri?: string;
      resourceProperties?: { objectType: "DefaultResourceProperties" };
    };
    policyInfo: {
      policyId: string;
      policyVersion?: string;
      policyParameters?: {
        dataStoreParametersList?: {
          objectType: string;
          dataStoreType: "OperationalStore" | "VaultStore" | "ArchiveStore";
        }[];
        backupDatasourceParametersList?: { objectType: string }[];
      };
    };
    resourceGuardOperationRequests?: string[];
    protectionStatus?: {
      errorDetails?: {
        code?: string;
        details?: unknown[];
        innerError?: {
          additionalInfo?: Record<string, string>;
          code?: string;
          embeddedInnerError?: unknown;
        };
        isRetryable?: boolean;
        isUserError?: boolean;
        properties?: Record<string, string>;
        message?: string;
        recommendedAction?: string[];
        target?: string;
      };
      status?:
        | "ConfiguringProtection"
        | "ConfiguringProtectionFailed"
        | "ProtectionConfigured"
        | "ProtectionStopped"
        | "SoftDeleted"
        | "SoftDeleting";
    };
    currentProtectionState?:
      | "Invalid"
      | "NotProtected"
      | "ConfiguringProtection"
      | "ProtectionConfigured"
      | "BackupSchedulesSuspended"
      | "RetentionSchedulesSuspended"
      | "ProtectionStopped"
      | "ProtectionError"
      | "ConfiguringProtectionFailed"
      | "SoftDeleting"
      | "SoftDeleted"
      | "UpdatingProtection";
    protectionErrorDetails?: {
      code?: string;
      details?: unknown[];
      innerError?: {
        additionalInfo?: Record<string, string>;
        code?: string;
        embeddedInnerError?: unknown;
      };
      isRetryable?: boolean;
      isUserError?: boolean;
      properties?: Record<string, string>;
      message?: string;
      recommendedAction?: string[];
      target?: string;
    };
    provisioningState?: string;
    datasourceAuthCredentials?: { objectType: string };
    validationType?: "ShallowValidation" | "DeepValidation";
    identityDetails?: {
      useSystemAssignedIdentity?: boolean;
      userAssignedIdentityArmUrl?: string;
    };
    objectType: string;
  };
}
export const BackupInstancesValidateForBackupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstance: Schema.Struct({
      friendlyName: Schema.optional(Schema.String),
      dataSourceInfo: Schema.Struct({
        datasourceType: Schema.optional(Schema.String),
        objectType: Schema.optional(Schema.String),
        resourceID: Schema.String,
        resourceLocation: Schema.optional(Schema.String),
        resourceName: Schema.optional(Schema.String),
        resourceType: Schema.optional(Schema.String),
        resourceUri: Schema.optional(Schema.String),
        resourceProperties: Schema.optional(
          Schema.Struct({
            objectType: Schema.Literals(["DefaultResourceProperties"]),
          }),
        ),
      }),
      dataSourceSetInfo: Schema.optional(
        Schema.Struct({
          datasourceType: Schema.optional(Schema.String),
          objectType: Schema.optional(Schema.String),
          resourceID: Schema.String,
          resourceLocation: Schema.optional(Schema.String),
          resourceName: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceUri: Schema.optional(Schema.String),
          resourceProperties: Schema.optional(
            Schema.Struct({
              objectType: Schema.Literals(["DefaultResourceProperties"]),
            }),
          ),
        }),
      ),
      policyInfo: Schema.Struct({
        policyId: Schema.String,
        policyVersion: Schema.optional(Schema.String),
        policyParameters: Schema.optional(
          Schema.Struct({
            dataStoreParametersList: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  objectType: Schema.String,
                  dataStoreType: Schema.Literals([
                    "OperationalStore",
                    "VaultStore",
                    "ArchiveStore",
                  ]),
                }),
              ),
            ),
            backupDatasourceParametersList: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  objectType: Schema.String,
                }),
              ),
            ),
          }),
        ),
      }),
      resourceGuardOperationRequests: Schema.optional(
        Schema.Array(Schema.String),
      ),
      protectionStatus: Schema.optional(
        Schema.Struct({
          errorDetails: Schema.optional(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
              innerError: Schema.optional(
                Schema.Struct({
                  additionalInfo: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  code: Schema.optional(Schema.String),
                  embeddedInnerError: Schema.optional(Schema.Unknown),
                }),
              ),
              isRetryable: Schema.optional(Schema.Boolean),
              isUserError: Schema.optional(Schema.Boolean),
              properties: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              message: Schema.optional(Schema.String),
              recommendedAction: Schema.optional(Schema.Array(Schema.String)),
              target: Schema.optional(Schema.String),
            }),
          ),
          status: Schema.optional(
            Schema.Literals([
              "ConfiguringProtection",
              "ConfiguringProtectionFailed",
              "ProtectionConfigured",
              "ProtectionStopped",
              "SoftDeleted",
              "SoftDeleting",
            ]),
          ),
        }),
      ),
      currentProtectionState: Schema.optional(
        Schema.Literals([
          "Invalid",
          "NotProtected",
          "ConfiguringProtection",
          "ProtectionConfigured",
          "BackupSchedulesSuspended",
          "RetentionSchedulesSuspended",
          "ProtectionStopped",
          "ProtectionError",
          "ConfiguringProtectionFailed",
          "SoftDeleting",
          "SoftDeleted",
          "UpdatingProtection",
        ]),
      ),
      protectionErrorDetails: Schema.optional(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          details: Schema.optional(Schema.Array(Schema.Unknown)),
          innerError: Schema.optional(
            Schema.Struct({
              additionalInfo: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              code: Schema.optional(Schema.String),
              embeddedInnerError: Schema.optional(Schema.Unknown),
            }),
          ),
          isRetryable: Schema.optional(Schema.Boolean),
          isUserError: Schema.optional(Schema.Boolean),
          properties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          message: Schema.optional(Schema.String),
          recommendedAction: Schema.optional(Schema.Array(Schema.String)),
          target: Schema.optional(Schema.String),
        }),
      ),
      provisioningState: Schema.optional(Schema.String),
      datasourceAuthCredentials: Schema.optional(
        Schema.Struct({
          objectType: Schema.String,
        }),
      ),
      validationType: Schema.optional(
        Schema.Literals(["ShallowValidation", "DeepValidation"]),
      ),
      identityDetails: Schema.optional(
        Schema.Struct({
          useSystemAssignedIdentity: Schema.optional(Schema.Boolean),
          userAssignedIdentityArmUrl: Schema.optional(Schema.String),
        }),
      ),
      objectType: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/validateForBackup",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesValidateForBackupInput>;

// Output Schema
export interface BackupInstancesValidateForBackupOutput {
  objectType: string;
}
export const BackupInstancesValidateForBackupOutput =
  /*@__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<BackupInstancesValidateForBackupOutput>;

// The operation
/**
 * Validate whether adhoc backup will be successful or not
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the BackupVaultResource
 */
export const BackupInstancesValidateForBackup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesValidateForBackupInput,
    outputSchema: BackupInstancesValidateForBackupOutput,
  }));
// Input Schema
export interface BackupInstancesValidateForModifyBackupInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  backupInstance: {
    friendlyName?: string;
    dataSourceInfo: {
      datasourceType?: string;
      objectType?: string;
      resourceID: string;
      resourceLocation?: string;
      resourceName?: string;
      resourceType?: string;
      resourceUri?: string;
      resourceProperties?: { objectType: "DefaultResourceProperties" };
    };
    dataSourceSetInfo?: {
      datasourceType?: string;
      objectType?: string;
      resourceID: string;
      resourceLocation?: string;
      resourceName?: string;
      resourceType?: string;
      resourceUri?: string;
      resourceProperties?: { objectType: "DefaultResourceProperties" };
    };
    policyInfo: {
      policyId: string;
      policyVersion?: string;
      policyParameters?: {
        dataStoreParametersList?: {
          objectType: string;
          dataStoreType: "OperationalStore" | "VaultStore" | "ArchiveStore";
        }[];
        backupDatasourceParametersList?: { objectType: string }[];
      };
    };
    resourceGuardOperationRequests?: string[];
    protectionStatus?: {
      errorDetails?: {
        code?: string;
        details?: unknown[];
        innerError?: {
          additionalInfo?: Record<string, string>;
          code?: string;
          embeddedInnerError?: unknown;
        };
        isRetryable?: boolean;
        isUserError?: boolean;
        properties?: Record<string, string>;
        message?: string;
        recommendedAction?: string[];
        target?: string;
      };
      status?:
        | "ConfiguringProtection"
        | "ConfiguringProtectionFailed"
        | "ProtectionConfigured"
        | "ProtectionStopped"
        | "SoftDeleted"
        | "SoftDeleting";
    };
    currentProtectionState?:
      | "Invalid"
      | "NotProtected"
      | "ConfiguringProtection"
      | "ProtectionConfigured"
      | "BackupSchedulesSuspended"
      | "RetentionSchedulesSuspended"
      | "ProtectionStopped"
      | "ProtectionError"
      | "ConfiguringProtectionFailed"
      | "SoftDeleting"
      | "SoftDeleted"
      | "UpdatingProtection";
    protectionErrorDetails?: {
      code?: string;
      details?: unknown[];
      innerError?: {
        additionalInfo?: Record<string, string>;
        code?: string;
        embeddedInnerError?: unknown;
      };
      isRetryable?: boolean;
      isUserError?: boolean;
      properties?: Record<string, string>;
      message?: string;
      recommendedAction?: string[];
      target?: string;
    };
    provisioningState?: string;
    datasourceAuthCredentials?: { objectType: string };
    validationType?: "ShallowValidation" | "DeepValidation";
    identityDetails?: {
      useSystemAssignedIdentity?: boolean;
      userAssignedIdentityArmUrl?: string;
    };
    objectType: string;
  };
}
export const BackupInstancesValidateForModifyBackupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    backupInstance: Schema.Struct({
      friendlyName: Schema.optional(Schema.String),
      dataSourceInfo: Schema.Struct({
        datasourceType: Schema.optional(Schema.String),
        objectType: Schema.optional(Schema.String),
        resourceID: Schema.String,
        resourceLocation: Schema.optional(Schema.String),
        resourceName: Schema.optional(Schema.String),
        resourceType: Schema.optional(Schema.String),
        resourceUri: Schema.optional(Schema.String),
        resourceProperties: Schema.optional(
          Schema.Struct({
            objectType: Schema.Literals(["DefaultResourceProperties"]),
          }),
        ),
      }),
      dataSourceSetInfo: Schema.optional(
        Schema.Struct({
          datasourceType: Schema.optional(Schema.String),
          objectType: Schema.optional(Schema.String),
          resourceID: Schema.String,
          resourceLocation: Schema.optional(Schema.String),
          resourceName: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceUri: Schema.optional(Schema.String),
          resourceProperties: Schema.optional(
            Schema.Struct({
              objectType: Schema.Literals(["DefaultResourceProperties"]),
            }),
          ),
        }),
      ),
      policyInfo: Schema.Struct({
        policyId: Schema.String,
        policyVersion: Schema.optional(Schema.String),
        policyParameters: Schema.optional(
          Schema.Struct({
            dataStoreParametersList: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  objectType: Schema.String,
                  dataStoreType: Schema.Literals([
                    "OperationalStore",
                    "VaultStore",
                    "ArchiveStore",
                  ]),
                }),
              ),
            ),
            backupDatasourceParametersList: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  objectType: Schema.String,
                }),
              ),
            ),
          }),
        ),
      }),
      resourceGuardOperationRequests: Schema.optional(
        Schema.Array(Schema.String),
      ),
      protectionStatus: Schema.optional(
        Schema.Struct({
          errorDetails: Schema.optional(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
              innerError: Schema.optional(
                Schema.Struct({
                  additionalInfo: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  code: Schema.optional(Schema.String),
                  embeddedInnerError: Schema.optional(Schema.Unknown),
                }),
              ),
              isRetryable: Schema.optional(Schema.Boolean),
              isUserError: Schema.optional(Schema.Boolean),
              properties: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              message: Schema.optional(Schema.String),
              recommendedAction: Schema.optional(Schema.Array(Schema.String)),
              target: Schema.optional(Schema.String),
            }),
          ),
          status: Schema.optional(
            Schema.Literals([
              "ConfiguringProtection",
              "ConfiguringProtectionFailed",
              "ProtectionConfigured",
              "ProtectionStopped",
              "SoftDeleted",
              "SoftDeleting",
            ]),
          ),
        }),
      ),
      currentProtectionState: Schema.optional(
        Schema.Literals([
          "Invalid",
          "NotProtected",
          "ConfiguringProtection",
          "ProtectionConfigured",
          "BackupSchedulesSuspended",
          "RetentionSchedulesSuspended",
          "ProtectionStopped",
          "ProtectionError",
          "ConfiguringProtectionFailed",
          "SoftDeleting",
          "SoftDeleted",
          "UpdatingProtection",
        ]),
      ),
      protectionErrorDetails: Schema.optional(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          details: Schema.optional(Schema.Array(Schema.Unknown)),
          innerError: Schema.optional(
            Schema.Struct({
              additionalInfo: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              code: Schema.optional(Schema.String),
              embeddedInnerError: Schema.optional(Schema.Unknown),
            }),
          ),
          isRetryable: Schema.optional(Schema.Boolean),
          isUserError: Schema.optional(Schema.Boolean),
          properties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          message: Schema.optional(Schema.String),
          recommendedAction: Schema.optional(Schema.Array(Schema.String)),
          target: Schema.optional(Schema.String),
        }),
      ),
      provisioningState: Schema.optional(Schema.String),
      datasourceAuthCredentials: Schema.optional(
        Schema.Struct({
          objectType: Schema.String,
        }),
      ),
      validationType: Schema.optional(
        Schema.Literals(["ShallowValidation", "DeepValidation"]),
      ),
      identityDetails: Schema.optional(
        Schema.Struct({
          useSystemAssignedIdentity: Schema.optional(Schema.Boolean),
          userAssignedIdentityArmUrl: Schema.optional(Schema.String),
        }),
      ),
      objectType: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/validateForModifyBackup",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesValidateForModifyBackupInput>;

// Output Schema
export type BackupInstancesValidateForModifyBackupOutput = void;
export const BackupInstancesValidateForModifyBackupOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupInstancesValidateForModifyBackupOutput>;

// The operation
/**
 * Validate whether update for backup instance will be successful or not
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesValidateForModifyBackup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesValidateForModifyBackupInput,
    outputSchema: BackupInstancesValidateForModifyBackupOutput,
  }));
// Input Schema
export interface BackupInstancesValidateForRestoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  restoreRequestObject: {
    objectType: string;
    restoreTargetInfo: {
      objectType: string;
      recoveryOption: "FailIfExists";
      restoreLocation?: string;
    };
    sourceDataStoreType:
      | "ArchiveStore"
      | "SnapshotStore"
      | "OperationalStore"
      | "VaultStore";
    sourceResourceId?: string;
    resourceGuardOperationRequests?: string[];
    identityDetails?: {
      useSystemAssignedIdentity?: boolean;
      userAssignedIdentityArmUrl?: string;
    };
  };
}
export const BackupInstancesValidateForRestoreInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    restoreRequestObject: Schema.Struct({
      objectType: Schema.String,
      restoreTargetInfo: Schema.Struct({
        objectType: Schema.String,
        recoveryOption: Schema.Literals(["FailIfExists"]),
        restoreLocation: Schema.optional(Schema.String),
      }),
      sourceDataStoreType: Schema.Literals([
        "ArchiveStore",
        "SnapshotStore",
        "OperationalStore",
        "VaultStore",
      ]),
      sourceResourceId: Schema.optional(Schema.String),
      resourceGuardOperationRequests: Schema.optional(
        Schema.Array(Schema.String),
      ),
      identityDetails: Schema.optional(
        Schema.Struct({
          useSystemAssignedIdentity: Schema.optional(Schema.Boolean),
          userAssignedIdentityArmUrl: Schema.optional(Schema.String),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/validateRestore",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupInstancesValidateForRestoreInput>;

// Output Schema
export interface BackupInstancesValidateForRestoreOutput {
  objectType: string;
}
export const BackupInstancesValidateForRestoreOutput =
  /*@__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<BackupInstancesValidateForRestoreOutput>;

// The operation
/**
 * Validates if Restore can be triggered for a DataSource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const BackupInstancesValidateForRestore =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupInstancesValidateForRestoreInput,
    outputSchema: BackupInstancesValidateForRestoreOutput,
  }));
// Input Schema
export interface BackupPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupPolicyName: string;
  properties?: { datasourceTypes: string[]; objectType: string };
}
export const BackupPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        datasourceTypes: Schema.Array(Schema.String),
        objectType: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupPolicies/{backupPolicyName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupPoliciesCreateOrUpdateInput>;

// Output Schema
export interface BackupPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupPoliciesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BackupPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or Updates a backup policy belonging to a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 */
export const BackupPoliciesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupPoliciesCreateOrUpdateInput,
    outputSchema: BackupPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface BackupPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupPolicyName: string;
}
export const BackupPoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupPolicies/{backupPolicyName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupPoliciesDeleteInput>;

// Output Schema
export type BackupPoliciesDeleteOutput = void;
export const BackupPoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupPoliciesDeleteOutput>;

// The operation
/**
 * Deletes a backup policy belonging to a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 */
export const BackupPoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupPoliciesDeleteInput,
  outputSchema: BackupPoliciesDeleteOutput,
}));
// Input Schema
export interface BackupPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupPolicyName: string;
}
export const BackupPoliciesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  backupPolicyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupPolicies/{backupPolicyName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<BackupPoliciesGetInput>;

// Output Schema
export interface BackupPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupPoliciesGetOutput =
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
  }) as unknown as Schema.Codec<BackupPoliciesGetOutput>;

// The operation
/**
 * Gets a backup policy belonging to a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 */
export const BackupPoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupPoliciesGetInput,
  outputSchema: BackupPoliciesGetOutput,
}));
// Input Schema
export interface BackupPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const BackupPoliciesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupPolicies",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupPoliciesListInput>;

// Output Schema
export interface BackupPoliciesListOutput {
  nextLink?: string;
}
export const BackupPoliciesListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupPoliciesListOutput>;

// The operation
/**
 * Returns list of backup policies belonging to a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 */
export const BackupPoliciesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupPoliciesListInput,
  outputSchema: BackupPoliciesListOutput,
}));
// Input Schema
export interface BackupVaultOperationResultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationId: string;
}
export const BackupVaultOperationResultsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/operationResults/{operationId}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultOperationResultsGetInput>;

// Output Schema
export interface BackupVaultOperationResultsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupVaultOperationResultsGetOutput =
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
  }) as unknown as Schema.Codec<BackupVaultOperationResultsGetOutput>;

// The operation
/**
 * Get a BackupVaultResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the BackupVaultResource
 * @param operationId - The name of the BackupVaultResource
 */
export const BackupVaultOperationResultsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupVaultOperationResultsGetInput,
    outputSchema: BackupVaultOperationResultsGetOutput,
  }));
// Input Schema
export interface BackupVaultsCheckNameAvailabilityInput {
  resourceGroupName: string;
  subscriptionId: string;
  location: string;
  name?: string;
  type?: string;
}
export const BackupVaultsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/locations/{location}/checkNameAvailability",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultsCheckNameAvailabilityInput>;

// Output Schema
export interface BackupVaultsCheckNameAvailabilityOutput {
  message?: string;
  nameAvailable?: boolean;
  reason?: string;
}
export const BackupVaultsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupVaultsCheckNameAvailabilityOutput>;

// The operation
/**
 * API to check for resource name availability
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const BackupVaultsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupVaultsCheckNameAvailabilityInput,
    outputSchema: BackupVaultsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface BackupVaultsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties: {
    monitoringSettings?: {
      azureMonitorAlertSettings?: {
        alertsForAllJobFailures?: "Enabled" | "Disabled";
      };
    };
    provisioningState?:
      | "Failed"
      | "Provisioning"
      | "Succeeded"
      | "Unknown"
      | "Updating";
    resourceMoveState?:
      | "Unknown"
      | "InProgress"
      | "PrepareFailed"
      | "CommitFailed"
      | "Failed"
      | "PrepareTimedout"
      | "CommitTimedout"
      | "CriticalFailure"
      | "PartialSuccess"
      | "MoveSucceeded";
    resourceMoveDetails?: {
      operationId?: string;
      startTimeUtc?: string;
      completionTimeUtc?: string;
      sourceResourcePath?: string;
      targetResourcePath?: string;
    };
    securitySettings?: {
      softDeleteSettings?: {
        state?: "Off" | "On" | "AlwaysOn";
        retentionDurationInDays?: number;
      };
      immutabilitySettings?: { state?: "Disabled" | "Unlocked" | "Locked" };
      encryptionSettings?: {
        state?: "Enabled" | "Disabled" | "Inconsistent";
        keyVaultProperties?: { keyUri?: string };
        kekIdentity?: {
          identityType?: "SystemAssigned" | "UserAssigned";
          identityId?: string;
        };
        infrastructureEncryption?: "Enabled" | "Disabled";
      };
    };
    storageSettings?: {
      datastoreType?: "ArchiveStore" | "OperationalStore" | "VaultStore";
      type?: "GeoRedundant" | "LocallyRedundant" | "ZoneRedundant";
    }[];
    isVaultProtectedByResourceGuard?: boolean;
    featureSettings?: {
      crossSubscriptionRestoreSettings?: {
        state?: "Disabled" | "PermanentlyDisabled" | "Enabled";
      };
      crossRegionRestoreSettings?: { state?: "Disabled" | "Enabled" };
    };
    secureScore?: "None" | "Minimum" | "Adequate" | "Maximum" | "NotSupported";
    bcdrSecurityLevel?: "Poor" | "Fair" | "Good" | "Excellent" | "NotSupported";
    resourceGuardOperationRequests?: string[];
    replicatedRegions?: string[];
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  eTag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const BackupVaultsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      monitoringSettings: Schema.optional(
        Schema.Struct({
          azureMonitorAlertSettings: Schema.optional(
            Schema.Struct({
              alertsForAllJobFailures: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
            }),
          ),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Failed",
          "Provisioning",
          "Succeeded",
          "Unknown",
          "Updating",
        ]),
      ),
      resourceMoveState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "InProgress",
          "PrepareFailed",
          "CommitFailed",
          "Failed",
          "PrepareTimedout",
          "CommitTimedout",
          "CriticalFailure",
          "PartialSuccess",
          "MoveSucceeded",
        ]),
      ),
      resourceMoveDetails: Schema.optional(
        Schema.Struct({
          operationId: Schema.optional(Schema.String),
          startTimeUtc: Schema.optional(Schema.String),
          completionTimeUtc: Schema.optional(Schema.String),
          sourceResourcePath: Schema.optional(Schema.String),
          targetResourcePath: Schema.optional(Schema.String),
        }),
      ),
      securitySettings: Schema.optional(
        Schema.Struct({
          softDeleteSettings: Schema.optional(
            Schema.Struct({
              state: Schema.optional(
                Schema.Literals(["Off", "On", "AlwaysOn"]),
              ),
              retentionDurationInDays: Schema.optional(Schema.Number),
            }),
          ),
          immutabilitySettings: Schema.optional(
            Schema.Struct({
              state: Schema.optional(
                Schema.Literals(["Disabled", "Unlocked", "Locked"]),
              ),
            }),
          ),
          encryptionSettings: Schema.optional(
            Schema.Struct({
              state: Schema.optional(
                Schema.Literals(["Enabled", "Disabled", "Inconsistent"]),
              ),
              keyVaultProperties: Schema.optional(
                Schema.Struct({
                  keyUri: Schema.optional(Schema.String),
                }),
              ),
              kekIdentity: Schema.optional(
                Schema.Struct({
                  identityType: Schema.optional(
                    Schema.Literals(["SystemAssigned", "UserAssigned"]),
                  ),
                  identityId: Schema.optional(Schema.String),
                }),
              ),
              infrastructureEncryption: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
            }),
          ),
        }),
      ),
      storageSettings: Schema.optional(
        Schema.Array(
          Schema.Struct({
            datastoreType: Schema.optional(
              Schema.Literals([
                "ArchiveStore",
                "OperationalStore",
                "VaultStore",
              ]),
            ),
            type: Schema.optional(
              Schema.Literals([
                "GeoRedundant",
                "LocallyRedundant",
                "ZoneRedundant",
              ]),
            ),
          }),
        ),
      ),
      isVaultProtectedByResourceGuard: Schema.optional(Schema.Boolean),
      featureSettings: Schema.optional(
        Schema.Struct({
          crossSubscriptionRestoreSettings: Schema.optional(
            Schema.Struct({
              state: Schema.optional(
                Schema.Literals(["Disabled", "PermanentlyDisabled", "Enabled"]),
              ),
            }),
          ),
          crossRegionRestoreSettings: Schema.optional(
            Schema.Struct({
              state: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
            }),
          ),
        }),
      ),
      secureScore: Schema.optional(
        Schema.Literals([
          "None",
          "Minimum",
          "Adequate",
          "Maximum",
          "NotSupported",
        ]),
      ),
      bcdrSecurityLevel: Schema.optional(
        Schema.Literals(["Poor", "Fair", "Good", "Excellent", "NotSupported"]),
      ),
      resourceGuardOperationRequests: Schema.optional(
        Schema.Array(Schema.String),
      ),
      replicatedRegions: Schema.optional(Schema.Array(Schema.String)),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
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
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultsCreateOrUpdateInput>;

// Output Schema
export interface BackupVaultsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupVaultsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BackupVaultsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a BackupVault resource belonging to a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the BackupVaultResource
 * @param x-ms-deleted-vault-id - The ID of the deleted backup vault to restore from during undelete flow.
 */
export const BackupVaultsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupVaultsCreateOrUpdateInput,
  outputSchema: BackupVaultsCreateOrUpdateOutput,
}));
// Input Schema
export interface BackupVaultsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const BackupVaultsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultsDeleteInput>;

// Output Schema
export type BackupVaultsDeleteOutput = void;
export const BackupVaultsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupVaultsDeleteOutput>;

// The operation
/**
 * Deletes a BackupVault resource from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the BackupVaultResource
 */
export const BackupVaultsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupVaultsDeleteInput,
  outputSchema: BackupVaultsDeleteOutput,
}));
// Input Schema
export interface BackupVaultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const BackupVaultsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<BackupVaultsGetInput>;

// Output Schema
export interface BackupVaultsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupVaultsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<BackupVaultsGetOutput>;

// The operation
/**
 * Returns a resource belonging to a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the BackupVaultResource
 */
export const BackupVaultsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupVaultsGetInput,
  outputSchema: BackupVaultsGetOutput,
}));
// Input Schema
export interface BackupVaultsGetInResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const BackupVaultsGetInResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultsGetInResourceGroupInput>;

// Output Schema
export interface BackupVaultsGetInResourceGroupOutput {
  nextLink?: string;
}
export const BackupVaultsGetInResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupVaultsGetInResourceGroupOutput>;

// The operation
/**
 * Returns resource collection belonging to a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const BackupVaultsGetInResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupVaultsGetInResourceGroupInput,
    outputSchema: BackupVaultsGetInResourceGroupOutput,
  }));
// Input Schema
export interface BackupVaultsGetInSubscriptionInput {
  subscriptionId: string;
}
export const BackupVaultsGetInSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/backupVaults",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultsGetInSubscriptionInput>;

// Output Schema
export interface BackupVaultsGetInSubscriptionOutput {
  nextLink?: string;
}
export const BackupVaultsGetInSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupVaultsGetInSubscriptionOutput>;

// The operation
/**
 * Returns resource collection belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const BackupVaultsGetInSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BackupVaultsGetInSubscriptionInput,
    outputSchema: BackupVaultsGetInSubscriptionOutput,
  }));
// Input Schema
export interface BackupVaultsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties?: {
    monitoringSettings?: {
      azureMonitorAlertSettings?: {
        alertsForAllJobFailures?: "Enabled" | "Disabled";
      };
    };
    securitySettings?: {
      softDeleteSettings?: {
        state?: "Off" | "On" | "AlwaysOn";
        retentionDurationInDays?: number;
      };
      immutabilitySettings?: { state?: "Disabled" | "Unlocked" | "Locked" };
      encryptionSettings?: {
        state?: "Enabled" | "Disabled" | "Inconsistent";
        keyVaultProperties?: { keyUri?: string };
        kekIdentity?: {
          identityType?: "SystemAssigned" | "UserAssigned";
          identityId?: string;
        };
        infrastructureEncryption?: "Enabled" | "Disabled";
      };
    };
    featureSettings?: {
      crossSubscriptionRestoreSettings?: {
        state?: "Disabled" | "PermanentlyDisabled" | "Enabled";
      };
      crossRegionRestoreSettings?: { state?: "Disabled" | "Enabled" };
    };
    resourceGuardOperationRequests?: string[];
  };
  tags?: Record<string, string>;
}
export const BackupVaultsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
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
        monitoringSettings: Schema.optional(
          Schema.Struct({
            azureMonitorAlertSettings: Schema.optional(
              Schema.Struct({
                alertsForAllJobFailures: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
              }),
            ),
          }),
        ),
        securitySettings: Schema.optional(
          Schema.Struct({
            softDeleteSettings: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Off", "On", "AlwaysOn"]),
                ),
                retentionDurationInDays: Schema.optional(Schema.Number),
              }),
            ),
            immutabilitySettings: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Disabled", "Unlocked", "Locked"]),
                ),
              }),
            ),
            encryptionSettings: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled", "Inconsistent"]),
                ),
                keyVaultProperties: Schema.optional(
                  Schema.Struct({
                    keyUri: Schema.optional(Schema.String),
                  }),
                ),
                kekIdentity: Schema.optional(
                  Schema.Struct({
                    identityType: Schema.optional(
                      Schema.Literals(["SystemAssigned", "UserAssigned"]),
                    ),
                    identityId: Schema.optional(Schema.String),
                  }),
                ),
                infrastructureEncryption: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
              }),
            ),
          }),
        ),
        featureSettings: Schema.optional(
          Schema.Struct({
            crossSubscriptionRestoreSettings: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals([
                    "Disabled",
                    "PermanentlyDisabled",
                    "Enabled",
                  ]),
                ),
              }),
            ),
            crossRegionRestoreSettings: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Disabled", "Enabled"]),
                ),
              }),
            ),
          }),
        ),
        resourceGuardOperationRequests: Schema.optional(
          Schema.Array(Schema.String),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultsUpdateInput>;

// Output Schema
export interface BackupVaultsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupVaultsUpdateOutput =
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
  }) as unknown as Schema.Codec<BackupVaultsUpdateOutput>;

// The operation
/**
 * Updates a BackupVault resource belonging to a resource group. For example, updating tags for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the BackupVaultResource
 */
export const BackupVaultsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BackupVaultsUpdateInput,
  outputSchema: BackupVaultsUpdateOutput,
}));
// Input Schema
export interface DataProtectionCheckFeatureSupportInput {
  subscriptionId: string;
  location: string;
  objectType: string;
}
export const DataProtectionCheckFeatureSupportInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    objectType: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/locations/{location}/checkFeatureSupport",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DataProtectionCheckFeatureSupportInput>;

// Output Schema
export interface DataProtectionCheckFeatureSupportOutput {
  objectType: string;
}
export const DataProtectionCheckFeatureSupportOutput =
  /*@__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<DataProtectionCheckFeatureSupportOutput>;

// The operation
/**
 * Validates if a feature is supported
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const DataProtectionCheckFeatureSupport =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataProtectionCheckFeatureSupportInput,
    outputSchema: DataProtectionCheckFeatureSupportOutput,
  }));
// Input Schema
export interface DataProtectionOperationsListInput {}
export const DataProtectionOperationsListInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.DataProtection/operations",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DataProtectionOperationsListInput>;

// Output Schema
export interface DataProtectionOperationsListOutput {
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
export const DataProtectionOperationsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DataProtectionOperationsListOutput>;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const DataProtectionOperationsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataProtectionOperationsListInput,
    outputSchema: DataProtectionOperationsListOutput,
  }));
// Input Schema
export interface DeletedBackupInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
}
export const DeletedBackupInstancesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/deletedBackupInstances/{backupInstanceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DeletedBackupInstancesGetInput>;

// Output Schema
export interface DeletedBackupInstancesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DeletedBackupInstancesGetOutput =
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
  }) as unknown as Schema.Codec<DeletedBackupInstancesGetOutput>;

// The operation
/**
 * Gets a deleted backup instance with name in a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the deleted backup instance
 */
export const DeletedBackupInstancesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeletedBackupInstancesGetInput,
  outputSchema: DeletedBackupInstancesGetOutput,
}));
// Input Schema
export interface DeletedBackupInstancesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const DeletedBackupInstancesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/deletedBackupInstances",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DeletedBackupInstancesListInput>;

// Output Schema
export interface DeletedBackupInstancesListOutput {
  nextLink?: string;
}
export const DeletedBackupInstancesListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DeletedBackupInstancesListOutput>;

// The operation
/**
 * Gets deleted backup instances belonging to a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 */
export const DeletedBackupInstancesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeletedBackupInstancesListInput,
  outputSchema: DeletedBackupInstancesListOutput,
}));
// Input Schema
export interface DeletedBackupInstancesUndeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
}
export const DeletedBackupInstancesUndeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/deletedBackupInstances/{backupInstanceName}/undelete",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DeletedBackupInstancesUndeleteInput>;

// Output Schema
export type DeletedBackupInstancesUndeleteOutput = void;
export const DeletedBackupInstancesUndeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeletedBackupInstancesUndeleteOutput>;

// The operation
/**
 * A long-running resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the deleted backup instance
 */
export const DeletedBackupInstancesUndelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeletedBackupInstancesUndeleteInput,
    outputSchema: DeletedBackupInstancesUndeleteOutput,
  }));
// Input Schema
export interface DeletedBackupVaultsGetInput {
  subscriptionId: string;
  location: string;
  deletedVaultName: string;
}
export const DeletedBackupVaultsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    deletedVaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/locations/{location}/deletedVaults/{deletedVaultName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DeletedBackupVaultsGetInput>;

// Output Schema
export interface DeletedBackupVaultsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DeletedBackupVaultsGetOutput =
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
  }) as unknown as Schema.Codec<DeletedBackupVaultsGetOutput>;

// The operation
/**
 * Gets a deleted backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param deletedVaultName - The name of the DeletedBackupVaultResource
 */
export const DeletedBackupVaultsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeletedBackupVaultsGetInput,
  outputSchema: DeletedBackupVaultsGetOutput,
}));
// Input Schema
export interface DeletedBackupVaultsListByLocationInput {
  subscriptionId: string;
  location: string;
}
export const DeletedBackupVaultsListByLocationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/locations/{location}/deletedVaults",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DeletedBackupVaultsListByLocationInput>;

// Output Schema
export interface DeletedBackupVaultsListByLocationOutput {
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
export const DeletedBackupVaultsListByLocationOutput =
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
  }) as unknown as Schema.Codec<DeletedBackupVaultsListByLocationOutput>;

// The operation
/**
 * Lists deleted backup vaults by location
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const DeletedBackupVaultsListByLocation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeletedBackupVaultsListByLocationInput,
    outputSchema: DeletedBackupVaultsListByLocationOutput,
  }));
// Input Schema
export interface DppResourceGuardProxyCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  resourceGuardProxyName: string;
  properties?: {
    resourceGuardResourceId?: string;
    resourceGuardOperationDetails?: {
      vaultCriticalOperation?: string;
      defaultResourceRequest?: string;
    }[];
    lastUpdatedTime?: string;
    description?: string;
  };
}
export const DppResourceGuardProxyCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGuardProxyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        resourceGuardResourceId: Schema.optional(Schema.String),
        resourceGuardOperationDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              vaultCriticalOperation: Schema.optional(Schema.String),
              defaultResourceRequest: Schema.optional(Schema.String),
            }),
          ),
        ),
        lastUpdatedTime: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DppResourceGuardProxyCreateOrUpdateInput>;

// Output Schema
export interface DppResourceGuardProxyCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DppResourceGuardProxyCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DppResourceGuardProxyCreateOrUpdateOutput>;

// The operation
/**
 * Creates or Updates a ResourceGuardProxy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param resourceGuardProxyName - name of the resource guard proxy
 */
export const DppResourceGuardProxyCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DppResourceGuardProxyCreateOrUpdateInput,
    outputSchema: DppResourceGuardProxyCreateOrUpdateOutput,
  }));
// Input Schema
export interface DppResourceGuardProxyDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  resourceGuardProxyName: string;
}
export const DppResourceGuardProxyDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGuardProxyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DppResourceGuardProxyDeleteInput>;

// Output Schema
export type DppResourceGuardProxyDeleteOutput = void;
export const DppResourceGuardProxyDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DppResourceGuardProxyDeleteOutput>;

// The operation
/**
 * Deletes the ResourceGuardProxy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param resourceGuardProxyName - name of the resource guard proxy
 */
export const DppResourceGuardProxyDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DppResourceGuardProxyDeleteInput,
  outputSchema: DppResourceGuardProxyDeleteOutput,
}));
// Input Schema
export interface DppResourceGuardProxyGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  resourceGuardProxyName: string;
}
export const DppResourceGuardProxyGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGuardProxyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DppResourceGuardProxyGetInput>;

// Output Schema
export interface DppResourceGuardProxyGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DppResourceGuardProxyGetOutput =
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
  }) as unknown as Schema.Codec<DppResourceGuardProxyGetOutput>;

// The operation
/**
 * Returns the ResourceGuardProxy object associated with the vault, and that matches the name in the request
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param resourceGuardProxyName - name of the resource guard proxy
 */
export const DppResourceGuardProxyGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DppResourceGuardProxyGetInput,
  outputSchema: DppResourceGuardProxyGetOutput,
}));
// Input Schema
export interface DppResourceGuardProxyListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const DppResourceGuardProxyListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupResourceGuardProxies",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DppResourceGuardProxyListInput>;

// Output Schema
export interface DppResourceGuardProxyListOutput {
  nextLink?: string;
}
export const DppResourceGuardProxyListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DppResourceGuardProxyListOutput>;

// The operation
/**
 * Returns the list of ResourceGuardProxies associated with the vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 */
export const DppResourceGuardProxyList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DppResourceGuardProxyListInput,
  outputSchema: DppResourceGuardProxyListOutput,
}));
// Input Schema
export interface DppResourceGuardProxyUnlockDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  resourceGuardProxyName: string;
  resourceGuardOperationRequests?: string[];
  resourceToBeDeleted?: string;
}
export const DppResourceGuardProxyUnlockDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGuardProxyName: Schema.String.pipe(T.PathParam()),
    resourceGuardOperationRequests: Schema.optional(
      Schema.Array(Schema.String),
    ),
    resourceToBeDeleted: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}/unlockDelete",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DppResourceGuardProxyUnlockDeleteInput>;

// Output Schema
export interface DppResourceGuardProxyUnlockDeleteOutput {
  unlockDeleteExpiryTime?: string;
}
export const DppResourceGuardProxyUnlockDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    unlockDeleteExpiryTime: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DppResourceGuardProxyUnlockDeleteOutput>;

// The operation
/**
 * UnlockDelete call for ResourceGuardProxy, executed before one can delete it
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param resourceGuardProxyName - name of the resource guard proxy
 */
export const DppResourceGuardProxyUnlockDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DppResourceGuardProxyUnlockDeleteInput,
    outputSchema: DppResourceGuardProxyUnlockDeleteOutput,
  }));
// Input Schema
export interface ExportJobsOperationResultGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationId: string;
}
export const ExportJobsOperationResultGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupJobs/operations/{operationId}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ExportJobsOperationResultGetInput>;

// Output Schema
export interface ExportJobsOperationResultGetOutput {
  blobUrl?: string;
  blobSasKey?: string;
  excelFileBlobUrl?: string;
  excelFileBlobSasKey?: string;
}
export const ExportJobsOperationResultGetOutput =
  /*@__PURE__*/ Schema.Struct({
    blobUrl: Schema.optional(Schema.String),
    blobSasKey: Schema.optional(Schema.String),
    excelFileBlobUrl: Schema.optional(Schema.String),
    excelFileBlobSasKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ExportJobsOperationResultGetOutput>;

// The operation
/**
 * Gets the operation result of operation triggered by Export Jobs API. If the operation is successful, then it also contains URL of a Blob and a SAS key to access the same. The blob contains exported jobs in JSON serialized format.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the BackupVaultResource
 * @param operationId - OperationID which represents the export job.
 */
export const ExportJobsOperationResultGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExportJobsOperationResultGetInput,
    outputSchema: ExportJobsOperationResultGetOutput,
  }));
// Input Schema
export interface ExportJobsTriggerInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const ExportJobsTriggerInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/exportBackupJobs",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ExportJobsTriggerInput>;

// Output Schema
export type ExportJobsTriggerOutput = void;
export const ExportJobsTriggerOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExportJobsTriggerOutput>;

// The operation
/**
 * Triggers export of jobs and returns an OperationID to track.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the BackupVaultResource
 */
export const ExportJobsTrigger = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExportJobsTriggerInput,
  outputSchema: ExportJobsTriggerOutput,
}));
// Input Schema
export interface FetchCrossRegionRestoreJobGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  location: string;
  sourceRegion: string;
  sourceBackupVaultId: string;
  jobId: string;
}
export const FetchCrossRegionRestoreJobGetInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    sourceRegion: Schema.String,
    sourceBackupVaultId: Schema.String,
    jobId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/locations/{location}/fetchCrossRegionRestoreJob",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FetchCrossRegionRestoreJobGetInput>;

// Output Schema
export interface FetchCrossRegionRestoreJobGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const FetchCrossRegionRestoreJobGetOutput =
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
  }) as unknown as Schema.Codec<FetchCrossRegionRestoreJobGetOutput>;

// The operation
/**
 * Fetches the Cross Region Restore Job
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const FetchCrossRegionRestoreJobGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FetchCrossRegionRestoreJobGetInput,
    outputSchema: FetchCrossRegionRestoreJobGetOutput,
  }));
// Input Schema
export interface FetchCrossRegionRestoreJobsListInput {
  resourceGroupName: string;
  subscriptionId: string;
  location: string;
  $filter?: string;
  sourceRegion: string;
  sourceBackupVaultId: string;
}
export const FetchCrossRegionRestoreJobsListInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    sourceRegion: Schema.String,
    sourceBackupVaultId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/locations/{location}/fetchCrossRegionRestoreJobs",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FetchCrossRegionRestoreJobsListInput>;

// Output Schema
export interface FetchCrossRegionRestoreJobsListOutput {
  nextLink?: string;
}
export const FetchCrossRegionRestoreJobsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FetchCrossRegionRestoreJobsListOutput>;

// The operation
/**
 * Fetches list of Cross Region Restore job belonging to the vault
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param $filter - OData filter options.
 */
export const FetchCrossRegionRestoreJobsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FetchCrossRegionRestoreJobsListInput,
    outputSchema: FetchCrossRegionRestoreJobsListOutput,
  }));
// Input Schema
export interface FetchSecondaryRecoveryPointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  $filter?: string;
  $skipToken?: string;
  sourceRegion?: string;
  sourceBackupInstanceId?: string;
}
export const FetchSecondaryRecoveryPointsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
    sourceRegion: Schema.optional(Schema.String),
    sourceBackupInstanceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/locations/{location}/fetchSecondaryRecoveryPoints",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FetchSecondaryRecoveryPointsListInput>;

// Output Schema
export interface FetchSecondaryRecoveryPointsListOutput {
  nextLink?: string;
}
export const FetchSecondaryRecoveryPointsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FetchSecondaryRecoveryPointsListOutput>;

// The operation
/**
 * Returns a list of Secondary Recovery Points for a DataSource in a vault, that can be used for Cross Region Restore.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of the Azure region.
 * @param $filter - OData filter options.
 * @param $skipToken - skipToken Filter.
 */
export const FetchSecondaryRecoveryPointsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FetchSecondaryRecoveryPointsListInput,
    outputSchema: FetchSecondaryRecoveryPointsListOutput,
  }));
// Input Schema
export interface JobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  jobId: string;
}
export const JobsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  jobId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupJobs/{jobId}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<JobsGetInput>;

// Output Schema
export interface JobsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const JobsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<JobsGetOutput>;

// The operation
/**
 * Gets a job with id in a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param jobId - The Job ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 */
export const JobsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsGetInput,
  outputSchema: JobsGetOutput,
}));
// Input Schema
export interface JobsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const JobsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupJobs",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<JobsListInput>;

// Output Schema
export interface JobsListOutput {
  nextLink?: string;
}
export const JobsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<JobsListOutput>;

// The operation
/**
 * Returns list of jobs belonging to a backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 */
export const JobsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsListInput,
  outputSchema: JobsListOutput,
}));
// Input Schema
export interface OperationResultGetInput {
  subscriptionId: string;
  operationId: string;
  location: string;
}
export const OperationResultGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/locations/{location}/operationResults/{operationId}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OperationResultGetInput>;

// Output Schema
export interface OperationResultGetOutput {
  objectType: string;
}
export const OperationResultGetOutput =
  /*@__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<OperationResultGetOutput>;

// The operation
/**
 * Gets the operation status for a resource.
 *
 * Gets the operation result for a resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const OperationResultGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationResultGetInput,
  outputSchema: OperationResultGetOutput,
}));
// Input Schema
export interface OperationStatusBackupVaultContextGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationId: string;
}
export const OperationStatusBackupVaultContextGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/operationStatus/{operationId}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OperationStatusBackupVaultContextGetInput>;

// Output Schema
export interface OperationStatusBackupVaultContextGetOutput {
  endTime?: string;
  error?: {
    additionalInfo?: { type?: string; info?: unknown }[];
    code?: string;
    details?: unknown[];
    message?: string;
    target?: string;
  };
  id?: string;
  name?: string;
  properties?: { objectType: string };
  startTime?: string;
  status?: string;
}
export const OperationStatusBackupVaultContextGetOutput =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        code: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
      }),
    ),
    startTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OperationStatusBackupVaultContextGetOutput>;

// The operation
/**
 * Gets the operation status for an operation over a BackupVault's context.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the BackupVaultResource
 */
export const OperationStatusBackupVaultContextGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OperationStatusBackupVaultContextGetInput,
    outputSchema: OperationStatusBackupVaultContextGetOutput,
  }));
// Input Schema
export interface OperationStatusGetInput {
  subscriptionId: string;
  location: string;
  operationId: string;
}
export const OperationStatusGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/locations/{location}/operationStatus/{operationId}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OperationStatusGetInput>;

// Output Schema
export interface OperationStatusGetOutput {
  endTime?: string;
  error?: {
    additionalInfo?: { type?: string; info?: unknown }[];
    code?: string;
    details?: unknown[];
    message?: string;
    target?: string;
  };
  id?: string;
  name?: string;
  properties?: { objectType: string };
  startTime?: string;
  status?: string;
}
export const OperationStatusGetOutput =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        code: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
      }),
    ),
    startTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OperationStatusGetOutput>;

// The operation
/**
 * Gets the operation status for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const OperationStatusGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationStatusGetInput,
  outputSchema: OperationStatusGetOutput,
}));
// Input Schema
export interface OperationStatusResourceGroupContextGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  operationId: string;
}
export const OperationStatusResourceGroupContextGetInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/operationStatus/{operationId}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OperationStatusResourceGroupContextGetInput>;

// Output Schema
export interface OperationStatusResourceGroupContextGetOutput {
  endTime?: string;
  error?: {
    additionalInfo?: { type?: string; info?: unknown }[];
    code?: string;
    details?: unknown[];
    message?: string;
    target?: string;
  };
  id?: string;
  name?: string;
  properties?: { objectType: string };
  startTime?: string;
  status?: string;
}
export const OperationStatusResourceGroupContextGetOutput =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        code: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
      }),
    ),
    startTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OperationStatusResourceGroupContextGetOutput>;

// The operation
/**
 * Gets the operation status for an operation over a ResourceGroup's context.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const OperationStatusResourceGroupContextGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OperationStatusResourceGroupContextGetInput,
    outputSchema: OperationStatusResourceGroupContextGetOutput,
  }));
// Input Schema
export interface RecoveryPointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  recoveryPointId: string;
}
export const RecoveryPointsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  backupInstanceName: Schema.String.pipe(T.PathParam()),
  recoveryPointId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/recoveryPoints/{recoveryPointId}",
    apiVersion: "2026-03-01",
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
  }) as unknown as Schema.Codec<RecoveryPointsGetOutput>;

// The operation
/**
 * Gets a Recovery Point using recoveryPointId for a Datasource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the backup instance.
 */
export const RecoveryPointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecoveryPointsGetInput,
  outputSchema: RecoveryPointsGetOutput,
}));
// Input Schema
export interface RecoveryPointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  $filter?: string;
  $skipToken?: string;
}
export const RecoveryPointsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/recoveryPoints",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RecoveryPointsListInput>;

// Output Schema
export interface RecoveryPointsListOutput {
  nextLink?: string;
}
export const RecoveryPointsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RecoveryPointsListOutput>;

// The operation
/**
 * Returns a list of Recovery Points for a DataSource in a vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the backup instance.
 * @param $filter - OData filter options.
 * @param $skipToken - skipToken Filter.
 */
export const RecoveryPointsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecoveryPointsListInput,
  outputSchema: RecoveryPointsListOutput,
}));
// Input Schema
export interface ResourceGuardsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
}
export const ResourceGuardsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsDeleteInput>;

// Output Schema
export type ResourceGuardsDeleteOutput = void;
export const ResourceGuardsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ResourceGuardsDeleteOutput>;

// The operation
/**
 * Deletes a ResourceGuard resource from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of ResourceGuard
 */
export const ResourceGuardsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ResourceGuardsDeleteInput,
  outputSchema: ResourceGuardsDeleteOutput,
}));
// Input Schema
export interface ResourceGuardsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
}
export const ResourceGuardsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceGuardsName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ResourceGuardsGetInput>;

// Output Schema
export interface ResourceGuardsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardsGetOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetOutput>;

// The operation
/**
 * Returns a ResourceGuard belonging to a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of ResourceGuard
 */
export const ResourceGuardsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ResourceGuardsGetInput,
  outputSchema: ResourceGuardsGetOutput,
}));
// Input Schema
export interface ResourceGuardsGetBackupSecurityPINRequestsObjectsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
}
export const ResourceGuardsGetBackupSecurityPINRequestsObjectsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/getBackupSecurityPINRequests",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetBackupSecurityPINRequestsObjectsInput>;

// Output Schema
export interface ResourceGuardsGetBackupSecurityPINRequestsObjectsOutput {
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
export const ResourceGuardsGetBackupSecurityPINRequestsObjectsOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetBackupSecurityPINRequestsObjectsOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 */
export const ResourceGuardsGetBackupSecurityPINRequestsObjects =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetBackupSecurityPINRequestsObjectsInput,
    outputSchema: ResourceGuardsGetBackupSecurityPINRequestsObjectsOutput,
  }));
// Input Schema
export interface ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
  requestName: string;
}
export const ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
    requestName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/getBackupSecurityPINRequests/{requestName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectInput>;

// Output Schema
export interface ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 * @param requestName - The name of the DppBaseResource
 */
export const ResourceGuardsGetDefaultBackupSecurityPINRequestsObject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectInput,
    outputSchema: ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectOutput,
  }));
// Input Schema
export interface ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
  requestName: string;
}
export const ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
    requestName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/deleteProtectedItemRequests/{requestName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectInput>;

// Output Schema
export interface ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 * @param requestName - The name of the DppBaseResource
 */
export const ResourceGuardsGetDefaultDeleteProtectedItemRequestsObject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectInput,
    outputSchema:
      ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectOutput,
  }));
// Input Schema
export interface ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
  requestName: string;
}
export const ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
    requestName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/deleteResourceGuardProxyRequests/{requestName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectInput>;

// Output Schema
export interface ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 * @param requestName - The name of the DppBaseResource
 */
export const ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectInput,
    outputSchema:
      ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectOutput,
  }));
// Input Schema
export interface ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
  requestName: string;
}
export const ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
    requestName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/disableSoftDeleteRequests/{requestName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectInput>;

// Output Schema
export interface ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 * @param requestName - The name of the DppBaseResource
 */
export const ResourceGuardsGetDefaultDisableSoftDeleteRequestsObject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectInput,
    outputSchema: ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectOutput,
  }));
// Input Schema
export interface ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
  requestName: string;
}
export const ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
    requestName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/updateProtectedItemRequests/{requestName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectInput>;

// Output Schema
export interface ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 * @param requestName - The name of the DppBaseResource
 */
export const ResourceGuardsGetDefaultUpdateProtectedItemRequestsObject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectInput,
    outputSchema:
      ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectOutput,
  }));
// Input Schema
export interface ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
  requestName: string;
}
export const ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
    requestName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/updateProtectionPolicyRequests/{requestName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectInput>;

// Output Schema
export interface ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 * @param requestName - The name of the DppBaseResource
 */
export const ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectInput,
    outputSchema:
      ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectOutput,
  }));
// Input Schema
export interface ResourceGuardsGetDeleteProtectedItemRequestsObjectsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
}
export const ResourceGuardsGetDeleteProtectedItemRequestsObjectsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/deleteProtectedItemRequests",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetDeleteProtectedItemRequestsObjectsInput>;

// Output Schema
export interface ResourceGuardsGetDeleteProtectedItemRequestsObjectsOutput {
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
export const ResourceGuardsGetDeleteProtectedItemRequestsObjectsOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetDeleteProtectedItemRequestsObjectsOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 */
export const ResourceGuardsGetDeleteProtectedItemRequestsObjects =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetDeleteProtectedItemRequestsObjectsInput,
    outputSchema: ResourceGuardsGetDeleteProtectedItemRequestsObjectsOutput,
  }));
// Input Schema
export interface ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
}
export const ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/deleteResourceGuardProxyRequests",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsInput>;

// Output Schema
export interface ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsOutput {
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
export const ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 */
export const ResourceGuardsGetDeleteResourceGuardProxyRequestsObjects =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsInput,
    outputSchema:
      ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsOutput,
  }));
// Input Schema
export interface ResourceGuardsGetDisableSoftDeleteRequestsObjectsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
}
export const ResourceGuardsGetDisableSoftDeleteRequestsObjectsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/disableSoftDeleteRequests",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetDisableSoftDeleteRequestsObjectsInput>;

// Output Schema
export interface ResourceGuardsGetDisableSoftDeleteRequestsObjectsOutput {
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
export const ResourceGuardsGetDisableSoftDeleteRequestsObjectsOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetDisableSoftDeleteRequestsObjectsOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 */
export const ResourceGuardsGetDisableSoftDeleteRequestsObjects =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetDisableSoftDeleteRequestsObjectsInput,
    outputSchema: ResourceGuardsGetDisableSoftDeleteRequestsObjectsOutput,
  }));
// Input Schema
export interface ResourceGuardsGetResourcesInResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ResourceGuardsGetResourcesInResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetResourcesInResourceGroupInput>;

// Output Schema
export interface ResourceGuardsGetResourcesInResourceGroupOutput {
  nextLink?: string;
}
export const ResourceGuardsGetResourcesInResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ResourceGuardsGetResourcesInResourceGroupOutput>;

// The operation
/**
 * Returns ResourceGuards collection belonging to a ResourceGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ResourceGuardsGetResourcesInResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetResourcesInResourceGroupInput,
    outputSchema: ResourceGuardsGetResourcesInResourceGroupOutput,
  }));
// Input Schema
export interface ResourceGuardsGetResourcesInSubscriptionInput {
  subscriptionId: string;
}
export const ResourceGuardsGetResourcesInSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataProtection/resourceGuards",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetResourcesInSubscriptionInput>;

// Output Schema
export interface ResourceGuardsGetResourcesInSubscriptionOutput {
  nextLink?: string;
}
export const ResourceGuardsGetResourcesInSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ResourceGuardsGetResourcesInSubscriptionOutput>;

// The operation
/**
 * Returns ResourceGuards collection belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ResourceGuardsGetResourcesInSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetResourcesInSubscriptionInput,
    outputSchema: ResourceGuardsGetResourcesInSubscriptionOutput,
  }));
// Input Schema
export interface ResourceGuardsGetUpdateProtectedItemRequestsObjectsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
}
export const ResourceGuardsGetUpdateProtectedItemRequestsObjectsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/updateProtectedItemRequests",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetUpdateProtectedItemRequestsObjectsInput>;

// Output Schema
export interface ResourceGuardsGetUpdateProtectedItemRequestsObjectsOutput {
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
export const ResourceGuardsGetUpdateProtectedItemRequestsObjectsOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetUpdateProtectedItemRequestsObjectsOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 */
export const ResourceGuardsGetUpdateProtectedItemRequestsObjects =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetUpdateProtectedItemRequestsObjectsInput,
    outputSchema: ResourceGuardsGetUpdateProtectedItemRequestsObjectsOutput,
  }));
// Input Schema
export interface ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
}
export const ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}/updateProtectionPolicyRequests",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsInput>;

// Output Schema
export interface ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsOutput {
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
export const ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsOutput>;

// The operation
/**
 * Returns collection of operation request objects for a critical operation protected by the given ResourceGuard resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of the ResourceGuardResource
 */
export const ResourceGuardsGetUpdateProtectionPolicyRequestsObjects =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsInput,
    outputSchema: ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsOutput,
  }));
// Input Schema
export interface ResourceGuardsPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
  tags?: Record<string, string>;
}
export const ResourceGuardsPatchInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceGuardsName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardsPatchInput>;

// Output Schema
export interface ResourceGuardsPatchOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardsPatchOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsPatchOutput>;

// The operation
/**
 * Updates a ResourceGuard resource belonging to a resource group. For example, updating tags for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of ResourceGuard
 */
export const ResourceGuardsPatch = /*@__PURE__*/ API.make(() => ({
  inputSchema: ResourceGuardsPatchInput,
  outputSchema: ResourceGuardsPatchOutput,
}));
// Input Schema
export interface ResourceGuardsPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceGuardsName: string;
  properties?: {
    provisioningState?:
      | "Failed"
      | "Provisioning"
      | "Succeeded"
      | "Unknown"
      | "Updating";
    allowAutoApprovals?: boolean;
    resourceGuardOperations?: {
      vaultCriticalOperation?: string;
      requestResourceType?: string;
    }[];
    vaultCriticalOperationExclusionList?: string[];
    description?: string;
  };
  eTag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const ResourceGuardsPutInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceGuardsName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Failed",
          "Provisioning",
          "Succeeded",
          "Unknown",
          "Updating",
        ]),
      ),
      allowAutoApprovals: Schema.optional(Schema.Boolean),
      resourceGuardOperations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            vaultCriticalOperation: Schema.optional(Schema.String),
            requestResourceType: Schema.optional(Schema.String),
          }),
        ),
      ),
      vaultCriticalOperationExclusionList: Schema.optional(
        Schema.Array(Schema.String),
      ),
      description: Schema.optional(Schema.String),
    }),
  ),
  eTag: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/resourceGuards/{resourceGuardsName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ResourceGuardsPutInput>;

// Output Schema
export interface ResourceGuardsPutOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardsPutOutput =
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
  }) as unknown as Schema.Codec<ResourceGuardsPutOutput>;

// The operation
/**
 * Creates or updates a ResourceGuard resource belonging to a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceGuardsName - The name of ResourceGuard
 */
export const ResourceGuardsPut = /*@__PURE__*/ API.make(() => ({
  inputSchema: ResourceGuardsPutInput,
  outputSchema: ResourceGuardsPutOutput,
}));
// Input Schema
export interface RestorableTimeRangesFindInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupInstanceName: string;
  sourceDataStoreType: "OperationalStore" | "VaultStore" | "ArchiveStore";
  startTime?: string;
  endTime?: string;
}
export const RestorableTimeRangesFindInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    backupInstanceName: Schema.String.pipe(T.PathParam()),
    sourceDataStoreType: Schema.Literals([
      "OperationalStore",
      "VaultStore",
      "ArchiveStore",
    ]),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/findRestorableTimeRanges",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RestorableTimeRangesFindInput>;

// Output Schema
export interface RestorableTimeRangesFindOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RestorableTimeRangesFindOutput =
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
  }) as unknown as Schema.Codec<RestorableTimeRangesFindOutput>;

// The operation
/**
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the backup vault.
 * @param backupInstanceName - The name of the BackupInstanceResource
 */
export const RestorableTimeRangesFind = /*@__PURE__*/ API.make(() => ({
  inputSchema: RestorableTimeRangesFindInput,
  outputSchema: RestorableTimeRangesFindOutput,
}));
