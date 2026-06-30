/**
 * Azure Automation API
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
export interface ActivityGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  moduleName: string;
  activityName: string;
}
export const ActivityGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  moduleName: Schema.String.pipe(T.PathParam()),
  activityName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/activities/{activityName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ActivityGetInput>;

// Output Schema
export interface ActivityGetOutput {
  id?: string;
  name?: string;
  properties?: {
    definition?: string;
    parameterSets?: {
      name?: string;
      parameters?: {
        name?: string;
        type?: string;
        isMandatory?: boolean;
        isDynamic?: boolean;
        position?: number;
        valueFromPipeline?: boolean;
        valueFromPipelineByPropertyName?: boolean;
        valueFromRemainingArguments?: boolean;
        description?: string;
        validationSet?: { memberValue?: string }[];
      }[];
    }[];
    outputTypes?: { name?: string; type?: string }[];
    creationTime?: string;
    lastModifiedTime?: string;
    description?: string;
  };
}
export const ActivityGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      definition: Schema.optional(Schema.String),
      parameterSets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            parameters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  isMandatory: Schema.optional(Schema.Boolean),
                  isDynamic: Schema.optional(Schema.Boolean),
                  position: Schema.optional(Schema.Number),
                  valueFromPipeline: Schema.optional(Schema.Boolean),
                  valueFromPipelineByPropertyName: Schema.optional(
                    Schema.Boolean,
                  ),
                  valueFromRemainingArguments: Schema.optional(Schema.Boolean),
                  description: Schema.optional(Schema.String),
                  validationSet: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        memberValue: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      ),
      outputTypes: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      creationTime: Schema.optional(Schema.String),
      lastModifiedTime: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ActivityGetOutput>;

// The operation
/**
 * Retrieve the activity in the module identified by module name and activity name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param moduleName - The module name.
 * @param activityName - The name of activity.
 */
export const ActivityGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ActivityGetInput,
  outputSchema: ActivityGetOutput,
}));
// Input Schema
export interface ActivityListByModuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  moduleName: string;
}
export const ActivityListByModuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    moduleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/activities",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ActivityListByModuleInput>;

// Output Schema
export interface ActivityListByModuleOutput {
  value: {
    id?: string;
    name?: string;
    properties?: {
      definition?: string;
      parameterSets?: {
        name?: string;
        parameters?: {
          name?: string;
          type?: string;
          isMandatory?: boolean;
          isDynamic?: boolean;
          position?: number;
          valueFromPipeline?: boolean;
          valueFromPipelineByPropertyName?: boolean;
          valueFromRemainingArguments?: boolean;
          description?: string;
          validationSet?: { memberValue?: string }[];
        }[];
      }[];
      outputTypes?: { name?: string; type?: string }[];
      creationTime?: string;
      lastModifiedTime?: string;
      description?: string;
    };
  }[];
  nextLink?: string;
}
export const ActivityListByModuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            definition: Schema.optional(Schema.String),
            parameterSets: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  parameters: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        type: Schema.optional(Schema.String),
                        isMandatory: Schema.optional(Schema.Boolean),
                        isDynamic: Schema.optional(Schema.Boolean),
                        position: Schema.optional(Schema.Number),
                        valueFromPipeline: Schema.optional(Schema.Boolean),
                        valueFromPipelineByPropertyName: Schema.optional(
                          Schema.Boolean,
                        ),
                        valueFromRemainingArguments: Schema.optional(
                          Schema.Boolean,
                        ),
                        description: Schema.optional(Schema.String),
                        validationSet: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              memberValue: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            outputTypes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                }),
              ),
            ),
            creationTime: Schema.optional(Schema.String),
            lastModifiedTime: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ActivityListByModuleOutput>;

// The operation
/**
 * Retrieve a list of activities in the module identified by module name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param moduleName - The module name.
 */
export const ActivityListByModule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ActivityListByModuleInput,
    outputSchema: ActivityListByModuleOutput,
  }),
);
// Input Schema
export interface AgentRegistrationInformationGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const AgentRegistrationInformationGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/agentRegistrationInformation",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<AgentRegistrationInformationGetInput>;

// Output Schema
export interface AgentRegistrationInformationGetOutput {
  dscMetaConfiguration?: string;
  endpoint?: string;
  keys?: { primary?: string; secondary?: string };
  id?: string;
}
export const AgentRegistrationInformationGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dscMetaConfiguration: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
    keys: Schema.optional(
      Schema.Struct({
        primary: Schema.optional(Schema.String),
        secondary: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AgentRegistrationInformationGetOutput>;

// The operation
/**
 * Retrieve the automation agent registration information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const AgentRegistrationInformationGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentRegistrationInformationGetInput,
    outputSchema: AgentRegistrationInformationGetOutput,
  }));
// Input Schema
export interface AgentRegistrationInformationRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  keyName: "primary" | "secondary";
}
export const AgentRegistrationInformationRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.Literals(["primary", "secondary"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/agentRegistrationInformation/regenerateKey",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<AgentRegistrationInformationRegenerateKeyInput>;

// Output Schema
export interface AgentRegistrationInformationRegenerateKeyOutput {
  dscMetaConfiguration?: string;
  endpoint?: string;
  keys?: { primary?: string; secondary?: string };
  id?: string;
}
export const AgentRegistrationInformationRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dscMetaConfiguration: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
    keys: Schema.optional(
      Schema.Struct({
        primary: Schema.optional(Schema.String),
        secondary: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AgentRegistrationInformationRegenerateKeyOutput>;

// The operation
/**
 * Regenerate a primary or secondary agent registration key
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const AgentRegistrationInformationRegenerateKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentRegistrationInformationRegenerateKeyInput,
    outputSchema: AgentRegistrationInformationRegenerateKeyOutput,
  }));
// Input Schema
export interface AutomationAccountCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  properties?: {
    sku?: { name: "Free" | "Basic"; family?: string; capacity?: number };
    encryption?: {
      keyVaultProperties?: {
        keyvaultUri?: string;
        keyName?: string;
        keyVersion?: string;
      };
      keySource?: "Microsoft.Automation" | "Microsoft.Keyvault";
      identity?: { userAssignedIdentity?: unknown };
    };
    publicNetworkAccess?: boolean;
    disableLocalAuth?: boolean;
  };
  name?: string;
  location?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const AutomationAccountCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.Literals(["Free", "Basic"]),
            family: Schema.optional(Schema.String),
            capacity: Schema.optional(Schema.Number),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyvaultUri: Schema.optional(Schema.String),
                keyName: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
              }),
            ),
            keySource: Schema.optional(
              Schema.Literals(["Microsoft.Automation", "Microsoft.Keyvault"]),
            ),
            identity: Schema.optional(
              Schema.Struct({
                userAssignedIdentity: Schema.optional(Schema.Unknown),
              }),
            ),
          }),
        ),
        publicNetworkAccess: Schema.optional(Schema.Boolean),
        disableLocalAuth: Schema.optional(Schema.Boolean),
      }),
    ),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<AutomationAccountCreateOrUpdateInput>;

// Output Schema
export interface AutomationAccountCreateOrUpdateOutput {
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
export const AutomationAccountCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AutomationAccountCreateOrUpdateOutput>;

// The operation
/**
 * Create or update automation account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const AutomationAccountCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AutomationAccountCreateOrUpdateInput,
    outputSchema: AutomationAccountCreateOrUpdateOutput,
  }));
// Input Schema
export interface AutomationAccountDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const AutomationAccountDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<AutomationAccountDeleteInput>;

// Output Schema
export type AutomationAccountDeleteOutput = void;
export const AutomationAccountDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AutomationAccountDeleteOutput>;

// The operation
/**
 * Delete an automation account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const AutomationAccountDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AutomationAccountDeleteInput,
    outputSchema: AutomationAccountDeleteOutput,
  }),
);
// Input Schema
export interface AutomationAccountGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const AutomationAccountGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<AutomationAccountGetInput>;

// Output Schema
export interface AutomationAccountGetOutput {
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
export const AutomationAccountGetOutput =
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
  }) as unknown as Schema.Codec<AutomationAccountGetOutput>;

// The operation
/**
 * Get information about an Automation Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const AutomationAccountGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AutomationAccountGetInput,
    outputSchema: AutomationAccountGetOutput,
  }),
);
// Input Schema
export interface AutomationAccountListInput {
  subscriptionId: string;
}
export const AutomationAccountListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Automation/automationAccounts",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<AutomationAccountListInput>;

// Output Schema
export interface AutomationAccountListOutput {
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
export const AutomationAccountListOutput =
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
  }) as unknown as Schema.Codec<AutomationAccountListOutput>;

// The operation
/**
 * Lists the Automation Accounts within an Azure subscription.
 *
 * Retrieve a list of accounts within a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AutomationAccountList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AutomationAccountListInput,
    outputSchema: AutomationAccountListOutput,
  }),
);
// Input Schema
export interface AutomationAccountListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AutomationAccountListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<AutomationAccountListByResourceGroupInput>;

// Output Schema
export interface AutomationAccountListByResourceGroupOutput {
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
export const AutomationAccountListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AutomationAccountListByResourceGroupOutput>;

// The operation
/**
 * Retrieve a list of accounts within a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AutomationAccountListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AutomationAccountListByResourceGroupInput,
    outputSchema: AutomationAccountListByResourceGroupOutput,
  }));
// Input Schema
export interface AutomationAccountListDeletedRunbooksInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const AutomationAccountListDeletedRunbooksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/listDeletedRunbooks",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<AutomationAccountListDeletedRunbooksInput>;

// Output Schema
export interface AutomationAccountListDeletedRunbooksOutput {
  value: {
    properties?: {
      runbookId?: string;
      runbookType?: string;
      runtime?: string;
      runtimeEnvironment?: string | null;
      creationTime?: string;
      deletionTime?: string;
    };
    id?: string;
    name?: string;
    location?: string;
  }[];
  nextLink?: string;
}
export const AutomationAccountListDeletedRunbooksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            runbookId: Schema.optional(Schema.String),
            runbookType: Schema.optional(Schema.String),
            runtime: Schema.optional(Schema.String),
            runtimeEnvironment: Schema.optional(Schema.NullOr(Schema.String)),
            creationTime: Schema.optional(Schema.String),
            deletionTime: Schema.optional(Schema.String),
          }),
        ),
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AutomationAccountListDeletedRunbooksOutput>;

// The operation
/**
 * Retrieve the deleted runbooks for an automation account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const AutomationAccountListDeletedRunbooks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AutomationAccountListDeletedRunbooksInput,
    outputSchema: AutomationAccountListDeletedRunbooksOutput,
  }));
// Input Schema
export interface AutomationAccountUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  properties?: {
    sku?: { name: "Free" | "Basic"; family?: string; capacity?: number };
    encryption?: {
      keyVaultProperties?: {
        keyvaultUri?: string;
        keyName?: string;
        keyVersion?: string;
      };
      keySource?: "Microsoft.Automation" | "Microsoft.Keyvault";
      identity?: { userAssignedIdentity?: unknown };
    };
    publicNetworkAccess?: boolean;
    disableLocalAuth?: boolean;
  };
  name?: string;
  location?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const AutomationAccountUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.Literals(["Free", "Basic"]),
            family: Schema.optional(Schema.String),
            capacity: Schema.optional(Schema.Number),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyvaultUri: Schema.optional(Schema.String),
                keyName: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
              }),
            ),
            keySource: Schema.optional(
              Schema.Literals(["Microsoft.Automation", "Microsoft.Keyvault"]),
            ),
            identity: Schema.optional(
              Schema.Struct({
                userAssignedIdentity: Schema.optional(Schema.Unknown),
              }),
            ),
          }),
        ),
        publicNetworkAccess: Schema.optional(Schema.Boolean),
        disableLocalAuth: Schema.optional(Schema.Boolean),
      }),
    ),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<AutomationAccountUpdateInput>;

// Output Schema
export interface AutomationAccountUpdateOutput {
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
export const AutomationAccountUpdateOutput =
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
  }) as unknown as Schema.Codec<AutomationAccountUpdateOutput>;

// The operation
/**
 * Update an automation account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const AutomationAccountUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AutomationAccountUpdateInput,
    outputSchema: AutomationAccountUpdateOutput,
  }),
);
// Input Schema
export interface CertificateCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  certificateName: string;
  name: string;
  properties: {
    base64Value: string;
    description?: string;
    thumbprint?: string;
    isExportable?: boolean;
  };
}
export const CertificateCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    properties: Schema.Struct({
      base64Value: Schema.String,
      description: Schema.optional(Schema.String),
      thumbprint: Schema.optional(Schema.String),
      isExportable: Schema.optional(Schema.Boolean),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<CertificateCreateOrUpdateInput>;

// Output Schema
export interface CertificateCreateOrUpdateOutput {
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
export const CertificateCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CertificateCreateOrUpdateOutput>;

// The operation
/**
 * Create a certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param certificateName - The name of certificate.
 */
export const CertificateCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CertificateCreateOrUpdateInput,
    outputSchema: CertificateCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface CertificateDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  certificateName: string;
}
export const CertificateDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<CertificateDeleteInput>;

// Output Schema
export type CertificateDeleteOutput = void;
export const CertificateDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CertificateDeleteOutput>;

// The operation
/**
 * Delete the certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param certificateName - The name of certificate.
 */
export const CertificateDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificateDeleteInput,
  outputSchema: CertificateDeleteOutput,
}));
// Input Schema
export interface CertificateGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  certificateName: string;
}
export const CertificateGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  certificateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<CertificateGetInput>;

// Output Schema
export interface CertificateGetOutput {
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
export const CertificateGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CertificateGetOutput>;

// The operation
/**
 * Retrieve the certificate identified by certificate name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param certificateName - The name of certificate.
 */
export const CertificateGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificateGetInput,
  outputSchema: CertificateGetOutput,
}));
// Input Schema
export interface CertificateListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const CertificateListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<CertificateListByAutomationAccountInput>;

// Output Schema
export interface CertificateListByAutomationAccountOutput {
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
export const CertificateListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<CertificateListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of certificates.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const CertificateListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CertificateListByAutomationAccountInput,
    outputSchema: CertificateListByAutomationAccountOutput,
  }));
// Input Schema
export interface CertificateUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  certificateName: string;
  name?: string;
  properties?: { description?: string };
}
export const CertificateUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<CertificateUpdateInput>;

// Output Schema
export interface CertificateUpdateOutput {
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
export const CertificateUpdateOutput =
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
  }) as unknown as Schema.Codec<CertificateUpdateOutput>;

// The operation
/**
 * Update a certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param certificateName - The name of certificate.
 */
export const CertificateUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificateUpdateInput,
  outputSchema: CertificateUpdateOutput,
}));
// Input Schema
export interface ConnectionCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  connectionName: string;
  name: string;
  properties: {
    description?: string;
    connectionType: { name?: string };
    fieldDefinitionValues?: Record<string, string>;
  };
}
export const ConnectionCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      connectionType: Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
      fieldDefinitionValues: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ConnectionCreateOrUpdateInput>;

// Output Schema
export interface ConnectionCreateOrUpdateOutput {
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
export const ConnectionCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectionCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param connectionName - The name of connection.
 */
export const ConnectionCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectionCreateOrUpdateInput,
    outputSchema: ConnectionCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ConnectionDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  connectionName: string;
}
export const ConnectionDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ConnectionDeleteInput>;

// Output Schema
export type ConnectionDeleteOutput = void;
export const ConnectionDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectionDeleteOutput>;

// The operation
/**
 * Delete the connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param connectionName - The name of connection.
 */
export const ConnectionDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectionDeleteInput,
  outputSchema: ConnectionDeleteOutput,
}));
// Input Schema
export interface ConnectionGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  connectionName: string;
}
export const ConnectionGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ConnectionGetInput>;

// Output Schema
export interface ConnectionGetOutput {
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
export const ConnectionGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ConnectionGetOutput>;

// The operation
/**
 * Retrieve the connection identified by connection name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param connectionName - The name of connection.
 */
export const ConnectionGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectionGetInput,
  outputSchema: ConnectionGetOutput,
}));
// Input Schema
export interface ConnectionListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const ConnectionListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ConnectionListByAutomationAccountInput>;

// Output Schema
export interface ConnectionListByAutomationAccountOutput {
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
export const ConnectionListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<ConnectionListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of connections.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const ConnectionListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectionListByAutomationAccountInput,
    outputSchema: ConnectionListByAutomationAccountOutput,
  }));
// Input Schema
export interface ConnectionTypeCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  connectionTypeName: string;
  name: string;
  properties: {
    isGlobal?: boolean;
    fieldDefinitions: Record<
      string,
      { isEncrypted?: boolean; isOptional?: boolean; type: string }
    >;
  };
}
export const ConnectionTypeCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    connectionTypeName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    properties: Schema.Struct({
      isGlobal: Schema.optional(Schema.Boolean),
      fieldDefinitions: Schema.Record(
        Schema.String,
        Schema.Struct({
          isEncrypted: Schema.optional(Schema.Boolean),
          isOptional: Schema.optional(Schema.Boolean),
          type: Schema.String,
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connectionTypes/{connectionTypeName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ConnectionTypeCreateOrUpdateInput>;

// Output Schema
export interface ConnectionTypeCreateOrUpdateOutput {
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
export const ConnectionTypeCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectionTypeCreateOrUpdateOutput>;

// The operation
/**
 * Create a connection type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param connectionTypeName - The name of connection type.
 */
export const ConnectionTypeCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectionTypeCreateOrUpdateInput,
    outputSchema: ConnectionTypeCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConnectionTypeDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  connectionTypeName: string;
}
export const ConnectionTypeDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    connectionTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connectionTypes/{connectionTypeName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ConnectionTypeDeleteInput>;

// Output Schema
export type ConnectionTypeDeleteOutput = void;
export const ConnectionTypeDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectionTypeDeleteOutput>;

// The operation
/**
 * Delete the connection type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param connectionTypeName - The name of connection type.
 */
export const ConnectionTypeDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectionTypeDeleteInput,
    outputSchema: ConnectionTypeDeleteOutput,
  }),
);
// Input Schema
export interface ConnectionTypeGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  connectionTypeName: string;
}
export const ConnectionTypeGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    connectionTypeName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connectionTypes/{connectionTypeName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ConnectionTypeGetInput>;

// Output Schema
export interface ConnectionTypeGetOutput {
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
export const ConnectionTypeGetOutput =
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
  }) as unknown as Schema.Codec<ConnectionTypeGetOutput>;

// The operation
/**
 * Retrieve the connection type identified by connection type name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param connectionTypeName - The name of connection type.
 */
export const ConnectionTypeGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectionTypeGetInput,
  outputSchema: ConnectionTypeGetOutput,
}));
// Input Schema
export interface ConnectionTypeListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const ConnectionTypeListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connectionTypes",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ConnectionTypeListByAutomationAccountInput>;

// Output Schema
export interface ConnectionTypeListByAutomationAccountOutput {
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
export const ConnectionTypeListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<ConnectionTypeListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of connection types.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const ConnectionTypeListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectionTypeListByAutomationAccountInput,
    outputSchema: ConnectionTypeListByAutomationAccountOutput,
  }));
