/**
 * Azure Alertsmanagement API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
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
  );
export type AlertProcessingRulesCreateOrUpdateInput =
  typeof AlertProcessingRulesCreateOrUpdateInput.Type;

// Output Schema
export const AlertProcessingRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  });
export type AlertProcessingRulesCreateOrUpdateOutput =
  typeof AlertProcessingRulesCreateOrUpdateOutput.Type;

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
  );
export type AlertProcessingRulesDeleteInput =
  typeof AlertProcessingRulesDeleteInput.Type;

// Output Schema
export const AlertProcessingRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AlertProcessingRulesDeleteOutput =
  typeof AlertProcessingRulesDeleteOutput.Type;

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
  );
export type AlertProcessingRulesGetByNameInput =
  typeof AlertProcessingRulesGetByNameInput.Type;

// Output Schema
export const AlertProcessingRulesGetByNameOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  });
export type AlertProcessingRulesGetByNameOutput =
  typeof AlertProcessingRulesGetByNameOutput.Type;

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
  );
export type AlertProcessingRulesListByResourceGroupInput =
  typeof AlertProcessingRulesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type AlertProcessingRulesListByResourceGroupOutput =
  typeof AlertProcessingRulesListByResourceGroupOutput.Type;

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
export const AlertProcessingRulesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/actionRules",
      apiVersion: "2021-08-08",
    }),
  );
export type AlertProcessingRulesListBySubscriptionInput =
  typeof AlertProcessingRulesListBySubscriptionInput.Type;

// Output Schema
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
  });
export type AlertProcessingRulesListBySubscriptionOutput =
  typeof AlertProcessingRulesListBySubscriptionOutput.Type;

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
  );
export type AlertProcessingRulesUpdateInput =
  typeof AlertProcessingRulesUpdateInput.Type;

// Output Schema
export const AlertProcessingRulesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  });
export type AlertProcessingRulesUpdateOutput =
  typeof AlertProcessingRulesUpdateOutput.Type;

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
export const AlertsChangeStateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "/{scope}/providers/Microsoft.AlertsManagement/alerts/{alertId}/changestate",
    apiVersion: "2019-03-01",
  }),
);
export type AlertsChangeStateInput = typeof AlertsChangeStateInput.Type;

// Output Schema
export const AlertsChangeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  });
export type AlertsChangeStateOutput = typeof AlertsChangeStateOutput.Type;

// The operation
/**
 * Change the state of an alert. If scope is a deleted resource then please use scope as parent resource of the delete resource. For example if my alert id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/vm1/providers/Microsoft.AlertsManagement/alerts/{alertId}' and 'vm1' is deleted then if you want to change state of this particular alert then use parent resource of scope. So in this example change state call will look like this: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/alerts/{alertId}'.
 */
export const AlertsChangeState = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsChangeStateInput,
  outputSchema: AlertsChangeStateOutput,
}));
// Input Schema
export const AlertsGetAllInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.AlertsManagement/alerts",
    apiVersion: "2019-03-01",
  }),
);
export type AlertsGetAllInput = typeof AlertsGetAllInput.Type;

// Output Schema
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
});
export type AlertsGetAllOutput = typeof AlertsGetAllOutput.Type;

// The operation
/**
 * List all existing alerts, where the results can be filtered on the basis of multiple parameters (e.g. time range). The results can then be sorted on the basis specific fields, with the default being lastModifiedDateTime.
 */
export const AlertsGetAll = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsGetAllInput,
  outputSchema: AlertsGetAllOutput,
}));
// Input Schema
export const AlertsGetByIdInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.AlertsManagement/alerts/{alertId}",
    apiVersion: "2019-03-01",
  }),
);
export type AlertsGetByIdInput = typeof AlertsGetByIdInput.Type;

// Output Schema
export const AlertsGetByIdOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});
export type AlertsGetByIdOutput = typeof AlertsGetByIdOutput.Type;

// The operation
/**
 * Get a specific alert.
 *
 * Get information related to a specific alert. If scope is a deleted resource then please use scope as parent resource of the delete resource. For example if my alert id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/vm1/providers/Microsoft.AlertsManagement/alerts/{alertId}' and 'vm1' is deleted then if you want to get alert by id then use parent resource of scope. So in this example get alert by id call will look like this: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/alerts/{alertId}'.
 */
