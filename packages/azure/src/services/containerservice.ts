/**
 * Azure Containerservice API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const AgentPoolsAbortLatestOperationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    agentPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}/abort",
      apiVersion: "2026-01-01",
    }),
  );
export type AgentPoolsAbortLatestOperationInput =
  typeof AgentPoolsAbortLatestOperationInput.Type;

// Output Schema
export const AgentPoolsAbortLatestOperationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentPoolsAbortLatestOperationOutput =
  typeof AgentPoolsAbortLatestOperationOutput.Type;

// The operation
/**
 * Aborts last operation running on agent pool.
 *
 * Aborts the currently running operation on the agent pool. The Agent Pool will be moved to a Canceling state and eventually to a Canceled state when cancellation finishes. If the operation completes before cancellation can take place, a 409 error code is returned.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param agentPoolName - The name of the agent pool.
 */
export const AgentPoolsAbortLatestOperation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentPoolsAbortLatestOperationInput,
    outputSchema: AgentPoolsAbortLatestOperationOutput,
  }));
// Input Schema
export const AgentPoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    agentPoolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        eTag: Schema.optional(Schema.String),
        count: Schema.optional(Schema.Number),
        vmSize: Schema.optional(Schema.String),
        osDiskSizeGB: Schema.optional(Schema.Number),
        osDiskType: Schema.optional(Schema.Literals(["Managed", "Ephemeral"])),
        kubeletDiskType: Schema.optional(Schema.Literals(["OS", "Temporary"])),
        workloadRuntime: Schema.optional(
          Schema.Literals(["OCIContainer", "WasmWasi", "KataVmIsolation"]),
        ),
        messageOfTheDay: Schema.optional(Schema.String),
        vnetSubnetID: Schema.optional(Schema.String),
        podSubnetID: Schema.optional(Schema.String),
        podIPAllocationMode: Schema.optional(
          Schema.Literals(["DynamicIndividual", "StaticBlock"]),
        ),
        maxPods: Schema.optional(Schema.Number),
        osType: Schema.optional(Schema.Literals(["Linux", "Windows"])),
        osSKU: Schema.optional(
          Schema.Literals([
            "Ubuntu",
            "AzureLinux",
            "AzureLinux3",
            "CBLMariner",
            "Windows2019",
            "Windows2022",
            "Ubuntu2204",
            "Ubuntu2404",
          ]),
        ),
        maxCount: Schema.optional(Schema.Number),
        minCount: Schema.optional(Schema.Number),
        enableAutoScaling: Schema.optional(Schema.Boolean),
        scaleDownMode: Schema.optional(
          Schema.Literals(["Delete", "Deallocate"]),
        ),
        type: Schema.optional(
          Schema.Literals([
            "VirtualMachineScaleSets",
            "AvailabilitySet",
            "VirtualMachines",
          ]),
        ),
        mode: Schema.optional(Schema.Literals(["System", "User", "Gateway"])),
        orchestratorVersion: Schema.optional(Schema.String),
        currentOrchestratorVersion: Schema.optional(Schema.String),
        nodeImageVersion: Schema.optional(Schema.String),
        upgradeSettings: Schema.optional(
          Schema.Struct({
            maxSurge: Schema.optional(Schema.String),
            maxUnavailable: Schema.optional(Schema.String),
            drainTimeoutInMinutes: Schema.optional(Schema.Number),
            nodeSoakDurationInMinutes: Schema.optional(Schema.Number),
            undrainableNodeBehavior: Schema.optional(
              Schema.Literals(["Cordon", "Schedule"]),
            ),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
        powerState: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.Literals(["Running", "Stopped"])),
          }),
        ),
        availabilityZones: Schema.optional(Schema.Array(Schema.String)),
        enableNodePublicIP: Schema.optional(Schema.Boolean),
        nodePublicIPPrefixID: Schema.optional(Schema.String),
        scaleSetPriority: Schema.optional(Schema.Literals(["Spot", "Regular"])),
        scaleSetEvictionPolicy: Schema.optional(
          Schema.Literals(["Delete", "Deallocate"]),
        ),
        spotMaxPrice: Schema.optional(Schema.Number),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        nodeLabels: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        nodeTaints: Schema.optional(Schema.Array(Schema.String)),
        proximityPlacementGroupID: Schema.optional(Schema.String),
        kubeletConfig: Schema.optional(
          Schema.Struct({
            cpuManagerPolicy: Schema.optional(Schema.String),
            cpuCfsQuota: Schema.optional(Schema.Boolean),
            cpuCfsQuotaPeriod: Schema.optional(Schema.String),
            imageGcHighThreshold: Schema.optional(Schema.Number),
            imageGcLowThreshold: Schema.optional(Schema.Number),
            topologyManagerPolicy: Schema.optional(Schema.String),
            allowedUnsafeSysctls: Schema.optional(Schema.Array(Schema.String)),
            failSwapOn: Schema.optional(Schema.Boolean),
            containerLogMaxSizeMB: Schema.optional(Schema.Number),
            containerLogMaxFiles: Schema.optional(Schema.Number),
            podMaxPids: Schema.optional(Schema.Number),
          }),
        ),
        linuxOSConfig: Schema.optional(
          Schema.Struct({
            sysctls: Schema.optional(
              Schema.Struct({
                netCoreSomaxconn: Schema.optional(Schema.Number),
                netCoreNetdevMaxBacklog: Schema.optional(Schema.Number),
                netCoreRmemDefault: Schema.optional(Schema.Number),
                netCoreRmemMax: Schema.optional(Schema.Number),
                netCoreWmemDefault: Schema.optional(Schema.Number),
                netCoreWmemMax: Schema.optional(Schema.Number),
                netCoreOptmemMax: Schema.optional(Schema.Number),
                netIpv4TcpMaxSynBacklog: Schema.optional(Schema.Number),
                netIpv4TcpMaxTwBuckets: Schema.optional(Schema.Number),
                netIpv4TcpFinTimeout: Schema.optional(Schema.Number),
                netIpv4TcpKeepaliveTime: Schema.optional(Schema.Number),
                netIpv4TcpKeepaliveProbes: Schema.optional(Schema.Number),
                netIpv4TcpkeepaliveIntvl: Schema.optional(Schema.Number),
                netIpv4TcpTwReuse: Schema.optional(Schema.Boolean),
                netIpv4IpLocalPortRange: Schema.optional(Schema.String),
                netIpv4NeighDefaultGcThresh1: Schema.optional(Schema.Number),
                netIpv4NeighDefaultGcThresh2: Schema.optional(Schema.Number),
                netIpv4NeighDefaultGcThresh3: Schema.optional(Schema.Number),
                netNetfilterNfConntrackMax: Schema.optional(Schema.Number),
                netNetfilterNfConntrackBuckets: Schema.optional(Schema.Number),
                fsInotifyMaxUserWatches: Schema.optional(Schema.Number),
                fsFileMax: Schema.optional(Schema.Number),
                fsAioMaxNr: Schema.optional(Schema.Number),
                fsNrOpen: Schema.optional(Schema.Number),
                kernelThreadsMax: Schema.optional(Schema.Number),
                vmMaxMapCount: Schema.optional(Schema.Number),
                vmSwappiness: Schema.optional(Schema.Number),
                vmVfsCachePressure: Schema.optional(Schema.Number),
              }),
            ),
            transparentHugePageEnabled: Schema.optional(Schema.String),
            transparentHugePageDefrag: Schema.optional(Schema.String),
            swapFileSizeMB: Schema.optional(Schema.Number),
          }),
        ),
        enableEncryptionAtHost: Schema.optional(Schema.Boolean),
        enableUltraSSD: Schema.optional(Schema.Boolean),
        enableFIPS: Schema.optional(Schema.Boolean),
        gpuInstanceProfile: Schema.optional(
          Schema.Literals(["MIG1g", "MIG2g", "MIG3g", "MIG4g", "MIG7g"]),
        ),
        creationData: Schema.optional(
          Schema.Struct({
            sourceResourceId: Schema.optional(Schema.String),
          }),
        ),
        capacityReservationGroupID: Schema.optional(Schema.String),
        hostGroupID: Schema.optional(Schema.String),
        networkProfile: Schema.optional(
          Schema.Struct({
            nodePublicIPTags: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ipTagType: Schema.optional(Schema.String),
                  tag: Schema.optional(Schema.String),
                }),
              ),
            ),
            allowedHostPorts: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  portStart: Schema.optional(Schema.Number),
                  portEnd: Schema.optional(Schema.Number),
                  protocol: Schema.optional(Schema.Literals(["TCP", "UDP"])),
                }),
              ),
            ),
            applicationSecurityGroups: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
        windowsProfile: Schema.optional(
          Schema.Struct({
            disableOutboundNat: Schema.optional(Schema.Boolean),
          }),
        ),
        securityProfile: Schema.optional(
          Schema.Struct({
            enableVTPM: Schema.optional(Schema.Boolean),
            enableSecureBoot: Schema.optional(Schema.Boolean),
            sshAccess: Schema.optional(
              Schema.Literals(["LocalUser", "Disabled"]),
            ),
          }),
        ),
        gpuProfile: Schema.optional(
          Schema.Struct({
            driver: Schema.optional(Schema.Literals(["Install", "None"])),
          }),
        ),
        gatewayProfile: Schema.optional(
          Schema.Struct({
            publicIPPrefixSize: Schema.optional(Schema.Number),
          }),
        ),
        virtualMachinesProfile: Schema.optional(
          Schema.Struct({
            scale: Schema.optional(
              Schema.Struct({
                manual: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      size: Schema.optional(Schema.String),
                      count: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        virtualMachineNodesStatus: Schema.optional(
          Schema.Array(
            Schema.Struct({
              size: Schema.optional(Schema.String),
              count: Schema.optional(Schema.Number),
            }),
          ),
        ),
        status: Schema.optional(
          Schema.Struct({
            provisioningError: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(Schema.Array(Schema.Unknown)),
                      additionalInfo: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            type: Schema.optional(Schema.String),
                            info: Schema.optional(Schema.Unknown),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                additionalInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(Schema.String),
                      info: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        localDNSProfile: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(
              Schema.Literals(["Preferred", "Required", "Disabled"]),
            ),
            state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            vnetDNSOverrides: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  queryLogging: Schema.optional(
                    Schema.Literals(["Error", "Log"]),
                  ),
                  protocol: Schema.optional(
                    Schema.Literals(["PreferUDP", "ForceTCP"]),
                  ),
                  forwardDestination: Schema.optional(
                    Schema.Literals(["ClusterCoreDNS", "VnetDNS"]),
                  ),
                  forwardPolicy: Schema.optional(
                    Schema.Literals(["Sequential", "RoundRobin", "Random"]),
                  ),
                  maxConcurrent: Schema.optional(Schema.Number),
                  cacheDurationInSeconds: Schema.optional(Schema.Number),
                  serveStaleDurationInSeconds: Schema.optional(Schema.Number),
                  serveStale: Schema.optional(
                    Schema.Literals(["Verify", "Immediate", "Disable"]),
                  ),
                }),
              ),
            ),
            kubeDNSOverrides: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  queryLogging: Schema.optional(
                    Schema.Literals(["Error", "Log"]),
                  ),
                  protocol: Schema.optional(
                    Schema.Literals(["PreferUDP", "ForceTCP"]),
                  ),
                  forwardDestination: Schema.optional(
                    Schema.Literals(["ClusterCoreDNS", "VnetDNS"]),
                  ),
                  forwardPolicy: Schema.optional(
                    Schema.Literals(["Sequential", "RoundRobin", "Random"]),
                  ),
                  maxConcurrent: Schema.optional(Schema.Number),
                  cacheDurationInSeconds: Schema.optional(Schema.Number),
                  serveStaleDurationInSeconds: Schema.optional(Schema.Number),
                  serveStale: Schema.optional(
                    Schema.Literals(["Verify", "Immediate", "Disable"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}",
      apiVersion: "2026-01-01",
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
 * Creates or updates an agent pool in the specified managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param agentPoolName - The name of the agent pool.
 * @param if-match - The request should only proceed if an entity matches this string.
 * @param if-none-match - The request should only proceed if no entity matches this string.
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
  resourceName: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
  "ignore-pod-disruption-budget": Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}",
    apiVersion: "2026-01-01",
  }),
);
export type AgentPoolsDeleteInput = typeof AgentPoolsDeleteInput.Type;

// Output Schema
export const AgentPoolsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentPoolsDeleteOutput = typeof AgentPoolsDeleteOutput.Type;

// The operation
/**
 * Deletes an agent pool in the specified managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param agentPoolName - The name of the agent pool.
 * @param ignore-pod-disruption-budget - ignore-pod-disruption-budget=true to delete those pods on a node without considering Pod Disruption Budget
 * @param if-match - The request should only proceed if an entity matches this string.
 */
export const AgentPoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolsDeleteInput,
  outputSchema: AgentPoolsDeleteOutput,
}));
// Input Schema
export const AgentPoolsDeleteMachinesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    agentPoolName: Schema.String.pipe(T.PathParam()),
    machineNames: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}/deleteMachines",
      apiVersion: "2026-01-01",
    }),
  );
export type AgentPoolsDeleteMachinesInput =
  typeof AgentPoolsDeleteMachinesInput.Type;

// Output Schema
export const AgentPoolsDeleteMachinesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentPoolsDeleteMachinesOutput =
  typeof AgentPoolsDeleteMachinesOutput.Type;

// The operation
/**
 * Deletes specific machines in an agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param agentPoolName - The name of the agent pool.
 */
export const AgentPoolsDeleteMachines = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentPoolsDeleteMachinesInput,
    outputSchema: AgentPoolsDeleteMachinesOutput,
  }),
);
// Input Schema
export const AgentPoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}",
    apiVersion: "2026-01-01",
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
 * Gets the specified managed cluster agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param agentPoolName - The name of the agent pool.
 */
export const AgentPoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolsGetInput,
  outputSchema: AgentPoolsGetOutput,
}));
// Input Schema
export const AgentPoolsGetAvailableAgentPoolVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/availableAgentPoolVersions",
      apiVersion: "2026-01-01",
    }),
  );
export type AgentPoolsGetAvailableAgentPoolVersionsInput =
  typeof AgentPoolsGetAvailableAgentPoolVersionsInput.Type;

