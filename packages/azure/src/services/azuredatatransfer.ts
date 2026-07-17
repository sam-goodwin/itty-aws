/**
 * Azure Azuredatatransfer API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AzureDataTransferListApprovedSchemasInput {
  pipeline?: string;
  direction?: "Send" | "Receive";
}
export const AzureDataTransferListApprovedSchemasInput =
  /*@__PURE__*/ Schema.Struct({
    pipeline: Schema.optional(Schema.String),
    direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AzureDataTransfer/listApprovedSchemas",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<AzureDataTransferListApprovedSchemasInput>;

// Output Schema
export interface AzureDataTransferListApprovedSchemasOutput {
  value?: {
    id?: string;
    connectionId?: string;
    status?: "New" | "Approved";
    name?: string;
    content?: string;
    direction?: "Send" | "Receive";
    schemaUri?: string;
    schemaType?: "Xsd" | "Zip";
  }[];
}
export const AzureDataTransferListApprovedSchemasOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          connectionId: Schema.optional(Schema.String),
          status: Schema.optional(Schema.Literals(["New", "Approved"])),
          name: Schema.optional(Schema.String),
          content: Schema.optional(Schema.String),
          direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
          schemaUri: Schema.optional(Schema.String),
          schemaType: Schema.optional(Schema.Literals(["Xsd", "Zip"])),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AzureDataTransferListApprovedSchemasOutput>;

// The operation
/**
 * Retrieves the list of approved schemas available for Azure Data Transfer. This operation has reached end of life support starting version 2025-05-30-preview. For schema support please create and use a FlowProfile resource.
 *
 * @param api-version - The API version to use for this operation.
 */
export const AzureDataTransferListApprovedSchemas =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AzureDataTransferListApprovedSchemasInput,
    outputSchema: AzureDataTransferListApprovedSchemasOutput,
  }));
// Input Schema
export interface AzureDataTransferValidateSchemaInput {
  id?: string;
  connectionId?: string;
  status?: "New" | "Approved";
  name?: string;
  content?: string;
  direction?: "Send" | "Receive";
  schemaUri?: string;
  schemaType?: "Xsd" | "Zip";
}
export const AzureDataTransferValidateSchemaInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    connectionId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["New", "Approved"])),
    name: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
    schemaUri: Schema.optional(Schema.String),
    schemaType: Schema.optional(Schema.Literals(["Xsd", "Zip"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.AzureDataTransfer/validateSchema",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<AzureDataTransferValidateSchemaInput>;

// Output Schema
export interface AzureDataTransferValidateSchemaOutput {
  status?: "Succeeded" | "Failed";
  message?: string;
}
export const AzureDataTransferValidateSchemaOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.Literals(["Succeeded", "Failed"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AzureDataTransferValidateSchemaOutput>;

// The operation
/**
 * Validates the structure and content of a schema for use in Azure Data Transfer. This operation has reached end of life support starting version 2025-05-30-preview. For schema support please create and use a FlowProfile resource.
 *
 * @param api-version - The API version to use for this operation.
 */
export const AzureDataTransferValidateSchema =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AzureDataTransferValidateSchemaInput,
    outputSchema: AzureDataTransferValidateSchemaOutput,
  }));
// Input Schema
export interface ConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  properties?: {
    pipeline: string;
    direction?: "Send" | "Receive";
    justification?: string;
    status?: "InReview" | "Approved" | "Rejected" | "Accepted";
    forceDisabledStatus?: (
      | "ConnectionForceDisabled"
      | "FlowTypeForceDisabled"
    )[];
    statusReason?: string;
    linkStatus?: "Linked" | "Unlinked";
    linkedConnectionId?: string;
    flowTypes?: (
      | "Unknown"
      | "Complex"
      | "DevSecOps"
      | "Messaging"
      | "Mission"
      | "MicrosoftInternal"
      | "BasicFiles"
      | "Data"
      | "Standard"
      | "StreamingVideo"
      | "Opaque"
      | "MissionOpaqueXML"
      | "DiskImages"
      | "API"
    )[];
    requirementId?: string;
    remoteSubscriptionId?: string;
    approver?: string;
    pin?: string;
    dateSubmitted?: string;
    primaryContact?: string;
    secondaryContacts?: string[];
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Accepted";
    policies?: string[];
    schemas?: {
      id?: string;
      connectionId?: string;
      status?: "New" | "Approved";
      name?: string;
      content?: string;
      direction?: "Send" | "Receive";
      schemaUri?: string;
      schemaType?: "Xsd" | "Zip";
    }[];
    schemaUris?: string[];
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
export const ConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        pipeline: Schema.String,
        direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
        justification: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals(["InReview", "Approved", "Rejected", "Accepted"]),
        ),
        forceDisabledStatus: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "ConnectionForceDisabled",
              "FlowTypeForceDisabled",
            ]),
          ),
        ),
        statusReason: Schema.optional(Schema.String),
        linkStatus: Schema.optional(Schema.Literals(["Linked", "Unlinked"])),
        linkedConnectionId: Schema.optional(Schema.String),
        flowTypes: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "Unknown",
              "Complex",
              "DevSecOps",
              "Messaging",
              "Mission",
              "MicrosoftInternal",
              "BasicFiles",
              "Data",
              "Standard",
              "StreamingVideo",
              "Opaque",
              "MissionOpaqueXML",
              "DiskImages",
              "API",
            ]),
          ),
        ),
        requirementId: Schema.optional(Schema.String),
        remoteSubscriptionId: Schema.optional(Schema.String),
        approver: Schema.optional(Schema.String),
        pin: Schema.optional(Schema.String),
        dateSubmitted: Schema.optional(Schema.String),
        primaryContact: Schema.optional(Schema.String),
        secondaryContacts: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Accepted"]),
        ),
        policies: Schema.optional(Schema.Array(Schema.String)),
        schemas: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              connectionId: Schema.optional(Schema.String),
              status: Schema.optional(Schema.Literals(["New", "Approved"])),
              name: Schema.optional(Schema.String),
              content: Schema.optional(Schema.String),
              direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
              schemaUri: Schema.optional(Schema.String),
              schemaType: Schema.optional(Schema.Literals(["Xsd", "Zip"])),
            }),
          ),
        ),
        schemaUris: Schema.optional(Schema.Array(Schema.String)),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<ConnectionsCreateOrUpdateInput>;

