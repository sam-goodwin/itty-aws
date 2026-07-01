/**
 * Azure Kubernetesruntime API
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
export interface BgpPeersCreateOrUpdateInput {
  resourceUri: string;
  bgpPeerName: string;
  properties?: {
    myAsn: number;
    peerAsn: number;
    peerAddress: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
}
export const BgpPeersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    bgpPeerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        myAsn: Schema.Number,
        peerAsn: Schema.Number,
        peerAddress: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<BgpPeersCreateOrUpdateInput>;

// Output Schema
export interface BgpPeersCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const BgpPeersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BgpPeersCreateOrUpdateOutput>;

// The operation
/**
 * Create a BgpPeer
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param bgpPeerName - The name of the BgpPeer
 */
export const BgpPeersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BgpPeersCreateOrUpdateInput,
    outputSchema: BgpPeersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface BgpPeersDeleteInput {
  resourceUri: string;
  bgpPeerName: string;
}
export const BgpPeersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  bgpPeerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<BgpPeersDeleteInput>;

// Output Schema
export type BgpPeersDeleteOutput = void;
export const BgpPeersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BgpPeersDeleteOutput>;

// The operation
/**
 * Delete a BgpPeer
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param bgpPeerName - The name of the BgpPeer
 */
export const BgpPeersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BgpPeersDeleteInput,
  outputSchema: BgpPeersDeleteOutput,
}));
// Input Schema
export interface BgpPeersGetInput {
  resourceUri: string;
  bgpPeerName: string;
}
export const BgpPeersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  bgpPeerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<BgpPeersGetInput>;

// Output Schema
export interface BgpPeersGetOutput {
  id?: string;
  name?: string;
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
export const BgpPeersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<BgpPeersGetOutput>;

// The operation
/**
 * Get a BgpPeer
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param bgpPeerName - The name of the BgpPeer
 */
export const BgpPeersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BgpPeersGetInput,
  outputSchema: BgpPeersGetOutput,
}));
// Input Schema
export interface BgpPeersListInput {
  resourceUri: string;
}
export const BgpPeersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<BgpPeersListInput>;

// Output Schema
export interface BgpPeersListOutput {
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
export const BgpPeersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BgpPeersListOutput>;

// The operation
/**
 * List BgpPeer resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const BgpPeersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BgpPeersListInput,
  outputSchema: BgpPeersListOutput,
}));
// Input Schema
export interface LoadBalancersCreateOrUpdateInput {
  resourceUri: string;
  loadBalancerName: string;
  properties?: {
    addresses: string[];
    serviceSelector?: Record<string, string>;
    advertiseMode: "ARP" | "BGP" | "Both";
    bgpPeers?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
}
export const LoadBalancersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    loadBalancerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        addresses: Schema.Array(Schema.String),
        serviceSelector: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        advertiseMode: Schema.Literals(["ARP", "BGP", "Both"]),
        bgpPeers: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers/{loadBalancerName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<LoadBalancersCreateOrUpdateInput>;

// Output Schema
export interface LoadBalancersCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const LoadBalancersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<LoadBalancersCreateOrUpdateOutput>;

// The operation
/**
 * Create a LoadBalancer
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param loadBalancerName - The name of the LoadBalancer
 */
export const LoadBalancersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LoadBalancersCreateOrUpdateInput,
    outputSchema: LoadBalancersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface LoadBalancersDeleteInput {
  resourceUri: string;
  loadBalancerName: string;
}
export const LoadBalancersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    loadBalancerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers/{loadBalancerName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<LoadBalancersDeleteInput>;

// Output Schema
export type LoadBalancersDeleteOutput = void;
export const LoadBalancersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LoadBalancersDeleteOutput>;

// The operation
/**
 * Delete a LoadBalancer
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param loadBalancerName - The name of the LoadBalancer
 */
export const LoadBalancersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LoadBalancersDeleteInput,
  outputSchema: LoadBalancersDeleteOutput,
}));
// Input Schema
export interface LoadBalancersGetInput {
  resourceUri: string;
  loadBalancerName: string;
}
export const LoadBalancersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  loadBalancerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers/{loadBalancerName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<LoadBalancersGetInput>;

// Output Schema
export interface LoadBalancersGetOutput {
  id?: string;
  name?: string;
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
export const LoadBalancersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<LoadBalancersGetOutput>;

// The operation
/**
 * Get a LoadBalancer
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param loadBalancerName - The name of the LoadBalancer
 */
export const LoadBalancersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LoadBalancersGetInput,
  outputSchema: LoadBalancersGetOutput,
}));
// Input Schema
export interface LoadBalancersListInput {
  resourceUri: string;
}
export const LoadBalancersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceUri: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<LoadBalancersListInput>;

