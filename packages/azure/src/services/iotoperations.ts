/**
 * Azure Iotoperations API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AkriConnectorCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  akriConnectorTemplateName: string;
  connectorName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    allocatedDevices?: {
      deviceInboundEndpointName: string;
      deviceName: string;
    }[];
    status?: {
      healthState?: {
        status?: "Available" | "Degraded" | "Unavailable" | "Unknown";
        lastTransitionTime?: string;
        lastUpdateTime?: string;
        message?: string;
        reasonCode?: string;
      };
    };
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const AkriConnectorCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        allocatedDevices: Schema.optional(
          Schema.Array(
            Schema.Struct({
              deviceInboundEndpointName: Schema.String,
              deviceName: Schema.String,
            }),
          ),
        ),
        status: Schema.optional(
          Schema.Struct({
            healthState: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "Available",
                    "Degraded",
                    "Unavailable",
                    "Unknown",
                  ]),
                ),
                lastTransitionTime: Schema.optional(Schema.String),
                lastUpdateTime: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                reasonCode: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/connectors/{connectorName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AkriConnectorCreateOrUpdateInput>;

// Output Schema
export interface AkriConnectorCreateOrUpdateOutput {
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
export const AkriConnectorCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AkriConnectorCreateOrUpdateOutput>;

// The operation
/**
 * Create a AkriConnectorResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param akriConnectorTemplateName - Name of AkriConnectorTemplate resource.
 * @param connectorName - Name of AkriConnector resource.
 */
export const AkriConnectorCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AkriConnectorCreateOrUpdateInput,
  outputSchema: AkriConnectorCreateOrUpdateOutput,
}));
// Input Schema
export interface AkriConnectorDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  akriConnectorTemplateName: string;
  connectorName: string;
}
export const AkriConnectorDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/connectors/{connectorName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AkriConnectorDeleteInput>;

// Output Schema
export type AkriConnectorDeleteOutput = void;
export const AkriConnectorDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AkriConnectorDeleteOutput>;

// The operation
/**
 * Delete a AkriConnectorResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param akriConnectorTemplateName - Name of AkriConnectorTemplate resource.
 * @param connectorName - Name of AkriConnector resource.
 */
export const AkriConnectorDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AkriConnectorDeleteInput,
  outputSchema: AkriConnectorDeleteOutput,
}));
// Input Schema
export interface AkriConnectorGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  akriConnectorTemplateName: string;
  connectorName: string;
}
export const AkriConnectorGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/connectors/{connectorName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<AkriConnectorGetInput>;

// Output Schema
export interface AkriConnectorGetOutput {
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
export const AkriConnectorGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AkriConnectorGetOutput>;

// The operation
/**
 * Get a AkriConnectorResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param akriConnectorTemplateName - Name of AkriConnectorTemplate resource.
 * @param connectorName - Name of AkriConnector resource.
 */
export const AkriConnectorGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AkriConnectorGetInput,
  outputSchema: AkriConnectorGetOutput,
}));
// Input Schema
export interface AkriConnectorListByTemplateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  akriConnectorTemplateName: string;
}
export const AkriConnectorListByTemplateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/connectors",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AkriConnectorListByTemplateInput>;

// Output Schema
export interface AkriConnectorListByTemplateOutput {
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
export const AkriConnectorListByTemplateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AkriConnectorListByTemplateOutput>;

// The operation
/**
 * List AkriConnectorResource resources by AkriConnectorTemplateResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param akriConnectorTemplateName - Name of AkriConnectorTemplate resource.
 */
export const AkriConnectorListByTemplate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AkriConnectorListByTemplateInput,
  outputSchema: AkriConnectorListByTemplateOutput,
}));
// Input Schema
export interface AkriConnectorTemplateCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  akriConnectorTemplateName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    aioMetadata?: { aioMinVersion?: string; aioMaxVersion?: string };
    runtimeConfiguration: { runtimeConfigurationType: "ManagedConfiguration" };
    diagnostics?: { logs: { level?: string } };
    deviceInboundEndpointTypes: {
      displayName?: string;
      endpointType: string;
      version?: string;
    }[];
    mqttConnectionConfiguration?: {
      authentication?: { method: "ServiceAccountToken" };
      host?: string;
      protocol?: "Mqtt";
      keepAliveSeconds?: number;
      maxInflightMessages?: number;
      sessionExpirySeconds?: number;
      tls?: {
        mode?: "Enabled" | "Disabled";
        trustedCaCertificateConfigMapRef?: string;
      };
    };
    connectorMetadataRef?: string;
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const AkriConnectorTemplateCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        aioMetadata: Schema.optional(
          Schema.Struct({
            aioMinVersion: Schema.optional(Schema.String),
            aioMaxVersion: Schema.optional(Schema.String),
          }),
        ),
        runtimeConfiguration: Schema.Struct({
          runtimeConfigurationType: Schema.Literals(["ManagedConfiguration"]),
        }),
        diagnostics: Schema.optional(
          Schema.Struct({
            logs: Schema.Struct({
              level: Schema.optional(Schema.String),
            }),
          }),
        ),
        deviceInboundEndpointTypes: Schema.Array(
          Schema.Struct({
            displayName: Schema.optional(Schema.String),
            endpointType: Schema.String,
            version: Schema.optional(Schema.String),
          }),
        ),
        mqttConnectionConfiguration: Schema.optional(
          Schema.Struct({
            authentication: Schema.optional(
              Schema.Struct({
                method: Schema.Literals(["ServiceAccountToken"]),
              }),
            ),
            host: Schema.optional(Schema.String),
            protocol: Schema.optional(Schema.Literals(["Mqtt"])),
            keepAliveSeconds: Schema.optional(Schema.Number),
            maxInflightMessages: Schema.optional(Schema.Number),
            sessionExpirySeconds: Schema.optional(Schema.Number),
            tls: Schema.optional(
              Schema.Struct({
                mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
                trustedCaCertificateConfigMapRef: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
          }),
        ),
        connectorMetadataRef: Schema.optional(Schema.String),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AkriConnectorTemplateCreateOrUpdateInput>;

// Output Schema
export interface AkriConnectorTemplateCreateOrUpdateOutput {
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
export const AkriConnectorTemplateCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AkriConnectorTemplateCreateOrUpdateOutput>;

// The operation
/**
 * Create a AkriConnectorTemplateResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param akriConnectorTemplateName - Name of AkriConnectorTemplate resource.
 */
export const AkriConnectorTemplateCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AkriConnectorTemplateCreateOrUpdateInput,
    outputSchema: AkriConnectorTemplateCreateOrUpdateOutput,
  }));
// Input Schema
export interface AkriConnectorTemplateDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  akriConnectorTemplateName: string;
}
export const AkriConnectorTemplateDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AkriConnectorTemplateDeleteInput>;

// Output Schema
export type AkriConnectorTemplateDeleteOutput = void;
export const AkriConnectorTemplateDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AkriConnectorTemplateDeleteOutput>;

// The operation
/**
 * Delete a AkriConnectorTemplateResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param akriConnectorTemplateName - Name of AkriConnectorTemplate resource.
 */
export const AkriConnectorTemplateDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AkriConnectorTemplateDeleteInput,
  outputSchema: AkriConnectorTemplateDeleteOutput,
}));
// Input Schema
export interface AkriConnectorTemplateGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  akriConnectorTemplateName: string;
}
export const AkriConnectorTemplateGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AkriConnectorTemplateGetInput>;

// Output Schema
export interface AkriConnectorTemplateGetOutput {
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
export const AkriConnectorTemplateGetOutput =
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
  }) as unknown as Schema.Codec<AkriConnectorTemplateGetOutput>;

// The operation
/**
 * Get a AkriConnectorTemplateResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param akriConnectorTemplateName - Name of AkriConnectorTemplate resource.
 */
export const AkriConnectorTemplateGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AkriConnectorTemplateGetInput,
  outputSchema: AkriConnectorTemplateGetOutput,
}));
// Input Schema
export interface AkriConnectorTemplateListByInstanceResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
}
export const AkriConnectorTemplateListByInstanceResourceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AkriConnectorTemplateListByInstanceResourceInput>;

