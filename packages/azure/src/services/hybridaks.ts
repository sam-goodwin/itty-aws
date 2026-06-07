/**
 * Azure Hybridaks API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AgentPoolCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        osType: Schema.optional(Schema.Literals(["Linux", "Windows"])),
        osSKU: Schema.optional(
          Schema.Literals(["CBLMariner", "Windows2019", "Windows2022"]),
        ),
        nodeLabels: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        nodeTaints: Schema.optional(Schema.Array(Schema.String)),
        maxCount: Schema.optional(Schema.Number),
        minCount: Schema.optional(Schema.Number),
        enableAutoScaling: Schema.optional(Schema.Boolean),
        maxPods: Schema.optional(Schema.Number),
        count: Schema.optional(Schema.Number),
        vmSize: Schema.optional(Schema.String),
        kubernetesVersion: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Creating",
            "Deleting",
            "Updating",
            "Upgrading",
            "Accepted",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            currentState: Schema.optional(
              Schema.Literals([
                "Succeeded",
                "Failed",
                "Canceled",
                "Pending",
                "Creating",
                "Deleting",
                "Updating",
                "Upgrading",
                "Accepted",
              ]),
            ),
            errorMessage: Schema.optional(Schema.String),
            readyReplicas: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  count: Schema.optional(Schema.Number),
                  vmSize: Schema.optional(Schema.String),
                  kubernetesVersion: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
        name: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools/{agentPoolName}",
      apiVersion: "2024-01-01",
    }),
  );
export type AgentPoolCreateOrUpdateInput =
  typeof AgentPoolCreateOrUpdateInput.Type;

// Output Schema
export const AgentPoolCreateOrUpdateOutput =
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
export type AgentPoolCreateOrUpdateOutput =
  typeof AgentPoolCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates the agent pool in the provisioned cluster
 *
 * @param api-version - The API version to use for this operation.
 */
export const agentPoolCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentPoolCreateOrUpdateInput,
    outputSchema: AgentPoolCreateOrUpdateOutput,
  }),
);
// Input Schema
export const AgentPoolDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools/{agentPoolName}",
    apiVersion: "2024-01-01",
  }),
);
export type AgentPoolDeleteInput = typeof AgentPoolDeleteInput.Type;

// Output Schema
export const AgentPoolDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentPoolDeleteOutput = typeof AgentPoolDeleteOutput.Type;

// The operation
/**
 * Deletes the specified agent pool in the provisioned cluster
 *
 * @param api-version - The API version to use for this operation.
 */
export const agentPoolDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolDeleteInput,
  outputSchema: AgentPoolDeleteOutput,
}));
// Input Schema
export const AgentPoolGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools/{agentPoolName}",
    apiVersion: "2024-01-01",
  }),
);
export type AgentPoolGetInput = typeof AgentPoolGetInput.Type;

// Output Schema
export const AgentPoolGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type AgentPoolGetOutput = typeof AgentPoolGetOutput.Type;

// The operation
/**
 * Gets the specified agent pool in the provisioned cluster
 *
 * @param api-version - The API version to use for this operation.
 */
export const agentPoolGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolGetInput,
  outputSchema: AgentPoolGetOutput,
}));
// Input Schema
export const AgentPoolListByProvisionedClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools",
      apiVersion: "2024-01-01",
    }),
  );
export type AgentPoolListByProvisionedClusterInput =
  typeof AgentPoolListByProvisionedClusterInput.Type;

// Output Schema
export const AgentPoolListByProvisionedClusterOutput =
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
    nextLink: Schema.optional(Schema.String),
  });
export type AgentPoolListByProvisionedClusterOutput =
  typeof AgentPoolListByProvisionedClusterOutput.Type;

// The operation
/**
 * Gets the list of agent pools in the specified provisioned cluster
 *
 * @param api-version - The API version to use for this operation.
 */
export const agentPoolListByProvisionedCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentPoolListByProvisionedClusterInput,
    outputSchema: AgentPoolListByProvisionedClusterOutput,
  }));
// Input Schema
export const DeleteKubernetesVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/kubernetesVersions/default",
      apiVersion: "2024-01-01",
    }),
  );
export type DeleteKubernetesVersionsInput =
  typeof DeleteKubernetesVersionsInput.Type;

// Output Schema
export const DeleteKubernetesVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteKubernetesVersionsOutput =
  typeof DeleteKubernetesVersionsOutput.Type;

