/**
 * Azure Recoveryservicesdatareplication API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CheckNameAvailabilityPostInput {
  subscriptionId: string;
  location: string;
  name?: string;
  type?: string;
}
export const CheckNameAvailabilityPostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataReplication/locations/{location}/checkNameAvailability",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<CheckNameAvailabilityPostInput>;

// Output Schema
export interface CheckNameAvailabilityPostOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const CheckNameAvailabilityPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CheckNameAvailabilityPostOutput>;

// The operation
/**
 * Performs the resource name availability check.
 *
 * Checks the resource name availability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const CheckNameAvailabilityPost = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CheckNameAvailabilityPostInput,
    outputSchema: CheckNameAvailabilityPostOutput,
  }),
);
// Input Schema
export interface DeploymentPreflightPostInput {
  subscriptionId: string;
  resourceGroupName: string;
  deploymentId: string;
  resources?: {
    name?: string;
    type?: string;
    location?: string;
    apiVersion?: string;
    properties?: unknown;
  }[];
}
export const DeploymentPreflightPostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    deploymentId: Schema.String.pipe(T.PathParam()),
    resources: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          apiVersion: Schema.optional(Schema.String),
          properties: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/deployments/{deploymentId}/preflight",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<DeploymentPreflightPostInput>;

// Output Schema
export interface DeploymentPreflightPostOutput {
  resources?: {
    name?: string;
    type?: string;
    location?: string;
    apiVersion?: string;
    properties?: unknown;
  }[];
}
export const DeploymentPreflightPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          apiVersion: Schema.optional(Schema.String),
          properties: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DeploymentPreflightPostOutput>;

// The operation
/**
 * Performs resource deployment validation.
 *
 * Performs resource deployment preflight validation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param deploymentId - Deployment Id.
 */
export const DeploymentPreflightPost = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentPreflightPostInput,
    outputSchema: DeploymentPreflightPostOutput,
  }),
);
// Input Schema
export interface EmailConfigurationCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  emailConfigurationName: string;
  properties?: {
    sendToOwners: boolean;
    customEmailAddresses?: string[];
    locale?: string;
    provisioningState?:
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
  };
}
export const EmailConfigurationCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    emailConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sendToOwners: Schema.Boolean,
        customEmailAddresses: Schema.optional(Schema.Array(Schema.String)),
        locale: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Canceled",
            "Creating",
            "Deleting",
            "Deleted",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/alertSettings/{emailConfigurationName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<EmailConfigurationCreateInput>;

// Output Schema
export interface EmailConfigurationCreateOutput {
  id?: string;
  name?: string;
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
export const EmailConfigurationCreateOutput =
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
  }) as unknown as Schema.Codec<EmailConfigurationCreateOutput>;

// The operation
/**
 * Creates an alert configuration setting for the given vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param emailConfigurationName - The email configuration name.
 */
export const EmailConfigurationCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EmailConfigurationCreateInput,
    outputSchema: EmailConfigurationCreateOutput,
  }),
);
// Input Schema
export interface EmailConfigurationGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  emailConfigurationName: string;
}
export const EmailConfigurationGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    emailConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/alertSettings/{emailConfigurationName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<EmailConfigurationGetInput>;

// Output Schema
export interface EmailConfigurationGetOutput {
  id?: string;
  name?: string;
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
export const EmailConfigurationGetOutput =
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
  }) as unknown as Schema.Codec<EmailConfigurationGetOutput>;

// The operation
/**
 * Gets the details of the alert configuration setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param emailConfigurationName - The email configuration name.
 */
export const EmailConfigurationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EmailConfigurationGetInput,
    outputSchema: EmailConfigurationGetOutput,
  }),
);
// Input Schema
export interface EmailConfigurationListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const EmailConfigurationListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/alertSettings",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<EmailConfigurationListInput>;

// Output Schema
export interface EmailConfigurationListOutput {
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
export const EmailConfigurationListOutput =
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
  }) as unknown as Schema.Codec<EmailConfigurationListOutput>;

// The operation
/**
 * Gets the list of alert configuration settings for the given vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 */
export const EmailConfigurationList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EmailConfigurationListInput,
    outputSchema: EmailConfigurationListOutput,
  }),
);
// Input Schema
export interface EventGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  eventName: string;
}
export const EventGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  eventName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/events/{eventName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<EventGetInput>;

// Output Schema
export interface EventGetOutput {
  id?: string;
  name?: string;
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
export const EventGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EventGetOutput>;

// The operation
/**
 * Gets the details of the event.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param eventName - The event name.
 */
export const EventGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventGetInput,
  outputSchema: EventGetOutput,
}));
// Input Schema
export interface EventListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  odataOptions?: string;
  continuationToken?: string;
  pageSize?: number;
}
export const EventListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  odataOptions: Schema.optional(Schema.String),
  continuationToken: Schema.optional(Schema.String),
  pageSize: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/events",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<EventListInput>;

