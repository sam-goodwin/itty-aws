/**
 * Azure Securityinsights API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ActionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleId: string;
  actionId: string;
  properties?: { logicAppResourceId: string };
  etag?: string;
}
export const ActionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    ruleId: Schema.String.pipe(T.PathParam()),
    actionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        logicAppResourceId: Schema.String,
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}/actions/{actionId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ActionsCreateOrUpdateInput>;

// Output Schema
export interface ActionsCreateOrUpdateOutput {
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
export const ActionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ActionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the action of alert rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param ruleId - Alert rule ID
 * @param actionId - Action ID
 */
export const ActionsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ActionsCreateOrUpdateInput,
  outputSchema: ActionsCreateOrUpdateOutput,
}));
// Input Schema
export interface ActionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleId: string;
  actionId: string;
}
export const ActionsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  ruleId: Schema.String.pipe(T.PathParam()),
  actionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}/actions/{actionId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ActionsDeleteInput>;

// Output Schema
export type ActionsDeleteOutput = void;
export const ActionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ActionsDeleteOutput>;

// The operation
/**
 * Delete the action of alert rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param ruleId - Alert rule ID
 * @param actionId - Action ID
 */
export const ActionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ActionsDeleteInput,
  outputSchema: ActionsDeleteOutput,
}));
// Input Schema
export interface ActionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleId: string;
  actionId: string;
}
export const ActionsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  ruleId: Schema.String.pipe(T.PathParam()),
  actionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}/actions/{actionId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ActionsGetInput>;

// Output Schema
export interface ActionsGetOutput {
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
export const ActionsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ActionsGetOutput>;

// The operation
/**
 * Gets the action of alert rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param ruleId - Alert rule ID
 * @param actionId - Action ID
 */
export const ActionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ActionsGetInput,
  outputSchema: ActionsGetOutput,
}));
// Input Schema
export interface ActionsListByAlertRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleId: string;
}
export const ActionsListByAlertRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    ruleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}/actions",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ActionsListByAlertRuleInput>;

// Output Schema
export interface ActionsListByAlertRuleOutput {
  nextLink?: string;
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
}
export const ActionsListByAlertRuleOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ActionsListByAlertRuleOutput>;

// The operation
/**
 * Gets all actions of alert rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param ruleId - Alert rule ID
 */
export const ActionsListByAlertRule = /*@__PURE__*/ API.make(() => ({
  inputSchema: ActionsListByAlertRuleInput,
  outputSchema: ActionsListByAlertRuleOutput,
}));
// Input Schema
export interface AlertRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleId: string;
  kind: "Scheduled" | "MicrosoftSecurityIncidentCreation" | "Fusion";
  etag?: string;
}
export const AlertRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    ruleId: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals([
      "Scheduled",
      "MicrosoftSecurityIncidentCreation",
      "Fusion",
    ]),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AlertRulesCreateOrUpdateInput>;

// Output Schema
export interface AlertRulesCreateOrUpdateOutput {
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
export const AlertRulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AlertRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the alert rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param ruleId - Alert rule ID
 */
export const AlertRulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AlertRulesCreateOrUpdateInput,
  outputSchema: AlertRulesCreateOrUpdateOutput,
}));
// Input Schema
export interface AlertRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleId: string;
}
export const AlertRulesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  ruleId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<AlertRulesDeleteInput>;

// Output Schema
export type AlertRulesDeleteOutput = void;
export const AlertRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AlertRulesDeleteOutput>;

// The operation
/**
 * Delete the alert rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param ruleId - Alert rule ID
 */
export const AlertRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AlertRulesDeleteInput,
  outputSchema: AlertRulesDeleteOutput,
}));
// Input Schema
export interface AlertRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleId: string;
}
export const AlertRulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  ruleId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules/{ruleId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<AlertRulesGetInput>;

// Output Schema
export interface AlertRulesGetOutput {
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
export const AlertRulesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AlertRulesGetOutput>;

// The operation
/**
 * Gets the alert rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param ruleId - Alert rule ID
 */
export const AlertRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AlertRulesGetInput,
  outputSchema: AlertRulesGetOutput,
}));
// Input Schema
export interface AlertRulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const AlertRulesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRules",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<AlertRulesListInput>;

// Output Schema
export interface AlertRulesListOutput {
  nextLink?: string;
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
}
export const AlertRulesListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<AlertRulesListOutput>;

// The operation
/**
 * Gets all alert rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const AlertRulesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AlertRulesListInput,
  outputSchema: AlertRulesListOutput,
}));
// Input Schema
export interface AlertRuleTemplatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  alertRuleTemplateId: string;
}
export const AlertRuleTemplatesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    alertRuleTemplateId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRuleTemplates/{alertRuleTemplateId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AlertRuleTemplatesGetInput>;

// Output Schema
export interface AlertRuleTemplatesGetOutput {
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
export const AlertRuleTemplatesGetOutput =
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
  }) as unknown as Schema.Codec<AlertRuleTemplatesGetOutput>;

// The operation
/**
 * Gets the alert rule template.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param alertRuleTemplateId - Alert rule template ID
 */
export const AlertRuleTemplatesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AlertRuleTemplatesGetInput,
  outputSchema: AlertRuleTemplatesGetOutput,
}));
// Input Schema
export interface AlertRuleTemplatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const AlertRuleTemplatesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRuleTemplates",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AlertRuleTemplatesListInput>;

// Output Schema
export interface AlertRuleTemplatesListOutput {
  nextLink?: string;
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
}
export const AlertRuleTemplatesListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<AlertRuleTemplatesListOutput>;

// The operation
/**
 * Gets all alert rule templates.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const AlertRuleTemplatesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AlertRuleTemplatesListInput,
  outputSchema: AlertRuleTemplatesListOutput,
}));
// Input Schema
export interface AutomationRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  automationRuleId: string;
  properties: {
    displayName: string;
    order: number;
    triggeringLogic: {
      isEnabled: boolean;
      expirationTimeUtc?: string;
      triggersOn: "Incidents" | "Alerts";
      triggersWhen: "Created" | "Updated";
      conditions?: {
        conditionType:
          | "Property"
          | "PropertyArray"
          | "PropertyChanged"
          | "PropertyArrayChanged"
          | "Boolean";
      }[];
    };
    actions: {
      order: number;
      actionType: "ModifyProperties" | "RunPlaybook" | "AddIncidentTask";
    }[];
    lastModifiedTimeUtc?: string;
    createdTimeUtc?: string;
    lastModifiedBy?: {
      email?: string;
      name?: string;
      objectId?: string;
      userPrincipalName?: string;
    };
    createdBy?: {
      email?: string;
      name?: string;
      objectId?: string;
      userPrincipalName?: string;
    };
  };
  etag?: string;
}
export const AutomationRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    automationRuleId: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      displayName: Schema.String,
      order: Schema.Number,
      triggeringLogic: Schema.Struct({
        isEnabled: Schema.Boolean,
        expirationTimeUtc: Schema.optional(Schema.String),
        triggersOn: Schema.Literals(["Incidents", "Alerts"]),
        triggersWhen: Schema.Literals(["Created", "Updated"]),
        conditions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              conditionType: Schema.Literals([
                "Property",
                "PropertyArray",
                "PropertyChanged",
                "PropertyArrayChanged",
                "Boolean",
              ]),
            }),
          ),
        ),
      }),
      actions: Schema.Array(
        Schema.Struct({
          order: Schema.Number,
          actionType: Schema.Literals([
            "ModifyProperties",
            "RunPlaybook",
            "AddIncidentTask",
          ]),
        }),
      ),
      lastModifiedTimeUtc: Schema.optional(Schema.String),
      createdTimeUtc: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(
        Schema.Struct({
          email: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          objectId: Schema.optional(Schema.String),
          userPrincipalName: Schema.optional(Schema.String),
        }),
      ),
      createdBy: Schema.optional(
        Schema.Struct({
          email: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          objectId: Schema.optional(Schema.String),
          userPrincipalName: Schema.optional(Schema.String),
        }),
      ),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/automationRules/{automationRuleId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AutomationRulesCreateOrUpdateInput>;

// Output Schema
export interface AutomationRulesCreateOrUpdateOutput {
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
export const AutomationRulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AutomationRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the automation rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param automationRuleId - Automation rule ID
 */
export const AutomationRulesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AutomationRulesCreateOrUpdateInput,
    outputSchema: AutomationRulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface AutomationRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  automationRuleId: string;
}
export const AutomationRulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    automationRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/automationRules/{automationRuleId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AutomationRulesDeleteInput>;

// Output Schema
export type AutomationRulesDeleteOutput = unknown;
export const AutomationRulesDeleteOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<AutomationRulesDeleteOutput>;

// The operation
/**
 * Delete the automation rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param automationRuleId - Automation rule ID
 */
export const AutomationRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AutomationRulesDeleteInput,
  outputSchema: AutomationRulesDeleteOutput,
}));
// Input Schema
export interface AutomationRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  automationRuleId: string;
}
export const AutomationRulesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    automationRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/automationRules/{automationRuleId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AutomationRulesGetInput>;

// Output Schema
export interface AutomationRulesGetOutput {
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
export const AutomationRulesGetOutput =
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
  }) as unknown as Schema.Codec<AutomationRulesGetOutput>;

// The operation
/**
 * Gets the automation rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param automationRuleId - Automation rule ID
 */
export const AutomationRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AutomationRulesGetInput,
  outputSchema: AutomationRulesGetOutput,
}));
// Input Schema
export interface AutomationRulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const AutomationRulesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/automationRules",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AutomationRulesListInput>;

// Output Schema
export interface AutomationRulesListOutput {
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
export const AutomationRulesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AutomationRulesListOutput>;

// The operation
/**
 * Gets all automation rules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const AutomationRulesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AutomationRulesListInput,
  outputSchema: AutomationRulesListOutput,
}));
// Input Schema
export interface BookmarksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  bookmarkId: string;
  properties?: {
    created?: string;
    createdBy?: { email?: string; name?: string; objectId?: string | null };
    displayName: string;
    labels?: string[];
    notes?: string;
    query: string;
    queryResult?: string;
    updated?: string;
    updatedBy?: { email?: string; name?: string; objectId?: string | null };
    eventTime?: string;
    queryStartTime?: string;
    queryEndTime?: string;
    incidentInfo?: {
      incidentId?: string;
      severity?: "High" | "Medium" | "Low" | "Informational";
      title?: string;
      relationName?: string;
    };
  };
  etag?: string;
}
export const BookmarksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    bookmarkId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        created: Schema.optional(Schema.String),
        createdBy: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        displayName: Schema.String,
        labels: Schema.optional(Schema.Array(Schema.String)),
        notes: Schema.optional(Schema.String),
        query: Schema.String,
        queryResult: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
        updatedBy: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        eventTime: Schema.optional(Schema.String),
        queryStartTime: Schema.optional(Schema.String),
        queryEndTime: Schema.optional(Schema.String),
        incidentInfo: Schema.optional(
          Schema.Struct({
            incidentId: Schema.optional(Schema.String),
            severity: Schema.optional(
              Schema.Literals(["High", "Medium", "Low", "Informational"]),
            ),
            title: Schema.optional(Schema.String),
            relationName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/bookmarks/{bookmarkId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<BookmarksCreateOrUpdateInput>;

// Output Schema
export interface BookmarksCreateOrUpdateOutput {
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
export const BookmarksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BookmarksCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the bookmark.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param bookmarkId - Bookmark ID
 */
export const BookmarksCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BookmarksCreateOrUpdateInput,
  outputSchema: BookmarksCreateOrUpdateOutput,
}));
// Input Schema
export interface BookmarksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  bookmarkId: string;
}
export const BookmarksDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  bookmarkId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/bookmarks/{bookmarkId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<BookmarksDeleteInput>;

// Output Schema
export type BookmarksDeleteOutput = void;
export const BookmarksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BookmarksDeleteOutput>;

// The operation
/**
 * Delete the bookmark.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param bookmarkId - Bookmark ID
 */
export const BookmarksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BookmarksDeleteInput,
  outputSchema: BookmarksDeleteOutput,
}));
// Input Schema
export interface BookmarksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  bookmarkId: string;
}
export const BookmarksGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  bookmarkId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/bookmarks/{bookmarkId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<BookmarksGetInput>;

// Output Schema
export interface BookmarksGetOutput {
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
export const BookmarksGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BookmarksGetOutput>;

// The operation
/**
 * Gets a bookmark.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param bookmarkId - Bookmark ID
 */
export const BookmarksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BookmarksGetInput,
  outputSchema: BookmarksGetOutput,
}));
// Input Schema
export interface BookmarksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const BookmarksListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/bookmarks",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<BookmarksListInput>;

