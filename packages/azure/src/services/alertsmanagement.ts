/**
 * Azure Alertsmanagement API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AlertProcessingRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  alertProcessingRuleName: string;
  properties?: {
    scopes: string[];
    conditions?: {
      field?:
        | "Severity"
        | "MonitorService"
        | "MonitorCondition"
        | "SignalType"
        | "TargetResourceType"
        | "TargetResource"
        | "TargetResourceGroup"
        | "AlertRuleId"
        | "AlertRuleName"
        | "Description"
        | "AlertContext";
      operator?: "Equals" | "NotEquals" | "Contains" | "DoesNotContain";
      values?: string[];
    }[];
    schedule?: {
      effectiveFrom?: string;
      effectiveUntil?: string;
      timeZone?: string;
      recurrences?: {
        recurrenceType: "Daily" | "Weekly" | "Monthly";
        startTime?: string;
        endTime?: string;
      }[];
    };
    actions: { actionType: "AddActionGroups" | "RemoveAllActionGroups" }[];
    description?: string;
    enabled?: boolean;
  };
  tags?: Record<string, string>;
  location: string;
}
export const AlertProcessingRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    alertProcessingRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        scopes: Schema.Array(Schema.String),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              field: Schema.optional(
                Schema.Literals([
                  "Severity",
                  "MonitorService",
                  "MonitorCondition",
                  "SignalType",
                  "TargetResourceType",
                  "TargetResource",
                  "TargetResourceGroup",
                  "AlertRuleId",
                  "AlertRuleName",
                  "Description",
                  "AlertContext",
                ]),
              ),
              operator: Schema.optional(
                Schema.Literals([
                  "Equals",
                  "NotEquals",
                  "Contains",
                  "DoesNotContain",
                ]),
              ),
              values: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        schedule: Schema.optional(
          Schema.Struct({
            effectiveFrom: Schema.optional(Schema.String),
            effectiveUntil: Schema.optional(Schema.String),
            timeZone: Schema.optional(Schema.String),
            recurrences: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  recurrenceType: Schema.Literals([
                    "Daily",
                    "Weekly",
                    "Monthly",
                  ]),
                  startTime: Schema.optional(Schema.String),
                  endTime: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        actions: Schema.Array(
          Schema.Struct({
            actionType: Schema.Literals([
              "AddActionGroups",
              "RemoveAllActionGroups",
            ]),
          }),
        ),
        description: Schema.optional(Schema.String),
        enabled: Schema.optional(Schema.Boolean),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/actionRules/{alertProcessingRuleName}",
      apiVersion: "2021-08-08",
    }),
  ) as unknown as Schema.Codec<AlertProcessingRulesCreateOrUpdateInput>;

// Output Schema
export interface AlertProcessingRulesCreateOrUpdateOutput {
  id?: string;
  type?: string;
  name?: string;
}
export const AlertProcessingRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AlertProcessingRulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an alert processing rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param alertProcessingRuleName - The name of the alert processing rule that needs to be fetched.
 */
export const AlertProcessingRulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AlertProcessingRulesCreateOrUpdateInput,
    outputSchema: AlertProcessingRulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface AlertProcessingRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  alertProcessingRuleName: string;
}
export const AlertProcessingRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    alertProcessingRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/actionRules/{alertProcessingRuleName}",
      apiVersion: "2021-08-08",
    }),
  ) as unknown as Schema.Codec<AlertProcessingRulesDeleteInput>;

// Output Schema
export type AlertProcessingRulesDeleteOutput = void;
export const AlertProcessingRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AlertProcessingRulesDeleteOutput>;

// The operation
/**
 * Delete an alert processing rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param alertProcessingRuleName - The name of the alert processing rule that needs to be fetched.
 */
export const AlertProcessingRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AlertProcessingRulesDeleteInput,
    outputSchema: AlertProcessingRulesDeleteOutput,
  }),
);
// Input Schema
export interface AlertProcessingRulesGetByNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  alertProcessingRuleName: string;
}
export const AlertProcessingRulesGetByNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    alertProcessingRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/actionRules/{alertProcessingRuleName}",
      apiVersion: "2021-08-08",
    }),
  ) as unknown as Schema.Codec<AlertProcessingRulesGetByNameInput>;

// Output Schema
export interface AlertProcessingRulesGetByNameOutput {
  id?: string;
  type?: string;
  name?: string;
}
export const AlertProcessingRulesGetByNameOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AlertProcessingRulesGetByNameOutput>;

// The operation
/**
 * Get an alert processing rule by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param alertProcessingRuleName - The name of the alert processing rule that needs to be fetched.
 */
