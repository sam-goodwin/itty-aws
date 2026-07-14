/**
 * Azure Appconfiguration API
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
export interface ConfigurationStoresCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
    principalId?: string;
    tenantId?: string;
  };
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    creationDate?: string;
    endpoint?: string;
    encryption?: {
      keyVaultProperties?: {
        keyIdentifier?: string;
        identityClientId?: string;
      };
    };
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
      properties?: {
        provisioningState?:
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Succeeded"
          | "Failed"
          | "Canceled";
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: "None" | "Recreate";
        };
      };
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
    disableLocalAuth?: boolean;
    softDeleteRetentionInDays?: number;
    defaultKeyValueRevisionRetentionPeriodInSeconds?: number;
    enablePurgeProtection?: boolean;
    dataPlaneProxy?: {
      authenticationMode?: "Local" | "Pass-through";
      privateLinkDelegation?: "Enabled" | "Disabled";
    };
    createMode?: "Recover" | "Default";
  };
  sku: { name: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ConfigurationStoresCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
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
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        creationDate: Schema.optional(Schema.String),
        endpoint: Schema.optional(Schema.String),
        encryption: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyIdentifier: Schema.optional(Schema.String),
                identityClientId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              properties: Schema.optional(
                Schema.Struct({
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Creating",
                      "Updating",
                      "Deleting",
                      "Succeeded",
                      "Failed",
                      "Canceled",
                    ]),
                  ),
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
                    actionsRequired: Schema.optional(
                      Schema.Literals(["None", "Recreate"]),
                    ),
                  }),
                }),
              ),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        disableLocalAuth: Schema.optional(Schema.Boolean),
        softDeleteRetentionInDays: Schema.optional(Schema.Number),
        defaultKeyValueRevisionRetentionPeriodInSeconds: Schema.optional(
          Schema.Number,
        ),
        enablePurgeProtection: Schema.optional(Schema.Boolean),
        dataPlaneProxy: Schema.optional(
          Schema.Struct({
            authenticationMode: Schema.optional(
              Schema.Literals(["Local", "Pass-through"]),
            ),
            privateLinkDelegation: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        createMode: Schema.optional(Schema.Literals(["Recover", "Default"])),
      }),
    ),
    sku: Schema.Struct({
      name: Schema.String,
    }),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresCreateInput>;

// Output Schema
export interface ConfigurationStoresCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationStoresCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationStoresCreateOutput>;

// The operation
/**
 * Creates a configuration store with the specified parameters.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 */
export const ConfigurationStoresCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationStoresCreateInput,
  outputSchema: ConfigurationStoresCreateOutput,
}));
// Input Schema
export interface ConfigurationStoresDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
}
export const ConfigurationStoresDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresDeleteInput>;

// Output Schema
export type ConfigurationStoresDeleteOutput = void;
export const ConfigurationStoresDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationStoresDeleteOutput>;

// The operation
/**
 * Deletes a configuration store.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 */
export const ConfigurationStoresDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationStoresDeleteInput,
  outputSchema: ConfigurationStoresDeleteOutput,
}));
// Input Schema
export interface ConfigurationStoresGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
}
export const ConfigurationStoresGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresGetInput>;

// Output Schema
export interface ConfigurationStoresGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationStoresGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationStoresGetOutput>;

// The operation
/**
 * Gets the properties of the specified configuration store.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 */
export const ConfigurationStoresGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationStoresGetInput,
  outputSchema: ConfigurationStoresGetOutput,
}));
// Input Schema
export interface ConfigurationStoresGetDeletedInput {
  subscriptionId: string;
  location: string;
  configStoreName: string;
}
export const ConfigurationStoresGetDeletedInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/locations/{location}/deletedConfigurationStores/{configStoreName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresGetDeletedInput>;

// Output Schema
export interface ConfigurationStoresGetDeletedOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    configurationStoreId?: string;
    location?: string;
    deletionDate?: string;
    scheduledPurgeDate?: string;
    tags?: Record<string, string>;
    purgeProtectionEnabled?: boolean;
  };
}
export const ConfigurationStoresGetDeletedOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        configurationStoreId: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        deletionDate: Schema.optional(Schema.String),
        scheduledPurgeDate: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        purgeProtectionEnabled: Schema.optional(Schema.Boolean),
      }),
    ),
  }) as unknown as Schema.Codec<ConfigurationStoresGetDeletedOutput>;

