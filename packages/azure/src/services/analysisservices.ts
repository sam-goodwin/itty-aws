/**
 * Azure Analysisservices API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AnalysisServices/operations",
    apiVersion: "2017-08-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          dimensions?: { name?: string; displayName?: string }[];
        }[];
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
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
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
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
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available consumption REST API operations.
 *
 * @param api-version - The client API version.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ServersCheckNameAvailabilityInput {
  location: string;
  subscriptionId: string;
  name?: string;
  type?: string;
}
export const ServersCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/checkNameAvailability",
      apiVersion: "2017-08-01",
    }),
  ) as unknown as Schema.Codec<ServersCheckNameAvailabilityInput>;

// Output Schema
export interface ServersCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const ServersCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServersCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the name availability in the target location.
 *
 * @param location - The region name which the operation will lookup into.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServersCheckNameAvailabilityInput,
    outputSchema: ServersCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ServersCreateInput {
  resourceGroupName: string;
  serverName: string;
  subscriptionId: string;
  properties?: {
    asAdministrators?: { members?: string[] };
    backupBlobContainerUri?: string;
    gatewayDetails?: {
      gatewayResourceId?: string;
      gatewayObjectId?: string;
      dmtsClusterUri?: string;
    };
    ipV4FirewallSettings?: {
      firewallRules?: {
        firewallRuleName?: string;
        rangeStart?: string;
        rangeEnd?: string;
      }[];
      enablePowerBIService?: boolean;
    };
    querypoolConnectionMode?: "All" | "ReadOnly";
    managedMode?: 0 | 1;
    serverMonitorMode?: 0 | 1;
  };
  id?: string;
  name?: string;
  type?: string;
  location: string;
  sku: {
    name: string;
    tier?: "Development" | "Basic" | "Standard";
    capacity?: number;
  };
  tags?: Record<string, string>;
}
export const ServersCreateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      asAdministrators: Schema.optional(
        Schema.Struct({
          members: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      backupBlobContainerUri: Schema.optional(Schema.String),
      gatewayDetails: Schema.optional(
        Schema.Struct({
          gatewayResourceId: Schema.optional(Schema.String),
          gatewayObjectId: Schema.optional(Schema.String),
          dmtsClusterUri: Schema.optional(Schema.String),
        }),
      ),
      ipV4FirewallSettings: Schema.optional(
        Schema.Struct({
          firewallRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                firewallRuleName: Schema.optional(Schema.String),
                rangeStart: Schema.optional(Schema.String),
                rangeEnd: Schema.optional(Schema.String),
              }),
            ),
          ),
          enablePowerBIService: Schema.optional(Schema.Boolean),
        }),
      ),
      querypoolConnectionMode: Schema.optional(
        Schema.Literals(["All", "ReadOnly"]),
      ),
      managedMode: Schema.optional(Schema.Literals([0, 1])),
      serverMonitorMode: Schema.optional(Schema.Literals([0, 1])),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  sku: Schema.Struct({
    name: Schema.String,
    tier: Schema.optional(
      Schema.Literals(["Development", "Basic", "Standard"]),
    ),
    capacity: Schema.optional(Schema.Number),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}",
    apiVersion: "2017-08-01",
  }),
) as unknown as Schema.Codec<ServersCreateInput>;

// Output Schema
export interface ServersCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  sku: {
    name: string;
    tier?: "Development" | "Basic" | "Standard";
    capacity?: number;
  };
  tags?: Record<string, string>;
}
export const ServersCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  sku: Schema.Struct({
    name: Schema.String,
    tier: Schema.optional(
      Schema.Literals(["Development", "Basic", "Standard"]),
    ),
    capacity: Schema.optional(Schema.Number),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<ServersCreateOutput>;

// The operation
/**
 * Provisions the specified Analysis Services server based on the configuration specified in the request.
 *
 * @param resourceGroupName - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
 * @param serverName - The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersCreateInput,
  outputSchema: ServersCreateOutput,
}));
// Input Schema
export interface ServersDeleteInput {
  resourceGroupName: string;
  serverName: string;
  subscriptionId: string;
}
export const ServersDeleteInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}",
    apiVersion: "2017-08-01",
  }),
) as unknown as Schema.Codec<ServersDeleteInput>;

// Output Schema
export type ServersDeleteOutput = void;
export const ServersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersDeleteOutput>;

// The operation
/**
 * Deletes the specified Analysis Services server.
 *
 * @param resourceGroupName - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
 * @param serverName - The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersDeleteInput,
  outputSchema: ServersDeleteOutput,
}));
// Input Schema
export interface ServersDissociateGatewayInput {
  resourceGroupName: string;
  serverName: string;
  subscriptionId: string;
}
export const ServersDissociateGatewayInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/dissociateGateway",
      apiVersion: "2017-08-01",
    }),
  ) as unknown as Schema.Codec<ServersDissociateGatewayInput>;

// Output Schema
export type ServersDissociateGatewayOutput = void;
export const ServersDissociateGatewayOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersDissociateGatewayOutput>;

// The operation
/**
 * Dissociates a Unified Gateway associated with the server.
 *
 * @param resourceGroupName - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
 * @param serverName - The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersDissociateGateway = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersDissociateGatewayInput,
  outputSchema: ServersDissociateGatewayOutput,
}));
// Input Schema
export interface ServersGetDetailsInput {
  resourceGroupName: string;
  serverName: string;
  subscriptionId: string;
}
export const ServersGetDetailsInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}",
    apiVersion: "2017-08-01",
  }),
) as unknown as Schema.Codec<ServersGetDetailsInput>;

// Output Schema
export interface ServersGetDetailsOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  sku: {
    name: string;
    tier?: "Development" | "Basic" | "Standard";
    capacity?: number;
  };
  tags?: Record<string, string>;
}
export const ServersGetDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(
        Schema.Literals(["Development", "Basic", "Standard"]),
      ),
      capacity: Schema.optional(Schema.Number),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ServersGetDetailsOutput>;

// The operation
/**
 * Gets details about the specified Analysis Services server.
 *
 * @param resourceGroupName - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
 * @param serverName - The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersGetDetails = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersGetDetailsInput,
  outputSchema: ServersGetDetailsOutput,
}));
// Input Schema
export interface ServersListInput {
  subscriptionId: string;
}
export const ServersListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/servers",
    apiVersion: "2017-08-01",
  }),
) as unknown as Schema.Codec<ServersListInput>;

// Output Schema
export interface ServersListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    sku: {
      name: string;
      tier?: "Development" | "Basic" | "Standard";
      capacity?: number;
    };
    tags?: Record<string, string>;
  }[];
}
export const ServersListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      location: Schema.String,
      sku: Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Development", "Basic", "Standard"]),
        ),
        capacity: Schema.optional(Schema.Number),
      }),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ),
}) as unknown as Schema.Codec<ServersListOutput>;

// The operation
/**
 * Lists all the Analysis Services servers for the given subscription.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersListInput,
  outputSchema: ServersListOutput,
}));
// Input Schema
export interface ServersListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const ServersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers",
      apiVersion: "2017-08-01",
    }),
  ) as unknown as Schema.Codec<ServersListByResourceGroupInput>;

// Output Schema
export interface ServersListByResourceGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    sku: {
      name: string;
      tier?: "Development" | "Basic" | "Standard";
      capacity?: number;
    };
    tags?: Record<string, string>;
  }[];
}
export const ServersListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.String,
        sku: Schema.Struct({
          name: Schema.String,
          tier: Schema.optional(
            Schema.Literals(["Development", "Basic", "Standard"]),
          ),
          capacity: Schema.optional(Schema.Number),
        }),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<ServersListByResourceGroupOutput>;

// The operation
/**
 * Gets all the Analysis Services servers for the given resource group.
 *
 * @param resourceGroupName - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersListByResourceGroupInput,
  outputSchema: ServersListByResourceGroupOutput,
}));
// Input Schema
export interface ServersListGatewayStatusInput {
  resourceGroupName: string;
  serverName: string;
  subscriptionId: string;
}
export const ServersListGatewayStatusInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/listGatewayStatus",
      apiVersion: "2017-08-01",
    }),
  ) as unknown as Schema.Codec<ServersListGatewayStatusInput>;

// Output Schema
export interface ServersListGatewayStatusOutput {
  status?: 0;
}
export const ServersListGatewayStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.Literals([0])),
  }) as unknown as Schema.Codec<ServersListGatewayStatusOutput>;

// The operation
/**
 * Return the gateway status of the specified Analysis Services server instance.
 *
 * @param resourceGroupName - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
 * @param serverName - The name of the Analysis Services server.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersListGatewayStatus = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersListGatewayStatusInput,
  outputSchema: ServersListGatewayStatusOutput,
}));
// Input Schema
export interface ServersListOperationResultsInput {
  location: string;
  operationId: string;
  subscriptionId: string;
}
export const ServersListOperationResultsInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/operationresults/{operationId}",
      apiVersion: "2017-08-01",
    }),
  ) as unknown as Schema.Codec<ServersListOperationResultsInput>;

// Output Schema
export type ServersListOperationResultsOutput = void;
export const ServersListOperationResultsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersListOperationResultsOutput>;

// The operation
/**
 * List the result of the specified operation.
 *
 * @param location - The region name which the operation will lookup into.
 * @param operationId - The target operation Id.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersListOperationResults = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersListOperationResultsInput,
  outputSchema: ServersListOperationResultsOutput,
}));
// Input Schema
export interface ServersListOperationStatusesInput {
  location: string;
  operationId: string;
  subscriptionId: string;
}
export const ServersListOperationStatusesInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/locations/{location}/operationstatuses/{operationId}",
      apiVersion: "2017-08-01",
    }),
  ) as unknown as Schema.Codec<ServersListOperationStatusesInput>;

// Output Schema
export interface ServersListOperationStatusesOutput {
  id?: string;
  name?: string;
  startTime?: string;
  endTime?: string;
  status?: string;
  error?: {
    code?: string;
    message?: string;
    target?: string;
    subCode?: number;
    httpStatusCode?: number;
    timeStamp?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const ServersListOperationStatusesOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        subCode: Schema.optional(Schema.Number),
        httpStatusCode: Schema.optional(Schema.Number),
        timeStamp: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ServersListOperationStatusesOutput>;

// The operation
/**
 * List the status of operation.
 *
 * @param location - The region name which the operation will lookup into.
 * @param operationId - The target operation Id.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersListOperationStatuses =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServersListOperationStatusesInput,
    outputSchema: ServersListOperationStatusesOutput,
  }));
// Input Schema
export interface ServersListSkusForExistingInput {
  resourceGroupName: string;
  serverName: string;
  subscriptionId: string;
}
export const ServersListSkusForExistingInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/skus",
      apiVersion: "2017-08-01",
    }),
  ) as unknown as Schema.Codec<ServersListSkusForExistingInput>;

// Output Schema
export interface ServersListSkusForExistingOutput {
  value?: {
    sku?: {
      name: string;
      tier?: "Development" | "Basic" | "Standard";
      capacity?: number;
    };
    resourceType?: string;
  }[];
}
export const ServersListSkusForExistingOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              tier: Schema.optional(
                Schema.Literals(["Development", "Basic", "Standard"]),
              ),
              capacity: Schema.optional(Schema.Number),
            }),
          ),
          resourceType: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServersListSkusForExistingOutput>;

// The operation
/**
 * Lists eligible SKUs for an Analysis Services resource.
 *
 * @param resourceGroupName - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
 * @param serverName - The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersListSkusForExisting = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersListSkusForExistingInput,
  outputSchema: ServersListSkusForExistingOutput,
}));
// Input Schema
export interface ServersListSkusForNewInput {
  subscriptionId: string;
}
export const ServersListSkusForNewInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AnalysisServices/skus",
      apiVersion: "2017-08-01",
    }),
  ) as unknown as Schema.Codec<ServersListSkusForNewInput>;

// Output Schema
export interface ServersListSkusForNewOutput {
  value?: {
    name: string;
    tier?: "Development" | "Basic" | "Standard";
    capacity?: number;
  }[];
}
export const ServersListSkusForNewOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          tier: Schema.optional(
            Schema.Literals(["Development", "Basic", "Standard"]),
          ),
          capacity: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServersListSkusForNewOutput>;

// The operation
/**
 * Lists eligible SKUs for Analysis Services resource provider.
 *
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersListSkusForNew = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersListSkusForNewInput,
  outputSchema: ServersListSkusForNewOutput,
}));
// Input Schema
export interface ServersResumeInput {
  resourceGroupName: string;
  serverName: string;
  subscriptionId: string;
}
export const ServersResumeInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/resume",
    apiVersion: "2017-08-01",
  }),
) as unknown as Schema.Codec<ServersResumeInput>;

// Output Schema
export type ServersResumeOutput = void;
export const ServersResumeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersResumeOutput>;

// The operation
/**
 * Resumes operation of the specified Analysis Services server instance.
 *
 * @param resourceGroupName - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
 * @param serverName - The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersResume = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersResumeInput,
  outputSchema: ServersResumeOutput,
}));
// Input Schema
export interface ServersSuspendInput {
  resourceGroupName: string;
  serverName: string;
  subscriptionId: string;
}
export const ServersSuspendInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}/suspend",
    apiVersion: "2017-08-01",
  }),
) as unknown as Schema.Codec<ServersSuspendInput>;

// Output Schema
export type ServersSuspendOutput = void;
export const ServersSuspendOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersSuspendOutput>;

// The operation
/**
 * Suspends operation of the specified Analysis Services server instance.
 *
 * @param resourceGroupName - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
 * @param serverName - The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersSuspend = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersSuspendInput,
  outputSchema: ServersSuspendOutput,
}));
// Input Schema
export interface ServersUpdateInput {
  resourceGroupName: string;
  serverName: string;
  subscriptionId: string;
  sku?: {
    name: string;
    tier?: "Development" | "Basic" | "Standard";
    capacity?: number;
  };
  tags?: Record<string, string>;
  properties?: {
    asAdministrators?: { members?: string[] };
    backupBlobContainerUri?: string;
    gatewayDetails?: {
      gatewayResourceId?: string;
      gatewayObjectId?: string;
      dmtsClusterUri?: string;
    };
    ipV4FirewallSettings?: {
      firewallRules?: {
        firewallRuleName?: string;
        rangeStart?: string;
        rangeEnd?: string;
      }[];
      enablePowerBIService?: boolean;
    };
    querypoolConnectionMode?: "All" | "ReadOnly";
    managedMode?: 0 | 1;
    serverMonitorMode?: 0 | 1;
  };
}
export const ServersUpdateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(
        Schema.Literals(["Development", "Basic", "Standard"]),
      ),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      asAdministrators: Schema.optional(
        Schema.Struct({
          members: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      backupBlobContainerUri: Schema.optional(Schema.String),
      gatewayDetails: Schema.optional(
        Schema.Struct({
          gatewayResourceId: Schema.optional(Schema.String),
          gatewayObjectId: Schema.optional(Schema.String),
          dmtsClusterUri: Schema.optional(Schema.String),
        }),
      ),
      ipV4FirewallSettings: Schema.optional(
        Schema.Struct({
          firewallRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                firewallRuleName: Schema.optional(Schema.String),
                rangeStart: Schema.optional(Schema.String),
                rangeEnd: Schema.optional(Schema.String),
              }),
            ),
          ),
          enablePowerBIService: Schema.optional(Schema.Boolean),
        }),
      ),
      querypoolConnectionMode: Schema.optional(
        Schema.Literals(["All", "ReadOnly"]),
      ),
      managedMode: Schema.optional(Schema.Literals([0, 1])),
      serverMonitorMode: Schema.optional(Schema.Literals([0, 1])),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AnalysisServices/servers/{serverName}",
    apiVersion: "2017-08-01",
  }),
) as unknown as Schema.Codec<ServersUpdateInput>;

// Output Schema
export interface ServersUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  sku: {
    name: string;
    tier?: "Development" | "Basic" | "Standard";
    capacity?: number;
  };
  tags?: Record<string, string>;
}
export const ServersUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  sku: Schema.Struct({
    name: Schema.String,
    tier: Schema.optional(
      Schema.Literals(["Development", "Basic", "Standard"]),
    ),
    capacity: Schema.optional(Schema.Number),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<ServersUpdateOutput>;

// The operation
/**
 * Updates the current state of the specified Analysis Services server.
 *
 * @param resourceGroupName - The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
 * @param serverName - The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
 * @param api-version - The client API version.
 * @param subscriptionId - A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const ServersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersUpdateInput,
  outputSchema: ServersUpdateOutput,
}));
