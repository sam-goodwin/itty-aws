/**
 * Azure Iothub API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Shared schemas
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  display: Schema.optional(
    Schema.Struct({
      provider: Schema.optional(Schema.String),
      resource: Schema.optional(Schema.String),
      operation: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
    }),
  ),
});
const IotHubPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  authorizationPolicies: Schema.optional(
    Schema.Array(
      Schema.suspend(() => SharedAccessSignatureAuthorizationRuleSchema),
    ),
  ),
  disableLocalAuth: Schema.optional(Schema.Boolean),
  disableDeviceSAS: Schema.optional(Schema.Boolean),
  disableModuleSAS: Schema.optional(Schema.Boolean),
  restrictOutboundNetworkAccess: Schema.optional(Schema.Boolean),
  allowedFqdnList: Schema.optional(Schema.Array(Schema.String)),
  publicNetworkAccess: Schema.optional(
    Schema.Literals(["Enabled", "Disabled"]),
  ),
  ipFilterRules: Schema.optional(
    Schema.Array(Schema.suspend(() => IpFilterRuleSchema)),
  ),
  networkRuleSets: Schema.optional(
    Schema.suspend(() => NetworkRuleSetPropertiesSchema),
  ),
  minTlsVersion: Schema.optional(Schema.String),
  privateEndpointConnections: Schema.optional(
    Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
  ),
  provisioningState: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  hostName: Schema.optional(Schema.String),
  eventHubEndpoints: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => EventHubPropertiesSchema),
    ),
  ),
  routing: Schema.optional(Schema.suspend(() => RoutingPropertiesSchema)),
  storageEndpoints: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => StorageEndpointPropertiesSchema),
    ),
  ),
  messagingEndpoints: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => MessagingEndpointPropertiesSchema),
    ),
  ),
  enableFileUploadNotifications: Schema.optional(Schema.Boolean),
  cloudToDevice: Schema.optional(
    Schema.suspend(() => CloudToDevicePropertiesSchema),
  ),
  comments: Schema.optional(Schema.String),
  features: Schema.optional(Schema.Literals(["None", "DeviceManagement"])),
  locations: Schema.optional(
    Schema.Array(Schema.suspend(() => IotHubLocationDescriptionSchema)),
  ),
  enableDataResidency: Schema.optional(Schema.Boolean),
});
const SharedAccessSignatureAuthorizationRuleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.String,
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    rights: Schema.Literals([
      "RegistryRead",
      "RegistryWrite",
      "ServiceConnect",
      "DeviceConnect",
      "RegistryRead, RegistryWrite",
      "RegistryRead, ServiceConnect",
      "RegistryRead, DeviceConnect",
      "RegistryWrite, ServiceConnect",
      "RegistryWrite, DeviceConnect",
      "ServiceConnect, DeviceConnect",
      "RegistryRead, RegistryWrite, ServiceConnect",
      "RegistryRead, RegistryWrite, DeviceConnect",
      "RegistryRead, ServiceConnect, DeviceConnect",
      "RegistryWrite, ServiceConnect, DeviceConnect",
      "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect",
    ]),
  });
const IpFilterRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filterName: Schema.String,
  action: Schema.Literals(["Accept", "Reject"]),
  ipMask: Schema.String,
});
const NetworkRuleSetPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultAction: Schema.optional(Schema.Literals(["Deny", "Allow"])),
    applyToBuiltInEventHubEndpoint: Schema.Boolean,
    ipRules: Schema.Array(Schema.suspend(() => NetworkRuleSetIpRuleSchema)),
  });
const NetworkRuleSetIpRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filterName: Schema.String,
  action: Schema.optional(Schema.Literals(["Allow"])),
  ipMask: Schema.String,
});
const PrivateEndpointConnectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
  });
const PrivateEndpointConnectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateEndpoint: Schema.optional(
      Schema.suspend(() => PrivateEndpointSchema),
    ),
    privateLinkServiceConnectionState: Schema.suspend(
      () => PrivateLinkServiceConnectionStateSchema,
    ),
  });
const PrivateEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const PrivateLinkServiceConnectionStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.Literals([
      "Pending",
      "Approved",
      "Rejected",
      "Disconnected",
    ]),
    description: Schema.String,
    actionsRequired: Schema.optional(Schema.String),
  });
const EventHubPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  retentionTimeInDays: Schema.optional(Schema.Number),
  partitionCount: Schema.optional(Schema.Number),
  partitionIds: Schema.optional(Schema.Array(Schema.String)),
  path: Schema.optional(Schema.String),
  endpoint: Schema.optional(Schema.String),
});
const RoutingPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpoints: Schema.optional(Schema.suspend(() => RoutingEndpointsSchema)),
  routes: Schema.optional(
    Schema.Array(Schema.suspend(() => RoutePropertiesSchema)),
  ),
  fallbackRoute: Schema.optional(
    Schema.suspend(() => FallbackRoutePropertiesSchema),
  ),
  enrichments: Schema.optional(
    Schema.Array(Schema.suspend(() => EnrichmentPropertiesSchema)),
  ),
});
const RoutingEndpointsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceBusQueues: Schema.optional(
    Schema.Array(
      Schema.suspend(() => RoutingServiceBusQueueEndpointPropertiesSchema),
    ),
  ),
  serviceBusTopics: Schema.optional(
    Schema.Array(
      Schema.suspend(() => RoutingServiceBusTopicEndpointPropertiesSchema),
    ),
  ),
  eventHubs: Schema.optional(
    Schema.Array(Schema.suspend(() => RoutingEventHubPropertiesSchema)),
  ),
  storageContainers: Schema.optional(
    Schema.Array(Schema.suspend(() => RoutingStorageContainerPropertiesSchema)),
  ),
  cosmosDBSqlContainers: Schema.optional(
    Schema.Array(Schema.suspend(() => RoutingCosmosDBSqlApiPropertiesSchema)),
  ),
});
const RoutingServiceBusQueueEndpointPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    connectionString: Schema.optional(SensitiveOutputString),
    endpointUri: Schema.optional(Schema.String),
    entityPath: Schema.optional(Schema.String),
    authenticationType: Schema.optional(
      Schema.Literals(["keyBased", "identityBased"]),
    ),
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
    name: Schema.String,
    subscriptionId: Schema.optional(Schema.String),
    resourceGroup: Schema.optional(Schema.String),
  });
const ManagedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userAssignedIdentity: Schema.optional(Schema.String),
});
const RoutingServiceBusTopicEndpointPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    connectionString: Schema.optional(SensitiveOutputString),
    endpointUri: Schema.optional(Schema.String),
    entityPath: Schema.optional(Schema.String),
    authenticationType: Schema.optional(
      Schema.Literals(["keyBased", "identityBased"]),
    ),
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
    name: Schema.String,
    subscriptionId: Schema.optional(Schema.String),
    resourceGroup: Schema.optional(Schema.String),
  });
const RoutingEventHubPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    connectionString: Schema.optional(SensitiveOutputString),
    endpointUri: Schema.optional(Schema.String),
    entityPath: Schema.optional(Schema.String),
    authenticationType: Schema.optional(
      Schema.Literals(["keyBased", "identityBased"]),
    ),
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
    name: Schema.String,
    subscriptionId: Schema.optional(Schema.String),
    resourceGroup: Schema.optional(Schema.String),
  });
const RoutingStorageContainerPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    connectionString: Schema.optional(SensitiveOutputString),
    endpointUri: Schema.optional(Schema.String),
    authenticationType: Schema.optional(
      Schema.Literals(["keyBased", "identityBased"]),
    ),
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
    name: Schema.String,
    subscriptionId: Schema.optional(Schema.String),
    resourceGroup: Schema.optional(Schema.String),
    containerName: Schema.String,
    fileNameFormat: Schema.optional(Schema.String),
    batchFrequencyInSeconds: Schema.optional(Schema.Number),
    maxChunkSizeInBytes: Schema.optional(Schema.Number),
    encoding: Schema.optional(Schema.Literals(["Avro", "AvroDeflate", "JSON"])),
  });
const RoutingCosmosDBSqlApiPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    id: Schema.optional(Schema.String),
    subscriptionId: Schema.optional(Schema.String),
    resourceGroup: Schema.optional(Schema.String),
    endpointUri: Schema.String,
    authenticationType: Schema.optional(
      Schema.Literals(["keyBased", "identityBased"]),
    ),
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    databaseName: Schema.String,
    containerName: Schema.String,
    partitionKeyName: Schema.optional(Schema.String),
    partitionKeyTemplate: Schema.optional(Schema.String),
  });
const RoutePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  source: Schema.Literals([
    "Invalid",
    "DeviceMessages",
    "TwinChangeEvents",
    "DeviceLifecycleEvents",
    "DeviceJobLifecycleEvents",
    "DeviceConnectionStateEvents",
  ]),
  condition: Schema.optional(Schema.String),
  endpointNames: Schema.Array(Schema.String),
  isEnabled: Schema.Boolean,
});
const FallbackRoutePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.optional(Schema.String),
    source: Schema.Literals(["DeviceMessages"]),
    condition: Schema.optional(Schema.String),
    endpointNames: Schema.Array(Schema.String),
    isEnabled: Schema.Boolean,
  },
);
const EnrichmentPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  key: Schema.String,
  value: Schema.String,
  endpointNames: Schema.Array(Schema.String),
});
const StorageEndpointPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sasTtlAsIso8601: Schema.optional(Schema.String),
    connectionString: SensitiveOutputString,
    containerName: Schema.String,
    authenticationType: Schema.optional(
      Schema.Literals(["keyBased", "identityBased"]),
    ),
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
  });
const MessagingEndpointPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lockDurationAsIso8601: Schema.optional(Schema.String),
    ttlAsIso8601: Schema.optional(Schema.String),
    maxDeliveryCount: Schema.optional(Schema.Number),
  });
const CloudToDevicePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    maxDeliveryCount: Schema.optional(Schema.Number),
    defaultTtlAsIso8601: Schema.optional(Schema.String),
    feedback: Schema.optional(Schema.suspend(() => FeedbackPropertiesSchema)),
  },
);
const FeedbackPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lockDurationAsIso8601: Schema.optional(Schema.String),
  ttlAsIso8601: Schema.optional(Schema.String),
  maxDeliveryCount: Schema.optional(Schema.Number),
});
const IotHubLocationDescriptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    role: Schema.optional(Schema.Literals(["primary", "secondary"])),
  });
const IotHubSkuInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.Literals(["F1", "S1", "S2", "S3", "B1", "B2", "B3"]),
  tier: Schema.optional(Schema.Literals(["Free", "Standard", "Basic"])),
  capacity: Schema.optional(Schema.Number),
});
const ArmIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  tenantId: Schema.optional(Schema.String),
  type: Schema.optional(
    Schema.Literals([
      "SystemAssigned",
      "UserAssigned",
      "SystemAssigned, UserAssigned",
      "None",
    ]),
  ),
  userAssignedIdentities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => ArmUserIdentitySchema),
    ),
  ),
});
const ArmUserIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
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
const IotHubDescriptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const IotHubSkuDescriptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceType: Schema.optional(Schema.String),
  sku: Schema.suspend(() => IotHubSkuInfoSchema),
  capacity: Schema.suspend(() => IotHubCapacitySchema),
});
const IotHubCapacitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  minimum: Schema.optional(Schema.Number),
  maximum: Schema.optional(Schema.Number),
  default: Schema.optional(Schema.Number),
  scaleType: Schema.optional(Schema.Literals(["Automatic", "Manual", "None"])),
});
const EventHubConsumerGroupInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  });
const EventHubConsumerGroupNameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  });
const JobResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobId: Schema.optional(Schema.String),
  startTimeUtc: Schema.optional(Schema.String),
  endTimeUtc: Schema.optional(Schema.String),
  type: Schema.optional(
    Schema.Literals([
      "unknown",
      "export",
      "import",
      "backup",
      "readDeviceProperties",
      "writeDeviceProperties",
      "updateDeviceConfiguration",
      "rebootDevice",
      "factoryResetDevice",
      "firmwareUpdate",
    ]),
  ),
  status: Schema.optional(
    Schema.Literals([
      "unknown",
      "enqueued",
      "running",
      "completed",
      "failed",
      "cancelled",
    ]),
  ),
  failureReason: Schema.optional(Schema.String),
  statusMessage: Schema.optional(Schema.String),
  parentJobId: Schema.optional(Schema.String),
});
const IotHubQuotaMetricInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  currentValue: Schema.optional(Schema.Number),
  maxValue: Schema.optional(Schema.Number),
});
const EndpointHealthDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpointId: Schema.optional(Schema.String),
  healthStatus: Schema.optional(
    Schema.Literals(["unknown", "healthy", "degraded", "unhealthy", "dead"]),
  ),
  lastKnownError: Schema.optional(Schema.String),
  lastKnownErrorTime: Schema.optional(Schema.String),
  lastSuccessfulSendAttemptTime: Schema.optional(Schema.String),
  lastSendAttemptTime: Schema.optional(Schema.String),
});
const UserSubscriptionQuotaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  unit: Schema.optional(Schema.String),
  currentValue: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.suspend(() => NameSchema)),
});
const NameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  localizedValue: Schema.optional(Schema.String),
});
const RoutingMessageSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Schema.String),
  appProperties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  systemProperties: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
});
const RoutingTwinSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tags: Schema.optional(Schema.Unknown),
  properties: Schema.optional(
    Schema.Struct({
      desired: Schema.optional(Schema.Unknown),
      reported: Schema.optional(Schema.Unknown),
    }),
  ),
});
const MatchedRouteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => RoutePropertiesSchema)),
});
const TestRouteResultDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  compilationErrors: Schema.optional(
    Schema.Array(Schema.suspend(() => RouteCompilationErrorSchema)),
  ),
});
const RouteCompilationErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.Literals(["error", "warning"])),
  location: Schema.optional(Schema.suspend(() => RouteErrorRangeSchema)),
});
const RouteErrorRangeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start: Schema.optional(Schema.suspend(() => RouteErrorPositionSchema)),
  end: Schema.optional(Schema.suspend(() => RouteErrorPositionSchema)),
});
const RouteErrorPositionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  line: Schema.optional(Schema.Number),
  column: Schema.optional(Schema.Number),
});
const CertificateDescriptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => CertificatePropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
const CertificatePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subject: Schema.optional(Schema.String),
  expiry: Schema.optional(Schema.String),
  thumbprint: Schema.optional(Schema.String),
  isVerified: Schema.optional(Schema.Boolean),
  created: Schema.optional(Schema.String),
  updated: Schema.optional(Schema.String),
  certificate: Schema.optional(Schema.String),
});
const CertificatePropertiesWithNonceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String),
    expiry: Schema.optional(Schema.String),
    thumbprint: Schema.optional(Schema.String),
    isVerified: Schema.optional(Schema.Boolean),
    created: Schema.optional(Schema.String),
    updated: Schema.optional(Schema.String),
    verificationCode: Schema.optional(Schema.String),
    certificate: Schema.optional(Schema.String),
  });
const GroupIdInformationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.suspend(() => GroupIdInformationPropertiesSchema),
});
const GroupIdInformationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.optional(Schema.String),
    requiredMembers: Schema.optional(Schema.Array(Schema.String)),
    requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
  });

// Input Schema
export const CertificatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CertificatePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
      apiVersion: "2023-06-30",
    }),
  );
export type CertificatesCreateOrUpdateInput =
  typeof CertificatesCreateOrUpdateInput.Type;

// Output Schema
export const CertificatesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CertificatePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type CertificatesCreateOrUpdateOutput =
  typeof CertificatesCreateOrUpdateOutput.Type;

// The operation
/**
 * Upload the certificate to the IoT hub.
 *
 * Adds new or replaces existing certificate.
 *
 * @param If-Match - ETag of the Certificate. Do not specify for creating a brand new certificate. Required to update an existing certificate.
 */
