/**
 * Azure Storagemover API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AgentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  agentName: string;
  properties: {
    description?: string;
    agentVersion?: string;
    arcResourceId: string;
    arcVmUuid: string;
    agentStatus?:
      | "Registering"
      | "Offline"
      | "Online"
      | "Executing"
      | "RequiresAttention"
      | "Unregistering";
    lastStatusUpdate?: string;
    localIPAddress?: string;
    memoryInMB?: number;
    numberOfCores?: number;
    uptimeInSeconds?: number;
    timeZone?: string;
    uploadLimitSchedule?: {
      weeklyRecurrences?: {
        startTime: { hour: number; minute?: 0 | 30 };
        endTime: { hour: number; minute?: 0 | 30 };
      }[];
    };
    errorDetails?: { code?: string; message?: string };
    provisioningState?: "Succeeded" | "Canceled" | "Failed" | "Deleting";
  };
}
export const AgentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    agentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      agentVersion: Schema.optional(Schema.String),
      arcResourceId: Schema.String,
      arcVmUuid: Schema.String,
      agentStatus: Schema.optional(
        Schema.Literals([
          "Registering",
          "Offline",
          "Online",
          "Executing",
          "RequiresAttention",
          "Unregistering",
        ]),
      ),
      lastStatusUpdate: Schema.optional(Schema.String),
      localIPAddress: Schema.optional(Schema.String),
      memoryInMB: Schema.optional(Schema.Number),
      numberOfCores: Schema.optional(Schema.Number),
      uptimeInSeconds: Schema.optional(Schema.Number),
      timeZone: Schema.optional(Schema.String),
      uploadLimitSchedule: Schema.optional(
        Schema.Struct({
          weeklyRecurrences: Schema.optional(
            Schema.Array(
              Schema.Struct({
                startTime: Schema.Struct({
                  hour: Schema.Number,
                  minute: Schema.optional(Schema.Literals([0, 30])),
                }),
                endTime: Schema.Struct({
                  hour: Schema.Number,
                  minute: Schema.optional(Schema.Literals([0, 30])),
                }),
              }),
            ),
          ),
        }),
      ),
      errorDetails: Schema.optional(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Canceled", "Failed", "Deleting"]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/agents/{agentName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AgentsCreateOrUpdateInput>;

// Output Schema
export interface AgentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const AgentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AgentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Agent resource, which references a hybrid compute machine that can run jobs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param agentName - The name of the Agent resource.
 */
export const AgentsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsCreateOrUpdateInput,
  outputSchema: AgentsCreateOrUpdateOutput,
}));
// Input Schema
export interface AgentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  agentName: string;
}
export const AgentsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  agentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/agents/{agentName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<AgentsDeleteInput>;

// Output Schema
export type AgentsDeleteOutput = void;
export const AgentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentsDeleteOutput>;

// The operation
/**
 * Deletes an Agent resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param agentName - The name of the Agent resource.
 */
export const AgentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsDeleteInput,
  outputSchema: AgentsDeleteOutput,
}));
// Input Schema
export interface AgentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  agentName: string;
}
export const AgentsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  agentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/agents/{agentName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<AgentsGetInput>;

// Output Schema
export interface AgentsGetOutput {
  id?: string;
  name?: string;
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
export const AgentsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgentsGetOutput>;

// The operation
/**
 * Gets an Agent resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param agentName - The name of the Agent resource.
 */
export const AgentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsGetInput,
  outputSchema: AgentsGetOutput,
}));
// Input Schema
export interface AgentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
}
export const AgentsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/agents",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<AgentsListInput>;

