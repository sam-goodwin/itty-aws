/**
 * Azure Databasewatcher API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AlertRuleResourcesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  alertRuleResourceName: string;
  properties?: {
    alertRuleResourceId: string;
    createdWithProperties: "CreatedWithActionGroup" | "None";
    creationTime: string;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    alertRuleTemplateId: string;
    alertRuleTemplateVersion: string;
  };
}
export const AlertRuleResourcesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    alertRuleResourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        alertRuleResourceId: Schema.String,
        createdWithProperties: Schema.Literals([
          "CreatedWithActionGroup",
          "None",
        ]),
        creationTime: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        alertRuleTemplateId: Schema.String,
        alertRuleTemplateVersion: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/alertRuleResources/{alertRuleResourceName}",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<AlertRuleResourcesCreateOrUpdateInput>;

// Output Schema
export interface AlertRuleResourcesCreateOrUpdateOutput {
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
export const AlertRuleResourcesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AlertRuleResourcesCreateOrUpdateOutput>;

// The operation
/**
 * Create a AlertRuleResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param alertRuleResourceName - The alert rule proxy resource name.
 */
export const AlertRuleResourcesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AlertRuleResourcesCreateOrUpdateInput,
    outputSchema: AlertRuleResourcesCreateOrUpdateOutput,
  }));
// Input Schema
export interface AlertRuleResourcesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  alertRuleResourceName: string;
}
export const AlertRuleResourcesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    alertRuleResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/alertRuleResources/{alertRuleResourceName}",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<AlertRuleResourcesDeleteInput>;

// Output Schema
export type AlertRuleResourcesDeleteOutput = void;
export const AlertRuleResourcesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AlertRuleResourcesDeleteOutput>;

// The operation
/**
 * Delete a AlertRuleResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param alertRuleResourceName - The alert rule proxy resource name.
 */
export const AlertRuleResourcesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AlertRuleResourcesDeleteInput,
  outputSchema: AlertRuleResourcesDeleteOutput,
}));
// Input Schema
export interface AlertRuleResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  alertRuleResourceName: string;
}
export const AlertRuleResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    alertRuleResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/alertRuleResources/{alertRuleResourceName}",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<AlertRuleResourcesGetInput>;

// Output Schema
export interface AlertRuleResourcesGetOutput {
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
export const AlertRuleResourcesGetOutput =
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
  }) as unknown as Schema.Codec<AlertRuleResourcesGetOutput>;

// The operation
/**
 * Get a AlertRuleResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param alertRuleResourceName - The alert rule proxy resource name.
 */
export const AlertRuleResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AlertRuleResourcesGetInput,
  outputSchema: AlertRuleResourcesGetOutput,
}));
// Input Schema
export interface AlertRuleResourcesListByParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
}
export const AlertRuleResourcesListByParentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/alertRuleResources",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<AlertRuleResourcesListByParentInput>;

// Output Schema
export interface AlertRuleResourcesListByParentOutput {
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
export const AlertRuleResourcesListByParentOutput =
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
  }) as unknown as Schema.Codec<AlertRuleResourcesListByParentOutput>;

// The operation
/**
 * List AlertRuleResource resources by Watcher
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 */
export const AlertRuleResourcesListByParent =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AlertRuleResourcesListByParentInput,
    outputSchema: AlertRuleResourcesListByParentOutput,
  }));
// Input Schema
export interface HealthValidationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  healthValidationName: string;
}
export const HealthValidationsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    healthValidationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/healthValidations/{healthValidationName}",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<HealthValidationsGetInput>;

// Output Schema
export interface HealthValidationsGetOutput {
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
export const HealthValidationsGetOutput =
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
  }) as unknown as Schema.Codec<HealthValidationsGetOutput>;

// The operation
/**
 * Get a HealthValidation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param healthValidationName - The health validation resource name.
 */
export const HealthValidationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: HealthValidationsGetInput,
  outputSchema: HealthValidationsGetOutput,
}));
// Input Schema
export interface HealthValidationsListByParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
}
export const HealthValidationsListByParentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/healthValidations",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<HealthValidationsListByParentInput>;

// Output Schema
export interface HealthValidationsListByParentOutput {
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
export const HealthValidationsListByParentOutput =
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
  }) as unknown as Schema.Codec<HealthValidationsListByParentOutput>;

