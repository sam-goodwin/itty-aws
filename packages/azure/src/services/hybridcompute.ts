/**
 * Azure Hybridcompute API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const AgentVersionGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osType: Schema.String.pipe(T.PathParam()),
  version: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridCompute/osType/{osType}/agentVersions/{version}",
    apiVersion: "2025-01-13",
  }),
);
export type AgentVersionGetInput = typeof AgentVersionGetInput.Type;

// Output Schema
export const AgentVersionGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  agentVersion: Schema.optional(Schema.String),
  downloadLink: Schema.optional(Schema.String),
  osType: Schema.optional(Schema.String),
});
export type AgentVersionGetOutput = typeof AgentVersionGetOutput.Type;

// The operation
/**
 * Gets an Agent Version along with the download link currently present.
 *
 * @param api-version - The API version to use for this operation.
 * @param osType - Defines the os type
 * @param version - Defines the agent version. To get latest, use latest or else a specific agent version.
 */
export const AgentVersionGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentVersionGetInput,
  outputSchema: AgentVersionGetOutput,
}));
// Input Schema
export const AgentVersionListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osType: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridCompute/osType/{osType}/agentVersions",
    apiVersion: "2025-01-13",
  }),
);
export type AgentVersionListInput = typeof AgentVersionListInput.Type;

// Output Schema
export const AgentVersionListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          agentVersion: Schema.optional(Schema.String),
          downloadLink: Schema.optional(Schema.String),
          osType: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  },
);
export type AgentVersionListOutput = typeof AgentVersionListOutput.Type;

// The operation
/**
 * Gets all Agent Versions along with the download link currently present.
 *
 * @param api-version - The API version to use for this operation.
 * @param osType - Defines the os type.
 */
export const AgentVersionList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentVersionListInput,
  outputSchema: AgentVersionListOutput,
}));
// Input Schema
export const ExtensionMetadataGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    publisher: Schema.String.pipe(T.PathParam()),
    extensionType: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/locations/{location}/publishers/{publisher}/extensionTypes/{extensionType}/versions/{version}",
      apiVersion: "2025-01-13",
    }),
  );
export type ExtensionMetadataGetInput = typeof ExtensionMetadataGetInput.Type;

// Output Schema
export const ExtensionMetadataGetOutput =
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
export type ExtensionMetadataGetOutput = typeof ExtensionMetadataGetOutput.Type;

// The operation
/**
 * Gets an Extension Metadata based on location, publisher, extensionType and version
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location of the Extension being received.
 * @param publisher - The publisher of the Extension being received.
 * @param extensionType - The extensionType of the Extension being received.
 * @param version - The version of the Extension being received.
 */
export const ExtensionMetadataGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExtensionMetadataGetInput,
    outputSchema: ExtensionMetadataGetOutput,
  }),
);
// Input Schema
export const ExtensionMetadataListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    publisher: Schema.String.pipe(T.PathParam()),
    extensionType: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/locations/{location}/publishers/{publisher}/extensionTypes/{extensionType}/versions",
      apiVersion: "2025-01-13",
    }),
  );
export type ExtensionMetadataListInput = typeof ExtensionMetadataListInput.Type;

// Output Schema
export const ExtensionMetadataListOutput =
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
  });
export type ExtensionMetadataListOutput =
  typeof ExtensionMetadataListOutput.Type;

// The operation
/**
 * Gets all Extension versions based on location, publisher, extensionType
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location of the Extension being received.
 * @param publisher - The publisher of the Extension being received.
 * @param extensionType - The extensionType of the Extension being received.
 */
export const ExtensionMetadataList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExtensionMetadataListInput,
    outputSchema: ExtensionMetadataListOutput,
  }),
);
// Input Schema
export const ExtensionMetadataV2GetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    publisher: Schema.String.pipe(T.PathParam()),
    extensionType: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.HybridCompute/locations/{location}/publishers/{publisher}/extensionTypes/{extensionType}/versions/{version}",
      apiVersion: "2025-01-13",
    }),
  );
export type ExtensionMetadataV2GetInput =
  typeof ExtensionMetadataV2GetInput.Type;

// Output Schema
export const ExtensionMetadataV2GetOutput =
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
export type ExtensionMetadataV2GetOutput =
  typeof ExtensionMetadataV2GetOutput.Type;

// The operation
/**
 * Gets an Extension Metadata based on location, publisher, extensionType and version
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The name of Azure region.
 * @param publisher - The publisher of the Extension being received.
 * @param extensionType - The extensionType of the Extension being received.
 * @param version - The version of the Extension being received.
 */
export const ExtensionMetadataV2Get = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExtensionMetadataV2GetInput,
    outputSchema: ExtensionMetadataV2GetOutput,
  }),
);
// Input Schema
export const ExtensionMetadataV2ListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    publisher: Schema.String.pipe(T.PathParam()),
    extensionType: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.HybridCompute/locations/{location}/publishers/{publisher}/extensionTypes/{extensionType}/versions",
      apiVersion: "2025-01-13",
    }),
  );
export type ExtensionMetadataV2ListInput =
  typeof ExtensionMetadataV2ListInput.Type;

// Output Schema
export const ExtensionMetadataV2ListOutput =
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
export type ExtensionMetadataV2ListOutput =
  typeof ExtensionMetadataV2ListOutput.Type;

// The operation
/**
 * Gets all Extension versions based on location, publisher, extensionType
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The name of Azure region.
 * @param publisher - The publisher of the Extension being received.
 * @param extensionType - The extensionType of the Extension being received.
 */
export const ExtensionMetadataV2List = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExtensionMetadataV2ListInput,
    outputSchema: ExtensionMetadataV2ListOutput,
  }),
);
// Input Schema
export const ExtensionPublisherListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.HybridCompute/locations/{location}/publishers",
      apiVersion: "2025-01-13",
    }),
  );
export type ExtensionPublisherListInput =
  typeof ExtensionPublisherListInput.Type;

// Output Schema
export const ExtensionPublisherListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ExtensionPublisherListOutput =
  typeof ExtensionPublisherListOutput.Type;

// The operation
/**
 * Gets all Extension publishers based on the location
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The name of Azure region.
 */
export const ExtensionPublisherList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExtensionPublisherListInput,
    outputSchema: ExtensionPublisherListOutput,
  }),
);
// Input Schema
export const ExtensionTypeListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    location: Schema.String.pipe(T.PathParam()),
    publisher: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridCompute/locations/{location}/publishers/{publisher}/extensionTypes",
    apiVersion: "2025-01-13",
  }),
);
export type ExtensionTypeListInput = typeof ExtensionTypeListInput.Type;

// Output Schema
export const ExtensionTypeListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ExtensionTypeListOutput = typeof ExtensionTypeListOutput.Type;

// The operation
/**
 * Gets all Extension types based on location and publisher
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The name of Azure region.
 * @param publisher - The publisher of the Extension being received.
 */
export const ExtensionTypeList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionTypeListInput,
  outputSchema: ExtensionTypeListOutput,
}));
// Input Schema
export const GatewaysCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Accepted",
            "Canceled",
            "Deleted",
          ]),
        ),
        gatewayId: Schema.optional(Schema.String),
        gatewayType: Schema.optional(Schema.Literals(["Public"])),
        gatewayEndpoint: Schema.optional(Schema.String),
        allowedFeatures: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways/{gatewayName}",
      apiVersion: "2025-01-13",
    }),
  );
export type GatewaysCreateOrUpdateInput =
  typeof GatewaysCreateOrUpdateInput.Type;

// Output Schema
export const GatewaysCreateOrUpdateOutput =
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
export type GatewaysCreateOrUpdateOutput =
  typeof GatewaysCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const GatewaysCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewaysCreateOrUpdateInput,
    outputSchema: GatewaysCreateOrUpdateOutput,
  }),
);
// Input Schema
export const GatewaysDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways/{gatewayName}",
    apiVersion: "2025-01-13",
  }),
);
export type GatewaysDeleteInput = typeof GatewaysDeleteInput.Type;

// Output Schema
export const GatewaysDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GatewaysDeleteOutput = typeof GatewaysDeleteOutput.Type;

