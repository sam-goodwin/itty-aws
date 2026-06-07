/**
 * Azure Extendedlocation API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CustomLocationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type CustomLocationsCreateOrUpdateInput =
  typeof CustomLocationsCreateOrUpdateInput.Type;

// Output Schema
export const CustomLocationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type CustomLocationsCreateOrUpdateOutput =
  typeof CustomLocationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Custom Location.
 *
 * Creates or updates a Custom Location in the specified Subscription and Resource Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CustomLocationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomLocationsCreateOrUpdateInput,
    outputSchema: CustomLocationsCreateOrUpdateOutput,
  }));
// Input Schema
export const CustomLocationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}",
      apiVersion: "2021-08-15",
    }),
  );
export type CustomLocationsDeleteInput = typeof CustomLocationsDeleteInput.Type;

// Output Schema
export const CustomLocationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomLocationsDeleteOutput =
  typeof CustomLocationsDeleteOutput.Type;

// The operation
/**
 * Deletes a Custom Location.
 *
 * Deletes the Custom Location with the specified Resource Name, Resource Group, and Subscription Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CustomLocationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomLocationsDeleteInput,
    outputSchema: CustomLocationsDeleteOutput,
  }),
);
// Input Schema
export const CustomLocationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}",
      apiVersion: "2021-08-15",
    }),
  );
export type CustomLocationsGetInput = typeof CustomLocationsGetInput.Type;

// Output Schema
export const CustomLocationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type CustomLocationsGetOutput = typeof CustomLocationsGetOutput.Type;

// The operation
/**
 * Gets a Custom Location.
 *
 * Gets the details of the customLocation with a specified resource group and name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CustomLocationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomLocationsGetInput,
  outputSchema: CustomLocationsGetOutput,
}));
// Input Schema
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
  );
export type CustomLocationsListByResourceGroupInput =
  typeof CustomLocationsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type CustomLocationsListByResourceGroupOutput =
  typeof CustomLocationsListByResourceGroupOutput.Type;

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
export const CustomLocationsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ExtendedLocation/customLocations",
      apiVersion: "2021-08-15",
    }),
  );
export type CustomLocationsListBySubscriptionInput =
  typeof CustomLocationsListBySubscriptionInput.Type;

// Output Schema
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
  });
export type CustomLocationsListBySubscriptionOutput =
  typeof CustomLocationsListBySubscriptionOutput.Type;

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
export const CustomLocationsListEnabledResourceTypesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}/enabledResourceTypes",
      apiVersion: "2021-08-15",
    }),
  );
export type CustomLocationsListEnabledResourceTypesInput =
  typeof CustomLocationsListEnabledResourceTypesInput.Type;

// Output Schema
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
  });
export type CustomLocationsListEnabledResourceTypesOutput =
  typeof CustomLocationsListEnabledResourceTypesOutput.Type;

// The operation
/**
 * Gets the list of Enabled Resource Types.
 *
 * Gets the list of the Enabled Resource Types.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CustomLocationsListEnabledResourceTypes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomLocationsListEnabledResourceTypesInput,
    outputSchema: CustomLocationsListEnabledResourceTypesOutput,
  }));
// Input Schema
export const CustomLocationsListOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ExtendedLocation/operations",
      apiVersion: "2021-08-15",
    }),
  );
export type CustomLocationsListOperationsInput =
  typeof CustomLocationsListOperationsInput.Type;

// Output Schema
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
  });
export type CustomLocationsListOperationsOutput =
  typeof CustomLocationsListOperationsOutput.Type;

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
export const CustomLocationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type CustomLocationsUpdateInput = typeof CustomLocationsUpdateInput.Type;

// Output Schema
export const CustomLocationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type CustomLocationsUpdateOutput =
  typeof CustomLocationsUpdateOutput.Type;

// The operation
/**
 * Updates a Custom Location.
 *
 * Updates a Custom Location with the specified Resource Name in the specified Resource Group and Subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CustomLocationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomLocationsUpdateInput,
    outputSchema: CustomLocationsUpdateOutput,
  }),
);