// The operation
/**
 * List HealthValidation resources by Watcher
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 */
export const HealthValidationsListByParent =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: HealthValidationsListByParentInput,
    outputSchema: HealthValidationsListByParentOutput,
  }));
// Input Schema
export interface HealthValidationsStartValidationInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  healthValidationName: string;
}
export const HealthValidationsStartValidationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    healthValidationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/healthValidations/{healthValidationName}/startValidation",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<HealthValidationsStartValidationInput>;

// Output Schema
export interface HealthValidationsStartValidationOutput {
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
export const HealthValidationsStartValidationOutput =
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
  }) as unknown as Schema.Codec<HealthValidationsStartValidationOutput>;

// The operation
/**
 * Starts health validation for a watcher.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param healthValidationName - The health validation resource name.
 */
export const HealthValidationsStartValidation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: HealthValidationsStartValidationInput,
    outputSchema: HealthValidationsStartValidationOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DatabaseWatcher/operations",
    apiVersion: "2025-01-02",
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
export interface SharedPrivateLinkResourcesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  sharedPrivateLinkResourceName: string;
  properties?: {
    privateLinkResourceId: string;
    groupId: string;
    requestMessage: string;
    dnsZone?: string;
    status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const SharedPrivateLinkResourcesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateLinkResourceId: Schema.String,
        groupId: Schema.String,
        requestMessage: Schema.String,
        dnsZone: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals(["Pending", "Approved", "Rejected", "Disconnected"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<SharedPrivateLinkResourcesCreateInput>;

// Output Schema
export interface SharedPrivateLinkResourcesCreateOutput {
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
export const SharedPrivateLinkResourcesCreateOutput =
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
  }) as unknown as Schema.Codec<SharedPrivateLinkResourcesCreateOutput>;

// The operation
/**
 * Create a SharedPrivateLinkResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param sharedPrivateLinkResourceName - The Shared Private Link resource name.
 */
export const SharedPrivateLinkResourcesCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SharedPrivateLinkResourcesCreateInput,
    outputSchema: SharedPrivateLinkResourcesCreateOutput,
  }));
// Input Schema
export interface SharedPrivateLinkResourcesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  sharedPrivateLinkResourceName: string;
}
export const SharedPrivateLinkResourcesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<SharedPrivateLinkResourcesDeleteInput>;

// Output Schema
export type SharedPrivateLinkResourcesDeleteOutput = void;
export const SharedPrivateLinkResourcesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SharedPrivateLinkResourcesDeleteOutput>;

// The operation
/**
 * Delete a SharedPrivateLinkResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param sharedPrivateLinkResourceName - The Shared Private Link resource name.
 */
export const SharedPrivateLinkResourcesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SharedPrivateLinkResourcesDeleteInput,
    outputSchema: SharedPrivateLinkResourcesDeleteOutput,
  }));
// Input Schema
export interface SharedPrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  sharedPrivateLinkResourceName: string;
}
export const SharedPrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<SharedPrivateLinkResourcesGetInput>;

// Output Schema
export interface SharedPrivateLinkResourcesGetOutput {
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
export const SharedPrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<SharedPrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get a SharedPrivateLinkResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param sharedPrivateLinkResourceName - The Shared Private Link resource name.
 */
export const SharedPrivateLinkResourcesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SharedPrivateLinkResourcesGetInput,
    outputSchema: SharedPrivateLinkResourcesGetOutput,
  }));
// Input Schema
export interface SharedPrivateLinkResourcesListByWatcherInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
}
export const SharedPrivateLinkResourcesListByWatcherInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/sharedPrivateLinkResources",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<SharedPrivateLinkResourcesListByWatcherInput>;

// Output Schema
export interface SharedPrivateLinkResourcesListByWatcherOutput {
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
export const SharedPrivateLinkResourcesListByWatcherOutput =
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
  }) as unknown as Schema.Codec<SharedPrivateLinkResourcesListByWatcherOutput>;

// The operation
/**
 * List SharedPrivateLinkResource resources by Watcher
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 */
export const SharedPrivateLinkResourcesListByWatcher =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SharedPrivateLinkResourcesListByWatcherInput,
    outputSchema: SharedPrivateLinkResourcesListByWatcherOutput,
  }));
