/**
 * Azure Containerregistry API
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
export interface CacheRulesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  cacheRuleName: string;
  properties?: {
    credentialSetResourceId?: string;
    sourceRepository?: string;
    targetRepository?: string;
    creationDate?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
}
export const CacheRulesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  cacheRuleName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      credentialSetResourceId: Schema.optional(Schema.String),
      sourceRepository: Schema.optional(Schema.String),
      targetRepository: Schema.optional(Schema.String),
      creationDate: Schema.optional(Schema.String),
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
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/cacheRules/{cacheRuleName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<CacheRulesCreateInput>;

// Output Schema
export interface CacheRulesCreateOutput {
  id?: string;
  name?: string;
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
export const CacheRulesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<CacheRulesCreateOutput>;

// The operation
/**
 * Creates a cache rule for a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param cacheRuleName - The name of the cache rule.
 */
export const CacheRulesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CacheRulesCreateInput,
  outputSchema: CacheRulesCreateOutput,
}));
// Input Schema
export interface CacheRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  cacheRuleName: string;
}
export const CacheRulesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  cacheRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/cacheRules/{cacheRuleName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<CacheRulesDeleteInput>;

// Output Schema
export type CacheRulesDeleteOutput = void;
export const CacheRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CacheRulesDeleteOutput>;

// The operation
/**
 * Deletes a cache rule resource from a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param cacheRuleName - The name of the cache rule.
 */
export const CacheRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CacheRulesDeleteInput,
  outputSchema: CacheRulesDeleteOutput,
}));
// Input Schema
export interface CacheRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  cacheRuleName: string;
}
export const CacheRulesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  cacheRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/cacheRules/{cacheRuleName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<CacheRulesGetInput>;

// Output Schema
export interface CacheRulesGetOutput {
  id?: string;
  name?: string;
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
export const CacheRulesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CacheRulesGetOutput>;

// The operation
/**
 * Gets the properties of the specified cache rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param cacheRuleName - The name of the cache rule.
 */
export const CacheRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CacheRulesGetInput,
  outputSchema: CacheRulesGetOutput,
}));
// Input Schema
export interface CacheRulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const CacheRulesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/cacheRules",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<CacheRulesListInput>;

// Output Schema
export interface CacheRulesListOutput {
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
export const CacheRulesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CacheRulesListOutput>;

// The operation
/**
 * Lists all cache rule resources for the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const CacheRulesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CacheRulesListInput,
  outputSchema: CacheRulesListOutput,
}));
// Input Schema
export interface CacheRulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  cacheRuleName: string;
  properties?: { credentialSetResourceId?: string };
}
export const CacheRulesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  cacheRuleName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      credentialSetResourceId: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/cacheRules/{cacheRuleName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<CacheRulesUpdateInput>;

// Output Schema
export interface CacheRulesUpdateOutput {
  id?: string;
  name?: string;
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
export const CacheRulesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<CacheRulesUpdateOutput>;

// The operation
/**
 * Updates a cache rule for a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param cacheRuleName - The name of the cache rule.
 */
export const CacheRulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CacheRulesUpdateInput,
  outputSchema: CacheRulesUpdateOutput,
}));
// Input Schema
export interface ConnectedRegistriesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  connectedRegistryName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    mode: "ReadWrite" | "ReadOnly" | "Registry" | "Mirror";
    version?: string;
    connectionState?: "Online" | "Offline" | "Syncing" | "Unhealthy";
    lastActivityTime?: string;
    activation?: { status?: "Active" | "Inactive" };
    parent: {
      id?: string;
      syncProperties: {
        tokenId: string;
        schedule?: string;
        syncWindow?: string;
        messageTtl: string;
        lastSyncTime?: string;
        gatewayEndpoint?: string;
      };
    };
    clientTokenIds?: string[];
    loginServer?: {
      host?: string;
      tls?: {
        status?: "Enabled" | "Disabled";
        certificate?: { type?: "LocalDirectory"; location?: string };
      };
    };
    logging?: {
      logLevel?: "Debug" | "Information" | "Warning" | "Error" | "None";
      auditLogStatus?: "Enabled" | "Disabled";
    };
    statusDetails?: {
      type?: string;
      code?: string;
      description?: string;
      timestamp?: string;
      correlationId?: string;
    }[];
    notificationsList?: string[];
    garbageCollection?: { enabled?: boolean; schedule?: string };
  };
}
export const ConnectedRegistriesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    connectedRegistryName: Schema.String.pipe(T.PathParam()),
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
        mode: Schema.Literals(["ReadWrite", "ReadOnly", "Registry", "Mirror"]),
        version: Schema.optional(Schema.String),
        connectionState: Schema.optional(
          Schema.Literals(["Online", "Offline", "Syncing", "Unhealthy"]),
        ),
        lastActivityTime: Schema.optional(Schema.String),
        activation: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.Literals(["Active", "Inactive"])),
          }),
        ),
        parent: Schema.Struct({
          id: Schema.optional(Schema.String),
          syncProperties: Schema.Struct({
            tokenId: Schema.String,
            schedule: Schema.optional(Schema.String),
            syncWindow: Schema.optional(Schema.String),
            messageTtl: Schema.String,
            lastSyncTime: Schema.optional(Schema.String),
            gatewayEndpoint: Schema.optional(Schema.String),
          }),
        }),
        clientTokenIds: Schema.optional(Schema.Array(Schema.String)),
        loginServer: Schema.optional(
          Schema.Struct({
            host: Schema.optional(Schema.String),
            tls: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                certificate: Schema.optional(
                  Schema.Struct({
                    type: Schema.optional(Schema.Literals(["LocalDirectory"])),
                    location: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        logging: Schema.optional(
          Schema.Struct({
            logLevel: Schema.optional(
              Schema.Literals([
                "Debug",
                "Information",
                "Warning",
                "Error",
                "None",
              ]),
            ),
            auditLogStatus: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        statusDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              code: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              timestamp: Schema.optional(Schema.String),
              correlationId: Schema.optional(Schema.String),
            }),
          ),
        ),
        notificationsList: Schema.optional(Schema.Array(Schema.String)),
        garbageCollection: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            schedule: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/connectedRegistries/{connectedRegistryName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ConnectedRegistriesCreateInput>;

// Output Schema
export interface ConnectedRegistriesCreateOutput {
  id?: string;
  name?: string;
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
export const ConnectedRegistriesCreateOutput =
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
  }) as unknown as Schema.Codec<ConnectedRegistriesCreateOutput>;

// The operation
/**
 * Creates a connected registry for a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param connectedRegistryName - The name of the connected registry.
 */
export const ConnectedRegistriesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectedRegistriesCreateInput,
    outputSchema: ConnectedRegistriesCreateOutput,
  }),
);
// Input Schema
export interface ConnectedRegistriesDeactivateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  connectedRegistryName: string;
}
export const ConnectedRegistriesDeactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    connectedRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/connectedRegistries/{connectedRegistryName}/deactivate",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ConnectedRegistriesDeactivateInput>;

// Output Schema
export type ConnectedRegistriesDeactivateOutput = void;
export const ConnectedRegistriesDeactivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectedRegistriesDeactivateOutput>;

// The operation
/**
 * Deactivates the connected registry instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param connectedRegistryName - The name of the connected registry.
 */
export const ConnectedRegistriesDeactivate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectedRegistriesDeactivateInput,
    outputSchema: ConnectedRegistriesDeactivateOutput,
  }));
// Input Schema
export interface ConnectedRegistriesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  connectedRegistryName: string;
}
export const ConnectedRegistriesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    connectedRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/connectedRegistries/{connectedRegistryName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ConnectedRegistriesDeleteInput>;

// Output Schema
export type ConnectedRegistriesDeleteOutput = void;
export const ConnectedRegistriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectedRegistriesDeleteOutput>;

// The operation
/**
 * Deletes a connected registry from a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param connectedRegistryName - The name of the connected registry.
 */
export const ConnectedRegistriesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectedRegistriesDeleteInput,
    outputSchema: ConnectedRegistriesDeleteOutput,
  }),
);
// Input Schema
export interface ConnectedRegistriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  connectedRegistryName: string;
}
export const ConnectedRegistriesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    connectedRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/connectedRegistries/{connectedRegistryName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ConnectedRegistriesGetInput>;

// Output Schema
export interface ConnectedRegistriesGetOutput {
  id?: string;
  name?: string;
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
export const ConnectedRegistriesGetOutput =
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
  }) as unknown as Schema.Codec<ConnectedRegistriesGetOutput>;