// Output Schema
export interface ConnectionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ConnectionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the connection resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 */
export const ConnectionsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionsCreateOrUpdateInput,
  outputSchema: ConnectionsCreateOrUpdateOutput,
}));
// Input Schema
export interface ConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
}
export const ConnectionsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<ConnectionsDeleteInput>;

// Output Schema
export type ConnectionsDeleteOutput = void;
export const ConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the connection resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 */
export const ConnectionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionsDeleteInput,
  outputSchema: ConnectionsDeleteOutput,
}));
// Input Schema
export interface ConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
}
export const ConnectionsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<ConnectionsGetInput>;

// Output Schema
export interface ConnectionsGetOutput {
  id?: string;
  name?: string;
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
export const ConnectionsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ConnectionsGetOutput>;

// The operation
/**
 * Gets connection resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 */
export const ConnectionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionsGetInput,
  outputSchema: ConnectionsGetOutput,
}));
// Input Schema
export interface ConnectionsLinkInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  id: string;
  statusReason?: string;
}
export const ConnectionsLinkInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
  id: Schema.String,
  statusReason: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/link",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<ConnectionsLinkInput>;

// Output Schema
export interface ConnectionsLinkOutput {
  id?: string;
  name?: string;
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
export const ConnectionsLinkOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ConnectionsLinkOutput>;

// The operation
/**
 * Links the connection to its pending connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 */
export const ConnectionsLink = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionsLinkInput,
  outputSchema: ConnectionsLinkOutput,
}));
// Input Schema
export interface ConnectionsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ConnectionsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<ConnectionsListByResourceGroupInput>;

// Output Schema
export interface ConnectionsListByResourceGroupOutput {
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
export const ConnectionsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ConnectionsListByResourceGroupOutput>;

// The operation
/**
 * Gets connections in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ConnectionsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectionsListByResourceGroupInput,
    outputSchema: ConnectionsListByResourceGroupOutput,
  }));
// Input Schema
export interface ConnectionsListBySubscriptionInput {
  subscriptionId: string;
}
export const ConnectionsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureDataTransfer/connections",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<ConnectionsListBySubscriptionInput>;

// Output Schema
export interface ConnectionsListBySubscriptionOutput {
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
export const ConnectionsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ConnectionsListBySubscriptionOutput>;

// The operation
/**
 * Gets connections in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ConnectionsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectionsListBySubscriptionInput,
    outputSchema: ConnectionsListBySubscriptionOutput,
  }));
// Input Schema
export interface ConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
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
}
export const ConnectionsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<ConnectionsUpdateInput>;

// Output Schema
export interface ConnectionsUpdateOutput {
  id?: string;
  name?: string;
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
export const ConnectionsUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectionsUpdateOutput>;

// The operation
/**
 * Updates the connection resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 */
export const ConnectionsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionsUpdateInput,
  outputSchema: ConnectionsUpdateOutput,
}));
// Input Schema
export interface FlowsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
  properties?: {
    connection?: {
      name?: string;
      id: string;
      location?: string;
      subscriptionName?: string;
    };
    flowId?: string;
    keyVaultUri?: string;
    linkStatus?: "Linked" | "Unlinked";
    linkedFlowId?: string;
    status?: "Enabled" | "Disabled";
    forceDisabledStatus?: (
      | "ConnectionForceDisabled"
      | "FlowTypeForceDisabled"
    )[];
    storageAccountName?: string;
    storageAccountId?: string;
    storageContainerName?: string;
    storageTableName?: string;
    serviceBusQueueId?: string;
    flowType?:
      | "Unknown"
      | "Complex"
      | "DevSecOps"
      | "Messaging"
      | "Mission"
      | "MicrosoftInternal"
      | "BasicFiles"
      | "Data"
      | "Standard"
      | "StreamingVideo"
      | "Opaque"
      | "MissionOpaqueXML"
      | "DiskImages"
      | "API";
    dataType?: "Blob" | "Table";
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Accepted";
    policies?: string[];
    schema?: {
      id?: string;
      connectionId?: string;
      status?: "New" | "Approved";
      name?: string;
      content?: string;
      direction?: "Send" | "Receive";
      schemaUri?: string;
      schemaType?: "Xsd" | "Zip";
    };
    messagingOptions?: {
      billingTier?: "BlobTransport" | "Standard" | "Premium";
    };
    apiFlowOptions?: {
      remoteEndpoint?: string;
      cname?: string;
      apiMode?: "SDK" | "Endpoint";
      identityTranslation?: "UserIdentity" | "ServiceIdentity";
      senderClientId?: string;
      remoteCallingModeClientId?: string;
      audienceOverride?: string;
    };
    customerManagedKeyVaultUri?: string;
    streamId?: string;
    streamProtocol?: "UDP" | "SRT" | "RTP";
    streamLatency?: number;
    passphrase?: string;
    sourceAddresses?: { sourceAddresses?: string[] };
    destinationEndpoints?: string[];
    destinationEndpointPorts?: number[];
    eventHubId?: string;
    consumerGroup?: string;
  };
  plan?: {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version?: string;
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
export const FlowsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    flowName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        connection: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            id: Schema.String,
            location: Schema.optional(Schema.String),
            subscriptionName: Schema.optional(Schema.String),
          }),
        ),
        flowId: Schema.optional(Schema.String),
        keyVaultUri: Schema.optional(Schema.String),
        linkStatus: Schema.optional(Schema.Literals(["Linked", "Unlinked"])),
        linkedFlowId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        forceDisabledStatus: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "ConnectionForceDisabled",
              "FlowTypeForceDisabled",
            ]),
          ),
        ),
        storageAccountName: Schema.optional(Schema.String),
        storageAccountId: Schema.optional(Schema.String),
        storageContainerName: Schema.optional(Schema.String),
        storageTableName: Schema.optional(Schema.String),
        serviceBusQueueId: Schema.optional(Schema.String),
        flowType: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Complex",
            "DevSecOps",
            "Messaging",
            "Mission",
            "MicrosoftInternal",
            "BasicFiles",
            "Data",
            "Standard",
            "StreamingVideo",
            "Opaque",
            "MissionOpaqueXML",
            "DiskImages",
            "API",
          ]),
        ),
        dataType: Schema.optional(Schema.Literals(["Blob", "Table"])),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Accepted"]),
        ),
        policies: Schema.optional(Schema.Array(Schema.String)),
        schema: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            connectionId: Schema.optional(Schema.String),
            status: Schema.optional(Schema.Literals(["New", "Approved"])),
            name: Schema.optional(Schema.String),
            content: Schema.optional(Schema.String),
            direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
            schemaUri: Schema.optional(Schema.String),
            schemaType: Schema.optional(Schema.Literals(["Xsd", "Zip"])),
          }),
        ),
        messagingOptions: Schema.optional(
          Schema.Struct({
            billingTier: Schema.optional(
              Schema.Literals(["BlobTransport", "Standard", "Premium"]),
            ),
          }),
        ),
        apiFlowOptions: Schema.optional(
          Schema.Struct({
            remoteEndpoint: Schema.optional(Schema.String),
            cname: Schema.optional(Schema.String),
            apiMode: Schema.optional(Schema.Literals(["SDK", "Endpoint"])),
            identityTranslation: Schema.optional(
              Schema.Literals(["UserIdentity", "ServiceIdentity"]),
            ),
            senderClientId: Schema.optional(Schema.String),
            remoteCallingModeClientId: Schema.optional(Schema.String),
            audienceOverride: Schema.optional(Schema.String),
          }),
        ),
        customerManagedKeyVaultUri: Schema.optional(Schema.String),
        streamId: Schema.optional(Schema.String),
        streamProtocol: Schema.optional(Schema.Literals(["UDP", "SRT", "RTP"])),
        streamLatency: Schema.optional(Schema.Number),
        passphrase: Schema.optional(Schema.String),
        sourceAddresses: Schema.optional(
          Schema.Struct({
            sourceAddresses: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        destinationEndpoints: Schema.optional(Schema.Array(Schema.String)),
        destinationEndpointPorts: Schema.optional(Schema.Array(Schema.Number)),
        eventHubId: Schema.optional(Schema.String),
        consumerGroup: Schema.optional(Schema.String),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsCreateOrUpdateInput>;

// Output Schema
export interface FlowsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const FlowsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FlowsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the flow resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsCreateOrUpdateInput,
  outputSchema: FlowsCreateOrUpdateOutput,
}));
// Input Schema
export interface FlowsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
}
export const FlowsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
  flowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<FlowsDeleteInput>;

