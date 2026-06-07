/**
 * Azure Containerregistry API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
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
);
export type CacheRulesCreateInput = typeof CacheRulesCreateInput.Type;

// Output Schema
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
);
export type CacheRulesCreateOutput = typeof CacheRulesCreateOutput.Type;

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
);
export type CacheRulesDeleteInput = typeof CacheRulesDeleteInput.Type;

// Output Schema
export const CacheRulesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CacheRulesDeleteOutput = typeof CacheRulesDeleteOutput.Type;

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
);
export type CacheRulesGetInput = typeof CacheRulesGetInput.Type;

// Output Schema
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
});
export type CacheRulesGetOutput = typeof CacheRulesGetOutput.Type;

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
);
export type CacheRulesListInput = typeof CacheRulesListInput.Type;

// Output Schema
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
});
export type CacheRulesListOutput = typeof CacheRulesListOutput.Type;

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
);
export type CacheRulesUpdateInput = typeof CacheRulesUpdateInput.Type;

// Output Schema
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
);
export type CacheRulesUpdateOutput = typeof CacheRulesUpdateOutput.Type;

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
  );
export type ConnectedRegistriesCreateInput =
  typeof ConnectedRegistriesCreateInput.Type;

// Output Schema
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
  });
export type ConnectedRegistriesCreateOutput =
  typeof ConnectedRegistriesCreateOutput.Type;

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
  );
export type ConnectedRegistriesDeactivateInput =
  typeof ConnectedRegistriesDeactivateInput.Type;

// Output Schema
export const ConnectedRegistriesDeactivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConnectedRegistriesDeactivateOutput =
  typeof ConnectedRegistriesDeactivateOutput.Type;

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
  );
export type ConnectedRegistriesDeleteInput =
  typeof ConnectedRegistriesDeleteInput.Type;

// Output Schema
export const ConnectedRegistriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConnectedRegistriesDeleteOutput =
  typeof ConnectedRegistriesDeleteOutput.Type;

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
  );
export type ConnectedRegistriesGetInput =
  typeof ConnectedRegistriesGetInput.Type;

// Output Schema
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
  });
export type ConnectedRegistriesGetOutput =
  typeof ConnectedRegistriesGetOutput.Type;

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
  );
export type ConnectedRegistriesListInput =
  typeof ConnectedRegistriesListInput.Type;

// Output Schema
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
  });
export type ConnectedRegistriesListOutput =
  typeof ConnectedRegistriesListOutput.Type;

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
  );
export type ConnectedRegistriesUpdateInput =
  typeof ConnectedRegistriesUpdateInput.Type;

// Output Schema
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
  });
export type ConnectedRegistriesUpdateOutput =
  typeof ConnectedRegistriesUpdateOutput.Type;

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
  );
export type CredentialSetsCreateInput = typeof CredentialSetsCreateInput.Type;

// Output Schema
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
  });
export type CredentialSetsCreateOutput = typeof CredentialSetsCreateOutput.Type;

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
  );
export type CredentialSetsDeleteInput = typeof CredentialSetsDeleteInput.Type;

// Output Schema
export const CredentialSetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CredentialSetsDeleteOutput = typeof CredentialSetsDeleteOutput.Type;

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
);
export type CredentialSetsGetInput = typeof CredentialSetsGetInput.Type;

// Output Schema
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
  });
export type CredentialSetsGetOutput = typeof CredentialSetsGetOutput.Type;

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
  );
export type CredentialSetsListInput = typeof CredentialSetsListInput.Type;

// Output Schema
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
  });
export type CredentialSetsListOutput = typeof CredentialSetsListOutput.Type;

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
  );
export type CredentialSetsUpdateInput = typeof CredentialSetsUpdateInput.Type;

// Output Schema
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
  });
export type CredentialSetsUpdateOutput = typeof CredentialSetsUpdateOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ContainerRegistry/operations",
    apiVersion: "2025-11-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
  );
export type PrivateEndpointConnectionsCreateOrUpdateInput =
  typeof PrivateEndpointConnectionsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsCreateOrUpdateOutput =
  typeof PrivateEndpointConnectionsCreateOrUpdateOutput.Type;

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
  );
export type PrivateEndpointConnectionsDeleteInput =
  typeof PrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionsDeleteOutput =
  typeof PrivateEndpointConnectionsDeleteOutput.Type;

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
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

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
  );
export type PrivateEndpointConnectionsListInput =
  typeof PrivateEndpointConnectionsListInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsListOutput =
  typeof PrivateEndpointConnectionsListOutput.Type;

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
  );
export type RegistriesCheckNameAvailabilityInput =
  typeof RegistriesCheckNameAvailabilityInput.Type;

// Output Schema
export const RegistriesCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  });
export type RegistriesCheckNameAvailabilityOutput =
  typeof RegistriesCheckNameAvailabilityOutput.Type;

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
);
export type RegistriesCreateInput = typeof RegistriesCreateInput.Type;

// Output Schema
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
);
export type RegistriesCreateOutput = typeof RegistriesCreateOutput.Type;

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
);
export type RegistriesDeleteInput = typeof RegistriesDeleteInput.Type;

// Output Schema
export const RegistriesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RegistriesDeleteOutput = typeof RegistriesDeleteOutput.Type;

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
  );
export type RegistriesGenerateCredentialsInput =
  typeof RegistriesGenerateCredentialsInput.Type;

// Output Schema
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
  });
export type RegistriesGenerateCredentialsOutput =
  typeof RegistriesGenerateCredentialsOutput.Type;

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
);
export type RegistriesGetInput = typeof RegistriesGetInput.Type;

// Output Schema
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
});
export type RegistriesGetOutput = typeof RegistriesGetOutput.Type;

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
export const RegistriesGetBuildSourceUploadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/listBuildSourceUploadUrl",
      apiVersion: "2019-04-01",
    }),
  );
export type RegistriesGetBuildSourceUploadUrlInput =
  typeof RegistriesGetBuildSourceUploadUrlInput.Type;

// Output Schema
export const RegistriesGetBuildSourceUploadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uploadUrl: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
  });
export type RegistriesGetBuildSourceUploadUrlOutput =
  typeof RegistriesGetBuildSourceUploadUrlOutput.Type;

// The operation
/**
 * Get the upload location for the user to be able to upload the source.
 */
export const RegistriesGetBuildSourceUploadUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistriesGetBuildSourceUploadUrlInput,
    outputSchema: RegistriesGetBuildSourceUploadUrlOutput,
  }));
// Input Schema
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
  );
export type RegistriesGetPrivateLinkResourceInput =
  typeof RegistriesGetPrivateLinkResourceInput.Type;

// Output Schema
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
  });
export type RegistriesGetPrivateLinkResourceOutput =
  typeof RegistriesGetPrivateLinkResourceOutput.Type;

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
  );
export type RegistriesImportImageInput = typeof RegistriesImportImageInput.Type;

// Output Schema
export const RegistriesImportImageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RegistriesImportImageOutput =
  typeof RegistriesImportImageOutput.Type;

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
export const RegistriesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerRegistry/registries",
    apiVersion: "2025-11-01",
  }),
);
export type RegistriesListInput = typeof RegistriesListInput.Type;

// Output Schema
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
});
export type RegistriesListOutput = typeof RegistriesListOutput.Type;

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
  );
export type RegistriesListByResourceGroupInput =
  typeof RegistriesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type RegistriesListByResourceGroupOutput =
  typeof RegistriesListByResourceGroupOutput.Type;

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
  );
export type RegistriesListCredentialsInput =
  typeof RegistriesListCredentialsInput.Type;

// Output Schema
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
  });
export type RegistriesListCredentialsOutput =
  typeof RegistriesListCredentialsOutput.Type;

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
  );
export type RegistriesListPrivateLinkResourcesInput =
  typeof RegistriesListPrivateLinkResourcesInput.Type;