// Input Schema
export interface ConnectionUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  connectionName: string;
  name?: string;
  properties?: {
    description?: string;
    fieldDefinitionValues?: Record<string, string>;
  };
}
export const ConnectionUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      fieldDefinitionValues: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/connections/{connectionName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ConnectionUpdateInput>;

// Output Schema
export interface ConnectionUpdateOutput {
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
export const ConnectionUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<ConnectionUpdateOutput>;

// The operation
/**
 * Update a connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param connectionName - The name of connection.
 */
export const ConnectionUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectionUpdateInput,
  outputSchema: ConnectionUpdateOutput,
}));
// Input Schema
export interface ConvertGraphRunbookContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  rawContent?: {
    schemaVersion?: string;
    runbookDefinition?: string;
    runbookType?: "GraphPowerShell" | "GraphPowerShellWorkflow";
  };
  graphRunbookJson?: string | null;
}
export const ConvertGraphRunbookContentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    rawContent: Schema.optional(
      Schema.Struct({
        schemaVersion: Schema.optional(Schema.String),
        runbookDefinition: Schema.optional(Schema.String),
        runbookType: Schema.optional(
          Schema.Literals(["GraphPowerShell", "GraphPowerShellWorkflow"]),
        ),
      }),
    ),
    graphRunbookJson: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/convertGraphRunbookContent",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ConvertGraphRunbookContentInput>;

// Output Schema
export interface ConvertGraphRunbookContentOutput {
  rawContent?: {
    schemaVersion?: string;
    runbookDefinition?: string;
    runbookType?: "GraphPowerShell" | "GraphPowerShellWorkflow";
  };
  graphRunbookJson?: string | null;
}
export const ConvertGraphRunbookContentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rawContent: Schema.optional(
      Schema.Struct({
        schemaVersion: Schema.optional(Schema.String),
        runbookDefinition: Schema.optional(Schema.String),
        runbookType: Schema.optional(
          Schema.Literals(["GraphPowerShell", "GraphPowerShellWorkflow"]),
        ),
      }),
    ),
    graphRunbookJson: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<ConvertGraphRunbookContentOutput>;

// The operation
/**
 * Post operation to serialize or deserialize GraphRunbookContent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const convertGraphRunbookContent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConvertGraphRunbookContentInput,
    outputSchema: ConvertGraphRunbookContentOutput,
  }),
);
// Input Schema
export interface CredentialCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  credentialName: string;
  name: string;
  properties: {
    userName: string;
    password: string | Redacted.Redacted<string>;
    description?: string;
  };
}
export const CredentialCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    credentialName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    properties: Schema.Struct({
      userName: Schema.String,
      password: SensitiveString,
      description: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<CredentialCreateOrUpdateInput>;

// Output Schema
export interface CredentialCreateOrUpdateOutput {
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
export const CredentialCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CredentialCreateOrUpdateOutput>;

// The operation
/**
 * Create a credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param credentialName - The name of credential.
 */
export const CredentialCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CredentialCreateOrUpdateInput,
    outputSchema: CredentialCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface CredentialDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  credentialName: string;
}
export const CredentialDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  credentialName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<CredentialDeleteInput>;

// Output Schema
export type CredentialDeleteOutput = void;
export const CredentialDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CredentialDeleteOutput>;

// The operation
/**
 * Delete the credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param credentialName - The name of credential.
 */
export const CredentialDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CredentialDeleteInput,
  outputSchema: CredentialDeleteOutput,
}));
// Input Schema
export interface CredentialGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  credentialName: string;
}
export const CredentialGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  credentialName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<CredentialGetInput>;

// Output Schema
export interface CredentialGetOutput {
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
export const CredentialGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CredentialGetOutput>;

// The operation
/**
 * Retrieve the credential identified by credential name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param credentialName - The name of credential.
 */
export const CredentialGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CredentialGetInput,
  outputSchema: CredentialGetOutput,
}));
// Input Schema
export interface CredentialListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const CredentialListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<CredentialListByAutomationAccountInput>;

// Output Schema
export interface CredentialListByAutomationAccountOutput {
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
export const CredentialListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<CredentialListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of credentials.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const CredentialListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CredentialListByAutomationAccountInput,
    outputSchema: CredentialListByAutomationAccountOutput,
  }));
// Input Schema
export interface CredentialUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  credentialName: string;
  name?: string;
  properties?: {
    userName?: string;
    password?: string | Redacted.Redacted<string>;
    description?: string;
  };
}
export const CredentialUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  credentialName: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      userName: Schema.optional(Schema.String),
      password: Schema.optional(SensitiveString),
      description: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<CredentialUpdateInput>;

// Output Schema
export interface CredentialUpdateOutput {
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
export const CredentialUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<CredentialUpdateOutput>;

// The operation
/**
 * Update a credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param credentialName - The name of credential.
 */
export const CredentialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CredentialUpdateInput,
  outputSchema: CredentialUpdateOutput,
}));
// Input Schema
export interface DeletedAutomationAccountsListBySubscriptionInput {
  subscriptionId: string;
}
export const DeletedAutomationAccountsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Automation/deletedAutomationAccounts",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DeletedAutomationAccountsListBySubscriptionInput>;

// Output Schema
export interface DeletedAutomationAccountsListBySubscriptionOutput {
  value?: {
    properties?: {
      automationAccountResourceId?: string;
      automationAccountId?: string;
      location?: string;
      deletionTime?: string;
    };
    id?: string;
    name?: string;
    type?: string;
    location?: string;
  }[];
}
export const DeletedAutomationAccountsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              automationAccountResourceId: Schema.optional(Schema.String),
              automationAccountId: Schema.optional(Schema.String),
              location: Schema.optional(Schema.String),
              deletionTime: Schema.optional(Schema.String),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DeletedAutomationAccountsListBySubscriptionOutput>;

// The operation
/**
 * Retrieve deleted automation account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const deletedAutomationAccountsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeletedAutomationAccountsListBySubscriptionInput,
    outputSchema: DeletedAutomationAccountsListBySubscriptionOutput,
  }));
// Input Schema
export interface DscConfigurationCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  configurationName: string;
  properties: {
    logVerbose?: boolean;
    logProgress?: boolean;
    source: {
      hash?: { algorithm: string; value: string };
      type?: "embeddedContent" | "uri";
      value?: string;
      version?: string;
    };
    parameters?: Record<
      string,
      {
        type?: string;
        isMandatory?: boolean;
        position?: number;
        defaultValue?: string;
      }
    >;
    description?: string;
  };
  name?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const DscConfigurationCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      logVerbose: Schema.optional(Schema.Boolean),
      logProgress: Schema.optional(Schema.Boolean),
      source: Schema.Struct({
        hash: Schema.optional(
          Schema.Struct({
            algorithm: Schema.String,
            value: Schema.String,
          }),
        ),
        type: Schema.optional(Schema.Literals(["embeddedContent", "uri"])),
        value: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
      }),
      parameters: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            type: Schema.optional(Schema.String),
            isMandatory: Schema.optional(Schema.Boolean),
            position: Schema.optional(Schema.Number),
            defaultValue: Schema.optional(Schema.String),
          }),
        ),
      ),
      description: Schema.optional(Schema.String),
    }),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscConfigurationCreateOrUpdateInput>;

// Output Schema
export interface DscConfigurationCreateOrUpdateOutput {
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
export const DscConfigurationCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DscConfigurationCreateOrUpdateOutput>;

// The operation
/**
 * Create the configuration identified by configuration name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param configurationName - The configuration name.
 */
export const DscConfigurationCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DscConfigurationCreateOrUpdateInput,
    outputSchema: DscConfigurationCreateOrUpdateOutput,
  }));
// Input Schema
export interface DscConfigurationDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  configurationName: string;
}
export const DscConfigurationDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscConfigurationDeleteInput>;

// Output Schema
export type DscConfigurationDeleteOutput = void;
export const DscConfigurationDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DscConfigurationDeleteOutput>;

// The operation
/**
 * Delete the dsc configuration identified by configuration name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param configurationName - The configuration name.
 */
export const DscConfigurationDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DscConfigurationDeleteInput,
    outputSchema: DscConfigurationDeleteOutput,
  }),
);
// Input Schema
export interface DscConfigurationGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  configurationName: string;
}
export const DscConfigurationGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscConfigurationGetInput>;

// Output Schema
export interface DscConfigurationGetOutput {
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
export const DscConfigurationGetOutput =
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
  }) as unknown as Schema.Codec<DscConfigurationGetOutput>;

// The operation
/**
 * Retrieve the configuration identified by configuration name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param configurationName - The configuration name.
 */
export const DscConfigurationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DscConfigurationGetInput,
  outputSchema: DscConfigurationGetOutput,
}));
// Input Schema
export interface DscConfigurationGetContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  configurationName: string;
}
export const DscConfigurationGetContentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}/content",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscConfigurationGetContentInput>;

// Output Schema
export type DscConfigurationGetContentOutput = string;
export const DscConfigurationGetContentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String as unknown as Schema.Codec<DscConfigurationGetContentOutput>;

// The operation
/**
 * Retrieve the configuration script identified by configuration name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param configurationName - The configuration name.
 */
export const DscConfigurationGetContent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DscConfigurationGetContentInput,
    outputSchema: DscConfigurationGetContentOutput,
  }),
);
// Input Schema
export interface DscConfigurationListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
  $skip?: number;
  $top?: number;
  $inlinecount?: string;
}
export const DscConfigurationListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skip: Schema.optional(Schema.Number),
    $top: Schema.optional(Schema.Number),
    $inlinecount: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscConfigurationListByAutomationAccountInput>;

// Output Schema
export interface DscConfigurationListByAutomationAccountOutput {
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
  totalCount?: number;
}
export const DscConfigurationListByAutomationAccountOutput =
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
    totalCount: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<DscConfigurationListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of configurations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param $filter - The filter to apply on the operation.
 * @param $skip - The number of rows to skip.
 * @param $top - The number of rows to take.
 * @param $inlinecount - Return total rows.
 */
export const DscConfigurationListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DscConfigurationListByAutomationAccountInput,
    outputSchema: DscConfigurationListByAutomationAccountOutput,
  }));
// Input Schema
export interface DscConfigurationUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  configurationName: string;
  properties?: {
    logVerbose?: boolean;
    logProgress?: boolean;
    source: {
      hash?: { algorithm: string; value: string };
      type?: "embeddedContent" | "uri";
      value?: string;
      version?: string;
    };
    parameters?: Record<
      string,
      {
        type?: string;
        isMandatory?: boolean;
        position?: number;
        defaultValue?: string;
      }
    >;
    description?: string;
  };
  name?: string;
  tags?: Record<string, string>;
}
export const DscConfigurationUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        logVerbose: Schema.optional(Schema.Boolean),
        logProgress: Schema.optional(Schema.Boolean),
        source: Schema.Struct({
          hash: Schema.optional(
            Schema.Struct({
              algorithm: Schema.String,
              value: Schema.String,
            }),
          ),
          type: Schema.optional(Schema.Literals(["embeddedContent", "uri"])),
          value: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
        }),
        parameters: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              type: Schema.optional(Schema.String),
              isMandatory: Schema.optional(Schema.Boolean),
              position: Schema.optional(Schema.Number),
              defaultValue: Schema.optional(Schema.String),
            }),
          ),
        ),
        description: Schema.optional(Schema.String),
      }),
    ),
    name: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscConfigurationUpdateInput>;

// Output Schema
export interface DscConfigurationUpdateOutput {
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
export const DscConfigurationUpdateOutput =
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
  }) as unknown as Schema.Codec<DscConfigurationUpdateOutput>;

// The operation
/**
 * Create the configuration identified by configuration name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param configurationName - The configuration name.
 */
export const DscConfigurationUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DscConfigurationUpdateInput,
    outputSchema: DscConfigurationUpdateOutput,
  }),
);
// Input Schema
export interface DscNodeConfigurationCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  nodeConfigurationName: string;
  properties?: {
    source: {
      hash?: { algorithm: string; value: string };
      type?: "embeddedContent" | "uri";
      value?: string;
      version?: string;
    };
    configuration: { name?: string };
    incrementNodeConfigurationBuild?: boolean;
  };
  name?: string;
  tags?: Record<string, string>;
}
export const DscNodeConfigurationCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    nodeConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        source: Schema.Struct({
          hash: Schema.optional(
            Schema.Struct({
              algorithm: Schema.String,
              value: Schema.String,
            }),
          ),
          type: Schema.optional(Schema.Literals(["embeddedContent", "uri"])),
          value: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
        }),
        configuration: Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
        incrementNodeConfigurationBuild: Schema.optional(Schema.Boolean),
      }),
    ),
    name: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodeConfigurations/{nodeConfigurationName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscNodeConfigurationCreateOrUpdateInput>;

// Output Schema
export type DscNodeConfigurationCreateOrUpdateOutput = void;
export const DscNodeConfigurationCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DscNodeConfigurationCreateOrUpdateOutput>;

// The operation
/**
 * Create the node configuration identified by node configuration name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param nodeConfigurationName - The Dsc node configuration name.
 */
export const DscNodeConfigurationCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DscNodeConfigurationCreateOrUpdateInput,
    outputSchema: DscNodeConfigurationCreateOrUpdateOutput,
  }));
// Input Schema
export interface DscNodeConfigurationDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  nodeConfigurationName: string;
}
export const DscNodeConfigurationDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    nodeConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodeConfigurations/{nodeConfigurationName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscNodeConfigurationDeleteInput>;

// Output Schema
export type DscNodeConfigurationDeleteOutput = void;
export const DscNodeConfigurationDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DscNodeConfigurationDeleteOutput>;

// The operation
/**
 * Delete the Dsc node configurations by node configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param nodeConfigurationName - The Dsc node configuration name.
 */
export const DscNodeConfigurationDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DscNodeConfigurationDeleteInput,
    outputSchema: DscNodeConfigurationDeleteOutput,
  }),
);
// Input Schema
export interface DscNodeConfigurationGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  nodeConfigurationName: string;
}
export const DscNodeConfigurationGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    nodeConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodeConfigurations/{nodeConfigurationName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscNodeConfigurationGetInput>;

// Output Schema
export interface DscNodeConfigurationGetOutput {
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
export const DscNodeConfigurationGetOutput =
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
  }) as unknown as Schema.Codec<DscNodeConfigurationGetOutput>;

// The operation
/**
 * Retrieve the Dsc node configurations by node configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param nodeConfigurationName - The Dsc node configuration name.
 */
export const DscNodeConfigurationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DscNodeConfigurationGetInput,
    outputSchema: DscNodeConfigurationGetOutput,
  }),
);
// Input Schema
export interface DscNodeConfigurationListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
  $skip?: number;
  $top?: number;
  $inlinecount?: string;
}
export const DscNodeConfigurationListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skip: Schema.optional(Schema.Number),
    $top: Schema.optional(Schema.Number),
    $inlinecount: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodeConfigurations",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscNodeConfigurationListByAutomationAccountInput>;

// Output Schema
export interface DscNodeConfigurationListByAutomationAccountOutput {
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
  totalCount?: number;
}
export const DscNodeConfigurationListByAutomationAccountOutput =
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
    totalCount: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<DscNodeConfigurationListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of dsc node configurations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param $filter - The filter to apply on the operation.
 * @param $skip - The number of rows to skip.
 * @param $top - The number of rows to take.
 * @param $inlinecount - Return total rows.
 */
export const DscNodeConfigurationListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DscNodeConfigurationListByAutomationAccountInput,
    outputSchema: DscNodeConfigurationListByAutomationAccountOutput,
  }));
// Input Schema
export interface DscNodeDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  nodeId: string;
}
export const DscNodeDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  nodeId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<DscNodeDeleteInput>;

// Output Schema
export type DscNodeDeleteOutput = void;
export const DscNodeDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DscNodeDeleteOutput>;

// The operation
/**
 * Delete the dsc node identified by node id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param nodeId - The node id.
 */
export const DscNodeDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DscNodeDeleteInput,
  outputSchema: DscNodeDeleteOutput,
}));
// Input Schema
export interface DscNodeGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  nodeId: string;
}
export const DscNodeGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  nodeId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<DscNodeGetInput>;

// Output Schema
export interface DscNodeGetOutput {
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
export const DscNodeGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DscNodeGetOutput>;

// The operation
/**
 * Retrieve the dsc node identified by node id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param nodeId - The node id.
 */
export const DscNodeGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DscNodeGetInput,
  outputSchema: DscNodeGetOutput,
}));
// Input Schema
export interface DscNodeListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
  $skip?: number;
  $top?: number;
  $inlinecount?: string;
}
export const DscNodeListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skip: Schema.optional(Schema.Number),
    $top: Schema.optional(Schema.Number),
    $inlinecount: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<DscNodeListByAutomationAccountInput>;

// Output Schema
export interface DscNodeListByAutomationAccountOutput {
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
  totalCount?: number;
}
export const DscNodeListByAutomationAccountOutput =
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
    totalCount: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<DscNodeListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of dsc nodes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param $filter - The filter to apply on the operation.
 * @param $skip - The number of rows to skip.
 * @param $top - The number of rows to take.
 * @param $inlinecount - Return total rows.
 */
export const DscNodeListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DscNodeListByAutomationAccountInput,
    outputSchema: DscNodeListByAutomationAccountOutput,
  }));
// Input Schema
export interface DscNodeUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  nodeId: string;
  properties?: { nodeConfiguration?: { name?: string } };
}
export const DscNodeUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  nodeId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      nodeConfiguration: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<DscNodeUpdateInput>;

// Output Schema
export interface DscNodeUpdateOutput {
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
export const DscNodeUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DscNodeUpdateOutput>;

// The operation
/**
 * Update the dsc node.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param nodeId - The node id.
 */
export const DscNodeUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DscNodeUpdateInput,
  outputSchema: DscNodeUpdateOutput,
}));
// Input Schema
export interface FieldsListByTypeInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  moduleName: string;
  typeName: string;
}
export const FieldsListByTypeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  moduleName: Schema.String.pipe(T.PathParam()),
  typeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/types/{typeName}/fields",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<FieldsListByTypeInput>;

// Output Schema
export interface FieldsListByTypeOutput {
  value?: { name?: string; type?: string }[];
  nextLink?: string;
}
export const FieldsListByTypeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<FieldsListByTypeOutput>;

// The operation
/**
 * Retrieve a list of fields of a given type identified by module name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param moduleName - The module name.
 * @param typeName - The name of type.
 */
export const FieldsListByType = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FieldsListByTypeInput,
  outputSchema: FieldsListByTypeOutput,
}));
// Input Schema
export interface HybridRunbookWorkerGroupCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  hybridRunbookWorkerGroupName: string;
  properties?: { credential?: { name?: string } };
  name?: string;
}
export const HybridRunbookWorkerGroupCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        credential: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkerGroupCreateInput>;

// Output Schema
export interface HybridRunbookWorkerGroupCreateOutput {
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
export const HybridRunbookWorkerGroupCreateOutput =
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
  }) as unknown as Schema.Codec<HybridRunbookWorkerGroupCreateOutput>;

