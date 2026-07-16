/**
 * Azure Dnc API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ControllerCreateInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  properties?: {
    resourceGuid?: string;
    provisioningState?: "Deleting" | "Succeeded" | "Failed" | "Provisioning";
    dncAppId?: string;
    dncTenantId?: string;
    dncEndpoint?: string;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ControllerCreateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      resourceGuid: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals(["Deleting", "Succeeded", "Failed", "Provisioning"]),
      ),
      dncAppId: Schema.optional(Schema.String),
      dncTenantId: Schema.optional(Schema.String),
      dncEndpoint: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/controller/{resourceName}",
    apiVersion: "2021-03-15",
  }),
) as unknown as Schema.Codec<ControllerCreateInput>;

// Output Schema
export interface ControllerCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ControllerCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<ControllerCreateOutput>;

// The operation
/**
 * Create a dnc controller
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ControllerCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ControllerCreateInput,
  outputSchema: ControllerCreateOutput,
}));
// Input Schema
export interface ControllerDeleteInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const ControllerDeleteInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/controller/{resourceName}",
    apiVersion: "2021-03-15",
  }),
) as unknown as Schema.Codec<ControllerDeleteInput>;

// Output Schema
export type ControllerDeleteOutput = void;
export const ControllerDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ControllerDeleteOutput>;

// The operation
/**
 * Deletes the DNC controller
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ControllerDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ControllerDeleteInput,
  outputSchema: ControllerDeleteOutput,
}));
// Input Schema
export interface ControllerGetDetailsInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const ControllerGetDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/controller/{resourceName}",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<ControllerGetDetailsInput>;

// Output Schema
export interface ControllerGetDetailsOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ControllerGetDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ControllerGetDetailsOutput>;

// The operation
/**
 * Gets details about the specified dnc controller.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ControllerGetDetails = /*@__PURE__*/ API.make(() => ({
  inputSchema: ControllerGetDetailsInput,
  outputSchema: ControllerGetDetailsOutput,
}));
// Input Schema
export interface ControllerPatchInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const ControllerPatchInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/controller/{resourceName}",
    apiVersion: "2021-03-15",
  }),
) as unknown as Schema.Codec<ControllerPatchInput>;

// Output Schema
export interface ControllerPatchOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ControllerPatchOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<ControllerPatchOutput>;

// The operation
/**
 * Update dnc controller
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ControllerPatch = /*@__PURE__*/ API.make(() => ({
  inputSchema: ControllerPatchInput,
  outputSchema: ControllerPatchOutput,
}));
// Input Schema
export interface DelegatedNetworkListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const DelegatedNetworkListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/controllers",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<DelegatedNetworkListByResourceGroupInput>;

// Output Schema
export interface DelegatedNetworkListByResourceGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const DelegatedNetworkListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DelegatedNetworkListByResourceGroupOutput>;

// The operation
/**
 * Get all the delegatedController resources in a resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DelegatedNetworkListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DelegatedNetworkListByResourceGroupInput,
    outputSchema: DelegatedNetworkListByResourceGroupOutput,
  }));
// Input Schema
export interface DelegatedNetworkListBySubscriptionInput {
  subscriptionId: string;
}
export const DelegatedNetworkListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DelegatedNetwork/controllers",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<DelegatedNetworkListBySubscriptionInput>;

// Output Schema
export interface DelegatedNetworkListBySubscriptionOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const DelegatedNetworkListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DelegatedNetworkListBySubscriptionOutput>;

// The operation
/**
 * Get all the delegatedController resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DelegatedNetworkListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DelegatedNetworkListBySubscriptionInput,
    outputSchema: DelegatedNetworkListBySubscriptionOutput,
  }));
// Input Schema
export interface DelegatedSubnetServiceDeleteDetailsInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  forceDelete?: boolean;
}
export const DelegatedSubnetServiceDeleteDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    forceDelete: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/delegatedSubnets/{resourceName}",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<DelegatedSubnetServiceDeleteDetailsInput>;

// Output Schema
export type DelegatedSubnetServiceDeleteDetailsOutput = void;
export const DelegatedSubnetServiceDeleteDetailsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DelegatedSubnetServiceDeleteDetailsOutput>;

// The operation
/**
 * Delete dnc DelegatedSubnet.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param forceDelete - Force delete resource
 */
export const DelegatedSubnetServiceDeleteDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DelegatedSubnetServiceDeleteDetailsInput,
    outputSchema: DelegatedSubnetServiceDeleteDetailsOutput,
  }));
// Input Schema
export interface DelegatedSubnetServiceGetDetailsInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const DelegatedSubnetServiceGetDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/delegatedSubnets/{resourceName}",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<DelegatedSubnetServiceGetDetailsInput>;