export const AlertProcessingRulesGetByName =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AlertProcessingRulesGetByNameInput,
    outputSchema: AlertProcessingRulesGetByNameOutput,
  }));
// Input Schema
export interface AlertProcessingRulesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AlertProcessingRulesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/actionRules",
      apiVersion: "2021-08-08",
    }),
  ) as unknown as Schema.Codec<AlertProcessingRulesListByResourceGroupInput>;

// Output Schema
export interface AlertProcessingRulesListByResourceGroupOutput {
  value: { id?: string; type?: string; name?: string }[];
  nextLink?: string;
}
export const AlertProcessingRulesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AlertProcessingRulesListByResourceGroupOutput>;

// The operation
/**
 * List all alert processing rules in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AlertProcessingRulesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AlertProcessingRulesListByResourceGroupInput,
    outputSchema: AlertProcessingRulesListByResourceGroupOutput,
  }));
// Input Schema
export interface AlertProcessingRulesListBySubscriptionInput {
  subscriptionId: string;
}
export const AlertProcessingRulesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/actionRules",
      apiVersion: "2021-08-08",
    }),
  ) as unknown as Schema.Codec<AlertProcessingRulesListBySubscriptionInput>;

// Output Schema
export interface AlertProcessingRulesListBySubscriptionOutput {
  value: { id?: string; type?: string; name?: string }[];
  nextLink?: string;
}
export const AlertProcessingRulesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AlertProcessingRulesListBySubscriptionOutput>;

// The operation
/**
 * List all alert processing rules in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AlertProcessingRulesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AlertProcessingRulesListBySubscriptionInput,
    outputSchema: AlertProcessingRulesListBySubscriptionOutput,
  }));
// Input Schema
export interface AlertProcessingRulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  alertProcessingRuleName: string;
  properties?: { enabled?: boolean };
  tags?: Record<string, string>;
}
export const AlertProcessingRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    alertProcessingRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        enabled: Schema.optional(Schema.Boolean),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/actionRules/{alertProcessingRuleName}",
      apiVersion: "2021-08-08",
    }),
  ) as unknown as Schema.Codec<AlertProcessingRulesUpdateInput>;

// Output Schema
export interface AlertProcessingRulesUpdateOutput {
  id?: string;
  type?: string;
  name?: string;
}
export const AlertProcessingRulesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AlertProcessingRulesUpdateOutput>;

// The operation
/**
 * Enable, disable, or update tags for an alert processing rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param alertProcessingRuleName - The name of the alert processing rule that needs to be fetched.
 */
export const AlertProcessingRulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AlertProcessingRulesUpdateInput,
    outputSchema: AlertProcessingRulesUpdateOutput,
  }),
);
// Input Schema
export interface AlertsChangeStateInput {
  scope: string;
  alertId: string;
  newState: "New" | "Acknowledged" | "Closed";
  comments?: string;
}
export const AlertsChangeStateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    scope: Schema.String.pipe(T.PathParam()),
    alertId: Schema.String.pipe(T.PathParam()),
    newState: Schema.Literals(["New", "Acknowledged", "Closed"]),
    comments: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/{scope}/providers/Microsoft.AlertsManagement/alerts/{alertId}/changestate",
    apiVersion: "2019-03-01",
  }),
) as unknown as Schema.Codec<AlertsChangeStateInput>;

// Output Schema
export interface AlertsChangeStateOutput {
  id?: string;
  type?: string;
  name?: string;
}
export const AlertsChangeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AlertsChangeStateOutput>;

// The operation
/**
 * Change the state of an alert. If scope is a deleted resource then please use scope as parent resource of the delete resource. For example if my alert id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/vm1/providers/Microsoft.AlertsManagement/alerts/{alertId}' and 'vm1' is deleted then if you want to change state of this particular alert then use parent resource of scope. So in this example change state call will look like this: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/alerts/{alertId}'.
 *
 * @param scope - scope here is resourceId for which alert is created.
 * @param alertId - Unique ID of an alert instance.
 * @param api-version - API version.
 * @param newState - New state of the alert.
 */
