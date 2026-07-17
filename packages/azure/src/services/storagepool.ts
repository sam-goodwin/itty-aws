/**
 * Azure Storagepool API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DiskPoolsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
  sku: { name: string; tier?: string };
  properties: {
    availabilityZones?: string[];
    disks?: { id: string }[];
    subnetId: string;
    additionalCapabilities?: string[];
  };
  tags?: Record<string, string>;
  location: string;
  id?: string;
  name?: string;
  type?: string;
  managedBy?: string;
  managedByExtended?: string[];
}
export const DiskPoolsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskPoolName: Schema.String.pipe(T.PathParam()),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.String),
    }),
    properties: Schema.Struct({
      availabilityZones: Schema.optional(Schema.Array(Schema.String)),
      disks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
          }),
        ),
      ),
      subnetId: Schema.String,
      additionalCapabilities: Schema.optional(Schema.Array(Schema.String)),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    managedBy: Schema.optional(Schema.String),
    managedByExtended: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<DiskPoolsCreateOrUpdateInput>;

// Output Schema
export interface DiskPoolsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DiskPoolsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DiskPoolsCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update Disk pool. This create or update operation can take 15 minutes to complete. This is expected service behavior.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param api-version - The API version to use for this operation.
 */
export const DiskPoolsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskPoolsCreateOrUpdateInput,
  outputSchema: DiskPoolsCreateOrUpdateOutput,
}));
// Input Schema
export interface DiskPoolsDeallocateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
}
export const DiskPoolsDeallocateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/deallocate",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<DiskPoolsDeallocateInput>;

// Output Schema
export type DiskPoolsDeallocateOutput = void;
export const DiskPoolsDeallocateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DiskPoolsDeallocateOutput>;

// The operation
/**
 * Shuts down the Disk Pool and releases the compute resources. You are not billed for the compute resources that this Disk Pool uses. This operation can take 10 minutes to complete. This is expected service behavior.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param api-version - The API version to use for this operation.
 */
export const DiskPoolsDeallocate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskPoolsDeallocateInput,
  outputSchema: DiskPoolsDeallocateOutput,
}));
// Input Schema
export interface DiskPoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
}
export const DiskPoolsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<DiskPoolsDeleteInput>;

// Output Schema
export type DiskPoolsDeleteOutput = void;
export const DiskPoolsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DiskPoolsDeleteOutput>;

// The operation
/**
 * Delete a Disk pool; attached disks are not affected. This delete operation can take 10 minutes to complete. This is expected service behavior.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param api-version - The API version to use for this operation.
 */
export const DiskPoolsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskPoolsDeleteInput,
  outputSchema: DiskPoolsDeleteOutput,
}));
// Input Schema
export interface DiskPoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
}
export const DiskPoolsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<DiskPoolsGetInput>;

// Output Schema
export interface DiskPoolsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DiskPoolsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DiskPoolsGetOutput>;

// The operation
/**
 * Get a Disk pool.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param api-version - The API version to use for this operation.
 */
export const DiskPoolsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskPoolsGetInput,
  outputSchema: DiskPoolsGetOutput,
}));
// Input Schema
export interface DiskPoolsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DiskPoolsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<DiskPoolsListByResourceGroupInput>;

// Output Schema
export interface DiskPoolsListByResourceGroupOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const DiskPoolsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DiskPoolsListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of DiskPools in a resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const DiskPoolsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskPoolsListByResourceGroupInput,
    outputSchema: DiskPoolsListByResourceGroupOutput,
  }));
// Input Schema
export interface DiskPoolsListBySubscriptionInput {
  subscriptionId: string;
}
export const DiskPoolsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StoragePool/diskPools",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<DiskPoolsListBySubscriptionInput>;

// Output Schema
export interface DiskPoolsListBySubscriptionOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const DiskPoolsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DiskPoolsListBySubscriptionOutput>;