// Output Schema
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
  });
export type RegistriesListPrivateLinkResourcesOutput =
  typeof RegistriesListPrivateLinkResourcesOutput.Type;

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
  );
export type RegistriesListUsagesInput = typeof RegistriesListUsagesInput.Type;

// Output Schema
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
  });
export type RegistriesListUsagesOutput = typeof RegistriesListUsagesOutput.Type;

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
  );
export type RegistriesRegenerateCredentialInput =
  typeof RegistriesRegenerateCredentialInput.Type;

// Output Schema
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
  });
export type RegistriesRegenerateCredentialOutput =
  typeof RegistriesRegenerateCredentialOutput.Type;

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
export const RegistriesScheduleRunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    isArchiveEnabled: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/scheduleRun",
      apiVersion: "2019-04-01",
    }),
  );
export type RegistriesScheduleRunInput = typeof RegistriesScheduleRunInput.Type;

// Output Schema
export const RegistriesScheduleRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type RegistriesScheduleRunOutput =
  typeof RegistriesScheduleRunOutput.Type;

// The operation
/**
 * Schedules a new run based on the request parameters and add it to the run queue.
 */
export const RegistriesScheduleRun = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegistriesScheduleRunInput,
    outputSchema: RegistriesScheduleRunOutput,
  }),
);
// Input Schema
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
);
export type RegistriesUpdateInput = typeof RegistriesUpdateInput.Type;

// Output Schema
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
);
export type RegistriesUpdateOutput = typeof RegistriesUpdateOutput.Type;

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
  );
export type ReplicationsCreateInput = typeof ReplicationsCreateInput.Type;

// Output Schema
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
  });
export type ReplicationsCreateOutput = typeof ReplicationsCreateOutput.Type;

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
  );
export type ReplicationsDeleteInput = typeof ReplicationsDeleteInput.Type;

// Output Schema
export const ReplicationsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReplicationsDeleteOutput = typeof ReplicationsDeleteOutput.Type;

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
);
export type ReplicationsGetInput = typeof ReplicationsGetInput.Type;

// Output Schema
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
});
export type ReplicationsGetOutput = typeof ReplicationsGetOutput.Type;

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
);
export type ReplicationsListInput = typeof ReplicationsListInput.Type;

// Output Schema
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
);
export type ReplicationsListOutput = typeof ReplicationsListOutput.Type;

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
  );
export type ReplicationsUpdateInput = typeof ReplicationsUpdateInput.Type;

// Output Schema
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
  });
export type ReplicationsUpdateOutput = typeof ReplicationsUpdateOutput.Type;

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
export const RunsCancelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}/cancel",
    apiVersion: "2019-04-01",
  }),
);
export type RunsCancelInput = typeof RunsCancelInput.Type;

// Output Schema
export const RunsCancelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RunsCancelOutput = typeof RunsCancelOutput.Type;

// The operation
/**
 * Cancel an existing run.
 *
 * @param runId - The run ID.
 */
export const RunsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunsCancelInput,
  outputSchema: RunsCancelOutput,
}));
// Input Schema
export const RunsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}",
    apiVersion: "2019-04-01",
  }),
);
export type RunsGetInput = typeof RunsGetInput.Type;

// Output Schema
export const RunsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type RunsGetOutput = typeof RunsGetOutput.Type;

// The operation
/**
 * Gets the detailed information for a given run.
 *
 * @param runId - The run ID.
 */
export const RunsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunsGetInput,
  outputSchema: RunsGetOutput,
}));
// Input Schema
export const RunsGetLogSasUrlInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}/listLogSasUrl",
    apiVersion: "2019-04-01",
  }),
);
export type RunsGetLogSasUrlInput = typeof RunsGetLogSasUrlInput.Type;

// Output Schema
export const RunsGetLogSasUrlOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    logLink: Schema.optional(Schema.String),
  },
);
export type RunsGetLogSasUrlOutput = typeof RunsGetLogSasUrlOutput.Type;