// Output Schema
export interface BookmarksListOutput {
  nextLink?: string;
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
}
export const BookmarksListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<BookmarksListOutput>;

// The operation
/**
 * Gets all bookmarks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const BookmarksList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BookmarksListInput,
  outputSchema: BookmarksListOutput,
}));
// Input Schema
export interface ContentPackageInstallInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  packageId: string;
  properties?: {
    contentId?: string;
    contentProductId?: string;
    contentKind?: "Solution" | "Standalone";
    contentSchemaVersion?: string;
    isNew?: "true" | "false";
    isPreview?: "true" | "false";
    isFeatured?: "true" | "false";
    isDeprecated?: "true" | "false";
    version?: string;
    displayName?: string;
    description?: string;
    publisherDisplayName?: string;
    source?: {
      kind: "LocalWorkspace" | "Community" | "Solution" | "SourceRepository";
      name?: string;
      sourceId?: string;
    };
    author?: { name?: string; email?: string; link?: string };
    support?: {
      tier: "Microsoft" | "Partner" | "Community";
      name?: string;
      email?: string;
      link?: string;
    };
    dependencies?: {
      contentId?: string;
      kind?: string;
      version?: string;
      name?: string;
      operator?: "AND" | "OR";
      criteria?: unknown[];
    };
    providers?: string[];
    firstPublishDate?: string;
    lastPublishDate?: string;
    categories?: { domains?: string[]; verticals?: string[] };
    threatAnalysisTactics?: string[];
    threatAnalysisTechniques?: string[];
    icon?: string;
  };
  etag?: string;
}
export const ContentPackageInstallInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    packageId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        contentId: Schema.optional(Schema.String),
        contentProductId: Schema.optional(Schema.String),
        contentKind: Schema.optional(
          Schema.Literals(["Solution", "Standalone"]),
        ),
        contentSchemaVersion: Schema.optional(Schema.String),
        isNew: Schema.optional(Schema.Literals(["true", "false"])),
        isPreview: Schema.optional(Schema.Literals(["true", "false"])),
        isFeatured: Schema.optional(Schema.Literals(["true", "false"])),
        isDeprecated: Schema.optional(Schema.Literals(["true", "false"])),
        version: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        publisherDisplayName: Schema.optional(Schema.String),
        source: Schema.optional(
          Schema.Struct({
            kind: Schema.Literals([
              "LocalWorkspace",
              "Community",
              "Solution",
              "SourceRepository",
            ]),
            name: Schema.optional(Schema.String),
            sourceId: Schema.optional(Schema.String),
          }),
        ),
        author: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            link: Schema.optional(Schema.String),
          }),
        ),
        support: Schema.optional(
          Schema.Struct({
            tier: Schema.Literals(["Microsoft", "Partner", "Community"]),
            name: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            link: Schema.optional(Schema.String),
          }),
        ),
        dependencies: Schema.optional(
          Schema.Struct({
            contentId: Schema.optional(Schema.String),
            kind: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            operator: Schema.optional(Schema.Literals(["AND", "OR"])),
            criteria: Schema.optional(Schema.Array(Schema.Unknown)),
          }),
        ),
        providers: Schema.optional(Schema.Array(Schema.String)),
        firstPublishDate: Schema.optional(Schema.String),
        lastPublishDate: Schema.optional(Schema.String),
        categories: Schema.optional(
          Schema.Struct({
            domains: Schema.optional(Schema.Array(Schema.String)),
            verticals: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        threatAnalysisTactics: Schema.optional(Schema.Array(Schema.String)),
        threatAnalysisTechniques: Schema.optional(Schema.Array(Schema.String)),
        icon: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentPackages/{packageId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContentPackageInstallInput>;

// Output Schema
export interface ContentPackageInstallOutput {
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
export const ContentPackageInstallOutput =
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
  }) as unknown as Schema.Codec<ContentPackageInstallOutput>;

// The operation
/**
 * Install a package to the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param packageId - package Id
 */
export const ContentPackageInstall = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContentPackageInstallInput,
  outputSchema: ContentPackageInstallOutput,
}));
// Input Schema
export interface ContentPackagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  packageId: string;
}
export const ContentPackagesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    packageId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentPackages/{packageId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContentPackagesGetInput>;

// Output Schema
export interface ContentPackagesGetOutput {
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
export const ContentPackagesGetOutput =
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
  }) as unknown as Schema.Codec<ContentPackagesGetOutput>;

// The operation
/**
 * Gets an installed packages by its id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param packageId - package Id
 */
export const ContentPackagesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContentPackagesGetInput,
  outputSchema: ContentPackagesGetOutput,
}));
// Input Schema
export interface ContentPackagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $filter?: string;
  $orderby?: string;
  $search?: string;
  $count?: boolean;
  $top?: number;
  $skip?: number;
  $skipToken?: string;
}
export const ContentPackagesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    $search: Schema.optional(Schema.String),
    $count: Schema.optional(Schema.Boolean),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentPackages",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContentPackagesListInput>;

// Output Schema
export interface ContentPackagesListOutput {
  nextLink?: string;
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
}
export const ContentPackagesListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ContentPackagesListOutput>;

// The operation
/**
 * Gets all installed packages.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param $filter - Filters the results, based on a Boolean condition. Optional.
 * @param $orderby - Sorts the results. Optional.
 * @param $search - Searches for a substring in the response. Optional.
 * @param $count - Instructs the server to return only object count without actual body. Optional.
 * @param $top - Returns only the first n results. Optional.
 * @param $skip - Used to skip n elements in the OData query (offset). Returns a nextLink to the next page of results if there are any left.
 * @param $skipToken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional.
 */
export const ContentPackagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContentPackagesListInput,
  outputSchema: ContentPackagesListOutput,
}));
// Input Schema
export interface ContentPackageUninstallInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  packageId: string;
}
export const ContentPackageUninstallInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    packageId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentPackages/{packageId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContentPackageUninstallInput>;

// Output Schema
export type ContentPackageUninstallOutput = void;
export const ContentPackageUninstallOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ContentPackageUninstallOutput>;

// The operation
/**
 * Uninstall a package from the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param packageId - package Id
 */
export const ContentPackageUninstall = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContentPackageUninstallInput,
  outputSchema: ContentPackageUninstallOutput,
}));
// Input Schema
export interface ContentTemplateDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  templateId: string;
}
export const ContentTemplateDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    templateId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentTemplates/{templateId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContentTemplateDeleteInput>;

// Output Schema
export type ContentTemplateDeleteOutput = void;
export const ContentTemplateDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ContentTemplateDeleteOutput>;

// The operation
/**
 * Delete an installed template.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param templateId - template Id
 */
export const ContentTemplateDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContentTemplateDeleteInput,
  outputSchema: ContentTemplateDeleteOutput,
}));
// Input Schema
export interface ContentTemplateGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  templateId: string;
}
export const ContentTemplateGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    templateId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentTemplates/{templateId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContentTemplateGetInput>;

// Output Schema
export interface ContentTemplateGetOutput {
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
export const ContentTemplateGetOutput =
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
  }) as unknown as Schema.Codec<ContentTemplateGetOutput>;

// The operation
/**
 * Gets a template byt its identifier.
 * Expandable properties:
 * - properties/mainTemplate
 * - properties/dependantTemplates
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param templateId - template Id
 */
export const ContentTemplateGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContentTemplateGetInput,
  outputSchema: ContentTemplateGetOutput,
}));
// Input Schema
export interface ContentTemplateInstallInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  templateId: string;
  properties?: {
    contentId?: string;
    contentProductId?: string;
    packageVersion?: string;
    version?: string;
    displayName?: string;
    contentKind?: string;
    source?: {
      kind: "LocalWorkspace" | "Community" | "Solution" | "SourceRepository";
      name?: string;
      sourceId?: string;
    };
    author?: { name?: string; email?: string; link?: string };
    support?: {
      tier: "Microsoft" | "Partner" | "Community";
      name?: string;
      email?: string;
      link?: string;
    };
    dependencies?: {
      contentId?: string;
      kind?: string;
      version?: string;
      name?: string;
      operator?: "AND" | "OR";
      criteria?: unknown[];
    };
    categories?: { domains?: string[]; verticals?: string[] };
    providers?: string[];
    firstPublishDate?: string;
    lastPublishDate?: string;
    customVersion?: string;
    contentSchemaVersion?: string;
    icon?: string;
    threatAnalysisTactics?: string[];
    threatAnalysisTechniques?: string[];
    previewImages?: string[];
    previewImagesDark?: string[];
    packageId?: string;
    packageKind?: "Solution" | "Standalone";
    packageName?: string;
    isDeprecated?: "true" | "false";
    mainTemplate?: unknown;
    dependantTemplates?: unknown[];
  };
  etag?: string;
}
export const ContentTemplateInstallInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    templateId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        contentId: Schema.optional(Schema.String),
        contentProductId: Schema.optional(Schema.String),
        packageVersion: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        contentKind: Schema.optional(Schema.String),
        source: Schema.optional(
          Schema.Struct({
            kind: Schema.Literals([
              "LocalWorkspace",
              "Community",
              "Solution",
              "SourceRepository",
            ]),
            name: Schema.optional(Schema.String),
            sourceId: Schema.optional(Schema.String),
          }),
        ),
        author: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            link: Schema.optional(Schema.String),
          }),
        ),
        support: Schema.optional(
          Schema.Struct({
            tier: Schema.Literals(["Microsoft", "Partner", "Community"]),
            name: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            link: Schema.optional(Schema.String),
          }),
        ),
        dependencies: Schema.optional(
          Schema.Struct({
            contentId: Schema.optional(Schema.String),
            kind: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            operator: Schema.optional(Schema.Literals(["AND", "OR"])),
            criteria: Schema.optional(Schema.Array(Schema.Unknown)),
          }),
        ),
        categories: Schema.optional(
          Schema.Struct({
            domains: Schema.optional(Schema.Array(Schema.String)),
            verticals: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        providers: Schema.optional(Schema.Array(Schema.String)),
        firstPublishDate: Schema.optional(Schema.String),
        lastPublishDate: Schema.optional(Schema.String),
        customVersion: Schema.optional(Schema.String),
        contentSchemaVersion: Schema.optional(Schema.String),
        icon: Schema.optional(Schema.String),
        threatAnalysisTactics: Schema.optional(Schema.Array(Schema.String)),
        threatAnalysisTechniques: Schema.optional(Schema.Array(Schema.String)),
        previewImages: Schema.optional(Schema.Array(Schema.String)),
        previewImagesDark: Schema.optional(Schema.Array(Schema.String)),
        packageId: Schema.optional(Schema.String),
        packageKind: Schema.optional(
          Schema.Literals(["Solution", "Standalone"]),
        ),
        packageName: Schema.optional(Schema.String),
        isDeprecated: Schema.optional(Schema.Literals(["true", "false"])),
        mainTemplate: Schema.optional(Schema.Unknown),
        dependantTemplates: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentTemplates/{templateId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContentTemplateInstallInput>;

// Output Schema
export interface ContentTemplateInstallOutput {
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
export const ContentTemplateInstallOutput =
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
  }) as unknown as Schema.Codec<ContentTemplateInstallOutput>;

// The operation
/**
 * Install a template.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param templateId - template Id
 */
export const ContentTemplateInstall = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContentTemplateInstallInput,
  outputSchema: ContentTemplateInstallOutput,
}));
// Input Schema
export interface ContentTemplatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $filter?: string;
  $orderby?: string;
  $expand?: string;
  $search?: string;
  $count?: boolean;
  $top?: number;
  $skip?: number;
  $skipToken?: string;
}
export const ContentTemplatesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
    $search: Schema.optional(Schema.String),
    $count: Schema.optional(Schema.Boolean),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentTemplates",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ContentTemplatesListInput>;

