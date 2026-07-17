/**
 * Azure CosmosDb API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString, SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CassandraClustersCreateUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    restoreFromBackupId?: string;
    delegatedManagementSubnetId?: string;
    cassandraVersion?: string;
    clusterNameOverride?: string;
    authenticationMethod?: "None" | "Cassandra" | "Ldap";
    initialCassandraAdminPassword?: string | Redacted.Redacted<string>;
    prometheusEndpoint?: { ipAddress?: string };
    repairEnabled?: boolean;
    autoReplicate?: "None" | "SystemKeyspaces" | "AllKeyspaces";
    clientCertificates?: { pem?: string }[];
    externalGossipCertificates?: { pem?: string }[];
    gossipCertificates?: { pem?: string }[];
    externalSeedNodes?: { ipAddress?: string }[];
    seedNodes?: { ipAddress?: string }[];
    externalDataCenters?: string[];
    hoursBetweenBackups?: number;
    deallocated?: boolean;
    cassandraAuditLoggingEnabled?: boolean;
    provisionError?: {
      code?: string;
      message?: string;
      target?: string;
      additionalErrorInfo?: string;
    };
    extensions?: string[];
    backupSchedules?: {
      scheduleName?: string;
      cronExpression?: string;
      retentionInHours?: number;
    }[];
    scheduledEventStrategy?: "Ignore" | "StopAny" | "StopByRack";
    azureConnectionMethod?: "None" | "VPN";
    privateLinkResourceId?: string;
  };
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const CassandraClustersCreateUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        restoreFromBackupId: Schema.optional(Schema.String),
        delegatedManagementSubnetId: Schema.optional(Schema.String),
        cassandraVersion: Schema.optional(Schema.String),
        clusterNameOverride: Schema.optional(Schema.String),
        authenticationMethod: Schema.optional(
          Schema.Literals(["None", "Cassandra", "Ldap"]),
        ),
        initialCassandraAdminPassword: Schema.optional(SensitiveString),
        prometheusEndpoint: Schema.optional(
          Schema.Struct({
            ipAddress: Schema.optional(Schema.String),
          }),
        ),
        repairEnabled: Schema.optional(Schema.Boolean),
        autoReplicate: Schema.optional(
          Schema.Literals(["None", "SystemKeyspaces", "AllKeyspaces"]),
        ),
        clientCertificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              pem: Schema.optional(Schema.String),
            }),
          ),
        ),
        externalGossipCertificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              pem: Schema.optional(Schema.String),
            }),
          ),
        ),
        gossipCertificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              pem: Schema.optional(Schema.String),
            }),
          ),
        ),
        externalSeedNodes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddress: Schema.optional(Schema.String),
            }),
          ),
        ),
        seedNodes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddress: Schema.optional(Schema.String),
            }),
          ),
        ),
        externalDataCenters: Schema.optional(Schema.Array(Schema.String)),
        hoursBetweenBackups: Schema.optional(Schema.Number),
        deallocated: Schema.optional(Schema.Boolean),
        cassandraAuditLoggingEnabled: Schema.optional(Schema.Boolean),
        provisionError: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            additionalErrorInfo: Schema.optional(Schema.String),
          }),
        ),
        extensions: Schema.optional(Schema.Array(Schema.String)),
        backupSchedules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              scheduleName: Schema.optional(Schema.String),
              cronExpression: Schema.optional(Schema.String),
              retentionInHours: Schema.optional(Schema.Number),
            }),
          ),
        ),
        scheduledEventStrategy: Schema.optional(
          Schema.Literals(["Ignore", "StopAny", "StopByRack"]),
        ),
        azureConnectionMethod: Schema.optional(
          Schema.Literals(["None", "VPN"]),
        ),
        privateLinkResourceId: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraClustersCreateUpdateInput>;

// Output Schema
export interface CassandraClustersCreateUpdateOutput {
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
export const CassandraClustersCreateUpdateOutput =
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
  }) as unknown as Schema.Codec<CassandraClustersCreateUpdateOutput>;

// The operation
/**
 * Create or update a managed Cassandra cluster. When updating, you must specify all writable properties. To update only some properties, use PATCH.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 */
export const CassandraClustersCreateUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraClustersCreateUpdateInput,
    outputSchema: CassandraClustersCreateUpdateOutput,
  }));
// Input Schema
export interface CassandraClustersDeallocateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const CassandraClustersDeallocateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/deallocate",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraClustersDeallocateInput>;

// Output Schema
export type CassandraClustersDeallocateOutput = void;
export const CassandraClustersDeallocateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CassandraClustersDeallocateOutput>;

// The operation
/**
 * Deallocate the Managed Cassandra Cluster and Associated Data Centers. Deallocation will deallocate the host virtual machine of this cluster, and reserved the data disk. This won't do anything on an already deallocated cluster. Use Start to restart the cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 * @param x-ms-force-deallocate - Force to deallocate a cluster of Cluster Type Production. Force to deallocate a cluster of Cluster Type Production might cause data loss
 */
export const CassandraClustersDeallocate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CassandraClustersDeallocateInput,
  outputSchema: CassandraClustersDeallocateOutput,
}));
// Input Schema
export interface CassandraClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const CassandraClustersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraClustersDeleteInput>;

// Output Schema
export type CassandraClustersDeleteOutput = void;
export const CassandraClustersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CassandraClustersDeleteOutput>;

// The operation
/**
 * Deletes a managed Cassandra cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 */
export const CassandraClustersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CassandraClustersDeleteInput,
  outputSchema: CassandraClustersDeleteOutput,
}));
// Input Schema
export interface CassandraClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const CassandraClustersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraClustersGetInput>;

// Output Schema
export interface CassandraClustersGetOutput {
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
export const CassandraClustersGetOutput =
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
  }) as unknown as Schema.Codec<CassandraClustersGetOutput>;

// The operation
/**
 * Get the properties of a managed Cassandra cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 */
export const CassandraClustersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CassandraClustersGetInput,
  outputSchema: CassandraClustersGetOutput,
}));
// Input Schema
export interface CassandraClustersInvokeCommandInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  command: string;
  arguments?: Record<string, string>;
  host: string;
  "cassandra-stop-start"?: boolean;
  readwrite?: boolean;
}
export const CassandraClustersInvokeCommandInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    command: Schema.String,
    arguments: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    host: Schema.String,
    "cassandra-stop-start": Schema.optional(Schema.Boolean),
    readwrite: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/invokeCommand",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraClustersInvokeCommandInput>;

// Output Schema
export type CassandraClustersInvokeCommandOutput = void;
export const CassandraClustersInvokeCommandOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CassandraClustersInvokeCommandOutput>;

// The operation
/**
 * Invoke a command like nodetool for cassandra maintenance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 */
export const CassandraClustersInvokeCommand =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraClustersInvokeCommandInput,
    outputSchema: CassandraClustersInvokeCommandOutput,
  }));
// Input Schema
export interface CassandraClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CassandraClustersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraClustersListByResourceGroupInput>;

// Output Schema
export interface CassandraClustersListByResourceGroupOutput {
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
export const CassandraClustersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<CassandraClustersListByResourceGroupOutput>;

// The operation
/**
 * List all managed Cassandra clusters in this resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CassandraClustersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraClustersListByResourceGroupInput,
    outputSchema: CassandraClustersListByResourceGroupOutput,
  }));
// Input Schema
export interface CassandraClustersListBySubscriptionInput {
  subscriptionId: string;
}
export const CassandraClustersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/cassandraClusters",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraClustersListBySubscriptionInput>;

// Output Schema
export interface CassandraClustersListBySubscriptionOutput {
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
export const CassandraClustersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<CassandraClustersListBySubscriptionOutput>;

// The operation
/**
 * List all managed Cassandra clusters in this subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CassandraClustersListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraClustersListBySubscriptionInput,
    outputSchema: CassandraClustersListBySubscriptionOutput,
  }));
// Input Schema
export interface CassandraClustersStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const CassandraClustersStartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/start",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraClustersStartInput>;

// Output Schema
export type CassandraClustersStartOutput = void;
export const CassandraClustersStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CassandraClustersStartOutput>;

// The operation
/**
 * Start the Managed Cassandra Cluster and Associated Data Centers. Start will start the host virtual machine of this cluster with reserved data disk. This won't do anything on an already running cluster. Use Deallocate to deallocate the cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 */
export const CassandraClustersStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: CassandraClustersStartInput,
  outputSchema: CassandraClustersStartOutput,
}));
// Input Schema
export interface CassandraClustersStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const CassandraClustersStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/status",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraClustersStatusInput>;

// Output Schema
export interface CassandraClustersStatusOutput {
  eTag?: string;
  reaperStatus?: {
    healthy?: boolean;
    repairRunIds?: Record<string, string>;
    repairSchedules?: Record<string, string>;
  };
  connectionErrors?: {
    connectionState?:
      | "Unknown"
      | "OK"
      | "OperatorToDataCenterNetworkError"
      | "DatacenterToDatacenterNetworkError"
      | "InternalOperatorToDataCenterCertificateError"
      | "InternalError";
    iPFrom?: string;
    iPTo?: string;
    port?: number;
    exception?: string;
  }[];
  errors?: {
    code?: string;
    message?: string;
    target?: string;
    additionalErrorInfo?: string;
  }[];
  dataCenters?: {
    name?: string;
    seedNodes?: string[];
    nodes?: {
      address?: string;
      state?: "Normal" | "Leaving" | "Joining" | "Moving" | "Stopped";
      status?: string;
      cassandraProcessStatus?: string;
      load?: string;
      tokens?: string[];
      size?: number;
      hostID?: string;
      rack?: string;
      timestamp?: string;
      diskUsedKB?: number;
      diskFreeKB?: number;
      memoryUsedKB?: number;
      memoryBuffersAndCachedKB?: number;
      memoryFreeKB?: number;
      memoryTotalKB?: number;
      cpuUsage?: number;
      isLatestModel?: boolean;
    }[];
  }[];
}
export const CassandraClustersStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    eTag: Schema.optional(Schema.String),
    reaperStatus: Schema.optional(
      Schema.Struct({
        healthy: Schema.optional(Schema.Boolean),
        repairRunIds: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        repairSchedules: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    connectionErrors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          connectionState: Schema.optional(
            Schema.Literals([
              "Unknown",
              "OK",
              "OperatorToDataCenterNetworkError",
              "DatacenterToDatacenterNetworkError",
              "InternalOperatorToDataCenterCertificateError",
              "InternalError",
            ]),
          ),
          iPFrom: Schema.optional(Schema.String),
          iPTo: Schema.optional(Schema.String),
          port: Schema.optional(Schema.Number),
          exception: Schema.optional(Schema.String),
        }),
      ),
    ),
    errors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          target: Schema.optional(Schema.String),
          additionalErrorInfo: Schema.optional(Schema.String),
        }),
      ),
    ),
    dataCenters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          seedNodes: Schema.optional(Schema.Array(Schema.String)),
          nodes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                address: Schema.optional(Schema.String),
                state: Schema.optional(
                  Schema.Literals([
                    "Normal",
                    "Leaving",
                    "Joining",
                    "Moving",
                    "Stopped",
                  ]),
                ),
                status: Schema.optional(Schema.String),
                cassandraProcessStatus: Schema.optional(Schema.String),
                load: Schema.optional(Schema.String),
                tokens: Schema.optional(Schema.Array(Schema.String)),
                size: Schema.optional(Schema.Number),
                hostID: Schema.optional(Schema.String),
                rack: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                diskUsedKB: Schema.optional(Schema.Number),
                diskFreeKB: Schema.optional(Schema.Number),
                memoryUsedKB: Schema.optional(Schema.Number),
                memoryBuffersAndCachedKB: Schema.optional(Schema.Number),
                memoryFreeKB: Schema.optional(Schema.Number),
                memoryTotalKB: Schema.optional(Schema.Number),
                cpuUsage: Schema.optional(Schema.Number),
                isLatestModel: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CassandraClustersStatusOutput>;

// The operation
/**
 * Gets the CPU, memory, and disk usage statistics for each Cassandra node in a cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 */
export const CassandraClustersStatus = /*@__PURE__*/ API.make(() => ({
  inputSchema: CassandraClustersStatusInput,
  outputSchema: CassandraClustersStatusOutput,
}));
// Input Schema
export interface CassandraClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    restoreFromBackupId?: string;
    delegatedManagementSubnetId?: string;
    cassandraVersion?: string;
    clusterNameOverride?: string;
    authenticationMethod?: "None" | "Cassandra" | "Ldap";
    initialCassandraAdminPassword?: string | Redacted.Redacted<string>;
    prometheusEndpoint?: { ipAddress?: string };
    repairEnabled?: boolean;
    autoReplicate?: "None" | "SystemKeyspaces" | "AllKeyspaces";
    clientCertificates?: { pem?: string }[];
    externalGossipCertificates?: { pem?: string }[];
    gossipCertificates?: { pem?: string }[];
    externalSeedNodes?: { ipAddress?: string }[];
    seedNodes?: { ipAddress?: string }[];
    externalDataCenters?: string[];
    hoursBetweenBackups?: number;
    deallocated?: boolean;
    cassandraAuditLoggingEnabled?: boolean;
    provisionError?: {
      code?: string;
      message?: string;
      target?: string;
      additionalErrorInfo?: string;
    };
    extensions?: string[];
    backupSchedules?: {
      scheduleName?: string;
      cronExpression?: string;
      retentionInHours?: number;
    }[];
    scheduledEventStrategy?: "Ignore" | "StopAny" | "StopByRack";
    azureConnectionMethod?: "None" | "VPN";
    privateLinkResourceId?: string;
  };
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const CassandraClustersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        restoreFromBackupId: Schema.optional(Schema.String),
        delegatedManagementSubnetId: Schema.optional(Schema.String),
        cassandraVersion: Schema.optional(Schema.String),
        clusterNameOverride: Schema.optional(Schema.String),
        authenticationMethod: Schema.optional(
          Schema.Literals(["None", "Cassandra", "Ldap"]),
        ),
        initialCassandraAdminPassword: Schema.optional(SensitiveString),
        prometheusEndpoint: Schema.optional(
          Schema.Struct({
            ipAddress: Schema.optional(Schema.String),
          }),
        ),
        repairEnabled: Schema.optional(Schema.Boolean),
        autoReplicate: Schema.optional(
          Schema.Literals(["None", "SystemKeyspaces", "AllKeyspaces"]),
        ),
        clientCertificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              pem: Schema.optional(Schema.String),
            }),
          ),
        ),
        externalGossipCertificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              pem: Schema.optional(Schema.String),
            }),
          ),
        ),
        gossipCertificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              pem: Schema.optional(Schema.String),
            }),
          ),
        ),
        externalSeedNodes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddress: Schema.optional(Schema.String),
            }),
          ),
        ),
        seedNodes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddress: Schema.optional(Schema.String),
            }),
          ),
        ),
        externalDataCenters: Schema.optional(Schema.Array(Schema.String)),
        hoursBetweenBackups: Schema.optional(Schema.Number),
        deallocated: Schema.optional(Schema.Boolean),
        cassandraAuditLoggingEnabled: Schema.optional(Schema.Boolean),
        provisionError: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            additionalErrorInfo: Schema.optional(Schema.String),
          }),
        ),
        extensions: Schema.optional(Schema.Array(Schema.String)),
        backupSchedules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              scheduleName: Schema.optional(Schema.String),
              cronExpression: Schema.optional(Schema.String),
              retentionInHours: Schema.optional(Schema.Number),
            }),
          ),
        ),
        scheduledEventStrategy: Schema.optional(
          Schema.Literals(["Ignore", "StopAny", "StopByRack"]),
        ),
        azureConnectionMethod: Schema.optional(
          Schema.Literals(["None", "VPN"]),
        ),
        privateLinkResourceId: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraClustersUpdateInput>;

// Output Schema
export interface CassandraClustersUpdateOutput {
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
export const CassandraClustersUpdateOutput =
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
  }) as unknown as Schema.Codec<CassandraClustersUpdateOutput>;

// The operation
/**
 * Updates some of the properties of a managed Cassandra cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 */
export const CassandraClustersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CassandraClustersUpdateInput,
  outputSchema: CassandraClustersUpdateOutput,
}));
// Input Schema
export interface CassandraDataCentersCreateUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  dataCenterName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    dataCenterLocation?: string;
    delegatedSubnetId?: string;
    nodeCount?: number;
    seedNodes?: { ipAddress?: string }[];
    base64EncodedCassandraYamlFragment?: string;
    managedDiskCustomerKeyUri?: string;
    backupStorageCustomerKeyUri?: string;
    sku?: string;
    diskSku?: string;
    diskCapacity?: number;
    availabilityZone?: boolean;
    authenticationMethodLdapProperties?: {
      serverHostname?: string;
      serverPort?: number;
      serviceUserDistinguishedName?: string;
      serviceUserPassword?: string | Redacted.Redacted<string>;
      searchBaseDistinguishedName?: string;
      searchFilterTemplate?: string;
      serverCertificates?: { pem?: string }[];
      connectionTimeoutInMs?: number;
    };
    deallocated?: boolean;
    provisionError?: {
      code?: string;
      message?: string;
      target?: string;
      additionalErrorInfo?: string;
    };
    privateEndpointIpAddress?: string;
  };
}
export const CassandraDataCentersCreateUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    dataCenterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        dataCenterLocation: Schema.optional(Schema.String),
        delegatedSubnetId: Schema.optional(Schema.String),
        nodeCount: Schema.optional(Schema.Number),
        seedNodes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddress: Schema.optional(Schema.String),
            }),
          ),
        ),
        base64EncodedCassandraYamlFragment: Schema.optional(Schema.String),
        managedDiskCustomerKeyUri: Schema.optional(Schema.String),
        backupStorageCustomerKeyUri: Schema.optional(Schema.String),
        sku: Schema.optional(Schema.String),
        diskSku: Schema.optional(Schema.String),
        diskCapacity: Schema.optional(Schema.Number),
        availabilityZone: Schema.optional(Schema.Boolean),
        authenticationMethodLdapProperties: Schema.optional(
          Schema.Struct({
            serverHostname: Schema.optional(Schema.String),
            serverPort: Schema.optional(Schema.Number),
            serviceUserDistinguishedName: Schema.optional(Schema.String),
            serviceUserPassword: Schema.optional(SensitiveString),
            searchBaseDistinguishedName: Schema.optional(Schema.String),
            searchFilterTemplate: Schema.optional(Schema.String),
            serverCertificates: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  pem: Schema.optional(Schema.String),
                }),
              ),
            ),
            connectionTimeoutInMs: Schema.optional(Schema.Number),
          }),
        ),
        deallocated: Schema.optional(Schema.Boolean),
        provisionError: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            additionalErrorInfo: Schema.optional(Schema.String),
          }),
        ),
        privateEndpointIpAddress: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/dataCenters/{dataCenterName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraDataCentersCreateUpdateInput>;

// Output Schema
export interface CassandraDataCentersCreateUpdateOutput {
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
export const CassandraDataCentersCreateUpdateOutput =
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
  }) as unknown as Schema.Codec<CassandraDataCentersCreateUpdateOutput>;

// The operation
/**
 * Create or update a managed Cassandra data center. When updating, overwrite all properties. To update only some properties, use PATCH.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 * @param dataCenterName - Data center name in a managed Cassandra cluster.
 */
export const CassandraDataCentersCreateUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraDataCentersCreateUpdateInput,
    outputSchema: CassandraDataCentersCreateUpdateOutput,
  }));
// Input Schema
export interface CassandraDataCentersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  dataCenterName: string;
}
export const CassandraDataCentersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    dataCenterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/dataCenters/{dataCenterName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraDataCentersDeleteInput>;

// Output Schema
export type CassandraDataCentersDeleteOutput = void;
export const CassandraDataCentersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CassandraDataCentersDeleteOutput>;

// The operation
/**
 * Delete a managed Cassandra data center.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 * @param dataCenterName - Data center name in a managed Cassandra cluster.
 */
export const CassandraDataCentersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CassandraDataCentersDeleteInput,
  outputSchema: CassandraDataCentersDeleteOutput,
}));
// Input Schema
export interface CassandraDataCentersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  dataCenterName: string;
}
export const CassandraDataCentersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    dataCenterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/dataCenters/{dataCenterName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraDataCentersGetInput>;

// Output Schema
export interface CassandraDataCentersGetOutput {
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
export const CassandraDataCentersGetOutput =
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
  }) as unknown as Schema.Codec<CassandraDataCentersGetOutput>;

// The operation
/**
 * Get the properties of a managed Cassandra data center.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 * @param dataCenterName - Data center name in a managed Cassandra cluster.
 */
export const CassandraDataCentersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CassandraDataCentersGetInput,
  outputSchema: CassandraDataCentersGetOutput,
}));
// Input Schema
export interface CassandraDataCentersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const CassandraDataCentersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/dataCenters",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraDataCentersListInput>;

// Output Schema
export interface CassandraDataCentersListOutput {
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
export const CassandraDataCentersListOutput =
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
  }) as unknown as Schema.Codec<CassandraDataCentersListOutput>;

// The operation
/**
 * List all data centers in a particular managed Cassandra cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 */
export const CassandraDataCentersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CassandraDataCentersListInput,
  outputSchema: CassandraDataCentersListOutput,
}));
// Input Schema
export interface CassandraDataCentersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  dataCenterName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    dataCenterLocation?: string;
    delegatedSubnetId?: string;
    nodeCount?: number;
    seedNodes?: { ipAddress?: string }[];
    base64EncodedCassandraYamlFragment?: string;
    managedDiskCustomerKeyUri?: string;
    backupStorageCustomerKeyUri?: string;
    sku?: string;
    diskSku?: string;
    diskCapacity?: number;
    availabilityZone?: boolean;
    authenticationMethodLdapProperties?: {
      serverHostname?: string;
      serverPort?: number;
      serviceUserDistinguishedName?: string;
      serviceUserPassword?: string | Redacted.Redacted<string>;
      searchBaseDistinguishedName?: string;
      searchFilterTemplate?: string;
      serverCertificates?: { pem?: string }[];
      connectionTimeoutInMs?: number;
    };
    deallocated?: boolean;
    provisionError?: {
      code?: string;
      message?: string;
      target?: string;
      additionalErrorInfo?: string;
    };
    privateEndpointIpAddress?: string;
  };
}
export const CassandraDataCentersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    dataCenterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        dataCenterLocation: Schema.optional(Schema.String),
        delegatedSubnetId: Schema.optional(Schema.String),
        nodeCount: Schema.optional(Schema.Number),
        seedNodes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddress: Schema.optional(Schema.String),
            }),
          ),
        ),
        base64EncodedCassandraYamlFragment: Schema.optional(Schema.String),
        managedDiskCustomerKeyUri: Schema.optional(Schema.String),
        backupStorageCustomerKeyUri: Schema.optional(Schema.String),
        sku: Schema.optional(Schema.String),
        diskSku: Schema.optional(Schema.String),
        diskCapacity: Schema.optional(Schema.Number),
        availabilityZone: Schema.optional(Schema.Boolean),
        authenticationMethodLdapProperties: Schema.optional(
          Schema.Struct({
            serverHostname: Schema.optional(Schema.String),
            serverPort: Schema.optional(Schema.Number),
            serviceUserDistinguishedName: Schema.optional(Schema.String),
            serviceUserPassword: Schema.optional(SensitiveString),
            searchBaseDistinguishedName: Schema.optional(Schema.String),
            searchFilterTemplate: Schema.optional(Schema.String),
            serverCertificates: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  pem: Schema.optional(Schema.String),
                }),
              ),
            ),
            connectionTimeoutInMs: Schema.optional(Schema.Number),
          }),
        ),
        deallocated: Schema.optional(Schema.Boolean),
        provisionError: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            additionalErrorInfo: Schema.optional(Schema.String),
          }),
        ),
        privateEndpointIpAddress: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/cassandraClusters/{clusterName}/dataCenters/{dataCenterName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraDataCentersUpdateInput>;

// Output Schema
export interface CassandraDataCentersUpdateOutput {
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
export const CassandraDataCentersUpdateOutput =
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
  }) as unknown as Schema.Codec<CassandraDataCentersUpdateOutput>;

// The operation
/**
 * Update some of the properties of a managed Cassandra data center.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - Managed Cassandra cluster name.
 * @param dataCenterName - Data center name in a managed Cassandra cluster.
 */
export const CassandraDataCentersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CassandraDataCentersUpdateInput,
  outputSchema: CassandraDataCentersUpdateOutput,
}));
// Input Schema
export interface CassandraResourcesCreateUpdateCassandraKeyspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
  properties: {
    resource: { id: string };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const CassandraResourcesCreateUpdateCassandraKeyspaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesCreateUpdateCassandraKeyspaceInput>;

// Output Schema
export interface CassandraResourcesCreateUpdateCassandraKeyspaceOutput {
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
export const CassandraResourcesCreateUpdateCassandraKeyspaceOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesCreateUpdateCassandraKeyspaceOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB Cassandra keyspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 */
export const CassandraResourcesCreateUpdateCassandraKeyspace =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesCreateUpdateCassandraKeyspaceInput,
    outputSchema: CassandraResourcesCreateUpdateCassandraKeyspaceOutput,
  }));
// Input Schema
export interface CassandraResourcesCreateUpdateCassandraRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
  properties?: {
    roleDefinitionId?: string;
    scope?: string;
    principalId?: string;
    provisioningState?: string;
  };
}
export const CassandraResourcesCreateUpdateCassandraRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        roleDefinitionId: Schema.optional(Schema.String),
        scope: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesCreateUpdateCassandraRoleAssignmentInput>;

// Output Schema
export interface CassandraResourcesCreateUpdateCassandraRoleAssignmentOutput {
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
export const CassandraResourcesCreateUpdateCassandraRoleAssignmentOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesCreateUpdateCassandraRoleAssignmentOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB Cassandra Role Assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const CassandraResourcesCreateUpdateCassandraRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesCreateUpdateCassandraRoleAssignmentInput,
    outputSchema: CassandraResourcesCreateUpdateCassandraRoleAssignmentOutput,
  }));
// Input Schema
export interface CassandraResourcesCreateUpdateCassandraRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
  properties?: {
    id?: string;
    roleName?: string;
    type?: "BuiltInRole" | "CustomRole";
    assignableScopes?: string[];
    permissions?: {
      id?: string;
      dataActions?: string[];
      notDataActions?: string[];
    }[];
  };
}
export const CassandraResourcesCreateUpdateCassandraRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        roleName: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["BuiltInRole", "CustomRole"])),
        assignableScopes: Schema.optional(Schema.Array(Schema.String)),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesCreateUpdateCassandraRoleDefinitionInput>;

// Output Schema
export interface CassandraResourcesCreateUpdateCassandraRoleDefinitionOutput {
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
export const CassandraResourcesCreateUpdateCassandraRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesCreateUpdateCassandraRoleDefinitionOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB Cassandra Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const CassandraResourcesCreateUpdateCassandraRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesCreateUpdateCassandraRoleDefinitionInput,
    outputSchema: CassandraResourcesCreateUpdateCassandraRoleDefinitionOutput,
  }));
// Input Schema
export interface CassandraResourcesCreateUpdateCassandraTableInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
  tableName: string;
  properties: {
    resource: {
      id: string;
      defaultTtl?: number;
      schema?: {
        columns?: { name?: string; type?: string }[];
        partitionKeys?: { name?: string }[];
        clusterKeys?: { name?: string; orderBy?: string }[];
      };
      analyticalStorageTtl?: number;
    };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const CassandraResourcesCreateUpdateCassandraTableInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        defaultTtl: Schema.optional(Schema.Number),
        schema: Schema.optional(
          Schema.Struct({
            columns: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                }),
              ),
            ),
            partitionKeys: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                }),
              ),
            ),
            clusterKeys: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  orderBy: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        analyticalStorageTtl: Schema.optional(Schema.Number),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesCreateUpdateCassandraTableInput>;

// Output Schema
export interface CassandraResourcesCreateUpdateCassandraTableOutput {
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
export const CassandraResourcesCreateUpdateCassandraTableOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesCreateUpdateCassandraTableOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB Cassandra Table
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 * @param tableName - Cosmos DB table name.
 */
export const CassandraResourcesCreateUpdateCassandraTable =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesCreateUpdateCassandraTableInput,
    outputSchema: CassandraResourcesCreateUpdateCassandraTableOutput,
  }));
// Input Schema
export interface CassandraResourcesDeleteCassandraKeyspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
}
export const CassandraResourcesDeleteCassandraKeyspaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesDeleteCassandraKeyspaceInput>;

// Output Schema
export type CassandraResourcesDeleteCassandraKeyspaceOutput = void;
export const CassandraResourcesDeleteCassandraKeyspaceOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CassandraResourcesDeleteCassandraKeyspaceOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Cassandra keyspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 */
export const CassandraResourcesDeleteCassandraKeyspace =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesDeleteCassandraKeyspaceInput,
    outputSchema: CassandraResourcesDeleteCassandraKeyspaceOutput,
  }));
// Input Schema
export interface CassandraResourcesDeleteCassandraRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
}
export const CassandraResourcesDeleteCassandraRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesDeleteCassandraRoleAssignmentInput>;

// Output Schema
export type CassandraResourcesDeleteCassandraRoleAssignmentOutput = void;
export const CassandraResourcesDeleteCassandraRoleAssignmentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CassandraResourcesDeleteCassandraRoleAssignmentOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Cassandra Role Assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const CassandraResourcesDeleteCassandraRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesDeleteCassandraRoleAssignmentInput,
    outputSchema: CassandraResourcesDeleteCassandraRoleAssignmentOutput,
  }));
// Input Schema
export interface CassandraResourcesDeleteCassandraRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
}
export const CassandraResourcesDeleteCassandraRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesDeleteCassandraRoleDefinitionInput>;

// Output Schema
export type CassandraResourcesDeleteCassandraRoleDefinitionOutput = void;
export const CassandraResourcesDeleteCassandraRoleDefinitionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CassandraResourcesDeleteCassandraRoleDefinitionOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Cassandra Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const CassandraResourcesDeleteCassandraRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesDeleteCassandraRoleDefinitionInput,
    outputSchema: CassandraResourcesDeleteCassandraRoleDefinitionOutput,
  }));
