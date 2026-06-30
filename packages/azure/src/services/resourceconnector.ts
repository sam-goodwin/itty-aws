/**
 * Azure Resourceconnector API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AppliancesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    distro?: "AKSEdge";
    infrastructureConfig?: { provider?: "VMWare" | "HCI" | "SCVMM" };
    provisioningState?: string;
    publicKey?: string;
    status?:
      | "WaitingForHeartbeat"
      | "Validating"
      | "Connecting"
      | "Connected"
      | "Running"
      | "PreparingForUpgrade"
      | "ETCDSnapshotFailed"
      | "UpgradePrerequisitesCompleted"
      | "ValidatingSFSConnectivity"
      | "ValidatingImageDownload"
      | "ValidatingImageUpload"
      | "ValidatingETCDHealth"
      | "PreUpgrade"
      | "UpgradingKVAIO"
      | "WaitingForKVAIO"
      | "ImagePending"
      | "ImageProvisioning"
      | "ImageProvisioned"
      | "ImageDownloading"
      | "ImageDownloaded"
      | "ImageDeprovisioning"
      | "ImageUnknown"
      | "UpdatingCloudOperator"
      | "WaitingForCloudOperator"
      | "UpdatingCAPI"
      | "UpdatingCluster"
      | "PostUpgrade"
      | "UpgradeComplete"
      | "UpgradeClusterExtensionFailedToDelete"
      | "UpgradeFailed"
      | "Offline"
      | "None";
    version?: string;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
  tags?: Record<string, string>;
  location: string;
}
export const AppliancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        distro: Schema.optional(Schema.Literals(["AKSEdge"])),
        infrastructureConfig: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(
              Schema.Literals(["VMWare", "HCI", "SCVMM"]),
            ),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
        publicKey: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
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
          ]),
        ),
        version: Schema.optional(Schema.String),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceConnector/appliances/{resourceName}",
      apiVersion: "2022-10-27",
    }),
  ) as unknown as Schema.Codec<AppliancesCreateOrUpdateInput>;

// Output Schema
export interface AppliancesCreateOrUpdateOutput {
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
export const AppliancesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AppliancesCreateOrUpdateOutput>;

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
export interface AppliancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const AppliancesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceConnector/appliances/{resourceName}",
    apiVersion: "2022-10-27",
  }),
) as unknown as Schema.Codec<AppliancesDeleteInput>;

// Output Schema
export type AppliancesDeleteOutput = void;
export const AppliancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AppliancesDeleteOutput>;

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
export interface AppliancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
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
) as unknown as Schema.Codec<AppliancesGetInput>;

// Output Schema
export interface AppliancesGetOutput {
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
export const AppliancesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AppliancesGetOutput>;

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
export interface AppliancesGetTelemetryConfigInput {
  subscriptionId: string;
}
export const AppliancesGetTelemetryConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceConnector/telemetryconfig",
      apiVersion: "2022-10-27",
    }),
  ) as unknown as Schema.Codec<AppliancesGetTelemetryConfigInput>;

// Output Schema
export interface AppliancesGetTelemetryConfigOutput {
  telemetryInstrumentationKey?: string;
}
export const AppliancesGetTelemetryConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    telemetryInstrumentationKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AppliancesGetTelemetryConfigOutput>;

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
export interface AppliancesGetUpgradeGraphInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  upgradeGraph: string;
}
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
  ) as unknown as Schema.Codec<AppliancesGetUpgradeGraphInput>;

// Output Schema
export interface AppliancesGetUpgradeGraphOutput {
  id?: string;
  name?: string;
  properties?: {
    applianceVersion?: string;
    supportedVersions?: {
      metadata?: {
        catalogVersion?: {
          data?: {
            audience?: string;
            catalog?: string;
            offer?: string;
            version?: string;
          };
          name?: string;
          namespace?: string;
        };
      };
      version?: string;
    }[];
  };
}
export const AppliancesGetUpgradeGraphOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        applianceVersion: Schema.optional(Schema.String),
        supportedVersions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              metadata: Schema.optional(
                Schema.Struct({
                  catalogVersion: Schema.optional(
                    Schema.Struct({
                      data: Schema.optional(
                        Schema.Struct({
                          audience: Schema.optional(Schema.String),
                          catalog: Schema.optional(Schema.String),
                          offer: Schema.optional(Schema.String),
                          version: Schema.optional(Schema.String),
                        }),
                      ),
                      name: Schema.optional(Schema.String),
                      namespace: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
              version: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<AppliancesGetUpgradeGraphOutput>;

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
export interface AppliancesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
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
  ) as unknown as Schema.Codec<AppliancesListByResourceGroupInput>;

// Output Schema
export interface AppliancesListByResourceGroupOutput {
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
export const AppliancesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AppliancesListByResourceGroupOutput>;

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
export interface AppliancesListBySubscriptionInput {
  subscriptionId: string;
}
export const AppliancesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceConnector/appliances",
      apiVersion: "2022-10-27",
    }),
  ) as unknown as Schema.Codec<AppliancesListBySubscriptionInput>;

// Output Schema
export interface AppliancesListBySubscriptionOutput {
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
export const AppliancesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AppliancesListBySubscriptionOutput>;

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
export interface AppliancesListClusterUserCredentialInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
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
  ) as unknown as Schema.Codec<AppliancesListClusterUserCredentialInput>;

// Output Schema
export interface AppliancesListClusterUserCredentialOutput {
  hybridConnectionConfig?: {
    expirationTime?: number;
    hybridConnectionName?: string;
    relay?: string;
    token?: string;
  };
  kubeconfigs?: {
    name?: "clusterUser" | "clusterCustomerUser";
    value?: string;
  }[];
}
export const AppliancesListClusterUserCredentialOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hybridConnectionConfig: Schema.optional(
      Schema.Struct({
        expirationTime: Schema.optional(Schema.Number),
        hybridConnectionName: Schema.optional(Schema.String),
        relay: Schema.optional(Schema.String),
        token: Schema.optional(Schema.String),
      }),
    ),
    kubeconfigs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(
            Schema.Literals(["clusterUser", "clusterCustomerUser"]),
          ),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AppliancesListClusterUserCredentialOutput>;

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
export interface AppliancesListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  artifactType?: string;
}
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
  ) as unknown as Schema.Codec<AppliancesListKeysInput>;

// Output Schema
export interface AppliancesListKeysOutput {
  artifactProfiles?: Record<string, { endpoint?: string }>;
  kubeconfigs?: {
    name?: "clusterUser" | "clusterCustomerUser";
    value?: string;
  }[];
  sshKeys?: Record<
    string,
    {
      certificate?: string;
      creationTimeStamp?: number;
      expirationTimeStamp?: number;
      privateKey?: Redacted.Redacted<string>;
      publicKey?: string;
    }
  >;
}
export const AppliancesListKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactProfiles: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          endpoint: Schema.optional(Schema.String),
        }),
      ),
    ),
    kubeconfigs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(
            Schema.Literals(["clusterUser", "clusterCustomerUser"]),
          ),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
    sshKeys: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          certificate: Schema.optional(Schema.String),
          creationTimeStamp: Schema.optional(Schema.Number),
          expirationTimeStamp: Schema.optional(Schema.Number),
          privateKey: Schema.optional(SensitiveOutputString),
          publicKey: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AppliancesListKeysOutput>;

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
export interface AppliancesListOperationsInput {}
export const AppliancesListOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ResourceConnector/operations",
      apiVersion: "2022-10-27",
    }),
  ) as unknown as Schema.Codec<AppliancesListOperationsInput>;

// Output Schema
export interface AppliancesListOperationsOutput {
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
  nextLink?: string;
}
export const AppliancesListOperationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AppliancesListOperationsOutput>;

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
export interface AppliancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
}
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
) as unknown as Schema.Codec<AppliancesUpdateInput>;

// Output Schema
export interface AppliancesUpdateOutput {
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
export const AppliancesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<AppliancesUpdateOutput>;

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
