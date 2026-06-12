/**
 * Azure Devopsinfrastructure API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  origin: Schema.optional(Schema.Literals(["user", "system", "user,system"])),
  actionType: Schema.optional(Schema.Literals(["Internal"])),
});
const DevOpsInfrastructureResourceTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Microsoft.DevOpsInfrastructure/pools",
  ]);
const AvailabilityStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Available",
  "Unavailable",
]);
const CheckNameAvailabilityReasonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Invalid", "AlreadyExists"]);
const ResourceSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const systemDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const QuotaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.suspend(() => QuotaNameSchema)),
  id: Schema.String,
  unit: Schema.String,
  currentValue: Schema.Number,
  limit: Schema.Number,
});
const QuotaNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  localizedValue: Schema.optional(Schema.String),
});
const PoolSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ImageVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PoolPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  maximumConcurrency: Schema.Number,
  organizationProfile: Schema.suspend(() => OrganizationProfileSchema),
  agentProfile: Schema.suspend(() => AgentProfileSchema),
  fabricProfile: Schema.suspend(() => FabricProfileSchema),
  devCenterProjectResourceId: Schema.String,
  runtimeConfiguration: Schema.optional(
    Schema.suspend(() => RuntimeConfigurationSchema),
  ),
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Canceled",
  "Provisioning",
  "Updating",
  "Deleting",
  "Accepted",
]);
const OrganizationProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.String,
});
const AgentProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.String,
  resourcePredictions: Schema.optional(
    Schema.suspend(() => ResourcePredictionsSchema),
  ),
  resourcePredictionsProfile: Schema.optional(
    Schema.suspend(() => ResourcePredictionsProfileSchema),
  ),
});
const ResourcePredictionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
const ResourcePredictionsProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.suspend(() => ResourcePredictionsProfileTypeSchema),
  });
const ResourcePredictionsProfileTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Manual", "Automatic"]);
const FabricProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.String,
});
const RuntimeConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workFolder: Schema.optional(Schema.String),
});
const ManagedServiceIdentityTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "SystemAssigned",
    "UserAssigned",
    "SystemAssigned,UserAssigned",
  ]);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const PoolUpdatePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  maximumConcurrency: Schema.optional(Schema.Number),
  organizationProfile: Schema.optional(
    Schema.suspend(() => OrganizationProfileSchema),
  ),
  agentProfile: Schema.optional(Schema.suspend(() => AgentProfileSchema)),
  fabricProfile: Schema.optional(Schema.suspend(() => FabricProfileSchema)),
  devCenterProjectResourceId: Schema.optional(Schema.String),
  runtimeConfiguration: Schema.optional(
    Schema.suspend(() => RuntimeConfigurationSchema),
  ),
});
const ResourceDetailsObjectSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});

// Input Schema
export const ImageVersionsListByImageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/images/{imageName}/versions",
      apiVersion: "2025-09-20",
    }),
  );
export type ImageVersionsListByImageInput =
  typeof ImageVersionsListByImageInput.Type;

// Output Schema
export const ImageVersionsListByImageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ImageVersionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ImageVersionsListByImageOutput =
  typeof ImageVersionsListByImageOutput.Type;

// The operation
/**
 * List ImageVersion resources by Image
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageName - Name of the image.
 */
export const ImageVersionsListByImage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImageVersionsListByImageInput,
    outputSchema: ImageVersionsListByImageOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DevOpsInfrastructure/operations",
    apiVersion: "2025-09-20",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
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
export const PoolsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.suspend(() => DevOpsInfrastructureResourceTypeSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/checkNameAvailability",
      apiVersion: "2025-09-20",
    }),
  );
export type PoolsCheckNameAvailabilityInput =
  typeof PoolsCheckNameAvailabilityInput.Type;

// Output Schema
export const PoolsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available: Schema.suspend(() => AvailabilityStatusSchema),
    message: Schema.String,
    name: Schema.String,
    reason: Schema.suspend(() => CheckNameAvailabilityReasonSchema),
  });
export type PoolsCheckNameAvailabilityOutput =
  typeof PoolsCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Checks that the pool name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PoolsCheckNameAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoolsCheckNameAvailabilityInput,
    outputSchema: PoolsCheckNameAvailabilityOutput,
  }),
);
// Input Schema
export const PoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => PoolPropertiesSchema)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.suspend(() => UserAssignedIdentitySchema),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}",
      apiVersion: "2025-09-20",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PoolsCreateOrUpdateInput = typeof PoolsCreateOrUpdateInput.Type;

// Output Schema
export const PoolsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => PoolPropertiesSchema)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.suspend(() => UserAssignedIdentitySchema),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoolsCreateOrUpdateOutput = typeof PoolsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a Pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param poolName - Name of the pool. It needs to be globally unique.
 */
export const PoolsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsCreateOrUpdateInput,
  outputSchema: PoolsCreateOrUpdateOutput,
}));
// Input Schema
export const PoolsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}",
    apiVersion: "2025-09-20",
    longRunning: { finalStateVia: "location" },
  }),
);
export type PoolsDeleteInput = typeof PoolsDeleteInput.Type;

// Output Schema
export const PoolsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PoolsDeleteOutput = typeof PoolsDeleteOutput.Type;

