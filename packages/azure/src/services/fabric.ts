/**
 * Azure Fabric API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface FabricCapacitiesCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name?: string;
  type?: string;
}
export const FabricCapacitiesCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Fabric/locations/{location}/checkNameAvailability",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesCheckNameAvailabilityInput>;

// Output Schema
export interface FabricCapacitiesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const FabricCapacitiesCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FabricCapacitiesCheckNameAvailabilityOutput>;

// The operation
/**
 * Implements local CheckNameAvailability operations
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const FabricCapacitiesCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FabricCapacitiesCheckNameAvailabilityInput,
    outputSchema: FabricCapacitiesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface FabricCapacitiesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  capacityName: string;
  properties: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting"
      | "Provisioning"
      | "Updating";
    state?:
      | "Active"
      | "Provisioning"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Suspending"
      | "Suspended"
      | "Pausing"
      | "Paused"
      | "Resuming"
      | "Scaling"
      | "Preparing";
    administration: { members: string[] };
  };
  sku: { name: string; tier: "Fabric" };
  tags?: Record<string, string>;
  location: string;
}
export const FabricCapacitiesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Deleting",
          "Provisioning",
          "Updating",
        ]),
      ),
      state: Schema.optional(
        Schema.Literals([
          "Active",
          "Provisioning",
          "Failed",
          "Updating",
          "Deleting",
          "Suspending",
          "Suspended",
          "Pausing",
          "Paused",
          "Resuming",
          "Scaling",
          "Preparing",
        ]),
      ),
      administration: Schema.Struct({
        members: Schema.Array(Schema.String),
      }),
    }),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.Literals(["Fabric"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesCreateOrUpdateInput>;

// Output Schema
export interface FabricCapacitiesCreateOrUpdateOutput {
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
export const FabricCapacitiesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FabricCapacitiesCreateOrUpdateOutput>;

// The operation
/**
 * Create a FabricCapacity
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityName - The name of the Microsoft Fabric capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const FabricCapacitiesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FabricCapacitiesCreateOrUpdateInput,
    outputSchema: FabricCapacitiesCreateOrUpdateOutput,
  }));
// Input Schema
export interface FabricCapacitiesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  capacityName: string;
}
export const FabricCapacitiesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesDeleteInput>;

// Output Schema
export type FabricCapacitiesDeleteOutput = void;
export const FabricCapacitiesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FabricCapacitiesDeleteOutput>;

// The operation
/**
 * Delete a FabricCapacity
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityName - The name of the Microsoft Fabric capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const FabricCapacitiesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FabricCapacitiesDeleteInput,
  outputSchema: FabricCapacitiesDeleteOutput,
}));
// Input Schema
export interface FabricCapacitiesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  capacityName: string;
}
export const FabricCapacitiesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesGetInput>;

// Output Schema
export interface FabricCapacitiesGetOutput {
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
export const FabricCapacitiesGetOutput =
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
  }) as unknown as Schema.Codec<FabricCapacitiesGetOutput>;

// The operation
/**
 * Get a FabricCapacity
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityName - The name of the Microsoft Fabric capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const FabricCapacitiesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FabricCapacitiesGetInput,
  outputSchema: FabricCapacitiesGetOutput,
}));
// Input Schema
export interface FabricCapacitiesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const FabricCapacitiesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesListByResourceGroupInput>;

// Output Schema
export interface FabricCapacitiesListByResourceGroupOutput {
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
export const FabricCapacitiesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<FabricCapacitiesListByResourceGroupOutput>;

// The operation
/**
 * List FabricCapacity resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const FabricCapacitiesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FabricCapacitiesListByResourceGroupInput,
    outputSchema: FabricCapacitiesListByResourceGroupOutput,
  }));
// Input Schema
export interface FabricCapacitiesListBySubscriptionInput {
  subscriptionId: string;
}
export const FabricCapacitiesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Fabric/capacities",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesListBySubscriptionInput>;

// Output Schema
export interface FabricCapacitiesListBySubscriptionOutput {
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
export const FabricCapacitiesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<FabricCapacitiesListBySubscriptionOutput>;

// The operation
/**
 * List FabricCapacity resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const FabricCapacitiesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FabricCapacitiesListBySubscriptionInput,
    outputSchema: FabricCapacitiesListBySubscriptionOutput,
  }));
// Input Schema
export interface FabricCapacitiesListSkusInput {
  subscriptionId: string;
}
export const FabricCapacitiesListSkusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Fabric/skus",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesListSkusInput>;

// Output Schema
export interface FabricCapacitiesListSkusOutput {
  value: { resourceType: string; name: string; locations: string[] }[];
  nextLink?: string;
}
export const FabricCapacitiesListSkusOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        resourceType: Schema.String,
        name: Schema.String,
        locations: Schema.Array(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FabricCapacitiesListSkusOutput>;

// The operation
/**
 * List eligible SKUs for Microsoft Fabric resource provider
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const FabricCapacitiesListSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: FabricCapacitiesListSkusInput,
  outputSchema: FabricCapacitiesListSkusOutput,
}));
// Input Schema
export interface FabricCapacitiesListSkusForCapacityInput {
  subscriptionId: string;
  resourceGroupName: string;
  capacityName: string;
}
export const FabricCapacitiesListSkusForCapacityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}/skus",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesListSkusForCapacityInput>;

// Output Schema
export interface FabricCapacitiesListSkusForCapacityOutput {
  value: { resourceType: string; sku: { name: string; tier: "Fabric" } }[];
  nextLink?: string;
}
export const FabricCapacitiesListSkusForCapacityOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        resourceType: Schema.String,
        sku: Schema.Struct({
          name: Schema.String,
          tier: Schema.Literals(["Fabric"]),
        }),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FabricCapacitiesListSkusForCapacityOutput>;

// The operation
/**
 * List eligible SKUs for a Microsoft Fabric resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityName - The name of the Microsoft Fabric capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const FabricCapacitiesListSkusForCapacity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FabricCapacitiesListSkusForCapacityInput,
    outputSchema: FabricCapacitiesListSkusForCapacityOutput,
  }));
// Input Schema
export interface FabricCapacitiesResumeInput {
  subscriptionId: string;
  resourceGroupName: string;
  capacityName: string;
}
export const FabricCapacitiesResumeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}/resume",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesResumeInput>;

// Output Schema
export type FabricCapacitiesResumeOutput = void;
export const FabricCapacitiesResumeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FabricCapacitiesResumeOutput>;

// The operation
/**
 * Resume operation of the specified Fabric capacity instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityName - The name of the Microsoft Fabric capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const FabricCapacitiesResume = /*@__PURE__*/ API.make(() => ({
  inputSchema: FabricCapacitiesResumeInput,
  outputSchema: FabricCapacitiesResumeOutput,
}));
// Input Schema
export interface FabricCapacitiesSuspendInput {
  subscriptionId: string;
  resourceGroupName: string;
  capacityName: string;
}
export const FabricCapacitiesSuspendInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}/suspend",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesSuspendInput>;

