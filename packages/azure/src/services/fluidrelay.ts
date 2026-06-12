/**
 * Azure Fluidrelay API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const OperationResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  display: Schema.optional(Schema.suspend(() => OperationDisplaySchema)),
  isDataAction: Schema.optional(Schema.Boolean),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const FluidRelayServerPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frsTenantId: Schema.optional(Schema.String),
    fluidRelayEndpoints: Schema.optional(
      Schema.suspend(() => FluidRelayEndpointsSchema),
    ),
    provisioningState: Schema.optional(
      Schema.Literals(["Succeeded", "Failed", "Canceled"]),
    ),
    encryption: Schema.optional(
      Schema.suspend(() => EncryptionPropertiesSchema),
    ),
    storagesku: Schema.optional(Schema.Literals(["standard", "basic"])),
  });
const FluidRelayEndpointsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ordererEndpoints: Schema.optional(Schema.Array(Schema.String)),
  storageEndpoints: Schema.optional(Schema.Array(Schema.String)),
  serviceEndpoints: Schema.optional(Schema.Array(Schema.String)),
});
const EncryptionPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerManagedKeyEncryption: Schema.optional(
    Schema.suspend(() => CustomerManagedKeyEncryptionPropertiesSchema),
  ),
});
const CustomerManagedKeyEncryptionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyEncryptionKeyIdentity: Schema.optional(
      Schema.Struct({
        identityType: Schema.optional(
          Schema.Literals(["SystemAssigned", "UserAssigned"]),
        ),
        userAssignedIdentityResourceId: Schema.optional(Schema.String),
      }),
    ),
    keyEncryptionKeyUrl: Schema.optional(Schema.String),
  });
const IdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const FluidRelayServerUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryption: Schema.optional(
      Schema.suspend(() => EncryptionPropertiesSchema),
    ),
  });
const FluidRelayServerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
const FluidRelayContainerPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frsTenantId: Schema.optional(Schema.String),
    frsContainerId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.Literals(["Succeeded", "Failed", "Canceled"]),
    ),
    creationTime: Schema.optional(Schema.String),
    lastAccessTime: Schema.optional(Schema.String),
  });
const FluidRelayContainerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});

// Input Schema
export const FluidRelayContainersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}/fluidRelayContainers/{fluidRelayContainerName}",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayContainersDeleteInput =
  typeof FluidRelayContainersDeleteInput.Type;

// Output Schema
export const FluidRelayContainersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FluidRelayContainersDeleteOutput =
  typeof FluidRelayContainersDeleteOutput.Type;

// The operation
/**
 * Delete a Fluid Relay container.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayContainersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluidRelayContainersDeleteInput,
    outputSchema: FluidRelayContainersDeleteOutput,
  }),
);
// Input Schema
export const FluidRelayContainersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}/fluidRelayContainers/{fluidRelayContainerName}",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayContainersGetInput =
  typeof FluidRelayContainersGetInput.Type;

// Output Schema
export const FluidRelayContainersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => FluidRelayContainerPropertiesSchema),
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type FluidRelayContainersGetOutput =
  typeof FluidRelayContainersGetOutput.Type;

// The operation
/**
 * Get a Fluid Relay container.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayContainersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluidRelayContainersGetInput,
    outputSchema: FluidRelayContainersGetOutput,
  }),
);
// Input Schema
export const FluidRelayContainersListByFluidRelayServersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}/fluidRelayContainers",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayContainersListByFluidRelayServersInput =
  typeof FluidRelayContainersListByFluidRelayServersInput.Type;

// Output Schema
export const FluidRelayContainersListByFluidRelayServersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => FluidRelayContainerSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type FluidRelayContainersListByFluidRelayServersOutput =
  typeof FluidRelayContainersListByFluidRelayServersOutput.Type;

// The operation
/**
 * List all Fluid Relay containers which are children of a given Fluid Relay server.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayContainersListByFluidRelayServers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FluidRelayContainersListByFluidRelayServersInput,
    outputSchema: FluidRelayContainersListByFluidRelayServersOutput,
  }));
// Input Schema
export const FluidRelayOperationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.FluidRelay/operations",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayOperationsListInput =
  typeof FluidRelayOperationsListInput.Type;

// Output Schema
export const FluidRelayOperationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => OperationResultSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type FluidRelayOperationsListOutput =
  typeof FluidRelayOperationsListOutput.Type;

// The operation
/**
 * List all operations provided by Microsoft.FluidRelay.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayOperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluidRelayOperationsListInput,
    outputSchema: FluidRelayOperationsListOutput,
  }),
);
// Input Schema
export const FluidRelayServersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => FluidRelayServerPropertiesSchema),
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
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayServersCreateOrUpdateInput =
  typeof FluidRelayServersCreateOrUpdateInput.Type;

// Output Schema
export const FluidRelayServersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => FluidRelayServerPropertiesSchema),
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
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type FluidRelayServersCreateOrUpdateOutput =
  typeof FluidRelayServersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or Update a Fluid Relay server.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FluidRelayServersCreateOrUpdateInput,
    outputSchema: FluidRelayServersCreateOrUpdateOutput,
  }));
// Input Schema
export const FluidRelayServersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayServersDeleteInput =
  typeof FluidRelayServersDeleteInput.Type;

// Output Schema
export const FluidRelayServersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FluidRelayServersDeleteOutput =
  typeof FluidRelayServersDeleteOutput.Type;

// The operation
/**
 * Delete a Fluid Relay server.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluidRelayServersDeleteInput,
    outputSchema: FluidRelayServersDeleteOutput,
  }),
);
// Input Schema
export const FluidRelayServersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayServersGetInput = typeof FluidRelayServersGetInput.Type;

// Output Schema
export const FluidRelayServersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => FluidRelayServerPropertiesSchema),
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
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type FluidRelayServersGetOutput = typeof FluidRelayServersGetOutput.Type;

// The operation
/**
 * Get a Fluid Relay server.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluidRelayServersGetInput,
    outputSchema: FluidRelayServersGetOutput,
  }),
);
// Input Schema
export const FluidRelayServersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayServersListByResourceGroupInput =
  typeof FluidRelayServersListByResourceGroupInput.Type;

// Output Schema
export const FluidRelayServersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => FluidRelayServerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type FluidRelayServersListByResourceGroupOutput =
  typeof FluidRelayServersListByResourceGroupOutput.Type;

// The operation
/**
 * List all Fluid Relay servers in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FluidRelayServersListByResourceGroupInput,
    outputSchema: FluidRelayServersListByResourceGroupOutput,
  }));
// Input Schema
export const FluidRelayServersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.FluidRelay/fluidRelayServers",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayServersListBySubscriptionInput =
  typeof FluidRelayServersListBySubscriptionInput.Type;

// Output Schema
export const FluidRelayServersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => FluidRelayServerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type FluidRelayServersListBySubscriptionOutput =
  typeof FluidRelayServersListBySubscriptionOutput.Type;

// The operation
/**
 * List all Fluid Relay servers in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FluidRelayServersListBySubscriptionInput,
    outputSchema: FluidRelayServersListBySubscriptionOutput,
  }));
// Input Schema
export const FluidRelayServersListKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}/listKeys",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayServersListKeysInput =
  typeof FluidRelayServersListKeysInput.Type;

// Output Schema
export const FluidRelayServersListKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  });
export type FluidRelayServersListKeysOutput =
  typeof FluidRelayServersListKeysOutput.Type;

// The operation
/**
 * Get primary and secondary key for this server.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluidRelayServersListKeysInput,
    outputSchema: FluidRelayServersListKeysOutput,
  }),
);
// Input Schema
export const FluidRelayServersRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.Literals(["key1", "key2"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}/regenerateKey",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayServersRegenerateKeyInput =
  typeof FluidRelayServersRegenerateKeyInput.Type;

// Output Schema
export const FluidRelayServersRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  });
export type FluidRelayServersRegenerateKeyOutput =
  typeof FluidRelayServersRegenerateKeyOutput.Type;

// The operation
/**
 * Regenerate the primary or secondary key for this server.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersRegenerateKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FluidRelayServersRegenerateKeyInput,
    outputSchema: FluidRelayServersRegenerateKeyOutput,
  }));
// Input Schema
export const FluidRelayServersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => FluidRelayServerUpdatePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.FluidRelay/fluidRelayServers/{fluidRelayServerName}",
      apiVersion: "2022-06-01",
    }),
  );
export type FluidRelayServersUpdateInput =
  typeof FluidRelayServersUpdateInput.Type;

// Output Schema
export const FluidRelayServersUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => FluidRelayServerPropertiesSchema),
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
    identity: Schema.optional(Schema.suspend(() => IdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type FluidRelayServersUpdateOutput =
  typeof FluidRelayServersUpdateOutput.Type;

// The operation
/**
 * Update a Fluid Relay server.
 *
 * @param api-version - The API version to use for this operation.
 */
export const FluidRelayServersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluidRelayServersUpdateInput,
    outputSchema: FluidRelayServersUpdateOutput,
  }),
);