export const CertificatesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CertificatesCreateOrUpdateInput,
    outputSchema: CertificatesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const CertificatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
      apiVersion: "2023-06-30",
    }),
  );
export type CertificatesDeleteInput = typeof CertificatesDeleteInput.Type;

// Output Schema
export const CertificatesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CertificatesDeleteOutput = typeof CertificatesDeleteOutput.Type;

// The operation
/**
 * Delete an X509 certificate.
 *
 * Deletes an existing X509 certificate or does nothing if it does not exist.
 *
 * @param If-Match - ETag of the Certificate.
 */
export const CertificatesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificatesDeleteInput,
  outputSchema: CertificatesDeleteOutput,
}));
// Input Schema
export const CertificatesGenerateVerificationCodeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/generateVerificationCode",
      apiVersion: "2023-06-30",
    }),
  );
export type CertificatesGenerateVerificationCodeInput =
  typeof CertificatesGenerateVerificationCodeInput.Type;

// Output Schema
export const CertificatesGenerateVerificationCodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CertificatePropertiesWithNonceSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type CertificatesGenerateVerificationCodeOutput =
  typeof CertificatesGenerateVerificationCodeOutput.Type;

// The operation
/**
 * Generate verification code for proof of possession flow.
 *
 * Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate.
 *
 * @param If-Match - ETag of the Certificate.
 */
