/**
 * Azure Datadog API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString, SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface BillingInfoGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const BillingInfoGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/getBillingInfo",
    apiVersion: "2025-06-11",
  }),
) as unknown as Schema.Codec<BillingInfoGetInput>;

// Output Schema
export interface BillingInfoGetOutput {
  marketplaceSaasInfo?: {
    marketplaceSubscriptionId?: string;
    marketplaceName?: string;
    marketplaceStatus?: string;
    billedAzureSubscriptionId?: string;
    subscribed?: boolean;
  };
  partnerBillingEntity?: {
    id?: string;
    name?: string;
    partnerEntityUri?: string;
  };
}
export const BillingInfoGetOutput = /*@__PURE__*/ Schema.Struct({
  marketplaceSaasInfo: Schema.optional(
    Schema.Struct({
      marketplaceSubscriptionId: Schema.optional(Schema.String),
      marketplaceName: Schema.optional(Schema.String),
      marketplaceStatus: Schema.optional(Schema.String),
      billedAzureSubscriptionId: Schema.optional(Schema.String),
      subscribed: Schema.optional(Schema.Boolean),
    }),
  ),
  partnerBillingEntity: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      partnerEntityUri: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<BillingInfoGetOutput>;

// The operation
/**
 * Get marketplace and organization info mapped to the given monitor.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const BillingInfoGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BillingInfoGetInput,
  outputSchema: BillingInfoGetOutput,
}));
// Input Schema
export interface CreationSupportedGetInput {
  subscriptionId: string;
  datadogOrganizationId: string;
}
export const CreationSupportedGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    datadogOrganizationId: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Datadog/subscriptionStatuses/default",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<CreationSupportedGetInput>;

// Output Schema
export interface CreationSupportedGetOutput {
  properties?: { name?: string; creationSupported?: boolean };
}
export const CreationSupportedGetOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        creationSupported: Schema.optional(Schema.Boolean),
      }),
    ),
  }) as unknown as Schema.Codec<CreationSupportedGetOutput>;

// The operation
/**
 * Informs if the current subscription is being already monitored for selected Datadog organization.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param datadogOrganizationId - Datadog Organization Id
 */
export const CreationSupportedGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreationSupportedGetInput,
  outputSchema: CreationSupportedGetOutput,
}));
// Input Schema
export interface CreationSupportedListInput {
  subscriptionId: string;
  datadogOrganizationId: string;
}
export const CreationSupportedListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    datadogOrganizationId: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Datadog/subscriptionStatuses",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<CreationSupportedListInput>;

// Output Schema
export interface CreationSupportedListOutput {
  value: { properties?: { name?: string; creationSupported?: boolean } }[];
  nextLink?: string;
}
export const CreationSupportedListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            creationSupported: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CreationSupportedListOutput>;

// The operation
/**
 * Informs if the current subscription is being already monitored for selected Datadog organization.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param datadogOrganizationId - Datadog Organization Id
 */
export const CreationSupportedList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreationSupportedListInput,
  outputSchema: CreationSupportedListOutput,
}));
// Input Schema
export interface MarketplaceAgreementsCreateOrUpdateInput {
  subscriptionId: string;
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    publisher?: string;
    product?: string;
    plan?: string;
    licenseTextLink?: string;
    privacyPolicyLink?: string;
    retrieveDatetime?: string;
    signature?: string;
    accepted?: boolean;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const MarketplaceAgreementsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        publisher: Schema.optional(Schema.String),
        product: Schema.optional(Schema.String),
        plan: Schema.optional(Schema.String),
        licenseTextLink: Schema.optional(Schema.String),
        privacyPolicyLink: Schema.optional(Schema.String),
        retrieveDatetime: Schema.optional(Schema.String),
        signature: Schema.optional(Schema.String),
        accepted: Schema.optional(Schema.Boolean),
      }),
    ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Datadog/agreements/default",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MarketplaceAgreementsCreateOrUpdateInput>;