// Output Schema
export interface EventListOutput {
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
export const EventListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EventListOutput>;

// The operation
/**
 * Gets the list of events in the given vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param odataOptions - OData options.
 * @param continuationToken - Continuation token.
 * @param pageSize - Page size.
 * @param vaultName - The vault name.
 */
export const EventList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventListInput,
  outputSchema: EventListOutput,
}));
// Input Schema
export interface FabricAgentCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  fabricName: string;
  fabricAgentName: string;
  properties?: {
    correlationId?: string;
    machineId: string;
    machineName: string;
    authenticationIdentity: {
      tenantId: string;
      applicationId: string;
      objectId: string;
      audience: string;
      aadAuthority: string;
    };
    resourceAccessIdentity: {
      tenantId: string;
      applicationId: string;
      objectId: string;
      audience: string;
      aadAuthority: string;
    };
    isResponsive?: boolean;
    lastHeartbeat?: string;
    versionNumber?: string;
    provisioningState?:
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    healthErrors?: {
      affectedResourceType?: string;
      affectedResourceCorrelationIds?: string[];
      childErrors?: {
        code?: string;
        healthCategory?: string;
        category?: string;
        severity?: string;
        source?: string;
        creationTime?: string;
        isCustomerResolvable?: boolean;
        summary?: string;
        message?: string;
        causes?: string;
        recommendation?: string;
      }[];
      code?: string;
      healthCategory?: string;
      category?: string;
      severity?: string;
      source?: string;
      creationTime?: string;
      isCustomerResolvable?: boolean;
      summary?: string;
      message?: string;
      causes?: string;
      recommendation?: string;
    }[];
    customProperties: { instanceType: string };
  };
}
export const FabricAgentCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    fabricAgentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        correlationId: Schema.optional(Schema.String),
        machineId: Schema.String,
        machineName: Schema.String,
        authenticationIdentity: Schema.Struct({
          tenantId: Schema.String,
          applicationId: Schema.String,
          objectId: Schema.String,
          audience: Schema.String,
          aadAuthority: Schema.String,
        }),
        resourceAccessIdentity: Schema.Struct({
          tenantId: Schema.String,
          applicationId: Schema.String,
          objectId: Schema.String,
          audience: Schema.String,
          aadAuthority: Schema.String,
        }),
        isResponsive: Schema.optional(Schema.Boolean),
        lastHeartbeat: Schema.optional(Schema.String),
        versionNumber: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Canceled",
            "Creating",
            "Deleting",
            "Deleted",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        healthErrors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              affectedResourceType: Schema.optional(Schema.String),
              affectedResourceCorrelationIds: Schema.optional(
                Schema.Array(Schema.String),
              ),
              childErrors: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    healthCategory: Schema.optional(Schema.String),
                    category: Schema.optional(Schema.String),
                    severity: Schema.optional(Schema.String),
                    source: Schema.optional(Schema.String),
                    creationTime: Schema.optional(Schema.String),
                    isCustomerResolvable: Schema.optional(Schema.Boolean),
                    summary: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    causes: Schema.optional(Schema.String),
                    recommendation: Schema.optional(Schema.String),
                  }),
                ),
              ),
              code: Schema.optional(Schema.String),
              healthCategory: Schema.optional(Schema.String),
              category: Schema.optional(Schema.String),
              severity: Schema.optional(Schema.String),
              source: Schema.optional(Schema.String),
              creationTime: Schema.optional(Schema.String),
              isCustomerResolvable: Schema.optional(Schema.Boolean),
              summary: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              causes: Schema.optional(Schema.String),
              recommendation: Schema.optional(Schema.String),
            }),
          ),
        ),
        customProperties: Schema.Struct({
          instanceType: Schema.String,
        }),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}/fabricAgents/{fabricAgentName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<FabricAgentCreateInput>;

// Output Schema
export interface FabricAgentCreateOutput {
  id?: string;
  name?: string;
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
export const FabricAgentCreateOutput =
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
  }) as unknown as Schema.Codec<FabricAgentCreateOutput>;

// The operation
/**
 * Creates the fabric agent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fabricName - The fabric name.
 * @param fabricAgentName - The fabric agent name.
 */
export const FabricAgentCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FabricAgentCreateInput,
  outputSchema: FabricAgentCreateOutput,
}));
// Input Schema
export interface FabricAgentDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  fabricName: string;
  fabricAgentName: string;
}
export const FabricAgentDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fabricName: Schema.String.pipe(T.PathParam()),
    fabricAgentName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}/fabricAgents/{fabricAgentName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<FabricAgentDeleteInput>;

// Output Schema
export type FabricAgentDeleteOutput = void;
export const FabricAgentDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FabricAgentDeleteOutput>;

// The operation
/**
 * Deletes fabric agent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fabricName - The fabric name.
 * @param fabricAgentName - The fabric agent name.
 */
export const FabricAgentDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FabricAgentDeleteInput,
  outputSchema: FabricAgentDeleteOutput,
}));
// Input Schema
export interface FabricAgentGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  fabricName: string;
  fabricAgentName: string;
}
export const FabricAgentGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fabricName: Schema.String.pipe(T.PathParam()),
  fabricAgentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}/fabricAgents/{fabricAgentName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<FabricAgentGetInput>;

// Output Schema
export interface FabricAgentGetOutput {
  id?: string;
  name?: string;
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
export const FabricAgentGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FabricAgentGetOutput>;

// The operation
/**
 * Gets the details of the fabric agent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fabricName - The fabric name.
 * @param fabricAgentName - The fabric agent name.
 */
export const FabricAgentGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FabricAgentGetInput,
  outputSchema: FabricAgentGetOutput,
}));
// Input Schema
export interface FabricAgentListInput {
  subscriptionId: string;
  resourceGroupName: string;
  fabricName: string;
}
export const FabricAgentListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fabricName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}/fabricAgents",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<FabricAgentListInput>;