// Input Schema
export interface CassandraResourcesDeleteCassandraTableInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
  tableName: string;
}
export const CassandraResourcesDeleteCassandraTableInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesDeleteCassandraTableInput>;

// Output Schema
export type CassandraResourcesDeleteCassandraTableOutput = void;
export const CassandraResourcesDeleteCassandraTableOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CassandraResourcesDeleteCassandraTableOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Cassandra table.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 * @param tableName - Cosmos DB table name.
 */
export const CassandraResourcesDeleteCassandraTable =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesDeleteCassandraTableInput,
    outputSchema: CassandraResourcesDeleteCassandraTableOutput,
  }));
// Input Schema
export interface CassandraResourcesGetCassandraKeyspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
}
export const CassandraResourcesGetCassandraKeyspaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesGetCassandraKeyspaceInput>;

// Output Schema
export interface CassandraResourcesGetCassandraKeyspaceOutput {
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
export const CassandraResourcesGetCassandraKeyspaceOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesGetCassandraKeyspaceOutput>;

// The operation
/**
 * Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 */
export const CassandraResourcesGetCassandraKeyspace =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesGetCassandraKeyspaceInput,
    outputSchema: CassandraResourcesGetCassandraKeyspaceOutput,
  }));
// Input Schema
export interface CassandraResourcesGetCassandraKeyspaceThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
}
export const CassandraResourcesGetCassandraKeyspaceThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesGetCassandraKeyspaceThroughputInput>;

// Output Schema
export interface CassandraResourcesGetCassandraKeyspaceThroughputOutput {
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
export const CassandraResourcesGetCassandraKeyspaceThroughputOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesGetCassandraKeyspaceThroughputOutput>;

// The operation
/**
 * Gets the RUs per second of the Cassandra Keyspace under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 */
export const CassandraResourcesGetCassandraKeyspaceThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesGetCassandraKeyspaceThroughputInput,
    outputSchema: CassandraResourcesGetCassandraKeyspaceThroughputOutput,
  }));
// Input Schema
export interface CassandraResourcesGetCassandraRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
}
export const CassandraResourcesGetCassandraRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesGetCassandraRoleAssignmentInput>;

// Output Schema
export interface CassandraResourcesGetCassandraRoleAssignmentOutput {
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
export const CassandraResourcesGetCassandraRoleAssignmentOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesGetCassandraRoleAssignmentOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB Cassandra Role Assignment with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const CassandraResourcesGetCassandraRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesGetCassandraRoleAssignmentInput,
    outputSchema: CassandraResourcesGetCassandraRoleAssignmentOutput,
  }));
// Input Schema
export interface CassandraResourcesGetCassandraRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
}
export const CassandraResourcesGetCassandraRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesGetCassandraRoleDefinitionInput>;

// Output Schema
export interface CassandraResourcesGetCassandraRoleDefinitionOutput {
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
export const CassandraResourcesGetCassandraRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesGetCassandraRoleDefinitionOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB Cassandra Role Definition with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const CassandraResourcesGetCassandraRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesGetCassandraRoleDefinitionInput,
    outputSchema: CassandraResourcesGetCassandraRoleDefinitionOutput,
  }));
// Input Schema
export interface CassandraResourcesGetCassandraTableInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
  tableName: string;
}
export const CassandraResourcesGetCassandraTableInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesGetCassandraTableInput>;

// Output Schema
export interface CassandraResourcesGetCassandraTableOutput {
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
export const CassandraResourcesGetCassandraTableOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesGetCassandraTableOutput>;

// The operation
/**
 * Gets the Cassandra table under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 * @param tableName - Cosmos DB table name.
 */
export const CassandraResourcesGetCassandraTable =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesGetCassandraTableInput,
    outputSchema: CassandraResourcesGetCassandraTableOutput,
  }));
// Input Schema
export interface CassandraResourcesGetCassandraTableThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
  tableName: string;
}
export const CassandraResourcesGetCassandraTableThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesGetCassandraTableThroughputInput>;

// Output Schema
export interface CassandraResourcesGetCassandraTableThroughputOutput {
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
export const CassandraResourcesGetCassandraTableThroughputOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesGetCassandraTableThroughputOutput>;

// The operation
/**
 * Gets the RUs per second of the Cassandra table under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 * @param tableName - Cosmos DB table name.
 */
export const CassandraResourcesGetCassandraTableThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesGetCassandraTableThroughputInput,
    outputSchema: CassandraResourcesGetCassandraTableThroughputOutput,
  }));
// Input Schema
export interface CassandraResourcesListCassandraKeyspacesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const CassandraResourcesListCassandraKeyspacesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesListCassandraKeyspacesInput>;

// Output Schema
export interface CassandraResourcesListCassandraKeyspacesOutput {
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
export const CassandraResourcesListCassandraKeyspacesOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesListCassandraKeyspacesOutput>;

// The operation
/**
 * Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const CassandraResourcesListCassandraKeyspaces =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesListCassandraKeyspacesInput,
    outputSchema: CassandraResourcesListCassandraKeyspacesOutput,
  }));
// Input Schema
export interface CassandraResourcesListCassandraRoleAssignmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const CassandraResourcesListCassandraRoleAssignmentsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraRoleAssignments",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesListCassandraRoleAssignmentsInput>;

// Output Schema
export interface CassandraResourcesListCassandraRoleAssignmentsOutput {
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
export const CassandraResourcesListCassandraRoleAssignmentsOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesListCassandraRoleAssignmentsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB Cassandra Role Assignments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const CassandraResourcesListCassandraRoleAssignments =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesListCassandraRoleAssignmentsInput,
    outputSchema: CassandraResourcesListCassandraRoleAssignmentsOutput,
  }));
// Input Schema
export interface CassandraResourcesListCassandraRoleDefinitionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const CassandraResourcesListCassandraRoleDefinitionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraRoleDefinitions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesListCassandraRoleDefinitionsInput>;

// Output Schema
export interface CassandraResourcesListCassandraRoleDefinitionsOutput {
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
export const CassandraResourcesListCassandraRoleDefinitionsOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesListCassandraRoleDefinitionsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB Cassandra Role Definitions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const CassandraResourcesListCassandraRoleDefinitions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesListCassandraRoleDefinitionsInput,
    outputSchema: CassandraResourcesListCassandraRoleDefinitionsOutput,
  }));
// Input Schema
export interface CassandraResourcesListCassandraTablesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
}
export const CassandraResourcesListCassandraTablesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesListCassandraTablesInput>;

// Output Schema
export interface CassandraResourcesListCassandraTablesOutput {
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
export const CassandraResourcesListCassandraTablesOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesListCassandraTablesOutput>;

// The operation
/**
 * Lists the Cassandra table under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 */
export const CassandraResourcesListCassandraTables =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesListCassandraTablesInput,
    outputSchema: CassandraResourcesListCassandraTablesOutput,
  }));
// Input Schema
export interface CassandraResourcesMigrateCassandraKeyspaceToAutoscaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
}
export const CassandraResourcesMigrateCassandraKeyspaceToAutoscaleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default/migrateToAutoscale",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesMigrateCassandraKeyspaceToAutoscaleInput>;

// Output Schema
export interface CassandraResourcesMigrateCassandraKeyspaceToAutoscaleOutput {
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
export const CassandraResourcesMigrateCassandraKeyspaceToAutoscaleOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesMigrateCassandraKeyspaceToAutoscaleOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB Cassandra Keyspace from manual throughput to autoscale
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 */
export const CassandraResourcesMigrateCassandraKeyspaceToAutoscale =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesMigrateCassandraKeyspaceToAutoscaleInput,
    outputSchema: CassandraResourcesMigrateCassandraKeyspaceToAutoscaleOutput,
  }));
// Input Schema
export interface CassandraResourcesMigrateCassandraKeyspaceToManualThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
}
export const CassandraResourcesMigrateCassandraKeyspaceToManualThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default/migrateToManualThroughput",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesMigrateCassandraKeyspaceToManualThroughputInput>;

// Output Schema
export interface CassandraResourcesMigrateCassandraKeyspaceToManualThroughputOutput {
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
export const CassandraResourcesMigrateCassandraKeyspaceToManualThroughputOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesMigrateCassandraKeyspaceToManualThroughputOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB Cassandra Keyspace from autoscale to manual throughput
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 */
export const CassandraResourcesMigrateCassandraKeyspaceToManualThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      CassandraResourcesMigrateCassandraKeyspaceToManualThroughputInput,
    outputSchema:
      CassandraResourcesMigrateCassandraKeyspaceToManualThroughputOutput,
  }));
// Input Schema
export interface CassandraResourcesMigrateCassandraTableToAutoscaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
  tableName: string;
}
export const CassandraResourcesMigrateCassandraTableToAutoscaleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default/migrateToAutoscale",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesMigrateCassandraTableToAutoscaleInput>;

// Output Schema
export interface CassandraResourcesMigrateCassandraTableToAutoscaleOutput {
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
export const CassandraResourcesMigrateCassandraTableToAutoscaleOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesMigrateCassandraTableToAutoscaleOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB Cassandra table from manual throughput to autoscale
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 * @param tableName - Cosmos DB table name.
 */
export const CassandraResourcesMigrateCassandraTableToAutoscale =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesMigrateCassandraTableToAutoscaleInput,
    outputSchema: CassandraResourcesMigrateCassandraTableToAutoscaleOutput,
  }));
// Input Schema
export interface CassandraResourcesMigrateCassandraTableToManualThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
  tableName: string;
}
export const CassandraResourcesMigrateCassandraTableToManualThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default/migrateToManualThroughput",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesMigrateCassandraTableToManualThroughputInput>;

// Output Schema
export interface CassandraResourcesMigrateCassandraTableToManualThroughputOutput {
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
export const CassandraResourcesMigrateCassandraTableToManualThroughputOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesMigrateCassandraTableToManualThroughputOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB Cassandra table from autoscale to manual throughput
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 * @param tableName - Cosmos DB table name.
 */
export const CassandraResourcesMigrateCassandraTableToManualThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesMigrateCassandraTableToManualThroughputInput,
    outputSchema:
      CassandraResourcesMigrateCassandraTableToManualThroughputOutput,
  }));
// Input Schema
export interface CassandraResourcesUpdateCassandraKeyspaceThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
  properties: {
    resource: {
      throughput?: number;
      autoscaleSettings?: {
        maxThroughput: number;
        autoUpgradePolicy?: {
          throughputPolicy?: { isEnabled?: boolean; incrementPercent?: number };
        };
        targetMaxThroughput?: number;
      };
      minimumThroughput?: string;
      offerReplacePending?: string;
      instantMaximumThroughput?: string;
      softAllowedMaximumThroughput?: string;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const CassandraResourcesUpdateCassandraKeyspaceThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        throughput: Schema.optional(Schema.Number),
        autoscaleSettings: Schema.optional(
          Schema.Struct({
            maxThroughput: Schema.Number,
            autoUpgradePolicy: Schema.optional(
              Schema.Struct({
                throughputPolicy: Schema.optional(
                  Schema.Struct({
                    isEnabled: Schema.optional(Schema.Boolean),
                    incrementPercent: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            targetMaxThroughput: Schema.optional(Schema.Number),
          }),
        ),
        minimumThroughput: Schema.optional(Schema.String),
        offerReplacePending: Schema.optional(Schema.String),
        instantMaximumThroughput: Schema.optional(Schema.String),
        softAllowedMaximumThroughput: Schema.optional(Schema.String),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesUpdateCassandraKeyspaceThroughputInput>;

// Output Schema
export interface CassandraResourcesUpdateCassandraKeyspaceThroughputOutput {
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
export const CassandraResourcesUpdateCassandraKeyspaceThroughputOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesUpdateCassandraKeyspaceThroughputOutput>;

// The operation
/**
 * Update RUs per second of an Azure Cosmos DB Cassandra Keyspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 */
export const CassandraResourcesUpdateCassandraKeyspaceThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesUpdateCassandraKeyspaceThroughputInput,
    outputSchema: CassandraResourcesUpdateCassandraKeyspaceThroughputOutput,
  }));
// Input Schema
export interface CassandraResourcesUpdateCassandraTableThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyspaceName: string;
  tableName: string;
  properties: {
    resource: {
      throughput?: number;
      autoscaleSettings?: {
        maxThroughput: number;
        autoUpgradePolicy?: {
          throughputPolicy?: { isEnabled?: boolean; incrementPercent?: number };
        };
        targetMaxThroughput?: number;
      };
      minimumThroughput?: string;
      offerReplacePending?: string;
      instantMaximumThroughput?: string;
      softAllowedMaximumThroughput?: string;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const CassandraResourcesUpdateCassandraTableThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyspaceName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        throughput: Schema.optional(Schema.Number),
        autoscaleSettings: Schema.optional(
          Schema.Struct({
            maxThroughput: Schema.Number,
            autoUpgradePolicy: Schema.optional(
              Schema.Struct({
                throughputPolicy: Schema.optional(
                  Schema.Struct({
                    isEnabled: Schema.optional(Schema.Boolean),
                    incrementPercent: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            targetMaxThroughput: Schema.optional(Schema.Number),
          }),
        ),
        minimumThroughput: Schema.optional(Schema.String),
        offerReplacePending: Schema.optional(Schema.String),
        instantMaximumThroughput: Schema.optional(Schema.String),
        softAllowedMaximumThroughput: Schema.optional(Schema.String),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CassandraResourcesUpdateCassandraTableThroughputInput>;

// Output Schema
export interface CassandraResourcesUpdateCassandraTableThroughputOutput {
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
export const CassandraResourcesUpdateCassandraTableThroughputOutput =
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
  }) as unknown as Schema.Codec<CassandraResourcesUpdateCassandraTableThroughputOutput>;

// The operation
/**
 * Update RUs per second of an Azure Cosmos DB Cassandra table
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param keyspaceName - Cosmos DB keyspace name.
 * @param tableName - Cosmos DB table name.
 */
export const CassandraResourcesUpdateCassandraTableThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CassandraResourcesUpdateCassandraTableThroughputInput,
    outputSchema: CassandraResourcesUpdateCassandraTableThroughputOutput,
  }));
// Input Schema
export interface CollectionListMetricDefinitionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseRid: string;
  collectionRid: string;
}
export const CollectionListMetricDefinitionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    collectionRid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/metricDefinitions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CollectionListMetricDefinitionsInput>;

// Output Schema
export interface CollectionListMetricDefinitionsOutput {
  value?: {
    metricAvailabilities?: { timeGrain?: string; retention?: string }[];
    primaryAggregationType?:
      | "None"
      | "Average"
      | "Total"
      | "Minimum"
      | "Maximum"
      | "Last";
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    resourceUri?: string;
    name?: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const CollectionListMetricDefinitionsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          metricAvailabilities: Schema.optional(
            Schema.Array(
              Schema.Struct({
                timeGrain: Schema.optional(Schema.String),
                retention: Schema.optional(Schema.String),
              }),
            ),
          ),
          primaryAggregationType: Schema.optional(
            Schema.Literals([
              "None",
              "Average",
              "Total",
              "Minimum",
              "Maximum",
              "Last",
            ]),
          ),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          resourceUri: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<CollectionListMetricDefinitionsOutput>;

// The operation
/**
 * Retrieves metric definitions for the given collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseRid - Cosmos DB database rid.
 * @param collectionRid - Cosmos DB collection rid.
 */
export const CollectionListMetricDefinitions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CollectionListMetricDefinitionsInput,
    outputSchema: CollectionListMetricDefinitionsOutput,
  }));
// Input Schema
export interface CollectionListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseRid: string;
  collectionRid: string;
  $filter: string;
}
export const CollectionListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    collectionRid: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CollectionListMetricsInput>;

// Output Schema
export interface CollectionListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const CollectionListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CollectionListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given database account and collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseRid - Cosmos DB database rid.
 * @param collectionRid - Cosmos DB collection rid.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const CollectionListMetrics = /*@__PURE__*/ API.make(() => ({
  inputSchema: CollectionListMetricsInput,
  outputSchema: CollectionListMetricsOutput,
}));
// Input Schema
export interface CollectionListUsagesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseRid: string;
  collectionRid: string;
  $filter?: string;
}
export const CollectionListUsagesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    collectionRid: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/usages",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CollectionListUsagesInput>;

// Output Schema
export interface CollectionListUsagesOutput {
  value?: {
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    quotaPeriod?: string;
    limit?: number;
    currentValue?: number;
  }[];
  nextLink?: string;
}
export const CollectionListUsagesOutput =
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
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          quotaPeriod: Schema.optional(Schema.String),
          limit: Schema.optional(Schema.Number),
          currentValue: Schema.optional(Schema.Number),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CollectionListUsagesOutput>;

// The operation
/**
 * Retrieves the usages (most recent storage data) for the given collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseRid - Cosmos DB database rid.
 * @param collectionRid - Cosmos DB collection rid.
 * @param $filter - An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
 */
export const CollectionListUsages = /*@__PURE__*/ API.make(() => ({
  inputSchema: CollectionListUsagesInput,
  outputSchema: CollectionListUsagesOutput,
}));
// Input Schema
export interface CollectionPartitionListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseRid: string;
  collectionRid: string;
  $filter: string;
}
export const CollectionPartitionListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    collectionRid: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CollectionPartitionListMetricsInput>;

// Output Schema
export interface CollectionPartitionListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const CollectionPartitionListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CollectionPartitionListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given collection, split by partition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseRid - Cosmos DB database rid.
 * @param collectionRid - Cosmos DB collection rid.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const CollectionPartitionListMetrics =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CollectionPartitionListMetricsInput,
    outputSchema: CollectionPartitionListMetricsOutput,
  }));
// Input Schema
export interface CollectionPartitionListUsagesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseRid: string;
  collectionRid: string;
  $filter?: string;
}
export const CollectionPartitionListUsagesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    collectionRid: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/usages",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CollectionPartitionListUsagesInput>;

// Output Schema
export interface CollectionPartitionListUsagesOutput {
  value?: {
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    quotaPeriod?: string;
    limit?: number;
    currentValue?: number;
  }[];
  nextLink?: string;
}
export const CollectionPartitionListUsagesOutput =
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
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          quotaPeriod: Schema.optional(Schema.String),
          limit: Schema.optional(Schema.Number),
          currentValue: Schema.optional(Schema.Number),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CollectionPartitionListUsagesOutput>;

// The operation
/**
 * Retrieves the usages (most recent storage data) for the given collection, split by partition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseRid - Cosmos DB database rid.
 * @param collectionRid - Cosmos DB collection rid.
 * @param $filter - An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
 */
export const CollectionPartitionListUsages =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CollectionPartitionListUsagesInput,
    outputSchema: CollectionPartitionListUsagesOutput,
  }));
// Input Schema
export interface CollectionPartitionRegionListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  region: string;
  databaseRid: string;
  collectionRid: string;
  $filter: string;
}
export const CollectionPartitionRegionListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    region: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    collectionRid: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/partitions/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CollectionPartitionRegionListMetricsInput>;

// Output Schema
export interface CollectionPartitionRegionListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const CollectionPartitionRegionListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CollectionPartitionRegionListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given collection and region, split by partition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param region - Cosmos DB region, with spaces between words and each word capitalized.
 * @param databaseRid - Cosmos DB database rid.
 * @param collectionRid - Cosmos DB collection rid.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const CollectionPartitionRegionListMetrics =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CollectionPartitionRegionListMetricsInput,
    outputSchema: CollectionPartitionRegionListMetricsOutput,
  }));
// Input Schema
export interface CollectionRegionListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  region: string;
  databaseRid: string;
  collectionRid: string;
  $filter: string;
}
export const CollectionRegionListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    region: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    collectionRid: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<CollectionRegionListMetricsInput>;

// Output Schema
export interface CollectionRegionListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const CollectionRegionListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CollectionRegionListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given database account, collection and region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param region - Cosmos DB region, with spaces between words and each word capitalized.
 * @param databaseRid - Cosmos DB database rid.
 * @param collectionRid - Cosmos DB collection rid.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const CollectionRegionListMetrics = /*@__PURE__*/ API.make(() => ({
  inputSchema: CollectionRegionListMetricsInput,
  outputSchema: CollectionRegionListMetricsOutput,
}));
// Input Schema
export interface DatabaseAccountRegionListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  region: string;
  $filter: string;
}
export const DatabaseAccountRegionListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    region: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountRegionListMetricsInput>;

// Output Schema
export interface DatabaseAccountRegionListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const DatabaseAccountRegionListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseAccountRegionListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given database account and region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param region - Cosmos DB region, with spaces between words and each word capitalized.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const DatabaseAccountRegionListMetrics =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountRegionListMetricsInput,
    outputSchema: DatabaseAccountRegionListMetricsOutput,
  }));
