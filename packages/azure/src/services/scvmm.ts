/**
 * Azure Scvmm API
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
export interface AvailabilitySetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  availabilitySetResourceName: string;
  properties?: {
    availabilitySetName?: string;
    vmmServerId?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  extendedLocation: { type?: string; name?: string };
  tags?: Record<string, string>;
  location: string;
}
export const AvailabilitySetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetResourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        availabilitySetName: Schema.optional(Schema.String),
        vmmServerId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<AvailabilitySetsCreateOrUpdateInput>;

// Output Schema
export interface AvailabilitySetsCreateOrUpdateOutput {
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
export const AvailabilitySetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AvailabilitySetsCreateOrUpdateOutput>;

// The operation
/**
 * Implements AvailabilitySets PUT method.
 *
 * Onboards the ScVmm availability set as an Azure resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetResourceName - Name of the AvailabilitySet.
 */
export const AvailabilitySetsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilitySetsCreateOrUpdateInput,
    outputSchema: AvailabilitySetsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AvailabilitySetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  availabilitySetResourceName: string;
  force?: "true" | "false";
}
export const AvailabilitySetsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetResourceName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Literals(["true", "false"])),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<AvailabilitySetsDeleteInput>;

// Output Schema
export type AvailabilitySetsDeleteOutput = void;
export const AvailabilitySetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AvailabilitySetsDeleteOutput>;

// The operation
/**
 * Implements AvailabilitySet DELETE method.
 *
 * Deregisters the ScVmm availability set from Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param force - Forces the resource to be deleted.
 * @param availabilitySetResourceName - Name of the AvailabilitySet.
 */
export const AvailabilitySetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AvailabilitySetsDeleteInput,
    outputSchema: AvailabilitySetsDeleteOutput,
  }),
);
// Input Schema
export interface AvailabilitySetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  availabilitySetResourceName: string;
}
export const AvailabilitySetsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<AvailabilitySetsGetInput>;

// Output Schema
export interface AvailabilitySetsGetOutput {
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
export const AvailabilitySetsGetOutput =
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
  }) as unknown as Schema.Codec<AvailabilitySetsGetOutput>;

// The operation
/**
 * Gets an AvailabilitySet.
 *
 * Implements AvailabilitySet GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetResourceName - Name of the AvailabilitySet.
 */
export const AvailabilitySetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AvailabilitySetsGetInput,
  outputSchema: AvailabilitySetsGetOutput,
}));
// Input Schema
export interface AvailabilitySetsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AvailabilitySetsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<AvailabilitySetsListByResourceGroupInput>;

// Output Schema
export interface AvailabilitySetsListByResourceGroupOutput {
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
export const AvailabilitySetsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AvailabilitySetsListByResourceGroupOutput>;

// The operation
/**
 * Implements GET AvailabilitySets in a resource group.
 *
 * List of AvailabilitySets in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AvailabilitySetsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilitySetsListByResourceGroupInput,
    outputSchema: AvailabilitySetsListByResourceGroupOutput,
  }));
// Input Schema
export interface AvailabilitySetsListBySubscriptionInput {
  subscriptionId: string;
}
export const AvailabilitySetsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/availabilitySets",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<AvailabilitySetsListBySubscriptionInput>;

// Output Schema
export interface AvailabilitySetsListBySubscriptionOutput {
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
export const AvailabilitySetsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AvailabilitySetsListBySubscriptionOutput>;

// The operation
/**
 * Implements GET AvailabilitySets in a subscription.
 *
 * List of AvailabilitySets in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AvailabilitySetsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailabilitySetsListBySubscriptionInput,
    outputSchema: AvailabilitySetsListBySubscriptionOutput,
  }));
// Input Schema
export interface AvailabilitySetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  availabilitySetResourceName: string;
  tags?: Record<string, string>;
}
export const AvailabilitySetsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetResourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<AvailabilitySetsUpdateInput>;

// Output Schema
export interface AvailabilitySetsUpdateOutput {
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
export const AvailabilitySetsUpdateOutput =
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
  }) as unknown as Schema.Codec<AvailabilitySetsUpdateOutput>;

// The operation
/**
 * Implements the AvailabilitySets PATCH method.
 *
 * Updates the AvailabilitySets resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetResourceName - Name of the AvailabilitySet.
 */
export const AvailabilitySetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AvailabilitySetsUpdateInput,
    outputSchema: AvailabilitySetsUpdateOutput,
  }),
);
// Input Schema
export interface CloudsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cloudResourceName: string;
  properties?: {
    inventoryItemId?: string;
    uuid?: string;
    vmmServerId?: string;
    cloudName?: string;
    cloudCapacity?: {
      cpuCount?: number;
      memoryMB?: number;
      vmCount?: number;
      storageGB?: number;
    };
    storageQoSPolicies?: {
      name?: string;
      id?: string;
      iopsMaximum?: number;
      iopsMinimum?: number;
      bandwidthLimit?: number;
      policyId?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  extendedLocation: { type?: string; name?: string };
  tags?: Record<string, string>;
  location: string;
}
export const CloudsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudResourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        inventoryItemId: Schema.optional(Schema.String),
        uuid: Schema.optional(Schema.String),
        vmmServerId: Schema.optional(Schema.String),
        cloudName: Schema.optional(Schema.String),
        cloudCapacity: Schema.optional(
          Schema.Struct({
            cpuCount: Schema.optional(Schema.Number),
            memoryMB: Schema.optional(Schema.Number),
            vmCount: Schema.optional(Schema.Number),
            storageGB: Schema.optional(Schema.Number),
          }),
        ),
        storageQoSPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              id: Schema.optional(Schema.String),
              iopsMaximum: Schema.optional(Schema.Number),
              iopsMinimum: Schema.optional(Schema.Number),
              bandwidthLimit: Schema.optional(Schema.Number),
              policyId: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<CloudsCreateOrUpdateInput>;

// Output Schema
export interface CloudsCreateOrUpdateOutput {
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
export const CloudsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CloudsCreateOrUpdateOutput>;

// The operation
/**
 * Implements Clouds PUT method.
 *
 * Onboards the ScVmm fabric cloud as an Azure cloud resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudResourceName - Name of the Cloud.
 */
export const CloudsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudsCreateOrUpdateInput,
    outputSchema: CloudsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface CloudsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  cloudResourceName: string;
  force?: "true" | "false";
}
export const CloudsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cloudResourceName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Literals(["true", "false"])),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
    apiVersion: "2025-03-13",
  }),
) as unknown as Schema.Codec<CloudsDeleteInput>;