// Output Schema
export interface FabricAgentListOutput {
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
export const FabricAgentListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FabricAgentListOutput>;

// The operation
/**
 * Gets the list of fabric agents in the given fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fabricName - The fabric name.
 */
export const FabricAgentList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FabricAgentListInput,
  outputSchema: FabricAgentListOutput,
}));
// Input Schema
export interface FabricCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  fabricName: string;
  properties?: {
    provisioningState?:
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    serviceEndpoint?: string;
    serviceResourceId?: string;
    health?: "Normal" | "Warning" | "Critical";
    healthErrors?: {
      affectedResourceType?: string;
      affectedResourceCorrelationIds?: string[];
      childErrors?: {
        code?: string;
        healthCategory?: string;
        category?: string;
        severity?: string;
        source?: string;
        creationTime?: string;
        isCustomerResolvable?: boolean;
        summary?: string;
        message?: string;
        causes?: string;
        recommendation?: string;
      }[];
      code?: string;
      healthCategory?: string;
      category?: string;
      severity?: string;
      source?: string;
      creationTime?: string;
      isCustomerResolvable?: boolean;
      summary?: string;
      message?: string;
      causes?: string;
      recommendation?: string;
    }[];
    customProperties: { instanceType: string };
  };
  tags?: Record<string, string>;
  location: string;
}
export const FabricCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fabricName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Canceled",
          "Creating",
          "Deleting",
          "Deleted",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      serviceEndpoint: Schema.optional(Schema.String),
      serviceResourceId: Schema.optional(Schema.String),
      health: Schema.optional(
        Schema.Literals(["Normal", "Warning", "Critical"]),
      ),
      healthErrors: Schema.optional(
        Schema.Array(
          Schema.Struct({
            affectedResourceType: Schema.optional(Schema.String),
            affectedResourceCorrelationIds: Schema.optional(
              Schema.Array(Schema.String),
            ),
            childErrors: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  healthCategory: Schema.optional(Schema.String),
                  category: Schema.optional(Schema.String),
                  severity: Schema.optional(Schema.String),
                  source: Schema.optional(Schema.String),
                  creationTime: Schema.optional(Schema.String),
                  isCustomerResolvable: Schema.optional(Schema.Boolean),
                  summary: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  causes: Schema.optional(Schema.String),
                  recommendation: Schema.optional(Schema.String),
                }),
              ),
            ),
            code: Schema.optional(Schema.String),
            healthCategory: Schema.optional(Schema.String),
            category: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            source: Schema.optional(Schema.String),
            creationTime: Schema.optional(Schema.String),
            isCustomerResolvable: Schema.optional(Schema.Boolean),
            summary: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            causes: Schema.optional(Schema.String),
            recommendation: Schema.optional(Schema.String),
          }),
        ),
      ),
      customProperties: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<FabricCreateInput>;

// Output Schema
export interface FabricCreateOutput {
  id?: string;
  name?: string;
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
export const FabricCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FabricCreateOutput>;

// The operation
/**
 * Creates the fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fabricName - The fabric name.
 */
export const FabricCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FabricCreateInput,
  outputSchema: FabricCreateOutput,
}));
// Input Schema
export interface FabricDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  fabricName: string;
}
export const FabricDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fabricName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<FabricDeleteInput>;

// Output Schema
export type FabricDeleteOutput = void;
export const FabricDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FabricDeleteOutput>;

// The operation
/**
 * Removes the fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fabricName - The fabric name.
 */
export const FabricDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FabricDeleteInput,
  outputSchema: FabricDeleteOutput,
}));
// Input Schema
export interface FabricGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  fabricName: string;
}
export const FabricGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fabricName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<FabricGetInput>;

// Output Schema
export interface FabricGetOutput {
  id?: string;
  name?: string;
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
export const FabricGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FabricGetOutput>;

// The operation
/**
 * Gets the details of the fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fabricName - The fabric name.
 */
export const FabricGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FabricGetInput,
  outputSchema: FabricGetOutput,
}));
// Input Schema
export interface FabricListInput {
  subscriptionId: string;
  resourceGroupName: string;
  continuationToken?: string;
}
export const FabricListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  continuationToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<FabricListInput>;

// Output Schema
export interface FabricListOutput {
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
export const FabricListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FabricListOutput>;

// The operation
/**
 * Gets the list of fabrics in the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param continuationToken - Continuation token from the previous call.
 */
export const FabricList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FabricListInput,
  outputSchema: FabricListOutput,
}));
// Input Schema
export interface FabricListBySubscriptionInput {
  subscriptionId: string;
}
export const FabricListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataReplication/replicationFabrics",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<FabricListBySubscriptionInput>;

// Output Schema
export interface FabricListBySubscriptionOutput {
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
export const FabricListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<FabricListBySubscriptionOutput>;

// The operation
/**
 * Gets the list of fabrics in the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const FabricListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FabricListBySubscriptionInput,
    outputSchema: FabricListBySubscriptionOutput,
  }),
);
// Input Schema
export interface FabricUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  fabricName: string;
  tags?: Record<string, string>;
  properties?: {
    provisioningState?:
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    serviceEndpoint?: string;
    serviceResourceId?: string;
    health?: "Normal" | "Warning" | "Critical";
    healthErrors?: {
      affectedResourceType?: string;
      affectedResourceCorrelationIds?: string[];
      childErrors?: {
        code?: string;
        healthCategory?: string;
        category?: string;
        severity?: string;
        source?: string;
        creationTime?: string;
        isCustomerResolvable?: boolean;
        summary?: string;
        message?: string;
        causes?: string;
        recommendation?: string;
      }[];
      code?: string;
      healthCategory?: string;
      category?: string;
      severity?: string;
      source?: string;
      creationTime?: string;
      isCustomerResolvable?: boolean;
      summary?: string;
      message?: string;
      causes?: string;
      recommendation?: string;
    }[];
    customProperties: { instanceType: string };
  };
  id?: string;
  name?: string;
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
export const FabricUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fabricName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Canceled",
          "Creating",
          "Deleting",
          "Deleted",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      serviceEndpoint: Schema.optional(Schema.String),
      serviceResourceId: Schema.optional(Schema.String),
      health: Schema.optional(
        Schema.Literals(["Normal", "Warning", "Critical"]),
      ),
      healthErrors: Schema.optional(
        Schema.Array(
          Schema.Struct({
            affectedResourceType: Schema.optional(Schema.String),
            affectedResourceCorrelationIds: Schema.optional(
              Schema.Array(Schema.String),
            ),
            childErrors: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  healthCategory: Schema.optional(Schema.String),
                  category: Schema.optional(Schema.String),
                  severity: Schema.optional(Schema.String),
                  source: Schema.optional(Schema.String),
                  creationTime: Schema.optional(Schema.String),
                  isCustomerResolvable: Schema.optional(Schema.Boolean),
                  summary: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  causes: Schema.optional(Schema.String),
                  recommendation: Schema.optional(Schema.String),
                }),
              ),
            ),
            code: Schema.optional(Schema.String),
            healthCategory: Schema.optional(Schema.String),
            category: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            source: Schema.optional(Schema.String),
            creationTime: Schema.optional(Schema.String),
            isCustomerResolvable: Schema.optional(Schema.Boolean),
            summary: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            causes: Schema.optional(Schema.String),
            recommendation: Schema.optional(Schema.String),
          }),
        ),
      ),
      customProperties: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  ),
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationFabrics/{fabricName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<FabricUpdateInput>;

// Output Schema
export interface FabricUpdateOutput {
  id?: string;
  name?: string;
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
export const FabricUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FabricUpdateOutput>;

// The operation
/**
 * Performs update on the fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fabricName - The fabric name.
 */
export const FabricUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FabricUpdateInput,
  outputSchema: FabricUpdateOutput,
}));
// Input Schema
export interface JobGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  jobName: string;
}
export const JobGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/jobs/{jobName}",
    apiVersion: "2026-05-01",
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
 * Gets the details of the job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param jobName - The job name.
 */
