/**
 * Azure Manufacturingplatform API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ManufacturingDataServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  mdsResourceName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    version?: string;
    enableCopilot?: boolean;
    enableDiagnosticSettings?: boolean;
    aadApplicationId: string;
    aksAdminGroupId?: string;
    serviceUrl?: string;
    aksProfile?: { id?: string };
    storageProfile?: { id?: string };
    databaseProfile?: { cosmosId?: string };
    adxProfile?: { id?: string; uri?: string; dataIngestionUri?: string };
    redisProfile?: { id?: string };
    monitoringProfile?: { id?: string };
    eventHubProfile?: { adxInstanceId?: string; hostName?: string };
    functionAppProfile?: { id?: string };
    openAIProfile?: {
      id?: string;
      gptModelName?: string;
      gptModelVersion?: string;
      gptModelCapacity?: number;
      gptModelSkuName?: string;
      embeddingModelName?: string;
      embeddingModelVersion?: string;
      embeddingModelSkuName?: string;
      embeddingModelCapacity?: number;
    };
    managedResourceGroupConfiguration?: { name: string; location: string };
    managedOnBehalfOfConfiguration?: { moboBrokerResources: { id: string }[] };
    cmkProfile?: { keyUri: string };
    fabricProfile?: { keyUri: string; oneLakeUri: string; oneLakePath: string };
    userManagedOpenAIProfile?: {
      id: string;
      gptModelDeploymentName: string;
      embeddingModelDeploymentName: string;
      embeddingModelType?: string;
    };
    denyAssignmentExclusions?: { id: string; type: string }[];
    resourceState?: "Active" | "Inactive";
    redundancyState?: "Zonal" | "None";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ManufacturingDataServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mdsResourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        version: Schema.optional(Schema.String),
        enableCopilot: Schema.optional(Schema.Boolean),
        enableDiagnosticSettings: Schema.optional(Schema.Boolean),
        aadApplicationId: Schema.String,
        aksAdminGroupId: Schema.optional(Schema.String),
        serviceUrl: Schema.optional(Schema.String),
        aksProfile: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        storageProfile: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        databaseProfile: Schema.optional(
          Schema.Struct({
            cosmosId: Schema.optional(Schema.String),
          }),
        ),
        adxProfile: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            uri: Schema.optional(Schema.String),
            dataIngestionUri: Schema.optional(Schema.String),
          }),
        ),
        redisProfile: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        monitoringProfile: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        eventHubProfile: Schema.optional(
          Schema.Struct({
            adxInstanceId: Schema.optional(Schema.String),
            hostName: Schema.optional(Schema.String),
          }),
        ),
        functionAppProfile: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        openAIProfile: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            gptModelName: Schema.optional(Schema.String),
            gptModelVersion: Schema.optional(Schema.String),
            gptModelCapacity: Schema.optional(Schema.Number),
            gptModelSkuName: Schema.optional(Schema.String),
            embeddingModelName: Schema.optional(Schema.String),
            embeddingModelVersion: Schema.optional(Schema.String),
            embeddingModelSkuName: Schema.optional(Schema.String),
            embeddingModelCapacity: Schema.optional(Schema.Number),
          }),
        ),
        managedResourceGroupConfiguration: Schema.optional(
          Schema.Struct({
            name: Schema.String,
            location: Schema.String,
          }),
        ),
        managedOnBehalfOfConfiguration: Schema.optional(
          Schema.Struct({
            moboBrokerResources: Schema.Array(
              Schema.Struct({
                id: Schema.String,
              }),
            ),
          }),
        ),
        cmkProfile: Schema.optional(
          Schema.Struct({
            keyUri: Schema.String,
          }),
        ),
        fabricProfile: Schema.optional(
          Schema.Struct({
            keyUri: Schema.String,
            oneLakeUri: Schema.String,
            oneLakePath: Schema.String,
          }),
        ),
        userManagedOpenAIProfile: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            gptModelDeploymentName: Schema.String,
            embeddingModelDeploymentName: Schema.String,
            embeddingModelType: Schema.optional(Schema.String),
          }),
        ),
        denyAssignmentExclusions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        resourceState: Schema.optional(Schema.Literals(["Active", "Inactive"])),
        redundancyState: Schema.optional(Schema.Literals(["Zonal", "None"])),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManufacturingPlatform/manufacturingDataServices/{mdsResourceName}",
      apiVersion: "2025-03-01",
    }),
  ) as unknown as Schema.Codec<ManufacturingDataServicesCreateOrUpdateInput>;

// Output Schema
export interface ManufacturingDataServicesCreateOrUpdateOutput {
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
export const ManufacturingDataServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManufacturingDataServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create a MdsResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mdsResourceName - Name.
 */