// The operation
/**
 * Gets the properties of the connected registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param connectedRegistryName - The name of the connected registry.
 */
export const ConnectedRegistriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectedRegistriesGetInput,
    outputSchema: ConnectedRegistriesGetOutput,
  }),
);
// Input Schema
export interface ConnectedRegistriesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  $filter?: string;
}
export const ConnectedRegistriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/connectedRegistries",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ConnectedRegistriesListInput>;

// Output Schema
export interface ConnectedRegistriesListOutput {
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
export const ConnectedRegistriesListOutput =
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
  }) as unknown as Schema.Codec<ConnectedRegistriesListOutput>;

// The operation
/**
 * Lists all connected registries for the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param $filter - An OData filter expression that describes a subset of connectedRegistries to return. The parameters that can be filtered are parent.id (the resource id of the connectedRegistry parent), mode, and connectionState. The supported operator is eq.
 */
export const ConnectedRegistriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectedRegistriesListInput,
    outputSchema: ConnectedRegistriesListOutput,
  }),
);
// Input Schema
export interface ConnectedRegistriesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  connectedRegistryName: string;
  properties?: {
    syncProperties?: {
      schedule?: string;
      syncWindow?: string;
      messageTtl?: string;
    };
    logging?: {
      logLevel?: "Debug" | "Information" | "Warning" | "Error" | "None";
      auditLogStatus?: "Enabled" | "Disabled";
    };
    clientTokenIds?: string[];
    notificationsList?: string[];
    garbageCollection?: { enabled?: boolean; schedule?: string };
  };
}
export const ConnectedRegistriesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    connectedRegistryName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        syncProperties: Schema.optional(
          Schema.Struct({
            schedule: Schema.optional(Schema.String),
            syncWindow: Schema.optional(Schema.String),
            messageTtl: Schema.optional(Schema.String),
          }),
        ),
        logging: Schema.optional(
          Schema.Struct({
            logLevel: Schema.optional(
              Schema.Literals([
                "Debug",
                "Information",
                "Warning",
                "Error",
                "None",
              ]),
            ),
            auditLogStatus: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        clientTokenIds: Schema.optional(Schema.Array(Schema.String)),
        notificationsList: Schema.optional(Schema.Array(Schema.String)),
        garbageCollection: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            schedule: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/connectedRegistries/{connectedRegistryName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ConnectedRegistriesUpdateInput>;

// Output Schema
export interface ConnectedRegistriesUpdateOutput {
  id?: string;
  name?: string;
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
export const ConnectedRegistriesUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectedRegistriesUpdateOutput>;

// The operation
/**
 * Updates a connected registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param connectedRegistryName - The name of the connected registry.
 */
export const ConnectedRegistriesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectedRegistriesUpdateInput,
    outputSchema: ConnectedRegistriesUpdateOutput,
  }),
);
// Input Schema
export interface CredentialSetsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  credentialSetName: string;
  properties?: {
    loginServer?: string;
    authCredentials?: {
      name?: "Credential1";
      usernameSecretIdentifier?: string;
      passwordSecretIdentifier?: string | Redacted.Redacted<string>;
      credentialHealth?: {
        status?: "Healthy" | "Unhealthy";
        errorCode?: string;
        errorMessage?: string;
      };
    }[];
    creationDate?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
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
}
export const CredentialSetsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    credentialSetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        loginServer: Schema.optional(Schema.String),
        authCredentials: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.Literals(["Credential1"])),
              usernameSecretIdentifier: Schema.optional(Schema.String),
              passwordSecretIdentifier: Schema.optional(SensitiveString),
              credentialHealth: Schema.optional(
                Schema.Struct({
                  status: Schema.optional(
                    Schema.Literals(["Healthy", "Unhealthy"]),
                  ),
                  errorCode: Schema.optional(Schema.String),
                  errorMessage: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
        creationDate: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<CredentialSetsCreateInput>;

// Output Schema
export interface CredentialSetsCreateOutput {
  id?: string;
  name?: string;
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
export const CredentialSetsCreateOutput =
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
  }) as unknown as Schema.Codec<CredentialSetsCreateOutput>;

// The operation
/**
 * Creates a credential set for a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param credentialSetName - The name of the credential set.
 */
export const CredentialSetsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CredentialSetsCreateInput,
    outputSchema: CredentialSetsCreateOutput,
  }),
);
// Input Schema
export interface CredentialSetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  credentialSetName: string;
}
export const CredentialSetsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    credentialSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<CredentialSetsDeleteInput>;

// Output Schema
export type CredentialSetsDeleteOutput = void;
export const CredentialSetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CredentialSetsDeleteOutput>;

// The operation
/**
 * Deletes a credential set from a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param credentialSetName - The name of the credential set.
 */
export const CredentialSetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CredentialSetsDeleteInput,
    outputSchema: CredentialSetsDeleteOutput,
  }),
);
// Input Schema
export interface CredentialSetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  credentialSetName: string;
}
export const CredentialSetsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    credentialSetName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<CredentialSetsGetInput>;

// Output Schema
export interface CredentialSetsGetOutput {
  id?: string;
  name?: string;
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
export const CredentialSetsGetOutput =
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
  }) as unknown as Schema.Codec<CredentialSetsGetOutput>;

// The operation
/**
 * Gets the properties of the specified credential set resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param credentialSetName - The name of the credential set.
 */
export const CredentialSetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CredentialSetsGetInput,
  outputSchema: CredentialSetsGetOutput,
}));
// Input Schema
export interface CredentialSetsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const CredentialSetsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<CredentialSetsListInput>;

// Output Schema
export interface CredentialSetsListOutput {
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
export const CredentialSetsListOutput =
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
  }) as unknown as Schema.Codec<CredentialSetsListOutput>;

// The operation
/**
 * Lists all credential set resources for the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const CredentialSetsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CredentialSetsListInput,
  outputSchema: CredentialSetsListOutput,
}));
// Input Schema
export interface CredentialSetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  credentialSetName: string;
  properties?: {
    authCredentials?: {
      name?: "Credential1";
      usernameSecretIdentifier?: string;
      passwordSecretIdentifier?: string | Redacted.Redacted<string>;
      credentialHealth?: {
        status?: "Healthy" | "Unhealthy";
        errorCode?: string;
        errorMessage?: string;
      };
    }[];
  };
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
}
export const CredentialSetsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    credentialSetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        authCredentials: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.Literals(["Credential1"])),
              usernameSecretIdentifier: Schema.optional(Schema.String),
              passwordSecretIdentifier: Schema.optional(SensitiveString),
              credentialHealth: Schema.optional(
                Schema.Struct({
                  status: Schema.optional(
                    Schema.Literals(["Healthy", "Unhealthy"]),
                  ),
                  errorCode: Schema.optional(Schema.String),
                  errorMessage: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/credentialSets/{credentialSetName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<CredentialSetsUpdateInput>;

// Output Schema
export interface CredentialSetsUpdateOutput {
  id?: string;
  name?: string;
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
export const CredentialSetsUpdateOutput =
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
  }) as unknown as Schema.Codec<CredentialSetsUpdateOutput>;

// The operation
/**
 * Updates a credential set for a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param credentialSetName - The name of the credential set.
 */
export const CredentialSetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CredentialSetsUpdateInput,
    outputSchema: CredentialSetsUpdateOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ContainerRegistry/operations",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    origin?: string;
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          internalMetricName?: string;
        }[];
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
        }[];
      };
    };
    isDataAction?: boolean;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        origin: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
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
                      internalMetricName: Schema.optional(Schema.String),
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
        isDataAction: Schema.optional(Schema.Boolean),
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
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Approved" | "Pending" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: "None" | "Recreate";
    };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
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
                "Pending",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(
              Schema.Literals(["None", "Recreate"]),
            ),
          }),
        ),
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
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-11-01",
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
 * Update the state of specified private endpoint connection associated with the container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
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
  registryName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
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
  registryName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-11-01",
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
 * Get the specified private endpoint connection associated with the container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
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
  registryName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/privateEndpointConnections",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
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
export const PrivateEndpointConnectionsListOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List all private endpoint connections in a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface RegistriesCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  type: "Microsoft.ContainerRegistry/registries";
}
export const RegistriesCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.ContainerRegistry/registries"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerRegistry/checkNameAvailability",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RegistriesCheckNameAvailabilityInput>;

