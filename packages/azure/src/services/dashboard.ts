/**
 * Azure Dashboard API
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/dashboards/{dashboardName}",
    apiVersion: "2025-08-01",
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
 * Get the properties of a specific dashboard for grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the Azure Managed Dashboard.
 */
export const DashboardsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DashboardsGetInput,
  outputSchema: DashboardsGetOutput,
}));
// Input Schema
export interface DashboardsListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DashboardsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/dashboards",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<DashboardsListInput>;

// Output Schema
export interface DashboardsListOutput {
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
export const DashboardsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DashboardsListOutput>;

// The operation
/**
 * List all resources of dashboards under the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DashboardsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DashboardsListInput,
  outputSchema: DashboardsListOutput,
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
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Dashboard/dashboards",
      apiVersion: "2025-08-01",
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
 * List all resources of dashboards under the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DashboardsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DashboardsListBySubscriptionInput,
    outputSchema: DashboardsListBySubscriptionOutput,
  }));
// Input Schema
export interface GrafanaCheckEnterpriseDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const GrafanaCheckEnterpriseDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/checkEnterpriseDetails",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<GrafanaCheckEnterpriseDetailsInput>;

// Output Schema
export interface GrafanaCheckEnterpriseDetailsOutput {
  saasSubscriptionDetails?: {
    planId?: string;
    offerId?: string;
    publisherId?: string;
    term?: { termUnit?: string; startDate?: string; endDate?: string };
  };
  marketplaceTrialQuota?: {
    availablePromotion?: "None" | "FreeTrial";
    grafanaResourceId?: string;
    trialStartAt?: string;
    trialEndAt?: string;
  };
}
export const GrafanaCheckEnterpriseDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    saasSubscriptionDetails: Schema.optional(
      Schema.Struct({
        planId: Schema.optional(Schema.String),
        offerId: Schema.optional(Schema.String),
        publisherId: Schema.optional(Schema.String),
        term: Schema.optional(
          Schema.Struct({
            termUnit: Schema.optional(Schema.String),
            startDate: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    marketplaceTrialQuota: Schema.optional(
      Schema.Struct({
        availablePromotion: Schema.optional(
          Schema.Literals(["None", "FreeTrial"]),
        ),
        grafanaResourceId: Schema.optional(Schema.String),
        trialStartAt: Schema.optional(Schema.String),
        trialEndAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GrafanaCheckEnterpriseDetailsOutput>;

// The operation
/**
 * Retrieve enterprise add-on details information
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const GrafanaCheckEnterpriseDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GrafanaCheckEnterpriseDetailsInput,
    outputSchema: GrafanaCheckEnterpriseDetailsOutput,
  }));
// Input Schema
export interface GrafanaCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
    grafanaVersion?: string;
    endpoint?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
    zoneRedundancy?: "Disabled" | "Enabled";
    apiKey?: "Disabled" | "Enabled";
    creatorCanAdmin?: "Disabled" | "Enabled";
    deterministicOutboundIP?: "Disabled" | "Enabled";
    outboundIPs?: string[];
    privateEndpointConnections?: {
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
    autoGeneratedDomainNameLabelScope?: "TenantReuse";
    grafanaIntegrations?: {
      azureMonitorWorkspaceIntegrations?: {
        azureMonitorWorkspaceResourceId?: string;
      }[];
    };
    enterpriseConfigurations?: {
      marketplacePlanId?: string;
      marketplaceAutoRenew?: "Disabled" | "Enabled";
    };
    grafanaConfigurations?: {
      smtp?: {
        enabled?: boolean;
        host?: string;
        user?: string;
        password?: string | Redacted.Redacted<string>;
        fromAddress?: string;
        fromName?: string;
        startTLSPolicy?:
          | "OpportunisticStartTLS"
          | "MandatoryStartTLS"
          | "NoStartTLS";
        skipVerify?: boolean;
      };
      snapshots?: { externalEnabled?: boolean };
      users?: { viewersCanEdit?: boolean; editorsCanAdmin?: boolean };
      security?: { csrfAlwaysCheck?: boolean };
      unifiedAlertingScreenshots?: { captureEnabled?: boolean };
    };
    grafanaPlugins?: Record<string, { pluginId?: string }>;
    grafanaMajorVersion?: string;
  };
  sku?: { name: string; size?: "X1" | "X2" };
  tags?: Record<string, string>;
  location?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
}
export const GrafanaCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Updating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
          "Deleted",
          "NotSpecified",
        ]),
      ),
      grafanaVersion: Schema.optional(Schema.String),
      endpoint: Schema.optional(Schema.String),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      zoneRedundancy: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      apiKey: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      creatorCanAdmin: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      deterministicOutboundIP: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      outboundIPs: Schema.optional(Schema.Array(Schema.String)),
      privateEndpointConnections: Schema.optional(
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
      autoGeneratedDomainNameLabelScope: Schema.optional(
        Schema.Literals(["TenantReuse"]),
      ),
      grafanaIntegrations: Schema.optional(
        Schema.Struct({
          azureMonitorWorkspaceIntegrations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                azureMonitorWorkspaceResourceId: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      enterpriseConfigurations: Schema.optional(
        Schema.Struct({
          marketplacePlanId: Schema.optional(Schema.String),
          marketplaceAutoRenew: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
        }),
      ),
      grafanaConfigurations: Schema.optional(
        Schema.Struct({
          smtp: Schema.optional(
            Schema.Struct({
              enabled: Schema.optional(Schema.Boolean),
              host: Schema.optional(Schema.String),
              user: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
              fromAddress: Schema.optional(Schema.String),
              fromName: Schema.optional(Schema.String),
              startTLSPolicy: Schema.optional(
                Schema.Literals([
                  "OpportunisticStartTLS",
                  "MandatoryStartTLS",
                  "NoStartTLS",
                ]),
              ),
              skipVerify: Schema.optional(Schema.Boolean),
            }),
          ),
          snapshots: Schema.optional(
            Schema.Struct({
              externalEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
          users: Schema.optional(
            Schema.Struct({
              viewersCanEdit: Schema.optional(Schema.Boolean),
              editorsCanAdmin: Schema.optional(Schema.Boolean),
            }),
          ),
          security: Schema.optional(
            Schema.Struct({
              csrfAlwaysCheck: Schema.optional(Schema.Boolean),
            }),
          ),
          unifiedAlertingScreenshots: Schema.optional(
            Schema.Struct({
              captureEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      grafanaPlugins: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            pluginId: Schema.optional(Schema.String),
          }),
        ),
      ),
      grafanaMajorVersion: Schema.optional(Schema.String),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      size: Schema.optional(Schema.Literals(["X1", "X2"])),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      userAssignedIdentities: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<GrafanaCreateInput>;

// Output Schema
export interface GrafanaCreateOutput {
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
export const GrafanaCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GrafanaCreateOutput>;

// The operation
/**
 * Create or update a workspace for Grafana resource. This API is idempotent, so user can either create a new grafana or update an existing grafana.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const GrafanaCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: GrafanaCreateInput,
  outputSchema: GrafanaCreateOutput,
}));
// Input Schema
export interface GrafanaDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const GrafanaDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<GrafanaDeleteInput>;

// Output Schema
export type GrafanaDeleteOutput = void;
export const GrafanaDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GrafanaDeleteOutput>;

// The operation
/**
 * Delete a workspace for Grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const GrafanaDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: GrafanaDeleteInput,
  outputSchema: GrafanaDeleteOutput,
}));
// Input Schema
export interface GrafanaFetchAvailablePluginsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const GrafanaFetchAvailablePluginsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/fetchAvailablePlugins",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<GrafanaFetchAvailablePluginsInput>;

// Output Schema
export interface GrafanaFetchAvailablePluginsOutput {
  value?: {
    pluginId?: string;
    name?: string;
    type?: string;
    author?: string;
  }[];
  nextLink?: string;
}
export const GrafanaFetchAvailablePluginsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          pluginId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          author: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GrafanaFetchAvailablePluginsOutput>;

// The operation
/**
 * A synchronous resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const GrafanaFetchAvailablePlugins =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GrafanaFetchAvailablePluginsInput,
    outputSchema: GrafanaFetchAvailablePluginsOutput,
  }));
// Input Schema
export interface GrafanaGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const GrafanaGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<GrafanaGetInput>;

// Output Schema
export interface GrafanaGetOutput {
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
export const GrafanaGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GrafanaGetOutput>;

// The operation
/**
 * Get the properties of a specific workspace for Grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const GrafanaGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: GrafanaGetInput,
  outputSchema: GrafanaGetOutput,
}));
// Input Schema
export interface GrafanaListInput {
  subscriptionId: string;
}
export const GrafanaListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Dashboard/grafana",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<GrafanaListInput>;

// Output Schema
export interface GrafanaListOutput {
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
export const GrafanaListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<GrafanaListOutput>;

// The operation
/**
 * List all resources of workspaces for Grafana under the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const GrafanaList = /*@__PURE__*/ API.make(() => ({
  inputSchema: GrafanaListInput,
  outputSchema: GrafanaListOutput,
}));
// Input Schema
export interface GrafanaListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const GrafanaListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<GrafanaListByResourceGroupInput>;

// Output Schema
export interface GrafanaListByResourceGroupOutput {
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
export const GrafanaListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<GrafanaListByResourceGroupOutput>;

// The operation
/**
 * List all resources of workspaces for Grafana under the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const GrafanaListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: GrafanaListByResourceGroupInput,
  outputSchema: GrafanaListByResourceGroupOutput,
}));
// Input Schema
export interface GrafanaUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sku?: { name: string; size?: "X1" | "X2" };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  tags?: Record<string, string>;
  properties?: {
    zoneRedundancy?: "Disabled" | "Enabled";
    apiKey?: "Disabled" | "Enabled";
    creatorCanAdmin?: "Disabled" | "Enabled";
    deterministicOutboundIP?: "Disabled" | "Enabled";
    publicNetworkAccess?: "Enabled" | "Disabled";
    grafanaIntegrations?: {
      azureMonitorWorkspaceIntegrations?: {
        azureMonitorWorkspaceResourceId?: string;
      }[];
    };
    enterpriseConfigurations?: {
      marketplacePlanId?: string;
      marketplaceAutoRenew?: "Disabled" | "Enabled";
    };
    grafanaConfigurations?: {
      smtp?: {
        enabled?: boolean;
        host?: string;
        user?: string;
        password?: string | Redacted.Redacted<string>;
        fromAddress?: string;
        fromName?: string;
        startTLSPolicy?:
          | "OpportunisticStartTLS"
          | "MandatoryStartTLS"
          | "NoStartTLS";
        skipVerify?: boolean;
      };
      snapshots?: { externalEnabled?: boolean };
      users?: { viewersCanEdit?: boolean; editorsCanAdmin?: boolean };
      security?: { csrfAlwaysCheck?: boolean };
      unifiedAlertingScreenshots?: { captureEnabled?: boolean };
    };
    grafanaPlugins?: Record<string, { pluginId?: string }>;
    grafanaMajorVersion?: string;
  };
}
export const GrafanaUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      size: Schema.optional(Schema.Literals(["X1", "X2"])),
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
        "SystemAssigned,UserAssigned",
      ]),
      userAssignedIdentities: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      zoneRedundancy: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      apiKey: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      creatorCanAdmin: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      deterministicOutboundIP: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      grafanaIntegrations: Schema.optional(
        Schema.Struct({
          azureMonitorWorkspaceIntegrations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                azureMonitorWorkspaceResourceId: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      enterpriseConfigurations: Schema.optional(
        Schema.Struct({
          marketplacePlanId: Schema.optional(Schema.String),
          marketplaceAutoRenew: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
        }),
      ),
      grafanaConfigurations: Schema.optional(
        Schema.Struct({
          smtp: Schema.optional(
            Schema.Struct({
              enabled: Schema.optional(Schema.Boolean),
              host: Schema.optional(Schema.String),
              user: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
              fromAddress: Schema.optional(Schema.String),
              fromName: Schema.optional(Schema.String),
              startTLSPolicy: Schema.optional(
                Schema.Literals([
                  "OpportunisticStartTLS",
                  "MandatoryStartTLS",
                  "NoStartTLS",
                ]),
              ),
              skipVerify: Schema.optional(Schema.Boolean),
            }),
          ),
          snapshots: Schema.optional(
            Schema.Struct({
              externalEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
          users: Schema.optional(
            Schema.Struct({
              viewersCanEdit: Schema.optional(Schema.Boolean),
              editorsCanAdmin: Schema.optional(Schema.Boolean),
            }),
          ),
          security: Schema.optional(
            Schema.Struct({
              csrfAlwaysCheck: Schema.optional(Schema.Boolean),
            }),
          ),
          unifiedAlertingScreenshots: Schema.optional(
            Schema.Struct({
              captureEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      grafanaPlugins: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            pluginId: Schema.optional(Schema.String),
          }),
        ),
      ),
      grafanaMajorVersion: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<GrafanaUpdateInput>;

// Output Schema
export interface GrafanaUpdateOutput {
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
export const GrafanaUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GrafanaUpdateOutput>;

// The operation
/**
 * Update a workspace for Grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const GrafanaUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: GrafanaUpdateInput,
  outputSchema: GrafanaUpdateOutput,
}));
// Input Schema
export interface IntegrationFabricsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationFabricName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
    targetResourceId?: string;
    dataSourceResourceId?: string;
    scenarios?: string[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const IntegrationFabricsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationFabricName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleted",
            "NotSpecified",
          ]),
        ),
        targetResourceId: Schema.optional(Schema.String),
        dataSourceResourceId: Schema.optional(Schema.String),
        scenarios: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/integrationFabrics/{integrationFabricName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<IntegrationFabricsCreateInput>;

// Output Schema
export interface IntegrationFabricsCreateOutput {
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
export const IntegrationFabricsCreateOutput =
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
  }) as unknown as Schema.Codec<IntegrationFabricsCreateOutput>;

// The operation
/**
 * Create a IntegrationFabric
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param integrationFabricName - The integration fabric name of Azure Managed Grafana.
 */
export const IntegrationFabricsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IntegrationFabricsCreateInput,
  outputSchema: IntegrationFabricsCreateOutput,
}));
// Input Schema
export interface IntegrationFabricsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationFabricName: string;
}
export const IntegrationFabricsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/integrationFabrics/{integrationFabricName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<IntegrationFabricsDeleteInput>;

// Output Schema
export type IntegrationFabricsDeleteOutput = void;
export const IntegrationFabricsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IntegrationFabricsDeleteOutput>;

// The operation
/**
 * Delete a IntegrationFabric
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param integrationFabricName - The integration fabric name of Azure Managed Grafana.
 */
export const IntegrationFabricsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IntegrationFabricsDeleteInput,
  outputSchema: IntegrationFabricsDeleteOutput,
}));
// Input Schema
export interface IntegrationFabricsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationFabricName: string;
}
export const IntegrationFabricsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/integrationFabrics/{integrationFabricName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<IntegrationFabricsGetInput>;

// Output Schema
export interface IntegrationFabricsGetOutput {
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
export const IntegrationFabricsGetOutput =
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
  }) as unknown as Schema.Codec<IntegrationFabricsGetOutput>;