export const ManufacturingDataServicesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManufacturingDataServicesCreateOrUpdateInput,
    outputSchema: ManufacturingDataServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManufacturingDataServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  mdsResourceName: string;
}
export const ManufacturingDataServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mdsResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManufacturingPlatform/manufacturingDataServices/{mdsResourceName}",
      apiVersion: "2025-03-01",
    }),
  ) as unknown as Schema.Codec<ManufacturingDataServicesDeleteInput>;

// Output Schema
export type ManufacturingDataServicesDeleteOutput = void;
export const ManufacturingDataServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ManufacturingDataServicesDeleteOutput>;

// The operation
/**
 * Delete a MdsResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mdsResourceName - Name.
 */
export const ManufacturingDataServicesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManufacturingDataServicesDeleteInput,
    outputSchema: ManufacturingDataServicesDeleteOutput,
  }));
// Input Schema
export interface ManufacturingDataServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  mdsResourceName: string;
}
export const ManufacturingDataServicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mdsResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManufacturingPlatform/manufacturingDataServices/{mdsResourceName}",
      apiVersion: "2025-03-01",
    }),
  ) as unknown as Schema.Codec<ManufacturingDataServicesGetInput>;

// Output Schema
export interface ManufacturingDataServicesGetOutput {
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
export const ManufacturingDataServicesGetOutput =
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
  }) as unknown as Schema.Codec<ManufacturingDataServicesGetOutput>;

// The operation
/**
 * Get a MdsResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mdsResourceName - Name.
 */
export const ManufacturingDataServicesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManufacturingDataServicesGetInput,
    outputSchema: ManufacturingDataServicesGetOutput,
  }));
// Input Schema
export interface ManufacturingDataServicesListAvailableVersionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  mdsResourceName: string;
}
export const ManufacturingDataServicesListAvailableVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mdsResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManufacturingPlatform/manufacturingDataServices/{mdsResourceName}/listAvailableVersions",
      apiVersion: "2025-03-01",
    }),
  ) as unknown as Schema.Codec<ManufacturingDataServicesListAvailableVersionsInput>;

// Output Schema
export interface ManufacturingDataServicesListAvailableVersionsOutput {
  versions: {
    version: string;
    isLatest: boolean;
    isPreview: boolean;
    isDeprecated: boolean;
  }[];
}
export const ManufacturingDataServicesListAvailableVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versions: Schema.Array(
      Schema.Struct({
        version: Schema.String,
        isLatest: Schema.Boolean,
        isPreview: Schema.Boolean,
        isDeprecated: Schema.Boolean,
      }),
    ),
  }) as unknown as Schema.Codec<ManufacturingDataServicesListAvailableVersionsOutput>;

// The operation
/**
 * Returns the list of available versions
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mdsResourceName - Name.
 */
export const ManufacturingDataServicesListAvailableVersions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManufacturingDataServicesListAvailableVersionsInput,
    outputSchema: ManufacturingDataServicesListAvailableVersionsOutput,
  }));
// Input Schema
export interface ManufacturingDataServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ManufacturingDataServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManufacturingPlatform/manufacturingDataServices",
      apiVersion: "2025-03-01",
    }),
  ) as unknown as Schema.Codec<ManufacturingDataServicesListByResourceGroupInput>;