// Output Schema
export interface AkriConnectorTemplateListByInstanceResourceOutput {
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
export const AkriConnectorTemplateListByInstanceResourceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AkriConnectorTemplateListByInstanceResourceOutput>;

// The operation
/**
 * List AkriConnectorTemplateResource resources by InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const AkriConnectorTemplateListByInstanceResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AkriConnectorTemplateListByInstanceResourceInput,
    outputSchema: AkriConnectorTemplateListByInstanceResourceOutput,
  }));
// Input Schema
export interface AkriServiceCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  akriServiceName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    status?: {
      healthState?: {
        status?: "Available" | "Degraded" | "Unavailable" | "Unknown";
        lastTransitionTime?: string;
        lastUpdateTime?: string;
        message?: string;
        reasonCode?: string;
      };
    };
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const AkriServiceCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            healthState: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "Available",
                    "Degraded",
                    "Unavailable",
                    "Unknown",
                  ]),
                ),
                lastTransitionTime: Schema.optional(Schema.String),
                lastUpdateTime: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                reasonCode: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriServices/{akriServiceName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AkriServiceCreateOrUpdateInput>;

// Output Schema
export interface AkriServiceCreateOrUpdateOutput {
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
export const AkriServiceCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AkriServiceCreateOrUpdateOutput>;

// The operation
/**
 * Create a AkriServiceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param akriServiceName - Name of AkriService resource.
 */
export const AkriServiceCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AkriServiceCreateOrUpdateInput,
  outputSchema: AkriServiceCreateOrUpdateOutput,
}));
// Input Schema
export interface AkriServiceDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  akriServiceName: string;
}
export const AkriServiceDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  akriServiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriServices/{akriServiceName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<AkriServiceDeleteInput>;

// Output Schema
export type AkriServiceDeleteOutput = void;
export const AkriServiceDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AkriServiceDeleteOutput>;

// The operation
/**
 * Delete a AkriServiceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param akriServiceName - Name of AkriService resource.
 */
export const AkriServiceDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AkriServiceDeleteInput,
  outputSchema: AkriServiceDeleteOutput,
}));
// Input Schema
export interface AkriServiceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  akriServiceName: string;
}
export const AkriServiceGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  akriServiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriServices/{akriServiceName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<AkriServiceGetInput>;

// Output Schema
export interface AkriServiceGetOutput {
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
export const AkriServiceGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AkriServiceGetOutput>;

// The operation
/**
 * Get a AkriServiceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param akriServiceName - Name of AkriService resource.
 */
export const AkriServiceGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AkriServiceGetInput,
  outputSchema: AkriServiceGetOutput,
}));
// Input Schema
export interface AkriServiceListByInstanceResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
}
export const AkriServiceListByInstanceResourceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriServices",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<AkriServiceListByInstanceResourceInput>;

// Output Schema
export interface AkriServiceListByInstanceResourceOutput {
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
export const AkriServiceListByInstanceResourceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AkriServiceListByInstanceResourceOutput>;

// The operation
/**
 * List AkriServiceResource resources by InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const AkriServiceListByInstanceResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AkriServiceListByInstanceResourceInput,
    outputSchema: AkriServiceListByInstanceResourceOutput,
  }));
// Input Schema
export interface BrokerAuthenticationCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
  authenticationName: string;
  properties?: {
    authenticationMethods: {
      method: "Custom" | "ServiceAccountToken" | "X509";
      customSettings?: {
        auth?: { x509: { secretRef: string } };
        caCertConfigMap?: string;
        endpoint: string;
        headers?: Record<string, string>;
      };
      serviceAccountTokenSettings?: { audiences: string[] };
      x509Settings?: {
        authorizationAttributes?: Record<
          string,
          { attributes: Record<string, string>; subject: string }
        >;
        trustedClientCaCert?: string;
        additionalValidation?: "None" | "AzureDeviceRegistry";
      };
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const BrokerAuthenticationCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    authenticationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        authenticationMethods: Schema.Array(
          Schema.Struct({
            method: Schema.Literals(["Custom", "ServiceAccountToken", "X509"]),
            customSettings: Schema.optional(
              Schema.Struct({
                auth: Schema.optional(
                  Schema.Struct({
                    x509: Schema.Struct({
                      secretRef: Schema.String,
                    }),
                  }),
                ),
                caCertConfigMap: Schema.optional(Schema.String),
                endpoint: Schema.String,
                headers: Schema.optional(
                  Schema.Record(Schema.String, Schema.String),
                ),
              }),
            ),
            serviceAccountTokenSettings: Schema.optional(
              Schema.Struct({
                audiences: Schema.Array(Schema.String),
              }),
            ),
            x509Settings: Schema.optional(
              Schema.Struct({
                authorizationAttributes: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      attributes: Schema.Record(Schema.String, Schema.String),
                      subject: Schema.String,
                    }),
                  ),
                ),
                trustedClientCaCert: Schema.optional(Schema.String),
                additionalValidation: Schema.optional(
                  Schema.Literals(["None", "AzureDeviceRegistry"]),
                ),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerAuthenticationCreateOrUpdateInput>;

// Output Schema
export interface BrokerAuthenticationCreateOrUpdateOutput {
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
export const BrokerAuthenticationCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BrokerAuthenticationCreateOrUpdateOutput>;

// The operation
/**
 * Create a BrokerAuthenticationResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 * @param authenticationName - Name of Instance broker authentication resource
 */
export const BrokerAuthenticationCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BrokerAuthenticationCreateOrUpdateInput,
    outputSchema: BrokerAuthenticationCreateOrUpdateOutput,
  }));
// Input Schema
export interface BrokerAuthenticationDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
  authenticationName: string;
}
export const BrokerAuthenticationDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    authenticationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerAuthenticationDeleteInput>;

// Output Schema
export type BrokerAuthenticationDeleteOutput = void;
export const BrokerAuthenticationDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BrokerAuthenticationDeleteOutput>;

// The operation
/**
 * Delete a BrokerAuthenticationResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 * @param authenticationName - Name of Instance broker authentication resource
 */
export const BrokerAuthenticationDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BrokerAuthenticationDeleteInput,
  outputSchema: BrokerAuthenticationDeleteOutput,
}));
// Input Schema
export interface BrokerAuthenticationGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
  authenticationName: string;
}
export const BrokerAuthenticationGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    authenticationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerAuthenticationGetInput>;

// Output Schema
export interface BrokerAuthenticationGetOutput {
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
export const BrokerAuthenticationGetOutput =
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
  }) as unknown as Schema.Codec<BrokerAuthenticationGetOutput>;

// The operation
/**
 * Get a BrokerAuthenticationResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 * @param authenticationName - Name of Instance broker authentication resource
 */
export const BrokerAuthenticationGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BrokerAuthenticationGetInput,
  outputSchema: BrokerAuthenticationGetOutput,
}));
// Input Schema
export interface BrokerAuthenticationListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
}
export const BrokerAuthenticationListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerAuthenticationListByResourceGroupInput>;

// Output Schema
export interface BrokerAuthenticationListByResourceGroupOutput {
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
export const BrokerAuthenticationListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BrokerAuthenticationListByResourceGroupOutput>;

// The operation
/**
 * List BrokerAuthenticationResource resources by BrokerResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 */
export const BrokerAuthenticationListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BrokerAuthenticationListByResourceGroupInput,
    outputSchema: BrokerAuthenticationListByResourceGroupOutput,
  }));
// Input Schema
export interface BrokerAuthorizationCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
  authorizationName: string;
  properties?: {
    authorizationPolicies: {
      cache?: "Enabled" | "Disabled";
      rules?: {
        brokerResources: {
          method: "Connect" | "Publish" | "Subscribe";
          clientIds?: string[];
          topics?: string[];
        }[];
        principals: {
          attributes?: Record<string, string>[];
          clientIds?: string[];
          usernames?: string[];
        };
        stateStoreResources?: {
          keyType: "Pattern" | "String" | "Binary";
          keys: string[];
          method: "Read" | "Write" | "ReadWrite";
        }[];
      }[];
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const BrokerAuthorizationCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    authorizationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        authorizationPolicies: Schema.Struct({
          cache: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                brokerResources: Schema.Array(
                  Schema.Struct({
                    method: Schema.Literals([
                      "Connect",
                      "Publish",
                      "Subscribe",
                    ]),
                    clientIds: Schema.optional(Schema.Array(Schema.String)),
                    topics: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
                principals: Schema.Struct({
                  attributes: Schema.optional(
                    Schema.Array(Schema.Record(Schema.String, Schema.String)),
                  ),
                  clientIds: Schema.optional(Schema.Array(Schema.String)),
                  usernames: Schema.optional(Schema.Array(Schema.String)),
                }),
                stateStoreResources: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      keyType: Schema.Literals(["Pattern", "String", "Binary"]),
                      keys: Schema.Array(Schema.String),
                      method: Schema.Literals(["Read", "Write", "ReadWrite"]),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerAuthorizationCreateOrUpdateInput>;

// Output Schema
export interface BrokerAuthorizationCreateOrUpdateOutput {
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
export const BrokerAuthorizationCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BrokerAuthorizationCreateOrUpdateOutput>;

// The operation
/**
 * Create a BrokerAuthorizationResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 * @param authorizationName - Name of Instance broker authorization resource
 */
export const BrokerAuthorizationCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BrokerAuthorizationCreateOrUpdateInput,
    outputSchema: BrokerAuthorizationCreateOrUpdateOutput,
  }));
// Input Schema
export interface BrokerAuthorizationDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
  authorizationName: string;
}
export const BrokerAuthorizationDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    authorizationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerAuthorizationDeleteInput>;

// Output Schema
export type BrokerAuthorizationDeleteOutput = void;
export const BrokerAuthorizationDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BrokerAuthorizationDeleteOutput>;

// The operation
/**
 * Delete a BrokerAuthorizationResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 * @param authorizationName - Name of Instance broker authorization resource
 */
export const BrokerAuthorizationDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BrokerAuthorizationDeleteInput,
  outputSchema: BrokerAuthorizationDeleteOutput,
}));
// Input Schema
export interface BrokerAuthorizationGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
  authorizationName: string;
}
export const BrokerAuthorizationGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    authorizationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerAuthorizationGetInput>;