// Output Schema
export type CloudsDeleteOutput = void;
export const CloudsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CloudsDeleteOutput>;

// The operation
/**
 * Implements Cloud resource DELETE method.
 *
 * Deregisters the ScVmm fabric cloud from Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param force - Forces the resource to be deleted.
 * @param cloudResourceName - Name of the Cloud.
 */
export const CloudsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CloudsDeleteInput,
  outputSchema: CloudsDeleteOutput,
}));
// Input Schema
export interface CloudsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  cloudResourceName: string;
}
export const CloudsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cloudResourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
    apiVersion: "2025-03-13",
  }),
) as unknown as Schema.Codec<CloudsGetInput>;

// Output Schema
export interface CloudsGetOutput {
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
export const CloudsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CloudsGetOutput>;

// The operation
/**
 * Gets a Cloud.
 *
 * Implements Cloud GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudResourceName - Name of the Cloud.
 */
export const CloudsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CloudsGetInput,
  outputSchema: CloudsGetOutput,
}));
// Input Schema
export interface CloudsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CloudsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<CloudsListByResourceGroupInput>;

// Output Schema
export interface CloudsListByResourceGroupOutput {
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
export const CloudsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<CloudsListByResourceGroupOutput>;

// The operation
/**
 * Implements GET Clouds in a resource group.
 *
 * List of Clouds in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CloudsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudsListByResourceGroupInput,
    outputSchema: CloudsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface CloudsListBySubscriptionInput {
  subscriptionId: string;
}
export const CloudsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/clouds",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<CloudsListBySubscriptionInput>;

// Output Schema
export interface CloudsListBySubscriptionOutput {
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
export const CloudsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<CloudsListBySubscriptionOutput>;

// The operation
/**
 * Implements GET Clouds in a subscription.
 *
 * List of Clouds in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CloudsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudsListBySubscriptionInput,
    outputSchema: CloudsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface CloudsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cloudResourceName: string;
  tags?: Record<string, string>;
}
export const CloudsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cloudResourceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
    apiVersion: "2025-03-13",
  }),
) as unknown as Schema.Codec<CloudsUpdateInput>;

// Output Schema
export interface CloudsUpdateOutput {
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
export const CloudsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CloudsUpdateOutput>;

// The operation
/**
 * Implements the Clouds PATCH method.
 *
 * Updates the Clouds resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudResourceName - Name of the Cloud.
 */
export const CloudsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CloudsUpdateInput,
  outputSchema: CloudsUpdateOutput,
}));
// Input Schema
export interface GuestAgentsCreateInput {
  resourceUri: string;
  properties?: {
    uuid?: string;
    credentials?: {
      username: string;
      password: string | Redacted.Redacted<string>;
    };
    httpProxyConfig?: { httpsProxy?: string };
    provisioningAction?: "install" | "uninstall" | "repair";
    status?: string;
    customResourceName?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
    privateLinkScopeResourceId?: string;
  };
}
export const GuestAgentsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceUri: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        credentials: Schema.optional(
          Schema.Struct({
            username: Schema.String,
            password: SensitiveString,
          }),
        ),
        httpProxyConfig: Schema.optional(
          Schema.Struct({
            httpsProxy: Schema.optional(Schema.String),
          }),
        ),
        provisioningAction: Schema.optional(
          Schema.Literals(["install", "uninstall", "repair"]),
        ),
        status: Schema.optional(Schema.String),
        customResourceName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
        privateLinkScopeResourceId: Schema.optional(Schema.String),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
    apiVersion: "2025-03-13",
  }),
) as unknown as Schema.Codec<GuestAgentsCreateInput>;

// Output Schema
export interface GuestAgentsCreateOutput {
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
export const GuestAgentsCreateOutput =
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
  }) as unknown as Schema.Codec<GuestAgentsCreateOutput>;

// The operation
/**
 * Implements GuestAgent PUT method.
 *
 * Create Or Update GuestAgent.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const GuestAgentsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentsCreateInput,
  outputSchema: GuestAgentsCreateOutput,
}));
// Input Schema
export interface GuestAgentsDeleteInput {
  resourceUri: string;
}
export const GuestAgentsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceUri: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
    apiVersion: "2025-03-13",
  }),
) as unknown as Schema.Codec<GuestAgentsDeleteInput>;

// Output Schema
export type GuestAgentsDeleteOutput = void;
export const GuestAgentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GuestAgentsDeleteOutput>;

// The operation
/**
 * Deletes a GuestAgent resource.
 *
 * Implements GuestAgent DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const GuestAgentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentsDeleteInput,
  outputSchema: GuestAgentsDeleteOutput,
}));
// Input Schema
export interface GuestAgentsGetInput {
  resourceUri: string;
}
export const GuestAgentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
    apiVersion: "2025-03-13",
  }),
) as unknown as Schema.Codec<GuestAgentsGetInput>;

// Output Schema
export interface GuestAgentsGetOutput {
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
export const GuestAgentsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GuestAgentsGetOutput>;

// The operation
/**
 * Gets GuestAgent.
 *
 * Implements GuestAgent GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const GuestAgentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentsGetInput,
  outputSchema: GuestAgentsGetOutput,
}));
// Input Schema
export interface GuestAgentsListByVirtualMachineInstanceInput {
  resourceUri: string;
}
export const GuestAgentsListByVirtualMachineInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<GuestAgentsListByVirtualMachineInstanceInput>;

// Output Schema
export interface GuestAgentsListByVirtualMachineInstanceOutput {
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
export const GuestAgentsListByVirtualMachineInstanceOutput =
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
  }) as unknown as Schema.Codec<GuestAgentsListByVirtualMachineInstanceOutput>;

// The operation
/**
 * Implements GET GuestAgent in a vm.
 *
 * Returns the list of GuestAgent of the given vm.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const GuestAgentsListByVirtualMachineInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestAgentsListByVirtualMachineInstanceInput,
    outputSchema: GuestAgentsListByVirtualMachineInstanceOutput,
  }));
// Input Schema
export interface InventoryItemsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmmServerName: string;
  inventoryItemResourceName: string;
  properties?: {
    inventoryType:
      | "Cloud"
      | "VirtualNetwork"
      | "VirtualMachine"
      | "VirtualMachineTemplate";
    managedResourceId?: string;
    uuid?: string;
    inventoryItemName?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  kind?: string;
}
export const InventoryItemsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmmServerName: Schema.String.pipe(T.PathParam()),
    inventoryItemResourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        inventoryType: Schema.Literals([
          "Cloud",
          "VirtualNetwork",
          "VirtualMachine",
          "VirtualMachineTemplate",
        ]),
        managedResourceId: Schema.optional(Schema.String),
        uuid: Schema.optional(Schema.String),
        inventoryItemName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<InventoryItemsCreateInput>;

// Output Schema
export interface InventoryItemsCreateOutput {
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
export const InventoryItemsCreateOutput =
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
  }) as unknown as Schema.Codec<InventoryItemsCreateOutput>;

// The operation
/**
 * Implements InventoryItem PUT method.
 *
 * Create Or Update InventoryItem.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmmServerName - Name of the VmmServer.
 * @param inventoryItemResourceName - Name of the inventoryItem.
 */
