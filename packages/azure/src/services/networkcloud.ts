/**
 * Azure Networkcloud API
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
export interface AccessBridgesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessBridgeName: "Bastion" | "PrivateVault" | "StorageDashboard";
  properties: {
    ipv4ConnectedPrefix?: string;
    ipv6ConnectedPrefix?: string;
    networkId: string;
    securityRules?: {
      description?: string;
      direction: "Inbound" | "Outbound";
      ipv4Addresses?: string[];
      ipv6Addresses?: string[];
      port: string;
    }[];
    detailedStatus?: "Running" | "Degraded" | "Failed";
    detailedStatusMessage?: string;
    endpoints?: {
      fqdn?: string;
      ipv4Address?: string;
      ipv6Address?: string;
      name?: string;
    }[];
    protocol?: "TCP" | "UDP";
    provisioningState?:
      | "Accepted"
      | "Canceled"
      | "Failed"
      | "Provisioning"
      | "Succeeded";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const AccessBridgesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessBridgeName: Schema.Literals([
      "Bastion",
      "PrivateVault",
      "StorageDashboard",
    ]).pipe(T.PathParam()),
    properties: Schema.Struct({
      ipv4ConnectedPrefix: Schema.optional(Schema.String),
      ipv6ConnectedPrefix: Schema.optional(Schema.String),
      networkId: Schema.String,
      securityRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            direction: Schema.Literals(["Inbound", "Outbound"]),
            ipv4Addresses: Schema.optional(Schema.Array(Schema.String)),
            ipv6Addresses: Schema.optional(Schema.Array(Schema.String)),
            port: Schema.String,
          }),
        ),
      ),
      detailedStatus: Schema.optional(
        Schema.Literals(["Running", "Degraded", "Failed"]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      endpoints: Schema.optional(
        Schema.Array(
          Schema.Struct({
            fqdn: Schema.optional(Schema.String),
            ipv4Address: Schema.optional(Schema.String),
            ipv6Address: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
      ),
      protocol: Schema.optional(Schema.Literals(["TCP", "UDP"])),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Canceled",
          "Failed",
          "Provisioning",
          "Succeeded",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/accessBridges/{accessBridgeName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AccessBridgesCreateOrUpdateInput>;

// Output Schema
export interface AccessBridgesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const AccessBridgesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AccessBridgesCreateOrUpdateOutput>;

// The operation
/**
 * Create a new access bridge or update the properties of the existing access bridge.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessBridgeName - The name of the access bridge.
 */
export const AccessBridgesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessBridgesCreateOrUpdateInput,
  outputSchema: AccessBridgesCreateOrUpdateOutput,
}));
// Input Schema
export interface AccessBridgesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessBridgeName: "Bastion" | "PrivateVault" | "StorageDashboard";
}
export const AccessBridgesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessBridgeName: Schema.Literals([
      "Bastion",
      "PrivateVault",
      "StorageDashboard",
    ]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/accessBridges/{accessBridgeName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AccessBridgesDeleteInput>;

// Output Schema
export type AccessBridgesDeleteOutput = void;
export const AccessBridgesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccessBridgesDeleteOutput>;

// The operation
/**
 * Delete the specified access bridge.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessBridgeName - The name of the access bridge.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const AccessBridgesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessBridgesDeleteInput,
  outputSchema: AccessBridgesDeleteOutput,
}));
// Input Schema
export interface AccessBridgesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessBridgeName: "Bastion" | "PrivateVault" | "StorageDashboard";
}
export const AccessBridgesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accessBridgeName: Schema.Literals([
    "Bastion",
    "PrivateVault",
    "StorageDashboard",
  ]).pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/accessBridges/{accessBridgeName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<AccessBridgesGetInput>;

// Output Schema
export interface AccessBridgesGetOutput {
  id?: string;
  name?: string;
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
export const AccessBridgesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AccessBridgesGetOutput>;

// The operation
/**
 * Get the properties of the provided access bridge.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessBridgeName - The name of the access bridge.
 */
export const AccessBridgesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessBridgesGetInput,
  outputSchema: AccessBridgesGetOutput,
}));
// Input Schema
export interface AccessBridgesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const AccessBridgesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/accessBridges",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AccessBridgesListByResourceGroupInput>;

// Output Schema
export interface AccessBridgesListByResourceGroupOutput {
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
export const AccessBridgesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AccessBridgesListByResourceGroupOutput>;

// The operation
/**
 * Get a list of access bridges in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const AccessBridgesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccessBridgesListByResourceGroupInput,
    outputSchema: AccessBridgesListByResourceGroupOutput,
  }));
// Input Schema
export interface AccessBridgesListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const AccessBridgesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/accessBridges",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AccessBridgesListBySubscriptionInput>;

// Output Schema
export interface AccessBridgesListBySubscriptionOutput {
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
export const AccessBridgesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AccessBridgesListBySubscriptionOutput>;

// The operation
/**
 * Get a list of access bridges in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const AccessBridgesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccessBridgesListBySubscriptionInput,
    outputSchema: AccessBridgesListBySubscriptionOutput,
  }));
// Input Schema
export interface AccessBridgesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessBridgeName: "Bastion" | "PrivateVault" | "StorageDashboard";
  properties?: {
    securityRules?: {
      description?: string;
      direction: "Inbound" | "Outbound";
      ipv4Addresses?: string[];
      ipv6Addresses?: string[];
      port: string;
    }[];
  };
  tags?: Record<string, string>;
}
export const AccessBridgesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessBridgeName: Schema.Literals([
      "Bastion",
      "PrivateVault",
      "StorageDashboard",
    ]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        securityRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              description: Schema.optional(Schema.String),
              direction: Schema.Literals(["Inbound", "Outbound"]),
              ipv4Addresses: Schema.optional(Schema.Array(Schema.String)),
              ipv6Addresses: Schema.optional(Schema.Array(Schema.String)),
              port: Schema.String,
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/accessBridges/{accessBridgeName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AccessBridgesUpdateInput>;

// Output Schema
export interface AccessBridgesUpdateOutput {
  id?: string;
  name?: string;
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
export const AccessBridgesUpdateOutput =
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
  }) as unknown as Schema.Codec<AccessBridgesUpdateOutput>;

// The operation
/**
 * Update properties of the provided access bridge, or update tags associated with the access bridge. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessBridgeName - The name of the access bridge.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const AccessBridgesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessBridgesUpdateInput,
  outputSchema: AccessBridgesUpdateOutput,
}));
// Input Schema
export interface AgentPoolsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  agentPoolName: string;
  properties: {
    administratorConfiguration?: {
      adminUsername?: string;
      sshPublicKeys?: { keyData: string }[];
    };
    agentOptions?: { hugepagesCount: number; hugepagesSize?: "2M" | "1G" };
    attachedNetworkConfiguration?: {
      l2Networks?: {
        networkId: string;
        pluginType?: "DPDK" | "SRIOV" | "OSDevice" | "MACVLAN" | "IPVLAN";
      }[];
      l3Networks?: {
        ipamEnabled?: "True" | "False";
        networkId: string;
        pluginType?: "DPDK" | "SRIOV" | "OSDevice" | "MACVLAN" | "IPVLAN";
      }[];
      trunkedNetworks?: {
        networkId: string;
        pluginType?: "DPDK" | "SRIOV" | "OSDevice" | "MACVLAN" | "IPVLAN";
      }[];
    };
    availabilityZones?: string[];
    count: number;
    labels?: { key: string; value: string }[];
    mode: "System" | "User" | "NotApplicable";
    taints?: { key: string; value: string }[];
    upgradeSettings?: {
      drainTimeout?: number;
      maxSurge?: string;
      maxUnavailable?: string;
    };
    vmSkuName: string;
    detailedStatus?: "Available" | "Error" | "Provisioning";
    detailedStatusMessage?: string;
    kubernetesVersion?: string;
    provisioningState?:
      | "Accepted"
      | "Canceled"
      | "Deleting"
      | "Failed"
      | "InProgress"
      | "Succeeded"
      | "Updating";
  };
  etag?: string;
  extendedLocation?: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const AgentPoolsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    agentPoolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      administratorConfiguration: Schema.optional(
        Schema.Struct({
          adminUsername: Schema.optional(Schema.String),
          sshPublicKeys: Schema.optional(
            Schema.Array(
              Schema.Struct({
                keyData: Schema.String,
              }),
            ),
          ),
        }),
      ),
      agentOptions: Schema.optional(
        Schema.Struct({
          hugepagesCount: Schema.Number,
          hugepagesSize: Schema.optional(Schema.Literals(["2M", "1G"])),
        }),
      ),
      attachedNetworkConfiguration: Schema.optional(
        Schema.Struct({
          l2Networks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                networkId: Schema.String,
                pluginType: Schema.optional(
                  Schema.Literals([
                    "DPDK",
                    "SRIOV",
                    "OSDevice",
                    "MACVLAN",
                    "IPVLAN",
                  ]),
                ),
              }),
            ),
          ),
          l3Networks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                ipamEnabled: Schema.optional(
                  Schema.Literals(["True", "False"]),
                ),
                networkId: Schema.String,
                pluginType: Schema.optional(
                  Schema.Literals([
                    "DPDK",
                    "SRIOV",
                    "OSDevice",
                    "MACVLAN",
                    "IPVLAN",
                  ]),
                ),
              }),
            ),
          ),
          trunkedNetworks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                networkId: Schema.String,
                pluginType: Schema.optional(
                  Schema.Literals([
                    "DPDK",
                    "SRIOV",
                    "OSDevice",
                    "MACVLAN",
                    "IPVLAN",
                  ]),
                ),
              }),
            ),
          ),
        }),
      ),
      availabilityZones: Schema.optional(Schema.Array(Schema.String)),
      count: Schema.Number,
      labels: Schema.optional(
        Schema.Array(
          Schema.Struct({
            key: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
      mode: Schema.Literals(["System", "User", "NotApplicable"]),
      taints: Schema.optional(
        Schema.Array(
          Schema.Struct({
            key: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
      upgradeSettings: Schema.optional(
        Schema.Struct({
          drainTimeout: Schema.optional(Schema.Number),
          maxSurge: Schema.optional(Schema.String),
          maxUnavailable: Schema.optional(Schema.String),
        }),
      ),
      vmSkuName: Schema.String,
      detailedStatus: Schema.optional(
        Schema.Literals(["Available", "Error", "Provisioning"]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      kubernetesVersion: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Canceled",
          "Deleting",
          "Failed",
          "InProgress",
          "Succeeded",
          "Updating",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["EdgeZone", "CustomLocation"]),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools/{agentPoolName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AgentPoolsCreateOrUpdateInput>;

// Output Schema
export interface AgentPoolsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const AgentPoolsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AgentPoolsCreateOrUpdateOutput>;

// The operation
/**
 * Create a new Kubernetes cluster agent pool or update the properties of the existing one.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param agentPoolName - The name of the Kubernetes cluster agent pool.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const AgentPoolsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolsCreateOrUpdateInput,
  outputSchema: AgentPoolsCreateOrUpdateOutput,
}));
// Input Schema
export interface AgentPoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  agentPoolName: string;
}
export const AgentPoolsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools/{agentPoolName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<AgentPoolsDeleteInput>;

// Output Schema
export type AgentPoolsDeleteOutput = void;
export const AgentPoolsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentPoolsDeleteOutput>;

// The operation
/**
 * Delete the provided Kubernetes cluster agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param agentPoolName - The name of the Kubernetes cluster agent pool.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const AgentPoolsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolsDeleteInput,
  outputSchema: AgentPoolsDeleteOutput,
}));
// Input Schema
export interface AgentPoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  agentPoolName: string;
}
export const AgentPoolsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools/{agentPoolName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<AgentPoolsGetInput>;

// Output Schema
export interface AgentPoolsGetOutput {
  id?: string;
  name?: string;
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
export const AgentPoolsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgentPoolsGetOutput>;

// The operation
/**
 * Get properties of the provided Kubernetes cluster agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param agentPoolName - The name of the Kubernetes cluster agent pool.
 */
export const AgentPoolsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolsGetInput,
  outputSchema: AgentPoolsGetOutput,
}));
// Input Schema
export interface AgentPoolsListByKubernetesClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  $top?: number;
  $skipToken?: string;
}
export const AgentPoolsListByKubernetesClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AgentPoolsListByKubernetesClusterInput>;

// Output Schema
export interface AgentPoolsListByKubernetesClusterOutput {
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
export const AgentPoolsListByKubernetesClusterOutput =
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
  }) as unknown as Schema.Codec<AgentPoolsListByKubernetesClusterOutput>;

// The operation
/**
 * Get a list of agent pools for the provided Kubernetes cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const AgentPoolsListByKubernetesCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentPoolsListByKubernetesClusterInput,
    outputSchema: AgentPoolsListByKubernetesClusterOutput,
  }));
// Input Schema
export interface AgentPoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  agentPoolName: string;
  properties?: {
    administratorConfiguration?: { sshPublicKeys?: { keyData: string }[] };
    count?: number;
    upgradeSettings?: {
      drainTimeout?: number;
      maxSurge?: string;
      maxUnavailable?: string;
    };
  };
  tags?: Record<string, string>;
}
export const AgentPoolsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      administratorConfiguration: Schema.optional(
        Schema.Struct({
          sshPublicKeys: Schema.optional(
            Schema.Array(
              Schema.Struct({
                keyData: Schema.String,
              }),
            ),
          ),
        }),
      ),
      count: Schema.optional(Schema.Number),
      upgradeSettings: Schema.optional(
        Schema.Struct({
          drainTimeout: Schema.optional(Schema.Number),
          maxSurge: Schema.optional(Schema.String),
          maxUnavailable: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools/{agentPoolName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<AgentPoolsUpdateInput>;

// Output Schema
export interface AgentPoolsUpdateOutput {
  id?: string;
  name?: string;
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
export const AgentPoolsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgentPoolsUpdateOutput>;

// The operation
/**
 * Patch the properties of the provided Kubernetes cluster agent pool, or update the tags associated with the Kubernetes cluster agent pool. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param agentPoolName - The name of the Kubernetes cluster agent pool.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const AgentPoolsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolsUpdateInput,
  outputSchema: AgentPoolsUpdateOutput,
}));
// Input Schema
export interface BareMetalMachineKeySetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  bareMetalMachineKeySetName: string;
  properties: {
    azureGroupId: string;
    expiration: string;
    jumpHostsAllowed: string[];
    osGroupName?: string;
    privilegeLevel: "Standard" | "Superuser" | "Other";
    privilegeLevelName?: string;
    userList: {
      azureUserName: string;
      description?: string;
      sshPublicKey: { keyData: string };
      userPrincipalName?: string;
    }[];
    detailedStatus?: "AllActive" | "SomeInvalid" | "AllInvalid" | "Validating";
    detailedStatusMessage?: string;
    lastValidation?: string;
    userListStatus?: {
      azureUserName?: string;
      status?: "Active" | "Invalid";
      statusMessage?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Provisioning";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const BareMetalMachineKeySetsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineKeySetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      azureGroupId: Schema.String,
      expiration: Schema.String,
      jumpHostsAllowed: Schema.Array(Schema.String),
      osGroupName: Schema.optional(Schema.String),
      privilegeLevel: Schema.Literals(["Standard", "Superuser", "Other"]),
      privilegeLevelName: Schema.optional(Schema.String),
      userList: Schema.Array(
        Schema.Struct({
          azureUserName: Schema.String,
          description: Schema.optional(Schema.String),
          sshPublicKey: Schema.Struct({
            keyData: Schema.String,
          }),
          userPrincipalName: Schema.optional(Schema.String),
        }),
      ),
      detailedStatus: Schema.optional(
        Schema.Literals([
          "AllActive",
          "SomeInvalid",
          "AllInvalid",
          "Validating",
        ]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      lastValidation: Schema.optional(Schema.String),
      userListStatus: Schema.optional(
        Schema.Array(
          Schema.Struct({
            azureUserName: Schema.optional(Schema.String),
            status: Schema.optional(Schema.Literals(["Active", "Invalid"])),
            statusMessage: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Accepted",
          "Provisioning",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets/{bareMetalMachineKeySetName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachineKeySetsCreateOrUpdateInput>;

// Output Schema
export interface BareMetalMachineKeySetsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const BareMetalMachineKeySetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BareMetalMachineKeySetsCreateOrUpdateOutput>;

// The operation
/**
 * Create a new bare metal machine key set or update the existing one for the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bareMetalMachineKeySetName - The name of the bare metal machine key set.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const BareMetalMachineKeySetsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachineKeySetsCreateOrUpdateInput,
    outputSchema: BareMetalMachineKeySetsCreateOrUpdateOutput,
  }));
// Input Schema
export interface BareMetalMachineKeySetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  bareMetalMachineKeySetName: string;
}
export const BareMetalMachineKeySetsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineKeySetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets/{bareMetalMachineKeySetName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachineKeySetsDeleteInput>;

// Output Schema
export type BareMetalMachineKeySetsDeleteOutput = void;
export const BareMetalMachineKeySetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachineKeySetsDeleteOutput>;

// The operation
/**
 * Delete the bare metal machine key set of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bareMetalMachineKeySetName - The name of the bare metal machine key set.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const BareMetalMachineKeySetsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachineKeySetsDeleteInput,
    outputSchema: BareMetalMachineKeySetsDeleteOutput,
  }));
// Input Schema
export interface BareMetalMachineKeySetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  bareMetalMachineKeySetName: string;
}
export const BareMetalMachineKeySetsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineKeySetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets/{bareMetalMachineKeySetName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachineKeySetsGetInput>;

// Output Schema
export interface BareMetalMachineKeySetsGetOutput {
  id?: string;
  name?: string;
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
export const BareMetalMachineKeySetsGetOutput =
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
  }) as unknown as Schema.Codec<BareMetalMachineKeySetsGetOutput>;

// The operation
/**
 * Get bare metal machine key set of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bareMetalMachineKeySetName - The name of the bare metal machine key set.
 */
export const BareMetalMachineKeySetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachineKeySetsGetInput,
  outputSchema: BareMetalMachineKeySetsGetOutput,
}));
// Input Schema
export interface BareMetalMachineKeySetsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  $top?: number;
  $skipToken?: string;
}
export const BareMetalMachineKeySetsListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachineKeySetsListByClusterInput>;

// Output Schema
export interface BareMetalMachineKeySetsListByClusterOutput {
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
export const BareMetalMachineKeySetsListByClusterOutput =
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
  }) as unknown as Schema.Codec<BareMetalMachineKeySetsListByClusterOutput>;

