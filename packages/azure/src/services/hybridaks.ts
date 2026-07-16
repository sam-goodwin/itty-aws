/**
 * Azure Hybridaks API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AgentPoolCreateOrUpdateInput {
  connectedClusterResourceUri: string;
  agentPoolName: string;
  properties?: {
    osType?: "Linux" | "Windows";
    osSKU?: "CBLMariner" | "Windows2019" | "Windows2022";
    nodeLabels?: Record<string, string>;
    nodeTaints?: string[];
    maxCount?: number;
    minCount?: number;
    enableAutoScaling?: boolean;
    maxPods?: number;
    count?: number;
    vmSize?: string;
    kubernetesVersion?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Upgrading"
      | "Accepted";
    status?: {
      currentState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Pending"
        | "Creating"
        | "Deleting"
        | "Updating"
        | "Upgrading"
        | "Accepted";
      errorMessage?: string;
      readyReplicas?: {
        count?: number;
        vmSize?: string;
        kubernetesVersion?: string;
      }[];
    };
  };
  tags?: Record<string, string>;
  extendedLocation?: { type?: "CustomLocation"; name?: string };
}
export const AgentPoolCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
    agentPoolName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<AgentPoolCreateOrUpdateInput>;

// Output Schema
export interface AgentPoolCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const AgentPoolCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AgentPoolCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the agent pool in the provisioned cluster
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param agentPoolName - Parameter for the name of the agent pool in the provisioned cluster.
 * @param api-version - The API version to use for this operation.
 */
export const agentPoolCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolCreateOrUpdateInput,
  outputSchema: AgentPoolCreateOrUpdateOutput,
}));
// Input Schema
export interface AgentPoolDeleteInput {
  connectedClusterResourceUri: string;
  agentPoolName: string;
}
export const AgentPoolDeleteInput = /*@__PURE__*/ Schema.Struct({
  connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools/{agentPoolName}",
    apiVersion: "2024-01-01",
  }),
) as unknown as Schema.Codec<AgentPoolDeleteInput>;

// Output Schema
export type AgentPoolDeleteOutput = void;
export const AgentPoolDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentPoolDeleteOutput>;

// The operation
/**
 * Deletes the specified agent pool in the provisioned cluster
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param agentPoolName - Parameter for the name of the agent pool in the provisioned cluster.
 * @param api-version - The API version to use for this operation.
 */
export const agentPoolDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolDeleteInput,
  outputSchema: AgentPoolDeleteOutput,
}));
// Input Schema
export interface AgentPoolGetInput {
  connectedClusterResourceUri: string;
  agentPoolName: string;
}
export const AgentPoolGetInput = /*@__PURE__*/ Schema.Struct({
  connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  agentPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools/{agentPoolName}",
    apiVersion: "2024-01-01",
  }),
) as unknown as Schema.Codec<AgentPoolGetInput>;

// Output Schema
export interface AgentPoolGetOutput {
  id?: string;
  name?: string;
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
export const AgentPoolGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<AgentPoolGetOutput>;

// The operation
/**
 * Gets the specified agent pool in the provisioned cluster
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param agentPoolName - Parameter for the name of the agent pool in the provisioned cluster.
 * @param api-version - The API version to use for this operation.
 */
export const agentPoolGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentPoolGetInput,
  outputSchema: AgentPoolGetOutput,
}));
// Input Schema
export interface AgentPoolListByProvisionedClusterInput {
  connectedClusterResourceUri: string;
}
export const AgentPoolListByProvisionedClusterInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/agentPools",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<AgentPoolListByProvisionedClusterInput>;

// Output Schema
export interface AgentPoolListByProvisionedClusterOutput {
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
export const AgentPoolListByProvisionedClusterOutput =
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
  }) as unknown as Schema.Codec<AgentPoolListByProvisionedClusterOutput>;

// The operation
/**
 * Gets the list of agent pools in the specified provisioned cluster
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param api-version - The API version to use for this operation.
 */
export const agentPoolListByProvisionedCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentPoolListByProvisionedClusterInput,
    outputSchema: AgentPoolListByProvisionedClusterOutput,
  }));
// Input Schema
export interface DeleteKubernetesVersionsInput {
  customLocationResourceUri: string;
}
export const DeleteKubernetesVersionsInput =
  /*@__PURE__*/ Schema.Struct({
    customLocationResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/kubernetesVersions/default",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<DeleteKubernetesVersionsInput>;

// Output Schema
export type DeleteKubernetesVersionsOutput = void;
export const DeleteKubernetesVersionsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteKubernetesVersionsOutput>;

// The operation
/**
 * Deletes the default kubernetes version resource type
 *
 * Delete the default kubernetes versions resource type
 *
 * @param customLocationResourceUri - The fully qualified Azure Resource Manager identifier of the custom location resource.
 * @param api-version - The API version to use for this operation.
 */
export const DeleteKubernetesVersions = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteKubernetesVersionsInput,
  outputSchema: DeleteKubernetesVersionsOutput,
}));
// Input Schema
export interface DeleteVMSkusInput {
  customLocationResourceUri: string;
}
export const DeleteVMSkusInput = /*@__PURE__*/ Schema.Struct({
  customLocationResourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/skus/default",
    apiVersion: "2024-01-01",
  }),
) as unknown as Schema.Codec<DeleteVMSkusInput>;

// Output Schema
export type DeleteVMSkusOutput = void;
export const DeleteVMSkusOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteVMSkusOutput>;

// The operation
/**
 * Deletes the default VM skus resource type
 *
 * @param customLocationResourceUri - The fully qualified Azure Resource Manager identifier of the custom location resource.
 * @param api-version - The API version to use for this operation.
 */
export const DeleteVMSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteVMSkusInput,
  outputSchema: DeleteVMSkusOutput,
}));
// Input Schema
export interface GetKubernetesVersionsInput {
  customLocationResourceUri: string;
}
export const GetKubernetesVersionsInput =
  /*@__PURE__*/ Schema.Struct({
    customLocationResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/kubernetesVersions/default",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<GetKubernetesVersionsInput>;

// Output Schema
export interface GetKubernetesVersionsOutput {
  id?: string;
  name?: string;
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
export const GetKubernetesVersionsOutput =
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
  }) as unknown as Schema.Codec<GetKubernetesVersionsOutput>;

// The operation
/**
 * Lists the supported kubernetes versions
 *
 * Lists the supported kubernetes versions for the specified custom location
 *
 * @param customLocationResourceUri - The fully qualified Azure Resource Manager identifier of the custom location resource.
 * @param api-version - The API version to use for this operation.
 */
export const GetKubernetesVersions = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetKubernetesVersionsInput,
  outputSchema: GetKubernetesVersionsOutput,
}));
// Input Schema
export interface GetVMSkusInput {
  customLocationResourceUri: string;
}
export const GetVMSkusInput = /*@__PURE__*/ Schema.Struct({
  customLocationResourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/skus/default",
    apiVersion: "2024-01-01",
  }),
) as unknown as Schema.Codec<GetVMSkusInput>;

// Output Schema
export interface GetVMSkusOutput {
  id?: string;
  name?: string;
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
export const GetVMSkusOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<GetVMSkusOutput>;

// The operation
/**
 * Lists the supported VM skus
 *
 * Lists the supported VM skus for the specified custom location
 *
 * @param customLocationResourceUri - The fully qualified Azure Resource Manager identifier of the custom location resource.
 * @param api-version - The API version to use for this operation.
 */
export const GetVMSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetVMSkusInput,
  outputSchema: GetVMSkusOutput,
}));
// Input Schema
export interface HybridIdentityMetadataDeleteInput {
  connectedClusterResourceUri: string;
}
export const HybridIdentityMetadataDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<HybridIdentityMetadataDeleteInput>;

