/**
 * Azure App API
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
export interface AgentsConnectorsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
  connectorName: string;
  properties?: {
    endpoint?: string;
    dataSource?: string;
    identity?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    deploymentError?: string;
    extendedProperties?: Record<string, unknown>;
    dataConnectorType?: string;
    source?: string;
  };
}
export const AgentsConnectorsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        endpoint: Schema.optional(Schema.String),
        dataSource: Schema.optional(Schema.String),
        identity: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        deploymentError: Schema.optional(Schema.String),
        extendedProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        dataConnectorType: Schema.optional(Schema.String),
        source: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}/connectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentsConnectorsCreateOrUpdateInput>;

// Output Schema
export interface AgentsConnectorsCreateOrUpdateOutput {
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
export const AgentsConnectorsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AgentsConnectorsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Agent Connector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 * @param connectorName - The name of the AgentConnector
 */
export const AgentsConnectorsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentsConnectorsCreateOrUpdateInput,
    outputSchema: AgentsConnectorsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AgentsConnectorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
  connectorName: string;
}
export const AgentsConnectorsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}/connectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentsConnectorsDeleteInput>;

// Output Schema
export type AgentsConnectorsDeleteOutput = void;
export const AgentsConnectorsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentsConnectorsDeleteOutput>;

// The operation
/**
 * Delete an Agent Connector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 * @param connectorName - The name of the AgentConnector
 */
export const AgentsConnectorsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsConnectorsDeleteInput,
  outputSchema: AgentsConnectorsDeleteOutput,
}));
// Input Schema
export interface AgentsConnectorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
  connectorName: string;
}
export const AgentsConnectorsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}/connectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentsConnectorsGetInput>;

// Output Schema
export interface AgentsConnectorsGetOutput {
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
export const AgentsConnectorsGetOutput =
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
  }) as unknown as Schema.Codec<AgentsConnectorsGetOutput>;

// The operation
/**
 * Get the properties of an Agent Connector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 * @param connectorName - The name of the AgentConnector
 */
export const AgentsConnectorsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsConnectorsGetInput,
  outputSchema: AgentsConnectorsGetOutput,
}));
// Input Schema
export interface AgentsConnectorsListByAgentInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
}
export const AgentsConnectorsListByAgentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}/connectors",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentsConnectorsListByAgentInput>;

// Output Schema
export interface AgentsConnectorsListByAgentOutput {
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
export const AgentsConnectorsListByAgentOutput =
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
  }) as unknown as Schema.Codec<AgentsConnectorsListByAgentOutput>;

// The operation
/**
 * Get all the connectors for an Agent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 */
export const AgentsConnectorsListByAgent = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsConnectorsListByAgentInput,
  outputSchema: AgentsConnectorsListByAgentOutput,
}));
// Input Schema
export interface AgentsConnectorsListSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
  connectorName: string;
}
export const AgentsConnectorsListSecretsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}/connectors/{connectorName}/listSecrets",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentsConnectorsListSecretsInput>;

// Output Schema
export interface AgentsConnectorsListSecretsOutput {
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
export const AgentsConnectorsListSecretsOutput =
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
  }) as unknown as Schema.Codec<AgentsConnectorsListSecretsOutput>;

// The operation
/**
 * Get a Data Connector with secrets from an Agent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 * @param connectorName - The name of the AgentConnector
 */
export const AgentsConnectorsListSecrets = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsConnectorsListSecretsInput,
  outputSchema: AgentsConnectorsListSecretsOutput,
}));
// Input Schema
export interface AgentsConnectorsListWithSecretsByAgentInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
}
export const AgentsConnectorsListWithSecretsByAgentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}/listConnectorsWithSecrets",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentsConnectorsListWithSecretsByAgentInput>;

// Output Schema
export interface AgentsConnectorsListWithSecretsByAgentOutput {
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
export const AgentsConnectorsListWithSecretsByAgentOutput =
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
  }) as unknown as Schema.Codec<AgentsConnectorsListWithSecretsByAgentOutput>;

// The operation
/**
 * List all Data Connectors with secrets from an Agent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 */
export const AgentsConnectorsListWithSecretsByAgent =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentsConnectorsListWithSecretsByAgentInput,
    outputSchema: AgentsConnectorsListWithSecretsByAgentOutput,
  }));
// Input Schema
export interface AgentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    agentEndpoint?: string;
    runningState?: string;
    powerState?: "Running" | "Stopped";
    agentSpaceId?: string;
    knowledgeGraphConfiguration?: {
      identity?: string;
      managedResources?: string[];
    };
    actionConfiguration?: {
      identity?: string;
      mode?: "Autonomous" | "Review" | "ReadOnly";
      accessLevel?: "Low" | "High";
    };
    logConfiguration?: {
      applicationInsightsConfiguration?: {
        appId?: string;
        connectionString?: string | Redacted.Redacted<string>;
      };
    };
    incidentManagementConfiguration?: {
      type?: string;
      connectionName?: string;
      connectionUrl?: string;
      connectionKey?: string;
      oboUser?: string;
    };
    upgradeChannel?: "Preview" | "Stable";
    agentIdentity?: {
      enabled?: boolean;
      clientId?: string;
      initialSponsorGroupId: string;
    };
    defaultModel?: { provider?: string; name?: string };
  };
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const AgentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        agentEndpoint: Schema.optional(Schema.String),
        runningState: Schema.optional(Schema.String),
        powerState: Schema.optional(Schema.Literals(["Running", "Stopped"])),
        agentSpaceId: Schema.optional(Schema.String),
        knowledgeGraphConfiguration: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(Schema.String),
            managedResources: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        actionConfiguration: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(Schema.String),
            mode: Schema.optional(
              Schema.Literals(["Autonomous", "Review", "ReadOnly"]),
            ),
            accessLevel: Schema.optional(Schema.Literals(["Low", "High"])),
          }),
        ),
        logConfiguration: Schema.optional(
          Schema.Struct({
            applicationInsightsConfiguration: Schema.optional(
              Schema.Struct({
                appId: Schema.optional(Schema.String),
                connectionString: Schema.optional(SensitiveString),
              }),
            ),
          }),
        ),
        incidentManagementConfiguration: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            connectionName: Schema.optional(Schema.String),
            connectionUrl: Schema.optional(Schema.String),
            connectionKey: Schema.optional(Schema.String),
            oboUser: Schema.optional(Schema.String),
          }),
        ),
        upgradeChannel: Schema.optional(Schema.Literals(["Preview", "Stable"])),
        agentIdentity: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            clientId: Schema.optional(Schema.String),
            initialSponsorGroupId: Schema.String,
          }),
        ),
        defaultModel: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentsCreateOrUpdateInput>;

// Output Schema
export interface AgentsCreateOrUpdateOutput {
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
export const AgentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AgentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Agent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 */
export const AgentsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsCreateOrUpdateInput,
  outputSchema: AgentsCreateOrUpdateOutput,
}));
// Input Schema
export interface AgentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
}
export const AgentsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  agentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AgentsDeleteInput>;

// Output Schema
export type AgentsDeleteOutput = void;
export const AgentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentsDeleteOutput>;

// The operation
/**
 * Delete an Agent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 */
export const AgentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsDeleteInput,
  outputSchema: AgentsDeleteOutput,
}));
// Input Schema
export interface AgentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
}
export const AgentsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  agentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AgentsGetInput>;

// Output Schema
export interface AgentsGetOutput {
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
export const AgentsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgentsGetOutput>;

// The operation
/**
 * Get the properties of an Agent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 */
export const AgentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsGetInput,
  outputSchema: AgentsGetOutput,
}));
// Input Schema
export interface AgentsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AgentsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentsListByResourceGroupInput>;

// Output Schema
export interface AgentsListByResourceGroupOutput {
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
export const AgentsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AgentsListByResourceGroupOutput>;

// The operation
/**
 * Get all the agents in a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AgentsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsListByResourceGroupInput,
  outputSchema: AgentsListByResourceGroupOutput,
}));
// Input Schema
export interface AgentsListBySubscriptionInput {
  subscriptionId: string;
}
export const AgentsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/agents",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentsListBySubscriptionInput>;

// Output Schema
export interface AgentsListBySubscriptionOutput {
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
export const AgentsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AgentsListBySubscriptionOutput>;

// The operation
/**
 * Get all agents for a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AgentsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsListBySubscriptionInput,
  outputSchema: AgentsListBySubscriptionOutput,
}));
// Input Schema
export interface AgentSpacesConnectorsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentSpaceName: string;
  connectorName: string;
  properties?: {
    endpoint?: string;
    dataSource?: string;
    identity?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    deploymentError?: string;
    extendedProperties?: Record<string, unknown>;
    dataConnectorType?: string;
  };
}
export const AgentSpacesConnectorsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentSpaceName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        endpoint: Schema.optional(Schema.String),
        dataSource: Schema.optional(Schema.String),
        identity: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        deploymentError: Schema.optional(Schema.String),
        extendedProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        dataConnectorType: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces/{agentSpaceName}/connectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentSpacesConnectorsCreateOrUpdateInput>;

// Output Schema
export interface AgentSpacesConnectorsCreateOrUpdateOutput {
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
export const AgentSpacesConnectorsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AgentSpacesConnectorsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Agent Space Connector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentSpaceName - The name of the AgentSpace
 * @param connectorName - The name of the AgentSpaceConnector
 */
export const AgentSpacesConnectorsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentSpacesConnectorsCreateOrUpdateInput,
    outputSchema: AgentSpacesConnectorsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AgentSpacesConnectorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentSpaceName: string;
  connectorName: string;
}
export const AgentSpacesConnectorsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentSpaceName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces/{agentSpaceName}/connectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentSpacesConnectorsDeleteInput>;

// Output Schema
export type AgentSpacesConnectorsDeleteOutput = void;
export const AgentSpacesConnectorsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentSpacesConnectorsDeleteOutput>;

// The operation
/**
 * Delete an Agent Space Connector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentSpaceName - The name of the AgentSpace
 * @param connectorName - The name of the AgentSpaceConnector
 */
export const AgentSpacesConnectorsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentSpacesConnectorsDeleteInput,
  outputSchema: AgentSpacesConnectorsDeleteOutput,
}));
// Input Schema
export interface AgentSpacesConnectorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentSpaceName: string;
  connectorName: string;
}
export const AgentSpacesConnectorsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentSpaceName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces/{agentSpaceName}/connectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentSpacesConnectorsGetInput>;

// Output Schema
export interface AgentSpacesConnectorsGetOutput {
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
export const AgentSpacesConnectorsGetOutput =
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
  }) as unknown as Schema.Codec<AgentSpacesConnectorsGetOutput>;

// The operation
/**
 * Get the properties of an Agent Space Connector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentSpaceName - The name of the AgentSpace
 * @param connectorName - The name of the AgentSpaceConnector
 */
export const AgentSpacesConnectorsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentSpacesConnectorsGetInput,
  outputSchema: AgentSpacesConnectorsGetOutput,
}));
// Input Schema
export interface AgentSpacesConnectorsListAllSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentSpaceName: string;
}
export const AgentSpacesConnectorsListAllSecretsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentSpaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces/{agentSpaceName}/listConnectorsWithSecrets",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentSpacesConnectorsListAllSecretsInput>;

// Output Schema
export interface AgentSpacesConnectorsListAllSecretsOutput {
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
export const AgentSpacesConnectorsListAllSecretsOutput =
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
  }) as unknown as Schema.Codec<AgentSpacesConnectorsListAllSecretsOutput>;

// The operation
/**
 * List all secrets for AgentSpace Connectors
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentSpaceName - The name of the AgentSpace
 */
export const AgentSpacesConnectorsListAllSecrets =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentSpacesConnectorsListAllSecretsInput,
    outputSchema: AgentSpacesConnectorsListAllSecretsOutput,
  }));
// Input Schema
export interface AgentSpacesConnectorsListByAgentSpaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentSpaceName: string;
}
export const AgentSpacesConnectorsListByAgentSpaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentSpaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces/{agentSpaceName}/connectors",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentSpacesConnectorsListByAgentSpaceInput>;

// Output Schema
export interface AgentSpacesConnectorsListByAgentSpaceOutput {
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
export const AgentSpacesConnectorsListByAgentSpaceOutput =
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
  }) as unknown as Schema.Codec<AgentSpacesConnectorsListByAgentSpaceOutput>;

// The operation
/**
 * Get all the connectors for an Agent Space
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentSpaceName - The name of the AgentSpace
 */
export const AgentSpacesConnectorsListByAgentSpace =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentSpacesConnectorsListByAgentSpaceInput,
    outputSchema: AgentSpacesConnectorsListByAgentSpaceOutput,
  }));
// Input Schema
export interface AgentSpacesConnectorsListSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentSpaceName: string;
  connectorName: string;
}
export const AgentSpacesConnectorsListSecretsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentSpaceName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces/{agentSpaceName}/connectors/{connectorName}/listSecrets",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentSpacesConnectorsListSecretsInput>;

// Output Schema
export interface AgentSpacesConnectorsListSecretsOutput {
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
export const AgentSpacesConnectorsListSecretsOutput =
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
  }) as unknown as Schema.Codec<AgentSpacesConnectorsListSecretsOutput>;

// The operation
/**
 * List secrets for an Agent Space Connector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentSpaceName - The name of the AgentSpace
 * @param connectorName - The name of the AgentSpaceConnector
 */
export const AgentSpacesConnectorsListSecrets =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentSpacesConnectorsListSecretsInput,
    outputSchema: AgentSpacesConnectorsListSecretsOutput,
  }));
// Input Schema
export interface AgentSpacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentSpaceName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    currentAgentCount?: number;
    memberAgents?: string[];
    lastPolicyPropagation?: string;
    complianceStatus?: {
      isCompliant: boolean;
      complianceIssues?: string[];
      lastComplianceCheck?: string;
    };
    description?: string;
    policies?: {
      genevaActionsConfiguration?: {
        acisEndpoint?: string;
        clientId?: string;
        certificateSubjectName?: string;
        authenticationMode?: "OAuth" | "WS-Trust";
        extensionName: string;
        allowedActions?: {
          actionName?: string;
          extension?: string;
          actionParameters?: { name?: string; type?: string }[];
          approvalRequired?: boolean;
        }[];
        certificateSubjectAlternativeName?: string;
      };
    };
    maxAgentCount?: number;
    serviceTreeId?: string;
  };
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const AgentSpacesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    agentSpaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        currentAgentCount: Schema.optional(Schema.Number),
        memberAgents: Schema.optional(Schema.Array(Schema.String)),
        lastPolicyPropagation: Schema.optional(Schema.String),
        complianceStatus: Schema.optional(
          Schema.Struct({
            isCompliant: Schema.Boolean,
            complianceIssues: Schema.optional(Schema.Array(Schema.String)),
            lastComplianceCheck: Schema.optional(Schema.String),
          }),
        ),
        description: Schema.optional(Schema.String),
        policies: Schema.optional(
          Schema.Struct({
            genevaActionsConfiguration: Schema.optional(
              Schema.Struct({
                acisEndpoint: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
                certificateSubjectName: Schema.optional(Schema.String),
                authenticationMode: Schema.optional(
                  Schema.Literals(["OAuth", "WS-Trust"]),
                ),
                extensionName: Schema.String,
                allowedActions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      actionName: Schema.optional(Schema.String),
                      extension: Schema.optional(Schema.String),
                      actionParameters: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            type: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      approvalRequired: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
                certificateSubjectAlternativeName: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
          }),
        ),
        maxAgentCount: Schema.optional(Schema.Number),
        serviceTreeId: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces/{agentSpaceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentSpacesCreateOrUpdateInput>;

// Output Schema
export interface AgentSpacesCreateOrUpdateOutput {
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
export const AgentSpacesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AgentSpacesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Agent Space
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentSpaceName - The name of the AgentSpace
 */
export const AgentSpacesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentSpacesCreateOrUpdateInput,
  outputSchema: AgentSpacesCreateOrUpdateOutput,
}));
// Input Schema
export interface AgentSpacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentSpaceName: string;
}
export const AgentSpacesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  agentSpaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces/{agentSpaceName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AgentSpacesDeleteInput>;

// Output Schema
export type AgentSpacesDeleteOutput = void;
export const AgentSpacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentSpacesDeleteOutput>;

// The operation
/**
 * Delete an Agent Space
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentSpaceName - The name of the AgentSpace
 */
export const AgentSpacesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentSpacesDeleteInput,
  outputSchema: AgentSpacesDeleteOutput,
}));
// Input Schema
export interface AgentSpacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentSpaceName: string;
}
export const AgentSpacesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  agentSpaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces/{agentSpaceName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AgentSpacesGetInput>;

// Output Schema
export interface AgentSpacesGetOutput {
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
export const AgentSpacesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgentSpacesGetOutput>;

// The operation
/**
 * Get the properties of an Agent Space
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentSpaceName - The name of the AgentSpace
 */
export const AgentSpacesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentSpacesGetInput,
  outputSchema: AgentSpacesGetOutput,
}));
// Input Schema
export interface AgentSpacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AgentSpacesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentSpacesListByResourceGroupInput>;

// Output Schema
export interface AgentSpacesListByResourceGroupOutput {
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
export const AgentSpacesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AgentSpacesListByResourceGroupOutput>;

// The operation
/**
 * Get all the agent spaces in a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AgentSpacesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentSpacesListByResourceGroupInput,
    outputSchema: AgentSpacesListByResourceGroupOutput,
  }));
// Input Schema
export interface AgentSpacesListBySubscriptionInput {
  subscriptionId: string;
}
export const AgentSpacesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/agentSpaces",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AgentSpacesListBySubscriptionInput>;

// Output Schema
export interface AgentSpacesListBySubscriptionOutput {
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
export const AgentSpacesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AgentSpacesListBySubscriptionOutput>;

// The operation
/**
 * Get all agent spaces for a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AgentSpacesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AgentSpacesListBySubscriptionInput,
    outputSchema: AgentSpacesListBySubscriptionOutput,
  }));
// Input Schema
export interface AgentSpacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentSpaceName: string;
  tags?: Record<string, string>;
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
    >;
  };
  properties?: {
    description?: string;
    policies?: {
      genevaActionsConfiguration?: {
        acisEndpoint?: string;
        clientId?: string;
        certificateSubjectName?: string;
        authenticationMode?: "OAuth" | "WS-Trust";
        extensionName?: string;
        allowedActions?: {
          actionName?: string;
          extension?: string;
          actionParameters?: { name?: string; type?: string }[];
          approvalRequired?: boolean;
        }[];
      };
    };
    maxAgentCount?: number;
    serviceTreeId?: string;
  };
}
export const AgentSpacesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  agentSpaceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      policies: Schema.optional(
        Schema.Struct({
          genevaActionsConfiguration: Schema.optional(
            Schema.Struct({
              acisEndpoint: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
              certificateSubjectName: Schema.optional(Schema.String),
              authenticationMode: Schema.optional(
                Schema.Literals(["OAuth", "WS-Trust"]),
              ),
              extensionName: Schema.optional(Schema.String),
              allowedActions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    actionName: Schema.optional(Schema.String),
                    extension: Schema.optional(Schema.String),
                    actionParameters: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          type: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    approvalRequired: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      maxAgentCount: Schema.optional(Schema.Number),
      serviceTreeId: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agentSpaces/{agentSpaceName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AgentSpacesUpdateInput>;

// Output Schema
export interface AgentSpacesUpdateOutput {
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
export const AgentSpacesUpdateOutput =
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
  }) as unknown as Schema.Codec<AgentSpacesUpdateOutput>;

// The operation
/**
 * Update Agent Space's properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentSpaceName - The name of the AgentSpace
 */
export const AgentSpacesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentSpacesUpdateInput,
  outputSchema: AgentSpacesUpdateOutput,
}));
// Input Schema
export interface AgentsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
}
export const AgentsStartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  agentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}/start",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AgentsStartInput>;

// Output Schema
export interface AgentsStartOutput {
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
export const AgentsStartOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgentsStartOutput>;

// The operation
/**
 * Start an Agent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 */
export const AgentsStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsStartInput,
  outputSchema: AgentsStartOutput,
}));
// Input Schema
export interface AgentsStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
}
export const AgentsStopInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  agentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}/stop",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AgentsStopInput>;

