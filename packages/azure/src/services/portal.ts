/**
 * Azure Portal API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DashboardsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type DashboardsCreateOrUpdateInput =
  typeof DashboardsCreateOrUpdateInput.Type;

// Output Schema
export const DashboardsCreateOrUpdateOutput =
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
export type DashboardsCreateOrUpdateOutput =
  typeof DashboardsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a Dashboard.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the dashboard.
 */
export const DashboardsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DashboardsCreateOrUpdateInput,
    outputSchema: DashboardsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DashboardsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  dashboardName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards/{dashboardName}",
    apiVersion: "2026-04-01",
  }),
);
export type DashboardsDeleteInput = typeof DashboardsDeleteInput.Type;

// Output Schema
export const DashboardsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DashboardsDeleteOutput = typeof DashboardsDeleteOutput.Type;

// The operation
/**
 * Deletes the Dashboard.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the dashboard.
 */
export const DashboardsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DashboardsDeleteInput,
  outputSchema: DashboardsDeleteOutput,
}));
// Input Schema
export const DashboardsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  dashboardName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards/{dashboardName}",
    apiVersion: "2026-04-01",
  }),
);
export type DashboardsGetInput = typeof DashboardsGetInput.Type;

// Output Schema
export const DashboardsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type DashboardsGetOutput = typeof DashboardsGetOutput.Type;

// The operation
/**
 * Gets the Dashboard.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the dashboard.
 */
export const DashboardsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DashboardsGetInput,
  outputSchema: DashboardsGetOutput,
}));
// Input Schema
export const DashboardsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards",
      apiVersion: "2026-04-01",
    }),
  );
export type DashboardsListByResourceGroupInput =
  typeof DashboardsListByResourceGroupInput.Type;

// Output Schema
export const DashboardsListByResourceGroupOutput =
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
export type DashboardsListByResourceGroupOutput =
  typeof DashboardsListByResourceGroupOutput.Type;

// The operation
/**
 * Gets all the Dashboards within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DashboardsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardsListByResourceGroupInput,
    outputSchema: DashboardsListByResourceGroupOutput,
  }));
// Input Schema
export const DashboardsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Portal/dashboards",
      apiVersion: "2026-04-01",
    }),
  );
export type DashboardsListBySubscriptionInput =
  typeof DashboardsListBySubscriptionInput.Type;

// Output Schema
export const DashboardsListBySubscriptionOutput =
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
export type DashboardsListBySubscriptionOutput =
  typeof DashboardsListBySubscriptionOutput.Type;

// The operation
/**
 * Gets all the dashboards within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const DashboardsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DashboardsListBySubscriptionInput,
    outputSchema: DashboardsListBySubscriptionOutput,
  }));
// Input Schema
export const DashboardsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type DashboardsUpdateInput = typeof DashboardsUpdateInput.Type;

// Output Schema
export const DashboardsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type DashboardsUpdateOutput = typeof DashboardsUpdateOutput.Type;

// The operation
/**
 * Updates an existing Dashboard.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the dashboard.
 */
export const DashboardsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DashboardsUpdateInput,
  outputSchema: DashboardsUpdateOutput,
}));
// Input Schema
export const ListTenantConfigurationViolationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Portal/listTenantConfigurationViolations",
      apiVersion: "2026-04-01",
    }),
  );
export type ListTenantConfigurationViolationsListInput =
  typeof ListTenantConfigurationViolationsListInput.Type;

// Output Schema
export const ListTenantConfigurationViolationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        userId: Schema.optional(Schema.String),
        errorMessage: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ListTenantConfigurationViolationsListOutput =
  typeof ListTenantConfigurationViolationsListOutput.Type;

// The operation
/**
 * Gets list of items that violate tenant's configuration.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ListTenantConfigurationViolationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListTenantConfigurationViolationsListInput,
    outputSchema: ListTenantConfigurationViolationsListOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Portal/operations",
    apiVersion: "2026-04-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const TenantConfigurationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type TenantConfigurationsCreateInput =
  typeof TenantConfigurationsCreateInput.Type;

// Output Schema
export const TenantConfigurationsCreateOutput =
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
export type TenantConfigurationsCreateOutput =
  typeof TenantConfigurationsCreateOutput.Type;

// The operation
/**
 * Create the tenant configuration. If configuration already exists - update it. User has to be a Tenant Admin for this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param configurationName - The name of the Configuration
 */
export const TenantConfigurationsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TenantConfigurationsCreateInput,
    outputSchema: TenantConfigurationsCreateOutput,
  }),
);
// Input Schema
export const TenantConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Portal/tenantConfigurations/{configurationName}",
      apiVersion: "2026-04-01",
    }),
  );
export type TenantConfigurationsDeleteInput =
  typeof TenantConfigurationsDeleteInput.Type;

// Output Schema
export const TenantConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TenantConfigurationsDeleteOutput =
  typeof TenantConfigurationsDeleteOutput.Type;

// The operation
/**
 * Delete the tenant configuration. User has to be a Tenant Admin for this operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param configurationName - The name of the Configuration
 */
export const TenantConfigurationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TenantConfigurationsDeleteInput,
    outputSchema: TenantConfigurationsDeleteOutput,
  }),
);
// Input Schema
export const TenantConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Portal/tenantConfigurations/{configurationName}",
      apiVersion: "2026-04-01",
    }),
  );
export type TenantConfigurationsGetInput =
  typeof TenantConfigurationsGetInput.Type;

// Output Schema
export const TenantConfigurationsGetOutput =
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
export type TenantConfigurationsGetOutput =
  typeof TenantConfigurationsGetOutput.Type;

// The operation
/**
 * Gets the tenant configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param configurationName - The name of the Configuration
 */
export const TenantConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TenantConfigurationsGetInput,
    outputSchema: TenantConfigurationsGetOutput,
  }),
);
// Input Schema
export const TenantConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Portal/tenantConfigurations",
      apiVersion: "2026-04-01",
    }),
  );
export type TenantConfigurationsListInput =
  typeof TenantConfigurationsListInput.Type;

// Output Schema
export const TenantConfigurationsListOutput =
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
export type TenantConfigurationsListOutput =
  typeof TenantConfigurationsListOutput.Type;

// The operation
/**
 * Gets list of the tenant configurations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const TenantConfigurationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TenantConfigurationsListInput,
    outputSchema: TenantConfigurationsListOutput,
  }),
);
