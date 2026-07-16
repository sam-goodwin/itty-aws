/**
 * Azure Securityandcompliance API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OperationResultsGetInput {
  subscriptionId: string;
  locationName: string;
  operationResultId: string;
}
export const OperationResultsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
    operationResultId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SecurityAndCompliance/locations/{locationName}/operationresults/{operationResultId}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<OperationResultsGetInput>;

// Output Schema
export interface OperationResultsGetOutput {
  id?: string;
  name?: string;
  status?: "Canceled" | "Succeeded" | "Failed" | "Requested" | "Running";
  startTime?: string;
  properties?: unknown;
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
    properties: Schema.optional(Schema.Unknown),
  }) as unknown as Schema.Codec<OperationResultsGetOutput>;

// The operation
/**
 * Get the operation result for a long running operation.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param locationName - The location of the operation.
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
    path: "/providers/Microsoft.SecurityAndCompliance/operations",
    apiVersion: "2021-03-08",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string;
  value?: {
    name?: string;
    isDataAction?: boolean;
    origin?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
        origin: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available SecurityAndCompliance REST API operations.
 *
 * @param api-version - Client Api Version.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsAdtAPICreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsAdtAPICreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
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
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsAdtAPICreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsAdtAPICreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsAdtAPICreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsAdtAPICreateOrUpdateOutput>;

// The operation
/**
 * Update the state of the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsAdtAPICreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsAdtAPICreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsAdtAPICreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsAdtAPIDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsAdtAPIDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsAdtAPIDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsAdtAPIDeleteOutput = void;
export const PrivateEndpointConnectionsAdtAPIDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsAdtAPIDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsAdtAPIDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsAdtAPIDeleteInput,
    outputSchema: PrivateEndpointConnectionsAdtAPIDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsAdtAPIGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsAdtAPIGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsAdtAPIGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsAdtAPIGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsAdtAPIGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsAdtAPIGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsAdtAPIGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsAdtAPIGetInput,
    outputSchema: PrivateEndpointConnectionsAdtAPIGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsAdtAPIListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateEndpointConnectionsAdtAPIListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/{resourceName}/privateEndpointConnections",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsAdtAPIListByServiceInput>;

// Output Schema
export interface PrivateEndpointConnectionsAdtAPIListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsAdtAPIListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsAdtAPIListByServiceOutput>;

// The operation
/**
 * Lists all private endpoint connections for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateEndpointConnectionsAdtAPIListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsAdtAPIListByServiceInput,
    outputSchema: PrivateEndpointConnectionsAdtAPIListByServiceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsCompCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsCompCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
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
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCompCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCompCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsCompCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCompCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsCompCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCompCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCompCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsCompDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsCompDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCompDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsCompDeleteOutput = void;
export const PrivateEndpointConnectionsCompDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsCompDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsCompDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCompDeleteInput,
    outputSchema: PrivateEndpointConnectionsCompDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsCompGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsCompGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCompGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsCompGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsCompGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCompGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsCompGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCompGetInput,
    outputSchema: PrivateEndpointConnectionsCompGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsCompListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateEndpointConnectionsCompListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}/privateEndpointConnections",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCompListByServiceInput>;

// Output Schema
export interface PrivateEndpointConnectionsCompListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsCompListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCompListByServiceOutput>;

// The operation
/**
 * Lists all private endpoint connections for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateEndpointConnectionsCompListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCompListByServiceInput,
    outputSchema: PrivateEndpointConnectionsCompListByServiceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForEDMCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsForEDMCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
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
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForEDMCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsForEDMCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsForEDMCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsForEDMCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsForEDMCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForEDMCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsForEDMCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForEDMDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsForEDMDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForEDMDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsForEDMDeleteOutput = void;
export const PrivateEndpointConnectionsForEDMDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsForEDMDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsForEDMDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForEDMDeleteInput,
    outputSchema: PrivateEndpointConnectionsForEDMDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForEDMGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsForEDMGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForEDMGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsForEDMGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsForEDMGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsForEDMGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsForEDMGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForEDMGetInput,
    outputSchema: PrivateEndpointConnectionsForEDMGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForEDMListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateEndpointConnectionsForEDMListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}/privateEndpointConnections",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForEDMListByServiceInput>;

// Output Schema
export interface PrivateEndpointConnectionsForEDMListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsForEDMListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsForEDMListByServiceOutput>;

// The operation
/**
 * Lists all private endpoint connections for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateEndpointConnectionsForEDMListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForEDMListByServiceInput,
    outputSchema: PrivateEndpointConnectionsForEDMListByServiceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForMIPPolicySyncCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsForMIPPolicySyncCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
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
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForMIPPolicySyncCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsForMIPPolicySyncCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsForMIPPolicySyncCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsForMIPPolicySyncCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsForMIPPolicySyncCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForMIPPolicySyncCreateOrUpdateInput,
    outputSchema:
      PrivateEndpointConnectionsForMIPPolicySyncCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForMIPPolicySyncDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsForMIPPolicySyncDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForMIPPolicySyncDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsForMIPPolicySyncDeleteOutput = void;
export const PrivateEndpointConnectionsForMIPPolicySyncDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsForMIPPolicySyncDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsForMIPPolicySyncDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForMIPPolicySyncDeleteInput,
    outputSchema: PrivateEndpointConnectionsForMIPPolicySyncDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForMIPPolicySyncGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsForMIPPolicySyncGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForMIPPolicySyncGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsForMIPPolicySyncGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsForMIPPolicySyncGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsForMIPPolicySyncGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsForMIPPolicySyncGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForMIPPolicySyncGetInput,
    outputSchema: PrivateEndpointConnectionsForMIPPolicySyncGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForMIPPolicySyncListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateEndpointConnectionsForMIPPolicySyncListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/{resourceName}/privateEndpointConnections",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForMIPPolicySyncListByServiceInput>;

// Output Schema
export interface PrivateEndpointConnectionsForMIPPolicySyncListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsForMIPPolicySyncListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsForMIPPolicySyncListByServiceOutput>;

// The operation
/**
 * Lists all private endpoint connections for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateEndpointConnectionsForMIPPolicySyncListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForMIPPolicySyncListByServiceInput,
    outputSchema: PrivateEndpointConnectionsForMIPPolicySyncListByServiceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForSCCPowershellCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsForSCCPowershellCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
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
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForSCCPowershellCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsForSCCPowershellCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsForSCCPowershellCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsForSCCPowershellCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsForSCCPowershellCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForSCCPowershellCreateOrUpdateInput,
    outputSchema:
      PrivateEndpointConnectionsForSCCPowershellCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForSCCPowershellDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsForSCCPowershellDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForSCCPowershellDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsForSCCPowershellDeleteOutput = void;
export const PrivateEndpointConnectionsForSCCPowershellDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsForSCCPowershellDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsForSCCPowershellDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForSCCPowershellDeleteInput,
    outputSchema: PrivateEndpointConnectionsForSCCPowershellDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForSCCPowershellGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsForSCCPowershellGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForSCCPowershellGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsForSCCPowershellGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsForSCCPowershellGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsForSCCPowershellGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsForSCCPowershellGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForSCCPowershellGetInput,
    outputSchema: PrivateEndpointConnectionsForSCCPowershellGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsForSCCPowershellListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateEndpointConnectionsForSCCPowershellListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/{resourceName}/privateEndpointConnections",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsForSCCPowershellListByServiceInput>;

// Output Schema
export interface PrivateEndpointConnectionsForSCCPowershellListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsForSCCPowershellListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsForSCCPowershellListByServiceOutput>;

// The operation
/**
 * Lists all private endpoint connections for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateEndpointConnectionsForSCCPowershellListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsForSCCPowershellListByServiceInput,
    outputSchema: PrivateEndpointConnectionsForSCCPowershellListByServiceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsSecCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsSecCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
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
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsSecCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsSecCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsSecCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsSecCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsSecCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsSecCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsSecCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsSecDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsSecDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsSecDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsSecDeleteOutput = void;
export const PrivateEndpointConnectionsSecDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsSecDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsSecDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsSecDeleteInput,
    outputSchema: PrivateEndpointConnectionsSecDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsSecGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsSecGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsSecGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsSecGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsSecGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsSecGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsSecGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsSecGetInput,
    outputSchema: PrivateEndpointConnectionsSecGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsSecListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateEndpointConnectionsSecListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}/privateEndpointConnections",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsSecListByServiceInput>;

// Output Schema
export interface PrivateEndpointConnectionsSecListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsSecListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsSecListByServiceOutput>;

// The operation
/**
 * Lists all private endpoint connections for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateEndpointConnectionsSecListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsSecListByServiceInput,
    outputSchema: PrivateEndpointConnectionsSecListByServiceOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesAdtAPIGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  groupName: string;
}
export const PrivateLinkResourcesAdtAPIGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/{resourceName}/privateLinkResources/{groupName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesAdtAPIGetInput>;

// Output Schema
export interface PrivateLinkResourcesAdtAPIGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesAdtAPIGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesAdtAPIGetOutput>;

// The operation
/**
 * Gets a private link resource that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param groupName - The name of the private link resource group.
 */
export const PrivateLinkResourcesAdtAPIGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesAdtAPIGetInput,
    outputSchema: PrivateLinkResourcesAdtAPIGetOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesAdtAPIListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkResourcesAdtAPIListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/{resourceName}/privateLinkResources",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesAdtAPIListByServiceInput>;

// Output Schema
export interface PrivateLinkResourcesAdtAPIListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkResourcesAdtAPIListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesAdtAPIListByServiceOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateLinkResourcesAdtAPIListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesAdtAPIListByServiceInput,
    outputSchema: PrivateLinkResourcesAdtAPIListByServiceOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesCompGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  groupName: string;
}
export const PrivateLinkResourcesCompGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}/privateLinkResources/{groupName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesCompGetInput>;

// Output Schema
export interface PrivateLinkResourcesCompGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesCompGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesCompGetOutput>;

// The operation
/**
 * Gets a private link resource that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param groupName - The name of the private link resource group.
 */
export const PrivateLinkResourcesCompGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesCompGetInput,
  outputSchema: PrivateLinkResourcesCompGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesCompListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkResourcesCompListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}/privateLinkResources",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesCompListByServiceInput>;

// Output Schema
export interface PrivateLinkResourcesCompListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkResourcesCompListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesCompListByServiceOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateLinkResourcesCompListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesCompListByServiceInput,
    outputSchema: PrivateLinkResourcesCompListByServiceOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesForMIPPolicySyncGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  groupName: string;
}
export const PrivateLinkResourcesForMIPPolicySyncGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/{resourceName}/privateLinkResources/{groupName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesForMIPPolicySyncGetInput>;

// Output Schema
export interface PrivateLinkResourcesForMIPPolicySyncGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesForMIPPolicySyncGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesForMIPPolicySyncGetOutput>;

// The operation
/**
 * Gets a private link resource that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param groupName - The name of the private link resource group.
 */
export const PrivateLinkResourcesForMIPPolicySyncGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesForMIPPolicySyncGetInput,
    outputSchema: PrivateLinkResourcesForMIPPolicySyncGetOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesForMIPPolicySyncListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkResourcesForMIPPolicySyncListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/{resourceName}/privateLinkResources",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesForMIPPolicySyncListByServiceInput>;

// Output Schema
export interface PrivateLinkResourcesForMIPPolicySyncListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkResourcesForMIPPolicySyncListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesForMIPPolicySyncListByServiceOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateLinkResourcesForMIPPolicySyncListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesForMIPPolicySyncListByServiceInput,
    outputSchema: PrivateLinkResourcesForMIPPolicySyncListByServiceOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesForSCCPowershellGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  groupName: string;
}
export const PrivateLinkResourcesForSCCPowershellGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/{resourceName}/privateLinkResources/{groupName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesForSCCPowershellGetInput>;

// Output Schema
export interface PrivateLinkResourcesForSCCPowershellGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesForSCCPowershellGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesForSCCPowershellGetOutput>;

// The operation
/**
 * Gets a private link resource that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param groupName - The name of the private link resource group.
 */
export const PrivateLinkResourcesForSCCPowershellGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesForSCCPowershellGetInput,
    outputSchema: PrivateLinkResourcesForSCCPowershellGetOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesForSCCPowershellListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkResourcesForSCCPowershellListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/{resourceName}/privateLinkResources",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesForSCCPowershellListByServiceInput>;

// Output Schema
export interface PrivateLinkResourcesForSCCPowershellListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkResourcesForSCCPowershellListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesForSCCPowershellListByServiceOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateLinkResourcesForSCCPowershellListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesForSCCPowershellListByServiceInput,
    outputSchema: PrivateLinkResourcesForSCCPowershellListByServiceOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  groupName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}/privateLinkResources/{groupName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets a private link resource that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param groupName - The name of the private link resource group.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkResourcesListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}/privateLinkResources",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByServiceInput>;