export const InventoryItemsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InventoryItemsCreateInput,
    outputSchema: InventoryItemsCreateOutput,
  }),
);
// Input Schema
export interface InventoryItemsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmmServerName: string;
  inventoryItemResourceName: string;
}
export const InventoryItemsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmmServerName: Schema.String.pipe(T.PathParam()),
    inventoryItemResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<InventoryItemsDeleteInput>;

// Output Schema
export type InventoryItemsDeleteOutput = void;
export const InventoryItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<InventoryItemsDeleteOutput>;

// The operation
/**
 * Implements inventoryItem DELETE method.
 *
 * Deletes an inventoryItem.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmmServerName - Name of the VmmServer.
 * @param inventoryItemResourceName - Name of the inventoryItem.
 */
export const InventoryItemsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InventoryItemsDeleteInput,
    outputSchema: InventoryItemsDeleteOutput,
  }),
);
// Input Schema
export interface InventoryItemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmmServerName: string;
  inventoryItemResourceName: string;
}
export const InventoryItemsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmmServerName: Schema.String.pipe(T.PathParam()),
    inventoryItemResourceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems/{inventoryItemResourceName}",
    apiVersion: "2025-03-13",
  }),
) as unknown as Schema.Codec<InventoryItemsGetInput>;

// Output Schema
export interface InventoryItemsGetOutput {
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
export const InventoryItemsGetOutput =
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
  }) as unknown as Schema.Codec<InventoryItemsGetOutput>;

// The operation
/**
 * Implements GET InventoryItem method.
 *
 * Shows an inventory item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmmServerName - Name of the VmmServer.
 * @param inventoryItemResourceName - Name of the inventoryItem.
 */
export const InventoryItemsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InventoryItemsGetInput,
  outputSchema: InventoryItemsGetOutput,
}));
// Input Schema
export interface InventoryItemsListByVmmServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmmServerName: string;
}
export const InventoryItemsListByVmmServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmmServerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}/inventoryItems",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<InventoryItemsListByVmmServerInput>;

// Output Schema
export interface InventoryItemsListByVmmServerOutput {
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
export const InventoryItemsListByVmmServerOutput =
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
  }) as unknown as Schema.Codec<InventoryItemsListByVmmServerOutput>;

// The operation
/**
 * Implements GET for the list of Inventory Items in the VMMServer.
 *
 * Returns the list of inventoryItems in the given VmmServer.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmmServerName - Name of the VmmServer.
 */
export const InventoryItemsListByVmmServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InventoryItemsListByVmmServerInput,
    outputSchema: InventoryItemsListByVmmServerOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ScVmm/operations",
    apiVersion: "2025-03-13",
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
export interface VirtualMachineInstancesCreateCheckpointInput {
  resourceUri: string;
  name?: string;
  description?: string;
}
export const VirtualMachineInstancesCreateCheckpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesCreateCheckpointInput>;

// Output Schema
export type VirtualMachineInstancesCreateCheckpointOutput = void;
export const VirtualMachineInstancesCreateCheckpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesCreateCheckpointOutput>;