// Output Schema
export interface RegistriesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const RegistriesCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RegistriesCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks whether the container registry name is available for use. The name must contain only alphanumeric characters, be globally unique, and between 5 and 50 characters in length.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RegistriesCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistriesCheckNameAvailabilityInput,
    outputSchema: RegistriesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface RegistriesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  properties?: {
    loginServer?: string;
    creationDate?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    status?: { displayStatus?: string; message?: string; timestamp?: string };
    adminUserEnabled?: boolean;
    networkRuleSet?: {
      defaultAction: "Allow" | "Deny";
      ipRules?: { action?: "Allow"; value: string }[];
    };
    policies?: {
      quarantinePolicy?: { status?: "enabled" | "disabled" };
      trustPolicy?: { type?: "Notary"; status?: "enabled" | "disabled" };
      retentionPolicy?: {
        days?: number;
        lastUpdatedTime?: string;
        status?: "enabled" | "disabled";
      };
      exportPolicy?: { status?: "enabled" | "disabled" };
      azureADAuthenticationAsArmPolicy?: { status?: "enabled" | "disabled" };
    };
    encryption?: {
      status?: "enabled" | "disabled";
      keyVaultProperties?: {
        keyIdentifier?: string;
        versionedKeyIdentifier?: string;
        identity?: string;
        keyRotationEnabled?: boolean;
        lastKeyRotationTimestamp?: string;
      };
    };
    dataEndpointEnabled?: boolean;
    dataEndpointHostNames?: string[];
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
    networkRuleBypassOptions?: "AzureServices" | "None";
    networkRuleBypassAllowedForTasks?: boolean;
    zoneRedundancy?: "Enabled" | "Disabled";
    anonymousPullEnabled?: boolean;
    roleAssignmentMode?:
      | "AbacRepositoryPermissions"
      | "LegacyRegistryPermissions";
  };
  sku: {
    name: "Classic" | "Basic" | "Standard" | "Premium";
    tier?: "Classic" | "Basic" | "Standard" | "Premium";
  };
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
export const RegistriesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      loginServer: Schema.optional(Schema.String),
      creationDate: Schema.optional(Schema.String),
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
        Schema.Struct({
          displayStatus: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
        }),
      ),
      adminUserEnabled: Schema.optional(Schema.Boolean),
      networkRuleSet: Schema.optional(
        Schema.Struct({
          defaultAction: Schema.Literals(["Allow", "Deny"]),
          ipRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                action: Schema.optional(Schema.Literals(["Allow"])),
                value: Schema.String,
              }),
            ),
          ),
        }),
      ),
      policies: Schema.optional(
        Schema.Struct({
          quarantinePolicy: Schema.optional(
            Schema.Struct({
              status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            }),
          ),
          trustPolicy: Schema.optional(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["Notary"])),
              status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            }),
          ),
          retentionPolicy: Schema.optional(
            Schema.Struct({
              days: Schema.optional(Schema.Number),
              lastUpdatedTime: Schema.optional(Schema.String),
              status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            }),
          ),
          exportPolicy: Schema.optional(
            Schema.Struct({
              status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            }),
          ),
          azureADAuthenticationAsArmPolicy: Schema.optional(
            Schema.Struct({
              status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            }),
          ),
        }),
      ),
      encryption: Schema.optional(
        Schema.Struct({
          status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
          keyVaultProperties: Schema.optional(
            Schema.Struct({
              keyIdentifier: Schema.optional(Schema.String),
              versionedKeyIdentifier: Schema.optional(Schema.String),
              identity: Schema.optional(Schema.String),
              keyRotationEnabled: Schema.optional(Schema.Boolean),
              lastKeyRotationTimestamp: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      dataEndpointEnabled: Schema.optional(Schema.Boolean),
      dataEndpointHostNames: Schema.optional(Schema.Array(Schema.String)),
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
      networkRuleBypassOptions: Schema.optional(
        Schema.Literals(["AzureServices", "None"]),
      ),
      networkRuleBypassAllowedForTasks: Schema.optional(Schema.Boolean),
      zoneRedundancy: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      anonymousPullEnabled: Schema.optional(Schema.Boolean),
      roleAssignmentMode: Schema.optional(
        Schema.Literals([
          "AbacRepositoryPermissions",
          "LegacyRegistryPermissions",
        ]),
      ),
    }),
  ),
  sku: Schema.Struct({
    name: Schema.Literals(["Classic", "Basic", "Standard", "Premium"]),
    tier: Schema.optional(
      Schema.Literals(["Classic", "Basic", "Standard", "Premium"]),
    ),
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<RegistriesCreateInput>;

// Output Schema
export interface RegistriesCreateOutput {
  id?: string;
  name?: string;
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
export const RegistriesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<RegistriesCreateOutput>;

// The operation
/**
 * Creates a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const RegistriesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RegistriesCreateInput,
  outputSchema: RegistriesCreateOutput,
}));
// Input Schema
export interface RegistriesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const RegistriesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<RegistriesDeleteInput>;

// Output Schema
export type RegistriesDeleteOutput = void;
export const RegistriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistriesDeleteOutput>;

// The operation
/**
 * Deletes a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const RegistriesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RegistriesDeleteInput,
  outputSchema: RegistriesDeleteOutput,
}));
// Input Schema
export interface RegistriesGenerateCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  tokenId?: string;
  expiry?: string;
  name?: "password1" | "password2";
}
export const RegistriesGenerateCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    tokenId: Schema.optional(Schema.String),
    expiry: Schema.optional(Schema.String),
    name: Schema.optional(Schema.Literals(["password1", "password2"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/generateCredentials",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RegistriesGenerateCredentialsInput>;

// Output Schema
export interface RegistriesGenerateCredentialsOutput {
  username?: string;
  passwords?: {
    creationTime?: string;
    expiry?: string;
    name?: "password1" | "password2";
    value?: string;
  }[];
}
export const RegistriesGenerateCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    passwords: Schema.optional(
      Schema.Array(
        Schema.Struct({
          creationTime: Schema.optional(Schema.String),
          expiry: Schema.optional(Schema.String),
          name: Schema.optional(Schema.Literals(["password1", "password2"])),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RegistriesGenerateCredentialsOutput>;

// The operation
/**
 * Generate keys for a token of a specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const RegistriesGenerateCredentials =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistriesGenerateCredentialsInput,
    outputSchema: RegistriesGenerateCredentialsOutput,
  }));
// Input Schema
export interface RegistriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const RegistriesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<RegistriesGetInput>;

// Output Schema
export interface RegistriesGetOutput {
  id?: string;
  name?: string;
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
export const RegistriesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RegistriesGetOutput>;

// The operation
/**
 * Gets the properties of the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const RegistriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RegistriesGetInput,
  outputSchema: RegistriesGetOutput,
}));
// Input Schema
export interface RegistriesGetBuildSourceUploadUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const RegistriesGetBuildSourceUploadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/listBuildSourceUploadUrl",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<RegistriesGetBuildSourceUploadUrlInput>;

// Output Schema
export interface RegistriesGetBuildSourceUploadUrlOutput {
  uploadUrl?: string;
  relativePath?: string;
}
export const RegistriesGetBuildSourceUploadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uploadUrl: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RegistriesGetBuildSourceUploadUrlOutput>;

// The operation
/**
 * Get the upload location for the user to be able to upload the source.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 */
export const RegistriesGetBuildSourceUploadUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistriesGetBuildSourceUploadUrlInput,
    outputSchema: RegistriesGetBuildSourceUploadUrlOutput,
  }));
// Input Schema
export interface RegistriesGetPrivateLinkResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  groupName: string;
}
export const RegistriesGetPrivateLinkResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/privateLinkResources/{groupName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RegistriesGetPrivateLinkResourceInput>;

// Output Schema
export interface RegistriesGetPrivateLinkResourceOutput {
  id?: string;
  name?: string;
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
export const RegistriesGetPrivateLinkResourceOutput =
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
  }) as unknown as Schema.Codec<RegistriesGetPrivateLinkResourceOutput>;

// The operation
/**
 * Gets a private link resource by a specified group name for a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param groupName - The name of the private link associated with the Azure resource.
 */
export const RegistriesGetPrivateLinkResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistriesGetPrivateLinkResourceInput,
    outputSchema: RegistriesGetPrivateLinkResourceOutput,
  }));
