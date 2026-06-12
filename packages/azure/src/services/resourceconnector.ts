/**
 * Azure Resourceconnector API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Shared schemas
const applianceOperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  display: Schema.optional(
    Schema.suspend(() => applianceOperationValueDisplaySchema),
  ),
  isDataAction: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  origin: Schema.optional(Schema.String),
});
const applianceOperationValueDisplaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    provider: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
  });
const applianceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const appliancePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  distro: Schema.optional(Schema.Literals(["AKSEdge"])),
  infrastructureConfig: Schema.optional(
    Schema.suspend(() => appliancePropertiesInfrastructureConfigSchema),
  ),
  provisioningState: Schema.optional(Schema.String),
  publicKey: Schema.optional(Schema.String),
  status: Schema.optional(Schema.suspend(() => StatusSchema)),
  version: Schema.optional(Schema.String),
});
const appliancePropertiesInfrastructureConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.optional(Schema.suspend(() => ProviderSchema)),
  });
const ProviderSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "VMWare",
  "HCI",
  "SCVMM",
]);
const StatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "WaitingForHeartbeat",
  "Validating",
  "Connecting",
  "Connected",
  "Running",
  "PreparingForUpgrade",
  "ETCDSnapshotFailed",
  "UpgradePrerequisitesCompleted",
  "ValidatingSFSConnectivity",
  "ValidatingImageDownload",
  "ValidatingImageUpload",
  "ValidatingETCDHealth",
  "PreUpgrade",
  "UpgradingKVAIO",
  "WaitingForKVAIO",
  "ImagePending",
  "ImageProvisioning",
  "ImageProvisioned",
  "ImageDownloading",
  "ImageDownloaded",
  "ImageDeprovisioning",
  "ImageUnknown",
  "UpdatingCloudOperator",
  "WaitingForCloudOperator",
  "UpdatingCAPI",
  "UpdatingCluster",
  "PostUpgrade",
  "UpgradeComplete",
  "UpgradeClusterExtensionFailedToDelete",
  "UpgradeFailed",
  "Offline",
  "None",
]);
const IdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => ResourceIdentityTypeSchema)),
});
const ResourceIdentityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SystemAssigned",
  "None",
]);
const HybridConnectionConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  expirationTime: Schema.optional(Schema.Number),
  hybridConnectionName: Schema.optional(Schema.String),
  relay: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
});
const applianceCredentialKubeconfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.suspend(() => AccessProfileTypeSchema)),
    value: Schema.optional(Schema.String),
  });
const AccessProfileTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "clusterUser",
  "clusterCustomerUser",
]);
const ArtifactProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpoint: Schema.optional(Schema.String),
});
const SSHKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certificate: Schema.optional(Schema.String),
  creationTimeStamp: Schema.optional(Schema.Number),
  expirationTimeStamp: Schema.optional(Schema.Number),
  privateKey: Schema.optional(SensitiveOutputString),
  publicKey: Schema.optional(Schema.String),
});
const UpgradeGraphPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applianceVersion: Schema.optional(Schema.String),
  supportedVersions: Schema.optional(
    Schema.Array(Schema.suspend(() => SupportedVersionSchema)),
  ),
});
const SupportedVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(
    Schema.suspend(() => SupportedVersionMetadataSchema),
  ),
  version: Schema.optional(Schema.String),
});
const SupportedVersionMetadataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    catalogVersion: Schema.optional(
      Schema.suspend(() => SupportedVersionCatalogVersionSchema),
    ),
  });
const SupportedVersionCatalogVersionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.suspend(() => SupportedVersionCatalogVersionDataSchema),
    ),
    name: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
  });
const SupportedVersionCatalogVersionDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audience: Schema.optional(Schema.String),
    catalog: Schema.optional(Schema.String),
    offer: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  });

// Input Schema
export const AppliancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => appliancePropertiesSchema),
    ),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceConnector/appliances/{resourceName}",
      apiVersion: "2022-10-27",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AppliancesCreateOrUpdateInput =
  typeof AppliancesCreateOrUpdateInput.Type;

// Output Schema
export const AppliancesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => appliancePropertiesSchema),
    ),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AppliancesCreateOrUpdateOutput =
  typeof AppliancesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an Appliance.
 *
 * Creates or updates an Appliance in the specified Subscription and Resource Group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Appliances name.
 */