// Output Schema
export interface ContentTemplatesListOutput {
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
export const ContentTemplatesListOutput =
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
  }) as unknown as Schema.Codec<ContentTemplatesListOutput>;

// The operation
/**
 * Gets all installed templates.
 * Expandable properties:
 * - properties/mainTemplate
 * - properties/dependantTemplates
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param $filter - Filters the results, based on a Boolean condition. Optional.
 * @param $orderby - Sorts the results. Optional.
 * @param $expand - Expands the object with optional fiends that are not included by default. Optional.
 * @param $search - Searches for a substring in the response. Optional.
 * @param $count - Instructs the server to return only object count without actual body. Optional.
 * @param $top - Returns only the first n results. Optional.
 * @param $skip - Used to skip n elements in the OData query (offset). Returns a nextLink to the next page of results if there are any left.
 * @param $skipToken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional.
 */
export const ContentTemplatesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContentTemplatesListInput,
  outputSchema: ContentTemplatesListOutput,
}));
// Input Schema
export interface DataConnectorDefinitionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataConnectorDefinitionName: string;
  kind: "Customizable";
  etag?: string;
}
export const DataConnectorDefinitionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataConnectorDefinitionName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["Customizable"]),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectorDefinitions/{dataConnectorDefinitionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<DataConnectorDefinitionsCreateOrUpdateInput>;

// Output Schema
export interface DataConnectorDefinitionsCreateOrUpdateOutput {
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
export const DataConnectorDefinitionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataConnectorDefinitionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the data connector definition.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataConnectorDefinitionName - The data connector definition name.
 * @param api-version - The API version to use for this operation.
 */
export const DataConnectorDefinitionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataConnectorDefinitionsCreateOrUpdateInput,
    outputSchema: DataConnectorDefinitionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DataConnectorDefinitionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataConnectorDefinitionName: string;
}
export const DataConnectorDefinitionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataConnectorDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectorDefinitions/{dataConnectorDefinitionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<DataConnectorDefinitionsDeleteInput>;

// Output Schema
export type DataConnectorDefinitionsDeleteOutput = void;
export const DataConnectorDefinitionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataConnectorDefinitionsDeleteOutput>;

// The operation
/**
 * Delete the data connector definition.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataConnectorDefinitionName - The data connector definition name.
 * @param api-version - The API version to use for this operation.
 */
export const DataConnectorDefinitionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataConnectorDefinitionsDeleteInput,
    outputSchema: DataConnectorDefinitionsDeleteOutput,
  }));
// Input Schema
export interface DataConnectorDefinitionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataConnectorDefinitionName: string;
}
export const DataConnectorDefinitionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataConnectorDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectorDefinitions/{dataConnectorDefinitionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<DataConnectorDefinitionsGetInput>;

// Output Schema
export interface DataConnectorDefinitionsGetOutput {
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
export const DataConnectorDefinitionsGetOutput =
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
  }) as unknown as Schema.Codec<DataConnectorDefinitionsGetOutput>;

// The operation
/**
 * Gets a data connector definition.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataConnectorDefinitionName - The data connector definition name.
 * @param api-version - The API version to use for this operation.
 */
export const DataConnectorDefinitionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataConnectorDefinitionsGetInput,
  outputSchema: DataConnectorDefinitionsGetOutput,
}));
// Input Schema
export interface DataConnectorDefinitionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const DataConnectorDefinitionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectorDefinitions",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<DataConnectorDefinitionsListInput>;

// Output Schema
export interface DataConnectorDefinitionsListOutput {
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
export const DataConnectorDefinitionsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DataConnectorDefinitionsListOutput>;

// The operation
/**
 * Gets all data connector definitions.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param api-version - The API version to use for this operation.
 */
export const DataConnectorDefinitionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataConnectorDefinitionsListInput,
    outputSchema: DataConnectorDefinitionsListOutput,
  }));
// Input Schema
export interface DataConnectorsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataConnectorId: string;
  kind:
    | "AzureActiveDirectory"
    | "AzureSecurityCenter"
    | "MicrosoftCloudAppSecurity"
    | "ThreatIntelligence"
    | "MicrosoftThreatIntelligence"
    | "PremiumMicrosoftDefenderForThreatIntelligence"
    | "Office365"
    | "AmazonWebServicesCloudTrail"
    | "AzureAdvancedThreatProtection"
    | "MicrosoftDefenderAdvancedThreatProtection"
    | "RestApiPoller";
  etag?: string;
}
export const DataConnectorsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataConnectorId: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals([
      "AzureActiveDirectory",
      "AzureSecurityCenter",
      "MicrosoftCloudAppSecurity",
      "ThreatIntelligence",
      "MicrosoftThreatIntelligence",
      "PremiumMicrosoftDefenderForThreatIntelligence",
      "Office365",
      "AmazonWebServicesCloudTrail",
      "AzureAdvancedThreatProtection",
      "MicrosoftDefenderAdvancedThreatProtection",
      "RestApiPoller",
    ]),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<DataConnectorsCreateOrUpdateInput>;

// Output Schema
export interface DataConnectorsCreateOrUpdateOutput {
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
export const DataConnectorsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataConnectorsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the data connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataConnectorId - Connector ID
 */
export const DataConnectorsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataConnectorsCreateOrUpdateInput,
    outputSchema: DataConnectorsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DataConnectorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataConnectorId: string;
}
export const DataConnectorsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    dataConnectorId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<DataConnectorsDeleteInput>;

// Output Schema
export type DataConnectorsDeleteOutput = void;
export const DataConnectorsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataConnectorsDeleteOutput>;

// The operation
/**
 * Delete the data connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataConnectorId - Connector ID
 */
export const DataConnectorsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataConnectorsDeleteInput,
  outputSchema: DataConnectorsDeleteOutput,
}));
// Input Schema
export interface DataConnectorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  dataConnectorId: string;
}
export const DataConnectorsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  dataConnectorId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors/{dataConnectorId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<DataConnectorsGetInput>;

// Output Schema
export interface DataConnectorsGetOutput {
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
export const DataConnectorsGetOutput =
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
  }) as unknown as Schema.Codec<DataConnectorsGetOutput>;

// The operation
/**
 * Gets a data connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param dataConnectorId - Connector ID
 */
export const DataConnectorsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataConnectorsGetInput,
  outputSchema: DataConnectorsGetOutput,
}));
// Input Schema
export interface DataConnectorsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const DataConnectorsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/dataConnectors",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<DataConnectorsListInput>;

// Output Schema
export interface DataConnectorsListOutput {
  nextLink?: string;
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
}
export const DataConnectorsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<DataConnectorsListOutput>;

// The operation
/**
 * Gets all data connectors.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const DataConnectorsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataConnectorsListInput,
  outputSchema: DataConnectorsListOutput,
}));
// Input Schema
export interface EntitiesRunPlaybookInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  entityIdentifier: string;
  incidentArmId?: string;
  tenantId?: string;
  logicAppsResourceId: string;
}
export const EntitiesRunPlaybookInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    entityIdentifier: Schema.String.pipe(T.PathParam()),
    incidentArmId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    logicAppsResourceId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityIdentifier}/runPlaybook",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<EntitiesRunPlaybookInput>;

// Output Schema
export type EntitiesRunPlaybookOutput = void;
export const EntitiesRunPlaybookOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EntitiesRunPlaybookOutput>;

// The operation
/**
 * Triggers playbook on a specific entity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param entityIdentifier - Entity ID
 */
export const EntitiesRunPlaybook = /*@__PURE__*/ API.make(() => ({
  inputSchema: EntitiesRunPlaybookInput,
  outputSchema: EntitiesRunPlaybookOutput,
}));
// Input Schema
export interface IncidentCommentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  incidentCommentId: string;
  properties?: {
    createdTimeUtc?: string;
    lastModifiedTimeUtc?: string;
    message: string;
    author?: {
      email?: string;
      name?: string;
      objectId?: string;
      userPrincipalName?: string;
    };
  };
  etag?: string;
}
export const IncidentCommentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    incidentCommentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        createdTimeUtc: Schema.optional(Schema.String),
        lastModifiedTimeUtc: Schema.optional(Schema.String),
        message: Schema.String,
        author: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
            userPrincipalName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/comments/{incidentCommentId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentCommentsCreateOrUpdateInput>;

// Output Schema
export interface IncidentCommentsCreateOrUpdateOutput {
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
export const IncidentCommentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<IncidentCommentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a comment for a given incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param incidentCommentId - Incident comment ID
 */
export const IncidentCommentsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IncidentCommentsCreateOrUpdateInput,
    outputSchema: IncidentCommentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface IncidentCommentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  incidentCommentId: string;
}
export const IncidentCommentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    incidentCommentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/comments/{incidentCommentId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentCommentsDeleteInput>;

// Output Schema
export type IncidentCommentsDeleteOutput = void;
export const IncidentCommentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IncidentCommentsDeleteOutput>;

// The operation
/**
 * Deletes a comment for a given incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param incidentCommentId - Incident comment ID
 */
export const IncidentCommentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentCommentsDeleteInput,
  outputSchema: IncidentCommentsDeleteOutput,
}));
// Input Schema
export interface IncidentCommentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  incidentCommentId: string;
}
export const IncidentCommentsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    incidentCommentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/comments/{incidentCommentId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentCommentsGetInput>;

// Output Schema
export interface IncidentCommentsGetOutput {
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
export const IncidentCommentsGetOutput =
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
  }) as unknown as Schema.Codec<IncidentCommentsGetOutput>;

// The operation
/**
 * Gets a comment for a given incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param incidentCommentId - Incident comment ID
 */
export const IncidentCommentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentCommentsGetInput,
  outputSchema: IncidentCommentsGetOutput,
}));
// Input Schema
export interface IncidentCommentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  $filter?: string;
  $orderby?: string;
  $top?: number;
  $skipToken?: string;
}
export const IncidentCommentsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/comments",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentCommentsListInput>;

// Output Schema
export interface IncidentCommentsListOutput {
  nextLink?: string;
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
}
export const IncidentCommentsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<IncidentCommentsListOutput>;

// The operation
/**
 * Gets all comments for a given incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param $filter - Filters the results, based on a Boolean condition. Optional.
 * @param $orderby - Sorts the results. Optional.
 * @param $top - Returns only the first n results. Optional.
 * @param $skipToken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional.
 */
export const IncidentCommentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentCommentsListInput,
  outputSchema: IncidentCommentsListOutput,
}));
// Input Schema
export interface IncidentRelationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  relationName: string;
  properties?: {
    relatedResourceId: string;
    relatedResourceName?: string;
    relatedResourceType?: string;
    relatedResourceKind?: string;
  };
  etag?: string;
}
export const IncidentRelationsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    relationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        relatedResourceId: Schema.String,
        relatedResourceName: Schema.optional(Schema.String),
        relatedResourceType: Schema.optional(Schema.String),
        relatedResourceKind: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/relations/{relationName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentRelationsCreateOrUpdateInput>;

// Output Schema
export interface IncidentRelationsCreateOrUpdateOutput {
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
export const IncidentRelationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<IncidentRelationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a relation for a given incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param relationName - Relation Name
 */
export const IncidentRelationsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IncidentRelationsCreateOrUpdateInput,
    outputSchema: IncidentRelationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface IncidentRelationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  relationName: string;
}
export const IncidentRelationsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    relationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/relations/{relationName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentRelationsDeleteInput>;

// Output Schema
export type IncidentRelationsDeleteOutput = void;
export const IncidentRelationsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IncidentRelationsDeleteOutput>;

// The operation
/**
 * Deletes a relation for a given incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param relationName - Relation Name
 */
export const IncidentRelationsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentRelationsDeleteInput,
  outputSchema: IncidentRelationsDeleteOutput,
}));
// Input Schema
export interface IncidentRelationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  relationName: string;
}
export const IncidentRelationsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    relationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/relations/{relationName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentRelationsGetInput>;

// Output Schema
export interface IncidentRelationsGetOutput {
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
export const IncidentRelationsGetOutput =
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
  }) as unknown as Schema.Codec<IncidentRelationsGetOutput>;

