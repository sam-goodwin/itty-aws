/**
 * Azure Sqlvirtualmachine API
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
export interface AvailabilityGroupListenersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineGroupName: string;
  availabilityGroupListenerName: string;
  properties?: {
    provisioningState?: string;
    availabilityGroupName?: string;
    loadBalancerConfigurations?: {
      privateIpAddress?: { ipAddress?: string; subnetResourceId?: string };
      publicIpAddressResourceId?: string;
      loadBalancerResourceId?: string;
      probePort?: number;
      sqlVirtualMachineInstances?: string[];
    }[];
    multiSubnetIpConfigurations?: {
      privateIpAddress: { ipAddress?: string; subnetResourceId?: string };
      sqlVirtualMachineInstance: string;
    }[];
    createDefaultAvailabilityGroupIfNotExist?: boolean;
    port?: number;
    availabilityGroupConfiguration?: {
      replicas?: {
        sqlVirtualMachineInstanceId?: string;
        role?: "Primary" | "Secondary";
        commit?: "Synchronous_Commit" | "Asynchronous_Commit";
        failover?: "Automatic" | "Manual";
        readableSecondary?: "No" | "All" | "Read_Only";
      }[];
    };
  };
}
export const AvailabilityGroupListenersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
    availabilityGroupListenerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        availabilityGroupName: Schema.optional(Schema.String),
        loadBalancerConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              privateIpAddress: Schema.optional(
                Schema.Struct({
                  ipAddress: Schema.optional(Schema.String),
                  subnetResourceId: Schema.optional(Schema.String),
                }),
              ),
              publicIpAddressResourceId: Schema.optional(Schema.String),
              loadBalancerResourceId: Schema.optional(Schema.String),
              probePort: Schema.optional(Schema.Number),
              sqlVirtualMachineInstances: Schema.optional(
                Schema.Array(Schema.String),
              ),
            }),
          ),
        ),
        multiSubnetIpConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              privateIpAddress: Schema.Struct({
                ipAddress: Schema.optional(Schema.String),
                subnetResourceId: Schema.optional(Schema.String),
              }),
              sqlVirtualMachineInstance: Schema.String,
            }),
          ),
        ),
        createDefaultAvailabilityGroupIfNotExist: Schema.optional(
          Schema.Boolean,
        ),
        port: Schema.optional(Schema.Number),
        availabilityGroupConfiguration: Schema.optional(
          Schema.Struct({
            replicas: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  sqlVirtualMachineInstanceId: Schema.optional(Schema.String),
                  role: Schema.optional(
                    Schema.Literals(["Primary", "Secondary"]),
                  ),
                  commit: Schema.optional(
                    Schema.Literals([
                      "Synchronous_Commit",
                      "Asynchronous_Commit",
                    ]),
                  ),
                  failover: Schema.optional(
                    Schema.Literals(["Automatic", "Manual"]),
                  ),
                  readableSecondary: Schema.optional(
                    Schema.Literals(["No", "All", "Read_Only"]),
                  ),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<AvailabilityGroupListenersCreateOrUpdateInput>;

// Output Schema
export interface AvailabilityGroupListenersCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AvailabilityGroupListenersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AvailabilityGroupListenersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an availability group listener.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 * @param availabilityGroupListenerName - Name of the availability group listener.
 */
export const AvailabilityGroupListenersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityGroupListenersCreateOrUpdateInput,
    outputSchema: AvailabilityGroupListenersCreateOrUpdateOutput,
  }));
// Input Schema
export interface AvailabilityGroupListenersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineGroupName: string;
  availabilityGroupListenerName: string;
}
export const AvailabilityGroupListenersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
    availabilityGroupListenerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<AvailabilityGroupListenersDeleteInput>;

// Output Schema
export type AvailabilityGroupListenersDeleteOutput = void;
export const AvailabilityGroupListenersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AvailabilityGroupListenersDeleteOutput>;

// The operation
/**
 * Deletes an availability group listener.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 * @param availabilityGroupListenerName - Name of the availability group listener.
 */
export const AvailabilityGroupListenersDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityGroupListenersDeleteInput,
    outputSchema: AvailabilityGroupListenersDeleteOutput,
  }));
// Input Schema
export interface AvailabilityGroupListenersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineGroupName: string;
  availabilityGroupListenerName: string;
  $expand?: string;
}
export const AvailabilityGroupListenersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
    availabilityGroupListenerName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<AvailabilityGroupListenersGetInput>;

// Output Schema
export interface AvailabilityGroupListenersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AvailabilityGroupListenersGetOutput =
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
  }) as unknown as Schema.Codec<AvailabilityGroupListenersGetOutput>;

// The operation
/**
 * Gets an availability group listener.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 * @param availabilityGroupListenerName - Name of the availability group listener.
 * @param $expand - The child resources to include in the response.
 */
export const AvailabilityGroupListenersGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityGroupListenersGetInput,
    outputSchema: AvailabilityGroupListenersGetOutput,
  }));
// Input Schema
export interface AvailabilityGroupListenersListByGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineGroupName: string;
}
export const AvailabilityGroupListenersListByGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<AvailabilityGroupListenersListByGroupInput>;

// Output Schema
export interface AvailabilityGroupListenersListByGroupOutput {
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
export const AvailabilityGroupListenersListByGroupOutput =
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
  }) as unknown as Schema.Codec<AvailabilityGroupListenersListByGroupOutput>;

