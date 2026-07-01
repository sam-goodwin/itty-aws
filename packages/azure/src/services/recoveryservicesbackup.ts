/**
 * Azure Recoveryservicesbackup API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface BackupEnginesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  backupEngineName: string;
  $filter?: string;
  $skipToken?: string;
}
export const BackupEnginesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  backupEngineName: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupEngines/{backupEngineName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<BackupEnginesGetInput>;

// Output Schema
export interface BackupEnginesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupEnginesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<BackupEnginesGetOutput>;

// The operation
/**
 * Returns backup management server registered to Recovery Services Vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param backupEngineName - Name of the backup management server.
 * @param $filter - OData filter options.
 * @param $skipToken - skipToken Filter.
 */
export const BackupEnginesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupEnginesGetInput,
  outputSchema: BackupEnginesGetOutput,
}));
// Input Schema
export interface BackupEnginesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  $filter?: string;
  $skipToken?: string;
}
export const BackupEnginesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupEngines",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<BackupEnginesListInput>;

// Output Schema
export interface BackupEnginesListOutput {
  nextLink?: string;
}
export const BackupEnginesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupEnginesListOutput>;

// The operation
/**
 * Backup management servers registered to Recovery Services Vault. Returns a pageable list of servers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param $filter - OData filter options.
 * @param $skipToken - skipToken Filter.
 */
export const BackupEnginesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupEnginesListInput,
  outputSchema: BackupEnginesListOutput,
}));
// Input Schema
export interface BackupJobsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  $filter?: string;
  $skipToken?: string;
}
export const BackupJobsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobs",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<BackupJobsListInput>;

// Output Schema
export interface BackupJobsListOutput {
  nextLink?: string;
}
export const BackupJobsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<BackupJobsListOutput>;

// The operation
/**
 * Provides a pageable list of jobs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param $filter - OData filter options.
 * @param $skipToken - skipToken Filter.
 */
export const BackupJobsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupJobsListInput,
  outputSchema: BackupJobsListOutput,
}));
// Input Schema
export interface BackupOperationResultsGetInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  operationId: string;
}
export const BackupOperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupOperationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupOperationResultsGetInput>;

// Output Schema
export type BackupOperationResultsGetOutput = void;
export const BackupOperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupOperationResultsGetOutput>;

// The operation
/**
 * Provides the status of the delete operations such as deleting backed up item. Once the operation has started, the
 * status code in the response would be Accepted. It will continue to be in this state till it reaches completion. On
 * successful completion, the status code will be OK. This method expects OperationID as an argument. OperationID is
 * part of the Location header of the operation response.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param operationId - OperationID which represents the operation.
 */
export const BackupOperationResultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupOperationResultsGetInput,
    outputSchema: BackupOperationResultsGetOutput,
  }),
);
// Input Schema
export interface BackupOperationStatusesGetInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  operationId: string;
}
export const BackupOperationStatusesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupOperations/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupOperationStatusesGetInput>;

// Output Schema
export interface BackupOperationStatusesGetOutput {
  id?: string;
  name?: string;
  status?: "Invalid" | "InProgress" | "Succeeded" | "Failed" | "Canceled";
  startTime?: string;
  endTime?: string;
  error?: { code?: string; message?: string };
  properties?: { objectType: string };
}
export const BackupOperationStatusesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Invalid",
        "InProgress",
        "Succeeded",
        "Failed",
        "Canceled",
      ]),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<BackupOperationStatusesGetOutput>;

// The operation
/**
 * Fetches the status of an operation such as triggering a backup, restore. The status can be in progress, completed
 * or failed. You can refer to the OperationStatus enum for all the possible states of an operation. Some operations
 * create jobs. This method returns the list of jobs when the operation is complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param operationId - OperationID which represents the operation.
 */
export const BackupOperationStatusesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupOperationStatusesGetInput,
    outputSchema: BackupOperationStatusesGetOutput,
  }),
);
// Input Schema
export interface BackupPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  $filter?: string;
}
export const BackupPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupPoliciesListInput>;

// Output Schema
export interface BackupPoliciesListOutput {
  nextLink?: string;
}
export const BackupPoliciesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupPoliciesListOutput>;

// The operation
/**
 * Lists of backup policies associated with Recovery Services Vault. API provides pagination parameters to fetch
 * scoped results.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param $filter - OData filter options.
 */
export const BackupPoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupPoliciesListInput,
  outputSchema: BackupPoliciesListOutput,
}));
// Input Schema
export interface BackupProtectableItemsListInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  $filter?: string;
  $skipToken?: string;
}
export const BackupProtectableItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectableItems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupProtectableItemsListInput>;

// Output Schema
export interface BackupProtectableItemsListOutput {
  nextLink?: string;
}
export const BackupProtectableItemsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupProtectableItemsListOutput>;

// The operation
/**
 * Provides a pageable list of protectable objects within your subscription according to the query filter and the
 * pagination parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - OData filter options.
 * @param $skipToken - skipToken Filter.
 */
export const BackupProtectableItemsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupProtectableItemsListInput,
    outputSchema: BackupProtectableItemsListOutput,
  }),
);
// Input Schema
export interface BackupProtectedItemsListInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  $filter?: string;
  $skipToken?: string;
}
export const BackupProtectedItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectedItems",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupProtectedItemsListInput>;

// Output Schema
export interface BackupProtectedItemsListOutput {
  nextLink?: string;
}
export const BackupProtectedItemsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupProtectedItemsListOutput>;

// The operation
/**
 * Provides a pageable list of all items that are backed up within a vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - OData filter options.
 * @param $skipToken - skipToken Filter.
 */
export const BackupProtectedItemsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupProtectedItemsListInput,
    outputSchema: BackupProtectedItemsListOutput,
  }),
);
// Input Schema
export interface BackupProtectionContainersListInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  $filter?: string;
}
export const BackupProtectionContainersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectionContainers",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupProtectionContainersListInput>;

// Output Schema
export interface BackupProtectionContainersListOutput {
  nextLink?: string;
}
export const BackupProtectionContainersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupProtectionContainersListOutput>;

// The operation
/**
 * Lists the containers registered to Recovery Services Vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - OData filter options.
 */
export const BackupProtectionContainersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupProtectionContainersListInput,
    outputSchema: BackupProtectionContainersListOutput,
  }));
// Input Schema
export interface BackupProtectionIntentListInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  $filter?: string;
  $skipToken?: string;
}
export const BackupProtectionIntentListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectionIntents",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupProtectionIntentListInput>;

// Output Schema
export interface BackupProtectionIntentListOutput {
  nextLink?: string;
}
export const BackupProtectionIntentListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupProtectionIntentListOutput>;

// The operation
/**
 * Provides a pageable list of all intents that are present within a vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - OData filter options.
 * @param $skipToken - skipToken Filter.
 */
export const BackupProtectionIntentList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupProtectionIntentListInput,
    outputSchema: BackupProtectionIntentListOutput,
  }),
);
// Input Schema
export interface BackupResourceEncryptionConfigsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const BackupResourceEncryptionConfigsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupEncryptionConfigs/backupResourceEncryptionConfig",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupResourceEncryptionConfigsGetInput>;

// Output Schema
export interface BackupResourceEncryptionConfigsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupResourceEncryptionConfigsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<BackupResourceEncryptionConfigsGetOutput>;

