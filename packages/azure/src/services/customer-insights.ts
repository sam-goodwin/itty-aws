/**
 * Azure CustomerInsights API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AuthorizationPoliciesCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  authorizationPolicyName: string;
  subscriptionId: string;
  properties?: {
    policyName?: string;
    permissions: ("Read" | "Write" | "Manage")[];
    primaryKey?: string;
    secondaryKey?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const AuthorizationPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    authorizationPolicyName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policyName: Schema.optional(Schema.String),
        permissions: Schema.Array(Schema.Literals(["Read", "Write", "Manage"])),
        primaryKey: Schema.optional(Schema.String),
        secondaryKey: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<AuthorizationPoliciesCreateOrUpdateInput>;

// Output Schema
export interface AuthorizationPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AuthorizationPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuthorizationPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Creates an authorization policy or updates an existing authorization policy.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param authorizationPolicyName - The name of the policy.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const AuthorizationPoliciesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationPoliciesCreateOrUpdateInput,
    outputSchema: AuthorizationPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface AuthorizationPoliciesGetInput {
  resourceGroupName: string;
  hubName: string;
  authorizationPolicyName: string;
  subscriptionId: string;
}
export const AuthorizationPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    authorizationPolicyName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<AuthorizationPoliciesGetInput>;

// Output Schema
export interface AuthorizationPoliciesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AuthorizationPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuthorizationPoliciesGetOutput>;

// The operation
/**
 * Gets an authorization policy in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param authorizationPolicyName - The name of the policy.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const AuthorizationPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AuthorizationPoliciesGetInput,
    outputSchema: AuthorizationPoliciesGetOutput,
  }),
);
// Input Schema
export interface AuthorizationPoliciesListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const AuthorizationPoliciesListByHubInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<AuthorizationPoliciesListByHubInput>;

// Output Schema
export interface AuthorizationPoliciesListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const AuthorizationPoliciesListByHubOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuthorizationPoliciesListByHubOutput>;

// The operation
/**
 * Gets all the authorization policies in a specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const AuthorizationPoliciesListByHub =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationPoliciesListByHubInput,
    outputSchema: AuthorizationPoliciesListByHubOutput,
  }));
// Input Schema
export interface AuthorizationPoliciesRegeneratePrimaryKeyInput {
  resourceGroupName: string;
  hubName: string;
  authorizationPolicyName: string;
  subscriptionId: string;
}
export const AuthorizationPoliciesRegeneratePrimaryKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    authorizationPolicyName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}/regeneratePrimaryKey",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<AuthorizationPoliciesRegeneratePrimaryKeyInput>;

// Output Schema
export interface AuthorizationPoliciesRegeneratePrimaryKeyOutput {
  policyName?: string;
  permissions: ("Read" | "Write" | "Manage")[];
  primaryKey?: string;
  secondaryKey?: string;
}
export const AuthorizationPoliciesRegeneratePrimaryKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyName: Schema.optional(Schema.String),
    permissions: Schema.Array(Schema.Literals(["Read", "Write", "Manage"])),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuthorizationPoliciesRegeneratePrimaryKeyOutput>;

// The operation
/**
 * Regenerates the primary policy key of the specified authorization policy.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param authorizationPolicyName - The name of the policy.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const AuthorizationPoliciesRegeneratePrimaryKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationPoliciesRegeneratePrimaryKeyInput,
    outputSchema: AuthorizationPoliciesRegeneratePrimaryKeyOutput,
  }));
// Input Schema
export interface AuthorizationPoliciesRegenerateSecondaryKeyInput {
  resourceGroupName: string;
  hubName: string;
  authorizationPolicyName: string;
  subscriptionId: string;
}
export const AuthorizationPoliciesRegenerateSecondaryKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    authorizationPolicyName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}/regenerateSecondaryKey",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<AuthorizationPoliciesRegenerateSecondaryKeyInput>;

// Output Schema
export interface AuthorizationPoliciesRegenerateSecondaryKeyOutput {
  policyName?: string;
  permissions: ("Read" | "Write" | "Manage")[];
  primaryKey?: string;
  secondaryKey?: string;
}
export const AuthorizationPoliciesRegenerateSecondaryKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyName: Schema.optional(Schema.String),
    permissions: Schema.Array(Schema.Literals(["Read", "Write", "Manage"])),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuthorizationPoliciesRegenerateSecondaryKeyOutput>;

// The operation
/**
 * Regenerates the secondary policy key of the specified authorization policy.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param authorizationPolicyName - The name of the policy.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const AuthorizationPoliciesRegenerateSecondaryKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationPoliciesRegenerateSecondaryKeyInput,
    outputSchema: AuthorizationPoliciesRegenerateSecondaryKeyOutput,
  }));
// Input Schema
export interface ConnectorMappingsCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  connectorName: string;
  mappingName: string;
  subscriptionId: string;
  properties?: {
    connectorName?: string;
    connectorType?:
      | "None"
      | "CRM"
      | "AzureBlob"
      | "Salesforce"
      | "ExchangeOnline"
      | "Outbound";
    created?: string;
    lastModified?: string;
    entityType: "None" | "Profile" | "Interaction" | "Relationship";
    entityTypeName: string;
    connectorMappingName?: string;
    displayName?: string;
    description?: string;
    dataFormatId?: string;
    mappingProperties: {
      folderPath?: string;
      fileFilter?: string;
      hasHeader?: boolean;
      errorManagement: {
        errorManagementType:
          | "RejectAndContinue"
          | "StopImport"
          | "RejectUntilLimit";
        errorLimit?: number;
      };
      format: {
        formatType: "TextFormat";
        columnDelimiter?: string;
        acceptLanguage?: string;
        quoteCharacter?: string;
        quoteEscapeCharacter?: string;
        arraySeparator?: string;
      };
      availability: {
        frequency?: "Minute" | "Hour" | "Day" | "Week" | "Month";
        interval: number;
      };
      structure: {
        propertyName: string;
        columnName: string;
        customFormatSpecifier?: string;
        isEncrypted?: boolean;
      }[];
      completeOperation: {
        completionOperationType?: "DoNothing" | "DeleteFile" | "MoveFile";
        destinationFolder?: string;
      };
    };
    nextRunTime?: string;
    runId?: string;
    state?:
      | "Creating"
      | "Created"
      | "Failed"
      | "Ready"
      | "Running"
      | "Stopped"
      | "Expiring";
    tenantId?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ConnectorMappingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    mappingName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        connectorName: Schema.optional(Schema.String),
        connectorType: Schema.optional(
          Schema.Literals([
            "None",
            "CRM",
            "AzureBlob",
            "Salesforce",
            "ExchangeOnline",
            "Outbound",
          ]),
        ),
        created: Schema.optional(Schema.String),
        lastModified: Schema.optional(Schema.String),
        entityType: Schema.Literals([
          "None",
          "Profile",
          "Interaction",
          "Relationship",
        ]),
        entityTypeName: Schema.String,
        connectorMappingName: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        dataFormatId: Schema.optional(Schema.String),
        mappingProperties: Schema.Struct({
          folderPath: Schema.optional(Schema.String),
          fileFilter: Schema.optional(Schema.String),
          hasHeader: Schema.optional(Schema.Boolean),
          errorManagement: Schema.Struct({
            errorManagementType: Schema.Literals([
              "RejectAndContinue",
              "StopImport",
              "RejectUntilLimit",
            ]),
            errorLimit: Schema.optional(Schema.Number),
          }),
          format: Schema.Struct({
            formatType: Schema.Literals(["TextFormat"]),
            columnDelimiter: Schema.optional(Schema.String),
            acceptLanguage: Schema.optional(Schema.String),
            quoteCharacter: Schema.optional(Schema.String),
            quoteEscapeCharacter: Schema.optional(Schema.String),
            arraySeparator: Schema.optional(Schema.String),
          }),
          availability: Schema.Struct({
            frequency: Schema.optional(
              Schema.Literals(["Minute", "Hour", "Day", "Week", "Month"]),
            ),
            interval: Schema.Number,
          }),
          structure: Schema.Array(
            Schema.Struct({
              propertyName: Schema.String,
              columnName: Schema.String,
              customFormatSpecifier: Schema.optional(Schema.String),
              isEncrypted: Schema.optional(Schema.Boolean),
            }),
          ),
          completeOperation: Schema.Struct({
            completionOperationType: Schema.optional(
              Schema.Literals(["DoNothing", "DeleteFile", "MoveFile"]),
            ),
            destinationFolder: Schema.optional(Schema.String),
          }),
        }),
        nextRunTime: Schema.optional(Schema.String),
        runId: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "Creating",
            "Created",
            "Failed",
            "Ready",
            "Running",
            "Stopped",
            "Expiring",
          ]),
        ),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}/mappings/{mappingName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ConnectorMappingsCreateOrUpdateInput>;

// Output Schema
export interface ConnectorMappingsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConnectorMappingsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConnectorMappingsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a connector mapping or updates an existing connector mapping in the connector.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param connectorName - The name of the connector.
 * @param mappingName - The name of the connector mapping.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ConnectorMappingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectorMappingsCreateOrUpdateInput,
    outputSchema: ConnectorMappingsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConnectorMappingsDeleteInput {
  resourceGroupName: string;
  hubName: string;
  connectorName: string;
  mappingName: string;
  subscriptionId: string;
}
export const ConnectorMappingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    mappingName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}/mappings/{mappingName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ConnectorMappingsDeleteInput>;

// Output Schema
export type ConnectorMappingsDeleteOutput = void;
export const ConnectorMappingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectorMappingsDeleteOutput>;

// The operation
/**
 * Deletes a connector mapping in the connector.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param connectorName - The name of the connector.
 * @param mappingName - The name of the connector mapping.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ConnectorMappingsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectorMappingsDeleteInput,
    outputSchema: ConnectorMappingsDeleteOutput,
  }),
);
// Input Schema
export interface ConnectorMappingsGetInput {
  resourceGroupName: string;
  hubName: string;
  connectorName: string;
  mappingName: string;
  subscriptionId: string;
}
export const ConnectorMappingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    mappingName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}/mappings/{mappingName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ConnectorMappingsGetInput>;

// Output Schema
export interface ConnectorMappingsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConnectorMappingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConnectorMappingsGetOutput>;

// The operation
/**
 * Gets a connector mapping in the connector.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param connectorName - The name of the connector.
 * @param mappingName - The name of the connector mapping.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ConnectorMappingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectorMappingsGetInput,
    outputSchema: ConnectorMappingsGetOutput,
  }),
);
// Input Schema
export interface ConnectorMappingsListByConnectorInput {
  resourceGroupName: string;
  hubName: string;
  connectorName: string;
  subscriptionId: string;
}
export const ConnectorMappingsListByConnectorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}/mappings",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ConnectorMappingsListByConnectorInput>;

// Output Schema
export interface ConnectorMappingsListByConnectorOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ConnectorMappingsListByConnectorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConnectorMappingsListByConnectorOutput>;

// The operation
/**
 * Gets all the connector mappings in the specified connector.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param connectorName - The name of the connector.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ConnectorMappingsListByConnector =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectorMappingsListByConnectorInput,
    outputSchema: ConnectorMappingsListByConnectorOutput,
  }));
// Input Schema
export interface ConnectorsCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  connectorName: string;
  subscriptionId: string;
  properties?: {
    connectorId?: number;
    connectorName?: string;
    connectorType:
      | "None"
      | "CRM"
      | "AzureBlob"
      | "Salesforce"
      | "ExchangeOnline"
      | "Outbound";
    displayName?: string;
    description?: string;
    connectorProperties: Record<string, unknown>;
    created?: string;
    lastModified?: string;
    state?:
      | "Creating"
      | "Created"
      | "Ready"
      | "Expiring"
      | "Deleting"
      | "Failed";
    tenantId?: string;
    isInternal?: boolean;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ConnectorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        connectorId: Schema.optional(Schema.Number),
        connectorName: Schema.optional(Schema.String),
        connectorType: Schema.Literals([
          "None",
          "CRM",
          "AzureBlob",
          "Salesforce",
          "ExchangeOnline",
          "Outbound",
        ]),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        connectorProperties: Schema.Record(Schema.String, Schema.Unknown),
        created: Schema.optional(Schema.String),
        lastModified: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "Creating",
            "Created",
            "Ready",
            "Expiring",
            "Deleting",
            "Failed",
          ]),
        ),
        tenantId: Schema.optional(Schema.String),
        isInternal: Schema.optional(Schema.Boolean),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ConnectorsCreateOrUpdateInput>;

// Output Schema
export interface ConnectorsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConnectorsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConnectorsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a connector or updates an existing connector in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param connectorName - The name of the connector.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ConnectorsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectorsCreateOrUpdateInput,
    outputSchema: ConnectorsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ConnectorsDeleteInput {
  resourceGroupName: string;
  hubName: string;
  connectorName: string;
  subscriptionId: string;
}
export const ConnectorsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<ConnectorsDeleteInput>;

// Output Schema
export type ConnectorsDeleteOutput = void;
export const ConnectorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectorsDeleteOutput>;

// The operation
/**
 * Deletes a connector in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param connectorName - The name of the connector.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ConnectorsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsDeleteInput,
  outputSchema: ConnectorsDeleteOutput,
}));
// Input Schema
export interface ConnectorsGetInput {
  resourceGroupName: string;
  hubName: string;
  connectorName: string;
  subscriptionId: string;
}
export const ConnectorsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<ConnectorsGetInput>;

// Output Schema
export interface ConnectorsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConnectorsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ConnectorsGetOutput>;

// The operation
/**
 * Gets a connector in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param connectorName - The name of the connector.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ConnectorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsGetInput,
  outputSchema: ConnectorsGetOutput,
}));
// Input Schema
export interface ConnectorsListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const ConnectorsListByHubInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ConnectorsListByHubInput>;

// Output Schema
export interface ConnectorsListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ConnectorsListByHubOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConnectorsListByHubOutput>;

// The operation
/**
 * Gets all the connectors in the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ConnectorsListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectorsListByHubInput,
  outputSchema: ConnectorsListByHubOutput,
}));
// Input Schema
export interface HubsCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
  properties?: {
    apiEndpoint?: string;
    webEndpoint?: string;
    provisioningState?: string;
    tenantFeatures?: number;
    hubBillingInfo?: { skuName?: string; minUnits?: number; maxUnits?: number };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const HubsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        apiEndpoint: Schema.optional(Schema.String),
        webEndpoint: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        tenantFeatures: Schema.optional(Schema.Number),
        hubBillingInfo: Schema.optional(
          Schema.Struct({
            skuName: Schema.optional(Schema.String),
            minUnits: Schema.optional(Schema.Number),
            maxUnits: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<HubsCreateOrUpdateInput>;

// Output Schema
export interface HubsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const HubsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<HubsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a hub, or updates an existing hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the Hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const HubsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HubsCreateOrUpdateInput,
  outputSchema: HubsCreateOrUpdateOutput,
}));
// Input Schema
export interface HubsDeleteInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const HubsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<HubsDeleteInput>;

// Output Schema
export type HubsDeleteOutput = void;
export const HubsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HubsDeleteOutput>;

// The operation
/**
 * Deletes the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const HubsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HubsDeleteInput,
  outputSchema: HubsDeleteOutput,
}));
// Input Schema
export interface HubsGetInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const HubsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<HubsGetInput>;

// Output Schema
export interface HubsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const HubsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<HubsGetOutput>;

// The operation
/**
 * Gets information about the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const HubsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HubsGetInput,
  outputSchema: HubsGetOutput,
}));
// Input Schema
export interface HubsListInput {
  subscriptionId: string;
}
export const HubsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CustomerInsights/hubs",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<HubsListInput>;

// Output Schema
export interface HubsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const HubsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<HubsListOutput>;

// The operation
/**
 * Gets all hubs in the specified subscription.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const HubsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HubsListInput,
  outputSchema: HubsListOutput,
}));
// Input Schema
export interface HubsListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const HubsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<HubsListByResourceGroupInput>;

// Output Schema
export interface HubsListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const HubsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<HubsListByResourceGroupOutput>;

// The operation
/**
 * Gets all the hubs in a resource group.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const HubsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HubsListByResourceGroupInput,
    outputSchema: HubsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface HubsUpdateInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
  properties?: {
    apiEndpoint?: string;
    webEndpoint?: string;
    provisioningState?: string;
    tenantFeatures?: number;
    hubBillingInfo?: { skuName?: string; minUnits?: number; maxUnits?: number };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const HubsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      apiEndpoint: Schema.optional(Schema.String),
      webEndpoint: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      tenantFeatures: Schema.optional(Schema.Number),
      hubBillingInfo: Schema.optional(
        Schema.Struct({
          skuName: Schema.optional(Schema.String),
          minUnits: Schema.optional(Schema.Number),
          maxUnits: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<HubsUpdateInput>;

// Output Schema
export interface HubsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const HubsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<HubsUpdateOutput>;

// The operation
/**
 * Updates a Hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the Hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const HubsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HubsUpdateInput,
  outputSchema: HubsUpdateOutput,
}));
// Input Schema
export interface ImagesGetUploadUrlForDataInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
  entityType?: string;
  entityTypeName?: string;
  relativePath?: string;
}
export const ImagesGetUploadUrlForDataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    entityType: Schema.optional(Schema.String),
    entityTypeName: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/images/getDataImageUploadUrl",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ImagesGetUploadUrlForDataInput>;

// Output Schema
export interface ImagesGetUploadUrlForDataOutput {
  imageExists?: boolean;
  contentUrl?: string;
  relativePath?: string;
}
export const ImagesGetUploadUrlForDataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageExists: Schema.optional(Schema.Boolean),
    contentUrl: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImagesGetUploadUrlForDataOutput>;

// The operation
/**
 * Gets data image upload URL.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ImagesGetUploadUrlForData = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImagesGetUploadUrlForDataInput,
    outputSchema: ImagesGetUploadUrlForDataOutput,
  }),
);
// Input Schema
export interface ImagesGetUploadUrlForEntityTypeInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
  entityType?: string;
  entityTypeName?: string;
  relativePath?: string;
}
export const ImagesGetUploadUrlForEntityTypeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    entityType: Schema.optional(Schema.String),
    entityTypeName: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/images/getEntityTypeImageUploadUrl",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ImagesGetUploadUrlForEntityTypeInput>;

// Output Schema
export interface ImagesGetUploadUrlForEntityTypeOutput {
  imageExists?: boolean;
  contentUrl?: string;
  relativePath?: string;
}
export const ImagesGetUploadUrlForEntityTypeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageExists: Schema.optional(Schema.Boolean),
    contentUrl: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImagesGetUploadUrlForEntityTypeOutput>;

// The operation
/**
 * Gets entity type (profile or interaction) image upload URL.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ImagesGetUploadUrlForEntityType =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImagesGetUploadUrlForEntityTypeInput,
    outputSchema: ImagesGetUploadUrlForEntityTypeOutput,
  }));
// Input Schema
export interface InteractionsCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  interactionName: string;
  subscriptionId: string;
  properties?: {
    attributes?: Record<string, string[]>;
    description?: Record<string, string>;
    displayName?: Record<string, string>;
    localizedAttributes?: Record<string, Record<string, string>>;
    smallImage?: string;
    mediumImage?: string;
    largeImage?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const InteractionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    interactionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Array(Schema.String)),
        ),
        description: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        displayName: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        localizedAttributes: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Record(Schema.String, Schema.String),
          ),
        ),
        smallImage: Schema.optional(Schema.String),
        mediumImage: Schema.optional(Schema.String),
        largeImage: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<InteractionsCreateOrUpdateInput>;

// Output Schema
export interface InteractionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const InteractionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<InteractionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates an interaction or updates an existing interaction within a hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param interactionName - The name of the interaction.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const InteractionsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InteractionsCreateOrUpdateInput,
    outputSchema: InteractionsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface InteractionsGetInput {
  resourceGroupName: string;
  hubName: string;
  interactionName: string;
  subscriptionId: string;
  "locale-code"?: string;
}
export const InteractionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  interactionName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  "locale-code": Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<InteractionsGetInput>;

// Output Schema
export interface InteractionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const InteractionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<InteractionsGetOutput>;

// The operation
/**
 * Gets information about the specified interaction.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param interactionName - The name of the interaction.
 * @param locale-code - Locale of interaction to retrieve, default is en-us.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const InteractionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InteractionsGetInput,
  outputSchema: InteractionsGetOutput,
}));
// Input Schema
export interface InteractionsListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
  "locale-code"?: string;
}
export const InteractionsListByHubInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "locale-code": Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<InteractionsListByHubInput>;

// Output Schema
export interface InteractionsListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const InteractionsListByHubOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<InteractionsListByHubOutput>;

// The operation
/**
 * Gets all interactions in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param locale-code - Locale of interaction to retrieve, default is en-us.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const InteractionsListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InteractionsListByHubInput,
    outputSchema: InteractionsListByHubOutput,
  }),
);
// Input Schema
export interface InteractionsSuggestRelationshipLinksInput {
  resourceGroupName: string;
  hubName: string;
  interactionName: string;
  subscriptionId: string;
}
export const InteractionsSuggestRelationshipLinksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    interactionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}/suggestRelationshipLinks",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<InteractionsSuggestRelationshipLinksInput>;

// Output Schema
export interface InteractionsSuggestRelationshipLinksOutput {
  interactionName?: string;
  suggestedRelationships?: {
    profileName?: string;
    profilePropertyReferences?: {
      interactionPropertyName: string;
      profilePropertyName: string;
    }[];
    relatedProfileName?: string;
    relatedProfilePropertyReferences?: {
      interactionPropertyName: string;
      profilePropertyName: string;
    }[];
    existingRelationshipName?: string;
  }[];
}
export const InteractionsSuggestRelationshipLinksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interactionName: Schema.optional(Schema.String),
    suggestedRelationships: Schema.optional(
      Schema.Array(
        Schema.Struct({
          profileName: Schema.optional(Schema.String),
          profilePropertyReferences: Schema.optional(
            Schema.Array(
              Schema.Struct({
                interactionPropertyName: Schema.String,
                profilePropertyName: Schema.String,
              }),
            ),
          ),
          relatedProfileName: Schema.optional(Schema.String),
          relatedProfilePropertyReferences: Schema.optional(
            Schema.Array(
              Schema.Struct({
                interactionPropertyName: Schema.String,
                profilePropertyName: Schema.String,
              }),
            ),
          ),
          existingRelationshipName: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<InteractionsSuggestRelationshipLinksOutput>;

// The operation
/**
 * Suggests relationships to create relationship links.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param interactionName - The name of the interaction.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const InteractionsSuggestRelationshipLinks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InteractionsSuggestRelationshipLinksInput,
    outputSchema: InteractionsSuggestRelationshipLinksOutput,
  }));
// Input Schema
export interface KpiCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  kpiName: string;
  subscriptionId: string;
  properties?: {
    entityType: "None" | "Profile" | "Interaction" | "Relationship";
    entityTypeName: string;
    tenantId?: string;
    kpiName?: string;
    displayName?: Record<string, string>;
    description?: Record<string, string>;
    calculationWindow: "Lifetime" | "Hour" | "Day" | "Week" | "Month";
    calculationWindowFieldName?: string;
    function:
      | "Sum"
      | "Avg"
      | "Min"
      | "Max"
      | "Last"
      | "Count"
      | "None"
      | "CountDistinct";
    expression: string;
    unit?: string;
    filter?: string;
    groupBy?: string[];
    groupByMetadata?: {
      displayName?: Record<string, string>;
      fieldName?: string;
      fieldType?: string;
    }[];
    participantProfilesMetadata?: { typeName: string }[];
    provisioningState?:
      | "Provisioning"
      | "Succeeded"
      | "Expiring"
      | "Deleting"
      | "HumanIntervention"
      | "Failed";
    thresHolds?: {
      lowerLimit: number;
      upperLimit: number;
      increasingKpi: boolean;
    };
    aliases?: { aliasName: string; expression: string }[];
    extracts?: { extractName: string; expression: string }[];
  };
  id?: string;
  name?: string;
  type?: string;
}
export const KpiCreateOrUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    kpiName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        entityType: Schema.Literals([
          "None",
          "Profile",
          "Interaction",
          "Relationship",
        ]),
        entityTypeName: Schema.String,
        tenantId: Schema.optional(Schema.String),
        kpiName: Schema.optional(Schema.String),
        displayName: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        description: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        calculationWindow: Schema.Literals([
          "Lifetime",
          "Hour",
          "Day",
          "Week",
          "Month",
        ]),
        calculationWindowFieldName: Schema.optional(Schema.String),
        function: Schema.Literals([
          "Sum",
          "Avg",
          "Min",
          "Max",
          "Last",
          "Count",
          "None",
          "CountDistinct",
        ]),
        expression: Schema.String,
        unit: Schema.optional(Schema.String),
        filter: Schema.optional(Schema.String),
        groupBy: Schema.optional(Schema.Array(Schema.String)),
        groupByMetadata: Schema.optional(
          Schema.Array(
            Schema.Struct({
              displayName: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              fieldName: Schema.optional(Schema.String),
              fieldType: Schema.optional(Schema.String),
            }),
          ),
        ),
        participantProfilesMetadata: Schema.optional(
          Schema.Array(
            Schema.Struct({
              typeName: Schema.String,
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Succeeded",
            "Expiring",
            "Deleting",
            "HumanIntervention",
            "Failed",
          ]),
        ),
        thresHolds: Schema.optional(
          Schema.Struct({
            lowerLimit: Schema.Number,
            upperLimit: Schema.Number,
            increasingKpi: Schema.Boolean,
          }),
        ),
        aliases: Schema.optional(
          Schema.Array(
            Schema.Struct({
              aliasName: Schema.String,
              expression: Schema.String,
            }),
          ),
        ),
        extracts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              extractName: Schema.String,
              expression: Schema.String,
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/kpi/{kpiName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<KpiCreateOrUpdateInput>;

// Output Schema
export interface KpiCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const KpiCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<KpiCreateOrUpdateOutput>;

// The operation
/**
 * Creates a KPI or updates an existing KPI in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param kpiName - The name of the KPI.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const KpiCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KpiCreateOrUpdateInput,
  outputSchema: KpiCreateOrUpdateOutput,
}));
// Input Schema
export interface KpiDeleteInput {
  resourceGroupName: string;
  hubName: string;
  kpiName: string;
  subscriptionId: string;
}
export const KpiDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  kpiName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/kpi/{kpiName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<KpiDeleteInput>;

// Output Schema
export type KpiDeleteOutput = void;
export const KpiDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<KpiDeleteOutput>;

// The operation
/**
 * Deletes a KPI in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param kpiName - The name of the KPI.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const KpiDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KpiDeleteInput,
  outputSchema: KpiDeleteOutput,
}));
// Input Schema
export interface KpiGetInput {
  resourceGroupName: string;
  hubName: string;
  kpiName: string;
  subscriptionId: string;
}
export const KpiGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  kpiName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/kpi/{kpiName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<KpiGetInput>;

// Output Schema
export interface KpiGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const KpiGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<KpiGetOutput>;

// The operation
/**
 * Gets a KPI in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param kpiName - The name of the KPI.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const KpiGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KpiGetInput,
  outputSchema: KpiGetOutput,
}));
// Input Schema
export interface KpiListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const KpiListByHubInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/kpi",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<KpiListByHubInput>;

// Output Schema
export interface KpiListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const KpiListByHubOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<KpiListByHubOutput>;

// The operation
/**
 * Gets all the KPIs in the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const KpiListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KpiListByHubInput,
  outputSchema: KpiListByHubOutput,
}));
// Input Schema
export interface KpiReprocessInput {
  resourceGroupName: string;
  hubName: string;
  kpiName: string;
  subscriptionId: string;
}
export const KpiReprocessInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  kpiName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/kpi/{kpiName}/reprocess",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<KpiReprocessInput>;

// Output Schema
export type KpiReprocessOutput = void;
export const KpiReprocessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<KpiReprocessOutput>;

// The operation
/**
 * Reprocesses the Kpi values of the specified KPI.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param kpiName - The name of the KPI.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const KpiReprocess = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KpiReprocessInput,
  outputSchema: KpiReprocessOutput,
}));
// Input Schema
export interface LinksCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  linkName: string;
  subscriptionId: string;
  properties?: {
    tenantId?: string;
    linkName?: string;
    sourceEntityType: "None" | "Profile" | "Interaction" | "Relationship";
    targetEntityType: "None" | "Profile" | "Interaction" | "Relationship";
    sourceEntityTypeName: string;
    targetEntityTypeName: string;
    displayName?: Record<string, string>;
    description?: Record<string, string>;
    mappings?: {
      sourcePropertyName: string;
      targetPropertyName: string;
      linkType?: "UpdateAlways" | "CopyIfNull";
    }[];
    participantPropertyReferences: {
      sourcePropertyName: string;
      targetPropertyName: string;
    }[];
    provisioningState?:
      | "Provisioning"
      | "Succeeded"
      | "Expiring"
      | "Deleting"
      | "HumanIntervention"
      | "Failed";
    referenceOnly?: boolean;
    operationType?: "Upsert" | "Delete";
  };
  id?: string;
  name?: string;
  type?: string;
}
export const LinksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    linkName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        linkName: Schema.optional(Schema.String),
        sourceEntityType: Schema.Literals([
          "None",
          "Profile",
          "Interaction",
          "Relationship",
        ]),
        targetEntityType: Schema.Literals([
          "None",
          "Profile",
          "Interaction",
          "Relationship",
        ]),
        sourceEntityTypeName: Schema.String,
        targetEntityTypeName: Schema.String,
        displayName: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        description: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        mappings: Schema.optional(
          Schema.Array(
            Schema.Struct({
              sourcePropertyName: Schema.String,
              targetPropertyName: Schema.String,
              linkType: Schema.optional(
                Schema.Literals(["UpdateAlways", "CopyIfNull"]),
              ),
            }),
          ),
        ),
        participantPropertyReferences: Schema.Array(
          Schema.Struct({
            sourcePropertyName: Schema.String,
            targetPropertyName: Schema.String,
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Succeeded",
            "Expiring",
            "Deleting",
            "HumanIntervention",
            "Failed",
          ]),
        ),
        referenceOnly: Schema.optional(Schema.Boolean),
        operationType: Schema.optional(Schema.Literals(["Upsert", "Delete"])),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<LinksCreateOrUpdateInput>;

// Output Schema
export interface LinksCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const LinksCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LinksCreateOrUpdateOutput>;

// The operation
/**
 * Creates a link or updates an existing link in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param linkName - The name of the link.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const LinksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinksCreateOrUpdateInput,
  outputSchema: LinksCreateOrUpdateOutput,
}));
// Input Schema
export interface LinksDeleteInput {
  resourceGroupName: string;
  hubName: string;
  linkName: string;
  subscriptionId: string;
}
export const LinksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  linkName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<LinksDeleteInput>;

// Output Schema
export type LinksDeleteOutput = void;
export const LinksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LinksDeleteOutput>;

// The operation
/**
 * Deletes a link in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param linkName - The name of the link.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const LinksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinksDeleteInput,
  outputSchema: LinksDeleteOutput,
}));
// Input Schema
export interface LinksGetInput {
  resourceGroupName: string;
  hubName: string;
  linkName: string;
  subscriptionId: string;
}
export const LinksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  linkName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<LinksGetInput>;

// Output Schema
export interface LinksGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const LinksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<LinksGetOutput>;

// The operation
/**
 * Gets a link in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param linkName - The name of the link.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const LinksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinksGetInput,
  outputSchema: LinksGetOutput,
}));
// Input Schema
export interface LinksListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const LinksListByHubInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<LinksListByHubInput>;

// Output Schema
export interface LinksListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const LinksListByHubOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<LinksListByHubOutput>;

// The operation
/**
 * Gets all the links in the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const LinksListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinksListByHubInput,
  outputSchema: LinksListByHubOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.CustomerInsights/operations",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: { provider?: string; resource?: string; operation?: string };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Customer Insights REST API operations.
 *
 * @param api-version - Client Api Version.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PredictionsCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  predictionName: string;
  subscriptionId: string;
  properties?: {
    description?: Record<string, string>;
    displayName?: Record<string, string>;
    involvedInteractionTypes?: string[];
    involvedKpiTypes?: string[];
    involvedRelationships?: string[];
    negativeOutcomeExpression: string;
    positiveOutcomeExpression: string;
    primaryProfileType: string;
    provisioningState?:
      | "Provisioning"
      | "Succeeded"
      | "Expiring"
      | "Deleting"
      | "HumanIntervention"
      | "Failed";
    predictionName?: string;
    scopeExpression: string;
    tenantId?: string;
    autoAnalyze: boolean;
    mappings: { score: string; grade: string; reason: string };
    scoreLabel: string;
    grades?: {
      gradeName?: string;
      minScoreThreshold?: number;
      maxScoreThreshold?: number;
    }[];
    systemGeneratedEntities?: {
      generatedInteractionTypes?: string[];
      generatedLinks?: string[];
      generatedKpis?: Record<string, string>;
    };
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PredictionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    predictionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        displayName: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        involvedInteractionTypes: Schema.optional(Schema.Array(Schema.String)),
        involvedKpiTypes: Schema.optional(Schema.Array(Schema.String)),
        involvedRelationships: Schema.optional(Schema.Array(Schema.String)),
        negativeOutcomeExpression: Schema.String,
        positiveOutcomeExpression: Schema.String,
        primaryProfileType: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Succeeded",
            "Expiring",
            "Deleting",
            "HumanIntervention",
            "Failed",
          ]),
        ),
        predictionName: Schema.optional(Schema.String),
        scopeExpression: Schema.String,
        tenantId: Schema.optional(Schema.String),
        autoAnalyze: Schema.Boolean,
        mappings: Schema.Struct({
          score: Schema.String,
          grade: Schema.String,
          reason: Schema.String,
        }),
        scoreLabel: Schema.String,
        grades: Schema.optional(
          Schema.Array(
            Schema.Struct({
              gradeName: Schema.optional(Schema.String),
              minScoreThreshold: Schema.optional(Schema.Number),
              maxScoreThreshold: Schema.optional(Schema.Number),
            }),
          ),
        ),
        systemGeneratedEntities: Schema.optional(
          Schema.Struct({
            generatedInteractionTypes: Schema.optional(
              Schema.Array(Schema.String),
            ),
            generatedLinks: Schema.optional(Schema.Array(Schema.String)),
            generatedKpis: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<PredictionsCreateOrUpdateInput>;

// Output Schema
export interface PredictionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PredictionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PredictionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a Prediction or updates an existing Prediction in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param predictionName - The name of the Prediction.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const PredictionsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PredictionsCreateOrUpdateInput,
    outputSchema: PredictionsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface PredictionsDeleteInput {
  resourceGroupName: string;
  hubName: string;
  predictionName: string;
  subscriptionId: string;
}
export const PredictionsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    predictionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<PredictionsDeleteInput>;

// Output Schema
export type PredictionsDeleteOutput = void;
export const PredictionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PredictionsDeleteOutput>;

// The operation
/**
 * Deletes a Prediction in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param predictionName - The name of the Prediction.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const PredictionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PredictionsDeleteInput,
  outputSchema: PredictionsDeleteOutput,
}));
// Input Schema
export interface PredictionsGetInput {
  resourceGroupName: string;
  hubName: string;
  predictionName: string;
  subscriptionId: string;
}
export const PredictionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  predictionName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<PredictionsGetInput>;

// Output Schema
export interface PredictionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PredictionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<PredictionsGetOutput>;

// The operation
/**
 * Gets a Prediction in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param predictionName - The name of the Prediction.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const PredictionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PredictionsGetInput,
  outputSchema: PredictionsGetOutput,
}));
// Input Schema
export interface PredictionsGetModelStatusInput {
  resourceGroupName: string;
  hubName: string;
  predictionName: string;
  subscriptionId: string;
}
export const PredictionsGetModelStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    predictionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}/getModelStatus",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<PredictionsGetModelStatusInput>;

// Output Schema
export interface PredictionsGetModelStatusOutput {
  tenantId?: string;
  predictionName?: string;
  predictionGuidId?: string;
  status:
    | "New"
    | "Provisioning"
    | "ProvisioningFailed"
    | "PendingDiscovering"
    | "Discovering"
    | "PendingFeaturing"
    | "Featuring"
    | "FeaturingFailed"
    | "PendingTraining"
    | "Training"
    | "TrainingFailed"
    | "Evaluating"
    | "EvaluatingFailed"
    | "PendingModelConfirmation"
    | "Active"
    | "Deleted"
    | "HumanIntervention"
    | "Failed";
  message?: string;
  trainingSetCount?: number;
  testSetCount?: number;
  validationSetCount?: number;
  trainingAccuracy?: number;
  signalsUsed?: number;
  modelVersion?: string;
}
export const PredictionsGetModelStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String),
    predictionName: Schema.optional(Schema.String),
    predictionGuidId: Schema.optional(Schema.String),
    status: Schema.Literals([
      "New",
      "Provisioning",
      "ProvisioningFailed",
      "PendingDiscovering",
      "Discovering",
      "PendingFeaturing",
      "Featuring",
      "FeaturingFailed",
      "PendingTraining",
      "Training",
      "TrainingFailed",
      "Evaluating",
      "EvaluatingFailed",
      "PendingModelConfirmation",
      "Active",
      "Deleted",
      "HumanIntervention",
      "Failed",
    ]),
    message: Schema.optional(Schema.String),
    trainingSetCount: Schema.optional(Schema.Number),
    testSetCount: Schema.optional(Schema.Number),
    validationSetCount: Schema.optional(Schema.Number),
    trainingAccuracy: Schema.optional(Schema.Number),
    signalsUsed: Schema.optional(Schema.Number),
    modelVersion: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PredictionsGetModelStatusOutput>;

// The operation
/**
 * Gets model status of the prediction.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param predictionName - The name of the Prediction.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const PredictionsGetModelStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PredictionsGetModelStatusInput,
    outputSchema: PredictionsGetModelStatusOutput,
  }),
);
// Input Schema
export interface PredictionsGetTrainingResultsInput {
  resourceGroupName: string;
  hubName: string;
  predictionName: string;
  subscriptionId: string;
}
export const PredictionsGetTrainingResultsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    predictionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}/getTrainingResults",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<PredictionsGetTrainingResultsInput>;

// Output Schema
export interface PredictionsGetTrainingResultsOutput {
  tenantId?: string;
  scoreName?: string;
  predictionDistribution?: {
    totalPositives?: number;
    totalNegatives?: number;
    distributions?: {
      scoreThreshold?: number;
      positives?: number;
      negatives?: number;
      positivesAboveThreshold?: number;
      negativesAboveThreshold?: number;
    }[];
  };
  canonicalProfiles?: {
    canonicalProfileId?: number;
    properties?: {
      profileName?: string;
      profilePropertyName?: string;
      rank?: number;
      type?:
        | "Numeric"
        | "Categorical"
        | "DerivedCategorical"
        | "DerivedNumeric";
      value?: string;
    }[];
  }[];
  primaryProfileInstanceCount?: number;
}
export const PredictionsGetTrainingResultsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String),
    scoreName: Schema.optional(Schema.String),
    predictionDistribution: Schema.optional(
      Schema.Struct({
        totalPositives: Schema.optional(Schema.Number),
        totalNegatives: Schema.optional(Schema.Number),
        distributions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              scoreThreshold: Schema.optional(Schema.Number),
              positives: Schema.optional(Schema.Number),
              negatives: Schema.optional(Schema.Number),
              positivesAboveThreshold: Schema.optional(Schema.Number),
              negativesAboveThreshold: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
    ),
    canonicalProfiles: Schema.optional(
      Schema.Array(
        Schema.Struct({
          canonicalProfileId: Schema.optional(Schema.Number),
          properties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                profileName: Schema.optional(Schema.String),
                profilePropertyName: Schema.optional(Schema.String),
                rank: Schema.optional(Schema.Number),
                type: Schema.optional(
                  Schema.Literals([
                    "Numeric",
                    "Categorical",
                    "DerivedCategorical",
                    "DerivedNumeric",
                  ]),
                ),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
    primaryProfileInstanceCount: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<PredictionsGetTrainingResultsOutput>;

// The operation
/**
 * Gets training results.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param predictionName - The name of the Prediction.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const PredictionsGetTrainingResults =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PredictionsGetTrainingResultsInput,
    outputSchema: PredictionsGetTrainingResultsOutput,
  }));
// Input Schema
export interface PredictionsListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const PredictionsListByHubInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<PredictionsListByHubInput>;

// Output Schema
export interface PredictionsListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PredictionsListByHubOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PredictionsListByHubOutput>;

// The operation
/**
 * Gets all the predictions in the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const PredictionsListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PredictionsListByHubInput,
    outputSchema: PredictionsListByHubOutput,
  }),
);
// Input Schema
export interface PredictionsModelStatusInput {
  resourceGroupName: string;
  hubName: string;
  predictionName: string;
  subscriptionId: string;
  tenantId?: string;
  predictionGuidId?: string;
  status:
    | "New"
    | "Provisioning"
    | "ProvisioningFailed"
    | "PendingDiscovering"
    | "Discovering"
    | "PendingFeaturing"
    | "Featuring"
    | "FeaturingFailed"
    | "PendingTraining"
    | "Training"
    | "TrainingFailed"
    | "Evaluating"
    | "EvaluatingFailed"
    | "PendingModelConfirmation"
    | "Active"
    | "Deleted"
    | "HumanIntervention"
    | "Failed";
  message?: string;
  trainingSetCount?: number;
  testSetCount?: number;
  validationSetCount?: number;
  trainingAccuracy?: number;
  signalsUsed?: number;
  modelVersion?: string;
}
export const PredictionsModelStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    predictionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tenantId: Schema.optional(Schema.String),
    predictionGuidId: Schema.optional(Schema.String),
    status: Schema.Literals([
      "New",
      "Provisioning",
      "ProvisioningFailed",
      "PendingDiscovering",
      "Discovering",
      "PendingFeaturing",
      "Featuring",
      "FeaturingFailed",
      "PendingTraining",
      "Training",
      "TrainingFailed",
      "Evaluating",
      "EvaluatingFailed",
      "PendingModelConfirmation",
      "Active",
      "Deleted",
      "HumanIntervention",
      "Failed",
    ]),
    message: Schema.optional(Schema.String),
    trainingSetCount: Schema.optional(Schema.Number),
    testSetCount: Schema.optional(Schema.Number),
    validationSetCount: Schema.optional(Schema.Number),
    trainingAccuracy: Schema.optional(Schema.Number),
    signalsUsed: Schema.optional(Schema.Number),
    modelVersion: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}/modelStatus",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<PredictionsModelStatusInput>;

// Output Schema
export type PredictionsModelStatusOutput = void;
export const PredictionsModelStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PredictionsModelStatusOutput>;

// The operation
/**
 * Creates or updates the model status of prediction.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param predictionName - The name of the Prediction.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const PredictionsModelStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PredictionsModelStatusInput,
    outputSchema: PredictionsModelStatusOutput,
  }),
);
// Input Schema
export interface ProfilesCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  profileName: string;
  subscriptionId: string;
  properties?: {
    attributes?: Record<string, string[]>;
    description?: Record<string, string>;
    displayName?: Record<string, string>;
    localizedAttributes?: Record<string, Record<string, string>>;
    smallImage?: string;
    mediumImage?: string;
    largeImage?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ProfilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Array(Schema.String)),
        ),
        description: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        displayName: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        localizedAttributes: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Record(Schema.String, Schema.String),
          ),
        ),
        smallImage: Schema.optional(Schema.String),
        mediumImage: Schema.optional(Schema.String),
        largeImage: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ProfilesCreateOrUpdateInput>;

// Output Schema
export interface ProfilesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ProfilesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProfilesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a profile within a Hub, or updates an existing profile.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param profileName - The name of the profile.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ProfilesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProfilesCreateOrUpdateInput,
    outputSchema: ProfilesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ProfilesDeleteInput {
  resourceGroupName: string;
  hubName: string;
  profileName: string;
  subscriptionId: string;
  "locale-code"?: string;
}
export const ProfilesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  "locale-code": Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<ProfilesDeleteInput>;

// Output Schema
export type ProfilesDeleteOutput = void;
export const ProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProfilesDeleteOutput>;

// The operation
/**
 * Deletes a profile within a hub
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param profileName - The name of the profile.
 * @param locale-code - Locale of profile to retrieve, default is en-us.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ProfilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProfilesDeleteInput,
  outputSchema: ProfilesDeleteOutput,
}));
// Input Schema
export interface ProfilesGetInput {
  resourceGroupName: string;
  hubName: string;
  profileName: string;
  subscriptionId: string;
  "locale-code"?: string;
}
export const ProfilesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  "locale-code": Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<ProfilesGetInput>;

// Output Schema
export interface ProfilesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ProfilesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ProfilesGetOutput>;

// The operation
/**
 * Gets information about the specified profile.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param profileName - The name of the profile.
 * @param locale-code - Locale of profile to retrieve, default is en-us.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ProfilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProfilesGetInput,
  outputSchema: ProfilesGetOutput,
}));
// Input Schema
export interface ProfilesGetEnrichingKpisInput {
  resourceGroupName: string;
  hubName: string;
  profileName: string;
  subscriptionId: string;
}
export const ProfilesGetEnrichingKpisInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}/getEnrichingKpis",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ProfilesGetEnrichingKpisInput>;

// Output Schema
export type ProfilesGetEnrichingKpisOutput = {
  entityType: "None" | "Profile" | "Interaction" | "Relationship";
  entityTypeName: string;
  tenantId?: string;
  kpiName?: string;
  displayName?: Record<string, string>;
  description?: Record<string, string>;
  calculationWindow: "Lifetime" | "Hour" | "Day" | "Week" | "Month";
  calculationWindowFieldName?: string;
  function:
    | "Sum"
    | "Avg"
    | "Min"
    | "Max"
    | "Last"
    | "Count"
    | "None"
    | "CountDistinct";
  expression: string;
  unit?: string;
  filter?: string;
  groupBy?: string[];
  groupByMetadata?: {
    displayName?: Record<string, string>;
    fieldName?: string;
    fieldType?: string;
  }[];
  participantProfilesMetadata?: { typeName: string }[];
  provisioningState?:
    | "Provisioning"
    | "Succeeded"
    | "Expiring"
    | "Deleting"
    | "HumanIntervention"
    | "Failed";
  thresHolds?: {
    lowerLimit: number;
    upperLimit: number;
    increasingKpi: boolean;
  };
  aliases?: { aliasName: string; expression: string }[];
  extracts?: { extractName: string; expression: string }[];
}[];
export const ProfilesGetEnrichingKpisOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      entityType: Schema.Literals([
        "None",
        "Profile",
        "Interaction",
        "Relationship",
      ]),
      entityTypeName: Schema.String,
      tenantId: Schema.optional(Schema.String),
      kpiName: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      description: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      calculationWindow: Schema.Literals([
        "Lifetime",
        "Hour",
        "Day",
        "Week",
        "Month",
      ]),
      calculationWindowFieldName: Schema.optional(Schema.String),
      function: Schema.Literals([
        "Sum",
        "Avg",
        "Min",
        "Max",
        "Last",
        "Count",
        "None",
        "CountDistinct",
      ]),
      expression: Schema.String,
      unit: Schema.optional(Schema.String),
      filter: Schema.optional(Schema.String),
      groupBy: Schema.optional(Schema.Array(Schema.String)),
      groupByMetadata: Schema.optional(
        Schema.Array(
          Schema.Struct({
            displayName: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            fieldName: Schema.optional(Schema.String),
            fieldType: Schema.optional(Schema.String),
          }),
        ),
      ),
      participantProfilesMetadata: Schema.optional(
        Schema.Array(
          Schema.Struct({
            typeName: Schema.String,
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Provisioning",
          "Succeeded",
          "Expiring",
          "Deleting",
          "HumanIntervention",
          "Failed",
        ]),
      ),
      thresHolds: Schema.optional(
        Schema.Struct({
          lowerLimit: Schema.Number,
          upperLimit: Schema.Number,
          increasingKpi: Schema.Boolean,
        }),
      ),
      aliases: Schema.optional(
        Schema.Array(
          Schema.Struct({
            aliasName: Schema.String,
            expression: Schema.String,
          }),
        ),
      ),
      extracts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            extractName: Schema.String,
            expression: Schema.String,
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Codec<ProfilesGetEnrichingKpisOutput>;

// The operation
/**
 * Gets the KPIs that enrich the profile Type identified by the supplied name. Enrichment happens through participants of the Interaction on an Interaction KPI and through Relationships for Profile KPIs.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param profileName - The name of the profile.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ProfilesGetEnrichingKpis = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProfilesGetEnrichingKpisInput,
    outputSchema: ProfilesGetEnrichingKpisOutput,
  }),
);
// Input Schema
export interface ProfilesListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
  "locale-code"?: string;
}
export const ProfilesListByHubInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "locale-code": Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<ProfilesListByHubInput>;

// Output Schema
export interface ProfilesListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ProfilesListByHubOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProfilesListByHubOutput>;

// The operation
/**
 * Gets all profile in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param locale-code - Locale of profile to retrieve, default is en-us.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ProfilesListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProfilesListByHubInput,
  outputSchema: ProfilesListByHubOutput,
}));
// Input Schema
export interface RelationshipLinksCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  relationshipLinkName: string;
  subscriptionId: string;
  properties?: {
    displayName?: Record<string, string>;
    description?: Record<string, string>;
    interactionType: string;
    linkName?: string;
    mappings?: {
      interactionFieldName: string;
      linkType?: "UpdateAlways" | "CopyIfNull";
      relationshipFieldName: string;
    }[];
    profilePropertyReferences: {
      interactionPropertyName: string;
      profilePropertyName: string;
    }[];
    provisioningState?:
      | "Provisioning"
      | "Succeeded"
      | "Expiring"
      | "Deleting"
      | "HumanIntervention"
      | "Failed";
    relatedProfilePropertyReferences: {
      interactionPropertyName: string;
      profilePropertyName: string;
    }[];
    relationshipName: string;
    relationshipGuidId?: string;
    tenantId?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const RelationshipLinksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    relationshipLinkName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        description: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        interactionType: Schema.String,
        linkName: Schema.optional(Schema.String),
        mappings: Schema.optional(
          Schema.Array(
            Schema.Struct({
              interactionFieldName: Schema.String,
              linkType: Schema.optional(
                Schema.Literals(["UpdateAlways", "CopyIfNull"]),
              ),
              relationshipFieldName: Schema.String,
            }),
          ),
        ),
        profilePropertyReferences: Schema.Array(
          Schema.Struct({
            interactionPropertyName: Schema.String,
            profilePropertyName: Schema.String,
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Succeeded",
            "Expiring",
            "Deleting",
            "HumanIntervention",
            "Failed",
          ]),
        ),
        relatedProfilePropertyReferences: Schema.Array(
          Schema.Struct({
            interactionPropertyName: Schema.String,
            profilePropertyName: Schema.String,
          }),
        ),
        relationshipName: Schema.String,
        relationshipGuidId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationshipLinks/{relationshipLinkName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RelationshipLinksCreateOrUpdateInput>;

// Output Schema
export interface RelationshipLinksCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RelationshipLinksCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RelationshipLinksCreateOrUpdateOutput>;

// The operation
/**
 * Creates a relationship link or updates an existing relationship link within a hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param relationshipLinkName - The name of the relationship link.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RelationshipLinksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RelationshipLinksCreateOrUpdateInput,
    outputSchema: RelationshipLinksCreateOrUpdateOutput,
  }));
// Input Schema
export interface RelationshipLinksDeleteInput {
  resourceGroupName: string;
  hubName: string;
  relationshipLinkName: string;
  subscriptionId: string;
}
export const RelationshipLinksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    relationshipLinkName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationshipLinks/{relationshipLinkName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RelationshipLinksDeleteInput>;

// Output Schema
export type RelationshipLinksDeleteOutput = void;
export const RelationshipLinksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RelationshipLinksDeleteOutput>;

// The operation
/**
 * Deletes a relationship link within a hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param relationshipLinkName - The name of the relationship.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RelationshipLinksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RelationshipLinksDeleteInput,
    outputSchema: RelationshipLinksDeleteOutput,
  }),
);
// Input Schema
export interface RelationshipLinksGetInput {
  resourceGroupName: string;
  hubName: string;
  relationshipLinkName: string;
  subscriptionId: string;
}
export const RelationshipLinksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    relationshipLinkName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationshipLinks/{relationshipLinkName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RelationshipLinksGetInput>;

// Output Schema
export interface RelationshipLinksGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RelationshipLinksGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RelationshipLinksGetOutput>;

// The operation
/**
 * Gets information about the specified relationship Link.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param relationshipLinkName - The name of the relationship link.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RelationshipLinksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RelationshipLinksGetInput,
    outputSchema: RelationshipLinksGetOutput,
  }),
);
// Input Schema
export interface RelationshipLinksListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const RelationshipLinksListByHubInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationshipLinks",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RelationshipLinksListByHubInput>;

// Output Schema
export interface RelationshipLinksListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const RelationshipLinksListByHubOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RelationshipLinksListByHubOutput>;

// The operation
/**
 * Gets all relationship links in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RelationshipLinksListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RelationshipLinksListByHubInput,
    outputSchema: RelationshipLinksListByHubOutput,
  }),
);
// Input Schema
export interface RelationshipsCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  relationshipName: string;
  subscriptionId: string;
  properties?: {
    cardinality?: "OneToOne" | "OneToMany" | "ManyToMany";
    displayName?: Record<string, string>;
    description?: Record<string, string>;
    expiryDateTimeUtc?: string;
    fields?: {
      arrayValueSeparator?: string;
      enumValidValues?: {
        value?: number;
        localizedValueNames?: Record<string, string>;
      }[];
      fieldName: string;
      fieldType: string;
      isArray?: boolean;
      isEnum?: boolean;
      isFlagEnum?: boolean;
      isImage?: boolean;
      isLocalizedString?: boolean;
      isName?: boolean;
      isRequired?: boolean;
      propertyId?: string;
      schemaItemPropLink?: string;
      maxLength?: number;
      isAvailableInGraph?: boolean;
      dataSourcePrecedenceRules?: {
        dataSource?: {
          name?: string;
          dataSourceType?: "Connector" | "LinkInteraction" | "SystemDefault";
          status?: "None" | "Active" | "Deleted";
          id?: number;
          dataSourceReferenceId?: string;
        };
        precedence?: number;
      }[];
    }[];
    lookupMappings?: {
      fieldMappings: {
        profileFieldName: string;
        relatedProfileKeyProperty: string;
      }[];
    }[];
    profileType: string;
    provisioningState?:
      | "Provisioning"
      | "Succeeded"
      | "Expiring"
      | "Deleting"
      | "HumanIntervention"
      | "Failed";
    relationshipName?: string;
    relatedProfileType: string;
    relationshipGuidId?: string;
    tenantId?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const RelationshipsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    relationshipName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        cardinality: Schema.optional(
          Schema.Literals(["OneToOne", "OneToMany", "ManyToMany"]),
        ),
        displayName: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        description: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        expiryDateTimeUtc: Schema.optional(Schema.String),
        fields: Schema.optional(
          Schema.Array(
            Schema.Struct({
              arrayValueSeparator: Schema.optional(Schema.String),
              enumValidValues: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    value: Schema.optional(Schema.Number),
                    localizedValueNames: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                  }),
                ),
              ),
              fieldName: Schema.String,
              fieldType: Schema.String,
              isArray: Schema.optional(Schema.Boolean),
              isEnum: Schema.optional(Schema.Boolean),
              isFlagEnum: Schema.optional(Schema.Boolean),
              isImage: Schema.optional(Schema.Boolean),
              isLocalizedString: Schema.optional(Schema.Boolean),
              isName: Schema.optional(Schema.Boolean),
              isRequired: Schema.optional(Schema.Boolean),
              propertyId: Schema.optional(Schema.String),
              schemaItemPropLink: Schema.optional(Schema.String),
              maxLength: Schema.optional(Schema.Number),
              isAvailableInGraph: Schema.optional(Schema.Boolean),
              dataSourcePrecedenceRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    dataSource: Schema.optional(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        dataSourceType: Schema.optional(
                          Schema.Literals([
                            "Connector",
                            "LinkInteraction",
                            "SystemDefault",
                          ]),
                        ),
                        status: Schema.optional(
                          Schema.Literals(["None", "Active", "Deleted"]),
                        ),
                        id: Schema.optional(Schema.Number),
                        dataSourceReferenceId: Schema.optional(Schema.String),
                      }),
                    ),
                    precedence: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        ),
        lookupMappings: Schema.optional(
          Schema.Array(
            Schema.Struct({
              fieldMappings: Schema.Array(
                Schema.Struct({
                  profileFieldName: Schema.String,
                  relatedProfileKeyProperty: Schema.String,
                }),
              ),
            }),
          ),
        ),
        profileType: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Succeeded",
            "Expiring",
            "Deleting",
            "HumanIntervention",
            "Failed",
          ]),
        ),
        relationshipName: Schema.optional(Schema.String),
        relatedProfileType: Schema.String,
        relationshipGuidId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RelationshipsCreateOrUpdateInput>;

// Output Schema
export interface RelationshipsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RelationshipsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RelationshipsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a relationship or updates an existing relationship within a hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param relationshipName - The name of the Relationship.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RelationshipsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RelationshipsCreateOrUpdateInput,
    outputSchema: RelationshipsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface RelationshipsDeleteInput {
  resourceGroupName: string;
  hubName: string;
  relationshipName: string;
  subscriptionId: string;
}
export const RelationshipsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    relationshipName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RelationshipsDeleteInput>;

// Output Schema
export type RelationshipsDeleteOutput = void;
export const RelationshipsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RelationshipsDeleteOutput>;

// The operation
/**
 * Deletes a relationship within a hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param relationshipName - The name of the relationship.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RelationshipsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RelationshipsDeleteInput,
  outputSchema: RelationshipsDeleteOutput,
}));
// Input Schema
export interface RelationshipsGetInput {
  resourceGroupName: string;
  hubName: string;
  relationshipName: string;
  subscriptionId: string;
}
export const RelationshipsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  relationshipName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<RelationshipsGetInput>;

// Output Schema
export interface RelationshipsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RelationshipsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<RelationshipsGetOutput>;

// The operation
/**
 * Gets information about the specified relationship.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param relationshipName - The name of the relationship.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RelationshipsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RelationshipsGetInput,
  outputSchema: RelationshipsGetOutput,
}));
// Input Schema
export interface RelationshipsListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const RelationshipsListByHubInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RelationshipsListByHubInput>;

// Output Schema
export interface RelationshipsListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const RelationshipsListByHubOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RelationshipsListByHubOutput>;

// The operation
/**
 * Gets all relationships in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RelationshipsListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RelationshipsListByHubInput,
    outputSchema: RelationshipsListByHubOutput,
  }),
);
// Input Schema
export interface RoleAssignmentsCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  assignmentName: string;
  subscriptionId: string;
  properties?: {
    tenantId?: string;
    assignmentName?: string;
    displayName?: Record<string, string>;
    description?: Record<string, string>;
    provisioningState?:
      | "Provisioning"
      | "Succeeded"
      | "Expiring"
      | "Deleting"
      | "HumanIntervention"
      | "Failed";
    role:
      | "Admin"
      | "Reader"
      | "ManageAdmin"
      | "ManageReader"
      | "DataAdmin"
      | "DataReader";
    principals: {
      principalId: string;
      principalType: string;
      principalMetadata?: Record<string, string>;
    }[];
    profiles?: { elements?: string[]; exceptions?: string[] };
    interactions?: { elements?: string[]; exceptions?: string[] };
    links?: { elements?: string[]; exceptions?: string[] };
    kpis?: { elements?: string[]; exceptions?: string[] };
    sasPolicies?: { elements?: string[]; exceptions?: string[] };
    connectors?: { elements?: string[]; exceptions?: string[] };
    views?: { elements?: string[]; exceptions?: string[] };
    relationshipLinks?: { elements?: string[]; exceptions?: string[] };
    relationships?: { elements?: string[]; exceptions?: string[] };
    widgetTypes?: { elements?: string[]; exceptions?: string[] };
    roleAssignments?: { elements?: string[]; exceptions?: string[] };
    conflationPolicies?: { elements?: string[]; exceptions?: string[] };
    segments?: { elements?: string[]; exceptions?: string[] };
  };
  id?: string;
  name?: string;
  type?: string;
}
export const RoleAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    assignmentName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        assignmentName: Schema.optional(Schema.String),
        displayName: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        description: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Succeeded",
            "Expiring",
            "Deleting",
            "HumanIntervention",
            "Failed",
          ]),
        ),
        role: Schema.Literals([
          "Admin",
          "Reader",
          "ManageAdmin",
          "ManageReader",
          "DataAdmin",
          "DataReader",
        ]),
        principals: Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            principalType: Schema.String,
            principalMetadata: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        profiles: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        interactions: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        links: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        kpis: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        sasPolicies: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        connectors: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        views: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        relationshipLinks: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        relationships: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        widgetTypes: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        roleAssignments: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        conflationPolicies: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        segments: Schema.optional(
          Schema.Struct({
            elements: Schema.optional(Schema.Array(Schema.String)),
            exceptions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments/{assignmentName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface RoleAssignmentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RoleAssignmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RoleAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a role assignment in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param assignmentName - The assignment name
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RoleAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RoleAssignmentsCreateOrUpdateInput,
    outputSchema: RoleAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RoleAssignmentsDeleteInput {
  resourceGroupName: string;
  hubName: string;
  assignmentName: string;
  subscriptionId: string;
}
export const RoleAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    assignmentName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments/{assignmentName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsDeleteInput>;

// Output Schema
export type RoleAssignmentsDeleteOutput = void;
export const RoleAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RoleAssignmentsDeleteOutput>;

// The operation
/**
 * Deletes the role assignment in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param assignmentName - The name of the role assignment.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RoleAssignmentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RoleAssignmentsDeleteInput,
    outputSchema: RoleAssignmentsDeleteOutput,
  }),
);
// Input Schema
export interface RoleAssignmentsGetInput {
  resourceGroupName: string;
  hubName: string;
  assignmentName: string;
  subscriptionId: string;
}
export const RoleAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    assignmentName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments/{assignmentName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsGetInput>;

// Output Schema
export interface RoleAssignmentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RoleAssignmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RoleAssignmentsGetOutput>;

// The operation
/**
 * Gets the role assignment in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param assignmentName - The name of the role assignment.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RoleAssignmentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RoleAssignmentsGetInput,
  outputSchema: RoleAssignmentsGetOutput,
}));
// Input Schema
export interface RoleAssignmentsListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const RoleAssignmentsListByHubInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsListByHubInput>;

// Output Schema
export interface RoleAssignmentsListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const RoleAssignmentsListByHubOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RoleAssignmentsListByHubOutput>;

// The operation
/**
 * Gets all the role assignments for the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RoleAssignmentsListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RoleAssignmentsListByHubInput,
    outputSchema: RoleAssignmentsListByHubOutput,
  }),
);
// Input Schema
export interface RolesListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const RolesListByHubInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roles",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<RolesListByHubInput>;

// Output Schema
export interface RolesListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const RolesListByHubOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RolesListByHubOutput>;

// The operation
/**
 * Gets all the roles for the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const RolesListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RolesListByHubInput,
  outputSchema: RolesListByHubOutput,
}));
// Input Schema
export interface ViewsCreateOrUpdateInput {
  resourceGroupName: string;
  hubName: string;
  viewName: string;
  subscriptionId: string;
  properties?: {
    viewName?: string;
    userId?: string;
    tenantId?: string;
    displayName?: Record<string, string>;
    definition: string;
    changed?: string;
    created?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ViewsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    viewName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        viewName: Schema.optional(Schema.String),
        userId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        displayName: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        definition: Schema.String,
        changed: Schema.optional(Schema.String),
        created: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/views/{viewName}",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<ViewsCreateOrUpdateInput>;

// Output Schema
export interface ViewsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ViewsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ViewsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a view or updates an existing view in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param viewName - The name of the view.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ViewsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ViewsCreateOrUpdateInput,
  outputSchema: ViewsCreateOrUpdateOutput,
}));
// Input Schema
export interface ViewsDeleteInput {
  resourceGroupName: string;
  hubName: string;
  viewName: string;
  subscriptionId: string;
  userId: string;
}
export const ViewsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  viewName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  userId: Schema.String,
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/views/{viewName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<ViewsDeleteInput>;

// Output Schema
export type ViewsDeleteOutput = void;
export const ViewsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ViewsDeleteOutput>;

// The operation
/**
 * Deletes a view in the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param viewName - The name of the view.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param userId - The user ID. Use * to retrieve hub level view.
 */