// Output Schema
export interface AgentsListOutput {
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
export const AgentsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgentsListOutput>;

// The operation
/**
 * Lists all Agents in a Storage Mover.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 */
export const AgentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsListInput,
  outputSchema: AgentsListOutput,
}));
// Input Schema
export interface AgentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  agentName: string;
  properties?: {
    description?: string;
    uploadLimitSchedule?: {
      weeklyRecurrences?: {
        startTime: { hour: number; minute?: 0 | 30 };
        endTime: { hour: number; minute?: 0 | 30 };
      }[];
    };
  };
}
export const AgentsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  agentName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      uploadLimitSchedule: Schema.optional(
        Schema.Struct({
          weeklyRecurrences: Schema.optional(
            Schema.Array(
              Schema.Struct({
                startTime: Schema.Struct({
                  hour: Schema.Number,
                  minute: Schema.optional(Schema.Literals([0, 30])),
                }),
                endTime: Schema.Struct({
                  hour: Schema.Number,
                  minute: Schema.optional(Schema.Literals([0, 30])),
                }),
              }),
            ),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/agents/{agentName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<AgentsUpdateInput>;

// Output Schema
export interface AgentsUpdateOutput {
  id?: string;
  name?: string;
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
export const AgentsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgentsUpdateOutput>;

// The operation
/**
 * Creates or updates an Agent resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param agentName - The name of the Agent resource.
 */
export const AgentsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsUpdateInput,
  outputSchema: AgentsUpdateOutput,
}));
// Input Schema
export interface ConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  connectionName: string;
  properties: {
    description?: string;
    connectionStatus?:
      | "Approved"
      | "Rejected"
      | "Disconnected"
      | "Pending"
      | "Stale";
    privateLinkServiceId: string;
    privateEndpointName?: string;
    privateEndpointResourceId?: string;
    jobList?: string[];
    provisioningState?: "Succeeded" | "Canceled" | "Failed" | "Deleting";
  };
}
export const ConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      connectionStatus: Schema.optional(
        Schema.Literals([
          "Approved",
          "Rejected",
          "Disconnected",
          "Pending",
          "Stale",
        ]),
      ),
      privateLinkServiceId: Schema.String,
      privateEndpointName: Schema.optional(Schema.String),
      privateEndpointResourceId: Schema.optional(Schema.String),
      jobList: Schema.optional(Schema.Array(Schema.String)),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Canceled", "Failed", "Deleting"]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/connections/{connectionName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ConnectionsCreateOrUpdateInput>;

// Output Schema
export interface ConnectionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ConnectionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Connection resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param connectionName - The name of the Connection resource.
 */
export const ConnectionsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionsCreateOrUpdateInput,
  outputSchema: ConnectionsCreateOrUpdateOutput,
}));
// Input Schema
export interface ConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  connectionName: string;
}
export const ConnectionsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/connections/{connectionName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ConnectionsDeleteInput>;

// Output Schema
export type ConnectionsDeleteOutput = void;
export const ConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectionsDeleteOutput>;

// The operation
/**
 * Deletes a Connection resource.
 * Returns 409 if there are active jobs using this connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param connectionName - The name of the Connection resource.
 */
export const ConnectionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionsDeleteInput,
  outputSchema: ConnectionsDeleteOutput,
}));
// Input Schema
export interface ConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  connectionName: string;
}
export const ConnectionsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/connections/{connectionName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ConnectionsGetInput>;

// Output Schema
export interface ConnectionsGetOutput {
  id?: string;
  name?: string;
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
export const ConnectionsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ConnectionsGetOutput>;

// The operation
/**
 * Gets a Connection resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param connectionName - The name of the Connection resource.
 */
export const ConnectionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionsGetInput,
  outputSchema: ConnectionsGetOutput,
}));
// Input Schema
export interface ConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
}
export const ConnectionsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/connections",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ConnectionsListInput>;

