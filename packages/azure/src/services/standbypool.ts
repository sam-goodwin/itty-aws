/**
 * Azure Standbypool API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.StandbyPool/operations",
    apiVersion: "2026-04-01",
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
export interface StandbyContainerGroupPoolRuntimeViewsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyContainerGroupPoolName: string;
  runtimeView: string;
}
export const StandbyContainerGroupPoolRuntimeViewsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
    runtimeView: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}/runtimeViews/{runtimeView}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyContainerGroupPoolRuntimeViewsGetInput>;

// Output Schema
export interface StandbyContainerGroupPoolRuntimeViewsGetOutput {
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
export const StandbyContainerGroupPoolRuntimeViewsGetOutput =
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
  }) as unknown as Schema.Codec<StandbyContainerGroupPoolRuntimeViewsGetOutput>;

// The operation
/**
 * Get a StandbyContainerGroupPoolRuntimeViewResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyContainerGroupPoolName - Name of the standby container group pool
 * @param runtimeView - The unique identifier for the runtime view. The input string should be the word 'latest', which will get the latest runtime view of the pool, otherwise the request will fail with NotFound exception.
 */
export const StandbyContainerGroupPoolRuntimeViewsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyContainerGroupPoolRuntimeViewsGetInput,
    outputSchema: StandbyContainerGroupPoolRuntimeViewsGetOutput,
  }));
// Input Schema
export interface StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyContainerGroupPoolName: string;
}
export const StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}/runtimeViews",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolInput>;

// Output Schema
export interface StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOutput {
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
export const StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOutput =
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
  }) as unknown as Schema.Codec<StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOutput>;

// The operation
/**
 * List StandbyContainerGroupPoolRuntimeViewResource resources by StandbyContainerGroupPoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyContainerGroupPoolName - Name of the standby container group pool
 */
export const StandbyContainerGroupPoolRuntimeViewsListByStandbyPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolInput,
    outputSchema: StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOutput,
  }));
// Input Schema
export interface StandbyContainerGroupPoolsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyContainerGroupPoolName: string;
  properties?: {
    elasticityProfile: {
      maxReadyCapacity: number;
      refillPolicy?: "always";
      dynamicSizing?: { enabled?: boolean };
    };
    containerGroupProperties: {
      containerGroupProfile: { id: string; revision?: number };
      subnetIds?: { id: string }[];
    };
    zones?: string[];
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Deleting";
  };
  tags?: Record<string, string>;
  location: string;
}
export const StandbyContainerGroupPoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        elasticityProfile: Schema.Struct({
          maxReadyCapacity: Schema.Number,
          refillPolicy: Schema.optional(Schema.Literals(["always"])),
          dynamicSizing: Schema.optional(
            Schema.Struct({
              enabled: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
        containerGroupProperties: Schema.Struct({
          containerGroupProfile: Schema.Struct({
            id: Schema.String,
            revision: Schema.optional(Schema.Number),
          }),
          subnetIds: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
              }),
            ),
          ),
        }),
        zones: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Deleting"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyContainerGroupPoolsCreateOrUpdateInput>;

// Output Schema
export interface StandbyContainerGroupPoolsCreateOrUpdateOutput {
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
export const StandbyContainerGroupPoolsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StandbyContainerGroupPoolsCreateOrUpdateOutput>;

// The operation
/**
 * Create a StandbyContainerGroupPoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyContainerGroupPoolName - Name of the standby container group pool
 */
export const StandbyContainerGroupPoolsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyContainerGroupPoolsCreateOrUpdateInput,
    outputSchema: StandbyContainerGroupPoolsCreateOrUpdateOutput,
  }));
// Input Schema
export interface StandbyContainerGroupPoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyContainerGroupPoolName: string;
}
export const StandbyContainerGroupPoolsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyContainerGroupPoolsDeleteInput>;

// Output Schema
export type StandbyContainerGroupPoolsDeleteOutput = void;
export const StandbyContainerGroupPoolsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StandbyContainerGroupPoolsDeleteOutput>;

// The operation
/**
 * Delete a StandbyContainerGroupPoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyContainerGroupPoolName - Name of the standby container group pool
 */
export const StandbyContainerGroupPoolsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyContainerGroupPoolsDeleteInput,
    outputSchema: StandbyContainerGroupPoolsDeleteOutput,
  }));
// Input Schema
export interface StandbyContainerGroupPoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyContainerGroupPoolName: string;
}
export const StandbyContainerGroupPoolsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyContainerGroupPoolsGetInput>;

