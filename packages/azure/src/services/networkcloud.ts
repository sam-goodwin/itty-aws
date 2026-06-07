/**
 * Azure Networkcloud API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const AgentPoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type AgentPoolsCreateOrUpdateInput =
  typeof AgentPoolsCreateOrUpdateInput.Type;

// Output Schema
export const AgentPoolsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AgentPoolsCreateOrUpdateOutput =
  typeof AgentPoolsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new Kubernetes cluster agent pool or update the properties of the existing one.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param agentPoolName - The name of the Kubernetes cluster agent pool.
 */
export const AgentPoolsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentPoolsCreateOrUpdateInput,
    outputSchema: AgentPoolsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const AgentPoolsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools/{agentPoolName}",
    apiVersion: "2025-09-01",
  }),
);
export type AgentPoolsDeleteInput = typeof AgentPoolsDeleteInput.Type;

// Output Schema
export const AgentPoolsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentPoolsDeleteOutput = typeof AgentPoolsDeleteOutput.Type;

// The operation
/**
 * Delete the provided Kubernetes cluster agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param agentPoolName - The name of the Kubernetes cluster agent pool.
 */
export const AgentPoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolsDeleteInput,
  outputSchema: AgentPoolsDeleteOutput,
}));
// Input Schema
export const AgentPoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools/{agentPoolName}",
    apiVersion: "2025-09-01",
  }),
);
export type AgentPoolsGetInput = typeof AgentPoolsGetInput.Type;

// Output Schema
export const AgentPoolsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type AgentPoolsGetOutput = typeof AgentPoolsGetOutput.Type;

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
export const AgentPoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolsGetInput,
  outputSchema: AgentPoolsGetOutput,
}));
// Input Schema
export const AgentPoolsListByKubernetesClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/agentPools",
      apiVersion: "2025-09-01",
    }),
  );
export type AgentPoolsListByKubernetesClusterInput =
  typeof AgentPoolsListByKubernetesClusterInput.Type;

// Output Schema
export const AgentPoolsListByKubernetesClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AgentPoolsListByKubernetesClusterOutput =
  typeof AgentPoolsListByKubernetesClusterOutput.Type;

// The operation
/**
 * Get a list of agent pools for the provided Kubernetes cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 */
export const AgentPoolsListByKubernetesCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentPoolsListByKubernetesClusterInput,
    outputSchema: AgentPoolsListByKubernetesClusterOutput,
  }));
// Input Schema
export const AgentPoolsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    apiVersion: "2025-09-01",
  }),
);
export type AgentPoolsUpdateInput = typeof AgentPoolsUpdateInput.Type;

// Output Schema
export const AgentPoolsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type AgentPoolsUpdateOutput = typeof AgentPoolsUpdateOutput.Type;

// The operation
/**
 * Patch the properties of the provided Kubernetes cluster agent pool, or update the tags associated with the Kubernetes cluster agent pool. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param agentPoolName - The name of the Kubernetes cluster agent pool.
 */
export const AgentPoolsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolsUpdateInput,
  outputSchema: AgentPoolsUpdateOutput,
}));
// Input Schema
export const BareMetalMachineKeySetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachineKeySetsCreateOrUpdateInput =
  typeof BareMetalMachineKeySetsCreateOrUpdateInput.Type;

// Output Schema
export const BareMetalMachineKeySetsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BareMetalMachineKeySetsCreateOrUpdateOutput =
  typeof BareMetalMachineKeySetsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new bare metal machine key set or update the existing one for the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bareMetalMachineKeySetName - The name of the bare metal machine key set.
 */
export const BareMetalMachineKeySetsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachineKeySetsCreateOrUpdateInput,
    outputSchema: BareMetalMachineKeySetsCreateOrUpdateOutput,
  }));
// Input Schema
export const BareMetalMachineKeySetsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineKeySetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets/{bareMetalMachineKeySetName}",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachineKeySetsDeleteInput =
  typeof BareMetalMachineKeySetsDeleteInput.Type;

// Output Schema
export const BareMetalMachineKeySetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachineKeySetsDeleteOutput =
  typeof BareMetalMachineKeySetsDeleteOutput.Type;

// The operation
/**
 * Delete the bare metal machine key set of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bareMetalMachineKeySetName - The name of the bare metal machine key set.
 */
export const BareMetalMachineKeySetsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachineKeySetsDeleteInput,
    outputSchema: BareMetalMachineKeySetsDeleteOutput,
  }));
// Input Schema
export const BareMetalMachineKeySetsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineKeySetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets/{bareMetalMachineKeySetName}",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachineKeySetsGetInput =
  typeof BareMetalMachineKeySetsGetInput.Type;

// Output Schema
export const BareMetalMachineKeySetsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BareMetalMachineKeySetsGetOutput =
  typeof BareMetalMachineKeySetsGetOutput.Type;

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
export const BareMetalMachineKeySetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachineKeySetsGetInput,
    outputSchema: BareMetalMachineKeySetsGetOutput,
  }),
);
// Input Schema
export const BareMetalMachineKeySetsListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachineKeySetsListByClusterInput =
  typeof BareMetalMachineKeySetsListByClusterInput.Type;

// Output Schema
export const BareMetalMachineKeySetsListByClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BareMetalMachineKeySetsListByClusterOutput =
  typeof BareMetalMachineKeySetsListByClusterOutput.Type;

// The operation
/**
 * Get a list of bare metal machine key sets for the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const BareMetalMachineKeySetsListByCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachineKeySetsListByClusterInput,
    outputSchema: BareMetalMachineKeySetsListByClusterOutput,
  }));
// Input Schema
export const BareMetalMachineKeySetsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachineKeySetsUpdateInput =
  typeof BareMetalMachineKeySetsUpdateInput.Type;

// Output Schema
export const BareMetalMachineKeySetsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BareMetalMachineKeySetsUpdateOutput =
  typeof BareMetalMachineKeySetsUpdateOutput.Type;

// The operation
/**
 * Patch properties of bare metal machine key set for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bareMetalMachineKeySetName - The name of the bare metal machine key set.
 */
export const BareMetalMachineKeySetsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachineKeySetsUpdateInput,
    outputSchema: BareMetalMachineKeySetsUpdateOutput,
  }));