// The operation
/**
 * Fetches Vault Encryption config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const BackupResourceEncryptionConfigsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupResourceEncryptionConfigsGetInput,
    outputSchema: BackupResourceEncryptionConfigsGetOutput,
  }));
// Input Schema
export interface BackupResourceEncryptionConfigsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties?: {
    encryptionAtRestType?: "Invalid" | "MicrosoftManaged" | "CustomerManaged";
    keyUri?: string;
    subscriptionId?: string;
    lastUpdateStatus?:
      | "Invalid"
      | "NotEnabled"
      | "PartiallySucceeded"
      | "PartiallyFailed"
      | "Failed"
      | "Succeeded"
      | "Initialized"
      | "FirstInitialization";
    infrastructureEncryptionState?: "Invalid" | "Disabled" | "Enabled";
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupResourceEncryptionConfigsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        encryptionAtRestType: Schema.optional(
          Schema.Literals(["Invalid", "MicrosoftManaged", "CustomerManaged"]),
        ),
        keyUri: Schema.optional(Schema.String),
        subscriptionId: Schema.optional(Schema.String),
        lastUpdateStatus: Schema.optional(
          Schema.Literals([
            "Invalid",
            "NotEnabled",
            "PartiallySucceeded",
            "PartiallyFailed",
            "Failed",
            "Succeeded",
            "Initialized",
            "FirstInitialization",
          ]),
        ),
        infrastructureEncryptionState: Schema.optional(
          Schema.Literals(["Invalid", "Disabled", "Enabled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupEncryptionConfigs/backupResourceEncryptionConfig",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupResourceEncryptionConfigsUpdateInput>;

// Output Schema
export type BackupResourceEncryptionConfigsUpdateOutput = void;
export const BackupResourceEncryptionConfigsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupResourceEncryptionConfigsUpdateOutput>;

// The operation
/**
 * Updates Vault encryption config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const BackupResourceEncryptionConfigsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupResourceEncryptionConfigsUpdateInput,
    outputSchema: BackupResourceEncryptionConfigsUpdateOutput,
  }));
// Input Schema
export interface BackupResourceStorageConfigsNonCRRGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const BackupResourceStorageConfigsNonCRRGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupResourceStorageConfigsNonCRRGetInput>;

// Output Schema
export interface BackupResourceStorageConfigsNonCRRGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupResourceStorageConfigsNonCRRGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<BackupResourceStorageConfigsNonCRRGetOutput>;

// The operation
/**
 * Fetches resource storage config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const BackupResourceStorageConfigsNonCRRGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupResourceStorageConfigsNonCRRGetInput,
    outputSchema: BackupResourceStorageConfigsNonCRRGetOutput,
  }));
// Input Schema
export interface BackupResourceStorageConfigsNonCRRPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties?: {
    storageModelType?:
      | "Invalid"
      | "GeoRedundant"
      | "LocallyRedundant"
      | "ZoneRedundant"
      | "ReadAccessGeoZoneRedundant";
    storageType?:
      | "Invalid"
      | "GeoRedundant"
      | "LocallyRedundant"
      | "ZoneRedundant"
      | "ReadAccessGeoZoneRedundant";
    storageTypeState?: "Invalid" | "Locked" | "Unlocked";
    crossRegionRestoreFlag?: boolean;
    dedupState?: "Invalid" | "Enabled" | "Disabled";
    xcoolState?: "Invalid" | "Enabled" | "Disabled";
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
}
export const BackupResourceStorageConfigsNonCRRPatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        storageModelType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "GeoRedundant",
            "LocallyRedundant",
            "ZoneRedundant",
            "ReadAccessGeoZoneRedundant",
          ]),
        ),
        storageType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "GeoRedundant",
            "LocallyRedundant",
            "ZoneRedundant",
            "ReadAccessGeoZoneRedundant",
          ]),
        ),
        storageTypeState: Schema.optional(
          Schema.Literals(["Invalid", "Locked", "Unlocked"]),
        ),
        crossRegionRestoreFlag: Schema.optional(Schema.Boolean),
        dedupState: Schema.optional(
          Schema.Literals(["Invalid", "Enabled", "Disabled"]),
        ),
        xcoolState: Schema.optional(
          Schema.Literals(["Invalid", "Enabled", "Disabled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupResourceStorageConfigsNonCRRPatchInput>;

// Output Schema
export type BackupResourceStorageConfigsNonCRRPatchOutput = void;
export const BackupResourceStorageConfigsNonCRRPatchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupResourceStorageConfigsNonCRRPatchOutput>;

// The operation
/**
 * Updates vault storage model type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const BackupResourceStorageConfigsNonCRRPatch =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupResourceStorageConfigsNonCRRPatchInput,
    outputSchema: BackupResourceStorageConfigsNonCRRPatchOutput,
  }));
// Input Schema
export interface BackupResourceStorageConfigsNonCRRUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties?: {
    storageModelType?:
      | "Invalid"
      | "GeoRedundant"
      | "LocallyRedundant"
      | "ZoneRedundant"
      | "ReadAccessGeoZoneRedundant";
    storageType?:
      | "Invalid"
      | "GeoRedundant"
      | "LocallyRedundant"
      | "ZoneRedundant"
      | "ReadAccessGeoZoneRedundant";
    storageTypeState?: "Invalid" | "Locked" | "Unlocked";
    crossRegionRestoreFlag?: boolean;
    dedupState?: "Invalid" | "Enabled" | "Disabled";
    xcoolState?: "Invalid" | "Enabled" | "Disabled";
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
}
export const BackupResourceStorageConfigsNonCRRUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        storageModelType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "GeoRedundant",
            "LocallyRedundant",
            "ZoneRedundant",
            "ReadAccessGeoZoneRedundant",
          ]),
        ),
        storageType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "GeoRedundant",
            "LocallyRedundant",
            "ZoneRedundant",
            "ReadAccessGeoZoneRedundant",
          ]),
        ),
        storageTypeState: Schema.optional(
          Schema.Literals(["Invalid", "Locked", "Unlocked"]),
        ),
        crossRegionRestoreFlag: Schema.optional(Schema.Boolean),
        dedupState: Schema.optional(
          Schema.Literals(["Invalid", "Enabled", "Disabled"]),
        ),
        xcoolState: Schema.optional(
          Schema.Literals(["Invalid", "Enabled", "Disabled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupResourceStorageConfigsNonCRRUpdateInput>;

// Output Schema
export interface BackupResourceStorageConfigsNonCRRUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupResourceStorageConfigsNonCRRUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<BackupResourceStorageConfigsNonCRRUpdateOutput>;

// The operation
/**
 * Updates vault storage model type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const BackupResourceStorageConfigsNonCRRUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupResourceStorageConfigsNonCRRUpdateInput,
    outputSchema: BackupResourceStorageConfigsNonCRRUpdateOutput,
  }));
// Input Schema
export interface BackupResourceVaultConfigsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const BackupResourceVaultConfigsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupconfig/vaultconfig",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupResourceVaultConfigsGetInput>;

// Output Schema
export interface BackupResourceVaultConfigsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupResourceVaultConfigsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<BackupResourceVaultConfigsGetOutput>;

// The operation
/**
 * Fetches resource vault config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const BackupResourceVaultConfigsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupResourceVaultConfigsGetInput,
    outputSchema: BackupResourceVaultConfigsGetOutput,
  }));
// Input Schema
export interface BackupResourceVaultConfigsPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties?: {
    storageModelType?:
      | "Invalid"
      | "GeoRedundant"
      | "LocallyRedundant"
      | "ZoneRedundant"
      | "ReadAccessGeoZoneRedundant";
    storageType?:
      | "Invalid"
      | "GeoRedundant"
      | "LocallyRedundant"
      | "ZoneRedundant"
      | "ReadAccessGeoZoneRedundant";
    storageTypeState?: "Invalid" | "Locked" | "Unlocked";
    enhancedSecurityState?: "Invalid" | "Enabled" | "Disabled";
    softDeleteFeatureState?: "Invalid" | "Enabled" | "Disabled" | "AlwaysON";
    softDeleteRetentionPeriodInDays?: number;
    resourceGuardOperationRequests?: string[];
    isSoftDeleteFeatureStateEditable?: boolean;
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
}
export const BackupResourceVaultConfigsPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        storageModelType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "GeoRedundant",
            "LocallyRedundant",
            "ZoneRedundant",
            "ReadAccessGeoZoneRedundant",
          ]),
        ),
        storageType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "GeoRedundant",
            "LocallyRedundant",
            "ZoneRedundant",
            "ReadAccessGeoZoneRedundant",
          ]),
        ),
        storageTypeState: Schema.optional(
          Schema.Literals(["Invalid", "Locked", "Unlocked"]),
        ),
        enhancedSecurityState: Schema.optional(
          Schema.Literals(["Invalid", "Enabled", "Disabled"]),
        ),
        softDeleteFeatureState: Schema.optional(
          Schema.Literals(["Invalid", "Enabled", "Disabled", "AlwaysON"]),
        ),
        softDeleteRetentionPeriodInDays: Schema.optional(Schema.Number),
        resourceGuardOperationRequests: Schema.optional(
          Schema.Array(Schema.String),
        ),
        isSoftDeleteFeatureStateEditable: Schema.optional(Schema.Boolean),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupconfig/vaultconfig",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupResourceVaultConfigsPutInput>;

// Output Schema
export interface BackupResourceVaultConfigsPutOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupResourceVaultConfigsPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<BackupResourceVaultConfigsPutOutput>;

// The operation
/**
 * Updates vault security config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const BackupResourceVaultConfigsPut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupResourceVaultConfigsPutInput,
    outputSchema: BackupResourceVaultConfigsPutOutput,
  }));
// Input Schema
export interface BackupResourceVaultConfigsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties?: {
    storageModelType?:
      | "Invalid"
      | "GeoRedundant"
      | "LocallyRedundant"
      | "ZoneRedundant"
      | "ReadAccessGeoZoneRedundant";
    storageType?:
      | "Invalid"
      | "GeoRedundant"
      | "LocallyRedundant"
      | "ZoneRedundant"
      | "ReadAccessGeoZoneRedundant";
    storageTypeState?: "Invalid" | "Locked" | "Unlocked";
    enhancedSecurityState?: "Invalid" | "Enabled" | "Disabled";
    softDeleteFeatureState?: "Invalid" | "Enabled" | "Disabled" | "AlwaysON";
    softDeleteRetentionPeriodInDays?: number;
    resourceGuardOperationRequests?: string[];
    isSoftDeleteFeatureStateEditable?: boolean;
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
}
export const BackupResourceVaultConfigsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        storageModelType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "GeoRedundant",
            "LocallyRedundant",
            "ZoneRedundant",
            "ReadAccessGeoZoneRedundant",
          ]),
        ),
        storageType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "GeoRedundant",
            "LocallyRedundant",
            "ZoneRedundant",
            "ReadAccessGeoZoneRedundant",
          ]),
        ),
        storageTypeState: Schema.optional(
          Schema.Literals(["Invalid", "Locked", "Unlocked"]),
        ),
        enhancedSecurityState: Schema.optional(
          Schema.Literals(["Invalid", "Enabled", "Disabled"]),
        ),
        softDeleteFeatureState: Schema.optional(
          Schema.Literals(["Invalid", "Enabled", "Disabled", "AlwaysON"]),
        ),
        softDeleteRetentionPeriodInDays: Schema.optional(Schema.Number),
        resourceGuardOperationRequests: Schema.optional(
          Schema.Array(Schema.String),
        ),
        isSoftDeleteFeatureStateEditable: Schema.optional(Schema.Boolean),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupconfig/vaultconfig",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupResourceVaultConfigsUpdateInput>;

// Output Schema
export interface BackupResourceVaultConfigsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupResourceVaultConfigsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<BackupResourceVaultConfigsUpdateOutput>;

// The operation
/**
 * Updates vault security config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const BackupResourceVaultConfigsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupResourceVaultConfigsUpdateInput,
    outputSchema: BackupResourceVaultConfigsUpdateOutput,
  }));
// Input Schema
export interface BackupStatusGetInput {
  azureRegion: string;
  subscriptionId: string;
  resourceType?:
    | "Invalid"
    | "VM"
    | "FileFolder"
    | "AzureSqlDb"
    | "SQLDB"
    | "Exchange"
    | "Sharepoint"
    | "VMwareVM"
    | "SystemState"
    | "Client"
    | "GenericDataSource"
    | "SQLDataBase"
    | "AzureFileShare"
    | "SAPHanaDatabase"
    | "SAPAseDatabase"
    | "SAPHanaDBInstance";
  resourceId?: string;
  poLogicalName?: string;
}
export const BackupStatusGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  azureRegion: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceType: Schema.optional(
    Schema.Literals([
      "Invalid",
      "VM",
      "FileFolder",
      "AzureSqlDb",
      "SQLDB",
      "Exchange",
      "Sharepoint",
      "VMwareVM",
      "SystemState",
      "Client",
      "GenericDataSource",
      "SQLDataBase",
      "AzureFileShare",
      "SAPHanaDatabase",
      "SAPAseDatabase",
      "SAPHanaDBInstance",
    ]),
  ),
  resourceId: Schema.optional(Schema.String),
  poLogicalName: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupStatus",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<BackupStatusGetInput>;

// Output Schema
export interface BackupStatusGetOutput {
  protectionStatus?:
    | "Invalid"
    | "NotProtected"
    | "Protecting"
    | "Protected"
    | "ProtectionFailed";
  vaultId?: string;
  fabricName?: "Invalid" | "Azure";
  containerName?: string;
  protectedItemName?: string;
  errorCode?: string;
  errorMessage?: string;
  policyName?: string;
  registrationStatus?: string;
  protectedItemsCount?: number;
  acquireStorageAccountLock?: "Acquire" | "NotAcquire";
}
export const BackupStatusGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  protectionStatus: Schema.optional(
    Schema.Literals([
      "Invalid",
      "NotProtected",
      "Protecting",
      "Protected",
      "ProtectionFailed",
    ]),
  ),
  vaultId: Schema.optional(Schema.String),
  fabricName: Schema.optional(Schema.Literals(["Invalid", "Azure"])),
  containerName: Schema.optional(Schema.String),
  protectedItemName: Schema.optional(Schema.String),
  errorCode: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  policyName: Schema.optional(Schema.String),
  registrationStatus: Schema.optional(Schema.String),
  protectedItemsCount: Schema.optional(Schema.Number),
  acquireStorageAccountLock: Schema.optional(
    Schema.Literals(["Acquire", "NotAcquire"]),
  ),
}) as unknown as Schema.Codec<BackupStatusGetOutput>;

// The operation
/**
 * Get the container backup status
 *
 * @param api-version - The API version to use for this operation.
 * @param azureRegion - Azure region to hit Api
 * @param subscriptionId - The ID of the target subscription.
 */
