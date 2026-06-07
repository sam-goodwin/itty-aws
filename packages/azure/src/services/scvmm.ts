/**
 * Azure Scvmm API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
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
  );
export type AvailabilitySetsCreateOrUpdateInput =
  typeof AvailabilitySetsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type AvailabilitySetsCreateOrUpdateOutput =
  typeof AvailabilitySetsCreateOrUpdateOutput.Type;

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
export const AvailabilitySetsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    availabilitySetResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/availabilitySets/{availabilitySetResourceName}",
      apiVersion: "2025-03-13",
    }),
  );
export type AvailabilitySetsDeleteInput =
  typeof AvailabilitySetsDeleteInput.Type;

// Output Schema
export const AvailabilitySetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AvailabilitySetsDeleteOutput =
  typeof AvailabilitySetsDeleteOutput.Type;

// The operation
/**
 * Implements AvailabilitySet DELETE method.
 *
 * Deregisters the ScVmm availability set from Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param availabilitySetResourceName - Name of the AvailabilitySet.
 */
export const AvailabilitySetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AvailabilitySetsDeleteInput,
    outputSchema: AvailabilitySetsDeleteOutput,
  }),
);
// Input Schema
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
  );
export type AvailabilitySetsGetInput = typeof AvailabilitySetsGetInput.Type;

// Output Schema
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
  });
export type AvailabilitySetsGetOutput = typeof AvailabilitySetsGetOutput.Type;

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
  );
export type AvailabilitySetsListByResourceGroupInput =
  typeof AvailabilitySetsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type AvailabilitySetsListByResourceGroupOutput =
  typeof AvailabilitySetsListByResourceGroupOutput.Type;

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
export const AvailabilitySetsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/availabilitySets",
      apiVersion: "2025-03-13",
    }),
  );
export type AvailabilitySetsListBySubscriptionInput =
  typeof AvailabilitySetsListBySubscriptionInput.Type;

// Output Schema
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
  });
export type AvailabilitySetsListBySubscriptionOutput =
  typeof AvailabilitySetsListBySubscriptionOutput.Type;

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
  );
export type AvailabilitySetsUpdateInput =
  typeof AvailabilitySetsUpdateInput.Type;

// Output Schema
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
  });
export type AvailabilitySetsUpdateOutput =
  typeof AvailabilitySetsUpdateOutput.Type;

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
  );
export type CloudsCreateOrUpdateInput = typeof CloudsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type CloudsCreateOrUpdateOutput = typeof CloudsCreateOrUpdateOutput.Type;

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
export const CloudsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cloudResourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
    apiVersion: "2025-03-13",
  }),
);
export type CloudsDeleteInput = typeof CloudsDeleteInput.Type;

// Output Schema
export const CloudsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CloudsDeleteOutput = typeof CloudsDeleteOutput.Type;

// The operation
/**
 * Implements Cloud resource DELETE method.
 *
 * Deregisters the ScVmm fabric cloud from Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudResourceName - Name of the Cloud.
 */
export const CloudsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CloudsDeleteInput,
  outputSchema: CloudsDeleteOutput,
}));
// Input Schema
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
);
export type CloudsGetInput = typeof CloudsGetInput.Type;

// Output Schema
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
});
export type CloudsGetOutput = typeof CloudsGetOutput.Type;

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
  );
export type CloudsListByResourceGroupInput =
  typeof CloudsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type CloudsListByResourceGroupOutput =
  typeof CloudsListByResourceGroupOutput.Type;

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
export const CloudsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/clouds",
      apiVersion: "2025-03-13",
    }),
  );
export type CloudsListBySubscriptionInput =
  typeof CloudsListBySubscriptionInput.Type;

// Output Schema
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
  });
export type CloudsListBySubscriptionOutput =
  typeof CloudsListBySubscriptionOutput.Type;

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
);
export type CloudsUpdateInput = typeof CloudsUpdateInput.Type;

// Output Schema
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
});
export type CloudsUpdateOutput = typeof CloudsUpdateOutput.Type;

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
export const GuestAgentsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
);
export type GuestAgentsCreateInput = typeof GuestAgentsCreateInput.Type;