// Output Schema
export interface AgentsStopOutput {
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
export const AgentsStopOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgentsStopOutput>;

// The operation
/**
 * Stop an Agent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 */
export const AgentsStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsStopInput,
  outputSchema: AgentsStopOutput,
}));
// Input Schema
export interface AgentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  agentName: string;
  tags?: Record<string, string>;
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
    >;
  };
  properties?: {
    agentSpaceId?: string;
    knowledgeGraphConfiguration?: {
      identity?: string;
      managedResources?: string[];
    };
    actionConfiguration?: {
      identity?: string;
      mode?: "Autonomous" | "Review" | "ReadOnly";
      accessLevel?: "Low" | "High";
    };
    logConfiguration?: {
      applicationInsightsConfiguration?: {
        appId?: string;
        connectionString?: string | Redacted.Redacted<string>;
      };
    };
    incidentManagementConfiguration?: {
      type?: string;
      connectionName?: string;
      connectionUrl?: string;
      connectionKey?: string;
      oboUser?: string;
    };
    upgradeChannel?: "Preview" | "Stable";
    agentIdentity?: { initialSponsorGroupId?: string };
    defaultModel?: { provider?: string; name?: string };
  };
}
export const AgentsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  agentName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  properties: Schema.optional(
    Schema.Struct({
      agentSpaceId: Schema.optional(Schema.String),
      knowledgeGraphConfiguration: Schema.optional(
        Schema.Struct({
          identity: Schema.optional(Schema.String),
          managedResources: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      actionConfiguration: Schema.optional(
        Schema.Struct({
          identity: Schema.optional(Schema.String),
          mode: Schema.optional(
            Schema.Literals(["Autonomous", "Review", "ReadOnly"]),
          ),
          accessLevel: Schema.optional(Schema.Literals(["Low", "High"])),
        }),
      ),
      logConfiguration: Schema.optional(
        Schema.Struct({
          applicationInsightsConfiguration: Schema.optional(
            Schema.Struct({
              appId: Schema.optional(Schema.String),
              connectionString: Schema.optional(SensitiveString),
            }),
          ),
        }),
      ),
      incidentManagementConfiguration: Schema.optional(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          connectionName: Schema.optional(Schema.String),
          connectionUrl: Schema.optional(Schema.String),
          connectionKey: Schema.optional(Schema.String),
          oboUser: Schema.optional(Schema.String),
        }),
      ),
      upgradeChannel: Schema.optional(Schema.Literals(["Preview", "Stable"])),
      agentIdentity: Schema.optional(
        Schema.Struct({
          initialSponsorGroupId: Schema.optional(Schema.String),
        }),
      ),
      defaultModel: Schema.optional(
        Schema.Struct({
          provider: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/agents/{agentName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AgentsUpdateInput>;

// Output Schema
export interface AgentsUpdateOutput {
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
export const AgentsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgentsUpdateOutput>;

// The operation
/**
 * Update Agent's properties
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param agentName - The name of the Agent
 */
export const AgentsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AgentsUpdateInput,
  outputSchema: AgentsUpdateOutput,
}));
// Input Schema
export interface AvailableWorkloadProfilesGetInput {
  subscriptionId: string;
  location: string;
}
export const AvailableWorkloadProfilesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/locations/{location}/availableManagedEnvironmentsWorkloadProfileTypes",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AvailableWorkloadProfilesGetInput>;

// Output Schema
export interface AvailableWorkloadProfilesGetOutput {
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
export const AvailableWorkloadProfilesGetOutput =
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
  }) as unknown as Schema.Codec<AvailableWorkloadProfilesGetOutput>;

// The operation
/**
 * Get available workload profiles by location.
 *
 * Get all available workload profiles for a location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const AvailableWorkloadProfilesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AvailableWorkloadProfilesGetInput,
    outputSchema: AvailableWorkloadProfilesGetOutput,
  }));
// Input Schema
export interface BillingMetersGetInput {
  subscriptionId: string;
  location: string;
}
export const BillingMetersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/locations/{location}/billingMeters",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<BillingMetersGetInput>;

// Output Schema
export interface BillingMetersGetOutput {
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
export const BillingMetersGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BillingMetersGetOutput>;

// The operation
/**
 * Get billing meters by location.
 *
 * Get all billingMeters for a location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const BillingMetersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BillingMetersGetInput,
  outputSchema: BillingMetersGetOutput,
}));
// Input Schema
export interface CertificatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  certificateName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "DeleteFailed"
      | "Pending"
      | "Deleting";
    deploymentErrors?: string;
    certificateKeyVaultProperties?: { identity?: string; keyVaultUrl?: string };
    password?: string | Redacted.Redacted<string>;
    subjectName?: string;
    subjectAlternativeNames?: string[];
    value?: string;
    issuer?: string;
    issueDate?: string;
    expirationDate?: string;
    thumbprint?: string;
    valid?: boolean;
    publicKeyHash?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const CertificatesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "DeleteFailed",
            "Pending",
            "Deleting",
          ]),
        ),
        deploymentErrors: Schema.optional(Schema.String),
        certificateKeyVaultProperties: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(Schema.String),
            keyVaultUrl: Schema.optional(Schema.String),
          }),
        ),
        password: Schema.optional(SensitiveString),
        subjectName: Schema.optional(Schema.String),
        subjectAlternativeNames: Schema.optional(Schema.Array(Schema.String)),
        value: Schema.optional(Schema.String),
        issuer: Schema.optional(Schema.String),
        issueDate: Schema.optional(Schema.String),
        expirationDate: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        valid: Schema.optional(Schema.Boolean),
        publicKeyHash: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/certificates/{certificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CertificatesCreateOrUpdateInput>;

// Output Schema
export interface CertificatesCreateOrUpdateOutput {
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
export const CertificatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CertificatesCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update a Certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 * @param certificateName - Name of the Certificate.
 */
export const CertificatesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesCreateOrUpdateInput,
  outputSchema: CertificatesCreateOrUpdateOutput,
}));
// Input Schema
export interface CertificatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  certificateName: string;
}
export const CertificatesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/certificates/{certificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CertificatesDeleteInput>;

// Output Schema
export type CertificatesDeleteOutput = void;
export const CertificatesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CertificatesDeleteOutput>;

// The operation
/**
 * Deletes the specified Certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 * @param certificateName - Name of the Certificate.
 */
export const CertificatesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesDeleteInput,
  outputSchema: CertificatesDeleteOutput,
}));
// Input Schema
export interface CertificatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  certificateName: string;
}
export const CertificatesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  environmentName: Schema.String.pipe(T.PathParam()),
  certificateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/certificates/{certificateName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CertificatesGetInput>;

// Output Schema
export interface CertificatesGetOutput {
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
export const CertificatesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CertificatesGetOutput>;

// The operation
/**
 * Get the specified Certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 * @param certificateName - Name of the Certificate.
 */
export const CertificatesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesGetInput,
  outputSchema: CertificatesGetOutput,
}));
// Input Schema
export interface CertificatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const CertificatesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  environmentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/certificates",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CertificatesListInput>;

// Output Schema
export interface CertificatesListOutput {
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
export const CertificatesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CertificatesListOutput>;

// The operation
/**
 * Get the Certificates in a given managed environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 */
export const CertificatesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesListInput,
  outputSchema: CertificatesListOutput,
}));
// Input Schema
export interface CertificatesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  certificateName: string;
  tags?: Record<string, string>;
}
export const CertificatesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/certificates/{certificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CertificatesUpdateInput>;

// Output Schema
export interface CertificatesUpdateOutput {
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
export const CertificatesUpdateOutput =
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
  }) as unknown as Schema.Codec<CertificatesUpdateOutput>;

// The operation
/**
 * Update properties of a certificate
 *
 * Patches a certificate. Currently only patching of tags is supported
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 * @param certificateName - Name of the Certificate.
 */
export const CertificatesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesUpdateInput,
  outputSchema: CertificatesUpdateOutput,
}));
// Input Schema
export interface ConnectedEnvironmentsCertificatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  certificateName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "DeleteFailed"
      | "Pending"
      | "Deleting";
    deploymentErrors?: string;
    certificateKeyVaultProperties?: { identity?: string; keyVaultUrl?: string };
    password?: string | Redacted.Redacted<string>;
    subjectName?: string;
    subjectAlternativeNames?: string[];
    value?: string;
    issuer?: string;
    issueDate?: string;
    expirationDate?: string;
    thumbprint?: string;
    valid?: boolean;
    publicKeyHash?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ConnectedEnvironmentsCertificatesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "DeleteFailed",
            "Pending",
            "Deleting",
          ]),
        ),
        deploymentErrors: Schema.optional(Schema.String),
        certificateKeyVaultProperties: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(Schema.String),
            keyVaultUrl: Schema.optional(Schema.String),
          }),
        ),
        password: Schema.optional(SensitiveString),
        subjectName: Schema.optional(Schema.String),
        subjectAlternativeNames: Schema.optional(Schema.Array(Schema.String)),
        value: Schema.optional(Schema.String),
        issuer: Schema.optional(Schema.String),
        issueDate: Schema.optional(Schema.String),
        expirationDate: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        valid: Schema.optional(Schema.Boolean),
        publicKeyHash: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/certificates/{certificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsCertificatesCreateOrUpdateInput>;

// Output Schema
export interface ConnectedEnvironmentsCertificatesCreateOrUpdateOutput {
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
export const ConnectedEnvironmentsCertificatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsCertificatesCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update a Certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the Connected Environment.
 * @param certificateName - Name of the Certificate.
 */
export const ConnectedEnvironmentsCertificatesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsCertificatesCreateOrUpdateInput,
    outputSchema: ConnectedEnvironmentsCertificatesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsCertificatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  certificateName: string;
}
export const ConnectedEnvironmentsCertificatesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/certificates/{certificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsCertificatesDeleteInput>;

// Output Schema
export type ConnectedEnvironmentsCertificatesDeleteOutput = void;
export const ConnectedEnvironmentsCertificatesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectedEnvironmentsCertificatesDeleteOutput>;

// The operation
/**
 * Deletes the specified Certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the Connected Environment.
 * @param certificateName - Name of the Certificate.
 */
export const ConnectedEnvironmentsCertificatesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsCertificatesDeleteInput,
    outputSchema: ConnectedEnvironmentsCertificatesDeleteOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsCertificatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  certificateName: string;
}
export const ConnectedEnvironmentsCertificatesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/certificates/{certificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsCertificatesGetInput>;

// Output Schema
export interface ConnectedEnvironmentsCertificatesGetOutput {
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
export const ConnectedEnvironmentsCertificatesGetOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsCertificatesGetOutput>;

// The operation
/**
 * Get the specified Certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the Connected Environment.
 * @param certificateName - Name of the Certificate.
 */
export const ConnectedEnvironmentsCertificatesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsCertificatesGetInput,
    outputSchema: ConnectedEnvironmentsCertificatesGetOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsCertificatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
}
export const ConnectedEnvironmentsCertificatesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/certificates",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsCertificatesListInput>;

// Output Schema
export interface ConnectedEnvironmentsCertificatesListOutput {
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
export const ConnectedEnvironmentsCertificatesListOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsCertificatesListOutput>;

// The operation
/**
 * Get the Certificates in a given connected environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the Connected Environment.
 */
export const ConnectedEnvironmentsCertificatesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsCertificatesListInput,
    outputSchema: ConnectedEnvironmentsCertificatesListOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsCertificatesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  certificateName: string;
  tags?: Record<string, string>;
}
export const ConnectedEnvironmentsCertificatesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/certificates/{certificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsCertificatesUpdateInput>;

// Output Schema
export interface ConnectedEnvironmentsCertificatesUpdateOutput {
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
export const ConnectedEnvironmentsCertificatesUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsCertificatesUpdateOutput>;

// The operation
/**
 * Update properties of a certificate
 *
 * Patches a certificate. Currently only patching of tags is supported
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the Connected Environment.
 * @param certificateName - Name of the Certificate.
 */
export const ConnectedEnvironmentsCertificatesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsCertificatesUpdateInput,
    outputSchema: ConnectedEnvironmentsCertificatesUpdateOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  name?: string;
  type?: string;
}
export const ConnectedEnvironmentsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/checkNameAvailability",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsCheckNameAvailabilityInput>;

// Output Schema
export interface ConnectedEnvironmentsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const ConnectedEnvironmentsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConnectedEnvironmentsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks the resource connectedEnvironmentName availability.
 *
 * Checks if resource connectedEnvironmentName is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connectedEnvironment.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const ConnectedEnvironmentsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsCheckNameAvailabilityInput,
    outputSchema: ConnectedEnvironmentsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Waiting"
      | "InitializationInProgress"
      | "InfrastructureSetupInProgress"
      | "InfrastructureSetupComplete"
      | "ScheduledForDelete";
    deploymentErrors?: string;
    defaultDomain?: string;
    staticIp?: string;
    daprAIConnectionString?: string;
    customDomainConfiguration?: {
      customDomainVerificationId?: string;
      dnsSuffix?: string;
      certificateKeyVaultProperties?: {
        identity?: string;
        keyVaultUrl?: string;
      };
      certificateValue?: string;
      certificatePassword?: string | Redacted.Redacted<string>;
      expirationDate?: string;
      thumbprint?: string;
      subjectName?: string;
    };
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const ConnectedEnvironmentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Waiting",
            "InitializationInProgress",
            "InfrastructureSetupInProgress",
            "InfrastructureSetupComplete",
            "ScheduledForDelete",
          ]),
        ),
        deploymentErrors: Schema.optional(Schema.String),
        defaultDomain: Schema.optional(Schema.String),
        staticIp: Schema.optional(Schema.String),
        daprAIConnectionString: Schema.optional(Schema.String),
        customDomainConfiguration: Schema.optional(
          Schema.Struct({
            customDomainVerificationId: Schema.optional(Schema.String),
            dnsSuffix: Schema.optional(Schema.String),
            certificateKeyVaultProperties: Schema.optional(
              Schema.Struct({
                identity: Schema.optional(Schema.String),
                keyVaultUrl: Schema.optional(Schema.String),
              }),
            ),
            certificateValue: Schema.optional(Schema.String),
            certificatePassword: Schema.optional(SensitiveString),
            expirationDate: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subjectName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsCreateOrUpdateInput>;

// Output Schema
export interface ConnectedEnvironmentsCreateOrUpdateOutput {
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
export const ConnectedEnvironmentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an connectedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connectedEnvironment.
 */
export const ConnectedEnvironmentsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsCreateOrUpdateInput,
    outputSchema: ConnectedEnvironmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsDaprComponentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  componentName: string;
  properties?: {
    componentType?: string;
    version?: string;
    ignoreErrors?: boolean;
    initTimeout?: string;
    secrets?: {
      name?: string;
      value?: string;
      identity?: string;
      keyVaultUrl?: string;
    }[];
    secretStoreComponent?: string;
    metadata?: { name?: string; value?: string; secretRef?: string }[];
    scopes?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    deploymentErrors?: string;
  };
}
export const ConnectedEnvironmentsDaprComponentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        componentType: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        ignoreErrors: Schema.optional(Schema.Boolean),
        initTimeout: Schema.optional(Schema.String),
        secrets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              identity: Schema.optional(Schema.String),
              keyVaultUrl: Schema.optional(Schema.String),
            }),
          ),
        ),
        secretStoreComponent: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              secretRef: Schema.optional(Schema.String),
            }),
          ),
        ),
        scopes: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        deploymentErrors: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/daprComponents/{componentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsDaprComponentsCreateOrUpdateInput>;

// Output Schema
export interface ConnectedEnvironmentsDaprComponentsCreateOrUpdateOutput {
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
export const ConnectedEnvironmentsDaprComponentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsDaprComponentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Dapr Component.
 *
 * Creates or updates a Dapr Component in a connected environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connectedEnvironment.
 * @param componentName - Name of the Dapr Component.
 */
export const ConnectedEnvironmentsDaprComponentsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsDaprComponentsCreateOrUpdateInput,
    outputSchema: ConnectedEnvironmentsDaprComponentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsDaprComponentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  componentName: string;
}
export const ConnectedEnvironmentsDaprComponentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/daprComponents/{componentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsDaprComponentsDeleteInput>;

// Output Schema
export type ConnectedEnvironmentsDaprComponentsDeleteOutput = void;
export const ConnectedEnvironmentsDaprComponentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectedEnvironmentsDaprComponentsDeleteOutput>;

// The operation
/**
 * Delete a Dapr Component.
 *
 * Delete a Dapr Component from a connected environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connected environment.
 * @param componentName - Name of the Dapr Component.
 */
export const ConnectedEnvironmentsDaprComponentsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsDaprComponentsDeleteInput,
    outputSchema: ConnectedEnvironmentsDaprComponentsDeleteOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsDaprComponentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  componentName: string;
}
export const ConnectedEnvironmentsDaprComponentsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/daprComponents/{componentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsDaprComponentsGetInput>;

// Output Schema
export interface ConnectedEnvironmentsDaprComponentsGetOutput {
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
export const ConnectedEnvironmentsDaprComponentsGetOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsDaprComponentsGetOutput>;

// The operation
/**
 * Get a dapr component.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connected environment.
 * @param componentName - Name of the Dapr Component.
 */
export const ConnectedEnvironmentsDaprComponentsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsDaprComponentsGetInput,
    outputSchema: ConnectedEnvironmentsDaprComponentsGetOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsDaprComponentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
}
export const ConnectedEnvironmentsDaprComponentsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/daprComponents",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsDaprComponentsListInput>;

// Output Schema
export interface ConnectedEnvironmentsDaprComponentsListOutput {
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
export const ConnectedEnvironmentsDaprComponentsListOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsDaprComponentsListOutput>;

// The operation
/**
 * Get the Dapr Components for a connected environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connected environment.
 */
export const ConnectedEnvironmentsDaprComponentsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsDaprComponentsListInput,
    outputSchema: ConnectedEnvironmentsDaprComponentsListOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsDaprComponentsListSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  componentName: string;
}
export const ConnectedEnvironmentsDaprComponentsListSecretsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/daprComponents/{componentName}/listSecrets",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsDaprComponentsListSecretsInput>;

// Output Schema
export interface ConnectedEnvironmentsDaprComponentsListSecretsOutput {
  value: { name?: string; value?: string }[];
}
export const ConnectedEnvironmentsDaprComponentsListSecretsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ConnectedEnvironmentsDaprComponentsListSecretsOutput>;

// The operation
/**
 * List secrets for a dapr component
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connected environment.
 * @param componentName - Name of the Dapr Component.
 */
export const ConnectedEnvironmentsDaprComponentsListSecrets =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsDaprComponentsListSecretsInput,
    outputSchema: ConnectedEnvironmentsDaprComponentsListSecretsOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
}
export const ConnectedEnvironmentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsDeleteInput>;

// Output Schema
export type ConnectedEnvironmentsDeleteOutput = void;
export const ConnectedEnvironmentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectedEnvironmentsDeleteOutput>;

// The operation
/**
 * Delete an connectedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connectedEnvironment.
 */
export const ConnectedEnvironmentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectedEnvironmentsDeleteInput,
  outputSchema: ConnectedEnvironmentsDeleteOutput,
}));
// Input Schema
export interface ConnectedEnvironmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
}
export const ConnectedEnvironmentsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsGetInput>;

// Output Schema
export interface ConnectedEnvironmentsGetOutput {
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
export const ConnectedEnvironmentsGetOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsGetOutput>;

// The operation
/**
 * Get the properties of an connectedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connectedEnvironment.
 */
export const ConnectedEnvironmentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectedEnvironmentsGetInput,
  outputSchema: ConnectedEnvironmentsGetOutput,
}));
// Input Schema
export interface ConnectedEnvironmentsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ConnectedEnvironmentsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsListByResourceGroupInput>;

// Output Schema
export interface ConnectedEnvironmentsListByResourceGroupOutput {
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
export const ConnectedEnvironmentsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsListByResourceGroupOutput>;

// The operation
/**
 * Get all connectedEnvironments in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ConnectedEnvironmentsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsListByResourceGroupInput,
    outputSchema: ConnectedEnvironmentsListByResourceGroupOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsListBySubscriptionInput {
  subscriptionId: string;
}
export const ConnectedEnvironmentsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/connectedEnvironments",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsListBySubscriptionInput>;

// Output Schema
export interface ConnectedEnvironmentsListBySubscriptionOutput {
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
export const ConnectedEnvironmentsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsListBySubscriptionOutput>;

// The operation
/**
 * Get all connectedEnvironments for a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ConnectedEnvironmentsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsListBySubscriptionInput,
    outputSchema: ConnectedEnvironmentsListBySubscriptionOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsStoragesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  storageName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    deploymentErrors?: string;
    azureFile?: {
      accountName?: string;
      accountKey?: string;
      accountKeyVaultProperties?: { identity?: string; keyVaultUrl?: string };
      accessMode?: "ReadOnly" | "ReadWrite";
      shareName?: string;
    };
  };
}
export const ConnectedEnvironmentsStoragesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    storageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        deploymentErrors: Schema.optional(Schema.String),
        azureFile: Schema.optional(
          Schema.Struct({
            accountName: Schema.optional(Schema.String),
            accountKey: Schema.optional(Schema.String),
            accountKeyVaultProperties: Schema.optional(
              Schema.Struct({
                identity: Schema.optional(Schema.String),
                keyVaultUrl: Schema.optional(Schema.String),
              }),
            ),
            accessMode: Schema.optional(
              Schema.Literals(["ReadOnly", "ReadWrite"]),
            ),
            shareName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/storages/{storageName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsStoragesCreateOrUpdateInput>;

// Output Schema
export interface ConnectedEnvironmentsStoragesCreateOrUpdateOutput {
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
export const ConnectedEnvironmentsStoragesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsStoragesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update storage for a connectedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connectedEnvironment.
 * @param storageName - Name of the storage.
 */
export const ConnectedEnvironmentsStoragesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsStoragesCreateOrUpdateInput,
    outputSchema: ConnectedEnvironmentsStoragesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsStoragesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  storageName: string;
}
export const ConnectedEnvironmentsStoragesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    storageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/storages/{storageName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsStoragesDeleteInput>;

// Output Schema
export type ConnectedEnvironmentsStoragesDeleteOutput = void;
export const ConnectedEnvironmentsStoragesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectedEnvironmentsStoragesDeleteOutput>;

// The operation
/**
 * Delete storage for a connectedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connectedEnvironment.
 * @param storageName - Name of the storage.
 */
export const ConnectedEnvironmentsStoragesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsStoragesDeleteInput,
    outputSchema: ConnectedEnvironmentsStoragesDeleteOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsStoragesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  storageName: string;
}
export const ConnectedEnvironmentsStoragesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    storageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/storages/{storageName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsStoragesGetInput>;

// Output Schema
export interface ConnectedEnvironmentsStoragesGetOutput {
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
export const ConnectedEnvironmentsStoragesGetOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsStoragesGetOutput>;

// The operation
/**
 * Get storage for a connectedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connectedEnvironment.
 * @param storageName - Name of the storage.
 */
export const ConnectedEnvironmentsStoragesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsStoragesGetInput,
    outputSchema: ConnectedEnvironmentsStoragesGetOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsStoragesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
}
export const ConnectedEnvironmentsStoragesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/storages",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsStoragesListInput>;

// Output Schema
export interface ConnectedEnvironmentsStoragesListOutput {
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
export const ConnectedEnvironmentsStoragesListOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsStoragesListOutput>;

// The operation
/**
 * Get all storages for a connectedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connectedEnvironment.
 */
export const ConnectedEnvironmentsStoragesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectedEnvironmentsStoragesListInput,
    outputSchema: ConnectedEnvironmentsStoragesListOutput,
  }));
// Input Schema
export interface ConnectedEnvironmentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectedEnvironmentName: string;
  tags?: Record<string, string>;
}
export const ConnectedEnvironmentsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectedEnvironmentName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConnectedEnvironmentsUpdateInput>;

// Output Schema
export interface ConnectedEnvironmentsUpdateOutput {
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
export const ConnectedEnvironmentsUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectedEnvironmentsUpdateOutput>;

// The operation
/**
 * Update connected Environment's properties.
 *
 * Patches a Managed Environment. Only patching of tags is supported currently
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectedEnvironmentName - Name of the connectedEnvironment.
 */
export const ConnectedEnvironmentsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectedEnvironmentsUpdateInput,
  outputSchema: ConnectedEnvironmentsUpdateOutput,
}));
// Input Schema
export interface ContainerAppsAuthConfigsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  authConfigName: string;
  properties?: {
    platform?: { enabled?: boolean; runtimeVersion?: string };
    globalValidation?: {
      unauthenticatedClientAction?:
        | "RedirectToLoginPage"
        | "AllowAnonymous"
        | "Return401"
        | "Return403";
      redirectToProvider?: string;
      excludedPaths?: string[];
    };
    identityProviders?: {
      azureActiveDirectory?: {
        enabled?: boolean;
        registration?: {
          openIdIssuer?: string;
          clientId?: string;
          clientSecretSettingName?: string;
          clientSecretCertificateThumbprint?: string;
          clientSecretCertificateSubjectAlternativeName?: string;
          clientSecretCertificateIssuer?: string;
        };
        login?: {
          loginParameters?: string[];
          disableWWWAuthenticate?: boolean;
        };
        validation?: {
          jwtClaimChecks?: {
            allowedGroups?: string[];
            allowedClientApplications?: string[];
          };
          allowedAudiences?: string[];
          defaultAuthorizationPolicy?: {
            allowedPrincipals?: { groups?: string[]; identities?: string[] };
            allowedApplications?: string[];
          };
        };
        isAutoProvisioned?: boolean;
      };
      facebook?: {
        enabled?: boolean;
        registration?: { appId?: string; appSecretSettingName?: string };
        graphApiVersion?: string;
        login?: { scopes?: string[] };
      };
      gitHub?: {
        enabled?: boolean;
        registration?: { clientId?: string; clientSecretSettingName?: string };
        login?: { scopes?: string[] };
      };
      google?: {
        enabled?: boolean;
        registration?: { clientId?: string; clientSecretSettingName?: string };
        login?: { scopes?: string[] };
        validation?: { allowedAudiences?: string[] };
      };
      twitter?: {
        enabled?: boolean;
        registration?: {
          consumerKey?: string;
          consumerSecretSettingName?: string;
        };
      };
      apple?: {
        enabled?: boolean;
        registration?: { clientId?: string; clientSecretSettingName?: string };
        login?: { scopes?: string[] };
      };
      azureStaticWebApps?: {
        enabled?: boolean;
        registration?: { clientId?: string };
      };
      customOpenIdConnectProviders?: Record<
        string,
        {
          enabled?: boolean;
          registration?: {
            clientId?: string;
            clientCredential?: {
              method?: "ClientSecretPost";
              clientSecretSettingName?: string;
            };
            openIdConnectConfiguration?: {
              authorizationEndpoint?: string;
              tokenEndpoint?: string;
              issuer?: string;
              certificationUri?: string;
              wellKnownOpenIdConfiguration?: string;
            };
          };
          login?: { nameClaimType?: string; scopes?: string[] };
        }
      >;
    };
    login?: {
      routes?: { logoutEndpoint?: string };
      tokenStore?: {
        enabled?: boolean;
        tokenRefreshExtensionHours?: number;
        azureBlobStorage?: { sasUrlSettingName: string };
      };
      preserveUrlFragmentsForLogins?: boolean;
      allowedExternalRedirectUrls?: string[];
      cookieExpiration?: {
        convention?: "FixedTime" | "IdentityProviderDerived";
        timeToExpiration?: string;
      };
      nonce?: { validateNonce?: boolean; nonceExpirationInterval?: string };
    };
    httpSettings?: {
      requireHttps?: boolean;
      routes?: { apiPrefix?: string };
      forwardProxy?: {
        convention?: "NoProxy" | "Standard" | "Custom";
        customHostHeaderName?: string;
        customProtoHeaderName?: string;
      };
    };
    encryptionSettings?: {
      containerAppAuthEncryptionSecretName?: string;
      containerAppAuthSigningSecretName?: string;
    };
  };
}
export const ContainerAppsAuthConfigsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    authConfigName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        platform: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            runtimeVersion: Schema.optional(Schema.String),
          }),
        ),
        globalValidation: Schema.optional(
          Schema.Struct({
            unauthenticatedClientAction: Schema.optional(
              Schema.Literals([
                "RedirectToLoginPage",
                "AllowAnonymous",
                "Return401",
                "Return403",
              ]),
            ),
            redirectToProvider: Schema.optional(Schema.String),
            excludedPaths: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        identityProviders: Schema.optional(
          Schema.Struct({
            azureActiveDirectory: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                registration: Schema.optional(
                  Schema.Struct({
                    openIdIssuer: Schema.optional(Schema.String),
                    clientId: Schema.optional(Schema.String),
                    clientSecretSettingName: Schema.optional(Schema.String),
                    clientSecretCertificateThumbprint: Schema.optional(
                      Schema.String,
                    ),
                    clientSecretCertificateSubjectAlternativeName:
                      Schema.optional(Schema.String),
                    clientSecretCertificateIssuer: Schema.optional(
                      Schema.String,
                    ),
                  }),
                ),
                login: Schema.optional(
                  Schema.Struct({
                    loginParameters: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    disableWWWAuthenticate: Schema.optional(Schema.Boolean),
                  }),
                ),
                validation: Schema.optional(
                  Schema.Struct({
                    jwtClaimChecks: Schema.optional(
                      Schema.Struct({
                        allowedGroups: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        allowedClientApplications: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                      }),
                    ),
                    allowedAudiences: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    defaultAuthorizationPolicy: Schema.optional(
                      Schema.Struct({
                        allowedPrincipals: Schema.optional(
                          Schema.Struct({
                            groups: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                            identities: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                        allowedApplications: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                      }),
                    ),
                  }),
                ),
                isAutoProvisioned: Schema.optional(Schema.Boolean),
              }),
            ),
            facebook: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                registration: Schema.optional(
                  Schema.Struct({
                    appId: Schema.optional(Schema.String),
                    appSecretSettingName: Schema.optional(Schema.String),
                  }),
                ),
                graphApiVersion: Schema.optional(Schema.String),
                login: Schema.optional(
                  Schema.Struct({
                    scopes: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              }),
            ),
            gitHub: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                registration: Schema.optional(
                  Schema.Struct({
                    clientId: Schema.optional(Schema.String),
                    clientSecretSettingName: Schema.optional(Schema.String),
                  }),
                ),
                login: Schema.optional(
                  Schema.Struct({
                    scopes: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              }),
            ),
            google: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                registration: Schema.optional(
                  Schema.Struct({
                    clientId: Schema.optional(Schema.String),
                    clientSecretSettingName: Schema.optional(Schema.String),
                  }),
                ),
                login: Schema.optional(
                  Schema.Struct({
                    scopes: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
                validation: Schema.optional(
                  Schema.Struct({
                    allowedAudiences: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                  }),
                ),
              }),
            ),
            twitter: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                registration: Schema.optional(
                  Schema.Struct({
                    consumerKey: Schema.optional(Schema.String),
                    consumerSecretSettingName: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            apple: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                registration: Schema.optional(
                  Schema.Struct({
                    clientId: Schema.optional(Schema.String),
                    clientSecretSettingName: Schema.optional(Schema.String),
                  }),
                ),
                login: Schema.optional(
                  Schema.Struct({
                    scopes: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              }),
            ),
            azureStaticWebApps: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                registration: Schema.optional(
                  Schema.Struct({
                    clientId: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            customOpenIdConnectProviders: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  enabled: Schema.optional(Schema.Boolean),
                  registration: Schema.optional(
                    Schema.Struct({
                      clientId: Schema.optional(Schema.String),
                      clientCredential: Schema.optional(
                        Schema.Struct({
                          method: Schema.optional(
                            Schema.Literals(["ClientSecretPost"]),
                          ),
                          clientSecretSettingName: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                      openIdConnectConfiguration: Schema.optional(
                        Schema.Struct({
                          authorizationEndpoint: Schema.optional(Schema.String),
                          tokenEndpoint: Schema.optional(Schema.String),
                          issuer: Schema.optional(Schema.String),
                          certificationUri: Schema.optional(Schema.String),
                          wellKnownOpenIdConfiguration: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                    }),
                  ),
                  login: Schema.optional(
                    Schema.Struct({
                      nameClaimType: Schema.optional(Schema.String),
                      scopes: Schema.optional(Schema.Array(Schema.String)),
                    }),
                  ),
                }),
              ),
            ),
          }),
        ),
        login: Schema.optional(
          Schema.Struct({
            routes: Schema.optional(
              Schema.Struct({
                logoutEndpoint: Schema.optional(Schema.String),
              }),
            ),
            tokenStore: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                tokenRefreshExtensionHours: Schema.optional(Schema.Number),
                azureBlobStorage: Schema.optional(
                  Schema.Struct({
                    sasUrlSettingName: Schema.String,
                  }),
                ),
              }),
            ),
            preserveUrlFragmentsForLogins: Schema.optional(Schema.Boolean),
            allowedExternalRedirectUrls: Schema.optional(
              Schema.Array(Schema.String),
            ),
            cookieExpiration: Schema.optional(
              Schema.Struct({
                convention: Schema.optional(
                  Schema.Literals(["FixedTime", "IdentityProviderDerived"]),
                ),
                timeToExpiration: Schema.optional(Schema.String),
              }),
            ),
            nonce: Schema.optional(
              Schema.Struct({
                validateNonce: Schema.optional(Schema.Boolean),
                nonceExpirationInterval: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        httpSettings: Schema.optional(
          Schema.Struct({
            requireHttps: Schema.optional(Schema.Boolean),
            routes: Schema.optional(
              Schema.Struct({
                apiPrefix: Schema.optional(Schema.String),
              }),
            ),
            forwardProxy: Schema.optional(
              Schema.Struct({
                convention: Schema.optional(
                  Schema.Literals(["NoProxy", "Standard", "Custom"]),
                ),
                customHostHeaderName: Schema.optional(Schema.String),
                customProtoHeaderName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        encryptionSettings: Schema.optional(
          Schema.Struct({
            containerAppAuthEncryptionSecretName: Schema.optional(
              Schema.String,
            ),
            containerAppAuthSigningSecretName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/authConfigs/{authConfigName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsAuthConfigsCreateOrUpdateInput>;

// Output Schema
export interface ContainerAppsAuthConfigsCreateOrUpdateOutput {
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
export const ContainerAppsAuthConfigsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsAuthConfigsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the AuthConfig for a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param authConfigName - Name of the Container App AuthConfig.
 */
export const ContainerAppsAuthConfigsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsAuthConfigsCreateOrUpdateInput,
    outputSchema: ContainerAppsAuthConfigsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ContainerAppsAuthConfigsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  authConfigName: string;
}
export const ContainerAppsAuthConfigsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    authConfigName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/authConfigs/{authConfigName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsAuthConfigsDeleteInput>;

// Output Schema
export type ContainerAppsAuthConfigsDeleteOutput = void;
export const ContainerAppsAuthConfigsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerAppsAuthConfigsDeleteOutput>;

// The operation
/**
 * Delete a Container App AuthConfig.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param authConfigName - Name of the Container App AuthConfig.
 */
export const ContainerAppsAuthConfigsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsAuthConfigsDeleteInput,
    outputSchema: ContainerAppsAuthConfigsDeleteOutput,
  }));
// Input Schema
export interface ContainerAppsAuthConfigsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  authConfigName: string;
}
export const ContainerAppsAuthConfigsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    authConfigName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/authConfigs/{authConfigName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsAuthConfigsGetInput>;

// Output Schema
export interface ContainerAppsAuthConfigsGetOutput {
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
export const ContainerAppsAuthConfigsGetOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsAuthConfigsGetOutput>;

// The operation
/**
 * Get a AuthConfig of a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param authConfigName - Name of the Container App AuthConfig.
 */
export const ContainerAppsAuthConfigsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerAppsAuthConfigsGetInput,
  outputSchema: ContainerAppsAuthConfigsGetOutput,
}));
// Input Schema
export interface ContainerAppsAuthConfigsListByContainerAppInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
}
export const ContainerAppsAuthConfigsListByContainerAppInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/authConfigs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsAuthConfigsListByContainerAppInput>;

// Output Schema
export interface ContainerAppsAuthConfigsListByContainerAppOutput {
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
export const ContainerAppsAuthConfigsListByContainerAppOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsAuthConfigsListByContainerAppOutput>;

// The operation
/**
 * Get the Container App AuthConfigs in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsAuthConfigsListByContainerApp =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsAuthConfigsListByContainerAppInput,
    outputSchema: ContainerAppsAuthConfigsListByContainerAppOutput,
  }));
// Input Schema
export interface ContainerAppsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  properties?: {
    provisioningState?:
      | "InProgress"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting";
    runningStatus?:
      | "Progressing"
      | "Running"
      | "Stopped"
      | "Suspended"
      | "Ready";
    managedEnvironmentId?: string;
    environmentId?: string;
    workloadProfileName?: string;
    latestRevisionName?: string;
    latestReadyRevisionName?: string;
    latestRevisionFqdn?: string;
    customDomainVerificationId?: string;
    configuration?: {
      secrets?: {
        name?: string;
        value?: string;
        identity?: string;
        keyVaultUrl?: string;
      }[];
      activeRevisionsMode?: "Multiple" | "Single";
      ingress?: {
        fqdn?: string;
        external?: boolean;
        targetPort?: number;
        exposedPort?: number;
        transport?: "auto" | "http" | "http2" | "tcp";
        traffic?: {
          revisionName?: string;
          weight?: number;
          latestRevision?: boolean;
          label?: string;
        }[];
        customDomains?: {
          name: string;
          bindingType?: "Disabled" | "SniEnabled" | "Auto";
          certificateId?: string;
        }[];
        allowInsecure?: boolean;
        ipSecurityRestrictions?: {
          name: string;
          description?: string;
          ipAddressRange: string;
          action: "Allow" | "Deny";
        }[];
        stickySessions?: { affinity?: "sticky" | "none" };
        clientCertificateMode?: "ignore" | "accept" | "require";
        corsPolicy?: {
          allowedOrigins: string[];
          allowedMethods?: string[];
          allowedHeaders?: string[];
          exposeHeaders?: string[];
          maxAge?: number;
          allowCredentials?: boolean;
        };
        additionalPortMappings?: {
          external: boolean;
          targetPort: number;
          exposedPort?: number;
        }[];
      };
      registries?: {
        server?: string;
        username?: string;
        passwordSecretRef?: string | Redacted.Redacted<string>;
        identity?: string;
      }[];
      dapr?: {
        enabled?: boolean;
        appId?: string;
        appProtocol?: "http" | "grpc";
        appPort?: number;
        httpReadBufferSize?: number;
        httpMaxRequestSize?: number;
        logLevel?: "info" | "debug" | "warn" | "error";
        enableApiLogging?: boolean;
        appHealth?: {
          enabled?: boolean;
          path?: string;
          probeIntervalSeconds?: number;
          probeTimeoutMilliseconds?: number;
          threshold?: number;
        };
        maxConcurrency?: number;
      };
      runtime?: { java?: { enableMetrics?: boolean } };
      maxInactiveRevisions?: number;
      service?: { type: string };
      identitySettings?: {
        identity: string;
        lifecycle?: "None" | "Main" | "Init" | "All";
      }[];
    };
    template?: {
      revisionSuffix?: string;
      terminationGracePeriodSeconds?: number;
      initContainers?: {
        image?: string;
        name?: string;
        command?: string[];
        args?: string[];
        env?: { name?: string; value?: string; secretRef?: string }[];
        resources?: {
          cpu?: number;
          memory?: string;
          ephemeralStorage?: string;
        };
        volumeMounts?: {
          volumeName?: string;
          mountPath?: string;
          subPath?: string;
        }[];
      }[];
      containers?: {
        image?: string;
        name?: string;
        command?: string[];
        args?: string[];
        env?: { name?: string; value?: string; secretRef?: string }[];
        resources?: {
          cpu?: number;
          memory?: string;
          ephemeralStorage?: string;
        };
        volumeMounts?: {
          volumeName?: string;
          mountPath?: string;
          subPath?: string;
        }[];
      }[];
      scale?: {
        minReplicas?: number;
        maxReplicas?: number;
        cooldownPeriod?: number;
        pollingInterval?: number;
        rules?: {
          name?: string;
          azureQueue?: {
            accountName?: string;
            queueName?: string;
            queueLength?: number;
            auth?: { secretRef?: string; triggerParameter?: string }[];
            identity?: string;
          };
          custom?: {
            type?: string;
            metadata?: Record<string, string>;
            auth?: { secretRef?: string; triggerParameter?: string }[];
            identity?: string;
          };
          http?: {
            metadata?: Record<string, string>;
            auth?: { secretRef?: string; triggerParameter?: string }[];
            identity?: string;
          };
          tcp?: {
            metadata?: Record<string, string>;
            auth?: { secretRef?: string; triggerParameter?: string }[];
            identity?: string;
          };
        }[];
      };
      volumes?: {
        name?: string;
        storageType?: "AzureFile" | "EmptyDir" | "Secret" | "NfsAzureFile";
        storageName?: string;
        secrets?: { secretRef?: string; path?: string }[];
        mountOptions?: string;
      }[];
      serviceBinds?: { serviceId?: string; name?: string }[];
    };
    outboundIpAddresses?: string[];
    eventStreamEndpoint?: string;
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
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
    >;
  };
  managedBy?: string;
  kind?: "workflowapp" | "functionapp";
  tags?: Record<string, string>;
  location: string;
}
export const ContainerAppsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "InProgress",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
          ]),
        ),
        runningStatus: Schema.optional(
          Schema.Literals([
            "Progressing",
            "Running",
            "Stopped",
            "Suspended",
            "Ready",
          ]),
        ),
        managedEnvironmentId: Schema.optional(Schema.String),
        environmentId: Schema.optional(Schema.String),
        workloadProfileName: Schema.optional(Schema.String),
        latestRevisionName: Schema.optional(Schema.String),
        latestReadyRevisionName: Schema.optional(Schema.String),
        latestRevisionFqdn: Schema.optional(Schema.String),
        customDomainVerificationId: Schema.optional(Schema.String),
        configuration: Schema.optional(
          Schema.Struct({
            secrets: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                  identity: Schema.optional(Schema.String),
                  keyVaultUrl: Schema.optional(Schema.String),
                }),
              ),
            ),
            activeRevisionsMode: Schema.optional(
              Schema.Literals(["Multiple", "Single"]),
            ),
            ingress: Schema.optional(
              Schema.Struct({
                fqdn: Schema.optional(Schema.String),
                external: Schema.optional(Schema.Boolean),
                targetPort: Schema.optional(Schema.Number),
                exposedPort: Schema.optional(Schema.Number),
                transport: Schema.optional(
                  Schema.Literals(["auto", "http", "http2", "tcp"]),
                ),
                traffic: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      revisionName: Schema.optional(Schema.String),
                      weight: Schema.optional(Schema.Number),
                      latestRevision: Schema.optional(Schema.Boolean),
                      label: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                customDomains: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      bindingType: Schema.optional(
                        Schema.Literals(["Disabled", "SniEnabled", "Auto"]),
                      ),
                      certificateId: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                allowInsecure: Schema.optional(Schema.Boolean),
                ipSecurityRestrictions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      description: Schema.optional(Schema.String),
                      ipAddressRange: Schema.String,
                      action: Schema.Literals(["Allow", "Deny"]),
                    }),
                  ),
                ),
                stickySessions: Schema.optional(
                  Schema.Struct({
                    affinity: Schema.optional(
                      Schema.Literals(["sticky", "none"]),
                    ),
                  }),
                ),
                clientCertificateMode: Schema.optional(
                  Schema.Literals(["ignore", "accept", "require"]),
                ),
                corsPolicy: Schema.optional(
                  Schema.Struct({
                    allowedOrigins: Schema.Array(Schema.String),
                    allowedMethods: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    allowedHeaders: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    exposeHeaders: Schema.optional(Schema.Array(Schema.String)),
                    maxAge: Schema.optional(Schema.Number),
                    allowCredentials: Schema.optional(Schema.Boolean),
                  }),
                ),
                additionalPortMappings: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      external: Schema.Boolean,
                      targetPort: Schema.Number,
                      exposedPort: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
            registries: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  server: Schema.optional(Schema.String),
                  username: Schema.optional(Schema.String),
                  passwordSecretRef: Schema.optional(SensitiveString),
                  identity: Schema.optional(Schema.String),
                }),
              ),
            ),
            dapr: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                appId: Schema.optional(Schema.String),
                appProtocol: Schema.optional(Schema.Literals(["http", "grpc"])),
                appPort: Schema.optional(Schema.Number),
                httpReadBufferSize: Schema.optional(Schema.Number),
                httpMaxRequestSize: Schema.optional(Schema.Number),
                logLevel: Schema.optional(
                  Schema.Literals(["info", "debug", "warn", "error"]),
                ),
                enableApiLogging: Schema.optional(Schema.Boolean),
                appHealth: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    path: Schema.optional(Schema.String),
                    probeIntervalSeconds: Schema.optional(Schema.Number),
                    probeTimeoutMilliseconds: Schema.optional(Schema.Number),
                    threshold: Schema.optional(Schema.Number),
                  }),
                ),
                maxConcurrency: Schema.optional(Schema.Number),
              }),
            ),
            runtime: Schema.optional(
              Schema.Struct({
                java: Schema.optional(
                  Schema.Struct({
                    enableMetrics: Schema.optional(Schema.Boolean),
                  }),
                ),
              }),
            ),
            maxInactiveRevisions: Schema.optional(Schema.Number),
            service: Schema.optional(
              Schema.Struct({
                type: Schema.String,
              }),
            ),
            identitySettings: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  identity: Schema.String,
                  lifecycle: Schema.optional(
                    Schema.Literals(["None", "Main", "Init", "All"]),
                  ),
                }),
              ),
            ),
          }),
        ),
        template: Schema.optional(
          Schema.Struct({
            revisionSuffix: Schema.optional(Schema.String),
            terminationGracePeriodSeconds: Schema.optional(Schema.Number),
            initContainers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  image: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  command: Schema.optional(Schema.Array(Schema.String)),
                  args: Schema.optional(Schema.Array(Schema.String)),
                  env: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                        secretRef: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  resources: Schema.optional(
                    Schema.Struct({
                      cpu: Schema.optional(Schema.Number),
                      memory: Schema.optional(Schema.String),
                      ephemeralStorage: Schema.optional(Schema.String),
                    }),
                  ),
                  volumeMounts: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        volumeName: Schema.optional(Schema.String),
                        mountPath: Schema.optional(Schema.String),
                        subPath: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            containers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  image: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  command: Schema.optional(Schema.Array(Schema.String)),
                  args: Schema.optional(Schema.Array(Schema.String)),
                  env: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                        secretRef: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  resources: Schema.optional(
                    Schema.Struct({
                      cpu: Schema.optional(Schema.Number),
                      memory: Schema.optional(Schema.String),
                      ephemeralStorage: Schema.optional(Schema.String),
                    }),
                  ),
                  volumeMounts: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        volumeName: Schema.optional(Schema.String),
                        mountPath: Schema.optional(Schema.String),
                        subPath: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            scale: Schema.optional(
              Schema.Struct({
                minReplicas: Schema.optional(Schema.Number),
                maxReplicas: Schema.optional(Schema.Number),
                cooldownPeriod: Schema.optional(Schema.Number),
                pollingInterval: Schema.optional(Schema.Number),
                rules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      azureQueue: Schema.optional(
                        Schema.Struct({
                          accountName: Schema.optional(Schema.String),
                          queueName: Schema.optional(Schema.String),
                          queueLength: Schema.optional(Schema.Number),
                          auth: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                secretRef: Schema.optional(Schema.String),
                                triggerParameter: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                          identity: Schema.optional(Schema.String),
                        }),
                      ),
                      custom: Schema.optional(
                        Schema.Struct({
                          type: Schema.optional(Schema.String),
                          metadata: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                          auth: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                secretRef: Schema.optional(Schema.String),
                                triggerParameter: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                          identity: Schema.optional(Schema.String),
                        }),
                      ),
                      http: Schema.optional(
                        Schema.Struct({
                          metadata: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                          auth: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                secretRef: Schema.optional(Schema.String),
                                triggerParameter: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                          identity: Schema.optional(Schema.String),
                        }),
                      ),
                      tcp: Schema.optional(
                        Schema.Struct({
                          metadata: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                          auth: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                secretRef: Schema.optional(Schema.String),
                                triggerParameter: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                          identity: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
            volumes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  storageType: Schema.optional(
                    Schema.Literals([
                      "AzureFile",
                      "EmptyDir",
                      "Secret",
                      "NfsAzureFile",
                    ]),
                  ),
                  storageName: Schema.optional(Schema.String),
                  secrets: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        secretRef: Schema.optional(Schema.String),
                        path: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  mountOptions: Schema.optional(Schema.String),
                }),
              ),
            ),
            serviceBinds: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  serviceId: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        outboundIpAddresses: Schema.optional(Schema.Array(Schema.String)),
        eventStreamEndpoint: Schema.optional(Schema.String),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
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
    managedBy: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.Literals(["workflowapp", "functionapp"])),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsCreateOrUpdateInput>;

// Output Schema
export interface ContainerAppsCreateOrUpdateOutput {
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
export const ContainerAppsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerAppsCreateOrUpdateInput,
  outputSchema: ContainerAppsCreateOrUpdateOutput,
}));
// Input Schema
export interface ContainerAppsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
}
export const ContainerAppsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsDeleteInput>;

// Output Schema
export type ContainerAppsDeleteOutput = void;
export const ContainerAppsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerAppsDeleteOutput>;

// The operation
/**
 * Delete a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerAppsDeleteInput,
  outputSchema: ContainerAppsDeleteOutput,
}));
// Input Schema
export interface ContainerAppsDiagnosticsGetDetectorInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  detectorName: string;
}
export const ContainerAppsDiagnosticsGetDetectorInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    detectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/detectors/{detectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsDiagnosticsGetDetectorInput>;

// Output Schema
export interface ContainerAppsDiagnosticsGetDetectorOutput {
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
export const ContainerAppsDiagnosticsGetDetectorOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsDiagnosticsGetDetectorOutput>;

// The operation
/**
 * Get a diagnostics result of a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param detectorName - Name of the detector.
 */
export const ContainerAppsDiagnosticsGetDetector =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsDiagnosticsGetDetectorInput,
    outputSchema: ContainerAppsDiagnosticsGetDetectorOutput,
  }));
// Input Schema
export interface ContainerAppsDiagnosticsGetRevisionInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  revisionName: string;
}
export const ContainerAppsDiagnosticsGetRevisionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    revisionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/detectorProperties/revisionsApi/revisions/{revisionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsDiagnosticsGetRevisionInput>;

// Output Schema
export interface ContainerAppsDiagnosticsGetRevisionOutput {
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
export const ContainerAppsDiagnosticsGetRevisionOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsDiagnosticsGetRevisionOutput>;

// The operation
/**
 * Get a revision of a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param revisionName - Name of the detector.
 */
export const ContainerAppsDiagnosticsGetRevision =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsDiagnosticsGetRevisionInput,
    outputSchema: ContainerAppsDiagnosticsGetRevisionOutput,
  }));
// Input Schema
export interface ContainerAppsDiagnosticsGetRootInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
}
export const ContainerAppsDiagnosticsGetRootInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/detectorProperties/rootApi/",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsDiagnosticsGetRootInput>;

// Output Schema
export interface ContainerAppsDiagnosticsGetRootOutput {
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
export const ContainerAppsDiagnosticsGetRootOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsDiagnosticsGetRootOutput>;

// The operation
/**
 * Get the properties of a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsDiagnosticsGetRoot =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsDiagnosticsGetRootInput,
    outputSchema: ContainerAppsDiagnosticsGetRootOutput,
  }));
// Input Schema
export interface ContainerAppsDiagnosticsListDetectorsInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
}
export const ContainerAppsDiagnosticsListDetectorsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/detectors",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsDiagnosticsListDetectorsInput>;

// Output Schema
export interface ContainerAppsDiagnosticsListDetectorsOutput {
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
export const ContainerAppsDiagnosticsListDetectorsOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsDiagnosticsListDetectorsOutput>;

// The operation
/**
 * Get the list of diagnostics for a given Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsDiagnosticsListDetectors =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsDiagnosticsListDetectorsInput,
    outputSchema: ContainerAppsDiagnosticsListDetectorsOutput,
  }));
// Input Schema
export interface ContainerAppsDiagnosticsListRevisionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  $filter?: string;
}
export const ContainerAppsDiagnosticsListRevisionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/detectorProperties/revisionsApi/revisions/",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsDiagnosticsListRevisionsInput>;

// Output Schema
export interface ContainerAppsDiagnosticsListRevisionsOutput {
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
export const ContainerAppsDiagnosticsListRevisionsOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsDiagnosticsListRevisionsOutput>;

// The operation
/**
 * Get the Revisions for a given Container App.
 *
 * A synchronous resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param $filter - The filter to apply on the operation.
 */
export const ContainerAppsDiagnosticsListRevisions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsDiagnosticsListRevisionsInput,
    outputSchema: ContainerAppsDiagnosticsListRevisionsOutput,
  }));
// Input Schema
export interface ContainerAppsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
}
export const ContainerAppsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerAppName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<ContainerAppsGetInput>;

// Output Schema
export interface ContainerAppsGetOutput {
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
export const ContainerAppsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ContainerAppsGetOutput>;

// The operation
/**
 * Get the properties of a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerAppsGetInput,
  outputSchema: ContainerAppsGetOutput,
}));
// Input Schema
export interface ContainerAppsGetAuthTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
}
export const ContainerAppsGetAuthTokenInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/getAuthtoken",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsGetAuthTokenInput>;

// Output Schema
export interface ContainerAppsGetAuthTokenOutput {
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
export const ContainerAppsGetAuthTokenOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsGetAuthTokenOutput>;

// The operation
/**
 * Get auth token for a container app
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsGetAuthToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerAppsGetAuthTokenInput,
  outputSchema: ContainerAppsGetAuthTokenOutput,
}));
// Input Schema
export interface ContainerAppsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ContainerAppsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsListByResourceGroupInput>;

// Output Schema
export interface ContainerAppsListByResourceGroupOutput {
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
export const ContainerAppsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsListByResourceGroupOutput>;

// The operation
/**
 * Get the Container Apps in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ContainerAppsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsListByResourceGroupInput,
    outputSchema: ContainerAppsListByResourceGroupOutput,
  }));
// Input Schema
export interface ContainerAppsListBySubscriptionInput {
  subscriptionId: string;
}
export const ContainerAppsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/containerApps",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsListBySubscriptionInput>;

// Output Schema
export interface ContainerAppsListBySubscriptionOutput {
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
export const ContainerAppsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsListBySubscriptionOutput>;

// The operation
/**
 * Get the Container Apps in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ContainerAppsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsListBySubscriptionInput,
    outputSchema: ContainerAppsListBySubscriptionOutput,
  }));
// Input Schema
export interface ContainerAppsListCustomHostNameAnalysisInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  customHostname?: string;
}
export const ContainerAppsListCustomHostNameAnalysisInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    customHostname: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/listCustomHostNameAnalysis",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsListCustomHostNameAnalysisInput>;

// Output Schema
export interface ContainerAppsListCustomHostNameAnalysisOutput {
  hostName?: string;
  isHostnameAlreadyVerified?: boolean;
  customDomainVerificationTest?: "Passed" | "Failed" | "Skipped";
  customDomainVerificationFailureInfo?: {
    code?: string;
    message?: string;
    target?: string;
    details?: { code?: string; message?: string; target?: string }[];
  };
  hasConflictOnManagedEnvironment?: boolean;
  conflictWithEnvironmentCustomDomain?: boolean;
  conflictingContainerAppResourceId?: string;
  cNameRecords?: string[];
  txtRecords?: string[];
  aRecords?: string[];
  alternateCNameRecords?: string[];
  alternateTxtRecords?: string[];
}
export const ContainerAppsListCustomHostNameAnalysisOutput =
  /*@__PURE__*/ Schema.Struct({
    hostName: Schema.optional(Schema.String),
    isHostnameAlreadyVerified: Schema.optional(Schema.Boolean),
    customDomainVerificationTest: Schema.optional(
      Schema.Literals(["Passed", "Failed", "Skipped"]),
    ),
    customDomainVerificationFailureInfo: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              target: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    hasConflictOnManagedEnvironment: Schema.optional(Schema.Boolean),
    conflictWithEnvironmentCustomDomain: Schema.optional(Schema.Boolean),
    conflictingContainerAppResourceId: Schema.optional(Schema.String),
    cNameRecords: Schema.optional(Schema.Array(Schema.String)),
    txtRecords: Schema.optional(Schema.Array(Schema.String)),
    aRecords: Schema.optional(Schema.Array(Schema.String)),
    alternateCNameRecords: Schema.optional(Schema.Array(Schema.String)),
    alternateTxtRecords: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ContainerAppsListCustomHostNameAnalysisOutput>;

// The operation
/**
 * Analyzes a custom hostname for a Container App
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param customHostname - Custom hostname.
 */
export const ContainerAppsListCustomHostNameAnalysis =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsListCustomHostNameAnalysisInput,
    outputSchema: ContainerAppsListCustomHostNameAnalysisOutput,
  }));
// Input Schema
export interface ContainerAppsListSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
}
export const ContainerAppsListSecretsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/listSecrets",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsListSecretsInput>;

// Output Schema
export interface ContainerAppsListSecretsOutput {
  value: {
    name?: string;
    value?: string;
    identity?: string;
    keyVaultUrl?: string;
  }[];
}
export const ContainerAppsListSecretsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
        identity: Schema.optional(Schema.String),
        keyVaultUrl: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ContainerAppsListSecretsOutput>;

// The operation
/**
 * List secrets for a container app
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsListSecrets = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerAppsListSecretsInput,
  outputSchema: ContainerAppsListSecretsOutput,
}));
// Input Schema
export interface ContainerAppsRevisionReplicasGetReplicaInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  revisionName: string;
  replicaName: string;
}
export const ContainerAppsRevisionReplicasGetReplicaInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    revisionName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/revisions/{revisionName}/replicas/{replicaName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsRevisionReplicasGetReplicaInput>;

// Output Schema
export interface ContainerAppsRevisionReplicasGetReplicaOutput {
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
export const ContainerAppsRevisionReplicasGetReplicaOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsRevisionReplicasGetReplicaOutput>;

// The operation
/**
 * Get a replica for a Container App Revision.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param revisionName - Name of the Container App Revision.
 * @param replicaName - Name of the Container App Revision Replica.
 */
export const ContainerAppsRevisionReplicasGetReplica =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsRevisionReplicasGetReplicaInput,
    outputSchema: ContainerAppsRevisionReplicasGetReplicaOutput,
  }));
// Input Schema
export interface ContainerAppsRevisionReplicasListReplicasInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  revisionName: string;
}
export const ContainerAppsRevisionReplicasListReplicasInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    revisionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/revisions/{revisionName}/replicas",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsRevisionReplicasListReplicasInput>;

// Output Schema
export interface ContainerAppsRevisionReplicasListReplicasOutput {
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
export const ContainerAppsRevisionReplicasListReplicasOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsRevisionReplicasListReplicasOutput>;

// The operation
/**
 * List replicas for a Container App Revision.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param revisionName - Name of the Container App Revision.
 */
export const ContainerAppsRevisionReplicasListReplicas =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsRevisionReplicasListReplicasInput,
    outputSchema: ContainerAppsRevisionReplicasListReplicasOutput,
  }));
// Input Schema
export interface ContainerAppsRevisionsActivateRevisionInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  revisionName: string;
}
export const ContainerAppsRevisionsActivateRevisionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    revisionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/revisions/{revisionName}/activate",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsRevisionsActivateRevisionInput>;

// Output Schema
export type ContainerAppsRevisionsActivateRevisionOutput = void;
export const ContainerAppsRevisionsActivateRevisionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerAppsRevisionsActivateRevisionOutput>;

// The operation
/**
 * Activates a revision for a Container App
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param revisionName - Name of the Container App Revision.
 */
export const ContainerAppsRevisionsActivateRevision =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsRevisionsActivateRevisionInput,
    outputSchema: ContainerAppsRevisionsActivateRevisionOutput,
  }));