export const AlertsChangeState = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsChangeStateInput,
  outputSchema: AlertsChangeStateOutput,
}));
// Input Schema
export interface AlertsGetAllInput {
  scope: string;
  targetResource?: string;
  targetResourceType?: string;
  targetResourceGroup?: string;
  monitorService?:
    | "Application Insights"
    | "ActivityLog Administrative"
    | "ActivityLog Security"
    | "ActivityLog Recommendation"
    | "ActivityLog Policy"
    | "ActivityLog Autoscale"
    | "Log Analytics"
    | "Nagios"
    | "Platform"
    | "SCOM"
    | "ServiceHealth"
    | "SmartDetector"
    | "VM Insights"
    | "Zabbix"
    | "Resource Health";
  monitorCondition?: "Fired" | "Resolved";
  severity?: "Sev0" | "Sev1" | "Sev2" | "Sev3" | "Sev4";
  alertState?: "New" | "Acknowledged" | "Closed";
  alertRule?: string;
  smartGroupId?: string;
  includeContext?: boolean;
  includeEgressConfig?: boolean;
  pageCount?: number;
  sortBy?:
    | "name"
    | "severity"
    | "alertState"
    | "monitorCondition"
    | "targetResource"
    | "targetResourceName"
    | "targetResourceGroup"
    | "targetResourceType"
    | "startDateTime"
    | "lastModifiedDateTime";
  sortOrder?: "asc" | "desc";
  select?: string;
  timeRange?: "1h" | "1d" | "7d" | "30d";
  customTimeRange?: string;
}
export const AlertsGetAllInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  targetResource: Schema.optional(Schema.String),
  targetResourceType: Schema.optional(Schema.String),
  targetResourceGroup: Schema.optional(Schema.String),
  monitorService: Schema.optional(
    Schema.Literals([
      "Application Insights",
      "ActivityLog Administrative",
      "ActivityLog Security",
      "ActivityLog Recommendation",
      "ActivityLog Policy",
      "ActivityLog Autoscale",
      "Log Analytics",
      "Nagios",
      "Platform",
      "SCOM",
      "ServiceHealth",
      "SmartDetector",
      "VM Insights",
      "Zabbix",
      "Resource Health",
    ]),
  ),
  monitorCondition: Schema.optional(Schema.Literals(["Fired", "Resolved"])),
  severity: Schema.optional(
    Schema.Literals(["Sev0", "Sev1", "Sev2", "Sev3", "Sev4"]),
  ),
  alertState: Schema.optional(
    Schema.Literals(["New", "Acknowledged", "Closed"]),
  ),
  alertRule: Schema.optional(Schema.String),
  smartGroupId: Schema.optional(Schema.String),
  includeContext: Schema.optional(Schema.Boolean),
  includeEgressConfig: Schema.optional(Schema.Boolean),
  pageCount: Schema.optional(Schema.Number),
  sortBy: Schema.optional(
    Schema.Literals([
      "name",
      "severity",
      "alertState",
      "monitorCondition",
      "targetResource",
      "targetResourceName",
      "targetResourceGroup",
      "targetResourceType",
      "startDateTime",
      "lastModifiedDateTime",
    ]),
  ),
  sortOrder: Schema.optional(Schema.Literals(["asc", "desc"])),
  select: Schema.optional(Schema.String),
  timeRange: Schema.optional(Schema.Literals(["1h", "1d", "7d", "30d"])),
  customTimeRange: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.AlertsManagement/alerts",
    apiVersion: "2019-03-01",
  }),
) as unknown as Schema.Codec<AlertsGetAllInput>;

// Output Schema
export interface AlertsGetAllOutput {
  nextLink?: string;
  value?: { id?: string; type?: string; name?: string }[];
}
export const AlertsGetAllOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<AlertsGetAllOutput>;

// The operation
/**
 * List all existing alerts, where the results can be filtered on the basis of multiple parameters (e.g. time range). The results can then be sorted on the basis specific fields, with the default being lastModifiedDateTime.
 *
 * @param scope - scope here is resourceId for which alert is created.
 * @param targetResource - Filter by target resource( which is full ARM ID) Default value is select all.
 * @param targetResourceType - Filter by target resource type. Default value is select all.
 * @param targetResourceGroup - Filter by target resource group name. Default value is select all.
 * @param monitorService - Filter by monitor service which generates the alert instance. Default value is select all.
 * @param monitorCondition - Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all.
 * @param severity - Filter by severity.  Default value is select all.
 * @param alertState - Filter by state of the alert instance. Default value is to select all.
 * @param alertRule - Filter by specific alert rule.  Default value is to select all.
 * @param smartGroupId - Filter the alerts list by the Smart Group Id. Default value is none.
 * @param includeContext - Include context which has contextual data specific to the monitor service. Default value is false'
 * @param includeEgressConfig - Include egress config which would be used for displaying the content in portal.  Default value is 'false'.
 * @param pageCount - Determines number of alerts returned per page in response. Permissible value is between 1 to 250. When the "includeContent"  filter is selected, maximum value allowed is 25. Default value is 25.
 * @param sortBy - Sort the query results by input field,  Default value is 'lastModifiedDateTime'.
 * @param sortOrder - Sort the query results order in either ascending or descending.  Default value is 'desc' for time fields and 'asc' for others.
 * @param select - This filter allows to selection of the fields(comma separated) which would  be part of the essential section. This would allow to project only the  required fields rather than getting entire content.  Default is to fetch all the fields in the essentials section.
 * @param timeRange - Filter by time range by below listed values. Default value is 1 day.
 * @param customTimeRange - Filter by custom time range in the format <start-time>/<end-time>  where time is in (ISO-8601 format)'. Permissible values is within 30 days from  query time. Either timeRange or customTimeRange could be used but not both. Default is none.
 * @param api-version - API version.
 */