// The operation
/**
 * Delete a Pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param poolName - Name of the pool. It needs to be globally unique.
 */
export const PoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsDeleteInput,
  outputSchema: PoolsDeleteOutput,
}));
// Input Schema
export const PoolsDeleteResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    resourceIds: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}/resources",
      apiVersion: "2025-09-20",
    }),
  );
export type PoolsDeleteResourcesInput = typeof PoolsDeleteResourcesInput.Type;

// Output Schema
export const PoolsDeleteResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PoolsDeleteResourcesOutput = typeof PoolsDeleteResourcesOutput.Type;

// The operation
/**
 * A synchronous resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param poolName - Name of the pool. It needs to be globally unique.
 */
export const PoolsDeleteResources = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoolsDeleteResourcesInput,
    outputSchema: PoolsDeleteResourcesOutput,
  }),
);
// Input Schema
export const PoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}",
    apiVersion: "2025-09-20",
  }),
);
export type PoolsGetInput = typeof PoolsGetInput.Type;

// Output Schema
export const PoolsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => PoolPropertiesSchema)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.suspend(() => UserAssignedIdentitySchema),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type PoolsGetOutput = typeof PoolsGetOutput.Type;

// The operation
/**
 * Get a Pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param poolName - Name of the pool. It needs to be globally unique.
 */
export const PoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsGetInput,
  outputSchema: PoolsGetOutput,
}));
// Input Schema
export const PoolsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools",
      apiVersion: "2025-09-20",
    }),
  );
export type PoolsListByResourceGroupInput =
  typeof PoolsListByResourceGroupInput.Type;

// Output Schema
export const PoolsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PoolSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PoolsListByResourceGroupOutput =
  typeof PoolsListByResourceGroupOutput.Type;

// The operation
/**
 * List Pool resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PoolsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoolsListByResourceGroupInput,
    outputSchema: PoolsListByResourceGroupOutput,
  }),
);
// Input Schema
export const PoolsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/pools",
      apiVersion: "2025-09-20",
    }),
  );
export type PoolsListBySubscriptionInput =
  typeof PoolsListBySubscriptionInput.Type;

// Output Schema
export const PoolsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PoolSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PoolsListBySubscriptionOutput =
  typeof PoolsListBySubscriptionOutput.Type;

// The operation
/**
 * List Pool resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PoolsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoolsListBySubscriptionInput,
    outputSchema: PoolsListBySubscriptionOutput,
  }),
);
// Input Schema
export const PoolsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.suspend(() => UserAssignedIdentitySchema),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(Schema.suspend(() => PoolUpdatePropertiesSchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}",
    apiVersion: "2025-09-20",
    longRunning: { finalStateVia: "location" },
  }),
);
export type PoolsUpdateInput = typeof PoolsUpdateInput.Type;

// Output Schema
export const PoolsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => PoolPropertiesSchema)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.suspend(() => UserAssignedIdentitySchema),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type PoolsUpdateOutput = typeof PoolsUpdateOutput.Type;

// The operation
/**
 * Update a Pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param poolName - Name of the pool. It needs to be globally unique.
 */
export const PoolsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsUpdateInput,
  outputSchema: PoolsUpdateOutput,
}));
// Input Schema
export const ResourceDetailsListByPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOpsInfrastructure/pools/{poolName}/resources",
      apiVersion: "2025-09-20",
    }),
  );
export type ResourceDetailsListByPoolInput =
  typeof ResourceDetailsListByPoolInput.Type;

// Output Schema
export const ResourceDetailsListByPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ResourceDetailsObjectSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ResourceDetailsListByPoolOutput =
  typeof ResourceDetailsListByPoolOutput.Type;

// The operation
/**
 * List ResourceDetailsObject resources by Pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param poolName - Name of the pool. It needs to be globally unique.
 */
export const ResourceDetailsListByPool = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ResourceDetailsListByPoolInput,
    outputSchema: ResourceDetailsListByPoolOutput,
  }),
);
// Input Schema
export const SkuListByLocationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/locations/{locationName}/skus",
    apiVersion: "2025-09-20",
  }),
);
export type SkuListByLocationInput = typeof SkuListByLocationInput.Type;

// Output Schema
export const SkuListByLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ResourceSkuSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SkuListByLocationOutput = typeof SkuListByLocationOutput.Type;

// The operation
/**
 * List ResourceSku resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - Name of the location.
 */
export const SkuListByLocation = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkuListByLocationInput,
  outputSchema: SkuListByLocationOutput,
}));
// Input Schema
export const SubscriptionUsagesUsagesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevOpsInfrastructure/locations/{location}/usages",
      apiVersion: "2025-09-20",
    }),
  );
export type SubscriptionUsagesUsagesInput =
  typeof SubscriptionUsagesUsagesInput.Type;

// Output Schema
export const SubscriptionUsagesUsagesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => QuotaSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SubscriptionUsagesUsagesOutput =
  typeof SubscriptionUsagesUsagesOutput.Type;

// The operation
/**
 * List Quota resources by subscription ID
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const SubscriptionUsagesUsages = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionUsagesUsagesInput,
    outputSchema: SubscriptionUsagesUsagesOutput,
  }),
);
