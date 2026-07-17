/**
 * Azure Confidentialledger API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CheckNameAvailabilityInput {
  subscriptionId: string;
  name?: string;
  type?: string;
}
export const CheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConfidentialLedger/checkNameAvailability",
      apiVersion: "2026-02-23",
    }),
  ) as unknown as Schema.Codec<CheckNameAvailabilityInput>;

// Output Schema
export interface CheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const CheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CheckNameAvailabilityOutput>;

// The operation
/**
 * To check whether a resource name is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const CheckNameAvailability = /*@__PURE__*/ API.make(() => ({
  inputSchema: CheckNameAvailabilityInput,
  outputSchema: CheckNameAvailabilityOutput,
}));
// Input Schema
export interface LedgerCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ledgerName: string;
  properties?: {
    ledgerName?: string;
    ledgerUri?: string;
    identityServiceUri?: string;
    ledgerInternalNamespace?: string;
    runningState?: "Active" | "Paused" | "Unknown" | "Pausing" | "Resuming";
    ledgerType?: "Unknown" | "Public" | "Private";
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Updating";
    ledgerSku?: "Standard" | "Basic" | "Unknown";
    aadBasedSecurityPrincipals?: {
      principalId?: string;
      tenantId?: string;
      ledgerRoleName?: "Reader" | "Contributor" | "Administrator";
    }[];
    certBasedSecurityPrincipals?: {
      cert?: string;
      ledgerRoleName?: "Reader" | "Contributor" | "Administrator";
    }[];
    hostLevel?: string;
    maxBodySizeInMb?: number;
    subjectName?: string;
    nodeCount?: number;
    writeLBAddressPrefix?: string;
    workerThreads?: number;
    enclavePlatform?: "IntelSgx" | "AmdSevSnp";
    applicationType?: "ConfidentialLedger" | "CodeTransparency";
    scittConfiguration?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const LedgerCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ledgerName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      ledgerName: Schema.optional(Schema.String),
      ledgerUri: Schema.optional(Schema.String),
      identityServiceUri: Schema.optional(Schema.String),
      ledgerInternalNamespace: Schema.optional(Schema.String),
      runningState: Schema.optional(
        Schema.Literals(["Active", "Paused", "Unknown", "Pausing", "Resuming"]),
      ),
      ledgerType: Schema.optional(
        Schema.Literals(["Unknown", "Public", "Private"]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Deleting",
          "Updating",
        ]),
      ),
      ledgerSku: Schema.optional(
        Schema.Literals(["Standard", "Basic", "Unknown"]),
      ),
      aadBasedSecurityPrincipals: Schema.optional(
        Schema.Array(
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
            ledgerRoleName: Schema.optional(
              Schema.Literals(["Reader", "Contributor", "Administrator"]),
            ),
          }),
        ),
      ),
      certBasedSecurityPrincipals: Schema.optional(
        Schema.Array(
          Schema.Struct({
            cert: Schema.optional(Schema.String),
            ledgerRoleName: Schema.optional(
              Schema.Literals(["Reader", "Contributor", "Administrator"]),
            ),
          }),
        ),
      ),
      hostLevel: Schema.optional(Schema.String),
      maxBodySizeInMb: Schema.optional(Schema.Number),
      subjectName: Schema.optional(Schema.String),
      nodeCount: Schema.optional(Schema.Number),
      writeLBAddressPrefix: Schema.optional(Schema.String),
      workerThreads: Schema.optional(Schema.Number),
      enclavePlatform: Schema.optional(
        Schema.Literals(["IntelSgx", "AmdSevSnp"]),
      ),
      applicationType: Schema.optional(
        Schema.Literals(["ConfidentialLedger", "CodeTransparency"]),
      ),
      scittConfiguration: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/ledgers/{ledgerName}",
    apiVersion: "2026-02-23",
  }),
) as unknown as Schema.Codec<LedgerCreateInput>;

// Output Schema
export interface LedgerCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LedgerCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<LedgerCreateOutput>;

// The operation
/**
 * Creates a  Confidential Ledger with the specified ledger parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ledgerName - Name of the Confidential Ledger
 */
export const LedgerCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LedgerCreateInput,
  outputSchema: LedgerCreateOutput,
}));
// Input Schema
export interface LedgerDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  ledgerName: string;
}
export const LedgerDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ledgerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/ledgers/{ledgerName}",
    apiVersion: "2026-02-23",
  }),
) as unknown as Schema.Codec<LedgerDeleteInput>;

// Output Schema
export type LedgerDeleteOutput = void;
export const LedgerDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LedgerDeleteOutput>;

// The operation
/**
 * Deletes an existing Confidential Ledger.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ledgerName - Name of the Confidential Ledger
 */
export const LedgerDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: LedgerDeleteInput,
  outputSchema: LedgerDeleteOutput,
}));
// Input Schema
export interface LedgerFilesExportInput {
  subscriptionId: string;
  resourceGroupName: string;
  ledgerName: string;
  restoreRegion?: string;
  uri: string;
}
export const LedgerFilesExportInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ledgerName: Schema.String.pipe(T.PathParam()),
  restoreRegion: Schema.optional(Schema.String),
  uri: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/ledgers/{ledgerName}/filesExport",
    apiVersion: "2026-02-23",
  }),
) as unknown as Schema.Codec<LedgerFilesExportInput>;

// Output Schema
export interface LedgerFilesExportOutput {
  message?: string;
}
export const LedgerFilesExportOutput =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LedgerFilesExportOutput>;

// The operation
/**
 * Copies the ledger files and the service certificate to a customer's storage account of choice.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ledgerName - Name of the Confidential Ledger
 */