// Output Schema
export interface ConnectionsListOutput {
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
export const ConnectionsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ConnectionsListOutput>;

// The operation
/**
 * Lists all Connections in a Storage Mover.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 */
export const ConnectionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionsListInput,
  outputSchema: ConnectionsListOutput,
}));
// Input Schema
export interface EndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  endpointName: string;
  properties: {
    endpointType:
      | "AzureStorageBlobContainer"
      | "NfsMount"
      | "AzureStorageSmbFileShare"
      | "SmbMount"
      | "AzureMultiCloudConnector"
      | "AzureStorageNfsFileShare"
      | "S3WithHMAC";
    description?: string;
    endpointKind?: "Source" | "Target";
    provisioningState?: "Succeeded" | "Canceled" | "Failed" | "Deleting";
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
    > | null;
  };
}
export const EndpointsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      endpointType: Schema.Literals([
        "AzureStorageBlobContainer",
        "NfsMount",
        "AzureStorageSmbFileShare",
        "SmbMount",
        "AzureMultiCloudConnector",
        "AzureStorageNfsFileShare",
        "S3WithHMAC",
      ]),
      description: Schema.optional(Schema.String),
      endpointKind: Schema.optional(Schema.Literals(["Source", "Target"])),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Canceled", "Failed", "Deleting"]),
      ),
    }),
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
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/endpoints/{endpointName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<EndpointsCreateOrUpdateInput>;

// Output Schema
export interface EndpointsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const EndpointsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<EndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Endpoint resource, which represents a data transfer source or destination.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param endpointName - The name of the Endpoint resource.
 */
export const EndpointsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsCreateOrUpdateInput,
  outputSchema: EndpointsCreateOrUpdateOutput,
}));
// Input Schema
export interface EndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  endpointName: string;
}
export const EndpointsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/endpoints/{endpointName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EndpointsDeleteInput>;

// Output Schema
export type EndpointsDeleteOutput = void;
export const EndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EndpointsDeleteOutput>;

// The operation
/**
 * Deletes an Endpoint resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param endpointName - The name of the Endpoint resource.
 */
export const EndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsDeleteInput,
  outputSchema: EndpointsDeleteOutput,
}));
// Input Schema
export interface EndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  endpointName: string;
}
export const EndpointsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/endpoints/{endpointName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EndpointsGetInput>;

// Output Schema
export interface EndpointsGetOutput {
  id?: string;
  name?: string;
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
export const EndpointsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsGetOutput>;

// The operation
/**
 * Gets an Endpoint resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param endpointName - The name of the Endpoint resource.
 */
export const EndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsGetInput,
  outputSchema: EndpointsGetOutput,
}));
// Input Schema
export interface EndpointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
}
export const EndpointsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/endpoints",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EndpointsListInput>;

