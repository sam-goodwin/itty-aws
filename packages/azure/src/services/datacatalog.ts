/**
 * Azure Datacatalog API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ADCCatalogsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  properties?: {
    sku?: "Free" | "Standard";
    units?: number;
    admins?: { upn?: string; objectId?: string }[];
    users?: { upn?: string; objectId?: string }[];
    successfullyProvisioned?: boolean;
    enableAutomaticUnitAdjustment?: boolean;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
}
export const ADCCatalogsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(Schema.Literals(["Free", "Standard"])),
        units: Schema.optional(Schema.Number),
        admins: Schema.optional(
          Schema.Array(
            Schema.Struct({
              upn: Schema.optional(Schema.String),
              objectId: Schema.optional(Schema.String),
            }),
          ),
        ),
        users: Schema.optional(
          Schema.Array(
            Schema.Struct({
              upn: Schema.optional(Schema.String),
              objectId: Schema.optional(Schema.String),
            }),
          ),
        ),
        successfullyProvisioned: Schema.optional(Schema.Boolean),
        enableAutomaticUnitAdjustment: Schema.optional(Schema.Boolean),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}",
      apiVersion: "2016-03-30",
    }),
  ) as unknown as Schema.Codec<ADCCatalogsCreateOrUpdateInput>;

// Output Schema
export interface ADCCatalogsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
}
export const ADCCatalogsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ADCCatalogsCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update Azure Data Catalog service (PUT Resource)
 *
 * The Create Azure Data Catalog service operation creates a new data catalog service with the specified parameters. If the specific service already exists, then any patchable properties will be updated and any immutable properties will remain unchanged.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param catalogName - The name of the data catalog in the specified subscription and resource group.
 */
export const ADCCatalogsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ADCCatalogsCreateOrUpdateInput,
  outputSchema: ADCCatalogsCreateOrUpdateOutput,
}));
// Input Schema
export interface ADCCatalogsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
}
export const ADCCatalogsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}",
    apiVersion: "2016-03-30",
  }),
) as unknown as Schema.Codec<ADCCatalogsDeleteInput>;

// Output Schema
export type ADCCatalogsDeleteOutput = void;
export const ADCCatalogsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ADCCatalogsDeleteOutput>;

// The operation
/**
 * Delete Azure Data Catalog Service (DELETE Resource)
 *
 * The Delete Azure Data Catalog Service operation deletes an existing data catalog.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param catalogName - The name of the data catalog in the specified subscription and resource group.
 */
export const ADCCatalogsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ADCCatalogsDeleteInput,
  outputSchema: ADCCatalogsDeleteOutput,
}));
// Input Schema
export interface ADCCatalogsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
}
export const ADCCatalogsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}",
    apiVersion: "2016-03-30",
  }),
) as unknown as Schema.Codec<ADCCatalogsGetInput>;

// Output Schema
export interface ADCCatalogsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
}
export const ADCCatalogsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ADCCatalogsGetOutput>;

// The operation
/**
 * Get Azure Data Catalog service (GET Resources)
 *
 * The Get Azure Data Catalog Service operation retrieves a json representation of the data catalog.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param catalogName - The name of the data catalog in the specified subscription and resource group.
 */
export const ADCCatalogsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ADCCatalogsGetInput,
  outputSchema: ADCCatalogsGetOutput,
}));
// Input Schema
export interface ADCCatalogsListtByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ADCCatalogsListtByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs",
      apiVersion: "2016-03-30",
    }),
  ) as unknown as Schema.Codec<ADCCatalogsListtByResourceGroupInput>;

// Output Schema
export interface ADCCatalogsListtByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    etag?: string;
  }[];
}
export const ADCCatalogsListtByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ADCCatalogsListtByResourceGroupOutput>;

// The operation
/**
 * List catalogs in Resource Group (GET Resources)
 *
 * The List catalogs in Resource Group operation lists all the Azure Data Catalogs available under the given resource group.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 */
export const ADCCatalogsListtByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ADCCatalogsListtByResourceGroupInput,
    outputSchema: ADCCatalogsListtByResourceGroupOutput,
  }));
// Input Schema
export interface ADCCatalogsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  catalogName: string;
  properties?: {
    sku?: "Free" | "Standard";
    units?: number;
    admins?: { upn?: string; objectId?: string }[];
    users?: { upn?: string; objectId?: string }[];
    successfullyProvisioned?: boolean;
    enableAutomaticUnitAdjustment?: boolean;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
}
export const ADCCatalogsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      sku: Schema.optional(Schema.Literals(["Free", "Standard"])),
      units: Schema.optional(Schema.Number),
      admins: Schema.optional(
        Schema.Array(
          Schema.Struct({
            upn: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
          }),
        ),
      ),
      users: Schema.optional(
        Schema.Array(
          Schema.Struct({
            upn: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
          }),
        ),
      ),
      successfullyProvisioned: Schema.optional(Schema.Boolean),
      enableAutomaticUnitAdjustment: Schema.optional(Schema.Boolean),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName}",
    apiVersion: "2016-03-30",
  }),
) as unknown as Schema.Codec<ADCCatalogsUpdateInput>;

// Output Schema
export interface ADCCatalogsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
}
export const ADCCatalogsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ADCCatalogsUpdateOutput>;

// The operation
/**
 * Update Azure Data Catalog Service (PATCH Resource)
 *
 * The Update Azure Data Catalog Service operation can be used to update the existing deployment. The update call only supports the properties listed in the PATCH body.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param catalogName - The name of the data catalog in the specified subscription and resource group.
 */
export const ADCCatalogsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ADCCatalogsUpdateInput,
  outputSchema: ADCCatalogsUpdateOutput,
}));
// Input Schema
export interface ADCOperationsListInput {}
export const ADCOperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataCatalog/operations",
    apiVersion: "2016-03-30",
  }),
) as unknown as Schema.Codec<ADCOperationsListInput>;

// Output Schema
export interface ADCOperationsListOutput {
  value?: {
    name?: string;
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
  }[];
}
export const ADCOperationsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ADCOperationsListOutput>;

// The operation
/**
 * Lists all the available Azure Data Catalog service operations.
 *
 * @param api-version - Client Api Version.
 */
export const ADCOperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ADCOperationsListInput,
  outputSchema: ADCOperationsListOutput,
}));