// Input Schema
export interface DatabaseAccountsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  kind?: "GlobalDocumentDB" | "MongoDB" | "Parse";
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties: {
    consistencyPolicy?: {
      defaultConsistencyLevel:
        | "Eventual"
        | "Session"
        | "BoundedStaleness"
        | "Strong"
        | "ConsistentPrefix";
      maxStalenessPrefix?: number;
      maxIntervalInSeconds?: number;
    };
    locations: {
      id?: string;
      locationName?: string;
      documentEndpoint?: string;
      provisioningState?: string;
      failoverPriority?: number;
      isZoneRedundant?: boolean;
    }[];
    databaseAccountOfferType: "Standard";
    ipRules?: { ipAddressOrRange?: string }[];
    isVirtualNetworkFilterEnabled?: boolean;
    enableAutomaticFailover?: boolean;
    capabilities?: { name?: string }[];
    virtualNetworkRules?: {
      id?: string;
      ignoreMissingVNetServiceEndpoint?: boolean;
    }[];
    enableMultipleWriteLocations?: boolean;
    enableCassandraConnector?: boolean;
    connectorOffer?: "Small";
    disableKeyBasedMetadataWriteAccess?: boolean;
    keyVaultKeyUri?: string;
    defaultIdentity?: string;
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    enableFreeTier?: boolean;
    apiProperties?: {
      serverVersion?: "3.2" | "3.6" | "4.0" | "4.2" | "5.0" | "6.0" | "7.0";
    };
    enableAnalyticalStorage?: boolean;
    analyticalStorageConfiguration?: {
      schemaType?: "WellDefined" | "FullFidelity";
    };
    createMode?: "Default" | "Restore";
    backupPolicy?: {
      type: "Periodic" | "Continuous";
      migrationState?: {
        status?: "Invalid" | "InProgress" | "Completed" | "Failed";
        targetType?: "Periodic" | "Continuous";
        startTime?: string;
      };
    };
    cors?: {
      allowedOrigins: string;
      allowedMethods?: string;
      allowedHeaders?: string;
      exposedHeaders?: string;
      maxAgeInSeconds?: number;
    }[];
    networkAclBypass?: "None" | "AzureServices";
    networkAclBypassResourceIds?: string[];
    disableLocalAuth?: boolean;
    restoreParameters?: {
      restoreSource?: string;
      restoreTimestampInUtc?: string;
      restoreWithTtlDisabled?: boolean;
    };
    capacity?: { totalThroughputLimit?: number };
    keysMetadata?: {
      primaryMasterKey?: { generationTime?: string };
      secondaryMasterKey?: { generationTime?: string };
      primaryReadonlyMasterKey?: { generationTime?: string };
      secondaryReadonlyMasterKey?: { generationTime?: string };
    };
    enablePartitionMerge?: boolean;
    enableBurstCapacity?: boolean;
    minimalTlsVersion?: "Tls" | "Tls11" | "Tls12";
    customerManagedKeyStatus?: string;
    enablePriorityBasedExecution?: boolean;
    defaultPriorityLevel?: "High" | "Low";
    enablePerRegionPerPartitionAutoscale?: boolean;
    enforceHierarchicalPartitionKeyIdLastLevel?: boolean;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const DatabaseAccountsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(
      Schema.Literals(["GlobalDocumentDB", "MongoDB", "Parse"]),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
    properties: Schema.Struct({
      consistencyPolicy: Schema.optional(
        Schema.Struct({
          defaultConsistencyLevel: Schema.Literals([
            "Eventual",
            "Session",
            "BoundedStaleness",
            "Strong",
            "ConsistentPrefix",
          ]),
          maxStalenessPrefix: Schema.optional(Schema.Number),
          maxIntervalInSeconds: Schema.optional(Schema.Number),
        }),
      ),
      locations: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          locationName: Schema.optional(Schema.String),
          documentEndpoint: Schema.optional(Schema.String),
          provisioningState: Schema.optional(Schema.String),
          failoverPriority: Schema.optional(Schema.Number),
          isZoneRedundant: Schema.optional(Schema.Boolean),
        }),
      ),
      databaseAccountOfferType: Schema.Literals(["Standard"]),
      ipRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipAddressOrRange: Schema.optional(Schema.String),
          }),
        ),
      ),
      isVirtualNetworkFilterEnabled: Schema.optional(Schema.Boolean),
      enableAutomaticFailover: Schema.optional(Schema.Boolean),
      capabilities: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
          }),
        ),
      ),
      virtualNetworkRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            ignoreMissingVNetServiceEndpoint: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
      enableMultipleWriteLocations: Schema.optional(Schema.Boolean),
      enableCassandraConnector: Schema.optional(Schema.Boolean),
      connectorOffer: Schema.optional(Schema.Literals(["Small"])),
      disableKeyBasedMetadataWriteAccess: Schema.optional(Schema.Boolean),
      keyVaultKeyUri: Schema.optional(Schema.String),
      defaultIdentity: Schema.optional(Schema.String),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
      ),
      enableFreeTier: Schema.optional(Schema.Boolean),
      apiProperties: Schema.optional(
        Schema.Struct({
          serverVersion: Schema.optional(
            Schema.Literals(["3.2", "3.6", "4.0", "4.2", "5.0", "6.0", "7.0"]),
          ),
        }),
      ),
      enableAnalyticalStorage: Schema.optional(Schema.Boolean),
      analyticalStorageConfiguration: Schema.optional(
        Schema.Struct({
          schemaType: Schema.optional(
            Schema.Literals(["WellDefined", "FullFidelity"]),
          ),
        }),
      ),
      createMode: Schema.optional(Schema.Literals(["Default", "Restore"])),
      backupPolicy: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["Periodic", "Continuous"]),
          migrationState: Schema.optional(
            Schema.Struct({
              status: Schema.optional(
                Schema.Literals([
                  "Invalid",
                  "InProgress",
                  "Completed",
                  "Failed",
                ]),
              ),
              targetType: Schema.optional(
                Schema.Literals(["Periodic", "Continuous"]),
              ),
              startTime: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      cors: Schema.optional(
        Schema.Array(
          Schema.Struct({
            allowedOrigins: Schema.String,
            allowedMethods: Schema.optional(Schema.String),
            allowedHeaders: Schema.optional(Schema.String),
            exposedHeaders: Schema.optional(Schema.String),
            maxAgeInSeconds: Schema.optional(Schema.Number),
          }),
        ),
      ),
      networkAclBypass: Schema.optional(
        Schema.Literals(["None", "AzureServices"]),
      ),
      networkAclBypassResourceIds: Schema.optional(Schema.Array(Schema.String)),
      disableLocalAuth: Schema.optional(Schema.Boolean),
      restoreParameters: Schema.optional(
        Schema.Struct({
          restoreSource: Schema.optional(Schema.String),
          restoreTimestampInUtc: Schema.optional(Schema.String),
          restoreWithTtlDisabled: Schema.optional(Schema.Boolean),
        }),
      ),
      capacity: Schema.optional(
        Schema.Struct({
          totalThroughputLimit: Schema.optional(Schema.Number),
        }),
      ),
      keysMetadata: Schema.optional(
        Schema.Struct({
          primaryMasterKey: Schema.optional(
            Schema.Struct({
              generationTime: Schema.optional(Schema.String),
            }),
          ),
          secondaryMasterKey: Schema.optional(
            Schema.Struct({
              generationTime: Schema.optional(Schema.String),
            }),
          ),
          primaryReadonlyMasterKey: Schema.optional(
            Schema.Struct({
              generationTime: Schema.optional(Schema.String),
            }),
          ),
          secondaryReadonlyMasterKey: Schema.optional(
            Schema.Struct({
              generationTime: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      enablePartitionMerge: Schema.optional(Schema.Boolean),
      enableBurstCapacity: Schema.optional(Schema.Boolean),
      minimalTlsVersion: Schema.optional(
        Schema.Literals(["Tls", "Tls11", "Tls12"]),
      ),
      customerManagedKeyStatus: Schema.optional(Schema.String),
      enablePriorityBasedExecution: Schema.optional(Schema.Boolean),
      defaultPriorityLevel: Schema.optional(Schema.Literals(["High", "Low"])),
      enablePerRegionPerPartitionAutoscale: Schema.optional(Schema.Boolean),
      enforceHierarchicalPartitionKeyIdLastLevel: Schema.optional(
        Schema.Boolean,
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsCreateOrUpdateInput>;

// Output Schema
export interface DatabaseAccountsCreateOrUpdateOutput {
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
export const DatabaseAccountsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DatabaseAccountsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountsCreateOrUpdateInput,
    outputSchema: DatabaseAccountsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DatabaseAccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const DatabaseAccountsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsDeleteInput>;

// Output Schema
export type DatabaseAccountsDeleteOutput = void;
export const DatabaseAccountsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseAccountsDeleteOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatabaseAccountsDeleteInput,
  outputSchema: DatabaseAccountsDeleteOutput,
}));
// Input Schema
export interface DatabaseAccountsFailoverPriorityChangeInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  failoverPolicies: {
    id?: string;
    locationName?: string;
    failoverPriority?: number;
  }[];
}
export const DatabaseAccountsFailoverPriorityChangeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    failoverPolicies: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        locationName: Schema.optional(Schema.String),
        failoverPriority: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/failoverPriorityChange",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsFailoverPriorityChangeInput>;

// Output Schema
export type DatabaseAccountsFailoverPriorityChangeOutput = void;
export const DatabaseAccountsFailoverPriorityChangeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseAccountsFailoverPriorityChangeOutput>;

// The operation
/**
 * Changes the failover priority for the Azure Cosmos DB database account. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsFailoverPriorityChange =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountsFailoverPriorityChangeInput,
    outputSchema: DatabaseAccountsFailoverPriorityChangeOutput,
  }));
// Input Schema
export interface DatabaseAccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const DatabaseAccountsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsGetInput>;

// Output Schema
export interface DatabaseAccountsGetOutput {
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
export const DatabaseAccountsGetOutput =
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
  }) as unknown as Schema.Codec<DatabaseAccountsGetOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatabaseAccountsGetInput,
  outputSchema: DatabaseAccountsGetOutput,
}));
// Input Schema
export interface DatabaseAccountsGetReadOnlyKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const DatabaseAccountsGetReadOnlyKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/readonlykeys",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsGetReadOnlyKeysInput>;

// Output Schema
export interface DatabaseAccountsGetReadOnlyKeysOutput {
  primaryReadonlyMasterKey?: string;
  secondaryReadonlyMasterKey?: string;
}
export const DatabaseAccountsGetReadOnlyKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryReadonlyMasterKey: Schema.optional(Schema.String),
    secondaryReadonlyMasterKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseAccountsGetReadOnlyKeysOutput>;

// The operation
/**
 * Lists the read-only access keys for the specified Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsGetReadOnlyKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountsGetReadOnlyKeysInput,
    outputSchema: DatabaseAccountsGetReadOnlyKeysOutput,
  }));
// Input Schema
export interface DatabaseAccountsListInput {
  subscriptionId: string;
}
export const DatabaseAccountsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/databaseAccounts",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsListInput>;

// Output Schema
export interface DatabaseAccountsListOutput {
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
export const DatabaseAccountsListOutput =
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
  }) as unknown as Schema.Codec<DatabaseAccountsListOutput>;

// The operation
/**
 * Lists all the Azure Cosmos DB database accounts available under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const DatabaseAccountsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatabaseAccountsListInput,
  outputSchema: DatabaseAccountsListOutput,
}));
// Input Schema
export interface DatabaseAccountsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DatabaseAccountsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsListByResourceGroupInput>;

// Output Schema
export interface DatabaseAccountsListByResourceGroupOutput {
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
export const DatabaseAccountsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DatabaseAccountsListByResourceGroupOutput>;

// The operation
/**
 * Lists all the Azure Cosmos DB database accounts available under the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DatabaseAccountsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountsListByResourceGroupInput,
    outputSchema: DatabaseAccountsListByResourceGroupOutput,
  }));
// Input Schema
export interface DatabaseAccountsListConnectionStringsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const DatabaseAccountsListConnectionStringsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/listConnectionStrings",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsListConnectionStringsInput>;

// Output Schema
export interface DatabaseAccountsListConnectionStringsOutput {
  connectionStrings?: {
    connectionString?: Redacted.Redacted<string>;
    description?: string;
    keyKind?: "Primary" | "Secondary" | "PrimaryReadonly" | "SecondaryReadonly";
    type?:
      | "Sql"
      | "Table"
      | "MongoDB"
      | "Cassandra"
      | "CassandraConnectorMetadata"
      | "Gremlin"
      | "SqlDedicatedGateway"
      | "GremlinV2"
      | "Undefined";
  }[];
}
export const DatabaseAccountsListConnectionStringsOutput =
  /*@__PURE__*/ Schema.Struct({
    connectionStrings: Schema.optional(
      Schema.Array(
        Schema.Struct({
          connectionString: Schema.optional(SensitiveOutputString),
          description: Schema.optional(Schema.String),
          keyKind: Schema.optional(
            Schema.Literals([
              "Primary",
              "Secondary",
              "PrimaryReadonly",
              "SecondaryReadonly",
            ]),
          ),
          type: Schema.optional(
            Schema.Literals([
              "Sql",
              "Table",
              "MongoDB",
              "Cassandra",
              "CassandraConnectorMetadata",
              "Gremlin",
              "SqlDedicatedGateway",
              "GremlinV2",
              "Undefined",
            ]),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DatabaseAccountsListConnectionStringsOutput>;

// The operation
/**
 * Lists the connection strings for the specified Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsListConnectionStrings =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountsListConnectionStringsInput,
    outputSchema: DatabaseAccountsListConnectionStringsOutput,
  }));
// Input Schema
export interface DatabaseAccountsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const DatabaseAccountsListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/listKeys",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsListKeysInput>;

// Output Schema
export interface DatabaseAccountsListKeysOutput {
  primaryReadonlyMasterKey?: string;
  secondaryReadonlyMasterKey?: string;
}
export const DatabaseAccountsListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryReadonlyMasterKey: Schema.optional(Schema.String),
    secondaryReadonlyMasterKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseAccountsListKeysOutput>;

// The operation
/**
 * Lists the access keys for the specified Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatabaseAccountsListKeysInput,
  outputSchema: DatabaseAccountsListKeysOutput,
}));
// Input Schema
export interface DatabaseAccountsListMetricDefinitionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const DatabaseAccountsListMetricDefinitionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/metricDefinitions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsListMetricDefinitionsInput>;

// Output Schema
export interface DatabaseAccountsListMetricDefinitionsOutput {
  value?: {
    metricAvailabilities?: { timeGrain?: string; retention?: string }[];
    primaryAggregationType?:
      | "None"
      | "Average"
      | "Total"
      | "Minimum"
      | "Maximum"
      | "Last";
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    resourceUri?: string;
    name?: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const DatabaseAccountsListMetricDefinitionsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          metricAvailabilities: Schema.optional(
            Schema.Array(
              Schema.Struct({
                timeGrain: Schema.optional(Schema.String),
                retention: Schema.optional(Schema.String),
              }),
            ),
          ),
          primaryAggregationType: Schema.optional(
            Schema.Literals([
              "None",
              "Average",
              "Total",
              "Minimum",
              "Maximum",
              "Last",
            ]),
          ),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          resourceUri: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<DatabaseAccountsListMetricDefinitionsOutput>;

// The operation
/**
 * Retrieves metric definitions for the given database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsListMetricDefinitions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountsListMetricDefinitionsInput,
    outputSchema: DatabaseAccountsListMetricDefinitionsOutput,
  }));
// Input Schema
export interface DatabaseAccountsListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $filter: string;
}
export const DatabaseAccountsListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsListMetricsInput>;

// Output Schema
export interface DatabaseAccountsListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const DatabaseAccountsListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseAccountsListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const DatabaseAccountsListMetrics = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatabaseAccountsListMetricsInput,
  outputSchema: DatabaseAccountsListMetricsOutput,
}));
// Input Schema
export interface DatabaseAccountsListReadOnlyKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const DatabaseAccountsListReadOnlyKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/readonlykeys",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsListReadOnlyKeysInput>;

// Output Schema
export interface DatabaseAccountsListReadOnlyKeysOutput {
  primaryReadonlyMasterKey?: string;
  secondaryReadonlyMasterKey?: string;
}
export const DatabaseAccountsListReadOnlyKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryReadonlyMasterKey: Schema.optional(Schema.String),
    secondaryReadonlyMasterKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseAccountsListReadOnlyKeysOutput>;

// The operation
/**
 * Lists the read-only access keys for the specified Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsListReadOnlyKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountsListReadOnlyKeysInput,
    outputSchema: DatabaseAccountsListReadOnlyKeysOutput,
  }));
// Input Schema
export interface DatabaseAccountsListUsagesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $filter?: string;
}
export const DatabaseAccountsListUsagesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/usages",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsListUsagesInput>;

// Output Schema
export interface DatabaseAccountsListUsagesOutput {
  value?: {
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    quotaPeriod?: string;
    limit?: number;
    currentValue?: number;
  }[];
  nextLink?: string;
}
export const DatabaseAccountsListUsagesOutput =
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
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          quotaPeriod: Schema.optional(Schema.String),
          limit: Schema.optional(Schema.Number),
          currentValue: Schema.optional(Schema.Number),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseAccountsListUsagesOutput>;

// The operation
/**
 * Retrieves the usages (most recent data) for the given database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param $filter - An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
 */
export const DatabaseAccountsListUsages = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatabaseAccountsListUsagesInput,
  outputSchema: DatabaseAccountsListUsagesOutput,
}));
// Input Schema
export interface DatabaseAccountsOfflineRegionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  region: string;
}
export const DatabaseAccountsOfflineRegionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    region: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/offlineRegion",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsOfflineRegionInput>;

// Output Schema
export type DatabaseAccountsOfflineRegionOutput = void;
export const DatabaseAccountsOfflineRegionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseAccountsOfflineRegionOutput>;

// The operation
/**
 * Offline the specified region for the specified Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsOfflineRegion =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountsOfflineRegionInput,
    outputSchema: DatabaseAccountsOfflineRegionOutput,
  }));
// Input Schema
export interface DatabaseAccountsOnlineRegionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  region: string;
}
export const DatabaseAccountsOnlineRegionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    region: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/onlineRegion",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsOnlineRegionInput>;

// Output Schema
export type DatabaseAccountsOnlineRegionOutput = void;
export const DatabaseAccountsOnlineRegionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseAccountsOnlineRegionOutput>;

// The operation
/**
 * Online the specified region for the specified Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsOnlineRegion =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountsOnlineRegionInput,
    outputSchema: DatabaseAccountsOnlineRegionOutput,
  }));
// Input Schema
export interface DatabaseAccountsRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyKind: "primary" | "secondary" | "primaryReadonly" | "secondaryReadonly";
}
export const DatabaseAccountsRegenerateKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyKind: Schema.Literals([
      "primary",
      "secondary",
      "primaryReadonly",
      "secondaryReadonly",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/regenerateKey",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsRegenerateKeyInput>;

// Output Schema
export type DatabaseAccountsRegenerateKeyOutput = void;
export const DatabaseAccountsRegenerateKeyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseAccountsRegenerateKeyOutput>;

// The operation
/**
 * Regenerates an access key for the specified Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsRegenerateKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseAccountsRegenerateKeyInput,
    outputSchema: DatabaseAccountsRegenerateKeyOutput,
  }));
// Input Schema
export interface DatabaseAccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tags?: Record<string, string>;
  location?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties?: {
    consistencyPolicy?: {
      defaultConsistencyLevel:
        | "Eventual"
        | "Session"
        | "BoundedStaleness"
        | "Strong"
        | "ConsistentPrefix";
      maxStalenessPrefix?: number;
      maxIntervalInSeconds?: number;
    };
    locations?: {
      id?: string;
      locationName?: string;
      documentEndpoint?: string;
      provisioningState?: string;
      failoverPriority?: number;
      isZoneRedundant?: boolean;
    }[];
    ipRules?: { ipAddressOrRange?: string }[];
    isVirtualNetworkFilterEnabled?: boolean;
    enableAutomaticFailover?: boolean;
    capabilities?: { name?: string }[];
    virtualNetworkRules?: {
      id?: string;
      ignoreMissingVNetServiceEndpoint?: boolean;
    }[];
    enableMultipleWriteLocations?: boolean;
    enableCassandraConnector?: boolean;
    connectorOffer?: "Small";
    disableKeyBasedMetadataWriteAccess?: boolean;
    keyVaultKeyUri?: string;
    defaultIdentity?: string;
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    enableFreeTier?: boolean;
    apiProperties?: {
      serverVersion?: "3.2" | "3.6" | "4.0" | "4.2" | "5.0" | "6.0" | "7.0";
    };
    enableAnalyticalStorage?: boolean;
    analyticalStorageConfiguration?: {
      schemaType?: "WellDefined" | "FullFidelity";
    };
    backupPolicy?: {
      type: "Periodic" | "Continuous";
      migrationState?: {
        status?: "Invalid" | "InProgress" | "Completed" | "Failed";
        targetType?: "Periodic" | "Continuous";
        startTime?: string;
      };
    };
    cors?: {
      allowedOrigins: string;
      allowedMethods?: string;
      allowedHeaders?: string;
      exposedHeaders?: string;
      maxAgeInSeconds?: number;
    }[];
    networkAclBypass?: "None" | "AzureServices";
    networkAclBypassResourceIds?: string[];
    disableLocalAuth?: boolean;
    capacity?: { totalThroughputLimit?: number };
    keysMetadata?: {
      primaryMasterKey?: { generationTime?: string };
      secondaryMasterKey?: { generationTime?: string };
      primaryReadonlyMasterKey?: { generationTime?: string };
      secondaryReadonlyMasterKey?: { generationTime?: string };
    };
    enablePartitionMerge?: boolean;
    enableBurstCapacity?: boolean;
    minimalTlsVersion?: "Tls" | "Tls11" | "Tls12";
    customerManagedKeyStatus?: string;
    enablePriorityBasedExecution?: boolean;
    defaultPriorityLevel?: "High" | "Low";
    enablePerRegionPerPartitionAutoscale?: boolean;
    enforceHierarchicalPartitionKeyIdLastLevel?: boolean;
  };
}
export const DatabaseAccountsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
        consistencyPolicy: Schema.optional(
          Schema.Struct({
            defaultConsistencyLevel: Schema.Literals([
              "Eventual",
              "Session",
              "BoundedStaleness",
              "Strong",
              "ConsistentPrefix",
            ]),
            maxStalenessPrefix: Schema.optional(Schema.Number),
            maxIntervalInSeconds: Schema.optional(Schema.Number),
          }),
        ),
        locations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              locationName: Schema.optional(Schema.String),
              documentEndpoint: Schema.optional(Schema.String),
              provisioningState: Schema.optional(Schema.String),
              failoverPriority: Schema.optional(Schema.Number),
              isZoneRedundant: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        ipRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddressOrRange: Schema.optional(Schema.String),
            }),
          ),
        ),
        isVirtualNetworkFilterEnabled: Schema.optional(Schema.Boolean),
        enableAutomaticFailover: Schema.optional(Schema.Boolean),
        capabilities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
            }),
          ),
        ),
        virtualNetworkRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              ignoreMissingVNetServiceEndpoint: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        enableMultipleWriteLocations: Schema.optional(Schema.Boolean),
        enableCassandraConnector: Schema.optional(Schema.Boolean),
        connectorOffer: Schema.optional(Schema.Literals(["Small"])),
        disableKeyBasedMetadataWriteAccess: Schema.optional(Schema.Boolean),
        keyVaultKeyUri: Schema.optional(Schema.String),
        defaultIdentity: Schema.optional(Schema.String),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        enableFreeTier: Schema.optional(Schema.Boolean),
        apiProperties: Schema.optional(
          Schema.Struct({
            serverVersion: Schema.optional(
              Schema.Literals([
                "3.2",
                "3.6",
                "4.0",
                "4.2",
                "5.0",
                "6.0",
                "7.0",
              ]),
            ),
          }),
        ),
        enableAnalyticalStorage: Schema.optional(Schema.Boolean),
        analyticalStorageConfiguration: Schema.optional(
          Schema.Struct({
            schemaType: Schema.optional(
              Schema.Literals(["WellDefined", "FullFidelity"]),
            ),
          }),
        ),
        backupPolicy: Schema.optional(
          Schema.Struct({
            type: Schema.Literals(["Periodic", "Continuous"]),
            migrationState: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "Invalid",
                    "InProgress",
                    "Completed",
                    "Failed",
                  ]),
                ),
                targetType: Schema.optional(
                  Schema.Literals(["Periodic", "Continuous"]),
                ),
                startTime: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        cors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              allowedOrigins: Schema.String,
              allowedMethods: Schema.optional(Schema.String),
              allowedHeaders: Schema.optional(Schema.String),
              exposedHeaders: Schema.optional(Schema.String),
              maxAgeInSeconds: Schema.optional(Schema.Number),
            }),
          ),
        ),
        networkAclBypass: Schema.optional(
          Schema.Literals(["None", "AzureServices"]),
        ),
        networkAclBypassResourceIds: Schema.optional(
          Schema.Array(Schema.String),
        ),
        disableLocalAuth: Schema.optional(Schema.Boolean),
        capacity: Schema.optional(
          Schema.Struct({
            totalThroughputLimit: Schema.optional(Schema.Number),
          }),
        ),
        keysMetadata: Schema.optional(
          Schema.Struct({
            primaryMasterKey: Schema.optional(
              Schema.Struct({
                generationTime: Schema.optional(Schema.String),
              }),
            ),
            secondaryMasterKey: Schema.optional(
              Schema.Struct({
                generationTime: Schema.optional(Schema.String),
              }),
            ),
            primaryReadonlyMasterKey: Schema.optional(
              Schema.Struct({
                generationTime: Schema.optional(Schema.String),
              }),
            ),
            secondaryReadonlyMasterKey: Schema.optional(
              Schema.Struct({
                generationTime: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        enablePartitionMerge: Schema.optional(Schema.Boolean),
        enableBurstCapacity: Schema.optional(Schema.Boolean),
        minimalTlsVersion: Schema.optional(
          Schema.Literals(["Tls", "Tls11", "Tls12"]),
        ),
        customerManagedKeyStatus: Schema.optional(Schema.String),
        enablePriorityBasedExecution: Schema.optional(Schema.Boolean),
        defaultPriorityLevel: Schema.optional(Schema.Literals(["High", "Low"])),
        enablePerRegionPerPartitionAutoscale: Schema.optional(Schema.Boolean),
        enforceHierarchicalPartitionKeyIdLastLevel: Schema.optional(
          Schema.Boolean,
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseAccountsUpdateInput>;

// Output Schema
export interface DatabaseAccountsUpdateOutput {
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
export const DatabaseAccountsUpdateOutput =
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
  }) as unknown as Schema.Codec<DatabaseAccountsUpdateOutput>;

// The operation
/**
 * Updates the properties of an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const DatabaseAccountsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatabaseAccountsUpdateInput,
  outputSchema: DatabaseAccountsUpdateOutput,
}));
// Input Schema
export interface DatabaseListMetricDefinitionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseRid: string;
}
export const DatabaseListMetricDefinitionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/metricDefinitions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseListMetricDefinitionsInput>;

// Output Schema
export interface DatabaseListMetricDefinitionsOutput {
  value?: {
    metricAvailabilities?: { timeGrain?: string; retention?: string }[];
    primaryAggregationType?:
      | "None"
      | "Average"
      | "Total"
      | "Minimum"
      | "Maximum"
      | "Last";
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    resourceUri?: string;
    name?: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const DatabaseListMetricDefinitionsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          metricAvailabilities: Schema.optional(
            Schema.Array(
              Schema.Struct({
                timeGrain: Schema.optional(Schema.String),
                retention: Schema.optional(Schema.String),
              }),
            ),
          ),
          primaryAggregationType: Schema.optional(
            Schema.Literals([
              "None",
              "Average",
              "Total",
              "Minimum",
              "Maximum",
              "Last",
            ]),
          ),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          resourceUri: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<DatabaseListMetricDefinitionsOutput>;

// The operation
/**
 * Retrieves metric definitions for the given database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseRid - Cosmos DB database rid.
 */
export const DatabaseListMetricDefinitions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DatabaseListMetricDefinitionsInput,
    outputSchema: DatabaseListMetricDefinitionsOutput,
  }));
// Input Schema
export interface DatabaseListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseRid: string;
  $filter: string;
}
export const DatabaseListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseListMetricsInput>;

// Output Schema
export interface DatabaseListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const DatabaseListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given database account and database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseRid - Cosmos DB database rid.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const DatabaseListMetrics = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatabaseListMetricsInput,
  outputSchema: DatabaseListMetricsOutput,
}));
// Input Schema
export interface DatabaseListUsagesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseRid: string;
  $filter?: string;
}
export const DatabaseListUsagesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/usages",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DatabaseListUsagesInput>;

// Output Schema
export interface DatabaseListUsagesOutput {
  value?: {
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    quotaPeriod?: string;
    limit?: number;
    currentValue?: number;
  }[];
  nextLink?: string;
}
export const DatabaseListUsagesOutput =
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
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          quotaPeriod: Schema.optional(Schema.String),
          limit: Schema.optional(Schema.Number),
          currentValue: Schema.optional(Schema.Number),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseListUsagesOutput>;

// The operation
/**
 * Retrieves the usages (most recent data) for the given database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseRid - Cosmos DB database rid.
 * @param $filter - An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
 */
export const DatabaseListUsages = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatabaseListUsagesInput,
  outputSchema: DatabaseListUsagesOutput,
}));
// Input Schema
export interface FleetCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
  properties?: {
    provisioningState?:
      | "Uninitialized"
      | "Initializing"
      | "InternallyReady"
      | "Online"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Updating"
      | "Creating";
  };
  tags?: Record<string, string>;
  location: string;
}
export const FleetCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Uninitialized",
          "Initializing",
          "InternallyReady",
          "Online",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
          "Updating",
          "Creating",
        ]),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<FleetCreateInput>;

// Output Schema
export interface FleetCreateOutput {
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
export const FleetCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FleetCreateOutput>;

// The operation
/**
 * Creates an Azure Cosmos DB fleet under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 */
export const FleetCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetCreateInput,
  outputSchema: FleetCreateOutput,
}));
// Input Schema
export interface FleetDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
}
export const FleetDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<FleetDeleteInput>;

// Output Schema
export type FleetDeleteOutput = void;
export const FleetDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FleetDeleteOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Fleet.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 */
export const FleetDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetDeleteInput,
  outputSchema: FleetDeleteOutput,
}));
// Input Schema
export interface FleetGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
}
export const FleetGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<FleetGetInput>;

// Output Schema
export interface FleetGetOutput {
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
export const FleetGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FleetGetOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB fleet under a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 */
export const FleetGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetGetInput,
  outputSchema: FleetGetOutput,
}));
// Input Schema
export interface FleetListInput {
  subscriptionId: string;
}
export const FleetListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/fleets",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<FleetListInput>;

// Output Schema
export interface FleetListOutput {
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
export const FleetListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FleetListOutput>;

// The operation
/**
 * Lists all the fleets under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const FleetList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetListInput,
  outputSchema: FleetListOutput,
}));
// Input Schema
export interface FleetListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const FleetListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<FleetListByResourceGroupInput>;

// Output Schema
export interface FleetListByResourceGroupOutput {
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
export const FleetListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<FleetListByResourceGroupOutput>;

// The operation
/**
 * Lists all the fleets under the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const FleetListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetListByResourceGroupInput,
  outputSchema: FleetListByResourceGroupOutput,
}));
// Input Schema
export interface FleetspaceAccountCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
  fleetspaceName: string;
  fleetspaceAccountName: string;
  properties?: {
    provisioningState?:
      | "Uninitialized"
      | "Initializing"
      | "InternallyReady"
      | "Online"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Updating"
      | "Creating";
    globalDatabaseAccountProperties?: {
      resourceId?: string;
      armLocation?: string;
    };
  };
}
export const FleetspaceAccountCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    fleetspaceName: Schema.String.pipe(T.PathParam()),
    fleetspaceAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Uninitialized",
            "Initializing",
            "InternallyReady",
            "Online",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
            "Updating",
            "Creating",
          ]),
        ),
        globalDatabaseAccountProperties: Schema.optional(
          Schema.Struct({
            resourceId: Schema.optional(Schema.String),
            armLocation: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}/fleetspaces/{fleetspaceName}/fleetspaceAccounts/{fleetspaceAccountName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<FleetspaceAccountCreateInput>;

// Output Schema
export interface FleetspaceAccountCreateOutput {
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
export const FleetspaceAccountCreateOutput =
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
  }) as unknown as Schema.Codec<FleetspaceAccountCreateOutput>;

// The operation
/**
 * Creates an Azure Cosmos DB fleetspace account under a fleetspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 * @param fleetspaceName - Cosmos DB fleetspace name. Needs to be unique under a fleet.
 * @param fleetspaceAccountName - Cosmos DB fleetspace account name.
 */
export const FleetspaceAccountCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetspaceAccountCreateInput,
  outputSchema: FleetspaceAccountCreateOutput,
}));
// Input Schema
export interface FleetspaceAccountDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
  fleetspaceName: string;
  fleetspaceAccountName: string;
}
export const FleetspaceAccountDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    fleetspaceName: Schema.String.pipe(T.PathParam()),
    fleetspaceAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}/fleetspaces/{fleetspaceName}/fleetspaceAccounts/{fleetspaceAccountName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<FleetspaceAccountDeleteInput>;

// Output Schema
export type FleetspaceAccountDeleteOutput = void;
export const FleetspaceAccountDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FleetspaceAccountDeleteOutput>;

// The operation
/**
 * Removes an existing Azure Cosmos DB fleetspace account from a fleetspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 * @param fleetspaceName - Cosmos DB fleetspace name. Needs to be unique under a fleet.
 * @param fleetspaceAccountName - Cosmos DB fleetspace account name.
 */
export const FleetspaceAccountDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetspaceAccountDeleteInput,
  outputSchema: FleetspaceAccountDeleteOutput,
}));
// Input Schema
export interface FleetspaceAccountGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
  fleetspaceName: string;
  fleetspaceAccountName: string;
}
export const FleetspaceAccountGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    fleetspaceName: Schema.String.pipe(T.PathParam()),
    fleetspaceAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}/fleetspaces/{fleetspaceName}/fleetspaceAccounts/{fleetspaceAccountName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<FleetspaceAccountGetInput>;

// Output Schema
export interface FleetspaceAccountGetOutput {
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
export const FleetspaceAccountGetOutput =
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
  }) as unknown as Schema.Codec<FleetspaceAccountGetOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB fleetspace account under a fleetspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 * @param fleetspaceName - Cosmos DB fleetspace name. Needs to be unique under a fleet.
 * @param fleetspaceAccountName - Cosmos DB fleetspace account name.
 */
export const FleetspaceAccountGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetspaceAccountGetInput,
  outputSchema: FleetspaceAccountGetOutput,
}));
// Input Schema
export interface FleetspaceAccountListInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
  fleetspaceName: string;
}
export const FleetspaceAccountListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    fleetspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}/fleetspaces/{fleetspaceName}/fleetspaceAccounts",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<FleetspaceAccountListInput>;

// Output Schema
export interface FleetspaceAccountListOutput {
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
export const FleetspaceAccountListOutput =
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
  }) as unknown as Schema.Codec<FleetspaceAccountListOutput>;

// The operation
/**
 * Lists all the fleetspaces accounts  under a fleetspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 * @param fleetspaceName - Cosmos DB fleetspace name. Needs to be unique under a fleet.
 */
export const FleetspaceAccountList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetspaceAccountListInput,
  outputSchema: FleetspaceAccountListOutput,
}));
// Input Schema
export interface FleetspaceCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
  fleetspaceName: string;
  properties?: {
    provisioningState?:
      | "Uninitialized"
      | "Initializing"
      | "InternallyReady"
      | "Online"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Updating"
      | "Creating";
    fleetspaceApiKind?: "NoSQL";
    serviceTier?: "GeneralPurpose" | "BusinessCritical";
    dataRegions?: string[];
    throughputPoolConfiguration?: {
      minThroughput?: number;
      maxThroughput?: number;
      dedicatedRUs?: number;
      maxConsumableRUs?: number;
    };
  };
}
export const FleetspaceCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  fleetspaceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Uninitialized",
          "Initializing",
          "InternallyReady",
          "Online",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
          "Updating",
          "Creating",
        ]),
      ),
      fleetspaceApiKind: Schema.optional(Schema.Literals(["NoSQL"])),
      serviceTier: Schema.optional(
        Schema.Literals(["GeneralPurpose", "BusinessCritical"]),
      ),
      dataRegions: Schema.optional(Schema.Array(Schema.String)),
      throughputPoolConfiguration: Schema.optional(
        Schema.Struct({
          minThroughput: Schema.optional(Schema.Number),
          maxThroughput: Schema.optional(Schema.Number),
          dedicatedRUs: Schema.optional(Schema.Number),
          maxConsumableRUs: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}/fleetspaces/{fleetspaceName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<FleetspaceCreateInput>;

// Output Schema
export interface FleetspaceCreateOutput {
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
export const FleetspaceCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FleetspaceCreateOutput>;

// The operation
/**
 * Creates an Azure Cosmos DB fleetspace under a fleet.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 * @param fleetspaceName - Cosmos DB fleetspace name. Needs to be unique under a fleet.
 */
export const FleetspaceCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetspaceCreateInput,
  outputSchema: FleetspaceCreateOutput,
}));
// Input Schema
export interface FleetspaceDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
  fleetspaceName: string;
}
export const FleetspaceDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  fleetspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}/fleetspaces/{fleetspaceName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<FleetspaceDeleteInput>;

// Output Schema
export type FleetspaceDeleteOutput = void;
export const FleetspaceDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FleetspaceDeleteOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Fleetspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 * @param fleetspaceName - Cosmos DB fleetspace name. Needs to be unique under a fleet.
 */
export const FleetspaceDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetspaceDeleteInput,
  outputSchema: FleetspaceDeleteOutput,
}));
// Input Schema
export interface FleetspaceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
  fleetspaceName: string;
}
export const FleetspaceGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  fleetspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}/fleetspaces/{fleetspaceName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<FleetspaceGetInput>;

// Output Schema
export interface FleetspaceGetOutput {
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
export const FleetspaceGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FleetspaceGetOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB fleetspace under a fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 * @param fleetspaceName - Cosmos DB fleetspace name. Needs to be unique under a fleet.
 */
export const FleetspaceGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetspaceGetInput,
  outputSchema: FleetspaceGetOutput,
}));
// Input Schema
export interface FleetspaceListInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
}
export const FleetspaceListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}/fleetspaces",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<FleetspaceListInput>;