export const AlertsGetAll = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsGetAllInput,
  outputSchema: AlertsGetAllOutput,
}));
// Input Schema
export interface AlertsGetByIdInput {
  scope: string;
  alertId: string;
}
export const AlertsGetByIdInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  alertId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.AlertsManagement/alerts/{alertId}",
    apiVersion: "2019-03-01",
  }),
) as unknown as Schema.Codec<AlertsGetByIdInput>;

// Output Schema
export interface AlertsGetByIdOutput {
  id?: string;
  type?: string;
  name?: string;
}
export const AlertsGetByIdOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AlertsGetByIdOutput>;

// The operation
/**
 * Get a specific alert.
 *
 * Get information related to a specific alert. If scope is a deleted resource then please use scope as parent resource of the delete resource. For example if my alert id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/vm1/providers/Microsoft.AlertsManagement/alerts/{alertId}' and 'vm1' is deleted then if you want to get alert by id then use parent resource of scope. So in this example get alert by id call will look like this: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/alerts/{alertId}'.
 *
 * @param scope - scope here is resourceId for which alert is created.
 * @param alertId - Unique ID of an alert instance.
 * @param api-version - API version.
 */
export const AlertsGetById = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsGetByIdInput,
  outputSchema: AlertsGetByIdOutput,
}));
// Input Schema
export interface AlertsGetHistoryInput {
  scope: string;
  alertId: string;
}
export const AlertsGetHistoryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  alertId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.AlertsManagement/alerts/{alertId}/history",
    apiVersion: "2019-03-01",
  }),
) as unknown as Schema.Codec<AlertsGetHistoryInput>;

// Output Schema
export interface AlertsGetHistoryOutput {
  id?: string;
  type?: string;
  name?: string;
}
export const AlertsGetHistoryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<AlertsGetHistoryOutput>;

// The operation
/**
 * Get the history of an alert, which captures any monitor condition changes (Fired/Resolved), alert state changes (New/Acknowledged/Closed) and applied action rules for that particular alert. If scope is a deleted resource then please use scope as parent resource of the delete resource. For example if my alert id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/vm1/providers/Microsoft.AlertsManagement/alerts/{alertId}' and 'vm1' is deleted then if you want to get history of this particular alert then use parent resource of scope. So in this example get history call will look like this: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/alerts/{alertId}/history'.
 *
 * @param scope - scope here is resourceId for which alert is created.
 * @param alertId - Unique ID of an alert instance.
 * @param api-version - The API version to use for this operation.
 */
export const AlertsGetHistory = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsGetHistoryInput,
  outputSchema: AlertsGetHistoryOutput,
}));
// Input Schema
export interface AlertsGetSummaryInput {
  scope: string;
  groupby:
    | "severity"
    | "alertState"
    | "monitorCondition"
    | "monitorService"
    | "signalType"
    | "alertRule";
  includeSmartGroupsCount?: boolean;
  targetResource?: string;
  targetResourceType?: string;
  targetResourceGroup?: string;
  monitorService?:
    | "Application Insights"
    | "ActivityLog Administrative"
    | "ActivityLog Security"
    | "ActivityLog Recommendation"
    | "ActivityLog Policy"
    | "ActivityLog Autoscale"
    | "Log Analytics"
    | "Nagios"
    | "Platform"
    | "SCOM"
    | "ServiceHealth"
    | "SmartDetector"
    | "VM Insights"
    | "Zabbix"
    | "Resource Health";
  monitorCondition?: "Fired" | "Resolved";
  severity?: "Sev0" | "Sev1" | "Sev2" | "Sev3" | "Sev4";
  alertState?: "New" | "Acknowledged" | "Closed";
  alertRule?: string;
  timeRange?: "1h" | "1d" | "7d" | "30d";
  customTimeRange?: string;
}
export const AlertsGetSummaryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  groupby: Schema.Literals([
    "severity",
    "alertState",
    "monitorCondition",
    "monitorService",
    "signalType",
    "alertRule",
  ]),
  includeSmartGroupsCount: Schema.optional(Schema.Boolean),
  targetResource: Schema.optional(Schema.String),
  targetResourceType: Schema.optional(Schema.String),
  targetResourceGroup: Schema.optional(Schema.String),
  monitorService: Schema.optional(
    Schema.Literals([
      "Application Insights",
      "ActivityLog Administrative",
      "ActivityLog Security",
      "ActivityLog Recommendation",
      "ActivityLog Policy",
      "ActivityLog Autoscale",
      "Log Analytics",
      "Nagios",
      "Platform",
      "SCOM",
      "ServiceHealth",
      "SmartDetector",
      "VM Insights",
      "Zabbix",
      "Resource Health",
    ]),
  ),
  monitorCondition: Schema.optional(Schema.Literals(["Fired", "Resolved"])),
  severity: Schema.optional(
    Schema.Literals(["Sev0", "Sev1", "Sev2", "Sev3", "Sev4"]),
  ),
  alertState: Schema.optional(
    Schema.Literals(["New", "Acknowledged", "Closed"]),
  ),
  alertRule: Schema.optional(Schema.String),
  timeRange: Schema.optional(Schema.Literals(["1h", "1d", "7d", "30d"])),
  customTimeRange: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.AlertsManagement/alertsSummary",
    apiVersion: "2019-03-01",
  }),
) as unknown as Schema.Codec<AlertsGetSummaryInput>;