// The operation
/**
 * Gets a relation for a given incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param relationName - Relation Name
 */
export const IncidentRelationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentRelationsGetInput,
  outputSchema: IncidentRelationsGetOutput,
}));
// Input Schema
export interface IncidentRelationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  $filter?: string;
  $orderby?: string;
  $top?: number;
  $skipToken?: string;
}
export const IncidentRelationsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/relations",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentRelationsListInput>;

// Output Schema
export interface IncidentRelationsListOutput {
  nextLink?: string;
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
}
export const IncidentRelationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<IncidentRelationsListOutput>;

// The operation
/**
 * Gets all relations for a given incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param $filter - Filters the results, based on a Boolean condition. Optional.
 * @param $orderby - Sorts the results. Optional.
 * @param $top - Returns only the first n results. Optional.
 * @param $skipToken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional.
 */
export const IncidentRelationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentRelationsListInput,
  outputSchema: IncidentRelationsListOutput,
}));
// Input Schema
export interface IncidentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  properties?: {
    additionalData?: {
      alertsCount?: number;
      bookmarksCount?: number;
      commentsCount?: number;
      alertProductNames?: string[];
      tactics?: (
        | "Reconnaissance"
        | "ResourceDevelopment"
        | "InitialAccess"
        | "Execution"
        | "Persistence"
        | "PrivilegeEscalation"
        | "DefenseEvasion"
        | "CredentialAccess"
        | "Discovery"
        | "LateralMovement"
        | "Collection"
        | "Exfiltration"
        | "CommandAndControl"
        | "Impact"
        | "PreAttack"
        | "ImpairProcessControl"
        | "InhibitResponseFunction"
      )[];
      providerIncidentUrl?: string;
    };
    classification?:
      | "Undetermined"
      | "TruePositive"
      | "BenignPositive"
      | "FalsePositive";
    classificationComment?: string;
    classificationReason?:
      | "SuspiciousActivity"
      | "SuspiciousButExpected"
      | "IncorrectAlertLogic"
      | "InaccurateData";
    createdTimeUtc?: string;
    description?: string;
    firstActivityTimeUtc?: string;
    incidentUrl?: string;
    providerName?: string;
    providerIncidentId?: string;
    incidentNumber?: number;
    labels?: { labelName: string; labelType?: "User" | "AutoAssigned" }[];
    lastActivityTimeUtc?: string;
    lastModifiedTimeUtc?: string;
    owner?: {
      email?: string;
      assignedTo?: string;
      objectId?: string;
      userPrincipalName?: string;
      ownerType?: "Unknown" | "User" | "Group";
    };
    relatedAnalyticRuleIds?: string[];
    severity: "High" | "Medium" | "Low" | "Informational";
    status: "New" | "Active" | "Closed";
    title: string;
  };
  etag?: string;
}
export const IncidentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        additionalData: Schema.optional(
          Schema.Struct({
            alertsCount: Schema.optional(Schema.Number),
            bookmarksCount: Schema.optional(Schema.Number),
            commentsCount: Schema.optional(Schema.Number),
            alertProductNames: Schema.optional(Schema.Array(Schema.String)),
            tactics: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "Reconnaissance",
                  "ResourceDevelopment",
                  "InitialAccess",
                  "Execution",
                  "Persistence",
                  "PrivilegeEscalation",
                  "DefenseEvasion",
                  "CredentialAccess",
                  "Discovery",
                  "LateralMovement",
                  "Collection",
                  "Exfiltration",
                  "CommandAndControl",
                  "Impact",
                  "PreAttack",
                  "ImpairProcessControl",
                  "InhibitResponseFunction",
                ]),
              ),
            ),
            providerIncidentUrl: Schema.optional(Schema.String),
          }),
        ),
        classification: Schema.optional(
          Schema.Literals([
            "Undetermined",
            "TruePositive",
            "BenignPositive",
            "FalsePositive",
          ]),
        ),
        classificationComment: Schema.optional(Schema.String),
        classificationReason: Schema.optional(
          Schema.Literals([
            "SuspiciousActivity",
            "SuspiciousButExpected",
            "IncorrectAlertLogic",
            "InaccurateData",
          ]),
        ),
        createdTimeUtc: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        firstActivityTimeUtc: Schema.optional(Schema.String),
        incidentUrl: Schema.optional(Schema.String),
        providerName: Schema.optional(Schema.String),
        providerIncidentId: Schema.optional(Schema.String),
        incidentNumber: Schema.optional(Schema.Number),
        labels: Schema.optional(
          Schema.Array(
            Schema.Struct({
              labelName: Schema.String,
              labelType: Schema.optional(
                Schema.Literals(["User", "AutoAssigned"]),
              ),
            }),
          ),
        ),
        lastActivityTimeUtc: Schema.optional(Schema.String),
        lastModifiedTimeUtc: Schema.optional(Schema.String),
        owner: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            assignedTo: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
            userPrincipalName: Schema.optional(Schema.String),
            ownerType: Schema.optional(
              Schema.Literals(["Unknown", "User", "Group"]),
            ),
          }),
        ),
        relatedAnalyticRuleIds: Schema.optional(Schema.Array(Schema.String)),
        severity: Schema.Literals(["High", "Medium", "Low", "Informational"]),
        status: Schema.Literals(["New", "Active", "Closed"]),
        title: Schema.String,
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentsCreateOrUpdateInput>;

// Output Schema
export interface IncidentsCreateOrUpdateOutput {
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
export const IncidentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<IncidentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 */
export const IncidentsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentsCreateOrUpdateInput,
  outputSchema: IncidentsCreateOrUpdateOutput,
}));
// Input Schema
export interface IncidentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
}
export const IncidentsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  incidentId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<IncidentsDeleteInput>;

// Output Schema
export type IncidentsDeleteOutput = void;
export const IncidentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IncidentsDeleteOutput>;

// The operation
/**
 * Deletes a given incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 */
export const IncidentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentsDeleteInput,
  outputSchema: IncidentsDeleteOutput,
}));
// Input Schema
export interface IncidentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
}
export const IncidentsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  incidentId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<IncidentsGetInput>;

// Output Schema
export interface IncidentsGetOutput {
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
export const IncidentsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<IncidentsGetOutput>;

// The operation
/**
 * Gets a given incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 */
export const IncidentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentsGetInput,
  outputSchema: IncidentsGetOutput,
}));
// Input Schema
export interface IncidentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $filter?: string;
  $orderby?: string;
  $top?: number;
  $skipToken?: string;
}
export const IncidentsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
  $orderby: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<IncidentsListInput>;

// Output Schema
export interface IncidentsListOutput {
  nextLink?: string;
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
}
export const IncidentsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<IncidentsListOutput>;

// The operation
/**
 * Gets all incidents.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param $filter - Filters the results, based on a Boolean condition. Optional.
 * @param $orderby - Sorts the results. Optional.
 * @param $top - Returns only the first n results. Optional.
 * @param $skipToken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional.
 */
export const IncidentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentsListInput,
  outputSchema: IncidentsListOutput,
}));
// Input Schema
export interface IncidentsListAlertsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
}
export const IncidentsListAlertsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/alerts",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentsListAlertsInput>;

// Output Schema
export interface IncidentsListAlertsOutput {
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
}
export const IncidentsListAlertsOutput =
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
  }) as unknown as Schema.Codec<IncidentsListAlertsOutput>;

// The operation
/**
 * Gets all alerts for an incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 */
export const IncidentsListAlerts = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentsListAlertsInput,
  outputSchema: IncidentsListAlertsOutput,
}));
// Input Schema
export interface IncidentsListBookmarksInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
}
export const IncidentsListBookmarksInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/bookmarks",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentsListBookmarksInput>;

// Output Schema
export interface IncidentsListBookmarksOutput {
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
}
export const IncidentsListBookmarksOutput =
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
  }) as unknown as Schema.Codec<IncidentsListBookmarksOutput>;

// The operation
/**
 * Gets all bookmarks for an incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 */
export const IncidentsListBookmarks = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentsListBookmarksInput,
  outputSchema: IncidentsListBookmarksOutput,
}));
// Input Schema
export interface IncidentsListEntitiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
}
export const IncidentsListEntitiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/entities",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentsListEntitiesInput>;

// Output Schema
export interface IncidentsListEntitiesOutput {
  entities?: {
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
  metaData?: {
    count: number;
    entityKind:
      | "Account"
      | "Host"
      | "File"
      | "AzureResource"
      | "CloudApplication"
      | "DnsResolution"
      | "FileHash"
      | "Ip"
      | "Malware"
      | "Process"
      | "RegistryKey"
      | "RegistryValue"
      | "SecurityGroup"
      | "Url"
      | "IoTDevice"
      | "SecurityAlert"
      | "Bookmark"
      | "Mailbox"
      | "MailCluster"
      | "MailMessage"
      | "SubmissionMail";
  }[];
}
export const IncidentsListEntitiesOutput =
  /*@__PURE__*/ Schema.Struct({
    entities: Schema.optional(
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
    metaData: Schema.optional(
      Schema.Array(
        Schema.Struct({
          count: Schema.Number,
          entityKind: Schema.Literals([
            "Account",
            "Host",
            "File",
            "AzureResource",
            "CloudApplication",
            "DnsResolution",
            "FileHash",
            "Ip",
            "Malware",
            "Process",
            "RegistryKey",
            "RegistryValue",
            "SecurityGroup",
            "Url",
            "IoTDevice",
            "SecurityAlert",
            "Bookmark",
            "Mailbox",
            "MailCluster",
            "MailMessage",
            "SubmissionMail",
          ]),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IncidentsListEntitiesOutput>;

// The operation
/**
 * Gets all entities for an incident.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 */
export const IncidentsListEntities = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentsListEntitiesInput,
  outputSchema: IncidentsListEntitiesOutput,
}));
// Input Schema
export interface IncidentsRunPlaybookInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentIdentifier: string;
  tenantId?: string;
  logicAppsResourceId: string;
}
export const IncidentsRunPlaybookInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentIdentifier: Schema.String.pipe(T.PathParam()),
    tenantId: Schema.optional(Schema.String),
    logicAppsResourceId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentIdentifier}/runPlaybook",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentsRunPlaybookInput>;

// Output Schema
export type IncidentsRunPlaybookOutput = void;
export const IncidentsRunPlaybookOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IncidentsRunPlaybookOutput>;

// The operation
/**
 * Triggers playbook on a specific incident
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentIdentifier - Incident ID
 */
export const IncidentsRunPlaybook = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentsRunPlaybookInput,
  outputSchema: IncidentsRunPlaybookOutput,
}));
// Input Schema
export interface IncidentTasksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  incidentTaskId: string;
  properties: {
    title: string;
    description?: string;
    status: "New" | "Completed";
    createdTimeUtc?: string;
    lastModifiedTimeUtc?: string;
    createdBy?: {
      email?: string;
      name?: string;
      objectId?: string;
      userPrincipalName?: string;
    };
    lastModifiedBy?: {
      email?: string;
      name?: string;
      objectId?: string;
      userPrincipalName?: string;
    };
  };
  etag?: string;
}
export const IncidentTasksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    incidentTaskId: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      title: Schema.String,
      description: Schema.optional(Schema.String),
      status: Schema.Literals(["New", "Completed"]),
      createdTimeUtc: Schema.optional(Schema.String),
      lastModifiedTimeUtc: Schema.optional(Schema.String),
      createdBy: Schema.optional(
        Schema.Struct({
          email: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          objectId: Schema.optional(Schema.String),
          userPrincipalName: Schema.optional(Schema.String),
        }),
      ),
      lastModifiedBy: Schema.optional(
        Schema.Struct({
          email: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          objectId: Schema.optional(Schema.String),
          userPrincipalName: Schema.optional(Schema.String),
        }),
      ),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/tasks/{incidentTaskId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentTasksCreateOrUpdateInput>;

// Output Schema
export interface IncidentTasksCreateOrUpdateOutput {
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
export const IncidentTasksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<IncidentTasksCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the incident task.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param incidentTaskId - Incident task ID
 */
export const IncidentTasksCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentTasksCreateOrUpdateInput,
  outputSchema: IncidentTasksCreateOrUpdateOutput,
}));
// Input Schema
export interface IncidentTasksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  incidentTaskId: string;
}
export const IncidentTasksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    incidentId: Schema.String.pipe(T.PathParam()),
    incidentTaskId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/tasks/{incidentTaskId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IncidentTasksDeleteInput>;

// Output Schema
export type IncidentTasksDeleteOutput = void;
export const IncidentTasksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IncidentTasksDeleteOutput>;

// The operation
/**
 * Delete the incident task.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param incidentTaskId - Incident task ID
 */
export const IncidentTasksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentTasksDeleteInput,
  outputSchema: IncidentTasksDeleteOutput,
}));
// Input Schema
export interface IncidentTasksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
  incidentTaskId: string;
}
export const IncidentTasksGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  incidentId: Schema.String.pipe(T.PathParam()),
  incidentTaskId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/tasks/{incidentTaskId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<IncidentTasksGetInput>;

// Output Schema
export interface IncidentTasksGetOutput {
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
export const IncidentTasksGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<IncidentTasksGetOutput>;

// The operation
/**
 * Gets an incident task.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 * @param incidentTaskId - Incident task ID
 */
export const IncidentTasksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentTasksGetInput,
  outputSchema: IncidentTasksGetOutput,
}));
// Input Schema
export interface IncidentTasksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  incidentId: string;
}
export const IncidentTasksListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  incidentId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/incidents/{incidentId}/tasks",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<IncidentTasksListInput>;