export const CertificatesGenerateVerificationCode =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CertificatesGenerateVerificationCodeInput,
    outputSchema: CertificatesGenerateVerificationCodeOutput,
  }));
// Input Schema
export const CertificatesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
    apiVersion: "2023-06-30",
  }),
);
export type CertificatesGetInput = typeof CertificatesGetInput.Type;

// Output Schema
export const CertificatesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => CertificatePropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type CertificatesGetOutput = typeof CertificatesGetOutput.Type;

// The operation
/**
 * Get the certificate.
 *
 * Returns the certificate.
 */
export const CertificatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificatesGetInput,
  outputSchema: CertificatesGetOutput,
}));
// Input Schema
export const CertificatesListByIotHubInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates",
      apiVersion: "2023-06-30",
    }),
  );
export type CertificatesListByIotHubInput =
  typeof CertificatesListByIotHubInput.Type;

// Output Schema
export const CertificatesListByIotHubOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => CertificateDescriptionSchema)),
    ),
  });
export type CertificatesListByIotHubOutput =
  typeof CertificatesListByIotHubOutput.Type;

// The operation
/**
 * Get the certificate list.
 *
 * Returns the list of certificates.
 */
export const CertificatesListByIotHub = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CertificatesListByIotHubInput,
    outputSchema: CertificatesListByIotHubOutput,
  }),
);
// Input Schema
export const CertificatesVerifyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/verify",
      apiVersion: "2023-06-30",
    }),
  );