// The operation
/**
 * The operation to delete a gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const GatewaysDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysDeleteInput,
  outputSchema: GatewaysDeleteOutput,
}));
// Input Schema
export const GatewaysGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways/{gatewayName}",
    apiVersion: "2025-01-13",
  }),
);
export type GatewaysGetInput = typeof GatewaysGetInput.Type;

// Output Schema
export const GatewaysGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GatewaysGetOutput = typeof GatewaysGetOutput.Type;

// The operation
/**
 * Retrieves information about the view of a gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const GatewaysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysGetInput,
  outputSchema: GatewaysGetOutput,
}));
// Input Schema
export const GatewaysListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways",
      apiVersion: "2025-01-13",
    }),
  );
export type GatewaysListByResourceGroupInput =
  typeof GatewaysListByResourceGroupInput.Type;

// Output Schema
export const GatewaysListByResourceGroupOutput =
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
  });
export type GatewaysListByResourceGroupOutput =
  typeof GatewaysListByResourceGroupOutput.Type;

// The operation
/**
 * The operation to get all gateways of a non-Azure machine
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const GatewaysListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewaysListByResourceGroupInput,
    outputSchema: GatewaysListByResourceGroupOutput,
  }),
);
// Input Schema
export const GatewaysListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/gateways",
      apiVersion: "2025-01-13",
    }),
  );
export type GatewaysListBySubscriptionInput =
  typeof GatewaysListBySubscriptionInput.Type;

// Output Schema
export const GatewaysListBySubscriptionOutput =
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
  });
export type GatewaysListBySubscriptionOutput =
  typeof GatewaysListBySubscriptionOutput.Type;

// The operation
/**
 * The operation to get all gateways of a non-Azure machine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const GatewaysListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewaysListBySubscriptionInput,
    outputSchema: GatewaysListBySubscriptionOutput,
  }),
);
// Input Schema
export const GatewaysUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      allowedFeatures: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways/{gatewayName}",
    apiVersion: "2025-01-13",
  }),
);
export type GatewaysUpdateInput = typeof GatewaysUpdateInput.Type;

// Output Schema
export const GatewaysUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GatewaysUpdateOutput = typeof GatewaysUpdateOutput.Type;

// The operation
/**
 * The operation to update a gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const GatewaysUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysUpdateInput,
  outputSchema: GatewaysUpdateOutput,
}));
// Input Schema
export const HybridIdentityMetadataGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    metadataName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/hybridIdentityMetadata/{metadataName}",
      apiVersion: "2025-01-13",
    }),
  );
export type HybridIdentityMetadataGetInput =
  typeof HybridIdentityMetadataGetInput.Type;

// Output Schema
export const HybridIdentityMetadataGetOutput =
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
export type HybridIdentityMetadataGetOutput =
  typeof HybridIdentityMetadataGetOutput.Type;

// The operation
/**
 * Gets HybridIdentityMetadata.
 *
 * Implements HybridIdentityMetadata GET method.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param metadataName - Name of the HybridIdentityMetadata.
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridIdentityMetadataGetInput,
    outputSchema: HybridIdentityMetadataGetOutput,
  }),
);
// Input Schema
export const HybridIdentityMetadataListByMachinesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/hybridIdentityMetadata",
      apiVersion: "2025-01-13",
    }),
  );
export type HybridIdentityMetadataListByMachinesInput =
  typeof HybridIdentityMetadataListByMachinesInput.Type;

// Output Schema
export const HybridIdentityMetadataListByMachinesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type HybridIdentityMetadataListByMachinesOutput =
  typeof HybridIdentityMetadataListByMachinesOutput.Type;

// The operation
/**
 * Implements GET HybridIdentityMetadata in a machine.
 *
 * Returns the list of HybridIdentityMetadata of the given machine.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param api-version - The API version to use for this operation.
 */
export const HybridIdentityMetadataListByMachines =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HybridIdentityMetadataListByMachinesInput,
    outputSchema: HybridIdentityMetadataListByMachinesOutput,
  }));
// Input Schema
export const LicenseProfilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        softwareAssurance: Schema.optional(
          Schema.Struct({
            softwareAssuranceCustomer: Schema.optional(Schema.Boolean),
          }),
        ),
        esuProfile: Schema.optional(
          Schema.Struct({
            assignedLicenseImmutableId: Schema.optional(Schema.String),
            esuKeys: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  sku: Schema.optional(Schema.String),
                  licenseStatus: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
        productProfile: Schema.optional(
          Schema.Struct({
            subscriptionStatus: Schema.optional(
              Schema.Literals([
                "Unknown",
                "Enabling",
                "Enabled",
                "Disabled",
                "Disabling",
                "Failed",
              ]),
            ),
            productType: Schema.optional(
              Schema.Literals(["WindowsServer", "WindowsIoTEnterprise"]),
            ),
            enrollmentDate: Schema.optional(Schema.String),
            billingStartDate: Schema.optional(Schema.String),
            disenrollmentDate: Schema.optional(Schema.String),
            billingEndDate: Schema.optional(Schema.String),
            error: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(Schema.Array(Schema.Unknown)),
                      additionalInfo: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            type: Schema.optional(Schema.String),
                            info: Schema.optional(Schema.Unknown),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                additionalInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(Schema.String),
                      info: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
              }),
            ),
            productFeatures: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  subscriptionStatus: Schema.optional(
                    Schema.Literals([
                      "Unknown",
                      "Enabling",
                      "Enabled",
                      "Disabled",
                      "Disabling",
                      "Failed",
                    ]),
                  ),
                  enrollmentDate: Schema.optional(Schema.String),
                  billingStartDate: Schema.optional(Schema.String),
                  disenrollmentDate: Schema.optional(Schema.String),
                  billingEndDate: Schema.optional(Schema.String),
                  error: Schema.optional(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      target: Schema.optional(Schema.String),
                      details: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            code: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            target: Schema.optional(Schema.String),
                            details: Schema.optional(
                              Schema.Array(Schema.Unknown),
                            ),
                            additionalInfo: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  type: Schema.optional(Schema.String),
                                  info: Schema.optional(Schema.Unknown),
                                }),
                              ),
                            ),
                          }),
                        ),
                      ),
                      additionalInfo: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            type: Schema.optional(Schema.String),
                            info: Schema.optional(Schema.Unknown),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
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
            "Accepted",
            "Canceled",
            "Deleted",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/licenseProfiles/{licenseProfileName}",
      apiVersion: "2025-01-13",
    }),
  );
export type LicenseProfilesCreateOrUpdateInput =
  typeof LicenseProfilesCreateOrUpdateInput.Type;

// Output Schema
export const LicenseProfilesCreateOrUpdateOutput =
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
export type LicenseProfilesCreateOrUpdateOutput =
  typeof LicenseProfilesCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a license profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const LicenseProfilesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LicenseProfilesCreateOrUpdateInput,
    outputSchema: LicenseProfilesCreateOrUpdateOutput,
  }));
// Input Schema
export const LicenseProfilesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/licenseProfiles/{licenseProfileName}",
      apiVersion: "2025-01-13",
    }),
  );
export type LicenseProfilesDeleteInput = typeof LicenseProfilesDeleteInput.Type;

// Output Schema
export const LicenseProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LicenseProfilesDeleteOutput =
  typeof LicenseProfilesDeleteOutput.Type;