// Input Schema
export const BareMetalMachinesCordonInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    evacuate: Schema.optional(Schema.Literals(["True", "False"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/cordon",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesCordonInput =
  typeof BareMetalMachinesCordonInput.Type;

// Output Schema
export const BareMetalMachinesCordonOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesCordonOutput =
  typeof BareMetalMachinesCordonOutput.Type;

// The operation
/**
 * Cordon the provided bare metal machine's Kubernetes node.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesCordon = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesCordonInput,
    outputSchema: BareMetalMachinesCordonOutput,
  }),
);
// Input Schema
export const BareMetalMachinesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      oamIpv4Address: Schema.optional(Schema.String),
      oamIpv6Address: Schema.optional(Schema.String),
      osImage: Schema.optional(Schema.String),
      powerState: Schema.optional(Schema.Literals(["On", "Off"])),
      readyState: Schema.optional(Schema.Literals(["True", "False"])),
      runtimeProtectionStatus: Schema.optional(
        Schema.Struct({
          definitionsLastUpdated: Schema.optional(Schema.String),
          definitionsVersion: Schema.optional(Schema.String),
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
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesCreateOrUpdateInput =
  typeof BareMetalMachinesCreateOrUpdateInput.Type;

// Output Schema
export const BareMetalMachinesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BareMetalMachinesCreateOrUpdateOutput =
  typeof BareMetalMachinesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new bare metal machine or update the properties of the existing one. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesCreateOrUpdateInput,
    outputSchema: BareMetalMachinesCreateOrUpdateOutput,
  }));
// Input Schema
export const BareMetalMachinesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesDeleteInput =
  typeof BareMetalMachinesDeleteInput.Type;

// Output Schema
export const BareMetalMachinesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesDeleteOutput =
  typeof BareMetalMachinesDeleteOutput.Type;

// The operation
/**
 * Delete the provided bare metal machine. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesDeleteInput,
    outputSchema: BareMetalMachinesDeleteOutput,
  }),
);
// Input Schema
export const BareMetalMachinesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesGetInput = typeof BareMetalMachinesGetInput.Type;

// Output Schema
export const BareMetalMachinesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BareMetalMachinesGetOutput = typeof BareMetalMachinesGetOutput.Type;

// The operation
/**
 * Get properties of the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesGetInput,
    outputSchema: BareMetalMachinesGetOutput,
  }),
);
// Input Schema
export const BareMetalMachinesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesListByResourceGroupInput =
  typeof BareMetalMachinesListByResourceGroupInput.Type;

// Output Schema
export const BareMetalMachinesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BareMetalMachinesListByResourceGroupOutput =
  typeof BareMetalMachinesListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of bare metal machines in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const BareMetalMachinesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesListByResourceGroupInput,
    outputSchema: BareMetalMachinesListByResourceGroupOutput,
  }));
// Input Schema
export const BareMetalMachinesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/bareMetalMachines",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesListBySubscriptionInput =
  typeof BareMetalMachinesListBySubscriptionInput.Type;

// Output Schema
export const BareMetalMachinesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BareMetalMachinesListBySubscriptionOutput =
  typeof BareMetalMachinesListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of bare metal machines in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const BareMetalMachinesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesListBySubscriptionInput,
    outputSchema: BareMetalMachinesListBySubscriptionOutput,
  }));
// Input Schema
export const BareMetalMachinesPowerOffInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
    skipShutdown: Schema.optional(Schema.Literals(["True", "False"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/powerOff",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesPowerOffInput =
  typeof BareMetalMachinesPowerOffInput.Type;

// Output Schema
export const BareMetalMachinesPowerOffOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesPowerOffOutput =
  typeof BareMetalMachinesPowerOffOutput.Type;

// The operation
/**
 * Power off the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesPowerOff = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesPowerOffInput,
    outputSchema: BareMetalMachinesPowerOffOutput,
  }),
);
// Input Schema
export const BareMetalMachinesReimageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/reimage",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesReimageInput =
  typeof BareMetalMachinesReimageInput.Type;

// Output Schema
export const BareMetalMachinesReimageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesReimageOutput =
  typeof BareMetalMachinesReimageOutput.Type;

// The operation
/**
 * Reimage the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesReimage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesReimageInput,
    outputSchema: BareMetalMachinesReimageOutput,
  }),
);
// Input Schema
export const BareMetalMachinesReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesReplaceInput =
  typeof BareMetalMachinesReplaceInput.Type;

// Output Schema
export const BareMetalMachinesReplaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesReplaceOutput =
  typeof BareMetalMachinesReplaceOutput.Type;

// The operation
/**
 * Replace the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesReplace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesReplaceInput,
    outputSchema: BareMetalMachinesReplaceOutput,
  }),
);
// Input Schema
export const BareMetalMachinesRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/restart",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesRestartInput =
  typeof BareMetalMachinesRestartInput.Type;

// Output Schema
export const BareMetalMachinesRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesRestartOutput =
  typeof BareMetalMachinesRestartOutput.Type;

// The operation
/**
 * Restart the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesRestartInput,
    outputSchema: BareMetalMachinesRestartOutput,
  }),
);
// Input Schema
export const BareMetalMachinesRunCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesRunCommandInput =
  typeof BareMetalMachinesRunCommandInput.Type;

// Output Schema
export const BareMetalMachinesRunCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesRunCommandOutput =
  typeof BareMetalMachinesRunCommandOutput.Type;

// The operation
/**
 * Run the command or the script on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesRunCommand = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesRunCommandInput,
    outputSchema: BareMetalMachinesRunCommandOutput,
  }),
);
// Input Schema
export const BareMetalMachinesRunDataExtractsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesRunDataExtractsInput =
  typeof BareMetalMachinesRunDataExtractsInput.Type;

// Output Schema
export const BareMetalMachinesRunDataExtractsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesRunDataExtractsOutput =
  typeof BareMetalMachinesRunDataExtractsOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesRunDataExtractsInput,
    outputSchema: BareMetalMachinesRunDataExtractsOutput,
  }));
// Input Schema
export const BareMetalMachinesRunDataExtractsRestrictedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesRunDataExtractsRestrictedInput =
  typeof BareMetalMachinesRunDataExtractsRestrictedInput.Type;

// Output Schema
export const BareMetalMachinesRunDataExtractsRestrictedOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesRunDataExtractsRestrictedOutput =
  typeof BareMetalMachinesRunDataExtractsRestrictedOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesRunDataExtractsRestrictedInput,
    outputSchema: BareMetalMachinesRunDataExtractsRestrictedOutput,
  }));
// Input Schema
export const BareMetalMachinesRunReadCommandsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesRunReadCommandsInput =
  typeof BareMetalMachinesRunReadCommandsInput.Type;

// Output Schema
export const BareMetalMachinesRunReadCommandsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesRunReadCommandsOutput =
  typeof BareMetalMachinesRunReadCommandsOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BareMetalMachinesRunReadCommandsInput,
    outputSchema: BareMetalMachinesRunReadCommandsOutput,
  }));
// Input Schema
export const BareMetalMachinesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/start",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesStartInput =
  typeof BareMetalMachinesStartInput.Type;

// Output Schema
export const BareMetalMachinesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesStartOutput =
  typeof BareMetalMachinesStartOutput.Type;

// The operation
/**
 * Start the provided bare metal machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesStartInput,
    outputSchema: BareMetalMachinesStartOutput,
  }),
);
// Input Schema
export const BareMetalMachinesUncordonInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    bareMetalMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/bareMetalMachines/{bareMetalMachineName}/uncordon",
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesUncordonInput =
  typeof BareMetalMachinesUncordonInput.Type;

// Output Schema
export const BareMetalMachinesUncordonOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BareMetalMachinesUncordonOutput =
  typeof BareMetalMachinesUncordonOutput.Type;

// The operation
/**
 * Uncordon the provided bare metal machine's Kubernetes node.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesUncordon = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesUncordonInput,
    outputSchema: BareMetalMachinesUncordonOutput,
  }),
);
// Input Schema
export const BareMetalMachinesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type BareMetalMachinesUpdateInput =
  typeof BareMetalMachinesUpdateInput.Type;

// Output Schema
export const BareMetalMachinesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BareMetalMachinesUpdateOutput =
  typeof BareMetalMachinesUpdateOutput.Type;

// The operation
/**
 * Patch properties of the provided bare metal machine, or update tags associated with the bare metal machine. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param bareMetalMachineName - The name of the bare metal machine.
 */
export const BareMetalMachinesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BareMetalMachinesUpdateInput,
    outputSchema: BareMetalMachinesUpdateOutput,
  }),
);
// Input Schema
export const BmcKeySetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type BmcKeySetsCreateOrUpdateInput =
  typeof BmcKeySetsCreateOrUpdateInput.Type;

// Output Schema
export const BmcKeySetsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BmcKeySetsCreateOrUpdateOutput =
  typeof BmcKeySetsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new baseboard management controller key set or update the existing one for the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bmcKeySetName - The name of the baseboard management controller key set.
 */
export const BmcKeySetsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BmcKeySetsCreateOrUpdateInput,
    outputSchema: BmcKeySetsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const BmcKeySetsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  bmcKeySetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bmcKeySets/{bmcKeySetName}",
    apiVersion: "2025-09-01",
  }),
);
export type BmcKeySetsDeleteInput = typeof BmcKeySetsDeleteInput.Type;

// Output Schema
export const BmcKeySetsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BmcKeySetsDeleteOutput = typeof BmcKeySetsDeleteOutput.Type;

// The operation
/**
 * Delete the baseboard management controller key set of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bmcKeySetName - The name of the baseboard management controller key set.
 */
export const BmcKeySetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BmcKeySetsDeleteInput,
  outputSchema: BmcKeySetsDeleteOutput,
}));
// Input Schema
export const BmcKeySetsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  bmcKeySetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bmcKeySets/{bmcKeySetName}",
    apiVersion: "2025-09-01",
  }),
);
export type BmcKeySetsGetInput = typeof BmcKeySetsGetInput.Type;

// Output Schema
export const BmcKeySetsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type BmcKeySetsGetOutput = typeof BmcKeySetsGetOutput.Type;

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
export const BmcKeySetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BmcKeySetsGetInput,
  outputSchema: BmcKeySetsGetOutput,
}));
// Input Schema
export const BmcKeySetsListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bmcKeySets",
      apiVersion: "2025-09-01",
    }),
  );
export type BmcKeySetsListByClusterInput =
  typeof BmcKeySetsListByClusterInput.Type;

// Output Schema
export const BmcKeySetsListByClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type BmcKeySetsListByClusterOutput =
  typeof BmcKeySetsListByClusterOutput.Type;

// The operation
/**
 * Get a list of baseboard management controller key sets for the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const BmcKeySetsListByCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BmcKeySetsListByClusterInput,
    outputSchema: BmcKeySetsListByClusterOutput,
  }),
);
// Input Schema
export const BmcKeySetsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    apiVersion: "2025-09-01",
  }),
);
export type BmcKeySetsUpdateInput = typeof BmcKeySetsUpdateInput.Type;

// Output Schema
export const BmcKeySetsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type BmcKeySetsUpdateOutput = typeof BmcKeySetsUpdateOutput.Type;

// The operation
/**
 * Patch properties of baseboard management controller key set for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param bmcKeySetName - The name of the baseboard management controller key set.
 */
