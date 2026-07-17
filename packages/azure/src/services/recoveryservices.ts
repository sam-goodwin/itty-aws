/**
 * Azure Recoveryservices API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeletedVaultsGetInput {
  subscriptionId: string;
  location: string;
  deletedVaultName: string;
}
export const DeletedVaultsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  deletedVaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{location}/deletedVaults/{deletedVaultName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<DeletedVaultsGetInput>;

// Output Schema
export interface DeletedVaultsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DeletedVaultsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<DeletedVaultsGetOutput>;

// The operation
/**
 * Get a specific deleted vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param deletedVaultName - The name of the DeletedVault
 */
export const DeletedVaultsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeletedVaultsGetInput,
  outputSchema: DeletedVaultsGetOutput,
}));
// Input Schema
export interface DeletedVaultsGetOperationStatusInput {
  subscriptionId: string;
  location: string;
  deletedVaultName: string;
  operationId: string;
}
export const DeletedVaultsGetOperationStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    deletedVaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{location}/deletedVaults/{deletedVaultName}/operations/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DeletedVaultsGetOperationStatusInput>;

// Output Schema
export interface DeletedVaultsGetOperationStatusOutput {
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
  status?: string;
  startTime?: string;
}
export const DeletedVaultsGetOperationStatusOutput =
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
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DeletedVaultsGetOperationStatusOutput>;

// The operation
/**
 * Get the operation status of a deleted vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param deletedVaultName - The name of deleted vault.
 */
export const DeletedVaultsGetOperationStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeletedVaultsGetOperationStatusInput,
    outputSchema: DeletedVaultsGetOperationStatusOutput,
  }));
// Input Schema
export interface DeletedVaultsListBySubscriptionIdInput {
  subscriptionId: string;
  location: string;
}
export const DeletedVaultsListBySubscriptionIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{location}/deletedVaults",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DeletedVaultsListBySubscriptionIdInput>;

// Output Schema
export interface DeletedVaultsListBySubscriptionIdOutput {
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
export const DeletedVaultsListBySubscriptionIdOutput =
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
  }) as unknown as Schema.Codec<DeletedVaultsListBySubscriptionIdOutput>;

// The operation
/**
 * List deleted vaults in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const DeletedVaultsListBySubscriptionId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeletedVaultsListBySubscriptionIdInput,
    outputSchema: DeletedVaultsListBySubscriptionIdOutput,
  }));
// Input Schema
export interface DeletedVaultsUndeleteInput {
  subscriptionId: string;
  location: string;
  deletedVaultName: string;
  properties: { recoveryResourceGroupId: string };
}
export const DeletedVaultsUndeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    deletedVaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      recoveryResourceGroupId: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{location}/deletedVaults/{deletedVaultName}/undelete",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DeletedVaultsUndeleteInput>;

// Output Schema
export interface DeletedVaultsUndeleteOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DeletedVaultsUndeleteOutput =
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
  }) as unknown as Schema.Codec<DeletedVaultsUndeleteOutput>;

// The operation
/**
 * Start undelete of a deleted vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param deletedVaultName - The name of the DeletedVault
 */
export const DeletedVaultsUndelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeletedVaultsUndeleteInput,
  outputSchema: DeletedVaultsUndeleteOutput,
}));
// Input Schema
export interface GetOperationResultInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationId: string;
}
export const GetOperationResultInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/operationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<GetOperationResultInput>;

// Output Schema
export interface GetOperationResultOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GetOperationResultOutput =
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
  }) as unknown as Schema.Codec<GetOperationResultOutput>;

// The operation
/**
 * Gets the operation result for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the Vault
 * @param operationId - The name of the Vault
 */
export const GetOperationResult = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOperationResultInput,
  outputSchema: GetOperationResultOutput,
}));
// Input Schema
export interface GetOperationStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationId: string;
}
export const GetOperationStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/operationStatus/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<GetOperationStatusInput>;

// Output Schema
export interface GetOperationStatusOutput {
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
  status?: string;
  startTime?: string;
}
export const GetOperationStatusOutput =
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
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GetOperationStatusOutput>;

// The operation
/**
 * Gets the operation status for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 */