// The operation
/**
 * Gets a deleted Azure app configuration store.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param location - The location in which uniqueness will be verified.
 * @param configStoreName - The name of the configuration store.
 */
export const ConfigurationStoresGetDeleted =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationStoresGetDeletedInput,
    outputSchema: ConfigurationStoresGetDeletedOutput,
  }));
// Input Schema
export interface ConfigurationStoresListInput {
  subscriptionId: string;
  $skipToken?: string;
}
export const ConfigurationStoresListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/configurationStores",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresListInput>;

// Output Schema
export interface ConfigurationStoresListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ConfigurationStoresListOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationStoresListOutput>;

// The operation
/**
 * Lists the configuration stores for a given subscription.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param api-version - The client API version.
 * @param $skipToken - A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
 */
export const ConfigurationStoresList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationStoresListInput,
  outputSchema: ConfigurationStoresListOutput,
}));
// Input Schema
export interface ConfigurationStoresListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $skipToken?: string;
}
export const ConfigurationStoresListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresListByResourceGroupInput>;

// Output Schema
export interface ConfigurationStoresListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ConfigurationStoresListByResourceGroupOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationStoresListByResourceGroupOutput>;

// The operation
/**
 * Lists the configuration stores for a given resource group.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param api-version - The client API version.
 * @param $skipToken - A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
 */
export const ConfigurationStoresListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationStoresListByResourceGroupInput,
    outputSchema: ConfigurationStoresListByResourceGroupOutput,
  }));
// Input Schema
export interface ConfigurationStoresListDeletedInput {
  subscriptionId: string;
}
export const ConfigurationStoresListDeletedInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/deletedConfigurationStores",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresListDeletedInput>;

// Output Schema
export interface ConfigurationStoresListDeletedOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      configurationStoreId?: string;
      location?: string;
      deletionDate?: string;
      scheduledPurgeDate?: string;
      tags?: Record<string, string>;
      purgeProtectionEnabled?: boolean;
    };
  }[];
  nextLink?: string;
}
export const ConfigurationStoresListDeletedOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              configurationStoreId: Schema.optional(Schema.String),
              location: Schema.optional(Schema.String),
              deletionDate: Schema.optional(Schema.String),
              scheduledPurgeDate: Schema.optional(Schema.String),
              tags: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              purgeProtectionEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationStoresListDeletedOutput>;

// The operation
/**
 * Gets information about the deleted configuration stores in a subscription.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 */
export const ConfigurationStoresListDeleted =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationStoresListDeletedInput,
    outputSchema: ConfigurationStoresListDeletedOutput,
  }));
// Input Schema
export interface ConfigurationStoresListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  $skipToken?: string;
}
export const ConfigurationStoresListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/listKeys",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresListKeysInput>;

// Output Schema
export interface ConfigurationStoresListKeysOutput {
  value?: {
    id?: string;
    name?: string;
    value?: string;
    connectionString?: Redacted.Redacted<string>;
    lastModified?: string;
    readOnly?: boolean;
  }[];
  nextLink?: string;
}
export const ConfigurationStoresListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
          connectionString: Schema.optional(SensitiveOutputString),
          lastModified: Schema.optional(Schema.String),
          readOnly: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationStoresListKeysOutput>;

// The operation
/**
 * Lists the access key for the specified configuration store.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param $skipToken - A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
 */
export const ConfigurationStoresListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationStoresListKeysInput,
  outputSchema: ConfigurationStoresListKeysOutput,
}));
// Input Schema
export interface ConfigurationStoresPurgeDeletedInput {
  subscriptionId: string;
  location: string;
  configStoreName: string;
}
export const ConfigurationStoresPurgeDeletedInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/locations/{location}/deletedConfigurationStores/{configStoreName}/purge",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresPurgeDeletedInput>;