// The operation
/**
 * Deletes the default kubernetes version resource type
 *
 * Delete the default kubernetes versions resource type
 *
 * @param api-version - The API version to use for this operation.
 */
export const DeleteKubernetesVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteKubernetesVersionsInput,
    outputSchema: DeleteKubernetesVersionsOutput,
  }),
);
// Input Schema
export const DeleteVMSkusInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/skus/default",
    apiVersion: "2024-01-01",
  }),
);
export type DeleteVMSkusInput = typeof DeleteVMSkusInput.Type;

// Output Schema
export const DeleteVMSkusOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteVMSkusOutput = typeof DeleteVMSkusOutput.Type;

// The operation
/**
 * Deletes the default VM skus resource type
 *
 * @param api-version - The API version to use for this operation.
 */
export const DeleteVMSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteVMSkusInput,
  outputSchema: DeleteVMSkusOutput,
}));
// Input Schema
export const GetKubernetesVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/kubernetesVersions/default",
      apiVersion: "2024-01-01",
    }),
  );
export type GetKubernetesVersionsInput = typeof GetKubernetesVersionsInput.Type;

// Output Schema
export const GetKubernetesVersionsOutput =
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
export type GetKubernetesVersionsOutput =
  typeof GetKubernetesVersionsOutput.Type;

// The operation
/**
 * Lists the supported kubernetes versions
 *
 * Lists the supported kubernetes versions for the specified custom location
 *
 * @param api-version - The API version to use for this operation.
 */
export const GetKubernetesVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetKubernetesVersionsInput,
    outputSchema: GetKubernetesVersionsOutput,
  }),
);
// Input Schema
export const GetVMSkusInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/skus/default",
    apiVersion: "2024-01-01",
  }),
);
export type GetVMSkusInput = typeof GetVMSkusInput.Type;

// Output Schema
export const GetVMSkusOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type GetVMSkusOutput = typeof GetVMSkusOutput.Type;

// The operation
/**
 * Lists the supported VM skus
 *
 * Lists the supported VM skus for the specified custom location
 *
 * @param api-version - The API version to use for this operation.
 */
export const GetVMSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetVMSkusInput,
  outputSchema: GetVMSkusOutput,
}));
// Input Schema
export const HybridIdentityMetadataDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2024-01-01",
    }),
  );
export type HybridIdentityMetadataDeleteInput =
  typeof HybridIdentityMetadataDeleteInput.Type;

// Output Schema
export const HybridIdentityMetadataDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HybridIdentityMetadataDeleteOutput =
  typeof HybridIdentityMetadataDeleteOutput.Type;

// The operation
/**
 * Deletes the hybrid identity metadata resource
 *
 * Deletes the hybrid identity metadata proxy resource.
 *
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HybridIdentityMetadataDeleteInput,
    outputSchema: HybridIdentityMetadataDeleteOutput,
  }));
// Input Schema
export const HybridIdentityMetadataGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2024-01-01",
    }),
  );
export type HybridIdentityMetadataGetInput =
  typeof HybridIdentityMetadataGetInput.Type;

// Output Schema
export const HybridIdentityMetadataGetOutput =
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
export type HybridIdentityMetadataGetOutput =
  typeof HybridIdentityMetadataGetOutput.Type;

// The operation
/**
 * Get the hybrid identity metadata resource
 *
 * Get the hybrid identity metadata proxy resource.
 *
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridIdentityMetadataGetInput,
    outputSchema: HybridIdentityMetadataGetOutput,
  }),
);
// Input Schema
export const HybridIdentityMetadataListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/hybridIdentityMetadata",
      apiVersion: "2024-01-01",
    }),
  );
export type HybridIdentityMetadataListByClusterInput =
  typeof HybridIdentityMetadataListByClusterInput.Type;

// Output Schema
export const HybridIdentityMetadataListByClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type HybridIdentityMetadataListByClusterOutput =
  typeof HybridIdentityMetadataListByClusterOutput.Type;

// The operation
/**
 * Lists the hybrid identity metadata resources in a provisioned cluster instance
 *
 * Lists the hybrid identity metadata proxy resource in a provisioned cluster instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataListByCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HybridIdentityMetadataListByClusterInput,
    outputSchema: HybridIdentityMetadataListByClusterOutput,
  }));
// Input Schema
export const HybridIdentityMetadataPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      resourceUid: Schema.optional(Schema.String),
      publicKey: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Pending",
          "Creating",
          "Deleting",
          "Updating",
          "Upgrading",
          "Accepted",
        ]),
      ),
    }),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2024-01-01",
    }),
  );
export type HybridIdentityMetadataPutInput =
  typeof HybridIdentityMetadataPutInput.Type;

// Output Schema
export const HybridIdentityMetadataPutOutput =
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
export type HybridIdentityMetadataPutOutput =
  typeof HybridIdentityMetadataPutOutput.Type;

// The operation
/**
 * Creates the hybrid identity metadata resource
 *
 * Creates the hybrid identity metadata proxy resource that facilitates the managed identity provisioning.
 *
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataPut = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridIdentityMetadataPutInput,
    outputSchema: HybridIdentityMetadataPutOutput,
  }),
);
// Input Schema
export const KubernetesVersionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/kubernetesVersions",
      apiVersion: "2024-01-01",
    }),
  );
export type KubernetesVersionsListInput =
  typeof KubernetesVersionsListInput.Type;

// Output Schema
export const KubernetesVersionsListOutput =
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
    nextLink: Schema.optional(Schema.String),
  });
export type KubernetesVersionsListOutput =
  typeof KubernetesVersionsListOutput.Type;

// The operation
/**
 * Lists the supported kubernetes versions
 *
 * Lists the supported kubernetes versions for the specified custom location
 *
 * @param api-version - The API version to use for this operation.
 */
