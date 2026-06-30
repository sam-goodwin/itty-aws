/**
 * Azure Hybridcompute API
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
export interface AgentVersionGetInput {
  osType: string;
  version: string;
}
export const AgentVersionGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osType: Schema.String.pipe(T.PathParam()),
  version: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridCompute/osType/{osType}/agentVersions/{version}",
    apiVersion: "2025-01-13",
  }),
) as unknown as Schema.Codec<AgentVersionGetInput>;

// Output Schema
export interface AgentVersionGetOutput {
  agentVersion?: string;
  downloadLink?: string;
  osType?: string;
}
export const AgentVersionGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  agentVersion: Schema.optional(Schema.String),
  downloadLink: Schema.optional(Schema.String),
  osType: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AgentVersionGetOutput>;

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
export interface AgentVersionListInput {
  osType: string;
}
export const AgentVersionListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osType: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridCompute/osType/{osType}/agentVersions",
    apiVersion: "2025-01-13",
  }),
) as unknown as Schema.Codec<AgentVersionListInput>;

// Output Schema
export interface AgentVersionListOutput {
  value?: { agentVersion?: string; downloadLink?: string; osType?: string }[];
  nextLink?: string;
}
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
) as unknown as Schema.Codec<AgentVersionListOutput>;

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
export interface ExtensionMetadataGetInput {
  subscriptionId: string;
  location: string;
  publisher: string;
  extensionType: string;
  version: string;
}
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
  ) as unknown as Schema.Codec<ExtensionMetadataGetInput>;

// Output Schema
export interface ExtensionMetadataGetOutput {
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
  }) as unknown as Schema.Codec<ExtensionMetadataGetOutput>;

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
export interface ExtensionMetadataListInput {
  subscriptionId: string;
  location: string;
  publisher: string;
  extensionType: string;
}
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
  ) as unknown as Schema.Codec<ExtensionMetadataListInput>;

// Output Schema
export interface ExtensionMetadataListOutput {
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
}
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
  }) as unknown as Schema.Codec<ExtensionMetadataListOutput>;

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
export interface ExtensionMetadataV2GetInput {
  location: string;
  publisher: string;
  extensionType: string;
  version: string;
}
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
  ) as unknown as Schema.Codec<ExtensionMetadataV2GetInput>;

// Output Schema
export interface ExtensionMetadataV2GetOutput {
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
  }) as unknown as Schema.Codec<ExtensionMetadataV2GetOutput>;

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
export interface ExtensionMetadataV2ListInput {
  location: string;
  publisher: string;
  extensionType: string;
}
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
  ) as unknown as Schema.Codec<ExtensionMetadataV2ListInput>;

// Output Schema
export interface ExtensionMetadataV2ListOutput {
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
  }) as unknown as Schema.Codec<ExtensionMetadataV2ListOutput>;

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
export interface ExtensionPublisherListInput {
  location: string;
}
export const ExtensionPublisherListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.HybridCompute/locations/{location}/publishers",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<ExtensionPublisherListInput>;

// Output Schema
export interface ExtensionPublisherListOutput {
  value?: { id?: string; name?: string }[];
  nextLink?: string;
}
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
  }) as unknown as Schema.Codec<ExtensionPublisherListOutput>;

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
export interface ExtensionTypeListInput {
  location: string;
  publisher: string;
}
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
) as unknown as Schema.Codec<ExtensionTypeListInput>;

// Output Schema
export interface ExtensionTypeListOutput {
  value?: { id?: string; name?: string }[];
  nextLink?: string;
}
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
  }) as unknown as Schema.Codec<ExtensionTypeListOutput>;

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
export interface GatewaysCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  gatewayName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Accepted"
      | "Canceled"
      | "Deleted";
    gatewayId?: string;
    gatewayType?: "Public";
    gatewayEndpoint?: string;
    allowedFeatures?: string[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const GatewaysCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    gatewayName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<GatewaysCreateOrUpdateInput>;

// Output Schema
export interface GatewaysCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<GatewaysCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param gatewayName - The name of the Gateway.
 */
export const GatewaysCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GatewaysCreateOrUpdateInput,
    outputSchema: GatewaysCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface GatewaysDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  gatewayName: string;
}
export const GatewaysDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  gatewayName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways/{gatewayName}",
    apiVersion: "2025-01-13",
  }),
) as unknown as Schema.Codec<GatewaysDeleteInput>;

// Output Schema
export type GatewaysDeleteOutput = void;
export const GatewaysDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GatewaysDeleteOutput>;

// The operation
/**
 * The operation to delete a gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param gatewayName - The name of the Gateway.
 */
export const GatewaysDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysDeleteInput,
  outputSchema: GatewaysDeleteOutput,
}));
// Input Schema
export interface GatewaysGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  gatewayName: string;
}
export const GatewaysGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  gatewayName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways/{gatewayName}",
    apiVersion: "2025-01-13",
  }),
) as unknown as Schema.Codec<GatewaysGetInput>;

// Output Schema
export interface GatewaysGetOutput {
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
}) as unknown as Schema.Codec<GatewaysGetOutput>;

// The operation
/**
 * Retrieves information about the view of a gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param gatewayName - The name of the Gateway.
 */
export const GatewaysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysGetInput,
  outputSchema: GatewaysGetOutput,
}));
// Input Schema
export interface GatewaysListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
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
  ) as unknown as Schema.Codec<GatewaysListByResourceGroupInput>;

// Output Schema
export interface GatewaysListByResourceGroupOutput {
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
  }) as unknown as Schema.Codec<GatewaysListByResourceGroupOutput>;

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
export interface GatewaysListBySubscriptionInput {
  subscriptionId: string;
}
export const GatewaysListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/gateways",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<GatewaysListBySubscriptionInput>;

// Output Schema
export interface GatewaysListBySubscriptionOutput {
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
  }) as unknown as Schema.Codec<GatewaysListBySubscriptionOutput>;

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
export interface GatewaysUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  gatewayName: string;
  properties?: { allowedFeatures?: string[] };
  tags?: Record<string, string>;
}
export const GatewaysUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  gatewayName: Schema.String.pipe(T.PathParam()),
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
) as unknown as Schema.Codec<GatewaysUpdateInput>;

// Output Schema
export interface GatewaysUpdateOutput {
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
}) as unknown as Schema.Codec<GatewaysUpdateOutput>;

// The operation
/**
 * The operation to update a gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param gatewayName - The name of the Gateway.
 */
export const GatewaysUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GatewaysUpdateInput,
  outputSchema: GatewaysUpdateOutput,
}));
// Input Schema
export interface HybridIdentityMetadataGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  metadataName: string;
}
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
  ) as unknown as Schema.Codec<HybridIdentityMetadataGetInput>;

// Output Schema
export interface HybridIdentityMetadataGetOutput {
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
  }) as unknown as Schema.Codec<HybridIdentityMetadataGetOutput>;

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
export interface HybridIdentityMetadataListByMachinesInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
}
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
  ) as unknown as Schema.Codec<HybridIdentityMetadataListByMachinesInput>;