// The operation
/**
 * Get a IntegrationFabric
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param integrationFabricName - The integration fabric name of Azure Managed Grafana.
 */
export const IntegrationFabricsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IntegrationFabricsGetInput,
  outputSchema: IntegrationFabricsGetOutput,
}));
// Input Schema
export interface IntegrationFabricsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const IntegrationFabricsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/integrationFabrics",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<IntegrationFabricsListInput>;

// Output Schema
export interface IntegrationFabricsListOutput {
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
export const IntegrationFabricsListOutput =
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
  }) as unknown as Schema.Codec<IntegrationFabricsListOutput>;

// The operation
/**
 * List IntegrationFabric resources by ManagedGrafana
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const IntegrationFabricsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: IntegrationFabricsListInput,
  outputSchema: IntegrationFabricsListOutput,
}));
// Input Schema
export interface IntegrationFabricsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  integrationFabricName: string;
  tags?: Record<string, string>;
  properties?: { scenarios?: string[] };
}
export const IntegrationFabricsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    integrationFabricName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        scenarios: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/integrationFabrics/{integrationFabricName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<IntegrationFabricsUpdateInput>;

// Output Schema
export interface IntegrationFabricsUpdateOutput {
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
export const IntegrationFabricsUpdateOutput =
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
  }) as unknown as Schema.Codec<IntegrationFabricsUpdateOutput>;

// The operation
/**
 * Update a IntegrationFabric
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param integrationFabricName - The integration fabric name of Azure Managed Grafana.
 */