export const BmcKeySetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BmcKeySetsUpdateInput,
  outputSchema: BmcKeySetsUpdateOutput,
}));
// Input Schema
export const CloudServicesNetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type CloudServicesNetworksCreateOrUpdateInput =
  typeof CloudServicesNetworksCreateOrUpdateInput.Type;

// Output Schema
export const CloudServicesNetworksCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CloudServicesNetworksCreateOrUpdateOutput =
  typeof CloudServicesNetworksCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new cloud services network or update the properties of the existing cloud services network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudServicesNetworkName - The name of the cloud services network.
 */
export const CloudServicesNetworksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudServicesNetworksCreateOrUpdateInput,
    outputSchema: CloudServicesNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export const CloudServicesNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudServicesNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/cloudServicesNetworks/{cloudServicesNetworkName}",
      apiVersion: "2025-09-01",
    }),
  );
export type CloudServicesNetworksDeleteInput =
  typeof CloudServicesNetworksDeleteInput.Type;

// Output Schema
export const CloudServicesNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CloudServicesNetworksDeleteOutput =
  typeof CloudServicesNetworksDeleteOutput.Type;

// The operation
/**
 * Delete the provided cloud services network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudServicesNetworkName - The name of the cloud services network.
 */
export const CloudServicesNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudServicesNetworksDeleteInput,
    outputSchema: CloudServicesNetworksDeleteOutput,
  }),
);
// Input Schema
export const CloudServicesNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudServicesNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/cloudServicesNetworks/{cloudServicesNetworkName}",
      apiVersion: "2025-09-01",
    }),
  );
export type CloudServicesNetworksGetInput =
  typeof CloudServicesNetworksGetInput.Type;

// Output Schema
export const CloudServicesNetworksGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CloudServicesNetworksGetOutput =
  typeof CloudServicesNetworksGetOutput.Type;

// The operation
/**
 * Get properties of the provided cloud services network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudServicesNetworkName - The name of the cloud services network.
 */
export const CloudServicesNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudServicesNetworksGetInput,
    outputSchema: CloudServicesNetworksGetOutput,
  }),
);
// Input Schema
export const CloudServicesNetworksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/cloudServicesNetworks",
      apiVersion: "2025-09-01",
    }),
  );
export type CloudServicesNetworksListByResourceGroupInput =
  typeof CloudServicesNetworksListByResourceGroupInput.Type;

// Output Schema
export const CloudServicesNetworksListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CloudServicesNetworksListByResourceGroupOutput =
  typeof CloudServicesNetworksListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of cloud services networks in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CloudServicesNetworksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudServicesNetworksListByResourceGroupInput,
    outputSchema: CloudServicesNetworksListByResourceGroupOutput,
  }));
// Input Schema
export const CloudServicesNetworksListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/cloudServicesNetworks",
      apiVersion: "2025-09-01",
    }),
  );
export type CloudServicesNetworksListBySubscriptionInput =
  typeof CloudServicesNetworksListBySubscriptionInput.Type;

// Output Schema
export const CloudServicesNetworksListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CloudServicesNetworksListBySubscriptionOutput =
  typeof CloudServicesNetworksListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of cloud services networks in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CloudServicesNetworksListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudServicesNetworksListBySubscriptionInput,
    outputSchema: CloudServicesNetworksListBySubscriptionOutput,
  }));
// Input Schema
export const CloudServicesNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type CloudServicesNetworksUpdateInput =
  typeof CloudServicesNetworksUpdateInput.Type;

// Output Schema
export const CloudServicesNetworksUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CloudServicesNetworksUpdateOutput =
  typeof CloudServicesNetworksUpdateOutput.Type;

// The operation
/**
 * Update properties of the provided cloud services network, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudServicesNetworkName - The name of the cloud services network.
 */
export const CloudServicesNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudServicesNetworksUpdateInput,
    outputSchema: CloudServicesNetworksUpdateOutput,
  }),
);
// Input Schema
export const ClusterManagersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusterManagers/{clusterManagerName}",
      apiVersion: "2025-09-01",
    }),
  );
export type ClusterManagersCreateOrUpdateInput =
  typeof ClusterManagersCreateOrUpdateInput.Type;

// Output Schema
export const ClusterManagersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ClusterManagersCreateOrUpdateOutput =
  typeof ClusterManagersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new cluster manager or update properties of the cluster manager if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterManagerName - The name of the cluster manager.
 */
export const ClusterManagersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterManagersCreateOrUpdateInput,
    outputSchema: ClusterManagersCreateOrUpdateOutput,
  }));
// Input Schema
export const ClusterManagersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterManagerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusterManagers/{clusterManagerName}",
      apiVersion: "2025-09-01",
    }),
  );
export type ClusterManagersDeleteInput = typeof ClusterManagersDeleteInput.Type;

// Output Schema
export const ClusterManagersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClusterManagersDeleteOutput =
  typeof ClusterManagersDeleteOutput.Type;

// The operation
/**
 * Delete the provided cluster manager.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterManagerName - The name of the cluster manager.
 */
export const ClusterManagersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClusterManagersDeleteInput,
    outputSchema: ClusterManagersDeleteOutput,
  }),
);
// Input Schema
export const ClusterManagersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterManagerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusterManagers/{clusterManagerName}",
      apiVersion: "2025-09-01",
    }),
  );
export type ClusterManagersGetInput = typeof ClusterManagersGetInput.Type;

// Output Schema
export const ClusterManagersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ClusterManagersGetOutput = typeof ClusterManagersGetOutput.Type;

// The operation
/**
 * Get the properties of the provided cluster manager.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterManagerName - The name of the cluster manager.
 */
export const ClusterManagersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClusterManagersGetInput,
  outputSchema: ClusterManagersGetOutput,
}));
// Input Schema
export const ClusterManagersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusterManagers",
      apiVersion: "2025-09-01",
    }),
  );
export type ClusterManagersListByResourceGroupInput =
  typeof ClusterManagersListByResourceGroupInput.Type;

// Output Schema
export const ClusterManagersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ClusterManagersListByResourceGroupOutput =
  typeof ClusterManagersListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of cluster managers in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ClusterManagersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterManagersListByResourceGroupInput,
    outputSchema: ClusterManagersListByResourceGroupOutput,
  }));
// Input Schema
export const ClusterManagersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/clusterManagers",
      apiVersion: "2025-09-01",
    }),
  );
export type ClusterManagersListBySubscriptionInput =
  typeof ClusterManagersListBySubscriptionInput.Type;

// Output Schema
export const ClusterManagersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ClusterManagersListBySubscriptionOutput =
  typeof ClusterManagersListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of cluster managers in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ClusterManagersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterManagersListBySubscriptionInput,
    outputSchema: ClusterManagersListBySubscriptionOutput,
  }));
// Input Schema
export const ClusterManagersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type ClusterManagersUpdateInput = typeof ClusterManagersUpdateInput.Type;

// Output Schema
export const ClusterManagersUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ClusterManagersUpdateOutput =
  typeof ClusterManagersUpdateOutput.Type;

// The operation
/**
 * Patch properties of the provided cluster manager, or update the tags assigned to the cluster manager. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterManagerName - The name of the cluster manager.
 */
export const ClusterManagersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClusterManagersUpdateInput,
    outputSchema: ClusterManagersUpdateOutput,
  }),
);
// Input Schema
export const ClustersContinueUpdateVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    machineGroupTargetingMode: Schema.optional(
      Schema.Literals(["AlphaByRack"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/continueUpdateVersion",
      apiVersion: "2025-09-01",
    }),
  );
export type ClustersContinueUpdateVersionInput =
  typeof ClustersContinueUpdateVersionInput.Type;

// Output Schema
export const ClustersContinueUpdateVersionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersContinueUpdateVersionOutput =
  typeof ClustersContinueUpdateVersionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersContinueUpdateVersionInput,
    outputSchema: ClustersContinueUpdateVersionOutput,
  }));
// Input Schema
export const ClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}",
      apiVersion: "2025-09-01",
    }),
  );
export type ClustersCreateOrUpdateInput =
  typeof ClustersCreateOrUpdateInput.Type;

// Output Schema
export const ClustersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ClustersCreateOrUpdateOutput =
  typeof ClustersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new cluster or update the properties of the cluster if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersCreateOrUpdateInput,
    outputSchema: ClustersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}",
    apiVersion: "2025-09-01",
  }),
);
export type ClustersDeleteInput = typeof ClustersDeleteInput.Type;

// Output Schema
export const ClustersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersDeleteOutput = typeof ClustersDeleteOutput.Type;