// Output Schema
export type ConfigurationStoresPurgeDeletedOutput = void;
export const ConfigurationStoresPurgeDeletedOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationStoresPurgeDeletedOutput>;

// The operation
/**
 * Permanently deletes the specified configuration store.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param location - The location in which uniqueness will be verified.
 * @param configStoreName - The name of the configuration store.
 */
export const ConfigurationStoresPurgeDeleted =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationStoresPurgeDeletedInput,
    outputSchema: ConfigurationStoresPurgeDeletedOutput,
  }));
// Input Schema
export interface ConfigurationStoresRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  id?: string;
}
export const ConfigurationStoresRegenerateKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/regenerateKey",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresRegenerateKeyInput>;

// Output Schema
export interface ConfigurationStoresRegenerateKeyOutput {
  id?: string;
  name?: string;
  value?: string;
  connectionString?: Redacted.Redacted<string>;
  lastModified?: string;
  readOnly?: boolean;
}
export const ConfigurationStoresRegenerateKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    connectionString: Schema.optional(SensitiveOutputString),
    lastModified: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ConfigurationStoresRegenerateKeyOutput>;

// The operation
/**
 * Regenerates an access key for the specified configuration store.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 */
export const ConfigurationStoresRegenerateKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationStoresRegenerateKeyInput,
    outputSchema: ConfigurationStoresRegenerateKeyOutput,
  }));
// Input Schema
export interface ConfigurationStoresUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  properties?: {
    encryption?: {
      keyVaultProperties?: {
        keyIdentifier?: string;
        identityClientId?: string;
      };
    };
    disableLocalAuth?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled";
    enablePurgeProtection?: boolean;
    dataPlaneProxy?: {
      authenticationMode?: "Local" | "Pass-through";
      privateLinkDelegation?: "Enabled" | "Disabled";
    };
    defaultKeyValueRevisionRetentionPeriodInSeconds?: number;
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
    principalId?: string;
    tenantId?: string;
  };
  sku?: { name: string };
  tags?: Record<string, string>;
}
export const ConfigurationStoresUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        encryption: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyIdentifier: Schema.optional(Schema.String),
                identityClientId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        disableLocalAuth: Schema.optional(Schema.Boolean),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        enablePurgeProtection: Schema.optional(Schema.Boolean),
        dataPlaneProxy: Schema.optional(
          Schema.Struct({
            authenticationMode: Schema.optional(
              Schema.Literals(["Local", "Pass-through"]),
            ),
            privateLinkDelegation: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        defaultKeyValueRevisionRetentionPeriodInSeconds: Schema.optional(
          Schema.Number,
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
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
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationStoresUpdateInput>;

// Output Schema
export interface ConfigurationStoresUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationStoresUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationStoresUpdateOutput>;

// The operation
/**
 * Updates a configuration store with the specified parameters.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 */
export const ConfigurationStoresUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationStoresUpdateInput,
  outputSchema: ConfigurationStoresUpdateOutput,
}));
// Input Schema
export interface KeyValuesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  keyValueName: string;
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    key?: string;
    label?: string;
    value?: string;
    contentType?: string;
    eTag?: string;
    lastModified?: string;
    locked?: boolean;
    tags?: Record<string, string>;
  };
}
export const KeyValuesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
    keyValueName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        key: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
        contentType: Schema.optional(Schema.String),
        eTag: Schema.optional(Schema.String),
        lastModified: Schema.optional(Schema.String),
        locked: Schema.optional(Schema.Boolean),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/keyValues/{keyValueName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<KeyValuesCreateOrUpdateInput>;

// Output Schema
export interface KeyValuesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    key?: string;
    label?: string;
    value?: string;
    contentType?: string;
    eTag?: string;
    lastModified?: string;
    locked?: boolean;
    tags?: Record<string, string>;
  };
}
export const KeyValuesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        key: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
        contentType: Schema.optional(Schema.String),
        eTag: Schema.optional(Schema.String),
        lastModified: Schema.optional(Schema.String),
        locked: Schema.optional(Schema.Boolean),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<KeyValuesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a key-value. NOTE: This operation is intended for use in ARM Template deployments. For all other scenarios involving App Configuration key-values the data plane API should be used instead.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param keyValueName - Identifier of key and label combination. Key and label are joined by $ character. Label is optional.
 */
