/**
 * Azure Powerbiembedded API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetAvailableOperationsInput {}
export const GetAvailableOperationsInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.PowerBI/operations",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<GetAvailableOperationsInput>;

// Output Schema
export interface GetAvailableOperationsOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
      origin?: string;
    };
  }[];
}
export const GetAvailableOperationsOutput =
  /*@__PURE__*/ Schema.Struct({
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
              origin: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<GetAvailableOperationsOutput>;

// The operation
/**
 * Indicates which operations can be performed by the Power BI Resource Provider.
 *
 * @param api-version - Client Api Version.
 */
export const getAvailableOperations = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetAvailableOperationsInput,
  outputSchema: GetAvailableOperationsOutput,
}));
// Input Schema
export interface WorkspaceCollectionsCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name?: string;
  type?: string;
}
export const WorkspaceCollectionsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBI/locations/{location}/checkNameAvailability",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<WorkspaceCollectionsCheckNameAvailabilityInput>;

// Output Schema
export interface WorkspaceCollectionsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Unavailable" | "Invalid";
  message?: string;
}
export const WorkspaceCollectionsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Unavailable", "Invalid"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceCollectionsCheckNameAvailabilityOutput>;

// The operation
/**
 * Verify the specified Power BI Workspace Collection name is valid and not already in use.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - Azure location
 * @param api-version - Client Api Version.
 */
export const WorkspaceCollectionsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceCollectionsCheckNameAvailabilityInput,
    outputSchema: WorkspaceCollectionsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface WorkspaceCollectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceCollectionName: string;
  location?: string;
  tags?: Record<string, string>;
  sku?: { name: "S1"; tier: "Standard" };
}
export const WorkspaceCollectionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceCollectionName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["S1"]),
        tier: Schema.Literals(["Standard"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<WorkspaceCollectionsCreateInput>;

// Output Schema
export interface WorkspaceCollectionsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  sku?: { name: "S1"; tier: "Standard" };
  properties?: unknown;
}
export const WorkspaceCollectionsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["S1"]),
        tier: Schema.Literals(["Standard"]),
      }),
    ),
    properties: Schema.optional(Schema.Unknown),
  }) as unknown as Schema.Codec<WorkspaceCollectionsCreateOutput>;

// The operation
/**
 * Creates a new Power BI Workspace Collection with the specified properties. A Power BI Workspace Collection contains one or more workspaces, and can be used to provision keys that provide API access to those workspaces.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Azure resource group
 * @param workspaceCollectionName - Power BI Embedded Workspace Collection name
 * @param api-version - Client Api Version.
 */
export const WorkspaceCollectionsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspaceCollectionsCreateInput,
  outputSchema: WorkspaceCollectionsCreateOutput,
}));
// Input Schema
export interface WorkspaceCollectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceCollectionName: string;
}
export const WorkspaceCollectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceCollectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<WorkspaceCollectionsDeleteInput>;

// Output Schema
export type WorkspaceCollectionsDeleteOutput = void;
export const WorkspaceCollectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspaceCollectionsDeleteOutput>;

// The operation
/**
 * Delete a Power BI Workspace Collection.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Azure resource group
 * @param workspaceCollectionName - Power BI Embedded Workspace Collection name
 * @param api-version - Client Api Version.
 */
export const WorkspaceCollectionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspaceCollectionsDeleteInput,
  outputSchema: WorkspaceCollectionsDeleteOutput,
}));
// Input Schema
export interface WorkspaceCollectionsGetAccessKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceCollectionName: string;
}
export const WorkspaceCollectionsGetAccessKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceCollectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/listKeys",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<WorkspaceCollectionsGetAccessKeysInput>;

// Output Schema
export interface WorkspaceCollectionsGetAccessKeysOutput {
  key1?: string;
  key2?: string;
}
export const WorkspaceCollectionsGetAccessKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceCollectionsGetAccessKeysOutput>;

// The operation
/**
 * Retrieves the primary and secondary access keys for the specified Power BI Workspace Collection.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Azure resource group
 * @param workspaceCollectionName - Power BI Embedded Workspace Collection name
 * @param api-version - Client Api Version.
 */
export const WorkspaceCollectionsGetAccessKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceCollectionsGetAccessKeysInput,
    outputSchema: WorkspaceCollectionsGetAccessKeysOutput,
  }));
// Input Schema
export interface WorkspaceCollectionsGetByNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceCollectionName: string;
}
export const WorkspaceCollectionsGetByNameInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceCollectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<WorkspaceCollectionsGetByNameInput>;

// Output Schema
export interface WorkspaceCollectionsGetByNameOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  sku?: { name: "S1"; tier: "Standard" };
  properties?: unknown;
}
export const WorkspaceCollectionsGetByNameOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["S1"]),
        tier: Schema.Literals(["Standard"]),
      }),
    ),
    properties: Schema.optional(Schema.Unknown),
  }) as unknown as Schema.Codec<WorkspaceCollectionsGetByNameOutput>;

// The operation
/**
 * Retrieves an existing Power BI Workspace Collection.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Azure resource group
 * @param workspaceCollectionName - Power BI Embedded Workspace Collection name
 * @param api-version - Client Api Version.
 */
export const WorkspaceCollectionsGetByName =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceCollectionsGetByNameInput,
    outputSchema: WorkspaceCollectionsGetByNameOutput,
  }));
// Input Schema
export interface WorkspaceCollectionsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const WorkspaceCollectionsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<WorkspaceCollectionsListByResourceGroupInput>;