// Output Schema
export interface EndpointsListOutput {
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
export const EndpointsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsListOutput>;

// The operation
/**
 * Lists all Endpoints in a Storage Mover.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 */
export const EndpointsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsListInput,
  outputSchema: EndpointsListOutput,
}));
// Input Schema
export interface EndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  endpointName: string;
  properties?: {
    endpointType:
      | "AzureStorageBlobContainer"
      | "NfsMount"
      | "AzureStorageSmbFileShare"
      | "SmbMount"
      | "AzureMultiCloudConnector"
      | "AzureStorageNfsFileShare"
      | "S3WithHMAC";
    description?: string;
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
    > | null;
  };
}
export const EndpointsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      endpointType: Schema.Literals([
        "AzureStorageBlobContainer",
        "NfsMount",
        "AzureStorageSmbFileShare",
        "SmbMount",
        "AzureMultiCloudConnector",
        "AzureStorageNfsFileShare",
        "S3WithHMAC",
      ]),
      description: Schema.optional(Schema.String),
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
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/endpoints/{endpointName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EndpointsUpdateInput>;

// Output Schema
export interface EndpointsUpdateOutput {
  id?: string;
  name?: string;
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
export const EndpointsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsUpdateOutput>;

// The operation
/**
 * Updates properties for an Endpoint resource. Properties not specified in the request body will be unchanged.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param endpointName - The name of the Endpoint resource.
 */
export const EndpointsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsUpdateInput,
  outputSchema: EndpointsUpdateOutput,
}));
// Input Schema
export interface JobDefinitionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
  jobDefinitionName: string;
  properties: {
    description?: string;
    jobType?: "OnPremToCloud" | "CloudToCloud";
    copyMode: "Additive" | "Mirror";
    sourceName: string;
    sourceResourceId?: string;
    sourceSubpath?: string;
    targetName: string;
    targetResourceId?: string;
    targetSubpath?: string;
    latestJobRunName?: string;
    latestJobRunResourceId?: string;
    latestJobRunStatus?:
      | "Queued"
      | "Started"
      | "Running"
      | "CancelRequested"
      | "Canceling"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "PausedByBandwidthManagement";
    agentName?: string;
    agentResourceId?: string;
    sourceTargetMap?: {
      value?: {
        sourceEndpoint: {
          properties?: {
            name?: string;
            sourceEndpointResourceId?: string;
            awsS3BucketId?: string;
          };
        };
        targetEndpoint: {
          properties?: {
            name?: string;
            targetEndpointResourceId?: string;
            azureStorageAccountResourceId?: string;
            azureStorageBlobContainerName?: string;
          };
        };
      }[];
    };
    provisioningState?: "Succeeded" | "Canceled" | "Failed" | "Deleting";
    connections?: string[];
    schedule?: {
      frequency?: "Monthly" | "Weekly" | "Daily" | "Onetime" | "None";
      isActive?: boolean;
      executionTime?: { hour?: number; minute?: 0 | 30 };
      startDate?: string;
      daysOfWeek?: string[];
      daysOfMonth?: number[];
      cronExpression?: string;
      endDate?: string;
    };
    dataIntegrityValidation?: "SaveVerifyFileMD5" | "SaveFileMD5" | "None";
    preservePermissions?: boolean;
  };
}
export const JobDefinitionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    jobDefinitionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      jobType: Schema.optional(
        Schema.Literals(["OnPremToCloud", "CloudToCloud"]),
      ),
      copyMode: Schema.Literals(["Additive", "Mirror"]),
      sourceName: Schema.String,
      sourceResourceId: Schema.optional(Schema.String),
      sourceSubpath: Schema.optional(Schema.String),
      targetName: Schema.String,
      targetResourceId: Schema.optional(Schema.String),
      targetSubpath: Schema.optional(Schema.String),
      latestJobRunName: Schema.optional(Schema.String),
      latestJobRunResourceId: Schema.optional(Schema.String),
      latestJobRunStatus: Schema.optional(
        Schema.Literals([
          "Queued",
          "Started",
          "Running",
          "CancelRequested",
          "Canceling",
          "Canceled",
          "Failed",
          "Succeeded",
          "PausedByBandwidthManagement",
        ]),
      ),
      agentName: Schema.optional(Schema.String),
      agentResourceId: Schema.optional(Schema.String),
      sourceTargetMap: Schema.optional(
        Schema.Struct({
          value: Schema.optional(
            Schema.Array(
              Schema.Struct({
                sourceEndpoint: Schema.Struct({
                  properties: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      sourceEndpointResourceId: Schema.optional(Schema.String),
                      awsS3BucketId: Schema.optional(Schema.String),
                    }),
                  ),
                }),
                targetEndpoint: Schema.Struct({
                  properties: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      targetEndpointResourceId: Schema.optional(Schema.String),
                      azureStorageAccountResourceId: Schema.optional(
                        Schema.String,
                      ),
                      azureStorageBlobContainerName: Schema.optional(
                        Schema.String,
                      ),
                    }),
                  ),
                }),
              }),
            ),
          ),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Canceled", "Failed", "Deleting"]),
      ),
      connections: Schema.optional(Schema.Array(Schema.String)),
      schedule: Schema.optional(
        Schema.Struct({
          frequency: Schema.optional(
            Schema.Literals(["Monthly", "Weekly", "Daily", "Onetime", "None"]),
          ),
          isActive: Schema.optional(Schema.Boolean),
          executionTime: Schema.optional(
            Schema.Struct({
              hour: Schema.optional(Schema.Number),
              minute: Schema.optional(Schema.Literals([0, 30])),
            }),
          ),
          startDate: Schema.optional(Schema.String),
          daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
          daysOfMonth: Schema.optional(Schema.Array(Schema.Number)),
          cronExpression: Schema.optional(Schema.String),
          endDate: Schema.optional(Schema.String),
        }),
      ),
      dataIntegrityValidation: Schema.optional(
        Schema.Literals(["SaveVerifyFileMD5", "SaveFileMD5", "None"]),
      ),
      preservePermissions: Schema.optional(Schema.Boolean),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}/jobDefinitions/{jobDefinitionName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<JobDefinitionsCreateOrUpdateInput>;

// Output Schema
export interface JobDefinitionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const JobDefinitionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<JobDefinitionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Job Definition resource, which contains configuration for a single unit of managed data transfer.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 * @param jobDefinitionName - The name of the Job Definition resource.
 */
export const JobDefinitionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: JobDefinitionsCreateOrUpdateInput,
    outputSchema: JobDefinitionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface JobDefinitionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
  jobDefinitionName: string;
}
export const JobDefinitionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    jobDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}/jobDefinitions/{jobDefinitionName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<JobDefinitionsDeleteInput>;

// Output Schema
export type JobDefinitionsDeleteOutput = void;
export const JobDefinitionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<JobDefinitionsDeleteOutput>;

// The operation
/**
 * Deletes a Job Definition resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 * @param jobDefinitionName - The name of the Job Definition resource.
 */
export const JobDefinitionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobDefinitionsDeleteInput,
  outputSchema: JobDefinitionsDeleteOutput,
}));
// Input Schema
export interface JobDefinitionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
  jobDefinitionName: string;
}
export const JobDefinitionsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  jobDefinitionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}/jobDefinitions/{jobDefinitionName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<JobDefinitionsGetInput>;

// Output Schema
export interface JobDefinitionsGetOutput {
  id?: string;
  name?: string;
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
export const JobDefinitionsGetOutput =
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
  }) as unknown as Schema.Codec<JobDefinitionsGetOutput>;