export const JobGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobGetInput,
  outputSchema: JobGetOutput,
}));
// Input Schema
export interface JobListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  odataOptions?: string;
  continuationToken?: string;
  pageSize?: number;
}
export const JobListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  odataOptions: Schema.optional(Schema.String),
  continuationToken: Schema.optional(Schema.String),
  pageSize: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/jobs",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<JobListInput>;

// Output Schema
export interface JobListOutput {
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
export const JobListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobListOutput>;

// The operation
/**
 * Gets the list of jobs in the given vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param odataOptions - OData options.
 * @param continuationToken - Continuation token.
 * @param pageSize - Page size.
 * @param vaultName - The vault name.
 */
export const JobList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobListInput,
  outputSchema: JobListOutput,
}));
// Input Schema
export interface LocationBasedOperationResultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  operationId: string;
}
export const LocationBasedOperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/locations/{location}/operationResults/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<LocationBasedOperationResultsGetInput>;

// Output Schema
export interface LocationBasedOperationResultsGetOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
}
export const LocationBasedOperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LocationBasedOperationResultsGetOutput>;

// The operation
/**
 * Gets the location based operation result status.
 *
 * Gets the location based operation result.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of the Azure region.
 * @param operationId - The ID of an ongoing async operation.
 */
export const LocationBasedOperationResultsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationBasedOperationResultsGetInput,
    outputSchema: LocationBasedOperationResultsGetOutput,
  }));
// Input Schema
export interface OperationResultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  operationId: string;
}
export const OperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/operationResults/{operationId}/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/{operationId}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<OperationResultsGetInput>;

// Output Schema
export interface OperationResultsGetOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
}
export const OperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OperationResultsGetOutput>;

// The operation
/**
 * Gets the operation result status.
 *
 * Gets the operations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param operationId - The ID of an ongoing async operation.
 */
export const OperationResultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationResultsGetInput,
  outputSchema: OperationResultsGetOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataReplication/operations",
    apiVersion: "2026-05-01",
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
}) as unknown as Schema.Codec<OperationsListOutput>;

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
export interface PolicyCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  policyName: string;
  properties?: {
    provisioningState?:
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    customProperties: { instanceType: string };
  };
}
export const PolicyCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  policyName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Canceled",
          "Creating",
          "Deleting",
          "Deleted",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      customProperties: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/replicationPolicies/{policyName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<PolicyCreateInput>;

// Output Schema
export interface PolicyCreateOutput {
  id?: string;
  name?: string;
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
export const PolicyCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PolicyCreateOutput>;

// The operation
/**
 * Creates the policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param policyName - The policy name.
 */
export const PolicyCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PolicyCreateInput,
  outputSchema: PolicyCreateOutput,
}));
// Input Schema
export interface PolicyDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  policyName: string;
}
export const PolicyDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  policyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/replicationPolicies/{policyName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<PolicyDeleteInput>;

// Output Schema
export type PolicyDeleteOutput = void;
export const PolicyDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PolicyDeleteOutput>;

// The operation
/**
 * Removes the policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param policyName - The policy name.
 */
export const PolicyDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PolicyDeleteInput,
  outputSchema: PolicyDeleteOutput,
}));
// Input Schema
export interface PolicyGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  policyName: string;
}
export const PolicyGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  policyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/replicationPolicies/{policyName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<PolicyGetInput>;

// Output Schema
export interface PolicyGetOutput {
  id?: string;
  name?: string;
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
export const PolicyGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PolicyGetOutput>;

// The operation
/**
 * Gets the details of the policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param policyName - The policy name.
 */
export const PolicyGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PolicyGetInput,
  outputSchema: PolicyGetOutput,
}));
// Input Schema
export interface PolicyListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const PolicyListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/replicationPolicies",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<PolicyListInput>;

// Output Schema
export interface PolicyListOutput {
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
export const PolicyListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PolicyListOutput>;

// The operation
/**
 * Gets the list of policies in the given vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 */
export const PolicyList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PolicyListInput,
  outputSchema: PolicyListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param privateEndpointConnectionName - The private endpoint connection name.
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
  vaultName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-05-01",
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
 * Gets the private endpoint connection details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param privateEndpointConnectionName - The private endpoint connection name.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/privateEndpointConnections",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
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
export const PrivateEndpointConnectionsListOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * Gets the all private endpoint connections configured on the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateEndpointConnectionName: string;
  properties?: {
    provisioningState?:
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
  };
}
export const PrivateEndpointConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Canceled",
            "Creating",
            "Deleting",
            "Deleted",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Approved",
                "Disconnected",
                "Pending",
                "Rejected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsUpdateOutput {
  id?: string;
  name?: string;
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
export const PrivateEndpointConnectionsUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateOutput>;

// The operation
/**
 * Updated the private endpoint connection status (Approval/Rejected). This gets invoked by resource admin.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param privateEndpointConnectionName - The private endpoint connection name.
 */
export const PrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateInput,
    outputSchema: PrivateEndpointConnectionsUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  id?: string;
  name?: string;
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
export const PrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets the details of site recovery private link resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param privateLinkResourceName - The private link name.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export interface PrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/privateLinkResources",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkResourcesListOutput {
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
export const PrivateLinkResourcesListOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListOutput>;

