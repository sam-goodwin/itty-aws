/**
 * Azure Postgresqlhsc API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ClustersCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  type: "Microsoft.DBforPostgreSQL/serverGroupsv2";
}
export const ClustersCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.DBforPostgreSQL/serverGroupsv2"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/checkNameAvailability",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<ClustersCheckNameAvailabilityInput>;

// Output Schema
export interface ClustersCheckNameAvailabilityOutput {
  message?: string;
  nameAvailable?: boolean;
  name?: string;
  type?: string;
}
export const ClustersCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClustersCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks availability of a cluster name. Cluster names should be globally unique; at least 3 characters and at most 40 characters long; they must only contain lowercase letters, numbers, and hyphens; and must not start or end with a hyphen.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ClustersCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClustersCheckNameAvailabilityInput,
    outputSchema: ClustersCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ClustersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    administratorLogin?: string;
    administratorLoginPassword?: string | Redacted.Redacted<string>;
    provisioningState?: string;
    state?: string;
    postgresqlVersion?: string;
    citusVersion?: string;
    maintenanceWindow?: {
      customWindow?: string;
      startHour?: number;
      startMinute?: number;
      dayOfWeek?: number;
    };
    preferredPrimaryZone?: string;
    enableShardsOnCoordinator?: boolean;
    enableHa?: boolean;
    coordinatorServerEdition?: string;
    coordinatorStorageQuotaInMb?: number;
    coordinatorVCores?: number;
    coordinatorEnablePublicIpAccess?: boolean;
    nodeServerEdition?: string;
    nodeCount?: number;
    nodeStorageQuotaInMb?: number;
    nodeVCores?: number;
    nodeEnablePublicIpAccess?: boolean;
    serverNames?: { name?: string; fullyQualifiedDomainName?: string }[];
    sourceResourceId?: string;
    sourceLocation?: string;
    pointInTimeUTC?: string;
    readReplicas?: string[];
    earliestRestoreTime?: string;
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
export const ClustersCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      administratorLogin: Schema.optional(Schema.String),
      administratorLoginPassword: Schema.optional(SensitiveString),
      provisioningState: Schema.optional(Schema.String),
      state: Schema.optional(Schema.String),
      postgresqlVersion: Schema.optional(Schema.String),
      citusVersion: Schema.optional(Schema.String),
      maintenanceWindow: Schema.optional(
        Schema.Struct({
          customWindow: Schema.optional(Schema.String),
          startHour: Schema.optional(Schema.Number),
          startMinute: Schema.optional(Schema.Number),
          dayOfWeek: Schema.optional(Schema.Number),
        }),
      ),
      preferredPrimaryZone: Schema.optional(Schema.String),
      enableShardsOnCoordinator: Schema.optional(Schema.Boolean),
      enableHa: Schema.optional(Schema.Boolean),
      coordinatorServerEdition: Schema.optional(Schema.String),
      coordinatorStorageQuotaInMb: Schema.optional(Schema.Number),
      coordinatorVCores: Schema.optional(Schema.Number),
      coordinatorEnablePublicIpAccess: Schema.optional(Schema.Boolean),
      nodeServerEdition: Schema.optional(Schema.String),
      nodeCount: Schema.optional(Schema.Number),
      nodeStorageQuotaInMb: Schema.optional(Schema.Number),
      nodeVCores: Schema.optional(Schema.Number),
      nodeEnablePublicIpAccess: Schema.optional(Schema.Boolean),
      serverNames: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            fullyQualifiedDomainName: Schema.optional(Schema.String),
          }),
        ),
      ),
      sourceResourceId: Schema.optional(Schema.String),
      sourceLocation: Schema.optional(Schema.String),
      pointInTimeUTC: Schema.optional(Schema.String),
      readReplicas: Schema.optional(Schema.Array(Schema.String)),
      earliestRestoreTime: Schema.optional(Schema.String),
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<ClustersCreateInput>;

// Output Schema
export interface ClustersCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ClustersCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ClustersCreateOutput>;

// The operation
/**
 * Creates a new cluster with servers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersCreateInput,
  outputSchema: ClustersCreateOutput,
}));
// Input Schema
export interface ClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

// The operation
/**
 * Deletes a cluster together with servers in it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export interface ClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<ClustersGetInput>;

// Output Schema
export interface ClustersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ClustersGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ClustersGetOutput>;

// The operation
/**
 * Gets information about a cluster such as compute and storage configuration and cluster lifecycle metadata such as cluster creation date and time.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export interface ClustersListInput {
  subscriptionId: string;
}
export const ClustersListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<ClustersListInput>;

// Output Schema
export interface ClustersListOutput {
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
export const ClustersListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ClustersListOutput>;

// The operation
/**
 * Lists all clusters in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ClustersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListInput,
  outputSchema: ClustersListOutput,
}));
// Input Schema
export interface ClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<ClustersListByResourceGroupInput>;

// Output Schema
export interface ClustersListByResourceGroupOutput {
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
export const ClustersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ClustersListByResourceGroupOutput>;

// The operation
/**
 * Lists all clusters in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListByResourceGroupInput,
  outputSchema: ClustersListByResourceGroupOutput,
}));
// Input Schema
export interface ClustersPromoteReadReplicaInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersPromoteReadReplicaInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/promote",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<ClustersPromoteReadReplicaInput>;

// Output Schema
export type ClustersPromoteReadReplicaOutput = void;
export const ClustersPromoteReadReplicaOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersPromoteReadReplicaOutput>;

// The operation
/**
 * Promotes read replica cluster to an independent read-write cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersPromoteReadReplica = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersPromoteReadReplicaInput,
  outputSchema: ClustersPromoteReadReplicaOutput,
}));
// Input Schema
export interface ClustersRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersRestartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/restart",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<ClustersRestartInput>;

// Output Schema
export type ClustersRestartOutput = void;
export const ClustersRestartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersRestartOutput>;

// The operation
/**
 * Restarts all nodes in the cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersRestart = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersRestartInput,
  outputSchema: ClustersRestartOutput,
}));
// Input Schema
export interface ClustersStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersStartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/start",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<ClustersStartInput>;

// Output Schema
export type ClustersStartOutput = void;
export const ClustersStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersStartOutput>;

// The operation
/**
 * Starts stopped compute on all cluster nodes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersStartInput,
  outputSchema: ClustersStartOutput,
}));
// Input Schema
export interface ClustersStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersStopInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/stop",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<ClustersStopInput>;

// Output Schema
export type ClustersStopOutput = void;
export const ClustersStopOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersStopOutput>;

// The operation
/**
 * Stops compute on all cluster nodes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersStopInput,
  outputSchema: ClustersStopOutput,
}));
// Input Schema
export interface ClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    administratorLoginPassword?: string | Redacted.Redacted<string>;
    postgresqlVersion?: string;
    citusVersion?: string;
    enableShardsOnCoordinator?: boolean;
    enableHa?: boolean;
    preferredPrimaryZone?: string;
    coordinatorServerEdition?: string;
    coordinatorStorageQuotaInMb?: number;
    coordinatorVCores?: number;
    coordinatorEnablePublicIpAccess?: boolean;
    nodeServerEdition?: string;
    nodeCount?: number;
    nodeStorageQuotaInMb?: number;
    nodeVCores?: number;
    nodeEnablePublicIpAccess?: boolean;
    maintenanceWindow?: {
      customWindow?: string;
      startHour?: number;
      startMinute?: number;
      dayOfWeek?: number;
    };
  };
  tags?: Record<string, string>;
}
export const ClustersUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      administratorLoginPassword: Schema.optional(SensitiveString),
      postgresqlVersion: Schema.optional(Schema.String),
      citusVersion: Schema.optional(Schema.String),
      enableShardsOnCoordinator: Schema.optional(Schema.Boolean),
      enableHa: Schema.optional(Schema.Boolean),
      preferredPrimaryZone: Schema.optional(Schema.String),
      coordinatorServerEdition: Schema.optional(Schema.String),
      coordinatorStorageQuotaInMb: Schema.optional(Schema.Number),
      coordinatorVCores: Schema.optional(Schema.Number),
      coordinatorEnablePublicIpAccess: Schema.optional(Schema.Boolean),
      nodeServerEdition: Schema.optional(Schema.String),
      nodeCount: Schema.optional(Schema.Number),
      nodeStorageQuotaInMb: Schema.optional(Schema.Number),
      nodeVCores: Schema.optional(Schema.Number),
      nodeEnablePublicIpAccess: Schema.optional(Schema.Boolean),
      maintenanceWindow: Schema.optional(
        Schema.Struct({
          customWindow: Schema.optional(Schema.String),
          startHour: Schema.optional(Schema.Number),
          startMinute: Schema.optional(Schema.Number),
          dayOfWeek: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<ClustersUpdateInput>;

// Output Schema
export interface ClustersUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ClustersUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ClustersUpdateOutput>;

// The operation
/**
 * Updates an existing cluster. The request body can contain one or several properties from the cluster definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export interface ConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  configurationName: string;
}
export const ConfigurationsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  configurationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/configurations/{configurationName}",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<ConfigurationsGetInput>;

// Output Schema
export interface ConfigurationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsGetOutput>;

// The operation
/**
 * Gets information of a configuration for coordinator and nodes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param configurationName - The name of the cluster configuration.
 */