// Output Schema
export const AgentPoolsGetAvailableAgentPoolVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.Struct({
      agentPoolVersions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            default: Schema.optional(Schema.Boolean),
            kubernetesVersion: Schema.optional(Schema.String),
            isPreview: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
    }),
  });
export type AgentPoolsGetAvailableAgentPoolVersionsOutput =
  typeof AgentPoolsGetAvailableAgentPoolVersionsOutput.Type;

// The operation
/**
 * Gets a list of supported Kubernetes versions for the specified agent pool.
 *
 * See [supported Kubernetes versions](https://docs.microsoft.com/azure/aks/supported-kubernetes-versions) for more details about the version lifecycle.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const AgentPoolsGetAvailableAgentPoolVersions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentPoolsGetAvailableAgentPoolVersionsInput,
    outputSchema: AgentPoolsGetAvailableAgentPoolVersionsOutput,
  }));
// Input Schema
export const AgentPoolsGetUpgradeProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    agentPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}/upgradeProfiles/default",
      apiVersion: "2026-01-01",
    }),
  );
export type AgentPoolsGetUpgradeProfileInput =
  typeof AgentPoolsGetUpgradeProfileInput.Type;

// Output Schema
export const AgentPoolsGetUpgradeProfileOutput =
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
export type AgentPoolsGetUpgradeProfileOutput =
  typeof AgentPoolsGetUpgradeProfileOutput.Type;

// The operation
/**
 * Gets the upgrade profile for an agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param agentPoolName - The name of the agent pool.
 */
export const AgentPoolsGetUpgradeProfile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentPoolsGetUpgradeProfileInput,
    outputSchema: AgentPoolsGetUpgradeProfileOutput,
  }),
);
// Input Schema
export const AgentPoolsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools",
    apiVersion: "2026-01-01",
  }),
);
export type AgentPoolsListInput = typeof AgentPoolsListInput.Type;

// Output Schema
export const AgentPoolsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type AgentPoolsListOutput = typeof AgentPoolsListOutput.Type;

// The operation
/**
 * Gets a list of agent pools in the specified managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const AgentPoolsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolsListInput,
  outputSchema: AgentPoolsListOutput,
}));
// Input Schema
export const AgentPoolsUpgradeNodeImageVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    agentPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}/upgradeNodeImageVersion",
      apiVersion: "2026-01-01",
    }),
  );
export type AgentPoolsUpgradeNodeImageVersionInput =
  typeof AgentPoolsUpgradeNodeImageVersionInput.Type;

// Output Schema
export const AgentPoolsUpgradeNodeImageVersionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentPoolsUpgradeNodeImageVersionOutput =
  typeof AgentPoolsUpgradeNodeImageVersionOutput.Type;

// The operation
/**
 * Upgrades the node image version of an agent pool to the latest.
 *
 * Upgrading the node image version of an agent pool applies the newest OS and runtime updates to the nodes. AKS provides one new image per week with the latest updates. For more details on node image versions, see: https://docs.microsoft.com/azure/aks/node-image-upgrade
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param agentPoolName - The name of the agent pool.
 */
export const AgentPoolsUpgradeNodeImageVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentPoolsUpgradeNodeImageVersionInput,
    outputSchema: AgentPoolsUpgradeNodeImageVersionOutput,
  }));
// Input Schema
export const AutoUpgradeProfileOperationsGenerateUpdateRunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    autoUpgradeProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/autoUpgradeProfiles/{autoUpgradeProfileName}/generateUpdateRun",
      apiVersion: "2025-03-01",
    }),
  );
export type AutoUpgradeProfileOperationsGenerateUpdateRunInput =
  typeof AutoUpgradeProfileOperationsGenerateUpdateRunInput.Type;

// Output Schema
export const AutoUpgradeProfileOperationsGenerateUpdateRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type AutoUpgradeProfileOperationsGenerateUpdateRunOutput =
  typeof AutoUpgradeProfileOperationsGenerateUpdateRunOutput.Type;

// The operation
/**
 * Generates an update run for a given auto upgrade profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 * @param autoUpgradeProfileName - The name of the AutoUpgradeProfile resource.
 */
export const AutoUpgradeProfileOperationsGenerateUpdateRun =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AutoUpgradeProfileOperationsGenerateUpdateRunInput,
    outputSchema: AutoUpgradeProfileOperationsGenerateUpdateRunOutput,
  }));
// Input Schema
export const AutoUpgradeProfilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    autoUpgradeProfileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        updateStrategyId: Schema.optional(Schema.String),
        channel: Schema.Literals(["Stable", "Rapid", "NodeImage"]),
        nodeImageSelection: Schema.optional(
          Schema.Struct({
            type: Schema.Literals(["Latest", "Consistent"]),
          }),
        ),
        disabled: Schema.optional(Schema.Boolean),
        autoUpgradeProfileStatus: Schema.optional(
          Schema.Struct({
            lastTriggeredAt: Schema.optional(Schema.String),
            lastTriggerStatus: Schema.optional(
              Schema.Literals(["Succeeded", "Failed"]),
            ),
            lastTriggerError: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(Schema.Array(Schema.Unknown)),
                      additionalInfo: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            type: Schema.optional(Schema.String),
                            info: Schema.optional(Schema.Unknown),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                additionalInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(Schema.String),
                      info: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
              }),
            ),
            lastTriggerUpgradeVersions: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/autoUpgradeProfiles/{autoUpgradeProfileName}",
      apiVersion: "2025-03-01",
    }),
  );
export type AutoUpgradeProfilesCreateOrUpdateInput =
  typeof AutoUpgradeProfilesCreateOrUpdateInput.Type;

// Output Schema
export const AutoUpgradeProfilesCreateOrUpdateOutput =
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
export type AutoUpgradeProfilesCreateOrUpdateOutput =
  typeof AutoUpgradeProfilesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a AutoUpgradeProfile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param If-None-Match - The request should only proceed if no entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param autoUpgradeProfileName - The name of the AutoUpgradeProfile resource.
 */
export const AutoUpgradeProfilesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AutoUpgradeProfilesCreateOrUpdateInput,
    outputSchema: AutoUpgradeProfilesCreateOrUpdateOutput,
  }));
// Input Schema
export const AutoUpgradeProfilesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    autoUpgradeProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/autoUpgradeProfiles/{autoUpgradeProfileName}",
      apiVersion: "2025-03-01",
    }),
  );
export type AutoUpgradeProfilesDeleteInput =
  typeof AutoUpgradeProfilesDeleteInput.Type;

// Output Schema
export const AutoUpgradeProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AutoUpgradeProfilesDeleteOutput =
  typeof AutoUpgradeProfilesDeleteOutput.Type;

// The operation
/**
 * Delete a AutoUpgradeProfile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param autoUpgradeProfileName - The name of the AutoUpgradeProfile resource.
 */
export const AutoUpgradeProfilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AutoUpgradeProfilesDeleteInput,
    outputSchema: AutoUpgradeProfilesDeleteOutput,
  }),
);
// Input Schema
export const AutoUpgradeProfilesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    autoUpgradeProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/autoUpgradeProfiles/{autoUpgradeProfileName}",
      apiVersion: "2025-03-01",
    }),
  );
export type AutoUpgradeProfilesGetInput =
  typeof AutoUpgradeProfilesGetInput.Type;

// Output Schema
export const AutoUpgradeProfilesGetOutput =
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
export type AutoUpgradeProfilesGetOutput =
  typeof AutoUpgradeProfilesGetOutput.Type;

// The operation
/**
 * Get a AutoUpgradeProfile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 * @param autoUpgradeProfileName - The name of the AutoUpgradeProfile resource.
 */
export const AutoUpgradeProfilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AutoUpgradeProfilesGetInput,
    outputSchema: AutoUpgradeProfilesGetOutput,
  }),
);
// Input Schema
export const AutoUpgradeProfilesListByFleetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/autoUpgradeProfiles",
      apiVersion: "2025-03-01",
    }),
  );
export type AutoUpgradeProfilesListByFleetInput =
  typeof AutoUpgradeProfilesListByFleetInput.Type;

// Output Schema
export const AutoUpgradeProfilesListByFleetOutput =
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
export type AutoUpgradeProfilesListByFleetOutput =
  typeof AutoUpgradeProfilesListByFleetOutput.Type;

// The operation
/**
 * List AutoUpgradeProfile resources by Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 */
export const AutoUpgradeProfilesListByFleet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AutoUpgradeProfilesListByFleetInput,
    outputSchema: AutoUpgradeProfilesListByFleetOutput,
  }));
// Input Schema
export const DeploymentSafeguardsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Creating",
            "Updating",
            "Deleting",
          ]),
        ),
        level: Schema.Literals(["Warn", "Enforce"]),
        excludedNamespaces: Schema.optional(Schema.Array(Schema.String)),
        systemExcludedNamespaces: Schema.Array(Schema.String),
        podSecurityStandardsLevel: Schema.optional(
          Schema.Literals(["Privileged", "Baseline", "Restricted"]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.ContainerService/deploymentSafeguards/default",
      apiVersion: "2025-07-01",
    }),
  );
export type DeploymentSafeguardsCreateInput =
  typeof DeploymentSafeguardsCreateInput.Type;

// Output Schema
export const DeploymentSafeguardsCreateOutput =
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
export type DeploymentSafeguardsCreateOutput =
  typeof DeploymentSafeguardsCreateOutput.Type;

// The operation
/**
 * Creates or updates a deploymentSafeguard
 *
 * @param api-version - The API version to use for this operation.
 */
export const DeploymentSafeguardsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentSafeguardsCreateInput,
    outputSchema: DeploymentSafeguardsCreateOutput,
  }),
);
// Input Schema
export const DeploymentSafeguardsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.ContainerService/deploymentSafeguards/default",
      apiVersion: "2025-07-01",
    }),
  );
export type DeploymentSafeguardsDeleteInput =
  typeof DeploymentSafeguardsDeleteInput.Type;

// Output Schema
export const DeploymentSafeguardsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentSafeguardsDeleteOutput =
  typeof DeploymentSafeguardsDeleteOutput.Type;

// The operation
/**
 * Delete DeploymentSafeguards
 *
 * @param api-version - The API version to use for this operation.
 */
export const DeploymentSafeguardsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentSafeguardsDeleteInput,
    outputSchema: DeploymentSafeguardsDeleteOutput,
  }),
);
// Input Schema
export const DeploymentSafeguardsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ContainerService/deploymentSafeguards/default",
      apiVersion: "2025-07-01",
    }),
  );
export type DeploymentSafeguardsGetInput =
  typeof DeploymentSafeguardsGetInput.Type;

// Output Schema
export const DeploymentSafeguardsGetOutput =
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
export type DeploymentSafeguardsGetOutput =
  typeof DeploymentSafeguardsGetOutput.Type;

// The operation
/**
 * Fetch a deployment safeguard by name
 *
 * @param api-version - The API version to use for this operation.
 */
export const DeploymentSafeguardsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentSafeguardsGetInput,
    outputSchema: DeploymentSafeguardsGetOutput,
  }),
);
// Input Schema
export const DeploymentSafeguardsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ContainerService/deploymentSafeguards",
      apiVersion: "2025-07-01",
    }),
  );
export type DeploymentSafeguardsListInput =
  typeof DeploymentSafeguardsListInput.Type;

// Output Schema
export const DeploymentSafeguardsListOutput =
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
export type DeploymentSafeguardsListOutput =
  typeof DeploymentSafeguardsListOutput.Type;

// The operation
/**
 * List DeploymentSafeguards by parent resource
 *
 * @param api-version - The API version to use for this operation.
 */
export const DeploymentSafeguardsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentSafeguardsListInput,
    outputSchema: DeploymentSafeguardsListOutput,
  }),
);
// Input Schema
export const FleetMembersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    fleetMemberName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        clusterResourceId: Schema.String,
        group: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Joining",
            "Leaving",
            "Updating",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            lastOperationId: Schema.optional(Schema.String),
            lastOperationError: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(Schema.Array(Schema.Unknown)),
                      additionalInfo: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            type: Schema.optional(Schema.String),
                            info: Schema.optional(Schema.Unknown),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                additionalInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(Schema.String),
                      info: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetMembersCreateInput = typeof FleetMembersCreateInput.Type;

// Output Schema
export const FleetMembersCreateOutput =
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
export type FleetMembersCreateOutput = typeof FleetMembersCreateOutput.Type;

// The operation
/**
 * Create a FleetMember
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param If-None-Match - The request should only proceed if no entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param fleetMemberName - The name of the Fleet member resource.
 */
export const FleetMembersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetMembersCreateInput,
  outputSchema: FleetMembersCreateOutput,
}));
// Input Schema
export const FleetMembersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    fleetMemberName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetMembersDeleteInput = typeof FleetMembersDeleteInput.Type;

// Output Schema
export const FleetMembersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FleetMembersDeleteOutput = typeof FleetMembersDeleteOutput.Type;

// The operation
/**
 * Delete a FleetMember
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param fleetMemberName - The name of the Fleet member resource.
 */
export const FleetMembersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetMembersDeleteInput,
  outputSchema: FleetMembersDeleteOutput,
}));
// Input Schema
export const FleetMembersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  fleetMemberName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
    apiVersion: "2025-03-01",
  }),
);
export type FleetMembersGetInput = typeof FleetMembersGetInput.Type;

// Output Schema
export const FleetMembersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type FleetMembersGetOutput = typeof FleetMembersGetOutput.Type;

// The operation
/**
 * Get a FleetMember
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 * @param fleetMemberName - The name of the Fleet member resource.
 */
export const FleetMembersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetMembersGetInput,
  outputSchema: FleetMembersGetOutput,
}));
// Input Schema
export const FleetMembersListByFleetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetMembersListByFleetInput =
  typeof FleetMembersListByFleetInput.Type;

// Output Schema
export const FleetMembersListByFleetOutput =
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
export type FleetMembersListByFleetOutput =
  typeof FleetMembersListByFleetOutput.Type;

// The operation
/**
 * List FleetMember resources by Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 */
export const FleetMembersListByFleet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetMembersListByFleetInput,
    outputSchema: FleetMembersListByFleetOutput,
  }),
);
// Input Schema
export const FleetMembersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    fleetMemberName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        group: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/members/{fleetMemberName}",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetMembersUpdateInput = typeof FleetMembersUpdateInput.Type;

// Output Schema
export const FleetMembersUpdateOutput =
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
export type FleetMembersUpdateOutput = typeof FleetMembersUpdateOutput.Type;