// Output Schema
export interface BrokerAuthorizationGetOutput {
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
export const BrokerAuthorizationGetOutput =
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
  }) as unknown as Schema.Codec<BrokerAuthorizationGetOutput>;

// The operation
/**
 * Get a BrokerAuthorizationResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 * @param authorizationName - Name of Instance broker authorization resource
 */
export const BrokerAuthorizationGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BrokerAuthorizationGetInput,
  outputSchema: BrokerAuthorizationGetOutput,
}));
// Input Schema
export interface BrokerAuthorizationListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
}
export const BrokerAuthorizationListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerAuthorizationListByResourceGroupInput>;

// Output Schema
export interface BrokerAuthorizationListByResourceGroupOutput {
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
export const BrokerAuthorizationListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BrokerAuthorizationListByResourceGroupOutput>;

// The operation
/**
 * List BrokerAuthorizationResource resources by BrokerResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 */
export const BrokerAuthorizationListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BrokerAuthorizationListByResourceGroupInput,
    outputSchema: BrokerAuthorizationListByResourceGroupOutput,
  }));
// Input Schema
export interface BrokerCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
  properties?: {
    advanced?: {
      clients?: {
        maxSessionExpirySeconds?: number;
        maxMessageExpirySeconds?: number;
        maxPacketSizeBytes?: number;
        subscriberQueueLimit?: {
          length?: number;
          strategy?: "None" | "DropOldest";
        };
        maxReceiveMaximum?: number;
        maxKeepAliveSeconds?: number;
      };
      encryptInternalTraffic?: "Enabled" | "Disabled";
      internalCerts?: {
        duration: string;
        renewBefore: string;
        privateKey: {
          algorithm:
            | "Ec256"
            | "Ec384"
            | "Ec521"
            | "Ed25519"
            | "Rsa2048"
            | "Rsa4096"
            | "Rsa8192";
          rotationPolicy: "Always" | "Never";
        };
      };
    };
    cardinality?: {
      backendChain: {
        partitions: number;
        redundancyFactor: number;
        workers?: number;
      };
      frontend: { replicas: number; workers?: number };
    };
    diagnostics?: {
      logs?: { level?: string };
      metrics?: { prometheusPort?: number };
      selfCheck?: {
        mode?: "Enabled" | "Disabled";
        intervalSeconds?: number;
        timeoutSeconds?: number;
      };
      traces?: {
        mode?: "Enabled" | "Disabled";
        cacheSizeMegabytes?: number;
        selfTracing?: {
          mode?: "Enabled" | "Disabled";
          intervalSeconds?: number;
        };
        spanChannelCapacity?: number;
      };
    };
    diskBackedMessageBuffer?: {
      maxSize: string;
      ephemeralVolumeClaimSpec?: {
        volumeName?: string;
        volumeMode?: string;
        storageClassName?: string;
        accessModes?: string[];
        dataSource?: { apiGroup?: string; kind: string; name: string };
        dataSourceRef?: {
          apiGroup?: string;
          kind: string;
          name: string;
          namespace?: string;
        };
        resources?: {
          limits?: Record<string, string>;
          requests?: Record<string, string>;
          claims?: { name: string }[];
        };
        selector?: {
          matchExpressions?: {
            key: string;
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            values?: string[];
          }[];
          matchLabels?: Record<string, string>;
        };
      };
      persistentVolumeClaimSpec?: {
        volumeName?: string;
        volumeMode?: string;
        storageClassName?: string;
        accessModes?: string[];
        dataSource?: { apiGroup?: string; kind: string; name: string };
        dataSourceRef?: {
          apiGroup?: string;
          kind: string;
          name: string;
          namespace?: string;
        };
        resources?: {
          limits?: Record<string, string>;
          requests?: Record<string, string>;
          claims?: { name: string }[];
        };
        selector?: {
          matchExpressions?: {
            key: string;
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            values?: string[];
          }[];
          matchLabels?: Record<string, string>;
        };
      };
    };
    generateResourceLimits?: { cpu?: "Enabled" | "Disabled" };
    highPriorityMessagesBackpressureHandling?: "Accept" | "Reject";
    memoryProfile?: "Tiny" | "Low" | "Medium" | "High";
    persistence?: {
      maxSize: string;
      persistentVolumeClaimSpec?: {
        volumeName?: string;
        volumeMode?: string;
        storageClassName?: string;
        accessModes?: string[];
        dataSource?: { apiGroup?: string; kind: string; name: string };
        dataSourceRef?: {
          apiGroup?: string;
          kind: string;
          name: string;
          namespace?: string;
        };
        resources?: {
          limits?: Record<string, string>;
          requests?: Record<string, string>;
          claims?: { name: string }[];
        };
        selector?: {
          matchExpressions?: {
            key: string;
            operator: "In" | "NotIn" | "Exists" | "DoesNotExist";
            values?: string[];
          }[];
          matchLabels?: Record<string, string>;
        };
      };
      retain?: { mode: "All" | "None" | "Custom" };
      stateStore?: { mode: "All" | "None" | "Custom" };
      subscriberQueue?: { mode: "All" | "None" | "Custom" };
      encryption?: { mode: "Enabled" | "Disabled" };
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    status?: {
      healthState?: {
        status?: "Available" | "Degraded" | "Unavailable" | "Unknown";
        lastTransitionTime?: string;
        lastUpdateTime?: string;
        message?: string;
        reasonCode?: string;
      };
    };
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const BrokerCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        advanced: Schema.optional(
          Schema.Struct({
            clients: Schema.optional(
              Schema.Struct({
                maxSessionExpirySeconds: Schema.optional(Schema.Number),
                maxMessageExpirySeconds: Schema.optional(Schema.Number),
                maxPacketSizeBytes: Schema.optional(Schema.Number),
                subscriberQueueLimit: Schema.optional(
                  Schema.Struct({
                    length: Schema.optional(Schema.Number),
                    strategy: Schema.optional(
                      Schema.Literals(["None", "DropOldest"]),
                    ),
                  }),
                ),
                maxReceiveMaximum: Schema.optional(Schema.Number),
                maxKeepAliveSeconds: Schema.optional(Schema.Number),
              }),
            ),
            encryptInternalTraffic: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            internalCerts: Schema.optional(
              Schema.Struct({
                duration: Schema.String,
                renewBefore: Schema.String,
                privateKey: Schema.Struct({
                  algorithm: Schema.Literals([
                    "Ec256",
                    "Ec384",
                    "Ec521",
                    "Ed25519",
                    "Rsa2048",
                    "Rsa4096",
                    "Rsa8192",
                  ]),
                  rotationPolicy: Schema.Literals(["Always", "Never"]),
                }),
              }),
            ),
          }),
        ),
        cardinality: Schema.optional(
          Schema.Struct({
            backendChain: Schema.Struct({
              partitions: Schema.Number,
              redundancyFactor: Schema.Number,
              workers: Schema.optional(Schema.Number),
            }),
            frontend: Schema.Struct({
              replicas: Schema.Number,
              workers: Schema.optional(Schema.Number),
            }),
          }),
        ),
        diagnostics: Schema.optional(
          Schema.Struct({
            logs: Schema.optional(
              Schema.Struct({
                level: Schema.optional(Schema.String),
              }),
            ),
            metrics: Schema.optional(
              Schema.Struct({
                prometheusPort: Schema.optional(Schema.Number),
              }),
            ),
            selfCheck: Schema.optional(
              Schema.Struct({
                mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
                intervalSeconds: Schema.optional(Schema.Number),
                timeoutSeconds: Schema.optional(Schema.Number),
              }),
            ),
            traces: Schema.optional(
              Schema.Struct({
                mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
                cacheSizeMegabytes: Schema.optional(Schema.Number),
                selfTracing: Schema.optional(
                  Schema.Struct({
                    mode: Schema.optional(
                      Schema.Literals(["Enabled", "Disabled"]),
                    ),
                    intervalSeconds: Schema.optional(Schema.Number),
                  }),
                ),
                spanChannelCapacity: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        diskBackedMessageBuffer: Schema.optional(
          Schema.Struct({
            maxSize: Schema.String,
            ephemeralVolumeClaimSpec: Schema.optional(
              Schema.Struct({
                volumeName: Schema.optional(Schema.String),
                volumeMode: Schema.optional(Schema.String),
                storageClassName: Schema.optional(Schema.String),
                accessModes: Schema.optional(Schema.Array(Schema.String)),
                dataSource: Schema.optional(
                  Schema.Struct({
                    apiGroup: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                ),
                dataSourceRef: Schema.optional(
                  Schema.Struct({
                    apiGroup: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                resources: Schema.optional(
                  Schema.Struct({
                    limits: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    requests: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    claims: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.String,
                        }),
                      ),
                    ),
                  }),
                ),
                selector: Schema.optional(
                  Schema.Struct({
                    matchExpressions: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          key: Schema.String,
                          operator: Schema.Literals([
                            "In",
                            "NotIn",
                            "Exists",
                            "DoesNotExist",
                          ]),
                          values: Schema.optional(Schema.Array(Schema.String)),
                        }),
                      ),
                    ),
                    matchLabels: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                  }),
                ),
              }),
            ),
            persistentVolumeClaimSpec: Schema.optional(
              Schema.Struct({
                volumeName: Schema.optional(Schema.String),
                volumeMode: Schema.optional(Schema.String),
                storageClassName: Schema.optional(Schema.String),
                accessModes: Schema.optional(Schema.Array(Schema.String)),
                dataSource: Schema.optional(
                  Schema.Struct({
                    apiGroup: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                ),
                dataSourceRef: Schema.optional(
                  Schema.Struct({
                    apiGroup: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                resources: Schema.optional(
                  Schema.Struct({
                    limits: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    requests: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    claims: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.String,
                        }),
                      ),
                    ),
                  }),
                ),
                selector: Schema.optional(
                  Schema.Struct({
                    matchExpressions: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          key: Schema.String,
                          operator: Schema.Literals([
                            "In",
                            "NotIn",
                            "Exists",
                            "DoesNotExist",
                          ]),
                          values: Schema.optional(Schema.Array(Schema.String)),
                        }),
                      ),
                    ),
                    matchLabels: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
        generateResourceLimits: Schema.optional(
          Schema.Struct({
            cpu: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          }),
        ),
        highPriorityMessagesBackpressureHandling: Schema.optional(
          Schema.Literals(["Accept", "Reject"]),
        ),
        memoryProfile: Schema.optional(
          Schema.Literals(["Tiny", "Low", "Medium", "High"]),
        ),
        persistence: Schema.optional(
          Schema.Struct({
            maxSize: Schema.String,
            persistentVolumeClaimSpec: Schema.optional(
              Schema.Struct({
                volumeName: Schema.optional(Schema.String),
                volumeMode: Schema.optional(Schema.String),
                storageClassName: Schema.optional(Schema.String),
                accessModes: Schema.optional(Schema.Array(Schema.String)),
                dataSource: Schema.optional(
                  Schema.Struct({
                    apiGroup: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                  }),
                ),
                dataSourceRef: Schema.optional(
                  Schema.Struct({
                    apiGroup: Schema.optional(Schema.String),
                    kind: Schema.String,
                    name: Schema.String,
                    namespace: Schema.optional(Schema.String),
                  }),
                ),
                resources: Schema.optional(
                  Schema.Struct({
                    limits: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    requests: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    claims: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.String,
                        }),
                      ),
                    ),
                  }),
                ),
                selector: Schema.optional(
                  Schema.Struct({
                    matchExpressions: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          key: Schema.String,
                          operator: Schema.Literals([
                            "In",
                            "NotIn",
                            "Exists",
                            "DoesNotExist",
                          ]),
                          values: Schema.optional(Schema.Array(Schema.String)),
                        }),
                      ),
                    ),
                    matchLabels: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                  }),
                ),
              }),
            ),
            retain: Schema.optional(
              Schema.Struct({
                mode: Schema.Literals(["All", "None", "Custom"]),
              }),
            ),
            stateStore: Schema.optional(
              Schema.Struct({
                mode: Schema.Literals(["All", "None", "Custom"]),
              }),
            ),
            subscriberQueue: Schema.optional(
              Schema.Struct({
                mode: Schema.Literals(["All", "None", "Custom"]),
              }),
            ),
            encryption: Schema.optional(
              Schema.Struct({
                mode: Schema.Literals(["Enabled", "Disabled"]),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            healthState: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "Available",
                    "Degraded",
                    "Unavailable",
                    "Unknown",
                  ]),
                ),
                lastTransitionTime: Schema.optional(Schema.String),
                lastUpdateTime: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                reasonCode: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerCreateOrUpdateInput>;

// Output Schema
export interface BrokerCreateOrUpdateOutput {
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
export const BrokerCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BrokerCreateOrUpdateOutput>;

// The operation
/**
 * Create a BrokerResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 */
export const BrokerCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BrokerCreateOrUpdateInput,
  outputSchema: BrokerCreateOrUpdateOutput,
}));
// Input Schema
export interface BrokerDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
}
export const BrokerDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  brokerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<BrokerDeleteInput>;

// Output Schema
export type BrokerDeleteOutput = void;
export const BrokerDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BrokerDeleteOutput>;

// The operation
/**
 * Delete a BrokerResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 */
export const BrokerDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BrokerDeleteInput,
  outputSchema: BrokerDeleteOutput,
}));
// Input Schema
export interface BrokerGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
}
export const BrokerGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  brokerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<BrokerGetInput>;

