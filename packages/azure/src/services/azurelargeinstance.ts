/**
 * Azure Azurelargeinstance API
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
const AzureLargeInstanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const AzureLargeStorageInstanceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const AzureLargeInstancePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hardwareProfile: Schema.optional(
      Schema.suspend(() => HardwareProfileSchema),
    ),
    storageProfile: Schema.optional(Schema.suspend(() => StorageProfileSchema)),
    osProfile: Schema.optional(Schema.suspend(() => OsProfileSchema)),
    networkProfile: Schema.optional(Schema.suspend(() => NetworkProfileSchema)),
    azureLargeInstanceId: Schema.optional(Schema.String),
    powerState: Schema.optional(
      Schema.suspend(() => AzureLargeInstancePowerStateEnumSchema),
    ),
    proximityPlacementGroup: Schema.optional(Schema.String),
    hwRevision: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => AzureLargeInstanceProvisioningStatesEnumSchema),
    ),
  });
const HardwareProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hardwareType: Schema.optional(
    Schema.suspend(() => AzureLargeInstanceHardwareTypeNamesEnumSchema),
  ),
  azureLargeInstanceSize: Schema.optional(
    Schema.suspend(() => AzureLargeInstanceSizeNamesEnumSchema),
  ),
});
const AzureLargeInstanceHardwareTypeNamesEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Cisco_UCS", "HPE", "SDFLEX"]);
const AzureLargeInstanceSizeNamesEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "S72m",
    "S144m",
    "S72",
    "S144",
    "S192",
    "S192m",
    "S192xm",
    "S96",
    "S112",
    "S224",
    "S224m",
    "S224om",
    "S224oo",
    "S224oom",
    "S224ooo",
    "S224se",
    "S384",
    "S384m",
    "S384xm",
    "S384xxm",
    "S448",
    "S448m",
    "S448om",
    "S448oo",
    "S448oom",
    "S448ooo",
    "S448se",
    "S576m",
    "S576xm",
    "S672",
    "S672m",
    "S672om",
    "S672oo",
    "S672oom",
    "S672ooo",
    "S768",
    "S768m",
    "S768xm",
    "S896",
    "S896m",
    "S896om",
    "S896oo",
    "S896oom",
    "S896ooo",
    "S960m",
  ]);
const StorageProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nfsIpAddress: Schema.optional(Schema.String),
  osDisks: Schema.optional(Schema.Array(Schema.suspend(() => DiskSchema))),
});
const DiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  diskSizeGB: Schema.optional(Schema.Number),
  lun: Schema.optional(Schema.Number),
});
const OsProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  computerName: Schema.optional(Schema.String),
  osType: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  sshPublicKey: Schema.optional(Schema.String),
});
const NetworkProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  networkInterfaces: Schema.optional(
    Schema.Array(Schema.suspend(() => IpAddressSchema)),
  ),
  circuitId: Schema.optional(Schema.String),
});
const IpAddressSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ipAddress: Schema.optional(Schema.String),
});
const AzureLargeInstancePowerStateEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "starting",
    "started",
    "stopping",
    "stopped",
    "restarting",
    "unknown",
  ]);
const AzureLargeInstanceProvisioningStatesEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Accepted",
    "Creating",
    "Updating",
    "Failed",
    "Succeeded",
    "Deleting",
    "Migrating",
    "Canceled",
  ]);
const AzureLargeInstanceForcePowerStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["active", "inactive"]);
const OperationStatusResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.String,
  percentComplete: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  operations: Schema.optional(Schema.Array(Schema.Unknown)),
  error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
});
const ErrorDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
  additionalInfo: Schema.optional(
    Schema.Array(Schema.suspend(() => ErrorAdditionalInfoSchema)),
  ),
});
const ErrorAdditionalInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  info: Schema.optional(Schema.Unknown),
});
const AzureLargeStorageInstancePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    azureLargeStorageInstanceUniqueIdentifier: Schema.optional(Schema.String),
    storageProperties: Schema.optional(
      Schema.suspend(() => StoragePropertiesSchema),
    ),
  });
const StoragePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  offeringType: Schema.optional(Schema.String),
  storageType: Schema.optional(Schema.String),
  generation: Schema.optional(Schema.String),
  hardwareType: Schema.optional(
    Schema.suspend(() => AzureLargeInstanceHardwareTypeNamesEnumSchema),
  ),
  workloadType: Schema.optional(Schema.String),
  storageBillingProperties: Schema.optional(
    Schema.suspend(() => StorageBillingPropertiesSchema),
  ),
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Accepted",
  "Creating",
  "Updating",
  "Failed",
  "Succeeded",
  "Deleting",
  "Canceled",
  "Migrating",
]);
const StorageBillingPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingMode: Schema.optional(Schema.String),
    sku: Schema.optional(Schema.String),
  });

// Input Schema
export const AzureLargeInstanceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureLargeInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}",
      apiVersion: "2024-04-10",
    }),
  );
export type AzureLargeInstanceGetInput = typeof AzureLargeInstanceGetInput.Type;

// Output Schema
export const AzureLargeInstanceGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AzureLargeInstancePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AzureLargeInstanceGetOutput =
  typeof AzureLargeInstanceGetOutput.Type;

// The operation
/**
 * Gets an Azure Large Instance for the specified subscription, resource group,
 * and instance name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureLargeInstanceName - Name of the AzureLargeInstance.
 */