// The operation
/**
 * Update a FleetMember
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param fleetMemberName - The name of the Fleet member resource.
 */
export const FleetMembersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetMembersUpdateInput,
  outputSchema: FleetMembersUpdateOutput,
}));
// Input Schema
export const FleetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Creating",
            "Updating",
            "Deleting",
          ]),
        ),
        hubProfile: Schema.optional(
          Schema.Struct({
            dnsPrefix: Schema.optional(Schema.String),
            apiServerAccessProfile: Schema.optional(
              Schema.Struct({
                enablePrivateCluster: Schema.optional(Schema.Boolean),
                enableVnetIntegration: Schema.optional(Schema.Boolean),
                subnetId: Schema.optional(Schema.String),
              }),
            ),
            agentProfile: Schema.optional(
              Schema.Struct({
                subnetId: Schema.optional(Schema.String),
                vmSize: Schema.optional(Schema.String),
              }),
            ),
            fqdn: Schema.optional(Schema.String),
            kubernetesVersion: Schema.optional(Schema.String),
            portalFqdn: Schema.optional(Schema.String),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            lastOperationId: Schema.optional(Schema.String),
            lastOperationError: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(Schema.Array(Schema.Unknown)),
                      additionalInfo: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            type: Schema.optional(Schema.String),
                            info: Schema.optional(Schema.Unknown),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                additionalInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(Schema.String),
                      info: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetsCreateOrUpdateInput = typeof FleetsCreateOrUpdateInput.Type;

// Output Schema
export const FleetsCreateOrUpdateOutput =
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
export type FleetsCreateOrUpdateOutput = typeof FleetsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Fleet.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param If-None-Match - The request should only proceed if no entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 */
export const FleetsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetsCreateOrUpdateInput,
    outputSchema: FleetsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const FleetsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
    apiVersion: "2025-03-01",
  }),
);
export type FleetsDeleteInput = typeof FleetsDeleteInput.Type;

// Output Schema
export const FleetsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FleetsDeleteOutput = typeof FleetsDeleteOutput.Type;

// The operation
/**
 * Delete a Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 */
export const FleetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetsDeleteInput,
  outputSchema: FleetsDeleteOutput,
}));
// Input Schema
export const FleetsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
    apiVersion: "2025-03-01",
  }),
);
export type FleetsGetInput = typeof FleetsGetInput.Type;

// Output Schema
export const FleetsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type FleetsGetOutput = typeof FleetsGetOutput.Type;

// The operation
/**
 * Gets a Fleet.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 */
export const FleetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetsGetInput,
  outputSchema: FleetsGetOutput,
}));
// Input Schema
export const FleetsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetsListByResourceGroupInput =
  typeof FleetsListByResourceGroupInput.Type;

// Output Schema
export const FleetsListByResourceGroupOutput =
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
export type FleetsListByResourceGroupOutput =
  typeof FleetsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists fleets in the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const FleetsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetsListByResourceGroupInput,
    outputSchema: FleetsListByResourceGroupOutput,
  }),
);
// Input Schema
export const FleetsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/fleets",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetsListBySubscriptionInput =
  typeof FleetsListBySubscriptionInput.Type;

// Output Schema
export const FleetsListBySubscriptionOutput =
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
export type FleetsListBySubscriptionOutput =
  typeof FleetsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists fleets in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const FleetsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetsListBySubscriptionInput,
    outputSchema: FleetsListBySubscriptionOutput,
  }),
);
// Input Schema
export const FleetsListCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/listCredentials",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetsListCredentialsInput = typeof FleetsListCredentialsInput.Type;

// Output Schema
export const FleetsListCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kubeconfigs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type FleetsListCredentialsOutput =
  typeof FleetsListCredentialsOutput.Type;

// The operation
/**
 * Lists the user credentials of a Fleet.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 */
export const FleetsListCredentials = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetsListCredentialsInput,
    outputSchema: FleetsListCredentialsOutput,
  }),
);
// Input Schema
export const FleetsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned, UserAssigned",
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}",
    apiVersion: "2025-03-01",
  }),
);
export type FleetsUpdateInput = typeof FleetsUpdateInput.Type;

// Output Schema
export const FleetsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type FleetsUpdateOutput = typeof FleetsUpdateOutput.Type;

// The operation
/**
 * Update a Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 */
export const FleetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetsUpdateInput,
  outputSchema: FleetsUpdateOutput,
}));
// Input Schema
export const FleetUpdateStrategiesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    updateStrategyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        strategy: Schema.Struct({
          stages: Schema.Array(
            Schema.Struct({
              name: Schema.String,
              groups: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                  }),
                ),
              ),
              afterStageWaitInSeconds: Schema.optional(Schema.Number),
            }),
          ),
        }),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies/{updateStrategyName}",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetUpdateStrategiesCreateOrUpdateInput =
  typeof FleetUpdateStrategiesCreateOrUpdateInput.Type;

// Output Schema
export const FleetUpdateStrategiesCreateOrUpdateOutput =
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
export type FleetUpdateStrategiesCreateOrUpdateOutput =
  typeof FleetUpdateStrategiesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a FleetUpdateStrategy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param If-None-Match - The request should only proceed if no entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param updateStrategyName - The name of the UpdateStrategy resource.
 */
export const FleetUpdateStrategiesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FleetUpdateStrategiesCreateOrUpdateInput,
    outputSchema: FleetUpdateStrategiesCreateOrUpdateOutput,
  }));
// Input Schema
export const FleetUpdateStrategiesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    updateStrategyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies/{updateStrategyName}",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetUpdateStrategiesDeleteInput =
  typeof FleetUpdateStrategiesDeleteInput.Type;

// Output Schema
export const FleetUpdateStrategiesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FleetUpdateStrategiesDeleteOutput =
  typeof FleetUpdateStrategiesDeleteOutput.Type;

// The operation
/**
 * Delete a FleetUpdateStrategy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param updateStrategyName - The name of the UpdateStrategy resource.
 */
export const FleetUpdateStrategiesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetUpdateStrategiesDeleteInput,
    outputSchema: FleetUpdateStrategiesDeleteOutput,
  }),
);
// Input Schema
export const FleetUpdateStrategiesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    updateStrategyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies/{updateStrategyName}",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetUpdateStrategiesGetInput =
  typeof FleetUpdateStrategiesGetInput.Type;

// Output Schema
export const FleetUpdateStrategiesGetOutput =
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
export type FleetUpdateStrategiesGetOutput =
  typeof FleetUpdateStrategiesGetOutput.Type;

// The operation
/**
 * Get a FleetUpdateStrategy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 * @param updateStrategyName - The name of the UpdateStrategy resource.
 */
export const FleetUpdateStrategiesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetUpdateStrategiesGetInput,
    outputSchema: FleetUpdateStrategiesGetOutput,
  }),
);
// Input Schema
export const FleetUpdateStrategiesListByFleetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateStrategies",
      apiVersion: "2025-03-01",
    }),
  );
export type FleetUpdateStrategiesListByFleetInput =
  typeof FleetUpdateStrategiesListByFleetInput.Type;

// Output Schema
export const FleetUpdateStrategiesListByFleetOutput =
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
export type FleetUpdateStrategiesListByFleetOutput =
  typeof FleetUpdateStrategiesListByFleetOutput.Type;

// The operation
/**
 * List FleetUpdateStrategy resources by Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 */
export const FleetUpdateStrategiesListByFleet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FleetUpdateStrategiesListByFleetInput,
    outputSchema: FleetUpdateStrategiesListByFleetOutput,
  }));
// Input Schema
export const MachinesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
  machineName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}/machines/{machineName}",
    apiVersion: "2026-01-01",
  }),
);
export type MachinesGetInput = typeof MachinesGetInput.Type;

// Output Schema
export const MachinesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type MachinesGetOutput = typeof MachinesGetOutput.Type;

// The operation
/**
 * Get a specific machine in the specified agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param agentPoolName - The name of the agent pool.
 * @param machineName - Host name of the machine.
 */
export const MachinesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesGetInput,
  outputSchema: MachinesGetOutput,
}));
// Input Schema
export const MachinesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/agentPools/{agentPoolName}/machines",
    apiVersion: "2026-01-01",
  }),
);
export type MachinesListInput = typeof MachinesListInput.Type;

// Output Schema
export const MachinesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type MachinesListOutput = typeof MachinesListOutput.Type;

// The operation
/**
 * Gets a list of machines in the specified agent pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param agentPoolName - The name of the agent pool.
 */
export const MachinesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesListInput,
  outputSchema: MachinesListOutput,
}));
// Input Schema
export const MaintenanceConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    configName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        timeInWeek: Schema.optional(
          Schema.Array(
            Schema.Struct({
              day: Schema.optional(
                Schema.Literals([
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ]),
              ),
              hourSlots: Schema.optional(Schema.Array(Schema.Number)),
            }),
          ),
        ),
        notAllowedTime: Schema.optional(
          Schema.Array(
            Schema.Struct({
              start: Schema.optional(Schema.String),
              end: Schema.optional(Schema.String),
            }),
          ),
        ),
        maintenanceWindow: Schema.optional(
          Schema.Struct({
            schedule: Schema.Struct({
              daily: Schema.optional(
                Schema.Struct({
                  intervalDays: Schema.Number,
                }),
              ),
              weekly: Schema.optional(
                Schema.Struct({
                  intervalWeeks: Schema.Number,
                  dayOfWeek: Schema.Literals([
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ]),
                }),
              ),
              absoluteMonthly: Schema.optional(
                Schema.Struct({
                  intervalMonths: Schema.Number,
                  dayOfMonth: Schema.Number,
                }),
              ),
              relativeMonthly: Schema.optional(
                Schema.Struct({
                  intervalMonths: Schema.Number,
                  weekIndex: Schema.Literals([
                    "First",
                    "Second",
                    "Third",
                    "Fourth",
                    "Last",
                  ]),
                  dayOfWeek: Schema.Literals([
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ]),
                }),
              ),
            }),
            durationHours: Schema.Number,
            utcOffset: Schema.optional(Schema.String),
            startDate: Schema.optional(Schema.String),
            startTime: Schema.String,
            notAllowedDates: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  start: Schema.String,
                  end: Schema.String,
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/maintenanceConfigurations/{configName}",
      apiVersion: "2026-01-01",
    }),
  );
export type MaintenanceConfigurationsCreateOrUpdateInput =
  typeof MaintenanceConfigurationsCreateOrUpdateInput.Type;

// Output Schema
export const MaintenanceConfigurationsCreateOrUpdateOutput =
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
export type MaintenanceConfigurationsCreateOrUpdateOutput =
  typeof MaintenanceConfigurationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a maintenance configuration in the specified managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param configName - The name of the maintenance configuration. Supported values are 'default', 'aksManagedAutoUpgradeSchedule', or 'aksManagedNodeOSUpgradeSchedule'.
 */
export const MaintenanceConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsCreateOrUpdateInput,
    outputSchema: MaintenanceConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export const MaintenanceConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    configName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/maintenanceConfigurations/{configName}",
      apiVersion: "2026-01-01",
    }),
  );
export type MaintenanceConfigurationsDeleteInput =
  typeof MaintenanceConfigurationsDeleteInput.Type;

// Output Schema
export const MaintenanceConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MaintenanceConfigurationsDeleteOutput =
  typeof MaintenanceConfigurationsDeleteOutput.Type;

// The operation
/**
 * Deletes a maintenance configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param configName - The name of the maintenance configuration. Supported values are 'default', 'aksManagedAutoUpgradeSchedule', or 'aksManagedNodeOSUpgradeSchedule'.
 */
export const MaintenanceConfigurationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsDeleteInput,
    outputSchema: MaintenanceConfigurationsDeleteOutput,
  }));
// Input Schema
export const MaintenanceConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    configName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/maintenanceConfigurations/{configName}",
      apiVersion: "2026-01-01",
    }),
  );
export type MaintenanceConfigurationsGetInput =
  typeof MaintenanceConfigurationsGetInput.Type;

// Output Schema
export const MaintenanceConfigurationsGetOutput =
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
export type MaintenanceConfigurationsGetOutput =
  typeof MaintenanceConfigurationsGetOutput.Type;

// The operation
/**
 * Gets the specified maintenance configuration of a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param configName - The name of the maintenance configuration. Supported values are 'default', 'aksManagedAutoUpgradeSchedule', or 'aksManagedNodeOSUpgradeSchedule'.
 */
export const MaintenanceConfigurationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsGetInput,
    outputSchema: MaintenanceConfigurationsGetOutput,
  }));
// Input Schema
export const MaintenanceConfigurationsListByManagedClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/maintenanceConfigurations",
      apiVersion: "2026-01-01",
    }),
  );
export type MaintenanceConfigurationsListByManagedClusterInput =
  typeof MaintenanceConfigurationsListByManagedClusterInput.Type;

// Output Schema
export const MaintenanceConfigurationsListByManagedClusterOutput =
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
export type MaintenanceConfigurationsListByManagedClusterOutput =
  typeof MaintenanceConfigurationsListByManagedClusterOutput.Type;