// The operation
/**
 * Lists all availability group listeners in a SQL virtual machine group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const AvailabilityGroupListenersListByGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityGroupListenersListByGroupInput,
    outputSchema: AvailabilityGroupListenersListByGroupOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.SqlVirtualMachine/operations",
    apiVersion: "2023-10-01",
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
    origin?: "user" | "system";
    properties?: Record<string, unknown>;
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
      origin: Schema.optional(Schema.Literals(["user", "system"])),
      properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available SQL Virtual Machine Rest API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SqlVirtualMachineGroupsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineGroupName: string;
  properties?: {
    provisioningState?: string;
    sqlImageOffer?: string;
    sqlImageSku?: "Developer" | "Enterprise";
    scaleType?: "HA";
    clusterManagerType?: "WSFC";
    clusterConfiguration?: "Domainful";
    wsfcDomainProfile?: {
      domainFqdn?: string;
      ouPath?: string;
      clusterBootstrapAccount?: string;
      clusterOperatorAccount?: string;
      sqlServiceAccount?: string;
      isSqlServiceAccountGmsa?: boolean;
      fileShareWitnessPath?: string;
      storageAccountUrl?: string;
      storageAccountPrimaryKey?: string;
      clusterSubnetType?: "SingleSubnet" | "MultiSubnet";
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const SqlVirtualMachineGroupsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        sqlImageOffer: Schema.optional(Schema.String),
        sqlImageSku: Schema.optional(
          Schema.Literals(["Developer", "Enterprise"]),
        ),
        scaleType: Schema.optional(Schema.Literals(["HA"])),
        clusterManagerType: Schema.optional(Schema.Literals(["WSFC"])),
        clusterConfiguration: Schema.optional(Schema.Literals(["Domainful"])),
        wsfcDomainProfile: Schema.optional(
          Schema.Struct({
            domainFqdn: Schema.optional(Schema.String),
            ouPath: Schema.optional(Schema.String),
            clusterBootstrapAccount: Schema.optional(Schema.String),
            clusterOperatorAccount: Schema.optional(Schema.String),
            sqlServiceAccount: Schema.optional(Schema.String),
            isSqlServiceAccountGmsa: Schema.optional(Schema.Boolean),
            fileShareWitnessPath: Schema.optional(Schema.String),
            storageAccountUrl: Schema.optional(Schema.String),
            storageAccountPrimaryKey: Schema.optional(Schema.String),
            clusterSubnetType: Schema.optional(
              Schema.Literals(["SingleSubnet", "MultiSubnet"]),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachineGroupsCreateOrUpdateInput>;

// Output Schema
export interface SqlVirtualMachineGroupsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SqlVirtualMachineGroupsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachineGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a SQL virtual machine group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const SqlVirtualMachineGroupsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachineGroupsCreateOrUpdateInput,
    outputSchema: SqlVirtualMachineGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlVirtualMachineGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineGroupName: string;
}
export const SqlVirtualMachineGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachineGroupsDeleteInput>;

// Output Schema
export type SqlVirtualMachineGroupsDeleteOutput = void;
export const SqlVirtualMachineGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlVirtualMachineGroupsDeleteOutput>;

// The operation
/**
 * Deletes a SQL virtual machine group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const SqlVirtualMachineGroupsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachineGroupsDeleteInput,
    outputSchema: SqlVirtualMachineGroupsDeleteOutput,
  }));
// Input Schema
export interface SqlVirtualMachineGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineGroupName: string;
}
export const SqlVirtualMachineGroupsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachineGroupsGetInput>;

// Output Schema
export interface SqlVirtualMachineGroupsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SqlVirtualMachineGroupsGetOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachineGroupsGetOutput>;

// The operation
/**
 * Gets a SQL virtual machine group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const SqlVirtualMachineGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlVirtualMachineGroupsGetInput,
  outputSchema: SqlVirtualMachineGroupsGetOutput,
}));
// Input Schema
export interface SqlVirtualMachineGroupsListInput {
  subscriptionId: string;
}
export const SqlVirtualMachineGroupsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachineGroupsListInput>;

// Output Schema
export interface SqlVirtualMachineGroupsListOutput {
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
export const SqlVirtualMachineGroupsListOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachineGroupsListOutput>;

// The operation
/**
 * Gets all SQL virtual machine groups in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SqlVirtualMachineGroupsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlVirtualMachineGroupsListInput,
  outputSchema: SqlVirtualMachineGroupsListOutput,
}));
// Input Schema
export interface SqlVirtualMachineGroupsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SqlVirtualMachineGroupsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachineGroupsListByResourceGroupInput>;

// Output Schema
export interface SqlVirtualMachineGroupsListByResourceGroupOutput {
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
export const SqlVirtualMachineGroupsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachineGroupsListByResourceGroupOutput>;

// The operation
/**
 * Gets all SQL virtual machine groups in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SqlVirtualMachineGroupsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachineGroupsListByResourceGroupInput,
    outputSchema: SqlVirtualMachineGroupsListByResourceGroupOutput,
  }));
// Input Schema
export interface SqlVirtualMachineGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineGroupName: string;
  tags?: Record<string, string>;
}
export const SqlVirtualMachineGroupsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachineGroupsUpdateInput>;

// Output Schema
export interface SqlVirtualMachineGroupsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SqlVirtualMachineGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachineGroupsUpdateOutput>;

// The operation
/**
 * Updates SQL virtual machine group tags.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const SqlVirtualMachineGroupsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachineGroupsUpdateInput,
    outputSchema: SqlVirtualMachineGroupsUpdateOutput,
  }));
// Input Schema
export interface SqlVirtualMachinesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineName: string;
  properties?: {
    virtualMachineResourceId?: string;
    provisioningState?: string;
    sqlImageOffer?: string;
    sqlServerLicenseType?: "PAYG" | "AHUB" | "DR";
    sqlManagement?: "Full" | "LightWeight" | "NoAgent";
    leastPrivilegeMode?: "Enabled" | "NotSet";
    sqlImageSku?: "Developer" | "Express" | "Standard" | "Enterprise" | "Web";
    sqlVirtualMachineGroupResourceId?: string;
    wsfcDomainCredentials?: {
      clusterBootstrapAccountPassword?: string | Redacted.Redacted<string>;
      clusterOperatorAccountPassword?: string | Redacted.Redacted<string>;
      sqlServiceAccountPassword?: string | Redacted.Redacted<string>;
    };
    wsfcStaticIp?: string;
    autoPatchingSettings?: {
      enable?: boolean;
      dayOfWeek?:
        | "Everyday"
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
        | "Sunday";
      maintenanceWindowStartingHour?: number;
      maintenanceWindowDuration?: number;
      additionalVmPatch?: "NotSet" | "MicrosoftUpdate";
    };
    autoBackupSettings?: {
      enable?: boolean;
      enableEncryption?: boolean;
      retentionPeriod?: number;
      storageAccountUrl?: string;
      storageContainerName?: string;
      storageAccessKey?: string;
      password?: string | Redacted.Redacted<string>;
      backupSystemDbs?: boolean;
      backupScheduleType?: "Manual" | "Automated";
      fullBackupFrequency?: "Daily" | "Weekly";
      daysOfWeek?: (
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
        | "Sunday"
      )[];
      fullBackupStartTime?: number;
      fullBackupWindowHours?: number;
      logBackupFrequency?: number;
    };
    keyVaultCredentialSettings?: {
      enable?: boolean;
      credentialName?: string;
      azureKeyVaultUrl?: string;
      servicePrincipalName?: string;
      servicePrincipalSecret?: string;
    };
    serverConfigurationsManagementSettings?: {
      sqlConnectivityUpdateSettings?: {
        connectivityType?: "LOCAL" | "PRIVATE" | "PUBLIC";
        port?: number;
        sqlAuthUpdateUserName?: string;
        sqlAuthUpdatePassword?: string | Redacted.Redacted<string>;
      };
      sqlWorkloadTypeUpdateSettings?: {
        sqlWorkloadType?: "GENERAL" | "OLTP" | "DW";
      };
      sqlStorageUpdateSettings?: {
        diskCount?: number;
        startingDeviceId?: number;
        diskConfigurationType?: "NEW" | "EXTEND" | "ADD";
      };
      additionalFeaturesServerConfigurations?: { isRServicesEnabled?: boolean };
      sqlInstanceSettings?: {
        collation?: string;
        maxDop?: number;
        isOptimizeForAdHocWorkloadsEnabled?: boolean;
        minServerMemoryMB?: number;
        maxServerMemoryMB?: number;
        isLpimEnabled?: boolean;
        isIfiEnabled?: boolean;
      };
      azureAdAuthenticationSettings?: { clientId?: string };
    };
    storageConfigurationSettings?: {
      sqlDataSettings?: {
        luns?: number[];
        defaultFilePath?: string;
        useStoragePool?: boolean;
      };
      sqlLogSettings?: {
        luns?: number[];
        defaultFilePath?: string;
        useStoragePool?: boolean;
      };
      sqlTempDbSettings?: {
        dataFileSize?: number;
        dataGrowth?: number;
        logFileSize?: number;
        logGrowth?: number;
        dataFileCount?: number;
        persistFolder?: boolean;
        persistFolderPath?: string;
        luns?: number[];
        defaultFilePath?: string;
        useStoragePool?: boolean;
      };
      sqlSystemDbOnDataDisk?: boolean;
      diskConfigurationType?: "NEW" | "EXTEND" | "ADD";
      storageWorkloadType?: "GENERAL" | "OLTP" | "DW";
      enableStorageConfigBlade?: boolean;
    };
    troubleshootingStatus?: {
      rootCause?: string;
      lastTriggerTimeUtc?: string;
      startTimeUtc?: string;
      endTimeUtc?: string;
      troubleshootingScenario?: "UnhealthyReplica";
      properties?: {
        unhealthyReplicaInfo?: { availabilityGroupName?: string };
      };
    };
    assessmentSettings?: {
      enable?: boolean;
      runImmediately?: boolean;
      schedule?: {
        enable?: boolean;
        weeklyInterval?: number;
        monthlyOccurrence?: number;
        dayOfWeek?:
          | "Monday"
          | "Tuesday"
          | "Wednesday"
          | "Thursday"
          | "Friday"
          | "Saturday"
          | "Sunday";
        startTime?: string;
      };
    };
    enableAutomaticUpgrade?: boolean;
    additionalVmPatch?: "WU" | "WUMU" | "WSUS";
    virtualMachineIdentitySettings?: {
      type?: "None" | "SystemAssigned" | "UserAssigned";
      resourceId?: string;
    };
    osType?: "Windows" | "Linux";
  };
  identity?: {
    principalId?: string;
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    tenantId?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const SqlVirtualMachinesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        virtualMachineResourceId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        sqlImageOffer: Schema.optional(Schema.String),
        sqlServerLicenseType: Schema.optional(
          Schema.Literals(["PAYG", "AHUB", "DR"]),
        ),
        sqlManagement: Schema.optional(
          Schema.Literals(["Full", "LightWeight", "NoAgent"]),
        ),
        leastPrivilegeMode: Schema.optional(
          Schema.Literals(["Enabled", "NotSet"]),
        ),
        sqlImageSku: Schema.optional(
          Schema.Literals([
            "Developer",
            "Express",
            "Standard",
            "Enterprise",
            "Web",
          ]),
        ),
        sqlVirtualMachineGroupResourceId: Schema.optional(Schema.String),
        wsfcDomainCredentials: Schema.optional(
          Schema.Struct({
            clusterBootstrapAccountPassword: Schema.optional(SensitiveString),
            clusterOperatorAccountPassword: Schema.optional(SensitiveString),
            sqlServiceAccountPassword: Schema.optional(SensitiveString),
          }),
        ),
        wsfcStaticIp: Schema.optional(Schema.String),
        autoPatchingSettings: Schema.optional(
          Schema.Struct({
            enable: Schema.optional(Schema.Boolean),
            dayOfWeek: Schema.optional(
              Schema.Literals([
                "Everyday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ]),
            ),
            maintenanceWindowStartingHour: Schema.optional(Schema.Number),
            maintenanceWindowDuration: Schema.optional(Schema.Number),
            additionalVmPatch: Schema.optional(
              Schema.Literals(["NotSet", "MicrosoftUpdate"]),
            ),
          }),
        ),
        autoBackupSettings: Schema.optional(
          Schema.Struct({
            enable: Schema.optional(Schema.Boolean),
            enableEncryption: Schema.optional(Schema.Boolean),
            retentionPeriod: Schema.optional(Schema.Number),
            storageAccountUrl: Schema.optional(Schema.String),
            storageContainerName: Schema.optional(Schema.String),
            storageAccessKey: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
            backupSystemDbs: Schema.optional(Schema.Boolean),
            backupScheduleType: Schema.optional(
              Schema.Literals(["Manual", "Automated"]),
            ),
            fullBackupFrequency: Schema.optional(
              Schema.Literals(["Daily", "Weekly"]),
            ),
            daysOfWeek: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ]),
              ),
            ),
            fullBackupStartTime: Schema.optional(Schema.Number),
            fullBackupWindowHours: Schema.optional(Schema.Number),
            logBackupFrequency: Schema.optional(Schema.Number),
          }),
        ),
        keyVaultCredentialSettings: Schema.optional(
          Schema.Struct({
            enable: Schema.optional(Schema.Boolean),
            credentialName: Schema.optional(Schema.String),
            azureKeyVaultUrl: Schema.optional(Schema.String),
            servicePrincipalName: Schema.optional(Schema.String),
            servicePrincipalSecret: Schema.optional(Schema.String),
          }),
        ),
        serverConfigurationsManagementSettings: Schema.optional(
          Schema.Struct({
            sqlConnectivityUpdateSettings: Schema.optional(
              Schema.Struct({
                connectivityType: Schema.optional(
                  Schema.Literals(["LOCAL", "PRIVATE", "PUBLIC"]),
                ),
                port: Schema.optional(Schema.Number),
                sqlAuthUpdateUserName: Schema.optional(Schema.String),
                sqlAuthUpdatePassword: Schema.optional(SensitiveString),
              }),
            ),
            sqlWorkloadTypeUpdateSettings: Schema.optional(
              Schema.Struct({
                sqlWorkloadType: Schema.optional(
                  Schema.Literals(["GENERAL", "OLTP", "DW"]),
                ),
              }),
            ),
            sqlStorageUpdateSettings: Schema.optional(
              Schema.Struct({
                diskCount: Schema.optional(Schema.Number),
                startingDeviceId: Schema.optional(Schema.Number),
                diskConfigurationType: Schema.optional(
                  Schema.Literals(["NEW", "EXTEND", "ADD"]),
                ),
              }),
            ),
            additionalFeaturesServerConfigurations: Schema.optional(
              Schema.Struct({
                isRServicesEnabled: Schema.optional(Schema.Boolean),
              }),
            ),
            sqlInstanceSettings: Schema.optional(
              Schema.Struct({
                collation: Schema.optional(Schema.String),
                maxDop: Schema.optional(Schema.Number),
                isOptimizeForAdHocWorkloadsEnabled: Schema.optional(
                  Schema.Boolean,
                ),
                minServerMemoryMB: Schema.optional(Schema.Number),
                maxServerMemoryMB: Schema.optional(Schema.Number),
                isLpimEnabled: Schema.optional(Schema.Boolean),
                isIfiEnabled: Schema.optional(Schema.Boolean),
              }),
            ),
            azureAdAuthenticationSettings: Schema.optional(
              Schema.Struct({
                clientId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        storageConfigurationSettings: Schema.optional(
          Schema.Struct({
            sqlDataSettings: Schema.optional(
              Schema.Struct({
                luns: Schema.optional(Schema.Array(Schema.Number)),
                defaultFilePath: Schema.optional(Schema.String),
                useStoragePool: Schema.optional(Schema.Boolean),
              }),
            ),
            sqlLogSettings: Schema.optional(
              Schema.Struct({
                luns: Schema.optional(Schema.Array(Schema.Number)),
                defaultFilePath: Schema.optional(Schema.String),
                useStoragePool: Schema.optional(Schema.Boolean),
              }),
            ),
            sqlTempDbSettings: Schema.optional(
              Schema.Struct({
                dataFileSize: Schema.optional(Schema.Number),
                dataGrowth: Schema.optional(Schema.Number),
                logFileSize: Schema.optional(Schema.Number),
                logGrowth: Schema.optional(Schema.Number),
                dataFileCount: Schema.optional(Schema.Number),
                persistFolder: Schema.optional(Schema.Boolean),
                persistFolderPath: Schema.optional(Schema.String),
                luns: Schema.optional(Schema.Array(Schema.Number)),
                defaultFilePath: Schema.optional(Schema.String),
                useStoragePool: Schema.optional(Schema.Boolean),
              }),
            ),
            sqlSystemDbOnDataDisk: Schema.optional(Schema.Boolean),
            diskConfigurationType: Schema.optional(
              Schema.Literals(["NEW", "EXTEND", "ADD"]),
            ),
            storageWorkloadType: Schema.optional(
              Schema.Literals(["GENERAL", "OLTP", "DW"]),
            ),
            enableStorageConfigBlade: Schema.optional(Schema.Boolean),
          }),
        ),
        troubleshootingStatus: Schema.optional(
          Schema.Struct({
            rootCause: Schema.optional(Schema.String),
            lastTriggerTimeUtc: Schema.optional(Schema.String),
            startTimeUtc: Schema.optional(Schema.String),
            endTimeUtc: Schema.optional(Schema.String),
            troubleshootingScenario: Schema.optional(
              Schema.Literals(["UnhealthyReplica"]),
            ),
            properties: Schema.optional(
              Schema.Struct({
                unhealthyReplicaInfo: Schema.optional(
                  Schema.Struct({
                    availabilityGroupName: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        assessmentSettings: Schema.optional(
          Schema.Struct({
            enable: Schema.optional(Schema.Boolean),
            runImmediately: Schema.optional(Schema.Boolean),
            schedule: Schema.optional(
              Schema.Struct({
                enable: Schema.optional(Schema.Boolean),
                weeklyInterval: Schema.optional(Schema.Number),
                monthlyOccurrence: Schema.optional(Schema.Number),
                dayOfWeek: Schema.optional(
                  Schema.Literals([
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ]),
                ),
                startTime: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
        additionalVmPatch: Schema.optional(
          Schema.Literals(["WU", "WUMU", "WSUS"]),
        ),
        virtualMachineIdentitySettings: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
            ),
            resourceId: Schema.optional(Schema.String),
          }),
        ),
        osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
          ]),
        ),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachinesCreateOrUpdateInput>;

// Output Schema
export interface SqlVirtualMachinesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SqlVirtualMachinesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachinesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a SQL virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachinesCreateOrUpdateInput,
    outputSchema: SqlVirtualMachinesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlVirtualMachinesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineName: string;
}
export const SqlVirtualMachinesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachinesDeleteInput>;

// Output Schema
export type SqlVirtualMachinesDeleteOutput = void;
export const SqlVirtualMachinesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlVirtualMachinesDeleteOutput>;

// The operation
/**
 * Deletes a SQL virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlVirtualMachinesDeleteInput,
  outputSchema: SqlVirtualMachinesDeleteOutput,
}));
// Input Schema
export interface SqlVirtualMachinesFetchDCAssessmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineName: string;
  runDiskConfigRules?: boolean;
}
export const SqlVirtualMachinesFetchDCAssessmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    runDiskConfigRules: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/fetchDCAssessment",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachinesFetchDCAssessmentInput>;

// Output Schema
export type SqlVirtualMachinesFetchDCAssessmentOutput = void;
export const SqlVirtualMachinesFetchDCAssessmentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlVirtualMachinesFetchDCAssessmentOutput>;

// The operation
/**
 * Starts SQL best practices Assessment with Disk Config rules on SQL virtual machine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesFetchDCAssessment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachinesFetchDCAssessmentInput,
    outputSchema: SqlVirtualMachinesFetchDCAssessmentOutput,
  }));
// Input Schema
export interface SqlVirtualMachinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineName: string;
  $expand?: string;
}
export const SqlVirtualMachinesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachinesGetInput>;

// Output Schema
export interface SqlVirtualMachinesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SqlVirtualMachinesGetOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachinesGetOutput>;

// The operation
/**
 * Gets a SQL virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 * @param $expand - The child resources to include in the response.
 */