// The operation
/**
 * Create a hybrid runbook worker group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param hybridRunbookWorkerGroupName - The hybrid runbook worker group name
 */
export const HybridRunbookWorkerGroupCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HybridRunbookWorkerGroupCreateInput,
    outputSchema: HybridRunbookWorkerGroupCreateOutput,
  }));
// Input Schema
export interface HybridRunbookWorkerGroupDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  hybridRunbookWorkerGroupName: string;
}
export const HybridRunbookWorkerGroupDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkerGroupDeleteInput>;

// Output Schema
export type HybridRunbookWorkerGroupDeleteOutput = void;
export const HybridRunbookWorkerGroupDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HybridRunbookWorkerGroupDeleteOutput>;

// The operation
/**
 * Delete a hybrid runbook worker group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param hybridRunbookWorkerGroupName - The hybrid runbook worker group name
 */
export const HybridRunbookWorkerGroupDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HybridRunbookWorkerGroupDeleteInput,
    outputSchema: HybridRunbookWorkerGroupDeleteOutput,
  }));
// Input Schema
export interface HybridRunbookWorkerGroupGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  hybridRunbookWorkerGroupName: string;
}
export const HybridRunbookWorkerGroupGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkerGroupGetInput>;

// Output Schema
export interface HybridRunbookWorkerGroupGetOutput {
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
export const HybridRunbookWorkerGroupGetOutput =
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
  }) as unknown as Schema.Codec<HybridRunbookWorkerGroupGetOutput>;

// The operation
/**
 * Retrieve a hybrid runbook worker group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param hybridRunbookWorkerGroupName - The hybrid runbook worker group name
 */
export const HybridRunbookWorkerGroupGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridRunbookWorkerGroupGetInput,
    outputSchema: HybridRunbookWorkerGroupGetOutput,
  }),
);
// Input Schema
export interface HybridRunbookWorkerGroupListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
}
export const HybridRunbookWorkerGroupListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkerGroupListByAutomationAccountInput>;

// Output Schema
export interface HybridRunbookWorkerGroupListByAutomationAccountOutput {
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
export const HybridRunbookWorkerGroupListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<HybridRunbookWorkerGroupListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of hybrid runbook worker groups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param $filter - The filter to apply on the operation.
 */
export const HybridRunbookWorkerGroupListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HybridRunbookWorkerGroupListByAutomationAccountInput,
    outputSchema: HybridRunbookWorkerGroupListByAutomationAccountOutput,
  }));
// Input Schema
export interface HybridRunbookWorkerGroupUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  hybridRunbookWorkerGroupName: string;
  properties?: { credential?: { name?: string } };
  name?: string;
}
export const HybridRunbookWorkerGroupUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        credential: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkerGroupUpdateInput>;

// Output Schema
export interface HybridRunbookWorkerGroupUpdateOutput {
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
export const HybridRunbookWorkerGroupUpdateOutput =
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
  }) as unknown as Schema.Codec<HybridRunbookWorkerGroupUpdateOutput>;

// The operation
/**
 * Update a hybrid runbook worker group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param hybridRunbookWorkerGroupName - The hybrid runbook worker group name
 */
export const HybridRunbookWorkerGroupUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HybridRunbookWorkerGroupUpdateInput,
    outputSchema: HybridRunbookWorkerGroupUpdateOutput,
  }));
// Input Schema
export interface HybridRunbookWorkersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  hybridRunbookWorkerGroupName: string;
  hybridRunbookWorkerId: string;
  properties?: { vmResourceId?: string };
  name?: string;
}
export const HybridRunbookWorkersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerGroupName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        vmResourceId: Schema.optional(Schema.String),
      }),
    ),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers/{hybridRunbookWorkerId}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkersCreateInput>;

// Output Schema
export interface HybridRunbookWorkersCreateOutput {
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
export const HybridRunbookWorkersCreateOutput =
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
  }) as unknown as Schema.Codec<HybridRunbookWorkersCreateOutput>;

// The operation
/**
 * Create a hybrid runbook worker.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param hybridRunbookWorkerGroupName - The hybrid runbook worker group name
 * @param hybridRunbookWorkerId - The hybrid runbook worker id
 */
export const HybridRunbookWorkersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridRunbookWorkersCreateInput,
    outputSchema: HybridRunbookWorkersCreateOutput,
  }),
);
// Input Schema
export interface HybridRunbookWorkersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  hybridRunbookWorkerGroupName: string;
  hybridRunbookWorkerId: string;
}
export const HybridRunbookWorkersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerGroupName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers/{hybridRunbookWorkerId}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkersDeleteInput>;

// Output Schema
export type HybridRunbookWorkersDeleteOutput = void;
export const HybridRunbookWorkersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HybridRunbookWorkersDeleteOutput>;

// The operation
/**
 * Delete a hybrid runbook worker.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param hybridRunbookWorkerGroupName - The hybrid runbook worker group name
 * @param hybridRunbookWorkerId - The hybrid runbook worker id
 */
export const HybridRunbookWorkersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridRunbookWorkersDeleteInput,
    outputSchema: HybridRunbookWorkersDeleteOutput,
  }),
);
// Input Schema
export interface HybridRunbookWorkersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  hybridRunbookWorkerGroupName: string;
  hybridRunbookWorkerId: string;
}
export const HybridRunbookWorkersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerGroupName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers/{hybridRunbookWorkerId}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkersGetInput>;

// Output Schema
export interface HybridRunbookWorkersGetOutput {
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
export const HybridRunbookWorkersGetOutput =
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
  }) as unknown as Schema.Codec<HybridRunbookWorkersGetOutput>;

// The operation
/**
 * Retrieve a hybrid runbook worker.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param hybridRunbookWorkerGroupName - The hybrid runbook worker group name
 * @param hybridRunbookWorkerId - The hybrid runbook worker id
 */
export const HybridRunbookWorkersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridRunbookWorkersGetInput,
    outputSchema: HybridRunbookWorkersGetOutput,
  }),
);
// Input Schema
export interface HybridRunbookWorkersListByHybridRunbookWorkerGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  hybridRunbookWorkerGroupName: string;
  $filter?: string;
}
export const HybridRunbookWorkersListByHybridRunbookWorkerGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkersListByHybridRunbookWorkerGroupInput>;

// Output Schema
export interface HybridRunbookWorkersListByHybridRunbookWorkerGroupOutput {
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
export const HybridRunbookWorkersListByHybridRunbookWorkerGroupOutput =
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
  }) as unknown as Schema.Codec<HybridRunbookWorkersListByHybridRunbookWorkerGroupOutput>;

// The operation
/**
 * Retrieve a list of hybrid runbook workers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param hybridRunbookWorkerGroupName - The hybrid runbook worker group name
 * @param $filter - The filter to apply on the operation.
 */
export const HybridRunbookWorkersListByHybridRunbookWorkerGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HybridRunbookWorkersListByHybridRunbookWorkerGroupInput,
    outputSchema: HybridRunbookWorkersListByHybridRunbookWorkerGroupOutput,
  }));
// Input Schema
export interface HybridRunbookWorkersMoveInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  hybridRunbookWorkerGroupName: string;
  hybridRunbookWorkerId: string;
}
export const HybridRunbookWorkersMoveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerGroupName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers/{hybridRunbookWorkerId}/move",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkersMoveInput>;

// Output Schema
export type HybridRunbookWorkersMoveOutput = void;
export const HybridRunbookWorkersMoveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HybridRunbookWorkersMoveOutput>;

// The operation
/**
 * Move a hybrid worker to a different group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param hybridRunbookWorkerGroupName - The hybrid runbook worker group name
 * @param hybridRunbookWorkerId - The hybrid runbook worker id
 */
export const HybridRunbookWorkersMove = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridRunbookWorkersMoveInput,
    outputSchema: HybridRunbookWorkersMoveOutput,
  }),
);
// Input Schema
export interface HybridRunbookWorkersPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  hybridRunbookWorkerGroupName: string;
  hybridRunbookWorkerId: string;
  properties?: { vmResourceId?: string };
  name?: string;
}
export const HybridRunbookWorkersPatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerGroupName: Schema.String.pipe(T.PathParam()),
    hybridRunbookWorkerId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        vmResourceId: Schema.optional(Schema.String),
      }),
    ),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/hybridRunbookWorkerGroups/{hybridRunbookWorkerGroupName}/hybridRunbookWorkers/{hybridRunbookWorkerId}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<HybridRunbookWorkersPatchInput>;

// Output Schema
export interface HybridRunbookWorkersPatchOutput {
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
export const HybridRunbookWorkersPatchOutput =
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
  }) as unknown as Schema.Codec<HybridRunbookWorkersPatchOutput>;

// The operation
/**
 * Update a hybrid runbook worker.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param hybridRunbookWorkerGroupName - The hybrid runbook worker group name
 * @param hybridRunbookWorkerId - The hybrid runbook worker id
 */
export const HybridRunbookWorkersPatch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridRunbookWorkersPatchInput,
    outputSchema: HybridRunbookWorkersPatchOutput,
  }),
);
// Input Schema
export interface JobCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobName: string;
  properties: {
    runbook?: { name?: string };
    parameters?: Record<string, string>;
    runOn?: string;
  };
}
export const JobCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    runbook: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    runOn: Schema.optional(Schema.String),
  }),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<JobCreateInput>;

// Output Schema
export interface JobCreateOutput {
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
export const JobCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobCreateOutput>;

// The operation
/**
 * Create a job of the runbook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobName - The job name.
 * @param clientRequestId - Identifies this specific client request.
 */
export const JobCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobCreateInput,
  outputSchema: JobCreateOutput,
}));
// Input Schema
export interface JobGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobName: string;
}
export const JobGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<JobGetInput>;

// Output Schema
export interface JobGetOutput {
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
export const JobGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobGetOutput>;

// The operation
/**
 * Retrieve the job identified by job name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobName - The job name.
 * @param clientRequestId - Identifies this specific client request.
 */
export const JobGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobGetInput,
  outputSchema: JobGetOutput,
}));
// Input Schema
export interface JobGetRunbookContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobName: string;
}
export const JobGetRunbookContentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/runbookContent",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<JobGetRunbookContentInput>;

// Output Schema
export type JobGetRunbookContentOutput = string;
export const JobGetRunbookContentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String as unknown as Schema.Codec<JobGetRunbookContentOutput>;

// The operation
/**
 * Retrieve the runbook content of the job identified by job name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobName - The job name.
 * @param clientRequestId - Identifies this specific client request.
 */
export const JobGetRunbookContent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JobGetRunbookContentInput,
    outputSchema: JobGetRunbookContentOutput,
  }),
);
// Input Schema
export interface JobListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
}
export const JobListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<JobListByAutomationAccountInput>;

// Output Schema
export interface JobListByAutomationAccountOutput {
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
export const JobListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<JobListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of jobs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param $filter - The filter to apply on the operation.
 * @param clientRequestId - Identifies this specific client request.
 */
export const JobListByAutomationAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JobListByAutomationAccountInput,
    outputSchema: JobListByAutomationAccountOutput,
  }),
);
// Input Schema
export interface JobResumeInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobName: string;
}
export const JobResumeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/resume",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<JobResumeInput>;

// Output Schema
export type JobResumeOutput = void;
export const JobResumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobResumeOutput>;

// The operation
/**
 * Resume the job identified by jobName.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobName - The job name.
 * @param clientRequestId - Identifies this specific client request.
 */
export const JobResume = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobResumeInput,
  outputSchema: JobResumeOutput,
}));
// Input Schema
export interface JobScheduleCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobScheduleId: string;
  properties: {
    schedule: { name?: string };
    runbook: { name?: string };
    runOn?: string;
    parameters?: Record<string, string>;
  };
}
export const JobScheduleCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    jobScheduleId: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      schedule: Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
      runbook: Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
      runOn: Schema.optional(Schema.String),
      parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules/{jobScheduleId}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<JobScheduleCreateInput>;

// Output Schema
export interface JobScheduleCreateOutput {
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
export const JobScheduleCreateOutput =
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
  }) as unknown as Schema.Codec<JobScheduleCreateOutput>;

// The operation
/**
 * Create a job schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobScheduleId - The job schedule name.
 */
export const JobScheduleCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobScheduleCreateInput,
  outputSchema: JobScheduleCreateOutput,
}));
// Input Schema
export interface JobScheduleDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobScheduleId: string;
}
export const JobScheduleDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    jobScheduleId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules/{jobScheduleId}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<JobScheduleDeleteInput>;

// Output Schema
export type JobScheduleDeleteOutput = void;
export const JobScheduleDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobScheduleDeleteOutput>;

// The operation
/**
 * Delete the job schedule identified by job schedule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobScheduleId - The job schedule name.
 */
export const JobScheduleDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobScheduleDeleteInput,
  outputSchema: JobScheduleDeleteOutput,
}));
// Input Schema
export interface JobScheduleGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobScheduleId: string;
}
export const JobScheduleGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  jobScheduleId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules/{jobScheduleId}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<JobScheduleGetInput>;

// Output Schema
export interface JobScheduleGetOutput {
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
export const JobScheduleGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobScheduleGetOutput>;

// The operation
/**
 * Retrieve the job schedule identified by job schedule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobScheduleId - The job schedule name.
 */
export const JobScheduleGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobScheduleGetInput,
  outputSchema: JobScheduleGetOutput,
}));
// Input Schema
export interface JobScheduleListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
}
export const JobScheduleListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobSchedules",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<JobScheduleListByAutomationAccountInput>;

// Output Schema
export interface JobScheduleListByAutomationAccountOutput {
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
export const JobScheduleListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<JobScheduleListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of job schedules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param $filter - The filter to apply on the operation.
 */
export const JobScheduleListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JobScheduleListByAutomationAccountInput,
    outputSchema: JobScheduleListByAutomationAccountOutput,
  }));
// Input Schema
export interface JobStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobName: string;
}
export const JobStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/stop",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<JobStopInput>;

// Output Schema
export type JobStopOutput = void;
export const JobStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobStopOutput>;

// The operation
/**
 * Stop the job identified by jobName.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobName - The job name.
 * @param clientRequestId - Identifies this specific client request.
 */
export const JobStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobStopInput,
  outputSchema: JobStopOutput,
}));
// Input Schema
export interface JobStreamGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobName: string;
  jobStreamId: string;
}
export const JobStreamGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  jobStreamId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/streams/{jobStreamId}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<JobStreamGetInput>;

// Output Schema
export interface JobStreamGetOutput {
  id?: string;
  properties?: {
    jobStreamId?: string;
    time?: string;
    streamType?:
      | "Progress"
      | "Output"
      | "Warning"
      | "Error"
      | "Debug"
      | "Verbose"
      | "Any";
    streamText?: string;
    summary?: string | null;
    value?: Record<string, unknown>;
  };
}
export const JobStreamGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      jobStreamId: Schema.optional(Schema.String),
      time: Schema.optional(Schema.String),
      streamType: Schema.optional(
        Schema.Literals([
          "Progress",
          "Output",
          "Warning",
          "Error",
          "Debug",
          "Verbose",
          "Any",
        ]),
      ),
      streamText: Schema.optional(Schema.String),
      summary: Schema.optional(Schema.NullOr(Schema.String)),
      value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
  ),
}) as unknown as Schema.Codec<JobStreamGetOutput>;

// The operation
/**
 * Retrieve the job stream identified by job stream id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobName - The job name.
 * @param jobStreamId - The job stream id.
 * @param clientRequestId - Identifies this specific client request.
 */
export const JobStreamGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobStreamGetInput,
  outputSchema: JobStreamGetOutput,
}));
// Input Schema
export interface JobStreamListByJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobName: string;
  $filter?: string;
}
export const JobStreamListByJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/streams",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<JobStreamListByJobInput>;

// Output Schema
export interface JobStreamListByJobOutput {
  value: {
    id?: string;
    properties?: {
      jobStreamId?: string;
      time?: string;
      streamType?:
        | "Progress"
        | "Output"
        | "Warning"
        | "Error"
        | "Debug"
        | "Verbose"
        | "Any";
      streamText?: string;
      summary?: string | null;
      value?: Record<string, unknown>;
    };
  }[];
  nextLink?: string;
}
export const JobStreamListByJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            jobStreamId: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
            streamType: Schema.optional(
              Schema.Literals([
                "Progress",
                "Output",
                "Warning",
                "Error",
                "Debug",
                "Verbose",
                "Any",
              ]),
            ),
            streamText: Schema.optional(Schema.String),
            summary: Schema.optional(Schema.NullOr(Schema.String)),
            value: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<JobStreamListByJobOutput>;

// The operation
/**
 * Retrieve a list of jobs streams identified by job name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobName - The job name.
 * @param $filter - The filter to apply on the operation.
 * @param clientRequestId - Identifies this specific client request.
 */
export const JobStreamListByJob = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobStreamListByJobInput,
  outputSchema: JobStreamListByJobOutput,
}));
// Input Schema
export interface JobSuspendInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  jobName: string;
}
export const JobSuspendInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/suspend",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<JobSuspendInput>;

// Output Schema
export type JobSuspendOutput = void;
export const JobSuspendOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobSuspendOutput>;

// The operation
/**
 * Suspend the job identified by job name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param jobName - The job name.
 * @param clientRequestId - Identifies this specific client request.
 */
export const JobSuspend = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobSuspendInput,
  outputSchema: JobSuspendOutput,
}));
// Input Schema
export interface KeysListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const KeysListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/listKeys",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<KeysListByAutomationAccountInput>;

// Output Schema
export interface KeysListByAutomationAccountOutput {
  keys?: {
    KeyName?: "Primary" | "Secondary";
    Permissions?: "Read" | "Full";
    Value?: string;
  }[];
}
export const KeysListByAutomationAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.optional(
      Schema.Array(
        Schema.Struct({
          KeyName: Schema.optional(Schema.Literals(["Primary", "Secondary"])),
          Permissions: Schema.optional(Schema.Literals(["Read", "Full"])),
          Value: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<KeysListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve the automation keys for an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const KeysListByAutomationAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: KeysListByAutomationAccountInput,
    outputSchema: KeysListByAutomationAccountOutput,
  }),
);
// Input Schema
export interface LinkedWorkspaceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const LinkedWorkspaceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/linkedWorkspace",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<LinkedWorkspaceGetInput>;

// Output Schema
export interface LinkedWorkspaceGetOutput {
  id?: string;
}
export const LinkedWorkspaceGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LinkedWorkspaceGetOutput>;

// The operation
/**
 * Retrieve the linked workspace for the account id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const LinkedWorkspaceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkedWorkspaceGetInput,
  outputSchema: LinkedWorkspaceGetOutput,
}));
// Input Schema
export interface ModuleCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  moduleName: string;
  properties: {
    contentLink: {
      uri?: string;
      contentHash?: { algorithm: string; value: string };
      version?: string;
    };
  };
  name?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ModuleCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    moduleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      contentLink: Schema.Struct({
        uri: Schema.optional(Schema.String),
        contentHash: Schema.optional(
          Schema.Struct({
            algorithm: Schema.String,
            value: Schema.String,
          }),
        ),
        version: Schema.optional(Schema.String),
      }),
    }),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ModuleCreateOrUpdateInput>;

// Output Schema
export interface ModuleCreateOrUpdateOutput {
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
export const ModuleCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ModuleCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update the module identified by module name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param moduleName - The module name.
 */
export const ModuleCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ModuleCreateOrUpdateInput,
    outputSchema: ModuleCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ModuleDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  moduleName: string;
}
export const ModuleDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  moduleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ModuleDeleteInput>;

