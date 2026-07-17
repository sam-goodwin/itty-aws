/**
 * Azure Webpubsub API
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
    path: "/providers/Microsoft.SignalRService/operations",
    apiVersion: "2024-03-01",
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
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          fillGapWithZero?: string;
          category?: string;
          dimensions?: {
            name?: string;
            displayName?: string;
            internalName?: string;
            toBeExportedForShoebox?: boolean;
          }[];
        }[];
        logSpecifications?: { name?: string; displayName?: string }[];
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
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      fillGapWithZero: Schema.optional(Schema.String),
                      category: Schema.optional(Schema.String),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                            internalName: Schema.optional(Schema.String),
                            toBeExportedForShoebox: Schema.optional(
                              Schema.Boolean,
                            ),
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
 * Lists all of the available REST API operations of the Microsoft.SignalRService provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface UsagesListInput {
  location: string;
  subscriptionId: string;
}
export const UsagesListInput = /*@__PURE__*/ Schema.Struct({
  location: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/locations/{location}/usages",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<UsagesListInput>;

// Output Schema
export interface UsagesListOutput {
  value?: {
    id?: string;
    currentValue?: number;
    limit?: number;
    name?: { value?: string; localizedValue?: string };
    unit?: string;
  }[];
  nextLink?: string;
}
export const UsagesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        currentValue: Schema.optional(Schema.Number),
        limit: Schema.optional(Schema.Number),
        name: Schema.optional(
          Schema.Struct({
            value: Schema.optional(Schema.String),
            localizedValue: Schema.optional(Schema.String),
          }),
        ),
        unit: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UsagesListOutput>;

// The operation
/**
 * List resource usage quotas by location.
 *
 * @param location - the location like "eastus"
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const UsagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
// Input Schema
export interface WebPubSubCheckNameAvailabilityInput {
  location: string;
  subscriptionId: string;
  type: string;
  name: string;
}
export const WebPubSubCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    type: Schema.String,
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/locations/{location}/checkNameAvailability",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubCheckNameAvailabilityInput>;

// Output Schema
export interface WebPubSubCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const WebPubSubCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WebPubSubCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the resource name is valid and is not already in use.
 *
 * @param location - the region
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const WebPubSubCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCheckNameAvailabilityInput,
    outputSchema: WebPubSubCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface WebPubSubCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    externalIP?: string;
    hostName?: string;
    publicPort?: number;
    serverPort?: number;
    version?: string;
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
    sharedPrivateLinkResources?: {
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
    tls?: { clientCertEnabled?: boolean };
    hostNamePrefix?: string;
    liveTraceConfiguration?: {
      enabled?: string;
      categories?: { name?: string; enabled?: string }[];
    };
    resourceLogConfiguration?: {
      categories?: { name?: string; enabled?: string }[];
    };
    networkACLs?: {
      defaultAction?: "Allow" | "Deny";
      publicNetwork?: {
        allow?: (
          | "ClientConnection"
          | "ServerConnection"
          | "RESTAPI"
          | "Trace"
        )[];
        deny?: (
          | "ClientConnection"
          | "ServerConnection"
          | "RESTAPI"
          | "Trace"
        )[];
      };
      privateEndpoints?: {
        allow?: (
          | "ClientConnection"
          | "ServerConnection"
          | "RESTAPI"
          | "Trace"
        )[];
        deny?: (
          | "ClientConnection"
          | "ServerConnection"
          | "RESTAPI"
          | "Trace"
        )[];
      }[];
      ipRules?: { value?: string; action?: "Allow" | "Deny" }[];
    };
    publicNetworkAccess?: string;
    disableLocalAuth?: boolean;
    disableAadAuth?: boolean;
    regionEndpointEnabled?: string;
    resourceStopped?: string;
    socketIO?: { serviceMode?: string };
  };
  kind?: "WebPubSub" | "SocketIO";
  identity?: {
    type?: "None" | "SystemAssigned" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
    principalId?: string;
    tenantId?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const WebPubSubCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Failed",
            "Canceled",
            "Running",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
          ]),
        ),
        externalIP: Schema.optional(Schema.String),
        hostName: Schema.optional(Schema.String),
        publicPort: Schema.optional(Schema.Number),
        serverPort: Schema.optional(Schema.Number),
        version: Schema.optional(Schema.String),
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
        sharedPrivateLinkResources: Schema.optional(
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
        tls: Schema.optional(
          Schema.Struct({
            clientCertEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        hostNamePrefix: Schema.optional(Schema.String),
        liveTraceConfiguration: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.String),
            categories: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  enabled: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        resourceLogConfiguration: Schema.optional(
          Schema.Struct({
            categories: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  enabled: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        networkACLs: Schema.optional(
          Schema.Struct({
            defaultAction: Schema.optional(Schema.Literals(["Allow", "Deny"])),
            publicNetwork: Schema.optional(
              Schema.Struct({
                allow: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "ClientConnection",
                      "ServerConnection",
                      "RESTAPI",
                      "Trace",
                    ]),
                  ),
                ),
                deny: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "ClientConnection",
                      "ServerConnection",
                      "RESTAPI",
                      "Trace",
                    ]),
                  ),
                ),
              }),
            ),
            privateEndpoints: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  allow: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "ClientConnection",
                        "ServerConnection",
                        "RESTAPI",
                        "Trace",
                      ]),
                    ),
                  ),
                  deny: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "ClientConnection",
                        "ServerConnection",
                        "RESTAPI",
                        "Trace",
                      ]),
                    ),
                  ),
                }),
              ),
            ),
            ipRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  value: Schema.optional(Schema.String),
                  action: Schema.optional(Schema.Literals(["Allow", "Deny"])),
                }),
              ),
            ),
          }),
        ),
        publicNetworkAccess: Schema.optional(Schema.String),
        disableLocalAuth: Schema.optional(Schema.Boolean),
        disableAadAuth: Schema.optional(Schema.Boolean),
        regionEndpointEnabled: Schema.optional(Schema.String),
        resourceStopped: Schema.optional(Schema.String),
        socketIO: Schema.optional(
          Schema.Struct({
            serviceMode: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    kind: Schema.optional(Schema.Literals(["WebPubSub", "SocketIO"])),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubCreateOrUpdateInput>;

// Output Schema
export interface WebPubSubCreateOrUpdateOutput {
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
export const WebPubSubCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WebPubSubCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubCreateOrUpdateInput,
  outputSchema: WebPubSubCreateOrUpdateOutput,
}));
// Input Schema
export interface WebPubSubCustomCertificatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  certificateName: string;
  properties: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    keyVaultBaseUri: string;
    keyVaultSecretName: string;
    keyVaultSecretVersion?: string;
  };
}
export const WebPubSubCustomCertificatesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Succeeded",
          "Failed",
          "Canceled",
          "Running",
          "Creating",
          "Updating",
          "Deleting",
          "Moving",
        ]),
      ),
      keyVaultBaseUri: Schema.String,
      keyVaultSecretName: Schema.String,
      keyVaultSecretVersion: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates/{certificateName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubCustomCertificatesCreateOrUpdateInput>;

// Output Schema
export interface WebPubSubCustomCertificatesCreateOrUpdateOutput {
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
export const WebPubSubCustomCertificatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WebPubSubCustomCertificatesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a custom certificate.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param certificateName - Custom certificate name
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomCertificatesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomCertificatesCreateOrUpdateInput,
    outputSchema: WebPubSubCustomCertificatesCreateOrUpdateOutput,
  }));
// Input Schema
export interface WebPubSubCustomCertificatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  certificateName: string;
}
export const WebPubSubCustomCertificatesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates/{certificateName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubCustomCertificatesDeleteInput>;

// Output Schema
export type WebPubSubCustomCertificatesDeleteOutput = void;
export const WebPubSubCustomCertificatesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WebPubSubCustomCertificatesDeleteOutput>;

// The operation
/**
 * Delete a custom certificate.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param certificateName - Custom certificate name
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomCertificatesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomCertificatesDeleteInput,
    outputSchema: WebPubSubCustomCertificatesDeleteOutput,
  }));
// Input Schema
export interface WebPubSubCustomCertificatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  certificateName: string;
}
export const WebPubSubCustomCertificatesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates/{certificateName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubCustomCertificatesGetInput>;

// Output Schema
export interface WebPubSubCustomCertificatesGetOutput {
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
export const WebPubSubCustomCertificatesGetOutput =
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
  }) as unknown as Schema.Codec<WebPubSubCustomCertificatesGetOutput>;

// The operation
/**
 * Get a custom certificate.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param certificateName - Custom certificate name
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomCertificatesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomCertificatesGetInput,
    outputSchema: WebPubSubCustomCertificatesGetOutput,
  }));
// Input Schema
export interface WebPubSubCustomCertificatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubCustomCertificatesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubCustomCertificatesListInput>;

// Output Schema
export interface WebPubSubCustomCertificatesListOutput {
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
export const WebPubSubCustomCertificatesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WebPubSubCustomCertificatesListOutput>;

// The operation
/**
 * List all custom certificates.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomCertificatesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomCertificatesListInput,
    outputSchema: WebPubSubCustomCertificatesListOutput,
  }));
// Input Schema
export interface WebPubSubCustomDomainsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  name: string;
  properties: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    domainName: string;
    customCertificate: { id?: string };
  };
}
export const WebPubSubCustomDomainsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Succeeded",
          "Failed",
          "Canceled",
          "Running",
          "Creating",
          "Updating",
          "Deleting",
          "Moving",
        ]),
      ),
      domainName: Schema.String,
      customCertificate: Schema.Struct({
        id: Schema.optional(Schema.String),
      }),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customDomains/{name}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubCustomDomainsCreateOrUpdateInput>;

// Output Schema
export interface WebPubSubCustomDomainsCreateOrUpdateOutput {
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
export const WebPubSubCustomDomainsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WebPubSubCustomDomainsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a custom domain.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param name - Custom domain name.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomDomainsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomDomainsCreateOrUpdateInput,
    outputSchema: WebPubSubCustomDomainsCreateOrUpdateOutput,
  }));
// Input Schema
export interface WebPubSubCustomDomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  name: string;
}
export const WebPubSubCustomDomainsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customDomains/{name}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubCustomDomainsDeleteInput>;

// Output Schema
export type WebPubSubCustomDomainsDeleteOutput = void;
export const WebPubSubCustomDomainsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WebPubSubCustomDomainsDeleteOutput>;

// The operation
/**
 * Delete a custom domain.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param name - Custom domain name.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomDomainsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomDomainsDeleteInput,
    outputSchema: WebPubSubCustomDomainsDeleteOutput,
  }));
// Input Schema
export interface WebPubSubCustomDomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  name: string;
}
export const WebPubSubCustomDomainsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customDomains/{name}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubCustomDomainsGetInput>;

// Output Schema
export interface WebPubSubCustomDomainsGetOutput {
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
export const WebPubSubCustomDomainsGetOutput =
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
  }) as unknown as Schema.Codec<WebPubSubCustomDomainsGetOutput>;

// The operation
/**
 * Get a custom domain.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param name - Custom domain name.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomDomainsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubCustomDomainsGetInput,
  outputSchema: WebPubSubCustomDomainsGetOutput,
}));
// Input Schema
export interface WebPubSubCustomDomainsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubCustomDomainsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customDomains",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubCustomDomainsListInput>;

// Output Schema
export interface WebPubSubCustomDomainsListOutput {
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
export const WebPubSubCustomDomainsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WebPubSubCustomDomainsListOutput>;

// The operation
/**
 * List all custom domains.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomDomainsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubCustomDomainsListInput,
  outputSchema: WebPubSubCustomDomainsListOutput,
}));
// Input Schema
export interface WebPubSubDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<WebPubSubDeleteInput>;

// Output Schema
export type WebPubSubDeleteOutput = void;
export const WebPubSubDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WebPubSubDeleteOutput>;

// The operation
/**
 * Operation to delete a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubDeleteInput,
  outputSchema: WebPubSubDeleteOutput,
}));
// Input Schema
export interface WebPubSubGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<WebPubSubGetInput>;

// Output Schema
export interface WebPubSubGetOutput {
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
export const WebPubSubGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebPubSubGetOutput>;

// The operation
/**
 * Get the resource and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubGetInput,
  outputSchema: WebPubSubGetOutput,
}));
// Input Schema
export interface WebPubSubHubsCreateOrUpdateInput {
  hubName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties: {
    eventHandlers?: {
      urlTemplate: string;
      userEventPattern?: string;
      systemEvents?: string[];
      auth?: {
        type?: "None" | "ManagedIdentity";
        managedIdentity?: { resource?: string };
      };
    }[];
    eventListeners?: {
      filter: { type: "EventName" };
      endpoint: { type: "EventHub" };
    }[];
    anonymousConnectPolicy?: string;
    webSocketKeepAliveIntervalInSeconds?: number;
  };
}
export const WebPubSubHubsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      eventHandlers: Schema.optional(
        Schema.Array(
          Schema.Struct({
            urlTemplate: Schema.String,
            userEventPattern: Schema.optional(Schema.String),
            systemEvents: Schema.optional(Schema.Array(Schema.String)),
            auth: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["None", "ManagedIdentity"]),
                ),
                managedIdentity: Schema.optional(
                  Schema.Struct({
                    resource: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
      ),
      eventListeners: Schema.optional(
        Schema.Array(
          Schema.Struct({
            filter: Schema.Struct({
              type: Schema.Literals(["EventName"]),
            }),
            endpoint: Schema.Struct({
              type: Schema.Literals(["EventHub"]),
            }),
          }),
        ),
      ),
      anonymousConnectPolicy: Schema.optional(Schema.String),
      webSocketKeepAliveIntervalInSeconds: Schema.optional(Schema.Number),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/hubs/{hubName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubHubsCreateOrUpdateInput>;

// Output Schema
export interface WebPubSubHubsCreateOrUpdateOutput {
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
export const WebPubSubHubsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WebPubSubHubsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a hub setting.
 *
 * @param hubName - The hub name.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubHubsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubHubsCreateOrUpdateInput,
  outputSchema: WebPubSubHubsCreateOrUpdateOutput,
}));
// Input Schema
export interface WebPubSubHubsDeleteInput {
  hubName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubHubsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/hubs/{hubName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubHubsDeleteInput>;

// Output Schema
export type WebPubSubHubsDeleteOutput = void;
export const WebPubSubHubsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WebPubSubHubsDeleteOutput>;

// The operation
/**
 * Delete a hub setting.
 *
 * @param hubName - The hub name.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubHubsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubHubsDeleteInput,
  outputSchema: WebPubSubHubsDeleteOutput,
}));
// Input Schema
export interface WebPubSubHubsGetInput {
  hubName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubHubsGetInput = /*@__PURE__*/ Schema.Struct({
  hubName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/hubs/{hubName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<WebPubSubHubsGetInput>;

// Output Schema
export interface WebPubSubHubsGetOutput {
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
export const WebPubSubHubsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebPubSubHubsGetOutput>;

// The operation
/**
 * Get a hub setting.
 *
 * @param hubName - The hub name.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubHubsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubHubsGetInput,
  outputSchema: WebPubSubHubsGetOutput,
}));
// Input Schema
export interface WebPubSubHubsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubHubsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/hubs",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<WebPubSubHubsListInput>;

// Output Schema
export interface WebPubSubHubsListOutput {
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
export const WebPubSubHubsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WebPubSubHubsListOutput>;

// The operation
/**
 * List hub settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubHubsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubHubsListInput,
  outputSchema: WebPubSubHubsListOutput,
}));
// Input Schema
export interface WebPubSubListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const WebPubSubListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubListByResourceGroupInput>;

// Output Schema
export interface WebPubSubListByResourceGroupOutput {
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
export const WebPubSubListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WebPubSubListByResourceGroupOutput>;

// The operation
/**
 * Handles requests to list all resources in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubListByResourceGroupInput,
    outputSchema: WebPubSubListByResourceGroupOutput,
  }));
// Input Schema
export interface WebPubSubListBySubscriptionInput {
  subscriptionId: string;
}
export const WebPubSubListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/webPubSub",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubListBySubscriptionInput>;

// Output Schema
export interface WebPubSubListBySubscriptionOutput {
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
export const WebPubSubListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WebPubSubListBySubscriptionOutput>;

// The operation
/**
 * Handles requests to list all resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const WebPubSubListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubListBySubscriptionInput,
  outputSchema: WebPubSubListBySubscriptionOutput,
}));
// Input Schema
export interface WebPubSubListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubListKeysInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/listKeys",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<WebPubSubListKeysInput>;

// Output Schema
export interface WebPubSubListKeysOutput {
  primaryKey?: string;
  secondaryKey?: string;
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
}
export const WebPubSubListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WebPubSubListKeysOutput>;

// The operation
/**
 * Get the access keys of the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubListKeysInput,
  outputSchema: WebPubSubListKeysOutput,
}));
// Input Schema
export interface WebPubSubListReplicaSkusInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
}
export const WebPubSubListReplicaSkusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}/skus",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubListReplicaSkusInput>;

// Output Schema
export interface WebPubSubListReplicaSkusOutput {
  value?: {
    resourceType?: string;
    sku?: {
      name: string;
      tier?: "Free" | "Basic" | "Standard" | "Premium";
      size?: string;
      family?: string;
      capacity?: number;
    };
    capacity?: {
      minimum?: number;
      maximum?: number;
      default?: number;
      allowedValues?: number[];
      scaleType?: "None" | "Manual" | "Automatic";
    };
  }[];
  nextLink?: string;
}
export const WebPubSubListReplicaSkusOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              tier: Schema.optional(
                Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
              ),
              size: Schema.optional(Schema.String),
              family: Schema.optional(Schema.String),
              capacity: Schema.optional(Schema.Number),
            }),
          ),
          capacity: Schema.optional(
            Schema.Struct({
              minimum: Schema.optional(Schema.Number),
              maximum: Schema.optional(Schema.Number),
              default: Schema.optional(Schema.Number),
              allowedValues: Schema.optional(Schema.Array(Schema.Number)),
              scaleType: Schema.optional(
                Schema.Literals(["None", "Manual", "Automatic"]),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WebPubSubListReplicaSkusOutput>;

// The operation
/**
 * List all available skus of the replica resource.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param replicaName - The name of the replica.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubListReplicaSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubListReplicaSkusInput,
  outputSchema: WebPubSubListReplicaSkusOutput,
}));
// Input Schema
export interface WebPubSubListSkusInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubListSkusInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/skus",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<WebPubSubListSkusInput>;

// Output Schema
export interface WebPubSubListSkusOutput {
  value?: {
    resourceType?: string;
    sku?: {
      name: string;
      tier?: "Free" | "Basic" | "Standard" | "Premium";
      size?: string;
      family?: string;
      capacity?: number;
    };
    capacity?: {
      minimum?: number;
      maximum?: number;
      default?: number;
      allowedValues?: number[];
      scaleType?: "None" | "Manual" | "Automatic";
    };
  }[];
  nextLink?: string;
}
export const WebPubSubListSkusOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              tier: Schema.optional(
                Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
              ),
              size: Schema.optional(Schema.String),
              family: Schema.optional(Schema.String),
              capacity: Schema.optional(Schema.Number),
            }),
          ),
          capacity: Schema.optional(
            Schema.Struct({
              minimum: Schema.optional(Schema.Number),
              maximum: Schema.optional(Schema.Number),
              default: Schema.optional(Schema.Number),
              allowedValues: Schema.optional(Schema.Array(Schema.Number)),
              scaleType: Schema.optional(
                Schema.Literals(["None", "Manual", "Automatic"]),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WebPubSubListSkusOutput>;

// The operation
/**
 * List all available skus of the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubListSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubListSkusInput,
  outputSchema: WebPubSubListSkusOutput,
}));
// Input Schema
export interface WebPubSubPrivateEndpointConnectionsDeleteInput {
  privateEndpointConnectionName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubPrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubPrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type WebPubSubPrivateEndpointConnectionsDeleteOutput = void;
export const WebPubSubPrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WebPubSubPrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Delete the specified private endpoint connection
 *
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubPrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubPrivateEndpointConnectionsDeleteInput,
    outputSchema: WebPubSubPrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface WebPubSubPrivateEndpointConnectionsGetInput {
  privateEndpointConnectionName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubPrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubPrivateEndpointConnectionsGetInput>;

// Output Schema
export interface WebPubSubPrivateEndpointConnectionsGetOutput {
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
export const WebPubSubPrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<WebPubSubPrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Get the specified private endpoint connection
 *
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubPrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubPrivateEndpointConnectionsGetInput,
    outputSchema: WebPubSubPrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface WebPubSubPrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubPrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateEndpointConnections",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubPrivateEndpointConnectionsListInput>;

// Output Schema
export interface WebPubSubPrivateEndpointConnectionsListOutput {
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
export const WebPubSubPrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WebPubSubPrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List private endpoint connections
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubPrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubPrivateEndpointConnectionsListInput,
    outputSchema: WebPubSubPrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface WebPubSubPrivateEndpointConnectionsUpdateInput {
  privateEndpointConnectionName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    privateEndpoint?: { id?: string };
    groupIds?: string[];
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
  };
}
export const WebPubSubPrivateEndpointConnectionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Failed",
            "Canceled",
            "Running",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
          ]),
        ),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubPrivateEndpointConnectionsUpdateInput>;

// Output Schema
export interface WebPubSubPrivateEndpointConnectionsUpdateOutput {
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
export const WebPubSubPrivateEndpointConnectionsUpdateOutput =
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
  }) as unknown as Schema.Codec<WebPubSubPrivateEndpointConnectionsUpdateOutput>;

// The operation
/**
 * Update the state of specified private endpoint connection
 *
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubPrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubPrivateEndpointConnectionsUpdateInput,
    outputSchema: WebPubSubPrivateEndpointConnectionsUpdateOutput,
  }));
// Input Schema
export interface WebPubSubPrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubPrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateLinkResources",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubPrivateLinkResourcesListInput>;

// Output Schema
export interface WebPubSubPrivateLinkResourcesListOutput {
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
export const WebPubSubPrivateLinkResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WebPubSubPrivateLinkResourcesListOutput>;

// The operation
/**
 * Get the private link resources that need to be created for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubPrivateLinkResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubPrivateLinkResourcesListInput,
    outputSchema: WebPubSubPrivateLinkResourcesListOutput,
  }));
// Input Schema
export interface WebPubSubRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  keyType?: "Primary" | "Secondary" | "Salt";
}
export const WebPubSubRegenerateKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.optional(Schema.Literals(["Primary", "Secondary", "Salt"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/regenerateKey",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubRegenerateKeyInput>;

// Output Schema
export interface WebPubSubRegenerateKeyOutput {
  primaryKey?: string;
  secondaryKey?: string;
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
}
export const WebPubSubRegenerateKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WebPubSubRegenerateKeyOutput>;

// The operation
/**
 * Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubRegenerateKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubRegenerateKeyInput,
  outputSchema: WebPubSubRegenerateKeyOutput,
}));
// Input Schema
export interface WebPubSubReplicasCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    regionEndpointEnabled?: string;
    resourceStopped?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const WebPubSubReplicasCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Failed",
            "Canceled",
            "Running",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
          ]),
        ),
        regionEndpointEnabled: Schema.optional(Schema.String),
        resourceStopped: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubReplicasCreateOrUpdateInput>;

// Output Schema
export interface WebPubSubReplicasCreateOrUpdateOutput {
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
export const WebPubSubReplicasCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WebPubSubReplicasCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a replica.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param replicaName - The name of the replica.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubReplicasCreateOrUpdateInput,
    outputSchema: WebPubSubReplicasCreateOrUpdateOutput,
  }));
// Input Schema
export interface WebPubSubReplicasDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
}
export const WebPubSubReplicasDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubReplicasDeleteInput>;

// Output Schema
export type WebPubSubReplicasDeleteOutput = void;
export const WebPubSubReplicasDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WebPubSubReplicasDeleteOutput>;

// The operation
/**
 * Operation to delete a replica.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param replicaName - The name of the replica.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubReplicasDeleteInput,
  outputSchema: WebPubSubReplicasDeleteOutput,
}));
// Input Schema
export interface WebPubSubReplicasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
}
export const WebPubSubReplicasGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubReplicasGetInput>;

// Output Schema
export interface WebPubSubReplicasGetOutput {
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
export const WebPubSubReplicasGetOutput =
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
  }) as unknown as Schema.Codec<WebPubSubReplicasGetOutput>;

// The operation
/**
 * Get the replica and its properties.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param replicaName - The name of the replica.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubReplicasGetInput,
  outputSchema: WebPubSubReplicasGetOutput,
}));
// Input Schema
export interface WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
  sharedPrivateLinkResourceName: string;
  properties?: {
    groupId: string;
    privateLinkResourceId: string;
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    requestMessage?: string;
    status?: "Pending" | "Approved" | "Rejected" | "Disconnected" | "Timeout";
  };
}
export const WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        groupId: Schema.String,
        privateLinkResourceId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Failed",
            "Canceled",
            "Running",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
          ]),
        ),
        requestMessage: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
            "Pending",
            "Approved",
            "Rejected",
            "Disconnected",
            "Timeout",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateInput>;

// Output Schema
export interface WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput {
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
export const WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a shared private link resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param replicaName - The name of the replica.
 * @param sharedPrivateLinkResourceName - The name of the shared private link resource.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateInput,
    outputSchema:
      WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput,
  }));
// Input Schema
export interface WebPubSubReplicaSharedPrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
  sharedPrivateLinkResourceName: string;
}
export const WebPubSubReplicaSharedPrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubReplicaSharedPrivateLinkResourcesGetInput>;

// Output Schema
export interface WebPubSubReplicaSharedPrivateLinkResourcesGetOutput {
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
export const WebPubSubReplicaSharedPrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<WebPubSubReplicaSharedPrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get the specified shared private link resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param replicaName - The name of the replica.
 * @param sharedPrivateLinkResourceName - The name of the shared private link resource.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicaSharedPrivateLinkResourcesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubReplicaSharedPrivateLinkResourcesGetInput,
    outputSchema: WebPubSubReplicaSharedPrivateLinkResourcesGetOutput,
  }));
// Input Schema
export interface WebPubSubReplicaSharedPrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
}
export const WebPubSubReplicaSharedPrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}/sharedPrivateLinkResources",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubReplicaSharedPrivateLinkResourcesListInput>;

// Output Schema
export interface WebPubSubReplicaSharedPrivateLinkResourcesListOutput {
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
export const WebPubSubReplicaSharedPrivateLinkResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WebPubSubReplicaSharedPrivateLinkResourcesListOutput>;

// The operation
/**
 * List shared private link resources
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param replicaName - The name of the replica.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicaSharedPrivateLinkResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubReplicaSharedPrivateLinkResourcesListInput,
    outputSchema: WebPubSubReplicaSharedPrivateLinkResourcesListOutput,
  }));
// Input Schema
export interface WebPubSubReplicasListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubReplicasListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubReplicasListInput>;

// Output Schema
export interface WebPubSubReplicasListOutput {
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
export const WebPubSubReplicasListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WebPubSubReplicasListOutput>;

// The operation
/**
 * List all replicas belong to this resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubReplicasListInput,
  outputSchema: WebPubSubReplicasListOutput,
}));
// Input Schema
export interface WebPubSubReplicasRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
}
export const WebPubSubReplicasRestartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}/restart",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubReplicasRestartInput>;

// Output Schema
export type WebPubSubReplicasRestartOutput = void;
export const WebPubSubReplicasRestartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WebPubSubReplicasRestartOutput>;

// The operation
/**
 * Operation to restart a replica.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param replicaName - The name of the replica.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasRestart = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubReplicasRestartInput,
  outputSchema: WebPubSubReplicasRestartOutput,
}));
// Input Schema
export interface WebPubSubReplicasUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    regionEndpointEnabled?: string;
    resourceStopped?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const WebPubSubReplicasUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Failed",
            "Canceled",
            "Running",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
          ]),
        ),
        regionEndpointEnabled: Schema.optional(Schema.String),
        resourceStopped: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubReplicasUpdateInput>;

// Output Schema
export interface WebPubSubReplicasUpdateOutput {
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
export const WebPubSubReplicasUpdateOutput =
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
  }) as unknown as Schema.Codec<WebPubSubReplicasUpdateOutput>;

// The operation
/**
 * Operation to update an exiting replica.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param replicaName - The name of the replica.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubReplicasUpdateInput,
  outputSchema: WebPubSubReplicasUpdateOutput,
}));
// Input Schema
export interface WebPubSubRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubRestartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/restart",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<WebPubSubRestartInput>;

// Output Schema
export type WebPubSubRestartOutput = void;
export const WebPubSubRestartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WebPubSubRestartOutput>;

// The operation
/**
 * Operation to restart a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubRestart = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubRestartInput,
  outputSchema: WebPubSubRestartOutput,
}));
// Input Schema
export interface WebPubSubSharedPrivateLinkResourcesCreateOrUpdateInput {
  sharedPrivateLinkResourceName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    groupId: string;
    privateLinkResourceId: string;
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    requestMessage?: string;
    status?: "Pending" | "Approved" | "Rejected" | "Disconnected" | "Timeout";
  };
}
export const WebPubSubSharedPrivateLinkResourcesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        groupId: Schema.String,
        privateLinkResourceId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Failed",
            "Canceled",
            "Running",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
          ]),
        ),
        requestMessage: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
            "Pending",
            "Approved",
            "Rejected",
            "Disconnected",
            "Timeout",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubSharedPrivateLinkResourcesCreateOrUpdateInput>;

// Output Schema
export interface WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOutput {
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
export const WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a shared private link resource
 *
 * @param sharedPrivateLinkResourceName - The name of the shared private link resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubSharedPrivateLinkResourcesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubSharedPrivateLinkResourcesCreateOrUpdateInput,
    outputSchema: WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOutput,
  }));
// Input Schema
export interface WebPubSubSharedPrivateLinkResourcesDeleteInput {
  sharedPrivateLinkResourceName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubSharedPrivateLinkResourcesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubSharedPrivateLinkResourcesDeleteInput>;

// Output Schema
export type WebPubSubSharedPrivateLinkResourcesDeleteOutput = void;
export const WebPubSubSharedPrivateLinkResourcesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WebPubSubSharedPrivateLinkResourcesDeleteOutput>;

// The operation
/**
 * Delete the specified shared private link resource
 *
 * @param sharedPrivateLinkResourceName - The name of the shared private link resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubSharedPrivateLinkResourcesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubSharedPrivateLinkResourcesDeleteInput,
    outputSchema: WebPubSubSharedPrivateLinkResourcesDeleteOutput,
  }));
// Input Schema
export interface WebPubSubSharedPrivateLinkResourcesGetInput {
  sharedPrivateLinkResourceName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubSharedPrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubSharedPrivateLinkResourcesGetInput>;

// Output Schema
export interface WebPubSubSharedPrivateLinkResourcesGetOutput {
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
export const WebPubSubSharedPrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<WebPubSubSharedPrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get the specified shared private link resource
 *
 * @param sharedPrivateLinkResourceName - The name of the shared private link resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubSharedPrivateLinkResourcesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubSharedPrivateLinkResourcesGetInput,
    outputSchema: WebPubSubSharedPrivateLinkResourcesGetOutput,
  }));
// Input Schema
export interface WebPubSubSharedPrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WebPubSubSharedPrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<WebPubSubSharedPrivateLinkResourcesListInput>;

// Output Schema
export interface WebPubSubSharedPrivateLinkResourcesListOutput {
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
export const WebPubSubSharedPrivateLinkResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WebPubSubSharedPrivateLinkResourcesListOutput>;

// The operation
/**
 * List shared private link resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubSharedPrivateLinkResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubSharedPrivateLinkResourcesListInput,
    outputSchema: WebPubSubSharedPrivateLinkResourcesListOutput,
  }));
// Input Schema
export interface WebPubSubUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    externalIP?: string;
    hostName?: string;
    publicPort?: number;
    serverPort?: number;
    version?: string;
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
    sharedPrivateLinkResources?: {
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
    tls?: { clientCertEnabled?: boolean };
    hostNamePrefix?: string;
    liveTraceConfiguration?: {
      enabled?: string;
      categories?: { name?: string; enabled?: string }[];
    };
    resourceLogConfiguration?: {
      categories?: { name?: string; enabled?: string }[];
    };
    networkACLs?: {
      defaultAction?: "Allow" | "Deny";
      publicNetwork?: {
        allow?: (
          | "ClientConnection"
          | "ServerConnection"
          | "RESTAPI"
          | "Trace"
        )[];
        deny?: (
          | "ClientConnection"
          | "ServerConnection"
          | "RESTAPI"
          | "Trace"
        )[];
      };
      privateEndpoints?: {
        allow?: (
          | "ClientConnection"
          | "ServerConnection"
          | "RESTAPI"
          | "Trace"
        )[];
        deny?: (
          | "ClientConnection"
          | "ServerConnection"
          | "RESTAPI"
          | "Trace"
        )[];
      }[];
      ipRules?: { value?: string; action?: "Allow" | "Deny" }[];
    };
    publicNetworkAccess?: string;
    disableLocalAuth?: boolean;
    disableAadAuth?: boolean;
    regionEndpointEnabled?: string;
    resourceStopped?: string;
    socketIO?: { serviceMode?: string };
  };
  kind?: "WebPubSub" | "SocketIO";
  identity?: {
    type?: "None" | "SystemAssigned" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
    principalId?: string;
    tenantId?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const WebPubSubUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(
        Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
      ),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Succeeded",
          "Failed",
          "Canceled",
          "Running",
          "Creating",
          "Updating",
          "Deleting",
          "Moving",
        ]),
      ),
      externalIP: Schema.optional(Schema.String),
      hostName: Schema.optional(Schema.String),
      publicPort: Schema.optional(Schema.Number),
      serverPort: Schema.optional(Schema.Number),
      version: Schema.optional(Schema.String),
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
      sharedPrivateLinkResources: Schema.optional(
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
      tls: Schema.optional(
        Schema.Struct({
          clientCertEnabled: Schema.optional(Schema.Boolean),
        }),
      ),
      hostNamePrefix: Schema.optional(Schema.String),
      liveTraceConfiguration: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.String),
          categories: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                enabled: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      resourceLogConfiguration: Schema.optional(
        Schema.Struct({
          categories: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                enabled: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      networkACLs: Schema.optional(
        Schema.Struct({
          defaultAction: Schema.optional(Schema.Literals(["Allow", "Deny"])),
          publicNetwork: Schema.optional(
            Schema.Struct({
              allow: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "ClientConnection",
                    "ServerConnection",
                    "RESTAPI",
                    "Trace",
                  ]),
                ),
              ),
              deny: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "ClientConnection",
                    "ServerConnection",
                    "RESTAPI",
                    "Trace",
                  ]),
                ),
              ),
            }),
          ),
          privateEndpoints: Schema.optional(
            Schema.Array(
              Schema.Struct({
                allow: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "ClientConnection",
                      "ServerConnection",
                      "RESTAPI",
                      "Trace",
                    ]),
                  ),
                ),
                deny: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "ClientConnection",
                      "ServerConnection",
                      "RESTAPI",
                      "Trace",
                    ]),
                  ),
                ),
              }),
            ),
          ),
          ipRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                value: Schema.optional(Schema.String),
                action: Schema.optional(Schema.Literals(["Allow", "Deny"])),
              }),
            ),
          ),
        }),
      ),
      publicNetworkAccess: Schema.optional(Schema.String),
      disableLocalAuth: Schema.optional(Schema.Boolean),
      disableAadAuth: Schema.optional(Schema.Boolean),
      regionEndpointEnabled: Schema.optional(Schema.String),
      resourceStopped: Schema.optional(Schema.String),
      socketIO: Schema.optional(
        Schema.Struct({
          serviceMode: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  kind: Schema.optional(Schema.Literals(["WebPubSub", "SocketIO"])),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<WebPubSubUpdateInput>;

// Output Schema
export interface WebPubSubUpdateOutput {
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
export const WebPubSubUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WebPubSubUpdateOutput>;

// The operation
/**
 * Operation to update an exiting resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const WebPubSubUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubUpdateInput,
  outputSchema: WebPubSubUpdateOutput,
}));
