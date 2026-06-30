/**
 * Azure Extendedlocation API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomLocationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
  properties?: {
    authentication?: { type?: string; value?: string };
    clusterExtensionIds?: string[];
    displayName?: string;
    hostResourceId?: string;
    hostType?: "Kubernetes";
    namespace?: string;
    provisioningState?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const CustomLocationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        authentication: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
        clusterExtensionIds: Schema.optional(Schema.Array(Schema.String)),
        displayName: Schema.optional(Schema.String),
        hostResourceId: Schema.optional(Schema.String),
        hostType: Schema.optional(Schema.Literals(["Kubernetes"])),
        namespace: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}",
      apiVersion: "2021-08-15",
    }),
  ) as unknown as Schema.Codec<CustomLocationsCreateOrUpdateInput>;

// Output Schema
export interface CustomLocationsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const CustomLocationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CustomLocationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Custom Location.
 *
 * Creates or updates a Custom Location in the specified Subscription and Resource Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Custom Locations name.
 */
export const CustomLocationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomLocationsCreateOrUpdateInput,
    outputSchema: CustomLocationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface CustomLocationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const CustomLocationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}",
      apiVersion: "2021-08-15",
    }),
  ) as unknown as Schema.Codec<CustomLocationsDeleteInput>;

// Output Schema
export type CustomLocationsDeleteOutput = void;
export const CustomLocationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomLocationsDeleteOutput>;

// The operation
/**
 * Deletes a Custom Location.
 *
 * Deletes the Custom Location with the specified Resource Name, Resource Group, and Subscription Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Custom Locations name.
 */
export const CustomLocationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomLocationsDeleteInput,
    outputSchema: CustomLocationsDeleteOutput,
  }),
);
// Input Schema
export interface CustomLocationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const CustomLocationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}",
      apiVersion: "2021-08-15",
    }),
  ) as unknown as Schema.Codec<CustomLocationsGetInput>;

// Output Schema
export interface CustomLocationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const CustomLocationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CustomLocationsGetOutput>;

// The operation
/**
 * Gets a Custom Location.
 *
 * Gets the details of the customLocation with a specified resource group and name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Custom Locations name.
 */
export const CustomLocationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomLocationsGetInput,
  outputSchema: CustomLocationsGetOutput,
}));
// Input Schema
export interface CustomLocationsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CustomLocationsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations",
      apiVersion: "2021-08-15",
    }),
  ) as unknown as Schema.Codec<CustomLocationsListByResourceGroupInput>;

// Output Schema
export interface CustomLocationsListByResourceGroupOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const CustomLocationsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CustomLocationsListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of Custom Locations in the specified subscription and resource group.
 *
 * Gets a list of Custom Locations in the specified subscription and resource group. The operation returns properties of each Custom Location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CustomLocationsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomLocationsListByResourceGroupInput,
    outputSchema: CustomLocationsListByResourceGroupOutput,
  }));
// Input Schema
export interface CustomLocationsListBySubscriptionInput {
  subscriptionId: string;
}
export const CustomLocationsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ExtendedLocation/customLocations",
      apiVersion: "2021-08-15",
    }),
  ) as unknown as Schema.Codec<CustomLocationsListBySubscriptionInput>;

// Output Schema
export interface CustomLocationsListBySubscriptionOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const CustomLocationsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CustomLocationsListBySubscriptionOutput>;

// The operation
/**
 * Gets a list of Custom Locations in a subscription.
 *
 * Gets a list of Custom Locations in the specified subscription. The operation returns properties of each Custom Location
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CustomLocationsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomLocationsListBySubscriptionInput,
    outputSchema: CustomLocationsListBySubscriptionOutput,
  }));
// Input Schema
export interface CustomLocationsListEnabledResourceTypesInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const CustomLocationsListEnabledResourceTypesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}/enabledResourceTypes",
      apiVersion: "2021-08-15",
    }),
  ) as unknown as Schema.Codec<CustomLocationsListEnabledResourceTypesInput>;

// Output Schema
export interface CustomLocationsListEnabledResourceTypesOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string }[];
}
export const CustomLocationsListEnabledResourceTypesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CustomLocationsListEnabledResourceTypesOutput>;

// The operation
/**
 * Gets the list of Enabled Resource Types.
 *
 * Gets the list of the Enabled Resource Types.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Custom Locations name.
 */
export const CustomLocationsListEnabledResourceTypes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomLocationsListEnabledResourceTypesInput,
    outputSchema: CustomLocationsListEnabledResourceTypesOutput,
  }));
// Input Schema
export interface CustomLocationsListOperationsInput {}
export const CustomLocationsListOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ExtendedLocation/operations",
      apiVersion: "2021-08-15",
    }),
  ) as unknown as Schema.Codec<CustomLocationsListOperationsInput>;

// Output Schema
export interface CustomLocationsListOperationsOutput {
  nextLink?: string;
  value: {
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
    isDataAction?: boolean;
    name?: string;
    origin?: string;
  }[];
}
export const CustomLocationsListOperationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        display: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
          }),
        ),
        isDataAction: Schema.optional(Schema.Boolean),
        name: Schema.optional(Schema.String),
        origin: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CustomLocationsListOperationsOutput>;

// The operation
/**
 * Lists all available Custom Locations operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const CustomLocationsListOperations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomLocationsListOperationsInput,
    outputSchema: CustomLocationsListOperationsOutput,
  }));
// Input Schema
export interface CustomLocationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
  properties?: {
    authentication?: { type?: string; value?: string };
    clusterExtensionIds?: string[];
    displayName?: string;
    hostResourceId?: string;
    hostType?: "Kubernetes";
    namespace?: string;
    provisioningState?: string;
  };
  tags?: Record<string, string>;
}
export const CustomLocationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        authentication: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
        clusterExtensionIds: Schema.optional(Schema.Array(Schema.String)),
        displayName: Schema.optional(Schema.String),
        hostResourceId: Schema.optional(Schema.String),
        hostType: Schema.optional(Schema.Literals(["Kubernetes"])),
        namespace: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}",
      apiVersion: "2021-08-15",
    }),
  ) as unknown as Schema.Codec<CustomLocationsUpdateInput>;

// Output Schema
export interface CustomLocationsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const CustomLocationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CustomLocationsUpdateOutput>;

// The operation
/**
 * Updates a Custom Location.
 *
 * Updates a Custom Location with the specified Resource Name in the specified Resource Group and Subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Custom Locations name.
 */
export const CustomLocationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomLocationsUpdateInput,
    outputSchema: CustomLocationsUpdateOutput,
  }),
);
