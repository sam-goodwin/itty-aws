/**
 * Azure Storageactions API
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
    path: "/providers/Microsoft.StorageActions/operations",
    apiVersion: "2026-03-01",
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
 * Lists all of the available Storage Actions Rest API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface StorageTaskAssignmentListInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageTaskName: string;
  $maxpagesize?: number;
}
export const StorageTaskAssignmentListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageTaskName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}/storageTaskAssignments",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<StorageTaskAssignmentListInput>;

// Output Schema
export interface StorageTaskAssignmentListOutput {
  value: { id?: string }[];
  nextLink?: string;
}
export const StorageTaskAssignmentListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StorageTaskAssignmentListOutput>;

// The operation
/**
 * Lists Resource IDs of the Storage Task Assignments associated with this Storage Task.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageTaskName - The name of the storage task within the specified resource group. Storage task names must be between 3 and 18 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of Storage Task Assignment Resource IDs to be included in the list response.
 */
export const StorageTaskAssignmentList = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTaskAssignmentListInput,
  outputSchema: StorageTaskAssignmentListOutput,
}));
// Input Schema
export interface StorageTasksCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageTaskName: string;
  properties: {
    taskVersion?: number;
    enabled: boolean;
    description: string;
    action: {
      if: {
        condition: string;
        operations: {
          name:
            | "SetBlobTier"
            | "SetBlobTags"
            | "SetBlobImmutabilityPolicy"
            | "SetBlobLegalHold"
            | "SetBlobExpiry"
            | "DeleteBlob"
            | "UndeleteBlob";
          parameters?: Record<string, string>;
          onSuccess?: "continue";
          onFailure?: "break";
        }[];
      };
      else?: {
        operations: {
          name:
            | "SetBlobTier"
            | "SetBlobTags"
            | "SetBlobImmutabilityPolicy"
            | "SetBlobLegalHold"
            | "SetBlobExpiry"
            | "DeleteBlob"
            | "UndeleteBlob";
          parameters?: Record<string, string>;
          onSuccess?: "continue";
          onFailure?: "break";
        }[];
      };
    };
    provisioningState?:
      | "ValidateSubscriptionQuotaBegin"
      | "ValidateSubscriptionQuotaEnd"
      | "Accepted"
      | "Creating"
      | "Succeeded"
      | "Deleting"
      | "Canceled"
      | "Failed";
    creationTimeInUtc?: string;
  };
  identity: {
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
  tags?: Record<string, string>;
  location: string;
}
export const StorageTasksCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageTaskName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      taskVersion: Schema.optional(Schema.Number),
      enabled: Schema.Boolean,
      description: Schema.String,
      action: Schema.Struct({
        if: Schema.Struct({
          condition: Schema.String,
          operations: Schema.Array(
            Schema.Struct({
              name: Schema.Literals([
                "SetBlobTier",
                "SetBlobTags",
                "SetBlobImmutabilityPolicy",
                "SetBlobLegalHold",
                "SetBlobExpiry",
                "DeleteBlob",
                "UndeleteBlob",
              ]),
              parameters: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              onSuccess: Schema.optional(Schema.Literals(["continue"])),
              onFailure: Schema.optional(Schema.Literals(["break"])),
            }),
          ),
        }),
        else: Schema.optional(
          Schema.Struct({
            operations: Schema.Array(
              Schema.Struct({
                name: Schema.Literals([
                  "SetBlobTier",
                  "SetBlobTags",
                  "SetBlobImmutabilityPolicy",
                  "SetBlobLegalHold",
                  "SetBlobExpiry",
                  "DeleteBlob",
                  "UndeleteBlob",
                ]),
                parameters: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                onSuccess: Schema.optional(Schema.Literals(["continue"])),
                onFailure: Schema.optional(Schema.Literals(["break"])),
              }),
            ),
          }),
        ),
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
      creationTimeInUtc: Schema.optional(Schema.String),
    }),
    identity: Schema.Struct({
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<StorageTasksCreateInput>;

// Output Schema
export interface StorageTasksCreateOutput {
  id?: string;
  name?: string;
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
export const StorageTasksCreateOutput =
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
  }) as unknown as Schema.Codec<StorageTasksCreateOutput>;

// The operation
/**
 * Asynchronously creates a new storage task resource with the specified parameters. If a storage task is already created and a subsequent create request is issued with different properties, the storage task properties will be updated. If a storage task is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageTaskName - The name of the storage task within the specified resource group. Storage task names must be between 3 and 18 characters in length and use numbers and lower-case letters only.
 */
export const StorageTasksCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTasksCreateInput,
  outputSchema: StorageTasksCreateOutput,
}));
// Input Schema
export interface StorageTasksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageTaskName: string;
}
export const StorageTasksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageTaskName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<StorageTasksDeleteInput>;