// Output Schema
export interface DelegatedSubnetServiceGetDetailsOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const DelegatedSubnetServiceGetDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<DelegatedSubnetServiceGetDetailsOutput>;

// The operation
/**
 * Gets details about the specified dnc DelegatedSubnet Link.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DelegatedSubnetServiceGetDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DelegatedSubnetServiceGetDetailsInput,
    outputSchema: DelegatedSubnetServiceGetDetailsOutput,
  }));
// Input Schema
export interface DelegatedSubnetServiceListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const DelegatedSubnetServiceListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/delegatedSubnets",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<DelegatedSubnetServiceListByResourceGroupInput>;

// Output Schema
export interface DelegatedSubnetServiceListByResourceGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const DelegatedSubnetServiceListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DelegatedSubnetServiceListByResourceGroupOutput>;

// The operation
/**
 * Get all the DelegatedSubnets resources in a resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DelegatedSubnetServiceListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DelegatedSubnetServiceListByResourceGroupInput,
    outputSchema: DelegatedSubnetServiceListByResourceGroupOutput,
  }));
// Input Schema
export interface DelegatedSubnetServiceListBySubscriptionInput {
  subscriptionId: string;
}
export const DelegatedSubnetServiceListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DelegatedNetwork/delegatedSubnets",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<DelegatedSubnetServiceListBySubscriptionInput>;

// Output Schema
export interface DelegatedSubnetServiceListBySubscriptionOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const DelegatedSubnetServiceListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DelegatedSubnetServiceListBySubscriptionOutput>;

// The operation
/**
 * Get all the DelegatedSubnets resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DelegatedSubnetServiceListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DelegatedSubnetServiceListBySubscriptionInput,
    outputSchema: DelegatedSubnetServiceListBySubscriptionOutput,
  }));
// Input Schema
export interface DelegatedSubnetServicePatchDetailsInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const DelegatedSubnetServicePatchDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/delegatedSubnets/{resourceName}",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<DelegatedSubnetServicePatchDetailsInput>;

// Output Schema
export interface DelegatedSubnetServicePatchDetailsOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const DelegatedSubnetServicePatchDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<DelegatedSubnetServicePatchDetailsOutput>;

// The operation
/**
 * Patch delegated subnet resource
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DelegatedSubnetServicePatchDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DelegatedSubnetServicePatchDetailsInput,
    outputSchema: DelegatedSubnetServicePatchDetailsOutput,
  }));
// Input Schema
export interface DelegatedSubnetServicePutDetailsInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  properties?: {
    resourceGuid?: string;
    provisioningState?: "Deleting" | "Succeeded" | "Failed" | "Provisioning";
    subnetDetails?: { id?: string };
    controllerDetails?: { id?: string };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const DelegatedSubnetServicePutDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        resourceGuid: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Deleting", "Succeeded", "Failed", "Provisioning"]),
        ),
        subnetDetails: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        controllerDetails: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/delegatedSubnets/{resourceName}",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<DelegatedSubnetServicePutDetailsInput>;

// Output Schema
export interface DelegatedSubnetServicePutDetailsOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const DelegatedSubnetServicePutDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<DelegatedSubnetServicePutDetailsOutput>;

// The operation
/**
 * Put delegated subnet resource
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DelegatedSubnetServicePutDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DelegatedSubnetServicePutDetailsInput,
    outputSchema: DelegatedSubnetServicePutDetailsOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DelegatedNetwork/operations",
    apiVersion: "2021-03-15",
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
 * Lists all of the available DelegatedNetwork service REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OrchestratorInstanceServiceCreateInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  properties?: {
    resourceGuid?: string;
    provisioningState?: "Deleting" | "Succeeded" | "Failed" | "Provisioning";
    orchestratorAppId?: string;
    orchestratorTenantId?: string;
    clusterRootCA?: string;
    apiServerEndpoint?: string;
    privateLinkResourceId?: string;
    controllerDetails: { id?: string };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  kind: "Kubernetes";
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
  tags?: Record<string, string>;
}
export const OrchestratorInstanceServiceCreateInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        resourceGuid: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Deleting", "Succeeded", "Failed", "Provisioning"]),
        ),
        orchestratorAppId: Schema.optional(Schema.String),
        orchestratorTenantId: Schema.optional(Schema.String),
        clusterRootCA: Schema.optional(Schema.String),
        apiServerEndpoint: Schema.optional(Schema.String),
        privateLinkResourceId: Schema.optional(Schema.String),
        controllerDetails: Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    kind: Schema.Literals(["Kubernetes"]),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/orchestrators/{resourceName}",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<OrchestratorInstanceServiceCreateInput>;

// Output Schema
export interface OrchestratorInstanceServiceCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  kind: "Kubernetes";
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
  tags?: Record<string, string>;
}
export const OrchestratorInstanceServiceCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    kind: Schema.Literals(["Kubernetes"]),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<OrchestratorInstanceServiceCreateOutput>;

// The operation
/**
 * Create a orchestrator instance
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const OrchestratorInstanceServiceCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OrchestratorInstanceServiceCreateInput,
    outputSchema: OrchestratorInstanceServiceCreateOutput,
  }));
// Input Schema
export interface OrchestratorInstanceServiceDeleteInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  forceDelete?: boolean;
}
export const OrchestratorInstanceServiceDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    forceDelete: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/orchestrators/{resourceName}",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<OrchestratorInstanceServiceDeleteInput>;

// Output Schema
export type OrchestratorInstanceServiceDeleteOutput = void;
export const OrchestratorInstanceServiceDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OrchestratorInstanceServiceDeleteOutput>;

// The operation
/**
 * Deletes the Orchestrator Instance
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param forceDelete - Force delete resource
 */
export const OrchestratorInstanceServiceDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OrchestratorInstanceServiceDeleteInput,
    outputSchema: OrchestratorInstanceServiceDeleteOutput,
  }));
// Input Schema
export interface OrchestratorInstanceServiceGetDetailsInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const OrchestratorInstanceServiceGetDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/orchestrators/{resourceName}",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<OrchestratorInstanceServiceGetDetailsInput>;

// Output Schema
export interface OrchestratorInstanceServiceGetDetailsOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  kind: "Kubernetes";
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
  tags?: Record<string, string>;
}
export const OrchestratorInstanceServiceGetDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    kind: Schema.Literals(["Kubernetes"]),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<OrchestratorInstanceServiceGetDetailsOutput>;

// The operation
/**
 * Gets details about the orchestrator instance.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const OrchestratorInstanceServiceGetDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OrchestratorInstanceServiceGetDetailsInput,
    outputSchema: OrchestratorInstanceServiceGetDetailsOutput,
  }));
// Input Schema
export interface OrchestratorInstanceServiceListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const OrchestratorInstanceServiceListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/orchestrators",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<OrchestratorInstanceServiceListByResourceGroupInput>;

// Output Schema
export interface OrchestratorInstanceServiceListByResourceGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    kind: "Kubernetes";
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const OrchestratorInstanceServiceListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        kind: Schema.Literals(["Kubernetes"]),
        identity: Schema.optional(
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
            type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
          }),
        ),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OrchestratorInstanceServiceListByResourceGroupOutput>;

// The operation
/**
 * Get all the OrchestratorInstances resources in a resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const OrchestratorInstanceServiceListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OrchestratorInstanceServiceListByResourceGroupInput,
    outputSchema: OrchestratorInstanceServiceListByResourceGroupOutput,
  }));
// Input Schema
export interface OrchestratorInstanceServiceListBySubscriptionInput {
  subscriptionId: string;
}
export const OrchestratorInstanceServiceListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DelegatedNetwork/orchestrators",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<OrchestratorInstanceServiceListBySubscriptionInput>;

// Output Schema
export interface OrchestratorInstanceServiceListBySubscriptionOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    kind: "Kubernetes";
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const OrchestratorInstanceServiceListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        kind: Schema.Literals(["Kubernetes"]),
        identity: Schema.optional(
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
            type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
          }),
        ),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OrchestratorInstanceServiceListBySubscriptionOutput>;

// The operation
/**
 * Get all the orchestratorInstance resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const OrchestratorInstanceServiceListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OrchestratorInstanceServiceListBySubscriptionInput,
    outputSchema: OrchestratorInstanceServiceListBySubscriptionOutput,
  }));
// Input Schema
export interface OrchestratorInstanceServicePatchInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const OrchestratorInstanceServicePatchInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DelegatedNetwork/orchestrators/{resourceName}",
      apiVersion: "2021-03-15",
    }),
  ) as unknown as Schema.Codec<OrchestratorInstanceServicePatchInput>;

// Output Schema
export interface OrchestratorInstanceServicePatchOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  kind: "Kubernetes";
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
  tags?: Record<string, string>;
}
export const OrchestratorInstanceServicePatchOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    kind: Schema.Literals(["Kubernetes"]),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<OrchestratorInstanceServicePatchOutput>;

// The operation
/**
 * Update Orchestrator Instance
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const OrchestratorInstanceServicePatch =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OrchestratorInstanceServicePatchInput,
    outputSchema: OrchestratorInstanceServicePatchOutput,
  }));
