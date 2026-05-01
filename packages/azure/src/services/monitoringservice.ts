/**
 * Azure Monitoringservice API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AzureMonitorWorkspacesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
    }),
  );
export type AzureMonitorWorkspacesCreateInput =
  typeof AzureMonitorWorkspacesCreateInput.Type;

// Output Schema
export const AzureMonitorWorkspacesCreateOutput =
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
export type AzureMonitorWorkspacesCreateOutput =
  typeof AzureMonitorWorkspacesCreateOutput.Type;

// The operation
/**
 * Creates or updates an Azure Monitor Workspace
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const AzureMonitorWorkspacesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesCreateInput,
    outputSchema: AzureMonitorWorkspacesCreateOutput,
  }));
// Input Schema
export const AzureMonitorWorkspacesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
    }),
  );
export type AzureMonitorWorkspacesDeleteInput =
  typeof AzureMonitorWorkspacesDeleteInput.Type;

// Output Schema
export const AzureMonitorWorkspacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AzureMonitorWorkspacesDeleteOutput =
  typeof AzureMonitorWorkspacesDeleteOutput.Type;

// The operation
/**
 * Deletes an Azure Monitor Workspace
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const AzureMonitorWorkspacesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesDeleteInput,
    outputSchema: AzureMonitorWorkspacesDeleteOutput,
  }));
// Input Schema
export const AzureMonitorWorkspacesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
    }),
  );
export type AzureMonitorWorkspacesGetInput =
  typeof AzureMonitorWorkspacesGetInput.Type;

// Output Schema
export const AzureMonitorWorkspacesGetOutput =
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
export type AzureMonitorWorkspacesGetOutput =
  typeof AzureMonitorWorkspacesGetOutput.Type;

// The operation
/**
 * Returns the specified Azure Monitor Workspace
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const AzureMonitorWorkspacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AzureMonitorWorkspacesGetInput,
    outputSchema: AzureMonitorWorkspacesGetOutput,
  }),
);
// Input Schema
export const AzureMonitorWorkspacesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts",
    }),
  );
export type AzureMonitorWorkspacesListByResourceGroupInput =
  typeof AzureMonitorWorkspacesListByResourceGroupInput.Type;

// Output Schema
export const AzureMonitorWorkspacesListByResourceGroupOutput =
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
export type AzureMonitorWorkspacesListByResourceGroupOutput =
  typeof AzureMonitorWorkspacesListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all Azure Monitor Workspaces in the specified resource group
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const AzureMonitorWorkspacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesListByResourceGroupInput,
    outputSchema: AzureMonitorWorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export const AzureMonitorWorkspacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/accounts",
    }),
  );
export type AzureMonitorWorkspacesListBySubscriptionInput =
  typeof AzureMonitorWorkspacesListBySubscriptionInput.Type;

// Output Schema
export const AzureMonitorWorkspacesListBySubscriptionOutput =
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
export type AzureMonitorWorkspacesListBySubscriptionOutput =
  typeof AzureMonitorWorkspacesListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all Azure Monitor Workspaces in the specified subscription
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const AzureMonitorWorkspacesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesListBySubscriptionInput,
    outputSchema: AzureMonitorWorkspacesListBySubscriptionOutput,
  }));
// Input Schema
export const AzureMonitorWorkspacesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
    }),
  );
export type AzureMonitorWorkspacesUpdateInput =
  typeof AzureMonitorWorkspacesUpdateInput.Type;

// Output Schema
export const AzureMonitorWorkspacesUpdateOutput =
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
export type AzureMonitorWorkspacesUpdateOutput =
  typeof AzureMonitorWorkspacesUpdateOutput.Type;

// The operation
/**
 * Updates part of an Azure Monitor Workspace
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const AzureMonitorWorkspacesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AzureMonitorWorkspacesUpdateInput,
    outputSchema: AzureMonitorWorkspacesUpdateOutput,
  }));
// Input Schema
export const MonitorOperationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "api-version": Schema.String,
  }).pipe(
    T.Http({ method: "GET", path: "/providers/Microsoft.Monitor/operations" }),
  );
export type MonitorOperationsListInput = typeof MonitorOperationsListInput.Type;

// Output Schema
export const MonitorOperationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type MonitorOperationsListOutput =
  typeof MonitorOperationsListOutput.Type;

// The operation
/**
 * Lists available Operations for this Resource Provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const MonitorOperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MonitorOperationsListInput,
    outputSchema: MonitorOperationsListOutput,
  }),
);