// Output Schema
export interface PrivateLinkResourcesListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkResourcesListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByServiceOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateLinkResourcesListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByServiceInput,
    outputSchema: PrivateLinkResourcesListByServiceOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesSecGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  groupName: string;
}
export const PrivateLinkResourcesSecGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}/privateLinkResources/{groupName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesSecGetInput>;

// Output Schema
export interface PrivateLinkResourcesSecGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesSecGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesSecGetOutput>;

// The operation
/**
 * Gets a private link resource that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 * @param groupName - The name of the private link resource group.
 */
export const PrivateLinkResourcesSecGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesSecGetInput,
  outputSchema: PrivateLinkResourcesSecGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesSecListByServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkResourcesSecListByServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}/privateLinkResources",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesSecListByServiceInput>;

// Output Schema
export interface PrivateLinkResourcesSecListByServiceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkResourcesSecListByServiceOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesSecListByServiceOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param api-version - Client Api Version.
 */
export const PrivateLinkResourcesSecListByService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesSecListByServiceInput,
    outputSchema: PrivateLinkResourcesSecListByServiceOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForEDMUploadCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    provisioningState?:
      | "Deleting"
      | "Succeeded"
      | "Creating"
      | "Accepted"
      | "Verifying"
      | "Updating"
      | "Failed"
      | "Canceled"
      | "Deprovisioned";
    accessPolicies?: { objectId: string }[];
    cosmosDbConfiguration?: {
      offerThroughput?: number;
      keyVaultKeyUri?: string;
    };
    authenticationConfiguration?: {
      authority?: string;
      audience?: string;
      smartProxyEnabled?: boolean;
    };
    corsConfiguration?: {
      origins?: string[];
      headers?: string[];
      methods?: string[];
      maxAge?: number;
      allowCredentials?: boolean;
    };
    exportConfiguration?: { storageAccountName?: string };
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForEDMUploadCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Deleting",
            "Succeeded",
            "Creating",
            "Accepted",
            "Verifying",
            "Updating",
            "Failed",
            "Canceled",
            "Deprovisioned",
          ]),
        ),
        accessPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              objectId: Schema.String,
            }),
          ),
        ),
        cosmosDbConfiguration: Schema.optional(
          Schema.Struct({
            offerThroughput: Schema.optional(Schema.Number),
            keyVaultKeyUri: Schema.optional(Schema.String),
          }),
        ),
        authenticationConfiguration: Schema.optional(
          Schema.Struct({
            authority: Schema.optional(Schema.String),
            audience: Schema.optional(Schema.String),
            smartProxyEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        corsConfiguration: Schema.optional(
          Schema.Struct({
            origins: Schema.optional(Schema.Array(Schema.String)),
            headers: Schema.optional(Schema.Array(Schema.String)),
            methods: Schema.optional(Schema.Array(Schema.String)),
            maxAge: Schema.optional(Schema.Number),
            allowCredentials: Schema.optional(Schema.Boolean),
          }),
        ),
        exportConfiguration: Schema.optional(
          Schema.Struct({
            storageAccountName: Schema.optional(Schema.String),
          }),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForEDMUploadCreateOrUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForEDMUploadCreateOrUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForEDMUploadCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForEDMUploadCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of a privateLinkServicesForEDMUpload instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForEDMUploadCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForEDMUploadCreateOrUpdateInput,
    outputSchema: PrivateLinkServicesForEDMUploadCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForEDMUploadGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForEDMUploadGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForEDMUploadGetInput>;

// Output Schema
export interface PrivateLinkServicesForEDMUploadGetOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForEDMUploadGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForEDMUploadGetOutput>;

// The operation
/**
 * Get the metadata of a privateLinkServicesForEDMUpload resource.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForEDMUploadGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForEDMUploadGetInput,
    outputSchema: PrivateLinkServicesForEDMUploadGetOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForEDMUploadListInput {
  subscriptionId: string;
}
export const PrivateLinkServicesForEDMUploadListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForEDMUploadListInput>;

// Output Schema
export interface PrivateLinkServicesForEDMUploadListOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForEDMUploadListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForEDMUploadListOutput>;

// The operation
/**
 * Get all the privateLinkServicesForEDMUpload instances in a subscription.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 */
export const privateLinkServicesForEDMUploadList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForEDMUploadListInput,
    outputSchema: PrivateLinkServicesForEDMUploadListOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForEDMUploadListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrivateLinkServicesForEDMUploadListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForEDMUploadListByResourceGroupInput>;

// Output Schema
export interface PrivateLinkServicesForEDMUploadListByResourceGroupOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForEDMUploadListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForEDMUploadListByResourceGroupOutput>;

// The operation
/**
 * Get all the service instances in a resource group.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 */
export const privateLinkServicesForEDMUploadListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForEDMUploadListByResourceGroupInput,
    outputSchema: PrivateLinkServicesForEDMUploadListByResourceGroupOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForEDMUploadUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
  properties?: { publicNetworkAccess?: "Enabled" | "Disabled" };
}
export const PrivateLinkServicesForEDMUploadUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForEDMUploadUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForEDMUploadUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForEDMUploadUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForEDMUploadUpdateOutput>;

// The operation
/**
 * Update the metadata of a privateLinkServicesForEDMUpload instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param tags - Instance tags
 * @param properties - The properties for updating a service instance.
 */
export const privateLinkServicesForEDMUploadUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForEDMUploadUpdateInput,
    outputSchema: PrivateLinkServicesForEDMUploadUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365ComplianceCenterCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    provisioningState?:
      | "Deleting"
      | "Succeeded"
      | "Creating"
      | "Accepted"
      | "Verifying"
      | "Updating"
      | "Failed"
      | "Canceled"
      | "Deprovisioned";
    accessPolicies?: { objectId: string }[];
    cosmosDbConfiguration?: {
      offerThroughput?: number;
      keyVaultKeyUri?: string;
    };
    authenticationConfiguration?: {
      authority?: string;
      audience?: string;
      smartProxyEnabled?: boolean;
    };
    corsConfiguration?: {
      origins?: string[];
      headers?: string[];
      methods?: string[];
      maxAge?: number;
      allowCredentials?: boolean;
    };
    exportConfiguration?: { storageAccountName?: string };
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForM365ComplianceCenterCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Deleting",
            "Succeeded",
            "Creating",
            "Accepted",
            "Verifying",
            "Updating",
            "Failed",
            "Canceled",
            "Deprovisioned",
          ]),
        ),
        accessPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              objectId: Schema.String,
            }),
          ),
        ),
        cosmosDbConfiguration: Schema.optional(
          Schema.Struct({
            offerThroughput: Schema.optional(Schema.Number),
            keyVaultKeyUri: Schema.optional(Schema.String),
          }),
        ),
        authenticationConfiguration: Schema.optional(
          Schema.Struct({
            authority: Schema.optional(Schema.String),
            audience: Schema.optional(Schema.String),
            smartProxyEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        corsConfiguration: Schema.optional(
          Schema.Struct({
            origins: Schema.optional(Schema.Array(Schema.String)),
            headers: Schema.optional(Schema.Array(Schema.String)),
            methods: Schema.optional(Schema.Array(Schema.String)),
            maxAge: Schema.optional(Schema.Number),
            allowCredentials: Schema.optional(Schema.Boolean),
          }),
        ),
        exportConfiguration: Schema.optional(
          Schema.Struct({
            storageAccountName: Schema.optional(Schema.String),
          }),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterCreateOrUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForM365ComplianceCenterCreateOrUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForM365ComplianceCenterCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of a privateLinkServicesForM365ComplianceCenter instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForM365ComplianceCenterCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForM365ComplianceCenterCreateOrUpdateInput,
    outputSchema:
      PrivateLinkServicesForM365ComplianceCenterCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365ComplianceCenterDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForM365ComplianceCenterDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterDeleteInput>;

// Output Schema
export type PrivateLinkServicesForM365ComplianceCenterDeleteOutput = void;
export const PrivateLinkServicesForM365ComplianceCenterDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterDeleteOutput>;

// The operation
/**
 * Delete a service instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForM365ComplianceCenterDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForM365ComplianceCenterDeleteInput,
    outputSchema: PrivateLinkServicesForM365ComplianceCenterDeleteOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365ComplianceCenterGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForM365ComplianceCenterGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterGetInput>;

// Output Schema
export interface PrivateLinkServicesForM365ComplianceCenterGetOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForM365ComplianceCenterGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterGetOutput>;

// The operation
/**
 * Get the metadata of a privateLinkServicesForM365ComplianceCenter resource.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForM365ComplianceCenterGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForM365ComplianceCenterGetInput,
    outputSchema: PrivateLinkServicesForM365ComplianceCenterGetOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365ComplianceCenterListInput {
  subscriptionId: string;
}
export const PrivateLinkServicesForM365ComplianceCenterListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterListInput>;

// Output Schema
export interface PrivateLinkServicesForM365ComplianceCenterListOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForM365ComplianceCenterListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterListOutput>;

// The operation
/**
 * Get all the privateLinkServicesForM365ComplianceCenter instances in a subscription.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 */
export const privateLinkServicesForM365ComplianceCenterList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForM365ComplianceCenterListInput,
    outputSchema: PrivateLinkServicesForM365ComplianceCenterListOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365ComplianceCenterListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrivateLinkServicesForM365ComplianceCenterListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterListByResourceGroupInput>;

// Output Schema
export interface PrivateLinkServicesForM365ComplianceCenterListByResourceGroupOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForM365ComplianceCenterListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterListByResourceGroupOutput>;

// The operation
/**
 * Get all the service instances in a resource group.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 */
export const privateLinkServicesForM365ComplianceCenterListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateLinkServicesForM365ComplianceCenterListByResourceGroupInput,
    outputSchema:
      PrivateLinkServicesForM365ComplianceCenterListByResourceGroupOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365ComplianceCenterUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
  properties?: { publicNetworkAccess?: "Enabled" | "Disabled" };
}
export const PrivateLinkServicesForM365ComplianceCenterUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForM365ComplianceCenterUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForM365ComplianceCenterUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForM365ComplianceCenterUpdateOutput>;

// The operation
/**
 * Update the metadata of a privateLinkServicesForM365ComplianceCenter instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param tags - Instance tags
 * @param properties - The properties for updating a service instance.
 */
export const privateLinkServicesForM365ComplianceCenterUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForM365ComplianceCenterUpdateInput,
    outputSchema: PrivateLinkServicesForM365ComplianceCenterUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365SecurityCenterCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    provisioningState?:
      | "Deleting"
      | "Succeeded"
      | "Creating"
      | "Accepted"
      | "Verifying"
      | "Updating"
      | "Failed"
      | "Canceled"
      | "Deprovisioned";
    accessPolicies?: { objectId: string }[];
    cosmosDbConfiguration?: {
      offerThroughput?: number;
      keyVaultKeyUri?: string;
    };
    authenticationConfiguration?: {
      authority?: string;
      audience?: string;
      smartProxyEnabled?: boolean;
    };
    corsConfiguration?: {
      origins?: string[];
      headers?: string[];
      methods?: string[];
      maxAge?: number;
      allowCredentials?: boolean;
    };
    exportConfiguration?: { storageAccountName?: string };
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForM365SecurityCenterCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Deleting",
            "Succeeded",
            "Creating",
            "Accepted",
            "Verifying",
            "Updating",
            "Failed",
            "Canceled",
            "Deprovisioned",
          ]),
        ),
        accessPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              objectId: Schema.String,
            }),
          ),
        ),
        cosmosDbConfiguration: Schema.optional(
          Schema.Struct({
            offerThroughput: Schema.optional(Schema.Number),
            keyVaultKeyUri: Schema.optional(Schema.String),
          }),
        ),
        authenticationConfiguration: Schema.optional(
          Schema.Struct({
            authority: Schema.optional(Schema.String),
            audience: Schema.optional(Schema.String),
            smartProxyEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        corsConfiguration: Schema.optional(
          Schema.Struct({
            origins: Schema.optional(Schema.Array(Schema.String)),
            headers: Schema.optional(Schema.Array(Schema.String)),
            methods: Schema.optional(Schema.Array(Schema.String)),
            maxAge: Schema.optional(Schema.Number),
            allowCredentials: Schema.optional(Schema.Boolean),
          }),
        ),
        exportConfiguration: Schema.optional(
          Schema.Struct({
            storageAccountName: Schema.optional(Schema.String),
          }),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterCreateOrUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForM365SecurityCenterCreateOrUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForM365SecurityCenterCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of a privateLinkServicesForM365SecurityCenter instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForM365SecurityCenterCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForM365SecurityCenterCreateOrUpdateInput,
    outputSchema: PrivateLinkServicesForM365SecurityCenterCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365SecurityCenterDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForM365SecurityCenterDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterDeleteInput>;

// Output Schema
export type PrivateLinkServicesForM365SecurityCenterDeleteOutput = void;
export const PrivateLinkServicesForM365SecurityCenterDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterDeleteOutput>;

// The operation
/**
 * Delete a service instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForM365SecurityCenterDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForM365SecurityCenterDeleteInput,
    outputSchema: PrivateLinkServicesForM365SecurityCenterDeleteOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365SecurityCenterGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForM365SecurityCenterGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterGetInput>;

// Output Schema
export interface PrivateLinkServicesForM365SecurityCenterGetOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForM365SecurityCenterGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterGetOutput>;

// The operation
/**
 * Get the metadata of a privateLinkServicesForM365SecurityCenter resource.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForM365SecurityCenterGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForM365SecurityCenterGetInput,
    outputSchema: PrivateLinkServicesForM365SecurityCenterGetOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365SecurityCenterListInput {
  subscriptionId: string;
}
export const PrivateLinkServicesForM365SecurityCenterListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterListInput>;

// Output Schema
export interface PrivateLinkServicesForM365SecurityCenterListOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForM365SecurityCenterListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterListOutput>;

// The operation
/**
 * Get all the privateLinkServicesForM365SecurityCenter instances in a subscription.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 */
export const privateLinkServicesForM365SecurityCenterList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForM365SecurityCenterListInput,
    outputSchema: PrivateLinkServicesForM365SecurityCenterListOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365SecurityCenterListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrivateLinkServicesForM365SecurityCenterListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterListByResourceGroupInput>;

// Output Schema
export interface PrivateLinkServicesForM365SecurityCenterListByResourceGroupOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForM365SecurityCenterListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterListByResourceGroupOutput>;

// The operation
/**
 * Get all the service instances in a resource group.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 */
export const privateLinkServicesForM365SecurityCenterListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateLinkServicesForM365SecurityCenterListByResourceGroupInput,
    outputSchema:
      PrivateLinkServicesForM365SecurityCenterListByResourceGroupOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForM365SecurityCenterUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
  properties?: { publicNetworkAccess?: "Enabled" | "Disabled" };
}
export const PrivateLinkServicesForM365SecurityCenterUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForM365SecurityCenterUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForM365SecurityCenterUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForM365SecurityCenterUpdateOutput>;

// The operation
/**
 * Update the metadata of a privateLinkServicesForM365SecurityCenter instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param tags - Instance tags
 * @param properties - The properties for updating a service instance.
 */
export const privateLinkServicesForM365SecurityCenterUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForM365SecurityCenterUpdateInput,
    outputSchema: PrivateLinkServicesForM365SecurityCenterUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForMIPPolicySyncCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    provisioningState?:
      | "Deleting"
      | "Succeeded"
      | "Creating"
      | "Accepted"
      | "Verifying"
      | "Updating"
      | "Failed"
      | "Canceled"
      | "Deprovisioned";
    accessPolicies?: { objectId: string }[];
    cosmosDbConfiguration?: {
      offerThroughput?: number;
      keyVaultKeyUri?: string;
    };
    authenticationConfiguration?: {
      authority?: string;
      audience?: string;
      smartProxyEnabled?: boolean;
    };
    corsConfiguration?: {
      origins?: string[];
      headers?: string[];
      methods?: string[];
      maxAge?: number;
      allowCredentials?: boolean;
    };
    exportConfiguration?: { storageAccountName?: string };
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForMIPPolicySyncCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Deleting",
            "Succeeded",
            "Creating",
            "Accepted",
            "Verifying",
            "Updating",
            "Failed",
            "Canceled",
            "Deprovisioned",
          ]),
        ),
        accessPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              objectId: Schema.String,
            }),
          ),
        ),
        cosmosDbConfiguration: Schema.optional(
          Schema.Struct({
            offerThroughput: Schema.optional(Schema.Number),
            keyVaultKeyUri: Schema.optional(Schema.String),
          }),
        ),
        authenticationConfiguration: Schema.optional(
          Schema.Struct({
            authority: Schema.optional(Schema.String),
            audience: Schema.optional(Schema.String),
            smartProxyEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        corsConfiguration: Schema.optional(
          Schema.Struct({
            origins: Schema.optional(Schema.Array(Schema.String)),
            headers: Schema.optional(Schema.Array(Schema.String)),
            methods: Schema.optional(Schema.Array(Schema.String)),
            maxAge: Schema.optional(Schema.Number),
            allowCredentials: Schema.optional(Schema.Boolean),
          }),
        ),
        exportConfiguration: Schema.optional(
          Schema.Struct({
            storageAccountName: Schema.optional(Schema.String),
          }),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncCreateOrUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForMIPPolicySyncCreateOrUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForMIPPolicySyncCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of a privateLinkServicesForMIPPolicySync instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForMIPPolicySyncCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForMIPPolicySyncCreateOrUpdateInput,
    outputSchema: PrivateLinkServicesForMIPPolicySyncCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForMIPPolicySyncDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForMIPPolicySyncDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncDeleteInput>;

// Output Schema
export type PrivateLinkServicesForMIPPolicySyncDeleteOutput = void;
export const PrivateLinkServicesForMIPPolicySyncDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncDeleteOutput>;

// The operation
/**
 * Delete a service instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForMIPPolicySyncDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForMIPPolicySyncDeleteInput,
    outputSchema: PrivateLinkServicesForMIPPolicySyncDeleteOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForMIPPolicySyncGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForMIPPolicySyncGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncGetInput>;

// Output Schema
export interface PrivateLinkServicesForMIPPolicySyncGetOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForMIPPolicySyncGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncGetOutput>;

// The operation
/**
 * Get the metadata of a privateLinkServicesForMIPPolicySync resource.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForMIPPolicySyncGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForMIPPolicySyncGetInput,
    outputSchema: PrivateLinkServicesForMIPPolicySyncGetOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForMIPPolicySyncListInput {
  subscriptionId: string;
}
export const PrivateLinkServicesForMIPPolicySyncListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncListInput>;

// Output Schema
export interface PrivateLinkServicesForMIPPolicySyncListOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForMIPPolicySyncListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncListOutput>;

// The operation
/**
 * Get all the privateLinkServicesForMIPPolicySync instances in a subscription.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 */
export const privateLinkServicesForMIPPolicySyncList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForMIPPolicySyncListInput,
    outputSchema: PrivateLinkServicesForMIPPolicySyncListOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForMIPPolicySyncListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrivateLinkServicesForMIPPolicySyncListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncListByResourceGroupInput>;

// Output Schema
export interface PrivateLinkServicesForMIPPolicySyncListByResourceGroupOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForMIPPolicySyncListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncListByResourceGroupOutput>;

// The operation
/**
 * Get all the service instances in a resource group.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 */
export const privateLinkServicesForMIPPolicySyncListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForMIPPolicySyncListByResourceGroupInput,
    outputSchema: PrivateLinkServicesForMIPPolicySyncListByResourceGroupOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForMIPPolicySyncUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
  properties?: { publicNetworkAccess?: "Enabled" | "Disabled" };
}
export const PrivateLinkServicesForMIPPolicySyncUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForMIPPolicySync/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForMIPPolicySyncUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForMIPPolicySyncUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForMIPPolicySyncUpdateOutput>;

// The operation
/**
 * Update the metadata of a privateLinkServicesForMIPPolicySync instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param tags - Instance tags
 * @param properties - The properties for updating a service instance.
 */
export const privateLinkServicesForMIPPolicySyncUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForMIPPolicySyncUpdateInput,
    outputSchema: PrivateLinkServicesForMIPPolicySyncUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForO365ManagementActivityAPICreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    provisioningState?:
      | "Deleting"
      | "Succeeded"
      | "Creating"
      | "Accepted"
      | "Verifying"
      | "Updating"
      | "Failed"
      | "Canceled"
      | "Deprovisioned";
    accessPolicies?: { objectId: string }[];
    cosmosDbConfiguration?: {
      offerThroughput?: number;
      keyVaultKeyUri?: string;
    };
    authenticationConfiguration?: {
      authority?: string;
      audience?: string;
      smartProxyEnabled?: boolean;
    };
    corsConfiguration?: {
      origins?: string[];
      headers?: string[];
      methods?: string[];
      maxAge?: number;
      allowCredentials?: boolean;
    };
    exportConfiguration?: { storageAccountName?: string };
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForO365ManagementActivityAPICreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Deleting",
            "Succeeded",
            "Creating",
            "Accepted",
            "Verifying",
            "Updating",
            "Failed",
            "Canceled",
            "Deprovisioned",
          ]),
        ),
        accessPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              objectId: Schema.String,
            }),
          ),
        ),
        cosmosDbConfiguration: Schema.optional(
          Schema.Struct({
            offerThroughput: Schema.optional(Schema.Number),
            keyVaultKeyUri: Schema.optional(Schema.String),
          }),
        ),
        authenticationConfiguration: Schema.optional(
          Schema.Struct({
            authority: Schema.optional(Schema.String),
            audience: Schema.optional(Schema.String),
            smartProxyEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        corsConfiguration: Schema.optional(
          Schema.Struct({
            origins: Schema.optional(Schema.Array(Schema.String)),
            headers: Schema.optional(Schema.Array(Schema.String)),
            methods: Schema.optional(Schema.Array(Schema.String)),
            maxAge: Schema.optional(Schema.Number),
            allowCredentials: Schema.optional(Schema.Boolean),
          }),
        ),
        exportConfiguration: Schema.optional(
          Schema.Struct({
            storageAccountName: Schema.optional(Schema.String),
          }),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPICreateOrUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForO365ManagementActivityAPICreateOrUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForO365ManagementActivityAPICreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPICreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of a privateLinkServicesForO365ManagementActivityAPI instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForO365ManagementActivityAPICreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateLinkServicesForO365ManagementActivityAPICreateOrUpdateInput,
    outputSchema:
      PrivateLinkServicesForO365ManagementActivityAPICreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForO365ManagementActivityAPIDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForO365ManagementActivityAPIDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPIDeleteInput>;

// Output Schema
export type PrivateLinkServicesForO365ManagementActivityAPIDeleteOutput = void;
export const PrivateLinkServicesForO365ManagementActivityAPIDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPIDeleteOutput>;

// The operation
/**
 * Delete a service instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForO365ManagementActivityAPIDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForO365ManagementActivityAPIDeleteInput,
    outputSchema: PrivateLinkServicesForO365ManagementActivityAPIDeleteOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForO365ManagementActivityAPIGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForO365ManagementActivityAPIGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPIGetInput>;

// Output Schema
export interface PrivateLinkServicesForO365ManagementActivityAPIGetOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForO365ManagementActivityAPIGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPIGetOutput>;

// The operation
/**
 * Get the metadata of a privateLinkServicesForO365ManagementActivityAPI resource.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForO365ManagementActivityAPIGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForO365ManagementActivityAPIGetInput,
    outputSchema: PrivateLinkServicesForO365ManagementActivityAPIGetOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForO365ManagementActivityAPIListInput {
  subscriptionId: string;
}
export const PrivateLinkServicesForO365ManagementActivityAPIListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPIListInput>;

// Output Schema
export interface PrivateLinkServicesForO365ManagementActivityAPIListOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForO365ManagementActivityAPIListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPIListOutput>;

// The operation
/**
 * Get all the privateLinkServicesForO365ManagementActivityAPI instances in a subscription.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 */
export const privateLinkServicesForO365ManagementActivityAPIList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForO365ManagementActivityAPIListInput,
    outputSchema: PrivateLinkServicesForO365ManagementActivityAPIListOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForO365ManagementActivityAPIListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrivateLinkServicesForO365ManagementActivityAPIListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPIListByResourceGroupInput>;

// Output Schema
export interface PrivateLinkServicesForO365ManagementActivityAPIListByResourceGroupOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForO365ManagementActivityAPIListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPIListByResourceGroupOutput>;

// The operation
/**
 * Get all the service instances in a resource group.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 */
export const privateLinkServicesForO365ManagementActivityAPIListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateLinkServicesForO365ManagementActivityAPIListByResourceGroupInput,
    outputSchema:
      PrivateLinkServicesForO365ManagementActivityAPIListByResourceGroupOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForO365ManagementActivityAPIUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
  properties?: { publicNetworkAccess?: "Enabled" | "Disabled" };
}
export const PrivateLinkServicesForO365ManagementActivityAPIUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPIUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForO365ManagementActivityAPIUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForO365ManagementActivityAPIUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForO365ManagementActivityAPIUpdateOutput>;

// The operation
/**
 * Update the metadata of a privateLinkServicesForO365ManagementActivityAPI instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param tags - Instance tags
 * @param properties - The properties for updating a service instance.
 */
export const privateLinkServicesForO365ManagementActivityAPIUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForO365ManagementActivityAPIUpdateInput,
    outputSchema: PrivateLinkServicesForO365ManagementActivityAPIUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForSCCPowershellCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    provisioningState?:
      | "Deleting"
      | "Succeeded"
      | "Creating"
      | "Accepted"
      | "Verifying"
      | "Updating"
      | "Failed"
      | "Canceled"
      | "Deprovisioned";
    accessPolicies?: { objectId: string }[];
    cosmosDbConfiguration?: {
      offerThroughput?: number;
      keyVaultKeyUri?: string;
    };
    authenticationConfiguration?: {
      authority?: string;
      audience?: string;
      smartProxyEnabled?: boolean;
    };
    corsConfiguration?: {
      origins?: string[];
      headers?: string[];
      methods?: string[];
      maxAge?: number;
      allowCredentials?: boolean;
    };
    exportConfiguration?: { storageAccountName?: string };
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForSCCPowershellCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Deleting",
            "Succeeded",
            "Creating",
            "Accepted",
            "Verifying",
            "Updating",
            "Failed",
            "Canceled",
            "Deprovisioned",
          ]),
        ),
        accessPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              objectId: Schema.String,
            }),
          ),
        ),
        cosmosDbConfiguration: Schema.optional(
          Schema.Struct({
            offerThroughput: Schema.optional(Schema.Number),
            keyVaultKeyUri: Schema.optional(Schema.String),
          }),
        ),
        authenticationConfiguration: Schema.optional(
          Schema.Struct({
            authority: Schema.optional(Schema.String),
            audience: Schema.optional(Schema.String),
            smartProxyEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        corsConfiguration: Schema.optional(
          Schema.Struct({
            origins: Schema.optional(Schema.Array(Schema.String)),
            headers: Schema.optional(Schema.Array(Schema.String)),
            methods: Schema.optional(Schema.Array(Schema.String)),
            maxAge: Schema.optional(Schema.Number),
            allowCredentials: Schema.optional(Schema.Boolean),
          }),
        ),
        exportConfiguration: Schema.optional(
          Schema.Struct({
            storageAccountName: Schema.optional(Schema.String),
          }),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellCreateOrUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForSCCPowershellCreateOrUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForSCCPowershellCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of a privateLinkServicesForSCCPowershell instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForSCCPowershellCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForSCCPowershellCreateOrUpdateInput,
    outputSchema: PrivateLinkServicesForSCCPowershellCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForSCCPowershellDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForSCCPowershellDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellDeleteInput>;

// Output Schema
export type PrivateLinkServicesForSCCPowershellDeleteOutput = void;
export const PrivateLinkServicesForSCCPowershellDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellDeleteOutput>;

// The operation
/**
 * Delete a service instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForSCCPowershellDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForSCCPowershellDeleteInput,
    outputSchema: PrivateLinkServicesForSCCPowershellDeleteOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForSCCPowershellGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkServicesForSCCPowershellGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellGetInput>;

// Output Schema
export interface PrivateLinkServicesForSCCPowershellGetOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForSCCPowershellGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellGetOutput>;

// The operation
/**
 * Get the metadata of a privateLinkServicesForSCCPowershell resource.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const privateLinkServicesForSCCPowershellGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForSCCPowershellGetInput,
    outputSchema: PrivateLinkServicesForSCCPowershellGetOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForSCCPowershellListInput {
  subscriptionId: string;
}
export const PrivateLinkServicesForSCCPowershellListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellListInput>;

// Output Schema
export interface PrivateLinkServicesForSCCPowershellListOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForSCCPowershellListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellListOutput>;

// The operation
/**
 * Get all the privateLinkServicesForSCCPowershell instances in a subscription.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 */
export const privateLinkServicesForSCCPowershellList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForSCCPowershellListInput,
    outputSchema: PrivateLinkServicesForSCCPowershellListOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForSCCPowershellListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrivateLinkServicesForSCCPowershellListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellListByResourceGroupInput>;

// Output Schema
export interface PrivateLinkServicesForSCCPowershellListByResourceGroupOutput {
  nextLink?: string;
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
    kind: "fhir" | "fhir-Stu3" | "fhir-R4";
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "SystemAssigned" | "None";
    };
  }[];
}
export const PrivateLinkServicesForSCCPowershellListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
          kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "None"]),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellListByResourceGroupOutput>;