// Input Schema
export interface TargetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  targetName: string;
  properties?: {
    targetType: string;
    targetAuthenticationType: "Aad" | "Sql";
    targetVault?: {
      akvResourceId?: string;
      akvTargetUser?: string;
      akvTargetPassword?: string | Redacted.Redacted<string>;
    };
    connectionServerName: string;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const TargetsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetType: Schema.String,
        targetAuthenticationType: Schema.Literals(["Aad", "Sql"]),
        targetVault: Schema.optional(
          Schema.Struct({
            akvResourceId: Schema.optional(Schema.String),
            akvTargetUser: Schema.optional(Schema.String),
            akvTargetPassword: Schema.optional(SensitiveString),
          }),
        ),
        connectionServerName: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/targets/{targetName}",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<TargetsCreateOrUpdateInput>;

// Output Schema
export interface TargetsCreateOrUpdateOutput {
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
export const TargetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TargetsCreateOrUpdateOutput>;

// The operation
/**
 * Create a Target
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param targetName - The target resource name.
 */
export const TargetsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TargetsCreateOrUpdateInput,
  outputSchema: TargetsCreateOrUpdateOutput,
}));
// Input Schema
export interface TargetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  targetName: string;
}
export const TargetsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/targets/{targetName}",
    apiVersion: "2025-01-02",
  }),
) as unknown as Schema.Codec<TargetsDeleteInput>;

// Output Schema
export type TargetsDeleteOutput = void;
export const TargetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TargetsDeleteOutput>;

// The operation
/**
 * Delete a Target
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param targetName - The target resource name.
 */
export const TargetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: TargetsDeleteInput,
  outputSchema: TargetsDeleteOutput,
}));
// Input Schema
export interface TargetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  targetName: string;
}
export const TargetsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/targets/{targetName}",
    apiVersion: "2025-01-02",
  }),
) as unknown as Schema.Codec<TargetsGetInput>;

// Output Schema
export interface TargetsGetOutput {
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
export const TargetsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TargetsGetOutput>;

// The operation
/**
 * Get a Target
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 * @param targetName - The target resource name.
 */
export const TargetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TargetsGetInput,
  outputSchema: TargetsGetOutput,
}));
// Input Schema
export interface TargetsListByWatcherInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
}
export const TargetsListByWatcherInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/targets",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<TargetsListByWatcherInput>;

// Output Schema
export interface TargetsListByWatcherOutput {
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
export const TargetsListByWatcherOutput =
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
  }) as unknown as Schema.Codec<TargetsListByWatcherOutput>;

// The operation
/**
 * List Target resources by Watcher
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 */
export const TargetsListByWatcher = /*@__PURE__*/ API.make(() => ({
  inputSchema: TargetsListByWatcherInput,
  outputSchema: TargetsListByWatcherOutput,
}));
// Input Schema
export interface WatchersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  properties?: {
    datastore?: {
      adxClusterResourceId?: string;
      kustoClusterDisplayName?: string;
      kustoClusterUri: string;
      kustoDataIngestionUri: string;
      kustoDatabaseName: string;
      kustoManagementUrl: string;
      kustoOfferingType: "adx" | "free" | "fabric";
    };
    status?: "Starting" | "Running" | "Stopping" | "Stopped" | "Deleting";
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    defaultAlertRuleIdentityResourceId?: string;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const WatchersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        datastore: Schema.optional(
          Schema.Struct({
            adxClusterResourceId: Schema.optional(Schema.String),
            kustoClusterDisplayName: Schema.optional(Schema.String),
            kustoClusterUri: Schema.String,
            kustoDataIngestionUri: Schema.String,
            kustoDatabaseName: Schema.String,
            kustoManagementUrl: Schema.String,
            kustoOfferingType: Schema.Literals(["adx", "free", "fabric"]),
          }),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Starting",
            "Running",
            "Stopping",
            "Stopped",
            "Deleting",
          ]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        defaultAlertRuleIdentityResourceId: Schema.optional(Schema.String),
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
          "SystemAssigned, UserAssigned",
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<WatchersCreateOrUpdateInput>;

// Output Schema
export interface WatchersCreateOrUpdateOutput {
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
export const WatchersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WatchersCreateOrUpdateOutput>;

// The operation
/**
 * Create a Watcher
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 */
export const WatchersCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchersCreateOrUpdateInput,
  outputSchema: WatchersCreateOrUpdateOutput,
}));
// Input Schema
export interface WatchersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
}
export const WatchersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}",
    apiVersion: "2025-01-02",
  }),
) as unknown as Schema.Codec<WatchersDeleteInput>;