// Output Schema
export type FlowsDeleteOutput = void;
export const FlowsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FlowsDeleteOutput>;

// The operation
/**
 * Deletes the flow resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsDeleteInput,
  outputSchema: FlowsDeleteOutput,
}));
// Input Schema
export interface FlowsDisableInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
}
export const FlowsDisableInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
  flowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/disable",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<FlowsDisableInput>;

// Output Schema
export interface FlowsDisableOutput {
  id?: string;
  name?: string;
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
export const FlowsDisableOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FlowsDisableOutput>;

// The operation
/**
 * Disables the specified flow
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsDisable = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsDisableInput,
  outputSchema: FlowsDisableOutput,
}));
// Input Schema
export interface FlowsEnableInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
}
export const FlowsEnableInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
  flowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/enable",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<FlowsEnableInput>;

// Output Schema
export interface FlowsEnableOutput {
  id?: string;
  name?: string;
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
export const FlowsEnableOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FlowsEnableOutput>;

// The operation
/**
 * Enables the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsEnable = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsEnableInput,
  outputSchema: FlowsEnableOutput,
}));
// Input Schema
export interface FlowsGeneratePassphraseInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
}
export const FlowsGeneratePassphraseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    flowName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/generatePassphrase",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsGeneratePassphraseInput>;

// Output Schema
export interface FlowsGeneratePassphraseOutput {
  id?: string;
  name?: string;
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
export const FlowsGeneratePassphraseOutput =
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
  }) as unknown as Schema.Codec<FlowsGeneratePassphraseOutput>;

// The operation
/**
 * Generate a compliant passphrase for the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsGeneratePassphrase = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsGeneratePassphraseInput,
  outputSchema: FlowsGeneratePassphraseOutput,
}));
// Input Schema
export interface FlowsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
}
export const FlowsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
  flowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<FlowsGetInput>;

// Output Schema
export interface FlowsGetOutput {
  id?: string;
  name?: string;
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
export const FlowsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FlowsGetOutput>;

// The operation
/**
 * Gets flow resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsGetInput,
  outputSchema: FlowsGetOutput,
}));
// Input Schema
export interface FlowsGetDestinationEndpointPortsInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
}
export const FlowsGetDestinationEndpointPortsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    flowName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/getDestinationEndpointPorts",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsGetDestinationEndpointPortsInput>;

// Output Schema
export interface FlowsGetDestinationEndpointPortsOutput {
  ports?: number[];
}
export const FlowsGetDestinationEndpointPortsOutput =
  /*@__PURE__*/ Schema.Struct({
    ports: Schema.optional(Schema.Array(Schema.Number)),
  }) as unknown as Schema.Codec<FlowsGetDestinationEndpointPortsOutput>;