// Output Schema
export interface FleetspaceListOutput {
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
export const FleetspaceListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FleetspaceListOutput>;

// The operation
/**
 * Lists all the fleetspaces under a fleet.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 */
export const FleetspaceList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetspaceListInput,
  outputSchema: FleetspaceListOutput,
}));
// Input Schema
export interface FleetspaceUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
  fleetspaceName: string;
  properties?: {
    provisioningState?:
      | "Uninitialized"
      | "Initializing"
      | "InternallyReady"
      | "Online"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Updating"
      | "Creating";
    fleetspaceApiKind?: "NoSQL";
    serviceTier?: "GeneralPurpose" | "BusinessCritical";
    dataRegions?: string[];
    throughputPoolConfiguration?: {
      minThroughput?: number;
      maxThroughput?: number;
      dedicatedRUs?: number;
      maxConsumableRUs?: number;
    };
  };
}
export const FleetspaceUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  fleetspaceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Uninitialized",
          "Initializing",
          "InternallyReady",
          "Online",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
          "Updating",
          "Creating",
        ]),
      ),
      fleetspaceApiKind: Schema.optional(Schema.Literals(["NoSQL"])),
      serviceTier: Schema.optional(
        Schema.Literals(["GeneralPurpose", "BusinessCritical"]),
      ),
      dataRegions: Schema.optional(Schema.Array(Schema.String)),
      throughputPoolConfiguration: Schema.optional(
        Schema.Struct({
          minThroughput: Schema.optional(Schema.Number),
          maxThroughput: Schema.optional(Schema.Number),
          dedicatedRUs: Schema.optional(Schema.Number),
          maxConsumableRUs: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}/fleetspaces/{fleetspaceName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<FleetspaceUpdateInput>;

// Output Schema
export interface FleetspaceUpdateOutput {
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
export const FleetspaceUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FleetspaceUpdateOutput>;

// The operation
/**
 * Update the properties of an existing Azure Cosmos DB fleetspace under a fleet.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 * @param fleetspaceName - Cosmos DB fleetspace name. Needs to be unique under a fleet.
 */
export const FleetspaceUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetspaceUpdateInput,
  outputSchema: FleetspaceUpdateOutput,
}));
// Input Schema
export interface FleetUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  fleetName: string;
  properties?: {
    provisioningState?:
      | "Uninitialized"
      | "Initializing"
      | "InternallyReady"
      | "Online"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Updating"
      | "Creating";
  };
}
export const FleetUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Uninitialized",
          "Initializing",
          "InternallyReady",
          "Online",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
          "Updating",
          "Creating",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/fleets/{fleetName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<FleetUpdateInput>;

// Output Schema
export interface FleetUpdateOutput {
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
export const FleetUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FleetUpdateOutput>;

// The operation
/**
 * Updates the properties of an existing Azure Cosmos DB Fleet.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - Cosmos DB fleet name. Needs to be unique under a subscription.
 */
export const FleetUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FleetUpdateInput,
  outputSchema: FleetUpdateOutput,
}));
// Input Schema
export interface GremlinResourcesCreateUpdateGremlinDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  properties: {
    resource: {
      id: string;
      restoreParameters?: {
        restoreSource?: string;
        restoreTimestampInUtc?: string;
        restoreWithTtlDisabled?: boolean;
      };
      createMode?: "Default" | "Restore";
    };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const GremlinResourcesCreateUpdateGremlinDatabaseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        restoreParameters: Schema.optional(
          Schema.Struct({
            restoreSource: Schema.optional(Schema.String),
            restoreTimestampInUtc: Schema.optional(Schema.String),
            restoreWithTtlDisabled: Schema.optional(Schema.Boolean),
          }),
        ),
        createMode: Schema.optional(Schema.Literals(["Default", "Restore"])),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesCreateUpdateGremlinDatabaseInput>;

// Output Schema
export interface GremlinResourcesCreateUpdateGremlinDatabaseOutput {
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
export const GremlinResourcesCreateUpdateGremlinDatabaseOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesCreateUpdateGremlinDatabaseOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB Gremlin database
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const GremlinResourcesCreateUpdateGremlinDatabase =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesCreateUpdateGremlinDatabaseInput,
    outputSchema: GremlinResourcesCreateUpdateGremlinDatabaseOutput,
  }));
// Input Schema
export interface GremlinResourcesCreateUpdateGremlinGraphInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  graphName: string;
  properties: {
    resource: {
      id: string;
      indexingPolicy?: {
        automatic?: boolean;
        indexingMode?: "consistent" | "lazy" | "none";
        includedPaths?: {
          path?: string;
          indexes?: {
            dataType?:
              | "String"
              | "Number"
              | "Point"
              | "Polygon"
              | "LineString"
              | "MultiPolygon";
            precision?: number;
            kind?: "Hash" | "Range" | "Spatial";
          }[];
        }[];
        excludedPaths?: { path?: string }[];
        compositeIndexes?: {
          path?: string;
          order?: "ascending" | "descending";
        }[][];
        spatialIndexes?: {
          path?: string;
          types?: ("Point" | "LineString" | "Polygon" | "MultiPolygon")[];
        }[];
        vectorIndexes?: {
          path: string;
          type: "flat" | "diskANN" | "quantizedFlat";
          quantizationByteSize?: number;
          indexingSearchListSize?: number;
          vectorIndexShardKey?: string[];
        }[];
        fullTextIndexes?: { path: string }[];
      };
      partitionKey?: {
        paths?: string[];
        kind?: "Hash" | "Range" | "MultiHash";
        version?: number;
        systemKey?: boolean;
      };
      defaultTtl?: number;
      uniqueKeyPolicy?: { uniqueKeys?: { paths?: string[] }[] };
      conflictResolutionPolicy?: {
        mode?: "LastWriterWins" | "Custom";
        conflictResolutionPath?: string;
        conflictResolutionProcedure?: string;
      };
      analyticalStorageTtl?: number;
      restoreParameters?: {
        restoreSource?: string;
        restoreTimestampInUtc?: string;
        restoreWithTtlDisabled?: boolean;
      };
      createMode?: "Default" | "Restore";
    };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const GremlinResourcesCreateUpdateGremlinGraphInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    graphName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        indexingPolicy: Schema.optional(
          Schema.Struct({
            automatic: Schema.optional(Schema.Boolean),
            indexingMode: Schema.optional(
              Schema.Literals(["consistent", "lazy", "none"]),
            ),
            includedPaths: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.optional(Schema.String),
                  indexes: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        dataType: Schema.optional(
                          Schema.Literals([
                            "String",
                            "Number",
                            "Point",
                            "Polygon",
                            "LineString",
                            "MultiPolygon",
                          ]),
                        ),
                        precision: Schema.optional(Schema.Number),
                        kind: Schema.optional(
                          Schema.Literals(["Hash", "Range", "Spatial"]),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            excludedPaths: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.optional(Schema.String),
                }),
              ),
            ),
            compositeIndexes: Schema.optional(
              Schema.Array(
                Schema.Array(
                  Schema.Struct({
                    path: Schema.optional(Schema.String),
                    order: Schema.optional(
                      Schema.Literals(["ascending", "descending"]),
                    ),
                  }),
                ),
              ),
            ),
            spatialIndexes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.optional(Schema.String),
                  types: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "Point",
                        "LineString",
                        "Polygon",
                        "MultiPolygon",
                      ]),
                    ),
                  ),
                }),
              ),
            ),
            vectorIndexes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.String,
                  type: Schema.Literals(["flat", "diskANN", "quantizedFlat"]),
                  quantizationByteSize: Schema.optional(Schema.Number),
                  indexingSearchListSize: Schema.optional(Schema.Number),
                  vectorIndexShardKey: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                }),
              ),
            ),
            fullTextIndexes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.String,
                }),
              ),
            ),
          }),
        ),
        partitionKey: Schema.optional(
          Schema.Struct({
            paths: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.optional(
              Schema.Literals(["Hash", "Range", "MultiHash"]),
            ),
            version: Schema.optional(Schema.Number),
            systemKey: Schema.optional(Schema.Boolean),
          }),
        ),
        defaultTtl: Schema.optional(Schema.Number),
        uniqueKeyPolicy: Schema.optional(
          Schema.Struct({
            uniqueKeys: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  paths: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
          }),
        ),
        conflictResolutionPolicy: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(
              Schema.Literals(["LastWriterWins", "Custom"]),
            ),
            conflictResolutionPath: Schema.optional(Schema.String),
            conflictResolutionProcedure: Schema.optional(Schema.String),
          }),
        ),
        analyticalStorageTtl: Schema.optional(Schema.Number),
        restoreParameters: Schema.optional(
          Schema.Struct({
            restoreSource: Schema.optional(Schema.String),
            restoreTimestampInUtc: Schema.optional(Schema.String),
            restoreWithTtlDisabled: Schema.optional(Schema.Boolean),
          }),
        ),
        createMode: Schema.optional(Schema.Literals(["Default", "Restore"])),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesCreateUpdateGremlinGraphInput>;

// Output Schema
export interface GremlinResourcesCreateUpdateGremlinGraphOutput {
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
export const GremlinResourcesCreateUpdateGremlinGraphOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesCreateUpdateGremlinGraphOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB Gremlin graph
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param graphName - Cosmos DB graph name.
 */
export const GremlinResourcesCreateUpdateGremlinGraph =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesCreateUpdateGremlinGraphInput,
    outputSchema: GremlinResourcesCreateUpdateGremlinGraphOutput,
  }));
// Input Schema
export interface GremlinResourcesCreateUpdateGremlinRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
  properties?: {
    roleDefinitionId?: string;
    scope?: string;
    principalId?: string;
    provisioningState?: string;
  };
}
export const GremlinResourcesCreateUpdateGremlinRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        roleDefinitionId: Schema.optional(Schema.String),
        scope: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesCreateUpdateGremlinRoleAssignmentInput>;

// Output Schema
export interface GremlinResourcesCreateUpdateGremlinRoleAssignmentOutput {
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
export const GremlinResourcesCreateUpdateGremlinRoleAssignmentOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesCreateUpdateGremlinRoleAssignmentOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB Gremlin Role Assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const GremlinResourcesCreateUpdateGremlinRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesCreateUpdateGremlinRoleAssignmentInput,
    outputSchema: GremlinResourcesCreateUpdateGremlinRoleAssignmentOutput,
  }));
// Input Schema
export interface GremlinResourcesCreateUpdateGremlinRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
  properties?: {
    id?: string;
    roleName?: string;
    type?: "BuiltInRole" | "CustomRole";
    assignableScopes?: string[];
    permissions?: {
      id?: string;
      dataActions?: string[];
      notDataActions?: string[];
    }[];
  };
}
export const GremlinResourcesCreateUpdateGremlinRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        roleName: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["BuiltInRole", "CustomRole"])),
        assignableScopes: Schema.optional(Schema.Array(Schema.String)),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesCreateUpdateGremlinRoleDefinitionInput>;

// Output Schema
export interface GremlinResourcesCreateUpdateGremlinRoleDefinitionOutput {
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
export const GremlinResourcesCreateUpdateGremlinRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesCreateUpdateGremlinRoleDefinitionOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB Gremlin Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const GremlinResourcesCreateUpdateGremlinRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesCreateUpdateGremlinRoleDefinitionInput,
    outputSchema: GremlinResourcesCreateUpdateGremlinRoleDefinitionOutput,
  }));
// Input Schema
export interface GremlinResourcesDeleteGremlinDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const GremlinResourcesDeleteGremlinDatabaseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesDeleteGremlinDatabaseInput>;

// Output Schema
export type GremlinResourcesDeleteGremlinDatabaseOutput = void;
export const GremlinResourcesDeleteGremlinDatabaseOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GremlinResourcesDeleteGremlinDatabaseOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Gremlin database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const GremlinResourcesDeleteGremlinDatabase =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesDeleteGremlinDatabaseInput,
    outputSchema: GremlinResourcesDeleteGremlinDatabaseOutput,
  }));
// Input Schema
export interface GremlinResourcesDeleteGremlinGraphInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  graphName: string;
}
export const GremlinResourcesDeleteGremlinGraphInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    graphName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesDeleteGremlinGraphInput>;

// Output Schema
export type GremlinResourcesDeleteGremlinGraphOutput = void;
export const GremlinResourcesDeleteGremlinGraphOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GremlinResourcesDeleteGremlinGraphOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Gremlin graph.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param graphName - Cosmos DB graph name.
 */
export const GremlinResourcesDeleteGremlinGraph =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesDeleteGremlinGraphInput,
    outputSchema: GremlinResourcesDeleteGremlinGraphOutput,
  }));
// Input Schema
export interface GremlinResourcesDeleteGremlinRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
}
export const GremlinResourcesDeleteGremlinRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesDeleteGremlinRoleAssignmentInput>;

// Output Schema
export type GremlinResourcesDeleteGremlinRoleAssignmentOutput = void;
export const GremlinResourcesDeleteGremlinRoleAssignmentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GremlinResourcesDeleteGremlinRoleAssignmentOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Gremlin Role Assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const GremlinResourcesDeleteGremlinRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesDeleteGremlinRoleAssignmentInput,
    outputSchema: GremlinResourcesDeleteGremlinRoleAssignmentOutput,
  }));
// Input Schema
export interface GremlinResourcesDeleteGremlinRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
}
export const GremlinResourcesDeleteGremlinRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesDeleteGremlinRoleDefinitionInput>;

// Output Schema
export type GremlinResourcesDeleteGremlinRoleDefinitionOutput = void;
export const GremlinResourcesDeleteGremlinRoleDefinitionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GremlinResourcesDeleteGremlinRoleDefinitionOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Gremlin Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const GremlinResourcesDeleteGremlinRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesDeleteGremlinRoleDefinitionInput,
    outputSchema: GremlinResourcesDeleteGremlinRoleDefinitionOutput,
  }));
// Input Schema
export interface GremlinResourcesGetGremlinDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const GremlinResourcesGetGremlinDatabaseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesGetGremlinDatabaseInput>;

// Output Schema
export interface GremlinResourcesGetGremlinDatabaseOutput {
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
export const GremlinResourcesGetGremlinDatabaseOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesGetGremlinDatabaseOutput>;

// The operation
/**
 * Gets the Gremlin databases under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const GremlinResourcesGetGremlinDatabase =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesGetGremlinDatabaseInput,
    outputSchema: GremlinResourcesGetGremlinDatabaseOutput,
  }));
// Input Schema
export interface GremlinResourcesGetGremlinDatabaseThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const GremlinResourcesGetGremlinDatabaseThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesGetGremlinDatabaseThroughputInput>;

// Output Schema
export interface GremlinResourcesGetGremlinDatabaseThroughputOutput {
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
export const GremlinResourcesGetGremlinDatabaseThroughputOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesGetGremlinDatabaseThroughputOutput>;

// The operation
/**
 * Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const GremlinResourcesGetGremlinDatabaseThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesGetGremlinDatabaseThroughputInput,
    outputSchema: GremlinResourcesGetGremlinDatabaseThroughputOutput,
  }));
// Input Schema
export interface GremlinResourcesGetGremlinGraphInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  graphName: string;
}
export const GremlinResourcesGetGremlinGraphInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    graphName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesGetGremlinGraphInput>;

// Output Schema
export interface GremlinResourcesGetGremlinGraphOutput {
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
export const GremlinResourcesGetGremlinGraphOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesGetGremlinGraphOutput>;

// The operation
/**
 * Gets the Gremlin graph under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param graphName - Cosmos DB graph name.
 */
export const GremlinResourcesGetGremlinGraph =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesGetGremlinGraphInput,
    outputSchema: GremlinResourcesGetGremlinGraphOutput,
  }));
// Input Schema
export interface GremlinResourcesGetGremlinGraphThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  graphName: string;
}
export const GremlinResourcesGetGremlinGraphThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    graphName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesGetGremlinGraphThroughputInput>;

// Output Schema
export interface GremlinResourcesGetGremlinGraphThroughputOutput {
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
export const GremlinResourcesGetGremlinGraphThroughputOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesGetGremlinGraphThroughputOutput>;

// The operation
/**
 * Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param graphName - Cosmos DB graph name.
 */
export const GremlinResourcesGetGremlinGraphThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesGetGremlinGraphThroughputInput,
    outputSchema: GremlinResourcesGetGremlinGraphThroughputOutput,
  }));
// Input Schema
export interface GremlinResourcesGetGremlinRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
}
export const GremlinResourcesGetGremlinRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesGetGremlinRoleAssignmentInput>;

// Output Schema
export interface GremlinResourcesGetGremlinRoleAssignmentOutput {
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
export const GremlinResourcesGetGremlinRoleAssignmentOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesGetGremlinRoleAssignmentOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB Gremlin Role Assignment with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const GremlinResourcesGetGremlinRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesGetGremlinRoleAssignmentInput,
    outputSchema: GremlinResourcesGetGremlinRoleAssignmentOutput,
  }));
// Input Schema
export interface GremlinResourcesGetGremlinRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
}
export const GremlinResourcesGetGremlinRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesGetGremlinRoleDefinitionInput>;

// Output Schema
export interface GremlinResourcesGetGremlinRoleDefinitionOutput {
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
export const GremlinResourcesGetGremlinRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesGetGremlinRoleDefinitionOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB Gremlin Role Definition with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const GremlinResourcesGetGremlinRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesGetGremlinRoleDefinitionInput,
    outputSchema: GremlinResourcesGetGremlinRoleDefinitionOutput,
  }));
// Input Schema
export interface GremlinResourcesListGremlinDatabasesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const GremlinResourcesListGremlinDatabasesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesListGremlinDatabasesInput>;

// Output Schema
export interface GremlinResourcesListGremlinDatabasesOutput {
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
export const GremlinResourcesListGremlinDatabasesOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesListGremlinDatabasesOutput>;

// The operation
/**
 * Lists the Gremlin databases under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const GremlinResourcesListGremlinDatabases =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesListGremlinDatabasesInput,
    outputSchema: GremlinResourcesListGremlinDatabasesOutput,
  }));
// Input Schema
export interface GremlinResourcesListGremlinGraphsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const GremlinResourcesListGremlinGraphsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesListGremlinGraphsInput>;

// Output Schema
export interface GremlinResourcesListGremlinGraphsOutput {
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
export const GremlinResourcesListGremlinGraphsOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesListGremlinGraphsOutput>;

// The operation
/**
 * Lists the Gremlin graph under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const GremlinResourcesListGremlinGraphs =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesListGremlinGraphsInput,
    outputSchema: GremlinResourcesListGremlinGraphsOutput,
  }));
// Input Schema
export interface GremlinResourcesListGremlinRoleAssignmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const GremlinResourcesListGremlinRoleAssignmentsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinRoleAssignments",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesListGremlinRoleAssignmentsInput>;

// Output Schema
export interface GremlinResourcesListGremlinRoleAssignmentsOutput {
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
export const GremlinResourcesListGremlinRoleAssignmentsOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesListGremlinRoleAssignmentsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB Gremlin Role Assignments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const GremlinResourcesListGremlinRoleAssignments =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesListGremlinRoleAssignmentsInput,
    outputSchema: GremlinResourcesListGremlinRoleAssignmentsOutput,
  }));
// Input Schema
export interface GremlinResourcesListGremlinRoleDefinitionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const GremlinResourcesListGremlinRoleDefinitionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinRoleDefinitions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesListGremlinRoleDefinitionsInput>;

// Output Schema
export interface GremlinResourcesListGremlinRoleDefinitionsOutput {
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
export const GremlinResourcesListGremlinRoleDefinitionsOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesListGremlinRoleDefinitionsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB Gremlin Role Definitions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const GremlinResourcesListGremlinRoleDefinitions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesListGremlinRoleDefinitionsInput,
    outputSchema: GremlinResourcesListGremlinRoleDefinitionsOutput,
  }));
// Input Schema
export interface GremlinResourcesMigrateGremlinDatabaseToAutoscaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const GremlinResourcesMigrateGremlinDatabaseToAutoscaleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/throughputSettings/default/migrateToAutoscale",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesMigrateGremlinDatabaseToAutoscaleInput>;

// Output Schema
export interface GremlinResourcesMigrateGremlinDatabaseToAutoscaleOutput {
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
export const GremlinResourcesMigrateGremlinDatabaseToAutoscaleOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesMigrateGremlinDatabaseToAutoscaleOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB Gremlin database from manual throughput to autoscale
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const GremlinResourcesMigrateGremlinDatabaseToAutoscale =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesMigrateGremlinDatabaseToAutoscaleInput,
    outputSchema: GremlinResourcesMigrateGremlinDatabaseToAutoscaleOutput,
  }));
// Input Schema
export interface GremlinResourcesMigrateGremlinDatabaseToManualThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const GremlinResourcesMigrateGremlinDatabaseToManualThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/throughputSettings/default/migrateToManualThroughput",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesMigrateGremlinDatabaseToManualThroughputInput>;

// Output Schema
export interface GremlinResourcesMigrateGremlinDatabaseToManualThroughputOutput {
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
export const GremlinResourcesMigrateGremlinDatabaseToManualThroughputOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesMigrateGremlinDatabaseToManualThroughputOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB Gremlin database from autoscale to manual throughput
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const GremlinResourcesMigrateGremlinDatabaseToManualThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesMigrateGremlinDatabaseToManualThroughputInput,
    outputSchema:
      GremlinResourcesMigrateGremlinDatabaseToManualThroughputOutput,
  }));
// Input Schema
export interface GremlinResourcesMigrateGremlinGraphToAutoscaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  graphName: string;
}
export const GremlinResourcesMigrateGremlinGraphToAutoscaleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    graphName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}/throughputSettings/default/migrateToAutoscale",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesMigrateGremlinGraphToAutoscaleInput>;

// Output Schema
export interface GremlinResourcesMigrateGremlinGraphToAutoscaleOutput {
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
export const GremlinResourcesMigrateGremlinGraphToAutoscaleOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesMigrateGremlinGraphToAutoscaleOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB Gremlin graph from manual throughput to autoscale
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param graphName - Cosmos DB graph name.
 */
export const GremlinResourcesMigrateGremlinGraphToAutoscale =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesMigrateGremlinGraphToAutoscaleInput,
    outputSchema: GremlinResourcesMigrateGremlinGraphToAutoscaleOutput,
  }));
// Input Schema
export interface GremlinResourcesMigrateGremlinGraphToManualThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  graphName: string;
}
export const GremlinResourcesMigrateGremlinGraphToManualThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    graphName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}/throughputSettings/default/migrateToManualThroughput",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesMigrateGremlinGraphToManualThroughputInput>;

// Output Schema
export interface GremlinResourcesMigrateGremlinGraphToManualThroughputOutput {
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
export const GremlinResourcesMigrateGremlinGraphToManualThroughputOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesMigrateGremlinGraphToManualThroughputOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB Gremlin graph from autoscale to manual throughput
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param graphName - Cosmos DB graph name.
 */
export const GremlinResourcesMigrateGremlinGraphToManualThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesMigrateGremlinGraphToManualThroughputInput,
    outputSchema: GremlinResourcesMigrateGremlinGraphToManualThroughputOutput,
  }));
// Input Schema
export interface GremlinResourcesRetrieveContinuousBackupInformationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  graphName: string;
  location?: string;
}
export const GremlinResourcesRetrieveContinuousBackupInformationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    graphName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}/retrieveContinuousBackupInformation",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesRetrieveContinuousBackupInformationInput>;

// Output Schema
export interface GremlinResourcesRetrieveContinuousBackupInformationOutput {
  continuousBackupInformation?: { latestRestorableTimestamp?: string };
}
export const GremlinResourcesRetrieveContinuousBackupInformationOutput =
  /*@__PURE__*/ Schema.Struct({
    continuousBackupInformation: Schema.optional(
      Schema.Struct({
        latestRestorableTimestamp: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GremlinResourcesRetrieveContinuousBackupInformationOutput>;

// The operation
/**
 * Retrieves continuous backup information for a gremlin graph.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param graphName - Cosmos DB graph name.
 */
export const GremlinResourcesRetrieveContinuousBackupInformation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesRetrieveContinuousBackupInformationInput,
    outputSchema: GremlinResourcesRetrieveContinuousBackupInformationOutput,
  }));
// Input Schema
export interface GremlinResourcesUpdateGremlinDatabaseThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  properties: {
    resource: {
      throughput?: number;
      autoscaleSettings?: {
        maxThroughput: number;
        autoUpgradePolicy?: {
          throughputPolicy?: { isEnabled?: boolean; incrementPercent?: number };
        };
        targetMaxThroughput?: number;
      };
      minimumThroughput?: string;
      offerReplacePending?: string;
      instantMaximumThroughput?: string;
      softAllowedMaximumThroughput?: string;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const GremlinResourcesUpdateGremlinDatabaseThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        throughput: Schema.optional(Schema.Number),
        autoscaleSettings: Schema.optional(
          Schema.Struct({
            maxThroughput: Schema.Number,
            autoUpgradePolicy: Schema.optional(
              Schema.Struct({
                throughputPolicy: Schema.optional(
                  Schema.Struct({
                    isEnabled: Schema.optional(Schema.Boolean),
                    incrementPercent: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            targetMaxThroughput: Schema.optional(Schema.Number),
          }),
        ),
        minimumThroughput: Schema.optional(Schema.String),
        offerReplacePending: Schema.optional(Schema.String),
        instantMaximumThroughput: Schema.optional(Schema.String),
        softAllowedMaximumThroughput: Schema.optional(Schema.String),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesUpdateGremlinDatabaseThroughputInput>;

// Output Schema
export interface GremlinResourcesUpdateGremlinDatabaseThroughputOutput {
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
export const GremlinResourcesUpdateGremlinDatabaseThroughputOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesUpdateGremlinDatabaseThroughputOutput>;

// The operation
/**
 * Update RUs per second of an Azure Cosmos DB Gremlin database
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const GremlinResourcesUpdateGremlinDatabaseThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesUpdateGremlinDatabaseThroughputInput,
    outputSchema: GremlinResourcesUpdateGremlinDatabaseThroughputOutput,
  }));
// Input Schema
export interface GremlinResourcesUpdateGremlinGraphThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  graphName: string;
  properties: {
    resource: {
      throughput?: number;
      autoscaleSettings?: {
        maxThroughput: number;
        autoUpgradePolicy?: {
          throughputPolicy?: { isEnabled?: boolean; incrementPercent?: number };
        };
        targetMaxThroughput?: number;
      };
      minimumThroughput?: string;
      offerReplacePending?: string;
      instantMaximumThroughput?: string;
      softAllowedMaximumThroughput?: string;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const GremlinResourcesUpdateGremlinGraphThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    graphName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        throughput: Schema.optional(Schema.Number),
        autoscaleSettings: Schema.optional(
          Schema.Struct({
            maxThroughput: Schema.Number,
            autoUpgradePolicy: Schema.optional(
              Schema.Struct({
                throughputPolicy: Schema.optional(
                  Schema.Struct({
                    isEnabled: Schema.optional(Schema.Boolean),
                    incrementPercent: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            targetMaxThroughput: Schema.optional(Schema.Number),
          }),
        ),
        minimumThroughput: Schema.optional(Schema.String),
        offerReplacePending: Schema.optional(Schema.String),
        instantMaximumThroughput: Schema.optional(Schema.String),
        softAllowedMaximumThroughput: Schema.optional(Schema.String),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<GremlinResourcesUpdateGremlinGraphThroughputInput>;

// Output Schema
export interface GremlinResourcesUpdateGremlinGraphThroughputOutput {
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
export const GremlinResourcesUpdateGremlinGraphThroughputOutput =
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
  }) as unknown as Schema.Codec<GremlinResourcesUpdateGremlinGraphThroughputOutput>;

// The operation
/**
 * Update RUs per second of an Azure Cosmos DB Gremlin graph
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param graphName - Cosmos DB graph name.
 */
export const GremlinResourcesUpdateGremlinGraphThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GremlinResourcesUpdateGremlinGraphThroughputInput,
    outputSchema: GremlinResourcesUpdateGremlinGraphThroughputOutput,
  }));
// Input Schema
export interface LocationsGetInput {
  subscriptionId: string;
  location: string;
}
export const LocationsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<LocationsGetInput>;

// Output Schema
export interface LocationsGetOutput {
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
export const LocationsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<LocationsGetOutput>;

// The operation
/**
 * Get the properties of an existing Cosmos DB location
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 */
export const LocationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocationsGetInput,
  outputSchema: LocationsGetOutput,
}));
// Input Schema
export interface LocationsListInput {
  subscriptionId: string;
}
export const LocationsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<LocationsListInput>;

// Output Schema
export interface LocationsListOutput {
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
export const LocationsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<LocationsListOutput>;

// The operation
/**
 * List Cosmos DB locations and their properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const LocationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocationsListInput,
  outputSchema: LocationsListOutput,
}));
// Input Schema
export interface MongoDBResourcesCreateUpdateMongoDBCollectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  collectionName: string;
  properties: {
    resource: {
      id: string;
      shardKey?: Record<string, string>;
      indexes?: {
        key?: { keys?: string[] };
        options?: { expireAfterSeconds?: number; unique?: boolean };
      }[];
      analyticalStorageTtl?: number;
      restoreParameters?: {
        restoreSource?: string;
        restoreTimestampInUtc?: string;
        restoreWithTtlDisabled?: boolean;
      };
      createMode?: "Default" | "Restore";
    };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const MongoDBResourcesCreateUpdateMongoDBCollectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    collectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        shardKey: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        indexes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.optional(
                Schema.Struct({
                  keys: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
              options: Schema.optional(
                Schema.Struct({
                  expireAfterSeconds: Schema.optional(Schema.Number),
                  unique: Schema.optional(Schema.Boolean),
                }),
              ),
            }),
          ),
        ),
        analyticalStorageTtl: Schema.optional(Schema.Number),
        restoreParameters: Schema.optional(
          Schema.Struct({
            restoreSource: Schema.optional(Schema.String),
            restoreTimestampInUtc: Schema.optional(Schema.String),
            restoreWithTtlDisabled: Schema.optional(Schema.Boolean),
          }),
        ),
        createMode: Schema.optional(Schema.Literals(["Default", "Restore"])),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesCreateUpdateMongoDBCollectionInput>;

// Output Schema
export interface MongoDBResourcesCreateUpdateMongoDBCollectionOutput {
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
export const MongoDBResourcesCreateUpdateMongoDBCollectionOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesCreateUpdateMongoDBCollectionOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB MongoDB Collection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param collectionName - Cosmos DB collection name.
 */
export const MongoDBResourcesCreateUpdateMongoDBCollection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesCreateUpdateMongoDBCollectionInput,
    outputSchema: MongoDBResourcesCreateUpdateMongoDBCollectionOutput,
  }));
// Input Schema
export interface MongoDBResourcesCreateUpdateMongoDBDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  properties: {
    resource: {
      id: string;
      restoreParameters?: {
        restoreSource?: string;
        restoreTimestampInUtc?: string;
        restoreWithTtlDisabled?: boolean;
      };
      createMode?: "Default" | "Restore";
    };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const MongoDBResourcesCreateUpdateMongoDBDatabaseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        restoreParameters: Schema.optional(
          Schema.Struct({
            restoreSource: Schema.optional(Schema.String),
            restoreTimestampInUtc: Schema.optional(Schema.String),
            restoreWithTtlDisabled: Schema.optional(Schema.Boolean),
          }),
        ),
        createMode: Schema.optional(Schema.Literals(["Default", "Restore"])),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesCreateUpdateMongoDBDatabaseInput>;

// Output Schema
export interface MongoDBResourcesCreateUpdateMongoDBDatabaseOutput {
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
export const MongoDBResourcesCreateUpdateMongoDBDatabaseOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesCreateUpdateMongoDBDatabaseOutput>;

// The operation
/**
 * Create or updates Azure Cosmos DB MongoDB database
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const MongoDBResourcesCreateUpdateMongoDBDatabase =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesCreateUpdateMongoDBDatabaseInput,
    outputSchema: MongoDBResourcesCreateUpdateMongoDBDatabaseOutput,
  }));
// Input Schema
export interface MongoDBResourcesCreateUpdateMongoRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  mongoRoleDefinitionId: string;
  properties?: {
    roleName?: string;
    type?: "BuiltInRole" | "CustomRole";
    databaseName?: string;
    privileges?: {
      resource?: { db?: string; collection?: string };
      actions?: string[];
    }[];
    roles?: { db?: string; role?: string }[];
  };
}
export const MongoDBResourcesCreateUpdateMongoRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    mongoRoleDefinitionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        roleName: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["BuiltInRole", "CustomRole"])),
        databaseName: Schema.optional(Schema.String),
        privileges: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resource: Schema.optional(
                Schema.Struct({
                  db: Schema.optional(Schema.String),
                  collection: Schema.optional(Schema.String),
                }),
              ),
              actions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        roles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              db: Schema.optional(Schema.String),
              role: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbRoleDefinitions/{mongoRoleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesCreateUpdateMongoRoleDefinitionInput>;

// Output Schema
export interface MongoDBResourcesCreateUpdateMongoRoleDefinitionOutput {
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
export const MongoDBResourcesCreateUpdateMongoRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesCreateUpdateMongoRoleDefinitionOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB Mongo Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param mongoRoleDefinitionId - The ID for the Role Definition {dbName.roleName}.
 */
export const MongoDBResourcesCreateUpdateMongoRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesCreateUpdateMongoRoleDefinitionInput,
    outputSchema: MongoDBResourcesCreateUpdateMongoRoleDefinitionOutput,
  }));
// Input Schema
export interface MongoDBResourcesCreateUpdateMongoUserDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  mongoUserDefinitionId: string;
  properties?: {
    userName?: string;
    password?: string | Redacted.Redacted<string>;
    databaseName?: string;
    customData?: string;
    roles?: { db?: string; role?: string }[];
    mechanisms?: string;
  };
}
export const MongoDBResourcesCreateUpdateMongoUserDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    mongoUserDefinitionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        userName: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveString),
        databaseName: Schema.optional(Schema.String),
        customData: Schema.optional(Schema.String),
        roles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              db: Schema.optional(Schema.String),
              role: Schema.optional(Schema.String),
            }),
          ),
        ),
        mechanisms: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbUserDefinitions/{mongoUserDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesCreateUpdateMongoUserDefinitionInput>;

// Output Schema
export interface MongoDBResourcesCreateUpdateMongoUserDefinitionOutput {
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
export const MongoDBResourcesCreateUpdateMongoUserDefinitionOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesCreateUpdateMongoUserDefinitionOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB Mongo User Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param mongoUserDefinitionId - The ID for the User Definition {dbName.userName}.
 */
export const MongoDBResourcesCreateUpdateMongoUserDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesCreateUpdateMongoUserDefinitionInput,
    outputSchema: MongoDBResourcesCreateUpdateMongoUserDefinitionOutput,
  }));