export const GetOperationStatus = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOperationStatusInput,
  outputSchema: GetOperationStatusOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.RecoveryServices/operations",
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
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2026-05-01",
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
 * Returns a specified private link resource that need to be created for Backup and SiteRecovery
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/privateLinkResources",
      apiVersion: "2026-05-01",
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
 * Returns the list of private link resources that need to be created for Backup and SiteRecovery
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesListInput,
  outputSchema: PrivateLinkResourcesListOutput,
}));
// Input Schema
export interface RecoveryServicesCapabilitiesInput {
  subscriptionId: string;
  location: string;
  properties?: {
    dnsZones?: {
      subResource?:
        | "AzureBackup"
        | "AzureBackup_secondary"
        | "AzureSiteRecovery";
    }[];
  };
  type: string;
}
export const RecoveryServicesCapabilitiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        dnsZones: Schema.optional(
          Schema.Array(
            Schema.Struct({
              subResource: Schema.optional(
                Schema.Literals([
                  "AzureBackup",
                  "AzureBackup_secondary",
                  "AzureSiteRecovery",
                ]),
              ),
            }),
          ),
        ),
      }),
    ),
    type: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{location}/capabilities",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RecoveryServicesCapabilitiesInput>;

// Output Schema
export interface RecoveryServicesCapabilitiesOutput {
  type: string;
}
export const RecoveryServicesCapabilitiesOutput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.String,
  }) as unknown as Schema.Codec<RecoveryServicesCapabilitiesOutput>;

// The operation
/**
 * API to get details about capabilities provided by Microsoft.RecoveryServices RP
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location of the resource.
 */
export const RecoveryServicesCapabilities =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RecoveryServicesCapabilitiesInput,
    outputSchema: RecoveryServicesCapabilitiesOutput,
  }));
// Input Schema
export interface RecoveryServicesCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  type?: string;
  name?: string;
}
export const RecoveryServicesCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/locations/{location}/checkNameAvailability",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RecoveryServicesCheckNameAvailabilityInput>;

// Output Schema
export interface RecoveryServicesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const RecoveryServicesCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RecoveryServicesCheckNameAvailabilityOutput>;

// The operation
/**
 * API to check for resource name availability.
A name is available if no other resource exists that has the same SubscriptionId, Resource Name and Type
or if one or more such resources exist, each of these must be GC'd and their time of deletion be more than 24 Hours Ago
 *
 * API to check for resource name availability.
 * A name is available if no other resource exists that has the same SubscriptionId, Resource Name and Type
 * or if one or more such resources exist, each of these must be GC'd and their time of deletion be more than 24 Hours Ago
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 */
export const RecoveryServicesCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RecoveryServicesCheckNameAvailabilityInput,
    outputSchema: RecoveryServicesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface RegisteredIdentitiesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  identityName: string;
}
export const RegisteredIdentitiesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    identityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/registeredIdentities/{identityName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<RegisteredIdentitiesDeleteInput>;

// Output Schema
export type RegisteredIdentitiesDeleteOutput = void;
export const RegisteredIdentitiesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegisteredIdentitiesDeleteOutput>;

// The operation
/**
 * Unregisters the given container from your Recovery Services vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 * @param identityName - Name of the protection container to unregister.
 */
export const RegisteredIdentitiesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredIdentitiesDeleteInput,
  outputSchema: RegisteredIdentitiesDeleteOutput,
}));
// Input Schema
export interface ReplicationUsagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const ReplicationUsagesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/replicationUsages",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationUsagesListInput>;

// Output Schema
export interface ReplicationUsagesListOutput {
  value?: {
    monitoringSummary?: {
      unHealthyVmCount?: number;
      unHealthyProviderCount?: number;
      eventsCount?: number;
      deprecatedProviderCount?: number;
      supportedProviderCount?: number;
      unsupportedProviderCount?: number;
    };
    jobsSummary?: {
      failedJobs?: number;
      suspendedJobs?: number;
      inProgressJobs?: number;
    };
    protectedItemCount?: number;
    recoveryPlanCount?: number;
    registeredServersCount?: number;
    recoveryServicesProviderAuthType?: number;
  }[];
  nextLink?: string;
}
export const ReplicationUsagesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          monitoringSummary: Schema.optional(
            Schema.Struct({
              unHealthyVmCount: Schema.optional(Schema.Number),
              unHealthyProviderCount: Schema.optional(Schema.Number),
              eventsCount: Schema.optional(Schema.Number),
              deprecatedProviderCount: Schema.optional(Schema.Number),
              supportedProviderCount: Schema.optional(Schema.Number),
              unsupportedProviderCount: Schema.optional(Schema.Number),
            }),
          ),
          jobsSummary: Schema.optional(
            Schema.Struct({
              failedJobs: Schema.optional(Schema.Number),
              suspendedJobs: Schema.optional(Schema.Number),
              inProgressJobs: Schema.optional(Schema.Number),
            }),
          ),
          protectedItemCount: Schema.optional(Schema.Number),
          recoveryPlanCount: Schema.optional(Schema.Number),
          registeredServersCount: Schema.optional(Schema.Number),
          recoveryServicesProviderAuthType: Schema.optional(Schema.Number),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReplicationUsagesListOutput>;