export const KeyValuesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: KeyValuesCreateOrUpdateInput,
  outputSchema: KeyValuesCreateOrUpdateOutput,
}));
// Input Schema
export interface KeyValuesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  keyValueName: string;
}
export const KeyValuesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  configStoreName: Schema.String.pipe(T.PathParam()),
  keyValueName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/keyValues/{keyValueName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<KeyValuesDeleteInput>;

// Output Schema
export type KeyValuesDeleteOutput = void;
export const KeyValuesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<KeyValuesDeleteOutput>;

// The operation
/**
 * Deletes a key-value. NOTE: This operation is intended for use in ARM Template deployments. For all other scenarios involving App Configuration key-values the data plane API should be used instead.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param keyValueName - Identifier of key and label combination. Key and label are joined by $ character. Label is optional.
 */
export const KeyValuesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: KeyValuesDeleteInput,
  outputSchema: KeyValuesDeleteOutput,
}));
// Input Schema
export interface KeyValuesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  keyValueName: string;
}
export const KeyValuesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  configStoreName: Schema.String.pipe(T.PathParam()),
  keyValueName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/keyValues/{keyValueName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<KeyValuesGetInput>;

// Output Schema
export interface KeyValuesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    key?: string;
    label?: string;
    value?: string;
    contentType?: string;
    eTag?: string;
    lastModified?: string;
    locked?: boolean;
    tags?: Record<string, string>;
  };
}
export const KeyValuesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      key: Schema.optional(Schema.String),
      label: Schema.optional(Schema.String),
      value: Schema.optional(Schema.String),
      contentType: Schema.optional(Schema.String),
      eTag: Schema.optional(Schema.String),
      lastModified: Schema.optional(Schema.String),
      locked: Schema.optional(Schema.Boolean),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ),
}) as unknown as Schema.Codec<KeyValuesGetOutput>;

// The operation
/**
 * Gets the properties of the specified key-value. NOTE: This operation is intended for use in ARM Template deployments. For all other scenarios involving App Configuration key-values the data plane API should be used instead.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param keyValueName - Identifier of key and label combination. Key and label are joined by $ character. Label is optional.
 */
export const KeyValuesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: KeyValuesGetInput,
  outputSchema: KeyValuesGetOutput,
}));
// Input Schema
export interface OperationsCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  type: "Microsoft.AppConfiguration/configurationStores";
}
export const OperationsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.AppConfiguration/configurationStores"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/checkNameAvailability",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<OperationsCheckNameAvailabilityInput>;

// Output Schema
export interface OperationsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  message?: string;
  reason?: string;
}
export const OperationsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OperationsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks whether the configuration store name is available for use.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param api-version - The client API version.
 */