// The operation
/**
 * The operation to delete a license profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const LicenseProfilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicenseProfilesDeleteInput,
    outputSchema: LicenseProfilesDeleteOutput,
  }),
);
// Input Schema
export const LicenseProfilesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/licenseProfiles/{licenseProfileName}",
      apiVersion: "2025-01-13",
    }),
  );
export type LicenseProfilesGetInput = typeof LicenseProfilesGetInput.Type;

// Output Schema
export const LicenseProfilesGetOutput =
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
export type LicenseProfilesGetOutput = typeof LicenseProfilesGetOutput.Type;

// The operation
/**
 * Retrieves information about the view of a license profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const LicenseProfilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicenseProfilesGetInput,
  outputSchema: LicenseProfilesGetOutput,
}));
// Input Schema
export const LicenseProfilesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/licenseProfiles",
      apiVersion: "2025-01-13",
    }),
  );
export type LicenseProfilesListInput = typeof LicenseProfilesListInput.Type;

// Output Schema
export const LicenseProfilesListOutput =
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
  });
export type LicenseProfilesListOutput = typeof LicenseProfilesListOutput.Type;

// The operation
/**
 * The operation to get all license profiles of a non-Azure machine
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the machine.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const LicenseProfilesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicenseProfilesListInput,
  outputSchema: LicenseProfilesListOutput,
}));
// Input Schema
export const LicenseProfilesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        softwareAssurance: Schema.optional(
          Schema.Struct({
            softwareAssuranceCustomer: Schema.optional(Schema.Boolean),
          }),
        ),
        esuProfile: Schema.optional(
          Schema.Struct({
            assignedLicense: Schema.optional(Schema.String),
          }),
        ),
        productProfile: Schema.optional(
          Schema.Struct({
            subscriptionStatus: Schema.optional(
              Schema.Literals(["Enable", "Disable"]),
            ),
            productType: Schema.optional(
              Schema.Literals(["WindowsServer", "WindowsIoTEnterprise"]),
            ),
            productFeatures: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  subscriptionStatus: Schema.optional(
                    Schema.Literals(["Enable", "Disable"]),
                  ),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/licenseProfiles/{licenseProfileName}",
      apiVersion: "2025-01-13",
    }),
  );
export type LicenseProfilesUpdateInput = typeof LicenseProfilesUpdateInput.Type;

// Output Schema
export const LicenseProfilesUpdateOutput =
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
export type LicenseProfilesUpdateOutput =
  typeof LicenseProfilesUpdateOutput.Type;

// The operation
/**
 * The operation to update a license profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const LicenseProfilesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicenseProfilesUpdateInput,
    outputSchema: LicenseProfilesUpdateOutput,
  }),
);
// Input Schema
export const LicensesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Accepted",
            "Canceled",
            "Deleted",
          ]),
        ),
        tenantId: Schema.optional(Schema.String),
        licenseType: Schema.optional(Schema.Literals(["ESU"])),
        licenseDetails: Schema.optional(
          Schema.Struct({
            state: Schema.optional(
              Schema.Literals(["Activated", "Deactivated"]),
            ),
            target: Schema.optional(
              Schema.Literals([
                "Windows Server 2012",
                "Windows Server 2012 R2",
              ]),
            ),
            edition: Schema.optional(
              Schema.Literals(["Standard", "Datacenter"]),
            ),
            type: Schema.optional(Schema.Literals(["pCore", "vCore"])),
            processors: Schema.optional(Schema.Number),
            assignedLicenses: Schema.optional(Schema.Number),
            immutableId: Schema.optional(Schema.String),
            volumeLicenseDetails: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  programYear: Schema.optional(
                    Schema.Literals(["Year 1", "Year 2", "Year 3"]),
                  ),
                  invoiceId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/licenses/{licenseName}",
      apiVersion: "2025-01-13",
    }),
  );
export type LicensesCreateOrUpdateInput =
  typeof LicensesCreateOrUpdateInput.Type;

// Output Schema
export const LicensesCreateOrUpdateOutput =
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
export type LicensesCreateOrUpdateOutput =
  typeof LicensesCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a license.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const LicensesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicensesCreateOrUpdateInput,
    outputSchema: LicensesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const LicensesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/licenses/{licenseName}",
    apiVersion: "2025-01-13",
  }),
);
export type LicensesDeleteInput = typeof LicensesDeleteInput.Type;

// Output Schema
export const LicensesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LicensesDeleteOutput = typeof LicensesDeleteOutput.Type;

// The operation
/**
 * The operation to delete a license.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const LicensesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicensesDeleteInput,
  outputSchema: LicensesDeleteOutput,
}));
// Input Schema
export const LicensesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/licenses/{licenseName}",
    apiVersion: "2025-01-13",
  }),
);
export type LicensesGetInput = typeof LicensesGetInput.Type;

// Output Schema
export const LicensesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type LicensesGetOutput = typeof LicensesGetOutput.Type;

// The operation
/**
 * Retrieves information about the view of a license.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const LicensesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicensesGetInput,
  outputSchema: LicensesGetOutput,
}));
// Input Schema
export const LicensesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/licenses",
      apiVersion: "2025-01-13",
    }),
  );
export type LicensesListByResourceGroupInput =
  typeof LicensesListByResourceGroupInput.Type;

// Output Schema
export const LicensesListByResourceGroupOutput =
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
  });
export type LicensesListByResourceGroupOutput =
  typeof LicensesListByResourceGroupOutput.Type;

// The operation
/**
 * The operation to get all licenses of a non-Azure machine
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const LicensesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicensesListByResourceGroupInput,
    outputSchema: LicensesListByResourceGroupOutput,
  }),
);
// Input Schema
export const LicensesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/licenses",
      apiVersion: "2025-01-13",
    }),
  );
export type LicensesListBySubscriptionInput =
  typeof LicensesListBySubscriptionInput.Type;

// Output Schema
export const LicensesListBySubscriptionOutput =
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
  });
export type LicensesListBySubscriptionOutput =
  typeof LicensesListBySubscriptionOutput.Type;

// The operation
/**
 * The operation to get all licenses of a non-Azure machine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const LicensesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicensesListBySubscriptionInput,
    outputSchema: LicensesListBySubscriptionOutput,
  }),
);
// Input Schema
export const LicensesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      licenseType: Schema.optional(Schema.Literals(["ESU"])),
      licenseDetails: Schema.optional(
        Schema.Struct({
          state: Schema.optional(Schema.Literals(["Activated", "Deactivated"])),
          target: Schema.optional(
            Schema.Literals(["Windows Server 2012", "Windows Server 2012 R2"]),
          ),
          edition: Schema.optional(Schema.Literals(["Standard", "Datacenter"])),
          type: Schema.optional(Schema.Literals(["pCore", "vCore"])),
          processors: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/licenses/{licenseName}",
    apiVersion: "2025-01-13",
  }),
);
export type LicensesUpdateInput = typeof LicensesUpdateInput.Type;

// Output Schema
export const LicensesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type LicensesUpdateOutput = typeof LicensesUpdateOutput.Type;

// The operation
/**
 * The operation to update a license.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const LicensesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicensesUpdateInput,
  outputSchema: LicensesUpdateOutput,
}));
// Input Schema
export const LicensesValidateLicenseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Accepted",
            "Canceled",
            "Deleted",
          ]),
        ),
        tenantId: Schema.optional(Schema.String),
        licenseType: Schema.optional(Schema.Literals(["ESU"])),
        licenseDetails: Schema.optional(
          Schema.Struct({
            state: Schema.optional(
              Schema.Literals(["Activated", "Deactivated"]),
            ),
            target: Schema.optional(
              Schema.Literals([
                "Windows Server 2012",
                "Windows Server 2012 R2",
              ]),
            ),
            edition: Schema.optional(
              Schema.Literals(["Standard", "Datacenter"]),
            ),
            type: Schema.optional(Schema.Literals(["pCore", "vCore"])),
            processors: Schema.optional(Schema.Number),
            assignedLicenses: Schema.optional(Schema.Number),
            immutableId: Schema.optional(Schema.String),
            volumeLicenseDetails: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  programYear: Schema.optional(
                    Schema.Literals(["Year 1", "Year 2", "Year 3"]),
                  ),
                  invoiceId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/validateLicense",
      apiVersion: "2025-01-13",
    }),
  );
export type LicensesValidateLicenseInput =
  typeof LicensesValidateLicenseInput.Type;

// Output Schema
export const LicensesValidateLicenseOutput =
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
export type LicensesValidateLicenseOutput =
  typeof LicensesValidateLicenseOutput.Type;

// The operation
/**
 * The operation to validate a license.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const LicensesValidateLicense = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicensesValidateLicenseInput,
    outputSchema: LicensesValidateLicenseOutput,
  }),
);
// Input Schema
export const MachineExtensionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    extensionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        forceUpdateTag: Schema.optional(Schema.String),
        publisher: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        typeHandlerVersion: Schema.optional(Schema.String),
        enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
        autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
        settings: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        protectedSettings: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        provisioningState: Schema.optional(Schema.String),
        instanceView: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            typeHandlerVersion: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                level: Schema.optional(
                  Schema.Literals(["Info", "Warning", "Error"]),
                ),
                displayStatus: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                time: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/extensions/{extensionName}",
      apiVersion: "2025-01-13",
    }),
  );
export type MachineExtensionsCreateOrUpdateInput =
  typeof MachineExtensionsCreateOrUpdateInput.Type;

// Output Schema
export const MachineExtensionsCreateOrUpdateOutput =
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
export type MachineExtensionsCreateOrUpdateOutput =
  typeof MachineExtensionsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update the extension.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the machine where the extension should be created or updated.
 * @param extensionName - The name of the machine extension.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineExtensionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MachineExtensionsCreateOrUpdateInput,
    outputSchema: MachineExtensionsCreateOrUpdateOutput,
  }));
// Input Schema
export const MachineExtensionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    extensionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/extensions/{extensionName}",
      apiVersion: "2025-01-13",
    }),
  );
export type MachineExtensionsDeleteInput =
  typeof MachineExtensionsDeleteInput.Type;

// Output Schema
export const MachineExtensionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MachineExtensionsDeleteOutput =
  typeof MachineExtensionsDeleteOutput.Type;

// The operation
/**
 * The operation to delete the extension.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the machine where the extension should be deleted.
 * @param extensionName - The name of the machine extension.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineExtensionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachineExtensionsDeleteInput,
    outputSchema: MachineExtensionsDeleteOutput,
  }),
);
// Input Schema
export const MachineExtensionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    extensionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/extensions/{extensionName}",
      apiVersion: "2025-01-13",
    }),
  );
export type MachineExtensionsGetInput = typeof MachineExtensionsGetInput.Type;

// Output Schema
export const MachineExtensionsGetOutput =
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
export type MachineExtensionsGetOutput = typeof MachineExtensionsGetOutput.Type;

// The operation
/**
 * The operation to get the extension.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the machine containing the extension.
 * @param extensionName - The name of the machine extension.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineExtensionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachineExtensionsGetInput,
    outputSchema: MachineExtensionsGetOutput,
  }),
);
// Input Schema
export const MachineExtensionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/extensions",
      apiVersion: "2025-01-13",
    }),
  );
export type MachineExtensionsListInput = typeof MachineExtensionsListInput.Type;

// Output Schema
export const MachineExtensionsListOutput =
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
export type MachineExtensionsListOutput =
  typeof MachineExtensionsListOutput.Type;

// The operation
/**
 * The operation to get all extensions of a non-Azure machine
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the machine containing the extension.
 * @param $expand - The expand expression to apply on the operation.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineExtensionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachineExtensionsListInput,
    outputSchema: MachineExtensionsListOutput,
  }),
);
// Input Schema
export const MachineExtensionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    extensionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        forceUpdateTag: Schema.optional(Schema.String),
        publisher: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        typeHandlerVersion: Schema.optional(Schema.String),
        enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
        autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
        settings: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        protectedSettings: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/extensions/{extensionName}",
      apiVersion: "2025-01-13",
    }),
  );
export type MachineExtensionsUpdateInput =
  typeof MachineExtensionsUpdateInput.Type;

// Output Schema
export const MachineExtensionsUpdateOutput =
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
export type MachineExtensionsUpdateOutput =
  typeof MachineExtensionsUpdateOutput.Type;

// The operation
/**
 * The operation to create or update the extension.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the machine where the extension should be created or updated.
 * @param extensionName - The name of the machine extension.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineExtensionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachineExtensionsUpdateInput,
    outputSchema: MachineExtensionsUpdateOutput,
  }),
);
// Input Schema
export const MachineRunCommandsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        source: Schema.optional(
          Schema.Struct({
            script: Schema.optional(Schema.String),
            scriptUri: Schema.optional(Schema.String),
            commandId: Schema.optional(Schema.String),
            scriptUriManagedIdentity: Schema.optional(
              Schema.Struct({
                clientId: Schema.optional(Schema.String),
                objectId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        parameters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
        ),
        protectedParameters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              value: Schema.String,
            }),
          ),
        ),
        asyncExecution: Schema.optional(Schema.Boolean),
        runAsUser: Schema.optional(Schema.String),
        runAsPassword: Schema.optional(SensitiveString),
        timeoutInSeconds: Schema.optional(Schema.Number),
        outputBlobUri: Schema.optional(Schema.String),
        errorBlobUri: Schema.optional(Schema.String),
        outputBlobManagedIdentity: Schema.optional(
          Schema.Struct({
            clientId: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
          }),
        ),
        errorBlobManagedIdentity: Schema.optional(
          Schema.Struct({
            clientId: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
        instanceView: Schema.optional(
          Schema.Struct({
            executionState: Schema.optional(
              Schema.Literals([
                "Unknown",
                "Pending",
                "Running",
                "Failed",
                "Succeeded",
                "TimedOut",
                "Canceled",
              ]),
            ),
            executionMessage: Schema.optional(Schema.String),
            exitCode: Schema.optional(Schema.Number),
            output: Schema.optional(Schema.String),
            error: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            statuses: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  level: Schema.optional(
                    Schema.Literals(["Info", "Warning", "Error"]),
                  ),
                  displayStatus: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  time: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands/{runCommandName}",
      apiVersion: "2025-01-13",
    }),
  );
export type MachineRunCommandsCreateOrUpdateInput =
  typeof MachineRunCommandsCreateOrUpdateInput.Type;

// Output Schema
export const MachineRunCommandsCreateOrUpdateOutput =
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
export type MachineRunCommandsCreateOrUpdateOutput =
  typeof MachineRunCommandsCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a run command.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineRunCommandsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MachineRunCommandsCreateOrUpdateInput,
    outputSchema: MachineRunCommandsCreateOrUpdateOutput,
  }));
// Input Schema
export const MachineRunCommandsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands/{runCommandName}",
      apiVersion: "2025-01-13",
    }),
  );
export type MachineRunCommandsDeleteInput =
  typeof MachineRunCommandsDeleteInput.Type;

// Output Schema
export const MachineRunCommandsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MachineRunCommandsDeleteOutput =
  typeof MachineRunCommandsDeleteOutput.Type;

// The operation
/**
 * The operation to delete a run command.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineRunCommandsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachineRunCommandsDeleteInput,
    outputSchema: MachineRunCommandsDeleteOutput,
  }),
);
// Input Schema
export const MachineRunCommandsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands/{runCommandName}",
      apiVersion: "2025-01-13",
    }),
  );
export type MachineRunCommandsGetInput = typeof MachineRunCommandsGetInput.Type;

// Output Schema
export const MachineRunCommandsGetOutput =
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
export type MachineRunCommandsGetOutput =
  typeof MachineRunCommandsGetOutput.Type;

// The operation
/**
 * The operation to get a run command.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineRunCommandsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachineRunCommandsGetInput,
    outputSchema: MachineRunCommandsGetOutput,
  }),
);
// Input Schema
export const MachineRunCommandsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands",
      apiVersion: "2025-01-13",
    }),
  );
export type MachineRunCommandsListInput =
  typeof MachineRunCommandsListInput.Type;

// Output Schema
export const MachineRunCommandsListOutput =
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
export type MachineRunCommandsListOutput =
  typeof MachineRunCommandsListOutput.Type;

// The operation
/**
 * The operation to get all the run commands of a non-Azure machine.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $expand - The expand expression to apply on the operation.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineRunCommandsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachineRunCommandsListInput,
    outputSchema: MachineRunCommandsListOutput,
  }),
);
// Input Schema
export const MachineRunCommandsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands/{runCommandName}",
      apiVersion: "2025-01-13",
    }),
  );
export type MachineRunCommandsUpdateInput =
  typeof MachineRunCommandsUpdateInput.Type;

// Output Schema
export const MachineRunCommandsUpdateOutput =
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
export type MachineRunCommandsUpdateOutput =
  typeof MachineRunCommandsUpdateOutput.Type;

// The operation
/**
 * The operation to update the run command.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineRunCommandsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachineRunCommandsUpdateInput,
    outputSchema: MachineRunCommandsUpdateOutput,
  }),
);
// Input Schema
export const MachinesAssessPatchesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/assessPatches",
      apiVersion: "2025-01-13",
    }),
  );
export type MachinesAssessPatchesInput = typeof MachinesAssessPatchesInput.Type;

// Output Schema
export const MachinesAssessPatchesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals([
        "Unknown",
        "InProgress",
        "Failed",
        "Succeeded",
        "CompletedWithWarnings",
      ]),
    ),
    assessmentActivityId: Schema.optional(Schema.String),
    rebootPending: Schema.optional(Schema.Boolean),
    availablePatchCountByClassification: Schema.optional(
      Schema.Struct({
        security: Schema.optional(Schema.Number),
        critical: Schema.optional(Schema.Number),
        definition: Schema.optional(Schema.Number),
        updateRollup: Schema.optional(Schema.Number),
        featurePack: Schema.optional(Schema.Number),
        servicePack: Schema.optional(Schema.Number),
        tools: Schema.optional(Schema.Number),
        updates: Schema.optional(Schema.Number),
        other: Schema.optional(Schema.Number),
      }),
    ),
    startDateTime: Schema.optional(Schema.String),
    lastModifiedDateTime: Schema.optional(Schema.String),
    startedBy: Schema.optional(Schema.Literals(["User", "Platform"])),
    patchServiceUsed: Schema.optional(
      Schema.Literals(["Unknown", "WU", "WU_WSUS", "YUM", "APT", "Zypper"]),
    ),
    osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
    errorDetails: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              target: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
              additionalInfo: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    info: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            }),
          ),
        ),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
      }),
    ),
  });
export type MachinesAssessPatchesOutput =
  typeof MachinesAssessPatchesOutput.Type;

// The operation
/**
 * The operation to assess patches on a hybrid machine identity in Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group.
 * @param name - The name of the hybrid machine.
 */
