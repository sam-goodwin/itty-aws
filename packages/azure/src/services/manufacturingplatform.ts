/**
 * Azure Manufacturingplatform API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
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
  );
export type ManufacturingDataServicesCreateOrUpdateInput =
  typeof ManufacturingDataServicesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type ManufacturingDataServicesCreateOrUpdateOutput =
  typeof ManufacturingDataServicesCreateOrUpdateOutput.Type;

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
  );
export type ManufacturingDataServicesDeleteInput =
  typeof ManufacturingDataServicesDeleteInput.Type;

// Output Schema
export const ManufacturingDataServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManufacturingDataServicesDeleteOutput =
  typeof ManufacturingDataServicesDeleteOutput.Type;

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
  );
export type ManufacturingDataServicesGetInput =
  typeof ManufacturingDataServicesGetInput.Type;

// Output Schema
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
  });
export type ManufacturingDataServicesGetOutput =
  typeof ManufacturingDataServicesGetOutput.Type;

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
  );
export type ManufacturingDataServicesListAvailableVersionsInput =
  typeof ManufacturingDataServicesListAvailableVersionsInput.Type;

// Output Schema
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
  });
export type ManufacturingDataServicesListAvailableVersionsOutput =
  typeof ManufacturingDataServicesListAvailableVersionsOutput.Type;

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
  );
export type ManufacturingDataServicesListByResourceGroupInput =
  typeof ManufacturingDataServicesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type ManufacturingDataServicesListByResourceGroupOutput =
  typeof ManufacturingDataServicesListByResourceGroupOutput.Type;

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
export const ManufacturingDataServicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManufacturingPlatform/manufacturingDataServices",
      apiVersion: "2025-03-01",
    }),
  );
export type ManufacturingDataServicesListBySubscriptionInput =
  typeof ManufacturingDataServicesListBySubscriptionInput.Type;

// Output Schema
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
  });
export type ManufacturingDataServicesListBySubscriptionOutput =
  typeof ManufacturingDataServicesListBySubscriptionOutput.Type;

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
  );
export type ManufacturingDataServicesUpdateInput =
  typeof ManufacturingDataServicesUpdateInput.Type;

// Output Schema
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
  });
export type ManufacturingDataServicesUpdateOutput =
  typeof ManufacturingDataServicesUpdateOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ManufacturingPlatform/operations",
    apiVersion: "2025-03-01",
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