// Output Schema
export interface LoadBalancersListOutput {
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
export const LoadBalancersListOutput =
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
  }) as unknown as Schema.Codec<LoadBalancersListOutput>;

// The operation
/**
 * List LoadBalancer resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const LoadBalancersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LoadBalancersListInput,
  outputSchema: LoadBalancersListOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.KubernetesRuntime/operations",
    apiVersion: "2024-03-01",
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
}) as unknown as Schema.Codec<OperationsListOutput>;

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
export interface ServicesCreateOrUpdateInput {
  resourceUri: string;
  serviceName: string;
  properties?: {
    rpObjectId?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
}
export const ServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        rpObjectId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<ServicesCreateOrUpdateInput>;

// Output Schema
export interface ServicesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create a ServiceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param serviceName - The name of the the service
 */
export const ServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesCreateOrUpdateInput,
    outputSchema: ServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ServicesDeleteInput {
  resourceUri: string;
  serviceName: string;
}
export const ServicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<ServicesDeleteInput>;

// Output Schema
export type ServicesDeleteOutput = void;
export const ServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesDeleteOutput>;

// The operation
/**
 * Delete a ServiceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param serviceName - The name of the the service
 */
export const ServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export interface ServicesGetInput {
  resourceUri: string;
  serviceName: string;
}
export const ServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<ServicesGetInput>;

// Output Schema
export interface ServicesGetOutput {
  id?: string;
  name?: string;
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
export const ServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ServicesGetOutput>;

// The operation
/**
 * Get a ServiceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param serviceName - The name of the the service
 */
export const ServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export interface ServicesListInput {
  resourceUri: string;
}
export const ServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<ServicesListInput>;

// Output Schema
export interface ServicesListOutput {
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
export const ServicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesListOutput>;

// The operation
/**
 * List ServiceResource resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const ServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesListInput,
  outputSchema: ServicesListOutput,
}));
// Input Schema
export interface StorageClassCreateOrUpdateInput {
  resourceUri: string;
  storageClassName: string;
  properties?: {
    allowVolumeExpansion?: "Allow" | "Disallow";
    mountOptions?: string[];
    provisioner?: string;
    volumeBindingMode?: "Immediate" | "WaitForFirstConsumer";
    accessModes?: ("ReadWriteOnce" | "ReadWriteMany")[];
    dataResilience?: "NotDataResilient" | "DataResilient";
    failoverSpeed?: "NotAvailable" | "Slow" | "Fast" | "Super";
    limitations?: string[];
    performance?: "Undefined" | "Basic" | "Standard" | "Premium" | "Ultra";
    priority?: number;
    typeProperties: { type: "Native" | "RWX" | "Blob" | "NFS" | "SMB" };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
}
export const StorageClassCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    storageClassName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        allowVolumeExpansion: Schema.optional(
          Schema.Literals(["Allow", "Disallow"]),
        ),
        mountOptions: Schema.optional(Schema.Array(Schema.String)),
        provisioner: Schema.optional(Schema.String),
        volumeBindingMode: Schema.optional(
          Schema.Literals(["Immediate", "WaitForFirstConsumer"]),
        ),
        accessModes: Schema.optional(
          Schema.Array(Schema.Literals(["ReadWriteOnce", "ReadWriteMany"])),
        ),
        dataResilience: Schema.optional(
          Schema.Literals(["NotDataResilient", "DataResilient"]),
        ),
        failoverSpeed: Schema.optional(
          Schema.Literals(["NotAvailable", "Slow", "Fast", "Super"]),
        ),
        limitations: Schema.optional(Schema.Array(Schema.String)),
        performance: Schema.optional(
          Schema.Literals([
            "Undefined",
            "Basic",
            "Standard",
            "Premium",
            "Ultra",
          ]),
        ),
        priority: Schema.optional(Schema.Number),
        typeProperties: Schema.Struct({
          type: Schema.Literals(["Native", "RWX", "Blob", "NFS", "SMB"]),
        }),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<StorageClassCreateOrUpdateInput>;

// Output Schema
export interface StorageClassCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageClassCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageClassCreateOrUpdateOutput>;

// The operation
/**
 * Create a StorageClassResource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param storageClassName - The name of the the storage class
 */
export const StorageClassCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StorageClassCreateOrUpdateInput,
    outputSchema: StorageClassCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface StorageClassDeleteInput {
  resourceUri: string;
  storageClassName: string;
}
export const StorageClassDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    storageClassName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<StorageClassDeleteInput>;

// Output Schema
export type StorageClassDeleteOutput = void;
export const StorageClassDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageClassDeleteOutput>;

// The operation
/**
 * Delete a StorageClassResource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param storageClassName - The name of the the storage class
 */
export const StorageClassDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StorageClassDeleteInput,
  outputSchema: StorageClassDeleteOutput,
}));
// Input Schema
export interface StorageClassGetInput {
  resourceUri: string;
  storageClassName: string;
}
export const StorageClassGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  storageClassName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<StorageClassGetInput>;