// The operation
/**
 * Gets a list of maintenance configurations in the specified managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const MaintenanceConfigurationsListByManagedCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsListByManagedClusterInput,
    outputSchema: MaintenanceConfigurationsListByManagedClusterOutput,
  }));
// Input Schema
export const ManagedClustersAbortLatestOperationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/abort",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersAbortLatestOperationInput =
  typeof ManagedClustersAbortLatestOperationInput.Type;

// Output Schema
export const ManagedClustersAbortLatestOperationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedClustersAbortLatestOperationOutput =
  typeof ManagedClustersAbortLatestOperationOutput.Type;

// The operation
/**
 * Aborts last operation running on managed cluster.
 *
 * Aborts the currently running operation on the managed cluster. The Managed Cluster will be moved to a Canceling state and eventually to a Canceled state when cancellation finishes. If the operation completes before cancellation can take place, a 409 error code is returned.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersAbortLatestOperation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersAbortLatestOperationInput,
    outputSchema: ManagedClustersAbortLatestOperationOutput,
  }));
// Input Schema
export const ManagedClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        powerState: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.Literals(["Running", "Stopped"])),
          }),
        ),
        maxAgentPools: Schema.optional(Schema.Number),
        kubernetesVersion: Schema.optional(Schema.String),
        currentKubernetesVersion: Schema.optional(Schema.String),
        dnsPrefix: Schema.optional(Schema.String),
        fqdnSubdomain: Schema.optional(Schema.String),
        fqdn: Schema.optional(Schema.String),
        privateFQDN: Schema.optional(Schema.String),
        azurePortalFQDN: Schema.optional(Schema.String),
        agentPoolProfiles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              eTag: Schema.optional(Schema.String),
              count: Schema.optional(Schema.Number),
              vmSize: Schema.optional(Schema.String),
              osDiskSizeGB: Schema.optional(Schema.Number),
              osDiskType: Schema.optional(
                Schema.Literals(["Managed", "Ephemeral"]),
              ),
              kubeletDiskType: Schema.optional(
                Schema.Literals(["OS", "Temporary"]),
              ),
              workloadRuntime: Schema.optional(
                Schema.Literals([
                  "OCIContainer",
                  "WasmWasi",
                  "KataVmIsolation",
                ]),
              ),
              messageOfTheDay: Schema.optional(Schema.String),
              vnetSubnetID: Schema.optional(Schema.String),
              podSubnetID: Schema.optional(Schema.String),
              podIPAllocationMode: Schema.optional(
                Schema.Literals(["DynamicIndividual", "StaticBlock"]),
              ),
              maxPods: Schema.optional(Schema.Number),
              osType: Schema.optional(Schema.Literals(["Linux", "Windows"])),
              osSKU: Schema.optional(
                Schema.Literals([
                  "Ubuntu",
                  "AzureLinux",
                  "AzureLinux3",
                  "CBLMariner",
                  "Windows2019",
                  "Windows2022",
                  "Ubuntu2204",
                  "Ubuntu2404",
                ]),
              ),
              maxCount: Schema.optional(Schema.Number),
              minCount: Schema.optional(Schema.Number),
              enableAutoScaling: Schema.optional(Schema.Boolean),
              scaleDownMode: Schema.optional(
                Schema.Literals(["Delete", "Deallocate"]),
              ),
              type: Schema.optional(
                Schema.Literals([
                  "VirtualMachineScaleSets",
                  "AvailabilitySet",
                  "VirtualMachines",
                ]),
              ),
              mode: Schema.optional(
                Schema.Literals(["System", "User", "Gateway"]),
              ),
              orchestratorVersion: Schema.optional(Schema.String),
              currentOrchestratorVersion: Schema.optional(Schema.String),
              nodeImageVersion: Schema.optional(Schema.String),
              upgradeSettings: Schema.optional(
                Schema.Struct({
                  maxSurge: Schema.optional(Schema.String),
                  maxUnavailable: Schema.optional(Schema.String),
                  drainTimeoutInMinutes: Schema.optional(Schema.Number),
                  nodeSoakDurationInMinutes: Schema.optional(Schema.Number),
                  undrainableNodeBehavior: Schema.optional(
                    Schema.Literals(["Cordon", "Schedule"]),
                  ),
                }),
              ),
              provisioningState: Schema.optional(Schema.String),
              powerState: Schema.optional(
                Schema.Struct({
                  code: Schema.optional(
                    Schema.Literals(["Running", "Stopped"]),
                  ),
                }),
              ),
              availabilityZones: Schema.optional(Schema.Array(Schema.String)),
              enableNodePublicIP: Schema.optional(Schema.Boolean),
              nodePublicIPPrefixID: Schema.optional(Schema.String),
              scaleSetPriority: Schema.optional(
                Schema.Literals(["Spot", "Regular"]),
              ),
              scaleSetEvictionPolicy: Schema.optional(
                Schema.Literals(["Delete", "Deallocate"]),
              ),
              spotMaxPrice: Schema.optional(Schema.Number),
              tags: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              nodeLabels: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              nodeTaints: Schema.optional(Schema.Array(Schema.String)),
              proximityPlacementGroupID: Schema.optional(Schema.String),
              kubeletConfig: Schema.optional(
                Schema.Struct({
                  cpuManagerPolicy: Schema.optional(Schema.String),
                  cpuCfsQuota: Schema.optional(Schema.Boolean),
                  cpuCfsQuotaPeriod: Schema.optional(Schema.String),
                  imageGcHighThreshold: Schema.optional(Schema.Number),
                  imageGcLowThreshold: Schema.optional(Schema.Number),
                  topologyManagerPolicy: Schema.optional(Schema.String),
                  allowedUnsafeSysctls: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  failSwapOn: Schema.optional(Schema.Boolean),
                  containerLogMaxSizeMB: Schema.optional(Schema.Number),
                  containerLogMaxFiles: Schema.optional(Schema.Number),
                  podMaxPids: Schema.optional(Schema.Number),
                }),
              ),
              linuxOSConfig: Schema.optional(
                Schema.Struct({
                  sysctls: Schema.optional(
                    Schema.Struct({
                      netCoreSomaxconn: Schema.optional(Schema.Number),
                      netCoreNetdevMaxBacklog: Schema.optional(Schema.Number),
                      netCoreRmemDefault: Schema.optional(Schema.Number),
                      netCoreRmemMax: Schema.optional(Schema.Number),
                      netCoreWmemDefault: Schema.optional(Schema.Number),
                      netCoreWmemMax: Schema.optional(Schema.Number),
                      netCoreOptmemMax: Schema.optional(Schema.Number),
                      netIpv4TcpMaxSynBacklog: Schema.optional(Schema.Number),
                      netIpv4TcpMaxTwBuckets: Schema.optional(Schema.Number),
                      netIpv4TcpFinTimeout: Schema.optional(Schema.Number),
                      netIpv4TcpKeepaliveTime: Schema.optional(Schema.Number),
                      netIpv4TcpKeepaliveProbes: Schema.optional(Schema.Number),
                      netIpv4TcpkeepaliveIntvl: Schema.optional(Schema.Number),
                      netIpv4TcpTwReuse: Schema.optional(Schema.Boolean),
                      netIpv4IpLocalPortRange: Schema.optional(Schema.String),
                      netIpv4NeighDefaultGcThresh1: Schema.optional(
                        Schema.Number,
                      ),
                      netIpv4NeighDefaultGcThresh2: Schema.optional(
                        Schema.Number,
                      ),
                      netIpv4NeighDefaultGcThresh3: Schema.optional(
                        Schema.Number,
                      ),
                      netNetfilterNfConntrackMax: Schema.optional(
                        Schema.Number,
                      ),
                      netNetfilterNfConntrackBuckets: Schema.optional(
                        Schema.Number,
                      ),
                      fsInotifyMaxUserWatches: Schema.optional(Schema.Number),
                      fsFileMax: Schema.optional(Schema.Number),
                      fsAioMaxNr: Schema.optional(Schema.Number),
                      fsNrOpen: Schema.optional(Schema.Number),
                      kernelThreadsMax: Schema.optional(Schema.Number),
                      vmMaxMapCount: Schema.optional(Schema.Number),
                      vmSwappiness: Schema.optional(Schema.Number),
                      vmVfsCachePressure: Schema.optional(Schema.Number),
                    }),
                  ),
                  transparentHugePageEnabled: Schema.optional(Schema.String),
                  transparentHugePageDefrag: Schema.optional(Schema.String),
                  swapFileSizeMB: Schema.optional(Schema.Number),
                }),
              ),
              enableEncryptionAtHost: Schema.optional(Schema.Boolean),
              enableUltraSSD: Schema.optional(Schema.Boolean),
              enableFIPS: Schema.optional(Schema.Boolean),
              gpuInstanceProfile: Schema.optional(
                Schema.Literals(["MIG1g", "MIG2g", "MIG3g", "MIG4g", "MIG7g"]),
              ),
              creationData: Schema.optional(
                Schema.Struct({
                  sourceResourceId: Schema.optional(Schema.String),
                }),
              ),
              capacityReservationGroupID: Schema.optional(Schema.String),
              hostGroupID: Schema.optional(Schema.String),
              networkProfile: Schema.optional(
                Schema.Struct({
                  nodePublicIPTags: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        ipTagType: Schema.optional(Schema.String),
                        tag: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  allowedHostPorts: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        portStart: Schema.optional(Schema.Number),
                        portEnd: Schema.optional(Schema.Number),
                        protocol: Schema.optional(
                          Schema.Literals(["TCP", "UDP"]),
                        ),
                      }),
                    ),
                  ),
                  applicationSecurityGroups: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                }),
              ),
              windowsProfile: Schema.optional(
                Schema.Struct({
                  disableOutboundNat: Schema.optional(Schema.Boolean),
                }),
              ),
              securityProfile: Schema.optional(
                Schema.Struct({
                  enableVTPM: Schema.optional(Schema.Boolean),
                  enableSecureBoot: Schema.optional(Schema.Boolean),
                  sshAccess: Schema.optional(
                    Schema.Literals(["LocalUser", "Disabled"]),
                  ),
                }),
              ),
              gpuProfile: Schema.optional(
                Schema.Struct({
                  driver: Schema.optional(Schema.Literals(["Install", "None"])),
                }),
              ),
              gatewayProfile: Schema.optional(
                Schema.Struct({
                  publicIPPrefixSize: Schema.optional(Schema.Number),
                }),
              ),
              virtualMachinesProfile: Schema.optional(
                Schema.Struct({
                  scale: Schema.optional(
                    Schema.Struct({
                      manual: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            size: Schema.optional(Schema.String),
                            count: Schema.optional(Schema.Number),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
              virtualMachineNodesStatus: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    size: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              status: Schema.optional(
                Schema.Struct({
                  provisioningError: Schema.optional(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            code: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            target: Schema.optional(Schema.String),
                            details: Schema.optional(
                              Schema.Array(Schema.Unknown),
                            ),
                            additionalInfo: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  type: Schema.optional(Schema.String),
                                  info: Schema.optional(Schema.Unknown),
                                }),
                              ),
                            ),
                          }),
                        ),
                      ),
                      additionalInfo: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            type: Schema.optional(Schema.String),
                            info: Schema.optional(Schema.Unknown),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
              localDNSProfile: Schema.optional(
                Schema.Struct({
                  mode: Schema.optional(
                    Schema.Literals(["Preferred", "Required", "Disabled"]),
                  ),
                  state: Schema.optional(
                    Schema.Literals(["Enabled", "Disabled"]),
                  ),
                  vnetDNSOverrides: Schema.optional(
                    Schema.Record(
                      Schema.String,
                      Schema.Struct({
                        queryLogging: Schema.optional(
                          Schema.Literals(["Error", "Log"]),
                        ),
                        protocol: Schema.optional(
                          Schema.Literals(["PreferUDP", "ForceTCP"]),
                        ),
                        forwardDestination: Schema.optional(
                          Schema.Literals(["ClusterCoreDNS", "VnetDNS"]),
                        ),
                        forwardPolicy: Schema.optional(
                          Schema.Literals([
                            "Sequential",
                            "RoundRobin",
                            "Random",
                          ]),
                        ),
                        maxConcurrent: Schema.optional(Schema.Number),
                        cacheDurationInSeconds: Schema.optional(Schema.Number),
                        serveStaleDurationInSeconds: Schema.optional(
                          Schema.Number,
                        ),
                        serveStale: Schema.optional(
                          Schema.Literals(["Verify", "Immediate", "Disable"]),
                        ),
                      }),
                    ),
                  ),
                  kubeDNSOverrides: Schema.optional(
                    Schema.Record(
                      Schema.String,
                      Schema.Struct({
                        queryLogging: Schema.optional(
                          Schema.Literals(["Error", "Log"]),
                        ),
                        protocol: Schema.optional(
                          Schema.Literals(["PreferUDP", "ForceTCP"]),
                        ),
                        forwardDestination: Schema.optional(
                          Schema.Literals(["ClusterCoreDNS", "VnetDNS"]),
                        ),
                        forwardPolicy: Schema.optional(
                          Schema.Literals([
                            "Sequential",
                            "RoundRobin",
                            "Random",
                          ]),
                        ),
                        maxConcurrent: Schema.optional(Schema.Number),
                        cacheDurationInSeconds: Schema.optional(Schema.Number),
                        serveStaleDurationInSeconds: Schema.optional(
                          Schema.Number,
                        ),
                        serveStale: Schema.optional(
                          Schema.Literals(["Verify", "Immediate", "Disable"]),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
        ),
        linuxProfile: Schema.optional(
          Schema.Struct({
            adminUsername: Schema.String,
            ssh: Schema.Struct({
              publicKeys: Schema.Array(
                Schema.Struct({
                  keyData: Schema.String,
                }),
              ),
            }),
          }),
        ),
        windowsProfile: Schema.optional(
          Schema.Struct({
            adminUsername: Schema.String,
            adminPassword: Schema.optional(SensitiveString),
            licenseType: Schema.optional(
              Schema.Literals(["None", "Windows_Server"]),
            ),
            enableCSIProxy: Schema.optional(Schema.Boolean),
            gmsaProfile: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                dnsServer: Schema.optional(Schema.String),
                rootDomainName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        servicePrincipalProfile: Schema.optional(
          Schema.Struct({
            clientId: Schema.String,
            secret: Schema.optional(SensitiveString),
          }),
        ),
        addonProfiles: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              enabled: Schema.Boolean,
              config: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              identity: Schema.optional(
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  clientId: Schema.optional(Schema.String),
                  objectId: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
        podIdentityProfile: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            allowNetworkPluginKubenet: Schema.optional(Schema.Boolean),
            userAssignedIdentities: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  namespace: Schema.String,
                  bindingSelector: Schema.optional(Schema.String),
                  identity: Schema.Struct({
                    resourceId: Schema.optional(Schema.String),
                    clientId: Schema.optional(Schema.String),
                    objectId: Schema.optional(Schema.String),
                  }),
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Assigned",
                      "Canceled",
                      "Deleting",
                      "Failed",
                      "Succeeded",
                      "Updating",
                    ]),
                  ),
                  provisioningInfo: Schema.optional(
                    Schema.Struct({
                      error: Schema.optional(
                        Schema.Struct({
                          error: Schema.optional(
                            Schema.Struct({
                              code: Schema.optional(Schema.String),
                              message: Schema.optional(Schema.String),
                              target: Schema.optional(Schema.String),
                              details: Schema.optional(
                                Schema.Array(Schema.Unknown),
                              ),
                            }),
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            userAssignedIdentityExceptions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  namespace: Schema.String,
                  podLabels: Schema.Record(Schema.String, Schema.String),
                }),
              ),
            ),
          }),
        ),
        oidcIssuerProfile: Schema.optional(
          Schema.Struct({
            issuerURL: Schema.optional(Schema.String),
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        nodeResourceGroup: Schema.optional(Schema.String),
        nodeResourceGroupProfile: Schema.optional(
          Schema.Struct({
            restrictionLevel: Schema.optional(
              Schema.Literals(["Unrestricted", "ReadOnly"]),
            ),
          }),
        ),
        enableRBAC: Schema.optional(Schema.Boolean),
        supportPlan: Schema.optional(
          Schema.Literals(["KubernetesOfficial", "AKSLongTermSupport"]),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            networkPlugin: Schema.optional(
              Schema.Literals(["azure", "kubenet", "none"]),
            ),
            networkPluginMode: Schema.optional(Schema.Literals(["overlay"])),
            networkPolicy: Schema.optional(
              Schema.Literals(["none", "calico", "azure", "cilium"]),
            ),
            networkMode: Schema.optional(
              Schema.Literals(["transparent", "bridge"]),
            ),
            networkDataplane: Schema.optional(
              Schema.Literals(["azure", "cilium"]),
            ),
            advancedNetworking: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                observability: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                  }),
                ),
                security: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    advancedNetworkPolicies: Schema.optional(
                      Schema.Literals(["L7", "FQDN", "None"]),
                    ),
                    transitEncryption: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals(["WireGuard", "None"]),
                        ),
                      }),
                    ),
                  }),
                ),
                performance: Schema.optional(
                  Schema.Struct({
                    accelerationMode: Schema.optional(
                      Schema.Literals(["BpfVeth", "None"]),
                    ),
                  }),
                ),
              }),
            ),
            podCidr: Schema.optional(Schema.String),
            serviceCidr: Schema.optional(Schema.String),
            dnsServiceIP: Schema.optional(Schema.String),
            outboundType: Schema.optional(
              Schema.Literals([
                "loadBalancer",
                "userDefinedRouting",
                "managedNATGateway",
                "userAssignedNATGateway",
                "none",
              ]),
            ),
            loadBalancerSku: Schema.optional(
              Schema.Literals(["standard", "basic"]),
            ),
            loadBalancerProfile: Schema.optional(
              Schema.Struct({
                managedOutboundIPs: Schema.optional(
                  Schema.Struct({
                    count: Schema.optional(Schema.Number),
                    countIPv6: Schema.optional(Schema.Number),
                  }),
                ),
                outboundIPPrefixes: Schema.optional(
                  Schema.Struct({
                    publicIPPrefixes: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          id: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
                outboundIPs: Schema.optional(
                  Schema.Struct({
                    publicIPs: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          id: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
                effectiveOutboundIPs: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                allocatedOutboundPorts: Schema.optional(Schema.Number),
                idleTimeoutInMinutes: Schema.optional(Schema.Number),
                enableMultipleStandardLoadBalancers: Schema.optional(
                  Schema.Boolean,
                ),
                backendPoolType: Schema.optional(
                  Schema.Literals(["NodeIPConfiguration", "NodeIP"]),
                ),
              }),
            ),
            natGatewayProfile: Schema.optional(
              Schema.Struct({
                managedOutboundIPProfile: Schema.optional(
                  Schema.Struct({
                    count: Schema.optional(Schema.Number),
                  }),
                ),
                effectiveOutboundIPs: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                idleTimeoutInMinutes: Schema.optional(Schema.Number),
              }),
            ),
            staticEgressGatewayProfile: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            podCidrs: Schema.optional(Schema.Array(Schema.String)),
            serviceCidrs: Schema.optional(Schema.Array(Schema.String)),
            ipFamilies: Schema.optional(
              Schema.Array(Schema.Literals(["IPv4", "IPv6"])),
            ),
          }),
        ),
        aadProfile: Schema.optional(
          Schema.Struct({
            managed: Schema.optional(Schema.Boolean),
            enableAzureRBAC: Schema.optional(Schema.Boolean),
            adminGroupObjectIDs: Schema.optional(Schema.Array(Schema.String)),
            clientAppID: Schema.optional(Schema.String),
            serverAppID: Schema.optional(Schema.String),
            serverAppSecret: Schema.optional(Schema.String),
            tenantID: Schema.optional(Schema.String),
          }),
        ),
        autoUpgradeProfile: Schema.optional(
          Schema.Struct({
            upgradeChannel: Schema.optional(
              Schema.Literals([
                "rapid",
                "stable",
                "patch",
                "node-image",
                "none",
              ]),
            ),
            nodeOSUpgradeChannel: Schema.optional(
              Schema.Literals([
                "None",
                "Unmanaged",
                "NodeImage",
                "SecurityPatch",
              ]),
            ),
          }),
        ),
        upgradeSettings: Schema.optional(
          Schema.Struct({
            overrideSettings: Schema.optional(
              Schema.Struct({
                forceUpgrade: Schema.optional(Schema.Boolean),
                until: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        autoScalerProfile: Schema.optional(
          Schema.Struct({
            "balance-similar-node-groups": Schema.optional(Schema.String),
            "daemonset-eviction-for-empty-nodes": Schema.optional(
              Schema.Boolean,
            ),
            "daemonset-eviction-for-occupied-nodes": Schema.optional(
              Schema.Boolean,
            ),
            "ignore-daemonsets-utilization": Schema.optional(Schema.Boolean),
            expander: Schema.optional(
              Schema.Literals([
                "least-waste",
                "most-pods",
                "priority",
                "random",
              ]),
            ),
            "max-empty-bulk-delete": Schema.optional(Schema.String),
            "max-graceful-termination-sec": Schema.optional(Schema.String),
            "max-node-provision-time": Schema.optional(Schema.String),
            "max-total-unready-percentage": Schema.optional(Schema.String),
            "new-pod-scale-up-delay": Schema.optional(Schema.String),
            "ok-total-unready-count": Schema.optional(Schema.String),
            "scan-interval": Schema.optional(Schema.String),
            "scale-down-delay-after-add": Schema.optional(Schema.String),
            "scale-down-delay-after-delete": Schema.optional(Schema.String),
            "scale-down-delay-after-failure": Schema.optional(Schema.String),
            "scale-down-unneeded-time": Schema.optional(Schema.String),
            "scale-down-unready-time": Schema.optional(Schema.String),
            "scale-down-utilization-threshold": Schema.optional(Schema.String),
            "skip-nodes-with-local-storage": Schema.optional(Schema.String),
            "skip-nodes-with-system-pods": Schema.optional(Schema.String),
          }),
        ),
        apiServerAccessProfile: Schema.optional(
          Schema.Struct({
            authorizedIPRanges: Schema.optional(Schema.Array(Schema.String)),
            enablePrivateCluster: Schema.optional(Schema.Boolean),
            privateDNSZone: Schema.optional(Schema.String),
            enablePrivateClusterPublicFQDN: Schema.optional(Schema.Boolean),
            disableRunCommand: Schema.optional(Schema.Boolean),
            enableVnetIntegration: Schema.optional(Schema.Boolean),
            subnetId: Schema.optional(Schema.String),
          }),
        ),
        diskEncryptionSetID: Schema.optional(Schema.String),
        identityProfile: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              resourceId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
              objectId: Schema.optional(Schema.String),
            }),
          ),
        ),
        privateLinkResources: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              groupId: Schema.optional(Schema.String),
              requiredMembers: Schema.optional(Schema.Array(Schema.String)),
              privateLinkServiceID: Schema.optional(Schema.String),
            }),
          ),
        ),
        disableLocalAccounts: Schema.optional(Schema.Boolean),
        httpProxyConfig: Schema.optional(
          Schema.Struct({
            httpProxy: Schema.optional(Schema.String),
            httpsProxy: Schema.optional(Schema.String),
            noProxy: Schema.optional(Schema.Array(Schema.String)),
            trustedCa: Schema.optional(Schema.String),
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        securityProfile: Schema.optional(
          Schema.Struct({
            defender: Schema.optional(
              Schema.Struct({
                logAnalyticsWorkspaceResourceId: Schema.optional(Schema.String),
                securityMonitoring: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                  }),
                ),
              }),
            ),
            azureKeyVaultKms: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                keyId: Schema.optional(Schema.String),
                keyVaultNetworkAccess: Schema.optional(
                  Schema.Literals(["Public", "Private"]),
                ),
                keyVaultResourceId: Schema.optional(Schema.String),
              }),
            ),
            workloadIdentity: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            imageCleaner: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                intervalHours: Schema.optional(Schema.Number),
              }),
            ),
            customCATrustCertificates: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
        storageProfile: Schema.optional(
          Schema.Struct({
            diskCSIDriver: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            fileCSIDriver: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            snapshotController: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            blobCSIDriver: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        ingressProfile: Schema.optional(
          Schema.Struct({
            webAppRouting: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                dnsZoneResourceIds: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                nginx: Schema.optional(
                  Schema.Struct({
                    defaultIngressControllerType: Schema.optional(
                      Schema.Literals([
                        "AnnotationControlled",
                        "External",
                        "Internal",
                        "None",
                      ]),
                    ),
                  }),
                ),
                identity: Schema.optional(
                  Schema.Struct({
                    resourceId: Schema.optional(Schema.String),
                    clientId: Schema.optional(Schema.String),
                    objectId: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        workloadAutoScalerProfile: Schema.optional(
          Schema.Struct({
            keda: Schema.optional(
              Schema.Struct({
                enabled: Schema.Boolean,
              }),
            ),
            verticalPodAutoscaler: Schema.optional(
              Schema.Struct({
                enabled: Schema.Boolean,
              }),
            ),
          }),
        ),
        azureMonitorProfile: Schema.optional(
          Schema.Struct({
            metrics: Schema.optional(
              Schema.Struct({
                enabled: Schema.Boolean,
                kubeStateMetrics: Schema.optional(
                  Schema.Struct({
                    metricLabelsAllowlist: Schema.optional(Schema.String),
                    metricAnnotationsAllowList: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        serviceMeshProfile: Schema.optional(
          Schema.Struct({
            mode: Schema.Literals(["Istio", "Disabled"]),
            istio: Schema.optional(
              Schema.Struct({
                components: Schema.optional(
                  Schema.Struct({
                    ingressGateways: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          mode: Schema.Literals(["External", "Internal"]),
                          enabled: Schema.Boolean,
                        }),
                      ),
                    ),
                    egressGateways: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          enabled: Schema.Boolean,
                          name: Schema.String,
                          namespace: Schema.optional(Schema.String),
                          gatewayConfigurationName: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                    ),
                    proxyRedirectionMechanism: Schema.optional(
                      Schema.Literals(["InitContainers", "CNIChaining"]),
                    ),
                  }),
                ),
                certificateAuthority: Schema.optional(
                  Schema.Struct({
                    plugin: Schema.optional(
                      Schema.Struct({
                        keyVaultId: Schema.optional(Schema.String),
                        certObjectName: Schema.optional(Schema.String),
                        keyObjectName: Schema.optional(Schema.String),
                        rootCertObjectName: Schema.optional(Schema.String),
                        certChainObjectName: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
                revisions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          }),
        ),
        resourceUID: Schema.optional(Schema.String),
        metricsProfile: Schema.optional(
          Schema.Struct({
            costAnalysis: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        nodeProvisioningProfile: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(Schema.Literals(["Manual", "Auto"])),
            defaultNodePools: Schema.optional(
              Schema.Literals(["None", "Auto"]),
            ),
          }),
        ),
        bootstrapProfile: Schema.optional(
          Schema.Struct({
            artifactSource: Schema.optional(
              Schema.Literals(["Cache", "Direct"]),
            ),
            containerRegistryId: Schema.optional(Schema.String),
          }),
        ),
        aiToolchainOperatorProfile: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            provisioningError: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(Schema.Array(Schema.Unknown)),
                      additionalInfo: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            type: Schema.optional(Schema.String),
                            info: Schema.optional(Schema.Unknown),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                additionalInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(Schema.String),
                      info: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.Literals(["Base", "Automatic"])),
        tier: Schema.optional(Schema.Literals(["Premium", "Standard", "Free"])),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["EdgeZone"])),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
        ),
        delegatedResources: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              resourceId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              referralResource: Schema.optional(Schema.String),
              location: Schema.optional(Schema.String),
            }),
          ),
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
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersCreateOrUpdateInput =
  typeof ManagedClustersCreateOrUpdateInput.Type;

// Output Schema
export const ManagedClustersCreateOrUpdateOutput =
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
export type ManagedClustersCreateOrUpdateOutput =
  typeof ManagedClustersCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param if-match - The request should only proceed if an entity matches this string.
 * @param if-none-match - The request should only proceed if no entity matches this string.
 */