// The operation
/**
 * Gets the list of private link resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesListInput,
    outputSchema: PrivateLinkResourcesListOutput,
  }),
);
// Input Schema
export interface ProtectedItemCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  protectedItemName: string;
  properties?: {
    policyName: string;
    replicationExtensionName: string;
    correlationId?: string;
    provisioningState?:
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    protectionState?:
      | "UnprotectedStatesBegin"
      | "EnablingProtection"
      | "EnablingFailed"
      | "DisablingProtection"
      | "MarkedForDeletion"
      | "DisablingFailed"
      | "UnprotectedStatesEnd"
      | "InitialReplicationStatesBegin"
      | "InitialReplicationInProgress"
      | "InitialReplicationCompletedOnPrimary"
      | "InitialReplicationCompletedOnRecovery"
      | "InitialReplicationFailed"
      | "InitialReplicationStatesEnd"
      | "ProtectedStatesBegin"
      | "Protected"
      | "ProtectedStatesEnd"
      | "PlannedFailoverTransitionStatesBegin"
      | "PlannedFailoverInitiated"
      | "PlannedFailoverCompleting"
      | "PlannedFailoverCompleted"
      | "PlannedFailoverFailed"
      | "PlannedFailoverCompletionFailed"
      | "PlannedFailoverTransitionStatesEnd"
      | "UnplannedFailoverTransitionStatesBegin"
      | "UnplannedFailoverInitiated"
      | "UnplannedFailoverCompleting"
      | "UnplannedFailoverCompleted"
      | "UnplannedFailoverFailed"
      | "UnplannedFailoverCompletionFailed"
      | "UnplannedFailoverTransitionStatesEnd"
      | "CommitFailoverStatesBegin"
      | "CommitFailoverInProgressOnPrimary"
      | "CommitFailoverInProgressOnRecovery"
      | "CommitFailoverCompleted"
      | "CommitFailoverFailedOnPrimary"
      | "CommitFailoverFailedOnRecovery"
      | "CommitFailoverStatesEnd"
      | "CancelFailoverStatesBegin"
      | "CancelFailoverInProgressOnPrimary"
      | "CancelFailoverInProgressOnRecovery"
      | "CancelFailoverFailedOnPrimary"
      | "CancelFailoverFailedOnRecovery"
      | "CancelFailoverStatesEnd"
      | "ChangeRecoveryPointStatesBegin"
      | "ChangeRecoveryPointInitiated"
      | "ChangeRecoveryPointCompleted"
      | "ChangeRecoveryPointFailed"
      | "ChangeRecoveryPointStatesEnd"
      | "ReprotectStatesBegin"
      | "ReprotectInitiated"
      | "ReprotectFailed"
      | "ReprotectStatesEnd";
    protectionStateDescription?: string;
    testFailoverState?:
      | "None"
      | "TestFailoverInitiated"
      | "TestFailoverCompleting"
      | "TestFailoverCompleted"
      | "TestFailoverFailed"
      | "TestFailoverCompletionFailed"
      | "TestFailoverCleanupInitiated"
      | "TestFailoverCleanupCompleting"
      | "MarkedForDeletion";
    testFailoverStateDescription?: string;
    resynchronizationState?:
      | "None"
      | "ResynchronizationInitiated"
      | "ResynchronizationCompleted"
      | "ResynchronizationFailed";
    fabricObjectId?: string;
    fabricObjectName?: string;
    sourceFabricProviderId?: string;
    targetFabricProviderId?: string;
    fabricId?: string;
    targetFabricId?: string;
    fabricAgentId?: string;
    targetFabricAgentId?: string;
    resyncRequired?: boolean;
    lastSuccessfulPlannedFailoverTime?: string;
    lastSuccessfulUnplannedFailoverTime?: string;
    lastSuccessfulTestFailoverTime?: string;
    currentJob?: {
      scenarioName?: string;
      id?: string;
      name?: string;
      displayName?: string;
      state?: string;
      startTime?: string;
      endTime?: string;
    };
    allowedJobs?: string[];
    lastFailedEnableProtectionJob?: {
      scenarioName?: string;
      id?: string;
      name?: string;
      displayName?: string;
      state?: string;
      startTime?: string;
      endTime?: string;
    };
    lastFailedPlannedFailoverJob?: {
      scenarioName?: string;
      id?: string;
      name?: string;
      displayName?: string;
      state?: string;
      startTime?: string;
      endTime?: string;
    };
    lastTestFailoverJob?: {
      scenarioName?: string;
      id?: string;
      name?: string;
      displayName?: string;
      state?: string;
      startTime?: string;
      endTime?: string;
    };
    replicationHealth?: "Normal" | "Warning" | "Critical";
    healthErrors?: {
      affectedResourceType?: string;
      affectedResourceCorrelationIds?: string[];
      childErrors?: {
        code?: string;
        healthCategory?: string;
        category?: string;
        severity?: string;
        source?: string;
        creationTime?: string;
        isCustomerResolvable?: boolean;
        summary?: string;
        message?: string;
        causes?: string;
        recommendation?: string;
      }[];
      code?: string;
      healthCategory?: string;
      category?: string;
      severity?: string;
      source?: string;
      creationTime?: string;
      isCustomerResolvable?: boolean;
      summary?: string;
      message?: string;
      causes?: string;
      recommendation?: string;
    }[];
    customProperties: { instanceType: string };
  };
}
export const ProtectedItemCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policyName: Schema.String,
        replicationExtensionName: Schema.String,
        correlationId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Canceled",
            "Creating",
            "Deleting",
            "Deleted",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        protectionState: Schema.optional(
          Schema.Literals([
            "UnprotectedStatesBegin",
            "EnablingProtection",
            "EnablingFailed",
            "DisablingProtection",
            "MarkedForDeletion",
            "DisablingFailed",
            "UnprotectedStatesEnd",
            "InitialReplicationStatesBegin",
            "InitialReplicationInProgress",
            "InitialReplicationCompletedOnPrimary",
            "InitialReplicationCompletedOnRecovery",
            "InitialReplicationFailed",
            "InitialReplicationStatesEnd",
            "ProtectedStatesBegin",
            "Protected",
            "ProtectedStatesEnd",
            "PlannedFailoverTransitionStatesBegin",
            "PlannedFailoverInitiated",
            "PlannedFailoverCompleting",
            "PlannedFailoverCompleted",
            "PlannedFailoverFailed",
            "PlannedFailoverCompletionFailed",
            "PlannedFailoverTransitionStatesEnd",
            "UnplannedFailoverTransitionStatesBegin",
            "UnplannedFailoverInitiated",
            "UnplannedFailoverCompleting",
            "UnplannedFailoverCompleted",
            "UnplannedFailoverFailed",
            "UnplannedFailoverCompletionFailed",
            "UnplannedFailoverTransitionStatesEnd",
            "CommitFailoverStatesBegin",
            "CommitFailoverInProgressOnPrimary",
            "CommitFailoverInProgressOnRecovery",
            "CommitFailoverCompleted",
            "CommitFailoverFailedOnPrimary",
            "CommitFailoverFailedOnRecovery",
            "CommitFailoverStatesEnd",
            "CancelFailoverStatesBegin",
            "CancelFailoverInProgressOnPrimary",
            "CancelFailoverInProgressOnRecovery",
            "CancelFailoverFailedOnPrimary",
            "CancelFailoverFailedOnRecovery",
            "CancelFailoverStatesEnd",
            "ChangeRecoveryPointStatesBegin",
            "ChangeRecoveryPointInitiated",
            "ChangeRecoveryPointCompleted",
            "ChangeRecoveryPointFailed",
            "ChangeRecoveryPointStatesEnd",
            "ReprotectStatesBegin",
            "ReprotectInitiated",
            "ReprotectFailed",
            "ReprotectStatesEnd",
          ]),
        ),
        protectionStateDescription: Schema.optional(Schema.String),
        testFailoverState: Schema.optional(
          Schema.Literals([
            "None",
            "TestFailoverInitiated",
            "TestFailoverCompleting",
            "TestFailoverCompleted",
            "TestFailoverFailed",
            "TestFailoverCompletionFailed",
            "TestFailoverCleanupInitiated",
            "TestFailoverCleanupCompleting",
            "MarkedForDeletion",
          ]),
        ),
        testFailoverStateDescription: Schema.optional(Schema.String),
        resynchronizationState: Schema.optional(
          Schema.Literals([
            "None",
            "ResynchronizationInitiated",
            "ResynchronizationCompleted",
            "ResynchronizationFailed",
          ]),
        ),
        fabricObjectId: Schema.optional(Schema.String),
        fabricObjectName: Schema.optional(Schema.String),
        sourceFabricProviderId: Schema.optional(Schema.String),
        targetFabricProviderId: Schema.optional(Schema.String),
        fabricId: Schema.optional(Schema.String),
        targetFabricId: Schema.optional(Schema.String),
        fabricAgentId: Schema.optional(Schema.String),
        targetFabricAgentId: Schema.optional(Schema.String),
        resyncRequired: Schema.optional(Schema.Boolean),
        lastSuccessfulPlannedFailoverTime: Schema.optional(Schema.String),
        lastSuccessfulUnplannedFailoverTime: Schema.optional(Schema.String),
        lastSuccessfulTestFailoverTime: Schema.optional(Schema.String),
        currentJob: Schema.optional(
          Schema.Struct({
            scenarioName: Schema.optional(Schema.String),
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
          }),
        ),
        allowedJobs: Schema.optional(Schema.Array(Schema.String)),
        lastFailedEnableProtectionJob: Schema.optional(
          Schema.Struct({
            scenarioName: Schema.optional(Schema.String),
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
          }),
        ),
        lastFailedPlannedFailoverJob: Schema.optional(
          Schema.Struct({
            scenarioName: Schema.optional(Schema.String),
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
          }),
        ),
        lastTestFailoverJob: Schema.optional(
          Schema.Struct({
            scenarioName: Schema.optional(Schema.String),
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
          }),
        ),
        replicationHealth: Schema.optional(
          Schema.Literals(["Normal", "Warning", "Critical"]),
        ),
        healthErrors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              affectedResourceType: Schema.optional(Schema.String),
              affectedResourceCorrelationIds: Schema.optional(
                Schema.Array(Schema.String),
              ),
              childErrors: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    healthCategory: Schema.optional(Schema.String),
                    category: Schema.optional(Schema.String),
                    severity: Schema.optional(Schema.String),
                    source: Schema.optional(Schema.String),
                    creationTime: Schema.optional(Schema.String),
                    isCustomerResolvable: Schema.optional(Schema.Boolean),
                    summary: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    causes: Schema.optional(Schema.String),
                    recommendation: Schema.optional(Schema.String),
                  }),
                ),
              ),
              code: Schema.optional(Schema.String),
              healthCategory: Schema.optional(Schema.String),
              category: Schema.optional(Schema.String),
              severity: Schema.optional(Schema.String),
              source: Schema.optional(Schema.String),
              creationTime: Schema.optional(Schema.String),
              isCustomerResolvable: Schema.optional(Schema.Boolean),
              summary: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              causes: Schema.optional(Schema.String),
              recommendation: Schema.optional(Schema.String),
            }),
          ),
        ),
        customProperties: Schema.Struct({
          instanceType: Schema.String,
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectedItemCreateInput>;

// Output Schema
export interface ProtectedItemCreateOutput {
  id?: string;
  name?: string;
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
export const ProtectedItemCreateOutput =
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
  }) as unknown as Schema.Codec<ProtectedItemCreateOutput>;

// The operation
/**
 * Creates the protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param protectedItemName - The protected item name.
 */