// The operation
/**
 * Get the destination endpoint ports for the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsGetDestinationEndpointPorts =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FlowsGetDestinationEndpointPortsInput,
    outputSchema: FlowsGetDestinationEndpointPortsOutput,
  }));
// Input Schema
export interface FlowsGetDestinationEndpointsInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
}
export const FlowsGetDestinationEndpointsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    flowName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/getDestinationEndpoints",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsGetDestinationEndpointsInput>;

// Output Schema
export interface FlowsGetDestinationEndpointsOutput {
  endpoints?: string[];
}
export const FlowsGetDestinationEndpointsOutput =
  /*@__PURE__*/ Schema.Struct({
    endpoints: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<FlowsGetDestinationEndpointsOutput>;

// The operation
/**
 * Get the destination endpoints for the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsGetDestinationEndpoints =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FlowsGetDestinationEndpointsInput,
    outputSchema: FlowsGetDestinationEndpointsOutput,
  }));
// Input Schema
export interface FlowsGetSourceAddressesInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
}
export const FlowsGetSourceAddressesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    flowName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/getSourceAddresses",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsGetSourceAddressesInput>;

// Output Schema
export interface FlowsGetSourceAddressesOutput {
  sourceAddresses?: string[];
}
export const FlowsGetSourceAddressesOutput =
  /*@__PURE__*/ Schema.Struct({
    sourceAddresses: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<FlowsGetSourceAddressesOutput>;

// The operation
/**
 * Get the source addresses for the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsGetSourceAddresses = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsGetSourceAddressesInput,
  outputSchema: FlowsGetSourceAddressesOutput,
}));
// Input Schema
export interface FlowsGetStreamConnectionStringInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
}
export const FlowsGetStreamConnectionStringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    flowName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/getStreamConnectionString",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsGetStreamConnectionStringInput>;

// Output Schema
export interface FlowsGetStreamConnectionStringOutput {
  connectionString?: Redacted.Redacted<string>;
}
export const FlowsGetStreamConnectionStringOutput =
  /*@__PURE__*/ Schema.Struct({
    connectionString: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<FlowsGetStreamConnectionStringOutput>;

// The operation
/**
 * Get the connection string for the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsGetStreamConnectionString =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FlowsGetStreamConnectionStringInput,
    outputSchema: FlowsGetStreamConnectionStringOutput,
  }));
// Input Schema
export interface FlowsLinkInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
  id: string;
  statusReason?: string;
}
export const FlowsLinkInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
  flowName: Schema.String.pipe(T.PathParam()),
  id: Schema.String,
  statusReason: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/link",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<FlowsLinkInput>;

// Output Schema
export interface FlowsLinkOutput {
  id?: string;
  name?: string;
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
export const FlowsLinkOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FlowsLinkOutput>;

// The operation
/**
 * Links the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsLink = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsLinkInput,
  outputSchema: FlowsLinkOutput,
}));
// Input Schema
export interface FlowsListByConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
}
export const FlowsListByConnectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsListByConnectionInput>;

// Output Schema
export interface FlowsListByConnectionOutput {
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
export const FlowsListByConnectionOutput =
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
  }) as unknown as Schema.Codec<FlowsListByConnectionOutput>;

// The operation
/**
 * Gets flows in a connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 */
export const FlowsListByConnection = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsListByConnectionInput,
  outputSchema: FlowsListByConnectionOutput,
}));
// Input Schema
export interface FlowsSetDestinationEndpointPortsInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
  ports?: number[];
}
export const FlowsSetDestinationEndpointPortsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    flowName: Schema.String.pipe(T.PathParam()),
    ports: Schema.optional(Schema.Array(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/setDestinationEndpointPorts",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsSetDestinationEndpointPortsInput>;

// Output Schema
export interface FlowsSetDestinationEndpointPortsOutput {
  id?: string;
  name?: string;
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
export const FlowsSetDestinationEndpointPortsOutput =
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
  }) as unknown as Schema.Codec<FlowsSetDestinationEndpointPortsOutput>;

// The operation
/**
 * Set the destination endpoint ports for the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsSetDestinationEndpointPorts =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FlowsSetDestinationEndpointPortsInput,
    outputSchema: FlowsSetDestinationEndpointPortsOutput,
  }));
// Input Schema
export interface FlowsSetDestinationEndpointsInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
  endpoints?: string[];
}
export const FlowsSetDestinationEndpointsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    flowName: Schema.String.pipe(T.PathParam()),
    endpoints: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/setDestinationEndpoints",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsSetDestinationEndpointsInput>;

// Output Schema
export interface FlowsSetDestinationEndpointsOutput {
  id?: string;
  name?: string;
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
export const FlowsSetDestinationEndpointsOutput =
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
  }) as unknown as Schema.Codec<FlowsSetDestinationEndpointsOutput>;

// The operation
/**
 * Set the destination endpoints for the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsSetDestinationEndpoints =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FlowsSetDestinationEndpointsInput,
    outputSchema: FlowsSetDestinationEndpointsOutput,
  }));
// Input Schema
export interface FlowsSetPassphraseInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
  value?: string;
}
export const FlowsSetPassphraseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    flowName: Schema.String.pipe(T.PathParam()),
    value: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/setPassphrase",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsSetPassphraseInput>;

// Output Schema
export interface FlowsSetPassphraseOutput {
  id?: string;
  name?: string;
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
export const FlowsSetPassphraseOutput =
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
  }) as unknown as Schema.Codec<FlowsSetPassphraseOutput>;

// The operation
/**
 * Sets the passphrase of the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsSetPassphrase = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsSetPassphraseInput,
  outputSchema: FlowsSetPassphraseOutput,
}));
// Input Schema
export interface FlowsSetSourceAddressesInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
  values?: string[];
}
export const FlowsSetSourceAddressesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    flowName: Schema.String.pipe(T.PathParam()),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}/setSourceAddresses",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<FlowsSetSourceAddressesInput>;

// Output Schema
export interface FlowsSetSourceAddressesOutput {
  id?: string;
  name?: string;
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
export const FlowsSetSourceAddressesOutput =
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
  }) as unknown as Schema.Codec<FlowsSetSourceAddressesOutput>;

// The operation
/**
 * Set the source addresses for the specified flow.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsSetSourceAddresses = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsSetSourceAddressesInput,
  outputSchema: FlowsSetSourceAddressesOutput,
}));
// Input Schema
export interface FlowsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
  flowName: string;
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
}
export const FlowsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
  flowName: Schema.String.pipe(T.PathParam()),
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/flows/{flowName}",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<FlowsUpdateInput>;

// Output Schema
export interface FlowsUpdateOutput {
  id?: string;
  name?: string;
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
export const FlowsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FlowsUpdateOutput>;

// The operation
/**
 * Updates the flow resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 * @param flowName - The name for the flow to perform the operation on.
 */
export const FlowsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FlowsUpdateInput,
  outputSchema: FlowsUpdateOutput,
}));
// Input Schema
export interface ListFlowsByPipelineListInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineName: string;
  value?: string[];
}
export const ListFlowsByPipelineListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineName: Schema.String.pipe(T.PathParam()),
    value: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/pipelines/{pipelineName}/listFlows",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<ListFlowsByPipelineListInput>;