// The operation
/**
 * Delete the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export const ClustersDeployInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  skipValidationsForMachines: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/deploy",
    apiVersion: "2025-09-01",
  }),
);
export type ClustersDeployInput = typeof ClustersDeployInput.Type;

// Output Schema
export const ClustersDeployOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersDeployOutput = typeof ClustersDeployOutput.Type;

// The operation
/**
 * Deploy the cluster using the rack configuration provided during creation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersDeploy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeployInput,
  outputSchema: ClustersDeployOutput,
}));
// Input Schema
export const ClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}",
    apiVersion: "2025-09-01",
  }),
);
export type ClustersGetInput = typeof ClustersGetInput.Type;

// Output Schema
export const ClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type ClustersGetOutput = typeof ClustersGetOutput.Type;

// The operation
/**
 * Get properties of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters",
      apiVersion: "2025-09-01",
    }),
  );
export type ClustersListByResourceGroupInput =
  typeof ClustersListByResourceGroupInput.Type;

// Output Schema
export const ClustersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ClustersListByResourceGroupOutput =
  typeof ClustersListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of clusters in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListByResourceGroupInput,
    outputSchema: ClustersListByResourceGroupOutput,
  }),
);
// Input Schema
export const ClustersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/clusters",
      apiVersion: "2025-09-01",
    }),
  );
export type ClustersListBySubscriptionInput =
  typeof ClustersListBySubscriptionInput.Type;

// Output Schema
export const ClustersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ClustersListBySubscriptionOutput =
  typeof ClustersListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of clusters in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ClustersListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListBySubscriptionInput,
    outputSchema: ClustersListBySubscriptionOutput,
  }),
);
// Input Schema
export const ClustersScanRuntimeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    scanActivity: Schema.optional(Schema.Literals(["Scan", "Skip"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/scanRuntime",
      apiVersion: "2025-09-01",
    }),
  );
export type ClustersScanRuntimeInput = typeof ClustersScanRuntimeInput.Type;

// Output Schema
export const ClustersScanRuntimeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersScanRuntimeOutput = typeof ClustersScanRuntimeOutput.Type;

// The operation
/**
 * Triggers the execution of a runtime protection scan to detect and remediate detected issues, in accordance with the cluster configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersScanRuntime = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersScanRuntimeInput,
  outputSchema: ClustersScanRuntimeOutput,
}));
// Input Schema
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
          applicationId: Schema.String,
          password: SensitiveString,
          principalId: Schema.String,
          tenantId: Schema.String,
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
      runtimeProtectionConfiguration: Schema.optional(
        Schema.Struct({
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
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}",
    apiVersion: "2025-09-01",
  }),
);
export type ClustersUpdateInput = typeof ClustersUpdateInput.Type;

// Output Schema
export const ClustersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type ClustersUpdateOutput = typeof ClustersUpdateOutput.Type;

// The operation
/**
 * Patch the properties of the provided cluster, or update the tags associated with the cluster. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export const ClustersUpdateVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    targetClusterVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/updateVersion",
      apiVersion: "2025-09-01",
    }),
  );
export type ClustersUpdateVersionInput = typeof ClustersUpdateVersionInput.Type;

// Output Schema
export const ClustersUpdateVersionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ClustersUpdateVersionOutput =
  typeof ClustersUpdateVersionOutput.Type;

// The operation
/**
 * Update the version of the provided cluster to one of the available supported versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const ClustersUpdateVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersUpdateVersionInput,
    outputSchema: ClustersUpdateVersionOutput,
  }),
);
// Input Schema
export const ConsolesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type ConsolesCreateOrUpdateInput =
  typeof ConsolesCreateOrUpdateInput.Type;

// Output Schema
export const ConsolesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ConsolesCreateOrUpdateOutput =
  typeof ConsolesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new virtual machine console or update the properties of the existing virtual machine console.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param consoleName - The name of the virtual machine console.
 */
export const ConsolesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConsolesCreateOrUpdateInput,
    outputSchema: ConsolesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ConsolesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  virtualMachineName: Schema.String.pipe(T.PathParam()),
  consoleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/consoles/{consoleName}",
    apiVersion: "2025-09-01",
  }),
);
export type ConsolesDeleteInput = typeof ConsolesDeleteInput.Type;

// Output Schema
export const ConsolesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConsolesDeleteOutput = typeof ConsolesDeleteOutput.Type;

// The operation
/**
 * Delete the provided virtual machine console.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param consoleName - The name of the virtual machine console.
 */
export const ConsolesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConsolesDeleteInput,
  outputSchema: ConsolesDeleteOutput,
}));
// Input Schema
export const ConsolesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  virtualMachineName: Schema.String.pipe(T.PathParam()),
  consoleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/consoles/{consoleName}",
    apiVersion: "2025-09-01",
  }),
);
export type ConsolesGetInput = typeof ConsolesGetInput.Type;

// Output Schema
export const ConsolesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type ConsolesGetOutput = typeof ConsolesGetOutput.Type;

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
export const ConsolesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConsolesGetInput,
  outputSchema: ConsolesGetOutput,
}));
// Input Schema
export const ConsolesListByVirtualMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/consoles",
      apiVersion: "2025-09-01",
    }),
  );
export type ConsolesListByVirtualMachineInput =
  typeof ConsolesListByVirtualMachineInput.Type;

// Output Schema
export const ConsolesListByVirtualMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ConsolesListByVirtualMachineOutput =
  typeof ConsolesListByVirtualMachineOutput.Type;

// The operation
/**
 * Get a list of consoles for the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const ConsolesListByVirtualMachine =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConsolesListByVirtualMachineInput,
    outputSchema: ConsolesListByVirtualMachineOutput,
  }));
// Input Schema
export const ConsolesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
          keyData: Schema.String,
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/consoles/{consoleName}",
    apiVersion: "2025-09-01",
  }),
);
export type ConsolesUpdateInput = typeof ConsolesUpdateInput.Type;

// Output Schema
export const ConsolesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type ConsolesUpdateOutput = typeof ConsolesUpdateOutput.Type;

// The operation
/**
 * Patch the properties of the provided virtual machine console, or update the tags associated with the virtual machine console. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 * @param consoleName - The name of the virtual machine console.
 */
export const ConsolesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConsolesUpdateInput,
  outputSchema: ConsolesUpdateOutput,
}));
// Input Schema
export const KubernetesClusterFeaturesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClusterFeaturesCreateOrUpdateInput =
  typeof KubernetesClusterFeaturesCreateOrUpdateInput.Type;

// Output Schema
export const KubernetesClusterFeaturesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type KubernetesClusterFeaturesCreateOrUpdateOutput =
  typeof KubernetesClusterFeaturesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new Kubernetes cluster feature or update properties of the Kubernetes cluster feature if it exists.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param featureName - The name of the feature.
 */
export const KubernetesClusterFeaturesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClusterFeaturesCreateOrUpdateInput,
    outputSchema: KubernetesClusterFeaturesCreateOrUpdateOutput,
  }));
// Input Schema
export const KubernetesClusterFeaturesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/features/{featureName}",
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClusterFeaturesDeleteInput =
  typeof KubernetesClusterFeaturesDeleteInput.Type;

// Output Schema
export const KubernetesClusterFeaturesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type KubernetesClusterFeaturesDeleteOutput =
  typeof KubernetesClusterFeaturesDeleteOutput.Type;

// The operation
/**
 * Delete the provided Kubernetes cluster feature.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param featureName - The name of the feature.
 */
export const KubernetesClusterFeaturesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClusterFeaturesDeleteInput,
    outputSchema: KubernetesClusterFeaturesDeleteOutput,
  }));
// Input Schema
export const KubernetesClusterFeaturesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    featureName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/features/{featureName}",
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClusterFeaturesGetInput =
  typeof KubernetesClusterFeaturesGetInput.Type;

// Output Schema
export const KubernetesClusterFeaturesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type KubernetesClusterFeaturesGetOutput =
  typeof KubernetesClusterFeaturesGetOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClusterFeaturesGetInput,
    outputSchema: KubernetesClusterFeaturesGetOutput,
  }));
// Input Schema
export const KubernetesClusterFeaturesListByKubernetesClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/features",
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClusterFeaturesListByKubernetesClusterInput =
  typeof KubernetesClusterFeaturesListByKubernetesClusterInput.Type;

// Output Schema
export const KubernetesClusterFeaturesListByKubernetesClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type KubernetesClusterFeaturesListByKubernetesClusterOutput =
  typeof KubernetesClusterFeaturesListByKubernetesClusterOutput.Type;

// The operation
/**
 * Get a list of features for the provided Kubernetes cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 */