export const ProtectedItemCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProtectedItemCreateInput,
  outputSchema: ProtectedItemCreateOutput,
}));
// Input Schema
export interface ProtectedItemDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  protectedItemName: string;
  forceDelete?: boolean;
}
export const ProtectedItemDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    forceDelete: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectedItemDeleteInput>;

// Output Schema
export type ProtectedItemDeleteOutput = void;
export const ProtectedItemDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProtectedItemDeleteOutput>;

// The operation
/**
 * Removes the protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param forceDelete - A flag indicating whether to do force delete or not.
 * @param vaultName - The vault name.
 * @param protectedItemName - The protected item name.
 */
export const ProtectedItemDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProtectedItemDeleteInput,
  outputSchema: ProtectedItemDeleteOutput,
}));
// Input Schema
export interface ProtectedItemGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  protectedItemName: string;
}
export const ProtectedItemGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  protectedItemName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<ProtectedItemGetInput>;

// Output Schema
export interface ProtectedItemGetOutput {
  id?: string;
  name?: string;
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
export const ProtectedItemGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<ProtectedItemGetOutput>;

// The operation
/**
 * Gets the details of the protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param protectedItemName - The protected item name.
 */
export const ProtectedItemGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProtectedItemGetInput,
  outputSchema: ProtectedItemGetOutput,
}));
// Input Schema
export interface ProtectedItemListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  odataOptions?: string;
  continuationToken?: string;
  pageSize?: number;
}
export const ProtectedItemListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    odataOptions: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<ProtectedItemListInput>;