// Output Schema
export interface AlertsGetSummaryOutput {
  id?: string;
  type?: string;
  name?: string;
}
export const AlertsGetSummaryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<AlertsGetSummaryOutput>;

// The operation
/**
 * Get a summarized count of your alerts grouped by various parameters (e.g. grouping by 'Severity' returns the count of alerts for each severity).
 *
 * @param scope - scope here is resourceId for which alert is created.
 * @param groupby - This parameter allows the result set to be grouped by input fields. For example, groupby=severity,alertstate.
 * @param includeSmartGroupsCount - Include count of the SmartGroups as part of the summary. Default value is 'false'.
 * @param targetResource - Filter by target resource( which is full ARM ID) Default value is select all.
 * @param targetResourceType - Filter by target resource type. Default value is select all.
 * @param targetResourceGroup - Filter by target resource group name. Default value is select all.
 * @param monitorService - Filter by monitor service which generates the alert instance. Default value is select all.
 * @param monitorCondition - Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all.
 * @param severity - Filter by severity.  Default value is select all.
 * @param alertState - Filter by state of the alert instance. Default value is to select all.
 * @param alertRule - Filter by specific alert rule.  Default value is to select all.
 * @param timeRange - Filter by time range by below listed values. Default value is 1 day.
 * @param customTimeRange - Filter by custom time range in the format <start-time>/<end-time>  where time is in (ISO-8601 format)'. Permissible values is within 30 days from  query time. Either timeRange or customTimeRange could be used but not both. Default is none.
 * @param api-version - API version.
 */
export const AlertsGetSummary = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsGetSummaryInput,
  outputSchema: AlertsGetSummaryOutput,
}));
// Input Schema
export interface AlertsMetaDataInput {
  identifier: "MonitorServiceList";
}
export const AlertsMetaDataInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  identifier: Schema.Literals(["MonitorServiceList"]),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AlertsManagement/alertsMetaData",
    apiVersion: "2019-03-01",
  }),
) as unknown as Schema.Codec<AlertsMetaDataInput>;

// Output Schema
export interface AlertsMetaDataOutput {
  properties?: { metadataIdentifier: "MonitorServiceList" };
}
export const AlertsMetaDataOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      metadataIdentifier: Schema.Literals(["MonitorServiceList"]),
    }),
  ),
}) as unknown as Schema.Codec<AlertsMetaDataOutput>;

// The operation
/**
 * List alerts meta data information based on value of identifier parameter.
 *
 * @param api-version - API version.
 * @param identifier - Identification of the information to be retrieved by API call.
 */
