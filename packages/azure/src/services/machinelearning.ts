/**
 * Azure Machinelearning API
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
    path: "/providers/Microsoft.MachineLearning/operations",
    apiVersion: "2019-10-01",
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
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
      }),
    ),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Azure Machine Learning Studio REST API operations.
 *
 * @param api-version - The client API version.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface WorkspacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties?: {
    userStorageAccountId: string;
    ownerEmail: string;
    workspaceType?:
      | "Production"
      | "Free"
      | "Anonymous"
      | "PaidStandard"
      | "PaidPremium";
    workspaceState?:
      | "Deleted"
      | "Enabled"
      | "Disabled"
      | "Migrated"
      | "Updated"
      | "Registered"
      | "Unregistered";
    workspaceId?: string;
    creationTime?: string;
    studioEndpoint?: string;
    keyVaultIdentifierId?: string;
  };
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
  sku?: { name?: string; tier?: string };
}
export const WorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        userStorageAccountId: Schema.String,
        ownerEmail: Schema.String,
        workspaceType: Schema.optional(
          Schema.Literals([
            "Production",
            "Free",
            "Anonymous",
            "PaidStandard",
            "PaidPremium",
          ]),
        ),
        workspaceState: Schema.optional(
          Schema.Literals([
            "Deleted",
            "Enabled",
            "Disabled",
            "Migrated",
            "Updated",
            "Registered",
            "Unregistered",
          ]),
        ),
        workspaceId: Schema.optional(Schema.String),
        creationTime: Schema.optional(Schema.String),
        studioEndpoint: Schema.optional(Schema.String),
        keyVaultIdentifierId: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}",
      apiVersion: "2019-10-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesCreateOrUpdateInput>;

// Output Schema
export interface WorkspacesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
  sku?: { name?: string; tier?: string };
}
export const WorkspacesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkspacesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a workspace with the specified parameters.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the machine learning workspace belongs.
 * @param workspaceName - The name of the machine learning workspace.
 */
export const WorkspacesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesCreateOrUpdateInput,
  outputSchema: WorkspacesCreateOrUpdateOutput,
}));
// Input Schema
export interface WorkspacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}",
    apiVersion: "2019-10-01",
  }),
) as unknown as Schema.Codec<WorkspacesDeleteInput>;

// Output Schema
export type WorkspacesDeleteOutput = void;
export const WorkspacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacesDeleteOutput>;

// The operation
/**
 * Deletes a machine learning workspace.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the machine learning workspace belongs.
 * @param workspaceName - The name of the machine learning workspace.
 */
export const WorkspacesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesDeleteInput,
  outputSchema: WorkspacesDeleteOutput,
}));
// Input Schema
export interface WorkspacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}",
    apiVersion: "2019-10-01",
  }),
) as unknown as Schema.Codec<WorkspacesGetInput>;

// Output Schema
export interface WorkspacesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
  sku?: { name?: string; tier?: string };
}
export const WorkspacesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      tier: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<WorkspacesGetOutput>;

// The operation
/**
 * Gets the properties of the specified machine learning workspace.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the machine learning workspace belongs.
 * @param workspaceName - The name of the machine learning workspace.
 */
export const WorkspacesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesGetInput,
  outputSchema: WorkspacesGetOutput,
}));
// Input Schema
export interface WorkspacesListInput {
  subscriptionId: string;
}
export const WorkspacesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearning/workspaces",
    apiVersion: "2019-10-01",
  }),
) as unknown as Schema.Codec<WorkspacesListInput>;

// Output Schema
export interface WorkspacesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
    sku?: { name?: string; tier?: string };
  }[];
  nextLink?: string;
}
export const WorkspacesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.String,
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            tier: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<WorkspacesListOutput>;

// The operation
/**
 * Lists all the available machine learning workspaces under the specified subscription.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 */
export const WorkspacesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesListInput,
  outputSchema: WorkspacesListOutput,
}));
// Input Schema
export interface WorkspacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const WorkspacesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces",
      apiVersion: "2019-10-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListByResourceGroupInput>;

// Output Schema
export interface WorkspacesListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
    sku?: { name?: string; tier?: string };
  }[];
  nextLink?: string;
}
export const WorkspacesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              tier: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspacesListByResourceGroupOutput>;

// The operation
/**
 * Lists all the available machine learning workspaces under the specified resource group.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the machine learning workspace belongs.
 */
export const WorkspacesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListByResourceGroupInput,
    outputSchema: WorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export interface WorkspacesListWorkspaceKeysInput {
  subscriptionId: string;
  workspaceName: string;
  resourceGroupName: string;
}
export const WorkspacesListWorkspaceKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}/listWorkspaceKeys",
      apiVersion: "2019-10-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListWorkspaceKeysInput>;

// Output Schema
export interface WorkspacesListWorkspaceKeysOutput {
  primaryToken?: string;
  secondaryToken?: string;
}
export const WorkspacesListWorkspaceKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryToken: Schema.optional(Schema.String),
    secondaryToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspacesListWorkspaceKeysOutput>;

// The operation
/**
 * List the authorization keys associated with this workspace.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param workspaceName - The name of the machine learning workspace.
 * @param resourceGroupName - The name of the resource group to which the machine learning workspace belongs.
 */
export const WorkspacesListWorkspaceKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesListWorkspaceKeysInput,
  outputSchema: WorkspacesListWorkspaceKeysOutput,
}));
// Input Schema
export interface WorkspacesResyncStorageKeysInput {
  subscriptionId: string;
  workspaceName: string;
  resourceGroupName: string;
}
export const WorkspacesResyncStorageKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}/resyncStorageKeys",
      apiVersion: "2019-10-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesResyncStorageKeysInput>;

// Output Schema
export type WorkspacesResyncStorageKeysOutput = void;
export const WorkspacesResyncStorageKeysOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacesResyncStorageKeysOutput>;

// The operation
/**
 * Resync storage keys associated with this workspace.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param workspaceName - The name of the machine learning workspace.
 * @param resourceGroupName - The name of the resource group to which the machine learning workspace belongs.
 */
export const WorkspacesResyncStorageKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesResyncStorageKeysInput,
  outputSchema: WorkspacesResyncStorageKeysOutput,
}));
// Input Schema
export interface WorkspacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  tags?: Record<string, string>;
  properties?: {
    workspaceState?:
      | "Deleted"
      | "Enabled"
      | "Disabled"
      | "Migrated"
      | "Updated"
      | "Registered"
      | "Unregistered";
    keyVaultIdentifierId?: string;
    sku?: { name?: string; tier?: string };
  };
}
export const WorkspacesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      workspaceState: Schema.optional(
        Schema.Literals([
          "Deleted",
          "Enabled",
          "Disabled",
          "Migrated",
          "Updated",
          "Registered",
          "Unregistered",
        ]),
      ),
      keyVaultIdentifierId: Schema.optional(Schema.String),
      sku: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          tier: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}",
    apiVersion: "2019-10-01",
  }),
) as unknown as Schema.Codec<WorkspacesUpdateInput>;

// Output Schema
export interface WorkspacesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
  sku?: { name?: string; tier?: string };
}
export const WorkspacesUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      tier: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<WorkspacesUpdateOutput>;

// The operation
/**
 * Updates a machine learning workspace with the specified parameters.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the machine learning workspace belongs.
 * @param workspaceName - The name of the machine learning workspace.
 */
export const WorkspacesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesUpdateInput,
  outputSchema: WorkspacesUpdateOutput,
}));