export type CertificatesVerifyInput = typeof CertificatesVerifyInput.Type;

// Output Schema
export const CertificatesVerifyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CertificatePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type CertificatesVerifyOutput = typeof CertificatesVerifyOutput.Type;

// The operation
/**
 * Verify certificate's private key possession.
 *
 * Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate.
 *
 * @param If-Match - ETag of the Certificate.
 */
export const CertificatesVerify = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CertificatesVerifyInput,
  outputSchema: CertificatesVerifyOutput,
}));
// Input Schema
export const IotHubManualFailoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iotHubName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    failoverRegion: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover",
      apiVersion: "2023-06-30",
      longRunning: {},
    }),
  );
export type IotHubManualFailoverInput = typeof IotHubManualFailoverInput.Type;

// Output Schema
export const IotHubManualFailoverOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IotHubManualFailoverOutput = typeof IotHubManualFailoverOutput.Type;

// The operation
/**
 * Manually initiate a failover for the IoT Hub to its secondary region
 *
 * Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover
 *
 * @param iotHubName - Name of the IoT hub to failover
 * @param resourceGroupName - Name of the resource group containing the IoT hub resource
 */
export const IotHubManualFailover = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubManualFailoverInput,
    outputSchema: IotHubManualFailoverOutput,
  }),
);
// Input Schema
export const IotHubResourceCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkNameAvailability",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceCheckNameAvailabilityInput =
  typeof IotHubResourceCheckNameAvailabilityInput.Type;

// Output Schema
export const IotHubResourceCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  });
export type IotHubResourceCheckNameAvailabilityOutput =
  typeof IotHubResourceCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Check if an IoT hub name is available
 *
 * Check if an IoT hub name is available.
 */
export const IotHubResourceCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceCheckNameAvailabilityInput,
    outputSchema: IotHubResourceCheckNameAvailabilityOutput,
  }));
// Input Schema
export const IotHubResourceCreateEventHubConsumerGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventHubEndpointName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => EventHubConsumerGroupNameSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceCreateEventHubConsumerGroupInput =
  typeof IotHubResourceCreateEventHubConsumerGroupInput.Type;

// Output Schema
export const IotHubResourceCreateEventHubConsumerGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  });
export type IotHubResourceCreateEventHubConsumerGroupOutput =
  typeof IotHubResourceCreateEventHubConsumerGroupOutput.Type;

// The operation
/**
 * Add a consumer group to an Event Hub-compatible endpoint in an IoT hub
 *
 * Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.
 *
 * @param eventHubEndpointName - The name of the Event Hub-compatible endpoint in the IoT hub.
 * @param name - The name of the consumer group to add.
 */
export const IotHubResourceCreateEventHubConsumerGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceCreateEventHubConsumerGroupInput,
    outputSchema: IotHubResourceCreateEventHubConsumerGroupOutput,
  }));
// Input Schema
export const IotHubResourceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => IotHubPropertiesSchema)),
    sku: Schema.suspend(() => IotHubSkuInfoSchema),
    identity: Schema.optional(Schema.suspend(() => ArmIdentitySchema)),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
      apiVersion: "2023-06-30",
      longRunning: {},
    }),
  );
export type IotHubResourceCreateOrUpdateInput =
  typeof IotHubResourceCreateOrUpdateInput.Type;