// Output Schema
export type ModuleDeleteOutput = void;
export const ModuleDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ModuleDeleteOutput>;

// The operation
/**
 * Delete the module by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param moduleName - The module name.
 */
export const ModuleDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModuleDeleteInput,
  outputSchema: ModuleDeleteOutput,
}));
// Input Schema
export interface ModuleGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  moduleName: string;
}
export const ModuleGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  moduleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ModuleGetInput>;

// Output Schema
export interface ModuleGetOutput {
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
export const ModuleGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ModuleGetOutput>;

// The operation
/**
 * Retrieve the module identified by module name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param moduleName - The module name.
 */
export const ModuleGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModuleGetInput,
  outputSchema: ModuleGetOutput,
}));
// Input Schema
export interface ModuleListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const ModuleListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ModuleListByAutomationAccountInput>;

// Output Schema
export interface ModuleListByAutomationAccountOutput {
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
export const ModuleListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<ModuleListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of modules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const ModuleListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ModuleListByAutomationAccountInput,
    outputSchema: ModuleListByAutomationAccountOutput,
  }));
// Input Schema
export interface ModuleUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  moduleName: string;
  properties?: {
    contentLink?: {
      uri?: string;
      contentHash?: { algorithm: string; value: string };
      version?: string;
    };
  };
  name?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const ModuleUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  moduleName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      contentLink: Schema.optional(
        Schema.Struct({
          uri: Schema.optional(Schema.String),
          contentHash: Schema.optional(
            Schema.Struct({
              algorithm: Schema.String,
              value: Schema.String,
            }),
          ),
          version: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ModuleUpdateInput>;

// Output Schema
export interface ModuleUpdateOutput {
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
export const ModuleUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ModuleUpdateOutput>;

// The operation
/**
 * Update the module identified by module name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param moduleName - The module name.
 */
export const ModuleUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModuleUpdateInput,
  outputSchema: ModuleUpdateOutput,
}));
// Input Schema
export interface NodeCountInformationGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  countType: "status" | "nodeconfiguration";
}
export const NodeCountInformationGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    countType: Schema.Literals(["status", "nodeconfiguration"]).pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodecounts/{countType}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<NodeCountInformationGetInput>;

// Output Schema
export interface NodeCountInformationGetOutput {
  value?: { name?: string; properties?: { count?: number } }[];
  totalCount?: number;
}
export const NodeCountInformationGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
    totalCount: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<NodeCountInformationGetOutput>;

// The operation
/**
 * Retrieve counts for Dsc Nodes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param countType - The type of counts to retrieve
 */
export const NodeCountInformationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NodeCountInformationGetInput,
    outputSchema: NodeCountInformationGetOutput,
  }),
);
// Input Schema
export interface NodeReportsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  nodeId: string;
  reportId: string;
}
export const NodeReportsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  nodeId: Schema.String.pipe(T.PathParam()),
  reportId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports/{reportId}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<NodeReportsGetInput>;

// Output Schema
export interface NodeReportsGetOutput {
  endTime?: string | null;
  lastModifiedTime?: string;
  startTime?: string | null;
  type?: string;
  reportId?: string;
  status?: string;
  refreshMode?: string;
  rebootRequested?: string;
  reportFormatVersion?: string;
  configurationVersion?: string;
  id?: string;
  errors?: {
    errorSource?: string;
    resourceId?: string;
    errorCode?: string;
    errorMessage?: string;
    locale?: string;
    errorDetails?: string;
  }[];
  resources?: {
    resourceId?: string;
    sourceInfo?: string;
    dependsOn?: { resourceId?: string }[];
    moduleName?: string;
    moduleVersion?: string;
    resourceName?: string;
    error?: string;
    status?: string;
    durationInSeconds?: number;
    startDate?: string;
  }[];
  metaConfiguration?: {
    configurationModeFrequencyMins?: number;
    rebootNodeIfNeeded?: boolean;
    configurationMode?: string;
    actionAfterReboot?: string;
    certificateId?: string;
    refreshFrequencyMins?: number;
    allowModuleOverwrite?: boolean;
  };
  hostName?: string;
  iPV4Addresses?: string[];
  iPV6Addresses?: string[];
  numberOfResources?: number;
  rawErrors?: string;
}
export const NodeReportsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endTime: Schema.optional(Schema.NullOr(Schema.String)),
  lastModifiedTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.NullOr(Schema.String)),
  type: Schema.optional(Schema.String),
  reportId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  refreshMode: Schema.optional(Schema.String),
  rebootRequested: Schema.optional(Schema.String),
  reportFormatVersion: Schema.optional(Schema.String),
  configurationVersion: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  errors: Schema.optional(
    Schema.Array(
      Schema.Struct({
        errorSource: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        errorCode: Schema.optional(Schema.String),
        errorMessage: Schema.optional(Schema.String),
        locale: Schema.optional(Schema.String),
        errorDetails: Schema.optional(Schema.String),
      }),
    ),
  ),
  resources: Schema.optional(
    Schema.Array(
      Schema.Struct({
        resourceId: Schema.optional(Schema.String),
        sourceInfo: Schema.optional(Schema.String),
        dependsOn: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.optional(Schema.String),
            }),
          ),
        ),
        moduleName: Schema.optional(Schema.String),
        moduleVersion: Schema.optional(Schema.String),
        resourceName: Schema.optional(Schema.String),
        error: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        durationInSeconds: Schema.optional(Schema.Number),
        startDate: Schema.optional(Schema.String),
      }),
    ),
  ),
  metaConfiguration: Schema.optional(
    Schema.Struct({
      configurationModeFrequencyMins: Schema.optional(Schema.Number),
      rebootNodeIfNeeded: Schema.optional(Schema.Boolean),
      configurationMode: Schema.optional(Schema.String),
      actionAfterReboot: Schema.optional(Schema.String),
      certificateId: Schema.optional(Schema.String),
      refreshFrequencyMins: Schema.optional(Schema.Number),
      allowModuleOverwrite: Schema.optional(Schema.Boolean),
    }),
  ),
  hostName: Schema.optional(Schema.String),
  iPV4Addresses: Schema.optional(Schema.Array(Schema.String)),
  iPV6Addresses: Schema.optional(Schema.Array(Schema.String)),
  numberOfResources: Schema.optional(Schema.Number),
  rawErrors: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<NodeReportsGetOutput>;

// The operation
/**
 * Retrieve the Dsc node report data by node id and report id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param nodeId - The node id.
 * @param reportId - The report id.
 */
export const NodeReportsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeReportsGetInput,
  outputSchema: NodeReportsGetOutput,
}));
// Input Schema
export interface NodeReportsGetContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  nodeId: string;
  reportId: string;
}
export const NodeReportsGetContentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    nodeId: Schema.String.pipe(T.PathParam()),
    reportId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports/{reportId}/content",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<NodeReportsGetContentInput>;

// Output Schema
export type NodeReportsGetContentOutput = string;
export const NodeReportsGetContentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String as unknown as Schema.Codec<NodeReportsGetContentOutput>;

// The operation
/**
 * Retrieve the Dsc node reports by node id and report id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param nodeId - The node id.
 * @param reportId - The report id.
 */
export const NodeReportsGetContent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NodeReportsGetContentInput,
    outputSchema: NodeReportsGetContentOutput,
  }),
);
// Input Schema
export interface NodeReportsListByNodeInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  nodeId: string;
  $filter?: string;
}
export const NodeReportsListByNodeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    nodeId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<NodeReportsListByNodeInput>;

// Output Schema
export interface NodeReportsListByNodeOutput {
  value: {
    endTime?: string | null;
    lastModifiedTime?: string;
    startTime?: string | null;
    type?: string;
    reportId?: string;
    status?: string;
    refreshMode?: string;
    rebootRequested?: string;
    reportFormatVersion?: string;
    configurationVersion?: string;
    id?: string;
    errors?: {
      errorSource?: string;
      resourceId?: string;
      errorCode?: string;
      errorMessage?: string;
      locale?: string;
      errorDetails?: string;
    }[];
    resources?: {
      resourceId?: string;
      sourceInfo?: string;
      dependsOn?: { resourceId?: string }[];
      moduleName?: string;
      moduleVersion?: string;
      resourceName?: string;
      error?: string;
      status?: string;
      durationInSeconds?: number;
      startDate?: string;
    }[];
    metaConfiguration?: {
      configurationModeFrequencyMins?: number;
      rebootNodeIfNeeded?: boolean;
      configurationMode?: string;
      actionAfterReboot?: string;
      certificateId?: string;
      refreshFrequencyMins?: number;
      allowModuleOverwrite?: boolean;
    };
    hostName?: string;
    iPV4Addresses?: string[];
    iPV6Addresses?: string[];
    numberOfResources?: number;
    rawErrors?: string;
  }[];
  nextLink?: string;
}
export const NodeReportsListByNodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedTime: Schema.optional(Schema.String),
        startTime: Schema.optional(Schema.NullOr(Schema.String)),
        type: Schema.optional(Schema.String),
        reportId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        refreshMode: Schema.optional(Schema.String),
        rebootRequested: Schema.optional(Schema.String),
        reportFormatVersion: Schema.optional(Schema.String),
        configurationVersion: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        errors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              errorSource: Schema.optional(Schema.String),
              resourceId: Schema.optional(Schema.String),
              errorCode: Schema.optional(Schema.String),
              errorMessage: Schema.optional(Schema.String),
              locale: Schema.optional(Schema.String),
              errorDetails: Schema.optional(Schema.String),
            }),
          ),
        ),
        resources: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resourceId: Schema.optional(Schema.String),
              sourceInfo: Schema.optional(Schema.String),
              dependsOn: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    resourceId: Schema.optional(Schema.String),
                  }),
                ),
              ),
              moduleName: Schema.optional(Schema.String),
              moduleVersion: Schema.optional(Schema.String),
              resourceName: Schema.optional(Schema.String),
              error: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              durationInSeconds: Schema.optional(Schema.Number),
              startDate: Schema.optional(Schema.String),
            }),
          ),
        ),
        metaConfiguration: Schema.optional(
          Schema.Struct({
            configurationModeFrequencyMins: Schema.optional(Schema.Number),
            rebootNodeIfNeeded: Schema.optional(Schema.Boolean),
            configurationMode: Schema.optional(Schema.String),
            actionAfterReboot: Schema.optional(Schema.String),
            certificateId: Schema.optional(Schema.String),
            refreshFrequencyMins: Schema.optional(Schema.Number),
            allowModuleOverwrite: Schema.optional(Schema.Boolean),
          }),
        ),
        hostName: Schema.optional(Schema.String),
        iPV4Addresses: Schema.optional(Schema.Array(Schema.String)),
        iPV6Addresses: Schema.optional(Schema.Array(Schema.String)),
        numberOfResources: Schema.optional(Schema.Number),
        rawErrors: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NodeReportsListByNodeOutput>;

// The operation
/**
 * Retrieve the Dsc node report list by node id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param nodeId - The node id.
 * @param $filter - The filter to apply on the operation.
 */
export const NodeReportsListByNode = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NodeReportsListByNodeInput,
    outputSchema: NodeReportsListByNodeOutput,
  }),
);
// Input Schema
export interface ObjectDataTypesListFieldsByModuleAndTypeInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  moduleName: string;
  typeName: string;
}
export const ObjectDataTypesListFieldsByModuleAndTypeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    moduleName: Schema.String.pipe(T.PathParam()),
    typeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/objectDataTypes/{typeName}/fields",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ObjectDataTypesListFieldsByModuleAndTypeInput>;

// Output Schema
export interface ObjectDataTypesListFieldsByModuleAndTypeOutput {
  value?: { name?: string; type?: string }[];
  nextLink?: string;
}
export const ObjectDataTypesListFieldsByModuleAndTypeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ObjectDataTypesListFieldsByModuleAndTypeOutput>;

// The operation
/**
 * Retrieve a list of fields of a given type identified by module name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param moduleName - The module name.
 * @param typeName - The name of type.
 */
export const ObjectDataTypesListFieldsByModuleAndType =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ObjectDataTypesListFieldsByModuleAndTypeInput,
    outputSchema: ObjectDataTypesListFieldsByModuleAndTypeOutput,
  }));
// Input Schema
export interface ObjectDataTypesListFieldsByTypeInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  typeName: string;
}
export const ObjectDataTypesListFieldsByTypeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    typeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/objectDataTypes/{typeName}/fields",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ObjectDataTypesListFieldsByTypeInput>;

// Output Schema
export interface ObjectDataTypesListFieldsByTypeOutput {
  value?: { name?: string; type?: string }[];
  nextLink?: string;
}
export const ObjectDataTypesListFieldsByTypeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ObjectDataTypesListFieldsByTypeOutput>;

// The operation
/**
 * Retrieve a list of fields of a given type across all accessible modules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param typeName - The name of type.
 */
export const ObjectDataTypesListFieldsByType =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ObjectDataTypesListFieldsByTypeInput,
    outputSchema: ObjectDataTypesListFieldsByTypeOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Automation/operations",
    apiVersion: "2024-10-23",
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
    origin?: string;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          dimensions?: { name?: string; displayName?: string }[];
        }[];
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
                    aggregationType: Schema.optional(Schema.String),
                    dimensions: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          displayName: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
              logSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    blobDuration: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Automation REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PackageCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runtimeEnvironmentName: string;
  packageName: string;
  properties: {
    contentLink: {
      uri?: string;
      contentHash?: { algorithm: string; value: string };
      version?: string;
    };
  };
  allOf?: {
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
  };
}
export const PackageCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runtimeEnvironmentName: Schema.String.pipe(T.PathParam()),
    packageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      contentLink: Schema.Struct({
        uri: Schema.optional(Schema.String),
        contentHash: Schema.optional(
          Schema.Struct({
            algorithm: Schema.String,
            value: Schema.String,
          }),
        ),
        version: Schema.optional(Schema.String),
      }),
    }),
    allOf: Schema.optional(
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runtimeEnvironments/{runtimeEnvironmentName}/packages/{packageName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<PackageCreateOrUpdateInput>;

// Output Schema
export interface PackageCreateOrUpdateOutput {
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
export const PackageCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PackageCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the package identified by package name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runtimeEnvironmentName - The name of the Runtime Environment.
 * @param packageName - The Package name.
 */
export const PackageCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PackageCreateOrUpdateInput,
    outputSchema: PackageCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface PackageDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runtimeEnvironmentName: string;
  packageName: string;
}
export const PackageDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runtimeEnvironmentName: Schema.String.pipe(T.PathParam()),
  packageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runtimeEnvironments/{runtimeEnvironmentName}/packages/{packageName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<PackageDeleteInput>;

// Output Schema
export type PackageDeleteOutput = void;
export const PackageDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PackageDeleteOutput>;

// The operation
/**
 * Delete the package by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runtimeEnvironmentName - The name of the Runtime Environment.
 * @param packageName - The Package name.
 */
export const PackageDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PackageDeleteInput,
  outputSchema: PackageDeleteOutput,
}));
// Input Schema
export interface PackageGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runtimeEnvironmentName: string;
  packageName: string;
}
export const PackageGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runtimeEnvironmentName: Schema.String.pipe(T.PathParam()),
  packageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runtimeEnvironments/{runtimeEnvironmentName}/packages/{packageName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<PackageGetInput>;

// Output Schema
export interface PackageGetOutput {
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
export const PackageGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PackageGetOutput>;

// The operation
/**
 * Retrieve the Package identified by Package name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runtimeEnvironmentName - The name of the Runtime Environment.
 * @param packageName - The Package name.
 */
export const PackageGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PackageGetInput,
  outputSchema: PackageGetOutput,
}));
// Input Schema
export interface PackageListByRuntimeEnvironmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runtimeEnvironmentName: string;
}
export const PackageListByRuntimeEnvironmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runtimeEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runtimeEnvironments/{runtimeEnvironmentName}/packages",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<PackageListByRuntimeEnvironmentInput>;

// Output Schema
export interface PackageListByRuntimeEnvironmentOutput {
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
export const PackageListByRuntimeEnvironmentOutput =
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
  }) as unknown as Schema.Codec<PackageListByRuntimeEnvironmentOutput>;

// The operation
/**
 * Retrieve the a list of Packages
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runtimeEnvironmentName - The name of the Runtime Environment.
 */
export const PackageListByRuntimeEnvironment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PackageListByRuntimeEnvironmentInput,
    outputSchema: PackageListByRuntimeEnvironmentOutput,
  }));
// Input Schema
export interface PackageUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runtimeEnvironmentName: string;
  packageName: string;
  properties?: {
    contentLink?: {
      uri?: string;
      contentHash?: { algorithm: string; value: string };
      version?: string;
    };
  };
  allOf?: {
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
  };
}
export const PackageUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runtimeEnvironmentName: Schema.String.pipe(T.PathParam()),
  packageName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      contentLink: Schema.optional(
        Schema.Struct({
          uri: Schema.optional(Schema.String),
          contentHash: Schema.optional(
            Schema.Struct({
              algorithm: Schema.String,
              value: Schema.String,
            }),
          ),
          version: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  allOf: Schema.optional(
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runtimeEnvironments/{runtimeEnvironmentName}/packages/{packageName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<PackageUpdateInput>;

// Output Schema
export interface PackageUpdateOutput {
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
export const PackageUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PackageUpdateOutput>;

// The operation
/**
 * Update the Package identified by Package name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runtimeEnvironmentName - The name of the Runtime Environment.
 * @param packageName - The Package name.
 */
export const PackageUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PackageUpdateInput,
  outputSchema: PackageUpdateOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    groupIds?: string[];
    privateLinkServiceConnectionState?: {
      status?: string;
      description?: string;
      actionsRequired?: string;
    };
  };
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOrUpdateOutput {
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
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Approve or reject a private endpoint connection with a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection with a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-10-23",
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const PrivateEndpointConnectionsListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/privateEndpointConnections",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByAutomationAccountInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByAutomationAccountOutput {
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
export const PrivateEndpointConnectionsListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByAutomationAccountOutput>;

// The operation
/**
 * List all private endpoint connections on a Automation account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const PrivateEndpointConnectionsListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByAutomationAccountInput,
    outputSchema: PrivateEndpointConnectionsListByAutomationAccountOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesAutomationInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const PrivateLinkResourcesAutomationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/privateLinkResources",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesAutomationInput>;

// Output Schema
export interface PrivateLinkResourcesAutomationOutput {
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
export const PrivateLinkResourcesAutomationOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesAutomationOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for Automation account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const PrivateLinkResourcesAutomation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesAutomationInput,
    outputSchema: PrivateLinkResourcesAutomationOutput,
  }));
// Input Schema
export interface Python2PackageCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  packageName: string;
  properties: {
    contentLink: {
      uri?: string;
      contentHash?: { algorithm: string; value: string };
      version?: string;
    };
  };
  tags?: Record<string, string>;
}
export const Python2PackageCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    packageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      contentLink: Schema.Struct({
        uri: Schema.optional(Schema.String),
        contentHash: Schema.optional(
          Schema.Struct({
            algorithm: Schema.String,
            value: Schema.String,
          }),
        ),
        version: Schema.optional(Schema.String),
      }),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<Python2PackageCreateOrUpdateInput>;

// Output Schema
export interface Python2PackageCreateOrUpdateOutput {
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
export const Python2PackageCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<Python2PackageCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update the python 2 package identified by package name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param packageName - The python package name.
 */
export const Python2PackageCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: Python2PackageCreateOrUpdateInput,
    outputSchema: Python2PackageCreateOrUpdateOutput,
  }));
// Input Schema
export interface Python2PackageDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  packageName: string;
}
export const Python2PackageDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    packageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<Python2PackageDeleteInput>;

// Output Schema
export type Python2PackageDeleteOutput = void;
export const Python2PackageDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<Python2PackageDeleteOutput>;

// The operation
/**
 * Delete the python 2 package by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param packageName - The python package name.
 */
export const Python2PackageDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: Python2PackageDeleteInput,
    outputSchema: Python2PackageDeleteOutput,
  }),
);
// Input Schema
export interface Python2PackageGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  packageName: string;
}
export const Python2PackageGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    packageName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<Python2PackageGetInput>;