// Output Schema
export interface ListFlowsByPipelineListOutput {
  value?: {
    id?: string;
    flows?: {
      id?: string;
      name?: string;
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
  }[];
}
export const ListFlowsByPipelineListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          flows: Schema.optional(
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ListFlowsByPipelineListOutput>;

// The operation
/**
 * Lists all Flows associated with the specified Pipeline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineName - The name of the pipeline on which to operate.
 */
export const ListFlowsByPipelineList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListFlowsByPipelineListInput,
  outputSchema: ListFlowsByPipelineListOutput,
}));
// Input Schema
export interface ListPendingConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
}
export const ListPendingConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/listPendingConnections",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<ListPendingConnectionsListInput>;

// Output Schema
export interface ListPendingConnectionsListOutput {
  value: {
    subscriptionId?: string;
    pipeline: string;
    direction?: "Send" | "Receive";
    justification?: string;
    status?: "InReview" | "Approved" | "Rejected" | "Accepted";
    forceDisabledStatus?: (
      | "ConnectionForceDisabled"
      | "FlowTypeForceDisabled"
    )[];
    statusReason?: string;
    linkStatus?: "Linked" | "Unlinked";
    linkedConnectionId?: string;
    flowTypes?: (
      | "Unknown"
      | "Complex"
      | "DevSecOps"
      | "Messaging"
      | "Mission"
      | "MicrosoftInternal"
      | "BasicFiles"
      | "Data"
      | "Standard"
      | "StreamingVideo"
      | "Opaque"
      | "MissionOpaqueXML"
      | "DiskImages"
      | "API"
    )[];
    requirementId?: string;
    remoteSubscriptionId?: string;
    approver?: string;
    pin?: string;
    dateSubmitted?: string;
    primaryContact?: string;
    secondaryContacts?: string[];
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Accepted";
    policies?: string[];
    schemas?: {
      id?: string;
      connectionId?: string;
      status?: "New" | "Approved";
      name?: string;
      content?: string;
      direction?: "Send" | "Receive";
      schemaUri?: string;
      schemaType?: "Xsd" | "Zip";
    }[];
    schemaUris?: string[];
    tags?: Record<string, string>;
    location: string;
    id?: string;
    name?: string;
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
export const ListPendingConnectionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        subscriptionId: Schema.optional(Schema.String),
        pipeline: Schema.String,
        direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
        justification: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals(["InReview", "Approved", "Rejected", "Accepted"]),
        ),
        forceDisabledStatus: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "ConnectionForceDisabled",
              "FlowTypeForceDisabled",
            ]),
          ),
        ),
        statusReason: Schema.optional(Schema.String),
        linkStatus: Schema.optional(Schema.Literals(["Linked", "Unlinked"])),
        linkedConnectionId: Schema.optional(Schema.String),
        flowTypes: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "Unknown",
              "Complex",
              "DevSecOps",
              "Messaging",
              "Mission",
              "MicrosoftInternal",
              "BasicFiles",
              "Data",
              "Standard",
              "StreamingVideo",
              "Opaque",
              "MissionOpaqueXML",
              "DiskImages",
              "API",
            ]),
          ),
        ),
        requirementId: Schema.optional(Schema.String),
        remoteSubscriptionId: Schema.optional(Schema.String),
        approver: Schema.optional(Schema.String),
        pin: Schema.optional(Schema.String),
        dateSubmitted: Schema.optional(Schema.String),
        primaryContact: Schema.optional(Schema.String),
        secondaryContacts: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Accepted"]),
        ),
        policies: Schema.optional(Schema.Array(Schema.String)),
        schemas: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              connectionId: Schema.optional(Schema.String),
              status: Schema.optional(Schema.Literals(["New", "Approved"])),
              name: Schema.optional(Schema.String),
              content: Schema.optional(Schema.String),
              direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
              schemaUri: Schema.optional(Schema.String),
              schemaType: Schema.optional(Schema.Literals(["Xsd", "Zip"])),
            }),
          ),
        ),
        schemaUris: Schema.optional(Schema.Array(Schema.String)),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        location: Schema.String,
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
  }) as unknown as Schema.Codec<ListPendingConnectionsListOutput>;

// The operation
/**
 * Lists all pending remote connections that are linkable to this connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 */
export const ListPendingConnectionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListPendingConnectionsListInput,
  outputSchema: ListPendingConnectionsListOutput,
}));
// Input Schema
export interface ListPendingFlowsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  connectionName: string;
}
export const ListPendingFlowsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/connections/{connectionName}/listPendingFlows",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<ListPendingFlowsListInput>;