// Input Schema
export interface MongoDBResourcesDeleteMongoDBCollectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  collectionName: string;
}
export const MongoDBResourcesDeleteMongoDBCollectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    collectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesDeleteMongoDBCollectionInput>;

// Output Schema
export type MongoDBResourcesDeleteMongoDBCollectionOutput = void;
export const MongoDBResourcesDeleteMongoDBCollectionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MongoDBResourcesDeleteMongoDBCollectionOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB MongoDB Collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param collectionName - Cosmos DB collection name.
 */
export const MongoDBResourcesDeleteMongoDBCollection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesDeleteMongoDBCollectionInput,
    outputSchema: MongoDBResourcesDeleteMongoDBCollectionOutput,
  }));
// Input Schema
export interface MongoDBResourcesDeleteMongoDBDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const MongoDBResourcesDeleteMongoDBDatabaseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesDeleteMongoDBDatabaseInput>;

// Output Schema
export type MongoDBResourcesDeleteMongoDBDatabaseOutput = void;
export const MongoDBResourcesDeleteMongoDBDatabaseOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MongoDBResourcesDeleteMongoDBDatabaseOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB MongoDB database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const MongoDBResourcesDeleteMongoDBDatabase =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesDeleteMongoDBDatabaseInput,
    outputSchema: MongoDBResourcesDeleteMongoDBDatabaseOutput,
  }));
// Input Schema
export interface MongoDBResourcesDeleteMongoRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  mongoRoleDefinitionId: string;
}
export const MongoDBResourcesDeleteMongoRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    mongoRoleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbRoleDefinitions/{mongoRoleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesDeleteMongoRoleDefinitionInput>;

// Output Schema
export type MongoDBResourcesDeleteMongoRoleDefinitionOutput = void;
export const MongoDBResourcesDeleteMongoRoleDefinitionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MongoDBResourcesDeleteMongoRoleDefinitionOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Mongo Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param mongoRoleDefinitionId - The ID for the Role Definition {dbName.roleName}.
 */
export const MongoDBResourcesDeleteMongoRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesDeleteMongoRoleDefinitionInput,
    outputSchema: MongoDBResourcesDeleteMongoRoleDefinitionOutput,
  }));
// Input Schema
export interface MongoDBResourcesDeleteMongoUserDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  mongoUserDefinitionId: string;
}
export const MongoDBResourcesDeleteMongoUserDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    mongoUserDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbUserDefinitions/{mongoUserDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesDeleteMongoUserDefinitionInput>;

// Output Schema
export type MongoDBResourcesDeleteMongoUserDefinitionOutput = void;
export const MongoDBResourcesDeleteMongoUserDefinitionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MongoDBResourcesDeleteMongoUserDefinitionOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Mongo User Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param mongoUserDefinitionId - The ID for the User Definition {dbName.userName}.
 */
export const MongoDBResourcesDeleteMongoUserDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesDeleteMongoUserDefinitionInput,
    outputSchema: MongoDBResourcesDeleteMongoUserDefinitionOutput,
  }));
// Input Schema
export interface MongoDBResourcesGetMongoDBCollectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  collectionName: string;
}
export const MongoDBResourcesGetMongoDBCollectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    collectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesGetMongoDBCollectionInput>;

// Output Schema
export interface MongoDBResourcesGetMongoDBCollectionOutput {
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
export const MongoDBResourcesGetMongoDBCollectionOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesGetMongoDBCollectionOutput>;

// The operation
/**
 * Gets the MongoDB collection under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param collectionName - Cosmos DB collection name.
 */
export const MongoDBResourcesGetMongoDBCollection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesGetMongoDBCollectionInput,
    outputSchema: MongoDBResourcesGetMongoDBCollectionOutput,
  }));
// Input Schema
export interface MongoDBResourcesGetMongoDBCollectionThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  collectionName: string;
}
export const MongoDBResourcesGetMongoDBCollectionThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    collectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesGetMongoDBCollectionThroughputInput>;

// Output Schema
export interface MongoDBResourcesGetMongoDBCollectionThroughputOutput {
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
export const MongoDBResourcesGetMongoDBCollectionThroughputOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesGetMongoDBCollectionThroughputOutput>;

// The operation
/**
 * Gets the RUs per second of the MongoDB collection under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param collectionName - Cosmos DB collection name.
 */
export const MongoDBResourcesGetMongoDBCollectionThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesGetMongoDBCollectionThroughputInput,
    outputSchema: MongoDBResourcesGetMongoDBCollectionThroughputOutput,
  }));
// Input Schema
export interface MongoDBResourcesGetMongoDBDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const MongoDBResourcesGetMongoDBDatabaseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesGetMongoDBDatabaseInput>;

// Output Schema
export interface MongoDBResourcesGetMongoDBDatabaseOutput {
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
export const MongoDBResourcesGetMongoDBDatabaseOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesGetMongoDBDatabaseOutput>;

// The operation
/**
 * Gets the MongoDB databases under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const MongoDBResourcesGetMongoDBDatabase =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesGetMongoDBDatabaseInput,
    outputSchema: MongoDBResourcesGetMongoDBDatabaseOutput,
  }));
// Input Schema
export interface MongoDBResourcesGetMongoDBDatabaseThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const MongoDBResourcesGetMongoDBDatabaseThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesGetMongoDBDatabaseThroughputInput>;

// Output Schema
export interface MongoDBResourcesGetMongoDBDatabaseThroughputOutput {
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
export const MongoDBResourcesGetMongoDBDatabaseThroughputOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesGetMongoDBDatabaseThroughputOutput>;

// The operation
/**
 * Gets the RUs per second of the MongoDB database under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const MongoDBResourcesGetMongoDBDatabaseThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesGetMongoDBDatabaseThroughputInput,
    outputSchema: MongoDBResourcesGetMongoDBDatabaseThroughputOutput,
  }));
// Input Schema
export interface MongoDBResourcesGetMongoRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  mongoRoleDefinitionId: string;
}
export const MongoDBResourcesGetMongoRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    mongoRoleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbRoleDefinitions/{mongoRoleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesGetMongoRoleDefinitionInput>;

// Output Schema
export interface MongoDBResourcesGetMongoRoleDefinitionOutput {
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
export const MongoDBResourcesGetMongoRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesGetMongoRoleDefinitionOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB Mongo Role Definition with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param mongoRoleDefinitionId - The ID for the Role Definition {dbName.roleName}.
 */
export const MongoDBResourcesGetMongoRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesGetMongoRoleDefinitionInput,
    outputSchema: MongoDBResourcesGetMongoRoleDefinitionOutput,
  }));
// Input Schema
export interface MongoDBResourcesGetMongoUserDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  mongoUserDefinitionId: string;
}
export const MongoDBResourcesGetMongoUserDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    mongoUserDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbUserDefinitions/{mongoUserDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesGetMongoUserDefinitionInput>;

// Output Schema
export interface MongoDBResourcesGetMongoUserDefinitionOutput {
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
export const MongoDBResourcesGetMongoUserDefinitionOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesGetMongoUserDefinitionOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB Mongo User Definition with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param mongoUserDefinitionId - The ID for the User Definition {dbName.userName}.
 */
export const MongoDBResourcesGetMongoUserDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesGetMongoUserDefinitionInput,
    outputSchema: MongoDBResourcesGetMongoUserDefinitionOutput,
  }));
// Input Schema
export interface MongoDBResourcesListMongoDBCollectionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const MongoDBResourcesListMongoDBCollectionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesListMongoDBCollectionsInput>;

// Output Schema
export interface MongoDBResourcesListMongoDBCollectionsOutput {
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
export const MongoDBResourcesListMongoDBCollectionsOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesListMongoDBCollectionsOutput>;

// The operation
/**
 * Lists the MongoDB collection under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const MongoDBResourcesListMongoDBCollections =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesListMongoDBCollectionsInput,
    outputSchema: MongoDBResourcesListMongoDBCollectionsOutput,
  }));
// Input Schema
export interface MongoDBResourcesListMongoDBDatabasesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const MongoDBResourcesListMongoDBDatabasesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesListMongoDBDatabasesInput>;

// Output Schema
export interface MongoDBResourcesListMongoDBDatabasesOutput {
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
export const MongoDBResourcesListMongoDBDatabasesOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesListMongoDBDatabasesOutput>;

// The operation
/**
 * Lists the MongoDB databases under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const MongoDBResourcesListMongoDBDatabases =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesListMongoDBDatabasesInput,
    outputSchema: MongoDBResourcesListMongoDBDatabasesOutput,
  }));
// Input Schema
export interface MongoDBResourcesListMongoRoleDefinitionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const MongoDBResourcesListMongoRoleDefinitionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbRoleDefinitions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesListMongoRoleDefinitionsInput>;

// Output Schema
export interface MongoDBResourcesListMongoRoleDefinitionsOutput {
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
export const MongoDBResourcesListMongoRoleDefinitionsOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesListMongoRoleDefinitionsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB Mongo Role Definitions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const MongoDBResourcesListMongoRoleDefinitions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesListMongoRoleDefinitionsInput,
    outputSchema: MongoDBResourcesListMongoRoleDefinitionsOutput,
  }));
// Input Schema
export interface MongoDBResourcesListMongoUserDefinitionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const MongoDBResourcesListMongoUserDefinitionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbUserDefinitions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesListMongoUserDefinitionsInput>;

// Output Schema
export interface MongoDBResourcesListMongoUserDefinitionsOutput {
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
export const MongoDBResourcesListMongoUserDefinitionsOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesListMongoUserDefinitionsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB Mongo User Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const MongoDBResourcesListMongoUserDefinitions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesListMongoUserDefinitionsInput,
    outputSchema: MongoDBResourcesListMongoUserDefinitionsOutput,
  }));
// Input Schema
export interface MongoDBResourcesMigrateMongoDBCollectionToAutoscaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  collectionName: string;
}
export const MongoDBResourcesMigrateMongoDBCollectionToAutoscaleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    collectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}/throughputSettings/default/migrateToAutoscale",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesMigrateMongoDBCollectionToAutoscaleInput>;

// Output Schema
export interface MongoDBResourcesMigrateMongoDBCollectionToAutoscaleOutput {
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
export const MongoDBResourcesMigrateMongoDBCollectionToAutoscaleOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesMigrateMongoDBCollectionToAutoscaleOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB MongoDB collection from manual throughput to autoscale
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param collectionName - Cosmos DB collection name.
 */
export const MongoDBResourcesMigrateMongoDBCollectionToAutoscale =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesMigrateMongoDBCollectionToAutoscaleInput,
    outputSchema: MongoDBResourcesMigrateMongoDBCollectionToAutoscaleOutput,
  }));
// Input Schema
export interface MongoDBResourcesMigrateMongoDBCollectionToManualThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  collectionName: string;
}
export const MongoDBResourcesMigrateMongoDBCollectionToManualThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    collectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}/throughputSettings/default/migrateToManualThroughput",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesMigrateMongoDBCollectionToManualThroughputInput>;

// Output Schema
export interface MongoDBResourcesMigrateMongoDBCollectionToManualThroughputOutput {
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
export const MongoDBResourcesMigrateMongoDBCollectionToManualThroughputOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesMigrateMongoDBCollectionToManualThroughputOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB MongoDB collection from autoscale to manual throughput
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param collectionName - Cosmos DB collection name.
 */
export const MongoDBResourcesMigrateMongoDBCollectionToManualThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      MongoDBResourcesMigrateMongoDBCollectionToManualThroughputInput,
    outputSchema:
      MongoDBResourcesMigrateMongoDBCollectionToManualThroughputOutput,
  }));
// Input Schema
export interface MongoDBResourcesMigrateMongoDBDatabaseToAutoscaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const MongoDBResourcesMigrateMongoDBDatabaseToAutoscaleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/throughputSettings/default/migrateToAutoscale",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesMigrateMongoDBDatabaseToAutoscaleInput>;

// Output Schema
export interface MongoDBResourcesMigrateMongoDBDatabaseToAutoscaleOutput {
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
export const MongoDBResourcesMigrateMongoDBDatabaseToAutoscaleOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesMigrateMongoDBDatabaseToAutoscaleOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB MongoDB database from manual throughput to autoscale
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const MongoDBResourcesMigrateMongoDBDatabaseToAutoscale =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesMigrateMongoDBDatabaseToAutoscaleInput,
    outputSchema: MongoDBResourcesMigrateMongoDBDatabaseToAutoscaleOutput,
  }));
// Input Schema
export interface MongoDBResourcesMigrateMongoDBDatabaseToManualThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const MongoDBResourcesMigrateMongoDBDatabaseToManualThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/throughputSettings/default/migrateToManualThroughput",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesMigrateMongoDBDatabaseToManualThroughputInput>;

// Output Schema
export interface MongoDBResourcesMigrateMongoDBDatabaseToManualThroughputOutput {
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
export const MongoDBResourcesMigrateMongoDBDatabaseToManualThroughputOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesMigrateMongoDBDatabaseToManualThroughputOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB MongoDB database from autoscale to manual throughput
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const MongoDBResourcesMigrateMongoDBDatabaseToManualThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesMigrateMongoDBDatabaseToManualThroughputInput,
    outputSchema:
      MongoDBResourcesMigrateMongoDBDatabaseToManualThroughputOutput,
  }));
// Input Schema
export interface MongoDBResourcesRetrieveContinuousBackupInformationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  collectionName: string;
  location?: string;
}
export const MongoDBResourcesRetrieveContinuousBackupInformationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    collectionName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}/retrieveContinuousBackupInformation",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesRetrieveContinuousBackupInformationInput>;

// Output Schema
export interface MongoDBResourcesRetrieveContinuousBackupInformationOutput {
  continuousBackupInformation?: { latestRestorableTimestamp?: string };
}
export const MongoDBResourcesRetrieveContinuousBackupInformationOutput =
  /*@__PURE__*/ Schema.Struct({
    continuousBackupInformation: Schema.optional(
      Schema.Struct({
        latestRestorableTimestamp: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<MongoDBResourcesRetrieveContinuousBackupInformationOutput>;

// The operation
/**
 * Retrieves continuous backup information for a Mongodb collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param collectionName - Cosmos DB collection name.
 */
export const MongoDBResourcesRetrieveContinuousBackupInformation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesRetrieveContinuousBackupInformationInput,
    outputSchema: MongoDBResourcesRetrieveContinuousBackupInformationOutput,
  }));
// Input Schema
export interface MongoDBResourcesUpdateMongoDBCollectionThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  collectionName: string;
  properties: {
    resource: {
      throughput?: number;
      autoscaleSettings?: {
        maxThroughput: number;
        autoUpgradePolicy?: {
          throughputPolicy?: { isEnabled?: boolean; incrementPercent?: number };
        };
        targetMaxThroughput?: number;
      };
      minimumThroughput?: string;
      offerReplacePending?: string;
      instantMaximumThroughput?: string;
      softAllowedMaximumThroughput?: string;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const MongoDBResourcesUpdateMongoDBCollectionThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    collectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        throughput: Schema.optional(Schema.Number),
        autoscaleSettings: Schema.optional(
          Schema.Struct({
            maxThroughput: Schema.Number,
            autoUpgradePolicy: Schema.optional(
              Schema.Struct({
                throughputPolicy: Schema.optional(
                  Schema.Struct({
                    isEnabled: Schema.optional(Schema.Boolean),
                    incrementPercent: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            targetMaxThroughput: Schema.optional(Schema.Number),
          }),
        ),
        minimumThroughput: Schema.optional(Schema.String),
        offerReplacePending: Schema.optional(Schema.String),
        instantMaximumThroughput: Schema.optional(Schema.String),
        softAllowedMaximumThroughput: Schema.optional(Schema.String),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesUpdateMongoDBCollectionThroughputInput>;

// Output Schema
export interface MongoDBResourcesUpdateMongoDBCollectionThroughputOutput {
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
export const MongoDBResourcesUpdateMongoDBCollectionThroughputOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesUpdateMongoDBCollectionThroughputOutput>;

// The operation
/**
 * Update the RUs per second of an Azure Cosmos DB MongoDB collection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param collectionName - Cosmos DB collection name.
 */
export const MongoDBResourcesUpdateMongoDBCollectionThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesUpdateMongoDBCollectionThroughputInput,
    outputSchema: MongoDBResourcesUpdateMongoDBCollectionThroughputOutput,
  }));
// Input Schema
export interface MongoDBResourcesUpdateMongoDBDatabaseThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  properties: {
    resource: {
      throughput?: number;
      autoscaleSettings?: {
        maxThroughput: number;
        autoUpgradePolicy?: {
          throughputPolicy?: { isEnabled?: boolean; incrementPercent?: number };
        };
        targetMaxThroughput?: number;
      };
      minimumThroughput?: string;
      offerReplacePending?: string;
      instantMaximumThroughput?: string;
      softAllowedMaximumThroughput?: string;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const MongoDBResourcesUpdateMongoDBDatabaseThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        throughput: Schema.optional(Schema.Number),
        autoscaleSettings: Schema.optional(
          Schema.Struct({
            maxThroughput: Schema.Number,
            autoUpgradePolicy: Schema.optional(
              Schema.Struct({
                throughputPolicy: Schema.optional(
                  Schema.Struct({
                    isEnabled: Schema.optional(Schema.Boolean),
                    incrementPercent: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            targetMaxThroughput: Schema.optional(Schema.Number),
          }),
        ),
        minimumThroughput: Schema.optional(Schema.String),
        offerReplacePending: Schema.optional(Schema.String),
        instantMaximumThroughput: Schema.optional(Schema.String),
        softAllowedMaximumThroughput: Schema.optional(Schema.String),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoDBResourcesUpdateMongoDBDatabaseThroughputInput>;

// Output Schema
export interface MongoDBResourcesUpdateMongoDBDatabaseThroughputOutput {
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
export const MongoDBResourcesUpdateMongoDBDatabaseThroughputOutput =
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
  }) as unknown as Schema.Codec<MongoDBResourcesUpdateMongoDBDatabaseThroughputOutput>;

// The operation
/**
 * Update RUs per second of the an Azure Cosmos DB MongoDB database
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const MongoDBResourcesUpdateMongoDBDatabaseThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoDBResourcesUpdateMongoDBDatabaseThroughputInput,
    outputSchema: MongoDBResourcesUpdateMongoDBDatabaseThroughputOutput,
  }));
// Input Schema
export interface MongoMIResourcesCreateUpdateMongoMIRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
  properties?: {
    roleDefinitionId?: string;
    scope?: string;
    principalId?: string;
    provisioningState?: string;
  };
}
export const MongoMIResourcesCreateUpdateMongoMIRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        roleDefinitionId: Schema.optional(Schema.String),
        scope: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongoMIRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoMIResourcesCreateUpdateMongoMIRoleAssignmentInput>;

// Output Schema
export interface MongoMIResourcesCreateUpdateMongoMIRoleAssignmentOutput {
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
export const MongoMIResourcesCreateUpdateMongoMIRoleAssignmentOutput =
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
  }) as unknown as Schema.Codec<MongoMIResourcesCreateUpdateMongoMIRoleAssignmentOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB MongoMI Role Assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const MongoMIResourcesCreateUpdateMongoMIRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoMIResourcesCreateUpdateMongoMIRoleAssignmentInput,
    outputSchema: MongoMIResourcesCreateUpdateMongoMIRoleAssignmentOutput,
  }));
// Input Schema
export interface MongoMIResourcesCreateUpdateMongoMIRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
  properties?: {
    id?: string;
    roleName?: string;
    type?: "BuiltInRole" | "CustomRole";
    assignableScopes?: string[];
    permissions?: {
      id?: string;
      dataActions?: string[];
      notDataActions?: string[];
    }[];
  };
}
export const MongoMIResourcesCreateUpdateMongoMIRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        roleName: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["BuiltInRole", "CustomRole"])),
        assignableScopes: Schema.optional(Schema.Array(Schema.String)),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongoMIRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoMIResourcesCreateUpdateMongoMIRoleDefinitionInput>;

// Output Schema
export interface MongoMIResourcesCreateUpdateMongoMIRoleDefinitionOutput {
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
export const MongoMIResourcesCreateUpdateMongoMIRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<MongoMIResourcesCreateUpdateMongoMIRoleDefinitionOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB MongoMI Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const MongoMIResourcesCreateUpdateMongoMIRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoMIResourcesCreateUpdateMongoMIRoleDefinitionInput,
    outputSchema: MongoMIResourcesCreateUpdateMongoMIRoleDefinitionOutput,
  }));
// Input Schema
export interface MongoMIResourcesDeleteMongoMIRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
}
export const MongoMIResourcesDeleteMongoMIRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongoMIRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoMIResourcesDeleteMongoMIRoleAssignmentInput>;

// Output Schema
export type MongoMIResourcesDeleteMongoMIRoleAssignmentOutput = void;
export const MongoMIResourcesDeleteMongoMIRoleAssignmentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MongoMIResourcesDeleteMongoMIRoleAssignmentOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB MongoMI Role Assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const MongoMIResourcesDeleteMongoMIRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoMIResourcesDeleteMongoMIRoleAssignmentInput,
    outputSchema: MongoMIResourcesDeleteMongoMIRoleAssignmentOutput,
  }));
// Input Schema
export interface MongoMIResourcesDeleteMongoMIRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
}
export const MongoMIResourcesDeleteMongoMIRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongoMIRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoMIResourcesDeleteMongoMIRoleDefinitionInput>;

// Output Schema
export type MongoMIResourcesDeleteMongoMIRoleDefinitionOutput = void;
export const MongoMIResourcesDeleteMongoMIRoleDefinitionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MongoMIResourcesDeleteMongoMIRoleDefinitionOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB MongoMI Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const MongoMIResourcesDeleteMongoMIRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoMIResourcesDeleteMongoMIRoleDefinitionInput,
    outputSchema: MongoMIResourcesDeleteMongoMIRoleDefinitionOutput,
  }));
// Input Schema
export interface MongoMIResourcesGetMongoMIRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
}
export const MongoMIResourcesGetMongoMIRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongoMIRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoMIResourcesGetMongoMIRoleAssignmentInput>;

// Output Schema
export interface MongoMIResourcesGetMongoMIRoleAssignmentOutput {
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
export const MongoMIResourcesGetMongoMIRoleAssignmentOutput =
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
  }) as unknown as Schema.Codec<MongoMIResourcesGetMongoMIRoleAssignmentOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB MongoMI Role Assignment with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const MongoMIResourcesGetMongoMIRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoMIResourcesGetMongoMIRoleAssignmentInput,
    outputSchema: MongoMIResourcesGetMongoMIRoleAssignmentOutput,
  }));
// Input Schema
export interface MongoMIResourcesGetMongoMIRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
}
export const MongoMIResourcesGetMongoMIRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongoMIRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoMIResourcesGetMongoMIRoleDefinitionInput>;

// Output Schema
export interface MongoMIResourcesGetMongoMIRoleDefinitionOutput {
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
export const MongoMIResourcesGetMongoMIRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<MongoMIResourcesGetMongoMIRoleDefinitionOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB MongoMI Role Definition with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const MongoMIResourcesGetMongoMIRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoMIResourcesGetMongoMIRoleDefinitionInput,
    outputSchema: MongoMIResourcesGetMongoMIRoleDefinitionOutput,
  }));
// Input Schema
export interface MongoMIResourcesListMongoMIRoleAssignmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const MongoMIResourcesListMongoMIRoleAssignmentsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongoMIRoleAssignments",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoMIResourcesListMongoMIRoleAssignmentsInput>;

// Output Schema
export interface MongoMIResourcesListMongoMIRoleAssignmentsOutput {
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
export const MongoMIResourcesListMongoMIRoleAssignmentsOutput =
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
  }) as unknown as Schema.Codec<MongoMIResourcesListMongoMIRoleAssignmentsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB MongoMI Role Assignments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const MongoMIResourcesListMongoMIRoleAssignments =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoMIResourcesListMongoMIRoleAssignmentsInput,
    outputSchema: MongoMIResourcesListMongoMIRoleAssignmentsOutput,
  }));
// Input Schema
export interface MongoMIResourcesListMongoMIRoleDefinitionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const MongoMIResourcesListMongoMIRoleDefinitionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongoMIRoleDefinitions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<MongoMIResourcesListMongoMIRoleDefinitionsInput>;

// Output Schema
export interface MongoMIResourcesListMongoMIRoleDefinitionsOutput {
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
export const MongoMIResourcesListMongoMIRoleDefinitionsOutput =
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
  }) as unknown as Schema.Codec<MongoMIResourcesListMongoMIRoleDefinitionsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB MongoMI Role Definitions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const MongoMIResourcesListMongoMIRoleDefinitions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoMIResourcesListMongoMIRoleDefinitionsInput,
    outputSchema: MongoMIResourcesListMongoMIRoleDefinitionsOutput,
  }));
// Input Schema
export interface NotebookWorkspacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  notebookWorkspaceName: "default";
  id?: string;
  name?: string;
  type?: string;
}
export const NotebookWorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    notebookWorkspaceName: Schema.Literals(["default"]).pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<NotebookWorkspacesCreateOrUpdateInput>;

// Output Schema
export interface NotebookWorkspacesCreateOrUpdateOutput {
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
export const NotebookWorkspacesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NotebookWorkspacesCreateOrUpdateOutput>;

// The operation
/**
 * Creates the notebook workspace for a Cosmos DB account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param notebookWorkspaceName - The name of the notebook workspace resource.
 */
export const NotebookWorkspacesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotebookWorkspacesCreateOrUpdateInput,
    outputSchema: NotebookWorkspacesCreateOrUpdateOutput,
  }));
// Input Schema
export interface NotebookWorkspacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  notebookWorkspaceName: "default";
}
export const NotebookWorkspacesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    notebookWorkspaceName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<NotebookWorkspacesDeleteInput>;

// Output Schema
export type NotebookWorkspacesDeleteOutput = void;
export const NotebookWorkspacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NotebookWorkspacesDeleteOutput>;

// The operation
/**
 * Deletes the notebook workspace for a Cosmos DB account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param notebookWorkspaceName - The name of the notebook workspace resource.
 */
export const NotebookWorkspacesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotebookWorkspacesDeleteInput,
  outputSchema: NotebookWorkspacesDeleteOutput,
}));
// Input Schema
export interface NotebookWorkspacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  notebookWorkspaceName: "default";
}
export const NotebookWorkspacesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    notebookWorkspaceName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<NotebookWorkspacesGetInput>;

// Output Schema
export interface NotebookWorkspacesGetOutput {
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
export const NotebookWorkspacesGetOutput =
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
  }) as unknown as Schema.Codec<NotebookWorkspacesGetOutput>;

// The operation
/**
 * Gets the notebook workspace for a Cosmos DB account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param notebookWorkspaceName - The name of the notebook workspace resource.
 */
export const NotebookWorkspacesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotebookWorkspacesGetInput,
  outputSchema: NotebookWorkspacesGetOutput,
}));
// Input Schema
export interface NotebookWorkspacesListByDatabaseAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const NotebookWorkspacesListByDatabaseAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<NotebookWorkspacesListByDatabaseAccountInput>;

// Output Schema
export interface NotebookWorkspacesListByDatabaseAccountOutput {
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
export const NotebookWorkspacesListByDatabaseAccountOutput =
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
  }) as unknown as Schema.Codec<NotebookWorkspacesListByDatabaseAccountOutput>;

// The operation
/**
 * Gets the notebook workspace resources of an existing Cosmos DB account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const NotebookWorkspacesListByDatabaseAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotebookWorkspacesListByDatabaseAccountInput,
    outputSchema: NotebookWorkspacesListByDatabaseAccountOutput,
  }));
// Input Schema
export interface NotebookWorkspacesListConnectionInfoInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  notebookWorkspaceName: "default";
}
export const NotebookWorkspacesListConnectionInfoInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    notebookWorkspaceName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}/listConnectionInfo",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<NotebookWorkspacesListConnectionInfoInput>;

// Output Schema
export interface NotebookWorkspacesListConnectionInfoOutput {
  authToken?: string;
  notebookServerEndpoint?: string;
}
export const NotebookWorkspacesListConnectionInfoOutput =
  /*@__PURE__*/ Schema.Struct({
    authToken: Schema.optional(Schema.String),
    notebookServerEndpoint: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NotebookWorkspacesListConnectionInfoOutput>;

// The operation
/**
 * Retrieves the connection info for the notebook workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param notebookWorkspaceName - The name of the notebook workspace resource.
 */
export const NotebookWorkspacesListConnectionInfo =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotebookWorkspacesListConnectionInfoInput,
    outputSchema: NotebookWorkspacesListConnectionInfoOutput,
  }));
// Input Schema
export interface NotebookWorkspacesRegenerateAuthTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  notebookWorkspaceName: "default";
}
export const NotebookWorkspacesRegenerateAuthTokenInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    notebookWorkspaceName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}/regenerateAuthToken",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<NotebookWorkspacesRegenerateAuthTokenInput>;