// The operation
/**
 * Implements the operation to creates a checkpoint in a virtual machine instance.
 *
 * Creates a checkpoint in virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VirtualMachineInstancesCreateCheckpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesCreateCheckpointInput,
    outputSchema: VirtualMachineInstancesCreateCheckpointOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesCreateOrUpdateInput {
  resourceUri: string;
  properties?: {
    availabilitySets?: { id?: string; name?: string }[];
    osProfile?: {
      adminUsername?: string;
      adminPassword?: string | Redacted.Redacted<string>;
      computerName?: string;
      osType?: "Windows" | "Linux" | "Other";
      osSku?: string;
      osVersion?: string;
      domainName?: string;
      domainUsername?: string;
      domainPassword?: string | Redacted.Redacted<string>;
      workgroup?: string;
      productKey?: string;
      timezone?: number;
      runOnceCommands?: string;
    };
    hardwareProfile?: {
      memoryMB?: number;
      cpuCount?: number;
      limitCpuForMigration?: "true" | "false";
      dynamicMemoryEnabled?: "true" | "false";
      dynamicMemoryMaxMB?: number;
      dynamicMemoryMinMB?: number;
      isHighlyAvailable?: "true" | "false";
    };
    networkProfile?: {
      networkInterfaces?: {
        name?: string;
        displayName?: string;
        ipv4Addresses?: string[];
        ipv6Addresses?: string[];
        macAddress?: string;
        virtualNetworkId?: string;
        networkName?: string;
        ipv4AddressType?: "Dynamic" | "Static";
        ipv6AddressType?: "Dynamic" | "Static";
        macAddressType?: "Dynamic" | "Static";
        nicId?: string;
      }[];
    };
    storageProfile?: {
      disks?: {
        name?: string;
        displayName?: string;
        diskId?: string;
        diskSizeGB?: number;
        maxDiskSizeGB?: number;
        bus?: number;
        lun?: number;
        busType?: string;
        vhdType?: string;
        volumeType?: string;
        vhdFormatType?: string;
        templateDiskId?: string;
        storageQoSPolicy?: { name?: string; id?: string };
        createDiffDisk?: "true" | "false";
      }[];
    };
    infrastructureProfile?: {
      inventoryItemId?: string;
      vmmServerId?: string;
      cloudId?: string;
      templateId?: string;
      vmName?: string;
      uuid?: string;
      lastRestoredVMCheckpoint?: {
        parentCheckpointID?: string;
        checkpointID?: string;
        name?: string;
        description?: string;
      };
      checkpoints?: {
        parentCheckpointID?: string;
        checkpointID?: string;
        name?: string;
        description?: string;
      }[];
      checkpointType?: string;
      generation?: number;
      biosGuid?: string;
    };
    powerState?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  extendedLocation: { type?: string; name?: string };
}
export const VirtualMachineInstancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        availabilitySets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
            }),
          ),
        ),
        osProfile: Schema.optional(
          Schema.Struct({
            adminUsername: Schema.optional(Schema.String),
            adminPassword: Schema.optional(SensitiveString),
            computerName: Schema.optional(Schema.String),
            osType: Schema.optional(
              Schema.Literals(["Windows", "Linux", "Other"]),
            ),
            osSku: Schema.optional(Schema.String),
            osVersion: Schema.optional(Schema.String),
            domainName: Schema.optional(Schema.String),
            domainUsername: Schema.optional(Schema.String),
            domainPassword: Schema.optional(SensitiveString),
            workgroup: Schema.optional(Schema.String),
            productKey: Schema.optional(Schema.String),
            timezone: Schema.optional(Schema.Number),
            runOnceCommands: Schema.optional(Schema.String),
          }),
        ),
        hardwareProfile: Schema.optional(
          Schema.Struct({
            memoryMB: Schema.optional(Schema.Number),
            cpuCount: Schema.optional(Schema.Number),
            limitCpuForMigration: Schema.optional(
              Schema.Literals(["true", "false"]),
            ),
            dynamicMemoryEnabled: Schema.optional(
              Schema.Literals(["true", "false"]),
            ),
            dynamicMemoryMaxMB: Schema.optional(Schema.Number),
            dynamicMemoryMinMB: Schema.optional(Schema.Number),
            isHighlyAvailable: Schema.optional(
              Schema.Literals(["true", "false"]),
            ),
          }),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            networkInterfaces: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  displayName: Schema.optional(Schema.String),
                  ipv4Addresses: Schema.optional(Schema.Array(Schema.String)),
                  ipv6Addresses: Schema.optional(Schema.Array(Schema.String)),
                  macAddress: Schema.optional(Schema.String),
                  virtualNetworkId: Schema.optional(Schema.String),
                  networkName: Schema.optional(Schema.String),
                  ipv4AddressType: Schema.optional(
                    Schema.Literals(["Dynamic", "Static"]),
                  ),
                  ipv6AddressType: Schema.optional(
                    Schema.Literals(["Dynamic", "Static"]),
                  ),
                  macAddressType: Schema.optional(
                    Schema.Literals(["Dynamic", "Static"]),
                  ),
                  nicId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        storageProfile: Schema.optional(
          Schema.Struct({
            disks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  displayName: Schema.optional(Schema.String),
                  diskId: Schema.optional(Schema.String),
                  diskSizeGB: Schema.optional(Schema.Number),
                  maxDiskSizeGB: Schema.optional(Schema.Number),
                  bus: Schema.optional(Schema.Number),
                  lun: Schema.optional(Schema.Number),
                  busType: Schema.optional(Schema.String),
                  vhdType: Schema.optional(Schema.String),
                  volumeType: Schema.optional(Schema.String),
                  vhdFormatType: Schema.optional(Schema.String),
                  templateDiskId: Schema.optional(Schema.String),
                  storageQoSPolicy: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  createDiffDisk: Schema.optional(
                    Schema.Literals(["true", "false"]),
                  ),
                }),
              ),
            ),
          }),
        ),
        infrastructureProfile: Schema.optional(
          Schema.Struct({
            inventoryItemId: Schema.optional(Schema.String),
            vmmServerId: Schema.optional(Schema.String),
            cloudId: Schema.optional(Schema.String),
            templateId: Schema.optional(Schema.String),
            vmName: Schema.optional(Schema.String),
            uuid: Schema.optional(Schema.String),
            lastRestoredVMCheckpoint: Schema.optional(
              Schema.Struct({
                parentCheckpointID: Schema.optional(Schema.String),
                checkpointID: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                description: Schema.optional(Schema.String),
              }),
            ),
            checkpoints: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  parentCheckpointID: Schema.optional(Schema.String),
                  checkpointID: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  description: Schema.optional(Schema.String),
                }),
              ),
            ),
            checkpointType: Schema.optional(Schema.String),
            generation: Schema.optional(Schema.Number),
            biosGuid: Schema.optional(Schema.String),
          }),
        ),
        powerState: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesCreateOrUpdateInput>;

// Output Schema
export interface VirtualMachineInstancesCreateOrUpdateOutput {
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
export const VirtualMachineInstancesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesCreateOrUpdateOutput>;

// The operation
/**
 * Implements virtual machine PUT method.
 *
 * The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VirtualMachineInstancesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesCreateOrUpdateInput,
    outputSchema: VirtualMachineInstancesCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesDeleteInput {
  resourceUri: string;
  force?: "true" | "false";
  deleteFromHost?: "true" | "false";
}
export const VirtualMachineInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Literals(["true", "false"])),
    deleteFromHost: Schema.optional(Schema.Literals(["true", "false"])),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesDeleteInput>;

// Output Schema
export type VirtualMachineInstancesDeleteOutput = void;
export const VirtualMachineInstancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesDeleteOutput>;

// The operation
/**
 * Deletes an virtual machine.
 *
 * The operation to delete a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param force - Forces the resource to be deleted.
 * @param deleteFromHost - Whether to disable the VM from azure and also delete it from Vmm.
 */