export const KubernetesVersionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: KubernetesVersionsListInput,
    outputSchema: KubernetesVersionsListOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridContainerService/operations",
    apiVersion: "2024-01-01",
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
 * Lists the supported operations
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const ProvisionedClusterInstancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        linuxProfile: Schema.optional(
          Schema.Struct({
            ssh: Schema.optional(
              Schema.Struct({
                publicKeys: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      keyData: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        controlPlane: Schema.optional(
          Schema.Struct({
            count: Schema.optional(Schema.Number),
            vmSize: Schema.optional(Schema.String),
            controlPlaneEndpoint: Schema.optional(
              Schema.Struct({
                hostIP: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        kubernetesVersion: Schema.optional(Schema.String),
        networkProfile: Schema.optional(
          Schema.Struct({
            loadBalancerProfile: Schema.optional(
              Schema.Struct({
                count: Schema.optional(Schema.Number),
              }),
            ),
            networkPolicy: Schema.optional(Schema.Literals(["calico"])),
            podCidr: Schema.optional(Schema.String),
          }),
        ),
        storageProfile: Schema.optional(
          Schema.Struct({
            smbCsiDriver: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            nfsCsiDriver: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        clusterVMAccessProfile: Schema.optional(
          Schema.Struct({
            authorizedIPRanges: Schema.optional(Schema.String),
          }),
        ),
        agentPoolProfiles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              osType: Schema.optional(Schema.Literals(["Linux", "Windows"])),
              osSKU: Schema.optional(
                Schema.Literals(["CBLMariner", "Windows2019", "Windows2022"]),
              ),
              nodeLabels: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              nodeTaints: Schema.optional(Schema.Array(Schema.String)),
              maxCount: Schema.optional(Schema.Number),
              minCount: Schema.optional(Schema.Number),
              enableAutoScaling: Schema.optional(Schema.Boolean),
              maxPods: Schema.optional(Schema.Number),
              count: Schema.optional(Schema.Number),
              vmSize: Schema.optional(Schema.String),
              kubernetesVersion: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
            }),
          ),
        ),
        cloudProviderProfile: Schema.optional(
          Schema.Struct({
            infraNetworkProfile: Schema.optional(
              Schema.Struct({
                vnetSubnetIds: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Creating",
            "Deleting",
            "Updating",
            "Upgrading",
            "Accepted",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            controlPlaneStatus: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  phase: Schema.optional(
                    Schema.Literals([
                      "pending",
                      "provisioning",
                      "provisioning {HelmChartInstalled}",
                      "provisioning {MSICertificateDownloaded}",
                      "provisioned",
                      "deleting",
                      "failed",
                      "upgrading",
                    ]),
                  ),
                  ready: Schema.optional(Schema.Boolean),
                  errorMessage: Schema.optional(Schema.String),
                }),
              ),
            ),
            currentState: Schema.optional(
              Schema.Literals([
                "Succeeded",
                "Failed",
                "Canceled",
                "Pending",
                "Creating",
                "Deleting",
                "Updating",
                "Upgrading",
                "Accepted",
              ]),
            ),
            errorMessage: Schema.optional(Schema.String),
          }),
        ),
        licenseProfile: Schema.optional(
          Schema.Struct({
            azureHybridBenefit: Schema.optional(
              Schema.Literals(["True", "False", "NotApplicable"]),
            ),
          }),
        ),
        autoScalerProfile: Schema.optional(
          Schema.Struct({
            "balance-similar-node-groups": Schema.optional(Schema.String),
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
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
        name: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default",
      apiVersion: "2024-01-01",
    }),
  );
export type ProvisionedClusterInstancesCreateOrUpdateInput =
  typeof ProvisionedClusterInstancesCreateOrUpdateInput.Type;

// Output Schema
export const ProvisionedClusterInstancesCreateOrUpdateOutput =
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
export type ProvisionedClusterInstancesCreateOrUpdateOutput =
  typeof ProvisionedClusterInstancesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates the provisioned cluster instance
 *
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesCreateOrUpdateInput,
    outputSchema: ProvisionedClusterInstancesCreateOrUpdateOutput,
  }));
// Input Schema
export const ProvisionedClusterInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default",
      apiVersion: "2024-01-01",
    }),
  );
export type ProvisionedClusterInstancesDeleteInput =
  typeof ProvisionedClusterInstancesDeleteInput.Type;

// Output Schema
export const ProvisionedClusterInstancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProvisionedClusterInstancesDeleteOutput =
  typeof ProvisionedClusterInstancesDeleteOutput.Type;

// The operation
/**
 * Deletes the provisioned cluster instance
 *
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesDeleteInput,
    outputSchema: ProvisionedClusterInstancesDeleteOutput,
  }));
// Input Schema
export const ProvisionedClusterInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default",
      apiVersion: "2024-01-01",
    }),
  );
export type ProvisionedClusterInstancesGetInput =
  typeof ProvisionedClusterInstancesGetInput.Type;

// Output Schema
export const ProvisionedClusterInstancesGetOutput =
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
export type ProvisionedClusterInstancesGetOutput =
  typeof ProvisionedClusterInstancesGetOutput.Type;

// The operation
/**
 * Gets the provisioned cluster instance
 *
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesGetInput,
    outputSchema: ProvisionedClusterInstancesGetOutput,
  }));
// Input Schema
export const ProvisionedClusterInstancesGetUpgradeProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/upgradeProfiles/default",
      apiVersion: "2024-01-01",
    }),
  );
export type ProvisionedClusterInstancesGetUpgradeProfileInput =
  typeof ProvisionedClusterInstancesGetUpgradeProfileInput.Type;

// Output Schema
export const ProvisionedClusterInstancesGetUpgradeProfileOutput =
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
export type ProvisionedClusterInstancesGetUpgradeProfileOutput =
  typeof ProvisionedClusterInstancesGetUpgradeProfileOutput.Type;

// The operation
/**
 * Gets the upgrade profile of a provisioned cluster
 *
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesGetUpgradeProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesGetUpgradeProfileInput,
    outputSchema: ProvisionedClusterInstancesGetUpgradeProfileOutput,
  }));
// Input Schema
export const ProvisionedClusterInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances",
      apiVersion: "2024-01-01",
    }),
  );
export type ProvisionedClusterInstancesListInput =
  typeof ProvisionedClusterInstancesListInput.Type;

// Output Schema
export const ProvisionedClusterInstancesListOutput =
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
    nextLink: Schema.optional(Schema.String),
  });
export type ProvisionedClusterInstancesListOutput =
  typeof ProvisionedClusterInstancesListOutput.Type;

// The operation
/**
 * Lists the ProvisionedClusterInstance resource associated with the ConnectedCluster
 *
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesListInput,
    outputSchema: ProvisionedClusterInstancesListOutput,
  }));
// Input Schema
export const ProvisionedClusterInstancesListAdminKubeconfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/listAdminKubeconfig",
      apiVersion: "2024-01-01",
    }),
  );
export type ProvisionedClusterInstancesListAdminKubeconfigInput =
  typeof ProvisionedClusterInstancesListAdminKubeconfigInput.Type;

// Output Schema
export const ProvisionedClusterInstancesListAdminKubeconfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Pending",
        "Creating",
        "Deleting",
        "Updating",
        "Upgrading",
        "Accepted",
      ]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        kubeconfigs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  });
export type ProvisionedClusterInstancesListAdminKubeconfigOutput =
  typeof ProvisionedClusterInstancesListAdminKubeconfigOutput.Type;

// The operation
/**
 * Lists the admin credentials of the provisioned cluster (can only be used within private network)
 *
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesListAdminKubeconfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesListAdminKubeconfigInput,
    outputSchema: ProvisionedClusterInstancesListAdminKubeconfigOutput,
  }));
// Input Schema
export const ProvisionedClusterInstancesListUserKubeconfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/listUserKubeconfig",
      apiVersion: "2024-01-01",
    }),
  );
export type ProvisionedClusterInstancesListUserKubeconfigInput =
  typeof ProvisionedClusterInstancesListUserKubeconfigInput.Type;

// Output Schema
export const ProvisionedClusterInstancesListUserKubeconfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Pending",
        "Creating",
        "Deleting",
        "Updating",
        "Upgrading",
        "Accepted",
      ]),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        kubeconfigs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  });
export type ProvisionedClusterInstancesListUserKubeconfigOutput =
  typeof ProvisionedClusterInstancesListUserKubeconfigOutput.Type;

// The operation
/**
 * Lists the user credentials of the provisioned cluster (can only be used within private network)
 *
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesListUserKubeconfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesListUserKubeconfigInput,
    outputSchema: ProvisionedClusterInstancesListUserKubeconfigOutput,
  }));
// Input Schema
export const PutKubernetesVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
        name: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Creating",
            "Deleting",
            "Updating",
            "Upgrading",
            "Accepted",
          ]),
        ),
        values: Schema.optional(
          Schema.Array(
            Schema.Struct({
              version: Schema.optional(Schema.String),
              isPreview: Schema.optional(Schema.Boolean),
              patchVersions: Schema.optional(
                Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    readiness: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          osType: Schema.optional(
                            Schema.Literals(["Windows", "Linux"]),
                          ),
                          osSku: Schema.optional(
                            Schema.Literals([
                              "CBLMariner",
                              "Windows2019",
                              "Windows2022",
                            ]),
                          ),
                          ready: Schema.optional(Schema.Boolean),
                          errorMessage: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    upgrades: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/kubernetesVersions/default",
      apiVersion: "2024-01-01",
    }),
  );
export type PutKubernetesVersionsInput = typeof PutKubernetesVersionsInput.Type;

// Output Schema
export const PutKubernetesVersionsOutput =
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
export type PutKubernetesVersionsOutput =
  typeof PutKubernetesVersionsOutput.Type;

// The operation
/**
 * Puts the default kubernetes version resource type (one time operation, before listing the kubernetes versions)
 *
 * @param api-version - The API version to use for this operation.
 */
export const PutKubernetesVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PutKubernetesVersionsInput,
    outputSchema: PutKubernetesVersionsOutput,
  }),
);
// Input Schema
export const PutVMSkusInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.Literals(["CustomLocation"])),
      name: Schema.optional(Schema.String),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Pending",
          "Creating",
          "Deleting",
          "Updating",
          "Upgrading",
          "Accepted",
        ]),
      ),
      values: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourceType: Schema.optional(Schema.String),
            capabilities: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            name: Schema.optional(Schema.String),
            tier: Schema.optional(Schema.String),
            size: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/skus/default",
    apiVersion: "2024-01-01",
  }),
);
export type PutVMSkusInput = typeof PutVMSkusInput.Type;

