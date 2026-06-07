/**
 * Azure Iotoperations API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AkriConnectorCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type AkriConnectorCreateOrUpdateInput =
  typeof AkriConnectorCreateOrUpdateInput.Type;

// Output Schema
export const AkriConnectorCreateOrUpdateOutput =
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
export type AkriConnectorCreateOrUpdateOutput =
  typeof AkriConnectorCreateOrUpdateOutput.Type;

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
export const AkriConnectorCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AkriConnectorCreateOrUpdateInput,
    outputSchema: AkriConnectorCreateOrUpdateOutput,
  }),
);
// Input Schema
export const AkriConnectorDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/connectors/{connectorName}",
      apiVersion: "2026-03-01",
    }),
  );
export type AkriConnectorDeleteInput = typeof AkriConnectorDeleteInput.Type;

// Output Schema
export const AkriConnectorDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AkriConnectorDeleteOutput = typeof AkriConnectorDeleteOutput.Type;

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
export const AkriConnectorDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AkriConnectorDeleteInput,
  outputSchema: AkriConnectorDeleteOutput,
}));
// Input Schema
export const AkriConnectorGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
  connectorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/connectors/{connectorName}",
    apiVersion: "2026-03-01",
  }),
);
export type AkriConnectorGetInput = typeof AkriConnectorGetInput.Type;

// Output Schema
export const AkriConnectorGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
);
export type AkriConnectorGetOutput = typeof AkriConnectorGetOutput.Type;

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
export const AkriConnectorGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AkriConnectorGetInput,
  outputSchema: AkriConnectorGetOutput,
}));
// Input Schema
export const AkriConnectorListByTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}/connectors",
      apiVersion: "2026-03-01",
    }),
  );
export type AkriConnectorListByTemplateInput =
  typeof AkriConnectorListByTemplateInput.Type;

// Output Schema
export const AkriConnectorListByTemplateOutput =
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
export type AkriConnectorListByTemplateOutput =
  typeof AkriConnectorListByTemplateOutput.Type;

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
export const AkriConnectorListByTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AkriConnectorListByTemplateInput,
    outputSchema: AkriConnectorListByTemplateOutput,
  }),
);
// Input Schema
export const AkriConnectorTemplateCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type AkriConnectorTemplateCreateOrUpdateInput =
  typeof AkriConnectorTemplateCreateOrUpdateInput.Type;

// Output Schema
export const AkriConnectorTemplateCreateOrUpdateOutput =
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
export type AkriConnectorTemplateCreateOrUpdateOutput =
  typeof AkriConnectorTemplateCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AkriConnectorTemplateCreateOrUpdateInput,
    outputSchema: AkriConnectorTemplateCreateOrUpdateOutput,
  }));
// Input Schema
export const AkriConnectorTemplateDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}",
      apiVersion: "2026-03-01",
    }),
  );
export type AkriConnectorTemplateDeleteInput =
  typeof AkriConnectorTemplateDeleteInput.Type;

// Output Schema
export const AkriConnectorTemplateDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AkriConnectorTemplateDeleteOutput =
  typeof AkriConnectorTemplateDeleteOutput.Type;

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
export const AkriConnectorTemplateDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AkriConnectorTemplateDeleteInput,
    outputSchema: AkriConnectorTemplateDeleteOutput,
  }),
);
// Input Schema
export const AkriConnectorTemplateGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriConnectorTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates/{akriConnectorTemplateName}",
      apiVersion: "2026-03-01",
    }),
  );
export type AkriConnectorTemplateGetInput =
  typeof AkriConnectorTemplateGetInput.Type;

// Output Schema
export const AkriConnectorTemplateGetOutput =
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
export type AkriConnectorTemplateGetOutput =
  typeof AkriConnectorTemplateGetOutput.Type;

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
export const AkriConnectorTemplateGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AkriConnectorTemplateGetInput,
    outputSchema: AkriConnectorTemplateGetOutput,
  }),
);
// Input Schema
export const AkriConnectorTemplateListByInstanceResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriConnectorTemplates",
      apiVersion: "2026-03-01",
    }),
  );
export type AkriConnectorTemplateListByInstanceResourceInput =
  typeof AkriConnectorTemplateListByInstanceResourceInput.Type;

// Output Schema
export const AkriConnectorTemplateListByInstanceResourceOutput =
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
export type AkriConnectorTemplateListByInstanceResourceOutput =
  typeof AkriConnectorTemplateListByInstanceResourceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AkriConnectorTemplateListByInstanceResourceInput,
    outputSchema: AkriConnectorTemplateListByInstanceResourceOutput,
  }));
// Input Schema
export const AkriServiceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type AkriServiceCreateOrUpdateInput =
  typeof AkriServiceCreateOrUpdateInput.Type;

// Output Schema
export const AkriServiceCreateOrUpdateOutput =
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
export type AkriServiceCreateOrUpdateOutput =
  typeof AkriServiceCreateOrUpdateOutput.Type;

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
export const AkriServiceCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AkriServiceCreateOrUpdateInput,
    outputSchema: AkriServiceCreateOrUpdateOutput,
  }),
);
// Input Schema
export const AkriServiceDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    akriServiceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriServices/{akriServiceName}",
    apiVersion: "2026-03-01",
  }),
);
export type AkriServiceDeleteInput = typeof AkriServiceDeleteInput.Type;

// Output Schema
export const AkriServiceDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AkriServiceDeleteOutput = typeof AkriServiceDeleteOutput.Type;

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
export const AkriServiceDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AkriServiceDeleteInput,
  outputSchema: AkriServiceDeleteOutput,
}));
// Input Schema
export const AkriServiceGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  akriServiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriServices/{akriServiceName}",
    apiVersion: "2026-03-01",
  }),
);
export type AkriServiceGetInput = typeof AkriServiceGetInput.Type;

// Output Schema
export const AkriServiceGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type AkriServiceGetOutput = typeof AkriServiceGetOutput.Type;

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
export const AkriServiceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AkriServiceGetInput,
  outputSchema: AkriServiceGetOutput,
}));
// Input Schema
export const AkriServiceListByInstanceResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/akriServices",
      apiVersion: "2026-03-01",
    }),
  );
export type AkriServiceListByInstanceResourceInput =
  typeof AkriServiceListByInstanceResourceInput.Type;

// Output Schema
export const AkriServiceListByInstanceResourceOutput =
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
export type AkriServiceListByInstanceResourceOutput =
  typeof AkriServiceListByInstanceResourceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AkriServiceListByInstanceResourceInput,
    outputSchema: AkriServiceListByInstanceResourceOutput,
  }));
// Input Schema
export const BrokerAuthenticationCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerAuthenticationCreateOrUpdateInput =
  typeof BrokerAuthenticationCreateOrUpdateInput.Type;

// Output Schema
export const BrokerAuthenticationCreateOrUpdateOutput =
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
export type BrokerAuthenticationCreateOrUpdateOutput =
  typeof BrokerAuthenticationCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BrokerAuthenticationCreateOrUpdateInput,
    outputSchema: BrokerAuthenticationCreateOrUpdateOutput,
  }));
// Input Schema
export const BrokerAuthenticationDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    authenticationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}",
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerAuthenticationDeleteInput =
  typeof BrokerAuthenticationDeleteInput.Type;

// Output Schema
export const BrokerAuthenticationDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BrokerAuthenticationDeleteOutput =
  typeof BrokerAuthenticationDeleteOutput.Type;

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
export const BrokerAuthenticationDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BrokerAuthenticationDeleteInput,
    outputSchema: BrokerAuthenticationDeleteOutput,
  }),
);
// Input Schema
export const BrokerAuthenticationGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    authenticationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications/{authenticationName}",
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerAuthenticationGetInput =
  typeof BrokerAuthenticationGetInput.Type;

// Output Schema
export const BrokerAuthenticationGetOutput =
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
export type BrokerAuthenticationGetOutput =
  typeof BrokerAuthenticationGetOutput.Type;

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
export const BrokerAuthenticationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BrokerAuthenticationGetInput,
    outputSchema: BrokerAuthenticationGetOutput,
  }),
);
// Input Schema
export const BrokerAuthenticationListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authentications",
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerAuthenticationListByResourceGroupInput =
  typeof BrokerAuthenticationListByResourceGroupInput.Type;

// Output Schema
export const BrokerAuthenticationListByResourceGroupOutput =
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
export type BrokerAuthenticationListByResourceGroupOutput =
  typeof BrokerAuthenticationListByResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BrokerAuthenticationListByResourceGroupInput,
    outputSchema: BrokerAuthenticationListByResourceGroupOutput,
  }));
// Input Schema
export const BrokerAuthorizationCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerAuthorizationCreateOrUpdateInput =
  typeof BrokerAuthorizationCreateOrUpdateInput.Type;

// Output Schema
export const BrokerAuthorizationCreateOrUpdateOutput =
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
export type BrokerAuthorizationCreateOrUpdateOutput =
  typeof BrokerAuthorizationCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BrokerAuthorizationCreateOrUpdateInput,
    outputSchema: BrokerAuthorizationCreateOrUpdateOutput,
  }));
// Input Schema
export const BrokerAuthorizationDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    authorizationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerAuthorizationDeleteInput =
  typeof BrokerAuthorizationDeleteInput.Type;

// Output Schema
export const BrokerAuthorizationDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BrokerAuthorizationDeleteOutput =
  typeof BrokerAuthorizationDeleteOutput.Type;

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
export const BrokerAuthorizationDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BrokerAuthorizationDeleteInput,
    outputSchema: BrokerAuthorizationDeleteOutput,
  }),
);
// Input Schema
export const BrokerAuthorizationGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    authorizationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations/{authorizationName}",
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerAuthorizationGetInput =
  typeof BrokerAuthorizationGetInput.Type;

// Output Schema
export const BrokerAuthorizationGetOutput =
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
export type BrokerAuthorizationGetOutput =
  typeof BrokerAuthorizationGetOutput.Type;

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
export const BrokerAuthorizationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BrokerAuthorizationGetInput,
    outputSchema: BrokerAuthorizationGetOutput,
  }),
);
// Input Schema
export const BrokerAuthorizationListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/authorizations",
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerAuthorizationListByResourceGroupInput =
  typeof BrokerAuthorizationListByResourceGroupInput.Type;

// Output Schema
export const BrokerAuthorizationListByResourceGroupOutput =
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
export type BrokerAuthorizationListByResourceGroupOutput =
  typeof BrokerAuthorizationListByResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BrokerAuthorizationListByResourceGroupInput,
    outputSchema: BrokerAuthorizationListByResourceGroupOutput,
  }));
// Input Schema
export const BrokerCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerCreateOrUpdateInput = typeof BrokerCreateOrUpdateInput.Type;

// Output Schema
export const BrokerCreateOrUpdateOutput =
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
export type BrokerCreateOrUpdateOutput = typeof BrokerCreateOrUpdateOutput.Type;

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
export const BrokerCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BrokerCreateOrUpdateInput,
    outputSchema: BrokerCreateOrUpdateOutput,
  }),
);
// Input Schema
export const BrokerDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  brokerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}",
    apiVersion: "2026-03-01",
  }),
);
export type BrokerDeleteInput = typeof BrokerDeleteInput.Type;

// Output Schema
export const BrokerDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BrokerDeleteOutput = typeof BrokerDeleteOutput.Type;

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
export const BrokerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BrokerDeleteInput,
  outputSchema: BrokerDeleteOutput,
}));
// Input Schema
export const BrokerGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  brokerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}",
    apiVersion: "2026-03-01",
  }),
);
export type BrokerGetInput = typeof BrokerGetInput.Type;

// Output Schema
export const BrokerGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type BrokerGetOutput = typeof BrokerGetOutput.Type;

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
export const BrokerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BrokerGetInput,
  outputSchema: BrokerGetOutput,
}));
// Input Schema
export const BrokerListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers",
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerListByResourceGroupInput =
  typeof BrokerListByResourceGroupInput.Type;

// Output Schema
export const BrokerListByResourceGroupOutput =
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
export type BrokerListByResourceGroupOutput =
  typeof BrokerListByResourceGroupOutput.Type;

// The operation
/**
 * List BrokerResource resources by InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const BrokerListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BrokerListByResourceGroupInput,
    outputSchema: BrokerListByResourceGroupOutput,
  }),
);
// Input Schema
export const BrokerListenerCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerListenerCreateOrUpdateInput =
  typeof BrokerListenerCreateOrUpdateInput.Type;

// Output Schema
export const BrokerListenerCreateOrUpdateOutput =
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
export type BrokerListenerCreateOrUpdateOutput =
  typeof BrokerListenerCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BrokerListenerCreateOrUpdateInput,
    outputSchema: BrokerListenerCreateOrUpdateOutput,
  }));
// Input Schema
export const BrokerListenerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    listenerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerListenerDeleteInput = typeof BrokerListenerDeleteInput.Type;

// Output Schema
export const BrokerListenerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BrokerListenerDeleteOutput = typeof BrokerListenerDeleteOutput.Type;

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
export const BrokerListenerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BrokerListenerDeleteInput,
    outputSchema: BrokerListenerDeleteOutput,
  }),
);
// Input Schema
export const BrokerListenerGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
    listenerName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners/{listenerName}",
    apiVersion: "2026-03-01",
  }),
);
export type BrokerListenerGetInput = typeof BrokerListenerGetInput.Type;

// Output Schema
export const BrokerListenerGetOutput =
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
export type BrokerListenerGetOutput = typeof BrokerListenerGetOutput.Type;

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
export const BrokerListenerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BrokerListenerGetInput,
  outputSchema: BrokerListenerGetOutput,
}));
// Input Schema
export const BrokerListenerListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    brokerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/brokers/{brokerName}/listeners",
      apiVersion: "2026-03-01",
    }),
  );
export type BrokerListenerListByResourceGroupInput =
  typeof BrokerListenerListByResourceGroupInput.Type;

// Output Schema
export const BrokerListenerListByResourceGroupOutput =
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
export type BrokerListenerListByResourceGroupOutput =
  typeof BrokerListenerListByResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BrokerListenerListByResourceGroupInput,
    outputSchema: BrokerListenerListByResourceGroupOutput,
  }));
// Input Schema
export const DataflowCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowCreateOrUpdateInput =
  typeof DataflowCreateOrUpdateInput.Type;

// Output Schema
export const DataflowCreateOrUpdateOutput =
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
export type DataflowCreateOrUpdateOutput =
  typeof DataflowCreateOrUpdateOutput.Type;

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
export const DataflowCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataflowCreateOrUpdateInput,
    outputSchema: DataflowCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DataflowDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  dataflowProfileName: Schema.String.pipe(T.PathParam()),
  dataflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
    apiVersion: "2026-03-01",
  }),
);
export type DataflowDeleteInput = typeof DataflowDeleteInput.Type;

// Output Schema
export const DataflowDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataflowDeleteOutput = typeof DataflowDeleteOutput.Type;

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
export const DataflowDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataflowDeleteInput,
  outputSchema: DataflowDeleteOutput,
}));
// Input Schema
export const DataflowEndpointCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowEndpointCreateOrUpdateInput =
  typeof DataflowEndpointCreateOrUpdateInput.Type;

// Output Schema
export const DataflowEndpointCreateOrUpdateOutput =
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
export type DataflowEndpointCreateOrUpdateOutput =
  typeof DataflowEndpointCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataflowEndpointCreateOrUpdateInput,
    outputSchema: DataflowEndpointCreateOrUpdateOutput,
  }));
// Input Schema
export const DataflowEndpointDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}",
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowEndpointDeleteInput =
  typeof DataflowEndpointDeleteInput.Type;

// Output Schema
export const DataflowEndpointDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataflowEndpointDeleteOutput =
  typeof DataflowEndpointDeleteOutput.Type;

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
export const DataflowEndpointDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataflowEndpointDeleteInput,
    outputSchema: DataflowEndpointDeleteOutput,
  }),
);
// Input Schema
export const DataflowEndpointGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints/{dataflowEndpointName}",
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowEndpointGetInput = typeof DataflowEndpointGetInput.Type;

// Output Schema
export const DataflowEndpointGetOutput =
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
export type DataflowEndpointGetOutput = typeof DataflowEndpointGetOutput.Type;

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
export const DataflowEndpointGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataflowEndpointGetInput,
  outputSchema: DataflowEndpointGetOutput,
}));
// Input Schema
export const DataflowEndpointListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowEndpoints",
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowEndpointListByResourceGroupInput =
  typeof DataflowEndpointListByResourceGroupInput.Type;

// Output Schema
export const DataflowEndpointListByResourceGroupOutput =
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
export type DataflowEndpointListByResourceGroupOutput =
  typeof DataflowEndpointListByResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataflowEndpointListByResourceGroupInput,
    outputSchema: DataflowEndpointListByResourceGroupOutput,
  }));
// Input Schema
export const DataflowGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  dataflowProfileName: Schema.String.pipe(T.PathParam()),
  dataflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows/{dataflowName}",
    apiVersion: "2026-03-01",
  }),
);
export type DataflowGetInput = typeof DataflowGetInput.Type;

// Output Schema
export const DataflowGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type DataflowGetOutput = typeof DataflowGetOutput.Type;

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
export const DataflowGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataflowGetInput,
  outputSchema: DataflowGetOutput,
}));
// Input Schema
export const DataflowGraphCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowGraphCreateOrUpdateInput =
  typeof DataflowGraphCreateOrUpdateInput.Type;

// Output Schema
export const DataflowGraphCreateOrUpdateOutput =
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
export type DataflowGraphCreateOrUpdateOutput =
  typeof DataflowGraphCreateOrUpdateOutput.Type;

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
export const DataflowGraphCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataflowGraphCreateOrUpdateInput,
    outputSchema: DataflowGraphCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DataflowGraphDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
    dataflowGraphName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflowGraphs/{dataflowGraphName}",
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowGraphDeleteInput = typeof DataflowGraphDeleteInput.Type;

// Output Schema
export const DataflowGraphDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataflowGraphDeleteOutput = typeof DataflowGraphDeleteOutput.Type;

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
export const DataflowGraphDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataflowGraphDeleteInput,
  outputSchema: DataflowGraphDeleteOutput,
}));
// Input Schema
export const DataflowGraphGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  dataflowProfileName: Schema.String.pipe(T.PathParam()),
  dataflowGraphName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflowGraphs/{dataflowGraphName}",
    apiVersion: "2026-03-01",
  }),
);
export type DataflowGraphGetInput = typeof DataflowGraphGetInput.Type;

// Output Schema
export const DataflowGraphGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
);
export type DataflowGraphGetOutput = typeof DataflowGraphGetOutput.Type;

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
export const DataflowGraphGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataflowGraphGetInput,
  outputSchema: DataflowGraphGetOutput,
}));
// Input Schema
export const DataflowGraphListByDataflowProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflowGraphs",
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowGraphListByDataflowProfileInput =
  typeof DataflowGraphListByDataflowProfileInput.Type;

// Output Schema
export const DataflowGraphListByDataflowProfileOutput =
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
export type DataflowGraphListByDataflowProfileOutput =
  typeof DataflowGraphListByDataflowProfileOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataflowGraphListByDataflowProfileInput,
    outputSchema: DataflowGraphListByDataflowProfileOutput,
  }));
// Input Schema
export const DataflowListByProfileResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}/dataflows",
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowListByProfileResourceInput =
  typeof DataflowListByProfileResourceInput.Type;

// Output Schema
export const DataflowListByProfileResourceOutput =
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
export type DataflowListByProfileResourceOutput =
  typeof DataflowListByProfileResourceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataflowListByProfileResourceInput,
    outputSchema: DataflowListByProfileResourceOutput,
  }));
// Input Schema
export const DataflowProfileCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowProfileCreateOrUpdateInput =
  typeof DataflowProfileCreateOrUpdateInput.Type;

// Output Schema
export const DataflowProfileCreateOrUpdateOutput =
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
export type DataflowProfileCreateOrUpdateOutput =
  typeof DataflowProfileCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataflowProfileCreateOrUpdateInput,
    outputSchema: DataflowProfileCreateOrUpdateOutput,
  }));
// Input Schema
export const DataflowProfileDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}",
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowProfileDeleteInput = typeof DataflowProfileDeleteInput.Type;

// Output Schema
export const DataflowProfileDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DataflowProfileDeleteOutput =
  typeof DataflowProfileDeleteOutput.Type;

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
export const DataflowProfileDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataflowProfileDeleteInput,
    outputSchema: DataflowProfileDeleteOutput,
  }),
);
// Input Schema
export const DataflowProfileGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    dataflowProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles/{dataflowProfileName}",
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowProfileGetInput = typeof DataflowProfileGetInput.Type;

// Output Schema
export const DataflowProfileGetOutput =
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
export type DataflowProfileGetOutput = typeof DataflowProfileGetOutput.Type;

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
export const DataflowProfileGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataflowProfileGetInput,
  outputSchema: DataflowProfileGetOutput,
}));
// Input Schema
export const DataflowProfileListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/dataflowProfiles",
      apiVersion: "2026-03-01",
    }),
  );
export type DataflowProfileListByResourceGroupInput =
  typeof DataflowProfileListByResourceGroupInput.Type;

// Output Schema
export const DataflowProfileListByResourceGroupOutput =
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
export type DataflowProfileListByResourceGroupOutput =
  typeof DataflowProfileListByResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataflowProfileListByResourceGroupInput,
    outputSchema: DataflowProfileListByResourceGroupOutput,
  }));
// Input Schema
export const InstanceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type InstanceCreateOrUpdateInput =
  typeof InstanceCreateOrUpdateInput.Type;

// Output Schema
export const InstanceCreateOrUpdateOutput =
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
export type InstanceCreateOrUpdateOutput =
  typeof InstanceCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const InstanceCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InstanceCreateOrUpdateInput,
    outputSchema: InstanceCreateOrUpdateOutput,
  }),
);
// Input Schema
export const InstanceDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
    apiVersion: "2026-03-01",
  }),
);
export type InstanceDeleteInput = typeof InstanceDeleteInput.Type;

// Output Schema
export const InstanceDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InstanceDeleteOutput = typeof InstanceDeleteOutput.Type;

// The operation
/**
 * Delete a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const InstanceDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InstanceDeleteInput,
  outputSchema: InstanceDeleteOutput,
}));
// Input Schema
export const InstanceGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}",
    apiVersion: "2026-03-01",
  }),
);
export type InstanceGetInput = typeof InstanceGetInput.Type;

// Output Schema
export const InstanceGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type InstanceGetOutput = typeof InstanceGetOutput.Type;

// The operation
/**
 * Get a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const InstanceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InstanceGetInput,
  outputSchema: InstanceGetOutput,
}));
// Input Schema
export const InstanceListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances",
      apiVersion: "2026-03-01",
    }),
  );
export type InstanceListByResourceGroupInput =
  typeof InstanceListByResourceGroupInput.Type;

// Output Schema
export const InstanceListByResourceGroupOutput =
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
export type InstanceListByResourceGroupOutput =
  typeof InstanceListByResourceGroupOutput.Type;

// The operation
/**
 * List InstanceResource resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const InstanceListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InstanceListByResourceGroupInput,
    outputSchema: InstanceListByResourceGroupOutput,
  }),
);
// Input Schema
export const InstanceListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.IoTOperations/instances",
      apiVersion: "2026-03-01",
    }),
  );
export type InstanceListBySubscriptionInput =
  typeof InstanceListBySubscriptionInput.Type;

// Output Schema
export const InstanceListBySubscriptionOutput =
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
export type InstanceListBySubscriptionOutput =
  typeof InstanceListBySubscriptionOutput.Type;

// The operation
/**
 * List InstanceResource resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const InstanceListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InstanceListBySubscriptionInput,
    outputSchema: InstanceListBySubscriptionOutput,
  }),
);
// Input Schema
export const InstanceUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    apiVersion: "2026-03-01",
  }),
);
export type InstanceUpdateInput = typeof InstanceUpdateInput.Type;

// Output Schema
export const InstanceUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type InstanceUpdateOutput = typeof InstanceUpdateOutput.Type;

// The operation
/**
 * Update a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instanceName - Name of instance.
 */
