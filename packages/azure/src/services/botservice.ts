/**
 * Azure Botservice API
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
export interface BotConnectionCreateInput {
  resourceGroupName: string;
  resourceName: string;
  connectionName: string;
  subscriptionId: string;
  properties?: {
    id?: string;
    name?: string;
    clientId?: string;
    settingId?: string;
    clientSecret?: string | Redacted.Redacted<string>;
    scopes?: string;
    serviceProviderId?: string;
    serviceProviderDisplayName?: string;
    parameters?: { key?: string; value?: string | null }[];
    provisioningState?: string;
  };
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotConnectionCreateInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        clientId: Schema.optional(Schema.String),
        settingId: Schema.optional(Schema.String),
        clientSecret: Schema.optional(SensitiveString),
        scopes: Schema.optional(Schema.String),
        serviceProviderId: Schema.optional(Schema.String),
        serviceProviderDisplayName: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.optional(Schema.String),
              value: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["F0", "S1"]),
        tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
      }),
    ),
    kind: Schema.optional(
      Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
    ),
    etag: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/connections/{connectionName}",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<BotConnectionCreateInput>;

// Output Schema
export interface BotConnectionCreateOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotConnectionCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["F0", "S1"]),
        tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
      }),
    ),
    kind: Schema.optional(
      Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
    ),
    etag: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<BotConnectionCreateOutput>;

// The operation
/**
 * Register a new Auth Connection for a Bot Service
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param connectionName - The name of the Bot Service Connection Setting resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotConnectionCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotConnectionCreateInput,
  outputSchema: BotConnectionCreateOutput,
}));
// Input Schema
export interface BotConnectionDeleteInput {
  resourceGroupName: string;
  resourceName: string;
  connectionName: string;
  subscriptionId: string;
}
export const BotConnectionDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/connections/{connectionName}",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<BotConnectionDeleteInput>;

// Output Schema
export type BotConnectionDeleteOutput = void;
export const BotConnectionDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BotConnectionDeleteOutput>;

// The operation
/**
 * Deletes a Connection Setting registration for a Bot Service
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param connectionName - The name of the Bot Service Connection Setting resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotConnectionDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotConnectionDeleteInput,
  outputSchema: BotConnectionDeleteOutput,
}));
// Input Schema
export interface BotConnectionGetInput {
  resourceGroupName: string;
  resourceName: string;
  connectionName: string;
  subscriptionId: string;
}
export const BotConnectionGetInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  connectionName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/connections/{connectionName}",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<BotConnectionGetInput>;

// Output Schema
export interface BotConnectionGetOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotConnectionGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}) as unknown as Schema.Codec<BotConnectionGetOutput>;

// The operation
/**
 * Get a Connection Setting registration for a Bot Service
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param connectionName - The name of the Bot Service Connection Setting resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotConnectionGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotConnectionGetInput,
  outputSchema: BotConnectionGetOutput,
}));
// Input Schema
export interface BotConnectionListByBotServiceInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const BotConnectionListByBotServiceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/connections",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<BotConnectionListByBotServiceInput>;

// Output Schema
export interface BotConnectionListByBotServiceOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    location?: string;
    type?: string;
    tags?: Record<string, string>;
    sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
    kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
    etag?: string;
    zones?: string[];
  }[];
}
export const BotConnectionListByBotServiceOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.Literals(["F0", "S1"]),
              tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
            }),
          ),
          kind: Schema.optional(
            Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
          ),
          etag: Schema.optional(Schema.String),
          zones: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<BotConnectionListByBotServiceOutput>;

// The operation
/**
 * Returns all the Connection Settings registered to a particular BotService resource
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param subscriptionId - Azure Subscription ID.
 * @param api-version - Version of the API to be used with the client request.
 */
export const BotConnectionListByBotService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BotConnectionListByBotServiceInput,
    outputSchema: BotConnectionListByBotServiceOutput,
  }));
// Input Schema
export interface BotConnectionListServiceProvidersInput {
  subscriptionId: string;
}
export const BotConnectionListServiceProvidersInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.BotService/listAuthServiceProviders",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<BotConnectionListServiceProvidersInput>;