export const ManagedClustersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersCreateOrUpdateInput,
    outputSchema: ManagedClustersCreateOrUpdateOutput,
  }));
// Input Schema
export const ManagedClustersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersDeleteInput = typeof ManagedClustersDeleteInput.Type;

// Output Schema
export const ManagedClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedClustersDeleteOutput =
  typeof ManagedClustersDeleteOutput.Type;

// The operation
/**
 * Deletes a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param if-match - The request should only proceed if an entity matches this string.
 */
export const ManagedClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedClustersDeleteInput,
    outputSchema: ManagedClustersDeleteOutput,
  }),
);
// Input Schema
export const ManagedClustersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersGetInput = typeof ManagedClustersGetInput.Type;

// Output Schema
export const ManagedClustersGetOutput =
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
export type ManagedClustersGetOutput = typeof ManagedClustersGetOutput.Type;

// The operation
/**
 * Gets a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ManagedClustersGetInput,
  outputSchema: ManagedClustersGetOutput,
}));
// Input Schema
export const ManagedClustersGetCommandResultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    commandId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/commandResults/{commandId}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersGetCommandResultInput =
  typeof ManagedClustersGetCommandResultInput.Type;

// Output Schema
export const ManagedClustersGetCommandResultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        exitCode: Schema.optional(Schema.Number),
        startedAt: Schema.optional(Schema.String),
        finishedAt: Schema.optional(Schema.String),
        logs: Schema.optional(Schema.String),
        reason: Schema.optional(Schema.String),
      }),
    ),
  });
export type ManagedClustersGetCommandResultOutput =
  typeof ManagedClustersGetCommandResultOutput.Type;

// The operation
/**
 * Gets the results of a command which has been run on the Managed Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param commandId - Id of the command.
 */