// Output Schema
export interface HybridIdentityMetadataListByMachinesOutput {
  nextLink?: string;
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
}
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
  }) as unknown as Schema.Codec<HybridIdentityMetadataListByMachinesOutput>;

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
export interface LicenseProfilesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  licenseProfileName: "default";
  properties?: {
    softwareAssurance?: { softwareAssuranceCustomer?: boolean };
    esuProfile?: {
      assignedLicenseImmutableId?: string;
      esuKeys?: { sku?: string; licenseStatus?: number }[];
    };
    productProfile?: {
      subscriptionStatus?:
        | "Unknown"
        | "Enabling"
        | "Enabled"
        | "Disabled"
        | "Disabling"
        | "Failed";
      productType?: "WindowsServer" | "WindowsIoTEnterprise";
      enrollmentDate?: string;
      billingStartDate?: string;
      disenrollmentDate?: string;
      billingEndDate?: string;
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: {
          code?: string;
          message?: string;
          target?: string;
          details?: unknown[];
          additionalInfo?: { type?: string; info?: unknown }[];
        }[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
      productFeatures?: {
        name?: string;
        subscriptionStatus?:
          | "Unknown"
          | "Enabling"
          | "Enabled"
          | "Disabled"
          | "Disabling"
          | "Failed";
        enrollmentDate?: string;
        billingStartDate?: string;
        disenrollmentDate?: string;
        billingEndDate?: string;
        error?: {
          code?: string;
          message?: string;
          target?: string;
          details?: {
            code?: string;
            message?: string;
            target?: string;
            details?: unknown[];
            additionalInfo?: { type?: string; info?: unknown }[];
          }[];
          additionalInfo?: { type?: string; info?: unknown }[];
        };
      }[];
    };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Accepted"
      | "Canceled"
      | "Deleted";
  };
  tags?: Record<string, string>;
  location: string;
}
export const LicenseProfilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    licenseProfileName: Schema.Literals(["default"]).pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<LicenseProfilesCreateOrUpdateInput>;

// Output Schema
export interface LicenseProfilesCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<LicenseProfilesCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a license profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param licenseProfileName - The name of the license profile.
 */
export const LicenseProfilesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LicenseProfilesCreateOrUpdateInput,
    outputSchema: LicenseProfilesCreateOrUpdateOutput,
  }));
// Input Schema
export interface LicenseProfilesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  licenseProfileName: "default";
}
export const LicenseProfilesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    licenseProfileName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/licenseProfiles/{licenseProfileName}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<LicenseProfilesDeleteInput>;

// Output Schema
export type LicenseProfilesDeleteOutput = void;
export const LicenseProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LicenseProfilesDeleteOutput>;

// The operation
/**
 * The operation to delete a license profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param licenseProfileName - The name of the license profile.
 */
export const LicenseProfilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicenseProfilesDeleteInput,
    outputSchema: LicenseProfilesDeleteOutput,
  }),
);
// Input Schema
export interface LicenseProfilesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  licenseProfileName: "default";
}
export const LicenseProfilesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    licenseProfileName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/licenseProfiles/{licenseProfileName}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<LicenseProfilesGetInput>;

// Output Schema
export interface LicenseProfilesGetOutput {
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
  }) as unknown as Schema.Codec<LicenseProfilesGetOutput>;

// The operation
/**
 * Retrieves information about the view of a license profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param licenseProfileName - The name of the license profile.
 */
export const LicenseProfilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicenseProfilesGetInput,
  outputSchema: LicenseProfilesGetOutput,
}));
// Input Schema
export interface LicenseProfilesListInput {
  resourceGroupName: string;
  machineName: string;
  subscriptionId: string;
}
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
  ) as unknown as Schema.Codec<LicenseProfilesListInput>;

// Output Schema
export interface LicenseProfilesListOutput {
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
  }) as unknown as Schema.Codec<LicenseProfilesListOutput>;

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
export interface LicenseProfilesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  licenseProfileName: "default";
  properties?: {
    softwareAssurance?: { softwareAssuranceCustomer?: boolean };
    esuProfile?: { assignedLicense?: string };
    productProfile?: {
      subscriptionStatus?: "Enable" | "Disable";
      productType?: "WindowsServer" | "WindowsIoTEnterprise";
      productFeatures?: {
        name?: string;
        subscriptionStatus?: "Enable" | "Disable";
      }[];
    };
  };
  tags?: Record<string, string>;
}
export const LicenseProfilesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    licenseProfileName: Schema.Literals(["default"]).pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<LicenseProfilesUpdateInput>;

// Output Schema
export interface LicenseProfilesUpdateOutput {
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
  }) as unknown as Schema.Codec<LicenseProfilesUpdateOutput>;

// The operation
/**
 * The operation to update a license profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param licenseProfileName - The name of the license profile.
 */
export const LicenseProfilesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicenseProfilesUpdateInput,
    outputSchema: LicenseProfilesUpdateOutput,
  }),
);
// Input Schema
export interface LicensesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  licenseName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Accepted"
      | "Canceled"
      | "Deleted";
    tenantId?: string;
    licenseType?: "ESU";
    licenseDetails?: {
      state?: "Activated" | "Deactivated";
      target?: "Windows Server 2012" | "Windows Server 2012 R2";
      edition?: "Standard" | "Datacenter";
      type?: "pCore" | "vCore";
      processors?: number;
      assignedLicenses?: number;
      immutableId?: string;
      volumeLicenseDetails?: {
        programYear?: "Year 1" | "Year 2" | "Year 3";
        invoiceId?: string;
      }[];
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const LicensesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    licenseName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<LicensesCreateOrUpdateInput>;

// Output Schema
export interface LicensesCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<LicensesCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a license.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param licenseName - The name of the license.
 */
export const LicensesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicensesCreateOrUpdateInput,
    outputSchema: LicensesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface LicensesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  licenseName: string;
}
export const LicensesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  licenseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/licenses/{licenseName}",
    apiVersion: "2025-01-13",
  }),
) as unknown as Schema.Codec<LicensesDeleteInput>;

// Output Schema
export type LicensesDeleteOutput = void;
export const LicensesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LicensesDeleteOutput>;

// The operation
/**
 * The operation to delete a license.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param licenseName - The name of the license.
 */
export const LicensesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicensesDeleteInput,
  outputSchema: LicensesDeleteOutput,
}));
// Input Schema
export interface LicensesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  licenseName: string;
}
export const LicensesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  licenseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/licenses/{licenseName}",
    apiVersion: "2025-01-13",
  }),
) as unknown as Schema.Codec<LicensesGetInput>;

// Output Schema
export interface LicensesGetOutput {
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
}) as unknown as Schema.Codec<LicensesGetOutput>;

// The operation
/**
 * Retrieves information about the view of a license.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param licenseName - The name of the license.
 */
export const LicensesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicensesGetInput,
  outputSchema: LicensesGetOutput,
}));
// Input Schema
export interface LicensesListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
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
  ) as unknown as Schema.Codec<LicensesListByResourceGroupInput>;