// Output Schema
export interface BotConnectionListServiceProvidersOutput {
  nextLink?: string;
  value?: {
    properties?: {
      id?: string;
      displayName?: string;
      serviceProviderName?: string;
      devPortalUrl?: string;
      iconUrl?: string;
      parameters?: {
        name?: string;
        type?: string;
        displayName?: string;
        description?: string;
        helpUrl?: string;
        default?: string;
        metadata?: { constraints?: { required?: boolean } };
      }[];
    };
  }[];
}
export const BotConnectionListServiceProvidersOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              serviceProviderName: Schema.optional(Schema.String),
              devPortalUrl: Schema.optional(Schema.String),
              iconUrl: Schema.optional(Schema.String),
              parameters: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                    helpUrl: Schema.optional(Schema.String),
                    default: Schema.optional(Schema.String),
                    metadata: Schema.optional(
                      Schema.Struct({
                        constraints: Schema.optional(
                          Schema.Struct({
                            required: Schema.optional(Schema.Boolean),
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
    ),
  }) as unknown as Schema.Codec<BotConnectionListServiceProvidersOutput>;

// The operation
/**
 * Lists the available Service Providers for creating Connection Settings
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotConnectionListServiceProviders =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BotConnectionListServiceProvidersInput,
    outputSchema: BotConnectionListServiceProvidersOutput,
  }));
// Input Schema
export interface BotConnectionListWithSecretsInput {
  resourceGroupName: string;
  resourceName: string;
  connectionName: string;
  subscriptionId: string;
}
export const BotConnectionListWithSecretsInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/connections/{connectionName}/listWithSecrets",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<BotConnectionListWithSecretsInput>;

// Output Schema
export interface BotConnectionListWithSecretsOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotConnectionListWithSecretsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["F0", "S1"]),
        tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
      }),
    ),
    kind: Schema.optional(
      Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
    ),
    etag: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<BotConnectionListWithSecretsOutput>;

// The operation
/**
 * Get a Connection Setting registration for a Bot Service
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param connectionName - The name of the Bot Service Connection Setting resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotConnectionListWithSecrets =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BotConnectionListWithSecretsInput,
    outputSchema: BotConnectionListWithSecretsOutput,
  }));
// Input Schema
export interface BotConnectionUpdateInput {
  resourceGroupName: string;
  resourceName: string;
  connectionName: string;
  subscriptionId: string;
  properties?: {
    id?: string;
    name?: string;
    clientId?: string;
    settingId?: string;
    clientSecret?: string | Redacted.Redacted<string>;
    scopes?: string;
    serviceProviderId?: string;
    serviceProviderDisplayName?: string;
    parameters?: { key?: string; value?: string | null }[];
    provisioningState?: string;
  };
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotConnectionUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        clientId: Schema.optional(Schema.String),
        settingId: Schema.optional(Schema.String),
        clientSecret: Schema.optional(SensitiveString),
        scopes: Schema.optional(Schema.String),
        serviceProviderId: Schema.optional(Schema.String),
        serviceProviderDisplayName: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              key: Schema.optional(Schema.String),
              value: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["F0", "S1"]),
        tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
      }),
    ),
    kind: Schema.optional(
      Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
    ),
    etag: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/connections/{connectionName}",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<BotConnectionUpdateInput>;

// Output Schema
export interface BotConnectionUpdateOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotConnectionUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["F0", "S1"]),
        tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
      }),
    ),
    kind: Schema.optional(
      Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
    ),
    etag: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<BotConnectionUpdateOutput>;

// The operation
/**
 * Updates a Connection Setting registration for a Bot Service
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param connectionName - The name of the Bot Service Connection Setting resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotConnectionUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotConnectionUpdateInput,
  outputSchema: BotConnectionUpdateOutput,
}));
// Input Schema
export interface BotsCreateInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  properties?: {
    displayName: string;
    description?: string;
    iconUrl?: string;
    endpoint: string | null;
    endpointVersion?: string;
    allSettings?: Record<string, string>;
    parameters?: Record<string, string>;
    manifestUrl?: string;
    msaAppType?: "UserAssignedMSI" | "SingleTenant" | "MultiTenant";
    msaAppId: string;
    msaAppTenantId?: string;
    msaAppMSIResourceId?: string;
    configuredChannels?: string[];
    enabledChannels?: string[];
    developerAppInsightKey?: string;
    developerAppInsightsApiKey?: string;
    developerAppInsightsApplicationId?: string;
    luisAppIds?: string[];
    luisKey?: string;
    isCmekEnabled?: boolean;
    cmekKeyVaultUrl?: string;
    cmekEncryptionStatus?: string;
    tenantId?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
    isStreamingSupported?: boolean;
    isDeveloperAppInsightsApiKeySet?: boolean;
    migrationToken?: string;
    disableLocalAuth?: boolean;
    schemaTransformationVersion?: string | null;
    storageResourceId?: string;
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    openWithHint?: string;
    appPasswordHint?: string | Redacted.Redacted<string>;
    provisioningState?: string;
    publishingCredentials?: string;
  };
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotsCreateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      displayName: Schema.String,
      description: Schema.optional(Schema.String),
      iconUrl: Schema.optional(Schema.String),
      endpoint: Schema.NullOr(Schema.String),
      endpointVersion: Schema.optional(Schema.String),
      allSettings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      manifestUrl: Schema.optional(Schema.String),
      msaAppType: Schema.optional(
        Schema.Literals(["UserAssignedMSI", "SingleTenant", "MultiTenant"]),
      ),
      msaAppId: Schema.String,
      msaAppTenantId: Schema.optional(Schema.String),
      msaAppMSIResourceId: Schema.optional(Schema.String),
      configuredChannels: Schema.optional(Schema.Array(Schema.String)),
      enabledChannels: Schema.optional(Schema.Array(Schema.String)),
      developerAppInsightKey: Schema.optional(Schema.String),
      developerAppInsightsApiKey: Schema.optional(Schema.String),
      developerAppInsightsApplicationId: Schema.optional(Schema.String),
      luisAppIds: Schema.optional(Schema.Array(Schema.String)),
      luisKey: Schema.optional(Schema.String),
      isCmekEnabled: Schema.optional(Schema.Boolean),
      cmekKeyVaultUrl: Schema.optional(Schema.String),
      cmekEncryptionStatus: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      isStreamingSupported: Schema.optional(Schema.Boolean),
      isDeveloperAppInsightsApiKeySet: Schema.optional(Schema.Boolean),
      migrationToken: Schema.optional(Schema.String),
      disableLocalAuth: Schema.optional(Schema.Boolean),
      schemaTransformationVersion: Schema.optional(
        Schema.NullOr(Schema.String),
      ),
      storageResourceId: Schema.optional(Schema.String),
      privateEndpointConnections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      openWithHint: Schema.optional(Schema.String),
      appPasswordHint: Schema.optional(SensitiveString),
      provisioningState: Schema.optional(Schema.String),
      publishingCredentials: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<BotsCreateInput>;

// Output Schema
export interface BotsCreateOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotsCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}) as unknown as Schema.Codec<BotsCreateOutput>;

// The operation
/**
 * Creates a Bot Service. Bot Service is a resource group wide resource type.
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsCreateInput,
  outputSchema: BotsCreateOutput,
}));
// Input Schema
export interface BotsDeleteInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const BotsDeleteInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<BotsDeleteInput>;

// Output Schema
export type BotsDeleteOutput = void;
export const BotsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BotsDeleteOutput>;

// The operation
/**
 * Deletes a Bot Service from the resource group.
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsDeleteInput,
  outputSchema: BotsDeleteOutput,
}));
// Input Schema
export interface BotsGetInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const BotsGetInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<BotsGetInput>;

// Output Schema
export interface BotsGetOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}) as unknown as Schema.Codec<BotsGetOutput>;

// The operation
/**
 * Returns a BotService specified by the parameters.
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsGetInput,
  outputSchema: BotsGetOutput,
}));
// Input Schema
export interface BotsGetCheckNameAvailabilityInput {
  name?: string;
  type?: string;
}
export const BotsGetCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.BotService/checkNameAvailability",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<BotsGetCheckNameAvailabilityInput>;

// Output Schema
export interface BotsGetCheckNameAvailabilityOutput {
  valid?: boolean;
  message?: string;
  absCode?: string;
}
export const BotsGetCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    valid: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
    absCode: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BotsGetCheckNameAvailabilityOutput>;

// The operation
/**
 * Check whether a bot name is available.
 *
 * @param api-version - Version of the API to be used with the client request.
 */
export const BotsGetCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BotsGetCheckNameAvailabilityInput,
    outputSchema: BotsGetCheckNameAvailabilityOutput,
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
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.BotService/botServices",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<BotsListInput>;

// Output Schema
export interface BotsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    location?: string;
    type?: string;
    tags?: Record<string, string>;
    sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
    kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
    etag?: string;
    zones?: string[];
  }[];
}
export const BotsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.Literals(["F0", "S1"]),
            tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
          }),
        ),
        kind: Schema.optional(
          Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
        ),
        etag: Schema.optional(Schema.String),
        zones: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  ),
}) as unknown as Schema.Codec<BotsListOutput>;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsListInput,
  outputSchema: BotsListOutput,
}));
// Input Schema
export interface BotsListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const BotsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<BotsListByResourceGroupInput>;