// The operation
/**
 * Get a list of bare metal machine key sets for the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const BareMetalMachineKeySetsListByCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachineKeySetsListByClusterInput,
    outputSchema: BareMetalMachineKeySetsListByClusterOutput,
  }));
// Input Schema
export interface BareMetalMachineKeySetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  bareMetalMachineKeySetName: string;
  properties?: {
    expiration?: string;
    jumpHostsAllowed?: string[];
    userList?: {
      azureUserName: string;
      description?: string;
      sshPublicKey: { keyData: string };
      userPrincipalName?: string;
    }[];
  };
  tags?: Record<string, string>;
}
export const BareMetalMachineKeySetsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineKeySetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        expiration: Schema.optional(Schema.String),
        jumpHostsAllowed: Schema.optional(Schema.Array(Schema.String)),
        userList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              azureUserName: Schema.String,
              description: Schema.optional(Schema.String),
              sshPublicKey: Schema.Struct({
                keyData: Schema.String,
              }),
              userPrincipalName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets/{bareMetalMachineKeySetName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachineKeySetsUpdateInput>;

// Output Schema
export interface BareMetalMachineKeySetsUpdateOutput {
  id?: string;
  name?: string;
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
export const BareMetalMachineKeySetsUpdateOutput =
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
  }) as unknown as Schema.Codec<BareMetalMachineKeySetsUpdateOutput>;

// The operation
/**
 * Patch properties of bare metal machine key set for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bareMetalMachineKeySetName - The name of the bare metal machine key set.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const BareMetalMachineKeySetsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachineKeySetsUpdateInput,
    outputSchema: BareMetalMachineKeySetsUpdateOutput,
  }));
// Input Schema
export interface BareMetalMachinesCordonInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
  evacuate?: "True" | "False";
}
export const BareMetalMachinesCordonInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    evacuate: Schema.optional(Schema.Literals(["True", "False"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/cordon",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesCordonInput>;

// Output Schema
export type BareMetalMachinesCordonOutput = void;
export const BareMetalMachinesCordonOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesCordonOutput>;

// The operation
/**
 * Cordon the provided bare metal machine's Kubernetes node.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesCordon = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesCordonInput,
  outputSchema: BareMetalMachinesCordonOutput,
}));
// Input Schema
export interface BareMetalMachinesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
  properties: {
    bmcConnectionString: string;
    bmcCredentials: {
      password: string | Redacted.Redacted<string>;
      username: string;
    };
    bmcMacAddress: string;
    bootMacAddress: string;
    machineDetails: string;
    machineName: string;
    machineSkuId: string;
    rackId: string;
    rackSlot: number;
    serialNumber: string;
    actionStates?: {
      actionType?: string;
      correlationId?: string;
      endTime?: string;
      message?: string;
      startTime?: string;
      status?: "Completed" | "InProgress" | "Failed";
      stepStates?: {
        endTime?: string;
        message?: string;
        startTime?: string;
        status?: "Completed" | "InProgress" | "Failed" | "NotStarted";
        stepName?: string;
      }[];
    }[];
    associatedResourceIds?: string[];
    bmcIpv4Address?: string;
    bmcIpv6Address?: string;
    caCertificate?: { hash?: string; value?: string };
    clusterId?: string;
    cordonStatus?: "Cordoned" | "Uncordoned";
    detailedStatus?:
      | "Preparing"
      | "Error"
      | "Available"
      | "Provisioning"
      | "Provisioned"
      | "Deprovisioning";
    detailedStatusMessage?: string;
    hardwareInventory?: {
      additionalHostInformation?: string;
      interfaces?: {
        linkStatus?: string;
        macAddress?: string;
        name?: string;
        networkInterfaceId?: string;
      }[];
      nics?: {
        lldpNeighbor?: {
          portDescription?: string;
          portName?: string;
          systemDescription?: string;
          systemName?: string;
        };
        macAddress?: string;
        name?: string;
      }[];
    };
    hardwareValidationStatus?: {
      lastValidationTime?: string;
      result?: "Pass" | "Fail";
    };
    hybridAksClustersAssociatedIds?: string[];
    kubernetesNodeName?: string;
    kubernetesVersion?: string;
    machineClusterVersion?: string;
    machineRoles?: string[];
    monitoringConfigurationStatus?: {
      logLevel?: "Default" | "Nexus";
      metricsLevel?: "Default" | "Nexus";
    };
    oamIpv4Address?: string;
    oamIpv6Address?: string;
    osImage?: string;
    powerState?: "On" | "Off";
    readyState?: "True" | "False";
    runtimeProtectionStatus?: {
      agentHealthStatus?: "Healthy" | "Unhealthy";
      agentHealthStatusIssues?: string[];
      agentLicenseStatus?: "Licensed" | "Unlicensed";
      definitionUpdateMode?: "Automatic" | "None";
      definitionsLastUpdated?: string;
      definitionsVersion?: string;
      enforcementLevel?:
        | "Audit"
        | "Disabled"
        | "OnDemand"
        | "Passive"
        | "RealTime";
      scanCompletedTime?: string;
      scanScheduledTime?: string;
      scanStartedTime?: string;
    };
    secretRotationStatus?: {
      expirePeriodDays?: number;
      lastRotationTime?: string;
      rotationPeriodDays?: number;
      secretArchiveReference?: {
        keyVaultId?: string;
        keyVaultUri?: string;
        secretName?: string;
        secretVersion?: string;
      };
      secretType?: string;
    }[];
    serviceTag?: string;
    virtualMachinesAssociatedIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Accepted";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const BareMetalMachinesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      bmcConnectionString: Schema.String,
      bmcCredentials: Schema.Struct({
        password: SensitiveString,
        username: Schema.String,
      }),
      bmcMacAddress: Schema.String,
      bootMacAddress: Schema.String,
      machineDetails: Schema.String,
      machineName: Schema.String,
      machineSkuId: Schema.String,
      rackId: Schema.String,
      rackSlot: Schema.Number,
      serialNumber: Schema.String,
      actionStates: Schema.optional(
        Schema.Array(
          Schema.Struct({
            actionType: Schema.optional(Schema.String),
            correlationId: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Literals(["Completed", "InProgress", "Failed"]),
            ),
            stepStates: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  endTime: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  startTime: Schema.optional(Schema.String),
                  status: Schema.optional(
                    Schema.Literals([
                      "Completed",
                      "InProgress",
                      "Failed",
                      "NotStarted",
                    ]),
                  ),
                  stepName: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      ),
      associatedResourceIds: Schema.optional(Schema.Array(Schema.String)),
      bmcIpv4Address: Schema.optional(Schema.String),
      bmcIpv6Address: Schema.optional(Schema.String),
      caCertificate: Schema.optional(
        Schema.Struct({
          hash: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
      clusterId: Schema.optional(Schema.String),
      cordonStatus: Schema.optional(
        Schema.Literals(["Cordoned", "Uncordoned"]),
      ),
      detailedStatus: Schema.optional(
        Schema.Literals([
          "Preparing",
          "Error",
          "Available",
          "Provisioning",
          "Provisioned",
          "Deprovisioning",
        ]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      hardwareInventory: Schema.optional(
        Schema.Struct({
          additionalHostInformation: Schema.optional(Schema.String),
          interfaces: Schema.optional(
            Schema.Array(
              Schema.Struct({
                linkStatus: Schema.optional(Schema.String),
                macAddress: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                networkInterfaceId: Schema.optional(Schema.String),
              }),
            ),
          ),
          nics: Schema.optional(
            Schema.Array(
              Schema.Struct({
                lldpNeighbor: Schema.optional(
                  Schema.Struct({
                    portDescription: Schema.optional(Schema.String),
                    portName: Schema.optional(Schema.String),
                    systemDescription: Schema.optional(Schema.String),
                    systemName: Schema.optional(Schema.String),
                  }),
                ),
                macAddress: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      hardwareValidationStatus: Schema.optional(
        Schema.Struct({
          lastValidationTime: Schema.optional(Schema.String),
          result: Schema.optional(Schema.Literals(["Pass", "Fail"])),
        }),
      ),
      hybridAksClustersAssociatedIds: Schema.optional(
        Schema.Array(Schema.String),
      ),
      kubernetesNodeName: Schema.optional(Schema.String),
      kubernetesVersion: Schema.optional(Schema.String),
      machineClusterVersion: Schema.optional(Schema.String),
      machineRoles: Schema.optional(Schema.Array(Schema.String)),
      monitoringConfigurationStatus: Schema.optional(
        Schema.Struct({
          logLevel: Schema.optional(Schema.Literals(["Default", "Nexus"])),
          metricsLevel: Schema.optional(Schema.Literals(["Default", "Nexus"])),
        }),
      ),
      oamIpv4Address: Schema.optional(Schema.String),
      oamIpv6Address: Schema.optional(Schema.String),
      osImage: Schema.optional(Schema.String),
      powerState: Schema.optional(Schema.Literals(["On", "Off"])),
      readyState: Schema.optional(Schema.Literals(["True", "False"])),
      runtimeProtectionStatus: Schema.optional(
        Schema.Struct({
          agentHealthStatus: Schema.optional(
            Schema.Literals(["Healthy", "Unhealthy"]),
          ),
          agentHealthStatusIssues: Schema.optional(Schema.Array(Schema.String)),
          agentLicenseStatus: Schema.optional(
            Schema.Literals(["Licensed", "Unlicensed"]),
          ),
          definitionUpdateMode: Schema.optional(
            Schema.Literals(["Automatic", "None"]),
          ),
          definitionsLastUpdated: Schema.optional(Schema.String),
          definitionsVersion: Schema.optional(Schema.String),
          enforcementLevel: Schema.optional(
            Schema.Literals([
              "Audit",
              "Disabled",
              "OnDemand",
              "Passive",
              "RealTime",
            ]),
          ),
          scanCompletedTime: Schema.optional(Schema.String),
          scanScheduledTime: Schema.optional(Schema.String),
          scanStartedTime: Schema.optional(Schema.String),
        }),
      ),
      secretRotationStatus: Schema.optional(
        Schema.Array(
          Schema.Struct({
            expirePeriodDays: Schema.optional(Schema.Number),
            lastRotationTime: Schema.optional(Schema.String),
            rotationPeriodDays: Schema.optional(Schema.Number),
            secretArchiveReference: Schema.optional(
              Schema.Struct({
                keyVaultId: Schema.optional(Schema.String),
                keyVaultUri: Schema.optional(Schema.String),
                secretName: Schema.optional(Schema.String),
                secretVersion: Schema.optional(Schema.String),
              }),
            ),
            secretType: Schema.optional(Schema.String),
          }),
        ),
      ),
      serviceTag: Schema.optional(Schema.String),
      virtualMachinesAssociatedIds: Schema.optional(
        Schema.Array(Schema.String),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Accepted",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesCreateOrUpdateInput>;

// Output Schema
export interface BareMetalMachinesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const BareMetalMachinesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BareMetalMachinesCreateOrUpdateOutput>;

// The operation
/**
 * Create a new bare metal machine or update the properties of the existing one. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const BareMetalMachinesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesCreateOrUpdateInput,
    outputSchema: BareMetalMachinesCreateOrUpdateOutput,
  }));
// Input Schema
export interface BareMetalMachinesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
}
export const BareMetalMachinesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesDeleteInput>;

// Output Schema
export type BareMetalMachinesDeleteOutput = void;
export const BareMetalMachinesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesDeleteOutput>;

// The operation
/**
 * Delete the provided bare metal machine. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const BareMetalMachinesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesDeleteInput,
  outputSchema: BareMetalMachinesDeleteOutput,
}));
// Input Schema
export interface BareMetalMachinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
}
export const BareMetalMachinesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesGetInput>;

// Output Schema
export interface BareMetalMachinesGetOutput {
  id?: string;
  name?: string;
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
export const BareMetalMachinesGetOutput =
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
  }) as unknown as Schema.Codec<BareMetalMachinesGetOutput>;

// The operation
/**
 * Get properties of the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesGetInput,
  outputSchema: BareMetalMachinesGetOutput,
}));
// Input Schema
export interface BareMetalMachinesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const BareMetalMachinesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesListByResourceGroupInput>;

// Output Schema
export interface BareMetalMachinesListByResourceGroupOutput {
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
export const BareMetalMachinesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<BareMetalMachinesListByResourceGroupOutput>;

// The operation
/**
 * Get a list of bare metal machines in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const BareMetalMachinesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesListByResourceGroupInput,
    outputSchema: BareMetalMachinesListByResourceGroupOutput,
  }));
// Input Schema
export interface BareMetalMachinesListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const BareMetalMachinesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/bareMetalMachines",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesListBySubscriptionInput>;

// Output Schema
export interface BareMetalMachinesListBySubscriptionOutput {
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
export const BareMetalMachinesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<BareMetalMachinesListBySubscriptionOutput>;

// The operation
/**
 * Get a list of bare metal machines in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const BareMetalMachinesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesListBySubscriptionInput,
    outputSchema: BareMetalMachinesListBySubscriptionOutput,
  }));
// Input Schema
export interface BareMetalMachinesPowerOffInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
  skipShutdown?: "True" | "False";
}
export const BareMetalMachinesPowerOffInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    skipShutdown: Schema.optional(Schema.Literals(["True", "False"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/powerOff",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesPowerOffInput>;

// Output Schema
export type BareMetalMachinesPowerOffOutput = void;
export const BareMetalMachinesPowerOffOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesPowerOffOutput>;

// The operation
/**
 * Power off the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesPowerOff = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesPowerOffInput,
  outputSchema: BareMetalMachinesPowerOffOutput,
}));
// Input Schema
export interface BareMetalMachinesReimageInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
  safeguardMode?: "All" | "None";
}
export const BareMetalMachinesReimageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    safeguardMode: Schema.optional(Schema.Literals(["All", "None"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/reimage",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesReimageInput>;

// Output Schema
export type BareMetalMachinesReimageOutput = void;
export const BareMetalMachinesReimageOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesReimageOutput>;

// The operation
/**
 * Reimage the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesReimage = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesReimageInput,
  outputSchema: BareMetalMachinesReimageOutput,
}));
// Input Schema
export interface BareMetalMachinesReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
  bmcCredentials?: {
    password: string | Redacted.Redacted<string>;
    username: string;
  };
  bmcMacAddress?: string;
  bootMacAddress?: string;
  machineName?: string;
  safeguardMode?: "All" | "None";
  serialNumber?: string;
  storagePolicy?: "Preserve" | "DiscardAll";
}
export const BareMetalMachinesReplaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    bmcCredentials: Schema.optional(
      Schema.Struct({
        password: SensitiveString,
        username: Schema.String,
      }),
    ),
    bmcMacAddress: Schema.optional(Schema.String),
    bootMacAddress: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    safeguardMode: Schema.optional(Schema.Literals(["All", "None"])),
    serialNumber: Schema.optional(Schema.String),
    storagePolicy: Schema.optional(Schema.Literals(["Preserve", "DiscardAll"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/replace",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesReplaceInput>;

// Output Schema
export type BareMetalMachinesReplaceOutput = void;
export const BareMetalMachinesReplaceOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesReplaceOutput>;

// The operation
/**
 * Replace the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesReplace = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesReplaceInput,
  outputSchema: BareMetalMachinesReplaceOutput,
}));
// Input Schema
export interface BareMetalMachinesRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
}
export const BareMetalMachinesRestartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/restart",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesRestartInput>;

// Output Schema
export type BareMetalMachinesRestartOutput = void;
export const BareMetalMachinesRestartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesRestartOutput>;

// The operation
/**
 * Restart the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesRestart = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesRestartInput,
  outputSchema: BareMetalMachinesRestartOutput,
}));
// Input Schema
export interface BareMetalMachinesRunCommandInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
  arguments?: string[];
  limitTimeSeconds: number;
  script: string;
}
export const BareMetalMachinesRunCommandInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    arguments: Schema.optional(Schema.Array(Schema.String)),
    limitTimeSeconds: Schema.Number,
    script: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/runCommand",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesRunCommandInput>;

// Output Schema
export type BareMetalMachinesRunCommandOutput = void;
export const BareMetalMachinesRunCommandOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesRunCommandOutput>;

// The operation
/**
 * Run the command or the script on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesRunCommand = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesRunCommandInput,
  outputSchema: BareMetalMachinesRunCommandOutput,
}));
// Input Schema
export interface BareMetalMachinesRunDataExtractsInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
  commands: { arguments?: string[]; command: string }[];
  limitTimeSeconds: number;
}
export const BareMetalMachinesRunDataExtractsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    commands: Schema.Array(
      Schema.Struct({
        arguments: Schema.optional(Schema.Array(Schema.String)),
        command: Schema.String,
      }),
    ),
    limitTimeSeconds: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/runDataExtracts",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesRunDataExtractsInput>;

// Output Schema
export type BareMetalMachinesRunDataExtractsOutput = void;
export const BareMetalMachinesRunDataExtractsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesRunDataExtractsOutput>;

// The operation
/**
 * Run one or more data extractions on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesRunDataExtracts =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesRunDataExtractsInput,
    outputSchema: BareMetalMachinesRunDataExtractsOutput,
  }));
// Input Schema
export interface BareMetalMachinesRunDataExtractsRestrictedInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
  commands: { arguments?: string[]; command: string }[];
  limitTimeSeconds: number;
}
export const BareMetalMachinesRunDataExtractsRestrictedInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    commands: Schema.Array(
      Schema.Struct({
        arguments: Schema.optional(Schema.Array(Schema.String)),
        command: Schema.String,
      }),
    ),
    limitTimeSeconds: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/runDataExtractsRestricted",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesRunDataExtractsRestrictedInput>;

// Output Schema
export type BareMetalMachinesRunDataExtractsRestrictedOutput = void;
export const BareMetalMachinesRunDataExtractsRestrictedOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesRunDataExtractsRestrictedOutput>;

// The operation
/**
 * Run one or more restricted data extractions on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesRunDataExtractsRestricted =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesRunDataExtractsRestrictedInput,
    outputSchema: BareMetalMachinesRunDataExtractsRestrictedOutput,
  }));
// Input Schema
export interface BareMetalMachinesRunReadCommandsInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
  commands: { arguments?: string[]; command: string }[];
  limitTimeSeconds: number;
}
export const BareMetalMachinesRunReadCommandsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    commands: Schema.Array(
      Schema.Struct({
        arguments: Schema.optional(Schema.Array(Schema.String)),
        command: Schema.String,
      }),
    ),
    limitTimeSeconds: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/runReadCommands",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesRunReadCommandsInput>;

// Output Schema
export type BareMetalMachinesRunReadCommandsOutput = void;
export const BareMetalMachinesRunReadCommandsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesRunReadCommandsOutput>;

// The operation
/**
 * Run one or more read-only commands on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesRunReadCommands =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesRunReadCommandsInput,
    outputSchema: BareMetalMachinesRunReadCommandsOutput,
  }));
// Input Schema
export interface BareMetalMachinesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
}
export const BareMetalMachinesStartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/start",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesStartInput>;

// Output Schema
export type BareMetalMachinesStartOutput = void;
export const BareMetalMachinesStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesStartOutput>;

// The operation
/**
 * Start the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesStartInput,
  outputSchema: BareMetalMachinesStartOutput,
}));
// Input Schema
export interface BareMetalMachinesUncordonInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
}
export const BareMetalMachinesUncordonInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/uncordon",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesUncordonInput>;

// Output Schema
export type BareMetalMachinesUncordonOutput = void;
export const BareMetalMachinesUncordonOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BareMetalMachinesUncordonOutput>;

// The operation
/**
 * Uncordon the provided bare metal machine's Kubernetes node.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesUncordon = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesUncordonInput,
  outputSchema: BareMetalMachinesUncordonOutput,
}));
// Input Schema
export interface BareMetalMachinesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  bareMetalMachineName: string;
  properties?: { machineDetails?: string };
  tags?: Record<string, string>;
}
export const BareMetalMachinesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        machineDetails: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BareMetalMachinesUpdateInput>;

// Output Schema
export interface BareMetalMachinesUpdateOutput {
  id?: string;
  name?: string;
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
export const BareMetalMachinesUpdateOutput =
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
  }) as unknown as Schema.Codec<BareMetalMachinesUpdateOutput>;

// The operation
/**
 * Patch properties of the provided bare metal machine, or update tags associated with the bare metal machine. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const BareMetalMachinesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BareMetalMachinesUpdateInput,
  outputSchema: BareMetalMachinesUpdateOutput,
}));
// Input Schema
export interface BmcKeySetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  bmcKeySetName: string;
  properties: {
    azureGroupId: string;
    expiration: string;
    privilegeLevel: "ReadOnly" | "Administrator";
    userList: {
      azureUserName: string;
      description?: string;
      sshPublicKey: { keyData: string };
      userPrincipalName?: string;
    }[];
    detailedStatus?: "AllActive" | "SomeInvalid" | "AllInvalid" | "Validating";
    detailedStatusMessage?: string;
    lastValidation?: string;
    userListStatus?: {
      azureUserName?: string;
      status?: "Active" | "Invalid";
      statusMessage?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Provisioning";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const BmcKeySetsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    bmcKeySetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      azureGroupId: Schema.String,
      expiration: Schema.String,
      privilegeLevel: Schema.Literals(["ReadOnly", "Administrator"]),
      userList: Schema.Array(
        Schema.Struct({
          azureUserName: Schema.String,
          description: Schema.optional(Schema.String),
          sshPublicKey: Schema.Struct({
            keyData: Schema.String,
          }),
          userPrincipalName: Schema.optional(Schema.String),
        }),
      ),
      detailedStatus: Schema.optional(
        Schema.Literals([
          "AllActive",
          "SomeInvalid",
          "AllInvalid",
          "Validating",
        ]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      lastValidation: Schema.optional(Schema.String),
      userListStatus: Schema.optional(
        Schema.Array(
          Schema.Struct({
            azureUserName: Schema.optional(Schema.String),
            status: Schema.optional(Schema.Literals(["Active", "Invalid"])),
            statusMessage: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Accepted",
          "Provisioning",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bmcKeySets/{bmcKeySetName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BmcKeySetsCreateOrUpdateInput>;

// Output Schema
export interface BmcKeySetsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const BmcKeySetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BmcKeySetsCreateOrUpdateOutput>;

// The operation
/**
 * Create a new baseboard management controller key set or update the existing one for the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bmcKeySetName - The name of the baseboard management controller key set.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const BmcKeySetsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BmcKeySetsCreateOrUpdateInput,
  outputSchema: BmcKeySetsCreateOrUpdateOutput,
}));
// Input Schema
export interface BmcKeySetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  bmcKeySetName: string;
}
export const BmcKeySetsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  bmcKeySetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bmcKeySets/{bmcKeySetName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<BmcKeySetsDeleteInput>;

// Output Schema
export type BmcKeySetsDeleteOutput = void;
export const BmcKeySetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BmcKeySetsDeleteOutput>;

// The operation
/**
 * Delete the baseboard management controller key set of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bmcKeySetName - The name of the baseboard management controller key set.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const BmcKeySetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BmcKeySetsDeleteInput,
  outputSchema: BmcKeySetsDeleteOutput,
}));
// Input Schema
export interface BmcKeySetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  bmcKeySetName: string;
}
export const BmcKeySetsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  bmcKeySetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bmcKeySets/{bmcKeySetName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<BmcKeySetsGetInput>;

// Output Schema
export interface BmcKeySetsGetOutput {
  id?: string;
  name?: string;
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
export const BmcKeySetsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BmcKeySetsGetOutput>;

// The operation
/**
 * Get baseboard management controller key set of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bmcKeySetName - The name of the baseboard management controller key set.
 */