// The operation
/**
 * Gets a link to download the run logs.
 *
 * @param runId - The run ID.
 */
export const RunsGetLogSasUrl = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunsGetLogSasUrlInput,
  outputSchema: RunsGetLogSasUrlOutput,
}));
// Input Schema
export const RunsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs",
    apiVersion: "2019-04-01",
  }),
);
export type RunsListInput = typeof RunsListInput.Type;

// Output Schema
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
});
export type RunsListOutput = typeof RunsListOutput.Type;

// The operation
/**
 * Gets all the runs for a registry.
 *
 * @param $filter - The runs filter to apply on the operation. Arithmetic operators are not supported. The allowed string function is 'contains'. All logical operators except 'Not', 'Has', 'All' are allowed.
 * @param $top - $top is supported for get list of runs, which limits the maximum number of runs to return.
 */
export const RunsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunsListInput,
  outputSchema: RunsListOutput,
}));
// Input Schema
export const RunsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runId: Schema.String.pipe(T.PathParam()),
  isArchiveEnabled: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/runs/{runId}",
    apiVersion: "2019-04-01",
  }),
);
export type RunsUpdateInput = typeof RunsUpdateInput.Type;

// Output Schema
export const RunsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type RunsUpdateOutput = typeof RunsUpdateOutput.Type;

// The operation
/**
 * Patch the run properties.
 *
 * @param runId - The run ID.
 */
export const RunsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RunsUpdateInput,
  outputSchema: RunsUpdateOutput,
}));
// Input Schema
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
);
export type ScopeMapsCreateInput = typeof ScopeMapsCreateInput.Type;

// Output Schema
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
});
export type ScopeMapsCreateOutput = typeof ScopeMapsCreateOutput.Type;

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
);
export type ScopeMapsDeleteInput = typeof ScopeMapsDeleteInput.Type;

// Output Schema
export const ScopeMapsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScopeMapsDeleteOutput = typeof ScopeMapsDeleteOutput.Type;

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
);
export type ScopeMapsGetInput = typeof ScopeMapsGetInput.Type;

// Output Schema
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
});
export type ScopeMapsGetOutput = typeof ScopeMapsGetOutput.Type;

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
);
export type ScopeMapsListInput = typeof ScopeMapsListInput.Type;

// Output Schema
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
});
export type ScopeMapsListOutput = typeof ScopeMapsListOutput.Type;

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
);
export type ScopeMapsUpdateInput = typeof ScopeMapsUpdateInput.Type;

// Output Schema
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
});
export type ScopeMapsUpdateOutput = typeof ScopeMapsUpdateOutput.Type;

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
export const TasksCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type TasksCreateInput = typeof TasksCreateInput.Type;

// Output Schema
export const TasksCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
export type TasksCreateOutput = typeof TasksCreateOutput.Type;

// The operation
/**
 * Creates a task for a container registry with the specified parameters.
 */
export const TasksCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksCreateInput,
  outputSchema: TasksCreateOutput,
}));
// Input Schema
export const TasksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}",
    apiVersion: "2019-04-01",
  }),
);
export type TasksDeleteInput = typeof TasksDeleteInput.Type;

// Output Schema
export const TasksDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TasksDeleteOutput = typeof TasksDeleteOutput.Type;

// The operation
/**
 * Deletes a specified task.
 */
export const TasksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksDeleteInput,
  outputSchema: TasksDeleteOutput,
}));
// Input Schema
export const TasksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}",
    apiVersion: "2019-04-01",
  }),
);
export type TasksGetInput = typeof TasksGetInput.Type;

// Output Schema
export const TasksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
export type TasksGetOutput = typeof TasksGetOutput.Type;

// The operation
/**
 * Get the properties of a specified task.
 */
export const TasksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksGetInput,
  outputSchema: TasksGetOutput,
}));
// Input Schema
export const TasksGetDetailsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}/listDetails",
    apiVersion: "2019-04-01",
  }),
);
export type TasksGetDetailsInput = typeof TasksGetDetailsInput.Type;