// Output Schema
export type HybridIdentityMetadataDeleteOutput = void;
export const HybridIdentityMetadataDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<HybridIdentityMetadataDeleteOutput>;

// The operation
/**
 * Deletes the hybrid identity metadata resource
 *
 * Deletes the hybrid identity metadata proxy resource.
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: HybridIdentityMetadataDeleteInput,
    outputSchema: HybridIdentityMetadataDeleteOutput,
  }));
// Input Schema
export interface HybridIdentityMetadataGetInput {
  connectedClusterResourceUri: string;
}
export const HybridIdentityMetadataGetInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<HybridIdentityMetadataGetInput>;

// Output Schema
export interface HybridIdentityMetadataGetOutput {
  id?: string;
  name?: string;
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
export const HybridIdentityMetadataGetOutput =
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
  }) as unknown as Schema.Codec<HybridIdentityMetadataGetOutput>;

// The operation
/**
 * Get the hybrid identity metadata resource
 *
 * Get the hybrid identity metadata proxy resource.
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: HybridIdentityMetadataGetInput,
  outputSchema: HybridIdentityMetadataGetOutput,
}));
// Input Schema
export interface HybridIdentityMetadataListByClusterInput {
  connectedClusterResourceUri: string;
}
export const HybridIdentityMetadataListByClusterInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/hybridIdentityMetadata",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<HybridIdentityMetadataListByClusterInput>;

// Output Schema
export interface HybridIdentityMetadataListByClusterOutput {
  nextLink?: string;
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
}
export const HybridIdentityMetadataListByClusterOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<HybridIdentityMetadataListByClusterOutput>;

// The operation
/**
 * Lists the hybrid identity metadata resources in a provisioned cluster instance
 *
 * Lists the hybrid identity metadata proxy resource in a provisioned cluster instance.
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataListByCluster =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: HybridIdentityMetadataListByClusterInput,
    outputSchema: HybridIdentityMetadataListByClusterOutput,
  }));
// Input Schema
export interface HybridIdentityMetadataPutInput {
  connectedClusterResourceUri: string;
  properties: {
    resourceUid?: string;
    publicKey?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Upgrading"
      | "Accepted";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const HybridIdentityMetadataPutInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<HybridIdentityMetadataPutInput>;

// Output Schema
export interface HybridIdentityMetadataPutOutput {
  id?: string;
  name?: string;
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
export const HybridIdentityMetadataPutOutput =
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
  }) as unknown as Schema.Codec<HybridIdentityMetadataPutOutput>;

// The operation
/**
 * Creates the hybrid identity metadata resource
 *
 * Creates the hybrid identity metadata proxy resource that facilitates the managed identity provisioning.
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataPut = /*@__PURE__*/ API.make(() => ({
  inputSchema: HybridIdentityMetadataPutInput,
  outputSchema: HybridIdentityMetadataPutOutput,
}));
// Input Schema
export interface KubernetesVersionsListInput {
  customLocationResourceUri: string;
}
export const KubernetesVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    customLocationResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/kubernetesVersions",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<KubernetesVersionsListInput>;

// Output Schema
export interface KubernetesVersionsListOutput {
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
export const KubernetesVersionsListOutput =
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
  }) as unknown as Schema.Codec<KubernetesVersionsListOutput>;

// The operation
/**
 * Lists the supported kubernetes versions
 *
 * Lists the supported kubernetes versions for the specified custom location
 *
 * @param customLocationResourceUri - The fully qualified Azure Resource Manager identifier of the custom location resource.
 * @param api-version - The API version to use for this operation.
 */