export const BmcKeySetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BmcKeySetsGetInput,
  outputSchema: BmcKeySetsGetOutput,
}));
// Input Schema
export interface BmcKeySetsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  $top?: number;
  $skipToken?: string;
}
export const BmcKeySetsListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bmcKeySets",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BmcKeySetsListByClusterInput>;

// Output Schema
export interface BmcKeySetsListByClusterOutput {
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
export const BmcKeySetsListByClusterOutput =
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
  }) as unknown as Schema.Codec<BmcKeySetsListByClusterOutput>;

// The operation
/**
 * Get a list of baseboard management controller key sets for the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const BmcKeySetsListByCluster = /*@__PURE__*/ API.make(() => ({
  inputSchema: BmcKeySetsListByClusterInput,
  outputSchema: BmcKeySetsListByClusterOutput,
}));
// Input Schema
export interface BmcKeySetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  bmcKeySetName: string;
  properties?: {
    expiration?: string;
    userList?: {
      azureUserName: string;
      description?: string;
      sshPublicKey: { keyData: string };
      userPrincipalName?: string;
    }[];
  };
  tags?: Record<string, string>;
}
export const BmcKeySetsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  bmcKeySetName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      expiration: Schema.optional(Schema.String),
      userList: Schema.optional(
        Schema.Array(
          Schema.Struct({
            azureUserName: Schema.String,
            description: Schema.optional(Schema.String),
            sshPublicKey: Schema.Struct({
              keyData: Schema.String,
            }),
            userPrincipalName: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bmcKeySets/{bmcKeySetName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<BmcKeySetsUpdateInput>;

// Output Schema
export interface BmcKeySetsUpdateOutput {
  id?: string;
  name?: string;
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
export const BmcKeySetsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BmcKeySetsUpdateOutput>;

// The operation
/**
 * Patch properties of baseboard management controller key set for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bmcKeySetName - The name of the baseboard management controller key set.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const BmcKeySetsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BmcKeySetsUpdateInput,
  outputSchema: BmcKeySetsUpdateOutput,
}));
// Input Schema
export interface CloudServicesNetworksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cloudServicesNetworkName: string;
  properties?: {
    additionalEgressEndpoints?: {
      category: string;
      endpoints: { domainName: string; port?: number }[];
    }[];
    enableDefaultEgressEndpoints?: "True" | "False";
    storageOptions?: {
      mode?: "None" | "Standard";
      sizeMiB?: number;
      storageApplianceId?: string;
    };
    associatedResourceIds?: string[];
    clusterId?: string;
    detailedStatus?: "Error" | "Available" | "Provisioning";
    detailedStatusMessage?: string;
    enabledEgressEndpoints?: {
      category: string;
      endpoints: { domainName: string; port?: number }[];
    }[];
    hybridAksClustersAssociatedIds?: string[];
    interfaceName?: string;
    storageStatus?: {
      mode?: "None" | "Standard";
      sizeMiB?: number;
      status?:
        | "Available"
        | "ExpandingVolume"
        | "ExpansionFailed"
        | "Initializing"
        | "None"
        | "Repairing";
      statusMessage?: string;
      volumeId?: string;
    };
    virtualMachinesAssociatedIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Accepted";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const CloudServicesNetworksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudServicesNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        additionalEgressEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              category: Schema.String,
              endpoints: Schema.Array(
                Schema.Struct({
                  domainName: Schema.String,
                  port: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
        enableDefaultEgressEndpoints: Schema.optional(
          Schema.Literals(["True", "False"]),
        ),
        storageOptions: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(Schema.Literals(["None", "Standard"])),
            sizeMiB: Schema.optional(Schema.Number),
            storageApplianceId: Schema.optional(Schema.String),
          }),
        ),
        associatedResourceIds: Schema.optional(Schema.Array(Schema.String)),
        clusterId: Schema.optional(Schema.String),
        detailedStatus: Schema.optional(
          Schema.Literals(["Error", "Available", "Provisioning"]),
        ),
        detailedStatusMessage: Schema.optional(Schema.String),
        enabledEgressEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              category: Schema.String,
              endpoints: Schema.Array(
                Schema.Struct({
                  domainName: Schema.String,
                  port: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
        hybridAksClustersAssociatedIds: Schema.optional(
          Schema.Array(Schema.String),
        ),
        interfaceName: Schema.optional(Schema.String),
        storageStatus: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(Schema.Literals(["None", "Standard"])),
            sizeMiB: Schema.optional(Schema.Number),
            status: Schema.optional(
              Schema.Literals([
                "Available",
                "ExpandingVolume",
                "ExpansionFailed",
                "Initializing",
                "None",
                "Repairing",
              ]),
            ),
            statusMessage: Schema.optional(Schema.String),
            volumeId: Schema.optional(Schema.String),
          }),
        ),
        virtualMachinesAssociatedIds: Schema.optional(
          Schema.Array(Schema.String),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Accepted",
          ]),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/cloudServicesNetworks/{cloudServicesNetworkName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<CloudServicesNetworksCreateOrUpdateInput>;

// Output Schema
export interface CloudServicesNetworksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const CloudServicesNetworksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CloudServicesNetworksCreateOrUpdateOutput>;

// The operation
/**
 * Create a new cloud services network or update the properties of the existing cloud services network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudServicesNetworkName - The name of the cloud services network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const CloudServicesNetworksCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CloudServicesNetworksCreateOrUpdateInput,
    outputSchema: CloudServicesNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export interface CloudServicesNetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  cloudServicesNetworkName: string;
}
export const CloudServicesNetworksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudServicesNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/cloudServicesNetworks/{cloudServicesNetworkName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<CloudServicesNetworksDeleteInput>;

// Output Schema
export type CloudServicesNetworksDeleteOutput = void;
export const CloudServicesNetworksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CloudServicesNetworksDeleteOutput>;

// The operation
/**
 * Delete the provided cloud services network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudServicesNetworkName - The name of the cloud services network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const CloudServicesNetworksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudServicesNetworksDeleteInput,
  outputSchema: CloudServicesNetworksDeleteOutput,
}));
// Input Schema
export interface CloudServicesNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  cloudServicesNetworkName: string;
}
export const CloudServicesNetworksGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudServicesNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/cloudServicesNetworks/{cloudServicesNetworkName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<CloudServicesNetworksGetInput>;

// Output Schema
export interface CloudServicesNetworksGetOutput {
  id?: string;
  name?: string;
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
export const CloudServicesNetworksGetOutput =
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
  }) as unknown as Schema.Codec<CloudServicesNetworksGetOutput>;

// The operation
/**
 * Get properties of the provided cloud services network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudServicesNetworkName - The name of the cloud services network.
 */
export const CloudServicesNetworksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudServicesNetworksGetInput,
  outputSchema: CloudServicesNetworksGetOutput,
}));
// Input Schema
export interface CloudServicesNetworksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const CloudServicesNetworksListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/cloudServicesNetworks",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<CloudServicesNetworksListByResourceGroupInput>;

// Output Schema
export interface CloudServicesNetworksListByResourceGroupOutput {
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
export const CloudServicesNetworksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<CloudServicesNetworksListByResourceGroupOutput>;

// The operation
/**
 * Get a list of cloud services networks in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const CloudServicesNetworksListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CloudServicesNetworksListByResourceGroupInput,
    outputSchema: CloudServicesNetworksListByResourceGroupOutput,
  }));
// Input Schema
export interface CloudServicesNetworksListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const CloudServicesNetworksListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/cloudServicesNetworks",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<CloudServicesNetworksListBySubscriptionInput>;

// Output Schema
export interface CloudServicesNetworksListBySubscriptionOutput {
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
export const CloudServicesNetworksListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<CloudServicesNetworksListBySubscriptionOutput>;

// The operation
/**
 * Get a list of cloud services networks in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const CloudServicesNetworksListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CloudServicesNetworksListBySubscriptionInput,
    outputSchema: CloudServicesNetworksListBySubscriptionOutput,
  }));
// Input Schema
export interface CloudServicesNetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cloudServicesNetworkName: string;
  properties?: {
    additionalEgressEndpoints?: {
      category: string;
      endpoints: { domainName: string; port?: number }[];
    }[];
    enableDefaultEgressEndpoints?: "True" | "False";
    storageOptions?: {
      mode?: "None" | "Standard";
      sizeMiB?: number;
      storageApplianceId?: string;
    };
  };
  tags?: Record<string, string>;
}
export const CloudServicesNetworksUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudServicesNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        additionalEgressEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              category: Schema.String,
              endpoints: Schema.Array(
                Schema.Struct({
                  domainName: Schema.String,
                  port: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
        enableDefaultEgressEndpoints: Schema.optional(
          Schema.Literals(["True", "False"]),
        ),
        storageOptions: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(Schema.Literals(["None", "Standard"])),
            sizeMiB: Schema.optional(Schema.Number),
            storageApplianceId: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/cloudServicesNetworks/{cloudServicesNetworkName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<CloudServicesNetworksUpdateInput>;

// Output Schema
export interface CloudServicesNetworksUpdateOutput {
  id?: string;
  name?: string;
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
export const CloudServicesNetworksUpdateOutput =
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
  }) as unknown as Schema.Codec<CloudServicesNetworksUpdateOutput>;

// The operation
/**
 * Update properties of the provided cloud services network, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudServicesNetworkName - The name of the cloud services network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const CloudServicesNetworksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudServicesNetworksUpdateInput,
  outputSchema: CloudServicesNetworksUpdateOutput,
}));
// Input Schema
export interface ClusterManagersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterManagerName: string;
  properties: {
    analyticsWorkspaceId?: string;
    availabilityZones?: string[];
    clusterVersions?: {
      supportExpiryDate?: string;
      targetClusterVersion?: string;
    }[];
    detailedStatus?:
      | "Error"
      | "Available"
      | "Provisioning"
      | "ProvisioningFailed"
      | "Updating"
      | "UpdateFailed";
    detailedStatusMessage?: string;
    fabricControllerId: string;
    managedResourceGroupConfiguration?: { location?: string; name?: string };
    managerExtendedLocation?: {
      name: string;
      type: "EdgeZone" | "CustomLocation";
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Accepted"
      | "Updating";
    relayConfiguration?: { relayNamespaceId?: string };
    vmSize?: string;
  };
  etag?: string;
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
  kind?: "Nexus" | "AzureLocal";
  tags?: Record<string, string>;
  location: string;
}
export const ClusterManagersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterManagerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      analyticsWorkspaceId: Schema.optional(Schema.String),
      availabilityZones: Schema.optional(Schema.Array(Schema.String)),
      clusterVersions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            supportExpiryDate: Schema.optional(Schema.String),
            targetClusterVersion: Schema.optional(Schema.String),
          }),
        ),
      ),
      detailedStatus: Schema.optional(
        Schema.Literals([
          "Error",
          "Available",
          "Provisioning",
          "ProvisioningFailed",
          "Updating",
          "UpdateFailed",
        ]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      fabricControllerId: Schema.String,
      managedResourceGroupConfiguration: Schema.optional(
        Schema.Struct({
          location: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
      managerExtendedLocation: Schema.optional(
        Schema.Struct({
          name: Schema.String,
          type: Schema.Literals(["EdgeZone", "CustomLocation"]),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Accepted",
          "Updating",
        ]),
      ),
      relayConfiguration: Schema.optional(
        Schema.Struct({
          relayNamespaceId: Schema.optional(Schema.String),
        }),
      ),
      vmSize: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.String),
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
    kind: Schema.optional(Schema.Literals(["Nexus", "AzureLocal"])),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusterManagers/{clusterManagerName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClusterManagersCreateOrUpdateInput>;

// Output Schema
export interface ClusterManagersCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ClusterManagersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ClusterManagersCreateOrUpdateOutput>;

// The operation
/**
 * Create a new cluster manager or update properties of the cluster manager if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterManagerName - The name of the cluster manager.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const ClusterManagersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClusterManagersCreateOrUpdateInput,
    outputSchema: ClusterManagersCreateOrUpdateOutput,
  }));
// Input Schema
export interface ClusterManagersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterManagerName: string;
}
export const ClusterManagersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterManagerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusterManagers/{clusterManagerName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClusterManagersDeleteInput>;

// Output Schema
export type ClusterManagersDeleteOutput = void;
export const ClusterManagersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClusterManagersDeleteOutput>;

// The operation
/**
 * Delete the provided cluster manager.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterManagerName - The name of the cluster manager.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const ClusterManagersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClusterManagersDeleteInput,
  outputSchema: ClusterManagersDeleteOutput,
}));
// Input Schema
export interface ClusterManagersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterManagerName: string;
}
export const ClusterManagersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterManagerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusterManagers/{clusterManagerName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClusterManagersGetInput>;

// Output Schema
export interface ClusterManagersGetOutput {
  id?: string;
  name?: string;
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
export const ClusterManagersGetOutput =
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
  }) as unknown as Schema.Codec<ClusterManagersGetOutput>;

// The operation
/**
 * Get the properties of the provided cluster manager.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterManagerName - The name of the cluster manager.
 */
export const ClusterManagersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClusterManagersGetInput,
  outputSchema: ClusterManagersGetOutput,
}));
// Input Schema
export interface ClusterManagersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const ClusterManagersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusterManagers",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClusterManagersListByResourceGroupInput>;

// Output Schema
export interface ClusterManagersListByResourceGroupOutput {
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
export const ClusterManagersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ClusterManagersListByResourceGroupOutput>;

// The operation
/**
 * Get a list of cluster managers in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const ClusterManagersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClusterManagersListByResourceGroupInput,
    outputSchema: ClusterManagersListByResourceGroupOutput,
  }));
// Input Schema
export interface ClusterManagersListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const ClusterManagersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/clusterManagers",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClusterManagersListBySubscriptionInput>;

// Output Schema
export interface ClusterManagersListBySubscriptionOutput {
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
export const ClusterManagersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ClusterManagersListBySubscriptionOutput>;

// The operation
/**
 * Get a list of cluster managers in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const ClusterManagersListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClusterManagersListBySubscriptionInput,
    outputSchema: ClusterManagersListBySubscriptionOutput,
  }));
// Input Schema
export interface ClusterManagersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterManagerName: string;
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
}
export const ClusterManagersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterManagerName: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusterManagers/{clusterManagerName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClusterManagersUpdateInput>;

// Output Schema
export interface ClusterManagersUpdateOutput {
  id?: string;
  name?: string;
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
export const ClusterManagersUpdateOutput =
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
  }) as unknown as Schema.Codec<ClusterManagersUpdateOutput>;

// The operation
/**
 * Patch properties of the provided cluster manager, or update the tags assigned to the cluster manager. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterManagerName - The name of the cluster manager.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const ClusterManagersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClusterManagersUpdateInput,
  outputSchema: ClusterManagersUpdateOutput,
}));
// Input Schema
export interface ClusterManagersUpdateRelayPrivateEndpointConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterManagerName: string;
  connectionState: "Approved" | "Rejected";
  description?: string;
  privateEndpointResourceId: string;
}
export const ClusterManagersUpdateRelayPrivateEndpointConnectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterManagerName: Schema.String.pipe(T.PathParam()),
    connectionState: Schema.Literals(["Approved", "Rejected"]),
    description: Schema.optional(Schema.String),
    privateEndpointResourceId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusterManagers/{clusterManagerName}/updateRelayPrivateEndpointConnection",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClusterManagersUpdateRelayPrivateEndpointConnectionInput>;

// Output Schema
export type ClusterManagersUpdateRelayPrivateEndpointConnectionOutput = void;
export const ClusterManagersUpdateRelayPrivateEndpointConnectionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClusterManagersUpdateRelayPrivateEndpointConnectionOutput>;

// The operation
/**
 * Update the private endpoint connection for the Azure Relay namespace managed by the specified cluster manager. Use this operation to approve or reject a pending private endpoint connection request for the relay namespace managed by the cluster manager.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterManagerName - The name of the cluster manager.
 */
export const ClusterManagersUpdateRelayPrivateEndpointConnection =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClusterManagersUpdateRelayPrivateEndpointConnectionInput,
    outputSchema: ClusterManagersUpdateRelayPrivateEndpointConnectionOutput,
  }));