// Output Schema
export interface WorkspaceCollectionsListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    sku?: { name: "S1"; tier: "Standard" };
    properties?: unknown;
  }[];
}
export const WorkspaceCollectionsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.Literals(["S1"]),
              tier: Schema.Literals(["Standard"]),
            }),
          ),
          properties: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<WorkspaceCollectionsListByResourceGroupOutput>;

// The operation
/**
 * Retrieves all existing Power BI workspace collections in the specified resource group.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Azure resource group
 * @param api-version - Client Api Version.
 */
export const WorkspaceCollectionsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceCollectionsListByResourceGroupInput,
    outputSchema: WorkspaceCollectionsListByResourceGroupOutput,
  }));
// Input Schema
export interface WorkspaceCollectionsListBySubscriptionInput {
  subscriptionId: string;
}
export const WorkspaceCollectionsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBI/workspaceCollections",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<WorkspaceCollectionsListBySubscriptionInput>;

// Output Schema
export interface WorkspaceCollectionsListBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    sku?: { name: "S1"; tier: "Standard" };
    properties?: unknown;
  }[];
}
export const WorkspaceCollectionsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.Literals(["S1"]),
              tier: Schema.Literals(["Standard"]),
            }),
          ),
          properties: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<WorkspaceCollectionsListBySubscriptionOutput>;

// The operation
/**
 * Retrieves all existing Power BI workspace collections in the specified subscription.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Client Api Version.
 */
export const WorkspaceCollectionsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceCollectionsListBySubscriptionInput,
    outputSchema: WorkspaceCollectionsListBySubscriptionOutput,
  }));
// Input Schema
export interface WorkspaceCollectionsMigrateInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetResourceGroup?: string;
  resources?: string[];
}
export const WorkspaceCollectionsMigrateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetResourceGroup: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<WorkspaceCollectionsMigrateInput>;

// Output Schema
export type WorkspaceCollectionsMigrateOutput = void;
export const WorkspaceCollectionsMigrateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspaceCollectionsMigrateOutput>;

// The operation
/**
 * Migrates an existing Power BI Workspace Collection to a different resource group and/or subscription.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Azure resource group
 * @param api-version - Client Api Version.
 */
export const WorkspaceCollectionsMigrate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspaceCollectionsMigrateInput,
  outputSchema: WorkspaceCollectionsMigrateOutput,
}));
// Input Schema
export interface WorkspaceCollectionsRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceCollectionName: string;
  keyName?: "key1" | "key2";
}
export const WorkspaceCollectionsRegenerateKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceCollectionName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.optional(Schema.Literals(["key1", "key2"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/regenerateKey",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<WorkspaceCollectionsRegenerateKeyInput>;

// Output Schema
export interface WorkspaceCollectionsRegenerateKeyOutput {
  key1?: string;
  key2?: string;
}
export const WorkspaceCollectionsRegenerateKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceCollectionsRegenerateKeyOutput>;

// The operation
/**
 * Regenerates the primary or secondary access key for the specified Power BI Workspace Collection.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Azure resource group
 * @param workspaceCollectionName - Power BI Embedded Workspace Collection name
 * @param api-version - Client Api Version.
 */
export const WorkspaceCollectionsRegenerateKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceCollectionsRegenerateKeyInput,
    outputSchema: WorkspaceCollectionsRegenerateKeyOutput,
  }));
// Input Schema
export interface WorkspaceCollectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceCollectionName: string;
  tags?: Record<string, string>;
  sku?: { name: "S1"; tier: "Standard" };
}
export const WorkspaceCollectionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceCollectionName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["S1"]),
        tier: Schema.Literals(["Standard"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}",
      apiVersion: "2016-01-29",
    }),
  ) as unknown as Schema.Codec<WorkspaceCollectionsUpdateInput>;

// Output Schema
export interface WorkspaceCollectionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  sku?: { name: "S1"; tier: "Standard" };
  properties?: unknown;
}
export const WorkspaceCollectionsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["S1"]),
        tier: Schema.Literals(["Standard"]),
      }),
    ),
    properties: Schema.optional(Schema.Unknown),
  }) as unknown as Schema.Codec<WorkspaceCollectionsUpdateOutput>;

// The operation
/**
 * Update an existing Power BI Workspace Collection with the specified properties.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Azure resource group
 * @param workspaceCollectionName - Power BI Embedded Workspace Collection name
 * @param api-version - Client Api Version.
 */
export const WorkspaceCollectionsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspaceCollectionsUpdateInput,
  outputSchema: WorkspaceCollectionsUpdateOutput,
}));
// Input Schema
export interface WorkspacesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceCollectionName: string;
}
export const WorkspacesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceCollectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/workspaces",
    apiVersion: "2016-01-29",
  }),
) as unknown as Schema.Codec<WorkspacesListInput>;

// Output Schema
export interface WorkspacesListOutput {
  value?: { id?: string; name?: string; type?: string; properties?: unknown }[];
}
export const WorkspacesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        properties: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
}) as unknown as Schema.Codec<WorkspacesListOutput>;

// The operation
/**
 * Retrieves all existing Power BI workspaces in the specified workspace collection.
 *
 * @param subscriptionId - Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Azure resource group
 * @param workspaceCollectionName - Power BI Embedded Workspace Collection name
 * @param api-version - Client Api Version.
 */
export const WorkspacesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesListInput,
  outputSchema: WorkspacesListOutput,
}));
