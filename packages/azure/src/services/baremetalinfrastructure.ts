/**
 * Azure Baremetalinfrastructure API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AzureBareMetalInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureBareMetalInstanceName: string;
}
export const AzureBareMetalInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureBareMetalInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances/{azureBareMetalInstanceName}",
      apiVersion: "2023-04-06",
    }),
  ) as unknown as Schema.Codec<AzureBareMetalInstancesGetInput>;

// Output Schema
export interface AzureBareMetalInstancesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AzureBareMetalInstancesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureBareMetalInstancesGetOutput>;

// The operation
/**
 * Gets an Azure BareMetal instance.
 *
 * Gets an Azure BareMetal instance for the specified subscription, resource group, and instance name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureBareMetalInstanceName - Name of the Azure BareMetal on Azure instance.
 */
export const AzureBareMetalInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AzureBareMetalInstancesGetInput,
    outputSchema: AzureBareMetalInstancesGetOutput,
  }),
);
// Input Schema
export interface AzureBareMetalInstancesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AzureBareMetalInstancesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances",
      apiVersion: "2023-04-06",
    }),
  ) as unknown as Schema.Codec<AzureBareMetalInstancesListByResourceGroupInput>;

// Output Schema
export interface AzureBareMetalInstancesListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const AzureBareMetalInstancesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureBareMetalInstancesListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of Azure BareMetal instances in the specified subscription and resource group.
 *
 * Gets a list of AzureBareMetal instances in the specified subscription and resource group. The operations returns various properties of each Azure BareMetal instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AzureBareMetalInstancesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureBareMetalInstancesListByResourceGroupInput,
    outputSchema: AzureBareMetalInstancesListByResourceGroupOutput,
  }));
// Input Schema
export interface AzureBareMetalInstancesListBySubscriptionInput {
  subscriptionId: string;
}
export const AzureBareMetalInstancesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances",
      apiVersion: "2023-04-06",
    }),
  ) as unknown as Schema.Codec<AzureBareMetalInstancesListBySubscriptionInput>;

// Output Schema
export interface AzureBareMetalInstancesListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const AzureBareMetalInstancesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureBareMetalInstancesListBySubscriptionOutput>;

// The operation
/**
 * Gets a list of Azure BareMetal instances in the specified subscription.
 *
 * Gets a list of AzureBareMetal instances in the specified subscription. The operations returns various properties of each Azure BareMetal instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AzureBareMetalInstancesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureBareMetalInstancesListBySubscriptionInput,
    outputSchema: AzureBareMetalInstancesListBySubscriptionOutput,
  }));
// Input Schema
export interface AzureBareMetalInstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureBareMetalInstanceName: string;
  tags?: Record<string, string>;
}
export const AzureBareMetalInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureBareMetalInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances/{azureBareMetalInstanceName}",
      apiVersion: "2023-04-06",
    }),
  ) as unknown as Schema.Codec<AzureBareMetalInstancesUpdateInput>;

// Output Schema
export interface AzureBareMetalInstancesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AzureBareMetalInstancesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureBareMetalInstancesUpdateOutput>;

// The operation
/**
 * Patches the Tags field of a Azure BareMetal instance.
 *
 * Patches the Tags field of a Azure BareMetal instance for the specified subscription, resource group, and instance name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureBareMetalInstanceName - Name of the Azure BareMetal on Azure instance.
 */
export const AzureBareMetalInstancesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureBareMetalInstancesUpdateInput,
    outputSchema: AzureBareMetalInstancesUpdateOutput,
  }));
// Input Schema
export interface AzureBareMetalStorageInstancesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureBareMetalStorageInstanceName: string;
  properties?: {
    azureBareMetalStorageInstanceUniqueIdentifier?: string;
    storageProperties?: {
      provisioningState?:
        | "Accepted"
        | "Creating"
        | "Updating"
        | "Failed"
        | "Succeeded"
        | "Deleting"
        | "Canceled"
        | "Migrating";
      offeringType?: string;
      storageType?: string;
      generation?: string;
      hardwareType?: string;
      workloadType?: string;
      storageBillingProperties?: {
        billingMode?: string;
        azureBareMetalStorageInstanceSize?: string;
      };
    };
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
export const AzureBareMetalStorageInstancesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureBareMetalStorageInstanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        azureBareMetalStorageInstanceUniqueIdentifier: Schema.optional(
          Schema.String,
        ),
        storageProperties: Schema.optional(
          Schema.Struct({
            provisioningState: Schema.optional(
              Schema.Literals([
                "Accepted",
                "Creating",
                "Updating",
                "Failed",
                "Succeeded",
                "Deleting",
                "Canceled",
                "Migrating",
              ]),
            ),
            offeringType: Schema.optional(Schema.String),
            storageType: Schema.optional(Schema.String),
            generation: Schema.optional(Schema.String),
            hardwareType: Schema.optional(Schema.String),
            workloadType: Schema.optional(Schema.String),
            storageBillingProperties: Schema.optional(
              Schema.Struct({
                billingMode: Schema.optional(Schema.String),
                azureBareMetalStorageInstanceSize: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
          }),
        ),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalStorageInstances/{azureBareMetalStorageInstanceName}",
      apiVersion: "2023-04-06",
    }),
  ) as unknown as Schema.Codec<AzureBareMetalStorageInstancesCreateInput>;

// Output Schema
export interface AzureBareMetalStorageInstancesCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AzureBareMetalStorageInstancesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureBareMetalStorageInstancesCreateOutput>;

// The operation
/**
 * Create an azure baremetal storage resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param azureBareMetalStorageInstanceName - Name of the AzureBareMetalStorage on Azure instance.
 */
export const AzureBareMetalStorageInstancesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureBareMetalStorageInstancesCreateInput,
    outputSchema: AzureBareMetalStorageInstancesCreateOutput,
  }));