// Input Schema
export interface ClustersContinueUpdateVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  machineGroupTargetingMode?: "AlphaByRack";
  safeguardMode?: "All" | "None";
}
export const ClustersContinueUpdateVersionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    machineGroupTargetingMode: Schema.optional(
      Schema.Literals(["AlphaByRack"]),
    ),
    safeguardMode: Schema.optional(Schema.Literals(["All", "None"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/continueUpdateVersion",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClustersContinueUpdateVersionInput>;

// Output Schema
export type ClustersContinueUpdateVersionOutput = void;
export const ClustersContinueUpdateVersionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersContinueUpdateVersionOutput>;

// The operation
/**
 * Trigger the continuation of an update for a cluster with a matching update strategy that has paused after completing a segment of the update.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersContinueUpdateVersion =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClustersContinueUpdateVersionInput,
    outputSchema: ClustersContinueUpdateVersionOutput,
  }));
// Input Schema
export interface ClustersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties: {
    aggregatorOrSingleRackDefinition: {
      availabilityZone?: string;
      bareMetalMachineConfigurationData?: {
        bmcConnectionString?: string;
        bmcCredentials: {
          password: string | Redacted.Redacted<string>;
          username: string;
        };
        bmcMacAddress: string;
        bootMacAddress: string;
        machineDetails?: string;
        machineName?: string;
        rackSlot: number;
        serialNumber: string;
      }[];
      networkRackId: string;
      rackLocation?: string;
      rackSerialNumber: string;
      rackSkuId: string;
      storageApplianceConfigurationData?: {
        adminCredentials: {
          password: string | Redacted.Redacted<string>;
          username: string;
        };
        rackSlot: number;
        serialNumber: string;
        storageApplianceName?: string;
      }[];
    };
    analyticsOutputSettings?: {
      analyticsWorkspaceId?: string;
      associatedIdentity?: {
        identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
        userAssignedIdentityResourceId?: string;
      };
    };
    analyticsWorkspaceId?: string;
    clusterLocation?: string;
    clusterServicePrincipal?: {
      applicationId: string;
      password: string | Redacted.Redacted<string>;
      principalId: string;
      tenantId: string;
    };
    clusterType: "SingleRack" | "MultiRack";
    clusterVersion: string;
    commandOutputSettings?: {
      associatedIdentity?: {
        identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
        userAssignedIdentityResourceId?: string;
      };
      containerUrl?: string;
      overrides?: {
        associatedIdentity?: {
          identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
          userAssignedIdentityResourceId?: string;
        };
        commandOutputType?:
          | "BareMetalMachineRunCommand"
          | "BareMetalMachineRunDataExtracts"
          | "BareMetalMachineRunReadCommands"
          | "ClusterSupportAdministrativeActions"
          | "StorageRunReadCommands"
          | "BareMetalMachineRunDataExtractsRestricted";
        containerUrl?: string;
      }[];
    };
    computeDeploymentThreshold?: {
      grouping: "PerCluster" | "PerRack";
      type: "CountSuccess" | "PercentSuccess";
      value: number;
    };
    computeRackDefinitions?: {
      availabilityZone?: string;
      bareMetalMachineConfigurationData?: {
        bmcConnectionString?: string;
        bmcCredentials: {
          password: string | Redacted.Redacted<string>;
          username: string;
        };
        bmcMacAddress: string;
        bootMacAddress: string;
        machineDetails?: string;
        machineName?: string;
        rackSlot: number;
        serialNumber: string;
      }[];
      networkRackId: string;
      rackLocation?: string;
      rackSerialNumber: string;
      rackSkuId: string;
      storageApplianceConfigurationData?: {
        adminCredentials: {
          password: string | Redacted.Redacted<string>;
          username: string;
        };
        rackSlot: number;
        serialNumber: string;
        storageApplianceName?: string;
      }[];
    }[];
    managedResourceGroupConfiguration?: { location?: string; name?: string };
    networkFabricId: string;
    runtimeProtectionConfiguration?: {
      definitionUpdateMode?: "Automatic" | "None";
      enforcementLevel?:
        | "Audit"
        | "Disabled"
        | "OnDemand"
        | "Passive"
        | "RealTime";
    };
    secretArchive?: { keyVaultId: string; useKeyVault?: "True" | "False" };
    secretArchiveSettings?: {
      associatedIdentity?: {
        identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
        userAssignedIdentityResourceId?: string;
      };
      vaultUri?: string;
    };
    updateStrategy?: {
      maxUnavailable?: number;
      strategyType: "Rack" | "PauseAfterRack";
      thresholdType: "CountSuccess" | "PercentSuccess";
      thresholdValue: number;
      waitTimeMinutes?: number;
    };
    vulnerabilityScanningSettings?: { containerScan?: "Disabled" | "Enabled" };
    actionStates?: {
      actionType?: string;
      correlationId?: string;
      endTime?: string;
      message?: string;
      startTime?: string;
      status?: "Completed" | "InProgress" | "Failed";
      stepStates?: {
        endTime?: string;
        message?: string;
        startTime?: string;
        status?: "Completed" | "InProgress" | "Failed" | "NotStarted";
        stepName?: string;
      }[];
    }[];
    availableUpgradeVersions?: {
      controlImpact?: "True" | "False";
      expectedDuration?: string;
      impactDescription?: string;
      supportExpiryDate?: string;
      targetClusterVersion?: string;
      workloadImpact?: "True" | "False";
    }[];
    clusterCapacity?: {
      availableApplianceStorageGB?: number;
      availableCoreCount?: number;
      availableHostStorageGB?: number;
      availableMemoryGB?: number;
      totalApplianceStorageGB?: number;
      totalCoreCount?: number;
      totalHostStorageGB?: number;
      totalMemoryGB?: number;
    };
    clusterConnectionStatus?:
      | "Connected"
      | "Disconnected"
      | "Timeout"
      | "Undefined";
    clusterExtendedLocation?: {
      name: string;
      type: "EdgeZone" | "CustomLocation";
    };
    clusterManagerConnectionStatus?: "Connected" | "Unreachable";
    clusterManagerId?: string;
    detailedStatus?:
      | "PendingDeployment"
      | "Deploying"
      | "Running"
      | "Updating"
      | "UpdatePaused"
      | "Degraded"
      | "Deleting"
      | "Disconnected"
      | "Failed";
    detailedStatusMessage?: string;
    hybridAksExtendedLocation?: {
      name: string;
      type: "EdgeZone" | "CustomLocation";
    };
    lastSuccessfulVersionUpdateTime?: string;
    managedCredentials?: string[];
    manualActionCount?: number;
    supportExpiryDate?: string;
    workloadResourceIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Validating"
      | "Updating";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
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
  kind?: "Nexus" | "AzureLocal";
  tags?: Record<string, string>;
  location: string;
}
export const ClustersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      aggregatorOrSingleRackDefinition: Schema.Struct({
        availabilityZone: Schema.optional(Schema.String),
        bareMetalMachineConfigurationData: Schema.optional(
          Schema.Array(
            Schema.Struct({
              bmcConnectionString: Schema.optional(Schema.String),
              bmcCredentials: Schema.Struct({
                password: SensitiveString,
                username: Schema.String,
              }),
              bmcMacAddress: Schema.String,
              bootMacAddress: Schema.String,
              machineDetails: Schema.optional(Schema.String),
              machineName: Schema.optional(Schema.String),
              rackSlot: Schema.Number,
              serialNumber: Schema.String,
            }),
          ),
        ),
        networkRackId: Schema.String,
        rackLocation: Schema.optional(Schema.String),
        rackSerialNumber: Schema.String,
        rackSkuId: Schema.String,
        storageApplianceConfigurationData: Schema.optional(
          Schema.Array(
            Schema.Struct({
              adminCredentials: Schema.Struct({
                password: SensitiveString,
                username: Schema.String,
              }),
              rackSlot: Schema.Number,
              serialNumber: Schema.String,
              storageApplianceName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
      analyticsOutputSettings: Schema.optional(
        Schema.Struct({
          analyticsWorkspaceId: Schema.optional(Schema.String),
          associatedIdentity: Schema.optional(
            Schema.Struct({
              identityType: Schema.optional(
                Schema.Literals([
                  "SystemAssignedIdentity",
                  "UserAssignedIdentity",
                ]),
              ),
              userAssignedIdentityResourceId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      analyticsWorkspaceId: Schema.optional(Schema.String),
      clusterLocation: Schema.optional(Schema.String),
      clusterServicePrincipal: Schema.optional(
        Schema.Struct({
          applicationId: Schema.String,
          password: SensitiveString,
          principalId: Schema.String,
          tenantId: Schema.String,
        }),
      ),
      clusterType: Schema.Literals(["SingleRack", "MultiRack"]),
      clusterVersion: Schema.String,
      commandOutputSettings: Schema.optional(
        Schema.Struct({
          associatedIdentity: Schema.optional(
            Schema.Struct({
              identityType: Schema.optional(
                Schema.Literals([
                  "SystemAssignedIdentity",
                  "UserAssignedIdentity",
                ]),
              ),
              userAssignedIdentityResourceId: Schema.optional(Schema.String),
            }),
          ),
          containerUrl: Schema.optional(Schema.String),
          overrides: Schema.optional(
            Schema.Array(
              Schema.Struct({
                associatedIdentity: Schema.optional(
                  Schema.Struct({
                    identityType: Schema.optional(
                      Schema.Literals([
                        "SystemAssignedIdentity",
                        "UserAssignedIdentity",
                      ]),
                    ),
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                  }),
                ),
                commandOutputType: Schema.optional(
                  Schema.Literals([
                    "BareMetalMachineRunCommand",
                    "BareMetalMachineRunDataExtracts",
                    "BareMetalMachineRunReadCommands",
                    "ClusterSupportAdministrativeActions",
                    "StorageRunReadCommands",
                    "BareMetalMachineRunDataExtractsRestricted",
                  ]),
                ),
                containerUrl: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      computeDeploymentThreshold: Schema.optional(
        Schema.Struct({
          grouping: Schema.Literals(["PerCluster", "PerRack"]),
          type: Schema.Literals(["CountSuccess", "PercentSuccess"]),
          value: Schema.Number,
        }),
      ),
      computeRackDefinitions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            availabilityZone: Schema.optional(Schema.String),
            bareMetalMachineConfigurationData: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  bmcConnectionString: Schema.optional(Schema.String),
                  bmcCredentials: Schema.Struct({
                    password: SensitiveString,
                    username: Schema.String,
                  }),
                  bmcMacAddress: Schema.String,
                  bootMacAddress: Schema.String,
                  machineDetails: Schema.optional(Schema.String),
                  machineName: Schema.optional(Schema.String),
                  rackSlot: Schema.Number,
                  serialNumber: Schema.String,
                }),
              ),
            ),
            networkRackId: Schema.String,
            rackLocation: Schema.optional(Schema.String),
            rackSerialNumber: Schema.String,
            rackSkuId: Schema.String,
            storageApplianceConfigurationData: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  adminCredentials: Schema.Struct({
                    password: SensitiveString,
                    username: Schema.String,
                  }),
                  rackSlot: Schema.Number,
                  serialNumber: Schema.String,
                  storageApplianceName: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      ),
      managedResourceGroupConfiguration: Schema.optional(
        Schema.Struct({
          location: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
      networkFabricId: Schema.String,
      runtimeProtectionConfiguration: Schema.optional(
        Schema.Struct({
          definitionUpdateMode: Schema.optional(
            Schema.Literals(["Automatic", "None"]),
          ),
          enforcementLevel: Schema.optional(
            Schema.Literals([
              "Audit",
              "Disabled",
              "OnDemand",
              "Passive",
              "RealTime",
            ]),
          ),
        }),
      ),
      secretArchive: Schema.optional(
        Schema.Struct({
          keyVaultId: Schema.String,
          useKeyVault: Schema.optional(Schema.Literals(["True", "False"])),
        }),
      ),
      secretArchiveSettings: Schema.optional(
        Schema.Struct({
          associatedIdentity: Schema.optional(
            Schema.Struct({
              identityType: Schema.optional(
                Schema.Literals([
                  "SystemAssignedIdentity",
                  "UserAssignedIdentity",
                ]),
              ),
              userAssignedIdentityResourceId: Schema.optional(Schema.String),
            }),
          ),
          vaultUri: Schema.optional(Schema.String),
        }),
      ),
      updateStrategy: Schema.optional(
        Schema.Struct({
          maxUnavailable: Schema.optional(Schema.Number),
          strategyType: Schema.Literals(["Rack", "PauseAfterRack"]),
          thresholdType: Schema.Literals(["CountSuccess", "PercentSuccess"]),
          thresholdValue: Schema.Number,
          waitTimeMinutes: Schema.optional(Schema.Number),
        }),
      ),
      vulnerabilityScanningSettings: Schema.optional(
        Schema.Struct({
          containerScan: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
        }),
      ),
      actionStates: Schema.optional(
        Schema.Array(
          Schema.Struct({
            actionType: Schema.optional(Schema.String),
            correlationId: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Literals(["Completed", "InProgress", "Failed"]),
            ),
            stepStates: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  endTime: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  startTime: Schema.optional(Schema.String),
                  status: Schema.optional(
                    Schema.Literals([
                      "Completed",
                      "InProgress",
                      "Failed",
                      "NotStarted",
                    ]),
                  ),
                  stepName: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      ),
      availableUpgradeVersions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            controlImpact: Schema.optional(Schema.Literals(["True", "False"])),
            expectedDuration: Schema.optional(Schema.String),
            impactDescription: Schema.optional(Schema.String),
            supportExpiryDate: Schema.optional(Schema.String),
            targetClusterVersion: Schema.optional(Schema.String),
            workloadImpact: Schema.optional(Schema.Literals(["True", "False"])),
          }),
        ),
      ),
      clusterCapacity: Schema.optional(
        Schema.Struct({
          availableApplianceStorageGB: Schema.optional(Schema.Number),
          availableCoreCount: Schema.optional(Schema.Number),
          availableHostStorageGB: Schema.optional(Schema.Number),
          availableMemoryGB: Schema.optional(Schema.Number),
          totalApplianceStorageGB: Schema.optional(Schema.Number),
          totalCoreCount: Schema.optional(Schema.Number),
          totalHostStorageGB: Schema.optional(Schema.Number),
          totalMemoryGB: Schema.optional(Schema.Number),
        }),
      ),
      clusterConnectionStatus: Schema.optional(
        Schema.Literals(["Connected", "Disconnected", "Timeout", "Undefined"]),
      ),
      clusterExtendedLocation: Schema.optional(
        Schema.Struct({
          name: Schema.String,
          type: Schema.Literals(["EdgeZone", "CustomLocation"]),
        }),
      ),
      clusterManagerConnectionStatus: Schema.optional(
        Schema.Literals(["Connected", "Unreachable"]),
      ),
      clusterManagerId: Schema.optional(Schema.String),
      detailedStatus: Schema.optional(
        Schema.Literals([
          "PendingDeployment",
          "Deploying",
          "Running",
          "Updating",
          "UpdatePaused",
          "Degraded",
          "Deleting",
          "Disconnected",
          "Failed",
        ]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      hybridAksExtendedLocation: Schema.optional(
        Schema.Struct({
          name: Schema.String,
          type: Schema.Literals(["EdgeZone", "CustomLocation"]),
        }),
      ),
      lastSuccessfulVersionUpdateTime: Schema.optional(Schema.String),
      managedCredentials: Schema.optional(Schema.Array(Schema.String)),
      manualActionCount: Schema.optional(Schema.Number),
      supportExpiryDate: Schema.optional(Schema.String),
      workloadResourceIds: Schema.optional(Schema.Array(Schema.String)),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Accepted",
          "Validating",
          "Updating",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
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
    kind: Schema.optional(Schema.Literals(["Nexus", "AzureLocal"])),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClustersCreateOrUpdateInput>;

// Output Schema
export interface ClustersCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ClustersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ClustersCreateOrUpdateOutput>;

// The operation
/**
 * Create a new cluster or update the properties of the cluster if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const ClustersCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersCreateOrUpdateInput,
  outputSchema: ClustersCreateOrUpdateOutput,
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

// The operation
/**
 * Delete the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const ClustersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export interface ClustersDeployInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  skipValidationsForMachines?: string[];
}
export const ClustersDeployInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  skipValidationsForMachines: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/deploy",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<ClustersDeployInput>;

// Output Schema
export type ClustersDeployOutput = void;
export const ClustersDeployOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeployOutput>;

// The operation
/**
 * Deploy the cluster using the rack configuration provided during creation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersDeploy = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeployInput,
  outputSchema: ClustersDeployOutput,
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}",
    apiVersion: "2026-07-01",
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
 * Get properties of the provided cluster.
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
export interface ClustersInspectInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  additionalActions?: "ResetHardware"[];
  filterDevices?: { bareMetalMachineNames?: string[]; rackNames?: string[] };
}
export const ClustersInspectInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  additionalActions: Schema.optional(
    Schema.Array(Schema.Literals(["ResetHardware"])),
  ),
  filterDevices: Schema.optional(
    Schema.Struct({
      bareMetalMachineNames: Schema.optional(Schema.Array(Schema.String)),
      rackNames: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/inspect",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<ClustersInspectInput>;

// Output Schema
export type ClustersInspectOutput = void;
export const ClustersInspectOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersInspectOutput>;

// The operation
/**
 * Trigger an inspection of the cluster to perform validation and optional corrective actions based on the supplied additional actions and filters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersInspect = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersInspectInput,
  outputSchema: ClustersInspectOutput,
}));
// Input Schema
export interface ClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClustersListByResourceGroupInput>;

// Output Schema
export interface ClustersListByResourceGroupOutput {
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
export const ClustersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ClustersListByResourceGroupOutput>;

// The operation
/**
 * Get a list of clusters in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListByResourceGroupInput,
  outputSchema: ClustersListByResourceGroupOutput,
}));
// Input Schema
export interface ClustersListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const ClustersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/clusters",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClustersListBySubscriptionInput>;

// Output Schema
export interface ClustersListBySubscriptionOutput {
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
export const ClustersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ClustersListBySubscriptionOutput>;

// The operation
/**
 * Get a list of clusters in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const ClustersListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListBySubscriptionInput,
  outputSchema: ClustersListBySubscriptionOutput,
}));
// Input Schema
export interface ClustersRotateCredentialInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  credentials: string[];
}
export const ClustersRotateCredentialInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    credentials: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/rotateCredential",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClustersRotateCredentialInput>;

// Output Schema
export type ClustersRotateCredentialOutput = void;
export const ClustersRotateCredentialOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersRotateCredentialOutput>;

// The operation
/**
 * Rotate the specified cluster credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersRotateCredential = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersRotateCredentialInput,
  outputSchema: ClustersRotateCredentialOutput,
}));
// Input Schema
export interface ClustersScanRuntimeInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  scanActivity?: "Scan" | "Skip";
}
export const ClustersScanRuntimeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    scanActivity: Schema.optional(Schema.Literals(["Scan", "Skip"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/scanRuntime",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClustersScanRuntimeInput>;

// Output Schema
export type ClustersScanRuntimeOutput = void;
export const ClustersScanRuntimeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersScanRuntimeOutput>;

// The operation
/**
 * Triggers the execution of a runtime protection scan to detect and remediate detected issues, in accordance with the cluster configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersScanRuntime = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersScanRuntimeInput,
  outputSchema: ClustersScanRuntimeOutput,
}));
// Input Schema
export interface ClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
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
  properties?: {
    aggregatorOrSingleRackDefinition?: {
      availabilityZone?: string;
      bareMetalMachineConfigurationData?: {
        bmcConnectionString?: string;
        bmcCredentials?: {
          password?: string | Redacted.Redacted<string>;
          username?: string;
        };
        bmcMacAddress?: string;
        bootMacAddress?: string;
        machineDetails?: string;
        machineName?: string;
        rackSlot?: number;
        serialNumber?: string;
      }[];
      networkRackId?: string;
      rackLocation?: string;
      rackSerialNumber?: string;
      rackSkuId?: string;
      storageApplianceConfigurationData?: {
        adminCredentials?: {
          password?: string | Redacted.Redacted<string>;
          username?: string;
        };
        rackSlot?: number;
        serialNumber?: string;
        storageApplianceName?: string;
      }[];
    };
    analyticsOutputSettings?: {
      analyticsWorkspaceId?: string;
      associatedIdentity?: {
        identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
        userAssignedIdentityResourceId?: string;
      };
    };
    clusterLocation?: string;
    clusterServicePrincipal?: {
      applicationId?: string;
      password?: string | Redacted.Redacted<string>;
      principalId?: string;
      tenantId?: string;
    };
    commandOutputSettings?: {
      associatedIdentity?: {
        identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
        userAssignedIdentityResourceId?: string;
      };
      containerUrl?: string;
      overrides?: {
        associatedIdentity?: {
          identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
          userAssignedIdentityResourceId?: string;
        };
        commandOutputType?:
          | "BareMetalMachineRunCommand"
          | "BareMetalMachineRunDataExtracts"
          | "BareMetalMachineRunReadCommands"
          | "ClusterSupportAdministrativeActions"
          | "StorageRunReadCommands"
          | "BareMetalMachineRunDataExtractsRestricted";
        containerUrl?: string;
      }[];
    };
    computeDeploymentThreshold?: {
      grouping?: "PerCluster" | "PerRack";
      type?: "CountSuccess" | "PercentSuccess";
      value?: number;
    };
    computeRackDefinitions?: {
      availabilityZone?: string;
      bareMetalMachineConfigurationData?: {
        bmcConnectionString?: string;
        bmcCredentials?: {
          password?: string | Redacted.Redacted<string>;
          username?: string;
        };
        bmcMacAddress?: string;
        bootMacAddress?: string;
        machineDetails?: string;
        machineName?: string;
        rackSlot?: number;
        serialNumber?: string;
      }[];
      networkRackId?: string;
      rackLocation?: string;
      rackSerialNumber?: string;
      rackSkuId?: string;
      storageApplianceConfigurationData?: {
        adminCredentials?: {
          password?: string | Redacted.Redacted<string>;
          username?: string;
        };
        rackSlot?: number;
        serialNumber?: string;
        storageApplianceName?: string;
      }[];
    }[];
    runtimeProtectionConfiguration?: {
      definitionUpdateMode?: "Automatic" | "None";
      enforcementLevel?:
        | "Audit"
        | "Disabled"
        | "OnDemand"
        | "Passive"
        | "RealTime";
    };
    secretArchive?: { keyVaultId?: string; useKeyVault?: "True" | "False" };
    secretArchiveSettings?: {
      associatedIdentity?: {
        identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
        userAssignedIdentityResourceId?: string;
      };
      vaultUri?: string;
    };
    updateStrategy?: {
      maxUnavailable?: number;
      strategyType?: "Rack" | "PauseAfterRack";
      thresholdType?: "CountSuccess" | "PercentSuccess";
      thresholdValue?: number;
      waitTimeMinutes?: number;
    };
    vulnerabilityScanningSettings?: { containerScan?: "Disabled" | "Enabled" };
  };
  tags?: Record<string, string>;
}
export const ClustersUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
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
  properties: Schema.optional(
    Schema.Struct({
      aggregatorOrSingleRackDefinition: Schema.optional(
        Schema.Struct({
          availabilityZone: Schema.optional(Schema.String),
          bareMetalMachineConfigurationData: Schema.optional(
            Schema.Array(
              Schema.Struct({
                bmcConnectionString: Schema.optional(Schema.String),
                bmcCredentials: Schema.optional(
                  Schema.Struct({
                    password: Schema.optional(SensitiveString),
                    username: Schema.optional(Schema.String),
                  }),
                ),
                bmcMacAddress: Schema.optional(Schema.String),
                bootMacAddress: Schema.optional(Schema.String),
                machineDetails: Schema.optional(Schema.String),
                machineName: Schema.optional(Schema.String),
                rackSlot: Schema.optional(Schema.Number),
                serialNumber: Schema.optional(Schema.String),
              }),
            ),
          ),
          networkRackId: Schema.optional(Schema.String),
          rackLocation: Schema.optional(Schema.String),
          rackSerialNumber: Schema.optional(Schema.String),
          rackSkuId: Schema.optional(Schema.String),
          storageApplianceConfigurationData: Schema.optional(
            Schema.Array(
              Schema.Struct({
                adminCredentials: Schema.optional(
                  Schema.Struct({
                    password: Schema.optional(SensitiveString),
                    username: Schema.optional(Schema.String),
                  }),
                ),
                rackSlot: Schema.optional(Schema.Number),
                serialNumber: Schema.optional(Schema.String),
                storageApplianceName: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      analyticsOutputSettings: Schema.optional(
        Schema.Struct({
          analyticsWorkspaceId: Schema.optional(Schema.String),
          associatedIdentity: Schema.optional(
            Schema.Struct({
              identityType: Schema.optional(
                Schema.Literals([
                  "SystemAssignedIdentity",
                  "UserAssignedIdentity",
                ]),
              ),
              userAssignedIdentityResourceId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      clusterLocation: Schema.optional(Schema.String),
      clusterServicePrincipal: Schema.optional(
        Schema.Struct({
          applicationId: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
          principalId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
        }),
      ),
      commandOutputSettings: Schema.optional(
        Schema.Struct({
          associatedIdentity: Schema.optional(
            Schema.Struct({
              identityType: Schema.optional(
                Schema.Literals([
                  "SystemAssignedIdentity",
                  "UserAssignedIdentity",
                ]),
              ),
              userAssignedIdentityResourceId: Schema.optional(Schema.String),
            }),
          ),
          containerUrl: Schema.optional(Schema.String),
          overrides: Schema.optional(
            Schema.Array(
              Schema.Struct({
                associatedIdentity: Schema.optional(
                  Schema.Struct({
                    identityType: Schema.optional(
                      Schema.Literals([
                        "SystemAssignedIdentity",
                        "UserAssignedIdentity",
                      ]),
                    ),
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                  }),
                ),
                commandOutputType: Schema.optional(
                  Schema.Literals([
                    "BareMetalMachineRunCommand",
                    "BareMetalMachineRunDataExtracts",
                    "BareMetalMachineRunReadCommands",
                    "ClusterSupportAdministrativeActions",
                    "StorageRunReadCommands",
                    "BareMetalMachineRunDataExtractsRestricted",
                  ]),
                ),
                containerUrl: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      computeDeploymentThreshold: Schema.optional(
        Schema.Struct({
          grouping: Schema.optional(Schema.Literals(["PerCluster", "PerRack"])),
          type: Schema.optional(
            Schema.Literals(["CountSuccess", "PercentSuccess"]),
          ),
          value: Schema.optional(Schema.Number),
        }),
      ),
      computeRackDefinitions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            availabilityZone: Schema.optional(Schema.String),
            bareMetalMachineConfigurationData: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  bmcConnectionString: Schema.optional(Schema.String),
                  bmcCredentials: Schema.optional(
                    Schema.Struct({
                      password: Schema.optional(SensitiveString),
                      username: Schema.optional(Schema.String),
                    }),
                  ),
                  bmcMacAddress: Schema.optional(Schema.String),
                  bootMacAddress: Schema.optional(Schema.String),
                  machineDetails: Schema.optional(Schema.String),
                  machineName: Schema.optional(Schema.String),
                  rackSlot: Schema.optional(Schema.Number),
                  serialNumber: Schema.optional(Schema.String),
                }),
              ),
            ),
            networkRackId: Schema.optional(Schema.String),
            rackLocation: Schema.optional(Schema.String),
            rackSerialNumber: Schema.optional(Schema.String),
            rackSkuId: Schema.optional(Schema.String),
            storageApplianceConfigurationData: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  adminCredentials: Schema.optional(
                    Schema.Struct({
                      password: Schema.optional(SensitiveString),
                      username: Schema.optional(Schema.String),
                    }),
                  ),
                  rackSlot: Schema.optional(Schema.Number),
                  serialNumber: Schema.optional(Schema.String),
                  storageApplianceName: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      ),
      runtimeProtectionConfiguration: Schema.optional(
        Schema.Struct({
          definitionUpdateMode: Schema.optional(
            Schema.Literals(["Automatic", "None"]),
          ),
          enforcementLevel: Schema.optional(
            Schema.Literals([
              "Audit",
              "Disabled",
              "OnDemand",
              "Passive",
              "RealTime",
            ]),
          ),
        }),
      ),
      secretArchive: Schema.optional(
        Schema.Struct({
          keyVaultId: Schema.optional(Schema.String),
          useKeyVault: Schema.optional(Schema.Literals(["True", "False"])),
        }),
      ),
      secretArchiveSettings: Schema.optional(
        Schema.Struct({
          associatedIdentity: Schema.optional(
            Schema.Struct({
              identityType: Schema.optional(
                Schema.Literals([
                  "SystemAssignedIdentity",
                  "UserAssignedIdentity",
                ]),
              ),
              userAssignedIdentityResourceId: Schema.optional(Schema.String),
            }),
          ),
          vaultUri: Schema.optional(Schema.String),
        }),
      ),
      updateStrategy: Schema.optional(
        Schema.Struct({
          maxUnavailable: Schema.optional(Schema.Number),
          strategyType: Schema.optional(
            Schema.Literals(["Rack", "PauseAfterRack"]),
          ),
          thresholdType: Schema.optional(
            Schema.Literals(["CountSuccess", "PercentSuccess"]),
          ),
          thresholdValue: Schema.optional(Schema.Number),
          waitTimeMinutes: Schema.optional(Schema.Number),
        }),
      ),
      vulnerabilityScanningSettings: Schema.optional(
        Schema.Struct({
          containerScan: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}",
    apiVersion: "2026-07-01",
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
 * Patch the properties of the provided cluster, or update the tags associated with the cluster. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const ClustersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export interface ClustersUpdateVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  safeguardMode?: "All" | "None";
  targetClusterVersion: string;
}
export const ClustersUpdateVersionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    safeguardMode: Schema.optional(Schema.Literals(["All", "None"])),
    targetClusterVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/updateVersion",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ClustersUpdateVersionInput>;

// Output Schema
export type ClustersUpdateVersionOutput = void;
export const ClustersUpdateVersionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersUpdateVersionOutput>;

// The operation
/**
 * Update the version of the provided cluster to one of the available supported versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersUpdateVersion = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateVersionInput,
  outputSchema: ClustersUpdateVersionOutput,
}));
// Input Schema
export interface ConsolesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  consoleName: string;
  properties: {
    enabled: "True" | "False";
    expiration?: string;
    sshPublicKey: { keyData: string };
    detailedStatus?: "Ready" | "Error";
    detailedStatusMessage?: string;
    privateLinkServiceId?: string;
    virtualMachineAccessId?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Provisioning";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const ConsolesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    consoleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      enabled: Schema.Literals(["True", "False"]),
      expiration: Schema.optional(Schema.String),
      sshPublicKey: Schema.Struct({
        keyData: Schema.String,
      }),
      detailedStatus: Schema.optional(Schema.Literals(["Ready", "Error"])),
      detailedStatusMessage: Schema.optional(Schema.String),
      privateLinkServiceId: Schema.optional(Schema.String),
      virtualMachineAccessId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Accepted",
          "Provisioning",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/consoles/{consoleName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ConsolesCreateOrUpdateInput>;

// Output Schema
export interface ConsolesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ConsolesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConsolesCreateOrUpdateOutput>;

// The operation
/**
 * Create a new virtual machine console or update the properties of the existing virtual machine console.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param consoleName - The name of the virtual machine console.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const ConsolesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConsolesCreateOrUpdateInput,
  outputSchema: ConsolesCreateOrUpdateOutput,
}));
// Input Schema
export interface ConsolesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  consoleName: string;
}
export const ConsolesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  virtualMachineName: Schema.String.pipe(T.PathParam()),
  consoleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/consoles/{consoleName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<ConsolesDeleteInput>;

// Output Schema
export type ConsolesDeleteOutput = void;
export const ConsolesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConsolesDeleteOutput>;

// The operation
/**
 * Delete the provided virtual machine console.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param consoleName - The name of the virtual machine console.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const ConsolesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConsolesDeleteInput,
  outputSchema: ConsolesDeleteOutput,
}));
// Input Schema
export interface ConsolesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  consoleName: string;
}
export const ConsolesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  virtualMachineName: Schema.String.pipe(T.PathParam()),
  consoleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/consoles/{consoleName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<ConsolesGetInput>;

// Output Schema
export interface ConsolesGetOutput {
  id?: string;
  name?: string;
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
export const ConsolesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ConsolesGetOutput>;

// The operation
/**
 * Get properties of the provided virtual machine console.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param consoleName - The name of the virtual machine console.
 */
export const ConsolesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConsolesGetInput,
  outputSchema: ConsolesGetOutput,
}));
// Input Schema
export interface ConsolesListByVirtualMachineInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  $top?: number;
  $skipToken?: string;
}
export const ConsolesListByVirtualMachineInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/consoles",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<ConsolesListByVirtualMachineInput>;

