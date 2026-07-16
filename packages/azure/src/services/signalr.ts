/**
 * Azure Signalr API
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
export interface SignalRCheckNameAvailabilityInput {
  location: string;
  subscriptionId: string;
  type: string;
  name: string;
}
export const SignalRCheckNameAvailabilityInput =
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
  ) as unknown as Schema.Codec<SignalRCheckNameAvailabilityInput>;

// Output Schema
export interface SignalRCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const SignalRCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SignalRCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the resource name is valid and is not already in use.
 *
 * @param location - the region
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SignalRCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRCheckNameAvailabilityInput,
    outputSchema: SignalRCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface SignalRCreateOrUpdateInput {
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
    features?: {
      flag:
        | "ServiceMode"
        | "EnableConnectivityLogs"
        | "EnableMessagingLogs"
        | "EnableLiveTrace";
      value: string;
      properties?: Record<string, string>;
    }[];
    liveTraceConfiguration?: {
      enabled?: string;
      categories?: { name?: string; enabled?: string }[];
    };
    resourceLogConfiguration?: {
      categories?: { name?: string; enabled?: string }[];
    };
    cors?: { allowedOrigins?: string[] };
    serverless?: { connectionTimeoutInSeconds?: number };
    upstream?: {
      templates?: {
        hubPattern?: string;
        eventPattern?: string;
        categoryPattern?: string;
        urlTemplate: string;
        auth?: {
          type?: "None" | "ManagedIdentity";
          managedIdentity?: { resource?: string };
        };
      }[];
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
  };
  kind?: "SignalR" | "RawWebSockets";
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
export const SignalRCreateOrUpdateInput =
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
        features: Schema.optional(
          Schema.Array(
            Schema.Struct({
              flag: Schema.Literals([
                "ServiceMode",
                "EnableConnectivityLogs",
                "EnableMessagingLogs",
                "EnableLiveTrace",
              ]),
              value: Schema.String,
              properties: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
        ),
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
        cors: Schema.optional(
          Schema.Struct({
            allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        serverless: Schema.optional(
          Schema.Struct({
            connectionTimeoutInSeconds: Schema.optional(Schema.Number),
          }),
        ),
        upstream: Schema.optional(
          Schema.Struct({
            templates: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  hubPattern: Schema.optional(Schema.String),
                  eventPattern: Schema.optional(Schema.String),
                  categoryPattern: Schema.optional(Schema.String),
                  urlTemplate: Schema.String,
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
      }),
    ),
    kind: Schema.optional(Schema.Literals(["SignalR", "RawWebSockets"])),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRCreateOrUpdateInput>;

// Output Schema
export interface SignalRCreateOrUpdateOutput {
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
export const SignalRCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SignalRCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRCreateOrUpdateInput,
  outputSchema: SignalRCreateOrUpdateOutput,
}));
// Input Schema
export interface SignalRCustomCertificatesCreateOrUpdateInput {
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
export const SignalRCustomCertificatesCreateOrUpdateInput =
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/customCertificates/{certificateName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRCustomCertificatesCreateOrUpdateInput>;

// Output Schema
export interface SignalRCustomCertificatesCreateOrUpdateOutput {
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
export const SignalRCustomCertificatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SignalRCustomCertificatesCreateOrUpdateOutput>;

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
export const SignalRCustomCertificatesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRCustomCertificatesCreateOrUpdateInput,
    outputSchema: SignalRCustomCertificatesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SignalRCustomCertificatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  certificateName: string;
}
export const SignalRCustomCertificatesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/customCertificates/{certificateName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRCustomCertificatesDeleteInput>;

// Output Schema
export type SignalRCustomCertificatesDeleteOutput = void;
export const SignalRCustomCertificatesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SignalRCustomCertificatesDeleteOutput>;

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
export const SignalRCustomCertificatesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRCustomCertificatesDeleteInput,
    outputSchema: SignalRCustomCertificatesDeleteOutput,
  }));
// Input Schema
export interface SignalRCustomCertificatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  certificateName: string;
}
export const SignalRCustomCertificatesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/customCertificates/{certificateName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRCustomCertificatesGetInput>;

// Output Schema
export interface SignalRCustomCertificatesGetOutput {
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
export const SignalRCustomCertificatesGetOutput =
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
  }) as unknown as Schema.Codec<SignalRCustomCertificatesGetOutput>;

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
export const SignalRCustomCertificatesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRCustomCertificatesGetInput,
    outputSchema: SignalRCustomCertificatesGetOutput,
  }));
// Input Schema
export interface SignalRCustomCertificatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRCustomCertificatesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/customCertificates",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRCustomCertificatesListInput>;

// Output Schema
export interface SignalRCustomCertificatesListOutput {
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
export const SignalRCustomCertificatesListOutput =
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
  }) as unknown as Schema.Codec<SignalRCustomCertificatesListOutput>;

// The operation
/**
 * List all custom certificates.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param api-version - The API version to use for this operation.
 */