export const MachinesAssessPatches = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesAssessPatchesInput,
    outputSchema: MachinesAssessPatchesOutput,
  }),
);
// Input Schema
export const MachinesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        locationData: Schema.optional(
          Schema.Struct({
            name: Schema.String,
            city: Schema.optional(Schema.String),
            district: Schema.optional(Schema.String),
            countryOrRegion: Schema.optional(Schema.String),
          }),
        ),
        agentConfiguration: Schema.optional(
          Schema.Struct({
            proxyUrl: Schema.optional(Schema.String),
            incomingConnectionsPorts: Schema.optional(
              Schema.Array(Schema.String),
            ),
            extensionsAllowList: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  publisher: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                }),
              ),
            ),
            extensionsBlockList: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  publisher: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                }),
              ),
            ),
            proxyBypass: Schema.optional(Schema.Array(Schema.String)),
            extensionsEnabled: Schema.optional(Schema.String),
            guestConfigurationEnabled: Schema.optional(Schema.String),
            configMode: Schema.optional(Schema.Literals(["full", "monitor"])),
          }),
        ),
        serviceStatuses: Schema.optional(
          Schema.Struct({
            extensionService: Schema.optional(
              Schema.Struct({
                status: Schema.optional(Schema.String),
                startupType: Schema.optional(Schema.String),
              }),
            ),
            guestConfigurationService: Schema.optional(
              Schema.Struct({
                status: Schema.optional(Schema.String),
                startupType: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        hardwareProfile: Schema.optional(
          Schema.Struct({
            totalPhysicalMemoryInBytes: Schema.optional(Schema.Number),
            numberOfCpuSockets: Schema.optional(Schema.Number),
            processors: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  numberOfCores: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
        storageProfile: Schema.optional(
          Schema.Struct({
            disks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  path: Schema.optional(Schema.String),
                  diskType: Schema.optional(Schema.String),
                  generatedId: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  maxSizeInBytes: Schema.optional(Schema.Number),
                  usedSpaceInBytes: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
        firmwareProfile: Schema.optional(
          Schema.Struct({
            serialNumber: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
          }),
        ),
        cloudMetadata: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
          }),
        ),
        agentUpgrade: Schema.optional(
          Schema.Struct({
            desiredVersion: Schema.optional(Schema.String),
            correlationId: Schema.optional(Schema.String),
            enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
            lastAttemptDesiredVersion: Schema.optional(Schema.String),
            lastAttemptTimestamp: Schema.optional(Schema.String),
            lastAttemptStatus: Schema.optional(
              Schema.Literals(["Success", "Failed"]),
            ),
            lastAttemptMessage: Schema.optional(Schema.String),
          }),
        ),
        osProfile: Schema.optional(
          Schema.Struct({
            computerName: Schema.optional(Schema.String),
            windowsConfiguration: Schema.optional(
              Schema.Struct({
                patchSettings: Schema.optional(
                  Schema.Struct({
                    assessmentMode: Schema.optional(
                      Schema.Literals(["ImageDefault", "AutomaticByPlatform"]),
                    ),
                    patchMode: Schema.optional(
                      Schema.Literals([
                        "ImageDefault",
                        "AutomaticByPlatform",
                        "AutomaticByOS",
                        "Manual",
                      ]),
                    ),
                    enableHotpatching: Schema.optional(Schema.Boolean),
                    status: Schema.optional(
                      Schema.Struct({
                        hotpatchEnablementStatus: Schema.optional(
                          Schema.Literals([
                            "Unknown",
                            "PendingEvaluation",
                            "Disabled",
                            "ActionRequired",
                            "Enabled",
                          ]),
                        ),
                        error: Schema.optional(
                          Schema.Struct({
                            code: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            target: Schema.optional(Schema.String),
                            details: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  code: Schema.optional(Schema.String),
                                  message: Schema.optional(Schema.String),
                                  target: Schema.optional(Schema.String),
                                  details: Schema.optional(
                                    Schema.Array(Schema.Unknown),
                                  ),
                                  additionalInfo: Schema.optional(
                                    Schema.Array(
                                      Schema.Struct({
                                        type: Schema.optional(Schema.String),
                                        info: Schema.optional(Schema.Unknown),
                                      }),
                                    ),
                                  ),
                                }),
                              ),
                            ),
                            additionalInfo: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  type: Schema.optional(Schema.String),
                                  info: Schema.optional(Schema.Unknown),
                                }),
                              ),
                            ),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
            linuxConfiguration: Schema.optional(
              Schema.Struct({
                patchSettings: Schema.optional(
                  Schema.Struct({
                    assessmentMode: Schema.optional(
                      Schema.Literals(["ImageDefault", "AutomaticByPlatform"]),
                    ),
                    patchMode: Schema.optional(
                      Schema.Literals([
                        "ImageDefault",
                        "AutomaticByPlatform",
                        "AutomaticByOS",
                        "Manual",
                      ]),
                    ),
                    enableHotpatching: Schema.optional(Schema.Boolean),
                    status: Schema.optional(
                      Schema.Struct({
                        hotpatchEnablementStatus: Schema.optional(
                          Schema.Literals([
                            "Unknown",
                            "PendingEvaluation",
                            "Disabled",
                            "ActionRequired",
                            "Enabled",
                          ]),
                        ),
                        error: Schema.optional(
                          Schema.Struct({
                            code: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            target: Schema.optional(Schema.String),
                            details: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  code: Schema.optional(Schema.String),
                                  message: Schema.optional(Schema.String),
                                  target: Schema.optional(Schema.String),
                                  details: Schema.optional(
                                    Schema.Array(Schema.Unknown),
                                  ),
                                  additionalInfo: Schema.optional(
                                    Schema.Array(
                                      Schema.Struct({
                                        type: Schema.optional(Schema.String),
                                        info: Schema.optional(Schema.Unknown),
                                      }),
                                    ),
                                  ),
                                }),
                              ),
                            ),
                            additionalInfo: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  type: Schema.optional(Schema.String),
                                  info: Schema.optional(Schema.Unknown),
                                }),
                              ),
                            ),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
        licenseProfile: Schema.optional(
          Schema.Struct({
            licenseStatus: Schema.optional(
              Schema.Literals([
                "Unlicensed",
                "Licensed",
                "OOBGrace",
                "OOTGrace",
                "NonGenuineGrace",
                "Notification",
                "ExtendedGrace",
              ]),
            ),
            licenseChannel: Schema.optional(Schema.String),
            softwareAssurance: Schema.optional(
              Schema.Struct({
                softwareAssuranceCustomer: Schema.optional(Schema.Boolean),
              }),
            ),
            esuProfile: Schema.optional(
              Schema.Struct({
                assignedLicenseImmutableId: Schema.optional(Schema.String),
                esuKeys: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      sku: Schema.optional(Schema.String),
                      licenseStatus: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
            productProfile: Schema.optional(
              Schema.Struct({
                subscriptionStatus: Schema.optional(
                  Schema.Literals([
                    "Unknown",
                    "Enabling",
                    "Enabled",
                    "Disabled",
                    "Disabling",
                    "Failed",
                  ]),
                ),
                productType: Schema.optional(
                  Schema.Literals(["WindowsServer", "WindowsIoTEnterprise"]),
                ),
                enrollmentDate: Schema.optional(Schema.String),
                billingStartDate: Schema.optional(Schema.String),
                disenrollmentDate: Schema.optional(Schema.String),
                billingEndDate: Schema.optional(Schema.String),
                error: Schema.optional(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    target: Schema.optional(Schema.String),
                    details: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          target: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(Schema.Unknown),
                          ),
                          additionalInfo: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                type: Schema.optional(Schema.String),
                                info: Schema.optional(Schema.Unknown),
                              }),
                            ),
                          ),
                        }),
                      ),
                    ),
                    additionalInfo: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          type: Schema.optional(Schema.String),
                          info: Schema.optional(Schema.Unknown),
                        }),
                      ),
                    ),
                  }),
                ),
                productFeatures: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      subscriptionStatus: Schema.optional(
                        Schema.Literals([
                          "Unknown",
                          "Enabling",
                          "Enabled",
                          "Disabled",
                          "Disabling",
                          "Failed",
                        ]),
                      ),
                      enrollmentDate: Schema.optional(Schema.String),
                      billingStartDate: Schema.optional(Schema.String),
                      disenrollmentDate: Schema.optional(Schema.String),
                      billingEndDate: Schema.optional(Schema.String),
                      error: Schema.optional(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          target: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                code: Schema.optional(Schema.String),
                                message: Schema.optional(Schema.String),
                                target: Schema.optional(Schema.String),
                                details: Schema.optional(
                                  Schema.Array(Schema.Unknown),
                                ),
                                additionalInfo: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      type: Schema.optional(Schema.String),
                                      info: Schema.optional(Schema.Unknown),
                                    }),
                                  ),
                                ),
                              }),
                            ),
                          ),
                          additionalInfo: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                type: Schema.optional(Schema.String),
                                info: Schema.optional(Schema.Unknown),
                              }),
                            ),
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
        provisioningState: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals(["Connected", "Disconnected", "Error"]),
        ),
        lastStatusChange: Schema.optional(Schema.String),
        errorDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              target: Schema.optional(Schema.String),
              details: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    target: Schema.optional(Schema.String),
                    details: Schema.optional(Schema.Array(Schema.Unknown)),
                    additionalInfo: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          type: Schema.optional(Schema.String),
                          info: Schema.optional(Schema.Unknown),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
              additionalInfo: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    info: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            }),
          ),
        ),
        agentVersion: Schema.optional(Schema.String),
        vmId: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        machineFqdn: Schema.optional(Schema.String),
        clientPublicKey: Schema.optional(Schema.String),
        identityKeyStore: Schema.optional(Schema.Literals(["TPM", "Default"])),
        tpmEkCertificate: Schema.optional(Schema.String),
        osName: Schema.optional(Schema.String),
        osVersion: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.String),
        vmUuid: Schema.optional(Schema.String),
        extensions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              typeHandlerVersion: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  level: Schema.optional(
                    Schema.Literals(["Info", "Warning", "Error"]),
                  ),
                  displayStatus: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  time: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
        osSku: Schema.optional(Schema.String),
        osEdition: Schema.optional(Schema.String),
        domainName: Schema.optional(Schema.String),
        adFqdn: Schema.optional(Schema.String),
        dnsFqdn: Schema.optional(Schema.String),
        privateLinkScopeResourceId: Schema.optional(Schema.String),
        parentClusterResourceId: Schema.optional(Schema.String),
        mssqlDiscovered: Schema.optional(Schema.String),
        detectedProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            networkInterfaces: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  macAddress: Schema.optional(Schema.String),
                  id: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                  ipAddresses: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        address: Schema.optional(Schema.String),
                        ipAddressVersion: Schema.optional(Schema.String),
                        subnet: Schema.optional(
                          Schema.Struct({
                            addressPrefix: Schema.optional(Schema.String),
                          }),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
    resources: Schema.optional(
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
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned"])),
      }),
    ),
    kind: Schema.optional(
      Schema.Literals(["AVS", "HCI", "SCVMM", "VMware", "EPS", "GCP", "AWS"]),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}",
      apiVersion: "2025-01-13",
    }),
  );