export const ConfigurationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsGetInput,
  outputSchema: ConfigurationsGetOutput,
}));
// Input Schema
export interface ConfigurationsGetCoordinatorInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  configurationName: string;
}
export const ConfigurationsGetCoordinatorInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/coordinatorConfigurations/{configurationName}",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<ConfigurationsGetCoordinatorInput>;

// Output Schema
export interface ConfigurationsGetCoordinatorOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConfigurationsGetCoordinatorOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsGetCoordinatorOutput>;

// The operation
/**
 * Gets information of a configuration for coordinator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param configurationName - The name of the cluster configuration.
 */
export const ConfigurationsGetCoordinator =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsGetCoordinatorInput,
    outputSchema: ConfigurationsGetCoordinatorOutput,
  }));
// Input Schema
export interface ConfigurationsGetNodeInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  configurationName: string;
}
export const ConfigurationsGetNodeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/nodeConfigurations/{configurationName}",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<ConfigurationsGetNodeInput>;

// Output Schema
export interface ConfigurationsGetNodeOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConfigurationsGetNodeOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsGetNodeOutput>;

// The operation
/**
 * Gets information of a configuration for worker nodes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param configurationName - The name of the cluster configuration.
 */
export const ConfigurationsGetNode = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsGetNodeInput,
  outputSchema: ConfigurationsGetNodeOutput,
}));
// Input Schema
export interface ConfigurationsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ConfigurationsListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/configurations",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<ConfigurationsListByClusterInput>;