// Output Schema
export const PutVMSkusOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type PutVMSkusOutput = typeof PutVMSkusOutput.Type;

// The operation
/**
 * Puts the default VM skus resource type (one time operation, before listing the VM skus)
 *
 * @param api-version - The API version to use for this operation.
 */
export const PutVMSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PutVMSkusInput,
  outputSchema: PutVMSkusOutput,
}));
// Input Schema
export const VirtualNetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        infraVnetProfile: Schema.optional(
          Schema.Struct({
            hci: Schema.optional(
              Schema.Struct({
                mocGroup: Schema.optional(Schema.String),
                mocLocation: Schema.optional(Schema.String),
                mocVnetName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        vipPool: Schema.optional(
          Schema.Array(
            Schema.Struct({
              endIP: Schema.optional(Schema.String),
              startIP: Schema.optional(Schema.String),
            }),
          ),
        ),
        vmipPool: Schema.optional(
          Schema.Array(
            Schema.Struct({
              endIP: Schema.optional(Schema.String),
              startIP: Schema.optional(Schema.String),
            }),
          ),
        ),
        dnsServers: Schema.optional(Schema.Array(Schema.String)),
        gateway: Schema.optional(Schema.String),
        ipAddressPrefix: Schema.optional(Schema.String),
        vlanID: Schema.optional(Schema.Number),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Creating",
            "Deleting",
            "Updating",
            "Accepted",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            operationStatus: Schema.optional(
              Schema.Struct({
                error: Schema.optional(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                  }),
                ),
                operationId: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
        name: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualNetworksCreateOrUpdateInput =
  typeof VirtualNetworksCreateOrUpdateInput.Type;

// Output Schema
export const VirtualNetworksCreateOrUpdateOutput =
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
export type VirtualNetworksCreateOrUpdateOutput =
  typeof VirtualNetworksCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates the virtual network resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksCreateOrUpdateInput,
    outputSchema: VirtualNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualNetworksDeleteInput = typeof VirtualNetworksDeleteInput.Type;

// Output Schema
export const VirtualNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualNetworksDeleteOutput =
  typeof VirtualNetworksDeleteOutput.Type;

// The operation
/**
 * Deletes the specified virtual network resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksDeleteInput,
    outputSchema: VirtualNetworksDeleteOutput,
  }),
);
// Input Schema
export const VirtualNetworksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualNetworksListByResourceGroupInput =
  typeof VirtualNetworksListByResourceGroupInput.Type;

// Output Schema
export const VirtualNetworksListByResourceGroupOutput =
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
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualNetworksListByResourceGroupOutput =
  typeof VirtualNetworksListByResourceGroupOutput.Type;

// The operation
/**
 * Lists the virtual networks in the specified resource group
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksListByResourceGroupInput,
    outputSchema: VirtualNetworksListByResourceGroupOutput,
  }));
// Input Schema
export const VirtualNetworksListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridContainerService/virtualNetworks",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualNetworksListBySubscriptionInput =
  typeof VirtualNetworksListBySubscriptionInput.Type;

// Output Schema
export const VirtualNetworksListBySubscriptionOutput =
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
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualNetworksListBySubscriptionOutput =
  typeof VirtualNetworksListBySubscriptionOutput.Type;

// The operation
/**
 * Lists the virtual networks in the specified subscription
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksListBySubscriptionInput,
    outputSchema: VirtualNetworksListBySubscriptionOutput,
  }));
// Input Schema
export const VirtualNetworksRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualNetworksRetrieveInput =
  typeof VirtualNetworksRetrieveInput.Type;

// Output Schema
export const VirtualNetworksRetrieveOutput =
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
export type VirtualNetworksRetrieveOutput =
  typeof VirtualNetworksRetrieveOutput.Type;

// The operation
/**
 * Gets the specified virtual network resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksRetrieveInput,
    outputSchema: VirtualNetworksRetrieveOutput,
  }),
);
// Input Schema
export const VirtualNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2024-01-01",
    }),
  );
export type VirtualNetworksUpdateInput = typeof VirtualNetworksUpdateInput.Type;

// Output Schema
export const VirtualNetworksUpdateOutput =
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
export type VirtualNetworksUpdateOutput =
  typeof VirtualNetworksUpdateOutput.Type;

// The operation
/**
 * Patches the virtual network resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksUpdateInput,
    outputSchema: VirtualNetworksUpdateOutput,
  }),
);
// Input Schema
export const VMSkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/skus",
    apiVersion: "2024-01-01",
  }),
);
export type VMSkusListInput = typeof VMSkusListInput.Type;

// Output Schema
export const VMSkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type VMSkusListOutput = typeof VMSkusListOutput.Type;

// The operation
/**
 * Lists the supported VM skus
 *
 * Lists the supported VM skus for the specified custom location
 *
 * @param api-version - The API version to use for this operation.
 */
export const VMSkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VMSkusListInput,
  outputSchema: VMSkusListOutput,
}));