export const ManagedClustersGetCommandResult =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersGetCommandResultInput,
    outputSchema: ManagedClustersGetCommandResultOutput,
  }));
// Input Schema
export const ManagedClustersGetMeshRevisionProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    mode: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/locations/{location}/meshRevisionProfiles/{mode}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersGetMeshRevisionProfileInput =
  typeof ManagedClustersGetMeshRevisionProfileInput.Type;

// Output Schema
export const ManagedClustersGetMeshRevisionProfileOutput =
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
export type ManagedClustersGetMeshRevisionProfileOutput =
  typeof ManagedClustersGetMeshRevisionProfileOutput.Type;

// The operation
/**
 * Gets a mesh revision profile for a specified mesh in the specified location.
 *
 * Contains extra metadata on the revision, including supported revisions, cluster compatibility and available upgrades
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param mode - The mode of the mesh.
 */
export const ManagedClustersGetMeshRevisionProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersGetMeshRevisionProfileInput,
    outputSchema: ManagedClustersGetMeshRevisionProfileOutput,
  }));
// Input Schema
export const ManagedClustersGetMeshUpgradeProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    mode: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/meshUpgradeProfiles/{mode}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersGetMeshUpgradeProfileInput =
  typeof ManagedClustersGetMeshUpgradeProfileInput.Type;

// Output Schema
export const ManagedClustersGetMeshUpgradeProfileOutput =
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
export type ManagedClustersGetMeshUpgradeProfileOutput =
  typeof ManagedClustersGetMeshUpgradeProfileOutput.Type;

// The operation
/**
 * Gets available upgrades for a service mesh in a cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param mode - The mode of the mesh.
 */
export const ManagedClustersGetMeshUpgradeProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersGetMeshUpgradeProfileInput,
    outputSchema: ManagedClustersGetMeshUpgradeProfileOutput,
  }));
// Input Schema
export const ManagedClustersGetUpgradeProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/upgradeProfiles/default",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersGetUpgradeProfileInput =
  typeof ManagedClustersGetUpgradeProfileInput.Type;

// Output Schema
export const ManagedClustersGetUpgradeProfileOutput =
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
export type ManagedClustersGetUpgradeProfileOutput =
  typeof ManagedClustersGetUpgradeProfileOutput.Type;

// The operation
/**
 * Gets the upgrade profile of a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersGetUpgradeProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersGetUpgradeProfileInput,
    outputSchema: ManagedClustersGetUpgradeProfileOutput,
  }));
// Input Schema
export const ManagedClustersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/managedClusters",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersListInput = typeof ManagedClustersListInput.Type;

// Output Schema
export const ManagedClustersListOutput =
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
export type ManagedClustersListOutput = typeof ManagedClustersListOutput.Type;

// The operation
/**
 * Gets a list of managed clusters in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ManagedClustersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ManagedClustersListInput,
  outputSchema: ManagedClustersListOutput,
}));
// Input Schema
export const ManagedClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersListByResourceGroupInput =
  typeof ManagedClustersListByResourceGroupInput.Type;

// Output Schema
export const ManagedClustersListByResourceGroupOutput =
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
export type ManagedClustersListByResourceGroupOutput =
  typeof ManagedClustersListByResourceGroupOutput.Type;

// The operation
/**
 * Lists managed clusters in the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ManagedClustersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListByResourceGroupInput,
    outputSchema: ManagedClustersListByResourceGroupOutput,
  }));
// Input Schema
export const ManagedClustersListClusterAdminCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    "server-fqdn": Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/listClusterAdminCredential",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersListClusterAdminCredentialsInput =
  typeof ManagedClustersListClusterAdminCredentialsInput.Type;

// Output Schema
export const ManagedClustersListClusterAdminCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kubeconfigs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ManagedClustersListClusterAdminCredentialsOutput =
  typeof ManagedClustersListClusterAdminCredentialsOutput.Type;

// The operation
/**
 * Lists the admin credentials of a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param server-fqdn - server fqdn type for credentials to be returned
 */
export const ManagedClustersListClusterAdminCredentials =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListClusterAdminCredentialsInput,
    outputSchema: ManagedClustersListClusterAdminCredentialsOutput,
  }));
// Input Schema
export const ManagedClustersListClusterMonitoringUserCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    "server-fqdn": Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/listClusterMonitoringUserCredential",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersListClusterMonitoringUserCredentialsInput =
  typeof ManagedClustersListClusterMonitoringUserCredentialsInput.Type;

// Output Schema
export const ManagedClustersListClusterMonitoringUserCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kubeconfigs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ManagedClustersListClusterMonitoringUserCredentialsOutput =
  typeof ManagedClustersListClusterMonitoringUserCredentialsOutput.Type;

// The operation
/**
 * Lists the cluster monitoring user credentials of a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param server-fqdn - server fqdn type for credentials to be returned
 */
export const ManagedClustersListClusterMonitoringUserCredentials =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListClusterMonitoringUserCredentialsInput,
    outputSchema: ManagedClustersListClusterMonitoringUserCredentialsOutput,
  }));
// Input Schema
export const ManagedClustersListClusterUserCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    "server-fqdn": Schema.optional(Schema.String),
    format: Schema.optional(Schema.Literals(["azure", "exec"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/listClusterUserCredential",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersListClusterUserCredentialsInput =
  typeof ManagedClustersListClusterUserCredentialsInput.Type;

// Output Schema
export const ManagedClustersListClusterUserCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kubeconfigs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ManagedClustersListClusterUserCredentialsOutput =
  typeof ManagedClustersListClusterUserCredentialsOutput.Type;

// The operation
/**
 * Lists the user credentials of a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param server-fqdn - server fqdn type for credentials to be returned
 * @param format - Only apply to AAD clusters, specifies the format of returned kubeconfig. Format 'azure' will return azure auth-provider kubeconfig; format 'exec' will return exec format kubeconfig, which requires kubelogin binary in the path.
 */
export const ManagedClustersListClusterUserCredentials =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListClusterUserCredentialsInput,
    outputSchema: ManagedClustersListClusterUserCredentialsOutput,
  }));
// Input Schema
export const ManagedClustersListKubernetesVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/locations/{location}/kubernetesVersions",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersListKubernetesVersionsInput =
  typeof ManagedClustersListKubernetesVersionsInput.Type;

// Output Schema
export const ManagedClustersListKubernetesVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(
      Schema.Array(
        Schema.Struct({
          version: Schema.optional(Schema.String),
          capabilities: Schema.optional(
            Schema.Struct({
              supportPlan: Schema.optional(
                Schema.Array(
                  Schema.Literals(["KubernetesOfficial", "AKSLongTermSupport"]),
                ),
              ),
            }),
          ),
          isDefault: Schema.optional(Schema.Boolean),
          isPreview: Schema.optional(Schema.Boolean),
          patchVersions: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                upgrades: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          ),
        }),
      ),
    ),
  });
export type ManagedClustersListKubernetesVersionsOutput =
  typeof ManagedClustersListKubernetesVersionsOutput.Type;

// The operation
/**
 * Gets a list of supported Kubernetes versions in the specified subscription.
 *
 * Contains extra metadata on the version, including supported patch versions, capabilities, available upgrades, and details on preview status of the version
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const ManagedClustersListKubernetesVersions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListKubernetesVersionsInput,
    outputSchema: ManagedClustersListKubernetesVersionsOutput,
  }));
// Input Schema
export const ManagedClustersListMeshRevisionProfilesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/locations/{location}/meshRevisionProfiles",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersListMeshRevisionProfilesInput =
  typeof ManagedClustersListMeshRevisionProfilesInput.Type;

// Output Schema
export const ManagedClustersListMeshRevisionProfilesOutput =
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
export type ManagedClustersListMeshRevisionProfilesOutput =
  typeof ManagedClustersListMeshRevisionProfilesOutput.Type;

// The operation
/**
 * Lists mesh revision profiles for all meshes in the specified location.
 *
 * Contains extra metadata on each revision, including supported revisions, cluster compatibility and available upgrades
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const ManagedClustersListMeshRevisionProfiles =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListMeshRevisionProfilesInput,
    outputSchema: ManagedClustersListMeshRevisionProfilesOutput,
  }));
// Input Schema
export const ManagedClustersListMeshUpgradeProfilesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/meshUpgradeProfiles",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersListMeshUpgradeProfilesInput =
  typeof ManagedClustersListMeshUpgradeProfilesInput.Type;

// Output Schema
export const ManagedClustersListMeshUpgradeProfilesOutput =
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
export type ManagedClustersListMeshUpgradeProfilesOutput =
  typeof ManagedClustersListMeshUpgradeProfilesOutput.Type;

// The operation
/**
 * Lists available upgrades for all service meshes in a specific cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersListMeshUpgradeProfiles =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListMeshUpgradeProfilesInput,
    outputSchema: ManagedClustersListMeshUpgradeProfilesOutput,
  }));
// Input Schema
export const ManagedClustersListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersListOutboundNetworkDependenciesEndpointsInput =
  typeof ManagedClustersListOutboundNetworkDependenciesEndpointsInput.Type;

// Output Schema
export const ManagedClustersListOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
                    protocol: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ManagedClustersListOutboundNetworkDependenciesEndpointsOutput =
  typeof ManagedClustersListOutboundNetworkDependenciesEndpointsOutput.Type;

// The operation
/**
 * Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified managed cluster.
 *
 * Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified managed cluster. The operation returns properties of each egress endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersListOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListOutboundNetworkDependenciesEndpointsInput,
    outputSchema: ManagedClustersListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export const ManagedClustersResetServicePrincipalProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    clientId: Schema.String,
    secret: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/resetServicePrincipalProfile",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersResetServicePrincipalProfileInput =
  typeof ManagedClustersResetServicePrincipalProfileInput.Type;

// Output Schema
export const ManagedClustersResetServicePrincipalProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedClustersResetServicePrincipalProfileOutput =
  typeof ManagedClustersResetServicePrincipalProfileOutput.Type;

// The operation
/**
 * Reset the Service Principal Profile of a managed cluster.
 *
 * This action cannot be performed on a cluster that is not using a service principal
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersResetServicePrincipalProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersResetServicePrincipalProfileInput,
    outputSchema: ManagedClustersResetServicePrincipalProfileOutput,
  }));
// Input Schema
export const ManagedClustersRotateClusterCertificatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/rotateClusterCertificates",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersRotateClusterCertificatesInput =
  typeof ManagedClustersRotateClusterCertificatesInput.Type;

// Output Schema
export const ManagedClustersRotateClusterCertificatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedClustersRotateClusterCertificatesOutput =
  typeof ManagedClustersRotateClusterCertificatesOutput.Type;

// The operation
/**
 * Rotates the certificates of a managed cluster.
 *
 * See [Certificate rotation](https://docs.microsoft.com/azure/aks/certificate-rotation) for more details about rotating managed cluster certificates.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersRotateClusterCertificates =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersRotateClusterCertificatesInput,
    outputSchema: ManagedClustersRotateClusterCertificatesOutput,
  }));
// Input Schema
export const ManagedClustersRotateServiceAccountSigningKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/rotateServiceAccountSigningKeys",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersRotateServiceAccountSigningKeysInput =
  typeof ManagedClustersRotateServiceAccountSigningKeysInput.Type;

// Output Schema
export const ManagedClustersRotateServiceAccountSigningKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedClustersRotateServiceAccountSigningKeysOutput =
  typeof ManagedClustersRotateServiceAccountSigningKeysOutput.Type;

// The operation
/**
 * Rotates the service account signing keys of a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersRotateServiceAccountSigningKeys =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersRotateServiceAccountSigningKeysInput,
    outputSchema: ManagedClustersRotateServiceAccountSigningKeysOutput,
  }));
// Input Schema
export const ManagedClustersRunCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    command: Schema.String,
    context: Schema.optional(Schema.String),
    clusterToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/runCommand",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersRunCommandInput =
  typeof ManagedClustersRunCommandInput.Type;

// Output Schema
export const ManagedClustersRunCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        exitCode: Schema.optional(Schema.Number),
        startedAt: Schema.optional(Schema.String),
        finishedAt: Schema.optional(Schema.String),
        logs: Schema.optional(Schema.String),
        reason: Schema.optional(Schema.String),
      }),
    ),
  });
export type ManagedClustersRunCommandOutput =
  typeof ManagedClustersRunCommandOutput.Type;

// The operation
/**
 * Submits a command to run against the Managed Cluster.
 *
 * AKS will create a pod to run the command. This is primarily useful for private clusters. For more information see [AKS Run Command](https://docs.microsoft.com/azure/aks/private-clusters#aks-run-command-preview).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersRunCommand = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedClustersRunCommandInput,
    outputSchema: ManagedClustersRunCommandOutput,
  }),
);
// Input Schema
export const ManagedClustersStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/start",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersStartInput = typeof ManagedClustersStartInput.Type;

// Output Schema
export const ManagedClustersStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedClustersStartOutput = typeof ManagedClustersStartOutput.Type;

// The operation
/**
 * Starts a previously stopped Managed Cluster
 *
 * See [starting a cluster](https://docs.microsoft.com/azure/aks/start-stop-cluster) for more details about starting a cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedClustersStartInput,
    outputSchema: ManagedClustersStartOutput,
  }),
);
// Input Schema
export const ManagedClustersStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/stop",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersStopInput = typeof ManagedClustersStopInput.Type;

// Output Schema
export const ManagedClustersStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedClustersStopOutput = typeof ManagedClustersStopOutput.Type;

// The operation
/**
 * Stops a Managed Cluster
 *
 * This can only be performed on Azure Virtual Machine Scale set backed clusters. Stopping a cluster stops the control plane and agent nodes entirely, while maintaining all object and cluster state. A cluster does not accrue charges while it is stopped. See [stopping a cluster](https://docs.microsoft.com/azure/aks/start-stop-cluster) for more details about stopping a cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedClustersStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ManagedClustersStopInput,
  outputSchema: ManagedClustersStopOutput,
}));
// Input Schema
export const ManagedClustersUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedClustersUpdateTagsInput =
  typeof ManagedClustersUpdateTagsInput.Type;

// Output Schema
export const ManagedClustersUpdateTagsOutput =
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
export type ManagedClustersUpdateTagsOutput =
  typeof ManagedClustersUpdateTagsOutput.Type;

// The operation
/**
 * Updates tags on a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param if-match - The request should only proceed if an entity matches this string.
 */