// Output Schema
export interface ProtectedItemListOutput {
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
export const ProtectedItemListOutput =
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
  }) as unknown as Schema.Codec<ProtectedItemListOutput>;

// The operation
/**
 * Gets the list of protected items in the given vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param odataOptions - OData options.
 * @param continuationToken - Continuation token.
 * @param pageSize - Page size.
 * @param vaultName - The vault name.
 */
export const ProtectedItemList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProtectedItemListInput,
  outputSchema: ProtectedItemListOutput,
}));
// Input Schema
export interface ProtectedItemPlannedFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  protectedItemName: string;
  properties: { customProperties: { instanceType: string } };
}
export const ProtectedItemPlannedFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      customProperties: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}/plannedFailover",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectedItemPlannedFailoverInput>;

// Output Schema
export interface ProtectedItemPlannedFailoverOutput {
  properties: { customProperties: { instanceType: string } };
}
export const ProtectedItemPlannedFailoverOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      customProperties: Schema.Struct({
        instanceType: Schema.String,
      }),
    }),
  }) as unknown as Schema.Codec<ProtectedItemPlannedFailoverOutput>;

// The operation
/**
 * Performs the planned failover on the protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param protectedItemName - The protected item name.
 */
export const ProtectedItemPlannedFailover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProtectedItemPlannedFailoverInput,
    outputSchema: ProtectedItemPlannedFailoverOutput,
  }));
// Input Schema
export interface ProtectedItemUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  protectedItemName: string;
  properties?: { customProperties?: { instanceType: string } };
  id?: string;
  name?: string;
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
export const ProtectedItemUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        customProperties: Schema.optional(
          Schema.Struct({
            instanceType: Schema.String,
          }),
        ),
      }),
    ),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ProtectedItemUpdateInput>;

// Output Schema
export interface ProtectedItemUpdateOutput {
  id?: string;
  name?: string;
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
export const ProtectedItemUpdateOutput =
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
  }) as unknown as Schema.Codec<ProtectedItemUpdateOutput>;

// The operation
/**
 * Performs update on the protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param protectedItemName - The protected item name.
 */
export const ProtectedItemUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProtectedItemUpdateInput,
  outputSchema: ProtectedItemUpdateOutput,
}));
// Input Schema
export interface RecoveryPointGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  protectedItemName: string;
  recoveryPointName: string;
}
export const RecoveryPointGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  protectedItemName: Schema.String.pipe(T.PathParam()),
  recoveryPointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RecoveryPointGetInput>;

// Output Schema
export interface RecoveryPointGetOutput {
  id?: string;
  name?: string;
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
export const RecoveryPointGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<RecoveryPointGetOutput>;

// The operation
/**
 * Gets the details of the recovery point of a protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param protectedItemName - The protected item name.
 * @param recoveryPointName - The recovery point name.
 */
export const RecoveryPointGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecoveryPointGetInput,
  outputSchema: RecoveryPointGetOutput,
}));
// Input Schema
export interface RecoveryPointListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  protectedItemName: string;
}
export const RecoveryPointListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    protectedItemName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/protectedItems/{protectedItemName}/recoveryPoints",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<RecoveryPointListInput>;

// Output Schema
export interface RecoveryPointListOutput {
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
export const RecoveryPointListOutput =
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
  }) as unknown as Schema.Codec<RecoveryPointListOutput>;

// The operation
/**
 * Gets the list of recovery points of the given protected item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param protectedItemName - The protected item name.
 */
export const RecoveryPointList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecoveryPointListInput,
  outputSchema: RecoveryPointListOutput,
}));
// Input Schema
export interface ReplicationExtensionCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  replicationExtensionName: string;
  properties?: {
    provisioningState?:
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    customProperties: { instanceType: string };
  };
}
export const ReplicationExtensionCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    replicationExtensionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Canceled",
            "Creating",
            "Deleting",
            "Deleted",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        customProperties: Schema.Struct({
          instanceType: Schema.String,
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/replicationExtensions/{replicationExtensionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationExtensionCreateInput>;

// Output Schema
export interface ReplicationExtensionCreateOutput {
  id?: string;
  name?: string;
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
export const ReplicationExtensionCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationExtensionCreateOutput>;

// The operation
/**
 * Creates the replication extension in the given vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param replicationExtensionName - The replication extension name.
 */
export const ReplicationExtensionCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationExtensionCreateInput,
    outputSchema: ReplicationExtensionCreateOutput,
  }),
);
// Input Schema
export interface ReplicationExtensionDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  replicationExtensionName: string;
}
export const ReplicationExtensionDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    replicationExtensionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/replicationExtensions/{replicationExtensionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationExtensionDeleteInput>;

// Output Schema
export type ReplicationExtensionDeleteOutput = void;
export const ReplicationExtensionDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationExtensionDeleteOutput>;

// The operation
/**
 * Deletes the replication extension in the given vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param replicationExtensionName - The replication extension name.
 */
export const ReplicationExtensionDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationExtensionDeleteInput,
    outputSchema: ReplicationExtensionDeleteOutput,
  }),
);
// Input Schema
export interface ReplicationExtensionGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  replicationExtensionName: string;
}
export const ReplicationExtensionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    replicationExtensionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/replicationExtensions/{replicationExtensionName}",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationExtensionGetInput>;