export const BackupStatusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupStatusGetInput,
  outputSchema: BackupStatusGetOutput,
}));
// Input Schema
export interface BackupsTriggerInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  location?: string;
  tags?: Record<string, string>;
  eTag?: string;
  properties?: { objectType: string };
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BackupsTriggerInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  fabricName: Schema.String.pipe(T.PathParam()),
  containerName: Schema.String.pipe(T.PathParam()),
  protectedItemName: Schema.String.pipe(T.PathParam()),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  eTag: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      objectType: Schema.String,
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
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/backup",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<BackupsTriggerInput>;

// Output Schema
export type BackupsTriggerOutput = void;
export const BackupsTriggerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupsTriggerOutput>;

// The operation
/**
 * Triggers backup for specified backed up item. This is an asynchronous operation. To know the status of the
 * operation, call GetProtectedItemOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 */
export const BackupsTrigger = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupsTriggerInput,
  outputSchema: BackupsTriggerOutput,
}));
// Input Schema
export interface BackupUsageSummariesListInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  $filter?: string;
  $skipToken?: string;
}
export const BackupUsageSummariesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupUsageSummaries",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupUsageSummariesListInput>;

// Output Schema
export interface BackupUsageSummariesListOutput {
  nextLink?: string;
}
export const BackupUsageSummariesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupUsageSummariesListOutput>;

// The operation
/**
 * Fetches the backup management usage summaries of the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - OData filter options.
 * @param $skipToken - skipToken Filter.
 */
export const BackupUsageSummariesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupUsageSummariesListInput,
    outputSchema: BackupUsageSummariesListOutput,
  }),
);
// Input Schema
export interface BackupWorkloadItemsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  $filter?: string;
  $skipToken?: string;
}
export const BackupWorkloadItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/items",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BackupWorkloadItemsListInput>;

// Output Schema
export interface BackupWorkloadItemsListOutput {
  nextLink?: string;
}
export const BackupWorkloadItemsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BackupWorkloadItemsListOutput>;

// The operation
/**
 * Provides a pageable list of workload item of a specific container according to the query filter and the pagination
 * parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param $filter - OData filter options.
 * @param $skipToken - skipToken Filter.
 */
export const BackupWorkloadItemsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupWorkloadItemsListInput,
    outputSchema: BackupWorkloadItemsListOutput,
  }),
);
// Input Schema
export interface BMSPrepareDataMoveInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  targetResourceId: string;
  targetRegion: string;
  dataMoveLevel: "Invalid" | "Vault" | "Container";
  sourceContainerArmIds?: string[];
  ignoreMoved?: boolean;
}
export const BMSPrepareDataMoveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    targetResourceId: Schema.String,
    targetRegion: Schema.String,
    dataMoveLevel: Schema.Literals(["Invalid", "Vault", "Container"]),
    sourceContainerArmIds: Schema.optional(Schema.Array(Schema.String)),
    ignoreMoved: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig/prepareDataMove",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BMSPrepareDataMoveInput>;

// Output Schema
export type BMSPrepareDataMoveOutput = void;
export const BMSPrepareDataMoveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BMSPrepareDataMoveOutput>;

// The operation
/**
 * Prepares source vault for Data Move operation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const BMSPrepareDataMove = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BMSPrepareDataMoveInput,
  outputSchema: BMSPrepareDataMoveOutput,
}));
// Input Schema
export interface BMSPrepareDataMoveOperationResultGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationId: string;
}
export const BMSPrepareDataMoveOperationResultGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig/operationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BMSPrepareDataMoveOperationResultGetInput>;

// Output Schema
export interface BMSPrepareDataMoveOperationResultGetOutput {
  objectType: string;
}
export const BMSPrepareDataMoveOperationResultGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<BMSPrepareDataMoveOperationResultGetOutput>;

// The operation
/**
 * Fetches operation status for data move operation on vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - vaults
 * @param operationId - The name of the BackupResourceConfigResource
 */
export const BMSPrepareDataMoveOperationResultGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BMSPrepareDataMoveOperationResultGetInput,
    outputSchema: BMSPrepareDataMoveOperationResultGetOutput,
  }));
// Input Schema
export interface BMSTriggerDataMoveInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  sourceResourceId: string;
  sourceRegion: string;
  dataMoveLevel: "Invalid" | "Vault" | "Container";
  correlationId: string;
  sourceContainerArmIds?: string[];
  pauseGC?: boolean;
}
export const BMSTriggerDataMoveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    sourceResourceId: Schema.String,
    sourceRegion: Schema.String,
    dataMoveLevel: Schema.Literals(["Invalid", "Vault", "Container"]),
    correlationId: Schema.String,
    sourceContainerArmIds: Schema.optional(Schema.Array(Schema.String)),
    pauseGC: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig/triggerDataMove",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<BMSTriggerDataMoveInput>;

// Output Schema
export type BMSTriggerDataMoveOutput = void;
export const BMSTriggerDataMoveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BMSTriggerDataMoveOutput>;

// The operation
/**
 * Triggers Data Move Operation on target vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const BMSTriggerDataMove = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BMSTriggerDataMoveInput,
  outputSchema: BMSTriggerDataMoveOutput,
}));
// Input Schema
export interface DeletedProtectionContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  $filter?: string;
}
export const DeletedProtectionContainersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupDeletedProtectionContainers",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DeletedProtectionContainersListInput>;

// Output Schema
export interface DeletedProtectionContainersListOutput {
  nextLink?: string;
}
export const DeletedProtectionContainersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DeletedProtectionContainersListOutput>;

// The operation
/**
 * Lists the soft deleted containers registered to Recovery Services Vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 * @param $filter - OData filter options.
 */
export const DeletedProtectionContainersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeletedProtectionContainersListInput,
    outputSchema: DeletedProtectionContainersListOutput,
  }));
// Input Schema
export interface ExportJobsOperationResultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationId: string;
}
export const ExportJobsOperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobs/operationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ExportJobsOperationResultsGetInput>;

// Output Schema
export interface ExportJobsOperationResultsGetOutput {
  statusCode?:
    | "Continue"
    | "SwitchingProtocols"
    | "OK"
    | "Created"
    | "Accepted"
    | "NonAuthoritativeInformation"
    | "NoContent"
    | "ResetContent"
    | "PartialContent"
    | "MultipleChoices"
    | "Ambiguous"
    | "MovedPermanently"
    | "Moved"
    | "Found"
    | "Redirect"
    | "SeeOther"
    | "RedirectMethod"
    | "NotModified"
    | "UseProxy"
    | "Unused"
    | "TemporaryRedirect"
    | "RedirectKeepVerb"
    | "BadRequest"
    | "Unauthorized"
    | "PaymentRequired"
    | "Forbidden"
    | "NotFound"
    | "MethodNotAllowed"
    | "NotAcceptable"
    | "ProxyAuthenticationRequired"
    | "RequestTimeout"
    | "Conflict"
    | "Gone"
    | "LengthRequired"
    | "PreconditionFailed"
    | "RequestEntityTooLarge"
    | "RequestUriTooLong"
    | "UnsupportedMediaType"
    | "RequestedRangeNotSatisfiable"
    | "ExpectationFailed"
    | "UpgradeRequired"
    | "InternalServerError"
    | "NotImplemented"
    | "BadGateway"
    | "ServiceUnavailable"
    | "GatewayTimeout"
    | "HttpVersionNotSupported";
  headers?: Record<string, string[]>;
}
export const ExportJobsOperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(
      Schema.Literals([
        "Continue",
        "SwitchingProtocols",
        "OK",
        "Created",
        "Accepted",
        "NonAuthoritativeInformation",
        "NoContent",
        "ResetContent",
        "PartialContent",
        "MultipleChoices",
        "Ambiguous",
        "MovedPermanently",
        "Moved",
        "Found",
        "Redirect",
        "SeeOther",
        "RedirectMethod",
        "NotModified",
        "UseProxy",
        "Unused",
        "TemporaryRedirect",
        "RedirectKeepVerb",
        "BadRequest",
        "Unauthorized",
        "PaymentRequired",
        "Forbidden",
        "NotFound",
        "MethodNotAllowed",
        "NotAcceptable",
        "ProxyAuthenticationRequired",
        "RequestTimeout",
        "Conflict",
        "Gone",
        "LengthRequired",
        "PreconditionFailed",
        "RequestEntityTooLarge",
        "RequestUriTooLong",
        "UnsupportedMediaType",
        "RequestedRangeNotSatisfiable",
        "ExpectationFailed",
        "UpgradeRequired",
        "InternalServerError",
        "NotImplemented",
        "BadGateway",
        "ServiceUnavailable",
        "GatewayTimeout",
        "HttpVersionNotSupported",
      ]),
    ),
    headers: Schema.optional(
      Schema.Record(Schema.String, Schema.Array(Schema.String)),
    ),
  }) as unknown as Schema.Codec<ExportJobsOperationResultsGetOutput>;