export const AzureLargeInstanceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AzureLargeInstanceGetInput,
    outputSchema: AzureLargeInstanceGetOutput,
  }),
);
// Input Schema
export const AzureLargeInstanceListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances",
      apiVersion: "2024-04-10",
    }),
  );
export type AzureLargeInstanceListByResourceGroupInput =
  typeof AzureLargeInstanceListByResourceGroupInput.Type;

// Output Schema
export const AzureLargeInstanceListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AzureLargeInstanceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AzureLargeInstanceListByResourceGroupOutput =
  typeof AzureLargeInstanceListByResourceGroupOutput.Type;

// The operation
/**
 * Gets a list of Azure Large Instances in the specified subscription and resource
 * group. The operations returns various properties of each Azure Large Instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AzureLargeInstanceListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureLargeInstanceListByResourceGroupInput,
    outputSchema: AzureLargeInstanceListByResourceGroupOutput,
  }));
// Input Schema
export const AzureLargeInstanceListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureLargeInstance/azureLargeInstances",
      apiVersion: "2024-04-10",
    }),
  );
export type AzureLargeInstanceListBySubscriptionInput =
  typeof AzureLargeInstanceListBySubscriptionInput.Type;

// Output Schema
export const AzureLargeInstanceListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AzureLargeInstanceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AzureLargeInstanceListBySubscriptionOutput =
  typeof AzureLargeInstanceListBySubscriptionOutput.Type;

// The operation
/**
 * Gets a list of Azure Large Instances in the specified subscription. The
 * operations returns various properties of each Azure Large Instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AzureLargeInstanceListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureLargeInstanceListBySubscriptionInput,
    outputSchema: AzureLargeInstanceListBySubscriptionOutput,
  }));
// Input Schema
export const AzureLargeInstanceRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureLargeInstanceName: Schema.String.pipe(T.PathParam()),
    forceState: Schema.optional(
      Schema.suspend(() => AzureLargeInstanceForcePowerStateSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/restart",
      apiVersion: "2024-04-10",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AzureLargeInstanceRestartInput =
  typeof AzureLargeInstanceRestartInput.Type;

// Output Schema
export const AzureLargeInstanceRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(Schema.suspend(() => OperationStatusResultSchema)),
    ),
    error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
  });
export type AzureLargeInstanceRestartOutput =
  typeof AzureLargeInstanceRestartOutput.Type;

// The operation
/**
 * The operation to restart an Azure Large Instance (only for compute instances)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureLargeInstanceName - Name of the AzureLargeInstance.
 */
export const AzureLargeInstanceRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AzureLargeInstanceRestartInput,
    outputSchema: AzureLargeInstanceRestartOutput,
  }),
);
// Input Schema
export const AzureLargeInstanceShutdownInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureLargeInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/shutdown",
      apiVersion: "2024-04-10",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AzureLargeInstanceShutdownInput =
  typeof AzureLargeInstanceShutdownInput.Type;

// Output Schema
export const AzureLargeInstanceShutdownOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(Schema.suspend(() => OperationStatusResultSchema)),
    ),
    error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
  });
export type AzureLargeInstanceShutdownOutput =
  typeof AzureLargeInstanceShutdownOutput.Type;

// The operation
/**
 * The operation to shutdown an Azure Large Instance (only for compute instances)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureLargeInstanceName - Name of the AzureLargeInstance.
 */
export const AzureLargeInstanceShutdown = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AzureLargeInstanceShutdownInput,
    outputSchema: AzureLargeInstanceShutdownOutput,
  }),
);
// Input Schema
export const AzureLargeInstanceStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureLargeInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}/start",
      apiVersion: "2024-04-10",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AzureLargeInstanceStartInput =
  typeof AzureLargeInstanceStartInput.Type;

// Output Schema
export const AzureLargeInstanceStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(Schema.suspend(() => OperationStatusResultSchema)),
    ),
    error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
  });
export type AzureLargeInstanceStartOutput =
  typeof AzureLargeInstanceStartOutput.Type;