// Output Schema
export interface BrokerGetOutput {
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
export const BrokerGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BrokerGetOutput>;

// The operation
/**
 * Get a BrokerResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 */
export const BrokerGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BrokerGetInput,
  outputSchema: BrokerGetOutput,
}));
// Input Schema
export interface BrokerListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
}
export const BrokerListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerListByResourceGroupInput>;

// Output Schema
export interface BrokerListByResourceGroupOutput {
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
export const BrokerListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BrokerListByResourceGroupOutput>;

// The operation
/**
 * List BrokerResource resources by InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const BrokerListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: BrokerListByResourceGroupInput,
  outputSchema: BrokerListByResourceGroupOutput,
}));
// Input Schema
export interface BrokerListenerCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
  listenerName: string;
  properties?: {
    serviceName?: string;
    ports: {
      authenticationRef?: string;
      authorizationRef?: string;
      nodePort?: number;
      port: number;
      protocol?: "Mqtt" | "WebSockets";
      tls?: {
        mode: "Automatic" | "Manual";
        certManagerCertificateSpec?: {
          duration?: string;
          secretName?: string;
          renewBefore?: string;
          issuerRef: {
            group: string;
            kind: "Issuer" | "ClusterIssuer";
            name: string;
          };
          privateKey?: {
            algorithm:
              | "Ec256"
              | "Ec384"
              | "Ec521"
              | "Ed25519"
              | "Rsa2048"
              | "Rsa4096"
              | "Rsa8192";
            rotationPolicy: "Always" | "Never";
          };
          san?: { dns: string[]; ip: string[] };
        };
        manual?: { secretRef: string };
      };
    }[];
    serviceType?: "ClusterIp" | "LoadBalancer" | "NodePort";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const BrokerListenerCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    listenerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        serviceName: Schema.optional(Schema.String),
        ports: Schema.Array(
          Schema.Struct({
            authenticationRef: Schema.optional(Schema.String),
            authorizationRef: Schema.optional(Schema.String),
            nodePort: Schema.optional(Schema.Number),
            port: Schema.Number,
            protocol: Schema.optional(Schema.Literals(["Mqtt", "WebSockets"])),
            tls: Schema.optional(
              Schema.Struct({
                mode: Schema.Literals(["Automatic", "Manual"]),
                certManagerCertificateSpec: Schema.optional(
                  Schema.Struct({
                    duration: Schema.optional(Schema.String),
                    secretName: Schema.optional(Schema.String),
                    renewBefore: Schema.optional(Schema.String),
                    issuerRef: Schema.Struct({
                      group: Schema.String,
                      kind: Schema.Literals(["Issuer", "ClusterIssuer"]),
                      name: Schema.String,
                    }),
                    privateKey: Schema.optional(
                      Schema.Struct({
                        algorithm: Schema.Literals([
                          "Ec256",
                          "Ec384",
                          "Ec521",
                          "Ed25519",
                          "Rsa2048",
                          "Rsa4096",
                          "Rsa8192",
                        ]),
                        rotationPolicy: Schema.Literals(["Always", "Never"]),
                      }),
                    ),
                    san: Schema.optional(
                      Schema.Struct({
                        dns: Schema.Array(Schema.String),
                        ip: Schema.Array(Schema.String),
                      }),
                    ),
                  }),
                ),
                manual: Schema.optional(
                  Schema.Struct({
                    secretRef: Schema.String,
                  }),
                ),
              }),
            ),
          }),
        ),
        serviceType: Schema.optional(
          Schema.Literals(["ClusterIp", "LoadBalancer", "NodePort"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerListenerCreateOrUpdateInput>;

// Output Schema
export interface BrokerListenerCreateOrUpdateOutput {
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
export const BrokerListenerCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BrokerListenerCreateOrUpdateOutput>;

// The operation
/**
 * Create a BrokerListenerResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 * @param listenerName - Name of Instance broker listener resource
 */
export const BrokerListenerCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BrokerListenerCreateOrUpdateInput,
    outputSchema: BrokerListenerCreateOrUpdateOutput,
  }));
// Input Schema
export interface BrokerListenerDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
  listenerName: string;
}
export const BrokerListenerDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    listenerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerListenerDeleteInput>;