export const ViewsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ViewsDeleteInput,
  outputSchema: ViewsDeleteOutput,
}));
// Input Schema
export interface ViewsGetInput {
  resourceGroupName: string;
  hubName: string;
  viewName: string;
  subscriptionId: string;
  userId: string;
}
export const ViewsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  viewName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  userId: Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/views/{viewName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<ViewsGetInput>;

// Output Schema
export interface ViewsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ViewsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ViewsGetOutput>;

// The operation
/**
 * Gets a view in the hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param viewName - The name of the view.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param userId - The user ID. Use * to retrieve hub level view.
 */
export const ViewsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ViewsGetInput,
  outputSchema: ViewsGetOutput,
}));
// Input Schema
export interface ViewsListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
  userId: string;
}
export const ViewsListByHubInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  userId: Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/views",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<ViewsListByHubInput>;

// Output Schema
export interface ViewsListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ViewsListByHubOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ViewsListByHubOutput>;

// The operation
/**
 * Gets all available views for given user in the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param userId - The user ID. Use * to retrieve hub level views.
 */
export const ViewsListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ViewsListByHubInput,
  outputSchema: ViewsListByHubOutput,
}));
// Input Schema
export interface WidgetTypesGetInput {
  resourceGroupName: string;
  hubName: string;
  widgetTypeName: string;
  subscriptionId: string;
}
export const WidgetTypesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hubName: Schema.String.pipe(T.PathParam()),
  widgetTypeName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/widgetTypes/{widgetTypeName}",
    apiVersion: "2017-04-26",
  }),
) as unknown as Schema.Codec<WidgetTypesGetInput>;

// Output Schema
export interface WidgetTypesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const WidgetTypesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<WidgetTypesGetOutput>;

// The operation
/**
 * Gets a widget type in the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param widgetTypeName - The name of the widget type.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const WidgetTypesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WidgetTypesGetInput,
  outputSchema: WidgetTypesGetOutput,
}));
// Input Schema
export interface WidgetTypesListByHubInput {
  resourceGroupName: string;
  hubName: string;
  subscriptionId: string;
}
export const WidgetTypesListByHubInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/widgetTypes",
      apiVersion: "2017-04-26",
    }),
  ) as unknown as Schema.Codec<WidgetTypesListByHubInput>;

// Output Schema
export interface WidgetTypesListByHubOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const WidgetTypesListByHubOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WidgetTypesListByHubOutput>;

// The operation
/**
 * Gets all available widget types in the specified hub.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param hubName - The name of the hub.
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const WidgetTypesListByHub = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WidgetTypesListByHubInput,
    outputSchema: WidgetTypesListByHubOutput,
  }),
);