// Output Schema
export interface StorageClassGetOutput {
  id?: string;
  name?: string;
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
export const StorageClassGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<StorageClassGetOutput>;

// The operation
/**
 * Get a StorageClassResource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param storageClassName - The name of the the storage class
 */
export const StorageClassGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StorageClassGetInput,
  outputSchema: StorageClassGetOutput,
}));
// Input Schema
export interface StorageClassListInput {
  resourceUri: string;
}
export const StorageClassListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<StorageClassListInput>;

// Output Schema
export interface StorageClassListOutput {
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
export const StorageClassListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<StorageClassListOutput>;

// The operation
/**
 * List StorageClassResource resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const StorageClassList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StorageClassListInput,
  outputSchema: StorageClassListOutput,
}));
// Input Schema
export interface StorageClassUpdateInput {
  resourceUri: string;
  storageClassName: string;
  properties?: {
    allowVolumeExpansion?: "Allow" | "Disallow";
    mountOptions?: string[];
    accessModes?: ("ReadWriteOnce" | "ReadWriteMany")[];
    dataResilience?: "NotDataResilient" | "DataResilient";
    failoverSpeed?: "NotAvailable" | "Slow" | "Fast" | "Super";
    limitations?: string[];
    performance?: "Undefined" | "Basic" | "Standard" | "Premium" | "Ultra";
    priority?: number;
    typeProperties?: {
      backingStorageClassName?: string;
      azureStorageAccountName?: string;
      azureStorageAccountKey?: string;
      server?: string;
      share?: string;
      subDir?: string;
      mountPermissions?: string;
      onDelete?: "Delete" | "Retain";
      source?: string;
      username?: string;
      password?: string | Redacted.Redacted<string>;
      domain?: string;
    };
  };
}
export const StorageClassUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    storageClassName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        allowVolumeExpansion: Schema.optional(
          Schema.Literals(["Allow", "Disallow"]),
        ),
        mountOptions: Schema.optional(Schema.Array(Schema.String)),
        accessModes: Schema.optional(
          Schema.Array(Schema.Literals(["ReadWriteOnce", "ReadWriteMany"])),
        ),
        dataResilience: Schema.optional(
          Schema.Literals(["NotDataResilient", "DataResilient"]),
        ),
        failoverSpeed: Schema.optional(
          Schema.Literals(["NotAvailable", "Slow", "Fast", "Super"]),
        ),
        limitations: Schema.optional(Schema.Array(Schema.String)),
        performance: Schema.optional(
          Schema.Literals([
            "Undefined",
            "Basic",
            "Standard",
            "Premium",
            "Ultra",
          ]),
        ),
        priority: Schema.optional(Schema.Number),
        typeProperties: Schema.optional(
          Schema.Struct({
            backingStorageClassName: Schema.optional(Schema.String),
            azureStorageAccountName: Schema.optional(Schema.String),
            azureStorageAccountKey: Schema.optional(Schema.String),
            server: Schema.optional(Schema.String),
            share: Schema.optional(Schema.String),
            subDir: Schema.optional(Schema.String),
            mountPermissions: Schema.optional(Schema.String),
            onDelete: Schema.optional(Schema.Literals(["Delete", "Retain"])),
            source: Schema.optional(Schema.String),
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
            domain: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<StorageClassUpdateInput>;

// Output Schema
export interface StorageClassUpdateOutput {
  id?: string;
  name?: string;
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
export const StorageClassUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageClassUpdateOutput>;

// The operation
/**
 * Update a StorageClassResource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param storageClassName - The name of the the storage class
 */
export const StorageClassUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StorageClassUpdateInput,
  outputSchema: StorageClassUpdateOutput,
}));