// Input Schema
export interface RegistriesImportImageInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  source: {
    resourceId?: string;
    registryUri?: string;
    credentials?: {
      username?: string;
      password: string | Redacted.Redacted<string>;
    };
    sourceImage: string;
  };
  targetTags?: string[];
  untaggedTargetRepositories?: string[];
  mode?: "NoForce" | "Force";
}
export const RegistriesImportImageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    source: Schema.Struct({
      resourceId: Schema.optional(Schema.String),
      registryUri: Schema.optional(Schema.String),
      credentials: Schema.optional(
        Schema.Struct({
          username: Schema.optional(Schema.String),
          password: SensitiveString,
        }),
      ),
      sourceImage: Schema.String,
    }),
    targetTags: Schema.optional(Schema.Array(Schema.String)),
    untaggedTargetRepositories: Schema.optional(Schema.Array(Schema.String)),
    mode: Schema.optional(Schema.Literals(["NoForce", "Force"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/importImage",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RegistriesImportImageInput>;

// Output Schema
export type RegistriesImportImageOutput = void;
export const RegistriesImportImageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistriesImportImageOutput>;

// The operation
/**
 * Copies an image to this container registry from the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const RegistriesImportImage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegistriesImportImageInput,
    outputSchema: RegistriesImportImageOutput,
  }),
);
// Input Schema
export interface RegistriesListInput {
  subscriptionId: string;
}
export const RegistriesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerRegistry/registries",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<RegistriesListInput>;

// Output Schema
export interface RegistriesListOutput {
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
export const RegistriesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RegistriesListOutput>;

// The operation
/**
 * Lists all the container registries under the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RegistriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RegistriesListInput,
  outputSchema: RegistriesListOutput,
}));
// Input Schema
export interface RegistriesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const RegistriesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RegistriesListByResourceGroupInput>;

// Output Schema
export interface RegistriesListByResourceGroupOutput {
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
export const RegistriesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<RegistriesListByResourceGroupOutput>;

// The operation
/**
 * Lists all the container registries under the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const RegistriesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistriesListByResourceGroupInput,
    outputSchema: RegistriesListByResourceGroupOutput,
  }));
// Input Schema
export interface RegistriesListCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const RegistriesListCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/listCredentials",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RegistriesListCredentialsInput>;

// Output Schema
export interface RegistriesListCredentialsOutput {
  username?: string;
  passwords?: { name?: "password" | "password2"; value?: string }[];
}
export const RegistriesListCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    passwords: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.Literals(["password", "password2"])),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RegistriesListCredentialsOutput>;

// The operation
/**
 * Lists the login credentials for the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const RegistriesListCredentials = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegistriesListCredentialsInput,
    outputSchema: RegistriesListCredentialsOutput,
  }),
);
// Input Schema
export interface RegistriesListPrivateLinkResourcesInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const RegistriesListPrivateLinkResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/privateLinkResources",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RegistriesListPrivateLinkResourcesInput>;

// Output Schema
export interface RegistriesListPrivateLinkResourcesOutput {
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
export const RegistriesListPrivateLinkResourcesOutput =
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
  }) as unknown as Schema.Codec<RegistriesListPrivateLinkResourcesOutput>;

// The operation
/**
 * Lists the private link resources for a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const RegistriesListPrivateLinkResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistriesListPrivateLinkResourcesInput,
    outputSchema: RegistriesListPrivateLinkResourcesOutput,
  }));
// Input Schema
export interface RegistriesListUsagesInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const RegistriesListUsagesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/listUsages",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RegistriesListUsagesInput>;

// Output Schema
export interface RegistriesListUsagesOutput {
  value?: {
    name?: string;
    limit?: number;
    currentValue?: number;
    unit?: "Count" | "Bytes";
  }[];
}
export const RegistriesListUsagesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          limit: Schema.optional(Schema.Number),
          currentValue: Schema.optional(Schema.Number),
          unit: Schema.optional(Schema.Literals(["Count", "Bytes"])),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RegistriesListUsagesOutput>;

// The operation
/**
 * Gets the quota usages for the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const RegistriesListUsages = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegistriesListUsagesInput,
    outputSchema: RegistriesListUsagesOutput,
  }),
);
// Input Schema
export interface RegistriesRegenerateCredentialInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  name: "password" | "password2";
}
export const RegistriesRegenerateCredentialInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    name: Schema.Literals(["password", "password2"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/regenerateCredential",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<RegistriesRegenerateCredentialInput>;

// Output Schema
export interface RegistriesRegenerateCredentialOutput {
  username?: string;
  passwords?: { name?: "password" | "password2"; value?: string }[];
}
export const RegistriesRegenerateCredentialOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    passwords: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.Literals(["password", "password2"])),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RegistriesRegenerateCredentialOutput>;

// The operation
/**
 * Regenerates one of the login credentials for the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const RegistriesRegenerateCredential =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistriesRegenerateCredentialInput,
    outputSchema: RegistriesRegenerateCredentialOutput,
  }));
// Input Schema
export interface RegistriesScheduleRunInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  type: string;
  isArchiveEnabled?: boolean;
}
export const RegistriesScheduleRunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    type: Schema.String,
    isArchiveEnabled: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scheduleRun",
      apiVersion: "2019-04-01",
    }),
  ) as unknown as Schema.Codec<RegistriesScheduleRunInput>;

// Output Schema
export interface RegistriesScheduleRunOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RegistriesScheduleRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RegistriesScheduleRunOutput>;

// The operation
/**
 * Schedules a new run based on the request parameters and add it to the run queue.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 */
export const RegistriesScheduleRun = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegistriesScheduleRunInput,
    outputSchema: RegistriesScheduleRunOutput,
  }),
);
// Input Schema
export interface RegistriesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
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
  sku?: {
    name: "Classic" | "Basic" | "Standard" | "Premium";
    tier?: "Classic" | "Basic" | "Standard" | "Premium";
  };
  properties?: {
    adminUserEnabled?: boolean;
    networkRuleSet?: {
      defaultAction: "Allow" | "Deny";
      ipRules?: { action?: "Allow"; value: string }[];
    };
    policies?: {
      quarantinePolicy?: { status?: "enabled" | "disabled" };
      trustPolicy?: { type?: "Notary"; status?: "enabled" | "disabled" };
      retentionPolicy?: {
        days?: number;
        lastUpdatedTime?: string;
        status?: "enabled" | "disabled";
      };
      exportPolicy?: { status?: "enabled" | "disabled" };
      azureADAuthenticationAsArmPolicy?: { status?: "enabled" | "disabled" };
    };
    encryption?: {
      status?: "enabled" | "disabled";
      keyVaultProperties?: {
        keyIdentifier?: string;
        versionedKeyIdentifier?: string;
        identity?: string;
        keyRotationEnabled?: boolean;
        lastKeyRotationTimestamp?: string;
      };
    };
    dataEndpointEnabled?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled";
    networkRuleBypassOptions?: "AzureServices" | "None";
    networkRuleBypassAllowedForTasks?: boolean;
    anonymousPullEnabled?: boolean;
    roleAssignmentMode?:
      | "AbacRepositoryPermissions"
      | "LegacyRegistryPermissions";
  };
}
export const RegistriesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
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
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["Classic", "Basic", "Standard", "Premium"]),
      tier: Schema.optional(
        Schema.Literals(["Classic", "Basic", "Standard", "Premium"]),
      ),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      adminUserEnabled: Schema.optional(Schema.Boolean),
      networkRuleSet: Schema.optional(
        Schema.Struct({
          defaultAction: Schema.Literals(["Allow", "Deny"]),
          ipRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                action: Schema.optional(Schema.Literals(["Allow"])),
                value: Schema.String,
              }),
            ),
          ),
        }),
      ),
      policies: Schema.optional(
        Schema.Struct({
          quarantinePolicy: Schema.optional(
            Schema.Struct({
              status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            }),
          ),
          trustPolicy: Schema.optional(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["Notary"])),
              status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            }),
          ),
          retentionPolicy: Schema.optional(
            Schema.Struct({
              days: Schema.optional(Schema.Number),
              lastUpdatedTime: Schema.optional(Schema.String),
              status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            }),
          ),
          exportPolicy: Schema.optional(
            Schema.Struct({
              status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            }),
          ),
          azureADAuthenticationAsArmPolicy: Schema.optional(
            Schema.Struct({
              status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            }),
          ),
        }),
      ),
      encryption: Schema.optional(
        Schema.Struct({
          status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
          keyVaultProperties: Schema.optional(
            Schema.Struct({
              keyIdentifier: Schema.optional(Schema.String),
              versionedKeyIdentifier: Schema.optional(Schema.String),
              identity: Schema.optional(Schema.String),
              keyRotationEnabled: Schema.optional(Schema.Boolean),
              lastKeyRotationTimestamp: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      dataEndpointEnabled: Schema.optional(Schema.Boolean),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      networkRuleBypassOptions: Schema.optional(
        Schema.Literals(["AzureServices", "None"]),
      ),
      networkRuleBypassAllowedForTasks: Schema.optional(Schema.Boolean),
      anonymousPullEnabled: Schema.optional(Schema.Boolean),
      roleAssignmentMode: Schema.optional(
        Schema.Literals([
          "AbacRepositoryPermissions",
          "LegacyRegistryPermissions",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<RegistriesUpdateInput>;

// Output Schema
export interface RegistriesUpdateOutput {
  id?: string;
  name?: string;
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
export const RegistriesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<RegistriesUpdateOutput>;

// The operation
/**
 * Updates a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const RegistriesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RegistriesUpdateInput,
  outputSchema: RegistriesUpdateOutput,
}));
// Input Schema
export interface ReplicationsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  replicationName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    status?: { displayStatus?: string; message?: string; timestamp?: string };
    regionEndpointEnabled?: boolean;
    zoneRedundancy?: "Enabled" | "Disabled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const ReplicationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    replicationName: Schema.String.pipe(T.PathParam()),
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
          Schema.Struct({
            displayStatus: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            timestamp: Schema.optional(Schema.String),
          }),
        ),
        regionEndpointEnabled: Schema.optional(Schema.Boolean),
        zoneRedundancy: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/replications/{replicationName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ReplicationsCreateInput>;

// Output Schema
export interface ReplicationsCreateOutput {
  id?: string;
  name?: string;
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
export const ReplicationsCreateOutput =
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
  }) as unknown as Schema.Codec<ReplicationsCreateOutput>;

// The operation
/**
 * Creates a replication for a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param replicationName - The name of the replication.
 */
export const ReplicationsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReplicationsCreateInput,
  outputSchema: ReplicationsCreateOutput,
}));
// Input Schema
export interface ReplicationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  replicationName: string;
}
export const ReplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    replicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/replications/{replicationName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ReplicationsDeleteInput>;

// Output Schema
export type ReplicationsDeleteOutput = void;
export const ReplicationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ReplicationsDeleteOutput>;

// The operation
/**
 * Deletes a replication from a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param replicationName - The name of the replication.
 */
export const ReplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReplicationsDeleteInput,
  outputSchema: ReplicationsDeleteOutput,
}));
// Input Schema
export interface ReplicationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  replicationName: string;
}
export const ReplicationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  replicationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/replications/{replicationName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<ReplicationsGetInput>;

// Output Schema
export interface ReplicationsGetOutput {
  id?: string;
  name?: string;
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
export const ReplicationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ReplicationsGetOutput>;

// The operation
/**
 * Gets the properties of the specified replication.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param replicationName - The name of the replication.
 */
export const ReplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReplicationsGetInput,
  outputSchema: ReplicationsGetOutput,
}));
// Input Schema
export interface ReplicationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const ReplicationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/replications",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<ReplicationsListInput>;

// Output Schema
export interface ReplicationsListOutput {
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
export const ReplicationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<ReplicationsListOutput>;

// The operation
/**
 * Lists all the replications for the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const ReplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReplicationsListInput,
  outputSchema: ReplicationsListOutput,
}));
// Input Schema
export interface ReplicationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  replicationName: string;
  tags?: Record<string, string>;
  properties?: { regionEndpointEnabled?: boolean };
}
export const ReplicationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    replicationName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        regionEndpointEnabled: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/replications/{replicationName}",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<ReplicationsUpdateInput>;

// Output Schema
export interface ReplicationsUpdateOutput {
  id?: string;
  name?: string;
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
export const ReplicationsUpdateOutput =
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
  }) as unknown as Schema.Codec<ReplicationsUpdateOutput>;

// The operation
/**
 * Updates a replication for a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param replicationName - The name of the replication.
 */
export const ReplicationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReplicationsUpdateInput,
  outputSchema: ReplicationsUpdateOutput,
}));
// Input Schema
export interface RunsCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  runId: string;
}
export const RunsCancelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  runId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}/cancel",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<RunsCancelInput>;

