/**
 * Azure Hybridconnectivity API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface EndpointsCreateOrUpdateInput {
  resourceUri: string;
  endpointName: string;
  properties?: {
    type: "default" | "custom";
    resourceId?: string;
    provisioningState?: string;
  };
}
export const EndpointsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        type: Schema.Literals(["default", "custom"]),
        resourceId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<EndpointsCreateOrUpdateInput>;

// Output Schema
export interface EndpointsCreateOrUpdateOutput {
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
export const EndpointsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<EndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the endpoint to the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 */
export const EndpointsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EndpointsCreateOrUpdateInput,
    outputSchema: EndpointsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface EndpointsDeleteInput {
  resourceUri: string;
  endpointName: string;
}
export const EndpointsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}",
    apiVersion: "2024-12-01",
  }),
) as unknown as Schema.Codec<EndpointsDeleteInput>;

// Output Schema
export type EndpointsDeleteOutput = void;
export const EndpointsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EndpointsDeleteOutput>;

// The operation
/**
 * Deletes the endpoint access to the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 */
export const EndpointsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsDeleteInput,
  outputSchema: EndpointsDeleteOutput,
}));
// Input Schema
export interface EndpointsGetInput {
  resourceUri: string;
  endpointName: string;
}
export const EndpointsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}",
    apiVersion: "2024-12-01",
  }),
) as unknown as Schema.Codec<EndpointsGetInput>;

// Output Schema
export interface EndpointsGetOutput {
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
export const EndpointsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsGetOutput>;

// The operation
/**
 * Gets the endpoint to the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 */
export const EndpointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsGetInput,
  outputSchema: EndpointsGetOutput,
}));
// Input Schema
export interface EndpointsListInput {
  resourceUri: string;
}
export const EndpointsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints",
    apiVersion: "2024-12-01",
  }),
) as unknown as Schema.Codec<EndpointsListInput>;

// Output Schema
export interface EndpointsListOutput {
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
export const EndpointsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsListOutput>;

// The operation
/**
 * List of endpoints to the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const EndpointsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsListInput,
  outputSchema: EndpointsListOutput,
}));
// Input Schema
export interface EndpointsListCredentialsInput {
  resourceUri: string;
  endpointName: string;
  expiresin?: number;
  serviceName?: "SSH" | "WAC";
}
export const EndpointsListCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    expiresin: Schema.optional(Schema.Number),
    serviceName: Schema.optional(Schema.Literals(["SSH", "WAC"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/listCredentials",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<EndpointsListCredentialsInput>;

// Output Schema
export interface EndpointsListCredentialsOutput {
  relay?: {
    namespaceName: string;
    namespaceNameSuffix: string;
    hybridConnectionName: string;
    accessKey?: string;
    expiresOn?: number;
    serviceConfigurationToken?: string;
  };
}
export const EndpointsListCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relay: Schema.optional(
      Schema.Struct({
        namespaceName: Schema.String,
        namespaceNameSuffix: Schema.String,
        hybridConnectionName: Schema.String,
        accessKey: Schema.optional(Schema.String),
        expiresOn: Schema.optional(Schema.Number),
        serviceConfigurationToken: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<EndpointsListCredentialsOutput>;

// The operation
/**
 * Gets the endpoint access credentials to the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 * @param expiresin - The is how long the endpoint access token is valid (in seconds).
 */
export const EndpointsListCredentials = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EndpointsListCredentialsInput,
    outputSchema: EndpointsListCredentialsOutput,
  }),
);
// Input Schema
export interface EndpointsListIngressGatewayCredentialsInput {
  resourceUri: string;
  endpointName: string;
  expiresin?: number;
  serviceName?: "SSH" | "WAC";
}
export const EndpointsListIngressGatewayCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    expiresin: Schema.optional(Schema.Number),
    serviceName: Schema.optional(Schema.Literals(["SSH", "WAC"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/listIngressGatewayCredentials",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<EndpointsListIngressGatewayCredentialsInput>;

// Output Schema
export interface EndpointsListIngressGatewayCredentialsOutput {
  relay?: {
    namespaceName: string;
    namespaceNameSuffix: string;
    hybridConnectionName: string;
    accessKey?: string;
    expiresOn?: number;
    serviceConfigurationToken?: string;
  };
  ingress?: {
    hostname: string;
    aadProfile: { serverId: string; tenantId: string };
  };
}
export const EndpointsListIngressGatewayCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relay: Schema.optional(
      Schema.Struct({
        namespaceName: Schema.String,
        namespaceNameSuffix: Schema.String,
        hybridConnectionName: Schema.String,
        accessKey: Schema.optional(Schema.String),
        expiresOn: Schema.optional(Schema.Number),
        serviceConfigurationToken: Schema.optional(Schema.String),
      }),
    ),
    ingress: Schema.optional(
      Schema.Struct({
        hostname: Schema.String,
        aadProfile: Schema.Struct({
          serverId: Schema.String,
          tenantId: Schema.String,
        }),
      }),
    ),
  }) as unknown as Schema.Codec<EndpointsListIngressGatewayCredentialsOutput>;

// The operation
/**
 * Gets the ingress gateway endpoint credentials
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 * @param expiresin - The is how long the endpoint access token is valid (in seconds).
 */
export const EndpointsListIngressGatewayCredentials =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EndpointsListIngressGatewayCredentialsInput,
    outputSchema: EndpointsListIngressGatewayCredentialsOutput,
  }));