// Output Schema
export interface ManufacturingDataServicesListByResourceGroupOutput {
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
export const ManufacturingDataServicesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ManufacturingDataServicesListByResourceGroupOutput>;

// The operation
/**
 * List MdsResource resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ManufacturingDataServicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManufacturingDataServicesListByResourceGroupInput,
    outputSchema: ManufacturingDataServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface ManufacturingDataServicesListBySubscriptionInput {
  subscriptionId: string;
}
export const ManufacturingDataServicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManufacturingPlatform/manufacturingDataServices",
      apiVersion: "2025-03-01",
    }),
  ) as unknown as Schema.Codec<ManufacturingDataServicesListBySubscriptionInput>;

// Output Schema
export interface ManufacturingDataServicesListBySubscriptionOutput {
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
export const ManufacturingDataServicesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ManufacturingDataServicesListBySubscriptionOutput>;

// The operation
/**
 * List MdsResource resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ManufacturingDataServicesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManufacturingDataServicesListBySubscriptionInput,
    outputSchema: ManufacturingDataServicesListBySubscriptionOutput,
  }));
// Input Schema
export interface ManufacturingDataServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  mdsResourceName: string;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  sku?: {
    name?: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  properties?: {
    version?: string;
    enableCopilot?: boolean;
    enableDiagnosticSettings?: boolean;
    openAIProfile?: {
      id?: string;
      gptModelName?: string;
      gptModelVersion?: string;
      gptModelCapacity?: number;
      gptModelSkuName?: string;
      embeddingModelName?: string;
      embeddingModelVersion?: string;
      embeddingModelSkuName?: string;
      embeddingModelCapacity?: number;
    };
    fabricProfile?: {
      keyUri?: string;
      oneLakeUri?: string;
      oneLakePath?: string;
    };
    userManagedOpenAIProfile?: {
      id?: string;
      gptModelDeploymentName?: string;
      embeddingModelDeploymentName?: string;
    };
    denyAssignmentExclusions?: { id: string; type: string }[];
    resourceState?: "Active" | "Inactive";
  };
}
export const ManufacturingDataServicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mdsResourceName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        version: Schema.optional(Schema.String),
        enableCopilot: Schema.optional(Schema.Boolean),
        enableDiagnosticSettings: Schema.optional(Schema.Boolean),
        openAIProfile: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            gptModelName: Schema.optional(Schema.String),
            gptModelVersion: Schema.optional(Schema.String),
            gptModelCapacity: Schema.optional(Schema.Number),
            gptModelSkuName: Schema.optional(Schema.String),
            embeddingModelName: Schema.optional(Schema.String),
            embeddingModelVersion: Schema.optional(Schema.String),
            embeddingModelSkuName: Schema.optional(Schema.String),
            embeddingModelCapacity: Schema.optional(Schema.Number),
          }),
        ),
        fabricProfile: Schema.optional(
          Schema.Struct({
            keyUri: Schema.optional(Schema.String),
            oneLakeUri: Schema.optional(Schema.String),
            oneLakePath: Schema.optional(Schema.String),
          }),
        ),
        userManagedOpenAIProfile: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            gptModelDeploymentName: Schema.optional(Schema.String),
            embeddingModelDeploymentName: Schema.optional(Schema.String),
          }),
        ),
        denyAssignmentExclusions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              type: Schema.String,
            }),
          ),
        ),
        resourceState: Schema.optional(Schema.Literals(["Active", "Inactive"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManufacturingPlatform/manufacturingDataServices/{mdsResourceName}",
      apiVersion: "2025-03-01",
    }),
  ) as unknown as Schema.Codec<ManufacturingDataServicesUpdateInput>;

// Output Schema
export interface ManufacturingDataServicesUpdateOutput {
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
export const ManufacturingDataServicesUpdateOutput =
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
  }) as unknown as Schema.Codec<ManufacturingDataServicesUpdateOutput>;

// The operation
/**
 * Update a MdsResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mdsResourceName - Name.
 */
export const ManufacturingDataServicesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManufacturingDataServicesUpdateInput,
    outputSchema: ManufacturingDataServicesUpdateOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ManufacturingPlatform/operations",
    apiVersion: "2025-03-01",
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
