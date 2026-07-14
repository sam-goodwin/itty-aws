/**
 * Azure Storagediscovery API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.StorageDiscovery/operations",
    apiVersion: "2025-09-01",
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
export interface ReportGenerateReportInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageDiscoveryWorkspaceName: string;
  discoveryResourceName: string;
  queries: string[];
}
export const ReportGenerateReportInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageDiscoveryWorkspaceName: Schema.String.pipe(T.PathParam()),
    discoveryResourceName: Schema.String.pipe(T.PathParam()),
    queries: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/{storageDiscoveryWorkspaceName}/reports/{discoveryResourceName}/generateReport",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ReportGenerateReportInput>;

// Output Schema
export interface ReportGenerateReportOutput {
  results: {
    columns?: { name: string; type: string }[];
    rows?: string[][];
    errorCode?: string;
  }[];
}
export const ReportGenerateReportOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        columns: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        rows: Schema.optional(Schema.Array(Schema.Array(Schema.String))),
        errorCode: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ReportGenerateReportOutput>;

// The operation
/**
 * A long-running resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageDiscoveryWorkspaceName - The name of the StorageDiscoveryWorkspace
 * @param discoveryResourceName - The name of the ReportResource
 */
export const ReportGenerateReport = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportGenerateReportInput,
  outputSchema: ReportGenerateReportOutput,
}));
// Input Schema
export interface ReportGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageDiscoveryWorkspaceName: string;
  discoveryResourceName: string;
}
export const ReportGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageDiscoveryWorkspaceName: Schema.String.pipe(T.PathParam()),
  discoveryResourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/{storageDiscoveryWorkspaceName}/reports/{discoveryResourceName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ReportGetInput>;

// Output Schema
export interface ReportGetOutput {
  id?: string;
  name?: string;
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
export const ReportGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ReportGetOutput>;

// The operation
/**
 * Get a ReportResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageDiscoveryWorkspaceName - The name of the StorageDiscoveryWorkspace
 * @param discoveryResourceName - The name of the ReportResource
 */
export const ReportGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportGetInput,
  outputSchema: ReportGetOutput,
}));
// Input Schema
export interface ReportListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageDiscoveryWorkspaceName: string;
}
export const ReportListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageDiscoveryWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/{storageDiscoveryWorkspaceName}/reports",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ReportListByResourceGroupInput>;

// Output Schema
export interface ReportListByResourceGroupOutput {
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
export const ReportListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ReportListByResourceGroupOutput>;

// The operation
/**
 * List ReportResource resources by StorageDiscoveryWorkspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageDiscoveryWorkspaceName - The name of the StorageDiscoveryWorkspace
 */
export const ReportListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportListByResourceGroupInput,
  outputSchema: ReportListByResourceGroupOutput,
}));
// Input Schema
export interface ReportListBySubscriptionInput {
  subscriptionId: string;
  storageDiscoveryWorkspaceName: string;
}
export const ReportListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    storageDiscoveryWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/{storageDiscoveryWorkspaceName}/reports",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ReportListBySubscriptionInput>;

// Output Schema
export interface ReportListBySubscriptionOutput {
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
export const ReportListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ReportListBySubscriptionOutput>;

// The operation
/**
 * List ReportResource resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param storageDiscoveryWorkspaceName - The name of the StorageDiscoveryWorkspace
 */
export const ReportListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReportListBySubscriptionInput,
  outputSchema: ReportListBySubscriptionOutput,
}));
// Input Schema
export interface StorageDiscoveryWorkspacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageDiscoveryWorkspaceName: string;
  properties?: {
    sku?: "Standard" | "Free";
    description?: string;
    workspaceRoots: string[];
    scopes: {
      displayName: string;
      resourceTypes: "Microsoft.Storage/storageAccounts"[];
      tagKeysOnly?: string[];
      tags?: Record<string, string>;
    }[];
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const StorageDiscoveryWorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageDiscoveryWorkspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(Schema.Literals(["Standard", "Free"])),
        description: Schema.optional(Schema.String),
        workspaceRoots: Schema.Array(Schema.String),
        scopes: Schema.Array(
          Schema.Struct({
            displayName: Schema.String,
            resourceTypes: Schema.Array(
              Schema.Literals(["Microsoft.Storage/storageAccounts"]),
            ),
            tagKeysOnly: Schema.optional(Schema.Array(Schema.String)),
            tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/{storageDiscoveryWorkspaceName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<StorageDiscoveryWorkspacesCreateOrUpdateInput>;

// Output Schema
export interface StorageDiscoveryWorkspacesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageDiscoveryWorkspacesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageDiscoveryWorkspacesCreateOrUpdateOutput>;

// The operation
/**
 * Create a StorageDiscoveryWorkspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageDiscoveryWorkspaceName - The name of the StorageDiscoveryWorkspace
 */
export const StorageDiscoveryWorkspacesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageDiscoveryWorkspacesCreateOrUpdateInput,
    outputSchema: StorageDiscoveryWorkspacesCreateOrUpdateOutput,
  }));
// Input Schema
export interface StorageDiscoveryWorkspacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageDiscoveryWorkspaceName: string;
}
export const StorageDiscoveryWorkspacesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageDiscoveryWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/{storageDiscoveryWorkspaceName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<StorageDiscoveryWorkspacesDeleteInput>;

// Output Schema
export type StorageDiscoveryWorkspacesDeleteOutput = void;
export const StorageDiscoveryWorkspacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageDiscoveryWorkspacesDeleteOutput>;

// The operation
/**
 * Delete a StorageDiscoveryWorkspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageDiscoveryWorkspaceName - The name of the StorageDiscoveryWorkspace
 */
export const StorageDiscoveryWorkspacesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageDiscoveryWorkspacesDeleteInput,
    outputSchema: StorageDiscoveryWorkspacesDeleteOutput,
  }));