export const AlertsGetById = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsGetByIdInput,
  outputSchema: AlertsGetByIdOutput,
}));
// Input Schema
export const AlertsGetHistoryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.AlertsManagement/alerts/{alertId}/history",
    apiVersion: "2019-03-01",
  }),
);
export type AlertsGetHistoryInput = typeof AlertsGetHistoryInput.Type;

// Output Schema
export const AlertsGetHistoryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  },
);
export type AlertsGetHistoryOutput = typeof AlertsGetHistoryOutput.Type;

// The operation
/**
 * Get the history of an alert, which captures any monitor condition changes (Fired/Resolved), alert state changes (New/Acknowledged/Closed) and applied action rules for that particular alert. If scope is a deleted resource then please use scope as parent resource of the delete resource. For example if my alert id is '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/vm1/providers/Microsoft.AlertsManagement/alerts/{alertId}' and 'vm1' is deleted then if you want to get history of this particular alert then use parent resource of scope. So in this example get history call will look like this: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AlertsManagement/alerts/{alertId}/history'.
 *
 * @param api-version - The API version to use for this operation.
 */
export const AlertsGetHistory = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsGetHistoryInput,
  outputSchema: AlertsGetHistoryOutput,
}));
// Input Schema
export const AlertsGetSummaryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.AlertsManagement/alertsSummary",
    apiVersion: "2019-03-01",
  }),
);
export type AlertsGetSummaryInput = typeof AlertsGetSummaryInput.Type;

// Output Schema
export const AlertsGetSummaryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  },
);
export type AlertsGetSummaryOutput = typeof AlertsGetSummaryOutput.Type;

// The operation
/**
 * Get a summarized count of your alerts grouped by various parameters (e.g. grouping by 'Severity' returns the count of alerts for each severity).
 */
export const AlertsGetSummary = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsGetSummaryInput,
  outputSchema: AlertsGetSummaryOutput,
}));
// Input Schema
export const AlertsMetaDataInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AlertsManagement/alertsMetaData",
    apiVersion: "2019-03-01",
  }),
);
export type AlertsMetaDataInput = typeof AlertsMetaDataInput.Type;

// Output Schema
export const AlertsMetaDataOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      metadataIdentifier: Schema.Literals(["MonitorServiceList"]),
    }),
  ),
});
export type AlertsMetaDataOutput = typeof AlertsMetaDataOutput.Type;

// The operation
/**
 * List alerts meta data information based on value of identifier parameter.
 */
export const AlertsMetaData = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsMetaDataInput,
  outputSchema: AlertsMetaDataOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AlertsManagement/operations",
    apiVersion: "2019-03-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * List all operations available through Azure Alerts Management Resource Provider.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
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
  );
export type PrometheusRuleGroupsCreateOrUpdateInput =
  typeof PrometheusRuleGroupsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type PrometheusRuleGroupsCreateOrUpdateOutput =
  typeof PrometheusRuleGroupsCreateOrUpdateOutput.Type;

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
  );
export type PrometheusRuleGroupsDeleteInput =
  typeof PrometheusRuleGroupsDeleteInput.Type;

// Output Schema
export const PrometheusRuleGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrometheusRuleGroupsDeleteOutput =
  typeof PrometheusRuleGroupsDeleteOutput.Type;

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
  );
export type PrometheusRuleGroupsGetInput =
  typeof PrometheusRuleGroupsGetInput.Type;

// Output Schema
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
  });
export type PrometheusRuleGroupsGetOutput =
  typeof PrometheusRuleGroupsGetOutput.Type;

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
  );
export type PrometheusRuleGroupsListByResourceGroupInput =
  typeof PrometheusRuleGroupsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type PrometheusRuleGroupsListByResourceGroupOutput =
  typeof PrometheusRuleGroupsListByResourceGroupOutput.Type;

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
export const PrometheusRuleGroupsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/prometheusRuleGroups",
      apiVersion: "2023-03-01",
    }),
  );
export type PrometheusRuleGroupsListBySubscriptionInput =
  typeof PrometheusRuleGroupsListBySubscriptionInput.Type;

// Output Schema
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
  });
export type PrometheusRuleGroupsListBySubscriptionOutput =
  typeof PrometheusRuleGroupsListBySubscriptionOutput.Type;

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
  );