// Output Schema
export const TasksGetDetailsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
export type TasksGetDetailsOutput = typeof TasksGetDetailsOutput.Type;

// The operation
/**
 * Returns a task with extended information that includes all secrets.
 */
export const TasksGetDetails = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksGetDetailsInput,
  outputSchema: TasksGetDetailsOutput,
}));
// Input Schema
export const TasksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks",
    apiVersion: "2019-04-01",
  }),
);
export type TasksListInput = typeof TasksListInput.Type;

// Output Schema
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
});
export type TasksListOutput = typeof TasksListOutput.Type;

// The operation
/**
 * Lists all the tasks for a specified container registry.
 */
export const TasksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksListInput,
  outputSchema: TasksListOutput,
}));
// Input Schema
export const TasksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type TasksUpdateInput = typeof TasksUpdateInput.Type;

// Output Schema
export const TasksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
export type TasksUpdateOutput = typeof TasksUpdateOutput.Type;

// The operation
/**
 * Updates a task with the specified parameters.
 */
export const TasksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksUpdateInput,
  outputSchema: TasksUpdateOutput,
}));
// Input Schema
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
);
export type TokensCreateInput = typeof TokensCreateInput.Type;

// Output Schema
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
});
export type TokensCreateOutput = typeof TokensCreateOutput.Type;

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
);
export type TokensDeleteInput = typeof TokensDeleteInput.Type;

// Output Schema
export const TokensDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TokensDeleteOutput = typeof TokensDeleteOutput.Type;

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
);
export type TokensGetInput = typeof TokensGetInput.Type;

// Output Schema
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
});
export type TokensGetOutput = typeof TokensGetOutput.Type;

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
);
export type TokensListInput = typeof TokensListInput.Type;

// Output Schema
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
});
export type TokensListOutput = typeof TokensListOutput.Type;

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
);
export type TokensUpdateInput = typeof TokensUpdateInput.Type;

// Output Schema
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
});
export type TokensUpdateOutput = typeof TokensUpdateOutput.Type;

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
);
export type WebhooksCreateInput = typeof WebhooksCreateInput.Type;

// Output Schema
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
});
export type WebhooksCreateOutput = typeof WebhooksCreateOutput.Type;

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
);
export type WebhooksDeleteInput = typeof WebhooksDeleteInput.Type;

// Output Schema
export const WebhooksDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebhooksDeleteOutput = typeof WebhooksDeleteOutput.Type;

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
);
export type WebhooksGetInput = typeof WebhooksGetInput.Type;

// Output Schema
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
});
export type WebhooksGetOutput = typeof WebhooksGetOutput.Type;

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
  );
export type WebhooksGetCallbackConfigInput =
  typeof WebhooksGetCallbackConfigInput.Type;

// Output Schema
export const WebhooksGetCallbackConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceUri: Schema.String,
    customHeaders: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type WebhooksGetCallbackConfigOutput =
  typeof WebhooksGetCallbackConfigOutput.Type;

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
);
export type WebhooksListInput = typeof WebhooksListInput.Type;

// Output Schema
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
});
export type WebhooksListOutput = typeof WebhooksListOutput.Type;

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
  );
export type WebhooksListEventsInput = typeof WebhooksListEventsInput.Type;

// Output Schema
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
  });
export type WebhooksListEventsOutput = typeof WebhooksListEventsOutput.Type;

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
);
export type WebhooksPingInput = typeof WebhooksPingInput.Type;

// Output Schema
export const WebhooksPingOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
export type WebhooksPingOutput = typeof WebhooksPingOutput.Type;

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
);
export type WebhooksUpdateInput = typeof WebhooksUpdateInput.Type;

// Output Schema
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
});
export type WebhooksUpdateOutput = typeof WebhooksUpdateOutput.Type;

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