// Input Schema
export interface ContainerAppsRevisionsDeactivateRevisionInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  revisionName: string;
}
export const ContainerAppsRevisionsDeactivateRevisionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    revisionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/revisions/{revisionName}/deactivate",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsRevisionsDeactivateRevisionInput>;

// Output Schema
export type ContainerAppsRevisionsDeactivateRevisionOutput = void;
export const ContainerAppsRevisionsDeactivateRevisionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerAppsRevisionsDeactivateRevisionOutput>;

// The operation
/**
 * Deactivates a revision for a Container App
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param revisionName - Name of the Container App Revision.
 */
export const ContainerAppsRevisionsDeactivateRevision =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsRevisionsDeactivateRevisionInput,
    outputSchema: ContainerAppsRevisionsDeactivateRevisionOutput,
  }));
// Input Schema
export interface ContainerAppsRevisionsGetRevisionInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  revisionName: string;
}
export const ContainerAppsRevisionsGetRevisionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    revisionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/revisions/{revisionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsRevisionsGetRevisionInput>;

// Output Schema
export interface ContainerAppsRevisionsGetRevisionOutput {
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
export const ContainerAppsRevisionsGetRevisionOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsRevisionsGetRevisionOutput>;

// The operation
/**
 * Get a revision of a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param revisionName - Name of the Container App Revision.
 */
export const ContainerAppsRevisionsGetRevision =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsRevisionsGetRevisionInput,
    outputSchema: ContainerAppsRevisionsGetRevisionOutput,
  }));
// Input Schema
export interface ContainerAppsRevisionsListRevisionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  $filter?: string;
}
export const ContainerAppsRevisionsListRevisionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/revisions",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsRevisionsListRevisionsInput>;

// Output Schema
export interface ContainerAppsRevisionsListRevisionsOutput {
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
export const ContainerAppsRevisionsListRevisionsOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsRevisionsListRevisionsOutput>;

// The operation
/**
 * Get the Revisions for a given Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param $filter - The filter to apply on the operation.
 */
export const ContainerAppsRevisionsListRevisions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsRevisionsListRevisionsInput,
    outputSchema: ContainerAppsRevisionsListRevisionsOutput,
  }));
// Input Schema
export interface ContainerAppsRevisionsRestartRevisionInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  revisionName: string;
}
export const ContainerAppsRevisionsRestartRevisionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    revisionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/revisions/{revisionName}/restart",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsRevisionsRestartRevisionInput>;

// Output Schema
export type ContainerAppsRevisionsRestartRevisionOutput = void;
export const ContainerAppsRevisionsRestartRevisionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerAppsRevisionsRestartRevisionOutput>;

// The operation
/**
 * Restarts a revision for a Container App
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param revisionName - Name of the Container App Revision.
 */
export const ContainerAppsRevisionsRestartRevision =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsRevisionsRestartRevisionInput,
    outputSchema: ContainerAppsRevisionsRestartRevisionOutput,
  }));
// Input Schema
export interface ContainerAppsSessionPoolsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sessionPoolName: string;
  properties?: {
    environmentId?: string;
    containerType?: "CustomContainer" | "PythonLTS";
    poolManagementType?: "Manual" | "Dynamic";
    nodeCount?: number;
    scaleConfiguration?: {
      maxConcurrentSessions?: number;
      readySessionInstances?: number;
    };
    secrets?: { name?: string; value?: string }[];
    dynamicPoolConfiguration?: {
      lifecycleConfiguration?: {
        lifecycleType?: "Timed" | "OnContainerExit";
        cooldownPeriodInSeconds?: number;
        maxAlivePeriodInSeconds?: number;
      };
    };
    customContainerTemplate?: {
      registryCredentials?: {
        server?: string;
        username?: string;
        passwordSecretRef?: string | Redacted.Redacted<string>;
        identity?: string;
      };
      containers?: {
        image?: string;
        name?: string;
        command?: string[];
        args?: string[];
        env?: { name?: string; value?: string; secretRef?: string }[];
        resources?: { cpu?: number; memory?: string };
      }[];
      ingress?: { targetPort?: number };
    };
    sessionNetworkConfiguration?: {
      status?: "EgressEnabled" | "EgressDisabled";
    };
    poolManagementEndpoint?: string;
    provisioningState?:
      | "InProgress"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting";
    managedIdentitySettings?: {
      identity: string;
      lifecycle?: "None" | "Main";
    }[];
  };
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ContainerAppsSessionPoolsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sessionPoolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        environmentId: Schema.optional(Schema.String),
        containerType: Schema.optional(
          Schema.Literals(["CustomContainer", "PythonLTS"]),
        ),
        poolManagementType: Schema.optional(
          Schema.Literals(["Manual", "Dynamic"]),
        ),
        nodeCount: Schema.optional(Schema.Number),
        scaleConfiguration: Schema.optional(
          Schema.Struct({
            maxConcurrentSessions: Schema.optional(Schema.Number),
            readySessionInstances: Schema.optional(Schema.Number),
          }),
        ),
        secrets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        dynamicPoolConfiguration: Schema.optional(
          Schema.Struct({
            lifecycleConfiguration: Schema.optional(
              Schema.Struct({
                lifecycleType: Schema.optional(
                  Schema.Literals(["Timed", "OnContainerExit"]),
                ),
                cooldownPeriodInSeconds: Schema.optional(Schema.Number),
                maxAlivePeriodInSeconds: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        customContainerTemplate: Schema.optional(
          Schema.Struct({
            registryCredentials: Schema.optional(
              Schema.Struct({
                server: Schema.optional(Schema.String),
                username: Schema.optional(Schema.String),
                passwordSecretRef: Schema.optional(SensitiveString),
                identity: Schema.optional(Schema.String),
              }),
            ),
            containers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  image: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  command: Schema.optional(Schema.Array(Schema.String)),
                  args: Schema.optional(Schema.Array(Schema.String)),
                  env: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                        secretRef: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  resources: Schema.optional(
                    Schema.Struct({
                      cpu: Schema.optional(Schema.Number),
                      memory: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            ),
            ingress: Schema.optional(
              Schema.Struct({
                targetPort: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        sessionNetworkConfiguration: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals(["EgressEnabled", "EgressDisabled"]),
            ),
          }),
        ),
        poolManagementEndpoint: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "InProgress",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
          ]),
        ),
        managedIdentitySettings: Schema.optional(
          Schema.Array(
            Schema.Struct({
              identity: Schema.String,
              lifecycle: Schema.optional(Schema.Literals(["None", "Main"])),
            }),
          ),
        ),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/sessionPools/{sessionPoolName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsSessionPoolsCreateOrUpdateInput>;

// Output Schema
export interface ContainerAppsSessionPoolsCreateOrUpdateOutput {
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
export const ContainerAppsSessionPoolsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsSessionPoolsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a session pool.
 *
 * Create or update a session pool with the given properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sessionPoolName - Name of the session pool.
 */
export const ContainerAppsSessionPoolsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsSessionPoolsCreateOrUpdateInput,
    outputSchema: ContainerAppsSessionPoolsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ContainerAppsSessionPoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sessionPoolName: string;
}
export const ContainerAppsSessionPoolsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sessionPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/sessionPools/{sessionPoolName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsSessionPoolsDeleteInput>;

// Output Schema
export type ContainerAppsSessionPoolsDeleteOutput = void;
export const ContainerAppsSessionPoolsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerAppsSessionPoolsDeleteOutput>;

// The operation
/**
 * Delete a session pool.
 *
 * Delete the session pool with the given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sessionPoolName - Name of the session pool.
 */
export const ContainerAppsSessionPoolsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsSessionPoolsDeleteInput,
    outputSchema: ContainerAppsSessionPoolsDeleteOutput,
  }));
// Input Schema
export interface ContainerAppsSessionPoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sessionPoolName: string;
}
export const ContainerAppsSessionPoolsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sessionPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/sessionPools/{sessionPoolName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsSessionPoolsGetInput>;

// Output Schema
export interface ContainerAppsSessionPoolsGetOutput {
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
export const ContainerAppsSessionPoolsGetOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsSessionPoolsGetOutput>;

// The operation
/**
 * Get the properties of a session pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sessionPoolName - Name of the session pool.
 */
export const ContainerAppsSessionPoolsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsSessionPoolsGetInput,
    outputSchema: ContainerAppsSessionPoolsGetOutput,
  }));
// Input Schema
export interface ContainerAppsSessionPoolsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ContainerAppsSessionPoolsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/sessionPools",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsSessionPoolsListByResourceGroupInput>;

// Output Schema
export interface ContainerAppsSessionPoolsListByResourceGroupOutput {
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
export const ContainerAppsSessionPoolsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsSessionPoolsListByResourceGroupOutput>;

// The operation
/**
 * Get the session pools in a given resource group of a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ContainerAppsSessionPoolsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsSessionPoolsListByResourceGroupInput,
    outputSchema: ContainerAppsSessionPoolsListByResourceGroupOutput,
  }));
// Input Schema
export interface ContainerAppsSessionPoolsListBySubscriptionInput {
  subscriptionId: string;
}
export const ContainerAppsSessionPoolsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/sessionPools",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsSessionPoolsListBySubscriptionInput>;

// Output Schema
export interface ContainerAppsSessionPoolsListBySubscriptionOutput {
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
export const ContainerAppsSessionPoolsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsSessionPoolsListBySubscriptionOutput>;

// The operation
/**
 * Get the session pools in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ContainerAppsSessionPoolsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsSessionPoolsListBySubscriptionInput,
    outputSchema: ContainerAppsSessionPoolsListBySubscriptionOutput,
  }));
// Input Schema
export interface ContainerAppsSessionPoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sessionPoolName: string;
  tags?: Record<string, string>;
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
    >;
  };
  properties?: {
    scaleConfiguration?: {
      maxConcurrentSessions?: number;
      readySessionInstances?: number;
    };
    secrets?: { name?: string; value?: string }[];
    dynamicPoolConfiguration?: {
      lifecycleConfiguration?: {
        lifecycleType?: "Timed" | "OnContainerExit";
        cooldownPeriodInSeconds?: number;
        maxAlivePeriodInSeconds?: number;
      };
    };
    customContainerTemplate?: {
      registryCredentials?: {
        server?: string;
        username?: string;
        passwordSecretRef?: string | Redacted.Redacted<string>;
        identity?: string;
      };
      containers?: {
        image?: string;
        name?: string;
        command?: string[];
        args?: string[];
        env?: { name?: string; value?: string; secretRef?: string }[];
        resources?: { cpu?: number; memory?: string };
      }[];
      ingress?: { targetPort?: number };
    };
    sessionNetworkConfiguration?: {
      status?: "EgressEnabled" | "EgressDisabled";
    };
  };
}
export const ContainerAppsSessionPoolsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sessionPoolName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
    properties: Schema.optional(
      Schema.Struct({
        scaleConfiguration: Schema.optional(
          Schema.Struct({
            maxConcurrentSessions: Schema.optional(Schema.Number),
            readySessionInstances: Schema.optional(Schema.Number),
          }),
        ),
        secrets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        dynamicPoolConfiguration: Schema.optional(
          Schema.Struct({
            lifecycleConfiguration: Schema.optional(
              Schema.Struct({
                lifecycleType: Schema.optional(
                  Schema.Literals(["Timed", "OnContainerExit"]),
                ),
                cooldownPeriodInSeconds: Schema.optional(Schema.Number),
                maxAlivePeriodInSeconds: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        customContainerTemplate: Schema.optional(
          Schema.Struct({
            registryCredentials: Schema.optional(
              Schema.Struct({
                server: Schema.optional(Schema.String),
                username: Schema.optional(Schema.String),
                passwordSecretRef: Schema.optional(SensitiveString),
                identity: Schema.optional(Schema.String),
              }),
            ),
            containers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  image: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  command: Schema.optional(Schema.Array(Schema.String)),
                  args: Schema.optional(Schema.Array(Schema.String)),
                  env: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                        secretRef: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  resources: Schema.optional(
                    Schema.Struct({
                      cpu: Schema.optional(Schema.Number),
                      memory: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            ),
            ingress: Schema.optional(
              Schema.Struct({
                targetPort: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        sessionNetworkConfiguration: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals(["EgressEnabled", "EgressDisabled"]),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/sessionPools/{sessionPoolName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsSessionPoolsUpdateInput>;

// Output Schema
export interface ContainerAppsSessionPoolsUpdateOutput {
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
export const ContainerAppsSessionPoolsUpdateOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsSessionPoolsUpdateOutput>;

// The operation
/**
 * Update properties of a session pool
 *
 * Patches a session pool using JSON merge patch
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sessionPoolName - Name of the session pool.
 */
export const ContainerAppsSessionPoolsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsSessionPoolsUpdateInput,
    outputSchema: ContainerAppsSessionPoolsUpdateOutput,
  }));
// Input Schema
export interface ContainerAppsSourceControlsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  sourceControlName: string;
  properties?: {
    operationState?: "InProgress" | "Succeeded" | "Failed" | "Canceled";
    repoUrl?: string;
    branch?: string;
    githubActionConfiguration?: {
      registryInfo?: {
        registryUrl?: string;
        registryUserName?: string;
        registryPassword?: string | Redacted.Redacted<string>;
      };
      azureCredentials?: {
        clientId?: string;
        clientSecret?: string | Redacted.Redacted<string>;
        tenantId?: string;
        kind?: string;
        subscriptionId?: string;
      };
      contextPath?: string;
      githubPersonalAccessToken?: string;
      image?: string;
      publishType?: string;
      os?: string;
      runtimeStack?: string;
      runtimeVersion?: string;
    };
  };
}
export const ContainerAppsSourceControlsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        operationState: Schema.optional(
          Schema.Literals(["InProgress", "Succeeded", "Failed", "Canceled"]),
        ),
        repoUrl: Schema.optional(Schema.String),
        branch: Schema.optional(Schema.String),
        githubActionConfiguration: Schema.optional(
          Schema.Struct({
            registryInfo: Schema.optional(
              Schema.Struct({
                registryUrl: Schema.optional(Schema.String),
                registryUserName: Schema.optional(Schema.String),
                registryPassword: Schema.optional(SensitiveString),
              }),
            ),
            azureCredentials: Schema.optional(
              Schema.Struct({
                clientId: Schema.optional(Schema.String),
                clientSecret: Schema.optional(SensitiveString),
                tenantId: Schema.optional(Schema.String),
                kind: Schema.optional(Schema.String),
                subscriptionId: Schema.optional(Schema.String),
              }),
            ),
            contextPath: Schema.optional(Schema.String),
            githubPersonalAccessToken: Schema.optional(Schema.String),
            image: Schema.optional(Schema.String),
            publishType: Schema.optional(Schema.String),
            os: Schema.optional(Schema.String),
            runtimeStack: Schema.optional(Schema.String),
            runtimeVersion: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/sourcecontrols/{sourceControlName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsSourceControlsCreateOrUpdateInput>;

// Output Schema
export interface ContainerAppsSourceControlsCreateOrUpdateOutput {
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
export const ContainerAppsSourceControlsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsSourceControlsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the SourceControl for a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param sourceControlName - Name of the Container App SourceControl.
 */
export const ContainerAppsSourceControlsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsSourceControlsCreateOrUpdateInput,
    outputSchema: ContainerAppsSourceControlsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ContainerAppsSourceControlsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  sourceControlName: string;
}
export const ContainerAppsSourceControlsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/sourcecontrols/{sourceControlName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsSourceControlsDeleteInput>;

// Output Schema
export type ContainerAppsSourceControlsDeleteOutput = void;
export const ContainerAppsSourceControlsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ContainerAppsSourceControlsDeleteOutput>;

// The operation
/**
 * Delete a Container App SourceControl.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param sourceControlName - Name of the Container App SourceControl.
 */
export const ContainerAppsSourceControlsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsSourceControlsDeleteInput,
    outputSchema: ContainerAppsSourceControlsDeleteOutput,
  }));
// Input Schema
export interface ContainerAppsSourceControlsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  sourceControlName: string;
}
export const ContainerAppsSourceControlsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    sourceControlName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/sourcecontrols/{sourceControlName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsSourceControlsGetInput>;

// Output Schema
export interface ContainerAppsSourceControlsGetOutput {
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
export const ContainerAppsSourceControlsGetOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsSourceControlsGetOutput>;

// The operation
/**
 * Get a SourceControl of a Container App.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param sourceControlName - Name of the Container App SourceControl.
 */
export const ContainerAppsSourceControlsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsSourceControlsGetInput,
    outputSchema: ContainerAppsSourceControlsGetOutput,
  }));
// Input Schema
export interface ContainerAppsSourceControlsListByContainerAppInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
}
export const ContainerAppsSourceControlsListByContainerAppInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/sourcecontrols",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsSourceControlsListByContainerAppInput>;

// Output Schema
export interface ContainerAppsSourceControlsListByContainerAppOutput {
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
export const ContainerAppsSourceControlsListByContainerAppOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsSourceControlsListByContainerAppOutput>;

// The operation
/**
 * Get the Container App SourceControls in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsSourceControlsListByContainerApp =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ContainerAppsSourceControlsListByContainerAppInput,
    outputSchema: ContainerAppsSourceControlsListByContainerAppOutput,
  }));
// Input Schema
export interface ContainerAppsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
}
export const ContainerAppsStartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/start",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsStartInput>;

// Output Schema
export interface ContainerAppsStartOutput {
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
export const ContainerAppsStartOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsStartOutput>;

// The operation
/**
 * Start a container app
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerAppsStartInput,
  outputSchema: ContainerAppsStartOutput,
}));
// Input Schema
export interface ContainerAppsStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
}
export const ContainerAppsStopInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerAppName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/stop",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<ContainerAppsStopInput>;

// Output Schema
export interface ContainerAppsStopOutput {
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
export const ContainerAppsStopOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsStopOutput>;

// The operation
/**
 * Stop a container app
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerAppsStopInput,
  outputSchema: ContainerAppsStopOutput,
}));
// Input Schema
export interface ContainerAppsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  properties?: {
    provisioningState?:
      | "InProgress"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting";
    runningStatus?:
      | "Progressing"
      | "Running"
      | "Stopped"
      | "Suspended"
      | "Ready";
    managedEnvironmentId?: string;
    environmentId?: string;
    workloadProfileName?: string;
    latestRevisionName?: string;
    latestReadyRevisionName?: string;
    latestRevisionFqdn?: string;
    customDomainVerificationId?: string;
    configuration?: {
      secrets?: {
        name?: string;
        value?: string;
        identity?: string;
        keyVaultUrl?: string;
      }[];
      activeRevisionsMode?: "Multiple" | "Single";
      ingress?: {
        fqdn?: string;
        external?: boolean;
        targetPort?: number;
        exposedPort?: number;
        transport?: "auto" | "http" | "http2" | "tcp";
        traffic?: {
          revisionName?: string;
          weight?: number;
          latestRevision?: boolean;
          label?: string;
        }[];
        customDomains?: {
          name: string;
          bindingType?: "Disabled" | "SniEnabled" | "Auto";
          certificateId?: string;
        }[];
        allowInsecure?: boolean;
        ipSecurityRestrictions?: {
          name: string;
          description?: string;
          ipAddressRange: string;
          action: "Allow" | "Deny";
        }[];
        stickySessions?: { affinity?: "sticky" | "none" };
        clientCertificateMode?: "ignore" | "accept" | "require";
        corsPolicy?: {
          allowedOrigins: string[];
          allowedMethods?: string[];
          allowedHeaders?: string[];
          exposeHeaders?: string[];
          maxAge?: number;
          allowCredentials?: boolean;
        };
        additionalPortMappings?: {
          external: boolean;
          targetPort: number;
          exposedPort?: number;
        }[];
      };
      registries?: {
        server?: string;
        username?: string;
        passwordSecretRef?: string | Redacted.Redacted<string>;
        identity?: string;
      }[];
      dapr?: {
        enabled?: boolean;
        appId?: string;
        appProtocol?: "http" | "grpc";
        appPort?: number;
        httpReadBufferSize?: number;
        httpMaxRequestSize?: number;
        logLevel?: "info" | "debug" | "warn" | "error";
        enableApiLogging?: boolean;
        appHealth?: {
          enabled?: boolean;
          path?: string;
          probeIntervalSeconds?: number;
          probeTimeoutMilliseconds?: number;
          threshold?: number;
        };
        maxConcurrency?: number;
      };
      runtime?: { java?: { enableMetrics?: boolean } };
      maxInactiveRevisions?: number;
      service?: { type: string };
      identitySettings?: {
        identity: string;
        lifecycle?: "None" | "Main" | "Init" | "All";
      }[];
    };
    template?: {
      revisionSuffix?: string;
      terminationGracePeriodSeconds?: number;
      initContainers?: {
        image?: string;
        name?: string;
        command?: string[];
        args?: string[];
        env?: { name?: string; value?: string; secretRef?: string }[];
        resources?: {
          cpu?: number;
          memory?: string;
          ephemeralStorage?: string;
        };
        volumeMounts?: {
          volumeName?: string;
          mountPath?: string;
          subPath?: string;
        }[];
      }[];
      containers?: {
        image?: string;
        name?: string;
        command?: string[];
        args?: string[];
        env?: { name?: string; value?: string; secretRef?: string }[];
        resources?: {
          cpu?: number;
          memory?: string;
          ephemeralStorage?: string;
        };
        volumeMounts?: {
          volumeName?: string;
          mountPath?: string;
          subPath?: string;
        }[];
      }[];
      scale?: {
        minReplicas?: number;
        maxReplicas?: number;
        cooldownPeriod?: number;
        pollingInterval?: number;
        rules?: {
          name?: string;
          azureQueue?: {
            accountName?: string;
            queueName?: string;
            queueLength?: number;
            auth?: { secretRef?: string; triggerParameter?: string }[];
            identity?: string;
          };
          custom?: {
            type?: string;
            metadata?: Record<string, string>;
            auth?: { secretRef?: string; triggerParameter?: string }[];
            identity?: string;
          };
          http?: {
            metadata?: Record<string, string>;
            auth?: { secretRef?: string; triggerParameter?: string }[];
            identity?: string;
          };
          tcp?: {
            metadata?: Record<string, string>;
            auth?: { secretRef?: string; triggerParameter?: string }[];
            identity?: string;
          };
        }[];
      };
      volumes?: {
        name?: string;
        storageType?: "AzureFile" | "EmptyDir" | "Secret" | "NfsAzureFile";
        storageName?: string;
        secrets?: { secretRef?: string; path?: string }[];
        mountOptions?: string;
      }[];
      serviceBinds?: { serviceId?: string; name?: string }[];
    };
    outboundIpAddresses?: string[];
    eventStreamEndpoint?: string;
  };
  extendedLocation?: { name?: string; type?: "CustomLocation" };
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
    >;
  };
  managedBy?: string;
  kind?: "workflowapp" | "functionapp";
  tags?: Record<string, string>;
  location: string;
}
export const ContainerAppsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "InProgress",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
          ]),
        ),
        runningStatus: Schema.optional(
          Schema.Literals([
            "Progressing",
            "Running",
            "Stopped",
            "Suspended",
            "Ready",
          ]),
        ),
        managedEnvironmentId: Schema.optional(Schema.String),
        environmentId: Schema.optional(Schema.String),
        workloadProfileName: Schema.optional(Schema.String),
        latestRevisionName: Schema.optional(Schema.String),
        latestReadyRevisionName: Schema.optional(Schema.String),
        latestRevisionFqdn: Schema.optional(Schema.String),
        customDomainVerificationId: Schema.optional(Schema.String),
        configuration: Schema.optional(
          Schema.Struct({
            secrets: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                  identity: Schema.optional(Schema.String),
                  keyVaultUrl: Schema.optional(Schema.String),
                }),
              ),
            ),
            activeRevisionsMode: Schema.optional(
              Schema.Literals(["Multiple", "Single"]),
            ),
            ingress: Schema.optional(
              Schema.Struct({
                fqdn: Schema.optional(Schema.String),
                external: Schema.optional(Schema.Boolean),
                targetPort: Schema.optional(Schema.Number),
                exposedPort: Schema.optional(Schema.Number),
                transport: Schema.optional(
                  Schema.Literals(["auto", "http", "http2", "tcp"]),
                ),
                traffic: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      revisionName: Schema.optional(Schema.String),
                      weight: Schema.optional(Schema.Number),
                      latestRevision: Schema.optional(Schema.Boolean),
                      label: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                customDomains: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      bindingType: Schema.optional(
                        Schema.Literals(["Disabled", "SniEnabled", "Auto"]),
                      ),
                      certificateId: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                allowInsecure: Schema.optional(Schema.Boolean),
                ipSecurityRestrictions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      description: Schema.optional(Schema.String),
                      ipAddressRange: Schema.String,
                      action: Schema.Literals(["Allow", "Deny"]),
                    }),
                  ),
                ),
                stickySessions: Schema.optional(
                  Schema.Struct({
                    affinity: Schema.optional(
                      Schema.Literals(["sticky", "none"]),
                    ),
                  }),
                ),
                clientCertificateMode: Schema.optional(
                  Schema.Literals(["ignore", "accept", "require"]),
                ),
                corsPolicy: Schema.optional(
                  Schema.Struct({
                    allowedOrigins: Schema.Array(Schema.String),
                    allowedMethods: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    allowedHeaders: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    exposeHeaders: Schema.optional(Schema.Array(Schema.String)),
                    maxAge: Schema.optional(Schema.Number),
                    allowCredentials: Schema.optional(Schema.Boolean),
                  }),
                ),
                additionalPortMappings: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      external: Schema.Boolean,
                      targetPort: Schema.Number,
                      exposedPort: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
            registries: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  server: Schema.optional(Schema.String),
                  username: Schema.optional(Schema.String),
                  passwordSecretRef: Schema.optional(SensitiveString),
                  identity: Schema.optional(Schema.String),
                }),
              ),
            ),
            dapr: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                appId: Schema.optional(Schema.String),
                appProtocol: Schema.optional(Schema.Literals(["http", "grpc"])),
                appPort: Schema.optional(Schema.Number),
                httpReadBufferSize: Schema.optional(Schema.Number),
                httpMaxRequestSize: Schema.optional(Schema.Number),
                logLevel: Schema.optional(
                  Schema.Literals(["info", "debug", "warn", "error"]),
                ),
                enableApiLogging: Schema.optional(Schema.Boolean),
                appHealth: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    path: Schema.optional(Schema.String),
                    probeIntervalSeconds: Schema.optional(Schema.Number),
                    probeTimeoutMilliseconds: Schema.optional(Schema.Number),
                    threshold: Schema.optional(Schema.Number),
                  }),
                ),
                maxConcurrency: Schema.optional(Schema.Number),
              }),
            ),
            runtime: Schema.optional(
              Schema.Struct({
                java: Schema.optional(
                  Schema.Struct({
                    enableMetrics: Schema.optional(Schema.Boolean),
                  }),
                ),
              }),
            ),
            maxInactiveRevisions: Schema.optional(Schema.Number),
            service: Schema.optional(
              Schema.Struct({
                type: Schema.String,
              }),
            ),
            identitySettings: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  identity: Schema.String,
                  lifecycle: Schema.optional(
                    Schema.Literals(["None", "Main", "Init", "All"]),
                  ),
                }),
              ),
            ),
          }),
        ),
        template: Schema.optional(
          Schema.Struct({
            revisionSuffix: Schema.optional(Schema.String),
            terminationGracePeriodSeconds: Schema.optional(Schema.Number),
            initContainers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  image: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  command: Schema.optional(Schema.Array(Schema.String)),
                  args: Schema.optional(Schema.Array(Schema.String)),
                  env: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                        secretRef: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  resources: Schema.optional(
                    Schema.Struct({
                      cpu: Schema.optional(Schema.Number),
                      memory: Schema.optional(Schema.String),
                      ephemeralStorage: Schema.optional(Schema.String),
                    }),
                  ),
                  volumeMounts: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        volumeName: Schema.optional(Schema.String),
                        mountPath: Schema.optional(Schema.String),
                        subPath: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            containers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  image: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  command: Schema.optional(Schema.Array(Schema.String)),
                  args: Schema.optional(Schema.Array(Schema.String)),
                  env: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                        secretRef: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  resources: Schema.optional(
                    Schema.Struct({
                      cpu: Schema.optional(Schema.Number),
                      memory: Schema.optional(Schema.String),
                      ephemeralStorage: Schema.optional(Schema.String),
                    }),
                  ),
                  volumeMounts: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        volumeName: Schema.optional(Schema.String),
                        mountPath: Schema.optional(Schema.String),
                        subPath: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            scale: Schema.optional(
              Schema.Struct({
                minReplicas: Schema.optional(Schema.Number),
                maxReplicas: Schema.optional(Schema.Number),
                cooldownPeriod: Schema.optional(Schema.Number),
                pollingInterval: Schema.optional(Schema.Number),
                rules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      azureQueue: Schema.optional(
                        Schema.Struct({
                          accountName: Schema.optional(Schema.String),
                          queueName: Schema.optional(Schema.String),
                          queueLength: Schema.optional(Schema.Number),
                          auth: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                secretRef: Schema.optional(Schema.String),
                                triggerParameter: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                          identity: Schema.optional(Schema.String),
                        }),
                      ),
                      custom: Schema.optional(
                        Schema.Struct({
                          type: Schema.optional(Schema.String),
                          metadata: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                          auth: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                secretRef: Schema.optional(Schema.String),
                                triggerParameter: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                          identity: Schema.optional(Schema.String),
                        }),
                      ),
                      http: Schema.optional(
                        Schema.Struct({
                          metadata: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                          auth: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                secretRef: Schema.optional(Schema.String),
                                triggerParameter: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                          identity: Schema.optional(Schema.String),
                        }),
                      ),
                      tcp: Schema.optional(
                        Schema.Struct({
                          metadata: Schema.optional(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                          auth: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                secretRef: Schema.optional(Schema.String),
                                triggerParameter: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                          identity: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
            volumes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  storageType: Schema.optional(
                    Schema.Literals([
                      "AzureFile",
                      "EmptyDir",
                      "Secret",
                      "NfsAzureFile",
                    ]),
                  ),
                  storageName: Schema.optional(Schema.String),
                  secrets: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        secretRef: Schema.optional(Schema.String),
                        path: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  mountOptions: Schema.optional(Schema.String),
                }),
              ),
            ),
            serviceBinds: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  serviceId: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        outboundIpAddresses: Schema.optional(Schema.Array(Schema.String)),
        eventStreamEndpoint: Schema.optional(Schema.String),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["CustomLocation"])),
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
    managedBy: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.Literals(["workflowapp", "functionapp"])),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ContainerAppsUpdateInput>;

// Output Schema
export interface ContainerAppsUpdateOutput {
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
export const ContainerAppsUpdateOutput =
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
  }) as unknown as Schema.Codec<ContainerAppsUpdateOutput>;

// The operation
/**
 * Update properties of a Container App
 *
 * Patches a Container App using JSON Merge Patch
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 */
export const ContainerAppsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ContainerAppsUpdateInput,
  outputSchema: ContainerAppsUpdateOutput,
}));
// Input Schema
export interface DaprComponentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  componentName: string;
  properties?: {
    componentType?: string;
    version?: string;
    ignoreErrors?: boolean;
    initTimeout?: string;
    secrets?: {
      name?: string;
      value?: string;
      identity?: string;
      keyVaultUrl?: string;
    }[];
    secretStoreComponent?: string;
    metadata?: { name?: string; value?: string; secretRef?: string }[];
    scopes?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    deploymentErrors?: string;
  };
}
export const DaprComponentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        componentType: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        ignoreErrors: Schema.optional(Schema.Boolean),
        initTimeout: Schema.optional(Schema.String),
        secrets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              identity: Schema.optional(Schema.String),
              keyVaultUrl: Schema.optional(Schema.String),
            }),
          ),
        ),
        secretStoreComponent: Schema.optional(Schema.String),
        metadata: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              secretRef: Schema.optional(Schema.String),
            }),
          ),
        ),
        scopes: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        deploymentErrors: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{componentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DaprComponentsCreateOrUpdateInput>;

// Output Schema
export interface DaprComponentsCreateOrUpdateOutput {
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
export const DaprComponentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DaprComponentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Dapr Component.
 *
 * Creates or updates a Dapr Component in a Managed Environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 * @param componentName - Name of the Dapr Component.
 */
export const DaprComponentsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DaprComponentsCreateOrUpdateInput,
    outputSchema: DaprComponentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DaprComponentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  componentName: string;
}
export const DaprComponentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{componentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DaprComponentsDeleteInput>;

// Output Schema
export type DaprComponentsDeleteOutput = void;
export const DaprComponentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DaprComponentsDeleteOutput>;

// The operation
/**
 * Delete a Dapr Component.
 *
 * Delete a Dapr Component from a Managed Environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 * @param componentName - Name of the Dapr Component.
 */
export const DaprComponentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DaprComponentsDeleteInput,
  outputSchema: DaprComponentsDeleteOutput,
}));
// Input Schema
export interface DaprComponentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  componentName: string;
}
export const DaprComponentsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  environmentName: Schema.String.pipe(T.PathParam()),
  componentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{componentName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<DaprComponentsGetInput>;

// Output Schema
export interface DaprComponentsGetOutput {
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
export const DaprComponentsGetOutput =
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
  }) as unknown as Schema.Codec<DaprComponentsGetOutput>;

// The operation
/**
 * Get a dapr component.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 * @param componentName - Name of the Dapr Component.
 */
export const DaprComponentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DaprComponentsGetInput,
  outputSchema: DaprComponentsGetOutput,
}));
// Input Schema
export interface DaprComponentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const DaprComponentsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DaprComponentsListInput>;

// Output Schema
export interface DaprComponentsListOutput {
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
export const DaprComponentsListOutput =
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
  }) as unknown as Schema.Codec<DaprComponentsListOutput>;

// The operation
/**
 * Get the Dapr Components for a managed environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 */
