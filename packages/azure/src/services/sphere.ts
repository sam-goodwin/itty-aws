/**
 * Azure Sphere API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CatalogsCountDevicesInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
}
export const CatalogsCountDevicesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/countDevices",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CatalogsCountDevicesInput>;

// Output Schema
export interface CatalogsCountDevicesOutput {
  value: number;
}
export const CatalogsCountDevicesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Number,
  }) as unknown as Schema.Codec<CatalogsCountDevicesOutput>;

// The operation
/**
 * Counts devices in catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 */
export const CatalogsCountDevices = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsCountDevicesInput,
  outputSchema: CatalogsCountDevicesOutput,
}));
// Input Schema
export interface CatalogsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  properties?: {
    tenantId?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
  tags?: Record<string, string>;
  location: string;
}
export const CatalogsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
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
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CatalogsCreateOrUpdateInput>;

// Output Schema
export interface CatalogsCreateOrUpdateOutput {
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
export const CatalogsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CatalogsCreateOrUpdateOutput>;

// The operation
/**
 * Create a Catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 */
export const CatalogsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsCreateOrUpdateInput,
  outputSchema: CatalogsCreateOrUpdateOutput,
}));
// Input Schema
export interface CatalogsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
}
export const CatalogsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<CatalogsDeleteInput>;

// Output Schema
export type CatalogsDeleteOutput = void;
export const CatalogsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CatalogsDeleteOutput>;

// The operation
/**
 * Delete a Catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 */
export const CatalogsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsDeleteInput,
  outputSchema: CatalogsDeleteOutput,
}));
// Input Schema
export interface CatalogsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
}
export const CatalogsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<CatalogsGetInput>;

// Output Schema
export interface CatalogsGetOutput {
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
export const CatalogsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CatalogsGetOutput>;

// The operation
/**
 * Get a Catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 */
export const CatalogsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsGetInput,
  outputSchema: CatalogsGetOutput,
}));
// Input Schema
export interface CatalogsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CatalogsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CatalogsListByResourceGroupInput>;

// Output Schema
export interface CatalogsListByResourceGroupOutput {
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
export const CatalogsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CatalogsListByResourceGroupOutput>;

// The operation
/**
 * List Catalog resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CatalogsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsListByResourceGroupInput,
  outputSchema: CatalogsListByResourceGroupOutput,
}));
// Input Schema
export interface CatalogsListBySubscriptionInput {
  subscriptionId: string;
}
export const CatalogsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureSphere/catalogs",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CatalogsListBySubscriptionInput>;

// Output Schema
export interface CatalogsListBySubscriptionOutput {
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
export const CatalogsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CatalogsListBySubscriptionOutput>;

// The operation
/**
 * List Catalog resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CatalogsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsListBySubscriptionInput,
  outputSchema: CatalogsListBySubscriptionOutput,
}));
// Input Schema
export interface CatalogsListDeploymentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $maxpagesize?: number;
}
export const CatalogsListDeploymentsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $maxpagesize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeployments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CatalogsListDeploymentsInput>;

// Output Schema
export interface CatalogsListDeploymentsOutput {
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
export const CatalogsListDeploymentsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CatalogsListDeploymentsOutput>;

// The operation
/**
 * Lists deployments for catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter the result list using the given expression
 * @param $top - The number of result items to return.
 * @param $skip - The number of result items to skip.
 * @param $maxpagesize - The maximum number of result items per page.
 * @param catalogName - Name of catalog
 */
export const CatalogsListDeployments = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsListDeploymentsInput,
  outputSchema: CatalogsListDeploymentsOutput,
}));
// Input Schema
export interface CatalogsListDeviceGroupsInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $maxpagesize?: number;
  deviceGroupName?: string;
}
export const CatalogsListDeviceGroupsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $maxpagesize: Schema.optional(Schema.Number),
    deviceGroupName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceGroups",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CatalogsListDeviceGroupsInput>;