// Output Schema
export const IotHubResourceCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => IotHubPropertiesSchema)),
    sku: Schema.suspend(() => IotHubSkuInfoSchema),
    identity: Schema.optional(Schema.suspend(() => ArmIdentitySchema)),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type IotHubResourceCreateOrUpdateOutput =
  typeof IotHubResourceCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update the metadata of an IoT hub.
 *
 * Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. If certain properties are missing in the JSON, updating IoT Hub may cause these values to fallback to default, which may lead to unexpected behavior.
 *
 * @param If-Match - ETag of the IoT Hub. Do not specify for creating a brand new IoT Hub. Required to update an existing IoT Hub.
 */
export const IotHubResourceCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceCreateOrUpdateInput,
    outputSchema: IotHubResourceCreateOrUpdateOutput,
  }));
// Input Schema
export const IotHubResourceDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
      apiVersion: "2023-06-30",
      longRunning: {},
    }),
  );
export type IotHubResourceDeleteInput = typeof IotHubResourceDeleteInput.Type;

// Output Schema
export const IotHubResourceDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => IotHubPropertiesSchema)),
    sku: Schema.suspend(() => IotHubSkuInfoSchema),
    identity: Schema.optional(Schema.suspend(() => ArmIdentitySchema)),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type IotHubResourceDeleteOutput = typeof IotHubResourceDeleteOutput.Type;

// The operation
/**
 * Delete an IoT hub
 *
 * Delete an IoT hub.
 */
export const IotHubResourceDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceDeleteInput,
    outputSchema: IotHubResourceDeleteOutput,
  }),
);
// Input Schema
export const IotHubResourceDeleteEventHubConsumerGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventHubEndpointName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceDeleteEventHubConsumerGroupInput =
  typeof IotHubResourceDeleteEventHubConsumerGroupInput.Type;

// Output Schema
export const IotHubResourceDeleteEventHubConsumerGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IotHubResourceDeleteEventHubConsumerGroupOutput =
  typeof IotHubResourceDeleteEventHubConsumerGroupOutput.Type;

// The operation
/**
 * Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub
 *
 * Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.
 *
 * @param eventHubEndpointName - The name of the Event Hub-compatible endpoint in the IoT hub.
 * @param name - The name of the consumer group to delete.
 */
export const IotHubResourceDeleteEventHubConsumerGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceDeleteEventHubConsumerGroupInput,
    outputSchema: IotHubResourceDeleteEventHubConsumerGroupOutput,
  }));
// Input Schema
export const IotHubResourceExportDevicesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportBlobContainerUri: Schema.String,
    excludeKeys: Schema.Boolean,
    exportBlobName: Schema.optional(Schema.String),
    authenticationType: Schema.optional(
      Schema.Literals(["keyBased", "identityBased"]),
    ),
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
    includeConfigurations: Schema.optional(Schema.Boolean),
    configurationsBlobName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/exportDevices",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceExportDevicesInput =
  typeof IotHubResourceExportDevicesInput.Type;

// Output Schema
export const IotHubResourceExportDevicesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String),
    startTimeUtc: Schema.optional(Schema.String),
    endTimeUtc: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals([
        "unknown",
        "export",
        "import",
        "backup",
        "readDeviceProperties",
        "writeDeviceProperties",
        "updateDeviceConfiguration",
        "rebootDevice",
        "factoryResetDevice",
        "firmwareUpdate",
      ]),
    ),
    status: Schema.optional(
      Schema.Literals([
        "unknown",
        "enqueued",
        "running",
        "completed",
        "failed",
        "cancelled",
      ]),
    ),
    failureReason: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    parentJobId: Schema.optional(Schema.String),
  });
export type IotHubResourceExportDevicesOutput =
  typeof IotHubResourceExportDevicesOutput.Type;

// The operation
/**
 * Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities
 *
 * Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
 */
export const IotHubResourceExportDevices = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceExportDevicesInput,
    outputSchema: IotHubResourceExportDevicesOutput,
  }),
);
// Input Schema
export const IotHubResourceGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
    apiVersion: "2023-06-30",
  }),
);
export type IotHubResourceGetInput = typeof IotHubResourceGetInput.Type;

// Output Schema
export const IotHubResourceGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => IotHubPropertiesSchema)),
    sku: Schema.suspend(() => IotHubSkuInfoSchema),
    identity: Schema.optional(Schema.suspend(() => ArmIdentitySchema)),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type IotHubResourceGetOutput = typeof IotHubResourceGetOutput.Type;

// The operation
/**
 * Get the non-security related metadata of an IoT hub
 *
 * Get the non-security related metadata of an IoT hub.
 */
export const IotHubResourceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceGetInput,
  outputSchema: IotHubResourceGetOutput,
}));
// Input Schema
export const IotHubResourceGetEndpointHealthInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    iotHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routingEndpointsHealth",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceGetEndpointHealthInput =
  typeof IotHubResourceGetEndpointHealthInput.Type;

// Output Schema
export const IotHubResourceGetEndpointHealthOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => EndpointHealthDataSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type IotHubResourceGetEndpointHealthOutput =
  typeof IotHubResourceGetEndpointHealthOutput.Type;

// The operation
/**
 * Get the health for routing endpoints
 *
 * Get the health for routing endpoints.
 */
export const IotHubResourceGetEndpointHealth =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceGetEndpointHealthInput,
    outputSchema: IotHubResourceGetEndpointHealthOutput,
  }));
// Input Schema
export const IotHubResourceGetEventHubConsumerGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventHubEndpointName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceGetEventHubConsumerGroupInput =
  typeof IotHubResourceGetEventHubConsumerGroupInput.Type;

// Output Schema
export const IotHubResourceGetEventHubConsumerGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  });
export type IotHubResourceGetEventHubConsumerGroupOutput =
  typeof IotHubResourceGetEventHubConsumerGroupOutput.Type;