// Output Schema
export interface Python2PackageGetOutput {
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
export const Python2PackageGetOutput =
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
  }) as unknown as Schema.Codec<Python2PackageGetOutput>;

// The operation
/**
 * Retrieve the python 2 package identified by package name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param packageName - The python package name.
 */
export const Python2PackageGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: Python2PackageGetInput,
  outputSchema: Python2PackageGetOutput,
}));
// Input Schema
export interface Python2PackageListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const Python2PackageListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<Python2PackageListByAutomationAccountInput>;

// Output Schema
export interface Python2PackageListByAutomationAccountOutput {
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
export const Python2PackageListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<Python2PackageListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of python 2 packages.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const Python2PackageListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: Python2PackageListByAutomationAccountInput,
    outputSchema: Python2PackageListByAutomationAccountOutput,
  }));
// Input Schema
export interface Python2PackageUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  packageName: string;
  tags?: Record<string, string>;
}
export const Python2PackageUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    packageName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python2Packages/{packageName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<Python2PackageUpdateInput>;

// Output Schema
export interface Python2PackageUpdateOutput {
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
export const Python2PackageUpdateOutput =
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
  }) as unknown as Schema.Codec<Python2PackageUpdateOutput>;

// The operation
/**
 * Update the python 2 package identified by package name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param packageName - The python package name.
 */
export const Python2PackageUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: Python2PackageUpdateInput,
    outputSchema: Python2PackageUpdateOutput,
  }),
);
// Input Schema
export interface Python3PackageCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  packageName: string;
  properties: {
    contentLink: {
      uri?: string;
      contentHash?: { algorithm: string; value: string };
      version?: string;
    };
  };
  tags?: Record<string, string>;
}
export const Python3PackageCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    packageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      contentLink: Schema.Struct({
        uri: Schema.optional(Schema.String),
        contentHash: Schema.optional(
          Schema.Struct({
            algorithm: Schema.String,
            value: Schema.String,
          }),
        ),
        version: Schema.optional(Schema.String),
      }),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python3Packages/{packageName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<Python3PackageCreateOrUpdateInput>;

// Output Schema
export interface Python3PackageCreateOrUpdateOutput {
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
export const Python3PackageCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<Python3PackageCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update the python 3 package identified by package name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param packageName - The python package name.
 */
export const Python3PackageCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: Python3PackageCreateOrUpdateInput,
    outputSchema: Python3PackageCreateOrUpdateOutput,
  }));
// Input Schema
export interface Python3PackageDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  packageName: string;
}
export const Python3PackageDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    packageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python3Packages/{packageName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<Python3PackageDeleteInput>;

// Output Schema
export type Python3PackageDeleteOutput = void;
export const Python3PackageDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<Python3PackageDeleteOutput>;

// The operation
/**
 * Delete the python 3 package by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param packageName - The python package name.
 */
export const Python3PackageDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: Python3PackageDeleteInput,
    outputSchema: Python3PackageDeleteOutput,
  }),
);
// Input Schema
export interface Python3PackageGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  packageName: string;
}
export const Python3PackageGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    packageName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python3Packages/{packageName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<Python3PackageGetInput>;

// Output Schema
export interface Python3PackageGetOutput {
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
export const Python3PackageGetOutput =
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
  }) as unknown as Schema.Codec<Python3PackageGetOutput>;

// The operation
/**
 * Retrieve the python 3 package identified by package name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param packageName - The python package name.
 */
export const Python3PackageGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: Python3PackageGetInput,
  outputSchema: Python3PackageGetOutput,
}));
// Input Schema
export interface Python3PackageListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const Python3PackageListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python3Packages",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<Python3PackageListByAutomationAccountInput>;

// Output Schema
export interface Python3PackageListByAutomationAccountOutput {
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
export const Python3PackageListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<Python3PackageListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of python 3 packages.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const Python3PackageListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: Python3PackageListByAutomationAccountInput,
    outputSchema: Python3PackageListByAutomationAccountOutput,
  }));
// Input Schema
export interface Python3PackageUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  packageName: string;
  tags?: Record<string, string>;
}
export const Python3PackageUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    packageName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/python3Packages/{packageName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<Python3PackageUpdateInput>;

// Output Schema
export interface Python3PackageUpdateOutput {
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
export const Python3PackageUpdateOutput =
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
  }) as unknown as Schema.Codec<Python3PackageUpdateOutput>;

// The operation
/**
 * Update the python 3 package identified by package name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param packageName - The python package name.
 */
export const Python3PackageUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: Python3PackageUpdateInput,
    outputSchema: Python3PackageUpdateOutput,
  }),
);
// Input Schema
export interface RunbookCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
  properties: {
    logVerbose?: boolean;
    logProgress?: boolean;
    runtimeEnvironment?: string;
    runbookType:
      | "Script"
      | "Graph"
      | "PowerShellWorkflow"
      | "PowerShell"
      | "GraphPowerShellWorkflow"
      | "GraphPowerShell"
      | "Python2"
      | "Python3"
      | "Python"
      | "PowerShell72";
    draft?: {
      inEdit?: boolean;
      draftContentLink?: {
        uri?: string;
        contentHash?: { algorithm: string; value: string };
        version?: string;
      };
      creationTime?: string;
      lastModifiedTime?: string;
      parameters?: Record<
        string,
        {
          type?: string;
          isMandatory?: boolean;
          position?: number;
          defaultValue?: string;
        }
      >;
      outputTypes?: string[];
    };
    publishContentLink?: {
      uri?: string;
      contentHash?: { algorithm: string; value: string };
      version?: string;
    };
    description?: string;
    logActivityTrace?: number;
  };
  name?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const RunbookCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runbookName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      logVerbose: Schema.optional(Schema.Boolean),
      logProgress: Schema.optional(Schema.Boolean),
      runtimeEnvironment: Schema.optional(Schema.String),
      runbookType: Schema.Literals([
        "Script",
        "Graph",
        "PowerShellWorkflow",
        "PowerShell",
        "GraphPowerShellWorkflow",
        "GraphPowerShell",
        "Python2",
        "Python3",
        "Python",
        "PowerShell72",
      ]),
      draft: Schema.optional(
        Schema.Struct({
          inEdit: Schema.optional(Schema.Boolean),
          draftContentLink: Schema.optional(
            Schema.Struct({
              uri: Schema.optional(Schema.String),
              contentHash: Schema.optional(
                Schema.Struct({
                  algorithm: Schema.String,
                  value: Schema.String,
                }),
              ),
              version: Schema.optional(Schema.String),
            }),
          ),
          creationTime: Schema.optional(Schema.String),
          lastModifiedTime: Schema.optional(Schema.String),
          parameters: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                type: Schema.optional(Schema.String),
                isMandatory: Schema.optional(Schema.Boolean),
                position: Schema.optional(Schema.Number),
                defaultValue: Schema.optional(Schema.String),
              }),
            ),
          ),
          outputTypes: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      publishContentLink: Schema.optional(
        Schema.Struct({
          uri: Schema.optional(Schema.String),
          contentHash: Schema.optional(
            Schema.Struct({
              algorithm: Schema.String,
              value: Schema.String,
            }),
          ),
          version: Schema.optional(Schema.String),
        }),
      ),
      description: Schema.optional(Schema.String),
      logActivityTrace: Schema.optional(Schema.Number),
    }),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<RunbookCreateOrUpdateInput>;

// Output Schema
export interface RunbookCreateOrUpdateOutput {
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
export const RunbookCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RunbookCreateOrUpdateOutput>;

// The operation
/**
 * Create the runbook identified by runbook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const RunbookCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RunbookCreateOrUpdateInput,
    outputSchema: RunbookCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface RunbookDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const RunbookDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runbookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<RunbookDeleteInput>;

// Output Schema
export type RunbookDeleteOutput = void;
export const RunbookDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RunbookDeleteOutput>;

// The operation
/**
 * Delete the runbook by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const RunbookDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunbookDeleteInput,
  outputSchema: RunbookDeleteOutput,
}));
// Input Schema
export interface RunbookDraftGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const RunbookDraftGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runbookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<RunbookDraftGetInput>;

// Output Schema
export interface RunbookDraftGetOutput {
  inEdit?: boolean;
  draftContentLink?: {
    uri?: string;
    contentHash?: { algorithm: string; value: string };
    version?: string;
  };
  creationTime?: string;
  lastModifiedTime?: string;
  parameters?: Record<
    string,
    {
      type?: string;
      isMandatory?: boolean;
      position?: number;
      defaultValue?: string;
    }
  >;
  outputTypes?: string[];
}
export const RunbookDraftGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inEdit: Schema.optional(Schema.Boolean),
  draftContentLink: Schema.optional(
    Schema.Struct({
      uri: Schema.optional(Schema.String),
      contentHash: Schema.optional(
        Schema.Struct({
          algorithm: Schema.String,
          value: Schema.String,
        }),
      ),
      version: Schema.optional(Schema.String),
    }),
  ),
  creationTime: Schema.optional(Schema.String),
  lastModifiedTime: Schema.optional(Schema.String),
  parameters: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Struct({
        type: Schema.optional(Schema.String),
        isMandatory: Schema.optional(Schema.Boolean),
        position: Schema.optional(Schema.Number),
        defaultValue: Schema.optional(Schema.String),
      }),
    ),
  ),
  outputTypes: Schema.optional(Schema.Array(Schema.String)),
}) as unknown as Schema.Codec<RunbookDraftGetOutput>;

// The operation
/**
 * Retrieve the runbook draft identified by runbook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const RunbookDraftGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunbookDraftGetInput,
  outputSchema: RunbookDraftGetOutput,
}));
// Input Schema
export interface RunbookDraftGetContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const RunbookDraftGetContentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runbookName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/content",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<RunbookDraftGetContentInput>;

// Output Schema
export type RunbookDraftGetContentOutput = string;
export const RunbookDraftGetContentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String as unknown as Schema.Codec<RunbookDraftGetContentOutput>;

// The operation
/**
 * Retrieve the content of runbook draft identified by runbook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const RunbookDraftGetContent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RunbookDraftGetContentInput,
    outputSchema: RunbookDraftGetContentOutput,
  }),
);
// Input Schema
export interface RunbookDraftReplaceContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const RunbookDraftReplaceContentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runbookName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/content",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<RunbookDraftReplaceContentInput>;

// Output Schema
export type RunbookDraftReplaceContentOutput = void;
export const RunbookDraftReplaceContentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RunbookDraftReplaceContentOutput>;

// The operation
/**
 * Replaces the runbook draft content.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const RunbookDraftReplaceContent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RunbookDraftReplaceContentInput,
    outputSchema: RunbookDraftReplaceContentOutput,
  }),
);
// Input Schema
export interface RunbookDraftUndoEditInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const RunbookDraftUndoEditInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runbookName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/undoEdit",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<RunbookDraftUndoEditInput>;

// Output Schema
export interface RunbookDraftUndoEditOutput {
  statusCode?:
    | "Continue"
    | "SwitchingProtocols"
    | "OK"
    | "Created"
    | "Accepted"
    | "NonAuthoritativeInformation"
    | "NoContent"
    | "ResetContent"
    | "PartialContent"
    | "MultipleChoices"
    | "Ambiguous"
    | "MovedPermanently"
    | "Moved"
    | "Found"
    | "Redirect"
    | "SeeOther"
    | "RedirectMethod"
    | "NotModified"
    | "UseProxy"
    | "Unused"
    | "TemporaryRedirect"
    | "RedirectKeepVerb"
    | "BadRequest"
    | "Unauthorized"
    | "PaymentRequired"
    | "Forbidden"
    | "NotFound"
    | "MethodNotAllowed"
    | "NotAcceptable"
    | "ProxyAuthenticationRequired"
    | "RequestTimeout"
    | "Conflict"
    | "Gone"
    | "LengthRequired"
    | "PreconditionFailed"
    | "RequestEntityTooLarge"
    | "RequestUriTooLong"
    | "UnsupportedMediaType"
    | "RequestedRangeNotSatisfiable"
    | "ExpectationFailed"
    | "UpgradeRequired"
    | "InternalServerError"
    | "NotImplemented"
    | "BadGateway"
    | "ServiceUnavailable"
    | "GatewayTimeout"
    | "HttpVersionNotSupported";
  requestId?: string;
}
export const RunbookDraftUndoEditOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(
      Schema.Literals([
        "Continue",
        "SwitchingProtocols",
        "OK",
        "Created",
        "Accepted",
        "NonAuthoritativeInformation",
        "NoContent",
        "ResetContent",
        "PartialContent",
        "MultipleChoices",
        "Ambiguous",
        "MovedPermanently",
        "Moved",
        "Found",
        "Redirect",
        "SeeOther",
        "RedirectMethod",
        "NotModified",
        "UseProxy",
        "Unused",
        "TemporaryRedirect",
        "RedirectKeepVerb",
        "BadRequest",
        "Unauthorized",
        "PaymentRequired",
        "Forbidden",
        "NotFound",
        "MethodNotAllowed",
        "NotAcceptable",
        "ProxyAuthenticationRequired",
        "RequestTimeout",
        "Conflict",
        "Gone",
        "LengthRequired",
        "PreconditionFailed",
        "RequestEntityTooLarge",
        "RequestUriTooLong",
        "UnsupportedMediaType",
        "RequestedRangeNotSatisfiable",
        "ExpectationFailed",
        "UpgradeRequired",
        "InternalServerError",
        "NotImplemented",
        "BadGateway",
        "ServiceUnavailable",
        "GatewayTimeout",
        "HttpVersionNotSupported",
      ]),
    ),
    requestId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RunbookDraftUndoEditOutput>;

// The operation
/**
 * Undo draft edit to last known published state identified by runbook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const RunbookDraftUndoEdit = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RunbookDraftUndoEditInput,
    outputSchema: RunbookDraftUndoEditOutput,
  }),
);
// Input Schema
export interface RunbookGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const RunbookGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runbookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<RunbookGetInput>;

// Output Schema
export interface RunbookGetOutput {
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
export const RunbookGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RunbookGetOutput>;

// The operation
/**
 * Retrieve the runbook identified by runbook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const RunbookGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunbookGetInput,
  outputSchema: RunbookGetOutput,
}));
// Input Schema
export interface RunbookGetContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const RunbookGetContentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runbookName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/content",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<RunbookGetContentInput>;

// Output Schema
export type RunbookGetContentOutput = string;
export const RunbookGetContentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String as unknown as Schema.Codec<RunbookGetContentOutput>;

// The operation
/**
 * Retrieve the content of runbook identified by runbook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const RunbookGetContent = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunbookGetContentInput,
  outputSchema: RunbookGetContentOutput,
}));
// Input Schema
export interface RunbookListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const RunbookListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<RunbookListByAutomationAccountInput>;

// Output Schema
export interface RunbookListByAutomationAccountOutput {
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
export const RunbookListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<RunbookListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of runbooks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const RunbookListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RunbookListByAutomationAccountInput,
    outputSchema: RunbookListByAutomationAccountOutput,
  }));
// Input Schema
export interface RunbookPublishInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const RunbookPublishInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runbookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/publish",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<RunbookPublishInput>;

// Output Schema
export type RunbookPublishOutput = void;
export const RunbookPublishOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RunbookPublishOutput>;

// The operation
/**
 * Publish runbook draft.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const RunbookPublish = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunbookPublishInput,
  outputSchema: RunbookPublishOutput,
}));
// Input Schema
export interface RunbookUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
  properties?: {
    description?: string;
    logVerbose?: boolean;
    logProgress?: boolean;
    logActivityTrace?: number;
  };
  name?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const RunbookUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runbookName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      logVerbose: Schema.optional(Schema.Boolean),
      logProgress: Schema.optional(Schema.Boolean),
      logActivityTrace: Schema.optional(Schema.Number),
    }),
  ),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<RunbookUpdateInput>;

// Output Schema
export interface RunbookUpdateOutput {
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
export const RunbookUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RunbookUpdateOutput>;

// The operation
/**
 * Update the runbook identified by runbook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const RunbookUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunbookUpdateInput,
  outputSchema: RunbookUpdateOutput,
}));
// Input Schema
export interface RuntimeEnvironmentsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runtimeEnvironmentName: string;
  properties?: {
    runtime?: { language?: string; version?: string };
    defaultPackages?: Record<string, string>;
    description?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const RuntimeEnvironmentsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runtimeEnvironmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        runtime: Schema.optional(
          Schema.Struct({
            language: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
          }),
        ),
        defaultPackages: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        description: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runtimeEnvironments/{runtimeEnvironmentName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<RuntimeEnvironmentsCreateInput>;

// Output Schema
export interface RuntimeEnvironmentsCreateOutput {
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
export const RuntimeEnvironmentsCreateOutput =
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
  }) as unknown as Schema.Codec<RuntimeEnvironmentsCreateOutput>;

// The operation
/**
 * Create or update Runtime Environment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runtimeEnvironmentName - The name of the Runtime Environment.
 */
export const RuntimeEnvironmentsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RuntimeEnvironmentsCreateInput,
    outputSchema: RuntimeEnvironmentsCreateOutput,
  }),
);
// Input Schema
export interface RuntimeEnvironmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runtimeEnvironmentName: string;
}
export const RuntimeEnvironmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runtimeEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runtimeEnvironments/{runtimeEnvironmentName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<RuntimeEnvironmentsDeleteInput>;

// Output Schema
export type RuntimeEnvironmentsDeleteOutput = void;
export const RuntimeEnvironmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RuntimeEnvironmentsDeleteOutput>;

// The operation
/**
 * Delete the Runtime Environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runtimeEnvironmentName - The name of the Runtime Environment.
 */
export const RuntimeEnvironmentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RuntimeEnvironmentsDeleteInput,
    outputSchema: RuntimeEnvironmentsDeleteOutput,
  }),
);
// Input Schema
export interface RuntimeEnvironmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runtimeEnvironmentName: string;
}
export const RuntimeEnvironmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runtimeEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runtimeEnvironments/{runtimeEnvironmentName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<RuntimeEnvironmentsGetInput>;

// Output Schema
export interface RuntimeEnvironmentsGetOutput {
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
export const RuntimeEnvironmentsGetOutput =
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
  }) as unknown as Schema.Codec<RuntimeEnvironmentsGetOutput>;