export const SqlVirtualMachinesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlVirtualMachinesGetInput,
  outputSchema: SqlVirtualMachinesGetOutput,
}));
// Input Schema
export interface SqlVirtualMachinesListInput {
  subscriptionId: string;
}
export const SqlVirtualMachinesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachinesListInput>;

// Output Schema
export interface SqlVirtualMachinesListOutput {
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
export const SqlVirtualMachinesListOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachinesListOutput>;

// The operation
/**
 * Gets all SQL virtual machines in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SqlVirtualMachinesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlVirtualMachinesListInput,
  outputSchema: SqlVirtualMachinesListOutput,
}));
// Input Schema
export interface SqlVirtualMachinesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SqlVirtualMachinesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachinesListByResourceGroupInput>;

// Output Schema
export interface SqlVirtualMachinesListByResourceGroupOutput {
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
export const SqlVirtualMachinesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachinesListByResourceGroupOutput>;

// The operation
/**
 * Gets all SQL virtual machines in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SqlVirtualMachinesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachinesListByResourceGroupInput,
    outputSchema: SqlVirtualMachinesListByResourceGroupOutput,
  }));
// Input Schema
export interface SqlVirtualMachinesListBySqlVmGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineGroupName: string;
}
export const SqlVirtualMachinesListBySqlVmGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/sqlVirtualMachines",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachinesListBySqlVmGroupInput>;

// Output Schema
export interface SqlVirtualMachinesListBySqlVmGroupOutput {
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
export const SqlVirtualMachinesListBySqlVmGroupOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachinesListBySqlVmGroupOutput>;

// The operation
/**
 * Gets the list of sql virtual machines in a SQL virtual machine group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineGroupName - Name of the SQL virtual machine group.
 */
export const SqlVirtualMachinesListBySqlVmGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachinesListBySqlVmGroupInput,
    outputSchema: SqlVirtualMachinesListBySqlVmGroupOutput,
  }));