// Output Schema
export type WatchersDeleteOutput = void;
export const WatchersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WatchersDeleteOutput>;

// The operation
/**
 * Delete a Watcher
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 */
export const WatchersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchersDeleteInput,
  outputSchema: WatchersDeleteOutput,
}));
// Input Schema
export interface WatchersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
}
export const WatchersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}",
    apiVersion: "2025-01-02",
  }),
) as unknown as Schema.Codec<WatchersGetInput>;

// Output Schema
export interface WatchersGetOutput {
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
export const WatchersGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WatchersGetOutput>;

// The operation
/**
 * Get a Watcher
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 */
export const WatchersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchersGetInput,
  outputSchema: WatchersGetOutput,
}));
// Input Schema
export interface WatchersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const WatchersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<WatchersListByResourceGroupInput>;

// Output Schema
export interface WatchersListByResourceGroupOutput {
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
export const WatchersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<WatchersListByResourceGroupOutput>;

// The operation
/**
 * List Watcher resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WatchersListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchersListByResourceGroupInput,
  outputSchema: WatchersListByResourceGroupOutput,
}));
// Input Schema
export interface WatchersListBySubscriptionInput {
  subscriptionId: string;
}
export const WatchersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DatabaseWatcher/watchers",
      apiVersion: "2025-01-02",
    }),
  ) as unknown as Schema.Codec<WatchersListBySubscriptionInput>;

// Output Schema
export interface WatchersListBySubscriptionOutput {
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
export const WatchersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<WatchersListBySubscriptionOutput>;

// The operation
/**
 * List Watcher resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const WatchersListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchersListBySubscriptionInput,
  outputSchema: WatchersListBySubscriptionOutput,
}));
// Input Schema
export interface WatchersStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
}
export const WatchersStartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/start",
    apiVersion: "2025-01-02",
  }),
) as unknown as Schema.Codec<WatchersStartInput>;

// Output Schema
export interface WatchersStartOutput {
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
export const WatchersStartOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WatchersStartOutput>;

// The operation
/**
 * The action to start monitoring all targets configured for a database watcher.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 */
export const WatchersStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchersStartInput,
  outputSchema: WatchersStartOutput,
}));
// Input Schema
export interface WatchersStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
}
export const WatchersStopInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}/stop",
    apiVersion: "2025-01-02",
  }),
) as unknown as Schema.Codec<WatchersStopInput>;

// Output Schema
export interface WatchersStopOutput {
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
export const WatchersStopOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WatchersStopOutput>;

// The operation
/**
 * The action to stop monitoring all targets configured for a database watcher.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 */
export const WatchersStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchersStopInput,
  outputSchema: WatchersStopOutput,
}));
// Input Schema
export interface WatchersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  watcherName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  properties?: {
    datastore?: {
      adxClusterResourceId?: string;
      kustoClusterDisplayName?: string;
      kustoClusterUri?: string;
      kustoDataIngestionUri?: string;
      kustoDatabaseName?: string;
      kustoManagementUrl?: string;
      kustoOfferingType?: "adx" | "free" | "fabric";
    };
    defaultAlertRuleIdentityResourceId?: string;
  };
}
export const WatchersUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned, UserAssigned",
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      datastore: Schema.optional(
        Schema.Struct({
          adxClusterResourceId: Schema.optional(Schema.String),
          kustoClusterDisplayName: Schema.optional(Schema.String),
          kustoClusterUri: Schema.optional(Schema.String),
          kustoDataIngestionUri: Schema.optional(Schema.String),
          kustoDatabaseName: Schema.optional(Schema.String),
          kustoManagementUrl: Schema.optional(Schema.String),
          kustoOfferingType: Schema.optional(
            Schema.Literals(["adx", "free", "fabric"]),
          ),
        }),
      ),
      defaultAlertRuleIdentityResourceId: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DatabaseWatcher/watchers/{watcherName}",
    apiVersion: "2025-01-02",
  }),
) as unknown as Schema.Codec<WatchersUpdateInput>;

// Output Schema
export interface WatchersUpdateOutput {
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
export const WatchersUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WatchersUpdateOutput>;

// The operation
/**
 * Update a Watcher
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param watcherName - The database watcher name.
 */
export const WatchersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchersUpdateInput,
  outputSchema: WatchersUpdateOutput,
}));