export const VirtualMachineInstancesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesDeleteInput,
    outputSchema: VirtualMachineInstancesDeleteOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesDeleteCheckpointInput {
  resourceUri: string;
  id?: string;
}
export const VirtualMachineInstancesDeleteCheckpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesDeleteCheckpointInput>;

// Output Schema
export type VirtualMachineInstancesDeleteCheckpointOutput = void;
export const VirtualMachineInstancesDeleteCheckpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesDeleteCheckpointOutput>;

// The operation
/**
 * Implements the operation to delete a checkpoint in a virtual machine instance.
 *
 * Deletes a checkpoint in virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VirtualMachineInstancesDeleteCheckpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesDeleteCheckpointInput,
    outputSchema: VirtualMachineInstancesDeleteCheckpointOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesGetInput {
  resourceUri: string;
}
export const VirtualMachineInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesGetInput>;

// Output Schema
export interface VirtualMachineInstancesGetOutput {
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
export const VirtualMachineInstancesGetOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesGetOutput>;

// The operation
/**
 * Gets a virtual machine.
 *
 * Retrieves information about a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VirtualMachineInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesGetInput,
    outputSchema: VirtualMachineInstancesGetOutput,
  }),
);
// Input Schema
export interface VirtualMachineInstancesListInput {
  resourceUri: string;
}
export const VirtualMachineInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesListInput>;

// Output Schema
export interface VirtualMachineInstancesListOutput {
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
export const VirtualMachineInstancesListOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesListOutput>;

// The operation
/**
 * Implements List virtual machine instances.
 *
 * Lists all of the virtual machine instances within the specified parent resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VirtualMachineInstancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesListInput,
    outputSchema: VirtualMachineInstancesListOutput,
  }),
);
// Input Schema
export interface VirtualMachineInstancesRestartInput {
  resourceUri: string;
}
export const VirtualMachineInstancesRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesRestartInput>;

// Output Schema
export type VirtualMachineInstancesRestartOutput = void;
export const VirtualMachineInstancesRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesRestartOutput>;

// The operation
/**
 * Implements the operation to restart a virtual machine.
 *
 * The operation to restart a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VirtualMachineInstancesRestart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesRestartInput,
    outputSchema: VirtualMachineInstancesRestartOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesRestoreCheckpointInput {
  resourceUri: string;
  id?: string;
}
export const VirtualMachineInstancesRestoreCheckpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesRestoreCheckpointInput>;

// Output Schema
export type VirtualMachineInstancesRestoreCheckpointOutput = void;
export const VirtualMachineInstancesRestoreCheckpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesRestoreCheckpointOutput>;

// The operation
/**
 * Implements the operation to restores to a checkpoint in a virtual machine instance.
 *
 * Restores to a checkpoint in virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VirtualMachineInstancesRestoreCheckpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesRestoreCheckpointInput,
    outputSchema: VirtualMachineInstancesRestoreCheckpointOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesStartInput {
  resourceUri: string;
}
export const VirtualMachineInstancesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesStartInput>;

// Output Schema
export type VirtualMachineInstancesStartOutput = void;
export const VirtualMachineInstancesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesStartOutput>;

// The operation
/**
 * Implements the operation to start a virtual machine.
 *
 * The operation to start a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VirtualMachineInstancesStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesStartInput,
    outputSchema: VirtualMachineInstancesStartOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesStopInput {
  resourceUri: string;
  skipShutdown?: "true" | "false";
}
export const VirtualMachineInstancesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    skipShutdown: Schema.optional(Schema.Literals(["true", "false"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesStopInput>;

// Output Schema
export type VirtualMachineInstancesStopOutput = void;
export const VirtualMachineInstancesStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesStopOutput>;

// The operation
/**
 * Implements the operation to stop a virtual machine.
 *
 * The operation to power off (stop) a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VirtualMachineInstancesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesStopInput,
    outputSchema: VirtualMachineInstancesStopOutput,
  }),
);
// Input Schema
export interface VirtualMachineInstancesUpdateInput {
  resourceUri: string;
  properties?: {
    availabilitySets?: { id?: string; name?: string }[];
    hardwareProfile?: {
      memoryMB?: number;
      cpuCount?: number;
      limitCpuForMigration?: "true" | "false";
      dynamicMemoryEnabled?: "true" | "false";
      dynamicMemoryMaxMB?: number;
      dynamicMemoryMinMB?: number;
    };
    networkProfile?: {
      networkInterfaces?: {
        name?: string;
        macAddress?: string;
        virtualNetworkId?: string;
        ipv4AddressType?: "Dynamic" | "Static";
        ipv6AddressType?: "Dynamic" | "Static";
        macAddressType?: "Dynamic" | "Static";
        nicId?: string;
      }[];
    };
    storageProfile?: {
      disks?: {
        name?: string;
        diskId?: string;
        diskSizeGB?: number;
        bus?: number;
        lun?: number;
        busType?: string;
        vhdType?: string;
        storageQoSPolicy?: { name?: string; id?: string };
      }[];
    };
    infrastructureProfile?: { checkpointType?: string };
  };
}
export const VirtualMachineInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        availabilitySets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
            }),
          ),
        ),
        hardwareProfile: Schema.optional(
          Schema.Struct({
            memoryMB: Schema.optional(Schema.Number),
            cpuCount: Schema.optional(Schema.Number),
            limitCpuForMigration: Schema.optional(
              Schema.Literals(["true", "false"]),
            ),
            dynamicMemoryEnabled: Schema.optional(
              Schema.Literals(["true", "false"]),
            ),
            dynamicMemoryMaxMB: Schema.optional(Schema.Number),
            dynamicMemoryMinMB: Schema.optional(Schema.Number),
          }),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            networkInterfaces: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  macAddress: Schema.optional(Schema.String),
                  virtualNetworkId: Schema.optional(Schema.String),
                  ipv4AddressType: Schema.optional(
                    Schema.Literals(["Dynamic", "Static"]),
                  ),
                  ipv6AddressType: Schema.optional(
                    Schema.Literals(["Dynamic", "Static"]),
                  ),
                  macAddressType: Schema.optional(
                    Schema.Literals(["Dynamic", "Static"]),
                  ),
                  nicId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        storageProfile: Schema.optional(
          Schema.Struct({
            disks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  diskId: Schema.optional(Schema.String),
                  diskSizeGB: Schema.optional(Schema.Number),
                  bus: Schema.optional(Schema.Number),
                  lun: Schema.optional(Schema.Number),
                  busType: Schema.optional(Schema.String),
                  vhdType: Schema.optional(Schema.String),
                  storageQoSPolicy: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            ),
          }),
        ),
        infrastructureProfile: Schema.optional(
          Schema.Struct({
            checkpointType: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesUpdateInput>;

// Output Schema
export interface VirtualMachineInstancesUpdateOutput {
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
export const VirtualMachineInstancesUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesUpdateOutput>;

// The operation
/**
 * Updates a virtual machine.
 *
 * The operation to update a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VirtualMachineInstancesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesUpdateInput,
    outputSchema: VirtualMachineInstancesUpdateOutput,
  }));
// Input Schema
export interface VirtualMachineTemplatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineTemplateName: string;
  properties?: {
    inventoryItemId?: string;
    uuid?: string;
    vmmServerId?: string;
    osType?: "Windows" | "Linux" | "Other";
    osName?: string;
    computerName?: string;
    memoryMB?: number;
    cpuCount?: number;
    limitCpuForMigration?: "true" | "false";
    dynamicMemoryEnabled?: "true" | "false";
    isCustomizable?: "true" | "false";
    dynamicMemoryMaxMB?: number;
    dynamicMemoryMinMB?: number;
    isHighlyAvailable?: "true" | "false";
    generation?: number;
    networkInterfaces?: {
      name?: string;
      displayName?: string;
      ipv4Addresses?: string[];
      ipv6Addresses?: string[];
      macAddress?: string;
      virtualNetworkId?: string;
      networkName?: string;
      ipv4AddressType?: "Dynamic" | "Static";
      ipv6AddressType?: "Dynamic" | "Static";
      macAddressType?: "Dynamic" | "Static";
      nicId?: string;
    }[];
    disks?: {
      name?: string;
      displayName?: string;
      diskId?: string;
      diskSizeGB?: number;
      maxDiskSizeGB?: number;
      bus?: number;
      lun?: number;
      busType?: string;
      vhdType?: string;
      volumeType?: string;
      vhdFormatType?: string;
      templateDiskId?: string;
      storageQoSPolicy?: { name?: string; id?: string };
      createDiffDisk?: "true" | "false";
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  extendedLocation: { type?: string; name?: string };
  tags?: Record<string, string>;
  location: string;
}
export const VirtualMachineTemplatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        inventoryItemId: Schema.optional(Schema.String),
        uuid: Schema.optional(Schema.String),
        vmmServerId: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.Literals(["Windows", "Linux", "Other"])),
        osName: Schema.optional(Schema.String),
        computerName: Schema.optional(Schema.String),
        memoryMB: Schema.optional(Schema.Number),
        cpuCount: Schema.optional(Schema.Number),
        limitCpuForMigration: Schema.optional(
          Schema.Literals(["true", "false"]),
        ),
        dynamicMemoryEnabled: Schema.optional(
          Schema.Literals(["true", "false"]),
        ),
        isCustomizable: Schema.optional(Schema.Literals(["true", "false"])),
        dynamicMemoryMaxMB: Schema.optional(Schema.Number),
        dynamicMemoryMinMB: Schema.optional(Schema.Number),
        isHighlyAvailable: Schema.optional(Schema.Literals(["true", "false"])),
        generation: Schema.optional(Schema.Number),
        networkInterfaces: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              ipv4Addresses: Schema.optional(Schema.Array(Schema.String)),
              ipv6Addresses: Schema.optional(Schema.Array(Schema.String)),
              macAddress: Schema.optional(Schema.String),
              virtualNetworkId: Schema.optional(Schema.String),
              networkName: Schema.optional(Schema.String),
              ipv4AddressType: Schema.optional(
                Schema.Literals(["Dynamic", "Static"]),
              ),
              ipv6AddressType: Schema.optional(
                Schema.Literals(["Dynamic", "Static"]),
              ),
              macAddressType: Schema.optional(
                Schema.Literals(["Dynamic", "Static"]),
              ),
              nicId: Schema.optional(Schema.String),
            }),
          ),
        ),
        disks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              diskId: Schema.optional(Schema.String),
              diskSizeGB: Schema.optional(Schema.Number),
              maxDiskSizeGB: Schema.optional(Schema.Number),
              bus: Schema.optional(Schema.Number),
              lun: Schema.optional(Schema.Number),
              busType: Schema.optional(Schema.String),
              vhdType: Schema.optional(Schema.String),
              volumeType: Schema.optional(Schema.String),
              vhdFormatType: Schema.optional(Schema.String),
              templateDiskId: Schema.optional(Schema.String),
              storageQoSPolicy: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                }),
              ),
              createDiffDisk: Schema.optional(
                Schema.Literals(["true", "false"]),
              ),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesCreateOrUpdateInput>;

// Output Schema
export interface VirtualMachineTemplatesCreateOrUpdateOutput {
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
export const VirtualMachineTemplatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineTemplatesCreateOrUpdateOutput>;

// The operation
/**
 * Implements VirtualMachineTemplates PUT method.
 *
 * Onboards the ScVmm VM Template as an Azure VM Template resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineTemplateName - Name of the VirtualMachineTemplate.
 */