export const KubernetesClusterFeaturesListByKubernetesCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClusterFeaturesListByKubernetesClusterInput,
    outputSchema: KubernetesClusterFeaturesListByKubernetesClusterOutput,
  }));
// Input Schema
export const KubernetesClusterFeaturesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClusterFeaturesUpdateInput =
  typeof KubernetesClusterFeaturesUpdateInput.Type;

// Output Schema
export const KubernetesClusterFeaturesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type KubernetesClusterFeaturesUpdateOutput =
  typeof KubernetesClusterFeaturesUpdateOutput.Type;

// The operation
/**
 * Patch properties of the provided Kubernetes cluster feature.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 * @param featureName - The name of the feature.
 */
export const KubernetesClusterFeaturesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClusterFeaturesUpdateInput,
    outputSchema: KubernetesClusterFeaturesUpdateOutput,
  }));
// Input Schema
export const KubernetesClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClustersCreateOrUpdateInput =
  typeof KubernetesClustersCreateOrUpdateInput.Type;

// Output Schema
export const KubernetesClustersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type KubernetesClustersCreateOrUpdateOutput =
  typeof KubernetesClustersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new Kubernetes cluster or update the properties of the existing one.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 */
export const KubernetesClustersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClustersCreateOrUpdateInput,
    outputSchema: KubernetesClustersCreateOrUpdateOutput,
  }));
// Input Schema
export const KubernetesClustersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}",
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClustersDeleteInput =
  typeof KubernetesClustersDeleteInput.Type;

// Output Schema
export const KubernetesClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type KubernetesClustersDeleteOutput =
  typeof KubernetesClustersDeleteOutput.Type;

// The operation
/**
 * Delete the provided Kubernetes cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 */
export const KubernetesClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: KubernetesClustersDeleteInput,
    outputSchema: KubernetesClustersDeleteOutput,
  }),
);
// Input Schema
export const KubernetesClustersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}",
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClustersGetInput = typeof KubernetesClustersGetInput.Type;

// Output Schema
export const KubernetesClustersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type KubernetesClustersGetOutput =
  typeof KubernetesClustersGetOutput.Type;

// The operation
/**
 * Get properties of the provided the Kubernetes cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 */
export const KubernetesClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: KubernetesClustersGetInput,
    outputSchema: KubernetesClustersGetOutput,
  }),
);
// Input Schema
export const KubernetesClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters",
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClustersListByResourceGroupInput =
  typeof KubernetesClustersListByResourceGroupInput.Type;

// Output Schema
export const KubernetesClustersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type KubernetesClustersListByResourceGroupOutput =
  typeof KubernetesClustersListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of Kubernetes clusters in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const KubernetesClustersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClustersListByResourceGroupInput,
    outputSchema: KubernetesClustersListByResourceGroupOutput,
  }));
// Input Schema
export const KubernetesClustersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/kubernetesClusters",
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClustersListBySubscriptionInput =
  typeof KubernetesClustersListBySubscriptionInput.Type;

// Output Schema
export const KubernetesClustersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type KubernetesClustersListBySubscriptionOutput =
  typeof KubernetesClustersListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of Kubernetes clusters in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const KubernetesClustersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClustersListBySubscriptionInput,
    outputSchema: KubernetesClustersListBySubscriptionOutput,
  }));
// Input Schema
export const KubernetesClustersRestartNodeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kubernetesClusterName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/kubernetesClusters/{kubernetesClusterName}/restartNode",
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClustersRestartNodeInput =
  typeof KubernetesClustersRestartNodeInput.Type;

// Output Schema
export const KubernetesClustersRestartNodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type KubernetesClustersRestartNodeOutput =
  typeof KubernetesClustersRestartNodeOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KubernetesClustersRestartNodeInput,
    outputSchema: KubernetesClustersRestartNodeOutput,
  }));
// Input Schema
export const KubernetesClustersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type KubernetesClustersUpdateInput =
  typeof KubernetesClustersUpdateInput.Type;

// Output Schema
export const KubernetesClustersUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type KubernetesClustersUpdateOutput =
  typeof KubernetesClustersUpdateOutput.Type;

// The operation
/**
 * Patch the properties of the provided Kubernetes cluster, or update the tags associated with the Kubernetes cluster. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kubernetesClusterName - The name of the Kubernetes cluster.
 */
export const KubernetesClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: KubernetesClustersUpdateInput,
    outputSchema: KubernetesClustersUpdateOutput,
  }),
);
// Input Schema
export const L2NetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type L2NetworksCreateOrUpdateInput =
  typeof L2NetworksCreateOrUpdateInput.Type;

// Output Schema
export const L2NetworksCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type L2NetworksCreateOrUpdateOutput =
  typeof L2NetworksCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new layer 2 (L2) network or update the properties of the existing network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2NetworkName - The name of the L2 network.
 */
export const L2NetworksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L2NetworksCreateOrUpdateInput,
    outputSchema: L2NetworksCreateOrUpdateOutput,
  }),
);
// Input Schema
export const L2NetworksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l2NetworkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l2Networks/{l2NetworkName}",
    apiVersion: "2025-09-01",
  }),
);
export type L2NetworksDeleteInput = typeof L2NetworksDeleteInput.Type;

// Output Schema
export const L2NetworksDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type L2NetworksDeleteOutput = typeof L2NetworksDeleteOutput.Type;

// The operation
/**
 * Delete the provided layer 2 (L2) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2NetworkName - The name of the L2 network.
 */
export const L2NetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: L2NetworksDeleteInput,
  outputSchema: L2NetworksDeleteOutput,
}));
// Input Schema
export const L2NetworksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l2NetworkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l2Networks/{l2NetworkName}",
    apiVersion: "2025-09-01",
  }),
);
export type L2NetworksGetInput = typeof L2NetworksGetInput.Type;

// Output Schema
export const L2NetworksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type L2NetworksGetOutput = typeof L2NetworksGetOutput.Type;

// The operation
/**
 * Get properties of the provided layer 2 (L2) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2NetworkName - The name of the L2 network.
 */
export const L2NetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: L2NetworksGetInput,
  outputSchema: L2NetworksGetOutput,
}));
// Input Schema
export const L2NetworksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l2Networks",
      apiVersion: "2025-09-01",
    }),
  );
export type L2NetworksListByResourceGroupInput =
  typeof L2NetworksListByResourceGroupInput.Type;

// Output Schema
export const L2NetworksListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type L2NetworksListByResourceGroupOutput =
  typeof L2NetworksListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of layer 2 (L2) networks in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const L2NetworksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L2NetworksListByResourceGroupInput,
    outputSchema: L2NetworksListByResourceGroupOutput,
  }));
// Input Schema
export const L2NetworksListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/l2Networks",
      apiVersion: "2025-09-01",
    }),
  );
export type L2NetworksListBySubscriptionInput =
  typeof L2NetworksListBySubscriptionInput.Type;

// Output Schema
export const L2NetworksListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type L2NetworksListBySubscriptionOutput =
  typeof L2NetworksListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of layer 2 (L2) networks in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const L2NetworksListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L2NetworksListBySubscriptionInput,
    outputSchema: L2NetworksListBySubscriptionOutput,
  }));
// Input Schema
export const L2NetworksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l2NetworkName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l2Networks/{l2NetworkName}",
    apiVersion: "2025-09-01",
  }),
);
export type L2NetworksUpdateInput = typeof L2NetworksUpdateInput.Type;

// Output Schema
export const L2NetworksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type L2NetworksUpdateOutput = typeof L2NetworksUpdateOutput.Type;

// The operation
/**
 * Update tags associated with the provided layer 2 (L2) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2NetworkName - The name of the L2 network.
 */
export const L2NetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: L2NetworksUpdateInput,
  outputSchema: L2NetworksUpdateOutput,
}));
// Input Schema
export const L3NetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type L3NetworksCreateOrUpdateInput =
  typeof L3NetworksCreateOrUpdateInput.Type;

// Output Schema
export const L3NetworksCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type L3NetworksCreateOrUpdateOutput =
  typeof L3NetworksCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new layer 3 (L3) network or update the properties of the existing network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3NetworkName - The name of the L3 network.
 */
export const L3NetworksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L3NetworksCreateOrUpdateInput,
    outputSchema: L3NetworksCreateOrUpdateOutput,
  }),
);
// Input Schema
export const L3NetworksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l3NetworkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l3Networks/{l3NetworkName}",
    apiVersion: "2025-09-01",
  }),
);
export type L3NetworksDeleteInput = typeof L3NetworksDeleteInput.Type;

// Output Schema
export const L3NetworksDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type L3NetworksDeleteOutput = typeof L3NetworksDeleteOutput.Type;

// The operation
/**
 * Delete the provided layer 3 (L3) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3NetworkName - The name of the L3 network.
 */