export type MachinesCreateOrUpdateInput =
  typeof MachinesCreateOrUpdateInput.Type;

// Output Schema
export const MachinesCreateOrUpdateOutput =
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
export type MachinesCreateOrUpdateOutput =
  typeof MachinesCreateOrUpdateOutput.Type;

// The operation
/**
 * The operation to create or update a hybrid machine. Please note some properties can be set only during machine creation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param $expand - Expands referenced resources.
 */
export const MachinesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesCreateOrUpdateInput,
    outputSchema: MachinesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const MachinesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  machineName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}",
    apiVersion: "2025-01-13",
  }),
);
export type MachinesDeleteInput = typeof MachinesDeleteInput.Type;

// Output Schema
export const MachinesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MachinesDeleteOutput = typeof MachinesDeleteOutput.Type;

// The operation
/**
 * The operation to delete a hybrid machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 */
export const MachinesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesDeleteInput,
  outputSchema: MachinesDeleteOutput,
}));
// Input Schema
export const MachinesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  machineName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.Literals(["instanceView"])),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}",
    apiVersion: "2025-01-13",
  }),
);
export type MachinesGetInput = typeof MachinesGetInput.Type;

// Output Schema
export const MachinesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type MachinesGetOutput = typeof MachinesGetOutput.Type;

// The operation
/**
 * Retrieves information about the model view or the instance view of a hybrid machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param $expand - The expand expression to apply on the operation.
 */
export const MachinesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesGetInput,
  outputSchema: MachinesGetOutput,
}));
// Input Schema
export const MachinesInstallPatchesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    maximumDuration: Schema.String,
    rebootSetting: Schema.Literals(["IfRequired", "Never", "Always"]),
    windowsParameters: Schema.optional(
      Schema.Struct({
        classificationsToInclude: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "Critical",
              "Security",
              "UpdateRollUp",
              "FeaturePack",
              "ServicePack",
              "Definition",
              "Tools",
              "Updates",
            ]),
          ),
        ),
        kbNumbersToInclude: Schema.optional(Schema.Array(Schema.String)),
        kbNumbersToExclude: Schema.optional(Schema.Array(Schema.String)),
        excludeKbsRequiringReboot: Schema.optional(Schema.Boolean),
        maxPatchPublishDate: Schema.optional(Schema.String),
      }),
    ),
    linuxParameters: Schema.optional(
      Schema.Struct({
        classificationsToInclude: Schema.optional(
          Schema.Array(Schema.Literals(["Critical", "Security", "Other"])),
        ),
        packageNameMasksToInclude: Schema.optional(Schema.Array(Schema.String)),
        packageNameMasksToExclude: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/installPatches",
      apiVersion: "2025-01-13",
    }),
  );