export const KubernetesVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: KubernetesVersionsListInput,
  outputSchema: KubernetesVersionsListOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridContainerService/operations",
    apiVersion: "2024-01-01",
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
 * Lists the supported operations
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ProvisionedClusterInstancesCreateOrUpdateInput {
  connectedClusterResourceUri: string;
  properties?: {
    linuxProfile?: { ssh?: { publicKeys?: { keyData?: string }[] } };
    controlPlane?: {
      count?: number;
      vmSize?: string;
      controlPlaneEndpoint?: { hostIP?: string };
    };
    kubernetesVersion?: string;
    networkProfile?: {
      loadBalancerProfile?: { count?: number };
      networkPolicy?: "calico";
      podCidr?: string;
    };
    storageProfile?: {
      smbCsiDriver?: { enabled?: boolean };
      nfsCsiDriver?: { enabled?: boolean };
    };
    clusterVMAccessProfile?: { authorizedIPRanges?: string };
    agentPoolProfiles?: {
      osType?: "Linux" | "Windows";
      osSKU?: "CBLMariner" | "Windows2019" | "Windows2022";
      nodeLabels?: Record<string, string>;
      nodeTaints?: string[];
      maxCount?: number;
      minCount?: number;
      enableAutoScaling?: boolean;
      maxPods?: number;
      count?: number;
      vmSize?: string;
      kubernetesVersion?: string;
      name?: string;
    }[];
    cloudProviderProfile?: {
      infraNetworkProfile?: { vnetSubnetIds?: string[] };
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Upgrading"
      | "Accepted";
    status?: {
      controlPlaneStatus?: {
        name?: string;
        phase?:
          | "pending"
          | "provisioning"
          | "provisioning {HelmChartInstalled}"
          | "provisioning {MSICertificateDownloaded}"
          | "provisioned"
          | "deleting"
          | "failed"
          | "upgrading";
        ready?: boolean;
        errorMessage?: string;
      }[];
      currentState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Pending"
        | "Creating"
        | "Deleting"
        | "Updating"
        | "Upgrading"
        | "Accepted";
      errorMessage?: string;
    };
    licenseProfile?: {
      azureHybridBenefit?: "True" | "False" | "NotApplicable";
    };
    autoScalerProfile?: {
      "balance-similar-node-groups"?: string;
      expander?: "least-waste" | "most-pods" | "priority" | "random";
      "max-empty-bulk-delete"?: string;
      "max-graceful-termination-sec"?: string;
      "max-node-provision-time"?: string;
      "max-total-unready-percentage"?: string;
      "new-pod-scale-up-delay"?: string;
      "ok-total-unready-count"?: string;
      "scan-interval"?: string;
      "scale-down-delay-after-add"?: string;
      "scale-down-delay-after-delete"?: string;
      "scale-down-delay-after-failure"?: string;
      "scale-down-unneeded-time"?: string;
      "scale-down-unready-time"?: string;
      "scale-down-utilization-threshold"?: string;
      "skip-nodes-with-local-storage"?: string;
      "skip-nodes-with-system-pods"?: string;
    };
  };
  extendedLocation?: { type?: "CustomLocation"; name?: string };
}
export const ProvisionedClusterInstancesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<ProvisionedClusterInstancesCreateOrUpdateInput>;

// Output Schema
export interface ProvisionedClusterInstancesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ProvisionedClusterInstancesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ProvisionedClusterInstancesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the provisioned cluster instance
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesCreateOrUpdateInput,
    outputSchema: ProvisionedClusterInstancesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ProvisionedClusterInstancesDeleteInput {
  connectedClusterResourceUri: string;
}
export const ProvisionedClusterInstancesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<ProvisionedClusterInstancesDeleteInput>;

// Output Schema
export type ProvisionedClusterInstancesDeleteOutput = void;
export const ProvisionedClusterInstancesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProvisionedClusterInstancesDeleteOutput>;

// The operation
/**
 * Deletes the provisioned cluster instance
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesDeleteInput,
    outputSchema: ProvisionedClusterInstancesDeleteOutput,
  }));
// Input Schema
export interface ProvisionedClusterInstancesGetInput {
  connectedClusterResourceUri: string;
}
export const ProvisionedClusterInstancesGetInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<ProvisionedClusterInstancesGetInput>;

// Output Schema
export interface ProvisionedClusterInstancesGetOutput {
  id?: string;
  name?: string;
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
export const ProvisionedClusterInstancesGetOutput =
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
  }) as unknown as Schema.Codec<ProvisionedClusterInstancesGetOutput>;

// The operation
/**
 * Gets the provisioned cluster instance
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesGetInput,
    outputSchema: ProvisionedClusterInstancesGetOutput,
  }));
// Input Schema
export interface ProvisionedClusterInstancesGetUpgradeProfileInput {
  connectedClusterResourceUri: string;
}
export const ProvisionedClusterInstancesGetUpgradeProfileInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/upgradeProfiles/default",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<ProvisionedClusterInstancesGetUpgradeProfileInput>;

// Output Schema
export interface ProvisionedClusterInstancesGetUpgradeProfileOutput {
  id?: string;
  name?: string;
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
export const ProvisionedClusterInstancesGetUpgradeProfileOutput =
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
  }) as unknown as Schema.Codec<ProvisionedClusterInstancesGetUpgradeProfileOutput>;

// The operation
/**
 * Gets the upgrade profile of a provisioned cluster
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesGetUpgradeProfile =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesGetUpgradeProfileInput,
    outputSchema: ProvisionedClusterInstancesGetUpgradeProfileOutput,
  }));
// Input Schema
export interface ProvisionedClusterInstancesListInput {
  connectedClusterResourceUri: string;
}
export const ProvisionedClusterInstancesListInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<ProvisionedClusterInstancesListInput>;

// Output Schema
export interface ProvisionedClusterInstancesListOutput {
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
export const ProvisionedClusterInstancesListOutput =
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
  }) as unknown as Schema.Codec<ProvisionedClusterInstancesListOutput>;

// The operation
/**
 * Lists the ProvisionedClusterInstance resource associated with the ConnectedCluster
 *
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 * @param api-version - The API version to use for this operation.
 */
export const provisionedClusterInstancesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesListInput,
    outputSchema: ProvisionedClusterInstancesListOutput,
  }));