// Input Schema
export interface EndpointsListManagedProxyDetailsInput {
  resourceUri: string;
  endpointName: string;
  service: string;
  hostname?: string;
  serviceName?: "SSH" | "WAC";
}
export const EndpointsListManagedProxyDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    service: Schema.String,
    hostname: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.Literals(["SSH", "WAC"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/listManagedProxyDetails",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<EndpointsListManagedProxyDetailsInput>;

// Output Schema
export interface EndpointsListManagedProxyDetailsOutput {
  proxy: string;
  expiresOn: number;
}
export const EndpointsListManagedProxyDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proxy: Schema.String,
    expiresOn: Schema.Number,
  }) as unknown as Schema.Codec<EndpointsListManagedProxyDetailsOutput>;

// The operation
/**
 * Fetches the managed proxy details
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 */
export const EndpointsListManagedProxyDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EndpointsListManagedProxyDetailsInput,
    outputSchema: EndpointsListManagedProxyDetailsOutput,
  }));
// Input Schema
export interface EndpointsUpdateInput {
  resourceUri: string;
  endpointName: string;
  properties?: {
    type: "default" | "custom";
    resourceId?: string;
    provisioningState?: string;
  };
}
export const EndpointsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      type: Schema.Literals(["default", "custom"]),
      resourceId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}",
    apiVersion: "2024-12-01",
  }),
) as unknown as Schema.Codec<EndpointsUpdateInput>;

// Output Schema
export interface EndpointsUpdateOutput {
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
export const EndpointsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsUpdateOutput>;

// The operation
/**
 * Update the endpoint to the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 */
export const EndpointsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsUpdateInput,
  outputSchema: EndpointsUpdateOutput,
}));
// Input Schema
export interface GenerateAwsTemplatePostInput {
  subscriptionId: string;
  connectorId: string;
  solutionTypes?: {
    solutionType: string;
    solutionSettings?: Record<string, string>;
  }[];
}
export const GenerateAwsTemplatePostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    connectorId: Schema.String,
    solutionTypes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          solutionType: Schema.String,
          solutionSettings: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridConnectivity/generateAwsTemplate",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<GenerateAwsTemplatePostInput>;

// Output Schema
export type GenerateAwsTemplatePostOutput = unknown;
export const GenerateAwsTemplatePostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<GenerateAwsTemplatePostOutput>;

// The operation
/**
 * Retrieve AWS Cloud Formation template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const GenerateAwsTemplatePost = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GenerateAwsTemplatePostInput,
    outputSchema: GenerateAwsTemplatePostOutput,
  }),
);
// Input Schema
export interface InventoryGetInput {
  resourceUri: string;
  solutionConfiguration: string;
  inventoryId: string;
}
export const InventoryGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  solutionConfiguration: Schema.String.pipe(T.PathParam()),
  inventoryId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}/inventory/{inventoryId}",
    apiVersion: "2024-12-01",
  }),
) as unknown as Schema.Codec<InventoryGetInput>;

// Output Schema
export interface InventoryGetOutput {
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
export const InventoryGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<InventoryGetOutput>;

// The operation
/**
 * Get a InventoryResource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param solutionConfiguration - Represent Solution Configuration Resource.
 * @param inventoryId - Inventory resource
 */