// The operation
/**
 * Gets a Job Definition resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 * @param jobDefinitionName - The name of the Job Definition resource.
 */
export const JobDefinitionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobDefinitionsGetInput,
  outputSchema: JobDefinitionsGetOutput,
}));
// Input Schema
export interface JobDefinitionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
}
export const JobDefinitionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}/jobDefinitions",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<JobDefinitionsListInput>;

// Output Schema
export interface JobDefinitionsListOutput {
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
export const JobDefinitionsListOutput =
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
  }) as unknown as Schema.Codec<JobDefinitionsListOutput>;

// The operation
/**
 * Lists all Job Definitions in a Project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 */
export const JobDefinitionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobDefinitionsListInput,
  outputSchema: JobDefinitionsListOutput,
}));
// Input Schema
export interface JobDefinitionsStartJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
  jobDefinitionName: string;
}
export const JobDefinitionsStartJobInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    jobDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}/jobDefinitions/{jobDefinitionName}/startJob",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<JobDefinitionsStartJobInput>;

// Output Schema
export interface JobDefinitionsStartJobOutput {
  jobRunResourceId?: string;
}
export const JobDefinitionsStartJobOutput =
  /*@__PURE__*/ Schema.Struct({
    jobRunResourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<JobDefinitionsStartJobOutput>;

// The operation
/**
 * Creates a new Job Run resource for the specified Job Definition and passes it to the Agent for execution.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 * @param jobDefinitionName - The name of the Job Definition resource.
 */
export const JobDefinitionsStartJob = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobDefinitionsStartJobInput,
  outputSchema: JobDefinitionsStartJobOutput,
}));
// Input Schema
export interface JobDefinitionsStopJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
  jobDefinitionName: string;
}
export const JobDefinitionsStopJobInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    jobDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}/jobDefinitions/{jobDefinitionName}/stopJob",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<JobDefinitionsStopJobInput>;