export const L3NetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: L3NetworksDeleteInput,
  outputSchema: L3NetworksDeleteOutput,
}));
// Input Schema
export const L3NetworksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l3NetworkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l3Networks/{l3NetworkName}",
    apiVersion: "2025-09-01",
  }),
);
export type L3NetworksGetInput = typeof L3NetworksGetInput.Type;

// Output Schema
export const L3NetworksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type L3NetworksGetOutput = typeof L3NetworksGetOutput.Type;

// The operation
/**
 * Get properties of the provided layer 3 (L3) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3NetworkName - The name of the L3 network.
 */
export const L3NetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: L3NetworksGetInput,
  outputSchema: L3NetworksGetOutput,
}));
// Input Schema
export const L3NetworksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l3Networks",
      apiVersion: "2025-09-01",
    }),
  );
export type L3NetworksListByResourceGroupInput =
  typeof L3NetworksListByResourceGroupInput.Type;

// Output Schema
export const L3NetworksListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type L3NetworksListByResourceGroupOutput =
  typeof L3NetworksListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of layer 3 (L3) networks in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const L3NetworksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L3NetworksListByResourceGroupInput,
    outputSchema: L3NetworksListByResourceGroupOutput,
  }));
// Input Schema
export const L3NetworksListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/l3Networks",
      apiVersion: "2025-09-01",
    }),
  );
export type L3NetworksListBySubscriptionInput =
  typeof L3NetworksListBySubscriptionInput.Type;

// Output Schema
export const L3NetworksListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type L3NetworksListBySubscriptionOutput =
  typeof L3NetworksListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of layer 3 (L3) networks in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const L3NetworksListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L3NetworksListBySubscriptionInput,
    outputSchema: L3NetworksListBySubscriptionOutput,
  }));
// Input Schema
export const L3NetworksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  l3NetworkName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/l3Networks/{l3NetworkName}",
    apiVersion: "2025-09-01",
  }),
);
export type L3NetworksUpdateInput = typeof L3NetworksUpdateInput.Type;

// Output Schema
export const L3NetworksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type L3NetworksUpdateOutput = typeof L3NetworksUpdateOutput.Type;

// The operation
/**
 * Update tags associated with the provided layer 3 (L3) network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3NetworkName - The name of the L3 network.
 */
export const L3NetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: L3NetworksUpdateInput,
  outputSchema: L3NetworksUpdateOutput,
}));
// Input Schema
export const MetricsConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type MetricsConfigurationsCreateOrUpdateInput =
  typeof MetricsConfigurationsCreateOrUpdateInput.Type;

// Output Schema
export const MetricsConfigurationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type MetricsConfigurationsCreateOrUpdateOutput =
  typeof MetricsConfigurationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create new or update the existing metrics configuration of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param metricsConfigurationName - The name of the metrics configuration for the cluster.
 */
export const MetricsConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MetricsConfigurationsCreateOrUpdateInput,
    outputSchema: MetricsConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export const MetricsConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    metricsConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/metricsConfigurations/{metricsConfigurationName}",
      apiVersion: "2025-09-01",
    }),
  );
export type MetricsConfigurationsDeleteInput =
  typeof MetricsConfigurationsDeleteInput.Type;

// Output Schema
export const MetricsConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MetricsConfigurationsDeleteOutput =
  typeof MetricsConfigurationsDeleteOutput.Type;

// The operation
/**
 * Delete the metrics configuration of the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param metricsConfigurationName - The name of the metrics configuration for the cluster.
 */
export const MetricsConfigurationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricsConfigurationsDeleteInput,
    outputSchema: MetricsConfigurationsDeleteOutput,
  }),
);
// Input Schema
export const MetricsConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    metricsConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/metricsConfigurations/{metricsConfigurationName}",
      apiVersion: "2025-09-01",
    }),
  );
export type MetricsConfigurationsGetInput =
  typeof MetricsConfigurationsGetInput.Type;

// Output Schema
export const MetricsConfigurationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type MetricsConfigurationsGetOutput =
  typeof MetricsConfigurationsGetOutput.Type;

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
export const MetricsConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricsConfigurationsGetInput,
    outputSchema: MetricsConfigurationsGetOutput,
  }),
);
// Input Schema
export const MetricsConfigurationsListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/metricsConfigurations",
      apiVersion: "2025-09-01",
    }),
  );
export type MetricsConfigurationsListByClusterInput =
  typeof MetricsConfigurationsListByClusterInput.Type;

// Output Schema
export const MetricsConfigurationsListByClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type MetricsConfigurationsListByClusterOutput =
  typeof MetricsConfigurationsListByClusterOutput.Type;

// The operation
/**
 * Get a list of metrics configurations for the provided cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 */
export const MetricsConfigurationsListByCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MetricsConfigurationsListByClusterInput,
    outputSchema: MetricsConfigurationsListByClusterOutput,
  }));
// Input Schema
export const MetricsConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type MetricsConfigurationsUpdateInput =
  typeof MetricsConfigurationsUpdateInput.Type;

// Output Schema
export const MetricsConfigurationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type MetricsConfigurationsUpdateOutput =
  typeof MetricsConfigurationsUpdateOutput.Type;

// The operation
/**
 * Patch properties of metrics configuration for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster.
 * @param metricsConfigurationName - The name of the metrics configuration for the cluster.
 */
export const MetricsConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MetricsConfigurationsUpdateInput,
    outputSchema: MetricsConfigurationsUpdateOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.NetworkCloud/operations",
    apiVersion: "2025-09-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const RacksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type RacksCreateOrUpdateInput = typeof RacksCreateOrUpdateInput.Type;

// Output Schema
export const RacksCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RacksCreateOrUpdateOutput = typeof RacksCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new rack or update properties of the existing one. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param rackName - The name of the rack.
 */
export const RacksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RacksCreateOrUpdateInput,
  outputSchema: RacksCreateOrUpdateOutput,
}));
// Input Schema
export const RacksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  rackName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/racks/{rackName}",
    apiVersion: "2025-09-01",
  }),
);
export type RacksDeleteInput = typeof RacksDeleteInput.Type;

// Output Schema
export const RacksDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RacksDeleteOutput = typeof RacksDeleteOutput.Type;

// The operation
/**
 * Delete the provided rack. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param rackName - The name of the rack.
 */
export const RacksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RacksDeleteInput,
  outputSchema: RacksDeleteOutput,
}));
// Input Schema
export const RacksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  rackName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/racks/{rackName}",
    apiVersion: "2025-09-01",
  }),
);
export type RacksGetInput = typeof RacksGetInput.Type;

// Output Schema
export const RacksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type RacksGetOutput = typeof RacksGetOutput.Type;

// The operation
/**
 * Get properties of the provided rack.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param rackName - The name of the rack.
 */
export const RacksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RacksGetInput,
  outputSchema: RacksGetOutput,
}));
// Input Schema
export const RackSkusGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  rackSkuName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/rackSkus/{rackSkuName}",
    apiVersion: "2025-09-01",
  }),
);
export type RackSkusGetInput = typeof RackSkusGetInput.Type;

// Output Schema
export const RackSkusGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type RackSkusGetOutput = typeof RackSkusGetOutput.Type;

// The operation
/**
 * Get the properties of the provided rack SKU.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param rackSkuName - The name of the rack SKU.
 */
export const RackSkusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RackSkusGetInput,
  outputSchema: RackSkusGetOutput,
}));
// Input Schema
export const RackSkusListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/rackSkus",
      apiVersion: "2025-09-01",
    }),
  );
export type RackSkusListBySubscriptionInput =
  typeof RackSkusListBySubscriptionInput.Type;

// Output Schema
export const RackSkusListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RackSkusListBySubscriptionOutput =
  typeof RackSkusListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of rack SKUs in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RackSkusListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RackSkusListBySubscriptionInput,
    outputSchema: RackSkusListBySubscriptionOutput,
  }),
);
// Input Schema
export const RacksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/racks",
      apiVersion: "2025-09-01",
    }),
  );
export type RacksListByResourceGroupInput =
  typeof RacksListByResourceGroupInput.Type;

// Output Schema
export const RacksListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RacksListByResourceGroupOutput =
  typeof RacksListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of racks in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const RacksListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RacksListByResourceGroupInput,
    outputSchema: RacksListByResourceGroupOutput,
  }),
);
// Input Schema
export const RacksListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/racks",
      apiVersion: "2025-09-01",
    }),
  );
export type RacksListBySubscriptionInput =
  typeof RacksListBySubscriptionInput.Type;