export const OperationsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OperationsCheckNameAvailabilityInput,
    outputSchema: OperationsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface OperationsListInput {
  $skipToken?: string;
}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AppConfiguration/operations",
    apiVersion: "2024-06-01",
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
    origin?: string;
    properties?: {
      serviceSpecification?: {
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
        }[];
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          internalMetricName?: string;
          dimensions?: {
            name?: string;
            displayName?: string;
            internalName?: string;
          }[];
          fillGapWithZero?: boolean;
        }[];
      };
    };
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
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            serviceSpecification: Schema.optional(
              Schema.Struct({
                logSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      blobDuration: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      internalMetricName: Schema.optional(Schema.String),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                            internalName: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      fillGapWithZero: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists the operations available from this provider.
 *
 * @param api-version - The client API version.
 * @param $skipToken - A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationsRegionalCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name: string;
  type: "Microsoft.AppConfiguration/configurationStores";
}
export const OperationsRegionalCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.AppConfiguration/configurationStores"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/locations/{location}/checkNameAvailability",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<OperationsRegionalCheckNameAvailabilityInput>;

// Output Schema
export interface OperationsRegionalCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  message?: string;
  reason?: string;
}
export const OperationsRegionalCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OperationsRegionalCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks whether the configuration store name is available for use.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param location - The location in which uniqueness will be verified.
 * @param api-version - The client API version.
 */
export const OperationsRegionalCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OperationsRegionalCheckNameAvailabilityInput,
    outputSchema: OperationsRegionalCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  privateEndpointConnectionName: string;
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: "None" | "Recreate";
    };
  };
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
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
          actionsRequired: Schema.optional(
            Schema.Literals(["None", "Recreate"]),
          ),
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: "None" | "Recreate";
    };
  };
}
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
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
          actionsRequired: Schema.optional(
            Schema.Literals(["None", "Recreate"]),
          ),
        }),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of the specified private endpoint connection associated with the configuration store. This operation cannot be used to create a private endpoint connection. Private endpoint connections must be created with the Network resource provider.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param privateEndpointConnectionName - Private endpoint connection name
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param privateEndpointConnectionName - Private endpoint connection name
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: "None" | "Recreate";
    };
  };
}
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
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
          actionsRequired: Schema.optional(
            Schema.Literals(["None", "Recreate"]),
          ),
        }),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the configuration store.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param privateEndpointConnectionName - Private endpoint connection name
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByConfigurationStoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
}
export const PrivateEndpointConnectionsListByConfigurationStoreInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateEndpointConnections",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByConfigurationStoreInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByConfigurationStoreOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      provisioningState?:
        | "Creating"
        | "Updating"
        | "Deleting"
        | "Succeeded"
        | "Failed"
        | "Canceled";
      privateEndpoint?: { id?: string };
      privateLinkServiceConnectionState: {
        status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
        description?: string;
        actionsRequired?: "None" | "Recreate";
      };
    };
  }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsListByConfigurationStoreOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Creating",
                  "Updating",
                  "Deleting",
                  "Succeeded",
                  "Failed",
                  "Canceled",
                ]),
              ),
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
                actionsRequired: Schema.optional(
                  Schema.Literals(["None", "Recreate"]),
                ),
              }),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByConfigurationStoreOutput>;

// The operation
/**
 * Lists all private endpoint connections for a configuration store.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 */
export const PrivateEndpointConnectionsListByConfigurationStore =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByConfigurationStoreInput,
    outputSchema: PrivateEndpointConnectionsListByConfigurationStoreOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  groupName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateLinkResources/{groupName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    groupId?: string;
    requiredMembers?: string[];
    requiredZoneNames?: string[];
  };
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        groupId: Schema.optional(Schema.String),
        requiredMembers: Schema.optional(Schema.Array(Schema.String)),
        requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets a private link resource that need to be created for a configuration store.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param groupName - The name of the private link resource group.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListByConfigurationStoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
}
export const PrivateLinkResourcesListByConfigurationStoreInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateLinkResources",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByConfigurationStoreInput>;

// Output Schema
export interface PrivateLinkResourcesListByConfigurationStoreOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      groupId?: string;
      requiredMembers?: string[];
      requiredZoneNames?: string[];
    };
  }[];
  nextLink?: string;
}
export const PrivateLinkResourcesListByConfigurationStoreOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              groupId: Schema.optional(Schema.String),
              requiredMembers: Schema.optional(Schema.Array(Schema.String)),
              requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByConfigurationStoreOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a configuration store.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 */
export const PrivateLinkResourcesListByConfigurationStore =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByConfigurationStoreInput,
    outputSchema: PrivateLinkResourcesListByConfigurationStoreOutput,
  }));