// Output Schema
export interface IncidentTasksListOutput {
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
export const IncidentTasksListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<IncidentTasksListOutput>;

// The operation
/**
 * Gets all incident tasks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param incidentId - Incident ID
 */
export const IncidentTasksList = /*@__PURE__*/ API.make(() => ({
  inputSchema: IncidentTasksListInput,
  outputSchema: IncidentTasksListOutput,
}));
// Input Schema
export interface MetadataCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  metadataName: string;
  properties?: {
    contentId?: string;
    parentId: string;
    version?: string;
    kind: string;
    source?: {
      kind: "LocalWorkspace" | "Community" | "Solution" | "SourceRepository";
      name?: string;
      sourceId?: string;
    };
    author?: { name?: string; email?: string; link?: string };
    support?: {
      tier: "Microsoft" | "Partner" | "Community";
      name?: string;
      email?: string;
      link?: string;
    };
    dependencies?: {
      contentId?: string;
      kind?: string;
      version?: string;
      name?: string;
      operator?: "AND" | "OR";
      criteria?: {
        contentId?: string;
        kind?: string;
        version?: string;
        name?: string;
        operator?: "AND" | "OR";
        criteria?: unknown[];
      }[];
    };
    categories?: { domains?: string[]; verticals?: string[] };
    providers?: string[];
    firstPublishDate?: string;
    lastPublishDate?: string;
    customVersion?: string;
    contentSchemaVersion?: string;
    icon?: string;
    threatAnalysisTactics?: string[];
    threatAnalysisTechniques?: string[];
    previewImages?: string[];
    previewImagesDark?: string[];
  };
  etag?: string;
}
export const MetadataCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  metadataName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      contentId: Schema.optional(Schema.String),
      parentId: Schema.String,
      version: Schema.optional(Schema.String),
      kind: Schema.String,
      source: Schema.optional(
        Schema.Struct({
          kind: Schema.Literals([
            "LocalWorkspace",
            "Community",
            "Solution",
            "SourceRepository",
          ]),
          name: Schema.optional(Schema.String),
          sourceId: Schema.optional(Schema.String),
        }),
      ),
      author: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          link: Schema.optional(Schema.String),
        }),
      ),
      support: Schema.optional(
        Schema.Struct({
          tier: Schema.Literals(["Microsoft", "Partner", "Community"]),
          name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          link: Schema.optional(Schema.String),
        }),
      ),
      dependencies: Schema.optional(
        Schema.Struct({
          contentId: Schema.optional(Schema.String),
          kind: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          operator: Schema.optional(Schema.Literals(["AND", "OR"])),
          criteria: Schema.optional(
            Schema.Array(
              Schema.Struct({
                contentId: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                version: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                operator: Schema.optional(Schema.Literals(["AND", "OR"])),
                criteria: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          ),
        }),
      ),
      categories: Schema.optional(
        Schema.Struct({
          domains: Schema.optional(Schema.Array(Schema.String)),
          verticals: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      providers: Schema.optional(Schema.Array(Schema.String)),
      firstPublishDate: Schema.optional(Schema.String),
      lastPublishDate: Schema.optional(Schema.String),
      customVersion: Schema.optional(Schema.String),
      contentSchemaVersion: Schema.optional(Schema.String),
      icon: Schema.optional(Schema.String),
      threatAnalysisTactics: Schema.optional(Schema.Array(Schema.String)),
      threatAnalysisTechniques: Schema.optional(Schema.Array(Schema.String)),
      previewImages: Schema.optional(Schema.Array(Schema.String)),
      previewImagesDark: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  etag: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/metadata/{metadataName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<MetadataCreateInput>;

// Output Schema
export interface MetadataCreateOutput {
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
export const MetadataCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MetadataCreateOutput>;

// The operation
/**
 * Create a Metadata.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param metadataName - The Metadata name.
 */
export const MetadataCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetadataCreateInput,
  outputSchema: MetadataCreateOutput,
}));
// Input Schema
export interface MetadataDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  metadataName: string;
}
export const MetadataDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  metadataName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/metadata/{metadataName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<MetadataDeleteInput>;

// Output Schema
export type MetadataDeleteOutput = void;
export const MetadataDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MetadataDeleteOutput>;

// The operation
/**
 * Delete a Metadata.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param metadataName - The Metadata name.
 */
export const MetadataDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetadataDeleteInput,
  outputSchema: MetadataDeleteOutput,
}));
// Input Schema
export interface MetadataGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  metadataName: string;
}
export const MetadataGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  metadataName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/metadata/{metadataName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<MetadataGetInput>;

// Output Schema
export interface MetadataGetOutput {
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
export const MetadataGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MetadataGetOutput>;

// The operation
/**
 * Get a Metadata.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param metadataName - The Metadata name.
 */
export const MetadataGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetadataGetInput,
  outputSchema: MetadataGetOutput,
}));
// Input Schema
export interface MetadataListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $filter?: string;
  $orderby?: string;
  $top?: number;
  $skip?: number;
}
export const MetadataListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
  $orderby: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $skip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/metadata",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<MetadataListInput>;

// Output Schema
export interface MetadataListOutput {
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
export const MetadataListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MetadataListOutput>;

// The operation
/**
 * List of all metadata
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param $filter - Filters the results, based on a Boolean condition. Optional.
 * @param $orderby - Sorts the results. Optional.
 * @param $top - Returns only the first n results. Optional.
 * @param $skip - Used to skip n elements in the OData query (offset). Returns a nextLink to the next page of results if there are any left.
 */
export const MetadataList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetadataListInput,
  outputSchema: MetadataListOutput,
}));
// Input Schema
export interface MetadataUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  metadataName: string;
  properties?: {
    contentId?: string;
    parentId?: string;
    version?: string;
    kind?: string;
    source?: {
      kind: "LocalWorkspace" | "Community" | "Solution" | "SourceRepository";
      name?: string;
      sourceId?: string;
    };
    author?: { name?: string; email?: string; link?: string };
    support?: {
      tier: "Microsoft" | "Partner" | "Community";
      name?: string;
      email?: string;
      link?: string;
    };
    dependencies?: {
      contentId?: string;
      kind?: string;
      version?: string;
      name?: string;
      operator?: "AND" | "OR";
      criteria?: {
        contentId?: string;
        kind?: string;
        version?: string;
        name?: string;
        operator?: "AND" | "OR";
        criteria?: unknown[];
      }[];
    };
    categories?: { domains?: string[]; verticals?: string[] };
    providers?: string[];
    firstPublishDate?: string;
    lastPublishDate?: string;
    customVersion?: string;
    contentSchemaVersion?: string;
    icon?: string;
    threatAnalysisTactics?: string[];
    threatAnalysisTechniques?: string[];
    previewImages?: string[];
    previewImagesDark?: string[];
  };
  etag?: string;
}
export const MetadataUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  metadataName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      contentId: Schema.optional(Schema.String),
      parentId: Schema.optional(Schema.String),
      version: Schema.optional(Schema.String),
      kind: Schema.optional(Schema.String),
      source: Schema.optional(
        Schema.Struct({
          kind: Schema.Literals([
            "LocalWorkspace",
            "Community",
            "Solution",
            "SourceRepository",
          ]),
          name: Schema.optional(Schema.String),
          sourceId: Schema.optional(Schema.String),
        }),
      ),
      author: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          link: Schema.optional(Schema.String),
        }),
      ),
      support: Schema.optional(
        Schema.Struct({
          tier: Schema.Literals(["Microsoft", "Partner", "Community"]),
          name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          link: Schema.optional(Schema.String),
        }),
      ),
      dependencies: Schema.optional(
        Schema.Struct({
          contentId: Schema.optional(Schema.String),
          kind: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          operator: Schema.optional(Schema.Literals(["AND", "OR"])),
          criteria: Schema.optional(
            Schema.Array(
              Schema.Struct({
                contentId: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                version: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                operator: Schema.optional(Schema.Literals(["AND", "OR"])),
                criteria: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          ),
        }),
      ),
      categories: Schema.optional(
        Schema.Struct({
          domains: Schema.optional(Schema.Array(Schema.String)),
          verticals: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      providers: Schema.optional(Schema.Array(Schema.String)),
      firstPublishDate: Schema.optional(Schema.String),
      lastPublishDate: Schema.optional(Schema.String),
      customVersion: Schema.optional(Schema.String),
      contentSchemaVersion: Schema.optional(Schema.String),
      icon: Schema.optional(Schema.String),
      threatAnalysisTactics: Schema.optional(Schema.Array(Schema.String)),
      threatAnalysisTechniques: Schema.optional(Schema.Array(Schema.String)),
      previewImages: Schema.optional(Schema.Array(Schema.String)),
      previewImagesDark: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  etag: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/metadata/{metadataName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<MetadataUpdateInput>;

// Output Schema
export interface MetadataUpdateOutput {
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
export const MetadataUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MetadataUpdateOutput>;

// The operation
/**
 * Update an existing Metadata.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param metadataName - The Metadata name.
 */
export const MetadataUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetadataUpdateInput,
  outputSchema: MetadataUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.SecurityInsights/operations",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string;
  value: {
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
    name?: string;
    origin?: string;
    isDataAction?: boolean;
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(
    Schema.Struct({
      display: Schema.optional(
        Schema.Struct({
          description: Schema.optional(Schema.String),
          operation: Schema.optional(Schema.String),
          provider: Schema.optional(Schema.String),
          resource: Schema.optional(Schema.String),
        }),
      ),
      name: Schema.optional(Schema.String),
      origin: Schema.optional(Schema.String),
      isDataAction: Schema.optional(Schema.Boolean),
    }),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all operations available Azure Security Insights Resource Provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ProductPackageGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  packageId: string;
}
export const ProductPackageGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  packageId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentProductPackages/{packageId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ProductPackageGetInput>;

// Output Schema
export interface ProductPackageGetOutput {
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
export const ProductPackageGetOutput =
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
  }) as unknown as Schema.Codec<ProductPackageGetOutput>;

// The operation
/**
 * Gets a package by its identifier from the catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param packageId - package Id
 */
export const ProductPackageGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductPackageGetInput,
  outputSchema: ProductPackageGetOutput,
}));
// Input Schema
export interface ProductPackagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $filter?: string;
  $orderby?: string;
  $top?: number;
  $skipToken?: string;
  $search?: string;
}
export const ProductPackagesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
    $search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentProductPackages",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ProductPackagesListInput>;

// Output Schema
export interface ProductPackagesListOutput {
  nextLink?: string;
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
}
export const ProductPackagesListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ProductPackagesListOutput>;

// The operation
/**
 * Gets all packages from the catalog.
 * Expandable properties:
 * - properties/installed
 * - properties/packagedContent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param $filter - Filters the results, based on a Boolean condition. Optional.
 * @param $orderby - Sorts the results. Optional.
 * @param $top - Returns only the first n results. Optional.
 * @param $skipToken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional.
 * @param $search - Searches for a substring in the response. Optional.
 */
export const ProductPackagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductPackagesListInput,
  outputSchema: ProductPackagesListOutput,
}));
// Input Schema
export interface ProductTemplateGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  templateId: string;
}
export const ProductTemplateGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    templateId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentproducttemplates/{templateId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ProductTemplateGetInput>;

// Output Schema
export interface ProductTemplateGetOutput {
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
export const ProductTemplateGetOutput =
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
  }) as unknown as Schema.Codec<ProductTemplateGetOutput>;

// The operation
/**
 * Gets a template by its identifier.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param templateId - template Id
 */
export const ProductTemplateGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductTemplateGetInput,
  outputSchema: ProductTemplateGetOutput,
}));
// Input Schema
export interface ProductTemplatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $filter?: string;
  $orderby?: string;
  $search?: string;
  $count?: boolean;
  $top?: number;
  $skip?: number;
  $skipToken?: string;
}
export const ProductTemplatesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    $search: Schema.optional(Schema.String),
    $count: Schema.optional(Schema.Boolean),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentProductTemplates",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ProductTemplatesListInput>;