// The operation
/**
 * Get information about the Runtime Environment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runtimeEnvironmentName - The name of the Runtime Environment.
 */
export const RuntimeEnvironmentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RuntimeEnvironmentsGetInput,
    outputSchema: RuntimeEnvironmentsGetOutput,
  }),
);
// Input Schema
export interface RuntimeEnvironmentsListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const RuntimeEnvironmentsListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runtimeEnvironments",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<RuntimeEnvironmentsListByAutomationAccountInput>;

// Output Schema
export interface RuntimeEnvironmentsListByAutomationAccountOutput {
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
export const RuntimeEnvironmentsListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<RuntimeEnvironmentsListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of RuntimeEnvironments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const RuntimeEnvironmentsListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RuntimeEnvironmentsListByAutomationAccountInput,
    outputSchema: RuntimeEnvironmentsListByAutomationAccountOutput,
  }));
// Input Schema
export interface RuntimeEnvironmentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runtimeEnvironmentName: string;
  properties?: { defaultPackages?: Record<string, string> };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RuntimeEnvironmentsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runtimeEnvironmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        defaultPackages: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runtimeEnvironments/{runtimeEnvironmentName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<RuntimeEnvironmentsUpdateInput>;

// Output Schema
export interface RuntimeEnvironmentsUpdateOutput {
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
export const RuntimeEnvironmentsUpdateOutput =
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
  }) as unknown as Schema.Codec<RuntimeEnvironmentsUpdateOutput>;

// The operation
/**
 * Update an Runtime Environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runtimeEnvironmentName - The name of the Runtime Environment.
 */
export const RuntimeEnvironmentsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RuntimeEnvironmentsUpdateInput,
    outputSchema: RuntimeEnvironmentsUpdateOutput,
  }),
);
// Input Schema
export interface ScheduleCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  scheduleName: string;
  name: string;
  properties: {
    description?: string;
    startTime: string;
    expiryTime?: string | null;
    interval?: unknown;
    frequency: "OneTime" | "Day" | "Hour" | "Week" | "Month" | "Minute";
    timeZone?: string;
    advancedSchedule?: {
      weekDays?: string[];
      monthDays?: number[];
      monthlyOccurrences?: {
        occurrence?: number;
        day?:
          | "Monday"
          | "Tuesday"
          | "Wednesday"
          | "Thursday"
          | "Friday"
          | "Saturday"
          | "Sunday";
      }[];
    };
  };
}
export const ScheduleCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    scheduleName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      startTime: Schema.String,
      expiryTime: Schema.optional(Schema.NullOr(Schema.String)),
      interval: Schema.optional(Schema.Unknown),
      frequency: Schema.Literals([
        "OneTime",
        "Day",
        "Hour",
        "Week",
        "Month",
        "Minute",
      ]),
      timeZone: Schema.optional(Schema.String),
      advancedSchedule: Schema.optional(
        Schema.Struct({
          weekDays: Schema.optional(Schema.Array(Schema.String)),
          monthDays: Schema.optional(Schema.Array(Schema.Number)),
          monthlyOccurrences: Schema.optional(
            Schema.Array(
              Schema.Struct({
                occurrence: Schema.optional(Schema.Number),
                day: Schema.optional(
                  Schema.Literals([
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ]),
                ),
              }),
            ),
          ),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ScheduleCreateOrUpdateInput>;

// Output Schema
export interface ScheduleCreateOrUpdateOutput {
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
export const ScheduleCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ScheduleCreateOrUpdateOutput>;

// The operation
/**
 * Create a schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param scheduleName - The schedule name.
 */
export const ScheduleCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScheduleCreateOrUpdateInput,
    outputSchema: ScheduleCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ScheduleDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  scheduleName: string;
}
export const ScheduleDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  scheduleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ScheduleDeleteInput>;

// Output Schema
export type ScheduleDeleteOutput = void;
export const ScheduleDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ScheduleDeleteOutput>;

// The operation
/**
 * Delete the schedule identified by schedule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param scheduleName - The schedule name.
 */
export const ScheduleDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScheduleDeleteInput,
  outputSchema: ScheduleDeleteOutput,
}));
// Input Schema
export interface ScheduleGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  scheduleName: string;
}
export const ScheduleGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  scheduleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ScheduleGetInput>;

// Output Schema
export interface ScheduleGetOutput {
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
export const ScheduleGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ScheduleGetOutput>;

// The operation
/**
 * Retrieve the schedule identified by schedule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param scheduleName - The schedule name.
 */
export const ScheduleGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScheduleGetInput,
  outputSchema: ScheduleGetOutput,
}));
// Input Schema
export interface ScheduleListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const ScheduleListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<ScheduleListByAutomationAccountInput>;

// Output Schema
export interface ScheduleListByAutomationAccountOutput {
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
export const ScheduleListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<ScheduleListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of schedules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const ScheduleListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScheduleListByAutomationAccountInput,
    outputSchema: ScheduleListByAutomationAccountOutput,
  }));
// Input Schema
export interface ScheduleUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  scheduleName: string;
  name?: string;
  properties?: { description?: string; isEnabled?: boolean };
}
export const ScheduleUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  scheduleName: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      isEnabled: Schema.optional(Schema.Boolean),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<ScheduleUpdateInput>;

// Output Schema
export interface ScheduleUpdateOutput {
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
export const ScheduleUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ScheduleUpdateOutput>;

// The operation
/**
 * Update the schedule identified by schedule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param scheduleName - The schedule name.
 */
export const ScheduleUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScheduleUpdateInput,
  outputSchema: ScheduleUpdateOutput,
}));
// Input Schema
export interface SoftwareUpdateConfigurationMachineRunsGetByIdInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  softwareUpdateConfigurationMachineRunId: string;
}
export const SoftwareUpdateConfigurationMachineRunsGetByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    softwareUpdateConfigurationMachineRunId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationMachineRuns/{softwareUpdateConfigurationMachineRunId}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SoftwareUpdateConfigurationMachineRunsGetByIdInput>;

// Output Schema
export interface SoftwareUpdateConfigurationMachineRunsGetByIdOutput {
  name?: string;
  id?: string;
  properties?: {
    targetComputer?: string;
    targetComputerType?: string;
    softwareUpdateConfiguration?: { name?: string };
    status?: string;
    osType?: string;
    correlationId?: string;
    sourceComputerId?: string;
    startTime?: string;
    endTime?: string | null;
    configuredDuration?: string;
    job?: { id?: string };
    creationTime?: string;
    createdBy?: string;
    lastModifiedTime?: string;
    lastModifiedBy?: string;
    error?: { code?: string; message?: string };
  };
}
export const SoftwareUpdateConfigurationMachineRunsGetByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        targetComputer: Schema.optional(Schema.String),
        targetComputerType: Schema.optional(Schema.String),
        softwareUpdateConfiguration: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
          }),
        ),
        status: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.String),
        correlationId: Schema.optional(Schema.String),
        sourceComputerId: Schema.optional(Schema.String),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        configuredDuration: Schema.optional(Schema.String),
        job: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        creationTime: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        lastModifiedTime: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<SoftwareUpdateConfigurationMachineRunsGetByIdOutput>;

// The operation
/**
 * Get a single software update configuration machine run by Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param softwareUpdateConfigurationMachineRunId - The Id of the software update configuration machine run.
 * @param clientRequestId - Identifies this specific client request.
 */
export const SoftwareUpdateConfigurationMachineRunsGetById =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SoftwareUpdateConfigurationMachineRunsGetByIdInput,
    outputSchema: SoftwareUpdateConfigurationMachineRunsGetByIdOutput,
  }));
// Input Schema
export interface SoftwareUpdateConfigurationMachineRunsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
  $skip?: string;
  $top?: string;
}
export const SoftwareUpdateConfigurationMachineRunsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skip: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationMachineRuns",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SoftwareUpdateConfigurationMachineRunsListInput>;

// Output Schema
export interface SoftwareUpdateConfigurationMachineRunsListOutput {
  value: {
    name?: string;
    id?: string;
    properties?: {
      targetComputer?: string;
      targetComputerType?: string;
      softwareUpdateConfiguration?: { name?: string };
      status?: string;
      osType?: string;
      correlationId?: string;
      sourceComputerId?: string;
      startTime?: string;
      endTime?: string | null;
      configuredDuration?: string;
      job?: { id?: string };
      creationTime?: string;
      createdBy?: string;
      lastModifiedTime?: string;
      lastModifiedBy?: string;
      error?: { code?: string; message?: string };
    };
  }[];
  nextLink?: string;
}
export const SoftwareUpdateConfigurationMachineRunsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            targetComputer: Schema.optional(Schema.String),
            targetComputerType: Schema.optional(Schema.String),
            softwareUpdateConfiguration: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
              }),
            ),
            status: Schema.optional(Schema.String),
            osType: Schema.optional(Schema.String),
            correlationId: Schema.optional(Schema.String),
            sourceComputerId: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.NullOr(Schema.String)),
            configuredDuration: Schema.optional(Schema.String),
            job: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
            creationTime: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            lastModifiedTime: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            error: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SoftwareUpdateConfigurationMachineRunsListOutput>;

// The operation
/**
 * Return list of software update configuration machine runs
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param clientRequestId - Identifies this specific client request.
 * @param $filter - The filter to apply on the operation. You can use the following filters: 'properties/osType', 'properties/status', 'properties/startTime', and 'properties/softwareUpdateConfiguration/name'
 * @param $skip - number of entries you skip before returning results
 * @param $top - Maximum number of entries returned in the results collection
 */
export const SoftwareUpdateConfigurationMachineRunsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SoftwareUpdateConfigurationMachineRunsListInput,
    outputSchema: SoftwareUpdateConfigurationMachineRunsListOutput,
  }));
// Input Schema
export interface SoftwareUpdateConfigurationRunsGetByIdInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  softwareUpdateConfigurationRunId: string;
}
export const SoftwareUpdateConfigurationRunsGetByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    softwareUpdateConfigurationRunId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationRuns/{softwareUpdateConfigurationRunId}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SoftwareUpdateConfigurationRunsGetByIdInput>;

// Output Schema
export interface SoftwareUpdateConfigurationRunsGetByIdOutput {
  name?: string;
  id?: string;
  properties?: {
    softwareUpdateConfiguration?: { name?: string };
    status?: string;
    configuredDuration?: string;
    osType?: string;
    startTime?: string;
    endTime?: string | null;
    computerCount?: number;
    failedCount?: number;
    creationTime?: string;
    createdBy?: string;
    lastModifiedTime?: string;
    lastModifiedBy?: string;
    tasks?: {
      preTask?: { status?: string; source?: string; jobId?: string };
      postTask?: { status?: string; source?: string; jobId?: string };
    };
  };
}
export const SoftwareUpdateConfigurationRunsGetByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        softwareUpdateConfiguration: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
          }),
        ),
        status: Schema.optional(Schema.String),
        configuredDuration: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.String),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        computerCount: Schema.optional(Schema.Number),
        failedCount: Schema.optional(Schema.Number),
        creationTime: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        lastModifiedTime: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        tasks: Schema.optional(
          Schema.Struct({
            preTask: Schema.optional(
              Schema.Struct({
                status: Schema.optional(Schema.String),
                source: Schema.optional(Schema.String),
                jobId: Schema.optional(Schema.String),
              }),
            ),
            postTask: Schema.optional(
              Schema.Struct({
                status: Schema.optional(Schema.String),
                source: Schema.optional(Schema.String),
                jobId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<SoftwareUpdateConfigurationRunsGetByIdOutput>;

// The operation
/**
 * Get a single software update configuration Run by Id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param softwareUpdateConfigurationRunId - The Id of the software update configuration run.
 * @param clientRequestId - Identifies this specific client request.
 */
export const SoftwareUpdateConfigurationRunsGetById =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SoftwareUpdateConfigurationRunsGetByIdInput,
    outputSchema: SoftwareUpdateConfigurationRunsGetByIdOutput,
  }));
// Input Schema
export interface SoftwareUpdateConfigurationRunsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
  $skip?: string;
  $top?: string;
}
export const SoftwareUpdateConfigurationRunsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skip: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationRuns",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SoftwareUpdateConfigurationRunsListInput>;

// Output Schema
export interface SoftwareUpdateConfigurationRunsListOutput {
  value: {
    name?: string;
    id?: string;
    properties?: {
      softwareUpdateConfiguration?: { name?: string };
      status?: string;
      configuredDuration?: string;
      osType?: string;
      startTime?: string;
      endTime?: string | null;
      computerCount?: number;
      failedCount?: number;
      creationTime?: string;
      createdBy?: string;
      lastModifiedTime?: string;
      lastModifiedBy?: string;
      tasks?: {
        preTask?: { status?: string; source?: string; jobId?: string };
        postTask?: { status?: string; source?: string; jobId?: string };
      };
    };
  }[];
  nextLink?: string;
}
export const SoftwareUpdateConfigurationRunsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            softwareUpdateConfiguration: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
              }),
            ),
            status: Schema.optional(Schema.String),
            configuredDuration: Schema.optional(Schema.String),
            osType: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.NullOr(Schema.String)),
            computerCount: Schema.optional(Schema.Number),
            failedCount: Schema.optional(Schema.Number),
            creationTime: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            lastModifiedTime: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            tasks: Schema.optional(
              Schema.Struct({
                preTask: Schema.optional(
                  Schema.Struct({
                    status: Schema.optional(Schema.String),
                    source: Schema.optional(Schema.String),
                    jobId: Schema.optional(Schema.String),
                  }),
                ),
                postTask: Schema.optional(
                  Schema.Struct({
                    status: Schema.optional(Schema.String),
                    source: Schema.optional(Schema.String),
                    jobId: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SoftwareUpdateConfigurationRunsListOutput>;

// The operation
/**
 * Return list of software update configuration runs
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param clientRequestId - Identifies this specific client request.
 * @param $filter - The filter to apply on the operation. You can use the following filters: 'properties/osType', 'properties/status', 'properties/startTime', and 'properties/softwareUpdateConfiguration/name'
 * @param $skip - Number of entries you skip before returning results
 * @param $top - Maximum number of entries returned in the results collection
 */
export const SoftwareUpdateConfigurationRunsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SoftwareUpdateConfigurationRunsListInput,
    outputSchema: SoftwareUpdateConfigurationRunsListOutput,
  }));
// Input Schema
export interface SoftwareUpdateConfigurationsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  softwareUpdateConfigurationName: string;
  properties: {
    updateConfiguration: {
      operatingSystem: "Windows" | "Linux";
      windows?: {
        includedUpdateClassifications?:
          | "Unclassified"
          | "Critical"
          | "Security"
          | "UpdateRollup"
          | "FeaturePack"
          | "ServicePack"
          | "Definition"
          | "Tools"
          | "Updates";
        excludedKbNumbers?: string[];
        includedKbNumbers?: string[];
        rebootSetting?: string;
      };
      linux?: {
        includedPackageClassifications?:
          | "Unclassified"
          | "Critical"
          | "Security"
          | "Other";
        excludedPackageNameMasks?: string[];
        includedPackageNameMasks?: string[];
        rebootSetting?: string;
      };
      duration?: string;
      azureVirtualMachines?: string[];
      nonAzureComputerNames?: string[];
      targets?: {
        azureQueries?: {
          scope?: string[];
          locations?: string[];
          tagSettings?: {
            tags?: Record<string, string[]>;
            filterOperator?: "All" | "Any";
          };
        }[];
        nonAzureQueries?: { functionAlias?: string; workspaceId?: string }[];
      };
    };
    scheduleInfo: {
      startTime?: string;
      startTimeOffsetMinutes?: number;
      expiryTime?: string | null;
      expiryTimeOffsetMinutes?: number;
      isEnabled?: boolean;
      nextRun?: string | null;
      nextRunOffsetMinutes?: number;
      interval?: number;
      frequency?: "OneTime" | "Day" | "Hour" | "Week" | "Month" | "Minute";
      timeZone?: string;
      advancedSchedule?: {
        weekDays?: string[];
        monthDays?: number[];
        monthlyOccurrences?: {
          occurrence?: number;
          day?:
            | "Monday"
            | "Tuesday"
            | "Wednesday"
            | "Thursday"
            | "Friday"
            | "Saturday"
            | "Sunday";
        }[];
      };
      creationTime?: string;
      lastModifiedTime?: string;
      description?: string;
    };
    provisioningState?: string;
    error?: { code?: string; message?: string };
    creationTime?: string;
    createdBy?: string;
    lastModifiedTime?: string;
    lastModifiedBy?: string;
    tasks?: {
      preTask?: { parameters?: Record<string, string>; source?: string };
      postTask?: { parameters?: Record<string, string>; source?: string };
    };
  };
}
export const SoftwareUpdateConfigurationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    softwareUpdateConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      updateConfiguration: Schema.Struct({
        operatingSystem: Schema.Literals(["Windows", "Linux"]),
        windows: Schema.optional(
          Schema.Struct({
            includedUpdateClassifications: Schema.optional(
              Schema.Literals([
                "Unclassified",
                "Critical",
                "Security",
                "UpdateRollup",
                "FeaturePack",
                "ServicePack",
                "Definition",
                "Tools",
                "Updates",
              ]),
            ),
            excludedKbNumbers: Schema.optional(Schema.Array(Schema.String)),
            includedKbNumbers: Schema.optional(Schema.Array(Schema.String)),
            rebootSetting: Schema.optional(Schema.String),
          }),
        ),
        linux: Schema.optional(
          Schema.Struct({
            includedPackageClassifications: Schema.optional(
              Schema.Literals([
                "Unclassified",
                "Critical",
                "Security",
                "Other",
              ]),
            ),
            excludedPackageNameMasks: Schema.optional(
              Schema.Array(Schema.String),
            ),
            includedPackageNameMasks: Schema.optional(
              Schema.Array(Schema.String),
            ),
            rebootSetting: Schema.optional(Schema.String),
          }),
        ),
        duration: Schema.optional(Schema.String),
        azureVirtualMachines: Schema.optional(Schema.Array(Schema.String)),
        nonAzureComputerNames: Schema.optional(Schema.Array(Schema.String)),
        targets: Schema.optional(
          Schema.Struct({
            azureQueries: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  scope: Schema.optional(Schema.Array(Schema.String)),
                  locations: Schema.optional(Schema.Array(Schema.String)),
                  tagSettings: Schema.optional(
                    Schema.Struct({
                      tags: Schema.optional(
                        Schema.Record(
                          Schema.String,
                          Schema.Array(Schema.String),
                        ),
                      ),
                      filterOperator: Schema.optional(
                        Schema.Literals(["All", "Any"]),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            nonAzureQueries: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  functionAlias: Schema.optional(Schema.String),
                  workspaceId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
      scheduleInfo: Schema.Struct({
        startTime: Schema.optional(Schema.String),
        startTimeOffsetMinutes: Schema.optional(Schema.Number),
        expiryTime: Schema.optional(Schema.NullOr(Schema.String)),
        expiryTimeOffsetMinutes: Schema.optional(Schema.Number),
        isEnabled: Schema.optional(Schema.Boolean),
        nextRun: Schema.optional(Schema.NullOr(Schema.String)),
        nextRunOffsetMinutes: Schema.optional(Schema.Number),
        interval: Schema.optional(Schema.Number),
        frequency: Schema.optional(
          Schema.Literals([
            "OneTime",
            "Day",
            "Hour",
            "Week",
            "Month",
            "Minute",
          ]),
        ),
        timeZone: Schema.optional(Schema.String),
        advancedSchedule: Schema.optional(
          Schema.Struct({
            weekDays: Schema.optional(Schema.Array(Schema.String)),
            monthDays: Schema.optional(Schema.Array(Schema.Number)),
            monthlyOccurrences: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  occurrence: Schema.optional(Schema.Number),
                  day: Schema.optional(
                    Schema.Literals([
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ]),
                  ),
                }),
              ),
            ),
          }),
        ),
        creationTime: Schema.optional(Schema.String),
        lastModifiedTime: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
      }),
      provisioningState: Schema.optional(Schema.String),
      error: Schema.optional(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }),
      ),
      creationTime: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      lastModifiedTime: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      tasks: Schema.optional(
        Schema.Struct({
          preTask: Schema.optional(
            Schema.Struct({
              parameters: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              source: Schema.optional(Schema.String),
            }),
          ),
          postTask: Schema.optional(
            Schema.Struct({
              parameters: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              source: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SoftwareUpdateConfigurationsCreateInput>;

// Output Schema
export interface SoftwareUpdateConfigurationsCreateOutput {
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
export const SoftwareUpdateConfigurationsCreateOutput =
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
  }) as unknown as Schema.Codec<SoftwareUpdateConfigurationsCreateOutput>;

// The operation
/**
 * Create a new software update configuration with the name given in the URI.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param softwareUpdateConfigurationName - The name of the software update configuration to be created.
 * @param clientRequestId - Identifies this specific client request.
 */
export const SoftwareUpdateConfigurationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SoftwareUpdateConfigurationsCreateInput,
    outputSchema: SoftwareUpdateConfigurationsCreateOutput,
  }));
// Input Schema
export interface SoftwareUpdateConfigurationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  softwareUpdateConfigurationName: string;
}
export const SoftwareUpdateConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    softwareUpdateConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SoftwareUpdateConfigurationsDeleteInput>;

// Output Schema
export type SoftwareUpdateConfigurationsDeleteOutput = void;
export const SoftwareUpdateConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SoftwareUpdateConfigurationsDeleteOutput>;

// The operation
/**
 * delete a specific software update configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param softwareUpdateConfigurationName - The name of the software update configuration to be created.
 * @param clientRequestId - Identifies this specific client request.
 */
export const SoftwareUpdateConfigurationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SoftwareUpdateConfigurationsDeleteInput,
    outputSchema: SoftwareUpdateConfigurationsDeleteOutput,
  }));
// Input Schema
export interface SoftwareUpdateConfigurationsGetByNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  softwareUpdateConfigurationName: string;
}
export const SoftwareUpdateConfigurationsGetByNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    softwareUpdateConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SoftwareUpdateConfigurationsGetByNameInput>;

// Output Schema
export interface SoftwareUpdateConfigurationsGetByNameOutput {
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
export const SoftwareUpdateConfigurationsGetByNameOutput =
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
  }) as unknown as Schema.Codec<SoftwareUpdateConfigurationsGetByNameOutput>;

// The operation
/**
 * Get a single software update configuration by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param softwareUpdateConfigurationName - The name of the software update configuration to be created.
 * @param clientRequestId - Identifies this specific client request.
 */
export const SoftwareUpdateConfigurationsGetByName =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SoftwareUpdateConfigurationsGetByNameInput,
    outputSchema: SoftwareUpdateConfigurationsGetByNameOutput,
  }));