// Input Schema
export interface SqlVirtualMachinesRedeployInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineName: string;
}
export const SqlVirtualMachinesRedeployInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/redeploy",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachinesRedeployInput>;

// Output Schema
export type SqlVirtualMachinesRedeployOutput = void;
export const SqlVirtualMachinesRedeployOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlVirtualMachinesRedeployOutput>;

// The operation
/**
 * Uninstalls and reinstalls the SQL IaaS Extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesRedeploy = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlVirtualMachinesRedeployInput,
  outputSchema: SqlVirtualMachinesRedeployOutput,
}));
// Input Schema
export interface SqlVirtualMachinesStartAssessmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineName: string;
}
export const SqlVirtualMachinesStartAssessmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/startAssessment",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachinesStartAssessmentInput>;

// Output Schema
export type SqlVirtualMachinesStartAssessmentOutput = void;
export const SqlVirtualMachinesStartAssessmentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlVirtualMachinesStartAssessmentOutput>;

// The operation
/**
 * Starts SQL best practices Assessment on SQL virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesStartAssessment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachinesStartAssessmentInput,
    outputSchema: SqlVirtualMachinesStartAssessmentOutput,
  }));
// Input Schema
export interface SqlVirtualMachinesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineName: string;
  tags?: Record<string, string>;
}
export const SqlVirtualMachinesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachinesUpdateInput>;

// Output Schema
export interface SqlVirtualMachinesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SqlVirtualMachinesUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlVirtualMachinesUpdateOutput>;

// The operation
/**
 * Updates SQL virtual machine tags.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachinesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SqlVirtualMachinesUpdateInput,
  outputSchema: SqlVirtualMachinesUpdateOutput,
}));
// Input Schema
export interface SqlVirtualMachineTroubleshootTroubleshootInput {
  subscriptionId: string;
  resourceGroupName: string;
  sqlVirtualMachineName: string;
  startTimeUtc?: string;
  endTimeUtc?: string;
  troubleshootingScenario?: "UnhealthyReplica";
  properties?: { unhealthyReplicaInfo?: { availabilityGroupName?: string } };
  virtualMachineResourceId?: string;
}
export const SqlVirtualMachineTroubleshootTroubleshootInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    startTimeUtc: Schema.optional(Schema.String),
    endTimeUtc: Schema.optional(Schema.String),
    troubleshootingScenario: Schema.optional(
      Schema.Literals(["UnhealthyReplica"]),
    ),
    properties: Schema.optional(
      Schema.Struct({
        unhealthyReplicaInfo: Schema.optional(
          Schema.Struct({
            availabilityGroupName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    virtualMachineResourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/troubleshoot",
      apiVersion: "2023-10-01",
    }),
  ) as unknown as Schema.Codec<SqlVirtualMachineTroubleshootTroubleshootInput>;

// Output Schema
export interface SqlVirtualMachineTroubleshootTroubleshootOutput {
  startTimeUtc?: string;
  endTimeUtc?: string;
  troubleshootingScenario?: "UnhealthyReplica";
  properties?: { unhealthyReplicaInfo?: { availabilityGroupName?: string } };
  virtualMachineResourceId?: string;
}
export const SqlVirtualMachineTroubleshootTroubleshootOutput =
  /*@__PURE__*/ Schema.Struct({
    startTimeUtc: Schema.optional(Schema.String),
    endTimeUtc: Schema.optional(Schema.String),
    troubleshootingScenario: Schema.optional(
      Schema.Literals(["UnhealthyReplica"]),
    ),
    properties: Schema.optional(
      Schema.Struct({
        unhealthyReplicaInfo: Schema.optional(
          Schema.Struct({
            availabilityGroupName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    virtualMachineResourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlVirtualMachineTroubleshootTroubleshootOutput>;

// The operation
/**
 * Starts SQL virtual machine troubleshooting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sqlVirtualMachineName - Name of the SQL virtual machine.
 */
export const SqlVirtualMachineTroubleshootTroubleshoot =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SqlVirtualMachineTroubleshootTroubleshootInput,
    outputSchema: SqlVirtualMachineTroubleshootTroubleshootOutput,
  }));