export const DaprComponentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DaprComponentsListInput,
  outputSchema: DaprComponentsListOutput,
}));
// Input Schema
export interface DaprComponentsListSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  componentName: string;
}
export const DaprComponentsListSecretsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/daprComponents/{componentName}/listSecrets",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DaprComponentsListSecretsInput>;

// Output Schema
export interface DaprComponentsListSecretsOutput {
  value: { name?: string; value?: string }[];
}
export const DaprComponentsListSecretsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DaprComponentsListSecretsOutput>;

// The operation
/**
 * List secrets for a dapr component
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 * @param componentName - Name of the Dapr Component.
 */
export const DaprComponentsListSecrets = /*@__PURE__*/ API.make(() => ({
  inputSchema: DaprComponentsListSecretsInput,
  outputSchema: DaprComponentsListSecretsOutput,
}));
// Input Schema
export interface GetCustomDomainVerificationIdInput {
  subscriptionId: string;
}
export const GetCustomDomainVerificationIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/getCustomDomainVerificationId",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<GetCustomDomainVerificationIdInput>;

// Output Schema
export type GetCustomDomainVerificationIdOutput = string;
export const GetCustomDomainVerificationIdOutput =
  /*@__PURE__*/ Schema.String as unknown as Schema.Codec<GetCustomDomainVerificationIdOutput>;

// The operation
/**
 * Get the verification id of a subscription used for verifying custom domains
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const GetCustomDomainVerificationId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetCustomDomainVerificationIdInput,
    outputSchema: GetCustomDomainVerificationIdOutput,
  }));
// Input Schema
export interface HttpRouteConfigCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  httpRouteName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Waiting"
      | "Updating"
      | "Deleting"
      | "Pending";
    provisioningErrors?: { timestamp?: string; message?: string }[];
    fqdn?: string;
    customDomains?: {
      name: string;
      bindingType?: "Disabled" | "SniEnabled" | "Auto";
      certificateId?: string;
    }[];
    rules?: {
      targets?: { containerApp: string; revision?: string; label?: string }[];
      routes?: {
        match?: {
          prefix?: string;
          path?: string;
          pathSeparatedPrefix?: string;
          caseSensitive?: boolean;
        };
        action?: { prefixRewrite?: string };
      }[];
      description?: string;
    }[];
  };
}
export const HttpRouteConfigCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    httpRouteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Waiting",
            "Updating",
            "Deleting",
            "Pending",
          ]),
        ),
        provisioningErrors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              timestamp: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        fqdn: Schema.optional(Schema.String),
        customDomains: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              bindingType: Schema.optional(
                Schema.Literals(["Disabled", "SniEnabled", "Auto"]),
              ),
              certificateId: Schema.optional(Schema.String),
            }),
          ),
        ),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              targets: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    containerApp: Schema.String,
                    revision: Schema.optional(Schema.String),
                    label: Schema.optional(Schema.String),
                  }),
                ),
              ),
              routes: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    match: Schema.optional(
                      Schema.Struct({
                        prefix: Schema.optional(Schema.String),
                        path: Schema.optional(Schema.String),
                        pathSeparatedPrefix: Schema.optional(Schema.String),
                        caseSensitive: Schema.optional(Schema.Boolean),
                      }),
                    ),
                    action: Schema.optional(
                      Schema.Struct({
                        prefixRewrite: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
              ),
              description: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/httpRouteConfigs/{httpRouteName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<HttpRouteConfigCreateOrUpdateInput>;

// Output Schema
export interface HttpRouteConfigCreateOrUpdateOutput {
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
export const HttpRouteConfigCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<HttpRouteConfigCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update a Http Route Config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param httpRouteName - Name of the Http Route Config.
 */
export const HttpRouteConfigCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: HttpRouteConfigCreateOrUpdateInput,
    outputSchema: HttpRouteConfigCreateOrUpdateOutput,
  }));
// Input Schema
export interface HttpRouteConfigDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  httpRouteName: string;
}
export const HttpRouteConfigDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    httpRouteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/httpRouteConfigs/{httpRouteName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<HttpRouteConfigDeleteInput>;

// Output Schema
export type HttpRouteConfigDeleteOutput = void;
export const HttpRouteConfigDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<HttpRouteConfigDeleteOutput>;

// The operation
/**
 * Deletes the specified Http Route Config.
 *
 * Deletes the specified Managed Http Route.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 * @param httpRouteName - Name of the Http Route Config Resource.
 */
export const HttpRouteConfigDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: HttpRouteConfigDeleteInput,
  outputSchema: HttpRouteConfigDeleteOutput,
}));
// Input Schema
export interface HttpRouteConfigGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  httpRouteName: string;
}
export const HttpRouteConfigGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    httpRouteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/httpRouteConfigs/{httpRouteName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<HttpRouteConfigGetInput>;

// Output Schema
export interface HttpRouteConfigGetOutput {
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
export const HttpRouteConfigGetOutput =
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
  }) as unknown as Schema.Codec<HttpRouteConfigGetOutput>;

// The operation
/**
 * Get the specified Http Route Config.
 *
 * Get the specified Managed Http Route Config.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param httpRouteName - Name of the Http Route Config.
 */
export const HttpRouteConfigGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: HttpRouteConfigGetInput,
  outputSchema: HttpRouteConfigGetOutput,
}));
// Input Schema
export interface HttpRouteConfigListInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const HttpRouteConfigListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/httpRouteConfigs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<HttpRouteConfigListInput>;

// Output Schema
export interface HttpRouteConfigListOutput {
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
export const HttpRouteConfigListOutput =
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
  }) as unknown as Schema.Codec<HttpRouteConfigListOutput>;

// The operation
/**
 * List the Http Route Configs in a given managed environment.
 *
 * Get the Managed Http Routes in a given managed environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 */
export const HttpRouteConfigList = /*@__PURE__*/ API.make(() => ({
  inputSchema: HttpRouteConfigListInput,
  outputSchema: HttpRouteConfigListOutput,
}));
// Input Schema
export interface HttpRouteConfigUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  httpRouteName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Waiting"
      | "Updating"
      | "Deleting"
      | "Pending";
    provisioningErrors?: { timestamp?: string; message?: string }[];
    fqdn?: string;
    customDomains?: {
      name: string;
      bindingType?: "Disabled" | "SniEnabled" | "Auto";
      certificateId?: string;
    }[];
    rules?: {
      targets?: { containerApp: string; revision?: string; label?: string }[];
      routes?: {
        match?: {
          prefix?: string;
          path?: string;
          pathSeparatedPrefix?: string;
          caseSensitive?: boolean;
        };
        action?: { prefixRewrite?: string };
      }[];
      description?: string;
    }[];
  };
}
export const HttpRouteConfigUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    httpRouteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Waiting",
            "Updating",
            "Deleting",
            "Pending",
          ]),
        ),
        provisioningErrors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              timestamp: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        fqdn: Schema.optional(Schema.String),
        customDomains: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              bindingType: Schema.optional(
                Schema.Literals(["Disabled", "SniEnabled", "Auto"]),
              ),
              certificateId: Schema.optional(Schema.String),
            }),
          ),
        ),
        rules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              targets: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    containerApp: Schema.String,
                    revision: Schema.optional(Schema.String),
                    label: Schema.optional(Schema.String),
                  }),
                ),
              ),
              routes: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    match: Schema.optional(
                      Schema.Struct({
                        prefix: Schema.optional(Schema.String),
                        path: Schema.optional(Schema.String),
                        pathSeparatedPrefix: Schema.optional(Schema.String),
                        caseSensitive: Schema.optional(Schema.Boolean),
                      }),
                    ),
                    action: Schema.optional(
                      Schema.Struct({
                        prefixRewrite: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
              ),
              description: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/httpRouteConfigs/{httpRouteName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<HttpRouteConfigUpdateInput>;

// Output Schema
export interface HttpRouteConfigUpdateOutput {
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
export const HttpRouteConfigUpdateOutput =
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
  }) as unknown as Schema.Codec<HttpRouteConfigUpdateOutput>;

// The operation
/**
 * Update tags of a Http Route Config object
 *
 * Patches an http route config resource. Only patching of tags is supported
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 * @param httpRouteName - Name of the Http Route Config Resource.
 */
export const HttpRouteConfigUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: HttpRouteConfigUpdateInput,
  outputSchema: HttpRouteConfigUpdateOutput,
}));
// Input Schema
export interface JavaComponentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  name: string;
  properties?: {
    componentType:
      | "SpringBootAdmin"
      | "SpringCloudEureka"
      | "SpringCloudConfig";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting"
      | "InProgress";
    configurations?: { propertyName?: string; value?: string }[];
    scale?: { minReplicas?: number; maxReplicas?: number };
    serviceBinds?: { name?: string; serviceId?: string }[];
  };
}
export const JavaComponentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        componentType: Schema.Literals([
          "SpringBootAdmin",
          "SpringCloudEureka",
          "SpringCloudConfig",
        ]),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
            "InProgress",
          ]),
        ),
        configurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              propertyName: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        scale: Schema.optional(
          Schema.Struct({
            minReplicas: Schema.optional(Schema.Number),
            maxReplicas: Schema.optional(Schema.Number),
          }),
        ),
        serviceBinds: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              serviceId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/javaComponents/{name}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<JavaComponentsCreateOrUpdateInput>;

// Output Schema
export interface JavaComponentsCreateOrUpdateOutput {
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
export const JavaComponentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<JavaComponentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Java Component.
 *
 * Creates or updates a Java Component in a Managed Environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param name - Name of the Java Component.
 */
export const JavaComponentsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: JavaComponentsCreateOrUpdateInput,
    outputSchema: JavaComponentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface JavaComponentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  name: string;
}
export const JavaComponentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/javaComponents/{name}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<JavaComponentsDeleteInput>;

// Output Schema
export type JavaComponentsDeleteOutput = void;
export const JavaComponentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<JavaComponentsDeleteOutput>;

// The operation
/**
 * Delete.
 *
 * Delete a Java Component.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param name - Name of the Java Component.
 */
export const JavaComponentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: JavaComponentsDeleteInput,
  outputSchema: JavaComponentsDeleteOutput,
}));
// Input Schema
export interface JavaComponentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  name: string;
}
export const JavaComponentsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  environmentName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/javaComponents/{name}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JavaComponentsGetInput>;

// Output Schema
export interface JavaComponentsGetOutput {
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
export const JavaComponentsGetOutput =
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
  }) as unknown as Schema.Codec<JavaComponentsGetOutput>;

// The operation
/**
 * Get a Java Component.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param name - Name of the Java Component.
 */
export const JavaComponentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: JavaComponentsGetInput,
  outputSchema: JavaComponentsGetOutput,
}));
// Input Schema
export interface JavaComponentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const JavaComponentsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/javaComponents",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<JavaComponentsListInput>;

// Output Schema
export interface JavaComponentsListOutput {
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
export const JavaComponentsListOutput =
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
  }) as unknown as Schema.Codec<JavaComponentsListOutput>;

// The operation
/**
 * Get the Java Components for a managed environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 */
export const JavaComponentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: JavaComponentsListInput,
  outputSchema: JavaComponentsListOutput,
}));
// Input Schema
export interface JavaComponentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  name: string;
  properties?: {
    componentType:
      | "SpringBootAdmin"
      | "SpringCloudEureka"
      | "SpringCloudConfig";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting"
      | "InProgress";
    configurations?: { propertyName?: string; value?: string }[];
    scale?: { minReplicas?: number; maxReplicas?: number };
    serviceBinds?: { name?: string; serviceId?: string }[];
  };
}
export const JavaComponentsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        componentType: Schema.Literals([
          "SpringBootAdmin",
          "SpringCloudEureka",
          "SpringCloudConfig",
        ]),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
            "InProgress",
          ]),
        ),
        configurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              propertyName: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        scale: Schema.optional(
          Schema.Struct({
            minReplicas: Schema.optional(Schema.Number),
            maxReplicas: Schema.optional(Schema.Number),
          }),
        ),
        serviceBinds: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              serviceId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/javaComponents/{name}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<JavaComponentsUpdateInput>;

// Output Schema
export interface JavaComponentsUpdateOutput {
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
export const JavaComponentsUpdateOutput =
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
  }) as unknown as Schema.Codec<JavaComponentsUpdateOutput>;

// The operation
/**
 * Update properties of a Java Component
 *
 * Patches a Java Component using JSON Merge Patch
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param name - Name of the Java Component.
 */
export const JavaComponentsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: JavaComponentsUpdateInput,
  outputSchema: JavaComponentsUpdateOutput,
}));
// Input Schema
export interface JobExecutionInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  jobExecutionName: string;
}
export const JobExecutionInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  jobExecutionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}/executions/{jobExecutionName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JobExecutionInput>;

// Output Schema
export interface JobExecutionOutput {
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
export const JobExecutionOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobExecutionOutput>;

// The operation
/**
 * Get details of a single job execution
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 * @param jobExecutionName - Job execution name.
 */
export const JobExecution = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobExecutionInput,
  outputSchema: JobExecutionOutput,
}));
// Input Schema
export interface JobsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  properties?: {
    provisioningState?:
      | "InProgress"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting";
    environmentId?: string;
    workloadProfileName?: string;
    configuration?: {
      secrets?: {
        name?: string;
        value?: string;
        identity?: string;
        keyVaultUrl?: string;
      }[];
      triggerType: "Schedule" | "Event" | "Manual";
      replicaTimeout: number;
      replicaRetryLimit?: number;
      manualTriggerConfig?: {
        replicaCompletionCount?: number;
        parallelism?: number;
      };
      scheduleTriggerConfig?: {
        replicaCompletionCount?: number;
        cronExpression: string;
        parallelism?: number;
      };
      eventTriggerConfig?: {
        replicaCompletionCount?: number;
        parallelism?: number;
        scale?: {
          pollingInterval?: number;
          minExecutions?: number;
          maxExecutions?: number;
          rules?: {
            name?: string;
            type?: string;
            metadata?: unknown;
            auth?: { secretRef?: string; triggerParameter?: string }[];
            identity?: string;
          }[];
        };
      };
      registries?: {
        server?: string;
        username?: string;
        passwordSecretRef?: string | Redacted.Redacted<string>;
        identity?: string;
      }[];
      identitySettings?: {
        identity: string;
        lifecycle?: "None" | "Main" | "Init" | "All";
      }[];
    };
    template?: {
      initContainers?: {
        image?: string;
        name?: string;
        command?: string[];
        args?: string[];
        env?: { name?: string; value?: string; secretRef?: string }[];
        resources?: {
          cpu?: number;
          memory?: string;
          ephemeralStorage?: string;
        };
        volumeMounts?: {
          volumeName?: string;
          mountPath?: string;
          subPath?: string;
        }[];
      }[];
      containers?: {
        image?: string;
        name?: string;
        command?: string[];
        args?: string[];
        env?: { name?: string; value?: string; secretRef?: string }[];
        resources?: {
          cpu?: number;
          memory?: string;
          ephemeralStorage?: string;
        };
        volumeMounts?: {
          volumeName?: string;
          mountPath?: string;
          subPath?: string;
        }[];
      }[];
      volumes?: {
        name?: string;
        storageType?: "AzureFile" | "EmptyDir" | "Secret" | "NfsAzureFile";
        storageName?: string;
        secrets?: { secretRef?: string; path?: string }[];
        mountOptions?: string;
      }[];
    };
    outboundIpAddresses?: string[];
    eventStreamEndpoint?: string;
  };
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const JobsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "InProgress",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
          ]),
        ),
        environmentId: Schema.optional(Schema.String),
        workloadProfileName: Schema.optional(Schema.String),
        configuration: Schema.optional(
          Schema.Struct({
            secrets: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                  identity: Schema.optional(Schema.String),
                  keyVaultUrl: Schema.optional(Schema.String),
                }),
              ),
            ),
            triggerType: Schema.Literals(["Schedule", "Event", "Manual"]),
            replicaTimeout: Schema.Number,
            replicaRetryLimit: Schema.optional(Schema.Number),
            manualTriggerConfig: Schema.optional(
              Schema.Struct({
                replicaCompletionCount: Schema.optional(Schema.Number),
                parallelism: Schema.optional(Schema.Number),
              }),
            ),
            scheduleTriggerConfig: Schema.optional(
              Schema.Struct({
                replicaCompletionCount: Schema.optional(Schema.Number),
                cronExpression: Schema.String,
                parallelism: Schema.optional(Schema.Number),
              }),
            ),
            eventTriggerConfig: Schema.optional(
              Schema.Struct({
                replicaCompletionCount: Schema.optional(Schema.Number),
                parallelism: Schema.optional(Schema.Number),
                scale: Schema.optional(
                  Schema.Struct({
                    pollingInterval: Schema.optional(Schema.Number),
                    minExecutions: Schema.optional(Schema.Number),
                    maxExecutions: Schema.optional(Schema.Number),
                    rules: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          type: Schema.optional(Schema.String),
                          metadata: Schema.optional(Schema.Unknown),
                          auth: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                secretRef: Schema.optional(Schema.String),
                                triggerParameter: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                          identity: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            registries: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  server: Schema.optional(Schema.String),
                  username: Schema.optional(Schema.String),
                  passwordSecretRef: Schema.optional(SensitiveString),
                  identity: Schema.optional(Schema.String),
                }),
              ),
            ),
            identitySettings: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  identity: Schema.String,
                  lifecycle: Schema.optional(
                    Schema.Literals(["None", "Main", "Init", "All"]),
                  ),
                }),
              ),
            ),
          }),
        ),
        template: Schema.optional(
          Schema.Struct({
            initContainers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  image: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  command: Schema.optional(Schema.Array(Schema.String)),
                  args: Schema.optional(Schema.Array(Schema.String)),
                  env: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                        secretRef: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  resources: Schema.optional(
                    Schema.Struct({
                      cpu: Schema.optional(Schema.Number),
                      memory: Schema.optional(Schema.String),
                      ephemeralStorage: Schema.optional(Schema.String),
                    }),
                  ),
                  volumeMounts: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        volumeName: Schema.optional(Schema.String),
                        mountPath: Schema.optional(Schema.String),
                        subPath: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            containers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  image: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  command: Schema.optional(Schema.Array(Schema.String)),
                  args: Schema.optional(Schema.Array(Schema.String)),
                  env: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        value: Schema.optional(Schema.String),
                        secretRef: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  resources: Schema.optional(
                    Schema.Struct({
                      cpu: Schema.optional(Schema.Number),
                      memory: Schema.optional(Schema.String),
                      ephemeralStorage: Schema.optional(Schema.String),
                    }),
                  ),
                  volumeMounts: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        volumeName: Schema.optional(Schema.String),
                        mountPath: Schema.optional(Schema.String),
                        subPath: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            volumes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  storageType: Schema.optional(
                    Schema.Literals([
                      "AzureFile",
                      "EmptyDir",
                      "Secret",
                      "NfsAzureFile",
                    ]),
                  ),
                  storageName: Schema.optional(Schema.String),
                  secrets: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        secretRef: Schema.optional(Schema.String),
                        path: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  mountOptions: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        outboundIpAddresses: Schema.optional(Schema.Array(Schema.String)),
        eventStreamEndpoint: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<JobsCreateOrUpdateInput>;

// Output Schema
export interface JobsCreateOrUpdateOutput {
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
export const JobsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<JobsCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update a Container Apps Job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 */
export const JobsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsCreateOrUpdateInput,
  outputSchema: JobsCreateOrUpdateOutput,
}));
// Input Schema
export interface JobsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
}
export const JobsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JobsDeleteInput>;

// Output Schema
export type JobsDeleteOutput = void;
export const JobsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<JobsDeleteOutput>;

// The operation
/**
 * Delete a Container Apps Job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 */
export const JobsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsDeleteInput,
  outputSchema: JobsDeleteOutput,
}));
// Input Schema
export interface JobsExecutionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  $filter?: string;
}
export const JobsExecutionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}/executions",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<JobsExecutionsListInput>;

// Output Schema
export interface JobsExecutionsListOutput {
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
export const JobsExecutionsListOutput =
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
  }) as unknown as Schema.Codec<JobsExecutionsListOutput>;

// The operation
/**
 * Get a Container Apps Job's executions
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 * @param $filter - The filter to apply on the operation.
 */
export const JobsExecutionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsExecutionsListInput,
  outputSchema: JobsExecutionsListOutput,
}));
// Input Schema
export interface JobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
}
export const JobsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JobsGetInput>;

// Output Schema
export interface JobsGetOutput {
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
export const JobsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsGetOutput>;

// The operation
/**
 * Get the properties of a Container Apps Job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 */
export const JobsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsGetInput,
  outputSchema: JobsGetOutput,
}));
// Input Schema
export interface JobsGetDetectorInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  detectorName: string;
}
export const JobsGetDetectorInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  detectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}/detectors/{detectorName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JobsGetDetectorInput>;

// Output Schema
export interface JobsGetDetectorOutput {
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
export const JobsGetDetectorOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsGetDetectorOutput>;

// The operation
/**
 * Get the diagnostics data for a given Container App Job.
 *
 * Get the diagnostics data for a Container App Job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Name of the Container App Job.
 * @param detectorName - Proxy API Name for Container App Job.
 */
export const JobsGetDetector = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsGetDetectorInput,
  outputSchema: JobsGetDetectorOutput,
}));
// Input Schema
export interface JobsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const JobsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<JobsListByResourceGroupInput>;

// Output Schema
export interface JobsListByResourceGroupOutput {
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
export const JobsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<JobsListByResourceGroupOutput>;

// The operation
/**
 * Get the Container Apps Jobs in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const JobsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsListByResourceGroupInput,
  outputSchema: JobsListByResourceGroupOutput,
}));
// Input Schema
export interface JobsListBySubscriptionInput {
  subscriptionId: string;
}
export const JobsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/jobs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<JobsListBySubscriptionInput>;

// Output Schema
export interface JobsListBySubscriptionOutput {
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
export const JobsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<JobsListBySubscriptionOutput>;

// The operation
/**
 * Get the Container Apps Jobs in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const JobsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsListBySubscriptionInput,
  outputSchema: JobsListBySubscriptionOutput,
}));
// Input Schema
export interface JobsListDetectorsInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
}
export const JobsListDetectorsInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}/detectors",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JobsListDetectorsInput>;

// Output Schema
export interface JobsListDetectorsOutput {
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
export const JobsListDetectorsOutput =
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
  }) as unknown as Schema.Codec<JobsListDetectorsOutput>;

// The operation
/**
 * Get the list of diagnostics for a given Container App Job.
 *
 * Get the list of diagnostics for a Container App Job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Name of the Container App Job.
 */
export const JobsListDetectors = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsListDetectorsInput,
  outputSchema: JobsListDetectorsOutput,
}));
// Input Schema
export interface JobsListSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
}
export const JobsListSecretsInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}/listSecrets",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JobsListSecretsInput>;