// Input Schema
export interface ProvisionedClusterInstancesListAdminKubeconfigInput {
  connectedClusterResourceUri: string;
}
export const ProvisionedClusterInstancesListAdminKubeconfigInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/listAdminKubeconfig",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<ProvisionedClusterInstancesListAdminKubeconfigInput>;

// Output Schema
export interface ProvisionedClusterInstancesListAdminKubeconfigOutput {
  id?: string;
  name?: string;
  resourceId?: string;
  status?:
    | "Succeeded"
    | "Failed"
    | "Canceled"
    | "Pending"
    | "Creating"
    | "Deleting"
    | "Updating"
    | "Upgrading"
    | "Accepted";
  error?: { code?: string; message?: string };
  properties?: { kubeconfigs?: { name?: string; value?: string }[] };
}
export const ProvisionedClusterInstancesListAdminKubeconfigOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ProvisionedClusterInstancesListAdminKubeconfigOutput>;

// The operation
/**
 * Lists the admin credentials of the provisioned cluster (can only be used within private network)
 *
 * @param api-version - The API version to use for this operation.
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 */
export const provisionedClusterInstancesListAdminKubeconfig =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesListAdminKubeconfigInput,
    outputSchema: ProvisionedClusterInstancesListAdminKubeconfigOutput,
  }));