// Output Schema
export interface BotsListByResourceGroupOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    location?: string;
    type?: string;
    tags?: Record<string, string>;
    sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
    kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
    etag?: string;
    zones?: string[];
  }[];
}
export const BotsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.Literals(["F0", "S1"]),
              tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
            }),
          ),
          kind: Schema.optional(
            Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
          ),
          etag: Schema.optional(Schema.String),
          zones: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<BotsListByResourceGroupOutput>;

// The operation
/**
 * Returns all the resources of a particular type belonging to a resource group
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param subscriptionId - Azure Subscription ID.
 * @param api-version - Version of the API to be used with the client request.
 */
export const BotsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsListByResourceGroupInput,
  outputSchema: BotsListByResourceGroupOutput,
}));
// Input Schema
export interface BotsUpdateInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  properties?: {
    displayName: string;
    description?: string;
    iconUrl?: string;
    endpoint: string | null;
    endpointVersion?: string;
    allSettings?: Record<string, string>;
    parameters?: Record<string, string>;
    manifestUrl?: string;
    msaAppType?: "UserAssignedMSI" | "SingleTenant" | "MultiTenant";
    msaAppId: string;
    msaAppTenantId?: string;
    msaAppMSIResourceId?: string;
    configuredChannels?: string[];
    enabledChannels?: string[];
    developerAppInsightKey?: string;
    developerAppInsightsApiKey?: string;
    developerAppInsightsApplicationId?: string;
    luisAppIds?: string[];
    luisKey?: string;
    isCmekEnabled?: boolean;
    cmekKeyVaultUrl?: string;
    cmekEncryptionStatus?: string;
    tenantId?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
    isStreamingSupported?: boolean;
    isDeveloperAppInsightsApiKeySet?: boolean;
    migrationToken?: string;
    disableLocalAuth?: boolean;
    schemaTransformationVersion?: string | null;
    storageResourceId?: string;
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    openWithHint?: string;
    appPasswordHint?: string | Redacted.Redacted<string>;
    provisioningState?: string;
    publishingCredentials?: string;
  };
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotsUpdateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      displayName: Schema.String,
      description: Schema.optional(Schema.String),
      iconUrl: Schema.optional(Schema.String),
      endpoint: Schema.NullOr(Schema.String),
      endpointVersion: Schema.optional(Schema.String),
      allSettings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      manifestUrl: Schema.optional(Schema.String),
      msaAppType: Schema.optional(
        Schema.Literals(["UserAssignedMSI", "SingleTenant", "MultiTenant"]),
      ),
      msaAppId: Schema.String,
      msaAppTenantId: Schema.optional(Schema.String),
      msaAppMSIResourceId: Schema.optional(Schema.String),
      configuredChannels: Schema.optional(Schema.Array(Schema.String)),
      enabledChannels: Schema.optional(Schema.Array(Schema.String)),
      developerAppInsightKey: Schema.optional(Schema.String),
      developerAppInsightsApiKey: Schema.optional(Schema.String),
      developerAppInsightsApplicationId: Schema.optional(Schema.String),
      luisAppIds: Schema.optional(Schema.Array(Schema.String)),
      luisKey: Schema.optional(Schema.String),
      isCmekEnabled: Schema.optional(Schema.Boolean),
      cmekKeyVaultUrl: Schema.optional(Schema.String),
      cmekEncryptionStatus: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      isStreamingSupported: Schema.optional(Schema.Boolean),
      isDeveloperAppInsightsApiKeySet: Schema.optional(Schema.Boolean),
      migrationToken: Schema.optional(Schema.String),
      disableLocalAuth: Schema.optional(Schema.Boolean),
      schemaTransformationVersion: Schema.optional(
        Schema.NullOr(Schema.String),
      ),
      storageResourceId: Schema.optional(Schema.String),
      privateEndpointConnections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
      ),
      openWithHint: Schema.optional(Schema.String),
      appPasswordHint: Schema.optional(SensitiveString),
      provisioningState: Schema.optional(Schema.String),
      publishingCredentials: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<BotsUpdateInput>;