// Output Schema
export type FabricCapacitiesSuspendOutput = void;
export const FabricCapacitiesSuspendOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FabricCapacitiesSuspendOutput>;

// The operation
/**
 * Suspend operation of the specified Fabric capacity instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityName - The name of the Microsoft Fabric capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const FabricCapacitiesSuspend = /*@__PURE__*/ API.make(() => ({
  inputSchema: FabricCapacitiesSuspendInput,
  outputSchema: FabricCapacitiesSuspendOutput,
}));
// Input Schema
export interface FabricCapacitiesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  capacityName: string;
  sku?: { name: string; tier: "Fabric" };
  tags?: Record<string, string>;
  properties?: { administration?: { members: string[] } };
}
export const FabricCapacitiesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    capacityName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.Literals(["Fabric"]),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        administration: Schema.optional(
          Schema.Struct({
            members: Schema.Array(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric/capacities/{capacityName}",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<FabricCapacitiesUpdateInput>;

// Output Schema
export interface FabricCapacitiesUpdateOutput {
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
export const FabricCapacitiesUpdateOutput =
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
  }) as unknown as Schema.Codec<FabricCapacitiesUpdateOutput>;

// The operation
/**
 * Update a FabricCapacity
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param capacityName - The name of the Microsoft Fabric capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const FabricCapacitiesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FabricCapacitiesUpdateInput,
  outputSchema: FabricCapacitiesUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Fabric/operations",
    apiVersion: "2023-11-01",
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