// Output Schema
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
  });
export type GuestAgentsCreateOutput = typeof GuestAgentsCreateOutput.Type;

// The operation
/**
 * Implements GuestAgent PUT method.
 *
 * Create Or Update GuestAgent.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentsCreateInput,
  outputSchema: GuestAgentsCreateOutput,
}));
// Input Schema
export const GuestAgentsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
    apiVersion: "2025-03-13",
  }),
);
export type GuestAgentsDeleteInput = typeof GuestAgentsDeleteInput.Type;

// Output Schema
export const GuestAgentsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GuestAgentsDeleteOutput = typeof GuestAgentsDeleteOutput.Type;

// The operation
/**
 * Deletes a GuestAgent resource.
 *
 * Implements GuestAgent DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentsDeleteInput,
  outputSchema: GuestAgentsDeleteOutput,
}));
// Input Schema
export const GuestAgentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
    apiVersion: "2025-03-13",
  }),
);
export type GuestAgentsGetInput = typeof GuestAgentsGetInput.Type;

// Output Schema
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
});
export type GuestAgentsGetOutput = typeof GuestAgentsGetOutput.Type;

// The operation
/**
 * Gets GuestAgent.
 *
 * Implements GuestAgent GET method.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GuestAgentsGetInput,
  outputSchema: GuestAgentsGetOutput,
}));
// Input Schema
export const GuestAgentsListByVirtualMachineInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents",
      apiVersion: "2025-03-13",
    }),
  );
export type GuestAgentsListByVirtualMachineInstanceInput =
  typeof GuestAgentsListByVirtualMachineInstanceInput.Type;

// Output Schema
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
  });
export type GuestAgentsListByVirtualMachineInstanceOutput =
  typeof GuestAgentsListByVirtualMachineInstanceOutput.Type;

// The operation
/**
 * Implements GET GuestAgent in a vm.
 *
 * Returns the list of GuestAgent of the given vm.
 *
 * @param api-version - The API version to use for this operation.
 */
export const GuestAgentsListByVirtualMachineInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestAgentsListByVirtualMachineInstanceInput,
    outputSchema: GuestAgentsListByVirtualMachineInstanceOutput,
  }));
// Input Schema
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
  );
export type InventoryItemsCreateInput = typeof InventoryItemsCreateInput.Type;

// Output Schema
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
  });
export type InventoryItemsCreateOutput = typeof InventoryItemsCreateOutput.Type;

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
  );
export type InventoryItemsDeleteInput = typeof InventoryItemsDeleteInput.Type;

// Output Schema
export const InventoryItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InventoryItemsDeleteOutput = typeof InventoryItemsDeleteOutput.Type;

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
);
export type InventoryItemsGetInput = typeof InventoryItemsGetInput.Type;

// Output Schema
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
  });
export type InventoryItemsGetOutput = typeof InventoryItemsGetOutput.Type;

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
  );
export type InventoryItemsListByVmmServerInput =
  typeof InventoryItemsListByVmmServerInput.Type;

// Output Schema
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
  });
export type InventoryItemsListByVmmServerOutput =
  typeof InventoryItemsListByVmmServerOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ScVmm/operations",
    apiVersion: "2025-03-13",
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const VirtualMachineInstancesCreateCheckpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/createCheckpoint",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineInstancesCreateCheckpointInput =
  typeof VirtualMachineInstancesCreateCheckpointInput.Type;

// Output Schema
export const VirtualMachineInstancesCreateCheckpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesCreateCheckpointOutput =
  typeof VirtualMachineInstancesCreateCheckpointOutput.Type;