// Output Schema
export type BrokerListenerDeleteOutput = void;
export const BrokerListenerDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BrokerListenerDeleteOutput>;

// The operation
/**
 * Delete a BrokerListenerResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 * @param listenerName - Name of Instance broker listener resource
 */
export const BrokerListenerDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BrokerListenerDeleteInput,
  outputSchema: BrokerListenerDeleteOutput,
}));
// Input Schema
export interface BrokerListenerGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
  listenerName: string;
}
export const BrokerListenerGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  brokerName: Schema.String.pipe(T.PathParam()),
  listenerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<BrokerListenerGetInput>;

// Output Schema
export interface BrokerListenerGetOutput {
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
export const BrokerListenerGetOutput =
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
  }) as unknown as Schema.Codec<BrokerListenerGetOutput>;

// The operation
/**
 * Get a BrokerListenerResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 * @param listenerName - Name of Instance broker listener resource
 */
export const BrokerListenerGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BrokerListenerGetInput,
  outputSchema: BrokerListenerGetOutput,
}));
// Input Schema
export interface BrokerListenerListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  brokerName: string;
}
export const BrokerListenerListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<BrokerListenerListByResourceGroupInput>;

// Output Schema
export interface BrokerListenerListByResourceGroupOutput {
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
export const BrokerListenerListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BrokerListenerListByResourceGroupOutput>;

// The operation
/**
 * List BrokerListenerResource resources by BrokerResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param brokerName - Name of broker.
 */
export const BrokerListenerListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BrokerListenerListByResourceGroupInput,
    outputSchema: BrokerListenerListByResourceGroupOutput,
  }));
// Input Schema
export interface DataflowCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
  dataflowName: string;
  properties?: {
    mode?: "Enabled" | "Disabled";
    requestDiskPersistence?: "Enabled" | "Disabled";
    operations: {
      operationType: "Source" | "Destination" | "BuiltInTransformation";
      name?: string;
      sourceSettings?: {
        endpointRef: string;
        assetRef?: string;
        serializationFormat?: "Json";
        schemaRef?: string;
        dataSources: string[];
      };
      builtInTransformationSettings?: {
        serializationFormat?: "Delta" | "Json" | "Parquet";
        schemaRef?: string;
        datasets?: {
          key: string;
          description?: string;
          schemaRef?: string;
          inputs: string[];
          expression?: string;
        }[];
        filter?: {
          type?: "Filter";
          description?: string;
          inputs: string[];
          expression: string;
        }[];
        map?: {
          type?:
            | "NewProperties"
            | "Rename"
            | "Compute"
            | "PassThrough"
            | "BuiltInFunction";
          description?: string;
          inputs: string[];
          expression?: string;
          output: string;
        }[];
      };
      destinationSettings?: {
        endpointRef: string;
        dataDestination: string;
        headers?: {
          actionType: "AddIfNotPresent" | "Remove" | "AddOrReplace";
        }[];
      };
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    status?: {
      healthState?: {
        status?: "Available" | "Degraded" | "Unavailable" | "Unknown";
        lastTransitionTime?: string;
        lastUpdateTime?: string;
        message?: string;
        reasonCode?: string;
      };
    };
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const DataflowCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
    dataflowName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        requestDiskPersistence: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        operations: Schema.Array(
          Schema.Struct({
            operationType: Schema.Literals([
              "Source",
              "Destination",
              "BuiltInTransformation",
            ]),
            name: Schema.optional(Schema.String),
            sourceSettings: Schema.optional(
              Schema.Struct({
                endpointRef: Schema.String,
                assetRef: Schema.optional(Schema.String),
                serializationFormat: Schema.optional(Schema.Literals(["Json"])),
                schemaRef: Schema.optional(Schema.String),
                dataSources: Schema.Array(Schema.String),
              }),
            ),
            builtInTransformationSettings: Schema.optional(
              Schema.Struct({
                serializationFormat: Schema.optional(
                  Schema.Literals(["Delta", "Json", "Parquet"]),
                ),
                schemaRef: Schema.optional(Schema.String),
                datasets: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      key: Schema.String,
                      description: Schema.optional(Schema.String),
                      schemaRef: Schema.optional(Schema.String),
                      inputs: Schema.Array(Schema.String),
                      expression: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                filter: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(Schema.Literals(["Filter"])),
                      description: Schema.optional(Schema.String),
                      inputs: Schema.Array(Schema.String),
                      expression: Schema.String,
                    }),
                  ),
                ),
                map: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals([
                          "NewProperties",
                          "Rename",
                          "Compute",
                          "PassThrough",
                          "BuiltInFunction",
                        ]),
                      ),
                      description: Schema.optional(Schema.String),
                      inputs: Schema.Array(Schema.String),
                      expression: Schema.optional(Schema.String),
                      output: Schema.String,
                    }),
                  ),
                ),
              }),
            ),
            destinationSettings: Schema.optional(
              Schema.Struct({
                endpointRef: Schema.String,
                dataDestination: Schema.String,
                headers: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      actionType: Schema.Literals([
                        "AddIfNotPresent",
                        "Remove",
                        "AddOrReplace",
                      ]),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            healthState: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "Available",
                    "Degraded",
                    "Unavailable",
                    "Unknown",
                  ]),
                ),
                lastTransitionTime: Schema.optional(Schema.String),
                lastUpdateTime: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                reasonCode: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowCreateOrUpdateInput>;

// Output Schema
export interface DataflowCreateOrUpdateOutput {
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
export const DataflowCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataflowCreateOrUpdateOutput>;

// The operation
/**
 * Create a DataflowResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 * @param dataflowName - Name of Instance dataflowProfile dataflow resource
 */
export const DataflowCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataflowCreateOrUpdateInput,
  outputSchema: DataflowCreateOrUpdateOutput,
}));
// Input Schema
export interface DataflowDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
  dataflowName: string;
}
export const DataflowDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  dataflowProfileName: Schema.String.pipe(T.PathParam()),
  dataflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<DataflowDeleteInput>;

// Output Schema
export type DataflowDeleteOutput = void;
export const DataflowDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataflowDeleteOutput>;

// The operation
/**
 * Delete a DataflowResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 * @param dataflowName - Name of Instance dataflowProfile dataflow resource
 */