// Output Schema
export interface LicensesListByResourceGroupOutput {
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
  }) as unknown as Schema.Codec<LicensesListByResourceGroupOutput>;

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
export interface LicensesListBySubscriptionInput {
  subscriptionId: string;
}
export const LicensesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/licenses",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<LicensesListBySubscriptionInput>;

// Output Schema
export interface LicensesListBySubscriptionOutput {
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
  }) as unknown as Schema.Codec<LicensesListBySubscriptionOutput>;

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
export interface LicensesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  licenseName: string;
  properties?: {
    licenseType?: "ESU";
    licenseDetails?: {
      state?: "Activated" | "Deactivated";
      target?: "Windows Server 2012" | "Windows Server 2012 R2";
      edition?: "Standard" | "Datacenter";
      type?: "pCore" | "vCore";
      processors?: number;
    };
  };
  tags?: Record<string, string>;
}
export const LicensesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  licenseName: Schema.String.pipe(T.PathParam()),
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
) as unknown as Schema.Codec<LicensesUpdateInput>;

// Output Schema
export interface LicensesUpdateOutput {
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
}) as unknown as Schema.Codec<LicensesUpdateOutput>;

// The operation
/**
 * The operation to update a license.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param licenseName - The name of the license.
 */
export const LicensesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicensesUpdateInput,
  outputSchema: LicensesUpdateOutput,
}));
// Input Schema
export interface LicensesValidateLicenseInput {
  subscriptionId: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Accepted"
      | "Canceled"
      | "Deleted";
    tenantId?: string;
    licenseType?: "ESU";
    licenseDetails?: {
      state?: "Activated" | "Deactivated";
      target?: "Windows Server 2012" | "Windows Server 2012 R2";
      edition?: "Standard" | "Datacenter";
      type?: "pCore" | "vCore";
      processors?: number;
      assignedLicenses?: number;
      immutableId?: string;
      volumeLicenseDetails?: {
        programYear?: "Year 1" | "Year 2" | "Year 3";
        invoiceId?: string;
      }[];
    };
  };
  tags?: Record<string, string>;
  location: string;
}
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
  ) as unknown as Schema.Codec<LicensesValidateLicenseInput>;

// Output Schema
export interface LicensesValidateLicenseOutput {
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
  }) as unknown as Schema.Codec<LicensesValidateLicenseOutput>;

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
export interface MachineExtensionsCreateOrUpdateInput {
  resourceGroupName: string;
  machineName: string;
  extensionName: string;
  subscriptionId: string;
  properties?: {
    forceUpdateTag?: string;
    publisher?: string;
    type?: string;
    typeHandlerVersion?: string;
    enableAutomaticUpgrade?: boolean;
    autoUpgradeMinorVersion?: boolean;
    settings?: Record<string, unknown>;
    protectedSettings?: Record<string, unknown>;
    provisioningState?: string;
    instanceView?: {
      name?: string;
      type?: string;
      typeHandlerVersion?: string;
      status?: {
        code?: string;
        level?: "Info" | "Warning" | "Error";
        displayStatus?: string;
        message?: string;
        time?: string;
      };
    };
  };
  tags?: Record<string, string>;
  location: string;
}
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
  ) as unknown as Schema.Codec<MachineExtensionsCreateOrUpdateInput>;

// Output Schema
export interface MachineExtensionsCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<MachineExtensionsCreateOrUpdateOutput>;

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
export interface MachineExtensionsDeleteInput {
  resourceGroupName: string;
  machineName: string;
  extensionName: string;
  subscriptionId: string;
}
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
  ) as unknown as Schema.Codec<MachineExtensionsDeleteInput>;

// Output Schema
export type MachineExtensionsDeleteOutput = void;
export const MachineExtensionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MachineExtensionsDeleteOutput>;

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
export interface MachineExtensionsGetInput {
  resourceGroupName: string;
  machineName: string;
  extensionName: string;
  subscriptionId: string;
}
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
  ) as unknown as Schema.Codec<MachineExtensionsGetInput>;

// Output Schema
export interface MachineExtensionsGetOutput {
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
  }) as unknown as Schema.Codec<MachineExtensionsGetOutput>;

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
export interface MachineExtensionsListInput {
  resourceGroupName: string;
  machineName: string;
  subscriptionId: string;
  $expand?: string;
}
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
  ) as unknown as Schema.Codec<MachineExtensionsListInput>;

// Output Schema
export interface MachineExtensionsListOutput {
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
  }) as unknown as Schema.Codec<MachineExtensionsListOutput>;

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
export interface MachineExtensionsUpdateInput {
  resourceGroupName: string;
  machineName: string;
  extensionName: string;
  subscriptionId: string;
  properties?: {
    forceUpdateTag?: string;
    publisher?: string;
    type?: string;
    typeHandlerVersion?: string;
    enableAutomaticUpgrade?: boolean;
    autoUpgradeMinorVersion?: boolean;
    settings?: Record<string, unknown>;
    protectedSettings?: Record<string, unknown>;
  };
  tags?: Record<string, string>;
}
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
  ) as unknown as Schema.Codec<MachineExtensionsUpdateInput>;