// Input Schema
export interface SoftwareUpdateConfigurationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
}
export const SoftwareUpdateConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SoftwareUpdateConfigurationsListInput>;

// Output Schema
export interface SoftwareUpdateConfigurationsListOutput {
  value?: {
    name?: string;
    id?: string;
    properties: {
      updateConfiguration?: {
        operatingSystem: "Windows" | "Linux";
        windows?: {
          includedUpdateClassifications?:
            | "Unclassified"
            | "Critical"
            | "Security"
            | "UpdateRollup"
            | "FeaturePack"
            | "ServicePack"
            | "Definition"
            | "Tools"
            | "Updates";
          excludedKbNumbers?: string[];
          includedKbNumbers?: string[];
          rebootSetting?: string;
        };
        linux?: {
          includedPackageClassifications?:
            | "Unclassified"
            | "Critical"
            | "Security"
            | "Other";
          excludedPackageNameMasks?: string[];
          includedPackageNameMasks?: string[];
          rebootSetting?: string;
        };
        duration?: string;
        azureVirtualMachines?: string[];
        nonAzureComputerNames?: string[];
        targets?: {
          azureQueries?: {
            scope?: string[];
            locations?: string[];
            tagSettings?: {
              tags?: Record<string, string[]>;
              filterOperator?: "All" | "Any";
            };
          }[];
          nonAzureQueries?: { functionAlias?: string; workspaceId?: string }[];
        };
      };
      tasks?: {
        preTask?: { parameters?: Record<string, string>; source?: string };
        postTask?: { parameters?: Record<string, string>; source?: string };
      };
      frequency?: "OneTime" | "Day" | "Hour" | "Week" | "Month" | "Minute";
      startTime?: string;
      creationTime?: string;
      lastModifiedTime?: string;
      provisioningState?: string;
      nextRun?: string | null;
    };
  }[];
}
export const SoftwareUpdateConfigurationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          properties: Schema.Struct({
            updateConfiguration: Schema.optional(
              Schema.Struct({
                operatingSystem: Schema.Literals(["Windows", "Linux"]),
                windows: Schema.optional(
                  Schema.Struct({
                    includedUpdateClassifications: Schema.optional(
                      Schema.Literals([
                        "Unclassified",
                        "Critical",
                        "Security",
                        "UpdateRollup",
                        "FeaturePack",
                        "ServicePack",
                        "Definition",
                        "Tools",
                        "Updates",
                      ]),
                    ),
                    excludedKbNumbers: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    includedKbNumbers: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    rebootSetting: Schema.optional(Schema.String),
                  }),
                ),
                linux: Schema.optional(
                  Schema.Struct({
                    includedPackageClassifications: Schema.optional(
                      Schema.Literals([
                        "Unclassified",
                        "Critical",
                        "Security",
                        "Other",
                      ]),
                    ),
                    excludedPackageNameMasks: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    includedPackageNameMasks: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    rebootSetting: Schema.optional(Schema.String),
                  }),
                ),
                duration: Schema.optional(Schema.String),
                azureVirtualMachines: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                nonAzureComputerNames: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                targets: Schema.optional(
                  Schema.Struct({
                    azureQueries: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          scope: Schema.optional(Schema.Array(Schema.String)),
                          locations: Schema.optional(
                            Schema.Array(Schema.String),
                          ),
                          tagSettings: Schema.optional(
                            Schema.Struct({
                              tags: Schema.optional(
                                Schema.Record(
                                  Schema.String,
                                  Schema.Array(Schema.String),
                                ),
                              ),
                              filterOperator: Schema.optional(
                                Schema.Literals(["All", "Any"]),
                              ),
                            }),
                          ),
                        }),
                      ),
                    ),
                    nonAzureQueries: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          functionAlias: Schema.optional(Schema.String),
                          workspaceId: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            tasks: Schema.optional(
              Schema.Struct({
                preTask: Schema.optional(
                  Schema.Struct({
                    parameters: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    source: Schema.optional(Schema.String),
                  }),
                ),
                postTask: Schema.optional(
                  Schema.Struct({
                    parameters: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    source: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            frequency: Schema.optional(
              Schema.Literals([
                "OneTime",
                "Day",
                "Hour",
                "Week",
                "Month",
                "Minute",
              ]),
            ),
            startTime: Schema.optional(Schema.String),
            creationTime: Schema.optional(Schema.String),
            lastModifiedTime: Schema.optional(Schema.String),
            provisioningState: Schema.optional(Schema.String),
            nextRun: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SoftwareUpdateConfigurationsListOutput>;

// The operation
/**
 * Get all software update configurations for the account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param clientRequestId - Identifies this specific client request.
 * @param $filter - The filter to apply on the operation.
 */
export const SoftwareUpdateConfigurationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SoftwareUpdateConfigurationsListInput,
    outputSchema: SoftwareUpdateConfigurationsListOutput,
  }));
// Input Schema
export interface SourceControlCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  sourceControlName: string;
  properties: {
    repoUrl?: string;
    branch?: string;
    folderPath?: string;
    autoSync?: boolean;
    publishRunbook?: boolean;
    sourceType?: "VsoGit" | "VsoTfvc" | "GitHub";
    securityToken?: {
      accessToken?: string | Redacted.Redacted<string>;
      refreshToken?: string | Redacted.Redacted<string>;
      tokenType?: "PersonalAccessToken" | "Oauth";
    };
    description?: string;
  };
}
export const SourceControlCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      repoUrl: Schema.optional(Schema.String),
      branch: Schema.optional(Schema.String),
      folderPath: Schema.optional(Schema.String),
      autoSync: Schema.optional(Schema.Boolean),
      publishRunbook: Schema.optional(Schema.Boolean),
      sourceType: Schema.optional(
        Schema.Literals(["VsoGit", "VsoTfvc", "GitHub"]),
      ),
      securityToken: Schema.optional(
        Schema.Struct({
          accessToken: Schema.optional(SensitiveString),
          refreshToken: Schema.optional(SensitiveString),
          tokenType: Schema.optional(
            Schema.Literals(["PersonalAccessToken", "Oauth"]),
          ),
        }),
      ),
      description: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SourceControlCreateOrUpdateInput>;

// Output Schema
export interface SourceControlCreateOrUpdateOutput {
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
export const SourceControlCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SourceControlCreateOrUpdateOutput>;

// The operation
/**
 * Create a source control.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param sourceControlName - The name of source control.
 */
export const SourceControlCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SourceControlCreateOrUpdateInput,
    outputSchema: SourceControlCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SourceControlDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  sourceControlName: string;
}
export const SourceControlDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SourceControlDeleteInput>;

// Output Schema
export type SourceControlDeleteOutput = void;
export const SourceControlDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SourceControlDeleteOutput>;

// The operation
/**
 * Delete the source control.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param sourceControlName - The name of source control.
 */
export const SourceControlDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SourceControlDeleteInput,
  outputSchema: SourceControlDeleteOutput,
}));
// Input Schema
export interface SourceControlGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  sourceControlName: string;
}
export const SourceControlGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  sourceControlName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<SourceControlGetInput>;

// Output Schema
export interface SourceControlGetOutput {
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
export const SourceControlGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<SourceControlGetOutput>;

// The operation
/**
 * Retrieve the source control identified by source control name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param sourceControlName - The name of source control.
 */
export const SourceControlGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SourceControlGetInput,
  outputSchema: SourceControlGetOutput,
}));
// Input Schema
export interface SourceControlListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
}
export const SourceControlListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SourceControlListByAutomationAccountInput>;

// Output Schema
export interface SourceControlListByAutomationAccountOutput {
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
export const SourceControlListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<SourceControlListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of source controls.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param $filter - The filter to apply on the operation.
 */
export const SourceControlListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SourceControlListByAutomationAccountInput,
    outputSchema: SourceControlListByAutomationAccountOutput,
  }));
// Input Schema
export interface SourceControlSyncJobCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  sourceControlName: string;
  sourceControlSyncJobId: string;
  properties: { commitId: string };
}
export const SourceControlSyncJobCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
    sourceControlSyncJobId: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      commitId: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SourceControlSyncJobCreateInput>;

// Output Schema
export interface SourceControlSyncJobCreateOutput {
  name?: string;
  type?: string;
  id?: string;
  properties?: {
    sourceControlSyncJobId?: string;
    creationTime?: string;
    provisioningState?: "Completed" | "Failed" | "Running";
    startTime?: string | null;
    endTime?: string | null;
    syncType?: "PartialSync" | "FullSync";
  };
}
export const SourceControlSyncJobCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        sourceControlSyncJobId: Schema.optional(Schema.String),
        creationTime: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Completed", "Failed", "Running"]),
        ),
        startTime: Schema.optional(Schema.NullOr(Schema.String)),
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        syncType: Schema.optional(Schema.Literals(["PartialSync", "FullSync"])),
      }),
    ),
  }) as unknown as Schema.Codec<SourceControlSyncJobCreateOutput>;

// The operation
/**
 * Creates the sync job for a source control.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param sourceControlName - The name of source control.
 * @param sourceControlSyncJobId - The source control sync job id.
 */
export const SourceControlSyncJobCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SourceControlSyncJobCreateInput,
    outputSchema: SourceControlSyncJobCreateOutput,
  }),
);
// Input Schema
export interface SourceControlSyncJobGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  sourceControlName: string;
  sourceControlSyncJobId: string;
}
export const SourceControlSyncJobGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
    sourceControlSyncJobId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SourceControlSyncJobGetInput>;

// Output Schema
export interface SourceControlSyncJobGetOutput {
  id?: string;
  properties?: {
    sourceControlSyncJobId?: string;
    creationTime?: string;
    provisioningState?: "Completed" | "Failed" | "Running";
    startTime?: string | null;
    endTime?: string | null;
    syncType?: "PartialSync" | "FullSync";
    exception?: string;
  };
}
export const SourceControlSyncJobGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        sourceControlSyncJobId: Schema.optional(Schema.String),
        creationTime: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Completed", "Failed", "Running"]),
        ),
        startTime: Schema.optional(Schema.NullOr(Schema.String)),
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        syncType: Schema.optional(Schema.Literals(["PartialSync", "FullSync"])),
        exception: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<SourceControlSyncJobGetOutput>;

// The operation
/**
 * Retrieve the source control sync job identified by job id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param sourceControlName - The name of source control.
 * @param sourceControlSyncJobId - The source control sync job id.
 */
export const SourceControlSyncJobGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SourceControlSyncJobGetInput,
    outputSchema: SourceControlSyncJobGetOutput,
  }),
);
// Input Schema
export interface SourceControlSyncJobListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  sourceControlName: string;
  $filter?: string;
}
export const SourceControlSyncJobListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SourceControlSyncJobListByAutomationAccountInput>;

// Output Schema
export interface SourceControlSyncJobListByAutomationAccountOutput {
  value: {
    name?: string;
    type?: string;
    id?: string;
    properties?: {
      sourceControlSyncJobId?: string;
      creationTime?: string;
      provisioningState?: "Completed" | "Failed" | "Running";
      startTime?: string | null;
      endTime?: string | null;
      syncType?: "PartialSync" | "FullSync";
    };
  }[];
  nextLink?: string;
}
export const SourceControlSyncJobListByAutomationAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            sourceControlSyncJobId: Schema.optional(Schema.String),
            creationTime: Schema.optional(Schema.String),
            provisioningState: Schema.optional(
              Schema.Literals(["Completed", "Failed", "Running"]),
            ),
            startTime: Schema.optional(Schema.NullOr(Schema.String)),
            endTime: Schema.optional(Schema.NullOr(Schema.String)),
            syncType: Schema.optional(
              Schema.Literals(["PartialSync", "FullSync"]),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SourceControlSyncJobListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of source control sync jobs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param sourceControlName - The name of source control.
 * @param $filter - The filter to apply on the operation.
 */
export const SourceControlSyncJobListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SourceControlSyncJobListByAutomationAccountInput,
    outputSchema: SourceControlSyncJobListByAutomationAccountOutput,
  }));
// Input Schema
export interface SourceControlSyncJobStreamsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  sourceControlName: string;
  sourceControlSyncJobId: string;
  streamId: string;
}
export const SourceControlSyncJobStreamsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
    sourceControlSyncJobId: Schema.String.pipe(T.PathParam()),
    streamId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}/streams/{streamId}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SourceControlSyncJobStreamsGetInput>;

// Output Schema
export interface SourceControlSyncJobStreamsGetOutput {
  id?: string;
  properties?: {
    sourceControlSyncJobStreamId?: string;
    summary?: string;
    time?: string | null;
    streamType?: "Error" | "Output";
    streamText?: string;
    value?: Record<string, unknown>;
  };
}
export const SourceControlSyncJobStreamsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        sourceControlSyncJobStreamId: Schema.optional(Schema.String),
        summary: Schema.optional(Schema.String),
        time: Schema.optional(Schema.NullOr(Schema.String)),
        streamType: Schema.optional(Schema.Literals(["Error", "Output"])),
        streamText: Schema.optional(Schema.String),
        value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
  }) as unknown as Schema.Codec<SourceControlSyncJobStreamsGetOutput>;

// The operation
/**
 * Retrieve a sync job stream identified by stream id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param sourceControlName - The name of source control.
 * @param sourceControlSyncJobId - The source control sync job id.
 * @param streamId - The id of the sync job stream.
 */
export const SourceControlSyncJobStreamsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SourceControlSyncJobStreamsGetInput,
    outputSchema: SourceControlSyncJobStreamsGetOutput,
  }));
// Input Schema
export interface SourceControlSyncJobStreamsListBySyncJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  sourceControlName: string;
  sourceControlSyncJobId: string;
  $filter?: string;
}
export const SourceControlSyncJobStreamsListBySyncJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
    sourceControlSyncJobId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}/streams",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SourceControlSyncJobStreamsListBySyncJobInput>;

// Output Schema
export interface SourceControlSyncJobStreamsListBySyncJobOutput {
  value: {
    id?: string;
    properties?: {
      sourceControlSyncJobStreamId?: string;
      summary?: string;
      time?: string | null;
      streamType?: "Error" | "Output";
    };
  }[];
  nextLink?: string;
}
export const SourceControlSyncJobStreamsListBySyncJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            sourceControlSyncJobStreamId: Schema.optional(Schema.String),
            summary: Schema.optional(Schema.String),
            time: Schema.optional(Schema.NullOr(Schema.String)),
            streamType: Schema.optional(Schema.Literals(["Error", "Output"])),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SourceControlSyncJobStreamsListBySyncJobOutput>;

// The operation
/**
 * Retrieve a list of sync job streams identified by sync job id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param sourceControlName - The name of source control.
 * @param sourceControlSyncJobId - The source control sync job id.
 * @param $filter - The filter to apply on the operation.
 */
export const SourceControlSyncJobStreamsListBySyncJob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SourceControlSyncJobStreamsListBySyncJobInput,
    outputSchema: SourceControlSyncJobStreamsListBySyncJobOutput,
  }));
