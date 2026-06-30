/**
 * Azure Monitor API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DataCollectionRuleConfigurationMetadataFetchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    dcrKind: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    withStreamMetadata: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/locations/{location}/fetchDataCollectionRuleConfigurationMetadata",
      apiVersion: "2025-01-01",
    }),
  );
export type DataCollectionRuleConfigurationMetadataFetchInput =
  typeof DataCollectionRuleConfigurationMetadataFetchInput.Type;

// Output Schema
export const DataCollectionRuleConfigurationMetadataFetchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationMetadata: Schema.optional(
      Schema.Struct({
        platformTelemetry: Schema.optional(
          Schema.Struct({
            platformLogs: Schema.optional(
              Schema.Struct({
                supportedDestinations: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                supportedResourceTypes: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                supportedStreams: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      streamId: Schema.optional(Schema.String),
                      metadata: Schema.optional(
                        Schema.Struct({
                          logsSpecification: Schema.optional(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              displayName: Schema.optional(Schema.String),
                              groups: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                          metricsSpecification: Schema.optional(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              displayName: Schema.optional(Schema.String),
                              description: Schema.optional(Schema.String),
                              unit: Schema.optional(Schema.String),
                              aggregationType: Schema.optional(Schema.String),
                              groups: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
            platformMetrics: Schema.optional(
              Schema.Struct({
                supportedDestinations: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                supportedResourceTypes: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                supportedStreams: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      streamId: Schema.optional(Schema.String),
                      metadata: Schema.optional(
                        Schema.Struct({
                          logsSpecification: Schema.optional(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              displayName: Schema.optional(Schema.String),
                              groups: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                          metricsSpecification: Schema.optional(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              displayName: Schema.optional(Schema.String),
                              description: Schema.optional(Schema.String),
                              unit: Schema.optional(Schema.String),
                              aggregationType: Schema.optional(Schema.String),
                              groups: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  });
export type DataCollectionRuleConfigurationMetadataFetchOutput =
  typeof DataCollectionRuleConfigurationMetadataFetchOutput.Type;

// The operation
/**
 * Fetches configuration metadata for data collection rules. When withStreamMetadata is true, returns detailed stream information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The Azure region for the metadata request.
 */