export const IntegrationFabricsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IntegrationFabricsUpdateInput,
  outputSchema: IntegrationFabricsUpdateOutput,
}));
// Input Schema
export interface ManagedDashboardsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dashboardName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
  };
  tags?: Record<string, string>;
  location: string;
}
export const ManagedDashboardsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dashboardName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleted",
            "NotSpecified",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/dashboards/{dashboardName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ManagedDashboardsCreateInput>;

// Output Schema
export interface ManagedDashboardsCreateOutput {
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
export const ManagedDashboardsCreateOutput =
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
  }) as unknown as Schema.Codec<ManagedDashboardsCreateOutput>;

// The operation
/**
 * Create or update a dashboard for grafana resource. This API is idempotent, so user can either create a new dashboard or update an existing dashboard.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the Azure Managed Dashboard.
 */
export const ManagedDashboardsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedDashboardsCreateInput,
  outputSchema: ManagedDashboardsCreateOutput,
}));
// Input Schema
export interface ManagedDashboardsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dashboardName: string;
}
export const ManagedDashboardsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dashboardName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/dashboards/{dashboardName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ManagedDashboardsDeleteInput>;

// Output Schema
export type ManagedDashboardsDeleteOutput = void;
export const ManagedDashboardsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedDashboardsDeleteOutput>;

// The operation
/**
 * Delete a dashboard for Grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the Azure Managed Dashboard.
 */
export const ManagedDashboardsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedDashboardsDeleteInput,
  outputSchema: ManagedDashboardsDeleteOutput,
}));
// Input Schema
export interface ManagedDashboardsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dashboardName: string;
  tags?: Record<string, string>;
}
export const ManagedDashboardsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dashboardName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/dashboards/{dashboardName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ManagedDashboardsUpdateInput>;

// Output Schema
export interface ManagedDashboardsUpdateOutput {
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
export const ManagedDashboardsUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedDashboardsUpdateOutput>;

// The operation
/**
 * Update a dashboard for Grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dashboardName - The name of the Azure Managed Dashboard.
 */
export const ManagedDashboardsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedDashboardsUpdateInput,
  outputSchema: ManagedDashboardsUpdateOutput,
}));
// Input Schema
export interface ManagedPrivateEndpointsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  managedPrivateEndpointName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "NotSpecified";
    privateLinkResourceId?: string;
    privateLinkResourceRegion?: string;
    groupIds?: string[];
    requestMessage?: string;
    connectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
    };
    privateLinkServiceUrl?: string;
    privateLinkServicePrivateIP?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ManagedPrivateEndpointsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleted",
            "NotSpecified",
          ]),
        ),
        privateLinkResourceId: Schema.optional(Schema.String),
        privateLinkResourceRegion: Schema.optional(Schema.String),
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        requestMessage: Schema.optional(Schema.String),
        connectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceUrl: Schema.optional(Schema.String),
        privateLinkServicePrivateIP: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsCreateInput>;