export const InventoryGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InventoryGetInput,
  outputSchema: InventoryGetOutput,
}));
// Input Schema
export interface InventoryListBySolutionConfigurationInput {
  resourceUri: string;
  solutionConfiguration: string;
}
export const InventoryListBySolutionConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    solutionConfiguration: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}/inventory",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<InventoryListBySolutionConfigurationInput>;

// Output Schema
export interface InventoryListBySolutionConfigurationOutput {
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
export const InventoryListBySolutionConfigurationOutput =
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
  }) as unknown as Schema.Codec<InventoryListBySolutionConfigurationOutput>;

// The operation
/**
 * List InventoryResource resources by SolutionConfiguration
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param solutionConfiguration - Represent Solution Configuration Resource.
 */
export const InventoryListBySolutionConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InventoryListBySolutionConfigurationInput,
    outputSchema: InventoryListBySolutionConfigurationOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridConnectivity/operations",
    apiVersion: "2024-12-01",
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
export interface PublicCloudConnectorsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  publicCloudConnector: string;
  properties?: {
    awsCloudProfile: {
      accountId: string;
      excludedAccounts?: string[];
      isOrganizationalAccount?: boolean;
    };
    hostType: "AWS";
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    connectorPrimaryIdentifier?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const PublicCloudConnectorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publicCloudConnector: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        awsCloudProfile: Schema.Struct({
          accountId: Schema.String,
          excludedAccounts: Schema.optional(Schema.Array(Schema.String)),
          isOrganizationalAccount: Schema.optional(Schema.Boolean),
        }),
        hostType: Schema.Literals(["AWS"]),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        connectorPrimaryIdentifier: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors/{publicCloudConnector}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<PublicCloudConnectorsCreateOrUpdateInput>;

// Output Schema
export interface PublicCloudConnectorsCreateOrUpdateOutput {
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
export const PublicCloudConnectorsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PublicCloudConnectorsCreateOrUpdateOutput>;

// The operation
/**
 * Create a PublicCloudConnector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publicCloudConnector - Represent public cloud connectors resource.
 */
export const PublicCloudConnectorsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PublicCloudConnectorsCreateOrUpdateInput,
    outputSchema: PublicCloudConnectorsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PublicCloudConnectorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  publicCloudConnector: string;
}
export const PublicCloudConnectorsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publicCloudConnector: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors/{publicCloudConnector}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<PublicCloudConnectorsDeleteInput>;

// Output Schema
export type PublicCloudConnectorsDeleteOutput = void;
export const PublicCloudConnectorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PublicCloudConnectorsDeleteOutput>;

// The operation
/**
 * Delete a PublicCloudConnector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publicCloudConnector - Represent public cloud connectors resource.
 */
export const PublicCloudConnectorsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PublicCloudConnectorsDeleteInput,
    outputSchema: PublicCloudConnectorsDeleteOutput,
  }),
);
// Input Schema
export interface PublicCloudConnectorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  publicCloudConnector: string;
}
export const PublicCloudConnectorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publicCloudConnector: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors/{publicCloudConnector}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<PublicCloudConnectorsGetInput>;

// Output Schema
export interface PublicCloudConnectorsGetOutput {
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
export const PublicCloudConnectorsGetOutput =
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
  }) as unknown as Schema.Codec<PublicCloudConnectorsGetOutput>;

// The operation
/**
 * Get a PublicCloudConnector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publicCloudConnector - Represent public cloud connectors resource.
 */
export const PublicCloudConnectorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PublicCloudConnectorsGetInput,
    outputSchema: PublicCloudConnectorsGetOutput,
  }),
);
// Input Schema
export interface PublicCloudConnectorsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PublicCloudConnectorsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<PublicCloudConnectorsListByResourceGroupInput>;

