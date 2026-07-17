/**
 * Azure Timeseriesinsights API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AccessPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  accessPolicyName: string;
  properties: {
    principalObjectId?: string;
    description?: string;
    roles?: ("Reader" | "Contributor")[];
  };
}
export const AccessPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    accessPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      principalObjectId: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      roles: Schema.optional(
        Schema.Array(Schema.Literals(["Reader", "Contributor"])),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<AccessPoliciesCreateOrUpdateInput>;

// Output Schema
export interface AccessPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccessPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccessPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an access policy in the specified environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param accessPolicyName - Name of the access policy.
 * @param api-version - Version of the API to be used with the client request.
 */
export const AccessPoliciesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccessPoliciesCreateOrUpdateInput,
    outputSchema: AccessPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface AccessPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  accessPolicyName: string;
}
export const AccessPoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    accessPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<AccessPoliciesDeleteInput>;

// Output Schema
export type AccessPoliciesDeleteOutput = void;
export const AccessPoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccessPoliciesDeleteOutput>;

// The operation
/**
 * Deletes the access policy with the specified name in the specified subscription, resource group, and environment
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param accessPolicyName - The name of the Time Series Insights access policy associated with the specified environment.
 * @param api-version - Version of the API to be used with the client request.
 */
export const AccessPoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessPoliciesDeleteInput,
  outputSchema: AccessPoliciesDeleteOutput,
}));
// Input Schema
export interface AccessPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  accessPolicyName: string;
}
export const AccessPoliciesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  environmentName: Schema.String.pipe(T.PathParam()),
  accessPolicyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
    apiVersion: "2020-05-15",
  }),
) as unknown as Schema.Codec<AccessPoliciesGetInput>;

// Output Schema
export interface AccessPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccessPoliciesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccessPoliciesGetOutput>;

// The operation
/**
 * Gets the access policy with the specified name in the specified environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param accessPolicyName - The name of the Time Series Insights access policy associated with the specified environment.
 * @param api-version - Version of the API to be used with the client request.
 */
export const AccessPoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessPoliciesGetInput,
  outputSchema: AccessPoliciesGetOutput,
}));
// Input Schema
export interface AccessPoliciesListByEnvironmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const AccessPoliciesListByEnvironmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<AccessPoliciesListByEnvironmentInput>;

// Output Schema
export interface AccessPoliciesListByEnvironmentOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const AccessPoliciesListByEnvironmentOutput =
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
  }) as unknown as Schema.Codec<AccessPoliciesListByEnvironmentOutput>;

// The operation
/**
 * Lists all the available access policies associated with the environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param api-version - Version of the API to be used with the client request.
 */
export const AccessPoliciesListByEnvironment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccessPoliciesListByEnvironmentInput,
    outputSchema: AccessPoliciesListByEnvironmentOutput,
  }));
// Input Schema
export interface AccessPoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  accessPolicyName: string;
  properties?: { description?: string; roles?: ("Reader" | "Contributor")[] };
}
export const AccessPoliciesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    accessPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        roles: Schema.optional(
          Schema.Array(Schema.Literals(["Reader", "Contributor"])),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<AccessPoliciesUpdateInput>;

// Output Schema
export interface AccessPoliciesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccessPoliciesUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccessPoliciesUpdateOutput>;

// The operation
/**
 * Updates the access policy with the specified name in the specified subscription, resource group, and environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param accessPolicyName - The name of the Time Series Insights access policy associated with the specified environment.
 * @param api-version - Version of the API to be used with the client request.
 */
export const AccessPoliciesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessPoliciesUpdateInput,
  outputSchema: AccessPoliciesUpdateOutput,
}));
// Input Schema
export interface EnvironmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  kind: "Gen1" | "Gen2";
  sku: { name: "S1" | "S2" | "P1" | "L1"; capacity: number };
  location: string;
  tags?: Record<string, string>;
}
export const EnvironmentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["Gen1", "Gen2"]),
    sku: Schema.Struct({
      name: Schema.Literals(["S1", "S2", "P1", "L1"]),
      capacity: Schema.Number,
    }),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<EnvironmentsCreateOrUpdateInput>;