// Input Schema
export interface SourceControlUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  sourceControlName: string;
  properties?: {
    branch?: string;
    folderPath?: string;
    autoSync?: boolean;
    publishRunbook?: boolean;
    securityToken?: {
      accessToken?: string | Redacted.Redacted<string>;
      refreshToken?: string | Redacted.Redacted<string>;
      tokenType?: "PersonalAccessToken" | "Oauth";
    };
    description?: string;
  };
}
export const SourceControlUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        branch: Schema.optional(Schema.String),
        folderPath: Schema.optional(Schema.String),
        autoSync: Schema.optional(Schema.Boolean),
        publishRunbook: Schema.optional(Schema.Boolean),
        securityToken: Schema.optional(
          Schema.Struct({
            accessToken: Schema.optional(SensitiveString),
            refreshToken: Schema.optional(SensitiveString),
            tokenType: Schema.optional(
              Schema.Literals(["PersonalAccessToken", "Oauth"]),
            ),
          }),
        ),
        description: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<SourceControlUpdateInput>;

// Output Schema
export interface SourceControlUpdateOutput {
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
export const SourceControlUpdateOutput =
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
  }) as unknown as Schema.Codec<SourceControlUpdateOutput>;

// The operation
/**
 * Update a source control.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param sourceControlName - The name of source control.
 */
export const SourceControlUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SourceControlUpdateInput,
  outputSchema: SourceControlUpdateOutput,
}));
// Input Schema
export interface StatisticsListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
}
export const StatisticsListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/statistics",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<StatisticsListByAutomationAccountInput>;

// Output Schema
export interface StatisticsListByAutomationAccountOutput {
  value?: {
    counterProperty?: string;
    counterValue?: number;
    startTime?: string;
    endTime?: string | null;
    id?: string;
  }[];
  nextLink?: string;
}
export const StatisticsListByAutomationAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          counterProperty: Schema.optional(Schema.String),
          counterValue: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.NullOr(Schema.String)),
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<StatisticsListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve the statistics for the account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param $filter - The filter to apply on the operation.
 */
export const StatisticsListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: StatisticsListByAutomationAccountInput,
    outputSchema: StatisticsListByAutomationAccountOutput,
  }));
// Input Schema
export interface TestJobCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
  parameters?: Record<string, string>;
  runOn?: string;
  runtimeEnvironment?: string;
}
export const TestJobCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runbookName: Schema.String.pipe(T.PathParam()),
  parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  runOn: Schema.optional(Schema.String),
  runtimeEnvironment: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<TestJobCreateInput>;

// Output Schema
export interface TestJobCreateOutput {
  creationTime?: string;
  status?: string;
  statusDetails?: string;
  runOn?: string;
  startTime?: string | null;
  endTime?: string | null;
  exception?: string;
  lastModifiedTime?: string;
  lastStatusModifiedTime?: string | null;
  parameters?: Record<string, string>;
  logActivityTrace?: number;
}
export const TestJobCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  creationTime: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  statusDetails: Schema.optional(Schema.String),
  runOn: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.NullOr(Schema.String)),
  endTime: Schema.optional(Schema.NullOr(Schema.String)),
  exception: Schema.optional(Schema.String),
  lastModifiedTime: Schema.optional(Schema.String),
  lastStatusModifiedTime: Schema.optional(Schema.NullOr(Schema.String)),
  parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  logActivityTrace: Schema.optional(Schema.Number),
}) as unknown as Schema.Codec<TestJobCreateOutput>;

// The operation
/**
 * Create a test job of the runbook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const TestJobCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TestJobCreateInput,
  outputSchema: TestJobCreateOutput,
}));
// Input Schema
export interface TestJobGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const TestJobGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runbookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<TestJobGetInput>;

// Output Schema
export interface TestJobGetOutput {
  creationTime?: string;
  status?: string;
  statusDetails?: string;
  runOn?: string;
  startTime?: string | null;
  endTime?: string | null;
  exception?: string;
  lastModifiedTime?: string;
  lastStatusModifiedTime?: string | null;
  parameters?: Record<string, string>;
  logActivityTrace?: number;
}
export const TestJobGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  creationTime: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  statusDetails: Schema.optional(Schema.String),
  runOn: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.NullOr(Schema.String)),
  endTime: Schema.optional(Schema.NullOr(Schema.String)),
  exception: Schema.optional(Schema.String),
  lastModifiedTime: Schema.optional(Schema.String),
  lastStatusModifiedTime: Schema.optional(Schema.NullOr(Schema.String)),
  parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  logActivityTrace: Schema.optional(Schema.Number),
}) as unknown as Schema.Codec<TestJobGetOutput>;

// The operation
/**
 * Retrieve the test job for the specified runbook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const TestJobGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TestJobGetInput,
  outputSchema: TestJobGetOutput,
}));
// Input Schema
export interface TestJobResumeInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const TestJobResumeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runbookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/resume",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<TestJobResumeInput>;

// Output Schema
export type TestJobResumeOutput = void;
export const TestJobResumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TestJobResumeOutput>;

// The operation
/**
 * Resume the test job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const TestJobResume = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TestJobResumeInput,
  outputSchema: TestJobResumeOutput,
}));
// Input Schema
export interface TestJobStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const TestJobStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runbookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/stop",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<TestJobStopInput>;

// Output Schema
export type TestJobStopOutput = void;
export const TestJobStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TestJobStopOutput>;

// The operation
/**
 * Stop the test job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const TestJobStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TestJobStopInput,
  outputSchema: TestJobStopOutput,
}));
// Input Schema
export interface TestJobStreamsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
  jobStreamId: string;
}
export const TestJobStreamsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runbookName: Schema.String.pipe(T.PathParam()),
    jobStreamId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/streams/{jobStreamId}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<TestJobStreamsGetInput>;

// Output Schema
export interface TestJobStreamsGetOutput {
  id?: string;
  properties?: {
    jobStreamId?: string;
    time?: string;
    streamType?:
      | "Progress"
      | "Output"
      | "Warning"
      | "Error"
      | "Debug"
      | "Verbose"
      | "Any";
    streamText?: string;
    summary?: string | null;
    value?: Record<string, unknown>;
  };
}
export const TestJobStreamsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        jobStreamId: Schema.optional(Schema.String),
        time: Schema.optional(Schema.String),
        streamType: Schema.optional(
          Schema.Literals([
            "Progress",
            "Output",
            "Warning",
            "Error",
            "Debug",
            "Verbose",
            "Any",
          ]),
        ),
        streamText: Schema.optional(Schema.String),
        summary: Schema.optional(Schema.NullOr(Schema.String)),
        value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
  }) as unknown as Schema.Codec<TestJobStreamsGetOutput>;

// The operation
/**
 * Retrieve a test job stream of the test job identified by runbook name and stream id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 * @param jobStreamId - The job stream id.
 */
export const TestJobStreamsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TestJobStreamsGetInput,
  outputSchema: TestJobStreamsGetOutput,
}));
// Input Schema
export interface TestJobStreamsListByTestJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
  $filter?: string;
}
export const TestJobStreamsListByTestJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    runbookName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/streams",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<TestJobStreamsListByTestJobInput>;

// Output Schema
export interface TestJobStreamsListByTestJobOutput {
  value: {
    id?: string;
    properties?: {
      jobStreamId?: string;
      time?: string;
      streamType?:
        | "Progress"
        | "Output"
        | "Warning"
        | "Error"
        | "Debug"
        | "Verbose"
        | "Any";
      streamText?: string;
      summary?: string | null;
      value?: Record<string, unknown>;
    };
  }[];
  nextLink?: string;
}
export const TestJobStreamsListByTestJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            jobStreamId: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
            streamType: Schema.optional(
              Schema.Literals([
                "Progress",
                "Output",
                "Warning",
                "Error",
                "Debug",
                "Verbose",
                "Any",
              ]),
            ),
            streamText: Schema.optional(Schema.String),
            summary: Schema.optional(Schema.NullOr(Schema.String)),
            value: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TestJobStreamsListByTestJobOutput>;

// The operation
/**
 * Retrieve a list of test job streams identified by runbook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 * @param $filter - The filter to apply on the operation.
 */
export const TestJobStreamsListByTestJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TestJobStreamsListByTestJobInput,
    outputSchema: TestJobStreamsListByTestJobOutput,
  }),
);
// Input Schema
export interface TestJobSuspendInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  runbookName: string;
}
export const TestJobSuspendInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  runbookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/testJob/suspend",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<TestJobSuspendInput>;

// Output Schema
export type TestJobSuspendOutput = void;
export const TestJobSuspendOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TestJobSuspendOutput>;

// The operation
/**
 * Suspend the test job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param runbookName - The runbook name.
 */
export const TestJobSuspend = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TestJobSuspendInput,
  outputSchema: TestJobSuspendOutput,
}));
// Input Schema
export interface UsagesListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const UsagesListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/usages",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<UsagesListByAutomationAccountInput>;

// Output Schema
export interface UsagesListByAutomationAccountOutput {
  value?: {
    id?: string;
    name?: { value?: string; localizedValue?: string };
    unit?: string;
    currentValue?: number;
    limit?: number;
    throttleStatus?: string;
  }[];
  nextLink?: string;
}
export const UsagesListByAutomationAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          unit: Schema.optional(Schema.String),
          currentValue: Schema.optional(Schema.Number),
          limit: Schema.optional(Schema.Number),
          throttleStatus: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UsagesListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve the usage for the account id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const UsagesListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsagesListByAutomationAccountInput,
    outputSchema: UsagesListByAutomationAccountOutput,
  }));
// Input Schema
export interface VariableCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  variableName: string;
  name: string;
  properties: { value?: string; description?: string; isEncrypted?: boolean };
}
export const VariableCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    variableName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    properties: Schema.Struct({
      value: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      isEncrypted: Schema.optional(Schema.Boolean),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<VariableCreateOrUpdateInput>;

// Output Schema
export interface VariableCreateOrUpdateOutput {
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
export const VariableCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VariableCreateOrUpdateOutput>;

// The operation
/**
 * Create a variable.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param variableName - The name of variable.
 */
export const VariableCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VariableCreateOrUpdateInput,
    outputSchema: VariableCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface VariableDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  variableName: string;
}
export const VariableDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  variableName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<VariableDeleteInput>;

// Output Schema
export type VariableDeleteOutput = void;
export const VariableDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VariableDeleteOutput>;

// The operation
/**
 * Delete the variable.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param variableName - The name of variable.
 */
export const VariableDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VariableDeleteInput,
  outputSchema: VariableDeleteOutput,
}));
// Input Schema
export interface VariableGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  variableName: string;
}
export const VariableGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  variableName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<VariableGetInput>;

// Output Schema
export interface VariableGetOutput {
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
export const VariableGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VariableGetOutput>;

// The operation
/**
 * Retrieve the variable identified by variable name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param variableName - The name of variable.
 */
export const VariableGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VariableGetInput,
  outputSchema: VariableGetOutput,
}));
// Input Schema
export interface VariableListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const VariableListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<VariableListByAutomationAccountInput>;

// Output Schema
export interface VariableListByAutomationAccountOutput {
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
export const VariableListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<VariableListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of variables.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const VariableListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VariableListByAutomationAccountInput,
    outputSchema: VariableListByAutomationAccountOutput,
  }));
// Input Schema
export interface VariableUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  variableName: string;
  name?: string;
  properties?: { value?: string; description?: string };
}
export const VariableUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  variableName: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      value: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<VariableUpdateInput>;

// Output Schema
export interface VariableUpdateOutput {
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
export const VariableUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VariableUpdateOutput>;

// The operation
/**
 * Update a variable.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param variableName - The name of variable.
 */
export const VariableUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VariableUpdateInput,
  outputSchema: VariableUpdateOutput,
}));
// Input Schema
export interface WatcherCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  watcherName: string;
  properties?: {
    executionFrequencyInSeconds?: number;
    scriptName?: string;
    scriptParameters?: Record<string, string>;
    scriptRunOn?: string;
    status?: string;
    creationTime?: string;
    lastModifiedTime?: string;
    lastModifiedBy?: string;
    description?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location?: string;
}
export const WatcherCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    watcherName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        executionFrequencyInSeconds: Schema.optional(Schema.Number),
        scriptName: Schema.optional(Schema.String),
        scriptParameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        scriptRunOn: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        creationTime: Schema.optional(Schema.String),
        lastModifiedTime: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<WatcherCreateOrUpdateInput>;

// Output Schema
export interface WatcherCreateOrUpdateOutput {
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
export const WatcherCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WatcherCreateOrUpdateOutput>;

// The operation
/**
 * Create the watcher identified by watcher name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param watcherName - The watcher name.
 */
export const WatcherCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WatcherCreateOrUpdateInput,
    outputSchema: WatcherCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface WatcherDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  watcherName: string;
}
export const WatcherDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<WatcherDeleteInput>;

// Output Schema
export type WatcherDeleteOutput = void;
export const WatcherDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WatcherDeleteOutput>;

// The operation
/**
 * Delete the watcher by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param watcherName - The watcher name.
 */
export const WatcherDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WatcherDeleteInput,
  outputSchema: WatcherDeleteOutput,
}));
// Input Schema
export interface WatcherGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  watcherName: string;
}
export const WatcherGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<WatcherGetInput>;

// Output Schema
export interface WatcherGetOutput {
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
export const WatcherGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WatcherGetOutput>;

// The operation
/**
 * Retrieve the watcher identified by watcher name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param watcherName - The watcher name.
 */
export const WatcherGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WatcherGetInput,
  outputSchema: WatcherGetOutput,
}));
// Input Schema
export interface WatcherListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
}
export const WatcherListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<WatcherListByAutomationAccountInput>;

// Output Schema
export interface WatcherListByAutomationAccountOutput {
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
export const WatcherListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<WatcherListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of watchers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param $filter - The filter to apply on the operation.
 */
export const WatcherListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WatcherListByAutomationAccountInput,
    outputSchema: WatcherListByAutomationAccountOutput,
  }));
// Input Schema
export interface WatcherStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  watcherName: string;
}
export const WatcherStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}/start",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<WatcherStartInput>;

// Output Schema
export type WatcherStartOutput = void;
export const WatcherStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WatcherStartOutput>;

// The operation
/**
 * Resume the watcher identified by watcher name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param watcherName - The watcher name.
 */
export const WatcherStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WatcherStartInput,
  outputSchema: WatcherStartOutput,
}));
// Input Schema
export interface WatcherStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  watcherName: string;
}
export const WatcherStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}/stop",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<WatcherStopInput>;

// Output Schema
export type WatcherStopOutput = void;
export const WatcherStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WatcherStopOutput>;

// The operation
/**
 * Resume the watcher identified by watcher name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param watcherName - The watcher name.
 */
export const WatcherStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WatcherStopInput,
  outputSchema: WatcherStopOutput,
}));
// Input Schema
export interface WatcherUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  watcherName: string;
  properties?: { executionFrequencyInSeconds?: number };
  name?: string;
}
export const WatcherUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  watcherName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      executionFrequencyInSeconds: Schema.optional(Schema.Number),
    }),
  ),
  name: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/watchers/{watcherName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<WatcherUpdateInput>;

// Output Schema
export interface WatcherUpdateOutput {
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
export const WatcherUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WatcherUpdateOutput>;

// The operation
/**
 * Update the watcher identified by watcher name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param watcherName - The watcher name.
 */
export const WatcherUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WatcherUpdateInput,
  outputSchema: WatcherUpdateOutput,
}));
// Input Schema
export interface WebhookCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  webhookName: string;
  name: string;
  properties: {
    isEnabled?: boolean;
    uri?: string;
    expiryTime?: string;
    parameters?: Record<string, string>;
    runbook?: { name?: string };
    runOn?: string;
  };
}
export const WebhookCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    webhookName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    properties: Schema.Struct({
      isEnabled: Schema.optional(Schema.Boolean),
      uri: Schema.optional(Schema.String),
      expiryTime: Schema.optional(Schema.String),
      parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      runbook: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
      runOn: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks/{webhookName}",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<WebhookCreateOrUpdateInput>;

// Output Schema
export interface WebhookCreateOrUpdateOutput {
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
export const WebhookCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WebhookCreateOrUpdateOutput>;

// The operation
/**
 * Create the webhook identified by webhook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param webhookName - The webhook name.
 */
export const WebhookCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebhookCreateOrUpdateInput,
    outputSchema: WebhookCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface WebhookDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  webhookName: string;
}
export const WebhookDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks/{webhookName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<WebhookDeleteInput>;

// Output Schema
export type WebhookDeleteOutput = void;
export const WebhookDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WebhookDeleteOutput>;

// The operation
/**
 * Delete the webhook by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param webhookName - The webhook name.
 */
export const WebhookDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhookDeleteInput,
  outputSchema: WebhookDeleteOutput,
}));
// Input Schema
export interface WebhookGenerateUriInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
}
export const WebhookGenerateUriInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks/generateUri",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<WebhookGenerateUriInput>;

// Output Schema
export type WebhookGenerateUriOutput = string;
export const WebhookGenerateUriOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String as unknown as Schema.Codec<WebhookGenerateUriOutput>;

// The operation
/**
 * Generates a Uri for use in creating a webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 */
export const WebhookGenerateUri = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhookGenerateUriInput,
  outputSchema: WebhookGenerateUriOutput,
}));
// Input Schema
export interface WebhookGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  webhookName: string;
}
export const WebhookGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks/{webhookName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<WebhookGetInput>;

// Output Schema
export interface WebhookGetOutput {
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
export const WebhookGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebhookGetOutput>;

// The operation
/**
 * Retrieve the webhook identified by webhook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param webhookName - The webhook name.
 */
export const WebhookGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhookGetInput,
  outputSchema: WebhookGetOutput,
}));
// Input Schema
export interface WebhookListByAutomationAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  $filter?: string;
}
export const WebhookListByAutomationAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    automationAccountName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks",
      apiVersion: "2024-10-23",
    }),
  ) as unknown as Schema.Codec<WebhookListByAutomationAccountInput>;

// Output Schema
export interface WebhookListByAutomationAccountOutput {
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
export const WebhookListByAutomationAccountOutput =
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
  }) as unknown as Schema.Codec<WebhookListByAutomationAccountOutput>;

// The operation
/**
 * Retrieve a list of webhooks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param $filter - The filter to apply on the operation.
 */
export const WebhookListByAutomationAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhookListByAutomationAccountInput,
    outputSchema: WebhookListByAutomationAccountOutput,
  }));
// Input Schema
export interface WebhookUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  automationAccountName: string;
  webhookName: string;
  name?: string;
  properties?: {
    isEnabled?: boolean;
    runOn?: string;
    parameters?: Record<string, string>;
    description?: string;
  };
}
export const WebhookUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  automationAccountName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      isEnabled: Schema.optional(Schema.Boolean),
      runOn: Schema.optional(Schema.String),
      parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      description: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/webhooks/{webhookName}",
    apiVersion: "2024-10-23",
  }),
) as unknown as Schema.Codec<WebhookUpdateInput>;

// Output Schema
export interface WebhookUpdateOutput {
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
export const WebhookUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebhookUpdateOutput>;

// The operation
/**
 * Update the webhook identified by webhook name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param automationAccountName - The name of the automation account.
 * @param webhookName - The webhook name.
 */
export const WebhookUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhookUpdateInput,
  outputSchema: WebhookUpdateOutput,
}));