// Input Schema
export interface StorageDiscoveryWorkspacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageDiscoveryWorkspaceName: string;
}
export const StorageDiscoveryWorkspacesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageDiscoveryWorkspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/{storageDiscoveryWorkspaceName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<StorageDiscoveryWorkspacesGetInput>;

// Output Schema
export interface StorageDiscoveryWorkspacesGetOutput {
  id?: string;
  name?: string;
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
export const StorageDiscoveryWorkspacesGetOutput =
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
  }) as unknown as Schema.Codec<StorageDiscoveryWorkspacesGetOutput>;

// The operation
/**
 * Get a StorageDiscoveryWorkspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageDiscoveryWorkspaceName - The name of the StorageDiscoveryWorkspace
 */
export const StorageDiscoveryWorkspacesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageDiscoveryWorkspacesGetInput,
    outputSchema: StorageDiscoveryWorkspacesGetOutput,
  }));
// Input Schema
export interface StorageDiscoveryWorkspacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const StorageDiscoveryWorkspacesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<StorageDiscoveryWorkspacesListByResourceGroupInput>;

// Output Schema
export interface StorageDiscoveryWorkspacesListByResourceGroupOutput {
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
export const StorageDiscoveryWorkspacesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<StorageDiscoveryWorkspacesListByResourceGroupOutput>;

// The operation
/**
 * List StorageDiscoveryWorkspace resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const StorageDiscoveryWorkspacesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageDiscoveryWorkspacesListByResourceGroupInput,
    outputSchema: StorageDiscoveryWorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export interface StorageDiscoveryWorkspacesListBySubscriptionInput {
  subscriptionId: string;
}
export const StorageDiscoveryWorkspacesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<StorageDiscoveryWorkspacesListBySubscriptionInput>;

// Output Schema
export interface StorageDiscoveryWorkspacesListBySubscriptionOutput {
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
export const StorageDiscoveryWorkspacesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<StorageDiscoveryWorkspacesListBySubscriptionOutput>;

// The operation
/**
 * List StorageDiscoveryWorkspace resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const StorageDiscoveryWorkspacesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageDiscoveryWorkspacesListBySubscriptionInput,
    outputSchema: StorageDiscoveryWorkspacesListBySubscriptionOutput,
  }));
// Input Schema
export interface StorageDiscoveryWorkspacesReportInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageDiscoveryWorkspaceName: string;
  queries: string[];
}
export const StorageDiscoveryWorkspacesReportInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageDiscoveryWorkspaceName: Schema.String.pipe(T.PathParam()),
    queries: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/{storageDiscoveryWorkspaceName}/report",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<StorageDiscoveryWorkspacesReportInput>;

// Output Schema
export interface StorageDiscoveryWorkspacesReportOutput {
  results: {
    columns?: { name: string; type: string }[];
    rows?: string[][];
    errorCode?: string;
  }[];
}
export const StorageDiscoveryWorkspacesReportOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        columns: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        rows: Schema.optional(Schema.Array(Schema.Array(Schema.String))),
        errorCode: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<StorageDiscoveryWorkspacesReportOutput>;

// The operation
/**
 * A long-running resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageDiscoveryWorkspaceName - The name of the StorageDiscoveryWorkspace
 */
export const StorageDiscoveryWorkspacesReport =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageDiscoveryWorkspacesReportInput,
    outputSchema: StorageDiscoveryWorkspacesReportOutput,
  }));
// Input Schema
export interface StorageDiscoveryWorkspacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageDiscoveryWorkspaceName: string;
  tags?: Record<string, string>;
  properties?: {
    sku?: "Standard" | "Free";
    description?: string;
    workspaceRoots?: string[];
    scopes?: {
      displayName: string;
      resourceTypes: "Microsoft.Storage/storageAccounts"[];
      tagKeysOnly?: string[];
      tags?: Record<string, string>;
    }[];
  };
}
export const StorageDiscoveryWorkspacesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageDiscoveryWorkspaceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(Schema.Literals(["Standard", "Free"])),
        description: Schema.optional(Schema.String),
        workspaceRoots: Schema.optional(Schema.Array(Schema.String)),
        scopes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              displayName: Schema.String,
              resourceTypes: Schema.Array(
                Schema.Literals(["Microsoft.Storage/storageAccounts"]),
              ),
              tagKeysOnly: Schema.optional(Schema.Array(Schema.String)),
              tags: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageDiscovery/storageDiscoveryWorkspaces/{storageDiscoveryWorkspaceName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<StorageDiscoveryWorkspacesUpdateInput>;

// Output Schema
export interface StorageDiscoveryWorkspacesUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageDiscoveryWorkspacesUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageDiscoveryWorkspacesUpdateOutput>;

// The operation
/**
 * Update a StorageDiscoveryWorkspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageDiscoveryWorkspaceName - The name of the StorageDiscoveryWorkspace
 */
export const StorageDiscoveryWorkspacesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageDiscoveryWorkspacesUpdateInput,
    outputSchema: StorageDiscoveryWorkspacesUpdateOutput,
  }));