// Output Schema
export interface ReplicationExtensionGetOutput {
  id?: string;
  name?: string;
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
export const ReplicationExtensionGetOutput =
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
  }) as unknown as Schema.Codec<ReplicationExtensionGetOutput>;

// The operation
/**
 * Gets the details of the replication extension.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 * @param replicationExtensionName - The replication extension name.
 */
export const ReplicationExtensionGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationExtensionGetInput,
    outputSchema: ReplicationExtensionGetOutput,
  }),
);
// Input Schema
export interface ReplicationExtensionListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const ReplicationExtensionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}/replicationExtensions",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<ReplicationExtensionListInput>;

// Output Schema
export interface ReplicationExtensionListOutput {
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
export const ReplicationExtensionListOutput =
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
  }) as unknown as Schema.Codec<ReplicationExtensionListOutput>;

// The operation
/**
 * Gets the list of replication extensions in the given vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 */
export const ReplicationExtensionList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicationExtensionListInput,
    outputSchema: ReplicationExtensionListOutput,
  }),
);
// Input Schema
export interface VaultCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  properties?: {
    provisioningState?:
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    serviceResourceId?: string;
    vaultType?: "DisasterRecovery" | "Migrate";
    privateEndpointState?:
      | "None"
      | "InProgress"
      | "Succeeded"
      | "Deleting"
      | "Failed"
      | "Pending";
    publicNetworkAccess?: "Enabled" | "Disabled";
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
export const VaultCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Canceled",
          "Creating",
          "Deleting",
          "Deleted",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      serviceResourceId: Schema.optional(Schema.String),
      vaultType: Schema.optional(
        Schema.Literals(["DisasterRecovery", "Migrate"]),
      ),
      privateEndpointState: Schema.optional(
        Schema.Literals([
          "None",
          "InProgress",
          "Succeeded",
          "Deleting",
          "Failed",
          "Pending",
        ]),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<VaultCreateInput>;

// Output Schema
export interface VaultCreateOutput {
  id?: string;
  name?: string;
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
export const VaultCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VaultCreateOutput>;

// The operation
/**
 * Creates the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 */
export const VaultCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultCreateInput,
  outputSchema: VaultCreateOutput,
}));
// Input Schema
export interface VaultDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const VaultDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<VaultDeleteInput>;

// Output Schema
export type VaultDeleteOutput = void;
export const VaultDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VaultDeleteOutput>;

// The operation
/**
 * Removes the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 */
export const VaultDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultDeleteInput,
  outputSchema: VaultDeleteOutput,
}));
// Input Schema
export interface VaultGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const VaultGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<VaultGetInput>;

// Output Schema
export interface VaultGetOutput {
  id?: string;
  name?: string;
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
export const VaultGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VaultGetOutput>;

// The operation
/**
 * Gets the details of the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 */
export const VaultGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultGetInput,
  outputSchema: VaultGetOutput,
}));
// Input Schema
export interface VaultListInput {
  subscriptionId: string;
  resourceGroupName: string;
  continuationToken?: string;
}
export const VaultListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  continuationToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<VaultListInput>;

// Output Schema
export interface VaultListOutput {
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
export const VaultListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VaultListOutput>;

// The operation
/**
 * Gets the list of vaults in the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param continuationToken - Continuation token from the previous call.
 */
export const VaultList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultListInput,
  outputSchema: VaultListOutput,
}));
// Input Schema
export interface VaultListBySubscriptionInput {
  subscriptionId: string;
}
export const VaultListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataReplication/replicationVaults",
      apiVersion: "2026-05-01",
    }),
  ) as unknown as Schema.Codec<VaultListBySubscriptionInput>;

// Output Schema
export interface VaultListBySubscriptionOutput {
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
export const VaultListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<VaultListBySubscriptionOutput>;

// The operation
/**
 * Gets the list of vaults in the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const VaultListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VaultListBySubscriptionInput,
    outputSchema: VaultListBySubscriptionOutput,
  }),
);
// Input Schema
export interface VaultUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  tags?: Record<string, string>;
  properties?: {
    provisioningState?:
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Deleted"
      | "Failed"
      | "Succeeded"
      | "Updating";
    serviceResourceId?: string;
    vaultType?: "DisasterRecovery" | "Migrate";
    privateEndpointState?:
      | "None"
      | "InProgress"
      | "Succeeded"
      | "Deleting"
      | "Failed"
      | "Pending";
    publicNetworkAccess?: "Enabled" | "Disabled";
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
  };
  identity?: {
    type: "None" | "SystemAssigned" | "UserAssigned";
    principalId?: string;
    tenantId?: string;
  };
  id?: string;
  name?: string;
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
export const VaultUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Canceled",
          "Creating",
          "Deleting",
          "Deleted",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      serviceResourceId: Schema.optional(Schema.String),
      vaultType: Schema.optional(
        Schema.Literals(["DisasterRecovery", "Migrate"]),
      ),
      privateEndpointState: Schema.optional(
        Schema.Literals([
          "None",
          "InProgress",
          "Succeeded",
          "Deleting",
          "Failed",
          "Pending",
        ]),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
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
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
    }),
  ),
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataReplication/replicationVaults/{vaultName}",
    apiVersion: "2026-05-01",
  }),
) as unknown as Schema.Codec<VaultUpdateInput>;

// Output Schema
export interface VaultUpdateOutput {
  id?: string;
  name?: string;
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
export const VaultUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VaultUpdateOutput>;

// The operation
/**
 * Performs update on the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The vault name.
 */
export const VaultUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultUpdateInput,
  outputSchema: VaultUpdateOutput,
}));