// Output Schema
export const RacksListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RacksListBySubscriptionOutput =
  typeof RacksListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of racks in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RacksListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RacksListBySubscriptionInput,
    outputSchema: RacksListBySubscriptionOutput,
  }),
);
// Input Schema
export const RacksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    apiVersion: "2025-09-01",
  }),
);
export type RacksUpdateInput = typeof RacksUpdateInput.Type;

// Output Schema
export const RacksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type RacksUpdateOutput = typeof RacksUpdateOutput.Type;

// The operation
/**
 * Patch properties of the provided rack, or update the tags associated with the rack. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param rackName - The name of the rack.
 */
export const RacksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RacksUpdateInput,
  outputSchema: RacksUpdateOutput,
}));
// Input Schema
export const StorageAppliancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      managementIpv4Address: Schema.optional(Schema.String),
      manufacturer: Schema.optional(Schema.String),
      model: Schema.optional(Schema.String),
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
      apiVersion: "2025-09-01",
    }),
  );
export type StorageAppliancesCreateOrUpdateInput =
  typeof StorageAppliancesCreateOrUpdateInput.Type;

// Output Schema
export const StorageAppliancesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type StorageAppliancesCreateOrUpdateOutput =
  typeof StorageAppliancesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new storage appliance or update the properties of the existing one. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 */
export const StorageAppliancesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesCreateOrUpdateInput,
    outputSchema: StorageAppliancesCreateOrUpdateOutput,
  }));
// Input Schema
export const StorageAppliancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}",
      apiVersion: "2025-09-01",
    }),
  );
export type StorageAppliancesDeleteInput =
  typeof StorageAppliancesDeleteInput.Type;

// Output Schema
export const StorageAppliancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAppliancesDeleteOutput =
  typeof StorageAppliancesDeleteOutput.Type;

// The operation
/**
 * Delete the provided storage appliance. All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 */
export const StorageAppliancesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAppliancesDeleteInput,
    outputSchema: StorageAppliancesDeleteOutput,
  }),
);
// Input Schema
export const StorageAppliancesDisableRemoteVendorManagementInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}/disableRemoteVendorManagement",
      apiVersion: "2025-09-01",
    }),
  );
export type StorageAppliancesDisableRemoteVendorManagementInput =
  typeof StorageAppliancesDisableRemoteVendorManagementInput.Type;

// Output Schema
export const StorageAppliancesDisableRemoteVendorManagementOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAppliancesDisableRemoteVendorManagementOutput =
  typeof StorageAppliancesDisableRemoteVendorManagementOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesDisableRemoteVendorManagementInput,
    outputSchema: StorageAppliancesDisableRemoteVendorManagementOutput,
  }));
// Input Schema
export const StorageAppliancesEnableRemoteVendorManagementInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
    supportEndpoints: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}/enableRemoteVendorManagement",
      apiVersion: "2025-09-01",
    }),
  );
export type StorageAppliancesEnableRemoteVendorManagementInput =
  typeof StorageAppliancesEnableRemoteVendorManagementInput.Type;

// Output Schema
export const StorageAppliancesEnableRemoteVendorManagementOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAppliancesEnableRemoteVendorManagementOutput =
  typeof StorageAppliancesEnableRemoteVendorManagementOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesEnableRemoteVendorManagementInput,
    outputSchema: StorageAppliancesEnableRemoteVendorManagementOutput,
  }));
// Input Schema
export const StorageAppliancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    storageApplianceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances/{storageApplianceName}",
      apiVersion: "2025-09-01",
    }),
  );
export type StorageAppliancesGetInput = typeof StorageAppliancesGetInput.Type;

// Output Schema
export const StorageAppliancesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type StorageAppliancesGetOutput = typeof StorageAppliancesGetOutput.Type;

// The operation
/**
 * Get properties of the provided storage appliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 */
export const StorageAppliancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAppliancesGetInput,
    outputSchema: StorageAppliancesGetOutput,
  }),
);
// Input Schema
export const StorageAppliancesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/storageAppliances",
      apiVersion: "2025-09-01",
    }),
  );
export type StorageAppliancesListByResourceGroupInput =
  typeof StorageAppliancesListByResourceGroupInput.Type;

// Output Schema
export const StorageAppliancesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type StorageAppliancesListByResourceGroupOutput =
  typeof StorageAppliancesListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of storage appliances in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const StorageAppliancesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesListByResourceGroupInput,
    outputSchema: StorageAppliancesListByResourceGroupOutput,
  }));
// Input Schema
export const StorageAppliancesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/storageAppliances",
      apiVersion: "2025-09-01",
    }),
  );
export type StorageAppliancesListBySubscriptionInput =
  typeof StorageAppliancesListBySubscriptionInput.Type;

// Output Schema
export const StorageAppliancesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type StorageAppliancesListBySubscriptionOutput =
  typeof StorageAppliancesListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of storage appliances in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const StorageAppliancesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesListBySubscriptionInput,
    outputSchema: StorageAppliancesListBySubscriptionOutput,
  }));
// Input Schema
export const StorageAppliancesRunReadCommandsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type StorageAppliancesRunReadCommandsInput =
  typeof StorageAppliancesRunReadCommandsInput.Type;

// Output Schema
export const StorageAppliancesRunReadCommandsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StorageAppliancesRunReadCommandsOutput =
  typeof StorageAppliancesRunReadCommandsOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StorageAppliancesRunReadCommandsInput,
    outputSchema: StorageAppliancesRunReadCommandsOutput,
  }));
// Input Schema
export const StorageAppliancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type StorageAppliancesUpdateInput =
  typeof StorageAppliancesUpdateInput.Type;

// Output Schema
export const StorageAppliancesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type StorageAppliancesUpdateOutput =
  typeof StorageAppliancesUpdateOutput.Type;

// The operation
/**
 * Update properties of the provided storage appliance, or update tags associated with the storage appliance Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param storageApplianceName - The name of the storage appliance.
 */
export const StorageAppliancesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageAppliancesUpdateInput,
    outputSchema: StorageAppliancesUpdateOutput,
  }),
);
// Input Schema
export const TrunkedNetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type TrunkedNetworksCreateOrUpdateInput =
  typeof TrunkedNetworksCreateOrUpdateInput.Type;

// Output Schema
export const TrunkedNetworksCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type TrunkedNetworksCreateOrUpdateOutput =
  typeof TrunkedNetworksCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new trunked network or update the properties of the existing trunked network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trunkedNetworkName - The name of the trunked network.
 */
export const TrunkedNetworksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrunkedNetworksCreateOrUpdateInput,
    outputSchema: TrunkedNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export const TrunkedNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trunkedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/trunkedNetworks/{trunkedNetworkName}",
      apiVersion: "2025-09-01",
    }),
  );
export type TrunkedNetworksDeleteInput = typeof TrunkedNetworksDeleteInput.Type;

// Output Schema
export const TrunkedNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TrunkedNetworksDeleteOutput =
  typeof TrunkedNetworksDeleteOutput.Type;

// The operation
/**
 * Delete the provided trunked network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trunkedNetworkName - The name of the trunked network.
 */
export const TrunkedNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TrunkedNetworksDeleteInput,
    outputSchema: TrunkedNetworksDeleteOutput,
  }),
);
// Input Schema
export const TrunkedNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trunkedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/trunkedNetworks/{trunkedNetworkName}",
      apiVersion: "2025-09-01",
    }),
  );
export type TrunkedNetworksGetInput = typeof TrunkedNetworksGetInput.Type;

// Output Schema
export const TrunkedNetworksGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type TrunkedNetworksGetOutput = typeof TrunkedNetworksGetOutput.Type;

// The operation
/**
 * Get properties of the provided trunked network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trunkedNetworkName - The name of the trunked network.
 */
export const TrunkedNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TrunkedNetworksGetInput,
  outputSchema: TrunkedNetworksGetOutput,
}));
// Input Schema
export const TrunkedNetworksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/trunkedNetworks",
      apiVersion: "2025-09-01",
    }),
  );
export type TrunkedNetworksListByResourceGroupInput =
  typeof TrunkedNetworksListByResourceGroupInput.Type;

// Output Schema
export const TrunkedNetworksListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type TrunkedNetworksListByResourceGroupOutput =
  typeof TrunkedNetworksListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of trunked networks in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const TrunkedNetworksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrunkedNetworksListByResourceGroupInput,
    outputSchema: TrunkedNetworksListByResourceGroupOutput,
  }));
// Input Schema
export const TrunkedNetworksListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/trunkedNetworks",
      apiVersion: "2025-09-01",
    }),
  );
export type TrunkedNetworksListBySubscriptionInput =
  typeof TrunkedNetworksListBySubscriptionInput.Type;

// Output Schema
export const TrunkedNetworksListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type TrunkedNetworksListBySubscriptionOutput =
  typeof TrunkedNetworksListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of trunked networks in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const TrunkedNetworksListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrunkedNetworksListBySubscriptionInput,
    outputSchema: TrunkedNetworksListBySubscriptionOutput,
  }));