// Input Schema
export interface ReplicasCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  replicaName: string;
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    endpoint?: string;
    provisioningState?:
      | "Creating"
      | "Succeeded"
      | "Deleting"
      | "Failed"
      | "Canceled";
  };
}
export const ReplicasCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  configStoreName: Schema.String.pipe(T.PathParam()),
  replicaName: Schema.String.pipe(T.PathParam()),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      endpoint: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Succeeded",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/replicas/{replicaName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<ReplicasCreateInput>;

// Output Schema
export interface ReplicasCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    endpoint?: string;
    provisioningState?:
      | "Creating"
      | "Succeeded"
      | "Deleting"
      | "Failed"
      | "Canceled";
  };
}
export const ReplicasCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      endpoint: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Succeeded",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
    }),
  ),
}) as unknown as Schema.Codec<ReplicasCreateOutput>;

// The operation
/**
 * Creates a replica with the specified parameters.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param replicaName - The name of the replica.
 */
export const ReplicasCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReplicasCreateInput,
  outputSchema: ReplicasCreateOutput,
}));
// Input Schema
export interface ReplicasDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  replicaName: string;
}
export const ReplicasDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  configStoreName: Schema.String.pipe(T.PathParam()),
  replicaName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/replicas/{replicaName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<ReplicasDeleteInput>;

// Output Schema
export type ReplicasDeleteOutput = void;
export const ReplicasDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicasDeleteOutput>;

// The operation
/**
 * Deletes a replica.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param replicaName - The name of the replica.
 */
export const ReplicasDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReplicasDeleteInput,
  outputSchema: ReplicasDeleteOutput,
}));
// Input Schema
export interface ReplicasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  replicaName: string;
}
export const ReplicasGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  configStoreName: Schema.String.pipe(T.PathParam()),
  replicaName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/replicas/{replicaName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<ReplicasGetInput>;

// Output Schema
export interface ReplicasGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    endpoint?: string;
    provisioningState?:
      | "Creating"
      | "Succeeded"
      | "Deleting"
      | "Failed"
      | "Canceled";
  };
}
export const ReplicasGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      endpoint: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Succeeded",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
    }),
  ),
}) as unknown as Schema.Codec<ReplicasGetOutput>;

// The operation
/**
 * Gets the properties of the specified replica.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param replicaName - The name of the replica.
 */
export const ReplicasGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReplicasGetInput,
  outputSchema: ReplicasGetOutput,
}));
// Input Schema
export interface ReplicasListByConfigurationStoreInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  $skipToken?: string;
}
export const ReplicasListByConfigurationStoreInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configStoreName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/replicas",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<ReplicasListByConfigurationStoreInput>;

// Output Schema
export interface ReplicasListByConfigurationStoreOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    properties?: {
      endpoint?: string;
      provisioningState?:
        | "Creating"
        | "Succeeded"
        | "Deleting"
        | "Failed"
        | "Canceled";
    };
  }[];
  nextLink?: string;
}
export const ReplicasListByConfigurationStoreOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
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
              endpoint: Schema.optional(Schema.String),
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Creating",
                  "Succeeded",
                  "Deleting",
                  "Failed",
                  "Canceled",
                ]),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReplicasListByConfigurationStoreOutput>;

// The operation
/**
 * Lists the replicas for a given configuration store.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param configStoreName - The name of the configuration store.
 * @param api-version - The client API version.
 * @param $skipToken - A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
 */
export const ReplicasListByConfigurationStore =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ReplicasListByConfigurationStoreInput,
    outputSchema: ReplicasListByConfigurationStoreOutput,
  }));