// Output Schema
export type RunsCancelOutput = void;
export const RunsCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RunsCancelOutput>;

// The operation
/**
 * Cancel an existing run.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 * @param runId - The run ID.
 */
export const RunsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunsCancelInput,
  outputSchema: RunsCancelOutput,
}));
// Input Schema
export interface RunsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  runId: string;
}
export const RunsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  runId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<RunsGetInput>;

// Output Schema
export interface RunsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RunsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RunsGetOutput>;

// The operation
/**
 * Gets the detailed information for a given run.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 * @param runId - The run ID.
 */
export const RunsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunsGetInput,
  outputSchema: RunsGetOutput,
}));
// Input Schema
export interface RunsGetLogSasUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  runId: string;
}
export const RunsGetLogSasUrlInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  runId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}/listLogSasUrl",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<RunsGetLogSasUrlInput>;

// Output Schema
export interface RunsGetLogSasUrlOutput {
  logLink?: string;
}
export const RunsGetLogSasUrlOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    logLink: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<RunsGetLogSasUrlOutput>;

// The operation
/**
 * Gets a link to download the run logs.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 * @param runId - The run ID.
 */
export const RunsGetLogSasUrl = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunsGetLogSasUrlInput,
  outputSchema: RunsGetLogSasUrlOutput,
}));
// Input Schema
export interface RunsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  $filter?: string;
  $top?: number;
}
export const RunsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<RunsListInput>;

// Output Schema
export interface RunsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const RunsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RunsListOutput>;

// The operation
/**
 * Gets all the runs for a registry.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 * @param $filter - The runs filter to apply on the operation. Arithmetic operators are not supported. The allowed string function is 'contains'. All logical operators except 'Not', 'Has', 'All' are allowed.
 * @param $top - $top is supported for get list of runs, which limits the maximum number of runs to return.
 */
export const RunsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunsListInput,
  outputSchema: RunsListOutput,
}));
// Input Schema
export interface RunsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  runId: string;
  isArchiveEnabled?: boolean;
}
export const RunsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  runId: Schema.String.pipe(T.PathParam()),
  isArchiveEnabled: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<RunsUpdateInput>;

// Output Schema
export interface RunsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const RunsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RunsUpdateOutput>;

// The operation
/**
 * Patch the run properties.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 * @param runId - The run ID.
 */
export const RunsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunsUpdateInput,
  outputSchema: RunsUpdateOutput,
}));
// Input Schema
export interface ScopeMapsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  scopeMapName: string;
  properties?: {
    description?: string;
    type?: string;
    creationDate?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    actions: string[];
  };
}
export const ScopeMapsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  scopeMapName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      creationDate: Schema.optional(Schema.String),
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
      actions: Schema.Array(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<ScopeMapsCreateInput>;

// Output Schema
export interface ScopeMapsCreateOutput {
  id?: string;
  name?: string;
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
export const ScopeMapsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ScopeMapsCreateOutput>;

// The operation
/**
 * Creates a scope map for a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param scopeMapName - The name of the scope map.
 */
export const ScopeMapsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScopeMapsCreateInput,
  outputSchema: ScopeMapsCreateOutput,
}));
// Input Schema
export interface ScopeMapsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  scopeMapName: string;
}
export const ScopeMapsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  scopeMapName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<ScopeMapsDeleteInput>;