// Output Schema
export interface ProductTemplatesListOutput {
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
export const ProductTemplatesListOutput =
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
  }) as unknown as Schema.Codec<ProductTemplatesListOutput>;

// The operation
/**
 * Gets all templates in the catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param $filter - Filters the results, based on a Boolean condition. Optional.
 * @param $orderby - Sorts the results. Optional.
 * @param $search - Searches for a substring in the response. Optional.
 * @param $count - Instructs the server to return only object count without actual body. Optional.
 * @param $top - Returns only the first n results. Optional.
 * @param $skip - Used to skip n elements in the OData query (offset). Returns a nextLink to the next page of results if there are any left.
 * @param $skipToken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional.
 */
export const ProductTemplatesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductTemplatesListInput,
  outputSchema: ProductTemplatesListOutput,
}));
// Input Schema
export interface SecurityMLAnalyticsSettingsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  settingsResourceName: string;
  kind: "Anomaly";
  etag?: string;
}
export const SecurityMLAnalyticsSettingsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    settingsResourceName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["Anomaly"]),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/securityMLAnalyticsSettings/{settingsResourceName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SecurityMLAnalyticsSettingsCreateOrUpdateInput>;

// Output Schema
export interface SecurityMLAnalyticsSettingsCreateOrUpdateOutput {
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
export const SecurityMLAnalyticsSettingsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SecurityMLAnalyticsSettingsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the Security ML Analytics Settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param settingsResourceName - Security ML Analytics Settings resource name
 */
export const SecurityMLAnalyticsSettingsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SecurityMLAnalyticsSettingsCreateOrUpdateInput,
    outputSchema: SecurityMLAnalyticsSettingsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SecurityMLAnalyticsSettingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  settingsResourceName: string;
}
export const SecurityMLAnalyticsSettingsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    settingsResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/securityMLAnalyticsSettings/{settingsResourceName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SecurityMLAnalyticsSettingsDeleteInput>;

// Output Schema
export type SecurityMLAnalyticsSettingsDeleteOutput = void;
export const SecurityMLAnalyticsSettingsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SecurityMLAnalyticsSettingsDeleteOutput>;

// The operation
/**
 * Delete the Security ML Analytics Settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param settingsResourceName - Security ML Analytics Settings resource name
 */
export const SecurityMLAnalyticsSettingsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SecurityMLAnalyticsSettingsDeleteInput,
    outputSchema: SecurityMLAnalyticsSettingsDeleteOutput,
  }));
// Input Schema
export interface SecurityMLAnalyticsSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  settingsResourceName: string;
}
export const SecurityMLAnalyticsSettingsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    settingsResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/securityMLAnalyticsSettings/{settingsResourceName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SecurityMLAnalyticsSettingsGetInput>;

// Output Schema
export interface SecurityMLAnalyticsSettingsGetOutput {
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
export const SecurityMLAnalyticsSettingsGetOutput =
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
  }) as unknown as Schema.Codec<SecurityMLAnalyticsSettingsGetOutput>;

// The operation
/**
 * Gets the Security ML Analytics Settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param settingsResourceName - Security ML Analytics Settings resource name
 */
export const SecurityMLAnalyticsSettingsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SecurityMLAnalyticsSettingsGetInput,
    outputSchema: SecurityMLAnalyticsSettingsGetOutput,
  }));
// Input Schema
export interface SecurityMLAnalyticsSettingsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const SecurityMLAnalyticsSettingsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/securityMLAnalyticsSettings",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SecurityMLAnalyticsSettingsListInput>;

// Output Schema
export interface SecurityMLAnalyticsSettingsListOutput {
  nextLink?: string;
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
}
export const SecurityMLAnalyticsSettingsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<SecurityMLAnalyticsSettingsListOutput>;

// The operation
/**
 * Gets all Security ML Analytics Settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const SecurityMLAnalyticsSettingsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SecurityMLAnalyticsSettingsListInput,
    outputSchema: SecurityMLAnalyticsSettingsListOutput,
  }));
// Input Schema
export interface SentinelOnboardingStatesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sentinelOnboardingStateName: string;
  properties?: { customerManagedKey?: boolean };
  etag?: string;
}
export const SentinelOnboardingStatesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sentinelOnboardingStateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        customerManagedKey: Schema.optional(Schema.Boolean),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/onboardingStates/{sentinelOnboardingStateName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SentinelOnboardingStatesCreateInput>;

// Output Schema
export interface SentinelOnboardingStatesCreateOutput {
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
export const SentinelOnboardingStatesCreateOutput =
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
  }) as unknown as Schema.Codec<SentinelOnboardingStatesCreateOutput>;

// The operation
/**
 * Create Sentinel onboarding state
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sentinelOnboardingStateName - The Sentinel onboarding state name. Supports - default
 */
export const SentinelOnboardingStatesCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SentinelOnboardingStatesCreateInput,
    outputSchema: SentinelOnboardingStatesCreateOutput,
  }));
// Input Schema
export interface SentinelOnboardingStatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sentinelOnboardingStateName: string;
}
export const SentinelOnboardingStatesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sentinelOnboardingStateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/onboardingStates/{sentinelOnboardingStateName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SentinelOnboardingStatesDeleteInput>;

// Output Schema
export type SentinelOnboardingStatesDeleteOutput = void;
export const SentinelOnboardingStatesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SentinelOnboardingStatesDeleteOutput>;

// The operation
/**
 * Delete Sentinel onboarding state
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sentinelOnboardingStateName - The Sentinel onboarding state name. Supports - default
 */
export const SentinelOnboardingStatesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SentinelOnboardingStatesDeleteInput,
    outputSchema: SentinelOnboardingStatesDeleteOutput,
  }));
// Input Schema
export interface SentinelOnboardingStatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sentinelOnboardingStateName: string;
}
export const SentinelOnboardingStatesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sentinelOnboardingStateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/onboardingStates/{sentinelOnboardingStateName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SentinelOnboardingStatesGetInput>;

// Output Schema
export interface SentinelOnboardingStatesGetOutput {
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
export const SentinelOnboardingStatesGetOutput =
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
  }) as unknown as Schema.Codec<SentinelOnboardingStatesGetOutput>;

// The operation
/**
 * Get Sentinel onboarding state
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sentinelOnboardingStateName - The Sentinel onboarding state name. Supports - default
 */
export const SentinelOnboardingStatesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SentinelOnboardingStatesGetInput,
  outputSchema: SentinelOnboardingStatesGetOutput,
}));
// Input Schema
export interface SentinelOnboardingStatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const SentinelOnboardingStatesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/onboardingStates",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SentinelOnboardingStatesListInput>;

// Output Schema
export interface SentinelOnboardingStatesListOutput {
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
}
export const SentinelOnboardingStatesListOutput =
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
  }) as unknown as Schema.Codec<SentinelOnboardingStatesListOutput>;