export const SignalRCustomCertificatesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRCustomCertificatesListInput,
    outputSchema: SignalRCustomCertificatesListOutput,
  }));
// Input Schema
export interface SignalRCustomDomainsCreateOrUpdateInput {
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
export const SignalRCustomDomainsCreateOrUpdateInput =
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/customDomains/{name}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRCustomDomainsCreateOrUpdateInput>;

// Output Schema
export interface SignalRCustomDomainsCreateOrUpdateOutput {
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
export const SignalRCustomDomainsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SignalRCustomDomainsCreateOrUpdateOutput>;

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
export const SignalRCustomDomainsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRCustomDomainsCreateOrUpdateInput,
    outputSchema: SignalRCustomDomainsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SignalRCustomDomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  name: string;
}
export const SignalRCustomDomainsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/customDomains/{name}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRCustomDomainsDeleteInput>;

// Output Schema
export type SignalRCustomDomainsDeleteOutput = void;
export const SignalRCustomDomainsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SignalRCustomDomainsDeleteOutput>;

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
export const SignalRCustomDomainsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRCustomDomainsDeleteInput,
  outputSchema: SignalRCustomDomainsDeleteOutput,
}));
// Input Schema
export interface SignalRCustomDomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  name: string;
}
export const SignalRCustomDomainsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/customDomains/{name}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRCustomDomainsGetInput>;

// Output Schema
export interface SignalRCustomDomainsGetOutput {
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
export const SignalRCustomDomainsGetOutput =
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
  }) as unknown as Schema.Codec<SignalRCustomDomainsGetOutput>;

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
export const SignalRCustomDomainsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRCustomDomainsGetInput,
  outputSchema: SignalRCustomDomainsGetOutput,
}));
// Input Schema
export interface SignalRCustomDomainsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRCustomDomainsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/customDomains",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRCustomDomainsListInput>;

// Output Schema
export interface SignalRCustomDomainsListOutput {
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
export const SignalRCustomDomainsListOutput =
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
  }) as unknown as Schema.Codec<SignalRCustomDomainsListOutput>;

// The operation
/**
 * List all custom domains.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param api-version - The API version to use for this operation.
 */
export const SignalRCustomDomainsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRCustomDomainsListInput,
  outputSchema: SignalRCustomDomainsListOutput,
}));
// Input Schema
export interface SignalRDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<SignalRDeleteInput>;

// Output Schema
export type SignalRDeleteOutput = void;
export const SignalRDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SignalRDeleteOutput>;