// Output Schema
export interface ConsolesListByVirtualMachineOutput {
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
export const ConsolesListByVirtualMachineOutput =
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
  }) as unknown as Schema.Codec<ConsolesListByVirtualMachineOutput>;

// The operation
/**
 * Get a list of consoles for the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const ConsolesListByVirtualMachine =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConsolesListByVirtualMachineInput,
    outputSchema: ConsolesListByVirtualMachineOutput,
  }));
// Input Schema
export interface ConsolesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  consoleName: string;
  properties?: {
    enabled?: "True" | "False";
    expiration?: string;
    sshPublicKey?: { keyData?: string };
  };
  tags?: Record<string, string>;
}
export const ConsolesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  virtualMachineName: Schema.String.pipe(T.PathParam()),
  consoleName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      enabled: Schema.optional(Schema.Literals(["True", "False"])),
      expiration: Schema.optional(Schema.String),
      sshPublicKey: Schema.optional(
        Schema.Struct({
          keyData: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/consoles/{consoleName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<ConsolesUpdateInput>;

// Output Schema
export interface ConsolesUpdateOutput {
  id?: string;
  name?: string;
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
export const ConsolesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ConsolesUpdateOutput>;

// The operation
/**
 * Patch the properties of the provided virtual machine console, or update the tags associated with the virtual machine console. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param consoleName - The name of the virtual machine console.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const ConsolesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConsolesUpdateInput,
  outputSchema: ConsolesUpdateOutput,
}));
// Input Schema
export interface KubernetesClusterFeaturesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  featureName: string;
  properties?: {
    options?: { key: string; value: string }[];
    availabilityLifecycle?: "Preview" | "GenerallyAvailable";
    detailedStatus?: "Error" | "Provisioning" | "Installed";
    detailedStatusMessage?: string;
    required?: "True" | "False";
    version?: string;
    provisioningState?:
      | "Accepted"
      | "Canceled"
      | "Deleting"
      | "Failed"
      | "Succeeded"
      | "Updating";
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const KubernetesClusterFeaturesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        options: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.String,
              value: Schema.String,
            }),
          ),
        ),
        availabilityLifecycle: Schema.optional(
          Schema.Literals(["Preview", "GenerallyAvailable"]),
        ),
        detailedStatus: Schema.optional(
          Schema.Literals(["Error", "Provisioning", "Installed"]),
        ),
        detailedStatusMessage: Schema.optional(Schema.String),
        required: Schema.optional(Schema.Literals(["True", "False"])),
        version: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Canceled",
            "Deleting",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/features/{featureName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClusterFeaturesCreateOrUpdateInput>;

// Output Schema
export interface KubernetesClusterFeaturesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const KubernetesClusterFeaturesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<KubernetesClusterFeaturesCreateOrUpdateOutput>;

// The operation
/**
 * Create a new Kubernetes cluster feature or update properties of the Kubernetes cluster feature if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param featureName - The name of the feature.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const KubernetesClusterFeaturesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClusterFeaturesCreateOrUpdateInput,
    outputSchema: KubernetesClusterFeaturesCreateOrUpdateOutput,
  }));
// Input Schema
export interface KubernetesClusterFeaturesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  featureName: string;
}
export const KubernetesClusterFeaturesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/features/{featureName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClusterFeaturesDeleteInput>;

// Output Schema
export type KubernetesClusterFeaturesDeleteOutput = void;
export const KubernetesClusterFeaturesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<KubernetesClusterFeaturesDeleteOutput>;

// The operation
/**
 * Delete the provided Kubernetes cluster feature.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param featureName - The name of the feature.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const KubernetesClusterFeaturesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClusterFeaturesDeleteInput,
    outputSchema: KubernetesClusterFeaturesDeleteOutput,
  }));
// Input Schema
export interface KubernetesClusterFeaturesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  featureName: string;
}
export const KubernetesClusterFeaturesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/features/{featureName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClusterFeaturesGetInput>;

// Output Schema
export interface KubernetesClusterFeaturesGetOutput {
  id?: string;
  name?: string;
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
export const KubernetesClusterFeaturesGetOutput =
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
  }) as unknown as Schema.Codec<KubernetesClusterFeaturesGetOutput>;

// The operation
/**
 * Get properties of the provided the Kubernetes cluster feature.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param featureName - The name of the feature.
 */
export const KubernetesClusterFeaturesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClusterFeaturesGetInput,
    outputSchema: KubernetesClusterFeaturesGetOutput,
  }));
// Input Schema
export interface KubernetesClusterFeaturesListByKubernetesClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  $top?: number;
  $skipToken?: string;
}
export const KubernetesClusterFeaturesListByKubernetesClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/features",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClusterFeaturesListByKubernetesClusterInput>;

// Output Schema
export interface KubernetesClusterFeaturesListByKubernetesClusterOutput {
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
export const KubernetesClusterFeaturesListByKubernetesClusterOutput =
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
  }) as unknown as Schema.Codec<KubernetesClusterFeaturesListByKubernetesClusterOutput>;