// The operation
/**
 * Gets all Sentinel onboarding states
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const SentinelOnboardingStatesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SentinelOnboardingStatesListInput,
    outputSchema: SentinelOnboardingStatesListOutput,
  }));
// Input Schema
export interface SourceControlListRepositoriesInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties: {
    repositoryAccess: {
      kind: "OAuth" | "PAT" | "App";
      code?: string;
      state?: string;
      clientId?: string;
      token?: string;
      installationId?: string;
    };
  };
}
export const SourceControlListRepositoriesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      repositoryAccess: Schema.Struct({
        kind: Schema.Literals(["OAuth", "PAT", "App"]),
        code: Schema.optional(Schema.String),
        state: Schema.optional(Schema.String),
        clientId: Schema.optional(Schema.String),
        token: Schema.optional(Schema.String),
        installationId: Schema.optional(Schema.String),
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/listRepositories",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SourceControlListRepositoriesInput>;

// Output Schema
export interface SourceControlListRepositoriesOutput {
  nextLink?: string;
  value: {
    url?: string;
    fullName?: string;
    installationId?: number;
    branches?: string[];
  }[];
}
export const SourceControlListRepositoriesOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        url: Schema.optional(Schema.String),
        fullName: Schema.optional(Schema.String),
        installationId: Schema.optional(Schema.Number),
        branches: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<SourceControlListRepositoriesOutput>;

// The operation
/**
 * Gets a list of repositories metadata.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const SourceControlListRepositories =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SourceControlListRepositoriesInput,
    outputSchema: SourceControlListRepositoriesOutput,
  }));
// Input Schema
export interface SourceControlsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sourceControlId: string;
  properties: {
    id?: string;
    version?: "V1" | "V2";
    displayName: string;
    description?: string;
    repoType: "Github" | "AzureDevOps";
    contentTypes: (
      | "AnalyticsRule"
      | "AutomationRule"
      | "HuntingQuery"
      | "Parser"
      | "Playbook"
      | "Workbook"
    )[];
    repository: {
      url: string;
      branch: string;
      displayUrl?: string;
      deploymentLogsUrl?: string;
    };
    servicePrincipal?: {
      id?: string;
      tenantId?: string;
      appId?: string;
      credentialsExpireOn?: string;
    };
    workloadIdentityFederation?: {
      id?: string;
      tenantId?: string;
      appId?: string;
      subject?: string;
      issuer?: string;
    };
    repositoryAccess?: {
      kind: "OAuth" | "PAT" | "App";
      code?: string;
      state?: string;
      clientId?: string;
      token?: string;
      installationId?: string;
    };
    repositoryResourceInfo?: {
      webhook?: {
        webhookId?: string;
        webhookUrl?: string;
        webhookSecretUpdateTime?: string;
        rotateWebhookSecret?: boolean;
      };
      gitHubResourceInfo?: { appInstallationId?: string };
      azureDevOpsResourceInfo?: {
        pipelineId?: string;
        serviceConnectionId?: string;
      };
    };
    lastDeploymentInfo?: {
      deploymentFetchStatus?: "Success" | "Unauthorized" | "NotFound";
      deployment?: {
        deploymentId?: string;
        deploymentState?: "In_Progress" | "Completed" | "Queued" | "Canceling";
        deploymentResult?: "Success" | "Canceled" | "Failed";
        deploymentTime?: string;
        deploymentLogsUrl?: string;
      };
      message?: string;
    };
    pullRequest?: { url?: string; state?: "Open" | "Closed" };
  };
  etag?: string;
}
export const SourceControlsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sourceControlId: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      id: Schema.optional(Schema.String),
      version: Schema.optional(Schema.Literals(["V1", "V2"])),
      displayName: Schema.String,
      description: Schema.optional(Schema.String),
      repoType: Schema.Literals(["Github", "AzureDevOps"]),
      contentTypes: Schema.Array(
        Schema.Literals([
          "AnalyticsRule",
          "AutomationRule",
          "HuntingQuery",
          "Parser",
          "Playbook",
          "Workbook",
        ]),
      ),
      repository: Schema.Struct({
        url: Schema.String,
        branch: Schema.String,
        displayUrl: Schema.optional(Schema.String),
        deploymentLogsUrl: Schema.optional(Schema.String),
      }),
      servicePrincipal: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          appId: Schema.optional(Schema.String),
          credentialsExpireOn: Schema.optional(Schema.String),
        }),
      ),
      workloadIdentityFederation: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          appId: Schema.optional(Schema.String),
          subject: Schema.optional(Schema.String),
          issuer: Schema.optional(Schema.String),
        }),
      ),
      repositoryAccess: Schema.optional(
        Schema.Struct({
          kind: Schema.Literals(["OAuth", "PAT", "App"]),
          code: Schema.optional(Schema.String),
          state: Schema.optional(Schema.String),
          clientId: Schema.optional(Schema.String),
          token: Schema.optional(Schema.String),
          installationId: Schema.optional(Schema.String),
        }),
      ),
      repositoryResourceInfo: Schema.optional(
        Schema.Struct({
          webhook: Schema.optional(
            Schema.Struct({
              webhookId: Schema.optional(Schema.String),
              webhookUrl: Schema.optional(Schema.String),
              webhookSecretUpdateTime: Schema.optional(Schema.String),
              rotateWebhookSecret: Schema.optional(Schema.Boolean),
            }),
          ),
          gitHubResourceInfo: Schema.optional(
            Schema.Struct({
              appInstallationId: Schema.optional(Schema.String),
            }),
          ),
          azureDevOpsResourceInfo: Schema.optional(
            Schema.Struct({
              pipelineId: Schema.optional(Schema.String),
              serviceConnectionId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      lastDeploymentInfo: Schema.optional(
        Schema.Struct({
          deploymentFetchStatus: Schema.optional(
            Schema.Literals(["Success", "Unauthorized", "NotFound"]),
          ),
          deployment: Schema.optional(
            Schema.Struct({
              deploymentId: Schema.optional(Schema.String),
              deploymentState: Schema.optional(
                Schema.Literals([
                  "In_Progress",
                  "Completed",
                  "Queued",
                  "Canceling",
                ]),
              ),
              deploymentResult: Schema.optional(
                Schema.Literals(["Success", "Canceled", "Failed"]),
              ),
              deploymentTime: Schema.optional(Schema.String),
              deploymentLogsUrl: Schema.optional(Schema.String),
            }),
          ),
          message: Schema.optional(Schema.String),
        }),
      ),
      pullRequest: Schema.optional(
        Schema.Struct({
          url: Schema.optional(Schema.String),
          state: Schema.optional(Schema.Literals(["Open", "Closed"])),
        }),
      ),
    }),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/sourcecontrols/{sourceControlId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SourceControlsCreateInput>;

// Output Schema
export interface SourceControlsCreateOutput {
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
export const SourceControlsCreateOutput =
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
  }) as unknown as Schema.Codec<SourceControlsCreateOutput>;

// The operation
/**
 * Creates a source control.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sourceControlId - Source control Id
 */
export const SourceControlsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SourceControlsCreateInput,
  outputSchema: SourceControlsCreateOutput,
}));
// Input Schema
export interface SourceControlsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sourceControlId: string;
  properties: {
    repositoryAccess: {
      kind: "OAuth" | "PAT" | "App";
      code?: string;
      state?: string;
      clientId?: string;
      token?: string;
      installationId?: string;
    };
  };
}
export const SourceControlsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    sourceControlId: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      repositoryAccess: Schema.Struct({
        kind: Schema.Literals(["OAuth", "PAT", "App"]),
        code: Schema.optional(Schema.String),
        state: Schema.optional(Schema.String),
        clientId: Schema.optional(Schema.String),
        token: Schema.optional(Schema.String),
        installationId: Schema.optional(Schema.String),
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/sourcecontrols/{sourceControlId}/delete",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SourceControlsDeleteInput>;

// Output Schema
export interface SourceControlsDeleteOutput {
  warning?: {
    code?:
      | "SourceControlWarning_DeleteServicePrincipal"
      | "SourceControlWarning_DeletePipelineFromAzureDevOps"
      | "SourceControlWarning_DeleteWorkflowAndSecretFromGitHub"
      | "SourceControlWarning_DeleteRoleAssignment"
      | "SourceControl_DeletedWithWarnings";
    message?: string;
    details?: unknown[];
  };
}
export const SourceControlsDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    warning: Schema.optional(
      Schema.Struct({
        code: Schema.optional(
          Schema.Literals([
            "SourceControlWarning_DeleteServicePrincipal",
            "SourceControlWarning_DeletePipelineFromAzureDevOps",
            "SourceControlWarning_DeleteWorkflowAndSecretFromGitHub",
            "SourceControlWarning_DeleteRoleAssignment",
            "SourceControl_DeletedWithWarnings",
          ]),
        ),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
  }) as unknown as Schema.Codec<SourceControlsDeleteOutput>;

// The operation
/**
 * Delete a source control.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sourceControlId - Source control Id
 */
export const SourceControlsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SourceControlsDeleteInput,
  outputSchema: SourceControlsDeleteOutput,
}));
// Input Schema
export interface SourceControlsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  sourceControlId: string;
}
export const SourceControlsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  sourceControlId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/sourcecontrols/{sourceControlId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<SourceControlsGetInput>;

// Output Schema
export interface SourceControlsGetOutput {
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
export const SourceControlsGetOutput =
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
  }) as unknown as Schema.Codec<SourceControlsGetOutput>;

// The operation
/**
 * Gets a source control byt its identifier.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param sourceControlId - Source control Id
 */
export const SourceControlsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SourceControlsGetInput,
  outputSchema: SourceControlsGetOutput,
}));
// Input Schema
export interface SourceControlsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const SourceControlsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/sourcecontrols",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<SourceControlsListInput>;

// Output Schema
export interface SourceControlsListOutput {
  nextLink?: string;
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
}
export const SourceControlsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<SourceControlsListOutput>;

// The operation
/**
 * Gets all source controls, without source control items.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const SourceControlsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SourceControlsListInput,
  outputSchema: SourceControlsListOutput,
}));
// Input Schema
export interface ThreatIntelligenceIndicatorAppendTagsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  threatIntelligenceTags?: string[];
}
export const ThreatIntelligenceIndicatorAppendTagsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    threatIntelligenceTags: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators/{name}/appendTags",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ThreatIntelligenceIndicatorAppendTagsInput>;

// Output Schema
export type ThreatIntelligenceIndicatorAppendTagsOutput = void;
export const ThreatIntelligenceIndicatorAppendTagsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ThreatIntelligenceIndicatorAppendTagsOutput>;

// The operation
/**
 * Append tags to a threat intelligence indicator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param name - Threat intelligence indicator name field.
 */
export const ThreatIntelligenceIndicatorAppendTags =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ThreatIntelligenceIndicatorAppendTagsInput,
    outputSchema: ThreatIntelligenceIndicatorAppendTagsOutput,
  }));
// Input Schema
export interface ThreatIntelligenceIndicatorCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties?: {
    additionalData?: Record<string, unknown>;
    friendlyName?: string;
  };
  kind: "indicator";
}
export const ThreatIntelligenceIndicatorCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        additionalData: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        friendlyName: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.Literals(["indicator"]),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators/{name}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ThreatIntelligenceIndicatorCreateInput>;

// Output Schema
export interface ThreatIntelligenceIndicatorCreateOutput {
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
export const ThreatIntelligenceIndicatorCreateOutput =
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
  }) as unknown as Schema.Codec<ThreatIntelligenceIndicatorCreateOutput>;

// The operation
/**
 * Update a threat Intelligence indicator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param name - Threat intelligence indicator name field.
 */
export const ThreatIntelligenceIndicatorCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ThreatIntelligenceIndicatorCreateInput,
    outputSchema: ThreatIntelligenceIndicatorCreateOutput,
  }));
// Input Schema
export interface ThreatIntelligenceIndicatorCreateIndicatorInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties?: {
    additionalData?: Record<string, unknown>;
    friendlyName?: string;
  };
  kind: "indicator";
}
export const ThreatIntelligenceIndicatorCreateIndicatorInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        additionalData: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        friendlyName: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.Literals(["indicator"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/createIndicator",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ThreatIntelligenceIndicatorCreateIndicatorInput>;

// Output Schema
export interface ThreatIntelligenceIndicatorCreateIndicatorOutput {
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
export const ThreatIntelligenceIndicatorCreateIndicatorOutput =
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
  }) as unknown as Schema.Codec<ThreatIntelligenceIndicatorCreateIndicatorOutput>;

// The operation
/**
 * Create a new threat intelligence indicator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const ThreatIntelligenceIndicatorCreateIndicator =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ThreatIntelligenceIndicatorCreateIndicatorInput,
    outputSchema: ThreatIntelligenceIndicatorCreateIndicatorOutput,
  }));
// Input Schema
export interface ThreatIntelligenceIndicatorDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const ThreatIntelligenceIndicatorDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators/{name}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ThreatIntelligenceIndicatorDeleteInput>;

// Output Schema
export type ThreatIntelligenceIndicatorDeleteOutput = void;
export const ThreatIntelligenceIndicatorDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ThreatIntelligenceIndicatorDeleteOutput>;

// The operation
/**
 * Delete a threat intelligence indicator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param name - Threat intelligence indicator name field.
 */
export const ThreatIntelligenceIndicatorDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ThreatIntelligenceIndicatorDeleteInput,
    outputSchema: ThreatIntelligenceIndicatorDeleteOutput,
  }));
// Input Schema
export interface ThreatIntelligenceIndicatorGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const ThreatIntelligenceIndicatorGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators/{name}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ThreatIntelligenceIndicatorGetInput>;

// Output Schema
export interface ThreatIntelligenceIndicatorGetOutput {
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
export const ThreatIntelligenceIndicatorGetOutput =
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
  }) as unknown as Schema.Codec<ThreatIntelligenceIndicatorGetOutput>;

// The operation
/**
 * View a threat intelligence indicator by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param name - Threat intelligence indicator name field.
 */
export const ThreatIntelligenceIndicatorGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ThreatIntelligenceIndicatorGetInput,
    outputSchema: ThreatIntelligenceIndicatorGetOutput,
  }));
// Input Schema
export interface ThreatIntelligenceIndicatorMetricsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const ThreatIntelligenceIndicatorMetricsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/metrics",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ThreatIntelligenceIndicatorMetricsListInput>;

// Output Schema
export interface ThreatIntelligenceIndicatorMetricsListOutput {
  value: {
    properties?: {
      lastUpdatedTimeUtc?: string;
      threatTypeMetrics?: { metricName?: string; metricValue?: number }[];
      patternTypeMetrics?: { metricName?: string; metricValue?: number }[];
      sourceMetrics?: { metricName?: string; metricValue?: number }[];
    };
  }[];
}
export const ThreatIntelligenceIndicatorMetricsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            lastUpdatedTimeUtc: Schema.optional(Schema.String),
            threatTypeMetrics: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  metricName: Schema.optional(Schema.String),
                  metricValue: Schema.optional(Schema.Number),
                }),
              ),
            ),
            patternTypeMetrics: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  metricName: Schema.optional(Schema.String),
                  metricValue: Schema.optional(Schema.Number),
                }),
              ),
            ),
            sourceMetrics: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  metricName: Schema.optional(Schema.String),
                  metricValue: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ThreatIntelligenceIndicatorMetricsListOutput>;