// Output Schema
export interface ManagedPrivateEndpointsCreateOutput {
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
export const ManagedPrivateEndpointsCreateOutput =
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsCreateOutput>;

// The operation
/**
 * Create or update a managed private endpoint for a grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param managedPrivateEndpointName - The managed private endpoint name of Azure Managed Grafana.
 */
export const ManagedPrivateEndpointsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsCreateInput,
    outputSchema: ManagedPrivateEndpointsCreateOutput,
  }));
// Input Schema
export interface ManagedPrivateEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  managedPrivateEndpointName: string;
}
export const ManagedPrivateEndpointsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsDeleteInput>;

// Output Schema
export type ManagedPrivateEndpointsDeleteOutput = void;
export const ManagedPrivateEndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedPrivateEndpointsDeleteOutput>;

// The operation
/**
 * Delete a managed private endpoint for a grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param managedPrivateEndpointName - The managed private endpoint name of Azure Managed Grafana.
 */
export const ManagedPrivateEndpointsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsDeleteInput,
    outputSchema: ManagedPrivateEndpointsDeleteOutput,
  }));
// Input Schema
export interface ManagedPrivateEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  managedPrivateEndpointName: string;
}
export const ManagedPrivateEndpointsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsGetInput>;

// Output Schema
export interface ManagedPrivateEndpointsGetOutput {
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
export const ManagedPrivateEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsGetOutput>;

// The operation
/**
 * Get a specific managed private endpoint of a grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param managedPrivateEndpointName - The managed private endpoint name of Azure Managed Grafana.
 */
export const ManagedPrivateEndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedPrivateEndpointsGetInput,
  outputSchema: ManagedPrivateEndpointsGetOutput,
}));
// Input Schema
export interface ManagedPrivateEndpointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const ManagedPrivateEndpointsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/managedPrivateEndpoints",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsListInput>;