export const AppliancesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppliancesCreateOrUpdateInput,
    outputSchema: AppliancesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const AppliancesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceConnector/appliances/{resourceName}",
    apiVersion: "2022-10-27",
    longRunning: { finalStateVia: "azure-async-operation" },
  }),
);
export type AppliancesDeleteInput = typeof AppliancesDeleteInput.Type;

// Output Schema
export const AppliancesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppliancesDeleteOutput = typeof AppliancesDeleteOutput.Type;

// The operation
/**
 * Deletes an Appliance.
 *
 * Deletes an Appliance with the specified Resource Name, Resource Group, and Subscription Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Appliances name.
 */
export const AppliancesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppliancesDeleteInput,
  outputSchema: AppliancesDeleteOutput,
}));
// Input Schema
export const AppliancesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceConnector/appliances/{resourceName}",
    apiVersion: "2022-10-27",
  }),
);
export type AppliancesGetInput = typeof AppliancesGetInput.Type;

// Output Schema
export const AppliancesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => appliancePropertiesSchema)),
  identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type AppliancesGetOutput = typeof AppliancesGetOutput.Type;

// The operation
/**
 * Gets an Appliance.
 *
 * Gets the details of an Appliance with a specified resource group and name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Appliances name.
 */
export const AppliancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppliancesGetInput,
  outputSchema: AppliancesGetOutput,
}));
// Input Schema
export const AppliancesGetTelemetryConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceConnector/telemetryconfig",
      apiVersion: "2022-10-27",
    }),
  );
export type AppliancesGetTelemetryConfigInput =
  typeof AppliancesGetTelemetryConfigInput.Type;

// Output Schema
export const AppliancesGetTelemetryConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    telemetryInstrumentationKey: Schema.optional(Schema.String),
  });
export type AppliancesGetTelemetryConfigOutput =
  typeof AppliancesGetTelemetryConfigOutput.Type;

// The operation
/**
 * Gets the telemetry config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AppliancesGetTelemetryConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppliancesGetTelemetryConfigInput,
    outputSchema: AppliancesGetTelemetryConfigOutput,
  }));
// Input Schema
export const AppliancesGetUpgradeGraphInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    upgradeGraph: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceConnector/appliances/{resourceName}/upgradeGraphs/{upgradeGraph}",
      apiVersion: "2022-10-27",
    }),
  );
export type AppliancesGetUpgradeGraphInput =
  typeof AppliancesGetUpgradeGraphInput.Type;

// Output Schema
export const AppliancesGetUpgradeGraphOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => UpgradeGraphPropertiesSchema),
    ),
  });
export type AppliancesGetUpgradeGraphOutput =
  typeof AppliancesGetUpgradeGraphOutput.Type;

// The operation
/**
 * Gets an Appliance upgrade graph.
 *
 * Gets the upgrade graph of an Appliance with a specified resource group and name and specific release train.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Appliances name.
 * @param upgradeGraph - Upgrade graph version, ex - stable
 */
export const AppliancesGetUpgradeGraph = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppliancesGetUpgradeGraphInput,
    outputSchema: AppliancesGetUpgradeGraphOutput,
  }),
);
// Input Schema
export const AppliancesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceConnector/appliances",
      apiVersion: "2022-10-27",
    }),
  );
export type AppliancesListByResourceGroupInput =
  typeof AppliancesListByResourceGroupInput.Type;

// Output Schema
export const AppliancesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => applianceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AppliancesListByResourceGroupOutput =
  typeof AppliancesListByResourceGroupOutput.Type;