// Output Schema
export type StorageTasksDeleteOutput = void;
export const StorageTasksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTasksDeleteOutput>;

// The operation
/**
 * Delete the storage task resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageTaskName - The name of the storage task within the specified resource group. Storage task names must be between 3 and 18 characters in length and use numbers and lower-case letters only.
 */
export const StorageTasksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTasksDeleteInput,
  outputSchema: StorageTasksDeleteOutput,
}));
// Input Schema
export interface StorageTasksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageTaskName: string;
}
export const StorageTasksGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageTaskName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<StorageTasksGetInput>;

// Output Schema
export interface StorageTasksGetOutput {
  id?: string;
  name?: string;
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
export const StorageTasksGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<StorageTasksGetOutput>;

// The operation
/**
 * Get the storage task properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageTaskName - The name of the storage task within the specified resource group. Storage task names must be between 3 and 18 characters in length and use numbers and lower-case letters only.
 */
export const StorageTasksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTasksGetInput,
  outputSchema: StorageTasksGetOutput,
}));
// Input Schema
export interface StorageTasksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const StorageTasksListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<StorageTasksListByResourceGroupInput>;

// Output Schema
export interface StorageTasksListByResourceGroupOutput {
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
export const StorageTasksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<StorageTasksListByResourceGroupOutput>;

// The operation
/**
 * Lists all the storage tasks available under the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const StorageTasksListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTasksListByResourceGroupInput,
    outputSchema: StorageTasksListByResourceGroupOutput,
  }));
// Input Schema
export interface StorageTasksListBySubscriptionInput {
  subscriptionId: string;
}
export const StorageTasksListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageActions/storageTasks",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<StorageTasksListBySubscriptionInput>;

// Output Schema
export interface StorageTasksListBySubscriptionOutput {
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
export const StorageTasksListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<StorageTasksListBySubscriptionOutput>;

// The operation
/**
 * Lists all the storage tasks available under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const StorageTasksListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTasksListBySubscriptionInput,
    outputSchema: StorageTasksListBySubscriptionOutput,
  }));
// Input Schema
export interface StorageTasksPreviewActionsInput {
  subscriptionId: string;
  location: string;
  properties: {
    container: { name?: string; metadata?: { key?: string; value?: string }[] };
    blobs: {
      name?: string;
      properties?: { key?: string; value?: string }[];
      metadata?: { key?: string; value?: string }[];
      tags?: { key?: string; value?: string }[];
      matchedBlock?: "If" | "Else" | "None";
    }[];
    action: { if: { condition?: string }; elseBlockExists: boolean };
  };
}
export const StorageTasksPreviewActionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      container: Schema.Struct({
        name: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
      blobs: Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          metadata: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          tags: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          matchedBlock: Schema.optional(
            Schema.Literals(["If", "Else", "None"]),
          ),
        }),
      ),
      action: Schema.Struct({
        if: Schema.Struct({
          condition: Schema.optional(Schema.String),
        }),
        elseBlockExists: Schema.Boolean,
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageActions/locations/{location}/previewActions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<StorageTasksPreviewActionsInput>;

// Output Schema
export interface StorageTasksPreviewActionsOutput {
  properties: {
    container: { name?: string; metadata?: { key?: string; value?: string }[] };
    blobs: {
      name?: string;
      properties?: { key?: string; value?: string }[];
      metadata?: { key?: string; value?: string }[];
      tags?: { key?: string; value?: string }[];
      matchedBlock?: "If" | "Else" | "None";
    }[];
    action: { if: { condition?: string }; elseBlockExists: boolean };
  };
}
export const StorageTasksPreviewActionsOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      container: Schema.Struct({
        name: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
      blobs: Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          metadata: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          tags: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          matchedBlock: Schema.optional(
            Schema.Literals(["If", "Else", "None"]),
          ),
        }),
      ),
      action: Schema.Struct({
        if: Schema.Struct({
          condition: Schema.optional(Schema.String),
        }),
        elseBlockExists: Schema.Boolean,
      }),
    }),
  }) as unknown as Schema.Codec<StorageTasksPreviewActionsOutput>;

// The operation
/**
 * Runs the input conditions against input object metadata properties and designates matched objects in response.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Represents an Azure geography region where supported resource providers live.
 */
export const StorageTasksPreviewActions = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTasksPreviewActionsInput,
  outputSchema: StorageTasksPreviewActionsOutput,
}));
// Input Schema
export interface StorageTasksReportListInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageTaskName: string;
  $maxpagesize?: number;
  $filter?: string;
}
export const StorageTasksReportListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageTaskName: Schema.String.pipe(T.PathParam()),
    $maxpagesize: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}/reports",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<StorageTasksReportListInput>;

// Output Schema
export interface StorageTasksReportListOutput {
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
export const StorageTasksReportListOutput =
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
  }) as unknown as Schema.Codec<StorageTasksReportListOutput>;