export const DataCollectionRuleConfigurationMetadataFetch =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataCollectionRuleConfigurationMetadataFetchInput,
    outputSchema: DataCollectionRuleConfigurationMetadataFetchOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Insights/operations",
    apiVersion: "2025-01-01",
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
export const ScheduledQueryRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
    kind: Schema.optional(
      Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
    ),
    etag: Schema.optional(Schema.String),
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
    properties: Schema.Struct({
      createdWithApiVersion: Schema.optional(Schema.String),
      isLegacyLogAnalyticsRule: Schema.optional(Schema.Boolean),
      description: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      severity: Schema.optional(Schema.Literals([0, 1, 2, 3, 4])),
      enabled: Schema.optional(Schema.Boolean),
      scopes: Schema.optional(Schema.Array(Schema.String)),
      evaluationFrequency: Schema.optional(Schema.String),
      windowSize: Schema.optional(Schema.String),
      overrideQueryTimeRange: Schema.optional(Schema.String),
      targetResourceTypes: Schema.optional(Schema.Array(Schema.String)),
      criteria: Schema.optional(
        Schema.Struct({
          allOf: Schema.optional(
            Schema.Array(
              Schema.Struct({
                criterionType: Schema.optional(
                  Schema.Literals([
                    "StaticThresholdCriterion",
                    "DynamicThresholdCriterion",
                  ]),
                ),
                query: Schema.optional(Schema.String),
                timeAggregation: Schema.optional(
                  Schema.Literals([
                    "Count",
                    "Average",
                    "Minimum",
                    "Maximum",
                    "Total",
                  ]),
                ),
                metricMeasureColumn: Schema.optional(Schema.String),
                resourceIdColumn: Schema.optional(Schema.String),
                dimensions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      operator: Schema.Literals(["Include", "Exclude"]),
                      values: Schema.Array(Schema.String),
                    }),
                  ),
                ),
                operator: Schema.optional(
                  Schema.Literals([
                    "Equals",
                    "GreaterThan",
                    "GreaterThanOrEqual",
                    "LessThan",
                    "LessThanOrEqual",
                    "GreaterOrLessThan",
                  ]),
                ),
                threshold: Schema.optional(Schema.Number),
                alertSensitivity: Schema.optional(Schema.String),
                ignoreDataBefore: Schema.optional(Schema.String),
                failingPeriods: Schema.optional(
                  Schema.Struct({
                    numberOfEvaluationPeriods: Schema.optional(Schema.Number),
                    minFailingPeriodsToAlert: Schema.optional(Schema.Number),
                  }),
                ),
                metricName: Schema.optional(Schema.String),
                minRecurrenceCount: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
      muteActionsDuration: Schema.optional(Schema.String),
      actions: Schema.optional(
        Schema.Struct({
          actionGroups: Schema.optional(Schema.Array(Schema.String)),
          customProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          actionProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
        }),
      ),
      isWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
      checkWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
      skipQueryValidation: Schema.optional(Schema.Boolean),
      autoMitigate: Schema.optional(Schema.Boolean),
      resolveConfiguration: Schema.optional(
        Schema.Struct({
          autoResolved: Schema.optional(Schema.Boolean),
          timeToResolve: Schema.optional(Schema.String),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesCreateOrUpdateInput =
  typeof ScheduledQueryRulesCreateOrUpdateInput.Type;

// Output Schema
export const ScheduledQueryRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
    kind: Schema.optional(
      Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
    ),
    etag: Schema.optional(Schema.String),
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
    properties: Schema.Struct({
      createdWithApiVersion: Schema.optional(Schema.String),
      isLegacyLogAnalyticsRule: Schema.optional(Schema.Boolean),
      description: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      severity: Schema.optional(Schema.Literals([0, 1, 2, 3, 4])),
      enabled: Schema.optional(Schema.Boolean),
      scopes: Schema.optional(Schema.Array(Schema.String)),
      evaluationFrequency: Schema.optional(Schema.String),
      windowSize: Schema.optional(Schema.String),
      overrideQueryTimeRange: Schema.optional(Schema.String),
      targetResourceTypes: Schema.optional(Schema.Array(Schema.String)),
      criteria: Schema.optional(
        Schema.Struct({
          allOf: Schema.optional(
            Schema.Array(
              Schema.Struct({
                criterionType: Schema.optional(
                  Schema.Literals([
                    "StaticThresholdCriterion",
                    "DynamicThresholdCriterion",
                  ]),
                ),
                query: Schema.optional(Schema.String),
                timeAggregation: Schema.optional(
                  Schema.Literals([
                    "Count",
                    "Average",
                    "Minimum",
                    "Maximum",
                    "Total",
                  ]),
                ),
                metricMeasureColumn: Schema.optional(Schema.String),
                resourceIdColumn: Schema.optional(Schema.String),
                dimensions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      operator: Schema.Literals(["Include", "Exclude"]),
                      values: Schema.Array(Schema.String),
                    }),
                  ),
                ),
                operator: Schema.optional(
                  Schema.Literals([
                    "Equals",
                    "GreaterThan",
                    "GreaterThanOrEqual",
                    "LessThan",
                    "LessThanOrEqual",
                    "GreaterOrLessThan",
                  ]),
                ),
                threshold: Schema.optional(Schema.Number),
                alertSensitivity: Schema.optional(Schema.String),
                ignoreDataBefore: Schema.optional(Schema.String),
                failingPeriods: Schema.optional(
                  Schema.Struct({
                    numberOfEvaluationPeriods: Schema.optional(Schema.Number),
                    minFailingPeriodsToAlert: Schema.optional(Schema.Number),
                  }),
                ),
                metricName: Schema.optional(Schema.String),
                minRecurrenceCount: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
      muteActionsDuration: Schema.optional(Schema.String),
      actions: Schema.optional(
        Schema.Struct({
          actionGroups: Schema.optional(Schema.Array(Schema.String)),
          customProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          actionProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
        }),
      ),
      isWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
      checkWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
      skipQueryValidation: Schema.optional(Schema.Boolean),
      autoMitigate: Schema.optional(Schema.Boolean),
      resolveConfiguration: Schema.optional(
        Schema.Struct({
          autoResolved: Schema.optional(Schema.Boolean),
          timeToResolve: Schema.optional(Schema.String),
        }),
      ),
    }),
  });
export type ScheduledQueryRulesCreateOrUpdateOutput =
  typeof ScheduledQueryRulesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a scheduled query rule.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ruleName - The name of the rule.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScheduledQueryRulesCreateOrUpdateInput,
    outputSchema: ScheduledQueryRulesCreateOrUpdateOutput,
  }));
// Input Schema
export const ScheduledQueryRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesDeleteInput =
  typeof ScheduledQueryRulesDeleteInput.Type;

// Output Schema
export const ScheduledQueryRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScheduledQueryRulesDeleteOutput =
  typeof ScheduledQueryRulesDeleteOutput.Type;

// The operation
/**
 * Deletes a scheduled query rule.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ruleName - The name of the rule.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScheduledQueryRulesDeleteInput,
    outputSchema: ScheduledQueryRulesDeleteOutput,
  }),
);
// Input Schema
export const ScheduledQueryRulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesGetInput =
  typeof ScheduledQueryRulesGetInput.Type;

// Output Schema
export const ScheduledQueryRulesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
    kind: Schema.optional(
      Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
    ),
    etag: Schema.optional(Schema.String),
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
    properties: Schema.Struct({
      createdWithApiVersion: Schema.optional(Schema.String),
      isLegacyLogAnalyticsRule: Schema.optional(Schema.Boolean),
      description: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      severity: Schema.optional(Schema.Literals([0, 1, 2, 3, 4])),
      enabled: Schema.optional(Schema.Boolean),
      scopes: Schema.optional(Schema.Array(Schema.String)),
      evaluationFrequency: Schema.optional(Schema.String),
      windowSize: Schema.optional(Schema.String),
      overrideQueryTimeRange: Schema.optional(Schema.String),
      targetResourceTypes: Schema.optional(Schema.Array(Schema.String)),
      criteria: Schema.optional(
        Schema.Struct({
          allOf: Schema.optional(
            Schema.Array(
              Schema.Struct({
                criterionType: Schema.optional(
                  Schema.Literals([
                    "StaticThresholdCriterion",
                    "DynamicThresholdCriterion",
                  ]),
                ),
                query: Schema.optional(Schema.String),
                timeAggregation: Schema.optional(
                  Schema.Literals([
                    "Count",
                    "Average",
                    "Minimum",
                    "Maximum",
                    "Total",
                  ]),
                ),
                metricMeasureColumn: Schema.optional(Schema.String),
                resourceIdColumn: Schema.optional(Schema.String),
                dimensions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      operator: Schema.Literals(["Include", "Exclude"]),
                      values: Schema.Array(Schema.String),
                    }),
                  ),
                ),
                operator: Schema.optional(
                  Schema.Literals([
                    "Equals",
                    "GreaterThan",
                    "GreaterThanOrEqual",
                    "LessThan",
                    "LessThanOrEqual",
                    "GreaterOrLessThan",
                  ]),
                ),
                threshold: Schema.optional(Schema.Number),
                alertSensitivity: Schema.optional(Schema.String),
                ignoreDataBefore: Schema.optional(Schema.String),
                failingPeriods: Schema.optional(
                  Schema.Struct({
                    numberOfEvaluationPeriods: Schema.optional(Schema.Number),
                    minFailingPeriodsToAlert: Schema.optional(Schema.Number),
                  }),
                ),
                metricName: Schema.optional(Schema.String),
                minRecurrenceCount: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
      muteActionsDuration: Schema.optional(Schema.String),
      actions: Schema.optional(
        Schema.Struct({
          actionGroups: Schema.optional(Schema.Array(Schema.String)),
          customProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          actionProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
        }),
      ),
      isWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
      checkWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
      skipQueryValidation: Schema.optional(Schema.Boolean),
      autoMitigate: Schema.optional(Schema.Boolean),
      resolveConfiguration: Schema.optional(
        Schema.Struct({
          autoResolved: Schema.optional(Schema.Boolean),
          timeToResolve: Schema.optional(Schema.String),
        }),
      ),
    }),
  });
export type ScheduledQueryRulesGetOutput =
  typeof ScheduledQueryRulesGetOutput.Type;

// The operation
/**
 * Retrieve an scheduled query rule definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ruleName - The name of the rule.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScheduledQueryRulesGetInput,
    outputSchema: ScheduledQueryRulesGetOutput,
  }),
);
// Input Schema
export const ScheduledQueryRulesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesListByResourceGroupInput =
  typeof ScheduledQueryRulesListByResourceGroupInput.Type;

// Output Schema
export const ScheduledQueryRulesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
          kind: Schema.optional(
            Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
          ),
          etag: Schema.optional(Schema.String),
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
          properties: Schema.Struct({
            createdWithApiVersion: Schema.optional(Schema.String),
            isLegacyLogAnalyticsRule: Schema.optional(Schema.Boolean),
            description: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.Literals([0, 1, 2, 3, 4])),
            enabled: Schema.optional(Schema.Boolean),
            scopes: Schema.optional(Schema.Array(Schema.String)),
            evaluationFrequency: Schema.optional(Schema.String),
            windowSize: Schema.optional(Schema.String),
            overrideQueryTimeRange: Schema.optional(Schema.String),
            targetResourceTypes: Schema.optional(Schema.Array(Schema.String)),
            criteria: Schema.optional(
              Schema.Struct({
                allOf: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      criterionType: Schema.optional(
                        Schema.Literals([
                          "StaticThresholdCriterion",
                          "DynamicThresholdCriterion",
                        ]),
                      ),
                      query: Schema.optional(Schema.String),
                      timeAggregation: Schema.optional(
                        Schema.Literals([
                          "Count",
                          "Average",
                          "Minimum",
                          "Maximum",
                          "Total",
                        ]),
                      ),
                      metricMeasureColumn: Schema.optional(Schema.String),
                      resourceIdColumn: Schema.optional(Schema.String),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.String,
                            operator: Schema.Literals(["Include", "Exclude"]),
                            values: Schema.Array(Schema.String),
                          }),
                        ),
                      ),
                      operator: Schema.optional(
                        Schema.Literals([
                          "Equals",
                          "GreaterThan",
                          "GreaterThanOrEqual",
                          "LessThan",
                          "LessThanOrEqual",
                          "GreaterOrLessThan",
                        ]),
                      ),
                      threshold: Schema.optional(Schema.Number),
                      alertSensitivity: Schema.optional(Schema.String),
                      ignoreDataBefore: Schema.optional(Schema.String),
                      failingPeriods: Schema.optional(
                        Schema.Struct({
                          numberOfEvaluationPeriods: Schema.optional(
                            Schema.Number,
                          ),
                          minFailingPeriodsToAlert: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      metricName: Schema.optional(Schema.String),
                      minRecurrenceCount: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
            muteActionsDuration: Schema.optional(Schema.String),
            actions: Schema.optional(
              Schema.Struct({
                actionGroups: Schema.optional(Schema.Array(Schema.String)),
                customProperties: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                actionProperties: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
              }),
            ),
            isWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
            checkWorkspaceAlertsStorageConfigured: Schema.optional(
              Schema.Boolean,
            ),
            skipQueryValidation: Schema.optional(Schema.Boolean),
            autoMitigate: Schema.optional(Schema.Boolean),
            resolveConfiguration: Schema.optional(
              Schema.Struct({
                autoResolved: Schema.optional(Schema.Boolean),
                timeToResolve: Schema.optional(Schema.String),
              }),
            ),
          }),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ScheduledQueryRulesListByResourceGroupOutput =
  typeof ScheduledQueryRulesListByResourceGroupOutput.Type;

// The operation
/**
 * Retrieve scheduled query rule definitions in a resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScheduledQueryRulesListByResourceGroupInput,
    outputSchema: ScheduledQueryRulesListByResourceGroupOutput,
  }));
// Input Schema
export const ScheduledQueryRulesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/scheduledQueryRules",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesListBySubscriptionInput =
  typeof ScheduledQueryRulesListBySubscriptionInput.Type;

// Output Schema
export const ScheduledQueryRulesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
          kind: Schema.optional(
            Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
          ),
          etag: Schema.optional(Schema.String),
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
          properties: Schema.Struct({
            createdWithApiVersion: Schema.optional(Schema.String),
            isLegacyLogAnalyticsRule: Schema.optional(Schema.Boolean),
            description: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.Literals([0, 1, 2, 3, 4])),
            enabled: Schema.optional(Schema.Boolean),
            scopes: Schema.optional(Schema.Array(Schema.String)),
            evaluationFrequency: Schema.optional(Schema.String),
            windowSize: Schema.optional(Schema.String),
            overrideQueryTimeRange: Schema.optional(Schema.String),
            targetResourceTypes: Schema.optional(Schema.Array(Schema.String)),
            criteria: Schema.optional(
              Schema.Struct({
                allOf: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      criterionType: Schema.optional(
                        Schema.Literals([
                          "StaticThresholdCriterion",
                          "DynamicThresholdCriterion",
                        ]),
                      ),
                      query: Schema.optional(Schema.String),
                      timeAggregation: Schema.optional(
                        Schema.Literals([
                          "Count",
                          "Average",
                          "Minimum",
                          "Maximum",
                          "Total",
                        ]),
                      ),
                      metricMeasureColumn: Schema.optional(Schema.String),
                      resourceIdColumn: Schema.optional(Schema.String),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.String,
                            operator: Schema.Literals(["Include", "Exclude"]),
                            values: Schema.Array(Schema.String),
                          }),
                        ),
                      ),
                      operator: Schema.optional(
                        Schema.Literals([
                          "Equals",
                          "GreaterThan",
                          "GreaterThanOrEqual",
                          "LessThan",
                          "LessThanOrEqual",
                          "GreaterOrLessThan",
                        ]),
                      ),
                      threshold: Schema.optional(Schema.Number),
                      alertSensitivity: Schema.optional(Schema.String),
                      ignoreDataBefore: Schema.optional(Schema.String),
                      failingPeriods: Schema.optional(
                        Schema.Struct({
                          numberOfEvaluationPeriods: Schema.optional(
                            Schema.Number,
                          ),
                          minFailingPeriodsToAlert: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      metricName: Schema.optional(Schema.String),
                      minRecurrenceCount: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
            muteActionsDuration: Schema.optional(Schema.String),
            actions: Schema.optional(
              Schema.Struct({
                actionGroups: Schema.optional(Schema.Array(Schema.String)),
                customProperties: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
                actionProperties: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
              }),
            ),
            isWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
            checkWorkspaceAlertsStorageConfigured: Schema.optional(
              Schema.Boolean,
            ),
            skipQueryValidation: Schema.optional(Schema.Boolean),
            autoMitigate: Schema.optional(Schema.Boolean),
            resolveConfiguration: Schema.optional(
              Schema.Struct({
                autoResolved: Schema.optional(Schema.Boolean),
                timeToResolve: Schema.optional(Schema.String),
              }),
            ),
          }),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ScheduledQueryRulesListBySubscriptionOutput =
  typeof ScheduledQueryRulesListBySubscriptionOutput.Type;

// The operation
/**
 * Retrieve a scheduled query rule definitions in a subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScheduledQueryRulesListBySubscriptionInput,
    outputSchema: ScheduledQueryRulesListBySubscriptionOutput,
  }));
// Input Schema
export const ScheduledQueryRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
        createdWithApiVersion: Schema.optional(Schema.String),
        isLegacyLogAnalyticsRule: Schema.optional(Schema.Boolean),
        description: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        severity: Schema.optional(Schema.Literals([0, 1, 2, 3, 4])),
        enabled: Schema.optional(Schema.Boolean),
        scopes: Schema.optional(Schema.Array(Schema.String)),
        evaluationFrequency: Schema.optional(Schema.String),
        windowSize: Schema.optional(Schema.String),
        overrideQueryTimeRange: Schema.optional(Schema.String),
        targetResourceTypes: Schema.optional(Schema.Array(Schema.String)),
        criteria: Schema.optional(
          Schema.Struct({
            allOf: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  criterionType: Schema.optional(
                    Schema.Literals([
                      "StaticThresholdCriterion",
                      "DynamicThresholdCriterion",
                    ]),
                  ),
                  query: Schema.optional(Schema.String),
                  timeAggregation: Schema.optional(
                    Schema.Literals([
                      "Count",
                      "Average",
                      "Minimum",
                      "Maximum",
                      "Total",
                    ]),
                  ),
                  metricMeasureColumn: Schema.optional(Schema.String),
                  resourceIdColumn: Schema.optional(Schema.String),
                  dimensions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.String,
                        operator: Schema.Literals(["Include", "Exclude"]),
                        values: Schema.Array(Schema.String),
                      }),
                    ),
                  ),
                  operator: Schema.optional(
                    Schema.Literals([
                      "Equals",
                      "GreaterThan",
                      "GreaterThanOrEqual",
                      "LessThan",
                      "LessThanOrEqual",
                      "GreaterOrLessThan",
                    ]),
                  ),
                  threshold: Schema.optional(Schema.Number),
                  alertSensitivity: Schema.optional(Schema.String),
                  ignoreDataBefore: Schema.optional(Schema.String),
                  failingPeriods: Schema.optional(
                    Schema.Struct({
                      numberOfEvaluationPeriods: Schema.optional(Schema.Number),
                      minFailingPeriodsToAlert: Schema.optional(Schema.Number),
                    }),
                  ),
                  metricName: Schema.optional(Schema.String),
                  minRecurrenceCount: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
        muteActionsDuration: Schema.optional(Schema.String),
        actions: Schema.optional(
          Schema.Struct({
            actionGroups: Schema.optional(Schema.Array(Schema.String)),
            customProperties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            actionProperties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        isWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
        checkWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
        skipQueryValidation: Schema.optional(Schema.Boolean),
        autoMitigate: Schema.optional(Schema.Boolean),
        resolveConfiguration: Schema.optional(
          Schema.Struct({
            autoResolved: Schema.optional(Schema.Boolean),
            timeToResolve: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/scheduledQueryRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  );
export type ScheduledQueryRulesUpdateInput =
  typeof ScheduledQueryRulesUpdateInput.Type;

// Output Schema
export const ScheduledQueryRulesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
    kind: Schema.optional(
      Schema.Literals(["LogAlert", "SimpleLogAlert", "LogToMetric"]),
    ),
    etag: Schema.optional(Schema.String),
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
    properties: Schema.Struct({
      createdWithApiVersion: Schema.optional(Schema.String),
      isLegacyLogAnalyticsRule: Schema.optional(Schema.Boolean),
      description: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      severity: Schema.optional(Schema.Literals([0, 1, 2, 3, 4])),
      enabled: Schema.optional(Schema.Boolean),
      scopes: Schema.optional(Schema.Array(Schema.String)),
      evaluationFrequency: Schema.optional(Schema.String),
      windowSize: Schema.optional(Schema.String),
      overrideQueryTimeRange: Schema.optional(Schema.String),
      targetResourceTypes: Schema.optional(Schema.Array(Schema.String)),
      criteria: Schema.optional(
        Schema.Struct({
          allOf: Schema.optional(
            Schema.Array(
              Schema.Struct({
                criterionType: Schema.optional(
                  Schema.Literals([
                    "StaticThresholdCriterion",
                    "DynamicThresholdCriterion",
                  ]),
                ),
                query: Schema.optional(Schema.String),
                timeAggregation: Schema.optional(
                  Schema.Literals([
                    "Count",
                    "Average",
                    "Minimum",
                    "Maximum",
                    "Total",
                  ]),
                ),
                metricMeasureColumn: Schema.optional(Schema.String),
                resourceIdColumn: Schema.optional(Schema.String),
                dimensions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      operator: Schema.Literals(["Include", "Exclude"]),
                      values: Schema.Array(Schema.String),
                    }),
                  ),
                ),
                operator: Schema.optional(
                  Schema.Literals([
                    "Equals",
                    "GreaterThan",
                    "GreaterThanOrEqual",
                    "LessThan",
                    "LessThanOrEqual",
                    "GreaterOrLessThan",
                  ]),
                ),
                threshold: Schema.optional(Schema.Number),
                alertSensitivity: Schema.optional(Schema.String),
                ignoreDataBefore: Schema.optional(Schema.String),
                failingPeriods: Schema.optional(
                  Schema.Struct({
                    numberOfEvaluationPeriods: Schema.optional(Schema.Number),
                    minFailingPeriodsToAlert: Schema.optional(Schema.Number),
                  }),
                ),
                metricName: Schema.optional(Schema.String),
                minRecurrenceCount: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
      muteActionsDuration: Schema.optional(Schema.String),
      actions: Schema.optional(
        Schema.Struct({
          actionGroups: Schema.optional(Schema.Array(Schema.String)),
          customProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          actionProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
        }),
      ),
      isWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
      checkWorkspaceAlertsStorageConfigured: Schema.optional(Schema.Boolean),
      skipQueryValidation: Schema.optional(Schema.Boolean),
      autoMitigate: Schema.optional(Schema.Boolean),
      resolveConfiguration: Schema.optional(
        Schema.Struct({
          autoResolved: Schema.optional(Schema.Boolean),
          timeToResolve: Schema.optional(Schema.String),
        }),
      ),
    }),
  });
export type ScheduledQueryRulesUpdateOutput =
  typeof ScheduledQueryRulesUpdateOutput.Type;

// The operation
/**
 * Update a scheduled query rule.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ruleName - The name of the rule.
 * @param api-version - The API version to use for this operation.
 */
export const ScheduledQueryRulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScheduledQueryRulesUpdateInput,
    outputSchema: ScheduledQueryRulesUpdateOutput,
  }),
);