// Output Schema
export interface JobsListSecretsOutput {
  value: {
    name?: string;
    value?: string;
    identity?: string;
    keyVaultUrl?: string;
  }[];
}
export const JobsListSecretsOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      value: Schema.optional(Schema.String),
      identity: Schema.optional(Schema.String),
      keyVaultUrl: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<JobsListSecretsOutput>;

// The operation
/**
 * List secrets for a container apps job
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 */
export const JobsListSecrets = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsListSecretsInput,
  outputSchema: JobsListSecretsOutput,
}));
// Input Schema
export interface JobsProxyGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  apiName: string;
}
export const JobsProxyGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  apiName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}/detectorProperties/{apiName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JobsProxyGetInput>;

// Output Schema
export interface JobsProxyGetOutput {
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
export const JobsProxyGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsProxyGetOutput>;

// The operation
/**
 * Get the properties of a Container App Job.
 *
 * Get the properties for a given Container App Job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 * @param apiName - Proxy API Name for Container App Job.
 */
export const JobsProxyGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsProxyGetInput,
  outputSchema: JobsProxyGetOutput,
}));
// Input Schema
export interface JobsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  containers?: {
    image?: string;
    name?: string;
    command?: string[];
    args?: string[];
    env?: { name?: string; value?: string; secretRef?: string }[];
    resources?: { cpu?: number; memory?: string; ephemeralStorage?: string };
  }[];
  initContainers?: {
    image?: string;
    name?: string;
    command?: string[];
    args?: string[];
    env?: { name?: string; value?: string; secretRef?: string }[];
    resources?: { cpu?: number; memory?: string; ephemeralStorage?: string };
  }[];
}
export const JobsStartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  containers: Schema.optional(
    Schema.Array(
      Schema.Struct({
        image: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        command: Schema.optional(Schema.Array(Schema.String)),
        args: Schema.optional(Schema.Array(Schema.String)),
        env: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              secretRef: Schema.optional(Schema.String),
            }),
          ),
        ),
        resources: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.Number),
            memory: Schema.optional(Schema.String),
            ephemeralStorage: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  initContainers: Schema.optional(
    Schema.Array(
      Schema.Struct({
        image: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        command: Schema.optional(Schema.Array(Schema.String)),
        args: Schema.optional(Schema.Array(Schema.String)),
        env: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              secretRef: Schema.optional(Schema.String),
            }),
          ),
        ),
        resources: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.Number),
            memory: Schema.optional(Schema.String),
            ephemeralStorage: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}/start",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JobsStartInput>;

// Output Schema
export interface JobsStartOutput {
  name?: string;
  id?: string;
}
export const JobsStartOutput = /*@__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<JobsStartOutput>;

// The operation
/**
 * Start a Container Apps Job
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 */
export const JobsStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsStartInput,
  outputSchema: JobsStartOutput,
}));
// Input Schema
export interface JobsStopExecutionInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  jobExecutionName: string;
}
export const JobsStopExecutionInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  jobExecutionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}/executions/{jobExecutionName}/stop",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JobsStopExecutionInput>;

// Output Schema
export type JobsStopExecutionOutput = void;
export const JobsStopExecutionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<JobsStopExecutionOutput>;

// The operation
/**
 * Terminates execution of a running container apps job
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 * @param jobExecutionName - Job execution name.
 */
export const JobsStopExecution = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsStopExecutionInput,
  outputSchema: JobsStopExecutionOutput,
}));
// Input Schema
export interface JobsStopMultipleExecutionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
}
export const JobsStopMultipleExecutionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}/stop",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<JobsStopMultipleExecutionsInput>;

// Output Schema
export interface JobsStopMultipleExecutionsOutput {
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
export const JobsStopMultipleExecutionsOutput =
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
  }) as unknown as Schema.Codec<JobsStopMultipleExecutionsOutput>;

// The operation
/**
 * Terminates execution of a running container apps job
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 */
export const JobsStopMultipleExecutions = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsStopMultipleExecutionsInput,
  outputSchema: JobsStopMultipleExecutionsOutput,
}));
// Input Schema
export interface JobsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
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
    >;
  };
  tags?: Record<string, string>;
  properties?: {
    environmentId?: string;
    configuration?: {
      secrets?: {
        name?: string;
        value?: string;
        identity?: string;
        keyVaultUrl?: string;
      }[];
      triggerType: "Schedule" | "Event" | "Manual";
      replicaTimeout: number;
      replicaRetryLimit?: number;
      manualTriggerConfig?: {
        replicaCompletionCount?: number;
        parallelism?: number;
      };
      scheduleTriggerConfig?: {
        replicaCompletionCount?: number;
        cronExpression: string;
        parallelism?: number;
      };
      eventTriggerConfig?: {
        replicaCompletionCount?: number;
        parallelism?: number;
        scale?: {
          pollingInterval?: number;
          minExecutions?: number;
          maxExecutions?: number;
          rules?: {
            name?: string;
            type?: string;
            metadata?: unknown;
            auth?: { secretRef?: string; triggerParameter?: string }[];
            identity?: string;
          }[];
        };
      };
      registries?: {
        server?: string;
        username?: string;
        passwordSecretRef?: string | Redacted.Redacted<string>;
        identity?: string;
      }[];
      identitySettings?: {
        identity: string;
        lifecycle?: "None" | "Main" | "Init" | "All";
      }[];
    };
    template?: {
      initContainers?: {
        image?: string;
        name?: string;
        command?: string[];
        args?: string[];
        env?: { name?: string; value?: string; secretRef?: string }[];
        resources?: {
          cpu?: number;
          memory?: string;
          ephemeralStorage?: string;
        };
        volumeMounts?: {
          volumeName?: string;
          mountPath?: string;
          subPath?: string;
        }[];
      }[];
      containers?: {
        image?: string;
        name?: string;
        command?: string[];
        args?: string[];
        env?: { name?: string; value?: string; secretRef?: string }[];
        resources?: {
          cpu?: number;
          memory?: string;
          ephemeralStorage?: string;
        };
        volumeMounts?: {
          volumeName?: string;
          mountPath?: string;
          subPath?: string;
        }[];
      }[];
      volumes?: {
        name?: string;
        storageType?: "AzureFile" | "EmptyDir" | "Secret" | "NfsAzureFile";
        storageName?: string;
        secrets?: { secretRef?: string; path?: string }[];
        mountOptions?: string;
      }[];
    };
    outboundIpAddresses?: string[];
    eventStreamEndpoint?: string;
  };
}
export const JobsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
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
      environmentId: Schema.optional(Schema.String),
      configuration: Schema.optional(
        Schema.Struct({
          secrets: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
                identity: Schema.optional(Schema.String),
                keyVaultUrl: Schema.optional(Schema.String),
              }),
            ),
          ),
          triggerType: Schema.Literals(["Schedule", "Event", "Manual"]),
          replicaTimeout: Schema.Number,
          replicaRetryLimit: Schema.optional(Schema.Number),
          manualTriggerConfig: Schema.optional(
            Schema.Struct({
              replicaCompletionCount: Schema.optional(Schema.Number),
              parallelism: Schema.optional(Schema.Number),
            }),
          ),
          scheduleTriggerConfig: Schema.optional(
            Schema.Struct({
              replicaCompletionCount: Schema.optional(Schema.Number),
              cronExpression: Schema.String,
              parallelism: Schema.optional(Schema.Number),
            }),
          ),
          eventTriggerConfig: Schema.optional(
            Schema.Struct({
              replicaCompletionCount: Schema.optional(Schema.Number),
              parallelism: Schema.optional(Schema.Number),
              scale: Schema.optional(
                Schema.Struct({
                  pollingInterval: Schema.optional(Schema.Number),
                  minExecutions: Schema.optional(Schema.Number),
                  maxExecutions: Schema.optional(Schema.Number),
                  rules: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        type: Schema.optional(Schema.String),
                        metadata: Schema.optional(Schema.Unknown),
                        auth: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              secretRef: Schema.optional(Schema.String),
                              triggerParameter: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        identity: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          registries: Schema.optional(
            Schema.Array(
              Schema.Struct({
                server: Schema.optional(Schema.String),
                username: Schema.optional(Schema.String),
                passwordSecretRef: Schema.optional(SensitiveString),
                identity: Schema.optional(Schema.String),
              }),
            ),
          ),
          identitySettings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                identity: Schema.String,
                lifecycle: Schema.optional(
                  Schema.Literals(["None", "Main", "Init", "All"]),
                ),
              }),
            ),
          ),
        }),
      ),
      template: Schema.optional(
        Schema.Struct({
          initContainers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                image: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                command: Schema.optional(Schema.Array(Schema.String)),
                args: Schema.optional(Schema.Array(Schema.String)),
                env: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      value: Schema.optional(Schema.String),
                      secretRef: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                resources: Schema.optional(
                  Schema.Struct({
                    cpu: Schema.optional(Schema.Number),
                    memory: Schema.optional(Schema.String),
                    ephemeralStorage: Schema.optional(Schema.String),
                  }),
                ),
                volumeMounts: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      volumeName: Schema.optional(Schema.String),
                      mountPath: Schema.optional(Schema.String),
                      subPath: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          ),
          containers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                image: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                command: Schema.optional(Schema.Array(Schema.String)),
                args: Schema.optional(Schema.Array(Schema.String)),
                env: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      value: Schema.optional(Schema.String),
                      secretRef: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                resources: Schema.optional(
                  Schema.Struct({
                    cpu: Schema.optional(Schema.Number),
                    memory: Schema.optional(Schema.String),
                    ephemeralStorage: Schema.optional(Schema.String),
                  }),
                ),
                volumeMounts: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      volumeName: Schema.optional(Schema.String),
                      mountPath: Schema.optional(Schema.String),
                      subPath: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          ),
          volumes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                storageType: Schema.optional(
                  Schema.Literals([
                    "AzureFile",
                    "EmptyDir",
                    "Secret",
                    "NfsAzureFile",
                  ]),
                ),
                storageName: Schema.optional(Schema.String),
                secrets: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      secretRef: Schema.optional(Schema.String),
                      path: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                mountOptions: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      outboundIpAddresses: Schema.optional(Schema.Array(Schema.String)),
      eventStreamEndpoint: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<JobsUpdateInput>;

// Output Schema
export interface JobsUpdateOutput {
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
export const JobsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsUpdateOutput>;

// The operation
/**
 * Update properties of a Container Apps Job
 *
 * Patches a Container Apps Job using JSON Merge Patch
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - Job Name
 */
export const JobsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsUpdateInput,
  outputSchema: JobsUpdateOutput,
}));
// Input Schema
export interface LogicAppsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  logicAppName: string;
}
export const LogicAppsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    logicAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/providers/Microsoft.App/logicApps/{logicAppName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<LogicAppsCreateOrUpdateInput>;

// Output Schema
export interface LogicAppsCreateOrUpdateOutput {
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
export const LogicAppsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<LogicAppsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Logic App extension resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param logicAppName - Name of the Logic App, the extension resource.
 */
export const LogicAppsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogicAppsCreateOrUpdateInput,
  outputSchema: LogicAppsCreateOrUpdateOutput,
}));
// Input Schema
export interface LogicAppsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  logicAppName: string;
}
export const LogicAppsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerAppName: Schema.String.pipe(T.PathParam()),
  logicAppName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/providers/Microsoft.App/logicApps/{logicAppName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<LogicAppsDeleteInput>;

// Output Schema
export type LogicAppsDeleteOutput = void;
export const LogicAppsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LogicAppsDeleteOutput>;

// The operation
/**
 * Deletes a Logic App extension resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param logicAppName - Name of the Logic App, the extension resource.
 */
export const LogicAppsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogicAppsDeleteInput,
  outputSchema: LogicAppsDeleteOutput,
}));
// Input Schema
export interface LogicAppsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  logicAppName: string;
}
export const LogicAppsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  containerAppName: Schema.String.pipe(T.PathParam()),
  logicAppName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/providers/Microsoft.App/logicApps/{logicAppName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<LogicAppsGetInput>;

// Output Schema
export interface LogicAppsGetOutput {
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
export const LogicAppsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<LogicAppsGetOutput>;

// The operation
/**
 * Gets a logic app extension resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param logicAppName - Name of the Logic App, the extension resource.
 */
export const LogicAppsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogicAppsGetInput,
  outputSchema: LogicAppsGetOutput,
}));
// Input Schema
export interface LogicAppsGetWorkflowInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  logicAppName: string;
  workflowName: string;
}
export const LogicAppsGetWorkflowInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    logicAppName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/providers/Microsoft.App/logicApps/{logicAppName}/workflows/{workflowName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<LogicAppsGetWorkflowInput>;

// Output Schema
export interface LogicAppsGetWorkflowOutput {
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
export const LogicAppsGetWorkflowOutput =
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
  }) as unknown as Schema.Codec<LogicAppsGetWorkflowOutput>;

// The operation
/**
 * Get workflow information by its name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param logicAppName - Name of the Logic App, the extension resource.
 * @param workflowName - Workflow name.
 */
export const LogicAppsGetWorkflow = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogicAppsGetWorkflowInput,
  outputSchema: LogicAppsGetWorkflowOutput,
}));
// Input Schema
export interface LogicAppsListWorkflowsInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  logicAppName: string;
}
export const LogicAppsListWorkflowsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    logicAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/providers/Microsoft.App/logicApps/{logicAppName}/workflows",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<LogicAppsListWorkflowsInput>;

// Output Schema
export interface LogicAppsListWorkflowsOutput {
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
export const LogicAppsListWorkflowsOutput =
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
  }) as unknown as Schema.Codec<LogicAppsListWorkflowsOutput>;

// The operation
/**
 * List the workflows for a logic app.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param logicAppName - Name of the Logic App, the extension resource.
 */
export const LogicAppsListWorkflows = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogicAppsListWorkflowsInput,
  outputSchema: LogicAppsListWorkflowsOutput,
}));
// Input Schema
export interface LogicAppsListWorkflowsConnectionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  containerAppName: string;
  logicAppName: string;
}
export const LogicAppsListWorkflowsConnectionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    containerAppName: Schema.String.pipe(T.PathParam()),
    logicAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/providers/Microsoft.App/logicApps/{logicAppName}/listWorkflowsConnections",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<LogicAppsListWorkflowsConnectionsInput>;

// Output Schema
export interface LogicAppsListWorkflowsConnectionsOutput {
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
export const LogicAppsListWorkflowsConnectionsOutput =
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
  }) as unknown as Schema.Codec<LogicAppsListWorkflowsConnectionsOutput>;

// The operation
/**
 * Gets logic app's connections.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param containerAppName - Name of the Container App.
 * @param logicAppName - Name of the Logic App, the extension resource.
 */
export const LogicAppsListWorkflowsConnections =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LogicAppsListWorkflowsConnectionsInput,
    outputSchema: LogicAppsListWorkflowsConnectionsOutput,
  }));
// Input Schema
export interface MaintenanceConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  configName: string;
  properties?: {
    scheduledEntries: {
      weekDay:
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
        | "Sunday";
      startHourUtc: number;
      durationHours: number;
    }[];
  };
}
export const MaintenanceConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    configName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        scheduledEntries: Schema.Array(
          Schema.Struct({
            weekDay: Schema.Literals([
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ]),
            startHourUtc: Schema.Number,
            durationHours: Schema.Number,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/maintenanceConfigurations/{configName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<MaintenanceConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface MaintenanceConfigurationsCreateOrUpdateOutput {
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
export const MaintenanceConfigurationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<MaintenanceConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the maintenance configuration for Managed Environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param configName - Name of the Maintenance Configuration.
 */
export const MaintenanceConfigurationsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsCreateOrUpdateInput,
    outputSchema: MaintenanceConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface MaintenanceConfigurationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  configName: string;
}
export const MaintenanceConfigurationsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    configName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/maintenanceConfigurations/{configName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<MaintenanceConfigurationsDeleteInput>;

// Output Schema
export type MaintenanceConfigurationsDeleteOutput = void;
export const MaintenanceConfigurationsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MaintenanceConfigurationsDeleteOutput>;

// The operation
/**
 * Deletes the maintenance configuration of a ManagedEnvironment .
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param configName - Name of the Maintenance Configuration.
 */
export const MaintenanceConfigurationsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsDeleteInput,
    outputSchema: MaintenanceConfigurationsDeleteOutput,
  }));
// Input Schema
export interface MaintenanceConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  configName: string;
}
export const MaintenanceConfigurationsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    configName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/maintenanceConfigurations/{configName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<MaintenanceConfigurationsGetInput>;

// Output Schema
export interface MaintenanceConfigurationsGetOutput {
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
export const MaintenanceConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<MaintenanceConfigurationsGetOutput>;

// The operation
/**
 * Gets the maintenance configuration of a ManagedEnvironment .
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param configName - Name of the Maintenance Configuration.
 */
export const MaintenanceConfigurationsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsGetInput,
    outputSchema: MaintenanceConfigurationsGetOutput,
  }));
// Input Schema
export interface MaintenanceConfigurationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const MaintenanceConfigurationsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/maintenanceConfigurations",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<MaintenanceConfigurationsListInput>;

// Output Schema
export interface MaintenanceConfigurationsListOutput {
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
export const MaintenanceConfigurationsListOutput =
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
  }) as unknown as Schema.Codec<MaintenanceConfigurationsListOutput>;

// The operation
/**
 * Gets all maintenance configurations in the specified Managed Environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 */
export const MaintenanceConfigurationsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsListInput,
    outputSchema: MaintenanceConfigurationsListOutput,
  }));
// Input Schema
export interface ManagedCertificatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  managedCertificateName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "DeleteFailed"
      | "Pending"
      | "Deleting";
    subjectName?: string;
    error?: string;
    domainControlValidation?: "CNAME" | "HTTP" | "TXT";
    validationToken?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ManagedCertificatesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    managedCertificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "DeleteFailed",
            "Pending",
            "Deleting",
          ]),
        ),
        subjectName: Schema.optional(Schema.String),
        error: Schema.optional(Schema.String),
        domainControlValidation: Schema.optional(
          Schema.Literals(["CNAME", "HTTP", "TXT"]),
        ),
        validationToken: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/managedCertificates/{managedCertificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedCertificatesCreateOrUpdateInput>;

// Output Schema
export interface ManagedCertificatesCreateOrUpdateOutput {
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
export const ManagedCertificatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedCertificatesCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update a Managed Certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 * @param managedCertificateName - Name of the Managed Certificate.
 */
export const ManagedCertificatesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedCertificatesCreateOrUpdateInput,
    outputSchema: ManagedCertificatesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagedCertificatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  managedCertificateName: string;
}
export const ManagedCertificatesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    managedCertificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/managedCertificates/{managedCertificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedCertificatesDeleteInput>;

// Output Schema
export type ManagedCertificatesDeleteOutput = void;
export const ManagedCertificatesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedCertificatesDeleteOutput>;

// The operation
/**
 * Deletes the specified Managed Certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 * @param managedCertificateName - Name of the Managed Certificate.
 */
export const ManagedCertificatesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedCertificatesDeleteInput,
  outputSchema: ManagedCertificatesDeleteOutput,
}));
// Input Schema
export interface ManagedCertificatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  managedCertificateName: string;
}
export const ManagedCertificatesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    managedCertificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/managedCertificates/{managedCertificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedCertificatesGetInput>;

// Output Schema
export interface ManagedCertificatesGetOutput {
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
export const ManagedCertificatesGetOutput =
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
  }) as unknown as Schema.Codec<ManagedCertificatesGetOutput>;

// The operation
/**
 * Get the specified Managed Certificate.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 * @param managedCertificateName - Name of the Managed Certificate.
 */
export const ManagedCertificatesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedCertificatesGetInput,
  outputSchema: ManagedCertificatesGetOutput,
}));
// Input Schema
export interface ManagedCertificatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedCertificatesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/managedCertificates",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedCertificatesListInput>;

// Output Schema
export interface ManagedCertificatesListOutput {
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
export const ManagedCertificatesListOutput =
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
  }) as unknown as Schema.Codec<ManagedCertificatesListOutput>;

// The operation
/**
 * Get the Managed Certificates in a given managed environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 */
export const ManagedCertificatesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedCertificatesListInput,
  outputSchema: ManagedCertificatesListOutput,
}));
// Input Schema
export interface ManagedCertificatesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  managedCertificateName: string;
  tags?: Record<string, string>;
}
export const ManagedCertificatesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    managedCertificateName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/managedCertificates/{managedCertificateName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedCertificatesUpdateInput>;

// Output Schema
export interface ManagedCertificatesUpdateOutput {
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
export const ManagedCertificatesUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedCertificatesUpdateOutput>;

// The operation
/**
 * Update tags of a managed certificate
 *
 * Patches a managed certificate. Oly patching of tags is supported
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 * @param managedCertificateName - Name of the Managed Certificate.
 */
export const ManagedCertificatesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedCertificatesUpdateInput,
  outputSchema: ManagedCertificatesUpdateOutput,
}));
// Input Schema
export interface ManagedEnvironmentDiagnosticsGetDetectorInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  detectorName: string;
}
export const ManagedEnvironmentDiagnosticsGetDetectorInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    detectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/detectors/{detectorName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentDiagnosticsGetDetectorInput>;

// Output Schema
export interface ManagedEnvironmentDiagnosticsGetDetectorOutput {
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
export const ManagedEnvironmentDiagnosticsGetDetectorOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentDiagnosticsGetDetectorOutput>;

// The operation
/**
 * Get the diagnostics data for a given Managed Environment.
 *
 * Get the diagnostics data for a Managed Environment used to host container apps.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 * @param detectorName - Name of the detector.
 */
export const ManagedEnvironmentDiagnosticsGetDetector =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentDiagnosticsGetDetectorInput,
    outputSchema: ManagedEnvironmentDiagnosticsGetDetectorOutput,
  }));
// Input Schema
export interface ManagedEnvironmentDiagnosticsListDetectorsInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedEnvironmentDiagnosticsListDetectorsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/detectors",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentDiagnosticsListDetectorsInput>;

// Output Schema
export interface ManagedEnvironmentDiagnosticsListDetectorsOutput {
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
export const ManagedEnvironmentDiagnosticsListDetectorsOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentDiagnosticsListDetectorsOutput>;

// The operation
/**
 * Get the list of diagnostics for a given Managed Environment.
 *
 * Get the list of diagnostics for a Managed Environment used to host container apps.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Managed Environment.
 */
export const ManagedEnvironmentDiagnosticsListDetectors =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentDiagnosticsListDetectorsInput,
    outputSchema: ManagedEnvironmentDiagnosticsListDetectorsOutput,
  }));