// Output Schema
export interface MachineExtensionsUpdateOutput {
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
  }) as unknown as Schema.Codec<MachineExtensionsUpdateOutput>;

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
export interface MachineRunCommandsCreateOrUpdateInput {
  resourceGroupName: string;
  machineName: string;
  runCommandName: string;
  subscriptionId: string;
  properties?: {
    source?: {
      script?: string;
      scriptUri?: string;
      commandId?: string;
      scriptUriManagedIdentity?: { clientId?: string; objectId?: string };
    };
    parameters?: { name: string; value: string }[];
    protectedParameters?: { name: string; value: string }[];
    asyncExecution?: boolean;
    runAsUser?: string;
    runAsPassword?: string | Redacted.Redacted<string>;
    timeoutInSeconds?: number;
    outputBlobUri?: string;
    errorBlobUri?: string;
    outputBlobManagedIdentity?: { clientId?: string; objectId?: string };
    errorBlobManagedIdentity?: { clientId?: string; objectId?: string };
    provisioningState?: string;
    instanceView?: {
      executionState?:
        | "Unknown"
        | "Pending"
        | "Running"
        | "Failed"
        | "Succeeded"
        | "TimedOut"
        | "Canceled";
      executionMessage?: string;
      exitCode?: number;
      output?: string;
      error?: string;
      startTime?: string;
      endTime?: string;
      statuses?: {
        code?: string;
        level?: "Info" | "Warning" | "Error";
        displayStatus?: string;
        message?: string;
        time?: string;
      }[];
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const MachineRunCommandsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<MachineRunCommandsCreateOrUpdateInput>;

// Output Schema
export interface MachineRunCommandsCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<MachineRunCommandsCreateOrUpdateOutput>;

// The operation
/**
 * The operation to create or update a run command.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param runCommandName - The name of the run command.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MachineRunCommandsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MachineRunCommandsCreateOrUpdateInput,
    outputSchema: MachineRunCommandsCreateOrUpdateOutput,
  }));
// Input Schema
export interface MachineRunCommandsDeleteInput {
  resourceGroupName: string;
  machineName: string;
  runCommandName: string;
  subscriptionId: string;
}
export const MachineRunCommandsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands/{runCommandName}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<MachineRunCommandsDeleteInput>;

// Output Schema
export type MachineRunCommandsDeleteOutput = void;
export const MachineRunCommandsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MachineRunCommandsDeleteOutput>;

// The operation
/**
 * The operation to delete a run command.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param runCommandName - The name of the run command.
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
export interface MachineRunCommandsGetInput {
  resourceGroupName: string;
  machineName: string;
  runCommandName: string;
  subscriptionId: string;
}
export const MachineRunCommandsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands/{runCommandName}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<MachineRunCommandsGetInput>;

// Output Schema
export interface MachineRunCommandsGetOutput {
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
  }) as unknown as Schema.Codec<MachineRunCommandsGetOutput>;

// The operation
/**
 * The operation to get a run command.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param runCommandName - The name of the run command.
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
export interface MachineRunCommandsListInput {
  resourceGroupName: string;
  machineName: string;
  subscriptionId: string;
  $expand?: string;
}
export const MachineRunCommandsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<MachineRunCommandsListInput>;

// Output Schema
export interface MachineRunCommandsListOutput {
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
  }) as unknown as Schema.Codec<MachineRunCommandsListOutput>;

// The operation
/**
 * The operation to get all the run commands of a non-Azure machine.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
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
export interface MachineRunCommandsUpdateInput {
  resourceGroupName: string;
  machineName: string;
  runCommandName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const MachineRunCommandsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    runCommandName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands/{runCommandName}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<MachineRunCommandsUpdateInput>;

// Output Schema
export interface MachineRunCommandsUpdateOutput {
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
  }) as unknown as Schema.Codec<MachineRunCommandsUpdateOutput>;

// The operation
/**
 * The operation to update the run command.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the hybrid machine.
 * @param runCommandName - The name of the run command.
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
export interface MachinesAssessPatchesInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
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
  ) as unknown as Schema.Codec<MachinesAssessPatchesInput>;

// Output Schema
export interface MachinesAssessPatchesOutput {
  status?:
    | "Unknown"
    | "InProgress"
    | "Failed"
    | "Succeeded"
    | "CompletedWithWarnings";
  assessmentActivityId?: string;
  rebootPending?: boolean;
  availablePatchCountByClassification?: {
    security?: number;
    critical?: number;
    definition?: number;
    updateRollup?: number;
    featurePack?: number;
    servicePack?: number;
    tools?: number;
    updates?: number;
    other?: number;
  };
  startDateTime?: string;
  lastModifiedDateTime?: string;
  startedBy?: "User" | "Platform";
  patchServiceUsed?: "Unknown" | "WU" | "WU_WSUS" | "YUM" | "APT" | "Zypper";
  osType?: "Windows" | "Linux";
  errorDetails?: {
    code?: string;
    message?: string;
    target?: string;
    details?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    }[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
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
  }) as unknown as Schema.Codec<MachinesAssessPatchesOutput>;

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
export interface MachinesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  $expand?: string;
  properties?: {
    locationData?: {
      name: string;
      city?: string;
      district?: string;
      countryOrRegion?: string;
    };
    agentConfiguration?: {
      proxyUrl?: string;
      incomingConnectionsPorts?: string[];
      extensionsAllowList?: { publisher?: string; type?: string }[];
      extensionsBlockList?: { publisher?: string; type?: string }[];
      proxyBypass?: string[];
      extensionsEnabled?: string;
      guestConfigurationEnabled?: string;
      configMode?: "full" | "monitor";
    };
    serviceStatuses?: {
      extensionService?: { status?: string; startupType?: string };
      guestConfigurationService?: { status?: string; startupType?: string };
    };
    hardwareProfile?: {
      totalPhysicalMemoryInBytes?: number;
      numberOfCpuSockets?: number;
      processors?: { name?: string; numberOfCores?: number }[];
    };
    storageProfile?: {
      disks?: {
        path?: string;
        diskType?: string;
        generatedId?: string;
        id?: string;
        name?: string;
        maxSizeInBytes?: number;
        usedSpaceInBytes?: number;
      }[];
    };
    firmwareProfile?: { serialNumber?: string; type?: string };
    cloudMetadata?: { provider?: string };
    agentUpgrade?: {
      desiredVersion?: string;
      correlationId?: string;
      enableAutomaticUpgrade?: boolean;
      lastAttemptDesiredVersion?: string;
      lastAttemptTimestamp?: string;
      lastAttemptStatus?: "Success" | "Failed";
      lastAttemptMessage?: string;
    };
    osProfile?: {
      computerName?: string;
      windowsConfiguration?: {
        patchSettings?: {
          assessmentMode?: "ImageDefault" | "AutomaticByPlatform";
          patchMode?:
            | "ImageDefault"
            | "AutomaticByPlatform"
            | "AutomaticByOS"
            | "Manual";
          enableHotpatching?: boolean;
          status?: {
            hotpatchEnablementStatus?:
              | "Unknown"
              | "PendingEvaluation"
              | "Disabled"
              | "ActionRequired"
              | "Enabled";
            error?: {
              code?: string;
              message?: string;
              target?: string;
              details?: {
                code?: string;
                message?: string;
                target?: string;
                details?: unknown[];
                additionalInfo?: { type?: string; info?: unknown }[];
              }[];
              additionalInfo?: { type?: string; info?: unknown }[];
            };
          };
        };
      };
      linuxConfiguration?: {
        patchSettings?: {
          assessmentMode?: "ImageDefault" | "AutomaticByPlatform";
          patchMode?:
            | "ImageDefault"
            | "AutomaticByPlatform"
            | "AutomaticByOS"
            | "Manual";
          enableHotpatching?: boolean;
          status?: {
            hotpatchEnablementStatus?:
              | "Unknown"
              | "PendingEvaluation"
              | "Disabled"
              | "ActionRequired"
              | "Enabled";
            error?: {
              code?: string;
              message?: string;
              target?: string;
              details?: {
                code?: string;
                message?: string;
                target?: string;
                details?: unknown[];
                additionalInfo?: { type?: string; info?: unknown }[];
              }[];
              additionalInfo?: { type?: string; info?: unknown }[];
            };
          };
        };
      };
    };
    licenseProfile?: {
      licenseStatus?:
        | "Unlicensed"
        | "Licensed"
        | "OOBGrace"
        | "OOTGrace"
        | "NonGenuineGrace"
        | "Notification"
        | "ExtendedGrace";
      licenseChannel?: string;
      softwareAssurance?: { softwareAssuranceCustomer?: boolean };
      esuProfile?: {
        assignedLicenseImmutableId?: string;
        esuKeys?: { sku?: string; licenseStatus?: number }[];
      };
      productProfile?: {
        subscriptionStatus?:
          | "Unknown"
          | "Enabling"
          | "Enabled"
          | "Disabled"
          | "Disabling"
          | "Failed";
        productType?: "WindowsServer" | "WindowsIoTEnterprise";
        enrollmentDate?: string;
        billingStartDate?: string;
        disenrollmentDate?: string;
        billingEndDate?: string;
        error?: {
          code?: string;
          message?: string;
          target?: string;
          details?: {
            code?: string;
            message?: string;
            target?: string;
            details?: unknown[];
            additionalInfo?: { type?: string; info?: unknown }[];
          }[];
          additionalInfo?: { type?: string; info?: unknown }[];
        };
        productFeatures?: {
          name?: string;
          subscriptionStatus?:
            | "Unknown"
            | "Enabling"
            | "Enabled"
            | "Disabled"
            | "Disabling"
            | "Failed";
          enrollmentDate?: string;
          billingStartDate?: string;
          disenrollmentDate?: string;
          billingEndDate?: string;
          error?: {
            code?: string;
            message?: string;
            target?: string;
            details?: {
              code?: string;
              message?: string;
              target?: string;
              details?: unknown[];
              additionalInfo?: { type?: string; info?: unknown }[];
            }[];
            additionalInfo?: { type?: string; info?: unknown }[];
          };
        }[];
      };
    };
    provisioningState?: string;
    status?: "Connected" | "Disconnected" | "Error";
    lastStatusChange?: string;
    errorDetails?: {
      code?: string;
      message?: string;
      target?: string;
      details?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      }[];
      additionalInfo?: { type?: string; info?: unknown }[];
    }[];
    agentVersion?: string;
    vmId?: string;
    displayName?: string;
    machineFqdn?: string;
    clientPublicKey?: string;
    identityKeyStore?: "TPM" | "Default";
    tpmEkCertificate?: string;
    osName?: string;
    osVersion?: string;
    osType?: string;
    vmUuid?: string;
    extensions?: {
      name?: string;
      type?: string;
      typeHandlerVersion?: string;
      status?: {
        code?: string;
        level?: "Info" | "Warning" | "Error";
        displayStatus?: string;
        message?: string;
        time?: string;
      };
    }[];
    osSku?: string;
    osEdition?: string;
    domainName?: string;
    adFqdn?: string;
    dnsFqdn?: string;
    privateLinkScopeResourceId?: string;
    parentClusterResourceId?: string;
    mssqlDiscovered?: string;
    detectedProperties?: Record<string, string>;
    networkProfile?: {
      networkInterfaces?: {
        macAddress?: string;
        id?: string;
        name?: string;
        ipAddresses?: {
          address?: string;
          ipAddressVersion?: string;
          subnet?: { addressPrefix?: string };
        }[];
      }[];
    };
  };
  resources?: {
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
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned";
  };
  kind?: "AVS" | "HCI" | "SCVMM" | "VMware" | "EPS" | "GCP" | "AWS";
  tags?: Record<string, string>;
  location: string;
}
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
  ) as unknown as Schema.Codec<MachinesCreateOrUpdateInput>;

// Output Schema
export interface MachinesCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<MachinesCreateOrUpdateOutput>;

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
export interface MachinesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
}
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
) as unknown as Schema.Codec<MachinesDeleteInput>;

// Output Schema
export type MachinesDeleteOutput = void;
export const MachinesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MachinesDeleteOutput>;

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
export interface MachinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  $expand?: "instanceView";
}
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
) as unknown as Schema.Codec<MachinesGetInput>;

// Output Schema
export interface MachinesGetOutput {
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
}) as unknown as Schema.Codec<MachinesGetOutput>;

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
export interface MachinesInstallPatchesInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  maximumDuration: string;
  rebootSetting: "IfRequired" | "Never" | "Always";
  windowsParameters?: {
    classificationsToInclude?: (
      | "Critical"
      | "Security"
      | "UpdateRollUp"
      | "FeaturePack"
      | "ServicePack"
      | "Definition"
      | "Tools"
      | "Updates"
    )[];
    kbNumbersToInclude?: string[];
    kbNumbersToExclude?: string[];
    excludeKbsRequiringReboot?: boolean;
    maxPatchPublishDate?: string;
  };
  linuxParameters?: {
    classificationsToInclude?: ("Critical" | "Security" | "Other")[];
    packageNameMasksToInclude?: string[];
    packageNameMasksToExclude?: string[];
  };
}
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
  ) as unknown as Schema.Codec<MachinesInstallPatchesInput>;

// Output Schema
export interface MachinesInstallPatchesOutput {
  status?:
    | "Unknown"
    | "InProgress"
    | "Failed"
    | "Succeeded"
    | "CompletedWithWarnings";
  installationActivityId?: string;
  rebootStatus?:
    | "Unknown"
    | "NotNeeded"
    | "Required"
    | "Started"
    | "Failed"
    | "Completed";
  maintenanceWindowExceeded?: boolean;
  excludedPatchCount?: number;
  notSelectedPatchCount?: number;
  pendingPatchCount?: number;
  installedPatchCount?: number;
  failedPatchCount?: number;
  startDateTime?: string;
  lastModifiedDateTime?: string;
  startedBy?: "User" | "Platform";
  patchServiceUsed?: "Unknown" | "WU" | "WU_WSUS" | "YUM" | "APT" | "Zypper";
  osType?: "Windows" | "Linux";
  errorDetails?: {
    code?: string;
    message?: string;
    target?: string;
    details?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    }[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
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
  }) as unknown as Schema.Codec<MachinesInstallPatchesOutput>;

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
export interface MachinesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $expand?: string;
}
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
  ) as unknown as Schema.Codec<MachinesListByResourceGroupInput>;

// Output Schema
export interface MachinesListByResourceGroupOutput {
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
  }) as unknown as Schema.Codec<MachinesListByResourceGroupOutput>;

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
export interface MachinesListBySubscriptionInput {
  subscriptionId: string;
}
export const MachinesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/machines",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<MachinesListBySubscriptionInput>;

// Output Schema
export interface MachinesListBySubscriptionOutput {
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
  }) as unknown as Schema.Codec<MachinesListBySubscriptionOutput>;

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
export interface MachinesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned";
  };
  kind?: "AVS" | "HCI" | "SCVMM" | "VMware" | "EPS" | "GCP" | "AWS";
  properties?: {
    locationData?: {
      name: string;
      city?: string;
      district?: string;
      countryOrRegion?: string;
    };
    osProfile?: {
      computerName?: string;
      windowsConfiguration?: {
        patchSettings?: {
          assessmentMode?: "ImageDefault" | "AutomaticByPlatform";
          patchMode?:
            | "ImageDefault"
            | "AutomaticByPlatform"
            | "AutomaticByOS"
            | "Manual";
          enableHotpatching?: boolean;
          status?: {
            hotpatchEnablementStatus?:
              | "Unknown"
              | "PendingEvaluation"
              | "Disabled"
              | "ActionRequired"
              | "Enabled";
            error?: {
              code?: string;
              message?: string;
              target?: string;
              details?: {
                code?: string;
                message?: string;
                target?: string;
                details?: unknown[];
                additionalInfo?: { type?: string; info?: unknown }[];
              }[];
              additionalInfo?: { type?: string; info?: unknown }[];
            };
          };
        };
      };
      linuxConfiguration?: {
        patchSettings?: {
          assessmentMode?: "ImageDefault" | "AutomaticByPlatform";
          patchMode?:
            | "ImageDefault"
            | "AutomaticByPlatform"
            | "AutomaticByOS"
            | "Manual";
          enableHotpatching?: boolean;
          status?: {
            hotpatchEnablementStatus?:
              | "Unknown"
              | "PendingEvaluation"
              | "Disabled"
              | "ActionRequired"
              | "Enabled";
            error?: {
              code?: string;
              message?: string;
              target?: string;
              details?: {
                code?: string;
                message?: string;
                target?: string;
                details?: unknown[];
                additionalInfo?: { type?: string; info?: unknown }[];
              }[];
              additionalInfo?: { type?: string; info?: unknown }[];
            };
          };
        };
      };
    };
    cloudMetadata?: { provider?: string };
    agentUpgrade?: {
      desiredVersion?: string;
      correlationId?: string;
      enableAutomaticUpgrade?: boolean;
      lastAttemptDesiredVersion?: string;
      lastAttemptTimestamp?: string;
      lastAttemptStatus?: "Success" | "Failed";
      lastAttemptMessage?: string;
    };
    parentClusterResourceId?: string;
    privateLinkScopeResourceId?: string;
    identityKeyStore?: string;
    tpmEkCertificate?: string;
  };
  tags?: Record<string, string>;
}
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
) as unknown as Schema.Codec<MachinesUpdateInput>;

// Output Schema
export interface MachinesUpdateOutput {
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
}) as unknown as Schema.Codec<MachinesUpdateOutput>;

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
export interface NetworkConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  properties?: {
    location?: string;
    tenantId?: string;
    networkConfigurationScopeId?: string;
    networkConfigurationScopeResourceId?: string;
    keyProperties?: {
      clientPublicKey?: {
        publicKey?: string;
        notAfter?: string;
        renewAfter?: string;
      };
      candidatePublicKey?: {
        publicKey?: string;
        notAfter?: string;
        renewAfter?: string;
      };
    };
  };
}
export const NetworkConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<NetworkConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface NetworkConfigurationsCreateOrUpdateOutput {
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
  }) as unknown as Schema.Codec<NetworkConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the NetworkConfiguration of the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the target machine to get the private link scope validation details for.
 */
export const NetworkConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkConfigurationsCreateOrUpdateInput,
    outputSchema: NetworkConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NetworkConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
}
export const NetworkConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.HybridCompute/networkConfigurations/current",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<NetworkConfigurationsGetInput>;

// Output Schema
export interface NetworkConfigurationsGetOutput {
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
  }) as unknown as Schema.Codec<NetworkConfigurationsGetOutput>;

// The operation
/**
 * Returns a NetworkConfiguration for the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the target machine to get the private link scope validation details for.
 */
export const NetworkConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkConfigurationsGetInput,
    outputSchema: NetworkConfigurationsGetOutput,
  }),
);
// Input Schema
export interface NetworkConfigurationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  properties?: {
    location?: string;
    tenantId?: string;
    networkConfigurationScopeId?: string;
    networkConfigurationScopeResourceId?: string;
    keyProperties?: {
      clientPublicKey?: {
        publicKey?: string;
        notAfter?: string;
        renewAfter?: string;
      };
      candidatePublicKey?: {
        publicKey?: string;
        notAfter?: string;
        renewAfter?: string;
      };
    };
  };
}
export const NetworkConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<NetworkConfigurationsUpdateInput>;