// The operation
/**
 * Get all the service instances in a resource group.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 */
export const privateLinkServicesForSCCPowershellListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForSCCPowershellListByResourceGroupInput,
    outputSchema: PrivateLinkServicesForSCCPowershellListByResourceGroupOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForSCCPowershellUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string>;
  properties?: { publicNetworkAccess?: "Enabled" | "Disabled" };
}
export const PrivateLinkServicesForSCCPowershellUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/{resourceName}",
      apiVersion: "2021-03-08",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellUpdateInput>;

// Output Schema
export interface PrivateLinkServicesForSCCPowershellUpdateOutput {
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
  kind: "fhir" | "fhir-Stu3" | "fhir-R4";
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned" | "None";
  };
}
export const PrivateLinkServicesForSCCPowershellUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    kind: Schema.Literals(["fhir", "fhir-Stu3", "fhir-R4"]),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned", "None"])),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkServicesForSCCPowershellUpdateOutput>;

// The operation
/**
 * Update the metadata of a privateLinkServicesForSCCPowershell instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 * @param tags - Instance tags
 * @param properties - The properties for updating a service instance.
 */
export const privateLinkServicesForSCCPowershellUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForSCCPowershellUpdateInput,
    outputSchema: PrivateLinkServicesForSCCPowershellUpdateOutput,
  }));
// Input Schema
export interface ServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const ServicesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/{resourceName}",
    apiVersion: "2021-03-08",
  }),
) as unknown as Schema.Codec<ServicesDeleteInput>;

// Output Schema
export type ServicesDeleteOutput = void;
export const ServicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesDeleteOutput>;

// The operation
/**
 * Delete a service instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the service instance.
 * @param resourceName - The name of the service instance.
 */
export const ServicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