// Input Schema
export interface ManagedEnvironmentPrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  privateEndpointConnectionName: string;
  properties?: {
    groupIds?: string[];
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Waiting"
      | "Updating"
      | "Deleting"
      | "Pending";
  };
}
export const ManagedEnvironmentPrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(
            Schema.Literals([
              "Pending",
              "Approved",
              "Rejected",
              "Disconnected",
            ]),
          ),
          description: Schema.optional(Schema.String),
          actionsRequired: Schema.optional(Schema.String),
        }),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Waiting",
            "Updating",
            "Deleting",
            "Pending",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentPrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface ManagedEnvironmentPrivateEndpointConnectionsCreateOrUpdateOutput {
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
export const ManagedEnvironmentPrivateEndpointConnectionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentPrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of a private endpoint connection for a given managed environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param privateEndpointConnectionName - Name of the Private Endpoint Connection.
 */
export const ManagedEnvironmentPrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      ManagedEnvironmentPrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema:
      ManagedEnvironmentPrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagedEnvironmentPrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  privateEndpointConnectionName: string;
}
export const ManagedEnvironmentPrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentPrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type ManagedEnvironmentPrivateEndpointConnectionsDeleteOutput = void;
export const ManagedEnvironmentPrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedEnvironmentPrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Delete a private endpoint connection for a given managed environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param privateEndpointConnectionName - Name of the Private Endpoint Connection.
 */
export const ManagedEnvironmentPrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentPrivateEndpointConnectionsDeleteInput,
    outputSchema: ManagedEnvironmentPrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface ManagedEnvironmentPrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  privateEndpointConnectionName: string;
}
export const ManagedEnvironmentPrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentPrivateEndpointConnectionsGetInput>;

// Output Schema
export interface ManagedEnvironmentPrivateEndpointConnectionsGetOutput {
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
export const ManagedEnvironmentPrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentPrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Get a private endpoint connection for a given managed environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 * @param privateEndpointConnectionName - Name of the Private Endpoint Connection.
 */
export const ManagedEnvironmentPrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentPrivateEndpointConnectionsGetInput,
    outputSchema: ManagedEnvironmentPrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface ManagedEnvironmentPrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedEnvironmentPrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/privateEndpointConnections",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentPrivateEndpointConnectionsListInput>;

// Output Schema
export interface ManagedEnvironmentPrivateEndpointConnectionsListOutput {
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
export const ManagedEnvironmentPrivateEndpointConnectionsListOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentPrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List private endpoint connections for a given managed environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 */
export const ManagedEnvironmentPrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentPrivateEndpointConnectionsListInput,
    outputSchema: ManagedEnvironmentPrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface ManagedEnvironmentPrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedEnvironmentPrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/privateLinkResources",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentPrivateLinkResourcesListInput>;

// Output Schema
export interface ManagedEnvironmentPrivateLinkResourcesListOutput {
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
export const ManagedEnvironmentPrivateLinkResourcesListOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentPrivateLinkResourcesListOutput>;

// The operation
/**
 * List private link resources for a given managed environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the managed environment.
 */
export const ManagedEnvironmentPrivateLinkResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentPrivateLinkResourcesListInput,
    outputSchema: ManagedEnvironmentPrivateLinkResourcesListOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Waiting"
      | "InitializationInProgress"
      | "InfrastructureSetupInProgress"
      | "InfrastructureSetupComplete"
      | "ScheduledForDelete"
      | "UpgradeRequested"
      | "UpgradeFailed";
    daprAIInstrumentationKey?: string;
    daprAIConnectionString?: string;
    vnetConfiguration?: {
      internal?: boolean;
      infrastructureSubnetId?: string;
      dockerBridgeCidr?: string;
      platformReservedCidr?: string;
      platformReservedDnsIP?: string;
    };
    deploymentErrors?: string;
    defaultDomain?: string;
    staticIp?: string;
    appLogsConfiguration?: {
      destination?: string;
      logAnalyticsConfiguration?: { customerId?: string; sharedKey?: string };
    };
    zoneRedundant?: boolean;
    customDomainConfiguration?: {
      customDomainVerificationId?: string;
      dnsSuffix?: string;
      certificateKeyVaultProperties?: {
        identity?: string;
        keyVaultUrl?: string;
      };
      certificateValue?: string;
      certificatePassword?: string | Redacted.Redacted<string>;
      expirationDate?: string;
      thumbprint?: string;
      subjectName?: string;
    };
    eventStreamEndpoint?: string;
    workloadProfiles?: {
      name: string;
      workloadProfileType: string;
      minimumCount?: number;
      maximumCount?: number;
    }[];
    kedaConfiguration?: { version?: string };
    daprConfiguration?: { version?: string };
    infrastructureResourceGroup?: string;
    peerAuthentication?: { mtls?: { enabled?: boolean } };
    peerTrafficConfiguration?: { encryption?: { enabled?: boolean } };
    ingressConfiguration?: {
      workloadProfileName?: string;
      terminationGracePeriodSeconds?: number;
      headerCountLimit?: number;
      requestIdleTimeout?: number;
    };
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
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
  kind?: string;
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ManagedEnvironmentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Waiting",
            "InitializationInProgress",
            "InfrastructureSetupInProgress",
            "InfrastructureSetupComplete",
            "ScheduledForDelete",
            "UpgradeRequested",
            "UpgradeFailed",
          ]),
        ),
        daprAIInstrumentationKey: Schema.optional(Schema.String),
        daprAIConnectionString: Schema.optional(Schema.String),
        vnetConfiguration: Schema.optional(
          Schema.Struct({
            internal: Schema.optional(Schema.Boolean),
            infrastructureSubnetId: Schema.optional(Schema.String),
            dockerBridgeCidr: Schema.optional(Schema.String),
            platformReservedCidr: Schema.optional(Schema.String),
            platformReservedDnsIP: Schema.optional(Schema.String),
          }),
        ),
        deploymentErrors: Schema.optional(Schema.String),
        defaultDomain: Schema.optional(Schema.String),
        staticIp: Schema.optional(Schema.String),
        appLogsConfiguration: Schema.optional(
          Schema.Struct({
            destination: Schema.optional(Schema.String),
            logAnalyticsConfiguration: Schema.optional(
              Schema.Struct({
                customerId: Schema.optional(Schema.String),
                sharedKey: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        zoneRedundant: Schema.optional(Schema.Boolean),
        customDomainConfiguration: Schema.optional(
          Schema.Struct({
            customDomainVerificationId: Schema.optional(Schema.String),
            dnsSuffix: Schema.optional(Schema.String),
            certificateKeyVaultProperties: Schema.optional(
              Schema.Struct({
                identity: Schema.optional(Schema.String),
                keyVaultUrl: Schema.optional(Schema.String),
              }),
            ),
            certificateValue: Schema.optional(Schema.String),
            certificatePassword: Schema.optional(SensitiveString),
            expirationDate: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subjectName: Schema.optional(Schema.String),
          }),
        ),
        eventStreamEndpoint: Schema.optional(Schema.String),
        workloadProfiles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              workloadProfileType: Schema.String,
              minimumCount: Schema.optional(Schema.Number),
              maximumCount: Schema.optional(Schema.Number),
            }),
          ),
        ),
        kedaConfiguration: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.String),
          }),
        ),
        daprConfiguration: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.String),
          }),
        ),
        infrastructureResourceGroup: Schema.optional(Schema.String),
        peerAuthentication: Schema.optional(
          Schema.Struct({
            mtls: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        peerTrafficConfiguration: Schema.optional(
          Schema.Struct({
            encryption: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        ingressConfiguration: Schema.optional(
          Schema.Struct({
            workloadProfileName: Schema.optional(Schema.String),
            terminationGracePeriodSeconds: Schema.optional(Schema.Number),
            headerCountLimit: Schema.optional(Schema.Number),
            requestIdleTimeout: Schema.optional(Schema.Number),
          }),
        ),
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
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsCreateOrUpdateInput>;

// Output Schema
export interface ManagedEnvironmentsCreateOrUpdateOutput {
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
export const ManagedEnvironmentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Managed Environment.
 *
 * Creates or updates a Managed Environment used to host container apps.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 */
export const ManagedEnvironmentsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentsCreateOrUpdateInput,
    outputSchema: ManagedEnvironmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedEnvironmentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsDeleteInput>;

// Output Schema
export type ManagedEnvironmentsDeleteOutput = void;
export const ManagedEnvironmentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedEnvironmentsDeleteOutput>;

// The operation
/**
 * Delete a Managed Environment.
 *
 * Delete a Managed Environment if it does not have any container apps.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 */
export const ManagedEnvironmentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedEnvironmentsDeleteInput,
  outputSchema: ManagedEnvironmentsDeleteOutput,
}));
// Input Schema
export interface ManagedEnvironmentsDiagnosticsGetRootInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedEnvironmentsDiagnosticsGetRootInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/detectorProperties/rootApi/",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsDiagnosticsGetRootInput>;

// Output Schema
export interface ManagedEnvironmentsDiagnosticsGetRootOutput {
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
export const ManagedEnvironmentsDiagnosticsGetRootOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsDiagnosticsGetRootOutput>;

// The operation
/**
 * Get the properties of a Managed Environment.
 *
 * Get the properties of a Managed Environment used to host container apps.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 */
export const ManagedEnvironmentsDiagnosticsGetRoot =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentsDiagnosticsGetRootInput,
    outputSchema: ManagedEnvironmentsDiagnosticsGetRootOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedEnvironmentsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsGetInput>;

// Output Schema
export interface ManagedEnvironmentsGetOutput {
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
export const ManagedEnvironmentsGetOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsGetOutput>;

// The operation
/**
 * Get the properties of a Managed Environment.
 *
 * Get the properties of a Managed Environment used to host container apps.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 */
export const ManagedEnvironmentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedEnvironmentsGetInput,
  outputSchema: ManagedEnvironmentsGetOutput,
}));
// Input Schema
export interface ManagedEnvironmentsGetAuthTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedEnvironmentsGetAuthTokenInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/getAuthtoken",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsGetAuthTokenInput>;

// Output Schema
export interface ManagedEnvironmentsGetAuthTokenOutput {
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
export const ManagedEnvironmentsGetAuthTokenOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsGetAuthTokenOutput>;

// The operation
/**
 * Get auth token for a managed environment
 *
 * Checks if resource name is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 */
export const ManagedEnvironmentsGetAuthToken =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentsGetAuthTokenInput,
    outputSchema: ManagedEnvironmentsGetAuthTokenOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ManagedEnvironmentsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsListByResourceGroupInput>;

// Output Schema
export interface ManagedEnvironmentsListByResourceGroupOutput {
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
export const ManagedEnvironmentsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsListByResourceGroupOutput>;

// The operation
/**
 * Get all the Environments in a resource group.
 *
 * Get all the Managed Environments in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ManagedEnvironmentsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentsListByResourceGroupInput,
    outputSchema: ManagedEnvironmentsListByResourceGroupOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsListBySubscriptionInput {
  subscriptionId: string;
}
export const ManagedEnvironmentsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/managedEnvironments",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsListBySubscriptionInput>;

// Output Schema
export interface ManagedEnvironmentsListBySubscriptionOutput {
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
export const ManagedEnvironmentsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsListBySubscriptionOutput>;

// The operation
/**
 * Get all Environments for a subscription.
 *
 * Get all Managed Environments for a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ManagedEnvironmentsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentsListBySubscriptionInput,
    outputSchema: ManagedEnvironmentsListBySubscriptionOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsListWorkloadProfileStatesInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedEnvironmentsListWorkloadProfileStatesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/workloadProfileStates",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsListWorkloadProfileStatesInput>;

// Output Schema
export interface ManagedEnvironmentsListWorkloadProfileStatesOutput {
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
export const ManagedEnvironmentsListWorkloadProfileStatesOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsListWorkloadProfileStatesOutput>;

// The operation
/**
 * Get all workload Profile States for a Managed Environment..
 *
 * Get all workload Profile States for a Managed Environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 */
export const ManagedEnvironmentsListWorkloadProfileStates =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentsListWorkloadProfileStatesInput,
    outputSchema: ManagedEnvironmentsListWorkloadProfileStatesOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsStoragesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  storageName: string;
  properties?: {
    azureFile?: {
      accountName?: string;
      accountKey?: string;
      accountKeyVaultProperties?: { identity?: string; keyVaultUrl?: string };
      accessMode?: "ReadOnly" | "ReadWrite";
      shareName?: string;
    };
    nfsAzureFile?: {
      server?: string;
      accessMode?: "ReadOnly" | "ReadWrite";
      shareName?: string;
    };
  };
}
export const ManagedEnvironmentsStoragesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    storageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        azureFile: Schema.optional(
          Schema.Struct({
            accountName: Schema.optional(Schema.String),
            accountKey: Schema.optional(Schema.String),
            accountKeyVaultProperties: Schema.optional(
              Schema.Struct({
                identity: Schema.optional(Schema.String),
                keyVaultUrl: Schema.optional(Schema.String),
              }),
            ),
            accessMode: Schema.optional(
              Schema.Literals(["ReadOnly", "ReadWrite"]),
            ),
            shareName: Schema.optional(Schema.String),
          }),
        ),
        nfsAzureFile: Schema.optional(
          Schema.Struct({
            server: Schema.optional(Schema.String),
            accessMode: Schema.optional(
              Schema.Literals(["ReadOnly", "ReadWrite"]),
            ),
            shareName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/storages/{storageName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsStoragesCreateOrUpdateInput>;

// Output Schema
export interface ManagedEnvironmentsStoragesCreateOrUpdateOutput {
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
export const ManagedEnvironmentsStoragesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsStoragesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update storage for a managedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 * @param storageName - Name of the storage.
 */
export const ManagedEnvironmentsStoragesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentsStoragesCreateOrUpdateInput,
    outputSchema: ManagedEnvironmentsStoragesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsStoragesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  storageName: string;
}
export const ManagedEnvironmentsStoragesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    storageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/storages/{storageName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsStoragesDeleteInput>;

// Output Schema
export type ManagedEnvironmentsStoragesDeleteOutput = void;
export const ManagedEnvironmentsStoragesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedEnvironmentsStoragesDeleteOutput>;

// The operation
/**
 * Delete storage for a managedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 * @param storageName - Name of the storage.
 */
export const ManagedEnvironmentsStoragesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentsStoragesDeleteInput,
    outputSchema: ManagedEnvironmentsStoragesDeleteOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsStoragesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  storageName: string;
}
export const ManagedEnvironmentsStoragesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    storageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/storages/{storageName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsStoragesGetInput>;

// Output Schema
export interface ManagedEnvironmentsStoragesGetOutput {
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
export const ManagedEnvironmentsStoragesGetOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsStoragesGetOutput>;

// The operation
/**
 * Get storage for a managedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 * @param storageName - Name of the storage.
 */
export const ManagedEnvironmentsStoragesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentsStoragesGetInput,
    outputSchema: ManagedEnvironmentsStoragesGetOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsStoragesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedEnvironmentsStoragesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/storages",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsStoragesListInput>;

// Output Schema
export interface ManagedEnvironmentsStoragesListOutput {
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
export const ManagedEnvironmentsStoragesListOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsStoragesListOutput>;

// The operation
/**
 * Get all storages for a managedEnvironment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 */
export const ManagedEnvironmentsStoragesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentsStoragesListInput,
    outputSchema: ManagedEnvironmentsStoragesListOutput,
  }));
// Input Schema
export interface ManagedEnvironmentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Waiting"
      | "InitializationInProgress"
      | "InfrastructureSetupInProgress"
      | "InfrastructureSetupComplete"
      | "ScheduledForDelete"
      | "UpgradeRequested"
      | "UpgradeFailed";
    daprAIInstrumentationKey?: string;
    daprAIConnectionString?: string;
    vnetConfiguration?: {
      internal?: boolean;
      infrastructureSubnetId?: string;
      dockerBridgeCidr?: string;
      platformReservedCidr?: string;
      platformReservedDnsIP?: string;
    };
    deploymentErrors?: string;
    defaultDomain?: string;
    staticIp?: string;
    appLogsConfiguration?: {
      destination?: string;
      logAnalyticsConfiguration?: { customerId?: string; sharedKey?: string };
    };
    zoneRedundant?: boolean;
    customDomainConfiguration?: {
      customDomainVerificationId?: string;
      dnsSuffix?: string;
      certificateKeyVaultProperties?: {
        identity?: string;
        keyVaultUrl?: string;
      };
      certificateValue?: string;
      certificatePassword?: string | Redacted.Redacted<string>;
      expirationDate?: string;
      thumbprint?: string;
      subjectName?: string;
    };
    eventStreamEndpoint?: string;
    workloadProfiles?: {
      name: string;
      workloadProfileType: string;
      minimumCount?: number;
      maximumCount?: number;
    }[];
    kedaConfiguration?: { version?: string };
    daprConfiguration?: { version?: string };
    infrastructureResourceGroup?: string;
    peerAuthentication?: { mtls?: { enabled?: boolean } };
    peerTrafficConfiguration?: { encryption?: { enabled?: boolean } };
    ingressConfiguration?: {
      workloadProfileName?: string;
      terminationGracePeriodSeconds?: number;
      headerCountLimit?: number;
      requestIdleTimeout?: number;
    };
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
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
  kind?: string;
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ManagedEnvironmentsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Waiting",
            "InitializationInProgress",
            "InfrastructureSetupInProgress",
            "InfrastructureSetupComplete",
            "ScheduledForDelete",
            "UpgradeRequested",
            "UpgradeFailed",
          ]),
        ),
        daprAIInstrumentationKey: Schema.optional(Schema.String),
        daprAIConnectionString: Schema.optional(Schema.String),
        vnetConfiguration: Schema.optional(
          Schema.Struct({
            internal: Schema.optional(Schema.Boolean),
            infrastructureSubnetId: Schema.optional(Schema.String),
            dockerBridgeCidr: Schema.optional(Schema.String),
            platformReservedCidr: Schema.optional(Schema.String),
            platformReservedDnsIP: Schema.optional(Schema.String),
          }),
        ),
        deploymentErrors: Schema.optional(Schema.String),
        defaultDomain: Schema.optional(Schema.String),
        staticIp: Schema.optional(Schema.String),
        appLogsConfiguration: Schema.optional(
          Schema.Struct({
            destination: Schema.optional(Schema.String),
            logAnalyticsConfiguration: Schema.optional(
              Schema.Struct({
                customerId: Schema.optional(Schema.String),
                sharedKey: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        zoneRedundant: Schema.optional(Schema.Boolean),
        customDomainConfiguration: Schema.optional(
          Schema.Struct({
            customDomainVerificationId: Schema.optional(Schema.String),
            dnsSuffix: Schema.optional(Schema.String),
            certificateKeyVaultProperties: Schema.optional(
              Schema.Struct({
                identity: Schema.optional(Schema.String),
                keyVaultUrl: Schema.optional(Schema.String),
              }),
            ),
            certificateValue: Schema.optional(Schema.String),
            certificatePassword: Schema.optional(SensitiveString),
            expirationDate: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subjectName: Schema.optional(Schema.String),
          }),
        ),
        eventStreamEndpoint: Schema.optional(Schema.String),
        workloadProfiles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              workloadProfileType: Schema.String,
              minimumCount: Schema.optional(Schema.Number),
              maximumCount: Schema.optional(Schema.Number),
            }),
          ),
        ),
        kedaConfiguration: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.String),
          }),
        ),
        daprConfiguration: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.String),
          }),
        ),
        infrastructureResourceGroup: Schema.optional(Schema.String),
        peerAuthentication: Schema.optional(
          Schema.Struct({
            mtls: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        peerTrafficConfiguration: Schema.optional(
          Schema.Struct({
            encryption: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        ingressConfiguration: Schema.optional(
          Schema.Struct({
            workloadProfileName: Schema.optional(Schema.String),
            terminationGracePeriodSeconds: Schema.optional(Schema.Number),
            headerCountLimit: Schema.optional(Schema.Number),
            requestIdleTimeout: Schema.optional(Schema.Number),
          }),
        ),
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
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentsUpdateInput>;

// Output Schema
export interface ManagedEnvironmentsUpdateOutput {
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
export const ManagedEnvironmentsUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedEnvironmentsUpdateOutput>;

// The operation
/**
 * Update Managed Environment's properties.
 *
 * Patches a Managed Environment using JSON Merge Patch
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 */
export const ManagedEnvironmentsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedEnvironmentsUpdateInput,
  outputSchema: ManagedEnvironmentsUpdateOutput,
}));
// Input Schema
export interface ManagedEnvironmentUsagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
}
export const ManagedEnvironmentUsagesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/usages",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ManagedEnvironmentUsagesListInput>;

// Output Schema
export interface ManagedEnvironmentUsagesListOutput {
  value: {
    unit: "Count";
    currentValue: number;
    limit: number;
    name: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const ManagedEnvironmentUsagesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        unit: Schema.Literals(["Count"]),
        currentValue: Schema.Number,
        limit: Schema.Number,
        name: Schema.Struct({
          value: Schema.optional(Schema.String),
          localizedValue: Schema.optional(Schema.String),
        }),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ManagedEnvironmentUsagesListOutput>;

// The operation
/**
 * Gets the current usage information as well as the limits for environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 */
export const ManagedEnvironmentUsagesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedEnvironmentUsagesListInput,
    outputSchema: ManagedEnvironmentUsagesListOutput,
  }));
// Input Schema
export interface NamespacesCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  environmentName: string;
  name?: string;
  type?: string;
}
export const NamespacesCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/checkNameAvailability",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCheckNameAvailabilityInput>;

// Output Schema
export interface NamespacesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const NamespacesCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks the resource name availability.
 *
 * Checks if resource name is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param environmentName - Name of the Environment.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const NamespacesCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesCheckNameAvailabilityInput,
    outputSchema: NamespacesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.App/operations",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
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
      origin: Schema.optional(Schema.String),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available RP operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SupportedAgentModelsListByLocationInput {
  subscriptionId: string;
  location: string;
}
export const SupportedAgentModelsListByLocationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/locations/{location}/supportedAgentModels",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SupportedAgentModelsListByLocationInput>;

// Output Schema
export interface SupportedAgentModelsListByLocationOutput {
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
export const SupportedAgentModelsListByLocationOutput =
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
  }) as unknown as Schema.Codec<SupportedAgentModelsListByLocationOutput>;

// The operation
/**
 * List SupportedAgentModel resources by SubscriptionLocationResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SupportedAgentModelsListByLocation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SupportedAgentModelsListByLocationInput,
    outputSchema: SupportedAgentModelsListByLocationOutput,
  }));
// Input Schema
export interface UsagesListInput {
  subscriptionId: string;
  location: string;
}
export const UsagesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/locations/{location}/usages",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<UsagesListInput>;

// Output Schema
export interface UsagesListOutput {
  value: {
    unit: "Count";
    currentValue: number;
    limit: number;
    name: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const UsagesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      unit: Schema.Literals(["Count"]),
      currentValue: Schema.Number,
      limit: Schema.Number,
      name: Schema.Struct({
        value: Schema.optional(Schema.String),
        localizedValue: Schema.optional(Schema.String),
      }),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UsagesListOutput>;

// The operation
/**
 * Gets, for the specified location, the current resource usage information as well as the limits under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The location for which resource usage is queried.
 */
export const UsagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