// Output Schema
export interface JobDefinitionsStopJobOutput {
  jobRunResourceId?: string;
}
export const JobDefinitionsStopJobOutput =
  /*@__PURE__*/ Schema.Struct({
    jobRunResourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<JobDefinitionsStopJobOutput>;

// The operation
/**
 * Requests the Agent of any active instance of this Job Definition to stop.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 * @param jobDefinitionName - The name of the Job Definition resource.
 */
export const JobDefinitionsStopJob = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobDefinitionsStopJobInput,
  outputSchema: JobDefinitionsStopJobOutput,
}));
// Input Schema
export interface JobDefinitionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
  jobDefinitionName: string;
  properties?: {
    description?: string;
    copyMode?: "Additive" | "Mirror";
    agentName?: string;
    connections?: string[];
    dataIntegrityValidation?: "SaveVerifyFileMD5" | "SaveFileMD5" | "None";
    schedule?: {
      frequency?: "Monthly" | "Weekly" | "Daily" | "Onetime" | "None";
      isActive?: boolean;
      executionTime?: { hour?: number; minute?: 0 | 30 };
      startDate?: string;
      daysOfWeek?: string[];
      daysOfMonth?: number[];
      cronExpression?: string;
      endDate?: string;
    };
  };
}
export const JobDefinitionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    jobDefinitionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        copyMode: Schema.optional(Schema.Literals(["Additive", "Mirror"])),
        agentName: Schema.optional(Schema.String),
        connections: Schema.optional(Schema.Array(Schema.String)),
        dataIntegrityValidation: Schema.optional(
          Schema.Literals(["SaveVerifyFileMD5", "SaveFileMD5", "None"]),
        ),
        schedule: Schema.optional(
          Schema.Struct({
            frequency: Schema.optional(
              Schema.Literals([
                "Monthly",
                "Weekly",
                "Daily",
                "Onetime",
                "None",
              ]),
            ),
            isActive: Schema.optional(Schema.Boolean),
            executionTime: Schema.optional(
              Schema.Struct({
                hour: Schema.optional(Schema.Number),
                minute: Schema.optional(Schema.Literals([0, 30])),
              }),
            ),
            startDate: Schema.optional(Schema.String),
            daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
            daysOfMonth: Schema.optional(Schema.Array(Schema.Number)),
            cronExpression: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}/jobDefinitions/{jobDefinitionName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<JobDefinitionsUpdateInput>;

// Output Schema
export interface JobDefinitionsUpdateOutput {
  id?: string;
  name?: string;
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
export const JobDefinitionsUpdateOutput =
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
  }) as unknown as Schema.Codec<JobDefinitionsUpdateOutput>;

// The operation
/**
 * Updates properties for a Job Definition resource. Properties not specified in the request body will be unchanged.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 * @param jobDefinitionName - The name of the Job Definition resource.
 */
export const JobDefinitionsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobDefinitionsUpdateInput,
  outputSchema: JobDefinitionsUpdateOutput,
}));
// Input Schema
export interface JobRunsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
  jobDefinitionName: string;
  jobRunName: string;
}
export const JobRunsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  jobDefinitionName: Schema.String.pipe(T.PathParam()),
  jobRunName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}/jobDefinitions/{jobDefinitionName}/jobRuns/{jobRunName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<JobRunsGetInput>;

// Output Schema
export interface JobRunsGetOutput {
  id?: string;
  name?: string;
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
export const JobRunsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobRunsGetOutput>;

// The operation
/**
 * Gets a Job Run resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 * @param jobDefinitionName - The name of the Job Definition resource.
 * @param jobRunName - The name of the Job Run resource.
 */
export const JobRunsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobRunsGetInput,
  outputSchema: JobRunsGetOutput,
}));
// Input Schema
export interface JobRunsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
  jobDefinitionName: string;
}
export const JobRunsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  jobDefinitionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}/jobDefinitions/{jobDefinitionName}/jobRuns",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<JobRunsListInput>;

// Output Schema
export interface JobRunsListOutput {
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
export const JobRunsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobRunsListOutput>;

// The operation
/**
 * Lists all Job Runs in a Job Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 * @param jobDefinitionName - The name of the Job Definition resource.
 */
export const JobRunsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobRunsListInput,
  outputSchema: JobRunsListOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.StorageMover/operations",
    apiVersion: "2025-12-01",
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
export interface ProjectsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
  properties?: {
    description?: string;
    provisioningState?: "Succeeded" | "Canceled" | "Failed" | "Deleting";
  };
}
export const ProjectsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Canceled", "Failed", "Deleting"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ProjectsCreateOrUpdateInput>;

// Output Schema
export interface ProjectsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ProjectsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ProjectsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Project resource, which is a logical grouping of related jobs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 */
export const ProjectsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsCreateOrUpdateInput,
  outputSchema: ProjectsCreateOrUpdateOutput,
}));
// Input Schema
export interface ProjectsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
}
export const ProjectsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ProjectsDeleteInput>;

// Output Schema
export type ProjectsDeleteOutput = void;
export const ProjectsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectsDeleteOutput>;

// The operation
/**
 * Deletes a Project resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 */
export const ProjectsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsDeleteInput,
  outputSchema: ProjectsDeleteOutput,
}));
// Input Schema
export interface ProjectsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
}
export const ProjectsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ProjectsGetInput>;

// Output Schema
export interface ProjectsGetOutput {
  id?: string;
  name?: string;
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
export const ProjectsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProjectsGetOutput>;

// The operation
/**
 * Gets a Project resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 */
export const ProjectsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsGetInput,
  outputSchema: ProjectsGetOutput,
}));
// Input Schema
export interface ProjectsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
}
export const ProjectsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ProjectsListInput>;