// Input Schema
export interface ProvisionedClusterInstancesListUserKubeconfigInput {
  connectedClusterResourceUri: string;
}
export const ProvisionedClusterInstancesListUserKubeconfigInput =
  /*@__PURE__*/ Schema.Struct({
    connectedClusterResourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/listUserKubeconfig",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<ProvisionedClusterInstancesListUserKubeconfigInput>;

// Output Schema
export interface ProvisionedClusterInstancesListUserKubeconfigOutput {
  id?: string;
  name?: string;
  resourceId?: string;
  status?:
    | "Succeeded"
    | "Failed"
    | "Canceled"
    | "Pending"
    | "Creating"
    | "Deleting"
    | "Updating"
    | "Upgrading"
    | "Accepted";
  error?: { code?: string; message?: string };
  properties?: { kubeconfigs?: { name?: string; value?: string }[] };
}
export const ProvisionedClusterInstancesListUserKubeconfigOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ProvisionedClusterInstancesListUserKubeconfigOutput>;

// The operation
/**
 * Lists the user credentials of the provisioned cluster (can only be used within private network)
 *
 * @param api-version - The API version to use for this operation.
 * @param connectedClusterResourceUri - The fully qualified Azure Resource Manager identifier of the connected cluster resource.
 */
export const provisionedClusterInstancesListUserKubeconfig =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProvisionedClusterInstancesListUserKubeconfigInput,
    outputSchema: ProvisionedClusterInstancesListUserKubeconfigOutput,
  }));
// Input Schema
export interface PutKubernetesVersionsInput {
  customLocationResourceUri: string;
  extendedLocation?: { type?: "CustomLocation"; name?: string };
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Upgrading"
      | "Accepted";
    values?: {
      version?: string;
      isPreview?: boolean;
      patchVersions?: Record<
        string,
        {
          readiness?: {
            osType?: "Windows" | "Linux";
            osSku?: "CBLMariner" | "Windows2019" | "Windows2022";
            ready?: boolean;
            errorMessage?: string;
          }[];
          upgrades?: string[];
        }
      >;
    }[];
  };
}
export const PutKubernetesVersionsInput =
  /*@__PURE__*/ Schema.Struct({
    customLocationResourceUri: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<PutKubernetesVersionsInput>;

// Output Schema
export interface PutKubernetesVersionsOutput {
  id?: string;
  name?: string;
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
export const PutKubernetesVersionsOutput =
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
  }) as unknown as Schema.Codec<PutKubernetesVersionsOutput>;

// The operation
/**
 * Puts the default kubernetes version resource type (one time operation, before listing the kubernetes versions)
 *
 * @param customLocationResourceUri - The fully qualified Azure Resource Manager identifier of the custom location resource.
 * @param api-version - The API version to use for this operation.
 */
export const PutKubernetesVersions = /*@__PURE__*/ API.make(() => ({
  inputSchema: PutKubernetesVersionsInput,
  outputSchema: PutKubernetesVersionsOutput,
}));
// Input Schema
export interface PutVMSkusInput {
  customLocationResourceUri: string;
  extendedLocation?: { type?: "CustomLocation"; name?: string };
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Upgrading"
      | "Accepted";
    values?: {
      resourceType?: string;
      capabilities?: { name?: string; value?: string }[];
      name?: string;
      tier?: string;
      size?: string;
    }[];
  };
}
export const PutVMSkusInput = /*@__PURE__*/ Schema.Struct({
  customLocationResourceUri: Schema.String.pipe(T.PathParam()),
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
) as unknown as Schema.Codec<PutVMSkusInput>;

// Output Schema
export interface PutVMSkusOutput {
  id?: string;
  name?: string;
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
export const PutVMSkusOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<PutVMSkusOutput>;

// The operation
/**
 * Puts the default VM skus resource type (one time operation, before listing the VM skus)
 *
 * @param customLocationResourceUri - The fully qualified Azure Resource Manager identifier of the custom location resource.
 * @param api-version - The API version to use for this operation.
 */
export const PutVMSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: PutVMSkusInput,
  outputSchema: PutVMSkusOutput,
}));
// Input Schema
export interface VirtualNetworksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  properties?: {
    infraVnetProfile?: {
      hci?: { mocGroup?: string; mocLocation?: string; mocVnetName?: string };
    };
    vipPool?: { endIP?: string; startIP?: string }[];
    vmipPool?: { endIP?: string; startIP?: string }[];
    dnsServers?: string[];
    gateway?: string;
    ipAddressPrefix?: string;
    vlanID?: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Accepted";
    status?: {
      operationStatus?: {
        error?: { code?: string; message?: string };
        operationId?: string;
        status?: string;
      };
    };
  };
  extendedLocation?: { type?: "CustomLocation"; name?: string };
  tags?: Record<string, string>;
  location: string;
}
export const VirtualNetworksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<VirtualNetworksCreateOrUpdateInput>;