// The operation
/**
 * Gets a list of Disk Pools in a subscription
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const DiskPoolsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskPoolsListBySubscriptionInput,
  outputSchema: DiskPoolsListBySubscriptionOutput,
}));
// Input Schema
export interface DiskPoolsListOutboundNetworkDependenciesEndpointsInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
}
export const DiskPoolsListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<DiskPoolsListOutboundNetworkDependenciesEndpointsInput>;

// Output Schema
export interface DiskPoolsListOutboundNetworkDependenciesEndpointsOutput {
  value: {
    category?: string;
    endpoints?: {
      domainName?: string;
      endpointDetails?: {
        ipAddress?: string;
        port?: number;
        latency?: number;
        isAccessible?: boolean;
      }[];
    }[];
  }[];
  nextLink?: string;
}
export const DiskPoolsListOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        category: Schema.optional(Schema.String),
        endpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              domainName: Schema.optional(Schema.String),
              endpointDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipAddress: Schema.optional(Schema.String),
                    port: Schema.optional(Schema.Number),
                    latency: Schema.optional(Schema.Number),
                    isAccessible: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DiskPoolsListOutboundNetworkDependenciesEndpointsOutput>;

// The operation
/**
 * Gets the network endpoints of all outbound dependencies of a Disk Pool
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param api-version - The API version to use for this operation.
 */
export const DiskPoolsListOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DiskPoolsListOutboundNetworkDependenciesEndpointsInput,
    outputSchema: DiskPoolsListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export interface DiskPoolsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
}
export const DiskPoolsStartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/start",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<DiskPoolsStartInput>;

// Output Schema
export type DiskPoolsStartOutput = void;
export const DiskPoolsStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DiskPoolsStartOutput>;

// The operation
/**
 * The operation to start a Disk Pool. This start operation can take 10 minutes to complete. This is expected service behavior.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param api-version - The API version to use for this operation.
 */
export const DiskPoolsStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskPoolsStartInput,
  outputSchema: DiskPoolsStartOutput,
}));
// Input Schema
export interface DiskPoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
  managedBy?: string;
  managedByExtended?: string[];
  properties: { disks?: { id: string }[] };
  sku?: { name: string; tier?: string };
  tags?: Record<string, string>;
}
export const DiskPoolsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskPoolName: Schema.String.pipe(T.PathParam()),
  managedBy: Schema.optional(Schema.String),
  managedByExtended: Schema.optional(Schema.Array(Schema.String)),
  properties: Schema.Struct({
    disks: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
        }),
      ),
    ),
  }),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<DiskPoolsUpdateInput>;

// Output Schema
export interface DiskPoolsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DiskPoolsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DiskPoolsUpdateOutput>;

// The operation
/**
 * Update a Disk pool.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param api-version - The API version to use for this operation.
 */
export const DiskPoolsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskPoolsUpdateInput,
  outputSchema: DiskPoolsUpdateOutput,
}));
// Input Schema
export interface DiskPoolsUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
}
export const DiskPoolsUpgradeInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/upgrade",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<DiskPoolsUpgradeInput>;

// Output Schema
export type DiskPoolsUpgradeOutput = void;
export const DiskPoolsUpgradeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DiskPoolsUpgradeOutput>;

// The operation
/**
 * Upgrade replaces the underlying virtual machine hosts one at a time. This operation can take 10-15 minutes to complete. This is expected service behavior.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param api-version - The API version to use for this operation.
 */
export const DiskPoolsUpgrade = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskPoolsUpgradeInput,
  outputSchema: DiskPoolsUpgradeOutput,
}));
// Input Schema
export interface DiskPoolZonesListInput {
  subscriptionId: string;
  location: string;
}
export const DiskPoolZonesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StoragePool/locations/{location}/diskPoolZones",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<DiskPoolZonesListInput>;

// Output Schema
export interface DiskPoolZonesListOutput {
  value?: {
    availabilityZones?: string[];
    additionalCapabilities?: string[];
    sku?: { name: string; tier?: string };
  }[];
  nextLink?: string;
}
export const DiskPoolZonesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          availabilityZones: Schema.optional(Schema.Array(Schema.String)),
          additionalCapabilities: Schema.optional(Schema.Array(Schema.String)),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              tier: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DiskPoolZonesListOutput>;

