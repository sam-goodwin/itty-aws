/**
 * Azure Portal API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DashboardsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dashboardName: string;
  properties?: {
    lenses?: {
      order: number;
      parts: {
        position: {
          x: number;
          y: number;
          rowSpan: number;
          colSpan: number;
          metadata?: unknown;
        };
        metadata?: { type: "Extension/HubsExtension/PartType/MarkdownPart" };
      }[];
      metadata?: unknown;
    }[];
    metadata?: unknown;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const DashboardsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dashboardName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        lenses: Schema.optional(
          Schema.Array(
            Schema.Struct({
              order: Schema.Number,
              parts: Schema.Array(
                Schema.Struct({
                  position: Schema.Struct({
                    x: Schema.Number,
                    y: Schema.Number,
                    rowSpan: Schema.Number,
                    colSpan: Schema.Number,
                    metadata: Schema.optional(Schema.Unknown),
                  }),
                  metadata: Schema.optional(
                    Schema.Struct({
                      type: Schema.Literals([
                        "Extension/HubsExtension/PartType/MarkdownPart",
                      ]),
                    }),
                  ),
                }),
              ),
              metadata: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        metadata: Schema.optional(Schema.Unknown),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards/{dashboardName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<DashboardsCreateOrUpdateInput>;

// Output Schema
export interface DashboardsCreateOrUpdateOutput {
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
export const DashboardsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DashboardsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Dashboard.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the dashboard.
 */
export const DashboardsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DashboardsCreateOrUpdateInput,
  outputSchema: DashboardsCreateOrUpdateOutput,
}));
// Input Schema
export interface DashboardsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dashboardName: string;
}
export const DashboardsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  dashboardName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards/{dashboardName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<DashboardsDeleteInput>;

// Output Schema
export type DashboardsDeleteOutput = void;
export const DashboardsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DashboardsDeleteOutput>;

// The operation
/**
 * Deletes the Dashboard.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the dashboard.
 */
export const DashboardsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DashboardsDeleteInput,
  outputSchema: DashboardsDeleteOutput,
}));
// Input Schema
export interface DashboardsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dashboardName: string;
}
export const DashboardsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  dashboardName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards/{dashboardName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<DashboardsGetInput>;

// Output Schema
export interface DashboardsGetOutput {
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
export const DashboardsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DashboardsGetOutput>;

// The operation
/**
 * Gets the Dashboard.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the dashboard.
 */
export const DashboardsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DashboardsGetInput,
  outputSchema: DashboardsGetOutput,
}));
// Input Schema
export interface DashboardsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DashboardsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<DashboardsListByResourceGroupInput>;

// Output Schema
export interface DashboardsListByResourceGroupOutput {
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
export const DashboardsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DashboardsListByResourceGroupOutput>;

// The operation
/**
 * Gets all the Dashboards within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DashboardsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DashboardsListByResourceGroupInput,
    outputSchema: DashboardsListByResourceGroupOutput,
  }));
// Input Schema
export interface DashboardsListBySubscriptionInput {
  subscriptionId: string;
}
export const DashboardsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Portal/dashboards",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<DashboardsListBySubscriptionInput>;

// Output Schema
export interface DashboardsListBySubscriptionOutput {
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
export const DashboardsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<DashboardsListBySubscriptionOutput>;

// The operation
/**
 * Gets all the dashboards within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const DashboardsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DashboardsListBySubscriptionInput,
    outputSchema: DashboardsListBySubscriptionOutput,
  }));
// Input Schema
export interface DashboardsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dashboardName: string;
  properties?: {
    lenses?: {
      order: number;
      parts: {
        position: {
          x: number;
          y: number;
          rowSpan: number;
          colSpan: number;
          metadata?: unknown;
        };
        metadata?: { type: "Extension/HubsExtension/PartType/MarkdownPart" };
      }[];
      metadata?: unknown;
    }[];
    metadata?: unknown;
  };
  tags?: Record<string, string>;
}
export const DashboardsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  dashboardName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      lenses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            order: Schema.Number,
            parts: Schema.Array(
              Schema.Struct({
                position: Schema.Struct({
                  x: Schema.Number,
                  y: Schema.Number,
                  rowSpan: Schema.Number,
                  colSpan: Schema.Number,
                  metadata: Schema.optional(Schema.Unknown),
                }),
                metadata: Schema.optional(
                  Schema.Struct({
                    type: Schema.Literals([
                      "Extension/HubsExtension/PartType/MarkdownPart",
                    ]),
                  }),
                ),
              }),
            ),
            metadata: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
      metadata: Schema.optional(Schema.Unknown),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards/{dashboardName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<DashboardsUpdateInput>;

// Output Schema
export interface DashboardsUpdateOutput {
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
export const DashboardsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DashboardsUpdateOutput>;

// The operation
/**
 * Updates an existing Dashboard.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the dashboard.
 */
export const DashboardsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DashboardsUpdateInput,
  outputSchema: DashboardsUpdateOutput,
}));
// Input Schema
export interface ListTenantConfigurationViolationsListInput {}
export const ListTenantConfigurationViolationsListInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Portal/listTenantConfigurationViolations",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<ListTenantConfigurationViolationsListInput>;