// Output Schema
export interface ListPendingFlowsListOutput {
  value: {
    subscriptionId?: string;
    connectionId?: string;
    connection?: {
      name?: string;
      id: string;
      location?: string;
      subscriptionName?: string;
    };
    flowId?: string;
    keyVaultUri?: string;
    linkStatus?: "Linked" | "Unlinked";
    linkedFlowId?: string;
    status?: "Enabled" | "Disabled";
    forceDisabledStatus?: (
      | "ConnectionForceDisabled"
      | "FlowTypeForceDisabled"
    )[];
    storageAccountName?: string;
    storageAccountId?: string;
    storageContainerName?: string;
    storageTableName?: string;
    serviceBusQueueId?: string;
    flowType?:
      | "Unknown"
      | "Complex"
      | "DevSecOps"
      | "Messaging"
      | "Mission"
      | "MicrosoftInternal"
      | "BasicFiles"
      | "Data"
      | "Standard"
      | "StreamingVideo"
      | "Opaque"
      | "MissionOpaqueXML"
      | "DiskImages"
      | "API";
    dataType?: "Blob" | "Table";
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Accepted";
    policies?: string[];
    schema?: {
      id?: string;
      connectionId?: string;
      status?: "New" | "Approved";
      name?: string;
      content?: string;
      direction?: "Send" | "Receive";
      schemaUri?: string;
      schemaType?: "Xsd" | "Zip";
    };
    messagingOptions?: {
      billingTier?: "BlobTransport" | "Standard" | "Premium";
    };
    apiFlowOptions?: {
      remoteEndpoint?: string;
      cname?: string;
      apiMode?: "SDK" | "Endpoint";
      identityTranslation?: "UserIdentity" | "ServiceIdentity";
      senderClientId?: string;
      remoteCallingModeClientId?: string;
      audienceOverride?: string;
    };
    customerManagedKeyVaultUri?: string;
    streamId?: string;
    streamProtocol?: "UDP" | "SRT" | "RTP";
    streamLatency?: number;
    passphrase?: string;
    sourceAddresses?: { sourceAddresses?: string[] };
    destinationEndpoints?: string[];
    destinationEndpointPorts?: number[];
    eventHubId?: string;
    consumerGroup?: string;
    tags?: Record<string, string>;
    location: string;
    id?: string;
    name?: string;
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
export const ListPendingFlowsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        subscriptionId: Schema.optional(Schema.String),
        connectionId: Schema.optional(Schema.String),
        connection: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            id: Schema.String,
            location: Schema.optional(Schema.String),
            subscriptionName: Schema.optional(Schema.String),
          }),
        ),
        flowId: Schema.optional(Schema.String),
        keyVaultUri: Schema.optional(Schema.String),
        linkStatus: Schema.optional(Schema.Literals(["Linked", "Unlinked"])),
        linkedFlowId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        forceDisabledStatus: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "ConnectionForceDisabled",
              "FlowTypeForceDisabled",
            ]),
          ),
        ),
        storageAccountName: Schema.optional(Schema.String),
        storageAccountId: Schema.optional(Schema.String),
        storageContainerName: Schema.optional(Schema.String),
        storageTableName: Schema.optional(Schema.String),
        serviceBusQueueId: Schema.optional(Schema.String),
        flowType: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Complex",
            "DevSecOps",
            "Messaging",
            "Mission",
            "MicrosoftInternal",
            "BasicFiles",
            "Data",
            "Standard",
            "StreamingVideo",
            "Opaque",
            "MissionOpaqueXML",
            "DiskImages",
            "API",
          ]),
        ),
        dataType: Schema.optional(Schema.Literals(["Blob", "Table"])),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Accepted"]),
        ),
        policies: Schema.optional(Schema.Array(Schema.String)),
        schema: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            connectionId: Schema.optional(Schema.String),
            status: Schema.optional(Schema.Literals(["New", "Approved"])),
            name: Schema.optional(Schema.String),
            content: Schema.optional(Schema.String),
            direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
            schemaUri: Schema.optional(Schema.String),
            schemaType: Schema.optional(Schema.Literals(["Xsd", "Zip"])),
          }),
        ),
        messagingOptions: Schema.optional(
          Schema.Struct({
            billingTier: Schema.optional(
              Schema.Literals(["BlobTransport", "Standard", "Premium"]),
            ),
          }),
        ),
        apiFlowOptions: Schema.optional(
          Schema.Struct({
            remoteEndpoint: Schema.optional(Schema.String),
            cname: Schema.optional(Schema.String),
            apiMode: Schema.optional(Schema.Literals(["SDK", "Endpoint"])),
            identityTranslation: Schema.optional(
              Schema.Literals(["UserIdentity", "ServiceIdentity"]),
            ),
            senderClientId: Schema.optional(Schema.String),
            remoteCallingModeClientId: Schema.optional(Schema.String),
            audienceOverride: Schema.optional(Schema.String),
          }),
        ),
        customerManagedKeyVaultUri: Schema.optional(Schema.String),
        streamId: Schema.optional(Schema.String),
        streamProtocol: Schema.optional(Schema.Literals(["UDP", "SRT", "RTP"])),
        streamLatency: Schema.optional(Schema.Number),
        passphrase: Schema.optional(Schema.String),
        sourceAddresses: Schema.optional(
          Schema.Struct({
            sourceAddresses: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        destinationEndpoints: Schema.optional(Schema.Array(Schema.String)),
        destinationEndpointPorts: Schema.optional(Schema.Array(Schema.Number)),
        eventHubId: Schema.optional(Schema.String),
        consumerGroup: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        location: Schema.String,
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
  }) as unknown as Schema.Codec<ListPendingFlowsListOutput>;

// The operation
/**
 * Lists all remote flows that have not yet been linked to local flows
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectionName - The name for the connection to perform the operation on.
 */
export const ListPendingFlowsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListPendingFlowsListInput,
  outputSchema: ListPendingFlowsListOutput,
}));
// Input Schema
export interface ListSchemasListInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineName: string;
  id?: string;
  connectionId?: string;
  status?: "New" | "Approved";
  name?: string;
  content?: string;
  direction?: "Send" | "Receive";
  schemaUri?: string;
  schemaType?: "Xsd" | "Zip";
}
export const ListSchemasListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  pipelineName: Schema.String.pipe(T.PathParam()),
  id: Schema.optional(Schema.String),
  connectionId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.Literals(["New", "Approved"])),
  name: Schema.optional(Schema.String),
  content: Schema.optional(Schema.String),
  direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
  schemaUri: Schema.optional(Schema.String),
  schemaType: Schema.optional(Schema.Literals(["Xsd", "Zip"])),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/pipelines/{pipelineName}/listSchemas",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<ListSchemasListInput>;