// The operation
/**
 * Lists available Disk Pool Skus in an Azure location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location of the resource.
 */
export const DiskPoolZonesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DiskPoolZonesListInput,
  outputSchema: DiskPoolZonesListOutput,
}));
// Input Schema
export interface IscsiTargetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
  iscsiTargetName: string;
  properties: {
    aclMode: "Dynamic" | "Static";
    targetIqn?: string;
    staticAcls?: { initiatorIqn: string; mappedLuns: string[] }[];
    luns?: { name: string; managedDiskAzureResourceId: string; lun?: number }[];
  };
  managedBy?: string;
  managedByExtended?: string[];
}
export const IscsiTargetsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskPoolName: Schema.String.pipe(T.PathParam()),
    iscsiTargetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      aclMode: Schema.Literals(["Dynamic", "Static"]),
      targetIqn: Schema.optional(Schema.String),
      staticAcls: Schema.optional(
        Schema.Array(
          Schema.Struct({
            initiatorIqn: Schema.String,
            mappedLuns: Schema.Array(Schema.String),
          }),
        ),
      ),
      luns: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            managedDiskAzureResourceId: Schema.String,
            lun: Schema.optional(Schema.Number),
          }),
        ),
      ),
    }),
    managedBy: Schema.optional(Schema.String),
    managedByExtended: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/iscsiTargets/{iscsiTargetName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<IscsiTargetsCreateOrUpdateInput>;

// Output Schema
export interface IscsiTargetsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const IscsiTargetsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IscsiTargetsCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update an iSCSI Target.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param iscsiTargetName - The name of the iSCSI Target.
 * @param api-version - The API version to use for this operation.
 */
export const IscsiTargetsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IscsiTargetsCreateOrUpdateInput,
  outputSchema: IscsiTargetsCreateOrUpdateOutput,
}));
// Input Schema
export interface IscsiTargetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
  iscsiTargetName: string;
}
export const IscsiTargetsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskPoolName: Schema.String.pipe(T.PathParam()),
    iscsiTargetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/iscsiTargets/{iscsiTargetName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<IscsiTargetsDeleteInput>;

// Output Schema
export type IscsiTargetsDeleteOutput = void;
export const IscsiTargetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IscsiTargetsDeleteOutput>;

// The operation
/**
 * Delete an iSCSI Target.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param iscsiTargetName - The name of the iSCSI Target.
 * @param api-version - The API version to use for this operation.
 */
export const IscsiTargetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IscsiTargetsDeleteInput,
  outputSchema: IscsiTargetsDeleteOutput,
}));
// Input Schema
export interface IscsiTargetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
  iscsiTargetName: string;
}
export const IscsiTargetsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diskPoolName: Schema.String.pipe(T.PathParam()),
  iscsiTargetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/iscsiTargets/{iscsiTargetName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<IscsiTargetsGetInput>;

// Output Schema
export interface IscsiTargetsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const IscsiTargetsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<IscsiTargetsGetOutput>;

// The operation
/**
 * Get an iSCSI Target.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param iscsiTargetName - The name of the iSCSI Target.
 * @param api-version - The API version to use for this operation.
 */
export const IscsiTargetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IscsiTargetsGetInput,
  outputSchema: IscsiTargetsGetOutput,
}));
// Input Schema
export interface IscsiTargetsListByDiskPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
}
export const IscsiTargetsListByDiskPoolInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/iscsiTargets",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<IscsiTargetsListByDiskPoolInput>;

// Output Schema
export interface IscsiTargetsListByDiskPoolOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const IscsiTargetsListByDiskPoolOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IscsiTargetsListByDiskPoolOutput>;

// The operation
/**
 * Get iSCSI Targets in a Disk pool.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param api-version - The API version to use for this operation.
 */