export const VirtualMachineTemplatesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesCreateOrUpdateInput,
    outputSchema: VirtualMachineTemplatesCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualMachineTemplatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineTemplateName: string;
  force?: "true" | "false";
}
export const VirtualMachineTemplatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Literals(["true", "false"])),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesDeleteInput>;

// Output Schema
export type VirtualMachineTemplatesDeleteOutput = void;
export const VirtualMachineTemplatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineTemplatesDeleteOutput>;

// The operation
/**
 * Implements VirtualMachineTemplate DELETE method.
 *
 * Deregisters the ScVmm VM Template from Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param force - Forces the resource to be deleted.
 * @param virtualMachineTemplateName - Name of the VirtualMachineTemplate.
 */
export const VirtualMachineTemplatesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesDeleteInput,
    outputSchema: VirtualMachineTemplatesDeleteOutput,
  }));
// Input Schema
export interface VirtualMachineTemplatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineTemplateName: string;
}
export const VirtualMachineTemplatesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesGetInput>;

// Output Schema
export interface VirtualMachineTemplatesGetOutput {
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
export const VirtualMachineTemplatesGetOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineTemplatesGetOutput>;

// The operation
/**
 * Gets a VirtualMachineTemplate.
 *
 * Implements VirtualMachineTemplate GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineTemplateName - Name of the VirtualMachineTemplate.
 */
export const VirtualMachineTemplatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineTemplatesGetInput,
    outputSchema: VirtualMachineTemplatesGetOutput,
  }),
);
// Input Schema
export interface VirtualMachineTemplatesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const VirtualMachineTemplatesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesListByResourceGroupInput>;