// Output Schema
export interface BotsUpdateOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const BotsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}) as unknown as Schema.Codec<BotsUpdateOutput>;

// The operation
/**
 * Updates a Bot Service
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const BotsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BotsUpdateInput,
  outputSchema: BotsUpdateOutput,
}));
// Input Schema
export interface ChannelsCreateInput {
  resourceGroupName: string;
  resourceName: string;
  channelName:
    | "AlexaChannel"
    | "FacebookChannel"
    | "EmailChannel"
    | "KikChannel"
    | "TelegramChannel"
    | "SlackChannel"
    | "MsTeamsChannel"
    | "SkypeChannel"
    | "WebChatChannel"
    | "DirectLineChannel"
    | "SmsChannel"
    | "LineChannel"
    | "DirectLineSpeechChannel"
    | "OutlookChannel"
    | "Omnichannel"
    | "TelephonyChannel"
    | "AcsChatChannel"
    | "SearchAssistant"
    | "M365Extensions";
  subscriptionId: string;
  properties?: {
    channelName: string;
    etag?: string | null;
    provisioningState?: string;
    location?: string;
  };
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const ChannelsCreateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  channelName: Schema.Literals([
    "AlexaChannel",
    "FacebookChannel",
    "EmailChannel",
    "KikChannel",
    "TelegramChannel",
    "SlackChannel",
    "MsTeamsChannel",
    "SkypeChannel",
    "WebChatChannel",
    "DirectLineChannel",
    "SmsChannel",
    "LineChannel",
    "DirectLineSpeechChannel",
    "OutlookChannel",
    "Omnichannel",
    "TelephonyChannel",
    "AcsChatChannel",
    "SearchAssistant",
    "M365Extensions",
  ]).pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      channelName: Schema.String,
      etag: Schema.optional(Schema.NullOr(Schema.String)),
      provisioningState: Schema.optional(Schema.String),
      location: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<ChannelsCreateInput>;

// Output Schema
export interface ChannelsCreateOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const ChannelsCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}) as unknown as Schema.Codec<ChannelsCreateOutput>;

// The operation
/**
 * Creates a Channel registration for a Bot Service
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param channelName - The name of the Channel resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const ChannelsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ChannelsCreateInput,
  outputSchema: ChannelsCreateOutput,
}));
// Input Schema
export interface ChannelsDeleteInput {
  resourceGroupName: string;
  resourceName: string;
  channelName: string;
  subscriptionId: string;
}
export const ChannelsDeleteInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  channelName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<ChannelsDeleteInput>;

// Output Schema
export type ChannelsDeleteOutput = void;
export const ChannelsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ChannelsDeleteOutput>;

// The operation
/**
 * Deletes a Channel registration from a Bot Service
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param channelName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const ChannelsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ChannelsDeleteInput,
  outputSchema: ChannelsDeleteOutput,
}));
// Input Schema
export interface ChannelsGetInput {
  resourceGroupName: string;
  resourceName: string;
  channelName: string;
  subscriptionId: string;
}
export const ChannelsGetInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  channelName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<ChannelsGetInput>;

// Output Schema
export interface ChannelsGetOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const ChannelsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}) as unknown as Schema.Codec<ChannelsGetOutput>;

// The operation
/**
 * Returns a BotService Channel registration specified by the parameters.
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param channelName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const ChannelsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ChannelsGetInput,
  outputSchema: ChannelsGetOutput,
}));
// Input Schema
export interface ChannelsListByResourceGroupInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const ChannelsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<ChannelsListByResourceGroupInput>;

// Output Schema
export interface ChannelsListByResourceGroupOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    location?: string;
    type?: string;
    tags?: Record<string, string>;
    sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
    kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
    etag?: string;
    zones?: string[];
  }[];
}
export const ChannelsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.Literals(["F0", "S1"]),
              tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
            }),
          ),
          kind: Schema.optional(
            Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
          ),
          etag: Schema.optional(Schema.String),
          zones: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ChannelsListByResourceGroupOutput>;

// The operation
/**
 * Returns all the Channel registrations of a particular BotService resource
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param subscriptionId - Azure Subscription ID.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ChannelsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ChannelsListByResourceGroupInput,
  outputSchema: ChannelsListByResourceGroupOutput,
}));
// Input Schema
export interface ChannelsListWithKeysInput {
  resourceGroupName: string;
  resourceName: string;
  channelName:
    | "AlexaChannel"
    | "FacebookChannel"
    | "EmailChannel"
    | "KikChannel"
    | "TelegramChannel"
    | "SlackChannel"
    | "MsTeamsChannel"
    | "SkypeChannel"
    | "WebChatChannel"
    | "DirectLineChannel"
    | "SmsChannel"
    | "LineChannel"
    | "DirectLineSpeechChannel"
    | "OutlookChannel"
    | "Omnichannel"
    | "TelephonyChannel"
    | "AcsChatChannel"
    | "SearchAssistant"
    | "M365Extensions";
  subscriptionId: string;
}
export const ChannelsListWithKeysInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    channelName: Schema.Literals([
      "AlexaChannel",
      "FacebookChannel",
      "EmailChannel",
      "KikChannel",
      "TelegramChannel",
      "SlackChannel",
      "MsTeamsChannel",
      "SkypeChannel",
      "WebChatChannel",
      "DirectLineChannel",
      "SmsChannel",
      "LineChannel",
      "DirectLineSpeechChannel",
      "OutlookChannel",
      "Omnichannel",
      "TelephonyChannel",
      "AcsChatChannel",
      "SearchAssistant",
      "M365Extensions",
    ]).pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}/listChannelWithKeys",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<ChannelsListWithKeysInput>;

// Output Schema
export interface ChannelsListWithKeysOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const ChannelsListWithKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["F0", "S1"]),
        tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
      }),
    ),
    kind: Schema.optional(
      Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
    ),
    etag: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ChannelsListWithKeysOutput>;

// The operation
/**
 * Lists a Channel registration for a Bot Service including secrets
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param channelName - The name of the Channel resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const ChannelsListWithKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: ChannelsListWithKeysInput,
  outputSchema: ChannelsListWithKeysOutput,
}));
// Input Schema
export interface ChannelsUpdateInput {
  resourceGroupName: string;
  resourceName: string;
  channelName:
    | "AlexaChannel"
    | "FacebookChannel"
    | "EmailChannel"
    | "KikChannel"
    | "TelegramChannel"
    | "SlackChannel"
    | "MsTeamsChannel"
    | "SkypeChannel"
    | "WebChatChannel"
    | "DirectLineChannel"
    | "SmsChannel"
    | "LineChannel"
    | "DirectLineSpeechChannel"
    | "OutlookChannel"
    | "Omnichannel"
    | "TelephonyChannel"
    | "AcsChatChannel"
    | "SearchAssistant"
    | "M365Extensions";
  subscriptionId: string;
  properties?: {
    channelName: string;
    etag?: string | null;
    provisioningState?: string;
    location?: string;
  };
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const ChannelsUpdateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  channelName: Schema.Literals([
    "AlexaChannel",
    "FacebookChannel",
    "EmailChannel",
    "KikChannel",
    "TelegramChannel",
    "SlackChannel",
    "MsTeamsChannel",
    "SkypeChannel",
    "WebChatChannel",
    "DirectLineChannel",
    "SmsChannel",
    "LineChannel",
    "DirectLineSpeechChannel",
    "OutlookChannel",
    "Omnichannel",
    "TelephonyChannel",
    "AcsChatChannel",
    "SearchAssistant",
    "M365Extensions",
  ]).pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      channelName: Schema.String,
      etag: Schema.optional(Schema.NullOr(Schema.String)),
      provisioningState: Schema.optional(Schema.String),
      location: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<ChannelsUpdateInput>;

// Output Schema
export interface ChannelsUpdateOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const ChannelsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["F0", "S1"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
  ),
  etag: Schema.optional(Schema.String),
  zones: Schema.optional(Schema.Array(Schema.String)),
}) as unknown as Schema.Codec<ChannelsUpdateOutput>;

// The operation
/**
 * Updates a Channel registration for a Bot Service
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param channelName - The name of the Channel resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const ChannelsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ChannelsUpdateInput,
  outputSchema: ChannelsUpdateOutput,
}));
// Input Schema
export interface DirectLineRegenerateKeysInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  channelName: "WebChatChannel" | "DirectLineChannel";
  siteName: string;
  key: "key1" | "key2";
}
export const DirectLineRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    channelName: Schema.Literals(["WebChatChannel", "DirectLineChannel"]).pipe(
      T.PathParam(),
    ),
    siteName: Schema.String,
    key: Schema.Literals(["key1", "key2"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}/regeneratekeys",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<DirectLineRegenerateKeysInput>;

// Output Schema
export interface DirectLineRegenerateKeysOutput {
  id?: string;
  name?: string;
  location?: string;
  type?: string;
  tags?: Record<string, string>;
  sku?: { name: "F0" | "S1"; tier?: "Free" | "Standard" };
  kind?: "sdk" | "designer" | "bot" | "function" | "azurebot";
  etag?: string;
  zones?: string[];
}
export const DirectLineRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["F0", "S1"]),
        tier: Schema.optional(Schema.Literals(["Free", "Standard"])),
      }),
    ),
    kind: Schema.optional(
      Schema.Literals(["sdk", "designer", "bot", "function", "azurebot"]),
    ),
    etag: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<DirectLineRegenerateKeysOutput>;

// The operation
/**
 * Regenerates secret keys and returns them for the DirectLine Channel of a particular BotService resource
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param subscriptionId - Azure Subscription ID.
 * @param channelName - The name of the Channel resource for which keys are to be regenerated.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DirectLineRegenerateKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: DirectLineRegenerateKeysInput,
  outputSchema: DirectLineRegenerateKeysOutput,
}));
// Input Schema
export interface EmailCreateSignInUrlInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const EmailCreateSignInUrlInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/createEmailSignInUrl",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<EmailCreateSignInUrlInput>;

// Output Schema
export interface EmailCreateSignInUrlOutput {
  id?: string;
  location?: string;
  properties?: { url?: string };
}
export const EmailCreateSignInUrlOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        url: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<EmailCreateSignInUrlOutput>;

// The operation
/**
 * Creates an email channel sign in url for a Bot Service
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const EmailCreateSignInUrl = /*@__PURE__*/ API.make(() => ({
  inputSchema: EmailCreateSignInUrlInput,
  outputSchema: EmailCreateSignInUrlOutput,
}));
// Input Schema
export interface HostSettingsGetInput {
  subscriptionId: string;
}
export const HostSettingsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.BotService/hostSettings",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<HostSettingsGetInput>;