export const IscsiTargetsListByDiskPool = /*@__PURE__*/ API.make(() => ({
  inputSchema: IscsiTargetsListByDiskPoolInput,
  outputSchema: IscsiTargetsListByDiskPoolOutput,
}));
// Input Schema
export interface IscsiTargetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diskPoolName: string;
  iscsiTargetName: string;
  properties: {
    staticAcls?: { initiatorIqn: string; mappedLuns: string[] }[];
    luns?: { name: string; managedDiskAzureResourceId: string; lun?: number }[];
  };
  managedBy?: string;
  managedByExtended?: string[];
}
export const IscsiTargetsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diskPoolName: Schema.String.pipe(T.PathParam()),
    iscsiTargetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      staticAcls: Schema.optional(
        Schema.Array(
          Schema.Struct({
            initiatorIqn: Schema.String,
            mappedLuns: Schema.Array(Schema.String),
          }),
        ),
      ),
      luns: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            managedDiskAzureResourceId: Schema.String,
            lun: Schema.optional(Schema.Number),
          }),
        ),
      ),
    }),
    managedBy: Schema.optional(Schema.String),
    managedByExtended: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StoragePool/diskPools/{diskPoolName}/iscsiTargets/{iscsiTargetName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<IscsiTargetsUpdateInput>;

// Output Schema
export interface IscsiTargetsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const IscsiTargetsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IscsiTargetsUpdateOutput>;

// The operation
/**
 * Update an iSCSI Target.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diskPoolName - The name of the Disk Pool.
 * @param iscsiTargetName - The name of the iSCSI Target.
 * @param api-version - The API version to use for this operation.
 */
export const IscsiTargetsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IscsiTargetsUpdateInput,
  outputSchema: IscsiTargetsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.StoragePool/operations",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name: string;
    isDataAction: boolean;
    actionType?: string;
    display: {
      provider: string;
      resource: string;
      operation: string;
      description: string;
    };
    origin?: string;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.String,
      isDataAction: Schema.Boolean,
      actionType: Schema.optional(Schema.String),
      display: Schema.Struct({
        provider: Schema.String,
        resource: Schema.String,
        operation: Schema.String,
        description: Schema.String,
      }),
      origin: Schema.optional(Schema.String),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Gets a list of StoragePool operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ResourceSkusListInput {
  subscriptionId: string;
  location: string;
}
export const ResourceSkusListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StoragePool/locations/{location}/skus",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<ResourceSkusListInput>;

// Output Schema
export interface ResourceSkusListOutput {
  value?: {
    apiVersion?: string;
    resourceType?: string;
    capabilities?: { name?: string; value?: string }[];
    locationInfo?: {
      location?: string;
      zones?: string[];
      zoneDetails?: {
        name?: string[];
        capabilities?: { name?: string; value?: string }[];
      }[];
    };
    name?: string;
    tier?: string;
    restrictions?: {
      type?: "Location" | "Zone";
      values?: string[];
      restrictionInfo?: { locations?: string[]; zones?: string[] };
      reasonCode?: "QuotaId" | "NotAvailableForSubscription";
    }[];
  }[];
  nextLink?: string;
}
export const ResourceSkusListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        apiVersion: Schema.optional(Schema.String),
        resourceType: Schema.optional(Schema.String),
        capabilities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        locationInfo: Schema.optional(
          Schema.Struct({
            location: Schema.optional(Schema.String),
            zones: Schema.optional(Schema.Array(Schema.String)),
            zoneDetails: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.Array(Schema.String)),
                  capabilities: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        restrictions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["Location", "Zone"])),
              values: Schema.optional(Schema.Array(Schema.String)),
              restrictionInfo: Schema.optional(
                Schema.Struct({
                  locations: Schema.optional(Schema.Array(Schema.String)),
                  zones: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
              reasonCode: Schema.optional(
                Schema.Literals(["QuotaId", "NotAvailableForSubscription"]),
              ),
            }),
          ),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ResourceSkusListOutput>;

// The operation
/**
 * Lists available StoragePool resources and skus in an Azure location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location of the resource.
 */
export const ResourceSkusList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ResourceSkusListInput,
  outputSchema: ResourceSkusListOutput,
}));