export const AlertsMetaData = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsMetaDataInput,
  outputSchema: AlertsMetaDataOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AlertsManagement/operations",
    apiVersion: "2019-03-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string;
  value: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
    }),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * List all operations available through Azure Alerts Management Resource Provider.
 *
 * @param api-version - API version.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrometheusRuleGroupsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ruleGroupName: string;
  properties: {
    description?: string;
    enabled?: boolean;
    clusterName?: string;
    scopes: string[];
    interval?: string;
    rules: {
      record?: string;
      alert?: string;
      enabled?: boolean;
      expression: string;
      labels?: Record<string, string>;
      severity?: number;
      for?: string;
      annotations?: Record<string, string>;
      actions?: {
        actionGroupId?: string;
        actionProperties?: Record<string, string>;
      }[];
      resolveConfiguration?: { autoResolved?: boolean; timeToResolve?: string };
    }[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const PrometheusRuleGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ruleGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
      clusterName: Schema.optional(Schema.String),
      scopes: Schema.Array(Schema.String),
      interval: Schema.optional(Schema.String),
      rules: Schema.Array(
        Schema.Struct({
          record: Schema.optional(Schema.String),
          alert: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Boolean),
          expression: Schema.String,
          labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          severity: Schema.optional(Schema.Number),
          for: Schema.optional(Schema.String),
          annotations: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          actions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                actionGroupId: Schema.optional(Schema.String),
                actionProperties: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
              }),
            ),
          ),
          resolveConfiguration: Schema.optional(
            Schema.Struct({
              autoResolved: Schema.optional(Schema.Boolean),
              timeToResolve: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/prometheusRuleGroups/{ruleGroupName}",
      apiVersion: "2023-03-01",
    }),
  ) as unknown as Schema.Codec<PrometheusRuleGroupsCreateOrUpdateInput>;

// Output Schema
export interface PrometheusRuleGroupsCreateOrUpdateOutput {
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
export const PrometheusRuleGroupsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PrometheusRuleGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Prometheus rule group definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ruleGroupName - The name of the rule group.
 */
export const PrometheusRuleGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrometheusRuleGroupsCreateOrUpdateInput,
    outputSchema: PrometheusRuleGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrometheusRuleGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  ruleGroupName: string;
}
export const PrometheusRuleGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ruleGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/prometheusRuleGroups/{ruleGroupName}",
      apiVersion: "2023-03-01",
    }),
  ) as unknown as Schema.Codec<PrometheusRuleGroupsDeleteInput>;

// Output Schema
export type PrometheusRuleGroupsDeleteOutput = void;
export const PrometheusRuleGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrometheusRuleGroupsDeleteOutput>;

// The operation
/**
 * Delete a Prometheus rule group definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ruleGroupName - The name of the rule group.
 */
export const PrometheusRuleGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrometheusRuleGroupsDeleteInput,
    outputSchema: PrometheusRuleGroupsDeleteOutput,
  }),
);
// Input Schema
export interface PrometheusRuleGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  ruleGroupName: string;
}
export const PrometheusRuleGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ruleGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/prometheusRuleGroups/{ruleGroupName}",
      apiVersion: "2023-03-01",
    }),
  ) as unknown as Schema.Codec<PrometheusRuleGroupsGetInput>;

// Output Schema
export interface PrometheusRuleGroupsGetOutput {
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
export const PrometheusRuleGroupsGetOutput =
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
  }) as unknown as Schema.Codec<PrometheusRuleGroupsGetOutput>;

// The operation
/**
 * Retrieve a Prometheus rule group definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ruleGroupName - The name of the rule group.
 */
export const PrometheusRuleGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrometheusRuleGroupsGetInput,
    outputSchema: PrometheusRuleGroupsGetOutput,
  }),
);
// Input Schema
export interface PrometheusRuleGroupsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrometheusRuleGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/prometheusRuleGroups",
      apiVersion: "2023-03-01",
    }),
  ) as unknown as Schema.Codec<PrometheusRuleGroupsListByResourceGroupInput>;