// Input Schema
export const TrunkedNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trunkedNetworkName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/trunkedNetworks/{trunkedNetworkName}",
      apiVersion: "2025-09-01",
    }),
  );
export type TrunkedNetworksUpdateInput = typeof TrunkedNetworksUpdateInput.Type;

// Output Schema
export const TrunkedNetworksUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type TrunkedNetworksUpdateOutput =
  typeof TrunkedNetworksUpdateOutput.Type;

// The operation
/**
 * Update tags associated with the provided trunked network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trunkedNetworkName - The name of the trunked network.
 */
export const TrunkedNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TrunkedNetworksUpdateInput,
    outputSchema: TrunkedNetworksUpdateOutput,
  }),
);
// Input Schema
export const VirtualMachinesAssignRelayInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    machineId: Schema.String,
    relayType: Schema.optional(Schema.Literals(["Platform", "Public"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/assignRelay",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesAssignRelayInput =
  typeof VirtualMachinesAssignRelayInput.Type;

// Output Schema
export const VirtualMachinesAssignRelayOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesAssignRelayOutput =
  typeof VirtualMachinesAssignRelayOutput.Type;

// The operation
/**
 * Assigns a relay to the specified Microsoft.HybridCompute machine associated with the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesAssignRelay = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesAssignRelayInput,
    outputSchema: VirtualMachinesAssignRelayOutput,
  }),
);
// Input Schema
export const VirtualMachinesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesCreateOrUpdateInput =
  typeof VirtualMachinesCreateOrUpdateInput.Type;

// Output Schema
export const VirtualMachinesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachinesCreateOrUpdateOutput =
  typeof VirtualMachinesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new virtual machine or update the properties of the existing virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesCreateOrUpdateInput,
    outputSchema: VirtualMachinesCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachinesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesDeleteInput = typeof VirtualMachinesDeleteInput.Type;

// Output Schema
export const VirtualMachinesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesDeleteOutput =
  typeof VirtualMachinesDeleteOutput.Type;

// The operation
/**
 * Delete the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesDeleteInput,
    outputSchema: VirtualMachinesDeleteOutput,
  }),
);
// Input Schema
export const VirtualMachinesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesGetInput = typeof VirtualMachinesGetInput.Type;

// Output Schema
export const VirtualMachinesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachinesGetOutput = typeof VirtualMachinesGetOutput.Type;

// The operation
/**
 * Get properties of the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesGetInput,
  outputSchema: VirtualMachinesGetOutput,
}));
// Input Schema
export const VirtualMachinesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesListByResourceGroupInput =
  typeof VirtualMachinesListByResourceGroupInput.Type;

// Output Schema
export const VirtualMachinesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachinesListByResourceGroupOutput =
  typeof VirtualMachinesListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of virtual machines in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachinesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesListByResourceGroupInput,
    outputSchema: VirtualMachinesListByResourceGroupOutput,
  }));
// Input Schema
export const VirtualMachinesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/virtualMachines",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesListBySubscriptionInput =
  typeof VirtualMachinesListBySubscriptionInput.Type;

// Output Schema
export const VirtualMachinesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachinesListBySubscriptionOutput =
  typeof VirtualMachinesListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of virtual machines in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const VirtualMachinesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesListBySubscriptionInput,
    outputSchema: VirtualMachinesListBySubscriptionOutput,
  }));
// Input Schema
export const VirtualMachinesPowerOffInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    skipShutdown: Schema.optional(Schema.Literals(["True", "False"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/powerOff",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesPowerOffInput =
  typeof VirtualMachinesPowerOffInput.Type;

// Output Schema
export const VirtualMachinesPowerOffOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesPowerOffOutput =
  typeof VirtualMachinesPowerOffOutput.Type;

// The operation
/**
 * Power off the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesPowerOff = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesPowerOffInput,
    outputSchema: VirtualMachinesPowerOffOutput,
  }),
);
// Input Schema
export const VirtualMachinesReimageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/reimage",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesReimageInput =
  typeof VirtualMachinesReimageInput.Type;

// Output Schema
export const VirtualMachinesReimageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesReimageOutput =
  typeof VirtualMachinesReimageOutput.Type;

// The operation
/**
 * Reimage the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesReimage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesReimageInput,
    outputSchema: VirtualMachinesReimageOutput,
  }),
);
// Input Schema
export const VirtualMachinesRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/restart",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesRestartInput =
  typeof VirtualMachinesRestartInput.Type;

// Output Schema
export const VirtualMachinesRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesRestartOutput =
  typeof VirtualMachinesRestartOutput.Type;

// The operation
/**
 * Restart the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesRestartInput,
    outputSchema: VirtualMachinesRestartOutput,
  }),
);
// Input Schema
export const VirtualMachinesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}/start",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesStartInput = typeof VirtualMachinesStartInput.Type;

// Output Schema
export const VirtualMachinesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesStartOutput = typeof VirtualMachinesStartOutput.Type;

// The operation
/**
 * Start the provided virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesStartInput,
    outputSchema: VirtualMachinesStartOutput,
  }),
);
// Input Schema
export const VirtualMachinesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
            password: SensitiveString,
            registryUrl: Schema.String,
            username: Schema.String,
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/virtualMachines/{virtualMachineName}",
      apiVersion: "2025-09-01",
    }),
  );
export type VirtualMachinesUpdateInput = typeof VirtualMachinesUpdateInput.Type;

// Output Schema
export const VirtualMachinesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VirtualMachinesUpdateOutput =
  typeof VirtualMachinesUpdateOutput.Type;

// The operation
/**
 * Patch the properties of the provided virtual machine, or update the tags associated with the virtual machine. Properties and tag updates can be done independently.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineName - The name of the virtual machine.
 */
export const VirtualMachinesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesUpdateInput,
    outputSchema: VirtualMachinesUpdateOutput,
  }),
);
// Input Schema
export const VolumesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      sizeMiB: Schema.Number,
      storageApplianceId: Schema.optional(Schema.String),
      allocatedSizeMiB: Schema.optional(Schema.Number),
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
      apiVersion: "2025-09-01",
    }),
  );
export type VolumesCreateOrUpdateInput = typeof VolumesCreateOrUpdateInput.Type;

// Output Schema
export const VolumesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VolumesCreateOrUpdateOutput =
  typeof VolumesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new volume or update the properties of the existing one.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param volumeName - The name of the volume.
 */
export const VolumesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesCreateOrUpdateInput,
    outputSchema: VolumesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const VolumesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
);
export type VolumesDeleteInput = typeof VolumesDeleteInput.Type;

// Output Schema
export const VolumesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VolumesDeleteOutput = typeof VolumesDeleteOutput.Type;

// The operation
/**
 * Delete the provided volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param volumeName - The name of the volume.
 */
export const VolumesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesDeleteInput,
  outputSchema: VolumesDeleteOutput,
}));
// Input Schema
export const VolumesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
);
export type VolumesGetInput = typeof VolumesGetInput.Type;

// Output Schema
export const VolumesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type VolumesGetOutput = typeof VolumesGetOutput.Type;

// The operation
/**
 * Get properties of the provided volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param volumeName - The name of the volume.
 */
export const VolumesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesGetInput,
  outputSchema: VolumesGetOutput,
}));
// Input Schema
export const VolumesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/volumes",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumesListByResourceGroupInput =
  typeof VolumesListByResourceGroupInput.Type;

// Output Schema
export const VolumesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VolumesListByResourceGroupOutput =
  typeof VolumesListByResourceGroupOutput.Type;

// The operation
/**
 * Get a list of volumes in the provided resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VolumesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesListByResourceGroupInput,
    outputSchema: VolumesListByResourceGroupOutput,
  }),
);
// Input Schema
export const VolumesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkCloud/volumes",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumesListBySubscriptionInput =
  typeof VolumesListBySubscriptionInput.Type;

// Output Schema
export const VolumesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VolumesListBySubscriptionOutput =
  typeof VolumesListBySubscriptionOutput.Type;

// The operation
/**
 * Get a list of volumes in the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const VolumesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesListBySubscriptionInput,
    outputSchema: VolumesListBySubscriptionOutput,
  }),
);
// Input Schema
export const VolumesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
);
export type VolumesUpdateInput = typeof VolumesUpdateInput.Type;

// Output Schema
export const VolumesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type VolumesUpdateOutput = typeof VolumesUpdateOutput.Type;

// The operation
/**
 * Update tags associated with the provided volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param volumeName - The name of the volume.
 */
export const VolumesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesUpdateInput,
  outputSchema: VolumesUpdateOutput,
}));