// The operation
/**
 * Get a list of features for the provided Kubernetes cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const KubernetesClusterFeaturesListByKubernetesCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClusterFeaturesListByKubernetesClusterInput,
    outputSchema: KubernetesClusterFeaturesListByKubernetesClusterOutput,
  }));
// Input Schema
export interface KubernetesClusterFeaturesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  featureName: string;
  properties?: { options?: { key: string; value: string }[] };
  tags?: Record<string, string>;
}
export const KubernetesClusterFeaturesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        options: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.String,
              value: Schema.String,
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/features/{featureName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClusterFeaturesUpdateInput>;

// Output Schema
export interface KubernetesClusterFeaturesUpdateOutput {
  id?: string;
  name?: string;
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
export const KubernetesClusterFeaturesUpdateOutput =
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
  }) as unknown as Schema.Codec<KubernetesClusterFeaturesUpdateOutput>;

// The operation
/**
 * Patch properties of the provided Kubernetes cluster feature.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param featureName - The name of the feature.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const KubernetesClusterFeaturesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClusterFeaturesUpdateInput,
    outputSchema: KubernetesClusterFeaturesUpdateOutput,
  }));
// Input Schema
export interface KubernetesClustersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  properties: {
    aadConfiguration?: { adminGroupObjectIds: string[] };
    administratorConfiguration?: {
      adminUsername?: string;
      sshPublicKeys?: { keyData: string }[];
    };
    controlPlaneNodeConfiguration: {
      administratorConfiguration?: {
        adminUsername?: string;
        sshPublicKeys?: { keyData: string }[];
      };
      availabilityZones?: string[];
      count: number;
      vmSkuName: string;
    };
    initialAgentPoolConfigurations: {
      administratorConfiguration?: {
        adminUsername?: string;
        sshPublicKeys?: { keyData: string }[];
      };
      agentOptions?: { hugepagesCount: number; hugepagesSize?: "2M" | "1G" };
      attachedNetworkConfiguration?: {
        l2Networks?: {
          networkId: string;
          pluginType?: "DPDK" | "SRIOV" | "OSDevice" | "MACVLAN" | "IPVLAN";
        }[];
        l3Networks?: {
          ipamEnabled?: "True" | "False";
          networkId: string;
          pluginType?: "DPDK" | "SRIOV" | "OSDevice" | "MACVLAN" | "IPVLAN";
        }[];
        trunkedNetworks?: {
          networkId: string;
          pluginType?: "DPDK" | "SRIOV" | "OSDevice" | "MACVLAN" | "IPVLAN";
        }[];
      };
      availabilityZones?: string[];
      count: number;
      labels?: { key: string; value: string }[];
      mode: "System" | "User" | "NotApplicable";
      taints?: { key: string; value: string }[];
      upgradeSettings?: {
        drainTimeout?: number;
        maxSurge?: string;
        maxUnavailable?: string;
      };
      vmSkuName: string;
      name: string;
    }[];
    kubernetesVersion: string;
    managedResourceGroupConfiguration?: { location?: string; name?: string };
    networkConfiguration: {
      attachedNetworkConfiguration?: {
        l2Networks?: {
          networkId: string;
          pluginType?: "DPDK" | "SRIOV" | "OSDevice" | "MACVLAN" | "IPVLAN";
        }[];
        l3Networks?: {
          ipamEnabled?: "True" | "False";
          networkId: string;
          pluginType?: "DPDK" | "SRIOV" | "OSDevice" | "MACVLAN" | "IPVLAN";
        }[];
        trunkedNetworks?: {
          networkId: string;
          pluginType?: "DPDK" | "SRIOV" | "OSDevice" | "MACVLAN" | "IPVLAN";
        }[];
      };
      bgpServiceLoadBalancerConfiguration?: {
        bgpAdvertisements?: {
          advertiseToFabric?: "True" | "False";
          communities?: string[];
          ipAddressPools: string[];
          peers?: string[];
        }[];
        bgpPeers?: {
          bfdEnabled?: "True" | "False";
          bgpMultiHop?: "True" | "False";
          holdTime?: string;
          keepAliveTime?: string;
          myAsn?: number;
          name: string;
          password?: string | Redacted.Redacted<string>;
          peerAddress: string;
          peerAsn: number;
          peerPort?: number;
        }[];
        fabricPeeringEnabled?: "True" | "False";
        ipAddressPools?: {
          addresses: string[];
          autoAssign?: "True" | "False";
          name: string;
          onlyUseHostIps?: "True" | "False";
        }[];
      };
      cloudServicesNetworkId: string;
      cniNetworkId: string;
      dnsServiceIp?: string;
      l2ServiceLoadBalancerConfiguration?: {
        ipAddressPools?: {
          addresses: string[];
          autoAssign?: "True" | "False";
          name: string;
          onlyUseHostIps?: "True" | "False";
        }[];
      };
      podCidrs?: string[];
      serviceCidrs?: string[];
    };
    attachedNetworkIds?: string[];
    availableUpgrades?: {
      availabilityLifecycle?: "Preview" | "GenerallyAvailable";
      version?: string;
    }[];
    clusterId?: string;
    connectedClusterId?: string;
    controlPlaneKubernetesVersion?: string;
    detailedStatus?: "Available" | "Error" | "Provisioning";
    detailedStatusMessage?: string;
    featureStatuses?: {
      detailedStatus?: "Running" | "Failed" | "Unknown";
      detailedStatusMessage?: string;
      name?: string;
      version?: string;
    }[];
    nodes?: {
      agentPoolId?: string;
      availabilityZone?: string;
      bareMetalMachineId?: string;
      cpuCores?: number;
      detailedStatus?:
        | "Available"
        | "Error"
        | "Provisioning"
        | "Running"
        | "Scheduling"
        | "Stopped"
        | "Terminating"
        | "Unknown";
      detailedStatusMessage?: string;
      diskSizeGB?: number;
      image?: string;
      kubernetesVersion?: string;
      labels?: { key: string; value: string }[];
      memorySizeGB?: number;
      mode?: "System" | "User" | "NotApplicable";
      name?: string;
      networkAttachments?: {
        attachedNetworkId: string;
        defaultGateway?: "True" | "False";
        ipAllocationMethod: "Dynamic" | "Static" | "Disabled";
        ipv4Address?: string;
        ipv6Address?: string;
        macAddress?: string;
        networkAttachmentName?: string;
      }[];
      powerState?: "On" | "Off" | "Unknown";
      role?: "ControlPlane" | "Worker";
      taints?: { key: string; value: string }[];
      vmSkuName?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "InProgress"
      | "Created"
      | "Updating"
      | "Deleting";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const KubernetesClustersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      aadConfiguration: Schema.optional(
        Schema.Struct({
          adminGroupObjectIds: Schema.Array(Schema.String),
        }),
      ),
      administratorConfiguration: Schema.optional(
        Schema.Struct({
          adminUsername: Schema.optional(Schema.String),
          sshPublicKeys: Schema.optional(
            Schema.Array(
              Schema.Struct({
                keyData: Schema.String,
              }),
            ),
          ),
        }),
      ),
      controlPlaneNodeConfiguration: Schema.Struct({
        administratorConfiguration: Schema.optional(
          Schema.Struct({
            adminUsername: Schema.optional(Schema.String),
            sshPublicKeys: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  keyData: Schema.String,
                }),
              ),
            ),
          }),
        ),
        availabilityZones: Schema.optional(Schema.Array(Schema.String)),
        count: Schema.Number,
        vmSkuName: Schema.String,
      }),
      initialAgentPoolConfigurations: Schema.Array(
        Schema.Struct({
          administratorConfiguration: Schema.optional(
            Schema.Struct({
              adminUsername: Schema.optional(Schema.String),
              sshPublicKeys: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    keyData: Schema.String,
                  }),
                ),
              ),
            }),
          ),
          agentOptions: Schema.optional(
            Schema.Struct({
              hugepagesCount: Schema.Number,
              hugepagesSize: Schema.optional(Schema.Literals(["2M", "1G"])),
            }),
          ),
          attachedNetworkConfiguration: Schema.optional(
            Schema.Struct({
              l2Networks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    networkId: Schema.String,
                    pluginType: Schema.optional(
                      Schema.Literals([
                        "DPDK",
                        "SRIOV",
                        "OSDevice",
                        "MACVLAN",
                        "IPVLAN",
                      ]),
                    ),
                  }),
                ),
              ),
              l3Networks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipamEnabled: Schema.optional(
                      Schema.Literals(["True", "False"]),
                    ),
                    networkId: Schema.String,
                    pluginType: Schema.optional(
                      Schema.Literals([
                        "DPDK",
                        "SRIOV",
                        "OSDevice",
                        "MACVLAN",
                        "IPVLAN",
                      ]),
                    ),
                  }),
                ),
              ),
              trunkedNetworks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    networkId: Schema.String,
                    pluginType: Schema.optional(
                      Schema.Literals([
                        "DPDK",
                        "SRIOV",
                        "OSDevice",
                        "MACVLAN",
                        "IPVLAN",
                      ]),
                    ),
                  }),
                ),
              ),
            }),
          ),
          availabilityZones: Schema.optional(Schema.Array(Schema.String)),
          count: Schema.Number,
          labels: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.String,
                value: Schema.String,
              }),
            ),
          ),
          mode: Schema.Literals(["System", "User", "NotApplicable"]),
          taints: Schema.optional(
            Schema.Array(
              Schema.Struct({
                key: Schema.String,
                value: Schema.String,
              }),
            ),
          ),
          upgradeSettings: Schema.optional(
            Schema.Struct({
              drainTimeout: Schema.optional(Schema.Number),
              maxSurge: Schema.optional(Schema.String),
              maxUnavailable: Schema.optional(Schema.String),
            }),
          ),
          vmSkuName: Schema.String,
          name: Schema.String,
        }),
      ),
      kubernetesVersion: Schema.String,
      managedResourceGroupConfiguration: Schema.optional(
        Schema.Struct({
          location: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
      networkConfiguration: Schema.Struct({
        attachedNetworkConfiguration: Schema.optional(
          Schema.Struct({
            l2Networks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  networkId: Schema.String,
                  pluginType: Schema.optional(
                    Schema.Literals([
                      "DPDK",
                      "SRIOV",
                      "OSDevice",
                      "MACVLAN",
                      "IPVLAN",
                    ]),
                  ),
                }),
              ),
            ),
            l3Networks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ipamEnabled: Schema.optional(
                    Schema.Literals(["True", "False"]),
                  ),
                  networkId: Schema.String,
                  pluginType: Schema.optional(
                    Schema.Literals([
                      "DPDK",
                      "SRIOV",
                      "OSDevice",
                      "MACVLAN",
                      "IPVLAN",
                    ]),
                  ),
                }),
              ),
            ),
            trunkedNetworks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  networkId: Schema.String,
                  pluginType: Schema.optional(
                    Schema.Literals([
                      "DPDK",
                      "SRIOV",
                      "OSDevice",
                      "MACVLAN",
                      "IPVLAN",
                    ]),
                  ),
                }),
              ),
            ),
          }),
        ),
        bgpServiceLoadBalancerConfiguration: Schema.optional(
          Schema.Struct({
            bgpAdvertisements: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  advertiseToFabric: Schema.optional(
                    Schema.Literals(["True", "False"]),
                  ),
                  communities: Schema.optional(Schema.Array(Schema.String)),
                  ipAddressPools: Schema.Array(Schema.String),
                  peers: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            bgpPeers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  bfdEnabled: Schema.optional(
                    Schema.Literals(["True", "False"]),
                  ),
                  bgpMultiHop: Schema.optional(
                    Schema.Literals(["True", "False"]),
                  ),
                  holdTime: Schema.optional(Schema.String),
                  keepAliveTime: Schema.optional(Schema.String),
                  myAsn: Schema.optional(Schema.Number),
                  name: Schema.String,
                  password: Schema.optional(SensitiveString),
                  peerAddress: Schema.String,
                  peerAsn: Schema.Number,
                  peerPort: Schema.optional(Schema.Number),
                }),
              ),
            ),
            fabricPeeringEnabled: Schema.optional(
              Schema.Literals(["True", "False"]),
            ),
            ipAddressPools: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  addresses: Schema.Array(Schema.String),
                  autoAssign: Schema.optional(
                    Schema.Literals(["True", "False"]),
                  ),
                  name: Schema.String,
                  onlyUseHostIps: Schema.optional(
                    Schema.Literals(["True", "False"]),
                  ),
                }),
              ),
            ),
          }),
        ),
        cloudServicesNetworkId: Schema.String,
        cniNetworkId: Schema.String,
        dnsServiceIp: Schema.optional(Schema.String),
        l2ServiceLoadBalancerConfiguration: Schema.optional(
          Schema.Struct({
            ipAddressPools: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  addresses: Schema.Array(Schema.String),
                  autoAssign: Schema.optional(
                    Schema.Literals(["True", "False"]),
                  ),
                  name: Schema.String,
                  onlyUseHostIps: Schema.optional(
                    Schema.Literals(["True", "False"]),
                  ),
                }),
              ),
            ),
          }),
        ),
        podCidrs: Schema.optional(Schema.Array(Schema.String)),
        serviceCidrs: Schema.optional(Schema.Array(Schema.String)),
      }),
      attachedNetworkIds: Schema.optional(Schema.Array(Schema.String)),
      availableUpgrades: Schema.optional(
        Schema.Array(
          Schema.Struct({
            availabilityLifecycle: Schema.optional(
              Schema.Literals(["Preview", "GenerallyAvailable"]),
            ),
            version: Schema.optional(Schema.String),
          }),
        ),
      ),
      clusterId: Schema.optional(Schema.String),
      connectedClusterId: Schema.optional(Schema.String),
      controlPlaneKubernetesVersion: Schema.optional(Schema.String),
      detailedStatus: Schema.optional(
        Schema.Literals(["Available", "Error", "Provisioning"]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      featureStatuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            detailedStatus: Schema.optional(
              Schema.Literals(["Running", "Failed", "Unknown"]),
            ),
            detailedStatusMessage: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
          }),
        ),
      ),
      nodes: Schema.optional(
        Schema.Array(
          Schema.Struct({
            agentPoolId: Schema.optional(Schema.String),
            availabilityZone: Schema.optional(Schema.String),
            bareMetalMachineId: Schema.optional(Schema.String),
            cpuCores: Schema.optional(Schema.Number),
            detailedStatus: Schema.optional(
              Schema.Literals([
                "Available",
                "Error",
                "Provisioning",
                "Running",
                "Scheduling",
                "Stopped",
                "Terminating",
                "Unknown",
              ]),
            ),
            detailedStatusMessage: Schema.optional(Schema.String),
            diskSizeGB: Schema.optional(Schema.Number),
            image: Schema.optional(Schema.String),
            kubernetesVersion: Schema.optional(Schema.String),
            labels: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.String,
                  value: Schema.String,
                }),
              ),
            ),
            memorySizeGB: Schema.optional(Schema.Number),
            mode: Schema.optional(
              Schema.Literals(["System", "User", "NotApplicable"]),
            ),
            name: Schema.optional(Schema.String),
            networkAttachments: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  attachedNetworkId: Schema.String,
                  defaultGateway: Schema.optional(
                    Schema.Literals(["True", "False"]),
                  ),
                  ipAllocationMethod: Schema.Literals([
                    "Dynamic",
                    "Static",
                    "Disabled",
                  ]),
                  ipv4Address: Schema.optional(Schema.String),
                  ipv6Address: Schema.optional(Schema.String),
                  macAddress: Schema.optional(Schema.String),
                  networkAttachmentName: Schema.optional(Schema.String),
                }),
              ),
            ),
            powerState: Schema.optional(
              Schema.Literals(["On", "Off", "Unknown"]),
            ),
            role: Schema.optional(Schema.Literals(["ControlPlane", "Worker"])),
            taints: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.String,
                  value: Schema.String,
                }),
              ),
            ),
            vmSkuName: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Accepted",
          "InProgress",
          "Created",
          "Updating",
          "Deleting",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClustersCreateOrUpdateInput>;

// Output Schema
export interface KubernetesClustersCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const KubernetesClustersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<KubernetesClustersCreateOrUpdateOutput>;

// The operation
/**
 * Create a new Kubernetes cluster or update the properties of the existing one.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const KubernetesClustersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClustersCreateOrUpdateInput,
    outputSchema: KubernetesClustersCreateOrUpdateOutput,
  }));
// Input Schema
export interface KubernetesClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
}
export const KubernetesClustersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClustersDeleteInput>;

// Output Schema
export type KubernetesClustersDeleteOutput = void;
export const KubernetesClustersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<KubernetesClustersDeleteOutput>;

// The operation
/**
 * Delete the provided Kubernetes cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const KubernetesClustersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: KubernetesClustersDeleteInput,
  outputSchema: KubernetesClustersDeleteOutput,
}));
// Input Schema
export interface KubernetesClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
}
export const KubernetesClustersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClustersGetInput>;

// Output Schema
export interface KubernetesClustersGetOutput {
  id?: string;
  name?: string;
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
export const KubernetesClustersGetOutput =
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
  }) as unknown as Schema.Codec<KubernetesClustersGetOutput>;

// The operation
/**
 * Get properties of the provided the Kubernetes cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 */
export const KubernetesClustersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: KubernetesClustersGetInput,
  outputSchema: KubernetesClustersGetOutput,
}));
// Input Schema
export interface KubernetesClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const KubernetesClustersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClustersListByResourceGroupInput>;

// Output Schema
export interface KubernetesClustersListByResourceGroupOutput {
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
export const KubernetesClustersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<KubernetesClustersListByResourceGroupOutput>;

// The operation
/**
 * Get a list of Kubernetes clusters in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const KubernetesClustersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClustersListByResourceGroupInput,
    outputSchema: KubernetesClustersListByResourceGroupOutput,
  }));
// Input Schema
export interface KubernetesClustersListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const KubernetesClustersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/kubernetesClusters",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClustersListBySubscriptionInput>;

// Output Schema
export interface KubernetesClustersListBySubscriptionOutput {
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
export const KubernetesClustersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<KubernetesClustersListBySubscriptionOutput>;

// The operation
/**
 * Get a list of Kubernetes clusters in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const KubernetesClustersListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClustersListBySubscriptionInput,
    outputSchema: KubernetesClustersListBySubscriptionOutput,
  }));
// Input Schema
export interface KubernetesClustersRestartNodeInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  nodeName: string;
}
export const KubernetesClustersRestartNodeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/restartNode",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClustersRestartNodeInput>;

// Output Schema
export type KubernetesClustersRestartNodeOutput = void;
export const KubernetesClustersRestartNodeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<KubernetesClustersRestartNodeOutput>;

// The operation
/**
 * Restart a targeted node of a Kubernetes cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 */
export const KubernetesClustersRestartNode =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClustersRestartNodeInput,
    outputSchema: KubernetesClustersRestartNodeOutput,
  }));
// Input Schema
export interface KubernetesClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesClusterName: string;
  properties?: {
    administratorConfiguration?: { sshPublicKeys?: { keyData: string }[] };
    controlPlaneNodeConfiguration?: {
      administratorConfiguration?: { sshPublicKeys?: { keyData: string }[] };
      count?: number;
    };
    kubernetesVersion?: string;
  };
  tags?: Record<string, string>;
}
export const KubernetesClustersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        administratorConfiguration: Schema.optional(
          Schema.Struct({
            sshPublicKeys: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  keyData: Schema.String,
                }),
              ),
            ),
          }),
        ),
        controlPlaneNodeConfiguration: Schema.optional(
          Schema.Struct({
            administratorConfiguration: Schema.optional(
              Schema.Struct({
                sshPublicKeys: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      keyData: Schema.String,
                    }),
                  ),
                ),
              }),
            ),
            count: Schema.optional(Schema.Number),
          }),
        ),
        kubernetesVersion: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesClustersUpdateInput>;

// Output Schema
export interface KubernetesClustersUpdateOutput {
  id?: string;
  name?: string;
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
export const KubernetesClustersUpdateOutput =
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
  }) as unknown as Schema.Codec<KubernetesClustersUpdateOutput>;

// The operation
/**
 * Patch the properties of the provided Kubernetes cluster, or update the tags associated with the Kubernetes cluster. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const KubernetesClustersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: KubernetesClustersUpdateInput,
  outputSchema: KubernetesClustersUpdateOutput,
}));
// Input Schema
export interface KubernetesVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesVersionName: string;
  properties: {
    values?: { description?: string; version?: string }[];
    provisioningState?: "Accepted" | "Canceled" | "Failed" | "Succeeded";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const KubernetesVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      values: Schema.optional(
        Schema.Array(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals(["Accepted", "Canceled", "Failed", "Succeeded"]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesVersions/{kubernetesVersionName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesVersionsCreateOrUpdateInput>;

// Output Schema
export interface KubernetesVersionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const KubernetesVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<KubernetesVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create the Kubernetes version resource or update its tags. This resource is system managed and should only be created with the name "default".
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesVersionName - The name of the Kubernetes version resource.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const KubernetesVersionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesVersionsCreateOrUpdateInput,
    outputSchema: KubernetesVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface KubernetesVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesVersionName: string;
}
export const KubernetesVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesVersions/{kubernetesVersionName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesVersionsDeleteInput>;

// Output Schema
export type KubernetesVersionsDeleteOutput = void;
export const KubernetesVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<KubernetesVersionsDeleteOutput>;

// The operation
/**
 * Delete the specified Kubernetes version resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesVersionName - The name of the Kubernetes version resource.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const KubernetesVersionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: KubernetesVersionsDeleteInput,
  outputSchema: KubernetesVersionsDeleteOutput,
}));
// Input Schema
export interface KubernetesVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesVersionName: string;
}
export const KubernetesVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesVersions/{kubernetesVersionName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesVersionsGetInput>;

// Output Schema
export interface KubernetesVersionsGetOutput {
  id?: string;
  name?: string;
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
export const KubernetesVersionsGetOutput =
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
  }) as unknown as Schema.Codec<KubernetesVersionsGetOutput>;

// The operation
/**
 * Retrieve the Kubernetes version resource that describes the available Kubernetes versions for deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesVersionName - The name of the Kubernetes version resource.
 */
export const KubernetesVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: KubernetesVersionsGetInput,
  outputSchema: KubernetesVersionsGetOutput,
}));
// Input Schema
export interface KubernetesVersionsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const KubernetesVersionsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesVersions",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesVersionsListByResourceGroupInput>;

// Output Schema
export interface KubernetesVersionsListByResourceGroupOutput {
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
export const KubernetesVersionsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<KubernetesVersionsListByResourceGroupOutput>;

// The operation
/**
 * Get a list of Kubernetes version resources in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const KubernetesVersionsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesVersionsListByResourceGroupInput,
    outputSchema: KubernetesVersionsListByResourceGroupOutput,
  }));
// Input Schema
export interface KubernetesVersionsListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const KubernetesVersionsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/kubernetesVersions",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesVersionsListBySubscriptionInput>;

// Output Schema
export interface KubernetesVersionsListBySubscriptionOutput {
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
export const KubernetesVersionsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<KubernetesVersionsListBySubscriptionOutput>;

// The operation
/**
 * Get a list of Kubernetes version resources in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const KubernetesVersionsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: KubernetesVersionsListBySubscriptionInput,
    outputSchema: KubernetesVersionsListBySubscriptionOutput,
  }));
// Input Schema
export interface KubernetesVersionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  kubernetesVersionName: string;
  tags?: Record<string, string>;
}
export const KubernetesVersionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesVersionName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesVersions/{kubernetesVersionName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<KubernetesVersionsUpdateInput>;

// Output Schema
export interface KubernetesVersionsUpdateOutput {
  id?: string;
  name?: string;
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
export const KubernetesVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<KubernetesVersionsUpdateOutput>;

// The operation
/**
 * Update tags associated with the Kubernetes version resource. No other properties are supported for update.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesVersionName - The name of the Kubernetes version resource.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const KubernetesVersionsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: KubernetesVersionsUpdateInput,
  outputSchema: KubernetesVersionsUpdateOutput,
}));
// Input Schema
export interface L2NetworksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2NetworkName: string;
  properties: {
    hybridAksPluginType?: "DPDK" | "SRIOV" | "OSDevice";
    interfaceName?: string;
    l2IsolationDomainId: string;
    associatedResourceIds?: string[];
    clusterId?: string;
    detailedStatus?: "Error" | "Available" | "Provisioning";
    detailedStatusMessage?: string;
    hybridAksClustersAssociatedIds?: string[];
    virtualMachinesAssociatedIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Accepted";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const L2NetworksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2NetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      hybridAksPluginType: Schema.optional(
        Schema.Literals(["DPDK", "SRIOV", "OSDevice"]),
      ),
      interfaceName: Schema.optional(Schema.String),
      l2IsolationDomainId: Schema.String,
      associatedResourceIds: Schema.optional(Schema.Array(Schema.String)),
      clusterId: Schema.optional(Schema.String),
      detailedStatus: Schema.optional(
        Schema.Literals(["Error", "Available", "Provisioning"]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      hybridAksClustersAssociatedIds: Schema.optional(
        Schema.Array(Schema.String),
      ),
      virtualMachinesAssociatedIds: Schema.optional(
        Schema.Array(Schema.String),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Accepted",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l2Networks/{l2NetworkName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<L2NetworksCreateOrUpdateInput>;

// Output Schema
export interface L2NetworksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const L2NetworksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<L2NetworksCreateOrUpdateOutput>;

// The operation
/**
 * Create a new layer 2 (L2) network or update the properties of the existing network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2NetworkName - The name of the L2 network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const L2NetworksCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: L2NetworksCreateOrUpdateInput,
  outputSchema: L2NetworksCreateOrUpdateOutput,
}));
// Input Schema
export interface L2NetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2NetworkName: string;
}
export const L2NetworksDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l2NetworkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l2Networks/{l2NetworkName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<L2NetworksDeleteInput>;

// Output Schema
export type L2NetworksDeleteOutput = void;
export const L2NetworksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<L2NetworksDeleteOutput>;

// The operation
/**
 * Delete the provided layer 2 (L2) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2NetworkName - The name of the L2 network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const L2NetworksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: L2NetworksDeleteInput,
  outputSchema: L2NetworksDeleteOutput,
}));
// Input Schema
export interface L2NetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2NetworkName: string;
}
export const L2NetworksGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l2NetworkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l2Networks/{l2NetworkName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<L2NetworksGetInput>;

// Output Schema
export interface L2NetworksGetOutput {
  id?: string;
  name?: string;
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
export const L2NetworksGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<L2NetworksGetOutput>;

// The operation
/**
 * Get properties of the provided layer 2 (L2) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2NetworkName - The name of the L2 network.
 */
export const L2NetworksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: L2NetworksGetInput,
  outputSchema: L2NetworksGetOutput,
}));
// Input Schema
export interface L2NetworksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const L2NetworksListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l2Networks",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<L2NetworksListByResourceGroupInput>;