// Output Schema
export interface PublicCloudConnectorsListByResourceGroupOutput {
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
export const PublicCloudConnectorsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<PublicCloudConnectorsListByResourceGroupOutput>;

// The operation
/**
 * List PublicCloudConnector resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PublicCloudConnectorsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PublicCloudConnectorsListByResourceGroupInput,
    outputSchema: PublicCloudConnectorsListByResourceGroupOutput,
  }));
// Input Schema
export interface PublicCloudConnectorsListBySubscriptionInput {
  subscriptionId: string;
}
export const PublicCloudConnectorsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridConnectivity/publicCloudConnectors",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<PublicCloudConnectorsListBySubscriptionInput>;

// Output Schema
export interface PublicCloudConnectorsListBySubscriptionOutput {
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
export const PublicCloudConnectorsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<PublicCloudConnectorsListBySubscriptionOutput>;

// The operation
/**
 * List PublicCloudConnector resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PublicCloudConnectorsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PublicCloudConnectorsListBySubscriptionInput,
    outputSchema: PublicCloudConnectorsListBySubscriptionOutput,
  }));
// Input Schema
export interface PublicCloudConnectorsTestPermissionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  publicCloudConnector: string;
}
export const PublicCloudConnectorsTestPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publicCloudConnector: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors/{publicCloudConnector}/testPermissions",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<PublicCloudConnectorsTestPermissionsInput>;

// Output Schema
export interface PublicCloudConnectorsTestPermissionsOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const PublicCloudConnectorsTestPermissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
          error: Schema.optional(
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
        }),
      ),
    ),
    error: Schema.optional(
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
  }) as unknown as Schema.Codec<PublicCloudConnectorsTestPermissionsOutput>;

// The operation
/**
 * A long-running resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publicCloudConnector - Represent public cloud connectors resource.
 */
export const PublicCloudConnectorsTestPermissions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PublicCloudConnectorsTestPermissionsInput,
    outputSchema: PublicCloudConnectorsTestPermissionsOutput,
  }));
// Input Schema
export interface PublicCloudConnectorsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  publicCloudConnector: string;
  properties?: { awsCloudProfile?: { excludedAccounts?: string[] } };
  tags?: Record<string, string>;
}
export const PublicCloudConnectorsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publicCloudConnector: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        awsCloudProfile: Schema.optional(
          Schema.Struct({
            excludedAccounts: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/publicCloudConnectors/{publicCloudConnector}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<PublicCloudConnectorsUpdateInput>;

// Output Schema
export interface PublicCloudConnectorsUpdateOutput {
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
export const PublicCloudConnectorsUpdateOutput =
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
  }) as unknown as Schema.Codec<PublicCloudConnectorsUpdateOutput>;

// The operation
/**
 * Update a PublicCloudConnector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publicCloudConnector - Represent public cloud connectors resource.
 */
export const PublicCloudConnectorsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PublicCloudConnectorsUpdateInput,
    outputSchema: PublicCloudConnectorsUpdateOutput,
  }),
);
// Input Schema
export interface ServiceConfigurationsCreateOrupdateInput {
  resourceUri: string;
  endpointName: string;
  serviceConfigurationName: string;
  properties?: {
    serviceName: "SSH" | "WAC";
    resourceId?: string;
    port?: number;
    provisioningState?:
      | "Succeeded"
      | "Creating"
      | "Updating"
      | "Failed"
      | "Canceled";
  };
}
export const ServiceConfigurationsCreateOrupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    serviceConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        serviceName: Schema.Literals(["SSH", "WAC"]),
        resourceId: Schema.optional(Schema.String),
        port: Schema.optional(Schema.Number),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Creating",
            "Updating",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/serviceConfigurations/{serviceConfigurationName}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<ServiceConfigurationsCreateOrupdateInput>;

// Output Schema
export interface ServiceConfigurationsCreateOrupdateOutput {
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
export const ServiceConfigurationsCreateOrupdateOutput =
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
  }) as unknown as Schema.Codec<ServiceConfigurationsCreateOrupdateOutput>;

// The operation
/**
 * Create or update a service in serviceConfiguration for the endpoint resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 * @param serviceConfigurationName - The service name.
 */
export const ServiceConfigurationsCreateOrupdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceConfigurationsCreateOrupdateInput,
    outputSchema: ServiceConfigurationsCreateOrupdateOutput,
  }));
// Input Schema
export interface ServiceConfigurationsDeleteInput {
  resourceUri: string;
  endpointName: string;
  serviceConfigurationName: string;
}
export const ServiceConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    serviceConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/serviceConfigurations/{serviceConfigurationName}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<ServiceConfigurationsDeleteInput>;

// Output Schema
export type ServiceConfigurationsDeleteOutput = void;
export const ServiceConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceConfigurationsDeleteOutput>;

// The operation
/**
 * Deletes the service details to the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 * @param serviceConfigurationName - The service name.
 */
export const ServiceConfigurationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceConfigurationsDeleteInput,
    outputSchema: ServiceConfigurationsDeleteOutput,
  }),
);
// Input Schema
export interface ServiceConfigurationsGetInput {
  resourceUri: string;
  endpointName: string;
  serviceConfigurationName: string;
}
export const ServiceConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    serviceConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/serviceConfigurations/{serviceConfigurationName}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<ServiceConfigurationsGetInput>;