// Output Schema
export interface PrometheusRuleGroupsListByResourceGroupOutput {
  value?: {
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
export const PrometheusRuleGroupsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrometheusRuleGroupsListByResourceGroupOutput>;

// The operation
/**
 * Retrieve Prometheus rule group definitions in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PrometheusRuleGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrometheusRuleGroupsListByResourceGroupInput,
    outputSchema: PrometheusRuleGroupsListByResourceGroupOutput,
  }));
// Input Schema
export interface PrometheusRuleGroupsListBySubscriptionInput {
  subscriptionId: string;
}
export const PrometheusRuleGroupsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/prometheusRuleGroups",
      apiVersion: "2023-03-01",
    }),
  ) as unknown as Schema.Codec<PrometheusRuleGroupsListBySubscriptionInput>;

// Output Schema
export interface PrometheusRuleGroupsListBySubscriptionOutput {
  value?: {
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
export const PrometheusRuleGroupsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrometheusRuleGroupsListBySubscriptionOutput>;

// The operation
/**
 * Retrieve Prometheus all rule group definitions in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrometheusRuleGroupsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrometheusRuleGroupsListBySubscriptionInput,
    outputSchema: PrometheusRuleGroupsListBySubscriptionOutput,
  }));
// Input Schema
export interface PrometheusRuleGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ruleGroupName: string;
  tags?: Record<string, string>;
  properties?: { enabled?: boolean };
}
export const PrometheusRuleGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ruleGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        enabled: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/prometheusRuleGroups/{ruleGroupName}",
      apiVersion: "2023-03-01",
    }),
  ) as unknown as Schema.Codec<PrometheusRuleGroupsUpdateInput>;

// Output Schema
export interface PrometheusRuleGroupsUpdateOutput {
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
export const PrometheusRuleGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<PrometheusRuleGroupsUpdateOutput>;

// The operation
/**
 * Update an Prometheus rule group definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ruleGroupName - The name of the rule group.
 */
export const PrometheusRuleGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrometheusRuleGroupsUpdateInput,
    outputSchema: PrometheusRuleGroupsUpdateOutput,
  }),
);
// Input Schema
export interface SmartDetectorAlertRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  alertRuleName: string;
  properties?: {
    description?: string;
    state: "Enabled" | "Disabled";
    severity: "Sev0" | "Sev1" | "Sev2" | "Sev3" | "Sev4";
    frequency: string;
    detector: {
      id: string;
      parameters?: Record<string, unknown>;
      name?: string;
      description?: string;
      supportedResourceTypes?: string[];
      imagePaths?: string[];
      parameterDefinitions?: {
        name?: string;
        displayName?: string;
        description?: string;
        type?: "String" | "Integer" | "Double" | "Boolean" | "DateTime";
        isMandatory?: boolean;
      }[];
      supportedCadences?: number[];
    };
    scope: string[];
    actionGroups: {
      customEmailSubject?: string;
      customWebhookPayload?: string;
      groupIds: string[];
    };
    throttling?: { duration?: string };
  };
  id?: string;
  type?: string;
  name?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const SmartDetectorAlertRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    alertRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        state: Schema.Literals(["Enabled", "Disabled"]),
        severity: Schema.Literals(["Sev0", "Sev1", "Sev2", "Sev3", "Sev4"]),
        frequency: Schema.String,
        detector: Schema.Struct({
          id: Schema.String,
          parameters: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          supportedResourceTypes: Schema.optional(Schema.Array(Schema.String)),
          imagePaths: Schema.optional(Schema.Array(Schema.String)),
          parameterDefinitions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                displayName: Schema.optional(Schema.String),
                description: Schema.optional(Schema.String),
                type: Schema.optional(
                  Schema.Literals([
                    "String",
                    "Integer",
                    "Double",
                    "Boolean",
                    "DateTime",
                  ]),
                ),
                isMandatory: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
          supportedCadences: Schema.optional(Schema.Array(Schema.Number)),
        }),
        scope: Schema.Array(Schema.String),
        actionGroups: Schema.Struct({
          customEmailSubject: Schema.optional(Schema.String),
          customWebhookPayload: Schema.optional(Schema.String),
          groupIds: Schema.Array(Schema.String),
        }),
        throttling: Schema.optional(
          Schema.Struct({
            duration: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName}",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<SmartDetectorAlertRulesCreateOrUpdateInput>;

// Output Schema
export interface SmartDetectorAlertRulesCreateOrUpdateOutput {
  id?: string;
  type?: string;
  name?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const SmartDetectorAlertRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<SmartDetectorAlertRulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Smart Detector alert rule.
 *
 * @param subscriptionId - The Azure subscription Id.
 * @param resourceGroupName - The name of the resource group.
 * @param alertRuleName - The name of the alert rule.
 * @param api-version - Client Api Version.
 */
export const SmartDetectorAlertRulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SmartDetectorAlertRulesCreateOrUpdateInput,
    outputSchema: SmartDetectorAlertRulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SmartDetectorAlertRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  alertRuleName: string;
}
export const SmartDetectorAlertRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    alertRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName}",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<SmartDetectorAlertRulesDeleteInput>;

// Output Schema
export type SmartDetectorAlertRulesDeleteOutput = void;
export const SmartDetectorAlertRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SmartDetectorAlertRulesDeleteOutput>;

// The operation
/**
 * Delete an existing Smart Detector alert rule.
 *
 * @param subscriptionId - The Azure subscription Id.
 * @param resourceGroupName - The name of the resource group.
 * @param alertRuleName - The name of the alert rule.
 * @param api-version - Client Api Version.
 */
export const SmartDetectorAlertRulesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SmartDetectorAlertRulesDeleteInput,
    outputSchema: SmartDetectorAlertRulesDeleteOutput,
  }));