// The operation
/**
 * Gets a list of Appliances in the specified subscription and resource group.
 *
 * Gets a list of Appliances in the specified subscription and resource group. The operation returns properties of each Appliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AppliancesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppliancesListByResourceGroupInput,
    outputSchema: AppliancesListByResourceGroupOutput,
  }));
// Input Schema
export const AppliancesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceConnector/appliances",
      apiVersion: "2022-10-27",
    }),
  );
export type AppliancesListBySubscriptionInput =
  typeof AppliancesListBySubscriptionInput.Type;

// Output Schema
export const AppliancesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => applianceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AppliancesListBySubscriptionOutput =
  typeof AppliancesListBySubscriptionOutput.Type;

// The operation
/**
 * Gets a list of Appliances in a subscription.
 *
 * Gets a list of Appliances in the specified subscription. The operation returns properties of each Appliance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AppliancesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppliancesListBySubscriptionInput,
    outputSchema: AppliancesListBySubscriptionOutput,
  }));
// Input Schema
export const AppliancesListClusterUserCredentialInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceConnector/appliances/{resourceName}/listClusterUserCredential",
      apiVersion: "2022-10-27",
    }),
  );
export type AppliancesListClusterUserCredentialInput =
  typeof AppliancesListClusterUserCredentialInput.Type;

// Output Schema
export const AppliancesListClusterUserCredentialOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hybridConnectionConfig: Schema.optional(
      Schema.suspend(() => HybridConnectionConfigSchema),
    ),
    kubeconfigs: Schema.optional(
      Schema.Array(Schema.suspend(() => applianceCredentialKubeconfigSchema)),
    ),
  });
export type AppliancesListClusterUserCredentialOutput =
  typeof AppliancesListClusterUserCredentialOutput.Type;

// The operation
/**
 * Returns the cluster user credential.
 *
 * Returns the cluster user credentials for the dedicated appliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Appliances name.
 */
export const AppliancesListClusterUserCredential =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppliancesListClusterUserCredentialInput,
    outputSchema: AppliancesListClusterUserCredentialOutput,
  }));
// Input Schema
export const AppliancesListKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    artifactType: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceConnector/appliances/{resourceName}/listkeys",
      apiVersion: "2022-10-27",
    }),
  );
export type AppliancesListKeysInput = typeof AppliancesListKeysInput.Type;

// Output Schema
export const AppliancesListKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactProfiles: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => ArtifactProfileSchema),
      ),
    ),
    kubeconfigs: Schema.optional(
      Schema.Array(Schema.suspend(() => applianceCredentialKubeconfigSchema)),
    ),
    sshKeys: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => SSHKeySchema),
      ),
    ),
  });
export type AppliancesListKeysOutput = typeof AppliancesListKeysOutput.Type;

// The operation
/**
 * Gets the management config.
 *
 * Returns the cluster customer credentials for the dedicated appliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Appliances name.
 * @param artifactType - This sets the type of artifact being returned, when empty no artifact endpoint is returned.
 */
export const AppliancesListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppliancesListKeysInput,
  outputSchema: AppliancesListKeysOutput,
}));
// Input Schema
export const AppliancesListOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ResourceConnector/operations",
      apiVersion: "2022-10-27",
    }),
  );
export type AppliancesListOperationsInput =
  typeof AppliancesListOperationsInput.Type;

// Output Schema
export const AppliancesListOperationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => applianceOperationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AppliancesListOperationsOutput =
  typeof AppliancesListOperationsOutput.Type;

// The operation
/**
 * Lists all available Appliances operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const AppliancesListOperations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppliancesListOperationsInput,
    outputSchema: AppliancesListOperationsOutput,
  }),
);
// Input Schema
export const AppliancesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceConnector/appliances/{resourceName}",
    apiVersion: "2022-10-27",
  }),
);
export type AppliancesUpdateInput = typeof AppliancesUpdateInput.Type;

// Output Schema
export const AppliancesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => appliancePropertiesSchema),
    ),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type AppliancesUpdateOutput = typeof AppliancesUpdateOutput.Type;

// The operation
/**
 * Updates an Appliance.
 *
 * Updates an Appliance with the specified Resource Name in the specified Resource Group and Subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - Appliances name.
 */
export const AppliancesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppliancesUpdateInput,
  outputSchema: AppliancesUpdateOutput,
}));