// The operation
/**
 * Get threat intelligence indicators metrics (Indicators counts by Type, Threat Type, Source).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const ThreatIntelligenceIndicatorMetricsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ThreatIntelligenceIndicatorMetricsListInput,
    outputSchema: ThreatIntelligenceIndicatorMetricsListOutput,
  }));
// Input Schema
export interface ThreatIntelligenceIndicatorQueryIndicatorsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  pageSize?: number;
  minConfidence?: number;
  maxConfidence?: number;
  minValidUntil?: string;
  maxValidUntil?: string;
  includeDisabled?: boolean;
  sortBy?: {
    itemKey?: string;
    sortOrder?: "unsorted" | "ascending" | "descending";
  }[];
  sources?: string[];
  patternTypes?: string[];
  threatTypes?: string[];
  ids?: string[];
  keywords?: string[];
  skipToken?: string;
}
export const ThreatIntelligenceIndicatorQueryIndicatorsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    minConfidence: Schema.optional(Schema.Number),
    maxConfidence: Schema.optional(Schema.Number),
    minValidUntil: Schema.optional(Schema.String),
    maxValidUntil: Schema.optional(Schema.String),
    includeDisabled: Schema.optional(Schema.Boolean),
    sortBy: Schema.optional(
      Schema.Array(
        Schema.Struct({
          itemKey: Schema.optional(Schema.String),
          sortOrder: Schema.optional(
            Schema.Literals(["unsorted", "ascending", "descending"]),
          ),
        }),
      ),
    ),
    sources: Schema.optional(Schema.Array(Schema.String)),
    patternTypes: Schema.optional(Schema.Array(Schema.String)),
    threatTypes: Schema.optional(Schema.Array(Schema.String)),
    ids: Schema.optional(Schema.Array(Schema.String)),
    keywords: Schema.optional(Schema.Array(Schema.String)),
    skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/queryIndicators",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ThreatIntelligenceIndicatorQueryIndicatorsInput>;

// Output Schema
export interface ThreatIntelligenceIndicatorQueryIndicatorsOutput {
  nextLink?: string;
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
}
export const ThreatIntelligenceIndicatorQueryIndicatorsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ThreatIntelligenceIndicatorQueryIndicatorsOutput>;

// The operation
/**
 * Query threat intelligence indicators as per filtering criteria.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const ThreatIntelligenceIndicatorQueryIndicators =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ThreatIntelligenceIndicatorQueryIndicatorsInput,
    outputSchema: ThreatIntelligenceIndicatorQueryIndicatorsOutput,
  }));
// Input Schema
export interface ThreatIntelligenceIndicatorReplaceTagsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties?: {
    additionalData?: Record<string, unknown>;
    friendlyName?: string;
  };
  kind: "indicator";
}
export const ThreatIntelligenceIndicatorReplaceTagsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        additionalData: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        friendlyName: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.Literals(["indicator"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators/{name}/replaceTags",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ThreatIntelligenceIndicatorReplaceTagsInput>;

// Output Schema
export interface ThreatIntelligenceIndicatorReplaceTagsOutput {
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
export const ThreatIntelligenceIndicatorReplaceTagsOutput =
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
  }) as unknown as Schema.Codec<ThreatIntelligenceIndicatorReplaceTagsOutput>;

// The operation
/**
 * Replace tags added to a threat intelligence indicator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param name - Threat intelligence indicator name field.
 */
export const ThreatIntelligenceIndicatorReplaceTags =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ThreatIntelligenceIndicatorReplaceTagsInput,
    outputSchema: ThreatIntelligenceIndicatorReplaceTagsOutput,
  }));
// Input Schema
export interface ThreatIntelligenceIndicatorsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $filter?: string;
  $top?: number;
  $skipToken?: string;
  $orderby?: string;
}
export const ThreatIntelligenceIndicatorsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/threatIntelligence/main/indicators",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ThreatIntelligenceIndicatorsListInput>;

// Output Schema
export interface ThreatIntelligenceIndicatorsListOutput {
  nextLink?: string;
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
}
export const ThreatIntelligenceIndicatorsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ThreatIntelligenceIndicatorsListOutput>;

// The operation
/**
 * Get all threat intelligence indicators.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param $filter - Filters the results, based on a Boolean condition. Optional.
 * @param $top - Returns only the first n results. Optional.
 * @param $skipToken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional.
 * @param $orderby - Sorts the results. Optional.
 */
export const ThreatIntelligenceIndicatorsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ThreatIntelligenceIndicatorsListInput,
    outputSchema: ThreatIntelligenceIndicatorsListOutput,
  }));
// Input Schema
export interface WatchlistItemsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  watchlistAlias: string;
  watchlistItemId: string;
  properties?: {
    watchlistItemType?: string;
    watchlistItemId?: string;
    tenantId?: string;
    isDeleted?: boolean;
    created?: string;
    updated?: string;
    createdBy?: { email?: string; name?: string; objectId?: string | null };
    updatedBy?: { email?: string; name?: string; objectId?: string | null };
    itemsKeyValue: unknown;
    entityMapping?: unknown;
  };
  etag?: string;
}
export const WatchlistItemsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    watchlistAlias: Schema.String.pipe(T.PathParam()),
    watchlistItemId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        watchlistItemType: Schema.optional(Schema.String),
        watchlistItemId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        isDeleted: Schema.optional(Schema.Boolean),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
        createdBy: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        updatedBy: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        itemsKeyValue: Schema.Unknown,
        entityMapping: Schema.optional(Schema.Unknown),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}/watchlistItems/{watchlistItemId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WatchlistItemsCreateOrUpdateInput>;

// Output Schema
export interface WatchlistItemsCreateOrUpdateOutput {
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
export const WatchlistItemsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WatchlistItemsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a watchlist item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param watchlistAlias - The watchlist alias
 * @param watchlistItemId - The watchlist item id (GUID)
 */
export const WatchlistItemsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WatchlistItemsCreateOrUpdateInput,
    outputSchema: WatchlistItemsCreateOrUpdateOutput,
  }));
// Input Schema
export interface WatchlistItemsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  watchlistAlias: string;
  watchlistItemId: string;
}
export const WatchlistItemsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    watchlistAlias: Schema.String.pipe(T.PathParam()),
    watchlistItemId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}/watchlistItems/{watchlistItemId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WatchlistItemsDeleteInput>;

// Output Schema
export type WatchlistItemsDeleteOutput = void;
export const WatchlistItemsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WatchlistItemsDeleteOutput>;

// The operation
/**
 * Delete a watchlist item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param watchlistAlias - The watchlist alias
 * @param watchlistItemId - The watchlist item id (GUID)
 */
export const WatchlistItemsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchlistItemsDeleteInput,
  outputSchema: WatchlistItemsDeleteOutput,
}));
// Input Schema
export interface WatchlistItemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  watchlistAlias: string;
  watchlistItemId: string;
}
export const WatchlistItemsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  watchlistAlias: Schema.String.pipe(T.PathParam()),
  watchlistItemId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}/watchlistItems/{watchlistItemId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<WatchlistItemsGetInput>;

// Output Schema
export interface WatchlistItemsGetOutput {
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
export const WatchlistItemsGetOutput =
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
  }) as unknown as Schema.Codec<WatchlistItemsGetOutput>;

// The operation
/**
 * Get a watchlist item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param watchlistAlias - The watchlist alias
 * @param watchlistItemId - The watchlist item id (GUID)
 */
export const WatchlistItemsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchlistItemsGetInput,
  outputSchema: WatchlistItemsGetOutput,
}));
// Input Schema
export interface WatchlistItemsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  watchlistAlias: string;
  $skipToken?: string;
}
export const WatchlistItemsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    watchlistAlias: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}/watchlistItems",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WatchlistItemsListInput>;

// Output Schema
export interface WatchlistItemsListOutput {
  nextLink?: string;
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
}
export const WatchlistItemsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<WatchlistItemsListOutput>;

// The operation
/**
 * Get all watchlist Items.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param watchlistAlias - The watchlist alias
 * @param $skipToken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional.
 */
export const WatchlistItemsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchlistItemsListInput,
  outputSchema: WatchlistItemsListOutput,
}));
// Input Schema
export interface WatchlistsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  watchlistAlias: string;
  properties?: {
    watchlistId?: string;
    displayName: string;
    provider: string;
    source?: string;
    sourceType?: "Local" | "AzureStorage";
    created?: string;
    updated?: string;
    createdBy?: { email?: string; name?: string; objectId?: string | null };
    updatedBy?: { email?: string; name?: string; objectId?: string | null };
    description?: string;
    watchlistType?: string;
    watchlistAlias?: string;
    isDeleted?: boolean;
    labels?: string[];
    defaultDuration?: string;
    tenantId?: string;
    numberOfLinesToSkip?: number;
    rawContent?: string;
    itemsSearchKey: string;
    contentType?: string;
    uploadStatus?: string;
    provisioningState?:
      | "New"
      | "InProgress"
      | "Uploading"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  etag?: string;
}
export const WatchlistsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    watchlistAlias: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        watchlistId: Schema.optional(Schema.String),
        displayName: Schema.String,
        provider: Schema.String,
        source: Schema.optional(Schema.String),
        sourceType: Schema.optional(Schema.Literals(["Local", "AzureStorage"])),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
        createdBy: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        updatedBy: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
        description: Schema.optional(Schema.String),
        watchlistType: Schema.optional(Schema.String),
        watchlistAlias: Schema.optional(Schema.String),
        isDeleted: Schema.optional(Schema.Boolean),
        labels: Schema.optional(Schema.Array(Schema.String)),
        defaultDuration: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        numberOfLinesToSkip: Schema.optional(Schema.Number),
        rawContent: Schema.optional(Schema.String),
        itemsSearchKey: Schema.String,
        contentType: Schema.optional(Schema.String),
        uploadStatus: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "New",
            "InProgress",
            "Uploading",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WatchlistsCreateOrUpdateInput>;

// Output Schema
export interface WatchlistsCreateOrUpdateOutput {
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
export const WatchlistsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WatchlistsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Watchlist and its Watchlist Items (bulk creation, e.g. through text/csv content type). To create a Watchlist and its Items, we should call this endpoint with rawContent and contentType properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param watchlistAlias - The watchlist alias
 */
export const WatchlistsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchlistsCreateOrUpdateInput,
  outputSchema: WatchlistsCreateOrUpdateOutput,
}));
// Input Schema
export interface WatchlistsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  watchlistAlias: string;
}
export const WatchlistsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  watchlistAlias: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<WatchlistsDeleteInput>;

// Output Schema
export type WatchlistsDeleteOutput = void;
export const WatchlistsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WatchlistsDeleteOutput>;

// The operation
/**
 * Delete a watchlist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param watchlistAlias - The watchlist alias
 */
export const WatchlistsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchlistsDeleteInput,
  outputSchema: WatchlistsDeleteOutput,
}));
// Input Schema
export interface WatchlistsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  watchlistAlias: string;
}
export const WatchlistsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  watchlistAlias: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<WatchlistsGetInput>;

// Output Schema
export interface WatchlistsGetOutput {
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
export const WatchlistsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WatchlistsGetOutput>;

// The operation
/**
 * Get a watchlist, without its watchlist items.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param watchlistAlias - The watchlist alias
 */
export const WatchlistsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchlistsGetInput,
  outputSchema: WatchlistsGetOutput,
}));
// Input Schema
export interface WatchlistsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skipToken?: string;
}
export const WatchlistsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<WatchlistsListInput>;

// Output Schema
export interface WatchlistsListOutput {
  nextLink?: string;
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
}
export const WatchlistsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<WatchlistsListOutput>;

// The operation
/**
 * Get all watchlists, without watchlist items.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param $skipToken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional.
 */
export const WatchlistsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WatchlistsListInput,
  outputSchema: WatchlistsListOutput,
}));