// The operation
/**
 * Operation to delete a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRDeleteInput,
  outputSchema: SignalRDeleteOutput,
}));
// Input Schema
export interface SignalRGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<SignalRGetInput>;

// Output Schema
export interface SignalRGetOutput {
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
export const SignalRGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SignalRGetOutput>;

// The operation
/**
 * Get the resource and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRGetInput,
  outputSchema: SignalRGetOutput,
}));
// Input Schema
export interface SignalRListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SignalRListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRListByResourceGroupInput>;

// Output Schema
export interface SignalRListByResourceGroupOutput {
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
export const SignalRListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SignalRListByResourceGroupOutput>;

// The operation
/**
 * Handles requests to list all resources in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SignalRListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRListByResourceGroupInput,
  outputSchema: SignalRListByResourceGroupOutput,
}));
// Input Schema
export interface SignalRListBySubscriptionInput {
  subscriptionId: string;
}
export const SignalRListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/signalR",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRListBySubscriptionInput>;

// Output Schema
export interface SignalRListBySubscriptionOutput {
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
export const SignalRListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<SignalRListBySubscriptionOutput>;

// The operation
/**
 * Handles requests to list all resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SignalRListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRListBySubscriptionInput,
  outputSchema: SignalRListBySubscriptionOutput,
}));
// Input Schema
export interface SignalRListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRListKeysInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/listKeys",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<SignalRListKeysInput>;

// Output Schema
export interface SignalRListKeysOutput {
  primaryKey?: string;
  secondaryKey?: string;
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
}
export const SignalRListKeysOutput = /*@__PURE__*/ Schema.Struct({
  primaryKey: Schema.optional(Schema.String),
  secondaryKey: Schema.optional(Schema.String),
  primaryConnectionString: Schema.optional(Schema.String),
  secondaryConnectionString: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SignalRListKeysOutput>;

// The operation
/**
 * Get the access keys of the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRListKeysInput,
  outputSchema: SignalRListKeysOutput,
}));
// Input Schema
export interface SignalRListReplicaSkusInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
}
export const SignalRListReplicaSkusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}/skus",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRListReplicaSkusInput>;

// Output Schema
export interface SignalRListReplicaSkusOutput {
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
export const SignalRListReplicaSkusOutput =
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
  }) as unknown as Schema.Codec<SignalRListReplicaSkusOutput>;

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
export const SignalRListReplicaSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRListReplicaSkusInput,
  outputSchema: SignalRListReplicaSkusOutput,
}));
// Input Schema
export interface SignalRListSkusInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRListSkusInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/skus",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<SignalRListSkusInput>;

// Output Schema
export interface SignalRListSkusOutput {
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
export const SignalRListSkusOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SignalRListSkusOutput>;

// The operation
/**
 * List all available skus of the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRListSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRListSkusInput,
  outputSchema: SignalRListSkusOutput,
}));
// Input Schema
export interface SignalRPrivateEndpointConnectionsDeleteInput {
  privateEndpointConnectionName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRPrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRPrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type SignalRPrivateEndpointConnectionsDeleteOutput = void;
export const SignalRPrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SignalRPrivateEndpointConnectionsDeleteOutput>;

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
export const SignalRPrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRPrivateEndpointConnectionsDeleteInput,
    outputSchema: SignalRPrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface SignalRPrivateEndpointConnectionsGetInput {
  privateEndpointConnectionName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRPrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRPrivateEndpointConnectionsGetInput>;

// Output Schema
export interface SignalRPrivateEndpointConnectionsGetOutput {
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
export const SignalRPrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<SignalRPrivateEndpointConnectionsGetOutput>;

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
export const SignalRPrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRPrivateEndpointConnectionsGetInput,
    outputSchema: SignalRPrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface SignalRPrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRPrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/privateEndpointConnections",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRPrivateEndpointConnectionsListInput>;

// Output Schema
export interface SignalRPrivateEndpointConnectionsListOutput {
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
export const SignalRPrivateEndpointConnectionsListOutput =
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
  }) as unknown as Schema.Codec<SignalRPrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List private endpoint connections
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRPrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRPrivateEndpointConnectionsListInput,
    outputSchema: SignalRPrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface SignalRPrivateEndpointConnectionsUpdateInput {
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
export const SignalRPrivateEndpointConnectionsUpdateInput =
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRPrivateEndpointConnectionsUpdateInput>;

// Output Schema
export interface SignalRPrivateEndpointConnectionsUpdateOutput {
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
export const SignalRPrivateEndpointConnectionsUpdateOutput =
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
  }) as unknown as Schema.Codec<SignalRPrivateEndpointConnectionsUpdateOutput>;

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
export const SignalRPrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRPrivateEndpointConnectionsUpdateInput,
    outputSchema: SignalRPrivateEndpointConnectionsUpdateOutput,
  }));
// Input Schema
export interface SignalRPrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRPrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/privateLinkResources",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRPrivateLinkResourcesListInput>;

// Output Schema
export interface SignalRPrivateLinkResourcesListOutput {
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
export const SignalRPrivateLinkResourcesListOutput =
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
  }) as unknown as Schema.Codec<SignalRPrivateLinkResourcesListOutput>;

// The operation
/**
 * Get the private link resources that need to be created for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRPrivateLinkResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRPrivateLinkResourcesListInput,
    outputSchema: SignalRPrivateLinkResourcesListOutput,
  }));
// Input Schema
export interface SignalRRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  keyType?: "Primary" | "Secondary" | "Salt";
}
export const SignalRRegenerateKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.optional(Schema.Literals(["Primary", "Secondary", "Salt"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/regenerateKey",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRRegenerateKeyInput>;

// Output Schema
export interface SignalRRegenerateKeyOutput {
  primaryKey?: string;
  secondaryKey?: string;
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
}
export const SignalRRegenerateKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SignalRRegenerateKeyOutput>;

// The operation
/**
 * Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRRegenerateKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRRegenerateKeyInput,
  outputSchema: SignalRRegenerateKeyOutput,
}));
// Input Schema
export interface SignalRReplicasCreateOrUpdateInput {
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
export const SignalRReplicasCreateOrUpdateInput =
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRReplicasCreateOrUpdateInput>;

// Output Schema
export interface SignalRReplicasCreateOrUpdateOutput {
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
export const SignalRReplicasCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SignalRReplicasCreateOrUpdateOutput>;

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
export const SignalRReplicasCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRReplicasCreateOrUpdateInput,
    outputSchema: SignalRReplicasCreateOrUpdateOutput,
  }));
// Input Schema
export interface SignalRReplicasDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
}
export const SignalRReplicasDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRReplicasDeleteInput>;

// Output Schema
export type SignalRReplicasDeleteOutput = void;
export const SignalRReplicasDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SignalRReplicasDeleteOutput>;

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
export const SignalRReplicasDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRReplicasDeleteInput,
  outputSchema: SignalRReplicasDeleteOutput,
}));
// Input Schema
export interface SignalRReplicasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
}
export const SignalRReplicasGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRReplicasGetInput>;

// Output Schema
export interface SignalRReplicasGetOutput {
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
export const SignalRReplicasGetOutput =
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
  }) as unknown as Schema.Codec<SignalRReplicasGetOutput>;

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
export const SignalRReplicasGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRReplicasGetInput,
  outputSchema: SignalRReplicasGetOutput,
}));
// Input Schema
export interface SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdateInput {
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
export const SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdateInput =
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdateInput>;

// Output Schema
export interface SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput {
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
export const SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput>;

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
export const SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdateInput,
    outputSchema: SignalRReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SignalRReplicaSharedPrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
  sharedPrivateLinkResourceName: string;
}
export const SignalRReplicaSharedPrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRReplicaSharedPrivateLinkResourcesGetInput>;

// Output Schema
export interface SignalRReplicaSharedPrivateLinkResourcesGetOutput {
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
export const SignalRReplicaSharedPrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<SignalRReplicaSharedPrivateLinkResourcesGetOutput>;

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
export const SignalRReplicaSharedPrivateLinkResourcesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRReplicaSharedPrivateLinkResourcesGetInput,
    outputSchema: SignalRReplicaSharedPrivateLinkResourcesGetOutput,
  }));
// Input Schema
export interface SignalRReplicaSharedPrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
}
export const SignalRReplicaSharedPrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}/sharedPrivateLinkResources",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRReplicaSharedPrivateLinkResourcesListInput>;

// Output Schema
export interface SignalRReplicaSharedPrivateLinkResourcesListOutput {
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
export const SignalRReplicaSharedPrivateLinkResourcesListOutput =
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
  }) as unknown as Schema.Codec<SignalRReplicaSharedPrivateLinkResourcesListOutput>;

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
export const SignalRReplicaSharedPrivateLinkResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRReplicaSharedPrivateLinkResourcesListInput,
    outputSchema: SignalRReplicaSharedPrivateLinkResourcesListOutput,
  }));
// Input Schema
export interface SignalRReplicasListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRReplicasListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRReplicasListInput>;

// Output Schema
export interface SignalRReplicasListOutput {
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
export const SignalRReplicasListOutput =
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
  }) as unknown as Schema.Codec<SignalRReplicasListOutput>;

// The operation
/**
 * List all replicas belong to this resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 * @param api-version - The API version to use for this operation.
 */
export const SignalRReplicasList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRReplicasListInput,
  outputSchema: SignalRReplicasListOutput,
}));
// Input Schema
export interface SignalRReplicasRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  replicaName: string;
}
export const SignalRReplicasRestartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    replicaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}/restart",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRReplicasRestartInput>;