// Output Schema
export interface ServiceConfigurationsGetOutput {
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
export const ServiceConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<ServiceConfigurationsGetOutput>;

// The operation
/**
 * Gets the details about the service to the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 * @param serviceConfigurationName - The service name.
 */
export const ServiceConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceConfigurationsGetInput,
    outputSchema: ServiceConfigurationsGetOutput,
  }),
);
// Input Schema
export interface ServiceConfigurationsListByEndpointResourceInput {
  resourceUri: string;
  endpointName: string;
}
export const ServiceConfigurationsListByEndpointResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/serviceConfigurations",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<ServiceConfigurationsListByEndpointResourceInput>;

// Output Schema
export interface ServiceConfigurationsListByEndpointResourceOutput {
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
export const ServiceConfigurationsListByEndpointResourceOutput =
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
  }) as unknown as Schema.Codec<ServiceConfigurationsListByEndpointResourceOutput>;

// The operation
/**
 * Lists of all the services associated with endpoint resource.
 *
 * API to enumerate registered services in service configurations under a Endpoint Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 */
export const ServiceConfigurationsListByEndpointResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceConfigurationsListByEndpointResourceInput,
    outputSchema: ServiceConfigurationsListByEndpointResourceOutput,
  }));
// Input Schema
export interface ServiceConfigurationsUpdateInput {
  resourceUri: string;
  endpointName: string;
  serviceConfigurationName: string;
  properties?: { port?: number };
}
export const ServiceConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    serviceConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        port: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/serviceConfigurations/{serviceConfigurationName}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<ServiceConfigurationsUpdateInput>;

// Output Schema
export interface ServiceConfigurationsUpdateOutput {
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
export const ServiceConfigurationsUpdateOutput =
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
  }) as unknown as Schema.Codec<ServiceConfigurationsUpdateOutput>;

// The operation
/**
 * Update the service details in the service configurations of the target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param endpointName - The endpoint name.
 * @param serviceConfigurationName - The service name.
 */
export const ServiceConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceConfigurationsUpdateInput,
    outputSchema: ServiceConfigurationsUpdateOutput,
  }),
);
// Input Schema
export interface SolutionConfigurationsCreateOrUpdateInput {
  resourceUri: string;
  solutionConfiguration: string;
  properties?: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    solutionType: string;
    solutionSettings?: Record<string, string>;
    status?: "New" | "InProgress" | "Completed" | "Failed";
    statusDetails?: string;
    lastSyncTime?: string;
  };
}
export const SolutionConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    solutionConfiguration: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        solutionType: Schema.String,
        solutionSettings: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        status: Schema.optional(
          Schema.Literals(["New", "InProgress", "Completed", "Failed"]),
        ),
        statusDetails: Schema.optional(Schema.String),
        lastSyncTime: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<SolutionConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface SolutionConfigurationsCreateOrUpdateOutput {
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
export const SolutionConfigurationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SolutionConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Create a SolutionConfiguration
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param solutionConfiguration - Represent Solution Configuration Resource.
 */
export const SolutionConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionConfigurationsCreateOrUpdateInput,
    outputSchema: SolutionConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SolutionConfigurationsDeleteInput {
  resourceUri: string;
  solutionConfiguration: string;
}
export const SolutionConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    solutionConfiguration: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<SolutionConfigurationsDeleteInput>;

// Output Schema
export type SolutionConfigurationsDeleteOutput = void;
export const SolutionConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SolutionConfigurationsDeleteOutput>;

// The operation
/**
 * Delete a SolutionConfiguration
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param solutionConfiguration - Represent Solution Configuration Resource.
 */
export const SolutionConfigurationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionConfigurationsDeleteInput,
    outputSchema: SolutionConfigurationsDeleteOutput,
  }));
// Input Schema
export interface SolutionConfigurationsGetInput {
  resourceUri: string;
  solutionConfiguration: string;
}
export const SolutionConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    solutionConfiguration: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<SolutionConfigurationsGetInput>;