// Output Schema
export interface L2NetworksListByResourceGroupOutput {
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
export const L2NetworksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<L2NetworksListByResourceGroupOutput>;

// The operation
/**
 * Get a list of layer 2 (L2) networks in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const L2NetworksListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L2NetworksListByResourceGroupInput,
    outputSchema: L2NetworksListByResourceGroupOutput,
  }));
// Input Schema
export interface L2NetworksListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const L2NetworksListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/l2Networks",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<L2NetworksListBySubscriptionInput>;

// Output Schema
export interface L2NetworksListBySubscriptionOutput {
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
export const L2NetworksListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<L2NetworksListBySubscriptionOutput>;

// The operation
/**
 * Get a list of layer 2 (L2) networks in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const L2NetworksListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L2NetworksListBySubscriptionInput,
    outputSchema: L2NetworksListBySubscriptionOutput,
  }));
// Input Schema
export interface L2NetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2NetworkName: string;
  tags?: Record<string, string>;
}
export const L2NetworksUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l2NetworkName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l2Networks/{l2NetworkName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<L2NetworksUpdateInput>;

// Output Schema
export interface L2NetworksUpdateOutput {
  id?: string;
  name?: string;
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
export const L2NetworksUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<L2NetworksUpdateOutput>;

// The operation
/**
 * Update tags associated with the provided layer 2 (L2) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2NetworkName - The name of the L2 network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const L2NetworksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: L2NetworksUpdateInput,
  outputSchema: L2NetworksUpdateOutput,
}));
// Input Schema
export interface L3NetworksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3NetworkName: string;
  properties: {
    hybridAksIpamEnabled?: "True" | "False";
    hybridAksPluginType?: "DPDK" | "SRIOV" | "OSDevice";
    interfaceName?: string;
    ipAllocationType?: "IPV4" | "IPV6" | "DualStack";
    ipv4ConnectedPrefix?: string;
    ipv6ConnectedPrefix?: string;
    l3IsolationDomainId: string;
    vlan: number;
    associatedResourceIds?: string[];
    clusterId?: string;
    detailedStatus?: "Error" | "Available" | "Provisioning";
    detailedStatusMessage?: string;
    hybridAksClustersAssociatedIds?: string[];
    virtualMachinesAssociatedIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Accepted";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const L3NetworksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3NetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      hybridAksIpamEnabled: Schema.optional(Schema.Literals(["True", "False"])),
      hybridAksPluginType: Schema.optional(
        Schema.Literals(["DPDK", "SRIOV", "OSDevice"]),
      ),
      interfaceName: Schema.optional(Schema.String),
      ipAllocationType: Schema.optional(
        Schema.Literals(["IPV4", "IPV6", "DualStack"]),
      ),
      ipv4ConnectedPrefix: Schema.optional(Schema.String),
      ipv6ConnectedPrefix: Schema.optional(Schema.String),
      l3IsolationDomainId: Schema.String,
      vlan: Schema.Number,
      associatedResourceIds: Schema.optional(Schema.Array(Schema.String)),
      clusterId: Schema.optional(Schema.String),
      detailedStatus: Schema.optional(
        Schema.Literals(["Error", "Available", "Provisioning"]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      hybridAksClustersAssociatedIds: Schema.optional(
        Schema.Array(Schema.String),
      ),
      virtualMachinesAssociatedIds: Schema.optional(
        Schema.Array(Schema.String),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Accepted",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l3Networks/{l3NetworkName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<L3NetworksCreateOrUpdateInput>;

// Output Schema
export interface L3NetworksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const L3NetworksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<L3NetworksCreateOrUpdateOutput>;

// The operation
/**
 * Create a new layer 3 (L3) network or update the properties of the existing network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3NetworkName - The name of the L3 network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const L3NetworksCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: L3NetworksCreateOrUpdateInput,
  outputSchema: L3NetworksCreateOrUpdateOutput,
}));
// Input Schema
export interface L3NetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3NetworkName: string;
}
export const L3NetworksDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l3NetworkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l3Networks/{l3NetworkName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<L3NetworksDeleteInput>;

// Output Schema
export type L3NetworksDeleteOutput = void;
export const L3NetworksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<L3NetworksDeleteOutput>;

// The operation
/**
 * Delete the provided layer 3 (L3) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3NetworkName - The name of the L3 network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const L3NetworksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: L3NetworksDeleteInput,
  outputSchema: L3NetworksDeleteOutput,
}));
// Input Schema
export interface L3NetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3NetworkName: string;
}
export const L3NetworksGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l3NetworkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l3Networks/{l3NetworkName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<L3NetworksGetInput>;

// Output Schema
export interface L3NetworksGetOutput {
  id?: string;
  name?: string;
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
export const L3NetworksGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<L3NetworksGetOutput>;

// The operation
/**
 * Get properties of the provided layer 3 (L3) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3NetworkName - The name of the L3 network.
 */
export const L3NetworksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: L3NetworksGetInput,
  outputSchema: L3NetworksGetOutput,
}));
// Input Schema
export interface L3NetworksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const L3NetworksListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l3Networks",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<L3NetworksListByResourceGroupInput>;

// Output Schema
export interface L3NetworksListByResourceGroupOutput {
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
export const L3NetworksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<L3NetworksListByResourceGroupOutput>;

// The operation
/**
 * Get a list of layer 3 (L3) networks in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const L3NetworksListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L3NetworksListByResourceGroupInput,
    outputSchema: L3NetworksListByResourceGroupOutput,
  }));
// Input Schema
export interface L3NetworksListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const L3NetworksListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/l3Networks",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<L3NetworksListBySubscriptionInput>;

// Output Schema
export interface L3NetworksListBySubscriptionOutput {
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
export const L3NetworksListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<L3NetworksListBySubscriptionOutput>;

// The operation
/**
 * Get a list of layer 3 (L3) networks in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const L3NetworksListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L3NetworksListBySubscriptionInput,
    outputSchema: L3NetworksListBySubscriptionOutput,
  }));
// Input Schema
export interface L3NetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3NetworkName: string;
  tags?: Record<string, string>;
}
export const L3NetworksUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l3NetworkName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l3Networks/{l3NetworkName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<L3NetworksUpdateInput>;

// Output Schema
export interface L3NetworksUpdateOutput {
  id?: string;
  name?: string;
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
export const L3NetworksUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<L3NetworksUpdateOutput>;

// The operation
/**
 * Update tags associated with the provided layer 3 (L3) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3NetworkName - The name of the L3 network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const L3NetworksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: L3NetworksUpdateInput,
  outputSchema: L3NetworksUpdateOutput,
}));
// Input Schema
export interface MetricsConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  metricsConfigurationName: string;
  properties: {
    enabledMetrics?: string[];
    collectionInterval: number;
    detailedStatus?: "Processing" | "Applied" | "Error";
    detailedStatusMessage?: string;
    disabledMetrics?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Provisioning";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const MetricsConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    metricsConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      enabledMetrics: Schema.optional(Schema.Array(Schema.String)),
      collectionInterval: Schema.Number,
      detailedStatus: Schema.optional(
        Schema.Literals(["Processing", "Applied", "Error"]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      disabledMetrics: Schema.optional(Schema.Array(Schema.String)),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Accepted",
          "Provisioning",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/metricsConfigurations/{metricsConfigurationName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<MetricsConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface MetricsConfigurationsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const MetricsConfigurationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<MetricsConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Create new or update the existing metrics configuration of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param metricsConfigurationName - The name of the metrics configuration for the cluster.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const MetricsConfigurationsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MetricsConfigurationsCreateOrUpdateInput,
    outputSchema: MetricsConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface MetricsConfigurationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  metricsConfigurationName: string;
}
export const MetricsConfigurationsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    metricsConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/metricsConfigurations/{metricsConfigurationName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<MetricsConfigurationsDeleteInput>;

// Output Schema
export type MetricsConfigurationsDeleteOutput = void;
export const MetricsConfigurationsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MetricsConfigurationsDeleteOutput>;

// The operation
/**
 * Delete the metrics configuration of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param metricsConfigurationName - The name of the metrics configuration for the cluster.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const MetricsConfigurationsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetricsConfigurationsDeleteInput,
  outputSchema: MetricsConfigurationsDeleteOutput,
}));
// Input Schema
export interface MetricsConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  metricsConfigurationName: string;
}
export const MetricsConfigurationsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    metricsConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/metricsConfigurations/{metricsConfigurationName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<MetricsConfigurationsGetInput>;

// Output Schema
export interface MetricsConfigurationsGetOutput {
  id?: string;
  name?: string;
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
export const MetricsConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<MetricsConfigurationsGetOutput>;

// The operation
/**
 * Get metrics configuration of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param metricsConfigurationName - The name of the metrics configuration for the cluster.
 */
export const MetricsConfigurationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetricsConfigurationsGetInput,
  outputSchema: MetricsConfigurationsGetOutput,
}));
// Input Schema
export interface MetricsConfigurationsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  $top?: number;
  $skipToken?: string;
}
export const MetricsConfigurationsListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/metricsConfigurations",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<MetricsConfigurationsListByClusterInput>;

// Output Schema
export interface MetricsConfigurationsListByClusterOutput {
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
export const MetricsConfigurationsListByClusterOutput =
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
  }) as unknown as Schema.Codec<MetricsConfigurationsListByClusterOutput>;

// The operation
/**
 * Get a list of metrics configurations for the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const MetricsConfigurationsListByCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MetricsConfigurationsListByClusterInput,
    outputSchema: MetricsConfigurationsListByClusterOutput,
  }));
// Input Schema
export interface MetricsConfigurationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  metricsConfigurationName: string;
  properties?: { collectionInterval?: number; enabledMetrics?: string[] };
  tags?: Record<string, string>;
}
export const MetricsConfigurationsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    metricsConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        collectionInterval: Schema.optional(Schema.Number),
        enabledMetrics: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/metricsConfigurations/{metricsConfigurationName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<MetricsConfigurationsUpdateInput>;

// Output Schema
export interface MetricsConfigurationsUpdateOutput {
  id?: string;
  name?: string;
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
export const MetricsConfigurationsUpdateOutput =
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
  }) as unknown as Schema.Codec<MetricsConfigurationsUpdateOutput>;

// The operation
/**
 * Patch properties of metrics configuration for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param metricsConfigurationName - The name of the metrics configuration for the cluster.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const MetricsConfigurationsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetricsConfigurationsUpdateInput,
  outputSchema: MetricsConfigurationsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.NetworkCloud/operations",
    apiVersion: "2026-07-01",
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
export interface RacksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  rackName: string;
  properties: {
    availabilityZone: string;
    rackLocation: string;
    rackSerialNumber: string;
    rackSkuId: string;
    clusterId?: string;
    detailedStatus?: "Error" | "Available" | "Provisioning";
    detailedStatusMessage?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Accepted";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const RacksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    rackName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      availabilityZone: Schema.String,
      rackLocation: Schema.String,
      rackSerialNumber: Schema.String,
      rackSkuId: Schema.String,
      clusterId: Schema.optional(Schema.String),
      detailedStatus: Schema.optional(
        Schema.Literals(["Error", "Available", "Provisioning"]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Accepted",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/racks/{rackName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<RacksCreateOrUpdateInput>;

// Output Schema
export interface RacksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const RacksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RacksCreateOrUpdateOutput>;

// The operation
/**
 * Create a new rack or update properties of the existing one. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param rackName - The name of the rack.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const RacksCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RacksCreateOrUpdateInput,
  outputSchema: RacksCreateOrUpdateOutput,
}));
// Input Schema
export interface RacksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  rackName: string;
}
export const RacksDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  rackName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/racks/{rackName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<RacksDeleteInput>;

// Output Schema
export type RacksDeleteOutput = void;
export const RacksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RacksDeleteOutput>;

// The operation
/**
 * Delete the provided rack. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param rackName - The name of the rack.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const RacksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RacksDeleteInput,
  outputSchema: RacksDeleteOutput,
}));
// Input Schema
export interface RacksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  rackName: string;
}
export const RacksGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  rackName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/racks/{rackName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<RacksGetInput>;

// Output Schema
export interface RacksGetOutput {
  id?: string;
  name?: string;
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
export const RacksGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RacksGetOutput>;

// The operation
/**
 * Get properties of the provided rack.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param rackName - The name of the rack.
 */
export const RacksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RacksGetInput,
  outputSchema: RacksGetOutput,
}));
// Input Schema
export interface RackSkusGetInput {
  subscriptionId: string;
  rackSkuName: string;
}
export const RackSkusGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  rackSkuName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/rackSkus/{rackSkuName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<RackSkusGetInput>;

// Output Schema
export interface RackSkusGetOutput {
  id?: string;
  name?: string;
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
export const RackSkusGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RackSkusGetOutput>;

// The operation
/**
 * Get the properties of the provided rack SKU.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param rackSkuName - The name of the rack SKU.
 */
export const RackSkusGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RackSkusGetInput,
  outputSchema: RackSkusGetOutput,
}));
// Input Schema
export interface RackSkusListBySubscriptionInput {
  subscriptionId: string;
}
export const RackSkusListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/rackSkus",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<RackSkusListBySubscriptionInput>;

// Output Schema
export interface RackSkusListBySubscriptionOutput {
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
export const RackSkusListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<RackSkusListBySubscriptionOutput>;

// The operation
/**
 * Get a list of rack SKUs in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RackSkusListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: RackSkusListBySubscriptionInput,
  outputSchema: RackSkusListBySubscriptionOutput,
}));
// Input Schema
export interface RacksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const RacksListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/racks",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<RacksListByResourceGroupInput>;

// Output Schema
export interface RacksListByResourceGroupOutput {
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
export const RacksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<RacksListByResourceGroupOutput>;

// The operation
/**
 * Get a list of racks in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const RacksListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: RacksListByResourceGroupInput,
  outputSchema: RacksListByResourceGroupOutput,
}));
// Input Schema
export interface RacksListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const RacksListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/racks",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<RacksListBySubscriptionInput>;

// Output Schema
export interface RacksListBySubscriptionOutput {
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
export const RacksListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<RacksListBySubscriptionOutput>;

// The operation
/**
 * Get a list of racks in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const RacksListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: RacksListBySubscriptionInput,
  outputSchema: RacksListBySubscriptionOutput,
}));
// Input Schema
export interface RacksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  rackName: string;
  properties?: { rackLocation?: string; rackSerialNumber?: string };
  tags?: Record<string, string>;
}
export const RacksUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  rackName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      rackLocation: Schema.optional(Schema.String),
      rackSerialNumber: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/racks/{rackName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<RacksUpdateInput>;

// Output Schema
export interface RacksUpdateOutput {
  id?: string;
  name?: string;
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
export const RacksUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RacksUpdateOutput>;

// The operation
/**
 * Patch properties of the provided rack, or update the tags associated with the rack. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param rackName - The name of the rack.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const RacksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RacksUpdateInput,
  outputSchema: RacksUpdateOutput,
}));
// Input Schema
export interface StorageAppliancesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageApplianceName: string;
  properties: {
    rackId: string;
    storageApplianceSkuId: string;
    rackSlot: number;
    serialNumber: string;
    administratorCredentials: {
      password: string | Redacted.Redacted<string>;
      username: string;
    };
    caCertificate?: { hash?: string; value?: string };
    capacity?: number;
    capacityUsed?: number;
    clusterId?: string;
    detailedStatus?: "Available" | "Degraded" | "Error" | "Provisioning";
    detailedStatusMessage?: string;
    expansionShelves?: { model?: string; version?: string }[];
    managementIpv4Address?: string;
    manufacturer?: string;
    model?: string;
    monitoringConfigurationStatus?: {
      logLevel?: "Default" | "Nexus";
      metricsLevel?: "Default" | "Nexus";
    };
    remoteVendorManagementFeature?: "Supported" | "Unsupported";
    remoteVendorManagementStatus?: "Enabled" | "Disabled" | "Unsupported";
    secretRotationStatus?: {
      expirePeriodDays?: number;
      lastRotationTime?: string;
      rotationPeriodDays?: number;
      secretArchiveReference?: {
        keyVaultId?: string;
        keyVaultUri?: string;
        secretName?: string;
        secretVersion?: string;
      };
      secretType?: string;
    }[];
    version?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Accepted";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const StorageAppliancesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      rackId: Schema.String,
      storageApplianceSkuId: Schema.String,
      rackSlot: Schema.Number,
      serialNumber: Schema.String,
      administratorCredentials: Schema.Struct({
        password: SensitiveString,
        username: Schema.String,
      }),
      caCertificate: Schema.optional(
        Schema.Struct({
          hash: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
      capacity: Schema.optional(Schema.Number),
      capacityUsed: Schema.optional(Schema.Number),
      clusterId: Schema.optional(Schema.String),
      detailedStatus: Schema.optional(
        Schema.Literals(["Available", "Degraded", "Error", "Provisioning"]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      expansionShelves: Schema.optional(
        Schema.Array(
          Schema.Struct({
            model: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
          }),
        ),
      ),
      managementIpv4Address: Schema.optional(Schema.String),
      manufacturer: Schema.optional(Schema.String),
      model: Schema.optional(Schema.String),
      monitoringConfigurationStatus: Schema.optional(
        Schema.Struct({
          logLevel: Schema.optional(Schema.Literals(["Default", "Nexus"])),
          metricsLevel: Schema.optional(Schema.Literals(["Default", "Nexus"])),
        }),
      ),
      remoteVendorManagementFeature: Schema.optional(
        Schema.Literals(["Supported", "Unsupported"]),
      ),
      remoteVendorManagementStatus: Schema.optional(
        Schema.Literals(["Enabled", "Disabled", "Unsupported"]),
      ),
      secretRotationStatus: Schema.optional(
        Schema.Array(
          Schema.Struct({
            expirePeriodDays: Schema.optional(Schema.Number),
            lastRotationTime: Schema.optional(Schema.String),
            rotationPeriodDays: Schema.optional(Schema.Number),
            secretArchiveReference: Schema.optional(
              Schema.Struct({
                keyVaultId: Schema.optional(Schema.String),
                keyVaultUri: Schema.optional(Schema.String),
                secretName: Schema.optional(Schema.String),
                secretVersion: Schema.optional(Schema.String),
              }),
            ),
            secretType: Schema.optional(Schema.String),
          }),
        ),
      ),
      version: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Accepted",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<StorageAppliancesCreateOrUpdateInput>;

// Output Schema
export interface StorageAppliancesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageAppliancesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageAppliancesCreateOrUpdateOutput>;

// The operation
/**
 * Create a new storage appliance or update the properties of the existing one. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const StorageAppliancesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesCreateOrUpdateInput,
    outputSchema: StorageAppliancesCreateOrUpdateOutput,
  }));
// Input Schema
export interface StorageAppliancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageApplianceName: string;
}
export const StorageAppliancesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<StorageAppliancesDeleteInput>;

// Output Schema
export type StorageAppliancesDeleteOutput = void;
export const StorageAppliancesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAppliancesDeleteOutput>;

// The operation
/**
 * Delete the provided storage appliance. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const StorageAppliancesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageAppliancesDeleteInput,
  outputSchema: StorageAppliancesDeleteOutput,
}));
// Input Schema
export interface StorageAppliancesDisableRemoteVendorManagementInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageApplianceName: string;
}
export const StorageAppliancesDisableRemoteVendorManagementInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}/disableRemoteVendorManagement",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<StorageAppliancesDisableRemoteVendorManagementInput>;

// Output Schema
export type StorageAppliancesDisableRemoteVendorManagementOutput = void;
export const StorageAppliancesDisableRemoteVendorManagementOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAppliancesDisableRemoteVendorManagementOutput>;

// The operation
/**
 * Disable remote vendor management of the provided storage appliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 */
export const StorageAppliancesDisableRemoteVendorManagement =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesDisableRemoteVendorManagementInput,
    outputSchema: StorageAppliancesDisableRemoteVendorManagementOutput,
  }));
// Input Schema
export interface StorageAppliancesEnableRemoteVendorManagementInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageApplianceName: string;
  supportEndpoints?: string[];
}
export const StorageAppliancesEnableRemoteVendorManagementInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
    supportEndpoints: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}/enableRemoteVendorManagement",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<StorageAppliancesEnableRemoteVendorManagementInput>;

// Output Schema
export type StorageAppliancesEnableRemoteVendorManagementOutput = void;
export const StorageAppliancesEnableRemoteVendorManagementOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAppliancesEnableRemoteVendorManagementOutput>;

// The operation
/**
 * Enable remote vendor management of the provided storage appliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 */
export const StorageAppliancesEnableRemoteVendorManagement =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesEnableRemoteVendorManagementInput,
    outputSchema: StorageAppliancesEnableRemoteVendorManagementOutput,
  }));
// Input Schema
export interface StorageAppliancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageApplianceName: string;
}
export const StorageAppliancesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<StorageAppliancesGetInput>;

// Output Schema
export interface StorageAppliancesGetOutput {
  id?: string;
  name?: string;
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
export const StorageAppliancesGetOutput =
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
  }) as unknown as Schema.Codec<StorageAppliancesGetOutput>;

// The operation
/**
 * Get properties of the provided storage appliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 */
export const StorageAppliancesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageAppliancesGetInput,
  outputSchema: StorageAppliancesGetOutput,
}));
// Input Schema
export interface StorageAppliancesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const StorageAppliancesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<StorageAppliancesListByResourceGroupInput>;

// Output Schema
export interface StorageAppliancesListByResourceGroupOutput {
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
export const StorageAppliancesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<StorageAppliancesListByResourceGroupOutput>;

// The operation
/**
 * Get a list of storage appliances in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const StorageAppliancesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesListByResourceGroupInput,
    outputSchema: StorageAppliancesListByResourceGroupOutput,
  }));
// Input Schema
export interface StorageAppliancesListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const StorageAppliancesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/storageAppliances",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<StorageAppliancesListBySubscriptionInput>;

// Output Schema
export interface StorageAppliancesListBySubscriptionOutput {
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
export const StorageAppliancesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<StorageAppliancesListBySubscriptionOutput>;

// The operation
/**
 * Get a list of storage appliances in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const StorageAppliancesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesListBySubscriptionInput,
    outputSchema: StorageAppliancesListBySubscriptionOutput,
  }));
// Input Schema
export interface StorageAppliancesRunReadCommandsInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageApplianceName: string;
  commands: { arguments?: string[]; command: string }[];
  limitTimeSeconds: number;
}
export const StorageAppliancesRunReadCommandsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
    commands: Schema.Array(
      Schema.Struct({
        arguments: Schema.optional(Schema.Array(Schema.String)),
        command: Schema.String,
      }),
    ),
    limitTimeSeconds: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}/runReadCommands",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<StorageAppliancesRunReadCommandsInput>;

// Output Schema
export type StorageAppliancesRunReadCommandsOutput = void;
export const StorageAppliancesRunReadCommandsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageAppliancesRunReadCommandsOutput>;

// The operation
/**
 * Run one or more read-only commands on the provided storage appliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 */
export const StorageAppliancesRunReadCommands =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesRunReadCommandsInput,
    outputSchema: StorageAppliancesRunReadCommandsOutput,
  }));