// Output Schema
export interface CatalogsListDeviceGroupsOutput {
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
export const CatalogsListDeviceGroupsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CatalogsListDeviceGroupsOutput>;

// The operation
/**
 * List the device groups for the catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter the result list using the given expression
 * @param $top - The number of result items to return.
 * @param $skip - The number of result items to skip.
 * @param $maxpagesize - The maximum number of result items per page.
 * @param catalogName - Name of catalog
 */
export const CatalogsListDeviceGroups = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsListDeviceGroupsInput,
  outputSchema: CatalogsListDeviceGroupsOutput,
}));
// Input Schema
export interface CatalogsListDeviceInsightsInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $maxpagesize?: number;
}
export const CatalogsListDeviceInsightsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $maxpagesize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceInsights",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CatalogsListDeviceInsightsInput>;

// Output Schema
export interface CatalogsListDeviceInsightsOutput {
  value: {
    deviceId: string;
    description: string;
    startTimestampUtc: string;
    endTimestampUtc: string;
    eventCategory: string;
    eventClass: string;
    eventType: string;
    eventCount: number;
  }[];
  nextLink?: string;
}
export const CatalogsListDeviceInsightsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        deviceId: Schema.String,
        description: Schema.String,
        startTimestampUtc: Schema.String,
        endTimestampUtc: Schema.String,
        eventCategory: Schema.String,
        eventClass: Schema.String,
        eventType: Schema.String,
        eventCount: Schema.Number,
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CatalogsListDeviceInsightsOutput>;

// The operation
/**
 * Lists device insights for catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter the result list using the given expression
 * @param $top - The number of result items to return.
 * @param $skip - The number of result items to skip.
 * @param $maxpagesize - The maximum number of result items per page.
 * @param catalogName - Name of catalog
 */
export const CatalogsListDeviceInsights = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsListDeviceInsightsInput,
  outputSchema: CatalogsListDeviceInsightsOutput,
}));
// Input Schema
export interface CatalogsListDevicesInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $maxpagesize?: number;
}
export const CatalogsListDevicesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $maxpagesize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDevices",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CatalogsListDevicesInput>;

// Output Schema
export interface CatalogsListDevicesOutput {
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
export const CatalogsListDevicesOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CatalogsListDevicesOutput>;

// The operation
/**
 * Lists devices for catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter the result list using the given expression
 * @param $top - The number of result items to return.
 * @param $skip - The number of result items to skip.
 * @param $maxpagesize - The maximum number of result items per page.
 * @param catalogName - Name of catalog
 */
export const CatalogsListDevices = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsListDevicesInput,
  outputSchema: CatalogsListDevicesOutput,
}));
// Input Schema
export interface CatalogsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  tags?: Record<string, string>;
}
export const CatalogsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<CatalogsUpdateInput>;

