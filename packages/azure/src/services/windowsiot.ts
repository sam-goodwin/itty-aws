/**
 * Azure Windowsiot API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.WindowsIoT/operations",
    apiVersion: "2019-06-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
    isDataAction?: boolean;
    origin?: string;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
          }),
        ),
        isDataAction: Schema.optional(Schema.Boolean),
        origin: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Windows IoT Services REST API operations.
 *
 * @param api-version - The version of the API.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ServicesCheckDeviceServiceNameAvailabilityInput {
  subscriptionId: string;
  name: string;
}
export const ServicesCheckDeviceServiceNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.WindowsIoT/checkDeviceServiceNameAvailability",
      apiVersion: "2019-06-01",
    }),
  ) as unknown as Schema.Codec<ServicesCheckDeviceServiceNameAvailabilityInput>;

// Output Schema
export interface ServicesCheckDeviceServiceNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const ServicesCheckDeviceServiceNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesCheckDeviceServiceNameAvailabilityOutput>;

// The operation
/**
 * Check if a Windows IoT Device Service name is available.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 */
export const ServicesCheckDeviceServiceNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServicesCheckDeviceServiceNameAvailabilityInput,
    outputSchema: ServicesCheckDeviceServiceNameAvailabilityOutput,
  }));
// Input Schema
export interface ServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  etag?: string;
  properties?: {
    notes?: string;
    startDate?: string;
    quantity?: number;
    billingDomainName?: string;
    adminDomainName?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const ServicesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        notes: Schema.optional(Schema.String),
        startDate: Schema.optional(Schema.String),
        quantity: Schema.optional(Schema.Number),
        billingDomainName: Schema.optional(Schema.String),
        adminDomainName: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName}",
      apiVersion: "2019-06-01",
    }),
  ) as unknown as Schema.Codec<ServicesCreateOrUpdateInput>;

// Output Schema
export interface ServicesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ServicesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of a Windows IoT Device Service.
 *
 * Create or update the metadata of a Windows IoT Device Service. The usual pattern to modify a property is to retrieve the Windows IoT Device Service metadata and security metadata, and then combine them with the modified values in a new body to update the Windows IoT Device Service.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the Windows IoT Device Service.
 * @param deviceName - The name of the Windows IoT Device Service.
 * @param If-Match - ETag of the Windows IoT Device Service. Do not specify for creating a new Windows IoT Device Service. Required to update an existing Windows IoT Device Service.
 */
export const ServicesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesCreateOrUpdateInput,
  outputSchema: ServicesCreateOrUpdateOutput,
}));
// Input Schema
export interface ServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const ServicesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName}",
    apiVersion: "2019-06-01",
  }),
) as unknown as Schema.Codec<ServicesDeleteInput>;

// Output Schema
export interface ServicesDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ServicesDeleteOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ServicesDeleteOutput>;

// The operation
/**
 * Delete a Windows IoT Device Service.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the Windows IoT Device Service.
 * @param deviceName - The name of the Windows IoT Device Service.
 */
export const ServicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export interface ServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
}
export const ServicesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName}",
    apiVersion: "2019-06-01",
  }),
) as unknown as Schema.Codec<ServicesGetInput>;

// Output Schema
export interface ServicesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ServicesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ServicesGetOutput>;

// The operation
/**
 * Get the non-security related metadata of a Windows IoT Device Service.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the Windows IoT Device Service.
 * @param deviceName - The name of the Windows IoT Device Service.
 */
export const ServicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export interface ServicesListInput {
  subscriptionId: string;
}
export const ServicesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.WindowsIoT/deviceServices",
    apiVersion: "2019-06-01",
  }),
) as unknown as Schema.Codec<ServicesListInput>;

// Output Schema
export interface ServicesListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ServicesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesListOutput>;

// The operation
/**
 * Get all the IoT hubs in a subscription.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 */
export const ServicesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListInput,
  outputSchema: ServicesListOutput,
}));
// Input Schema
export interface ServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ServicesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices",
      apiVersion: "2019-06-01",
    }),
  ) as unknown as Schema.Codec<ServicesListByResourceGroupInput>;

// Output Schema
export interface ServicesListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ServicesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ServicesListByResourceGroupOutput>;

// The operation
/**
 * Get all the IoT hubs in a resource group.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the Windows IoT Device Service.
 */
export const ServicesListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListByResourceGroupInput,
  outputSchema: ServicesListByResourceGroupOutput,
}));
// Input Schema
export interface ServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  deviceName: string;
  etag?: string;
  properties?: {
    notes?: string;
    startDate?: string;
    quantity?: number;
    billingDomainName?: string;
    adminDomainName?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const ServicesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  deviceName: Schema.String.pipe(T.PathParam()),
  etag: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      notes: Schema.optional(Schema.String),
      startDate: Schema.optional(Schema.String),
      quantity: Schema.optional(Schema.Number),
      billingDomainName: Schema.optional(Schema.String),
      adminDomainName: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WindowsIoT/deviceServices/{deviceName}",
    apiVersion: "2019-06-01",
  }),
) as unknown as Schema.Codec<ServicesUpdateInput>;

// Output Schema
export interface ServicesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ServicesUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ServicesUpdateOutput>;

// The operation
/**
 * Updates the metadata of a Windows IoT Device Service.
 *
 * Updates the metadata of a Windows IoT Device Service. The usual pattern to modify a property is to retrieve the Windows IoT Device Service metadata and security metadata, and then combine them with the modified values in a new body to update the Windows IoT Device Service.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the Windows IoT Device Service.
 * @param deviceName - The name of the Windows IoT Device Service.
 * @param If-Match - ETag of the Windows IoT Device Service. Do not specify for creating a brand new Windows IoT Device Service. Required to update an existing Windows IoT Device Service.
 */
export const ServicesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