// Output Schema
export interface EnvironmentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EnvironmentsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EnvironmentsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an environment in the specified subscription and resource group.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - Name of the environment
 * @param api-version - Version of the API to be used with the client request.
 */
export const EnvironmentsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentsCreateOrUpdateInput,
  outputSchema: EnvironmentsCreateOrUpdateOutput,
}));
// Input Schema
export interface EnvironmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const EnvironmentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<EnvironmentsDeleteInput>;

// Output Schema
export type EnvironmentsDeleteOutput = void;
export const EnvironmentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EnvironmentsDeleteOutput>;

// The operation
/**
 * Deletes the environment with the specified name in the specified subscription and resource group.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EnvironmentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentsDeleteInput,
  outputSchema: EnvironmentsDeleteOutput,
}));
// Input Schema
export interface EnvironmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  $expand?: string;
}
export const EnvironmentsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  environmentName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}",
    apiVersion: "2020-05-15",
  }),
) as unknown as Schema.Codec<EnvironmentsGetInput>;

// Output Schema
export interface EnvironmentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EnvironmentsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<EnvironmentsGetOutput>;

// The operation
/**
 * Gets the environment with the specified name in the specified subscription and resource group.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param $expand - Setting $expand=status will include the status of the internal services of the environment in the Time Series Insights service.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EnvironmentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentsGetInput,
  outputSchema: EnvironmentsGetOutput,
}));
// Input Schema
export interface EnvironmentsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const EnvironmentsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<EnvironmentsListByResourceGroupInput>;

// Output Schema
export interface EnvironmentsListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const EnvironmentsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<EnvironmentsListByResourceGroupOutput>;

// The operation
/**
 * Lists all the available environments associated with the subscription and within the specified resource group.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EnvironmentsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsListByResourceGroupInput,
    outputSchema: EnvironmentsListByResourceGroupOutput,
  }));
// Input Schema
export interface EnvironmentsListBySubscriptionInput {
  subscriptionId: string;
}
export const EnvironmentsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.TimeSeriesInsights/environments",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<EnvironmentsListBySubscriptionInput>;

// Output Schema
export interface EnvironmentsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const EnvironmentsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<EnvironmentsListBySubscriptionOutput>;

// The operation
/**
 * Lists all the available environments within a subscription, irrespective of the resource groups.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EnvironmentsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsListBySubscriptionInput,
    outputSchema: EnvironmentsListBySubscriptionOutput,
  }));
// Input Schema
export interface EnvironmentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  kind: "Gen1" | "Gen2";
  tags?: Record<string, string>;
}
export const EnvironmentsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["Gen1", "Gen2"]),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<EnvironmentsUpdateInput>;

// Output Schema
export interface EnvironmentsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EnvironmentsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EnvironmentsUpdateOutput>;

// The operation
/**
 * Updates the environment with the specified name in the specified subscription and resource group.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EnvironmentsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentsUpdateInput,
  outputSchema: EnvironmentsUpdateOutput,
}));
// Input Schema
export interface EventSourcesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  eventSourceName: string;
  kind: "Microsoft.EventHub" | "Microsoft.IoTHub";
  localTimestamp?: {
    format?: "Embedded";
    timeZoneOffset?: { propertyName?: string };
  };
  location: string;
  tags?: Record<string, string>;
}
export const EventSourcesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    eventSourceName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["Microsoft.EventHub", "Microsoft.IoTHub"]),
    localTimestamp: Schema.optional(
      Schema.Struct({
        format: Schema.optional(Schema.Literals(["Embedded"])),
        timeZoneOffset: Schema.optional(
          Schema.Struct({
            propertyName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<EventSourcesCreateOrUpdateInput>;

// Output Schema
export interface EventSourcesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EventSourcesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSourcesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an event source under the specified environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param eventSourceName - Name of the event source.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSourcesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventSourcesCreateOrUpdateInput,
  outputSchema: EventSourcesCreateOrUpdateOutput,
}));
// Input Schema
export interface EventSourcesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  eventSourceName: string;
}
export const EventSourcesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    eventSourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<EventSourcesDeleteInput>;

// Output Schema
export type EventSourcesDeleteOutput = void;
export const EventSourcesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EventSourcesDeleteOutput>;

// The operation
/**
 * Deletes the event source with the specified name in the specified subscription, resource group, and environment
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param eventSourceName - The name of the Time Series Insights event source associated with the specified environment.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSourcesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventSourcesDeleteInput,
  outputSchema: EventSourcesDeleteOutput,
}));
// Input Schema
export interface EventSourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  eventSourceName: string;
}
export const EventSourcesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  environmentName: Schema.String.pipe(T.PathParam()),
  eventSourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName}",
    apiVersion: "2020-05-15",
  }),
) as unknown as Schema.Codec<EventSourcesGetInput>;

// Output Schema
export interface EventSourcesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EventSourcesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<EventSourcesGetOutput>;

// The operation
/**
 * Gets the event source with the specified name in the specified environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param eventSourceName - The name of the Time Series Insights event source associated with the specified environment.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventSourcesGetInput,
  outputSchema: EventSourcesGetOutput,
}));
// Input Schema
export interface EventSourcesListByEnvironmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const EventSourcesListByEnvironmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<EventSourcesListByEnvironmentInput>;

// Output Schema
export interface EventSourcesListByEnvironmentOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const EventSourcesListByEnvironmentOutput =
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
  }) as unknown as Schema.Codec<EventSourcesListByEnvironmentOutput>;

// The operation
/**
 * Lists all the available event sources associated with the subscription and within the specified resource group and environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSourcesListByEnvironment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventSourcesListByEnvironmentInput,
    outputSchema: EventSourcesListByEnvironmentOutput,
  }));
// Input Schema
export interface EventSourcesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  eventSourceName: string;
  kind: "Microsoft.EventHub" | "Microsoft.IoTHub";
  tags?: Record<string, string>;
}
export const EventSourcesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    eventSourceName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["Microsoft.EventHub", "Microsoft.IoTHub"]),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<EventSourcesUpdateInput>;

// Output Schema
export interface EventSourcesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EventSourcesUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSourcesUpdateOutput>;

// The operation
/**
 * Updates the event source with the specified name in the specified subscription, resource group, and environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param eventSourceName - The name of the Time Series Insights event source associated with the specified environment.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSourcesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventSourcesUpdateInput,
  outputSchema: EventSourcesUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.TimeSeriesInsights/operations",
    apiVersion: "2020-05-15",
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
    origin?: string;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          dimensions?: { name?: string; displayName?: string }[];
          aggregationType?: string;
          availabilities?: { timeGrain?: string; blobDuration?: string }[];
          category?: string;
          resourceIdDimensionNameOverride?: string;
        }[];
        logSpecifications?: { name?: string; displayName?: string }[];
      };
    };
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
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            serviceSpecification: Schema.optional(
              Schema.Struct({
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      aggregationType: Schema.optional(Schema.String),
                      availabilities: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            timeGrain: Schema.optional(Schema.String),
                            blobDuration: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      category: Schema.optional(Schema.String),
                      resourceIdDimensionNameOverride: Schema.optional(
                        Schema.String,
                      ),
                    }),
                  ),
                ),
                logSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Time Series Insights related operations.
 *
 * @param api-version - Version of the API to be used with the client request.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ReferenceDataSetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  referenceDataSetName: string;
  properties: {
    keyProperties: {
      name?: string;
      type?: "String" | "Double" | "Bool" | "DateTime";
    }[];
    dataStringComparisonBehavior?: "Ordinal" | "OrdinalIgnoreCase";
  };
  location: string;
  tags?: Record<string, string>;
}
export const ReferenceDataSetsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    referenceDataSetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      keyProperties: Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Literals(["String", "Double", "Bool", "DateTime"]),
          ),
        }),
      ),
      dataStringComparisonBehavior: Schema.optional(
        Schema.Literals(["Ordinal", "OrdinalIgnoreCase"]),
      ),
    }),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<ReferenceDataSetsCreateOrUpdateInput>;

// Output Schema
export interface ReferenceDataSetsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ReferenceDataSetsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReferenceDataSetsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a reference data set in the specified environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param referenceDataSetName - Name of the reference data set.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ReferenceDataSetsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReferenceDataSetsCreateOrUpdateInput,
    outputSchema: ReferenceDataSetsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ReferenceDataSetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  referenceDataSetName: string;
}
export const ReferenceDataSetsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    referenceDataSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<ReferenceDataSetsDeleteInput>;

// Output Schema
export type ReferenceDataSetsDeleteOutput = void;
export const ReferenceDataSetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ReferenceDataSetsDeleteOutput>;

// The operation
/**
 * Deletes the reference data set with the specified name in the specified subscription, resource group, and environment
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param referenceDataSetName - The name of the Time Series Insights reference data set associated with the specified environment.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ReferenceDataSetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReferenceDataSetsDeleteInput,
  outputSchema: ReferenceDataSetsDeleteOutput,
}));
// Input Schema
export interface ReferenceDataSetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  referenceDataSetName: string;
}
export const ReferenceDataSetsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    referenceDataSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<ReferenceDataSetsGetInput>;

// Output Schema
export interface ReferenceDataSetsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ReferenceDataSetsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReferenceDataSetsGetOutput>;

// The operation
/**
 * Gets the reference data set with the specified name in the specified environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param referenceDataSetName - The name of the Time Series Insights reference data set associated with the specified environment.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ReferenceDataSetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReferenceDataSetsGetInput,
  outputSchema: ReferenceDataSetsGetOutput,
}));
// Input Schema
export interface ReferenceDataSetsListByEnvironmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ReferenceDataSetsListByEnvironmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<ReferenceDataSetsListByEnvironmentInput>;

// Output Schema
export interface ReferenceDataSetsListByEnvironmentOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ReferenceDataSetsListByEnvironmentOutput =
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
  }) as unknown as Schema.Codec<ReferenceDataSetsListByEnvironmentOutput>;

// The operation
/**
 * Lists all the available reference data sets associated with the subscription and within the specified resource group and environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ReferenceDataSetsListByEnvironment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReferenceDataSetsListByEnvironmentInput,
    outputSchema: ReferenceDataSetsListByEnvironmentOutput,
  }));
// Input Schema
export interface ReferenceDataSetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  referenceDataSetName: string;
  tags?: Record<string, string>;
}
export const ReferenceDataSetsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    referenceDataSetName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/referenceDataSets/{referenceDataSetName}",
      apiVersion: "2020-05-15",
    }),
  ) as unknown as Schema.Codec<ReferenceDataSetsUpdateInput>;

// Output Schema
export interface ReferenceDataSetsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ReferenceDataSetsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReferenceDataSetsUpdateOutput>;

// The operation
/**
 * Updates the reference data set with the specified name in the specified subscription, resource group, and environment.
 *
 * @param subscriptionId - Azure Subscription ID.
 * @param resourceGroupName - Name of an Azure Resource group.
 * @param environmentName - The name of the Time Series Insights environment associated with the specified resource group.
 * @param referenceDataSetName - The name of the Time Series Insights reference data set associated with the specified environment.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ReferenceDataSetsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReferenceDataSetsUpdateInput,
  outputSchema: ReferenceDataSetsUpdateOutput,
}));