// Output Schema
export interface ProjectsListOutput {
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
export const ProjectsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProjectsListOutput>;

// The operation
/**
 * Lists all Projects in a Storage Mover.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 */
export const ProjectsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsListInput,
  outputSchema: ProjectsListOutput,
}));
// Input Schema
export interface ProjectsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  projectName: string;
  properties?: { description?: string };
}
export const ProjectsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}/projects/{projectName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ProjectsUpdateInput>;

// Output Schema
export interface ProjectsUpdateOutput {
  id?: string;
  name?: string;
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
export const ProjectsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProjectsUpdateOutput>;

// The operation
/**
 * Updates properties for a Project resource. Properties not specified in the request body will be unchanged.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 * @param projectName - The name of the Project resource.
 */
export const ProjectsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsUpdateInput,
  outputSchema: ProjectsUpdateOutput,
}));
// Input Schema
export interface StorageMoversCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  properties?: {
    description?: string;
    provisioningState?: "Succeeded" | "Canceled" | "Failed" | "Deleting";
  };
  tags?: Record<string, string>;
  location: string;
}
export const StorageMoversCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Canceled", "Failed", "Deleting"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<StorageMoversCreateOrUpdateInput>;

// Output Schema
export interface StorageMoversCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageMoversCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageMoversCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a top-level Storage Mover resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 */
export const StorageMoversCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageMoversCreateOrUpdateInput,
  outputSchema: StorageMoversCreateOrUpdateOutput,
}));
// Input Schema
export interface StorageMoversDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
}
export const StorageMoversDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<StorageMoversDeleteInput>;

// Output Schema
export type StorageMoversDeleteOutput = void;
export const StorageMoversDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageMoversDeleteOutput>;

// The operation
/**
 * Deletes a Storage Mover resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 */
export const StorageMoversDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageMoversDeleteInput,
  outputSchema: StorageMoversDeleteOutput,
}));
// Input Schema
export interface StorageMoversGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
}
export const StorageMoversGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  storageMoverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<StorageMoversGetInput>;

// Output Schema
export interface StorageMoversGetOutput {
  id?: string;
  name?: string;
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
export const StorageMoversGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<StorageMoversGetOutput>;

// The operation
/**
 * Gets a Storage Mover resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 */
export const StorageMoversGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageMoversGetInput,
  outputSchema: StorageMoversGetOutput,
}));
// Input Schema
export interface StorageMoversListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const StorageMoversListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<StorageMoversListInput>;

// Output Schema
export interface StorageMoversListOutput {
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
export const StorageMoversListOutput =
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
  }) as unknown as Schema.Codec<StorageMoversListOutput>;

// The operation
/**
 * Lists all Storage Movers in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const StorageMoversList = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageMoversListInput,
  outputSchema: StorageMoversListOutput,
}));
// Input Schema
export interface StorageMoversListBySubscriptionInput {
  subscriptionId: string;
}
export const StorageMoversListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageMover/storageMovers",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<StorageMoversListBySubscriptionInput>;

// Output Schema
export interface StorageMoversListBySubscriptionOutput {
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
export const StorageMoversListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<StorageMoversListBySubscriptionOutput>;

// The operation
/**
 * Lists all Storage Movers in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const StorageMoversListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageMoversListBySubscriptionInput,
    outputSchema: StorageMoversListBySubscriptionOutput,
  }));
// Input Schema
export interface StorageMoversUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageMoverName: string;
  properties?: { description?: string };
  tags?: Record<string, string>;
}
export const StorageMoversUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageMoverName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageMover/storageMovers/{storageMoverName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<StorageMoversUpdateInput>;

// Output Schema
export interface StorageMoversUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageMoversUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageMoversUpdateOutput>;

// The operation
/**
 * Updates properties for a Storage Mover resource. Properties not specified in the request body will be unchanged.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageMoverName - The name of the Storage Mover resource.
 */
export const StorageMoversUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageMoversUpdateInput,
  outputSchema: StorageMoversUpdateOutput,
}));