// Output Schema
export interface MarketplaceAgreementsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    publisher?: string;
    product?: string;
    plan?: string;
    licenseTextLink?: string;
    privacyPolicyLink?: string;
    retrieveDatetime?: string;
    signature?: string;
    accepted?: boolean;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const MarketplaceAgreementsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        publisher: Schema.optional(Schema.String),
        product: Schema.optional(Schema.String),
        plan: Schema.optional(Schema.String),
        licenseTextLink: Schema.optional(Schema.String),
        privacyPolicyLink: Schema.optional(Schema.String),
        retrieveDatetime: Schema.optional(Schema.String),
        signature: Schema.optional(Schema.String),
        accepted: Schema.optional(Schema.Boolean),
      }),
    ),
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
  }) as unknown as Schema.Codec<MarketplaceAgreementsCreateOrUpdateOutput>;

// The operation
/**
 * Create Datadog marketplace agreement in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MarketplaceAgreementsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceAgreementsCreateOrUpdateInput,
    outputSchema: MarketplaceAgreementsCreateOrUpdateOutput,
  }));
// Input Schema
export interface MarketplaceAgreementsListInput {
  subscriptionId: string;
}
export const MarketplaceAgreementsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Datadog/agreements",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MarketplaceAgreementsListInput>;

// Output Schema
export interface MarketplaceAgreementsListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      publisher?: string;
      product?: string;
      plan?: string;
      licenseTextLink?: string;
      privacyPolicyLink?: string;
      retrieveDatetime?: string;
      signature?: string;
      accepted?: boolean;
    };
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
export const MarketplaceAgreementsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            publisher: Schema.optional(Schema.String),
            product: Schema.optional(Schema.String),
            plan: Schema.optional(Schema.String),
            licenseTextLink: Schema.optional(Schema.String),
            privacyPolicyLink: Schema.optional(Schema.String),
            retrieveDatetime: Schema.optional(Schema.String),
            signature: Schema.optional(Schema.String),
            accepted: Schema.optional(Schema.Boolean),
          }),
        ),
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
  }) as unknown as Schema.Codec<MarketplaceAgreementsListOutput>;

// The operation
/**
 * List Datadog marketplace agreements in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MarketplaceAgreementsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MarketplaceAgreementsListInput,
  outputSchema: MarketplaceAgreementsListOutput,
}));
// Input Schema
export interface MonitoredSubscriptionsCreateorUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  configurationName: string;
  properties?: {
    operation?:
      | "AddBegin"
      | "AddComplete"
      | "DeleteBegin"
      | "DeleteComplete"
      | "Active";
    monitoredSubscriptionList?: {
      subscriptionId?: string;
      status?: "InProgress" | "Active" | "Failed" | "Deleting";
      error?: string;
      tagRules?: {
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
        logRules?: {
          sendAadLogs?: boolean;
          sendSubscriptionLogs?: boolean;
          sendResourceLogs?: boolean;
          filteringTags?: {
            name?: string;
            value?: string;
            action?: "Include" | "Exclude";
          }[];
        };
        metricRules?: {
          filteringTags?: {
            name?: string;
            value?: string;
            action?: "Include" | "Exclude";
          }[];
        };
        agentRules?: {
          enableAgentMonitoring?: boolean;
          filteringTags?: {
            name?: string;
            value?: string;
            action?: "Include" | "Exclude";
          }[];
        };
        automuting?: boolean;
        customMetrics?: boolean;
      };
    }[];
  };
}
export const MonitoredSubscriptionsCreateorUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        operation: Schema.optional(
          Schema.Literals([
            "AddBegin",
            "AddComplete",
            "DeleteBegin",
            "DeleteComplete",
            "Active",
          ]),
        ),
        monitoredSubscriptionList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              subscriptionId: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals(["InProgress", "Active", "Failed", "Deleting"]),
              ),
              error: Schema.optional(Schema.String),
              tagRules: Schema.optional(
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
                  logRules: Schema.optional(
                    Schema.Struct({
                      sendAadLogs: Schema.optional(Schema.Boolean),
                      sendSubscriptionLogs: Schema.optional(Schema.Boolean),
                      sendResourceLogs: Schema.optional(Schema.Boolean),
                      filteringTags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                            action: Schema.optional(
                              Schema.Literals(["Include", "Exclude"]),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                  metricRules: Schema.optional(
                    Schema.Struct({
                      filteringTags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                            action: Schema.optional(
                              Schema.Literals(["Include", "Exclude"]),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                  agentRules: Schema.optional(
                    Schema.Struct({
                      enableAgentMonitoring: Schema.optional(Schema.Boolean),
                      filteringTags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                            action: Schema.optional(
                              Schema.Literals(["Include", "Exclude"]),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                  automuting: Schema.optional(Schema.Boolean),
                  customMetrics: Schema.optional(Schema.Boolean),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/monitoredSubscriptions/{configurationName}",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitoredSubscriptionsCreateorUpdateInput>;

// Output Schema
export interface MonitoredSubscriptionsCreateorUpdateOutput {
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
export const MonitoredSubscriptionsCreateorUpdateOutput =
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
  }) as unknown as Schema.Codec<MonitoredSubscriptionsCreateorUpdateOutput>;

// The operation
/**
 * Add the subscriptions that should be monitored by the Datadog monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param configurationName - The configuration name. Only 'default' value is supported.
 */
export const MonitoredSubscriptionsCreateorUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MonitoredSubscriptionsCreateorUpdateInput,
    outputSchema: MonitoredSubscriptionsCreateorUpdateOutput,
  }));
// Input Schema
export interface MonitoredSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  configurationName: string;
}
export const MonitoredSubscriptionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/monitoredSubscriptions/{configurationName}",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitoredSubscriptionsDeleteInput>;

// Output Schema
export type MonitoredSubscriptionsDeleteOutput = void;
export const MonitoredSubscriptionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MonitoredSubscriptionsDeleteOutput>;

// The operation
/**
 * Updates the subscriptions that are being monitored by the Datadog monitor resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param configurationName - The configuration name. Only 'default' value is supported.
 */
export const MonitoredSubscriptionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MonitoredSubscriptionsDeleteInput,
    outputSchema: MonitoredSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface MonitoredSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  configurationName: string;
}
export const MonitoredSubscriptionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/monitoredSubscriptions/{configurationName}",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitoredSubscriptionsGetInput>;

// Output Schema
export interface MonitoredSubscriptionsGetOutput {
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
export const MonitoredSubscriptionsGetOutput =
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
  }) as unknown as Schema.Codec<MonitoredSubscriptionsGetOutput>;

// The operation
/**
 * List the subscriptions currently being monitored by the Datadog monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param configurationName - The configuration name. Only 'default' value is supported.
 */
export const MonitoredSubscriptionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitoredSubscriptionsGetInput,
  outputSchema: MonitoredSubscriptionsGetOutput,
}));
// Input Schema
export interface MonitoredSubscriptionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitoredSubscriptionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/monitoredSubscriptions",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitoredSubscriptionsListInput>;

// Output Schema
export interface MonitoredSubscriptionsListOutput {
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
export const MonitoredSubscriptionsListOutput =
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
  }) as unknown as Schema.Codec<MonitoredSubscriptionsListOutput>;