// Input Schema
export interface SmartDetectorAlertRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  alertRuleName: string;
  expandDetector?: boolean;
}
export const SmartDetectorAlertRulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    alertRuleName: Schema.String.pipe(T.PathParam()),
    expandDetector: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName}",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<SmartDetectorAlertRulesGetInput>;

// Output Schema
export interface SmartDetectorAlertRulesGetOutput {
  id?: string;
  type?: string;
  name?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const SmartDetectorAlertRulesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<SmartDetectorAlertRulesGetOutput>;

// The operation
/**
 * Get a specific Smart Detector alert rule.
 *
 * @param subscriptionId - The Azure subscription Id.
 * @param resourceGroupName - The name of the resource group.
 * @param alertRuleName - The name of the alert rule.
 * @param api-version - Client Api Version.
 * @param expandDetector - Indicates if Smart Detector should be expanded.
 */
export const SmartDetectorAlertRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SmartDetectorAlertRulesGetInput,
    outputSchema: SmartDetectorAlertRulesGetOutput,
  }),
);
// Input Schema
export interface SmartDetectorAlertRulesListInput {
  subscriptionId: string;
  expandDetector?: boolean;
}
export const SmartDetectorAlertRulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    expandDetector: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/microsoft.alertsManagement/smartDetectorAlertRules",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<SmartDetectorAlertRulesListInput>;

// Output Schema
export interface SmartDetectorAlertRulesListOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const SmartDetectorAlertRulesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SmartDetectorAlertRulesListOutput>;

// The operation
/**
 * List all the existing Smart Detector alert rules within the subscription.
 *
 * @param subscriptionId - The Azure subscription Id.
 * @param api-version - Client Api Version.
 * @param expandDetector - Indicates if Smart Detector should be expanded.
 */
export const SmartDetectorAlertRulesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SmartDetectorAlertRulesListInput,
    outputSchema: SmartDetectorAlertRulesListOutput,
  }),
);
// Input Schema
export interface SmartDetectorAlertRulesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  expandDetector?: boolean;
}
export const SmartDetectorAlertRulesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    expandDetector: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<SmartDetectorAlertRulesListByResourceGroupInput>;

// Output Schema
export interface SmartDetectorAlertRulesListByResourceGroupOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const SmartDetectorAlertRulesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SmartDetectorAlertRulesListByResourceGroupOutput>;

// The operation
/**
 * List all the existing Smart Detector alert rules within the subscription and resource group.
 *
 * @param subscriptionId - The Azure subscription Id.
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - Client Api Version.
 * @param expandDetector - Indicates if Smart Detector should be expanded.
 */
export const SmartDetectorAlertRulesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SmartDetectorAlertRulesListByResourceGroupInput,
    outputSchema: SmartDetectorAlertRulesListByResourceGroupOutput,
  }));
// Input Schema
export interface SmartDetectorAlertRulesPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  alertRuleName: string;
  id?: string;
  type?: string;
  name?: string;
  tags?: Record<string, string>;
  properties?: {
    description?: string;
    state?: "Enabled" | "Disabled";
    severity?: "Sev0" | "Sev1" | "Sev2" | "Sev3" | "Sev4";
    frequency?: string;
    actionGroups?: {
      customEmailSubject?: string;
      customWebhookPayload?: string;
      groupIds: string[];
    };
    throttling?: { duration?: string };
  };
}
export const SmartDetectorAlertRulesPatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    alertRuleName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        severity: Schema.optional(
          Schema.Literals(["Sev0", "Sev1", "Sev2", "Sev3", "Sev4"]),
        ),
        frequency: Schema.optional(Schema.String),
        actionGroups: Schema.optional(
          Schema.Struct({
            customEmailSubject: Schema.optional(Schema.String),
            customWebhookPayload: Schema.optional(Schema.String),
            groupIds: Schema.Array(Schema.String),
          }),
        ),
        throttling: Schema.optional(
          Schema.Struct({
            duration: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName}",
      apiVersion: "2021-04-01",
    }),
  ) as unknown as Schema.Codec<SmartDetectorAlertRulesPatchInput>;

// Output Schema
export interface SmartDetectorAlertRulesPatchOutput {
  id?: string;
  type?: string;
  name?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const SmartDetectorAlertRulesPatchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<SmartDetectorAlertRulesPatchOutput>;

// The operation
/**
 * Patch a specific Smart Detector alert rule.
 *
 * @param subscriptionId - The Azure subscription Id.
 * @param resourceGroupName - The name of the resource group.
 * @param alertRuleName - The name of the alert rule.
 * @param api-version - Client Api Version.
 */
export const SmartDetectorAlertRulesPatch =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SmartDetectorAlertRulesPatchInput,
    outputSchema: SmartDetectorAlertRulesPatchOutput,
  }));