// Output Schema
export interface NetworkConfigurationsUpdateOutput {
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
  }) as unknown as Schema.Codec<NetworkConfigurationsUpdateOutput>;

// The operation
/**
 * Update the endpoint to the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the target machine to get the private link scope validation details for.
 */
export const NetworkConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkConfigurationsUpdateInput,
    outputSchema: NetworkConfigurationsUpdateOutput,
  }),
);
// Input Schema
export interface NetworkProfileGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
}
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
) as unknown as Schema.Codec<NetworkProfileGetInput>;

// Output Schema
export interface NetworkProfileGetOutput {
  networkInterfaces?: {
    macAddress?: string;
    id?: string;
    name?: string;
    ipAddresses?: {
      address?: string;
      ipAddressVersion?: string;
      subnet?: { addressPrefix?: string };
    }[];
  }[];
}
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
  }) as unknown as Schema.Codec<NetworkProfileGetOutput>;

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
export interface NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeInput {
  subscriptionId: string;
  resourceGroupName: string;
  scopeName: string;
  perimeterName: string;
}
export const NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
    perimeterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/networkSecurityPerimeterConfigurations/{perimeterName}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    provisioningState?: string;
    provisioningIssues?: {
      name?: string;
      properties?: {
        issueType?:
          | "MissingPerimeterConfiguration"
          | "MissingIdentityConfiguration"
          | "ConfigurationPropagationFailure"
          | "Other";
        severity?: "Warning" | "Error";
        description?: string;
        suggestedResourceIds?: string[];
        suggestedAccessRules?: {
          name?: string;
          properties?: {
            direction?: "Inbound" | "Outbound";
            addressPrefixes?: string[];
          };
        }[];
      };
    }[];
    networkSecurityPerimeter?: {
      id?: string;
      perimeterGuid?: string;
      location?: string;
    };
    resourceAssociation?: {
      name?: string;
      accessMode?: "enforced" | "audit" | "learning";
    };
    profile?: {
      name?: string;
      accessRulesVersion?: number;
      accessRules?: {
        name?: string;
        properties?: {
          direction?: "Inbound" | "Outbound";
          addressPrefixes?: string[];
        };
      }[];
      diagnosticSettingsVersion?: number;
      enabledLogCategories?: string[];
    };
  };
}
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeOutput>;

