/**
 * Azure Standbypool API
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
const StandbyContainerGroupPoolResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const StandbyVirtualMachinePoolResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const StandbyContainerGroupPoolResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elasticityProfile: Schema.suspend(
      () => StandbyContainerGroupPoolElasticityProfileSchema,
    ),
    containerGroupProperties: Schema.suspend(
      () => ContainerGroupPropertiesSchema,
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const StandbyContainerGroupPoolElasticityProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxReadyCapacity: Schema.Number,
    refillPolicy: Schema.optional(Schema.suspend(() => RefillPolicySchema)),
    dynamicSizing: Schema.optional(Schema.suspend(() => DynamicSizingSchema)),
  });
const RefillPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "always",
]);
const DynamicSizingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
});
const ContainerGroupPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerGroupProfile: Schema.suspend(() => ContainerGroupProfileSchema),
    subnetIds: Schema.optional(
      Schema.Array(Schema.suspend(() => SubnetSchema)),
    ),
  });
const ContainerGroupProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  revision: Schema.optional(Schema.Number),
});
const SubnetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Canceled",
  "Deleting",
]);
const StandbyContainerGroupPoolResourceUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elasticityProfile: Schema.optional(
      Schema.suspend(() => StandbyContainerGroupPoolElasticityProfileSchema),
    ),
    containerGroupProperties: Schema.optional(
      Schema.suspend(() => ContainerGroupPropertiesSchema),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
  });
const StandbyContainerGroupPoolRuntimeViewResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const StandbyContainerGroupPoolRuntimeViewResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceCountSummary: Schema.Array(
      Schema.suspend(() => ContainerGroupInstanceCountSummarySchema),
    ),
    status: Schema.optional(Schema.suspend(() => PoolStatusSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    prediction: Schema.optional(
      Schema.suspend(() => StandbyContainerGroupPoolPredictionSchema),
    ),
  });
const ContainerGroupInstanceCountSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.Number),
    instanceCountsByState: Schema.Array(
      Schema.suspend(() => PoolContainerGroupStateCountSchema),
    ),
  });
const PoolContainerGroupStateCountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.suspend(() => PoolContainerGroupStateSchema),
    count: Schema.Number,
  });
const PoolContainerGroupStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Running",
    "Creating",
    "Deleting",
  ]);
const PoolStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.suspend(() => HealthStateCodeSchema),
  message: Schema.optional(Schema.String),
});
const HealthStateCodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "HealthState/healthy",
  "HealthState/degraded",
]);
const StandbyContainerGroupPoolPredictionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forecastValues: Schema.suspend(
      () => StandbyContainerGroupPoolForecastValuesSchema,
    ),
    forecastStartTime: Schema.String,
    forecastInfo: Schema.String,
  });
const StandbyContainerGroupPoolForecastValuesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instancesRequestedCount: Schema.Array(Schema.Number),
  });
const StandbyVirtualMachinePoolResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elasticityProfile: Schema.optional(
      Schema.suspend(() => StandbyVirtualMachinePoolElasticityProfileSchema),
    ),
    virtualMachineState: Schema.suspend(() => VirtualMachineStateSchema),
    attachedVirtualMachineScaleSetId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const StandbyVirtualMachinePoolElasticityProfileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxReadyCapacity: Schema.Number,
    minReadyCapacity: Schema.optional(Schema.Number),
    postProvisioningDelay: Schema.optional(Schema.String),
    dynamicSizing: Schema.optional(Schema.suspend(() => DynamicSizingSchema)),
  });
const VirtualMachineStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Running",
  "Deallocated",
  "Hibernated",
]);
const StandbyVirtualMachinePoolResourceUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elasticityProfile: Schema.optional(
      Schema.suspend(() => StandbyVirtualMachinePoolElasticityProfileSchema),
    ),
    virtualMachineState: Schema.optional(
      Schema.suspend(() => VirtualMachineStateSchema),
    ),
    attachedVirtualMachineScaleSetId: Schema.optional(Schema.String),
  });
const StandbyVirtualMachinePoolRuntimeViewResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const StandbyVirtualMachinePoolRuntimeViewResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceCountSummary: Schema.Array(
      Schema.suspend(() => VirtualMachineInstanceCountSummarySchema),
    ),
    status: Schema.optional(Schema.suspend(() => PoolStatusSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    prediction: Schema.optional(
      Schema.suspend(() => StandbyVirtualMachinePoolPredictionSchema),
    ),
  });
const VirtualMachineInstanceCountSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.Number),
    instanceCountsByState: Schema.Array(
      Schema.suspend(() => PoolVirtualMachineStateCountSchema),
    ),
  });
const PoolVirtualMachineStateCountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.suspend(() => PoolVirtualMachineStateSchema),
    count: Schema.Number,
  });
const PoolVirtualMachineStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Running",
    "Creating",
    "Starting",
    "Deleting",
    "Deallocated",
    "Deallocating",
    "Hibernated",
    "Hibernating",
  ]);
const StandbyVirtualMachinePoolPredictionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forecastValues: Schema.suspend(
      () => StandbyVirtualMachinePoolForecastValuesSchema,
    ),
    forecastStartTime: Schema.String,
    forecastInfo: Schema.String,
  });
const StandbyVirtualMachinePoolForecastValuesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instancesRequestedCount: Schema.Array(Schema.Number),
  });
const StandbyVirtualMachineResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const StandbyVirtualMachineResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineResourceId: Schema.String,
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });

// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.StandbyPool/operations",
    apiVersion: "2025-10-01",
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
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyContainerGroupPoolRuntimeViewsGetInput =
  typeof StandbyContainerGroupPoolRuntimeViewsGetInput.Type;

// Output Schema
export const StandbyContainerGroupPoolRuntimeViewsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(
        () => StandbyContainerGroupPoolRuntimeViewResourcePropertiesSchema,
      ),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StandbyContainerGroupPoolRuntimeViewsGetOutput =
  typeof StandbyContainerGroupPoolRuntimeViewsGetOutput.Type;

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
export const StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}/runtimeViews",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolInput =
  typeof StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolInput.Type;

// Output Schema
export const StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => StandbyContainerGroupPoolRuntimeViewResourceSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOutput =
  typeof StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOutput.Type;

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
export const StandbyContainerGroupPoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => StandbyContainerGroupPoolResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      apiVersion: "2025-10-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type StandbyContainerGroupPoolsCreateOrUpdateInput =
  typeof StandbyContainerGroupPoolsCreateOrUpdateInput.Type;

// Output Schema
export const StandbyContainerGroupPoolsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StandbyContainerGroupPoolResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StandbyContainerGroupPoolsCreateOrUpdateOutput =
  typeof StandbyContainerGroupPoolsCreateOrUpdateOutput.Type;

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
export const StandbyContainerGroupPoolsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      apiVersion: "2025-10-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type StandbyContainerGroupPoolsDeleteInput =
  typeof StandbyContainerGroupPoolsDeleteInput.Type;

// Output Schema
export const StandbyContainerGroupPoolsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StandbyContainerGroupPoolsDeleteOutput =
  typeof StandbyContainerGroupPoolsDeleteOutput.Type;

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
export const StandbyContainerGroupPoolsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyContainerGroupPoolsGetInput =
  typeof StandbyContainerGroupPoolsGetInput.Type;

// Output Schema
export const StandbyContainerGroupPoolsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StandbyContainerGroupPoolResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StandbyContainerGroupPoolsGetOutput =
  typeof StandbyContainerGroupPoolsGetOutput.Type;

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
export const StandbyContainerGroupPoolsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyContainerGroupPoolsListByResourceGroupInput =
  typeof StandbyContainerGroupPoolsListByResourceGroupInput.Type;

// Output Schema
export const StandbyContainerGroupPoolsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => StandbyContainerGroupPoolResourceSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type StandbyContainerGroupPoolsListByResourceGroupOutput =
  typeof StandbyContainerGroupPoolsListByResourceGroupOutput.Type;

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
export const StandbyContainerGroupPoolsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyContainerGroupPools",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyContainerGroupPoolsListBySubscriptionInput =
  typeof StandbyContainerGroupPoolsListBySubscriptionInput.Type;

// Output Schema
export const StandbyContainerGroupPoolsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => StandbyContainerGroupPoolResourceSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type StandbyContainerGroupPoolsListBySubscriptionOutput =
  typeof StandbyContainerGroupPoolsListBySubscriptionOutput.Type;

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
export const StandbyContainerGroupPoolsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyContainerGroupPoolName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(
        () => StandbyContainerGroupPoolResourceUpdatePropertiesSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyContainerGroupPools/{standbyContainerGroupPoolName}",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyContainerGroupPoolsUpdateInput =
  typeof StandbyContainerGroupPoolsUpdateInput.Type;

// Output Schema
export const StandbyContainerGroupPoolsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StandbyContainerGroupPoolResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StandbyContainerGroupPoolsUpdateOutput =
  typeof StandbyContainerGroupPoolsUpdateOutput.Type;

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
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyVirtualMachinePoolRuntimeViewsGetInput =
  typeof StandbyVirtualMachinePoolRuntimeViewsGetInput.Type;

// Output Schema
export const StandbyVirtualMachinePoolRuntimeViewsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(
        () => StandbyVirtualMachinePoolRuntimeViewResourcePropertiesSchema,
      ),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StandbyVirtualMachinePoolRuntimeViewsGetOutput =
  typeof StandbyVirtualMachinePoolRuntimeViewsGetOutput.Type;

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
export const StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/runtimeViews",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolInput =
  typeof StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolInput.Type;

// Output Schema
export const StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => StandbyVirtualMachinePoolRuntimeViewResourceSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOutput =
  typeof StandbyVirtualMachinePoolRuntimeViewsListByStandbyPoolOutput.Type;

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
export const StandbyVirtualMachinePoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => StandbyVirtualMachinePoolResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      apiVersion: "2025-10-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type StandbyVirtualMachinePoolsCreateOrUpdateInput =
  typeof StandbyVirtualMachinePoolsCreateOrUpdateInput.Type;

// Output Schema
export const StandbyVirtualMachinePoolsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StandbyVirtualMachinePoolResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StandbyVirtualMachinePoolsCreateOrUpdateOutput =
  typeof StandbyVirtualMachinePoolsCreateOrUpdateOutput.Type;

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
export const StandbyVirtualMachinePoolsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      apiVersion: "2025-10-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type StandbyVirtualMachinePoolsDeleteInput =
  typeof StandbyVirtualMachinePoolsDeleteInput.Type;

// Output Schema
export const StandbyVirtualMachinePoolsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type StandbyVirtualMachinePoolsDeleteOutput =
  typeof StandbyVirtualMachinePoolsDeleteOutput.Type;

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
export const StandbyVirtualMachinePoolsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyVirtualMachinePoolsGetInput =
  typeof StandbyVirtualMachinePoolsGetInput.Type;

// Output Schema
export const StandbyVirtualMachinePoolsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StandbyVirtualMachinePoolResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StandbyVirtualMachinePoolsGetOutput =
  typeof StandbyVirtualMachinePoolsGetOutput.Type;

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
export const StandbyVirtualMachinePoolsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyVirtualMachinePoolsListByResourceGroupInput =
  typeof StandbyVirtualMachinePoolsListByResourceGroupInput.Type;

// Output Schema
export const StandbyVirtualMachinePoolsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => StandbyVirtualMachinePoolResourceSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type StandbyVirtualMachinePoolsListByResourceGroupOutput =
  typeof StandbyVirtualMachinePoolsListByResourceGroupOutput.Type;

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
export const StandbyVirtualMachinePoolsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyVirtualMachinePoolsListBySubscriptionInput =
  typeof StandbyVirtualMachinePoolsListBySubscriptionInput.Type;

// Output Schema
export const StandbyVirtualMachinePoolsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => StandbyVirtualMachinePoolResourceSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type StandbyVirtualMachinePoolsListBySubscriptionOutput =
  typeof StandbyVirtualMachinePoolsListBySubscriptionOutput.Type;

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
export const StandbyVirtualMachinePoolsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(
        () => StandbyVirtualMachinePoolResourceUpdatePropertiesSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyVirtualMachinePoolsUpdateInput =
  typeof StandbyVirtualMachinePoolsUpdateInput.Type;

// Output Schema
export const StandbyVirtualMachinePoolsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StandbyVirtualMachinePoolResourcePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StandbyVirtualMachinePoolsUpdateOutput =
  typeof StandbyVirtualMachinePoolsUpdateOutput.Type;

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
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyVirtualMachinesGetInput =
  typeof StandbyVirtualMachinesGetInput.Type;

// Output Schema
export const StandbyVirtualMachinesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => StandbyVirtualMachineResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type StandbyVirtualMachinesGetOutput =
  typeof StandbyVirtualMachinesGetOutput.Type;

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
export const StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    standbyVirtualMachinePoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StandbyPool/standbyVirtualMachinePools/{standbyVirtualMachinePoolName}/standbyVirtualMachines",
      apiVersion: "2025-10-01",
    }),
  );
export type StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceInput =
  typeof StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceInput.Type;

// Output Schema
export const StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => StandbyVirtualMachineResourceSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOutput =
  typeof StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceOutput.Type;

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