export type MachinesInstallPatchesInput =
  typeof MachinesInstallPatchesInput.Type;

// Output Schema
export const MachinesInstallPatchesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals([
        "Unknown",
        "InProgress",
        "Failed",
        "Succeeded",
        "CompletedWithWarnings",
      ]),
    ),
    installationActivityId: Schema.optional(Schema.String),
    rebootStatus: Schema.optional(
      Schema.Literals([
        "Unknown",
        "NotNeeded",
        "Required",
        "Started",
        "Failed",
        "Completed",
      ]),
    ),
    maintenanceWindowExceeded: Schema.optional(Schema.Boolean),
    excludedPatchCount: Schema.optional(Schema.Number),
    notSelectedPatchCount: Schema.optional(Schema.Number),
    pendingPatchCount: Schema.optional(Schema.Number),
    installedPatchCount: Schema.optional(Schema.Number),
    failedPatchCount: Schema.optional(Schema.Number),
    startDateTime: Schema.optional(Schema.String),
    lastModifiedDateTime: Schema.optional(Schema.String),
    startedBy: Schema.optional(Schema.Literals(["User", "Platform"])),
    patchServiceUsed: Schema.optional(
      Schema.Literals(["Unknown", "WU", "WU_WSUS", "YUM", "APT", "Zypper"]),
    ),
    osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
    errorDetails: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              target: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
              additionalInfo: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    info: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            }),
          ),
        ),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
      }),
    ),
  });
export type MachinesInstallPatchesOutput =
  typeof MachinesInstallPatchesOutput.Type;

// The operation
/**
 * The operation to install patches on a hybrid machine identity in Azure.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group.
 * @param name - The name of the hybrid machine.
 */
export const MachinesInstallPatches = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesInstallPatchesInput,
    outputSchema: MachinesInstallPatchesOutput,
  }),
);
// Input Schema
export const MachinesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines",
      apiVersion: "2025-01-13",
    }),
  );
export type MachinesListByResourceGroupInput =
  typeof MachinesListByResourceGroupInput.Type;

// Output Schema
export const MachinesListByResourceGroupOutput =
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
  });
export type MachinesListByResourceGroupOutput =
  typeof MachinesListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all the hybrid machines in the specified resource group. Use the nextLink property in the response to get the next page of hybrid machines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $expand - Expands referenced resources.
 */
export const MachinesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesListByResourceGroupInput,
    outputSchema: MachinesListByResourceGroupOutput,
  }),
);
// Input Schema
export const MachinesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/machines",
      apiVersion: "2025-01-13",
    }),
  );
export type MachinesListBySubscriptionInput =
  typeof MachinesListBySubscriptionInput.Type;

// Output Schema
export const MachinesListBySubscriptionOutput =
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
  });
export type MachinesListBySubscriptionOutput =
  typeof MachinesListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all the hybrid machines in the specified subscription. Use the nextLink property in the response to get the next page of hybrid machines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachinesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesListBySubscriptionInput,
    outputSchema: MachinesListBySubscriptionOutput,
  }),
);
// Input Schema
export const MachinesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  machineName: Schema.String.pipe(T.PathParam()),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(Schema.Literals(["SystemAssigned"])),
    }),
  ),
  kind: Schema.optional(
    Schema.Literals(["AVS", "HCI", "SCVMM", "VMware", "EPS", "GCP", "AWS"]),
  ),
  properties: Schema.optional(
    Schema.Struct({
      locationData: Schema.optional(
        Schema.Struct({
          name: Schema.String,
          city: Schema.optional(Schema.String),
          district: Schema.optional(Schema.String),
          countryOrRegion: Schema.optional(Schema.String),
        }),
      ),
      osProfile: Schema.optional(
        Schema.Struct({
          computerName: Schema.optional(Schema.String),
          windowsConfiguration: Schema.optional(
            Schema.Struct({
              patchSettings: Schema.optional(
                Schema.Struct({
                  assessmentMode: Schema.optional(
                    Schema.Literals(["ImageDefault", "AutomaticByPlatform"]),
                  ),
                  patchMode: Schema.optional(
                    Schema.Literals([
                      "ImageDefault",
                      "AutomaticByPlatform",
                      "AutomaticByOS",
                      "Manual",
                    ]),
                  ),
                  enableHotpatching: Schema.optional(Schema.Boolean),
                  status: Schema.optional(
                    Schema.Struct({
                      hotpatchEnablementStatus: Schema.optional(
                        Schema.Literals([
                          "Unknown",
                          "PendingEvaluation",
                          "Disabled",
                          "ActionRequired",
                          "Enabled",
                        ]),
                      ),
                      error: Schema.optional(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          target: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                code: Schema.optional(Schema.String),
                                message: Schema.optional(Schema.String),
                                target: Schema.optional(Schema.String),
                                details: Schema.optional(
                                  Schema.Array(Schema.Unknown),
                                ),
                                additionalInfo: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      type: Schema.optional(Schema.String),
                                      info: Schema.optional(Schema.Unknown),
                                    }),
                                  ),
                                ),
                              }),
                            ),
                          ),
                          additionalInfo: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                type: Schema.optional(Schema.String),
                                info: Schema.optional(Schema.Unknown),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
          linuxConfiguration: Schema.optional(
            Schema.Struct({
              patchSettings: Schema.optional(
                Schema.Struct({
                  assessmentMode: Schema.optional(
                    Schema.Literals(["ImageDefault", "AutomaticByPlatform"]),
                  ),
                  patchMode: Schema.optional(
                    Schema.Literals([
                      "ImageDefault",
                      "AutomaticByPlatform",
                      "AutomaticByOS",
                      "Manual",
                    ]),
                  ),
                  enableHotpatching: Schema.optional(Schema.Boolean),
                  status: Schema.optional(
                    Schema.Struct({
                      hotpatchEnablementStatus: Schema.optional(
                        Schema.Literals([
                          "Unknown",
                          "PendingEvaluation",
                          "Disabled",
                          "ActionRequired",
                          "Enabled",
                        ]),
                      ),
                      error: Schema.optional(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          target: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                code: Schema.optional(Schema.String),
                                message: Schema.optional(Schema.String),
                                target: Schema.optional(Schema.String),
                                details: Schema.optional(
                                  Schema.Array(Schema.Unknown),
                                ),
                                additionalInfo: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      type: Schema.optional(Schema.String),
                                      info: Schema.optional(Schema.Unknown),
                                    }),
                                  ),
                                ),
                              }),
                            ),
                          ),
                          additionalInfo: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                type: Schema.optional(Schema.String),
                                info: Schema.optional(Schema.Unknown),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
      cloudMetadata: Schema.optional(
        Schema.Struct({
          provider: Schema.optional(Schema.String),
        }),
      ),
      agentUpgrade: Schema.optional(
        Schema.Struct({
          desiredVersion: Schema.optional(Schema.String),
          correlationId: Schema.optional(Schema.String),
          enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
          lastAttemptDesiredVersion: Schema.optional(Schema.String),
          lastAttemptTimestamp: Schema.optional(Schema.String),
          lastAttemptStatus: Schema.optional(
            Schema.Literals(["Success", "Failed"]),
          ),
          lastAttemptMessage: Schema.optional(Schema.String),
        }),
      ),
      parentClusterResourceId: Schema.optional(Schema.String),
      privateLinkScopeResourceId: Schema.optional(Schema.String),
      identityKeyStore: Schema.optional(Schema.String),
      tpmEkCertificate: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}",
    apiVersion: "2025-01-13",
  }),
);
export type MachinesUpdateInput = typeof MachinesUpdateInput.Type;

// Output Schema
export const MachinesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type MachinesUpdateOutput = typeof MachinesUpdateOutput.Type;

// The operation
/**
 * The operation to update a hybrid machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 */
export const MachinesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesUpdateInput,
  outputSchema: MachinesUpdateOutput,
}));
// Input Schema
export const NetworkConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        location: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        networkConfigurationScopeId: Schema.optional(Schema.String),
        networkConfigurationScopeResourceId: Schema.optional(Schema.String),
        keyProperties: Schema.optional(
          Schema.Struct({
            clientPublicKey: Schema.optional(
              Schema.Struct({
                publicKey: Schema.optional(Schema.String),
                notAfter: Schema.optional(Schema.String),
                renewAfter: Schema.optional(Schema.String),
              }),
            ),
            candidatePublicKey: Schema.optional(
              Schema.Struct({
                publicKey: Schema.optional(Schema.String),
                notAfter: Schema.optional(Schema.String),
                renewAfter: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.HybridCompute/networkConfigurations/current",
      apiVersion: "2025-01-13",
    }),
  );
export type NetworkConfigurationsCreateOrUpdateInput =
  typeof NetworkConfigurationsCreateOrUpdateInput.Type;

// Output Schema
export const NetworkConfigurationsCreateOrUpdateOutput =
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
export type NetworkConfigurationsCreateOrUpdateOutput =
  typeof NetworkConfigurationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update the NetworkConfiguration of the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkConfigurationsCreateOrUpdateInput,
    outputSchema: NetworkConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export const NetworkConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.HybridCompute/networkConfigurations/current",
      apiVersion: "2025-01-13",
    }),
  );
export type NetworkConfigurationsGetInput =
  typeof NetworkConfigurationsGetInput.Type;

// Output Schema
export const NetworkConfigurationsGetOutput =
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
export type NetworkConfigurationsGetOutput =
  typeof NetworkConfigurationsGetOutput.Type;

// The operation
/**
 * Returns a NetworkConfiguration for the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkConfigurationsGetInput,
    outputSchema: NetworkConfigurationsGetOutput,
  }),
);
// Input Schema
export const NetworkConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        location: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        networkConfigurationScopeId: Schema.optional(Schema.String),
        networkConfigurationScopeResourceId: Schema.optional(Schema.String),
        keyProperties: Schema.optional(
          Schema.Struct({
            clientPublicKey: Schema.optional(
              Schema.Struct({
                publicKey: Schema.optional(Schema.String),
                notAfter: Schema.optional(Schema.String),
                renewAfter: Schema.optional(Schema.String),
              }),
            ),
            candidatePublicKey: Schema.optional(
              Schema.Struct({
                publicKey: Schema.optional(Schema.String),
                notAfter: Schema.optional(Schema.String),
                renewAfter: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.HybridCompute/networkConfigurations/current",
      apiVersion: "2025-01-13",
    }),
  );
export type NetworkConfigurationsUpdateInput =
  typeof NetworkConfigurationsUpdateInput.Type;

// Output Schema
export const NetworkConfigurationsUpdateOutput =
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
export type NetworkConfigurationsUpdateOutput =
  typeof NetworkConfigurationsUpdateOutput.Type;

// The operation
/**
 * Update the endpoint to the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkConfigurationsUpdateInput,
    outputSchema: NetworkConfigurationsUpdateOutput,
  }),
);
// Input Schema
export const NetworkProfileGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/networkProfile",
    apiVersion: "2025-01-13",
  }),
);
export type NetworkProfileGetInput = typeof NetworkProfileGetInput.Type;

// Output Schema
export const NetworkProfileGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkInterfaces: Schema.optional(
      Schema.Array(
        Schema.Struct({
          macAddress: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          ipAddresses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                address: Schema.optional(Schema.String),
                ipAddressVersion: Schema.optional(Schema.String),
                subnet: Schema.optional(
                  Schema.Struct({
                    addressPrefix: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  });
export type NetworkProfileGetOutput = typeof NetworkProfileGetOutput.Type;

// The operation
/**
 * The operation to get network information of hybrid machine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 */
export const NetworkProfileGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkProfileGetInput,
  outputSchema: NetworkProfileGetOutput,
}));
// Input Schema
export const NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/networkSecurityPerimeterConfigurations/{perimeterName}",
      apiVersion: "2025-01-13",
    }),
  );
