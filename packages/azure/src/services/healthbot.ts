/**
 * Azure Healthbot API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface BotsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  botName: string;
  properties?: {
    provisioningState?: string;
    botManagementPortalLink?: string;
    keyVaultProperties?: {
      keyName: string;
      keyVersion?: string;
      keyVaultUri: string;
      userIdentity?: string;
    };
    accessControlMethod?: string;
  };
  sku: { name: "F0" | "C0" | "PES" | "C1" };
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
  location: string;
}
export const BotsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  botName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(Schema.String),
      botManagementPortalLink: Schema.optional(Schema.String),
      keyVaultProperties: Schema.optional(
        Schema.Struct({
          keyName: Schema.String,
          keyVersion: Schema.optional(Schema.String),
          keyVaultUri: Schema.String,
          userIdentity: Schema.optional(Schema.String),
        }),
      ),
      accessControlMethod: Schema.optional(Schema.String),
    }),
  ),
  sku: Schema.Struct({
    name: Schema.Literals(["F0", "C0", "PES", "C1"]),
  }),
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
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthBot/healthBots/{botName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<BotsCreateInput>;

// Output Schema
export interface BotsCreateOutput {
  id?: string;
  name?: string;
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
export const BotsCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BotsCreateOutput>;

// The operation
/**
 * Create a new Azure Health Bot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param botName - The name of the Bot resource.
 */
export const BotsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsCreateInput,
  outputSchema: BotsCreateOutput,
}));
// Input Schema
export interface BotsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  botName: string;
}
export const BotsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  botName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthBot/healthBots/{botName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<BotsDeleteInput>;

// Output Schema
export type BotsDeleteOutput = void;
export const BotsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BotsDeleteOutput>;

// The operation
/**
 * Delete a HealthBot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param botName - The name of the Bot resource.
 */
export const BotsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsDeleteInput,
  outputSchema: BotsDeleteOutput,
}));
// Input Schema
export interface BotsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  botName: string;
}
export const BotsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  botName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthBot/healthBots/{botName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<BotsGetInput>;

// Output Schema
export interface BotsGetOutput {
  id?: string;
  name?: string;
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
export const BotsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BotsGetOutput>;

// The operation
/**
 * Get a HealthBot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param botName - The name of the Bot resource.
 */
export const BotsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsGetInput,
  outputSchema: BotsGetOutput,
}));
// Input Schema
export interface BotsListInput {
  subscriptionId: string;
}
export const BotsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.HealthBot/healthBots",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<BotsListInput>;

// Output Schema
export interface BotsListOutput {
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
export const BotsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BotsListOutput>;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const BotsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsListInput,
  outputSchema: BotsListOutput,
}));
// Input Schema
export interface BotsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const BotsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthBot/healthBots",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<BotsListByResourceGroupInput>;

// Output Schema
export interface BotsListByResourceGroupOutput {
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
export const BotsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<BotsListByResourceGroupOutput>;

// The operation
/**
 * Returns all the resources of a particular type belonging to a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const BotsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsListByResourceGroupInput,
  outputSchema: BotsListByResourceGroupOutput,
}));
// Input Schema
export interface BotsListSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  botName: string;
}
export const BotsListSecretsInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  botName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthBot/healthBots/{botName}/listSecrets",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<BotsListSecretsInput>;

// Output Schema
export interface BotsListSecretsOutput {
  secrets?: { keyName?: string; value?: string }[];
}
export const BotsListSecretsOutput = /*@__PURE__*/ Schema.Struct({
  secrets: Schema.optional(
    Schema.Array(
      Schema.Struct({
        keyName: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<BotsListSecretsOutput>;

// The operation
/**
 * List all secrets of a HealthBot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param botName - The name of the Bot resource.
 */
export const BotsListSecrets = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsListSecretsInput,
  outputSchema: BotsListSecretsOutput,
}));
// Input Schema
export interface BotsRegenerateApiJwtSecretInput {
  subscriptionId: string;
  resourceGroupName: string;
  botName: string;
}
export const BotsRegenerateApiJwtSecretInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    botName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthBot/healthBots/{botName}/regenerateApiJwtSecret",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<BotsRegenerateApiJwtSecretInput>;

// Output Schema
export interface BotsRegenerateApiJwtSecretOutput {
  keyName?: string;
  value?: string;
}
export const BotsRegenerateApiJwtSecretOutput =
  /*@__PURE__*/ Schema.Struct({
    keyName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BotsRegenerateApiJwtSecretOutput>;

// The operation
/**
 * Regenerate the API JWT Secret of a HealthBot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param botName - The name of the Bot resource.
 */
export const BotsRegenerateApiJwtSecret = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsRegenerateApiJwtSecretInput,
  outputSchema: BotsRegenerateApiJwtSecretOutput,
}));
// Input Schema
export interface BotsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  botName: string;
  properties?: {
    provisioningState?: string;
    botManagementPortalLink?: string;
    keyVaultProperties?: {
      keyName: string;
      keyVersion?: string;
      keyVaultUri: string;
      userIdentity?: string;
    };
    accessControlMethod?: string;
  };
  tags?: Record<string, string>;
  sku?: { name: "F0" | "C0" | "PES" | "C1" };
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
  location?: string;
}
export const BotsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  botName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(Schema.String),
      botManagementPortalLink: Schema.optional(Schema.String),
      keyVaultProperties: Schema.optional(
        Schema.Struct({
          keyName: Schema.String,
          keyVersion: Schema.optional(Schema.String),
          keyVaultUri: Schema.String,
          userIdentity: Schema.optional(Schema.String),
        }),
      ),
      accessControlMethod: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "C0", "PES", "C1"]),
    }),
  ),
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
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthBot/healthBots/{botName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<BotsUpdateInput>;

// Output Schema
export interface BotsUpdateOutput {
  id?: string;
  name?: string;
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
export const BotsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BotsUpdateOutput>;

// The operation
/**
 * Patch a HealthBot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param botName - The name of the Bot resource.
 */
export const BotsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsUpdateInput,
  outputSchema: BotsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HealthBot/operations",
    apiVersion: "2025-11-01",
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
    properties?: unknown;
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
      properties: Schema.optional(Schema.Unknown),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all the available Azure Health Bot operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