// The operation
/**
 * Gets the network security perimeter configuration for a private link scope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 * @param perimeterName - The name, in the format {perimeterGuid}.{associationName}, of the Network Security Perimeter resource.
 */
export const NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeInput,
    outputSchema:
      NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeInput {
  subscriptionId: string;
  resourceGroupName: string;
  scopeName: string;
}
export const NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      provisioningState?: string;
      provisioningIssues?: {
        name?: string;
        properties?: {
          issueType?:
            | "MissingPerimeterConfiguration"
            | "MissingIdentityConfiguration"
            | "ConfigurationPropagationFailure"
            | "Other";
          severity?: "Warning" | "Error";
          description?: string;
          suggestedResourceIds?: string[];
          suggestedAccessRules?: {
            name?: string;
            properties?: {
              direction?: "Inbound" | "Outbound";
              addressPrefixes?: string[];
            };
          }[];
        };
      }[];
      networkSecurityPerimeter?: {
        id?: string;
        perimeterGuid?: string;
        location?: string;
      };
      resourceAssociation?: {
        name?: string;
        accessMode?: "enforced" | "audit" | "learning";
      };
      profile?: {
        name?: string;
        accessRulesVersion?: number;
        accessRules?: {
          name?: string;
          properties?: {
            direction?: "Inbound" | "Outbound";
            addressPrefixes?: string[];
          };
        }[];
        diagnosticSettingsVersion?: number;
        enabledLogCategories?: string[];
      };
    };
  }[];
  nextLink?: string;
}
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOutput>;