export const ManagedClustersUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedClustersUpdateTagsInput,
    outputSchema: ManagedClustersUpdateTagsOutput,
  }),
);
// Input Schema
export const ManagedNamespacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    managedNamespaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Updating",
            "Deleting",
            "Creating",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        annotations: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        portalFqdn: Schema.optional(Schema.String),
        defaultResourceQuota: Schema.optional(
          Schema.Struct({
            cpuRequest: Schema.optional(Schema.String),
            cpuLimit: Schema.optional(Schema.String),
            memoryRequest: Schema.optional(Schema.String),
            memoryLimit: Schema.optional(Schema.String),
          }),
        ),
        defaultNetworkPolicy: Schema.optional(
          Schema.Struct({
            ingress: Schema.optional(
              Schema.Literals(["DenyAll", "AllowAll", "AllowSameNamespace"]),
            ),
            egress: Schema.optional(
              Schema.Literals(["DenyAll", "AllowAll", "AllowSameNamespace"]),
            ),
          }),
        ),
        adoptionPolicy: Schema.optional(
          Schema.Literals(["Never", "IfIdentical", "Always"]),
        ),
        deletePolicy: Schema.optional(Schema.Literals(["Keep", "Delete"])),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/managedNamespaces/{managedNamespaceName}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedNamespacesCreateOrUpdateInput =
  typeof ManagedNamespacesCreateOrUpdateInput.Type;

// Output Schema
export const ManagedNamespacesCreateOrUpdateOutput =
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
export type ManagedNamespacesCreateOrUpdateOutput =
  typeof ManagedNamespacesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a namespace managed by ARM for the specified managed cluster. Users can configure aspects like resource quotas, network ingress/egress policies, and more. See aka.ms/aks/managed-namespaces for more details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param managedNamespaceName - The name of the managed namespace.
 */
export const ManagedNamespacesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedNamespacesCreateOrUpdateInput,
    outputSchema: ManagedNamespacesCreateOrUpdateOutput,
  }));
// Input Schema
export const ManagedNamespacesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    managedNamespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/managedNamespaces/{managedNamespaceName}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedNamespacesDeleteInput =
  typeof ManagedNamespacesDeleteInput.Type;

// Output Schema
export const ManagedNamespacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedNamespacesDeleteOutput =
  typeof ManagedNamespacesDeleteOutput.Type;

// The operation
/**
 * Deletes a namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param managedNamespaceName - The name of the managed namespace.
 */
export const ManagedNamespacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNamespacesDeleteInput,
    outputSchema: ManagedNamespacesDeleteOutput,
  }),
);
// Input Schema
export const ManagedNamespacesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    managedNamespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/managedNamespaces/{managedNamespaceName}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedNamespacesGetInput = typeof ManagedNamespacesGetInput.Type;

// Output Schema
export const ManagedNamespacesGetOutput =
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
export type ManagedNamespacesGetOutput = typeof ManagedNamespacesGetOutput.Type;

// The operation
/**
 * Gets the specified namespace of a managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param managedNamespaceName - The name of the managed namespace.
 */
export const ManagedNamespacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNamespacesGetInput,
    outputSchema: ManagedNamespacesGetOutput,
  }),
);
// Input Schema
export const ManagedNamespacesListByManagedClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/managedNamespaces",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedNamespacesListByManagedClusterInput =
  typeof ManagedNamespacesListByManagedClusterInput.Type;

// Output Schema
export const ManagedNamespacesListByManagedClusterOutput =
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
export type ManagedNamespacesListByManagedClusterOutput =
  typeof ManagedNamespacesListByManagedClusterOutput.Type;

// The operation
/**
 * Gets a list of managed namespaces in the specified managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ManagedNamespacesListByManagedCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedNamespacesListByManagedClusterInput,
    outputSchema: ManagedNamespacesListByManagedClusterOutput,
  }));
// Input Schema
export const ManagedNamespacesListCredentialInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    managedNamespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/managedNamespaces/{managedNamespaceName}/listCredential",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedNamespacesListCredentialInput =
  typeof ManagedNamespacesListCredentialInput.Type;

// Output Schema
export const ManagedNamespacesListCredentialOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kubeconfigs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ManagedNamespacesListCredentialOutput =
  typeof ManagedNamespacesListCredentialOutput.Type;

// The operation
/**
 * Lists the credentials of a namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param managedNamespaceName - The name of the managed namespace.
 */
export const ManagedNamespacesListCredential =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedNamespacesListCredentialInput,
    outputSchema: ManagedNamespacesListCredentialOutput,
  }));
// Input Schema
export const ManagedNamespacesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    managedNamespaceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/managedNamespaces/{managedNamespaceName}",
      apiVersion: "2026-01-01",
    }),
  );
export type ManagedNamespacesUpdateInput =
  typeof ManagedNamespacesUpdateInput.Type;

// Output Schema
export const ManagedNamespacesUpdateOutput =
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
export type ManagedNamespacesUpdateOutput =
  typeof ManagedNamespacesUpdateOutput.Type;

// The operation
/**
 * Updates tags on a managed namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param managedNamespaceName - The name of the managed namespace.
 */
export const ManagedNamespacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNamespacesUpdateInput,
    outputSchema: ManagedNamespacesUpdateOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ContainerService/operations",
    apiVersion: "2025-07-01",
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
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  );
export type PrivateEndpointConnectionsDeleteInput =
  typeof PrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionsDeleteOutput =
  typeof PrivateEndpointConnectionsDeleteOutput.Type;

// The operation
/**
 * Deletes a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionsGetOutput =
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
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Gets the specified private endpoint connection.
 *
 * To learn more about private clusters, see: https://docs.microsoft.com/azure/aks/private-clusters
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/privateEndpointConnections",
      apiVersion: "2026-01-01",
    }),
  );
export type PrivateEndpointConnectionsListInput =
  typeof PrivateEndpointConnectionsListInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PrivateEndpointConnectionsListOutput =
  typeof PrivateEndpointConnectionsListOutput.Type;

// The operation
/**
 * Gets a list of private endpoint connections in the specified managed cluster.
 *
 * To learn more about private clusters, see: https://docs.microsoft.com/azure/aks/private-clusters
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Canceled",
            "Creating",
            "Deleting",
            "Failed",
            "Succeeded",
          ]),
        ),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(
            Schema.Literals([
              "Pending",
              "Approved",
              "Rejected",
              "Disconnected",
            ]),
          ),
          description: Schema.optional(Schema.String),
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  );
export type PrivateEndpointConnectionsUpdateInput =
  typeof PrivateEndpointConnectionsUpdateInput.Type;

// Output Schema
export const PrivateEndpointConnectionsUpdateOutput =
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
export type PrivateEndpointConnectionsUpdateOutput =
  typeof PrivateEndpointConnectionsUpdateOutput.Type;

// The operation
/**
 * Updates a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateInput,
    outputSchema: PrivateEndpointConnectionsUpdateOutput,
  }));
// Input Schema
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/privateLinkResources",
      apiVersion: "2026-01-01",
    }),
  );
export type PrivateLinkResourcesListInput =
  typeof PrivateLinkResourcesListInput.Type;

// Output Schema
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          groupId: Schema.optional(Schema.String),
          requiredMembers: Schema.optional(Schema.Array(Schema.String)),
          privateLinkServiceID: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type PrivateLinkResourcesListOutput =
  typeof PrivateLinkResourcesListOutput.Type;

// The operation
/**
 * Gets a list of private link resources in the specified managed cluster.
 *
 * To learn more about private clusters, see: https://docs.microsoft.com/azure/aks/private-clusters
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesListInput,
    outputSchema: PrivateLinkResourcesListOutput,
  }),
);
// Input Schema
export const ResolvePrivateLinkServiceIdPOSTInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
    requiredMembers: Schema.optional(Schema.Array(Schema.String)),
    privateLinkServiceID: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/resolvePrivateLinkServiceId",
      apiVersion: "2026-01-01",
    }),
  );
export type ResolvePrivateLinkServiceIdPOSTInput =
  typeof ResolvePrivateLinkServiceIdPOSTInput.Type;

// Output Schema
export const ResolvePrivateLinkServiceIdPOSTOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
    requiredMembers: Schema.optional(Schema.Array(Schema.String)),
    privateLinkServiceID: Schema.optional(Schema.String),
  });
export type ResolvePrivateLinkServiceIdPOSTOutput =
  typeof ResolvePrivateLinkServiceIdPOSTOutput.Type;

// The operation
/**
 * Gets the private link service ID for the specified managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const ResolvePrivateLinkServiceIdPOST =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResolvePrivateLinkServiceIdPOSTInput,
    outputSchema: ResolvePrivateLinkServiceIdPOSTOutput,
  }));
// Input Schema
export const SnapshotsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        creationData: Schema.optional(
          Schema.Struct({
            sourceResourceId: Schema.optional(Schema.String),
          }),
        ),
        snapshotType: Schema.optional(Schema.Literals(["NodePool"])),
        kubernetesVersion: Schema.optional(Schema.String),
        nodeImageVersion: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.Literals(["Linux", "Windows"])),
        osSku: Schema.optional(
          Schema.Literals([
            "Ubuntu",
            "AzureLinux",
            "AzureLinux3",
            "CBLMariner",
            "Windows2019",
            "Windows2022",
            "Ubuntu2204",
            "Ubuntu2404",
          ]),
        ),
        vmSize: Schema.optional(Schema.String),
        enableFIPS: Schema.optional(Schema.Boolean),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/snapshots/{resourceName}",
      apiVersion: "2026-01-01",
    }),
  );
export type SnapshotsCreateOrUpdateInput =
  typeof SnapshotsCreateOrUpdateInput.Type;

// Output Schema
export const SnapshotsCreateOrUpdateOutput =
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
export type SnapshotsCreateOrUpdateOutput =
  typeof SnapshotsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const SnapshotsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SnapshotsCreateOrUpdateInput,
    outputSchema: SnapshotsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const SnapshotsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/snapshots/{resourceName}",
    apiVersion: "2026-01-01",
  }),
);
export type SnapshotsDeleteInput = typeof SnapshotsDeleteInput.Type;

// Output Schema
export const SnapshotsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SnapshotsDeleteOutput = typeof SnapshotsDeleteOutput.Type;

// The operation
/**
 * Deletes a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const SnapshotsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsDeleteInput,
  outputSchema: SnapshotsDeleteOutput,
}));
// Input Schema
export const SnapshotsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/snapshots/{resourceName}",
    apiVersion: "2026-01-01",
  }),
);
export type SnapshotsGetInput = typeof SnapshotsGetInput.Type;

// Output Schema
export const SnapshotsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type SnapshotsGetOutput = typeof SnapshotsGetOutput.Type;

// The operation
/**
 * Gets a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const SnapshotsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsGetInput,
  outputSchema: SnapshotsGetOutput,
}));
// Input Schema
export const SnapshotsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/snapshots",
    apiVersion: "2026-01-01",
  }),
);
export type SnapshotsListInput = typeof SnapshotsListInput.Type;

// Output Schema
export const SnapshotsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type SnapshotsListOutput = typeof SnapshotsListOutput.Type;

// The operation
/**
 * Gets a list of snapshots in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SnapshotsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsListInput,
  outputSchema: SnapshotsListOutput,
}));
// Input Schema
export const SnapshotsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/snapshots",
      apiVersion: "2026-01-01",
    }),
  );
export type SnapshotsListByResourceGroupInput =
  typeof SnapshotsListByResourceGroupInput.Type;

// Output Schema
export const SnapshotsListByResourceGroupOutput =
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
export type SnapshotsListByResourceGroupOutput =
  typeof SnapshotsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists snapshots in the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SnapshotsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SnapshotsListByResourceGroupInput,
    outputSchema: SnapshotsListByResourceGroupOutput,
  }));
// Input Schema
export const SnapshotsUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/snapshots/{resourceName}",
      apiVersion: "2026-01-01",
    }),
  );
export type SnapshotsUpdateTagsInput = typeof SnapshotsUpdateTagsInput.Type;

// Output Schema
export const SnapshotsUpdateTagsOutput =
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
export type SnapshotsUpdateTagsOutput = typeof SnapshotsUpdateTagsOutput.Type;

// The operation
/**
 * Updates tags on a snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const SnapshotsUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsUpdateTagsInput,
  outputSchema: SnapshotsUpdateTagsOutput,
}));
// Input Schema
export const TrustedAccessRoleBindingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    trustedAccessRoleBindingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Canceled",
          "Deleting",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      sourceResourceId: Schema.String,
      roles: Schema.Array(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/trustedAccessRoleBindings/{trustedAccessRoleBindingName}",
      apiVersion: "2026-01-01",
    }),
  );
export type TrustedAccessRoleBindingsCreateOrUpdateInput =
  typeof TrustedAccessRoleBindingsCreateOrUpdateInput.Type;

// Output Schema
export const TrustedAccessRoleBindingsCreateOrUpdateOutput =
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
export type TrustedAccessRoleBindingsCreateOrUpdateOutput =
  typeof TrustedAccessRoleBindingsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a trusted access role binding
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param trustedAccessRoleBindingName - The name of trusted access role binding.
 */
export const TrustedAccessRoleBindingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrustedAccessRoleBindingsCreateOrUpdateInput,
    outputSchema: TrustedAccessRoleBindingsCreateOrUpdateOutput,
  }));
// Input Schema
export const TrustedAccessRoleBindingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    trustedAccessRoleBindingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/trustedAccessRoleBindings/{trustedAccessRoleBindingName}",
      apiVersion: "2026-01-01",
    }),
  );
export type TrustedAccessRoleBindingsDeleteInput =
  typeof TrustedAccessRoleBindingsDeleteInput.Type;

// Output Schema
export const TrustedAccessRoleBindingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TrustedAccessRoleBindingsDeleteOutput =
  typeof TrustedAccessRoleBindingsDeleteOutput.Type;

// The operation
/**
 * Delete a trusted access role binding.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param trustedAccessRoleBindingName - The name of trusted access role binding.
 */
export const TrustedAccessRoleBindingsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrustedAccessRoleBindingsDeleteInput,
    outputSchema: TrustedAccessRoleBindingsDeleteOutput,
  }));
// Input Schema
export const TrustedAccessRoleBindingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    trustedAccessRoleBindingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/trustedAccessRoleBindings/{trustedAccessRoleBindingName}",
      apiVersion: "2026-01-01",
    }),
  );