// Input Schema
export interface AzureBareMetalStorageInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureBareMetalStorageInstanceName: string;
}
export const AzureBareMetalStorageInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureBareMetalStorageInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalStorageInstances/{azureBareMetalStorageInstanceName}",
      apiVersion: "2023-04-06",
    }),
  ) as unknown as Schema.Codec<AzureBareMetalStorageInstancesDeleteInput>;

// Output Schema
export type AzureBareMetalStorageInstancesDeleteOutput = void;
export const AzureBareMetalStorageInstancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AzureBareMetalStorageInstancesDeleteOutput>;

// The operation
/**
 * Delete an AzureBareMetalStorageInstance.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureBareMetalStorageInstanceName - Name of the AzureBareMetalStorage on Azure instance.
 * @param api-version - The API version to use for this operation.
 */
export const AzureBareMetalStorageInstancesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureBareMetalStorageInstancesDeleteInput,
    outputSchema: AzureBareMetalStorageInstancesDeleteOutput,
  }));
// Input Schema
export interface AzureBareMetalStorageInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureBareMetalStorageInstanceName: string;
}
export const AzureBareMetalStorageInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureBareMetalStorageInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalStorageInstances/{azureBareMetalStorageInstanceName}",
      apiVersion: "2023-04-06",
    }),
  ) as unknown as Schema.Codec<AzureBareMetalStorageInstancesGetInput>;

// Output Schema
export interface AzureBareMetalStorageInstancesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AzureBareMetalStorageInstancesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureBareMetalStorageInstancesGetOutput>;

// The operation
/**
 * Gets an Azure BareMetal Storage instance.
 *
 * Gets an Azure BareMetal Storage instance for the specified subscription, resource group, and instance name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureBareMetalStorageInstanceName - Name of the AzureBareMetalStorage on Azure instance.
 */
export const AzureBareMetalStorageInstancesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureBareMetalStorageInstancesGetInput,
    outputSchema: AzureBareMetalStorageInstancesGetOutput,
  }));
// Input Schema
export interface AzureBareMetalStorageInstancesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AzureBareMetalStorageInstancesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalStorageInstances",
      apiVersion: "2023-04-06",
    }),
  ) as unknown as Schema.Codec<AzureBareMetalStorageInstancesListByResourceGroupInput>;

// Output Schema
export interface AzureBareMetalStorageInstancesListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const AzureBareMetalStorageInstancesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureBareMetalStorageInstancesListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of Azure BareMetalStorage instances in the specified subscription and resource group.
 *
 * Gets a list of AzureBareMetalStorage instances in the specified subscription and resource group. The operations returns various properties of each Azure BareMetal instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AzureBareMetalStorageInstancesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureBareMetalStorageInstancesListByResourceGroupInput,
    outputSchema: AzureBareMetalStorageInstancesListByResourceGroupOutput,
  }));
// Input Schema
export interface AzureBareMetalStorageInstancesListBySubscriptionInput {
  subscriptionId: string;
}
export const AzureBareMetalStorageInstancesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.BareMetalInfrastructure/bareMetalStorageInstances",
      apiVersion: "2023-04-06",
    }),
  ) as unknown as Schema.Codec<AzureBareMetalStorageInstancesListBySubscriptionInput>;

// Output Schema
export interface AzureBareMetalStorageInstancesListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const AzureBareMetalStorageInstancesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureBareMetalStorageInstancesListBySubscriptionOutput>;

// The operation
/**
 * Gets a list of Azure BareMetalStorage instances in the specified subscription.
 *
 * Gets a list of AzureBareMetalStorage instances in the specified subscription. The operations returns various properties of each Azure BareMetal instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AzureBareMetalStorageInstancesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureBareMetalStorageInstancesListBySubscriptionInput,
    outputSchema: AzureBareMetalStorageInstancesListBySubscriptionOutput,
  }));
// Input Schema
export interface AzureBareMetalStorageInstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureBareMetalStorageInstanceName: string;
  tags?: Record<string, string>;
}
export const AzureBareMetalStorageInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureBareMetalStorageInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalStorageInstances/{azureBareMetalStorageInstanceName}",
      apiVersion: "2023-04-06",
    }),
  ) as unknown as Schema.Codec<AzureBareMetalStorageInstancesUpdateInput>;

// Output Schema
export interface AzureBareMetalStorageInstancesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AzureBareMetalStorageInstancesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureBareMetalStorageInstancesUpdateOutput>;

// The operation
/**
 * Patches the Tags field of a Azure BareMetalStorage instance.
 *
 * Patches the Tags field of a Azure BareMetalStorage instance for the specified subscription, resource group, and instance name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param azureBareMetalStorageInstanceName - Name of the AzureBareMetalStorage on Azure instance.
 */
export const AzureBareMetalStorageInstancesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureBareMetalStorageInstancesUpdateInput,
    outputSchema: AzureBareMetalStorageInstancesUpdateOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.BareMetalInfrastructure/operations",
    apiVersion: "2023-04-06",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    isDataAction?: boolean;
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        isDataAction: Schema.optional(Schema.Boolean),
      }),
    ),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Gets a list of AzureBareMetal management operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