// The operation
/**
 * Lists the network security perimeter configurations for a private link scope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 */
export const NetworkSecurityPerimeterConfigurationsListByPrivateLinkScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeInput,
    outputSchema:
      NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeInput {
  subscriptionId: string;
  resourceGroupName: string;
  scopeName: string;
  perimeterName: string;
}
export const NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
    perimeterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/networkSecurityPerimeterConfigurations/{perimeterName}/reconcile",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOutput {
  location?: string;
}
export const NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOutput>;

// The operation
/**
 * Forces the network security perimeter configuration to refresh for a private link scope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 * @param perimeterName - The name, in the format {perimeterGuid}.{associationName}, of the Network Security Perimeter resource.
 */
export const NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeInput,
    outputSchema:
      NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridCompute/operations",
    apiVersion: "2025-01-13",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    origin?: string;
    name?: string;
    display?: {
      operation?: string;
      resource?: string;
      description?: string;
      provider?: string;
    };
    isDataAction?: boolean;
  }[];
}
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
}) as unknown as Schema.Codec<OperationsListOutput>;

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
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  scopeName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status: string;
      description: string;
      actionsRequired?: string;
    };
    provisioningState?: string;
    groupIds?: string[];
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
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
 * Approve or reject a private endpoint connection with a given name.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
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
  scopeName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection with a given name.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
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
  scopeName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-01-13",
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
 * Gets a private endpoint connection.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByPrivateLinkScopeInput {
  subscriptionId: string;
  resourceGroupName: string;
  scopeName: string;
}
export const PrivateEndpointConnectionsListByPrivateLinkScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateEndpointConnections",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByPrivateLinkScopeInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByPrivateLinkScopeOutput {
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByPrivateLinkScopeOutput>;

// The operation
/**
 * Gets all private endpoint connections on a private link scope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 */
export const PrivateEndpointConnectionsListByPrivateLinkScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByPrivateLinkScopeInput,
    outputSchema: PrivateEndpointConnectionsListByPrivateLinkScopeOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  scopeName: string;
  groupName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateLinkResources/{groupName}",
      apiVersion: "2025-01-13",
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
 * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 * @param groupName - The name of the private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export interface PrivateLinkResourcesListByPrivateLinkScopeInput {
  subscriptionId: string;
  resourceGroupName: string;
  scopeName: string;
}
export const PrivateLinkResourcesListByPrivateLinkScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/privateLinkResources",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByPrivateLinkScopeInput>;

// Output Schema
export interface PrivateLinkResourcesListByPrivateLinkScopeOutput {
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByPrivateLinkScopeOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 */
export const PrivateLinkResourcesListByPrivateLinkScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByPrivateLinkScopeInput,
    outputSchema: PrivateLinkResourcesListByPrivateLinkScopeOutput,
  }));
// Input Schema
export interface PrivateLinkScopesCreateOrUpdateInput {
  resourceGroupName: string;
  subscriptionId: string;
  scopeName: string;
  properties?: {
    publicNetworkAccess?: "Enabled" | "Disabled";
    provisioningState?: string;
    privateLinkScopeId?: string;
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status: string;
          description: string;
          actionsRequired?: string;
        };
        provisioningState?: string;
        groupIds?: string[];
      };
    }[];
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const PrivateLinkScopesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
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
  ) as unknown as Schema.Codec<PrivateLinkScopesCreateOrUpdateInput>;

// Output Schema
export interface PrivateLinkScopesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const PrivateLinkScopesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<PrivateLinkScopesCreateOrUpdateOutput>;

// The operation
/**
 * Creates (or updates) a Azure Arc PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 */
export const PrivateLinkScopesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkScopesCreateOrUpdateInput,
    outputSchema: PrivateLinkScopesCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkScopesDeleteInput {
  resourceGroupName: string;
  subscriptionId: string;
  scopeName: string;
}
export const PrivateLinkScopesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<PrivateLinkScopesDeleteInput>;

// Output Schema
export type PrivateLinkScopesDeleteOutput = void;
export const PrivateLinkScopesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateLinkScopesDeleteOutput>;

// The operation
/**
 * Deletes a Azure Arc PrivateLinkScope.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 */
export const PrivateLinkScopesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkScopesDeleteInput,
    outputSchema: PrivateLinkScopesDeleteOutput,
  }),
);
// Input Schema
export interface PrivateLinkScopesGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  scopeName: string;
}
export const PrivateLinkScopesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<PrivateLinkScopesGetInput>;

// Output Schema
export interface PrivateLinkScopesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const PrivateLinkScopesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<PrivateLinkScopesGetOutput>;

// The operation
/**
 * Returns a Azure Arc PrivateLinkScope.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 */
export const PrivateLinkScopesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkScopesGetInput,
    outputSchema: PrivateLinkScopesGetOutput,
  }),
);
// Input Schema
export interface PrivateLinkScopesGetValidationDetailsInput {
  location: string;
  subscriptionId: string;
  privateLinkScopeId: string;
}
export const PrivateLinkScopesGetValidationDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    privateLinkScopeId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/locations/{location}/privateLinkScopes/{privateLinkScopeId}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<PrivateLinkScopesGetValidationDetailsInput>;

// Output Schema
export interface PrivateLinkScopesGetValidationDetailsOutput {
  id?: string;
  publicNetworkAccess?: "Enabled" | "Disabled";
  connectionDetails?: {
    id?: string;
    privateIpAddress?: string;
    linkIdentifier?: string;
    groupId?: string;
    memberName?: string;
  }[];
}
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
  }) as unknown as Schema.Codec<PrivateLinkScopesGetValidationDetailsOutput>;

// The operation
/**
 * Returns a Azure Arc PrivateLinkScope's validation details.
 *
 * @param location - The location of the target resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param privateLinkScopeId - The id (Guid) of the Azure Arc PrivateLinkScope resource.
 */
export const PrivateLinkScopesGetValidationDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkScopesGetValidationDetailsInput,
    outputSchema: PrivateLinkScopesGetValidationDetailsOutput,
  }));
// Input Schema
export interface PrivateLinkScopesGetValidationDetailsForMachineInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
}
export const PrivateLinkScopesGetValidationDetailsForMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/privateLinkScopes/current",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<PrivateLinkScopesGetValidationDetailsForMachineInput>;

// Output Schema
export interface PrivateLinkScopesGetValidationDetailsForMachineOutput {
  id?: string;
  publicNetworkAccess?: "Enabled" | "Disabled";
  connectionDetails?: {
    id?: string;
    privateIpAddress?: string;
    linkIdentifier?: string;
    groupId?: string;
    memberName?: string;
  }[];
}
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
  }) as unknown as Schema.Codec<PrivateLinkScopesGetValidationDetailsForMachineOutput>;