// Output Schema
export type SignalRReplicasRestartOutput = void;
export const SignalRReplicasRestartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SignalRReplicasRestartOutput>;

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
export const SignalRReplicasRestart = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRReplicasRestartInput,
  outputSchema: SignalRReplicasRestartOutput,
}));
// Input Schema
export interface SignalRReplicasUpdateInput {
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
export const SignalRReplicasUpdateInput =
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRReplicasUpdateInput>;

// Output Schema
export interface SignalRReplicasUpdateOutput {
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
export const SignalRReplicasUpdateOutput =
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
  }) as unknown as Schema.Codec<SignalRReplicasUpdateOutput>;

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
export const SignalRReplicasUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRReplicasUpdateInput,
  outputSchema: SignalRReplicasUpdateOutput,
}));
// Input Schema
export interface SignalRRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRRestartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/restart",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<SignalRRestartInput>;

// Output Schema
export type SignalRRestartOutput = void;
export const SignalRRestartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SignalRRestartOutput>;

// The operation
/**
 * Operation to restart a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRRestart = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRRestartInput,
  outputSchema: SignalRRestartOutput,
}));
// Input Schema
export interface SignalRSharedPrivateLinkResourcesCreateOrUpdateInput {
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
export const SignalRSharedPrivateLinkResourcesCreateOrUpdateInput =
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRSharedPrivateLinkResourcesCreateOrUpdateInput>;

// Output Schema
export interface SignalRSharedPrivateLinkResourcesCreateOrUpdateOutput {
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
export const SignalRSharedPrivateLinkResourcesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SignalRSharedPrivateLinkResourcesCreateOrUpdateOutput>;

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
export const SignalRSharedPrivateLinkResourcesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRSharedPrivateLinkResourcesCreateOrUpdateInput,
    outputSchema: SignalRSharedPrivateLinkResourcesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SignalRSharedPrivateLinkResourcesDeleteInput {
  sharedPrivateLinkResourceName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRSharedPrivateLinkResourcesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRSharedPrivateLinkResourcesDeleteInput>;

// Output Schema
export type SignalRSharedPrivateLinkResourcesDeleteOutput = void;
export const SignalRSharedPrivateLinkResourcesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SignalRSharedPrivateLinkResourcesDeleteOutput>;

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
export const SignalRSharedPrivateLinkResourcesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRSharedPrivateLinkResourcesDeleteInput,
    outputSchema: SignalRSharedPrivateLinkResourcesDeleteOutput,
  }));
// Input Schema
export interface SignalRSharedPrivateLinkResourcesGetInput {
  sharedPrivateLinkResourceName: string;
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRSharedPrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    sharedPrivateLinkResourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRSharedPrivateLinkResourcesGetInput>;

// Output Schema
export interface SignalRSharedPrivateLinkResourcesGetOutput {
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
export const SignalRSharedPrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<SignalRSharedPrivateLinkResourcesGetOutput>;

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
export const SignalRSharedPrivateLinkResourcesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRSharedPrivateLinkResourcesGetInput,
    outputSchema: SignalRSharedPrivateLinkResourcesGetOutput,
  }));
// Input Schema
export interface SignalRSharedPrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const SignalRSharedPrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/sharedPrivateLinkResources",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<SignalRSharedPrivateLinkResourcesListInput>;

// Output Schema
export interface SignalRSharedPrivateLinkResourcesListOutput {
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
export const SignalRSharedPrivateLinkResourcesListOutput =
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
  }) as unknown as Schema.Codec<SignalRSharedPrivateLinkResourcesListOutput>;

// The operation
/**
 * List shared private link resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRSharedPrivateLinkResourcesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalRSharedPrivateLinkResourcesListInput,
    outputSchema: SignalRSharedPrivateLinkResourcesListOutput,
  }));
// Input Schema
export interface SignalRUpdateInput {
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
    features?: {
      flag:
        | "ServiceMode"
        | "EnableConnectivityLogs"
        | "EnableMessagingLogs"
        | "EnableLiveTrace";
      value: string;
      properties?: Record<string, string>;
    }[];
    liveTraceConfiguration?: {
      enabled?: string;
      categories?: { name?: string; enabled?: string }[];
    };
    resourceLogConfiguration?: {
      categories?: { name?: string; enabled?: string }[];
    };
    cors?: { allowedOrigins?: string[] };
    serverless?: { connectionTimeoutInSeconds?: number };
    upstream?: {
      templates?: {
        hubPattern?: string;
        eventPattern?: string;
        categoryPattern?: string;
        urlTemplate: string;
        auth?: {
          type?: "None" | "ManagedIdentity";
          managedIdentity?: { resource?: string };
        };
      }[];
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
  };
  kind?: "SignalR" | "RawWebSockets";
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
export const SignalRUpdateInput = /*@__PURE__*/ Schema.Struct({
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
      features: Schema.optional(
        Schema.Array(
          Schema.Struct({
            flag: Schema.Literals([
              "ServiceMode",
              "EnableConnectivityLogs",
              "EnableMessagingLogs",
              "EnableLiveTrace",
            ]),
            value: Schema.String,
            properties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
      ),
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
      cors: Schema.optional(
        Schema.Struct({
          allowedOrigins: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      serverless: Schema.optional(
        Schema.Struct({
          connectionTimeoutInSeconds: Schema.optional(Schema.Number),
        }),
      ),
      upstream: Schema.optional(
        Schema.Struct({
          templates: Schema.optional(
            Schema.Array(
              Schema.Struct({
                hubPattern: Schema.optional(Schema.String),
                eventPattern: Schema.optional(Schema.String),
                categoryPattern: Schema.optional(Schema.String),
                urlTemplate: Schema.String,
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
    }),
  ),
  kind: Schema.optional(Schema.Literals(["SignalR", "RawWebSockets"])),
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<SignalRUpdateInput>;

// Output Schema
export interface SignalRUpdateOutput {
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
export const SignalRUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SignalRUpdateOutput>;

// The operation
/**
 * Operation to update an exiting resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the resource.
 */
export const SignalRUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalRUpdateInput,
  outputSchema: SignalRUpdateOutput,
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