export const DataflowDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataflowDeleteInput,
  outputSchema: DataflowDeleteOutput,
}));
// Input Schema
export interface DataflowEndpointCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowEndpointName: string;
  properties?: {
    endpointType:
      | "DataExplorer"
      | "DataLakeStorage"
      | "FabricOneLake"
      | "Kafka"
      | "LocalStorage"
      | "Mqtt"
      | "OpenTelemetry";
    hostType?:
      | "FabricRT"
      | "EventGrid"
      | "LocalBroker"
      | "Eventhub"
      | "CustomMqtt"
      | "CustomKafka";
    dataExplorerSettings?: {
      authentication: {
        method: "SystemAssignedManagedIdentity" | "UserAssignedManagedIdentity";
        systemAssignedManagedIdentitySettings?: { audience?: string };
        userAssignedManagedIdentitySettings?: {
          clientId: string;
          scope?: string;
          tenantId: string;
        };
      };
      database: string;
      host: string;
      batching?: { latencySeconds?: number; maxMessages?: number };
    };
    dataLakeStorageSettings?: {
      authentication: {
        method:
          | "SystemAssignedManagedIdentity"
          | "UserAssignedManagedIdentity"
          | "AccessToken";
        accessTokenSettings?: { secretRef: string };
        systemAssignedManagedIdentitySettings?: { audience?: string };
        userAssignedManagedIdentitySettings?: {
          clientId: string;
          scope?: string;
          tenantId: string;
        };
      };
      host: string;
      batching?: { latencySeconds?: number; maxMessages?: number };
    };
    fabricOneLakeSettings?: {
      authentication: {
        method: "SystemAssignedManagedIdentity" | "UserAssignedManagedIdentity";
        systemAssignedManagedIdentitySettings?: { audience?: string };
        userAssignedManagedIdentitySettings?: {
          clientId: string;
          scope?: string;
          tenantId: string;
        };
      };
      names: { lakehouseName: string; workspaceName: string };
      oneLakePathType: "Files" | "Tables";
      host: string;
      batching?: { latencySeconds?: number; maxMessages?: number };
    };
    kafkaSettings?: {
      authentication: {
        method:
          | "SystemAssignedManagedIdentity"
          | "UserAssignedManagedIdentity"
          | "Sasl"
          | "X509Certificate"
          | "Anonymous";
        systemAssignedManagedIdentitySettings?: { audience?: string };
        userAssignedManagedIdentitySettings?: {
          clientId: string;
          scope?: string;
          tenantId: string;
        };
        saslSettings?: {
          saslType: "Plain" | "ScramSha256" | "ScramSha512";
          secretRef: string;
        };
        x509CertificateSettings?: { secretRef: string };
      };
      consumerGroupId?: string;
      host: string;
      batching?: {
        mode?: "Enabled" | "Disabled";
        latencyMs?: number;
        maxBytes?: number;
        maxMessages?: number;
      };
      copyMqttProperties?: "Enabled" | "Disabled";
      compression?: "None" | "Gzip" | "Snappy" | "Lz4";
      kafkaAcks?: "Zero" | "One" | "All";
      partitionStrategy?: "Default" | "Static" | "Topic" | "Property";
      tls?: {
        mode?: "Enabled" | "Disabled";
        trustedCaCertificateConfigMapRef?: string;
      };
      cloudEventAttributes?: "Propagate" | "CreateOrRemap";
    };
    localStorageSettings?: { persistentVolumeClaimRef: string };
    mqttSettings?: {
      authentication: {
        method:
          | "SystemAssignedManagedIdentity"
          | "UserAssignedManagedIdentity"
          | "ServiceAccountToken"
          | "X509Certificate"
          | "Anonymous";
        systemAssignedManagedIdentitySettings?: { audience?: string };
        userAssignedManagedIdentitySettings?: {
          clientId: string;
          scope?: string;
          tenantId: string;
        };
        serviceAccountTokenSettings?: { audience: string };
        x509CertificateSettings?: { secretRef: string };
      };
      clientIdPrefix?: string;
      host?: string;
      protocol?: "Mqtt" | "WebSockets";
      keepAliveSeconds?: number;
      retain?: "Keep" | "Never";
      maxInflightMessages?: number;
      qos?: number;
      sessionExpirySeconds?: number;
      tls?: {
        mode?: "Enabled" | "Disabled";
        trustedCaCertificateConfigMapRef?: string;
      };
      cloudEventAttributes?: "Propagate" | "CreateOrRemap";
    };
    openTelemetrySettings?: {
      host: string;
      batching?: { latencySeconds?: number; maxMessages?: number };
      tls?: {
        mode?: "Enabled" | "Disabled";
        trustedCaCertificateConfigMapRef?: string;
      };
      authentication: {
        method: "ServiceAccountToken" | "X509Certificate" | "Anonymous";
      };
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const DataflowEndpointCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals([
          "DataExplorer",
          "DataLakeStorage",
          "FabricOneLake",
          "Kafka",
          "LocalStorage",
          "Mqtt",
          "OpenTelemetry",
        ]),
        hostType: Schema.optional(
          Schema.Literals([
            "FabricRT",
            "EventGrid",
            "LocalBroker",
            "Eventhub",
            "CustomMqtt",
            "CustomKafka",
          ]),
        ),
        dataExplorerSettings: Schema.optional(
          Schema.Struct({
            authentication: Schema.Struct({
              method: Schema.Literals([
                "SystemAssignedManagedIdentity",
                "UserAssignedManagedIdentity",
              ]),
              systemAssignedManagedIdentitySettings: Schema.optional(
                Schema.Struct({
                  audience: Schema.optional(Schema.String),
                }),
              ),
              userAssignedManagedIdentitySettings: Schema.optional(
                Schema.Struct({
                  clientId: Schema.String,
                  scope: Schema.optional(Schema.String),
                  tenantId: Schema.String,
                }),
              ),
            }),
            database: Schema.String,
            host: Schema.String,
            batching: Schema.optional(
              Schema.Struct({
                latencySeconds: Schema.optional(Schema.Number),
                maxMessages: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        dataLakeStorageSettings: Schema.optional(
          Schema.Struct({
            authentication: Schema.Struct({
              method: Schema.Literals([
                "SystemAssignedManagedIdentity",
                "UserAssignedManagedIdentity",
                "AccessToken",
              ]),
              accessTokenSettings: Schema.optional(
                Schema.Struct({
                  secretRef: Schema.String,
                }),
              ),
              systemAssignedManagedIdentitySettings: Schema.optional(
                Schema.Struct({
                  audience: Schema.optional(Schema.String),
                }),
              ),
              userAssignedManagedIdentitySettings: Schema.optional(
                Schema.Struct({
                  clientId: Schema.String,
                  scope: Schema.optional(Schema.String),
                  tenantId: Schema.String,
                }),
              ),
            }),
            host: Schema.String,
            batching: Schema.optional(
              Schema.Struct({
                latencySeconds: Schema.optional(Schema.Number),
                maxMessages: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        fabricOneLakeSettings: Schema.optional(
          Schema.Struct({
            authentication: Schema.Struct({
              method: Schema.Literals([
                "SystemAssignedManagedIdentity",
                "UserAssignedManagedIdentity",
              ]),
              systemAssignedManagedIdentitySettings: Schema.optional(
                Schema.Struct({
                  audience: Schema.optional(Schema.String),
                }),
              ),
              userAssignedManagedIdentitySettings: Schema.optional(
                Schema.Struct({
                  clientId: Schema.String,
                  scope: Schema.optional(Schema.String),
                  tenantId: Schema.String,
                }),
              ),
            }),
            names: Schema.Struct({
              lakehouseName: Schema.String,
              workspaceName: Schema.String,
            }),
            oneLakePathType: Schema.Literals(["Files", "Tables"]),
            host: Schema.String,
            batching: Schema.optional(
              Schema.Struct({
                latencySeconds: Schema.optional(Schema.Number),
                maxMessages: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        kafkaSettings: Schema.optional(
          Schema.Struct({
            authentication: Schema.Struct({
              method: Schema.Literals([
                "SystemAssignedManagedIdentity",
                "UserAssignedManagedIdentity",
                "Sasl",
                "X509Certificate",
                "Anonymous",
              ]),
              systemAssignedManagedIdentitySettings: Schema.optional(
                Schema.Struct({
                  audience: Schema.optional(Schema.String),
                }),
              ),
              userAssignedManagedIdentitySettings: Schema.optional(
                Schema.Struct({
                  clientId: Schema.String,
                  scope: Schema.optional(Schema.String),
                  tenantId: Schema.String,
                }),
              ),
              saslSettings: Schema.optional(
                Schema.Struct({
                  saslType: Schema.Literals([
                    "Plain",
                    "ScramSha256",
                    "ScramSha512",
                  ]),
                  secretRef: Schema.String,
                }),
              ),
              x509CertificateSettings: Schema.optional(
                Schema.Struct({
                  secretRef: Schema.String,
                }),
              ),
            }),
            consumerGroupId: Schema.optional(Schema.String),
            host: Schema.String,
            batching: Schema.optional(
              Schema.Struct({
                mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
                latencyMs: Schema.optional(Schema.Number),
                maxBytes: Schema.optional(Schema.Number),
                maxMessages: Schema.optional(Schema.Number),
              }),
            ),
            copyMqttProperties: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            compression: Schema.optional(
              Schema.Literals(["None", "Gzip", "Snappy", "Lz4"]),
            ),
            kafkaAcks: Schema.optional(Schema.Literals(["Zero", "One", "All"])),
            partitionStrategy: Schema.optional(
              Schema.Literals(["Default", "Static", "Topic", "Property"]),
            ),
            tls: Schema.optional(
              Schema.Struct({
                mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
                trustedCaCertificateConfigMapRef: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
            cloudEventAttributes: Schema.optional(
              Schema.Literals(["Propagate", "CreateOrRemap"]),
            ),
          }),
        ),
        localStorageSettings: Schema.optional(
          Schema.Struct({
            persistentVolumeClaimRef: Schema.String,
          }),
        ),
        mqttSettings: Schema.optional(
          Schema.Struct({
            authentication: Schema.Struct({
              method: Schema.Literals([
                "SystemAssignedManagedIdentity",
                "UserAssignedManagedIdentity",
                "ServiceAccountToken",
                "X509Certificate",
                "Anonymous",
              ]),
              systemAssignedManagedIdentitySettings: Schema.optional(
                Schema.Struct({
                  audience: Schema.optional(Schema.String),
                }),
              ),
              userAssignedManagedIdentitySettings: Schema.optional(
                Schema.Struct({
                  clientId: Schema.String,
                  scope: Schema.optional(Schema.String),
                  tenantId: Schema.String,
                }),
              ),
              serviceAccountTokenSettings: Schema.optional(
                Schema.Struct({
                  audience: Schema.String,
                }),
              ),
              x509CertificateSettings: Schema.optional(
                Schema.Struct({
                  secretRef: Schema.String,
                }),
              ),
            }),
            clientIdPrefix: Schema.optional(Schema.String),
            host: Schema.optional(Schema.String),
            protocol: Schema.optional(Schema.Literals(["Mqtt", "WebSockets"])),
            keepAliveSeconds: Schema.optional(Schema.Number),
            retain: Schema.optional(Schema.Literals(["Keep", "Never"])),
            maxInflightMessages: Schema.optional(Schema.Number),
            qos: Schema.optional(Schema.Number),
            sessionExpirySeconds: Schema.optional(Schema.Number),
            tls: Schema.optional(
              Schema.Struct({
                mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
                trustedCaCertificateConfigMapRef: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
            cloudEventAttributes: Schema.optional(
              Schema.Literals(["Propagate", "CreateOrRemap"]),
            ),
          }),
        ),
        openTelemetrySettings: Schema.optional(
          Schema.Struct({
            host: Schema.String,
            batching: Schema.optional(
              Schema.Struct({
                latencySeconds: Schema.optional(Schema.Number),
                maxMessages: Schema.optional(Schema.Number),
              }),
            ),
            tls: Schema.optional(
              Schema.Struct({
                mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
                trustedCaCertificateConfigMapRef: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
            authentication: Schema.Struct({
              method: Schema.Literals([
                "ServiceAccountToken",
                "X509Certificate",
                "Anonymous",
              ]),
            }),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowEndpointCreateOrUpdateInput>;

// Output Schema
export interface DataflowEndpointCreateOrUpdateOutput {
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
export const DataflowEndpointCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataflowEndpointCreateOrUpdateOutput>;

// The operation
/**
 * Create a DataflowEndpointResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowEndpointName - Name of Instance dataflowEndpoint resource
 */
export const DataflowEndpointCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataflowEndpointCreateOrUpdateInput,
    outputSchema: DataflowEndpointCreateOrUpdateOutput,
  }));
// Input Schema
export interface DataflowEndpointDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowEndpointName: string;
}
export const DataflowEndpointDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowEndpointDeleteInput>;

// Output Schema
export type DataflowEndpointDeleteOutput = void;
export const DataflowEndpointDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataflowEndpointDeleteOutput>;

// The operation
/**
 * Delete a DataflowEndpointResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowEndpointName - Name of Instance dataflowEndpoint resource
 */
export const DataflowEndpointDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataflowEndpointDeleteInput,
  outputSchema: DataflowEndpointDeleteOutput,
}));
// Input Schema
export interface DataflowEndpointGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowEndpointName: string;
}
export const DataflowEndpointGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowEndpointGetInput>;

// Output Schema
export interface DataflowEndpointGetOutput {
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
export const DataflowEndpointGetOutput =
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
  }) as unknown as Schema.Codec<DataflowEndpointGetOutput>;

// The operation
/**
 * Get a DataflowEndpointResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowEndpointName - Name of Instance dataflowEndpoint resource
 */
export const DataflowEndpointGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataflowEndpointGetInput,
  outputSchema: DataflowEndpointGetOutput,
}));
// Input Schema
export interface DataflowEndpointListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
}
export const DataflowEndpointListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowEndpointListByResourceGroupInput>;

// Output Schema
export interface DataflowEndpointListByResourceGroupOutput {
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
export const DataflowEndpointListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DataflowEndpointListByResourceGroupOutput>;

// The operation
/**
 * List DataflowEndpointResource resources by InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const DataflowEndpointListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataflowEndpointListByResourceGroupInput,
    outputSchema: DataflowEndpointListByResourceGroupOutput,
  }));
// Input Schema
export interface DataflowGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
  dataflowName: string;
}
export const DataflowGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  dataflowProfileName: Schema.String.pipe(T.PathParam()),
  dataflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<DataflowGetInput>;

// Output Schema
export interface DataflowGetOutput {
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
export const DataflowGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DataflowGetOutput>;

// The operation
/**
 * Get a DataflowResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 * @param dataflowName - Name of Instance dataflowProfile dataflow resource
 */
export const DataflowGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataflowGetInput,
  outputSchema: DataflowGetOutput,
}));
// Input Schema
export interface DataflowGraphCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
  dataflowGraphName: string;
  properties?: {
    mode?: "Enabled" | "Disabled";
    requestDiskPersistence?: "Enabled" | "Disabled";
    nodes: { name: string; nodeType: "Source" | "Graph" | "Destination" }[];
    nodeConnections: {
      from: {
        name: string;
        schema?: {
          serializationFormat?: "Delta" | "Json" | "Parquet" | "Avro";
          schemaRef?: string;
        };
      };
      to: { name: string };
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    status?: {
      healthState?: {
        status?: "Available" | "Degraded" | "Unavailable" | "Unknown";
        lastTransitionTime?: string;
        lastUpdateTime?: string;
        message?: string;
        reasonCode?: string;
      };
    };
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const DataflowGraphCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
    dataflowGraphName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        requestDiskPersistence: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        nodes: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            nodeType: Schema.Literals(["Source", "Graph", "Destination"]),
          }),
        ),
        nodeConnections: Schema.Array(
          Schema.Struct({
            from: Schema.Struct({
              name: Schema.String,
              schema: Schema.optional(
                Schema.Struct({
                  serializationFormat: Schema.optional(
                    Schema.Literals(["Delta", "Json", "Parquet", "Avro"]),
                  ),
                  schemaRef: Schema.optional(Schema.String),
                }),
              ),
            }),
            to: Schema.Struct({
              name: Schema.String,
            }),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            healthState: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "Available",
                    "Degraded",
                    "Unavailable",
                    "Unknown",
                  ]),
                ),
                lastTransitionTime: Schema.optional(Schema.String),
                lastUpdateTime: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                reasonCode: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflowGraphs/{dataflowGraphName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowGraphCreateOrUpdateInput>;

// Output Schema
export interface DataflowGraphCreateOrUpdateOutput {
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
export const DataflowGraphCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataflowGraphCreateOrUpdateOutput>;

// The operation
/**
 * Create a DataflowGraphResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 * @param dataflowGraphName - Name of Instance dataflowEndpoint resource.
 */
export const DataflowGraphCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataflowGraphCreateOrUpdateInput,
  outputSchema: DataflowGraphCreateOrUpdateOutput,
}));
// Input Schema
export interface DataflowGraphDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
  dataflowGraphName: string;
}
export const DataflowGraphDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
    dataflowGraphName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflowGraphs/{dataflowGraphName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowGraphDeleteInput>;

// Output Schema
export type DataflowGraphDeleteOutput = void;
export const DataflowGraphDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataflowGraphDeleteOutput>;

// The operation
/**
 * Delete a DataflowGraphResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 * @param dataflowGraphName - Name of Instance dataflowEndpoint resource.
 */
export const DataflowGraphDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataflowGraphDeleteInput,
  outputSchema: DataflowGraphDeleteOutput,
}));
// Input Schema
export interface DataflowGraphGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
  dataflowGraphName: string;
}
export const DataflowGraphGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  dataflowProfileName: Schema.String.pipe(T.PathParam()),
  dataflowGraphName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflowGraphs/{dataflowGraphName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<DataflowGraphGetInput>;

// Output Schema
export interface DataflowGraphGetOutput {
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
export const DataflowGraphGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DataflowGraphGetOutput>;

// The operation
/**
 * Get a DataflowGraphResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 * @param dataflowGraphName - Name of Instance dataflowEndpoint resource.
 */
export const DataflowGraphGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataflowGraphGetInput,
  outputSchema: DataflowGraphGetOutput,
}));
// Input Schema
export interface DataflowGraphListByDataflowProfileInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
}
export const DataflowGraphListByDataflowProfileInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflowGraphs",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowGraphListByDataflowProfileInput>;

// Output Schema
export interface DataflowGraphListByDataflowProfileOutput {
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
export const DataflowGraphListByDataflowProfileOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DataflowGraphListByDataflowProfileOutput>;

// The operation
/**
 * List DataflowGraphResource resources by DataflowProfileResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 */
export const DataflowGraphListByDataflowProfile =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataflowGraphListByDataflowProfileInput,
    outputSchema: DataflowGraphListByDataflowProfileOutput,
  }));
// Input Schema
export interface DataflowListByProfileResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
}
export const DataflowListByProfileResourceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowListByProfileResourceInput>;

// Output Schema
export interface DataflowListByProfileResourceOutput {
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
export const DataflowListByProfileResourceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DataflowListByProfileResourceOutput>;

// The operation
/**
 * List DataflowResource resources by DataflowProfileResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 */
export const DataflowListByProfileResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataflowListByProfileResourceInput,
    outputSchema: DataflowListByProfileResourceOutput,
  }));
// Input Schema
export interface DataflowProfileCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
  properties?: {
    diagnostics?: {
      logs?: { level?: string };
      metrics?: { prometheusPort?: number };
    };
    instanceCount?: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    status?: {
      healthState?: {
        status?: "Available" | "Degraded" | "Unavailable" | "Unknown";
        lastTransitionTime?: string;
        lastUpdateTime?: string;
        message?: string;
        reasonCode?: string;
      };
    };
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const DataflowProfileCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        diagnostics: Schema.optional(
          Schema.Struct({
            logs: Schema.optional(
              Schema.Struct({
                level: Schema.optional(Schema.String),
              }),
            ),
            metrics: Schema.optional(
              Schema.Struct({
                prometheusPort: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        instanceCount: Schema.optional(Schema.Number),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        status: Schema.optional(
          Schema.Struct({
            healthState: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "Available",
                    "Degraded",
                    "Unavailable",
                    "Unknown",
                  ]),
                ),
                lastTransitionTime: Schema.optional(Schema.String),
                lastUpdateTime: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                reasonCode: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowProfileCreateOrUpdateInput>;

// Output Schema
export interface DataflowProfileCreateOrUpdateOutput {
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
export const DataflowProfileCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataflowProfileCreateOrUpdateOutput>;

// The operation
/**
 * Create a DataflowProfileResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 */
export const DataflowProfileCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataflowProfileCreateOrUpdateInput,
    outputSchema: DataflowProfileCreateOrUpdateOutput,
  }));
// Input Schema
export interface DataflowProfileDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
}
export const DataflowProfileDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowProfileDeleteInput>;

// Output Schema
export type DataflowProfileDeleteOutput = void;
export const DataflowProfileDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataflowProfileDeleteOutput>;

// The operation
/**
 * Delete a DataflowProfileResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 */
export const DataflowProfileDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataflowProfileDeleteInput,
  outputSchema: DataflowProfileDeleteOutput,
}));
// Input Schema
export interface DataflowProfileGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  dataflowProfileName: string;
}
export const DataflowProfileGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowProfileGetInput>;

// Output Schema
export interface DataflowProfileGetOutput {
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
export const DataflowProfileGetOutput =
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
  }) as unknown as Schema.Codec<DataflowProfileGetOutput>;

// The operation
/**
 * Get a DataflowProfileResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param dataflowProfileName - Name of Instance dataflowProfile resource
 */
export const DataflowProfileGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataflowProfileGetInput,
  outputSchema: DataflowProfileGetOutput,
}));
// Input Schema
export interface DataflowProfileListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
}
export const DataflowProfileListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<DataflowProfileListByResourceGroupInput>;