// Output Schema
export type ScopeMapsDeleteOutput = void;
export const ScopeMapsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ScopeMapsDeleteOutput>;

// The operation
/**
 * Deletes a scope map from a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param scopeMapName - The name of the scope map.
 */
export const ScopeMapsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScopeMapsDeleteInput,
  outputSchema: ScopeMapsDeleteOutput,
}));
// Input Schema
export interface ScopeMapsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  scopeMapName: string;
}
export const ScopeMapsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  scopeMapName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<ScopeMapsGetInput>;

// Output Schema
export interface ScopeMapsGetOutput {
  id?: string;
  name?: string;
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
export const ScopeMapsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ScopeMapsGetOutput>;

// The operation
/**
 * Gets the properties of the specified scope map.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param scopeMapName - The name of the scope map.
 */
export const ScopeMapsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScopeMapsGetInput,
  outputSchema: ScopeMapsGetOutput,
}));
// Input Schema
export interface ScopeMapsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const ScopeMapsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<ScopeMapsListInput>;

// Output Schema
export interface ScopeMapsListOutput {
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
export const ScopeMapsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ScopeMapsListOutput>;

// The operation
/**
 * Lists all the scope maps for the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const ScopeMapsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScopeMapsListInput,
  outputSchema: ScopeMapsListOutput,
}));
// Input Schema
export interface ScopeMapsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  scopeMapName: string;
  properties?: { description?: string; actions?: string[] };
}
export const ScopeMapsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  scopeMapName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      actions: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scopeMaps/{scopeMapName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<ScopeMapsUpdateInput>;

// Output Schema
export interface ScopeMapsUpdateOutput {
  id?: string;
  name?: string;
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
export const ScopeMapsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ScopeMapsUpdateOutput>;

// The operation
/**
 * Updates a scope map with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param scopeMapName - The name of the scope map.
 */
export const ScopeMapsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScopeMapsUpdateInput,
  outputSchema: ScopeMapsUpdateOutput,
}));
// Input Schema
export interface TasksCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  taskName: string;
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
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    creationDate?: string;
    status?: "Disabled" | "Enabled";
    platform: {
      os: "Windows" | "Linux";
      architecture?: "amd64" | "x86" | "arm";
      variant?: "v6" | "v7" | "v8";
    };
    agentConfiguration?: { cpu?: number };
    timeout?: number;
    step: {
      type: "Docker" | "FileTask" | "EncodedTask";
      baseImageDependencies?: {
        type?: "BuildTime" | "RunTime";
        registry?: string;
        repository?: string;
        tag?: string;
        digest?: string;
      }[];
      contextPath?: string;
      contextAccessToken?: string;
    };
    trigger?: {
      timerTriggers?: {
        schedule: string;
        status?: "Disabled" | "Enabled";
        name: string;
      }[];
      sourceTriggers?: {
        sourceRepository: {
          sourceControlType: "Github" | "VisualStudioTeamService";
          repositoryUrl: string;
          branch?: string;
          sourceControlAuthProperties?: {
            tokenType: "PAT" | "OAuth";
            token: string;
            refreshToken?: string | Redacted.Redacted<string>;
            scope?: string;
            expiresIn?: number;
          };
        };
        sourceTriggerEvents: ("commit" | "pullrequest")[];
        status?: "Disabled" | "Enabled";
        name: string;
      }[];
      baseImageTrigger?: {
        baseImageTriggerType: "All" | "Runtime";
        status?: "Disabled" | "Enabled";
        name: string;
      };
    };
    credentials?: {
      sourceRegistry?: { loginMode?: "None" | "Default" };
      customRegistries?: Record<
        string,
        {
          userName?: { value?: string; type?: "Opaque" | "Vaultsecret" };
          password?: { value?: string; type?: "Opaque" | "Vaultsecret" };
          identity?: string;
        }
      >;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const TasksCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
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
      status: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      platform: Schema.Struct({
        os: Schema.Literals(["Windows", "Linux"]),
        architecture: Schema.optional(Schema.Literals(["amd64", "x86", "arm"])),
        variant: Schema.optional(Schema.Literals(["v6", "v7", "v8"])),
      }),
      agentConfiguration: Schema.optional(
        Schema.Struct({
          cpu: Schema.optional(Schema.Number),
        }),
      ),
      timeout: Schema.optional(Schema.Number),
      step: Schema.Struct({
        type: Schema.Literals(["Docker", "FileTask", "EncodedTask"]),
        baseImageDependencies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["BuildTime", "RunTime"])),
              registry: Schema.optional(Schema.String),
              repository: Schema.optional(Schema.String),
              tag: Schema.optional(Schema.String),
              digest: Schema.optional(Schema.String),
            }),
          ),
        ),
        contextPath: Schema.optional(Schema.String),
        contextAccessToken: Schema.optional(Schema.String),
      }),
      trigger: Schema.optional(
        Schema.Struct({
          timerTriggers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                schedule: Schema.String,
                status: Schema.optional(
                  Schema.Literals(["Disabled", "Enabled"]),
                ),
                name: Schema.String,
              }),
            ),
          ),
          sourceTriggers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                sourceRepository: Schema.Struct({
                  sourceControlType: Schema.Literals([
                    "Github",
                    "VisualStudioTeamService",
                  ]),
                  repositoryUrl: Schema.String,
                  branch: Schema.optional(Schema.String),
                  sourceControlAuthProperties: Schema.optional(
                    Schema.Struct({
                      tokenType: Schema.Literals(["PAT", "OAuth"]),
                      token: Schema.String,
                      refreshToken: Schema.optional(SensitiveString),
                      scope: Schema.optional(Schema.String),
                      expiresIn: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
                sourceTriggerEvents: Schema.Array(
                  Schema.Literals(["commit", "pullrequest"]),
                ),
                status: Schema.optional(
                  Schema.Literals(["Disabled", "Enabled"]),
                ),
                name: Schema.String,
              }),
            ),
          ),
          baseImageTrigger: Schema.optional(
            Schema.Struct({
              baseImageTriggerType: Schema.Literals(["All", "Runtime"]),
              status: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
              name: Schema.String,
            }),
          ),
        }),
      ),
      credentials: Schema.optional(
        Schema.Struct({
          sourceRegistry: Schema.optional(
            Schema.Struct({
              loginMode: Schema.optional(Schema.Literals(["None", "Default"])),
            }),
          ),
          customRegistries: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                userName: Schema.optional(
                  Schema.Struct({
                    value: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals(["Opaque", "Vaultsecret"]),
                    ),
                  }),
                ),
                password: Schema.optional(
                  Schema.Struct({
                    value: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals(["Opaque", "Vaultsecret"]),
                    ),
                  }),
                ),
                identity: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<TasksCreateInput>;

// Output Schema
export interface TasksCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const TasksCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<TasksCreateOutput>;

// The operation
/**
 * Creates a task for a container registry with the specified parameters.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 * @param taskName - The name of the container registry task.
 */
export const TasksCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksCreateInput,
  outputSchema: TasksCreateOutput,
}));
// Input Schema
export interface TasksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  taskName: string;
}
export const TasksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<TasksDeleteInput>;

// Output Schema
export type TasksDeleteOutput = void;
export const TasksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TasksDeleteOutput>;

// The operation
/**
 * Deletes a specified task.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 * @param taskName - The name of the container registry task.
 */
export const TasksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksDeleteInput,
  outputSchema: TasksDeleteOutput,
}));
// Input Schema
export interface TasksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  taskName: string;
}
export const TasksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<TasksGetInput>;

// Output Schema
export interface TasksGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const TasksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<TasksGetOutput>;

// The operation
/**
 * Get the properties of a specified task.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 * @param taskName - The name of the container registry task.
 */
