/**
 * Azure Powerbidedicated API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AutoScaleVCoresCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcoreName: string;
  properties?: { capacityLimit?: number };
  sku: { name: string; tier?: "AutoScale"; capacity?: number };
  tags?: Record<string, string>;
  location: string;
}
export const AutoScaleVCoresCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vcoreName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        capacityLimit: Schema.optional(Schema.Number),
      }),
    ),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(Schema.Literals(["AutoScale"])),
      capacity: Schema.optional(Schema.Number),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/autoScaleVCores/{vcoreName}",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<AutoScaleVCoresCreateInput>;

// Output Schema
export interface AutoScaleVCoresCreateOutput {
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
export const AutoScaleVCoresCreateOutput =
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
  }) as unknown as Schema.Codec<AutoScaleVCoresCreateOutput>;

// The operation
/**
 * Provisions the specified auto scale v-core based on the configuration specified in the request.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vcoreName - The name of the auto scale v-core. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const AutoScaleVCoresCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AutoScaleVCoresCreateInput,
    outputSchema: AutoScaleVCoresCreateOutput,
  }),
);
// Input Schema
export interface AutoScaleVCoresDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcoreName: string;
}
export const AutoScaleVCoresDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vcoreName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/autoScaleVCores/{vcoreName}",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<AutoScaleVCoresDeleteInput>;

// Output Schema
export type AutoScaleVCoresDeleteOutput = void;
export const AutoScaleVCoresDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AutoScaleVCoresDeleteOutput>;

// The operation
/**
 * Deletes the specified auto scale v-core.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vcoreName - The name of the auto scale v-core. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const AutoScaleVCoresDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AutoScaleVCoresDeleteInput,
    outputSchema: AutoScaleVCoresDeleteOutput,
  }),
);
// Input Schema
export interface AutoScaleVCoresGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcoreName: string;
}
export const AutoScaleVCoresGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vcoreName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/autoScaleVCores/{vcoreName}",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<AutoScaleVCoresGetInput>;

// Output Schema
export interface AutoScaleVCoresGetOutput {
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
export const AutoScaleVCoresGetOutput =
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
  }) as unknown as Schema.Codec<AutoScaleVCoresGetOutput>;

// The operation
/**
 * Gets details about the specified auto scale v-core.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vcoreName - The name of the auto scale v-core. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const AutoScaleVCoresGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AutoScaleVCoresGetInput,
  outputSchema: AutoScaleVCoresGetOutput,
}));
// Input Schema
export interface AutoScaleVCoresListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AutoScaleVCoresListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/autoScaleVCores",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<AutoScaleVCoresListByResourceGroupInput>;

// Output Schema
export interface AutoScaleVCoresListByResourceGroupOutput {
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
export const AutoScaleVCoresListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AutoScaleVCoresListByResourceGroupOutput>;

// The operation
/**
 * Gets all the auto scale v-cores for the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AutoScaleVCoresListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AutoScaleVCoresListByResourceGroupInput,
    outputSchema: AutoScaleVCoresListByResourceGroupOutput,
  }));
// Input Schema
export interface AutoScaleVCoresListBySubscriptionInput {
  subscriptionId: string;
}
export const AutoScaleVCoresListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/autoScaleVCores",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<AutoScaleVCoresListBySubscriptionInput>;

// Output Schema
export interface AutoScaleVCoresListBySubscriptionOutput {
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
export const AutoScaleVCoresListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AutoScaleVCoresListBySubscriptionOutput>;

// The operation
/**
 * Lists all the auto scale v-cores for the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AutoScaleVCoresListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AutoScaleVCoresListBySubscriptionInput,
    outputSchema: AutoScaleVCoresListBySubscriptionOutput,
  }));
// Input Schema
export interface AutoScaleVCoresUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcoreName: string;
  sku?: { name: string; tier?: "AutoScale"; capacity?: number };
  tags?: Record<string, string>;
  properties?: { capacityLimit?: number };
}
export const AutoScaleVCoresUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vcoreName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.Literals(["AutoScale"])),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        capacityLimit: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/autoScaleVCores/{vcoreName}",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<AutoScaleVCoresUpdateInput>;

// Output Schema
export interface AutoScaleVCoresUpdateOutput {
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
export const AutoScaleVCoresUpdateOutput =
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
  }) as unknown as Schema.Codec<AutoScaleVCoresUpdateOutput>;

// The operation
/**
 * Updates the current state of the specified auto scale v-core.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vcoreName - The name of the auto scale v-core. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const AutoScaleVCoresUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AutoScaleVCoresUpdateInput,
    outputSchema: AutoScaleVCoresUpdateOutput,
  }),
);
// Input Schema
export interface CapacitiesCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name?: string;
  type?: string;
}
export const CapacitiesCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/locations/{location}/checkNameAvailability",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<CapacitiesCheckNameAvailabilityInput>;

// Output Schema
export interface CapacitiesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const CapacitiesCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CapacitiesCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the name availability in the target location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const CapacitiesCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacitiesCheckNameAvailabilityInput,
    outputSchema: CapacitiesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface CapacitiesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCapacityName: string;
  properties?: {
    administration?: { members?: string[] };
    mode?: "Gen1" | "Gen2";
    tenantId?: string;
    friendlyName?: string;
  };
  sku: {
    name: string;
    tier?: "PBIE_Azure" | "Premium" | "AutoPremiumHost";
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const CapacitiesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  dedicatedCapacityName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      administration: Schema.optional(
        Schema.Struct({
          members: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      mode: Schema.optional(Schema.Literals(["Gen1", "Gen2"])),
      tenantId: Schema.optional(Schema.String),
      friendlyName: Schema.optional(Schema.String),
    }),
  ),
  sku: Schema.Struct({
    name: Schema.String,
    tier: Schema.optional(
      Schema.Literals(["PBIE_Azure", "Premium", "AutoPremiumHost"]),
    ),
    capacity: Schema.optional(Schema.Number),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}",
    apiVersion: "2021-01-01",
  }),
) as unknown as Schema.Codec<CapacitiesCreateInput>;

// Output Schema
export interface CapacitiesCreateOutput {
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
export const CapacitiesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<CapacitiesCreateOutput>;

// The operation
/**
 * Provisions the specified Dedicated capacity based on the configuration specified in the request.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dedicatedCapacityName - The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const CapacitiesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CapacitiesCreateInput,
  outputSchema: CapacitiesCreateOutput,
}));
// Input Schema
export interface CapacitiesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCapacityName: string;
}
export const CapacitiesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  dedicatedCapacityName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}",
    apiVersion: "2021-01-01",
  }),
) as unknown as Schema.Codec<CapacitiesDeleteInput>;

// Output Schema
export type CapacitiesDeleteOutput = void;
export const CapacitiesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CapacitiesDeleteOutput>;

// The operation
/**
 * Deletes the specified Dedicated capacity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dedicatedCapacityName - The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const CapacitiesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CapacitiesDeleteInput,
  outputSchema: CapacitiesDeleteOutput,
}));
// Input Schema
export interface CapacitiesGetDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCapacityName: string;
}
export const CapacitiesGetDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCapacityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<CapacitiesGetDetailsInput>;

// Output Schema
export interface CapacitiesGetDetailsOutput {
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
export const CapacitiesGetDetailsOutput =
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
  }) as unknown as Schema.Codec<CapacitiesGetDetailsOutput>;

// The operation
/**
 * Gets details about the specified dedicated capacity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dedicatedCapacityName - The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const CapacitiesGetDetails = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CapacitiesGetDetailsInput,
    outputSchema: CapacitiesGetDetailsOutput,
  }),
);
// Input Schema
export interface CapacitiesListInput {
  subscriptionId: string;
}
export const CapacitiesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/capacities",
    apiVersion: "2021-01-01",
  }),
) as unknown as Schema.Codec<CapacitiesListInput>;

// Output Schema
export interface CapacitiesListOutput {
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
export const CapacitiesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CapacitiesListOutput>;

// The operation
/**
 * Lists all the Dedicated capacities for the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CapacitiesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CapacitiesListInput,
  outputSchema: CapacitiesListOutput,
}));
// Input Schema
export interface CapacitiesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CapacitiesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<CapacitiesListByResourceGroupInput>;

// Output Schema
export interface CapacitiesListByResourceGroupOutput {
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
export const CapacitiesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<CapacitiesListByResourceGroupOutput>;

// The operation
/**
 * Gets all the Dedicated capacities for the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CapacitiesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacitiesListByResourceGroupInput,
    outputSchema: CapacitiesListByResourceGroupOutput,
  }));
// Input Schema
export interface CapacitiesListSkusInput {
  subscriptionId: string;
}
export const CapacitiesListSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/skus",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<CapacitiesListSkusInput>;

// Output Schema
export interface CapacitiesListSkusOutput {
  value?: {
    name: string;
    tier?: "PBIE_Azure" | "Premium" | "AutoPremiumHost";
    capacity?: number;
  }[];
}
export const CapacitiesListSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          tier: Schema.optional(
            Schema.Literals(["PBIE_Azure", "Premium", "AutoPremiumHost"]),
          ),
          capacity: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CapacitiesListSkusOutput>;

// The operation
/**
 * Lists eligible SKUs for PowerBI Dedicated resource provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CapacitiesListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CapacitiesListSkusInput,
  outputSchema: CapacitiesListSkusOutput,
}));
// Input Schema
export interface CapacitiesListSkusForCapacityInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCapacityName: string;
}
export const CapacitiesListSkusForCapacityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCapacityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}/skus",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<CapacitiesListSkusForCapacityInput>;

// Output Schema
export interface CapacitiesListSkusForCapacityOutput {
  value?: {
    resourceType?: string;
    sku?: {
      name: string;
      tier?: "PBIE_Azure" | "Premium" | "AutoPremiumHost";
      capacity?: number;
    };
  }[];
}
export const CapacitiesListSkusForCapacityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              tier: Schema.optional(
                Schema.Literals(["PBIE_Azure", "Premium", "AutoPremiumHost"]),
              ),
              capacity: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CapacitiesListSkusForCapacityOutput>;

// The operation
/**
 * Lists eligible SKUs for a PowerBI Dedicated resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dedicatedCapacityName - The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const CapacitiesListSkusForCapacity =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CapacitiesListSkusForCapacityInput,
    outputSchema: CapacitiesListSkusForCapacityOutput,
  }));
// Input Schema
export interface CapacitiesResumeInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCapacityName: string;
}
export const CapacitiesResumeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  dedicatedCapacityName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}/resume",
    apiVersion: "2021-01-01",
  }),
) as unknown as Schema.Codec<CapacitiesResumeInput>;

// Output Schema
export type CapacitiesResumeOutput = void;
export const CapacitiesResumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CapacitiesResumeOutput>;

// The operation
/**
 * Resumes operation of the specified Dedicated capacity instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dedicatedCapacityName - The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const CapacitiesResume = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CapacitiesResumeInput,
  outputSchema: CapacitiesResumeOutput,
}));
// Input Schema
export interface CapacitiesSuspendInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCapacityName: string;
}
export const CapacitiesSuspendInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dedicatedCapacityName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}/suspend",
    apiVersion: "2021-01-01",
  }),
) as unknown as Schema.Codec<CapacitiesSuspendInput>;

// Output Schema
export type CapacitiesSuspendOutput = void;
export const CapacitiesSuspendOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CapacitiesSuspendOutput>;

// The operation
/**
 * Suspends operation of the specified dedicated capacity instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dedicatedCapacityName - The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const CapacitiesSuspend = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CapacitiesSuspendInput,
  outputSchema: CapacitiesSuspendOutput,
}));
// Input Schema
export interface CapacitiesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dedicatedCapacityName: string;
  sku?: {
    name: string;
    tier?: "PBIE_Azure" | "Premium" | "AutoPremiumHost";
    capacity?: number;
  };
  tags?: Record<string, string>;
  properties?: {
    administration?: { members?: string[] };
    mode?: "Gen1" | "Gen2";
    tenantId?: string;
    friendlyName?: string;
  };
}
export const CapacitiesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  dedicatedCapacityName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(
        Schema.Literals(["PBIE_Azure", "Premium", "AutoPremiumHost"]),
      ),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      administration: Schema.optional(
        Schema.Struct({
          members: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      mode: Schema.optional(Schema.Literals(["Gen1", "Gen2"])),
      tenantId: Schema.optional(Schema.String),
      friendlyName: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}",
    apiVersion: "2021-01-01",
  }),
) as unknown as Schema.Codec<CapacitiesUpdateInput>;

// Output Schema
export interface CapacitiesUpdateOutput {
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
export const CapacitiesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<CapacitiesUpdateOutput>;

// The operation
/**
 * Updates the current state of the specified Dedicated capacity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dedicatedCapacityName - The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
 */
export const CapacitiesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CapacitiesUpdateInput,
  outputSchema: CapacitiesUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.PowerBIDedicated/operations",
    apiVersion: "2021-01-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          metricFilterPattern?: string;
          dimensions?: { name?: string; displayName?: string }[];
        }[];
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            serviceSpecification: Schema.optional(
              Schema.Struct({
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      metricFilterPattern: Schema.optional(Schema.String),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                logSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      blobDuration: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
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