// The operation
/**
 * The operation to start an Azure Large Instance (only for compute instances)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureLargeInstanceName - Name of the AzureLargeInstance.
 */
export const AzureLargeInstanceStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AzureLargeInstanceStartInput,
    outputSchema: AzureLargeInstanceStartOutput,
  }),
);
// Input Schema
export const AzureLargeInstanceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureLargeInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeInstances/{azureLargeInstanceName}",
      apiVersion: "2024-04-10",
    }),
  );
export type AzureLargeInstanceUpdateInput =
  typeof AzureLargeInstanceUpdateInput.Type;

// Output Schema
export const AzureLargeInstanceUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AzureLargeInstancePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AzureLargeInstanceUpdateOutput =
  typeof AzureLargeInstanceUpdateOutput.Type;

// The operation
/**
 * Patches the Tags field of an Azure Large Instance for the specified
 * subscription, resource group, and instance name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureLargeInstanceName - Name of the AzureLargeInstance.
 */
export const AzureLargeInstanceUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AzureLargeInstanceUpdateInput,
    outputSchema: AzureLargeInstanceUpdateOutput,
  }),
);
// Input Schema
export const AzureLargeStorageInstanceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureLargeStorageInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances/{azureLargeStorageInstanceName}",
      apiVersion: "2024-04-10",
    }),
  );
export type AzureLargeStorageInstanceGetInput =
  typeof AzureLargeStorageInstanceGetInput.Type;

// Output Schema
export const AzureLargeStorageInstanceGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AzureLargeStorageInstancePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AzureLargeStorageInstanceGetOutput =
  typeof AzureLargeStorageInstanceGetOutput.Type;

// The operation
/**
 * Gets an Azure Large Storage instance for the specified subscription, resource
 * group, and instance name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureLargeStorageInstanceName - Name of the AzureLargeStorageInstance.
 */
export const AzureLargeStorageInstanceGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureLargeStorageInstanceGetInput,
    outputSchema: AzureLargeStorageInstanceGetOutput,
  }));
// Input Schema
export const AzureLargeStorageInstanceListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances",
      apiVersion: "2024-04-10",
    }),
  );
export type AzureLargeStorageInstanceListByResourceGroupInput =
  typeof AzureLargeStorageInstanceListByResourceGroupInput.Type;

// Output Schema
export const AzureLargeStorageInstanceListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AzureLargeStorageInstanceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AzureLargeStorageInstanceListByResourceGroupOutput =
  typeof AzureLargeStorageInstanceListByResourceGroupOutput.Type;

// The operation
/**
 * Gets a list of AzureLargeStorageInstances in the specified subscription and
 * resource group. The operations returns various properties of each Azure
 * LargeStorage instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AzureLargeStorageInstanceListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureLargeStorageInstanceListByResourceGroupInput,
    outputSchema: AzureLargeStorageInstanceListByResourceGroupOutput,
  }));
// Input Schema
export const AzureLargeStorageInstanceListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances",
      apiVersion: "2024-04-10",
    }),
  );
export type AzureLargeStorageInstanceListBySubscriptionInput =
  typeof AzureLargeStorageInstanceListBySubscriptionInput.Type;

// Output Schema
export const AzureLargeStorageInstanceListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AzureLargeStorageInstanceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AzureLargeStorageInstanceListBySubscriptionOutput =
  typeof AzureLargeStorageInstanceListBySubscriptionOutput.Type;

// The operation
/**
 * Gets a list of AzureLargeStorageInstances in the specified subscription. The
 * operations returns various properties of each Azure LargeStorage instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AzureLargeStorageInstanceListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureLargeStorageInstanceListBySubscriptionInput,
    outputSchema: AzureLargeStorageInstanceListBySubscriptionOutput,
  }));
// Input Schema
export const AzureLargeStorageInstanceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureLargeStorageInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances/{azureLargeStorageInstanceName}",
      apiVersion: "2024-04-10",
    }),
  );
export type AzureLargeStorageInstanceUpdateInput =
  typeof AzureLargeStorageInstanceUpdateInput.Type;

// Output Schema
export const AzureLargeStorageInstanceUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AzureLargeStorageInstancePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AzureLargeStorageInstanceUpdateOutput =
  typeof AzureLargeStorageInstanceUpdateOutput.Type;

// The operation
/**
 * Patches the Tags field of a Azure Large Storage Instance for the specified
 * subscription, resource group, and instance name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureLargeStorageInstanceName - Name of the AzureLargeStorageInstance.
 */
export const AzureLargeStorageInstanceUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureLargeStorageInstanceUpdateInput,
    outputSchema: AzureLargeStorageInstanceUpdateOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AzureLargeInstance/operations",
    apiVersion: "2024-04-10",
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