// Output Schema
export interface VirtualMachineTemplatesListByResourceGroupOutput {
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
export const VirtualMachineTemplatesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineTemplatesListByResourceGroupOutput>;

// The operation
/**
 * Implements GET VirtualMachineTemplates in a resource group.
 *
 * List of VirtualMachineTemplates in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachineTemplatesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesListByResourceGroupInput,
    outputSchema: VirtualMachineTemplatesListByResourceGroupOutput,
  }));
// Input Schema
export interface VirtualMachineTemplatesListBySubscriptionInput {
  subscriptionId: string;
}
export const VirtualMachineTemplatesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesListBySubscriptionInput>;

// Output Schema
export interface VirtualMachineTemplatesListBySubscriptionOutput {
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
export const VirtualMachineTemplatesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineTemplatesListBySubscriptionOutput>;

// The operation
/**
 * Implements GET VirtualMachineTemplates in a subscription.
 *
 * List of VirtualMachineTemplates in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const VirtualMachineTemplatesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesListBySubscriptionInput,
    outputSchema: VirtualMachineTemplatesListBySubscriptionOutput,
  }));
// Input Schema
export interface VirtualMachineTemplatesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineTemplateName: string;
  tags?: Record<string, string>;
}
export const VirtualMachineTemplatesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesUpdateInput>;

// Output Schema
export interface VirtualMachineTemplatesUpdateOutput {
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
export const VirtualMachineTemplatesUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineTemplatesUpdateOutput>;

// The operation
/**
 * Implements the VirtualMachineTemplate PATCH method.
 *
 * Updates the VirtualMachineTemplate resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineTemplateName - Name of the VirtualMachineTemplate.
 */
export const VirtualMachineTemplatesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesUpdateInput,
    outputSchema: VirtualMachineTemplatesUpdateOutput,
  }));
// Input Schema
export interface VirtualNetworksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  properties?: {
    inventoryItemId?: string;
    uuid?: string;
    vmmServerId?: string;
    networkName?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  extendedLocation: { type?: string; name?: string };
  tags?: Record<string, string>;
  location: string;
}
export const VirtualNetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        inventoryItemId: Schema.optional(Schema.String),
        uuid: Schema.optional(Schema.String),
        vmmServerId: Schema.optional(Schema.String),
        networkName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2025-03-13",
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
  }) as unknown as Schema.Codec<VirtualNetworksCreateOrUpdateOutput>;

// The operation
/**
 * Implements VirtualNetworks PUT method.
 *
 * Onboards the ScVmm virtual network as an Azure virtual network resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - Name of the VirtualNetwork.
 */
export const VirtualNetworksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksCreateOrUpdateInput,
    outputSchema: VirtualNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualNetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  force?: "true" | "false";
}
export const VirtualNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Literals(["true", "false"])),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksDeleteInput>;

// Output Schema
export type VirtualNetworksDeleteOutput = void;
export const VirtualNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualNetworksDeleteOutput>;

// The operation
/**
 * Implements VirtualNetwork DELETE method.
 *
 * Deregisters the ScVmm virtual network from Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param force - Forces the resource to be deleted.
 * @param virtualNetworkName - Name of the VirtualNetwork.
 */
export const VirtualNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksDeleteInput,
    outputSchema: VirtualNetworksDeleteOutput,
  }),
);
// Input Schema
export interface VirtualNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
}
export const VirtualNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksGetInput>;

// Output Schema
export interface VirtualNetworksGetOutput {
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
export const VirtualNetworksGetOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksGetOutput>;

// The operation
/**
 * Gets a VirtualNetwork.
 *
 * Implements VirtualNetwork GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - Name of the VirtualNetwork.
 */
export const VirtualNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksGetInput,
  outputSchema: VirtualNetworksGetOutput,
}));
// Input Schema
export interface VirtualNetworksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const VirtualNetworksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksListByResourceGroupInput>;