// The operation
/**
 * Gets the operation result of operation triggered by Export Jobs API. If the operation is successful, then it also
 * contains URL of a Blob and a SAS key to access the same. The blob contains exported jobs in JSON serialized format.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - vaults
 * @param operationId - The name of the JobResource
 */
export const ExportJobsOperationResultsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExportJobsOperationResultsGetInput,
    outputSchema: ExportJobsOperationResultsGetOutput,
  }));
// Input Schema
export interface FeatureSupportValidateInput {
  azureRegion: string;
  subscriptionId: string;
  featureType: string;
}
export const FeatureSupportValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    azureRegion: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    featureType: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupValidateFeatures",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<FeatureSupportValidateInput>;

// Output Schema
export interface FeatureSupportValidateOutput {
  supportStatus?:
    | "Invalid"
    | "Supported"
    | "DefaultOFF"
    | "DefaultON"
    | "NotSupported";
}
export const FeatureSupportValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportStatus: Schema.optional(
      Schema.Literals([
        "Invalid",
        "Supported",
        "DefaultOFF",
        "DefaultON",
        "NotSupported",
      ]),
    ),
  }) as unknown as Schema.Codec<FeatureSupportValidateOutput>;

// The operation
/**
 * It will validate if given feature with resource properties is supported in service
 *
 * @param api-version - The API version to use for this operation.
 * @param azureRegion - Azure region to hit Api
 * @param subscriptionId - The ID of the target subscription.
 */
export const FeatureSupportValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FeatureSupportValidateInput,
    outputSchema: FeatureSupportValidateOutput,
  }),
);
// Input Schema
export interface FetchTieringCostPostInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  sourceTierType: "Invalid" | "InstantRP" | "HardenedRP" | "ArchivedRP";
  targetTierType: "Invalid" | "InstantRP" | "HardenedRP" | "ArchivedRP";
  objectType: string;
}
export const FetchTieringCostPostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    sourceTierType: Schema.Literals([
      "Invalid",
      "InstantRP",
      "HardenedRP",
      "ArchivedRP",
    ]),
    targetTierType: Schema.Literals([
      "Invalid",
      "InstantRP",
      "HardenedRP",
      "ArchivedRP",
    ]),
    objectType: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupTieringCost/default/fetchTieringCost",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<FetchTieringCostPostInput>;

// Output Schema
export interface FetchTieringCostPostOutput {
  objectType: string;
}
export const FetchTieringCostPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<FetchTieringCostPostOutput>;

// The operation
/**
 * Provides the details of the tiering related sizes and cost.
 * Status of the operation can be fetched using GetTieringCostOperationStatus API and result using GetTieringCostOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 */
export const FetchTieringCostPost = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FetchTieringCostPostInput,
    outputSchema: FetchTieringCostPostOutput,
  }),
);
// Input Schema
export interface GetOperationStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationId: string;
}
export const GetOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig/operationStatus/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<GetOperationStatusInput>;

// Output Schema
export interface GetOperationStatusOutput {
  id?: string;
  name?: string;
  status?: "Invalid" | "InProgress" | "Succeeded" | "Failed" | "Canceled";
  startTime?: string;
  endTime?: string;
  error?: { code?: string; message?: string };
  properties?: { objectType: string };
}
export const GetOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Invalid",
        "InProgress",
        "Succeeded",
        "Failed",
        "Canceled",
      ]),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<GetOperationStatusOutput>;

// The operation
/**
 * Fetches Operation Result for Prepare Data Move
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - vaults
 * @param operationId - The name of the BackupResourceConfigResource
 */
export const GetOperationStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOperationStatusInput,
  outputSchema: GetOperationStatusOutput,
}));
// Input Schema
export interface GetTieringCostOperationResultGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationId: string;
}
export const GetTieringCostOperationResultGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupTieringCost/default/operationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<GetTieringCostOperationResultGetInput>;

// Output Schema
export interface GetTieringCostOperationResultGetOutput {
  objectType: string;
}
export const GetTieringCostOperationResultGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectType: Schema.String,
  }) as unknown as Schema.Codec<GetTieringCostOperationResultGetOutput>;

// The operation
/**
 * Gets the result of async operation for tiering cost
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 */
export const GetTieringCostOperationResultGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetTieringCostOperationResultGetInput,
    outputSchema: GetTieringCostOperationResultGetOutput,
  }));
// Input Schema
export interface ItemLevelRecoveryConnectionsProvisionInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  recoveryPointId: string;
  location?: string;
  tags?: Record<string, string>;
  eTag?: string;
  properties?: { objectType: string };
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ItemLevelRecoveryConnectionsProvisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    recoveryPointId: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
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
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}/provisionInstantItemRecovery",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ItemLevelRecoveryConnectionsProvisionInput>;

// Output Schema
export type ItemLevelRecoveryConnectionsProvisionOutput = void;
export const ItemLevelRecoveryConnectionsProvisionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ItemLevelRecoveryConnectionsProvisionOutput>;

// The operation
/**
 * Provisions a script which invokes an iSCSI connection to the backup data. Executing this script opens a file
 * explorer displaying all the recoverable files and folders. This is an asynchronous operation. To know the status of
 * provisioning, call GetProtectedItemOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 * @param recoveryPointId - RecoveryPointID represents the backed up data to be fetched.
 */
export const ItemLevelRecoveryConnectionsProvision =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ItemLevelRecoveryConnectionsProvisionInput,
    outputSchema: ItemLevelRecoveryConnectionsProvisionOutput,
  }));
// Input Schema
export interface ItemLevelRecoveryConnectionsRevokeInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  recoveryPointId: string;
}
export const ItemLevelRecoveryConnectionsRevokeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    recoveryPointId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}/revokeInstantItemRecovery",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ItemLevelRecoveryConnectionsRevokeInput>;

// Output Schema
export type ItemLevelRecoveryConnectionsRevokeOutput = void;
export const ItemLevelRecoveryConnectionsRevokeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ItemLevelRecoveryConnectionsRevokeOutput>;

// The operation
/**
 * Revokes an iSCSI connection which can be used to download a script. Executing this script opens a file explorer
 * displaying all recoverable files and folders. This is an asynchronous operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 * @param recoveryPointId - RecoveryPointID represents the backed up data to be fetched.
 */
export const ItemLevelRecoveryConnectionsRevoke =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ItemLevelRecoveryConnectionsRevokeInput,
    outputSchema: ItemLevelRecoveryConnectionsRevokeOutput,
  }));
// Input Schema
export interface JobCancellationsTriggerInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  jobName: string;
}
export const JobCancellationsTriggerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobs/{jobName}/cancel",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<JobCancellationsTriggerInput>;

// Output Schema
export type JobCancellationsTriggerOutput = void;
export const JobCancellationsTriggerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobCancellationsTriggerOutput>;

// The operation
/**
 * Cancels a job. This is an asynchronous operation. To know the status of the cancellation, call
 * GetCancelOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param jobName - Name of the job whose details are to be fetched.
 */
export const JobCancellationsTrigger = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JobCancellationsTriggerInput,
    outputSchema: JobCancellationsTriggerOutput,
  }),
);
// Input Schema
export interface JobDetailsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  jobName: string;
}
export const JobDetailsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobs/{jobName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<JobDetailsGetInput>;

// Output Schema
export interface JobDetailsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const JobDetailsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<JobDetailsGetOutput>;

// The operation
/**
 * Gets extended information associated with the job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param jobName - Name of the job whose details are to be fetched.
 */
export const JobDetailsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobDetailsGetInput,
  outputSchema: JobDetailsGetOutput,
}));
// Input Schema
export interface JobOperationResultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  jobName: string;
  operationId: string;
}
export const JobOperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobs/{jobName}/operationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<JobOperationResultsGetInput>;

// Output Schema
export type JobOperationResultsGetOutput = void;
export const JobOperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobOperationResultsGetOutput>;

// The operation
/**
 * Fetches the result of any operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - vaults
 * @param jobName - The name of the JobResource
 * @param operationId - The name of the JobResource
 */
export const JobOperationResultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JobOperationResultsGetInput,
    outputSchema: JobOperationResultsGetOutput,
  }),
);
// Input Schema
export interface JobsExportInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  $filter?: string;
}
export const JobsExportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vaultName: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobsExport",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<JobsExportInput>;

// Output Schema
export type JobsExportOutput = void;
export const JobsExportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobsExportOutput>;

// The operation
/**
 * Triggers export of jobs specified by filters and returns an OperationID to track.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - OData filter options.
 */