export const TasksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksGetInput,
  outputSchema: TasksGetOutput,
}));
// Input Schema
export interface TasksGetDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  taskName: string;
}
export const TasksGetDetailsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}/listDetails",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<TasksGetDetailsInput>;

// Output Schema
export interface TasksGetDetailsOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const TasksGetDetailsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<TasksGetDetailsOutput>;

// The operation
/**
 * Returns a task with extended information that includes all secrets.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 * @param taskName - The name of the container registry task.
 */
export const TasksGetDetails = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksGetDetailsInput,
  outputSchema: TasksGetDetailsOutput,
}));
// Input Schema
export interface TasksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const TasksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<TasksListInput>;

// Output Schema
export interface TasksListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const TasksListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.String,
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<TasksListOutput>;

// The operation
/**
 * Lists all the tasks for a specified container registry.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 */
export const TasksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksListInput,
  outputSchema: TasksListOutput,
}));
// Input Schema
export interface TasksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  taskName: string;
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
  properties?: {
    status?: "Disabled" | "Enabled";
    platform?: {
      os?: "Windows" | "Linux";
      architecture?: "amd64" | "x86" | "arm";
      variant?: "v6" | "v7" | "v8";
    };
    agentConfiguration?: { cpu?: number };
    timeout?: number;
    step?: {
      type: "Docker" | "FileTask" | "EncodedTask";
      contextPath?: string;
      contextAccessToken?: string;
    };
    trigger?: {
      timerTriggers?: {
        schedule?: string;
        status?: "Disabled" | "Enabled";
        name: string;
      }[];
      sourceTriggers?: {
        sourceRepository?: {
          sourceControlType?: "Github" | "VisualStudioTeamService";
          repositoryUrl?: string;
          branch?: string;
          sourceControlAuthProperties?: {
            tokenType?: "PAT" | "OAuth";
            token?: string;
            refreshToken?: string | Redacted.Redacted<string>;
            scope?: string;
            expiresIn?: number;
          };
        };
        sourceTriggerEvents?: ("commit" | "pullrequest")[];
        status?: "Disabled" | "Enabled";
        name: string;
      }[];
      baseImageTrigger?: {
        baseImageTriggerType?: "All" | "Runtime";
        status?: "Disabled" | "Enabled";
        name: string;
      };
    };
    credentials?: {
      sourceRegistry?: { loginMode?: "None" | "Default" };
      customRegistries?: Record<
        string,
        {
          userName?: { value?: string; type?: "Opaque" | "Vaultsecret" };
          password?: { value?: string; type?: "Opaque" | "Vaultsecret" };
          identity?: string;
        }
      >;
    };
  };
  tags?: Record<string, string>;
}
export const TasksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
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
  properties: Schema.optional(
    Schema.Struct({
      status: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      platform: Schema.optional(
        Schema.Struct({
          os: Schema.optional(Schema.Literals(["Windows", "Linux"])),
          architecture: Schema.optional(
            Schema.Literals(["amd64", "x86", "arm"]),
          ),
          variant: Schema.optional(Schema.Literals(["v6", "v7", "v8"])),
        }),
      ),
      agentConfiguration: Schema.optional(
        Schema.Struct({
          cpu: Schema.optional(Schema.Number),
        }),
      ),
      timeout: Schema.optional(Schema.Number),
      step: Schema.optional(
        Schema.Struct({
          type: Schema.Literals(["Docker", "FileTask", "EncodedTask"]),
          contextPath: Schema.optional(Schema.String),
          contextAccessToken: Schema.optional(Schema.String),
        }),
      ),
      trigger: Schema.optional(
        Schema.Struct({
          timerTriggers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                schedule: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Literals(["Disabled", "Enabled"]),
                ),
                name: Schema.String,
              }),
            ),
          ),
          sourceTriggers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                sourceRepository: Schema.optional(
                  Schema.Struct({
                    sourceControlType: Schema.optional(
                      Schema.Literals(["Github", "VisualStudioTeamService"]),
                    ),
                    repositoryUrl: Schema.optional(Schema.String),
                    branch: Schema.optional(Schema.String),
                    sourceControlAuthProperties: Schema.optional(
                      Schema.Struct({
                        tokenType: Schema.optional(
                          Schema.Literals(["PAT", "OAuth"]),
                        ),
                        token: Schema.optional(Schema.String),
                        refreshToken: Schema.optional(SensitiveString),
                        scope: Schema.optional(Schema.String),
                        expiresIn: Schema.optional(Schema.Number),
                      }),
                    ),
                  }),
                ),
                sourceTriggerEvents: Schema.optional(
                  Schema.Array(Schema.Literals(["commit", "pullrequest"])),
                ),
                status: Schema.optional(
                  Schema.Literals(["Disabled", "Enabled"]),
                ),
                name: Schema.String,
              }),
            ),
          ),
          baseImageTrigger: Schema.optional(
            Schema.Struct({
              baseImageTriggerType: Schema.optional(
                Schema.Literals(["All", "Runtime"]),
              ),
              status: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
              name: Schema.String,
            }),
          ),
        }),
      ),
      credentials: Schema.optional(
        Schema.Struct({
          sourceRegistry: Schema.optional(
            Schema.Struct({
              loginMode: Schema.optional(Schema.Literals(["None", "Default"])),
            }),
          ),
          customRegistries: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                userName: Schema.optional(
                  Schema.Struct({
                    value: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals(["Opaque", "Vaultsecret"]),
                    ),
                  }),
                ),
                password: Schema.optional(
                  Schema.Struct({
                    value: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals(["Opaque", "Vaultsecret"]),
                    ),
                  }),
                ),
                identity: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}",
    apiVersion: "2019-04-01",
  }),
) as unknown as Schema.Codec<TasksUpdateInput>;

// Output Schema
export interface TasksUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const TasksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<TasksUpdateOutput>;

// The operation
/**
 * Updates a task with the specified parameters.
 *
 * @param subscriptionId - The Microsoft Azure subscription ID.
 * @param resourceGroupName - The name of the resource group to which the container registry belongs.
 * @param registryName - The name of the container registry.
 * @param api-version - The client API version.
 * @param taskName - The name of the container registry task.
 */
export const TasksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksUpdateInput,
  outputSchema: TasksUpdateOutput,
}));
// Input Schema
export interface TokensCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  tokenName: string;
  properties?: {
    creationDate?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    scopeMapId?: string;
    credentials?: {
      certificates?: {
        name?: "certificate1" | "certificate2";
        expiry?: string;
        thumbprint?: string;
        encodedPemCertificate?: string;
      }[];
      passwords?: {
        creationTime?: string;
        expiry?: string;
        name?: "password1" | "password2";
        value?: string;
      }[];
    };
    status?: "enabled" | "disabled";
  };
}
export const TokensCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  tokenName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      creationDate: Schema.optional(Schema.String),
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
      scopeMapId: Schema.optional(Schema.String),
      credentials: Schema.optional(
        Schema.Struct({
          certificates: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(
                  Schema.Literals(["certificate1", "certificate2"]),
                ),
                expiry: Schema.optional(Schema.String),
                thumbprint: Schema.optional(Schema.String),
                encodedPemCertificate: Schema.optional(Schema.String),
              }),
            ),
          ),
          passwords: Schema.optional(
            Schema.Array(
              Schema.Struct({
                creationTime: Schema.optional(Schema.String),
                expiry: Schema.optional(Schema.String),
                name: Schema.optional(
                  Schema.Literals(["password1", "password2"]),
                ),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<TokensCreateInput>;

// Output Schema
export interface TokensCreateOutput {
  id?: string;
  name?: string;
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
export const TokensCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TokensCreateOutput>;

// The operation
/**
 * Creates a token for a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param tokenName - The name of the token.
 */
export const TokensCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TokensCreateInput,
  outputSchema: TokensCreateOutput,
}));
// Input Schema
export interface TokensDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  tokenName: string;
}
export const TokensDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  tokenName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<TokensDeleteInput>;

// Output Schema
export type TokensDeleteOutput = void;
export const TokensDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TokensDeleteOutput>;

// The operation
/**
 * Deletes a token from a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param tokenName - The name of the token.
 */
export const TokensDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TokensDeleteInput,
  outputSchema: TokensDeleteOutput,
}));
// Input Schema
export interface TokensGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  tokenName: string;
}
export const TokensGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  tokenName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<TokensGetInput>;