export type NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeInput =
  typeof NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        provisioningIssues: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              properties: Schema.optional(
                Schema.Struct({
                  issueType: Schema.optional(
                    Schema.Literals([
                      "MissingPerimeterConfiguration",
                      "MissingIdentityConfiguration",
                      "ConfigurationPropagationFailure",
                      "Other",
                    ]),
                  ),
                  severity: Schema.optional(
                    Schema.Literals(["Warning", "Error"]),
                  ),
                  description: Schema.optional(Schema.String),
                  suggestedResourceIds: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  suggestedAccessRules: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        properties: Schema.optional(
                          Schema.Struct({
                            direction: Schema.optional(
                              Schema.Literals(["Inbound", "Outbound"]),
                            ),
                            addressPrefixes: Schema.optional(
                              Schema.Array(Schema.String),
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
        networkSecurityPerimeter: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            perimeterGuid: Schema.optional(Schema.String),
            location: Schema.optional(Schema.String),
          }),
        ),
        resourceAssociation: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            accessMode: Schema.optional(
              Schema.Literals(["enforced", "audit", "learning"]),
            ),
          }),
        ),
        profile: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            accessRulesVersion: Schema.optional(Schema.Number),
            accessRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  properties: Schema.optional(
                    Schema.Struct({
                      direction: Schema.optional(
                        Schema.Literals(["Inbound", "Outbound"]),
                      ),
                      addressPrefixes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            diagnosticSettingsVersion: Schema.optional(Schema.Number),
            enabledLogCategories: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
  });
export type NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeOutput =
  typeof NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeOutput.Type;

// The operation
/**
 * Gets the network security perimeter configuration for a private link scope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeInput,
    outputSchema:
      NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeOutput,
  }));
// Input Schema
export const NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2025-01-13",
    }),
  );
export type NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeInput =
  typeof NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              provisioningState: Schema.optional(Schema.String),
              provisioningIssues: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    properties: Schema.optional(
                      Schema.Struct({
                        issueType: Schema.optional(
                          Schema.Literals([
                            "MissingPerimeterConfiguration",
                            "MissingIdentityConfiguration",
                            "ConfigurationPropagationFailure",
                            "Other",
                          ]),
                        ),
                        severity: Schema.optional(
                          Schema.Literals(["Warning", "Error"]),
                        ),
                        description: Schema.optional(Schema.String),
                        suggestedResourceIds: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        suggestedAccessRules: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              properties: Schema.optional(
                                Schema.Struct({
                                  direction: Schema.optional(
                                    Schema.Literals(["Inbound", "Outbound"]),
                                  ),
                                  addressPrefixes: Schema.optional(
                                    Schema.Array(Schema.String),
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
              networkSecurityPerimeter: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  perimeterGuid: Schema.optional(Schema.String),
                  location: Schema.optional(Schema.String),
                }),
              ),
              resourceAssociation: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  accessMode: Schema.optional(
                    Schema.Literals(["enforced", "audit", "learning"]),
                  ),
                }),
              ),
              profile: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  accessRulesVersion: Schema.optional(Schema.Number),
                  accessRules: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        properties: Schema.optional(
                          Schema.Struct({
                            direction: Schema.optional(
                              Schema.Literals(["Inbound", "Outbound"]),
                            ),
                            addressPrefixes: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                      }),
                    ),
                  ),
                  diagnosticSettingsVersion: Schema.optional(Schema.Number),
                  enabledLogCategories: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOutput =
  typeof NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOutput.Type;

// The operation
/**
 * Lists the network security perimeter configurations for a private link scope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkSecurityPerimeterConfigurationsListByPrivateLinkScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeInput,
    outputSchema:
      NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOutput,
  }));
// Input Schema
export const NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/networkSecurityPerimeterConfigurations/{perimeterName}/reconcile",
      apiVersion: "2025-01-13",
    }),
  );
export type NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeInput =
  typeof NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
  });
export type NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOutput =
  typeof NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOutput.Type;

// The operation
/**
 * Forces the network security perimeter configuration to refresh for a private link scope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeInput,
    outputSchema:
      NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridCompute/operations",
    apiVersion: "2025-01-13",
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
            operation: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            provider: Schema.optional(Schema.String),
          }),
        ),
        isDataAction: Schema.optional(Schema.Boolean),
      }),
    ),
  ),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Gets a list of hybrid compute operations.
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
            status: Schema.String,
            description: Schema.String,
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
        groupIds: Schema.optional(Schema.Array(Schema.String)),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-01-13",
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
 * Approve or reject a private endpoint connection with a given name.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
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
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-01-13",
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
 * Deletes a private endpoint connection with a given name.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
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
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-01-13",
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
 * Gets a private endpoint connection.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListByPrivateLinkScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateEndpointConnectionsListByPrivateLinkScopeInput =
  typeof PrivateEndpointConnectionsListByPrivateLinkScopeInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListByPrivateLinkScopeOutput =
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
export type PrivateEndpointConnectionsListByPrivateLinkScopeOutput =
  typeof PrivateEndpointConnectionsListByPrivateLinkScopeOutput.Type;

// The operation
/**
 * Gets all private endpoint connections on a private link scope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionsListByPrivateLinkScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByPrivateLinkScopeInput,
    outputSchema: PrivateEndpointConnectionsListByPrivateLinkScopeOutput,
  }));
// Input Schema
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateLinkResources/{groupName}",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateLinkResourcesGetInput =
  typeof PrivateLinkResourcesGetInput.Type;

// Output Schema
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
  });
export type PrivateLinkResourcesGetOutput =
  typeof PrivateLinkResourcesGetOutput.Type;

// The operation
/**
 * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export const PrivateLinkResourcesListByPrivateLinkScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateLinkResources",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateLinkResourcesListByPrivateLinkScopeInput =
  typeof PrivateLinkResourcesListByPrivateLinkScopeInput.Type;

// Output Schema
export const PrivateLinkResourcesListByPrivateLinkScopeOutput =
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
export type PrivateLinkResourcesListByPrivateLinkScopeOutput =
  typeof PrivateLinkResourcesListByPrivateLinkScopeOutput.Type;

// The operation
/**
 * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateLinkResourcesListByPrivateLinkScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByPrivateLinkScopeInput,
    outputSchema: PrivateLinkResourcesListByPrivateLinkScopeOutput,
  }));
// Input Schema
export const PrivateLinkScopesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        provisioningState: Schema.optional(Schema.String),
        privateLinkScopeId: Schema.optional(Schema.String),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              properties: Schema.optional(
                Schema.Struct({
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  privateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      status: Schema.String,
                      description: Schema.String,
                      actionsRequired: Schema.optional(Schema.String),
                    }),
                  ),
                  provisioningState: Schema.optional(Schema.String),
                  groupIds: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            }),
          ),
        ),
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateLinkScopesCreateOrUpdateInput =
  typeof PrivateLinkScopesCreateOrUpdateInput.Type;

// Output Schema
export const PrivateLinkScopesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type PrivateLinkScopesCreateOrUpdateOutput =
  typeof PrivateLinkScopesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates (or updates) a Azure Arc PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateLinkScopesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkScopesCreateOrUpdateInput,
    outputSchema: PrivateLinkScopesCreateOrUpdateOutput,
  }));
// Input Schema
export const PrivateLinkScopesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateLinkScopesDeleteInput =
  typeof PrivateLinkScopesDeleteInput.Type;

// Output Schema
export const PrivateLinkScopesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateLinkScopesDeleteOutput =
  typeof PrivateLinkScopesDeleteOutput.Type;

// The operation
/**
 * Deletes a Azure Arc PrivateLinkScope.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateLinkScopesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkScopesDeleteInput,
    outputSchema: PrivateLinkScopesDeleteOutput,
  }),
);
// Input Schema
export const PrivateLinkScopesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateLinkScopesGetInput = typeof PrivateLinkScopesGetInput.Type;

// Output Schema
export const PrivateLinkScopesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type PrivateLinkScopesGetOutput = typeof PrivateLinkScopesGetOutput.Type;

// The operation
/**
 * Returns a Azure Arc PrivateLinkScope.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateLinkScopesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkScopesGetInput,
    outputSchema: PrivateLinkScopesGetOutput,
  }),
);
// Input Schema
export const PrivateLinkScopesGetValidationDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/locations/{location}/privateLinkScopes/{privateLinkScopeId}",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateLinkScopesGetValidationDetailsInput =
  typeof PrivateLinkScopesGetValidationDetailsInput.Type;

// Output Schema
export const PrivateLinkScopesGetValidationDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    publicNetworkAccess: Schema.optional(
      Schema.Literals(["Enabled", "Disabled"]),
    ),
    connectionDetails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          privateIpAddress: Schema.optional(Schema.String),
          linkIdentifier: Schema.optional(Schema.String),
          groupId: Schema.optional(Schema.String),
          memberName: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type PrivateLinkScopesGetValidationDetailsOutput =
  typeof PrivateLinkScopesGetValidationDetailsOutput.Type;

// The operation
/**
 * Returns a Azure Arc PrivateLinkScope's validation details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateLinkScopesGetValidationDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkScopesGetValidationDetailsInput,
    outputSchema: PrivateLinkScopesGetValidationDetailsOutput,
  }));
// Input Schema
export const PrivateLinkScopesGetValidationDetailsForMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/privateLinkScopes/current",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateLinkScopesGetValidationDetailsForMachineInput =
  typeof PrivateLinkScopesGetValidationDetailsForMachineInput.Type;

// Output Schema
export const PrivateLinkScopesGetValidationDetailsForMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    publicNetworkAccess: Schema.optional(
      Schema.Literals(["Enabled", "Disabled"]),
    ),
    connectionDetails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          privateIpAddress: Schema.optional(Schema.String),
          linkIdentifier: Schema.optional(Schema.String),
          groupId: Schema.optional(Schema.String),
          memberName: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type PrivateLinkScopesGetValidationDetailsForMachineOutput =
  typeof PrivateLinkScopesGetValidationDetailsForMachineOutput.Type;

// The operation
/**
 * Returns a Azure Arc PrivateLinkScope's validation details for a given machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PrivateLinkScopesGetValidationDetailsForMachine =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkScopesGetValidationDetailsForMachineInput,
    outputSchema: PrivateLinkScopesGetValidationDetailsForMachineOutput,
  }));
// Input Schema
export const PrivateLinkScopesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/privateLinkScopes",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateLinkScopesListInput = typeof PrivateLinkScopesListInput.Type;

// Output Schema
export const PrivateLinkScopesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.String,
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateLinkScopesListOutput =
  typeof PrivateLinkScopesListOutput.Type;

// The operation
/**
 * Gets a list of all Azure Arc PrivateLinkScopes within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateLinkScopesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkScopesListInput,
    outputSchema: PrivateLinkScopesListOutput,
  }),
);
// Input Schema
export const PrivateLinkScopesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateLinkScopesListByResourceGroupInput =
  typeof PrivateLinkScopesListByResourceGroupInput.Type;

// Output Schema
export const PrivateLinkScopesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.String,
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateLinkScopesListByResourceGroupOutput =
  typeof PrivateLinkScopesListByResourceGroupOutput.Type;

// The operation
/**
 * Gets a list of Azure Arc PrivateLinkScopes within a resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateLinkScopesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkScopesListByResourceGroupInput,
    outputSchema: PrivateLinkScopesListByResourceGroupOutput,
  }));
// Input Schema
export const PrivateLinkScopesUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
      apiVersion: "2025-01-13",
    }),
  );
export type PrivateLinkScopesUpdateTagsInput =
  typeof PrivateLinkScopesUpdateTagsInput.Type;

// Output Schema
export const PrivateLinkScopesUpdateTagsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type PrivateLinkScopesUpdateTagsOutput =
  typeof PrivateLinkScopesUpdateTagsOutput.Type;

// The operation
/**
 * Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateLinkScopesUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkScopesUpdateTagsInput,
    outputSchema: PrivateLinkScopesUpdateTagsOutput,
  }),
);
// Input Schema
export const SettingsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{baseProvider}/{baseResourceType}/{baseResourceName}/providers/Microsoft.HybridCompute/settings/{settingsResourceName}",
    apiVersion: "2025-01-13",
  }),
);
export type SettingsGetInput = typeof SettingsGetInput.Type;

// Output Schema
export const SettingsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type SettingsGetOutput = typeof SettingsGetOutput.Type;

// The operation
/**
 * Returns the base Settings for the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SettingsGetInput,
  outputSchema: SettingsGetOutput,
}));
// Input Schema
export const SettingsPatchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      tenantId: Schema.optional(Schema.String),
      gatewayProperties: Schema.optional(
        Schema.Struct({
          gatewayResourceId: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{baseProvider}/{baseResourceType}/{baseResourceName}/providers/Microsoft.HybridCompute/settings/{settingsResourceName}",
    apiVersion: "2025-01-13",
  }),
);
export type SettingsPatchInput = typeof SettingsPatchInput.Type;

// Output Schema
export const SettingsPatchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type SettingsPatchOutput = typeof SettingsPatchOutput.Type;

// The operation
/**
 * Update the base Settings of the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SettingsPatch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SettingsPatchInput,
  outputSchema: SettingsPatchOutput,
}));
// Input Schema
export const SettingsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      tenantId: Schema.optional(Schema.String),
      gatewayProperties: Schema.optional(
        Schema.Struct({
          gatewayResourceId: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{baseProvider}/{baseResourceType}/{baseResourceName}/providers/Microsoft.HybridCompute/settings/{settingsResourceName}",
    apiVersion: "2025-01-13",
  }),
);
export type SettingsUpdateInput = typeof SettingsUpdateInput.Type;

// Output Schema
export const SettingsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type SettingsUpdateOutput = typeof SettingsUpdateOutput.Type;

// The operation
/**
 * Updates the base Settings of the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SettingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SettingsUpdateInput,
  outputSchema: SettingsUpdateOutput,
}));
// Input Schema
export const SetupExtensionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  machineName: Schema.String.pipe(T.PathParam()),
  extensions: Schema.optional(
    Schema.Array(
      Schema.Struct({
        forceUpdateTag: Schema.optional(Schema.String),
        publisher: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        typeHandlerVersion: Schema.optional(Schema.String),
        enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
        autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
        settings: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        protectedSettings: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        provisioningState: Schema.optional(Schema.String),
        instanceView: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            typeHandlerVersion: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                level: Schema.optional(
                  Schema.Literals(["Info", "Warning", "Error"]),
                ),
                displayStatus: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                time: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/addExtensions",
    apiVersion: "2025-01-13",
  }),
);
export type SetupExtensionsInput = typeof SetupExtensionsInput.Type;

// Output Schema
export const SetupExtensionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  extensions: Schema.optional(
    Schema.Array(
      Schema.Struct({
        forceUpdateTag: Schema.optional(Schema.String),
        publisher: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        typeHandlerVersion: Schema.optional(Schema.String),
        enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
        autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
        settings: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        protectedSettings: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        provisioningState: Schema.optional(Schema.String),
        instanceView: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            typeHandlerVersion: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                level: Schema.optional(
                  Schema.Literals(["Info", "Warning", "Error"]),
                ),
                displayStatus: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                time: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  ),
});
export type SetupExtensionsOutput = typeof SetupExtensionsOutput.Type;

// The operation
/**
 * The operation to Setup Machine Extensions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 */
export const SetupExtensions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SetupExtensionsInput,
  outputSchema: SetupExtensionsOutput,
}));
// Input Schema
export const UpgradeExtensionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    extensionTargets: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          targetVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/upgradeExtensions",
    apiVersion: "2025-01-13",
  }),
);
export type UpgradeExtensionsInput = typeof UpgradeExtensionsInput.Type;

// Output Schema
export const UpgradeExtensionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpgradeExtensionsOutput = typeof UpgradeExtensionsOutput.Type;

// The operation
/**
 * The operation to Upgrade Machine Extensions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 */
export const UpgradeExtensions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpgradeExtensionsInput,
  outputSchema: UpgradeExtensionsOutput,
}));