// Output Schema
export type NotebookWorkspacesRegenerateAuthTokenOutput = void;
export const NotebookWorkspacesRegenerateAuthTokenOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NotebookWorkspacesRegenerateAuthTokenOutput>;

// The operation
/**
 * Regenerates the auth token for the notebook workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param notebookWorkspaceName - The name of the notebook workspace resource.
 */
export const NotebookWorkspacesRegenerateAuthToken =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotebookWorkspacesRegenerateAuthTokenInput,
    outputSchema: NotebookWorkspacesRegenerateAuthTokenOutput,
  }));
// Input Schema
export interface NotebookWorkspacesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  notebookWorkspaceName: "default";
}
export const NotebookWorkspacesStartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    notebookWorkspaceName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/notebookWorkspaces/{notebookWorkspaceName}/start",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<NotebookWorkspacesStartInput>;

// Output Schema
export type NotebookWorkspacesStartOutput = void;
export const NotebookWorkspacesStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NotebookWorkspacesStartOutput>;

// The operation
/**
 * Starts the notebook workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param notebookWorkspaceName - The name of the notebook workspace resource.
 */
export const NotebookWorkspacesStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotebookWorkspacesStartInput,
  outputSchema: NotebookWorkspacesStartOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DocumentDB/operations",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      Provider?: string;
      Resource?: string;
      Operation?: string;
      Description?: string;
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
          Provider: Schema.optional(Schema.String),
          Resource: Schema.optional(Schema.String),
          Operation: Schema.optional(Schema.String),
          Description: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Cosmos DB Resource Provider operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PartitionKeyRangeIdListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseRid: string;
  collectionRid: string;
  partitionKeyRangeId: string;
  $filter: string;
}
export const PartitionKeyRangeIdListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    collectionRid: Schema.String.pipe(T.PathParam()),
    partitionKeyRangeId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitionKeyRangeId/{partitionKeyRangeId}/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<PartitionKeyRangeIdListMetricsInput>;

// Output Schema
export interface PartitionKeyRangeIdListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const PartitionKeyRangeIdListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartitionKeyRangeIdListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given partition key range id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseRid - Cosmos DB database rid.
 * @param collectionRid - Cosmos DB collection rid.
 * @param partitionKeyRangeId - Partition Key Range Id for which to get data.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const PartitionKeyRangeIdListMetrics =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PartitionKeyRangeIdListMetricsInput,
    outputSchema: PartitionKeyRangeIdListMetricsOutput,
  }));
// Input Schema
export interface PartitionKeyRangeIdRegionListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  region: string;
  databaseRid: string;
  collectionRid: string;
  partitionKeyRangeId: string;
  $filter: string;
}
export const PartitionKeyRangeIdRegionListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    region: Schema.String.pipe(T.PathParam()),
    databaseRid: Schema.String.pipe(T.PathParam()),
    collectionRid: Schema.String.pipe(T.PathParam()),
    partitionKeyRangeId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/partitionKeyRangeId/{partitionKeyRangeId}/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<PartitionKeyRangeIdRegionListMetricsInput>;

// Output Schema
export interface PartitionKeyRangeIdRegionListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const PartitionKeyRangeIdRegionListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartitionKeyRangeIdRegionListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given partition key range id and region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param region - Cosmos DB region, with spaces between words and each word capitalized.
 * @param databaseRid - Cosmos DB database rid.
 * @param collectionRid - Cosmos DB collection rid.
 * @param partitionKeyRangeId - Partition Key Range Id for which to get data.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const PartitionKeyRangeIdRegionListMetrics =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PartitionKeyRangeIdRegionListMetricsInput,
    outputSchema: PartitionKeyRangeIdRegionListMetricsOutput,
  }));
// Input Schema
export interface PercentileListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $filter: string;
}
export const PercentileListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/percentile/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<PercentileListMetricsInput>;

// Output Schema
export interface PercentileListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const PercentileListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PercentileListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given database account. This url is only for PBS and Replication Latency data
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const PercentileListMetrics = /*@__PURE__*/ API.make(() => ({
  inputSchema: PercentileListMetricsInput,
  outputSchema: PercentileListMetricsOutput,
}));
// Input Schema
export interface PercentileSourceTargetListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  sourceRegion: string;
  targetRegion: string;
  $filter: string;
}
export const PercentileSourceTargetListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    sourceRegion: Schema.String.pipe(T.PathParam()),
    targetRegion: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sourceRegion/{sourceRegion}/targetRegion/{targetRegion}/percentile/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<PercentileSourceTargetListMetricsInput>;

// Output Schema
export interface PercentileSourceTargetListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const PercentileSourceTargetListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PercentileSourceTargetListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given account, source and target region. This url is only for PBS and Replication Latency data
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param sourceRegion - Source region from which data is written. Cosmos DB region, with spaces between words and each word capitalized.
 * @param targetRegion - Target region to which data is written. Cosmos DB region, with spaces between words and each word capitalized.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const PercentileSourceTargetListMetrics =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PercentileSourceTargetListMetricsInput,
    outputSchema: PercentileSourceTargetListMetricsOutput,
  }));
// Input Schema
export interface PercentileTargetListMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  targetRegion: string;
  $filter: string;
}
export const PercentileTargetListMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    targetRegion: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/targetRegion/{targetRegion}/percentile/metrics",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<PercentileTargetListMetricsInput>;

// Output Schema
export interface PercentileTargetListMetricsOutput {
  value?: {
    startTime?: string;
    endTime?: string;
    timeGrain?: string;
    unit?:
      | "Count"
      | "Bytes"
      | "Seconds"
      | "Percent"
      | "CountPerSecond"
      | "BytesPerSecond"
      | "Milliseconds";
    name?: { value?: string; localizedValue?: string };
    metricValues?: {
      _count?: number;
      average?: number;
      maximum?: number;
      minimum?: number;
      timestamp?: string;
      total?: number;
    }[];
  }[];
  nextLink?: string;
}
export const PercentileTargetListMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          timeGrain: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          metricValues: Schema.optional(
            Schema.Array(
              Schema.Struct({
                _count: Schema.optional(Schema.Number),
                average: Schema.optional(Schema.Number),
                maximum: Schema.optional(Schema.Number),
                minimum: Schema.optional(Schema.Number),
                timestamp: Schema.optional(Schema.String),
                total: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PercentileTargetListMetricsOutput>;

// The operation
/**
 * Retrieves the metrics determined by the given filter for the given account target region. This url is only for PBS and Replication Latency data
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param targetRegion - Target region to which data is written. Cosmos DB region, with spaces between words and each word capitalized.
 * @param $filter - An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.
 */
export const PercentileTargetListMetrics = /*@__PURE__*/ API.make(() => ({
  inputSchema: PercentileTargetListMetricsInput,
  outputSchema: PercentileTargetListMetricsOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: string;
      description?: string;
      actionsRequired?: string;
    };
    groupId?: string;
    provisioningState?: string;
  };
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
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
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        groupId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOrUpdateOutput {
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
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Approve or reject a private endpoint connection with a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection with a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-15",
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
 * Gets a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByDatabaseAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const PrivateEndpointConnectionsListByDatabaseAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByDatabaseAccountInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByDatabaseAccountOutput {
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
export const PrivateEndpointConnectionsListByDatabaseAccountOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByDatabaseAccountOutput>;

// The operation
/**
 * List all private endpoint connections on a Cosmos DB account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const PrivateEndpointConnectionsListByDatabaseAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByDatabaseAccountInput,
    outputSchema: PrivateEndpointConnectionsListByDatabaseAccountOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  groupName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources/{groupName}",
      apiVersion: "2026-03-15",
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
 * Gets the private link resources that need to be created for a Cosmos DB account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param groupName - The name of the private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListByDatabaseAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const PrivateLinkResourcesListByDatabaseAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByDatabaseAccountInput>;

// Output Schema
export interface PrivateLinkResourcesListByDatabaseAccountOutput {
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
export const PrivateLinkResourcesListByDatabaseAccountOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByDatabaseAccountOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a Cosmos DB account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const PrivateLinkResourcesListByDatabaseAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByDatabaseAccountInput,
    outputSchema: PrivateLinkResourcesListByDatabaseAccountOutput,
  }));
// Input Schema
export interface RestorableDatabaseAccountsGetByLocationInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
}
export const RestorableDatabaseAccountsGetByLocationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableDatabaseAccountsGetByLocationInput>;

// Output Schema
export interface RestorableDatabaseAccountsGetByLocationOutput {
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
export const RestorableDatabaseAccountsGetByLocationOutput =
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
  }) as unknown as Schema.Codec<RestorableDatabaseAccountsGetByLocationOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB restorable database account.  This call requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/read/*' permission.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 */
export const RestorableDatabaseAccountsGetByLocation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RestorableDatabaseAccountsGetByLocationInput,
    outputSchema: RestorableDatabaseAccountsGetByLocationOutput,
  }));
// Input Schema
export interface RestorableDatabaseAccountsListInput {
  subscriptionId: string;
}
export const RestorableDatabaseAccountsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/restorableDatabaseAccounts",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableDatabaseAccountsListInput>;

// Output Schema
export interface RestorableDatabaseAccountsListOutput {
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
export const RestorableDatabaseAccountsListOutput =
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
  }) as unknown as Schema.Codec<RestorableDatabaseAccountsListOutput>;

// The operation
/**
 * Lists all the restorable Azure Cosmos DB database accounts available under the subscription. This call requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/read' permission.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RestorableDatabaseAccountsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RestorableDatabaseAccountsListInput,
    outputSchema: RestorableDatabaseAccountsListOutput,
  }));
// Input Schema
export interface RestorableDatabaseAccountsListByLocationInput {
  subscriptionId: string;
  location: string;
}
export const RestorableDatabaseAccountsListByLocationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableDatabaseAccountsListByLocationInput>;

// Output Schema
export interface RestorableDatabaseAccountsListByLocationOutput {
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
export const RestorableDatabaseAccountsListByLocationOutput =
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
  }) as unknown as Schema.Codec<RestorableDatabaseAccountsListByLocationOutput>;

// The operation
/**
 * Lists all the restorable Azure Cosmos DB database accounts available under the subscription and in a region.  This call requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/read' permission.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 */
export const RestorableDatabaseAccountsListByLocation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RestorableDatabaseAccountsListByLocationInput,
    outputSchema: RestorableDatabaseAccountsListByLocationOutput,
  }));
// Input Schema
export interface RestorableGremlinDatabasesListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
}
export const RestorableGremlinDatabasesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableGremlinDatabases",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableGremlinDatabasesListInput>;

// Output Schema
export interface RestorableGremlinDatabasesListOutput {
  value?: {
    properties?: {
      resource?: {
        _rid?: string;
        operationType?:
          | "Create"
          | "Replace"
          | "Delete"
          | "Recreate"
          | "SystemOperation";
        canUndelete?: string;
        canUndeleteReason?: string;
        eventTimestamp?: string;
        ownerId?: string;
        ownerResourceId?: string;
      };
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const RestorableGremlinDatabasesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              resource: Schema.optional(
                Schema.Struct({
                  _rid: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals([
                      "Create",
                      "Replace",
                      "Delete",
                      "Recreate",
                      "SystemOperation",
                    ]),
                  ),
                  canUndelete: Schema.optional(Schema.String),
                  canUndeleteReason: Schema.optional(Schema.String),
                  eventTimestamp: Schema.optional(Schema.String),
                  ownerId: Schema.optional(Schema.String),
                  ownerResourceId: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableGremlinDatabasesListOutput>;

// The operation
/**
 * Show the event feed of all mutations done on all the Azure Cosmos DB Gremlin databases under the restorable account. This helps in scenario where database was accidentally deleted to get the deletion time. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 */
export const RestorableGremlinDatabasesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RestorableGremlinDatabasesListInput,
    outputSchema: RestorableGremlinDatabasesListOutput,
  }));
// Input Schema
export interface RestorableGremlinGraphsListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
  restorableGremlinDatabaseRid?: string;
  startTime?: string;
  endTime?: string;
}
export const RestorableGremlinGraphsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    restorableGremlinDatabaseRid: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableGraphs",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableGremlinGraphsListInput>;

// Output Schema
export interface RestorableGremlinGraphsListOutput {
  value?: {
    properties?: {
      resource?: {
        _rid?: string;
        operationType?:
          | "Create"
          | "Replace"
          | "Delete"
          | "Recreate"
          | "SystemOperation";
        canUndelete?: string;
        canUndeleteReason?: string;
        eventTimestamp?: string;
        ownerId?: string;
        ownerResourceId?: string;
      };
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const RestorableGremlinGraphsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              resource: Schema.optional(
                Schema.Struct({
                  _rid: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals([
                      "Create",
                      "Replace",
                      "Delete",
                      "Recreate",
                      "SystemOperation",
                    ]),
                  ),
                  canUndelete: Schema.optional(Schema.String),
                  canUndeleteReason: Schema.optional(Schema.String),
                  eventTimestamp: Schema.optional(Schema.String),
                  ownerId: Schema.optional(Schema.String),
                  ownerResourceId: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableGremlinGraphsListOutput>;

// The operation
/**
 * Show the event feed of all mutations done on all the Azure Cosmos DB Gremlin graphs under a specific database. This helps in scenario where container was accidentally deleted. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 * @param restorableGremlinDatabaseRid - The resource ID of the Gremlin database.
 * @param startTime - Restorable Gremlin graphs event feed start time.
 * @param endTime - Restorable Gremlin graphs event feed end time.
 */
export const RestorableGremlinGraphsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RestorableGremlinGraphsListInput,
  outputSchema: RestorableGremlinGraphsListOutput,
}));
// Input Schema
export interface RestorableGremlinResourcesListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
  restoreLocation?: string;
  restoreTimestampInUtc?: string;
}
export const RestorableGremlinResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    restoreLocation: Schema.optional(Schema.String),
    restoreTimestampInUtc: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableGremlinResources",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableGremlinResourcesListInput>;

// Output Schema
export interface RestorableGremlinResourcesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    databaseName?: string;
    graphNames?: string[];
  }[];
  nextLink?: string;
}
export const RestorableGremlinResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          databaseName: Schema.optional(Schema.String),
          graphNames: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableGremlinResourcesListOutput>;

// The operation
/**
 * Return a list of gremlin database and graphs combo that exist on the account at the given timestamp and location. This helps in scenarios to validate what resources exist at given timestamp and location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 * @param restoreLocation - The location where the restorable resources are located.
 * @param restoreTimestampInUtc - The timestamp when the restorable resources existed.
 */
export const RestorableGremlinResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RestorableGremlinResourcesListInput,
    outputSchema: RestorableGremlinResourcesListOutput,
  }));
// Input Schema
export interface RestorableMongodbCollectionsListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
  restorableMongodbDatabaseRid?: string;
  startTime?: string;
  endTime?: string;
}
export const RestorableMongodbCollectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    restorableMongodbDatabaseRid: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableMongodbCollections",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableMongodbCollectionsListInput>;

// Output Schema
export interface RestorableMongodbCollectionsListOutput {
  value?: {
    properties?: {
      resource?: {
        _rid?: string;
        operationType?:
          | "Create"
          | "Replace"
          | "Delete"
          | "Recreate"
          | "SystemOperation";
        canUndelete?: string;
        canUndeleteReason?: string;
        eventTimestamp?: string;
        ownerId?: string;
        ownerResourceId?: string;
      };
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const RestorableMongodbCollectionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              resource: Schema.optional(
                Schema.Struct({
                  _rid: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals([
                      "Create",
                      "Replace",
                      "Delete",
                      "Recreate",
                      "SystemOperation",
                    ]),
                  ),
                  canUndelete: Schema.optional(Schema.String),
                  canUndeleteReason: Schema.optional(Schema.String),
                  eventTimestamp: Schema.optional(Schema.String),
                  ownerId: Schema.optional(Schema.String),
                  ownerResourceId: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableMongodbCollectionsListOutput>;

// The operation
/**
 * Show the event feed of all mutations done on all the Azure Cosmos DB MongoDB collections under a specific database.  This helps in scenario where container was accidentally deleted.  This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 * @param restorableMongodbDatabaseRid - The resource ID of the MongoDB database.
 * @param startTime - Restorable MongoDB collections event feed start time.
 * @param endTime - Restorable MongoDB collections event feed end time.
 */
export const RestorableMongodbCollectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RestorableMongodbCollectionsListInput,
    outputSchema: RestorableMongodbCollectionsListOutput,
  }));
// Input Schema
export interface RestorableMongodbDatabasesListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
}
export const RestorableMongodbDatabasesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableMongodbDatabases",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableMongodbDatabasesListInput>;

// Output Schema
export interface RestorableMongodbDatabasesListOutput {
  value?: {
    properties?: {
      resource?: {
        _rid?: string;
        operationType?:
          | "Create"
          | "Replace"
          | "Delete"
          | "Recreate"
          | "SystemOperation";
        canUndelete?: string;
        canUndeleteReason?: string;
        eventTimestamp?: string;
        ownerId?: string;
        ownerResourceId?: string;
      };
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const RestorableMongodbDatabasesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              resource: Schema.optional(
                Schema.Struct({
                  _rid: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals([
                      "Create",
                      "Replace",
                      "Delete",
                      "Recreate",
                      "SystemOperation",
                    ]),
                  ),
                  canUndelete: Schema.optional(Schema.String),
                  canUndeleteReason: Schema.optional(Schema.String),
                  eventTimestamp: Schema.optional(Schema.String),
                  ownerId: Schema.optional(Schema.String),
                  ownerResourceId: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableMongodbDatabasesListOutput>;

// The operation
/**
 * Show the event feed of all mutations done on all the Azure Cosmos DB MongoDB databases under the restorable account.  This helps in scenario where database was accidentally deleted to get the deletion time.  This API requires  'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 */
export const RestorableMongodbDatabasesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RestorableMongodbDatabasesListInput,
    outputSchema: RestorableMongodbDatabasesListOutput,
  }));
// Input Schema
export interface RestorableMongodbResourcesListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
  restoreLocation?: string;
  restoreTimestampInUtc?: string;
}
export const RestorableMongodbResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    restoreLocation: Schema.optional(Schema.String),
    restoreTimestampInUtc: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableMongodbResources",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableMongodbResourcesListInput>;

// Output Schema
export interface RestorableMongodbResourcesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    databaseName?: string;
    collectionNames?: string[];
  }[];
  nextLink?: string;
}
export const RestorableMongodbResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          databaseName: Schema.optional(Schema.String),
          collectionNames: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableMongodbResourcesListOutput>;

// The operation
/**
 * Return a list of database and collection combo that exist on the account at the given timestamp and location. This helps in scenarios to validate what resources exist at given timestamp and location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 * @param restoreLocation - The location where the restorable resources are located.
 * @param restoreTimestampInUtc - The timestamp when the restorable resources existed.
 */
export const RestorableMongodbResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RestorableMongodbResourcesListInput,
    outputSchema: RestorableMongodbResourcesListOutput,
  }));
// Input Schema
export interface RestorableSqlContainersListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
  restorableSqlDatabaseRid?: string;
  startTime?: string;
  endTime?: string;
}
export const RestorableSqlContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    restorableSqlDatabaseRid: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableSqlContainers",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableSqlContainersListInput>;

// Output Schema
export interface RestorableSqlContainersListOutput {
  value?: {
    properties?: {
      resource?: {
        _rid?: string;
        operationType?:
          | "Create"
          | "Replace"
          | "Delete"
          | "Recreate"
          | "SystemOperation";
        canUndelete?: string;
        canUndeleteReason?: string;
        eventTimestamp?: string;
        ownerId?: string;
        ownerResourceId?: string;
        container?: {
          id: string;
          indexingPolicy?: {
            automatic?: boolean;
            indexingMode?: "consistent" | "lazy" | "none";
            includedPaths?: {
              path?: string;
              indexes?: {
                dataType?:
                  | "String"
                  | "Number"
                  | "Point"
                  | "Polygon"
                  | "LineString"
                  | "MultiPolygon";
                precision?: number;
                kind?: "Hash" | "Range" | "Spatial";
              }[];
            }[];
            excludedPaths?: { path?: string }[];
            compositeIndexes?: {
              path?: string;
              order?: "ascending" | "descending";
            }[][];
            spatialIndexes?: {
              path?: string;
              types?: ("Point" | "LineString" | "Polygon" | "MultiPolygon")[];
            }[];
            vectorIndexes?: {
              path: string;
              type: "flat" | "diskANN" | "quantizedFlat";
              quantizationByteSize?: number;
              indexingSearchListSize?: number;
              vectorIndexShardKey?: string[];
            }[];
            fullTextIndexes?: { path: string }[];
          };
          partitionKey?: {
            paths?: string[];
            kind?: "Hash" | "Range" | "MultiHash";
            version?: number;
            systemKey?: boolean;
          };
          defaultTtl?: number;
          uniqueKeyPolicy?: { uniqueKeys?: { paths?: string[] }[] };
          conflictResolutionPolicy?: {
            mode?: "LastWriterWins" | "Custom";
            conflictResolutionPath?: string;
            conflictResolutionProcedure?: string;
          };
          clientEncryptionPolicy?: {
            includedPaths: {
              path: string;
              clientEncryptionKeyId: string;
              encryptionType: string;
              encryptionAlgorithm: string;
            }[];
            policyFormatVersion: number;
          };
          analyticalStorageTtl?: number;
          restoreParameters?: {
            restoreSource?: string;
            restoreTimestampInUtc?: string;
            restoreWithTtlDisabled?: boolean;
          };
          createMode?: "Default" | "Restore";
          computedProperties?: { name?: string; query?: string }[];
          vectorEmbeddingPolicy?: {
            vectorEmbeddings?: {
              path: string;
              dataType: "float32" | "uint8" | "int8" | "float16";
              distanceFunction: "euclidean" | "cosine" | "dotproduct";
              dimensions: number;
            }[];
          };
          fullTextPolicy?: {
            defaultLanguage?: string;
            fullTextPaths?: { path: string; language?: string }[];
          };
        };
      };
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const RestorableSqlContainersListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              resource: Schema.optional(
                Schema.Struct({
                  _rid: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals([
                      "Create",
                      "Replace",
                      "Delete",
                      "Recreate",
                      "SystemOperation",
                    ]),
                  ),
                  canUndelete: Schema.optional(Schema.String),
                  canUndeleteReason: Schema.optional(Schema.String),
                  eventTimestamp: Schema.optional(Schema.String),
                  ownerId: Schema.optional(Schema.String),
                  ownerResourceId: Schema.optional(Schema.String),
                  container: Schema.optional(
                    Schema.Struct({
                      id: Schema.String,
                      indexingPolicy: Schema.optional(
                        Schema.Struct({
                          automatic: Schema.optional(Schema.Boolean),
                          indexingMode: Schema.optional(
                            Schema.Literals(["consistent", "lazy", "none"]),
                          ),
                          includedPaths: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                path: Schema.optional(Schema.String),
                                indexes: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      dataType: Schema.optional(
                                        Schema.Literals([
                                          "String",
                                          "Number",
                                          "Point",
                                          "Polygon",
                                          "LineString",
                                          "MultiPolygon",
                                        ]),
                                      ),
                                      precision: Schema.optional(Schema.Number),
                                      kind: Schema.optional(
                                        Schema.Literals([
                                          "Hash",
                                          "Range",
                                          "Spatial",
                                        ]),
                                      ),
                                    }),
                                  ),
                                ),
                              }),
                            ),
                          ),
                          excludedPaths: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                path: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                          compositeIndexes: Schema.optional(
                            Schema.Array(
                              Schema.Array(
                                Schema.Struct({
                                  path: Schema.optional(Schema.String),
                                  order: Schema.optional(
                                    Schema.Literals([
                                      "ascending",
                                      "descending",
                                    ]),
                                  ),
                                }),
                              ),
                            ),
                          ),
                          spatialIndexes: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                path: Schema.optional(Schema.String),
                                types: Schema.optional(
                                  Schema.Array(
                                    Schema.Literals([
                                      "Point",
                                      "LineString",
                                      "Polygon",
                                      "MultiPolygon",
                                    ]),
                                  ),
                                ),
                              }),
                            ),
                          ),
                          vectorIndexes: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                path: Schema.String,
                                type: Schema.Literals([
                                  "flat",
                                  "diskANN",
                                  "quantizedFlat",
                                ]),
                                quantizationByteSize: Schema.optional(
                                  Schema.Number,
                                ),
                                indexingSearchListSize: Schema.optional(
                                  Schema.Number,
                                ),
                                vectorIndexShardKey: Schema.optional(
                                  Schema.Array(Schema.String),
                                ),
                              }),
                            ),
                          ),
                          fullTextIndexes: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                path: Schema.String,
                              }),
                            ),
                          ),
                        }),
                      ),
                      partitionKey: Schema.optional(
                        Schema.Struct({
                          paths: Schema.optional(Schema.Array(Schema.String)),
                          kind: Schema.optional(
                            Schema.Literals(["Hash", "Range", "MultiHash"]),
                          ),
                          version: Schema.optional(Schema.Number),
                          systemKey: Schema.optional(Schema.Boolean),
                        }),
                      ),
                      defaultTtl: Schema.optional(Schema.Number),
                      uniqueKeyPolicy: Schema.optional(
                        Schema.Struct({
                          uniqueKeys: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                paths: Schema.optional(
                                  Schema.Array(Schema.String),
                                ),
                              }),
                            ),
                          ),
                        }),
                      ),
                      conflictResolutionPolicy: Schema.optional(
                        Schema.Struct({
                          mode: Schema.optional(
                            Schema.Literals(["LastWriterWins", "Custom"]),
                          ),
                          conflictResolutionPath: Schema.optional(
                            Schema.String,
                          ),
                          conflictResolutionProcedure: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                      clientEncryptionPolicy: Schema.optional(
                        Schema.Struct({
                          includedPaths: Schema.Array(
                            Schema.Struct({
                              path: Schema.String,
                              clientEncryptionKeyId: Schema.String,
                              encryptionType: Schema.String,
                              encryptionAlgorithm: Schema.String,
                            }),
                          ),
                          policyFormatVersion: Schema.Number,
                        }),
                      ),
                      analyticalStorageTtl: Schema.optional(Schema.Number),
                      restoreParameters: Schema.optional(
                        Schema.Struct({
                          restoreSource: Schema.optional(Schema.String),
                          restoreTimestampInUtc: Schema.optional(Schema.String),
                          restoreWithTtlDisabled: Schema.optional(
                            Schema.Boolean,
                          ),
                        }),
                      ),
                      createMode: Schema.optional(
                        Schema.Literals(["Default", "Restore"]),
                      ),
                      computedProperties: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            query: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      vectorEmbeddingPolicy: Schema.optional(
                        Schema.Struct({
                          vectorEmbeddings: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                path: Schema.String,
                                dataType: Schema.Literals([
                                  "float32",
                                  "uint8",
                                  "int8",
                                  "float16",
                                ]),
                                distanceFunction: Schema.Literals([
                                  "euclidean",
                                  "cosine",
                                  "dotproduct",
                                ]),
                                dimensions: Schema.Number,
                              }),
                            ),
                          ),
                        }),
                      ),
                      fullTextPolicy: Schema.optional(
                        Schema.Struct({
                          defaultLanguage: Schema.optional(Schema.String),
                          fullTextPaths: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                path: Schema.String,
                                language: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableSqlContainersListOutput>;

// The operation
/**
 * Show the event feed of all mutations done on all the Azure Cosmos DB SQL containers under a specific database.  This helps in scenario where container was accidentally deleted.  This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 * @param restorableSqlDatabaseRid - The resource ID of the SQL database.
 * @param startTime - Restorable Sql containers event feed start time.
 * @param endTime - Restorable Sql containers event feed end time.
 */
export const RestorableSqlContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RestorableSqlContainersListInput,
  outputSchema: RestorableSqlContainersListOutput,
}));
// Input Schema
export interface RestorableSqlDatabasesListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
}
export const RestorableSqlDatabasesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableSqlDatabases",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableSqlDatabasesListInput>;