// Output Schema
export interface VirtualNetworksListByResourceGroupOutput {
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
export const VirtualNetworksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksListByResourceGroupOutput>;

// The operation
/**
 * Implements GET VirtualNetworks in a resource group.
 *
 * List of VirtualNetworks in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualNetworksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksListByResourceGroupInput,
    outputSchema: VirtualNetworksListByResourceGroupOutput,
  }));
// Input Schema
export interface VirtualNetworksListBySubscriptionInput {
  subscriptionId: string;
}
export const VirtualNetworksListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualNetworks",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksListBySubscriptionInput>;

// Output Schema
export interface VirtualNetworksListBySubscriptionOutput {
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
export const VirtualNetworksListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksListBySubscriptionOutput>;

// The operation
/**
 * Implements GET VirtualNetworks in a subscription.
 *
 * List of VirtualNetworks in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const VirtualNetworksListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksListBySubscriptionInput,
    outputSchema: VirtualNetworksListBySubscriptionOutput,
  }));
// Input Schema
export interface VirtualNetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  tags?: Record<string, string>;
}
export const VirtualNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2025-03-13",
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
  }) as unknown as Schema.Codec<VirtualNetworksUpdateOutput>;

// The operation
/**
 * Implements the VirtualNetworks PATCH method.
 *
 * Updates the VirtualNetworks resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - Name of the VirtualNetwork.
 */
export const VirtualNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksUpdateInput,
    outputSchema: VirtualNetworksUpdateOutput,
  }),
);
// Input Schema
export interface VmInstanceHybridIdentityMetadatasGetInput {
  resourceUri: string;
}
export const VmInstanceHybridIdentityMetadatasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VmInstanceHybridIdentityMetadatasGetInput>;

// Output Schema
export interface VmInstanceHybridIdentityMetadatasGetOutput {
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
export const VmInstanceHybridIdentityMetadatasGetOutput =
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
  }) as unknown as Schema.Codec<VmInstanceHybridIdentityMetadatasGetOutput>;

// The operation
/**
 * Gets HybridIdentityMetadata.
 *
 * Implements HybridIdentityMetadata GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VmInstanceHybridIdentityMetadatasGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmInstanceHybridIdentityMetadatasGetInput,
    outputSchema: VmInstanceHybridIdentityMetadatasGetOutput,
  }));
// Input Schema
export interface VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceInput {
  resourceUri: string;
}
export const VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceInput>;

// Output Schema
export interface VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOutput {
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
export const VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOutput =
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
  }) as unknown as Schema.Codec<VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOutput>;

// The operation
/**
 * Implements GET HybridIdentityMetadata in a vm.
 *
 * Returns the list of HybridIdentityMetadata of the given VM.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceInput,
    outputSchema:
      VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOutput,
  }));
// Input Schema
export interface VmmServersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmmServerName: string;
  properties?: {
    credentials?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    fqdn: string;
    port?: number;
    connectionStatus?: string;
    errorMessage?: string;
    uuid?: string;
    version?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  extendedLocation: { type?: string; name?: string };
  tags?: Record<string, string>;
  location: string;
}
export const VmmServersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmmServerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        credentials: Schema.optional(
          Schema.Struct({
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
          }),
        ),
        fqdn: Schema.String,
        port: Schema.optional(Schema.Number),
        connectionStatus: Schema.optional(Schema.String),
        errorMessage: Schema.optional(Schema.String),
        uuid: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VmmServersCreateOrUpdateInput>;

// Output Schema
export interface VmmServersCreateOrUpdateOutput {
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
export const VmmServersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VmmServersCreateOrUpdateOutput>;

// The operation
/**
 * Implements VmmServers PUT method.
 *
 * Onboards the SCVmm fabric as an Azure VmmServer resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmmServerName - Name of the VmmServer.
 */
export const VmmServersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VmmServersCreateOrUpdateInput,
    outputSchema: VmmServersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface VmmServersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmmServerName: string;
  force?: "true" | "false";
}
export const VmmServersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vmmServerName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Literals(["true", "false"])),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
    apiVersion: "2025-03-13",
  }),
) as unknown as Schema.Codec<VmmServersDeleteInput>;

// Output Schema
export type VmmServersDeleteOutput = void;
export const VmmServersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VmmServersDeleteOutput>;

// The operation
/**
 * Implements VmmServers DELETE method.
 *
 * Removes the SCVmm fabric from Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param force - Forces the resource to be deleted.
 * @param vmmServerName - Name of the VmmServer.
 */
export const VmmServersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VmmServersDeleteInput,
  outputSchema: VmmServersDeleteOutput,
}));
// Input Schema
export interface VmmServersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmmServerName: string;
}
export const VmmServersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vmmServerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
    apiVersion: "2025-03-13",
  }),
) as unknown as Schema.Codec<VmmServersGetInput>;

// Output Schema
export interface VmmServersGetOutput {
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
export const VmmServersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VmmServersGetOutput>;

// The operation
/**
 * Gets a VMMServer.
 *
 * Implements VmmServer GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmmServerName - Name of the VmmServer.
 */
export const VmmServersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VmmServersGetInput,
  outputSchema: VmmServersGetOutput,
}));
// Input Schema
export interface VmmServersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const VmmServersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VmmServersListByResourceGroupInput>;

// Output Schema
export interface VmmServersListByResourceGroupOutput {
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
export const VmmServersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<VmmServersListByResourceGroupOutput>;

// The operation
/**
 * Implements GET VmmServers in a resource group.
 *
 * List of VmmServers in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VmmServersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmmServersListByResourceGroupInput,
    outputSchema: VmmServersListByResourceGroupOutput,
  }));
// Input Schema
export interface VmmServersListBySubscriptionInput {
  subscriptionId: string;
}
export const VmmServersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/vmmServers",
      apiVersion: "2025-03-13",
    }),
  ) as unknown as Schema.Codec<VmmServersListBySubscriptionInput>;

// Output Schema
export interface VmmServersListBySubscriptionOutput {
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
export const VmmServersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<VmmServersListBySubscriptionOutput>;

// The operation
/**
 * Implements GET VmmServers in a subscription.
 *
 * List of VmmServers in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const VmmServersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmmServersListBySubscriptionInput,
    outputSchema: VmmServersListBySubscriptionOutput,
  }));
// Input Schema
export interface VmmServersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmmServerName: string;
  tags?: Record<string, string>;
}
export const VmmServersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vmmServerName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
    apiVersion: "2025-03-13",
  }),
) as unknown as Schema.Codec<VmmServersUpdateInput>;

// Output Schema
export interface VmmServersUpdateOutput {
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
export const VmmServersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<VmmServersUpdateOutput>;

// The operation
/**
 * Implements VmmServers PATCH method.
 *
 * Updates the VmmServers resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmmServerName - Name of the VmmServer.
 */
export const VmmServersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VmmServersUpdateInput,
  outputSchema: VmmServersUpdateOutput,
}));