// The operation
/**
 * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub
 *
 * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
 *
 * @param eventHubEndpointName - The name of the Event Hub-compatible endpoint in the IoT hub.
 * @param name - The name of the consumer group to retrieve.
 */
export const IotHubResourceGetEventHubConsumerGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceGetEventHubConsumerGroupInput,
    outputSchema: IotHubResourceGetEventHubConsumerGroupOutput,
  }));
// Input Schema
export const IotHubResourceGetJobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs/{jobId}",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceGetJobInput = typeof IotHubResourceGetJobInput.Type;

// Output Schema
export const IotHubResourceGetJobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String),
    startTimeUtc: Schema.optional(Schema.String),
    endTimeUtc: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals([
        "unknown",
        "export",
        "import",
        "backup",
        "readDeviceProperties",
        "writeDeviceProperties",
        "updateDeviceConfiguration",
        "rebootDevice",
        "factoryResetDevice",
        "firmwareUpdate",
      ]),
    ),
    status: Schema.optional(
      Schema.Literals([
        "unknown",
        "enqueued",
        "running",
        "completed",
        "failed",
        "cancelled",
      ]),
    ),
    failureReason: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    parentJobId: Schema.optional(Schema.String),
  });
export type IotHubResourceGetJobOutput = typeof IotHubResourceGetJobOutput.Type;

// The operation
/**
 * Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry
 *
 * Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
 *
 * @param jobId - The job identifier.
 */
export const IotHubResourceGetJob = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceGetJobInput,
    outputSchema: IotHubResourceGetJobOutput,
  }),
);
// Input Schema
export const IotHubResourceGetKeysForKeyNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubKeys/{keyName}/listkeys",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceGetKeysForKeyNameInput =
  typeof IotHubResourceGetKeysForKeyNameInput.Type;

// Output Schema
export const IotHubResourceGetKeysForKeyNameOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.String,
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    rights: Schema.Literals([
      "RegistryRead",
      "RegistryWrite",
      "ServiceConnect",
      "DeviceConnect",
      "RegistryRead, RegistryWrite",
      "RegistryRead, ServiceConnect",
      "RegistryRead, DeviceConnect",
      "RegistryWrite, ServiceConnect",
      "RegistryWrite, DeviceConnect",
      "ServiceConnect, DeviceConnect",
      "RegistryRead, RegistryWrite, ServiceConnect",
      "RegistryRead, RegistryWrite, DeviceConnect",
      "RegistryRead, ServiceConnect, DeviceConnect",
      "RegistryWrite, ServiceConnect, DeviceConnect",
      "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect",
    ]),
  });
export type IotHubResourceGetKeysForKeyNameOutput =
  typeof IotHubResourceGetKeysForKeyNameOutput.Type;

// The operation
/**
 * Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security
 *
 * Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
 *
 * @param keyName - The name of the shared access policy.
 */
export const IotHubResourceGetKeysForKeyName =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceGetKeysForKeyNameInput,
    outputSchema: IotHubResourceGetKeysForKeyNameOutput,
  }));
// Input Schema
export const IotHubResourceGetQuotaMetricsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/quotaMetrics",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceGetQuotaMetricsInput =
  typeof IotHubResourceGetQuotaMetricsInput.Type;

// Output Schema
export const IotHubResourceGetQuotaMetricsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => IotHubQuotaMetricInfoSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type IotHubResourceGetQuotaMetricsOutput =
  typeof IotHubResourceGetQuotaMetricsOutput.Type;

// The operation
/**
 * Get the quota metrics for an IoT hub
 *
 * Get the quota metrics for an IoT hub.
 */
export const IotHubResourceGetQuotaMetrics =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceGetQuotaMetricsInput,
    outputSchema: IotHubResourceGetQuotaMetricsOutput,
  }));
// Input Schema
export const IotHubResourceGetStatsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubStats",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceGetStatsInput =
  typeof IotHubResourceGetStatsInput.Type;

// Output Schema
export const IotHubResourceGetStatsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalDeviceCount: Schema.optional(Schema.Number),
    enabledDeviceCount: Schema.optional(Schema.Number),
    disabledDeviceCount: Schema.optional(Schema.Number),
  });
export type IotHubResourceGetStatsOutput =
  typeof IotHubResourceGetStatsOutput.Type;

// The operation
/**
 * Get the statistics from an IoT hub
 *
 * Get the statistics from an IoT hub.
 */
export const IotHubResourceGetStats = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceGetStatsInput,
    outputSchema: IotHubResourceGetStatsOutput,
  }),
);
// Input Schema
export const IotHubResourceGetValidSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/skus",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceGetValidSkusInput =
  typeof IotHubResourceGetValidSkusInput.Type;

// Output Schema
export const IotHubResourceGetValidSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => IotHubSkuDescriptionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type IotHubResourceGetValidSkusOutput =
  typeof IotHubResourceGetValidSkusOutput.Type;

// The operation
/**
 * Get the list of valid SKUs for an IoT hub
 *
 * Get the list of valid SKUs for an IoT hub.
 */
export const IotHubResourceGetValidSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceGetValidSkusInput,
    outputSchema: IotHubResourceGetValidSkusOutput,
  }),
);
// Input Schema
export const IotHubResourceImportDevicesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputBlobContainerUri: Schema.String,
    outputBlobContainerUri: Schema.String,
    inputBlobName: Schema.optional(Schema.String),
    outputBlobName: Schema.optional(Schema.String),
    authenticationType: Schema.optional(
      Schema.Literals(["keyBased", "identityBased"]),
    ),
    identity: Schema.optional(Schema.suspend(() => ManagedIdentitySchema)),
    includeConfigurations: Schema.optional(Schema.Boolean),
    configurationsBlobName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/importDevices",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceImportDevicesInput =
  typeof IotHubResourceImportDevicesInput.Type;