// Output Schema
export interface CatalogsUpdateOutput {
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
export const CatalogsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CatalogsUpdateOutput>;

// The operation
/**
 * Update a Catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 */
export const CatalogsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsUpdateInput,
  outputSchema: CatalogsUpdateOutput,
}));
// Input Schema
export interface CatalogsUploadImageInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  properties?: {
    image?: string;
    imageId?: string;
    imageName?: string;
    regionalDataBoundary?: "None" | "EU";
    uri?: string;
    description?: string;
    componentId?: string;
    imageType?:
      | "InvalidImageType"
      | "OneBl"
      | "PlutonRuntime"
      | "WifiFirmware"
      | "SecurityMonitor"
      | "NormalWorldLoader"
      | "NormalWorldDtb"
      | "NormalWorldKernel"
      | "RootFs"
      | "Services"
      | "Applications"
      | "FwConfig"
      | "BootManifest"
      | "Nwfs"
      | "TrustedKeystore"
      | "Policy"
      | "CustomerBoardConfig"
      | "UpdateCertStore"
      | "BaseSystemUpdateManifest"
      | "FirmwareUpdateManifest"
      | "CustomerUpdateManifest"
      | "RecoveryManifest"
      | "ManifestSet"
      | "Other";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
}
export const CatalogsUploadImageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        image: Schema.optional(Schema.String),
        imageId: Schema.optional(Schema.String),
        imageName: Schema.optional(Schema.String),
        regionalDataBoundary: Schema.optional(Schema.Literals(["None", "EU"])),
        uri: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        componentId: Schema.optional(Schema.String),
        imageType: Schema.optional(
          Schema.Literals([
            "InvalidImageType",
            "OneBl",
            "PlutonRuntime",
            "WifiFirmware",
            "SecurityMonitor",
            "NormalWorldLoader",
            "NormalWorldDtb",
            "NormalWorldKernel",
            "RootFs",
            "Services",
            "Applications",
            "FwConfig",
            "BootManifest",
            "Nwfs",
            "TrustedKeystore",
            "Policy",
            "CustomerBoardConfig",
            "UpdateCertStore",
            "BaseSystemUpdateManifest",
            "FirmwareUpdateManifest",
            "CustomerUpdateManifest",
            "RecoveryManifest",
            "ManifestSet",
            "Other",
          ]),
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
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/uploadImage",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CatalogsUploadImageInput>;

// Output Schema
export type CatalogsUploadImageOutput = void;
export const CatalogsUploadImageOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CatalogsUploadImageOutput>;

// The operation
/**
 * Creates an image. Use this action when the image ID is unknown.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 */
export const CatalogsUploadImage = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsUploadImageInput,
  outputSchema: CatalogsUploadImageOutput,
}));
// Input Schema
export interface CertificatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  serialNumber: string;
}
export const CertificatesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  serialNumber: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<CertificatesGetInput>;

// Output Schema
export interface CertificatesGetOutput {
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
export const CertificatesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CertificatesGetOutput>;

// The operation
/**
 * Get a Certificate
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param serialNumber - Serial number of the certificate. Use '.default' to get current active certificate.
 */
export const CertificatesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesGetInput,
  outputSchema: CertificatesGetOutput,
}));
// Input Schema
export interface CertificatesListByCatalogInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $maxpagesize?: number;
}
export const CertificatesListByCatalogInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $maxpagesize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CertificatesListByCatalogInput>;

// Output Schema
export interface CertificatesListByCatalogOutput {
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
export const CertificatesListByCatalogOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CertificatesListByCatalogOutput>;

// The operation
/**
 * List Certificate resources by Catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter the result list using the given expression
 * @param $top - The number of result items to return.
 * @param $skip - The number of result items to skip.
 * @param $maxpagesize - The maximum number of result items per page.
 * @param catalogName - Name of catalog
 */
export const CertificatesListByCatalog = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesListByCatalogInput,
  outputSchema: CertificatesListByCatalogOutput,
}));
// Input Schema
export interface CertificatesRetrieveCertChainInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  serialNumber: string;
}
export const CertificatesRetrieveCertChainInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    serialNumber: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveCertChain",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CertificatesRetrieveCertChainInput>;

// Output Schema
export interface CertificatesRetrieveCertChainOutput {
  certificateChain?: string;
}
export const CertificatesRetrieveCertChainOutput =
  /*@__PURE__*/ Schema.Struct({
    certificateChain: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CertificatesRetrieveCertChainOutput>;

// The operation
/**
 * Retrieves cert chain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param serialNumber - Serial number of the certificate. Use '.default' to get current active certificate.
 */
export const CertificatesRetrieveCertChain =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CertificatesRetrieveCertChainInput,
    outputSchema: CertificatesRetrieveCertChainOutput,
  }));
// Input Schema
export interface CertificatesRetrieveProofOfPossessionNonceInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  serialNumber: string;
  proofOfPossessionNonce: string;
}
export const CertificatesRetrieveProofOfPossessionNonceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    serialNumber: Schema.String.pipe(T.PathParam()),
    proofOfPossessionNonce: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveProofOfPossessionNonce",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CertificatesRetrieveProofOfPossessionNonceInput>;