// The operation
/**
 * Fetch the storage tasks run report summary for each assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageTaskName - The name of the storage task within the specified resource group. Storage task names must be between 3 and 18 characters in length and use numbers and lower-case letters only.
 * @param $maxpagesize - Optional, specifies the maximum number of Storage Task Assignment Resource IDs to be included in the list response.
 * @param $filter - Optional. When specified, it can be used to query using reporting properties.
 */
export const StorageTasksReportList = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTasksReportListInput,
  outputSchema: StorageTasksReportListOutput,
}));
// Input Schema
export interface StorageTasksStopAllAssignmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageTaskName: string;
}
export const StorageTasksStopAllAssignmentsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageTaskName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}/stopAllAssignments",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<StorageTasksStopAllAssignmentsInput>;

// Output Schema
export type StorageTasksStopAllAssignmentsOutput = void;
export const StorageTasksStopAllAssignmentsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTasksStopAllAssignmentsOutput>;

// The operation
/**
 * Stops all active running assignments for the storage task
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageTaskName - The name of the storage task within the specified resource group. Storage task names must be between 3 and 18 characters in length and use numbers and lower-case letters only.
 */
export const StorageTasksStopAllAssignments =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTasksStopAllAssignmentsInput,
    outputSchema: StorageTasksStopAllAssignmentsOutput,
  }));
// Input Schema
export interface StorageTasksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageTaskName: string;
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
  tags?: Record<string, string>;
  properties?: {
    taskVersion?: number;
    enabled?: boolean;
    description?: string;
    action?: {
      if: {
        condition: string;
        operations: {
          name:
            | "SetBlobTier"
            | "SetBlobTags"
            | "SetBlobImmutabilityPolicy"
            | "SetBlobLegalHold"
            | "SetBlobExpiry"
            | "DeleteBlob"
            | "UndeleteBlob";
          parameters?: Record<string, string>;
          onSuccess?: "continue";
          onFailure?: "break";
        }[];
      };
      else?: {
        operations: {
          name:
            | "SetBlobTier"
            | "SetBlobTags"
            | "SetBlobImmutabilityPolicy"
            | "SetBlobLegalHold"
            | "SetBlobExpiry"
            | "DeleteBlob"
            | "UndeleteBlob";
          parameters?: Record<string, string>;
          onSuccess?: "continue";
          onFailure?: "break";
        }[];
      };
    };
    provisioningState?:
      | "ValidateSubscriptionQuotaBegin"
      | "ValidateSubscriptionQuotaEnd"
      | "Accepted"
      | "Creating"
      | "Succeeded"
      | "Deleting"
      | "Canceled"
      | "Failed";
    creationTimeInUtc?: string;
  };
}
export const StorageTasksUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageTaskName: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.optional(
      Schema.Struct({
        taskVersion: Schema.optional(Schema.Number),
        enabled: Schema.optional(Schema.Boolean),
        description: Schema.optional(Schema.String),
        action: Schema.optional(
          Schema.Struct({
            if: Schema.Struct({
              condition: Schema.String,
              operations: Schema.Array(
                Schema.Struct({
                  name: Schema.Literals([
                    "SetBlobTier",
                    "SetBlobTags",
                    "SetBlobImmutabilityPolicy",
                    "SetBlobLegalHold",
                    "SetBlobExpiry",
                    "DeleteBlob",
                    "UndeleteBlob",
                  ]),
                  parameters: Schema.optional(
                    Schema.Record(Schema.String, Schema.String),
                  ),
                  onSuccess: Schema.optional(Schema.Literals(["continue"])),
                  onFailure: Schema.optional(Schema.Literals(["break"])),
                }),
              ),
            }),
            else: Schema.optional(
              Schema.Struct({
                operations: Schema.Array(
                  Schema.Struct({
                    name: Schema.Literals([
                      "SetBlobTier",
                      "SetBlobTags",
                      "SetBlobImmutabilityPolicy",
                      "SetBlobLegalHold",
                      "SetBlobExpiry",
                      "DeleteBlob",
                      "UndeleteBlob",
                    ]),
                    parameters: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    onSuccess: Schema.optional(Schema.Literals(["continue"])),
                    onFailure: Schema.optional(Schema.Literals(["break"])),
                  }),
                ),
              }),
            ),
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
        creationTimeInUtc: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageActions/storageTasks/{storageTaskName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<StorageTasksUpdateInput>;

// Output Schema
export interface StorageTasksUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageTasksUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageTasksUpdateOutput>;

// The operation
/**
 * Update storage task properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageTaskName - The name of the storage task within the specified resource group. Storage task names must be between 3 and 18 characters in length and use numbers and lower-case letters only.
 */
export const StorageTasksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTasksUpdateInput,
  outputSchema: StorageTasksUpdateOutput,
}));