// Output Schema
export interface VirtualNetworksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualNetworksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the virtual network resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - Parameter for the name of the virtual network
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksCreateOrUpdateInput,
    outputSchema: VirtualNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualNetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
}
export const VirtualNetworksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksDeleteInput>;

// Output Schema
export type VirtualNetworksDeleteOutput = void;
export const VirtualNetworksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualNetworksDeleteOutput>;

// The operation
/**
 * Deletes the specified virtual network resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - Parameter for the name of the virtual network
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksDeleteInput,
  outputSchema: VirtualNetworksDeleteOutput,
}));
// Input Schema
export interface VirtualNetworksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const VirtualNetworksListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksListByResourceGroupInput>;

// Output Schema
export interface VirtualNetworksListByResourceGroupOutput {
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
export const VirtualNetworksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksListByResourceGroupOutput>;

// The operation
/**
 * Lists the virtual networks in the specified resource group
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksListByResourceGroupInput,
    outputSchema: VirtualNetworksListByResourceGroupOutput,
  }));
// Input Schema
export interface VirtualNetworksListBySubscriptionInput {
  subscriptionId: string;
}
export const VirtualNetworksListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridContainerService/virtualNetworks",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksListBySubscriptionInput>;

// Output Schema
export interface VirtualNetworksListBySubscriptionOutput {
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
export const VirtualNetworksListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksListBySubscriptionOutput>;

// The operation
/**
 * Lists the virtual networks in the specified subscription
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksListBySubscriptionInput,
    outputSchema: VirtualNetworksListBySubscriptionOutput,
  }));
// Input Schema
export interface VirtualNetworksRetrieveInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
}
export const VirtualNetworksRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksRetrieveInput>;

// Output Schema
export interface VirtualNetworksRetrieveOutput {
  id?: string;
  name?: string;
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
export const VirtualNetworksRetrieveOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksRetrieveOutput>;

// The operation
/**
 * Gets the specified virtual network resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - Parameter for the name of the virtual network
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksRetrieveInput,
  outputSchema: VirtualNetworksRetrieveOutput,
}));
// Input Schema
export interface VirtualNetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  tags?: Record<string, string>;
}
export const VirtualNetworksUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridContainerService/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2024-01-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksUpdateInput>;

// Output Schema
export interface VirtualNetworksUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualNetworksUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksUpdateOutput>;

// The operation
/**
 * Patches the virtual network resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - Parameter for the name of the virtual network
 * @param api-version - The API version to use for this operation.
 */
export const virtualNetworksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksUpdateInput,
  outputSchema: VirtualNetworksUpdateOutput,
}));
// Input Schema
export interface VMSkusListInput {
  customLocationResourceUri: string;
}
export const VMSkusListInput = /*@__PURE__*/ Schema.Struct({
  customLocationResourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{customLocationResourceUri}/providers/Microsoft.HybridContainerService/skus",
    apiVersion: "2024-01-01",
  }),
) as unknown as Schema.Codec<VMSkusListInput>;

// Output Schema
export interface VMSkusListOutput {
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
export const VMSkusListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VMSkusListOutput>;

// The operation
/**
 * Lists the supported VM skus
 *
 * Lists the supported VM skus for the specified custom location
 *
 * @param customLocationResourceUri - The fully qualified Azure Resource Manager identifier of the custom location resource.
 * @param api-version - The API version to use for this operation.
 */
export const VMSkusList = /*@__PURE__*/ API.make(() => ({
  inputSchema: VMSkusListInput,
  outputSchema: VMSkusListOutput,
}));