// Output Schema
export interface ListTenantConfigurationViolationsListOutput {
  value: { id?: string; userId?: string; errorMessage?: string }[];
  nextLink?: string;
}
export const ListTenantConfigurationViolationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        userId: Schema.optional(Schema.String),
        errorMessage: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ListTenantConfigurationViolationsListOutput>;

// The operation
/**
 * Gets list of items that violate tenant's configuration.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ListTenantConfigurationViolationsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ListTenantConfigurationViolationsListInput,
    outputSchema: ListTenantConfigurationViolationsListOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Portal/operations",
    apiVersion: "2026-04-01",
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
export interface TenantConfigurationsCreateInput {
  configurationName: string;
  properties?: {
    enforcePrivateMarkdownStorage?: boolean;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const TenantConfigurationsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        enforcePrivateMarkdownStorage: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Portal/tenantConfigurations/{configurationName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<TenantConfigurationsCreateInput>;

// Output Schema
export interface TenantConfigurationsCreateOutput {
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
export const TenantConfigurationsCreateOutput =
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
  }) as unknown as Schema.Codec<TenantConfigurationsCreateOutput>;

// The operation
/**
 * Create the tenant configuration. If configuration already exists - update it. User has to be a Tenant Admin for this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param configurationName - The name of the Configuration
 */
export const TenantConfigurationsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TenantConfigurationsCreateInput,
  outputSchema: TenantConfigurationsCreateOutput,
}));
// Input Schema
export interface TenantConfigurationsDeleteInput {
  configurationName: string;
}
export const TenantConfigurationsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Portal/tenantConfigurations/{configurationName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<TenantConfigurationsDeleteInput>;

// Output Schema
export type TenantConfigurationsDeleteOutput = void;
export const TenantConfigurationsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TenantConfigurationsDeleteOutput>;

// The operation
/**
 * Delete the tenant configuration. User has to be a Tenant Admin for this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param configurationName - The name of the Configuration
 */
export const TenantConfigurationsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: TenantConfigurationsDeleteInput,
  outputSchema: TenantConfigurationsDeleteOutput,
}));
// Input Schema
export interface TenantConfigurationsGetInput {
  configurationName: string;
}
export const TenantConfigurationsGetInput =
  /*@__PURE__*/ Schema.Struct({
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Portal/tenantConfigurations/{configurationName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<TenantConfigurationsGetInput>;

// Output Schema
export interface TenantConfigurationsGetOutput {
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
export const TenantConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<TenantConfigurationsGetOutput>;

// The operation
/**
 * Gets the tenant configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param configurationName - The name of the Configuration
 */
export const TenantConfigurationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TenantConfigurationsGetInput,
  outputSchema: TenantConfigurationsGetOutput,
}));
// Input Schema
export interface TenantConfigurationsListInput {}
export const TenantConfigurationsListInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Portal/tenantConfigurations",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<TenantConfigurationsListInput>;

// Output Schema
export interface TenantConfigurationsListOutput {
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
export const TenantConfigurationsListOutput =
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
  }) as unknown as Schema.Codec<TenantConfigurationsListOutput>;

// The operation
/**
 * Gets list of the tenant configurations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const TenantConfigurationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: TenantConfigurationsListInput,
  outputSchema: TenantConfigurationsListOutput,
}));