// The operation
/**
 * List the subscriptions currently being monitored by the Datadog monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitoredSubscriptionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitoredSubscriptionsListInput,
  outputSchema: MonitoredSubscriptionsListOutput,
}));
// Input Schema
export interface MonitoredSubscriptionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  configurationName: string;
  properties?: {
    operation?:
      | "AddBegin"
      | "AddComplete"
      | "DeleteBegin"
      | "DeleteComplete"
      | "Active";
    monitoredSubscriptionList?: {
      subscriptionId?: string;
      status?: "InProgress" | "Active" | "Failed" | "Deleting";
      error?: string;
      tagRules?: {
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
        logRules?: {
          sendAadLogs?: boolean;
          sendSubscriptionLogs?: boolean;
          sendResourceLogs?: boolean;
          filteringTags?: {
            name?: string;
            value?: string;
            action?: "Include" | "Exclude";
          }[];
        };
        metricRules?: {
          filteringTags?: {
            name?: string;
            value?: string;
            action?: "Include" | "Exclude";
          }[];
        };
        agentRules?: {
          enableAgentMonitoring?: boolean;
          filteringTags?: {
            name?: string;
            value?: string;
            action?: "Include" | "Exclude";
          }[];
        };
        automuting?: boolean;
        customMetrics?: boolean;
      };
    }[];
  };
}
export const MonitoredSubscriptionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        operation: Schema.optional(
          Schema.Literals([
            "AddBegin",
            "AddComplete",
            "DeleteBegin",
            "DeleteComplete",
            "Active",
          ]),
        ),
        monitoredSubscriptionList: Schema.optional(
          Schema.Array(
            Schema.Struct({
              subscriptionId: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals(["InProgress", "Active", "Failed", "Deleting"]),
              ),
              error: Schema.optional(Schema.String),
              tagRules: Schema.optional(
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
                  logRules: Schema.optional(
                    Schema.Struct({
                      sendAadLogs: Schema.optional(Schema.Boolean),
                      sendSubscriptionLogs: Schema.optional(Schema.Boolean),
                      sendResourceLogs: Schema.optional(Schema.Boolean),
                      filteringTags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                            action: Schema.optional(
                              Schema.Literals(["Include", "Exclude"]),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                  metricRules: Schema.optional(
                    Schema.Struct({
                      filteringTags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                            action: Schema.optional(
                              Schema.Literals(["Include", "Exclude"]),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                  agentRules: Schema.optional(
                    Schema.Struct({
                      enableAgentMonitoring: Schema.optional(Schema.Boolean),
                      filteringTags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                            action: Schema.optional(
                              Schema.Literals(["Include", "Exclude"]),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                  automuting: Schema.optional(Schema.Boolean),
                  customMetrics: Schema.optional(Schema.Boolean),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/monitoredSubscriptions/{configurationName}",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitoredSubscriptionsUpdateInput>;

// Output Schema
export interface MonitoredSubscriptionsUpdateOutput {
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
export const MonitoredSubscriptionsUpdateOutput =
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
  }) as unknown as Schema.Codec<MonitoredSubscriptionsUpdateOutput>;

// The operation
/**
 * Updates the subscriptions that are being monitored by the Datadog monitor resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param configurationName - The configuration name. Only 'default' value is supported.
 */
export const MonitoredSubscriptionsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MonitoredSubscriptionsUpdateInput,
    outputSchema: MonitoredSubscriptionsUpdateOutput,
  }));
// Input Schema
export interface MonitorsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
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
    monitoringStatus?: "Enabled" | "Disabled";
    marketplaceSubscriptionStatus?:
      | "Provisioning"
      | "Active"
      | "Suspended"
      | "Unsubscribed";
    datadogOrganizationProperties?: {
      name?: string;
      id?: string;
      linkingAuthCode?: string;
      linkingClientId?: string;
      redirectUri?: string;
      apiKey?: string | Redacted.Redacted<string>;
      applicationKey?: string;
      enterpriseAppId?: string;
      cspm?: boolean;
      resourceCollection?: boolean;
    };
    userInfo?: { name?: string; emailAddress?: string; phoneNumber?: string };
    liftrResourceCategory?: "Unknown" | "MonitorLogs";
    liftrResourcePreference?: number;
  };
  sku?: { name: string };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "UserAssigned";
  };
  tags?: Record<string, string>;
  location: string;
}
export const MonitorsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
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
      monitoringStatus: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      marketplaceSubscriptionStatus: Schema.optional(
        Schema.Literals([
          "Provisioning",
          "Active",
          "Suspended",
          "Unsubscribed",
        ]),
      ),
      datadogOrganizationProperties: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          linkingAuthCode: Schema.optional(Schema.String),
          linkingClientId: Schema.optional(Schema.String),
          redirectUri: Schema.optional(Schema.String),
          apiKey: Schema.optional(SensitiveString),
          applicationKey: Schema.optional(Schema.String),
          enterpriseAppId: Schema.optional(Schema.String),
          cspm: Schema.optional(Schema.Boolean),
          resourceCollection: Schema.optional(Schema.Boolean),
        }),
      ),
      userInfo: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          emailAddress: Schema.optional(Schema.String),
          phoneNumber: Schema.optional(Schema.String),
        }),
      ),
      liftrResourceCategory: Schema.optional(
        Schema.Literals(["Unknown", "MonitorLogs"]),
      ),
      liftrResourcePreference: Schema.optional(Schema.Number),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Literals(["SystemAssigned", "UserAssigned"]),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}",
    apiVersion: "2025-06-11",
  }),
) as unknown as Schema.Codec<MonitorsCreateInput>;