// The operation
/**
 * Implements the operation to creates a checkpoint in a virtual machine instance.
 *
 * Creates a checkpoint in virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesCreateCheckpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesCreateCheckpointInput,
    outputSchema: VirtualMachineInstancesCreateCheckpointOutput,
  }));
// Input Schema
export const VirtualMachineInstancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type VirtualMachineInstancesCreateOrUpdateInput =
  typeof VirtualMachineInstancesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type VirtualMachineInstancesCreateOrUpdateOutput =
  typeof VirtualMachineInstancesCreateOrUpdateOutput.Type;

// The operation
/**
 * Implements virtual machine PUT method.
 *
 * The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesCreateOrUpdateInput,
    outputSchema: VirtualMachineInstancesCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachineInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleteFromHost: Schema.optional(Schema.Literals(["true", "false"])),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineInstancesDeleteInput =
  typeof VirtualMachineInstancesDeleteInput.Type;

// Output Schema
export const VirtualMachineInstancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesDeleteOutput =
  typeof VirtualMachineInstancesDeleteOutput.Type;

// The operation
/**
 * Deletes an virtual machine.
 *
 * The operation to delete a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param deleteFromHost - Whether to disable the VM from azure and also delete it from Vmm.
 */
export const VirtualMachineInstancesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesDeleteInput,
    outputSchema: VirtualMachineInstancesDeleteOutput,
  }));
// Input Schema
export const VirtualMachineInstancesDeleteCheckpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/deleteCheckpoint",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineInstancesDeleteCheckpointInput =
  typeof VirtualMachineInstancesDeleteCheckpointInput.Type;

// Output Schema
export const VirtualMachineInstancesDeleteCheckpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesDeleteCheckpointOutput =
  typeof VirtualMachineInstancesDeleteCheckpointOutput.Type;

// The operation
/**
 * Implements the operation to delete a checkpoint in a virtual machine instance.
 *
 * Deletes a checkpoint in virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesDeleteCheckpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesDeleteCheckpointInput,
    outputSchema: VirtualMachineInstancesDeleteCheckpointOutput,
  }));
// Input Schema
export const VirtualMachineInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineInstancesGetInput =
  typeof VirtualMachineInstancesGetInput.Type;

// Output Schema
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
  });
export type VirtualMachineInstancesGetOutput =
  typeof VirtualMachineInstancesGetOutput.Type;

// The operation
/**
 * Gets a virtual machine.
 *
 * Retrieves information about a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesGetInput,
    outputSchema: VirtualMachineInstancesGetOutput,
  }),
);
// Input Schema
export const VirtualMachineInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineInstancesListInput =
  typeof VirtualMachineInstancesListInput.Type;

// Output Schema
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
  });
export type VirtualMachineInstancesListOutput =
  typeof VirtualMachineInstancesListOutput.Type;

// The operation
/**
 * Implements List virtual machine instances.
 *
 * Lists all of the virtual machine instances within the specified parent resource.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesListInput,
    outputSchema: VirtualMachineInstancesListOutput,
  }),
);
// Input Schema
export const VirtualMachineInstancesRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restart",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineInstancesRestartInput =
  typeof VirtualMachineInstancesRestartInput.Type;

// Output Schema
export const VirtualMachineInstancesRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesRestartOutput =
  typeof VirtualMachineInstancesRestartOutput.Type;

// The operation
/**
 * Implements the operation to restart a virtual machine.
 *
 * The operation to restart a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesRestart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesRestartInput,
    outputSchema: VirtualMachineInstancesRestartOutput,
  }));
// Input Schema
export const VirtualMachineInstancesRestoreCheckpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/restoreCheckpoint",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineInstancesRestoreCheckpointInput =
  typeof VirtualMachineInstancesRestoreCheckpointInput.Type;

// Output Schema
export const VirtualMachineInstancesRestoreCheckpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesRestoreCheckpointOutput =
  typeof VirtualMachineInstancesRestoreCheckpointOutput.Type;

// The operation
/**
 * Implements the operation to restores to a checkpoint in a virtual machine instance.
 *
 * Restores to a checkpoint in virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesRestoreCheckpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesRestoreCheckpointInput,
    outputSchema: VirtualMachineInstancesRestoreCheckpointOutput,
  }));
// Input Schema
export const VirtualMachineInstancesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/start",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineInstancesStartInput =
  typeof VirtualMachineInstancesStartInput.Type;

// Output Schema
export const VirtualMachineInstancesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesStartOutput =
  typeof VirtualMachineInstancesStartOutput.Type;

// The operation
/**
 * Implements the operation to start a virtual machine.
 *
 * The operation to start a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesStartInput,
    outputSchema: VirtualMachineInstancesStartOutput,
  }));
// Input Schema
export const VirtualMachineInstancesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skipShutdown: Schema.optional(Schema.Literals(["true", "false"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/stop",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineInstancesStopInput =
  typeof VirtualMachineInstancesStopInput.Type;

// Output Schema
export const VirtualMachineInstancesStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineInstancesStopOutput =
  typeof VirtualMachineInstancesStopOutput.Type;

// The operation
/**
 * Implements the operation to stop a virtual machine.
 *
 * The operation to power off (stop) a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesStopInput,
    outputSchema: VirtualMachineInstancesStopOutput,
  }),
);
// Input Schema
export const VirtualMachineInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type VirtualMachineInstancesUpdateInput =
  typeof VirtualMachineInstancesUpdateInput.Type;

// Output Schema
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
  });
export type VirtualMachineInstancesUpdateOutput =
  typeof VirtualMachineInstancesUpdateOutput.Type;

// The operation
/**
 * Updates a virtual machine.
 *
 * The operation to update a virtual machine instance.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineInstancesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesUpdateInput,
    outputSchema: VirtualMachineInstancesUpdateOutput,
  }));
// Input Schema
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
  );
export type VirtualMachineTemplatesCreateOrUpdateInput =
  typeof VirtualMachineTemplatesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type VirtualMachineTemplatesCreateOrUpdateOutput =
  typeof VirtualMachineTemplatesCreateOrUpdateOutput.Type;

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
export const VirtualMachineTemplatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineTemplatesDeleteInput =
  typeof VirtualMachineTemplatesDeleteInput.Type;

// Output Schema
export const VirtualMachineTemplatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineTemplatesDeleteOutput =
  typeof VirtualMachineTemplatesDeleteOutput.Type;

// The operation
/**
 * Implements VirtualMachineTemplate DELETE method.
 *
 * Deregisters the ScVmm VM Template from Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualMachineTemplateName - Name of the VirtualMachineTemplate.
 */