// Output Schema
export interface RestorableSqlDatabasesListOutput {
  value?: {
    properties?: {
      resource?: {
        _rid?: string;
        operationType?:
          | "Create"
          | "Replace"
          | "Delete"
          | "Recreate"
          | "SystemOperation";
        canUndelete?: string;
        canUndeleteReason?: string;
        eventTimestamp?: string;
        ownerId?: string;
        ownerResourceId?: string;
        database?: {
          id: string;
          restoreParameters?: {
            restoreSource?: string;
            restoreTimestampInUtc?: string;
            restoreWithTtlDisabled?: boolean;
          };
          createMode?: "Default" | "Restore";
        };
      };
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const RestorableSqlDatabasesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              resource: Schema.optional(
                Schema.Struct({
                  _rid: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals([
                      "Create",
                      "Replace",
                      "Delete",
                      "Recreate",
                      "SystemOperation",
                    ]),
                  ),
                  canUndelete: Schema.optional(Schema.String),
                  canUndeleteReason: Schema.optional(Schema.String),
                  eventTimestamp: Schema.optional(Schema.String),
                  ownerId: Schema.optional(Schema.String),
                  ownerResourceId: Schema.optional(Schema.String),
                  database: Schema.optional(
                    Schema.Struct({
                      id: Schema.String,
                      restoreParameters: Schema.optional(
                        Schema.Struct({
                          restoreSource: Schema.optional(Schema.String),
                          restoreTimestampInUtc: Schema.optional(Schema.String),
                          restoreWithTtlDisabled: Schema.optional(
                            Schema.Boolean,
                          ),
                        }),
                      ),
                      createMode: Schema.optional(
                        Schema.Literals(["Default", "Restore"]),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableSqlDatabasesListOutput>;

// The operation
/**
 * Show the event feed of all mutations done on all the Azure Cosmos DB SQL databases under the restorable account.  This helps in scenario where database was accidentally deleted to get the deletion time.  This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 */
export const RestorableSqlDatabasesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RestorableSqlDatabasesListInput,
  outputSchema: RestorableSqlDatabasesListOutput,
}));
// Input Schema
export interface RestorableSqlResourcesListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
  restoreLocation?: string;
  restoreTimestampInUtc?: string;
}
export const RestorableSqlResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    restoreLocation: Schema.optional(Schema.String),
    restoreTimestampInUtc: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableSqlResources",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableSqlResourcesListInput>;

// Output Schema
export interface RestorableSqlResourcesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    databaseName?: string;
    collectionNames?: string[];
  }[];
  nextLink?: string;
}
export const RestorableSqlResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          databaseName: Schema.optional(Schema.String),
          collectionNames: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableSqlResourcesListOutput>;

// The operation
/**
 * Return a list of database and container combo that exist on the account at the given timestamp and location. This helps in scenarios to validate what resources exist at given timestamp and location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 * @param restoreLocation - The location where the restorable resources are located.
 * @param restoreTimestampInUtc - The timestamp when the restorable resources existed.
 */
export const RestorableSqlResourcesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RestorableSqlResourcesListInput,
  outputSchema: RestorableSqlResourcesListOutput,
}));
// Input Schema
export interface RestorableTableResourcesListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
  restoreLocation?: string;
  restoreTimestampInUtc?: string;
}
export const RestorableTableResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    restoreLocation: Schema.optional(Schema.String),
    restoreTimestampInUtc: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableTableResources",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableTableResourcesListInput>;

// Output Schema
export interface RestorableTableResourcesListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const RestorableTableResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableTableResourcesListOutput>;

// The operation
/**
 * Return a list of tables that exist on the account at the given timestamp and location. This helps in scenarios to validate what resources exist at given timestamp and location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 * @param restoreLocation - The location where the restorable resources are located.
 * @param restoreTimestampInUtc - The timestamp when the restorable resources existed.
 */
export const RestorableTableResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RestorableTableResourcesListInput,
    outputSchema: RestorableTableResourcesListOutput,
  }));
// Input Schema
export interface RestorableTablesListInput {
  subscriptionId: string;
  location: string;
  instanceId: string;
  startTime?: string;
  endTime?: string;
}
export const RestorableTablesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    instanceId: Schema.String.pipe(T.PathParam()),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableTables",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<RestorableTablesListInput>;

// Output Schema
export interface RestorableTablesListOutput {
  value?: {
    properties?: {
      resource?: {
        _rid?: string;
        operationType?:
          | "Create"
          | "Replace"
          | "Delete"
          | "Recreate"
          | "SystemOperation";
        canUndelete?: string;
        canUndeleteReason?: string;
        eventTimestamp?: string;
        ownerId?: string;
        ownerResourceId?: string;
      };
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const RestorableTablesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              resource: Schema.optional(
                Schema.Struct({
                  _rid: Schema.optional(Schema.String),
                  operationType: Schema.optional(
                    Schema.Literals([
                      "Create",
                      "Replace",
                      "Delete",
                      "Recreate",
                      "SystemOperation",
                    ]),
                  ),
                  canUndelete: Schema.optional(Schema.String),
                  canUndeleteReason: Schema.optional(Schema.String),
                  eventTimestamp: Schema.optional(Schema.String),
                  ownerId: Schema.optional(Schema.String),
                  ownerResourceId: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RestorableTablesListOutput>;

// The operation
/**
 * Show the event feed of all mutations done on all the Azure Cosmos DB Tables. This helps in scenario where table was accidentally deleted. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - Cosmos DB region, with spaces between words and each word capitalized.
 * @param instanceId - The instanceId GUID of a restorable database account.
 * @param startTime - Restorable Tables event feed start time.
 * @param endTime - Restorable Tables event feed end time.
 */
export const RestorableTablesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RestorableTablesListInput,
  outputSchema: RestorableTablesListOutput,
}));
// Input Schema
export interface ServiceCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  serviceName: string;
  properties?: {
    instanceSize?: "Cosmos.D4s" | "Cosmos.D8s" | "Cosmos.D16s";
    instanceCount?: number;
    serviceType:
      | "SqlDedicatedGateway"
      | "DataTransfer"
      | "GraphAPICompute"
      | "MaterializedViewsBuilder";
  };
}
export const ServiceCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      instanceSize: Schema.optional(
        Schema.Literals(["Cosmos.D4s", "Cosmos.D8s", "Cosmos.D16s"]),
      ),
      instanceCount: Schema.optional(Schema.Number),
      serviceType: Schema.Literals([
        "SqlDedicatedGateway",
        "DataTransfer",
        "GraphAPICompute",
        "MaterializedViewsBuilder",
      ]),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/services/{serviceName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<ServiceCreateInput>;

// Output Schema
export interface ServiceCreateOutput {
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
export const ServiceCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServiceCreateOutput>;

// The operation
/**
 * Creates a service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param serviceName - Cosmos DB service name.
 */
export const ServiceCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceCreateInput,
  outputSchema: ServiceCreateOutput,
}));
// Input Schema
export interface ServiceDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  serviceName: string;
}
export const ServiceDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/services/{serviceName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<ServiceDeleteInput>;

// Output Schema
export type ServiceDeleteOutput = void;
export const ServiceDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceDeleteOutput>;

// The operation
/**
 * Deletes service with the given serviceName.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param serviceName - Cosmos DB service name.
 */
export const ServiceDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceDeleteInput,
  outputSchema: ServiceDeleteOutput,
}));
// Input Schema
export interface ServiceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  serviceName: string;
}
export const ServiceGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/services/{serviceName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<ServiceGetInput>;

// Output Schema
export interface ServiceGetOutput {
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
export const ServiceGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServiceGetOutput>;

// The operation
/**
 * Gets the status of service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param serviceName - Cosmos DB service name.
 */
export const ServiceGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceGetInput,
  outputSchema: ServiceGetOutput,
}));
// Input Schema
export interface ServiceListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const ServiceListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/services",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<ServiceListInput>;

// Output Schema
export interface ServiceListOutput {
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
export const ServiceListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServiceListOutput>;

// The operation
/**
 * Gets the status of service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const ServiceList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServiceListInput,
  outputSchema: ServiceListOutput,
}));
// Input Schema
export interface SqlResourcesCreateUpdateClientEncryptionKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  clientEncryptionKeyName: string;
  properties: {
    resource: {
      id?: string;
      encryptionAlgorithm?: string;
      wrappedDataEncryptionKey?: string;
      keyWrapMetadata?: {
        name?: string;
        type?: string;
        value?: string;
        algorithm?: string;
      };
    };
  };
}
export const SqlResourcesCreateUpdateClientEncryptionKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    clientEncryptionKeyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.optional(Schema.String),
        encryptionAlgorithm: Schema.optional(Schema.String),
        wrappedDataEncryptionKey: Schema.optional(Schema.String),
        keyWrapMetadata: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
            algorithm: Schema.optional(Schema.String),
          }),
        ),
      }),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/clientEncryptionKeys/{clientEncryptionKeyName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesCreateUpdateClientEncryptionKeyInput>;

// Output Schema
export interface SqlResourcesCreateUpdateClientEncryptionKeyOutput {
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
export const SqlResourcesCreateUpdateClientEncryptionKeyOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesCreateUpdateClientEncryptionKeyOutput>;

// The operation
/**
 * Create or update a ClientEncryptionKey. This API is meant to be invoked via tools such as the Azure Powershell (instead of directly).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param clientEncryptionKeyName - Cosmos DB ClientEncryptionKey name.
 */
export const SqlResourcesCreateUpdateClientEncryptionKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesCreateUpdateClientEncryptionKeyInput,
    outputSchema: SqlResourcesCreateUpdateClientEncryptionKeyOutput,
  }));
// Input Schema
export interface SqlResourcesCreateUpdateSqlContainerInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  properties: {
    resource: {
      id: string;
      indexingPolicy?: {
        automatic?: boolean;
        indexingMode?: "consistent" | "lazy" | "none";
        includedPaths?: {
          path?: string;
          indexes?: {
            dataType?:
              | "String"
              | "Number"
              | "Point"
              | "Polygon"
              | "LineString"
              | "MultiPolygon";
            precision?: number;
            kind?: "Hash" | "Range" | "Spatial";
          }[];
        }[];
        excludedPaths?: { path?: string }[];
        compositeIndexes?: {
          path?: string;
          order?: "ascending" | "descending";
        }[][];
        spatialIndexes?: {
          path?: string;
          types?: ("Point" | "LineString" | "Polygon" | "MultiPolygon")[];
        }[];
        vectorIndexes?: {
          path: string;
          type: "flat" | "diskANN" | "quantizedFlat";
          quantizationByteSize?: number;
          indexingSearchListSize?: number;
          vectorIndexShardKey?: string[];
        }[];
        fullTextIndexes?: { path: string }[];
      };
      partitionKey?: {
        paths?: string[];
        kind?: "Hash" | "Range" | "MultiHash";
        version?: number;
        systemKey?: boolean;
      };
      defaultTtl?: number;
      uniqueKeyPolicy?: { uniqueKeys?: { paths?: string[] }[] };
      conflictResolutionPolicy?: {
        mode?: "LastWriterWins" | "Custom";
        conflictResolutionPath?: string;
        conflictResolutionProcedure?: string;
      };
      clientEncryptionPolicy?: {
        includedPaths: {
          path: string;
          clientEncryptionKeyId: string;
          encryptionType: string;
          encryptionAlgorithm: string;
        }[];
        policyFormatVersion: number;
      };
      analyticalStorageTtl?: number;
      restoreParameters?: {
        restoreSource?: string;
        restoreTimestampInUtc?: string;
        restoreWithTtlDisabled?: boolean;
      };
      createMode?: "Default" | "Restore";
      computedProperties?: { name?: string; query?: string }[];
      vectorEmbeddingPolicy?: {
        vectorEmbeddings?: {
          path: string;
          dataType: "float32" | "uint8" | "int8" | "float16";
          distanceFunction: "euclidean" | "cosine" | "dotproduct";
          dimensions: number;
        }[];
      };
      fullTextPolicy?: {
        defaultLanguage?: string;
        fullTextPaths?: { path: string; language?: string }[];
      };
    };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const SqlResourcesCreateUpdateSqlContainerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        indexingPolicy: Schema.optional(
          Schema.Struct({
            automatic: Schema.optional(Schema.Boolean),
            indexingMode: Schema.optional(
              Schema.Literals(["consistent", "lazy", "none"]),
            ),
            includedPaths: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.optional(Schema.String),
                  indexes: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        dataType: Schema.optional(
                          Schema.Literals([
                            "String",
                            "Number",
                            "Point",
                            "Polygon",
                            "LineString",
                            "MultiPolygon",
                          ]),
                        ),
                        precision: Schema.optional(Schema.Number),
                        kind: Schema.optional(
                          Schema.Literals(["Hash", "Range", "Spatial"]),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            excludedPaths: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.optional(Schema.String),
                }),
              ),
            ),
            compositeIndexes: Schema.optional(
              Schema.Array(
                Schema.Array(
                  Schema.Struct({
                    path: Schema.optional(Schema.String),
                    order: Schema.optional(
                      Schema.Literals(["ascending", "descending"]),
                    ),
                  }),
                ),
              ),
            ),
            spatialIndexes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.optional(Schema.String),
                  types: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "Point",
                        "LineString",
                        "Polygon",
                        "MultiPolygon",
                      ]),
                    ),
                  ),
                }),
              ),
            ),
            vectorIndexes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.String,
                  type: Schema.Literals(["flat", "diskANN", "quantizedFlat"]),
                  quantizationByteSize: Schema.optional(Schema.Number),
                  indexingSearchListSize: Schema.optional(Schema.Number),
                  vectorIndexShardKey: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                }),
              ),
            ),
            fullTextIndexes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.String,
                }),
              ),
            ),
          }),
        ),
        partitionKey: Schema.optional(
          Schema.Struct({
            paths: Schema.optional(Schema.Array(Schema.String)),
            kind: Schema.optional(
              Schema.Literals(["Hash", "Range", "MultiHash"]),
            ),
            version: Schema.optional(Schema.Number),
            systemKey: Schema.optional(Schema.Boolean),
          }),
        ),
        defaultTtl: Schema.optional(Schema.Number),
        uniqueKeyPolicy: Schema.optional(
          Schema.Struct({
            uniqueKeys: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  paths: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
          }),
        ),
        conflictResolutionPolicy: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(
              Schema.Literals(["LastWriterWins", "Custom"]),
            ),
            conflictResolutionPath: Schema.optional(Schema.String),
            conflictResolutionProcedure: Schema.optional(Schema.String),
          }),
        ),
        clientEncryptionPolicy: Schema.optional(
          Schema.Struct({
            includedPaths: Schema.Array(
              Schema.Struct({
                path: Schema.String,
                clientEncryptionKeyId: Schema.String,
                encryptionType: Schema.String,
                encryptionAlgorithm: Schema.String,
              }),
            ),
            policyFormatVersion: Schema.Number,
          }),
        ),
        analyticalStorageTtl: Schema.optional(Schema.Number),
        restoreParameters: Schema.optional(
          Schema.Struct({
            restoreSource: Schema.optional(Schema.String),
            restoreTimestampInUtc: Schema.optional(Schema.String),
            restoreWithTtlDisabled: Schema.optional(Schema.Boolean),
          }),
        ),
        createMode: Schema.optional(Schema.Literals(["Default", "Restore"])),
        computedProperties: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              query: Schema.optional(Schema.String),
            }),
          ),
        ),
        vectorEmbeddingPolicy: Schema.optional(
          Schema.Struct({
            vectorEmbeddings: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.String,
                  dataType: Schema.Literals([
                    "float32",
                    "uint8",
                    "int8",
                    "float16",
                  ]),
                  distanceFunction: Schema.Literals([
                    "euclidean",
                    "cosine",
                    "dotproduct",
                  ]),
                  dimensions: Schema.Number,
                }),
              ),
            ),
          }),
        ),
        fullTextPolicy: Schema.optional(
          Schema.Struct({
            defaultLanguage: Schema.optional(Schema.String),
            fullTextPaths: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.String,
                  language: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlContainerInput>;

// Output Schema
export interface SqlResourcesCreateUpdateSqlContainerOutput {
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
export const SqlResourcesCreateUpdateSqlContainerOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlContainerOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB SQL container
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesCreateUpdateSqlContainer =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesCreateUpdateSqlContainerInput,
    outputSchema: SqlResourcesCreateUpdateSqlContainerOutput,
  }));
// Input Schema
export interface SqlResourcesCreateUpdateSqlDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  properties: {
    resource: {
      id: string;
      restoreParameters?: {
        restoreSource?: string;
        restoreTimestampInUtc?: string;
        restoreWithTtlDisabled?: boolean;
      };
      createMode?: "Default" | "Restore";
    };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const SqlResourcesCreateUpdateSqlDatabaseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        restoreParameters: Schema.optional(
          Schema.Struct({
            restoreSource: Schema.optional(Schema.String),
            restoreTimestampInUtc: Schema.optional(Schema.String),
            restoreWithTtlDisabled: Schema.optional(Schema.Boolean),
          }),
        ),
        createMode: Schema.optional(Schema.Literals(["Default", "Restore"])),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlDatabaseInput>;

// Output Schema
export interface SqlResourcesCreateUpdateSqlDatabaseOutput {
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
export const SqlResourcesCreateUpdateSqlDatabaseOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlDatabaseOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB SQL database
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const SqlResourcesCreateUpdateSqlDatabase =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesCreateUpdateSqlDatabaseInput,
    outputSchema: SqlResourcesCreateUpdateSqlDatabaseOutput,
  }));
// Input Schema
export interface SqlResourcesCreateUpdateSqlRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
  properties?: {
    roleDefinitionId?: string;
    scope?: string;
    principalId?: string;
  };
}
export const SqlResourcesCreateUpdateSqlRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        roleDefinitionId: Schema.optional(Schema.String),
        scope: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlRoleAssignmentInput>;

// Output Schema
export interface SqlResourcesCreateUpdateSqlRoleAssignmentOutput {
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
export const SqlResourcesCreateUpdateSqlRoleAssignmentOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlRoleAssignmentOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB SQL Role Assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const SqlResourcesCreateUpdateSqlRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesCreateUpdateSqlRoleAssignmentInput,
    outputSchema: SqlResourcesCreateUpdateSqlRoleAssignmentOutput,
  }));
// Input Schema
export interface SqlResourcesCreateUpdateSqlRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
  properties?: {
    roleName?: string;
    type?: "BuiltInRole" | "CustomRole";
    assignableScopes?: string[];
    permissions?: {
      id?: string;
      dataActions?: string[];
      notDataActions?: string[];
    }[];
  };
}
export const SqlResourcesCreateUpdateSqlRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        roleName: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["BuiltInRole", "CustomRole"])),
        assignableScopes: Schema.optional(Schema.Array(Schema.String)),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlRoleDefinitionInput>;

// Output Schema
export interface SqlResourcesCreateUpdateSqlRoleDefinitionOutput {
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
export const SqlResourcesCreateUpdateSqlRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlRoleDefinitionOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB SQL Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const SqlResourcesCreateUpdateSqlRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesCreateUpdateSqlRoleDefinitionInput,
    outputSchema: SqlResourcesCreateUpdateSqlRoleDefinitionOutput,
  }));
// Input Schema
export interface SqlResourcesCreateUpdateSqlStoredProcedureInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  storedProcedureName: string;
  properties: {
    resource: { id: string; body?: string };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const SqlResourcesCreateUpdateSqlStoredProcedureInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    storedProcedureName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        body: Schema.optional(Schema.String),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures/{storedProcedureName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlStoredProcedureInput>;

// Output Schema
export interface SqlResourcesCreateUpdateSqlStoredProcedureOutput {
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
export const SqlResourcesCreateUpdateSqlStoredProcedureOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlStoredProcedureOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB SQL storedProcedure
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 * @param storedProcedureName - Cosmos DB storedProcedure name.
 */
export const SqlResourcesCreateUpdateSqlStoredProcedure =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesCreateUpdateSqlStoredProcedureInput,
    outputSchema: SqlResourcesCreateUpdateSqlStoredProcedureOutput,
  }));
// Input Schema
export interface SqlResourcesCreateUpdateSqlTriggerInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  triggerName: string;
  properties: {
    resource: {
      id: string;
      body?: string;
      triggerType?: "Pre" | "Post";
      triggerOperation?: "All" | "Create" | "Update" | "Delete" | "Replace";
    };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const SqlResourcesCreateUpdateSqlTriggerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        body: Schema.optional(Schema.String),
        triggerType: Schema.optional(Schema.Literals(["Pre", "Post"])),
        triggerOperation: Schema.optional(
          Schema.Literals(["All", "Create", "Update", "Delete", "Replace"]),
        ),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers/{triggerName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlTriggerInput>;

// Output Schema
export interface SqlResourcesCreateUpdateSqlTriggerOutput {
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
export const SqlResourcesCreateUpdateSqlTriggerOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlTriggerOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB SQL trigger
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 * @param triggerName - Cosmos DB trigger name.
 */
export const SqlResourcesCreateUpdateSqlTrigger =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesCreateUpdateSqlTriggerInput,
    outputSchema: SqlResourcesCreateUpdateSqlTriggerOutput,
  }));
// Input Schema
export interface SqlResourcesCreateUpdateSqlUserDefinedFunctionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  userDefinedFunctionName: string;
  properties: {
    resource: { id: string; body?: string };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const SqlResourcesCreateUpdateSqlUserDefinedFunctionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    userDefinedFunctionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        body: Schema.optional(Schema.String),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions/{userDefinedFunctionName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlUserDefinedFunctionInput>;

// Output Schema
export interface SqlResourcesCreateUpdateSqlUserDefinedFunctionOutput {
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
export const SqlResourcesCreateUpdateSqlUserDefinedFunctionOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesCreateUpdateSqlUserDefinedFunctionOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB SQL userDefinedFunction
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 * @param userDefinedFunctionName - Cosmos DB userDefinedFunction name.
 */
export const SqlResourcesCreateUpdateSqlUserDefinedFunction =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesCreateUpdateSqlUserDefinedFunctionInput,
    outputSchema: SqlResourcesCreateUpdateSqlUserDefinedFunctionOutput,
  }));
// Input Schema
export interface SqlResourcesDeleteSqlContainerInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
}
export const SqlResourcesDeleteSqlContainerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesDeleteSqlContainerInput>;

// Output Schema
export type SqlResourcesDeleteSqlContainerOutput = void;
export const SqlResourcesDeleteSqlContainerOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlResourcesDeleteSqlContainerOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB SQL container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesDeleteSqlContainer =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesDeleteSqlContainerInput,
    outputSchema: SqlResourcesDeleteSqlContainerOutput,
  }));
// Input Schema
export interface SqlResourcesDeleteSqlDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const SqlResourcesDeleteSqlDatabaseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesDeleteSqlDatabaseInput>;

// Output Schema
export type SqlResourcesDeleteSqlDatabaseOutput = void;
export const SqlResourcesDeleteSqlDatabaseOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlResourcesDeleteSqlDatabaseOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB SQL database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const SqlResourcesDeleteSqlDatabase =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesDeleteSqlDatabaseInput,
    outputSchema: SqlResourcesDeleteSqlDatabaseOutput,
  }));
// Input Schema
export interface SqlResourcesDeleteSqlRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
}
export const SqlResourcesDeleteSqlRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesDeleteSqlRoleAssignmentInput>;

// Output Schema
export type SqlResourcesDeleteSqlRoleAssignmentOutput = void;
export const SqlResourcesDeleteSqlRoleAssignmentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlResourcesDeleteSqlRoleAssignmentOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB SQL Role Assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const SqlResourcesDeleteSqlRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesDeleteSqlRoleAssignmentInput,
    outputSchema: SqlResourcesDeleteSqlRoleAssignmentOutput,
  }));
// Input Schema
export interface SqlResourcesDeleteSqlRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
}
export const SqlResourcesDeleteSqlRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesDeleteSqlRoleDefinitionInput>;

// Output Schema
export type SqlResourcesDeleteSqlRoleDefinitionOutput = void;
export const SqlResourcesDeleteSqlRoleDefinitionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlResourcesDeleteSqlRoleDefinitionOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB SQL Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const SqlResourcesDeleteSqlRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesDeleteSqlRoleDefinitionInput,
    outputSchema: SqlResourcesDeleteSqlRoleDefinitionOutput,
  }));
// Input Schema
export interface SqlResourcesDeleteSqlStoredProcedureInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  storedProcedureName: string;
}
export const SqlResourcesDeleteSqlStoredProcedureInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    storedProcedureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures/{storedProcedureName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesDeleteSqlStoredProcedureInput>;

// Output Schema
export type SqlResourcesDeleteSqlStoredProcedureOutput = void;
export const SqlResourcesDeleteSqlStoredProcedureOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlResourcesDeleteSqlStoredProcedureOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB SQL storedProcedure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 * @param storedProcedureName - Cosmos DB storedProcedure name.
 */
export const SqlResourcesDeleteSqlStoredProcedure =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesDeleteSqlStoredProcedureInput,
    outputSchema: SqlResourcesDeleteSqlStoredProcedureOutput,
  }));
// Input Schema
export interface SqlResourcesDeleteSqlTriggerInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  triggerName: string;
}
export const SqlResourcesDeleteSqlTriggerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers/{triggerName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesDeleteSqlTriggerInput>;

// Output Schema
export type SqlResourcesDeleteSqlTriggerOutput = void;
export const SqlResourcesDeleteSqlTriggerOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlResourcesDeleteSqlTriggerOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB SQL trigger.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 * @param triggerName - Cosmos DB trigger name.
 */
export const SqlResourcesDeleteSqlTrigger =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesDeleteSqlTriggerInput,
    outputSchema: SqlResourcesDeleteSqlTriggerOutput,
  }));
// Input Schema
export interface SqlResourcesDeleteSqlUserDefinedFunctionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  userDefinedFunctionName: string;
}
export const SqlResourcesDeleteSqlUserDefinedFunctionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    userDefinedFunctionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions/{userDefinedFunctionName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesDeleteSqlUserDefinedFunctionInput>;

// Output Schema
export type SqlResourcesDeleteSqlUserDefinedFunctionOutput = void;
export const SqlResourcesDeleteSqlUserDefinedFunctionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlResourcesDeleteSqlUserDefinedFunctionOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB SQL userDefinedFunction.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 * @param userDefinedFunctionName - Cosmos DB userDefinedFunction name.
 */
export const SqlResourcesDeleteSqlUserDefinedFunction =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesDeleteSqlUserDefinedFunctionInput,
    outputSchema: SqlResourcesDeleteSqlUserDefinedFunctionOutput,
  }));
// Input Schema
export interface SqlResourcesGetClientEncryptionKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  clientEncryptionKeyName: string;
}
export const SqlResourcesGetClientEncryptionKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    clientEncryptionKeyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/clientEncryptionKeys/{clientEncryptionKeyName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesGetClientEncryptionKeyInput>;

// Output Schema
export interface SqlResourcesGetClientEncryptionKeyOutput {
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
export const SqlResourcesGetClientEncryptionKeyOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesGetClientEncryptionKeyOutput>;

// The operation
/**
 * Gets the ClientEncryptionKey under an existing Azure Cosmos DB SQL database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param clientEncryptionKeyName - Cosmos DB ClientEncryptionKey name.
 */
export const SqlResourcesGetClientEncryptionKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesGetClientEncryptionKeyInput,
    outputSchema: SqlResourcesGetClientEncryptionKeyOutput,
  }));
// Input Schema
export interface SqlResourcesGetSqlContainerInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
}
export const SqlResourcesGetSqlContainerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesGetSqlContainerInput>;