// Output Schema
export interface HostSettingsGetOutput {
  OAuthUrl?: string;
  ToBotFromChannelOpenIdMetadataUrl?: string;
  ToBotFromChannelTokenIssuer?: string;
  ToBotFromEmulatorOpenIdMetadataUrl?: string;
  ToChannelFromBotLoginUrl?: string;
  ToChannelFromBotOAuthScope?: string;
  ValidateAuthority?: boolean;
  BotOpenIdMetadata?: string;
}
export const HostSettingsGetOutput = /*@__PURE__*/ Schema.Struct({
  OAuthUrl: Schema.optional(Schema.String),
  ToBotFromChannelOpenIdMetadataUrl: Schema.optional(Schema.String),
  ToBotFromChannelTokenIssuer: Schema.optional(Schema.String),
  ToBotFromEmulatorOpenIdMetadataUrl: Schema.optional(Schema.String),
  ToChannelFromBotLoginUrl: Schema.optional(Schema.String),
  ToChannelFromBotOAuthScope: Schema.optional(Schema.String),
  ValidateAuthority: Schema.optional(Schema.Boolean),
  BotOpenIdMetadata: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<HostSettingsGetOutput>;

// The operation
/**
 * Get per subscription settings needed to host bot in compute resource such as Azure App Service
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const HostSettingsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: HostSettingsGetInput,
  outputSchema: HostSettingsGetOutput,
}));
// Input Schema
export interface OperationResultsGetInput {
  subscriptionId: string;
  operationResultId: string;
}
export const OperationResultsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationResultId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.BotService/operationresults/{operationResultId}",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<OperationResultsGetInput>;

// Output Schema
export interface OperationResultsGetOutput {
  id?: string;
  name?: string;
  status?: "Canceled" | "Succeeded" | "Failed" | "Requested" | "Running";
  startTime?: string;
}
export const OperationResultsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "Canceled",
        "Succeeded",
        "Failed",
        "Requested",
        "Running",
      ]),
    ),
    startTime: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OperationResultsGetOutput>;

// The operation
/**
 * Get the operation result for a long running operation.
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 * @param operationResultId - The ID of the operation result to get.
 */
export const OperationResultsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationResultsGetInput,
  outputSchema: OperationResultsGetOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.BotService/operations",
    apiVersion: "2022-09-15",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string;
  value?: {
    name?: string;
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
    origin?: string;
    properties?: unknown;
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all the available BotService operations.
 *
 * @param api-version - Version of the API to be used with the client request.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
    groupIds?: string[];
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(
            Schema.Literals(["Pending", "Approved", "Rejected"]),
          ),
          description: Schema.optional(Schema.String),
          actionsRequired: Schema.optional(Schema.String),
        }),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
        groupIds: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOutput>;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the Bot.
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateInput,
    outputSchema: PrivateEndpointConnectionsCreateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the Bot.
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the Bot.
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/privateEndpointConnections",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List all the private endpoint connections associated with the Bot.
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListByBotResourceInput {
  resourceGroupName: string;
  resourceName: string;
  subscriptionId: string;
}
export const PrivateLinkResourcesListByBotResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/privateLinkResources",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByBotResourceInput>;

// Output Schema
export interface PrivateLinkResourcesListByBotResourceOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const PrivateLinkResourcesListByBotResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByBotResourceOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a Bot.
 *
 * @param resourceGroupName - The name of the Bot resource group in the user subscription.
 * @param resourceName - The name of the Bot resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const PrivateLinkResourcesListByBotResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByBotResourceInput,
    outputSchema: PrivateLinkResourcesListByBotResourceOutput,
  }));
// Input Schema
export interface QnAMakerEndpointKeysGetInput {
  subscriptionId: string;
  hostname?: string;
  authkey?: string;
}
export const QnAMakerEndpointKeysGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    hostname: Schema.optional(Schema.String),
    authkey: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.BotService/listQnAMakerEndpointKeys",
      apiVersion: "2022-09-15",
    }),
  ) as unknown as Schema.Codec<QnAMakerEndpointKeysGetInput>;

// Output Schema
export interface QnAMakerEndpointKeysGetOutput {
  primaryEndpointKey?: string;
  secondaryEndpointKey?: string;
  installedVersion?: string;
  lastStableVersion?: string;
}
export const QnAMakerEndpointKeysGetOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryEndpointKey: Schema.optional(Schema.String),
    secondaryEndpointKey: Schema.optional(Schema.String),
    installedVersion: Schema.optional(Schema.String),
    lastStableVersion: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<QnAMakerEndpointKeysGetOutput>;

// The operation
/**
 * Lists the QnA Maker endpoint keys
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure Subscription ID.
 */
export const QnAMakerEndpointKeysGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: QnAMakerEndpointKeysGetInput,
  outputSchema: QnAMakerEndpointKeysGetOutput,
}));