export const JobsExport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsExportInput,
  outputSchema: JobsExportOutput,
}));
// Input Schema
export interface MoveRecoveryPointInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  recoveryPointId: string;
  objectType?: string;
  sourceTierType?: "Invalid" | "InstantRP" | "HardenedRP" | "ArchivedRP";
  targetTierType?: "Invalid" | "InstantRP" | "HardenedRP" | "ArchivedRP";
}
export const MoveRecoveryPointInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    recoveryPointId: Schema.String.pipe(T.PathParam()),
    objectType: Schema.optional(Schema.String),
    sourceTierType: Schema.optional(
      Schema.Literals(["Invalid", "InstantRP", "HardenedRP", "ArchivedRP"]),
    ),
    targetTierType: Schema.optional(
      Schema.Literals(["Invalid", "InstantRP", "HardenedRP", "ArchivedRP"]),
    ),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}/move",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<MoveRecoveryPointInput>;

// Output Schema
export type MoveRecoveryPointOutput = void;
export const MoveRecoveryPointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MoveRecoveryPointOutput>;

// The operation
/**
 * Move recovery point from one datastore to another store.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 * @param recoveryPointId - RecoveryPointID represents the backed up data to be fetched.
 */
export const MoveRecoveryPoint = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MoveRecoveryPointInput,
  outputSchema: MoveRecoveryPointOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.RecoveryServices/operations",
    apiVersion: "2026-05-01",
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
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
                logSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      blobDuration: Schema.optional(Schema.String),
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationValidateInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  id: string;
  properties: { objectType: string };
}
export const OperationValidateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    properties: Schema.Struct({
      objectType: Schema.String,
    }),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupValidateOperation",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<OperationValidateInput>;

// Output Schema
export interface OperationValidateOutput {
  validateOperationResponse?: {
    validationResults?: {
      code?: string;
      message?: string;
      recommendations?: string[];
    }[];
  };
}
export const OperationValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOperationResponse: Schema.optional(
      Schema.Struct({
        validationResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              recommendations: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<OperationValidateOutput>;

// The operation
/**
 * Validate operation for specified backed up item. This is a synchronous operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 */
export const OperationValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationValidateInput,
  outputSchema: OperationValidateOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionDeleteOutput = void;
export const PrivateEndpointConnectionDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionDeleteOutput>;

// The operation
/**
 * Delete Private Endpoint requests. This call is made by Backup Admin.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionDeleteInput,
    outputSchema: PrivateEndpointConnectionDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionGetInput>;

// Output Schema
export interface PrivateEndpointConnectionGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PrivateEndpointConnectionGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionGetOutput>;

// The operation
/**
 * Get Private Endpoint Connection. This call is made by Backup Admin.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionGetInput,
    outputSchema: PrivateEndpointConnectionGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateEndpointConnectionName: string;
  properties?: {
    provisioningState?: "Succeeded" | "Deleting" | "Failed" | "Pending";
    privateEndpoint?: { id?: string };
    groupIds?: (
      | "AzureBackup"
      | "AzureBackup_secondary"
      | "AzureSiteRecovery"
    )[];
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
}
export const PrivateEndpointConnectionPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Deleting", "Failed", "Pending"]),
        ),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        groupIds: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "AzureBackup",
              "AzureBackup_secondary",
              "AzureSiteRecovery",
            ]),
          ),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionPutInput>;

// Output Schema
export interface PrivateEndpointConnectionPutOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PrivateEndpointConnectionPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionPutOutput>;

// The operation
/**
 * Approve or Reject Private Endpoint requests. This call is made by Backup Admin.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionPut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionPutInput,
    outputSchema: PrivateEndpointConnectionPutOutput,
  }));
// Input Schema
export interface PrivateEndpointGetOperationStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateEndpointConnectionName: string;
  operationId: string;
}
export const PrivateEndpointGetOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}/operationsStatus/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointGetOperationStatusInput>;

// Output Schema
export interface PrivateEndpointGetOperationStatusOutput {
  id?: string;
  name?: string;
  status?: "Invalid" | "InProgress" | "Succeeded" | "Failed" | "Canceled";
  startTime?: string;
  endTime?: string;
  error?: { code?: string; message?: string };
  properties?: { objectType: string };
}
export const PrivateEndpointGetOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Invalid",
        "InProgress",
        "Succeeded",
        "Failed",
        "Canceled",
      ]),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointGetOperationStatusOutput>;

// The operation
/**
 * Gets the operation status for a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - vaults
 * @param privateEndpointConnectionName - The name of the PrivateEndpointConnectionResource
 * @param operationId - The name of the PrivateEndpointConnectionResource
 */
export const PrivateEndpointGetOperationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointGetOperationStatusInput,
    outputSchema: PrivateEndpointGetOperationStatusOutput,
  }));
// Input Schema
export interface ProtectableContainersListInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  fabricName: string;
  $filter?: string;
}
export const ProtectableContainersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectableContainers",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectableContainersListInput>;

// Output Schema
export interface ProtectableContainersListOutput {
  nextLink?: string;
}
export const ProtectableContainersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProtectableContainersListOutput>;

// The operation
/**
 * Lists the containers that can be registered to Recovery Services Vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - OData filter options.
 */
export const ProtectableContainersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProtectableContainersListInput,
    outputSchema: ProtectableContainersListOutput,
  }),
);
// Input Schema
export interface ProtectedItemOperationResultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  operationId: string;
}
export const ProtectedItemOperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/operationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectedItemOperationResultsGetInput>;

// Output Schema
export interface ProtectedItemOperationResultsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectedItemOperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectedItemOperationResultsGetOutput>;

// The operation
/**
 * Fetches the result of any operation on the backup item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - vaults
 * @param fabricName - backupFabrics
 * @param containerName - The name of the ProtectionContainerResource
 * @param protectedItemName - The name of the ProtectedItemResource
 * @param operationId - The name of the ProtectedItemResource
 */
export const ProtectedItemOperationResultsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectedItemOperationResultsGetInput,
    outputSchema: ProtectedItemOperationResultsGetOutput,
  }));
// Input Schema
export interface ProtectedItemOperationStatusesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  operationId: string;
}
export const ProtectedItemOperationStatusesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/operationsStatus/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectedItemOperationStatusesGetInput>;

// Output Schema
export interface ProtectedItemOperationStatusesGetOutput {
  id?: string;
  name?: string;
  status?: "Invalid" | "InProgress" | "Succeeded" | "Failed" | "Canceled";
  startTime?: string;
  endTime?: string;
  error?: { code?: string; message?: string };
  properties?: { objectType: string };
}
export const ProtectedItemOperationStatusesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Invalid",
        "InProgress",
        "Succeeded",
        "Failed",
        "Canceled",
      ]),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ProtectedItemOperationStatusesGetOutput>;

// The operation
/**
 * Fetches the status of an operation such as triggering a backup, restore. The status can be in progress, completed
 * or failed. You can refer to the OperationStatus enum for all the possible states of the operation. Some operations
 * create jobs. This method returns the list of jobs associated with the operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - vaults
 * @param fabricName - backupFabrics
 * @param containerName - The name of the ProtectionContainerResource
 * @param protectedItemName - The name of the ProtectedItemResource
 * @param operationId - The name of the ProtectedItemResource
 */
export const ProtectedItemOperationStatusesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectedItemOperationStatusesGetInput,
    outputSchema: ProtectedItemOperationStatusesGetOutput,
  }));
// Input Schema
export interface ProtectedItemsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  properties?: {
    protectedItemType: string;
    backupManagementType?:
      | "Invalid"
      | "AzureIaasVM"
      | "MAB"
      | "DPM"
      | "AzureBackupServer"
      | "AzureSql"
      | "AzureStorage"
      | "AzureWorkload"
      | "DefaultBackup";
    workloadType?:
      | "Invalid"
      | "VM"
      | "FileFolder"
      | "AzureSqlDb"
      | "SQLDB"
      | "Exchange"
      | "Sharepoint"
      | "VMwareVM"
      | "SystemState"
      | "Client"
      | "GenericDataSource"
      | "SQLDataBase"
      | "AzureFileShare"
      | "SAPHanaDatabase"
      | "SAPAseDatabase"
      | "SAPHanaDBInstance";
    containerName?: string;
    sourceResourceId?: string;
    policyId?: string;
    lastRecoveryPoint?: string;
    backupSetName?: string;
    createMode?: "Invalid" | "Default" | "Recover";
    deferredDeleteTimeInUTC?: string;
    isScheduledForDeferredDelete?: boolean;
    deferredDeleteTimeRemaining?: string;
    isDeferredDeleteScheduleUpcoming?: boolean;
    isRehydrate?: boolean;
    resourceGuardOperationRequests?: string[];
    isArchiveEnabled?: boolean;
    policyName?: string;
    softDeleteRetentionPeriodInDays?: number;
    vaultId?: string;
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
}
export const ProtectedItemsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        protectedItemType: Schema.String,
        backupManagementType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "AzureIaasVM",
            "MAB",
            "DPM",
            "AzureBackupServer",
            "AzureSql",
            "AzureStorage",
            "AzureWorkload",
            "DefaultBackup",
          ]),
        ),
        workloadType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "VM",
            "FileFolder",
            "AzureSqlDb",
            "SQLDB",
            "Exchange",
            "Sharepoint",
            "VMwareVM",
            "SystemState",
            "Client",
            "GenericDataSource",
            "SQLDataBase",
            "AzureFileShare",
            "SAPHanaDatabase",
            "SAPAseDatabase",
            "SAPHanaDBInstance",
          ]),
        ),
        containerName: Schema.optional(Schema.String),
        sourceResourceId: Schema.optional(Schema.String),
        policyId: Schema.optional(Schema.String),
        lastRecoveryPoint: Schema.optional(Schema.String),
        backupSetName: Schema.optional(Schema.String),
        createMode: Schema.optional(
          Schema.Literals(["Invalid", "Default", "Recover"]),
        ),
        deferredDeleteTimeInUTC: Schema.optional(Schema.String),
        isScheduledForDeferredDelete: Schema.optional(Schema.Boolean),
        deferredDeleteTimeRemaining: Schema.optional(Schema.String),
        isDeferredDeleteScheduleUpcoming: Schema.optional(Schema.Boolean),
        isRehydrate: Schema.optional(Schema.Boolean),
        resourceGuardOperationRequests: Schema.optional(
          Schema.Array(Schema.String),
        ),
        isArchiveEnabled: Schema.optional(Schema.Boolean),
        policyName: Schema.optional(Schema.String),
        softDeleteRetentionPeriodInDays: Schema.optional(Schema.Number),
        vaultId: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectedItemsCreateOrUpdateInput>;

// Output Schema
export interface ProtectedItemsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectedItemsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectedItemsCreateOrUpdateOutput>;

// The operation
/**
 * Enables backup of an item or to modifies the backup policy information of an already backed up item. This is an
 * asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 */
export const ProtectedItemsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectedItemsCreateOrUpdateInput,
    outputSchema: ProtectedItemsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ProtectedItemsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
}
export const ProtectedItemsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectedItemsDeleteInput>;

// Output Schema
export type ProtectedItemsDeleteOutput = void;
export const ProtectedItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProtectedItemsDeleteOutput>;

// The operation
/**
 * Used to disable backup of an item within a container. This is an asynchronous operation. To know the status of the
 * request, call the GetItemOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 */
export const ProtectedItemsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProtectedItemsDeleteInput,
    outputSchema: ProtectedItemsDeleteOutput,
  }),
);
// Input Schema
export interface ProtectedItemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  $filter?: string;
}
export const ProtectedItemsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<ProtectedItemsGetInput>;

// Output Schema
export interface ProtectedItemsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectedItemsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectedItemsGetOutput>;

// The operation
/**
 * Provides the details of the backed up item. This is an asynchronous operation. To know the status of the operation,
 * call the GetItemOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 * @param $filter - OData filter options.
 */
export const ProtectedItemsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProtectedItemsGetInput,
  outputSchema: ProtectedItemsGetOutput,
}));
// Input Schema
export interface ProtectionContainerOperationResultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  operationId: string;
}
export const ProtectionContainerOperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/operationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionContainerOperationResultsGetInput>;

// Output Schema
export interface ProtectionContainerOperationResultsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectionContainerOperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectionContainerOperationResultsGetOutput>;

// The operation
/**
 * Fetches the result of any operation on the container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - vaults
 * @param fabricName - backupFabrics
 * @param containerName - The name of the ProtectionContainerResource
 * @param operationId - The name of the ProtectionContainerResource
 */
export const ProtectionContainerOperationResultsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectionContainerOperationResultsGetInput,
    outputSchema: ProtectionContainerOperationResultsGetOutput,
  }));
// Input Schema
export interface ProtectionContainerRefreshOperationResultsGetInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  fabricName: string;
  operationId: string;
}
export const ProtectionContainerRefreshOperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/operationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionContainerRefreshOperationResultsGetInput>;

// Output Schema
export type ProtectionContainerRefreshOperationResultsGetOutput = void;
export const ProtectionContainerRefreshOperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProtectionContainerRefreshOperationResultsGetOutput>;

// The operation
/**
 * Provides the result of the refresh operation triggered by the BeginRefresh operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param fabricName - Fabric name associated with the container.
 * @param operationId - Operation ID associated with the operation whose result needs to be fetched.
 */
export const ProtectionContainerRefreshOperationResultsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectionContainerRefreshOperationResultsGetInput,
    outputSchema: ProtectionContainerRefreshOperationResultsGetOutput,
  }));
// Input Schema
export interface ProtectionContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
}
export const ProtectionContainersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionContainersGetInput>;

// Output Schema
export interface ProtectionContainersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectionContainersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectionContainersGetOutput>;

// The operation
/**
 * Gets details of the specific container registered to your Recovery Services Vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 */
export const ProtectionContainersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProtectionContainersGetInput,
    outputSchema: ProtectionContainersGetOutput,
  }),
);
// Input Schema
export interface ProtectionContainersInquireInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  $filter?: string;
}
export const ProtectionContainersInquireInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/inquire",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionContainersInquireInput>;

// Output Schema
export type ProtectionContainersInquireOutput = void;
export const ProtectionContainersInquireOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProtectionContainersInquireOutput>;

// The operation
/**
 * This is an async operation and the results should be tracked using location header or Azure-async-url.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param $filter - OData filter options.
 */
export const ProtectionContainersInquire = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProtectionContainersInquireInput,
    outputSchema: ProtectionContainersInquireOutput,
  }),
);
// Input Schema
export interface ProtectionContainersRefreshInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  fabricName: string;
  $filter?: string;
}
export const ProtectionContainersRefreshInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/refreshContainers",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionContainersRefreshInput>;

// Output Schema
export type ProtectionContainersRefreshOutput = void;
export const ProtectionContainersRefreshOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProtectionContainersRefreshOutput>;

// The operation
/**
 * Discovers all the containers in the subscription that can be backed up to Recovery Services Vault. This is an
 * asynchronous operation. To know the status of the operation, call GetRefreshOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param fabricName - Fabric name associated the container.
 * @param $filter - OData filter options.
 */
export const ProtectionContainersRefresh = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProtectionContainersRefreshInput,
    outputSchema: ProtectionContainersRefreshOutput,
  }),
);
// Input Schema
export interface ProtectionContainersRegisterInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  properties?: {
    friendlyName?: string;
    backupManagementType?:
      | "Invalid"
      | "AzureIaasVM"
      | "MAB"
      | "DPM"
      | "AzureBackupServer"
      | "AzureSql"
      | "AzureStorage"
      | "AzureWorkload"
      | "DefaultBackup";
    registrationStatus?: string;
    healthStatus?: string;
    containerType:
      | "Invalid"
      | "Unknown"
      | "IaasVMContainer"
      | "IaasVMServiceContainer"
      | "DPMContainer"
      | "AzureBackupServerContainer"
      | "MABContainer"
      | "Cluster"
      | "AzureSqlContainer"
      | "Windows"
      | "VCenter"
      | "VMAppContainer"
      | "SQLAGWorkLoadContainer"
      | "StorageContainer"
      | "GenericContainer"
      | "Microsoft.ClassicCompute/virtualMachines"
      | "Microsoft.Compute/virtualMachines"
      | "AzureWorkloadContainer";
    protectableObjectType?: string;
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
}
export const ProtectionContainersRegisterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        friendlyName: Schema.optional(Schema.String),
        backupManagementType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "AzureIaasVM",
            "MAB",
            "DPM",
            "AzureBackupServer",
            "AzureSql",
            "AzureStorage",
            "AzureWorkload",
            "DefaultBackup",
          ]),
        ),
        registrationStatus: Schema.optional(Schema.String),
        healthStatus: Schema.optional(Schema.String),
        containerType: Schema.Literals([
          "Invalid",
          "Unknown",
          "IaasVMContainer",
          "IaasVMServiceContainer",
          "DPMContainer",
          "AzureBackupServerContainer",
          "MABContainer",
          "Cluster",
          "AzureSqlContainer",
          "Windows",
          "VCenter",
          "VMAppContainer",
          "SQLAGWorkLoadContainer",
          "StorageContainer",
          "GenericContainer",
          "Microsoft.ClassicCompute/virtualMachines",
          "Microsoft.Compute/virtualMachines",
          "AzureWorkloadContainer",
        ]),
        protectableObjectType: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionContainersRegisterInput>;

// Output Schema
export interface ProtectionContainersRegisterOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectionContainersRegisterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectionContainersRegisterOutput>;

// The operation
/**
 * Registers the container with Recovery Services vault.
 * This is an asynchronous operation. To track the operation status, use location header to call get latest status of
 * the operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 */
export const ProtectionContainersRegister =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectionContainersRegisterInput,
    outputSchema: ProtectionContainersRegisterOutput,
  }));
// Input Schema
export interface ProtectionContainersUnregisterInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
}
export const ProtectionContainersUnregisterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionContainersUnregisterInput>;

// Output Schema
export type ProtectionContainersUnregisterOutput = void;
export const ProtectionContainersUnregisterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProtectionContainersUnregisterOutput>;

// The operation
/**
 * Unregisters the given container from your Recovery Services Vault. This is an asynchronous operation. To determine
 * whether the backend service has finished processing the request, call Get Container Operation Result API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 */
export const ProtectionContainersUnregister =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectionContainersUnregisterInput,
    outputSchema: ProtectionContainersUnregisterOutput,
  }));