export const VirtualMachineTemplatesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesDeleteInput,
    outputSchema: VirtualMachineTemplatesDeleteOutput,
  }));
// Input Schema
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
  );
export type VirtualMachineTemplatesGetInput =
  typeof VirtualMachineTemplatesGetInput.Type;

// Output Schema
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
  });
export type VirtualMachineTemplatesGetOutput =
  typeof VirtualMachineTemplatesGetOutput.Type;

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
  );
export type VirtualMachineTemplatesListByResourceGroupInput =
  typeof VirtualMachineTemplatesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type VirtualMachineTemplatesListByResourceGroupOutput =
  typeof VirtualMachineTemplatesListByResourceGroupOutput.Type;

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
export const VirtualMachineTemplatesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualMachineTemplatesListBySubscriptionInput =
  typeof VirtualMachineTemplatesListBySubscriptionInput.Type;

// Output Schema
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
  });
export type VirtualMachineTemplatesListBySubscriptionOutput =
  typeof VirtualMachineTemplatesListBySubscriptionOutput.Type;

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
  );
export type VirtualMachineTemplatesUpdateInput =
  typeof VirtualMachineTemplatesUpdateInput.Type;

// Output Schema
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
  });
export type VirtualMachineTemplatesUpdateOutput =
  typeof VirtualMachineTemplatesUpdateOutput.Type;

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
export const VirtualNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2025-03-13",
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
 * Implements VirtualNetwork DELETE method.
 *
 * Deregisters the ScVmm virtual network from Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - Name of the VirtualNetwork.
 */
export const VirtualNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksDeleteInput,
    outputSchema: VirtualNetworksDeleteOutput,
  }),
);
// Input Schema
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
  );
export type VirtualNetworksGetInput = typeof VirtualNetworksGetInput.Type;