// Output Schema
export interface ConfigurationsListByClusterOutput {
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
export const ConfigurationsListByClusterOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsListByClusterOutput>;

// The operation
/**
 * List all the configurations of a cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ConfigurationsListByCluster = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsListByClusterInput,
  outputSchema: ConfigurationsListByClusterOutput,
}));
// Input Schema
export interface ConfigurationsListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  serverName: string;
}
export const ConfigurationsListByServerInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/servers/{serverName}/configurations",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<ConfigurationsListByServerInput>;

// Output Schema
export interface ConfigurationsListByServerOutput {
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
export const ConfigurationsListByServerOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsListByServerOutput>;

// The operation
/**
 * List all the configurations of a server in cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param serverName - The name of the server.
 */
export const ConfigurationsListByServer = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsListByServerInput,
  outputSchema: ConfigurationsListByServerOutput,
}));
// Input Schema
export interface ConfigurationsUpdateOnCoordinatorInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  configurationName: string;
  properties?: {
    value: string;
    source?: string;
    description?: string;
    defaultValue?: string;
    dataType?: "Boolean" | "Numeric" | "Integer" | "Enumeration";
    allowedValues?: string;
    requiresRestart?: boolean;
    provisioningState?: "Succeeded" | "Canceled" | "InProgress" | "Failed";
  };
}
export const ConfigurationsUpdateOnCoordinatorInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        value: Schema.String,
        source: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        defaultValue: Schema.optional(Schema.String),
        dataType: Schema.optional(
          Schema.Literals(["Boolean", "Numeric", "Integer", "Enumeration"]),
        ),
        allowedValues: Schema.optional(Schema.String),
        requiresRestart: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Canceled", "InProgress", "Failed"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/coordinatorConfigurations/{configurationName}",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<ConfigurationsUpdateOnCoordinatorInput>;

// Output Schema
export interface ConfigurationsUpdateOnCoordinatorOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConfigurationsUpdateOnCoordinatorOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsUpdateOnCoordinatorOutput>;

// The operation
/**
 * Updates configuration of coordinator in a cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param configurationName - The name of the cluster configuration.
 */