// Output Schema
export interface SolutionConfigurationsGetOutput {
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
export const SolutionConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<SolutionConfigurationsGetOutput>;

// The operation
/**
 * Get a SolutionConfiguration
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param solutionConfiguration - Represent Solution Configuration Resource.
 */
export const SolutionConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionConfigurationsGetInput,
    outputSchema: SolutionConfigurationsGetOutput,
  }),
);
// Input Schema
export interface SolutionConfigurationsListInput {
  resourceUri: string;
}
export const SolutionConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<SolutionConfigurationsListInput>;

// Output Schema
export interface SolutionConfigurationsListOutput {
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
export const SolutionConfigurationsListOutput =
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
  }) as unknown as Schema.Codec<SolutionConfigurationsListOutput>;

// The operation
/**
 * List SolutionConfiguration resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const SolutionConfigurationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionConfigurationsListInput,
    outputSchema: SolutionConfigurationsListOutput,
  }),
);
// Input Schema
export interface SolutionConfigurationsSyncNowInput {
  resourceUri: string;
  solutionConfiguration: string;
}
export const SolutionConfigurationsSyncNowInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    solutionConfiguration: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}/syncNow",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<SolutionConfigurationsSyncNowInput>;

// Output Schema
export interface SolutionConfigurationsSyncNowOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const SolutionConfigurationsSyncNowOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
          error: Schema.optional(
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
        }),
      ),
    ),
    error: Schema.optional(
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
  }) as unknown as Schema.Codec<SolutionConfigurationsSyncNowOutput>;

// The operation
/**
 * Trigger immediate sync with source cloud
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param solutionConfiguration - Represent Solution Configuration Resource.
 */
export const SolutionConfigurationsSyncNow =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionConfigurationsSyncNowInput,
    outputSchema: SolutionConfigurationsSyncNowOutput,
  }));
// Input Schema
export interface SolutionConfigurationsUpdateInput {
  resourceUri: string;
  solutionConfiguration: string;
  properties?: {
    solutionType?: string;
    solutionSettings?: Record<string, string>;
  };
}
export const SolutionConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    solutionConfiguration: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        solutionType: Schema.optional(Schema.String),
        solutionSettings: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/solutionConfigurations/{solutionConfiguration}",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<SolutionConfigurationsUpdateInput>;

// Output Schema
export interface SolutionConfigurationsUpdateOutput {
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
export const SolutionConfigurationsUpdateOutput =
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
  }) as unknown as Schema.Codec<SolutionConfigurationsUpdateOutput>;

// The operation
/**
 * Update a SolutionConfiguration
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param solutionConfiguration - Represent Solution Configuration Resource.
 */
export const SolutionConfigurationsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionConfigurationsUpdateInput,
    outputSchema: SolutionConfigurationsUpdateOutput,
  }));
// Input Schema
export interface SolutionTypesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionType: string;
}
export const SolutionTypesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  solutionType: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/solutionTypes/{solutionType}",
    apiVersion: "2024-12-01",
  }),
) as unknown as Schema.Codec<SolutionTypesGetInput>;

// Output Schema
export interface SolutionTypesGetOutput {
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
export const SolutionTypesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<SolutionTypesGetOutput>;

// The operation
/**
 * Get a SolutionTypeResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionType - Solution Type resource
 */
export const SolutionTypesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SolutionTypesGetInput,
  outputSchema: SolutionTypesGetOutput,
}));
// Input Schema
export interface SolutionTypesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SolutionTypesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridConnectivity/solutionTypes",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<SolutionTypesListByResourceGroupInput>;

// Output Schema
export interface SolutionTypesListByResourceGroupOutput {
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
export const SolutionTypesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SolutionTypesListByResourceGroupOutput>;

// The operation
/**
 * List SolutionTypeResource resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SolutionTypesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTypesListByResourceGroupInput,
    outputSchema: SolutionTypesListByResourceGroupOutput,
  }));
// Input Schema
export interface SolutionTypesListBySubscriptionInput {
  subscriptionId: string;
}
export const SolutionTypesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridConnectivity/solutionTypes",
      apiVersion: "2024-12-01",
    }),
  ) as unknown as Schema.Codec<SolutionTypesListBySubscriptionInput>;

// Output Schema
export interface SolutionTypesListBySubscriptionOutput {
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
export const SolutionTypesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<SolutionTypesListBySubscriptionOutput>;

// The operation
/**
 * List SolutionTypeResource resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SolutionTypesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTypesListBySubscriptionInput,
    outputSchema: SolutionTypesListBySubscriptionOutput,
  }));