export type PrometheusRuleGroupsUpdateInput =
  typeof PrometheusRuleGroupsUpdateInput.Type;

// Output Schema
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
  });
export type PrometheusRuleGroupsUpdateOutput =
  typeof PrometheusRuleGroupsUpdateOutput.Type;

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
export const SmartDetectorAlertRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type SmartDetectorAlertRulesCreateOrUpdateInput =
  typeof SmartDetectorAlertRulesCreateOrUpdateInput.Type;

// Output Schema
export const SmartDetectorAlertRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type SmartDetectorAlertRulesCreateOrUpdateOutput =
  typeof SmartDetectorAlertRulesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a Smart Detector alert rule.
 */
export const SmartDetectorAlertRulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SmartDetectorAlertRulesCreateOrUpdateInput,
    outputSchema: SmartDetectorAlertRulesCreateOrUpdateOutput,
  }));
// Input Schema
export const SmartDetectorAlertRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName}",
      apiVersion: "2021-04-01",
    }),
  );
export type SmartDetectorAlertRulesDeleteInput =
  typeof SmartDetectorAlertRulesDeleteInput.Type;

// Output Schema
export const SmartDetectorAlertRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SmartDetectorAlertRulesDeleteOutput =
  typeof SmartDetectorAlertRulesDeleteOutput.Type;

// The operation
/**
 * Delete an existing Smart Detector alert rule.
 */
export const SmartDetectorAlertRulesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SmartDetectorAlertRulesDeleteInput,
    outputSchema: SmartDetectorAlertRulesDeleteOutput,
  }));
// Input Schema
export const SmartDetectorAlertRulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName}",
      apiVersion: "2021-04-01",
    }),
  );
export type SmartDetectorAlertRulesGetInput =
  typeof SmartDetectorAlertRulesGetInput.Type;

// Output Schema
export const SmartDetectorAlertRulesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type SmartDetectorAlertRulesGetOutput =
  typeof SmartDetectorAlertRulesGetOutput.Type;

// The operation
/**
 * Get a specific Smart Detector alert rule.
 */
export const SmartDetectorAlertRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SmartDetectorAlertRulesGetInput,
    outputSchema: SmartDetectorAlertRulesGetOutput,
  }),
);
// Input Schema
export const SmartDetectorAlertRulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/microsoft.alertsManagement/smartDetectorAlertRules",
      apiVersion: "2021-04-01",
    }),
  );
export type SmartDetectorAlertRulesListInput =
  typeof SmartDetectorAlertRulesListInput.Type;

// Output Schema
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
  });
export type SmartDetectorAlertRulesListOutput =
  typeof SmartDetectorAlertRulesListOutput.Type;

// The operation
/**
 * List all the existing Smart Detector alert rules within the subscription.
 */
export const SmartDetectorAlertRulesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SmartDetectorAlertRulesListInput,
    outputSchema: SmartDetectorAlertRulesListOutput,
  }),
);
// Input Schema
export const SmartDetectorAlertRulesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules",
      apiVersion: "2021-04-01",
    }),
  );
export type SmartDetectorAlertRulesListByResourceGroupInput =
  typeof SmartDetectorAlertRulesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type SmartDetectorAlertRulesListByResourceGroupOutput =
  typeof SmartDetectorAlertRulesListByResourceGroupOutput.Type;

// The operation
/**
 * List all the existing Smart Detector alert rules within the subscription and resource group.
 */
export const SmartDetectorAlertRulesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SmartDetectorAlertRulesListByResourceGroupInput,
    outputSchema: SmartDetectorAlertRulesListByResourceGroupOutput,
  }));
// Input Schema
export const SmartDetectorAlertRulesPatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type SmartDetectorAlertRulesPatchInput =
  typeof SmartDetectorAlertRulesPatchInput.Type;

// Output Schema
export const SmartDetectorAlertRulesPatchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type SmartDetectorAlertRulesPatchOutput =
  typeof SmartDetectorAlertRulesPatchOutput.Type;

// The operation
/**
 * Patch a specific Smart Detector alert rule.
 */
export const SmartDetectorAlertRulesPatch =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SmartDetectorAlertRulesPatchInput,
    outputSchema: SmartDetectorAlertRulesPatchOutput,
  }));