export type TrustedAccessRoleBindingsGetInput =
  typeof TrustedAccessRoleBindingsGetInput.Type;

// Output Schema
export const TrustedAccessRoleBindingsGetOutput =
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
export type TrustedAccessRoleBindingsGetOutput =
  typeof TrustedAccessRoleBindingsGetOutput.Type;

// The operation
/**
 * Get a trusted access role binding.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 * @param trustedAccessRoleBindingName - The name of trusted access role binding.
 */
export const TrustedAccessRoleBindingsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrustedAccessRoleBindingsGetInput,
    outputSchema: TrustedAccessRoleBindingsGetOutput,
  }));
// Input Schema
export const TrustedAccessRoleBindingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/trustedAccessRoleBindings",
      apiVersion: "2026-01-01",
    }),
  );
export type TrustedAccessRoleBindingsListInput =
  typeof TrustedAccessRoleBindingsListInput.Type;

// Output Schema
export const TrustedAccessRoleBindingsListOutput =
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
export type TrustedAccessRoleBindingsListOutput =
  typeof TrustedAccessRoleBindingsListOutput.Type;

// The operation
/**
 * List trusted access role bindings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the managed cluster resource.
 */
export const TrustedAccessRoleBindingsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrustedAccessRoleBindingsListInput,
    outputSchema: TrustedAccessRoleBindingsListOutput,
  }));
// Input Schema
export const TrustedAccessRolesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/locations/{location}/trustedAccessRoles",
      apiVersion: "2026-01-01",
    }),
  );
export type TrustedAccessRolesListInput =
  typeof TrustedAccessRolesListInput.Type;

// Output Schema
export const TrustedAccessRolesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        sourceResourceType: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              verbs: Schema.optional(Schema.Array(Schema.String)),
              apiGroups: Schema.optional(Schema.Array(Schema.String)),
              resources: Schema.optional(Schema.Array(Schema.String)),
              resourceNames: Schema.optional(Schema.Array(Schema.String)),
              nonResourceURLs: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type TrustedAccessRolesListOutput =
  typeof TrustedAccessRolesListOutput.Type;

// The operation
/**
 * List supported trusted access roles.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const TrustedAccessRolesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TrustedAccessRolesListInput,
    outputSchema: TrustedAccessRolesListOutput,
  }),
);
// Input Schema
export const UpdateRunsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    updateRunName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        updateStrategyId: Schema.optional(Schema.String),
        strategy: Schema.optional(
          Schema.Struct({
            stages: Schema.Array(
              Schema.Struct({
                name: Schema.String,
                groups: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                    }),
                  ),
                ),
                afterStageWaitInSeconds: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        managedClusterUpdate: Schema.Struct({
          upgrade: Schema.Struct({
            type: Schema.Literals([
              "Full",
              "NodeImageOnly",
              "ControlPlaneOnly",
            ]),
            kubernetesVersion: Schema.optional(Schema.String),
          }),
          nodeImageSelection: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["Latest", "Consistent", "Custom"]),
              customNodeImageVersions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    version: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
        status: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Struct({
                startTime: Schema.optional(Schema.String),
                completedTime: Schema.optional(Schema.String),
                state: Schema.optional(
                  Schema.Literals([
                    "NotStarted",
                    "Running",
                    "Stopping",
                    "Stopped",
                    "Skipped",
                    "Failed",
                    "Pending",
                    "Completed",
                  ]),
                ),
                error: Schema.optional(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    target: Schema.optional(Schema.String),
                    details: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          target: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(Schema.Unknown),
                          ),
                          additionalInfo: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                type: Schema.optional(Schema.String),
                                info: Schema.optional(Schema.Unknown),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                    additionalInfo: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          type: Schema.optional(Schema.String),
                          info: Schema.optional(Schema.Unknown),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            stages: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  status: Schema.optional(
                    Schema.Struct({
                      startTime: Schema.optional(Schema.String),
                      completedTime: Schema.optional(Schema.String),
                      state: Schema.optional(
                        Schema.Literals([
                          "NotStarted",
                          "Running",
                          "Stopping",
                          "Stopped",
                          "Skipped",
                          "Failed",
                          "Pending",
                          "Completed",
                        ]),
                      ),
                      error: Schema.optional(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          target: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                code: Schema.optional(Schema.String),
                                message: Schema.optional(Schema.String),
                                target: Schema.optional(Schema.String),
                                details: Schema.optional(
                                  Schema.Array(Schema.Unknown),
                                ),
                                additionalInfo: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      type: Schema.optional(Schema.String),
                                      info: Schema.optional(Schema.Unknown),
                                    }),
                                  ),
                                ),
                              }),
                            ),
                          ),
                          additionalInfo: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                type: Schema.optional(Schema.String),
                                info: Schema.optional(Schema.Unknown),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                  name: Schema.optional(Schema.String),
                  groups: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        status: Schema.optional(
                          Schema.Struct({
                            startTime: Schema.optional(Schema.String),
                            completedTime: Schema.optional(Schema.String),
                            state: Schema.optional(
                              Schema.Literals([
                                "NotStarted",
                                "Running",
                                "Stopping",
                                "Stopped",
                                "Skipped",
                                "Failed",
                                "Pending",
                                "Completed",
                              ]),
                            ),
                            error: Schema.optional(
                              Schema.Struct({
                                code: Schema.optional(Schema.String),
                                message: Schema.optional(Schema.String),
                                target: Schema.optional(Schema.String),
                                details: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      code: Schema.optional(Schema.String),
                                      message: Schema.optional(Schema.String),
                                      target: Schema.optional(Schema.String),
                                      details: Schema.optional(
                                        Schema.Array(Schema.Unknown),
                                      ),
                                      additionalInfo: Schema.optional(
                                        Schema.Array(
                                          Schema.Struct({
                                            type: Schema.optional(
                                              Schema.String,
                                            ),
                                            info: Schema.optional(
                                              Schema.Unknown,
                                            ),
                                          }),
                                        ),
                                      ),
                                    }),
                                  ),
                                ),
                                additionalInfo: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      type: Schema.optional(Schema.String),
                                      info: Schema.optional(Schema.Unknown),
                                    }),
                                  ),
                                ),
                              }),
                            ),
                          }),
                        ),
                        name: Schema.optional(Schema.String),
                        members: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              status: Schema.optional(
                                Schema.Struct({
                                  startTime: Schema.optional(Schema.String),
                                  completedTime: Schema.optional(Schema.String),
                                  state: Schema.optional(
                                    Schema.Literals([
                                      "NotStarted",
                                      "Running",
                                      "Stopping",
                                      "Stopped",
                                      "Skipped",
                                      "Failed",
                                      "Pending",
                                      "Completed",
                                    ]),
                                  ),
                                  error: Schema.optional(
                                    Schema.Struct({
                                      code: Schema.optional(Schema.String),
                                      message: Schema.optional(Schema.String),
                                      target: Schema.optional(Schema.String),
                                      details: Schema.optional(
                                        Schema.Array(
                                          Schema.Struct({
                                            code: Schema.optional(
                                              Schema.String,
                                            ),
                                            message: Schema.optional(
                                              Schema.String,
                                            ),
                                            target: Schema.optional(
                                              Schema.String,
                                            ),
                                            details: Schema.optional(
                                              Schema.Array(Schema.Unknown),
                                            ),
                                            additionalInfo: Schema.optional(
                                              Schema.Array(
                                                Schema.Struct({
                                                  type: Schema.optional(
                                                    Schema.String,
                                                  ),
                                                  info: Schema.optional(
                                                    Schema.Unknown,
                                                  ),
                                                }),
                                              ),
                                            ),
                                          }),
                                        ),
                                      ),
                                      additionalInfo: Schema.optional(
                                        Schema.Array(
                                          Schema.Struct({
                                            type: Schema.optional(
                                              Schema.String,
                                            ),
                                            info: Schema.optional(
                                              Schema.Unknown,
                                            ),
                                          }),
                                        ),
                                      ),
                                    }),
                                  ),
                                }),
                              ),
                              name: Schema.optional(Schema.String),
                              clusterResourceId: Schema.optional(Schema.String),
                              operationId: Schema.optional(Schema.String),
                              message: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                      }),
                    ),
                  ),
                  afterStageWaitStatus: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(
                        Schema.Struct({
                          startTime: Schema.optional(Schema.String),
                          completedTime: Schema.optional(Schema.String),
                          state: Schema.optional(
                            Schema.Literals([
                              "NotStarted",
                              "Running",
                              "Stopping",
                              "Stopped",
                              "Skipped",
                              "Failed",
                              "Pending",
                              "Completed",
                            ]),
                          ),
                          error: Schema.optional(
                            Schema.Struct({
                              code: Schema.optional(Schema.String),
                              message: Schema.optional(Schema.String),
                              target: Schema.optional(Schema.String),
                              details: Schema.optional(
                                Schema.Array(
                                  Schema.Struct({
                                    code: Schema.optional(Schema.String),
                                    message: Schema.optional(Schema.String),
                                    target: Schema.optional(Schema.String),
                                    details: Schema.optional(
                                      Schema.Array(Schema.Unknown),
                                    ),
                                    additionalInfo: Schema.optional(
                                      Schema.Array(
                                        Schema.Struct({
                                          type: Schema.optional(Schema.String),
                                          info: Schema.optional(Schema.Unknown),
                                        }),
                                      ),
                                    ),
                                  }),
                                ),
                              ),
                              additionalInfo: Schema.optional(
                                Schema.Array(
                                  Schema.Struct({
                                    type: Schema.optional(Schema.String),
                                    info: Schema.optional(Schema.Unknown),
                                  }),
                                ),
                              ),
                            }),
                          ),
                        }),
                      ),
                      waitDurationInSeconds: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            ),
            nodeImageSelection: Schema.optional(
              Schema.Struct({
                selectedNodeImageVersions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      version: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        autoUpgradeProfileId: Schema.optional(Schema.String),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}",
      apiVersion: "2025-03-01",
    }),
  );
export type UpdateRunsCreateOrUpdateInput =
  typeof UpdateRunsCreateOrUpdateInput.Type;

// Output Schema
export const UpdateRunsCreateOrUpdateOutput =
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
export type UpdateRunsCreateOrUpdateOutput =
  typeof UpdateRunsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a UpdateRun
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param If-None-Match - The request should only proceed if no entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param updateRunName - The name of the UpdateRun resource.
 */
export const UpdateRunsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateRunsCreateOrUpdateInput,
    outputSchema: UpdateRunsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const UpdateRunsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  updateRunName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}",
    apiVersion: "2025-03-01",
  }),
);
export type UpdateRunsDeleteInput = typeof UpdateRunsDeleteInput.Type;

// Output Schema
export const UpdateRunsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateRunsDeleteOutput = typeof UpdateRunsDeleteOutput.Type;

// The operation
/**
 * Delete a UpdateRun
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param updateRunName - The name of the UpdateRun resource.
 */
export const UpdateRunsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRunsDeleteInput,
  outputSchema: UpdateRunsDeleteOutput,
}));
// Input Schema
export const UpdateRunsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  updateRunName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}",
    apiVersion: "2025-03-01",
  }),
);
export type UpdateRunsGetInput = typeof UpdateRunsGetInput.Type;

// Output Schema
export const UpdateRunsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type UpdateRunsGetOutput = typeof UpdateRunsGetOutput.Type;

// The operation
/**
 * Get a UpdateRun
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 * @param updateRunName - The name of the UpdateRun resource.
 */
export const UpdateRunsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRunsGetInput,
  outputSchema: UpdateRunsGetOutput,
}));
// Input Schema
export const UpdateRunsListByFleetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns",
      apiVersion: "2025-03-01",
    }),
  );
export type UpdateRunsListByFleetInput = typeof UpdateRunsListByFleetInput.Type;

// Output Schema
export const UpdateRunsListByFleetOutput =
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
export type UpdateRunsListByFleetOutput =
  typeof UpdateRunsListByFleetOutput.Type;

// The operation
/**
 * List UpdateRun resources by Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Fleet resource.
 */
export const UpdateRunsListByFleet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateRunsListByFleetInput,
    outputSchema: UpdateRunsListByFleetOutput,
  }),
);
// Input Schema
export const UpdateRunsSkipInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  updateRunName: Schema.String.pipe(T.PathParam()),
  targets: Schema.Array(
    Schema.Struct({
      type: Schema.Literals(["Member", "Group", "Stage", "AfterStageWait"]),
      name: Schema.String,
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/skip",
    apiVersion: "2025-03-01",
  }),
);
export type UpdateRunsSkipInput = typeof UpdateRunsSkipInput.Type;

// Output Schema
export const UpdateRunsSkipOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type UpdateRunsSkipOutput = typeof UpdateRunsSkipOutput.Type;

// The operation
/**
 * Skips one or a combination of member/group/stage/afterStageWait(s) of an update run.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param updateRunName - The name of the UpdateRun resource.
 */
export const UpdateRunsSkip = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRunsSkipInput,
  outputSchema: UpdateRunsSkipOutput,
}));
// Input Schema
export const UpdateRunsStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  updateRunName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/start",
    apiVersion: "2025-03-01",
  }),
);
export type UpdateRunsStartInput = typeof UpdateRunsStartInput.Type;

// Output Schema
export const UpdateRunsStartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type UpdateRunsStartOutput = typeof UpdateRunsStartOutput.Type;

// The operation
/**
 * Starts an UpdateRun.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param updateRunName - The name of the UpdateRun resource.
 */
export const UpdateRunsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRunsStartInput,
  outputSchema: UpdateRunsStartOutput,
}));
// Input Schema
export const UpdateRunsStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  updateRunName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/fleets/{fleetName}/updateRuns/{updateRunName}/stop",
    apiVersion: "2025-03-01",
  }),
);
export type UpdateRunsStopInput = typeof UpdateRunsStopInput.Type;

// Output Schema
export const UpdateRunsStopOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type UpdateRunsStopOutput = typeof UpdateRunsStopOutput.Type;

// The operation
/**
 * Stops an UpdateRun.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param If-Match - The request should only proceed if an entity matches this string.
 * @param fleetName - The name of the Fleet resource.
 * @param updateRunName - The name of the UpdateRun resource.
 */
export const UpdateRunsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRunsStopInput,
  outputSchema: UpdateRunsStopOutput,
}));