// The operation
/**
 * Returns a Azure Arc PrivateLinkScope's validation details for a given machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the target machine to get the private link scope validation details for.
 */
export const PrivateLinkScopesGetValidationDetailsForMachine =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkScopesGetValidationDetailsForMachineInput,
    outputSchema: PrivateLinkScopesGetValidationDetailsForMachineOutput,
  }));
// Input Schema
export interface PrivateLinkScopesListInput {
  subscriptionId: string;
}
export const PrivateLinkScopesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/privateLinkScopes",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<PrivateLinkScopesListInput>;

// Output Schema
export interface PrivateLinkScopesListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
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
  }) as unknown as Schema.Codec<PrivateLinkScopesListOutput>;

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
export interface PrivateLinkScopesListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
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
  ) as unknown as Schema.Codec<PrivateLinkScopesListByResourceGroupInput>;

// Output Schema
export interface PrivateLinkScopesListByResourceGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
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
  }) as unknown as Schema.Codec<PrivateLinkScopesListByResourceGroupOutput>;

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
export interface PrivateLinkScopesUpdateTagsInput {
  resourceGroupName: string;
  subscriptionId: string;
  scopeName: string;
  tags?: Record<string, string>;
}
export const PrivateLinkScopesUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    scopeName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}",
      apiVersion: "2025-01-13",
    }),
  ) as unknown as Schema.Codec<PrivateLinkScopesUpdateTagsInput>;

// Output Schema
export interface PrivateLinkScopesUpdateTagsOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const PrivateLinkScopesUpdateTagsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<PrivateLinkScopesUpdateTagsOutput>;

// The operation
/**
 * Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param scopeName - The name of the Azure Arc PrivateLinkScope resource.
 */
export const PrivateLinkScopesUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkScopesUpdateTagsInput,
    outputSchema: PrivateLinkScopesUpdateTagsOutput,
  }),
);
// Input Schema
export interface SettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  baseProvider: string;
  baseResourceType: string;
  baseResourceName: string;
  settingsResourceName: string;
}
export const SettingsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  baseProvider: Schema.String.pipe(T.PathParam()),
  baseResourceType: Schema.String.pipe(T.PathParam()),
  baseResourceName: Schema.String.pipe(T.PathParam()),
  settingsResourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{baseProvider}/{baseResourceType}/{baseResourceName}/providers/Microsoft.HybridCompute/settings/{settingsResourceName}",
    apiVersion: "2025-01-13",
  }),
) as unknown as Schema.Codec<SettingsGetInput>;

// Output Schema
export interface SettingsGetOutput {
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
}) as unknown as Schema.Codec<SettingsGetOutput>;

// The operation
/**
 * Returns the base Settings for the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param baseProvider - The name of the base Resource Provider.
 * @param baseResourceType - The name of the base Resource Type.
 * @param baseResourceName - The name of the base resource.
 * @param settingsResourceName - The name of the settings resource.
 */
export const SettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SettingsGetInput,
  outputSchema: SettingsGetOutput,
}));
// Input Schema
export interface SettingsPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  baseProvider: string;
  baseResourceType: string;
  baseResourceName: string;
  settingsResourceName: string;
  properties?: {
    tenantId?: string;
    gatewayProperties?: { gatewayResourceId?: string };
  };
}
export const SettingsPatchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  baseProvider: Schema.String.pipe(T.PathParam()),
  baseResourceType: Schema.String.pipe(T.PathParam()),
  baseResourceName: Schema.String.pipe(T.PathParam()),
  settingsResourceName: Schema.String.pipe(T.PathParam()),
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
) as unknown as Schema.Codec<SettingsPatchInput>;

// Output Schema
export interface SettingsPatchOutput {
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
}) as unknown as Schema.Codec<SettingsPatchOutput>;

// The operation
/**
 * Update the base Settings of the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param baseProvider - The name of the base Resource Provider.
 * @param baseResourceType - The name of the base Resource Type.
 * @param baseResourceName - The name of the base resource.
 * @param settingsResourceName - The name of the settings resource.
 */
export const SettingsPatch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SettingsPatchInput,
  outputSchema: SettingsPatchOutput,
}));
// Input Schema
export interface SettingsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  baseProvider: string;
  baseResourceType: string;
  baseResourceName: string;
  settingsResourceName: string;
  properties?: {
    tenantId?: string;
    gatewayProperties?: { gatewayResourceId?: string };
  };
}
export const SettingsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  baseProvider: Schema.String.pipe(T.PathParam()),
  baseResourceType: Schema.String.pipe(T.PathParam()),
  baseResourceName: Schema.String.pipe(T.PathParam()),
  settingsResourceName: Schema.String.pipe(T.PathParam()),
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
) as unknown as Schema.Codec<SettingsUpdateInput>;

// Output Schema
export interface SettingsUpdateOutput {
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
}) as unknown as Schema.Codec<SettingsUpdateOutput>;

// The operation
/**
 * Updates the base Settings of the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param baseProvider - The name of the base Resource Provider.
 * @param baseResourceType - The name of the base Resource Type.
 * @param baseResourceName - The name of the base resource.
 * @param settingsResourceName - The name of the settings resource.
 */
export const SettingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SettingsUpdateInput,
  outputSchema: SettingsUpdateOutput,
}));
// Input Schema
export interface SetupExtensionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  extensions?: {
    forceUpdateTag?: string;
    publisher?: string;
    type?: string;
    typeHandlerVersion?: string;
    enableAutomaticUpgrade?: boolean;
    autoUpgradeMinorVersion?: boolean;
    settings?: Record<string, unknown>;
    protectedSettings?: Record<string, unknown>;
    provisioningState?: string;
    instanceView?: {
      name?: string;
      type?: string;
      typeHandlerVersion?: string;
      status?: {
        code?: string;
        level?: "Info" | "Warning" | "Error";
        displayStatus?: string;
        message?: string;
        time?: string;
      };
    };
  }[];
}
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
) as unknown as Schema.Codec<SetupExtensionsInput>;

// Output Schema
export interface SetupExtensionsOutput {
  extensions?: {
    forceUpdateTag?: string;
    publisher?: string;
    type?: string;
    typeHandlerVersion?: string;
    enableAutomaticUpgrade?: boolean;
    autoUpgradeMinorVersion?: boolean;
    settings?: Record<string, unknown>;
    protectedSettings?: Record<string, unknown>;
    provisioningState?: string;
    instanceView?: {
      name?: string;
      type?: string;
      typeHandlerVersion?: string;
      status?: {
        code?: string;
        level?: "Info" | "Warning" | "Error";
        displayStatus?: string;
        message?: string;
        time?: string;
      };
    };
  }[];
}
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
}) as unknown as Schema.Codec<SetupExtensionsOutput>;

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
export interface UpgradeExtensionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  extensionTargets?: Record<string, { targetVersion?: string }>;
}
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
) as unknown as Schema.Codec<UpgradeExtensionsInput>;

// Output Schema
export type UpgradeExtensionsOutput = void;
export const UpgradeExtensionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UpgradeExtensionsOutput>;

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