export const LedgerFilesExport = /*@__PURE__*/ API.make(() => ({
  inputSchema: LedgerFilesExportInput,
  outputSchema: LedgerFilesExportOutput,
}));
// Input Schema
export interface LedgerGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  ledgerName: string;
}
export const LedgerGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ledgerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/ledgers/{ledgerName}",
    apiVersion: "2026-02-23",
  }),
) as unknown as Schema.Codec<LedgerGetInput>;

// Output Schema
export interface LedgerGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LedgerGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<LedgerGetOutput>;

// The operation
/**
 * Retrieves the properties of a Confidential Ledger.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ledgerName - Name of the Confidential Ledger
 */
export const LedgerGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: LedgerGetInput,
  outputSchema: LedgerGetOutput,
}));
// Input Schema
export interface LedgerListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
}
export const LedgerListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/ledgers",
      apiVersion: "2026-02-23",
    }),
  ) as unknown as Schema.Codec<LedgerListByResourceGroupInput>;

// Output Schema
export interface LedgerListByResourceGroupOutput {
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
export const LedgerListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<LedgerListByResourceGroupOutput>;

// The operation
/**
 * Retrieves the properties of all Confidential Ledgers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - The filter to apply on the list operation. eg. $filter=ledgerType eq 'Public'
 */
export const LedgerListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: LedgerListByResourceGroupInput,
  outputSchema: LedgerListByResourceGroupOutput,
}));
// Input Schema
export interface LedgerListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
}
export const LedgerListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConfidentialLedger/ledgers",
      apiVersion: "2026-02-23",
    }),
  ) as unknown as Schema.Codec<LedgerListBySubscriptionInput>;

// Output Schema
export interface LedgerListBySubscriptionOutput {
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
export const LedgerListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<LedgerListBySubscriptionOutput>;

// The operation
/**
 * Retrieves the properties of all Confidential Ledgers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - The filter to apply on the list operation. eg. $filter=ledgerType eq 'Public'
 */
export const LedgerListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: LedgerListBySubscriptionInput,
  outputSchema: LedgerListBySubscriptionOutput,
}));
// Input Schema
export interface LedgerUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ledgerName: string;
  properties?: {
    ledgerName?: string;
    ledgerUri?: string;
    identityServiceUri?: string;
    ledgerInternalNamespace?: string;
    runningState?: "Active" | "Paused" | "Unknown" | "Pausing" | "Resuming";
    ledgerType?: "Unknown" | "Public" | "Private";
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Updating";
    ledgerSku?: "Standard" | "Basic" | "Unknown";
    aadBasedSecurityPrincipals?: {
      principalId?: string;
      tenantId?: string;
      ledgerRoleName?: "Reader" | "Contributor" | "Administrator";
    }[];
    certBasedSecurityPrincipals?: {
      cert?: string;
      ledgerRoleName?: "Reader" | "Contributor" | "Administrator";
    }[];
    hostLevel?: string;
    maxBodySizeInMb?: number;
    subjectName?: string;
    nodeCount?: number;
    writeLBAddressPrefix?: string;
    workerThreads?: number;
    enclavePlatform?: "IntelSgx" | "AmdSevSnp";
    applicationType?: "ConfidentialLedger" | "CodeTransparency";
    scittConfiguration?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const LedgerUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ledgerName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      ledgerName: Schema.optional(Schema.String),
      ledgerUri: Schema.optional(Schema.String),
      identityServiceUri: Schema.optional(Schema.String),
      ledgerInternalNamespace: Schema.optional(Schema.String),
      runningState: Schema.optional(
        Schema.Literals(["Active", "Paused", "Unknown", "Pausing", "Resuming"]),
      ),
      ledgerType: Schema.optional(
        Schema.Literals(["Unknown", "Public", "Private"]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Deleting",
          "Updating",
        ]),
      ),
      ledgerSku: Schema.optional(
        Schema.Literals(["Standard", "Basic", "Unknown"]),
      ),
      aadBasedSecurityPrincipals: Schema.optional(
        Schema.Array(
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
            ledgerRoleName: Schema.optional(
              Schema.Literals(["Reader", "Contributor", "Administrator"]),
            ),
          }),
        ),
      ),
      certBasedSecurityPrincipals: Schema.optional(
        Schema.Array(
          Schema.Struct({
            cert: Schema.optional(Schema.String),
            ledgerRoleName: Schema.optional(
              Schema.Literals(["Reader", "Contributor", "Administrator"]),
            ),
          }),
        ),
      ),
      hostLevel: Schema.optional(Schema.String),
      maxBodySizeInMb: Schema.optional(Schema.Number),
      subjectName: Schema.optional(Schema.String),
      nodeCount: Schema.optional(Schema.Number),
      writeLBAddressPrefix: Schema.optional(Schema.String),
      workerThreads: Schema.optional(Schema.Number),
      enclavePlatform: Schema.optional(
        Schema.Literals(["IntelSgx", "AmdSevSnp"]),
      ),
      applicationType: Schema.optional(
        Schema.Literals(["ConfidentialLedger", "CodeTransparency"]),
      ),
      scittConfiguration: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/ledgers/{ledgerName}",
    apiVersion: "2026-02-23",
  }),
) as unknown as Schema.Codec<LedgerUpdateInput>;

// Output Schema
export interface LedgerUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LedgerUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<LedgerUpdateOutput>;

// The operation
/**
 * Updates properties of Confidential Ledger
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ledgerName - Name of the Confidential Ledger
 */
export const LedgerUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LedgerUpdateInput,
  outputSchema: LedgerUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ConfidentialLedger/operations",
    apiVersion: "2026-02-23",
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