// The operation
/**
 * Fetches the replication usages of the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the Vault
 */
export const ReplicationUsagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReplicationUsagesListInput,
  outputSchema: ReplicationUsagesListOutput,
}));
// Input Schema
export interface UsagesListByVaultsInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const UsagesListByVaultsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/usages",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<UsagesListByVaultsInput>;

// Output Schema
export interface UsagesListByVaultsOutput {
  value?: {
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond";
    quotaPeriod?: string;
    nextResetTime?: string;
    currentValue?: number;
    limit?: number;
    name?: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const UsagesListByVaultsOutput =
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
              "CountPerSecond",
              "BytesPerSecond",
            ]),
          ),
          quotaPeriod: Schema.optional(Schema.String),
          nextResetTime: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<UsagesListByVaultsOutput>;

// The operation
/**
 * Fetches the usages of the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the Vault
 */
export const UsagesListByVaults = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsagesListByVaultsInput,
  outputSchema: UsagesListByVaultsOutput,
}));
// Input Schema
export interface VaultCertificatesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  certificateName: string;
  properties?: {
    authType?:
      | "Invalid"
      | "ACS"
      | "AAD"
      | "AccessControlService"
      | "AzureActiveDirectory";
    certificate?: string;
  };
}
export const VaultCertificatesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        authType: Schema.optional(
          Schema.Literals([
            "Invalid",
            "ACS",
            "AAD",
            "AccessControlService",
            "AzureActiveDirectory",
          ]),
        ),
        certificate: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/certificates/{certificateName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<VaultCertificatesCreateInput>;

// Output Schema
export interface VaultCertificatesCreateOutput {
  name?: string;
  type?: string;
  id?: string;
  properties?: {
    authType: string;
    certificate?: string;
    friendlyName?: string;
    issuer?: string;
    resourceId?: number;
    subject?: string;
    thumbprint?: string;
    validFrom?: string;
    validTo?: string;
  };
}
export const VaultCertificatesCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        authType: Schema.String,
        certificate: Schema.optional(Schema.String),
        friendlyName: Schema.optional(Schema.String),
        issuer: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.Number),
        subject: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        validFrom: Schema.optional(Schema.String),
        validTo: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<VaultCertificatesCreateOutput>;

// The operation
/**
 * Uploads a certificate for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 * @param certificateName - Certificate friendly name.
 */
export const VaultCertificatesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VaultCertificatesCreateInput,
  outputSchema: VaultCertificatesCreateOutput,
}));
// Input Schema
export interface VaultExtendedInfoCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties?: {
    integrityKey?: string;
    encryptionKey?: string;
    encryptionKeyThumbprint?: string;
    algorithm?: string;
  };
  etag?: string;
}
export const VaultExtendedInfoCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        integrityKey: Schema.optional(Schema.String),
        encryptionKey: Schema.optional(Schema.String),
        encryptionKeyThumbprint: Schema.optional(Schema.String),
        algorithm: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/extendedInformation/vaultExtendedInfo",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<VaultExtendedInfoCreateOrUpdateInput>;

// Output Schema
export interface VaultExtendedInfoCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const VaultExtendedInfoCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VaultExtendedInfoCreateOrUpdateOutput>;

// The operation
/**
 * Create vault extended info.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 */
export const VaultExtendedInfoCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VaultExtendedInfoCreateOrUpdateInput,
    outputSchema: VaultExtendedInfoCreateOrUpdateOutput,
  }));
// Input Schema
export interface VaultExtendedInfoGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const VaultExtendedInfoGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/extendedInformation/vaultExtendedInfo",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<VaultExtendedInfoGetInput>;

// Output Schema
export interface VaultExtendedInfoGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const VaultExtendedInfoGetOutput =
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
  }) as unknown as Schema.Codec<VaultExtendedInfoGetOutput>;

// The operation
/**
 * Get the vault extended info.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 */
export const VaultExtendedInfoGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VaultExtendedInfoGetInput,
  outputSchema: VaultExtendedInfoGetOutput,
}));
// Input Schema
export interface VaultExtendedInfoUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties?: {
    integrityKey?: string;
    encryptionKey?: string;
    encryptionKeyThumbprint?: string;
    algorithm?: string;
  };
  etag?: string;
}
export const VaultExtendedInfoUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        integrityKey: Schema.optional(Schema.String),
        encryptionKey: Schema.optional(Schema.String),
        encryptionKeyThumbprint: Schema.optional(Schema.String),
        algorithm: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/extendedInformation/vaultExtendedInfo",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<VaultExtendedInfoUpdateInput>;