// Input Schema
export interface ProtectionIntentCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  intentObjectName: string;
  properties?: {
    protectionIntentItemType:
      | "Invalid"
      | "AzureResourceItem"
      | "RecoveryServiceVaultItem"
      | "AzureWorkloadContainerAutoProtectionIntent"
      | "AzureWorkloadAutoProtectionIntent"
      | "AzureWorkloadSQLAutoProtectionIntent";
    backupManagementType?:
      | "Invalid"
      | "AzureIaasVM"
      | "MAB"
      | "DPM"
      | "AzureBackupServer"
      | "AzureSql"
      | "AzureStorage"
      | "AzureWorkload"
      | "DefaultBackup";
    sourceResourceId?: string;
    itemId?: string;
    policyId?: string;
    protectionState?:
      | "Invalid"
      | "NotProtected"
      | "Protecting"
      | "Protected"
      | "ProtectionFailed";
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
}
export const ProtectionIntentCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    intentObjectName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        protectionIntentItemType: Schema.Literals([
          "Invalid",
          "AzureResourceItem",
          "RecoveryServiceVaultItem",
          "AzureWorkloadContainerAutoProtectionIntent",
          "AzureWorkloadAutoProtectionIntent",
          "AzureWorkloadSQLAutoProtectionIntent",
        ]),
        backupManagementType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "AzureIaasVM",
            "MAB",
            "DPM",
            "AzureBackupServer",
            "AzureSql",
            "AzureStorage",
            "AzureWorkload",
            "DefaultBackup",
          ]),
        ),
        sourceResourceId: Schema.optional(Schema.String),
        itemId: Schema.optional(Schema.String),
        policyId: Schema.optional(Schema.String),
        protectionState: Schema.optional(
          Schema.Literals([
            "Invalid",
            "NotProtected",
            "Protecting",
            "Protected",
            "ProtectionFailed",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/backupProtectionIntent/{intentObjectName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionIntentCreateOrUpdateInput>;

// Output Schema
export interface ProtectionIntentCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectionIntentCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectionIntentCreateOrUpdateOutput>;

// The operation
/**
 * Create Intent for Enabling backup of an item. This is a synchronous operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param intentObjectName - Backed up item name whose details are to be fetched.
 */
export const ProtectionIntentCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectionIntentCreateOrUpdateInput,
    outputSchema: ProtectionIntentCreateOrUpdateOutput,
  }));
// Input Schema
export interface ProtectionIntentDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  intentObjectName: string;
}
export const ProtectionIntentDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    intentObjectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/backupProtectionIntent/{intentObjectName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionIntentDeleteInput>;

// Output Schema
export type ProtectionIntentDeleteOutput = void;
export const ProtectionIntentDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProtectionIntentDeleteOutput>;

// The operation
/**
 * Used to remove intent from an item
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param intentObjectName - Backed up item name whose details are to be fetched.
 */
export const ProtectionIntentDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProtectionIntentDeleteInput,
    outputSchema: ProtectionIntentDeleteOutput,
  }),
);
// Input Schema
export interface ProtectionIntentGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  intentObjectName: string;
}
export const ProtectionIntentGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    intentObjectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/backupProtectionIntent/{intentObjectName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionIntentGetInput>;

// Output Schema
export interface ProtectionIntentGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectionIntentGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectionIntentGetOutput>;

// The operation
/**
 * Provides the details of the protection intent up item. This is an asynchronous operation. To know the status of the operation,
 * call the GetItemOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param intentObjectName - Backed up item name whose details are to be fetched.
 */
export const ProtectionIntentGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProtectionIntentGetInput,
  outputSchema: ProtectionIntentGetOutput,
}));
// Input Schema
export interface ProtectionIntentValidateInput {
  azureRegion: string;
  subscriptionId: string;
  resourceType?:
    | "Invalid"
    | "VM"
    | "FileFolder"
    | "AzureSqlDb"
    | "SQLDB"
    | "Exchange"
    | "Sharepoint"
    | "VMwareVM"
    | "SystemState"
    | "Client"
    | "GenericDataSource"
    | "SQLDataBase"
    | "AzureFileShare"
    | "SAPHanaDatabase"
    | "SAPAseDatabase"
    | "SAPHanaDBInstance";
  resourceId?: string;
  vaultId?: string;
  properties?: string;
}
export const ProtectionIntentValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    azureRegion: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.optional(
      Schema.Literals([
        "Invalid",
        "VM",
        "FileFolder",
        "AzureSqlDb",
        "SQLDB",
        "Exchange",
        "Sharepoint",
        "VMwareVM",
        "SystemState",
        "Client",
        "GenericDataSource",
        "SQLDataBase",
        "AzureFileShare",
        "SAPHanaDatabase",
        "SAPAseDatabase",
        "SAPHanaDBInstance",
      ]),
    ),
    resourceId: Schema.optional(Schema.String),
    vaultId: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupPreValidateProtection",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionIntentValidateInput>;

// Output Schema
export interface ProtectionIntentValidateOutput {
  status?: "Invalid" | "Succeeded" | "Failed";
  errorCode?: string;
  errorMessage?: string;
  recommendation?: string;
  containerName?: string;
  protectedItemName?: string;
}
export const ProtectionIntentValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["Invalid", "Succeeded", "Failed"]),
    ),
    errorCode: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    recommendation: Schema.optional(Schema.String),
    containerName: Schema.optional(Schema.String),
    protectedItemName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProtectionIntentValidateOutput>;

// The operation
/**
 * It will validate followings
1. Vault capacity
2. VM is already protected
3. Any VM related configuration passed in properties.
 *
 * It will validate followings
 * 1. Vault capacity
 * 2. VM is already protected
 * 3. Any VM related configuration passed in properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param azureRegion - Azure region to hit Api
 * @param subscriptionId - The ID of the target subscription.
 */
export const ProtectionIntentValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProtectionIntentValidateInput,
    outputSchema: ProtectionIntentValidateOutput,
  }),
);
// Input Schema
export interface ProtectionPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  policyName: string;
  properties?: {
    protectedItemsCount?: number;
    backupManagementType: string;
    resourceGuardOperationRequests?: string[];
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
}
export const ProtectionPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        protectedItemsCount: Schema.optional(Schema.Number),
        backupManagementType: Schema.String,
        resourceGuardOperationRequests: Schema.optional(
          Schema.Array(Schema.String),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies/{policyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionPoliciesCreateOrUpdateInput>;

// Output Schema
export interface ProtectionPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectionPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectionPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
 * using GetPolicyOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param policyName - Backup policy information to be fetched.
 */
export const ProtectionPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectionPoliciesCreateOrUpdateInput,
    outputSchema: ProtectionPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ProtectionPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  policyName: string;
}
export const ProtectionPoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies/{policyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionPoliciesDeleteInput>;

// Output Schema
export type ProtectionPoliciesDeleteOutput = void;
export const ProtectionPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProtectionPoliciesDeleteOutput>;

// The operation
/**
 * Deletes specified backup policy from your Recovery Services Vault. This is an asynchronous operation. Status of the
 * operation can be fetched using GetProtectionPolicyOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param policyName - Backup policy information to be fetched.
 */
export const ProtectionPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProtectionPoliciesDeleteInput,
    outputSchema: ProtectionPoliciesDeleteOutput,
  }),
);
// Input Schema
export interface ProtectionPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  policyName: string;
}
export const ProtectionPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies/{policyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionPoliciesGetInput>;

// Output Schema
export interface ProtectionPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectionPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectionPoliciesGetOutput>;

// The operation
/**
 * Provides the details of the backup policies associated to Recovery Services Vault. This is an asynchronous
 * operation. Status of the operation can be fetched using GetPolicyOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param policyName - Backup policy information to be fetched.
 */
export const ProtectionPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProtectionPoliciesGetInput,
    outputSchema: ProtectionPoliciesGetOutput,
  }),
);
// Input Schema
export interface ProtectionPolicyOperationResultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  policyName: string;
  operationId: string;
}
export const ProtectionPolicyOperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies/{policyName}/operationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionPolicyOperationResultsGetInput>;

// Output Schema
export interface ProtectionPolicyOperationResultsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ProtectionPolicyOperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProtectionPolicyOperationResultsGetOutput>;

// The operation
/**
 * Provides the result of an operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - vaults
 * @param policyName - The name of the ProtectionPolicyResource
 * @param operationId - The name of the ProtectionPolicyResource
 */
export const ProtectionPolicyOperationResultsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectionPolicyOperationResultsGetInput,
    outputSchema: ProtectionPolicyOperationResultsGetOutput,
  }));
// Input Schema
export interface ProtectionPolicyOperationStatusesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  policyName: string;
  operationId: string;
}
export const ProtectionPolicyOperationStatusesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies/{policyName}/operations/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectionPolicyOperationStatusesGetInput>;

// Output Schema
export interface ProtectionPolicyOperationStatusesGetOutput {
  id?: string;
  name?: string;
  status?: "Invalid" | "InProgress" | "Succeeded" | "Failed" | "Canceled";
  startTime?: string;
  endTime?: string;
  error?: { code?: string; message?: string };
  properties?: { objectType: string };
}
export const ProtectionPolicyOperationStatusesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Invalid",
        "InProgress",
        "Succeeded",
        "Failed",
        "Canceled",
      ]),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ProtectionPolicyOperationStatusesGetOutput>;

// The operation
/**
 * Provides the status of the asynchronous operations like backup, restore. The status can be in progress, completed
 * or failed. You can refer to the Operation Status enum for all the possible states of an operation. Some operations
 * create jobs. This method returns the list of jobs associated with operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - vaults
 * @param policyName - The name of the ProtectionPolicyResource
 * @param operationId - The name of the ProtectionPolicyResource
 */
export const ProtectionPolicyOperationStatusesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectionPolicyOperationStatusesGetInput,
    outputSchema: ProtectionPolicyOperationStatusesGetOutput,
  }));
// Input Schema
export interface RecoveryPointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  recoveryPointId: string;
}
export const RecoveryPointsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    recoveryPointId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}",
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
 * Provides the information of the backed up data identified using RecoveryPointID. This is an asynchronous operation.
 * To know the status of the operation, call the GetProtectedItemOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 * @param recoveryPointId - RecoveryPointID represents the backed up data to be fetched.
 */
export const RecoveryPointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecoveryPointsGetInput,
  outputSchema: RecoveryPointsGetOutput,
}));
// Input Schema
export interface RecoveryPointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  $filter?: string;
}
export const RecoveryPointsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RecoveryPointsListInput>;

// Output Schema
export interface RecoveryPointsListOutput {
  nextLink?: string;
}
export const RecoveryPointsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RecoveryPointsListOutput>;

// The operation
/**
 * Lists the backup copies for the backed up item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 * @param $filter - OData filter options.
 */
export const RecoveryPointsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecoveryPointsListInput,
  outputSchema: RecoveryPointsListOutput,
}));
// Input Schema
export interface RecoveryPointsRecommendedForMoveListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  objectType?: string;
  excludedRPList?: string[];
}
export const RecoveryPointsRecommendedForMoveListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    objectType: Schema.optional(Schema.String),
    excludedRPList: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPointsRecommendedForMove",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RecoveryPointsRecommendedForMoveListInput>;