// Output Schema
export interface CertificatesRetrieveProofOfPossessionNonceOutput {
  certificate?: string;
  status?: "Active" | "Inactive" | "Expired" | "Revoked";
  subject?: string;
  thumbprint?: string;
  expiryUtc?: string;
  notBeforeUtc?: string;
  provisioningState?:
    | "Succeeded"
    | "Failed"
    | "Canceled"
    | "Provisioning"
    | "Updating"
    | "Deleting"
    | "Accepted";
}
export const CertificatesRetrieveProofOfPossessionNonceOutput =
  /*@__PURE__*/ Schema.Struct({
    certificate: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["Active", "Inactive", "Expired", "Revoked"]),
    ),
    subject: Schema.optional(Schema.String),
    thumbprint: Schema.optional(Schema.String),
    expiryUtc: Schema.optional(Schema.String),
    notBeforeUtc: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<CertificatesRetrieveProofOfPossessionNonceOutput>;

// The operation
/**
 * Gets the proof of possession nonce.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param serialNumber - Serial number of the certificate. Use '.default' to get current active certificate.
 */
export const CertificatesRetrieveProofOfPossessionNonce =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CertificatesRetrieveProofOfPossessionNonceInput,
    outputSchema: CertificatesRetrieveProofOfPossessionNonceOutput,
  }));
// Input Schema
export interface DeploymentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  deploymentName: string;
  properties?: {
    deploymentId?: string;
    deployedImages?: {
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
    deploymentDateUtc?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
}
export const DeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceGroupName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        deploymentId: Schema.optional(Schema.String),
        deployedImages: Schema.optional(
          Schema.Array(
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
        ),
        deploymentDateUtc: Schema.optional(Schema.String),
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
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsCreateOrUpdateInput>;

// Output Schema
export interface DeploymentsCreateOrUpdateOutput {
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
export const DeploymentsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeploymentsCreateOrUpdateOutput>;

// The operation
/**
 * Create a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 * @param deploymentName - Deployment name. Use .default for deployment creation and to get the current deployment for the associated device group.
 */
export const DeploymentsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsCreateOrUpdateInput,
  outputSchema: DeploymentsCreateOrUpdateOutput,
}));
// Input Schema
export interface DeploymentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  deploymentName: string;
}
export const DeploymentsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  deviceGroupName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<DeploymentsDeleteInput>;

// Output Schema
export type DeploymentsDeleteOutput = void;
export const DeploymentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeploymentsDeleteOutput>;

// The operation
/**
 * Delete a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 * @param deploymentName - Deployment name. Use .default for deployment creation and to get the current deployment for the associated device group.
 */
export const DeploymentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsDeleteInput,
  outputSchema: DeploymentsDeleteOutput,
}));
// Input Schema
export interface DeploymentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  deploymentName: string;
}
export const DeploymentsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  deviceGroupName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<DeploymentsGetInput>;

// Output Schema
export interface DeploymentsGetOutput {
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
export const DeploymentsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DeploymentsGetOutput>;

// The operation
/**
 * Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 * @param deploymentName - Deployment name. Use .default for deployment creation and to get the current deployment for the associated device group.
 */
export const DeploymentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsGetInput,
  outputSchema: DeploymentsGetOutput,
}));
// Input Schema
export interface DeploymentsListByDeviceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $maxpagesize?: number;
}
export const DeploymentsListByDeviceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $maxpagesize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DeploymentsListByDeviceGroupInput>;

// Output Schema
export interface DeploymentsListByDeviceGroupOutput {
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
export const DeploymentsListByDeviceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeploymentsListByDeviceGroupOutput>;

// The operation
/**
 * List Deployment resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter the result list using the given expression
 * @param $top - The number of result items to return.
 * @param $skip - The number of result items to skip.
 * @param $maxpagesize - The maximum number of result items per page.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 */
export const DeploymentsListByDeviceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DeploymentsListByDeviceGroupInput,
    outputSchema: DeploymentsListByDeviceGroupOutput,
  }));
// Input Schema
export interface DeviceGroupsClaimDevicesInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  deviceIdentifiers: string[];
}
export const DeviceGroupsClaimDevicesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceGroupName: Schema.String.pipe(T.PathParam()),
    deviceIdentifiers: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/claimDevices",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DeviceGroupsClaimDevicesInput>;

// Output Schema
export type DeviceGroupsClaimDevicesOutput = void;
export const DeviceGroupsClaimDevicesOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeviceGroupsClaimDevicesOutput>;

// The operation
/**
 * Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when bulk claiming devices to a catalog only.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 */
export const DeviceGroupsClaimDevices = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeviceGroupsClaimDevicesInput,
  outputSchema: DeviceGroupsClaimDevicesOutput,
}));
// Input Schema
export interface DeviceGroupsCountDevicesInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
}
export const DeviceGroupsCountDevicesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/countDevices",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DeviceGroupsCountDevicesInput>;

// Output Schema
export interface DeviceGroupsCountDevicesOutput {
  value: number;
}
export const DeviceGroupsCountDevicesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Number,
  }) as unknown as Schema.Codec<DeviceGroupsCountDevicesOutput>;

// The operation
/**
 * Counts devices in device group. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 */
export const DeviceGroupsCountDevices = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeviceGroupsCountDevicesInput,
  outputSchema: DeviceGroupsCountDevicesOutput,
}));
// Input Schema
export interface DeviceGroupsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  properties?: {
    description?: string;
    osFeedType?: "Retail" | "RetailEval";
    updatePolicy?: "UpdateAll" | "No3rdPartyAppUpdates";
    allowCrashDumpsCollection?: "Enabled" | "Disabled";
    regionalDataBoundary?: "None" | "EU";
    hasDeployment?: boolean;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
}
export const DeviceGroupsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        osFeedType: Schema.optional(Schema.Literals(["Retail", "RetailEval"])),
        updatePolicy: Schema.optional(
          Schema.Literals(["UpdateAll", "No3rdPartyAppUpdates"]),
        ),
        allowCrashDumpsCollection: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        regionalDataBoundary: Schema.optional(Schema.Literals(["None", "EU"])),
        hasDeployment: Schema.optional(Schema.Boolean),
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
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DeviceGroupsCreateOrUpdateInput>;

// Output Schema
export interface DeviceGroupsCreateOrUpdateOutput {
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
export const DeviceGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeviceGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Create a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 */
export const DeviceGroupsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeviceGroupsCreateOrUpdateInput,
  outputSchema: DeviceGroupsCreateOrUpdateOutput,
}));
// Input Schema
export interface DeviceGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
}
export const DeviceGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DeviceGroupsDeleteInput>;

// Output Schema
export type DeviceGroupsDeleteOutput = void;
export const DeviceGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeviceGroupsDeleteOutput>;

// The operation
/**
 * Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 */
export const DeviceGroupsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeviceGroupsDeleteInput,
  outputSchema: DeviceGroupsDeleteOutput,
}));
// Input Schema
export interface DeviceGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
}
export const DeviceGroupsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  deviceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<DeviceGroupsGetInput>;

// Output Schema
export interface DeviceGroupsGetOutput {
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
export const DeviceGroupsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DeviceGroupsGetOutput>;

// The operation
/**
 * Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 */
export const DeviceGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeviceGroupsGetInput,
  outputSchema: DeviceGroupsGetOutput,
}));
// Input Schema
export interface DeviceGroupsListByProductInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $maxpagesize?: number;
}
export const DeviceGroupsListByProductInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $maxpagesize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DeviceGroupsListByProductInput>;