// Output Schema
export interface TokensGetOutput {
  id?: string;
  name?: string;
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
export const TokensGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TokensGetOutput>;

// The operation
/**
 * Gets the properties of the specified token.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param tokenName - The name of the token.
 */
export const TokensGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TokensGetInput,
  outputSchema: TokensGetOutput,
}));
// Input Schema
export interface TokensListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const TokensListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<TokensListInput>;

// Output Schema
export interface TokensListOutput {
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
export const TokensListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TokensListOutput>;

// The operation
/**
 * Lists all the tokens for the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const TokensList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TokensListInput,
  outputSchema: TokensListOutput,
}));
// Input Schema
export interface TokensUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  tokenName: string;
  properties?: {
    scopeMapId?: string;
    status?: "enabled" | "disabled";
    credentials?: {
      certificates?: {
        name?: "certificate1" | "certificate2";
        expiry?: string;
        thumbprint?: string;
        encodedPemCertificate?: string;
      }[];
      passwords?: {
        creationTime?: string;
        expiry?: string;
        name?: "password1" | "password2";
        value?: string;
      }[];
    };
  };
}
export const TokensUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  tokenName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      scopeMapId: Schema.optional(Schema.String),
      status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
      credentials: Schema.optional(
        Schema.Struct({
          certificates: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(
                  Schema.Literals(["certificate1", "certificate2"]),
                ),
                expiry: Schema.optional(Schema.String),
                thumbprint: Schema.optional(Schema.String),
                encodedPemCertificate: Schema.optional(Schema.String),
              }),
            ),
          ),
          passwords: Schema.optional(
            Schema.Array(
              Schema.Struct({
                creationTime: Schema.optional(Schema.String),
                expiry: Schema.optional(Schema.String),
                name: Schema.optional(
                  Schema.Literals(["password1", "password2"]),
                ),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tokens/{tokenName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<TokensUpdateInput>;

// Output Schema
export interface TokensUpdateOutput {
  id?: string;
  name?: string;
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
export const TokensUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TokensUpdateOutput>;

// The operation
/**
 * Updates a token with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param tokenName - The name of the token.
 */
export const TokensUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TokensUpdateInput,
  outputSchema: TokensUpdateOutput,
}));
// Input Schema
export interface WebhooksCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  webhookName: string;
  tags?: Record<string, string>;
  location: string;
  properties?: {
    serviceUri: string;
    customHeaders?: Record<string, string>;
    status?: "enabled" | "disabled";
    scope?: string;
    actions: (
      | "push"
      | "delete"
      | "quarantine"
      | "chart_push"
      | "chart_delete"
    )[];
  };
}
export const WebhooksCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  properties: Schema.optional(
    Schema.Struct({
      serviceUri: Schema.String,
      customHeaders: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
      status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
      scope: Schema.optional(Schema.String),
      actions: Schema.Array(
        Schema.Literals([
          "push",
          "delete",
          "quarantine",
          "chart_push",
          "chart_delete",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<WebhooksCreateInput>;

// Output Schema
export interface WebhooksCreateOutput {
  id?: string;
  name?: string;
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
export const WebhooksCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebhooksCreateOutput>;

// The operation
/**
 * Creates a webhook for a container registry with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param webhookName - The name of the webhook.
 */
export const WebhooksCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhooksCreateInput,
  outputSchema: WebhooksCreateOutput,
}));
// Input Schema
export interface WebhooksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  webhookName: string;
}
export const WebhooksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<WebhooksDeleteInput>;

// Output Schema
export type WebhooksDeleteOutput = void;
export const WebhooksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WebhooksDeleteOutput>;

// The operation
/**
 * Deletes a webhook from a container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param webhookName - The name of the webhook.
 */
export const WebhooksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhooksDeleteInput,
  outputSchema: WebhooksDeleteOutput,
}));
// Input Schema
export interface WebhooksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  webhookName: string;
}
export const WebhooksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<WebhooksGetInput>;

// Output Schema
export interface WebhooksGetOutput {
  id?: string;
  name?: string;
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
export const WebhooksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebhooksGetOutput>;

// The operation
/**
 * Gets the properties of the specified webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param webhookName - The name of the webhook.
 */
export const WebhooksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhooksGetInput,
  outputSchema: WebhooksGetOutput,
}));
// Input Schema
export interface WebhooksGetCallbackConfigInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  webhookName: string;
}
export const WebhooksGetCallbackConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    webhookName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}/getCallbackConfig",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<WebhooksGetCallbackConfigInput>;

// Output Schema
export interface WebhooksGetCallbackConfigOutput {
  serviceUri: string;
  customHeaders?: Record<string, string>;
}
export const WebhooksGetCallbackConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceUri: Schema.String,
    customHeaders: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<WebhooksGetCallbackConfigOutput>;

// The operation
/**
 * Gets the configuration of service URI and custom headers for the webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param webhookName - The name of the webhook.
 */
export const WebhooksGetCallbackConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebhooksGetCallbackConfigInput,
    outputSchema: WebhooksGetCallbackConfigOutput,
  }),
);
// Input Schema
export interface WebhooksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const WebhooksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<WebhooksListInput>;

// Output Schema
export interface WebhooksListOutput {
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
export const WebhooksListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebhooksListOutput>;

// The operation
/**
 * Lists all the webhooks for the specified container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 */
export const WebhooksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhooksListInput,
  outputSchema: WebhooksListOutput,
}));
// Input Schema
export interface WebhooksListEventsInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  webhookName: string;
}
export const WebhooksListEventsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    webhookName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}/listEvents",
      apiVersion: "2025-11-01",
    }),
  ) as unknown as Schema.Codec<WebhooksListEventsInput>;

// Output Schema
export interface WebhooksListEventsOutput {
  value?: { id?: string }[];
  nextLink?: string;
}
export const WebhooksListEventsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WebhooksListEventsOutput>;

// The operation
/**
 * Lists recent events for the specified webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param webhookName - The name of the webhook.
 */
export const WebhooksListEvents = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhooksListEventsInput,
  outputSchema: WebhooksListEventsOutput,
}));
// Input Schema
export interface WebhooksPingInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  webhookName: string;
}
export const WebhooksPingInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}/ping",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<WebhooksPingInput>;

// Output Schema
export interface WebhooksPingOutput {
  id?: string;
}
export const WebhooksPingOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<WebhooksPingOutput>;

// The operation
/**
 * Triggers a ping event to be sent to the webhook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param webhookName - The name of the webhook.
 */
export const WebhooksPing = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhooksPingInput,
  outputSchema: WebhooksPingOutput,
}));
// Input Schema
export interface WebhooksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  webhookName: string;
  tags?: Record<string, string>;
  properties?: {
    serviceUri?: string;
    customHeaders?: Record<string, string>;
    status?: "enabled" | "disabled";
    scope?: string;
    actions?: (
      | "push"
      | "delete"
      | "quarantine"
      | "chart_push"
      | "chart_delete"
    )[];
  };
}
export const WebhooksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  webhookName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      serviceUri: Schema.optional(Schema.String),
      customHeaders: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
      status: Schema.optional(Schema.Literals(["enabled", "disabled"])),
      scope: Schema.optional(Schema.String),
      actions: Schema.optional(
        Schema.Array(
          Schema.Literals([
            "push",
            "delete",
            "quarantine",
            "chart_push",
            "chart_delete",
          ]),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}",
    apiVersion: "2025-11-01",
  }),
) as unknown as Schema.Codec<WebhooksUpdateInput>;

// Output Schema
export interface WebhooksUpdateOutput {
  id?: string;
  name?: string;
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
export const WebhooksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebhooksUpdateOutput>;

// The operation
/**
 * Updates a webhook with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - The name of the container registry.
 * @param webhookName - The name of the webhook.
 */
export const WebhooksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebhooksUpdateInput,
  outputSchema: WebhooksUpdateOutput,
}));