// Output Schema
export interface ManagedPrivateEndpointsListOutput {
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
export const ManagedPrivateEndpointsListOutput =
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsListOutput>;

// The operation
/**
 * List all managed private endpoints of a grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const ManagedPrivateEndpointsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedPrivateEndpointsListInput,
  outputSchema: ManagedPrivateEndpointsListOutput,
}));
// Input Schema
export interface ManagedPrivateEndpointsRefreshInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const ManagedPrivateEndpointsRefreshInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/refreshManagedPrivateEndpoints",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsRefreshInput>;

// Output Schema
export type ManagedPrivateEndpointsRefreshOutput = void;
export const ManagedPrivateEndpointsRefreshOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedPrivateEndpointsRefreshOutput>;

// The operation
/**
 * Refresh and sync managed private endpoints of a grafana resource to latest state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const ManagedPrivateEndpointsRefresh =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsRefreshInput,
    outputSchema: ManagedPrivateEndpointsRefreshOutput,
  }));
// Input Schema
export interface ManagedPrivateEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  managedPrivateEndpointName: string;
  tags?: Record<string, string>;
}
export const ManagedPrivateEndpointsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsUpdateInput>;

// Output Schema
export interface ManagedPrivateEndpointsUpdateOutput {
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
export const ManagedPrivateEndpointsUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsUpdateOutput>;

// The operation
/**
 * Update a managed private endpoint for an existing grafana resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param managedPrivateEndpointName - The managed private endpoint name of Azure Managed Grafana.
 */
export const ManagedPrivateEndpointsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsUpdateInput,
    outputSchema: ManagedPrivateEndpointsUpdateOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Dashboard/operations",
    apiVersion: "2025-08-01",
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
export interface PrivateEndpointConnectionsApproveInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    groupIds?: string[];
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
}
export const PrivateEndpointConnectionsApproveInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(
            Schema.Literals(["Pending", "Approved", "Rejected"]),
          ),
          description: Schema.optional(Schema.String),
          actionsRequired: Schema.optional(Schema.String),
        }),
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsApproveInput>;

// Output Schema
export interface PrivateEndpointConnectionsApproveOutput {
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
export const PrivateEndpointConnectionsApproveOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsApproveOutput>;

// The operation
/**
 * Manual approve private endpoint connection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param privateEndpointConnectionName - The private endpoint connection name of Azure Managed Grafana.
 */
export const PrivateEndpointConnectionsApprove =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsApproveInput,
    outputSchema: PrivateEndpointConnectionsApproveOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Delete private endpoint connection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param privateEndpointConnectionName - The private endpoint connection name of Azure Managed Grafana.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
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
export const PrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Get private endpoint connections.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 * @param privateEndpointConnectionName - The private endpoint connection name of Azure Managed Grafana.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/privateEndpointConnections",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
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
export const PrivateEndpointConnectionsListOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * Get private endpoint connection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
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
export const PrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get specific private link resource information for this grafana resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Dashboard/grafana/{workspaceName}/privateLinkResources",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkResourcesListOutput {
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
export const PrivateLinkResourcesListOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListOutput>;

// The operation
/**
 * List all private link resources information for this grafana resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The workspace name of Azure Managed Grafana.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesListInput,
  outputSchema: PrivateLinkResourcesListOutput,
}));