// Output Schema
export interface DeviceGroupsListByProductOutput {
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
export const DeviceGroupsListByProductOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeviceGroupsListByProductOutput>;

// The operation
/**
 * List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter the result list using the given expression
 * @param $top - The number of result items to return.
 * @param $skip - The number of result items to skip.
 * @param $maxpagesize - The maximum number of result items per page.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 */
export const DeviceGroupsListByProduct = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeviceGroupsListByProductInput,
  outputSchema: DeviceGroupsListByProductOutput,
}));
// Input Schema
export interface DeviceGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  properties?: {
    description?: string;
    osFeedType?: "Retail" | "RetailEval";
    updatePolicy?: "UpdateAll" | "No3rdPartyAppUpdates";
    allowCrashDumpsCollection?: "Enabled" | "Disabled";
    regionalDataBoundary?: "None" | "EU";
  };
}
export const DeviceGroupsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        osFeedType: Schema.optional(Schema.Literals(["Retail", "RetailEval"])),
        updatePolicy: Schema.optional(
          Schema.Literals(["UpdateAll", "No3rdPartyAppUpdates"]),
        ),
        allowCrashDumpsCollection: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        regionalDataBoundary: Schema.optional(Schema.Literals(["None", "EU"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DeviceGroupsUpdateInput>;

// Output Schema
export interface DeviceGroupsUpdateOutput {
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
export const DeviceGroupsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DeviceGroupsUpdateOutput>;

// The operation
/**
 * Update a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 */
export const DeviceGroupsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeviceGroupsUpdateInput,
  outputSchema: DeviceGroupsUpdateOutput,
}));
// Input Schema
export interface DevicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  deviceName: string;
  properties?: {
    deviceId?: string;
    chipSku?: string;
    lastAvailableOsVersion?: string;
    lastInstalledOsVersion?: string;
    lastOsUpdateUtc?: string;
    lastUpdateRequestUtc?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
}
export const DevicesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        deviceId: Schema.optional(Schema.String),
        chipSku: Schema.optional(Schema.String),
        lastAvailableOsVersion: Schema.optional(Schema.String),
        lastInstalledOsVersion: Schema.optional(Schema.String),
        lastOsUpdateUtc: Schema.optional(Schema.String),
        lastUpdateRequestUtc: Schema.optional(Schema.String),
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
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DevicesCreateOrUpdateInput>;

// Output Schema
export interface DevicesCreateOrUpdateOutput {
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
export const DevicesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DevicesCreateOrUpdateOutput>;

// The operation
/**
 * Create a Device. Use '.unassigned' or '.default' for the device group and product names to claim a device to the catalog only.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 * @param deviceName - Device name
 */
export const DevicesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevicesCreateOrUpdateInput,
  outputSchema: DevicesCreateOrUpdateOutput,
}));
// Input Schema
export interface DevicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  deviceName: string;
}
export const DevicesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  deviceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<DevicesDeleteInput>;

// Output Schema
export type DevicesDeleteOutput = void;
export const DevicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DevicesDeleteOutput>;

// The operation
/**
 * Delete a Device
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 * @param deviceName - Device name
 */
export const DevicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevicesDeleteInput,
  outputSchema: DevicesDeleteOutput,
}));
// Input Schema
export interface DevicesGenerateCapabilityImageInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  deviceName: string;
  capabilities: ("ApplicationDevelopment" | "FieldServicing")[];
}
export const DevicesGenerateCapabilityImageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    capabilities: Schema.Array(
      Schema.Literals(["ApplicationDevelopment", "FieldServicing"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}/generateCapabilityImage",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DevicesGenerateCapabilityImageInput>;

// Output Schema
export interface DevicesGenerateCapabilityImageOutput {
  image?: string;
}
export const DevicesGenerateCapabilityImageOutput =
  /*@__PURE__*/ Schema.Struct({
    image: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DevicesGenerateCapabilityImageOutput>;

// The operation
/**
 * Generates the capability image for the device. Use '.unassigned' or '.default' for the device group and product names to generate the image for a device that does not belong to a specific device group and product.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 * @param deviceName - Device name
 */
export const DevicesGenerateCapabilityImage =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DevicesGenerateCapabilityImageInput,
    outputSchema: DevicesGenerateCapabilityImageOutput,
  }));
// Input Schema
export interface DevicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  deviceName: string;
}
export const DevicesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  deviceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<DevicesGetInput>;

// Output Schema
export interface DevicesGetOutput {
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
export const DevicesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DevicesGetOutput>;

// The operation
/**
 * Get a Device. Use '.unassigned' or '.default' for the device group and product names when a device does not belong to a device group and product.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 * @param deviceName - Device name
 */
export const DevicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevicesGetInput,
  outputSchema: DevicesGetOutput,
}));
// Input Schema
export interface DevicesListByDeviceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
}
export const DevicesListByDeviceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DevicesListByDeviceGroupInput>;