// Output Schema
export interface VaultExtendedInfoUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const VaultExtendedInfoUpdateOutput =
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
  }) as unknown as Schema.Codec<VaultExtendedInfoUpdateOutput>;

// The operation
/**
 * Update vault extended info.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the recovery services vault.
 */
export const VaultExtendedInfoUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VaultExtendedInfoUpdateInput,
  outputSchema: VaultExtendedInfoUpdateOutput,
}));
// Input Schema
export interface VaultsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties?: {
    provisioningState?: string;
    upgradeDetails?: {
      operationId?: string;
      startTimeUtc?: string;
      lastUpdatedTimeUtc?: string;
      endTimeUtc?: string;
      status?: "Unknown" | "InProgress" | "Upgraded" | "Failed";
      message?: string;
      triggerType?: "UserTriggered" | "ForcedUpgrade";
      upgradedResourceId?: string;
      previousResourceId?: string;
    };
    privateEndpointConnections?: {
      id?: string;
      properties?: {
        provisioningState?: "Succeeded" | "Deleting" | "Failed" | "Pending";
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: string;
        };
        groupIds?: (
          | "AzureBackup"
          | "AzureBackup_secondary"
          | "AzureSiteRecovery"
        )[];
      };
      name?: string;
      type?: string;
      location?: string;
    }[];
    privateEndpointStateForBackup?: "None" | "Enabled";
    privateEndpointStateForSiteRecovery?: "None" | "Enabled";
    encryption?: {
      keyVaultProperties?: { keyUri?: string };
      kekIdentity?: {
        useSystemAssignedIdentity?: boolean;
        userAssignedIdentity?: string;
      };
      infrastructureEncryption?: "Enabled" | "Disabled";
    };
    moveDetails?: {
      operationId?: string;
      startTimeUtc?: string;
      completionTimeUtc?: string;
      sourceResourceId?: string;
      targetResourceId?: string;
    };
    moveState?:
      | "Unknown"
      | "InProgress"
      | "PrepareFailed"
      | "CommitFailed"
      | "PrepareTimedout"
      | "CommitTimedout"
      | "MoveSucceeded"
      | "Failure"
      | "CriticalFailure"
      | "PartialSuccess";
    backupStorageVersion?: "V1" | "V2" | "Unassigned";
    publicNetworkAccess?: "Enabled" | "Disabled";
    monitoringSettings?: {
      azureMonitorAlertSettings?: {
        alertsForAllJobFailures?: "Enabled" | "Disabled";
        alertsForAllReplicationIssues?: "Enabled" | "Disabled";
        alertsForAllFailoverIssues?: "Enabled" | "Disabled";
      };
      classicAlertSettings?: {
        alertsForCriticalOperations?: "Enabled" | "Disabled";
        emailNotificationsForSiteRecovery?: "Enabled" | "Disabled";
      };
    };
    costManagementSettings?: {
      granularityLevel?:
        | "VaultLevel"
        | "ProtectedItemLevel"
        | "ProtectedItemWithParentTag";
    };
    restoreSettings?: {
      crossSubscriptionRestoreSettings?: {
        crossSubscriptionRestoreState?:
          | "Enabled"
          | "Disabled"
          | "PermanentlyDisabled";
      };
    };
    redundancySettings?: {
      standardTierStorageRedundancy?:
        | "Invalid"
        | "LocallyRedundant"
        | "GeoRedundant"
        | "ZoneRedundant";
      crossRegionRestore?: "Enabled" | "Disabled";
    };
    securitySettings?: {
      immutabilitySettings?: {
        state?: "Disabled" | "Unlocked" | "Locked";
        configuration?: {
          type?: "AsPerPolicy" | "TimeBased";
          durationInDays?: number;
        };
      };
      softDeleteSettings?: {
        softDeleteState?: "Invalid" | "Enabled" | "Disabled" | "AlwaysON";
        softDeleteRetentionPeriodInDays?: number;
        enhancedSecurityState?: "Invalid" | "Enabled" | "Disabled" | "AlwaysON";
      };
      multiUserAuthorization?: "Invalid" | "Enabled" | "Disabled";
      sourceScanConfiguration?: {
        state?: "Invalid" | "Enabled" | "Disabled";
        sourceScanIdentity?: {
          operationIdentityType?: "SystemAssigned" | "UserAssigned";
          userAssignedIdentity?: string;
        };
      };
    };
    secureScore?: "None" | "Minimum" | "Adequate" | "Maximum";
    bcdrSecurityLevel?: "Poor" | "Fair" | "Good" | "Excellent";
    resourceGuardOperationRequests?: string[];
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "SystemAssigned"
      | "None"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  sku?: {
    name: "Standard" | "RS0";
    tier?: string;
    family?: string;
    size?: string;
    capacity?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const VaultsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        upgradeDetails: Schema.optional(
          Schema.Struct({
            operationId: Schema.optional(Schema.String),
            startTimeUtc: Schema.optional(Schema.String),
            lastUpdatedTimeUtc: Schema.optional(Schema.String),
            endTimeUtc: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Literals(["Unknown", "InProgress", "Upgraded", "Failed"]),
            ),
            message: Schema.optional(Schema.String),
            triggerType: Schema.optional(
              Schema.Literals(["UserTriggered", "ForcedUpgrade"]),
            ),
            upgradedResourceId: Schema.optional(Schema.String),
            previousResourceId: Schema.optional(Schema.String),
          }),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              properties: Schema.optional(
                Schema.Struct({
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Succeeded",
                      "Deleting",
                      "Failed",
                      "Pending",
                    ]),
                  ),
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
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
                  groupIds: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "AzureBackup",
                        "AzureBackup_secondary",
                        "AzureSiteRecovery",
                      ]),
                    ),
                  ),
                }),
              ),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              location: Schema.optional(Schema.String),
            }),
          ),
        ),
        privateEndpointStateForBackup: Schema.optional(
          Schema.Literals(["None", "Enabled"]),
        ),
        privateEndpointStateForSiteRecovery: Schema.optional(
          Schema.Literals(["None", "Enabled"]),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyUri: Schema.optional(Schema.String),
              }),
            ),
            kekIdentity: Schema.optional(
              Schema.Struct({
                useSystemAssignedIdentity: Schema.optional(Schema.Boolean),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            infrastructureEncryption: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        moveDetails: Schema.optional(
          Schema.Struct({
            operationId: Schema.optional(Schema.String),
            startTimeUtc: Schema.optional(Schema.String),
            completionTimeUtc: Schema.optional(Schema.String),
            sourceResourceId: Schema.optional(Schema.String),
            targetResourceId: Schema.optional(Schema.String),
          }),
        ),
        moveState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "InProgress",
            "PrepareFailed",
            "CommitFailed",
            "PrepareTimedout",
            "CommitTimedout",
            "MoveSucceeded",
            "Failure",
            "CriticalFailure",
            "PartialSuccess",
          ]),
        ),
        backupStorageVersion: Schema.optional(
          Schema.Literals(["V1", "V2", "Unassigned"]),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        monitoringSettings: Schema.optional(
          Schema.Struct({
            azureMonitorAlertSettings: Schema.optional(
              Schema.Struct({
                alertsForAllJobFailures: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                alertsForAllReplicationIssues: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                alertsForAllFailoverIssues: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
              }),
            ),
            classicAlertSettings: Schema.optional(
              Schema.Struct({
                alertsForCriticalOperations: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                emailNotificationsForSiteRecovery: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
              }),
            ),
          }),
        ),
        costManagementSettings: Schema.optional(
          Schema.Struct({
            granularityLevel: Schema.optional(
              Schema.Literals([
                "VaultLevel",
                "ProtectedItemLevel",
                "ProtectedItemWithParentTag",
              ]),
            ),
          }),
        ),
        restoreSettings: Schema.optional(
          Schema.Struct({
            crossSubscriptionRestoreSettings: Schema.optional(
              Schema.Struct({
                crossSubscriptionRestoreState: Schema.optional(
                  Schema.Literals([
                    "Enabled",
                    "Disabled",
                    "PermanentlyDisabled",
                  ]),
                ),
              }),
            ),
          }),
        ),
        redundancySettings: Schema.optional(
          Schema.Struct({
            standardTierStorageRedundancy: Schema.optional(
              Schema.Literals([
                "Invalid",
                "LocallyRedundant",
                "GeoRedundant",
                "ZoneRedundant",
              ]),
            ),
            crossRegionRestore: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        securitySettings: Schema.optional(
          Schema.Struct({
            immutabilitySettings: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Disabled", "Unlocked", "Locked"]),
                ),
                configuration: Schema.optional(
                  Schema.Struct({
                    type: Schema.optional(
                      Schema.Literals(["AsPerPolicy", "TimeBased"]),
                    ),
                    durationInDays: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            softDeleteSettings: Schema.optional(
              Schema.Struct({
                softDeleteState: Schema.optional(
                  Schema.Literals([
                    "Invalid",
                    "Enabled",
                    "Disabled",
                    "AlwaysON",
                  ]),
                ),
                softDeleteRetentionPeriodInDays: Schema.optional(Schema.Number),
                enhancedSecurityState: Schema.optional(
                  Schema.Literals([
                    "Invalid",
                    "Enabled",
                    "Disabled",
                    "AlwaysON",
                  ]),
                ),
              }),
            ),
            multiUserAuthorization: Schema.optional(
              Schema.Literals(["Invalid", "Enabled", "Disabled"]),
            ),
            sourceScanConfiguration: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Invalid", "Enabled", "Disabled"]),
                ),
                sourceScanIdentity: Schema.optional(
                  Schema.Struct({
                    operationIdentityType: Schema.optional(
                      Schema.Literals(["SystemAssigned", "UserAssigned"]),
                    ),
                    userAssignedIdentity: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        secureScore: Schema.optional(
          Schema.Literals(["None", "Minimum", "Adequate", "Maximum"]),
        ),
        bcdrSecurityLevel: Schema.optional(
          Schema.Literals(["Poor", "Fair", "Good", "Excellent"]),
        ),
        resourceGuardOperationRequests: Schema.optional(
          Schema.Array(Schema.String),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "SystemAssigned",
          "None",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
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
        name: Schema.Literals(["Standard", "RS0"]),
        tier: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<VaultsCreateOrUpdateInput>;

// Output Schema
export interface VaultsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const VaultsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VaultsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Recovery Services vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the Vault
 */
export const VaultsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VaultsCreateOrUpdateInput,
  outputSchema: VaultsCreateOrUpdateOutput,
}));
// Input Schema
export interface VaultsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const VaultsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<VaultsDeleteInput>;

// Output Schema
export type VaultsDeleteOutput = void;
export const VaultsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VaultsDeleteOutput>;

// The operation
/**
 * Deletes a vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the Vault
 */
export const VaultsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: VaultsDeleteInput,
  outputSchema: VaultsDeleteOutput,
}));
// Input Schema
export interface VaultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const VaultsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<VaultsGetInput>;

// Output Schema
export interface VaultsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const VaultsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<VaultsGetOutput>;

// The operation
/**
 * Get the Vault details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the Vault
 */
export const VaultsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VaultsGetInput,
  outputSchema: VaultsGetOutput,
}));
// Input Schema
export interface VaultsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const VaultsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<VaultsListByResourceGroupInput>;

// Output Schema
export interface VaultsListByResourceGroupOutput {
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
export const VaultsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<VaultsListByResourceGroupOutput>;

// The operation
/**
 * Retrieve a list of Vaults.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VaultsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: VaultsListByResourceGroupInput,
  outputSchema: VaultsListByResourceGroupOutput,
}));
// Input Schema
export interface VaultsListBySubscriptionIdInput {
  subscriptionId: string;
}
export const VaultsListBySubscriptionIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/vaults",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<VaultsListBySubscriptionIdInput>;

// Output Schema
export interface VaultsListBySubscriptionIdOutput {
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
export const VaultsListBySubscriptionIdOutput =
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
  }) as unknown as Schema.Codec<VaultsListBySubscriptionIdOutput>;

// The operation
/**
 * Fetches all the resources of the specified type in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const VaultsListBySubscriptionId = /*@__PURE__*/ API.make(() => ({
  inputSchema: VaultsListBySubscriptionIdInput,
  outputSchema: VaultsListBySubscriptionIdOutput,
}));
// Input Schema
export interface VaultsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties?: {
    provisioningState?: string;
    upgradeDetails?: {
      operationId?: string;
      startTimeUtc?: string;
      lastUpdatedTimeUtc?: string;
      endTimeUtc?: string;
      status?: "Unknown" | "InProgress" | "Upgraded" | "Failed";
      message?: string;
      triggerType?: "UserTriggered" | "ForcedUpgrade";
      upgradedResourceId?: string;
      previousResourceId?: string;
    };
    privateEndpointConnections?: {
      id?: string;
      properties?: {
        provisioningState?: "Succeeded" | "Deleting" | "Failed" | "Pending";
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: string;
        };
        groupIds?: (
          | "AzureBackup"
          | "AzureBackup_secondary"
          | "AzureSiteRecovery"
        )[];
      };
      name?: string;
      type?: string;
      location?: string;
    }[];
    privateEndpointStateForBackup?: "None" | "Enabled";
    privateEndpointStateForSiteRecovery?: "None" | "Enabled";
    encryption?: {
      keyVaultProperties?: { keyUri?: string };
      kekIdentity?: {
        useSystemAssignedIdentity?: boolean;
        userAssignedIdentity?: string;
      };
      infrastructureEncryption?: "Enabled" | "Disabled";
    };
    moveDetails?: {
      operationId?: string;
      startTimeUtc?: string;
      completionTimeUtc?: string;
      sourceResourceId?: string;
      targetResourceId?: string;
    };
    moveState?:
      | "Unknown"
      | "InProgress"
      | "PrepareFailed"
      | "CommitFailed"
      | "PrepareTimedout"
      | "CommitTimedout"
      | "MoveSucceeded"
      | "Failure"
      | "CriticalFailure"
      | "PartialSuccess";
    backupStorageVersion?: "V1" | "V2" | "Unassigned";
    publicNetworkAccess?: "Enabled" | "Disabled";
    monitoringSettings?: {
      azureMonitorAlertSettings?: {
        alertsForAllJobFailures?: "Enabled" | "Disabled";
        alertsForAllReplicationIssues?: "Enabled" | "Disabled";
        alertsForAllFailoverIssues?: "Enabled" | "Disabled";
      };
      classicAlertSettings?: {
        alertsForCriticalOperations?: "Enabled" | "Disabled";
        emailNotificationsForSiteRecovery?: "Enabled" | "Disabled";
      };
    };
    costManagementSettings?: {
      granularityLevel?:
        | "VaultLevel"
        | "ProtectedItemLevel"
        | "ProtectedItemWithParentTag";
    };
    restoreSettings?: {
      crossSubscriptionRestoreSettings?: {
        crossSubscriptionRestoreState?:
          | "Enabled"
          | "Disabled"
          | "PermanentlyDisabled";
      };
    };
    redundancySettings?: {
      standardTierStorageRedundancy?:
        | "Invalid"
        | "LocallyRedundant"
        | "GeoRedundant"
        | "ZoneRedundant";
      crossRegionRestore?: "Enabled" | "Disabled";
    };
    securitySettings?: {
      immutabilitySettings?: {
        state?: "Disabled" | "Unlocked" | "Locked";
        configuration?: {
          type?: "AsPerPolicy" | "TimeBased";
          durationInDays?: number;
        };
      };
      softDeleteSettings?: {
        softDeleteState?: "Invalid" | "Enabled" | "Disabled" | "AlwaysON";
        softDeleteRetentionPeriodInDays?: number;
        enhancedSecurityState?: "Invalid" | "Enabled" | "Disabled" | "AlwaysON";
      };
      multiUserAuthorization?: "Invalid" | "Enabled" | "Disabled";
      sourceScanConfiguration?: {
        state?: "Invalid" | "Enabled" | "Disabled";
        sourceScanIdentity?: {
          operationIdentityType?: "SystemAssigned" | "UserAssigned";
          userAssignedIdentity?: string;
        };
      };
    };
    secureScore?: "None" | "Minimum" | "Adequate" | "Maximum";
    bcdrSecurityLevel?: "Poor" | "Fair" | "Good" | "Excellent";
    resourceGuardOperationRequests?: string[];
  };
  sku?: {
    name: "Standard" | "RS0";
    tier?: string;
    family?: string;
    size?: string;
    capacity?: string;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "SystemAssigned"
      | "None"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
}
export const VaultsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(Schema.String),
      upgradeDetails: Schema.optional(
        Schema.Struct({
          operationId: Schema.optional(Schema.String),
          startTimeUtc: Schema.optional(Schema.String),
          lastUpdatedTimeUtc: Schema.optional(Schema.String),
          endTimeUtc: Schema.optional(Schema.String),
          status: Schema.optional(
            Schema.Literals(["Unknown", "InProgress", "Upgraded", "Failed"]),
          ),
          message: Schema.optional(Schema.String),
          triggerType: Schema.optional(
            Schema.Literals(["UserTriggered", "ForcedUpgrade"]),
          ),
          upgradedResourceId: Schema.optional(Schema.String),
          previousResourceId: Schema.optional(Schema.String),
        }),
      ),
      privateEndpointConnections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                provisioningState: Schema.optional(
                  Schema.Literals([
                    "Succeeded",
                    "Deleting",
                    "Failed",
                    "Pending",
                  ]),
                ),
                privateEndpoint: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
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
                groupIds: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "AzureBackup",
                      "AzureBackup_secondary",
                      "AzureSiteRecovery",
                    ]),
                  ),
                ),
              }),
            ),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            location: Schema.optional(Schema.String),
          }),
        ),
      ),
      privateEndpointStateForBackup: Schema.optional(
        Schema.Literals(["None", "Enabled"]),
      ),
      privateEndpointStateForSiteRecovery: Schema.optional(
        Schema.Literals(["None", "Enabled"]),
      ),
      encryption: Schema.optional(
        Schema.Struct({
          keyVaultProperties: Schema.optional(
            Schema.Struct({
              keyUri: Schema.optional(Schema.String),
            }),
          ),
          kekIdentity: Schema.optional(
            Schema.Struct({
              useSystemAssignedIdentity: Schema.optional(Schema.Boolean),
              userAssignedIdentity: Schema.optional(Schema.String),
            }),
          ),
          infrastructureEncryption: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
        }),
      ),
      moveDetails: Schema.optional(
        Schema.Struct({
          operationId: Schema.optional(Schema.String),
          startTimeUtc: Schema.optional(Schema.String),
          completionTimeUtc: Schema.optional(Schema.String),
          sourceResourceId: Schema.optional(Schema.String),
          targetResourceId: Schema.optional(Schema.String),
        }),
      ),
      moveState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "InProgress",
          "PrepareFailed",
          "CommitFailed",
          "PrepareTimedout",
          "CommitTimedout",
          "MoveSucceeded",
          "Failure",
          "CriticalFailure",
          "PartialSuccess",
        ]),
      ),
      backupStorageVersion: Schema.optional(
        Schema.Literals(["V1", "V2", "Unassigned"]),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      monitoringSettings: Schema.optional(
        Schema.Struct({
          azureMonitorAlertSettings: Schema.optional(
            Schema.Struct({
              alertsForAllJobFailures: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
              alertsForAllReplicationIssues: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
              alertsForAllFailoverIssues: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
            }),
          ),
          classicAlertSettings: Schema.optional(
            Schema.Struct({
              alertsForCriticalOperations: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
              emailNotificationsForSiteRecovery: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
            }),
          ),
        }),
      ),
      costManagementSettings: Schema.optional(
        Schema.Struct({
          granularityLevel: Schema.optional(
            Schema.Literals([
              "VaultLevel",
              "ProtectedItemLevel",
              "ProtectedItemWithParentTag",
            ]),
          ),
        }),
      ),
      restoreSettings: Schema.optional(
        Schema.Struct({
          crossSubscriptionRestoreSettings: Schema.optional(
            Schema.Struct({
              crossSubscriptionRestoreState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled", "PermanentlyDisabled"]),
              ),
            }),
          ),
        }),
      ),
      redundancySettings: Schema.optional(
        Schema.Struct({
          standardTierStorageRedundancy: Schema.optional(
            Schema.Literals([
              "Invalid",
              "LocallyRedundant",
              "GeoRedundant",
              "ZoneRedundant",
            ]),
          ),
          crossRegionRestore: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
        }),
      ),
      securitySettings: Schema.optional(
        Schema.Struct({
          immutabilitySettings: Schema.optional(
            Schema.Struct({
              state: Schema.optional(
                Schema.Literals(["Disabled", "Unlocked", "Locked"]),
              ),
              configuration: Schema.optional(
                Schema.Struct({
                  type: Schema.optional(
                    Schema.Literals(["AsPerPolicy", "TimeBased"]),
                  ),
                  durationInDays: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          softDeleteSettings: Schema.optional(
            Schema.Struct({
              softDeleteState: Schema.optional(
                Schema.Literals(["Invalid", "Enabled", "Disabled", "AlwaysON"]),
              ),
              softDeleteRetentionPeriodInDays: Schema.optional(Schema.Number),
              enhancedSecurityState: Schema.optional(
                Schema.Literals(["Invalid", "Enabled", "Disabled", "AlwaysON"]),
              ),
            }),
          ),
          multiUserAuthorization: Schema.optional(
            Schema.Literals(["Invalid", "Enabled", "Disabled"]),
          ),
          sourceScanConfiguration: Schema.optional(
            Schema.Struct({
              state: Schema.optional(
                Schema.Literals(["Invalid", "Enabled", "Disabled"]),
              ),
              sourceScanIdentity: Schema.optional(
                Schema.Struct({
                  operationIdentityType: Schema.optional(
                    Schema.Literals(["SystemAssigned", "UserAssigned"]),
                  ),
                  userAssignedIdentity: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        }),
      ),
      secureScore: Schema.optional(
        Schema.Literals(["None", "Minimum", "Adequate", "Maximum"]),
      ),
      bcdrSecurityLevel: Schema.optional(
        Schema.Literals(["Poor", "Fair", "Good", "Excellent"]),
      ),
      resourceGuardOperationRequests: Schema.optional(
        Schema.Array(Schema.String),
      ),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["Standard", "RS0"]),
      tier: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      size: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.String),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "SystemAssigned",
        "None",
        "UserAssigned",
        "SystemAssigned, UserAssigned",
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
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<VaultsUpdateInput>;

// Output Schema
export interface VaultsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const VaultsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<VaultsUpdateOutput>;

// The operation
/**
 * Updates the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the Vault
 */
export const VaultsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VaultsUpdateInput,
  outputSchema: VaultsUpdateOutput,
}));