// Output Schema
export interface ListSchemasListOutput {
  value?: {
    id?: string;
    connectionId?: string;
    status?: "New" | "Approved";
    name?: string;
    content?: string;
    direction?: "Send" | "Receive";
    schemaUri?: string;
    schemaType?: "Xsd" | "Zip";
  }[];
}
export const ListSchemasListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        connectionId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.Literals(["New", "Approved"])),
        name: Schema.optional(Schema.String),
        content: Schema.optional(Schema.String),
        direction: Schema.optional(Schema.Literals(["Send", "Receive"])),
        schemaUri: Schema.optional(Schema.String),
        schemaType: Schema.optional(Schema.Literals(["Xsd", "Zip"])),
      }),
    ),
  ),
}) as unknown as Schema.Codec<ListSchemasListOutput>;

// The operation
/**
 * Lists the schemas associated with a specific connection in the Pipeline. This operation has reached end of life support starting version 2025-05-30-preview. For schema support please create and use a FlowProfile resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineName - The name of the pipeline on which to operate.
 */
export const ListSchemasList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListSchemasListInput,
  outputSchema: ListSchemasListOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AzureDataTransfer/operations",
    apiVersion: "2025-05-21",
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
export interface PipelinesApproveConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineName: string;
  id: string;
  statusReason?: string;
}
export const PipelinesApproveConnectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineName: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    statusReason: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/pipelines/{pipelineName}/approveConnection",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<PipelinesApproveConnectionInput>;

// Output Schema
export interface PipelinesApproveConnectionOutput {
  id?: string;
  name?: string;
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
export const PipelinesApproveConnectionOutput =
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
  }) as unknown as Schema.Codec<PipelinesApproveConnectionOutput>;

// The operation
/**
 * Approves a pending connection request associated with the specified Pipeline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineName - The name of the pipeline on which to operate.
 */
export const PipelinesApproveConnection = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelinesApproveConnectionInput,
  outputSchema: PipelinesApproveConnectionOutput,
}));
// Input Schema
export interface PipelinesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineName: string;
  properties?: {
    remoteCloud: string;
    displayName?: string;
    connections?: {
      id: string;
      name?: string;
      type?: string;
      location?: string;
      etag?: string;
      systemData?: {
        createdBy?: string;
        createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        createdAt?: string;
        lastModifiedBy?: string;
        lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        lastModifiedAt?: string;
      };
      properties?: {
        internalMetadata?: {
          operationStatus?: {
            status?: "Failed" | "Succeeded";
            id?: string;
            message?: string;
          };
          statusSetBy?: string;
        };
      };
    }[];
    subscribers?: { email?: string; notifications?: number }[];
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Accepted";
    policies?: string[];
    flowTypes?: (
      | "Unknown"
      | "Complex"
      | "DevSecOps"
      | "Messaging"
      | "Mission"
      | "MicrosoftInternal"
      | "BasicFiles"
      | "Data"
      | "Standard"
      | "StreamingVideo"
      | "Opaque"
      | "MissionOpaqueXML"
      | "DiskImages"
      | "API"
    )[];
    disabledFlowTypes?: (
      | "Unknown"
      | "Complex"
      | "DevSecOps"
      | "Messaging"
      | "Mission"
      | "MicrosoftInternal"
      | "BasicFiles"
      | "Data"
      | "Standard"
      | "StreamingVideo"
      | "Opaque"
      | "MissionOpaqueXML"
      | "DiskImages"
      | "API"
    )[];
    quarantineDownloadStorageAccount?: string;
    quarantineDownloadStorageContainer?: string;
    status?: "Enabled" | "Disabled";
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
export const PipelinesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        remoteCloud: Schema.String,
        displayName: Schema.optional(Schema.String),
        connections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              location: Schema.optional(Schema.String),
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
              properties: Schema.optional(
                Schema.Struct({
                  internalMetadata: Schema.optional(
                    Schema.Struct({
                      operationStatus: Schema.optional(
                        Schema.Struct({
                          status: Schema.optional(
                            Schema.Literals(["Failed", "Succeeded"]),
                          ),
                          id: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                        }),
                      ),
                      statusSetBy: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        subscribers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              email: Schema.optional(Schema.String),
              notifications: Schema.optional(Schema.Number),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Accepted"]),
        ),
        policies: Schema.optional(Schema.Array(Schema.String)),
        flowTypes: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "Unknown",
              "Complex",
              "DevSecOps",
              "Messaging",
              "Mission",
              "MicrosoftInternal",
              "BasicFiles",
              "Data",
              "Standard",
              "StreamingVideo",
              "Opaque",
              "MissionOpaqueXML",
              "DiskImages",
              "API",
            ]),
          ),
        ),
        disabledFlowTypes: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "Unknown",
              "Complex",
              "DevSecOps",
              "Messaging",
              "Mission",
              "MicrosoftInternal",
              "BasicFiles",
              "Data",
              "Standard",
              "StreamingVideo",
              "Opaque",
              "MissionOpaqueXML",
              "DiskImages",
              "API",
            ]),
          ),
        ),
        quarantineDownloadStorageAccount: Schema.optional(Schema.String),
        quarantineDownloadStorageContainer: Schema.optional(Schema.String),
        status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/pipelines/{pipelineName}",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<PipelinesCreateOrUpdateInput>;

// Output Schema
export interface PipelinesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const PipelinesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PipelinesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new Pipeline resource or updates an existing one. This operation is asynchronous and returns the resulting Pipeline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineName - The name of the pipeline on which to operate.
 */