// Output Schema
export interface SqlResourcesGetSqlContainerOutput {
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
export const SqlResourcesGetSqlContainerOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesGetSqlContainerOutput>;

// The operation
/**
 * Gets the SQL container under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesGetSqlContainer = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlResourcesGetSqlContainerInput,
  outputSchema: SqlResourcesGetSqlContainerOutput,
}));
// Input Schema
export interface SqlResourcesGetSqlContainerThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
}
export const SqlResourcesGetSqlContainerThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesGetSqlContainerThroughputInput>;

// Output Schema
export interface SqlResourcesGetSqlContainerThroughputOutput {
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
export const SqlResourcesGetSqlContainerThroughputOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesGetSqlContainerThroughputOutput>;

// The operation
/**
 * Gets the RUs per second of the SQL container under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesGetSqlContainerThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesGetSqlContainerThroughputInput,
    outputSchema: SqlResourcesGetSqlContainerThroughputOutput,
  }));
// Input Schema
export interface SqlResourcesGetSqlDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const SqlResourcesGetSqlDatabaseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesGetSqlDatabaseInput>;

// Output Schema
export interface SqlResourcesGetSqlDatabaseOutput {
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
export const SqlResourcesGetSqlDatabaseOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesGetSqlDatabaseOutput>;

// The operation
/**
 * Gets the SQL database under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const SqlResourcesGetSqlDatabase = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlResourcesGetSqlDatabaseInput,
  outputSchema: SqlResourcesGetSqlDatabaseOutput,
}));
// Input Schema
export interface SqlResourcesGetSqlDatabaseThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const SqlResourcesGetSqlDatabaseThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesGetSqlDatabaseThroughputInput>;

// Output Schema
export interface SqlResourcesGetSqlDatabaseThroughputOutput {
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
export const SqlResourcesGetSqlDatabaseThroughputOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesGetSqlDatabaseThroughputOutput>;

// The operation
/**
 * Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const SqlResourcesGetSqlDatabaseThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesGetSqlDatabaseThroughputInput,
    outputSchema: SqlResourcesGetSqlDatabaseThroughputOutput,
  }));
// Input Schema
export interface SqlResourcesGetSqlRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
}
export const SqlResourcesGetSqlRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesGetSqlRoleAssignmentInput>;

// Output Schema
export interface SqlResourcesGetSqlRoleAssignmentOutput {
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
export const SqlResourcesGetSqlRoleAssignmentOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesGetSqlRoleAssignmentOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB SQL Role Assignment with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const SqlResourcesGetSqlRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesGetSqlRoleAssignmentInput,
    outputSchema: SqlResourcesGetSqlRoleAssignmentOutput,
  }));
// Input Schema
export interface SqlResourcesGetSqlRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
}
export const SqlResourcesGetSqlRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesGetSqlRoleDefinitionInput>;

// Output Schema
export interface SqlResourcesGetSqlRoleDefinitionOutput {
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
export const SqlResourcesGetSqlRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesGetSqlRoleDefinitionOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB SQL Role Definition with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const SqlResourcesGetSqlRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesGetSqlRoleDefinitionInput,
    outputSchema: SqlResourcesGetSqlRoleDefinitionOutput,
  }));
// Input Schema
export interface SqlResourcesGetSqlStoredProcedureInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  storedProcedureName: string;
}
export const SqlResourcesGetSqlStoredProcedureInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    storedProcedureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures/{storedProcedureName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesGetSqlStoredProcedureInput>;

// Output Schema
export interface SqlResourcesGetSqlStoredProcedureOutput {
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
export const SqlResourcesGetSqlStoredProcedureOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesGetSqlStoredProcedureOutput>;

// The operation
/**
 * Gets the SQL storedProcedure under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 * @param storedProcedureName - Cosmos DB storedProcedure name.
 */
export const SqlResourcesGetSqlStoredProcedure =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesGetSqlStoredProcedureInput,
    outputSchema: SqlResourcesGetSqlStoredProcedureOutput,
  }));
// Input Schema
export interface SqlResourcesGetSqlTriggerInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  triggerName: string;
}
export const SqlResourcesGetSqlTriggerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers/{triggerName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesGetSqlTriggerInput>;

// Output Schema
export interface SqlResourcesGetSqlTriggerOutput {
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
export const SqlResourcesGetSqlTriggerOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesGetSqlTriggerOutput>;

// The operation
/**
 * Gets the SQL trigger under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 * @param triggerName - Cosmos DB trigger name.
 */
export const SqlResourcesGetSqlTrigger = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlResourcesGetSqlTriggerInput,
  outputSchema: SqlResourcesGetSqlTriggerOutput,
}));
// Input Schema
export interface SqlResourcesGetSqlUserDefinedFunctionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  userDefinedFunctionName: string;
}
export const SqlResourcesGetSqlUserDefinedFunctionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    userDefinedFunctionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions/{userDefinedFunctionName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesGetSqlUserDefinedFunctionInput>;

// Output Schema
export interface SqlResourcesGetSqlUserDefinedFunctionOutput {
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
export const SqlResourcesGetSqlUserDefinedFunctionOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesGetSqlUserDefinedFunctionOutput>;

// The operation
/**
 * Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 * @param userDefinedFunctionName - Cosmos DB userDefinedFunction name.
 */
export const SqlResourcesGetSqlUserDefinedFunction =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesGetSqlUserDefinedFunctionInput,
    outputSchema: SqlResourcesGetSqlUserDefinedFunctionOutput,
  }));
// Input Schema
export interface SqlResourcesListClientEncryptionKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const SqlResourcesListClientEncryptionKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/clientEncryptionKeys",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesListClientEncryptionKeysInput>;

// Output Schema
export interface SqlResourcesListClientEncryptionKeysOutput {
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
export const SqlResourcesListClientEncryptionKeysOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesListClientEncryptionKeysOutput>;

// The operation
/**
 * Lists the ClientEncryptionKeys under an existing Azure Cosmos DB SQL database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const SqlResourcesListClientEncryptionKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesListClientEncryptionKeysInput,
    outputSchema: SqlResourcesListClientEncryptionKeysOutput,
  }));
// Input Schema
export interface SqlResourcesListSqlContainersInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const SqlResourcesListSqlContainersInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesListSqlContainersInput>;

// Output Schema
export interface SqlResourcesListSqlContainersOutput {
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
export const SqlResourcesListSqlContainersOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesListSqlContainersOutput>;

// The operation
/**
 * Lists the SQL container under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const SqlResourcesListSqlContainers =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesListSqlContainersInput,
    outputSchema: SqlResourcesListSqlContainersOutput,
  }));
// Input Schema
export interface SqlResourcesListSqlDatabasesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const SqlResourcesListSqlDatabasesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesListSqlDatabasesInput>;

// Output Schema
export interface SqlResourcesListSqlDatabasesOutput {
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
export const SqlResourcesListSqlDatabasesOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesListSqlDatabasesOutput>;

// The operation
/**
 * Lists the SQL databases under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const SqlResourcesListSqlDatabases =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesListSqlDatabasesInput,
    outputSchema: SqlResourcesListSqlDatabasesOutput,
  }));
// Input Schema
export interface SqlResourcesListSqlRoleAssignmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const SqlResourcesListSqlRoleAssignmentsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlRoleAssignments",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesListSqlRoleAssignmentsInput>;

// Output Schema
export interface SqlResourcesListSqlRoleAssignmentsOutput {
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
export const SqlResourcesListSqlRoleAssignmentsOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesListSqlRoleAssignmentsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB SQL Role Assignments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const SqlResourcesListSqlRoleAssignments =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesListSqlRoleAssignmentsInput,
    outputSchema: SqlResourcesListSqlRoleAssignmentsOutput,
  }));
// Input Schema
export interface SqlResourcesListSqlRoleDefinitionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const SqlResourcesListSqlRoleDefinitionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlRoleDefinitions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesListSqlRoleDefinitionsInput>;

// Output Schema
export interface SqlResourcesListSqlRoleDefinitionsOutput {
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
export const SqlResourcesListSqlRoleDefinitionsOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesListSqlRoleDefinitionsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB SQL Role Definitions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const SqlResourcesListSqlRoleDefinitions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesListSqlRoleDefinitionsInput,
    outputSchema: SqlResourcesListSqlRoleDefinitionsOutput,
  }));
// Input Schema
export interface SqlResourcesListSqlStoredProceduresInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
}
export const SqlResourcesListSqlStoredProceduresInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesListSqlStoredProceduresInput>;

// Output Schema
export interface SqlResourcesListSqlStoredProceduresOutput {
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
export const SqlResourcesListSqlStoredProceduresOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesListSqlStoredProceduresOutput>;

// The operation
/**
 * Lists the SQL storedProcedure under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesListSqlStoredProcedures =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesListSqlStoredProceduresInput,
    outputSchema: SqlResourcesListSqlStoredProceduresOutput,
  }));
// Input Schema
export interface SqlResourcesListSqlTriggersInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
}
export const SqlResourcesListSqlTriggersInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesListSqlTriggersInput>;

// Output Schema
export interface SqlResourcesListSqlTriggersOutput {
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
export const SqlResourcesListSqlTriggersOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesListSqlTriggersOutput>;

// The operation
/**
 * Lists the SQL trigger under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesListSqlTriggers = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlResourcesListSqlTriggersInput,
  outputSchema: SqlResourcesListSqlTriggersOutput,
}));
// Input Schema
export interface SqlResourcesListSqlUserDefinedFunctionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
}
export const SqlResourcesListSqlUserDefinedFunctionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesListSqlUserDefinedFunctionsInput>;

// Output Schema
export interface SqlResourcesListSqlUserDefinedFunctionsOutput {
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
export const SqlResourcesListSqlUserDefinedFunctionsOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesListSqlUserDefinedFunctionsOutput>;

// The operation
/**
 * Lists the SQL userDefinedFunction under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesListSqlUserDefinedFunctions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesListSqlUserDefinedFunctionsInput,
    outputSchema: SqlResourcesListSqlUserDefinedFunctionsOutput,
  }));
// Input Schema
export interface SqlResourcesMigrateSqlContainerToAutoscaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
}
export const SqlResourcesMigrateSqlContainerToAutoscaleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/throughputSettings/default/migrateToAutoscale",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesMigrateSqlContainerToAutoscaleInput>;

// Output Schema
export interface SqlResourcesMigrateSqlContainerToAutoscaleOutput {
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
export const SqlResourcesMigrateSqlContainerToAutoscaleOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesMigrateSqlContainerToAutoscaleOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB SQL container from manual throughput to autoscale
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesMigrateSqlContainerToAutoscale =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesMigrateSqlContainerToAutoscaleInput,
    outputSchema: SqlResourcesMigrateSqlContainerToAutoscaleOutput,
  }));
// Input Schema
export interface SqlResourcesMigrateSqlContainerToManualThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
}
export const SqlResourcesMigrateSqlContainerToManualThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/throughputSettings/default/migrateToManualThroughput",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesMigrateSqlContainerToManualThroughputInput>;

// Output Schema
export interface SqlResourcesMigrateSqlContainerToManualThroughputOutput {
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
export const SqlResourcesMigrateSqlContainerToManualThroughputOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesMigrateSqlContainerToManualThroughputOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB SQL container from autoscale to manual throughput
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesMigrateSqlContainerToManualThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesMigrateSqlContainerToManualThroughputInput,
    outputSchema: SqlResourcesMigrateSqlContainerToManualThroughputOutput,
  }));
// Input Schema
export interface SqlResourcesMigrateSqlDatabaseToAutoscaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const SqlResourcesMigrateSqlDatabaseToAutoscaleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/throughputSettings/default/migrateToAutoscale",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesMigrateSqlDatabaseToAutoscaleInput>;

// Output Schema
export interface SqlResourcesMigrateSqlDatabaseToAutoscaleOutput {
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
export const SqlResourcesMigrateSqlDatabaseToAutoscaleOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesMigrateSqlDatabaseToAutoscaleOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB SQL database from manual throughput to autoscale
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const SqlResourcesMigrateSqlDatabaseToAutoscale =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesMigrateSqlDatabaseToAutoscaleInput,
    outputSchema: SqlResourcesMigrateSqlDatabaseToAutoscaleOutput,
  }));
// Input Schema
export interface SqlResourcesMigrateSqlDatabaseToManualThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
}
export const SqlResourcesMigrateSqlDatabaseToManualThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/throughputSettings/default/migrateToManualThroughput",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesMigrateSqlDatabaseToManualThroughputInput>;

// Output Schema
export interface SqlResourcesMigrateSqlDatabaseToManualThroughputOutput {
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
export const SqlResourcesMigrateSqlDatabaseToManualThroughputOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesMigrateSqlDatabaseToManualThroughputOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB SQL database from autoscale to manual throughput
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const SqlResourcesMigrateSqlDatabaseToManualThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesMigrateSqlDatabaseToManualThroughputInput,
    outputSchema: SqlResourcesMigrateSqlDatabaseToManualThroughputOutput,
  }));
// Input Schema
export interface SqlResourcesRetrieveContinuousBackupInformationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  location?: string;
}
export const SqlResourcesRetrieveContinuousBackupInformationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/retrieveContinuousBackupInformation",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesRetrieveContinuousBackupInformationInput>;

// Output Schema
export interface SqlResourcesRetrieveContinuousBackupInformationOutput {
  continuousBackupInformation?: { latestRestorableTimestamp?: string };
}
export const SqlResourcesRetrieveContinuousBackupInformationOutput =
  /*@__PURE__*/ Schema.Struct({
    continuousBackupInformation: Schema.optional(
      Schema.Struct({
        latestRestorableTimestamp: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<SqlResourcesRetrieveContinuousBackupInformationOutput>;

// The operation
/**
 * Retrieves continuous backup information for a container resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesRetrieveContinuousBackupInformation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesRetrieveContinuousBackupInformationInput,
    outputSchema: SqlResourcesRetrieveContinuousBackupInformationOutput,
  }));
// Input Schema
export interface SqlResourcesUpdateSqlContainerThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  containerName: string;
  properties: {
    resource: {
      throughput?: number;
      autoscaleSettings?: {
        maxThroughput: number;
        autoUpgradePolicy?: {
          throughputPolicy?: { isEnabled?: boolean; incrementPercent?: number };
        };
        targetMaxThroughput?: number;
      };
      minimumThroughput?: string;
      offerReplacePending?: string;
      instantMaximumThroughput?: string;
      softAllowedMaximumThroughput?: string;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const SqlResourcesUpdateSqlContainerThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    containerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        throughput: Schema.optional(Schema.Number),
        autoscaleSettings: Schema.optional(
          Schema.Struct({
            maxThroughput: Schema.Number,
            autoUpgradePolicy: Schema.optional(
              Schema.Struct({
                throughputPolicy: Schema.optional(
                  Schema.Struct({
                    isEnabled: Schema.optional(Schema.Boolean),
                    incrementPercent: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            targetMaxThroughput: Schema.optional(Schema.Number),
          }),
        ),
        minimumThroughput: Schema.optional(Schema.String),
        offerReplacePending: Schema.optional(Schema.String),
        instantMaximumThroughput: Schema.optional(Schema.String),
        softAllowedMaximumThroughput: Schema.optional(Schema.String),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesUpdateSqlContainerThroughputInput>;

// Output Schema
export interface SqlResourcesUpdateSqlContainerThroughputOutput {
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
export const SqlResourcesUpdateSqlContainerThroughputOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesUpdateSqlContainerThroughputOutput>;

// The operation
/**
 * Update RUs per second of an Azure Cosmos DB SQL container
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 * @param containerName - Cosmos DB container name.
 */
export const SqlResourcesUpdateSqlContainerThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesUpdateSqlContainerThroughputInput,
    outputSchema: SqlResourcesUpdateSqlContainerThroughputOutput,
  }));
// Input Schema
export interface SqlResourcesUpdateSqlDatabaseThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  databaseName: string;
  properties: {
    resource: {
      throughput?: number;
      autoscaleSettings?: {
        maxThroughput: number;
        autoUpgradePolicy?: {
          throughputPolicy?: { isEnabled?: boolean; incrementPercent?: number };
        };
        targetMaxThroughput?: number;
      };
      minimumThroughput?: string;
      offerReplacePending?: string;
      instantMaximumThroughput?: string;
      softAllowedMaximumThroughput?: string;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const SqlResourcesUpdateSqlDatabaseThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        throughput: Schema.optional(Schema.Number),
        autoscaleSettings: Schema.optional(
          Schema.Struct({
            maxThroughput: Schema.Number,
            autoUpgradePolicy: Schema.optional(
              Schema.Struct({
                throughputPolicy: Schema.optional(
                  Schema.Struct({
                    isEnabled: Schema.optional(Schema.Boolean),
                    incrementPercent: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            targetMaxThroughput: Schema.optional(Schema.Number),
          }),
        ),
        minimumThroughput: Schema.optional(Schema.String),
        offerReplacePending: Schema.optional(Schema.String),
        instantMaximumThroughput: Schema.optional(Schema.String),
        softAllowedMaximumThroughput: Schema.optional(Schema.String),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<SqlResourcesUpdateSqlDatabaseThroughputInput>;

// Output Schema
export interface SqlResourcesUpdateSqlDatabaseThroughputOutput {
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
export const SqlResourcesUpdateSqlDatabaseThroughputOutput =
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
  }) as unknown as Schema.Codec<SqlResourcesUpdateSqlDatabaseThroughputOutput>;

// The operation
/**
 * Update RUs per second of an Azure Cosmos DB SQL database
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param databaseName - Cosmos DB database name.
 */
export const SqlResourcesUpdateSqlDatabaseThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlResourcesUpdateSqlDatabaseThroughputInput,
    outputSchema: SqlResourcesUpdateSqlDatabaseThroughputOutput,
  }));
// Input Schema
export interface TableResourcesCreateUpdateTableInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
  properties: {
    resource: {
      id: string;
      restoreParameters?: {
        restoreSource?: string;
        restoreTimestampInUtc?: string;
        restoreWithTtlDisabled?: boolean;
      };
      createMode?: "Default" | "Restore";
    };
    options?: {
      throughput?: number;
      autoscaleSettings?: { maxThroughput?: number };
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const TableResourcesCreateUpdateTableInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        id: Schema.String,
        restoreParameters: Schema.optional(
          Schema.Struct({
            restoreSource: Schema.optional(Schema.String),
            restoreTimestampInUtc: Schema.optional(Schema.String),
            restoreWithTtlDisabled: Schema.optional(Schema.Boolean),
          }),
        ),
        createMode: Schema.optional(Schema.Literals(["Default", "Restore"])),
      }),
      options: Schema.optional(
        Schema.Struct({
          throughput: Schema.optional(Schema.Number),
          autoscaleSettings: Schema.optional(
            Schema.Struct({
              maxThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesCreateUpdateTableInput>;

// Output Schema
export interface TableResourcesCreateUpdateTableOutput {
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
export const TableResourcesCreateUpdateTableOutput =
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
  }) as unknown as Schema.Codec<TableResourcesCreateUpdateTableOutput>;

// The operation
/**
 * Create or update an Azure Cosmos DB Table
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param tableName - Cosmos DB table name.
 */
export const TableResourcesCreateUpdateTable =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesCreateUpdateTableInput,
    outputSchema: TableResourcesCreateUpdateTableOutput,
  }));
// Input Schema
export interface TableResourcesCreateUpdateTableRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
  properties?: {
    roleDefinitionId?: string;
    scope?: string;
    principalId?: string;
    provisioningState?: string;
  };
}
export const TableResourcesCreateUpdateTableRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        roleDefinitionId: Schema.optional(Schema.String),
        scope: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tableRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesCreateUpdateTableRoleAssignmentInput>;

// Output Schema
export interface TableResourcesCreateUpdateTableRoleAssignmentOutput {
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
export const TableResourcesCreateUpdateTableRoleAssignmentOutput =
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
  }) as unknown as Schema.Codec<TableResourcesCreateUpdateTableRoleAssignmentOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB Table Role Assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const TableResourcesCreateUpdateTableRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesCreateUpdateTableRoleAssignmentInput,
    outputSchema: TableResourcesCreateUpdateTableRoleAssignmentOutput,
  }));
// Input Schema
export interface TableResourcesCreateUpdateTableRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
  properties?: {
    id?: string;
    roleName?: string;
    type?: "BuiltInRole" | "CustomRole";
    assignableScopes?: string[];
    permissions?: {
      id?: string;
      dataActions?: string[];
      notDataActions?: string[];
    }[];
  };
}
export const TableResourcesCreateUpdateTableRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        roleName: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["BuiltInRole", "CustomRole"])),
        assignableScopes: Schema.optional(Schema.Array(Schema.String)),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tableRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesCreateUpdateTableRoleDefinitionInput>;

// Output Schema
export interface TableResourcesCreateUpdateTableRoleDefinitionOutput {
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
export const TableResourcesCreateUpdateTableRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<TableResourcesCreateUpdateTableRoleDefinitionOutput>;

// The operation
/**
 * Creates or updates an Azure Cosmos DB Table Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const TableResourcesCreateUpdateTableRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesCreateUpdateTableRoleDefinitionInput,
    outputSchema: TableResourcesCreateUpdateTableRoleDefinitionOutput,
  }));
// Input Schema
export interface TableResourcesDeleteTableInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
}
export const TableResourcesDeleteTableInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesDeleteTableInput>;

// Output Schema
export type TableResourcesDeleteTableOutput = void;
export const TableResourcesDeleteTableOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TableResourcesDeleteTableOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Table.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param tableName - Cosmos DB table name.
 */
export const TableResourcesDeleteTable = /*@__PURE__*/ API.make(() => ({
  inputSchema: TableResourcesDeleteTableInput,
  outputSchema: TableResourcesDeleteTableOutput,
}));
// Input Schema
export interface TableResourcesDeleteTableRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
}
export const TableResourcesDeleteTableRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tableRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesDeleteTableRoleAssignmentInput>;

// Output Schema
export type TableResourcesDeleteTableRoleAssignmentOutput = void;
export const TableResourcesDeleteTableRoleAssignmentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TableResourcesDeleteTableRoleAssignmentOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Table Role Assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const TableResourcesDeleteTableRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesDeleteTableRoleAssignmentInput,
    outputSchema: TableResourcesDeleteTableRoleAssignmentOutput,
  }));
// Input Schema
export interface TableResourcesDeleteTableRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
}
export const TableResourcesDeleteTableRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tableRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesDeleteTableRoleDefinitionInput>;

// Output Schema
export type TableResourcesDeleteTableRoleDefinitionOutput = void;
export const TableResourcesDeleteTableRoleDefinitionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TableResourcesDeleteTableRoleDefinitionOutput>;

// The operation
/**
 * Deletes an existing Azure Cosmos DB Table Role Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const TableResourcesDeleteTableRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesDeleteTableRoleDefinitionInput,
    outputSchema: TableResourcesDeleteTableRoleDefinitionOutput,
  }));
// Input Schema
export interface TableResourcesGetTableInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
}
export const TableResourcesGetTableInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesGetTableInput>;

// Output Schema
export interface TableResourcesGetTableOutput {
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
export const TableResourcesGetTableOutput =
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
  }) as unknown as Schema.Codec<TableResourcesGetTableOutput>;

// The operation
/**
 * Gets the Tables under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param tableName - Cosmos DB table name.
 */
export const TableResourcesGetTable = /*@__PURE__*/ API.make(() => ({
  inputSchema: TableResourcesGetTableInput,
  outputSchema: TableResourcesGetTableOutput,
}));
// Input Schema
export interface TableResourcesGetTableRoleAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleAssignmentId: string;
}
export const TableResourcesGetTableRoleAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tableRoleAssignments/{roleAssignmentId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesGetTableRoleAssignmentInput>;

// Output Schema
export interface TableResourcesGetTableRoleAssignmentOutput {
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
export const TableResourcesGetTableRoleAssignmentOutput =
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
  }) as unknown as Schema.Codec<TableResourcesGetTableRoleAssignmentOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB Table Role Assignment with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleAssignmentId - The GUID for the Role Assignment.
 */
export const TableResourcesGetTableRoleAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesGetTableRoleAssignmentInput,
    outputSchema: TableResourcesGetTableRoleAssignmentOutput,
  }));
// Input Schema
export interface TableResourcesGetTableRoleDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  roleDefinitionId: string;
}
export const TableResourcesGetTableRoleDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tableRoleDefinitions/{roleDefinitionId}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesGetTableRoleDefinitionInput>;

// Output Schema
export interface TableResourcesGetTableRoleDefinitionOutput {
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
export const TableResourcesGetTableRoleDefinitionOutput =
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
  }) as unknown as Schema.Codec<TableResourcesGetTableRoleDefinitionOutput>;

// The operation
/**
 * Retrieves the properties of an existing Azure Cosmos DB Table Role Definition with the given Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param roleDefinitionId - The GUID for the Role Definition.
 */
export const TableResourcesGetTableRoleDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesGetTableRoleDefinitionInput,
    outputSchema: TableResourcesGetTableRoleDefinitionOutput,
  }));
// Input Schema
export interface TableResourcesGetTableThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
}
export const TableResourcesGetTableThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesGetTableThroughputInput>;

// Output Schema
export interface TableResourcesGetTableThroughputOutput {
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
export const TableResourcesGetTableThroughputOutput =
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
  }) as unknown as Schema.Codec<TableResourcesGetTableThroughputOutput>;

// The operation
/**
 * Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the provided name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param tableName - Cosmos DB table name.
 */
export const TableResourcesGetTableThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesGetTableThroughputInput,
    outputSchema: TableResourcesGetTableThroughputOutput,
  }));
// Input Schema
export interface TableResourcesListTableRoleAssignmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const TableResourcesListTableRoleAssignmentsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tableRoleAssignments",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesListTableRoleAssignmentsInput>;

// Output Schema
export interface TableResourcesListTableRoleAssignmentsOutput {
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
export const TableResourcesListTableRoleAssignmentsOutput =
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
  }) as unknown as Schema.Codec<TableResourcesListTableRoleAssignmentsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB Table Role Assignments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const TableResourcesListTableRoleAssignments =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesListTableRoleAssignmentsInput,
    outputSchema: TableResourcesListTableRoleAssignmentsOutput,
  }));
// Input Schema
export interface TableResourcesListTableRoleDefinitionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const TableResourcesListTableRoleDefinitionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tableRoleDefinitions",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesListTableRoleDefinitionsInput>;

// Output Schema
export interface TableResourcesListTableRoleDefinitionsOutput {
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
export const TableResourcesListTableRoleDefinitionsOutput =
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
  }) as unknown as Schema.Codec<TableResourcesListTableRoleDefinitionsOutput>;

// The operation
/**
 * Retrieves the list of all Azure Cosmos DB Table Role Definitions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const TableResourcesListTableRoleDefinitions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesListTableRoleDefinitionsInput,
    outputSchema: TableResourcesListTableRoleDefinitionsOutput,
  }));
// Input Schema
export interface TableResourcesListTablesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const TableResourcesListTablesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesListTablesInput>;

// Output Schema
export interface TableResourcesListTablesOutput {
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
export const TableResourcesListTablesOutput =
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
  }) as unknown as Schema.Codec<TableResourcesListTablesOutput>;

// The operation
/**
 * Lists the Tables under an existing Azure Cosmos DB database account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 */
export const TableResourcesListTables = /*@__PURE__*/ API.make(() => ({
  inputSchema: TableResourcesListTablesInput,
  outputSchema: TableResourcesListTablesOutput,
}));
// Input Schema
export interface TableResourcesMigrateTableToAutoscaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
}
export const TableResourcesMigrateTableToAutoscaleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default/migrateToAutoscale",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesMigrateTableToAutoscaleInput>;

// Output Schema
export interface TableResourcesMigrateTableToAutoscaleOutput {
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
export const TableResourcesMigrateTableToAutoscaleOutput =
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
  }) as unknown as Schema.Codec<TableResourcesMigrateTableToAutoscaleOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB Table from manual throughput to autoscale
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param tableName - Cosmos DB table name.
 */
export const TableResourcesMigrateTableToAutoscale =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesMigrateTableToAutoscaleInput,
    outputSchema: TableResourcesMigrateTableToAutoscaleOutput,
  }));
// Input Schema
export interface TableResourcesMigrateTableToManualThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
}
export const TableResourcesMigrateTableToManualThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default/migrateToManualThroughput",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesMigrateTableToManualThroughputInput>;

// Output Schema
export interface TableResourcesMigrateTableToManualThroughputOutput {
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
export const TableResourcesMigrateTableToManualThroughputOutput =
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
  }) as unknown as Schema.Codec<TableResourcesMigrateTableToManualThroughputOutput>;

// The operation
/**
 * Migrate an Azure Cosmos DB Table from autoscale to manual throughput
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param tableName - Cosmos DB table name.
 */
export const TableResourcesMigrateTableToManualThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesMigrateTableToManualThroughputInput,
    outputSchema: TableResourcesMigrateTableToManualThroughputOutput,
  }));
// Input Schema
export interface TableResourcesRetrieveContinuousBackupInformationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
  location?: string;
}
export const TableResourcesRetrieveContinuousBackupInformationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/retrieveContinuousBackupInformation",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesRetrieveContinuousBackupInformationInput>;

// Output Schema
export interface TableResourcesRetrieveContinuousBackupInformationOutput {
  continuousBackupInformation?: { latestRestorableTimestamp?: string };
}
export const TableResourcesRetrieveContinuousBackupInformationOutput =
  /*@__PURE__*/ Schema.Struct({
    continuousBackupInformation: Schema.optional(
      Schema.Struct({
        latestRestorableTimestamp: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<TableResourcesRetrieveContinuousBackupInformationOutput>;

// The operation
/**
 * Retrieves continuous backup information for a table.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param tableName - Cosmos DB table name.
 */
export const TableResourcesRetrieveContinuousBackupInformation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesRetrieveContinuousBackupInformationInput,
    outputSchema: TableResourcesRetrieveContinuousBackupInformationOutput,
  }));
// Input Schema
export interface TableResourcesUpdateTableThroughputInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tableName: string;
  properties: {
    resource: {
      throughput?: number;
      autoscaleSettings?: {
        maxThroughput: number;
        autoUpgradePolicy?: {
          throughputPolicy?: { isEnabled?: boolean; incrementPercent?: number };
        };
        targetMaxThroughput?: number;
      };
      minimumThroughput?: string;
      offerReplacePending?: string;
      instantMaximumThroughput?: string;
      softAllowedMaximumThroughput?: string;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const TableResourcesUpdateTableThroughputInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tableName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      resource: Schema.Struct({
        throughput: Schema.optional(Schema.Number),
        autoscaleSettings: Schema.optional(
          Schema.Struct({
            maxThroughput: Schema.Number,
            autoUpgradePolicy: Schema.optional(
              Schema.Struct({
                throughputPolicy: Schema.optional(
                  Schema.Struct({
                    isEnabled: Schema.optional(Schema.Boolean),
                    incrementPercent: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            targetMaxThroughput: Schema.optional(Schema.Number),
          }),
        ),
        minimumThroughput: Schema.optional(Schema.String),
        offerReplacePending: Schema.optional(Schema.String),
        instantMaximumThroughput: Schema.optional(Schema.String),
        softAllowedMaximumThroughput: Schema.optional(Schema.String),
      }),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<TableResourcesUpdateTableThroughputInput>;

// Output Schema
export interface TableResourcesUpdateTableThroughputOutput {
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
export const TableResourcesUpdateTableThroughputOutput =
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
  }) as unknown as Schema.Codec<TableResourcesUpdateTableThroughputOutput>;

// The operation
/**
 * Update RUs per second of an Azure Cosmos DB Table
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Cosmos DB database account name.
 * @param tableName - Cosmos DB table name.
 */
export const TableResourcesUpdateTableThroughput =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TableResourcesUpdateTableThroughputInput,
    outputSchema: TableResourcesUpdateTableThroughputOutput,
  }));