export const ConfigurationsUpdateOnCoordinator =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsUpdateOnCoordinatorInput,
    outputSchema: ConfigurationsUpdateOnCoordinatorOutput,
  }));
// Input Schema
export interface ConfigurationsUpdateOnNodeInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  configurationName: string;
  properties?: {
    value: string;
    source?: string;
    description?: string;
    defaultValue?: string;
    dataType?: "Boolean" | "Numeric" | "Integer" | "Enumeration";
    allowedValues?: string;
    requiresRestart?: boolean;
    provisioningState?: "Succeeded" | "Canceled" | "InProgress" | "Failed";
  };
}
export const ConfigurationsUpdateOnNodeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        value: Schema.String,
        source: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        defaultValue: Schema.optional(Schema.String),
        dataType: Schema.optional(
          Schema.Literals(["Boolean", "Numeric", "Integer", "Enumeration"]),
        ),
        allowedValues: Schema.optional(Schema.String),
        requiresRestart: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Canceled", "InProgress", "Failed"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/nodeConfigurations/{configurationName}",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<ConfigurationsUpdateOnNodeInput>;

// Output Schema
export interface ConfigurationsUpdateOnNodeOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConfigurationsUpdateOnNodeOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsUpdateOnNodeOutput>;

// The operation
/**
 * Updates configuration of worker nodes in a cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param configurationName - The name of the cluster configuration.
 */
export const ConfigurationsUpdateOnNode = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsUpdateOnNodeInput,
  outputSchema: ConfigurationsUpdateOnNodeOutput,
}));
// Input Schema
export interface FirewallRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  firewallRuleName: string;
  properties: {
    startIpAddress: string;
    endIpAddress: string;
    provisioningState?: "Succeeded" | "Canceled" | "InProgress" | "Failed";
  };
}
export const FirewallRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      startIpAddress: Schema.String,
      endIpAddress: Schema.String,
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Canceled", "InProgress", "Failed"]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/firewallRules/{firewallRuleName}",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<FirewallRulesCreateOrUpdateInput>;

// Output Schema
export interface FirewallRulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const FirewallRulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FirewallRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new cluster firewall rule or updates an existing cluster firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param firewallRuleName - The name of the cluster firewall rule.
 */
export const FirewallRulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesCreateOrUpdateInput,
  outputSchema: FirewallRulesCreateOrUpdateOutput,
}));
// Input Schema
export interface FirewallRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  firewallRuleName: string;
}
export const FirewallRulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/firewallRules/{firewallRuleName}",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<FirewallRulesDeleteInput>;

// Output Schema
export type FirewallRulesDeleteOutput = void;
export const FirewallRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FirewallRulesDeleteOutput>;

// The operation
/**
 * Deletes a cluster firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param firewallRuleName - The name of the cluster firewall rule.
 */
export const FirewallRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesDeleteInput,
  outputSchema: FirewallRulesDeleteOutput,
}));
// Input Schema
export interface FirewallRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  firewallRuleName: string;
}
export const FirewallRulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  firewallRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/firewallRules/{firewallRuleName}",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<FirewallRulesGetInput>;

// Output Schema
export interface FirewallRulesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const FirewallRulesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<FirewallRulesGetOutput>;

// The operation
/**
 * Gets information about a cluster firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param firewallRuleName - The name of the cluster firewall rule.
 */
export const FirewallRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesGetInput,
  outputSchema: FirewallRulesGetOutput,
}));
// Input Schema
export interface FirewallRulesListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const FirewallRulesListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/firewallRules",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<FirewallRulesListByClusterInput>;

// Output Schema
export interface FirewallRulesListByClusterOutput {
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
export const FirewallRulesListByClusterOutput =
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
  }) as unknown as Schema.Codec<FirewallRulesListByClusterOutput>;

