/**
 * Azure Webpubsub API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  isDataAction: Schema.optional(Schema.Boolean),
  display: Schema.optional(Schema.suspend(() => OperationDisplaySchema)),
  origin: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.suspend(() => OperationPropertiesSchema)),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const OperationPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceSpecification: Schema.optional(
    Schema.suspend(() => ServiceSpecificationSchema),
  ),
});
const ServiceSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metricSpecifications: Schema.optional(
    Schema.Array(Schema.suspend(() => MetricSpecificationSchema)),
  ),
  logSpecifications: Schema.optional(
    Schema.Array(Schema.suspend(() => LogSpecificationSchema)),
  ),
});
const MetricSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  displayDescription: Schema.optional(Schema.String),
  unit: Schema.optional(Schema.String),
  aggregationType: Schema.optional(Schema.String),
  fillGapWithZero: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  dimensions: Schema.optional(
    Schema.Array(Schema.suspend(() => DimensionSchema)),
  ),
});
const DimensionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  internalName: Schema.optional(Schema.String),
  toBeExportedForShoebox: Schema.optional(Schema.Boolean),
});
const LogSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
});
const SignalRServiceUsageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  currentValue: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.suspend(() => SignalRServiceUsageNameSchema)),
  unit: Schema.optional(Schema.String),
});
const SignalRServiceUsageNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(Schema.String),
    localizedValue: Schema.optional(Schema.String),
  },
);
const WebPubSubResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const systemDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const ResourceSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  tier: Schema.optional(Schema.suspend(() => WebPubSubSkuTierSchema)),
  size: Schema.optional(Schema.String),
  family: Schema.optional(Schema.String),
  capacity: Schema.optional(Schema.Number),
});
const WebPubSubSkuTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Free",
  "Basic",
  "Standard",
  "Premium",
]);
const WebPubSubPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  externalIP: Schema.optional(Schema.String),
  hostName: Schema.optional(Schema.String),
  publicPort: Schema.optional(Schema.Number),
  serverPort: Schema.optional(Schema.Number),
  version: Schema.optional(Schema.String),
  privateEndpointConnections: Schema.optional(
    Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
  ),
  sharedPrivateLinkResources: Schema.optional(
    Schema.Array(Schema.suspend(() => SharedPrivateLinkResourceSchema)),
  ),
  tls: Schema.optional(Schema.suspend(() => WebPubSubTlsSettingsSchema)),
  hostNamePrefix: Schema.optional(Schema.String),
  liveTraceConfiguration: Schema.optional(
    Schema.suspend(() => LiveTraceConfigurationSchema),
  ),
  resourceLogConfiguration: Schema.optional(
    Schema.suspend(() => ResourceLogConfigurationSchema),
  ),
  networkACLs: Schema.optional(
    Schema.suspend(() => WebPubSubNetworkACLsSchema),
  ),
  publicNetworkAccess: Schema.optional(Schema.String),
  disableLocalAuth: Schema.optional(Schema.Boolean),
  disableAadAuth: Schema.optional(Schema.Boolean),
  regionEndpointEnabled: Schema.optional(Schema.String),
  resourceStopped: Schema.optional(Schema.String),
  socketIO: Schema.optional(
    Schema.suspend(() => WebPubSubSocketIOSettingsSchema),
  ),
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Succeeded",
  "Failed",
  "Canceled",
  "Running",
  "Creating",
  "Updating",
  "Deleting",
  "Moving",
]);
const PrivateEndpointConnectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const SharedPrivateLinkResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const WebPubSubTlsSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientCertEnabled: Schema.optional(Schema.Boolean),
});
const LiveTraceConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.String),
  categories: Schema.optional(
    Schema.Array(Schema.suspend(() => LiveTraceCategorySchema)),
  ),
});
const LiveTraceCategorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.String),
});
const ResourceLogConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    categories: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceLogCategorySchema)),
    ),
  });
const ResourceLogCategorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.String),
});
const WebPubSubNetworkACLsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultAction: Schema.optional(Schema.suspend(() => ACLActionSchema)),
  publicNetwork: Schema.optional(Schema.suspend(() => NetworkACLSchema)),
  privateEndpoints: Schema.optional(
    Schema.Array(Schema.suspend(() => PrivateEndpointACLSchema)),
  ),
  ipRules: Schema.optional(Schema.Array(Schema.suspend(() => IPRuleSchema))),
});
const ACLActionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Allow",
  "Deny",
]);
const NetworkACLSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allow: Schema.optional(
    Schema.Array(Schema.suspend(() => WebPubSubRequestTypeSchema)),
  ),
  deny: Schema.optional(
    Schema.Array(Schema.suspend(() => WebPubSubRequestTypeSchema)),
  ),
});
const WebPubSubRequestTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ClientConnection",
  "ServerConnection",
  "RESTAPI",
  "Trace",
]);
const PrivateEndpointACLSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allow: Schema.optional(
    Schema.Array(Schema.suspend(() => WebPubSubRequestTypeSchema)),
  ),
  deny: Schema.optional(
    Schema.Array(Schema.suspend(() => WebPubSubRequestTypeSchema)),
  ),
});
const IPRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  action: Schema.optional(Schema.suspend(() => ACLActionSchema)),
});
const WebPubSubSocketIOSettingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceMode: Schema.optional(Schema.String),
  });
const ServiceKindSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "WebPubSub",
  "SocketIO",
]);
const ManagedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.suspend(() => ManagedIdentityTypeSchema)),
  userAssignedIdentities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => UserAssignedIdentityPropertySchema),
    ),
  ),
  principalId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
});
const ManagedIdentityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "SystemAssigned",
  "UserAssigned",
]);
const UserAssignedIdentityPropertySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalId: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
  });
const CustomCertificateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CustomCertificatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    keyVaultBaseUri: Schema.String,
    keyVaultSecretName: Schema.String,
    keyVaultSecretVersion: Schema.optional(Schema.String),
  });
const CustomDomainSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CustomDomainPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  domainName: Schema.String,
  customCertificate: Schema.suspend(() => ResourceReferenceSchema),
});
const ResourceReferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const WebPubSubHubSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WebPubSubHubPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  eventHandlers: Schema.optional(
    Schema.Array(Schema.suspend(() => EventHandlerSchema)),
  ),
  eventListeners: Schema.optional(
    Schema.Array(Schema.suspend(() => EventListenerSchema)),
  ),
  anonymousConnectPolicy: Schema.optional(Schema.String),
  webSocketKeepAliveIntervalInSeconds: Schema.optional(Schema.Number),
});
const EventHandlerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  urlTemplate: Schema.String,
  userEventPattern: Schema.optional(Schema.String),
  systemEvents: Schema.optional(Schema.Array(Schema.String)),
  auth: Schema.optional(Schema.suspend(() => UpstreamAuthSettingsSchema)),
});
const UpstreamAuthSettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.suspend(() => UpstreamAuthTypeSchema)),
  managedIdentity: Schema.optional(
    Schema.suspend(() => ManagedIdentitySettingsSchema),
  ),
});
const UpstreamAuthTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "ManagedIdentity",
]);
const ManagedIdentitySettingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resource: Schema.optional(Schema.String),
  },
);
const EventListenerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.suspend(() => EventListenerFilterSchema),
  endpoint: Schema.suspend(() => EventListenerEndpointSchema),
});
const EventListenerFilterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.Literals(["EventName"]),
});
const EventListenerEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.Literals(["EventHub"]),
});
const PrivateEndpointConnectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    privateEndpoint: Schema.optional(
      Schema.suspend(() => PrivateEndpointSchema),
    ),
    groupIds: Schema.optional(Schema.Array(Schema.String)),
    privateLinkServiceConnectionState: Schema.optional(
      Schema.suspend(() => PrivateLinkServiceConnectionStateSchema),
    ),
  });
const PrivateEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const PrivateLinkServiceConnectionStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.suspend(() => PrivateLinkServiceConnectionStatusSchema),
    ),
    description: Schema.optional(Schema.String),
    actionsRequired: Schema.optional(Schema.String),
  });
const PrivateLinkServiceConnectionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Pending",
    "Approved",
    "Rejected",
    "Disconnected",
  ]);
const PrivateLinkResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const KeyTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Primary",
  "Secondary",
  "Salt",
]);
const ReplicaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ReplicaPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  regionEndpointEnabled: Schema.optional(Schema.String),
  resourceStopped: Schema.optional(Schema.String),
});
const SharedPrivateLinkResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.String,
    privateLinkResourceId: Schema.String,
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    requestMessage: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => SharedPrivateLinkResourceStatusSchema),
    ),
  });
const SharedPrivateLinkResourceStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Pending",
    "Approved",
    "Rejected",
    "Disconnected",
    "Timeout",
  ]);
const SkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceType: Schema.optional(Schema.String),
  sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
  capacity: Schema.optional(Schema.suspend(() => SkuCapacitySchema)),
});
const SkuCapacitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  minimum: Schema.optional(Schema.Number),
  maximum: Schema.optional(Schema.Number),
  default: Schema.optional(Schema.Number),
  allowedValues: Schema.optional(Schema.Array(Schema.Number)),
  scaleType: Schema.optional(Schema.suspend(() => ScaleTypeSchema)),
});
const ScaleTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Manual",
  "Automatic",
]);

// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.SignalRService/operations",
    apiVersion: "2024-03-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Lists all of the available REST API operations of the Microsoft.SignalRService provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const UsagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/locations/{location}/usages",
    apiVersion: "2024-03-01",
  }),
);
export type UsagesListInput = typeof UsagesListInput.Type;

// Output Schema
export const UsagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => SignalRServiceUsageSchema)),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type UsagesListOutput = typeof UsagesListOutput.Type;

// The operation
/**
 * List resource usage quotas by location.
 *
 * @param location - the location like "eastus"
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const UsagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
// Input Schema
export const WebPubSubCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type WebPubSubCheckNameAvailabilityInput =
  typeof WebPubSubCheckNameAvailabilityInput.Type;

// Output Schema
export const WebPubSubCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  });
export type WebPubSubCheckNameAvailabilityOutput =
  typeof WebPubSubCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Checks that the resource name is valid and is not already in use.
 *
 * @param location - the region
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const WebPubSubCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCheckNameAvailabilityInput,
    outputSchema: WebPubSubCheckNameAvailabilityOutput,
  }));
// Input Schema
export const WebPubSubCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
    properties: Schema.optional(
      Schema.suspend(() => WebPubSubPropertiesSchema),
    ),
    kind: Schema.optional(Schema.suspend(() => ServiceKindSchema)),
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WebPubSubCreateOrUpdateInput =
  typeof WebPubSubCreateOrUpdateInput.Type;

// Output Schema
export const WebPubSubCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
    properties: Schema.optional(
      Schema.suspend(() => WebPubSubPropertiesSchema),
    ),
    kind: Schema.optional(Schema.suspend(() => ServiceKindSchema)),
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubCreateOrUpdateOutput =
  typeof WebPubSubCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubCreateOrUpdateInput,
    outputSchema: WebPubSubCreateOrUpdateOutput,
  }),
);
// Input Schema
export const WebPubSubCustomCertificatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => CustomCertificatePropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates/{certificateName}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WebPubSubCustomCertificatesCreateOrUpdateInput =
  typeof WebPubSubCustomCertificatesCreateOrUpdateInput.Type;

// Output Schema
export const WebPubSubCustomCertificatesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => CustomCertificatePropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubCustomCertificatesCreateOrUpdateOutput =
  typeof WebPubSubCustomCertificatesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a custom certificate.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateName - Custom certificate name
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomCertificatesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomCertificatesCreateOrUpdateInput,
    outputSchema: WebPubSubCustomCertificatesCreateOrUpdateOutput,
  }));
// Input Schema
export const WebPubSubCustomCertificatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates/{certificateName}",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubCustomCertificatesDeleteInput =
  typeof WebPubSubCustomCertificatesDeleteInput.Type;

// Output Schema
export const WebPubSubCustomCertificatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebPubSubCustomCertificatesDeleteOutput =
  typeof WebPubSubCustomCertificatesDeleteOutput.Type;

// The operation
/**
 * Delete a custom certificate.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateName - Custom certificate name
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomCertificatesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomCertificatesDeleteInput,
    outputSchema: WebPubSubCustomCertificatesDeleteOutput,
  }));
// Input Schema
export const WebPubSubCustomCertificatesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates/{certificateName}",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubCustomCertificatesGetInput =
  typeof WebPubSubCustomCertificatesGetInput.Type;

// Output Schema
export const WebPubSubCustomCertificatesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => CustomCertificatePropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubCustomCertificatesGetOutput =
  typeof WebPubSubCustomCertificatesGetOutput.Type;

// The operation
/**
 * Get a custom certificate.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateName - Custom certificate name
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomCertificatesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomCertificatesGetInput,
    outputSchema: WebPubSubCustomCertificatesGetOutput,
  }));
// Input Schema
export const WebPubSubCustomCertificatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customCertificates",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubCustomCertificatesListInput =
  typeof WebPubSubCustomCertificatesListInput.Type;

// Output Schema
export const WebPubSubCustomCertificatesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CustomCertificateSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubCustomCertificatesListOutput =
  typeof WebPubSubCustomCertificatesListOutput.Type;

// The operation
/**
 * List all custom certificates.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomCertificatesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomCertificatesListInput,
    outputSchema: WebPubSubCustomCertificatesListOutput,
  }));
// Input Schema
export const WebPubSubCustomDomainsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => CustomDomainPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customDomains/{name}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WebPubSubCustomDomainsCreateOrUpdateInput =
  typeof WebPubSubCustomDomainsCreateOrUpdateInput.Type;

// Output Schema
export const WebPubSubCustomDomainsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => CustomDomainPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubCustomDomainsCreateOrUpdateOutput =
  typeof WebPubSubCustomDomainsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a custom domain.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Custom domain name.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomDomainsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomDomainsCreateOrUpdateInput,
    outputSchema: WebPubSubCustomDomainsCreateOrUpdateOutput,
  }));
// Input Schema
export const WebPubSubCustomDomainsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customDomains/{name}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebPubSubCustomDomainsDeleteInput =
  typeof WebPubSubCustomDomainsDeleteInput.Type;

// Output Schema
export const WebPubSubCustomDomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebPubSubCustomDomainsDeleteOutput =
  typeof WebPubSubCustomDomainsDeleteOutput.Type;

// The operation
/**
 * Delete a custom domain.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Custom domain name.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomDomainsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubCustomDomainsDeleteInput,
    outputSchema: WebPubSubCustomDomainsDeleteOutput,
  }));
// Input Schema
export const WebPubSubCustomDomainsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customDomains/{name}",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubCustomDomainsGetInput =
  typeof WebPubSubCustomDomainsGetInput.Type;

// Output Schema
export const WebPubSubCustomDomainsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => CustomDomainPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubCustomDomainsGetOutput =
  typeof WebPubSubCustomDomainsGetOutput.Type;

// The operation
/**
 * Get a custom domain.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Custom domain name.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomDomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubCustomDomainsGetInput,
    outputSchema: WebPubSubCustomDomainsGetOutput,
  }),
);
// Input Schema
export const WebPubSubCustomDomainsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/customDomains",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubCustomDomainsListInput =
  typeof WebPubSubCustomDomainsListInput.Type;

// Output Schema
export const WebPubSubCustomDomainsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CustomDomainSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubCustomDomainsListOutput =
  typeof WebPubSubCustomDomainsListOutput.Type;

// The operation
/**
 * List all custom domains.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubCustomDomainsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubCustomDomainsListInput,
    outputSchema: WebPubSubCustomDomainsListOutput,
  }),
);
// Input Schema
export const WebPubSubDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
    apiVersion: "2024-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type WebPubSubDeleteInput = typeof WebPubSubDeleteInput.Type;

// Output Schema
export const WebPubSubDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebPubSubDeleteOutput = typeof WebPubSubDeleteOutput.Type;

// The operation
/**
 * Operation to delete a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubDeleteInput,
  outputSchema: WebPubSubDeleteOutput,
}));
// Input Schema
export const WebPubSubGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
    apiVersion: "2024-03-01",
  }),
);
export type WebPubSubGetInput = typeof WebPubSubGetInput.Type;

// Output Schema
export const WebPubSubGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
  properties: Schema.optional(Schema.suspend(() => WebPubSubPropertiesSchema)),
  kind: Schema.optional(Schema.suspend(() => ServiceKindSchema)),
  identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type WebPubSubGetOutput = typeof WebPubSubGetOutput.Type;

// The operation
/**
 * Get the resource and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubGetInput,
  outputSchema: WebPubSubGetOutput,
}));
// Input Schema
export const WebPubSubHubsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => WebPubSubHubPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/hubs/{hubName}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WebPubSubHubsCreateOrUpdateInput =
  typeof WebPubSubHubsCreateOrUpdateInput.Type;

// Output Schema
export const WebPubSubHubsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => WebPubSubHubPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubHubsCreateOrUpdateOutput =
  typeof WebPubSubHubsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a hub setting.
 *
 * @param hubName - The hub name.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubHubsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubHubsCreateOrUpdateInput,
    outputSchema: WebPubSubHubsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const WebPubSubHubsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/hubs/{hubName}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebPubSubHubsDeleteInput = typeof WebPubSubHubsDeleteInput.Type;

// Output Schema
export const WebPubSubHubsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebPubSubHubsDeleteOutput = typeof WebPubSubHubsDeleteOutput.Type;

// The operation
/**
 * Delete a hub setting.
 *
 * @param hubName - The hub name.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubHubsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubHubsDeleteInput,
  outputSchema: WebPubSubHubsDeleteOutput,
}));
// Input Schema
export const WebPubSubHubsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hubName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/hubs/{hubName}",
    apiVersion: "2024-03-01",
  }),
);
export type WebPubSubHubsGetInput = typeof WebPubSubHubsGetInput.Type;

// Output Schema
export const WebPubSubHubsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => WebPubSubHubPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type WebPubSubHubsGetOutput = typeof WebPubSubHubsGetOutput.Type;

// The operation
/**
 * Get a hub setting.
 *
 * @param hubName - The hub name.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubHubsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubHubsGetInput,
  outputSchema: WebPubSubHubsGetOutput,
}));
// Input Schema
export const WebPubSubHubsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/hubs",
    apiVersion: "2024-03-01",
  }),
);
export type WebPubSubHubsListInput = typeof WebPubSubHubsListInput.Type;

// Output Schema
export const WebPubSubHubsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => WebPubSubHubSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubHubsListOutput = typeof WebPubSubHubsListOutput.Type;

// The operation
/**
 * List hub settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubHubsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubHubsListInput,
  outputSchema: WebPubSubHubsListOutput,
}));
// Input Schema
export const WebPubSubListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubListByResourceGroupInput =
  typeof WebPubSubListByResourceGroupInput.Type;

// Output Schema
export const WebPubSubListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => WebPubSubResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubListByResourceGroupOutput =
  typeof WebPubSubListByResourceGroupOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubListByResourceGroupInput,
    outputSchema: WebPubSubListByResourceGroupOutput,
  }));
// Input Schema
export const WebPubSubListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/webPubSub",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubListBySubscriptionInput =
  typeof WebPubSubListBySubscriptionInput.Type;

// Output Schema
export const WebPubSubListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => WebPubSubResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubListBySubscriptionOutput =
  typeof WebPubSubListBySubscriptionOutput.Type;

// The operation
/**
 * Handles requests to list all resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const WebPubSubListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubListBySubscriptionInput,
    outputSchema: WebPubSubListBySubscriptionOutput,
  }),
);
// Input Schema
export const WebPubSubListKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/listKeys",
    apiVersion: "2024-03-01",
  }),
);
export type WebPubSubListKeysInput = typeof WebPubSubListKeysInput.Type;

// Output Schema
export const WebPubSubListKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
  });
export type WebPubSubListKeysOutput = typeof WebPubSubListKeysOutput.Type;

// The operation
/**
 * Get the access keys of the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubListKeysInput,
  outputSchema: WebPubSubListKeysOutput,
}));
// Input Schema
export const WebPubSubListReplicaSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}/skus",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubListReplicaSkusInput =
  typeof WebPubSubListReplicaSkusInput.Type;

// Output Schema
export const WebPubSubListReplicaSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => SkuSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubListReplicaSkusOutput =
  typeof WebPubSubListReplicaSkusOutput.Type;

// The operation
/**
 * List all available skus of the replica resource.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubListReplicaSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubListReplicaSkusInput,
    outputSchema: WebPubSubListReplicaSkusOutput,
  }),
);
// Input Schema
export const WebPubSubListSkusInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/skus",
    apiVersion: "2024-03-01",
  }),
);
export type WebPubSubListSkusInput = typeof WebPubSubListSkusInput.Type;

// Output Schema
export const WebPubSubListSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => SkuSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubListSkusOutput = typeof WebPubSubListSkusOutput.Type;

// The operation
/**
 * List all available skus of the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubListSkusInput,
  outputSchema: WebPubSubListSkusOutput,
}));
// Input Schema
export const WebPubSubPrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebPubSubPrivateEndpointConnectionsDeleteInput =
  typeof WebPubSubPrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
export const WebPubSubPrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebPubSubPrivateEndpointConnectionsDeleteOutput =
  typeof WebPubSubPrivateEndpointConnectionsDeleteOutput.Type;

// The operation
/**
 * Delete the specified private endpoint connection
 *
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubPrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubPrivateEndpointConnectionsDeleteInput,
    outputSchema: WebPubSubPrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export const WebPubSubPrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubPrivateEndpointConnectionsGetInput =
  typeof WebPubSubPrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const WebPubSubPrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubPrivateEndpointConnectionsGetOutput =
  typeof WebPubSubPrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Get the specified private endpoint connection
 *
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubPrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubPrivateEndpointConnectionsGetInput,
    outputSchema: WebPubSubPrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const WebPubSubPrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateEndpointConnections",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubPrivateEndpointConnectionsListInput =
  typeof WebPubSubPrivateEndpointConnectionsListInput.Type;

// Output Schema
export const WebPubSubPrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubPrivateEndpointConnectionsListOutput =
  typeof WebPubSubPrivateEndpointConnectionsListOutput.Type;

// The operation
/**
 * List private endpoint connections
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubPrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubPrivateEndpointConnectionsListInput,
    outputSchema: WebPubSubPrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export const WebPubSubPrivateEndpointConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubPrivateEndpointConnectionsUpdateInput =
  typeof WebPubSubPrivateEndpointConnectionsUpdateInput.Type;

// Output Schema
export const WebPubSubPrivateEndpointConnectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubPrivateEndpointConnectionsUpdateOutput =
  typeof WebPubSubPrivateEndpointConnectionsUpdateOutput.Type;

// The operation
/**
 * Update the state of specified private endpoint connection
 *
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubPrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubPrivateEndpointConnectionsUpdateInput,
    outputSchema: WebPubSubPrivateEndpointConnectionsUpdateOutput,
  }));
// Input Schema
export const WebPubSubPrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateLinkResources",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubPrivateLinkResourcesListInput =
  typeof WebPubSubPrivateLinkResourcesListInput.Type;

// Output Schema
export const WebPubSubPrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateLinkResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubPrivateLinkResourcesListOutput =
  typeof WebPubSubPrivateLinkResourcesListOutput.Type;

// The operation
/**
 * Get the private link resources that need to be created for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubPrivateLinkResourcesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubPrivateLinkResourcesListInput,
    outputSchema: WebPubSubPrivateLinkResourcesListOutput,
  }));
// Input Schema
export const WebPubSubRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.optional(Schema.suspend(() => KeyTypeSchema)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/regenerateKey",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebPubSubRegenerateKeyInput =
  typeof WebPubSubRegenerateKeyInput.Type;

// Output Schema
export const WebPubSubRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
  });
export type WebPubSubRegenerateKeyOutput =
  typeof WebPubSubRegenerateKeyOutput.Type;

// The operation
/**
 * Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubRegenerateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubRegenerateKeyInput,
    outputSchema: WebPubSubRegenerateKeyOutput,
  }),
);
// Input Schema
export const WebPubSubReplicasCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
    properties: Schema.optional(Schema.suspend(() => ReplicaPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WebPubSubReplicasCreateOrUpdateInput =
  typeof WebPubSubReplicasCreateOrUpdateInput.Type;

// Output Schema
export const WebPubSubReplicasCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
    properties: Schema.optional(Schema.suspend(() => ReplicaPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubReplicasCreateOrUpdateOutput =
  typeof WebPubSubReplicasCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a replica.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubReplicasCreateOrUpdateInput,
    outputSchema: WebPubSubReplicasCreateOrUpdateOutput,
  }));
// Input Schema
export const WebPubSubReplicasDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubReplicasDeleteInput =
  typeof WebPubSubReplicasDeleteInput.Type;

// Output Schema
export const WebPubSubReplicasDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebPubSubReplicasDeleteOutput =
  typeof WebPubSubReplicasDeleteOutput.Type;

// The operation
/**
 * Operation to delete a replica.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubReplicasDeleteInput,
    outputSchema: WebPubSubReplicasDeleteOutput,
  }),
);
// Input Schema
export const WebPubSubReplicasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubReplicasGetInput = typeof WebPubSubReplicasGetInput.Type;

// Output Schema
export const WebPubSubReplicasGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
    properties: Schema.optional(Schema.suspend(() => ReplicaPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubReplicasGetOutput = typeof WebPubSubReplicasGetOutput.Type;

// The operation
/**
 * Get the replica and its properties.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubReplicasGetInput,
    outputSchema: WebPubSubReplicasGetOutput,
  }),
);
// Input Schema
export const WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SharedPrivateLinkResourcePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateInput =
  typeof WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateInput.Type;

// Output Schema
export const WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SharedPrivateLinkResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput =
  typeof WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a shared private link resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateInput,
    outputSchema:
      WebPubSubReplicaSharedPrivateLinkResourcesCreateOrUpdateOutput,
  }));
// Input Schema
export const WebPubSubReplicaSharedPrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubReplicaSharedPrivateLinkResourcesGetInput =
  typeof WebPubSubReplicaSharedPrivateLinkResourcesGetInput.Type;

// Output Schema
export const WebPubSubReplicaSharedPrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SharedPrivateLinkResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubReplicaSharedPrivateLinkResourcesGetOutput =
  typeof WebPubSubReplicaSharedPrivateLinkResourcesGetOutput.Type;

// The operation
/**
 * Get the specified shared private link resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicaSharedPrivateLinkResourcesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubReplicaSharedPrivateLinkResourcesGetInput,
    outputSchema: WebPubSubReplicaSharedPrivateLinkResourcesGetOutput,
  }));
// Input Schema
export const WebPubSubReplicaSharedPrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}/sharedPrivateLinkResources",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubReplicaSharedPrivateLinkResourcesListInput =
  typeof WebPubSubReplicaSharedPrivateLinkResourcesListInput.Type;

// Output Schema
export const WebPubSubReplicaSharedPrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => SharedPrivateLinkResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubReplicaSharedPrivateLinkResourcesListOutput =
  typeof WebPubSubReplicaSharedPrivateLinkResourcesListOutput.Type;

// The operation
/**
 * List shared private link resources
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicaSharedPrivateLinkResourcesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubReplicaSharedPrivateLinkResourcesListInput,
    outputSchema: WebPubSubReplicaSharedPrivateLinkResourcesListOutput,
  }));
// Input Schema
export const WebPubSubReplicasListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubReplicasListInput = typeof WebPubSubReplicasListInput.Type;

// Output Schema
export const WebPubSubReplicasListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => ReplicaSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubReplicasListOutput =
  typeof WebPubSubReplicasListOutput.Type;

// The operation
/**
 * List all replicas belong to this resource
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubReplicasListInput,
    outputSchema: WebPubSubReplicasListOutput,
  }),
);
// Input Schema
export const WebPubSubReplicasRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}/restart",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebPubSubReplicasRestartInput =
  typeof WebPubSubReplicasRestartInput.Type;

// Output Schema
export const WebPubSubReplicasRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebPubSubReplicasRestartOutput =
  typeof WebPubSubReplicasRestartOutput.Type;

// The operation
/**
 * Operation to restart a replica.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubReplicasRestartInput,
    outputSchema: WebPubSubReplicasRestartOutput,
  }),
);
// Input Schema
export const WebPubSubReplicasUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
    properties: Schema.optional(Schema.suspend(() => ReplicaPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/replicas/{replicaName}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebPubSubReplicasUpdateInput =
  typeof WebPubSubReplicasUpdateInput.Type;

// Output Schema
export const WebPubSubReplicasUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
    properties: Schema.optional(Schema.suspend(() => ReplicaPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubReplicasUpdateOutput =
  typeof WebPubSubReplicasUpdateOutput.Type;

// The operation
/**
 * Operation to update an exiting replica.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebPubSubReplicasUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebPubSubReplicasUpdateInput,
    outputSchema: WebPubSubReplicasUpdateOutput,
  }),
);
// Input Schema
export const WebPubSubRestartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/restart",
    apiVersion: "2024-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type WebPubSubRestartInput = typeof WebPubSubRestartInput.Type;

// Output Schema
export const WebPubSubRestartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebPubSubRestartOutput = typeof WebPubSubRestartOutput.Type;

// The operation
/**
 * Operation to restart a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubRestartInput,
  outputSchema: WebPubSubRestartOutput,
}));
// Input Schema
export const WebPubSubSharedPrivateLinkResourcesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SharedPrivateLinkResourcePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WebPubSubSharedPrivateLinkResourcesCreateOrUpdateInput =
  typeof WebPubSubSharedPrivateLinkResourcesCreateOrUpdateInput.Type;

// Output Schema
export const WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SharedPrivateLinkResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOutput =
  typeof WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a shared private link resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubSharedPrivateLinkResourcesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubSharedPrivateLinkResourcesCreateOrUpdateInput,
    outputSchema: WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOutput,
  }));
// Input Schema
export const WebPubSubSharedPrivateLinkResourcesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebPubSubSharedPrivateLinkResourcesDeleteInput =
  typeof WebPubSubSharedPrivateLinkResourcesDeleteInput.Type;

// Output Schema
export const WebPubSubSharedPrivateLinkResourcesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebPubSubSharedPrivateLinkResourcesDeleteOutput =
  typeof WebPubSubSharedPrivateLinkResourcesDeleteOutput.Type;

// The operation
/**
 * Delete the specified shared private link resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubSharedPrivateLinkResourcesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubSharedPrivateLinkResourcesDeleteInput,
    outputSchema: WebPubSubSharedPrivateLinkResourcesDeleteOutput,
  }));
// Input Schema
export const WebPubSubSharedPrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubSharedPrivateLinkResourcesGetInput =
  typeof WebPubSubSharedPrivateLinkResourcesGetInput.Type;

// Output Schema
export const WebPubSubSharedPrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SharedPrivateLinkResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebPubSubSharedPrivateLinkResourcesGetOutput =
  typeof WebPubSubSharedPrivateLinkResourcesGetOutput.Type;

// The operation
/**
 * Get the specified shared private link resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubSharedPrivateLinkResourcesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubSharedPrivateLinkResourcesGetInput,
    outputSchema: WebPubSubSharedPrivateLinkResourcesGetOutput,
  }));
// Input Schema
export const WebPubSubSharedPrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources",
      apiVersion: "2024-03-01",
    }),
  );
export type WebPubSubSharedPrivateLinkResourcesListInput =
  typeof WebPubSubSharedPrivateLinkResourcesListInput.Type;

// Output Schema
export const WebPubSubSharedPrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => SharedPrivateLinkResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WebPubSubSharedPrivateLinkResourcesListOutput =
  typeof WebPubSubSharedPrivateLinkResourcesListOutput.Type;

// The operation
/**
 * List shared private link resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubSharedPrivateLinkResourcesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebPubSubSharedPrivateLinkResourcesListInput,
    outputSchema: WebPubSubSharedPrivateLinkResourcesListOutput,
  }));
// Input Schema
export const WebPubSubUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
  properties: Schema.optional(Schema.suspend(() => WebPubSubPropertiesSchema)),
  kind: Schema.optional(Schema.suspend(() => ServiceKindSchema)),
  identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
    apiVersion: "2024-03-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type WebPubSubUpdateInput = typeof WebPubSubUpdateInput.Type;

// Output Schema
export const WebPubSubUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sku: Schema.optional(Schema.suspend(() => ResourceSkuSchema)),
  properties: Schema.optional(Schema.suspend(() => WebPubSubPropertiesSchema)),
  kind: Schema.optional(Schema.suspend(() => ServiceKindSchema)),
  identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type WebPubSubUpdateOutput = typeof WebPubSubUpdateOutput.Type;

// The operation
/**
 * Operation to update an exiting resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WebPubSubUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WebPubSubUpdateInput,
  outputSchema: WebPubSubUpdateOutput,
}));