export const PipelinesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelinesCreateOrUpdateInput,
  outputSchema: PipelinesCreateOrUpdateOutput,
}));
// Input Schema
export interface PipelinesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineName: string;
}
export const PipelinesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  pipelineName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/pipelines/{pipelineName}",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<PipelinesDeleteInput>;

// Output Schema
export type PipelinesDeleteOutput = void;
export const PipelinesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PipelinesDeleteOutput>;

// The operation
/**
 * Deletes the specified Pipeline resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineName - The name of the pipeline on which to operate.
 */
export const PipelinesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelinesDeleteInput,
  outputSchema: PipelinesDeleteOutput,
}));
// Input Schema
export interface PipelinesExecuteActionInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineName: string;
  actionType: "AllowUpdates" | "ForceDisable";
  targetType: "Pipeline" | "Connection" | "FlowType";
  targets: string[];
  justification?: string;
}
export const PipelinesExecuteActionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineName: Schema.String.pipe(T.PathParam()),
    actionType: Schema.Literals(["AllowUpdates", "ForceDisable"]),
    targetType: Schema.Literals(["Pipeline", "Connection", "FlowType"]),
    targets: Schema.Array(Schema.String),
    justification: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/pipelines/{pipelineName}/executeAction",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<PipelinesExecuteActionInput>;

// Output Schema
export interface PipelinesExecuteActionOutput {
  id?: string;
  name?: string;
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
export const PipelinesExecuteActionOutput =
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
  }) as unknown as Schema.Codec<PipelinesExecuteActionOutput>;

// The operation
/**
 * Executes a privileged or administrative action on the specified Pipeline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineName - The name of the pipeline on which to operate.
 */
export const PipelinesExecuteAction = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelinesExecuteActionInput,
  outputSchema: PipelinesExecuteActionOutput,
}));
// Input Schema
export interface PipelinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineName: string;
}
export const PipelinesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  pipelineName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/pipelines/{pipelineName}",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<PipelinesGetInput>;

// Output Schema
export interface PipelinesGetOutput {
  id?: string;
  name?: string;
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
export const PipelinesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PipelinesGetOutput>;

// The operation
/**
 * Retrieves the specified Pipeline resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineName - The name of the pipeline on which to operate.
 */
export const PipelinesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelinesGetInput,
  outputSchema: PipelinesGetOutput,
}));
// Input Schema
export interface PipelinesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PipelinesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/pipelines",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<PipelinesListByResourceGroupInput>;

// Output Schema
export interface PipelinesListByResourceGroupOutput {
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
export const PipelinesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<PipelinesListByResourceGroupOutput>;

// The operation
/**
 * Lists all Pipeline resources within the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PipelinesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PipelinesListByResourceGroupInput,
    outputSchema: PipelinesListByResourceGroupOutput,
  }));
// Input Schema
export interface PipelinesListBySubscriptionInput {
  subscriptionId: string;
}
export const PipelinesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureDataTransfer/pipelines",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<PipelinesListBySubscriptionInput>;

// Output Schema
export interface PipelinesListBySubscriptionOutput {
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
export const PipelinesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<PipelinesListBySubscriptionOutput>;

// The operation
/**
 * Lists all Pipeline resources within the current subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PipelinesListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelinesListBySubscriptionInput,
  outputSchema: PipelinesListBySubscriptionOutput,
}));
// Input Schema
export interface PipelinesRejectConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineName: string;
  id: string;
  statusReason?: string;
}
export const PipelinesRejectConnectionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pipelineName: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    statusReason: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/pipelines/{pipelineName}/rejectConnection",
      apiVersion: "2025-05-21",
    }),
  ) as unknown as Schema.Codec<PipelinesRejectConnectionInput>;

// Output Schema
export interface PipelinesRejectConnectionOutput {
  id?: string;
  name?: string;
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
export const PipelinesRejectConnectionOutput =
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
  }) as unknown as Schema.Codec<PipelinesRejectConnectionOutput>;

// The operation
/**
 * Rejects a pending connection request associated with the specified Pipeline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineName - The name of the pipeline on which to operate.
 */
export const PipelinesRejectConnection = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelinesRejectConnectionInput,
  outputSchema: PipelinesRejectConnectionOutput,
}));
// Input Schema
export interface PipelinesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  pipelineName: string;
  properties?: {
    flowTypes?: (
      | "Unknown"
      | "Complex"
      | "DevSecOps"
      | "Messaging"
      | "Mission"
      | "MicrosoftInternal"
      | "BasicFiles"
      | "Data"
      | "Standard"
      | "StreamingVideo"
      | "Opaque"
      | "MissionOpaqueXML"
      | "DiskImages"
      | "API"
    )[];
  };
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
}
export const PipelinesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  pipelineName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      flowTypes: Schema.optional(
        Schema.Array(
          Schema.Literals([
            "Unknown",
            "Complex",
            "DevSecOps",
            "Messaging",
            "Mission",
            "MicrosoftInternal",
            "BasicFiles",
            "Data",
            "Standard",
            "StreamingVideo",
            "Opaque",
            "MissionOpaqueXML",
            "DiskImages",
            "API",
          ]),
        ),
      ),
    }),
  ),
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureDataTransfer/pipelines/{pipelineName}",
    apiVersion: "2025-05-21",
  }),
) as unknown as Schema.Codec<PipelinesUpdateInput>;

// Output Schema
export interface PipelinesUpdateOutput {
  id?: string;
  name?: string;
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
export const PipelinesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PipelinesUpdateOutput>;

// The operation
/**
 * Applies partial updates to an existing Pipeline resource. This operation supports patch semantics and returns the updated Pipeline.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pipelineName - The name of the pipeline on which to operate.
 */
export const PipelinesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PipelinesUpdateInput,
  outputSchema: PipelinesUpdateOutput,
}));