// Output Schema
export interface RecoveryPointsRecommendedForMoveListOutput {
  nextLink?: string;
}
export const RecoveryPointsRecommendedForMoveListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RecoveryPointsRecommendedForMoveListOutput>;

// The operation
/**
 * Lists the recovery points recommended for move to another tier
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 */
export const RecoveryPointsRecommendedForMoveList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RecoveryPointsRecommendedForMoveListInput,
    outputSchema: RecoveryPointsRecommendedForMoveListOutput,
  }));
// Input Schema
export interface ResourceGuardProxiesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const ResourceGuardProxiesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupResourceGuardProxies",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardProxiesGetInput>;

// Output Schema
export interface ResourceGuardProxiesGetOutput {
  nextLink?: string;
}
export const ResourceGuardProxiesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ResourceGuardProxiesGetOutput>;

// The operation
/**
 * List the ResourceGuardProxies under vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const ResourceGuardProxiesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ResourceGuardProxiesGetInput,
    outputSchema: ResourceGuardProxiesGetOutput,
  }),
);
// Input Schema
export interface ResourceGuardProxyDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  resourceGuardProxyName: string;
}
export const ResourceGuardProxyDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGuardProxyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardProxyDeleteInput>;

// Output Schema
export type ResourceGuardProxyDeleteOutput = void;
export const ResourceGuardProxyDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ResourceGuardProxyDeleteOutput>;

// The operation
/**
 * Delete ResourceGuardProxy under vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const ResourceGuardProxyDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ResourceGuardProxyDeleteInput,
    outputSchema: ResourceGuardProxyDeleteOutput,
  }),
);
// Input Schema
export interface ResourceGuardProxyGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  resourceGuardProxyName: string;
}
export const ResourceGuardProxyGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGuardProxyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardProxyGetInput>;

// Output Schema
export interface ResourceGuardProxyGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardProxyGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ResourceGuardProxyGetOutput>;

// The operation
/**
 * Returns ResourceGuardProxy under vault and with the name referenced in request
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const ResourceGuardProxyGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ResourceGuardProxyGetInput,
    outputSchema: ResourceGuardProxyGetOutput,
  }),
);
// Input Schema
export interface ResourceGuardProxyPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  resourceGuardProxyName: string;
  properties?: {
    resourceGuardResourceId: string;
    resourceGuardOperationDetails?: {
      vaultCriticalOperation?: string;
      defaultResourceRequest?: string;
    }[];
    lastUpdatedTime?: string;
    description?: string;
  };
  tags?: Record<string, string>;
  location?: string;
  eTag?: string;
}
export const ResourceGuardProxyPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGuardProxyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        resourceGuardResourceId: Schema.String,
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardProxyPutInput>;

// Output Schema
export interface ResourceGuardProxyPutOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ResourceGuardProxyPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ResourceGuardProxyPutOutput>;

// The operation
/**
 * Add or Update ResourceGuardProxy under vault
 * Secures vault critical operations
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const ResourceGuardProxyPut = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ResourceGuardProxyPutInput,
    outputSchema: ResourceGuardProxyPutOutput,
  }),
);
// Input Schema
export interface ResourceGuardProxyUnlockDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  resourceGuardProxyName: string;
  resourceGuardOperationRequests?: string[];
  resourceToBeDeleted?: string;
}
export const ResourceGuardProxyUnlockDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupResourceGuardProxies/{resourceGuardProxyName}/unlockDelete",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ResourceGuardProxyUnlockDeleteInput>;

// Output Schema
export interface ResourceGuardProxyUnlockDeleteOutput {
  unlockDeleteExpiryTime?: string;
}
export const ResourceGuardProxyUnlockDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unlockDeleteExpiryTime: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ResourceGuardProxyUnlockDeleteOutput>;

// The operation
/**
 * Secures delete ResourceGuardProxy operations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 */
export const ResourceGuardProxyUnlockDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceGuardProxyUnlockDeleteInput,
    outputSchema: ResourceGuardProxyUnlockDeleteOutput,
  }));
// Input Schema
export interface RestoresTriggerInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  fabricName: string;
  containerName: string;
  protectedItemName: string;
  recoveryPointId: string;
  location?: string;
  tags?: Record<string, string>;
  eTag?: string;
  properties?: {
    objectType: string;
    resourceGuardOperationRequests?: string[];
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
export const RestoresTriggerInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  fabricName: Schema.String.pipe(T.PathParam()),
  containerName: Schema.String.pipe(T.PathParam()),
  protectedItemName: Schema.String.pipe(T.PathParam()),
  recoveryPointId: Schema.String.pipe(T.PathParam()),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  eTag: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      objectType: Schema.String,
      resourceGuardOperationRequests: Schema.optional(
        Schema.Array(Schema.String),
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
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}/restore",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RestoresTriggerInput>;

// Output Schema
export type RestoresTriggerOutput = void;
export const RestoresTriggerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RestoresTriggerOutput>;

// The operation
/**
 * Restores the specified backed up data. This is an asynchronous operation. To know the status of this API call, use
 * GetProtectedItemOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the VaultResource
 * @param fabricName - The name of the BackupFabricResource
 * @param containerName - Name of the container whose details need to be fetched.
 * @param protectedItemName - Backed up item name whose details are to be fetched.
 * @param recoveryPointId - RecoveryPointID represents the backed up data to be fetched.
 */
export const RestoresTrigger = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RestoresTriggerInput,
  outputSchema: RestoresTriggerOutput,
}));
// Input Schema
export interface SecurityPINsGetInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  resourceGuardOperationRequests?: string[];
}
export const SecurityPINsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vaultName: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGuardOperationRequests: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupSecurityPIN",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<SecurityPINsGetInput>;

// Output Schema
export interface SecurityPINsGetOutput {
  token?: string;
  expiryTimeInUtcTicks?: number;
  securityPIN?: string;
}
export const SecurityPINsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  token: Schema.optional(Schema.String),
  expiryTimeInUtcTicks: Schema.optional(Schema.Number),
  securityPIN: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SecurityPINsGetOutput>;

// The operation
/**
 * Get the security PIN.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SecurityPINsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecurityPINsGetInput,
  outputSchema: SecurityPINsGetOutput,
}));
// Input Schema
export interface TieringCostOperationStatusGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationId: string;
}
export const TieringCostOperationStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupTieringCost/default/operationsStatus/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<TieringCostOperationStatusGetInput>;

// Output Schema
export interface TieringCostOperationStatusGetOutput {
  id?: string;
  name?: string;
  status?: "Invalid" | "InProgress" | "Succeeded" | "Failed" | "Canceled";
  startTime?: string;
  endTime?: string;
  error?: { code?: string; message?: string };
  properties?: { objectType: string };
}
export const TieringCostOperationStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Invalid",
        "InProgress",
        "Succeeded",
        "Failed",
        "Canceled",
      ]),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<TieringCostOperationStatusGetOutput>;

// The operation
/**
 * Gets the status of async operations of tiering cost
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 */
export const TieringCostOperationStatusGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TieringCostOperationStatusGetInput,
    outputSchema: TieringCostOperationStatusGetOutput,
  }));
// Input Schema
export interface ValidateOperationResultsGetInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  operationId: string;
}
export const ValidateOperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupValidateOperationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ValidateOperationResultsGetInput>;

// Output Schema
export interface ValidateOperationResultsGetOutput {
  validateOperationResponse?: {
    validationResults?: {
      code?: string;
      message?: string;
      recommendations?: string[];
    }[];
  };
}
export const ValidateOperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOperationResponse: Schema.optional(
      Schema.Struct({
        validationResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              recommendations: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ValidateOperationResultsGetOutput>;

// The operation
/**
 * Fetches the result of a triggered validate operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param operationId - OperationID which represents the operation whose result needs to be fetched.
 */
export const ValidateOperationResultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ValidateOperationResultsGetInput,
    outputSchema: ValidateOperationResultsGetOutput,
  }),
);
// Input Schema
export interface ValidateOperationStatusesGetInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  operationId: string;
}
export const ValidateOperationStatusesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupValidateOperationsStatuses/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ValidateOperationStatusesGetInput>;

// Output Schema
export interface ValidateOperationStatusesGetOutput {
  id?: string;
  name?: string;
  status?: "Invalid" | "InProgress" | "Succeeded" | "Failed" | "Canceled";
  startTime?: string;
  endTime?: string;
  error?: { code?: string; message?: string };
  properties?: { objectType: string };
}
export const ValidateOperationStatusesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Invalid",
        "InProgress",
        "Succeeded",
        "Failed",
        "Canceled",
      ]),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        objectType: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ValidateOperationStatusesGetOutput>;

// The operation
/**
 * Fetches the status of a triggered validate operation. The status can be in progress, completed
 * or failed. You can refer to the OperationStatus enum for all the possible states of the operation.
 * If operation has completed, this method returns the list of errors obtained while validating the operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param operationId - OperationID represents the operation whose status needs to be fetched.
 */
export const ValidateOperationStatusesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ValidateOperationStatusesGetInput,
    outputSchema: ValidateOperationStatusesGetOutput,
  }));
// Input Schema
export interface ValidateOperationTriggerInput {
  vaultName: string;
  resourceGroupName: string;
  subscriptionId: string;
  id: string;
  properties: { objectType: string };
}
export const ValidateOperationTriggerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vaultName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    properties: Schema.Struct({
      objectType: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupTriggerValidateOperation",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ValidateOperationTriggerInput>;

// Output Schema
export type ValidateOperationTriggerOutput = void;
export const ValidateOperationTriggerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ValidateOperationTriggerOutput>;

// The operation
/**
 * Validate operation for specified backed up item in the form of an asynchronous operation. Returns tracking headers which can be tracked using GetValidateOperationResult API.
 *
 * @param api-version - The API version to use for this operation.
 * @param vaultName - The name of the recovery services vault.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ValidateOperationTrigger = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ValidateOperationTriggerInput,
    outputSchema: ValidateOperationTriggerOutput,
  }),
);