// The operation
/**
 * Lists all the firewall rules on cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const FirewallRulesListByCluster = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesListByClusterInput,
  outputSchema: FirewallRulesListByClusterOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DBforPostgreSQL/operations",
    apiVersion: "2022-11-08",
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
    isDataAction?: boolean;
    origin?: "NotSpecified" | "user" | "system";
    properties?: Record<string, unknown>;
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
        isDataAction: Schema.optional(Schema.Boolean),
        origin: Schema.optional(
          Schema.Literals(["NotSpecified", "user", "system"]),
        ),
        properties: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
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
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-11-08",
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
 * Approves or Rejects a private endpoint connection with a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the cluster.
 * @param properties - Resource properties.
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
  clusterName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-11-08",
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
 * @param clusterName - The name of the cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the cluster.
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
  clusterName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-11-08",
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
 * Gets private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the cluster.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const PrivateEndpointConnectionsListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/privateEndpointConnections",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByClusterInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByClusterOutput {
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
export const PrivateEndpointConnectionsListByClusterOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByClusterOutput>;

// The operation
/**
 * Gets list of private endpoint connections on a cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const PrivateEndpointConnectionsListByCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByClusterInput,
    outputSchema: PrivateEndpointConnectionsListByClusterOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2022-11-08",
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
 * Gets a private link resource for cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param privateLinkResourceName - The name of the private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const PrivateLinkResourcesListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/privateLinkResources",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByClusterInput>;

// Output Schema
export interface PrivateLinkResourcesListByClusterOutput {
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
export const PrivateLinkResourcesListByClusterOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByClusterOutput>;

// The operation
/**
 * Gets the private link resources for cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const PrivateLinkResourcesListByCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByClusterInput,
    outputSchema: PrivateLinkResourcesListByClusterOutput,
  }));
// Input Schema
export interface RolesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  roleName: string;
  properties: {
    password: string | Redacted.Redacted<string>;
    provisioningState?: "Succeeded" | "Canceled" | "InProgress" | "Failed";
  };
}
export const RolesCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  roleName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    password: SensitiveString,
    provisioningState: Schema.optional(
      Schema.Literals(["Succeeded", "Canceled", "InProgress", "Failed"]),
    ),
  }),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/roles/{roleName}",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<RolesCreateInput>;

// Output Schema
export interface RolesCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RolesCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<RolesCreateOutput>;

// The operation
/**
 * Creates a new role or updates an existing role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param roleName - The name of the cluster role.
 */
export const RolesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RolesCreateInput,
  outputSchema: RolesCreateOutput,
}));
// Input Schema
export interface RolesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  roleName: string;
}
export const RolesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  roleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/roles/{roleName}",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<RolesDeleteInput>;

// Output Schema
export type RolesDeleteOutput = void;
export const RolesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RolesDeleteOutput>;

// The operation
/**
 * Deletes a cluster role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param roleName - The name of the cluster role.
 */
export const RolesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RolesDeleteInput,
  outputSchema: RolesDeleteOutput,
}));
// Input Schema
export interface RolesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  roleName: string;
}
export const RolesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  roleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/roles/{roleName}",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<RolesGetInput>;

// Output Schema
export interface RolesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RolesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<RolesGetOutput>;

// The operation
/**
 * Gets information about a cluster role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param roleName - The name of the cluster role.
 */
export const RolesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RolesGetInput,
  outputSchema: RolesGetOutput,
}));
// Input Schema
export interface RolesListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const RolesListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/roles",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<RolesListByClusterInput>;

// Output Schema
export interface RolesListByClusterOutput {
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
export const RolesListByClusterOutput =
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
  }) as unknown as Schema.Codec<RolesListByClusterOutput>;

// The operation
/**
 * List all the roles in a given cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const RolesListByCluster = /*@__PURE__*/ API.make(() => ({
  inputSchema: RolesListByClusterInput,
  outputSchema: RolesListByClusterOutput,
}));
// Input Schema
export interface ServersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  serverName: string;
}
export const ServersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/servers/{serverName}",
    apiVersion: "2022-11-08",
  }),
) as unknown as Schema.Codec<ServersGetInput>;

// Output Schema
export interface ServersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ServersGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ServersGetOutput>;

// The operation
/**
 * Gets information about a server in cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param serverName - The name of the server.
 */
export const ServersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersGetInput,
  outputSchema: ServersGetOutput,
}));
// Input Schema
export interface ServersListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ServersListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/servers",
      apiVersion: "2022-11-08",
    }),
  ) as unknown as Schema.Codec<ServersListByClusterInput>;

// Output Schema
export interface ServersListByClusterOutput {
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
export const ServersListByClusterOutput =
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
  }) as unknown as Schema.Codec<ServersListByClusterOutput>;

// The operation
/**
 * Lists servers of a cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ServersListByCluster = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersListByClusterInput,
  outputSchema: ServersListByClusterOutput,
}));