// Input Schema
export interface SnapshotsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  snapshotName: string;
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    status?: "Provisioning" | "Ready" | "Archived" | "Failed";
    filters: { key: string; label?: string }[];
    compositionType?: "Key" | "Key_Label";
    created?: string;
    expires?: string;
    retentionPeriod?: number;
    size?: number;
    itemsCount?: number;
    tags?: Record<string, string>;
    etag?: string;
  };
}
export const SnapshotsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  configStoreName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Updating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
        ]),
      ),
      status: Schema.optional(
        Schema.Literals(["Provisioning", "Ready", "Archived", "Failed"]),
      ),
      filters: Schema.Array(
        Schema.Struct({
          key: Schema.String,
          label: Schema.optional(Schema.String),
        }),
      ),
      compositionType: Schema.optional(Schema.Literals(["Key", "Key_Label"])),
      created: Schema.optional(Schema.String),
      expires: Schema.optional(Schema.String),
      retentionPeriod: Schema.optional(Schema.Number),
      size: Schema.optional(Schema.Number),
      itemsCount: Schema.optional(Schema.Number),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      etag: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/snapshots/{snapshotName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<SnapshotsCreateInput>;

// Output Schema
export interface SnapshotsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    status?: "Provisioning" | "Ready" | "Archived" | "Failed";
    filters: { key: string; label?: string }[];
    compositionType?: "Key" | "Key_Label";
    created?: string;
    expires?: string;
    retentionPeriod?: number;
    size?: number;
    itemsCount?: number;
    tags?: Record<string, string>;
    etag?: string;
  };
}
export const SnapshotsCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Updating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
        ]),
      ),
      status: Schema.optional(
        Schema.Literals(["Provisioning", "Ready", "Archived", "Failed"]),
      ),
      filters: Schema.Array(
        Schema.Struct({
          key: Schema.String,
          label: Schema.optional(Schema.String),
        }),
      ),
      compositionType: Schema.optional(Schema.Literals(["Key", "Key_Label"])),
      created: Schema.optional(Schema.String),
      expires: Schema.optional(Schema.String),
      retentionPeriod: Schema.optional(Schema.Number),
      size: Schema.optional(Schema.Number),
      itemsCount: Schema.optional(Schema.Number),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      etag: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<SnapshotsCreateOutput>;

// The operation
/**
 * Creates a snapshot. NOTE: This operation is intended for use in Azure Resource Manager (ARM) Template deployments. For all other scenarios involving App Configuration snapshots the data plane API should be used instead.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configStoreName - The name of the configuration store.
 * @param snapshotName - The name of the snapshot.
 * @param api-version - The API version to use for this operation.
 */
export const SnapshotsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsCreateInput,
  outputSchema: SnapshotsCreateOutput,
}));
// Input Schema
export interface SnapshotsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configStoreName: string;
  snapshotName: string;
}
export const SnapshotsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  configStoreName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/snapshots/{snapshotName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<SnapshotsGetInput>;

// Output Schema
export interface SnapshotsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    status?: "Provisioning" | "Ready" | "Archived" | "Failed";
    filters: { key: string; label?: string }[];
    compositionType?: "Key" | "Key_Label";
    created?: string;
    expires?: string;
    retentionPeriod?: number;
    size?: number;
    itemsCount?: number;
    tags?: Record<string, string>;
    etag?: string;
  };
}
export const SnapshotsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Updating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
        ]),
      ),
      status: Schema.optional(
        Schema.Literals(["Provisioning", "Ready", "Archived", "Failed"]),
      ),
      filters: Schema.Array(
        Schema.Struct({
          key: Schema.String,
          label: Schema.optional(Schema.String),
        }),
      ),
      compositionType: Schema.optional(Schema.Literals(["Key", "Key_Label"])),
      created: Schema.optional(Schema.String),
      expires: Schema.optional(Schema.String),
      retentionPeriod: Schema.optional(Schema.Number),
      size: Schema.optional(Schema.Number),
      itemsCount: Schema.optional(Schema.Number),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      etag: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<SnapshotsGetOutput>;

// The operation
/**
 * Gets the properties of the specified snapshot. NOTE: This operation is intended for use in Azure Resource Manager (ARM) Template deployments. For all other scenarios involving App Configuration snapshots the data plane API should be used instead.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configStoreName - The name of the configuration store.
 * @param snapshotName - The name of the snapshot.
 * @param api-version - The API version to use for this operation.
 */
export const SnapshotsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsGetInput,
  outputSchema: SnapshotsGetOutput,
}));
