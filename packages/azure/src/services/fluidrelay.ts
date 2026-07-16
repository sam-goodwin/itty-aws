/**
 * Azure Fluidrelay API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface FluidRelayContainersDeleteInput {
  subscriptionId: string;
  resourceGroup: string;
  fluidRelayServerName: string;
  fluidRelayContainerName: string;
}
export const FluidRelayContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    fluidRelayServerName: Schema.String.pipe(T.PathParam()),
    fluidRelayContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}/fluidRelayContainers/{fluidRelayContainerName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayContainersDeleteInput>;

// Output Schema
export type FluidRelayContainersDeleteOutput = void;
export const FluidRelayContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FluidRelayContainersDeleteOutput>;

// The operation
/**
 * Delete a Fluid Relay container.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param resourceGroup - The resource group containing the resource.
 * @param fluidRelayServerName - The Fluid Relay server resource name.
 * @param fluidRelayContainerName - The Fluid Relay container resource name.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayContainersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FluidRelayContainersDeleteInput,
  outputSchema: FluidRelayContainersDeleteOutput,
}));
// Input Schema
export interface FluidRelayContainersGetInput {
  subscriptionId: string;
  resourceGroup: string;
  fluidRelayServerName: string;
  fluidRelayContainerName: string;
}
export const FluidRelayContainersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    fluidRelayServerName: Schema.String.pipe(T.PathParam()),
    fluidRelayContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}/fluidRelayContainers/{fluidRelayContainerName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayContainersGetInput>;

// Output Schema
export interface FluidRelayContainersGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FluidRelayContainersGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FluidRelayContainersGetOutput>;

// The operation
/**
 * Get a Fluid Relay container.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param resourceGroup - The resource group containing the resource.
 * @param fluidRelayServerName - The Fluid Relay server resource name.
 * @param fluidRelayContainerName - The Fluid Relay container resource name.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FluidRelayContainersGetInput,
  outputSchema: FluidRelayContainersGetOutput,
}));
// Input Schema
export interface FluidRelayContainersListByFluidRelayServersInput {
  subscriptionId: string;
  resourceGroup: string;
  fluidRelayServerName: string;
}
export const FluidRelayContainersListByFluidRelayServersInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    fluidRelayServerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}/fluidRelayContainers",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayContainersListByFluidRelayServersInput>;

// Output Schema
export interface FluidRelayContainersListByFluidRelayServersOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const FluidRelayContainersListByFluidRelayServersOutput =
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
  }) as unknown as Schema.Codec<FluidRelayContainersListByFluidRelayServersOutput>;

// The operation
/**
 * List all Fluid Relay containers which are children of a given Fluid Relay server.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param resourceGroup - The resource group containing the resource.
 * @param fluidRelayServerName - The Fluid Relay server resource name.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayContainersListByFluidRelayServers =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FluidRelayContainersListByFluidRelayServersInput,
    outputSchema: FluidRelayContainersListByFluidRelayServersOutput,
  }));
// Input Schema
export interface FluidRelayOperationsListInput {}
export const FluidRelayOperationsListInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.FluidRelay/operations",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayOperationsListInput>;

// Output Schema
export interface FluidRelayOperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    isDataAction?: boolean;
  }[];
  nextLink?: string;
}
export const FluidRelayOperationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
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
          isDataAction: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FluidRelayOperationsListOutput>;

// The operation
/**
 * List all operations provided by Microsoft.FluidRelay.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayOperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FluidRelayOperationsListInput,
  outputSchema: FluidRelayOperationsListOutput,
}));
// Input Schema
export interface FluidRelayServersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroup: string;
  fluidRelayServerName: string;
  properties?: {
    frsTenantId?: string;
    fluidRelayEndpoints?: {
      ordererEndpoints?: string[];
      storageEndpoints?: string[];
      serviceEndpoints?: string[];
    };
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    encryption?: {
      customerManagedKeyEncryption?: {
        keyEncryptionKeyIdentity?: {
          identityType?: "SystemAssigned" | "UserAssigned";
          userAssignedIdentityResourceId?: string;
        };
        keyEncryptionKeyUrl?: string;
      };
    };
    storagesku?: "standard" | "basic";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
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
export const FluidRelayServersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    fluidRelayServerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        frsTenantId: Schema.optional(Schema.String),
        fluidRelayEndpoints: Schema.optional(
          Schema.Struct({
            ordererEndpoints: Schema.optional(Schema.Array(Schema.String)),
            storageEndpoints: Schema.optional(Schema.Array(Schema.String)),
            serviceEndpoints: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            customerManagedKeyEncryption: Schema.optional(
              Schema.Struct({
                keyEncryptionKeyIdentity: Schema.optional(
                  Schema.Struct({
                    identityType: Schema.optional(
                      Schema.Literals(["SystemAssigned", "UserAssigned"]),
                    ),
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                  }),
                ),
                keyEncryptionKeyUrl: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        storagesku: Schema.optional(Schema.Literals(["standard", "basic"])),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayServersCreateOrUpdateInput>;

// Output Schema
export interface FluidRelayServersCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FluidRelayServersCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FluidRelayServersCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update a Fluid Relay server.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param resourceGroup - The resource group containing the resource.
 * @param fluidRelayServerName - The Fluid Relay server resource name.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FluidRelayServersCreateOrUpdateInput,
    outputSchema: FluidRelayServersCreateOrUpdateOutput,
  }));
// Input Schema
export interface FluidRelayServersDeleteInput {
  subscriptionId: string;
  resourceGroup: string;
  fluidRelayServerName: string;
}
export const FluidRelayServersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    fluidRelayServerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayServersDeleteInput>;

// Output Schema
export type FluidRelayServersDeleteOutput = void;
export const FluidRelayServersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FluidRelayServersDeleteOutput>;

// The operation
/**
 * Delete a Fluid Relay server.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param resourceGroup - The resource group containing the resource.
 * @param fluidRelayServerName - The Fluid Relay server resource name.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FluidRelayServersDeleteInput,
  outputSchema: FluidRelayServersDeleteOutput,
}));
// Input Schema
export interface FluidRelayServersGetInput {
  subscriptionId: string;
  resourceGroup: string;
  fluidRelayServerName: string;
}
export const FluidRelayServersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    fluidRelayServerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayServersGetInput>;

// Output Schema
export interface FluidRelayServersGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FluidRelayServersGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FluidRelayServersGetOutput>;

// The operation
/**
 * Get a Fluid Relay server.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param resourceGroup - The resource group containing the resource.
 * @param fluidRelayServerName - The Fluid Relay server resource name.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FluidRelayServersGetInput,
  outputSchema: FluidRelayServersGetOutput,
}));
// Input Schema
export interface FluidRelayServersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroup: string;
}
export const FluidRelayServersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayServersListByResourceGroupInput>;

// Output Schema
export interface FluidRelayServersListByResourceGroupOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const FluidRelayServersListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FluidRelayServersListByResourceGroupOutput>;

// The operation
/**
 * List all Fluid Relay servers in a resource group.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param resourceGroup - The resource group containing the resource.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FluidRelayServersListByResourceGroupInput,
    outputSchema: FluidRelayServersListByResourceGroupOutput,
  }));
// Input Schema
export interface FluidRelayServersListBySubscriptionInput {
  subscriptionId: string;
}
export const FluidRelayServersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.FluidRelay/fluidRelayServers",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayServersListBySubscriptionInput>;

// Output Schema
export interface FluidRelayServersListBySubscriptionOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const FluidRelayServersListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FluidRelayServersListBySubscriptionOutput>;

// The operation
/**
 * List all Fluid Relay servers in a subscription.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FluidRelayServersListBySubscriptionInput,
    outputSchema: FluidRelayServersListBySubscriptionOutput,
  }));
// Input Schema
export interface FluidRelayServersListKeysInput {
  subscriptionId: string;
  resourceGroup: string;
  fluidRelayServerName: string;
}
export const FluidRelayServersListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    fluidRelayServerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}/listKeys",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayServersListKeysInput>;

// Output Schema
export interface FluidRelayServersListKeysOutput {
  key1?: string;
  key2?: string;
}
export const FluidRelayServersListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FluidRelayServersListKeysOutput>;

// The operation
/**
 * Get primary and secondary key for this server.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param resourceGroup - The resource group containing the resource.
 * @param fluidRelayServerName - The Fluid Relay server resource name.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: FluidRelayServersListKeysInput,
  outputSchema: FluidRelayServersListKeysOutput,
}));
// Input Schema
export interface FluidRelayServersRegenerateKeyInput {
  subscriptionId: string;
  resourceGroup: string;
  fluidRelayServerName: string;
  keyName: "key1" | "key2";
}
export const FluidRelayServersRegenerateKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    fluidRelayServerName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.Literals(["key1", "key2"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}/regenerateKey",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayServersRegenerateKeyInput>;

// Output Schema
export interface FluidRelayServersRegenerateKeyOutput {
  key1?: string;
  key2?: string;
}
export const FluidRelayServersRegenerateKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FluidRelayServersRegenerateKeyOutput>;

// The operation
/**
 * Regenerate the primary or secondary key for this server.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param resourceGroup - The resource group containing the resource.
 * @param fluidRelayServerName - The Fluid Relay server resource name.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersRegenerateKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FluidRelayServersRegenerateKeyInput,
    outputSchema: FluidRelayServersRegenerateKeyOutput,
  }));
// Input Schema
export interface FluidRelayServersUpdateInput {
  subscriptionId: string;
  resourceGroup: string;
  fluidRelayServerName: string;
  properties?: {
    encryption?: {
      customerManagedKeyEncryption?: {
        keyEncryptionKeyIdentity?: {
          identityType?: "SystemAssigned" | "UserAssigned";
          userAssignedIdentityResourceId?: string;
        };
        keyEncryptionKeyUrl?: string;
      };
    };
  };
  tags?: Record<string, string>;
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
export const FluidRelayServersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    fluidRelayServerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        encryption: Schema.optional(
          Schema.Struct({
            customerManagedKeyEncryption: Schema.optional(
              Schema.Struct({
                keyEncryptionKeyIdentity: Schema.optional(
                  Schema.Struct({
                    identityType: Schema.optional(
                      Schema.Literals(["SystemAssigned", "UserAssigned"]),
                    ),
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                  }),
                ),
                keyEncryptionKeyUrl: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<FluidRelayServersUpdateInput>;

// Output Schema
export interface FluidRelayServersUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const FluidRelayServersUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<FluidRelayServersUpdateOutput>;

// The operation
/**
 * Update a Fluid Relay server.
 *
 * @param subscriptionId - The subscription id (GUID) for this resource.
 * @param resourceGroup - The resource group containing the resource.
 * @param fluidRelayServerName - The Fluid Relay server resource name.
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FluidRelayServersUpdateInput,
  outputSchema: FluidRelayServersUpdateOutput,
}));