// Output Schema
export interface StandbyContainerGroupPoolsGetOutput {
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
export const StandbyContainerGroupPoolsGetOutput =
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
  }) as unknown as Schema.Codec<StandbyContainerGroupPoolsGetOutput>;

// The operation
/**
 * Get a StandbyContainerGroupPoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyContainerGroupPoolName - Name of the standby container group pool
 */
export const StandbyContainerGroupPoolsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyContainerGroupPoolsGetInput,
    outputSchema: StandbyContainerGroupPoolsGetOutput,
  }));
// Input Schema
export interface StandbyContainerGroupPoolsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const StandbyContainerGroupPoolsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyContainerGroupPoolsListByResourceGroupInput>;

// Output Schema
export interface StandbyContainerGroupPoolsListByResourceGroupOutput {
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
export const StandbyContainerGroupPoolsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<StandbyContainerGroupPoolsListByResourceGroupOutput>;

// The operation
/**
 * List StandbyContainerGroupPoolResource resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const StandbyContainerGroupPoolsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyContainerGroupPoolsListByResourceGroupInput,
    outputSchema: StandbyContainerGroupPoolsListByResourceGroupOutput,
  }));
// Input Schema
export interface StandbyContainerGroupPoolsListBySubscriptionInput {
  subscriptionId: string;
}
export const StandbyContainerGroupPoolsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyContainerGroupPools",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyContainerGroupPoolsListBySubscriptionInput>;

// Output Schema
export interface StandbyContainerGroupPoolsListBySubscriptionOutput {
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
export const StandbyContainerGroupPoolsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<StandbyContainerGroupPoolsListBySubscriptionOutput>;

// The operation
/**
 * List StandbyContainerGroupPoolResource resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const StandbyContainerGroupPoolsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyContainerGroupPoolsListBySubscriptionInput,
    outputSchema: StandbyContainerGroupPoolsListBySubscriptionOutput,
  }));
// Input Schema
export interface StandbyContainerGroupPoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyContainerGroupPoolName: string;
  tags?: Record<string, string>;
  properties?: {
    elasticityProfile?: {
      maxReadyCapacity: number;
      refillPolicy?: "always";
      dynamicSizing?: { enabled?: boolean };
    };
    containerGroupProperties?: {
      containerGroupProfile: { id: string; revision?: number };
      subnetIds?: { id: string }[];
    };
    zones?: string[];
  };
}
export const StandbyContainerGroupPoolsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        elasticityProfile: Schema.optional(
          Schema.Struct({
            maxReadyCapacity: Schema.Number,
            refillPolicy: Schema.optional(Schema.Literals(["always"])),
            dynamicSizing: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        containerGroupProperties: Schema.optional(
          Schema.Struct({
            containerGroupProfile: Schema.Struct({
              id: Schema.String,
              revision: Schema.optional(Schema.Number),
            }),
            subnetIds: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                }),
              ),
            ),
          }),
        ),
        zones: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyContainerGroupPoolsUpdateInput>;

// Output Schema
export interface StandbyContainerGroupPoolsUpdateOutput {
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
export const StandbyContainerGroupPoolsUpdateOutput =
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
  }) as unknown as Schema.Codec<StandbyContainerGroupPoolsUpdateOutput>;

// The operation
/**
 * Update a StandbyContainerGroupPoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyContainerGroupPoolName - Name of the standby container group pool
 */
export const StandbyContainerGroupPoolsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyContainerGroupPoolsUpdateInput,
    outputSchema: StandbyContainerGroupPoolsUpdateOutput,
  }));
// Input Schema
export interface StandbyVirtualMachinePoolRuntimeViewsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyVirtualMachinePoolName: string;
  runtimeView: string;
}
export const StandbyVirtualMachinePoolRuntimeViewsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
    runtimeView: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/runtimeViews/{runtimeView}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyVirtualMachinePoolRuntimeViewsGetInput>;

// Output Schema
export interface StandbyVirtualMachinePoolRuntimeViewsGetOutput {
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
export const StandbyVirtualMachinePoolRuntimeViewsGetOutput =
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
  }) as unknown as Schema.Codec<StandbyVirtualMachinePoolRuntimeViewsGetOutput>;

// The operation
/**
 * Get a StandbyVirtualMachinePoolRuntimeViewResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyVirtualMachinePoolName - Name of the standby virtual machine pool
 * @param runtimeView - The unique identifier for the runtime view. The input string should be the word 'latest', which will get the latest runtime view of the pool, otherwise the request will fail with NotFound exception.
 */
export const StandbyVirtualMachinePoolRuntimeViewsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyVirtualMachinePoolRuntimeViewsGetInput,
    outputSchema: StandbyVirtualMachinePoolRuntimeViewsGetOutput,
  }));