// Output Schema
export interface DevicesListByDeviceGroupOutput {
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
export const DevicesListByDeviceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DevicesListByDeviceGroupOutput>;

// The operation
/**
 * List Device resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 */
export const DevicesListByDeviceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevicesListByDeviceGroupInput,
  outputSchema: DevicesListByDeviceGroupOutput,
}));
// Input Schema
export interface DevicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  deviceGroupName: string;
  deviceName: string;
  properties?: { deviceGroupId?: string };
}
export const DevicesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  deviceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      deviceGroupId: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<DevicesUpdateInput>;

// Output Schema
export interface DevicesUpdateOutput {
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
export const DevicesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DevicesUpdateOutput>;

// The operation
/**
 * Update a Device. Use '.unassigned' or '.default' for the device group and product names to move a device to the catalog level.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 * @param deviceGroupName - Name of device group.
 * @param deviceName - Device name
 */
export const DevicesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevicesUpdateInput,
  outputSchema: DevicesUpdateOutput,
}));
// Input Schema
export interface ImagesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  imageName: string;
  properties?: {
    image?: string;
    imageId?: string;
    imageName?: string;
    regionalDataBoundary?: "None" | "EU";
    uri?: string;
    description?: string;
    componentId?: string;
    imageType?:
      | "InvalidImageType"
      | "OneBl"
      | "PlutonRuntime"
      | "WifiFirmware"
      | "SecurityMonitor"
      | "NormalWorldLoader"
      | "NormalWorldDtb"
      | "NormalWorldKernel"
      | "RootFs"
      | "Services"
      | "Applications"
      | "FwConfig"
      | "BootManifest"
      | "Nwfs"
      | "TrustedKeystore"
      | "Policy"
      | "CustomerBoardConfig"
      | "UpdateCertStore"
      | "BaseSystemUpdateManifest"
      | "FirmwareUpdateManifest"
      | "CustomerUpdateManifest"
      | "RecoveryManifest"
      | "ManifestSet"
      | "Other";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
}
export const ImagesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        image: Schema.optional(Schema.String),
        imageId: Schema.optional(Schema.String),
        imageName: Schema.optional(Schema.String),
        regionalDataBoundary: Schema.optional(Schema.Literals(["None", "EU"])),
        uri: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        componentId: Schema.optional(Schema.String),
        imageType: Schema.optional(
          Schema.Literals([
            "InvalidImageType",
            "OneBl",
            "PlutonRuntime",
            "WifiFirmware",
            "SecurityMonitor",
            "NormalWorldLoader",
            "NormalWorldDtb",
            "NormalWorldKernel",
            "RootFs",
            "Services",
            "Applications",
            "FwConfig",
            "BootManifest",
            "Nwfs",
            "TrustedKeystore",
            "Policy",
            "CustomerBoardConfig",
            "UpdateCertStore",
            "BaseSystemUpdateManifest",
            "FirmwareUpdateManifest",
            "CustomerUpdateManifest",
            "RecoveryManifest",
            "ManifestSet",
            "Other",
          ]),
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
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ImagesCreateOrUpdateInput>;

// Output Schema
export interface ImagesCreateOrUpdateOutput {
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
export const ImagesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ImagesCreateOrUpdateOutput>;

// The operation
/**
 * Create a Image
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param imageName - Image name. Use an image GUID for GA versions of the API.
 */
export const ImagesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesCreateOrUpdateInput,
  outputSchema: ImagesCreateOrUpdateOutput,
}));
// Input Schema
export interface ImagesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  imageName: string;
}
export const ImagesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ImagesDeleteInput>;

// Output Schema
export type ImagesDeleteOutput = void;
export const ImagesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ImagesDeleteOutput>;

// The operation
/**
 * Delete a Image
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param imageName - Image name. Use an image GUID for GA versions of the API.
 */
export const ImagesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesDeleteInput,
  outputSchema: ImagesDeleteOutput,
}));
// Input Schema
export interface ImagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  imageName: string;
}
export const ImagesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ImagesGetInput>;