// Output Schema
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
  });
export type VirtualNetworksGetOutput = typeof VirtualNetworksGetOutput.Type;

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
  );
export type VirtualNetworksListByResourceGroupInput =
  typeof VirtualNetworksListByResourceGroupInput.Type;

// Output Schema
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
  });
export type VirtualNetworksListByResourceGroupOutput =
  typeof VirtualNetworksListByResourceGroupOutput.Type;

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
export const VirtualNetworksListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualNetworks",
      apiVersion: "2025-03-13",
    }),
  );
export type VirtualNetworksListBySubscriptionInput =
  typeof VirtualNetworksListBySubscriptionInput.Type;

// Output Schema
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
  });
export type VirtualNetworksListBySubscriptionOutput =
  typeof VirtualNetworksListBySubscriptionOutput.Type;

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
export const VmInstanceHybridIdentityMetadatasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2025-03-13",
    }),
  );
export type VmInstanceHybridIdentityMetadatasGetInput =
  typeof VmInstanceHybridIdentityMetadatasGetInput.Type;

// Output Schema
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
  });
export type VmInstanceHybridIdentityMetadatasGetOutput =
  typeof VmInstanceHybridIdentityMetadatasGetOutput.Type;

// The operation
/**
 * Gets HybridIdentityMetadata.
 *
 * Implements HybridIdentityMetadata GET method.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VmInstanceHybridIdentityMetadatasGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmInstanceHybridIdentityMetadatasGetInput,
    outputSchema: VmInstanceHybridIdentityMetadatasGetOutput,
  }));
// Input Schema
export const VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata",
      apiVersion: "2025-03-13",
    }),
  );
export type VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceInput =
  typeof VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceInput.Type;

// Output Schema
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
  });
export type VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOutput =
  typeof VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOutput.Type;

// The operation
/**
 * Implements GET HybridIdentityMetadata in a vm.
 *
 * Returns the list of HybridIdentityMetadata of the given VM.
 *
 * @param api-version - The API version to use for this operation.
 */
export const VmInstanceHybridIdentityMetadatasListByVirtualMachineInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceInput,
    outputSchema:
      VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOutput,
  }));
// Input Schema
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
  );
export type VmmServersCreateOrUpdateInput =
  typeof VmmServersCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type VmmServersCreateOrUpdateOutput =
  typeof VmmServersCreateOrUpdateOutput.Type;

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
export const VmmServersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vmmServerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/vmmServers/{vmmServerName}",
    apiVersion: "2025-03-13",
  }),
);
export type VmmServersDeleteInput = typeof VmmServersDeleteInput.Type;

// Output Schema
export const VmmServersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VmmServersDeleteOutput = typeof VmmServersDeleteOutput.Type;

// The operation
/**
 * Implements VmmServers DELETE method.
 *
 * Removes the SCVmm fabric from Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmmServerName - Name of the VmmServer.
 */
export const VmmServersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VmmServersDeleteInput,
  outputSchema: VmmServersDeleteOutput,
}));
// Input Schema
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
);
export type VmmServersGetInput = typeof VmmServersGetInput.Type;

// Output Schema
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
});
export type VmmServersGetOutput = typeof VmmServersGetOutput.Type;

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
  );
export type VmmServersListByResourceGroupInput =
  typeof VmmServersListByResourceGroupInput.Type;

// Output Schema
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
  });
export type VmmServersListByResourceGroupOutput =
  typeof VmmServersListByResourceGroupOutput.Type;

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
export const VmmServersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/vmmServers",
      apiVersion: "2025-03-13",
    }),
  );
export type VmmServersListBySubscriptionInput =
  typeof VmmServersListBySubscriptionInput.Type;

// Output Schema
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
  });
export type VmmServersListBySubscriptionOutput =
  typeof VmmServersListBySubscriptionOutput.Type;

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
);
export type VmmServersUpdateInput = typeof VmmServersUpdateInput.Type;

// Output Schema
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
);
export type VmmServersUpdateOutput = typeof VmmServersUpdateOutput.Type;

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