// Input Schema
export interface StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyVirtualMachinePoolName: string;
}
export const StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/runtimeViews",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolInput>;

// Output Schema
export interface StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOutput {
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
export const StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOutput =
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
  }) as unknown as Schema.Codec<StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOutput>;

// The operation
/**
 * List StandbyVirtualMachinePoolRuntimeViewResource resources by StandbyVirtualMachinePoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyVirtualMachinePoolName - Name of the standby virtual machine pool
 */
export const StandbyVirtualMachinePoolRuntimeViewsListByStandbyPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolInput,
    outputSchema: StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOutput,
  }));
// Input Schema
export interface StandbyVirtualMachinePoolsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyVirtualMachinePoolName: string;
  properties?: {
    elasticityProfile?: {
      maxReadyCapacity: number;
      minReadyCapacity?: number;
      postProvisioningDelay?: string;
      dynamicSizing?: { enabled?: boolean };
    };
    virtualMachineState: "Running" | "Deallocated" | "Hibernated" | "Mix";
    vmStateDistribution?: {
      runningPercent?: number;
      deallocatedPercent?: number;
      hibernatedPercent?: number;
    };
    attachedVirtualMachineScaleSetId?: string;
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Deleting";
  };
  tags?: Record<string, string>;
  location: string;
}
export const StandbyVirtualMachinePoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        elasticityProfile: Schema.optional(
          Schema.Struct({
            maxReadyCapacity: Schema.Number,
            minReadyCapacity: Schema.optional(Schema.Number),
            postProvisioningDelay: Schema.optional(Schema.String),
            dynamicSizing: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        virtualMachineState: Schema.Literals([
          "Running",
          "Deallocated",
          "Hibernated",
          "Mix",
        ]),
        vmStateDistribution: Schema.optional(
          Schema.Struct({
            runningPercent: Schema.optional(Schema.Number),
            deallocatedPercent: Schema.optional(Schema.Number),
            hibernatedPercent: Schema.optional(Schema.Number),
          }),
        ),
        attachedVirtualMachineScaleSetId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Deleting"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyVirtualMachinePoolsCreateOrUpdateInput>;

// Output Schema
export interface StandbyVirtualMachinePoolsCreateOrUpdateOutput {
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
export const StandbyVirtualMachinePoolsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StandbyVirtualMachinePoolsCreateOrUpdateOutput>;

// The operation
/**
 * Create a StandbyVirtualMachinePoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyVirtualMachinePoolName - Name of the standby virtual machine pool
 */
export const StandbyVirtualMachinePoolsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyVirtualMachinePoolsCreateOrUpdateInput,
    outputSchema: StandbyVirtualMachinePoolsCreateOrUpdateOutput,
  }));
// Input Schema
export interface StandbyVirtualMachinePoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyVirtualMachinePoolName: string;
}
export const StandbyVirtualMachinePoolsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyVirtualMachinePoolsDeleteInput>;

// Output Schema
export type StandbyVirtualMachinePoolsDeleteOutput = void;
export const StandbyVirtualMachinePoolsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<StandbyVirtualMachinePoolsDeleteOutput>;

// The operation
/**
 * Delete a StandbyVirtualMachinePoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyVirtualMachinePoolName - Name of the standby virtual machine pool
 */
export const StandbyVirtualMachinePoolsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyVirtualMachinePoolsDeleteInput,
    outputSchema: StandbyVirtualMachinePoolsDeleteOutput,
  }));
// Input Schema
export interface StandbyVirtualMachinePoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyVirtualMachinePoolName: string;
}
export const StandbyVirtualMachinePoolsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyVirtualMachinePoolsGetInput>;

// Output Schema
export interface StandbyVirtualMachinePoolsGetOutput {
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
export const StandbyVirtualMachinePoolsGetOutput =
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
  }) as unknown as Schema.Codec<StandbyVirtualMachinePoolsGetOutput>;

// The operation
/**
 * Get a StandbyVirtualMachinePoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyVirtualMachinePoolName - Name of the standby virtual machine pool
 */
export const StandbyVirtualMachinePoolsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyVirtualMachinePoolsGetInput,
    outputSchema: StandbyVirtualMachinePoolsGetOutput,
  }));
// Input Schema
export interface StandbyVirtualMachinePoolsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const StandbyVirtualMachinePoolsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyVirtualMachinePoolsListByResourceGroupInput>;