export const InstanceUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InstanceUpdateInput,
  outputSchema: InstanceUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.IoTOperations/operations",
    apiVersion: "2026-03-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
export const RegistryEndpointCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      apiVersion: "2026-03-01",
    }),
  );
export type RegistryEndpointCreateOrUpdateInput =
  typeof RegistryEndpointCreateOrUpdateInput.Type;

// Output Schema
export const RegistryEndpointCreateOrUpdateOutput =
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
export type RegistryEndpointCreateOrUpdateOutput =
  typeof RegistryEndpointCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistryEndpointCreateOrUpdateInput,
    outputSchema: RegistryEndpointCreateOrUpdateOutput,
  }));
// Input Schema
export const RegistryEndpointDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    registryEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/registryEndpoints/{registryEndpointName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RegistryEndpointDeleteInput =
  typeof RegistryEndpointDeleteInput.Type;

// Output Schema
export const RegistryEndpointDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RegistryEndpointDeleteOutput =
  typeof RegistryEndpointDeleteOutput.Type;

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
export const RegistryEndpointDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegistryEndpointDeleteInput,
    outputSchema: RegistryEndpointDeleteOutput,
  }),
);
// Input Schema
export const RegistryEndpointGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    registryEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/registryEndpoints/{registryEndpointName}",
      apiVersion: "2026-03-01",
    }),
  );
export type RegistryEndpointGetInput = typeof RegistryEndpointGetInput.Type;

// Output Schema
export const RegistryEndpointGetOutput =
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
export type RegistryEndpointGetOutput = typeof RegistryEndpointGetOutput.Type;

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
export const RegistryEndpointGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RegistryEndpointGetInput,
  outputSchema: RegistryEndpointGetOutput,
}));
// Input Schema
export const RegistryEndpointListByInstanceResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTOperations/instances/{instanceName}/registryEndpoints",
      apiVersion: "2026-03-01",
    }),
  );
export type RegistryEndpointListByInstanceResourceInput =
  typeof RegistryEndpointListByInstanceResourceInput.Type;

// Output Schema
export const RegistryEndpointListByInstanceResourceOutput =
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
export type RegistryEndpointListByInstanceResourceOutput =
  typeof RegistryEndpointListByInstanceResourceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistryEndpointListByInstanceResourceInput,
    outputSchema: RegistryEndpointListByInstanceResourceOutput,
  }));