// Output Schema
export interface ImagesGetOutput {
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
export const ImagesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ImagesGetOutput>;

// The operation
/**
 * Get a Image
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param imageName - Image name. Use an image GUID for GA versions of the API.
 */
export const ImagesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesGetInput,
  outputSchema: ImagesGetOutput,
}));
// Input Schema
export interface ImagesListByCatalogInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
  $maxpagesize?: number;
}
export const ImagesListByCatalogInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $maxpagesize: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ImagesListByCatalogInput>;

// Output Schema
export interface ImagesListByCatalogOutput {
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
export const ImagesListByCatalogOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ImagesListByCatalogOutput>;

// The operation
/**
 * List Image resources by Catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter the result list using the given expression
 * @param $top - The number of result items to return.
 * @param $skip - The number of result items to skip.
 * @param $maxpagesize - The maximum number of result items per page.
 * @param catalogName - Name of catalog
 */
export const ImagesListByCatalog = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesListByCatalogInput,
  outputSchema: ImagesListByCatalogOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AzureSphere/operations",
    apiVersion: "2024-04-01",
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
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ProductsCountDevicesInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
}
export const ProductsCountDevicesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/countDevices",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ProductsCountDevicesInput>;

// Output Schema
export interface ProductsCountDevicesOutput {
  value: number;
}
export const ProductsCountDevicesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Number,
  }) as unknown as Schema.Codec<ProductsCountDevicesOutput>;

// The operation
/**
 * Counts devices in product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 */
export const ProductsCountDevices = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsCountDevicesInput,
  outputSchema: ProductsCountDevicesOutput,
}));
// Input Schema
export interface ProductsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  properties?: {
    description?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
}
export const ProductsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
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
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ProductsCreateOrUpdateInput>;

// Output Schema
export interface ProductsCreateOrUpdateOutput {
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
export const ProductsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ProductsCreateOrUpdateOutput>;

// The operation
/**
 * Create a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 */
export const ProductsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsCreateOrUpdateInput,
  outputSchema: ProductsCreateOrUpdateOutput,
}));
// Input Schema
export interface ProductsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
}
export const ProductsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ProductsDeleteInput>;

// Output Schema
export type ProductsDeleteOutput = void;
export const ProductsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProductsDeleteOutput>;

// The operation
/**
 * Delete a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name'
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 */
export const ProductsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsDeleteInput,
  outputSchema: ProductsDeleteOutput,
}));
// Input Schema
export interface ProductsGenerateDefaultDeviceGroupsInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
}
export const ProductsGenerateDefaultDeviceGroupsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/generateDefaultDeviceGroups",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ProductsGenerateDefaultDeviceGroupsInput>;

// Output Schema
export interface ProductsGenerateDefaultDeviceGroupsOutput {
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
export const ProductsGenerateDefaultDeviceGroupsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ProductsGenerateDefaultDeviceGroupsOutput>;

// The operation
/**
 * Generates default device groups for the product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 */
export const ProductsGenerateDefaultDeviceGroups =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProductsGenerateDefaultDeviceGroupsInput,
    outputSchema: ProductsGenerateDefaultDeviceGroupsOutput,
  }));
// Input Schema
export interface ProductsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
}
export const ProductsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ProductsGetInput>;

// Output Schema
export interface ProductsGetOutput {
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
export const ProductsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProductsGetOutput>;

// The operation
/**
 * Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 */
export const ProductsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsGetInput,
  outputSchema: ProductsGetOutput,
}));
// Input Schema
export interface ProductsListByCatalogInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
}
export const ProductsListByCatalogInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ProductsListByCatalogInput>;

// Output Schema
export interface ProductsListByCatalogOutput {
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
export const ProductsListByCatalogOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ProductsListByCatalogOutput>;

// The operation
/**
 * List Product resources by Catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 */
export const ProductsListByCatalog = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsListByCatalogInput,
  outputSchema: ProductsListByCatalogOutput,
}));
// Input Schema
export interface ProductsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  productName: string;
  properties?: { description?: string };
}
export const ProductsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ProductsUpdateInput>;

// Output Schema
export interface ProductsUpdateOutput {
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
export const ProductsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProductsUpdateOutput>;

// The operation
/**
 * Update a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param catalogName - Name of catalog
 * @param productName - Name of product.
 */
export const ProductsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsUpdateInput,
  outputSchema: ProductsUpdateOutput,
}));