// Output Schema
export interface MonitorsCreateOutput {
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
export const MonitorsCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MonitorsCreateOutput>;

// The operation
/**
 * Create a monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsCreateInput,
  outputSchema: MonitorsCreateOutput,
}));
// Input Schema
export interface MonitorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}",
    apiVersion: "2025-06-11",
  }),
) as unknown as Schema.Codec<MonitorsDeleteInput>;

// Output Schema
export type MonitorsDeleteOutput = void;
export const MonitorsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MonitorsDeleteOutput>;

// The operation
/**
 * Delete a monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsDeleteInput,
  outputSchema: MonitorsDeleteOutput,
}));
// Input Schema
export interface MonitorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}",
    apiVersion: "2025-06-11",
  }),
) as unknown as Schema.Codec<MonitorsGetInput>;

// Output Schema
export interface MonitorsGetOutput {
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
export const MonitorsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MonitorsGetOutput>;

// The operation
/**
 * Get the properties of a specific monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsGetInput,
  outputSchema: MonitorsGetOutput,
}));
// Input Schema
export interface MonitorsGetDefaultKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsGetDefaultKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/getDefaultKey",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitorsGetDefaultKeyInput>;

// Output Schema
export interface MonitorsGetDefaultKeyOutput {
  createdBy?: string;
  name?: string;
  key: string;
  created?: string;
}
export const MonitorsGetDefaultKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    createdBy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    key: Schema.String,
    created: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MonitorsGetDefaultKeyOutput>;

// The operation
/**
 * Get the default api key.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsGetDefaultKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsGetDefaultKeyInput,
  outputSchema: MonitorsGetDefaultKeyOutput,
}));
// Input Schema
export interface MonitorsListInput {
  subscriptionId: string;
}
export const MonitorsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Datadog/monitors",
    apiVersion: "2025-06-11",
  }),
) as unknown as Schema.Codec<MonitorsListInput>;

// Output Schema
export interface MonitorsListOutput {
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
export const MonitorsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MonitorsListOutput>;

// The operation
/**
 * List all monitors under the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MonitorsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsListInput,
  outputSchema: MonitorsListOutput,
}));
// Input Schema
export interface MonitorsListApiKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsListApiKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/listApiKeys",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitorsListApiKeysInput>;

// Output Schema
export interface MonitorsListApiKeysOutput {
  value: { createdBy?: string; name?: string; key: string; created?: string }[];
  nextLink?: string;
}
export const MonitorsListApiKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        key: Schema.String,
        created: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MonitorsListApiKeysOutput>;

// The operation
/**
 * List the api keys for a given monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsListApiKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsListApiKeysInput,
  outputSchema: MonitorsListApiKeysOutput,
}));
// Input Schema
export interface MonitorsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const MonitorsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitorsListByResourceGroupInput>;

// Output Schema
export interface MonitorsListByResourceGroupOutput {
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
export const MonitorsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<MonitorsListByResourceGroupOutput>;

// The operation
/**
 * List all monitors under the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MonitorsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsListByResourceGroupInput,
  outputSchema: MonitorsListByResourceGroupOutput,
}));
// Input Schema
export interface MonitorsListHostsInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsListHostsInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/listHosts",
    apiVersion: "2025-06-11",
  }),
) as unknown as Schema.Codec<MonitorsListHostsInput>;

// Output Schema
export interface MonitorsListHostsOutput {
  value: {
    name?: string;
    aliases?: string[];
    apps?: string[];
    meta?: {
      agentVersion?: string;
      installMethod?: {
        tool?: string;
        toolVersion?: string;
        installerVersion?: string;
      };
      logsAgent?: { transport?: string };
    };
  }[];
  nextLink?: string;
}
export const MonitorsListHostsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        aliases: Schema.optional(Schema.Array(Schema.String)),
        apps: Schema.optional(Schema.Array(Schema.String)),
        meta: Schema.optional(
          Schema.Struct({
            agentVersion: Schema.optional(Schema.String),
            installMethod: Schema.optional(
              Schema.Struct({
                tool: Schema.optional(Schema.String),
                toolVersion: Schema.optional(Schema.String),
                installerVersion: Schema.optional(Schema.String),
              }),
            ),
            logsAgent: Schema.optional(
              Schema.Struct({
                transport: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MonitorsListHostsOutput>;

// The operation
/**
 * List the hosts for a given monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsListHosts = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsListHostsInput,
  outputSchema: MonitorsListHostsOutput,
}));
// Input Schema
export interface MonitorsListLinkedResourcesInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsListLinkedResourcesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/listLinkedResources",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitorsListLinkedResourcesInput>;

// Output Schema
export interface MonitorsListLinkedResourcesOutput {
  value: { id?: string; location?: string }[];
  nextLink?: string;
}
export const MonitorsListLinkedResourcesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MonitorsListLinkedResourcesOutput>;

// The operation
/**
 * List all Azure resources associated to the same Datadog organization as the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsListLinkedResources = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsListLinkedResourcesInput,
  outputSchema: MonitorsListLinkedResourcesOutput,
}));
// Input Schema
export interface MonitorsListMonitoredResourcesInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsListMonitoredResourcesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/listMonitoredResources",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitorsListMonitoredResourcesInput>;

// Output Schema
export interface MonitorsListMonitoredResourcesOutput {
  value: {
    id?: string;
    sendingMetrics?: boolean;
    reasonForMetricsStatus?: string;
    sendingLogs?: boolean;
    reasonForLogsStatus?: string;
  }[];
  nextLink?: string;
}
export const MonitorsListMonitoredResourcesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        sendingMetrics: Schema.optional(Schema.Boolean),
        reasonForMetricsStatus: Schema.optional(Schema.String),
        sendingLogs: Schema.optional(Schema.Boolean),
        reasonForLogsStatus: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MonitorsListMonitoredResourcesOutput>;

// The operation
/**
 * List the resources currently being monitored by the Datadog monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsListMonitoredResources =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MonitorsListMonitoredResourcesInput,
    outputSchema: MonitorsListMonitoredResourcesOutput,
  }));
// Input Schema
export interface MonitorsRefreshSetPasswordLinkInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsRefreshSetPasswordLinkInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/refreshSetPasswordLink",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitorsRefreshSetPasswordLinkInput>;

// Output Schema
export interface MonitorsRefreshSetPasswordLinkOutput {
  setPasswordLink?: Redacted.Redacted<string>;
}
export const MonitorsRefreshSetPasswordLinkOutput =
  /*@__PURE__*/ Schema.Struct({
    setPasswordLink: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<MonitorsRefreshSetPasswordLinkOutput>;

// The operation
/**
 * Refresh the set password link and return a latest one.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsRefreshSetPasswordLink =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MonitorsRefreshSetPasswordLinkInput,
    outputSchema: MonitorsRefreshSetPasswordLinkOutput,
  }));
// Input Schema
export interface MonitorsSetDefaultKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  createdBy?: string;
  name?: string;
  key: string;
  created?: string;
}
export const MonitorsSetDefaultKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    createdBy: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    key: Schema.String,
    created: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/setDefaultKey",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<MonitorsSetDefaultKeyInput>;

// Output Schema
export type MonitorsSetDefaultKeyOutput = void;
export const MonitorsSetDefaultKeyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MonitorsSetDefaultKeyOutput>;

// The operation
/**
 * Set the default api key.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsSetDefaultKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsSetDefaultKeyInput,
  outputSchema: MonitorsSetDefaultKeyOutput,
}));
// Input Schema
export interface MonitorsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  properties?: {
    monitoringStatus?: "Enabled" | "Disabled";
    cspm?: boolean;
    resourceCollection?: boolean;
  };
  tags?: Record<string, string>;
  sku?: { name: string };
}
export const MonitorsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      monitoringStatus: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      cspm: Schema.optional(Schema.Boolean),
      resourceCollection: Schema.optional(Schema.Boolean),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}",
    apiVersion: "2025-06-11",
  }),
) as unknown as Schema.Codec<MonitorsUpdateInput>;

// Output Schema
export interface MonitorsUpdateOutput {
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
export const MonitorsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MonitorsUpdateOutput>;

// The operation
/**
 * Update a monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const MonitorsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: MonitorsUpdateInput,
  outputSchema: MonitorsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Datadog/operations",
    apiVersion: "2025-06-11",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    isDataAction?: boolean;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
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
      isDataAction: Schema.optional(Schema.Boolean),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * List all operations provided by Microsoft.Datadog for the 2025-06-11 api version.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OrganizationsResubscribeInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  sku?: { name: string };
  azureSubscriptionId?: string;
  resourceGroup?: string;
}
export const OrganizationsResubscribeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
      }),
    ),
    azureSubscriptionId: Schema.optional(Schema.String),
    resourceGroup: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/resubscribe",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<OrganizationsResubscribeInput>;

// Output Schema
export interface OrganizationsResubscribeOutput {
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
export const OrganizationsResubscribeOutput =
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
  }) as unknown as Schema.Codec<OrganizationsResubscribeOutput>;

// The operation
/**
 * Reinstate integration with your Datadog organization by choosing one of the available subscription plans.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const OrganizationsResubscribe = /*@__PURE__*/ API.make(() => ({
  inputSchema: OrganizationsResubscribeInput,
  outputSchema: OrganizationsResubscribeOutput,
}));
// Input Schema
export interface SingleSignOnConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  configurationName: string;
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
    singleSignOnState?: "Initial" | "Enable" | "Disable" | "Existing";
    enterpriseAppId?: string;
    singleSignOnUrl?: string;
  };
}
export const SingleSignOnConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
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
        singleSignOnState: Schema.optional(
          Schema.Literals(["Initial", "Enable", "Disable", "Existing"]),
        ),
        enterpriseAppId: Schema.optional(Schema.String),
        singleSignOnUrl: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/singleSignOnConfigurations/{configurationName}",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<SingleSignOnConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface SingleSignOnConfigurationsCreateOrUpdateOutput {
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
export const SingleSignOnConfigurationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SingleSignOnConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Configures single-sign-on for this resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param configurationName - Configuration name
 */
export const SingleSignOnConfigurationsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SingleSignOnConfigurationsCreateOrUpdateInput,
    outputSchema: SingleSignOnConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SingleSignOnConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  configurationName: string;
}
export const SingleSignOnConfigurationsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/singleSignOnConfigurations/{configurationName}",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<SingleSignOnConfigurationsGetInput>;