// Output Schema
export interface StandbyVirtualMachinePoolsListByResourceGroupOutput {
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
export const StandbyVirtualMachinePoolsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<StandbyVirtualMachinePoolsListByResourceGroupOutput>;

// The operation
/**
 * List StandbyVirtualMachinePoolResource resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const StandbyVirtualMachinePoolsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyVirtualMachinePoolsListByResourceGroupInput,
    outputSchema: StandbyVirtualMachinePoolsListByResourceGroupOutput,
  }));
// Input Schema
export interface StandbyVirtualMachinePoolsListBySubscriptionInput {
  subscriptionId: string;
}
export const StandbyVirtualMachinePoolsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyVirtualMachinePoolsListBySubscriptionInput>;

// Output Schema
export interface StandbyVirtualMachinePoolsListBySubscriptionOutput {
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
export const StandbyVirtualMachinePoolsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<StandbyVirtualMachinePoolsListBySubscriptionOutput>;

// The operation
/**
 * List StandbyVirtualMachinePoolResource resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const StandbyVirtualMachinePoolsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyVirtualMachinePoolsListBySubscriptionInput,
    outputSchema: StandbyVirtualMachinePoolsListBySubscriptionOutput,
  }));
// Input Schema
export interface StandbyVirtualMachinePoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyVirtualMachinePoolName: string;
  tags?: Record<string, string>;
  properties?: {
    elasticityProfile?: {
      maxReadyCapacity: number;
      minReadyCapacity?: number;
      postProvisioningDelay?: string;
      dynamicSizing?: { enabled?: boolean };
    };
    virtualMachineState?: "Running" | "Deallocated" | "Hibernated" | "Mix";
    vmStateDistribution?: {
      runningPercent?: number;
      deallocatedPercent?: number;
      hibernatedPercent?: number;
    };
    attachedVirtualMachineScaleSetId?: string;
  };
}
export const StandbyVirtualMachinePoolsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        elasticityProfile: Schema.optional(
          Schema.Struct({
            maxReadyCapacity: Schema.Number,
            minReadyCapacity: Schema.optional(Schema.Number),
            postProvisioningDelay: Schema.optional(Schema.String),
            dynamicSizing: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        virtualMachineState: Schema.optional(
          Schema.Literals(["Running", "Deallocated", "Hibernated", "Mix"]),
        ),
        vmStateDistribution: Schema.optional(
          Schema.Struct({
            runningPercent: Schema.optional(Schema.Number),
            deallocatedPercent: Schema.optional(Schema.Number),
            hibernatedPercent: Schema.optional(Schema.Number),
          }),
        ),
        attachedVirtualMachineScaleSetId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyVirtualMachinePoolsUpdateInput>;

// Output Schema
export interface StandbyVirtualMachinePoolsUpdateOutput {
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
export const StandbyVirtualMachinePoolsUpdateOutput =
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
  }) as unknown as Schema.Codec<StandbyVirtualMachinePoolsUpdateOutput>;

// The operation
/**
 * Update a StandbyVirtualMachinePoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyVirtualMachinePoolName - Name of the standby virtual machine pool
 */
export const StandbyVirtualMachinePoolsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StandbyVirtualMachinePoolsUpdateInput,
    outputSchema: StandbyVirtualMachinePoolsUpdateOutput,
  }));
// Input Schema
export interface StandbyVirtualMachinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyVirtualMachinePoolName: string;
  standbyVirtualMachineName: string;
}
export const StandbyVirtualMachinesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines/{standbyVirtualMachineName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyVirtualMachinesGetInput>;

// Output Schema
export interface StandbyVirtualMachinesGetOutput {
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
export const StandbyVirtualMachinesGetOutput =
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
  }) as unknown as Schema.Codec<StandbyVirtualMachinesGetOutput>;

// The operation
/**
 * Get a StandbyVirtualMachineResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyVirtualMachinePoolName - Name of the standby virtual machine pool
 * @param standbyVirtualMachineName - Name of the standby virtual machine
 */
export const StandbyVirtualMachinesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: StandbyVirtualMachinesGetInput,
    outputSchema: StandbyVirtualMachinesGetOutput,
  }),
);
// Input Schema
export interface StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  standbyVirtualMachinePoolName: string;
}
export const StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceInput>;

// Output Schema
export interface StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOutput {
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
export const StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOutput =
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
  }) as unknown as Schema.Codec<StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOutput>;

// The operation
/**
 * List StandbyVirtualMachineResource resources by StandbyVirtualMachinePoolResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param standbyVirtualMachinePoolName - Name of the standby virtual machine pool
 */
export const StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceInput,
    outputSchema:
      StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOutput,
  }));
