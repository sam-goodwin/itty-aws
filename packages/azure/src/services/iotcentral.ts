/**
 * Azure Iotcentral API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AppsCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  type?: string;
}
export const AppsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/checkNameAvailability",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<AppsCheckNameAvailabilityInput>;

// Output Schema
export interface AppsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const AppsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AppsCheckNameAvailabilityOutput>;

// The operation
/**
 * Check if an IoT Central application name is available.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 */
export const AppsCheckNameAvailability = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppsCheckNameAvailabilityInput,
  outputSchema: AppsCheckNameAvailabilityOutput,
}));
// Input Schema
export interface AppsCheckSubdomainAvailabilityInput {
  subscriptionId: string;
  name: string;
  type?: string;
}
export const AppsCheckSubdomainAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/checkSubdomainAvailability",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<AppsCheckSubdomainAvailabilityInput>;

// Output Schema
export interface AppsCheckSubdomainAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const AppsCheckSubdomainAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AppsCheckSubdomainAvailabilityOutput>;

// The operation
/**
 * Check if an IoT Central application subdomain is available.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 */
export const AppsCheckSubdomainAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppsCheckSubdomainAvailabilityInput,
    outputSchema: AppsCheckSubdomainAvailabilityOutput,
  }));
// Input Schema
export interface AppsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    applicationId?: string;
    displayName?: string;
    subdomain?: string;
    template?: string;
    state?: "created" | "suspended";
  };
  sku: { name: "ST0" | "ST1" | "ST2" };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const AppsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        applicationId: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        subdomain: Schema.optional(Schema.String),
        template: Schema.optional(Schema.String),
        state: Schema.optional(Schema.Literals(["created", "suspended"])),
      }),
    ),
    sku: Schema.Struct({
      name: Schema.Literals(["ST0", "ST1", "ST2"]),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned"]),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/iotApps/{resourceName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<AppsCreateOrUpdateInput>;

// Output Schema
export interface AppsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const AppsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<AppsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of an IoT Central application. The usual pattern to modify a property is to retrieve the IoT Central application metadata and security metadata, and then combine them with the modified values in a new body to update the IoT Central application.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT Central application.
 * @param resourceName - The ARM resource name of the IoT Central application.
 */
export const AppsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppsCreateOrUpdateInput,
  outputSchema: AppsCreateOrUpdateOutput,
}));
// Input Schema
export interface AppsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const AppsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/iotApps/{resourceName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<AppsDeleteInput>;

// Output Schema
export type AppsDeleteOutput = void;
export const AppsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppsDeleteOutput>;

// The operation
/**
 * Delete an IoT Central application.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT Central application.
 * @param resourceName - The ARM resource name of the IoT Central application.
 */
export const AppsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppsDeleteInput,
  outputSchema: AppsDeleteOutput,
}));
// Input Schema
export interface AppsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const AppsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/iotApps/{resourceName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<AppsGetInput>;

// Output Schema
export interface AppsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const AppsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<AppsGetOutput>;

// The operation
/**
 * Get the metadata of an IoT Central application.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT Central application.
 * @param resourceName - The ARM resource name of the IoT Central application.
 */
export const AppsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppsGetInput,
  outputSchema: AppsGetOutput,
}));
// Input Schema
export interface AppsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AppsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/iotApps",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<AppsListByResourceGroupInput>;

// Output Schema
export interface AppsListByResourceGroupOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
}
export const AppsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AppsListByResourceGroupOutput>;

// The operation
/**
 * Get all the IoT Central Applications in a resource group.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT Central application.
 */
export const AppsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppsListByResourceGroupInput,
  outputSchema: AppsListByResourceGroupOutput,
}));
// Input Schema
export interface AppsListBySubscriptionInput {
  subscriptionId: string;
}
export const AppsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/iotApps",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<AppsListBySubscriptionInput>;

// Output Schema
export interface AppsListBySubscriptionOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
}
export const AppsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AppsListBySubscriptionOutput>;

// The operation
/**
 * Get all IoT Central Applications in a subscription.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 */
export const AppsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppsListBySubscriptionInput,
  outputSchema: AppsListBySubscriptionOutput,
}));
// Input Schema
export interface AppsListTemplatesInput {
  subscriptionId: string;
}
export const AppsListTemplatesInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/appTemplates",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<AppsListTemplatesInput>;

// Output Schema
export interface AppsListTemplatesOutput {
  nextLink?: string;
  value?: {
    manifestId?: string;
    manifestVersion?: string;
    name?: string;
    title?: string;
    order?: number;
    description?: string;
    industry?: string;
    locations?: { id?: string; displayName?: string }[];
  }[];
}
export const AppsListTemplatesOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          manifestId: Schema.optional(Schema.String),
          manifestVersion: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          title: Schema.optional(Schema.String),
          order: Schema.optional(Schema.Number),
          description: Schema.optional(Schema.String),
          industry: Schema.optional(Schema.String),
          locations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                displayName: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AppsListTemplatesOutput>;

// The operation
/**
 * Get all available application templates.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 */
export const AppsListTemplates = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppsListTemplatesInput,
  outputSchema: AppsListTemplatesOutput,
}));
// Input Schema
export interface AppsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
  sku?: { name: "ST0" | "ST1" | "ST2" };
  properties?: {
    applicationId?: string;
    displayName?: string;
    subdomain?: string;
    template?: string;
    state?: "created" | "suspended";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
}
export const AppsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["ST0", "ST1", "ST2"]),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      applicationId: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      subdomain: Schema.optional(Schema.String),
      template: Schema.optional(Schema.String),
      state: Schema.optional(Schema.Literals(["created", "suspended"])),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals(["None", "SystemAssigned"]),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/iotApps/{resourceName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<AppsUpdateInput>;

// Output Schema
export interface AppsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const AppsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<AppsUpdateOutput>;

// The operation
/**
 * Update the metadata of an IoT Central application.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT Central application.
 * @param resourceName - The ARM resource name of the IoT Central application.
 */
export const AppsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppsUpdateInput,
  outputSchema: AppsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.IoTCentral/operations",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string;
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: unknown;
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available IoT Central Resource Provider operations.
 *
 * @param api-version - The version of the API.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