// Output Schema
export interface SingleSignOnConfigurationsGetOutput {
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
export const SingleSignOnConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<SingleSignOnConfigurationsGetOutput>;

// The operation
/**
 * Gets the datadog single sign-on resource for the given Monitor.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param configurationName - Configuration name
 */
export const SingleSignOnConfigurationsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SingleSignOnConfigurationsGetInput,
    outputSchema: SingleSignOnConfigurationsGetOutput,
  }));
// Input Schema
export interface SingleSignOnConfigurationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const SingleSignOnConfigurationsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/singleSignOnConfigurations",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<SingleSignOnConfigurationsListInput>;

// Output Schema
export interface SingleSignOnConfigurationsListOutput {
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
export const SingleSignOnConfigurationsListOutput =
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
  }) as unknown as Schema.Codec<SingleSignOnConfigurationsListOutput>;

// The operation
/**
 * List the single sign-on configurations for a given monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const SingleSignOnConfigurationsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SingleSignOnConfigurationsListInput,
    outputSchema: SingleSignOnConfigurationsListOutput,
  }));
// Input Schema
export interface TagRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  ruleSetName: string;
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
    logRules?: {
      sendAadLogs?: boolean;
      sendSubscriptionLogs?: boolean;
      sendResourceLogs?: boolean;
      filteringTags?: {
        name?: string;
        value?: string;
        action?: "Include" | "Exclude";
      }[];
    };
    metricRules?: {
      filteringTags?: {
        name?: string;
        value?: string;
        action?: "Include" | "Exclude";
      }[];
    };
    agentRules?: {
      enableAgentMonitoring?: boolean;
      filteringTags?: {
        name?: string;
        value?: string;
        action?: "Include" | "Exclude";
      }[];
    };
    automuting?: boolean;
    customMetrics?: boolean;
  };
}
export const TagRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    ruleSetName: Schema.String.pipe(T.PathParam()),
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
        logRules: Schema.optional(
          Schema.Struct({
            sendAadLogs: Schema.optional(Schema.Boolean),
            sendSubscriptionLogs: Schema.optional(Schema.Boolean),
            sendResourceLogs: Schema.optional(Schema.Boolean),
            filteringTags: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                  action: Schema.optional(
                    Schema.Literals(["Include", "Exclude"]),
                  ),
                }),
              ),
            ),
          }),
        ),
        metricRules: Schema.optional(
          Schema.Struct({
            filteringTags: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                  action: Schema.optional(
                    Schema.Literals(["Include", "Exclude"]),
                  ),
                }),
              ),
            ),
          }),
        ),
        agentRules: Schema.optional(
          Schema.Struct({
            enableAgentMonitoring: Schema.optional(Schema.Boolean),
            filteringTags: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                  action: Schema.optional(
                    Schema.Literals(["Include", "Exclude"]),
                  ),
                }),
              ),
            ),
          }),
        ),
        automuting: Schema.optional(Schema.Boolean),
        customMetrics: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/tagRules/{ruleSetName}",
      apiVersion: "2025-06-11",
    }),
  ) as unknown as Schema.Codec<TagRulesCreateOrUpdateInput>;

// Output Schema
export interface TagRulesCreateOrUpdateOutput {
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
export const TagRulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TagRulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a tag rule set for a given monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param ruleSetName - Rule set name
 */
export const TagRulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TagRulesCreateOrUpdateInput,
  outputSchema: TagRulesCreateOrUpdateOutput,
}));
// Input Schema
export interface TagRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  ruleSetName: string;
}
export const TagRulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  ruleSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/tagRules/{ruleSetName}",
    apiVersion: "2025-06-11",
  }),
) as unknown as Schema.Codec<TagRulesGetInput>;

// Output Schema
export interface TagRulesGetOutput {
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
export const TagRulesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TagRulesGetOutput>;

// The operation
/**
 * Get a tag rule set for a given monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 * @param ruleSetName - Rule set name
 */
export const TagRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TagRulesGetInput,
  outputSchema: TagRulesGetOutput,
}));
// Input Schema
export interface TagRulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const TagRulesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/tagRules",
    apiVersion: "2025-06-11",
  }),
) as unknown as Schema.Codec<TagRulesListInput>;

// Output Schema
export interface TagRulesListOutput {
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
export const TagRulesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TagRulesListOutput>;

// The operation
/**
 * List the tag rules for a given monitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Monitor resource name
 */
export const TagRulesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: TagRulesListInput,
  outputSchema: TagRulesListOutput,
}));