// Output Schema
export const IotHubResourceImportDevicesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String),
    startTimeUtc: Schema.optional(Schema.String),
    endTimeUtc: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals([
        "unknown",
        "export",
        "import",
        "backup",
        "readDeviceProperties",
        "writeDeviceProperties",
        "updateDeviceConfiguration",
        "rebootDevice",
        "factoryResetDevice",
        "firmwareUpdate",
      ]),
    ),
    status: Schema.optional(
      Schema.Literals([
        "unknown",
        "enqueued",
        "running",
        "completed",
        "failed",
        "cancelled",
      ]),
    ),
    failureReason: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    parentJobId: Schema.optional(Schema.String),
  });
export type IotHubResourceImportDevicesOutput =
  typeof IotHubResourceImportDevicesOutput.Type;

// The operation
/**
 * Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities
 *
 * Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
 */
export const IotHubResourceImportDevices = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceImportDevicesInput,
    outputSchema: IotHubResourceImportDevicesOutput,
  }),
);
// Input Schema
export const IotHubResourceListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceListByResourceGroupInput =
  typeof IotHubResourceListByResourceGroupInput.Type;

// Output Schema
export const IotHubResourceListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => IotHubDescriptionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type IotHubResourceListByResourceGroupOutput =
  typeof IotHubResourceListByResourceGroupOutput.Type;

// The operation
/**
 * Get all the IoT hubs in a resource group
 *
 * Get all the IoT hubs in a resource group.
 */
export const IotHubResourceListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceListByResourceGroupInput,
    outputSchema: IotHubResourceListByResourceGroupOutput,
  }));
// Input Schema
export const IotHubResourceListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceListBySubscriptionInput =
  typeof IotHubResourceListBySubscriptionInput.Type;

// Output Schema
export const IotHubResourceListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => IotHubDescriptionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type IotHubResourceListBySubscriptionOutput =
  typeof IotHubResourceListBySubscriptionOutput.Type;

// The operation
/**
 * Get all the IoT hubs in a subscription
 *
 * Get all the IoT hubs in a subscription.
 */
export const IotHubResourceListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceListBySubscriptionInput,
    outputSchema: IotHubResourceListBySubscriptionOutput,
  }));
// Input Schema
export const IotHubResourceListEventHubConsumerGroupsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventHubEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceListEventHubConsumerGroupsInput =
  typeof IotHubResourceListEventHubConsumerGroupsInput.Type;

// Output Schema
export const IotHubResourceListEventHubConsumerGroupsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => EventHubConsumerGroupInfoSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type IotHubResourceListEventHubConsumerGroupsOutput =
  typeof IotHubResourceListEventHubConsumerGroupsOutput.Type;

// The operation
/**
 * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub
 *
 * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.
 *
 * @param eventHubEndpointName - The name of the Event Hub-compatible endpoint.
 */
export const IotHubResourceListEventHubConsumerGroups =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceListEventHubConsumerGroupsInput,
    outputSchema: IotHubResourceListEventHubConsumerGroupsOutput,
  }));
// Input Schema
export const IotHubResourceListJobsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceListJobsInput =
  typeof IotHubResourceListJobsInput.Type;

// Output Schema
export const IotHubResourceListJobsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => JobResponseSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type IotHubResourceListJobsOutput =
  typeof IotHubResourceListJobsOutput.Type;

// The operation
/**
 * Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry
 *
 * Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
 */
export const IotHubResourceListJobs = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceListJobsInput,
    outputSchema: IotHubResourceListJobsOutput,
  }),
);
// Input Schema
export const IotHubResourceListKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/listkeys",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceListKeysInput =
  typeof IotHubResourceListKeysInput.Type;

// Output Schema
export const IotHubResourceListKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.suspend(() => SharedAccessSignatureAuthorizationRuleSchema),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type IotHubResourceListKeysOutput =
  typeof IotHubResourceListKeysOutput.Type;

// The operation
/**
 * Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security
 *
 * Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
 */
export const IotHubResourceListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceListKeysInput,
    outputSchema: IotHubResourceListKeysOutput,
  }),
);
// Input Schema
export const IotHubResourceTestAllRoutesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iotHubName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routingSource: Schema.optional(
      Schema.Literals([
        "Invalid",
        "DeviceMessages",
        "TwinChangeEvents",
        "DeviceLifecycleEvents",
        "DeviceJobLifecycleEvents",
        "DeviceConnectionStateEvents",
      ]),
    ),
    message: Schema.optional(Schema.suspend(() => RoutingMessageSchema)),
    twin: Schema.optional(Schema.suspend(() => RoutingTwinSchema)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testall",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceTestAllRoutesInput =
  typeof IotHubResourceTestAllRoutesInput.Type;

// Output Schema
export const IotHubResourceTestAllRoutesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    routes: Schema.optional(
      Schema.Array(Schema.suspend(() => MatchedRouteSchema)),
    ),
  });
export type IotHubResourceTestAllRoutesOutput =
  typeof IotHubResourceTestAllRoutesOutput.Type;

// The operation
/**
 * Test all routes
 *
 * Test all routes configured in this Iot Hub
 *
 * @param iotHubName - IotHub to be tested
 * @param resourceGroupName - resource group which Iot Hub belongs to
 */