// Input Schema
export interface StorageAppliancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  storageApplianceName: string;
  properties?: { serialNumber?: string };
  tags?: Record<string, string>;
}
export const StorageAppliancesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        serialNumber: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<StorageAppliancesUpdateInput>;

// Output Schema
export interface StorageAppliancesUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageAppliancesUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageAppliancesUpdateOutput>;

// The operation
/**
 * Update properties of the provided storage appliance, or update tags associated with the storage appliance Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const StorageAppliancesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageAppliancesUpdateInput,
  outputSchema: StorageAppliancesUpdateOutput,
}));
// Input Schema
export interface TrunkedNetworksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  trunkedNetworkName: string;
  properties: {
    hybridAksPluginType?: "DPDK" | "SRIOV" | "OSDevice";
    interfaceName?: string;
    isolationDomainIds: string[];
    vlans: number[];
    associatedResourceIds?: string[];
    clusterId?: string;
    detailedStatus?: "Error" | "Available" | "Provisioning";
    detailedStatusMessage?: string;
    hybridAksClustersAssociatedIds?: string[];
    virtualMachinesAssociatedIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Accepted";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const TrunkedNetworksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trunkedNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      hybridAksPluginType: Schema.optional(
        Schema.Literals(["DPDK", "SRIOV", "OSDevice"]),
      ),
      interfaceName: Schema.optional(Schema.String),
      isolationDomainIds: Schema.Array(Schema.String),
      vlans: Schema.Array(Schema.Number),
      associatedResourceIds: Schema.optional(Schema.Array(Schema.String)),
      clusterId: Schema.optional(Schema.String),
      detailedStatus: Schema.optional(
        Schema.Literals(["Error", "Available", "Provisioning"]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      hybridAksClustersAssociatedIds: Schema.optional(
        Schema.Array(Schema.String),
      ),
      virtualMachinesAssociatedIds: Schema.optional(
        Schema.Array(Schema.String),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Accepted",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/trunkedNetworks/{trunkedNetworkName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<TrunkedNetworksCreateOrUpdateInput>;

// Output Schema
export interface TrunkedNetworksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const TrunkedNetworksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TrunkedNetworksCreateOrUpdateOutput>;

// The operation
/**
 * Create a new trunked network or update the properties of the existing trunked network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trunkedNetworkName - The name of the trunked network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const TrunkedNetworksCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TrunkedNetworksCreateOrUpdateInput,
    outputSchema: TrunkedNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export interface TrunkedNetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  trunkedNetworkName: string;
}
export const TrunkedNetworksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trunkedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/trunkedNetworks/{trunkedNetworkName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<TrunkedNetworksDeleteInput>;

// Output Schema
export type TrunkedNetworksDeleteOutput = void;
export const TrunkedNetworksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TrunkedNetworksDeleteOutput>;

// The operation
/**
 * Delete the provided trunked network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trunkedNetworkName - The name of the trunked network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const TrunkedNetworksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: TrunkedNetworksDeleteInput,
  outputSchema: TrunkedNetworksDeleteOutput,
}));
// Input Schema
export interface TrunkedNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  trunkedNetworkName: string;
}
export const TrunkedNetworksGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trunkedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/trunkedNetworks/{trunkedNetworkName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<TrunkedNetworksGetInput>;

// Output Schema
export interface TrunkedNetworksGetOutput {
  id?: string;
  name?: string;
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
export const TrunkedNetworksGetOutput =
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
  }) as unknown as Schema.Codec<TrunkedNetworksGetOutput>;

// The operation
/**
 * Get properties of the provided trunked network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trunkedNetworkName - The name of the trunked network.
 */
export const TrunkedNetworksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TrunkedNetworksGetInput,
  outputSchema: TrunkedNetworksGetOutput,
}));
// Input Schema
export interface TrunkedNetworksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const TrunkedNetworksListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/trunkedNetworks",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<TrunkedNetworksListByResourceGroupInput>;

// Output Schema
export interface TrunkedNetworksListByResourceGroupOutput {
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
export const TrunkedNetworksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<TrunkedNetworksListByResourceGroupOutput>;

// The operation
/**
 * Get a list of trunked networks in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const TrunkedNetworksListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TrunkedNetworksListByResourceGroupInput,
    outputSchema: TrunkedNetworksListByResourceGroupOutput,
  }));
// Input Schema
export interface TrunkedNetworksListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const TrunkedNetworksListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/trunkedNetworks",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<TrunkedNetworksListBySubscriptionInput>;

// Output Schema
export interface TrunkedNetworksListBySubscriptionOutput {
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
export const TrunkedNetworksListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<TrunkedNetworksListBySubscriptionOutput>;

// The operation
/**
 * Get a list of trunked networks in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const TrunkedNetworksListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TrunkedNetworksListBySubscriptionInput,
    outputSchema: TrunkedNetworksListBySubscriptionOutput,
  }));
// Input Schema
export interface TrunkedNetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  trunkedNetworkName: string;
  tags?: Record<string, string>;
}
export const TrunkedNetworksUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trunkedNetworkName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/trunkedNetworks/{trunkedNetworkName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<TrunkedNetworksUpdateInput>;

// Output Schema
export interface TrunkedNetworksUpdateOutput {
  id?: string;
  name?: string;
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
export const TrunkedNetworksUpdateOutput =
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
  }) as unknown as Schema.Codec<TrunkedNetworksUpdateOutput>;

// The operation
/**
 * Update tags associated with the provided trunked network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trunkedNetworkName - The name of the trunked network.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const TrunkedNetworksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TrunkedNetworksUpdateInput,
  outputSchema: TrunkedNetworksUpdateOutput,
}));
// Input Schema
export interface VirtualMachinesAssignRelayInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  machineId: string;
  relayType?: "Platform" | "Public";
}
export const VirtualMachinesAssignRelayInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    machineId: Schema.String,
    relayType: Schema.optional(Schema.Literals(["Platform", "Public"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/assignRelay",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesAssignRelayInput>;

// Output Schema
export type VirtualMachinesAssignRelayOutput = void;
export const VirtualMachinesAssignRelayOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesAssignRelayOutput>;

// The operation
/**
 * Assigns a relay to the specified Microsoft.HybridCompute machine associated with the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesAssignRelay = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesAssignRelayInput,
  outputSchema: VirtualMachinesAssignRelayOutput,
}));
// Input Schema
export interface VirtualMachinesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  properties: {
    adminUsername: string;
    bootMethod?: "BIOS" | "UEFI";
    cloudServicesNetworkAttachment: {
      attachedNetworkId: string;
      defaultGateway?: "True" | "False";
      ipAllocationMethod: "Dynamic" | "Static" | "Disabled";
      ipv4Address?: string;
      ipv6Address?: string;
      macAddress?: string;
      networkAttachmentName?: string;
    };
    cpuCores: number;
    isolateEmulatorThread?: "False" | "True";
    memorySizeGB: number;
    networkAttachments?: {
      attachedNetworkId: string;
      defaultGateway?: "True" | "False";
      ipAllocationMethod: "Dynamic" | "Static" | "Disabled";
      ipv4Address?: string;
      ipv6Address?: string;
      macAddress?: string;
      networkAttachmentName?: string;
    }[];
    networkData?: string;
    networkDataContent?: string;
    placementHints?: {
      hintType: "Affinity" | "AntiAffinity";
      resourceId: string;
      schedulingExecution: "Hard" | "Soft";
      scope: "Machine" | "Rack";
    }[];
    sshPublicKeys?: { keyData: string }[];
    storageProfile: {
      osDisk: {
        createOption?: "Ephemeral" | "Persistent";
        deleteOption?: "Delete";
        diskSizeGB: number;
      };
      volumeAttachments?: string[];
    };
    userData?: string;
    userDataContent?: string;
    virtioInterface?: "Modern" | "Transitional";
    vmDeviceModel?: "T1" | "T2" | "T3";
    vmImage: string;
    vmImageRepositoryCredentials?: {
      password: string | Redacted.Redacted<string>;
      registryUrl: string;
      username: string;
    };
    availabilityZone?: string;
    bareMetalMachineId?: string;
    clusterId?: string;
    consoleExtendedLocation?: {
      name: string;
      type: "EdgeZone" | "CustomLocation";
    };
    detailedStatus?:
      | "Available"
      | "Error"
      | "Provisioning"
      | "Running"
      | "Scheduling"
      | "Stopped"
      | "Terminating"
      | "Unknown";
    detailedStatusMessage?: string;
    powerState?: "Off" | "On" | "Unknown";
    volumes?: string[];
    provisioningState?:
      | "Accepted"
      | "Canceled"
      | "Failed"
      | "Provisioning"
      | "Succeeded";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
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
  location: string;
}
export const VirtualMachinesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      adminUsername: Schema.String,
      bootMethod: Schema.optional(Schema.Literals(["BIOS", "UEFI"])),
      cloudServicesNetworkAttachment: Schema.Struct({
        attachedNetworkId: Schema.String,
        defaultGateway: Schema.optional(Schema.Literals(["True", "False"])),
        ipAllocationMethod: Schema.Literals(["Dynamic", "Static", "Disabled"]),
        ipv4Address: Schema.optional(Schema.String),
        ipv6Address: Schema.optional(Schema.String),
        macAddress: Schema.optional(Schema.String),
        networkAttachmentName: Schema.optional(Schema.String),
      }),
      cpuCores: Schema.Number,
      isolateEmulatorThread: Schema.optional(
        Schema.Literals(["False", "True"]),
      ),
      memorySizeGB: Schema.Number,
      networkAttachments: Schema.optional(
        Schema.Array(
          Schema.Struct({
            attachedNetworkId: Schema.String,
            defaultGateway: Schema.optional(Schema.Literals(["True", "False"])),
            ipAllocationMethod: Schema.Literals([
              "Dynamic",
              "Static",
              "Disabled",
            ]),
            ipv4Address: Schema.optional(Schema.String),
            ipv6Address: Schema.optional(Schema.String),
            macAddress: Schema.optional(Schema.String),
            networkAttachmentName: Schema.optional(Schema.String),
          }),
        ),
      ),
      networkData: Schema.optional(Schema.String),
      networkDataContent: Schema.optional(Schema.String),
      placementHints: Schema.optional(
        Schema.Array(
          Schema.Struct({
            hintType: Schema.Literals(["Affinity", "AntiAffinity"]),
            resourceId: Schema.String,
            schedulingExecution: Schema.Literals(["Hard", "Soft"]),
            scope: Schema.Literals(["Machine", "Rack"]),
          }),
        ),
      ),
      sshPublicKeys: Schema.optional(
        Schema.Array(
          Schema.Struct({
            keyData: Schema.String,
          }),
        ),
      ),
      storageProfile: Schema.Struct({
        osDisk: Schema.Struct({
          createOption: Schema.optional(
            Schema.Literals(["Ephemeral", "Persistent"]),
          ),
          deleteOption: Schema.optional(Schema.Literals(["Delete"])),
          diskSizeGB: Schema.Number,
        }),
        volumeAttachments: Schema.optional(Schema.Array(Schema.String)),
      }),
      userData: Schema.optional(Schema.String),
      userDataContent: Schema.optional(Schema.String),
      virtioInterface: Schema.optional(
        Schema.Literals(["Modern", "Transitional"]),
      ),
      vmDeviceModel: Schema.optional(Schema.Literals(["T1", "T2", "T3"])),
      vmImage: Schema.String,
      vmImageRepositoryCredentials: Schema.optional(
        Schema.Struct({
          password: SensitiveString,
          registryUrl: Schema.String,
          username: Schema.String,
        }),
      ),
      availabilityZone: Schema.optional(Schema.String),
      bareMetalMachineId: Schema.optional(Schema.String),
      clusterId: Schema.optional(Schema.String),
      consoleExtendedLocation: Schema.optional(
        Schema.Struct({
          name: Schema.String,
          type: Schema.Literals(["EdgeZone", "CustomLocation"]),
        }),
      ),
      detailedStatus: Schema.optional(
        Schema.Literals([
          "Available",
          "Error",
          "Provisioning",
          "Running",
          "Scheduling",
          "Stopped",
          "Terminating",
          "Unknown",
        ]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      powerState: Schema.optional(Schema.Literals(["Off", "On", "Unknown"])),
      volumes: Schema.optional(Schema.Array(Schema.String)),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Canceled",
          "Failed",
          "Provisioning",
          "Succeeded",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
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
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesCreateOrUpdateInput>;

// Output Schema
export interface VirtualMachinesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualMachinesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachinesCreateOrUpdateOutput>;

// The operation
/**
 * Create a new virtual machine or update the properties of the existing virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const VirtualMachinesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesCreateOrUpdateInput,
    outputSchema: VirtualMachinesCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualMachinesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
}
export const VirtualMachinesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesDeleteInput>;

// Output Schema
export type VirtualMachinesDeleteOutput = void;
export const VirtualMachinesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesDeleteOutput>;

// The operation
/**
 * Delete the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const VirtualMachinesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesDeleteInput,
  outputSchema: VirtualMachinesDeleteOutput,
}));
// Input Schema
export interface VirtualMachinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
}
export const VirtualMachinesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesGetInput>;

// Output Schema
export interface VirtualMachinesGetOutput {
  id?: string;
  name?: string;
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
export const VirtualMachinesGetOutput =
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
  }) as unknown as Schema.Codec<VirtualMachinesGetOutput>;

// The operation
/**
 * Get properties of the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesGetInput,
  outputSchema: VirtualMachinesGetOutput,
}));
// Input Schema
export interface VirtualMachinesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const VirtualMachinesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesListByResourceGroupInput>;

// Output Schema
export interface VirtualMachinesListByResourceGroupOutput {
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
export const VirtualMachinesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<VirtualMachinesListByResourceGroupOutput>;

// The operation
/**
 * Get a list of virtual machines in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const VirtualMachinesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesListByResourceGroupInput,
    outputSchema: VirtualMachinesListByResourceGroupOutput,
  }));
// Input Schema
export interface VirtualMachinesListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const VirtualMachinesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/virtualMachines",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesListBySubscriptionInput>;

// Output Schema
export interface VirtualMachinesListBySubscriptionOutput {
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
export const VirtualMachinesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<VirtualMachinesListBySubscriptionOutput>;

// The operation
/**
 * Get a list of virtual machines in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const VirtualMachinesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesListBySubscriptionInput,
    outputSchema: VirtualMachinesListBySubscriptionOutput,
  }));
// Input Schema
export interface VirtualMachinesPowerOffInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
  skipShutdown?: "True" | "False";
}
export const VirtualMachinesPowerOffInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    skipShutdown: Schema.optional(Schema.Literals(["True", "False"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/powerOff",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesPowerOffInput>;

// Output Schema
export type VirtualMachinesPowerOffOutput = void;
export const VirtualMachinesPowerOffOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesPowerOffOutput>;

// The operation
/**
 * Power off the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesPowerOff = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesPowerOffInput,
  outputSchema: VirtualMachinesPowerOffOutput,
}));
// Input Schema
export interface VirtualMachinesReimageInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
}
export const VirtualMachinesReimageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/reimage",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesReimageInput>;

// Output Schema
export type VirtualMachinesReimageOutput = void;
export const VirtualMachinesReimageOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesReimageOutput>;

// The operation
/**
 * Reimage the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesReimage = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesReimageInput,
  outputSchema: VirtualMachinesReimageOutput,
}));
// Input Schema
export interface VirtualMachinesRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
}
export const VirtualMachinesRestartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/restart",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesRestartInput>;

// Output Schema
export type VirtualMachinesRestartOutput = void;
export const VirtualMachinesRestartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesRestartOutput>;

// The operation
/**
 * Restart the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesRestart = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesRestartInput,
  outputSchema: VirtualMachinesRestartOutput,
}));
// Input Schema
export interface VirtualMachinesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
}
export const VirtualMachinesStartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/start",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesStartInput>;

// Output Schema
export type VirtualMachinesStartOutput = void;
export const VirtualMachinesStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesStartOutput>;

// The operation
/**
 * Start the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesStartInput,
  outputSchema: VirtualMachinesStartOutput,
}));
// Input Schema
export interface VirtualMachinesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineName: string;
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
  properties?: {
    vmImageRepositoryCredentials?: {
      password?: string | Redacted.Redacted<string>;
      registryUrl?: string;
      username?: string;
    };
  };
  tags?: Record<string, string>;
}
export const VirtualMachinesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.optional(
      Schema.Struct({
        vmImageRepositoryCredentials: Schema.optional(
          Schema.Struct({
            password: Schema.optional(SensitiveString),
            registryUrl: Schema.optional(Schema.String),
            username: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesUpdateInput>;

// Output Schema
export interface VirtualMachinesUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualMachinesUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachinesUpdateOutput>;

// The operation
/**
 * Patch the properties of the provided virtual machine, or update the tags associated with the virtual machine. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const VirtualMachinesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesUpdateInput,
  outputSchema: VirtualMachinesUpdateOutput,
}));
// Input Schema
export interface VolumesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  volumeName: string;
  properties: {
    sizeMiB: number;
    storageApplianceId?: string;
    allocatedSizeMiB?: number;
    assignedStorageApplianceId?: string;
    attachedTo?: string[];
    detailedStatus?: "Active" | "Error" | "Provisioning";
    detailedStatusMessage?: string;
    serialNumber?: string;
    provisioningState?:
      | "Accepted"
      | "Canceled"
      | "Failed"
      | "Provisioning"
      | "Succeeded";
  };
  etag?: string;
  extendedLocation: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const VolumesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      sizeMiB: Schema.Number,
      storageApplianceId: Schema.optional(Schema.String),
      allocatedSizeMiB: Schema.optional(Schema.Number),
      assignedStorageApplianceId: Schema.optional(Schema.String),
      attachedTo: Schema.optional(Schema.Array(Schema.String)),
      detailedStatus: Schema.optional(
        Schema.Literals(["Active", "Error", "Provisioning"]),
      ),
      detailedStatusMessage: Schema.optional(Schema.String),
      serialNumber: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Canceled",
          "Failed",
          "Provisioning",
          "Succeeded",
        ]),
      ),
    }),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["EdgeZone", "CustomLocation"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/volumes/{volumeName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VolumesCreateOrUpdateInput>;

// Output Schema
export interface VolumesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const VolumesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VolumesCreateOrUpdateOutput>;

// The operation
/**
 * Create a new volume or update the properties of the existing one.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param volumeName - The name of the volume.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const VolumesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesCreateOrUpdateInput,
  outputSchema: VolumesCreateOrUpdateOutput,
}));
// Input Schema
export interface VolumesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  volumeName: string;
}
export const VolumesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/volumes/{volumeName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<VolumesDeleteInput>;

// Output Schema
export type VolumesDeleteOutput = void;
export const VolumesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesDeleteOutput>;

// The operation
/**
 * Delete the provided volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param volumeName - The name of the volume.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const VolumesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesDeleteInput,
  outputSchema: VolumesDeleteOutput,
}));
// Input Schema
export interface VolumesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  volumeName: string;
}
export const VolumesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/volumes/{volumeName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<VolumesGetInput>;

// Output Schema
export interface VolumesGetOutput {
  id?: string;
  name?: string;
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
export const VolumesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumesGetOutput>;

// The operation
/**
 * Get properties of the provided volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param volumeName - The name of the volume.
 */
export const VolumesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesGetInput,
  outputSchema: VolumesGetOutput,
}));
// Input Schema
export interface VolumesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $skipToken?: string;
}
export const VolumesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/volumes",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VolumesListByResourceGroupInput>;

// Output Schema
export interface VolumesListByResourceGroupOutput {
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
export const VolumesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<VolumesListByResourceGroupOutput>;

// The operation
/**
 * Get a list of volumes in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const VolumesListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesListByResourceGroupInput,
  outputSchema: VolumesListByResourceGroupOutput,
}));
// Input Schema
export interface VolumesListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $skipToken?: string;
}
export const VolumesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/volumes",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VolumesListBySubscriptionInput>;

// Output Schema
export interface VolumesListBySubscriptionOutput {
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
export const VolumesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<VolumesListBySubscriptionOutput>;

// The operation
/**
 * Get a list of volumes in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param $skipToken - The opaque token that the server returns to indicate where to continue listing resources from. This is used for paging through large result sets.
 */
export const VolumesListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesListBySubscriptionInput,
  outputSchema: VolumesListBySubscriptionOutput,
}));
// Input Schema
export interface VolumesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  volumeName: string;
  tags?: Record<string, string>;
}
export const VolumesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/volumes/{volumeName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<VolumesUpdateInput>;

// Output Schema
export interface VolumesUpdateOutput {
  id?: string;
  name?: string;
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
export const VolumesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumesUpdateOutput>;

// The operation
/**
 * Update tags associated with the provided volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param volumeName - The name of the volume.
 * @param If-Match - The ETag of the transformation. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing resource. Other values will result in error from server as they are not supported.
 */
export const VolumesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VolumesUpdateInput,
  outputSchema: VolumesUpdateOutput,
}));