// Output Schema
export interface DataflowProfileListByResourceGroupOutput {
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
export const DataflowProfileListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DataflowProfileListByResourceGroupOutput>;

// The operation
/**
 * List DataflowProfileResource resources by InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const DataflowProfileListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataflowProfileListByResourceGroupInput,
    outputSchema: DataflowProfileListByResourceGroupOutput,
  }));
// Input Schema
export interface InstanceCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  properties?: {
    description?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    version?: string;
    schemaRegistryRef: { resourceId: string };
    defaultSecretProviderClassRef?: { resourceId: string };
    features?: Record<
      string,
      {
        mode?: "Stable" | "Preview" | "Disabled";
        settings?: Record<string, "Enabled" | "Disabled">;
      }
    >;
    adrNamespaceRef?: { resourceId: string };
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
  };
  extendedLocation: { name: string; type: "CustomLocation" };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const InstanceCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        version: Schema.optional(Schema.String),
        schemaRegistryRef: Schema.Struct({
          resourceId: Schema.String,
        }),
        defaultSecretProviderClassRef: Schema.optional(
          Schema.Struct({
            resourceId: Schema.String,
          }),
        ),
        features: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              mode: Schema.optional(
                Schema.Literals(["Stable", "Preview", "Disabled"]),
              ),
              settings: Schema.optional(
                Schema.Record(
                  Schema.String,
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
              ),
            }),
          ),
        ),
        adrNamespaceRef: Schema.optional(
          Schema.Struct({
            resourceId: Schema.String,
          }),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      name: Schema.String,
      type: Schema.Literals(["CustomLocation"]),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<InstanceCreateOrUpdateInput>;

// Output Schema
export interface InstanceCreateOrUpdateOutput {
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
export const InstanceCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<InstanceCreateOrUpdateOutput>;

// The operation
/**
 * Create a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const InstanceCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstanceCreateOrUpdateInput,
  outputSchema: InstanceCreateOrUpdateOutput,
}));
// Input Schema
export interface InstanceDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
}
export const InstanceDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<InstanceDeleteInput>;

// Output Schema
export type InstanceDeleteOutput = void;
export const InstanceDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InstanceDeleteOutput>;

// The operation
/**
 * Delete a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const InstanceDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstanceDeleteInput,
  outputSchema: InstanceDeleteOutput,
}));
// Input Schema
export interface InstanceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
}
export const InstanceGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<InstanceGetInput>;

// Output Schema
export interface InstanceGetOutput {
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
export const InstanceGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<InstanceGetOutput>;

// The operation
/**
 * Get a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const InstanceGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstanceGetInput,
  outputSchema: InstanceGetOutput,
}));
// Input Schema
export interface InstanceListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const InstanceListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<InstanceListByResourceGroupInput>;

// Output Schema
export interface InstanceListByResourceGroupOutput {
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
export const InstanceListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<InstanceListByResourceGroupOutput>;

// The operation
/**
 * List InstanceResource resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const InstanceListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstanceListByResourceGroupInput,
  outputSchema: InstanceListByResourceGroupOutput,
}));
// Input Schema
export interface InstanceListBySubscriptionInput {
  subscriptionId: string;
}
export const InstanceListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.IoTOperations/instances",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<InstanceListBySubscriptionInput>;

// Output Schema
export interface InstanceListBySubscriptionOutput {
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
export const InstanceListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<InstanceListBySubscriptionOutput>;

// The operation
/**
 * List InstanceResource resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const InstanceListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstanceListBySubscriptionInput,
  outputSchema: InstanceListBySubscriptionOutput,
}));
// Input Schema
export interface InstanceUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const InstanceUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<InstanceUpdateInput>;

// Output Schema
export interface InstanceUpdateOutput {
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
export const InstanceUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<InstanceUpdateOutput>;

// The operation
/**
 * Update a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const InstanceUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstanceUpdateInput,
  outputSchema: InstanceUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.IoTOperations/operations",
    apiVersion: "2026-07-01",
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
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface RegistryEndpointCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  registryEndpointName: string;
  properties?: {
    host: string;
    authentication: {
      method:
        | "SystemAssignedManagedIdentity"
        | "UserAssignedManagedIdentity"
        | "Anonymous"
        | "ArtifactPullSecret";
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
    healthState?: "Available" | "Degraded" | "Unavailable" | "Unknown";
    codeSigningCas?: { type: "Secret" | "ConfigMap" }[];
  };
  extendedLocation?: { name: string; type: "CustomLocation" };
}
export const RegistryEndpointCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    registryEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        host: Schema.String,
        authentication: Schema.Struct({
          method: Schema.Literals([
            "SystemAssignedManagedIdentity",
            "UserAssignedManagedIdentity",
            "Anonymous",
            "ArtifactPullSecret",
          ]),
        }),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        healthState: Schema.optional(
          Schema.Literals(["Available", "Degraded", "Unavailable", "Unknown"]),
        ),
        codeSigningCas: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals(["Secret", "ConfigMap"]),
            }),
          ),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["CustomLocation"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/registryEndpoints/{registryEndpointName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<RegistryEndpointCreateOrUpdateInput>;

// Output Schema
export interface RegistryEndpointCreateOrUpdateOutput {
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
export const RegistryEndpointCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryEndpointCreateOrUpdateOutput>;

// The operation
/**
 * Create a RegistryEndpointResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param registryEndpointName - Name of RegistryEndpoint resource
 */
export const RegistryEndpointCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryEndpointCreateOrUpdateInput,
    outputSchema: RegistryEndpointCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryEndpointDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  registryEndpointName: string;
}
export const RegistryEndpointDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    registryEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/registryEndpoints/{registryEndpointName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<RegistryEndpointDeleteInput>;

// Output Schema
export type RegistryEndpointDeleteOutput = void;
export const RegistryEndpointDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryEndpointDeleteOutput>;

// The operation
/**
 * Delete a RegistryEndpointResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param registryEndpointName - Name of RegistryEndpoint resource
 */
export const RegistryEndpointDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryEndpointDeleteInput,
  outputSchema: RegistryEndpointDeleteOutput,
}));
// Input Schema
export interface RegistryEndpointGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
  registryEndpointName: string;
}
export const RegistryEndpointGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    registryEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/registryEndpoints/{registryEndpointName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<RegistryEndpointGetInput>;

// Output Schema
export interface RegistryEndpointGetOutput {
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
export const RegistryEndpointGetOutput =
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
  }) as unknown as Schema.Codec<RegistryEndpointGetOutput>;

// The operation
/**
 * Get a RegistryEndpointResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 * @param registryEndpointName - Name of RegistryEndpoint resource
 */
export const RegistryEndpointGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryEndpointGetInput,
  outputSchema: RegistryEndpointGetOutput,
}));
// Input Schema
export interface RegistryEndpointListByInstanceResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  instanceName: string;
}
export const RegistryEndpointListByInstanceResourceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/registryEndpoints",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<RegistryEndpointListByInstanceResourceInput>;

// Output Schema
export interface RegistryEndpointListByInstanceResourceOutput {
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
export const RegistryEndpointListByInstanceResourceOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RegistryEndpointListByInstanceResourceOutput>;

// The operation
/**
 * List RegistryEndpointResource resources by InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const RegistryEndpointListByInstanceResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryEndpointListByInstanceResourceInput,
    outputSchema: RegistryEndpointListByInstanceResourceOutput,
  }));