export const IotHubResourceTestAllRoutes = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceTestAllRoutesInput,
    outputSchema: IotHubResourceTestAllRoutesOutput,
  }),
);
// Input Schema
export const IotHubResourceTestRouteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iotHubName: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    message: Schema.optional(Schema.suspend(() => RoutingMessageSchema)),
    route: Schema.suspend(() => RoutePropertiesSchema),
    twin: Schema.optional(Schema.suspend(() => RoutingTwinSchema)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testnew",
      apiVersion: "2023-06-30",
    }),
  );
export type IotHubResourceTestRouteInput =
  typeof IotHubResourceTestRouteInput.Type;

// Output Schema
export const IotHubResourceTestRouteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.Literals(["undefined", "false", "true"])),
    details: Schema.optional(
      Schema.suspend(() => TestRouteResultDetailsSchema),
    ),
  });
export type IotHubResourceTestRouteOutput =
  typeof IotHubResourceTestRouteOutput.Type;

// The operation
/**
 * Test the new route
 *
 * Test the new route for this Iot Hub
 *
 * @param iotHubName - IotHub to be tested
 * @param resourceGroupName - resource group which Iot Hub belongs to
 */
export const IotHubResourceTestRoute = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceTestRouteInput,
    outputSchema: IotHubResourceTestRouteOutput,
  }),
);
// Input Schema
export const IotHubResourceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
      apiVersion: "2023-06-30",
      longRunning: {},
    }),
  );
export type IotHubResourceUpdateInput = typeof IotHubResourceUpdateInput.Type;

// Output Schema
export const IotHubResourceUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => IotHubPropertiesSchema)),
    sku: Schema.suspend(() => IotHubSkuInfoSchema),
    identity: Schema.optional(Schema.suspend(() => ArmIdentitySchema)),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type IotHubResourceUpdateOutput = typeof IotHubResourceUpdateOutput.Type;

// The operation
/**
 * Update an existing IoT Hubs tags.
 *
 * Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method
 *
 * @param resourceGroupName - Resource group identifier.
 * @param resourceName - Name of iot hub to update.
 */
export const IotHubResourceUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotHubResourceUpdateInput,
    outputSchema: IotHubResourceUpdateOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Devices/operations",
    apiVersion: "2023-06-30",
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
 * Lists all of the available IoT Hub REST API operations.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-06-30",
      longRunning: {},
    }),
  );
export type PrivateEndpointConnectionsDeleteInput =
  typeof PrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
  });
export type PrivateEndpointConnectionsDeleteOutput =
  typeof PrivateEndpointConnectionsDeleteOutput.Type;

// The operation
/**
 * Delete private endpoint connection
 *
 * Delete private endpoint connection with the specified name
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-06-30",
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
    properties: Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Get private endpoint connection
 *
 * Get private endpoint connection properties
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections",
      apiVersion: "2023-06-30",
    }),
  );
export type PrivateEndpointConnectionsListInput =
  typeof PrivateEndpointConnectionsListInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => PrivateEndpointConnectionSchema),
  );
export type PrivateEndpointConnectionsListOutput =
  typeof PrivateEndpointConnectionsListOutput.Type;

// The operation
/**
 * List private endpoint connections
 *
 * List private endpoint connection properties
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-06-30",
      longRunning: {},
    }),
  );
export type PrivateEndpointConnectionsUpdateInput =
  typeof PrivateEndpointConnectionsUpdateInput.Type;

// Output Schema
export const PrivateEndpointConnectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
  });
export type PrivateEndpointConnectionsUpdateOutput =
  typeof PrivateEndpointConnectionsUpdateOutput.Type;

// The operation
/**
 * Update private endpoint connection
 *
 * Update the status of a private endpoint connection with the specified name
 */
export const PrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateInput,
    outputSchema: PrivateEndpointConnectionsUpdateOutput,
  }));
// Input Schema
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources/{groupId}",
      apiVersion: "2023-06-30",
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
    properties: Schema.suspend(() => GroupIdInformationPropertiesSchema),
  });
export type PrivateLinkResourcesGetOutput =
  typeof PrivateLinkResourcesGetOutput.Type;

// The operation
/**
 * Get the specified private link resource
 *
 * Get the specified private link resource for the given IotHub
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources",
      apiVersion: "2023-06-30",
    }),
  );
export type PrivateLinkResourcesListInput =
  typeof PrivateLinkResourcesListInput.Type;

// Output Schema
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => GroupIdInformationSchema)),
    ),
  });
export type PrivateLinkResourcesListOutput =
  typeof PrivateLinkResourcesListOutput.Type;

// The operation
/**
 * List private link resources
 *
 * List private link resources for the given IotHub
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesListInput,
    outputSchema: PrivateLinkResourcesListOutput,
  }),
);
// Input Schema
export const ResourceProviderCommonGetSubscriptionQuotaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/usages",
      apiVersion: "2023-06-30",
    }),
  );
export type ResourceProviderCommonGetSubscriptionQuotaInput =
  typeof ResourceProviderCommonGetSubscriptionQuotaInput.Type;

// Output Schema
export const ResourceProviderCommonGetSubscriptionQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => UserSubscriptionQuotaSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ResourceProviderCommonGetSubscriptionQuotaOutput =
  typeof ResourceProviderCommonGetSubscriptionQuotaOutput.Type;

// The operation
/**
 * Get the number of iot hubs in the subscription
 *
 * Get the number of free and paid iot hubs in the subscription
 */
export const ResourceProviderCommonGetSubscriptionQuota =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceProviderCommonGetSubscriptionQuotaInput,
    outputSchema: ResourceProviderCommonGetSubscriptionQuotaOutput,
  }));
